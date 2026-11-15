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
  1: '第1章：事始め',
  2: '第2章：数当てゲームのプログラミング',
  3: '第3章：一般的なプログラミングの概念',
  4: '第4章：所有権を理解する',
  5: '第5章：構造体を使用して関係のあるデータを構造化する',
  6: '第6章：Enumとパターンマッチング',
  7: '第7章：パッケージ、クレート、モジュール',
  8: '第8章：一般的なコレクション',
  9: '第9章：エラー処理',
  10: '第10章：ジェネリック型、トレイト、ライフタイム',
  11: '第11章：自動テストを書く',
  12: '第12章：入出力CLIプロジェクト',
  13: '第13章：イテレータとクロージャ',
  14: '第14章：CargoとCrates.io',
  15: '第15章：スマートポインタ',
  16: '第16章：恐れるな！並行性',
  17: '第17章：Rustのオブジェクト指向プログラミング機能',
  18: '第18章：パターンとマッチング',
  19: '第19章：高度な機能',
  20: '第20章：マルチスレッドWebサーバ',
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
