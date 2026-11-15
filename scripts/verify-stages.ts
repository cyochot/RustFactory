import { ALL_STAGES, CHAPTER_STAGE_GROUPS } from '../src/data/stages';
import { ALL_STAGE_STORIES } from '../src/data/storyScripts';
import { compileAndSimulate } from '../src/engine/rustCompiler';

const failures: string[] = [];
const ids = new Set<string>();
const displayIds = new Set<string>();
const storyIds = new Set<string>();
const chapterFirstAppearance: number[] = [];
const stagesByChapter = new Map<number, typeof ALL_STAGES>();

if (ALL_STAGES.length !== 384) {
  failures.push(`Expected 384 stages, found ${ALL_STAGES.length}.`);
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
}

if (failures.length > 0) {
  console.error(`Stage verification failed with ${failures.length} issue(s):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log(`Verified ${ALL_STAGES.length} stages across 20 chapters: stable UUIDs, chapter-local IDs, story references, solutions, and starters.`);
}
