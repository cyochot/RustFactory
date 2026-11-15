import { StageDefinition } from '../types/game';
import { ACT1_STAGES } from './stagesAct1';
import { ACT2_STAGES } from './stagesAct2';
import { ACT3_STAGES } from './stagesAct3';
import { ACT4_STAGES } from './stagesAct4';
import { ACT5_STAGES } from './stagesAct5';
import { PUZZLE_ACT1_STAGES } from './puzzleAct1';
import { PUZZLE_ACT2_STAGES } from './puzzleAct2';
import { PUZZLE_ACT3_STAGES } from './puzzleAct3';
import { PUZZLE_ACT4_STAGES } from './puzzleAct4';
import { PUZZLE_ACT5_STAGES } from './puzzleAct5';

const REGULAR_STAGES: StageDefinition[] = [
  ...ACT1_STAGES,
  ...ACT2_STAGES,
  ...ACT3_STAGES,
  ...ACT4_STAGES,
  ...ACT5_STAGES,
];

const PUZZLE_STAGES: StageDefinition[] = [
  ...PUZZLE_ACT1_STAGES,
  ...PUZZLE_ACT2_STAGES,
  ...PUZZLE_ACT3_STAGES,
  ...PUZZLE_ACT4_STAGES,
  ...PUZZLE_ACT5_STAGES,
];

const PUZZLE_INSERTION_ANCHORS: Record<string, string> = {
  '1-9': '1-4', '1-10': '1-4', '1-11': '1-4', '1-12': '1-4', '1-13': '1-4', '1-14': '1-5', '1-15': '1-4', '1-16': '1-5',
  '2-5': '2-2', '2-6': '2-2', '2-7': '3-6', '2-8': '3-6',
  '3-25': '3-7', '3-26': '3-2', '3-27': '3-2', '3-28': '3-10', '3-29': '3-22',
  '3-30': '3-23', '3-31': '3-23', '3-32': '3-23', '3-33': '3-23', '3-34': '3-23', '3-35': '3-13', '3-36': '3-14', '3-37': '3-13', '3-38': '3-16', '3-39': '3-23', '3-40': '3-19', '3-41': '3-21',
  '3-42': '3-23', '3-43': '3-23', '3-44': '3-23', '3-45': '3-23', '3-46': '3-23', '3-47': '3-23', '3-48': '3-24',
  '4-13': '4-4', '4-14': '4-8', '4-15': '4-3', '4-16': '4-4', '4-17': '4-8', '4-18': '4-6', '4-19': '4-8', '4-20': '4-11', '4-21': '4-8', '4-22': '4-8', '4-23': '4-11', '4-24': '4-12',
  '5-9': '5-5', '5-10': '5-5', '5-11': '5-5', '5-12': '5-3', '5-13': '5-5', '5-14': '5-5', '5-15': '5-7', '5-16': '5-8',
  '6-13': '6-5', '6-14': '6-5', '6-15': '6-11', '6-16': '6-7', '6-17': '6-7', '6-18': '6-2', '6-19': '6-3', '6-20': '6-10', '6-21': '6-5', '6-22': '6-11', '6-23': '6-12', '6-24': '6-12',
  '7-9': '7-2', '7-10': '7-6', '7-11': '7-7', '7-12': '7-2', '7-13': '7-6', '7-14': '7-2', '7-15': '7-8', '7-16': '7-8',
  '8-13': '8-4', '8-14': '8-3', '8-15': '8-5', '8-16': '8-7', '8-17': '8-9', '8-18': '8-11', '8-19': '8-8', '8-20': '8-11', '8-21': '8-11', '8-22': '8-4', '8-23': '8-11', '8-24': '8-11',
  '9-13': '9-1', '9-14': '9-5', '9-15': '9-9', '9-16': '9-8', '9-17': '9-9', '9-18': '9-11', '9-19': '9-7', '9-20': '9-11', '9-21': '9-8', '9-22': '9-11', '9-23': '9-8', '9-24': '9-12',
  '10-13': '10-2', '10-14': '10-3', '10-15': '10-6', '10-16': '10-7', '10-17': '10-10', '10-18': '10-11', '10-19': '10-8', '10-20': '10-11', '10-21': '10-8', '10-22': '10-11', '10-23': '10-8', '10-24': '10-12',
  '11-9': '11-1', '11-10': '11-3', '11-11': '11-7', '11-12': '11-5', '11-13': '11-6', '11-14': '11-4', '11-15': '11-8', '11-16': '11-8',
  '12-9': '12-1', '12-10': '12-2', '12-11': '12-6', '12-12': '12-3', '12-13': '12-7', '12-14': '12-7', '12-15': '12-7', '12-16': '12-8',
  '13-9': '13-7', '13-10': '13-4', '13-11': '13-6', '13-12': '13-2', '13-13': '13-3', '13-14': '13-7', '13-15': '13-4', '13-16': '13-8',
  '14-5': '14-1', '14-6': '14-2', '14-7': '14-3', '14-8': '14-4',
  '15-13': '15-2', '15-14': '15-4', '15-15': '15-5', '15-16': '15-11', '15-17': '15-11', '15-18': '15-11', '15-19': '15-11', '15-20': '15-7', '15-21': '15-11', '15-22': '15-7', '15-23': '15-11', '15-24': '15-12',
  '16-17': '16-3', '16-18': '16-3', '16-19': '16-4', '16-20': '16-8', '16-21': '16-7', '16-22': '16-11', '16-23': '16-12', '16-24': '16-3', '16-25': '16-14', '16-26': '16-8', '16-27': '16-3', '16-28': '16-15', '16-29': '16-11', '16-30': '16-7', '16-31': '16-15', '16-32': '16-16',
  ...Object.fromEntries([17, 18, 19, 20].flatMap((chapter) => [
    [`${chapter}-9`, '3-1'], [`${chapter}-10`, '1-4'], [`${chapter}-11`, '1-4'], [`${chapter}-12`, '3-23'], [`${chapter}-13`, '3-14'], [`${chapter}-14`, '1-4'],
  ])),
};

