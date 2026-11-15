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

export const STORY_CHAPTER_TITLES: Record<number, string> = {
  1: '第1章：工房オープンとご近所あいさつ',
  2: '第2章：お祭り屋台の準備で大わらわ',
  3: '第3章：福引き大会のあたりくじ騒動',
  4: '第4章：広場のからくり大時計',
  5: '第5章：歯車町みんなでお祭り本番！',
  6: '第6章：ひみつの鍵とジャム缶騒動',
  7: '第7章：おつかい三昧の春らんまん',
  8: '第8章：迷子の荷物とひとりじめ事件',
  9: '第9章：特製スタンプと名物メモ帳',
  10: '第10章：お天気くるくる商店街',
  11: '第11章：お片づけ大作戦と秘密の棚',
  12: '第12章：食べすぎ注意のメニュー表',
  13: '第13章：うっかり防止の安全マット',
  14: '第14章：なんでも運べる魔法のトレイ',
  15: '第15章：お味見チェックと合格スタンプ',
  16: '第16章：探偵ごっこと迷子の手紙',
  17: '第17章：くるくる仕分けとティータイム',
  18: '第18章：お急ぎ便とかけっこ勝負',
  19: '第19章：みんなで回そう回覧板！',
  20: '第20章：ふたりの息ぴったり大作戦',
};

export function getStoryChapterTitle(chapter: number): string {
  return STORY_CHAPTER_TITLES[chapter] ?? `第${chapter}章`;
}

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
