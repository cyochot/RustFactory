import { StageDefinition } from '../types/game';

export const CHAPTER_19_STAGES: StageDefinition[] = [
  {
    "displayId": "19-1",
    "id": "63517659-1139-5cc9-9399-c16490d7cf29",
    "index": 389,
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
    "index": 390,
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
    "index": 391,
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
    "id": "f9172fa9-d983-468d-878a-23e0877fb16e",
    "index": 392,
    "chapter": 19,
    "chapterTitle": "第19章 高度な機能",
    "stageKind": "puzzle",
    "title": "19-4. unsafe 読み取り＋安全歩行マクロでコア納品",
    "topicTag": "unsafe fn + macro_rules! + 空間コア",
    "kurumiIntro": "`raw_pointer_addr()` で得た基準アドレスを `unsafe fn` で読み取ってダイヤル(4)を解き、自分で定義したマクロ `safe_walk!($n)` で巡回スパークを見張りながら空間コアを検査・強化して納品しよう！",
    "goalSummary": "unsafe 調律＋ダイヤル(4)＋マクロ歩行でコア検査＆強化⚡4+納品",
    "bookSectionTitle": "19.1 & 19.5 安全境界と汎用マクロの実戦組み合わせ",
    "bookSummary": "`unsafe fn` は必ず `unsafe { ... }` 内で呼び、繰り返し使う安全歩行ロジックは引数付き `macro_rules!` にまとめて見通し良く書きます。",
    "bookKeyCode": "let code = unsafe { read_cal(ptr) };\nsafe_walk!(2);",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "unsafe fn read_cal(ptr: i32) -> i32 {\n    let v = *ptr;\n    v / 10\n}\n\nmacro_rules! safe_walk {\n    ($n:expr) => {\n        for _ in 0..$n {\n            while is_spark_ahead() {\n                wait_tick(1);\n            }\n            step();\n        }\n    };\n}\n\nfn main() {\n    let ptr = raw_pointer_addr();\n    let code = unsafe { read_cal(ptr) };\n    try_dial(code);\n    safe_walk!(1);\n    let mut core = grab_core();\n    safe_walk!(1);\n    scan(&core);\n    safe_walk!(2);\n    boost(&mut core);\n    safe_walk!(1);\n    deliver(core);\n}",
    "quickChips": [
      {
        "label": "unsafe { read_cal(ptr) }",
        "insert": "unsafe { read_cal(ptr) }"
      },
      {
        "label": "safe_walk!(2);",
        "insert": "safe_walk!(2);"
      }
    ],
    "hints": [
      "`raw_pointer_addr()` のポインタを `unsafe` ブロック内で `read_cal` に渡して `42 / 10 = 4` でダイヤル解錠しよう。そのあと検査(2, 1)→スパーク(3, 1)待ち→強化(4, 1)⚡4+→納品(5, 1)へ！",
      "`unsafe fn read_cal(ptr: i32) -> i32 { *ptr / 10 }` と `macro_rules! safe_walk` を定義し、`unsafe { read_cal(raw_pointer_addr()) }` で `try_dial` 後、`safe_walk!` で1歩取得→1歩 `scan`→2歩 `boost`→1歩 `deliver` しよう。",
      "unsafe fn read_cal(ptr: i32) -> i32 {\n    let v = *ptr;\n    v / 10\n}\n\nmacro_rules! safe_walk {\n    ($n:expr) => {\n        for _ in 0..$n {\n            while is_spark_ahead() {\n                wait_tick(1);\n            }\n            step();\n        }\n    };\n}\n\nfn main() {\n    let ptr = raw_pointer_addr();\n    let code = unsafe { read_cal(ptr) };\n    try_dial(code);\n    safe_walk!(1);\n    let mut core = grab_core();\n    safe_walk!(1);\n    scan(&core);\n    safe_walk!(2);\n    boost(&mut core);\n    safe_walk!(1);\n    deliver(core);\n}"
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
      "cores": [
        {
          "id": "c1",
          "x": 1,
          "y": 1,
          "power": 2,
          "label": "調律コア"
        }
      ],
      "scanners": [
        {
          "x": 2,
          "y": 1
        }
      ],
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
              "y": 1
            }
          ],
          "initialIndex": 0
        }
      ],
      "chargers": [
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
      "dial": {
        "x": 1,
        "y": 0,
        "secret": 4
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "deliverCores": 1,
      "minCorePower": 4,
      "scanCount": 1,
      "dialSolved": true,
      "requireSpatialCoreRules": true
    },
    "parTicks": 11
  },
  {
    "displayId": "19-5",
    "id": "62a4650f-fe84-5fda-836a-c0036f5ffe9b",
    "index": 393,
    "chapter": 19,
    "chapterTitle": "第19章 高度な機能",
    "title": "19-5. 第19章総合：精密時計台の unsafe＆マクロ調律",
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
  },
  {
    "displayId": "19-6",
    "id": "b3d7741f-6177-4912-9bea-dfde3435ddf3",
    "index": 394,
    "chapter": 19,
    "chapterTitle": "第19章 高度な機能",
    "stageKind": "challenge",
    "title": "19-6. 第19章マスター：時計台完全調律＆複数マクロ統合",
    "topicTag": "第19章 最終チャレンジ",
    "kurumiIntro": "第19章の最終チャレンジ！`raw_pointer_addr()` と `unsafe fn` で生ポインタ値を読み取り、`#[test]` と2種類の `macro_rules!` と `#[cfg(feature = \"fast\")]` を駆使して、ダイヤル(4)・金庫⚡42・スイッチ・ゲート・スパーク・空間コア納品を18ティック以内に決めよう！",
    "goalSummary": "テスト合格・\"42\" 出力・ダイヤル(4)・金庫⚡42・全スイッチ・コア⚡4+納品を18ティック以内に達成",
    "bookSectionTitle": "第19章マスター — Unsafe境界とマクロ抽象の頂点",
    "bookSummary": "生ポインタ操作を `unsafe fn` の安全境界へ閉じ込め、複数の宣言的マクロでボイラープレートを排除し、テストと制限時間の中で高速動作を証明します。",
    "bookKeyCode": "unsafe fn + setup_vault! + safe_advance! + #[test] + #[cfg(feature = \"fast\")]",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "unsafe fn sample(ptr: i32) -> i32 {\n    *ptr\n}\n\nfn dial_key(v: i32) -> i32 {\n    v / 10\n}\n\n#[test]\nfn t_key() {\n    assert_eq!(dial_key(42), 4);\n}\n\nmacro_rules! setup_vault {\n    ($v:expr) => {\n        add_vault($v);\n        println!(\"RAW: {}\", $v);\n    };\n}\n\nmacro_rules! safe_advance {\n    ($n:expr) => {\n        for _ in 0..$n {\n            while !is_gate_open() || is_spark_ahead() {\n                wait_tick(1);\n            }\n            step();\n        }\n    };\n}\n\n#[cfg(feature = \"fast\")]\nfn main() {\n    let p = raw_pointer_addr();\n    let raw = unsafe { sample(p) };\n    setup_vault!(raw);\n    try_dial(dial_key(raw));\n    safe_advance!(1);\n    let mut core = grab_core();\n    safe_advance!(1);\n    scan(&core);\n    safe_advance!(4);\n    boost(&mut core);\n    safe_advance!(1);\n    deliver(core);\n}",
    "quickChips": [
      {
        "label": "v / 10",
        "insert": "v / 10"
      },
      {
        "label": "unsafe { sample(p) }",
        "insert": "unsafe { sample(p) }"
      },
      {
        "label": "boost(&mut core);",
        "insert": "boost(&mut core);\n    "
      }
    ],
    "hints": [
      "18ティック以内にクリアするため `#[cfg(feature = \"fast\")]` と `#[test]` を用意し、`unsafe` で生ポインタ値 `42` を読んで金庫⚡42＆ログ出力、さらに `42 / 10 = 4` でダイヤル(4)を解錠しよう。",
      "`macro_rules! setup_vault`（`add_vault` と `println!(\"RAW: {}\", $v)`）と `macro_rules! safe_advance`（ゲート＆スパーク待機歩行）を作り、1歩取得→1歩 `scan`→4歩 `boost`→1歩 `deliver` しよう。",
      "unsafe fn sample(ptr: i32) -> i32 {\n    *ptr\n}\n\nfn dial_key(v: i32) -> i32 {\n    v / 10\n}\n\n#[test]\nfn t_key() {\n    assert_eq!(dial_key(42), 4);\n}\n\nmacro_rules! setup_vault {\n    ($v:expr) => {\n        add_vault($v);\n        println!(\"RAW: {}\", $v);\n    };\n}\n\nmacro_rules! safe_advance {\n    ($n:expr) => {\n        for _ in 0..$n {\n            while !is_gate_open() || is_spark_ahead() {\n                wait_tick(1);\n            }\n            step();\n        }\n    };\n}\n\n#[cfg(feature = \"fast\")]\nfn main() {\n    let p = raw_pointer_addr();\n    let raw = unsafe { sample(p) };\n    setup_vault!(raw);\n    try_dial(dial_key(raw));\n    safe_advance!(1);\n    let mut core = grab_core();\n    safe_advance!(1);\n    scan(&core);\n    safe_advance!(4);\n    boost(&mut core);\n    safe_advance!(1);\n    deliver(core);\n}"
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
          "label": "極限コア"
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
        "secret": 4
      },
      "vault": {
        "x": 2,
        "y": 0,
        "initial": 0,
        "target": 42
      },
      "featureFastMaxTicks": 18
    },
    "victoryCondition": {
      "reachGoal": true,
      "deliverCores": 1,
      "minCorePower": 4,
      "scanCount": 1,
      "dialSolved": true,
      "vaultTarget": 42,
      "testsRequired": 1,
      "stdoutIncludes": [
        "42"
      ],
      "requireAllSwitches": true,
      "requireSpatialCoreRules": true,
      "maxTicks": 18
    },
    "parTicks": 16
  }
];
