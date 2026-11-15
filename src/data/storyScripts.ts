import { StageStoryEntry } from '../types/game';
import { STORY_ACT1 } from './storyAct1';
import { STORY_ACT2 } from './storyAct2';
import { STORY_ACT3 } from './storyAct3';
import { STORY_ACT4 } from './storyAct4';
import { STORY_ACT5 } from './storyAct5';

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
  ...STORY_ACT1,
  ...STORY_ACT2,
  ...STORY_ACT3,
  ...STORY_ACT4,
  ...STORY_ACT5,
];

export const STORY_BY_STAGE_UUID: Record<string, StageStoryEntry> = Object.fromEntries(
  ALL_STAGE_STORIES.map((entry) => [entry.stageId, entry])
);

export function getStageStory(stageUUID: string): StageStoryEntry | undefined {
  return STORY_BY_STAGE_UUID[stageUUID];
}
