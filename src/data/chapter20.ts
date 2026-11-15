import { StageDefinition } from '../types/game';

export const CHAPTER_20_STAGES: StageDefinition[] = [
  {
    "displayId": "20-1",
    "id": "e5174596-ce40-5101-8458-936adfaa471e",
    "index": 381,
    "chapter": 20,
    "chapterTitle": "第20章 マルチスレッドWebサーバプロジェクト",
    "title": "20-1. ThreadPool 並列注文処理の基本",
    "topicTag": "ThreadPool / ジョブ実行",
    "kurumiIntro": "いよいよ最終章「マルチスレッド工房サーバ」！まずは `ThreadPool::new(2)` でワーカーを起動して注文ジョブを並列でさばき、`drop(pool)` で綺麗に片付けよう！",
    "goalSummary": "3つのジョブを並列処理して金庫⚡3＋正常終了しゴールへ",
    "bookSectionTitle": "20.2 マルチスレッドWebサーバのThreadPool構築",
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
    "displayId": "20-2",
    "id": "4afacd4d-4762-58fe-a29a-d9d840ab00a1",
    "index": 382,
    "chapter": 20,
    "chapterTitle": "第20章 マルチスレッドWebサーバプロジェクト",
    "title": "20-2. 並列リクエスト受付と応答ログ",
    "topicTag": "ThreadPool / 応答処理",
    "kurumiIntro": "町のお祭りブースから4つの注文リクエストが届いたよ！各ワーカーで金庫チャージと応答メッセージ `\"REQ_OK\"` の出力を行おう！",
    "goalSummary": "4ジョブ並列処理＋\"REQ_OK\" 出力＋金庫⚡4＋(4, 2) へ",
    "bookSectionTitle": "20.1 & 20.2 HTTPリクエストの並列処理",
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
    "displayId": "20-3",
    "id": "bbc23ec8-df92-58c5-9893-853e4f7ed3e3",
    "index": 383,
    "chapter": 20,
    "chapterTitle": "第20章 マルチスレッドWebサーバプロジェクト",
    "title": "20-3. Drop によるグレースフル・シャットダウン",
    "topicTag": "グレースフル・シャットダウン",
    "kurumiIntro": "お祭りの終わりに電源を切るときは、途中で作業中のワーカーを置いてきぼりにしないことが大切！`drop(pool);` で全員の作業完了を待ってから `\"SHUTDOWN\"` を出し、L字の出口へ向かおう！",
    "goalSummary": "drop(pool) で全員待機し \"SHUTDOWN\" 出力＋(3, 4) へ",
    "bookSectionTitle": "20.3 ThreadPool に Drop を実装して優雅に終了する",
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
    "displayId": "20-4",
    "id": "9f448eba-db6a-5cb2-b0e7-68f02e74f4e5",
    "index": 384,
    "chapter": 20,
    "chapterTitle": "第20章 マルチスレッドWebサーバプロジェクト",
    "title": "20-4. 卒業試験フィナーレ：歯車町お祭りサーバ完全稼働！",
    "topicTag": "卒業試験フィナーレ",
    "kurumiIntro": "ついに全384ステージのグランドフィナーレ！！パン・お花・手紙・珈琲の4つの注文を `ThreadPool` で並列処理し、`drop(pool)` で綺麗に締めて、連動ゲートをくぐり抜けてゴールしよう！！",
    "goalSummary": "4ジョブ並列処理＋\"FESTIVAL_OK\"＋金庫⚡4＋ゲート突破で完全クリア！",
    "bookSectionTitle": "第20章 最後のプロジェクト 卒業フィナーレ",
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
