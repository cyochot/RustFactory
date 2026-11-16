import { StageDefinition } from '../types/game';

export const CHAPTER_9_STAGES: StageDefinition[] = [
  {
    "displayId": "9-1",
    "id": "30b7ab6e-c1d6-5da6-b49c-1d325b5fcc04",
    "index": 201,
    "chapter": 9,
    "chapterTitle": "第9章 エラー処理",
    "title": "9-1. panic! と安全なエラー回避",
    "topicTag": "panic! / unwrap_or",
    "kurumiIntro": "エラー処理の章が始まるよ！壊れた部品に `.unwrap()` を使うとロボットがパニック停止しちゃうんだ。`.unwrap_or(3)` で安全に予備の値を使おう！",
    "goalSummary": "パニックを回避して 3歩進み、ゴール (3, 1) へ着こう",
    "bookSectionTitle": "9.1 panic! による回復不能なエラー処理",
    "bookSummary": "失敗する可能性のある値に無条件で `.unwrap()` を使うと、エラー時にプログラムが `panic!` して緊急停止します。安全な初期値を返す `.unwrap_or(予備値)` などが有効です。",
    "bookKeyCode": "let steps = read_part(-1).unwrap_or(3);",
    "starterCode": "fn main() {\n    // read_part(-1) は Err を返すから .unwrap() すると止まっちゃう！\n    let steps = read_part(-1).unwrap();\n    step(steps);\n}",
    "solutionCode": "fn main() {\n    let steps = read_part(-1).unwrap_or(3);\n    step(steps);\n}",
    "quickChips": [
      {
        "label": ".unwrap_or(3)",
        "insert": ".unwrap_or(3)"
      }
    ],
    "hints": [
      "試しに実行すると「エラー値（Err）に対して .unwrap() を呼んだためパニック停止」と出るよ。",
      ".unwrap() を .unwrap_or(3) に書き換えてみよう！",
      "let steps = read_part(-1).unwrap_or(3);\nstep(steps);"
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
    "displayId": "9-2",
    "id": "31f89893-aee2-53ab-9ede-48b08dee2dd9",
    "index": 202,
    "chapter": 9,
    "chapterTitle": "第9章 エラー処理",
    "title": "9-2. 壊れたセンサーと正常センサーの合算",
    "topicTag": "unwrap_or 複合",
    "kurumiIntro": "1つめのセンサー `read_part(1)` は正常（`Ok(10)`）、2つめのセンサー `read_part(-2)` は故障中（`Err`）だよ！`unwrap_or` でどちらも安全に読み取ろう。",
    "goalSummary": "正常値と予備値を使って 4歩進みゴール (4, 1) へ",
    "bookSectionTitle": "9.1 正常と異常が混ざる場合のフォールバック",
    "bookSummary": "`Result` に対して `.unwrap_or(既定値)` を使うと、`Ok(v)` のときは中身 `v` をそのまま取り出し、`Err` のときだけ既定値を使えます。",
    "bookKeyCode": "let a = read_part(1).unwrap_or(0) / 10;\nlet b = read_part(-2).unwrap_or(3);",
    "starterCode": "fn main() {\n    let a = read_part(1).unwrap_or(0) / 10;\n    // 故障中の read_part(-2) には予備の値 3 を使おう！\n    let b = read_part(-2).unwrap();\n    step(a + b);\n}",
    "solutionCode": "fn main() {\n    let a = read_part(1).unwrap_or(0) / 10;\n    let b = read_part(-2).unwrap_or(3);\n    step(a + b);\n}",
    "quickChips": [
      {
        "label": ".unwrap_or(3)",
        "insert": ".unwrap_or(3)"
      }
    ],
    "hints": [
      "a は read_part(1) が Ok(10) を返すから 10 / 10 = 1 になるよ！",
      "b を read_part(-2).unwrap_or(3) にすると 1 + 3 = 4 歩進めるよ！",
      "let b = read_part(-2).unwrap_or(3);"
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
    "displayId": "9-3",
    "id": "0c8e7fea-a205-584d-9f37-d4d0f1659487",
    "index": 203,
    "chapter": 9,
    "chapterTitle": "第9章 エラー処理",
    "title": "9-3. フォールバック値で金庫とL字ルート",
    "topicTag": "unwrap_or + L字ルート",
    "kurumiIntro": "L字コースの横と縦の距離をセンサーから読み取ろう！縦のセンサーが壊れているから `.unwrap_or(2)` で補ってね。",
    "goalSummary": "金庫⚡3を満たして L字ゴール (3, 3) へ進もう",
    "bookSectionTitle": "9.1 安全な既定値による継続運転",
    "bookSummary": "プログラムを丸ごと止めずに安全なバックアップ値へ切り替えることで、現場の機械を止めずに動かし続けられます。",
    "bookKeyCode": "let dy = read_part(-1).unwrap_or(2);",
    "starterCode": "fn main() {\n    let dx = read_part(3).unwrap_or(1) / 10;\n    let dy = read_part(-1).unwrap_or(0);\n    add_vault(dx);\n    step(dx);\n    turn_right();\n    // dy が 2 になるように直してゴール (3, 3) へ！\n    step(dy);\n}",
    "solutionCode": "fn main() {\n    let dx = read_part(3).unwrap_or(1) / 10;\n    let dy = read_part(-1).unwrap_or(2);\n    add_vault(dx);\n    step(dx);\n    turn_right();\n    step(dy);\n}",
    "quickChips": [
      {
        "label": ".unwrap_or(2)",
        "insert": ".unwrap_or(2)"
      }
    ],
    "hints": [
      "dx は 30 / 10 = 3 だから金庫⚡3と東への3歩はバッチリ！でも dy が unwrap_or(0) になっているよ。",
      "unwrap_or(0) を unwrap_or(2) に直そう。",
      "let dy = read_part(-1).unwrap_or(2);"
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
        "target": 3
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "vaultTarget": 3
    },
    "parTicks": 7
  },
  {
    "displayId": "9-4",
    "id": "d0ae5f54-2197-50fa-9847-9d1206122074",
    "index": 204,
    "chapter": 9,
    "chapterTitle": "第9章 エラー処理",
    "title": "9-4. Result<T, E> を match で受け止める",
    "topicTag": "Result / Ok / Err",
    "kurumiIntro": "正常なら `Ok(値)`、失敗なら `Err(理由)` が返ってくる `Result` 型を `match` でやさしく受け止めよう！",
    "goalSummary": "Result の Ok(v) を受け取りゴール (3, 1) へ進もう",
    "bookSectionTitle": "9.2 Result による回復可能なエラー処理",
    "bookSummary": "失敗しうる処理の戻り値 `Result<T, E>` は `Ok(成功値)` か `Err(エラー)` のどちらかになります。`match` で両方を丁寧に分岐処理するのがRustの基本です。",
    "bookKeyCode": "match read_part(3) {\n    Ok(v) => step(v / 10),\n    Err(e) => println!(\"エラー: {}\", e),\n}",
    "starterCode": "fn main() {\n    match read_part(3) {\n        Ok(v) => {\n            // read_part(3) は Ok(30) を返すよ！10で割って3歩進もう\n            \n        },\n        Err(e) => println!(\"異常: {}\", e),\n    }\n}",
    "solutionCode": "fn main() {\n    match read_part(3) {\n        Ok(v) => {\n            step(v / 10);\n        },\n        Err(e) => println!(\"異常: {}\", e),\n    }\n}",
    "quickChips": [
      {
        "label": "step(v / 10);",
        "insert": "step(v / 10);\n            "
      }
    ],
    "hints": [
      "Ok(v) の中の v には 30 が入っているよ！",
      "step(v / 10); を Ok(v) の { ... } の中に書こう。",
      "Ok(v) => {\n    step(v / 10);\n},"
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
    "displayId": "9-5",
    "id": "7b9aba47-b647-55a6-ac6f-bb5628471879",
    "index": 205,
    "chapter": 9,
    "chapterTitle": "第9章 エラー処理",
    "title": "9-5. Err のときに安全な代替運転へ切替",
    "topicTag": "match Result の Err 回復",
    "kurumiIntro": "今度は `read_part(-3)` が `Err` を返す場面だよ！`Err(e)` の枝で `\"RECOVERY\"` と報告してから、予備パワーで金庫を満たして進もう。",
    "goalSummary": "Err時に \"RECOVERY\" を出力し、金庫⚡3＋ゴール (3, 1) へ",
    "bookSectionTitle": "9.2 エラーの種類に応じた回復処理",
    "bookSummary": "`match` で `Err(e)` を受け取れば、エラー内容を表示してログを残しつつ、代替ルートで安全に処理を完遂できます。",
    "bookKeyCode": "Err(e) => {\n    println!(\"RECOVERY: {}\", e);\n    step(3);\n}",
    "starterCode": "fn main() {\n    match read_part(-3) {\n        Ok(v) => step(v / 10),\n        Err(e) => {\n            // \"RECOVERY\" を含むメッセージを表示して、金庫⚡3・3歩進もう！\n            println!(\"SKIP: {}\", e);\n            add_vault(3);\n            step(3);\n        },\n    }\n}",
    "solutionCode": "fn main() {\n    match read_part(-3) {\n        Ok(v) => step(v / 10),\n        Err(e) => {\n            println!(\"RECOVERY: {}\", e);\n            add_vault(3);\n            step(3);\n        },\n    }\n}",
    "quickChips": [
      {
        "label": "println!(\"RECOVERY: {}\", e);",
        "insert": "println!(\"RECOVERY: {}\", e);"
      }
    ],
    "hints": [
      "println! の中身が \"SKIP: ...\" になっているから目標の \"RECOVERY\" が出力されていないよ！",
      "println!(\"RECOVERY: {}\", e); に直してみよう。",
      "println!(\"RECOVERY: {}\", e);"
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
      "vaultTarget": 3,
      "stdoutIncludes": [
        "RECOVERY"
      ]
    },
    "parTicks": 5
  },
  {
    "displayId": "9-6",
    "id": "347b5576-609f-5487-9baa-3c95ffef4880",
    "index": 206,
    "chapter": 9,
    "chapterTitle": "第9章 エラー処理",
    "stageKind": "puzzle",
    "title": "9-6. 異常センサーは迂回！スパーク前安全判定",
    "topicTag": "match Result + スパーク回避",
    "kurumiIntro": "センサー検査が `Ok(v)` のときだけ直進し、`Err` なら 1 ティック待ってから安全確認付きで進もう！巡回スパークを越えてゴールを目指すよ。",
    "goalSummary": "Result の match 分岐と安全待機でスパークを越えて (5, 1) へ",
    "bookSectionTitle": "9.2 エラーとセンサー異常を組み合わせた回復",
    "bookSummary": "結果値 `Result` の判定と空間センサー（スパーク・ゲート）を組み合わせて、絶対に止まらない安全な制御を書きます。",
    "bookKeyCode": "match read_part(-2) { Ok(v) => ..., Err(_) => ... }",
    "starterCode": "fn safe_step(n: i32) {\n    // TODO: 条件を満たすように実装しよう\n}\n\nfn main() {\n    // 【達成条件】\n    // - ゴール到達: (5, 1)\n    // - 全スイッチ作動: (1, 1)\n    // - 金庫目標: ⚡5 以上を貯める\n    // - 安全処理: パニックせず Result を安全に扱う\n    let target_vault = 5; // 目標金庫エネルギー（⚡5以上）\n    \n}",
    "solutionCode": "fn safe_step(n: i32) {\n    for _ in 0..n {\n        while is_spark_ahead() || !is_gate_open() { wait_tick(1); }\n        step();\n    }\n}\n\nfn main() {\n    let steps = match read_part(-2) {\n        Ok(v) => v / 10,\n        Err(_) => 5,\n    };\n    add_vault(steps);\n    safe_step(steps);\n}",
    "quickChips": [
      {
        "label": "Err(_) => 5,",
        "insert": "Err(_) => 5,"
      }
    ],
    "hints": [
      "read_part(-1) のような異常センサーが Err を返したときは、match で安全値（例: Err(_) => 5）に切り替えて金庫⚡5を満たそう！",
      "スパークが横切るので for _ in 0..steps { while is_spark_ahead() { wait_tick(1); } step(); } でゴール (5, 1) まで進もう！",
      "fn safe_step(n: i32) {\n    for _ in 0..n {\n        while is_spark_ahead() || !is_gate_open() { wait_tick(1); }\n        step();\n    }\n}\n\nfn main() {\n    let steps = match read_part(-2) {\n        Ok(v) => v / 10,\n        Err(_) => 5,\n    };\n    add_vault(steps);\n    safe_step(steps);\n}"
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
      "vault": {
        "x": 4,
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
          "initialIndex": 0
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "vaultTarget": 5,
      "requireAllSwitches": true,
      "requireSafeErrorHandling": true
    },
    "parTicks": 9
  },
  {
    "displayId": "9-7",
    "id": "190eda01-8414-5c6a-82d4-c243fb94df7d",
    "index": 207,
    "chapter": 9,
    "chapterTitle": "第9章 エラー処理",
    "title": "9-7. 自作関数から Ok / Err を返す",
    "topicTag": "fn -> Result<i32, String>",
    "kurumiIntro": "チェック関数 `check_energy(n)` を自分で作ってみよう！値が 3以上なら `Ok(n)`、それ未満なら `Err(\"不足\")` を返すように直すんだ。",
    "goalSummary": "check_energy が Ok(4) を返すようにしてゴール (4, 1) へ",
    "bookSectionTitle": "9.2 Result を返す関数を書く",
    "bookSummary": "自分の関数でも戻り値を `Result<i32, String>` と書き、正常時は `Ok(値)`、条件を満たさないときは `Err(\"メッセージ\")` を返せます。",
    "bookKeyCode": "fn check(n: i32) -> Result<i32, String> {\n    if n >= 3 { Ok(n) } else { Err(\"不足\") }\n}",
    "starterCode": "fn check_energy(n: i32) -> Result<i32, String> {\n    if n >= 3 {\n        // Ok(n) を返すように直そう！\n        Err(\"まだ調整中\")\n    } else {\n        Err(\"パワー不足\")\n    }\n}\n\nfn main() {\n    match check_energy(4) {\n        Ok(v) => step(v),\n        Err(msg) => println!(\"ERR: {}\", msg),\n    }\n}",
    "solutionCode": "fn check_energy(n: i32) -> Result<i32, String> {\n    if n >= 3 {\n        Ok(n)\n    } else {\n        Err(\"パワー不足\")\n    }\n}\n\nfn main() {\n    match check_energy(4) {\n        Ok(v) => step(v),\n        Err(msg) => println!(\"ERR: {}\", msg),\n    }\n}",
    "quickChips": [
      {
        "label": "Ok(n)",
        "insert": "Ok(n)"
      }
    ],
    "hints": [
      "check_energy(4) の n >= 3 の枝が Err(\"まだ調整中\") を返しているよ！",
      "Err(\"まだ調整中\") を Ok(n) に書き換えよう。",
      "if n >= 3 {\n    Ok(n)\n} else {"
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
    "displayId": "9-8",
    "id": "23405996-2992-5507-8492-e6961dbe4a43",
    "index": 208,
    "chapter": 9,
    "chapterTitle": "第9章 エラー処理",
    "title": "9-8. Result チェック付きコア納品パズル",
    "topicTag": "Result + コア納品実践",
    "kurumiIntro": "複数のパーツ検査結果を配列で受け取って、正常な `Ok` のパーツだけ金庫にチャージしよう！その後コアを拾ってゴールへ届けてね。",
    "goalSummary": "Result 配列から Ok の合計⚡3を貯めてコアを納品しよう",
    "bookSectionTitle": "9.2 複数の Result を順番にさばく",
    "bookSummary": "リストに並んだ検査結果から `Ok` の値だけを集計し、`Err` は安全にスキップするパターンです。",
    "bookKeyCode": "for res in checks {\n    if let Ok(v) = res { add_vault(v); }\n}",
    "starterCode": "fn main() {\n    let checks = vec![read_part(1), read_part(-1), read_part(2)];\n    for r in checks {\n        match r {\n            // Ok(v) のときに v / 10 を金庫に入れよう（1 + 2 = 3 になるよ！）\n            Ok(v) => {},\n            Err(_) => println!(\"スキップ\"),\n        }\n    }\n    let c = grab_core();\n    step(3);\n    deliver(c);\n}",
    "solutionCode": "fn main() {\n    let checks = vec![read_part(1), read_part(-1), read_part(2)];\n    for r in checks {\n        match r {\n            Ok(v) => add_vault(v / 10),\n            Err(_) => println!(\"スキップ\"),\n        }\n    }\n    let c = grab_core();\n    step(3);\n    deliver(c);\n}",
    "quickChips": [
      {
        "label": "add_vault(v / 10)",
        "insert": "add_vault(v / 10)"
      }
    ],
    "hints": [
      "read_part(1) は Ok(10)、read_part(2) は Ok(20) だよ。10で割ると 1 と 2 になるね！",
      "Ok(v) => add_vault(v / 10), と書けば合計⚡3が金庫に貯まるよ！",
      "Ok(v) => add_vault(v / 10),"
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
          "label": "検査コア"
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
    "parTicks": 8
  },
  {
    "displayId": "9-9",
    "id": "2678885e-6411-58e7-aade-8435ea619487",
    "index": 209,
    "chapter": 9,
    "chapterTitle": "第9章 エラー処理",
    "stageKind": "puzzle",
    "title": "9-9. コア補強ステップの Result エラー検査",
    "topicTag": "fn -> Result + 空間コア",
    "kurumiIntro": "コアの現在パワーが目標に届いているかをチェックする関数 `verify_core(p)` を完成させよう！検査と強化を行ってから安全に納品台へ届けてね。",
    "goalSummary": "verify_core で \"CORE_OK\" 判定を出し、コア⚡5+を空間ルール通り納品",
    "bookSectionTitle": "9.2 工程チェックとしての Result<i32, String>",
    "bookSummary": "工程の条件を満たしているかを `Result` で検査し、満たしていなければ分かりやすいエラーを返すようにすると事故を防げます。",
    "bookKeyCode": "fn verify_core(p: i32) -> Result<i32, String>",
    "starterCode": "fn verify_core(p: i32) -> Result<i32, String> {\n    // TODO: 条件を満たすように実装しよう\n    Err(\"TODO\")\n}\n\nfn main() {\n    // 【達成条件】\n    // - ゴール到達: (4, 1)\n    // - コア納品: 1個（⚡5以上） [拾う(1,1) -> 検査(2,1) -> 強化⚡5+(3,1) -> 納品(4,1)]\n    // - 標準出力(println!): \"CORE_OK\" を出力\n    // - 安全処理: パニックせず Result を安全に扱う\n    let min_core_power = 5; // 納品コアの必要パワー（⚡5以上）\n    let required_scans = 1; // 必要な検査回数\n    let expected_output = \"CORE_OK\"; // println! で出力に含める文字列\n    \n}",
    "solutionCode": "fn verify_core(p: i32) -> Result<i32, String> {\n    if p >= 5 { Ok(p) } else { Err(\"パワー不足\") }\n}\n\nfn main() {\n    step(1);\n    let mut c = grab_core();\n    step(1);\n    scan(&c);\n    step(1);\n    boost(&mut c);\n    match verify_core(core_power()) {\n        Ok(p) => {\n            println!(\"CORE_OK: {}\", p);\n            step(1);\n            deliver(c);\n        },\n        Err(e) => println!(\"FAIL: {}\", e),\n    }\n}",
    "quickChips": [
      {
        "label": "boost(&mut c);",
        "insert": "boost(&mut c);\n    "
      }
    ],
    "hints": [
      "コアの初期パワーは⚡3だよ！verify_core(p: i32) -> Result<i32, String> が 5 以上で Ok(p) を返すようにし、(3,1)の強化台で boost(&mut c); を呼ぼう！",
      "(1,1)でコア取得 → (2,1)で scan(&c) → (3,1)で boost(&mut c) → verify_core(core_power()) が Ok なら println!(\"CORE_OK: {}\", p); して (4,1)で deliver(c)！",
      "fn verify_core(p: i32) -> Result<i32, String> {\n    if p >= 5 { Ok(p) } else { Err(\"パワー不足\") }\n}\n\nfn main() {\n    step(1);\n    let mut c = grab_core();\n    step(1);\n    scan(&c);\n    step(1);\n    boost(&mut c);\n    match verify_core(core_power()) {\n        Ok(p) => {\n            println!(\"CORE_OK: {}\", p);\n            step(1);\n            deliver(c);\n        },\n        Err(e) => println!(\"FAIL: {}\", e),\n    }\n}"
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
          "power": 3,
          "label": "検査コア"
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
      "minCorePower": 5,
      "scanCount": 1,
      "stdoutIncludes": [
        "CORE_OK"
      ],
      "requireSpatialCoreRules": true,
      "requireSafeErrorHandling": true
    },
    "parTicks": 10
  },
  {
    "displayId": "9-10",
    "id": "bb40b425-1e21-5e54-b451-89d99fcf5820",
    "index": 210,
    "chapter": 9,
    "chapterTitle": "第9章 エラー処理",
    "stageKind": "puzzle",
    "title": "9-10. コンベア異常ログと Result 分別",
    "topicTag": "Result + Errログ + コンベア",
    "kurumiIntro": "部品配列の中に壊れた部品と正常な部品が混ざっているよ！正常なら金庫へ、`Err` なら標準エラー出力に警告を残しつつ進んで、コンベアの先を目指そう。",
    "goalSummary": "Ok の合計⚡4を金庫に入れ、\"WARN_PART\" を出して (5, 1) へ",
    "bookSectionTitle": "9.2 正常値の集計と異常値のログ分離",
    "bookSummary": "配列の `Result` を処理するとき、`Ok` だけを集計しつつ `Err` はログ出力や代替行動に回す実用的なパターンです。",
    "bookKeyCode": "match r { Ok(v) => sum += v, Err(_) => println!(\"WARN_PART\") }",
    "starterCode": "fn main() {\n    // 【達成条件】\n    // - ゴール到達: (5, 1)\n    // - 金庫目標: ⚡4 以上を貯める\n    // - 標準出力(println!): \"WARN_PART\" を出力\n    // - 安全処理: パニックせず Result を安全に扱う\n    let target_vault = 4; // 目標金庫エネルギー（⚡4以上）\n    let expected_output = \"WARN_PART\"; // println! で出力に含める文字列\n\n    // --- ステージの初期データ / 機構 ---\n    let inputs = vec![read_part(2), read_part(-1), read_part(2)];\n    \n}",
    "solutionCode": "fn main() {\n    let inputs = vec![read_part(2), read_part(-1), read_part(2)];\n    let mut sum = 0;\n    for r in inputs {\n        match r {\n            Ok(v) => sum += v / 10,\n            Err(_) => println!(\"WARN_PART\"),\n        }\n    }\n    add_vault(sum);\n    step(3);\n}",
    "quickChips": [
      {
        "label": "println!(\"WARN_PART\")",
        "insert": "println!(\"WARN_PART\")"
      }
    ],
    "hints": [
      "parts をループで回し、read_part(p) が Ok(v) なら v / 10 を金庫へ、Err(_) なら eprintln!(\"WARN_PART\") または println!(\"WARN_PART\") を出力しよう！",
      "コンベア (1,1) と (3,1) が押し出してくれるから、最後に step(3); で (5,1) のゴールに着くよ！",
      "fn main() {\n    let inputs = vec![read_part(2), read_part(-1), read_part(2)];\n    let mut sum = 0;\n    for r in inputs {\n        match r {\n            Ok(v) => sum += v / 10,\n            Err(_) => println!(\"WARN_PART\"),\n        }\n    }\n    add_vault(sum);\n    step(3);\n}"
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
      "vault": {
        "x": 2,
        "y": 0,
        "initial": 0,
        "target": 4
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "vaultTarget": 4,
      "stdoutIncludes": [
        "WARN_PART"
      ],
      "requireSafeErrorHandling": true
    },
    "parTicks": 6
  },
  {
    "displayId": "9-11",
    "id": "442a7e4e-f02a-5fd6-aea4-a12ac226d4ad",
    "index": 211,
    "chapter": 9,
    "chapterTitle": "第9章 エラー処理",
    "stageKind": "challenge",
    "title": "9-11. エラー回復×コンベア最短ダッシュ",
    "topicTag": "Result + コンベア最短",
    "kurumiIntro": "壊れた指示値が混じる中、`match` と `unwrap_or` で正しい歩数だけを素早く抜き出して、ベルトコンベアを乗り継ぎ 8ティック以内にゴールしよう！",
    "goalSummary": "Result から有効値を取り出しスイッチ＋コンベアで8ティック以内ゴール",
    "bookSectionTitle": "9.2 回復と時間制限の両立",
    "bookSummary": "フォールバックを使って止まらず動きつつ、ベルトコンベアによる加速を活かして制限時間を達成するチャレンジです。",
    "bookKeyCode": "let s = read_part(-1).unwrap_or(1);",
    "starterCode": "fn main() {\n    // 【達成条件】\n    // - ゴール到達: (5, 3)\n    // - 全スイッチ作動: (2, 1)\n    // - 金庫目標: ⚡4 以上を貯める\n    // - 安全処理: パニックせず Result を安全に扱う\n    // - 制限時間: 8 ティック以内\n    let target_vault = 4; // 目標金庫エネルギー（⚡4以上）\n    let max_ticks = 8; // 目標制限ティック数\n    \n}",
    "solutionCode": "fn main() {\n    let a = read_part(1).unwrap_or(0) / 10;\n    let b = read_part(-1).unwrap_or(1);\n    let c = read_part(-2).unwrap_or(2);\n    add_vault(a + b + c);\n    step(a);\n    turn_right();\n    step(b);\n    turn_left();\n    step(c);\n}",
    "quickChips": [
      {
        "label": ".unwrap_or(1)",
        "insert": ".unwrap_or(1)"
      },
      {
        "label": ".unwrap_or(2)",
        "insert": ".unwrap_or(2)"
      }
    ],
    "hints": [
      "read_part(-1).unwrap_or(1) や read_part(-2).unwrap_or(2) で移動距離を取り出そう！東へ1歩でコンベア(1,1)がスイッチ(2,1)へ押してくれるよ！",
      "右折して南へ1歩で(2,2)コンベアが(2,3)へ押し出し、左折して東へ2歩で(3,3)コンベア経由で(5,3)に着くよ！",
      "fn main() {\n    let a = read_part(1).unwrap_or(0) / 10;\n    let b = read_part(-1).unwrap_or(1);\n    let c = read_part(-2).unwrap_or(2);\n    add_vault(a + b + c);\n    step(a);\n    turn_right();\n    step(b);\n    turn_left();\n    step(c);\n}"
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
        "target": 4
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "vaultTarget": 4,
      "requireAllSwitches": true,
      "maxTicks": 8,
      "requireSafeErrorHandling": true
    },
    "parTicks": 8
  },
  {
    "displayId": "9-12",
    "id": "0788c04e-789b-5505-9656-d78c0da40b9b",
    "index": 212,
    "chapter": 9,
    "chapterTitle": "第9章 エラー処理",
    "stageKind": "challenge",
    "title": "9-12. コア工程＋スパーク回避の完璧リカバリ",
    "topicTag": "Result + スパーク + 空間コア",
    "kurumiIntro": "巡回スパークが巡回する工房で、コアの検査と強化をこなしつつ、`Err` センサーのリカバリで金庫⚡5も満たそう！",
    "goalSummary": "Result 回復で金庫⚡5・スパーク回避・コア⚡5+納品・全スイッチ達成",
    "bookSectionTitle": "9.2 高信頼コア搬送パイプライン",
    "bookSummary": "センサー値が壊れていても代替計算へ切り替えてコアの検査・強化・納品を最後まで安全にやり切ります。",
    "bookKeyCode": "match read_part(-1) { Ok(v) => v, Err(_) => 5 }",
    "starterCode": "fn safe_move(n: i32) {\n    // TODO: 条件を満たすように実装しよう\n}\n\nfn main() {\n    // 【達成条件】\n    // - ゴール到達: (5, 1)\n    // - 全スイッチ作動: (4, 1)\n    // - 金庫目標: ⚡5 以上を貯める\n    // - コア納品: 1個（⚡5以上） [拾う(1,1) -> 検査(2,1) -> 強化⚡5+(4,1) -> 納品(5,1)]\n    // - 安全処理: パニックせず Result を安全に扱う\n    let target_vault = 5; // 目標金庫エネルギー（⚡5以上）\n    let min_core_power = 5; // 納品コアの必要パワー（⚡5以上）\n    let required_scans = 1; // 必要な検査回数\n    \n}",
    "solutionCode": "fn safe_move(n: i32) {\n    for _ in 0..n {\n        while is_spark_ahead() || !is_gate_open() { wait_tick(1); }\n        step();\n    }\n}\n\nfn main() {\n    let vault_val = read_part(3).unwrap_or(0) / 10 + read_part(-1).unwrap_or(2);\n    add_vault(vault_val);\n    safe_move(1);\n    let mut c = grab_core();\n    safe_move(1);\n    scan(&c);\n    safe_move(2);\n    boost(&mut c);\n    safe_move(1);\n    deliver(c);\n}",
    "quickChips": [
      {
        "label": "safe_move(2);",
        "insert": "safe_move(2);\n    "
      },
      {
        "label": "boost(&mut c);",
        "insert": "boost(&mut c);\n    "
      },
      {
        "label": "safe_move(1);",
        "insert": "safe_move(1);\n    "
      },
      {
        "label": "deliver(c);",
        "insert": "deliver(c);"
      }
    ],
    "hints": [
      "read_part(-1).unwrap_or(5) で安全に金庫⚡5を満たし、スパーク待ち付きの safe_move 関数を作ろう！",
      "(1,1)で grab_core() → (2,1)で scan(&c) → スパーク(3,1)を越えて (4,1) 強化台兼スイッチで boost(&mut c) → (5,1) で deliver(c)！",
      "fn safe_move(n: i32) {\n    for _ in 0..n {\n        while is_spark_ahead() || !is_gate_open() { wait_tick(1); }\n        step();\n    }\n}\n\nfn main() {\n    let vault_val = read_part(3).unwrap_or(0) / 10 + read_part(-1).unwrap_or(2);\n    add_vault(vault_val);\n    safe_move(1);\n    let mut c = grab_core();\n    safe_move(1);\n    scan(&c);\n    safe_move(2);\n    boost(&mut c);\n    safe_move(1);\n    deliver(c);\n}"
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
          "label": "復旧コア"
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
        "target": 5
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
      "vaultTarget": 5,
      "requireAllSwitches": true,
      "requireSpatialCoreRules": true,
      "requireSafeErrorHandling": true
    },
    "parTicks": 12
  },
  {
    "displayId": "9-13",
    "id": "e191b416-e095-5ee1-9b79-8582cbfe3795",
    "index": 213,
    "chapter": 9,
    "chapterTitle": "第9章 エラー処理",
    "stageKind": "puzzle",
    "title": "9-13. Result フォールバックとコンベア分岐",
    "topicTag": "unwrap_or + コンベア",
    "kurumiIntro": "センサーが故障してもロボットを止めちゃダメ！`.unwrap_or(値)` で予備の歩数に切り替えて、2つのコンベアを乗り継ぎながらスイッチを踏もう。",
    "goalSummary": "Result フォールバックでパニックせずスイッチを踏み (5, 3) へ",
    "bookSectionTitle": "9.1 & 9.2 現場機械を止めないフォールバック値",
    "bookSummary": "異常系を受け取った際に安全な既定値へ切り替えることで、搬送ライン全体を停止させずに走り切れます。",
    "bookKeyCode": "let dy = read_part(-1).unwrap_or(1);",
    "starterCode": "fn main() {\n    // 【達成条件】\n    // - ゴール到達: (5, 3)\n    // - 全スイッチ作動: (2, 1)\n    // - 安全処理: パニックせず Result を安全に扱う\n    \n}",
    "solutionCode": "fn main() {\n    let dx = read_part(1).unwrap_or(0) / 10;\n    let dy = read_part(-1).unwrap_or(1);\n    step(dx);\n    turn_right();\n    step(dy);\n    turn_left();\n    step(2);\n}",
    "quickChips": [
      {
        "label": ".unwrap_or(1)",
        "insert": ".unwrap_or(1)"
      }
    ],
    "hints": [
      "read_part(-1).unwrap_or(1) のようにフォールバック値を取り出そう！東1歩(dx=1)でコンベア(1,1)が(2,1)スイッチへ運ぶよ。",
      "右折して南1歩(dy=1)で(2,2)コンベアが(2,3)へ押し出し、左折して step(2); で(3,3)コンベア経由で(5,3)へ！",
      "fn main() {\n    let dx = read_part(1).unwrap_or(0) / 10;\n    let dy = read_part(-1).unwrap_or(1);\n    step(dx);\n    turn_right();\n    step(dy);\n    turn_left();\n    step(2);\n}"
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
      "requireSafeErrorHandling": true
    },
    "parTicks": 7
  },
  {
    "displayId": "9-14",
    "id": "fecb5db3-4f07-5baf-acbe-87c4035235a5",
    "index": 214,
    "chapter": 9,
    "chapterTitle": "第9章 エラー処理",
    "title": "9-14. 非常停止スイッチと蒸気ゲート突破",
    "topicTag": "panic! 制御 / 実践パズル",
    "kurumiIntro": "安全運転の基本だよ！センサーの `Err` でパニックせずに `unwrap_or` で歩数を得たら、途中の蒸気ゲートを待ちながら進もう。",
    "goalSummary": "パニックせずゲート (2, 1) を抜けてゴール (4, 1) へ",
    "bookSectionTitle": "9.1 & 9.3 panic! すべき時・回復すべき時",
    "bookSummary": "テストや絶対に起きてはいけない不整合では `panic!` を使いますが、センサー異常や入力ミスなど想定内のエラーは回復処理を書くのが原則です。",
    "bookKeyCode": "let total = read_part(-5).unwrap_or(4);",
    "starterCode": "fn main() {\n    // 【達成条件】\n    // - ゴール到達: (4, 1)\n    \n}",
    "solutionCode": "fn main() {\n    let total = read_part(-5).unwrap_or(4);\n    for _ in 0..total {\n        if !is_gate_open() {\n            wait_tick(1);\n        }\n        step();\n    }\n}",
    "quickChips": [
      {
        "label": "wait_tick(1);",
        "insert": "wait_tick(1);"
      }
    ],
    "hints": [
      "read_part(-5).unwrap_or(4) で歩数 4 を取り出そう。(2, 1) に蒸気ゲートがあるよ！",
      "for _ in 0..total の中で、step() の前に if !is_gate_open() { wait_tick(1); } を入れてゲートを待とう！",
      "fn main() {\n    let total = read_part(-5).unwrap_or(4);\n    for _ in 0..total {\n        if !is_gate_open() {\n            wait_tick(1);\n        }\n        step();\n    }\n}"
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
      "gates": [
        {
          "x": 2,
          "y": 1,
          "openTicks": 2,
          "closedTicks": 2,
          "initialOffset": 1
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true
    },
    "parTicks": 6
  },
  {
    "displayId": "9-15",
    "id": "64c273dd-e5b8-5a07-b2ce-c8fc0e6505fd",
    "index": 215,
    "chapter": 9,
    "chapterTitle": "第9章 エラー処理",
    "title": "9-15. ? 演算子でスマートにエラー伝播",
    "topicTag": "? 演算子",
    "kurumiIntro": "毎回 `match` を書くのが大変なときは、`?` 演算子が大活躍！`Ok` なら中身を取り出し、`Err` なら呼び出し元へそのまま返してくれるよ。",
    "goalSummary": "? 演算子を使って load_steps() を完成させゴールへ",
    "bookSectionTitle": "9.2 エラーを委譲するためのショートカット: ? 演算子",
    "bookSummary": "`Result` を返す式のうしろに `?` を付けると、成功なら中身を取り出し、失敗なら即座にその関数から `Err` を返します。",
    "bookKeyCode": "fn load() -> Result<i32, String> {\n    let v = read_part(3)?;\n    Ok(v / 10)\n}",
    "starterCode": "fn load_steps() -> Result<i32, String> {\n    // read_part(3) の後ろに ? を付けて値を取り出そう！\n    let v = read_part(3)?;\n    Ok(v / 10)\n}\n\nfn main() {\n    if let Ok(n) = load_steps() {\n        // n 歩進んでみよう\n        \n    }\n}",
    "solutionCode": "fn load_steps() -> Result<i32, String> {\n    let v = read_part(3)?;\n    Ok(v / 10)\n}\n\nfn main() {\n    if let Ok(n) = load_steps() {\n        step(n);\n    }\n}",
    "quickChips": [
      {
        "label": "step(n);",
        "insert": "step(n);\n        "
      }
    ],
    "hints": [
      "load_steps() はすでに ? を使って 3 を返す準備ができているよ！",
      "main の `if let Ok(n) = load_steps() { ... }` の中で `step(n);` を呼ぼう。",
      "if let Ok(n) = load_steps() {\n    step(n);\n}"
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
    "displayId": "9-16",
    "id": "2b843031-35fa-56e4-b78e-0b0c1745840c",
    "index": 216,
    "chapter": 9,
    "chapterTitle": "第9章 エラー処理",
    "title": "9-16. ? 演算子を連続してつなぐ",
    "topicTag": "? の連鎖",
    "kurumiIntro": "2つの部品を順番に読み取るときも `?` を続けて書くだけ！どっちかが壊れていたら自動で途中で抜けてエラーを伝えてくれるよ。",
    "goalSummary": "2回の ? 演算子で 2 + 2 = 4 歩進みゴール (4, 1) へ",
    "bookSectionTitle": "9.2 ? 演算子でネストのない見通しの良いコードを書く",
    "bookSummary": "複数の `Result` を順に処理したい場合、`let a = f()?; let b = g()?;` と書けば `match` の深い入れ子を防げます。",
    "bookKeyCode": "let a = read_part(2)?;\nlet b = read_part(2)?;",
    "starterCode": "fn load_pair() -> Result<i32, String> {\n    let a = read_part(2)?;\n    // 2つ目の read_part(2) にも ? を付けて取り出そう！\n    let b = read_part(2)?;\n    Ok((a + b) / 10)\n}\n\nfn main() {\n    match load_pair() {\n        Ok(total) => {\n            // total 歩進んでみよう\n            \n        },\n        Err(e) => println!(\"エラー: {}\", e),\n    }\n}",
    "solutionCode": "fn load_pair() -> Result<i32, String> {\n    let a = read_part(2)?;\n    let b = read_part(2)?;\n    Ok((a + b) / 10)\n}\n\nfn main() {\n    match load_pair() {\n        Ok(total) => {\n            step(total);\n        },\n        Err(e) => println!(\"エラー: {}\", e),\n    }\n}",
    "quickChips": [
      {
        "label": "step(total);",
        "insert": "step(total);\n            "
      }
    ],
    "hints": [
      "load_pair() は (20 + 20) / 10 = Ok(4) を返すよ！",
      "Ok(total) => { step(total); }, と書こう。",
      "Ok(total) => {\n    step(total);\n},"
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
    "displayId": "9-17",
    "id": "e8bba780-ccd3-5cd3-986e-997f4979a8af",
    "index": 217,
    "chapter": 9,
    "chapterTitle": "第9章 エラー処理",
    "title": "9-17. ? で異常を返したあとの呼び出し側対応",
    "topicTag": "? による早期リターン",
    "kurumiIntro": "関数の中で `read_part(-1)?` を呼ぶと、その後の行は実行されずにすぐ `Err` が呼び出し元へ返るんだ！呼び出し元で受け止めて安全に進もう。",
    "goalSummary": "? の早期リターンを受け止め、代替で金庫⚡3＋ゴールへ",
    "bookSectionTitle": "9.2 ? による早期リターンの動き",
    "bookSummary": "式の後ろの `?` が `Err` を検知すると、関数の残りをスキップして即座に呼び出し元に `Err` を返します。",
    "bookKeyCode": "fn try_load() -> Result<i32, String> {\n    let x = read_part(-1)?;\n    Ok(x)\n}",
    "starterCode": "fn try_load() -> Result<i32, String> {\n    let x = read_part(-1)?;\n    Ok(x / 10)\n}\n\nfn main() {\n    let steps = try_load().unwrap_or(3);\n    // 金庫に steps を入れてゴール (3, 1) へ進もう！\n    \n    step(steps);\n}",
    "solutionCode": "fn try_load() -> Result<i32, String> {\n    let x = read_part(-1)?;\n    Ok(x / 10)\n}\n\nfn main() {\n    let steps = try_load().unwrap_or(3);\n    add_vault(steps);\n    step(steps);\n}",
    "quickChips": [
      {
        "label": "add_vault(steps);",
        "insert": "add_vault(steps);\n    "
      }
    ],
    "hints": [
      "try_load() が Err を返し、.unwrap_or(3) が 3 に変えてくれるよ！",
      "step(steps); の前に add_vault(steps); を書き足そう。",
      "add_vault(steps);\nstep(steps);"
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
    "displayId": "9-18",
    "id": "12b4325e-3fae-5070-b5cc-4ac200fee821",
    "index": 218,
    "chapter": 9,
    "chapterTitle": "第9章 エラー処理",
    "stageKind": "puzzle",
    "title": "9-18. ? 連鎖関数とコア検査納品",
    "topicTag": "? 演算子 + コア納品",
    "kurumiIntro": "部品検査が1つでも `Err` ならすぐ中断して代替プランに切り替える関数を `?` で作ろう！コアを検査台→強化台→納品台へ安全に届けるよ。",
    "goalSummary": "calc_vault() の ? 連鎖を修復して金庫⚡5・コア⚡4+納品へ",
    "bookSectionTitle": "9.2 ? による複数バリデーションの結合",
    "bookSummary": "複数の確認処理を `?` で連結すると、途中のエラーを漏れなくキャッチしつつ正常時のロジックを綺麗に並べられます。",
    "bookKeyCode": "let a = validate(2)?;\nlet b = validate(3)?;",
    "starterCode": "fn validate(n: i32) -> Result<i32, String> {\n    if n > 0 { Ok(n) } else { Err(\"無効\") }\n}\n\nfn calc_vault() -> Result<i32, String> {\n    // TODO: ? 演算子を使って validate(2) と validate(3) の合計(5)を返そう！\n    let a = validate(2);\n    let b = validate(3);\n    Err(\"未実装\")\n}\n\nfn main() {\n    // 【達成条件】\n    // - ゴール到達: (4, 1)\n    // - 金庫目標: ⚡5 以上を貯める\n    // - コア納品: 1個（⚡4以上） [拾う(1,1) -> 検査(2,1) -> 強化⚡4+(3,1) -> 納品(4,1)]\n    // - 安全処理: パニックせず Result を安全に扱う\n    let target_vault = 5; // 目標金庫エネルギー（⚡5以上）\n    let min_core_power = 4; // 納品コアの必要パワー（⚡4以上）\n    let required_scans = 1; // 必要な検査回数\n    let v = calc_vault().unwrap_or(0);\n    add_vault(v);\n    // コアを拾い、検査・強化・納品しよう！\n    \n}",
    "solutionCode": "fn validate(n: i32) -> Result<i32, String> {\n    if n > 0 { Ok(n) } else { Err(\"無効\") }\n}\n\nfn calc_vault() -> Result<i32, String> {\n    let a = validate(2)?;\n    let b = validate(3)?;\n    Ok(a + b)\n}\n\nfn main() {\n    let v = calc_vault().unwrap_or(0);\n    add_vault(v);\n    step(1);\n    let mut core = grab_core();\n    step(1);\n    scan(&core);\n    step(1);\n    boost(&mut core);\n    step(1);\n    deliver(core);\n}",
    "quickChips": [
      {
        "label": "validate(3)?",
        "insert": "validate(3)?"
      }
    ],
    "hints": [
      "read_part(2)? と read_part(3)? を ? 演算子でつなぐ関数 calc_vault() -> Result<i32, String> を作り、(a + b) / 10 で合計⚡5を返そう！",
      "(1,1)でコア取得 → (2,1)で scan(&c) → (3,1)で boost(&mut c) → (4,1)で deliver(c) でクリア！",
      "fn validate(n: i32) -> Result<i32, String> {\n    if n > 0 { Ok(n) } else { Err(\"無効\") }\n}\n\nfn calc_vault() -> Result<i32, String> {\n    let a = validate(2)?;\n    let b = validate(3)?;\n    Ok(a + b)\n}\n\nfn main() {\n    let v = calc_vault().unwrap_or(0);\n    add_vault(v);\n    step(1);\n    let mut core = grab_core();\n    step(1);\n    scan(&core);\n    step(1);\n    boost(&mut core);\n    step(1);\n    deliver(core);\n}"
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
          "label": "検査コア"
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
        "target": 5
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "deliverCores": 1,
      "minCorePower": 4,
      "scanCount": 1,
      "vaultTarget": 5,
      "requireSpatialCoreRules": true,
      "requireSafeErrorHandling": true
    },
    "parTicks": 10
  },
  {
    "displayId": "9-19",
    "id": "83c80558-999e-5c81-8598-4de72b9acf09",
    "index": 219,
    "chapter": 9,
    "chapterTitle": "第9章 エラー処理",
    "stageKind": "puzzle",
    "title": "9-19. 2つのダイヤル確認を Result でつなぐ",
    "topicTag": "Result + ダイヤル解錠",
    "kurumiIntro": "ダイヤルの暗証番号が条件を満たすか `check_dial(n) -> Result<i32, String>` で確かめてから解錠しよう！不正な値はしっかり `Err` で弾く安全設計だよ。",
    "goalSummary": "Result 検証つきの値 5 でダイヤルを解きスイッチ先 (5, 1) へ",
    "bookSectionTitle": "9.2 入力バリデーションを Result で表現する",
    "bookSummary": "不正な引数が紛れ込む前に `Result` で範囲チェックを行い、有効な値だけをデバイス制御に渡す設計です。",
    "bookKeyCode": "fn verify_dial(n: i32) -> Result<i32, String>",
    "starterCode": "fn verify_dial(n: i32) -> Result<i32, String> {\n    // TODO: 条件を満たすように実装しよう\n    Err(\"TODO\")\n}\n\nfn solve_safe() -> Result<i32, String> {\n    // TODO: 条件を満たすように実装しよう\n    Err(\"TODO\")\n}\n\nfn main() {\n    // 【達成条件】\n    // - ゴール到達: (5, 1)\n    // - 全スイッチ作動: (2, 1)\n    // - 金庫目標: ⚡5 以上を貯める\n    // - ダイヤル解除: 値 5 を求めて try_dial(...) を呼ぶ\n    // - 安全処理: パニックせず Result を安全に扱う\n    let target_vault = 5; // 目標金庫エネルギー（⚡5以上）\n    let target_dial = 5; // ダイヤル解除コード（5 を計算して try_dial へ）\n    \n}",
    "solutionCode": "fn verify_dial(n: i32) -> Result<i32, String> {\n    if n >= 1 && n <= 9 { Ok(n) } else { Err(\"範囲外\") }\n}\n\nfn solve_safe() -> Result<i32, String> {\n    let d = verify_dial(5)?;\n    try_dial(d);\n    Ok(d)\n}\n\nfn main() {\n    match solve_safe() {\n        Ok(v) => {\n            add_vault(v);\n            step(5);\n        },\n        Err(e) => println!(\"DIAL_ERR: {}\", e),\n    }\n}",
    "quickChips": [
      {
        "label": "verify_dial(5)?",
        "insert": "verify_dial(5)?"
      }
    ],
    "hints": [
      "verify_dial(n: i32) -> Result<i32, String> で範囲チェックを行い、? を使って solve_safe() から try_dial(5) を呼ぼう！",
      "match solve_safe() で Ok(v) が返ったら add_vault(v); と step(5); でスイッチ先の (5,1) へ進めるよ！",
      "fn verify_dial(n: i32) -> Result<i32, String> {\n    if n >= 1 && n <= 9 { Ok(n) } else { Err(\"範囲外\") }\n}\n\nfn solve_safe() -> Result<i32, String> {\n    let d = verify_dial(5)?;\n    try_dial(d);\n    Ok(d)\n}\n\nfn main() {\n    match solve_safe() {\n        Ok(v) => {\n            add_vault(v);\n            step(5);\n        },\n        Err(e) => println!(\"DIAL_ERR: {}\", e),\n    }\n}"
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
        "target": 5
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "dialSolved": true,
      "vaultTarget": 5,
      "requireAllSwitches": true,
      "requireSafeErrorHandling": true
    },
    "parTicks": 8
  },
  {
    "displayId": "9-20",
    "id": "dd2b40aa-e38b-557a-9561-b4859e3a9a15",
    "index": 220,
    "chapter": 9,
    "chapterTitle": "第9章 エラー処理",
    "stageKind": "puzzle",
    "title": "9-20. エラー伝播関数で2段スイッチ迷路を解く",
    "topicTag": "? + 2スイッチゲート",
    "kurumiIntro": "U字型通路の途中に2つのスイッチと連動ゲートがあるよ！`load_leg()` 関数で `?` を使って3区間の距離を計算し、見事にゴールへ戻ろう！",
    "goalSummary": "? 関数で各区間の歩数を出し全スイッチを踏んで (0, 3) へ",
    "bookSectionTitle": "9.2 ルート計算関数からのエラー伝播",
    "bookSummary": "計算関数を `?` でつないで安全なルート座標を取り出し、全区間を一気に走り抜けます。",
    "bookKeyCode": "let d1 = read_dist(4)?;",
    "starterCode": "fn read_dist(n: i32) -> Result<i32, String> {\n    // TODO: 条件を満たすように実装しよう\n    Err(\"TODO\")\n}\n\nfn plan() -> Result<(i32, i32, i32), String> {\n    // TODO: 条件を満たすように実装しよう\n    Err(\"TODO\")\n}\n\nfn main() {\n    // 【達成条件】\n    // - ゴール到達: (0, 3)\n    // - 全スイッチ作動: (4, 1), (2, 3)\n    // - 安全処理: パニックせず Result を安全に扱う\n    \n}",
    "solutionCode": "fn read_dist(n: i32) -> Result<i32, String> {\n    let v = read_part(n)?;\n    Ok(v / 10)\n}\n\nfn plan() -> Result<(i32, i32, i32), String> {\n    let e = read_dist(4)?;\n    let s = read_dist(2)?;\n    let w = read_dist(4)?;\n    Ok((e, s, w))\n}\n\nfn main() {\n    let (e, s, w) = plan().unwrap_or((1, 1, 1));\n    step(e);\n    turn_right();\n    step(s);\n    turn_right();\n    step(w);\n}",
    "quickChips": [
      {
        "label": "read_dist(4)?",
        "insert": "read_dist(4)?"
      }
    ],
    "hints": [
      "read_dist(n) -> Result<i32, String> で read_part(n)? / 10 を返し、plan() 関数で ? を使って (4, 2, 4) のタプルを組もう！",
      "東4歩でスイッチ(4,1) → 右折して南2歩でゲート(4,2)通過 → 右折して西4歩でスイッチ(2,3)を踏みつつゴール(0,3)へ！",
      "fn read_dist(n: i32) -> Result<i32, String> {\n    let v = read_part(n)?;\n    Ok(v / 10)\n}\n\nfn plan() -> Result<(i32, i32, i32), String> {\n    let e = read_dist(4)?;\n    let s = read_dist(2)?;\n    let w = read_dist(4)?;\n    Ok((e, s, w))\n}\n\nfn main() {\n    let (e, s, w) = plan().unwrap_or((1, 1, 1));\n    step(e);\n    turn_right();\n    step(s);\n    turn_right();\n    step(w);\n}"
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
      "requireAllSwitches": true,
      "requireSafeErrorHandling": true
    },
    "parTicks": 13
  },
  {
    "displayId": "9-21",
    "id": "a095b4cf-0ea6-52e0-9488-b0f3af96c4af",
    "index": 221,
    "chapter": 9,
    "chapterTitle": "第9章 エラー処理",
    "stageKind": "challenge",
    "title": "9-21. ダイヤル解錠＋?伝播の二重セキュリティ",
    "topicTag": "? + ダイヤル + 金庫",
    "kurumiIntro": "ダイヤル番号のチェックとエネルギーの合算を `?` で連係させた安全関数を作ろう！故障センサーは `unwrap_or` でしのいで、二重セキュリティ突破だ！",
    "goalSummary": "Result 回復でダイヤル解錠(6)・金庫⚡6・全スイッチ・(5, 1) へ",
    "bookSectionTitle": "9.2 複数のエラー源を組み合わせた回復設計",
    "bookSummary": "壊れうる設定読み取りは安全なバックアップ値で守りつつ、セキュリティ条件は `?` で厳密に検証します。",
    "bookKeyCode": "let secret = check(6)?;",
    "starterCode": "fn check_dial(n: i32) -> Result<i32, String> {\n    // TODO: 条件を満たすように実装しよう\n    Err(\"TODO\")\n}\n\nfn run_mission() -> Result<(), String> {\n    // TODO: 条件を満たすように実装しよう\n    Err(\"TODO\")\n}\n\nfn main() {\n    // 【達成条件】\n    // - ゴール到達: (5, 1)\n    // - 全スイッチ作動: (2, 1)\n    // - 金庫目標: ⚡6 以上を貯める\n    // - ダイヤル解除: 値 6 を求めて try_dial(...) を呼ぶ\n    // - 安全処理: パニックせず Result を安全に扱う\n    let target_vault = 6; // 目標金庫エネルギー（⚡6以上）\n    let target_dial = 6; // ダイヤル解除コード（6 を計算して try_dial へ）\n    \n}",
    "solutionCode": "fn check_dial(n: i32) -> Result<i32, String> {\n    if n >= 1 && n <= 9 { Ok(n) } else { Err(\"不正ダイヤル\") }\n}\n\nfn run_mission() -> Result<(), String> {\n    let vault_val = read_part(4).unwrap_or(0) / 10 + read_part(-1).unwrap_or(2);\n    add_vault(vault_val);\n    let secret = check_dial(6)?;\n    try_dial(secret);\n    step(5);\n    Ok(())\n}\n\nfn main() {\n    if let Err(e) = run_mission() {\n        println!(\"ERR: {}\", e);\n    }\n}",
    "quickChips": [
      {
        "label": "check_dial(6)?",
        "insert": "check_dial(6)?"
      }
    ],
    "hints": [
      "ダイヤルの正解は 6 だよ！check_dial(n: i32) -> Result<i32, String> を作り、? を使って try_dial(6) を解錠しよう。",
      "read_part の unwrap_or も組み合わせて金庫⚡6を入れたら、step(5); でスイッチ経由で (5,1) へ！",
      "fn check_dial(n: i32) -> Result<i32, String> {\n    if n >= 1 && n <= 9 { Ok(n) } else { Err(\"不正ダイヤル\") }\n}\n\nfn run_mission() -> Result<(), String> {\n    let vault_val = read_part(4).unwrap_or(0) / 10 + read_part(-1).unwrap_or(2);\n    add_vault(vault_val);\n    let secret = check_dial(6)?;\n    try_dial(secret);\n    step(5);\n    Ok(())\n}\n\nfn main() {\n    if let Err(e) = run_mission() {\n        println!(\"ERR: {}\", e);\n    }\n}"
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
      "dial": {
        "secret": 6
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
        "target": 6
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "dialSolved": true,
      "vaultTarget": 6,
      "requireAllSwitches": true,
      "requireSafeErrorHandling": true
    },
    "parTicks": 9
  },
  {
    "displayId": "9-22",
    "id": "d2207f99-4376-534a-998a-71b6e795a295",
    "index": 222,
    "chapter": 9,
    "chapterTitle": "第9章 エラー処理",
    "stageKind": "puzzle",
    "title": "9-22. 複数 Result から安全迷路ソルバー起動",
    "topicTag": "? + 自律迷路",
    "kurumiIntro": "スタート前の点検関数 `preflight() -> Result<i32, String>` が正常に完了したら、左手法の自律ループでジグザグの迷路を抜けよう！",
    "goalSummary": "preflight 検査をパスして左手法で迷路のゴール (3, 1) へ",
    "bookSectionTitle": "9.2 起動前チェックを ? でまとめる",
    "bookSummary": "複数の起動前点検を `preflight()` に `?` で並べておけば、すべての点検を突破したときだけメイン動作を開始できます。",
    "bookKeyCode": "fn preflight() -> Result<i32, String> { let a = read_part(1)?; ... }",
    "starterCode": "fn preflight() -> Result<i32, String> {\n    // TODO: 条件を満たすように実装しよう\n    Err(\"TODO\")\n}\n\nfn main() {\n    // 【達成条件】\n    // - ゴール到達: (3, 1)\n    // - 金庫目標: ⚡4 以上を貯める\n    // - 安全処理: パニックせず Result を安全に扱う\n    let target_vault = 4; // 目標金庫エネルギー（⚡4以上）\n    \n}",
    "solutionCode": "fn preflight() -> Result<i32, String> {\n    let a = read_part(2)?;\n    let b = read_part(2)?;\n    Ok((a + b) / 10)\n}\n\nfn main() {\n    match preflight() {\n        Ok(v) => {\n            add_vault(v);\n            while !at_goal() {\n                if !is_wall_left() {\n                    turn_left();\n                    step();\n                } else if !is_wall_ahead() {\n                    step();\n                } else {\n                    turn_right();\n                }\n            }\n        },\n        Err(e) => println!(\"STOP: {}\", e),\n    }\n}",
    "quickChips": [
      {
        "label": "read_part(2)?",
        "insert": "read_part(2)?"
      }
    ],
    "hints": [
      "preflight() -> Result<i32, String> で read_part(2)? を2回呼び、(a + b) / 10 = 4 を返そう！",
      "Ok(v) が返ったら add_vault(v); を呼び、while !at_goal() で左手法（!is_wall_left()→左折&step、!is_wall_ahead()→step、else→右折）を実行しよう！",
      "fn preflight() -> Result<i32, String> {\n    let a = read_part(2)?;\n    let b = read_part(2)?;\n    Ok((a + b) / 10)\n}\n\nfn main() {\n    match preflight() {\n        Ok(v) => {\n            add_vault(v);\n            while !at_goal() {\n                if !is_wall_left() {\n                    turn_left();\n                    step();\n                } else if !is_wall_ahead() {\n                    step();\n                } else {\n                    turn_right();\n                }\n            }\n        },\n        Err(e) => println!(\"STOP: {}\", e),\n    }\n}"
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
      "vaultTarget": 4,
      "requireSafeErrorHandling": true
    },
    "parTicks": 8
  },
  {
    "displayId": "9-23",
    "id": "e204841a-48fc-5a37-952f-a00f0e10c9be",
    "index": 223,
    "chapter": 9,
    "chapterTitle": "第9章 エラー処理",
    "title": "9-23. 第9章まとめ：エラー伝播と安全ゲート航行",
    "topicTag": "第9章 総合実践",
    "kurumiIntro": "第9章の総まとめ！`load_route()` から `?` で横と縦の距離を受け取り、異常があれば安全に切り替えてスイッチ連動ゲートとL字ルートを突破しよう！",
    "goalSummary": "Result と ? を使い金庫⚡4＋スイッチ連動ゲートを通って (3, 3) へ",
    "bookSectionTitle": "第9章まとめ — 堅牢なエラー処理設計",
    "bookSummary": "計算や読み取りの関数は `?` でエラーを委譲し、最上位の制御側で `match` や `unwrap_or` で回復するのがRust流の安全設計です。",
    "bookKeyCode": "let (dx, dy) = load_route().unwrap_or((3, 2));",
    "starterCode": "fn load_pair() -> Result<(i32, i32), String> {\n    let x = read_part(3)?;\n    let y = read_part(2)?;\n    Ok((x / 10, y / 10))\n}\n\nfn main() {\n    match load_pair() {\n        Ok((dx, dy)) => {\n            add_vault(dx + dy - 1);\n            step(dx);\n            turn_right();\n            // 下に dy 歩進んでゴール (3, 3) へ！\n            \n        },\n        Err(e) => println!(\"ERR: {}\", e),\n    }\n}",
    "solutionCode": "fn load_pair() -> Result<(i32, i32), String> {\n    let x = read_part(3)?;\n    let y = read_part(2)?;\n    Ok((x / 10, y / 10))\n}\n\nfn main() {\n    match load_pair() {\n        Ok((dx, dy)) => {\n            add_vault(dx + dy - 1);\n            step(dx);\n            turn_right();\n            step(dy);\n        },\n        Err(e) => println!(\"ERR: {}\", e),\n    }\n}",
    "quickChips": [
      {
        "label": "step(dy);",
        "insert": "step(dy);\n            "
      }
    ],
    "hints": [
      "dx = 3、dy = 2 で、スイッチ (2, 1) を踏んで連動ゲート (3, 2) を開けながら進めるよ！",
      "turn_right(); のあとに step(dy); を書き足そう。",
      "turn_right();\nstep(dy);"
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
      "switches": [
        {
          "x": 2,
          "y": 1
        }
      ],
      "gates": [
        {
          "x": 3,
          "y": 2,
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
    "parTicks": 7
  },
  {
    "displayId": "9-24",
    "id": "d926b74c-71b4-5d77-9b38-3c14adde08ca",
    "index": 224,
    "chapter": 9,
    "chapterTitle": "第9章 エラー処理",
    "stageKind": "challenge",
    "title": "9-24. 第9章挑戦：無停止オートリカバリ迷宮",
    "topicTag": "第9章 最終チャレンジ",
    "kurumiIntro": "第9章の最終挑戦！複数のセンサー検査から `?` と `match` と `unwrap_or` を総動員し、スパーク・スイッチ・連動ゲート・金庫⚡6・コア納品のすべてをやり切ろう！",
    "goalSummary": "Result 完全制覇で \"SAFE_CLEAR\"・金庫⚡6・コア⚡5+・全スイッチ・(5, 3) へ",
    "bookSectionTitle": "第9章まとめ — 無停止フェイルセーフ制御",
    "bookSummary": "あらゆる失敗可能性を `Result` と `?` で明示し、適切な回復値へ着地させることで、止まらないシステムを組み上げました。",
    "bookKeyCode": "match run() { Ok(_) => ..., Err(_) => recover() }",
    "starterCode": "fn safe_go(n: i32) {\n    // TODO: 条件を満たすように実装しよう\n}\n\nfn check_batch() -> Result<i32, String> {\n    // TODO: 条件を満たすように実装しよう\n    Err(\"TODO\")\n}\n\nfn main() {\n    // 【達成条件】\n    // - ゴール到達: (5, 3)\n    // - 全スイッチ作動: (2, 1), (4, 1)\n    // - 金庫目標: ⚡6 以上を貯める\n    // - コア納品: 1個（⚡5以上） [拾う(1,1) -> 強化⚡5+(2,1) -> 納品(5,3)]\n    // - 標準出力(println!): \"SAFE_CLEAR\" を出力\n    // - 安全処理: パニックせず Result を安全に扱う\n    let target_vault = 6; // 目標金庫エネルギー（⚡6以上）\n    let min_core_power = 5; // 納品コアの必要パワー（⚡5以上）\n    let expected_output = \"SAFE_CLEAR\"; // println! で出力に含める文字列\n    \n}",
    "solutionCode": "fn safe_go(n: i32) {\n    for _ in 0..n {\n        while is_spark_ahead() || !is_gate_open() { wait_tick(1); }\n        step();\n    }\n}\n\nfn check_batch() -> Result<i32, String> {\n    let p1 = read_part(3)?;\n    let p2 = read_part(3)?;\n    Ok((p1 + p2) / 10)\n}\n\nfn main() {\n    let energy = check_batch().unwrap_or(0);\n    add_vault(energy);\n    println!(\"SAFE_CLEAR\");\n    safe_go(1);\n    let mut c = grab_core();\n    safe_go(1);\n    boost(&mut c);\n    safe_go(3);\n    turn_right();\n    safe_go(2);\n    deliver(c);\n}",
    "quickChips": [
      {
        "label": "let mut c = grab_core();",
        "insert": "let mut c = grab_core();\n    "
      },
      {
        "label": "boost(&mut c);",
        "insert": "boost(&mut c);\n    "
      },
      {
        "label": "safe_go(3);",
        "insert": "safe_go(3);\n    "
      },
      {
        "label": "deliver(c);",
        "insert": "deliver(c);"
      }
    ],
    "hints": [
      "check_batch() -> Result<i32, String> で ? を使って合計⚡6を計算し、add_vault(energy); と println!(\"SAFE_CLEAR\"); を実行しよう！",
      "スパーク・ゲート待ちの safe_go を用意し、(1,1)コア取得 → (2,1)強化兼スイッチ → (3,1)スパーク → (4,1)スイッチ → (5,1)右折 → (5,3)納品！",
      "fn safe_go(n: i32) {\n    for _ in 0..n {\n        while is_spark_ahead() || !is_gate_open() { wait_tick(1); }\n        step();\n    }\n}\n\nfn check_batch() -> Result<i32, String> {\n    let p1 = read_part(3)?;\n    let p2 = read_part(3)?;\n    Ok((p1 + p2) / 10)\n}\n\nfn main() {\n    let energy = check_batch().unwrap_or(0);\n    add_vault(energy);\n    println!(\"SAFE_CLEAR\");\n    safe_go(1);\n    let mut c = grab_core();\n    safe_go(1);\n    boost(&mut c);\n    safe_go(3);\n    turn_right();\n    safe_go(2);\n    deliver(c);\n}"
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
          "label": "安全コア"
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
      "vaultTarget": 6,
      "stdoutIncludes": [
        "SAFE_CLEAR"
      ],
      "requireAllSwitches": true,
      "requireSpatialCoreRules": true,
      "requireSafeErrorHandling": true
    },
    "parTicks": 15
  }
];
