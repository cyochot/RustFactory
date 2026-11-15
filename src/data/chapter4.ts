import { StageDefinition } from '../types/game';

export const CHAPTER_4_STAGES: StageDefinition[] = [
  {
    "id": "ea2c70b1-4a0b-5616-b4ad-ba8449d43429",
    "displayId": "4-1",
    "index": 17,
    "chapter": 4,
    "chapterTitle": "第4章 高度な機能",
    "stageKind": "basic",
    "title": "4-1. 連動スイッチの順序制御",
    "topicTag": "状態遷移 / スイッチ / ゲート",
    "kurumiIntro": "スイッチを踏むとゲートが開くよ。作動条件を満たしてから出口へ向かおう。",
    "goalSummary": "スイッチ (1, 1) を作動させてゴール (4, 1) へ",
    "bookSectionTitle": "状態遷移を条件にした経路設計",
    "bookSummary": "スイッチの状態変化を利用して、閉じたゲートを通過できます。",
    "bookKeyCode": "step(); // スイッチを作動させてから進む",
    "starterCode": "fn main() {\n    step(3);\n}",
    "solutionCode": "fn main() {\n    step(4);\n}",
    "quickChips": [
      {
        "label": "解法の式",
        "insert": "    step(4);"
      }
    ],
    "hints": [
      "ゲートはスイッチと連動しているよ。",
      "スイッチを先に踏むルートを組もう。",
      "fn main() {\n    step(4);\n}"
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
          "closedTicks": 0,
          "linkedSwitch": {
            "x": 1,
            "y": 1
          }
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "requireAllSwitches": true
    },
    "parTicks": 4
  },
  {
    "id": "f097b407-b547-5f31-90f7-d20b5e3d0141",
    "displayId": "4-2",
    "index": 18,
    "chapter": 4,
    "chapterTitle": "第4章 高度な機能",
    "stageKind": "basic",
    "title": "4-2. 二段コンベアの最短経路",
    "topicTag": "経路最適化 / コンベア",
    "kurumiIntro": "コンベアの押し出しを見越して、制限ティック内の経路を組み立てよう。",
    "goalSummary": "二つのコンベアを使い4ティック以内にゴール",
    "bookSectionTitle": "環境ギミックを利用した最適化",
    "bookSummary": "移動先の環境を先読みすると、少ない操作で長い距離を進めます。",
    "bookKeyCode": "step(3); // コンベアの押し出しを計算",
    "starterCode": "fn main() {\n    step(2);\n}",
    "solutionCode": "fn main() {\n    step(3);\n}",
    "quickChips": [
      {
        "label": "解法の式",
        "insert": "    step(3);"
      }
    ],
    "hints": [
      "矢印は東向きだよ。",
      "コンベアに乗ると同じティックで1マス進むよ。",
      "fn main() {\n    step(3);\n}"
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
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "maxTicks": 4
    },
    "parTicks": 4
  },
  {
    "id": "63df2438-d620-5ce9-86bc-c3703825cf8f",
    "displayId": "4-3",
    "index": 19,
    "chapter": 4,
    "chapterTitle": "第4章 高度な機能",
    "stageKind": "challenge",
    "title": "4-3. 出口までの距離を読み解く",
    "topicTag": "観察 / 経路設計",
    "kurumiIntro": "盤面の幅を観察して、開始地点から出口までの移動計画を立てよう。",
    "goalSummary": "最短の直線経路で (4, 1) へ到達",
    "bookSectionTitle": "盤面から移動量を導く",
    "bookSummary": "開始座標とゴール座標の差から必要な移動回数を計算します。",
    "bookKeyCode": "step(4);",
    "starterCode": "fn main() {\n    step(3);\n}",
    "solutionCode": "fn main() {\n    step(4);\n}",
    "quickChips": [
      {
        "label": "解法の式",
        "insert": "    step(4);"
      }
    ],
    "hints": [
      "開始地点からゴールまでは4マスだよ。",
      "足りない移動分を補おう。",
      "fn main() {\n    step(4);\n}"
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
      }
    },
    "victoryCondition": {
      "reachGoal": true
    },
    "parTicks": 4
  },
  {
    "id": "d4f31eb7-b8cb-5fc1-aa63-9023f9844fc4",
    "displayId": "4-4",
    "index": 38,
    "chapter": 4,
    "chapterTitle": "第4章 高度な機能",
    "stageKind": "basic",
    "title": "4-4. 金庫と経路を同時に設計",
    "topicTag": "状態管理 / 金庫 / 経路設計",
    "kurumiIntro": "必要な出力を変数で管理し、金庫を満たしてから最短経路でゴールしよう。",
    "goalSummary": "金庫⚡3を満たして (3, 1) へ到達",
    "bookSectionTitle": "状態を計算してから行動する",
    "bookSummary": "計算結果を変数に保持し、複数の工房操作へ再利用できます。",
    "bookKeyCode": "let power = 3;\nadd_vault(power);",
    "starterCode": "fn main() {\n    add_vault(2);\n    step(3);\n}",
    "solutionCode": "fn main() {\n    let power = 3;\n    add_vault(power);\n    step(3);\n}",
    "quickChips": [
      {
        "label": "解法の式",
        "insert": "    let power = 3;\n    add_vault(power);\n    step(3);"
      }
    ],
    "hints": [
      "金庫の目標は⚡3だよ。",
      "値を変数に入れて金庫へ加えよう。",
      "fn main() {\n    let power = 3;\n    add_vault(power);\n    step(3);\n}"
    ],
    "worldSetup": {
      "width": 4,
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
        "x": 0,
        "y": 0,
        "initial": 0,
        "target": 3
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "vaultTarget": 3
    },
    "parTicks": 3
  },
  {
    "id": "3b75de6b-d0a6-5d91-a833-71112fe89425",
    "displayId": "4-5",
    "index": 64,
    "chapter": 4,
    "chapterTitle": "第4章 高度な機能",
    "stageKind": "puzzle",
    "title": "4-5. 関数へ経路を分割",
    "topicTag": "関数 / パラメーター",
    "kurumiIntro": "移動処理を関数にまとめ、渡された距離を正しく実行しよう。",
    "goalSummary": "travel 関数で (3, 1) へ到達",
    "bookSectionTitle": "関数に手順をまとめる",
    "bookSummary": "引数で操作量を受け取る関数を作ると、手順を再利用できます。",
    "bookKeyCode": "fn travel(n: i32) { step(n); }",
    "starterCode": "fn travel(n: i32) {\n    step(n - 1);\n}\nfn main() { travel(3); }",
    "solutionCode": "fn travel(n: i32) {\n    step(n);\n}\nfn main() { travel(3); }",
    "quickChips": [
      {
        "label": "解法の式",
        "insert": "fn travel(n: i32) {\n    step(n);\n}\nfn main() { travel(3); "
      }
    ],
    "hints": [
      "travel の中で n を使っているよ。",
      "渡された距離と同じ数だけ進もう。",
      "fn travel(n: i32) {\n    step(n);\n}\nfn main() { travel(3); }"
    ],
    "worldSetup": {
      "width": 4,
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
    "id": "2ed6f4f3-91b7-5f1c-9f1c-9ce8d214193d",
    "displayId": "4-6",
    "index": 93,
    "chapter": 4,
    "chapterTitle": "第4章 高度な機能",
    "stageKind": "puzzle",
    "title": "4-6. 反復処理で距離を走破",
    "topicTag": "for / 反復制御",
    "kurumiIntro": "同じ操作を繰り返すループを組み、必要な距離だけ走り切ろう。",
    "goalSummary": "ループで6マス進みゴールへ到達",
    "bookSectionTitle": "反復回数を設計する",
    "bookSummary": "for ループの範囲を決めると、同じ操作を安全に繰り返せます。",
    "bookKeyCode": "for _ in 0..6 { step(); }",
    "starterCode": "fn main() {\n    for _ in 0..5 { step(); }\n}",
    "solutionCode": "fn main() {\n    for _ in 0..6 { step(); }\n}",
    "quickChips": [
      {
        "label": "解法の式",
        "insert": "    for _ in 0..6 { step(); }"
      }
    ],
    "hints": [
      "ループの終端は含まれないよ。",
      "0..6 なら6回実行するよ。",
      "fn main() {\n    for _ in 0..6 { step(); }\n}"
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
        "x": 6,
        "y": 1
      }
    },
    "victoryCondition": {
      "reachGoal": true
    },
    "parTicks": 6
  },
  {
    "displayId": "4-7",
    "id": "62c16d48-5006-58eb-a279-15dc4fbab59e",
    "index": 377,
    "chapter": 4,
    "chapterTitle": "第4章 高度な機能",
    "title": "4-7. unsafe ブロックと生ポインタ調律",
    "topicTag": "unsafe / 生ポインタ",
    "kurumiIntro": "工房の奥にある特別な調律室だよ！生ポインタ `*ptr` を読むような危険な操作は、`unsafe { ... }` で「ここは僕が責任を持つよ！」と囲う必要があるんだ。",
    "goalSummary": "unsafe ブロックで生ポインタを読み取り、マクロも使ってゴールへ",
    "bookSectionTitle": "4.1 & 4.5 Unsafe Rust と宣言的マクロ",
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
    "displayId": "4-8",
    "id": "63517659-1139-5cc9-9399-c16490d7cf29",
    "index": 378,
    "chapter": 4,
    "chapterTitle": "第4章 高度な機能",
    "title": "4-8. unsafe fn による危険関数の境界管理",
    "topicTag": "unsafe fn",
    "kurumiIntro": "関数そのものに `unsafe fn` が付いている場合は、その関数を呼び出す側も必ず `unsafe { ... }` で囲わないといけないルールなんだ。",
    "goalSummary": "unsafe fn calibrate() を安全境界の中で呼び金庫⚡4＋ゴールへ",
    "bookSectionTitle": "4.1 unsafe な関数またはメソッドを呼ぶ",
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
    "displayId": "4-9",
    "id": "7e58cc7c-831e-5f71-a098-53511a88fcf7",
    "index": 379,
    "chapter": 4,
    "chapterTitle": "第4章 高度な機能",
    "title": "4-9. 引数つき宣言的マクロ macro_rules!",
    "topicTag": "macro_rules! 引数",
    "kurumiIntro": "自分で作るマクロに引数 `($n:expr)` を渡せるようになると、同じ操作を何度も書かずに短くカッコよく展開できるようになるよ！",
    "goalSummary": "マクロ move_turn!($n) を使ってL字のゴール (3, 3) へ",
    "bookSectionTitle": "4.5 マクロ（macro_rules! によるメタプログラミング）",
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
    "displayId": "4-10",
    "id": "62a4650f-fe84-5fda-836a-c0036f5ffe9b",
    "index": 380,
    "chapter": 4,
    "chapterTitle": "第4章 高度な機能",
    "title": "4-10. 第4章総合：精密時計台の unsafe＆マクロ調律",
    "topicTag": "unsafe + マクロ総合",
    "kurumiIntro": "第4章の仕上げだよ！`unsafe` で生ポインタの調律値 `42` を確かめ、マクロ `boost_walk!` で一気にゲートを越えて時計台の調律を完成させよう！",
    "goalSummary": "unsafe 調律＋マクロ展開で出力 \"42\"・金庫⚡5・(5, 1) へ",
    "bookSectionTitle": "第4章 高度な機能 総合演習",
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


