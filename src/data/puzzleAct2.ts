import { StageDefinition } from '../types/game';

export const PUZZLE_ACT2_STAGES: StageDefinition[] = [
  // =========================================================================
  // 第5章 構造体 パズル・挑戦拡張 (5-9 〜 5-16)
  // =========================================================================
  {
    id: '5-9',
    index: 0,
    act: 2,
    chapter: 5,
    chapterTitle: '第5章 構造体',
    stageKind: 'puzzle',
    title: '5-9. コンベア宅配カード DeliveryRoute',
    topicTag: '構造体 + コンベア最短ルート',
    kurumiIntro:
      '配達記録の構造体 `DeliveryPlan` に「スイッチの座標までの歩数」と「コンベアに乗る歩数」を入れて、制限ティック以内に2つの角を越えてゴールしよう！',
    goalSummary: 'DeliveryPlan のメソッドでスイッチを踏み、コンベアで8ティック以内に (5, 3) へ',
    bookSectionTitle: '5.1 & 5.3 構造体データとルート最適化',
    bookSummary:
      '構造体にルートのパラメータをまとめることで、コンベアの押し出し効果を含めた移動計画をわかりやすく管理できます。',
    bookKeyCode: 'struct DeliveryPlan { leg1: i32, leg2: i32 }',
    starterCode: `struct DeliveryPlan {
    leg1: i32,
    leg2: i32,
}

impl DeliveryPlan {
    fn execute(&self) {
        step(self.leg1);
        turn_right();
        step(self.leg2);
        turn_left();
        step(2);
    }
}

fn main() {
    // (0,1)->(2,1)スイッチ->右折->(2,3)下コンベア! 地図に合わせて数値を選ぼう！
    let plan = DeliveryPlan { leg1: 1, leg2: 1 };
    plan.execute();
} `,
    solutionCode: `struct DeliveryPlan {
    leg1: i32,
    leg2: i32,
}

impl DeliveryPlan {
    fn execute(&self) {
        step(self.leg1);
        turn_right();
        step(self.leg2);
        turn_left();
        step(2);
    }
}

fn main() {
    let plan = DeliveryPlan { leg1: 2, leg2: 1 };
    plan.execute();
}`,
    quickChips: [
      { label: 'DeliveryPlan { leg1: 2, leg2: 1 }', insert: 'DeliveryPlan { leg1: 2, leg2: 1 }' },
    ],
    hints: [
      '東に2歩進むと (2,1) のスイッチを踏みつつ右折できるよ。',
      '南に1歩で (2,2) の南向きコンベアに乗って (2,3) へ押し出されるよ！',
      '左折して step(2); とすると (3,3) の東コンベア→(4,3)→(5,3) のゴールに届くよ！ let plan = DeliveryPlan { leg1: 2, leg2: 1 };',
    ],
    worldSetup: {
      width: 6,
      height: 5,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 3, y: 1 }, { x: 4, y: 1 }, { x: 5, y: 1 },
        { x: 0, y: 3 }, { x: 1, y: 3 }, { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 }, { x: 5, y: 4 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 5, y: 3 },
      switches: [{ x: 2, y: 1 }],
      gates: [{ x: 4, y: 3, openTicks: 1, closedTicks: 1, linkedSwitch: { x: 2, y: 1 } }],
      conveyors: [
        { x: 2, y: 2, dir: 1 },
        { x: 3, y: 3, dir: 0 },
      ],
    },
    victoryCondition: { reachGoal: true, requireAllSwitches: true, maxTicks: 8 },
    parTicks: 8,
  },
  {
    id: '5-10',
    index: 0,
    act: 2,
    chapter: 5,
    chapterTitle: '第5章 構造体',
    stageKind: 'puzzle',
    title: '5-10. スパーク回避付き巡回構造体 GuardBot',
    topicTag: '構造体メソッド + センサー待機',
    kurumiIntro:
      '巡回スパークが通路を行き来しているよ！構造体 `GuardBot` に安全確認付きの `safe_advance(&self, n: i32)` メソッドを持たせて通り抜けよう。',
    goalSummary: 'GuardBot でスパークを避けつつ全スイッチを踏んでゴール (5, 1) へ',
    bookSectionTitle: '5.3 安全チェックを内蔵したメソッド設計',
    bookSummary:
      '移動や待機のセンサーチェックを構造体のメソッド内に閉じ込めると、メイン処理が読みやすく安全な設計になります。',
    bookKeyCode: 'fn safe_advance(&self, steps: i32)',
    starterCode: `struct GuardBot {
    vault_boost: i32,
}

impl GuardBot {
    fn safe_advance(&self, steps: i32) {
        for _ in 0..steps {
            // スパークが前にいたら 1ティック待とう！
            step();
        }
    }
    fn deposit(&self) {
        add_vault(self.vault_boost);
    }
}

fn main() {
    let bot = GuardBot { vault_boost: 3 };
    bot.deposit();
    bot.safe_advance(5);
}`,
    solutionCode: `struct GuardBot {
    vault_boost: i32,
}

impl GuardBot {
    fn safe_advance(&self, steps: i32) {
        for _ in 0..steps {
            while is_spark_ahead() || !is_gate_open() {
                wait_tick(1);
            }
            step();
        }
    }
    fn deposit(&self) {
        add_vault(self.vault_boost);
    }
}

fn main() {
    let bot = GuardBot { vault_boost: 3 };
    bot.deposit();
    bot.safe_advance(5);
}`,
    quickChips: [
      { label: 'while is_spark_ahead() || !is_gate_open() { wait_tick(1); }', insert: 'while is_spark_ahead() || !is_gate_open() {\n                wait_tick(1);\n            }\n            ' },
    ],
    hints: [
      '(2,1) と (4,1) に横断スパークやスイッチ連動ゲートがあるよ！',
      'safe_advance の step() の直前に `while is_spark_ahead() || !is_gate_open() { wait_tick(1); }` を入れよう。',
      'while is_spark_ahead() || !is_gate_open() {\n    wait_tick(1);\n}',
    ],
    worldSetup: {
      width: 6,
      height: 5,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 3, y: 0 }, { x: 5, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 3, y: 2 }, { x: 5, y: 2 },
        { x: 0, y: 3 }, { x: 1, y: 3 }, { x: 3, y: 3 }, { x: 4, y: 3 }, { x: 5, y: 3 },
        { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 }, { x: 5, y: 4 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 5, y: 1 },
      switches: [{ x: 1, y: 1 }],
      gates: [{ x: 3, y: 1, openTicks: 1, closedTicks: 1, linkedSwitch: { x: 1, y: 1 } }],
      vault: { x: 4, y: 0, initial: 0, target: 3 },
      sparks: [
        { id: 'sp1', path: [{ x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 2, y: 2 }, { x: 2, y: 1 }], initialIndex: 4 },
      ],
    },
    victoryCondition: { reachGoal: true, vaultTarget: 3, requireAllSwitches: true },
    parTicks: 9,
  },
  {
    id: '5-11',
    index: 0,
    act: 2,
    chapter: 5,
    chapterTitle: '第5章 構造体',
    stageKind: 'puzzle',
    title: '5-11. コア運搬構造体 Carrier の空間ルール実践',
    topicTag: '構造体 + コア空間納品',
    kurumiIntro:
      '検査台 `&T` と強化台 `&mut` が別々のマスにあるよ！構造体 `CoreTruck` に積載パワーを持たせて、現地で検査→強化→納品の順にこなそう！',
    goalSummary: '検査・強化・納品を決まった台で行い、パワー⚡4以上＋ゴール (5, 2) へ',
    bookSectionTitle: '5.2 & 5.3 現場手順を表す構造体メソッド',
    bookSummary:
      '検査台では `&core`、強化台では `&mut core`、納品台では所有権を移す `deliver(core)` を使う手順を綺麗に組み立てましょう。',
    bookKeyCode: 'scan(&core); boost(&mut core); deliver(core);',
    starterCode: `struct Mission {
    scans: i32,
}

impl Mission {
    fn new() -> Mission {
        Mission { scans: 0 }
    }
    fn run(&mut self) {
        // コアの位置(1,1)まで歩こう
        step(1);
        let mut core = grab_core();
        // (2,1)検査台へ進んで scan(&core)、次に(3,1)強化台へ進んで boost(&mut core)しよう！
        step(3);
        turn_right();
        step(1);
        deliver(core);
    }
}

fn main() {
    let mut m = Mission::new();
    m.run();
}`,
    solutionCode: `struct Mission {
    scans: i32,
}

impl Mission {
    fn new() -> Mission {
        Mission { scans: 0 }
    }
    fn run(&mut self) {
        step(1);
        let mut core = grab_core();
        step(1);
        scan(&core);
        self.scans += 1;
        step(1);
        boost(&mut core);
        step(2);
        turn_right();
        step(1);
        deliver(core);
    }
}

fn main() {
    let mut m = Mission::new();
    m.run();
}`,
    quickChips: [
      { label: 'scan(&core);', insert: 'scan(&core);\n        ' },
      { label: 'boost(&mut core);', insert: 'boost(&mut core);\n        ' },
    ],
    hints: [
      'このステージは空間ルールが有効だよ！(1,1)で拾い、(2,1)で scan(&core)、(3,1)で boost(&mut core) しよう！',
      'boost したあと (5,1) で右折し (5,2) の納品台へ進んで deliver(core) しよう！',
      'step(1); scan(&core); step(1); boost(&mut core); step(2); turn_right(); step(1); deliver(core);',
    ],
    worldSetup: {
      width: 6,
      height: 4,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 2 },
        { x: 0, y: 3 }, { x: 1, y: 3 }, { x: 2, y: 3 }, { x: 3, y: 3 }, { x: 4, y: 3 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 5, y: 2 },
      cores: [{ id: 'c1', x: 1, y: 1, power: 2, label: '輸送コア' }],
      scanners: [{ x: 2, y: 1 }],
      chargers: [{ x: 3, y: 1 }],
      deliveries: [{ x: 5, y: 2 }],
    },
    victoryCondition: { reachGoal: true, deliverCores: 1, minCorePower: 4, scanCount: 1, requireSpatialCoreRules: true },
    parTicks: 12,
  },
  {
    id: '5-12',
    index: 0,
    act: 2,
    chapter: 5,
    chapterTitle: '第5章 構造体',
    stageKind: 'puzzle',
    title: '5-12. フィールド更新ショートハンドと分岐ナビ',
    topicTag: 'struct 更新 + 分岐ナビ',
    kurumiIntro:
      '構造体 `NavConfig` の中で歩数とエネルギーチャージ量を計算しよう！目標座標 `goal_x()` を参考にしながら2つのスイッチを確実に踏んでね。',
    goalSummary: 'NavConfig を使って2つのスイッチと金庫⚡5を達成し (5, 3) へ',
    bookSectionTitle: '5.1 & 5.2 構造体インスタンスの生成と更新',
    bookSummary:
      '構造体の設定値をまとめ、状況に合わせて `add_vault` と曲がり角のステップを組み合わせます。',
    bookKeyCode: 'struct NavConfig { east: i32, south: i32, power: i32 }',
    starterCode: `struct NavConfig {
    east: i32,
    south: i32,
    power: i32,
}

impl NavConfig {
    fn start(&self) {
        add_vault(self.power);
        step(self.east);
        turn_right();
        step(self.south);
    }
}

fn main() {
    let cfg = NavConfig { east: 2, south: 1, power: 2 };
    cfg.start();
}`,
    solutionCode: `struct NavConfig {
    east: i32,
    south: i32,
    power: i32,
}

impl NavConfig {
    fn start(&self) {
        add_vault(self.power);
        step(self.east);
        turn_right();
        step(self.south);
    }
}

fn main() {
    let cfg = NavConfig { east: 5, south: 2, power: 5 };
    cfg.start();
}`,
    quickChips: [
      { label: 'NavConfig { east: 5, south: 2, power: 5 }', insert: 'NavConfig { east: 5, south: 2, power: 5 }' },
    ],
    hints: [
      '上の廊下にスイッチが2つ (2,1) と (4,1) にあるよ！東へ 5 歩で (5,1) まで行けるよ。',
      'そこから右折して南へ 2 歩進むとゲートを抜けてゴール (5,3) に着くよ！',
      'let cfg = NavConfig { east: 5, south: 2, power: 5 };',
    ],
    worldSetup: {
      width: 6,
      height: 5,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 2 },
        { x: 0, y: 3 }, { x: 1, y: 3 }, { x: 2, y: 3 }, { x: 3, y: 3 }, { x: 4, y: 3 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 5, y: 3 },
      switches: [{ x: 2, y: 1 }, { x: 4, y: 1 }],
      gates: [{ x: 5, y: 2, openTicks: 1, closedTicks: 1, linkedSwitch: { x: 4, y: 1 } }],
      vault: { x: 3, y: 0, initial: 0, target: 5 },
    },
    victoryCondition: { reachGoal: true, vaultTarget: 5, requireAllSwitches: true },
    parTicks: 10,
  },
  {
    id: '5-13',
    index: 0,
    act: 2,
    chapter: 5,
    chapterTitle: '第5章 構造体',
    stageKind: 'puzzle',
    title: '5-13. 自律センサー搭載 Rover 構造体',
    topicTag: '構造体 + 左手法迷路',
    kurumiIntro:
      '構造体 `Rover` にステップカウンタを持たせて、右折・左折・前進を決めるメソッドを作ろう！L字やU字の迷路も構造体メソッドだけで抜けられるよ。',
    goalSummary: 'Rover::solve() で迷路を進み、歩数ログを金庫⚡5に入れてゴールへ',
    bookSectionTitle: '5.3 & 3.5 自律制御メソッドを持つ構造体',
    bookSummary:
      '構造体自身が自分の状態（歩数やエネルギーなど）を更新しながらセンサーで進路を選ぶ設計です。',
    bookKeyCode: 'fn solve(&mut self) { while !at_goal() { ... } }',
    starterCode: `struct Rover {
    moves: i32,
}

impl Rover {
    fn new() -> Rover {
        Rover { moves: 0 }
    }
    fn solve(&mut self) {
        while !at_goal() {
            if !is_wall_ahead() {
                step();
                self.moves += 1;
            } else {
                turn_right();
            }
        }
        // スイッチと歩数分の金庫を満たそう（必要な⚡は5だよ）
        add_vault(self.moves);
    }
}

fn main() {
    let mut r = Rover::new();
    r.solve();
}`,
    solutionCode: `struct Rover {
    moves: i32,
}

impl Rover {
    fn new() -> Rover {
        Rover { moves: 0 }
    }
    fn solve(&mut self) {
        while !at_goal() {
            if !is_wall_left() {
                turn_left();
                step();
                self.moves += 1;
            } else if !is_wall_ahead() {
                step();
                self.moves += 1;
            } else {
                turn_right();
            }
        }
        add_vault(self.moves);
    }
}

fn main() {
    let mut r = Rover::new();
    r.solve();
}`,
    quickChips: [
      { label: 'if !is_wall_left()', insert: 'if !is_wall_left() {\n                turn_left();\n                step();\n                self.moves += 1;\n            } else ' },
    ],
    hints: [
      '今のロジックだと右折しかできなくて、途中で左に曲がれないよ！',
      '!is_wall_left() のときに左折して 1 歩進む「左手法」を追加してみよう。',
      'if !is_wall_left() { turn_left(); step(); self.moves += 1; } else if !is_wall_ahead() { step(); self.moves += 1; } else { turn_right(); }',
    ],
    worldSetup: {
      width: 5,
      height: 5,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 },
        { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 4, y: 1 },
        { x: 4, y: 2 },
        { x: 0, y: 3 }, { x: 1, y: 3 }, { x: 2, y: 3 }, { x: 3, y: 3 }, { x: 4, y: 3 },
        { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 },
      ],
      botStart: { x: 0, y: 2, dir: 0 },
      goal: { x: 3, y: 1 },
      vault: { x: 1, y: 0, initial: 0, target: 4 },
    },
    victoryCondition: { reachGoal: true, vaultTarget: 4 },
    parTicks: 8,
  },
  {
    id: '5-14',
    index: 0,
    act: 2,
    chapter: 5,
    chapterTitle: '第5章 構造体',
    stageKind: 'challenge',
    title: '5-14. 2段階ベルトと連動ゲートの時刻パズル',
    topicTag: '構造体 + 周期ゲート計算',
    kurumiIntro:
      'ベルトコンベアに乗ってスイッチを踏み、周期ゲートをぴったり開くタイミングで通り抜けよう！構造体 `TimerBot` で待機タイミングを調整してね。',
    goalSummary: '10ティック以内に全スイッチを踏んで周期ゲートを抜け (5, 1) へ',
    bookSectionTitle: '5.3 パラメータ化したタイミング制御',
    bookSummary:
      '構造体に待機ティック数をフィールドとして持たせることで、コードのロジックを変えずにタイミングの微調整ができます。',
    bookKeyCode: 'struct TimerBot { initial_wait: i32 }',
    starterCode: `struct TimerBot {
    initial_wait: i32,
}

impl TimerBot {
    fn run(&self) {
        if self.initial_wait > 0 {
            wait_tick(self.initial_wait);
        }
        // スパーク(2,1)の前で安全を待って、コンベア(1,1)やゲート(4,1)を越えよう！
        for _ in 0..4 {
            while is_spark_ahead() || !is_gate_open() {
                wait_tick(1);
            }
            step();
        }
    }
}

fn main() {
    let tb = TimerBot { initial_wait: 0 };
    tb.run();
}`,
    solutionCode: `struct TimerBot {
    initial_wait: i32,
}

impl TimerBot {
    fn run(&self) {
        if self.initial_wait > 0 {
            wait_tick(self.initial_wait);
        }
        for _ in 0..3 {
            while is_spark_ahead() || !is_gate_open() {
                wait_tick(1);
            }
            step();
        }
    }
}

fn main() {
    let tb = TimerBot { initial_wait: 1 };
    tb.run();
}`,
    quickChips: [
      { label: '0..3', insert: '0..3' },
      { label: 'initial_wait: 1', insert: 'initial_wait: 1' },
    ],
    hints: [
      '(1,1) と (3,1) が右向きコンベアだよ！(1,1) に乗ると (2,1) へ、(3,1) に乗るとスイッチのある (4,1) まで一気に運ばれるよ！',
      'コンベアが2つあるから、`for _ in 0..3` で3回 step() するだけで (5,1) に届くよ！ただし(2,1)には横切るスパークがいるので、初期待機 `initial_wait: 1` でタイミングをずらそう。',
      'for _ in 0..3 と initial_wait: 1 を使おう！',
    ],
    worldSetup: {
      width: 6,
      height: 3,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 2 }, { x: 5, y: 2 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 5, y: 1 },
      conveyors: [
        { x: 1, y: 1, dir: 0 },
        { x: 3, y: 1, dir: 0 },
      ],
      switches: [{ x: 4, y: 1 }],
      sparks: [
        { id: 'sp1', path: [{ x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 1 }], initialIndex: 0 },
      ],
    },
    victoryCondition: { reachGoal: true, requireAllSwitches: true, maxTicks: 10 },
    parTicks: 6,
  },
  {
    id: '5-15',
    index: 0,
    act: 2,
    chapter: 5,
    chapterTitle: '第5章 構造体',
    stageKind: 'challenge',
    title: '5-15. 複数インスタンス協調：偵察と実動',
    topicTag: '複数構造体 + 空間納品',
    kurumiIntro:
      '「設計図構造体 `Blueprint`」と「実行ロボ構造体 `Courier`」の2つの構造体を組み合わせて、スイッチ解除→コア回収→強化→納品の全工程をクリアしよう！',
    goalSummary: 'Blueprint から Courier を組み立て、コア⚡4以上納品＋スイッチ＋ゴールへ',
    bookSectionTitle: '5.3 複数の構造体同士の連携設計',
    bookSummary:
      'データを持つ構造体と実行を担う構造体を分けると、複雑な工程でも役割がすっきり整理できます。',
    bookKeyCode: 'let c = Courier::from_bp(&bp);',
    starterCode: `struct Blueprint {
    vault_amt: i32,
}

struct Courier {
    vault_amt: i32,
}

impl Courier {
    fn from_bp(bp: Blueprint) -> Courier {
        Courier { vault_amt: bp.vault_amt }
    }
    fn operate(&self) {
        add_vault(self.vault_amt);
        // (1,1)のコアを拾って、(2,1)強化台で boost(&mut core) して、(4,1)納品台・ゴールへ運ぼう！
        step(4);
    }
}

fn main() {
    let bp = Blueprint { vault_amt: 4 };
    let courier = Courier::from_bp(bp);
    courier.operate();
}`,
    solutionCode: `struct Blueprint {
    vault_amt: i32,
}

struct Courier {
    vault_amt: i32,
}

impl Courier {
    fn from_bp(bp: Blueprint) -> Courier {
        Courier { vault_amt: bp.vault_amt }
    }
    fn operate(&self) {
        add_vault(self.vault_amt);
        step(1);
        let mut core = grab_core();
        step(1);
        boost(&mut core);
        step(2);
        deliver(core);
    }
}

fn main() {
    let bp = Blueprint { vault_amt: 4 };
    let courier = Courier::from_bp(bp);
    courier.operate();
}`,
    quickChips: [
      { label: 'let mut core = grab_core();', insert: 'let mut core = grab_core();\n        ' },
      { label: 'boost(&mut core);', insert: 'boost(&mut core);\n        ' },
      { label: 'deliver(core);', insert: 'deliver(core);\n        ' },
    ],
    hints: [
      '(1,1) で grab_core()、(2,1) はスイッチ兼強化台なので boost(&mut core)！',
      'スイッチ (2,1) を踏むとゲート (3,1) が開くから、さらに 2 歩進んで (4,1) で deliver(core) しよう！',
      'step(1); let mut core = grab_core(); step(1); boost(&mut core); step(2); deliver(core);',
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
      cores: [{ id: 'c1', x: 1, y: 1, power: 2, label: '設計コア' }],
      chargers: [{ x: 2, y: 1 }],
      switches: [{ x: 2, y: 1 }],
      gates: [{ x: 3, y: 1, openTicks: 1, closedTicks: 1, linkedSwitch: { x: 2, y: 1 } }],
      deliveries: [{ x: 4, y: 1 }],
      vault: { x: 0, y: 0, initial: 0, target: 4 },
    },
    victoryCondition: { reachGoal: true, deliverCores: 1, minCorePower: 4, vaultTarget: 4, requireAllSwitches: true, requireSpatialCoreRules: true },
    parTicks: 10,
  },
  {
    id: '5-16',
    index: 0,
    act: 2,
    chapter: 5,
    chapterTitle: '第5章 構造体',
    stageKind: 'challenge',
    title: '5-16. 第5章挑戦：完璧なからくり配達設計図',
    topicTag: '第5章 最終チャレンジ',
    kurumiIntro:
      '第5章の最終パズル！2箇所のスイッチを踏み、コアの検査＆強化を済ませ、金庫⚡6を満たしながら巡回スパークをくぐり抜けてゴールへ届けてみせよう！',
    goalSummary: '構造体設計で全スイッチ・検査・強化納品(⚡5+)・金庫⚡6を達成',
    bookSectionTitle: '第5章まとめ — 状態・センサー・ルール統合構造体',
    bookSummary:
      '必要な手順をメソッドに整理し、危険物をセンサーで避けつつ空間上の各ステーションを順番に巡る設計の完成です。',
    bookKeyCode: 'impl MasterBot { fn complete(&mut self) { ... } }',
    starterCode: `struct MasterBot {
    vault_charge: i32,
}

impl MasterBot {
    fn new(v: i32) -> MasterBot {
        MasterBot { vault_charge: v }
    }
    fn safe_step(&self, n: i32) {
        for _ in 0..n {
            while is_spark_ahead() || !is_gate_open() {
                wait_tick(1);
            }
            step();
        }
    }
    fn complete(&self) {
        add_vault(self.vault_charge);
        // コア(1,1)→検査台(2,1)→スイッチ・強化台(4,1)→納品台(5,3)
        self.safe_step(1);
    }
}

fn main() {
    let mb = MasterBot::new(6);
    mb.complete();
}`,
    solutionCode: `struct MasterBot {
    vault_charge: i32,
}

impl MasterBot {
    fn new(v: i32) -> MasterBot {
        MasterBot { vault_charge: v }
    }
    fn safe_step(&self, n: i32) {
        for _ in 0..n {
            while is_spark_ahead() || !is_gate_open() {
                wait_tick(1);
            }
            step();
        }
    }
    fn complete(&self) {
        add_vault(self.vault_charge);
        self.safe_step(1);
        let mut core = grab_core();
        self.safe_step(1);
        scan(&core);
        self.safe_step(2);
        boost(&mut core);
        self.safe_step(1);
        turn_right();
        self.safe_step(2);
        deliver(core);
    }
}

fn main() {
    let mb = MasterBot::new(6);
    mb.complete();
}`,
    quickChips: [
      { label: 'scan(&core);', insert: 'scan(&core);\n        ' },
      { label: 'boost(&mut core);', insert: 'boost(&mut core);\n        ' },
      { label: 'deliver(core);', insert: 'deliver(core);\n        ' },
    ],
    hints: [
      '上の廊下：(1,1)で grab_core() → (2,1)で scan(&core) → (3,1)はスパーク横断 → (4,1)が強化台兼スイッチだから boost(&mut core)！',
      'そのまま (5,1) まで東に進んで右折し、下のゲート (5,2) を抜けて (5,3) で deliver(core) しよう！',
      'self.safe_step(1); grab_core -> safe_step(1); scan -> safe_step(2); boost -> safe_step(1); turn_right(); safe_step(2); deliver(core);',
    ],
    worldSetup: {
      width: 6,
      height: 5,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 4, y: 2 },
        { x: 0, y: 3 }, { x: 1, y: 3 }, { x: 2, y: 3 }, { x: 3, y: 3 }, { x: 4, y: 3 },
        { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 }, { x: 5, y: 4 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 5, y: 3 },
      cores: [{ id: 'c1', x: 1, y: 1, power: 3, label: '設計コア' }],
      scanners: [{ x: 2, y: 1 }],
      chargers: [{ x: 4, y: 1 }],
      switches: [{ x: 4, y: 1 }],
      gates: [{ x: 5, y: 2, openTicks: 1, closedTicks: 1, linkedSwitch: { x: 4, y: 1 } }],
      deliveries: [{ x: 5, y: 3 }],
      vault: { x: 1, y: 0, initial: 0, target: 6 },
      sparks: [
        { id: 'sp1', path: [{ x: 3, y: 0 }, { x: 3, y: 1 }, { x: 3, y: 2 }, { x: 3, y: 3 }, { x: 3, y: 2 }, { x: 3, y: 1 }], initialIndex: 0 },
      ],
    },
    victoryCondition: { reachGoal: true, deliverCores: 1, minCorePower: 5, scanCount: 1, vaultTarget: 6, requireAllSwitches: true, requireSpatialCoreRules: true },
    parTicks: 17,
  },

  // =========================================================================
  // 第6章 enumとパターンマッチング パズル・挑戦拡張 (6-13 〜 6-24)
  // =========================================================================
  {
    id: '6-13',
    index: 0,
    act: 2,
    chapter: 6,
    chapterTitle: '第6章 enumとパターンマッチング',
    stageKind: 'puzzle',
    title: '6-13. enum 命令インタプリタ迷路',
    topicTag: 'enum + match インタプリタ',
    kurumiIntro:
      '`Go(n)`・`TurnR`・`TurnL` を並べて、ジグザグの壁とスイッチを抜けながらコンベアへ乗り込むプログラムを `enum` で組もう！',
    goalSummary: 'enum Cmd 列を正しく組んでスイッチとコンベア経由で (5, 3) へ',
    bookSectionTitle: '6.1 命令を配列で並べて解釈する enum',
    bookSummary:
      'ロボットの一連の動きをデータ（`enum` の配列）として表現すると、ルート編集や拡張がとてもやりやすくなります。',
    bookKeyCode: 'vec![Cmd::Go(2), Cmd::TurnR, Cmd::Go(2)]',
    starterCode: `enum Cmd {
    Go(i32),
    TurnR,
    TurnL,
}

fn main() {
    let script = vec![
        Cmd::Go(2),
        // ここから先を埋めよう（ゴールは (5, 3) だよ！）
    ];
    for c in script {
        match c {
            Cmd::Go(n) => step(n),
            Cmd::TurnR => turn_right(),
            Cmd::TurnL => turn_left(),
        }
    }
}`,
    solutionCode: `enum Cmd {
    Go(i32),
    TurnR,
    TurnL,
}

fn main() {
    let script = vec![
        Cmd::Go(2),
        Cmd::TurnR,
        Cmd::Go(2),
        Cmd::TurnL,
        Cmd::Go(2),
    ];
    for c in script {
        match c {
            Cmd::Go(n) => step(n),
            Cmd::TurnR => turn_right(),
            Cmd::TurnL => turn_left(),
        }
    }
}`,
    quickChips: [
      { label: 'Cmd::TurnR,', insert: 'Cmd::TurnR,\n        ' },
      { label: 'Cmd::TurnL,', insert: 'Cmd::TurnL,\n        ' },
      { label: 'Cmd::Go(2),', insert: 'Cmd::Go(2),\n        ' },
    ],
    hints: [
      'Cmd::Go(2) で (2,1) のスイッチを踏みつつ角へ着くよ！',
      '右折して Cmd::Go(2) で南へ (2,3) まで下りよう！',
      '最後に左折して Cmd::Go(2) でコンベア (3,3)->(4,3) を抜けて (5,3) へ！',
    ],
    worldSetup: {
      width: 6,
      height: 5,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 3, y: 1 }, { x: 3, y: 2 },
        { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 }, { x: 5, y: 4 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 5, y: 3 },
      switches: [{ x: 2, y: 1 }],
      gates: [{ x: 4, y: 3, openTicks: 1, closedTicks: 1, linkedSwitch: { x: 2, y: 1 } }],
      conveyors: [{ x: 3, y: 3, dir: 0 }],
    },
    victoryCondition: { reachGoal: true, requireAllSwitches: true, maxTicks: 10 },
    parTicks: 9,
  },
  {
    id: '6-14',
    index: 0,
    act: 2,
    chapter: 6,
    chapterTitle: '第6章 enumとパターンマッチング',
    stageKind: 'puzzle',
    title: '6-14. センサー状態 enum で自律ルート選択',
    topicTag: 'enum + match 分岐',
    kurumiIntro:
      '周りの壁センサーを見て「右に行くか・左に行くか・前に進むか」を `enum Sense { FrontClear, LeftClear, Blocked }` にまとめて選ぼう！',
    goalSummary: 'enum Sense で迷路を自律判定してゴール (4, 4) へ',
    bookSectionTitle: '6.2 状態を enum にして match で分岐',
    bookSummary:
      '複雑な条件判定の結果をいったん分かりやすい `enum` 値へ変換してから `match` で行動を決めると、ミスが激減します。',
    bookKeyCode: 'match sense_tile() { Sense::Left => turn_left(), ... }',
    starterCode: `enum Sense {
    LeftOpen,
    FrontOpen,
    Blocked,
}

fn check_env() -> Sense {
    if !is_wall_left() {
        Sense::LeftOpen
    } else if !is_wall_ahead() {
        Sense::FrontOpen
    } else {
        Sense::Blocked
    }
}

fn main() {
    loop {
        if at_goal() {
            break;
        }
        // check_env() の結果で LeftOpen->左折&step, FrontOpen->step, Blocked->右折しよう！
        step();
    }
}`,
    solutionCode: `enum Sense {
    LeftOpen,
    FrontOpen,
    Blocked,
}

fn check_env() -> Sense {
    if !is_wall_left() {
        Sense::LeftOpen
    } else if !is_wall_ahead() {
        Sense::FrontOpen
    } else {
        Sense::Blocked
    }
}

fn main() {
    loop {
        if at_goal() {
            break;
        }
        match check_env() {
            Sense::LeftOpen => { turn_left(); step(); },
            Sense::FrontOpen => step(),
            Sense::Blocked => turn_right(),
        }
    }
}`,
    quickChips: [
      { label: 'match check_env() { ... }', insert: 'match check_env() {\n            Sense::LeftOpen => { turn_left(); step(); },\n            Sense::FrontOpen => step(),\n            Sense::Blocked => turn_right(),\n        }' },
    ],
    hints: [
      'check_env() 関数はもう用意されているよ！あとは main で `match check_env()` を書くだけ。',
      'LeftOpen なら左を向いて1歩、FrontOpen なら1歩前進、Blocked なら右折しよう！',
      'match check_env() { Sense::LeftOpen => { turn_left(); step(); }, Sense::FrontOpen => step(), Sense::Blocked => turn_right(), }',
    ],
    worldSetup: {
      width: 6,
      height: 6,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 },
        { x: 5, y: 1 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 }, { x: 5, y: 2 },
        { x: 0, y: 3 }, { x: 1, y: 3 }, { x: 2, y: 3 }, { x: 3, y: 3 }, { x: 5, y: 3 },
        { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 5, y: 4 },
        { x: 0, y: 5 }, { x: 1, y: 5 }, { x: 2, y: 5 }, { x: 3, y: 5 }, { x: 4, y: 5 }, { x: 5, y: 5 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 4, y: 4 },
    },
    victoryCondition: { reachGoal: true },
    parTicks: 10,
  },
  {
    id: '6-15',
    index: 0,
    act: 2,
    chapter: 6,
    chapterTitle: '第6章 enumとパターンマッチング',
    stageKind: 'puzzle',
    title: '6-15. Option<i32> の宝石（ボーナス電力）集め',
    topicTag: 'Option<T> / Some / None',
    kurumiIntro:
      '金庫への追加入力が `Option<i32>` として届くよ！`Some(v)` のときだけ金庫へ入れて、`None` のときはスキップして先に進もう。',
    goalSummary: 'Option 配列の Some 値だけ合計⚡6を金庫に入れ、ゲートを越えて (4, 1) へ',
    bookSectionTitle: '6.1 & 6.3 Option<T> をリストで扱う',
    bookSummary:
      '値が存在しない場合があるデータは `Option<T>` のリストにまとめておき、`if let Some(v)` や `match` で安全に取り出します。',
    bookKeyCode: 'for opt in bonuses { if let Some(v) = opt { add_vault(v); } }',
    starterCode: `fn main() {
    let items = vec![Some(2), None, Some(4), None];
    // if let Some(v) で Some の値だけを金庫に入れよう！
    for item in items {
        add_vault(1);
    }
    step(4);
}`,
    solutionCode: `fn main() {
    let items = vec![Some(2), None, Some(4), None];
    for item in items {
        if let Some(v) = item {
            add_vault(v);
        }
    }
    step(4);
}`,
    quickChips: [
      { label: 'if let Some(v) = item { add_vault(v); }', insert: 'if let Some(v) = item {\n            add_vault(v);\n        }' },
    ],
    hints: [
      'items の中に入っている数値は 2 と 4 で、合計すると ⚡6 になるよ！',
      'for ループの中を `if let Some(v) = item { add_vault(v); }` に直そう。',
      'for item in items { if let Some(v) = item { add_vault(v); } }',
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
      vault: { x: 1, y: 0, initial: 0, target: 6 },
    },
    victoryCondition: { reachGoal: true, vaultTarget: 6, requireAllSwitches: true },
    parTicks: 7,
  },
  {
    id: '6-16',
    index: 0,
    act: 2,
    chapter: 6,
    chapterTitle: '第6章 enumとパターンマッチング',
    stageKind: 'puzzle',
    title: '6-16. match 網羅性＋ワイルドカードでスパーク警戒',
    topicTag: 'match 網羅性と _ 制御',
    kurumiIntro:
      '4種類の警告レベル `Warn { Clear, GateClosed, SparkNear, Emergency }` を `match` でさばこう！大切な1つだけ特別扱いして、残りを `_` でまとめることもできるよ。',
    goalSummary: 'enum Warn を完全に網羅して、スパークとゲートを安全突破しよう',
    bookSectionTitle: '6.2 match の網羅性とワイルドカード _',
    bookSummary:
      'すべてのケースを書くか、残りを `_` で受けることでコンパイル時に漏れを防ぎます。',
    bookKeyCode: 'match status { Status::Go => step(), _ => wait_tick(1) }',
    starterCode: `enum Warn {
    Clear,
    GateClosed,
    SparkNear,
    Emergency,
}

fn sense() -> Warn {
    if !is_gate_open() {
        Warn::GateClosed
    } else if is_spark_ahead() {
        Warn::SparkNear
    } else {
        Warn::Clear
    }
}

fn main() {
    while !at_goal() {
        // 網羅性エラーが起きないよう _ => wait_tick(1) を追加しよう！
        match sense() {
            Warn::Clear => step(),
        }
    }
}`,
    solutionCode: `enum Warn {
    Clear,
    GateClosed,
    SparkNear,
    Emergency,
}

fn sense() -> Warn {
    if !is_gate_open() {
        Warn::GateClosed
    } else if is_spark_ahead() {
        Warn::SparkNear
    } else {
        Warn::Clear
    }
}

fn main() {
    while !at_goal() {
        match sense() {
            Warn::Clear => step(),
            _ => wait_tick(1),
        }
    }
}`,
    quickChips: [
      { label: '_ => wait_tick(1),', insert: '_ => wait_tick(1),' },
    ],
    hints: [
      'Warn::Clear 以外の3つ（GateClosed, SparkNear, Emergency）は全部「1ティック待つ」で安全だよ！',
      'match sense() の中に `_ => wait_tick(1),` を足せば網羅性も動作も完璧になるよ。',
      'Warn::Clear => step(),\n            _ => wait_tick(1),',
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
      gates: [{ x: 3, y: 1, openTicks: 2, closedTicks: 2, initialOffset: 0 }],
      sparks: [
        { id: 'sp1', path: [{ x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 2, y: 2 }, { x: 2, y: 1 }], initialIndex: 0 },
      ],
    },
    victoryCondition: { reachGoal: true },
    parTicks: 8,
  },
  {
    id: '6-17',
    index: 0,
    act: 2,
    chapter: 6,
    chapterTitle: '第6章 enumとパターンマッチング',
    stageKind: 'puzzle',
    title: '6-17. enum ダイヤル探索機',
    topicTag: 'enum Ordering + ダイヤル解錠',
    kurumiIntro:
      '秘宝ダイヤルの判定結果 `Ordering` も実は `enum` だよ！`Ordering::Less`, `Greater`, `Equal` を `match` で振り分けて秘密の番号を探り当て、ゲートを開いて進もう！',
    goalSummary: 'while loop と match try_dial(g) でダイヤルを解錠しゴール (5, 1) へ',
    bookSectionTitle: '6.2 標準 enum Ordering のパターンマッチング',
    bookSummary:
      '比較結果を表す `Ordering::{Less, Greater, Equal}` を `match` で受けるのは Rust でとてもよく見る定番パターンです。',
    bookKeyCode: 'match try_dial(g) { Ordering::Equal => { break; }, ... }',
    starterCode: `fn main() {
    let mut guess = 1;
    loop {
        match try_dial(guess) {
            Ordering::Less => guess += 1,
            Ordering::Greater => guess -= 1,
            // Equal のときに { break; } しよう！
            Ordering::Equal => wait_tick(1),
        }
    }
    step(5);
}`,
    solutionCode: `fn main() {
    let mut guess = 1;
    loop {
        match try_dial(guess) {
            Ordering::Less => guess += 1,
            Ordering::Greater => guess -= 1,
            Ordering::Equal => { break; },
        }
    }
    step(5);
}`,
    quickChips: [
      { label: 'Ordering::Equal => { break; },', insert: 'Ordering::Equal => { break; },' },
    ],
    hints: [
      'Ordering::Equal のときにループを抜けられていないよ！',
      'match アームの中で break を使うときは `{ break; }` のように波カッコをつけよう。',
      'Ordering::Equal => { break; },',
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
      dial: { secret: 4 },
      switches: [{ x: 2, y: 1 }],
      gates: [{ x: 3, y: 1, openTicks: 1, closedTicks: 1, linkedSwitch: { x: 2, y: 1 } }],
    },
    victoryCondition: { reachGoal: true, dialSolved: true, requireAllSwitches: true },
    parTicks: 10,
  },
  {
    id: '6-18',
    index: 0,
    act: 2,
    chapter: 6,
    chapterTitle: '第6章 enumとパターンマッチング',
    stageKind: 'puzzle',
    title: '6-18. 複数バリアント enum でコア納品',
    topicTag: 'enum + 空間コア納品',
    kurumiIntro:
      '歩いたり、コアを拾ったり、強化したりする一連の手順を全部 `enum Op` に書き出して、順番に実行してみよう！',
    goalSummary: 'enum Op 列でコアを拾い、検査・強化して (4, 1) で納品しよう',
    bookSectionTitle: '6.1 操作のミニ言語（DSL）を enum で作る',
    bookSummary:
      '異なる種類の操作（移動・コア操作）を1つの `enum` 型として定義し、実行エンジン側で解釈させることができます。',
    bookKeyCode: 'enum Op { Walk(i32), Grab, Scan, Boost, Deliver }',
    starterCode: `enum Op {
    Walk(i32),
    Grab,
    Scan,
    Boost,
    Deliver,
}

fn main() {
    // コア(1,1) -> 検査(2,1) -> 強化(3,1) -> 納品(4,1) だよ！
    let ops = vec![
        Op::Walk(1),
        Op::Grab,
    ];
    let mut held = grab_core(); // ← 仮置き。実際は(1,1)で拾うよ
    for op in ops {
        match op {
            Op::Walk(n) => step(n),
            Op::Grab => held = grab_core(),
            Op::Scan => scan(&held),
            Op::Boost => boost(&mut held),
            Op::Deliver => deliver(held),
        }
    }
}`,
    solutionCode: `enum Op {
    Walk(i32),
    Grab,
    Scan,
    Boost,
    Deliver,
}

fn main() {
    let ops = vec![
        Op::Walk(1),
        Op::Grab,
        Op::Walk(1),
        Op::Scan,
        Op::Walk(1),
        Op::Boost,
        Op::Walk(1),
        Op::Deliver,
    ];
    let mut has = false;
    let mut held = None;
    for op in ops {
        match op {
            Op::Walk(n) => step(n),
            Op::Grab => {
                held = Some(grab_core());
                has = true;
            },
            Op::Scan => {
                if let Some(c) = held {
                    scan(&c);
                }
            },
            Op::Boost => {
                if let Some(mut c) = held {
                    boost(&mut c);
                    held = Some(c);
                }
            },
            Op::Deliver => {
                if let Some(c) = held {
                    deliver(c);
                }
            },
        }
    }
}`,
    quickChips: [
      { label: 'Op::Scan,', insert: 'Op::Scan,\n        ' },
      { label: 'Op::Boost,', insert: 'Op::Boost,\n        ' },
      { label: 'Op::Deliver,', insert: 'Op::Deliver,\n        ' },
    ],
    hints: [
      '最初の Walk(1) の前に `grab_core()` を呼んでしまわないよう、`let mut held = None;` にしよう！',
      'ops には Walk(1) → Grab → Walk(1) → Scan → Walk(1) → Boost → Walk(1) → Deliver を並べよう。',
      'Option の `if let Some(c)` を使えば安全に Scan / Boost / Deliver できるよ！',
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
      cores: [{ id: 'c1', x: 1, y: 1, power: 2, label: '指示コア' }],
      scanners: [{ x: 2, y: 1 }],
      chargers: [{ x: 3, y: 1 }],
      deliveries: [{ x: 4, y: 1 }],
    },
    victoryCondition: { reachGoal: true, deliverCores: 1, minCorePower: 4, scanCount: 1, requireSpatialCoreRules: true },
    parTicks: 10,
  },
  {
    id: '6-19',
    index: 0,
    act: 2,
    chapter: 6,
    chapterTitle: '第6章 enumとパターンマッチング',
    stageKind: 'puzzle',
    title: '6-19. enum impl メソッドと時計仕掛けスイッチ',
    topicTag: 'enum への impl + コンベア',
    kurumiIntro:
      '`enum StepAction` に `impl StepAction` で `run(&self)` メソッドを持たせよう！コンベアの押し出しを計算して最短歩数で両方のスイッチを回収してね。',
    goalSummary: 'enum Action::run() で全スイッチを踏んで 8ティック以内に (5, 1) へ',
    bookSectionTitle: '6.1 & 6.2 enum メソッドと最短パス',
    bookSummary:
      '振る舞いまで `enum` 自身に `impl` しておくと、配列をループで回しながら `.run()` を呼ぶだけで済みます。',
    bookKeyCode: 'impl StepAction { fn run(&self) { match self { ... } } }',
    starterCode: `enum StepAction {
    SafeStep,
    Charge(i32),
}

impl StepAction {
    fn run(&self) {
        match self {
            StepAction::SafeStep => {
                while !is_gate_open() { wait_tick(1); }
                step();
            },
            StepAction::Charge(v) => add_vault(*v),
        }
    }
}

fn main() {
    // コンベア(1,1)で(2,1)のスイッチへ。さらに進んでゴール(5,1)へ！
    let list = vec![StepAction::Charge(1), StepAction::SafeStep];
    for a in list {
        a.run();
    }
}`,
    solutionCode: `enum StepAction {
    SafeStep,
    Charge(i32),
}

impl StepAction {
    fn run(&self) {
        match self {
            StepAction::SafeStep => {
                while !is_gate_open() { wait_tick(1); }
                step();
            },
            StepAction::Charge(v) => add_vault(*v),
        }
    }
}

fn main() {
    let list = vec![
        StepAction::Charge(3),
        StepAction::SafeStep,
        StepAction::SafeStep,
        StepAction::SafeStep,
        StepAction::SafeStep,
    ];
    for a in list {
        a.run();
    }
}`,
    quickChips: [
      { label: 'StepAction::Charge(3),', insert: 'StepAction::Charge(3),\n        ' },
      { label: 'StepAction::SafeStep,', insert: 'StepAction::SafeStep,\n        ' },
    ],
    hints: [
      'コンベア (1,1) が 1マス押し出してくれるから、SafeStep 1回で (2,1) のスイッチに到達するよ！',
      'そこから SafeStep をあと3回（(3,1)ゲート→(4,1)スイッチ→(5,1)ゴール）実行しよう。金庫目標は⚡3だよ！',
      'Charge(3) と SafeStep × 4 回を list に並べて実行しよう！',
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
      conveyors: [{ x: 1, y: 1, dir: 0 }],
      switches: [{ x: 2, y: 1 }, { x: 4, y: 1 }],
      gates: [{ x: 3, y: 1, openTicks: 1, closedTicks: 1, linkedSwitch: { x: 2, y: 1 } }],
      vault: { x: 1, y: 0, initial: 0, target: 3 },
    },
    victoryCondition: { reachGoal: true, vaultTarget: 3, requireAllSwitches: true, maxTicks: 8 },
    parTicks: 6,
  },
  {
    id: '6-20',
    index: 0,
    act: 2,
    chapter: 6,
    chapterTitle: '第6章 enumとパターンマッチング',
    stageKind: 'puzzle',
    title: '6-20. Option と match 式で動的分岐ルート',
    topicTag: 'let val = match opt',
    kurumiIntro:
      '「次の歩数はいくらか？」を `Option` で返す関数 `next_hop(x)` と `match` 式を使って、L字の曲がり角でちょうど向きを変えよう！',
    goalSummary: 'match 式が返す距離を使って L字コース (3, 4) へ到達しよう',
    bookSectionTitle: '6.2 & 6.3 Option を返す関数と match 式',
    bookSummary:
      '`match` は値を返す「式」なので、直接関数の戻り値を受け取って変数の計算に組み込めます。',
    bookKeyCode: 'let d = match get_hop(pos) { Some(n) => n, None => 0 };',
    starterCode: `fn plan_leg(is_first: bool) -> Option<i32> {
    if is_first { Some(3) } else { Some(3) }
}

fn main() {
    let dx = match plan_leg(true) {
        Some(n) => n,
        None => 0,
    };
    let dy = match plan_leg(false) {
        // ここは下へ 3歩行きたい！でもスイッチを踏む位置を確認してね
        Some(n) => 1,
        None => 0,
    };
    step(dx);
    turn_right();
    step(dy);
}`,
    solutionCode: `fn plan_leg(is_first: bool) -> Option<i32> {
    if is_first { Some(3) } else { Some(3) }
}

fn main() {
    let dx = match plan_leg(true) {
        Some(n) => n,
        None => 0,
    };
    let dy = match plan_leg(false) {
        Some(n) => n,
        None => 0,
    };
    step(dx);
    turn_right();
    step(dy);
}`,
    quickChips: [
      { label: 'Some(n) => n,', insert: 'Some(n) => n,' },
    ],
    hints: [
      'dx = 3 で (3,1) のスイッチを踏みつつ右折できるよ！',
      'dy も plan_leg(false) が返す Some(3) の値 `n` をそのまま使えば、ゲート (3,2) を抜けて (3,4) へ到着するよ！',
      'Some(n) => n,',
    ],
    worldSetup: {
      width: 5,
      height: 6,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 },
        { x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 }, { x: 4, y: 4 },
        { x: 0, y: 5 }, { x: 1, y: 5 }, { x: 2, y: 5 }, { x: 3, y: 5 }, { x: 4, y: 5 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 3, y: 4 },
      switches: [{ x: 3, y: 1 }],
      gates: [{ x: 3, y: 2, openTicks: 1, closedTicks: 1, linkedSwitch: { x: 3, y: 1 } }],
    },
    victoryCondition: { reachGoal: true, requireAllSwitches: true },
    parTicks: 8,
  },
  {
    id: '6-21',
    index: 0,
    act: 2,
    chapter: 6,
    chapterTitle: '第6章 enumとパターンマッチング',
    stageKind: 'puzzle',
    title: '6-21. 出力チェック付き enum ログ設計',
    topicTag: 'enum + stdout 検証',
    kurumiIntro:
      'どの工程を実行したかが工房のログにしっかり残るように、移動とコア強化で別々のメッセージを表示する `enum Event` を動かそう！',
    goalSummary: '"SCAN_DONE" と "BOOST_DONE" を出力し、コア⚡4以上を納品しよう',
    bookSectionTitle: '6.2 ログ出力と処理実行をセットにする enum',
    bookSummary:
      'ログ印字とロボット動作を `match` の同じ腕（アーム）に書けば、動いた記録の取りこぼしがなくなります。',
    bookKeyCode: 'match ev { Ev::Scan => { println!("SCAN_DONE"); scan(&c); } ... }',
    starterCode: `enum StepJob {
    Move(i32),
    Inspect,
    PowerUp,
    Finish,
}

fn main() {
    step(1);
    let mut core = grab_core();
    let jobs = vec![StepJob::Move(1), StepJob::Inspect, StepJob::Move(1), StepJob::PowerUp, StepJob::Move(1), StepJob::Finish];
    for j in jobs {
        match j {
            StepJob::Move(n) => step(n),
            StepJob::Inspect => {
                // "SCAN_DONE" を出力して scan(&core) を呼ぼう！
                scan(&core);
            },
            StepJob::PowerUp => {
                // "BOOST_DONE" を出力して boost(&mut core) を呼ぼう！
                boost(&mut core);
            },
            StepJob::Finish => deliver(core),
        }
    }
}`,
    solutionCode: `enum StepJob {
    Move(i32),
    Inspect,
    PowerUp,
    Finish,
}

fn main() {
    step(1);
    let mut core = grab_core();
    let jobs = vec![StepJob::Move(1), StepJob::Inspect, StepJob::Move(1), StepJob::PowerUp, StepJob::Move(1), StepJob::Finish];
    for j in jobs {
        match j {
            StepJob::Move(n) => step(n),
            StepJob::Inspect => {
                println!("SCAN_DONE");
                scan(&core);
            },
            StepJob::PowerUp => {
                println!("BOOST_DONE");
                boost(&mut core);
            },
            StepJob::Finish => deliver(core),
        }
    }
}`,
    quickChips: [
      { label: 'println!("SCAN_DONE");', insert: 'println!("SCAN_DONE");\n                ' },
      { label: 'println!("BOOST_DONE");', insert: 'println!("BOOST_DONE");\n                ' },
    ],
    hints: [
      'Inspect の枝に `println!("SCAN_DONE");`、PowerUp の枝に `println!("BOOST_DONE");` を追加しよう！',
      'scan や boost、deliver 自体はすでに正しいマスにいる状態で呼ばれるよ！',
      'println!("SCAN_DONE");\nscan(&core); / println!("BOOST_DONE");\nboost(&mut core);',
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
      cores: [{ id: 'c1', x: 1, y: 1, power: 2, label: '記録コア' }],
      scanners: [{ x: 2, y: 1 }],
      chargers: [{ x: 3, y: 1 }],
      deliveries: [{ x: 4, y: 1 }],
    },
    victoryCondition: { reachGoal: true, deliverCores: 1, minCorePower: 4, scanCount: 1, stdoutIncludes: ['SCAN_DONE', 'BOOST_DONE'], requireSpatialCoreRules: true },
    parTicks: 12,
  },
  {
    id: '6-22',
    index: 0,
    act: 2,
    chapter: 6,
    chapterTitle: '第6章 enumとパターンマッチング',
    stageKind: 'challenge',
    title: '6-22. 迷路探索＋if let ボーナス金庫',
    topicTag: 'enum + if let + 迷路探索',
    kurumiIntro:
      '道中のチェックポイントごとに金庫エネルギーを受け取りつつ、スイッチを踏んでコの字の迷路を抜けていこう！',
    goalSummary: '全スイッチを踏んで金庫⚡6を満たし、(0, 3) のゴールへ到達',
    bookSectionTitle: '6.3 if let と自律迷路走破の融合',
    bookSummary:
      '重要な1パターンだけを手早く拾う `if let` と、網羅性が要る移動判定 `match` を両方適材適所で使い分けましょう。',
    bookKeyCode: 'if let Bonus::Gold(v) = cell { add_vault(v); }',
    starterCode: `enum Bonus {
    Gold(i32),
    Empty,
}

fn main() {
    let rewards = vec![Bonus::Gold(2), Bonus::Empty, Bonus::Gold(4)];
    for r in rewards {
        if let Bonus::Gold(v) = r {
            add_vault(v);
        }
    }
    // コの字の道：(0,1)->(4,1)スイッチ->(4,3)->(0,3)ゴール！
    step(4);
}`,
    solutionCode: `enum Bonus {
    Gold(i32),
    Empty,
}

fn main() {
    let rewards = vec![Bonus::Gold(2), Bonus::Empty, Bonus::Gold(4)];
    for r in rewards {
        if let Bonus::Gold(v) = r {
            add_vault(v);
        }
    }
    step(4);
    turn_right();
    step(2);
    turn_right();
    step(4);
}`,
    quickChips: [
      { label: 'turn_right();', insert: 'turn_right();\n    ' },
      { label: 'step(2);', insert: 'step(2);\n    ' },
      { label: 'step(4);', insert: 'step(4);\n    ' },
    ],
    hints: [
      '上の廊下で step(4) をすると (4,1) のスイッチを踏みつつ行き止まりまで来るよ！',
      'そこから turn_right() → step(2) でゲート (4,2) を抜けて (4,3) へ！',
      'さらに turn_right() → step(4) で (0,3) のゴールに着くよ（途中 (2,3) のスイッチも踏めるね）。',
    ],
    worldSetup: {
      width: 6,
      height: 5,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 }, { x: 5, y: 1 }, { x: 5, y: 2 }, { x: 5, y: 3 },
        { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 }, { x: 5, y: 4 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 0, y: 3 },
      switches: [{ x: 4, y: 1 }, { x: 2, y: 3 }],
      gates: [{ x: 4, y: 2, openTicks: 1, closedTicks: 1, linkedSwitch: { x: 4, y: 1 } }],
      vault: { x: 1, y: 0, initial: 0, target: 6 },
    },
    victoryCondition: { reachGoal: true, vaultTarget: 6, requireAllSwitches: true },
    parTicks: 15,
  },
  {
    id: '6-23',
    index: 0,
    act: 2,
    chapter: 6,
    chapterTitle: '第6章 enumとパターンマッチング',
    stageKind: 'challenge',
    title: '6-23. 二重スイッチと enum コマンド短縮チャレンジ',
    topicTag: 'enum + コンベア短縮チャレンジ',
    kurumiIntro:
      'コマンド列を工夫して、2箇所のコンベアを連続で乗り継ぎながら制限ティック以内にスイッチもゴールも決めよう！',
    goalSummary: 'enum 指令でコンベアとスイッチを抜け 9ティック以内に (5, 3) へ',
    bookSectionTitle: '6.2 & 6.3 コンベア連鎖を enum で操る',
    bookSummary:
      'コンベアが自動で移動を補ってくれる場所を見抜き、最小限のバリアント列を組むパズルです。',
    bookKeyCode: 'vec![Inst::Go(1), Inst::Right, ...]',
    starterCode: `enum Inst {
    Go(i32),
    Right,
    Left,
}

fn main() {
    let prog = vec![
        Inst::Go(1),
    ];
    for p in prog {
        match p {
            Inst::Go(n) => step(n),
            Inst::Right => turn_right(),
            Inst::Left => turn_left(),
        }
    }
}`,
    solutionCode: `enum Inst {
    Go(i32),
    Right,
    Left,
}

fn main() {
    let prog = vec![
        Inst::Go(1),
        Inst::Right,
        Inst::Go(1),
        Inst::Left,
        Inst::Go(2),
    ];
    for p in prog {
        match p {
            Inst::Go(n) => step(n),
            Inst::Right => turn_right(),
            Inst::Left => turn_left(),
        }
    }
}`,
    quickChips: [
      { label: 'Inst::Right,', insert: 'Inst::Right,\n        ' },
      { label: 'Inst::Left,', insert: 'Inst::Left,\n        ' },
      { label: 'Inst::Go(1),', insert: 'Inst::Go(1),\n        ' },
      { label: 'Inst::Go(2),', insert: 'Inst::Go(2),\n        ' },
    ],
    hints: [
      '(1,1) の東向きコンベアで (2,1) のスイッチに乗れるよ！まずは `Inst::Go(1)` だね。',
      '右折して `Inst::Go(1)` を実行すると (2,2) の南向きコンベアが (2,3) へ押し出してくれるよ！',
      'さらに左折して `Inst::Go(2)` を実行すると (3,3) の東コンベアで (4,3) へ押され、もう1歩で (5,3) ゴールへ着くよ！',
    ],
    worldSetup: {
      width: 6,
      height: 5,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 3, y: 1 }, { x: 4, y: 1 }, { x: 5, y: 1 },
        { x: 3, y: 2 }, { x: 4, y: 2 }, { x: 5, y: 2 },
        { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 }, { x: 5, y: 4 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 5, y: 3 },
      switches: [{ x: 2, y: 1 }],
      gates: [{ x: 4, y: 3, openTicks: 1, closedTicks: 1, linkedSwitch: { x: 2, y: 1 } }],
      conveyors: [
        { x: 1, y: 1, dir: 0 },
        { x: 2, y: 2, dir: 1 },
        { x: 3, y: 3, dir: 0 },
      ],
    },
    victoryCondition: { reachGoal: true, requireAllSwitches: true, maxTicks: 8 },
    parTicks: 7,
  },
  {
    id: '6-24',
    index: 0,
    act: 2,
    chapter: 6,
    chapterTitle: '第6章 enumとパターンマッチング',
    stageKind: 'challenge',
    title: '6-24. 第6章挑戦：ハイブリッド安全ステート制御',
    topicTag: '第6章 最終チャレンジ',
    kurumiIntro:
      '第6章のラスボス課題！`enum Task` のコマンドに、スパーク検知・ゲート待機・ダイヤル解錠・コア納品のすべてを組み込んで迷宮を一気に攻略しよう！',
    goalSummary: 'enum Task でダイヤル解錠・スパーク突破・コア⚡5+納品・ゴールを達成',
    bookSectionTitle: '第6章まとめ — enum・match・Option の完全統合',
    bookSummary:
      'すべての行動と状態を型安全な `enum` で表現し、漏れのない `match` で実行することで複雑なミッションを完璧に制御できます。',
    bookKeyCode: 'match task { Task::SolveDial => ..., Task::SafeGo(n) => ... }',
    starterCode: `enum Task {
    SolveDial,
    SafeGo(i32),
    Pick,
    Upgrade,
    Ship,
}

fn main() {
    let plan = vec![
        Task::SolveDial,
        Task::SafeGo(1),
        Task::Pick,
    ];
    let mut core = None;
    for t in plan {
        match t {
            Task::SolveDial => {
                let mut g = 1;
                loop {
                    match try_dial(g) {
                        Ordering::Less => g += 1,
                        Ordering::Greater => g -= 1,
                        Ordering::Equal => { break; },
                    }
                }
            },
            Task::SafeGo(n) => {
                for _ in 0..n {
                    while is_spark_ahead() || !is_gate_open() { wait_tick(1); }
                    step();
                }
            },
            Task::Pick => {
                core = Some(grab_core());
            },
            Task::Upgrade => {
                if let Some(mut c) = core {
                    boost(&mut c);
                    core = Some(c);
                }
            },
            Task::Ship => {
                if let Some(c) = core {
                    deliver(c);
                }
            },
        }
    }
}`,
    solutionCode: `enum Task {
    SolveDial,
    SafeGo(i32),
    Pick,
    Upgrade,
    Ship,
}

fn main() {
    let plan = vec![
        Task::SolveDial,
        Task::SafeGo(1),
        Task::Pick,
        Task::SafeGo(2),
        Task::Upgrade,
        Task::SafeGo(2),
        Task::Ship,
    ];
    let mut core = None;
    for t in plan {
        match t {
            Task::SolveDial => {
                let mut g = 1;
                loop {
                    match try_dial(g) {
                        Ordering::Less => g += 1,
                        Ordering::Greater => g -= 1,
                        Ordering::Equal => { break; },
                    }
                }
            },
            Task::SafeGo(n) => {
                for _ in 0..n {
                    while is_spark_ahead() || !is_gate_open() { wait_tick(1); }
                    step();
                }
            },
            Task::Pick => {
                core = Some(grab_core());
            },
            Task::Upgrade => {
                if let Some(mut c) = core {
                    boost(&mut c);
                    core = Some(c);
                }
            },
            Task::Ship => {
                if let Some(c) = core {
                    deliver(c);
                }
            },
        }
    }
}`,
    quickChips: [
      { label: 'Task::SafeGo(2),', insert: 'Task::SafeGo(2),\n        ' },
      { label: 'Task::Upgrade,', insert: 'Task::Upgrade,\n        ' },
      { label: 'Task::Ship,', insert: 'Task::Ship,\n        ' },
    ],
    hints: [
      '(1,1)でコアを拾い、(2,1)にはスパークがいるから SafeGo(2) で (3,1)の強化台兼スイッチまで進むよ！',
      '(3,1)で Upgrade（boost）したら、また SafeGo(2) でゲート (4,1) を抜けて (5,1) の納品台へ！',
      'plan に Task::SafeGo(2), Task::Upgrade, Task::SafeGo(2), Task::Ship を書き足そう！',
    ],
    worldSetup: {
      width: 6,
      height: 3,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 2 }, { x: 5, y: 2 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 5, y: 1 },
      dial: { secret: 3 },
      cores: [{ id: 'c1', x: 1, y: 1, power: 3, label: '究極コア' }],
      chargers: [{ x: 3, y: 1 }],
      switches: [{ x: 3, y: 1 }],
      gates: [{ x: 4, y: 1, openTicks: 1, closedTicks: 1, linkedSwitch: { x: 3, y: 1 } }],
      deliveries: [{ x: 5, y: 1 }],
      sparks: [
        { id: 'sp1', path: [{ x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 1 }], initialIndex: 0 },
      ],
    },
    victoryCondition: { reachGoal: true, dialSolved: true, deliverCores: 1, minCorePower: 5, requireAllSwitches: true, requireSpatialCoreRules: true },
    parTicks: 14,
  },

  // =========================================================================
  // 第7章 モジュールとパス パズル・挑戦拡張 (7-9 〜 7-16)
  // =========================================================================
  {
    id: '7-9',
    index: 0,
    act: 2,
    chapter: 7,
    chapterTitle: '第7章 モジュールとパス',
    stageKind: 'puzzle',
    title: '7-9. 非公開モジュールを開放して迷路突破',
    topicTag: '入れ子 mod + pub 公開',
    kurumiIntro:
      '工房の案内システム `mod nav { mod sensor { ... } }` の中身が全部プライベートで呼べなくなってるよ！`pub` を適切に付けてセンサー移動を動かそう。',
    goalSummary: '入れ子のモジュールを公開して迷路のゴール (4, 3) へ到達',
    bookSectionTitle: '7.2 & 7.3 階層ごとの pub 可視性管理',
    bookSummary:
      '内側の関数に `pub` を付けるだけでなく、親モジュール（例：`pub mod sensor`）自体も外に見せたい場合は `pub` が必要です。',
    bookKeyCode: 'mod nav { pub mod sensor { pub fn safe_step() { ... } } }',
    starterCode: `mod nav {
    pub mod sensor {
        // ↓ 外から呼べるように pub を付けよう！
        fn go_safe() {
            while is_spark_ahead() || !is_gate_open() {
                wait_tick(1);
            }
            step();
        }
    }
}

use nav::sensor::go_safe;

fn main() {
    for _ in 0..4 {
        go_safe();
    }
    turn_right();
    for _ in 0..2 {
        go_safe();
    }
}`,
    solutionCode: `mod nav {
    pub mod sensor {
        pub fn go_safe() {
            while is_spark_ahead() || !is_gate_open() {
                wait_tick(1);
            }
            step();
        }
    }
}

use nav::sensor::go_safe;

fn main() {
    for _ in 0..4 {
        go_safe();
    }
    turn_right();
    for _ in 0..2 {
        go_safe();
    }
}`,
    quickChips: [
      { label: 'pub fn go_safe()', insert: 'pub fn go_safe()' },
    ],
    hints: [
      'nav::sensor::go_safe が非公開になっているためコンパイルエラーになるよ！',
      'fn go_safe() の前に `pub` を付ければ use と呼び出しが通って、スパークとスイッチゲートを越えて (4, 3) へ着くよ！',
      'pub fn go_safe() {',
    ],
    worldSetup: {
      width: 6,
      height: 5,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 3, y: 2 }, { x: 5, y: 1 }, { x: 5, y: 2 }, { x: 5, y: 3 },
        { x: 0, y: 3 }, { x: 1, y: 3 }, { x: 2, y: 3 }, { x: 3, y: 3 },
        { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 }, { x: 5, y: 4 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 4, y: 3 },
      switches: [{ x: 3, y: 1 }],
      gates: [{ x: 4, y: 2, openTicks: 1, closedTicks: 1, linkedSwitch: { x: 3, y: 1 } }],
      sparks: [
        { id: 'sp1', path: [{ x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 1 }], initialIndex: 0 },
      ],
    },
    victoryCondition: { reachGoal: true, requireAllSwitches: true },
    parTicks: 10,
  },
  {
    id: '7-10',
    index: 0,
    act: 2,
    chapter: 7,
    chapterTitle: '第7章 モジュールとパス',
    stageKind: 'puzzle',
    title: '7-10. 専門モジュール分業でコア納品',
    topicTag: '複数 mod + use 分業',
    kurumiIntro:
      '「金庫担当 `mod treasury`」と「輸送担当 `mod cargo`」を分けて、それぞれの関数を `use` で組み合わせてコア納品と金庫目標を両方達成しよう！',
    goalSummary: '2つのモジュールを呼び出し、金庫⚡4とコア⚡4以上納品を達成',
    bookSectionTitle: '7.4 異なるモジュールから機能を集める use',
    bookSummary:
      '役割ごとにモジュールを切り出し、`main` で `use` して流れを組み立てると、設計の見通しがとても良くなります。',
    bookKeyCode: 'use treasury::store;\nuse cargo::deliver_l;',
    starterCode: `mod treasury {
    pub fn store(v: i32) {
        add_vault(v);
    }
}

mod cargo {
    pub fn carry() {
        step(1);
        let mut c = grab_core();
        step(1);
        boost(&mut c);
        step(2);
        deliver(c);
    }
}

use treasury::store;
// cargo::carry も use で取り込もう！

fn main() {
    store(4);
    carry();
}`,
    solutionCode: `mod treasury {
    pub fn store(v: i32) {
        add_vault(v);
    }
}

mod cargo {
    pub fn carry() {
        step(1);
        let mut c = grab_core();
        step(1);
        boost(&mut c);
        step(2);
        deliver(c);
    }
}

use treasury::store;
use cargo::carry;

fn main() {
    store(4);
    carry();
}`,
    quickChips: [
      { label: 'use cargo::carry;', insert: 'use cargo::carry;\n' },
    ],
    hints: [
      'main で `carry()` を呼んでいるけれど、まだ `use cargo::carry;` が書かれていないよ！',
      'use treasury::store; の次の行に `use cargo::carry;` を書き足そう。',
      'use cargo::carry;',
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
      cores: [{ id: 'c1', x: 1, y: 1, power: 2, label: '分業コア' }],
      chargers: [{ x: 2, y: 1 }],
      switches: [{ x: 2, y: 1 }],
      gates: [{ x: 3, y: 1, openTicks: 1, closedTicks: 1, linkedSwitch: { x: 2, y: 1 } }],
      deliveries: [{ x: 4, y: 1 }],
      vault: { x: 0, y: 0, initial: 0, target: 4 },
    },
    victoryCondition: { reachGoal: true, deliverCores: 1, minCorePower: 4, vaultTarget: 4, requireAllSwitches: true, requireSpatialCoreRules: true },
    parTicks: 9,
  },
  {
    id: '7-11',
    index: 0,
    act: 2,
    chapter: 7,
    chapterTitle: '第7章 モジュールとパス',
    stageKind: 'puzzle',
    title: '7-11. 同名関数モジュールの衝突回避ナビ',
    topicTag: '親モジュール区別::act()',
    kurumiIntro:
      'パン屋モジュールと郵便屋モジュールの両方に `act()` 関数があるよ！同じ名前の関数を使い分けてスイッチ2つと合言葉2つをどちらもクリアしよう！',
    goalSummary: '"BREAD_OK" と "POST_OK" を出力し、全スイッチを踏んで (5, 1) へ',
    bookSectionTitle: '7.4 親モジュールを残して名前の衝突を回避',
    bookSummary:
      '`bakery::act()` と `post::act()` のように親モジュールを付けて呼び分けることで、同名の関数を混乱なく使えます。',
    bookKeyCode: 'bakery::act();\npost::act();',
    starterCode: `mod bakery {
    pub fn act() {
        println!("BREAD_OK");
        step(2);
    }
}

mod post {
    pub fn act() {
        println!("POST_OK");
        step(3);
    }
}

fn main() {
    bakery::act();
    // 次に post::act(); を呼んでスイッチ2とゴール(5, 1)へ！
}`,
    solutionCode: `mod bakery {
    pub fn act() {
        println!("BREAD_OK");
        step(2);
    }
}

mod post {
    pub fn act() {
        println!("POST_OK");
        step(3);
    }
}

fn main() {
    bakery::act();
    post::act();
}`,
    quickChips: [
      { label: 'post::act();', insert: 'post::act();' },
    ],
    hints: [
      'bakery::act() は (0,1) から 2歩進んで (2,1) のコンベア? いえ、スイッチ(1,1)を通って(2,1)に着くよ！',
      'そのあと post::act() を呼べば (4,1) のスイッチを踏みつつゲート(3,1)を抜けて (5,1) に到達するよ！',
      'post::act();',
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
      switches: [{ x: 1, y: 1 }, { x: 4, y: 1 }],
      gates: [{ x: 3, y: 1, openTicks: 1, closedTicks: 1, linkedSwitch: { x: 1, y: 1 } }],
    },
    victoryCondition: { reachGoal: true, stdoutIncludes: ['BREAD_OK', 'POST_OK'], requireAllSwitches: true },
    parTicks: 8,
  },
  {
    id: '7-12',
    index: 0,
    act: 2,
    chapter: 7,
    chapterTitle: '第7章 モジュールとパス',
    stageKind: 'puzzle',
    title: '7-12. 迷路ソルバーモジュール maze_lib',
    topicTag: 'アルゴリズム mod 分離',
    kurumiIntro:
      '迷路探索の仕組みを `mod maze_lib` に隔離して、メイン関数からはたった1行 `use maze_lib::escape; escape();` だけで抜け出せる美しいコードを作ろう！',
    goalSummary: 'maze_lib::escape() を公開・インポートして迷路を突破しよう',
    bookSectionTitle: '7.2 再利用可能なアルゴリズムをモジュール化',
    bookSummary:
      '汎用的な左手法迷路ソルバーなどをモジュールにまとめておけば、呼び出し元の `main` が劇的に簡潔になります。',
    bookKeyCode: 'use maze_lib::escape;\nescape();',
    starterCode: `mod maze_lib {
    // escape() に pub を付けよう！
    fn escape() {
        while !at_goal() {
            if !is_wall_left() {
                turn_left();
                while is_spark_ahead() { wait_tick(1); }
                step();
            } else if !is_wall_ahead() {
                while is_spark_ahead() { wait_tick(1); }
                step();
            } else {
                turn_right();
            }
        }
    }
}

use maze_lib::escape;

fn main() {
    escape();
}`,
    solutionCode: `mod maze_lib {
    pub fn escape() {
        while !at_goal() {
            if !is_wall_left() {
                turn_left();
                while is_spark_ahead() { wait_tick(1); }
                step();
            } else if !is_wall_ahead() {
                while is_spark_ahead() { wait_tick(1); }
                step();
            } else {
                turn_right();
            }
        }
    }
}

use maze_lib::escape;

fn main() {
    escape();
}`,
    quickChips: [
      { label: 'pub fn escape()', insert: 'pub fn escape()' },
    ],
    hints: [
      'mod maze_lib の中の escape() が非公開のままだと呼び出せないよ！',
      '外から呼ぶ `escape()` の前に `pub` を付けよう。',
      'pub fn escape() {',
    ],
    worldSetup: {
      width: 5,
      height: 5,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 },
        { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 4, y: 1 },
        { x: 4, y: 2 },
        { x: 0, y: 3 }, { x: 1, y: 3 }, { x: 2, y: 3 }, { x: 4, y: 3 },
        { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 },
      ],
      botStart: { x: 0, y: 2, dir: 0 },
      goal: { x: 2, y: 1 },
      sparks: [
        { id: 'sp1', path: [{ x: 3, y: 1 }, { x: 3, y: 2 }, { x: 3, y: 3 }, { x: 3, y: 2 }], initialIndex: 0 },
      ],
    },
    victoryCondition: { reachGoal: true },
    parTicks: 10,
  },
  {
    id: '7-13',
    index: 0,
    act: 2,
    chapter: 7,
    chapterTitle: '第7章 モジュールとパス',
    stageKind: 'puzzle',
    title: '7-13. ベルト制御モジュールと金庫連動',
    topicTag: 'mod + コンベア時短',
    kurumiIntro:
      'ベルトコンベアに乗って最短ルートを走りつつ、途中の金庫チャージもモジュールの関数から呼んで、7ティック以内の高速配達を決めよう！',
    goalSummary: 'turbo モジュールを使って金庫⚡4・全スイッチ・7ティック以内ゴールを達成',
    bookSectionTitle: '7.3 & 7.4 高速輸送モジュールの切り出し',
    bookSummary:
      '充電と移動のモジュールを整えて呼び出すことで、コンベア区間の最短ステップを正確に走らせます。',
    bookKeyCode: 'turbo::boost_vault(4);\nturbo::dash();',
    starterCode: `mod turbo {
    pub fn boost_vault(n: i32) {
        add_vault(n);
    }
    pub fn dash() {
        // コンベア(1,1)が(2,1)スイッチへ運ぶよ。さらに進んで(5,1)へ！
        step(1);
    }
}

use turbo::boost_vault;
use turbo::dash;

fn main() {
    boost_vault(4);
    dash();
}`,
    solutionCode: `mod turbo {
    pub fn boost_vault(n: i32) {
        add_vault(n);
    }
    pub fn dash() {
        step(3);
    }
}

use turbo::boost_vault;
use turbo::dash;

fn main() {
    boost_vault(4);
    dash();
}`,
    quickChips: [
      { label: 'step(3);', insert: 'step(3);' },
    ],
    hints: [
      '(1,1) と (3,1) がどちらも右向きコンベアだよ！',
      'step(1) で (1,1)→(2,1)スイッチ、step(2) で (3,1)→(4,1)スイッチ、step(3) で (5,1)ゴールに着くよ！',
      'dash() の中を `step(3);` に直そう！',
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
      conveyors: [
        { x: 1, y: 1, dir: 0 },
        { x: 3, y: 1, dir: 0 },
      ],
      switches: [{ x: 2, y: 1 }, { x: 4, y: 1 }],
      vault: { x: 0, y: 0, initial: 0, target: 4 },
    },
    victoryCondition: { reachGoal: true, vaultTarget: 4, requireAllSwitches: true, maxTicks: 7 },
    parTicks: 5,
  },
  {
    id: '7-14',
    index: 0,
    act: 2,
    chapter: 7,
    chapterTitle: '第7章 モジュールとパス',
    stageKind: 'puzzle',
    title: '7-14. ダイヤル解錠モジュール security',
    topicTag: 'mod + ダイヤル解錠',
    kurumiIntro:
      '金庫室のカギを開ける `mod security` が用意されているよ。ダイヤル解錠関数を公開して呼んだあと、門を通ってゴールへ進もう！',
    goalSummary: 'security::unlock() を公開・呼び出し、ダイヤル解錠＋金庫⚡3＋ゴールへ',
    bookSectionTitle: '7.2 セキュリティ処理のカプセル化',
    bookSummary:
      'ダイヤルの総当たりループのような少し複雑な処理も、モジュールに閉じ込めて `unlock()` として公開すれば安全に使えます。',
    bookKeyCode: 'security::unlock();',
    starterCode: `mod security {
    pub fn unlock() {
        let mut d = 1;
        loop {
            match try_dial(d) {
                Ordering::Less => d += 1,
                Ordering::Greater => d -= 1,
                Ordering::Equal => { break; },
            }
        }
        add_vault(3);
    }
}

// use security::unlock; を書いて main から呼ぼう！

fn main() {
    step(4);
}`,
    solutionCode: `mod security {
    pub fn unlock() {
        let mut d = 1;
        loop {
            match try_dial(d) {
                Ordering::Less => d += 1,
                Ordering::Greater => d -= 1,
                Ordering::Equal => { break; },
            }
        }
        add_vault(3);
    }
}

use security::unlock;

fn main() {
    unlock();
    step(4);
}`,
    quickChips: [
      { label: 'use security::unlock;', insert: 'use security::unlock;\n' },
      { label: 'unlock();', insert: 'unlock();\n    ' },
    ],
    hints: [
      'mod security の中の unlock() はもう完成しているよ！',
      '`use security::unlock;` を宣言して、main() の最初に `unlock();` を呼ぼう！',
      'use security::unlock;\nfn main() { unlock(); step(4); }',
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
      dial: { secret: 5 },
      switches: [{ x: 2, y: 1 }],
      gates: [{ x: 3, y: 1, openTicks: 1, closedTicks: 1, linkedSwitch: { x: 2, y: 1 } }],
      vault: { x: 1, y: 0, initial: 0, target: 3 },
    },
    victoryCondition: { reachGoal: true, dialSolved: true, vaultTarget: 3, requireAllSwitches: true },
    parTicks: 11,
  },
  {
    id: '7-15',
    index: 0,
    act: 2,
    chapter: 7,
    chapterTitle: '第7章 モジュールとパス',
    stageKind: 'challenge',
    title: '7-15. モジュール・パイプラインで全工程走破',
    topicTag: '3モジュール連携チャレンジ',
    kurumiIntro:
      '「合言葉・金庫 `mod auth`」「コア操作 `mod core_ops`」「移動制御 `mod pilot`」の3モジュールを統合して、スパークとスイッチを越えよう！',
    goalSummary: '3モジュール連携で "MODULE_CLEAR"・金庫⚡5・コア⚡5+納品・ゴールへ',
    bookSectionTitle: '7.4 複数サブシステムの連携',
    bookSummary:
      '責務を明確に分けた3つのモジュールを `use` で呼び込み、安全確実にゴールまでのパイプラインを構築します。',
    bookKeyCode: 'auth::verify(); pilot::move_safe(2);',
    starterCode: `mod auth {
    pub fn verify() {
        println!("MODULE_CLEAR");
        add_vault(5);
    }
}

mod core_ops {
    pub fn process() {
        // コア(1,1)→検査(2,1)→強化(3,1)
        let mut c = grab_core();
        step(1);
        scan(&c);
        step(1);
        boost(&mut c);
        step(2);
        deliver(c);
    }
}

mod pilot {
    pub fn go_to_core() {
        while is_spark_ahead() { wait_tick(1); }
        step(1);
    }
}

fn main() {
    // auth::verify(), pilot::go_to_core(), core_ops::process() を順に呼ぼう！
    auth::verify();
}`,
    solutionCode: `mod auth {
    pub fn verify() {
        println!("MODULE_CLEAR");
        add_vault(5);
    }
}

mod core_ops {
    pub fn process() {
        let mut c = grab_core();
        step(1);
        scan(&c);
        step(1);
        boost(&mut c);
        step(2);
        deliver(c);
    }
}

mod pilot {
    pub fn go_to_core() {
        while is_spark_ahead() { wait_tick(1); }
        step(1);
    }
}

fn main() {
    auth::verify();
    pilot::go_to_core();
    core_ops::process();
}`,
    quickChips: [
      { label: 'pilot::go_to_core();', insert: 'pilot::go_to_core();\n    ' },
      { label: 'core_ops::process();', insert: 'core_ops::process();' },
    ],
    hints: [
      'auth::verify() で合言葉と金庫⚡5が済むよ。次は (1,1) にあるコアまで `pilot::go_to_core();` で移動しよう！',
      'その後 `core_ops::process();` を呼ぶと、ピックアップ→検査(2,1)→強化兼スイッチ(3,1)→ゲート通過→納品(5,1)まで一気に完了するよ！',
      'auth::verify();\npilot::go_to_core();\ncore_ops::process();',
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
      cores: [{ id: 'c1', x: 1, y: 1, power: 3, label: 'モジュールコア' }],
      scanners: [{ x: 2, y: 1 }],
      chargers: [{ x: 3, y: 1 }],
      switches: [{ x: 3, y: 1 }],
      gates: [{ x: 4, y: 1, openTicks: 1, closedTicks: 1, linkedSwitch: { x: 3, y: 1 } }],
      deliveries: [{ x: 5, y: 1 }],
      vault: { x: 0, y: 0, initial: 0, target: 5 },
    },
    victoryCondition: { reachGoal: true, deliverCores: 1, minCorePower: 5, scanCount: 1, vaultTarget: 5, stdoutIncludes: ['MODULE_CLEAR'], requireAllSwitches: true, requireSpatialCoreRules: true },
    parTicks: 12,
  },
  {
    id: '7-16',
    index: 0,
    act: 2,
    chapter: 7,
    chapterTitle: '第7章 モジュールとパス',
    stageKind: 'challenge',
    title: '7-16. 第7章挑戦：工房アーキテクチャ総合迷宮',
    topicTag: '第7章 最終チャレンジ',
    kurumiIntro:
      '第7章の集大成！階層モジュール `factory::nav` と `factory::vault` を整理して公開し、2つのスイッチ・周期ゲート・巡回スパークの迷宮を抜け出そう！',
    goalSummary: '階層モジュールを公開利用し、金庫⚡6・全スイッチ・ゴール (5, 3) へ',
    bookSectionTitle: '第7章まとめ — モジュール分割と可視性設計の極意',
    bookSummary:
      '複雑なロボットの制御システムも、適切なモジュール階層と `pub` / `use` の境界設計によりすっきり見通せるようになります。',
    bookKeyCode: 'use factory::nav::step_safe;',
    starterCode: `mod factory {
    pub mod vault {
        pub fn fill() { add_vault(6); }
    }
    pub mod nav {
        // pub を付けて公開しよう！
        fn step_safe(n: i32) {
            for _ in 0..n {
                while is_spark_ahead() || !is_gate_open() { wait_tick(1); }
                step();
            }
        }
    }
}

use factory::vault::fill;
use factory::nav::step_safe;

fn main() {
    fill();
    step_safe(3);
}`,
    solutionCode: `mod factory {
    pub mod vault {
        pub fn fill() { add_vault(6); }
    }
    pub mod nav {
        pub fn step_safe(n: i32) {
            for _ in 0..n {
                while is_spark_ahead() || !is_gate_open() { wait_tick(1); }
                step();
            }
        }
    }
}

use factory::vault::fill;
use factory::nav::step_safe;

fn main() {
    fill();
    step_safe(5);
    turn_right();
    step_safe(2);
}`,
    quickChips: [
      { label: 'pub fn step_safe(n: i32)', insert: 'pub fn step_safe(n: i32)' },
      { label: 'step_safe(5);', insert: 'step_safe(5);\n    ' },
      { label: 'turn_right();', insert: 'turn_right();\n    ' },
      { label: 'step_safe(2);', insert: 'step_safe(2);' },
    ],
    hints: [
      'まずは `fn step_safe` に `pub` を付けて呼び出せるようにしよう！',
      '上の廊下にはスイッチ (1,1)・スパーク (2,1)・スイッチ (4,1) があるよ。`step_safe(5);` で (5,1) の角まで一気に進もう！',
      'そこから `turn_right(); step_safe(2);` で下のゲート (5,2) を越えて (5,3) のゴールへ到着するよ！',
    ],
    worldSetup: {
      width: 6,
      height: 5,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 2 },
        { x: 0, y: 3 }, { x: 1, y: 3 }, { x: 2, y: 3 }, { x: 3, y: 3 }, { x: 4, y: 3 },
        { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 }, { x: 5, y: 4 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 5, y: 3 },
      switches: [{ x: 1, y: 1 }, { x: 4, y: 1 }],
      gates: [{ x: 5, y: 2, openTicks: 1, closedTicks: 1, linkedSwitch: { x: 4, y: 1 } }],
      vault: { x: 0, y: 0, initial: 0, target: 6 },
      sparks: [
        { id: 'sp1', path: [{ x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 1 }], initialIndex: 0 },
      ],
    },
    victoryCondition: { reachGoal: true, vaultTarget: 6, requireAllSwitches: true },
    parTicks: 12,
  },

  // =========================================================================
  // 第8章 一般的なコレクション パズル・挑戦拡張 (8-13 〜 8-24)
  // =========================================================================
  {
    id: '8-13',
    index: 0,
    act: 2,
    chapter: 8,
    chapterTitle: '第8章 一般的なコレクション',
    stageKind: 'puzzle',
    title: '8-13. Vec で記録するステップと折り返し移動',
    topicTag: 'Vec<i32> / 折り返し設計',
    kurumiIntro:
      'U字やS字の折れ曲がったコースを、1つの `Vec<i32>` リストに詰めた歩数と左右のターン規則だけで走破しよう！',
    goalSummary: 'Vec に4区間の歩数を登録してスイッチを踏み、ゴール (5, 3) へ',
    bookSectionTitle: '8.1 Vec による柔軟なルートパラメータ化',
    bookSummary:
      '各直進区間の長さを `Vec` に格納しておけば、同じループ構造で異なるマップも簡単に走らせられます。',
    bookKeyCode: 'let segs = vec![2, 2, 2, 1];',
    starterCode: `fn main() {
    let mut segs = vec![2, 2];
    // あと2つ数値を push して「東2→右折→南2→左折→東3」を作ろう！
    // 注意: (3,3)と(4,3)にコンベアがあるから最後の1歩だけでゴールするかも？
    step(segs[0]);
    turn_right();
    step(segs[1]);
}`,
    solutionCode: `fn main() {
    let mut segs = vec![2, 2];
    segs.push(2);
    step(segs[0]);
    turn_right();
    step(segs[1]);
    turn_left();
    step(segs[2]);
}`,
    quickChips: [
      { label: 'segs.push(2);', insert: 'segs.push(2);\n    ' },
      { label: 'turn_left();\n    step(segs[2]);', insert: 'turn_left();\n    step(segs[2]);' },
    ],
    hints: [
      '(0,1) から東2で (2,1)スイッチを踏み、右折して南2で (2,3) へ着くよ！',
      '最後は左折して東へ進むとき、(3,3)に右向きコンベアがあるから 2 歩分（実質3マス進める）で (5,3) のゴールにぴったり届くよ！',
      'segs.push(2);\n... turn_left();\nstep(segs[2]);',
    ],
    worldSetup: {
      width: 6,
      height: 5,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 3, y: 1 }, { x: 4, y: 1 }, { x: 5, y: 1 },
        { x: 3, y: 2 }, { x: 4, y: 2 }, { x: 5, y: 2 },
        { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 }, { x: 5, y: 4 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 5, y: 3 },
      switches: [{ x: 2, y: 1 }],
      gates: [{ x: 4, y: 3, openTicks: 1, closedTicks: 1, linkedSwitch: { x: 2, y: 1 } }],
      conveyors: [{ x: 3, y: 3, dir: 0 }],
    },
    victoryCondition: { reachGoal: true, requireAllSwitches: true },
    parTicks: 10,
  },
  {
    id: '8-14',
    index: 0,
    act: 2,
    chapter: 8,
    chapterTitle: '第8章 一般的なコレクション',
    stageKind: 'puzzle',
    title: '8-14. Vec::get() で境界外を安全ガード',
    topicTag: 'Vec::get + スパーク回避',
    kurumiIntro:
      '指示配列の「範囲外」を読んでパニックしちゃうバグを `.get(i)` の安全なパターンに書き換えて、金庫⚡6とゴールへの配達を決めよう！',
    goalSummary: 'Vec::get で安全に値を集計し、金庫⚡6＋全スイッチで (5, 1) へ',
    bookSectionTitle: '8.1 範囲外アクセスを防ぐ .get() と unwrap_or',
    bookSummary:
      '添字がベクタの長さを超える可能性があるときは `list.get(i)` で `Option` として受け取ると安全です。',
    bookKeyCode: 'let val = cmds.get(i).unwrap_or(0);',
    starterCode: `fn main() {
    let cmds = vec![2, 4];
    let mut sum = 0;
    for i in 0..4 {
        // cmds の長さは2！cmds.get(i).unwrap_or(0) で全要素を安全に足そう（今は先頭1個だけ）
        if i == 0 {
            sum += cmds[i];
        }
    }
    add_vault(sum);
    step(5);
}`,
    solutionCode: `fn main() {
    let cmds = vec![2, 4];
    let mut sum = 0;
    for i in 0..4 {
        sum += cmds.get(i).unwrap_or(0);
    }
    add_vault(sum);
    step(5);
}`,
    quickChips: [
      { label: 'cmds.get(i).unwrap_or(0)', insert: 'cmds.get(i).unwrap_or(0)' },
    ],
    hints: [
      'for i in 0..4 は 0, 1, 2, 3 を回すけど cmds の要素は 2 個しかないよ！',
      'cmds[i] を `cmds.get(i).unwrap_or(0)` に変えれば、安全に 2 + 4 + 0 + 0 = 6 が得られるよ！',
      'sum += cmds.get(i).unwrap_or(0);',
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
      switches: [{ x: 2, y: 1 }],
      gates: [{ x: 3, y: 1, openTicks: 1, closedTicks: 1, linkedSwitch: { x: 2, y: 1 } }],
      vault: { x: 1, y: 0, initial: 0, target: 6 },
    },
    victoryCondition: { reachGoal: true, vaultTarget: 6, requireAllSwitches: true },
    parTicks: 8,
  },
  {
    id: '8-15',
    index: 0,
    act: 2,
    chapter: 8,
    chapterTitle: '第8章 一般的なコレクション',
    stageKind: 'puzzle',
    title: '8-15. String 荷札の文字列組み立てと検証',
    topicTag: 'String::push_str + コア納品',
    kurumiIntro:
      'チェックポイントを1つ越えるごとに `String` のスタンプ台に荷札を追記して、最終的に `"CORE_SCANNED_BOOSTED"` を表示してから納品台へ届けよう！',
    goalSummary: '"CORE_SCANNED_BOOSTED" を出力し、コア⚡4以上を空間ルール通り納品',
    bookSectionTitle: '8.2 String の段階的な追記',
    bookSummary:
      '処理が1ステップ完了するたびに `.push_str()` で状態ラベルを追記していくパターンです。',
    bookKeyCode: 'log.push_str("_SCANNED");',
    starterCode: `fn main() {
    let mut tag = String::from("CORE");
    step(1);
    let mut c = grab_core();
    step(1);
    scan(&c);
    tag.push_str("_SCANNED");
    step(1);
    boost(&mut c);
    // ここで "_BOOSTED" を push_str し、println! してから(4,1)へ運ぼう！
    println!("{}", tag);
    step(1);
    deliver(c);
}`,
    solutionCode: `fn main() {
    let mut tag = String::from("CORE");
    step(1);
    let mut c = grab_core();
    step(1);
    scan(&c);
    tag.push_str("_SCANNED");
    step(1);
    boost(&mut c);
    tag.push_str("_BOOSTED");
    println!("{}", tag);
    step(1);
    deliver(c);
}`,
    quickChips: [
      { label: 'tag.push_str("_BOOSTED");', insert: 'tag.push_str("_BOOSTED");\n    ' },
    ],
    hints: [
      'boost(&mut c) の直後に `tag.push_str("_BOOSTED");` が抜けているよ！',
      'それだけで `"CORE_SCANNED_BOOSTED"` が完成して出力されるよ。',
      'tag.push_str("_BOOSTED");',
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
      cores: [{ id: 'c1', x: 1, y: 1, power: 2, label: '荷札コア' }],
      scanners: [{ x: 2, y: 1 }],
      chargers: [{ x: 3, y: 1 }],
      deliveries: [{ x: 4, y: 1 }],
    },
    victoryCondition: { reachGoal: true, deliverCores: 1, minCorePower: 4, scanCount: 1, stdoutIncludes: ['CORE_SCANNED_BOOSTED'], requireSpatialCoreRules: true },
    parTicks: 10,
  },
  {
    id: '8-16',
    index: 0,
    act: 2,
    chapter: 8,
    chapterTitle: '第8章 一般的なコレクション',
    stageKind: 'puzzle',
    title: '8-16. 文字列の長さ .len() で歩数決定',
    topicTag: 'String::len() 活用',
    kurumiIntro:
      'メッセージの文字数（`.len()`）がそのまま「進む歩数」になる暗号指令だよ！半角英字で作った合言葉の文字数を計算して、スイッチとゲートを抜けよう！',
    goalSummary: 'String の文字数 5 を使ってスイッチ経由でゴール (5, 1) へ',
    bookSectionTitle: '8.2 .len() による長さ取得',
    bookSummary:
      'ASCII文字列なら `s.len()` で文字数がそのまま数値として取得できるため、設定値やチェックに活用できます。',
    bookKeyCode: 'let dist = code.len();',
    starterCode: `fn main() {
    let mut code = String::from("KOBO");
    // ゴールは 5 歩先！あと 1 文字 push_str して長さ 5 の合言葉にしよう（例: "!"）
    let dist = code.len();
    add_vault(dist);
    step(dist);
}`,
    solutionCode: `fn main() {
    let mut code = String::from("KOBO");
    code.push_str("!");
    let dist = code.len();
    add_vault(dist);
    step(dist);
}`,
    quickChips: [
      { label: 'code.push_str("!");', insert: 'code.push_str("!");\n    ' },
    ],
    hints: [
      '"KOBO" は 4 文字だから、1文字足せば 5 文字になるよ！',
      'たとえば `code.push_str("!");` を追加すると dist = 5 になって金庫⚡5と (5,1) のゴール両方がクリアになるよ！',
      'code.push_str("!");',
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
      switches: [{ x: 2, y: 1 }],
      gates: [{ x: 3, y: 1, openTicks: 1, closedTicks: 1, linkedSwitch: { x: 2, y: 1 } }],
      vault: { x: 1, y: 0, initial: 0, target: 5 },
    },
    victoryCondition: { reachGoal: true, vaultTarget: 5, requireAllSwitches: true },
    parTicks: 8,
  },
  {
    id: '8-17',
    index: 0,
    act: 2,
    chapter: 8,
    chapterTitle: '第8章 一般的なコレクション',
    stageKind: 'puzzle',
    title: '8-17. HashMap 暗号テーブルとダイヤル解錠',
    topicTag: 'HashMap + ダイヤル',
    kurumiIntro:
      '扉の合言葉テーブルが `HashMap` に入っているよ！`"alpha"` や `"beta"` から取り出した値を足し合わせて、秘密のダイヤル番号を一発で当てよう！',
    goalSummary: 'HashMap から取り出した合計 6 でダイヤルを解錠しゴール (4, 1) へ',
    bookSectionTitle: '8.3 HashMap を設定テーブルとして使う',
    bookSummary:
      '名前をキーにして値を引く辞書は、複数パーツのパスワードや係数を管理するときにとても便利です。',
    bookKeyCode: 'let code = dict.get("alpha").unwrap_or(0) + dict.get("beta").unwrap_or(0);',
    starterCode: `fn main() {
    let mut dict = HashMap::new();
    dict.insert("alpha", 2);
    dict.insert("beta", 4);
    dict.insert("gamma", 9);
    // "alpha" と "beta" を取り出して足そう（目標のダイヤルは 6 だよ！）
    let secret = dict.get("alpha").unwrap_or(0);
    try_dial(secret);
    step(4);
}`,
    solutionCode: `fn main() {
    let mut dict = HashMap::new();
    dict.insert("alpha", 2);
    dict.insert("beta", 4);
    dict.insert("gamma", 9);
    let secret = dict.get("alpha").unwrap_or(0) + dict.get("beta").unwrap_or(0);
    try_dial(secret);
    step(4);
}`,
    quickChips: [
      { label: '+ dict.get("beta").unwrap_or(0)', insert: ' + dict.get("beta").unwrap_or(0)' },
    ],
    hints: [
      'dict の `"alpha"` が 2、`"beta"` が 4 だよ。足すと 6 になるね！',
      'secret の計算式に `+ dict.get("beta").unwrap_or(0)` を足そう。',
      'let secret = dict.get("alpha").unwrap_or(0) + dict.get("beta").unwrap_or(0);',
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
      dial: { secret: 6 },
      switches: [{ x: 1, y: 1 }],
      gates: [{ x: 3, y: 1, openTicks: 1, closedTicks: 1, linkedSwitch: { x: 1, y: 1 } }],
    },
    victoryCondition: { reachGoal: true, dialSolved: true, requireAllSwitches: true },
    parTicks: 7,
  },
  {
    id: '8-18',
    index: 0,
    act: 2,
    chapter: 8,
    chapterTitle: '第8章 一般的なコレクション',
    stageKind: 'puzzle',
    title: '8-18. HashMap 在庫集計とコンベア出荷',
    topicTag: 'HashMap 更新ループ',
    kurumiIntro:
      '出荷タグの配列から種類ごとに個数を数えて `HashMap` に積み上げよう！合計のエネルギーを金庫に入れたら、コンベアを使って最短でゴールへ向かおう。',
    goalSummary: 'Vec のタグを HashMap で集計し金庫⚡5＋6ティック以内にゴールへ',
    bookSectionTitle: '8.3 リストの要素を HashMap でカウントする',
    bookSummary:
      '配列の要素を1つずつ確認しながら `map.insert(k, cur + 1)` のように回数を積み上げて集計します。',
    bookKeyCode: 'let c = counts.get(k).unwrap_or(0); counts.insert(k, c + 1);',
    starterCode: `fn main() {
    let tags = vec!["gear", "spring", "gear", "gear", "bolt"];
    let mut counts = HashMap::new();
    for t in tags {
        let prev = counts.get(t).unwrap_or(0);
        counts.insert(t, prev + 1);
    }
    // "gear" と "spring" と "bolt" の数を足して金庫⚡5を入れよう！今は gear だけだよ
    let total = counts.get("gear").unwrap_or(0);
    add_vault(total);
    step(2);
}`,
    solutionCode: `fn main() {
    let tags = vec!["gear", "spring", "gear", "gear", "bolt"];
    let mut counts = HashMap::new();
    for t in tags {
        let prev = counts.get(t).unwrap_or(0);
        counts.insert(t, prev + 1);
    }
    let total = counts.get("gear").unwrap_or(0)
        + counts.get("spring").unwrap_or(0)
        + counts.get("bolt").unwrap_or(0);
    add_vault(total);
    step(3);
}`,
    quickChips: [
      { label: '+ counts.get("spring").unwrap_or(0) + counts.get("bolt").unwrap_or(0)', insert: ' + counts.get("spring").unwrap_or(0) + counts.get("bolt").unwrap_or(0)' },
      { label: 'step(3);', insert: 'step(3);' },
    ],
    hints: [
      'gear=3, spring=1, bolt=1 なので、3つを全部足せば合計⚡5になるよ！',
      '(1,1) と (3,1) が右向きコンベアだから、step(3) で (5,1) へ着けるよ！',
      'total に spring と bolt も足して、`step(3);` で進もう。',
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
      conveyors: [
        { x: 1, y: 1, dir: 0 },
        { x: 3, y: 1, dir: 0 },
      ],
      vault: { x: 1, y: 0, initial: 0, target: 5 },
    },
    victoryCondition: { reachGoal: true, vaultTarget: 5, maxTicks: 6 },
    parTicks: 6,
  },
  {
    id: '8-19',
    index: 0,
    act: 2,
    chapter: 8,
    chapterTitle: '第8章 一般的なコレクション',
    stageKind: 'puzzle',
    title: '8-19. Vec 経由で2方向コマンド分岐',
    topicTag: 'Vec<String> コマンド解釈',
    kurumiIntro:
      'コマンド名を `Vec<String>` に並べて順番に解釈しよう！`"R"` なら右折、`"F"` ならスパーク待ち付きの安全前進、`"S"` なら2歩進むルールにして迷路を抜けよう！',
    goalSummary: 'Vec 文字列コマンドを実行して全スイッチ＋ゴール (4, 3) へ',
    bookSectionTitle: '8.1 & 8.2 文字列配列をそのままスクリプトに',
    bookSummary:
      '文字列のリストをループして `if cmd == "..."` で振り分けると、シンプルなスクリプトインタプリタが作れます。',
    bookKeyCode: 'for c in cmds { if c == "F" { ... } }',
    starterCode: `fn main() {
    let cmds = vec![
        String::from("F"),
        String::from("F"),
        // ここから迷路に合わせて追加しよう！
    ];
    for c in cmds {
        if c == "F" {
            while is_spark_ahead() || !is_gate_open() { wait_tick(1); }
            step();
        } else if c == "R" {
            turn_right();
        } else if c == "L" {
            turn_left();
        }
    }
}`,
    solutionCode: `fn main() {
    let cmds = vec![
        String::from("F"),
        String::from("F"),
        String::from("F"),
        String::from("F"),
        String::from("R"),
        String::from("F"),
        String::from("F"),
    ];
    for c in cmds {
        if c == "F" {
            while is_spark_ahead() || !is_gate_open() { wait_tick(1); }
            step();
        } else if c == "R" {
            turn_right();
        } else if c == "L" {
            turn_left();
        }
    }
}`,
    quickChips: [
      { label: 'String::from("F"),', insert: 'String::from("F"),\n        ' },
      { label: 'String::from("R"),', insert: 'String::from("R"),\n        ' },
    ],
    hints: [
      '上の廊下は (0,1) から東へ4歩で (4,1) の角まで届くよ！途中 (1,1) にスイッチ、(2,1) にスパーク、(3,1) にスイッチ連動ゲートがあるけど、"F" が自動で待って進めるよ！',
      '角 (4,1) で `"R"` で右折して、`"F"` をあと2回実行すれば (4,3) へ着くよ！',
      'cmds を F × 4 → R → F × 2 の順に並べよう！',
    ],
    worldSetup: {
      width: 6,
      height: 5,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 3, y: 2 }, { x: 5, y: 1 }, { x: 5, y: 2 }, { x: 5, y: 3 },
        { x: 0, y: 3 }, { x: 1, y: 3 }, { x: 2, y: 3 }, { x: 3, y: 3 },
        { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 }, { x: 5, y: 4 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 4, y: 3 },
      switches: [{ x: 1, y: 1 }],
      gates: [{ x: 3, y: 1, openTicks: 1, closedTicks: 1, linkedSwitch: { x: 1, y: 1 } }],
      sparks: [
        { id: 'sp1', path: [{ x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 1 }], initialIndex: 0 },
      ],
    },
    victoryCondition: { reachGoal: true, requireAllSwitches: true },
    parTicks: 9,
  },
  {
    id: '8-20',
    index: 0,
    act: 2,
    chapter: 8,
    chapterTitle: '第8章 一般的なコレクション',
    stageKind: 'puzzle',
    title: '8-20. Vec + String + HashMap コア納品',
    topicTag: 'コレクション3種連携',
    kurumiIntro:
      '部品ごとのパワー表 `HashMap` から目標パワーを計算して金庫に入れ、コアの納品と合言葉ログも同時にクリアしよう！',
    goalSummary: 'コレクション3種を使い "ORDER_OK"・金庫⚡5・コア⚡4+納品を達成',
    bookSectionTitle: '8.1〜8.3 3大コレクションの実践連携',
    bookSummary:
      'リスト（`Vec`）、ラベル（`String`）、設定表（`HashMap`）を組み合わせることで複雑な業務処理が組めます。',
    bookKeyCode: 'let p = menu.get(k).unwrap_or(0);',
    starterCode: `fn main() {
    let mut menu = HashMap::new();
    menu.insert("bread", 2);
    menu.insert("coffee", 3);

    let orders = vec!["bread", "coffee"];
    let mut sum = 0;
    for o in orders {
        sum += menu.get(o).unwrap_or(0);
    }
    add_vault(sum);

    let mut label = String::from("ORDER");
    // label に "_OK" を付けて println! しよう！
    println!("{}", label);

    step(1);
    let mut c = grab_core();
    step(1);
    boost(&mut c);
    step(2);
    deliver(c);
}`,
    solutionCode: `fn main() {
    let mut menu = HashMap::new();
    menu.insert("bread", 2);
    menu.insert("coffee", 3);

    let orders = vec!["bread", "coffee"];
    let mut sum = 0;
    for o in orders {
        sum += menu.get(o).unwrap_or(0);
    }
    add_vault(sum);

    let mut label = String::from("ORDER");
    label.push_str("_OK");
    println!("{}", label);

    step(1);
    let mut c = grab_core();
    step(1);
    boost(&mut c);
    step(2);
    deliver(c);
}`,
    quickChips: [
      { label: 'label.push_str("_OK");', insert: 'label.push_str("_OK");\n    ' },
    ],
    hints: [
      'menu と orders で金庫⚡5が入るよ。コア操作も完璧！',
      '足りないのは `label.push_str("_OK");` の 1 行だけだよ。',
      'label.push_str("_OK");',
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
      cores: [{ id: 'c1', x: 1, y: 1, power: 2, label: '注文コア' }],
      chargers: [{ x: 2, y: 1 }],
      switches: [{ x: 2, y: 1 }],
      gates: [{ x: 3, y: 1, openTicks: 1, closedTicks: 1, linkedSwitch: { x: 2, y: 1 } }],
      deliveries: [{ x: 4, y: 1 }],
      vault: { x: 0, y: 0, initial: 0, target: 5 },
    },
    victoryCondition: { reachGoal: true, deliverCores: 1, minCorePower: 4, vaultTarget: 5, stdoutIncludes: ['ORDER_OK'], requireAllSwitches: true, requireSpatialCoreRules: true },
    parTicks: 10,
  },
  {
    id: '8-21',
    index: 0,
    act: 2,
    chapter: 8,
    chapterTitle: '第8章 一般的なコレクション',
    stageKind: 'puzzle',
    title: '8-21. HashMap でスイッチ座標とゲート連動計画',
    topicTag: 'HashMap ルート計画',
    kurumiIntro:
      '区間ごとの方向転換とステップ数を `HashMap` 辞書から引いて、スイッチを順に2つ踏んでU字型の地下通路を攻略しよう！',
    goalSummary: '辞書からルートを引いて全スイッチを踏み (0, 3) へ到達しよう',
    bookSectionTitle: '8.3 HashMap から段階的パラメータを引き出す',
    bookSummary:
      '文字列キー `"leg1"`, `"leg2"`, `"leg3"` に距離を登録して取り出すと、各フェーズの意味が明確になります。',
    bookKeyCode: 'step(map.get("leg1").unwrap_or(0));',
    starterCode: `fn main() {
    let mut route = HashMap::new();
    route.insert("east", 4);
    route.insert("south", 2);
    // "west" キーに 4 を登録して、最後の戻り区間に使おう！
    step(route.get("east").unwrap_or(0));
    turn_right();
    step(route.get("south").unwrap_or(0));
    turn_right();
    step(route.get("west").unwrap_or(0));
}`,
    solutionCode: `fn main() {
    let mut route = HashMap::new();
    route.insert("east", 4);
    route.insert("south", 2);
    route.insert("west", 4);
    step(route.get("east").unwrap_or(0));
    turn_right();
    step(route.get("south").unwrap_or(0));
    turn_right();
    step(route.get("west").unwrap_or(0));
}`,
    quickChips: [
      { label: 'route.insert("west", 4);', insert: 'route.insert("west", 4);\n    ' },
    ],
    hints: [
      '上の廊下を東に 4 歩で (4,1) スイッチを踏み、右折して南へ 2 歩でゲート (4,2) を抜けるよ！',
      '最後は右折して西へ 4 歩戻るとスイッチ (2,3) を踏みながら (0,3) のゴールへ着くよ！',
      'route.insert("west", 4);',
    ],
    worldSetup: {
      width: 6,
      height: 5,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 }, { x: 5, y: 1 }, { x: 5, y: 2 }, { x: 5, y: 3 },
        { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 }, { x: 5, y: 4 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 0, y: 3 },
      switches: [{ x: 4, y: 1 }, { x: 2, y: 3 }],
      gates: [{ x: 4, y: 2, openTicks: 1, closedTicks: 1, linkedSwitch: { x: 4, y: 1 } }],
    },
    victoryCondition: { reachGoal: true, requireAllSwitches: true },
    parTicks: 13,
  },
  {
    id: '8-22',
    index: 0,
    act: 2,
    chapter: 8,
    chapterTitle: '第8章 一般的なコレクション',
    stageKind: 'challenge',
    title: '8-22. Vec ログ記録＆最大スピードコンベア',
    topicTag: 'Vec + コンベア最短タイム',
    kurumiIntro:
      '移動ログを `Vec` に集めつつ、ベルトコンベアの加速を使って7ティック以内にスイッチ＋金庫＋ゴールをすべて決めよう！',
    goalSummary: 'Vec の移動データで7ティック以内に金庫⚡6＋全スイッチ＋(5, 3) へ',
    bookSectionTitle: '8.1 最短手順リストを Vec で組む',
    bookSummary:
      'コンベアによって稼げるマス数を計算し、最小限の `Vec` ステップを組み立てるタイムアタックパズルです。',
    bookKeyCode: 'let moves = vec![1, 1, 1];',
    starterCode: `fn main() {
    let mut bonuses = Vec::new();
    bonuses.push(3);
    bonuses.push(3);
    let mut total = 0;
    for b in bonuses { total += b; }
    add_vault(total);
    // 7ティック以内に行きたい！コンベア(1,1),(2,2),(3,3),(4,3)を見よう
    step(2);
}`,
    solutionCode: `fn main() {
    let mut bonuses = Vec::new();
    bonuses.push(3);
    bonuses.push(3);
    let mut total = 0;
    for b in bonuses { total += b; }
    add_vault(total);
    step(1);
    turn_right();
    step(1);
    turn_left();
    step(2);
}`,
    quickChips: [
      { label: 'step(1);', insert: 'step(1);\n    ' },
      { label: 'step(2);', insert: 'step(2);' },
      { label: 'turn_right();', insert: 'turn_right();\n    ' },
      { label: 'turn_left();', insert: 'turn_left();\n    ' },
    ],
    hints: [
      '(1,1) の東向きコンベアに乗れば 1 歩でスイッチのある (2,1) に着くよ！',
      'そこから右折して 1 歩で (2,2) の南向きコンベアに乗り (2,3) へ！',
      'さらに左折して `step(2);` で (3,3) コンベア→(4,3)→(5,3) へ！合計8ティック以内にクリア！',
    ],
    worldSetup: {
      width: 6,
      height: 5,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 3, y: 1 }, { x: 4, y: 1 }, { x: 5, y: 1 },
        { x: 3, y: 2 }, { x: 4, y: 2 }, { x: 5, y: 2 },
        { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 }, { x: 5, y: 4 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 5, y: 3 },
      switches: [{ x: 2, y: 1 }],
      gates: [{ x: 4, y: 3, openTicks: 1, closedTicks: 1, linkedSwitch: { x: 2, y: 1 } }],
      conveyors: [
        { x: 1, y: 1, dir: 0 },
        { x: 2, y: 2, dir: 1 },
        { x: 3, y: 3, dir: 0 },
      ],
      vault: { x: 0, y: 0, initial: 0, target: 6 },
    },
    victoryCondition: { reachGoal: true, vaultTarget: 6, requireAllSwitches: true, maxTicks: 8 },
    parTicks: 8,
  },
  {
    id: '8-23',
    index: 0,
    act: 2,
    chapter: 8,
    chapterTitle: '第8章 一般的なコレクション',
    stageKind: 'challenge',
    title: '8-23. コアと文字と辞書の大迷宮チャレンジ',
    topicTag: 'コレクション + スパーク迷宮',
    kurumiIntro:
      '巡回スパークの先の迷路へ挑もう！`HashMap` の合言葉でダイヤルを解き、`String` に経過を記録しつつ、コアを拾って検査・強化・納品まで一気に決めよう！',
    goalSummary: 'ダイヤル解錠・"ACT2_PRO" 出力・コア⚡4+納品・全スイッチ・ゴール達成',
    bookSectionTitle: '8.1〜8.3 コレクションの複合パズル',
    bookSummary:
      'データ構造を使い分けながら、現実の空間ルールと危険物をすべてコントロールする総合演習です。',
    bookKeyCode: 'HashMap / String / Vec + 空間コア操作',
    starterCode: `fn main() {
    let mut book = HashMap::new();
    book.insert("dial", 5);
    try_dial(book.get("dial").unwrap_or(0));

    let mut msg = String::from("ACT2");
    println!("{}", msg);

    // (1,1)コア→(2,1)検査→(3,1)スパーク注意！→(4,1)強化＆スイッチ→(5,1)納品
    step(1);
}`,
    solutionCode: `fn main() {
    let mut book = HashMap::new();
    book.insert("dial", 5);
    try_dial(book.get("dial").unwrap_or(0));

    let mut msg = String::from("ACT2");
    msg.push_str("_PRO");
    println!("{}", msg);

    while is_spark_ahead() { wait_tick(1); }
    step(1);
    let mut c = grab_core();
    while is_spark_ahead() { wait_tick(1); }
    step(1);
    scan(&c);
    while is_spark_ahead() { wait_tick(1); }
    step(1);
    while is_spark_ahead() { wait_tick(1); }
    step(1);
    boost(&mut c);
    while is_spark_ahead() || !is_gate_open() { wait_tick(1); }
    step(1);
    deliver(c);
}`,
    quickChips: [
      { label: 'msg.push_str("_PRO");', insert: 'msg.push_str("_PRO");\n    ' },
      { label: 'while is_spark_ahead() { wait_tick(1); }', insert: 'while is_spark_ahead() { wait_tick(1); }\n    ' },
    ],
    hints: [
      'msg に `msg.push_str("_PRO");` を足すのを忘れないでね！',
      '(1,1)でコア取得 → (2,1)で scan(&c) → (3,1)はスパーク横断なので `while is_spark_ahead() { wait_tick(1); }` で待ってから越えよう！',
      '(4,1)で boost(&mut c) しつつスイッチを踏み、(5,1) で deliver(c) すればコンプリートだよ！',
    ],
    worldSetup: {
      width: 6,
      height: 3,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 4, y: 2 }, { x: 5, y: 2 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 5, y: 1 },
      dial: { secret: 5 },
      cores: [{ id: 'c1', x: 1, y: 1, power: 2, label: '総括コア' }],
      scanners: [{ x: 2, y: 1 }],
      chargers: [{ x: 4, y: 1 }],
      switches: [{ x: 4, y: 1 }],
      deliveries: [{ x: 5, y: 1 }],
      sparks: [
        { id: 'sp1', path: [{ x: 3, y: 0 }, { x: 3, y: 1 }, { x: 3, y: 2 }, { x: 3, y: 1 }], initialIndex: 0 },
      ],
    },
    victoryCondition: { reachGoal: true, dialSolved: true, deliverCores: 1, minCorePower: 4, scanCount: 1, stdoutIncludes: ['ACT2_PRO'], requireAllSwitches: true, requireSpatialCoreRules: true },
    parTicks: 15,
  },
  {
    id: '8-24',
    index: 0,
    act: 2,
    chapter: 8,
    chapterTitle: '第8章 一般的なコレクション',
    stageKind: 'challenge',
    title: '8-24. 第2幕グランドパズル：コレクション迷宮制覇',
    topicTag: '第2幕 最終チャレンジ',
    kurumiIntro:
      '第2幕のラストチャレンジ！`Vec`・`String`・`HashMap`・`struct`・`enum`・`mod` すべての知識が詰まった大迷宮だよ。2つのスイッチ、スパーク、コンベア、金庫、コア納品をすべて制覇しよう！',
    goalSummary: '第2幕総動員！"ACT2_MASTER"・金庫⚡7・コア⚡5+納品・全スイッチ・ゴール (5, 3) へ',
    bookSectionTitle: '第2幕 総まとめ — 設計図・列挙型・モジュール・コレクション',
    bookSummary:
      '構造体や列挙型でプログラムの骨格を作り、モジュールで整理し、コレクションでデータを自在に扱う力が身に着きました！',
    bookKeyCode: 'struct + enum + mod + HashMap + Vec + String',
    starterCode: `mod helper {
    pub fn safe_move(n: i32) {
        for _ in 0..n {
            while is_spark_ahead() || !is_gate_open() { wait_tick(1); }
            step();
        }
    }
}

use helper::safe_move;

fn main() {
    let mut dict = HashMap::new();
    dict.insert("part1", 3);
    dict.insert("part2", 4);
    let keys = vec!["part1", "part2"];
    let mut vault_sum = 0;
    for k in keys {
        vault_sum += dict.get(k).unwrap_or(0);
    }
    add_vault(vault_sum);

    let mut badge = String::from("ACT2");
    badge.push_str("_MASTER");
    println!("{}", badge);

    // ここから (1,1)コア→(2,1)強化＆スイッチ→(4,1)スイッチ→(5,1)右折→(5,3)納品台へ進もう！
    safe_move(1);
}`,
    solutionCode: `mod helper {
    pub fn safe_move(n: i32) {
        for _ in 0..n {
            while is_spark_ahead() || !is_gate_open() { wait_tick(1); }
            step();
        }
    }
}

use helper::safe_move;

fn main() {
    let mut dict = HashMap::new();
    dict.insert("part1", 3);
    dict.insert("part2", 4);
    let keys = vec!["part1", "part2"];
    let mut vault_sum = 0;
    for k in keys {
        vault_sum += dict.get(k).unwrap_or(0);
    }
    add_vault(vault_sum);

    let mut badge = String::from("ACT2");
    badge.push_str("_MASTER");
    println!("{}", badge);

    safe_move(1);
    let mut c = grab_core();
    safe_move(1);
    boost(&mut c);
    safe_move(3);
    turn_right();
    safe_move(2);
    deliver(c);
}`,
    quickChips: [
      { label: 'let mut c = grab_core();', insert: 'let mut c = grab_core();\n    ' },
      { label: 'boost(&mut c);', insert: 'boost(&mut c);\n    ' },
      { label: 'safe_move(3);', insert: 'safe_move(3);\n    ' },
      { label: 'deliver(c);', insert: 'deliver(c);' },
    ],
    hints: [
      '(1,1)で `let mut c = grab_core();`、次の `(2,1)` が強化台兼スイッチ1だから `boost(&mut c);` しよう！',
      'その後 `safe_move(3);` で(3,1)のスパークを待って越え、(4,1)のスイッチ2を踏み、(5,1)へ！',
      '最後は `turn_right(); safe_move(2); deliver(c);` でゲート (5,2) を抜けて (5,3) に納品完了だよ！',
    ],
    worldSetup: {
      width: 6,
      height: 5,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 4, y: 2 },
        { x: 0, y: 3 }, { x: 1, y: 3 }, { x: 2, y: 3 }, { x: 3, y: 3 }, { x: 4, y: 3 },
        { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 }, { x: 5, y: 4 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 5, y: 3 },
      cores: [{ id: 'c1', x: 1, y: 1, power: 3, label: '幕末コア' }],
      chargers: [{ x: 2, y: 1 }],
      switches: [{ x: 2, y: 1 }, { x: 4, y: 1 }],
      gates: [{ x: 5, y: 2, openTicks: 1, closedTicks: 1, linkedSwitch: { x: 4, y: 1 } }],
      deliveries: [{ x: 5, y: 3 }],
      vault: { x: 0, y: 0, initial: 0, target: 7 },
      sparks: [
        { id: 'sp1', path: [{ x: 3, y: 0 }, { x: 3, y: 1 }, { x: 3, y: 2 }, { x: 3, y: 1 }], initialIndex: 0 },
      ],
    },
    victoryCondition: { reachGoal: true, deliverCores: 1, minCorePower: 5, vaultTarget: 7, stdoutIncludes: ['ACT2_MASTER'], requireAllSwitches: true, requireSpatialCoreRules: true },
    parTicks: 15,
  },
];
