import { StageStoryEntry } from '../types/game';
import { STORY_CHAPTER_1 } from './storyChapter1';
import { STORY_CHAPTER_2 } from './storyChapter2';
import { STORY_CHAPTER_3 } from './storyChapter3';
import { STORY_CHAPTER_4 } from './storyChapter4';
import { STORY_CHAPTER_5 } from './storyChapter5';
import { STORY_CHAPTER_6 } from './storyChapter6';
import { STORY_CHAPTER_7 } from './storyChapter7';
import { STORY_CHAPTER_8 } from './storyChapter8';
import { STORY_CHAPTER_9 } from './storyChapter9';
import { STORY_CHAPTER_10 } from './storyChapter10';
import { STORY_CHAPTER_11 } from './storyChapter11';
import { STORY_CHAPTER_12 } from './storyChapter12';
import { STORY_CHAPTER_13 } from './storyChapter13';
import { STORY_CHAPTER_14 } from './storyChapter14';
import { STORY_CHAPTER_15 } from './storyChapter15';
import { STORY_CHAPTER_16 } from './storyChapter16';
import { STORY_CHAPTER_17 } from './storyChapter17';
import { STORY_CHAPTER_18 } from './storyChapter18';
import { STORY_CHAPTER_19 } from './storyChapter19';
import { STORY_CHAPTER_20 } from './storyChapter20';

export const ALL_STAGE_STORIES: StageStoryEntry[] = [
  ...STORY_CHAPTER_1,
  ...STORY_CHAPTER_2,
  ...STORY_CHAPTER_3,
  ...STORY_CHAPTER_4,
  ...STORY_CHAPTER_5,
  ...STORY_CHAPTER_6,
  ...STORY_CHAPTER_7,
  ...STORY_CHAPTER_8,
  ...STORY_CHAPTER_9,
  ...STORY_CHAPTER_10,
  ...STORY_CHAPTER_11,
  ...STORY_CHAPTER_12,
  ...STORY_CHAPTER_13,
  ...STORY_CHAPTER_14,
  ...STORY_CHAPTER_15,
  ...STORY_CHAPTER_16,
  ...STORY_CHAPTER_17,
  ...STORY_CHAPTER_18,
  ...STORY_CHAPTER_19,
  ...STORY_CHAPTER_20,
];

export const STORY_BY_STAGE_UUID: Record<string, StageStoryEntry> = Object.fromEntries(
  ALL_STAGE_STORIES.map((entry) => [entry.stageId, entry])
);

export function getStageStory(stageUUID: string): StageStoryEntry | undefined {
  return STORY_BY_STAGE_UUID[stageUUID];
}
