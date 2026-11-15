import { StageDefinition } from '../types/game';
import { ACT1_STAGES } from './stagesAct1';
import { ACT2_STAGES } from './stagesAct2';
import { ACT3_STAGES } from './stagesAct3';
import { ACT4_STAGES } from './stagesAct4';
import { ACT5_STAGES } from './stagesAct5';

export const ALL_STAGES: StageDefinition[] = [
  ...ACT1_STAGES,
  ...ACT2_STAGES,
  ...ACT3_STAGES,
  ...ACT4_STAGES,
  ...ACT5_STAGES,
];

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
