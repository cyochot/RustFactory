import { StageDefinition } from '../types/game';

export const CHAPTER_19_STAGES: StageDefinition[] = [
  {
    "displayId": "19-1",
    "id": "63517659-1139-5cc9-9399-c16490d7cf29",
    "index": 377,
    "chapter": 19,
    "chapterTitle": "第19章 高度な機能",
    "title": "19-1. unsafe fn による危険関数の境界管理",
    "topicTag": "unsafe fn",
    "kurumiIntro": "関数そのものに `unsafe fn` が付いている場合は、その関数を呼び出す側も必ず `unsafe { ... }` で囲わないといけないルールなんだ。",
    "goalSummary": "unsafe fn calibrate() を安全境界の中で呼び金庫⚡4＋ゴールへ",
    "bookSectionTitle": "19.1 unsafe な関数またはメソッドを呼ぶ",
    "bookSummary": "呼び出し側に事前条件の保証を求める関数は `unsafe fn` として宣言し、呼び出し場所を `unsafe` ブロックで明示します。",
    "bookKeyCode": "unsafe fn danger() { ... }\nunsafe { danger(); }",
    "starterCode": "unsafe fn calibrate(ptr: i32) -> i32 {\n    let v = *ptr;\n    v / 10\n}\n\nfn main() {\n    let p = raw_pointer_addr();\n    // unsafe { calibrate(p) } のように安全境界で囲もう！\n    let power = calibrate(p);\n    add_vault(power);\n    step(power);\n}",
    "solutionCode": "unsafe fn calibrate(ptr: i32) -> i32 {\n    let v = *ptr;\n    v / 10\n}\n\nfn main() {\n    let p = raw_pointer_addr();\n    let power = unsafe { calibrate(p) };\n    add_vault(power);\n    step(power);\n}",
    "quickChips": [
      {
        "label": "unsafe { calibrate(p) }",
        "insert": "unsafe { calibrate(p) }"
      }
    ],
    "hints": [
      "今は unsafe ブロックの外から `calibrate(p)` を呼んでいるため E0133 エラーが出るよ！",
      "`let power = unsafe { calibrate(p) };` にすると、42 / 10 = 4 を受け取れるよ！",
      "let power = unsafe { calibrate(p) };"
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
    "displayId": "19-2",
    "id": "7e58cc7c-831e-5f71-a098-53511a88fcf7",
    "index": 378,
    "chapter": 19,
    "chapterTitle": "第19章 高度な機能",
    "title": "19-2. 引数つき宣言的マクロ macro_rules!",
    "topicTag": "macro_rules! 引数",
    "kurumiIntro": "自分で作るマクロに引数 `($n:expr)` を渡せるようになると、同じ操作を何度も書かずに短くカッコよく展開できるようになるよ！",
    "goalSummary": "マクロ move_turn!($n) を使ってL字のゴール (3, 3) へ",
    "bookSectionTitle": "19.5 マクロ（macro_rules! によるメタプログラミング）",
    "bookSummary": "宣言的マクロ `macro_rules!` はパターンに応じてコードを自動生成します。`$n:expr` のように式を引数に取ることも可能です。",
    "bookKeyCode": "macro_rules! move_turn { ($n:expr) => { step($n); turn_right(); }; }",
    "starterCode": "macro_rules! move_turn {\n    ($n:expr) => {\n        step($n);\n        turn_right();\n    };\n}\n\nfn main() {\n    move_turn!(3);\n    // 下へ 2 歩進むよう引数に 2 を渡そう！\n    move_turn!(1);\n}",
    "solutionCode": "macro_rules! move_turn {\n    ($n:expr) => {\n        step($n);\n        turn_right();\n    };\n}\n\nfn main() {\n    move_turn!(3);\n    move_turn!(2);\n}",
    "quickChips": [
      {
        "label": "move_turn!(2);",
        "insert": "move_turn!(2);"
      }
    ],
    "hints": [
      "move_turn!(3); で右に3歩進んで下を向くよ。",
      "下の行の `move_turn!(1);` を `move_turn!(2);` にすれば (3, 3) へ届くよ！",
      "move_turn!(3);\nmove_turn!(2);"
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
    "parTicks": 7
  },
  {
    "displayId": "19-3",
    "id": "62c16d48-5006-58eb-a279-15dc4fbab59e",
    "index": 379,
    "chapter": 19,
    "chapterTitle": "第19章 高度な機能",
    "title": "19-3. unsafe ブロックと生ポインタ調律",
    "topicTag": "unsafe / 生ポインタ",
    "kurumiIntro": "工房の奥にある特別な調律室だよ！生ポインタ `*ptr` を読むような危険な操作は、`unsafe { ... }` で「ここは僕が責任を持つよ！」と囲う必要があるんだ。",
    "goalSummary": "unsafe ブロックで生ポインタを読み取り、マクロも使ってゴールへ",
    "bookSectionTitle": "19.1 & 19.5 Unsafe Rust と宣言的マクロ",
    "bookSummary": "生ポインタの参照外しなどの低レベル操作は `unsafe { ... }` ブロック内に閉じ込めて安全境界を守ります。また `macro_rules!` を使うと自分のマクロも作れます。",
    "bookKeyCode": "let val = unsafe { *ptr };",
    "starterCode": "macro_rules! walk_three {\n    () => { step(3); };\n}\n\nfn main() {\n    let ptr = raw_pointer_addr();\n    // ↓ このまま *ptr を読むと unsafe が必要というエラーが出るよ！\n    let cal = *ptr;\n    println!(\"CALIBRATION: {}\", cal);\n    walk_three!();\n}",
    "solutionCode": "macro_rules! walk_three {\n    () => { step(3); };\n}\n\nfn main() {\n    let ptr = raw_pointer_addr();\n    let cal = unsafe { *ptr };\n    println!(\"CALIBRATION: {}\", cal);\n    walk_three!();\n}",
    "quickChips": [
      {
        "label": "unsafe { *ptr }",
        "insert": "unsafe { *ptr }"
      }
    ],
    "hints": [
      "試しに実行すると「生ポインタの参照外し *ptr には unsafe ブロックが必要です」と出るよ！",
      "let cal = unsafe { *ptr }; に囲んでみよう。walk_three!() マクロが 3歩進めてくれるよ！",
      "let cal = unsafe { *ptr };"
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
        "42"
      ]
    },
    "parTicks": 3
  },
  {
    "displayId": "19-4",
    "id": "62a4650f-fe84-5fda-836a-c0036f5ffe9b",
    "index": 380,
    "chapter": 19,
    "chapterTitle": "第19章 高度な機能",
    "title": "19-4. 第19章総合：精密時計台の unsafe＆マクロ調律",
    "topicTag": "unsafe + マクロ総合",
    "kurumiIntro": "第19章の仕上げだよ！`unsafe` で生ポインタの調律値 `42` を確かめ、マクロ `boost_walk!` で一気にゲートを越えて時計台の調律を完成させよう！",
    "goalSummary": "unsafe 調律＋マクロ展開で出力 \"42\"・金庫⚡5・(5, 1) へ",
    "bookSectionTitle": "第19章 高度な機能 総合演習",
    "bookSummary": "低レベルな安全境界を `unsafe` に閉じ込めつつ、よく使う操作をマクロで抽象化することで、堅牢さと表現力を両立できます。",
    "bookKeyCode": "let val = unsafe { *ptr }; boost_walk!(5);",
    "starterCode": "macro_rules! boost_walk {\n    ($n:expr) => {\n        add_vault($n);\n        step($n);\n    };\n}\n\nfn main() {\n    let ptr = raw_pointer_addr();\n    // unsafe { *ptr } で 42 を読み取って出力しよう！\n    let cal = *ptr;\n    println!(\"CLOCK_CAL: {}\", cal);\n    boost_walk!(5);\n}",
    "solutionCode": "macro_rules! boost_walk {\n    ($n:expr) => {\n        add_vault($n);\n        step($n);\n    };\n}\n\nfn main() {\n    let ptr = raw_pointer_addr();\n    let cal = unsafe { *ptr };\n    println!(\"CLOCK_CAL: {}\", cal);\n    boost_walk!(5);\n}",
    "quickChips": [
      {
        "label": "unsafe { *ptr }",
        "insert": "unsafe { *ptr }"
      }
    ],
    "hints": [
      "*ptr を unsafe ブロックの外で読んでいるためエラーになっているよ。",
      "`let cal = unsafe { *ptr };` に囲むと、時計調律 \"42\" を出力しつつスイッチ(2, 1)を踏んでゲート(3, 1)を抜けられるよ！",
      "let cal = unsafe { *ptr };"
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
      "stdoutIncludes": [
        "42"
      ]
    },
    "parTicks": 6
  }
];
