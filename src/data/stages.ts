import { StageDefinition } from '../types/game';
import { CHAPTER_1_STAGES } from './chapter1';
import { CHAPTER_2_STAGES } from './chapter2';
import { CHAPTER_3_STAGES } from './chapter3';
import { CHAPTER_4_STAGES } from './chapter4';
import { CHAPTER_5_STAGES } from './chapter5';
import { CHAPTER_6_STAGES } from './chapter6';
import { CHAPTER_7_STAGES } from './chapter7';
import { CHAPTER_8_STAGES } from './chapter8';
import { CHAPTER_9_STAGES } from './chapter9';
import { CHAPTER_10_STAGES } from './chapter10';
import { CHAPTER_11_STAGES } from './chapter11';
import { CHAPTER_12_STAGES } from './chapter12';
import { CHAPTER_13_STAGES } from './chapter13';
import { CHAPTER_14_STAGES } from './chapter14';
import { CHAPTER_15_STAGES } from './chapter15';
import { CHAPTER_16_STAGES } from './chapter16';
import { CHAPTER_17_STAGES } from './chapter17';
import { CHAPTER_18_STAGES } from './chapter18';
import { CHAPTER_19_STAGES } from './chapter19';
import { CHAPTER_20_STAGES } from './chapter20';

export const CHAPTER_STAGE_GROUPS: StageDefinition[][] = [
  CHAPTER_1_STAGES,
  CHAPTER_2_STAGES,
  CHAPTER_3_STAGES,
  CHAPTER_4_STAGES,
  CHAPTER_5_STAGES,
  CHAPTER_6_STAGES,
  CHAPTER_7_STAGES,
  CHAPTER_8_STAGES,
  CHAPTER_9_STAGES,
  CHAPTER_10_STAGES,
  CHAPTER_11_STAGES,
  CHAPTER_12_STAGES,
  CHAPTER_13_STAGES,
  CHAPTER_14_STAGES,
  CHAPTER_15_STAGES,
  CHAPTER_16_STAGES,
  CHAPTER_17_STAGES,
  CHAPTER_18_STAGES,
  CHAPTER_19_STAGES,
  CHAPTER_20_STAGES,
];

// Stage indexes preserve cross-chapter interleaving from the original release order.
const orderedStages = new Array<StageDefinition>(CHAPTER_STAGE_GROUPS.flat().length);
for (const stage of CHAPTER_STAGE_GROUPS.flat()) {
  orderedStages[stage.index - 1] = stage;
}

export const ALL_STAGES = orderedStages.filter(
  (stage): stage is StageDefinition => Boolean(stage)
);

export function getStageDisplayTitle(stage: StageDefinition): string {
  const displayPrefix = `${stage.displayId}. `;
  return stage.title.startsWith(displayPrefix)
    ? stage.title.slice(displayPrefix.length)
    : stage.title;
}
