import { StageDefinition } from '../types/game';

export const CHAPTER_1_STAGES: StageDefinition[] = [
  {
    "displayId": "1-1",
    "id": "3d738a54-da4a-52c6-b1cb-c05b7553fc60",
    "index": 1,
    "chapter": 1,
    "chapterTitle": "第1章 事始め",
    "title": "1-1. はじめての順次実行",
    "topicTag": "fn main() / 順次実行",
    "kurumiIntro": "ようこそRust工房へ！まずは看板メカの「フェリスちゃん」を前のゴール旗まで動かしてみよう。コードは上から順番に1つずつ実行されるよ！",
    "goalSummary": "step(); を3回書いてゴール旗 (3, 1) へ進もう",
    "bookSectionTitle": "1.2 “Hello, World!” — プログラムの入り口 main関数",
    "bookSummary": "Rustのプログラムはいつでも `fn main() { ... }` の中から始まり、書かれた命令を「上から順番に」1つずつ実行します。命令の終わりにはセミコロン `;` を付けるのがお約束です。",
    "bookKeyCode": "fn main() {\n    step();\n    step();\n}",
    "starterCode": "fn main() {\n    // 命令を上から順に書いてみよう！\n    step();\n    \n}",
    "solutionCode": "fn main() {\n    step();\n    step();\n    step();\n}",
    "quickChips": [
      {
        "label": "step();",
        "insert": "step();\n    "
      },
      {
        "label": "turn_right();",
        "insert": "turn_right();\n    "
      },
      {
        "label": "turn_left();",
        "insert": "turn_left();\n    "
      }
    ],
    "hints": [
      "今は step(); が1回だけ書かれているよ。あと2歩まえに進む必要があるね！",
      "fn main() { ... } の中に step(); を合計3回並べてみよう。",
      "fn main() {\n    step();\n    step();\n    step();\n}"
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
    "displayId": "1-2",
    "id": "d9ea670f-238a-54b4-879b-8201d9706c66",
    "index": 2,
    "chapter": 1,
    "chapterTitle": "第1章 事始め",
    "title": "1-2. 右に曲がる順番（turn_right）",
    "topicTag": "順次実行 / turn_right()",
    "kurumiIntro": "今度は途中で通路が下に曲がっているよ！`turn_right();` で右を向いてから、もう一度前に進もう。順番を間違えると壁にぶつかっちゃうから注意してね！",
    "goalSummary": "右に2歩進んでから turn_right(); し、さらに2歩進んで (2, 3) へ",
    "bookSectionTitle": "1.2 順次実行 — 命令の順番が結果を決める",
    "bookSummary": "命令を実行する順番はとても大切です。`step()` で進んでから `turn_right()` で向きを変え、また `step()` で新しい向きへ前進します。",
    "bookKeyCode": "step();\nstep();\nturn_right();\nstep();",
    "starterCode": "fn main() {\n    step();\n    step();\n    // ここで右へ向きを変えて、さらに2歩進もう！\n    \n}",
    "solutionCode": "fn main() {\n    step();\n    step();\n    turn_right();\n    step();\n    step();\n}",
    "quickChips": [
      {
        "label": "step();",
        "insert": "step();\n    "
      },
      {
        "label": "turn_right();",
        "insert": "turn_right();\n    "
      },
      {
        "label": "turn_left();",
        "insert": "turn_left();\n    "
      }
    ],
    "hints": [
      "東（右）を向いているときに turn_right(); をすると、南（下）を向くよ。",
      "turn_right(); のあとに step(); を2回書こう！",
      "fn main() {\n    step();\n    step();\n    turn_right();\n    step();\n    step();\n}"
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
    "displayId": "1-3",
    "id": "5da9d1d4-abaa-508e-aabc-f56914cf3969",
    "index": 3,
    "chapter": 1,
    "chapterTitle": "第1章 事始め",
    "title": "1-3. ジグザグ通路と左右ターン",
    "topicTag": "turn_right() / turn_left()",
    "kurumiIntro": "クランク状の通路だよ！右に曲がったあと、ゴールへ向かうために今度は `turn_left();` で左に向き直してみよう。",
    "goalSummary": "ジグザグに進んでゴール (4, 3) へ到達しよう",
    "bookSectionTitle": "1.2 順次実行 — 複数の基本動作の組み合わせ",
    "bookSummary": "小さな基本命令（`step`, `turn_right`, `turn_left`）を正しい順番で並べるだけで、複雑な経路も思い通りに案内できます。",
    "bookKeyCode": "step(2);\nturn_right();\nstep(2);\nturn_left();",
    "starterCode": "fn main() {\n    step();\n    step();\n    turn_right();\n    step();\n    step();\n    // ここから左を向いてあと2歩進もう！\n    \n}",
    "solutionCode": "fn main() {\n    step();\n    step();\n    turn_right();\n    step();\n    step();\n    turn_left();\n    step();\n    step();\n}",
    "quickChips": [
      {
        "label": "turn_left();",
        "insert": "turn_left();\n    "
      },
      {
        "label": "step();",
        "insert": "step();\n    "
      },
      {
        "label": "turn_right();",
        "insert": "turn_right();\n    "
      }
    ],
    "hints": [
      "(2, 3) で下を向いているから、右の (4, 3) へ行くには左に曲がる必要があるね！",
      "turn_left(); のあとに step(); を2回追加しよう。",
      "turn_left();\nstep();\nstep();"
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
          "x": 3,
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
        "x": 4,
        "y": 3
      }
    },
    "victoryCondition": {
      "reachGoal": true
    },
    "parTicks": 8
  },
  {
    "displayId": "1-4",
    "id": "f82c6a65-fb35-5d1b-8409-c3354d315bdd",
    "index": 4,
    "chapter": 1,
    "chapterTitle": "第1章 事始め",
    "title": "1-4. コの字回廊の回り込み",
    "topicTag": "順次実行 応用パズル",
    "kurumiIntro": "目の前には中庭の壁！上を通ってグルッとコの字に回り込んで、反対側のゴール旗までフェリスちゃんを誘導しよう。",
    "goalSummary": "中庭をぐるっと回り込んでゴール (3, 3) へ着こう",
    "bookSectionTitle": "1.2 順次実行 — 経路計画とデバッグ",
    "bookSummary": "動きが長いときは「1コマ送り」ボタンで1手ずつ位置と向きを確かめると、どこで曲がり間違えたかすぐに分かります。",
    "bookKeyCode": "step(3);\nturn_right();\nstep(2);",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn main() {\n    turn_left();\n    step(2);\n    turn_right();\n    step(3);\n    turn_right();\n    step(2);\n}",
    "quickChips": [
      {
        "label": "step(歩数);",
        "insert": "step(/* 歩数 */);\n    "
      },
      {
        "label": "turn_right();",
        "insert": "turn_right();\n    "
      },
      {
        "label": "turn_left();",
        "insert": "turn_left();\n    "
      }
    ],
    "hints": [
      "(0, 3) から上に2歩で (0, 1)、右に3歩で (3, 1)、下に2歩で (3, 3) だよ！",
      "turn_right(); のあとに step(3); turn_right(); step(2); を書こう。",
      "turn_left();\nstep(2);\nturn_right();\nstep(3);\nturn_right();\nstep(2);"
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
          "x": 1,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
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
        "y": 3,
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
    "parTicks": 10
  },
  {
    "id": "56ba2a08-9045-5e05-a06d-61cd7405338b",
    "displayId": "1-5",
    "index": 5,
    "chapter": 1,
    "chapterTitle": "第1章 事始め",
    "stageKind": "basic",
    "title": "1-5. 連動スイッチの順序制御",
    "topicTag": "状態遷移 / スイッチ / ゲート",
    "kurumiIntro": "スイッチを踏むとゲートが開くよ。作動条件を満たしてから出口へ向かおう。",
    "goalSummary": "スイッチ (1, 1) を作動させてゴール (6, 1) へ",
    "bookSectionTitle": "ゲーム操作の練習 — 順次実行と盤面ギミック",
    "bookSummary": "スイッチの状態変化を利用して、閉じたゲートを通過できます。",
    "bookKeyCode": "step(); // スイッチを作動させてから進む",
    "starterCode": "fn main() {\n    step(5);\n}",
    "solutionCode": "fn main() {\n    step(6);\n}",
    "quickChips": [
      {
        "label": "解法の式",
        "insert": "    step(6);"
      }
    ],
    "hints": [
      "ゲートはスイッチと連動しているよ。",
      "スイッチを先に踏むルートを組もう。",
      "fn main() {\n    step(6);\n}"
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
      },
      "switches": [
        {
          "x": 1,
          "y": 1
        }
      ],
      "gates": [
        {
          "x": 5,
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
    "parTicks": 6
  },
  {
    "id": "370edeb4-9a0c-5c13-9068-2b556311ff20",
    "displayId": "1-6",
    "index": 6,
    "chapter": 1,
    "chapterTitle": "第1章 事始め",
    "stageKind": "basic",
    "title": "1-6. 二段コンベアの最短経路",
    "topicTag": "経路最適化 / コンベア",
    "kurumiIntro": "コンベアの押し出しを見越して、制限ティック内の経路を組み立てよう。",
    "goalSummary": "二つのコンベアを使い4ティック以内にゴール",
    "bookSectionTitle": "ゲーム操作の練習 — 順次実行と盤面ギミック",
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
    "id": "056e99f3-0ba8-5565-b054-7898e7d05c9d",
    "displayId": "1-7",
    "index": 7,
    "chapter": 1,
    "chapterTitle": "第1章 事始め",
    "stageKind": "challenge",
    "title": "1-7. 出口までの距離を読み解く",
    "topicTag": "観察 / 経路設計",
    "kurumiIntro": "盤面の幅を観察して、開始地点から出口までの移動計画を立てよう。",
    "goalSummary": "最短の直線経路で (6, 1) へ到達",
    "bookSectionTitle": "ゲーム操作の練習 — 順次実行と盤面ギミック",
    "bookSummary": "開始座標とゴール座標の差から必要な移動回数を計算します。",
    "bookKeyCode": "step(6);",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn main() {\n    step(6);\n}",
    "quickChips": [
      {
        "label": "解法の式",
        "insert": "    step(6);"
      }
    ],
    "hints": [
      "開始地点からゴールまでは6マスだよ。",
      "`step(6);` で6マスまとめて進めるよ。",
      "fn main() {\n    step(6);\n}"
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
    "id": "48e019d2-b72d-58e6-9d3a-bab9d88bec16",
    "displayId": "1-8",
    "index": 8,
    "chapter": 1,
    "chapterTitle": "第1章 事始め",
    "stageKind": "basic",
    "title": "1-8. 連動スイッチの順序制御",
    "topicTag": "状態遷移 / スイッチ / ゲート",
    "kurumiIntro": "スイッチを踏むとゲートが開くよ。作動条件を満たしてから出口へ向かおう。",
    "goalSummary": "スイッチ (1, 1) を作動させてゴール (3, 1) へ",
    "bookSectionTitle": "ゲーム操作の練習 — 順次実行と盤面ギミック",
    "bookSummary": "スイッチの状態変化を利用して、閉じたゲートを通過できます。",
    "bookKeyCode": "step(); // スイッチを作動させてから進む",
    "starterCode": "fn main() {\n    step(2);\n}",
    "solutionCode": "fn main() {\n    step(3);\n}",
    "quickChips": [
      {
        "label": "解法の式",
        "insert": "    step(3);"
      }
    ],
    "hints": [
      "ゲートはスイッチと連動しているよ。",
      "スイッチを先に踏むルートを組もう。",
      "fn main() {\n    step(3);\n}"
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
      "switches": [
        {
          "x": 1,
          "y": 1
        }
      ],
      "gates": [
        {
          "x": 2,
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
    "parTicks": 3
  },
  {
    "id": "0d8bcb34-fd7a-5522-9511-5f5740dd9a69",
    "displayId": "1-9",
    "index": 9,
    "chapter": 1,
    "chapterTitle": "第1章 事始め",
    "stageKind": "basic",
    "title": "1-9. 二段コンベアの最短経路",
    "topicTag": "経路最適化 / コンベア",
    "kurumiIntro": "コンベアの押し出しを見越して、制限ティック内の経路を組み立てよう。",
    "goalSummary": "二つのコンベアを使い4ティック以内にゴール",
    "bookSectionTitle": "ゲーム操作の練習 — 順次実行と盤面ギミック",
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
    "id": "0ade949b-3d7b-5a3c-8cc7-713d5b8450c1",
    "displayId": "1-10",
    "index": 10,
    "chapter": 1,
    "chapterTitle": "第1章 事始め",
    "stageKind": "challenge",
    "title": "1-10. 出口までの距離を読み解く",
    "topicTag": "観察 / 経路設計",
    "kurumiIntro": "盤面の幅を観察して、開始地点から出口までの移動計画を立てよう。",
    "goalSummary": "最短の直線経路で (3, 1) へ到達",
    "bookSectionTitle": "ゲーム操作の練習 — 順次実行と盤面ギミック",
    "bookSummary": "開始座標とゴール座標の差から必要な移動回数を計算します。",
    "bookKeyCode": "step(3);",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn main() {\n    step(3);\n}",
    "quickChips": [
      {
        "label": "解法の式",
        "insert": "    step(3);"
      }
    ],
    "hints": [
      "開始地点からゴールまでは3マスだよ。",
      "`step(3);` で3マスまとめて進めるよ。",
      "fn main() {\n    step(3);\n}"
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
    "id": "ea2c70b1-4a0b-5616-b4ad-ba8449d43429",
    "displayId": "1-11",
    "index": 11,
    "chapter": 1,
    "chapterTitle": "第1章 事始め",
    "stageKind": "basic",
    "title": "1-11. 連動スイッチの順序制御",
    "topicTag": "状態遷移 / スイッチ / ゲート",
    "kurumiIntro": "スイッチを踏むとゲートが開くよ。作動条件を満たしてから出口へ向かおう。",
    "goalSummary": "スイッチ (1, 1) を作動させてゴール (4, 1) へ",
    "bookSectionTitle": "ゲーム操作の練習 — 順次実行と盤面ギミック",
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
    "displayId": "1-12",
    "index": 12,
    "chapter": 1,
    "chapterTitle": "第1章 事始め",
    "stageKind": "basic",
    "title": "1-12. 二段コンベアの最短経路",
    "topicTag": "経路最適化 / コンベア",
    "kurumiIntro": "コンベアの押し出しを見越して、制限ティック内の経路を組み立てよう。",
    "goalSummary": "二つのコンベアを使い4ティック以内にゴール",
    "bookSectionTitle": "ゲーム操作の練習 — 順次実行と盤面ギミック",
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
    "displayId": "1-13",
    "index": 13,
    "chapter": 1,
    "chapterTitle": "第1章 事始め",
    "stageKind": "challenge",
    "title": "1-13. 出口までの距離を読み解く",
    "topicTag": "観察 / 経路設計",
    "kurumiIntro": "盤面の幅を観察して、開始地点から出口までの移動計画を立てよう。",
    "goalSummary": "最短の直線経路で (4, 1) へ到達",
    "bookSectionTitle": "ゲーム操作の練習 — 順次実行と盤面ギミック",
    "bookSummary": "開始座標とゴール座標の差から必要な移動回数を計算します。",
    "bookKeyCode": "step(4);",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn main() {\n    step(4);\n}",
    "quickChips": [
      {
        "label": "解法の式",
        "insert": "    step(4);"
      }
    ],
    "hints": [
      "開始地点からゴールまでは4マスだよ。",
      "`step(4);` で4マスまとめて進めるよ。",
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
    "id": "d4dc4dd5-37fe-55b0-840d-6f5cd5c28449",
    "displayId": "1-14",
    "index": 14,
    "chapter": 1,
    "chapterTitle": "第1章 事始め",
    "stageKind": "basic",
    "title": "1-14. 連動スイッチの順序制御",
    "topicTag": "状態遷移 / スイッチ / ゲート",
    "kurumiIntro": "スイッチを踏むとゲートが開くよ。作動条件を満たしてから出口へ向かおう。",
    "goalSummary": "スイッチ (1, 1) を作動させてゴール (5, 1) へ",
    "bookSectionTitle": "ゲーム操作の練習 — 順次実行と盤面ギミック",
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
    "displayId": "1-15",
    "index": 15,
    "chapter": 1,
    "chapterTitle": "第1章 事始め",
    "stageKind": "basic",
    "title": "1-15. 二段コンベアの最短経路",
    "topicTag": "経路最適化 / コンベア",
    "kurumiIntro": "コンベアの押し出しを見越して、制限ティック内の経路を組み立てよう。",
    "goalSummary": "二つのコンベアを使い4ティック以内にゴール",
    "bookSectionTitle": "ゲーム操作の練習 — 順次実行と盤面ギミック",
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
    "displayId": "1-16",
    "index": 16,
    "chapter": 1,
    "chapterTitle": "第1章 事始め",
    "stageKind": "challenge",
    "title": "1-16. 出口までの距離を読み解く",
    "topicTag": "観察 / 経路設計",
    "kurumiIntro": "盤面の幅を観察して、開始地点から出口までの移動計画を立てよう。",
    "goalSummary": "最短の直線経路で (5, 1) へ到達",
    "bookSectionTitle": "ゲーム操作の練習 — 順次実行と盤面ギミック",
    "bookSummary": "開始座標とゴール座標の差から必要な移動回数を計算します。",
    "bookKeyCode": "step(5);",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn main() {\n    step(5);\n}",
    "quickChips": [
      {
        "label": "解法の式",
        "insert": "    step(5);"
      }
    ],
    "hints": [
      "開始地点からゴールまでは5マスだよ。",
      "`step(5);` で5マスまとめて進めるよ。",
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
    "displayId": "1-17",
    "id": "3dc08e11-a91c-53de-9ebb-d47c15b5ecc1",
    "index": 17,
    "chapter": 1,
    "chapterTitle": "第1章 事始め",
    "stageKind": "puzzle",
    "title": "1-17. コンベア・ショートカット",
    "topicTag": "コンベア / 最短手数パズル",
    "kurumiIntro": "青い矢印のベルトコンベアに乗ると、同じティック内で一気に1マス先へ運んでもらえるよ！制限ティック内にゴールするにはどのマスを踏めばいいかな？",
    "goalSummary": "ベルトコンベアを乗り継いで 4ティック以内にゴール (5, 1) へ到達",
    "bookSectionTitle": "1.2 順次実行 — コンベアを使った歩数短縮",
    "bookSummary": "ベルトコンベアのマスへ `step()` で乗ると、そのまま矢印の方向へ1マス押し出されます。普通の床を歩くより少ない命令・少ないティックで移動できます！",
    "bookKeyCode": "step(3); // コンベアが1歩ずつ運んでくれる！",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn main() {\n    step(3);\n}",
    "quickChips": [
      {
        "label": "step();",
        "insert": "step();\n    "
      },
      {
        "label": "step(3);",
        "insert": "step(3);\n    "
      }
    ],
    "hints": [
      "(0,1)から右へ1歩で (1,1) の右向きコンベアに乗ると、そのまま (2,1) まで運ばれるよ！",
      "(2,1)からもう1歩で (3,1) のコンベアに乗り、(4,1) へ。あと1歩で (5,1) のゴールだよ！",
      "step(3);"
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
    "displayId": "1-18",
    "id": "7751d7c0-99d8-578b-8ac6-8a6b5e6045c2",
    "index": 18,
    "chapter": 1,
    "chapterTitle": "第1章 事始め",
    "stageKind": "puzzle",
    "title": "1-18. スイッチと鍵付きゲート",
    "topicTag": "スイッチ連動 / 経路パズル",
    "kurumiIntro": "ゴール前の蒸気ゲートは、上の部屋にあるオレンジの床スイッチ（SW）を踏むと開く仕組みだよ！まずは寄り道してスイッチをONにしよう。",
    "goalSummary": "スイッチ (1, 1) を踏んでゲートを開きゴール (4, 3) へ",
    "bookSectionTitle": "1.2 順次実行 — ギミックの順序設計",
    "bookSummary": "連動スイッチ（SW）を踏むと対応するゲートが開きます。ゴールへ直進する前に、正しい向きと歩数で寄り道ルートを組み立てましょう。",
    "bookKeyCode": "step();\nturn_left();\nstep(2);",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn main() {\n    step();\n    turn_left();\n    step(2);\n    turn_right();\n    step(2);\n    turn_right();\n    step(2);\n    turn_left();\n    step();\n}",
    "quickChips": [
      {
        "label": "step(n);",
        "insert": "step(2);\n    "
      },
      {
        "label": "turn_right();",
        "insert": "turn_right();\n    "
      },
      {
        "label": "turn_left();",
        "insert": "turn_left();\n    "
      }
    ],
    "hints": [
      "(0,3) から右へ1歩で (1,3)、左折して上へ2歩進むと (1,1) のスイッチに乗るよ！",
      "そこから右へ2歩で (3,1)、下へ2歩で開いたゲート (3,3) を抜けて、右へ1歩でゴール (4,3)！",
      "step();\nturn_left();\nstep(2);\nturn_right();\nstep(2);\nturn_right();\nstep(2);\nturn_left();\nstep();"
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
          "x": 4,
          "y": 1
        },
        {
          "x": 0,
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
        "y": 3,
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
        }
      ],
      "gates": [
        {
          "x": 3,
          "y": 3,
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
    "parTicks": 13
  },
  {
    "displayId": "1-19",
    "id": "bf44af99-9150-56bf-8660-f45dfeaf1227",
    "index": 19,
    "chapter": 1,
    "chapterTitle": "第1章 事始め",
    "stageKind": "puzzle",
    "title": "1-19. コンベアの罠と正しい進路",
    "topicTag": "コンベア向き判別パズル",
    "kurumiIntro": "通路に2種類のコンベアが設置されているよ！下向きコンベアでスイッチを踏み、もう1つのコンベアで最小ティックのゴールを目指そう。",
    "goalSummary": "南向きコンベアでスイッチを踏み、7ティック以内にゴール (4, 3) へ",
    "bookSectionTitle": "1.2 順次実行 — コンベア押し出しの計算",
    "bookSummary": "コンベアは乗った瞬間に矢印先へ1マス進みます。つまり「コンベアの1マス手前」へ歩くだけで一気に2マス分移動できるのがポイントです。",
    "bookKeyCode": "step();\nturn_right();\nstep();\nturn_left();\nstep(2);",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn main() {\n    step();\n    turn_right();\n    step();\n    turn_left();\n    step(2);\n}",
    "quickChips": [
      {
        "label": "step();",
        "insert": "step();\n    "
      },
      {
        "label": "step(2);",
        "insert": "step(2);\n    "
      },
      {
        "label": "turn_right();",
        "insert": "turn_right();\n    "
      },
      {
        "label": "turn_left();",
        "insert": "turn_left();\n    "
      }
    ],
    "hints": [
      "(0,1) から1歩右で (1,1) の下向きコンベアに乗ると、自動で (1,2) のスイッチに押されるよ！",
      "まだ東向きだから `turn_right(); step();` で下の (1,3) に降りよう！",
      "step();\nturn_right();\nstep();\nturn_left();\nstep(2);"
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
          "x": 0,
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
        "x": 4,
        "y": 3
      },
      "conveyors": [
        {
          "x": 1,
          "y": 1,
          "dir": 1
        },
        {
          "x": 2,
          "y": 3,
          "dir": 0
        }
      ],
      "switches": [
        {
          "x": 1,
          "y": 2
        }
      ],
      "gates": [
        {
          "x": 3,
          "y": 3,
          "openTicks": 1,
          "closedTicks": 0,
          "linkedSwitch": {
            "x": 1,
            "y": 2
          }
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
    "displayId": "1-20",
    "id": "9e823160-a764-556e-95b9-48f519d8e6c4",
    "index": 20,
    "chapter": 1,
    "chapterTitle": "第1章 事始め",
    "stageKind": "puzzle",
    "title": "1-20. ダブルスイッチ回廊",
    "topicTag": "複数スイッチ / 経路最適化",
    "kurumiIntro": "今度はスイッチが2つ！上下にある2つのスイッチを両方踏んで、ゴール前の2連ゲートを順番に解除しよう。コンベアも1つ使えるよ！",
    "goalSummary": "2つのスイッチを踏んで 15ティック以内にゴール (5, 2) へ",
    "bookSectionTitle": "1.2 順次実行 — 効率的な一筆書きルート",
    "bookSummary": "複数の目的地を回るときは、戻りが少なくなる一筆書きルートとコンベアの組み合わせを考えるとティック数を節約できます。",
    "bookKeyCode": "step(2);\nturn_right();\nstep(2);",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn main() {\n    turn_left();\n    step();\n    turn_right();\n    step();\n    turn_right();\n    step(2);\n    turn_left();\n    step(2);\n    turn_left();\n    step();\n    turn_right();\n    step();\n}",
    "quickChips": [
      {
        "label": "step(n);",
        "insert": "step(2);\n    "
      },
      {
        "label": "turn_right();",
        "insert": "turn_right();\n    "
      },
      {
        "label": "turn_left();",
        "insert": "turn_left();\n    "
      }
    ],
    "hints": [
      "まず (0,2) から北へ1歩→東へ1歩で上のスイッチ (1,1) を踏もう！",
      "(1,1) から南へ2歩進むと (1,3) に着き、東向きになって東へ step(2) で (2,3) 下スイッチと (3,3) コンベアで一気に (4,3) へ進めるよ！",
      "turn_left();\nstep();\nturn_right();\nstep();\nturn_right();\nstep(2);\nturn_left();\nstep(2);\nturn_left();\nstep();\nturn_right();\nstep();"
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
          "x": 2,
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
        "y": 2,
        "dir": 0
      },
      "goal": {
        "x": 5,
        "y": 2
      },
      "switches": [
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 2,
          "y": 3
        }
      ],
      "conveyors": [
        {
          "x": 3,
          "y": 3,
          "dir": 0
        }
      ],
      "gates": [
        {
          "x": 3,
          "y": 2,
          "openTicks": 1,
          "closedTicks": 0,
          "linkedSwitch": {
            "x": 1,
            "y": 1
          }
        },
        {
          "x": 4,
          "y": 2,
          "openTicks": 1,
          "closedTicks": 0,
          "linkedSwitch": {
            "x": 2,
            "y": 3
          }
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "requireAllSwitches": true,
      "maxTicks": 15
    },
    "parTicks": 15
  },
  {
    "displayId": "1-21",
    "id": "f57d3e58-9575-5163-8c39-5ba16985ba21",
    "index": 21,
    "chapter": 1,
    "chapterTitle": "第1章 事始め",
    "stageKind": "puzzle",
    "title": "1-21. 巡回スパークのすき間を抜けろ",
    "topicTag": "wait_tick() / タイミングパズル",
    "kurumiIntro": "通路を赤い火花「巡回スパーク」が行ったり来たりしているよ！タイミングよく `wait_tick(1);` で足踏みして、ぶつからずに通り抜けよう！",
    "goalSummary": "巡回スパークを避けてゴール (5, 2) へ到着しよう",
    "bookSectionTitle": "1.2 順次実行 — wait_tick() でリズムを合わせる",
    "bookSummary": "動かないことも立派な戦略です。`wait_tick(n)` を使うと、その場にとどまったまま時間（ティック）だけを正確に進められます。",
    "bookKeyCode": "wait_tick(1);\nstep(2);",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn main() {\n    step();\n    wait_tick(1);\n    step(4);\n}",
    "quickChips": [
      {
        "label": "wait_tick(1);",
        "insert": "wait_tick(1);\n    "
      },
      {
        "label": "step();",
        "insert": "step();\n    "
      },
      {
        "label": "step(n);",
        "insert": "step(4);\n    "
      }
    ],
    "hints": [
      "スパーク1は x=2 の列を上下に動いているよ。Tick 1〜2 の動きを見てみよう！",
      "1歩進んで (1,2) で wait_tick(1) すると、スパークが通り過ぎて安全に進めるよ！",
      "step();\nwait_tick(1);\nstep(4);"
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
        "x": 5,
        "y": 2
      },
      "sparks": [
        {
          "id": "sp1",
          "path": [
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
            }
          ],
          "initialIndex": 1
        },
        {
          "id": "sp2",
          "path": [
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
            },
            {
              "x": 4,
              "y": 2
            }
          ],
          "initialIndex": 1
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true
    },
    "parTicks": 7
  },
  {
    "displayId": "1-22",
    "id": "e34ed4af-4924-5008-9856-45f158f643a8",
    "index": 22,
    "chapter": 1,
    "chapterTitle": "第1章 事始め",
    "stageKind": "challenge",
    "title": "1-22. 火花と周期ゲートの二重奏",
    "topicTag": "章末チャレンジ / 複合タイミング",
    "kurumiIntro": "定期的に開閉する蒸気ゲートと、行ったり来たりするスパークが同時に待ち受けているよ！1コマずつ動きを予想して、華麗に通り抜けよう！",
    "goalSummary": "周期ゲートとスパークを見切ってゴール (6, 2) に到達しよう",
    "bookSectionTitle": "順次実行と盤面ギミックの総合演習",
    "bookSummary": "ゲートの「開/閉カウントダウン」とスパークの移動周期を観察し、必要なときだけ `wait_tick()` を差し込むのが攻略のコツです。",
    "bookKeyCode": "step(2);\nwait_tick(1);\nstep(2);",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn main() {\n    step();\n    wait_tick(2);\n    step(2);\n    wait_tick(1);\n    step(3);\n}",
    "quickChips": [
      {
        "label": "wait_tick(1);",
        "insert": "wait_tick(1);\n    "
      },
      {
        "label": "wait_tick(2);",
        "insert": "wait_tick(2);\n    "
      },
      {
        "label": "step(n);",
        "insert": "step(2);\n    "
      }
    ],
    "hints": [
      "ゲートは最初閉まっていて2ティックで開くよ。(1,2)まで進んで wait_tick(2) でゲートが開くのを待とう！",
      "ゲートを通って (3,2) に着いたら、x=4 のスパークの動きを見て1ティック待ってから抜けよう。",
      "step();\nwait_tick(2);\nstep(2);\nwait_tick(1);\nstep(3);"
    ],
    "worldSetup": {
      "width": 7,
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
          "x": 6,
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
      "gates": [
        {
          "x": 2,
          "y": 2,
          "openTicks": 2,
          "closedTicks": 2,
          "initialOffset": 1
        }
      ],
      "sparks": [
        {
          "id": "sp1",
          "path": [
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
            }
          ],
          "initialIndex": 1
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "maxTicks": 11
    },
    "parTicks": 10
  },
  {
    "displayId": "1-23",
    "id": "97cc03cb-b7c6-531c-85f4-775660346be9",
    "index": 23,
    "chapter": 1,
    "chapterTitle": "第1章 事始め",
    "title": "1-23. println! マクロとあいさつ認証",
    "topicTag": "println! / マクロ",
    "kurumiIntro": "ゴールの扉にあいさつ認証がついているよ！`println!(\"HELLO\");` で文字を出力してから、ゴールまで歩いてみよう。",
    "goalSummary": "println!(\"HELLO\"); を出力してゴール (3, 1) に着こう",
    "bookSectionTitle": "1.2 & 1.3 println! マクロと Cargo 実行",
    "bookSummary": "名前の最後に `!` が付いている `println!` は「マクロ」と呼ばれます。画面にメッセージを表示して動作を確かめるときに大活躍します。",
    "bookKeyCode": "println!(\"HELLO\");",
    "starterCode": "fn main() {\n    // まずは工房に \"HELLO\" とあいさつしよう\n    println!(\"...\");\n    step(3);\n}",
    "solutionCode": "fn main() {\n    println!(\"HELLO\");\n    step(3);\n}",
    "quickChips": [
      {
        "label": "println!(\"...\");",
        "insert": "println!(\"\");\n    "
      },
      {
        "label": "step(歩数);",
        "insert": "step(/* 歩数 */);\n    "
      }
    ],
    "hints": [
      "println! の中身が \"...\" のままだと認証が通らないよ！",
      "\"...\" の部分を \"HELLO\" に書き換えてみよう。",
      "fn main() {\n    println!(\"HELLO\");\n    step(3);\n}"
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
        "HELLO"
      ]
    },
    "parTicks": 4
  },
  {
    "displayId": "1-24",
    "id": "c3cdcf8a-02f3-54a9-9358-f873fcb627de",
    "index": 24,
    "chapter": 1,
    "chapterTitle": "第1章 事始め",
    "title": "1-24. 複数の報告とL字配達",
    "topicTag": "複数 println! / 経路移動",
    "kurumiIntro": "出発の合図 `\"START\"` と到着の合図 `\"DONE\"` の2つを順番に報告しよう！盤面でフェリスちゃんが吹き出しでおしゃべりするよ。",
    "goalSummary": "\"START\" と \"DONE\" の両方を出力し、曲がり角先の (2, 3) へ",
    "bookSectionTitle": "ログ出力と移動手順の実践",
    "bookSummary": "処理の節目ごとに `println!` を入れておくと、ロボットがどこまで進んだかを視覚的に追いかけやすくなります。",
    "bookKeyCode": "println!(\"START\");\nstep(2);\nturn_right();\nstep(2);\nprintln!(\"DONE\");",
    "starterCode": "fn main() {\n    println!(\"START\");\n    step(2);\n    turn_right();\n    step(2);\n    // 最後に \"DONE\" と出力しよう！\n    \n}",
    "solutionCode": "fn main() {\n    println!(\"START\");\n    step(2);\n    turn_right();\n    step(2);\n    println!(\"DONE\");\n}",
    "quickChips": [
      {
        "label": "println!(\"DONE\");",
        "insert": "println!(\"DONE\");\n    "
      },
      {
        "label": "step(歩数);",
        "insert": "step(/* 歩数 */);\n    "
      }
    ],
    "hints": [
      "移動の最後（step(2); のあと）に報告の println! を追加しよう。",
      "println!(\"DONE\"); を最後の一行に書けばOK！",
      "println!(\"START\");\nstep(2);\nturn_right();\nstep(2);\nprintln!(\"DONE\");"
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
      "reachGoal": true,
      "stdoutIncludes": [
        "START",
        "DONE"
      ]
    },
    "parTicks": 7
  },
  {
    "displayId": "1-25",
    "id": "8fbca29b-fc90-5a12-b7f2-1038db1c6314",
    "index": 25,
    "chapter": 1,
    "chapterTitle": "第1章 事始め",
    "title": "1-25. プレースホルダー {} で値を表示",
    "topicTag": "println!(\"{}\", 値)",
    "kurumiIntro": "`println!` の文字列の中に `{}` を入れておくと、うしろに書いた数字や文字をその場所へピタッと埋め込んで表示できるんだよ！",
    "goalSummary": "println!(\"STEP: {}\", 4); で \"STEP: 4\" を出力してゴールへ",
    "bookSectionTitle": "1.2 書式付き出力 — プレースホルダー {}",
    "bookSummary": "`println!(\"値は {}\", x);` と書くと、`{}` の位置に変数や計算結果が差し込まれます。出力パネルでログを確認するときにとても便利です。",
    "bookKeyCode": "println!(\"STEP: {}\", 4);",
    "starterCode": "fn main() {\n    // {} の中に 4 が入るように修正しよう！\n    println!(\"STEP: {}\", 1);\n    step(4);\n}",
    "solutionCode": "fn main() {\n    println!(\"STEP: {}\", 4);\n    step(4);\n}",
    "quickChips": [
      {
        "label": "println!(\"...: {}\", 値);",
        "insert": "println!(\"/* 文字 */: {}\", /* 値 */);\n    "
      },
      {
        "label": "step(歩数);",
        "insert": "step(/* 歩数 */);\n    "
      }
    ],
    "hints": [
      "今は 1 が埋め込まれて \"STEP: 1\" になっているよ。",
      "1 を 4 に変えて \"STEP: 4\" を出力しよう！",
      "println!(\"STEP: {}\", 4);\nstep(4);"
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
        "STEP: 4"
      ]
    },
    "parTicks": 5
  },
  {
    "displayId": "1-26",
    "id": "fc1e8444-017a-5f77-a6d3-646044eec856",
    "index": 26,
    "chapter": 1,
    "chapterTitle": "第1章 事始め",
    "stageKind": "puzzle",
    "title": "1-26. コンベア連鎖＆あいさつ認証",
    "topicTag": "コンベア + println! 複合",
    "kurumiIntro": "コンベアの押し出しでL字のコースを一気に滑りつつ、ゴールに着く前後に `\"READY\"` の合図を送ろう。最小ティックでスマートに決めてね！",
    "goalSummary": "\"READY\" を出力し、スイッチ経由で 7ティック以内にゴール (4, 1) へ",
    "bookSectionTitle": "1.2 & 1.3 順次実行の総合演習",
    "bookSummary": "出力マクロ `println!` も1ティック消費します。制限ティックがあるときは無駄のない移動と出力をセットで設計しましょう。",
    "bookKeyCode": "println!(\"READY\");\nstep(2);",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn main() {\n    println!(\"READY\");\n    step();\n    turn_left();\n    step(2);\n    turn_right();\n    step();\n}",
    "quickChips": [
      {
        "label": "println!(\"READY\");",
        "insert": "println!(\"READY\");\n    "
      },
      {
        "label": "step(n);",
        "insert": "step(2);\n    "
      },
      {
        "label": "turn_left();",
        "insert": "turn_left();\n    "
      },
      {
        "label": "turn_right();",
        "insert": "turn_right();\n    "
      }
    ],
    "hints": [
      "(0,3) から step() で (1,3) の東コンベアに乗ると (2,3) に着くよ。",
      "そこで左折して北へ step(2) すると (2,1) の東コンベアで一気に (3,1) か…まずはスイッチ(2,1)確認！",
      "println!(\"READY\");\nstep();\nturn_left();\nstep(2);\nturn_right();\nstep();"
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
        "y": 3,
        "dir": 0
      },
      "goal": {
        "x": 4,
        "y": 1
      },
      "conveyors": [
        {
          "x": 1,
          "y": 3,
          "dir": 0
        },
        {
          "x": 2,
          "y": 1,
          "dir": 0
        }
      ],
      "switches": [
        {
          "x": 2,
          "y": 2
        }
      ],
      "gates": [
        {
          "x": 3,
          "y": 1,
          "openTicks": 1,
          "closedTicks": 0,
          "linkedSwitch": {
            "x": 2,
            "y": 2
          }
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "requireAllSwitches": true,
      "stdoutIncludes": [
        "READY"
      ],
      "maxTicks": 8
    },
    "parTicks": 8
  },
  {
    "displayId": "1-27",
    "id": "b022d65a-c79c-5290-93b0-e24c94ca7c37",
    "index": 27,
    "chapter": 1,
    "chapterTitle": "第1章 事始め",
    "title": "1-27. 第1章まとめ：U字配達とあいさつ",
    "topicTag": "第1章 総合実践",
    "kurumiIntro": "第1章の仕上げだよ！`\"ORDER_OK\"` を唱えてから、U字の工房通路を通ってカウンターのゴールまでパンを届けよう！",
    "goalSummary": "\"ORDER_OK\" を出力し、U字通路を回ってゴール (0, 3) へ",
    "bookSectionTitle": "第1章まとめ — main関数・順次実行・println!",
    "bookSummary": "セミコロン `;`、順番に実行されるコマンド、そして `println!` マクロ。この3つがRustプログラミングの最初の一歩です。",
    "bookKeyCode": "println!(\"ORDER_OK\");\nstep(3);\nturn_right();\nstep(2);",
    "starterCode": "fn main() {\n    // \"ORDER_OK\" を出力してから U字ルートを進もう！\n    step(3);\n    turn_right();\n    step(2);\n    turn_right();\n    \n}",
    "solutionCode": "fn main() {\n    println!(\"ORDER_OK\");\n    step(3);\n    turn_right();\n    step(2);\n    turn_right();\n    step(3);\n}",
    "quickChips": [
      {
        "label": "println!(\"ORDER_OK\");",
        "insert": "println!(\"ORDER_OK\");\n    "
      },
      {
        "label": "step(歩数);",
        "insert": "step(/* 歩数 */);\n    "
      },
      {
        "label": "turn_right();",
        "insert": "turn_right();\n    "
      }
    ],
    "hints": [
      "最初に println!(\"ORDER_OK\"); を入れて、最後は右折して西向き（左方向）に3歩進もう！",
      "最後の turn_right(); のあとに step(3); を追加しよう。",
      "println!(\"ORDER_OK\");\nstep(3);\nturn_right();\nstep(2);\nturn_right();\nstep(3);"
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
        "x": 0,
        "y": 3
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "stdoutIncludes": [
        "ORDER_OK"
      ]
    },
    "parTicks": 11
  },
  {
    "displayId": "1-28",
    "id": "88728e13-36e6-54a1-8354-99c8bc40d969",
    "index": 28,
    "chapter": 1,
    "chapterTitle": "第1章 事始め",
    "stageKind": "challenge",
    "title": "1-28. 第1章マスター：からくり全自動ライン",
    "topicTag": "第1章最終チャレンジ",
    "kurumiIntro": "第1章の集大成だよ！コンベア・スイッチ連動ゲート・巡回スパーク・あいさつ出力のすべてを組み合わせた工房の試練を乗り越えよう！",
    "goalSummary": "\"STAGE1 CLEAR\" を出力し、全ギミックを突破して 12ティック以内にゴール (6, 3) へ",
    "bookSectionTitle": "順次実行と盤面ギミックの総合演習",
    "bookSummary": "ここまでの基礎命令をすべて使いこなし、自分の頭で盤面を読んで最小ルートを設計する総合問題です。",
    "bookKeyCode": "println!(\"STAGE1 CLEAR\");",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn main() {\n    println!(\"STAGE1 CLEAR\");\n    step(2);\n    turn_right();\n    step();\n    turn_left();\n    step();\n    wait_tick(1);\n    step(2);\n}",
    "quickChips": [
      {
        "label": "println!(\"STAGE1 CLEAR\");",
        "insert": "println!(\"STAGE1 CLEAR\");\n    "
      },
      {
        "label": "wait_tick(1);",
        "insert": "wait_tick(1);\n    "
      },
      {
        "label": "step(n);",
        "insert": "step(2);\n    "
      },
      {
        "label": "turn_right();",
        "insert": "turn_right();\n    "
      },
      {
        "label": "turn_left();",
        "insert": "turn_left();\n    "
      }
    ],
    "hints": [
      "スタートから step(2) で (1,1)コンベア→(2,1)コンベア→…ではなく、(1,1)東コンベアで(2,1)へ、次の1歩でスイッチ(3,1)に乗るよ！",
      "そこから南へ1歩 (3,2)、東向きになって1歩 (4,2) あるいはコンベアで(4,3)へ。下の段(y=3)のスパークに合わせて1ティック待とう！",
      "println!(\"STAGE1 CLEAR\");\nstep(2);\nturn_right();\nstep();\nturn_left();\nstep();\nwait_tick(1);\nstep(2);"
    ],
    "worldSetup": {
      "width": 7,
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
          "x": 6,
          "y": 0
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
          "x": 6,
          "y": 4
        }
      ],
      "botStart": {
        "x": 0,
        "y": 1,
        "dir": 0
      },
      "goal": {
        "x": 6,
        "y": 3
      },
      "conveyors": [
        {
          "x": 1,
          "y": 1,
          "dir": 0
        },
        {
          "x": 3,
          "y": 2,
          "dir": 1
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
          "y": 3,
          "openTicks": 1,
          "closedTicks": 0,
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
              "y": 2
            },
            {
              "x": 5,
              "y": 3
            },
            {
              "x": 5,
              "y": 4
            },
            {
              "x": 5,
              "y": 3
            }
          ],
          "initialIndex": 1
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "requireAllSwitches": true,
      "stdoutIncludes": [
        "STAGE1 CLEAR"
      ],
      "maxTicks": 12
    },
    "parTicks": 11
  }
];
