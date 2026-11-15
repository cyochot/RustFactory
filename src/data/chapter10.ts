import { StageDefinition } from '../types/game';

export const CHAPTER_10_STAGES: StageDefinition[] = [
  {
    "displayId": "10-1",
    "id": "814eb34c-a41c-5c6b-8eea-651e248a469b",
    "index": 225,
    "chapter": 10,
    "chapterTitle": "第10章 ジェネリック型、トレイト、ライフタイム",
    "title": "10-1. ジェネリック型 <T> で共通部品化",
    "topicTag": "ジェネリクス <T>",
    "kurumiIntro": "どんな型でも受け取れる万能ホルダー `<T>` を作ろう！同じ仕組みを何度も書き直す手間がなくなるよ。",
    "goalSummary": "ジェネリック関数 pass_through<T> を使ってゴール (3, 1) へ",
    "bookSectionTitle": "10.1 ジェネリックなデータ型",
    "bookSummary": "`fn 名前<T>(x: T) -> T` のように `<T>` を使うと、具体的な型を決めずに共通のロジックを書くことができます。",
    "bookKeyCode": "fn pass_through<T>(item: T) -> T {\n    item\n}",
    "starterCode": "fn pass_through<T>(item: T) -> T {\n    item\n}\n\nfn main() {\n    let steps = pass_through(3);\n    let core = pass_through(grab_core());\n    // steps 歩進んで core を届けよう！\n    \n}",
    "solutionCode": "fn pass_through<T>(item: T) -> T {\n    item\n}\n\nfn main() {\n    let steps = pass_through(3);\n    let core = pass_through(grab_core());\n    step(steps);\n    deliver(core);\n}",
    "quickChips": [
      {
        "label": "step(steps);",
        "insert": "step(steps);\n    "
      },
      {
        "label": "deliver(core);",
        "insert": "deliver(core);\n    "
      }
    ],
    "hints": [
      "pass_through は i32 も EnergyCore も同じ関数でそのまま通せるよ！",
      "step(steps); のあとに deliver(core); を書こう。",
      "step(steps);\ndeliver(core);"
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
      "cores": [
        {
          "id": "c1",
          "x": 0,
          "y": 1,
          "power": 2,
          "label": "汎用コア"
        }
      ],
      "deliveries": [
        {
          "x": 3,
          "y": 1
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "deliverCores": 1
    },
    "parTicks": 5
  },
  {
    "displayId": "10-2",
    "id": "a9910c82-84a5-5e5e-abcf-75706a78d6eb",
    "index": 226,
    "chapter": 10,
    "chapterTitle": "第10章 ジェネリック型、トレイト、ライフタイム",
    "title": "10-2. ジェネリック構造体 Pair<T>",
    "topicTag": "struct Pair<T>",
    "kurumiIntro": "構造体の定義にも `<T>` を使えるよ！縦と横の歩数でも、2つのエネルギーでも入れられる汎用コンテナ `Pair<T>` を使ってみよう。",
    "goalSummary": "Pair<T> の first, second を使って L字ゴール (3, 2) へ",
    "bookSectionTitle": "10.1 構造体定義でのジェネリクス",
    "bookSummary": "`struct Pair<T> { first: T, second: T }` のように書くと、任意の型 `T` を2つ保持する柔軟な構造体を作れます。",
    "bookKeyCode": "struct Pair<T> { first: T, second: T }",
    "starterCode": "struct Pair<T> {\n    first: T,\n    second: T,\n}\n\nfn main() {\n    let p = Pair { first: 3, second: 1 };\n    step(p.first);\n    turn_right();\n    // あと p.second 歩だけ進もう！\n    \n}",
    "solutionCode": "struct Pair<T> {\n    first: T,\n    second: T,\n}\n\nfn main() {\n    let p = Pair { first: 3, second: 1 };\n    step(p.first);\n    turn_right();\n    step(p.second);\n}",
    "quickChips": [
      {
        "label": "step(p.second);",
        "insert": "step(p.second);"
      }
    ],
    "hints": [
      "p.first は 3、p.second は 1 だよ。",
      "turn_right(); のあとに step(p.second); を書こう！",
      "step(p.first);\nturn_right();\nstep(p.second);"
    ],
    "worldSetup": {
      "width": 5,
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
        }
      ],
      "botStart": {
        "x": 0,
        "y": 1,
        "dir": 0
      },
      "goal": {
        "x": 3,
        "y": 2
      }
    },
    "victoryCondition": {
      "reachGoal": true
    },
    "parTicks": 5
  },
  {
    "displayId": "10-3",
    "id": "8b3d8b50-360b-5151-aed0-ad7cc476ab70",
    "index": 227,
    "chapter": 10,
    "chapterTitle": "第10章 ジェネリック型、トレイト、ライフタイム",
    "stageKind": "puzzle",
    "title": "10-3. ジェネリック構造体 VecHolder<T> でルート保存",
    "topicTag": "struct Holder<T> + コンベア",
    "kurumiIntro": "横・縦・最後の3つの距離をジェネリック構造体 `Route<T>` にしまって、ベルトコンベアをつなぎながら 7ティック以内にゴールしよう！",
    "goalSummary": "ジェネリック構造体 Route<T> でスイッチとコンベアを突破し (5, 3) へ",
    "bookSectionTitle": "10.1 型パラメータを複数フィールドに持つ構造体",
    "bookSummary": "共通の型 `T` を持つフィールドをまとめることで、将来の数値精度変更（`i32` -> `f64` など）にも強い構造体になります。",
    "bookKeyCode": "struct Route<T> { a: T, b: T, c: T }",
    "starterCode": "struct Route<T> {\n    a: T,\n    b: T,\n    c: T,\n}\n\nfn main() {\n    // 地図のコンベアに合わせて (a, b, c) を設定しよう！\n    let r = Route { a: 1, b: 0, c: 0 };\n    step(r.a);\n    turn_right();\n    step(r.b);\n    turn_left();\n    step(r.c);\n}",
    "solutionCode": "struct Route<T> {\n    a: T,\n    b: T,\n    c: T,\n}\n\nfn main() {\n    let r = Route { a: 1, b: 1, c: 2 };\n    step(r.a);\n    turn_right();\n    step(r.b);\n    turn_left();\n    step(r.c);\n}",
    "quickChips": [
      {
        "label": "Route { a: 1, b: 1, c: 2 }",
        "insert": "Route { a: 1, b: 1, c: 2 }"
      }
    ],
    "hints": [
      "(1,1) の東向きコンベアでスイッチ(2,1)に乗るから a = 1 だよ！",
      "右折して b = 1 で(2,2)の南向きコンベアに乗って(2,3)へ！最後に左折して c = 2 で(3,3)コンベア経由で(5,3)に届くよ！",
      "let r = Route { a: 1, b: 1, c: 2 };"
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
          "x": 1,
          "y": 1,
          "dir": 0
        },
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
      "maxTicks": 7
    },
    "parTicks": 7
  },
  {
    "displayId": "10-4",
    "id": "581e38ad-f1a7-5277-bd7d-5df7a4769556",
    "index": 228,
    "chapter": 10,
    "chapterTitle": "第10章 ジェネリック型、トレイト、ライフタイム",
    "title": "10-4. impl<T> メソッド定義",
    "topicTag": "impl<T> / メソッド",
    "kurumiIntro": "ジェネリック構造体 `BoxUnit<T>` にメソッドを付けるときは `impl<T> BoxUnit<T>` と書くよ！中身の値を金庫と移動の両方に活かそう。",
    "goalSummary": "impl<T> の value(&self) を使って金庫⚡4＋ゴール (4, 1) へ",
    "bookSectionTitle": "10.1 メソッド定義でのジェネリクス",
    "bookSummary": "`impl<T> 型名<T>` のように `impl` の後ろにも `<T>` を宣言することで、どんな型 `T` を持つインスタンスにも使えるメソッドを定義できます。",
    "bookKeyCode": "impl<T> BoxUnit<T> {\n    fn value(&self) -> &T { &self.val }\n}",
    "starterCode": "struct BoxUnit<T> {\n    val: T,\n}\n\nimpl<T> BoxUnit<T> {\n    fn get(&self) -> &T {\n        &self.val\n    }\n}\n\nfn main() {\n    let unit = BoxUnit { val: 4 };\n    let n = *unit.get();\n    // 金庫に n を入れ、n 歩進もう！\n    \n}",
    "solutionCode": "struct BoxUnit<T> {\n    val: T,\n}\n\nimpl<T> BoxUnit<T> {\n    fn get(&self) -> &T {\n        &self.val\n    }\n}\n\nfn main() {\n    let unit = BoxUnit { val: 4 };\n    let n = *unit.get();\n    add_vault(n);\n    step(n);\n}",
    "quickChips": [
      {
        "label": "add_vault(n);",
        "insert": "add_vault(n);\n    "
      },
      {
        "label": "step(n);",
        "insert": "step(n);\n    "
      }
    ],
    "hints": [
      "*unit.get() から 4 が取り出されているよ！",
      "add_vault(n); と step(n); を書き足そう。",
      "add_vault(n);\nstep(n);"
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
    "displayId": "10-5",
    "id": "dcacc81e-6cfa-53a1-ab53-9c2ecc9e4126",
    "index": 229,
    "chapter": 10,
    "chapterTitle": "第10章 ジェネリック型、トレイト、ライフタイム",
    "title": "10-5. 異なる型ペア Duo<T, U> の活用",
    "topicTag": "複数型引数 <T, U>",
    "kurumiIntro": "型引数は `<T, U>` のように2つ以上並べられるよ！数字（歩数）とメッセージ（文字列）をセットにした `Duo<T, U>` で合図を出しつつ進もう。",
    "goalSummary": "Duo<i32, String> で \"GO\" を出力しゴール (3, 1) へ",
    "bookSectionTitle": "10.1 複数のジェネリック型パラメータ",
    "bookSummary": "`struct Duo<T, U>` のように異なる複数の型パラメータを使うと、柔軟でありながらコンパイル時の型安全性が保たれます。",
    "bookKeyCode": "struct Duo<T, U> { a: T, b: U }",
    "starterCode": "struct Duo<T, U> {\n    steps: T,\n    tag: U,\n}\n\nfn main() {\n    let d = Duo { steps: 3, tag: \"WAIT\" };\n    println!(\"SIGNAL: {}\", d.tag);\n    step(d.steps);\n}",
    "solutionCode": "struct Duo<T, U> {\n    steps: T,\n    tag: U,\n}\n\nfn main() {\n    let d = Duo { steps: 3, tag: \"GO\" };\n    println!(\"SIGNAL: {}\", d.tag);\n    step(d.steps);\n}",
    "quickChips": [
      {
        "label": "\"GO\"",
        "insert": "\"GO\""
      }
    ],
    "hints": [
      "println! の出力に \"GO\" という合図を含めよう！",
      "d の tag を \"WAIT\" から \"GO\" に書き換えよう。",
      "let d = Duo { steps: 3, tag: \"GO\" };"
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
      "reachGoal": true,
      "stdoutIncludes": [
        "GO"
      ]
    },
    "parTicks": 4
  },
  {
    "displayId": "10-6",
    "id": "d39e7fc6-3812-56fd-bce7-72c69cd529bf",
    "index": 230,
    "chapter": 10,
    "chapterTitle": "第10章 ジェネリック型、トレイト、ライフタイム",
    "title": "10-6. トレイト trait で共通のふるまい",
    "topicTag": "trait / impl for",
    "kurumiIntro": "「歩く能力」や「充電能力」など、型が持つ共通の約束ごとを `trait` で定義しよう！",
    "goalSummary": "trait PowerUnit を MiniCrab に実装して金庫⚡3＋ゴールへ",
    "bookSectionTitle": "10.2 トレイト: 共通の振る舞いを定義する",
    "bookSummary": "`trait 名前 { fn ...; }` でメソッドの約束を決め、`impl トレイト名 for 型名 { ... }` で具体的な動きを実装します。",
    "bookKeyCode": "trait PowerUnit {\n    fn power(&self) -> i32;\n}",
    "starterCode": "trait PowerUnit {\n    fn power(&self) -> i32;\n}\n\nstruct MiniCrab { level: i32 }\n\nimpl PowerUnit for MiniCrab {\n    fn power(&self) -> i32 {\n        // level を 3倍にして返してみよう！\n        self.level\n    }\n}\n\nfn main() {\n    let crab = MiniCrab { level: 1 };\n    let p = crab.power();\n    add_vault(p);\n    step(p);\n}",
    "solutionCode": "trait PowerUnit {\n    fn power(&self) -> i32;\n}\n\nstruct MiniCrab { level: i32 }\n\nimpl PowerUnit for MiniCrab {\n    fn power(&self) -> i32 {\n        self.level * 3\n    }\n}\n\nfn main() {\n    let crab = MiniCrab { level: 1 };\n    let p = crab.power();\n    add_vault(p);\n    step(p);\n}",
    "quickChips": [
      {
        "label": "self.level * 3",
        "insert": "self.level * 3"
      }
    ],
    "hints": [
      "MiniCrab の level は 1 だよ。power() が 3 を返せば金庫もゴールも達成できる！",
      "self.level * 3 に直してみよう。",
      "fn power(&self) -> i32 {\n    self.level * 3\n}"
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
    "displayId": "10-7",
    "id": "2ffed195-378d-5077-b5bd-d451e2930f47",
    "index": 231,
    "chapter": 10,
    "chapterTitle": "第10章 ジェネリック型、トレイト、ライフタイム",
    "title": "10-7. 複数の型に同じトレイトを実装する",
    "topicTag": "多態性 impl Trait for A, B",
    "kurumiIntro": "太陽光歯車 `Solar` と風力歯車 `Wind`、中身はちがっても同じ `trait Energy` を実装すれば、共通のメソッド名 `.watt()` で呼べるようになるよ！",
    "goalSummary": "Solar と Wind の合計ワット数で金庫⚡5＋ゴール (5, 1) へ",
    "bookSectionTitle": "10.2 異なる型へのトレイト実装",
    "bookSummary": "1つの `trait` を複数の構造体に実装することで、それぞれの特性に合わせた計算をしつつ、使う側は同じインターフェースで扱えます。",
    "bookKeyCode": "impl Energy for Solar { ... }\nimpl Energy for Wind { ... }",
    "starterCode": "trait Energy {\n    fn watt(&self) -> i32;\n}\n\nstruct Solar { sun: i32 }\nstruct Wind { rpm: i32 }\n\nimpl Energy for Solar {\n    fn watt(&self) -> i32 { self.sun * 2 }\n}\n\nimpl Energy for Wind {\n    // rpm に 1 を足した値を返すよう直そう！（rpm=2 なら 3）\n    fn watt(&self) -> i32 { self.rpm }\n}\n\nfn main() {\n    let s = Solar { sun: 1 };\n    let w = Wind { rpm: 2 };\n    let total = s.watt() + w.watt();\n    add_vault(total);\n    step(total);\n}",
    "solutionCode": "trait Energy {\n    fn watt(&self) -> i32;\n}\n\nstruct Solar { sun: i32 }\nstruct Wind { rpm: i32 }\n\nimpl Energy for Solar {\n    fn watt(&self) -> i32 { self.sun * 2 }\n}\n\nimpl Energy for Wind {\n    fn watt(&self) -> i32 { self.rpm + 1 }\n}\n\nfn main() {\n    let s = Solar { sun: 1 };\n    let w = Wind { rpm: 2 };\n    let total = s.watt() + w.watt();\n    add_vault(total);\n    step(total);\n}",
    "quickChips": [
      {
        "label": "self.rpm + 1",
        "insert": "self.rpm + 1"
      }
    ],
    "hints": [
      "s.watt() は 1 * 2 = 2 だよ。合計を 5 にするには w.watt() が 3 になればいいね！",
      "impl Energy for Wind の中を `{ self.rpm + 1 }` にしよう。",
      "fn watt(&self) -> i32 { self.rpm + 1 }"
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
      "vault": {
        "x": 2,
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
    "displayId": "10-8",
    "id": "8f71099b-27eb-5844-b594-aed9c6e540eb",
    "index": 232,
    "chapter": 10,
    "chapterTitle": "第10章 ジェネリック型、トレイト、ライフタイム",
    "stageKind": "puzzle",
    "title": "10-8. トレイトで異なる移動機を切り替える",
    "topicTag": "trait + スパーク警戒",
    "kurumiIntro": "「直線型 `DashUnit`」と「安全確認型 `SafeUnit`」に同じ `trait Walker` を実装しよう！スパークが横切る通路では安全型の出番だよ。",
    "goalSummary": "SafeUnit に Walker を実装してスパークを避け (5, 1) へ",
    "bookSectionTitle": "10.2 同じトレイトでも実装ごとに安全性を変える",
    "bookSummary": "共通のメソッド名 `walk(&self, n)` でありながら、型によって安全確認の有無など異なる振る舞いを実装できます。",
    "bookKeyCode": "impl Walker for SafeUnit { fn walk(&self, n: i32) { ... } }",
    "starterCode": "trait Walker {\n    fn walk(&self, n: i32);\n}\n\nstruct SafeUnit {\n    tag: i32,\n}\n\nimpl Walker for SafeUnit {\n    fn walk(&self, n: i32) {\n        for _ in 0..n {\n            // スパークや閉じているゲートがあれば wait_tick(1) で待とう！\n            step();\n        }\n    }\n}\n\nfn go<T: Walker>(u: &T, n: i32) {\n    u.walk(n);\n}\n\nfn main() {\n    let unit = SafeUnit { tag: 1 };\n    go(&unit, 5);\n}",
    "solutionCode": "trait Walker {\n    fn walk(&self, n: i32);\n}\n\nstruct SafeUnit {\n    tag: i32,\n}\n\nimpl Walker for SafeUnit {\n    fn walk(&self, n: i32) {\n        for _ in 0..n {\n            while is_spark_ahead() || !is_gate_open() {\n                wait_tick(1);\n            }\n            step();\n        }\n    }\n}\n\nfn go<T: Walker>(u: &T, n: i32) {\n    u.walk(n);\n}\n\nfn main() {\n    let unit = SafeUnit { tag: 1 };\n    go(&unit, 5);\n}",
    "quickChips": [
      {
        "label": "while is_spark_ahead() || !is_gate_open() { wait_tick(1); }",
        "insert": "while is_spark_ahead() || !is_gate_open() {\n                wait_tick(1);\n            }\n            "
      }
    ],
    "hints": [
      "(2,1) に横断スパークがいて、(3,1) にスイッチ連動ゲートがあるよ！",
      "walk メソッドの中の `step();` の前に `while is_spark_ahead() || !is_gate_open() { wait_tick(1); }` を入れよう。",
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
          "initialIndex": 3
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "requireAllSwitches": true
    },
    "parTicks": 8
  },
  {
    "displayId": "10-9",
    "id": "9488c624-3fd3-54cf-a8a1-8490c9c47af7",
    "index": 233,
    "chapter": 10,
    "chapterTitle": "第10章 ジェネリック型、トレイト、ライフタイム",
    "title": "10-9. トレイト境界 <T: Driveable> で関数に制約を",
    "topicTag": "トレイト境界 T: Trait",
    "kurumiIntro": "「`Driveable` トレイトを持っている型だけ受け付ける」関数 `launch<T: Driveable>(unit: &T)` を動かしてみよう！安全な部品だけが発進できる仕組みだよ。",
    "goalSummary": "トレイト境界を持つ launch で WheelDrive を動かし (3, 3) へ",
    "bookSectionTitle": "10.2 引数としてのトレイト・トレイト境界構文",
    "bookSummary": "`fn launch<T: Driveable>(u: &T)` のように書くと、`Driveable` トレイトを実装した型だけを渡せる汎用関数を作れます。",
    "bookKeyCode": "fn launch<T: Driveable>(u: &T) { u.drive(); }",
    "starterCode": "trait Driveable {\n    fn drive(&self);\n}\n\nstruct WheelDrive {\n    dx: i32,\n    dy: i32,\n}\n\nimpl Driveable for WheelDrive {\n    fn drive(&self) {\n        step(self.dx);\n        turn_right();\n        step(self.dy);\n    }\n}\n\nfn launch<T: Driveable>(unit: &T) {\n    unit.drive();\n}\n\nfn main() {\n    let w = WheelDrive { dx: 1, dy: 2 };\n    // dx を 3 にして L字の奥 (3, 3) へ到着しよう！\n    launch(&w);\n}",
    "solutionCode": "trait Driveable {\n    fn drive(&self);\n}\n\nstruct WheelDrive {\n    dx: i32,\n    dy: i32,\n}\n\nimpl Driveable for WheelDrive {\n    fn drive(&self) {\n        step(self.dx);\n        turn_right();\n        step(self.dy);\n    }\n}\n\nfn launch<T: Driveable>(unit: &T) {\n    unit.drive();\n}\n\nfn main() {\n    let w = WheelDrive { dx: 3, dy: 2 };\n    launch(&w);\n}",
    "quickChips": [
      {
        "label": "dx: 3",
        "insert": "dx: 3"
      }
    ],
    "hints": [
      "WheelDrive { dx: 1, dy: 2 } だと右に1歩しか進めないよ！",
      "dx: 3 に直すと右に3歩、下に2歩進んでゴール (3, 3) に着くよ。",
      "let w = WheelDrive { dx: 3, dy: 2 };"
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
    "displayId": "10-10",
    "id": "28016ab7-3c5e-5472-bc4c-631fcb94ecd1",
    "index": 234,
    "chapter": 10,
    "chapterTitle": "第10章 ジェネリック型、トレイト、ライフタイム",
    "stageKind": "puzzle",
    "title": "10-10. 空間ルール対応のトレイト境界関数",
    "topicTag": "T: CoreOps + 空間コア",
    "kurumiIntro": "検査と強化の2つができる部品だけをトレイト境界 `T: ProcessCore` で受け付ける納品関数を使おう！正しい場所で `scan` と `boost` を行ってね。",
    "goalSummary": "トレイト境界関数でコア検査・強化(⚡4+)・納品・ゴールへ",
    "bookSectionTitle": "10.2 トレイト境界による処理能力の保証",
    "bookSummary": "`fn mission<T: Trait>(u: &T)` は「このトレイトを満たす型しか渡せない」ことをコンパイル時に保証する仕組みです。",
    "bookKeyCode": "fn mission<T: CoreStage>(m: &T)",
    "starterCode": "trait CoreStage {\n    fn run(&self);\n}\n\nstruct LineWorker {\n    bonus: i32,\n}\n\nimpl CoreStage for LineWorker {\n    fn run(&self) {\n        add_vault(self.bonus);\n        step(1);\n        let mut c = grab_core();\n        step(1);\n        scan(&c);\n        // (3,1)強化台へ進んで boost(&mut c)、さらに(4,1)納品台で deliver(c) しよう！\n    }\n}\n\nfn dispatch<T: CoreStage>(worker: &T) {\n    worker.run();\n}\n\nfn main() {\n    let w = LineWorker { bonus: 4 };\n    dispatch(&w);\n}",
    "solutionCode": "trait CoreStage {\n    fn run(&self);\n}\n\nstruct LineWorker {\n    bonus: i32,\n}\n\nimpl CoreStage for LineWorker {\n    fn run(&self) {\n        add_vault(self.bonus);\n        step(1);\n        let mut c = grab_core();\n        step(1);\n        scan(&c);\n        step(1);\n        boost(&mut c);\n        step(1);\n        deliver(c);\n    }\n}\n\nfn dispatch<T: CoreStage>(worker: &T) {\n    worker.run();\n}\n\nfn main() {\n    let w = LineWorker { bonus: 4 };\n    dispatch(&w);\n}",
    "quickChips": [
      {
        "label": "step(1); boost(&mut c);",
        "insert": "step(1);\n        boost(&mut c);\n        "
      },
      {
        "label": "step(1); deliver(c);",
        "insert": "step(1);\n        deliver(c);"
      }
    ],
    "hints": [
      "scan(&c) した位置は (2,1) だよ。1歩進むと (3,1) の強化台があるから `boost(&mut c);` しよう！",
      "さらにもう1歩で (4,1) の納品台に着くから `deliver(c);` で完了！",
      "step(1); boost(&mut c); step(1); deliver(c);"
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
          "label": "境界コア"
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
      "scanCount": 1,
      "vaultTarget": 4,
      "requireSpatialCoreRules": true
    },
    "parTicks": 10
  },
  {
    "displayId": "10-11",
    "id": "dc872ad3-345b-5f25-95d4-1d780fd8a7eb",
    "index": 235,
    "chapter": 10,
    "chapterTitle": "第10章 ジェネリック型、トレイト、ライフタイム",
    "title": "10-11. トレイトと switch ゲートの制御パズル",
    "topicTag": "trait + ゲート実践",
    "kurumiIntro": "トレイト `GateBreaker` を持つロボットを動かして、途中のスイッチを踏んで連動ゲートを開きながらゴールまで突っ走ろう！",
    "goalSummary": "trait GateBreaker を使って金庫⚡4＋連動ゲートを突破しよう",
    "bookSectionTitle": "10.2 トレイトによる行動抽象化",
    "bookSummary": "役割ごとの手順をトレイトメソッドに閉じ込めることで、制御ロジックを見通しよく保てます。",
    "bookKeyCode": "impl GateBreaker for TurboBot { fn charge(&self) { ... } }",
    "starterCode": "trait GateBreaker {\n    fn charge(&self) -> i32;\n    fn cross(&self);\n}\n\nstruct TurboBot { val: i32 }\n\nimpl GateBreaker for TurboBot {\n    fn charge(&self) -> i32 { self.val }\n    fn cross(&self) {\n        // スイッチ(2, 1)を通ってゴール(4, 1)へ4歩進もう！\n        step(2);\n    }\n}\n\nfn main() {\n    let b = TurboBot { val: 4 };\n    add_vault(b.charge());\n    b.cross();\n}",
    "solutionCode": "trait GateBreaker {\n    fn charge(&self) -> i32;\n    fn cross(&self);\n}\n\nstruct TurboBot { val: i32 }\n\nimpl GateBreaker for TurboBot {\n    fn charge(&self) -> i32 { self.val }\n    fn cross(&self) {\n        step(4);\n    }\n}\n\nfn main() {\n    let b = TurboBot { val: 4 };\n    add_vault(b.charge());\n    b.cross();\n}",
    "quickChips": [
      {
        "label": "step(4);",
        "insert": "step(4);"
      }
    ],
    "hints": [
      "(2, 1) のスイッチを踏めば (3, 1) のゲートが開くから、合計4歩直進できるよ！",
      "cross の中の step(2); を step(4); にしよう。",
      "fn cross(&self) {\n    step(4);\n}"
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
    "displayId": "10-12",
    "id": "07f2c040-9791-54e8-8788-09370c49cc5b",
    "index": 236,
    "chapter": 10,
    "chapterTitle": "第10章 ジェネリック型、トレイト、ライフタイム",
    "stageKind": "puzzle",
    "title": "10-12. ジェネリック＋トレイトで自動迷路脱出",
    "topicTag": "trait Solver + 左手法迷路",
    "kurumiIntro": "左手法の迷路アルゴリズムをトレイト `MazeSolver` として定義し、ジェネリック関数 `run_solver<T: MazeSolver>` から起動して迷路を脱出しよう！",
    "goalSummary": "MazeSolver 実装を完成させ行き止まりを右折して迷路ゴール (3, 3) へ",
    "bookSectionTitle": "10.2 トレイトによるアルゴリズム差し替え設計",
    "bookSummary": "探索手法をトレイトとして抽象化しておけば、呼び出し元の `run_solver` を一切変えずに別の探索策略へ差し替えられます。",
    "bookKeyCode": "fn run_solver<T: MazeSolver>(s: &T) { s.solve(); }",
    "starterCode": "trait MazeSolver {\n    fn solve(&self);\n}\n\nstruct LeftWallBot {\n    vault: i32,\n}\n\nimpl MazeSolver for LeftWallBot {\n    fn solve(&self) {\n        add_vault(self.vault);\n        while !at_goal() {\n            if !is_wall_left() {\n                turn_left();\n                step();\n            } else if !is_wall_ahead() {\n                step();\n            } else {\n                // 行き止まりで右折しよう！今は wait_tick だけだよ\n                wait_tick(1);\n            }\n        }\n    }\n}\n\nfn run_solver<T: MazeSolver>(s: &T) {\n    s.solve();\n}\n\nfn main() {\n    let bot = LeftWallBot { vault: 4 };\n    run_solver(&bot);\n}",
    "solutionCode": "trait MazeSolver {\n    fn solve(&self);\n}\n\nstruct LeftWallBot {\n    vault: i32,\n}\n\nimpl MazeSolver for LeftWallBot {\n    fn solve(&self) {\n        add_vault(self.vault);\n        while !at_goal() {\n            if !is_wall_left() {\n                turn_left();\n                step();\n            } else if !is_wall_ahead() {\n                step();\n            } else {\n                turn_right();\n            }\n        }\n    }\n}\n\nfn run_solver<T: MazeSolver>(s: &T) {\n    s.solve();\n}\n\nfn main() {\n    let bot = LeftWallBot { vault: 4 };\n    run_solver(&bot);\n}",
    "quickChips": [
      {
        "label": "turn_right();",
        "insert": "turn_right();"
      }
    ],
    "hints": [
      "左も前も壁のときの `else` が `wait_tick(1);` になっているため動けなくなっているよ！",
      "`turn_right();` に書き換えよう！",
      "else {\n    turn_right();\n}"
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
          "x": 2,
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
        "y": 1,
        "dir": 0
      },
      "goal": {
        "x": 3,
        "y": 3
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
    "displayId": "10-13",
    "id": "08ae2516-d978-50bb-a1af-ded3ae253058",
    "index": 237,
    "chapter": 10,
    "chapterTitle": "第10章 ジェネリック型、トレイト、ライフタイム",
    "stageKind": "challenge",
    "title": "10-13. トレイト＋コンベア最短7ティック挑戦",
    "topicTag": "trait + コンベア最短",
    "kurumiIntro": "2種類のエンジン構造体 `BoostA` と `BoostB` に同じトレイト `PowerSpec` を実装して合計⚡5を作り、コンベアを使って 7ティック以内に走り抜けよう！",
    "goalSummary": "トレイト合計⚡5＋全スイッチ＋コンベアで7ティック以内に (5, 3) へ",
    "bookSectionTitle": "10.2 トレイト計算と最短コンベアパス",
    "bookSummary": "トレイトメソッドで必要なエネルギーを算出しつつ、最短ステップでゴールを目指します。",
    "bookKeyCode": "impl PowerSpec for BoostA { ... }",
    "starterCode": "trait PowerSpec {\n    fn power(&self) -> i32;\n}\n\nstruct BoostA { v: i32 }\nstruct BoostB { v: i32 }\n\nimpl PowerSpec for BoostA { fn power(&self) -> i32 { self.v * 2 } }\nimpl PowerSpec for BoostB {\n    // v + 1 を返すよう直そう！（v=2 なら 3、合わせて 2 + 3 = 5）\n    fn power(&self) -> i32 { self.v }\n}\n\nfn main() {\n    let a = BoostA { v: 1 };\n    let b = BoostB { v: 2 };\n    add_vault(a.power() + b.power());\n    step(1);\n    turn_right();\n    step(1);\n    turn_left();\n    step(2);\n}",
    "solutionCode": "trait PowerSpec {\n    fn power(&self) -> i32;\n}\n\nstruct BoostA { v: i32 }\nstruct BoostB { v: i32 }\n\nimpl PowerSpec for BoostA { fn power(&self) -> i32 { self.v * 2 } }\nimpl PowerSpec for BoostB {\n    fn power(&self) -> i32 { self.v + 1 }\n}\n\nfn main() {\n    let a = BoostA { v: 1 };\n    let b = BoostB { v: 2 };\n    add_vault(a.power() + b.power());\n    step(1);\n    turn_right();\n    step(1);\n    turn_left();\n    step(2);\n}",
    "quickChips": [
      {
        "label": "self.v + 1",
        "insert": "self.v + 1"
      }
    ],
    "hints": [
      "移動ルートは完璧！でも今の b.power() は 2 だから金庫が 2 + 2 = 4 しか入らないよ。",
      "BoostB の power() を `{ self.v + 1 }` にすれば 2 + 3 = 5 で金庫もクリア！",
      "impl PowerSpec for BoostB {\n    fn power(&self) -> i32 { self.v + 1 }\n}"
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
          "x": 1,
          "y": 1,
          "dir": 0
        },
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
      "vaultTarget": 5,
      "requireAllSwitches": true,
      "maxTicks": 8
    },
    "parTicks": 8
  },
  {
    "displayId": "10-14",
    "id": "2eccc816-7f2d-5d01-af35-7bccdb1aa496",
    "index": 238,
    "chapter": 10,
    "chapterTitle": "第10章 ジェネリック型、トレイト、ライフタイム",
    "stageKind": "challenge",
    "title": "10-14. ジェネリック機構×スイッチ連動迷路",
    "topicTag": "<T> + トレイト境界迷路",
    "kurumiIntro": "トレイト境界 `<T: Pilot>` で操縦ロボを受け入れ、途中の2つのスイッチと周期ゲートを抜けて下の階層 `(4, 3)` へたどり着こう！",
    "goalSummary": "トレイト境界の操縦ロボで金庫⚡5・全スイッチ・周期ゲートを突破し (4, 3) へ",
    "bookSectionTitle": "10.2 ジェネリック設計で複雑な経路を攻略する",
    "bookSummary": "安全移動能力をトレイトに定義し、ジェネリック関数を通してミッションを実行します。",
    "bookKeyCode": "fn launch_bot<T: Pilot>(p: &T)",
    "starterCode": "trait Pilot {\n    fn fly(&self);\n}\n\nstruct SmartPilot<T> {\n    vault_amt: T,\n}\n\nimpl Pilot for SmartPilot<i32> {\n    fn fly(&self) {\n        add_vault(self.vault_amt);\n        // (1,1)スイッチ1 -> (2,1)スパーク -> (3,1)スイッチ2 -> (4,1)右折 -> (4,2)ゲート -> (4,3)ゴール！\n        for _ in 0..2 {\n            while is_spark_ahead() || !is_gate_open() { wait_tick(1); }\n            step();\n        }\n    }\n}\n\nfn launch_bot<T: Pilot>(p: &T) {\n    p.fly();\n}\n\nfn main() {\n    let sp = SmartPilot { vault_amt: 5 };\n    launch_bot(&sp);\n}",
    "solutionCode": "trait Pilot {\n    fn fly(&self);\n}\n\nstruct SmartPilot<T> {\n    vault_amt: T,\n}\n\nimpl Pilot for SmartPilot<i32> {\n    fn fly(&self) {\n        add_vault(self.vault_amt);\n        for _ in 0..4 {\n            while is_spark_ahead() || !is_gate_open() { wait_tick(1); }\n            step();\n        }\n        turn_right();\n        for _ in 0..2 {\n            while is_spark_ahead() || !is_gate_open() { wait_tick(1); }\n            step();\n        }\n    }\n}\n\nfn launch_bot<T: Pilot>(p: &T) {\n    p.fly();\n}\n\nfn main() {\n    let sp = SmartPilot { vault_amt: 5 };\n    launch_bot(&sp);\n}",
    "quickChips": [
      {
        "label": "0..4",
        "insert": "0..4"
      },
      {
        "label": "turn_right();",
        "insert": "turn_right();\n        "
      }
    ],
    "hints": [
      "東へ 4歩（for _ in 0..4）進みながら(1,1)と(3,1)のスイッチを踏み、(2,1)のスパークを待って(4,1)へ！",
      "その後 `turn_right();` してから、さらに `for _ in 0..2` でゲート(4,2)を通って(4,3)へ！",
      "for _ in 0..4 { ... } turn_right(); for _ in 0..2 { ... }"
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
          "x": 1,
          "y": 1
        },
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
      "vault": {
        "x": 0,
        "y": 0,
        "initial": 0,
        "target": 5
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
          "initialIndex": 1
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "vaultTarget": 5,
      "requireAllSwitches": true
    },
    "parTicks": 11
  },
  {
    "displayId": "10-15",
    "id": "31e70608-d2d8-5714-8eee-3fba590ecdb3",
    "index": 239,
    "chapter": 10,
    "chapterTitle": "第10章 ジェネリック型、トレイト、ライフタイム",
    "stageKind": "puzzle",
    "title": "10-15. impl<T> でダイヤルと金庫を両方扱う器",
    "topicTag": "impl<T> + ダイヤル解錠",
    "kurumiIntro": "金庫の値でもダイヤルの答えでも入れられる汎用ホルダ `VaultKey<T>` に、値を2つとも活かして扉を開けるメソッドを使おう！",
    "goalSummary": "VaultKey<T> から暗証番号 4 と金庫⚡4を取り出して (4, 1) へ",
    "bookSectionTitle": "10.1 & 10.2 ジェネリック型の使い回し",
    "bookSummary": "同じ `Holder<T>` の定義を使って、ダイヤル番号用・歩数用・金庫チャージ用といった異なる目的のデータを綺麗に扱います。",
    "bookKeyCode": "impl<T> Holder<T> { fn inner(&self) -> &T { &self.v } }",
    "starterCode": "struct Holder<T> {\n    v: T,\n}\n\nimpl<T> Holder<T> {\n    fn read(&self) -> &T {\n        &self.v\n    }\n}\n\nfn main() {\n    let key = Holder { v: 4 };\n    let dist = Holder { v: 4 };\n    // *key.read() でダイヤルを解き、*dist.read() で金庫と移動を行おう！\n    add_vault(*dist.read());\n    step(*dist.read());\n}",
    "solutionCode": "struct Holder<T> {\n    v: T,\n}\n\nimpl<T> Holder<T> {\n    fn read(&self) -> &T {\n        &self.v\n    }\n}\n\nfn main() {\n    let key = Holder { v: 4 };\n    let dist = Holder { v: 4 };\n    try_dial(*key.read());\n    add_vault(*dist.read());\n    step(*dist.read());\n}",
    "quickChips": [
      {
        "label": "try_dial(*key.read());",
        "insert": "try_dial(*key.read());\n    "
      }
    ],
    "hints": [
      "key には秘密の番号 4 が入っているのに、まだ `try_dial(...)` を呼んでいないよ！",
      "add_vault の前に `try_dial(*key.read());` を追加しよう。",
      "try_dial(*key.read());"
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
        "secret": 4
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
        "target": 4
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "dialSolved": true,
      "vaultTarget": 4,
      "requireAllSwitches": true
    },
    "parTicks": 7
  },
  {
    "displayId": "10-16",
    "id": "501b44e2-7067-5e83-8742-ecb185d3add7",
    "index": 240,
    "chapter": 10,
    "chapterTitle": "第10章 ジェネリック型、トレイト、ライフタイム",
    "title": "10-16. ライフタイム注釈 'a で参照の寿命を守る",
    "topicTag": "ライフタイム 'a",
    "kurumiIntro": "2つの参照を受け取ってどちらかを返す関数では、参照が途中で消えないことを `'a`（ライフタイム）でコンパイラに教えてあげるんだ！",
    "goalSummary": "pick_max<'a> を使って大きい方の歩数 3 でゴールへ",
    "bookSectionTitle": "10.3 ライフタイムで参照を検証する",
    "bookSummary": "参照同士の寿命関係を `fn f<'a>(x: &'a i32, y: &'a i32) -> &'a i32` のように表します。これにより、無効になった参照（ダングリングポインタ）を絶対に作らせません。",
    "bookKeyCode": "fn pick_max<'a>(a: &'a i32, b: &'a i32) -> &'a i32",
    "starterCode": "fn pick_max<'a>(a: &'a i32, b: &'a i32) -> &'a i32 {\n    if *a > *b { a } else { b }\n}\n\nfn main() {\n    let small = 1;\n    let big = 3;\n    // pick_max に &small と &big を渡して大きい方を歩こう！\n    let chosen = pick_max(&small, &small);\n    step(*chosen);\n}",
    "solutionCode": "fn pick_max<'a>(a: &'a i32, b: &'a i32) -> &'a i32 {\n    if *a > *b { a } else { b }\n}\n\nfn main() {\n    let small = 1;\n    let big = 3;\n    let chosen = pick_max(&small, &big);\n    step(*chosen);\n}",
    "quickChips": [
      {
        "label": "&big",
        "insert": "&big"
      }
    ],
    "hints": [
      "今は pick_max(&small, &small) を呼んでいるから 1 しか返ってこないよ！",
      "2つ目の引数を `&big` にして 3 を選んでもらおう。",
      "let chosen = pick_max(&small, &big);\nstep(*chosen);"
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
    "displayId": "10-17",
    "id": "c0fd3332-442d-55fc-838d-c594d61eb5cc",
    "index": 241,
    "chapter": 10,
    "chapterTitle": "第10章 ジェネリック型、トレイト、ライフタイム",
    "title": "10-17. 最小値を選ぶライフタイム関数",
    "topicTag": "ライフタイム比較関数",
    "kurumiIntro": "今度は2つの参照から「小さい方」を選ぶ `pick_min<'a>` 関数を使おう！安全な制限速度（小さい方＝4）を選んでゴールへ進んでね。",
    "goalSummary": "pick_min<'a> で制限速度 4 を選んでゴール (4, 1) へ",
    "bookSectionTitle": "10.3 関数内のジェネリックライフタイム",
    "bookSummary": "引数の寿命と同じ範囲でしか返り値の参照を生かさないという約束が `<'a>` です。",
    "bookKeyCode": "fn pick_min<'a>(a: &'a i32, b: &'a i32) -> &'a i32",
    "starterCode": "fn pick_min<'a>(a: &'a i32, b: &'a i32) -> &'a i32 {\n    // 小さい方を返すように > を < に直そう！\n    if *a > *b { a } else { b }\n}\n\nfn main() {\n    let limit = 4;\n    let over = 10;\n    let safe = pick_min(&limit, &over);\n    step(*safe);\n}",
    "solutionCode": "fn pick_min<'a>(a: &'a i32, b: &'a i32) -> &'a i32 {\n    if *a < *b { a } else { b }\n}\n\nfn main() {\n    let limit = 4;\n    let over = 10;\n    let safe = pick_min(&limit, &over);\n    step(*safe);\n}",
    "quickChips": [
      {
        "label": "if *a < *b",
        "insert": "if *a < *b"
      }
    ],
    "hints": [
      "今は *a > *b だから大きい方の 10 を返して壁にぶつかっちゃうよ！",
      "if *a < *b { a } else { b } に直そう。",
      "if *a < *b { a } else { b }"
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
      "reachGoal": true
    },
    "parTicks": 4
  },
  {
    "displayId": "10-18",
    "id": "843c371a-ec86-5cad-9cbb-279b2feaee78",
    "index": 242,
    "chapter": 10,
    "chapterTitle": "第10章 ジェネリック型、トレイト、ライフタイム",
    "stageKind": "puzzle",
    "title": "10-18. ライフタイム 'a で2つのセンサー値から選別",
    "topicTag": "ライフタイム + スイッチ",
    "kurumiIntro": "2つの参照値 `&a` と `&b` の中から「ちょうどゴールに届く歩数」をライフタイム注釈付き関数 `choose_exact<'a>` で選び出そう！",
    "goalSummary": "ライフタイム付き pick 関数でスイッチを踏み (4, 1) へ",
    "bookSectionTitle": "10.3 複数の参照を安全に比較・返却する関数",
    "bookSummary": "同じライフタイム `'a` を持つ2つの参照を受け取り、条件に合う方の参照だけを安全に呼び出し元へ返します。",
    "bookKeyCode": "fn choose<'a>(a: &'a i32, b: &'a i32) -> &'a i32",
    "starterCode": "fn choose<'a>(a: &'a i32, b: &'a i32) -> &'a i32 {\n    // a と b のうち 4 に等しい方（あるいは大きい方）を返そう！今は常に a を返してるよ\n    a\n}\n\nfn main() {\n    let wrong = 1;\n    let right = 4;\n    let dist = choose(&wrong, &right);\n    add_vault(*dist);\n    step(*dist);\n}",
    "solutionCode": "fn choose<'a>(a: &'a i32, b: &'a i32) -> &'a i32 {\n    if *a > *b { a } else { b }\n}\n\nfn main() {\n    let wrong = 1;\n    let right = 4;\n    let dist = choose(&wrong, &right);\n    add_vault(*dist);\n    step(*dist);\n}",
    "quickChips": [
      {
        "label": "if *a > *b { a } else { b }",
        "insert": "if *a > *b { a } else { b }"
      }
    ],
    "hints": [
      "wrong = 1、right = 4 だよ！今の choose() は常に a (=1) を返しているね。",
      "if *a > *b { a } else { b } に直すと大きい方 4 の参照が返ってスイッチ経由でゴールできるよ！",
      "if *a > *b { a } else { b }"
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
        "target": 4
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "vaultTarget": 4,
      "requireAllSwitches": true
    },
    "parTicks": 6
  },
  {
    "displayId": "10-19",
    "id": "11ff3b4b-9609-535e-9aa0-286223f193a5",
    "index": 243,
    "chapter": 10,
    "chapterTitle": "第10章 ジェネリック型、トレイト、ライフタイム",
    "title": "10-19. 構造体の中の参照とライフタイム注釈",
    "topicTag": "struct Guide<'a>",
    "kurumiIntro": "構造体が数値の「参照 `&i32`」を持つときも、`struct Guide<'a> { target: &'a i32 }` のようにライフタイムを明記するよ！",
    "goalSummary": "構造体 Guide<'a> が指す参照を読み取って金庫⚡3＋ゴールへ",
    "bookSectionTitle": "10.3 構造体定義のライフタイム注釈",
    "bookSummary": "構造体が所有権ではなく参照を保持する場合は、「その参照先よりも構造体の方が長生きしない」ことを `<'a>` で宣言します。",
    "bookKeyCode": "struct Guide<'a> {\n    target: &'a i32,\n}",
    "starterCode": "struct Guide<'a> {\n    target: &'a i32,\n}\n\nfn main() {\n    let dist = 3;\n    let g = Guide { target: &dist };\n    // *g.target で中身を取り出して金庫と移動に使おう！\n    add_vault(*g.target);\n    \n}",
    "solutionCode": "struct Guide<'a> {\n    target: &'a i32,\n}\n\nfn main() {\n    let dist = 3;\n    let g = Guide { target: &dist };\n    add_vault(*g.target);\n    step(*g.target);\n}",
    "quickChips": [
      {
        "label": "step(*g.target);",
        "insert": "step(*g.target);"
      }
    ],
    "hints": [
      "*g.target は参照先の 3 を読み取るよ！",
      "最後の行に step(*g.target); を追加しよう。",
      "add_vault(*g.target);\nstep(*g.target);"
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
    "displayId": "10-20",
    "id": "49691899-0b21-5dcf-be1b-4c3a581670c6",
    "index": 244,
    "chapter": 10,
    "chapterTitle": "第10章 ジェネリック型、トレイト、ライフタイム",
    "stageKind": "puzzle",
    "title": "10-20. 構造体 RefGuide<'a> と2つの参照ナビ",
    "topicTag": "struct RefGuide<'a>",
    "kurumiIntro": "「横の参照」と「縦の参照」を両方フィールドに持つ構造体 `RefGuide<'a>` を使って、U字・L字の先のゴール `(3, 3)` へ到着しよう！",
    "goalSummary": "RefGuide<'a> が指す2つの参照を読み取り金庫⚡5＋(3, 3)へ",
    "bookSectionTitle": "10.3 複数参照フィールドを持つ構造体とライフタイム",
    "bookSummary": "同じライフタイムパラメータ `'a` を2つの参照フィールドへ割り当てることで、どちらの参照も構造体より長生きすることを保証します。",
    "bookKeyCode": "struct RefGuide<'a> { x: &'a i32, y: &'a i32 }",
    "starterCode": "struct RefGuide<'a> {\n    x: &'a i32,\n    y: &'a i32,\n}\n\nfn main() {\n    let east = 3;\n    let south = 2;\n    let g = RefGuide { x: &east, y: &south };\n    // *g.x + *g.y で金庫⚡5を満たし、L字の(3, 3)へ進もう！\n    step(*g.x);\n}",
    "solutionCode": "struct RefGuide<'a> {\n    x: &'a i32,\n    y: &'a i32,\n}\n\nfn main() {\n    let east = 3;\n    let south = 2;\n    let g = RefGuide { x: &east, y: &south };\n    add_vault(*g.x + *g.y);\n    step(*g.x);\n    turn_right();\n    step(*g.y);\n}",
    "quickChips": [
      {
        "label": "add_vault(*g.x + *g.y);",
        "insert": "add_vault(*g.x + *g.y);\n    "
      },
      {
        "label": "turn_right(); step(*g.y);",
        "insert": "turn_right();\n    step(*g.y);"
      }
    ],
    "hints": [
      "g.x は &3、g.y は &2 を指しているよ！",
      "`add_vault(*g.x + *g.y);` で⚡5を貯め、東に3歩のあと `turn_right(); step(*g.y);` で(3,3)へ！",
      "add_vault(*g.x + *g.y); step(*g.x); turn_right(); step(*g.y);"
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
    "parTicks": 8
  },
  {
    "displayId": "10-21",
    "id": "73901717-26d9-5611-a9ef-6d36f09050ed",
    "index": 245,
    "chapter": 10,
    "chapterTitle": "第10章 ジェネリック型、トレイト、ライフタイム",
    "stageKind": "challenge",
    "title": "10-21. ライフタイム＋空間コア＋スパーク回避",
    "topicTag": "ライフタイム + コア納品",
    "kurumiIntro": "ライフタイム関数 `pick_target<'a>` で目標金庫⚡6を選び出し、スパークが守る強化台を経由してコアを納品しよう！",
    "goalSummary": "pick_target<'a> で金庫⚡6・スパーク突破・コア⚡5+納品を達成",
    "bookSectionTitle": "10.3 ライフタイム参照値と空間工程の結合",
    "bookSummary": "参照から安全に受け取った数値を現場のエネルギー目標へ使いながら、巡回障害物とコア操作を完遂します。",
    "bookKeyCode": "fn pick_target<'a>(a: &'a i32, b: &'a i32) -> &'a i32",
    "starterCode": "fn pick_target<'a>(a: &'a i32, b: &'a i32) -> &'a i32 {\n    if *a > *b { a } else { b }\n}\n\nfn safe_go(n: i32) {\n    for _ in 0..n {\n        while is_spark_ahead() { wait_tick(1); }\n        step();\n    }\n}\n\nfn main() {\n    let low = 2;\n    let high = 6;\n    let target = pick_target(&low, &high);\n    add_vault(*target);\n    // (1,1)コア→(2,1)検査→(3,1)スパーク→(4,1)強化＆スイッチ→(5,1)納品台へ！\n    safe_go(1);\n}",
    "solutionCode": "fn pick_target<'a>(a: &'a i32, b: &'a i32) -> &'a i32 {\n    if *a > *b { a } else { b }\n}\n\nfn safe_go(n: i32) {\n    for _ in 0..n {\n        while is_spark_ahead() { wait_tick(1); }\n        step();\n    }\n}\n\nfn main() {\n    let low = 2;\n    let high = 6;\n    let target = pick_target(&low, &high);\n    add_vault(*target);\n    safe_go(1);\n    let mut c = grab_core();\n    safe_go(1);\n    scan(&c);\n    safe_go(2);\n    boost(&mut c);\n    safe_go(1);\n    deliver(c);\n}",
    "quickChips": [
      {
        "label": "let mut c = grab_core();",
        "insert": "let mut c = grab_core();\n    "
      },
      {
        "label": "scan(&c);",
        "insert": "scan(&c);\n    "
      },
      {
        "label": "boost(&mut c);",
        "insert": "boost(&mut c);\n    "
      },
      {
        "label": "deliver(c);",
        "insert": "deliver(c);"
      }
    ],
    "hints": [
      "safe_go(1) で (1,1) に着いたら grab_core()、次の safe_go(1) で (2,1) 検査台で scan(&c) しよう！",
      "safe_go(2) でスパーク(3,1)を越えて (4,1) 強化台で boost(&mut c)＋スイッチを踏み、safe_go(1); deliver(c); で (5,1) へ！",
      "safe_go(1); scan(&c); safe_go(2); boost(&mut c); safe_go(1); deliver(c);"
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
          "x": 2,
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
      "cores": [
        {
          "id": "c1",
          "x": 1,
          "y": 1,
          "power": 3,
          "label": "寿命コア"
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
    "parTicks": 13
  },
  {
    "displayId": "10-22",
    "id": "455cf048-9f16-530c-9359-1bb15e4b9236",
    "index": 246,
    "chapter": 10,
    "chapterTitle": "第10章 ジェネリック型、トレイト、ライフタイム",
    "stageKind": "puzzle",
    "title": "10-22. Duo<T, U> + ライフタイムで二重スイッチ解錠",
    "topicTag": "<T, U> + <'a> + ダイヤル",
    "kurumiIntro": "異なる2型を持つ `Pair<T, U>` とライフタイム選択関数を合わせて、秘密のダイヤル番号を選び出し、U字コースのスイッチを2つとも踏もう！",
    "goalSummary": "Pair<T, U> と pick<'a> でダイヤル解錠(5)＋全スイッチ＋(0, 3)へ",
    "bookSectionTitle": "10.1 & 10.3 ジェネリクスとライフタイムの組み合わせ",
    "bookSummary": "ジェネリックコンテナで受け取った値の中から、ライフタイム付きの比較関数で最適な参照を選び出す総合演習です。",
    "bookKeyCode": "struct Pair<T, U> { label: T, val: U }",
    "starterCode": "struct Packet<T, U> {\n    tag: T,\n    val: U,\n}\n\nfn pick_big<'a>(a: &'a i32, b: &'a i32) -> &'a i32 {\n    if *a > *b { a } else { b }\n}\n\nfn main() {\n    let p = Packet { tag: \"DIAL_OK\", val: 5 };\n    let fallback = 2;\n    let code = pick_big(&p.val, &fallback);\n    println!(\"{}\", p.tag);\n    try_dial(*code);\n    // (0,1)->東4(4,1)スイッチ->右折->南2(4,3)->右折->西4(0,3)へ！今は途中だよ\n    step(4);\n}",
    "solutionCode": "struct Packet<T, U> {\n    tag: T,\n    val: U,\n}\n\nfn pick_big<'a>(a: &'a i32, b: &'a i32) -> &'a i32 {\n    if *a > *b { a } else { b }\n}\n\nfn main() {\n    let p = Packet { tag: \"DIAL_OK\", val: 5 };\n    let fallback = 2;\n    let code = pick_big(&p.val, &fallback);\n    println!(\"{}\", p.tag);\n    try_dial(*code);\n    step(4);\n    turn_right();\n    step(2);\n    turn_right();\n    step(4);\n}",
    "quickChips": [
      {
        "label": "turn_right(); step(2);",
        "insert": "turn_right();\n    step(2);\n    "
      },
      {
        "label": "turn_right(); step(4);",
        "insert": "turn_right();\n    step(4);"
      }
    ],
    "hints": [
      "step(4) でスイッチ(4,1)を踏んでゲート(4,2)が開くよ！",
      "そこから `turn_right(); step(2);` で(4,3)に下りて、`turn_right(); step(4);` でスイッチ(2,3)を踏みながら(0,3)のゴールへ！",
      "turn_right(); step(2); turn_right(); step(4);"
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
        "x": 0,
        "y": 3
      },
      "dial": {
        "secret": 5
      },
      "switches": [
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 2,
          "y": 3
        }
      ],
      "gates": [
        {
          "x": 4,
          "y": 2,
          "openTicks": 1,
          "closedTicks": 1,
          "linkedSwitch": {
            "x": 4,
            "y": 1
          }
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "dialSolved": true,
      "stdoutIncludes": [
        "DIAL_OK"
      ],
      "requireAllSwitches": true
    },
    "parTicks": 15
  },
  {
    "displayId": "10-23",
    "id": "0bd720eb-7730-583a-a337-672efa528996",
    "index": 247,
    "chapter": 10,
    "chapterTitle": "第10章 ジェネリック型、トレイト、ライフタイム",
    "title": "10-23. 第10章まとめ：ジェネリクス・トレイト・ライフタイム融合",
    "topicTag": "第10章 総合実践",
    "kurumiIntro": "第10章の集大成！ジェネリクス `<T>`・トレイト `Planner`・ライフタイム `<'a>` の3本柱を全部使って、コア納品＋金庫目標を同時にクリアしよう！",
    "goalSummary": "3本柱の設計でコア納品・金庫⚡3・ゴール (3, 1) を達成",
    "bookSectionTitle": "第10章まとめ — 3つの抽象化と安全性",
    "bookSummary": "ジェネリクスで重複をなくし、トレイトで振る舞いを保証し、ライフタイムで参照の安全を守るのがRustの強みです。",
    "bookKeyCode": "fn select<'a>(a: &'a i32, b: &'a i32) -> &'a i32",
    "starterCode": "trait CoreCarrier {\n    fn carry(&self, steps: i32);\n}\n\nstruct CarrierBot<T> {\n    power: T,\n}\n\nimpl<T> CoreCarrier for CarrierBot<T> {\n    fn carry(&self, steps: i32) {\n        let c = grab_core();\n        step(steps);\n        deliver(c);\n    }\n}\n\nfn best<'a>(a: &'a i32, b: &'a i32) -> &'a i32 {\n    if *a > *b { a } else { b }\n}\n\nfn main() {\n    let p1 = 2;\n    let p2 = 3;\n    let top = *best(&p1, &p2);\n    let bot = CarrierBot { power: top };\n    add_vault(bot.power);\n    // bot.carry(top); を呼んでコアを運ぼう！\n    \n}",
    "solutionCode": "trait CoreCarrier {\n    fn carry(&self, steps: i32);\n}\n\nstruct CarrierBot<T> {\n    power: T,\n}\n\nimpl<T> CoreCarrier for CarrierBot<T> {\n    fn carry(&self, steps: i32) {\n        let c = grab_core();\n        step(steps);\n        deliver(c);\n    }\n}\n\nfn best<'a>(a: &'a i32, b: &'a i32) -> &'a i32 {\n    if *a > *b { a } else { b }\n}\n\nfn main() {\n    let p1 = 2;\n    let p2 = 3;\n    let top = *best(&p1, &p2);\n    let bot = CarrierBot { power: top };\n    add_vault(bot.power);\n    bot.carry(top);\n}",
    "quickChips": [
      {
        "label": "bot.carry(top);",
        "insert": "bot.carry(top);"
      }
    ],
    "hints": [
      "top には best(&p1, &p2) で選ばれた 3 が入っているよ！",
      "最後の行に bot.carry(top); を追加しよう。",
      "add_vault(bot.power);\nbot.carry(top);"
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
      "cores": [
        {
          "id": "c1",
          "x": 0,
          "y": 1,
          "power": 3,
          "label": "極上コア"
        }
      ],
      "deliveries": [
        {
          "x": 3,
          "y": 1
        }
      ],
      "vault": {
        "x": 2,
        "y": 0,
        "initial": 0,
        "target": 3
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "deliverCores": 1,
      "vaultTarget": 3
    },
    "parTicks": 6
  },
  {
    "displayId": "10-24",
    "id": "3d87fe8b-b0c2-53a1-bb42-215675cc5c53",
    "index": 248,
    "chapter": 10,
    "chapterTitle": "第10章 ジェネリック型、トレイト、ライフタイム",
    "stageKind": "challenge",
    "title": "10-24. 第10章挑戦：3本柱グランドマスター試験",
    "topicTag": "第10章 最終チャレンジ",
    "kurumiIntro": "第10章の最終試験！`<T>`・`trait`・`impl<T>`・`<'a>` すべてを1つのコードに集結させ、ダイヤル解錠・スパーク回避・全スイッチ・コア⚡5+納品・金庫⚡7を完全達成しよう！",
    "goalSummary": "3本柱でダイヤル(3)・\"CH10_PRO\"・金庫⚡7・コア⚡5+納品・全スイッチを達成",
    "bookSectionTitle": "第10章まとめ — Rust の型抽象の完成形",
    "bookSummary": "ジェネリクス・トレイト・ライフタイムの3つが合わさることで、高い再利用性と絶対的な安全性を両立した設計が完成します。",
    "bookKeyCode": "struct + trait + impl + <'a> 統合",
    "starterCode": "trait MasterMission {\n    fn execute(&self);\n}\n\nstruct Champion<T> {\n    vault_goal: T,\n}\n\nfn select_max<'a>(a: &'a i32, b: &'a i32) -> &'a i32 {\n    if *a > *b { a } else { b }\n}\n\nfn move_safe(n: i32) {\n    for _ in 0..n {\n        while is_spark_ahead() || !is_gate_open() { wait_tick(1); }\n        step();\n    }\n}\n\nimpl MasterMission for Champion<i32> {\n    fn execute(&self) {\n        add_vault(self.vault_goal);\n        println!(\"CH10_PRO\");\n        let k1 = 1;\n        let k2 = 3;\n        try_dial(*select_max(&k1, &k2));\n        // ここから (1,1)コア→(2,1)強化＆スイッチ1→(3,1)スパーク→(4,1)スイッチ2→(5,1)右折→(5,3)納品台へ！\n        move_safe(1);\n    }\n}\n\nfn start<T: MasterMission>(m: &T) {\n    m.execute();\n}\n\nfn main() {\n    let champ = Champion { vault_goal: 7 };\n    start(&champ);\n}",
    "solutionCode": "trait MasterMission {\n    fn execute(&self);\n}\n\nstruct Champion<T> {\n    vault_goal: T,\n}\n\nfn select_max<'a>(a: &'a i32, b: &'a i32) -> &'a i32 {\n    if *a > *b { a } else { b }\n}\n\nfn move_safe(n: i32) {\n    for _ in 0..n {\n        while is_spark_ahead() || !is_gate_open() { wait_tick(1); }\n        step();\n    }\n}\n\nimpl MasterMission for Champion<i32> {\n    fn execute(&self) {\n        add_vault(self.vault_goal);\n        println!(\"CH10_PRO\");\n        let k1 = 1;\n        let k2 = 3;\n        try_dial(*select_max(&k1, &k2));\n        move_safe(1);\n        let mut c = grab_core();\n        move_safe(1);\n        boost(&mut c);\n        move_safe(3);\n        turn_right();\n        move_safe(2);\n        deliver(c);\n    }\n}\n\nfn start<T: MasterMission>(m: &T) {\n    m.execute();\n}\n\nfn main() {\n    let champ = Champion { vault_goal: 7 };\n    start(&champ);\n}",
    "quickChips": [
      {
        "label": "let mut c = grab_core();",
        "insert": "let mut c = grab_core();\n        "
      },
      {
        "label": "boost(&mut c);",
        "insert": "boost(&mut c);\n        "
      },
      {
        "label": "move_safe(3);",
        "insert": "move_safe(3);\n        "
      },
      {
        "label": "deliver(c);",
        "insert": "deliver(c);"
      }
    ],
    "hints": [
      "ダイヤルと金庫⚡7はすでにOK！あとは移動とコア操作を `execute` に書こう！",
      "move_safe(1) でコア取得、(2,1) で boost(&mut c) しつつスイッチ1を踏み、move_safe(3) でスパーク(3,1)とスイッチ2(4,1)を越えて(5,1)へ！",
      "最後は `turn_right(); move_safe(2); deliver(c);` で(5,3)に納品完了だよ！"
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
      "dial": {
        "secret": 3
      },
      "cores": [
        {
          "id": "c1",
          "x": 1,
          "y": 1,
          "power": 3,
          "label": "極限コア"
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
      "deliveries": [
        {
          "x": 5,
          "y": 3
        }
      ],
      "vault": {
        "x": 0,
        "y": 0,
        "initial": 0,
        "target": 7
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
      "dialSolved": true,
      "deliverCores": 1,
      "minCorePower": 5,
      "vaultTarget": 7,
      "stdoutIncludes": [
        "CH10_PRO"
      ],
      "requireAllSwitches": true,
      "requireSpatialCoreRules": true
    },
    "parTicks": 17
  }
];
