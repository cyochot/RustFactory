import { StageDefinition } from '../types/game';

export const CHAPTER_5_STAGES: StageDefinition[] = [
  {
    "displayId": "5-1",
    "id": "1980bf6e-258f-5ba0-80b7-eebe20305171",
    "index": 121,
    "chapter": 5,
    "chapterTitle": "第5章 構造体を使用して関係のあるデータを構造化する",
    "title": "5-1. 構造体 struct の定義と作成",
    "topicTag": "struct 定義",
    "kurumiIntro": "構造体の課題へようこそ！バラバラのデータを `struct BotPlan { steps: i32, boost: i32 }` のように1つの設計図にまとめよう！",
    "goalSummary": "構造体 BotPlan を作って金庫を⚡3にし、ゴール (3, 1) へ",
    "bookSectionTitle": "5.1 構造体を定義してインスタンス化する",
    "bookSummary": "`struct 名前 { フィールド名: 型 }` で関連するデータをまとめられます。使うときは `名前 { フィールド名: 値 }` で実体（インスタンス）を作ります。",
    "bookKeyCode": "struct BotPlan {\n    steps: i32,\n    boost: i32,\n}",
    "starterCode": "struct BotPlan {\n    steps: i32,\n    boost: i32,\n}\n\nfn main() {\n    let plan = BotPlan { steps: 1, boost: 1 };\n    add_vault(plan.boost);\n    step(plan.steps);\n}",
    "solutionCode": "struct BotPlan {\n    steps: i32,\n    boost: i32,\n}\n\nfn main() {\n    let plan = BotPlan { steps: 3, boost: 3 };\n    add_vault(plan.boost);\n    step(plan.steps);\n}",
    "quickChips": [
      {
        "label": "フィールド: 値",
        "insert": "/* フィールド */: /* 値 */"
      },
      {
        "label": "struct 定義",
        "insert": "struct /* 型名 */ {\n    /* フィールド */: i32,\n}"
      }
    ],
    "hints": [
      "plan の中の steps と boost の数字がまだ 1 になっているよ！",
      "steps: 3, boost: 3 にして実行してみよう。",
      "let plan = BotPlan { steps: 3, boost: 3 };"
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
    "displayId": "5-2",
    "id": "6bc94245-f5e4-561c-b1a1-f702ad499fb6",
    "index": 122,
    "chapter": 5,
    "chapterTitle": "第5章 構造体を使用して関係のあるデータを構造化する",
    "title": "5-2. フィールドの読み出しと L字経路",
    "topicTag": "struct / フィールド参照",
    "kurumiIntro": "今度は横の歩数 `dx` と縦の歩数 `dy` をまとめた構造体 `Route` を使おう！`route.dx` と `route.dy` を読み取って曲がり角の先へ進んでね。",
    "goalSummary": "構造体 Route の dx, dy を使ってゴール (3, 3) へ",
    "bookSectionTitle": "5.1 ドット記法によるフィールドアクセス",
    "bookSummary": "構造体の実体から中身を取り出すには `インスタンス.フィールド名` と書きます。データの意味が名前で分かるのが強みです。",
    "bookKeyCode": "let r = Route { dx: 3, dy: 2 };\nstep(r.dx); turn_right(); step(r.dy);",
    "starterCode": "struct Route {\n    dx: i32,\n    dy: i32,\n}\n\nfn main() {\n    let r = Route { dx: 3, dy: 2 };\n    step(r.dx);\n    turn_right();\n    // あと r.dy 歩だけ進もう！\n    \n}",
    "solutionCode": "struct Route {\n    dx: i32,\n    dy: i32,\n}\n\nfn main() {\n    let r = Route { dx: 3, dy: 2 };\n    step(r.dx);\n    turn_right();\n    step(r.dy);\n}",
    "quickChips": [
      {
        "label": "step(r.dy);",
        "insert": "step(r.dy);"
      }
    ],
    "hints": [
      "r.dx で東に3歩進んだあと、turn_right() で南を向いているよ！",
      "最後の行に step(r.dy); を書き足そう。",
      "step(r.dx);\nturn_right();\nstep(r.dy);"
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
      }
    },
    "victoryCondition": {
      "reachGoal": true
    },
    "parTicks": 6
  },
  {
    "displayId": "5-3",
    "id": "1255fea6-f0fc-5911-9d77-9e6386a528cf",
    "index": 123,
    "chapter": 5,
    "chapterTitle": "第5章 構造体を使用して関係のあるデータを構造化する",
    "title": "5-3. フィールド初期化省略記法と mut 構造体",
    "topicTag": "mut struct / 省略記法",
    "kurumiIntro": "構造体の一部のフィールドを後から書き換えたいときは、変数宣言を `let mut` にするだけでOK！一部のフィールドだけ mut にすることはできないのがRustの特徴だよ。",
    "goalSummary": "mut 構造体 tank の fuel を +3 増やして金庫⚡4＋ゴールへ",
    "bookSectionTitle": "5.1 可変な構造体インスタンス",
    "bookSummary": "構造体インスタンスを `let mut` にすると `tank.fuel += 3;` のように中身を書き換えられます。変数名とフィールド名が同じときは `{ fuel }` と省略して初期化できます。",
    "bookKeyCode": "let mut tank = Tank { fuel: 1 };\ntank.fuel += 3;",
    "starterCode": "struct Tank {\n    fuel: i32,\n}\n\nfn main() {\n    let fuel = 1;\n    // 書き換えられるように mut を付けよう！\n    let tank = Tank { fuel };\n    tank.fuel += 3;\n    add_vault(tank.fuel);\n    step(tank.fuel);\n}",
    "solutionCode": "struct Tank {\n    fuel: i32,\n}\n\nfn main() {\n    let fuel = 1;\n    let mut tank = Tank { fuel };\n    tank.fuel += 3;\n    add_vault(tank.fuel);\n    step(tank.fuel);\n}",
    "quickChips": [
      {
        "label": "let mut ",
        "insert": "let mut "
      }
    ],
    "hints": [
      "このまま実行すると「不変な構造体 tank のフィールドは変更できません」と出るよ！",
      "`let tank = Tank { fuel };` を `let mut tank = Tank { fuel };` に直そう！",
      "let mut tank = Tank { fuel };"
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
    "displayId": "5-4",
    "id": "d4f80b3d-a05c-5b52-af65-5dac0d83bd98",
    "index": 124,
    "chapter": 5,
    "chapterTitle": "第5章 構造体を使用して関係のあるデータを構造化する",
    "title": "5-4. 構造体を返す関数と借用渡し",
    "topicTag": "struct の関数渡し &T",
    "kurumiIntro": "構造体 `Config` を作って関数 `apply_plan(&cfg)` に参照渡ししよう！所有権を手元に残したまま移動にも金庫にも使えるよ。",
    "goalSummary": "make_plan(2, 2) と &cfg 参照渡しで金庫⚡4＋ゴールへ",
    "bookSectionTitle": "5.2 構造体を使ったプログラム例",
    "bookSummary": "構造体を関数の引数にするとき、所有権を奪わないように `&Plan` と借用で受け取るのがRustの定番スタイルです。",
    "bookKeyCode": "fn apply(p: &Plan) {\n    add_vault(p.power);\n}",
    "starterCode": "struct Plan {\n    dist: i32,\n    power: i32,\n}\n\nfn make_plan(d: i32, p: i32) -> Plan {\n    Plan { dist: d, power: p }\n}\n\nfn main() {\n    let cfg = make_plan(4, 4);\n    add_vault(cfg.power);\n    // cfg.dist を使ってゴール (4, 1) へ進もう！\n    \n}",
    "solutionCode": "struct Plan {\n    dist: i32,\n    power: i32,\n}\n\nfn make_plan(d: i32, p: i32) -> Plan {\n    Plan { dist: d, power: p }\n}\n\nfn main() {\n    let cfg = make_plan(4, 4);\n    add_vault(cfg.power);\n    step(cfg.dist);\n}",
    "quickChips": [
      {
        "label": "step(cfg.dist);",
        "insert": "step(cfg.dist);"
      }
    ],
    "hints": [
      "make_plan(4, 4) が作った構造体 cfg の中に dist: 4 が入っているよ！",
      "最後の行に step(cfg.dist); を書き足そう。",
      "add_vault(cfg.power);\nstep(cfg.dist);"
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
    "displayId": "5-5",
    "id": "a71ca700-b80a-5bcb-9c08-acb27467c9f2",
    "index": 125,
    "chapter": 5,
    "chapterTitle": "第5章 構造体を使用して関係のあるデータを構造化する",
    "stageKind": "puzzle",
    "title": "5-5. フィールド更新ショートハンドと分岐ナビ",
    "topicTag": "struct 更新 + 分岐ナビ",
    "kurumiIntro": "構造体 `NavConfig` の中で歩数とエネルギーチャージ量を計算しよう！目標座標 `goal_x()` を参考にしながら2つのスイッチを確実に踏んでね。",
    "goalSummary": "NavConfig を使って2つのスイッチと金庫⚡5を達成し (5, 3) へ",
    "bookSectionTitle": "5.1 & 5.2 構造体インスタンスの生成と更新",
    "bookSummary": "構造体の設定値をまとめ、状況に合わせて `add_vault` と曲がり角のステップを組み合わせます。",
    "bookKeyCode": "struct NavConfig { east: i32, south: i32, power: i32 }",
    "starterCode": "struct NavConfig {\n    east: i32,\n    south: i32,\n    power: i32,\n}\n\nimpl NavConfig {\n    fn start(&self) {\n        add_vault(self.power);\n        step(self.east);\n        turn_right();\n        step(self.south);\n    }\n}\n\nfn main() {\n    let cfg = NavConfig { east: 2, south: 1, power: 2 };\n    cfg.start();\n}",
    "solutionCode": "struct NavConfig {\n    east: i32,\n    south: i32,\n    power: i32,\n}\n\nimpl NavConfig {\n    fn start(&self) {\n        add_vault(self.power);\n        step(self.east);\n        turn_right();\n        step(self.south);\n    }\n}\n\nfn main() {\n    let cfg = NavConfig { east: 5, south: 2, power: 5 };\n    cfg.start();\n}",
    "quickChips": [
      {
        "label": "NavConfig { east: 5, south: 2, power: 5 }",
        "insert": "NavConfig { east: 5, south: 2, power: 5 }"
      }
    ],
    "hints": [
      "上の廊下にスイッチが2つ (2,1) と (4,1) にあるよ！東へ 5 歩で (5,1) まで行けるよ。",
      "そこから右折して南へ 2 歩進むとゲートを抜けてゴール (5,3) に着くよ！",
      "let cfg = NavConfig { east: 5, south: 2, power: 5 };"
    ],
    "worldSetup": {
      "width": 6,
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
          "x": 0,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
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
        "x": 5,
        "y": 3
      },
      "switches": [
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        }
      ],
      "gates": [
        {
          "x": 5,
          "y": 2,
          "openTicks": 1,
          "closedTicks": 1,
          "linkedSwitch": {
            "x": 4,
            "y": 1
          }
        }
      ],
      "vault": {
        "x": 3,
        "y": 0,
        "initial": 0,
        "target": 5
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "vaultTarget": 5,
      "requireAllSwitches": true
    },
    "parTicks": 10
  },
  {
    "displayId": "5-6",
    "id": "cc08fb86-3ef1-5b5c-be2c-bcd5f084d0a9",
    "index": 126,
    "chapter": 5,
    "chapterTitle": "第5章 構造体を使用して関係のあるデータを構造化する",
    "title": "5-6. メソッド構文 impl と &self",
    "topicTag": "impl / &self",
    "kurumiIntro": "構造体に専用のわざ（メソッド）を持たせよう！`impl GearBox { fn total(&self) -> i32 { ... } }` を完成させてね！",
    "goalSummary": "impl 内のメソッド total(&self) で 3 を返してゴールへ",
    "bookSectionTitle": "5.3 メソッド構文 — impl ブロック",
    "bookSummary": "`impl 構造体名 { fn メソッド名(&self) ... }` と書くと、`obj.メソッド名()` の形で呼び出せるようになります。自分のデータを読むだけなら `&self`、書き換えるなら `&mut self` を使います。",
    "bookKeyCode": "impl GearBox {\n    fn total(&self) -> i32 { self.a + self.b }\n}",
    "starterCode": "struct GearBox {\n    a: i32,\n    b: i32,\n}\n\nimpl GearBox {\n    fn total(&self) -> i32 {\n        // self.a と self.b を足してみよう！\n        self.a\n    }\n}\n\nfn main() {\n    let box1 = GearBox { a: 1, b: 2 };\n    step(box1.total());\n}",
    "solutionCode": "struct GearBox {\n    a: i32,\n    b: i32,\n}\n\nimpl GearBox {\n    fn total(&self) -> i32 {\n        self.a + self.b\n    }\n}\n\nfn main() {\n    let box1 = GearBox { a: 1, b: 2 };\n    step(box1.total());\n}",
    "quickChips": [
      {
        "label": "self.a + self.b",
        "insert": "self.a + self.b"
      }
    ],
    "hints": [
      "今は total(&self) が self.a（1）だけを返しているから、ゴールに届かないよ。",
      "total の中身を `self.a + self.b` にして 1 + 2 = 3 を返そう！",
      "fn total(&self) -> i32 {\n    self.a + self.b\n}"
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
    "displayId": "5-7",
    "id": "0c23c893-e04b-58eb-8123-1a5ead126bb4",
    "index": 127,
    "chapter": 5,
    "chapterTitle": "第5章 構造体を使用して関係のあるデータを構造化する",
    "stageKind": "puzzle",
    "title": "5-7. スパーク回避付き巡回構造体 GuardBot",
    "topicTag": "構造体メソッド + センサー待機",
    "kurumiIntro": "巡回スパークが通路を行き来しているよ！構造体 `GuardBot` に安全確認付きの `safe_advance(&self, n: i32)` メソッドを持たせて通り抜けよう。",
    "goalSummary": "GuardBot でスパークを避けつつ全スイッチを踏んでゴール (5, 1) へ",
    "bookSectionTitle": "5.3 安全チェックを内蔵したメソッド設計",
    "bookSummary": "移動や待機のセンサーチェックを構造体のメソッド内に閉じ込めると、メイン処理が読みやすく安全な設計になります。",
    "bookKeyCode": "fn safe_advance(&self, steps: i32)",
    "starterCode": "struct GuardBot {\n    vault_boost: i32,\n}\n\nimpl GuardBot {\n    fn safe_advance(&self, steps: i32) {\n        for _ in 0..steps {\n            // スパークが前にいたら 1ティック待とう！\n            step();\n        }\n    }\n    fn deposit(&self) {\n        add_vault(self.vault_boost);\n    }\n}\n\nfn main() {\n    let bot = GuardBot { vault_boost: 3 };\n    bot.deposit();\n    bot.safe_advance(5);\n}",
    "solutionCode": "struct GuardBot {\n    vault_boost: i32,\n}\n\nimpl GuardBot {\n    fn safe_advance(&self, steps: i32) {\n        for _ in 0..steps {\n            while is_spark_ahead() || !is_gate_open() {\n                wait_tick(1);\n            }\n            step();\n        }\n    }\n    fn deposit(&self) {\n        add_vault(self.vault_boost);\n    }\n}\n\nfn main() {\n    let bot = GuardBot { vault_boost: 3 };\n    bot.deposit();\n    bot.safe_advance(5);\n}",
    "quickChips": [
      {
        "label": "while is_spark_ahead() || !is_gate_open() { wait_tick(1); }",
        "insert": "while is_spark_ahead() || !is_gate_open() {\n                wait_tick(1);\n            }\n            "
      }
    ],
    "hints": [
      "(2,1) と (4,1) に横断スパークやスイッチ連動ゲートがあるよ！",
      "safe_advance の step() の直前に `while is_spark_ahead() || !is_gate_open() { wait_tick(1); }` を入れよう。",
      "while is_spark_ahead() || !is_gate_open() {\n    wait_tick(1);\n}"
    ],
    "worldSetup": {
      "width": 6,
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
          "x": 3,
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
          "x": 5,
          "y": 2
        },
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 5,
          "y": 4
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
          "x": 1,
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
            "x": 1,
            "y": 1
          }
        }
      ],
      "vault": {
        "x": 4,
        "y": 0,
        "initial": 0,
        "target": 3
      },
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
              "y": 3
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
          "initialIndex": 4
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "vaultTarget": 3,
      "requireAllSwitches": true
    },
    "parTicks": 9
  },
  {
    "displayId": "5-8",
    "id": "47e6d964-34c0-503b-b7b9-ca62cf48076a",
    "index": 128,
    "chapter": 5,
    "chapterTitle": "第5章 構造体を使用して関係のあるデータを構造化する",
    "stageKind": "challenge",
    "title": "5-8. 2段階ベルトと連動ゲートの時刻パズル",
    "topicTag": "構造体 + 周期ゲート計算",
    "kurumiIntro": "ベルトコンベアに乗ってスイッチを踏み、周期ゲートをぴったり開くタイミングで通り抜けよう！構造体 `TimerBot` で待機タイミングを調整してね。",
    "goalSummary": "10ティック以内に全スイッチを踏んで周期ゲートを抜け (5, 1) へ",
    "bookSectionTitle": "5.3 パラメータ化したタイミング制御",
    "bookSummary": "構造体に待機ティック数をフィールドとして持たせることで、コードのロジックを変えずにタイミングの微調整ができます。",
    "bookKeyCode": "struct TimerBot { initial_wait: i32 }",
    "starterCode": "struct TimerBot {\n    initial_wait: i32,\n}\n\nimpl TimerBot {\n    fn run(&self) {\n        if self.initial_wait > 0 {\n            wait_tick(self.initial_wait);\n        }\n        // スパーク(2,1)の前で安全を待って、コンベア(1,1)やゲート(4,1)を越えよう！\n        for _ in 0..4 {\n            while is_spark_ahead() || !is_gate_open() {\n                wait_tick(1);\n            }\n            step();\n        }\n    }\n}\n\nfn main() {\n    let tb = TimerBot { initial_wait: 0 };\n    tb.run();\n}",
    "solutionCode": "struct TimerBot {\n    initial_wait: i32,\n}\n\nimpl TimerBot {\n    fn run(&self) {\n        if self.initial_wait > 0 {\n            wait_tick(self.initial_wait);\n        }\n        for _ in 0..3 {\n            while is_spark_ahead() || !is_gate_open() {\n                wait_tick(1);\n            }\n            step();\n        }\n    }\n}\n\nfn main() {\n    let tb = TimerBot { initial_wait: 1 };\n    tb.run();\n}",
    "quickChips": [
      {
        "label": "0..3",
        "insert": "0..3"
      },
      {
        "label": "initial_wait: 1",
        "insert": "initial_wait: 1"
      }
    ],
    "hints": [
      "(1,1) と (3,1) が右向きコンベアだよ！(1,1) に乗ると (2,1) へ、(3,1) に乗るとスイッチのある (4,1) まで一気に運ばれるよ！",
      "コンベアが2つあるから、`for _ in 0..3` で3回 step() するだけで (5,1) に届くよ！ただし(2,1)には横切るスパークがいるので、初期待機 `initial_wait: 1` でタイミングをずらそう。",
      "for _ in 0..3 と initial_wait: 1 を使おう！"
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
          "x": 1,
          "y": 1,
          "dir": 0
        },
        {
          "x": 3,
          "y": 1,
          "dir": 0
        }
      ],
      "switches": [
        {
          "x": 4,
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
      "requireAllSwitches": true,
      "maxTicks": 10
    },
    "parTicks": 6
  },
  {
    "displayId": "5-9",
    "id": "2fcba75b-b840-54f5-ace5-9e10d4f3ecd6",
    "index": 129,
    "chapter": 5,
    "chapterTitle": "第5章 構造体を使用して関係のあるデータを構造化する",
    "title": "5-9. 関連関数 ::new() でカンタン作成",
    "topicTag": "関連関数 Runner::new",
    "kurumiIntro": "`impl` の中に `self` を取らない関数を書くと、「関連関数」になって `Runner::new(3)` みたいに呼べるよ！`String::from` と同じ仕組みなんだ。",
    "goalSummary": "Runner::new(3) 関連関数を使って U字の最初の角の先 (3, 3) へ",
    "bookSectionTitle": "5.3 関連関数（コンストラクタ）",
    "bookSummary": "`impl` ブロック内で引数に `self` を持たない関数を「関連関数」と呼び、`型名::関数名()` で呼び出します。主に新しいインスタンスを作る `new` に使われます。",
    "bookKeyCode": "impl Runner {\n    fn new(s: i32) -> Runner { Runner { step_len: s } }\n}",
    "starterCode": "struct Runner {\n    step_len: i32,\n}\n\nimpl Runner {\n    fn new(s: i32) -> Runner {\n        Runner { step_len: s }\n    }\n    fn go_l(&self) {\n        step(self.step_len);\n        turn_right();\n        step(2);\n    }\n}\n\nfn main() {\n    // Runner::new(3) で作って go_l() を呼ぼう！\n    let r = Runner::new(1);\n    r.go_l();\n}",
    "solutionCode": "struct Runner {\n    step_len: i32,\n}\n\nimpl Runner {\n    fn new(s: i32) -> Runner {\n        Runner { step_len: s }\n    }\n    fn go_l(&self) {\n        step(self.step_len);\n        turn_right();\n        step(2);\n    }\n}\n\nfn main() {\n    let r = Runner::new(3);\n    r.go_l();\n}",
    "quickChips": [
      {
        "label": "Runner::new(3)",
        "insert": "Runner::new(3)"
      }
    ],
    "hints": [
      "Runner::new(1) だと右へ1歩しか進まないから壁にぶつかるか届かないよ！",
      "Runner::new(3) に変えると右へ3歩、下へ2歩進んでゴール (3, 3) に着くよ。",
      "let r = Runner::new(3);"
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
      }
    },
    "victoryCondition": {
      "reachGoal": true
    },
    "parTicks": 6
  },
  {
    "displayId": "5-10",
    "id": "3b4bfcf0-aa4f-5711-8936-ac4766059c00",
    "index": 130,
    "chapter": 5,
    "chapterTitle": "第5章 構造体を使用して関係のあるデータを構造化する",
    "stageKind": "challenge",
    "title": "5-10. 複数インスタンス協調：偵察と実動",
    "topicTag": "複数構造体 + 空間納品",
    "kurumiIntro": "「設計図構造体 `Blueprint`」と「実行ロボ構造体 `Courier`」の2つの構造体を組み合わせて、スイッチ解除→コア回収→強化→納品の全工程をクリアしよう！",
    "goalSummary": "Blueprint から Courier を組み立て、コア⚡4以上納品＋スイッチ＋ゴールへ",
    "bookSectionTitle": "5.3 複数の構造体同士の連携設計",
    "bookSummary": "データを持つ構造体と実行を担う構造体を分けると、複雑な工程でも役割がすっきり整理できます。",
    "bookKeyCode": "let c = Courier::from_bp(&bp);",
    "starterCode": "struct Blueprint {\n    vault_amt: i32,\n}\n\nstruct Courier {\n    vault_amt: i32,\n}\n\nimpl Courier {\n    fn from_bp(bp: Blueprint) -> Courier {\n        Courier { vault_amt: bp.vault_amt }\n    }\n    fn operate(&self) {\n        add_vault(self.vault_amt);\n        // (1,1)のコアを拾って、(2,1)強化台で boost(&mut core) して、(4,1)納品台・ゴールへ運ぼう！\n        step(4);\n    }\n}\n\nfn main() {\n    let bp = Blueprint { vault_amt: 4 };\n    let courier = Courier::from_bp(bp);\n    courier.operate();\n}",
    "solutionCode": "struct Blueprint {\n    vault_amt: i32,\n}\n\nstruct Courier {\n    vault_amt: i32,\n}\n\nimpl Courier {\n    fn from_bp(bp: Blueprint) -> Courier {\n        Courier { vault_amt: bp.vault_amt }\n    }\n    fn operate(&self) {\n        add_vault(self.vault_amt);\n        step(1);\n        let mut core = grab_core();\n        step(1);\n        boost(&mut core);\n        step(2);\n        deliver(core);\n    }\n}\n\nfn main() {\n    let bp = Blueprint { vault_amt: 4 };\n    let courier = Courier::from_bp(bp);\n    courier.operate();\n}",
    "quickChips": [
      {
        "label": "let mut core = grab_core();",
        "insert": "let mut core = grab_core();\n        "
      },
      {
        "label": "boost(&mut core);",
        "insert": "boost(&mut core);\n        "
      },
      {
        "label": "deliver(core);",
        "insert": "deliver(core);\n        "
      }
    ],
    "hints": [
      "(1,1) で grab_core()、(2,1) はスイッチ兼強化台なので boost(&mut core)！",
      "スイッチ (2,1) を踏むとゲート (3,1) が開くから、さらに 2 歩進んで (4,1) で deliver(core) しよう！",
      "step(1); let mut core = grab_core(); step(1); boost(&mut core); step(2); deliver(core);"
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
        "x": 4,
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
      "chargers": [
        {
          "x": 2,
          "y": 1
        }
      ],
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
      "deliveries": [
        {
          "x": 4,
          "y": 1
        }
      ],
      "vault": {
        "x": 0,
        "y": 0,
        "initial": 0,
        "target": 4
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "deliverCores": 1,
      "minCorePower": 4,
      "vaultTarget": 4,
      "requireAllSwitches": true,
      "requireSpatialCoreRules": true
    },
    "parTicks": 10
  },
  {
    "displayId": "5-11",
    "id": "f02d67b8-17fb-5ba9-bed7-58542c37634e",
    "index": 131,
    "chapter": 5,
    "chapterTitle": "第5章 構造体を使用して関係のあるデータを構造化する",
    "stageKind": "puzzle",
    "title": "5-11. コンベア宅配カード DeliveryRoute",
    "topicTag": "構造体 + コンベア最短ルート",
    "kurumiIntro": "配達記録の構造体 `DeliveryPlan` に「スイッチの座標までの歩数」と「コンベアに乗る歩数」を入れて、制限ティック以内に2つの角を越えてゴールしよう！",
    "goalSummary": "DeliveryPlan のメソッドでスイッチを踏み、コンベアで8ティック以内に (5, 3) へ",
    "bookSectionTitle": "5.1 & 5.3 構造体データとルート最適化",
    "bookSummary": "構造体にルートのパラメータをまとめることで、コンベアの押し出し効果を含めた移動計画をわかりやすく管理できます。",
    "bookKeyCode": "struct DeliveryPlan { leg1: i32, leg2: i32 }",
    "starterCode": "struct DeliveryPlan {\n    leg1: i32,\n    leg2: i32,\n}\n\nimpl DeliveryPlan {\n    fn execute(&self) {\n        step(self.leg1);\n        turn_right();\n        step(self.leg2);\n        turn_left();\n        step(2);\n    }\n}\n\nfn main() {\n    // (0,1)->(2,1)スイッチ->右折->(2,3)下コンベア! 地図に合わせて数値を選ぼう！\n    let plan = DeliveryPlan { leg1: 1, leg2: 1 };\n    plan.execute();\n} ",
    "solutionCode": "struct DeliveryPlan {\n    leg1: i32,\n    leg2: i32,\n}\n\nimpl DeliveryPlan {\n    fn execute(&self) {\n        step(self.leg1);\n        turn_right();\n        step(self.leg2);\n        turn_left();\n        step(2);\n    }\n}\n\nfn main() {\n    let plan = DeliveryPlan { leg1: 2, leg2: 1 };\n    plan.execute();\n}",
    "quickChips": [
      {
        "label": "DeliveryPlan { leg1: 2, leg2: 1 }",
        "insert": "DeliveryPlan { leg1: 2, leg2: 1 }"
      }
    ],
    "hints": [
      "東に2歩進むと (2,1) のスイッチを踏みつつ右折できるよ。",
      "南に1歩で (2,2) の南向きコンベアに乗って (2,3) へ押し出されるよ！",
      "左折して step(2); とすると (3,3) の東コンベア→(4,3)→(5,3) のゴールに届くよ！ let plan = DeliveryPlan { leg1: 2, leg2: 1 };"
    ],
    "worldSetup": {
      "width": 6,
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
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 5,
          "y": 4
        }
      ],
      "botStart": {
        "x": 0,
        "y": 1,
        "dir": 0
      },
      "goal": {
        "x": 5,
        "y": 3
      },
      "switches": [
        {
          "x": 2,
          "y": 1
        }
      ],
      "gates": [
        {
          "x": 4,
          "y": 3,
          "openTicks": 1,
          "closedTicks": 1,
          "linkedSwitch": {
            "x": 2,
            "y": 1
          }
        }
      ],
      "conveyors": [
        {
          "x": 2,
          "y": 2,
          "dir": 1
        },
        {
          "x": 3,
          "y": 3,
          "dir": 0
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "requireAllSwitches": true,
      "maxTicks": 8
    },
    "parTicks": 8
  },
  {
    "displayId": "5-12",
    "id": "c8c5352e-5e91-522d-bc7f-0b113b345d01",
    "index": 132,
    "chapter": 5,
    "chapterTitle": "第5章 構造体を使用して関係のあるデータを構造化する",
    "stageKind": "puzzle",
    "title": "5-12. コア運搬構造体 Carrier の空間ルール実践",
    "topicTag": "構造体 + コア空間納品",
    "kurumiIntro": "検査台 `&T` と強化台 `&mut` が別々のマスにあるよ！構造体 `CoreTruck` に積載パワーを持たせて、現地で検査→強化→納品の順にこなそう！",
    "goalSummary": "検査・強化・納品を決まった台で行い、パワー⚡4以上＋ゴール (5, 2) へ",
    "bookSectionTitle": "5.2 & 5.3 現場手順を表す構造体メソッド",
    "bookSummary": "検査台では `&core`、強化台では `&mut core`、納品台では所有権を移す `deliver(core)` を使う手順を綺麗に組み立てましょう。",
    "bookKeyCode": "scan(&core); boost(&mut core); deliver(core);",
    "starterCode": "struct Mission {\n    scans: i32,\n}\n\nimpl Mission {\n    fn new() -> Mission {\n        Mission { scans: 0 }\n    }\n    fn run(&mut self) {\n        // コアの位置(1,1)まで歩こう\n        step(1);\n        let mut core = grab_core();\n        // (2,1)検査台へ進んで scan(&core)、次に(3,1)強化台へ進んで boost(&mut core)しよう！\n        step(3);\n        turn_right();\n        step(1);\n        deliver(core);\n    }\n}\n\nfn main() {\n    let mut m = Mission::new();\n    m.run();\n}",
    "solutionCode": "struct Mission {\n    scans: i32,\n}\n\nimpl Mission {\n    fn new() -> Mission {\n        Mission { scans: 0 }\n    }\n    fn run(&mut self) {\n        step(1);\n        let mut core = grab_core();\n        step(1);\n        scan(&core);\n        self.scans += 1;\n        step(1);\n        boost(&mut core);\n        step(2);\n        turn_right();\n        step(1);\n        deliver(core);\n    }\n}\n\nfn main() {\n    let mut m = Mission::new();\n    m.run();\n}",
    "quickChips": [
      {
        "label": "scan(&core);",
        "insert": "scan(&core);\n        "
      },
      {
        "label": "boost(&mut core);",
        "insert": "boost(&mut core);\n        "
      }
    ],
    "hints": [
      "このステージは空間ルールが有効だよ！(1,1)で拾い、(2,1)で scan(&core)、(3,1)で boost(&mut core) しよう！",
      "boost したあと (5,1) で右折し (5,2) の納品台へ進んで deliver(core) しよう！",
      "step(1); scan(&core); step(1); boost(&mut core); step(2); turn_right(); step(1); deliver(core);"
    ],
    "worldSetup": {
      "width": 6,
      "height": 4,
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
          "x": 0,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
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
        "x": 5,
        "y": 2
      },
      "cores": [
        {
          "id": "c1",
          "x": 1,
          "y": 1,
          "power": 2,
          "label": "輸送コア"
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
          "x": 5,
          "y": 2
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
    "parTicks": 12
  },
  {
    "displayId": "5-13",
    "id": "192b0b47-cbdf-57df-9e79-5b6b9661e700",
    "index": 133,
    "chapter": 5,
    "chapterTitle": "第5章 構造体を使用して関係のあるデータを構造化する",
    "title": "5-13. &mut self で構造体自身をレベルアップ",
    "topicTag": "impl / &mut self",
    "kurumiIntro": "メソッドの中で構造体のデータを書き換えたいときは `&mut self` を使うよ！`booster.charge(2);` を呼んでパワーを強化しよう。",
    "goalSummary": "&mut self メソッド charge(2) で⚡4にし、金庫＋ゴールへ",
    "bookSectionTitle": "5.3 自身を書き換える &mut self メソッド",
    "bookSummary": "メソッドの最初の引数を `&mut self` にすると、インスタンス自身のフィールドを書き換えられます。呼び出す変数にも `let mut` が必要です。",
    "bookKeyCode": "impl Booster {\n    fn charge(&mut self, v: i32) { self.power += v; }\n}",
    "starterCode": "struct Booster {\n    power: i32,\n}\n\nimpl Booster {\n    fn charge(&mut self, v: i32) {\n        self.power += v;\n    }\n}\n\nfn main() {\n    let mut b = Booster { power: 2 };\n    // b.charge(2); を呼んでパワーを 4 にしよう！\n    \n    add_vault(b.power);\n    step(b.power);\n}",
    "solutionCode": "struct Booster {\n    power: i32,\n}\n\nimpl Booster {\n    fn charge(&mut self, v: i32) {\n        self.power += v;\n    }\n}\n\nfn main() {\n    let mut b = Booster { power: 2 };\n    b.charge(2);\n    add_vault(b.power);\n    step(b.power);\n}",
    "quickChips": [
      {
        "label": "b.charge(2);",
        "insert": "b.charge(2);\n    "
      }
    ],
    "hints": [
      "b.power は最初 2 だよ。target は⚡4 かつゴールは (4, 1) だから +2 増やしたいね！",
      "b.charge(2); を呼び出そう！",
      "let mut b = Booster { power: 2 };\nb.charge(2);"
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
    "displayId": "5-14",
    "id": "054630ab-1a53-53e5-8f0e-62559507dd13",
    "index": 134,
    "chapter": 5,
    "chapterTitle": "第5章 構造体を使用して関係のあるデータを構造化する",
    "stageKind": "puzzle",
    "title": "5-14. 自律センサー搭載 Rover 構造体",
    "topicTag": "構造体 + 左手法迷路",
    "kurumiIntro": "構造体 `Rover` にステップカウンタを持たせて、右折・左折・前進を決めるメソッドを作ろう！L字やU字の迷路も構造体メソッドだけで抜けられるよ。",
    "goalSummary": "Rover::solve() で迷路を進み、歩数ログを金庫⚡5に入れてゴールへ",
    "bookSectionTitle": "5.3 & 5.5 自律制御メソッドを持つ構造体",
    "bookSummary": "構造体自身が自分の状態（歩数やエネルギーなど）を更新しながらセンサーで進路を選ぶ設計です。",
    "bookKeyCode": "fn solve(&mut self) { while !at_goal() { ... } }",
    "starterCode": "struct Rover {\n    moves: i32,\n}\n\nimpl Rover {\n    fn new() -> Rover {\n        Rover { moves: 0 }\n    }\n    fn solve(&mut self) {\n        while !at_goal() {\n            if !is_wall_ahead() {\n                step();\n                self.moves += 1;\n            } else {\n                turn_right();\n            }\n        }\n        // スイッチと歩数分の金庫を満たそう（必要な⚡は5だよ）\n        add_vault(self.moves);\n    }\n}\n\nfn main() {\n    let mut r = Rover::new();\n    r.solve();\n}",
    "solutionCode": "struct Rover {\n    moves: i32,\n}\n\nimpl Rover {\n    fn new() -> Rover {\n        Rover { moves: 0 }\n    }\n    fn solve(&mut self) {\n        while !at_goal() {\n            if !is_wall_left() {\n                turn_left();\n                step();\n                self.moves += 1;\n            } else if !is_wall_ahead() {\n                step();\n                self.moves += 1;\n            } else {\n                turn_right();\n            }\n        }\n        add_vault(self.moves);\n    }\n}\n\nfn main() {\n    let mut r = Rover::new();\n    r.solve();\n}",
    "quickChips": [
      {
        "label": "if !is_wall_left()",
        "insert": "if !is_wall_left() {\n                turn_left();\n                step();\n                self.moves += 1;\n            } else "
      }
    ],
    "hints": [
      "今のロジックだと右折しかできなくて、途中で左に曲がれないよ！",
      "!is_wall_left() のときに左折して 1 歩進む「左手法」を追加してみよう。",
      "if !is_wall_left() { turn_left(); step(); self.moves += 1; } else if !is_wall_ahead() { step(); self.moves += 1; } else { turn_right(); }"
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
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
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
          "x": 0,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        }
      ],
      "botStart": {
        "x": 0,
        "y": 2,
        "dir": 0
      },
      "goal": {
        "x": 3,
        "y": 1
      },
      "vault": {
        "x": 1,
        "y": 0,
        "initial": 0,
        "target": 4
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "vaultTarget": 4
    },
    "parTicks": 8
  },
  {
    "displayId": "5-15",
    "id": "15fbf14e-4902-5a68-b725-e98586b19c62",
    "index": 135,
    "chapter": 5,
    "chapterTitle": "第5章 構造体を使用して関係のあるデータを構造化する",
    "title": "5-15. 第5章まとめ：工房ロボ設計図 impl 実践",
    "topicTag": "第5章 総合実践",
    "kurumiIntro": "第5章のまとめだよ！構造体 `WorkshopBot` に `new`、`boost_vault(&mut self)`、`drive(&self)` のメソッドを揃えて、金庫＋スイッチ連動ゲートを突破しよう！",
    "goalSummary": "WorkshopBot メソッドを組み合わせて金庫⚡3＋ゴール (4, 1) へ",
    "bookSectionTitle": "第5章まとめ — struct と impl の実践設計",
    "bookSummary": "データ（`struct`）と操作（`impl`）を1つの設計図にまとめることで、見通しの良いロボット制御モジュールを作れます。",
    "bookKeyCode": "let mut bot = WorkshopBot::new(1);\nbot.boost_vault(3);\nbot.drive(4);",
    "starterCode": "struct WorkshopBot {\n    power: i32,\n}\n\nimpl WorkshopBot {\n    fn new(p: i32) -> WorkshopBot {\n        WorkshopBot { power: p }\n    }\n    fn boost_vault(&mut self, add: i32) {\n        self.power += add;\n        add_vault(self.power);\n    }\n    fn drive(&self, steps: i32) {\n        step(steps);\n    }\n}\n\nfn main() {\n    let mut bot = WorkshopBot::new(1);\n    // 金庫目標は⚡3！まず boost_vault(2) を呼んでから、4歩進もう！\n    \n}",
    "solutionCode": "struct WorkshopBot {\n    power: i32,\n}\n\nimpl WorkshopBot {\n    fn new(p: i32) -> WorkshopBot {\n        WorkshopBot { power: p }\n    }\n    fn boost_vault(&mut self, add: i32) {\n        self.power += add;\n        add_vault(self.power);\n    }\n    fn drive(&self, steps: i32) {\n        step(steps);\n    }\n}\n\nfn main() {\n    let mut bot = WorkshopBot::new(1);\n    bot.boost_vault(2);\n    bot.drive(4);\n}",
    "quickChips": [
      {
        "label": "bot.boost_vault(2);",
        "insert": "bot.boost_vault(2);\n    "
      },
      {
        "label": "bot.drive(4);",
        "insert": "bot.drive(4);\n    "
      }
    ],
    "hints": [
      "初期 power が 1 だから、boost_vault(2) を呼ぶと power が 3 になって金庫に 3 入るよ！",
      "その後 bot.drive(4); でスイッチ(2, 1)を踏みつつゲート(3, 1)を通ってゴール(4, 1)へ！",
      "bot.boost_vault(2);\nbot.drive(4);"
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
        "target": 3
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "vaultTarget": 3
    },
    "parTicks": 5
  },
  {
    "displayId": "5-16",
    "id": "aa57e89b-520e-570f-8ed0-3dde87e472b0",
    "index": 136,
    "chapter": 5,
    "chapterTitle": "第5章 構造体を使用して関係のあるデータを構造化する",
    "stageKind": "challenge",
    "title": "5-16. 第5章挑戦：完璧なからくり配達設計図",
    "topicTag": "第5章 最終チャレンジ",
    "kurumiIntro": "第5章の最終パズル！2箇所のスイッチを踏み、コアの検査＆強化を済ませ、金庫⚡6を満たしながら巡回スパークをくぐり抜けてゴールへ届けてみせよう！",
    "goalSummary": "構造体設計で全スイッチ・検査・強化納品(⚡5+)・金庫⚡6を達成",
    "bookSectionTitle": "第5章まとめ — 状態・センサー・ルール統合構造体",
    "bookSummary": "必要な手順をメソッドに整理し、危険物をセンサーで避けつつ空間上の各ステーションを順番に巡る設計の完成です。",
    "bookKeyCode": "impl MasterBot { fn complete(&mut self) { ... } }",
    "starterCode": "struct MasterBot {\n    vault_charge: i32,\n}\n\nimpl MasterBot {\n    fn new(v: i32) -> MasterBot {\n        MasterBot { vault_charge: v }\n    }\n    fn safe_step(&self, n: i32) {\n        for _ in 0..n {\n            while is_spark_ahead() || !is_gate_open() {\n                wait_tick(1);\n            }\n            step();\n        }\n    }\n    fn complete(&self) {\n        add_vault(self.vault_charge);\n        // コア(1,1)→検査台(2,1)→スイッチ・強化台(4,1)→納品台(5,3)\n        self.safe_step(1);\n    }\n}\n\nfn main() {\n    let mb = MasterBot::new(6);\n    mb.complete();\n}",
    "solutionCode": "struct MasterBot {\n    vault_charge: i32,\n}\n\nimpl MasterBot {\n    fn new(v: i32) -> MasterBot {\n        MasterBot { vault_charge: v }\n    }\n    fn safe_step(&self, n: i32) {\n        for _ in 0..n {\n            while is_spark_ahead() || !is_gate_open() {\n                wait_tick(1);\n            }\n            step();\n        }\n    }\n    fn complete(&self) {\n        add_vault(self.vault_charge);\n        self.safe_step(1);\n        let mut core = grab_core();\n        self.safe_step(1);\n        scan(&core);\n        self.safe_step(2);\n        boost(&mut core);\n        self.safe_step(1);\n        turn_right();\n        self.safe_step(2);\n        deliver(core);\n    }\n}\n\nfn main() {\n    let mb = MasterBot::new(6);\n    mb.complete();\n}",
    "quickChips": [
      {
        "label": "scan(&core);",
        "insert": "scan(&core);\n        "
      },
      {
        "label": "boost(&mut core);",
        "insert": "boost(&mut core);\n        "
      },
      {
        "label": "deliver(core);",
        "insert": "deliver(core);\n        "
      }
    ],
    "hints": [
      "上の廊下：(1,1)で grab_core() → (2,1)で scan(&core) → (3,1)はスパーク横断 → (4,1)が強化台兼スイッチだから boost(&mut core)！",
      "そのまま (5,1) まで東に進んで右折し、下のゲート (5,2) を抜けて (5,3) で deliver(core) しよう！",
      "self.safe_step(1); grab_core -> safe_step(1); scan -> safe_step(2); boost -> safe_step(1); turn_right(); safe_step(2); deliver(core);"
    ],
    "worldSetup": {
      "width": 6,
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
          "x": 4,
          "y": 2
        },
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 5,
          "y": 4
        }
      ],
      "botStart": {
        "x": 0,
        "y": 1,
        "dir": 0
      },
      "goal": {
        "x": 5,
        "y": 3
      },
      "cores": [
        {
          "id": "c1",
          "x": 1,
          "y": 1,
          "power": 3,
          "label": "設計コア"
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
          "x": 4,
          "y": 1
        }
      ],
      "switches": [
        {
          "x": 4,
          "y": 1
        }
      ],
      "gates": [
        {
          "x": 5,
          "y": 2,
          "openTicks": 1,
          "closedTicks": 1,
          "linkedSwitch": {
            "x": 4,
            "y": 1
          }
        }
      ],
      "deliveries": [
        {
          "x": 5,
          "y": 3
        }
      ],
      "vault": {
        "x": 1,
        "y": 0,
        "initial": 0,
        "target": 6
      },
      "sparks": [
        {
          "id": "sp1",
          "path": [
            {
              "x": 3,
              "y": 0
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
              "y": 2
            },
            {
              "x": 3,
              "y": 1
            }
          ],
          "initialIndex": 0
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "deliverCores": 1,
      "minCorePower": 5,
      "scanCount": 1,
      "vaultTarget": 6,
      "requireAllSwitches": true,
      "requireSpatialCoreRules": true
    },
    "parTicks": 17
  }
];
