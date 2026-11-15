import { StageDefinition } from '../types/game';

export const CHAPTER_11_STAGES: StageDefinition[] = [
  {
    "displayId": "11-1",
    "id": "9fd2a72f-a235-5928-849d-4fe8c447f483",
    "index": 161,
    "chapter": 11,
    "chapterTitle": "第11章 モジュールとパス",
    "title": "11-1. mod と pub による公開設定",
    "topicTag": "mod / pub 可視性",
    "kurumiIntro": "工房の部品は `mod motor { ... }` に整理されているよ。でも外から呼ぶには `pub` を付けて公開してあげる必要があるんだ！",
    "goalSummary": "motor モジュールの関数を pub にしてゴール (3, 1) へ",
    "bookSectionTitle": "11.2 & 11.3 スコープとプライバシーの制御",
    "bookSummary": "Rustではモジュール `mod` の中身はデフォルトで非公開（プライベート）です。外から使いたい関数や構造体には `pub` キーワードを付けます。",
    "bookKeyCode": "mod motor {\n    pub fn go() { step(3); }\n}",
    "starterCode": "mod motor {\n    // 外から呼べるように pub を付けよう！\n    fn go() {\n        step(3);\n    }\n}\n\nfn main() {\n    motor::go();\n}",
    "solutionCode": "mod motor {\n    pub fn go() {\n        step(3);\n    }\n}\n\nfn main() {\n    motor::go();\n}",
    "quickChips": [
      {
        "label": "pub ",
        "insert": "pub "
      }
    ],
    "hints": [
      "このまま実行すると「関数 motor::go は非公開（プライベート）です」とエラーが出るよ！",
      "3行目の `fn go()` を `pub fn go()` に変えよう。",
      "pub fn go() {"
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
    "displayId": "11-2",
    "id": "5aba927d-c321-5c48-947d-6b2f02470cd8",
    "index": 162,
    "chapter": 11,
    "chapterTitle": "第11章 モジュールとパス",
    "title": "11-2. 入れ子モジュール mod とフルパス呼び出し",
    "topicTag": "ネスト mod / :: パス",
    "kurumiIntro": "`mod atelier { pub mod wheel { pub fn roll() ... } }` みたいにモジュールの中にさらにモジュールを入れ子にできるよ！2つの経路関数をどちらも公開しよう。",
    "goalSummary": "入れ子モジュールの roll() と turn() を呼んで (2, 3) へ",
    "bookSectionTitle": "11.3 モジュールツリーで要素を指し示すパス",
    "bookSummary": "モジュールが何階層も分かれているときは `atelier::wheel::roll()` のように `::` でつないで辿ります。",
    "bookKeyCode": "mod atelier {\n    pub mod wheel { pub fn roll() { step(2); } }\n}",
    "starterCode": "mod atelier {\n    pub mod wheel {\n        // 両方 pub にして外から呼べるようにしよう！\n        fn roll() {\n            step(2);\n        }\n        pub fn turn() {\n            turn_right();\n        }\n    }\n}\n\nfn main() {\n    atelier::wheel::roll();\n    atelier::wheel::turn();\n    atelier::wheel::roll();\n}",
    "solutionCode": "mod atelier {\n    pub mod wheel {\n        pub fn roll() {\n            step(2);\n        }\n        pub fn turn() {\n            turn_right();\n        }\n    }\n}\n\nfn main() {\n    atelier::wheel::roll();\n    atelier::wheel::turn();\n    atelier::wheel::roll();\n}",
    "quickChips": [
      {
        "label": "pub fn roll()",
        "insert": "pub fn roll()"
      }
    ],
    "hints": [
      "turn は pub になっているけれど、roll がまだ非公開だよ！",
      "fn roll() を pub fn roll() に書き換えよう。",
      "pub fn roll() {"
    ],
    "worldSetup": {
      "width": 4,
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
          "x": 0,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 1,
          "y": 3
        }
      ],
      "botStart": {
        "x": 0,
        "y": 1,
        "dir": 0
      },
      "goal": {
        "x": 2,
        "y": 3
      }
    },
    "victoryCondition": {
      "reachGoal": true
    },
    "parTicks": 5
  },
  {
    "displayId": "11-3",
    "id": "73562f8a-40ac-509e-8445-4d6ccc8298b4",
    "index": 163,
    "chapter": 11,
    "chapterTitle": "第11章 モジュールとパス",
    "stageKind": "puzzle",
    "title": "11-3. 非公開モジュールを開放して迷路突破",
    "topicTag": "入れ子 mod + pub 公開",
    "kurumiIntro": "工房の案内システム `mod nav { mod sensor { ... } }` の中身が全部プライベートで呼べなくなってるよ！`pub` を適切に付けてセンサー移動を動かそう。",
    "goalSummary": "入れ子のモジュールを公開して迷路のゴール (4, 3) へ到達",
    "bookSectionTitle": "11.2 & 11.3 階層ごとの pub 可視性管理",
    "bookSummary": "内側の関数に `pub` を付けるだけでなく、親モジュール（例：`pub mod sensor`）自体も外に見せたい場合は `pub` が必要です。",
    "bookKeyCode": "mod nav { pub mod sensor { pub fn safe_step() { ... } } }",
    "starterCode": "mod nav {\n    pub mod sensor {\n        // ↓ 外から呼べるように pub を付けよう！\n        fn go_safe() {\n            while is_spark_ahead() || !is_gate_open() {\n                wait_tick(1);\n            }\n            step();\n        }\n    }\n}\n\nuse nav::sensor::go_safe;\n\nfn main() {\n    for _ in 0..4 {\n        go_safe();\n    }\n    turn_right();\n    for _ in 0..2 {\n        go_safe();\n    }\n}",
    "solutionCode": "mod nav {\n    pub mod sensor {\n        pub fn go_safe() {\n            while is_spark_ahead() || !is_gate_open() {\n                wait_tick(1);\n            }\n            step();\n        }\n    }\n}\n\nuse nav::sensor::go_safe;\n\nfn main() {\n    for _ in 0..4 {\n        go_safe();\n    }\n    turn_right();\n    for _ in 0..2 {\n        go_safe();\n    }\n}",
    "quickChips": [
      {
        "label": "pub fn go_safe()",
        "insert": "pub fn go_safe()"
      }
    ],
    "hints": [
      "nav::sensor::go_safe が非公開になっているためコンパイルエラーになるよ！",
      "fn go_safe() の前に `pub` を付ければ use と呼び出しが通って、スパークとスイッチゲートを越えて (4, 3) へ着くよ！",
      "pub fn go_safe() {"
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
          "x": 5,
          "y": 1
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 5,
          "y": 3
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
        "x": 4,
        "y": 3
      },
      "switches": [
        {
          "x": 3,
          "y": 1
        }
      ],
      "gates": [
        {
          "x": 4,
          "y": 2,
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
    "parTicks": 10
  },
  {
    "displayId": "11-4",
    "id": "116ceadb-8d15-54f0-ba3f-88b3f67ea44e",
    "index": 164,
    "chapter": 11,
    "chapterTitle": "第11章 モジュールとパス",
    "stageKind": "puzzle",
    "title": "11-4. 迷路ソルバーモジュール maze_lib",
    "topicTag": "アルゴリズム mod 分離",
    "kurumiIntro": "迷路探索の仕組みを `mod maze_lib` に隔離して、メイン関数からはたった1行 `use maze_lib::escape; escape();` だけで抜け出せる美しいコードを作ろう！",
    "goalSummary": "maze_lib::escape() を公開・インポートして迷路を突破しよう",
    "bookSectionTitle": "11.2 再利用可能なアルゴリズムをモジュール化",
    "bookSummary": "汎用的な左手法迷路ソルバーなどをモジュールにまとめておけば、呼び出し元の `main` が劇的に簡潔になります。",
    "bookKeyCode": "use maze_lib::escape;\nescape();",
    "starterCode": "mod maze_lib {\n    // escape() に pub を付けよう！\n    fn escape() {\n        while !at_goal() {\n            if !is_wall_left() {\n                turn_left();\n                while is_spark_ahead() { wait_tick(1); }\n                step();\n            } else if !is_wall_ahead() {\n                while is_spark_ahead() { wait_tick(1); }\n                step();\n            } else {\n                turn_right();\n            }\n        }\n    }\n}\n\nuse maze_lib::escape;\n\nfn main() {\n    escape();\n}",
    "solutionCode": "mod maze_lib {\n    pub fn escape() {\n        while !at_goal() {\n            if !is_wall_left() {\n                turn_left();\n                while is_spark_ahead() { wait_tick(1); }\n                step();\n            } else if !is_wall_ahead() {\n                while is_spark_ahead() { wait_tick(1); }\n                step();\n            } else {\n                turn_right();\n            }\n        }\n    }\n}\n\nuse maze_lib::escape;\n\nfn main() {\n    escape();\n}",
    "quickChips": [
      {
        "label": "pub fn escape()",
        "insert": "pub fn escape()"
      }
    ],
    "hints": [
      "mod maze_lib の中の escape() が非公開のままだと呼び出せないよ！",
      "外から呼ぶ `escape()` の前に `pub` を付けよう。",
      "pub fn escape() {"
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
        "x": 2,
        "y": 1
      },
      "sparks": [
        {
          "id": "sp1",
          "path": [
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
            }
          ],
          "initialIndex": 0
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true
    },
    "parTicks": 10
  },
  {
    "displayId": "11-5",
    "id": "0908821d-5296-51dc-9388-cc0bd3f783f5",
    "index": 165,
    "chapter": 11,
    "chapterTitle": "第11章 モジュールとパス",
    "stageKind": "puzzle",
    "title": "11-5. ダイヤル解錠モジュール security",
    "topicTag": "mod + ダイヤル解錠",
    "kurumiIntro": "金庫室のカギを開ける `mod security` が用意されているよ。ダイヤル解錠関数を公開して呼んだあと、門を通ってゴールへ進もう！",
    "goalSummary": "security::unlock() を公開・呼び出し、ダイヤル解錠＋金庫⚡3＋ゴールへ",
    "bookSectionTitle": "11.2 セキュリティ処理のカプセル化",
    "bookSummary": "ダイヤルの総当たりループのような少し複雑な処理も、モジュールに閉じ込めて `unlock()` として公開すれば安全に使えます。",
    "bookKeyCode": "security::unlock();",
    "starterCode": "mod security {\n    pub fn unlock() {\n        let mut d = 1;\n        loop {\n            match try_dial(d) {\n                Ordering::Less => d += 1,\n                Ordering::Greater => d -= 1,\n                Ordering::Equal => { break; },\n            }\n        }\n        add_vault(3);\n    }\n}\n\n// use security::unlock; を書いて main から呼ぼう！\n\nfn main() {\n    step(4);\n}",
    "solutionCode": "mod security {\n    pub fn unlock() {\n        let mut d = 1;\n        loop {\n            match try_dial(d) {\n                Ordering::Less => d += 1,\n                Ordering::Greater => d -= 1,\n                Ordering::Equal => { break; },\n            }\n        }\n        add_vault(3);\n    }\n}\n\nuse security::unlock;\n\nfn main() {\n    unlock();\n    step(4);\n}",
    "quickChips": [
      {
        "label": "use security::unlock;",
        "insert": "use security::unlock;\n"
      },
      {
        "label": "unlock();",
        "insert": "unlock();\n    "
      }
    ],
    "hints": [
      "mod security の中の unlock() はもう完成しているよ！",
      "`use security::unlock;` を宣言して、main() の最初に `unlock();` を呼ぼう！",
      "use security::unlock;\nfn main() { unlock(); step(4); }"
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
      "dial": {
        "secret": 5
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
      "dialSolved": true,
      "vaultTarget": 3,
      "requireAllSwitches": true
    },
    "parTicks": 11
  },
  {
    "displayId": "11-6",
    "id": "1fd4629d-d6fc-5324-87c3-2e3c62301d56",
    "index": 166,
    "chapter": 11,
    "chapterTitle": "第11章 モジュールとパス",
    "title": "11-6. 複数モジュールの連携と金庫操作",
    "topicTag": "複数 mod の使い分け",
    "kurumiIntro": "「金庫係 `mod bank`」と「移動係 `mod engine`」にモジュールを分けてみよう！それぞれの関数を公開して呼び出せば、責務がスッキリ分かれるよ。",
    "goalSummary": "bank::charge と engine::run を呼び金庫⚡3＋ゴールへ",
    "bookSectionTitle": "11.2 関連するコードをモジュールにグループ化する",
    "bookSummary": "機能ごとに `mod` を分けておくと、どこにどんな処理があるか一目で分かり、大きなプロジェクトでも迷いません。",
    "bookKeyCode": "bank::charge(3);\nengine::run(3);",
    "starterCode": "mod bank {\n    pub fn charge(n: i32) {\n        add_vault(n);\n    }\n}\n\nmod engine {\n    pub fn run(n: i32) {\n        step(n);\n    }\n}\n\nfn main() {\n    // bank::charge(3); と engine::run(3); を呼ぼう！\n    \n}",
    "solutionCode": "mod bank {\n    pub fn charge(n: i32) {\n        add_vault(n);\n    }\n}\n\nmod engine {\n    pub fn run(n: i32) {\n        step(n);\n    }\n}\n\nfn main() {\n    bank::charge(3);\n    engine::run(3);\n}",
    "quickChips": [
      {
        "label": "bank::charge(3);",
        "insert": "bank::charge(3);\n    "
      },
      {
        "label": "engine::run(3);",
        "insert": "engine::run(3);\n    "
      }
    ],
    "hints": [
      "bank と engine の中身はもう公開（pub）されているよ！",
      "main の中に bank::charge(3); と engine::run(3); を書こう。",
      "bank::charge(3);\nengine::run(3);"
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
    "displayId": "11-7",
    "id": "2f2642fd-792f-527a-bd05-f3802fca0a1f",
    "index": 167,
    "chapter": 11,
    "chapterTitle": "第11章 モジュールとパス",
    "title": "11-7. モジュール内の構造体公開パズル",
    "topicTag": "mod 内の struct と impl",
    "kurumiIntro": "モジュールの中の構造体にもメソッドを持たせられるよ！金庫にチャージしつつ、U字コースのゴールまで移動する部品を組み上げよう。",
    "goalSummary": "mod mech 内の関数を組み合わせてコア⚡1を納品＋ゴールへ",
    "bookSectionTitle": "11.3 構造体と関数をモジュールで包む",
    "bookSummary": "構造体や便利なヘルパー関数をモジュール内に整理し、外に公開する窓口だけを `pub` にすることで安全性を高められます。",
    "bookKeyCode": "mod mech {\n    pub fn deliver_core() { ... }\n}",
    "starterCode": "mod mech {\n    pub fn deliver_l(x: i32, y: i32) {\n        let c = grab_core();\n        step(x);\n        turn_right();\n        step(y);\n        deliver(c);\n    }\n}\n\nfn main() {\n    // ゴールは (3, 3) だよ！mech::deliver_l(3, 2) を呼ぼう\n    mech::deliver_l(1, 1);\n}",
    "solutionCode": "mod mech {\n    pub fn deliver_l(x: i32, y: i32) {\n        let c = grab_core();\n        step(x);\n        turn_right();\n        step(y);\n        deliver(c);\n    }\n}\n\nfn main() {\n    mech::deliver_l(3, 2);\n}",
    "quickChips": [
      {
        "label": "mech::deliver_l(3, 2);",
        "insert": "mech::deliver_l(3, 2);"
      }
    ],
    "hints": [
      "今は mech::deliver_l(1, 1) を呼んでいるから壁や途中に止まっちゃうよ！",
      "(0, 1) から東へ3、南へ2進めるよう `mech::deliver_l(3, 2);` に直そう。",
      "mech::deliver_l(3, 2);"
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
      "cores": [
        {
          "id": "c1",
          "x": 0,
          "y": 1,
          "power": 2,
          "label": "配送コア"
        }
      ],
      "deliveries": [
        {
          "x": 3,
          "y": 3
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "deliverCores": 1
    },
    "parTicks": 7
  },
  {
    "displayId": "11-8",
    "id": "139e5770-fd95-505e-8019-e90c224abd63",
    "index": 168,
    "chapter": 11,
    "chapterTitle": "第11章 モジュールとパス",
    "title": "11-8. use キーワードでパスをスッキリ",
    "topicTag": "use パス導入",
    "kurumiIntro": "長いモジュール名も `use kobo::drive;` でショートカットを作ればスッキリ呼び出せるよ！",
    "goalSummary": "use を使って kobo::drive を呼び出しゴールへ進もう",
    "bookSectionTitle": "11.4 パスを指し示すための use キーワード",
    "bookSummary": "`use モジュール::項目;` を書いておくと、それ以降は短い名前だけで呼び出せるようになります。",
    "bookKeyCode": "use kobo::drive;\ndrive();",
    "starterCode": "mod kobo {\n    pub fn drive() {\n        step(3);\n    }\n}\n\n// ここに use kobo::drive; を書いてみよう！\n\nfn main() {\n    drive();\n}",
    "solutionCode": "mod kobo {\n    pub fn drive() {\n        step(3);\n    }\n}\n\nuse kobo::drive;\n\nfn main() {\n    drive();\n}",
    "quickChips": [
      {
        "label": "use kobo::drive;",
        "insert": "use kobo::drive;\n"
      }
    ],
    "hints": [
      "mainの中で drive(); を呼んでいるけど、どのモジュールの drive かまだ分からない状態だよ。",
      "fn main() の上に `use kobo::drive;` を追加しよう！",
      "use kobo::drive;\n\nfn main() {\n    drive();\n}"
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
    "displayId": "11-9",
    "id": "2bb92ccf-f7f1-5c9b-b56c-4cbc9775004a",
    "index": 169,
    "chapter": 11,
    "chapterTitle": "第11章 モジュールとパス",
    "title": "11-9. 複数の use でショートカット整理",
    "topicTag": "複数 use インポート",
    "kurumiIntro": "2つの別々のモジュールからそれぞれ関数を `use` で呼び込んで、スッキリ組み合わせよう！",
    "goalSummary": "use で charge と go を導入して金庫⚡3＋ゴール (3, 1) へ",
    "bookSectionTitle": "11.4 慣例的な use パスの書き方",
    "bookSummary": "よく使う関数やモジュールを先頭で `use` しておけば、コード本体が簡潔になって読みやすくなります。",
    "bookKeyCode": "use power::charge;\nuse motion::go;",
    "starterCode": "mod power {\n    pub fn charge() { add_vault(3); }\n}\n\nmod motion {\n    pub fn go() { step(3); }\n}\n\nuse power::charge;\n// motion::go も use で取り込もう！\n\nfn main() {\n    charge();\n    go();\n}",
    "solutionCode": "mod power {\n    pub fn charge() { add_vault(3); }\n}\n\nmod motion {\n    pub fn go() { step(3); }\n}\n\nuse power::charge;\nuse motion::go;\n\nfn main() {\n    charge();\n    go();\n}",
    "quickChips": [
      {
        "label": "use motion::go;",
        "insert": "use motion::go;\n"
      }
    ],
    "hints": [
      "main で go(); を呼んでいるけど、`use motion::go;` がまだ書かれていないよ！",
      "use power::charge; の次の行に `use motion::go;` を追加しよう！",
      "use power::charge;\nuse motion::go;"
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
    "displayId": "11-10",
    "id": "7273cc50-a9a7-5c71-a468-708caf117875",
    "index": 170,
    "chapter": 11,
    "chapterTitle": "第11章 モジュールとパス",
    "stageKind": "puzzle",
    "title": "11-10. 専門モジュール分業でコア納品",
    "topicTag": "複数 mod + use 分業",
    "kurumiIntro": "「金庫担当 `mod treasury`」と「輸送担当 `mod cargo`」を分けて、それぞれの関数を `use` で組み合わせてコア納品と金庫目標を両方達成しよう！",
    "goalSummary": "2つのモジュールを呼び出し、金庫⚡4とコア⚡4以上納品を達成",
    "bookSectionTitle": "11.4 異なるモジュールから機能を集める use",
    "bookSummary": "役割ごとにモジュールを切り出し、`main` で `use` して流れを組み立てると、設計の見通しがとても良くなります。",
    "bookKeyCode": "use treasury::store;\nuse cargo::deliver_l;",
    "starterCode": "mod treasury {\n    pub fn store(v: i32) {\n        add_vault(v);\n    }\n}\n\nmod cargo {\n    pub fn carry() {\n        step(1);\n        let mut c = grab_core();\n        step(1);\n        boost(&mut c);\n        step(2);\n        deliver(c);\n    }\n}\n\nuse treasury::store;\n// cargo::carry も use で取り込もう！\n\nfn main() {\n    store(4);\n    carry();\n}",
    "solutionCode": "mod treasury {\n    pub fn store(v: i32) {\n        add_vault(v);\n    }\n}\n\nmod cargo {\n    pub fn carry() {\n        step(1);\n        let mut c = grab_core();\n        step(1);\n        boost(&mut c);\n        step(2);\n        deliver(c);\n    }\n}\n\nuse treasury::store;\nuse cargo::carry;\n\nfn main() {\n    store(4);\n    carry();\n}",
    "quickChips": [
      {
        "label": "use cargo::carry;",
        "insert": "use cargo::carry;\n"
      }
    ],
    "hints": [
      "main で `carry()` を呼んでいるけれど、まだ `use cargo::carry;` が書かれていないよ！",
      "use treasury::store; の次の行に `use cargo::carry;` を書き足そう。",
      "use cargo::carry;"
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
          "label": "分業コア"
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
    "parTicks": 9
  },
  {
    "displayId": "11-11",
    "id": "0ac079f4-88b5-5189-bdc4-4d3a4e098701",
    "index": 171,
    "chapter": 11,
    "chapterTitle": "第11章 モジュールとパス",
    "stageKind": "puzzle",
    "title": "11-11. ベルト制御モジュールと金庫連動",
    "topicTag": "mod + コンベア時短",
    "kurumiIntro": "ベルトコンベアに乗って最短ルートを走りつつ、途中の金庫チャージもモジュールの関数から呼んで、7ティック以内の高速配達を決めよう！",
    "goalSummary": "turbo モジュールを使って金庫⚡4・全スイッチ・7ティック以内ゴールを達成",
    "bookSectionTitle": "11.3 & 11.4 高速輸送モジュールの切り出し",
    "bookSummary": "充電と移動のモジュールを整えて呼び出すことで、コンベア区間の最短ステップを正確に走らせます。",
    "bookKeyCode": "turbo::boost_vault(4);\nturbo::dash();",
    "starterCode": "mod turbo {\n    pub fn boost_vault(n: i32) {\n        add_vault(n);\n    }\n    pub fn dash() {\n        // コンベア(1,1)が(2,1)スイッチへ運ぶよ。さらに進んで(5,1)へ！\n        step(1);\n    }\n}\n\nuse turbo::boost_vault;\nuse turbo::dash;\n\nfn main() {\n    boost_vault(4);\n    dash();\n}",
    "solutionCode": "mod turbo {\n    pub fn boost_vault(n: i32) {\n        add_vault(n);\n    }\n    pub fn dash() {\n        step(3);\n    }\n}\n\nuse turbo::boost_vault;\nuse turbo::dash;\n\nfn main() {\n    boost_vault(4);\n    dash();\n}",
    "quickChips": [
      {
        "label": "step(3);",
        "insert": "step(3);"
      }
    ],
    "hints": [
      "(1,1) と (3,1) がどちらも右向きコンベアだよ！",
      "step(1) で (1,1)→(2,1)スイッチ、step(2) で (3,1)→(4,1)スイッチ、step(3) で (5,1)ゴールに着くよ！",
      "dash() の中を `step(3);` に直そう！"
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
          "x": 2,
          "y": 1
        },
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
      "vaultTarget": 4,
      "requireAllSwitches": true,
      "maxTicks": 7
    },
    "parTicks": 5
  },
  {
    "displayId": "11-12",
    "id": "4e588275-2689-5c3b-adf5-77dad26fd8a3",
    "index": 172,
    "chapter": 11,
    "chapterTitle": "第11章 モジュールとパス",
    "title": "11-12. 同じ名前の衝突を避ける親モジュール use",
    "topicTag": "親モジュール名での区別",
    "kurumiIntro": "パン屋モジュールにも花屋モジュールにも同じ `send()` という名前の関数があるよ！そんなときは親モジュール名をつけて `bakery::send()` のように呼び分けよう。",
    "goalSummary": "bakery::send と florist::send を使い分けてゴール (4, 1) へ",
    "bookSectionTitle": "11.4 同名の型や関数を親モジュールで区別する",
    "bookSummary": "異なるモジュールに同じ名前の関数があるときは、親モジュール名を残して呼び出すことで名前の衝突を避けられます。",
    "bookKeyCode": "bakery::send();\nflorist::send();",
    "starterCode": "mod bakery {\n    pub fn send() {\n        println!(\"BREAD\");\n        step(2);\n    }\n}\n\nmod florist {\n    pub fn send() {\n        println!(\"FLOWER\");\n        step(2);\n    }\n}\n\nfn main() {\n    bakery::send();\n    // 次に florist::send(); を呼んで合計4歩＆両方出力しよう！\n    \n}",
    "solutionCode": "mod bakery {\n    pub fn send() {\n        println!(\"BREAD\");\n        step(2);\n    }\n}\n\nmod florist {\n    pub fn send() {\n        println!(\"FLOWER\");\n        step(2);\n    }\n}\n\nfn main() {\n    bakery::send();\n    florist::send();\n}",
    "quickChips": [
      {
        "label": "florist::send();",
        "insert": "florist::send();"
      }
    ],
    "hints": [
      "bakery::send() だけだと 2歩しか進めないし \"FLOWER\" が出力されないよ！",
      "main の最後に `florist::send();` を書こう。",
      "bakery::send();\nflorist::send();"
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
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "stdoutIncludes": [
        "BREAD",
        "FLOWER"
      ]
    },
    "parTicks": 6
  },
  {
    "displayId": "11-13",
    "id": "5b6edd0d-a1bc-5c03-8ff9-024a867d04f0",
    "index": 173,
    "chapter": 11,
    "chapterTitle": "第11章 モジュールとパス",
    "stageKind": "puzzle",
    "title": "11-13. 同名関数モジュールの衝突回避ナビ",
    "topicTag": "親モジュール区別::act()",
    "kurumiIntro": "パン屋モジュールと郵便屋モジュールの両方に `act()` 関数があるよ！同じ名前の関数を使い分けてスイッチ2つと合言葉2つをどちらもクリアしよう！",
    "goalSummary": "\"BREAD_OK\" と \"POST_OK\" を出力し、全スイッチを踏んで (5, 1) へ",
    "bookSectionTitle": "11.4 親モジュールを残して名前の衝突を回避",
    "bookSummary": "`bakery::act()` と `post::act()` のように親モジュールを付けて呼び分けることで、同名の関数を混乱なく使えます。",
    "bookKeyCode": "bakery::act();\npost::act();",
    "starterCode": "mod bakery {\n    pub fn act() {\n        println!(\"BREAD_OK\");\n        step(2);\n    }\n}\n\nmod post {\n    pub fn act() {\n        println!(\"POST_OK\");\n        step(3);\n    }\n}\n\nfn main() {\n    bakery::act();\n    // 次に post::act(); を呼んでスイッチ2とゴール(5, 1)へ！\n}",
    "solutionCode": "mod bakery {\n    pub fn act() {\n        println!(\"BREAD_OK\");\n        step(2);\n    }\n}\n\nmod post {\n    pub fn act() {\n        println!(\"POST_OK\");\n        step(3);\n    }\n}\n\nfn main() {\n    bakery::act();\n    post::act();\n}",
    "quickChips": [
      {
        "label": "post::act();",
        "insert": "post::act();"
      }
    ],
    "hints": [
      "bakery::act() は (0,1) から 2歩進んで (2,1) のコンベア? いえ、スイッチ(1,1)を通って(2,1)に着くよ！",
      "そのあと post::act() を呼べば (4,1) のスイッチを踏みつつゲート(3,1)を抜けて (5,1) に到達するよ！",
      "post::act();"
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
        "x": 5,
        "y": 1
      },
      "switches": [
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 4,
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
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "stdoutIncludes": [
        "BREAD_OK",
        "POST_OK"
      ],
      "requireAllSwitches": true
    },
    "parTicks": 8
  },
  {
    "displayId": "11-14",
    "id": "42360a9a-65e1-5548-b488-2805d64d5ed5",
    "index": 174,
    "chapter": 11,
    "chapterTitle": "第11章 モジュールとパス",
    "title": "11-14. 第11章まとめ：use とゲート制御モジュール",
    "topicTag": "第11章 総合実践",
    "kurumiIntro": "第11章の総仕上げ！工房の安全モジュール `safety` から `cross_gate` を `use` で取り込んで、2つの蒸気ゲートを越えた先のL字ゴールへ着こう！",
    "goalSummary": "use safety::cross_gate; でゲート2つを越えて (4, 3) へ",
    "bookSectionTitle": "第11章まとめ — mod・pub・use による整理",
    "bookSummary": "適切なモジュール分割と `pub` / `use` によって、見通しのよいRustプロジェクト構造を保てます。",
    "bookKeyCode": "use safety::cross_gate;\ncross_gate();",
    "starterCode": "mod safety {\n    pub fn cross_gate() {\n        if !is_gate_open() {\n            wait_tick(1);\n        }\n        step();\n    }\n}\n\n// use safety::cross_gate; を書いて、main を完成させよう！\n\nfn main() {\n    for _ in 0..4 {\n        cross_gate();\n    }\n    turn_right();\n    step(2);\n}",
    "solutionCode": "mod safety {\n    pub fn cross_gate() {\n        if !is_gate_open() {\n            wait_tick(1);\n        }\n        step();\n    }\n}\n\nuse safety::cross_gate;\n\nfn main() {\n    for _ in 0..4 {\n        cross_gate();\n    }\n    turn_right();\n    step(2);\n}",
    "quickChips": [
      {
        "label": "use safety::cross_gate;",
        "insert": "use safety::cross_gate;\n"
      }
    ],
    "hints": [
      "main の中ではもう cross_gate() を呼ぶループができているよ！",
      "fn main() の前に `use safety::cross_gate;` を1行書けばOK！",
      "use safety::cross_gate;"
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
          "x": 5,
          "y": 1
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 5,
          "y": 3
        }
      ],
      "botStart": {
        "x": 0,
        "y": 1,
        "dir": 0
      },
      "goal": {
        "x": 4,
        "y": 3
      },
      "gates": [
        {
          "x": 1,
          "y": 1,
          "openTicks": 2,
          "closedTicks": 2,
          "initialOffset": 2
        },
        {
          "x": 3,
          "y": 1,
          "openTicks": 2,
          "closedTicks": 2,
          "initialOffset": 0
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true
    },
    "parTicks": 8
  },
  {
    "displayId": "11-15",
    "id": "33c3ce56-0349-55bc-8a50-c15e47c87e4d",
    "index": 175,
    "chapter": 11,
    "chapterTitle": "第11章 モジュールとパス",
    "stageKind": "challenge",
    "title": "11-15. モジュール・パイプラインで全工程走破",
    "topicTag": "3モジュール連携チャレンジ",
    "kurumiIntro": "「合言葉・金庫 `mod auth`」「コア操作 `mod core_ops`」「移動制御 `mod pilot`」の3モジュールを統合して、スパークとスイッチを越えよう！",
    "goalSummary": "3モジュール連携で \"MODULE_CLEAR\"・金庫⚡5・コア⚡5+納品・ゴールへ",
    "bookSectionTitle": "11.4 複数サブシステムの連携",
    "bookSummary": "責務を明確に分けた3つのモジュールを `use` で呼び込み、安全確実にゴールまでのパイプラインを構築します。",
    "bookKeyCode": "auth::verify(); pilot::move_safe(2);",
    "starterCode": "mod auth {\n    pub fn verify() {\n        println!(\"MODULE_CLEAR\");\n        add_vault(5);\n    }\n}\n\nmod core_ops {\n    pub fn process() {\n        // コア(1,1)→検査(2,1)→強化(3,1)\n        let mut c = grab_core();\n        step(1);\n        scan(&c);\n        step(1);\n        boost(&mut c);\n        step(2);\n        deliver(c);\n    }\n}\n\nmod pilot {\n    pub fn go_to_core() {\n        while is_spark_ahead() { wait_tick(1); }\n        step(1);\n    }\n}\n\nfn main() {\n    // auth::verify(), pilot::go_to_core(), core_ops::process() を順に呼ぼう！\n    auth::verify();\n}",
    "solutionCode": "mod auth {\n    pub fn verify() {\n        println!(\"MODULE_CLEAR\");\n        add_vault(5);\n    }\n}\n\nmod core_ops {\n    pub fn process() {\n        let mut c = grab_core();\n        step(1);\n        scan(&c);\n        step(1);\n        boost(&mut c);\n        step(2);\n        deliver(c);\n    }\n}\n\nmod pilot {\n    pub fn go_to_core() {\n        while is_spark_ahead() { wait_tick(1); }\n        step(1);\n    }\n}\n\nfn main() {\n    auth::verify();\n    pilot::go_to_core();\n    core_ops::process();\n}",
    "quickChips": [
      {
        "label": "pilot::go_to_core();",
        "insert": "pilot::go_to_core();\n    "
      },
      {
        "label": "core_ops::process();",
        "insert": "core_ops::process();"
      }
    ],
    "hints": [
      "auth::verify() で合言葉と金庫⚡5が済むよ。次は (1,1) にあるコアまで `pilot::go_to_core();` で移動しよう！",
      "その後 `core_ops::process();` を呼ぶと、ピックアップ→検査(2,1)→強化兼スイッチ(3,1)→ゲート通過→納品(5,1)まで一気に完了するよ！",
      "auth::verify();\npilot::go_to_core();\ncore_ops::process();"
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
        "x": 5,
        "y": 1
      },
      "cores": [
        {
          "id": "c1",
          "x": 1,
          "y": 1,
          "power": 3,
          "label": "モジュールコア"
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
      "deliveries": [
        {
          "x": 5,
          "y": 1
        }
      ],
      "vault": {
        "x": 0,
        "y": 0,
        "initial": 0,
        "target": 5
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "deliverCores": 1,
      "minCorePower": 5,
      "scanCount": 1,
      "vaultTarget": 5,
      "stdoutIncludes": [
        "MODULE_CLEAR"
      ],
      "requireAllSwitches": true,
      "requireSpatialCoreRules": true
    },
    "parTicks": 12
  },
  {
    "displayId": "11-16",
    "id": "d56b1292-ec0c-50a3-a42d-d1f5b4340960",
    "index": 176,
    "chapter": 11,
    "chapterTitle": "第11章 モジュールとパス",
    "stageKind": "challenge",
    "title": "11-16. 第11章挑戦：工房アーキテクチャ総合迷宮",
    "topicTag": "第11章 最終チャレンジ",
    "kurumiIntro": "第11章の集大成！階層モジュール `factory::nav` と `factory::vault` を整理して公開し、2つのスイッチ・周期ゲート・巡回スパークの迷宮を抜け出そう！",
    "goalSummary": "階層モジュールを公開利用し、金庫⚡6・全スイッチ・ゴール (5, 3) へ",
    "bookSectionTitle": "第11章まとめ — モジュール分割と可視性設計の極意",
    "bookSummary": "複雑なロボットの制御システムも、適切なモジュール階層と `pub` / `use` の境界設計によりすっきり見通せるようになります。",
    "bookKeyCode": "use factory::nav::step_safe;",
    "starterCode": "mod factory {\n    pub mod vault {\n        pub fn fill() { add_vault(6); }\n    }\n    pub mod nav {\n        // pub を付けて公開しよう！\n        fn step_safe(n: i32) {\n            for _ in 0..n {\n                while is_spark_ahead() || !is_gate_open() { wait_tick(1); }\n                step();\n            }\n        }\n    }\n}\n\nuse factory::vault::fill;\nuse factory::nav::step_safe;\n\nfn main() {\n    fill();\n    step_safe(3);\n}",
    "solutionCode": "mod factory {\n    pub mod vault {\n        pub fn fill() { add_vault(6); }\n    }\n    pub mod nav {\n        pub fn step_safe(n: i32) {\n            for _ in 0..n {\n                while is_spark_ahead() || !is_gate_open() { wait_tick(1); }\n                step();\n            }\n        }\n    }\n}\n\nuse factory::vault::fill;\nuse factory::nav::step_safe;\n\nfn main() {\n    fill();\n    step_safe(5);\n    turn_right();\n    step_safe(2);\n}",
    "quickChips": [
      {
        "label": "pub fn step_safe(n: i32)",
        "insert": "pub fn step_safe(n: i32)"
      },
      {
        "label": "step_safe(5);",
        "insert": "step_safe(5);\n    "
      },
      {
        "label": "turn_right();",
        "insert": "turn_right();\n    "
      },
      {
        "label": "step_safe(2);",
        "insert": "step_safe(2);"
      }
    ],
    "hints": [
      "まずは `fn step_safe` に `pub` を付けて呼び出せるようにしよう！",
      "上の廊下にはスイッチ (1,1)・スパーク (2,1)・スイッチ (4,1) があるよ。`step_safe(5);` で (5,1) の角まで一気に進もう！",
      "そこから `turn_right(); step_safe(2);` で下のゲート (5,2) を越えて (5,3) のゴールへ到着するよ！"
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
      "switches": [
        {
          "x": 1,
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
        "x": 0,
        "y": 0,
        "initial": 0,
        "target": 6
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
              "y": 1
            }
          ],
          "initialIndex": 0
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "vaultTarget": 6,
      "requireAllSwitches": true
    },
    "parTicks": 12
  }
];


