import { ALL_STAGES, CHAPTER_STAGE_GROUPS } from '../src/data/stages';
import { ALL_STAGE_STORIES } from '../src/data/storyScripts';
import { compileAndSimulate } from '../src/engine/rustCompiler';

const failures: string[] = [];
const ids = new Set<string>();
const displayIds = new Set<string>();
const storyIds = new Set<string>();
const chapterFirstAppearance: number[] = [];
const stagesByChapter = new Map<number, typeof ALL_STAGES>();

if (ALL_STAGES.length !== 400) {
  failures.push(`Expected 400 stages, found ${ALL_STAGES.length}.`);
}

const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

for (const [index, stage] of ALL_STAGES.entries()) {
  if (ids.has(stage.id)) failures.push(`${stage.id}: duplicate stage UUID.`);
  ids.add(stage.id);
  if (!uuidPattern.test(stage.id)) failures.push(`${stage.displayId}: stage ID is not a UUID.`);
  if (displayIds.has(stage.displayId)) failures.push(`${stage.displayId}: duplicate display ID.`);
  displayIds.add(stage.displayId);
  if (stage.index !== index + 1) {
    failures.push(`${stage.displayId}: expected sequential index ${index + 1}, found ${stage.index}.`);
  }
  if (!stage.title.startsWith(`${stage.displayId}. `)) {
    failures.push(`${stage.displayId}: title prefix does not match its display ID.`);
  }
  const chapterStages = stagesByChapter.get(stage.chapter) ?? [];
  chapterStages.push(stage);
  stagesByChapter.set(stage.chapter, chapterStages);
  if (chapterFirstAppearance.at(-1) !== stage.chapter && !chapterFirstAppearance.includes(stage.chapter)) {
    chapterFirstAppearance.push(stage.chapter);
  }

  const solution = compileAndSimulate(stage, stage.solutionCode);
  if (!solution.ok || !solution.cleared) {
    const lastSnapshot = solution.snapshots.at(-1);
    const positions = lastSnapshot?.threads
      .map((thread) => `${thread.label}=(${thread.x},${thread.y})`)
      .join(', ');
    failures.push(
      `${stage.displayId}: solution failed (${solution.failureReason ?? solution.diagnostics[0]?.title ?? 'not cleared'}${positions ? `; ${positions} at tick ${lastSnapshot?.tick}` : ''}).`
    );
  }

  const starter = compileAndSimulate(stage, stage.starterCode);
  if (starter.cleared) failures.push(`${stage.displayId}: starter code clears the stage.`);
}

if (stagesByChapter.size !== 20) {
  failures.push(`Expected 20 chapters, found ${stagesByChapter.size}.`);
}

for (let chapter = 1; chapter <= 20; chapter += 1) {
  const chapterStages = stagesByChapter.get(chapter) ?? [];
  if (chapterStages.length === 0) {
    failures.push(`Chapter ${chapter} has no stages.`);
    continue;
  }

  for (const [index, stage] of chapterStages.entries()) {
    const expectedDisplayId = `${chapter}-${index + 1}`;
    if (stage.displayId !== expectedDisplayId) {
      failures.push(`${stage.id}: expected chapter-local ID ${expectedDisplayId}, found ${stage.displayId}.`);
    }
    if (stage.chapterTitle.match(/^第(\d+)章/)?.[1] !== String(chapter)) {
      failures.push(`${stage.displayId}: chapter title does not match chapter ${chapter}.`);
    }
    for (const value of [stage.title, stage.topicTag, stage.kurumiIntro, stage.bookSectionTitle, stage.bookSummary]) {
      for (const match of value.matchAll(/第(\d+)章/g)) {
        if (match[1] !== String(chapter)) {
          failures.push(`${stage.displayId}: chapter text contains stale 第${match[1]}章 reference.`);
        }
      }
    }
  }
}

if (chapterFirstAppearance.join(',') !== Array.from({ length: 20 }, (_, i) => i + 1).join(',')) {
  failures.push(`Chapter first-appearance order is ${chapterFirstAppearance.join(',')}, expected 1..20.`);
}

if (CHAPTER_STAGE_GROUPS.length !== 20) {
  failures.push(`Expected 20 chapter source groups, found ${CHAPTER_STAGE_GROUPS.length}.`);
}

const groupedStages = CHAPTER_STAGE_GROUPS.flat();
if (groupedStages.length !== ALL_STAGES.length || new Set(groupedStages.map((stage) => stage.id)).size !== ALL_STAGES.length) {
  failures.push('Chapter source groups do not contain each stage exactly once.');
}

for (const [index, chapterStages] of CHAPTER_STAGE_GROUPS.entries()) {
  for (let stageIndex = 1; stageIndex < chapterStages.length; stageIndex += 1) {
    if (chapterStages[stageIndex - 1].index >= chapterStages[stageIndex].index) {
      failures.push(`Chapter ${index + 1}: source definitions are not in release order.`);
    }
  }
  for (const stage of chapterStages) {
    if (stage.chapter !== index + 1) {
      failures.push(`${stage.id}: chapter source group ${index + 1} contains chapter ${stage.chapter}.`);
    }
  }
}

for (const story of ALL_STAGE_STORIES) {
  if (storyIds.has(story.stageId)) failures.push(`${story.stageId}: duplicate story reference.`);
  storyIds.add(story.stageId);
  if (!ids.has(story.stageId)) failures.push(`${story.stageId}: story references an unknown stage UUID.`);
  if (story.intro.length === 0 || story.outro.length === 0) {
    failures.push(`${story.stageId}: story must have at least one intro and outro line.`);
  }
}

