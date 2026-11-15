import { StageDefinition } from '../types/game';

export const CHAPTER_2_STAGES: StageDefinition[] = [
  {
    "id": "56ba2a08-9045-5e05-a06d-61cd7405338b",
    "displayId": "2-1",
    "index": 11,
    "chapter": 2,
    "chapterTitle": "第2章 オブジェクト指向プログラミング機能",
    "stageKind": "basic",
    "title": "2-1. 連動スイッチの順序制御",
    "topicTag": "状態遷移 / スイッチ / ゲート",
    "kurumiIntro": "スイッチを踏むとゲートが開くよ。作動条件を満たしてから出口へ向かおう。",
    "goalSummary": "スイッチ (1, 1) を作動させてゴール (6, 1) へ",
    "bookSectionTitle": "状態遷移を条件にした経路設計",
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
    "displayId": "2-2",
    "index": 12,
    "chapter": 2,
    "chapterTitle": "第2章 オブジェクト指向プログラミング機能",
    "stageKind": "basic",
    "title": "2-2. 二段コンベアの最短経路",
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
    "id": "056e99f3-0ba8-5565-b054-7898e7d05c9d",
    "displayId": "2-3",
    "index": 13,
    "chapter": 2,
    "chapterTitle": "第2章 オブジェクト指向プログラミング機能",
    "stageKind": "challenge",
    "title": "2-3. 出口までの距離を読み解く",
    "topicTag": "観察 / 経路設計",
    "kurumiIntro": "盤面の幅を観察して、開始地点から出口までの移動計画を立てよう。",
    "goalSummary": "最短の直線経路で (6, 1) へ到達",
    "bookSectionTitle": "盤面から移動量を導く",
    "bookSummary": "開始座標とゴール座標の差から必要な移動回数を計算します。",
    "bookKeyCode": "step(6);",
    "starterCode": "fn main() {\n    step(5);\n}",
    "solutionCode": "fn main() {\n    step(6);\n}",
    "quickChips": [
      {
        "label": "解法の式",
        "insert": "    step(6);"
      }
    ],
    "hints": [
      "開始地点からゴールまでは6マスだよ。",
      "足りない移動分を補おう。",
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
    "id": "fafc7783-da70-5802-b3f7-adfedcf62c9b",
    "displayId": "2-4",
    "index": 36,
    "chapter": 2,
    "chapterTitle": "第2章 オブジェクト指向プログラミング機能",
    "stageKind": "basic",
    "title": "2-4. 金庫と経路を同時に設計",
    "topicTag": "状態管理 / 金庫 / 経路設計",
    "kurumiIntro": "必要な出力を変数で管理し、金庫を満たしてから最短経路でゴールしよう。",
    "goalSummary": "金庫⚡4を満たして (5, 1) へ到達",
    "bookSectionTitle": "状態を計算してから行動する",
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
    "id": "3dd92b1f-880f-5afb-b8a6-e3881793cf25",
    "displayId": "2-5",
    "index": 62,
    "chapter": 2,
    "chapterTitle": "第2章 オブジェクト指向プログラミング機能",
    "stageKind": "puzzle",
    "title": "2-5. 関数へ経路を分割",
    "topicTag": "関数 / パラメーター",
    "kurumiIntro": "移動処理を関数にまとめ、渡された距離を正しく実行しよう。",
    "goalSummary": "travel 関数で (5, 1) へ到達",
    "bookSectionTitle": "関数に手順をまとめる",
    "bookSummary": "引数で操作量を受け取る関数を作ると、手順を再利用できます。",
    "bookKeyCode": "fn travel(n: i32) { step(n); }",
    "starterCode": "fn travel(n: i32) {\n    step(n - 1);\n}\nfn main() { travel(5); }",
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
    "id": "1f285b92-a6db-5f8d-8f4d-61ae58e9d4bd",
    "displayId": "2-6",
    "index": 91,
    "chapter": 2,
    "chapterTitle": "第2章 オブジェクト指向プログラミング機能",
    "stageKind": "puzzle",
    "title": "2-6. 反復処理で距離を走破",
    "topicTag": "for / 反復制御",
    "kurumiIntro": "同じ操作を繰り返すループを組み、必要な距離だけ走り切ろう。",
    "goalSummary": "ループで4マス進みゴールへ到達",
    "bookSectionTitle": "反復回数を設計する",
    "bookSummary": "for ループの範囲を決めると、同じ操作を安全に繰り返せます。",
    "bookKeyCode": "for _ in 0..4 { step(); }",
    "starterCode": "fn main() {\n    for _ in 0..3 { step(); }\n}",
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
    "displayId": "2-7",
    "id": "cc3aa3b6-256c-5917-8355-bdb415791494",
    "index": 361,
    "chapter": 2,
    "chapterTitle": "第2章 オブジェクト指向プログラミング機能",
    "title": "2-7. トレイトオブジェクト Box<dyn Trait>",
    "topicTag": "Box<dyn Trait>",
    "kurumiIntro": "いよいよ最終章！異なるパーツ型でも同じ `Actuator` トレイトを持っていれば `Box<dyn Actuator>` としてひとまとめに動かせるよ！",
    "goalSummary": "トレイトオブジェクトでパーツを起動し、金庫⚡3＋ゴールへ",
    "bookSectionTitle": "2.2 トレイトオブジェクトで異なる型の値を許容する",
    "bookSummary": "`Box<dyn トレイト名>` を使うと、中身が異なる構造体であっても共通のトレイトを持つ部品として同じリストにまとめて扱えます。",
    "bookKeyCode": "trait Actuator { fn run(&self) -> i32; }",
    "starterCode": "trait Actuator {\n    fn run(&self) -> i32;\n}\n\nstruct Spring { force: i32 }\nimpl Actuator for Spring {\n    fn run(&self) -> i32 { self.force }\n}\n\nfn main() {\n    let parts = vec![Box::new(Spring { force: 1 }), Box::new(Spring { force: 2 })];\n    let mut total = 0;\n    for p in parts {\n        total += (*p).run();\n    }\n    // total は 3 になるよ！金庫に入れてゴールへ進もう\n    \n}",
    "solutionCode": "trait Actuator {\n    fn run(&self) -> i32;\n}\n\nstruct Spring { force: i32 }\nimpl Actuator for Spring {\n    fn run(&self) -> i32 { self.force }\n}\n\nfn main() {\n    let parts = vec![Box::new(Spring { force: 1 }), Box::new(Spring { force: 2 })];\n    let mut total = 0;\n    for p in parts {\n        total += (*p).run();\n    }\n    add_vault(total);\n    step(total);\n}",
    "quickChips": [
      {
        "label": "add_vault(total);",
        "insert": "add_vault(total);\n    "
      },
      {
        "label": "step(total);",
        "insert": "step(total);\n    "
      }
    ],
    "hints": [
      "for ループのあと、total の中には 1 + 2 = 3 が入っているよ！",
      "add_vault(total); と step(total); を書き足そう。",
      "add_vault(total);\nstep(total);"
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
    "displayId": "2-8",
    "id": "c419f437-352b-5f1d-8298-e4c37e52a12a",
    "index": 362,
    "chapter": 2,
    "chapterTitle": "第2章 オブジェクト指向プログラミング機能",
    "title": "2-8. 異種パーツ Spring と Gear を同じリストで動かす",
    "topicTag": "異種型の統一リスト",
    "kurumiIntro": "今度は `Spring` と `Gear` という別々の構造体を両方同じ `vec!` に入れて、まとめて `run()` してみよう！型が違っても共通トレイトがあれば一緒に行動できるよ。",
    "goalSummary": "Spring と Gear をまとめて実行し金庫⚡4＋(4, 1)へ",
    "bookSectionTitle": "2.2 共通のふるまいによるポリモーフィズム",
    "bookSummary": "継承ではなくトレイトを使うことで、関連のない別々の構造体にも共通のインターフェースを持たせて統一的に処理できます。",
    "bookKeyCode": "for part in parts { sum += (*part).run(); }",
    "starterCode": "trait Actuator {\n    fn run(&self) -> i32;\n}\n\nstruct Spring { force: i32 }\nimpl Actuator for Spring {\n    fn run(&self) -> i32 { self.force }\n}\n\nstruct Gear { teeth: i32 }\nimpl Actuator for Gear {\n    fn run(&self) -> i32 { self.teeth * 2 }\n}\n\nfn main() {\n    let s = Box::new(Spring { force: 2 });\n    // Gear { teeth: 1 } も Box::new して合計 4 にしよう！\n    let total = (*s).run();\n    add_vault(total);\n    step(total);\n}",
    "solutionCode": "trait Actuator {\n    fn run(&self) -> i32;\n}\n\nstruct Spring { force: i32 }\nimpl Actuator for Spring {\n    fn run(&self) -> i32 { self.force }\n}\n\nstruct Gear { teeth: i32 }\nimpl Actuator for Gear {\n    fn run(&self) -> i32 { self.teeth * 2 }\n}\n\nfn main() {\n    let s = Box::new(Spring { force: 2 });\n    let g = Box::new(Gear { teeth: 1 });\n    let total = (*s).run() + (*g).run();\n    add_vault(total);\n    step(total);\n}",
    "quickChips": [
      {
        "label": "let g = Box::new(Gear { teeth: 1 });",
        "insert": "let g = Box::new(Gear { teeth: 1 });\n    "
      },
      {
        "label": "(*g).run()",
        "insert": "(*g).run()"
      }
    ],
    "hints": [
      "Spring { force: 2 } だけだと run() の結果は 2 になるよ。",
      "Gear { teeth: 1 } を Box::new して (*g).run() を足せば 2 + 2 = 4 になるよ！",
      "let g = Box::new(Gear { teeth: 1 });\nlet total = (*s).run() + (*g).run();"
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
    "displayId": "2-9",
    "id": "7a5d0c50-d5f6-588f-9f29-ae1174a234f5",
    "index": 363,
    "chapter": 2,
    "chapterTitle": "第2章 オブジェクト指向プログラミング機能",
    "title": "2-9. カプセル化：公開メソッド経由で安全に更新",
    "topicTag": "カプセル化 / pub API",
    "kurumiIntro": "オブジェクト指向の大切な柱「カプセル化」！中身の数値を直接いじる代わりに、`add()` や `total()` といった決まった窓口メソッドを通して安全に管理しよう。",
    "goalSummary": "Averager の公開メソッドで合計 3 を作り金庫⚡3＋ゴールへ",
    "bookSectionTitle": "2.1 カプセル化が実装の詳細を隠蔽する",
    "bookSummary": "データ構造の内部フィールドを隠し、公開メソッドだけを提供することで、外からの想定外の変更を防ぎ保守性を高められます。",
    "bookKeyCode": "tracker.add(2);\nlet sum = tracker.total();",
    "starterCode": "struct Tracker {\n    sum: i32,\n}\n\nimpl Tracker {\n    pub fn new() -> Tracker {\n        Tracker { sum: 0 }\n    }\n    pub fn add(&mut self, val: i32) {\n        self.sum += val;\n    }\n    pub fn total(&self) -> i32 {\n        self.sum\n    }\n}\n\nfn main() {\n    let mut tr = Tracker::new();\n    tr.add(1);\n    // もう 2 だけ add して合計 3 にしよう！\n    let v = tr.total();\n    add_vault(v);\n    step(v);\n}",
    "solutionCode": "struct Tracker {\n    sum: i32,\n}\n\nimpl Tracker {\n    pub fn new() -> Tracker {\n        Tracker { sum: 0 }\n    }\n    pub fn add(&mut self, val: i32) {\n        self.sum += val;\n    }\n    pub fn total(&self) -> i32 {\n        self.sum\n    }\n}\n\nfn main() {\n    let mut tr = Tracker::new();\n    tr.add(1);\n    tr.add(2);\n    let v = tr.total();\n    add_vault(v);\n    step(v);\n}",
    "quickChips": [
      {
        "label": "tr.add(2);",
        "insert": "tr.add(2);\n    "
      }
    ],
    "hints": [
      "tr.add(1); だけだと合計は 1 になっているよ。",
      "tr.add(2); を追加すると合計が 3 になって金庫もゴールも達成できるよ！",
      "tr.add(1);\ntr.add(2);"
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
    "displayId": "2-10",
    "id": "8cb63b66-a58b-569e-ae65-433de5ecea2a",
    "index": 364,
    "chapter": 2,
    "chapterTitle": "第2章 オブジェクト指向プログラミング機能",
    "title": "2-10. 複数メソッドを備えた部品インターフェース",
    "topicTag": "複数メソッド Trait",
    "kurumiIntro": "お祭り用のパーツには `prepare()` で充電して `advance()` でL字に走る、2つの役割を持たせてみよう！",
    "goalSummary": "prepare() と advance() を実装して金庫⚡4＋(3, 3)へ",
    "bookSectionTitle": "2.2 オブジェクト指向インターフェースとしてのトレイト",
    "bookSummary": "複数のメソッドをまとめたトレイトを定義すれば、どの構造体も同じ手順で初期化・実行できるようになります。",
    "bookKeyCode": "bot.prepare();\nbot.advance();",
    "starterCode": "trait Runner {\n    fn prepare(&self);\n    fn advance(&self);\n}\n\nstruct FloatBot {\n    power: i32,\n}\n\nimpl Runner for FloatBot {\n    fn prepare(&self) {\n        add_vault(self.power);\n    }\n    fn advance(&self) {\n        step(3);\n        turn_right();\n        // 下へ 2 歩進む step(2); を足そう！\n    }\n}\n\nfn main() {\n    let bot = FloatBot { power: 4 };\n    bot.prepare();\n    bot.advance();\n}",
    "solutionCode": "trait Runner {\n    fn prepare(&self);\n    fn advance(&self);\n}\n\nstruct FloatBot {\n    power: i32,\n}\n\nimpl Runner for FloatBot {\n    fn prepare(&self) {\n        add_vault(self.power);\n    }\n    fn advance(&self) {\n        step(3);\n        turn_right();\n        step(2);\n    }\n}\n\nfn main() {\n    let bot = FloatBot { power: 4 };\n    bot.prepare();\n    bot.advance();\n}",
    "quickChips": [
      {
        "label": "step(2);",
        "insert": "step(2);"
      }
    ],
    "hints": [
      "turn_right() のあと、まだ下へ進んでいないため (3, 1) で止まってしまうよ！",
      "advance() の最後に `step(2);` を追加して (3, 3) まで進もう。",
      "step(3);\nturn_right();\nstep(2);"
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
    "displayId": "2-11",
    "id": "0ab6754a-d4df-54ac-a77f-e80fc746a157",
    "index": 365,
    "chapter": 2,
    "chapterTitle": "第2章 オブジェクト指向プログラミング機能",
    "title": "2-11. ステートパターン基礎：Draft から Ready へ",
    "topicTag": "ステートパターン基礎",
    "kurumiIntro": "ロボットの状態（`Draft` → `Ready`）をオブジェクトの切り替えで表現するステートパターンに挑戦しよう！準備中に発進しない安全設計だよ。",
    "goalSummary": "state を Draft から Ready へ進めてゴール (3, 1) へ",
    "bookSectionTitle": "2.3 オブジェクト指向デザインパターンを実装する",
    "bookSummary": "状態ごとに異なる振る舞いを構造体や enum の遷移として表現することで、状態に応じた安全な振る舞いを綺麗に設計できます。",
    "bookKeyCode": "ctrl.approve();\nctrl.drive();",
    "starterCode": "enum Mode { Draft, Ready }\n\nstruct Controller { mode: Mode }\n\nimpl Controller {\n    fn approve(&mut self) {\n        self.mode = Mode::Ready;\n    }\n    fn drive(&self) {\n        match self.mode {\n            Mode::Draft => println!(\"まだ準備中だよ\"),\n            Mode::Ready => step(3),\n        }\n    }\n}\n\nfn main() {\n    let mut ctrl = Controller { mode: Mode::Draft };\n    // drive() の前に approve() を呼んで Ready にしよう！\n    ctrl.drive();\n}",
    "solutionCode": "enum Mode { Draft, Ready }\n\nstruct Controller { mode: Mode }\n\nimpl Controller {\n    fn approve(&mut self) {\n        self.mode = Mode::Ready;\n    }\n    fn drive(&self) {\n        match self.mode {\n            Mode::Draft => println!(\"まだ準備中だよ\"),\n            Mode::Ready => step(3),\n        }\n    }\n}\n\nfn main() {\n    let mut ctrl = Controller { mode: Mode::Draft };\n    ctrl.approve();\n    ctrl.drive();\n}",
    "quickChips": [
      {
        "label": "ctrl.approve();",
        "insert": "ctrl.approve();\n    "
      }
    ],
    "hints": [
      "今は mode が Draft のまま drive() しているから動かないみたい！",
      "ctrl.drive(); の前に `ctrl.approve();` を呼ぼう。",
      "let mut ctrl = Controller { mode: Mode::Draft };\nctrl.approve();\nctrl.drive();"
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
    "displayId": "2-12",
    "id": "bee5e43c-ba0a-5915-a8bd-4412c17f2ead",
    "index": 366,
    "chapter": 2,
    "chapterTitle": "第2章 オブジェクト指向プログラミング機能",
    "title": "2-12. 3段階ステート遷移：下書き → 審査中 → 承認済み",
    "topicTag": "3段階ステート遷移",
    "kurumiIntro": "お祭りの大ランタンは「`Draft`（下書き）→ `Pending`（審査中）→ `Approved`（承認済み）」の順番を守らないと点灯しない仕組みだよ！手順通りに進めよう。",
    "goalSummary": "request_review() と approve() を順に呼び金庫⚡3＋ゴールへ",
    "bookSectionTitle": "2.3 多段階の承認ワークフローを状態遷移で表す",
    "bookSummary": "次の状態への遷移条件をメソッド内部に閉じ込めることで、手順飛ばしの不正な状態変化を防止できます。",
    "bookKeyCode": "post.request_review();\npost.approve();",
    "starterCode": "enum PostState { Draft, Pending, Approved }\n\nstruct Lantern { state: PostState }\n\nimpl Lantern {\n    fn request_review(&mut self) {\n        match self.state {\n            PostState::Draft => self.state = PostState::Pending,\n            _ => {},\n        }\n    }\n    fn approve(&mut self) {\n        match self.state {\n            PostState::Pending => self.state = PostState::Approved,\n            _ => {},\n        }\n    }\n    fn light_up(&self) {\n        match self.state {\n            PostState::Approved => {\n                add_vault(3);\n                step(3);\n            },\n            _ => println!(\"承認がまだ完了していません\"),\n        }\n    }\n}\n\nfn main() {\n    let mut lantern = Lantern { state: PostState::Draft };\n    // request_review() してから approve() を呼ぼう！\n    lantern.approve();\n    lantern.light_up();\n}",
    "solutionCode": "enum PostState { Draft, Pending, Approved }\n\nstruct Lantern { state: PostState }\n\nimpl Lantern {\n    fn request_review(&mut self) {\n        match self.state {\n            PostState::Draft => self.state = PostState::Pending,\n            _ => {},\n        }\n    }\n    fn approve(&mut self) {\n        match self.state {\n            PostState::Pending => self.state = PostState::Approved,\n            _ => {},\n        }\n    }\n    fn light_up(&self) {\n        match self.state {\n            PostState::Approved => {\n                add_vault(3);\n                step(3);\n            },\n            _ => println!(\"承認がまだ完了していません\"),\n        }\n    }\n}\n\nfn main() {\n    let mut lantern = Lantern { state: PostState::Draft };\n    lantern.request_review();\n    lantern.approve();\n    lantern.light_up();\n}",
    "quickChips": [
      {
        "label": "lantern.request_review();",
        "insert": "lantern.request_review();\n    "
      }
    ],
    "hints": [
      "Draft のままいきなり approve() を呼んでも Pending じゃないので無視されるよ！",
      "まず `lantern.request_review();` で Pending にしてから `lantern.approve();` を呼ぼう。",
      "lantern.request_review();\nlantern.approve();\nlantern.light_up();"
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
    "displayId": "2-13",
    "id": "661f50ef-b06b-5e02-b076-2228c88a0e8e",
    "index": 367,
    "chapter": 2,
    "chapterTitle": "第2章 オブジェクト指向プログラミング機能",
    "title": "2-13. 状態による歩数切り替えパズル",
    "topicTag": "状態ごとの挙動変化",
    "kurumiIntro": "同じ `move_bot()` メソッドでも、今の状態が `Eco` なら 2歩、`Turbo` なら 3歩進むように設計されているよ！L字ルートに合わせてモードを切り替えよう。",
    "goalSummary": "Eco で右へ、Turbo で下へ進んでゴール (2, 4) へ",
    "bookSectionTitle": "2.3 状態オブジェクトが振る舞いを決定する",
    "bookSummary": "メソッド呼び出し側が条件分岐を書かなくても、内部状態ごとに振る舞いを切り替えることでコードをシンプルに保てます。",
    "bookKeyCode": "bot.set_turbo(); bot.move_bot();",
    "starterCode": "enum SpeedMode { Eco, Turbo }\n\nstruct Rover { mode: SpeedMode }\n\nimpl Rover {\n    fn set_turbo(&mut self) {\n        self.mode = SpeedMode::Turbo;\n    }\n    fn move_bot(&self) {\n        match self.mode {\n            SpeedMode::Eco => step(2),\n            SpeedMode::Turbo => step(3),\n        }\n    }\n}\n\nfn main() {\n    let mut bot = Rover { mode: SpeedMode::Eco };\n    bot.move_bot();\n    turn_right();\n    // ここで set_turbo() してから move_bot() を呼ぼう！\n    bot.move_bot();\n}",
    "solutionCode": "enum SpeedMode { Eco, Turbo }\n\nstruct Rover { mode: SpeedMode }\n\nimpl Rover {\n    fn set_turbo(&mut self) {\n        self.mode = SpeedMode::Turbo;\n    }\n    fn move_bot(&self) {\n        match self.mode {\n            SpeedMode::Eco => step(2),\n            SpeedMode::Turbo => step(3),\n        }\n    }\n}\n\nfn main() {\n    let mut bot = Rover { mode: SpeedMode::Eco };\n    bot.move_bot();\n    turn_right();\n    bot.set_turbo();\n    bot.move_bot();\n}",
    "quickChips": [
      {
        "label": "bot.set_turbo();",
        "insert": "bot.set_turbo();\n    "
      }
    ],
    "hints": [
      "最初の move_bot() は Eco なので右に 2歩進んで (2, 1) に着くよ。",
      "turn_right() のあとに `bot.set_turbo();` を入れると次の move_bot() で下に 3歩進んで (2, 4) へ着くよ！",
      "turn_right();\nbot.set_turbo();\nbot.move_bot();"
    ],
    "worldSetup": {
      "width": 4,
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
        "x": 2,
        "y": 4
      }
    },
    "victoryCondition": {
      "reachGoal": true
    },
    "parTicks": 6
  },
  {
    "displayId": "2-14",
    "id": "70cb7557-cf2f-57ca-8b60-541cbead8dc1",
    "index": 368,
    "chapter": 2,
    "chapterTitle": "第2章 オブジェクト指向プログラミング機能",
    "title": "2-14. 第2章総合：状態機械＋トレイト＋ゲート突破",
    "topicTag": "OOP総合パズル",
    "kurumiIntro": "第2章の総仕上げ！準備状態を解除したあとに `Task` トレイトを使って金庫へチャージし、連動スイッチを踏んでゲートを突破しよう！",
    "goalSummary": "ステートを Ready に切り替えて金庫⚡5＋ゲート先の (5, 1) へ",
    "bookSectionTitle": "第2章 オブジェクト指向設計 総合演習",
    "bookSummary": "データの隠蔽・共通トレイト・状態遷移の3つを組み合わせることで、安全で拡張しやすい設計が実現できます。",
    "bookKeyCode": "unit.arm(); (*boxed).execute();",
    "starterCode": "trait Task {\n    fn execute(&self) -> i32;\n}\n\nenum GateState { Locked, Armed }\n\nstruct GateUnit {\n    state: GateState,\n    energy: i32,\n}\n\nimpl GateUnit {\n    fn arm(&mut self) {\n        self.state = GateState::Armed;\n    }\n}\n\nimpl Task for GateUnit {\n    fn execute(&self) -> i32 {\n        match self.state {\n            GateState::Locked => 0,\n            GateState::Armed => self.energy,\n        }\n    }\n}\n\nfn main() {\n    let mut unit = GateUnit { state: GateState::Locked, energy: 5 };\n    // arm() を呼んでから Box::new(unit) しよう！\n    let boxed = Box::new(unit);\n    let e = (*boxed).execute();\n    add_vault(e);\n    step(e);\n}",
    "solutionCode": "trait Task {\n    fn execute(&self) -> i32;\n}\n\nenum GateState { Locked, Armed }\n\nstruct GateUnit {\n    state: GateState,\n    energy: i32,\n}\n\nimpl GateUnit {\n    fn arm(&mut self) {\n        self.state = GateState::Armed;\n    }\n}\n\nimpl Task for GateUnit {\n    fn execute(&self) -> i32 {\n        match self.state {\n            GateState::Locked => 0,\n            GateState::Armed => self.energy,\n        }\n    }\n}\n\nfn main() {\n    let mut unit = GateUnit { state: GateState::Locked, energy: 5 };\n    unit.arm();\n    let boxed = Box::new(unit);\n    let e = (*boxed).execute();\n    add_vault(e);\n    step(e);\n}",
    "quickChips": [
      {
        "label": "unit.arm();",
        "insert": "unit.arm();\n    "
      }
    ],
    "hints": [
      "Locked のままだと execute() が 0 を返してしまうよ！",
      "Box::new(unit) の前に `unit.arm();` を呼ぶと Armed になって 5 を返してくれるよ。",
      "unit.arm();\nlet boxed = Box::new(unit);"
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
      "vaultTarget": 5
    },
    "parTicks": 6
  }
];


