import { StageDefinition } from '../types/game';

export const CHAPTER_20_STAGES: StageDefinition[] = [
  {
    "displayId": "20-1",
    "id": "e5174596-ce40-5101-8458-936adfaa471e",
    "index": 395,
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
    "index": 396,
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
    "index": 397,
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
    "id": "430c8775-d934-4e9e-8f27-7f3345c7049f",
    "index": 398,
    "chapter": 20,
    "chapterTitle": "第20章 マルチスレッドWebサーバプロジェクト",
    "stageKind": "puzzle",
    "title": "20-4. ThreadPool×Arc<Mutex>＋ワーカー連動ゲート",
    "topicTag": "ThreadPool + Arc<Mutex> + コア",
    "kurumiIntro": "`ThreadPool` の各ワーカーが `job_queue()` の仕事を `Arc<Mutex<i32>>` で受け持ち共有金庫⚡6を増やしながらスイッチ `(2, 0)` を踏み、`drop(pool);` で合流したあとにフェリスちゃんがコアを強化して納品しよう！",
    "goalSummary": "3ジョブ並列処理・金庫⚡6・全スイッチ・コア⚡4+納品・2体ゴールへ",
    "bookSectionTitle": "20.2 & 20.3 スレッドプールでの共有状態管理と連動制御",
    "bookSummary": "`Arc::clone` した共有ミューテックスをワーカージョブへ渡し、さらにワーカー自身の移動・スイッチ押下を `drop(pool)` で同期させて安全に合流します。",
    "bookKeyCode": "let v = Arc::clone(&vault); pool.execute(move || { ... }); drop(pool);",
    "starterCode": "fn main() {\n    // 【達成条件】\n    // - ゴール到達: フェリスちゃん (4, 2) / みるく号 (3, 0)\n    // - 全スイッチ作動: (2, 0)\n    // - 金庫目標: ⚡6 以上を貯める\n    // - コア納品: 1個（⚡4以上） [拾う(1,2) -> 強化⚡4+(3,2) -> 納品(4,2)]\n    // - 並列ジョブ: ThreadPool で 3件のジョブを完遂\n    let target_vault = 6; // 目標金庫エネルギー（⚡6以上）\n    let min_core_power = 4; // 納品コアの必要パワー（⚡4以上）\n    let required_jobs = 3; // ThreadPool で処理するジョブ数\n\n    // --- ステージの初期データ / 機構 ---\n    let vault = Arc::new(Mutex::new(0));\n    let pool = ThreadPool::new(2);\n\n    for _ in job_queue() {\n        pool.execute(move || {\n            // TODO: 各ジョブでの処理を書こう\n        });\n    }\n    drop(pool);\n    // TODO: ジョブ合流後の処理を書こう\n}",
    "solutionCode": "fn main() {\n    let vault = Arc::new(Mutex::new(0));\n    let pool = ThreadPool::new(2);\n    for _ in job_queue() {\n        let v = Arc::clone(&vault);\n        pool.execute(move || {\n            {\n                let mut g = v.lock().unwrap();\n                *g += 2;\n            }\n            step(3);\n        });\n    }\n    drop(pool);\n    step(1);\n    let mut core = grab_core();\n    while !is_gate_open() {\n        wait_tick(1);\n    }\n    step(2);\n    boost(&mut core);\n    step(1);\n    deliver(core);\n}",
    "quickChips": [
      {
        "label": "drop(pool);",
        "insert": "drop(pool);\n    "
      },
      {
        "label": "boost(&mut core);",
        "insert": "boost(&mut core);\n    "
      }
    ],
    "hints": [
      "`ThreadPool::new(2)` で `job_queue()` の3ジョブを実行し、各ワーカーが金庫+2＆3歩進んでスイッチを踏み終えたら `drop(pool);` で合流しよう。その後メインで1歩コア取得→ゲート待ち→2歩強化(3, 2)⚡4+→1歩納品へ！",
      "`for _ in job_queue() { ... pool.execute(move || { { let mut g = v.lock().unwrap(); *g += 2; } step(3); }); }` の直後に `drop(pool);` を書き、続けてコア取得・`while !is_gate_open()`・`step(2); boost(&mut core); step(1); deliver(core);` を書こう。",
      "fn main() {\n    let vault = Arc::new(Mutex::new(0));\n    let pool = ThreadPool::new(2);\n    for _ in job_queue() {\n        let v = Arc::clone(&vault);\n        pool.execute(move || {\n            {\n                let mut g = v.lock().unwrap();\n                *g += 2;\n            }\n            step(3);\n        });\n    }\n    drop(pool);\n    step(1);\n    let mut core = grab_core();\n    while !is_gate_open() {\n        wait_tick(1);\n    }\n    step(2);\n    boost(&mut core);\n    step(1);\n    deliver(core);\n}"
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
      "workerGoal": {
        "x": 3,
        "y": 0
      },
      "cores": [
        {
          "id": "c1",
          "x": 1,
          "y": 2,
          "power": 2,
          "label": "注文コア"
        }
      ],
      "chargers": [
        {
          "x": 3,
          "y": 2
        }
      ],
      "deliveries": [
        {
          "x": 4,
          "y": 2
        }
      ],
      "switches": [
        {
          "x": 2,
          "y": 0
        }
      ],
      "gates": [
        {
          "x": 2,
          "y": 2,
          "openTicks": 1,
          "closedTicks": 1,
          "linkedSwitch": {
            "x": 2,
            "y": 0
          }
        }
      ],
      "jobs": [
        1,
        2,
        3
      ],
      "vault": {
        "x": 2,
        "y": 1,
        "initial": 0,
        "target": 6
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "workerReachGoal": true,
      "deliverCores": 1,
      "minCorePower": 4,
      "vaultTarget": 6,
      "jobsRequired": 3,
      "requireAllSwitches": true,
      "requireSpatialCoreRules": true
    },
    "parTicks": 16
  },
  {
    "displayId": "20-5",
    "id": "4d0970b3-9a05-46e7-a8a8-f0299fdbe264",
    "index": 399,
    "chapter": 20,
    "chapterTitle": "第20章 マルチスレッドWebサーバプロジェクト",
    "stageKind": "challenge",
    "title": "20-5. 第20章チャレンジ：本番前高負荷サーバ総合演習",
    "topicTag": "第20章 本番前チャレンジ",
    "kurumiIntro": "グランドフィナーレ前の最終実戦テスト！`#[test]`・`#[cfg(feature = \"fast\")]`・`ThreadPool`・`job_queue()`・`Arc<Mutex>`・`mpsc::channel`・`drop(pool)`・`println!`＆`eprintln!`・ダイヤル・連動ゲート・スパーク回避・空間コア納品を28ティック以内に決めよう！",
    "goalSummary": "テスト合格・3ジョブ完遂・SERVER_READY＆QUEUE_OK出力・金庫⚡6・ダイヤル(6)・全スイッチ・コア⚡4+納品・2体ゴールを28ティック以内に達成",
    "bookSectionTitle": "20.3 本番負荷シミュレーション — 全並列機構の総結合",
    "bookSummary": "スレッドプール、共有状態ロック、チャンネル集計、グレースフル・シャットダウンとエラー出力を統合し、制限時間内の安定稼働を実証します。",
    "bookKeyCode": "ThreadPool + Arc<Mutex> + mpsc::channel + drop(pool) + #[test]",
    "starterCode": "fn calc_cap(a: i32, b: i32) -> i32 {\n    // TODO: 条件を満たすように実装しよう\n    0\n}\n\n#[test]\nfn t_cap() {\n    assert_eq!(calc_cap(3, 2), 6);\n}\n\n#[cfg(feature = \"fast\")]\nfn main() {\n    // 【達成条件】\n    // - ゴール到達: フェリスちゃん (6, 2) / みるく号 (3, 0)\n    // - 全スイッチ作動: (2, 0)\n    // - 金庫目標: ⚡6 以上を貯める\n    // - ダイヤル解除: 値 6 を求めて try_dial(...) を呼ぶ\n    // - コア納品: 1個（⚡4以上） [拾う(1,2) -> 検査(2,2) -> 強化⚡4+(5,2) -> 納品(6,2)]\n    // - 標準出力(println!): \"SERVER_READY\" を出力\n    // - エラー出力(eprintln!): \"QUEUE_OK\" を出力\n    // - ユニットテスト: #[test] を 1個以上すべて合格\n    // - 並列ジョブ: ThreadPool で 3件のジョブを完遂\n    // - 制限時間: 28 ティック以内（#[cfg(feature = \"fast\")] 必須）\n    let target_vault = 6; // 目標金庫エネルギー（⚡6以上）\n    let target_dial = 6; // ダイヤル解除コード（6 を計算して try_dial へ）\n    let min_core_power = 4; // 納品コアの必要パワー（⚡4以上）\n    let required_scans = 1; // 必要な検査回数\n    let required_jobs = 3; // ThreadPool で処理するジョブ数\n    let expected_output = \"SERVER_READY\"; // println! で出力に含める文字列\n    let expected_stderr = \"QUEUE_OK\"; // eprintln! で出力に含める文字列\n    let max_ticks = 28; // 目標制限ティック数\n\n    // --- ステージの初期データ / 機構 ---\n    let vault = Arc::new(Mutex::new(0));\n    let pool = ThreadPool::new(2);\n\n    for _ in job_queue() {\n        pool.execute(move || {\n            // TODO: 各ジョブでの処理を書こう\n        });\n    }\n    drop(pool);\n    // TODO: ジョブ合流後の処理を書こう\n}",
    "solutionCode": "fn calc_cap(a: i32, b: i32) -> i32 {\n    a * b\n}\n\n#[test]\nfn t_cap() {\n    assert_eq!(calc_cap(3, 2), 6);\n}\n\n#[cfg(feature = \"fast\")]\nfn main() {\n    let vault = Arc::new(Mutex::new(0));\n    let (tx, rx) = mpsc::channel();\n    let pool = ThreadPool::new(2);\n    for _ in job_queue() {\n        let v = Arc::clone(&vault);\n        pool.execute(move || {\n            { let mut g = v.lock().unwrap(); *g += 2; }\n            tx.send(2);\n            step(3);\n        });\n    }\n    drop(pool);\n    let mut sum = 0;\n    for _ in 0..3 {\n        sum += rx.recv().unwrap();\n    }\n    try_dial(sum);\n    println!(\"SERVER_READY\");\n    eprintln!(\"QUEUE_OK: {}\", sum);\n    step(1);\n    let mut core = grab_core();\n    step(1);\n    scan(&core);\n    while !is_gate_open() {\n        wait_tick(1);\n    }\n    step(1);\n    while is_spark_ahead() {\n        wait_tick(1);\n    }\n    step(2);\n    boost(&mut core);\n    step(1);\n    deliver(core);\n}",
    "quickChips": [
      {
        "label": "a * b",
        "insert": "a * b"
      },
      {
        "label": "drop(pool);",
        "insert": "drop(pool);\n    "
      },
      {
        "label": "eprintln!(\"QUEUE_OK: {}\", sum);",
        "insert": "eprintln!(\"QUEUE_OK: {}\", sum);\n    "
      },
      {
        "label": "boost(&mut core);",
        "insert": "boost(&mut core);\n    "
      }
    ],
    "hints": [
      "28ティック以内のため `#[cfg(feature = \"fast\")]` と `#[test]` を書き、`ThreadPool`＋`job_queue()` の3ジョブ（各+2＆チャンネル送信＆3歩）を `drop(pool);` で待ってから、合計6でダイヤル(6)＆`SERVER_READY`・`QUEUE_OK` を出力しよう。",
      "`drop(pool);` 後に `rx.recv()` を3回足して `try_dial(sum)`・`println!(\"SERVER_READY\")`・`eprintln!(\"QUEUE_OK: {}\", sum)` を実行し、1歩取得→1歩 `scan`→ゲート待ち→1歩→スパーク待ち→2歩 `boost`→1歩 `deliver` しよう。",
      "fn calc_cap(a: i32, b: i32) -> i32 {\n    a * b\n}\n\n#[test]\nfn t_cap() {\n    assert_eq!(calc_cap(3, 2), 6);\n}\n\n#[cfg(feature = \"fast\")]\nfn main() {\n    let vault = Arc::new(Mutex::new(0));\n    let (tx, rx) = mpsc::channel();\n    let pool = ThreadPool::new(2);\n    for _ in job_queue() {\n        let v = Arc::clone(&vault);\n        pool.execute(move || {\n            { let mut g = v.lock().unwrap(); *g += 2; }\n            tx.send(2);\n            step(3);\n        });\n    }\n    drop(pool);\n    let mut sum = 0;\n    for _ in 0..3 {\n        sum += rx.recv().unwrap();\n    }\n    try_dial(sum);\n    println!(\"SERVER_READY\");\n    eprintln!(\"QUEUE_OK: {}\", sum);\n    step(1);\n    let mut core = grab_core();\n    step(1);\n    scan(&core);\n    while !is_gate_open() {\n        wait_tick(1);\n    }\n    step(1);\n    while is_spark_ahead() {\n        wait_tick(1);\n    }\n    step(2);\n    boost(&mut core);\n    step(1);\n    deliver(core);\n}"
    ],
    "worldSetup": {
      "width": 8,
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
          "x": 5,
          "y": 1
        },
        {
          "x": 6,
          "y": 1
        },
        {
          "x": 7,
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
          "x": 3,
          "y": 3
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 6,
          "y": 3
        },
        {
          "x": 7,
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
        },
        {
          "x": 6,
          "y": 4
        },
        {
          "x": 7,
          "y": 4
        }
      ],
      "botStart": {
        "x": 0,
        "y": 2,
        "dir": 0
      },
      "goal": {
        "x": 6,
        "y": 2
      },
      "workerStart": {
        "x": 0,
        "y": 0,
        "dir": 0
      },
      "workerGoal": {
        "x": 3,
        "y": 0
      },
      "cores": [
        {
          "id": "c1",
          "x": 1,
          "y": 2,
          "power": 2,
          "label": "サーバコア"
        }
      ],
      "scanners": [
        {
          "x": 2,
          "y": 2
        }
      ],
      "chargers": [
        {
          "x": 5,
          "y": 2
        }
      ],
      "deliveries": [
        {
          "x": 6,
          "y": 2
        }
      ],
      "switches": [
        {
          "x": 2,
          "y": 0
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
            "y": 0
          }
        }
      ],
      "sparks": [
        {
          "id": "sp1",
          "path": [
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
              "x": 4,
              "y": 2
            },
            {
              "x": 4,
              "y": 1
            }
          ],
          "initialIndex": 0
        }
      ],
      "dial": {
        "x": 1,
        "y": 1,
        "secret": 6
      },
      "vault": {
        "x": 3,
        "y": 1,
        "initial": 0,
        "target": 6
      },
      "jobs": [
        1,
        2,
        3
      ],
      "featureFastMaxTicks": 28
    },
    "victoryCondition": {
      "reachGoal": true,
      "workerReachGoal": true,
      "deliverCores": 1,
      "minCorePower": 4,
      "scanCount": 1,
      "dialSolved": true,
      "vaultTarget": 6,
      "testsRequired": 1,
      "jobsRequired": 3,
      "stdoutIncludes": [
        "SERVER_READY"
      ],
      "stderrIncludes": [
        "QUEUE_OK"
      ],
      "requireAllSwitches": true,
      "requireSpatialCoreRules": true,
      "maxTicks": 28
    },
    "parTicks": 26
  },
  {
    "displayId": "20-6",
    "id": "9f448eba-db6a-5cb2-b0e7-68f02e74f4e5",
    "index": 400,
    "chapter": 20,
    "chapterTitle": "第20章 マルチスレッドWebサーバプロジェクト",
    "title": "20-6. 卒業試験フィナーレ：歯車町お祭りサーバ完全稼働！",
    "topicTag": "卒業試験フィナーレ",
    "kurumiIntro": "ついに全400ステージのグランドフィナーレ！！パン・お花・手紙・珈琲の4つの注文を `ThreadPool` で並列処理し、`drop(pool)` で綺麗に締めて、連動ゲートをくぐり抜けてゴールしよう！！",
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
