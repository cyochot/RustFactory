import { StageStoryEntry } from '../types/game';
import { STORY_ACT1 } from './storyAct1';
import { STORY_ACT2 } from './storyAct2';
import { STORY_ACT3 } from './storyAct3';
import { STORY_ACT4 } from './storyAct4';
import { STORY_ACT5 } from './storyAct5';

export const STORY_ACT_META: Array<{
  act: 1 | 2 | 3 | 4 | 5;
  title: string;
  chaptersLabel: string;
}> = [
  {
    act: 1,
    title: '第1幕：ドタバタ工房オープン！',
    chaptersLabel: '第1話圏（1〜4章）',
  },
  {
    act: 2,
    title: '第2幕：商店街の珍騒動つづく',
    chaptersLabel: '第2話圏（5〜8章）',
  },
  {
    act: 3,
    title: '第3幕：雨の日も晴れの日も大忙し',
    chaptersLabel: '第3話圏（9〜12章）',
  },
  {
    act: 4,
    title: '第4幕：ふたり揃えばお祭り気分',
    chaptersLabel: '第4話圏（13〜16章）',
  },
  {
    act: 5,
    title: '第5幕：歯車町わいわい大騒ぎ！',
    chaptersLabel: '第5話圏（17〜20章）',
  },
];

export const STORY_CHAPTER_TITLES: Record<number, string> = {
  1: '第1章：工房オープンとご近所あいさつ',
  2: '第2章：ひみつの鍵とジャム缶騒動',
  3: '第3章：おつかい三昧の春らんまん',
  4: '第4章：迷子の荷物とひとりじめ事件',
  5: '第5章：特製スタンプと名物メモ帳',
  6: '第6章：お天気くるくる商店街',
  7: '第7章：お片づけ大作戦と秘密の棚',
  8: '第8章：食べすぎ注意のメニュー表',
  9: '第9章：うっかり防止の安全マット',
  10: '第10章：なんでも運べる魔法のトレイ',
  11: '第11章：お味見チェックと合格スタンプ',
  12: '第12章：探偵ごっこと迷子の手紙',
  13: '第13章：くるくる仕分けとティータイム',
  14: '第14章：お急ぎ便とかけっこ勝負',
  15: '第15章：みんなで回そう回覧板！',
  16: '第16章：ふたりの息ぴったり大作戦',
  17: '第17章：お祭り屋台の準備で大わらわ',
  18: '第18章：福引き大会のあたりくじ騒動',
  19: '第19章：広場のからくり大時計',
  20: '第20章：歯車町みんなでお祭り本番！',
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

export const STORY_BY_STAGE_ID: Record<string, StageStoryEntry> = Object.fromEntries(
  ALL_STAGE_STORIES.map((entry) => [entry.stageId, entry])
);

export function getStageStory(stageId: string): StageStoryEntry | undefined {
  return STORY_BY_STAGE_ID[stageId];
}
