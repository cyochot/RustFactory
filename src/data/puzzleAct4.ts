import { StageDefinition } from '../types/game';

export const CHAPTER_13_16_PUZZLES: StageDefinition[] = [
  // =========================================================================
  // 第13章 パズル応用編 (13-9 〜 13-16)
  // =========================================================================
  {
    displayId: '13-9',
    id: '34bb6524-afeb-5616-bf70-96512643f90f',
    index: 0,
    chapter: 13,
    chapterTitle: '第13章 イテレーターとクロージャー',
    stageKind: 'puzzle',
    title: '13-9. コンベア集計と搬送ベルト連続突破',
    topicTag: 'iter().filter().sum() + コンベア',
    kurumiIntro:
      'コンベアの設計バッチから基準値 `threshold` 以上の値だけ合計しよう！集計したエネルギーを金庫に入れたら、搬送ベルトの押し出しを利用して一気にゴールへ乗り込むよ。',
    goalSummary: 'filter().map().sum() で金庫⚡6を作りコンベアでゴール (5, 1) へ',
    bookSectionTitle: '13.2 環境キャプチャ＋イテレーター集計',
    bookSummary:
      '外側の変数 `threshold` をキャプチャした `.filter()` と `.map()`・`.sum()` を組み合わせると、設定に応じた動的フィルタ集計が簡潔に書けます。',
    bookKeyCode: 'batch.iter().filter(|x| x >= threshold).map(|x| x / 2).sum()',
    starterCode: `fn main() {
    let batch = conveyor_batch(); // [2, 4, 8]
    let threshold = 4;
    // threshold 以上を選び、2で割って sum() すると 2 + 4 = 6 になるよ！
    let power = batch.iter().filter(|x| x >= threshold).sum();
    add_vault(power);
    step(2);
    step(2);
}`,
    solutionCode: `fn main() {
    let batch = conveyor_batch();
    let threshold = 4;
    let power = batch.iter().filter(|x| x >= threshold).map(|x| x / 2).sum();
    add_vault(power);
    step(2);
    step(2);
}`,
    quickChips: [
      { label: '.map(|x| x / 2)', insert: '.map(|x| x / 2)' },
    ],
    hints: [
      '今は map(|x| x / 2) が抜けているから power が 4 + 8 = 12 になってるよ（金庫目標はちょうど 6 以上でもOKだけど…おっと 6 ぴったりの練習だよ）！',
      '……あ、よく見たらコンベアの最後の押し出しも足りないかも？まずは `.map(|x| x / 2)` を入れよう。',
      'batch.iter().filter(|x| x >= threshold).map(|x| x / 2).sum();',
    ],
    worldSetup: {
      width: 6,
      height: 3,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 2 }, { x: 5, y: 2 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 5, y: 1 },
      conveyorItems: [2, 4, 8],
      conveyors: [{ x: 2, y: 1, dir: 0 }],
      vault: { x: 1, y: 0, initial: 0, target: 6 },
    },
    victoryCondition: { reachGoal: true, vaultTarget: 6, vaultExact: 6 },
    parTicks: 7,
  },
  {
    displayId: '13-10',
    id: 'd5ffd4a2-ae06-583a-b3cd-422db5999170',
    index: 0,
    chapter: 13,
    chapterTitle: '第13章 イテレーターとクロージャー',
    stageKind: 'puzzle',
    title: '13-10. 安全航行クロージャーと6マス往復スパーク',
    topicTag: 'クロージャー + スパーク回避',
    kurumiIntro:
      '通路の真ん中を縦に往復するスパークを避けながら、スイッチを踏んでゲート先へ進むクロージャー `safe_walk` を作ろう！',
    goalSummary: 'クロージャー内でスパーク・ゲートを両方警戒してゴール (5, 1) へ',
    bookSectionTitle: '13.1 手順抽象化クロージャーによる反復制御',
    bookSummary:
      '安全確認付きの1歩移動を無名クロージャー `safe_walk` にまとめてループ実行すれば、見通しの良い安全制御が書けます。',
    bookKeyCode: 'let safe_walk = || { while is_spark_ahead() || !is_gate_open() { wait_tick(1); } step(); };',
    starterCode: `fn main() {
    let safe_walk = || {
        // ゲートだけでなくスパークも待てるように直そう！
        while !is_gate_open() {
            wait_tick(1);
        }
        step();
    };
    for _ in 0..5 {
        safe_walk();
    }
}`,
    solutionCode: `fn main() {
    let safe_walk = || {
        while is_spark_ahead() || !is_gate_open() {
            wait_tick(1);
        }
        step();
    };
    for _ in 0..5 {
        safe_walk();
    }
}`,
    quickChips: [
      { label: 'is_spark_ahead() || !is_gate_open()', insert: 'is_spark_ahead() || !is_gate_open()' },
    ],
    hints: [
      '(2, 1) を縦に往復するスパークとぶつかってしまうよ！',
      'while の条件に `is_spark_ahead() ||` を足して、スパークもゲートも待てるようにしよう。',
      'while is_spark_ahead() || !is_gate_open() {\n    wait_tick(1);\n}',
    ],
    worldSetup: {
      width: 6,
      height: 5,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 2 }, { x: 5, y: 2 },
        { x: 0, y: 3 }, { x: 1, y: 3 }, { x: 3, y: 3 }, { x: 4, y: 3 }, { x: 5, y: 3 },
        { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 }, { x: 5, y: 4 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 5, y: 1 },
      switches: [{ x: 1, y: 1 }],
      gates: [{ x: 3, y: 1, openTicks: 1, closedTicks: 1, linkedSwitch: { x: 1, y: 1 } }],
      sparks: [
        { id: 'sp1', path: [{ x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 2, y: 2 }, { x: 2, y: 1 }], initialIndex: 3 },
      ],
    },
    victoryCondition: { reachGoal: true, requireAllSwitches: true },
    parTicks: 8,
  },
  {
    displayId: '13-11',
    id: '47adfe78-09fd-5ac3-9880-71e6629c4bb8',
    index: 0,
    chapter: 13,
    chapterTitle: '第13章 イテレーターとクロージャー',
    stageKind: 'puzzle',
    title: '13-11. map().collect() でL字コマンド列を生成',
    topicTag: 'iter().map().collect() + ダイヤル',
    kurumiIntro:
      'イテレーターの `.map(...).collect()` で作った新しい `Vec` を走らせてL字ルートを進み、途中にある金庫と秘密ダイヤルも一気にクリアしよう！',
    goalSummary: 'collect() した配列でL字移動＋ダイヤル(6)＋金庫⚡6＋(4, 3) へ',
    bookSectionTitle: '13.2 イテレーターからコレクションへの変換',
    bookSummary:
      '加工後のデータを `.collect()` で `Vec<i32>` に確定させてから順番に消費すれば、ルート計算と実行を綺麗に分離できます。',
    bookKeyCode: 'let legs: Vec<i32> = raw.iter().map(|x| x * 2).collect();',
    starterCode: `fn main() {
    let raw = vec![2, 1];
    // それぞれ 2倍にして [4, 2] の Vec を作ろう！
    let legs: Vec<i32> = raw.iter().map(|x| x).collect();
    let code = legs[0] + legs[1];
    try_dial(code);
    add_vault(code);
    step(legs[0]);
    turn_right();
    step(legs[1]);
}`,
    solutionCode: `fn main() {
    let raw = vec![2, 1];
    let legs: Vec<i32> = raw.iter().map(|x| x * 2).collect();
    let code = legs[0] + legs[1];
    try_dial(code);
    add_vault(code);
    step(legs[0]);
    turn_right();
    step(legs[1]);
}`,
    quickChips: [
      { label: '.map(|x| x * 2)', insert: '.map(|x| x * 2)' },
    ],
    hints: [
      '今は raw がそのまま [2, 1] なので合計も 3、歩数も 2 と 1 になっちゃってるよ！',
      '`map(|x| x * 2)` に直せば [4, 2] になり、合計 6 でダイヤルも金庫もL字ゴールも全部揃うよ！',
      'let legs: Vec<i32> = raw.iter().map(|x| x * 2).collect();',
    ],
    worldSetup: {
      width: 6,
      height: 5,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 },
        { x: 5, y: 1 }, { x: 5, y: 2 }, { x: 5, y: 3 },
        { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 }, { x: 5, y: 4 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 4, y: 3 },
      dial: { x: 2, y: 0, secret: 6 },
      vault: { x: 3, y: 0, initial: 0, target: 6 },
    },
    victoryCondition: { reachGoal: true, dialSolved: true, vaultTarget: 6 },
    parTicks: 10,
  },
  {
    displayId: '13-12',
    id: '59f2ca3c-3c77-5b12-8f66-474c041a5c99',
    index: 0,
    chapter: 13,
    chapterTitle: '第13章 イテレーターとクロージャー',
    stageKind: 'puzzle',
    title: '13-12. 空間ルール対応！クロージャーでコア輸送',
    topicTag: 'クロージャー + 空間コア納品',
    kurumiIntro:
      '拾う→検査→強化→納品の工程をクロージャーと組み合わせて実行しよう！位置チェックが有効だから、それぞれの設備タイルの真上で実行してね。',
    goalSummary: '検査台・強化台・納品台のルールを守ってコア⚡4+を納品',
    bookSectionTitle: '13.1 工程ステップと所有権・可変借用',
    bookSummary:
      'クロージャーで定型移動をまとめつつ、コアの借用 `&c`・`&mut c`・所有権移動 `deliver(c)` の順を空間レイアウトに合わせて組み立てます。',
    bookKeyCode: 'let go1 = || step(1); scan(&c); boost(&mut c); deliver(c);',
    starterCode: `fn main() {
    let advance = || step(1);
    advance();
    let mut c = grab_core();
    advance();
    scan(&c);
    advance();
    // ここで (3, 1) の強化台の上だよ！boost(&mut c); を呼ぼう
    
    advance();
    deliver(c);
}`,
    solutionCode: `fn main() {
    let advance = || step(1);
    advance();
    let mut c = grab_core();
    advance();
    scan(&c);
    advance();
    boost(&mut c);
    advance();
    deliver(c);
}`,
    quickChips: [
      { label: 'boost(&mut c);', insert: 'boost(&mut c);\n    ' },
    ],
    hints: [
      'コアの初期パワーは⚡2。目標は⚡4以上だよ！',
      '3回目の advance() で (3, 1) の強化台に着いたあと、`boost(&mut c);` を呼ぼう！',
      'advance();\nboost(&mut c);',
    ],
    worldSetup: {
      width: 5,
      height: 3,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 2 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 4, y: 1 },
      cores: [{ id: 'c1', x: 1, y: 1, power: 2, label: '流線コア' }],
      scanners: [{ x: 2, y: 1 }],
      chargers: [{ x: 3, y: 1 }],
      deliveries: [{ x: 4, y: 1 }],
    },
    victoryCondition: { reachGoal: true, deliverCores: 1, minCorePower: 4, scanCount: 1, requireSpatialCoreRules: true },
    parTicks: 10,
  },
  {
    displayId: '13-13',
    id: '672ad5a0-6da4-58d4-b72a-407876b2bd76',
    index: 0,
    chapter: 13,
    chapterTitle: '第13章 イテレーターとクロージャー',
    stageKind: 'puzzle',
    title: '13-13. キャプチャした倍率で全スイッチUターン',
    topicTag: '環境キャプチャ + U字スイッチ',
    kurumiIntro:
      'クロージャー `calc_vault` が外側の `scale` 変数をキャプチャして金庫値を計算！2つのスイッチを両方踏んでU字折り返しゴールを目指そう。',
    goalSummary: 'scale=3 をキャプチャして金庫⚡9＋全スイッチ＋(1, 3) へ',
    bookSectionTitle: '13.1 読み取りキャプチャと再利用',
    bookSummary:
      '不変な環境変数をキャプチャしたクロージャーは何度でも呼び出せ、設定値を使った計算を一貫させられます。',
    bookKeyCode: 'let scale = 3;\nlet mul = |x| x * scale;',
    starterCode: `fn main() {
    let scale = 3;
    let calc_vault = |x| x * 1;
    let batch = conveyor_batch(); // [1, 2]
    let total: i32 = batch.iter().map(calc_vault).sum();
    add_vault(total);
    step(3);
    turn_right();
    step(2);
    turn_right();
    step(2);
}`,
    solutionCode: `fn main() {
    let scale = 3;
    let calc_vault = |x| x * scale;
    let batch = conveyor_batch();
    let total: i32 = batch.iter().map(calc_vault).sum();
    add_vault(total);
    step(3);
    turn_right();
    step(2);
    turn_right();
    step(2);
}`,
    quickChips: [
      { label: '|x| x * scale', insert: '|x| x * scale' },
    ],
    hints: [
      'calc_vault が `|x| x * 1` だから合計が 3 にしかなっていないよ！',
      '外の `scale`（3）をキャプチャして `|x| x * scale` に直すと (1+2)*3 = 9 になるよ。',
      'let calc_vault = |x| x * scale;',
    ],
    worldSetup: {
      width: 5,
      height: 5,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 },
        { x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 },
        { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 1, y: 3 },
      conveyorItems: [1, 2],
      switches: [{ x: 2, y: 1 }, { x: 3, y: 3 }],
      gates: [{ x: 2, y: 3, openTicks: 1, closedTicks: 1, linkedSwitch: { x: 2, y: 1 } }],
      vault: { x: 1, y: 0, initial: 0, target: 9 },
    },
    victoryCondition: { reachGoal: true, vaultTarget: 9, requireAllSwitches: true },
    parTicks: 12,
  },
  {
    displayId: '13-14',
    id: 'c5c87f2d-46ad-5545-81ec-bb750cb770de',
    index: 0,
    chapter: 13,
    chapterTitle: '第13章 イテレーターとクロージャー',
    stageKind: 'puzzle',
    title: '13-14. イテレーターで異常値を弾いて最短搬送',
    topicTag: 'filter().map().collect() + ベルト',
    kurumiIntro:
      'コンベアのデータ `[0, 2, -1, 3]` から正の数（`x > 0`）だけを取り出して歩数リストにしよう！最初の正数で金庫を、合計歩数＋ベルトでゴールを狙うよ。',
    goalSummary: 'filter(x > 0).sum() で金庫⚡5を作りベルト経由でゴール (5, 1) へ',
    bookSectionTitle: '13.2 ノイズ除去フィルタパイプライン',
    bookSummary:
      '負の値やゼロなどのノイズを `.filter(|x| x > 0)` で除外してから集計することで、異常データに強い制御が実現します。',
    bookKeyCode: 'batch.iter().filter(|x| x > 0).sum()',
    starterCode: `fn main() {
    let batch = conveyor_batch(); // [0, 2, -1, 3]
    // 0 より大きい値だけ残して合計 5 にしよう！
    let clean_sum: i32 = batch.iter().filter(|x| x > 10).sum();
    add_vault(clean_sum);
    step(2);
    step(1);
}`,
    solutionCode: `fn main() {
    let batch = conveyor_batch();
    let clean_sum: i32 = batch.iter().filter(|x| x > 0).sum();
    add_vault(clean_sum);
    step(2);
    step(1);
}`,
    quickChips: [
      { label: 'x > 0', insert: 'x > 0' },
    ],
    hints: [
      'filter の条件が `x > 10` だから 0 になっちゃっているよ！',
      '`x > 0` にすれば 2 + 3 = 5 が金庫に入り、(1,1)と(3,1)の右向きコンベア2個に乗れば合計5歩で (5,1) へ着くよ！',
      '.filter(|x| x > 0)',
    ],
    worldSetup: {
      width: 6,
      height: 3,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 2 }, { x: 5, y: 2 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 5, y: 1 },
      conveyorItems: [0, 2, -1, 3],
      conveyors: [{ x: 1, y: 1, dir: 0 }, { x: 3, y: 1, dir: 0 }],
      vault: { x: 2, y: 0, initial: 0, target: 5 },
    },
    victoryCondition: { reachGoal: true, vaultTarget: 5 },
    parTicks: 6,
  },
  {
    displayId: '13-15',
    id: '2a6b45cc-30f6-5670-9d6b-7e9f85509232',
    index: 0,
    chapter: 13,
    chapterTitle: '第13章 イテレーターとクロージャー',
    stageKind: 'puzzle',
    title: '13-15. 右手法迷路ランナーをクロージャーで作る',
    topicTag: 'クロージャー + 左手法迷路',
    kurumiIntro:
      '迷路を解く1サイクル分の判断ロジックをクロージャー `maze_tick` にまとめて `while !at_goal()` で回そう！途中でスイッチも踏んでいくよ。',
    goalSummary: '左手法クロージャーでスイッチ(3, 1)を踏み (3, 3) へ到達',
    bookSectionTitle: '13.1 状態判定クロージャーの反復利用',
    bookSummary:
      '迷路の1ステップ分の自律判断をクロージャーに切り出すと、メインループが驚くほど読みやすくなります。',
    bookKeyCode: 'while !at_goal() { maze_tick(); }',
    starterCode: `fn main() {
    let maze_tick = || {
        if !is_wall_left() {
            turn_left();
            step();
        } else if !is_wall_ahead() {
            step();
        } else {
            // 行き止まりでは turn_right(); を呼ぼう！
            wait_tick(1);
        }
    };
    while !at_goal() {
        maze_tick();
    }
}`,
    solutionCode: `fn main() {
    let maze_tick = || {
        if !is_wall_left() {
            turn_left();
            step();
        } else if !is_wall_ahead() {
            step();
        } else {
            turn_right();
        }
    };
    while !at_goal() {
        maze_tick();
    }
}`,
    quickChips: [
      { label: 'turn_right();', insert: 'turn_right();' },
    ],
    hints: [
      '(3, 1) の角で左も前も壁になるよ！今のままだと wait_tick(1) を繰り返して動けなくなるよ。',
      '`else { turn_right(); }` に直せばスイッチ(2,1)も踏みながらゴール(3,3)に届くよ！',
      'else {\n    turn_right();\n}',
    ],
    worldSetup: {
      width: 5,
      height: 5,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 },
        { x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 },
        { x: 2, y: 3 },
        { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 3, y: 3 },
      switches: [{ x: 2, y: 1 }],
    },
    victoryCondition: { reachGoal: true, requireAllSwitches: true },
    parTicks: 7,
  },
  {
    displayId: '13-16',
    id: '51b5ff89-5dd8-575f-9faa-b2891bd4032d',
    index: 0,
    chapter: 13,
    chapterTitle: '第13章 イテレーターとクロージャー',
    stageKind: 'puzzle',
    title: '13-16. 第13章マスター：集計・空間コア・スパーク完全制覇',
    topicTag: '第13章 パズル総仕上げ',
    kurumiIntro:
      '第13章パズルの総仕上げ！コンベアバッチを `filter().map().sum()` して金庫⚡6を満たし、コアを拾って検査・強化しつつ、スパークを避けて納品台まで届けきろう！',
    goalSummary: 'イテレーター集計⚡6＋スパーク回避＋空間コア⚡4+納品を全達成',
    bookSectionTitle: '13.1 & 13.2 クロージャーとイテレーターの統合活用',
    bookSummary:
      'データ処理はイテレーターパイプラインに任せ、現場移動は安全クロージャーに任せるきれいな責務分離の完成形です。',
    bookKeyCode: 'let safe = || { while is_spark_ahead() { wait_tick(1); } step(); };',
    starterCode: `fn main() {
    let batch = conveyor_batch(); // [1, 2, 3, 4] -> 2より大きい要素 (3, 4)? いや >=2 なら?
    // x >= 3 の 3, 4 だと 7。x > 1 の [2,3,4] で -1 して 1+2+3=6 にしよう！
    let v: i32 = batch.iter().filter(|x| x > 1).map(|x| x).sum();
    add_vault(v);
    let safe_step = || {
        while is_spark_ahead() {
            wait_tick(1);
        }
        step();
    };
    safe_step();
    let mut c = grab_core();
    safe_step();
    scan(&c);
    safe_step();
    boost(&mut c);
    safe_step();
    safe_step();
    deliver(c);
}`,
    solutionCode: `fn main() {
    let batch = conveyor_batch();
    let v: i32 = batch.iter().filter(|x| x > 1).map(|x| x - 1).sum();
    add_vault(v);
    let safe_step = || {
        while is_spark_ahead() {
            wait_tick(1);
        }
        step();
    };
    safe_step();
    let mut c = grab_core();
    safe_step();
    scan(&c);
    safe_step();
    boost(&mut c);
    safe_step();
    safe_step();
    deliver(c);
}`,
    quickChips: [
      { label: '.map(|x| x - 1)', insert: '.map(|x| x - 1)' },
    ],
    hints: [
      '[1, 2, 3, 4] のうち `x > 1` だけ残すと [2, 3, 4] になるよ。ここから1ずつ引いて sum() すると 1 + 2 + 3 = 6 になる！',
      '`map(|x| x)` を `map(|x| x - 1)` に直そう。safe_step がスパーク(4, 1)も自動で避けてくれるよ！',
      '.map(|x| x - 1)',
    ],
    worldSetup: {
      width: 6,
      height: 5,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 5, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 }, { x: 5, y: 2 },
        { x: 0, y: 3 }, { x: 1, y: 3 }, { x: 2, y: 3 }, { x: 3, y: 3 }, { x: 5, y: 3 },
        { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 }, { x: 5, y: 4 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 5, y: 1 },
      conveyorItems: [1, 2, 3, 4],
      cores: [{ id: 'c1', x: 1, y: 1, power: 2, label: '極光コア' }],
      scanners: [{ x: 2, y: 1 }],
      chargers: [{ x: 3, y: 1 }],
      deliveries: [{ x: 5, y: 1 }],
      sparks: [
        { id: 'sp1', path: [{ x: 4, y: 0 }, { x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 }, { x: 4, y: 2 }, { x: 4, y: 1 }], initialIndex: 0 },
      ],
      vault: { x: 1, y: 0, initial: 0, target: 6 },
    },
    victoryCondition: { reachGoal: true, deliverCores: 1, minCorePower: 4, scanCount: 1, vaultTarget: 6, vaultExact: 6, requireSpatialCoreRules: true },
    parTicks: 15,
  },

  // =========================================================================
  // 第14章 パズル応用編 (14-5 〜 14-8)
  // =========================================================================
  {
    displayId: '14-5',
    id: 'a47779e1-d34b-5350-879c-9f257d73aec7',
    index: 0,
    chapter: 14,
    chapterTitle: '第14章 Cargoとcrates.io',
    stageKind: 'puzzle',
    title: '14-5. タイムアタック！ベルト加速＋#[cfg(feature="fast")]',
    topicTag: 'cfg(fast) + ベルト加速',
    kurumiIntro:
      '制限時間 4 ティック以内！`#[cfg(feature = "fast")]` を有効にしたうえ、コンベアの押し出しとちょうど噛み合う最小歩数でゴール (5, 1) へ飛び込もう！',
    goalSummary: 'fast 最適化とコンベア利用で 4ティック以内にゴール (5, 1) へ',
    bookSectionTitle: '14.3 リリース設定とハードウェア加速の協調',
    bookSummary:
      '環境側の加速（搬送ベルト）とプログラム側のリリース最適化（`#[cfg(feature = "fast")]`）を合わせると極限の短時間航行が可能になります。',
    bookKeyCode: '#[cfg(feature = "fast")]\nfn boost_run() { step(3); }',
    starterCode: `#[cfg(feature = "slow")]
fn dash() {
    wait_tick(2);
    step(3);
}

fn main() {
    dash();
}`,
    solutionCode: `#[cfg(feature = "fast")]
fn dash() {
    step(3);
}

fn main() {
    dash();
}`,
    quickChips: [
      { label: '#[cfg(feature = "fast")]', insert: '#[cfg(feature = "fast")]' },
    ],
    hints: [
      'コンベアが (1,1) と (3,1) にあるから、step(3) するだけで 3歩 + ベルト2回 = 5マス進めるよ！',
      '`#[cfg(feature = "fast")]` に変更して `wait_tick(2);` を消そう！',
      '#[cfg(feature = "fast")]\nfn dash() {\n    step(3);\n}',
    ],
    worldSetup: {
      width: 6,
      height: 3,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 2 }, { x: 5, y: 2 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 5, y: 1 },
      conveyors: [{ x: 1, y: 1, dir: 0 }, { x: 3, y: 1, dir: 0 }],
      featureFastMaxTicks: 4,
    },
    victoryCondition: { reachGoal: true, maxTicks: 4 },
    parTicks: 4,
  },
  {
    displayId: '14-6',
    id: 'dbacae9d-d4be-50b7-b0c8-74faf457c401',
    index: 0,
    chapter: 14,
    chapterTitle: '第14章 Cargoとcrates.io',
    stageKind: 'puzzle',
    title: '14-6. 再エクスポートクレート＋テスト＋スイッチ高速突破',
    topicTag: 'mod pub + #[test] + maxTicks',
    kurumiIntro:
      '高速クレート `mod express_crate` の `pub` 公開を整え、`#[test]` を通したうえで 6 ティック以内にスイッチ先ゲートを抜けてゴールへ！',
    goalSummary: 'テスト合格＋スイッチ連動ゲート通過を 6ティック以内で達成',
    bookSectionTitle: '14.2 & 14.3 クレート境界の高速テスト＆実行',
    bookSummary:
      'ライブラリの公開APIを単体テストで検証したうえで、`fast` ビルドで制限時間内にタスクを完了させます。',
    bookKeyCode: 'mod express_crate { pub fn calc(a: i32) -> i32 { a + 2 } }',
    starterCode: `mod express_crate {
    // pub を付けて公開しよう！
    fn calc(a: i32) -> i32 {
        a + 2
    }
}

use express_crate::calc;

#[test]
fn t_fast() {
    assert_eq!(calc(2), 4);
}

#[cfg(feature = "fast")]
fn main() {
    let d = calc(2);
    add_vault(d);
    step(d);
}`,
    solutionCode: `mod express_crate {
    pub fn calc(a: i32) -> i32 {
        a + 2
    }
}

use express_crate::calc;

#[test]
fn t_fast() {
    assert_eq!(calc(2), 4);
}

#[cfg(feature = "fast")]
fn main() {
    let d = calc(2);
    add_vault(d);
    step(d);
}`,
    quickChips: [
      { label: 'pub fn calc(a: i32) -> i32', insert: 'pub fn calc(a: i32) -> i32' },
    ],
    hints: [
      'express_crate の中の `fn calc` に `pub` が付いていないため `use` できないよ！',
      '`pub fn calc(a: i32) -> i32` に直せば、5ティックで金庫⚡4＋スイッチ(2,1)＋ゲート(3,1)を一直線にクリアできるよ！',
      'pub fn calc(a: i32) -> i32 {',
    ],
    worldSetup: {
      width: 6,
      height: 3,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 2 }, { x: 5, y: 2 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 4, y: 1 },
      switches: [{ x: 2, y: 1 }],
      gates: [{ x: 3, y: 1, openTicks: 1, closedTicks: 1, linkedSwitch: { x: 2, y: 1 } }],
      vault: { x: 1, y: 0, initial: 0, target: 4 },
      featureFastMaxTicks: 6,
    },
    victoryCondition: { reachGoal: true, vaultTarget: 4, testsRequired: 1, requireAllSwitches: true, maxTicks: 6 },
    parTicks: 6,
  },
  {
    displayId: '14-7',
    id: 'cdecc4e1-f218-52f7-8f00-8c8273122a40',
    index: 0,
    chapter: 14,
    chapterTitle: '第14章 Cargoとcrates.io',
    stageKind: 'puzzle',
    title: '14-7. 2クレート協調タイムアタック（ダイヤル＋L字）',
    topicTag: 'ワークスペース + ダイヤル + fast',
    kurumiIntro:
      'ダイヤル計算クレート `mod cipher` と操縦クレート `mod pilot` を連携させ、9 ティック以内でダイヤル解除＆L字ゴールを決めよう！',
    goalSummary: '2テスト合格＋ダイヤル(5)＋L字ゴール (3, 3) を 9ティック以内で達成',
    bookSectionTitle: '14.3 ワークスペース協調と無駄のない手順',
    bookSummary:
      '複数モジュールの計算結果をそのまま最短移動へつなぎ、余計なウェイトなしで目標を達成します。',
    bookKeyCode: 'try_dial(cipher::key());\npilot::turn_walk(3, 2);',
    starterCode: `mod cipher {
    pub fn key() -> i32 {
        // 秘密の番号は 5 だよ！直そう
        1
    }
}

mod pilot {
    pub fn run_l(dx: i32, dy: i32) {
        step(dx);
        turn_right();
        step(dy);
    }
}

#[test]
fn t_key() { assert_eq!(cipher::key(), 5); }

#[cfg(feature = "fast")]
fn main() {
    let k = cipher::key();
    try_dial(k);
    pilot::run_l(3, 2);
}`,
    solutionCode: `mod cipher {
    pub fn key() -> i32 {
        5
    }
}

mod pilot {
    pub fn run_l(dx: i32, dy: i32) {
        step(dx);
        turn_right();
        step(dy);
    }
}

#[test]
fn t_key() { assert_eq!(cipher::key(), 5); }

#[cfg(feature = "fast")]
fn main() {
    let k = cipher::key();
    try_dial(k);
    pilot::run_l(3, 2);
}`,
    quickChips: [
      { label: '5', insert: '5' },
    ],
    hints: [
      'cipher::key() が 1 を返しているせいでテストもダイヤルも失敗しているよ！',
      '`5` を返すように直せば `try_dial(5)`＋`run_l(3, 2)` が 7ティックで決まるよ！',
      'pub fn key() -> i32 {\n    5\n}',
    ],
    worldSetup: {
      width: 5,
      height: 5,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 },
        { x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 3, y: 3 },
      dial: { x: 2, y: 0, secret: 5 },
      featureFastMaxTicks: 9,
    },
    victoryCondition: { reachGoal: true, dialSolved: true, testsRequired: 1, maxTicks: 9 },
    parTicks: 8,
  },
  {
    displayId: '14-8',
    id: 'd7f2d369-4988-5e3c-a141-7effcf5a3db9',
    index: 0,
    chapter: 14,
    chapterTitle: '第14章 Cargoとcrates.io',
    stageKind: 'puzzle',
    title: '14-8. 第14章マスター：最短リリース便＋全設備制覇',
    topicTag: '第14章 パズル総仕上げ',
    kurumiIntro:
      '第14章の総仕上げタイムアタック！`#[cfg(feature = "fast")]` のもと、コアを拾って検査・強化・納品しつつ 10 ティック以内で完全配達しよう！',
    goalSummary: 'fast 最適化でコア検査・強化⚡4+・スイッチ突破を 10ティック以内に達成',
    bookSectionTitle: '14.3 プロダクションリリース品質の最短工程',
    bookSummary:
      '不要な待ち時間を削りつつ必須の安全検査とテストをすべてパスさせるリリース品質の設計です。',
    bookKeyCode: '#[cfg(feature = "fast")]\nfn ship() { ... }',
    starterCode: `#[cfg(feature = "fast")]
fn ship() {
    step(1);
    let mut c = grab_core();
    step(1);
    scan(&c);
    step(1);
    // 無駄な wait_tick(5); を消して boost(&mut c); に替えよう！
    wait_tick(5);
    step(1);
    deliver(c);
}

#[test]
fn t_ready() { assert_eq!(2 + 2, 4); }

fn main() {
    ship();
}`,
    solutionCode: `#[cfg(feature = "fast")]
fn ship() {
    step(1);
    let mut c = grab_core();
    step(1);
    scan(&c);
    step(1);
    boost(&mut c);
    step(1);
    deliver(c);
}

#[test]
fn t_ready() { assert_eq!(2 + 2, 4); }

fn main() {
    ship();
}`,
    quickChips: [
      { label: 'boost(&mut c);', insert: 'boost(&mut c);' },
    ],
    hints: [
      '(3, 1) で無駄に `wait_tick(5);` をしていて制限時間オーバー＆コアパワー不足になっているよ！',
      'wait_tick(5); を `boost(&mut c);` に差し替えれば、9ティックで検査も強化もスイッチも全部クリア！',
      'boost(&mut c);',
    ],
    worldSetup: {
      width: 5,
      height: 3,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 2 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 4, y: 1 },
      cores: [{ id: 'c1', x: 1, y: 1, power: 2, label: '特急コア' }],
      scanners: [{ x: 2, y: 1 }],
      chargers: [{ x: 3, y: 1 }],
      deliveries: [{ x: 4, y: 1 }],
      switches: [{ x: 2, y: 1 }],
      featureFastMaxTicks: 10,
    },
    victoryCondition: { reachGoal: true, deliverCores: 1, minCorePower: 4, scanCount: 1, testsRequired: 1, requireAllSwitches: true, requireSpatialCoreRules: true, maxTicks: 10 },
    parTicks: 10,
  },

  // =========================================================================
  // 第15章 パズル応用編 (15-13 〜 15-24)
  // =========================================================================
  {
    displayId: '15-13',
    id: '1f4e58fb-4cfe-5cd5-ba57-5aa128266ec5',
    index: 0,
    chapter: 15,
    chapterTitle: '第15章 スマートポインター',
    stageKind: 'puzzle',
    title: '15-13. Box<Command> でコンベア越え歩数計算',
    topicTag: 'Box<i32> + コンベア',
    kurumiIntro:
      'ヒープ上の `Box` 2つを組み合わせて目標エネルギーと歩数を決め、搬送ベルトの助けを借りてスイッチの先のゴール (5, 1) まで一っ飛びしよう！',
    goalSummary: 'Box 2つで金庫⚡5を作り、ベルトを利用してスイッチ先 (5, 1) へ',
    bookSectionTitle: '15.1 Box<T> の計算結合と解放タイミング',
    bookSummary:
      '複数の `Box<T>` から `*` で値を取り出して演算し、ベルトコンベアやスイッチを組み合わせた位置計算に活用します。',
    bookKeyCode: 'let total = *bx + *by;',
    starterCode: `fn main() {
    let bx = Box::new(2);
    let by = Box::new(3);
    // *bx + *by で 5 を金庫に入れよう！
    add_vault(*bx);
    step(*bx);
    step(1);
}`,
    solutionCode: `fn main() {
    let bx = Box::new(2);
    let by = Box::new(3);
    add_vault(*bx + *by);
    step(*bx);
    step(1);
}`,
    quickChips: [
      { label: 'add_vault(*bx + *by);', insert: 'add_vault(*bx + *by);' },
    ],
    hints: [
      '(1,1) と (3,1) に右向きベルトがあるから、step(*bx) すると一気に (3,1) 付近まで運ばれるよ（正確には(0,1)->(1,1)[押(2,1)]->(3,1)[押(4,1)]で、さらに step(1) で (5,1)）！',
      '金庫が足りないので `add_vault(*bx);` を `add_vault(*bx + *by);` に直そう！',
      'add_vault(*bx + *by);',
    ],
    worldSetup: {
      width: 6,
      height: 3,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 2 }, { x: 5, y: 2 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 5, y: 1 },
      conveyors: [{ x: 1, y: 1, dir: 0 }, { x: 3, y: 1, dir: 0 }],
      switches: [{ x: 2, y: 1 }],
      gates: [{ x: 4, y: 1, openTicks: 1, closedTicks: 1, linkedSwitch: { x: 2, y: 1 } }],
      vault: { x: 3, y: 0, initial: 0, target: 5 },
    },
    victoryCondition: { reachGoal: true, vaultTarget: 5, requireAllSwitches: true },
    parTicks: 5,
  },
  {
    displayId: '15-14',
    id: '007f4c05-dd69-51b7-b3ee-e80303a04656',
    index: 0,
    chapter: 15,
    chapterTitle: '第15章 スマートポインター',
    stageKind: 'puzzle',
    title: '15-14. drop(box) 後の安全な値再利用とダイヤル',
    topicTag: 'drop() + ダイヤル',
    kurumiIntro:
      '大きな `Box` は先に `drop()` でお片付けしつつ、取り出しておいた値で秘密ダイヤルを解錠し、L字のゴールへ進もう！',
    goalSummary: 'Box を drop してから取り出した値でダイヤル(7)・金庫⚡7・(3, 3) へ',
    bookSectionTitle: '15.3 早期解放 drop() と値の退避',
    bookSummary:
      'ヒープ領域を `drop(box)` で早く解放したいときは、必要なプリミティブ値だけ先に変数へコピーしておけばコンパイルエラーになりません。',
    bookKeyCode: 'let val = *b;\ndrop(b);\ntry_dial(val);',
    starterCode: `fn main() {
    let b = Box::new(7);
    let val = *b;
    drop(b);
    // ↓ drop(b) のあとで *b を使うと所有権エラーになるよ！val を使おう
    try_dial(*b);
    add_vault(*b);
    println!("RELEASED");
    step(3);
    turn_right();
    step(2);
}`,
    solutionCode: `fn main() {
    let b = Box::new(7);
    let val = *b;
    drop(b);
    try_dial(val);
    add_vault(val);
    println!("RELEASED");
    step(3);
    turn_right();
    step(2);
}`,
    quickChips: [
      { label: 'try_dial(val);', insert: 'try_dial(val);' },
      { label: 'add_vault(val);', insert: 'add_vault(val);' },
    ],
    hints: [
      'drop(b) した後に *b を読もうとするとコンパイラが E0382 で止めてくれるよ！',
      'try_dial(*b) と add_vault(*b) の両方を `val` に直せばクリア！',
      'try_dial(val);\nadd_vault(val);',
    ],
    worldSetup: {
      width: 5,
      height: 5,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 },
        { x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 3, y: 3 },
      dial: { x: 1, y: 0, secret: 7 },
      vault: { x: 2, y: 0, initial: 0, target: 7 },
    },
    victoryCondition: { reachGoal: true, dialSolved: true, vaultTarget: 7, stdoutIncludes: ['RELEASED'] },
    parTicks: 10,
  },
  {
    displayId: '15-15',
    id: '3e9730a7-1de7-5c4c-a484-74c7ebfb0bf6',
    index: 0,
    chapter: 15,
    chapterTitle: '第15章 スマートポインター',
    stageKind: 'puzzle',
    title: '15-15. Rc 共有データで2箇所のスイッチ折り返し',
    topicTag: 'Rc::clone + U字スイッチ',
    kurumiIntro:
      '共有歩数 `Rc::new(2)` を `Rc::clone` で複製しながら渡して、U字コース上の2つのスイッチを踏んでゴールへ戻ってこよう！',
    goalSummary: 'Rc::clone で移動パラメータを共有し全スイッチ＋(1, 3) へ',
    bookSectionTitle: '15.4 同じ設定値を複数の移動フェーズへ渡す',
    bookSummary:
      '値を関数へ渡すたびに所有権が移動しても、`Rc::clone(&rc)` を渡せば呼び出し元に所有権を残したまま何度でも共有できます。',
    bookKeyCode: 'go(Rc::clone(&d));\nturn_right();\ngo(Rc::clone(&d));',
    starterCode: `fn go(d: Rc<i32>) {
    step(*d);
}

fn main() {
    let unit = Rc::new(2);
    // そのまま unit を渡すと Move して2回目・3回目に使えなくなるよ！
    go(unit);
    step(1);
    turn_right();
    go(Rc::clone(&unit));
    turn_right();
    go(unit);
}`,
    solutionCode: `fn go(d: Rc<i32>) {
    step(*d);
}

fn main() {
    let unit = Rc::new(2);
    go(Rc::clone(&unit));
    step(1);
    turn_right();
    go(Rc::clone(&unit));
    turn_right();
    go(unit);
}`,
    quickChips: [
      { label: 'go(Rc::clone(&unit));', insert: 'go(Rc::clone(&unit));' },
    ],
    hints: [
      '最初の `go(unit);` で所有権が移動してしまうため、次の `Rc::clone(&unit)` がエラーになるよ！',
      '1回目の呼び出しを `go(Rc::clone(&unit));` に直せば解決！',
      'go(Rc::clone(&unit));',
    ],
    worldSetup: {
      width: 5,
      height: 5,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 },
        { x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 },
        { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 1, y: 3 },
      switches: [{ x: 2, y: 1 }, { x: 3, y: 3 }],
      gates: [{ x: 2, y: 3, openTicks: 1, closedTicks: 1, linkedSwitch: { x: 2, y: 1 } }],
    },
    victoryCondition: { reachGoal: true, requireAllSwitches: true },
    parTicks: 10,
  },
  {
    displayId: '15-16',
    id: 'b3705f70-1c20-5a33-9028-eb14333e6ae3',
    index: 0,
    chapter: 15,
    chapterTitle: '第15章 スマートポインター',
    stageKind: 'puzzle',
    title: '15-16. RefCell 二重可変借用パニックの解消とスパーク横断',
    topicTag: 'RefCell パニック回避 + スパーク',
    kurumiIntro:
      '今は `RefCell` の可変借用を重ねて実行時パニックが起きているうえ、前方のスパーク待ちも足りないよ！借用ガードの整理とスパーク対策の両方を直そう。',
    goalSummary: 'RefCell パニックを解消しスパーク(2, 1)を避けて金庫⚡5＋(4, 1)へ',
    bookSectionTitle: '15.5 実行時借用ルールと安全な制御フロー',
    bookSummary:
      '`borrow_mut()` の寿命を短く終えてから次の `borrow()` を呼ぶことで、実行時パニックを確実に回避します。',
    bookKeyCode: '{ let mut w = rc.borrow_mut(); *w += 2; } let r = rc.borrow();',
    starterCode: `fn main() {
    let cell = RefCell::new(3);
    let mut r1 = cell.borrow_mut();
    // ↓ 同時 borrow_mut() を消して、*r1 += 2 をスコープで分けよう！
    let mut r2 = cell.borrow_mut();
    *r1 += 2;
    let val = cell.borrow();
    add_vault(*val);
    for _ in 0..4 {
        while is_spark_ahead() {
            wait_tick(1);
        }
        step();
    }
}`,
    solutionCode: `fn main() {
    let cell = RefCell::new(3);
    {
        let mut r1 = cell.borrow_mut();
        *r1 += 2;
    }
    let val = cell.borrow();
    add_vault(*val);
    for _ in 0..4 {
        while is_spark_ahead() {
            wait_tick(1);
        }
        step();
    }
}`,
    quickChips: [
      { label: '{ let mut r1 = cell.borrow_mut(); *r1 += 2; }', insert: '{\n        let mut r1 = cell.borrow_mut();\n        *r1 += 2;\n    }' },
    ],
    hints: [
      '二重の `r2` を消しただけでは、`r1` が生きているまま `cell.borrow()` を呼ぶとやはりパニックしちゃうよ！',
      'let mut r1 = cell.borrow_mut(); *r1 += 2; を `{ ... }` ブロックで囲めば安全に 5 になるよ。',
      '{\n    let mut r1 = cell.borrow_mut();\n    *r1 += 2;\n}',
    ],
    worldSetup: {
      width: 6,
      height: 5,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 2 }, { x: 5, y: 2 },
        { x: 0, y: 3 }, { x: 1, y: 3 }, { x: 3, y: 3 }, { x: 4, y: 3 }, { x: 5, y: 3 },
        { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 }, { x: 5, y: 4 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 4, y: 1 },
      sparks: [
        { id: 'sp1', path: [{ x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 2, y: 2 }, { x: 2, y: 1 }], initialIndex: 0 },
      ],
      vault: { x: 1, y: 0, initial: 0, target: 5 },
    },
    victoryCondition: { reachGoal: true, vaultTarget: 5 },
    parTicks: 8,
  },
  {
    displayId: '15-17',
    id: 'ee0aadfe-6a0f-57db-8537-873e31cd4349',
    index: 0,
    chapter: 15,
    chapterTitle: '第15章 スマートポインター',
    stageKind: 'puzzle',
    title: '15-17. Rc<RefCell<i32>> パターンで複数箇所から状態更新',
    topicTag: 'Rc + RefCell 共有可変状態',
    kurumiIntro:
      '共有できる `Rc` と書き換えできる `RefCell` を組み合わせた定番コンビ `Rc<RefCell<i32>>` に挑戦！別々の所有者から順番に加算しよう。',
    goalSummary: 'Rc::clone 経由で同じ RefCell を2回更新し金庫⚡7＋(4, 1)へ',
    bookSectionTitle: '15.5 Rc<T> と RefCell<T> を組み合わせて可変データへの複数の所有者を持つ',
    bookSummary:
      '「複数人で共有したい（`Rc`）」かつ「中身を書き換えたい（`RefCell`）」ときは、`Rc::new(RefCell::new(値))` が Rust シングルスレッドの王道パターンです。',
    bookKeyCode: 'let a = Rc::new(RefCell::new(2));\nlet b = Rc::clone(&a);\n{ *b.borrow_mut() += 5; }',
    starterCode: `fn add_energy(target: Rc<RefCell<i32>>, amt: i32) {
    let mut g = target.borrow_mut();
    *g += amt;
}

fn main() {
    let shared = Rc::new(RefCell::new(2));
    // ↓ shared をそのまま渡すと Move して次が使えないよ！Rc::clone(&shared) にしよう
    add_energy(shared, 2);
    add_energy(Rc::clone(&shared), 3);
    let v = shared.borrow();
    add_vault(*v);
    step(4);
}`,
    solutionCode: `fn add_energy(target: Rc<RefCell<i32>>, amt: i32) {
    let mut g = target.borrow_mut();
    *g += amt;
}

fn main() {
    let shared = Rc::new(RefCell::new(2));
    add_energy(Rc::clone(&shared), 2);
    add_energy(Rc::clone(&shared), 3);
    let v = shared.borrow();
    add_vault(*v);
    step(4);
}`,
    quickChips: [
      { label: 'Rc::clone(&shared)', insert: 'Rc::clone(&shared)' },
    ],
    hints: [
      '関数 `add_energy` が終わると中の借用ガード `g` は自動で抜けて安全に解放されるよ！',
      '問題は `add_energy(shared, 2);` で所有権を渡しきっている点。`Rc::clone(&shared)` に変えよう！',
      'add_energy(Rc::clone(&shared), 2);',
    ],
    worldSetup: {
      width: 6,
      height: 3,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 2 }, { x: 5, y: 2 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 4, y: 1 },
      switches: [{ x: 2, y: 1 }],
      gates: [{ x: 3, y: 1, openTicks: 1, closedTicks: 1, linkedSwitch: { x: 2, y: 1 } }],
      vault: { x: 2, y: 0, initial: 0, target: 7 },
    },
    victoryCondition: { reachGoal: true, vaultTarget: 7, requireAllSwitches: true },
    parTicks: 6,
  },
  {
    displayId: '15-18',
    id: '54ab4b3c-0663-52b5-8dc8-0e8f7687938e',
    index: 0,
    chapter: 15,
    chapterTitle: '第15章 スマートポインター',
    stageKind: 'puzzle',
    title: '15-18. 空間ルール＋Rc<RefCell> で検査・強化・納品',
    topicTag: 'Rc<RefCell> + 空間コア',
    kurumiIntro:
      '進捗カウンターを `Rc<RefCell<i32>>` で記録しながら、コアの拾得・検査・強化・納品を一気に行おう！',
    goalSummary: '進捗カウンター⚡2（検査・強化の計2回）＋コア⚡5+納品を達成',
    bookSectionTitle: '15.5 共有ログや計測カウンターとしての Rc<RefCell>',
    bookSummary:
      '異なる処理ステップから共通の統計カウンターへ安全に加算する実戦的なパターンです。',
    bookKeyCode: '{ *log.borrow_mut() += 1; }',
    starterCode: `fn tick_op(log: Rc<RefCell<i32>>) {
    let mut g = log.borrow_mut();
    *g += 1;
}

fn main() {
    let ops = Rc::new(RefCell::new(0));
    step(1);
    let mut c = grab_core();
    step(1);
    scan(&c);
    tick_op(Rc::clone(&ops));
    step(1);
    // ここで (3, 1) の強化台！boost(&mut c); と tick_op(Rc::clone(&ops)); を入れよう
    
    step(1);
    deliver(c);
    add_vault(*ops.borrow());
}`,
    solutionCode: `fn tick_op(log: Rc<RefCell<i32>>) {
    let mut g = log.borrow_mut();
    *g += 1;
}

fn main() {
    let ops = Rc::new(RefCell::new(0));
    step(1);
    let mut c = grab_core();
    step(1);
    scan(&c);
    tick_op(Rc::clone(&ops));
    step(1);
    boost(&mut c);
    tick_op(Rc::clone(&ops));
    step(1);
    deliver(c);
    add_vault(*ops.borrow());
}`,
    quickChips: [
      { label: 'boost(&mut c);', insert: 'boost(&mut c);\n    ' },
      { label: 'tick_op(Rc::clone(&ops));', insert: 'tick_op(Rc::clone(&ops));\n    ' },
    ],
    hints: [
      'コアの元パワーは⚡3、目標は⚡5以上。強化台(3,1)で `boost(&mut c);` が必要だよ！',
      '同時に `tick_op(Rc::clone(&ops));` も呼んで、金庫目標⚡2を満たそう！',
      'boost(&mut c);\ntick_op(Rc::clone(&ops));',
    ],
    worldSetup: {
      width: 5,
      height: 3,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 2 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 4, y: 1 },
      cores: [{ id: 'c1', x: 1, y: 1, power: 3, label: '計測コア' }],
      scanners: [{ x: 2, y: 1 }],
      chargers: [{ x: 3, y: 1 }],
      deliveries: [{ x: 4, y: 1 }],
      vault: { x: 1, y: 0, initial: 0, target: 2 },
    },
    victoryCondition: { reachGoal: true, deliverCores: 1, minCorePower: 5, scanCount: 1, vaultTarget: 2, requireSpatialCoreRules: true },
    parTicks: 10,
  },
  {
    displayId: '15-19',
    id: '73b33189-827b-51b7-976a-c6ea1b476074',
    index: 0,
    chapter: 15,
    chapterTitle: '第15章 スマートポインター',
    stageKind: 'puzzle',
    title: '15-19. Box 構造体と RefCell の連携（迷路折り返し）',
    topicTag: 'Box<Struct> + RefCell + 左手法',
    kurumiIntro:
      '`Box<MazeStats>` に記録用 `RefCell` を組み合わせて、曲がり角を数えながら迷路を抜けよう！スイッチの真上で曲がれたらバッチリだよ。',
    goalSummary: '左手法迷路でコーナーを通ってスイッチを踏み (3, 3) へ',
    bookSectionTitle: '15.1 & 15.5 Box と RefCell を合わせた状態記録',
    bookSummary:
      'ヒープ管理の構造体の中身を安全に更新しながら自律探索ループを回すパターンです。',
    bookKeyCode: '{ let mut g = steps.borrow_mut(); *g += 1; }',
    starterCode: `fn main() {
    let max_vault = Box::new(3);
    let count = RefCell::new(0);
    while !at_goal() {
        if !is_wall_left() {
            turn_left();
            step();
        } else if !is_wall_ahead() {
            step();
        } else {
            // 行き止まり！右へ曲がって count を増やそう
            wait_tick(1);
        }
    }
    add_vault(*max_vault + *count.borrow());
}`,
    solutionCode: `fn main() {
    let max_vault = Box::new(3);
    let count = RefCell::new(0);
    while !at_goal() {
        if !is_wall_left() {
            turn_left();
            step();
        } else if !is_wall_ahead() {
            step();
        } else {
            turn_right();
            {
                let mut g = count.borrow_mut();
                *g += 1;
            }
        }
    }
    add_vault(*max_vault + *count.borrow());
}`,
    quickChips: [
      { label: 'turn_right();', insert: 'turn_right();\n            ' },
      { label: '{ let mut g = count.borrow_mut(); *g += 1; }', insert: '{\n                let mut g = count.borrow_mut();\n                *g += 1;\n            }' },
    ],
    hints: [
      '(3, 1) の角で右に1回だけ曲がる必要があるよ！目標金庫は 3 + 1 = 4。',
      'else の中を `turn_right(); { let mut g = count.borrow_mut(); *g += 1; }` に直そう！',
      'turn_right();\n{\n    let mut g = count.borrow_mut();\n    *g += 1;\n}',
    ],
    worldSetup: {
      width: 5,
      height: 5,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 },
        { x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 },
        { x: 2, y: 3 },
        { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 3, y: 3 },
      switches: [{ x: 3, y: 1 }],
      vault: { x: 1, y: 0, initial: 0, target: 4 },
    },
    victoryCondition: { reachGoal: true, vaultTarget: 4, requireAllSwitches: true },
    parTicks: 8,
  },
  {
    displayId: '15-20',
    id: 'e3cedf2e-58b8-55c4-ab2d-4c8bd0f5fee6',
    index: 0,
    chapter: 15,
    chapterTitle: '第15章 スマートポインター',
    stageKind: 'puzzle',
    title: '15-20. drop() で古いゲート指令を破棄しダイヤル解除',
    topicTag: 'drop + Rc + ダイヤル',
    kurumiIntro:
      'テスト用の仮データ `temp_box` は `drop()` で破棄し、本番共有データ `Rc` から読み取った値で秘密ダイヤルを解除しよう！',
    goalSummary: '仮 Box を drop し、Rc の値(8)でダイヤル解除＋コンベア突破',
    bookSectionTitle: '15.3 & 15.4 寿命の分離と共有参照',
    bookSummary:
      '一時的なデータだけ明示的に `drop` し、生き残らせる共有データは `Rc` で安全に保持する設計です。',
    bookKeyCode: 'drop(temp);\nlet ok = Rc::clone(&real_code);',
    starterCode: `fn main() {
    let temp = Box::new(2);
    let real_code = Rc::new(8);
    let shared = Rc::clone(&real_code);
    drop(temp);
    // ↓ 破棄済みの temp を読まず、shared を使ってダイヤルと金庫をクリアしよう！
    try_dial(*temp);
    add_vault(*shared);
    step(2);
    step(1);
}`,
    solutionCode: `fn main() {
    let temp = Box::new(2);
    let real_code = Rc::new(8);
    let shared = Rc::clone(&real_code);
    drop(temp);
    try_dial(*shared);
    add_vault(*shared);
    step(2);
    step(1);
}`,
    quickChips: [
      { label: 'try_dial(*shared);', insert: 'try_dial(*shared);' },
    ],
    hints: [
      'drop(temp) したあと *temp を使おうとして Move エラーが出ているよ！',
      'try_dial(*temp); を `try_dial(*shared);` に直そう。ベルトも自動で運んでくれるよ！',
      'try_dial(*shared);',
    ],
    worldSetup: {
      width: 6,
      height: 3,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 2 }, { x: 5, y: 2 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 5, y: 1 },
      conveyors: [{ x: 1, y: 1, dir: 0 }, { x: 3, y: 1, dir: 0 }],
      dial: { x: 2, y: 0, secret: 8 },
      vault: { x: 3, y: 0, initial: 0, target: 8 },
    },
    victoryCondition: { reachGoal: true, dialSolved: true, vaultTarget: 8 },
    parTicks: 6,
  },
  {
    displayId: '15-21',
    id: '1bef7c21-c2cb-5cf1-84c3-65e120ca0c9f',
    index: 0,
    chapter: 15,
    chapterTitle: '第15章 スマートポインター',
    stageKind: 'puzzle',
    title: '15-21. RefCell 書き換え中にガードを持ちすぎない設計',
    topicTag: 'RefCell スコープ + ゲート待機',
    kurumiIntro:
      '蒸気ゲートが一定周期で開閉する通路を抜けながら、`RefCell` に歩数カウントを貯めよう！借用パニックを起こさないよう必ずブロック `{ ... }` を閉じてね。',
    goalSummary: 'RefCell パニックを回避し周期ゲート(2,1)を抜け金庫⚡4＋(4,1)へ',
    bookSectionTitle: '15.5 ループ内での短寿命 borrow_mut()',
    bookSummary:
      'ループ内で毎回 `borrow_mut()` を呼ぶときは、1回ごとにすぐ解放されるブロック構造にすることで安全が保たれます。',
    bookKeyCode: 'for _ in 0..4 { { *steps.borrow_mut() += 1; } ... }',
    starterCode: `fn main() {
    let steps = RefCell::new(0);
    // ↓ ループの外で borrow_mut() を握りっぱなしにしているため中の borrow_mut() でパニックするよ！
    let mut lock_leak = steps.borrow_mut();
    for _ in 0..4 {
        while !is_gate_open() {
            wait_tick(1);
        }
        step();
        {
            let mut s = steps.borrow_mut();
            *s += 1;
        }
    }
    add_vault(*steps.borrow());
}`,
    solutionCode: `fn main() {
    let steps = RefCell::new(0);
    for _ in 0..4 {
        while !is_gate_open() {
            wait_tick(1);
        }
        step();
        {
            let mut s = steps.borrow_mut();
            *s += 1;
        }
    }
    add_vault(*steps.borrow());
}`,
    quickChips: [
      { label: 'for _ in 0..4 {', insert: 'for _ in 0..4 {' },
    ],
    hints: [
      '3行目の `let mut lock_leak = steps.borrow_mut();` がずっと借用を手放していないせいで、ループ内の borrow_mut() が衝突するよ！',
      '`let mut lock_leak = steps.borrow_mut();` の行を削除しよう！',
      'let steps = RefCell::new(0);\nfor _ in 0..4 {',
    ],
    worldSetup: {
      width: 6,
      height: 3,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 2 }, { x: 5, y: 2 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 4, y: 1 },
      gates: [{ x: 2, y: 1, openTicks: 2, closedTicks: 2, initialOffset: 1 }],
      vault: { x: 1, y: 0, initial: 0, target: 4 },
    },
    victoryCondition: { reachGoal: true, vaultTarget: 4 },
    parTicks: 7,
  },
  {
    displayId: '15-22',
    id: 'bda5e013-6d70-5ae8-a991-b576407822e8',
    index: 0,
    chapter: 15,
    chapterTitle: '第15章 スマートポインター',
    stageKind: 'puzzle',
    title: '15-22. 3段ベルト＋Rc::clone パイプラインテスト',
    topicTag: 'Rc + テスト + 3連コンベア',
    kurumiIntro:
      '共有値 `Rc` の計算を `#[test]` で確認したら、3つの搬送コンベアでジグザグ・直線加速して一発でゴール (5, 2) に乗り込もう！',
    goalSummary: 'テスト合格＋Rc 計算で金庫⚡6＋コンベア加速ゴール (5, 2) へ',
    bookSectionTitle: '15.4 スマートポインタ計算のユニットテスト検証',
    bookSummary:
      '`Rc<i32>` を使った補助関数も通常の関数と同じように `#[test]` で事前に検証できます。',
    bookKeyCode: 'let r = Rc::new(3);\nlet r2 = Rc::clone(&r);',
    starterCode: `fn double_rc(v: Rc<i32>) -> i32 {
    // 2倍を返すように直そう！
    *v
}

#[test]
fn t_rc() {
    assert_eq!(double_rc(Rc::new(3)), 6);
}

fn main() {
    let base = Rc::new(3);
    let bonus = double_rc(Rc::clone(&base));
    add_vault(bonus);
    step(1);
    turn_right();
    step(1);
    turn_left();
    step(1);
}`,
    solutionCode: `fn double_rc(v: Rc<i32>) -> i32 {
    *v * 2
}

#[test]
fn t_rc() {
    assert_eq!(double_rc(Rc::new(3)), 6);
}

fn main() {
    let base = Rc::new(3);
    let bonus = double_rc(Rc::clone(&base));
    add_vault(bonus);
    step(1);
    turn_right();
    step(1);
    turn_left();
    step(1);
}`,
    quickChips: [
      { label: '*v * 2', insert: '*v * 2' },
    ],
    hints: [
      'コンベアが (1,1)→(2,1) [右向き]、(2,2)→(3,2) [下から来て右折？いや(2,2)右コンベアで(3,2)]、(4,2)右コンベアで(5,2) へ運んでくれるよ！',
      'まず `double_rc` の中身を `*v * 2` に直してテストと金庫⚡6を通そう！',
      'fn double_rc(v: Rc<i32>) -> i32 {\n    *v * 2\n}',
    ],
    worldSetup: {
      width: 6,
      height: 4,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 },
        { x: 3, y: 1 }, { x: 4, y: 1 }, { x: 5, y: 1 },
        { x: 0, y: 2 }, { x: 1, y: 2 },
        { x: 0, y: 3 }, { x: 1, y: 3 }, { x: 2, y: 3 }, { x: 3, y: 3 }, { x: 4, y: 3 }, { x: 5, y: 3 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 5, y: 2 },
      conveyors: [{ x: 1, y: 1, dir: 0 }, { x: 2, y: 2, dir: 0 }, { x: 4, y: 2, dir: 0 }],
      vault: { x: 2, y: 0, initial: 0, target: 6 },
    },
    victoryCondition: { reachGoal: true, vaultTarget: 6, vaultExact: 6, testsRequired: 1 },
    parTicks: 7,
  },
  {
    displayId: '15-23',
    id: '91449bb9-4dc7-549f-8a66-54a36fe8d430',
    index: 0,
    chapter: 15,
    chapterTitle: '第15章 スマートポインター',
    stageKind: 'puzzle',
    title: '15-23. 二重スパーク防衛線と Box・RefCell 協調',
    topicTag: 'Box + RefCell + スパーク2連続',
    kurumiIntro:
      '2か所の横断スパークを越えてゴールへ！`Box` に目標値を預け、`RefCell` で通過回数を記録しながら安全に進もう。',
    goalSummary: 'Box＋RefCell で金庫⚡4を作り2つのスパークを越えて (5, 1) へ',
    bookSectionTitle: '15.1 & 15.5 ヒープ値と安全カウンターの連動',
    bookSummary:
      '安全確認付きのループと `RefCell` スコープ更新を組み合わせて危険地帯を踏破します。',
    bookKeyCode: 'while is_spark_ahead() { wait_tick(1); } step();',
    starterCode: `fn main() {
    let base = Box::new(2);
    let passed = RefCell::new(0);
    for _ in 0..5 {
        // スパーク待ちがないので衝突しちゃうよ！
        step();
        {
            let mut p = passed.borrow_mut();
            *p += 1;
        }
    }
    add_vault(*base);
}`,
    solutionCode: `fn main() {
    let base = Box::new(2);
    let passed = RefCell::new(0);
    for _ in 0..5 {
        while is_spark_ahead() {
            wait_tick(1);
        }
        step();
        {
            let mut p = passed.borrow_mut();
            *p += 1;
        }
    }
    add_vault(*base + 2);
}`,
    quickChips: [
      { label: 'while is_spark_ahead() { wait_tick(1); }', insert: 'while is_spark_ahead() {\n            wait_tick(1);\n        }\n        ' },
    ],
    hints: [
      '(1, 1) と (3, 1) を縦断するスパークがいるよ！',
      'step(); の前に `while is_spark_ahead() { wait_tick(1); }` を入れよう！',
      'while is_spark_ahead() {\n    wait_tick(1);\n}',
    ],
    worldSetup: {
      width: 6,
      height: 5,
      walls: [
        { x: 0, y: 0 }, { x: 2, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 },
        { x: 0, y: 2 }, { x: 2, y: 2 }, { x: 4, y: 2 }, { x: 5, y: 2 },
        { x: 0, y: 3 }, { x: 2, y: 3 }, { x: 4, y: 3 }, { x: 5, y: 3 },
        { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 }, { x: 5, y: 4 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 5, y: 1 },
      sparks: [
        { id: 'sp1', path: [{ x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 }, { x: 1, y: 3 }, { x: 1, y: 2 }, { x: 1, y: 1 }], initialIndex: 1 },
        { id: 'sp2', path: [{ x: 3, y: 0 }, { x: 3, y: 1 }, { x: 3, y: 2 }, { x: 3, y: 3 }, { x: 3, y: 2 }, { x: 3, y: 1 }], initialIndex: 3 },
      ],
      vault: { x: 2, y: 0, initial: 0, target: 4 },
    },
    victoryCondition: { reachGoal: true, vaultTarget: 4, vaultExact: 4 },
    parTicks: 10,
  },
  {
    displayId: '15-24',
    id: '92eb75db-c24c-55fd-a983-832ad103d8c1',
    index: 0,
    chapter: 15,
    chapterTitle: '第15章 スマートポインター',
    stageKind: 'puzzle',
    title: '15-24. 第15章マスター：全スマートポインタ総動員コア納品',
    topicTag: '第15章 パズル総仕上げ',
    kurumiIntro:
      '第15章の最終パズル！`Box`・`drop`・`Rc`・`RefCell` のすべてを使いこなし、スイッチでゲートを開き、空間ルール通りコアを検査・強化して納品しよう！',
    goalSummary: '全スマートポインタ活用で金庫⚡6・全スイッチ・空間コア⚡5+納品を達成',
    bookSectionTitle: '第15章 総まとめ — メモリ管理と安全パターンの融合',
    bookSummary:
      '所有・解放・共有・内部可変性を状況に応じて組み合わせ、複雑な工程でも破綻しない安全コードを実現します。',
    bookKeyCode: 'Box + drop + Rc::clone + Rc<RefCell>',
    starterCode: `fn main() {
    let b = Box::new(2);
    let b_val = *b;
    drop(b);

    let step_rc = Rc::new(1);
    let total_vault = Rc::new(RefCell::new(b_val));

    step(*Rc::clone(&step_rc));
    let mut c = grab_core();
    step(*Rc::clone(&step_rc));
    scan(&c);
    {
        let mut g = total_vault.borrow_mut();
        *g += 2;
    }
    step(*Rc::clone(&step_rc));
    // ↓ 強化台(3,1) で boost(&mut c); しつつ total_vault に +2 しよう（まだ +0 だよ）！
    {
        let mut g = total_vault.borrow_mut();
        *g += 0;
    }
    step(*step_rc);
    deliver(c);
    add_vault(*total_vault.borrow());
}`,
    solutionCode: `fn main() {
    let b = Box::new(2);
    let b_val = *b;
    drop(b);

    let step_rc = Rc::new(1);
    let total_vault = Rc::new(RefCell::new(b_val));

    step(*Rc::clone(&step_rc));
    let mut c = grab_core();
    step(*Rc::clone(&step_rc));
    scan(&c);
    {
        let mut g = total_vault.borrow_mut();
        *g += 2;
    }
    step(*Rc::clone(&step_rc));
    boost(&mut c);
    {
        let mut g = total_vault.borrow_mut();
        *g += 2;
    }
    step(*step_rc);
    deliver(c);
    add_vault(*total_vault.borrow());
}`,
    quickChips: [
      { label: 'boost(&mut c);', insert: 'boost(&mut c);\n    ' },
      { label: '*g += 2;', insert: '*g += 2;' },
    ],
    hints: [
      '(3, 1) で `boost(&mut c);` が呼べておらず、さらに `total_vault` の最後の加算が `*g += 0;` のままになっているよ！',
      'boost(&mut c); を追加し、最後の `*g += 0;` を `*g += 2;` に直せば⚡6とコア⚡5+を達成できるよ！',
      'boost(&mut c);\n{\n    let mut g = total_vault.borrow_mut();\n    *g += 2;\n}',
    ],
    worldSetup: {
      width: 5,
      height: 3,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 2 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 4, y: 1 },
      cores: [{ id: 'c1', x: 1, y: 1, power: 3, label: '極上コア' }],
      scanners: [{ x: 2, y: 1 }],
      chargers: [{ x: 3, y: 1 }],
      deliveries: [{ x: 4, y: 1 }],
      switches: [{ x: 2, y: 1 }],
      vault: { x: 1, y: 0, initial: 0, target: 6 },
    },
    victoryCondition: { reachGoal: true, deliverCores: 1, minCorePower: 5, scanCount: 1, vaultTarget: 6, requireAllSwitches: true, requireSpatialCoreRules: true },
    parTicks: 11,
  },

  // =========================================================================
  // 第16章 パズル応用編 (16-17 〜 16-32)
  // =========================================================================
  {
    displayId: '16-17',
    id: 'd2b69214-1533-5850-9e49-0148257c61f6',
    index: 0,
    chapter: 16,
    chapterTitle: '第16章 恐れるな！並行性',
    stageKind: 'puzzle',
    title: '16-17. 2体クロススイッチ！互いのゲートを開け合おう',
    topicTag: '相互スイッチ開放',
    kurumiIntro:
      '上下のレーンに分かれたフェリスちゃんとみるく号！互いのレーンにあるスイッチを踏み合って、2つのゲートを同時に開通させよう！',
    goalSummary: '互いのスイッチを踏み合い、フェリスちゃんとみるく号が両方ゴールへ',
    bookSectionTitle: '16.1 並列協調による相互ゲート突破',
    bookSummary:
      '別々のスレッドが各レーンのスイッチを押すことで、お互いの封鎖ゲートを開け合って同時にゴールへ向かいます。',
    bookKeyCode: 'while !is_gate_open() { wait_tick(1); }',
    starterCode: `fn main() {
    let h = thread::spawn(|| {
        step(1);
        // 上のみるく号も、フェリスちゃんがスイッチを踏むまでゲート(2, 0)を待とう！
        step(4);
    });
    step(1);
    while !is_gate_open() {
        wait_tick(1);
    }
    step(3);
    h.join();
}`,
    solutionCode: `fn main() {
    let h = thread::spawn(|| {
        step(1);
        while !is_gate_open() {
            wait_tick(1);
        }
        step(3);
    });
    step(1);
    while !is_gate_open() {
        wait_tick(1);
    }
    step(3);
    h.join();
}`,
    quickChips: [
      { label: 'while !is_gate_open() { wait_tick(1); }', insert: 'while !is_gate_open() {\n            wait_tick(1);\n        }\n        ' },
    ],
    hints: [
      '上のレーンにいるみるく号は (1, 0) でスイッチを踏んだあと、ゲート(2, 0)の前を待たずに進もうとして閉じたゲートにぶつかっちゃうかも！',
      'thread::spawn の中の `step(3);` の前にも `while !is_gate_open() { wait_tick(1); }` を入れてあげよう！',
      'while !is_gate_open() {\n    wait_tick(1);\n}',
    ],
    worldSetup: {
      width: 6,
      height: 3,
      walls: [
        { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 }, { x: 4, y: 1 }, { x: 5, y: 1 },
      ],
      botStart: { x: 0, y: 2, dir: 0 },
      goal: { x: 4, y: 2 },
      workerStart: { x: 0, y: 0, dir: 0 },
      workerGoal: { x: 4, y: 0 },
      switches: [{ x: 1, y: 0 }, { x: 1, y: 2 }],
      gates: [
        { x: 2, y: 2, openTicks: 1, closedTicks: 1, linkedSwitch: { x: 1, y: 0 } },
        { x: 2, y: 0, openTicks: 1, closedTicks: 1, linkedSwitch: { x: 1, y: 2 } },
      ],
    },
    victoryCondition: { reachGoal: true, workerReachGoal: true, requireAllSwitches: true, maxTicks: 7 },
    parTicks: 8,
  },
  {
    displayId: '16-18',
    id: 'a8d084c8-1fe6-55dd-851c-bf5703da3f37',
    index: 0,
    chapter: 16,
    chapterTitle: '第16章 恐れるな！並行性',
    stageKind: 'puzzle',
    title: '16-18. 2体でコンベア高速ダッシュ競争',
    topicTag: 'thread::spawn + 両レーンコンベア',
    kurumiIntro:
      '上下両方のレーンに加速ベルトが敷かれたよ！それぞれのベルト位置に合わせてちょうどいい歩数を調整しよう。',
    goalSummary: 'ベルト加速を計算に入れて2体ともゴール (5, 0) / (5, 2) へ',
    bookSectionTitle: '16.1 並列環境でのタイミングと位置設計',
    bookSummary:
      '各スレッドのフィールド条件（ベルト位置）に合わせたパラメータを適切に渡して並列移動します。',
    bookKeyCode: 'thread::spawn(|| { step(2); step(1); });',
    starterCode: `fn main() {
    let h = thread::spawn(|| {
        // 上のレーンのベルトは (1,0) と (3,0)！合計 3歩で (5,0) へ着くよ
        step(1);
    });
    // 下のレーンはベルト1つだけ (2,2) にあるから、合計 4歩進もう！
    step(2);
    step(2);
    h.join();
}`,
    solutionCode: `fn main() {
    let h = thread::spawn(|| {
        step(2);
        step(1);
    });
    step(2);
    step(2);
    h.join();
}`,
    quickChips: [
      { label: 'step(2);\n        step(1);', insert: 'step(2);\n        step(1);' },
    ],
    hints: [
      '上のレーンは (1,0) と (3,0) にベルトがあるよ！step(2) で (1,0)→ベルト(2,0)→step で (3,0)→ベルト(4,0)、そして step(1) で (5,0) へ到着！',
      'spawn の中を `step(2); step(1);` に書き換えよう。',
      'step(2);\nstep(1);',
    ],
    worldSetup: {
      width: 6,
      height: 3,
      walls: [
        { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 }, { x: 4, y: 1 }, { x: 5, y: 1 },
      ],
      botStart: { x: 0, y: 2, dir: 0 },
      goal: { x: 5, y: 2 },
      workerStart: { x: 0, y: 0, dir: 0 },
      workerGoal: { x: 5, y: 0 },
      conveyors: [
        { x: 1, y: 0, dir: 0 },
        { x: 3, y: 0, dir: 0 },
        { x: 2, y: 2, dir: 0 },
      ],
    },
    victoryCondition: { reachGoal: true, workerReachGoal: true },
    parTicks: 6,
  },
  {
    displayId: '16-19',
    id: '3ad49ad5-c31d-5da1-adc3-fa6fd50a6825',
    index: 0,
    chapter: 16,
    chapterTitle: '第16章 恐れるな！並行性',
    stageKind: 'puzzle',
    title: '16-19. move || クロージャーでダイヤルとL字ルートを託す',
    topicTag: 'move || + ダイヤル + L字',
    kurumiIntro:
      'メインで作った秘密番号 `code` と歩数 `dist` を `move ||` でみるく号へ託そう！みるく号がダイヤルを解除しているあいだに、フェリスちゃんはL字のゴールへ走るよ。',
    goalSummary: 'move || でダイヤル(6)解除＋みるく号 (3, 0)＋フェリスちゃん (4, 3) へ',
    bookSectionTitle: '16.1 所有権の移動と並列タスク分担',
    bookSummary:
      '計算済みの値を `move ||` で別スレッドへ安全に渡し、異なる役目を並列でこなします。',
    bookKeyCode: 'let h = thread::spawn(move || { try_dial(code); step(dist); });',
    starterCode: `fn main() {
    let code = 6;
    let dist = 3;
    // move キーワードを付けて所有権をスレッドへ移そう！
    let h = thread::spawn(|| {
        try_dial(code - 1);
        step(dist);
    });
    step(4);
    turn_right();
    step(1);
    h.join();
}`,
    solutionCode: `fn main() {
    let code = 6;
    let dist = 3;
    let h = thread::spawn(move || {
        try_dial(code);
        step(dist);
    });
    step(4);
    turn_right();
    step(1);
    h.join();
}`,
    quickChips: [
      { label: 'move ||', insert: 'move ||' },
    ],
    hints: [
      '外側の変数 `code` や `dist` をスレッド内で使うには `move ||` が必要だよ！',
      '`thread::spawn(|| {` を `thread::spawn(move || {` に直そう。',
      'let h = thread::spawn(move || {',
    ],
    worldSetup: {
      width: 6,
      height: 4,
      walls: [
        { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 }, { x: 4, y: 1 }, { x: 5, y: 1 },
        { x: 0, y: 3 }, { x: 1, y: 3 }, { x: 2, y: 3 }, { x: 3, y: 3 },
      ],
      botStart: { x: 0, y: 2, dir: 0 },
      goal: { x: 4, y: 3 },
      workerStart: { x: 0, y: 0, dir: 0 },
      workerGoal: { x: 3, y: 0 },
      dial: { x: 2, y: 1, secret: 6 },
    },
    victoryCondition: { reachGoal: true, workerReachGoal: true, dialSolved: true, maxTicks: 8 },
    parTicks: 8,
  },
  {
    displayId: '16-20',
    id: '9236e9d1-69ef-5fa0-ad0d-1d6ecf862de6',
    index: 0,
    chapter: 16,
    chapterTitle: '第16章 恐れるな！並行性',
    stageKind: 'puzzle',
    title: '16-20. チャンネル経由の指令リレー＆空間コア強化',
    topicTag: 'channel + 空間コア強化',
    kurumiIntro:
      '上のレーンのみるく号がコアを拾ってチャンネルで転送！受け取ったフェリスちゃんは強化台 `(2, 2)` でしっかりパワーアップさせて納品台 `(4, 2)` へ届けよう！',
    goalSummary: 'チャンネル受信コアを強化台(2, 2)で⚡3+にし納品＋2体ゴール',
    bookSectionTitle: '16.2 所有権転送と現場での空間加工ルール',
    bookSummary:
      '別スレッドからチャンネルで受け取った `EnergyCore` は完全に自分の所有物になるため、自分のレーンの強化台で安全に `boost(&mut c)` できます。',
    bookKeyCode: 'let mut c = rx.recv().unwrap();\nstep(2);\nboost(&mut c);',
    starterCode: `fn main() {
    let (tx, rx) = mpsc::channel();
    let h = thread::spawn(move || {
        let core = grab_core();
        tx.send(core);
        step(3);
    });
    let mut c = rx.recv().unwrap();
    step(2);
    // 強化台(2, 2)で boost(&mut c); するのを忘れてるよ！
    
    step(2);
    deliver(c);
    h.join();
}`,
    solutionCode: `fn main() {
    let (tx, rx) = mpsc::channel();
    let h = thread::spawn(move || {
        let core = grab_core();
        tx.send(core);
        step(3);
    });
    let mut c = rx.recv().unwrap();
    step(2);
    boost(&mut c);
    step(2);
    deliver(c);
    h.join();
}`,
    quickChips: [
      { label: 'boost(&mut c);', insert: 'boost(&mut c);\n    ' },
    ],
    hints: [
      '受け取ったコアの初期パワーは⚡1。納品するには強化台(2, 2)の上で `boost(&mut c);` して⚡3以上にする必要があるよ！',
      'step(2); のあと、強化台の上で `boost(&mut c);` を追加しよう。',
      'step(2);\nboost(&mut c);\nstep(2);',
    ],
    worldSetup: {
      width: 6,
      height: 3,
      walls: [
        { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 }, { x: 4, y: 1 }, { x: 5, y: 1 },
      ],
      botStart: { x: 0, y: 2, dir: 0 },
      goal: { x: 4, y: 2 },
      workerStart: { x: 0, y: 0, dir: 0 },
      workerGoal: { x: 3, y: 0 },
      cores: [{ id: 'c1', x: 0, y: 0, power: 1, label: '転送コア' }],
      chargers: [{ x: 2, y: 2 }],
      deliveries: [{ x: 4, y: 2 }],
    },
    victoryCondition: { reachGoal: true, workerReachGoal: true, deliverCores: 1, minCorePower: 3, requireSpatialCoreRules: true },
    parTicks: 10,
  },
  {
    displayId: '16-21',
    id: '9eade17d-26f7-5a42-88fd-3b21ae7ae09a',
    index: 0,
    chapter: 16,
    chapterTitle: '第16章 恐れるな！並行性',
    stageKind: 'puzzle',
    title: '16-21. 双方向リレー！2つのチャンネルで合図交換',
    topicTag: '2チャンネル協調',
    kurumiIntro:
      '「往路チャンネル（tx1, rx1）」と「復路チャンネル（tx2, rx2）」の2本を使って、スイッチ開放の合図と移動距離を受け渡ししよう！',
    goalSummary: '2本のチャンネルで連携し金庫⚡5・全スイッチ・2体ゴールへ',
    bookSectionTitle: '16.2 複数チャンネルによる双方向同期',
    bookSummary:
      '複数の `mpsc::channel` を用意すると、スレッド同士で準備完了通知や計算パラメータを順番にやり取りできます。',
    bookKeyCode: 'tx1.send(2);\nlet a = rx1.recv().unwrap(); tx2.send(a + 3);',
    starterCode: `fn main() {
    let (tx1, rx1) = mpsc::channel();
    let (tx2, rx2) = mpsc::channel();
    let h = thread::spawn(move || {
        step(2);
        // スイッチ(2, 0)を踏んだら tx1.send(2); を送ってね！
        tx1.send(1);
        let bonus = rx2.recv().unwrap();
        add_vault(bonus);
        step(2);
    });
    let step_cnt = rx1.recv().unwrap();
    // 受け取った 2 に +3 した 5 を返そう！
    tx2.send(step_cnt + 3);
    step(step_cnt + 2);
    h.join();
}`,
    solutionCode: `fn main() {
    let (tx1, rx1) = mpsc::channel();
    let (tx2, rx2) = mpsc::channel();
    let h = thread::spawn(move || {
        step(2);
        tx1.send(2);
        let bonus = rx2.recv().unwrap();
        add_vault(bonus);
        step(2);
    });
    let step_cnt = rx1.recv().unwrap();
    tx2.send(step_cnt + 3);
    step(step_cnt + 2);
    h.join();
}`,
    quickChips: [
      { label: 'tx1.send(2);', insert: 'tx1.send(2);' },
    ],
    hints: [
      '上のレーンのスイッチ(2,0)を踏んでゲート(3,2)を開きつつ、`tx1.send(2)` で 2 を送ろう！',
      'tx1.send(1); を `tx1.send(2);` にすると、返ってくる金庫額が 2+3=5 になり、フェリスちゃんも 2+2=4歩 で(4,2)に届くよ！',
      'tx1.send(2);',
    ],
    worldSetup: {
      width: 6,
      height: 3,
      walls: [
        { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 }, { x: 4, y: 1 }, { x: 5, y: 1 },
      ],
      botStart: { x: 0, y: 2, dir: 0 },
      goal: { x: 4, y: 2 },
      workerStart: { x: 0, y: 0, dir: 0 },
      workerGoal: { x: 4, y: 0 },
      switches: [{ x: 2, y: 0 }],
      gates: [{ x: 3, y: 2, openTicks: 1, closedTicks: 1, linkedSwitch: { x: 2, y: 0 } }],
      vault: { x: 2, y: 1, initial: 0, target: 5 },
    },
    victoryCondition: { reachGoal: true, workerReachGoal: true, vaultTarget: 5, requireAllSwitches: true },
    parTicks: 12,
  },
  {
    displayId: '16-22',
    id: '32ff8c60-c4a3-54aa-8c22-bac121cf58b9',
    index: 0,
    chapter: 16,
    chapterTitle: '第16章 恐れるな！並行性',
    stageKind: 'puzzle',
    title: '16-22. デッドロック解消＋ベルト通過リレー',
    topicTag: 'Mutex デッドロック + ベルト',
    kurumiIntro:
      'メイン側で `vault` をロックしっぱなしのまま `h.join()` しようとしてデッドロックが起きているよ！`drop(g);` で鍵を返してから、2体揃ってベルトに乗ろう！',
    goalSummary: 'drop(g) でデッドロックを解消し金庫⚡6＋ベルトで2体ゴールへ',
    bookSectionTitle: '16.3 join() 前の確実なアンロック',
    bookSummary:
      '子スレッドが同じ `Mutex` を必要としているときに、親スレッドがロックを握ったまま `join()` を呼ぶと永久に待ち合うデッドロックが発生します。',
    bookKeyCode: 'let mut g = v.lock().unwrap(); *g += 3; drop(g); h.join();',
    starterCode: `fn main() {
    let vault = Arc::new(Mutex::new(0));
    let v2 = Arc::clone(&vault);

    let mut g = vault.lock().unwrap();
    *g += 3;
    // ↓ ここで drop(g); を呼ばないと、サブスレッドがロックを取れずデッドロックするよ！

    let h = thread::spawn(move || {
        { let mut g2 = v2.lock().unwrap(); *g2 += 3; }
        step(2);
    });
    h.join();
    step(2);
}`,
    solutionCode: `fn main() {
    let vault = Arc::new(Mutex::new(0));
    let v2 = Arc::clone(&vault);

    let mut g = vault.lock().unwrap();
    *g += 3;
    drop(g);

    let h = thread::spawn(move || {
        { let mut g2 = v2.lock().unwrap(); *g2 += 3; }
        step(2);
    });
    h.join();
    step(2);
}`,
    quickChips: [
      { label: 'drop(g);', insert: 'drop(g);\n    ' },
    ],
    hints: [
      '実行すると「デッドロック」が検出されるよ！`g` を持ったまま `h.join()` で待っているからだね。',
      '`*g += 3;` の直後に `drop(g);` を追加すれば解決！コンベアが両方の2歩目をもう1マス先へ運んでくれるよ。',
      '*g += 3;\ndrop(g);',
    ],
    worldSetup: {
      width: 5,
      height: 3,
      walls: [
        { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 }, { x: 4, y: 1 },
      ],
      botStart: { x: 0, y: 2, dir: 0 },
      goal: { x: 3, y: 2 },
      workerStart: { x: 0, y: 0, dir: 0 },
      workerGoal: { x: 3, y: 0 },
      conveyors: [{ x: 2, y: 0, dir: 0 }, { x: 2, y: 2, dir: 0 }],
      vault: { x: 2, y: 1, initial: 0, target: 6 },
    },
    victoryCondition: { reachGoal: true, workerReachGoal: true, vaultTarget: 6 },
    parTicks: 10,
  },
  {
    displayId: '16-23',
    id: 'd6e4c8b1-2e0c-5475-b5a5-6c5bea307c40',
    index: 0,
    chapter: 16,
    chapterTitle: '第16章 恐れるな！並行性',
    stageKind: 'puzzle',
    title: '16-23. Mutex 共有ダイヤル＋3スレッド集計',
    topicTag: '3スレッド Mutex + ダイヤル',
    kurumiIntro:
      'メイン＋サブスレッド2つの計3スレッドで協力して `Arc<Mutex<i32>>` に値を積み上げ、その合計値で秘密ダイヤルを一発で解除しよう！',
    goalSummary: '3スレッドで⚡6を作り、ダイヤル(6)解除＋フェリスちゃんゴールへ',
    bookSectionTitle: '16.3 複数スレッドからの累積値参照',
    bookSummary:
      '全ワーカーが `join()` で完了した後にメインスレッドからロックを取れば、全スレッドの集計結果を確定値として扱えます。',
    bookKeyCode: 'h1.join(); h2.join();\nlet sum = *vault.lock().unwrap();',
    starterCode: `fn main() {
    let vault = Arc::new(Mutex::new(0));
    let v1 = Arc::clone(&vault);
    let v2 = Arc::clone(&vault);
    let h1 = thread::spawn(move || {
        { let mut g = v1.lock().unwrap(); *g += 2; }
        step(2);
    });
    let h2 = thread::spawn(move || {
        let mut g = v2.lock().unwrap();
        *g += 2;
    });
    {
        // メインも +2 しよう！今は +0 だよ
        let mut g = vault.lock().unwrap();
        *g += 0;
    }
    h1.join();
    h2.join();
    let total = *vault.lock().unwrap();
    try_dial(total);
    step(3);
}`,
    solutionCode: `fn main() {
    let vault = Arc::new(Mutex::new(0));
    let v1 = Arc::clone(&vault);
    let v2 = Arc::clone(&vault);
    let h1 = thread::spawn(move || {
        { let mut g = v1.lock().unwrap(); *g += 2; }
        step(2);
    });
    let h2 = thread::spawn(move || {
        let mut g = v2.lock().unwrap();
        *g += 2;
    });
    {
        let mut g = vault.lock().unwrap();
        *g += 2;
    }
    h1.join();
    h2.join();
    let total = *vault.lock().unwrap();
    try_dial(total);
    step(3);
}`,
    quickChips: [
      { label: '*g += 2;', insert: '*g += 2;' },
    ],
    hints: [
      '秘密のダイヤルは 6、金庫目標も 6 だよ！今はメインが +0 だから合計 4 止まり。',
      'メイン側の `*g += 0;` を `*g += 2;` に直そう！',
      '*g += 2;',
    ],
    worldSetup: {
      width: 5,
      height: 3,
      walls: [
        { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 }, { x: 4, y: 1 },
      ],
      botStart: { x: 0, y: 2, dir: 0 },
      goal: { x: 3, y: 2 },
      workerStart: { x: 0, y: 0, dir: 0 },
      workerGoal: { x: 2, y: 0 },
      dial: { x: 1, y: 1, secret: 6 },
      vault: { x: 3, y: 1, initial: 0, target: 6 },
    },
    victoryCondition: { reachGoal: true, workerReachGoal: true, dialSolved: true, vaultTarget: 6 },
    parTicks: 14,
  },
  {
    displayId: '16-24',
    id: 'f0176c61-dc85-5cc4-906d-eec14c9a2dd9',
    index: 0,
    chapter: 16,
    chapterTitle: '第16章 恐れるな！並行性',
    stageKind: 'puzzle',
    title: '16-24. スパーク回避スレッドと並走する安全移動',
    topicTag: '2体並列 + スパーク回避',
    kurumiIntro:
      '上のレーンも下のレーンも途中でスパークが横切っているよ！フェリスちゃんもみるく号もそれぞれ自分の前で `is_spark_ahead()` を確認して進もう。',
    goalSummary: '2体ともスパークを避けてそれぞれのゴール (4, 0) / (4, 2) へ',
    bookSectionTitle: '16.1 各スレッド独立の安全監視ループ',
    bookSummary:
      '並列に動くスレッドは互いのタイミングが異なるため、それぞれが自分のセンサーで安全を確認しながら進みます。',
    bookKeyCode: 'thread::spawn(|| { for _ in 0..4 { while is_spark_ahead() { wait_tick(1); } step(); } });',
    starterCode: `fn main() {
    let h = thread::spawn(|| {
        // 上のみるく号もスパーク(2, 0)に気をつけて進もう！
        step(5);
    });
    for _ in 0..4 {
        while is_spark_ahead() {
            wait_tick(1);
        }
        step();
    }
    h.join();
}`,
    solutionCode: `fn main() {
    let h = thread::spawn(|| {
        for _ in 0..4 {
            while is_spark_ahead() {
                wait_tick(1);
            }
            step();
        }
    });
    for _ in 0..4 {
        while is_spark_ahead() {
            wait_tick(1);
        }
        step();
    }
    h.join();
}`,
    quickChips: [
      { label: 'while is_spark_ahead() { wait_tick(1); }', insert: 'for _ in 0..4 {\n            while is_spark_ahead() {\n                wait_tick(1);\n            }\n            step();\n        }' },
    ],
    hints: [
      '上のレーンの (2, 0) にもスパークが往復してくるよ！今は `step(4)` で突っ込んじゃってるね。',
      'spawn の中もフェリスちゃんと同じように `for _ in 0..4 { while is_spark_ahead() { wait_tick(1); } step(); }` にしよう！',
      'for _ in 0..4 {\n    while is_spark_ahead() {\n        wait_tick(1);\n    }\n    step();\n}',
    ],
    worldSetup: {
      width: 6,
      height: 5,
      walls: [
        { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 3, y: 1 }, { x: 4, y: 1 }, { x: 5, y: 1 },
        { x: 0, y: 3 }, { x: 1, y: 3 }, { x: 3, y: 3 }, { x: 4, y: 3 }, { x: 5, y: 3 },
        { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 }, { x: 5, y: 4 },
      ],
      botStart: { x: 0, y: 2, dir: 0 },
      goal: { x: 4, y: 2 },
      workerStart: { x: 0, y: 0, dir: 0 },
      workerGoal: { x: 4, y: 0 },
      sparks: [
        { id: 'sp1', path: [{ x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 2, y: 2 }, { x: 2, y: 1 }], initialIndex: 2 },
      ],
    },
    victoryCondition: { reachGoal: true, workerReachGoal: true, maxTicks: 7 },
    parTicks: 10,
  },
  {
    displayId: '16-25',
    id: 'd0ba99b5-4253-584a-8c47-c323623ef00c',
    index: 0,
    chapter: 16,
    chapterTitle: '第16章 恐れるな！並行性',
    stageKind: 'puzzle',
    title: '16-25. Send・Sync 境界エラーの修復＋スイッチ開放',
    topicTag: 'Send/Sync 修正 + スイッチ',
    kurumiIntro:
      '生の可変変数 `let mut sum` を別スレッドで増やそうとしてコンパイルエラーが出ているよ！`Arc<Mutex<i32>>` に書き換えてから、スイッチの先へ進もう！',
    goalSummary: 'Send/Sync エラーを解消し金庫⚡5・全スイッチ・2体ゴールへ',
    bookSectionTitle: '16.4 生変数共有の危険と Arc<Mutex<T>> 置換',
    bookSummary:
      'コンパイラが指摘するスレッド間の可変共有エラーを、`Arc::new(Mutex::new(...))` パターンへ安全にリファクタリングします。',
    bookKeyCode: 'let safe = Arc::new(Mutex::new(0));',
    starterCode: `fn main() {
    let mut sum = 0;
    // ↓ 生変数をそのまま並列更新しようとして Send/Sync エラーになるよ！
    // Arc<Mutex<i32>> に直そう
    let h = thread::spawn(|| {
        sum += 3;
        step(2);
    });
    sum += 2;
    while !is_gate_open() {
        wait_tick(1);
    }
    step(3);
    h.join();
    add_vault(sum);
}`,
    solutionCode: `fn main() {
    let sum = Arc::new(Mutex::new(0));
    let s2 = Arc::clone(&sum);
    let h = thread::spawn(move || {
        { let mut g = s2.lock().unwrap(); *g += 3; }
        step(2);
    });
    {
        let mut g = sum.lock().unwrap();
        *g += 2;
    }
    step(1);
    while !is_gate_open() {
        wait_tick(1);
    }
    step(2);
    h.join();
}`,
    quickChips: [
      { label: 'Arc::new(Mutex::new(0))', insert: 'Arc::new(Mutex::new(0))' },
      { label: 'Arc::clone(&sum)', insert: 'Arc::clone(&sum)' },
    ],
    hints: [
      '上のレーンのスイッチ(2, 0)を踏んでから下のゲート(2, 2)が開くよ！',
      'まず `let sum = Arc::new(Mutex::new(0));` に替え、両スレッドでスコープ付き `lock().unwrap()` しよう。さらにフェリスちゃんも1歩目でスイッチ前まで進んで `while !is_gate_open()` を待ってね！',
      'let sum = Arc::new(Mutex::new(0));\nlet s2 = Arc::clone(&sum);',
    ],
    worldSetup: {
      width: 5,
      height: 3,
      walls: [
        { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 }, { x: 4, y: 1 },
      ],
      botStart: { x: 0, y: 2, dir: 0 },
      goal: { x: 3, y: 2 },
      workerStart: { x: 0, y: 0, dir: 0 },
      workerGoal: { x: 2, y: 0 },
      switches: [{ x: 2, y: 0 }],
      gates: [{ x: 2, y: 2, openTicks: 1, closedTicks: 1, linkedSwitch: { x: 2, y: 0 } }],
      vault: { x: 3, y: 1, initial: 0, target: 5 },
    },
    victoryCondition: { reachGoal: true, workerReachGoal: true, vaultTarget: 5, requireAllSwitches: true },
    parTicks: 10,
  },
  {
    displayId: '16-26',
    id: '1e4aaa52-a10e-58d3-946e-0195ba5c16a0',
    index: 0,
    chapter: 16,
    chapterTitle: '第16章 恐れるな！並行性',
    stageKind: 'puzzle',
    title: '16-26. コア2連続送信・順次検査納品',
    topicTag: '2連続 channel 送信 + コア納品',
    kurumiIntro:
      'みるく号が拾ったコアを送りつつ、フェリスちゃん自身のレーンにある2番目のコアも順番に拾って強化しよう！まずみるく号からの1個を完璧に検査・強化・納品してね。',
    goalSummary: '受信コアを検査(1,2)・強化(2,2)・納品(4,2)し2体ともゴールへ',
    bookSectionTitle: '16.2 チャネル到着の待機と空間検査フロー',
    bookSummary:
      '別レーンからチャンネルで受け取ったアイテムを自レーンの検査・強化設備に通してから納品台へ運びます。',
    bookKeyCode: 'let mut c = rx.recv().unwrap(); step(1); scan(&c); step(1); boost(&mut c);',
    starterCode: `fn main() {
    let (tx, rx) = mpsc::channel();
    let h = thread::spawn(move || {
        let c = grab_core();
        tx.send(c);
        step(3);
    });
    let mut core = rx.recv().unwrap();
    step(1);
    // 検査台(1,2)で scan(&core); を呼ぶのを忘れているよ！
    
    step(1);
    boost(&mut core);
    step(2);
    deliver(core);
    h.join();
}`,
    solutionCode: `fn main() {
    let (tx, rx) = mpsc::channel();
    let h = thread::spawn(move || {
        let c = grab_core();
        tx.send(c);
        step(3);
    });
    let mut core = rx.recv().unwrap();
    step(1);
    scan(&core);
    step(1);
    boost(&mut core);
    step(2);
    deliver(core);
    h.join();
}`,
    quickChips: [
      { label: 'scan(&core);', insert: 'scan(&core);\n    ' },
    ],
    hints: [
      '検査回数 `scanCount: 1` と強化 `⚡4+` の両方が条件だよ！',
      '最初の `step(1);` の位置が検査台 `(1, 2)` だから、そこに `scan(&core);` を書き足そう！',
      'step(1);\nscan(&core);\nstep(1);',
    ],
    worldSetup: {
      width: 6,
      height: 3,
      walls: [
        { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 }, { x: 4, y: 1 }, { x: 5, y: 1 },
      ],
      botStart: { x: 0, y: 2, dir: 0 },
      goal: { x: 4, y: 2 },
      workerStart: { x: 0, y: 0, dir: 0 },
      workerGoal: { x: 3, y: 0 },
      cores: [{ id: 'c1', x: 0, y: 0, power: 2, label: '協働コア' }],
      scanners: [{ x: 1, y: 2 }],
      chargers: [{ x: 2, y: 2 }],
      deliveries: [{ x: 4, y: 2 }],
    },
    victoryCondition: { reachGoal: true, workerReachGoal: true, deliverCores: 1, minCorePower: 4, scanCount: 1, requireSpatialCoreRules: true },
    parTicks: 12,
  },
  {
    displayId: '16-27',
    id: 'd556eb51-1b53-5031-af4b-f14bd499d092',
    index: 0,
    chapter: 16,
    chapterTitle: '第16章 恐れるな！並行性',
    stageKind: 'puzzle',
    title: '16-27. 並列左手法メイズ＋メイン直線連携',
    topicTag: '並列迷路 + スイッチ連携',
    kurumiIntro:
      '上のレーンの小迷路をみるく号が左手法で突破してスイッチ `(3, 0)` を押してくれるよ！フェリスちゃんは下のレーンでゲートが開くのを待ってゴールを目指そう。',
    goalSummary: 'みるく号が小迷路の角を右折してスイッチを踏み2体ともゴールへ',
    bookSectionTitle: '16.1 自律ワーカーと待機スレッドの協調',
    bookSummary:
      '探索を行うスレッドが条件を満たすまで、本線スレッドがゲート前などで協調待機して合流します。',
    bookKeyCode: 'while !is_gate_open() { wait_tick(1); }',
    starterCode: `fn main() {
    let h = thread::spawn(|| {
        while !at_goal() {
            if !is_wall_left() {
                turn_left();
                step();
            } else if !is_wall_ahead() {
                step();
            } else {
                // 行き止まり！turn_right(); で下へ降りよう
                wait_tick(1);
            }
        }
    });
    step(2);
    while !is_gate_open() {
        wait_tick(1);
    }
    step(2);
    h.join();
}`,
    solutionCode: `fn main() {
    let h = thread::spawn(|| {
        while !at_goal() {
            if !is_wall_left() {
                turn_left();
                step();
            } else if !is_wall_ahead() {
                step();
            } else {
                turn_right();
            }
        }
    });
    step(2);
    while !is_gate_open() {
        wait_tick(1);
    }
    step(2);
    h.join();
}`,
    quickChips: [
      { label: 'turn_right();', insert: 'turn_right();' },
    ],
    hints: [
      '上のレーンの行き止まり `(3, 0)` にスイッチがあるよ！そこに着く前か角で右に曲がる必要があるけれど…おっ、(3, 0) がスイッチだからそこまで右進み、右折して (3, 1) ゴールへ！',
      'spawn 内の `else { wait_tick(1); }` を `else { turn_right(); }` に直そう！',
      'else {\n    turn_right();\n}',
    ],
    worldSetup: {
      width: 6,
      height: 4,
      walls: [
        { x: 4, y: 0 },
        { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 4, y: 1 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 2 }, { x: 5, y: 2 },
      ],
      botStart: { x: 0, y: 3, dir: 0 },
      goal: { x: 4, y: 3 },
      workerStart: { x: 0, y: 0, dir: 0 },
      workerGoal: { x: 3, y: 1 },
      switches: [{ x: 3, y: 0 }],
      gates: [{ x: 3, y: 3, openTicks: 1, closedTicks: 1, linkedSwitch: { x: 3, y: 0 } }],
    },
    victoryCondition: { reachGoal: true, workerReachGoal: true, requireAllSwitches: true },
    parTicks: 8,
  },
  {
    displayId: '16-28',
    id: 'a36894ab-6e89-5dd5-afeb-578f0cf7ad00',
    index: 0,
    chapter: 16,
    chapterTitle: '第16章 恐れるな！並行性',
    stageKind: 'puzzle',
    title: '16-28. チャンネル＋Mutex＋#[test] 並列統合チェック',
    topicTag: '並列 + テスト + 金庫',
    kurumiIntro:
      '並列で計算する加算ルールをまず `#[test]` で確かめてから、2スレッド＋チャンネル＋`Mutex` のコンボを動かそう！',
    goalSummary: 'テスト合格＋チャンネル＆Mutexで金庫⚡7＋2体ゴールへ',
    bookSectionTitle: '16.2 & 16.3 テスト済み純粋関数と並行ランタイムの分離',
    bookSummary:
      'ロジック計算を純粋関数に切り出して単体テストし、スレッド間でその結果を安全にやり取りします。',
    bookKeyCode: 'fn combine(a: i32, b: i32) -> i32 { a + b }',
    starterCode: `fn combine(a: i32, b: i32) -> i32 {
    // 掛け算ではなく足し算に直そう！
    a * b
}

#[test]
fn t_comb() {
    assert_eq!(combine(3, 4), 7);
}

fn main() {
    let vault = Arc::new(Mutex::new(0));
    let v2 = Arc::clone(&vault);
    let (tx, rx) = mpsc::channel();
    let h = thread::spawn(move || {
        tx.send(3);
        { let mut g = v2.lock().unwrap(); *g += 3; }
        step(2);
    });
    let from_worker = rx.recv().unwrap();
    let total = combine(from_worker, 4);
    {
        let mut g = vault.lock().unwrap();
        *g += total - 3;
    }
    step(3);
    h.join();
}`,
    solutionCode: `fn combine(a: i32, b: i32) -> i32 {
    a + b
}

#[test]
fn t_comb() {
    assert_eq!(combine(3, 4), 7);
}

fn main() {
    let vault = Arc::new(Mutex::new(0));
    let v2 = Arc::clone(&vault);
    let (tx, rx) = mpsc::channel();
    let h = thread::spawn(move || {
        tx.send(3);
        { let mut g = v2.lock().unwrap(); *g += 3; }
        step(2);
    });
    let from_worker = rx.recv().unwrap();
    let total = combine(from_worker, 4);
    {
        let mut g = vault.lock().unwrap();
        *g += total - 3;
    }
    step(3);
    h.join();
}`,
    quickChips: [
      { label: 'a + b', insert: 'a + b' },
    ],
    hints: [
      'combine(3, 4) の期待結果は 7 だよ！今は `a * b` になってるね。',
      '`a + b` に直せばテストも金庫合計⚡7もバッチリ決まるよ！',
      'fn combine(a: i32, b: i32) -> i32 {\n    a + b\n}',
    ],
    worldSetup: {
      width: 5,
      height: 3,
      walls: [
        { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 }, { x: 4, y: 1 },
      ],
      botStart: { x: 0, y: 2, dir: 0 },
      goal: { x: 3, y: 2 },
      workerStart: { x: 0, y: 0, dir: 0 },
      workerGoal: { x: 2, y: 0 },
      vault: { x: 2, y: 1, initial: 0, target: 7 },
    },
    victoryCondition: { reachGoal: true, workerReachGoal: true, vaultTarget: 7, testsRequired: 1 },
    parTicks: 10,
  },
  {
    displayId: '16-29',
    id: '52cae23d-f78f-554e-9eab-ec4b7bb95e4c',
    index: 0,
    chapter: 16,
    chapterTitle: '第16章 恐れるな！並行性',
    stageKind: 'puzzle',
    title: '16-29. 並走タイムアタック＋Mutex最小ロック',
    topicTag: '並列 + drop(guard) + maxTicks',
    kurumiIntro:
      '8 ティック以内で2体ともゴールし、かつ金庫を⚡4にしよう！`Mutex` のガードはすぐ `drop` して待たせないのが時短の秘訣だよ。',
    goalSummary: 'drop(g) 活用と #[cfg(feature="fast")] で 8ティック以内に全員クリア',
    bookSectionTitle: '16.3 ロック区間の最小化による高速並行処理',
    bookSummary:
      'クリティカルセクション（`Mutex` をロックしている時間）を最小限にすることで、並列スレッド間の待機時間を減らせます。',
    bookKeyCode: 'drop(g);\nh.join();',
    starterCode: `#[cfg(feature = "fast")]
fn main() {
    let vault = Arc::new(Mutex::new(0));
    let v2 = Arc::clone(&vault);
    let mut g = vault.lock().unwrap();
    *g += 2;
    // ↓ ここで drop(g); を呼ばないとデッドロックしちゃうよ！
    let h = thread::spawn(move || {
        { let mut g2 = v2.lock().unwrap(); *g2 += 2; }
        step(2);
    });
    step(2);
    h.join();
}`,
    solutionCode: `#[cfg(feature = "fast")]
fn main() {
    let vault = Arc::new(Mutex::new(0));
    let v2 = Arc::clone(&vault);
    let mut g = vault.lock().unwrap();
    *g += 2;
    drop(g);
    let h = thread::spawn(move || {
        { let mut g2 = v2.lock().unwrap(); *g2 += 2; }
        step(2);
    });
    step(2);
    h.join();
}`,
    quickChips: [
      { label: 'drop(g);', insert: 'drop(g);\n    ' },
    ],
    hints: [
      'メインのロックを解放してから `thread::spawn` を動かさないと、サブスレッドがいつまでも待ってデッドロックするよ！',
      '*g += 2; のすぐ下に `drop(g);` を追加しよう。ベルトが2体ともゴール(3,0)/(3,2)まで押してくれるよ！',
      '*g += 2;\ndrop(g);',
    ],
    worldSetup: {
      width: 5,
      height: 3,
      walls: [
        { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 }, { x: 4, y: 1 },
      ],
      botStart: { x: 0, y: 2, dir: 0 },
      goal: { x: 3, y: 2 },
      workerStart: { x: 0, y: 0, dir: 0 },
      workerGoal: { x: 3, y: 0 },
      conveyors: [{ x: 2, y: 0, dir: 0 }, { x: 2, y: 2, dir: 0 }],
      vault: { x: 2, y: 1, initial: 0, target: 4 },
      featureFastMaxTicks: 8,
    },
    victoryCondition: { reachGoal: true, workerReachGoal: true, vaultTarget: 4, maxTicks: 8 },
    parTicks: 8,
  },
  {
    displayId: '16-30',
    id: '5fe590a7-25b5-51e4-b318-6fbbb667c3f4',
    index: 0,
    chapter: 16,
    chapterTitle: '第16章 恐れるな！並行性',
    stageKind: 'puzzle',
    title: '16-30. 3チャンネル集計で秘密ダイヤル＋Uターン',
    topicTag: '複数メッセージ集計 + ダイヤル',
    kurumiIntro:
      'みるく号が送り出す3つの計測値 `[1, 3, 2]` をチャンネルで順番に受信し、合計値（6）でダイヤルを解錠したらL字コースを曲がろう！',
    goalSummary: '3連続 recv() でダイヤル(6)・金庫⚡6・2体ゴールへ',
    bookSectionTitle: '16.2 連続メッセージの受信集約',
    bookSummary:
      '複数回 `send` されたストリーム状のデータを `for _ in 0..3 { sum += rx.recv().unwrap(); }` で集計します。',
    bookKeyCode: 'for _ in 0..3 { total += rx.recv().unwrap(); }',
    starterCode: `fn main() {
    let (tx, rx) = mpsc::channel();
    let h = thread::spawn(move || {
        tx.send(1);
        tx.send(3);
        tx.send(2);
        step(2);
    });
    let mut sum = 0;
    // 3つ送られてくるのに 2回しか recv() してないよ！0..3 に直そう
    for _ in 0..2 {
        sum += rx.recv().unwrap();
    }
    try_dial(sum);
    add_vault(sum);
    step(3);
    turn_right();
    step(1);
    h.join();
}`,
    solutionCode: `fn main() {
    let (tx, rx) = mpsc::channel();
    let h = thread::spawn(move || {
        tx.send(1);
        tx.send(3);
        tx.send(2);
        step(2);
    });
    let mut sum = 0;
    for _ in 0..3 {
        sum += rx.recv().unwrap();
    }
    try_dial(sum);
    add_vault(sum);
    step(3);
    turn_right();
    step(1);
    h.join();
}`,
    quickChips: [
      { label: '0..3', insert: '0..3' },
    ],
    hints: [
      'tx.send が3回呼ばれているのに、受信ループが `0..2` だと合計 4 にしかならないよ！',
      '`for _ in 0..3` にすれば 1 + 3 + 2 = 6 が揃ってダイヤルも金庫もクリアできるよ！',
      'for _ in 0..3 {',
    ],
    worldSetup: {
      width: 5,
      height: 4,
      walls: [
        { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 }, { x: 4, y: 1 },
        { x: 0, y: 3 }, { x: 1, y: 3 }, { x: 2, y: 3 }, { x: 4, y: 2 }, { x: 4, y: 3 },
      ],
      botStart: { x: 0, y: 2, dir: 0 },
      goal: { x: 3, y: 3 },
      workerStart: { x: 0, y: 0, dir: 0 },
      workerGoal: { x: 2, y: 0 },
      dial: { x: 1, y: 1, secret: 6 },
      vault: { x: 3, y: 1, initial: 0, target: 6 },
    },
    victoryCondition: { reachGoal: true, workerReachGoal: true, dialSolved: true, vaultTarget: 6 },
    parTicks: 14,
  },
  {
    displayId: '16-31',
    id: '88ae87dc-62b7-5b6f-8e33-fc872dcdee68',
    index: 0,
    chapter: 16,
    chapterTitle: '第16章 恐れるな！並行性',
    stageKind: 'puzzle',
    title: '16-31. 空間ルール＋スイッチ＋Mutex の完全並走',
    topicTag: '空間コア + Mutex + ゲート',
    kurumiIntro:
      '上のレーンのみるく号はスイッチ `(1, 0)` を踏んで金庫へ+2しながらゴールへ！下のレーンのフェリスちゃんはコアを受け取って強化し、開いたゲートを越えて納品しよう！',
    goalSummary: '金庫⚡5・全スイッチ・コア検査(1,2)＆強化(3,2)⚡3+・2体ゴールへ',
    bookSectionTitle: '16.2 & 16.3 大規模協調制御の設計',
    bookSummary:
      'メッセージ転送・排他加算・スイッチ連動を同時に組み合わせても、それぞれが責任分担を守れば安全かつシンプルに協調できます。',
    bookKeyCode: 'scan(&core); ... boost(&mut core); ... deliver(core);',
    starterCode: `fn main() {
    let vault = Arc::new(Mutex::new(0));
    let v2 = Arc::clone(&vault);
    let (tx, rx) = mpsc::channel();
    let h = thread::spawn(move || {
        let c = grab_core();
        { let mut g = v2.lock().unwrap(); *g += 2; }
        tx.send(c);
        step(3);
    });
    {
        let mut g = vault.lock().unwrap();
        *g += 3;
    }
    let mut core = rx.recv().unwrap();
    step(1);
    scan(&core);
    step(1);
    while !is_gate_open() {
        wait_tick(1);
    }
    while is_spark_ahead() {
        wait_tick(1);
    }
    step(1);
    // ここ (3, 2) は強化台！boost(&mut core); を呼んでから納品台へ進もう
    
    step(1);
    deliver(core);
    h.join();
}`,
    solutionCode: `fn main() {
    let vault = Arc::new(Mutex::new(0));
    let v2 = Arc::clone(&vault);
    let (tx, rx) = mpsc::channel();
    let h = thread::spawn(move || {
        let c = grab_core();
        { let mut g = v2.lock().unwrap(); *g += 2; }
        tx.send(c);
        step(3);
    });
    {
        let mut g = vault.lock().unwrap();
        *g += 3;
    }
    let mut core = rx.recv().unwrap();
    step(1);
    scan(&core);
    step(1);
    while !is_gate_open() {
        wait_tick(1);
    }
    while is_spark_ahead() {
        wait_tick(1);
    }
    step(1);
    boost(&mut core);
    step(1);
    deliver(core);
    h.join();
}`,
    quickChips: [
      { label: 'boost(&mut core);', insert: 'boost(&mut core);\n    ' },
    ],
    hints: [
      '受信したコアのパワーは⚡1。ゲート(2,2)を抜けた直後の `(3, 2)` に強化台があるよ！',
      'ゲートを抜ける `step(1);` のあとに `boost(&mut core);` を追加しよう。',
      'step(1);\nboost(&mut core);\nstep(1);',
    ],
    worldSetup: {
      width: 6,
      height: 3,
      walls: [
        { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 }, { x: 4, y: 1 }, { x: 5, y: 1 },
      ],
      botStart: { x: 0, y: 2, dir: 0 },
      goal: { x: 4, y: 2 },
      workerStart: { x: 0, y: 0, dir: 0 },
      workerGoal: { x: 3, y: 0 },
      cores: [{ id: 'c1', x: 0, y: 0, power: 1, label: '協働極光コア' }],
      scanners: [{ x: 1, y: 2 }],
      chargers: [{ x: 3, y: 2 }],
      deliveries: [{ x: 4, y: 2 }],
      switches: [{ x: 1, y: 0 }],
      gates: [{ x: 2, y: 2, openTicks: 1, closedTicks: 1, linkedSwitch: { x: 1, y: 0 } }],
      vault: { x: 2, y: 1, initial: 0, target: 5 },
    },
    victoryCondition: { reachGoal: true, workerReachGoal: true, deliverCores: 1, minCorePower: 3, scanCount: 1, vaultTarget: 5, requireAllSwitches: true, requireSpatialCoreRules: true },
    parTicks: 15,
  },
  {
    displayId: '16-32',
    id: 'f5c99c76-935c-5bcf-b635-78ff4d7069ed',
    index: 0,
    chapter: 16,
    chapterTitle: '第16章 恐れるな！並行性',
    stageKind: 'puzzle',
    title: '16-32. 並行性グランドマスター：全機構＋スパーク・ダイヤル完全制覇',
    topicTag: '第16章 パズル総仕上げ',
    kurumiIntro:
      '並行性を締めくくる究極のパズル！みるく号はスパークをかわしつつコアを送りスイッチを踏み、フェリスちゃんは金庫・ダイヤル・検査・強化・納品のすべてをやり遂げよう！',
    goalSummary: '2体ゴール・スパーク回避・ダイヤル(6)・金庫⚡6・空間コア⚡3+納品を全達成',
    bookSectionTitle: '第16章 総括 — 恐怖なき並行プログラミングの到達点',
    bookSummary:
      '所有権ベースの `channel` と型安全な `Arc<Mutex<T>>`、さらに各スレッドの自律センサーを組み合わせ、最高難度の協調システムをバグゼロで動かします。',
    bookKeyCode: 'thread::spawn + channel + Arc<Mutex> + spawn safety',
    starterCode: `fn main() {
    let vault = Arc::new(Mutex::new(0));
    let v2 = Arc::clone(&vault);
    let (tx, rx) = mpsc::channel();

    let h = thread::spawn(move || {
        let c = grab_core();
        { let mut g = v2.lock().unwrap(); *g += 3; }
        tx.send(c);
        for _ in 0..4 {
            while is_spark_ahead() {
                wait_tick(1);
            }
            step();
        }
    });

    {
        let mut g = vault.lock().unwrap();
        *g += 3;
    }
    let total = *vault.lock().unwrap();
    let mut core = rx.recv().unwrap();
    // ダイヤルに total(6) ではなく 1 を入れてしまっているよ！total を渡そう
    try_dial(1);
    step(1);
    scan(&core);
    step(1);
    while !is_gate_open() {
        wait_tick(1);
    }
    while is_spark_ahead() {
        wait_tick(1);
    }
    step(1);
    boost(&mut core);
    step(1);
    deliver(core);
    h.join();
}`,
    solutionCode: `fn main() {
    let vault = Arc::new(Mutex::new(0));
    let v2 = Arc::clone(&vault);
    let (tx, rx) = mpsc::channel();

    let h = thread::spawn(move || {
        let c = grab_core();
        { let mut g = v2.lock().unwrap(); *g += 3; }
        tx.send(c);
        for _ in 0..4 {
            while is_spark_ahead() {
                wait_tick(1);
            }
            step();
        }
    });

    {
        let mut g = vault.lock().unwrap();
        *g += 3;
    }
    h.join();
    let total = *vault.lock().unwrap();
    let mut core = rx.recv().unwrap();
    try_dial(total);
    step(1);
    scan(&core);
    step(1);
    while !is_gate_open() {
        wait_tick(1);
    }
    step(1);
    boost(&mut core);
    step(1);
    deliver(core);
}`,
    quickChips: [
      { label: 'h.join();', insert: 'h.join();\n    ' },
      { label: 'try_dial(total);', insert: 'try_dial(total);' },
    ],
    hints: [
      'サブスレッドが +3 終える前に `let total = *vault.lock().unwrap();` を読んじゃうと 3 しか入っていないことがあるよ！',
      'まずコアを受信 (`rx.recv()`) するか `h.join()` を先に呼んで `total` が確実に 6 になってから `try_dial(total);` を呼ぼう！…あっ、`h.join()` を先にしても `tx.send(c)` は終わっているから安心だよ！',
      'h.join();\nlet total = *vault.lock().unwrap();\nlet mut core = rx.recv().unwrap();\ntry_dial(total);',
    ],
    worldSetup: {
      width: 6,
      height: 5,
      walls: [
        { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 4, y: 1 }, { x: 5, y: 1 },
        { x: 0, y: 3 }, { x: 1, y: 3 }, { x: 2, y: 3 }, { x: 4, y: 3 }, { x: 5, y: 3 },
        { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 }, { x: 5, y: 4 },
      ],
      botStart: { x: 0, y: 2, dir: 0 },
      goal: { x: 4, y: 2 },
      workerStart: { x: 0, y: 0, dir: 0 },
      workerGoal: { x: 4, y: 0 },
      cores: [{ id: 'c1', x: 0, y: 0, power: 1, label: '極光コア' }],
      scanners: [{ x: 1, y: 2 }],
      chargers: [{ x: 3, y: 2 }],
      deliveries: [{ x: 4, y: 2 }],
      switches: [{ x: 1, y: 0 }],
      gates: [{ x: 2, y: 2, openTicks: 1, closedTicks: 1, linkedSwitch: { x: 1, y: 0 } }],
      sparks: [
        { id: 'sp1', path: [{ x: 3, y: 0 }, { x: 3, y: 1 }, { x: 3, y: 0 }, { x: 3, y: 1 }], initialIndex: 0 },
      ],
      dial: { x: 1, y: 1, secret: 6 },
      vault: { x: 2, y: 1, initial: 0, target: 6 },
    },
    victoryCondition: { reachGoal: true, workerReachGoal: true, deliverCores: 1, minCorePower: 3, scanCount: 1, dialSolved: true, vaultTarget: 6, requireAllSwitches: true, requireSpatialCoreRules: true },
    parTicks: 22,
  },
];
