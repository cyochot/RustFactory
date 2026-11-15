import {
  ALL_STAGES,
  PUZZLE_SOURCE_ORDER,
  PUZZLE_STAGE_ANCHORS,
  REGULAR_STAGE_SOURCE_ORDER,
} from '../src/data/stages';
import { compileAndSimulate } from '../src/engine/rustCompiler';

const failures: string[] = [];
const ids = new Set<string>();
const displayIds = new Set<string>();
const stagePositions = new Map<string, number>();

if (ALL_STAGES.length !== 384) {
  failures.push(`Expected 384 stages, found ${ALL_STAGES.length}.`);
}

const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

for (const [index, stage] of ALL_STAGES.entries()) {
  stagePositions.set(stage.displayId, index);
  if (ids.has(stage.id)) failures.push(`${stage.id}: duplicate stage ID.`);
  ids.add(stage.id);
  if (!uuidPattern.test(stage.id)) failures.push(`${stage.displayId}: stage ID is not a UUID.`);
  if (displayIds.has(stage.displayId)) failures.push(`${stage.displayId}: duplicate display ID.`);
  displayIds.add(stage.displayId);
  if (stage.index !== index + 1) {
    failures.push(`${stage.displayId}: expected sequential index ${index + 1}, found ${stage.index}.`);
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

for (let i = 1; i < REGULAR_STAGE_SOURCE_ORDER.length; i += 1) {
  const previous = stagePositions.get(REGULAR_STAGE_SOURCE_ORDER[i - 1]);
  const current = stagePositions.get(REGULAR_STAGE_SOURCE_ORDER[i]);
  if (previous === undefined || current === undefined || previous >= current) {
    failures.push(`Regular stage order changed near ${REGULAR_STAGE_SOURCE_ORDER[i]}.`);
  }
}

const expectedPuzzleOrderByAnchor = new Map<string, string[]>();
for (const puzzleDisplayId of PUZZLE_SOURCE_ORDER) {
  const anchor = PUZZLE_STAGE_ANCHORS[puzzleDisplayId];
  if (!anchor) {
    failures.push(`${puzzleDisplayId}: missing insertion anchor.`);
    continue;
  }
  if (!REGULAR_STAGE_SOURCE_ORDER.includes(anchor)) {
    failures.push(`${puzzleDisplayId}: anchor ${anchor} is not a regular stage.`);
    continue;
  }
  const anchorPosition = stagePositions.get(anchor);
  const puzzlePosition = stagePositions.get(puzzleDisplayId);
  if (anchorPosition === undefined || puzzlePosition === undefined || puzzlePosition <= anchorPosition) {
    failures.push(`${puzzleDisplayId}: not ordered after anchor ${anchor}.`);
  }
  const anchored = expectedPuzzleOrderByAnchor.get(anchor) ?? [];
  anchored.push(puzzleDisplayId);
  expectedPuzzleOrderByAnchor.set(anchor, anchored);
}

for (const [anchor, expectedOrder] of expectedPuzzleOrderByAnchor) {
  const actualOrder = ALL_STAGES
    .filter((stage) => PUZZLE_STAGE_ANCHORS[stage.displayId] === anchor)
    .map((stage) => stage.displayId);
  if (actualOrder.join(',') !== expectedOrder.join(',')) {
    failures.push(`${anchor}: puzzles do not preserve source order.`);
  }
}

if (Object.keys(PUZZLE_STAGE_ANCHORS).length !== PUZZLE_SOURCE_ORDER.length) {
  failures.push(`Expected an insertion anchor for each of ${PUZZLE_SOURCE_ORDER.length} puzzles.`);
}

const expectedStageOrder = REGULAR_STAGE_SOURCE_ORDER.flatMap((displayId) => [
  displayId,
  ...(expectedPuzzleOrderByAnchor.get(displayId) ?? []),
]);
const actualStageOrder = ALL_STAGES.map((stage) => stage.displayId);
if (actualStageOrder.join(',') !== expectedStageOrder.join(',')) {
  failures.push('Stages do not match regular curriculum order with puzzles immediately after their anchors.');
}

if (failures.length > 0) {
  console.error(`Stage verification failed with ${failures.length} issue(s):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log(`Verified ${ALL_STAGES.length} stages: UUID/display ID uniqueness, anchored order, solutions clear, starters do not.`);
}
