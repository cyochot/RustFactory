import { StageDefinition, StageKind } from '../types/game';

type PuzzlePattern = 'vault' | 'switch' | 'conveyor' | 'loop' | 'function' | 'straight';

const chapters = [
  { chapter: 17, title: '第17章 オブジェクト指向プログラミング機能' },
  { chapter: 18, title: '第18章 パターンとマッチング' },
  { chapter: 19, title: '第19章 高度な機能' },
  { chapter: 20, title: '第20章 最終工房' },
];

const patterns: PuzzlePattern[] = ['vault', 'switch', 'conveyor', 'loop', 'function', 'straight'];

const makePuzzle = (chapter: number, chapterTitle: string, number: number): StageDefinition => {
  const pattern = patterns[number - 9];
  const distance = pattern === 'conveyor' ? 5 : 3 + ((chapter + number) % 4);
  const target = Math.max(3, distance - 1);
  const kind: StageKind = number === 14 ? 'challenge' : number >= 12 ? 'puzzle' : 'basic';
  const id = `${chapter}-${number}`;
  const width = distance + 1;
  const walls = [
    ...Array.from({ length: width }, (_, x) => ({ x, y: 0 })),
    ...Array.from({ length: width }, (_, x) => ({ x, y: 2 })),
  ];
  const worldSetup: StageDefinition['worldSetup'] = {
    width,
    height: 3,
    walls,
    botStart: { x: 0, y: 1, dir: 0 },
    goal: { x: distance, y: 1 },
  };

  let starterCode: string;
  let solutionCode: string;
  let victoryCondition: StageDefinition['victoryCondition'] = { reachGoal: true };
  let title: string;
  let topicTag: string;
  let intro: string;
  let goalSummary: string;
  let bookSectionTitle: string;
  let bookSummary: string;
  let bookKeyCode: string;
  let hints: [string, string, string];

  switch (pattern) {
    case 'vault':
      worldSetup.vault = { x: 0, y: 0, initial: 0, target };
      starterCode = `fn main() {\n    add_vault(${target - 1});\n    step(${distance});\n}`;
      solutionCode = `fn main() {\n    let power = ${target};\n    add_vault(power);\n    step(${distance});\n}`;
      victoryCondition.vaultTarget = target;
      title = '金庫と経路を同時に設計';
      topicTag = '状態管理 / 金庫 / 経路設計';
      intro = '必要な出力を変数で管理し、金庫を満たしてから最短経路でゴールしよう。';
      goalSummary = `金庫⚡${target}を満たして (${distance}, 1) へ到達`;
      bookSectionTitle = '状態を計算してから行動する';
      bookSummary = '計算結果を変数に保持し、複数の工房操作へ再利用できます。';
      bookKeyCode = `let power = ${target};\nadd_vault(power);`;
      hints = [`金庫の目標は⚡${target}だよ。`, '値を変数に入れて金庫へ加えよう。', solutionCode];
      break;
    case 'switch':
      worldSetup.switches = [{ x: 1, y: 1 }];
      worldSetup.gates = [{ x: distance - 1, y: 1, openTicks: 1, closedTicks: 0, linkedSwitch: { x: 1, y: 1 } }];
      starterCode = `fn main() {\n    step(${distance - 1});\n}`;
      solutionCode = `fn main() {\n    step(${distance});\n}`;
      victoryCondition.requireAllSwitches = true;
      title = '連動スイッチの順序制御';
      topicTag = '状態遷移 / スイッチ / ゲート';
      intro = 'スイッチを踏むとゲートが開くよ。作動条件を満たしてから出口へ向かおう。';
      goalSummary = `スイッチ (1, 1) を作動させてゴール (${distance}, 1) へ`;
      bookSectionTitle = '状態遷移を条件にした経路設計';
      bookSummary = 'スイッチの状態変化を利用して、閉じたゲートを通過できます。';
      bookKeyCode = 'step(); // スイッチを作動させてから進む';
      hints = ['ゲートはスイッチと連動しているよ。', 'スイッチを先に踏むルートを組もう。', solutionCode];
      break;
    case 'conveyor':
      worldSetup.conveyors = [{ x: 1, y: 1, dir: 0 }, { x: 3, y: 1, dir: 0 }];
      starterCode = 'fn main() {\n    step(2);\n}';
      solutionCode = 'fn main() {\n    step(3);\n}';
      victoryCondition.maxTicks = 4;
      title = '二段コンベアの最短経路';
      topicTag = '経路最適化 / コンベア';
      intro = 'コンベアの押し出しを見越して、制限ティック内の経路を組み立てよう。';
      goalSummary = '二つのコンベアを使い4ティック以内にゴール';
      bookSectionTitle = '環境ギミックを利用した最適化';
      bookSummary = '移動先の環境を先読みすると、少ない操作で長い距離を進めます。';
      bookKeyCode = 'step(3); // コンベアの押し出しを計算';
      hints = ['矢印は東向きだよ。', 'コンベアに乗ると同じティックで1マス進むよ。', solutionCode];
      break;
    case 'loop':
      starterCode = `fn main() {\n    for _ in 0..${distance - 1} { step(); }\n}`;
      solutionCode = `fn main() {\n    for _ in 0..${distance} { step(); }\n}`;
      title = '反復処理で距離を走破';
      topicTag = 'for / 反復制御';
      intro = '同じ操作を繰り返すループを組み、必要な距離だけ走り切ろう。';
      goalSummary = `ループで${distance}マス進みゴールへ到達`;
      bookSectionTitle = '反復回数を設計する';
      bookSummary = 'for ループの範囲を決めると、同じ操作を安全に繰り返せます。';
      bookKeyCode = `for _ in 0..${distance} { step(); }`;
      hints = ['ループの終端は含まれないよ。', `0..${distance} なら${distance}回実行するよ。`, solutionCode];
      break;
    case 'function':
      starterCode = `fn travel(n: i32) {\n    step(n - 1);\n}\nfn main() { travel(${distance}); }`;
      solutionCode = `fn travel(n: i32) {\n    step(n);\n}\nfn main() { travel(${distance}); }`;
      title = '関数へ経路を分割';
      topicTag = '関数 / パラメーター';
      intro = '移動処理を関数にまとめ、渡された距離を正しく実行しよう。';
      goalSummary = `travel 関数で (${distance}, 1) へ到達`;
      bookSectionTitle = '関数に手順をまとめる';
      bookSummary = '引数で操作量を受け取る関数を作ると、手順を再利用できます。';
      bookKeyCode = 'fn travel(n: i32) { step(n); }';
      hints = ['travel の中で n を使っているよ。', '渡された距離と同じ数だけ進もう。', solutionCode];
      break;
    default:
      starterCode = `fn main() {\n    step(${distance - 1});\n}`;
      solutionCode = `fn main() {\n    step(${distance});\n}`;
      title = '出口までの距離を読み解く';
      topicTag = '観察 / 経路設計';
      intro = '盤面の幅を観察して、開始地点から出口までの移動計画を立てよう。';
      goalSummary = `最短の直線経路で (${distance}, 1) へ到達`;
      bookSectionTitle = '盤面から移動量を導く';
      bookSummary = '開始座標とゴール座標の差から必要な移動回数を計算します。';
      bookKeyCode = `step(${distance});`;
      hints = [`開始地点からゴールまでは${distance}マスだよ。`, '足りない移動分を補おう。', solutionCode];
  }

  return {
    id,
    index: 0,
    act: 5,
    chapter,
    chapterTitle,
    stageKind: kind,
    title: `${chapter}-${number}. ${title}`,
    topicTag,
    kurumiIntro: intro,
    goalSummary,
    bookSectionTitle,
    bookSummary,
    bookKeyCode,
    starterCode,
    solutionCode,
    quickChips: [{ label: '解法の式', insert: solutionCode.replace(/^fn main\(\) \{\n?|\n?\}$/g, '') }],
    hints,
    worldSetup,
    victoryCondition,
    parTicks: pattern === 'conveyor' ? 4 : distance,
  };
};

export const PUZZLE_ACT5_STAGES: StageDefinition[] = chapters.flatMap(({ chapter, title }) =>
  patterns.map((_, offset) => makePuzzle(chapter, title, 9 + offset))
);
