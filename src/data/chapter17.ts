import { StageDefinition } from '../types/game';

export const CHAPTER_17_STAGES: StageDefinition[] = [
  {
    "displayId": "17-1",
    "id": "7a5d0c50-d5f6-588f-9f29-ae1174a234f5",
    "index": 363,
    "chapter": 17,
    "chapterTitle": "第17章 Rustのオブジェクト指向プログラミング機能",
    "title": "17-1. カプセル化：公開メソッド経由で安全に更新",
    "topicTag": "カプセル化 / pub API",
    "kurumiIntro": "オブジェクト指向の大切な柱「カプセル化」！中身の数値を直接いじる代わりに、`add()` や `total()` といった決まった窓口メソッドを通して安全に管理しよう。",
    "goalSummary": "Averager の公開メソッドで合計 3 を作り金庫⚡3＋ゴールへ",
    "bookSectionTitle": "17.1 カプセル化が実装の詳細を隠蔽する",
    "bookSummary": "データ構造の内部フィールドを隠し、公開メソッドだけを提供することで、外からの想定外の変更を防ぎ保守性を高められます。",
    "bookKeyCode": "tracker.add(2);\nlet sum = tracker.total();",
    "starterCode": "struct Tracker {\n    sum: i32,\n}\n\nimpl Tracker {\n    pub fn new() -> Tracker {\n        Tracker { sum: 0 }\n    }\n    pub fn add(&mut self, val: i32) {\n        self.sum += val;\n    }\n    pub fn total(&self) -> i32 {\n        self.sum\n    }\n}\n\nfn main() {\n    let mut tr = Tracker::new();\n    tr.add(1);\n    // もう 2 だけ add して合計 3 にしよう！\n    let v = tr.total();\n    add_vault(v);\n    step(v);\n}",
    "solutionCode": "struct Tracker {\n    sum: i32,\n}\n\nimpl Tracker {\n    pub fn new() -> Tracker {\n        Tracker { sum: 0 }\n    }\n    pub fn add(&mut self, val: i32) {\n        self.sum += val;\n    }\n    pub fn total(&self) -> i32 {\n        self.sum\n    }\n}\n\nfn main() {\n    let mut tr = Tracker::new();\n    tr.add(1);\n    tr.add(2);\n    let v = tr.total();\n    add_vault(v);\n    step(v);\n}",
    "quickChips": [
      {
        "label": "tr.add(2);",
        "insert": "tr.add(2);\n    "
      }
    ],
    "hints": [
      "tr.add(1); だけだと合計は 1 になっているよ。",
      "tr.add(2); を追加すると合計が 3 になって金庫もゴールも達成できるよ！",
      "tr.add(1);\ntr.add(2);"
    ],
    "worldSetup": {
      "width": 5,
      "height": 3,
      "walls": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        }
      ],
      "botStart": {
        "x": 0,
        "y": 1,
        "dir": 0
      },
      "goal": {
        "x": 3,
        "y": 1
      },
      "vault": {
        "x": 2,
        "y": 0,
        "initial": 0,
        "target": 3
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "vaultTarget": 3
    },
    "parTicks": 4
  },
  {
    "displayId": "17-2",
    "id": "cc3aa3b6-256c-5917-8355-bdb415791494",
    "index": 364,
    "chapter": 17,
    "chapterTitle": "第17章 Rustのオブジェクト指向プログラミング機能",
    "title": "17-2. トレイトオブジェクト Box<dyn Trait>",
    "topicTag": "Box<dyn Trait>",
    "kurumiIntro": "いよいよ最終章！異なるパーツ型でも同じ `Actuator` トレイトを持っていれば `Box<dyn Actuator>` としてひとまとめに動かせるよ！",
    "goalSummary": "トレイトオブジェクトでパーツを起動し、金庫⚡3＋ゴールへ",
    "bookSectionTitle": "17.2 トレイトオブジェクトで異なる型の値を許容する",
    "bookSummary": "`Box<dyn トレイト名>` を使うと、中身が異なる構造体であっても共通のトレイトを持つ部品として同じリストにまとめて扱えます。",
    "bookKeyCode": "trait Actuator { fn run(&self) -> i32; }",
    "starterCode": "trait Actuator {\n    fn run(&self) -> i32;\n}\n\nstruct Spring { force: i32 }\nimpl Actuator for Spring {\n    fn run(&self) -> i32 { self.force }\n}\n\nfn main() {\n    let parts = vec![Box::new(Spring { force: 1 }), Box::new(Spring { force: 2 })];\n    let mut total = 0;\n    for p in parts {\n        total += (*p).run();\n    }\n    // total は 3 になるよ！金庫に入れてゴールへ進もう\n    \n}",
    "solutionCode": "trait Actuator {\n    fn run(&self) -> i32;\n}\n\nstruct Spring { force: i32 }\nimpl Actuator for Spring {\n    fn run(&self) -> i32 { self.force }\n}\n\nfn main() {\n    let parts = vec![Box::new(Spring { force: 1 }), Box::new(Spring { force: 2 })];\n    let mut total = 0;\n    for p in parts {\n        total += (*p).run();\n    }\n    add_vault(total);\n    step(total);\n}",
    "quickChips": [
      {
        "label": "add_vault(total);",
        "insert": "add_vault(total);\n    "
      },
      {
        "label": "step(total);",
        "insert": "step(total);\n    "
      }
    ],
    "hints": [
      "for ループのあと、total の中には 1 + 2 = 3 が入っているよ！",
      "add_vault(total); と step(total); を書き足そう。",
      "add_vault(total);\nstep(total);"
    ],
    "worldSetup": {
      "width": 5,
      "height": 3,
      "walls": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        }
      ],
      "botStart": {
        "x": 0,
        "y": 1,
        "dir": 0
      },
      "goal": {
        "x": 3,
        "y": 1
      },
      "vault": {
        "x": 2,
        "y": 0,
        "initial": 0,
        "target": 3
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "vaultTarget": 3
    },
    "parTicks": 4
  },
  {
    "displayId": "17-3",
    "id": "c419f437-352b-5f1d-8298-e4c37e52a12a",
    "index": 365,
    "chapter": 17,
    "chapterTitle": "第17章 Rustのオブジェクト指向プログラミング機能",
    "title": "17-3. 異種パーツ Spring と Gear を同じリストで動かす",
    "topicTag": "異種型の統一リスト",
    "kurumiIntro": "今度は `Spring` と `Gear` という別々の構造体を両方同じ `vec!` に入れて、まとめて `run()` してみよう！型が違っても共通トレイトがあれば一緒に行動できるよ。",
    "goalSummary": "Spring と Gear をまとめて実行し金庫⚡4＋(4, 1)へ",
    "bookSectionTitle": "17.2 共通のふるまいによるポリモーフィズム",
    "bookSummary": "継承ではなくトレイトを使うことで、関連のない別々の構造体にも共通のインターフェースを持たせて統一的に処理できます。",
    "bookKeyCode": "for part in parts { sum += (*part).run(); }",
    "starterCode": "trait Actuator {\n    fn run(&self) -> i32;\n}\n\nstruct Spring { force: i32 }\nimpl Actuator for Spring {\n    fn run(&self) -> i32 { self.force }\n}\n\nstruct Gear { teeth: i32 }\nimpl Actuator for Gear {\n    fn run(&self) -> i32 { self.teeth * 2 }\n}\n\nfn main() {\n    let s = Box::new(Spring { force: 2 });\n    // Gear { teeth: 1 } も Box::new して合計 4 にしよう！\n    let total = (*s).run();\n    add_vault(total);\n    step(total);\n}",
    "solutionCode": "trait Actuator {\n    fn run(&self) -> i32;\n}\n\nstruct Spring { force: i32 }\nimpl Actuator for Spring {\n    fn run(&self) -> i32 { self.force }\n}\n\nstruct Gear { teeth: i32 }\nimpl Actuator for Gear {\n    fn run(&self) -> i32 { self.teeth * 2 }\n}\n\nfn main() {\n    let s = Box::new(Spring { force: 2 });\n    let g = Box::new(Gear { teeth: 1 });\n    let total = (*s).run() + (*g).run();\n    add_vault(total);\n    step(total);\n}",
    "quickChips": [
      {
        "label": "let g = Box::new(Gear { teeth: 1 });",
        "insert": "let g = Box::new(Gear { teeth: 1 });\n    "
      },
      {
        "label": "(*g).run()",
        "insert": "(*g).run()"
      }
    ],
    "hints": [
      "Spring { force: 2 } だけだと run() の結果は 2 になるよ。",
      "Gear { teeth: 1 } を Box::new して (*g).run() を足せば 2 + 2 = 4 になるよ！",
      "let g = Box::new(Gear { teeth: 1 });\nlet total = (*s).run() + (*g).run();"
    ],
    "worldSetup": {
      "width": 6,
      "height": 3,
      "walls": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 5,
          "y": 2
        }
      ],
      "botStart": {
        "x": 0,
        "y": 1,
        "dir": 0
      },
      "goal": {
        "x": 4,
        "y": 1
      },
      "vault": {
        "x": 2,
        "y": 0,
        "initial": 0,
        "target": 4
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "vaultTarget": 4
    },
    "parTicks": 5
  },
  {
    "displayId": "17-4",
    "id": "888400ea-bdf9-4fd2-8323-8bb65c964991",
    "index": 366,
    "chapter": 17,
    "chapterTitle": "第17章 Rustのオブジェクト指向プログラミング機能",
    "stageKind": "puzzle",
    "title": "17-4. 3異種 Box<dyn Module> パーツ統合パズル",
    "topicTag": "Box<dyn Trait> 統合 + ダイヤル",
    "kurumiIntro": "`Coil`・`Rotor`・`Flywheel` という3つの別々の構造体を同じ `Module` トレイトで束ねて出力を集計し、秘密ダイヤルとL字ルートを制覇しよう！",
    "goalSummary": "3種パーツ合計⚡6でダイヤル(6)解除・金庫⚡6・(3, 3)へ",
    "bookSectionTitle": "17.2 複数の異なる型をトレイトオブジェクトで集計する",
    "bookSummary": "異なる計算式を持つ構造体であっても、共通トレイト `Box<dyn Module>` として配列にまとめれば同じループで合計できます。",
    "bookKeyCode": "for m in modules { total += (*m).power(); }",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "trait Module {\n    fn power(&self) -> i32;\n}\n\nstruct Coil { turns: i32 }\nimpl Module for Coil {\n    fn power(&self) -> i32 { self.turns }\n}\n\nstruct Rotor { blades: i32 }\nimpl Module for Rotor {\n    fn power(&self) -> i32 { self.blades * 2 }\n}\n\nstruct Flywheel { mass: i32 }\nimpl Module for Flywheel {\n    fn power(&self) -> i32 { self.mass }\n}\n\nfn main() {\n    let modules = vec![\n        Box::new(Coil { turns: 1 }),\n        Box::new(Rotor { blades: 2 }),\n        Box::new(Flywheel { mass: 1 }),\n    ];\n    let mut total = 0;\n    for m in modules {\n        total += (*m).power();\n    }\n    try_dial(total);\n    add_vault(total);\n    step(3);\n    turn_right();\n    step(2);\n}",
    "quickChips": [
      {
        "label": "self.blades * 2",
        "insert": "self.blades * 2"
      },
      {
        "label": "try_dial(total);",
        "insert": "try_dial(total);\n    "
      }
    ],
    "hints": [
      "3つの異なる構造体（例: 1 + 2*2 + 1 = 6）を `Box<dyn Module>` の `Vec` にまとめて合計6を計算し、ダイヤル(6)・金庫⚡6をクリアして東3歩・右折・南2歩で (3, 3) へ進もう。",
      "`trait Module { fn power(&self) -> i32; }` を `Coil`・`Rotor`・`Flywheel` に実装して `vec![Box::new(...), ...]` でループ集計し、`try_dial(total); add_vault(total); step(3); turn_right(); step(2);` を実行しよう。",
      "trait Module {\n    fn power(&self) -> i32;\n}\n\nstruct Coil { turns: i32 }\nimpl Module for Coil {\n    fn power(&self) -> i32 { self.turns }\n}\n\nstruct Rotor { blades: i32 }\nimpl Module for Rotor {\n    fn power(&self) -> i32 { self.blades * 2 }\n}\n\nstruct Flywheel { mass: i32 }\nimpl Module for Flywheel {\n    fn power(&self) -> i32 { self.mass }\n}\n\nfn main() {\n    let modules = vec![\n        Box::new(Coil { turns: 1 }),\n        Box::new(Rotor { blades: 2 }),\n        Box::new(Flywheel { mass: 1 }),\n    ];\n    let mut total = 0;\n    for m in modules {\n        total += (*m).power();\n    }\n    try_dial(total);\n    add_vault(total);\n    step(3);\n    turn_right();\n    step(2);\n}"
    ],
    "worldSetup": {
      "width": 5,
      "height": 5,
      "walls": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 4,
          "y": 3
        }
      ],
      "botStart": {
        "x": 0,
        "y": 1,
        "dir": 0
      },
      "goal": {
        "x": 3,
        "y": 3
      },
      "dial": {
        "x": 1,
        "y": 0,
        "secret": 6
      },
      "vault": {
        "x": 2,
        "y": 0,
        "initial": 0,
        "target": 6
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "dialSolved": true,
      "vaultTarget": 6
    },
    "parTicks": 9
  },
  {
    "displayId": "17-5",
    "id": "8cb63b66-a58b-569e-ae65-433de5ecea2a",
    "index": 367,
    "chapter": 17,
    "chapterTitle": "第17章 Rustのオブジェクト指向プログラミング機能",
    "title": "17-5. 複数メソッドを備えた部品インターフェース",
    "topicTag": "複数メソッド Trait",
    "kurumiIntro": "お祭り用のパーツには `prepare()` で充電して `advance()` でL字に走る、2つの役割を持たせてみよう！",
    "goalSummary": "prepare() と advance() を実装して金庫⚡4＋(3, 3)へ",
    "bookSectionTitle": "17.2 オブジェクト指向インターフェースとしてのトレイト",
    "bookSummary": "複数のメソッドをまとめたトレイトを定義すれば、どの構造体も同じ手順で初期化・実行できるようになります。",
    "bookKeyCode": "bot.prepare();\nbot.advance();",
    "starterCode": "trait Runner {\n    fn prepare(&self);\n    fn advance(&self);\n}\n\nstruct FloatBot {\n    power: i32,\n}\n\nimpl Runner for FloatBot {\n    fn prepare(&self) {\n        add_vault(self.power);\n    }\n    fn advance(&self) {\n        step(3);\n        turn_right();\n        // 下へ 2 歩進む step(2); を足そう！\n    }\n}\n\nfn main() {\n    let bot = FloatBot { power: 4 };\n    bot.prepare();\n    bot.advance();\n}",
    "solutionCode": "trait Runner {\n    fn prepare(&self);\n    fn advance(&self);\n}\n\nstruct FloatBot {\n    power: i32,\n}\n\nimpl Runner for FloatBot {\n    fn prepare(&self) {\n        add_vault(self.power);\n    }\n    fn advance(&self) {\n        step(3);\n        turn_right();\n        step(2);\n    }\n}\n\nfn main() {\n    let bot = FloatBot { power: 4 };\n    bot.prepare();\n    bot.advance();\n}",
    "quickChips": [
      {
        "label": "step(2);",
        "insert": "step(2);"
      }
    ],
    "hints": [
      "turn_right() のあと、まだ下へ進んでいないため (3, 1) で止まってしまうよ！",
      "advance() の最後に `step(2);` を追加して (3, 3) まで進もう。",
      "step(3);\nturn_right();\nstep(2);"
    ],
    "worldSetup": {
      "width": 5,
      "height": 5,
      "walls": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 4,
          "y": 3
        }
      ],
      "botStart": {
        "x": 0,
        "y": 1,
        "dir": 0
      },
      "goal": {
        "x": 3,
        "y": 3
      },
      "vault": {
        "x": 2,
        "y": 0,
        "initial": 0,
        "target": 4
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "vaultTarget": 4
    },
    "parTicks": 7
  },
  {
    "displayId": "17-6",
    "id": "7e57985c-d770-4ed9-9c75-2e8a7eb906fd",
    "index": 368,
    "chapter": 17,
    "chapterTitle": "第17章 Rustのオブジェクト指向プログラミング機能",
    "stageKind": "puzzle",
    "title": "17-6. 検査＆強化トレイトで空間コアを仕上げよう",
    "topicTag": "複数メソッドTrait + 空間コア",
    "kurumiIntro": "作業ラインを表す `WorkshopLine` トレイトに、不変参照で検査する `check_stage` と可変参照で強化する `power_stage` の両方を実装してコアを納品しよう！",
    "goalSummary": "トレイトメソッドで検査(2,1)＆強化(3,1)しコア⚡4+を (4, 1) へ納品",
    "bookSectionTitle": "17.2 トレイトの複数メソッドによる空間操作",
    "bookSummary": "不変借用 `&i32` と可変借用 `&mut i32` を扱うメソッドを1つのトレイトにまとめ、作業工程を統一インターフェースで呼び出します。",
    "bookKeyCode": "bench.check_stage(&core);\nbench.power_stage(&mut core);",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "trait WorkshopLine {\n    fn check_stage(&self, core: &i32);\n    fn power_stage(&self, core: &mut i32);\n}\n\nstruct CraftBench { level: i32 }\n\nimpl WorkshopLine for CraftBench {\n    fn check_stage(&self, core: &i32) {\n        scan(core);\n    }\n    fn power_stage(&self, core: &mut i32) {\n        boost(core);\n    }\n}\n\nfn main() {\n    let bench = CraftBench { level: 1 };\n    step(1);\n    let mut core = grab_core();\n    step(1);\n    bench.check_stage(&core);\n    step(1);\n    bench.power_stage(&mut core);\n    step(1);\n    deliver(core);\n}",
    "quickChips": [
      {
        "label": "bench.power_stage(&mut core);",
        "insert": "bench.power_stage(&mut core);\n    "
      }
    ],
    "hints": [
      "検査台 (2, 1)・強化台 (3, 1)・納品台 (4, 1) に合わせて、不変参照 `&i32` で `scan` し可変参照 `&mut i32` で `boost`（⚡4+）するトレイトメソッドを作ろう。",
      "`trait WorkshopLine { fn check_stage(&self, core: &i32); fn power_stage(&self, core: &mut i32); }` を実装し、1歩目取得→2歩目 `check_stage(&core)`→3歩目 `power_stage(&mut core)`→4歩目 `deliver(core)` しよう。",
      "trait WorkshopLine {\n    fn check_stage(&self, core: &i32);\n    fn power_stage(&self, core: &mut i32);\n}\n\nstruct CraftBench { level: i32 }\n\nimpl WorkshopLine for CraftBench {\n    fn check_stage(&self, core: &i32) {\n        scan(core);\n    }\n    fn power_stage(&self, core: &mut i32) {\n        boost(core);\n    }\n}\n\nfn main() {\n    let bench = CraftBench { level: 1 };\n    step(1);\n    let mut core = grab_core();\n    step(1);\n    bench.check_stage(&core);\n    step(1);\n    bench.power_stage(&mut core);\n    step(1);\n    deliver(core);\n}"
    ],
    "worldSetup": {
      "width": 6,
      "height": 3,
      "walls": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 5,
          "y": 2
        }
      ],
      "botStart": {
        "x": 0,
        "y": 1,
        "dir": 0
      },
      "goal": {
        "x": 4,
        "y": 1
      },
      "cores": [
        {
          "id": "c1",
          "x": 1,
          "y": 1,
          "power": 2,
          "label": "部品コア"
        }
      ],
      "scanners": [
        {
          "x": 2,
          "y": 1
        }
      ],
      "chargers": [
        {
          "x": 3,
          "y": 1
        }
      ],
      "deliveries": [
        {
          "x": 4,
          "y": 1
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "deliverCores": 1,
      "minCorePower": 4,
      "scanCount": 1,
      "requireSpatialCoreRules": true
    },
    "parTicks": 9
  },
  {
    "displayId": "17-7",
    "id": "0ab6754a-d4df-54ac-a77f-e80fc746a157",
    "index": 369,
    "chapter": 17,
    "chapterTitle": "第17章 Rustのオブジェクト指向プログラミング機能",
    "title": "17-7. ステートパターン基礎：Draft から Ready へ",
    "topicTag": "ステートパターン基礎",
    "kurumiIntro": "ロボットの状態（`Draft` → `Ready`）をオブジェクトの切り替えで表現するステートパターンに挑戦しよう！準備中に発進しない安全設計だよ。",
    "goalSummary": "state を Draft から Ready へ進めてゴール (3, 1) へ",
    "bookSectionTitle": "17.3 オブジェクト指向デザインパターンを実装する",
    "bookSummary": "状態ごとに異なる振る舞いを構造体や enum の遷移として表現することで、状態に応じた安全な振る舞いを綺麗に設計できます。",
    "bookKeyCode": "ctrl.approve();\nctrl.drive();",
    "starterCode": "enum Mode { Draft, Ready }\n\nstruct Controller { mode: Mode }\n\nimpl Controller {\n    fn approve(&mut self) {\n        self.mode = Mode::Ready;\n    }\n    fn drive(&self) {\n        match self.mode {\n            Mode::Draft => println!(\"まだ準備中だよ\"),\n            Mode::Ready => step(3),\n        }\n    }\n}\n\nfn main() {\n    let mut ctrl = Controller { mode: Mode::Draft };\n    // drive() の前に approve() を呼んで Ready にしよう！\n    ctrl.drive();\n}",
    "solutionCode": "enum Mode { Draft, Ready }\n\nstruct Controller { mode: Mode }\n\nimpl Controller {\n    fn approve(&mut self) {\n        self.mode = Mode::Ready;\n    }\n    fn drive(&self) {\n        match self.mode {\n            Mode::Draft => println!(\"まだ準備中だよ\"),\n            Mode::Ready => step(3),\n        }\n    }\n}\n\nfn main() {\n    let mut ctrl = Controller { mode: Mode::Draft };\n    ctrl.approve();\n    ctrl.drive();\n}",
    "quickChips": [
      {
        "label": "ctrl.approve();",
        "insert": "ctrl.approve();\n    "
      }
    ],
    "hints": [
      "今は mode が Draft のまま drive() しているから動かないみたい！",
      "ctrl.drive(); の前に `ctrl.approve();` を呼ぼう。",
      "let mut ctrl = Controller { mode: Mode::Draft };\nctrl.approve();\nctrl.drive();"
    ],
    "worldSetup": {
      "width": 5,
      "height": 3,
      "walls": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        }
      ],
      "botStart": {
        "x": 0,
        "y": 1,
        "dir": 0
      },
      "goal": {
        "x": 3,
        "y": 1
      }
    },
    "victoryCondition": {
      "reachGoal": true
    },
    "parTicks": 3
  },
  {
    "displayId": "17-8",
    "id": "bee5e43c-ba0a-5915-a8bd-4412c17f2ead",
    "index": 370,
    "chapter": 17,
    "chapterTitle": "第17章 Rustのオブジェクト指向プログラミング機能",
    "title": "17-8. 3段階ステート遷移：下書き → 審査中 → 承認済み",
    "topicTag": "3段階ステート遷移",
    "kurumiIntro": "お祭りの大ランタンは「`Draft`（下書き）→ `Pending`（審査中）→ `Approved`（承認済み）」の順番を守らないと点灯しない仕組みだよ！手順通りに進めよう。",
    "goalSummary": "request_review() と approve() を順に呼び金庫⚡3＋ゴールへ",
    "bookSectionTitle": "17.3 多段階の承認ワークフローを状態遷移で表す",
    "bookSummary": "次の状態への遷移条件をメソッド内部に閉じ込めることで、手順飛ばしの不正な状態変化を防止できます。",
    "bookKeyCode": "post.request_review();\npost.approve();",
    "starterCode": "enum PostState { Draft, Pending, Approved }\n\nstruct Lantern { state: PostState }\n\nimpl Lantern {\n    fn request_review(&mut self) {\n        match self.state {\n            PostState::Draft => self.state = PostState::Pending,\n            _ => {},\n        }\n    }\n    fn approve(&mut self) {\n        match self.state {\n            PostState::Pending => self.state = PostState::Approved,\n            _ => {},\n        }\n    }\n    fn light_up(&self) {\n        match self.state {\n            PostState::Approved => {\n                add_vault(3);\n                step(3);\n            },\n            _ => println!(\"承認がまだ完了していません\"),\n        }\n    }\n}\n\nfn main() {\n    let mut lantern = Lantern { state: PostState::Draft };\n    // request_review() してから approve() を呼ぼう！\n    lantern.approve();\n    lantern.light_up();\n}",
    "solutionCode": "enum PostState { Draft, Pending, Approved }\n\nstruct Lantern { state: PostState }\n\nimpl Lantern {\n    fn request_review(&mut self) {\n        match self.state {\n            PostState::Draft => self.state = PostState::Pending,\n            _ => {},\n        }\n    }\n    fn approve(&mut self) {\n        match self.state {\n            PostState::Pending => self.state = PostState::Approved,\n            _ => {},\n        }\n    }\n    fn light_up(&self) {\n        match self.state {\n            PostState::Approved => {\n                add_vault(3);\n                step(3);\n            },\n            _ => println!(\"承認がまだ完了していません\"),\n        }\n    }\n}\n\nfn main() {\n    let mut lantern = Lantern { state: PostState::Draft };\n    lantern.request_review();\n    lantern.approve();\n    lantern.light_up();\n}",
    "quickChips": [
      {
        "label": "lantern.request_review();",
        "insert": "lantern.request_review();\n    "
      }
    ],
    "hints": [
      "Draft のままいきなり approve() を呼んでも Pending じゃないので無視されるよ！",
      "まず `lantern.request_review();` で Pending にしてから `lantern.approve();` を呼ぼう。",
      "lantern.request_review();\nlantern.approve();\nlantern.light_up();"
    ],
    "worldSetup": {
      "width": 5,
      "height": 3,
      "walls": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        }
      ],
      "botStart": {
        "x": 0,
        "y": 1,
        "dir": 0
      },
      "goal": {
        "x": 3,
        "y": 1
      },
      "vault": {
        "x": 2,
        "y": 0,
        "initial": 0,
        "target": 3
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "vaultTarget": 3
    },
    "parTicks": 4
  },
  {
    "displayId": "17-9",
    "id": "0d70d2bb-4608-4d54-9811-d924693f3109",
    "index": 371,
    "chapter": 17,
    "chapterTitle": "第17章 Rustのオブジェクト指向プログラミング機能",
    "stageKind": "puzzle",
    "title": "17-9. 状態機械＋#[test] 検証でゲート開放",
    "topicTag": "ステート遷移 + テスト + ゲート",
    "kurumiIntro": "3段階ステート遷移が正しく動いているかをまず `#[test]` で確かめ、手順通りに公開状態へ切り替えてからスイッチとゲートを一気に突破しよう！",
    "goalSummary": "テスト合格・金庫⚡5・全スイッチ・ゲート先の (5, 1) へ",
    "bookSectionTitle": "17.3 状態遷移の単体テストと実践",
    "bookSummary": "状態遷移をメソッドに閉じ込め、`#[test]` で途中の段階を飛ばせないことや正しく公開値が得られることを保証します。",
    "bookKeyCode": "notice.submit(); notice.publish(); assert_eq!(notice.bonus(), 5);",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "enum DocState { Draft, Reviewed, Published }\n\nstruct Notice { state: DocState, energy: i32 }\n\nimpl Notice {\n    fn submit(&mut self) {\n        match self.state {\n            DocState::Draft => self.state = DocState::Reviewed,\n            _ => {},\n        }\n    }\n    fn publish(&mut self) {\n        match self.state {\n            DocState::Reviewed => self.state = DocState::Published,\n            _ => {},\n        }\n    }\n    fn bonus(&self) -> i32 {\n        match self.state {\n            DocState::Published => self.energy,\n            _ => 0,\n        }\n    }\n}\n\n#[test]\nfn t_flow() {\n    let mut n = Notice { state: DocState::Draft, energy: 5 };\n    n.submit();\n    n.publish();\n    assert_eq!(n.bonus(), 5);\n}\n\nfn main() {\n    let mut notice = Notice { state: DocState::Draft, energy: 5 };\n    notice.submit();\n    notice.publish();\n    let v = notice.bonus();\n    add_vault(v);\n    step(v);\n}",
    "quickChips": [
      {
        "label": "notice.submit();",
        "insert": "notice.submit();\n    "
      }
    ],
    "hints": [
      "3段階のステート遷移（`Draft -> Reviewed -> Published`）を `#[test]` で検証し、`Published` 状態のボーナス⚡5を金庫に入れてそのまま5歩進めばスイッチとゴール (5, 1) に届くよ。",
      "`enum DocState` と `struct Notice` に `submit(&mut self)`・`publish(&mut self)`・`bonus(&self) -> i32` を実装して `#[test]` を通し、`main()` で `submit()`→`publish()`→`add_vault(v); step(v);` しよう。",
      "enum DocState { Draft, Reviewed, Published }\n\nstruct Notice { state: DocState, energy: i32 }\n\nimpl Notice {\n    fn submit(&mut self) {\n        match self.state {\n            DocState::Draft => self.state = DocState::Reviewed,\n            _ => {},\n        }\n    }\n    fn publish(&mut self) {\n        match self.state {\n            DocState::Reviewed => self.state = DocState::Published,\n            _ => {},\n        }\n    }\n    fn bonus(&self) -> i32 {\n        match self.state {\n            DocState::Published => self.energy,\n            _ => 0,\n        }\n    }\n}\n\n#[test]\nfn t_flow() {\n    let mut n = Notice { state: DocState::Draft, energy: 5 };\n    n.submit();\n    n.publish();\n    assert_eq!(n.bonus(), 5);\n}\n\nfn main() {\n    let mut notice = Notice { state: DocState::Draft, energy: 5 };\n    notice.submit();\n    notice.publish();\n    let v = notice.bonus();\n    add_vault(v);\n    step(v);\n}"
    ],
    "worldSetup": {
      "width": 7,
      "height": 3,
      "walls": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 6,
          "y": 0
        },
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 6,
          "y": 2
        }
      ],
      "botStart": {
        "x": 0,
        "y": 1,
        "dir": 0
      },
      "goal": {
        "x": 5,
        "y": 1
      },
      "switches": [
        {
          "x": 2,
          "y": 1
        }
      ],
      "gates": [
        {
          "x": 3,
          "y": 1,
          "openTicks": 1,
          "closedTicks": 1,
          "linkedSwitch": {
            "x": 2,
            "y": 1
          }
        }
      ],
      "vault": {
        "x": 1,
        "y": 0,
        "initial": 0,
        "target": 5
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "vaultTarget": 5,
      "testsRequired": 1,
      "requireAllSwitches": true
    },
    "parTicks": 7
  },
  {
    "displayId": "17-10",
    "id": "661f50ef-b06b-5e02-b076-2228c88a0e8e",
    "index": 372,
    "chapter": 17,
    "chapterTitle": "第17章 Rustのオブジェクト指向プログラミング機能",
    "title": "17-10. 状態による歩数切り替えパズル",
    "topicTag": "状態ごとの挙動変化",
    "kurumiIntro": "同じ `move_bot()` メソッドでも、今の状態が `Eco` なら 2歩、`Turbo` なら 3歩進むように設計されているよ！L字ルートに合わせてモードを切り替えよう。",
    "goalSummary": "Eco で右へ、Turbo で下へ進んでゴール (2, 4) へ",
    "bookSectionTitle": "17.3 状態オブジェクトが振る舞いを決定する",
    "bookSummary": "メソッド呼び出し側が条件分岐を書かなくても、内部状態ごとに振る舞いを切り替えることでコードをシンプルに保てます。",
    "bookKeyCode": "bot.set_turbo(); bot.move_bot();",
    "starterCode": "enum SpeedMode { Eco, Turbo }\n\nstruct Rover { mode: SpeedMode }\n\nimpl Rover {\n    fn set_turbo(&mut self) {\n        self.mode = SpeedMode::Turbo;\n    }\n    fn move_bot(&self) {\n        match self.mode {\n            SpeedMode::Eco => step(2),\n            SpeedMode::Turbo => step(3),\n        }\n    }\n}\n\nfn main() {\n    let mut bot = Rover { mode: SpeedMode::Eco };\n    bot.move_bot();\n    turn_right();\n    // ここで set_turbo() してから move_bot() を呼ぼう！\n    bot.move_bot();\n}",
    "solutionCode": "enum SpeedMode { Eco, Turbo }\n\nstruct Rover { mode: SpeedMode }\n\nimpl Rover {\n    fn set_turbo(&mut self) {\n        self.mode = SpeedMode::Turbo;\n    }\n    fn move_bot(&self) {\n        match self.mode {\n            SpeedMode::Eco => step(2),\n            SpeedMode::Turbo => step(3),\n        }\n    }\n}\n\nfn main() {\n    let mut bot = Rover { mode: SpeedMode::Eco };\n    bot.move_bot();\n    turn_right();\n    bot.set_turbo();\n    bot.move_bot();\n}",
    "quickChips": [
      {
        "label": "bot.set_turbo();",
        "insert": "bot.set_turbo();\n    "
      }
    ],
    "hints": [
      "最初の move_bot() は Eco なので右に 2歩進んで (2, 1) に着くよ。",
      "turn_right() のあとに `bot.set_turbo();` を入れると次の move_bot() で下に 3歩進んで (2, 4) へ着くよ！",
      "turn_right();\nbot.set_turbo();\nbot.move_bot();"
    ],
    "worldSetup": {
      "width": 4,
      "height": 6,
      "walls": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 3,
          "y": 4
        }
      ],
      "botStart": {
        "x": 0,
        "y": 1,
        "dir": 0
      },
      "goal": {
        "x": 2,
        "y": 4
      }
    },
    "victoryCondition": {
      "reachGoal": true
    },
    "parTicks": 6
  },
  {
    "displayId": "17-11",
    "id": "7fc10734-5e74-4bd5-833b-4231c43b726e",
    "index": 373,
    "chapter": 17,
    "chapterTitle": "第17章 Rustのオブジェクト指向プログラミング機能",
    "stageKind": "puzzle",
    "title": "17-11. 安全歩行とダッシュのステート切り替えパズル",
    "topicTag": "状態遷移 + スパーク + コンベア",
    "kurumiIntro": "`Slow` 状態ならスパークを安全に待って 1 歩ずつ、`Dash` 状態ならコンベアへ向けて一気に 2 歩進むロボット！スパークを抜けたら `Dash` へ切り替えよう。",
    "goalSummary": "Slow で安全にスパーク通過後 Dash に切り替えて全スイッチ＆ゴール (5, 1) へ",
    "bookSectionTitle": "17.3 モード切替による安全走行と高速走行の両立",
    "bookSummary": "状態オブジェクトによってメソッドの動作そのもの（待機付き1歩 vs 2歩ダッシュ）を切り替え、難所をスマートに走破します。",
    "bookKeyCode": "p.advance(); p.set_dash(); p.advance();",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "enum Pace { Slow, Dash }\n\nstruct Pacer { pace: Pace }\n\nimpl Pacer {\n    fn set_dash(&mut self) {\n        self.pace = Pace::Dash;\n    }\n    fn advance(&self) {\n        match self.pace {\n            Pace::Slow => {\n                while is_spark_ahead() {\n                    wait_tick(1);\n                }\n                step();\n            },\n            Pace::Dash => {\n                step(2);\n            },\n        }\n    }\n}\n\nfn main() {\n    let mut p = Pacer { pace: Pace::Slow };\n    p.advance();\n    p.advance();\n    p.set_dash();\n    p.advance();\n}",
    "quickChips": [
      {
        "label": "p.set_dash();",
        "insert": "p.set_dash();\n    "
      }
    ],
    "hints": [
      "1歩目のスイッチ(1, 1)と2歩目のスパーク(2, 1)は `Slow` モードで安全に1歩ずつ進み、3歩目のコンベア手前では `Dash` モードに切り替えて2歩進めばベルト込みで (5, 1) へ着くよ。",
      "`enum Pace { Slow, Dash }` を持つ `struct Pacer` に `set_dash(&mut self)` と `advance(&self)` を実装し、`p.advance(); p.advance(); p.set_dash(); p.advance();` を実行しよう。",
      "enum Pace { Slow, Dash }\n\nstruct Pacer { pace: Pace }\n\nimpl Pacer {\n    fn set_dash(&mut self) {\n        self.pace = Pace::Dash;\n    }\n    fn advance(&self) {\n        match self.pace {\n            Pace::Slow => {\n                while is_spark_ahead() {\n                    wait_tick(1);\n                }\n                step();\n            },\n            Pace::Dash => {\n                step(2);\n            },\n        }\n    }\n}\n\nfn main() {\n    let mut p = Pacer { pace: Pace::Slow };\n    p.advance();\n    p.advance();\n    p.set_dash();\n    p.advance();\n}"
    ],
    "worldSetup": {
      "width": 6,
      "height": 3,
      "walls": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 5,
          "y": 2
        }
      ],
      "botStart": {
        "x": 0,
        "y": 1,
        "dir": 0
      },
      "goal": {
        "x": 5,
        "y": 1
      },
      "conveyors": [
        {
          "x": 3,
          "y": 1,
          "dir": 0
        }
      ],
      "switches": [
        {
          "x": 1,
          "y": 1
        }
      ],
      "sparks": [
        {
          "id": "sp1",
          "path": [
            {
              "x": 2,
              "y": 0
            },
            {
              "x": 2,
              "y": 1
            },
            {
              "x": 2,
              "y": 2
            },
            {
              "x": 2,
              "y": 1
            }
          ],
          "initialIndex": 0
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "requireAllSwitches": true
    },
    "parTicks": 6
  },
  {
    "displayId": "17-12",
    "id": "70cb7557-cf2f-57ca-8b60-541cbead8dc1",
    "index": 374,
    "chapter": 17,
    "chapterTitle": "第17章 Rustのオブジェクト指向プログラミング機能",
    "title": "17-12. 第17章総合：状態機械＋トレイト＋ゲート突破",
    "topicTag": "OOP総合パズル",
    "kurumiIntro": "第17章の総仕上げ！準備状態を解除したあとに `Task` トレイトを使って金庫へチャージし、連動スイッチを踏んでゲートを突破しよう！",
    "goalSummary": "ステートを Ready に切り替えて金庫⚡5＋ゲート先の (5, 1) へ",
    "bookSectionTitle": "第17章 オブジェクト指向設計 総合演習",
    "bookSummary": "データの隠蔽・共通トレイト・状態遷移の3つを組み合わせることで、安全で拡張しやすい設計が実現できます。",
    "bookKeyCode": "unit.arm(); (*boxed).execute();",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "trait Task {\n    fn execute(&self) -> i32;\n}\n\nenum GateState { Locked, Armed }\n\nstruct GateUnit {\n    state: GateState,\n    energy: i32,\n}\n\nimpl GateUnit {\n    fn arm(&mut self) {\n        self.state = GateState::Armed;\n    }\n}\n\nimpl Task for GateUnit {\n    fn execute(&self) -> i32 {\n        match self.state {\n            GateState::Locked => 0,\n            GateState::Armed => self.energy,\n        }\n    }\n}\n\nfn main() {\n    let mut unit = GateUnit { state: GateState::Locked, energy: 5 };\n    unit.arm();\n    let boxed = Box::new(unit);\n    let e = (*boxed).execute();\n    add_vault(e);\n    step(e);\n}",
    "quickChips": [
      {
        "label": "unit.arm();",
        "insert": "unit.arm();\n    "
      }
    ],
    "hints": [
      "初期状態 `Locked` を `Armed` に切り替えたあと `Box::new(unit)` 経由で⚡5を取り出し、金庫へ入れて5歩進めばゲートを抜けて (5, 1) へ着くよ。",
      "`trait Task { fn execute(&self) -> i32; }` と `enum GateState { Locked, Armed }` を用意し、`unit.arm();` のあと `let boxed = Box::new(unit); let e = (*boxed).execute(); add_vault(e); step(e);` しよう。",
      "trait Task {\n    fn execute(&self) -> i32;\n}\n\nenum GateState { Locked, Armed }\n\nstruct GateUnit {\n    state: GateState,\n    energy: i32,\n}\n\nimpl GateUnit {\n    fn arm(&mut self) {\n        self.state = GateState::Armed;\n    }\n}\n\nimpl Task for GateUnit {\n    fn execute(&self) -> i32 {\n        match self.state {\n            GateState::Locked => 0,\n            GateState::Armed => self.energy,\n        }\n    }\n}\n\nfn main() {\n    let mut unit = GateUnit { state: GateState::Locked, energy: 5 };\n    unit.arm();\n    let boxed = Box::new(unit);\n    let e = (*boxed).execute();\n    add_vault(e);\n    step(e);\n}"
    ],
    "worldSetup": {
      "width": 7,
      "height": 3,
      "walls": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 6,
          "y": 0
        },
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 6,
          "y": 2
        }
      ],
      "botStart": {
        "x": 0,
        "y": 1,
        "dir": 0
      },
      "goal": {
        "x": 5,
        "y": 1
      },
      "switches": [
        {
          "x": 2,
          "y": 1
        }
      ],
      "gates": [
        {
          "x": 3,
          "y": 1,
          "openTicks": 1,
          "closedTicks": 1,
          "linkedSwitch": {
            "x": 2,
            "y": 1
          }
        }
      ],
      "vault": {
        "x": 1,
        "y": 0,
        "initial": 0,
        "target": 5
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "vaultTarget": 5
    },
    "parTicks": 6
  },
  {
    "displayId": "17-13",
    "id": "0e45101c-00e8-4c70-80d0-a4b51f6bf30d",
    "index": 375,
    "chapter": 17,
    "chapterTitle": "第17章 Rustのオブジェクト指向プログラミング機能",
    "stageKind": "challenge",
    "title": "17-13. 第17章マスター：カプセル化・ポリモーフィズム・状態機械の総力戦",
    "topicTag": "第17章 最終チャレンジ",
    "kurumiIntro": "第17章の最終チャレンジ！カプセル化された `VaultBox`、`Box<dyn Part>` 集計、3段階ステート遷移、`#[test]` を総動員し、ダイヤル・スイッチ・ゲート・スパーク・空間コア納品を制覇しよう！",
    "goalSummary": "テスト合格・ダイヤル(6)・金庫⚡6・全スイッチ・コア検査(2,1)＆強化(6,1)⚡4+納品・(7,1)へ",
    "bookSectionTitle": "第17章マスター — オブジェクト指向設計 3本柱の融合",
    "bookSummary": "カプセル化による安全境界、`Box<dyn Trait>` による多態集計、厳格な3段階ステート遷移を統合テストで検証して難関コースへ挑みます。",
    "bookKeyCode": "VaultBox + Box<dyn Part> + 3-State Controller + #[test]",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "struct VaultBox { total: i32 }\nimpl VaultBox {\n    fn new() -> VaultBox { VaultBox { total: 0 } }\n    fn add(&mut self, v: i32) { self.total += v; }\n    fn read(&self) -> i32 { self.total }\n}\n\ntrait Part { fn power(&self) -> i32; }\nstruct Cog { n: i32 }\nimpl Part for Cog {\n    fn power(&self) -> i32 { self.n * 2 }\n}\nstruct Pin { n: i32 }\nimpl Part for Pin {\n    fn power(&self) -> i32 { self.n }\n}\n\nenum Auth { Locked, Ready, Active }\nstruct Controller { state: Auth }\nimpl Controller {\n    fn prep(&mut self) {\n        match self.state { Auth::Locked => self.state = Auth::Ready, _ => {} }\n    }\n    fn activate(&mut self) {\n        match self.state { Auth::Ready => self.state = Auth::Active, _ => {} }\n    }\n    fn is_ready(&self) -> bool {\n        match self.state { Auth::Active => true, _ => false }\n    }\n}\n\n#[test]\nfn t_auth() {\n    let mut c = Controller { state: Auth::Locked };\n    c.prep();\n    c.activate();\n    let cg = Cog { n: 2 };\n    assert!(c.is_ready() && cg.power() == 4);\n}\n\nfn safe_step(n: i32) {\n    for _ in 0..n {\n        while !is_gate_open() || is_spark_ahead() { wait_tick(1); }\n        step();\n    }\n}\n\nfn main() {\n    let parts = vec![Box::new(Cog { n: 2 }), Box::new(Pin { n: 2 })];\n    let mut vb = VaultBox::new();\n    for p in parts { vb.add((*p).power()); }\n    try_dial(vb.read());\n    add_vault(vb.read());\n\n    let mut ctrl = Controller { state: Auth::Locked };\n    ctrl.prep();\n    ctrl.activate();\n    if ctrl.is_ready() {\n        safe_step(1);\n        let mut core = grab_core();\n        safe_step(1);\n        scan(&core);\n        safe_step(4);\n        boost(&mut core);\n        safe_step(1);\n        deliver(core);\n    }\n}",
    "quickChips": [
      {
        "label": "self.n * 2",
        "insert": "self.n * 2"
      },
      {
        "label": "ctrl.prep();",
        "insert": "ctrl.prep();\n    "
      },
      {
        "label": "boost(&mut core);",
        "insert": "boost(&mut core);\n        "
      }
    ],
    "hints": [
      "`Cog`・`Pin` の `Box<dyn Part>` 合計でダイヤル(6)・金庫⚡6を満たし、3段階ステートマシンを `Active` にしてから、ゲート＆スパーク待ち付き歩行で検査(2,1)→強化(6,1)⚡4+→納品(7,1)を決めよう。",
      "`VaultBox`・`Part` トレイト・`Controller`（`Locked->Ready->Active`）・`#[test]`・`safe_step` を実装し、`vb.read()` でダイヤルと金庫をクリアしたあと、1歩取得→1歩 `scan`→4歩 `boost`→1歩 `deliver` しよう。",
      "struct VaultBox { total: i32 }\nimpl VaultBox {\n    fn new() -> VaultBox { VaultBox { total: 0 } }\n    fn add(&mut self, v: i32) { self.total += v; }\n    fn read(&self) -> i32 { self.total }\n}\n\ntrait Part { fn power(&self) -> i32; }\nstruct Cog { n: i32 }\nimpl Part for Cog {\n    fn power(&self) -> i32 { self.n * 2 }\n}\nstruct Pin { n: i32 }\nimpl Part for Pin {\n    fn power(&self) -> i32 { self.n }\n}\n\nenum Auth { Locked, Ready, Active }\nstruct Controller { state: Auth }\nimpl Controller {\n    fn prep(&mut self) {\n        match self.state { Auth::Locked => self.state = Auth::Ready, _ => {} }\n    }\n    fn activate(&mut self) {\n        match self.state { Auth::Ready => self.state = Auth::Active, _ => {} }\n    }\n    fn is_ready(&self) -> bool {\n        match self.state { Auth::Active => true, _ => false }\n    }\n}\n\n#[test]\nfn t_auth() {\n    let mut c = Controller { state: Auth::Locked };\n    c.prep();\n    c.activate();\n    let cg = Cog { n: 2 };\n    assert!(c.is_ready() && cg.power() == 4);\n}\n\nfn safe_step(n: i32) {\n    for _ in 0..n {\n        while !is_gate_open() || is_spark_ahead() { wait_tick(1); }\n        step();\n    }\n}\n\nfn main() {\n    let parts = vec![Box::new(Cog { n: 2 }), Box::new(Pin { n: 2 })];\n    let mut vb = VaultBox::new();\n    for p in parts { vb.add((*p).power()); }\n    try_dial(vb.read());\n    add_vault(vb.read());\n\n    let mut ctrl = Controller { state: Auth::Locked };\n    ctrl.prep();\n    ctrl.activate();\n    if ctrl.is_ready() {\n        safe_step(1);\n        let mut core = grab_core();\n        safe_step(1);\n        scan(&core);\n        safe_step(4);\n        boost(&mut core);\n        safe_step(1);\n        deliver(core);\n    }\n}"
    ],
    "worldSetup": {
      "width": 8,
      "height": 3,
      "walls": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 6,
          "y": 0
        },
        {
          "x": 7,
          "y": 0
        },
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 6,
          "y": 2
        },
        {
          "x": 7,
          "y": 2
        }
      ],
      "botStart": {
        "x": 0,
        "y": 1,
        "dir": 0
      },
      "goal": {
        "x": 7,
        "y": 1
      },
      "cores": [
        {
          "id": "c1",
          "x": 1,
          "y": 1,
          "power": 2,
          "label": "設計コア"
        }
      ],
      "scanners": [
        {
          "x": 2,
          "y": 1
        }
      ],
      "switches": [
        {
          "x": 3,
          "y": 1
        }
      ],
      "gates": [
        {
          "x": 4,
          "y": 1,
          "openTicks": 1,
          "closedTicks": 1,
          "linkedSwitch": {
            "x": 3,
            "y": 1
          }
        }
      ],
      "sparks": [
        {
          "id": "sp1",
          "path": [
            {
              "x": 5,
              "y": 0
            },
            {
              "x": 5,
              "y": 1
            },
            {
              "x": 5,
              "y": 2
            },
            {
              "x": 5,
              "y": 1
            }
          ],
          "initialIndex": 0
        }
      ],
      "chargers": [
        {
          "x": 6,
          "y": 1
        }
      ],
      "deliveries": [
        {
          "x": 7,
          "y": 1
        }
      ],
      "dial": {
        "x": 1,
        "y": 0,
        "secret": 6
      },
      "vault": {
        "x": 2,
        "y": 0,
        "initial": 0,
        "target": 6
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "deliverCores": 1,
      "minCorePower": 4,
      "scanCount": 1,
      "dialSolved": true,
      "vaultTarget": 6,
      "testsRequired": 1,
      "requireAllSwitches": true,
      "requireSpatialCoreRules": true
    },
    "parTicks": 16
  }
];