for (const stage of ALL_STAGES) {
  if (!storyIds.has(stage.id)) failures.push(`${stage.id}: missing story reference.`);
}

const prerequisiteFeatures: Array<{ name: string; regex: RegExp }> = [
  { name: 'println!', regex: /println!/ },
  { name: 'let', regex: /\blet\s+[a-z_]/ },
  { name: 'let mut', regex: /\blet\s+mut\b/ },
  { name: 'const', regex: /\bconst\s+[A-Z_]/ },
  { name: 'shadowing', regex: /\blet\s+([a-z_][a-zA-Z0-9_]*)\b[\s\S]*\blet\s+\1\b/ },
  { name: 'tuple destructuring', regex: /let\s*\([^)]+,[^)]+\)\s*=/ },
  { name: 'array literal', regex: /\[\s*\d+\s*,/ },
  { name: 'fn definition', regex: /\bfn\s+(?!main\b)[a-z_]/ },
  { name: 'if/else', regex: /\bif\s+(?!let\b)/ },
  { name: 'else if', regex: /\belse\s+if\b/ },
  { name: 'loop', regex: /\bloop\s*\{/ },
  { name: 'while', regex: /\bwhile\s+/ },
  { name: 'for', regex: /\bfor\s+[a-zA-Z_]+\s+in\b/ },
  { name: 'is_gate_open()', regex: /\bis_gate_open\b/ },
  { name: 'at_goal()', regex: /\bat_goal\b/ },
  { name: 'add_vault()', regex: /\badd_vault\b/ },
  { name: 'grab_core()/deliver()', regex: /\b(grab_core|deliver)\b/ },
  { name: '& / &mut borrow', regex: /&mut\s+[a-z_]|&[a-z_]+/ },
  { name: 'slice / conveyor_batch()', regex: /inspect_slice|conveyor_batch/ },
  { name: 'struct', regex: /\bstruct\s+[A-Z]/ },
  { name: 'impl', regex: /\bimpl\b/ },
  { name: '::new()', regex: /::new\(/ },
  { name: '&mut self', regex: /&mut\s+self\b/ },
  { name: 'enum', regex: /\benum\s+[A-Z]/ },
  { name: 'match', regex: /\bmatch\s+/ },
  { name: 'Option/Some/None', regex: /\b(Option|Some|None)\b/ },
  { name: 'if let', regex: /\bif\s+let\b/ },
  { name: 'Ordering / try_dial()', regex: /\b(Ordering::|try_dial)\b/ },
  { name: 'mod / pub', regex: /\bmod\s+[a-z_]/ },
  { name: 'use', regex: /\buse\s+[a-z_]/ },
  { name: 'Vec / vec!', regex: /\b(vec!|Vec::)/ },
  { name: 'String::', regex: /\bString::/ },
  { name: 'HashMap::', regex: /\bHashMap::/ },
  { name: '.unwrap_or()', regex: /\.unwrap_or\(/ },
  { name: 'Result / read_part()', regex: /\b(Result<|read_part)/ },
  { name: '? operator', regex: /\?\s*;/ },
  { name: 'generics <T>', regex: /<[A-Z][a-zA-Z]*(?:,\s*[A-Z][a-zA-Z]*)*>/ },
  { name: 'trait', regex: /\btrait\s+[A-Z]/ },
  { name: "lifetime <'a>", regex: /<'a>/ },
  { name: '#[test]', regex: /#\[test\]/ },
  { name: 'cli_args / env_flag / eprintln!', regex: /\b(cli_args|env_flag|eprintln!)\b/ },
  { name: '.iter()', regex: /\.iter\(\)/ },
  { name: '#[cfg(...)]', regex: /#\[cfg\(/ },
  { name: 'Box / Rc / RefCell', regex: /\b(Box::|Rc::|RefCell::)/ },
  { name: 'thread / mpsc / Arc / Mutex', regex: /\b(thread::spawn|mpsc::|Arc::|Mutex::)/ },
  { name: 'unsafe / macro_rules!', regex: /\bunsafe\b|macro_rules!/ },
];

for (const feat of prerequisiteFeatures) {
  let firstGuidedIndex = Number.POSITIVE_INFINITY;
  const unlearnedEmpty: string[] = [];

  for (const stage of ALL_STAGES) {
    const trimmedStarter = stage.starterCode.trim();
    const isEmptyStarter = trimmedStarter === 'fn main() {\n    \n}' || trimmedStarter === '';
    if (!feat.regex.test(stage.solutionCode)) continue;

    if (!isEmptyStarter || feat.regex.test(stage.starterCode)) {
      if (stage.index < firstGuidedIndex) firstGuidedIndex = stage.index;
    } else if (stage.index < firstGuidedIndex) {
      unlearnedEmpty.push(stage.displayId);
    }
  }

  if (unlearnedEmpty.length > 0) {
    failures.push(
      `Prerequisite violation for "${feat.name}": used in empty starter stage(s) [${unlearnedEmpty.join(', ')}] before first guided introduction.`
    );
  }
}

if (failures.length > 0) {
  console.error(`Stage verification failed with ${failures.length} issue(s):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log(`Verified ${ALL_STAGES.length} stages across 20 chapters: stable UUIDs, chapter-local IDs, prerequisite order, story references, solutions, and starters.`);
}
