import { StageDefinition } from '../types/game';

export const CHAPTER_5_STAGES: StageDefinition[] = [
  {
    "id": "d4dc4dd5-37fe-55b0-840d-6f5cd5c28449",
    "displayId": "5-1",
    "index": 20,
    "chapter": 5,
    "chapterTitle": "第5章 最終工房",
    "stageKind": "basic",
    "title": "5-1. 連動スイッチの順序制御",
    "topicTag": "状態遷移 / スイッチ / ゲート",
    "kurumiIntro": "スイッチを踏むとゲートが開くよ。作動条件を満たしてから出口へ向かおう。",
    "goalSummary": "スイッチ (1, 1) を作動させてゴール (5, 1) へ",
    "bookSectionTitle": "状態遷移を条件にした経路設計",
    "bookSummary": "スイッチの状態変化を利用して、閉じたゲートを通過できます。",
    "bookKeyCode": "step(); // スイッチを作動させてから進む",
    "starterCode": "fn main() {\n    step(4);\n}",
    "solutionCode": "fn main() {\n    step(5);\n}",
    "quickChips": [
      {
        "label": "解法の式",
        "insert": "    step(5);"
      }
    ],
    "hints": [
      "ゲートはスイッチと連動しているよ。",
      "スイッチを先に踏むルートを組もう。",
      "fn main() {\n    step(5);\n}"
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
        }
      ],
      "gates": [
        {
          "x": 4,
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
    "parTicks": 5
  },
  {
    "id": "df52b0f7-29aa-5965-8db4-b5616f725645",
    "displayId": "5-2",
    "index": 21,
    "chapter": 5,
    "chapterTitle": "第5章 最終工房",
    "stageKind": "basic",
    "title": "5-2. 二段コンベアの最短経路",
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
    "id": "43ab1131-4d40-515c-a2d4-442f803d6756",
    "displayId": "5-3",
    "index": 22,
    "chapter": 5,
    "chapterTitle": "第5章 最終工房",
    "stageKind": "challenge",
    "title": "5-3. 出口までの距離を読み解く",
    "topicTag": "観察 / 経路設計",
    "kurumiIntro": "盤面の幅を観察して、開始地点から出口までの移動計画を立てよう。",
    "goalSummary": "最短の直線経路で (5, 1) へ到達",
    "bookSectionTitle": "盤面から移動量を導く",
    "bookSummary": "開始座標とゴール座標の差から必要な移動回数を計算します。",
    "bookKeyCode": "step(5);",
    "starterCode": "fn main() {\n    step(4);\n}",
    "solutionCode": "fn main() {\n    step(5);\n}",
    "quickChips": [
      {
        "label": "解法の式",
        "insert": "    step(5);"
      }
    ],
    "hints": [
      "開始地点からゴールまでは5マスだよ。",
      "足りない移動分を補おう。",
      "fn main() {\n    step(5);\n}"
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
      }
    },
    "victoryCondition": {
      "reachGoal": true
    },
    "parTicks": 5
  },
  {
    "id": "16ed0178-ef2e-5a7d-a8ba-2991d8158f21",
    "displayId": "5-4",
    "index": 39,
    "chapter": 5,
    "chapterTitle": "第5章 最終工房",
    "stageKind": "basic",
    "title": "5-4. 金庫と経路を同時に設計",
    "topicTag": "状態管理 / 金庫 / 経路設計",
    "kurumiIntro": "必要な出力を変数で管理し、金庫を満たしてから最短経路でゴールしよう。",
    "goalSummary": "金庫⚡3を満たして (4, 1) へ到達",
    "bookSectionTitle": "状態を計算してから行動する",
    "bookSummary": "計算結果を変数に保持し、複数の工房操作へ再利用できます。",
    "bookKeyCode": "let power = 3;\nadd_vault(power);",
    "starterCode": "fn main() {\n    add_vault(2);\n    step(4);\n}",
    "solutionCode": "fn main() {\n    let power = 3;\n    add_vault(power);\n    step(4);\n}",
    "quickChips": [
      {
        "label": "解法の式",
        "insert": "    let power = 3;\n    add_vault(power);\n    step(4);"
      }
    ],
    "hints": [
      "金庫の目標は⚡3だよ。",
      "値を変数に入れて金庫へ加えよう。",
      "fn main() {\n    let power = 3;\n    add_vault(power);\n    step(4);\n}"
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
    "parTicks": 4
  },
  {
    "id": "fd54d254-8058-5ea2-b219-edc362ccc7f3",
    "displayId": "5-5",
    "index": 65,
    "chapter": 5,
    "chapterTitle": "第5章 最終工房",
    "stageKind": "puzzle",
    "title": "5-5. 関数へ経路を分割",
    "topicTag": "関数 / パラメーター",
    "kurumiIntro": "移動処理を関数にまとめ、渡された距離を正しく実行しよう。",
    "goalSummary": "travel 関数で (4, 1) へ到達",
    "bookSectionTitle": "関数に手順をまとめる",
    "bookSummary": "引数で操作量を受け取る関数を作ると、手順を再利用できます。",
    "bookKeyCode": "fn travel(n: i32) { step(n); }",
    "starterCode": "fn travel(n: i32) {\n    step(n - 1);\n}\nfn main() { travel(4); }",
    "solutionCode": "fn travel(n: i32) {\n    step(n);\n}\nfn main() { travel(4); }",
    "quickChips": [
      {
        "label": "解法の式",
        "insert": "fn travel(n: i32) {\n    step(n);\n}\nfn main() { travel(4); "
      }
    ],
    "hints": [
      "travel の中で n を使っているよ。",
      "渡された距離と同じ数だけ進もう。",
      "fn travel(n: i32) {\n    step(n);\n}\nfn main() { travel(4); }"
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
    "id": "dbe5cb60-8cd1-5370-a936-ac55e631e484",
    "displayId": "5-6",
    "index": 94,
    "chapter": 5,
    "chapterTitle": "第5章 最終工房",
    "stageKind": "puzzle",
    "title": "5-6. 反復処理で距離を走破",
    "topicTag": "for / 反復制御",
    "kurumiIntro": "同じ操作を繰り返すループを組み、必要な距離だけ走り切ろう。",
    "goalSummary": "ループで3マス進みゴールへ到達",
    "bookSectionTitle": "反復回数を設計する",
    "bookSummary": "for ループの範囲を決めると、同じ操作を安全に繰り返せます。",
    "bookKeyCode": "for _ in 0..3 { step(); }",
    "starterCode": "fn main() {\n    for _ in 0..2 { step(); }\n}",
    "solutionCode": "fn main() {\n    for _ in 0..3 { step(); }\n}",
    "quickChips": [
      {
        "label": "解法の式",
        "insert": "    for _ in 0..3 { step(); }"
      }
    ],
    "hints": [
      "ループの終端は含まれないよ。",
      "0..3 なら3回実行するよ。",
      "fn main() {\n    for _ in 0..3 { step(); }\n}"
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
    "displayId": "5-7",
    "id": "e5174596-ce40-5101-8458-936adfaa471e",
    "index": 381,
    "chapter": 5,
    "chapterTitle": "第5章 最後のプロジェクト",
    "title": "5-7. ThreadPool 並列注文処理の基本",
    "topicTag": "ThreadPool / ジョブ実行",
    "kurumiIntro": "いよいよ最終章「マルチスレッド工房サーバ」！まずは `ThreadPool::new(2)` でワーカーを起動して注文ジョブを並列でさばき、`drop(pool)` で綺麗に片付けよう！",
    "goalSummary": "3つのジョブを並列処理して金庫⚡3＋正常終了しゴールへ",
    "bookSectionTitle": "5.2 マルチスレッドWebサーバのThreadPool構築",
    "bookSummary": "`ThreadPool` で決まった数のワーカースレッドにジョブを振り分け、終了時には `Drop` 実装によって全スレッドの完了を待ってから安全にシャットダウンします。",
    "bookKeyCode": "let pool = ThreadPool::new(2);\npool.execute(|| { add_vault(1); });\ndrop(pool);",
    "starterCode": "fn main() {\n    let pool = ThreadPool::new(2);\n    for job in job_queue() {\n        pool.execute(|| {\n            // 各ジョブで金庫に +1 しよう！\n            \n        });\n    }\n    // 全ワーカーの正常シャットダウン\n    drop(pool);\n    step(3);\n}",
    "solutionCode": "fn main() {\n    let pool = ThreadPool::new(2);\n    for job in job_queue() {\n        pool.execute(|| {\n            add_vault(1);\n        });\n    }\n    drop(pool);\n    step(3);\n}",
    "quickChips": [
      {
        "label": "add_vault(1);",
        "insert": "add_vault(1);\n        "
      }
    ],
    "hints": [
      "job_queue() には3つの注文が入っているよ。各ジョブの中で金庫に +1 しよう！",
      "pool.execute(|| { ... }); の中に `add_vault(1);` を書けば、ワーカーたちが並列処理して最後に drop(pool) が綺麗に待ってくれるよ！",
      "pool.execute(|| {\n    add_vault(1);\n});"
    ],
    "worldSetup": {
      "width": 5,
      "height": 3,
      "walls": [
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
          "x": 3,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        }
      ],
      "botStart": {
        "x": 0,
        "y": 2,
        "dir": 0
      },
      "goal": {
        "x": 3,
        "y": 2
      },
      "workerStart": {
        "x": 0,
        "y": 0,
        "dir": 0
      },
      "jobs": [
        1,
        2,
        3
      ],
      "vault": {
        "x": 2,
        "y": 1,
        "initial": 0,
        "target": 3
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "vaultTarget": 3,
      "jobsRequired": 3
    },
    "parTicks": 10
  },
  {
    "displayId": "5-8",
    "id": "4afacd4d-4762-58fe-a29a-d9d840ab00a1",
    "index": 382,
    "chapter": 5,
    "chapterTitle": "第5章 最後のプロジェクト",
    "title": "5-8. 並列リクエスト受付と応答ログ",
    "topicTag": "ThreadPool / 応答処理",
    "kurumiIntro": "町のお祭りブースから4つの注文リクエストが届いたよ！各ワーカーで金庫チャージと応答メッセージ `\"REQ_OK\"` の出力を行おう！",
    "goalSummary": "4ジョブ並列処理＋\"REQ_OK\" 出力＋金庫⚡4＋(4, 2) へ",
    "bookSectionTitle": "5.1 & 5.2 HTTPリクエストの並列処理",
    "bookSummary": "受け取った各リクエストをクロージャに包んでスレッドプールへ渡すことで、待ち時間を減らして効率よくさばけます。",
    "bookKeyCode": "pool.execute(|| { println!(\"REQ_OK\"); add_vault(1); });",
    "starterCode": "fn main() {\n    let pool = ThreadPool::new(2);\n    for req in job_queue() {\n        pool.execute(|| {\n            // \"REQ_OK\" を println! して金庫に +1 しよう\n            add_vault(1);\n        });\n    }\n    drop(pool);\n    step(4);\n}",
    "solutionCode": "fn main() {\n    let pool = ThreadPool::new(2);\n    for req in job_queue() {\n        pool.execute(|| {\n            println!(\"REQ_OK\");\n            add_vault(1);\n        });\n    }\n    drop(pool);\n    step(4);\n}",
    "quickChips": [
      {
        "label": "println!(\"REQ_OK\");",
        "insert": "println!(\"REQ_OK\");\n            "
      }
    ],
    "hints": [
      "今は金庫に +1 するだけで、リクエストへの応答ログが出ていないよ！",
      "pool.execute の中に `println!(\"REQ_OK\");` を追加しよう。",
      "println!(\"REQ_OK\");\nadd_vault(1);"
    ],
    "worldSetup": {
      "width": 6,
      "height": 3,
      "walls": [
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
        }
      ],
      "botStart": {
        "x": 0,
        "y": 2,
        "dir": 0
      },
      "goal": {
        "x": 4,
        "y": 2
      },
      "workerStart": {
        "x": 0,
        "y": 0,
        "dir": 0
      },
      "jobs": [
        1,
        2,
        3,
        4
      ],
      "vault": {
        "x": 2,
        "y": 1,
        "initial": 0,
        "target": 4
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "vaultTarget": 4,
      "jobsRequired": 4,
      "stdoutIncludes": [
        "REQ_OK"
      ]
    },
    "parTicks": 12
  },
  {
    "displayId": "5-9",
    "id": "bbc23ec8-df92-58c5-9893-853e4f7ed3e3",
    "index": 383,
    "chapter": 5,
    "chapterTitle": "第5章 最後のプロジェクト",
    "title": "5-9. Drop によるグレースフル・シャットダウン",
    "topicTag": "グレースフル・シャットダウン",
    "kurumiIntro": "お祭りの終わりに電源を切るときは、途中で作業中のワーカーを置いてきぼりにしないことが大切！`drop(pool);` で全員の作業完了を待ってから `\"SHUTDOWN\"` を出し、L字の出口へ向かおう！",
    "goalSummary": "drop(pool) で全員待機し \"SHUTDOWN\" 出力＋(3, 4) へ",
    "bookSectionTitle": "5.3 ThreadPool に Drop を実装して優雅に終了する",
    "bookSummary": "スレッドプールが破棄（drop）される際に各ワーカーを join() して待機することで、処理途中のジョブを失わず安全に終了できます。",
    "bookKeyCode": "drop(pool);\nprintln!(\"SHUTDOWN\");",
    "starterCode": "fn main() {\n    let pool = ThreadPool::new(2);\n    for job in job_queue() {\n        pool.execute(|| {\n            add_vault(1);\n        });\n    }\n    // drop(pool); で全ワーカーの終了を待ってから println!(\"SHUTDOWN\"); を出そう！\n    step(3);\n    turn_right();\n    step(2);\n}",
    "solutionCode": "fn main() {\n    let pool = ThreadPool::new(2);\n    for job in job_queue() {\n        pool.execute(|| {\n            add_vault(1);\n        });\n    }\n    drop(pool);\n    println!(\"SHUTDOWN\");\n    step(3);\n    turn_right();\n    step(2);\n}",
    "quickChips": [
      {
        "label": "drop(pool);",
        "insert": "drop(pool);\n    "
      },
      {
        "label": "println!(\"SHUTDOWN\");",
        "insert": "println!(\"SHUTDOWN\");\n    "
      }
    ],
    "hints": [
      "まだ drop(pool); も \"SHUTDOWN\" のログ出力も書かれていないよ！",
      "`drop(pool);` のあとに `println!(\"SHUTDOWN\");` を書けば安全にシャットダウンできるよ。",
      "drop(pool);\nprintln!(\"SHUTDOWN\");"
    ],
    "worldSetup": {
      "width": 5,
      "height": 5,
      "walls": [
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
          "x": 3,
          "y": 1
        },
        {
          "x": 4,
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
          "x": 2,
          "y": 3
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
        "y": 4
      },
      "workerStart": {
        "x": 0,
        "y": 0,
        "dir": 0
      },
      "jobs": [
        1,
        2,
        3
      ],
      "vault": {
        "x": 2,
        "y": 1,
        "initial": 0,
        "target": 3
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "vaultTarget": 3,
      "jobsRequired": 3,
      "stdoutIncludes": [
        "SHUTDOWN"
      ]
    },
    "parTicks": 14
  },
  {
    "displayId": "5-10",
    "id": "9f448eba-db6a-5cb2-b0e7-68f02e74f4e5",
    "index": 384,
    "chapter": 5,
    "chapterTitle": "第5章 最後のプロジェクト",
    "title": "5-10. 卒業試験フィナーレ：歯車町お祭りサーバ完全稼働！",
    "topicTag": "卒業試験フィナーレ",
    "kurumiIntro": "ついに全192ステージのグランドフィナーレ！！パン・お花・手紙・珈琲の4つの注文を `ThreadPool` で並列処理し、`drop(pool)` で綺麗に締めて、連動ゲートをくぐり抜けてゴールしよう！！",
    "goalSummary": "4ジョブ並列処理＋\"FESTIVAL_OK\"＋金庫⚡4＋ゲート突破で完全クリア！",
    "bookSectionTitle": "第5章 最後のプロジェクト 卒業フィナーレ",
    "bookSummary": "Rust の所有権・借用・型安全性・並列処理・リソース解放のすべてがここに結集。安全で力強いシステムを自分の手で組み上げました！",
    "bookKeyCode": "pool.execute(|| { ... }); drop(pool); step(5);",
    "starterCode": "fn main() {\n    let pool = ThreadPool::new(2);\n    for order in job_queue() {\n        pool.execute(|| {\n            add_vault(1);\n        });\n    }\n    drop(pool);\n    println!(\"FESTIVAL_OK\");\n    // スイッチ(2, 2)を通ってゲート(3, 2)の先のゴール(5, 2)へ進もう！\n    step(2);\n}",
    "solutionCode": "fn main() {\n    let pool = ThreadPool::new(2);\n    for order in job_queue() {\n        pool.execute(|| {\n            add_vault(1);\n        });\n    }\n    drop(pool);\n    println!(\"FESTIVAL_OK\");\n    step(5);\n}",
    "quickChips": [
      {
        "label": "step(5);",
        "insert": "step(5);"
      }
    ],
    "hints": [
      "4つのジョブを処理して drop(pool) まではバッチリ！あとはステップ数を増やしてゲートを越えよう。",
      "最後の `step(2);` を `step(5);` にすると、スイッチ(2, 2)を踏んでゲート(3, 2)を開き、ゴール(5, 2)まで一気に到達できるよ！",
      "step(5);"
    ],
    "worldSetup": {
      "width": 7,
      "height": 3,
      "walls": [
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
          "x": 6,
          "y": 1
        }
      ],
      "botStart": {
        "x": 0,
        "y": 2,
        "dir": 0
      },
      "goal": {
        "x": 5,
        "y": 2
      },
      "workerStart": {
        "x": 0,
        "y": 0,
        "dir": 0
      },
      "switches": [
        {
          "x": 2,
          "y": 2
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
            "y": 2
          }
        }
      ],
      "jobs": [
        1,
        2,
        3,
        4
      ],
      "vault": {
        "x": 2,
        "y": 1,
        "initial": 0,
        "target": 4
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "vaultTarget": 4,
      "jobsRequired": 4,
      "stdoutIncludes": [
        "FESTIVAL_OK"
      ]
    },
    "parTicks": 16
  }
];


