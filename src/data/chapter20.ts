import { StageDefinition } from '../types/game';

export const CHAPTER_20_STAGES: StageDefinition[] = [
  {
    "displayId": "20-1",
    "id": "c3c83e83-0264-5981-b647-107682a9c530",
    "index": 329,
    "chapter": 20,
    "chapterTitle": "第20章 恐れるな！並行性",
    "title": "20-1. thread::spawn で2体同時に動かそう",
    "topicTag": "thread::spawn / 並列実行",
    "kurumiIntro": "お待たせ！ミント色の相棒「みるく号」の登場だよ！`thread::spawn(|| { ... })` を呼ぶと、フェリスちゃんとみるく号が2人同時に動き出すよ！",
    "goalSummary": "みるく号を spawn で走らせ、2体とも各ゴールに到達させよう",
    "bookSectionTitle": "20.1 スレッドを使用してコードを同時に走らせる",
    "bookSummary": "`thread::spawn(|| { ... })` を使うと、メインの処理と並行して別スレッドを同時に動かせます。`handle.join()` で終了を待つこともできます。",
    "bookKeyCode": "let handle = thread::spawn(|| {\n    step(2);\n});\nstep(3);\nhandle.join();",
    "starterCode": "fn main() {\n    let handle = thread::spawn(|| {\n        // みるく号（上のレーン）を2歩進めよう！\n        step(1);\n    });\n    // フェリスちゃん（下のレーン）は3歩進もう\n    step(3);\n    handle.join();\n}",
    "solutionCode": "fn main() {\n    let handle = thread::spawn(|| {\n        step(2);\n    });\n    step(3);\n    handle.join();\n}",
    "quickChips": [
      {
        "label": "step(2);",
        "insert": "step(2);"
      }
    ],
    "hints": [
      "上のレーンにいるみるく号のゴールは (2, 0) にあるよ！",
      "spawn の中の `step(1);` を `step(2);` に直そう！",
      "let handle = thread::spawn(|| {\n    step(2);\n});"
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
      "workerGoal": {
        "x": 2,
        "y": 0
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "workerReachGoal": true
    },
    "parTicks": 5
  },
  {
    "displayId": "20-2",
    "id": "5cfe7a0a-c007-56b0-8587-9900dbdbdb47",
    "index": 330,
    "chapter": 20,
    "chapterTitle": "第20章 恐れるな！並行性",
    "title": "20-2. join() でサブスレッドの完了を待つ",
    "topicTag": "handle.join()",
    "kurumiIntro": "みるく号の作業が終わったのを確認してから先に進みたいときは `handle.join();` を使うよ！合図 `\"ALL_JOINED\"` を出す前にちゃんと待ってね。",
    "goalSummary": "みるく号が (3, 0) に着くのを join() で待ってゴールへ",
    "bookSectionTitle": "20.1 join ハンドルを使用してすべてのスレッドの終了を待つ",
    "bookSummary": "`thread::spawn` が返す `JoinHandle` に対して `.join()` を呼ぶと、そのスレッドが完全に終了するまで呼び出し元のスレッドが待機します。",
    "bookKeyCode": "handle.join();\nprintln!(\"ALL_JOINED\");",
    "starterCode": "fn main() {\n    let handle = thread::spawn(|| {\n        step(3);\n        add_vault(3);\n    });\n    // handle.join(); で待ってから step(3); でゴールへ進もう！\n    \n}",
    "solutionCode": "fn main() {\n    let handle = thread::spawn(|| {\n        step(3);\n        add_vault(3);\n    });\n    handle.join();\n    step(3);\n}",
    "quickChips": [
      {
        "label": "handle.join();",
        "insert": "handle.join();\n    "
      },
      {
        "label": "step(3);",
        "insert": "step(3);"
      }
    ],
    "hints": [
      "まだ handle.join() も step(3) も書かれていないよ！",
      "スレッドの完了を待つ `handle.join();` と、メイン側の `step(3);` を追加しよう。",
      "handle.join();\nstep(3);"
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
      "workerGoal": {
        "x": 3,
        "y": 0
      },
      "vault": {
        "x": 2,
        "y": 1,
        "initial": 0,
        "target": 3
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "workerReachGoal": true,
      "vaultTarget": 3
    },
    "parTicks": 8
  },
  {
    "displayId": "20-3",
    "id": "0d3fd059-b354-5e1a-9679-7335cc4bb382",
    "index": 331,
    "chapter": 20,
    "chapterTitle": "第20章 恐れるな！並行性",
    "title": "20-3. 2体協力！スイッチ踏みと連動ゲート通過",
    "topicTag": "並列スイッチ協力パズル",
    "kurumiIntro": "上のレーンにいるみるく号がスイッチ `(1, 0)` を踏むと、下のレーンのゲート `(2, 2)` が開くよ！フェリスちゃんはゲートが開いてから進もうね。",
    "goalSummary": "みるく号がスイッチを踏み、フェリスちゃんがゲートを抜けて両方ゴールへ",
    "bookSectionTitle": "20.1 並列実行による協調動作",
    "bookSummary": "2つのスレッドが別々のレーンで同時に動き、片方の準備が整ってからもう片方が通り抜ける協調パターンです。",
    "bookKeyCode": "while !is_gate_open() { wait_tick(1); }\nstep(2);",
    "starterCode": "fn main() {\n    let h = thread::spawn(|| {\n        // みるく号：スイッチ(1, 0)を通って (3, 0) へ！\n        step(3);\n    });\n    step(1);\n    // (2, 2) のゲートはみるく号がスイッチを踏むまで閉じているよ！\n    while !is_gate_open() {\n        wait_tick(1);\n    }\n    // あと 2歩進んで (3, 2) のゴールへ！\n    \n    h.join();\n}",
    "solutionCode": "fn main() {\n    let h = thread::spawn(|| {\n        step(3);\n    });\n    step(1);\n    while !is_gate_open() {\n        wait_tick(1);\n    }\n    step(2);\n    h.join();\n}",
    "quickChips": [
      {
        "label": "step(2);",
        "insert": "step(2);\n    "
      }
    ],
    "hints": [
      "while !is_gate_open() で待ったあと、ゲートが開いたらあと2歩で (3, 2) に着くよ！",
      "while ループの下に `step(2);` を書こう。",
      "while !is_gate_open() {\n    wait_tick(1);\n}\nstep(2);"
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
      "workerGoal": {
        "x": 3,
        "y": 0
      },
      "switches": [
        {
          "x": 1,
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
            "x": 1,
            "y": 0
          }
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "workerReachGoal": true
    },
    "parTicks": 6
  },
  {
    "displayId": "20-4",
    "id": "d2b69214-1533-5850-9e49-0148257c61f6",
    "index": 332,
    "chapter": 20,
    "chapterTitle": "第20章 恐れるな！並行性",
    "stageKind": "puzzle",
    "title": "20-4. 2体クロススイッチ！互いのゲートを開け合おう",
    "topicTag": "相互スイッチ開放",
    "kurumiIntro": "上下のレーンに分かれたフェリスちゃんとみるく号！互いのレーンにあるスイッチを踏み合って、2つのゲートを同時に開通させよう！",
    "goalSummary": "互いのスイッチを踏み合い、フェリスちゃんとみるく号が両方ゴールへ",
    "bookSectionTitle": "20.1 並列協調による相互ゲート突破",
    "bookSummary": "別々のスレッドが各レーンのスイッチを押すことで、お互いの封鎖ゲートを開け合って同時にゴールへ向かいます。",
    "bookKeyCode": "while !is_gate_open() { wait_tick(1); }",
    "starterCode": "fn main() {\n    let h = thread::spawn(|| {\n        step(1);\n        // 上のみるく号も、フェリスちゃんがスイッチを踏むまでゲート(2, 0)を待とう！\n        step(4);\n    });\n    step(1);\n    while !is_gate_open() {\n        wait_tick(1);\n    }\n    step(3);\n    h.join();\n}",
    "solutionCode": "fn main() {\n    let h = thread::spawn(|| {\n        step(1);\n        while !is_gate_open() {\n            wait_tick(1);\n        }\n        step(3);\n    });\n    step(1);\n    while !is_gate_open() {\n        wait_tick(1);\n    }\n    step(3);\n    h.join();\n}",
    "quickChips": [
      {
        "label": "while !is_gate_open() { wait_tick(1); }",
        "insert": "while !is_gate_open() {\n            wait_tick(1);\n        }\n        "
      }
    ],
    "hints": [
      "上のレーンにいるみるく号は (1, 0) でスイッチを踏んだあと、ゲート(2, 0)の前を待たずに進もうとして閉じたゲートにぶつかっちゃうかも！",
      "thread::spawn の中の `step(3);` の前にも `while !is_gate_open() { wait_tick(1); }` を入れてあげよう！",
      "while !is_gate_open() {\n    wait_tick(1);\n}"
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
        "x": 4,
        "y": 0
      },
      "switches": [
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 1,
          "y": 2
        }
      ],
      "gates": [
        {
          "x": 2,
          "y": 2,
          "openTicks": 1,
          "closedTicks": 1,
          "linkedSwitch": {
            "x": 1,
            "y": 0
          }
        },
        {
          "x": 2,
          "y": 0,
          "openTicks": 1,
          "closedTicks": 1,
          "linkedSwitch": {
            "x": 1,
            "y": 2
          }
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "workerReachGoal": true,
      "requireAllSwitches": true,
      "maxTicks": 7
    },
    "parTicks": 8
  },
  {
    "displayId": "20-5",
    "id": "a8d084c8-1fe6-55dd-851c-bf5703da3f37",
    "index": 333,
    "chapter": 20,
    "chapterTitle": "第20章 恐れるな！並行性",
    "stageKind": "puzzle",
    "title": "20-5. 2体でコンベア高速ダッシュ競争",
    "topicTag": "thread::spawn + 両レーンコンベア",
    "kurumiIntro": "上下両方のレーンに加速ベルトが敷かれたよ！それぞれのベルト位置に合わせてちょうどいい歩数を調整しよう。",
    "goalSummary": "ベルト加速を計算に入れて2体ともゴール (5, 0) / (5, 2) へ",
    "bookSectionTitle": "20.1 並列環境でのタイミングと位置設計",
    "bookSummary": "各スレッドのフィールド条件（ベルト位置）に合わせたパラメータを適切に渡して並列移動します。",
    "bookKeyCode": "thread::spawn(|| { step(2); step(1); });",
    "starterCode": "fn main() {\n    let h = thread::spawn(|| {\n        // 上のレーンのベルトは (1,0) と (3,0)！合計 3歩で (5,0) へ着くよ\n        step(1);\n    });\n    // 下のレーンはベルト1つだけ (2,2) にあるから、合計 4歩進もう！\n    step(2);\n    step(2);\n    h.join();\n}",
    "solutionCode": "fn main() {\n    let h = thread::spawn(|| {\n        step(2);\n        step(1);\n    });\n    step(2);\n    step(2);\n    h.join();\n}",
    "quickChips": [
      {
        "label": "step(2);\n        step(1);",
        "insert": "step(2);\n        step(1);"
      }
    ],
    "hints": [
      "上のレーンは (1,0) と (3,0) にベルトがあるよ！step(2) で (1,0)→ベルト(2,0)→step で (3,0)→ベルト(4,0)、そして step(1) で (5,0) へ到着！",
      "spawn の中を `step(2); step(1);` に書き換えよう。",
      "step(2);\nstep(1);"
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
        "x": 5,
        "y": 2
      },
      "workerStart": {
        "x": 0,
        "y": 0,
        "dir": 0
      },
      "workerGoal": {
        "x": 5,
        "y": 0
      },
      "conveyors": [
        {
          "x": 1,
          "y": 0,
          "dir": 0
        },
        {
          "x": 3,
          "y": 0,
          "dir": 0
        },
        {
          "x": 2,
          "y": 2,
          "dir": 0
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "workerReachGoal": true
    },
    "parTicks": 6
  },
  {
    "displayId": "20-6",
    "id": "f0176c61-dc85-5cc4-906d-eec14c9a2dd9",
    "index": 334,
    "chapter": 20,
    "chapterTitle": "第20章 恐れるな！並行性",
    "stageKind": "puzzle",
    "title": "20-6. スパーク回避スレッドと並走する安全移動",
    "topicTag": "2体並列 + スパーク回避",
    "kurumiIntro": "上のレーンも下のレーンも途中でスパークが横切っているよ！フェリスちゃんもみるく号もそれぞれ自分の前で `is_spark_ahead()` を確認して進もう。",
    "goalSummary": "2体ともスパークを避けてそれぞれのゴール (4, 0) / (4, 2) へ",
    "bookSectionTitle": "20.1 各スレッド独立の安全監視ループ",
    "bookSummary": "並列に動くスレッドは互いのタイミングが異なるため、それぞれが自分のセンサーで安全を確認しながら進みます。",
    "bookKeyCode": "thread::spawn(|| { for _ in 0..4 { while is_spark_ahead() { wait_tick(1); } step(); } });",
    "starterCode": "fn main() {\n    let h = thread::spawn(|| {\n        // 上のみるく号もスパーク(2, 0)に気をつけて進もう！\n        step(5);\n    });\n    for _ in 0..4 {\n        while is_spark_ahead() {\n            wait_tick(1);\n        }\n        step();\n    }\n    h.join();\n}",
    "solutionCode": "fn main() {\n    let h = thread::spawn(|| {\n        for _ in 0..4 {\n            while is_spark_ahead() {\n                wait_tick(1);\n            }\n            step();\n        }\n    });\n    for _ in 0..4 {\n        while is_spark_ahead() {\n            wait_tick(1);\n        }\n        step();\n    }\n    h.join();\n}",
    "quickChips": [
      {
        "label": "while is_spark_ahead() { wait_tick(1); }",
        "insert": "for _ in 0..4 {\n            while is_spark_ahead() {\n                wait_tick(1);\n            }\n            step();\n        }"
      }
    ],
    "hints": [
      "上のレーンの (2, 0) にもスパークが往復してくるよ！今は `step(4)` で突っ込んじゃってるね。",
      "spawn の中もフェリスちゃんと同じように `for _ in 0..4 { while is_spark_ahead() { wait_tick(1); } step(); }` にしよう！",
      "for _ in 0..4 {\n    while is_spark_ahead() {\n        wait_tick(1);\n    }\n    step();\n}"
    ],
    "worldSetup": {
      "width": 6,
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
        "x": 4,
        "y": 0
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
          "initialIndex": 2
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "workerReachGoal": true,
      "maxTicks": 7
    },
    "parTicks": 10
  },
  {
    "displayId": "20-7",
    "id": "d556eb51-1b53-5031-af4b-f14bd499d092",
    "index": 335,
    "chapter": 20,
    "chapterTitle": "第20章 恐れるな！並行性",
    "stageKind": "puzzle",
    "title": "20-7. 並列左手法メイズ＋メイン直線連携",
    "topicTag": "並列迷路 + スイッチ連携",
    "kurumiIntro": "上のレーンの小迷路をみるく号が左手法で突破してスイッチ `(3, 0)` を押してくれるよ！フェリスちゃんは下のレーンでゲートが開くのを待ってゴールを目指そう。",
    "goalSummary": "みるく号が小迷路の角を右折してスイッチを踏み2体ともゴールへ",
    "bookSectionTitle": "20.1 自律ワーカーと待機スレッドの協調",
    "bookSummary": "探索を行うスレッドが条件を満たすまで、本線スレッドがゲート前などで協調待機して合流します。",
    "bookKeyCode": "while !is_gate_open() { wait_tick(1); }",
    "starterCode": "fn main() {\n    let h = thread::spawn(|| {\n        while !at_goal() {\n            if !is_wall_left() {\n                turn_left();\n                step();\n            } else if !is_wall_ahead() {\n                step();\n            } else {\n                // 行き止まり！turn_right(); で下へ降りよう\n                wait_tick(1);\n            }\n        }\n    });\n    step(2);\n    while !is_gate_open() {\n        wait_tick(1);\n    }\n    step(2);\n    h.join();\n}",
    "solutionCode": "fn main() {\n    let h = thread::spawn(|| {\n        while !at_goal() {\n            if !is_wall_left() {\n                turn_left();\n                step();\n            } else if !is_wall_ahead() {\n                step();\n            } else {\n                turn_right();\n            }\n        }\n    });\n    step(2);\n    while !is_gate_open() {\n        wait_tick(1);\n    }\n    step(2);\n    h.join();\n}",
    "quickChips": [
      {
        "label": "turn_right();",
        "insert": "turn_right();"
      }
    ],
    "hints": [
      "上のレーンの行き止まり `(3, 0)` にスイッチがあるよ！そこに着く前か角で右に曲がる必要があるけれど…おっ、(3, 0) がスイッチだからそこまで右進み、右折して (3, 1) ゴールへ！",
      "spawn 内の `else { wait_tick(1); }` を `else { turn_right(); }` に直そう！",
      "else {\n    turn_right();\n}"
    ],
    "worldSetup": {
      "width": 6,
      "height": 4,
      "walls": [
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
        "y": 3,
        "dir": 0
      },
      "goal": {
        "x": 4,
        "y": 3
      },
      "workerStart": {
        "x": 0,
        "y": 0,
        "dir": 0
      },
      "workerGoal": {
        "x": 3,
        "y": 1
      },
      "switches": [
        {
          "x": 3,
          "y": 0
        }
      ],
      "gates": [
        {
          "x": 3,
          "y": 3,
          "openTicks": 1,
          "closedTicks": 1,
          "linkedSwitch": {
            "x": 3,
            "y": 0
          }
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "workerReachGoal": true,
      "requireAllSwitches": true
    },
    "parTicks": 8
  },
  {
    "displayId": "20-8",
    "id": "b523c4fe-6466-578e-8b4a-fe84bcb1d1da",
    "index": 336,
    "chapter": 20,
    "chapterTitle": "第20章 恐れるな！並行性",
    "title": "20-8. move || クロージャーで値をスレッドへ渡す",
    "topicTag": "thread::spawn(move || ...)",
    "kurumiIntro": "メイン側で作った変数 `dist = 3` を新しいスレッドで使いたいときは、`move ||` キーワードで所有権をスレッドへお引っ越しさせるよ！",
    "goalSummary": "move || を使って dist をみるく号へ渡し、2体ともゴールへ",
    "bookSectionTitle": "20.1 スレッドで move クロージャーを使用する",
    "bookSummary": "親スレッドより子スレッドの方が長生きする可能性があるため、外部の変数を子スレッドへ取り込むときは `move ||` で所有権を移動させます。",
    "bookKeyCode": "let dist = 3;\nthread::spawn(move || { step(dist); });",
    "starterCode": "fn main() {\n    let dist = 3;\n    let h = thread::spawn(move || {\n        // dist を使って (3, 0) へ進もう！\n        step(1);\n    });\n    step(4);\n    h.join();\n}",
    "solutionCode": "fn main() {\n    let dist = 3;\n    let h = thread::spawn(move || {\n        step(dist);\n    });\n    step(4);\n    h.join();\n}",
    "quickChips": [
      {
        "label": "step(dist);",
        "insert": "step(dist);"
      }
    ],
    "hints": [
      "spawn の中が `step(1);` のままになっているよ！",
      "move で渡された `dist` を使って `step(dist);` に直そう。",
      "let h = thread::spawn(move || {\n    step(dist);\n});"
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
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "workerReachGoal": true
    },
    "parTicks": 6
  },
  {
    "displayId": "20-9",
    "id": "3ad49ad5-c31d-5da1-adc3-fa6fd50a6825",
    "index": 337,
    "chapter": 20,
    "chapterTitle": "第20章 恐れるな！並行性",
    "stageKind": "puzzle",
    "title": "20-9. move || クロージャーでダイヤルとL字ルートを託す",
    "topicTag": "move || + ダイヤル + L字",
    "kurumiIntro": "メインで作った秘密番号 `code` と歩数 `dist` を `move ||` でみるく号へ託そう！みるく号がダイヤルを解除しているあいだに、フェリスちゃんはL字のゴールへ走るよ。",
    "goalSummary": "move || でダイヤル(6)解除＋みるく号 (3, 0)＋フェリスちゃん (4, 3) へ",
    "bookSectionTitle": "20.1 所有権の移動と並列タスク分担",
    "bookSummary": "計算済みの値を `move ||` で別スレッドへ安全に渡し、異なる役目を並列でこなします。",
    "bookKeyCode": "let h = thread::spawn(move || { try_dial(code); step(dist); });",
    "starterCode": "fn main() {\n    let code = 6;\n    let dist = 3;\n    // move キーワードを付けて所有権をスレッドへ移そう！\n    let h = thread::spawn(|| {\n        try_dial(code - 1);\n        step(dist);\n    });\n    step(4);\n    turn_right();\n    step(1);\n    h.join();\n}",
    "solutionCode": "fn main() {\n    let code = 6;\n    let dist = 3;\n    let h = thread::spawn(move || {\n        try_dial(code);\n        step(dist);\n    });\n    step(4);\n    turn_right();\n    step(1);\n    h.join();\n}",
    "quickChips": [
      {
        "label": "move ||",
        "insert": "move ||"
      }
    ],
    "hints": [
      "外側の変数 `code` や `dist` をスレッド内で使うには `move ||` が必要だよ！",
      "`thread::spawn(|| {` を `thread::spawn(move || {` に直そう。",
      "let h = thread::spawn(move || {"
    ],
    "worldSetup": {
      "width": 6,
      "height": 4,
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
        }
      ],
      "botStart": {
        "x": 0,
        "y": 2,
        "dir": 0
      },
      "goal": {
        "x": 4,
        "y": 3
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
      "dial": {
        "x": 2,
        "y": 1,
        "secret": 6
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "workerReachGoal": true,
      "dialSolved": true,
      "maxTicks": 8
    },
    "parTicks": 8
  },
  {
    "displayId": "20-10",
    "id": "92b31b2c-f643-5807-bcb0-53b326b64023",
    "index": 338,
    "chapter": 20,
    "chapterTitle": "第20章 恐れるな！並行性",
    "title": "20-10. mpsc::channel で安全なメッセージ転送",
    "topicTag": "mpsc::channel / send・recv",
    "kurumiIntro": "みるく号が拾ったコアを「チャンネル（送信管）」でフェリスちゃんへ送ろう！所有権ごと安全に別スレッドへ届けられるんだ！",
    "goalSummary": "tx.send と rx.recv でコアを受け取り、ゴールへ届けよう",
    "bookSectionTitle": "20.2 メッセージ受け渡しを使ってスレッド間でデータを転送する",
    "bookSummary": "`let (tx, rx) = mpsc::channel();` で送信用 `tx` と受信用 `rx` を作ります。`tx.send(値)` すると所有権も一緒に相手スレッドへ安全に移ります。",
    "bookKeyCode": "let (tx, rx) = mpsc::channel();\n// tx.send(core); ... let c = rx.recv().unwrap();",
    "starterCode": "fn main() {\n    let (tx, rx) = mpsc::channel();\n    thread::spawn(move || {\n        let core = grab_core();\n        // ここで tx.send(core); して送ろう！\n        \n    });\n    let received = rx.recv().unwrap();\n    step(3);\n    deliver(received);\n}",
    "solutionCode": "fn main() {\n    let (tx, rx) = mpsc::channel();\n    thread::spawn(move || {\n        let core = grab_core();\n        tx.send(core);\n    });\n    let received = rx.recv().unwrap();\n    step(3);\n    deliver(received);\n}",
    "quickChips": [
      {
        "label": "tx.send(core);",
        "insert": "tx.send(core);\n    "
      }
    ],
    "hints": [
      "フェリスちゃんは `rx.recv()` でコアが届くのを待っているよ！",
      "spawn の中に `tx.send(core);` を書き足せば光のカプセルで届くよ！",
      "thread::spawn(move || {\n    let core = grab_core();\n    tx.send(core);\n});"
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
      "cores": [
        {
          "id": "c1",
          "x": 0,
          "y": 0,
          "power": 2,
          "label": "通信コア"
        }
      ],
      "deliveries": [
        {
          "x": 3,
          "y": 2
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "deliverCores": 1
    },
    "parTicks": 8
  },
  {
    "displayId": "20-11",
    "id": "54a4a74f-b8a4-5f45-b173-51cfb4a06882",
    "index": 339,
    "chapter": 20,
    "chapterTitle": "第20章 恐れるな！並行性",
    "title": "20-11. チャンネルで指示数値を受け取って進む",
    "topicTag": "channel 数値指令",
    "kurumiIntro": "コアだけでなく、歩数やエネルギーの数値もチャンネルでやりとりできるよ！みるく号から送られてきた数字を `rx.recv()` で受け取ろう。",
    "goalSummary": "channel で受け取った 4 を使って金庫⚡4＋ゴール (4, 2) へ",
    "bookSectionTitle": "20.2 チャンネルを介したデータの送受信",
    "bookSummary": "メッセージを送る側が `tx.send(4)` と送ると、受信側は `rx.recv().unwrap()` でその値を取り出して次の処理へ進めます。",
    "bookKeyCode": "tx.send(4);\nlet n = rx.recv().unwrap();",
    "starterCode": "fn main() {\n    let (tx, rx) = mpsc::channel();\n    thread::spawn(move || {\n        // 歩数 4 を送ろう！今は 1 を送っているよ\n        tx.send(1);\n    });\n    let dist = rx.recv().unwrap();\n    add_vault(dist);\n    step(dist);\n}",
    "solutionCode": "fn main() {\n    let (tx, rx) = mpsc::channel();\n    thread::spawn(move || {\n        tx.send(4);\n    });\n    let dist = rx.recv().unwrap();\n    add_vault(dist);\n    step(dist);\n}",
    "quickChips": [
      {
        "label": "tx.send(4);",
        "insert": "tx.send(4);"
      }
    ],
    "hints": [
      "目標は金庫⚡4 かつゴール (4, 2) だよ！今は tx.send(1) になっているね。",
      "tx.send(4); に変えてみよう！",
      "tx.send(4);"
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
      "vault": {
        "x": 2,
        "y": 1,
        "initial": 0,
        "target": 4
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "vaultTarget": 4
    },
    "parTicks": 10
  },
  {
    "displayId": "20-12",
    "id": "b7d9d909-f828-593f-abda-b1da35da1eab",
    "index": 340,
    "chapter": 20,
    "chapterTitle": "第20章 恐れるな！並行性",
    "title": "20-12. 複数の送信と複数回の受信",
    "topicTag": "連続 send / recv",
    "kurumiIntro": "チャンネルはパイプラインみたいにいくつでも連続でメッセージを送れるよ！みるく号から届いた2つの値を受け取って足し合わせよう。",
    "goalSummary": "2回の recv() を合計して金庫⚡5＋ゴール (3, 2) へ",
    "bookSectionTitle": "20.2 複数の値を送信して受信側で待つ",
    "bookSummary": "送信側が複数回 `send` したデータは先入れ先出し（FIFO）の順番で受信側に届きます。",
    "bookKeyCode": "tx.send(2); tx.send(3);\nlet a = rx.recv().unwrap(); let b = rx.recv().unwrap();",
    "starterCode": "fn main() {\n    let (tx, rx) = mpsc::channel();\n    thread::spawn(move || {\n        tx.send(2);\n        tx.send(3);\n    });\n    let a = rx.recv().unwrap();\n    // 2つ目も rx.recv().unwrap() で受け取って合計しよう！\n    let b = 0;\n    add_vault(a + b);\n    step(3);\n}",
    "solutionCode": "fn main() {\n    let (tx, rx) = mpsc::channel();\n    thread::spawn(move || {\n        tx.send(2);\n        tx.send(3);\n    });\n    let a = rx.recv().unwrap();\n    let b = rx.recv().unwrap();\n    add_vault(a + b);\n    step(3);\n}",
    "quickChips": [
      {
        "label": "rx.recv().unwrap()",
        "insert": "rx.recv().unwrap()"
      }
    ],
    "hints": [
      "みるく号が 2 と 3 を送ってくれているよ！今は b が 0 のままだね。",
      "let b = rx.recv().unwrap(); に直すと 2 + 3 = 5 が金庫に入るよ！",
      "let b = rx.recv().unwrap();"
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
      "vault": {
        "x": 2,
        "y": 1,
        "initial": 0,
        "target": 5
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "vaultTarget": 5
    },
    "parTicks": 10
  },
  {
    "displayId": "20-13",
    "id": "9eade17d-26f7-5a42-88fd-3b21ae7ae09a",
    "index": 341,
    "chapter": 20,
    "chapterTitle": "第20章 恐れるな！並行性",
    "stageKind": "puzzle",
    "title": "20-13. 双方向リレー！2つのチャンネルで合図交換",
    "topicTag": "2チャンネル協調",
    "kurumiIntro": "「往路チャンネル（tx1, rx1）」と「復路チャンネル（tx2, rx2）」の2本を使って、スイッチ開放の合図と移動距離を受け渡ししよう！",
    "goalSummary": "2本のチャンネルで連携し金庫⚡5・全スイッチ・2体ゴールへ",
    "bookSectionTitle": "20.2 複数チャンネルによる双方向同期",
    "bookSummary": "複数の `mpsc::channel` を用意すると、スレッド同士で準備完了通知や計算パラメータを順番にやり取りできます。",
    "bookKeyCode": "tx1.send(2);\nlet a = rx1.recv().unwrap(); tx2.send(a + 3);",
    "starterCode": "fn main() {\n    let (tx1, rx1) = mpsc::channel();\n    let (tx2, rx2) = mpsc::channel();\n    let h = thread::spawn(move || {\n        step(2);\n        // スイッチ(2, 0)を踏んだら tx1.send(2); を送ってね！\n        tx1.send(1);\n        let bonus = rx2.recv().unwrap();\n        add_vault(bonus);\n        step(2);\n    });\n    let step_cnt = rx1.recv().unwrap();\n    // 受け取った 2 に +3 した 5 を返そう！\n    tx2.send(step_cnt + 3);\n    step(step_cnt + 2);\n    h.join();\n}",
    "solutionCode": "fn main() {\n    let (tx1, rx1) = mpsc::channel();\n    let (tx2, rx2) = mpsc::channel();\n    let h = thread::spawn(move || {\n        step(2);\n        tx1.send(2);\n        let bonus = rx2.recv().unwrap();\n        add_vault(bonus);\n        step(2);\n    });\n    let step_cnt = rx1.recv().unwrap();\n    tx2.send(step_cnt + 3);\n    step(step_cnt + 2);\n    h.join();\n}",
    "quickChips": [
      {
        "label": "tx1.send(2);",
        "insert": "tx1.send(2);"
      }
    ],
    "hints": [
      "上のレーンのスイッチ(2,0)を踏んでゲート(3,2)を開きつつ、`tx1.send(2)` で 2 を送ろう！",
      "tx1.send(1); を `tx1.send(2);` にすると、返ってくる金庫額が 2+3=5 になり、フェリスちゃんも 2+2=4歩 で(4,2)に届くよ！",
      "tx1.send(2);"
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
        "x": 4,
        "y": 0
      },
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
      "vault": {
        "x": 2,
        "y": 1,
        "initial": 0,
        "target": 5
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "workerReachGoal": true,
      "vaultTarget": 5,
      "requireAllSwitches": true
    },
    "parTicks": 12
  },
  {
    "displayId": "20-14",
    "id": "5fe590a7-25b5-51e4-b318-6fbbb667c3f4",
    "index": 342,
    "chapter": 20,
    "chapterTitle": "第20章 恐れるな！並行性",
    "stageKind": "puzzle",
    "title": "20-14. 3チャンネル集計で秘密ダイヤル＋Uターン",
    "topicTag": "複数メッセージ集計 + ダイヤル",
    "kurumiIntro": "みるく号が送り出す3つの計測値 `[1, 3, 2]` をチャンネルで順番に受信し、合計値（6）でダイヤルを解錠したらL字コースを曲がろう！",
    "goalSummary": "3連続 recv() でダイヤル(6)・金庫⚡6・2体ゴールへ",
    "bookSectionTitle": "20.2 連続メッセージの受信集約",
    "bookSummary": "複数回 `send` されたストリーム状のデータを `for _ in 0..3 { sum += rx.recv().unwrap(); }` で集計します。",
    "bookKeyCode": "for _ in 0..3 { total += rx.recv().unwrap(); }",
    "starterCode": "fn main() {\n    let (tx, rx) = mpsc::channel();\n    let h = thread::spawn(move || {\n        tx.send(1);\n        tx.send(3);\n        tx.send(2);\n        step(2);\n    });\n    let mut sum = 0;\n    // 3つ送られてくるのに 2回しか recv() してないよ！0..3 に直そう\n    for _ in 0..2 {\n        sum += rx.recv().unwrap();\n    }\n    try_dial(sum);\n    add_vault(sum);\n    step(3);\n    turn_right();\n    step(1);\n    h.join();\n}",
    "solutionCode": "fn main() {\n    let (tx, rx) = mpsc::channel();\n    let h = thread::spawn(move || {\n        tx.send(1);\n        tx.send(3);\n        tx.send(2);\n        step(2);\n    });\n    let mut sum = 0;\n    for _ in 0..3 {\n        sum += rx.recv().unwrap();\n    }\n    try_dial(sum);\n    add_vault(sum);\n    step(3);\n    turn_right();\n    step(1);\n    h.join();\n}",
    "quickChips": [
      {
        "label": "0..3",
        "insert": "0..3"
      }
    ],
    "hints": [
      "tx.send が3回呼ばれているのに、受信ループが `0..2` だと合計 4 にしかならないよ！",
      "`for _ in 0..3` にすれば 1 + 3 + 2 = 6 が揃ってダイヤルも金庫もクリアできるよ！",
      "for _ in 0..3 {"
    ],
    "worldSetup": {
      "width": 5,
      "height": 4,
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
        }
      ],
      "botStart": {
        "x": 0,
        "y": 2,
        "dir": 0
      },
      "goal": {
        "x": 3,
        "y": 3
      },
      "workerStart": {
        "x": 0,
        "y": 0,
        "dir": 0
      },
      "workerGoal": {
        "x": 2,
        "y": 0
      },
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
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "workerReachGoal": true,
      "dialSolved": true,
      "vaultTarget": 6
    },
    "parTicks": 14
  },
  {
    "displayId": "20-15",
    "id": "c7bf8ef0-e8e5-5cc7-8ed5-a61821b74adc",
    "index": 343,
    "chapter": 20,
    "chapterTitle": "第20章 恐れるな！並行性",
    "title": "20-15. チャンネル受信コアを強化して納品！",
    "topicTag": "channel + boost(&mut core)",
    "kurumiIntro": "みるく号がパワー⚡1のコアをチャンネルで送ってくれるよ！受け取ったフェリスちゃんが `let mut c` にして `boost(&mut c)` で⚡3以上に強化して納品しよう！",
    "goalSummary": "受信したコアを boost(&mut c) して ⚡3 以上で納品しよう",
    "bookSectionTitle": "20.2 所有権が別スレッドから移った後の可変操作",
    "bookSummary": "チャンネルで所有権を受け取った側では `let mut core = rx.recv().unwrap();` と宣言でき、元の持ち主を気にせず自由に書き換えて納品できます。",
    "bookKeyCode": "let mut core = rx.recv().unwrap();\nboost(&mut core);\ndeliver(core);",
    "starterCode": "fn main() {\n    let (tx, rx) = mpsc::channel();\n    thread::spawn(move || {\n        let core = grab_core();\n        tx.send(core);\n    });\n    let mut received = rx.recv().unwrap();\n    // パワー⚡3以上にするため、受け取ったコアを boost(&mut received) しよう！\n    \n    step(3);\n    deliver(received);\n}",
    "solutionCode": "fn main() {\n    let (tx, rx) = mpsc::channel();\n    thread::spawn(move || {\n        let core = grab_core();\n        tx.send(core);\n    });\n    let mut received = rx.recv().unwrap();\n    boost(&mut received);\n    step(3);\n    deliver(received);\n}",
    "quickChips": [
      {
        "label": "boost(&mut received);",
        "insert": "boost(&mut received);\n    "
      }
    ],
    "hints": [
      "コアの元パワーは⚡1 だから、boost(&mut received) で +2 して⚡3にする必要があるよ！",
      "let mut received = rx.recv().unwrap(); の次に `boost(&mut received);` を書こう！",
      "let mut received = rx.recv().unwrap();\nboost(&mut received);"
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
      "cores": [
        {
          "id": "c1",
          "x": 0,
          "y": 0,
          "power": 1,
          "label": "微弱コア"
        }
      ],
      "deliveries": [
        {
          "x": 3,
          "y": 2
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "deliverCores": 1,
      "minCorePower": 3
    },
    "parTicks": 9
  },
  {
    "displayId": "20-16",
    "id": "9236e9d1-69ef-5fa0-ad0d-1d6ecf862de6",
    "index": 344,
    "chapter": 20,
    "chapterTitle": "第20章 恐れるな！並行性",
    "stageKind": "puzzle",
    "title": "20-16. チャンネル経由の指令リレー＆空間コア強化",
    "topicTag": "channel + 空間コア強化",
    "kurumiIntro": "上のレーンのみるく号がコアを拾ってチャンネルで転送！受け取ったフェリスちゃんは強化台 `(2, 2)` でしっかりパワーアップさせて納品台 `(4, 2)` へ届けよう！",
    "goalSummary": "チャンネル受信コアを強化台(2, 2)で⚡3+にし納品＋2体ゴール",
    "bookSectionTitle": "20.2 所有権転送と現場での空間加工ルール",
    "bookSummary": "別スレッドからチャンネルで受け取った `EnergyCore` は完全に自分の所有物になるため、自分のレーンの強化台で安全に `boost(&mut c)` できます。",
    "bookKeyCode": "let mut c = rx.recv().unwrap();\nstep(2);\nboost(&mut c);",
    "starterCode": "fn main() {\n    let (tx, rx) = mpsc::channel();\n    let h = thread::spawn(move || {\n        let core = grab_core();\n        tx.send(core);\n        step(3);\n    });\n    let mut c = rx.recv().unwrap();\n    step(2);\n    // 強化台(2, 2)で boost(&mut c); するのを忘れてるよ！\n    \n    step(2);\n    deliver(c);\n    h.join();\n}",
    "solutionCode": "fn main() {\n    let (tx, rx) = mpsc::channel();\n    let h = thread::spawn(move || {\n        let core = grab_core();\n        tx.send(core);\n        step(3);\n    });\n    let mut c = rx.recv().unwrap();\n    step(2);\n    boost(&mut c);\n    step(2);\n    deliver(c);\n    h.join();\n}",
    "quickChips": [
      {
        "label": "boost(&mut c);",
        "insert": "boost(&mut c);\n    "
      }
    ],
    "hints": [
      "受け取ったコアの初期パワーは⚡1。納品するには強化台(2, 2)の上で `boost(&mut c);` して⚡3以上にする必要があるよ！",
      "step(2); のあと、強化台の上で `boost(&mut c);` を追加しよう。",
      "step(2);\nboost(&mut c);\nstep(2);"
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
          "x": 0,
          "y": 0,
          "power": 1,
          "label": "転送コア"
        }
      ],
      "chargers": [
        {
          "x": 2,
          "y": 2
        }
      ],
      "deliveries": [
        {
          "x": 4,
          "y": 2
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "workerReachGoal": true,
      "deliverCores": 1,
      "minCorePower": 3,
      "requireSpatialCoreRules": true
    },
    "parTicks": 10
  },
  {
    "displayId": "20-17",
    "id": "1e4aaa52-a10e-58d3-946e-0195ba5c16a0",
    "index": 345,
    "chapter": 20,
    "chapterTitle": "第20章 恐れるな！並行性",
    "stageKind": "puzzle",
    "title": "20-17. コア2連続送信・順次検査納品",
    "topicTag": "2連続 channel 送信 + コア納品",
    "kurumiIntro": "みるく号が拾ったコアを送りつつ、フェリスちゃん自身のレーンにある2番目のコアも順番に拾って強化しよう！まずみるく号からの1個を完璧に検査・強化・納品してね。",
    "goalSummary": "受信コアを検査(1,2)・強化(2,2)・納品(4,2)し2体ともゴールへ",
    "bookSectionTitle": "20.2 チャネル到着の待機と空間検査フロー",
    "bookSummary": "別レーンからチャンネルで受け取ったアイテムを自レーンの検査・強化設備に通してから納品台へ運びます。",
    "bookKeyCode": "let mut c = rx.recv().unwrap(); step(1); scan(&c); step(1); boost(&mut c);",
    "starterCode": "fn main() {\n    let (tx, rx) = mpsc::channel();\n    let h = thread::spawn(move || {\n        let c = grab_core();\n        tx.send(c);\n        step(3);\n    });\n    let mut core = rx.recv().unwrap();\n    step(1);\n    // 検査台(1,2)で scan(&core); を呼ぶのを忘れているよ！\n    \n    step(1);\n    boost(&mut core);\n    step(2);\n    deliver(core);\n    h.join();\n}",
    "solutionCode": "fn main() {\n    let (tx, rx) = mpsc::channel();\n    let h = thread::spawn(move || {\n        let c = grab_core();\n        tx.send(c);\n        step(3);\n    });\n    let mut core = rx.recv().unwrap();\n    step(1);\n    scan(&core);\n    step(1);\n    boost(&mut core);\n    step(2);\n    deliver(core);\n    h.join();\n}",
    "quickChips": [
      {
        "label": "scan(&core);",
        "insert": "scan(&core);\n    "
      }
    ],
    "hints": [
      "検査回数 `scanCount: 1` と強化 `⚡4+` の両方が条件だよ！",
      "最初の `step(1);` の位置が検査台 `(1, 2)` だから、そこに `scan(&core);` を書き足そう！",
      "step(1);\nscan(&core);\nstep(1);"
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
          "x": 0,
          "y": 0,
          "power": 2,
          "label": "協働コア"
        }
      ],
      "scanners": [
        {
          "x": 1,
          "y": 2
        }
      ],
      "chargers": [
        {
          "x": 2,
          "y": 2
        }
      ],
      "deliveries": [
        {
          "x": 4,
          "y": 2
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "workerReachGoal": true,
      "deliverCores": 1,
      "minCorePower": 4,
      "scanCount": 1,
      "requireSpatialCoreRules": true
    },
    "parTicks": 12
  },
  {
    "displayId": "20-18",
    "id": "744c7878-de43-5906-a5f9-9e47b5af88a2",
    "index": 346,
    "chapter": 20,
    "chapterTitle": "第20章 恐れるな！並行性",
    "title": "20-18. Arc<Mutex<T>> で共有金庫を安全にロック",
    "topicTag": "Arc<Mutex<T>> / lock()",
    "kurumiIntro": "2つのスレッドから1つの金庫を安全に増やそう！`Mutex` の鍵を `lock()` してから書き換えることで、ぶつからずに順番に更新できるよ！",
    "goalSummary": "Arc<Mutex<i32>> で2スレッドから加算し金庫を⚡4にしてゴールへ",
    "bookSectionTitle": "20.3 状態共有並行性 — Arc<T> と Mutex<T>",
    "bookSummary": "`Mutex<T>` は「一度に1スレッドだけ」に書き換えを許す南京錠です。複数スレッドで共有するためにスレッド安全な参照カウント `Arc::new(Mutex::new(...))` と組み合わせます。",
    "bookKeyCode": "let mut guard = shared.lock().unwrap();\n*guard += 2;",
    "starterCode": "fn main() {\n    let vault = Arc::new(Mutex::new(0));\n    let v2 = Arc::clone(&vault);\n\n    let h = thread::spawn(move || {\n        let mut g = v2.lock().unwrap();\n        *g += 2;\n    });\n\n    {\n        // ここでも vault を lock() して +2 しよう！\n        let mut g = vault.lock().unwrap();\n        *g += 0;\n    }\n\n    h.join();\n    step(3);\n}",
    "solutionCode": "fn main() {\n    let vault = Arc::new(Mutex::new(0));\n    let v2 = Arc::clone(&vault);\n\n    let h = thread::spawn(move || {\n        let mut g = v2.lock().unwrap();\n        *g += 2;\n    });\n\n    {\n        let mut g = vault.lock().unwrap();\n        *g += 2;\n    }\n\n    h.join();\n    step(3);\n}",
    "quickChips": [
      {
        "label": "*g += 2;",
        "insert": "*g += 2;"
      }
    ],
    "hints": [
      "サブスレッドが +2 しているけれど、メイン側の `*g += 0;` が 0 のままだよ！",
      "`*g += 2;` に直すと合計が 4 になってクリアできるよ！",
      "{\n    let mut g = vault.lock().unwrap();\n    *g += 2;\n}"
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
      "vault": {
        "x": 2,
        "y": 1,
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
    "displayId": "20-19",
    "id": "634a5c12-0856-56f9-b72e-12f52e69d796",
    "index": 347,
    "chapter": 20,
    "chapterTitle": "第20章 恐れるな！並行性",
    "title": "20-19. スコープ解放で Mutex のデッドロックを防ぐ",
    "topicTag": "Mutex デッドロック回避",
    "kurumiIntro": "同じスレッドで鍵を2回続けて `lock()` しようとすると、自分が鍵を持っているせいで永遠に待ってしまう「デッドロック」が起きるよ！`{ ... }` スコープで鍵を返そう。",
    "goalSummary": "1回目のロックをスコープで解放し金庫⚡5＋ゴールへ",
    "bookSectionTitle": "20.3 Mutexガードのスコープとデッドロック防止",
    "bookSummary": "ロックを取ったガードはスコープを抜けると自動的にアンロックされます。次のロックを取る前には必ず `{ ... }` ブロックを閉じて鍵を返しましょう。",
    "bookKeyCode": "{ let mut g = m.lock().unwrap(); *g += 2; }\nlet mut g2 = m.lock().unwrap();",
    "starterCode": "fn main() {\n    let vault = Arc::new(Mutex::new(0));\n    // ↓ 1回目のロックを { ... } で囲まないと 2回目でデッドロックするよ！\n    let mut g1 = vault.lock().unwrap();\n    *g1 += 2;\n\n    let mut g2 = vault.lock().unwrap();\n    *g2 += 3;\n    step(3);\n}",
    "solutionCode": "fn main() {\n    let vault = Arc::new(Mutex::new(0));\n    {\n        let mut g1 = vault.lock().unwrap();\n        *g1 += 2;\n    }\n    let mut g2 = vault.lock().unwrap();\n    *g2 += 3;\n    step(3);\n}",
    "quickChips": [
      {
        "label": "{ let mut g1 = ... }",
        "insert": "{\n        let mut g1 = vault.lock().unwrap();\n        *g1 += 2;\n    }"
      }
    ],
    "hints": [
      "このまま実行すると「Mutex のロック待機がデッドロックにより停止しました！」と出るよ！",
      "1回目の `let mut g1 = vault.lock().unwrap(); *g1 += 2;` を `{ ... }` で囲んでスコープを分けよう！",
      "{\n    let mut g1 = vault.lock().unwrap();\n    *g1 += 2;\n}"
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
      "vault": {
        "x": 2,
        "y": 1,
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
    "displayId": "20-20",
    "id": "5e6662ee-55f1-5067-80ad-526eee7c9aaa",
    "index": 348,
    "chapter": 20,
    "chapterTitle": "第20章 恐れるな！並行性",
    "title": "20-20. drop(guard) で今すぐロックを返す",
    "topicTag": "drop(guard) 明示解放",
    "kurumiIntro": "同じブロックの中でも、`drop(guard);` を呼べばすぐにロックを手放して別スレッドへ順番を譲れるよ！",
    "goalSummary": "drop(g) で鍵を返してサブスレッドと合計⚡6にしゴールへ",
    "bookSectionTitle": "20.3 drop によるロックの手動解放",
    "bookSummary": "スコープの終わりを待たずに他のスレッドへロックを渡したい場合は、`drop(guard);` で即座に `MutexGuard` を破棄します。",
    "bookKeyCode": "let mut g = m.lock().unwrap();\n*g += 3;\ndrop(g);",
    "starterCode": "fn main() {\n    let vault = Arc::new(Mutex::new(0));\n    let mut g = vault.lock().unwrap();\n    *g += 3;\n    // ここで drop(g); を呼ばないと次のロックとぶつかるよ！\n    \n    let v2 = Arc::clone(&vault);\n    let h = thread::spawn(move || {\n        let mut g2 = v2.lock().unwrap();\n        *g2 += 3;\n    });\n    h.join();\n    step(4);\n}",
    "solutionCode": "fn main() {\n    let vault = Arc::new(Mutex::new(0));\n    let mut g = vault.lock().unwrap();\n    *g += 3;\n    drop(g);\n    let v2 = Arc::clone(&vault);\n    let h = thread::spawn(move || {\n        let mut g2 = v2.lock().unwrap();\n        *g2 += 3;\n    });\n    h.join();\n    step(4);\n}",
    "quickChips": [
      {
        "label": "drop(g);",
        "insert": "drop(g);\n    "
      }
    ],
    "hints": [
      "g をロックしたまま h.join() を待つと、サブスレッドがロックを取れなくてデッドロックしちゃうよ！",
      "*g += 3; の直後に `drop(g);` を書こう。",
      "*g += 3;\ndrop(g);"
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
      "vault": {
        "x": 2,
        "y": 1,
        "initial": 0,
        "target": 6
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "vaultTarget": 6
    },
    "parTicks": 10
  },
  {
    "displayId": "20-21",
    "id": "32ff8c60-c4a3-54aa-8c22-bac121cf58b9",
    "index": 349,
    "chapter": 20,
    "chapterTitle": "第20章 恐れるな！並行性",
    "stageKind": "puzzle",
    "title": "20-21. デッドロック解消＋ベルト通過リレー",
    "topicTag": "Mutex デッドロック + ベルト",
    "kurumiIntro": "メイン側で `vault` をロックしっぱなしのまま `h.join()` しようとしてデッドロックが起きているよ！`drop(g);` で鍵を返してから、2体揃ってベルトに乗ろう！",
    "goalSummary": "drop(g) でデッドロックを解消し金庫⚡6＋ベルトで2体ゴールへ",
    "bookSectionTitle": "20.3 join() 前の確実なアンロック",
    "bookSummary": "子スレッドが同じ `Mutex` を必要としているときに、親スレッドがロックを握ったまま `join()` を呼ぶと永久に待ち合うデッドロックが発生します。",
    "bookKeyCode": "let mut g = v.lock().unwrap(); *g += 3; drop(g); h.join();",
    "starterCode": "fn main() {\n    let vault = Arc::new(Mutex::new(0));\n    let v2 = Arc::clone(&vault);\n\n    let mut g = vault.lock().unwrap();\n    *g += 3;\n    // ↓ ここで drop(g); を呼ばないと、サブスレッドがロックを取れずデッドロックするよ！\n\n    let h = thread::spawn(move || {\n        { let mut g2 = v2.lock().unwrap(); *g2 += 3; }\n        step(2);\n    });\n    h.join();\n    step(2);\n}",
    "solutionCode": "fn main() {\n    let vault = Arc::new(Mutex::new(0));\n    let v2 = Arc::clone(&vault);\n\n    let mut g = vault.lock().unwrap();\n    *g += 3;\n    drop(g);\n\n    let h = thread::spawn(move || {\n        { let mut g2 = v2.lock().unwrap(); *g2 += 3; }\n        step(2);\n    });\n    h.join();\n    step(2);\n}",
    "quickChips": [
      {
        "label": "drop(g);",
        "insert": "drop(g);\n    "
      }
    ],
    "hints": [
      "実行すると「デッドロック」が検出されるよ！`g` を持ったまま `h.join()` で待っているからだね。",
      "`*g += 3;` の直後に `drop(g);` を追加すれば解決！コンベアが両方の2歩目をもう1マス先へ運んでくれるよ。",
      "*g += 3;\ndrop(g);"
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
      "workerGoal": {
        "x": 3,
        "y": 0
      },
      "conveyors": [
        {
          "x": 2,
          "y": 0,
          "dir": 0
        },
        {
          "x": 2,
          "y": 2,
          "dir": 0
        }
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
      "vaultTarget": 6
    },
    "parTicks": 10
  },
  {
    "displayId": "20-22",
    "id": "52cae23d-f78f-554e-9eab-ec4b7bb95e4c",
    "index": 350,
    "chapter": 20,
    "chapterTitle": "第20章 恐れるな！並行性",
    "stageKind": "puzzle",
    "title": "20-22. 並走タイムアタック＋Mutex最小ロック",
    "topicTag": "並列 + drop(guard) + maxTicks",
    "kurumiIntro": "8 ティック以内で2体ともゴールし、かつ金庫を⚡4にしよう！`Mutex` のガードはすぐ `drop` して待たせないのが時短の秘訣だよ。",
    "goalSummary": "drop(g) 活用と #[cfg(feature=\"fast\")] で 8ティック以内に全員クリア",
    "bookSectionTitle": "20.3 ロック区間の最小化による高速並行処理",
    "bookSummary": "クリティカルセクション（`Mutex` をロックしている時間）を最小限にすることで、並列スレッド間の待機時間を減らせます。",
    "bookKeyCode": "drop(g);\nh.join();",
    "starterCode": "#[cfg(feature = \"fast\")]\nfn main() {\n    let vault = Arc::new(Mutex::new(0));\n    let v2 = Arc::clone(&vault);\n    let mut g = vault.lock().unwrap();\n    *g += 2;\n    // ↓ ここで drop(g); を呼ばないとデッドロックしちゃうよ！\n    let h = thread::spawn(move || {\n        { let mut g2 = v2.lock().unwrap(); *g2 += 2; }\n        step(2);\n    });\n    step(2);\n    h.join();\n}",
    "solutionCode": "#[cfg(feature = \"fast\")]\nfn main() {\n    let vault = Arc::new(Mutex::new(0));\n    let v2 = Arc::clone(&vault);\n    let mut g = vault.lock().unwrap();\n    *g += 2;\n    drop(g);\n    let h = thread::spawn(move || {\n        { let mut g2 = v2.lock().unwrap(); *g2 += 2; }\n        step(2);\n    });\n    step(2);\n    h.join();\n}",
    "quickChips": [
      {
        "label": "drop(g);",
        "insert": "drop(g);\n    "
      }
    ],
    "hints": [
      "メインのロックを解放してから `thread::spawn` を動かさないと、サブスレッドがいつまでも待ってデッドロックするよ！",
      "*g += 2; のすぐ下に `drop(g);` を追加しよう。ベルトが2体ともゴール(3,0)/(3,2)まで押してくれるよ！",
      "*g += 2;\ndrop(g);"
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
      "workerGoal": {
        "x": 3,
        "y": 0
      },
      "conveyors": [
        {
          "x": 2,
          "y": 0,
          "dir": 0
        },
        {
          "x": 2,
          "y": 2,
          "dir": 0
        }
      ],
      "vault": {
        "x": 2,
        "y": 1,
        "initial": 0,
        "target": 4
      },
      "featureFastMaxTicks": 8
    },
    "victoryCondition": {
      "reachGoal": true,
      "workerReachGoal": true,
      "vaultTarget": 4,
      "maxTicks": 8
    },
    "parTicks": 8
  },
  {
    "displayId": "20-23",
    "id": "15df331e-f034-5353-afac-6c7be3f3c60e",
    "index": 351,
    "chapter": 20,
    "chapterTitle": "第20章 恐れるな！並行性",
    "title": "20-23. 3スレッドで共有金庫へリレー加算",
    "topicTag": "複数スレッド Arc<Mutex>",
    "kurumiIntro": "メイン＋2つのサブスレッドで順番に同じ `Arc<Mutex<i32>>` に +2 ずつ入れて、合計⚡6を達成しながら2体ともゴールしよう！",
    "goalSummary": "共有金庫に合計⚡6を貯め、フェリスちゃんとみるく号がゴールへ",
    "bookSectionTitle": "20.3 複数スレッドからの排他アクセス",
    "bookSummary": "スレッドごとに `Arc::clone` でハンドルを配り、それぞれが短いスコープで `.lock().unwrap()` することで安全な並列加算ができます。",
    "bookKeyCode": "let c1 = Arc::clone(&vault);\nlet c2 = Arc::clone(&vault);",
    "starterCode": "fn main() {\n    let vault = Arc::new(Mutex::new(0));\n    let v1 = Arc::clone(&vault);\n    let v2 = Arc::clone(&vault);\n    let h1 = thread::spawn(move || {\n        { let mut g = v1.lock().unwrap(); *g += 2; }\n        step(2);\n    });\n    let h2 = thread::spawn(move || {\n        let mut g = v2.lock().unwrap();\n        *g += 2;\n    });\n    {\n        // メイン側も +2 しよう！今は +0 になってるよ\n        let mut g = vault.lock().unwrap();\n        *g += 0;\n    }\n    step(3);\n    h1.join();\n    h2.join();\n}",
    "solutionCode": "fn main() {\n    let vault = Arc::new(Mutex::new(0));\n    let v1 = Arc::clone(&vault);\n    let v2 = Arc::clone(&vault);\n    let h1 = thread::spawn(move || {\n        { let mut g = v1.lock().unwrap(); *g += 2; }\n        step(2);\n    });\n    let h2 = thread::spawn(move || {\n        let mut g = v2.lock().unwrap();\n        *g += 2;\n    });\n    {\n        let mut g = vault.lock().unwrap();\n        *g += 2;\n    }\n    step(3);\n    h1.join();\n    h2.join();\n}",
    "quickChips": [
      {
        "label": "*g += 2;",
        "insert": "*g += 2;"
      }
    ],
    "hints": [
      "h1 が +2、h2 が +2 しているよ。メイン側が +2 すれば合計⚡6！",
      "メイン側の `*g += 0;` を `*g += 2;` に直そう。",
      "*g += 2;"
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
      "workerGoal": {
        "x": 2,
        "y": 0
      },
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
      "vaultTarget": 6
    },
    "parTicks": 10
  },
  {
    "displayId": "20-24",
    "id": "d6e4c8b1-2e0c-5475-b5a5-6c5bea307c40",
    "index": 352,
    "chapter": 20,
    "chapterTitle": "第20章 恐れるな！並行性",
    "stageKind": "puzzle",
    "title": "20-24. Mutex 共有ダイヤル＋3スレッド集計",
    "topicTag": "3スレッド Mutex + ダイヤル",
    "kurumiIntro": "メイン＋サブスレッド2つの計3スレッドで協力して `Arc<Mutex<i32>>` に値を積み上げ、その合計値で秘密ダイヤルを一発で解除しよう！",
    "goalSummary": "3スレッドで⚡6を作り、ダイヤル(6)解除＋フェリスちゃんゴールへ",
    "bookSectionTitle": "20.3 複数スレッドからの累積値参照",
    "bookSummary": "全ワーカーが `join()` で完了した後にメインスレッドからロックを取れば、全スレッドの集計結果を確定値として扱えます。",
    "bookKeyCode": "h1.join(); h2.join();\nlet sum = *vault.lock().unwrap();",
    "starterCode": "fn main() {\n    let vault = Arc::new(Mutex::new(0));\n    let v1 = Arc::clone(&vault);\n    let v2 = Arc::clone(&vault);\n    let h1 = thread::spawn(move || {\n        { let mut g = v1.lock().unwrap(); *g += 2; }\n        step(2);\n    });\n    let h2 = thread::spawn(move || {\n        let mut g = v2.lock().unwrap();\n        *g += 2;\n    });\n    {\n        // メインも +2 しよう！今は +0 だよ\n        let mut g = vault.lock().unwrap();\n        *g += 0;\n    }\n    h1.join();\n    h2.join();\n    let total = *vault.lock().unwrap();\n    try_dial(total);\n    step(3);\n}",
    "solutionCode": "fn main() {\n    let vault = Arc::new(Mutex::new(0));\n    let v1 = Arc::clone(&vault);\n    let v2 = Arc::clone(&vault);\n    let h1 = thread::spawn(move || {\n        { let mut g = v1.lock().unwrap(); *g += 2; }\n        step(2);\n    });\n    let h2 = thread::spawn(move || {\n        let mut g = v2.lock().unwrap();\n        *g += 2;\n    });\n    {\n        let mut g = vault.lock().unwrap();\n        *g += 2;\n    }\n    h1.join();\n    h2.join();\n    let total = *vault.lock().unwrap();\n    try_dial(total);\n    step(3);\n}",
    "quickChips": [
      {
        "label": "*g += 2;",
        "insert": "*g += 2;"
      }
    ],
    "hints": [
      "秘密のダイヤルは 6、金庫目標も 6 だよ！今はメインが +0 だから合計 4 止まり。",
      "メイン側の `*g += 0;` を `*g += 2;` に直そう！",
      "*g += 2;"
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
      "workerGoal": {
        "x": 2,
        "y": 0
      },
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
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "workerReachGoal": true,
      "dialSolved": true,
      "vaultTarget": 6
    },
    "parTicks": 14
  },
  {
    "displayId": "20-25",
    "id": "59331df0-516f-5b5b-a7d8-00b6a8565f58",
    "index": 353,
    "chapter": 20,
    "chapterTitle": "第20章 恐れるな！並行性",
    "title": "20-25. Send と Sync でデータ競合を防ぐ",
    "topicTag": "Send / Sync 境界",
    "kurumiIntro": "生の `let mut count` をそのまま別スレッドで書き換えようとすると、Rustコンパイラが「データ競合の危険！」と止めてくれるよ。安全な道具に置き換えよう！",
    "goalSummary": "データ競合エラーを Arc<Mutex> で解消して金庫⚡3＋ゴールへ",
    "bookSectionTitle": "20.4 Sync と Send トレイトで拡張可能な並行性",
    "bookSummary": "Rustではスレッド間で所有権を渡せる型を `Send`、参照を共有できる型を `Sync` としてコンパイル時に検査します。これにより「気付きにくい並列バグ」を未然に防ぎます。",
    "bookKeyCode": "let safe = Arc::new(Mutex::new(0)); // Send + Sync!",
    "starterCode": "fn main() {\n    let mut count = 0;\n    // ↓ 生の可変変数を別スレッドで触るのはデータ競合エラーになるよ！\n    let h = thread::spawn(|| {\n        count += 3;\n    });\n    h.join();\n    step(3);\n}",
    "solutionCode": "fn main() {\n    let safe = Arc::new(Mutex::new(0));\n    let s2 = Arc::clone(&safe);\n    let h = thread::spawn(move || {\n        let mut g = s2.lock().unwrap();\n        *g += 3;\n    });\n    h.join();\n    step(3);\n}",
    "quickChips": [
      {
        "label": "Arc::new(Mutex::new(0))",
        "insert": "Arc::new(Mutex::new(0))"
      },
      {
        "label": "Arc::clone(&safe)",
        "insert": "Arc::clone(&safe)"
      },
      {
        "label": "s2.lock().unwrap()",
        "insert": "s2.lock().unwrap()"
      }
    ],
    "hints": [
      "まずはそのまま実行して、データ競合を防ぐRustコンパイラのエラーを見てみよう！",
      "count の代わりに `Arc::new(Mutex::new(0))` を使い、`lock().unwrap()` で `*g += 3;` しよう。",
      "let safe = Arc::new(Mutex::new(0));\nlet s2 = Arc::clone(&safe);\nlet h = thread::spawn(move || {\n    let mut g = s2.lock().unwrap();\n    *g += 3;\n});\nh.join();\nstep(3);"
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
      "vault": {
        "x": 2,
        "y": 1,
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
    "displayId": "20-26",
    "id": "7dce4831-1304-5e03-bc52-fe604de23da8",
    "index": 354,
    "chapter": 20,
    "chapterTitle": "第20章 恐れるな！並行性",
    "title": "20-26. 可変配列へのデータ競合も channel に置き換え",
    "topicTag": "Send 境界 / channel 設計",
    "kurumiIntro": "生の可変リスト `let mut log = vec![];` を別スレッドで書き換えようとしてもやっぱりエラーになるよ！メッセージを `mpsc::channel` で送る安全な設計に書き換えよう。",
    "goalSummary": "channel を使って \"SYNC_OK\" を出力しゴール (4, 2) へ",
    "bookSectionTitle": "20.4 共有メモリの代わりにメッセージ送信を選ぶ",
    "bookSummary": "データ競合が起きそうな共有可変変数は、`mpsc::channel` で送信側に所有権を持たせて送る設計にすることで驚くほどスッキリ解決できます。",
    "bookKeyCode": "let (tx, rx) = mpsc::channel();\ntx.send(\"SYNC_OK\");",
    "starterCode": "fn main() {\n    let (tx, rx) = mpsc::channel();\n    let h = thread::spawn(move || {\n        // \"SYNC_OK\" をチャンネルに送ろう！\n        tx.send(\"WAIT\");\n    });\n    let msg = rx.recv().unwrap();\n    println!(\"STATUS: {}\", msg);\n    step(4);\n    h.join();\n}",
    "solutionCode": "fn main() {\n    let (tx, rx) = mpsc::channel();\n    let h = thread::spawn(move || {\n        tx.send(\"SYNC_OK\");\n    });\n    let msg = rx.recv().unwrap();\n    println!(\"STATUS: {}\", msg);\n    step(4);\n    h.join();\n}",
    "quickChips": [
      {
        "label": "\"SYNC_OK\"",
        "insert": "\"SYNC_OK\""
      }
    ],
    "hints": [
      "tx.send(\"WAIT\"); を tx.send(\"SYNC_OK\"); に直そう！",
      "これで受信側の println! が \"SYNC_OK\" を表示してクリアになるよ。",
      "tx.send(\"SYNC_OK\");"
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
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "stdoutIncludes": [
        "SYNC_OK"
      ]
    },
    "parTicks": 9
  },
  {
    "displayId": "20-27",
    "id": "d0ba99b5-4253-584a-8c47-c323623ef00c",
    "index": 355,
    "chapter": 20,
    "chapterTitle": "第20章 恐れるな！並行性",
    "stageKind": "puzzle",
    "title": "20-27. Send・Sync 境界エラーの修復＋スイッチ開放",
    "topicTag": "Send/Sync 修正 + スイッチ",
    "kurumiIntro": "生の可変変数 `let mut sum` を別スレッドで増やそうとしてコンパイルエラーが出ているよ！`Arc<Mutex<i32>>` に書き換えてから、スイッチの先へ進もう！",
    "goalSummary": "Send/Sync エラーを解消し金庫⚡5・全スイッチ・2体ゴールへ",
    "bookSectionTitle": "20.4 生変数共有の危険と Arc<Mutex<T>> 置換",
    "bookSummary": "コンパイラが指摘するスレッド間の可変共有エラーを、`Arc::new(Mutex::new(...))` パターンへ安全にリファクタリングします。",
    "bookKeyCode": "let safe = Arc::new(Mutex::new(0));",
    "starterCode": "fn main() {\n    let mut sum = 0;\n    // ↓ 生変数をそのまま並列更新しようとして Send/Sync エラーになるよ！\n    // Arc<Mutex<i32>> に直そう\n    let h = thread::spawn(|| {\n        sum += 3;\n        step(2);\n    });\n    sum += 2;\n    while !is_gate_open() {\n        wait_tick(1);\n    }\n    step(3);\n    h.join();\n    add_vault(sum);\n}",
    "solutionCode": "fn main() {\n    let sum = Arc::new(Mutex::new(0));\n    let s2 = Arc::clone(&sum);\n    let h = thread::spawn(move || {\n        { let mut g = s2.lock().unwrap(); *g += 3; }\n        step(2);\n    });\n    {\n        let mut g = sum.lock().unwrap();\n        *g += 2;\n    }\n    step(1);\n    while !is_gate_open() {\n        wait_tick(1);\n    }\n    step(2);\n    h.join();\n}",
    "quickChips": [
      {
        "label": "Arc::new(Mutex::new(0))",
        "insert": "Arc::new(Mutex::new(0))"
      },
      {
        "label": "Arc::clone(&sum)",
        "insert": "Arc::clone(&sum)"
      }
    ],
    "hints": [
      "上のレーンのスイッチ(2, 0)を踏んでから下のゲート(2, 2)が開くよ！",
      "まず `let sum = Arc::new(Mutex::new(0));` に替え、両スレッドでスコープ付き `lock().unwrap()` しよう。さらにフェリスちゃんも1歩目でスイッチ前まで進んで `while !is_gate_open()` を待ってね！",
      "let sum = Arc::new(Mutex::new(0));\nlet s2 = Arc::clone(&sum);"
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
      "workerGoal": {
        "x": 2,
        "y": 0
      },
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
      "vault": {
        "x": 3,
        "y": 1,
        "initial": 0,
        "target": 5
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "workerReachGoal": true,
      "vaultTarget": 5,
      "requireAllSwitches": true
    },
    "parTicks": 10
  },
  {
    "displayId": "20-28",
    "id": "e345d21f-9d47-5057-9d01-dcf0e549f33f",
    "index": 356,
    "chapter": 20,
    "chapterTitle": "第20章 恐れるな！並行性",
    "title": "20-28. チャンネル×Mutex ハイブリッド制御",
    "topicTag": "channel + Mutex 連携",
    "kurumiIntro": "みるく号がコアを拾ってチャンネルで送りながら金庫も⚡2チャージ！フェリスちゃんは残りの⚡2をロック加算してからコアを受け取ってゴールへ届けよう！",
    "goalSummary": "金庫⚡4とコア納品、さらにフェリスちゃんのゴール到達を達成",
    "bookSectionTitle": "20.2 & 20.3 メッセージ通信と共有状態の組み合わせ",
    "bookSummary": "処理の通知やデータ受け渡しは `channel`、全体の集計値は `Arc<Mutex<T>>` と組み合わせると大規模な並列タスクも整然と動かせます。",
    "bookKeyCode": "tx.send(c); ... { let mut g = v.lock().unwrap(); *g += 2; }",
    "starterCode": "fn main() {\n    let vault = Arc::new(Mutex::new(0));\n    let v2 = Arc::clone(&vault);\n    let (tx, rx) = mpsc::channel();\n    let h = thread::spawn(move || {\n        let c = grab_core();\n        { let mut g = v2.lock().unwrap(); *g += 2; }\n        tx.send(c);\n    });\n    {\n        let mut g = vault.lock().unwrap();\n        *g += 2;\n    }\n    let received = rx.recv().unwrap();\n    // received を受け取ったら 3歩進んで deliver(received) しよう！\n    \n    h.join();\n}",
    "solutionCode": "fn main() {\n    let vault = Arc::new(Mutex::new(0));\n    let v2 = Arc::clone(&vault);\n    let (tx, rx) = mpsc::channel();\n    let h = thread::spawn(move || {\n        let c = grab_core();\n        { let mut g = v2.lock().unwrap(); *g += 2; }\n        tx.send(c);\n    });\n    {\n        let mut g = vault.lock().unwrap();\n        *g += 2;\n    }\n    let received = rx.recv().unwrap();\n    step(3);\n    deliver(received);\n    h.join();\n}",
    "quickChips": [
      {
        "label": "step(3);",
        "insert": "step(3);\n    "
      },
      {
        "label": "deliver(received);",
        "insert": "deliver(received);\n    "
      }
    ],
    "hints": [
      "金庫への +2 と +2、そしてコアの送信はすでに準備できているよ！",
      "received の後に `step(3);` と `deliver(received);` を書こう。",
      "step(3);\ndeliver(received);"
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
      "cores": [
        {
          "id": "c1",
          "x": 0,
          "y": 0,
          "power": 2,
          "label": "協働コア"
        }
      ],
      "deliveries": [
        {
          "x": 3,
          "y": 2
        }
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
      "deliverCores": 1,
      "vaultTarget": 4
    },
    "parTicks": 10
  },
  {
    "displayId": "20-29",
    "id": "a36894ab-6e89-5dd5-afeb-578f0cf7ad00",
    "index": 357,
    "chapter": 20,
    "chapterTitle": "第20章 恐れるな！並行性",
    "stageKind": "puzzle",
    "title": "20-29. チャンネル＋Mutex＋#[test] 並列統合チェック",
    "topicTag": "並列 + テスト + 金庫",
    "kurumiIntro": "並列で計算する加算ルールをまず `#[test]` で確かめてから、2スレッド＋チャンネル＋`Mutex` のコンボを動かそう！",
    "goalSummary": "テスト合格＋チャンネル＆Mutexで金庫⚡7＋2体ゴールへ",
    "bookSectionTitle": "20.2 & 20.3 テスト済み純粋関数と並行ランタイムの分離",
    "bookSummary": "ロジック計算を純粋関数に切り出して単体テストし、スレッド間でその結果を安全にやり取りします。",
    "bookKeyCode": "fn combine(a: i32, b: i32) -> i32 { a + b }",
    "starterCode": "fn combine(a: i32, b: i32) -> i32 {\n    // 掛け算ではなく足し算に直そう！\n    a * b\n}\n\n#[test]\nfn t_comb() {\n    assert_eq!(combine(3, 4), 7);\n}\n\nfn main() {\n    let vault = Arc::new(Mutex::new(0));\n    let v2 = Arc::clone(&vault);\n    let (tx, rx) = mpsc::channel();\n    let h = thread::spawn(move || {\n        tx.send(3);\n        { let mut g = v2.lock().unwrap(); *g += 3; }\n        step(2);\n    });\n    let from_worker = rx.recv().unwrap();\n    let total = combine(from_worker, 4);\n    {\n        let mut g = vault.lock().unwrap();\n        *g += total - 3;\n    }\n    step(3);\n    h.join();\n}",
    "solutionCode": "fn combine(a: i32, b: i32) -> i32 {\n    a + b\n}\n\n#[test]\nfn t_comb() {\n    assert_eq!(combine(3, 4), 7);\n}\n\nfn main() {\n    let vault = Arc::new(Mutex::new(0));\n    let v2 = Arc::clone(&vault);\n    let (tx, rx) = mpsc::channel();\n    let h = thread::spawn(move || {\n        tx.send(3);\n        { let mut g = v2.lock().unwrap(); *g += 3; }\n        step(2);\n    });\n    let from_worker = rx.recv().unwrap();\n    let total = combine(from_worker, 4);\n    {\n        let mut g = vault.lock().unwrap();\n        *g += total - 3;\n    }\n    step(3);\n    h.join();\n}",
    "quickChips": [
      {
        "label": "a + b",
        "insert": "a + b"
      }
    ],
    "hints": [
      "combine(3, 4) の期待結果は 7 だよ！今は `a * b` になってるね。",
      "`a + b` に直せばテストも金庫合計⚡7もバッチリ決まるよ！",
      "fn combine(a: i32, b: i32) -> i32 {\n    a + b\n}"
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
      "workerGoal": {
        "x": 2,
        "y": 0
      },
      "vault": {
        "x": 2,
        "y": 1,
        "initial": 0,
        "target": 7
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "workerReachGoal": true,
      "vaultTarget": 7,
      "testsRequired": 1
    },
    "parTicks": 10
  },
  {
    "displayId": "20-30",
    "id": "88ae87dc-62b7-5b6f-8e33-fc872dcdee68",
    "index": 358,
    "chapter": 20,
    "chapterTitle": "第20章 恐れるな！並行性",
    "stageKind": "puzzle",
    "title": "20-30. 空間ルール＋スイッチ＋Mutex の完全並走",
    "topicTag": "空間コア + Mutex + ゲート",
    "kurumiIntro": "上のレーンのみるく号はスイッチ `(1, 0)` を踏んで金庫へ+2しながらゴールへ！下のレーンのフェリスちゃんはコアを受け取って強化し、開いたゲートを越えて納品しよう！",
    "goalSummary": "金庫⚡5・全スイッチ・コア検査(1,2)＆強化(3,2)⚡3+・2体ゴールへ",
    "bookSectionTitle": "20.2 & 20.3 大規模協調制御の設計",
    "bookSummary": "メッセージ転送・排他加算・スイッチ連動を同時に組み合わせても、それぞれが責任分担を守れば安全かつシンプルに協調できます。",
    "bookKeyCode": "scan(&core); ... boost(&mut core); ... deliver(core);",
    "starterCode": "fn main() {\n    let vault = Arc::new(Mutex::new(0));\n    let v2 = Arc::clone(&vault);\n    let (tx, rx) = mpsc::channel();\n    let h = thread::spawn(move || {\n        let c = grab_core();\n        { let mut g = v2.lock().unwrap(); *g += 2; }\n        tx.send(c);\n        step(3);\n    });\n    {\n        let mut g = vault.lock().unwrap();\n        *g += 3;\n    }\n    let mut core = rx.recv().unwrap();\n    step(1);\n    scan(&core);\n    step(1);\n    while !is_gate_open() {\n        wait_tick(1);\n    }\n    while is_spark_ahead() {\n        wait_tick(1);\n    }\n    step(1);\n    // ここ (3, 2) は強化台！boost(&mut core); を呼んでから納品台へ進もう\n    \n    step(1);\n    deliver(core);\n    h.join();\n}",
    "solutionCode": "fn main() {\n    let vault = Arc::new(Mutex::new(0));\n    let v2 = Arc::clone(&vault);\n    let (tx, rx) = mpsc::channel();\n    let h = thread::spawn(move || {\n        let c = grab_core();\n        { let mut g = v2.lock().unwrap(); *g += 2; }\n        tx.send(c);\n        step(3);\n    });\n    {\n        let mut g = vault.lock().unwrap();\n        *g += 3;\n    }\n    let mut core = rx.recv().unwrap();\n    step(1);\n    scan(&core);\n    step(1);\n    while !is_gate_open() {\n        wait_tick(1);\n    }\n    while is_spark_ahead() {\n        wait_tick(1);\n    }\n    step(1);\n    boost(&mut core);\n    step(1);\n    deliver(core);\n    h.join();\n}",
    "quickChips": [
      {
        "label": "boost(&mut core);",
        "insert": "boost(&mut core);\n    "
      }
    ],
    "hints": [
      "受信したコアのパワーは⚡1。ゲート(2,2)を抜けた直後の `(3, 2)` に強化台があるよ！",
      "ゲートを抜ける `step(1);` のあとに `boost(&mut core);` を追加しよう。",
      "step(1);\nboost(&mut core);\nstep(1);"
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
          "x": 0,
          "y": 0,
          "power": 1,
          "label": "協働極光コア"
        }
      ],
      "scanners": [
        {
          "x": 1,
          "y": 2
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
          "x": 1,
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
            "x": 1,
            "y": 0
          }
        }
      ],
      "vault": {
        "x": 2,
        "y": 1,
        "initial": 0,
        "target": 5
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "workerReachGoal": true,
      "deliverCores": 1,
      "minCorePower": 3,
      "scanCount": 1,
      "vaultTarget": 5,
      "requireAllSwitches": true,
      "requireSpatialCoreRules": true
    },
    "parTicks": 15
  },
  {
    "displayId": "20-31",
    "id": "4f0d82ae-fb14-5e35-a27d-2950a1fac060",
    "index": 359,
    "chapter": 20,
    "chapterTitle": "第20章 恐れるな！並行性",
    "title": "20-31. 第20章まとめ：スイッチ・チャンネル・Mutex 完全同期",
    "topicTag": "第20章 総合実践",
    "kurumiIntro": "並行性の総合課題！みるく号はコアを送りつつスイッチを踏みながらサブゴールへ！フェリスちゃんは金庫を⚡4にして連動ゲートを抜け、コアを強化して納品しよう！",
    "goalSummary": "2体ともゴール・金庫⚡4・強化コア⚡3以上納品を全達成！",
    "bookSectionTitle": "第20章まとめ — 恐れるな！安全で力強い並行プログラミング",
    "bookSummary": "所有権と型システム（`Send` / `Sync`）の守護により、複数スレッドの協調処理もコンパイル時に安全が保証された状態で組めます。",
    "bookKeyCode": "thread::spawn + mpsc::channel + Arc<Mutex<T>>",
    "starterCode": "fn main() {\n    let vault = Arc::new(Mutex::new(0));\n    let v2 = Arc::clone(&vault);\n    let (tx, rx) = mpsc::channel();\n\n    let h = thread::spawn(move || {\n        let c = grab_core();\n        { let mut g = v2.lock().unwrap(); *g += 2; }\n        tx.send(c);\n        // スイッチ(1, 0)を通って (3, 0) へ！\n        step(3);\n    });\n\n    {\n        let mut g = vault.lock().unwrap();\n        *g += 2;\n    }\n    let mut core = rx.recv().unwrap();\n    // コアを boost(&mut core) で⚡3以上に強化しよう！\n    \n    step(1);\n    while !is_gate_open() {\n        wait_tick(1);\n    }\n    step(2);\n    deliver(core);\n    h.join();\n}",
    "solutionCode": "fn main() {\n    let vault = Arc::new(Mutex::new(0));\n    let v2 = Arc::clone(&vault);\n    let (tx, rx) = mpsc::channel();\n\n    let h = thread::spawn(move || {\n        let c = grab_core();\n        { let mut g = v2.lock().unwrap(); *g += 2; }\n        tx.send(c);\n        step(3);\n    });\n\n    {\n        let mut g = vault.lock().unwrap();\n        *g += 2;\n    }\n    let mut core = rx.recv().unwrap();\n    boost(&mut core);\n    step(1);\n    while !is_gate_open() {\n        wait_tick(1);\n    }\n    step(2);\n    deliver(core);\n    h.join();\n}",
    "quickChips": [
      {
        "label": "boost(&mut core);",
        "insert": "boost(&mut core);\n    "
      }
    ],
    "hints": [
      "受け取ったばかりの core はパワー⚡1 だよ。納品条件は⚡3以上！",
      "`let mut core = rx.recv().unwrap();` の直後に `boost(&mut core);` を追加すればパーフェクトだよ！",
      "let mut core = rx.recv().unwrap();\nboost(&mut core);"
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
      "workerGoal": {
        "x": 3,
        "y": 0
      },
      "cores": [
        {
          "id": "c1",
          "x": 0,
          "y": 0,
          "power": 1,
          "label": "極光コア"
        }
      ],
      "deliveries": [
        {
          "x": 3,
          "y": 2
        }
      ],
      "switches": [
        {
          "x": 1,
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
            "x": 1,
            "y": 0
          }
        }
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
      "workerReachGoal": true,
      "deliverCores": 1,
      "minCorePower": 3,
      "vaultTarget": 4
    },
    "parTicks": 14
  },
  {
    "displayId": "20-32",
    "id": "f5c99c76-935c-5bcf-b635-78ff4d7069ed",
    "index": 360,
    "chapter": 20,
    "chapterTitle": "第20章 恐れるな！並行性",
    "stageKind": "puzzle",
    "title": "20-32. 並行性グランドマスター：全機構＋スパーク・ダイヤル完全制覇",
    "topicTag": "第20章 パズル総仕上げ",
    "kurumiIntro": "並行性を締めくくる究極のパズル！みるく号はスパークをかわしつつコアを送りスイッチを踏み、フェリスちゃんは金庫・ダイヤル・検査・強化・納品のすべてをやり遂げよう！",
    "goalSummary": "2体ゴール・スパーク回避・ダイヤル(6)・金庫⚡6・空間コア⚡3+納品を全達成",
    "bookSectionTitle": "第20章 総括 — 恐怖なき並行プログラミングの到達点",
    "bookSummary": "所有権ベースの `channel` と型安全な `Arc<Mutex<T>>`、さらに各スレッドの自律センサーを組み合わせ、最高難度の協調システムをバグゼロで動かします。",
    "bookKeyCode": "thread::spawn + channel + Arc<Mutex> + spawn safety",
    "starterCode": "fn main() {\n    let vault = Arc::new(Mutex::new(0));\n    let v2 = Arc::clone(&vault);\n    let (tx, rx) = mpsc::channel();\n\n    let h = thread::spawn(move || {\n        let c = grab_core();\n        { let mut g = v2.lock().unwrap(); *g += 3; }\n        tx.send(c);\n        for _ in 0..4 {\n            while is_spark_ahead() {\n                wait_tick(1);\n            }\n            step();\n        }\n    });\n\n    {\n        let mut g = vault.lock().unwrap();\n        *g += 3;\n    }\n    let total = *vault.lock().unwrap();\n    let mut core = rx.recv().unwrap();\n    // ダイヤルに total(6) ではなく 1 を入れてしまっているよ！total を渡そう\n    try_dial(1);\n    step(1);\n    scan(&core);\n    step(1);\n    while !is_gate_open() {\n        wait_tick(1);\n    }\n    while is_spark_ahead() {\n        wait_tick(1);\n    }\n    step(1);\n    boost(&mut core);\n    step(1);\n    deliver(core);\n    h.join();\n}",
    "solutionCode": "fn main() {\n    let vault = Arc::new(Mutex::new(0));\n    let v2 = Arc::clone(&vault);\n    let (tx, rx) = mpsc::channel();\n\n    let h = thread::spawn(move || {\n        let c = grab_core();\n        { let mut g = v2.lock().unwrap(); *g += 3; }\n        tx.send(c);\n        for _ in 0..4 {\n            while is_spark_ahead() {\n                wait_tick(1);\n            }\n            step();\n        }\n    });\n\n    {\n        let mut g = vault.lock().unwrap();\n        *g += 3;\n    }\n    h.join();\n    let total = *vault.lock().unwrap();\n    let mut core = rx.recv().unwrap();\n    try_dial(total);\n    step(1);\n    scan(&core);\n    step(1);\n    while !is_gate_open() {\n        wait_tick(1);\n    }\n    step(1);\n    boost(&mut core);\n    step(1);\n    deliver(core);\n}",
    "quickChips": [
      {
        "label": "h.join();",
        "insert": "h.join();\n    "
      },
      {
        "label": "try_dial(total);",
        "insert": "try_dial(total);"
      }
    ],
    "hints": [
      "サブスレッドが +3 終える前に `let total = *vault.lock().unwrap();` を読んじゃうと 3 しか入っていないことがあるよ！",
      "まずコアを受信 (`rx.recv()`) するか `h.join()` を先に呼んで `total` が確実に 6 になってから `try_dial(total);` を呼ぼう！…あっ、`h.join()` を先にしても `tx.send(c)` は終わっているから安心だよ！",
      "h.join();\nlet total = *vault.lock().unwrap();\nlet mut core = rx.recv().unwrap();\ntry_dial(total);"
    ],
    "worldSetup": {
      "width": 6,
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
        "x": 4,
        "y": 0
      },
      "cores": [
        {
          "id": "c1",
          "x": 0,
          "y": 0,
          "power": 1,
          "label": "極光コア"
        }
      ],
      "scanners": [
        {
          "x": 1,
          "y": 2
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
          "x": 1,
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
            "x": 1,
            "y": 0
          }
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
              "y": 0
            },
            {
              "x": 3,
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
      "minCorePower": 3,
      "scanCount": 1,
      "dialSolved": true,
      "vaultTarget": 6,
      "requireAllSwitches": true,
      "requireSpatialCoreRules": true
    },
    "parTicks": 22
  }
];


