import { StageDefinition } from '../types/game';

export const CHAPTER_13_STAGES: StageDefinition[] = [
  {
    "displayId": "13-1",
    "id": "f1594c5f-7e74-5a6c-858d-2a806801e85a",
    "index": 281,
    "chapter": 13,
    "chapterTitle": "第13章 イテレータとクロージャ",
    "title": "13-1. クロージャー |x| と環境キャプチャ",
    "topicTag": "クロージャー |x|",
    "kurumiIntro": "クロージャーの課題へようこそ！その場で作れる小さな無名関数「クロージャー `|x| ...`」は、まわりの変数もそのまま捕まえて使えるんだよ！",
    "goalSummary": "クロージャー calc で 3 を計算してゴール (3, 1) へ",
    "bookSectionTitle": "13.1 クロージャー: 環境をキャプチャする匿名関数",
    "bookSummary": "`let add_bonus = |x| x + bonus;` のように `|引数|` で書く無名関数がクロージャーです。外側の変数（`bonus`）を自動で取り込んで使えます。",
    "bookKeyCode": "let bonus = 2;\nlet calc = |x| x + bonus;",
    "starterCode": "fn main() {\n    let bonus = 2;\n    // 外の変数 bonus を使うクロージャーを書こう！\n    let calc = |x| x;\n    step(calc(1));\n}",
    "solutionCode": "fn main() {\n    let bonus = 2;\n    let calc = |x| x + bonus;\n    step(calc(1));\n}",
    "quickChips": [
      {
        "label": "|x| x + bonus",
        "insert": "|x| x + bonus"
      }
    ],
    "hints": [
      "calc(1) が 3 になるように、bonus（2）を足してみよう！",
      "let calc = |x| x + bonus; に書き換えれば完成だよ。",
      "let calc = |x| x + bonus;"
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
    "displayId": "13-2",
    "id": "8e873b83-e9e8-50cc-b7e6-cbc2226e18e1",
    "index": 282,
    "chapter": 13,
    "chapterTitle": "第13章 イテレータとクロージャ",
    "title": "13-2. 複数引数・ブロック付きクロージャー",
    "topicTag": "|a, b| { ... }",
    "kurumiIntro": "クロージャーには引数も複数渡せて、`{ ... }` で複数行の処理も書けるんだ！移動と充電をまとめたクロージャーを作ってみよう。",
    "goalSummary": "クロージャー run_leg(3, 2) で金庫⚡5＋ゴール (3, 3) へ",
    "bookSectionTitle": "13.1 クロージャーの多様な記法",
    "bookSummary": "1行で済むときは `|x| x + 1`、複数の文を書きたいときは `|a, b| { ... }` のように波カッコで囲みます。",
    "bookKeyCode": "let run_leg = |dx, dy| {\n    step(dx); turn_right(); step(dy);\n};",
    "starterCode": "fn main() {\n    let run_leg = |dx, dy| {\n        add_vault(dx + dy);\n        step(dx);\n        turn_right();\n        // あと dy 歩進んでゴール (3, 3) へ！\n        \n    };\n    run_leg(3, 2);\n}",
    "solutionCode": "fn main() {\n    let run_leg = |dx, dy| {\n        add_vault(dx + dy);\n        step(dx);\n        turn_right();\n        step(dy);\n    };\n    run_leg(3, 2);\n}",
    "quickChips": [
      {
        "label": "step(dy);",
        "insert": "step(dy);\n    "
      }
    ],
    "hints": [
      "run_leg(3, 2) を呼ぶと、まず金庫に 3 + 2 = 5 が入り、東へ3歩進んで右を向くよ。",
      "turn_right(); のあとに step(dy); を書き足そう！",
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
      "vault": {
        "x": 2,
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
    "displayId": "13-3",
    "id": "8e146ba4-7fe7-51b3-a24f-8f16f3c60bad",
    "index": 283,
    "chapter": 13,
    "chapterTitle": "第13章 イテレータとクロージャ",
    "title": "13-3. クロージャーで計算レシピを切り替え",
    "topicTag": "クロージャーによる処理切替",
    "kurumiIntro": "同じ配列 `[1, 2]` でも、渡すクロージャーを変えるだけで違う計算結果が作れるよ！`double` と `plus_one` の2つのクロージャーを使い分けよう。",
    "goalSummary": "2つのクロージャーの結果を合わせて金庫⚡4＋ゴール (4, 1) へ",
    "bookSectionTitle": "13.1 関数型スタイルのクロージャー活用",
    "bookSummary": "小さな変換ロジックをクロージャー変数として用意しておくと、処理の組み立てがとても柔軟になります。",
    "bookKeyCode": "let mul2 = |x| x * 2;\nlet add1 = |x| x + 1;",
    "starterCode": "fn main() {\n    let mul2 = |x| x * 2;\n    let add1 = |x| x + 1;\n    // mul2(1) は 2、add1(1) も 2 だね。2つを足すと 4 になるよ！\n    let steps = mul2(1) + 0;\n    add_vault(steps);\n    step(steps);\n}",
    "solutionCode": "fn main() {\n    let mul2 = |x| x * 2;\n    let add1 = |x| x + 1;\n    let steps = mul2(1) + add1(1);\n    add_vault(steps);\n    step(steps);\n}",
    "quickChips": [
      {
        "label": "add1(1)",
        "insert": "add1(1)"
      }
    ],
    "hints": [
      "今は `mul2(1) + 0` だから steps が 2 にしかならないよ！",
      "0 の部分を `add1(1)` に変えて 2 + 2 = 4 にしよう。",
      "let steps = mul2(1) + add1(1);"
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
    "displayId": "13-4",
    "id": "59f2ca3c-3c77-5b12-8f66-474c041a5c99",
    "index": 284,
    "chapter": 13,
    "chapterTitle": "第13章 イテレータとクロージャ",
    "stageKind": "puzzle",
    "title": "13-4. 空間ルール対応！クロージャーでコア輸送",
    "topicTag": "クロージャー + 空間コア納品",
    "kurumiIntro": "拾う→検査→強化→納品の工程をクロージャーと組み合わせて実行しよう！位置チェックが有効だから、それぞれの設備タイルの真上で実行してね。",
    "goalSummary": "検査台・強化台・納品台のルールを守ってコア⚡4+を納品",
    "bookSectionTitle": "13.1 工程ステップと所有権・可変借用",
    "bookSummary": "クロージャーで定型移動をまとめつつ、コアの借用 `&c`・`&mut c`・所有権移動 `deliver(c)` の順を空間レイアウトに合わせて組み立てます。",
    "bookKeyCode": "let go1 = || step(1); scan(&c); boost(&mut c); deliver(c);",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn main() {\n    let advance = || step(1);\n    advance();\n    let mut c = grab_core();\n    advance();\n    scan(&c);\n    advance();\n    boost(&mut c);\n    advance();\n    deliver(c);\n}",
    "quickChips": [
      {
        "label": "boost(&mut c);",
        "insert": "boost(&mut c);\n    "
      }
    ],
    "hints": [
      "検査台 (2, 1)・強化台 (3, 1)・納品台 (4, 1) でそれぞれの設備コマンドを実行しよう。初期パワー⚡2を⚡4以上にして納品するのが目標だよ。",
      "`let advance = || step(1);` のように前進クロージャーを作り、`advance()`→`grab_core()`→`advance()`→`scan(&c)`→`advance()`→`boost(&mut c)`→`advance()`→`deliver(c)` を実行しよう。",
      "fn main() {\n    let advance = || step(1);\n    advance();\n    let mut c = grab_core();\n    advance();\n    scan(&c);\n    advance();\n    boost(&mut c);\n    advance();\n    deliver(c);\n}"
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
          "label": "流線コア"
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
      "minCorePower": 4,
      "scanCount": 1,
      "requireSpatialCoreRules": true
    },
    "parTicks": 10
  },
  {
    "displayId": "13-5",
    "id": "d5ffd4a2-ae06-583a-b3cd-422db5999170",
    "index": 285,
    "chapter": 13,
    "chapterTitle": "第13章 イテレータとクロージャ",
    "stageKind": "puzzle",
    "title": "13-5. 安全航行クロージャーと6マス往復スパーク",
    "topicTag": "クロージャー + スパーク回避",
    "kurumiIntro": "通路の真ん中を縦に往復するスパークを避けながら、スイッチを踏んでゲート先へ進むクロージャー `safe_walk` を作ろう！",
    "goalSummary": "クロージャー内でスパーク・ゲートを両方警戒してゴール (5, 1) へ",
    "bookSectionTitle": "13.1 手順抽象化クロージャーによる反復制御",
    "bookSummary": "安全確認付きの1歩移動を無名クロージャー `safe_walk` にまとめてループ実行すれば、見通しの良い安全制御が書けます。",
    "bookKeyCode": "let safe_walk = || { while is_spark_ahead() || !is_gate_open() { wait_tick(1); } step(); };",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn main() {\n    let safe_walk = || {\n        while is_spark_ahead() || !is_gate_open() {\n            wait_tick(1);\n        }\n        step();\n    };\n    for _ in 0..5 {\n        safe_walk();\n    }\n}",
    "quickChips": [
      {
        "label": "is_spark_ahead() || !is_gate_open()",
        "insert": "is_spark_ahead() || !is_gate_open()"
      }
    ],
    "hints": [
      "通路 (2, 1) を縦に往復するスパークと連動ゲートを避けながら、計5歩進んでスイッチを踏み (5, 1) ゴールへ到達しよう。",
      "`let safe_walk = || { while is_spark_ahead() || !is_gate_open() { wait_tick(1); } step(); };` をクロージャーで定義し、`for _ in 0..5 { safe_walk(); }` で進もう。",
      "fn main() {\n    let safe_walk = || {\n        while is_spark_ahead() || !is_gate_open() {\n            wait_tick(1);\n        }\n        step();\n    };\n    for _ in 0..5 {\n        safe_walk();\n    }\n}"
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
          "initialIndex": 3
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "requireAllSwitches": true
    },
    "parTicks": 8
  },
  {
    "displayId": "13-6",
    "id": "2a6b45cc-30f6-5670-9d6b-7e9f85509232",
    "index": 286,
    "chapter": 13,
    "chapterTitle": "第13章 イテレータとクロージャ",
    "stageKind": "puzzle",
    "title": "13-6. 右手法迷路ランナーをクロージャーで作る",
    "topicTag": "クロージャー + 左手法迷路",
    "kurumiIntro": "迷路を解く1サイクル分の判断ロジックをクロージャー `maze_tick` にまとめて `while !at_goal()` で回そう！途中でスイッチも踏んでいくよ。",
    "goalSummary": "左手法クロージャーでスイッチ(3, 1)を踏み (3, 3) へ到達",
    "bookSectionTitle": "13.1 状態判定クロージャーの反復利用",
    "bookSummary": "迷路の1ステップ分の自律判断をクロージャーに切り出すと、メインループが驚くほど読みやすくなります。",
    "bookKeyCode": "while !at_goal() { maze_tick(); }",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn main() {\n    let maze_tick = || {\n        if !is_wall_left() {\n            turn_left();\n            step();\n        } else if !is_wall_ahead() {\n            step();\n        } else {\n            turn_right();\n        }\n    };\n    while !at_goal() {\n        maze_tick();\n    }\n}",
    "quickChips": [
      {
        "label": "turn_right();",
        "insert": "turn_right();"
      }
    ],
    "hints": [
      "左手法（左が空いていれば左折して1歩→前が空いていれば1歩→行き止まりなら右折）でスイッチを踏みながら迷路のゴール (3, 3) へ進もう。",
      "`let maze_tick = || { if !is_wall_left() { turn_left(); step(); } else if !is_wall_ahead() { step(); } else { turn_right(); } };` を `while !at_goal()` で回そう。",
      "fn main() {\n    let maze_tick = || {\n        if !is_wall_left() {\n            turn_left();\n            step();\n        } else if !is_wall_ahead() {\n            step();\n        } else {\n            turn_right();\n        }\n    };\n    while !at_goal() {\n        maze_tick();\n    }\n}"
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
          "x": 4,
          "y": 2
        },
        {
          "x": 4,
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
          "x": 2,
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
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "requireAllSwitches": true
    },
    "parTicks": 7
  },
  {
    "displayId": "13-7",
    "id": "e2bd512f-e44e-578d-9846-2df1fac16e1c",
    "index": 287,
    "chapter": 13,
    "chapterTitle": "第13章 イテレータとクロージャ",
    "title": "13-7. ゼロコストでループとクロージャーを組み合わせ",
    "topicTag": "クロージャー + ゲート待ち",
    "kurumiIntro": "蒸気ゲートの前を通過するミニ手順をクロージャー `safe_step` に閉じ込めて、`for _ in 0..4 { safe_step(); }` で呼んでみよう！",
    "goalSummary": "クロージャー safe_step でゲート (2, 1) を抜け (4, 1) へ",
    "bookSectionTitle": "13.1 & 13.4 パフォーマンスとクロージャー抽象",
    "bookSummary": "クロージャーに手順をまとめてもRustはゼロコストでインライン展開するため、読みやすさと高速さを両立できます。",
    "bookKeyCode": "let safe_step = || { if !is_gate_open() { wait_tick(1); } step(); };",
    "starterCode": "fn main() {\n    let safe_step = || {\n        if !is_gate_open() {\n            // ゲートが開くまで 1拍待とう！\n            \n        }\n        step();\n    };\n    for _ in 0..4 {\n        safe_step();\n    }\n}",
    "solutionCode": "fn main() {\n    let safe_step = || {\n        if !is_gate_open() {\n            wait_tick(1);\n        }\n        step();\n    };\n    for _ in 0..4 {\n        safe_step();\n    }\n}",
    "quickChips": [
      {
        "label": "wait_tick(1);",
        "insert": "wait_tick(1);"
      }
    ],
    "hints": [
      "(2, 1) の蒸気ゲートに着いたとき、最初は閉まっているタイミングだよ！",
      "if !is_gate_open() { ... } の中に wait_tick(1); を入れよう。",
      "if !is_gate_open() {\n    wait_tick(1);\n}"
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
    "displayId": "13-8",
    "id": "3c608b20-614b-5590-b0a8-3b0e88916620",
    "index": 288,
    "chapter": 13,
    "chapterTitle": "第13章 イテレータとクロージャ",
    "title": "13-8. イテレーター連鎖（filter / map / sum）",
    "topicTag": "iter().filter().map()",
    "kurumiIntro": "ベルトコンベアから来たパーツ `[5, 10, 20]` の中から、10以上だけを選んで10で割って合計しよう！イテレーターの連鎖は超爽快だよ！",
    "goalSummary": "filter と map と sum で⚡3を作ってゴールへ",
    "bookSectionTitle": "13.2 イテレーターで一連の要素を処理する",
    "bookSummary": "`.iter().filter(|x| ...).map(|x| ...).sum()` のようにメソッドをつなげると、ループを書かなくても安全かつ高速にデータを加工・集計できます。",
    "bookKeyCode": "batch.iter().filter(|x| x >= 10).map(|x| x / 10).sum()",
    "starterCode": "fn main() {\n    let batch = conveyor_batch();\n    // batch = [5, 10, 20]\n    // 10以上を選んで 10で割って sum() すると 1 + 2 = 3 になるよ！\n    let total = batch\n        .iter()\n        .filter(|x| x >= 100)\n        .map(|x| x / 10)\n        .sum();\n    add_vault(total);\n    step(3);\n}",
    "solutionCode": "fn main() {\n    let batch = conveyor_batch();\n    let total = batch\n        .iter()\n        .filter(|x| x >= 10)\n        .map(|x| x / 10)\n        .sum();\n    add_vault(total);\n    step(3);\n}",
    "quickChips": [
      {
        "label": "x >= 10",
        "insert": "x >= 10"
      }
    ],
    "hints": [
      "filter の条件が `x >= 100` だと何も残らなくて total が 0 になっちゃうよ！",
      "`x >= 10` に変えると 10 と 20 が選ばれて、10で割った合計が 3 になるよ。",
      ".filter(|x| x >= 10)"
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
      "conveyorItems": [
        5,
        10,
        20
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
    "parTicks": 4
  },
  {
    "displayId": "13-9",
    "id": "369417a9-c001-5e62-9e19-8b7764132ded",
    "index": 289,
    "chapter": 13,
    "chapterTitle": "第13章 イテレータとクロージャ",
    "title": "13-9. map().collect() で新しいリストを作る",
    "topicTag": "map() / collect()",
    "kurumiIntro": "イテレーターで加工した結果を `.collect()` で新しい `Vec` リストにまとめよう！2倍にした歩数リストで一気にゴールまで進むよ。",
    "goalSummary": "map(|x| x * 2).collect() のリストで 4歩進み (4, 1) へ",
    "bookSectionTitle": "13.2 イテレーターを消費してコレクションを作る collect()",
    "bookSummary": "`map` などのアダプタは「遅延評価」で、`.sum()` や `.collect()` を呼んだ瞬間に実際に処理が走って結果が組み立てられます。",
    "bookKeyCode": "let doubled: Vec<i32> = list.iter().map(|x| x * 2).collect();",
    "starterCode": "fn main() {\n    let base = vec![1, 1];\n    // それぞれ 2倍にして collect() すると [2, 2] になるよ！\n    let steps: Vec<i32> = base.iter().map(|x| x).collect();\n    for s in steps {\n        step(s);\n    }\n}",
    "solutionCode": "fn main() {\n    let base = vec![1, 1];\n    let steps: Vec<i32> = base.iter().map(|x| x * 2).collect();\n    for s in steps {\n        step(s);\n    }\n}",
    "quickChips": [
      {
        "label": "x * 2",
        "insert": "x * 2"
      }
    ],
    "hints": [
      "今は map(|x| x) だから [1, 1] のままで合計 2歩しか進まないよ。",
      "map(|x| x * 2) に直すと [2, 2] になって合計 4歩進めるよ！",
      "let steps: Vec<i32> = base.iter().map(|x| x * 2).collect();"
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
    "displayId": "13-10",
    "id": "764fd1a2-ae86-530d-937d-be03f7ec61f9",
    "index": 290,
    "chapter": 13,
    "chapterTitle": "第13章 イテレータとクロージャ",
    "title": "13-10. 環境変数をキャプチャする filter 条件",
    "topicTag": "環境キャプチャ + filter",
    "kurumiIntro": "外側の変数 `min_power` を `filter(|x| x >= min_power)` の中にキャプチャして使おう！基準以上の部品だけ選んで金庫とL字移動に使うよ。",
    "goalSummary": "min_power=3 以上の合計⚡7を金庫に入れ、L字ゴール (3, 2) へ",
    "bookSectionTitle": "13.2 環境をキャプチャするクロージャーと filter",
    "bookSummary": "イテレーターの `.filter(...)` へ渡すクロージャーは外側のローカル変数を自然に参照できるため、しきい値を動的に変えた検索も簡単です。",
    "bookKeyCode": "let limit = 3;\nitems.iter().filter(|x| x >= limit).sum()",
    "starterCode": "fn main() {\n    let batch = conveyor_batch(); // [1, 3, 4]\n    let min_power = 3;\n    // min_power 以上の要素だけ選んで合計しよう（3 + 4 = 7）！\n    let sum_ok = batch.iter().filter(|x| x >= 99).sum();\n    add_vault(sum_ok);\n    step(3);\n    turn_right();\n    step(1);\n}",
    "solutionCode": "fn main() {\n    let batch = conveyor_batch();\n    let min_power = 3;\n    let sum_ok = batch.iter().filter(|x| x >= min_power).sum();\n    add_vault(sum_ok);\n    step(3);\n    turn_right();\n    step(1);\n}",
    "quickChips": [
      {
        "label": "x >= min_power",
        "insert": "x >= min_power"
      }
    ],
    "hints": [
      "filter の条件が `x >= 99` だと空っぽになって sum_ok が 0 になっちゃうよ！",
      "x >= min_power に直すと 3 と 4 が選ばれて合計 7 になるよ。",
      "let sum_ok = batch.iter().filter(|x| x >= min_power).sum();"
    ],
    "worldSetup": {
      "width": 5,
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
        }
      ],
      "botStart": {
        "x": 0,
        "y": 1,
        "dir": 0
      },
      "goal": {
        "x": 3,
        "y": 2
      },
      "conveyorItems": [
        1,
        3,
        4
      ],
      "vault": {
        "x": 2,
        "y": 0,
        "initial": 0,
        "target": 7
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "vaultTarget": 7
    },
    "parTicks": 6
  },
  {
    "displayId": "13-11",
    "id": "672ad5a0-6da4-58d4-b72a-407876b2bd76",
    "index": 291,
    "chapter": 13,
    "chapterTitle": "第13章 イテレータとクロージャ",
    "stageKind": "puzzle",
    "title": "13-11. キャプチャした倍率で全スイッチUターン",
    "topicTag": "環境キャプチャ + U字スイッチ",
    "kurumiIntro": "クロージャー `calc_vault` が外側の `scale` 変数をキャプチャして金庫値を計算！2つのスイッチを両方踏んでU字折り返しゴールを目指そう。",
    "goalSummary": "scale=3 をキャプチャして金庫⚡9＋全スイッチ＋(1, 3) へ",
    "bookSectionTitle": "13.1 読み取りキャプチャと再利用",
    "bookSummary": "不変な環境変数をキャプチャしたクロージャーは何度でも呼び出せ、設定値を使った計算を一貫させられます。",
    "bookKeyCode": "let scale = 3;\nlet mul = |x| x * scale;",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn main() {\n    let scale = 3;\n    let calc_vault = |x| x * scale;\n    let batch = conveyor_batch();\n    let total: i32 = batch.iter().map(calc_vault).sum();\n    add_vault(total);\n    step(3);\n    turn_right();\n    step(2);\n    turn_right();\n    step(2);\n}",
    "quickChips": [
      {
        "label": "|x| x * scale",
        "insert": "|x| x * scale"
      }
    ],
    "hints": [
      "`conveyor_batch()` の各値に倍率 `scale = 3` を掛けて合計（(1+2)*3 = ⚡9）し、東へ3歩・南へ2歩・西へ2歩のU字ルートで2スイッチと (1, 3) ゴールを通ろう。",
      "`let scale = 3; let calc_vault = |x| x * scale;` で外側の `scale` をキャプチャし、`conveyor_batch().iter().map(calc_vault).sum()` を `add_vault` しよう。",
      "fn main() {\n    let scale = 3;\n    let calc_vault = |x| x * scale;\n    let batch = conveyor_batch();\n    let total: i32 = batch.iter().map(calc_vault).sum();\n    add_vault(total);\n    step(3);\n    turn_right();\n    step(2);\n    turn_right();\n    step(2);\n}"
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
        "x": 1,
        "y": 3
      },
      "conveyorItems": [
        1,
        2
      ],
      "switches": [
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 3,
          "y": 3
        }
      ],
      "gates": [
        {
          "x": 2,
          "y": 3,
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
        "target": 9
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "vaultTarget": 9,
      "requireAllSwitches": true
    },
    "parTicks": 12
  },
  {
    "displayId": "13-12",
    "id": "47adfe78-09fd-5ac3-9880-71e6629c4bb8",
    "index": 292,
    "chapter": 13,
    "chapterTitle": "第13章 イテレータとクロージャ",
    "stageKind": "puzzle",
    "title": "13-12. map().collect() でL字コマンド列を生成",
    "topicTag": "iter().map().collect() + ダイヤル",
    "kurumiIntro": "イテレーターの `.map(...).collect()` で作った新しい `Vec` を走らせてL字ルートを進み、途中にある金庫と秘密ダイヤルも一気にクリアしよう！",
    "goalSummary": "collect() した配列でL字移動＋ダイヤル(6)＋金庫⚡6＋(4, 3) へ",
    "bookSectionTitle": "13.2 イテレーターからコレクションへの変換",
    "bookSummary": "加工後のデータを `.collect()` で `Vec<i32>` に確定させてから順番に消費すれば、ルート計算と実行を綺麗に分離できます。",
    "bookKeyCode": "let legs: Vec<i32> = raw.iter().map(|x| x * 2).collect();",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn main() {\n    let raw = vec![2, 1];\n    let legs: Vec<i32> = raw.iter().map(|x| x * 2).collect();\n    let code = legs[0] + legs[1];\n    try_dial(code);\n    add_vault(code);\n    step(legs[0]);\n    turn_right();\n    step(legs[1]);\n}",
    "quickChips": [
      {
        "label": ".map(|x| x * 2)",
        "insert": ".map(|x| x * 2)"
      }
    ],
    "hints": [
      "`vec![2, 1]` を2倍の `[4, 2]` に変換すれば、合計 6 でダイヤル(6)・金庫⚡6が揃い、東4歩→右折→南2歩のL字ルートで (4, 3) に届くよ。",
      "`let legs: Vec<i32> = raw.iter().map(|x| x * 2).collect();` を作り、`code = legs[0] + legs[1]` を `try_dial`・`add_vault` に渡して `step(legs[0]); turn_right(); step(legs[1]);` で進もう。",
      "fn main() {\n    let raw = vec![2, 1];\n    let legs: Vec<i32> = raw.iter().map(|x| x * 2).collect();\n    let code = legs[0] + legs[1];\n    try_dial(code);\n    add_vault(code);\n    step(legs[0]);\n    turn_right();\n    step(legs[1]);\n}"
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
        "x": 4,
        "y": 3
      },
      "dial": {
        "x": 2,
        "y": 0,
        "secret": 6
      },
      "vault": {
        "x": 3,
        "y": 0,
        "initial": 0,
        "target": 6
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "dialSolved": true,
      "vaultTarget": 6
    },
    "parTicks": 10
  },
  {
    "displayId": "13-13",
    "id": "34bb6524-afeb-5616-bf70-96512643f90f",
    "index": 293,
    "chapter": 13,
    "chapterTitle": "第13章 イテレータとクロージャ",
    "stageKind": "puzzle",
    "title": "13-13. コンベア集計と搬送ベルト連続突破",
    "topicTag": "iter().filter().sum() + コンベア",
    "kurumiIntro": "コンベアの設計バッチ `conveyor_batch()` から基準値 `4` 以上の値だけ取り出して半分（`/ 2`）にして合計⚡6を作ろう！搬送ベルトの押し出しを利用して一気にゴールへ乗り込むよ。",
    "goalSummary": "filter().map().sum() で金庫⚡6を作りコンベアでゴール (5, 1) へ",
    "bookSectionTitle": "13.2 環境キャプチャ＋イテレーター集計",
    "bookSummary": "外側の変数 `threshold` をキャプチャした `.filter()` と `.map()`・`.sum()` を組み合わせると、設定に応じた動的フィルタ集計が簡潔に書けます。",
    "bookKeyCode": "batch.iter().filter(|x| x >= threshold).map(|x| x / 2).sum()",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn main() {\n    let batch = conveyor_batch();\n    let threshold = 4;\n    let power = batch.iter().filter(|x| x >= threshold).map(|x| x / 2).sum();\n    add_vault(power);\n    step(2);\n    step(2);\n}",
    "quickChips": [
      {
        "label": ".map(|x| x / 2)",
        "insert": ".map(|x| x / 2)"
      }
    ],
    "hints": [
      "金庫目標はちょうど⚡6。`conveyor_batch()` から 4以上を抽出して `/ 2` して合計しよう。(1, 1) と (3, 1) 付近に右向きコンベアがあるので押し出し込みで (5, 1) に着く歩数を組もう。",
      "`conveyor_batch().iter().filter(|x| x >= 4).map(|x| x / 2).sum()` を `add_vault` に渡し、`step(2); step(2);` でベルトを乗り継いでゴールしよう。",
      "fn main() {\n    let batch = conveyor_batch();\n    let threshold = 4;\n    let power = batch.iter().filter(|x| x >= threshold).map(|x| x / 2).sum();\n    add_vault(power);\n    step(2);\n    step(2);\n}"
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
      "conveyorItems": [
        2,
        4,
        8
      ],
      "conveyors": [
        {
          "x": 2,
          "y": 1,
          "dir": 0
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
      "vaultTarget": 6,
      "vaultExact": 6
    },
    "parTicks": 7
  },
  {
    "displayId": "13-14",
    "id": "c5c87f2d-46ad-5545-81ec-bb750cb770de",
    "index": 294,
    "chapter": 13,
    "chapterTitle": "第13章 イテレータとクロージャ",
    "stageKind": "puzzle",
    "title": "13-14. イテレーターで異常値を弾いて最短搬送",
    "topicTag": "filter().map().collect() + ベルト",
    "kurumiIntro": "コンベアのデータ `conveyor_batch()`（`[0, 2, -1, 3]`）から正の数（`x > 0`）だけを取り出して合計⚡5を金庫へ入れ、ベルト経由でゴール (5, 1) を狙おう！",
    "goalSummary": "filter(x > 0).sum() で金庫⚡5を作りベルト経由でゴール (5, 1) へ",
    "bookSectionTitle": "13.2 ノイズ除去フィルタパイプライン",
    "bookSummary": "負の値やゼロなどのノイズを `.filter(|x| x > 0)` で除外してから集計することで、異常データに強い制御が実現します。",
    "bookKeyCode": "batch.iter().filter(|x| x > 0).sum()",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn main() {\n    let batch = conveyor_batch();\n    let clean_sum: i32 = batch.iter().filter(|x| x > 0).sum();\n    add_vault(clean_sum);\n    step(2);\n    step(1);\n}",
    "quickChips": [
      {
        "label": "x > 0",
        "insert": "x > 0"
      }
    ],
    "hints": [
      "`conveyor_batch()` の正の数だけ合計すると `2 + 3 = 5` で金庫⚡5を達成！右向きコンベアが2つあるので合計3歩＋ベルト2回分で (5, 1) に着くよ。",
      "`let clean_sum: i32 = conveyor_batch().iter().filter(|x| x > 0).sum();` を `add_vault` し、`step(2); step(1);` でゴールしよう。",
      "fn main() {\n    let batch = conveyor_batch();\n    let clean_sum: i32 = batch.iter().filter(|x| x > 0).sum();\n    add_vault(clean_sum);\n    step(2);\n    step(1);\n}"
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
      "conveyorItems": [
        0,
        2,
        -1,
        3
      ],
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
    "displayId": "13-15",
    "id": "8fb6421e-5d44-51e3-bca2-4842354cde9a",
    "index": 295,
    "chapter": 13,
    "chapterTitle": "第13章 イテレータとクロージャ",
    "title": "13-15. 第13章まとめ：イテレーターパイプライン＆スイッチ突破",
    "topicTag": "第13章 総合実践",
    "kurumiIntro": "第13章のまとめ！コンベア部品から良品を選び出してエネルギーを金庫⚡6に貯め、同時にコアを拾ってスイッチ連動ゲートの先のゴールへ届けよう！",
    "goalSummary": "イテレーター連鎖で金庫⚡6・コア納品・スイッチ突破を達成",
    "bookSectionTitle": "第13章まとめ — 関数型イテレーターとクロージャー",
    "bookSummary": "ループや一時変数を減らし、`.iter().filter().map().sum()` でデータの流れをそのまま表現するとバグが激減します。",
    "bookKeyCode": "let total = batch.iter().filter(|x| x > 0).map(|x| x * 2).sum();",
    "starterCode": "fn main() {\n    let batch = conveyor_batch(); // [0, 1, 2]\n    // 0より大きいものを選び、2倍にして合計しよう（2 + 4 = 6）！\n    let energy = batch\n        .iter()\n        .filter(|x| x > 0)\n        .map(|x| x)\n        .sum();\n    add_vault(energy);\n    let core = grab_core();\n    step(4);\n    deliver(core);\n}",
    "solutionCode": "fn main() {\n    let batch = conveyor_batch();\n    let energy = batch\n        .iter()\n        .filter(|x| x > 0)\n        .map(|x| x * 2)\n        .sum();\n    add_vault(energy);\n    let core = grab_core();\n    step(4);\n    deliver(core);\n}",
    "quickChips": [
      {
        "label": ".map(|x| x * 2)",
        "insert": ".map(|x| x * 2)"
      }
    ],
    "hints": [
      "今は .map(|x| x) だから 1 + 2 = 3 にしかならないよ！",
      ".map(|x| x * 2) にすれば 2 + 4 = 6 で金庫の目標にぴったり届くよ！",
      ".map(|x| x * 2)"
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
      "conveyorItems": [
        0,
        1,
        2
      ],
      "cores": [
        {
          "id": "c1",
          "x": 0,
          "y": 1,
          "power": 3,
          "label": "高効率コア"
        }
      ],
      "deliveries": [
        {
          "x": 4,
          "y": 1
        }
      ],
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
      "deliverCores": 1,
      "vaultTarget": 6
    },
    "parTicks": 8
  },
  {
    "displayId": "13-16",
    "id": "51b5ff89-5dd8-575f-9faa-b2891bd4032d",
    "index": 296,
    "chapter": 13,
    "chapterTitle": "第13章 イテレータとクロージャ",
    "stageKind": "puzzle",
    "title": "13-16. 第13章マスター：集計・空間コア・スパーク完全制覇",
    "topicTag": "第13章 パズル総仕上げ",
    "kurumiIntro": "第13章パズルの総仕上げ！`conveyor_batch()` を `filter().map().sum()` で集計して金庫⚡6を満たし、コアを拾って検査・強化しつつ、スパークを避けて納品台まで届けきろう！",
    "goalSummary": "イテレーター集計⚡6＋スパーク回避＋空間コア⚡4+納品を全達成",
    "bookSectionTitle": "13.1 & 13.2 クロージャーとイテレーターの統合活用",
    "bookSummary": "データ処理はイテレーターパイプラインに任せ、現場移動は安全クロージャーに任せるきれいな責務分離の完成形です。",
    "bookKeyCode": "let safe = || { while is_spark_ahead() { wait_tick(1); } step(); };",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn main() {\n    let batch = conveyor_batch();\n    let v: i32 = batch.iter().filter(|x| x > 1).map(|x| x - 1).sum();\n    add_vault(v);\n    let safe_step = || {\n        while is_spark_ahead() {\n            wait_tick(1);\n        }\n        step();\n    };\n    safe_step();\n    let mut c = grab_core();\n    safe_step();\n    scan(&c);\n    safe_step();\n    boost(&mut c);\n    safe_step();\n    safe_step();\n    deliver(c);\n}",
    "quickChips": [
      {
        "label": ".map(|x| x - 1)",
        "insert": ".map(|x| x - 1)"
      }
    ],
    "hints": [
      "`conveyor_batch()` の `[1, 2, 3, 4]` から `x > 1` を残して `x - 1` すると `1 + 2 + 3 = 6` になるよ。通路にスパークもいるので待機付きクロージャーで安全に進もう。",
      "`conveyor_batch().iter().filter(|x| x > 1).map(|x| x - 1).sum()` を `add_vault` し、`safe_step` クロージャーで (1,1)取得→(2,1)`scan`→(3,1)`boost`→(5,1)`deliver` を決めよう。",
      "fn main() {\n    let batch = conveyor_batch();\n    let v: i32 = batch.iter().filter(|x| x > 1).map(|x| x - 1).sum();\n    add_vault(v);\n    let safe_step = || {\n        while is_spark_ahead() {\n            wait_tick(1);\n        }\n        step();\n    };\n    safe_step();\n    let mut c = grab_core();\n    safe_step();\n    scan(&c);\n    safe_step();\n    boost(&mut c);\n    safe_step();\n    safe_step();\n    deliver(c);\n}"
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
      "conveyorItems": [
        1,
        2,
        3,
        4
      ],
      "cores": [
        {
          "id": "c1",
          "x": 1,
          "y": 1,
          "power": 2,
          "label": "極光コア"
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
          "x": 5,
          "y": 1
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
      "vault": {
        "x": 1,
        "y": 0,
        "initial": 0,
        "target": 6
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "deliverCores": 1,
      "minCorePower": 4,
      "scanCount": 1,
      "vaultTarget": 6,
      "vaultExact": 6,
      "requireSpatialCoreRules": true
    },
    "parTicks": 15
  }
];