export const PUZZLE_STAGE_ANCHORS = PUZZLE_INSERTION_ANCHORS;
export const PUZZLE_SOURCE_ORDER = PUZZLE_STAGES.map((stage) => stage.displayId);
export const REGULAR_STAGE_SOURCE_ORDER = REGULAR_STAGES.map((stage) => stage.displayId);

const puzzlesByAnchor = new Map<string, StageDefinition[]>();
for (const puzzle of PUZZLE_STAGES) {
  const anchor = PUZZLE_INSERTION_ANCHORS[puzzle.displayId];
  if (!anchor) continue;
  const anchoredPuzzles = puzzlesByAnchor.get(anchor) ?? [];
  anchoredPuzzles.push(puzzle);
  puzzlesByAnchor.set(anchor, anchoredPuzzles);
}

const interleavedStages = REGULAR_STAGES.flatMap((stage) => [
  stage,
  ...(puzzlesByAnchor.get(stage.displayId) ?? []),
]);

export const ALL_STAGES: StageDefinition[] = interleavedStages.map((stage, index) => ({
  ...stage,
  index: index + 1,
}));

export function getStageDisplayTitle(stage: StageDefinition): string {
  const legacyPrefix = `${stage.displayId}. `;
  return stage.title.startsWith(legacyPrefix)
    ? stage.title.slice(legacyPrefix.length)
    : stage.title;
}

export const ACT_META: Array<{
  act: 1 | 2 | 3 | 4 | 5;
  title: string;
  subtitle: string;
  chaptersLabel: string;
}> = [
  {
    act: 1,
    title: '第1幕：基本の歯車棟',
    subtitle: '順次実行・変数・分岐・ループ・所有権と借用',
    chaptersLabel: '第1章〜第4章',
  },
  {
    act: 2,
    title: '第2幕：設計図とデータ構造棟',
    subtitle: '構造体・enum・match・モジュール・コレクション',
    chaptersLabel: '第5章〜第8章',
  },
  {
    act: 3,
    title: '第3幕：堅牢性と抽象化棟',
    subtitle: 'エラー処理・ジェネリクス・トレイト・自動テスト・CLI',
    chaptersLabel: '第9章〜第12章',
  },
  {
    act: 4,
    title: '第4幕：関数型・メモリ・並行処理棟',
    subtitle: 'イテレーター・スマートポインター・スレッド・Mutex',
    chaptersLabel: '第13章〜第16章',
  },
  {
    act: 5,
    title: '第5幕：高度な設計と最終工房',
    subtitle: 'トレイトオブジェクト・パターン・unsafe・マクロ・ThreadPool',
    chaptersLabel: '第17章〜第20章',
  },
];
