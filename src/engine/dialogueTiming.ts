import { TickSnapshot } from '../types/game';

export interface PrintDialogueTiming {
  revealMs: number;
  holdMs: number;
  fadeMs: number;
  totalMs: number;
}

export function getPrintDialogueTiming(
  text: string,
  speedMultiplier: 1 | 2
): PrintDialogueTiming {
  const charCount = Array.from(text).length;
  const reveal1x = Math.min(2000, Math.max(220, charCount * 45));
  const hold1x = 520;
  const fade1x = 120;
  const scale = speedMultiplier === 2 ? 0.5 : 1;
  const revealMs = Math.round(reveal1x * scale);
  const holdMs = Math.round(hold1x * scale);
  const fadeMs = Math.round(fade1x * scale);
  return {
    revealMs,
    holdMs,
    fadeMs,
    totalMs: revealMs + holdMs + fadeMs,
  };
}

export function getSnapshotPrintWaitMs(
  snap: TickSnapshot | undefined,
  speedMultiplier: 1 | 2
): number {
  if (!snap) return 0;
  let maxMs = 0;
  for (const cue of snap.cues) {
    if (cue.kind === 'print' && cue.text !== undefined) {
      maxMs = Math.max(
        maxMs,
        getPrintDialogueTiming(cue.text, speedMultiplier).totalMs
      );
    }
  }
  return maxMs;
}

export function hasThreadMovement(
  snapA: TickSnapshot | undefined,
  snapB: TickSnapshot | undefined
): boolean {
  if (!snapA || !snapB) return false;
  for (const thA of snapA.threads) {
    const thB = snapB.threads.find((b) => b.id === thA.id);
    if (!thB) return true;
    if (thA.x !== thB.x || thA.y !== thB.y) return true;
  }
  if (snapB.threads.length !== snapA.threads.length) return true;
  return false;
}
