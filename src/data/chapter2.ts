import { StageDefinition } from '../types/game';

export const CHAPTER_2_STAGES: StageDefinition[] = [
  {
    "displayId": "2-1",
    "id": "6e466d1c-6446-50a6-9f20-5713b0f001bc",
    "index": 29,
    "chapter": 2,
    "chapterTitle": "第2章 一般的なプログラミングの概念",
    "title": "2-1. 変数 let と不変性",
    "topicTag": "let 変数束縛",
    "kurumiIntro": "曲がり角のある廊下だよ！`let` を使って歩数に名前をつけておくと、あとから読みやすくて何度も使えて便利だよ。",
    "goalSummary": "変数 forward を使って曲がり角の先 (3, 4) へ進もう",
    "bookSectionTitle": "7.1 変数と不変性 — let で値に名前を付ける",
    "bookSummary": "Rustでは `let 変数名 = 値;` で変数を作ります。初期設定の変数は「不変（イミュータブル）」といって、うっかり中身を書き換えてバグになるのを防いでくれます。",
    "bookKeyCode": "let steps = 3;\nstep(steps);",
    "starterCode": "fn main() {\n    let forward = 3;\n    step(forward);\n    turn_right();\n    // 下方向にも同じ歩数進んでみよう！\n    \n}",
    "solutionCode": "fn main() {\n    let forward = 3;\n    step(forward);\n    turn_right();\n    step(forward);\n}",
    "quickChips": [
      {
        "label": "step(歩数);",
        "insert": "step(/* 変数や数 */);\n    "
      },
      {
        "label": "let 変数 = 値;",
        "insert": "let /* 名前 */ = /* 値 */;\n    "
      },
      {
        "label": "turn_right();",
        "insert": "turn_right();\n    "
      }
    ],
    "hints": [
      "いま forward には 3 が入っているよ。turn_right() のあと、もう一度 forward 歩進めばゴールだね！",
      "step(forward); を最後の一行に書き足そう。",
      "fn main() {\n    let forward = 3;\n    step(forward);\n    turn_right();\n    step(forward);\n}"
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
          "x": 2,
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
        "y": 4
      }
    },
    "victoryCondition": {
      "reachGoal": true
    },
    "parTicks": 7
  },
  {
    "displayId": "2-2",
    "id": "ee29dcf5-b86c-5d88-a78c-bcadf4f31c38",
    "index": 30,
    "chapter": 2,
    "chapterTitle": "第2章 一般的なプログラミングの概念",
    "title": "2-2. 変数を使った計算と道のり",
    "topicTag": "let / 四則演算",
    "kurumiIntro": "変数同士の足し算や引き算もできるよ！長い一本道の長さを `part_a + part_b` で計算して、一気にゴールまで進もう。",
    "goalSummary": "part_a と part_b を足した total 歩数でゴール (5, 1) へ",
    "bookSectionTitle": "7.1 変数と式 — 値を使って新しい値を作る",
    "bookSummary": "不変な変数は何度読み出しても安全です。`let total = a + b;` のように別の変数を組み合わせた計算結果を新しい変数にできます。",
    "bookKeyCode": "let total = part_a + part_b;\nstep(total);",
    "starterCode": "fn main() {\n    let part_a = 2;\n    let part_b = 3;\n    // part_a と part_b を足して total を作ろう！\n    let total = part_a;\n    step(total);\n}",
    "solutionCode": "fn main() {\n    let part_a = 2;\n    let part_b = 3;\n    let total = part_a + part_b;\n    step(total);\n}",
    "quickChips": [
      {
        "label": "part_a + part_b",
        "insert": "part_a + part_b"
      },
      {
        "label": "step(total);",
        "insert": "step(total);"
      }
    ],
    "hints": [
      "今は total が part_a (2) のままだからゴール (5, 1) に届かないよ。",
      "let total = part_a + part_b; にして 5歩進もう！",
      "let total = part_a + part_b;\nstep(total);"
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
      }
    },
    "victoryCondition": {
      "reachGoal": true
    },
    "parTicks": 5
  },
  {
    "displayId": "2-3",
    "id": "b4247893-4f8e-55a6-bf4b-bfd93240b2f4",
    "index": 31,
    "chapter": 2,
    "chapterTitle": "第2章 一般的なプログラミングの概念",
    "title": "2-3. 階段ルートを変数設計で突破",
    "topicTag": "let 実践パズル",
    "kurumiIntro": "階段みたいな通路だね！横の歩数 `h` と縦の歩数 `v` を決めれば、規則正しく階段を降りてゴールできるよ。",
    "goalSummary": "変数 h=2, v=1 を使って階段を降りゴール (4, 3) へ",
    "bookSectionTitle": "7.1 変数でプログラムを見通しよく保つ",
    "bookSummary": "同じ動きが繰り返されるときは、意味のある名前を付けた変数に長さを保存しておくと変更にも強くなります。",
    "bookKeyCode": "let h = 2;\nlet v = 1;\nstep(h); turn_right(); step(v); turn_left();",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn main() {\n    let h = 2;\n    let v = 1;\n    step(h);\n    turn_right();\n    step(v);\n    turn_left();\n    step(h);\n    turn_right();\n    step(v);\n}",
    "quickChips": [
      {
        "label": "step(h);",
        "insert": "step(h);\n    "
      },
      {
        "label": "step(v);",
        "insert": "step(v);\n    "
      },
      {
        "label": "turn_right();",
        "insert": "turn_right();\n    "
      }
    ],
    "hints": [
      "階段の幅と高さを let h = 2; let v = 1; のように変数にしてみよう。",
      "東へ h 歩 → 右折して南へ v 歩 → 左折 の動きを2回繰り返すとゴール (4, 3) に着くよ！",
      "fn main() {\n    let h = 2;\n    let v = 1;\n    step(h);\n    turn_right();\n    step(v);\n    turn_left();\n    step(h);\n    turn_right();\n    step(v);\n}"
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
          "x": 4,
          "y": 1
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
    "parTicks": 9
  },
  {
    "displayId": "2-4",
    "id": "a7b6d1f1-9c1d-5bf3-9f55-0e1f99e7092f",
    "index": 32,
    "chapter": 2,
    "chapterTitle": "第2章 一般的なプログラミングの概念",
    "stageKind": "puzzle",
    "title": "2-4. 座標差分を計算して一発移動",
    "topicTag": "bot_x/goal_x 座標計算",
    "kurumiIntro": "ゴールがどこにあるか直接数える代わりに、`goal_x() - bot_x()` と `goal_y() - bot_y()` を計算して動いてみよう！プログラムが盤面に依存しなくなるよ。",
    "goalSummary": "座標関数を使ってスイッチ経由でゴール (5, 3) へ到達",
    "bookSectionTitle": "7.2 式と計算 — 座標から移動量を決める",
    "bookSummary": "`goal_x() - bot_x()` のようにセンサー関数同士を引き算すると、現在地からゴールまでの距離を自動計算できます。",
    "bookKeyCode": "let dx = goal_x() - bot_x();\nstep(dx);",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn main() {\n    let dx = goal_x() - bot_x();\n    let dy = goal_y() - bot_y();\n    step(dx);\n    turn_right();\n    step(dy);\n}",
    "quickChips": [
      {
        "label": "let dx = goal_x() - bot_x();",
        "insert": "let dx = goal_x() - bot_x();\n    "
      },
      {
        "label": "let dy = goal_y() - bot_y();",
        "insert": "let dy = goal_y() - bot_y();\n    "
      },
      {
        "label": "step(dx);",
        "insert": "step(dx);\n    "
      }
    ],
    "hints": [
      "(0,1) から東へ dx (=5) 歩くとスイッチ (5,1) の上に乗るよ！",
      "そこから右折して南へ dy (=2) 歩くと開いたゲートを通って (5,3) へ着くよ！",
      "step(dx);\nturn_right();\nstep(dy);"
    ],
    "worldSetup": {
      "width": 6,
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
          "x": 5,
          "y": 1
        }
      ],
      "gates": [
        {
          "x": 5,
          "y": 2,
          "openTicks": 1,
          "closedTicks": 0,
          "linkedSwitch": {
            "x": 5,
            "y": 1
          }
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "requireAllSwitches": true
    },
    "parTicks": 9
  },
  {
    "displayId": "2-5",
    "id": "c039a435-cf9f-5b6d-87cf-6bc49c25ab78",
    "index": 33,
    "chapter": 2,
    "chapterTitle": "第2章 一般的なプログラミングの概念",
    "title": "2-5. 定数 const と工房の基準値",
    "topicTag": "const 定数",
    "kurumiIntro": "プログラム全体でずっと変わらない値は `const MAX_POWER: i32 = 3;` のように定数にできるよ！定数には型の指定が必須なんだ。",
    "goalSummary": "定数 UNIT_STEP を使って四角いルートを回り (0, 3) へ",
    "bookSectionTitle": "7.1 変数と定数（const）の違い",
    "bookSummary": "`const` は絶対に変わらない値に使い、大文字スネークケースで名前を付け、必ず型注釈（例：`: i32`）を書きます。",
    "bookKeyCode": "const UNIT_STEP: i32 = 2;\nstep(UNIT_STEP);",
    "starterCode": "const UNIT_STEP: i32 = 2;\n\nfn main() {\n    step(UNIT_STEP);\n    turn_right();\n    step(UNIT_STEP);\n    turn_right();\n    // 最後にもう1回 UNIT_STEP 歩進んで (0, 3) に着こう！\n    \n}",
    "solutionCode": "const UNIT_STEP: i32 = 2;\n\nfn main() {\n    step(UNIT_STEP);\n    turn_right();\n    step(UNIT_STEP);\n    turn_right();\n    step(UNIT_STEP);\n}",
    "quickChips": [
      {
        "label": "step(UNIT_STEP);",
        "insert": "step(UNIT_STEP);\n    "
      },
      {
        "label": "const 名前: i32 = 値;",
        "insert": "const /* 名前 */: i32 = /* 値 */;\n"
      }
    ],
    "hints": [
      "(0, 1) → (2, 1) → (2, 3) まで進んだよ。あと左へ2歩で (0, 3) だね！",
      "最後の行に step(UNIT_STEP); を書こう！",
      "step(UNIT_STEP);\nturn_right();\nstep(UNIT_STEP);\nturn_right();\nstep(UNIT_STEP);"
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
          "x": 3,
          "y": 2
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
      "reachGoal": true
    },
    "parTicks": 8
  },
  {
    "displayId": "2-6",
    "id": "039e4a88-0c87-5c92-8e17-3cf0b2f296ca",
    "index": 34,
    "chapter": 2,
    "chapterTitle": "第2章 一般的なプログラミングの概念",
    "title": "2-6. 可変性 mut と値の上書き",
    "topicTag": "let mut",
    "kurumiIntro": "金庫にパワーを3以上ためて進もう！Rustでは `mut` を付けない変数は書き換えられないよ。エラーが出たら `let mut` に直してみてね！",
    "goalSummary": "let mut で power を 3 にして金庫を満たしゴールへ",
    "bookSectionTitle": "7.1 可変性（mut）とシャドーイング",
    "bookSummary": "変数の値をあとから変更したいときは `let mut x = 1;` のように `mut` を付けます。同じ名前を再び `let` で宣言し直す「シャドーイング」も便利です。",
    "bookKeyCode": "let mut power = 1;\npower += 2;",
    "starterCode": "fn main() {\n    let power = 1;\n    // このままだと書き換えエラーになるよ！mutを付けてみよう\n    power += 2;\n    add_vault(power);\n    step(3);\n}",
    "solutionCode": "fn main() {\n    let mut power = 1;\n    power += 2;\n    add_vault(power);\n    step(3);\n}",
    "quickChips": [
      {
        "label": "let mut ",
        "insert": "let mut "
      },
      {
        "label": "+= 値;",
        "insert": "+= /* 値 */;"
      }
    ],
    "hints": [
      "試しにそのまま「コンパイルして実行」を押すと、Rustコンパイラが優しいエラーを教えてくれるよ！",
      "2行目の `let power = 1;` を `let mut power = 1;` に書き換えよう。",
      "let mut power = 1;\npower += 2;"
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
    "id": "fafc7783-da70-5802-b3f7-adfedcf62c9b",
    "displayId": "2-7",
    "index": 35,
    "chapter": 2,
    "chapterTitle": "第2章 一般的なプログラミングの概念",
    "stageKind": "basic",
    "title": "2-7. 金庫と経路を同時に設計",
    "topicTag": "状態管理 / 金庫 / 経路設計",
    "kurumiIntro": "必要な出力を変数で管理し、金庫を満たしてから最短経路でゴールしよう。",
    "goalSummary": "金庫⚡4を満たして (5, 1) へ到達",
    "bookSectionTitle": "3.1 変数と値による移動量の指定",
    "bookSummary": "計算結果を変数に保持し、複数の工房操作へ再利用できます。",
    "bookKeyCode": "let power = 4;\nadd_vault(power);",
    "starterCode": "fn main() {\n    add_vault(3);\n    step(5);\n}",
    "solutionCode": "fn main() {\n    let power = 4;\n    add_vault(power);\n    step(5);\n}",
    "quickChips": [
      {
        "label": "解法の式",
        "insert": "    let power = 4;\n    add_vault(power);\n    step(5);"
      }
    ],
    "hints": [
      "金庫の目標は⚡4だよ。",
      "値を変数に入れて金庫へ加えよう。",
      "fn main() {\n    let power = 4;\n    add_vault(power);\n    step(5);\n}"
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
      "vault": {
        "x": 0,
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
    "id": "18f2f9de-a13d-5eaf-b7b2-ac2d050524c4",
    "displayId": "2-8",
    "index": 36,
    "chapter": 2,
    "chapterTitle": "第2章 一般的なプログラミングの概念",
    "stageKind": "basic",
    "title": "2-8. 金庫と経路を同時に設計",
    "topicTag": "状態管理 / 金庫 / 経路設計",
    "kurumiIntro": "必要な出力を変数で管理し、金庫を満たしてから最短経路でゴールしよう。",
    "goalSummary": "金庫⚡5を満たして (6, 1) へ到達",
    "bookSectionTitle": "3.1 変数と値による移動量の指定",
    "bookSummary": "計算結果を変数に保持し、複数の工房操作へ再利用できます。",
    "bookKeyCode": "let power = 5;\nadd_vault(power);",
    "starterCode": "fn main() {\n    add_vault(4);\n    step(6);\n}",
    "solutionCode": "fn main() {\n    let power = 5;\n    add_vault(power);\n    step(6);\n}",
    "quickChips": [
      {
        "label": "解法の式",
        "insert": "    let power = 5;\n    add_vault(power);\n    step(6);"
      }
    ],
    "hints": [
      "金庫の目標は⚡5だよ。",
      "値を変数に入れて金庫へ加えよう。",
      "fn main() {\n    let power = 5;\n    add_vault(power);\n    step(6);\n}"
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
      "vault": {
        "x": 0,
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
    "id": "d4f31eb7-b8cb-5fc1-aa63-9023f9844fc4",
    "displayId": "2-9",
    "index": 37,
    "chapter": 2,
    "chapterTitle": "第2章 一般的なプログラミングの概念",
    "stageKind": "basic",
    "title": "2-9. 金庫と経路を同時に設計",
    "topicTag": "状態管理 / 金庫 / 経路設計",
    "kurumiIntro": "必要な出力を変数で管理し、金庫を満たしてから最短経路でゴールしよう。",
    "goalSummary": "金庫⚡3を満たして (3, 1) へ到達",
    "bookSectionTitle": "3.1 変数と値による移動量の指定",
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
    "id": "16ed0178-ef2e-5a7d-a8ba-2991d8158f21",
    "displayId": "2-10",
    "index": 38,
    "chapter": 2,
    "chapterTitle": "第2章 一般的なプログラミングの概念",
    "stageKind": "basic",
    "title": "2-10. 金庫と経路を同時に設計",
    "topicTag": "状態管理 / 金庫 / 経路設計",
    "kurumiIntro": "必要な出力を変数で管理し、金庫を満たしてから最短経路でゴールしよう。",
    "goalSummary": "金庫⚡3を満たして (4, 1) へ到達",
    "bookSectionTitle": "3.1 変数と値による移動量の指定",
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
    "displayId": "2-11",
    "id": "3e67a423-966a-5a30-8e4f-a44fa7ccad0e",
    "index": 39,
    "chapter": 2,
    "chapterTitle": "第2章 一般的なプログラミングの概念",
    "stageKind": "puzzle",
    "title": "2-11. mut カウンターと二重ゲート",
    "topicTag": "let mut / 算術パズル",
    "kurumiIntro": "変数 `total` を `let mut` で作って、1区間ごとに歩数を加算しながら出力しよう！ゴールでは合計歩数の宣言が求められるよ。",
    "goalSummary": "total に歩数を足して \"TOTAL: 5\" を出力し、ゴール (5, 1) へ",
    "bookSectionTitle": "7.1 変数と可変性 — カウンターの更新",
    "bookSummary": "可変変数 `let mut count = 0;` を使うと、処理を進めながら `count += 2;` のように累計を記録できます。",
    "bookKeyCode": "let mut total = 0;\ntotal += 2;",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn main() {\n    let mut total = 0;\n    step(2);\n    total += 2;\n    wait_tick(1);\n    step(3);\n    total += 3;\n    println!(\"TOTAL: {}\", total);\n}",
    "quickChips": [
      {
        "label": "total += 3;",
        "insert": "total += 3;\n    "
      },
      {
        "label": "wait_tick(1);",
        "insert": "wait_tick(1);\n    "
      },
      {
        "label": "println!(\"TOTAL: {}\", total);",
        "insert": "println!(\"TOTAL: {}\", total);\n    "
      }
    ],
    "hints": [
      "x=3 に周期ゲートがあるよ。最初の2歩のあと wait_tick(1) で開くのを待とう！",
      "そのあと step(3) で合計5歩になり、total += 3; で 5 になるよ。",
      "step(2); total += 2; wait_tick(1); step(3); total += 3; println!(\"TOTAL: {}\", total);"
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
      "gates": [
        {
          "x": 3,
          "y": 1,
          "openTicks": 2,
          "closedTicks": 2,
          "initialOffset": 1
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "stdoutIncludes": [
        "TOTAL: 5"
      ]
    },
    "parTicks": 8
  },
  {
    "displayId": "2-12",
    "id": "f7b3e4bb-0166-575d-a501-a676dfc374f0",
    "index": 40,
    "chapter": 2,
    "chapterTitle": "第2章 一般的なプログラミングの概念",
    "title": "2-12. 段階チャージと方向転換パズル",
    "topicTag": "let mut 実践パズル",
    "kurumiIntro": "道を進みながらパワーを少しずつ調整しよう！最初は2、曲がる前に+3して合計5パワーを金庫に預けてからゴールへ進んでね。",
    "goalSummary": "mut 変数で合計⚡5を預け、L字ゴール (2, 3) へ",
    "bookSectionTitle": "7.1 不変と可変の使い分け実践",
    "bookSummary": "変更が必要なカウンタや累積値にだけ `mut` を付け、歩数など変えない値は通常の `let` にすることで意図が読みやすくなります。",
    "bookKeyCode": "let mut energy = 2;\nadd_vault(energy);\nenergy += 1;",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn main() {\n    let mut energy = 2;\n    add_vault(energy);\n    step(2);\n    turn_right();\n    energy += 1;\n    add_vault(energy);\n    step(2);\n}",
    "quickChips": [
      {
        "label": "energy += 1;",
        "insert": "energy += 1;\n    "
      },
      {
        "label": "add_vault(energy);",
        "insert": "add_vault(energy);\n    "
      }
    ],
    "hints": [
      "let mut energy = 2; で始めて、最初に add_vault(energy); と step(2); turn_right(); を実行しよう。",
      "角で energy += 1; してからもう1回 add_vault(energy); すると合計 2 + 3 = 5 になるよ！あとは step(2); でゴールへ！",
      "fn main() {\n    let mut energy = 2;\n    add_vault(energy);\n    step(2);\n    turn_right();\n    energy += 1;\n    add_vault(energy);\n    step(2);\n}"
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
    "parTicks": 7
  },
  {
    "displayId": "2-13",
    "id": "377498db-d9ab-5616-bbb4-224392d3567f",
    "index": 41,
    "chapter": 2,
    "chapterTitle": "第2章 一般的なプログラミングの概念",
    "title": "2-13. シャドーイングで変身させる",
    "topicTag": "シャドーイング let x = ...",
    "kurumiIntro": "同じ名前の変数をもう一度 `let` で作り直すのを「シャドーイング」って呼ぶんだ！`mut` を付けなくても、新しい値に生まれ変わらせられるよ。",
    "goalSummary": "シャドーイングで x を 2倍し、金庫⚡4とゴール (4, 1) を達成",
    "bookSectionTitle": "7.1 シャドーイング — let を重ねて変換する",
    "bookSummary": "`let x = 2; let x = x * 2;` のように書くと、元の `x` を隠して新しい `x` を作ります。変換が終わった後はまた不変になるのがメリットです。",
    "bookKeyCode": "let x = 2;\nlet x = x * 2;",
    "starterCode": "fn main() {\n    let x = 2;\n    // ここでシャドーイングして x を 2倍（4）にしよう！\n    let x = x;\n    add_vault(x);\n    step(x);\n}",
    "solutionCode": "fn main() {\n    let x = 2;\n    let x = x * 2;\n    add_vault(x);\n    step(x);\n}",
    "quickChips": [
      {
        "label": "let x = x * 2;",
        "insert": "let x = x * 2;"
      },
      {
        "label": "add_vault(x);",
        "insert": "add_vault(x);"
      }
    ],
    "hints": [
      "今は let x = x; だから値が 2 のままだよ。",
      "let x = x * 2; に変えると 4 になって金庫もゴールも達成！",
      "let x = 2;\nlet x = x * 2;"
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
    "displayId": "2-14",
    "id": "b11c3a34-ea38-54b2-8739-ab0bb02b4dfe",
    "index": 42,
    "chapter": 2,
    "chapterTitle": "第2章 一般的なプログラミングの概念",
    "title": "2-14. タプルの分配束縛 let (x, y)",
    "topicTag": "タプル分解 (dx, dy)",
    "kurumiIntro": "タプルは `.0` で取り出すだけじゃなく、`let (dx, dy) = route;` のように一度に変数へ分解することもできるよ！",
    "goalSummary": "タプルを (dx, dy) に分解して L字ゴール (3, 3) へ",
    "bookSectionTitle": "7.2 複合型 — タプルの分配束縛",
    "bookSummary": "`let (x, y) = (3, 2);` と書くと、タプルの1番目が `x` に、2番目が `y` にそのまま入ります。",
    "bookKeyCode": "let (dx, dy) = (3, 2);\nstep(dx); turn_right(); step(dy);",
    "starterCode": "fn main() {\n    let route = (3, 2);\n    // (dx, dy) に取り出して、dx 歩進み、右を向いて、dy 歩進もう！\n    let (dx, dy) = route;\n    step(dx);\n    \n}",
    "solutionCode": "fn main() {\n    let route = (3, 2);\n    let (dx, dy) = route;\n    step(dx);\n    turn_right();\n    step(dy);\n}",
    "quickChips": [
      {
        "label": "turn_right();",
        "insert": "turn_right();\n    "
      },
      {
        "label": "step(dy);",
        "insert": "step(dy);\n    "
      }
    ],
    "hints": [
      "dx は 3、dy は 2 だよ。まず東へ3歩進んだね！",
      "turn_right(); と step(dy); を書き足そう。",
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
      }
    },
    "victoryCondition": {
      "reachGoal": true
    },
    "parTicks": 6
  },
  {
    "displayId": "2-15",
    "id": "ad2d8a8b-f9c5-5e7d-8962-03fdb5fc2577",
    "index": 43,
    "chapter": 2,
    "chapterTitle": "第2章 一般的なプログラミングの概念",
    "stageKind": "puzzle",
    "title": "2-15. タプル分配で3段ルート",
    "topicTag": "タプル分割代入 / パズル",
    "kurumiIntro": "コンベアとスイッチの3区間を、タプル `(d1, d2, d3)` にまとめてから順番に取り出して進んでみよう！",
    "goalSummary": "タプルから歩数を取り出し、スイッチ経由でゴール (6, 3) へ",
    "bookSectionTitle": "7.2 複合型 — タプルの分配（Destructuring）",
    "bookSummary": "`let (a, b, c) = (2, 2, 3);` と書くと、複数の数値を1つのまとまりからスッキリ取り出せます。",
    "bookKeyCode": "let (a, b, c) = (2, 2, 3);",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn main() {\n    let plan = (2, 2, 3);\n    let (a, b, c) = plan;\n    step(a);\n    turn_right();\n    step(b);\n    turn_left();\n    step(c);\n}",
    "quickChips": [
      {
        "label": "let (a, b, c) = plan;",
        "insert": "let (a, b, c) = plan;\n    "
      },
      {
        "label": "step(a);",
        "insert": "step(a);\n    "
      }
    ],
    "hints": [
      "let plan = (2, 2, 3); を let (a, b, c) = plan; で取り出そう！東へ2歩(a)→右折して南へ2歩(b)でスイッチ(2,2)を通過できるよ。",
      "最後に左折して東へ3歩(c)進むと、(3,3)コンベアの押し出しと合わせて (6,3) に着くよ！",
      "fn main() {\n    let plan = (2, 2, 3);\n    let (a, b, c) = plan;\n    step(a);\n    turn_right();\n    step(b);\n    turn_left();\n    step(c);\n}"
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
          "x": 6,
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
        "y": 1,
        "dir": 0
      },
      "goal": {
        "x": 6,
        "y": 3
      },
      "switches": [
        {
          "x": 2,
          "y": 2
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
          "x": 5,
          "y": 3,
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
      "maxTicks": 11
    },
    "parTicks": 10
  },
  {
    "displayId": "2-16",
    "id": "8ad7a0c6-1726-556b-ba4d-308098dc63b2",
    "index": 44,
    "chapter": 2,
    "chapterTitle": "第2章 一般的なプログラミングの概念",
    "title": "2-16. 配列 [T; N] と添字アクセス",
    "topicTag": "配列 [1, 2, 3]",
    "kurumiIntro": "同じ型のデータを並べるときは配列 `[1, 2, 3]` が便利！配列の番号（添字）は `0` からスタートするから気をつけてね。",
    "goalSummary": "配列 hops の要素を取り出して合計4歩進みゴールへ",
    "bookSectionTitle": "7.2 複合型 — 配列と 0始まりの添字",
    "bookSummary": "配列は固定長で、同じ型の要素を並べます。`arr[0]` が1番目、`arr[1]` が2番目、`arr[2]` が3番目の要素です。",
    "bookKeyCode": "let hops = [1, 2, 1];\nstep(hops[0] + hops[1] + hops[2]);",
    "starterCode": "fn main() {\n    let hops = [1, 3, 2];\n    // hops[0] + hops[1] なら 1 + 3 = 4 歩になるよ！\n    step(hops[0]);\n}",
    "solutionCode": "fn main() {\n    let hops = [1, 3, 2];\n    step(hops[0] + hops[1]);\n}",
    "quickChips": [
      {
        "label": "hops[1]",
        "insert": "hops[1]"
      },
      {
        "label": "hops[0] + hops[1]",
        "insert": "hops[0] + hops[1]"
      }
    ],
    "hints": [
      "hops[0] は 1、hops[1] は 3 だよ。足すと 4 になるね！",
      "step(hops[0] + hops[1]); に書き換えよう。",
      "step(hops[0] + hops[1]);"
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
    "displayId": "2-17",
    "id": "ad8723b7-9cb3-5a23-a8e0-f0ddc061b223",
    "index": 45,
    "chapter": 2,
    "chapterTitle": "第2章 一般的なプログラミングの概念",
    "title": "2-17. 関数 fn と戻り値",
    "topicTag": "fn / 引数 / 戻り値",
    "kurumiIntro": "よく使う動きは自分だけの関数 `fn` にまとめよう！最後の行にセミコロン `;` を付けないと「戻り値（式）」になるのがRustのポイントだよ。",
    "goalSummary": "関数 calc_steps(n) が 4 を返すようにしてゴールへ",
    "bookSectionTitle": "7.3 関数 — パラメータと戻り値のある式",
    "bookSummary": "関数は `fn 名前(引数: 型) -> 戻り値型 { ... }` で定義します。ブロックの最後の行に `;` を付けずに書くと、その値が自動的に返り値になります。",
    "bookKeyCode": "fn double(x: i32) -> i32 {\n    x * 2\n}",
    "starterCode": "fn calc_steps(n: i32) -> i32 {\n    // n を 2倍にして返してみよう（最後に ; を付けない！）\n    n\n}\n\nfn main() {\n    let dist = calc_steps(2);\n    step(dist);\n}",
    "solutionCode": "fn calc_steps(n: i32) -> i32 {\n    n * 2\n}\n\nfn main() {\n    let dist = calc_steps(2);\n    step(dist);\n}",
    "quickChips": [
      {
        "label": "n * 2",
        "insert": "n * 2"
      },
      {
        "label": "fn 名前(x: i32) -> i32",
        "insert": "fn /* 名前 */(x: i32) -> i32 {\n    /* 戻り値 */\n}"
      }
    ],
    "hints": [
      "今は calc_steps(2) が 2 をそのまま返しているから、ゴールまで2歩足りないね。",
      "calc_steps の中の `n` を `n * 2` に書き換えよう（セミコロンは付けないでね！）。",
      "fn calc_steps(n: i32) -> i32 {\n    n * 2\n}"
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
    "displayId": "2-18",
    "id": "f3d9fad2-67fa-54f9-9365-a640aa17c8d3",
    "index": 46,
    "chapter": 2,
    "chapterTitle": "第2章 一般的なプログラミングの概念",
    "stageKind": "puzzle",
    "title": "2-18. 戻り値付き関数で距離を計算",
    "topicTag": "関数戻り値 / -> i32",
    "kurumiIntro": "セミコロンを付けない「式」で値を返す関数 `calc_dash(n: i32) -> i32` を完成させて、2つのコンベアの間を正確に飛び越えよう！",
    "goalSummary": "calc_dash を使って \"DASH: 3\" を出力し、ゴール (5, 1) へ到達",
    "bookSectionTitle": "7.3 関数の戻り値 — 式と文の違い",
    "bookSummary": "Rustでは関数本体の最後に `;` を付けずに書いた式がそのまま戻り値になります。",
    "bookKeyCode": "fn calc_dash(a: i32) -> i32 {\n    a * 2 - 1\n}",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn calc_dash(a: i32) -> i32 {\n    a * 2 - 1\n}\n\nfn main() {\n    let d = calc_dash(2);\n    println!(\"DASH: {}\", d);\n    step(d);\n}",
    "quickChips": [
      {
        "label": "a * 2 - 1",
        "insert": "a * 2 - 1"
      }
    ],
    "hints": [
      "d が 3 になれば (1,1)と(3,1)のコンベアも使ってちょうど (5,1) に到達するよ！",
      "fn calc_dash(a: i32) -> i32 { a * 2 - 1 } を定義して、main から let d = calc_dash(2); println!(\"DASH: {}\", d); step(d); を実行しよう（末尾セミコロンなし）。",
      "fn calc_dash(a: i32) -> i32 {\n    a * 2 - 1\n}\n\nfn main() {\n    let d = calc_dash(2);\n    println!(\"DASH: {}\", d);\n    step(d);\n}"
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
      "stdoutIncludes": [
        "DASH: 3"
      ],
      "maxTicks": 5
    },
    "parTicks": 5
  },
  {
    "displayId": "2-19",
    "id": "0a3c9f77-c645-5cd5-af0e-bbc385222479",
    "index": 47,
    "chapter": 2,
    "chapterTitle": "第2章 一般的なプログラミングの概念",
    "title": "2-19. 複数引数の関数で2辺を案内",
    "topicTag": "複数パラメータの関数",
    "kurumiIntro": "引数はカンマで区切っていくつでも渡せるよ！`go_corner(x, y)` 関数に「横の歩数」と「縦の歩数」を渡してL字通路を歩こう。",
    "goalSummary": "go_corner(3, 2) を完成させてゴール (3, 3) へ",
    "bookSectionTitle": "7.3 複数のパラメータを受け取る関数",
    "bookSummary": "関数の引数は `fn name(a: i32, b: i32)` のようにそれぞれ型を明記します。処理を関数にまとめると `main` がとても読みやすくなります。",
    "bookKeyCode": "fn go_corner(x: i32, y: i32) {\n    step(x); turn_right(); step(y);\n}",
    "starterCode": "fn go_corner(x: i32, y: i32) {\n    step(x);\n    turn_right();\n    // あと y 歩進んでね！\n    \n}\n\nfn main() {\n    go_corner(3, 2);\n}",
    "solutionCode": "fn go_corner(x: i32, y: i32) {\n    step(x);\n    turn_right();\n    step(y);\n}\n\nfn main() {\n    go_corner(3, 2);\n}",
    "quickChips": [
      {
        "label": "step(y);",
        "insert": "step(y);\n    "
      },
      {
        "label": "turn_right();",
        "insert": "turn_right();\n    "
      }
    ],
    "hints": [
      "go_corner の中で x 歩進んで右を向いたあと、まだ縦（y）に進んでいないよ！",
      "go_corner の末尾に step(y); を書き足そう。",
      "fn go_corner(x: i32, y: i32) {\n    step(x);\n    turn_right();\n    step(y);\n}"
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
    "displayId": "2-20",
    "id": "041cf963-f0ba-508c-92a4-f44dac3db59d",
    "index": 48,
    "chapter": 2,
    "chapterTitle": "第2章 一般的なプログラミングの概念",
    "title": "2-20. 関数を何回も呼び出すジグザグ",
    "topicTag": "関数の再利用",
    "kurumiIntro": "同じジグザグの段差が2回ある通路だよ！`stair_step()` 関数を作って2回呼び出せば、コードが短くスッキリするね。",
    "goalSummary": "stair_step() を2回呼び出してゴール (4, 3) へ",
    "bookSectionTitle": "7.3 関数の再利用性",
    "bookSummary": "何度も登場する一連の手順を関数に切り出しておけば、1回の呼び出しで同じ動きを正確に繰り返せます。",
    "bookKeyCode": "stair_step();\nstair_step();",
    "starterCode": "fn stair_step() {\n    step(2);\n    turn_right();\n    step(1);\n    turn_left();\n}\n\nfn main() {\n    stair_step();\n    // もう1段進もう！\n    \n}",
    "solutionCode": "fn stair_step() {\n    step(2);\n    turn_right();\n    step(1);\n    turn_left();\n}\n\nfn main() {\n    stair_step();\n    stair_step();\n}",
    "quickChips": [
      {
        "label": "stair_step();",
        "insert": "stair_step();\n    "
      }
    ],
    "hints": [
      "1回の stair_step() で 右に2・下に1 進んでまた東向きに戻るよ。",
      "main の中に stair_step(); をもう1行追加しよう！",
      "stair_step();\nstair_step();"
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
          "x": 4,
          "y": 1
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
    "parTicks": 10
  },
  {
    "displayId": "2-21",
    "id": "f734e8a9-cba0-5a6b-814c-dc38fc85ee09",
    "index": 49,
    "chapter": 2,
    "chapterTitle": "第2章 一般的なプログラミングの概念",
    "title": "2-21. 関数から関数を呼ぶ実践",
    "topicTag": "関数合成 実践",
    "kurumiIntro": "`charge_and_go(n)` 関数の中から、計算用の関数 `double(n)` を呼んでみよう！計算がうまくできれば金庫もゴールも一発クリアだよ。",
    "goalSummary": "double(2) を返すように直し、金庫⚡4＋ゴール (4, 1) へ",
    "bookSectionTitle": "7.3 関数同士の組み合わせ",
    "bookSummary": "小さな計算関数とロボットの行動関数を分けることで、複雑なプログラムも読みやすくテストしやすくなります。",
    "bookKeyCode": "fn double(n: i32) -> i32 { n * 2 }",
    "starterCode": "fn double(n: i32) -> i32 {\n    // n * 2 を返そう！\n    n + 1\n}\n\nfn charge_and_go(base: i32) {\n    let v = double(base);\n    add_vault(v);\n    step(v);\n}\n\nfn main() {\n    charge_and_go(2);\n}",
    "solutionCode": "fn double(n: i32) -> i32 {\n    n * 2\n}\n\nfn charge_and_go(base: i32) {\n    let v = double(base);\n    add_vault(v);\n    step(v);\n}\n\nfn main() {\n    charge_and_go(2);\n}",
    "quickChips": [
      {
        "label": "n * 2",
        "insert": "n * 2"
      }
    ],
    "hints": [
      "今は double(2) が 2 + 1 = 3 を返しているから、金庫⚡4 に 1 足りないよ！",
      "double の中身を `n * 2` に書き換えよう。",
      "fn double(n: i32) -> i32 {\n    n * 2\n}"
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
    "id": "3dd92b1f-880f-5afb-b8a6-e3881793cf25",
    "displayId": "2-22",
    "index": 50,
    "chapter": 2,
    "chapterTitle": "第2章 一般的なプログラミングの概念",
    "stageKind": "puzzle",
    "title": "2-22. 関数へ経路を分割",
    "topicTag": "関数 / パラメーター",
    "kurumiIntro": "移動処理を関数にまとめ、渡された距離を正しく実行しよう。",
    "goalSummary": "travel 関数で (5, 1) へ到達",
    "bookSectionTitle": "3.3 関数で手順をまとめる",
    "bookSummary": "引数で操作量を受け取る関数を作ると、手順を再利用できます。",
    "bookKeyCode": "fn travel(n: i32) { step(n); }",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn travel(n: i32) {\n    step(n);\n}\nfn main() { travel(5); }",
    "quickChips": [
      {
        "label": "解法の式",
        "insert": "fn travel(n: i32) {\n    step(n);\n}\nfn main() { travel(5); "
      }
    ],
    "hints": [
      "travel の中で n を使っているよ。",
      "渡された距離と同じ数だけ進もう。",
      "fn travel(n: i32) {\n    step(n);\n}\nfn main() { travel(5); }"
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
    "id": "330da330-a4f6-51bc-936f-91f07c070fc4",
    "displayId": "2-23",
    "index": 51,
    "chapter": 2,
    "chapterTitle": "第2章 一般的なプログラミングの概念",
    "stageKind": "puzzle",
    "title": "2-23. 関数へ経路を分割",
    "topicTag": "関数 / パラメーター",
    "kurumiIntro": "移動処理を関数にまとめ、渡された距離を正しく実行しよう。",
    "goalSummary": "travel 関数で (6, 1) へ到達",
    "bookSectionTitle": "3.3 関数で手順をまとめる",
    "bookSummary": "引数で操作量を受け取る関数を作ると、手順を再利用できます。",
    "bookKeyCode": "fn travel(n: i32) { step(n); }",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn travel(n: i32) {\n    step(n);\n}\nfn main() { travel(6); }",
    "quickChips": [
      {
        "label": "解法の式",
        "insert": "fn travel(n: i32) {\n    step(n);\n}\nfn main() { travel(6); "
      }
    ],
    "hints": [
      "travel の中で n を使っているよ。",
      "渡された距離と同じ数だけ進もう。",
      "fn travel(n: i32) {\n    step(n);\n}\nfn main() { travel(6); }"
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
    "id": "3b75de6b-d0a6-5d91-a833-71112fe89425",
    "displayId": "2-24",
    "index": 52,
    "chapter": 2,
    "chapterTitle": "第2章 一般的なプログラミングの概念",
    "stageKind": "puzzle",
    "title": "2-24. 関数へ経路を分割",
    "topicTag": "関数 / パラメーター",
    "kurumiIntro": "移動処理を関数にまとめ、渡された距離を正しく実行しよう。",
    "goalSummary": "travel 関数で (3, 1) へ到達",
    "bookSectionTitle": "3.3 関数で手順をまとめる",
    "bookSummary": "引数で操作量を受け取る関数を作ると、手順を再利用できます。",
    "bookKeyCode": "fn travel(n: i32) { step(n); }",
    "starterCode": "fn main() {\n    \n}",
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
    "id": "fd54d254-8058-5ea2-b219-edc362ccc7f3",
    "displayId": "2-25",
    "index": 53,
    "chapter": 2,
    "chapterTitle": "第2章 一般的なプログラミングの概念",
    "stageKind": "puzzle",
    "title": "2-25. 関数へ経路を分割",
    "topicTag": "関数 / パラメーター",
    "kurumiIntro": "移動処理を関数にまとめ、渡された距離を正しく実行しよう。",
    "goalSummary": "travel 関数で (4, 1) へ到達",
    "bookSectionTitle": "3.3 関数で手順をまとめる",
    "bookSummary": "引数で操作量を受け取る関数を作ると、手順を再利用できます。",
    "bookKeyCode": "fn travel(n: i32) { step(n); }",
    "starterCode": "fn main() {\n    \n}",
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
    "displayId": "2-26",
    "id": "e41c8968-0b68-5dca-a17c-0cdd5b6ac63d",
    "index": 54,
    "chapter": 2,
    "chapterTitle": "第2章 一般的なプログラミングの概念",
    "title": "2-26. 条件分岐 if / else と蒸気ゲート",
    "topicTag": "if / else",
    "kurumiIntro": "目の前の蒸気ゲートは最初は閉まっているよ！`is_gate_open()` で開いているか確認して、閉じていたら `wait_tick(1);` で待ってから進もう！",
    "goalSummary": "if / else でゲートの開閉を見て安全にゴール (3, 1) へ",
    "bookSectionTitle": "7.5 制御フロー — if 式",
    "bookSummary": "`if 条件 { ... } else { ... }` で状況に応じた分岐ができます。Rustの `if` は条件を丸カッコ `()` で囲む必要がなく、スッキリ書けます。",
    "bookKeyCode": "if is_gate_open() {\n    step();\n} else {\n    wait_tick(1);\n}",
    "starterCode": "fn main() {\n    // 最初はゲートが閉まっているよ！\n    if is_gate_open() {\n        step();\n    } else {\n        // ここで1ティック待ってから進もう\n        \n    }\n    step(2);\n}",
    "solutionCode": "fn main() {\n    if is_gate_open() {\n        step();\n    } else {\n        wait_tick(1);\n        step();\n    }\n    step(2);\n}",
    "quickChips": [
      {
        "label": "wait_tick(1);",
        "insert": "wait_tick(1);\n        "
      },
      {
        "label": "step();",
        "insert": "step();\n        "
      }
    ],
    "hints": [
      "Tick 1ではゲートが閉じていて、Tick 2になると開くよ！",
      "else { ... } の中に wait_tick(1); と step(); を入れよう。",
      "else {\n    wait_tick(1);\n    step();\n}"
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
      "gates": [
        {
          "x": 1,
          "y": 1,
          "openTicks": 2,
          "closedTicks": 2,
          "initialOffset": 2
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true
    },
    "parTicks": 4
  },
  {
    "displayId": "2-27",
    "id": "d1c509c8-ae38-50bc-a8fa-ab48455d6760",
    "index": 55,
    "chapter": 2,
    "chapterTitle": "第2章 一般的なプログラミングの概念",
    "title": "2-27. データ型（i32, bool, タプル）",
    "topicTag": "i32 / bool / タプル",
    "kurumiIntro": "整数 `i32`、真偽値 `bool`（true/false）、複数の値をまとめるタプル `(a, b)` を使いこなしてスイッチを押しながら進もう！",
    "goalSummary": "bool と タプルの値を使ってゴール (4, 1) へ進もう",
    "bookSectionTitle": "7.2 データ型 — スカラー型と複合型",
    "bookSummary": "整数は `i32`、はい/いいえは `bool`、異なる型の組み合わせはタプル `(i32, bool)`、同じ型の並びは配列 `[1, 2, 3]` で表します。タプルは `.0` や `.1` で中身を取り出せます。",
    "bookKeyCode": "let active: bool = true;\nlet moves: (i32, i32) = (2, 2);",
    "starterCode": "fn main() {\n    let active: bool = false;\n    let moves: (i32, i32) = (2, 2);\n    if active {\n        step(moves.0 + moves.1);\n    }\n}",
    "solutionCode": "fn main() {\n    let active: bool = true;\n    let moves: (i32, i32) = (2, 2);\n    if active {\n        step(moves.0 + moves.1);\n    }\n}",
    "quickChips": [
      {
        "label": "true",
        "insert": "true"
      },
      {
        "label": "タプル.0",
        "insert": "/* タプル */.0"
      },
      {
        "label": "タプル.1",
        "insert": "/* タプル */.1"
      }
    ],
    "hints": [
      "active が false だから if active の中身が動いていないみたい！",
      "let active: bool = true; に変えてみよう。",
      "let active: bool = true;"
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
    "displayId": "2-28",
    "id": "8adb3fdd-da52-5b73-a97b-ccffec78fe4f",
    "index": 56,
    "chapter": 2,
    "chapterTitle": "第2章 一般的なプログラミングの概念",
    "title": "2-28. else if で多段階分岐",
    "topicTag": "else if 条件分岐",
    "kurumiIntro": "モードの数字に合わせて進む距離を変えよう！`if` と `else if` と `else` をつなげると、3通り以上の分岐もスッキリ書けるよ。",
    "goalSummary": "mode == 2 に合う分岐で 4歩進みゴール (4, 1) へ",
    "bookSectionTitle": "7.5 複数の条件を扱う else if",
    "bookSummary": "上から順に条件が判定され、最初に `true` になったブロックだけが実行されます。どれも合わなければ最後の `else` が動きます。",
    "bookKeyCode": "if m == 1 { step(2); } else if m == 2 { step(4); } else { step(1); }",
    "starterCode": "fn main() {\n    let mode = 2;\n    if mode == 1 {\n        step(2);\n    } else if mode == 99 {\n        // mode == 2 のとき 4歩進むように条件を直そう！\n        step(4);\n    } else {\n        step(1);\n    }\n}",
    "solutionCode": "fn main() {\n    let mode = 2;\n    if mode == 1 {\n        step(2);\n    } else if mode == 2 {\n        step(4);\n    } else {\n        step(1);\n    }\n}",
    "quickChips": [
      {
        "label": "mode == 2",
        "insert": "mode == 2"
      }
    ],
    "hints": [
      "mode は 2 なのに、今は `else if mode == 99` になっているから else の 1歩しか進まないよ。",
      "else if mode == 2 に直してみよう！",
      "} else if mode == 2 {"
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
    "displayId": "2-29",
    "id": "a90971e7-5050-5236-ba1f-7abfe3891ba7",
    "index": 57,
    "chapter": 2,
    "chapterTitle": "第2章 一般的なプログラミングの概念",
    "title": "2-29. let文の中で if 式を使う",
    "topicTag": "let x = if cond { ... }",
    "kurumiIntro": "Rustの `if` は値を返す「式」なんだ！`let steps = if turbo { 4 } else { 2 };` みたいに、変数の中身を直接決められるよ！",
    "goalSummary": "if式で steps を 4 にして、金庫⚡4＋ゴール (4, 1) へ",
    "bookSectionTitle": "7.5 let文内で if を使う",
    "bookSummary": "`if` は式なので、両方のブロックから同じ型の値を返せば `let x = if ... { A } else { B };` とスマートに書けます。",
    "bookKeyCode": "let steps = if turbo { 4 } else { 2 };",
    "starterCode": "fn main() {\n    let turbo = true;\n    let steps = if turbo { 2 } else { 1 };\n    // turbo が true なら 4 を返すように直そう！\n    add_vault(steps);\n    step(steps);\n}",
    "solutionCode": "fn main() {\n    let turbo = true;\n    let steps = if turbo { 4 } else { 1 };\n    add_vault(steps);\n    step(steps);\n}",
    "quickChips": [
      {
        "label": "if turbo { 4 } else { 1 }",
        "insert": "if turbo { 4 } else { 1 }"
      }
    ],
    "hints": [
      "let steps = if turbo { 2 } ... の 2 が小さいね。",
      "{ 2 } を { 4 } に変えれば、金庫にも4入って4歩進めるよ！",
      "let steps = if turbo { 4 } else { 1 };"
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
    "displayId": "2-30",
    "id": "b2e1db3e-422b-51f0-9885-3396944aec83",
    "index": 58,
    "chapter": 2,
    "chapterTitle": "第2章 一般的なプログラミングの概念",
    "stageKind": "puzzle",
    "title": "2-30. if 式で移動方向を値として返す",
    "topicTag": "if式 (式としてのif)",
    "kurumiIntro": "Rustの `if` は値を返せる「式」なんだ！`let step_len = if ... { 2 } else { 4 };` のように条件で移動距離を決めて、コンベアに乗って最短ゴールしよう！",
    "goalSummary": "if 式で歩数を決めて、スイッチ経由で 10ティック以内にゴール (5, 3) へ",
    "bookSectionTitle": "7.5 制御フロー — let 文の中で if 式を使う",
    "bookSummary": "Rust では `let x = if cond { 5 } else { 6 };` のように書けます。両方のブロックの末尾にセミコロンを付けず同じ型を返すのが決まりです。",
    "bookKeyCode": "let n = if is_on_switch() { 3 } else { 1 };",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn main() {\n    step(2);\n    let next_steps = if is_on_switch() {\n        2\n    } else {\n        1\n    };\n    turn_right();\n    step(next_steps);\n    turn_left();\n    step(3);\n}",
    "quickChips": [
      {
        "label": "if is_on_switch() { 2 } else { 1 }",
        "insert": "if is_on_switch() {\n        2\n    } else {\n        1\n    }"
      },
      {
        "label": "turn_left(); step(3);",
        "insert": "turn_left();\n    step(3);"
      }
    ],
    "hints": [
      "step(2) するとスイッチ (2,1) の上に乗るよ！そこからは南に2歩で (2,3) へ降りよう。",
      "let next_steps = if is_on_switch() { 2 } else { 1 }; で歩数を決め、turn_right(); step(next_steps); turn_left(); step(3); でゴール (5,3) へ！",
      "fn main() {\n    step(2);\n    let next_steps = if is_on_switch() { 2 } else { 1 };\n    turn_right();\n    step(next_steps);\n    turn_left();\n    step(3);\n}"
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
          "closedTicks": 0,
          "linkedSwitch": {
            "x": 2,
            "y": 1
          }
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "requireAllSwitches": true,
      "maxTicks": 10
    },
    "parTicks": 10
  },
  {
    "displayId": "2-31",
    "id": "f66e8848-d720-552b-905d-bc7647dd47fa",
    "index": 59,
    "chapter": 2,
    "chapterTitle": "第2章 一般的なプログラミングの概念",
    "title": "2-31. スイッチとゲートの条件分岐パズル",
    "topicTag": "if / スイッチ＋ゲート実践",
    "kurumiIntro": "下にスイッチ (1, 2)、右にそのスイッチで開く連動ゲート (2, 1) があるよ！先にスイッチを踏んで戻るか、`if` で安全チェックして抜けよう。",
    "goalSummary": "スイッチ (1, 2) を踏んでから連動ゲート (2, 1) を通り (4, 1) へ",
    "bookSectionTitle": "7.5 状況確認と制御フローの実践",
    "bookSummary": "盤面の仕掛け（スイッチ・ゲート）の状態に応じて `if` で動作を切り替えることで、安全にルートを開拓できます。",
    "bookKeyCode": "if !is_gate_open() {\n    turn_right(); step(1); ...\n}",
    "starterCode": "fn main() {\n    step(1);\n    if !is_gate_open() {\n        // (1, 1) から下に1歩でスイッチ(1, 2)を踏んで、上に戻って右を向こう！\n        turn_right();\n        step(1);\n        turn_right();\n        turn_right();\n        step(1);\n        turn_right();\n    }\n    // あとはゲートを通ってゴール (4, 1) まで進もう！\n    \n}",
    "solutionCode": "fn main() {\n    step(1);\n    if !is_gate_open() {\n        turn_right();\n        step(1);\n        turn_right();\n        turn_right();\n        step(1);\n        turn_right();\n    }\n    step(3);\n}",
    "quickChips": [
      {
        "label": "step(3);",
        "insert": "step(3);"
      }
    ],
    "hints": [
      "if の中でスイッチを踏んで (1, 1) に戻り、東向き（右向き）になっているよ！",
      "最後の行に step(3); を追加すれば (4, 1) にゴール！",
      "step(3);"
    ],
    "worldSetup": {
      "width": 6,
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
          "x": 5,
          "y": 0
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
          "y": 2
        }
      ],
      "gates": [
        {
          "x": 2,
          "y": 1,
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
      "reachGoal": true
    },
    "parTicks": 10
  },
  {
    "displayId": "2-32",
    "id": "cd9524fb-a914-5916-8651-83ca5232a3c1",
    "index": 60,
    "chapter": 2,
    "chapterTitle": "第2章 一般的なプログラミングの概念",
    "stageKind": "puzzle",
    "title": "2-32. 引数付き関数 `turn_and_walk(right, steps)`",
    "topicTag": "関数引数 / bool分岐",
    "kurumiIntro": "同じ階段パターンを4回登り降りするコースだよ！`turn_and_walk(go_right: bool, steps: i32)` のように引数で曲がる向きと歩数を渡す関数を作ろう！",
    "goalSummary": "引数付き関数を使って階段コースのゴール (4, 5) へ到着しよう",
    "bookSectionTitle": "7.3 関数の引数 — 複数パラメータと型注釈",
    "bookSummary": "Rustの関数は `fn move_leg(right: bool, n: i32)` のようにすべての引数に型を指定します。同じ形の移動パターンをスマートに表現できます。",
    "bookKeyCode": "fn turn_and_walk(right: bool, n: i32) {\n    if right { turn_right(); } else { turn_left(); }\n    step(n);\n}",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn turn_and_walk(right: bool, n: i32) {\n    if right {\n        turn_right();\n    } else {\n        turn_left();\n    }\n    step(n);\n}\n\nfn main() {\n    step(1);\n    turn_and_walk(true, 2);\n    turn_and_walk(false, 2);\n    turn_and_walk(true, 2);\n    turn_and_walk(false, 1);\n}",
    "quickChips": [
      {
        "label": "turn_and_walk(true, 2);",
        "insert": "turn_and_walk(true, 2);\n    "
      },
      {
        "label": "turn_and_walk(false, 2);",
        "insert": "turn_and_walk(false, 2);\n    "
      }
    ],
    "hints": [
      "(0,1)→(1,1) のあと、右折して2歩で (1,3)、左折して2歩で (3,3)、右折して2歩で (3,5)、左折して1歩で (4,5)！",
      "fn turn_and_walk(right: bool, n: i32) { if right { turn_right(); } else { turn_left(); } step(n); } を定義しよう。",
      "fn turn_and_walk(right: bool, n: i32) {\n    if right { turn_right(); } else { turn_left(); }\n    step(n);\n}\n\nfn main() {\n    step(1);\n    turn_and_walk(true, 2);\n    turn_and_walk(false, 2);\n    turn_and_walk(true, 2);\n    turn_and_walk(false, 1);\n}"
    ],
    "worldSetup": {
      "width": 6,
      "height": 7,
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
          "x": 5,
          "y": 2
        },
        {
          "x": 0,
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
          "x": 4,
          "y": 4
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 0,
          "y": 5
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 0,
          "y": 6
        },
        {
          "x": 1,
          "y": 6
        },
        {
          "x": 2,
          "y": 6
        },
        {
          "x": 3,
          "y": 6
        },
        {
          "x": 4,
          "y": 6
        },
        {
          "x": 5,
          "y": 6
        }
      ],
      "botStart": {
        "x": 0,
        "y": 1,
        "dir": 0
      },
      "goal": {
        "x": 4,
        "y": 5
      }
    },
    "victoryCondition": {
      "reachGoal": true
    },
    "parTicks": 13
  },
  {
    "displayId": "2-33",
    "id": "91c103b3-4b14-5702-825b-17ba9f9def66",
    "index": 61,
    "chapter": 2,
    "chapterTitle": "第2章 一般的なプログラミングの概念",
    "title": "2-33. 繰り返し loop と break",
    "topicTag": "loop / break",
    "kurumiIntro": "連続する2つの蒸気ゲートだ！`loop { ... }` を使って、ゴールに着いたら `break;`、ゲートが閉まっていたら待つ動きを繰り返そう！",
    "goalSummary": "loop を使って2つのゲートを安全に抜けてゴール (5, 1) へ",
    "bookSectionTitle": "7.5 ループでの繰り返し — loop / while / for",
    "bookSummary": "回数指定なら `for i in 0..4`、条件が合う間は `while`、終了条件を中で自由に決めたいときは `loop { if ... { break; } }` を使います。",
    "bookKeyCode": "loop {\n    if at_goal() { break; }\n    if is_gate_open() { step(); } else { wait_tick(1); }\n}",
    "starterCode": "fn main() {\n    loop {\n        if at_goal() {\n            break;\n        }\n        // ゲートが開いていれば step()、閉じていれば wait_tick(1) しよう！\n        \n    }\n}",
    "solutionCode": "fn main() {\n    loop {\n        if at_goal() {\n            break;\n        }\n        if is_gate_open() {\n            step();\n        } else {\n            wait_tick(1);\n        }\n    }\n}",
    "quickChips": [
      {
        "label": "if is_gate_open() { step(); } else { wait_tick(1); }",
        "insert": "if is_gate_open() {\n            step();\n        } else {\n            wait_tick(1);\n        }"
      }
    ],
    "hints": [
      "1つ前のゲートステージで使った if is_gate_open() ... を loop の中に入れてみよう！",
      "if is_gate_open() { step(); } else { wait_tick(1); } を書くと自動でタイミングを合わせてくれるよ。",
      "if is_gate_open() {\n    step();\n} else {\n    wait_tick(1);\n}"
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
      "gates": [
        {
          "x": 2,
          "y": 1,
          "openTicks": 2,
          "closedTicks": 2,
          "initialOffset": 0
        },
        {
          "x": 4,
          "y": 1,
          "openTicks": 2,
          "closedTicks": 2,
          "initialOffset": 2
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true
    },
    "parTicks": 7
  },
  {
    "displayId": "2-34",
    "id": "c381570b-4707-5667-8fa0-13a557e2a0e1",
    "index": 62,
    "chapter": 2,
    "chapterTitle": "第2章 一般的なプログラミングの概念",
    "stageKind": "puzzle",
    "title": "2-34. ループから値を返す `break val;`",
    "topicTag": "loop 戻り値 / break 値",
    "kurumiIntro": "Rustの `loop` は `break 数値;` と書くことで「ループの結果として値を返す」ことができるんだ！スイッチを踏むまで何歩かかったかを数えて、その分だけ東へ進もう！",
    "goalSummary": "loop の break から歩数を返してゴール (6, 3) へ到達しよう",
    "bookSectionTitle": "7.5 ループから値を返す",
    "bookSummary": "`let count = loop { ... if cond { break c; } };` の構文で、条件を満たした瞬間のカウント値を変数へ受け取れます。",
    "bookKeyCode": "let steps = loop {\n    ...\n    if is_on_switch() { break n; }\n};",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn main() {\n    turn_right();\n    let mut count = 0;\n    let walked = loop {\n        step();\n        count += 1;\n        if is_on_switch() {\n            break count;\n        }\n    };\n    turn_left();\n    step(walked + 4);\n}",
    "quickChips": [
      {
        "label": "if is_on_switch() { break count; }",
        "insert": "if is_on_switch() {\n            break count;\n        }"
      },
      {
        "label": "count += 1;",
        "insert": "count += 1;\n        "
      }
    ],
    "hints": [
      "(0,1) で南を向いたあと、2歩進んだ (0,3) にスイッチがあるよ！",
      "let mut count = 0; で loop { step(); count += 1; if is_on_switch() { break count; } } とすれば walked = 2 が返ってくるよ！",
      "fn main() {\n    turn_right();\n    let mut count = 0;\n    let walked = loop {\n        step();\n        count += 1;\n        if is_on_switch() { break count; }\n    };\n    turn_left();\n    step(walked + 4);\n}"
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
        "y": 1,
        "dir": 0
      },
      "goal": {
        "x": 6,
        "y": 3
      },
      "switches": [
        {
          "x": 0,
          "y": 3
        }
      ],
      "gates": [
        {
          "x": 4,
          "y": 3,
          "openTicks": 1,
          "closedTicks": 0,
          "linkedSwitch": {
            "x": 0,
            "y": 3
          }
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "requireAllSwitches": true
    },
    "parTicks": 11
  },
  {
    "displayId": "2-35",
    "id": "bbf38b6e-ec0a-5fae-9802-afe15bb017e8",
    "index": 63,
    "chapter": 2,
    "chapterTitle": "第2章 一般的なプログラミングの概念",
    "stageKind": "puzzle",
    "title": "2-35. 壁センサー迷路：L字の連続",
    "topicTag": "is_wall_ahead() / 迷路パズル",
    "kurumiIntro": "ここから新センサー `is_wall_ahead()` と `is_wall_right()` が解禁！歩数を数えて書く代わりに、「前が壁なら右（または左）を向く」ループだけで迷路を解いてみよう！",
    "goalSummary": "センサーを使った loop でクランク迷路のゴール (5, 4) へ到達しよう",
    "bookSectionTitle": "7.5 制御フロー — 壁センサーによる自律走行",
    "bookSummary": "`is_wall_ahead()` は目の前が壁のとき `true` を返します。`loop` の中で `if at_goal() { break; }` と組み合わせれば未知の曲がり角も進めます。",
    "bookKeyCode": "loop {\n    if at_goal() { break; }\n    if is_wall_ahead() { turn_right(); } else { step(); }\n}",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn main() {\n    loop {\n        if at_goal() {\n            break;\n        }\n        if is_wall_ahead() {\n            if is_wall_right() {\n                turn_left();\n            } else {\n                turn_right();\n            }\n        } else {\n            step();\n        }\n    }\n}",
    "quickChips": [
      {
        "label": "is_wall_ahead()",
        "insert": "is_wall_ahead()"
      },
      {
        "label": "is_wall_right()",
        "insert": "is_wall_right()"
      },
      {
        "label": "turn_left();",
        "insert": "turn_left();"
      },
      {
        "label": "turn_right();",
        "insert": "turn_right();"
      }
    ],
    "hints": [
      "一本道の迷路だから、前に壁があるときに「右が壁なら左折、そうでなければ右折」すれば必ず奥へ進めるよ！",
      "`if is_wall_ahead() { if is_wall_right() { turn_left(); } else { turn_right(); } } else { step(); }` を loop の中に書こう。",
      "loop {\n    if at_goal() { break; }\n    if is_wall_ahead() {\n        if is_wall_right() { turn_left(); } else { turn_right(); }\n    } else { step(); }\n}"
    ],
    "worldSetup": {
      "width": 6,
      "height": 6,
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
          "x": 0,
          "y": 5
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 5,
          "y": 5
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
      }
    },
    "victoryCondition": {
      "reachGoal": true
    },
    "parTicks": 11
  },
  {
    "displayId": "2-36",
    "id": "4046d4d6-e3b8-5117-b491-85e94a3268be",
    "index": 64,
    "chapter": 2,
    "chapterTitle": "第2章 一般的なプログラミングの概念",
    "stageKind": "puzzle",
    "title": "2-36. ぐるぐる渦巻き迷路（右手法）",
    "topicTag": "右手法アルゴリズム / 迷路",
    "kurumiIntro": "大きな渦巻き型の倉庫だよ！`is_wall_ahead()` と `is_wall_right()` で「壁沿いに進む」ロジックを書けば、たった数行のコードで中心のゴールまでたどり着けるよ！",
    "goalSummary": "センサー制御ループで渦巻きの中心 (3, 3) へ到達しよう",
    "bookSectionTitle": "7.5 ループ応用 — 渦巻き迷路の一般解法",
    "bookSummary": "規則的な曲がり角が続く迷路も、センサー分岐のルールを1つ書くだけでコンパクトに解決できます。",
    "bookKeyCode": "if is_wall_ahead() { turn_right(); } else { step(); }",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn main() {\n    loop {\n        if at_goal() {\n            break;\n        }\n        if is_wall_ahead() {\n            turn_right();\n        } else {\n            step();\n        }\n    }\n}",
    "quickChips": [
      {
        "label": "if is_wall_ahead()",
        "insert": "if is_wall_ahead() {\n            turn_right();\n        } else {\n            step();\n        }"
      },
      {
        "label": "if at_goal() { break; }",
        "insert": "if at_goal() { break; }\n        "
      }
    ],
    "hints": [
      "外側から内側へずっと右回りの渦巻きになっているよ！",
      "前が壁なら `turn_right()`、そうでなければ `step()` を繰り返すだけで中心に届くよ。",
      "loop { if at_goal() { break; } if is_wall_ahead() { turn_right(); } else { step(); } }"
    ],
    "worldSetup": {
      "width": 7,
      "height": 7,
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
          "x": 6,
          "y": 1
        },
        {
          "x": 6,
          "y": 2
        },
        {
          "x": 6,
          "y": 3
        },
        {
          "x": 6,
          "y": 4
        },
        {
          "x": 6,
          "y": 5
        },
        {
          "x": 6,
          "y": 6
        },
        {
          "x": 0,
          "y": 6
        },
        {
          "x": 1,
          "y": 6
        },
        {
          "x": 2,
          "y": 6
        },
        {
          "x": 3,
          "y": 6
        },
        {
          "x": 4,
          "y": 6
        },
        {
          "x": 5,
          "y": 6
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
          "x": 4,
          "y": 3
        },
        {
          "x": 4,
          "y": 4
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
          "x": 0,
          "y": 5
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 3,
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
      }
    },
    "victoryCondition": {
      "reachGoal": true
    },
    "parTicks": 24
  },
  {
    "displayId": "2-37",
    "id": "e4998b57-9a9e-508b-a9d6-58236afea786",
    "index": 65,
    "chapter": 2,
    "chapterTitle": "第2章 一般的なプログラミングの概念",
    "stageKind": "puzzle",
    "title": "2-37. 本格左手法！枝分かれ迷路",
    "topicTag": "is_wall_left() / 左手法パズル",
    "kurumiIntro": "分かれ道がある本物の迷路だよ！いつも左の壁に手を触れながら歩く「左手法」アルゴリズムを `is_wall_left()` で実装してみよう！",
    "goalSummary": "左手法アルゴリズムで枝分かれ迷路のゴール (5, 5) へ到達しよう",
    "bookSectionTitle": "7.5 迷路探索 — 左手法（Left-Hand Rule）",
    "bookSummary": "1) 左が空いていたら左を向いて1歩進む。2) 前が空いていたら1歩進む。3) どちらも壁なら右を向く。これだけでどんな単連結迷路も解けます！",
    "bookKeyCode": "if !is_wall_left() {\n    turn_left();\n    step();\n} else if !is_wall_ahead() {\n    step();\n} else {\n    turn_right();\n}",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn main() {\n    loop {\n        if at_goal() {\n            break;\n        }\n        if !is_wall_left() {\n            turn_left();\n            step();\n        } else if !is_wall_ahead() {\n            step();\n        } else {\n            turn_right();\n        }\n    }\n}",
    "quickChips": [
      {
        "label": "!is_wall_left()",
        "insert": "!is_wall_left()"
      },
      {
        "label": "!is_wall_ahead()",
        "insert": "!is_wall_ahead()"
      },
      {
        "label": "turn_left(); step();",
        "insert": "turn_left();\n            step();"
      }
    ],
    "hints": [
      "「左が壁でない（!is_wall_left()）」ときは左折してから必ず `step()` で1歩踏み出そう（その場で回り続けないため！）。",
      "左が壁で前が空いていれば `step()`、前も壁なら `turn_right()` しよう！",
      "if !is_wall_left() { turn_left(); step(); } else if !is_wall_ahead() { step(); } else { turn_right(); }"
    ],
    "worldSetup": {
      "width": 7,
      "height": 7,
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
          "x": 2,
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
          "x": 2,
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
          "x": 4,
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
          "x": 4,
          "y": 4
        },
        {
          "x": 6,
          "y": 4
        },
        {
          "x": 0,
          "y": 5
        },
        {
          "x": 6,
          "y": 5
        },
        {
          "x": 0,
          "y": 6
        },
        {
          "x": 1,
          "y": 6
        },
        {
          "x": 2,
          "y": 6
        },
        {
          "x": 3,
          "y": 6
        },
        {
          "x": 4,
          "y": 6
        },
        {
          "x": 5,
          "y": 6
        },
        {
          "x": 6,
          "y": 6
        }
      ],
      "botStart": {
        "x": 0,
        "y": 1,
        "dir": 0
      },
      "goal": {
        "x": 5,
        "y": 5
      }
    },
    "victoryCondition": {
      "reachGoal": true
    },
    "parTicks": 24
  },
  {
    "displayId": "2-38",
    "id": "b2411e44-bf11-5d5f-a996-ea8ab6c064b4",
    "index": 66,
    "chapter": 2,
    "chapterTitle": "第2章 一般的なプログラミングの概念",
    "stageKind": "puzzle",
    "title": "2-38. スイッチ迷路（踏んで戻ってゴールへ）",
    "topicTag": "右手法 + スイッチ連動",
    "kurumiIntro": "分かれ道の奥にあるスイッチを踏んでからゲート先のゴールへ向かう迷路だよ！左手法や右手法のどちらがスイッチに先に寄れるか試してみよう！",
    "goalSummary": "スイッチ (1, 5) を踏んでから右側のゴール (5, 3) へ到達",
    "bookSectionTitle": "7.5 迷路探索 — 探索アルゴリズムの選択",
    "bookSummary": "右手法（`!is_wall_right()` を優先）と左手法（`!is_wall_left()` を優先）では巡回する順番が逆になります。スイッチ位置に合わせて使い分けましょう。",
    "bookKeyCode": "if !is_wall_right() { turn_right(); step(); }",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn main() {\n    loop {\n        if at_goal() {\n            break;\n        }\n        if !is_wall_right() {\n            turn_right();\n            step();\n        } else if !is_wall_ahead() {\n            step();\n        } else {\n            turn_left();\n        }\n    }\n}",
    "quickChips": [
      {
        "label": "!is_wall_right()",
        "insert": "!is_wall_right()"
      },
      {
        "label": "!is_wall_ahead()",
        "insert": "!is_wall_ahead()"
      }
    ],
    "hints": [
      "スイッチ (1, 5) は下（右折側）の袋小路にあるから「右手法」で壁沿いに回ると必ず踏んでから戻ってこられるよ！",
      "`if !is_wall_right() { turn_right(); step(); } else if !is_wall_ahead() { step(); } else { turn_left(); }` を書こう！",
      "loop { if at_goal() { break; } if !is_wall_right() { turn_right(); step(); } else if !is_wall_ahead() { step(); } else { turn_left(); } }"
    ],
    "worldSetup": {
      "width": 7,
      "height": 7,
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
        },
        {
          "x": 0,
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
        },
        {
          "x": 0,
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
          "x": 0,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 6,
          "y": 5
        },
        {
          "x": 0,
          "y": 6
        },
        {
          "x": 1,
          "y": 6
        },
        {
          "x": 2,
          "y": 6
        },
        {
          "x": 3,
          "y": 6
        },
        {
          "x": 4,
          "y": 6
        },
        {
          "x": 5,
          "y": 6
        },
        {
          "x": 6,
          "y": 6
        }
      ],
      "botStart": {
        "x": 1,
        "y": 1,
        "dir": 1
      },
      "goal": {
        "x": 5,
        "y": 3
      },
      "switches": [
        {
          "x": 1,
          "y": 5
        }
      ],
      "gates": [
        {
          "x": 4,
          "y": 3,
          "openTicks": 1,
          "closedTicks": 0,
          "linkedSwitch": {
            "x": 1,
            "y": 5
          }
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "requireAllSwitches": true
    },
    "parTicks": 16
  },
  {
    "displayId": "2-39",
    "id": "3164f81c-a2e0-50c3-8b9c-ed58da4e0c6b",
    "index": 67,
    "chapter": 2,
    "chapterTitle": "第2章 一般的なプログラミングの概念",
    "title": "2-39. while ループでゴールまで直進",
    "topicTag": "while 条件ループ",
    "kurumiIntro": "「ゴールに着いていない間（`!at_goal()`）はずっと繰り返す」みたいに条件が決まっているなら、`while` ループがとても読みやすいよ！",
    "goalSummary": "while !at_goal() を使ってスパークを避けながらゴール (4, 1) へ",
    "bookSectionTitle": "7.5 条件付きループ while",
    "bookSummary": "`while 条件 { ... }` は条件が `true` のあいだ処理を繰り返します。`at_goal()` が `false` のあいだ繰り返すには `!at_goal()` と書きます。",
    "bookKeyCode": "while !at_goal() {\n    step();\n}",
    "starterCode": "fn main() {\n    // 最初は前に巡回スパークがいるので 1拍待つと安全だよ！\n    wait_tick(1);\n    while !at_goal() {\n        // ゲートが開いていれば前進、閉じていれば待機しよう\n        \n    }\n}",
    "solutionCode": "fn main() {\n    wait_tick(1);\n    while !at_goal() {\n        if is_gate_open() {\n            step();\n        } else {\n            wait_tick(1);\n        }\n    }\n}",
    "quickChips": [
      {
        "label": "if is_gate_open() { step(); } else { wait_tick(1); }",
        "insert": "if is_gate_open() {\n            step();\n        } else {\n            wait_tick(1);\n        }"
      }
    ],
    "hints": [
      "while !at_goal() の中では、前と同じようにゲートを見て歩けばOK！",
      "if is_gate_open() { step(); } else { wait_tick(1); } を書こう。",
      "if is_gate_open() {\n    step();\n} else {\n    wait_tick(1);\n}"
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
          "x": 3,
          "y": 1,
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
              "x": 1,
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
              "x": 1,
              "y": 1
            }
          ],
          "initialIndex": 0
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true
    },
    "parTicks": 7
  },
  {
    "displayId": "2-40",
    "id": "3be2101b-6dd6-59a9-b38d-c17bc6cd7ed0",
    "index": 68,
    "chapter": 2,
    "chapterTitle": "第2章 一般的なプログラミングの概念",
    "stageKind": "puzzle",
    "title": "2-40. 壁まで突っ走れ！関数抽象化",
    "topicTag": "fn dash_to_wall() / 関数",
    "kurumiIntro": "前の壁に突き当たるまで真っ直ぐ進む `fn dash_to_wall()` を作って、長いジグザグ廊下を一気に攻略しよう！途中でコンベアにも乗るから歩数を直接書くとズレちゃうよ！",
    "goalSummary": "dash_to_wall() を作って 3回の方向転換でゴール (6, 4) へ",
    "bookSectionTitle": "7.3 & 7.5 関数 × センサーで汎用動作を作る",
    "bookSummary": "「壁まで進む」という高レベルの命令を関数にしておけば、コンベアが途中に入って距離が変わっても問題なく壁の前で止まれます。",
    "bookKeyCode": "fn dash_to_wall() {\n    while !is_wall_ahead() { step(); }\n}",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn dash_to_wall() {\n    while !is_wall_ahead() {\n        step();\n    }\n}\n\nfn main() {\n    dash_to_wall();\n    turn_right();\n    dash_to_wall();\n    turn_left();\n    dash_to_wall();\n}",
    "quickChips": [
      {
        "label": "while !is_wall_ahead() { step(); }",
        "insert": "while !is_wall_ahead() {\n        step();\n    }"
      },
      {
        "label": "dash_to_wall();",
        "insert": "dash_to_wall();\n    "
      }
    ],
    "hints": [
      "fn dash_to_wall() { while !is_wall_ahead() { step(); } } を定義しよう！",
      "最初は東の壁(5,1)まで、右折して南の壁(5,4)まで、左折して東のゴール壁(6,4)まで走るよ！",
      "fn dash_to_wall() {\n    while !is_wall_ahead() { step(); }\n}\n\nfn main() {\n    dash_to_wall();\n    turn_right();\n    dash_to_wall();\n    turn_left();\n    dash_to_wall();\n}"
    ],
    "worldSetup": {
      "width": 7,
      "height": 6,
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
          "x": 0,
          "y": 5
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 6,
          "y": 5
        }
      ],
      "botStart": {
        "x": 0,
        "y": 1,
        "dir": 0
      },
      "goal": {
        "x": 6,
        "y": 4
      },
      "conveyors": [
        {
          "x": 2,
          "y": 1,
          "dir": 0
        },
        {
          "x": 5,
          "y": 2,
          "dir": 1
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "maxTicks": 10
    },
    "parTicks": 10
  },
  {
    "displayId": "2-41",
    "id": "156c1e98-7679-5841-bb20-4bc9e0bd9ea6",
    "index": 69,
    "chapter": 2,
    "chapterTitle": "第2章 一般的なプログラミングの概念",
    "title": "2-41. for ループで正方形の四角巡回",
    "topicTag": "for _ in 0..N",
    "kurumiIntro": "同じ「2歩進んで右に曲がる」を3回繰り返して、ぐるっと回って反対側のゴールへ到着しよう！回数が決まっているなら `for _ in 0..3` が最高だよ。",
    "goalSummary": "for ループで3辺を回って (0, 3) のゴールへ到達しよう",
    "bookSectionTitle": "7.5 コレクションや範囲を巡回する for ループ",
    "bookSummary": "変数を使わない回数指定には `for _ in 0..3` のように `_` を使います。無限ループの心配がなく安全なループです。",
    "bookKeyCode": "for _ in 0..3 {\n    step(2);\n    turn_right();\n}",
    "starterCode": "fn main() {\n    // 今は 0..1 だから1回しか曲がらないよ！0..3 に変えて3回繰り返そう\n    for _ in 0..1 {\n        step(2);\n        turn_right();\n    }\n}",
    "solutionCode": "fn main() {\n    for _ in 0..3 {\n        step(2);\n        turn_right();\n    }\n}",
    "quickChips": [
      {
        "label": "0..3",
        "insert": "0..3"
      }
    ],
    "hints": [
      "(0,1) → (2,1) → (2,3) → (0,3) と3回「2歩進んで右折」を繰り返せばゴールだよ！",
      "for _ in 0..1 を for _ in 0..3 に変更しよう！",
      "for _ in 0..3 {"
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
          "x": 3,
          "y": 2
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
      "reachGoal": true
    },
    "parTicks": 9
  },
  {
    "displayId": "2-42",
    "id": "f15cf767-4a5e-5cc3-a583-ef9a0b9066c1",
    "index": 70,
    "chapter": 2,
    "chapterTitle": "第2章 一般的なプログラミングの概念",
    "title": "2-42. ループの中で加算（+=）",
    "topicTag": "let mut / += / for",
    "kurumiIntro": "今度は `for` ループを回しながら、`let mut total = 0;` に1ずつ貯金していこう！",
    "goalSummary": "1..=3 を足し合わせて金庫⚡6にし、ゴール (3, 1) へ",
    "bookSectionTitle": "7.1 mut 変数を使った累積計算",
    "bookSummary": "繰り返しの中で合計を計算するときは、ループの外で `let mut total = 0;` を用意し、中で `total += i;` と積み上げていきます。",
    "bookKeyCode": "let mut total = 0;\nfor i in 1..=3 {\n    total += i;\n}",
    "starterCode": "fn main() {\n    let mut total = 0;\n    for i in 1..=3 {\n        // total に i を足し込もう！\n        \n    }\n    add_vault(total);\n    step(3);\n}",
    "solutionCode": "fn main() {\n    let mut total = 0;\n    for i in 1..=3 {\n        total += i;\n    }\n    add_vault(total);\n    step(3);\n}",
    "quickChips": [
      {
        "label": "total += i;",
        "insert": "total += i;\n        "
      },
      {
        "label": "add_vault(total);",
        "insert": "add_vault(total);"
      }
    ],
    "hints": [
      "1 + 2 + 3 を計算すれば合計 6 になるよ！",
      "for の { } の中に total += i; を書こう。",
      "for i in 1..=3 {\n    total += i;\n}"
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
        "target": 6
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "vaultTarget": 6
    },
    "parTicks": 4
  },
  {
    "displayId": "2-43",
    "id": "627e9a97-0fe4-5eea-b8d4-b8130c2b866c",
    "index": 71,
    "chapter": 2,
    "chapterTitle": "第2章 一般的なプログラミングの概念",
    "title": "2-43. 配列と bool の複合データパズル",
    "topicTag": "配列 / bool 実践パズル",
    "kurumiIntro": "配列のデータを `for` で取り出しながら、合計値を金庫に入れてスイッチ付き通路をクリアしよう！",
    "goalSummary": "配列 [2, 1, 2] で金庫⚡5を満たし、スイッチを踏んでゴールへ",
    "bookSectionTitle": "7.2 複合型の組み合わせ応用",
    "bookSummary": "配列をループで回し、真偽値フラグに応じて条件を切り替えるパターンは実際の制御プログラムでもよく登場します。",
    "bookKeyCode": "let nums = [2, 1, 2];\nfor n in nums { add_vault(n); }",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn main() {\n    let nums = [2, 1, 2];\n    let ready = true;\n    if ready {\n        for n in nums {\n            add_vault(n);\n        }\n    }\n    step(4);\n}",
    "quickChips": [
      {
        "label": "step(4);",
        "insert": "step(4);"
      },
      {
        "label": "add_vault(n);",
        "insert": "add_vault(n);"
      }
    ],
    "hints": [
      "配列 nums = [2, 1, 2] と bool フラグ ready = true を使って、for n in nums { add_vault(n); } で金庫に⚡5を貯めよう。",
      "道なりに進むと (2, 1) のスイッチで (3, 1) のゲートが開くから、そのまま step(4); で直進できるよ！",
      "fn main() {\n    let nums = [2, 1, 2];\n    let ready = true;\n    if ready {\n        for n in nums {\n            add_vault(n);\n        }\n    }\n    step(4);\n}"
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
        "target": 5
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "vaultTarget": 5
    },
    "parTicks": 7
  },
  {
    "displayId": "2-44",
    "id": "a8b5ca14-afca-5e98-afa3-d08d885a4d60",
    "index": 72,
    "chapter": 2,
    "chapterTitle": "第2章 一般的なプログラミングの概念",
    "stageKind": "puzzle",
    "title": "2-44. 配列要素でダンスルート",
    "topicTag": "配列リテラル / for item in arr",
    "kurumiIntro": "配列 `[3, 2, 3, 1]` に各区間の歩数が入っているよ！`for s in legs` で順番に取り出して、1区間歩くごとに右折してみよう！",
    "goalSummary": "配列を for で回して 2つのスイッチを踏みゴール (1, 2) へ",
    "bookSectionTitle": "7.2 & 7.5 配列の反復処理",
    "bookSummary": "固定のステップリスト `let legs = [2, 1, 2];` を `for s in legs` で回すと、同じ構造の曲がり道を一気に走破できます。",
    "bookKeyCode": "let legs = [2, 2, 1];\nfor s in legs { ... }",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn main() {\n    let legs = [3, 2, 3, 1];\n    for s in legs {\n        step(s);\n        turn_right();\n    }\n}",
    "quickChips": [
      {
        "label": "step(s);",
        "insert": "step(s);\n        "
      },
      {
        "label": "turn_right();",
        "insert": "turn_right();\n        "
      }
    ],
    "hints": [
      "(0,1)→東3歩でスイッチ(3,1)→右折して南2歩で(3,3)→右折して西3歩でスイッチ(0,3)→右折して北1歩でゴール(0,2)！",
      "let legs = [3, 2, 3, 1]; を用意し、for s in legs { step(s); turn_right(); } で綺麗に一周できるよ！",
      "fn main() {\n    let legs = [3, 2, 3, 1];\n    for s in legs {\n        step(s);\n        turn_right();\n    }\n}"
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
        "y": 2
      },
      "switches": [
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 0,
          "y": 3
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "requireAllSwitches": true
    },
    "parTicks": 14
  },
  {
    "id": "1f285b92-a6db-5f8d-8f4d-61ae58e9d4bd",
    "displayId": "2-45",
    "index": 73,
    "chapter": 2,
    "chapterTitle": "第2章 一般的なプログラミングの概念",
    "stageKind": "puzzle",
    "title": "2-45. 反復処理で距離を走破",
    "topicTag": "for / 反復制御",
    "kurumiIntro": "同じ操作を繰り返すループを組み、必要な距離だけ走り切ろう。",
    "goalSummary": "ループで4マス進みゴールへ到達",
    "bookSectionTitle": "3.5 for ループによる反復",
    "bookSummary": "for ループの範囲を決めると、同じ操作を安全に繰り返せます。",
    "bookKeyCode": "for _ in 0..4 { step(); }",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn main() {\n    for _ in 0..4 { step(); }\n}",
    "quickChips": [
      {
        "label": "解法の式",
        "insert": "    for _ in 0..4 { step(); }"
      }
    ],
    "hints": [
      "ループの終端は含まれないよ。",
      "0..4 なら4回実行するよ。",
      "fn main() {\n    for _ in 0..4 { step(); }\n}"
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
    "id": "dac8d922-e573-53fa-9687-605dff9742b8",
    "displayId": "2-46",
    "index": 74,
    "chapter": 2,
    "chapterTitle": "第2章 一般的なプログラミングの概念",
    "stageKind": "puzzle",
    "title": "2-46. 反復処理で距離を走破",
    "topicTag": "for / 反復制御",
    "kurumiIntro": "同じ操作を繰り返すループを組み、必要な距離だけ走り切ろう。",
    "goalSummary": "ループで5マス進みゴールへ到達",
    "bookSectionTitle": "3.5 for ループによる反復",
    "bookSummary": "for ループの範囲を決めると、同じ操作を安全に繰り返せます。",
    "bookKeyCode": "for _ in 0..5 { step(); }",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn main() {\n    for _ in 0..5 { step(); }\n}",
    "quickChips": [
      {
        "label": "解法の式",
        "insert": "    for _ in 0..5 { step(); }"
      }
    ],
    "hints": [
      "ループの終端は含まれないよ。",
      "0..5 なら5回実行するよ。",
      "fn main() {\n    for _ in 0..5 { step(); }\n}"
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
    "id": "2ed6f4f3-91b7-5f1c-9f1c-9ce8d214193d",
    "displayId": "2-47",
    "index": 75,
    "chapter": 2,
    "chapterTitle": "第2章 一般的なプログラミングの概念",
    "stageKind": "puzzle",
    "title": "2-47. 反復処理で距離を走破",
    "topicTag": "for / 反復制御",
    "kurumiIntro": "同じ操作を繰り返すループを組み、必要な距離だけ走り切ろう。",
    "goalSummary": "ループで6マス進みゴールへ到達",
    "bookSectionTitle": "3.5 for ループによる反復",
    "bookSummary": "for ループの範囲を決めると、同じ操作を安全に繰り返せます。",
    "bookKeyCode": "for _ in 0..6 { step(); }",
    "starterCode": "fn main() {\n    \n}",
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
    "id": "dbe5cb60-8cd1-5370-a936-ac55e631e484",
    "displayId": "2-48",
    "index": 76,
    "chapter": 2,
    "chapterTitle": "第2章 一般的なプログラミングの概念",
    "stageKind": "puzzle",
    "title": "2-48. 反復処理で距離を走破",
    "topicTag": "for / 反復制御",
    "kurumiIntro": "同じ操作を繰り返すループを組み、必要な距離だけ走り切ろう。",
    "goalSummary": "ループで3マス進みゴールへ到達",
    "bookSectionTitle": "3.5 for ループによる反復",
    "bookSummary": "for ループの範囲を決めると、同じ操作を安全に繰り返せます。",
    "bookKeyCode": "for _ in 0..3 { step(); }",
    "starterCode": "fn main() {\n    \n}",
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
    "displayId": "2-49",
    "id": "796bcd6e-4754-52af-aa5d-ebfd5aeef655",
    "index": 77,
    "chapter": 2,
    "chapterTitle": "第2章 一般的なプログラミングの概念",
    "stageKind": "puzzle",
    "title": "2-49. 論理演算 && / || で安全ガード",
    "topicTag": "is_spark_ahead() / 複合条件",
    "kurumiIntro": "目の前には周期ゲートと巡回スパークの両方が待っているよ！`if !is_gate_open() || is_spark_ahead()` を使って、どちらか1つでも危険なら立ち止まる安全ガードを組もう！",
    "goalSummary": "ゲートとスパークを自動回避しながらゴール (7, 2) へ到達",
    "bookSectionTitle": "7.5 条件分岐 — 論理和 || による安全判定",
    "bookSummary": "`!is_gate_open() || is_spark_ahead()` と書くと、「ゲートが閉じている」または「次のマスにスパークがいる」のどちらかのとき `wait_tick(1);` を選べます。",
    "bookKeyCode": "if !is_gate_open() || is_spark_ahead() {\n    wait_tick(1);\n} else {\n    step();\n}",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn main() {\n    loop {\n        if at_goal() {\n            break;\n        }\n        if !is_gate_open() || is_spark_ahead() {\n            wait_tick(1);\n        } else {\n            step();\n        }\n    }\n}",
    "quickChips": [
      {
        "label": "!is_gate_open() || is_spark_ahead()",
        "insert": "!is_gate_open() || is_spark_ahead()"
      },
      {
        "label": "wait_tick(1);",
        "insert": "wait_tick(1);"
      }
    ],
    "hints": [
      "一本道だから進路判定は「安全なら step()、そうでなければ wait_tick(1)」の1組だけでOK！",
      "安全でない条件は `!is_gate_open() || is_spark_ahead()` だよ。",
      "loop { if at_goal() { break; } if !is_gate_open() || is_spark_ahead() { wait_tick(1); } else { step(); } }"
    ],
    "worldSetup": {
      "width": 8,
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
          "x": 7,
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
          "x": 5,
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
          "x": 4,
          "y": 3
        },
        {
          "x": 5,
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
        "x": 7,
        "y": 2
      },
      "gates": [
        {
          "x": 2,
          "y": 2,
          "openTicks": 2,
          "closedTicks": 2,
          "initialOffset": 2
        },
        {
          "x": 5,
          "y": 2,
          "openTicks": 1,
          "closedTicks": 2,
          "initialOffset": 1
        }
      ],
      "sparks": [
        {
          "id": "sp1",
          "path": [
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
            }
          ],
          "initialIndex": 1
        },
        {
          "id": "sp2",
          "path": [
            {
              "x": 6,
              "y": 3
            },
            {
              "x": 6,
              "y": 2
            },
            {
              "x": 6,
              "y": 1
            },
            {
              "x": 6,
              "y": 2
            }
          ],
          "initialIndex": 0
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true
    },
    "parTicks": 12
  },
  {
    "displayId": "2-50",
    "id": "7200c110-6d05-53e5-902e-bdc72e088dd9",
    "index": 78,
    "chapter": 2,
    "chapterTitle": "第2章 一般的なプログラミングの概念",
    "stageKind": "puzzle",
    "title": "2-50. 剰余（%）でリズムを刻む",
    "topicTag": "剰余演算子 % / パズル",
    "kurumiIntro": "2つの周期ゲートの開く周期が違うよ！閉じているときは `wait_tick(1)` でやり過ごし、`i % 2` の周期に合わせて安全に抜けよう！",
    "goalSummary": "forループとゲート判定を使って 2つの周期ゲートを抜け、ゴール (6, 1) へ",
    "bookSectionTitle": "7.2 算術演算 — 剰余 % で周期を扱う",
    "bookSummary": "割り算の余りを求める `%`（剰余演算子）は、「2回に1回」「3の倍数のとき」といった周期パズルに最適です。",
    "bookKeyCode": "if i % 2 == 0 {\n    wait_tick(1);\n}",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn main() {\n    for i in 0..6 {\n        while !is_gate_open() {\n            wait_tick(1);\n        }\n        step();\n    }\n}",
    "quickChips": [
      {
        "label": "while !is_gate_open()",
        "insert": "while !is_gate_open() {\n            wait_tick(1);\n        }\n        "
      },
      {
        "label": "i % 2 == 0",
        "insert": "i % 2 == 0"
      }
    ],
    "hints": [
      "ゲート1とゲート2は閉じるタイミングが違うから、`while !is_gate_open() { wait_tick(1); }` を step() の前に書くと確実に開いた瞬間に通れるよ！",
      "または `if !is_gate_open() { wait_tick(1); }` を調整して周期を合わせてもOK！",
      "for i in 0..6 { while !is_gate_open() { wait_tick(1); } step(); }"
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
      "gates": [
        {
          "x": 2,
          "y": 1,
          "openTicks": 1,
          "closedTicks": 2,
          "initialOffset": 0
        },
        {
          "x": 4,
          "y": 1,
          "openTicks": 1,
          "closedTicks": 2,
          "initialOffset": 2
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true
    },
    "parTicks": 10
  },
  {
    "displayId": "2-51",
    "id": "c4fa05a0-a15b-5368-a67e-d9ffd74e681a",
    "index": 79,
    "chapter": 2,
    "chapterTitle": "第2章 一般的なプログラミングの概念",
    "stageKind": "puzzle",
    "title": "2-51. for ..= と continue で偶数ジャンプ",
    "topicTag": "continue / 範囲 1..=6",
    "kurumiIntro": "`for i in 1..=6` の中で奇数回は `continue;` でスキップして、偶数回のときだけ `\"BEAT\"` と出力しながら進め！前のゲートも `is_gate_open()` でチェックしよう。",
    "goalSummary": "continue を使って \"BEAT\" を3回鳴らしつつゴール (5, 1) へ",
    "bookSectionTitle": "7.5 ループ制御 — continue で周回をスキップ",
    "bookSummary": "`continue;` を実行すると、その周回の残りの処理を飛ばして次のループ回へ進みます。条件付きスキップに便利です。",
    "bookKeyCode": "for i in 1..=6 {\n    if i % 2 != 0 { continue; }\n    ...\n}",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn main() {\n    for i in 1..=6 {\n        if i % 2 != 0 {\n            continue;\n        }\n        println!(\"BEAT\");\n        step();\n    }\n    while !is_gate_open() {\n        wait_tick(1);\n    }\n    step(2);\n}",
    "quickChips": [
      {
        "label": "if i % 2 != 0 { continue; }",
        "insert": "if i % 2 != 0 {\n            continue;\n        }\n        "
      },
      {
        "label": "println!(\"BEAT\");",
        "insert": "println!(\"BEAT\");\n        "
      }
    ],
    "hints": [
      "for i in 1..=6 のうち偶数は 2, 4, 6 の3回あるから、奇数は continue; して偶数回だけ println!(\"BEAT\"); と step(); を呼ぼう！",
      "3歩進んだ (3,1) で while !is_gate_open() { wait_tick(1); } でゲートを待ち、最後の step(2) で (5,1) へ着くよ。",
      "fn main() {\n    for i in 1..=6 {\n        if i % 2 != 0 { continue; }\n        println!(\"BEAT\");\n        step();\n    }\n    while !is_gate_open() { wait_tick(1); }\n    step(2);\n}"
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
      "gates": [
        {
          "x": 4,
          "y": 1,
          "openTicks": 2,
          "closedTicks": 2,
          "initialOffset": 1
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "stdoutIncludes": [
        "BEAT"
      ]
    },
    "parTicks": 10
  },
  {
    "displayId": "2-52",
    "id": "4f9e1d29-7838-5f19-be0a-e795c04755fd",
    "index": 80,
    "chapter": 2,
    "chapterTitle": "第2章 一般的なプログラミングの概念",
    "stageKind": "puzzle",
    "title": "2-52. 火花＋曲がり角の自律パトロール",
    "topicTag": "センサー統合パズル",
    "kurumiIntro": "曲がり角に加えて巡回スパークまで現れたよ！迷路判定とスパーク待ちを1つの `loop` の中で両立させよう！",
    "goalSummary": "壁とスパークを両方かわしてゴール (5, 4) へ到達しよう",
    "bookSectionTitle": "7.5 センサーの優先順位設計",
    "bookSummary": "「まずスパークが前にいたら待つ」「次に壁が前なら曲がる」「どちらも大丈夫なら前進」の優先順位をつけると安定します。",
    "bookKeyCode": "if is_spark_ahead() {\n    wait_tick(1);\n} else if is_wall_ahead() {\n    ...\n} else {\n    step();\n}",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn main() {\n    loop {\n        if at_goal() {\n            break;\n        }\n        if is_spark_ahead() {\n            wait_tick(1);\n        } else if is_wall_ahead() {\n            if is_wall_right() {\n                turn_left();\n            } else {\n                turn_right();\n            }\n        } else {\n            step();\n        }\n    }\n}",
    "quickChips": [
      {
        "label": "if is_spark_ahead()",
        "insert": "if is_spark_ahead() {\n            wait_tick(1);\n        }"
      },
      {
        "label": "else if is_wall_ahead()",
        "insert": " else if is_wall_ahead() {\n            if is_wall_right() { turn_left(); } else { turn_right(); }\n        }"
      }
    ],
    "hints": [
      "is_spark_ahead() の判定を一番先頭に置いて wait_tick(1) するのが安全だよ！",
      "前が壁なら is_wall_right() を見て、右が壁なら turn_left()、そうでなければ turn_right() にしよう。",
      "if is_spark_ahead() { wait_tick(1); } else if is_wall_ahead() { if is_wall_right() { turn_left(); } else { turn_right(); } } else { step(); }"
    ],
    "worldSetup": {
      "width": 6,
      "height": 6,
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
          "x": 4,
          "y": 1
        },
        {
          "x": 5,
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
          "x": 0,
          "y": 5
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 5,
          "y": 5
        }
      ],
      "botStart": {
        "x": 0,
        "y": 1,
        "dir": 0
      },
      "goal": {
        "x": 5,
        "y": 4
      },
      "sparks": [
        {
          "id": "sp1",
          "path": [
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
              "x": 3,
              "y": 2
            }
          ],
          "initialIndex": 0
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
              "y": 4
            },
            {
              "x": 4,
              "y": 5
            },
            {
              "x": 4,
              "y": 4
            }
          ],
          "initialIndex": 1
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true
    },
    "parTicks": 15
  },
  {
    "displayId": "2-53",
    "id": "5797805d-9d5b-52cb-96cd-19cfcf168676",
    "index": 81,
    "chapter": 2,
    "chapterTitle": "第2章 一般的なプログラミングの概念",
    "stageKind": "puzzle",
    "title": "2-53. 2機のスパークが交差する廊下",
    "topicTag": "is_spark_ahead() / 複合リズム",
    "kurumiIntro": "逆方向に動く2機の巡回スパークがすれ違う危険な廊下だよ！自分の歩数ではなく `is_spark_ahead()` を信じて安全に駆け抜けよう！",
    "goalSummary": "交差するスパークを自動で避けて 11ティック以内にゴール (6, 2) へ",
    "bookSectionTitle": "7.5 センサー主導の回避行動",
    "bookSummary": "複雑な周期の障害物ほど、固定の `wait_tick(N)` を数えるより `is_spark_ahead()` で毎ティック判断する方がシンプルかつ確実です。",
    "bookKeyCode": "while !at_goal() {\n    if is_spark_ahead() { wait_tick(1); } else { step(); }\n}",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn main() {\n    while !at_goal() {\n        if is_spark_ahead() {\n            wait_tick(1);\n        } else {\n            step();\n        }\n    }\n}",
    "quickChips": [
      {
        "label": "if is_spark_ahead() { wait_tick(1); }",
        "insert": "if is_spark_ahead() {\n            wait_tick(1);\n        } else {\n            step();\n        }"
      }
    ],
    "hints": [
      "ゴールまで一直線だから、while !at_goal() の中で前だけ見ていれば大丈夫！",
      "is_spark_ahead() が true なら wait_tick(1)、false なら step() にしよう。",
      "while !at_goal() { if is_spark_ahead() { wait_tick(1); } else { step(); } }"
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
          "initialIndex": 0
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
          "initialIndex": 2
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "maxTicks": 11
    },
    "parTicks": 8
  },
  {
    "displayId": "2-54",
    "id": "bfea49b0-36d7-5f7d-bafb-9503964e90b0",
    "index": 82,
    "chapter": 2,
    "chapterTitle": "第2章 一般的なプログラミングの概念",
    "stageKind": "puzzle",
    "title": "2-54. 再帰関数でカウントダウン前進",
    "topicTag": "再帰呼び出し / fn",
    "kurumiIntro": "ループ（`for`/`loop`）を禁止…の代わりに自分自身を呼び出す「再帰関数」で歩いてみよう！スパークにぶつからないよう残り歩数 `n` を減らしながら進んでね。",
    "goalSummary": "再帰関数 march(n) でゴール (5, 1) まで歩ききろう",
    "bookSectionTitle": "7.3 関数応用 — 再帰（Recursion）",
    "bookSummary": "関数の中で自分自身を呼び出すことを再帰と言います。必ず終了条件（ベースケース：`if n <= 0 { return; }`）を先に書くのが鉄則です。",
    "bookKeyCode": "fn march(n: i32) {\n    if n <= 0 { return; }\n    ...\n    march(n - 1);\n}",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn march(n: i32) {\n    if n <= 0 {\n        return;\n    }\n    if is_spark_ahead() {\n        wait_tick(1);\n        march(n);\n        return;\n    }\n    step();\n    march(n - 1);\n}\n\nfn main() {\n    march(5);\n}",
    "quickChips": [
      {
        "label": "if is_spark_ahead()",
        "insert": "if is_spark_ahead() {\n        wait_tick(1);\n        march(n);\n        return;\n    }\n"
      },
      {
        "label": "march(n - 1);",
        "insert": "march(n - 1);"
      }
    ],
    "hints": [
      "fn march(n: i32) を作って、n <= 0 なら return; で終了させよう。",
      "is_spark_ahead() が true なら wait_tick(1); march(n); return;、安全なら step(); march(n - 1); を呼ぶ再帰にしよう！",
      "fn march(n: i32) {\n    if n <= 0 { return; }\n    if is_spark_ahead() {\n        wait_tick(1);\n        march(n);\n        return;\n    }\n    step();\n    march(n - 1);\n}\n\nfn main() {\n    march(5);\n}"
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
      "reachGoal": true
    },
    "parTicks": 7
  },
  {
    "displayId": "2-55",
    "id": "b1fe1c68-32ac-5c5a-a55e-6ac4b9d8b805",
    "index": 83,
    "chapter": 2,
    "chapterTitle": "第2章 一般的なプログラミングの概念",
    "stageKind": "puzzle",
    "title": "2-55. 関数でまとめる「安全前進」",
    "topicTag": "fn safe_step() / 関数設計",
    "kurumiIntro": "ゲートとスパークを見る共通処理を `fn safe_step()` として関数にまとめよう！`main()` から `safe_step();` を呼び出すだけでスッキリ解けるよ！",
    "goalSummary": "safe_step() 関数を定義してゴール (6, 1) まで自動走行しよう",
    "bookSectionTitle": "7.3 関数 — 重複処理を関数に切り出す",
    "bookSummary": "何度も使う安全チェックを `fn safe_step()` に関数化しておくと、メインの移動ロジックがとても読みやすくなります。",
    "bookKeyCode": "fn safe_step() {\n    while !is_gate_open() || is_spark_ahead() { wait_tick(1); }\n    step();\n}",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn safe_step() {\n    while !is_gate_open() || is_spark_ahead() {\n        wait_tick(1);\n    }\n    step();\n}\n\nfn main() {\n    while !at_goal() {\n        safe_step();\n    }\n}",
    "quickChips": [
      {
        "label": "while !is_gate_open() || is_spark_ahead()",
        "insert": "while !is_gate_open() || is_spark_ahead() {\n        wait_tick(1);\n    }\n    "
      }
    ],
    "hints": [
      "fn safe_step() を定義して、step() の前に while !is_gate_open() || is_spark_ahead() { wait_tick(1); } を入れよう！",
      "main() では while !at_goal() { safe_step(); } を回すだけでゴール (6, 1) まで自動走行できるよ。",
      "fn safe_step() {\n    while !is_gate_open() || is_spark_ahead() {\n        wait_tick(1);\n    }\n    step();\n}\n\nfn main() {\n    while !at_goal() {\n        safe_step();\n    }\n}"
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
        "x": 6,
        "y": 1
      },
      "gates": [
        {
          "x": 2,
          "y": 1,
          "openTicks": 1,
          "closedTicks": 2,
          "initialOffset": 1
        },
        {
          "x": 5,
          "y": 1,
          "openTicks": 2,
          "closedTicks": 2,
          "initialOffset": 0
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
      ]
    },
    "victoryCondition": {
      "reachGoal": true
    },
    "parTicks": 10
  },
  {
    "displayId": "2-56",
    "id": "2023e83c-b056-5e86-ab60-3eca6c8274e3",
    "index": 84,
    "chapter": 2,
    "chapterTitle": "第2章 一般的なプログラミングの概念",
    "stageKind": "puzzle",
    "title": "2-56. 座標ナビゲーション：障害物を避けろ",
    "topicTag": "bot_x/bot_y + is_wall_ahead",
    "kurumiIntro": "広い倉庫の真ん中に柱があるよ！`bot_x()` と `goal_x()` を見ながら、前が壁ならちょっと迂回してまた目的地の方へ戻る柔軟なコードを書いてみよう！",
    "goalSummary": "柱を避けながらゴール (5, 3) へ到達しよう",
    "bookSectionTitle": "7.5 制御フロー — 状態に応じた柔軟な移動",
    "bookSummary": "`while bot_x() < goal_x()` や `if is_wall_ahead()` を組み合わせると、障害物に出会ったときだけ避ける賢い動きが作れます。",
    "bookKeyCode": "while !at_goal() {\n    if is_wall_ahead() { ... } else { step(); }\n}",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn main() {\n    while !at_goal() {\n        if bot_y() < goal_y() && is_wall_ahead() {\n            turn_right();\n            step(2);\n            turn_left();\n        } else if is_wall_ahead() {\n            turn_right();\n        } else {\n            step();\n        }\n    }\n}",
    "quickChips": [
      {
        "label": "bot_y() < goal_y()",
        "insert": "bot_y() < goal_y()"
      },
      {
        "label": "is_wall_ahead()",
        "insert": "is_wall_ahead()"
      },
      {
        "label": "turn_right(); step(2); turn_left();",
        "insert": "turn_right();\n            step(2);\n            turn_left();"
      }
    ],
    "hints": [
      "右に進んで壁(2,1)にぶつかったとき、ゴールはもっと下（bot_y() < goal_y()）にあるよね！",
      "右折して2歩南へ(y=3)降り、左折して東向きに戻れば、あとは真っ直ぐ (5,3) へ進めるよ！",
      "while !at_goal() { if bot_y() < goal_y() && is_wall_ahead() { turn_right(); step(2); turn_left(); } else { step(); } }"
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
          "x": 2,
          "y": 2
        },
        {
          "x": 3,
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
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "maxTicks": 10
    },
    "parTicks": 10
  },
  {
    "displayId": "2-57",
    "id": "53885462-a93f-54f8-8960-c522c6a58d68",
    "index": 85,
    "chapter": 2,
    "chapterTitle": "第2章 一般的なプログラミングの概念",
    "stageKind": "puzzle",
    "title": "2-57. 分岐スイッチとコンベアの最適選択",
    "topicTag": "関数 + 経路判断",
    "kurumiIntro": "上下にコンベアがあるけれど、先に上のスイッチを踏まないとゲートが開かないよ！関数 `step_safe(n: i32)` を使って最短で回ろう。",
    "goalSummary": "スイッチを踏んで開いたゲートを通り、12ティック以内にゴール (6, 3) へ",
    "bookSectionTitle": "7.3 & 7.5 パラメータ化と最適化",
    "bookSummary": "繰り返し安全移動を行う補助関数 `step_safe(n)` を用意しておくと、迷路やスイッチ回収のコーディング速度が一気に上がります。",
    "bookKeyCode": "fn step_safe(n: i32) {\n    for _ in 0..n { while !is_gate_open() { wait_tick(1); } step(); }\n}",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn step_safe(n: i32) {\n    for _ in 0..n {\n        while is_spark_ahead() || !is_gate_open() {\n            wait_tick(1);\n        }\n        step();\n    }\n}\n\nfn main() {\n    step_safe(3);\n    turn_right();\n    step_safe(2);\n    turn_left();\n    step_safe(2);\n}",
    "quickChips": [
      {
        "label": "step_safe(3);",
        "insert": "step_safe(3);\n    "
      },
      {
        "label": "step_safe(2);",
        "insert": "step_safe(2);\n    "
      }
    ],
    "hints": [
      "スパークとゲートを待つ fn step_safe(n: i32) を作るとスッキリ書けるよ！(0,1) から東へ3歩でスイッチ(3,1)を踏めるよ。",
      "右折して南へ2歩で (3,3) へ降り、左折して東へ2歩進むとコンベア(4,3)に乗れて (6,3) に着くよ！",
      "fn step_safe(n: i32) {\n    for _ in 0..n {\n        while is_spark_ahead() || !is_gate_open() { wait_tick(1); }\n        step();\n    }\n}\n\nfn main() {\n    step_safe(3);\n    turn_right();\n    step_safe(2);\n    turn_left();\n    step_safe(2);\n}"
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
        "y": 1,
        "dir": 0
      },
      "goal": {
        "x": 6,
        "y": 3
      },
      "switches": [
        {
          "x": 3,
          "y": 1
        }
      ],
      "conveyors": [
        {
          "x": 4,
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
          "initialIndex": 0
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "requireAllSwitches": true,
      "maxTicks": 12
    },
    "parTicks": 10
  },
  {
    "displayId": "2-58",
    "id": "579eaabd-ccfa-592c-8925-f3d8e7a3d5cc",
    "index": 86,
    "chapter": 2,
    "chapterTitle": "第2章 一般的なプログラミングの概念",
    "stageKind": "challenge",
    "title": "2-58. スパーク迷路の完全自律探索",
    "topicTag": "自律迷路 + スパーク回避",
    "kurumiIntro": "左手法の迷路の中に巡回スパークがいる難関パズルだよ！ターンする前の安全確認も含めて、汎用迷路ソルバーを完成させよう！",
    "goalSummary": "左手法＋スパーク待機で迷路のゴール (5, 5) へ到達しよう",
    "bookSectionTitle": "7.5 総合チャレンジ — 自律ロボットの完全制御",
    "bookSummary": "「今向いている先が安全なら進む」「左が空いていて安全なら左折する」と手順を整理すれば、危険な迷路も1つのループで走破できます。",
    "bookKeyCode": "if is_spark_ahead() { wait_tick(1); }",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn main() {\n    loop {\n        if at_goal() {\n            break;\n        }\n        if !is_wall_left() {\n            turn_left();\n            while is_spark_ahead() {\n                wait_tick(1);\n            }\n            step();\n        } else if !is_wall_ahead() {\n            while is_spark_ahead() {\n                wait_tick(1);\n            }\n            step();\n        } else {\n            turn_right();\n        }\n    }\n}",
    "quickChips": [
      {
        "label": "while is_spark_ahead() { wait_tick(1); }",
        "insert": "while is_spark_ahead() { wait_tick(1); }\n            "
      },
      {
        "label": "!is_wall_left()",
        "insert": "!is_wall_left()"
      },
      {
        "label": "!is_wall_ahead()",
        "insert": "!is_wall_ahead()"
      }
    ],
    "hints": [
      "左折や前進を決めたあと、実際に `step()` する直前に `while is_spark_ahead() { wait_tick(1); }` を入れると絶対安全になるよ！",
      "あとは普通の左手法（!is_wall_left() → 左折＆前進、else if !is_wall_ahead() → 前進、else → 右折）と同じだよ。",
      "if !is_wall_left() { turn_left(); while is_spark_ahead() { wait_tick(1); } step(); } else if !is_wall_ahead() { while is_spark_ahead() { wait_tick(1); } step(); } else { turn_right(); }"
    ],
    "worldSetup": {
      "width": 7,
      "height": 7,
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
          "x": 5,
          "y": 2
        },
        {
          "x": 6,
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
          "x": 6,
          "y": 4
        },
        {
          "x": 0,
          "y": 5
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 6,
          "y": 5
        },
        {
          "x": 0,
          "y": 6
        },
        {
          "x": 1,
          "y": 6
        },
        {
          "x": 2,
          "y": 6
        },
        {
          "x": 3,
          "y": 6
        },
        {
          "x": 4,
          "y": 6
        },
        {
          "x": 5,
          "y": 6
        },
        {
          "x": 6,
          "y": 6
        }
      ],
      "botStart": {
        "x": 0,
        "y": 1,
        "dir": 0
      },
      "goal": {
        "x": 5,
        "y": 5
      },
      "sparks": [
        {
          "id": "sp1",
          "path": [
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
            }
          ],
          "initialIndex": 1
        },
        {
          "id": "sp2",
          "path": [
            {
              "x": 3,
              "y": 3
            },
            {
              "x": 4,
              "y": 3
            },
            {
              "x": 3,
              "y": 3
            },
            {
              "x": 3,
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
    "parTicks": 18
  },
  {
    "displayId": "2-59",
    "id": "4197175c-0415-5922-90de-969c839b1e44",
    "index": 87,
    "chapter": 2,
    "chapterTitle": "第2章 一般的なプログラミングの概念",
    "title": "2-59. 第2章まとめ：3ゲート＋金庫パズル",
    "topicTag": "第2章 総合実践",
    "kurumiIntro": "第2章の総決算！関数・ループ・条件分岐・`mut` 変数をすべて組み合わせて、通過ゲート数を金庫に報告しながら3つのゲートを突破しよう！",
    "goalSummary": "ゲートを3回越えて金庫⚡3を満たし、ゴール (6, 1) へ",
    "bookSectionTitle": "第2章まとめ — 変数・型・関数・制御フローの統合",
    "bookSummary": "これまでに学んだ `let mut`・`fn`・`if/else`・`loop/while` を組み合わせれば、どんな長距離ルートや安全装置も自在に書けます。",
    "bookKeyCode": "while !at_goal() {\n    if is_gate_open() { step(); } else { wait_tick(1); }\n}",
    "starterCode": "fn pass_all_gates() {\n    while !at_goal() {\n        if is_gate_open() {\n            step();\n        } else {\n            wait_tick(1);\n        }\n    }\n}\n\nfn main() {\n    let mut count = 0;\n    for _ in 0..3 {\n        count += 1;\n    }\n    // 金庫に count を預けてから pass_all_gates() を呼ぼう！\n    \n}",
    "solutionCode": "fn pass_all_gates() {\n    while !at_goal() {\n        if is_gate_open() {\n            step();\n        } else {\n            wait_tick(1);\n        }\n    }\n}\n\nfn main() {\n    let mut count = 0;\n    for _ in 0..3 {\n        count += 1;\n    }\n    add_vault(count);\n    pass_all_gates();\n}",
    "quickChips": [
      {
        "label": "add_vault(count);",
        "insert": "add_vault(count);\n    "
      },
      {
        "label": "pass_all_gates();",
        "insert": "pass_all_gates();\n    "
      }
    ],
    "hints": [
      "count は 3 になっているよ。これを add_vault(count); で金庫へ送ろう！",
      "そのあと pass_all_gates(); を呼べば自動で3つのゲートを越えてゴールするよ！",
      "add_vault(count);\npass_all_gates();"
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
          "x": 5,
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
          "x": 5,
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
        "x": 6,
        "y": 1
      },
      "gates": [
        {
          "x": 1,
          "y": 1,
          "openTicks": 2,
          "closedTicks": 2,
          "initialOffset": 1
        },
        {
          "x": 3,
          "y": 1,
          "openTicks": 2,
          "closedTicks": 2,
          "initialOffset": 2
        },
        {
          "x": 5,
          "y": 1,
          "openTicks": 2,
          "closedTicks": 2,
          "initialOffset": 0
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
      "vaultTarget": 3
    },
    "parTicks": 10
  },
  {
    "displayId": "2-60",
    "id": "11fd22c0-1961-540b-be16-d1db794f6ffc",
    "index": 88,
    "chapter": 2,
    "chapterTitle": "第2章 一般的なプログラミングの概念",
    "stageKind": "challenge",
    "title": "2-60. 第2章マスター：からくり迷宮大脱出",
    "topicTag": "第2章最終チャレンジ",
    "kurumiIntro": "第2章の総仕上げ！スイッチで鍵を開け、コンベアで加速し、周期ゲートとスパークを見極めてゴールへ向かう迷宮を自分の関数とループで突破しよう！",
    "goalSummary": "\"CH3 MASTER\" を出力し、全スイッチを踏んでゴール (6, 4) へ",
    "bookSectionTitle": "7.5 第2章マスター — 変数・関数・制御フローの集大成",
    "bookSummary": "これまで学んだ変数・計算・関数・分岐・ループ・センサーのすべてを動員して攻略する第2章の最終試験です。",
    "bookKeyCode": "fn step_safe() { ... }",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn step_safe() {\n    while !is_gate_open() || is_spark_ahead() {\n        wait_tick(1);\n    }\n    step();\n}\n\nfn main() {\n    println!(\"CH3 MASTER\");\n    step_safe();\n    step_safe();\n    turn_right();\n    step_safe();\n    step_safe();\n    turn_left();\n    while !at_goal() {\n        step_safe();\n    }\n}",
    "quickChips": [
      {
        "label": "step_safe();",
        "insert": "step_safe();\n    "
      },
      {
        "label": "while !at_goal() { step_safe(); }",
        "insert": "while !at_goal() {\n        step_safe();\n    }"
      }
    ],
    "hints": [
      "まずはスパークとゲートを待つ fn step_safe() を作ろう。(0,1) から東へ2回でスイッチ(2,1)を踏むよ。",
      "右折して南へ2回で (2,3)→南コンベアで(2,4)に着くから、左折して while !at_goal() { step_safe(); } でゲートとスパークを安全突破！\"CH3 MASTER\" の出力も忘れずに！",
      "fn step_safe() {\n    while !is_gate_open() || is_spark_ahead() { wait_tick(1); }\n    step();\n}\n\nfn main() {\n    println!(\"CH3 MASTER\");\n    step_safe();\n    step_safe();\n    turn_right();\n    step_safe();\n    step_safe();\n    turn_left();\n    while !at_goal() { step_safe(); }\n}"
    ],
    "worldSetup": {
      "width": 7,
      "height": 6,
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
          "x": 6,
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
          "x": 0,
          "y": 5
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 6,
          "y": 5
        }
      ],
      "botStart": {
        "x": 0,
        "y": 1,
        "dir": 0
      },
      "goal": {
        "x": 6,
        "y": 4
      },
      "switches": [
        {
          "x": 2,
          "y": 1
        }
      ],
      "conveyors": [
        {
          "x": 2,
          "y": 3,
          "dir": 1
        }
      ],
      "gates": [
        {
          "x": 3,
          "y": 4,
          "openTicks": 1,
          "closedTicks": 0,
          "linkedSwitch": {
            "x": 2,
            "y": 1
          }
        }
      ],
      "sparks": [
        {
          "id": "sp1",
          "path": [
            {
              "x": 4,
              "y": 3
            },
            {
              "x": 4,
              "y": 4
            },
            {
              "x": 4,
              "y": 5
            },
            {
              "x": 4,
              "y": 4
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
        "CH3 MASTER"
      ],
      "maxTicks": 15
    },
    "parTicks": 13
  }
];
