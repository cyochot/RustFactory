import { ALL_STAGES } from '../src/data/stages';
import { compileAndSimulate } from '../src/engine/rustCompiler';

const failures: string[] = [];
const ids = new Set<string>();

if (ALL_STAGES.length !== 384) {
  failures.push(`Expected 384 stages, found ${ALL_STAGES.length}.`);
}

for (const [index, stage] of ALL_STAGES.entries()) {
  if (ids.has(stage.id)) failures.push(`${stage.id}: duplicate stage ID.`);
  ids.add(stage.id);
  if (stage.index !== index + 1) {
    failures.push(`${stage.id}: expected sequential index ${index + 1}, found ${stage.index}.`);
  }

  const solution = compileAndSimulate(stage, stage.solutionCode);
  if (!solution.ok || !solution.cleared) {
    const lastSnapshot = solution.snapshots.at(-1);
    const positions = lastSnapshot?.threads
      .map((thread) => `${thread.label}=(${thread.x},${thread.y})`)
      .join(', ');
    failures.push(
      `${stage.id}: solution failed (${solution.failureReason ?? solution.diagnostics[0]?.title ?? 'not cleared'}${positions ? `; ${positions} at tick ${lastSnapshot?.tick}` : ''}).`
    );
  }

  const starter = compileAndSimulate(stage, stage.starterCode);
  if (starter.cleared) failures.push(`${stage.id}: starter code clears the stage.`);
}

if (failures.length > 0) {
  console.error(`Stage verification failed with ${failures.length} issue(s):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log(`Verified all ${ALL_STAGES.length} stages: unique IDs, sequential order, solutions clear, starters do not.`);
}
