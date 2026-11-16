import { StageDefinition } from '../types/game';

export const CHAPTER_14_STAGES: StageDefinition[] = [
  {
    "displayId": "14-1",
    "id": "1d1d1eae-a488-5133-9fdd-a0b378a96eaa",
    "index": 297,
    "chapter": 14,
    "chapterTitle": "第14章 CargoとCrates.ioについてより詳しく",
    "title": "14-1. クレートの公開API整理（pub use 風）",
    "topicTag": "use / クレート公開API",
    "kurumiIntro": "大きなライブラリを整理するときは、`mod internal_drive` の便利な関数を外に公開して `use` で短く呼び出せるようにするのがコツだよ！",
    "goalSummary": "use を使って fast クレートの go() を呼び 5ティック以内でゴールへ",
    "bookSectionTitle": "14.2 pub use で使いやすく公開APIを再エクスポート",
    "bookSummary": "深いモジュール構造の中に機能があっても、トップレベルから使いやすい名前で再エクスポートすると、利用者にとって扱いやすいクレートになります。",
    "bookKeyCode": "use crate_drive::go;\ngo(4);",
    "starterCode": "mod crate_drive {\n    // pub を付けて公開しよう！\n    fn go(n: i32) {\n        step(n);\n    }\n}\n\nuse crate_drive::go;\n\n#[cfg(feature = \"fast\")]\nfn main() {\n    go(4);\n}",
    "solutionCode": "mod crate_drive {\n    pub fn go(n: i32) {\n        step(n);\n    }\n}\n\nuse crate_drive::go;\n\n#[cfg(feature = \"fast\")]\nfn main() {\n    go(4);\n}",
    "quickChips": [
      {
        "label": "pub fn go(n: i32)",
        "insert": "pub fn go(n: i32)"
      }
    ],
    "hints": [
      "crate_drive の中の go() に `pub` が付いていないため呼び出せないよ！",
      "fn go(n: i32) を pub fn go(n: i32) に直そう。",
      "pub fn go(n: i32) {"
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
      "featureFastMaxTicks": 5
    },
    "victoryCondition": {
      "reachGoal": true,
      "maxTicks": 5
    },
    "parTicks": 5
  },
  {
    "displayId": "14-2",
    "id": "a47779e1-d34b-5350-879c-9f257d73aec7",
    "index": 298,
    "chapter": 14,
    "chapterTitle": "第14章 CargoとCrates.ioについてより詳しく",
    "stageKind": "puzzle",
    "title": "14-2. タイムアタック！ベルト加速＋#[cfg(feature=\"fast\")]",
    "topicTag": "cfg(fast) + ベルト加速",
    "kurumiIntro": "制限時間 4 ティック以内！`#[cfg(feature = \"fast\")]` を有効にしたうえ、コンベアの押し出しとちょうど噛み合う最小歩数でゴール (5, 1) へ飛び込もう！",
    "goalSummary": "fast 最適化とコンベア利用で 4ティック以内にゴール (5, 1) へ",
    "bookSectionTitle": "14.3 リリース設定とハードウェア加速の協調",
    "bookSummary": "環境側の加速（搬送ベルト）とプログラム側のリリース最適化（`#[cfg(feature = \"fast\")]`）を合わせると極限の短時間航行が可能になります。",
    "bookKeyCode": "#[cfg(feature = \"fast\")]\nfn boost_run() { step(3); }",
    "starterCode": "#[cfg(feature = \"fast\")]\nfn dash() {\n    // TODO: 条件を満たすように実装しよう\n}\n\nfn main() {\n    // 【達成条件】\n    // - ゴール到達: (5, 1)\n    // - 制限時間: 4 ティック以内（#[cfg(feature = \"fast\")] 必須）\n    let max_ticks = 4; // 目標制限ティック数\n    \n}",
    "solutionCode": "#[cfg(feature = \"fast\")]\nfn dash() {\n    step(3);\n}\n\nfn main() {\n    dash();\n}",
    "quickChips": [
      {
        "label": "#[cfg(feature = \"fast\")]",
        "insert": "#[cfg(feature = \"fast\")]"
      }
    ],
    "hints": [
      "4ティック以内に (5, 1) へ到達するには `#[cfg(feature = \"fast\")]` による高速化と、(1, 1)・(3, 1) の右向きコンベア活用が必須だよ。",
      "`#[cfg(feature = \"fast\")] fn dash() { step(3); }` を定義して `main()` から `dash()` を呼べば、3歩＋ベルト2マスで (5, 1) へ間に合うよ。",
      "#[cfg(feature = \"fast\")]\nfn dash() {\n    step(3);\n}\n\nfn main() {\n    dash();\n}"
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
      ],
      "featureFastMaxTicks": 4
    },
    "victoryCondition": {
      "reachGoal": true,
      "maxTicks": 4
    },
    "parTicks": 4
  },
  {
    "displayId": "14-3",
    "id": "9de2fcd1-59e3-5e8c-85a5-46e76c89a7c2",
    "index": 299,
    "chapter": 14,
    "chapterTitle": "第14章 CargoとCrates.ioについてより詳しく",
    "title": "14-3. Cargo ワークスペース：2つのクレート連携",
    "topicTag": "Cargo ワークスペース",
    "kurumiIntro": "「計算担当クレート `mod adder`」と「操縦担当クレート `mod driver`」をワークスペースみたいに連携させよう！テストも忘れずにね。",
    "goalSummary": "adder + driver 連携と #[test] 合格・6ティック以内ゴールへ",
    "bookSectionTitle": "14.3 Cargo ワークスペースで複数パッケージを管理する",
    "bookSummary": "関連する複数のライブラリとバイナリを1つのワークスペースにまとめることで、共通依存やテストを一括管理できます。",
    "bookKeyCode": "mod adder { pub fn add(a: i32, b: i32) -> i32 { a + b } }",
    "starterCode": "mod adder {\n    pub fn add_two(x: i32) -> i32 {\n        // +2 を返すように直そう！\n        x\n    }\n}\n\nmod driver {\n    pub fn run(n: i32) {\n        add_vault(n);\n        step(n);\n    }\n}\n\n#[test]\nfn test_workspace() {\n    assert_eq!(adder::add_two(2), 4);\n}\n\n#[cfg(feature = \"fast\")]\nfn main() {\n    let dist = adder::add_two(2);\n    driver::run(dist);\n}",
    "solutionCode": "mod adder {\n    pub fn add_two(x: i32) -> i32 {\n        x + 2\n    }\n}\n\nmod driver {\n    pub fn run(n: i32) {\n        add_vault(n);\n        step(n);\n    }\n}\n\n#[test]\nfn test_workspace() {\n    assert_eq!(adder::add_two(2), 4);\n}\n\n#[cfg(feature = \"fast\")]\nfn main() {\n    let dist = adder::add_two(2);\n    driver::run(dist);\n}",
    "quickChips": [
      {
        "label": "x + 2",
        "insert": "x + 2"
      }
    ],
    "hints": [
      "test_workspace が adder::add_two(2) == 4 を期待しているよ！",
      "add_two の中を `x + 2` に直せばテストも合格し、金庫⚡4とゴール(4, 1)もクリアできるよ。",
      "pub fn add_two(x: i32) -> i32 {\n    x + 2\n}"
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
      },
      "featureFastMaxTicks": 6
    },
    "victoryCondition": {
      "reachGoal": true,
      "vaultTarget": 4,
      "testsRequired": 1,
      "maxTicks": 6
    },
    "parTicks": 5
  },
  {
    "displayId": "14-4",
    "id": "20649eef-f71c-5821-b966-a1e23b920e2f",
    "index": 300,
    "chapter": 14,
    "chapterTitle": "第14章 CargoとCrates.ioについてより詳しく",
    "title": "14-4. ワークスペースとプロファイル最適化",
    "topicTag": "#[cfg(feature)] / 最適化",
    "kurumiIntro": "4ティック以内に突破する高速モードの出荷テストだよ！`#[cfg(feature = \"fast\")]` の設定にして無駄な待機をなくそう！",
    "goalSummary": "無駄な wait_tick を外し fast 最適化で 4ティック以内にゴールへ",
    "bookSectionTitle": "14.1 & 14.3 リリースプロファイルとワークスペース",
    "bookSummary": "Cargoでは `--release` プロファイル最適化や `#[cfg(feature = \"...\")]` 条件付きコンパイル、ワークスペース分割を使って高速かつ整理されたクレートを育てます。",
    "bookKeyCode": "#[cfg(feature = \"fast\")]\nfn turbo_drive() { step(3); }",
    "starterCode": "#[cfg(feature = \"slow\")]\nfn turbo_drive() {\n    // wait_tick(3) のせいで制限時間オーバーになるよ！\n    wait_tick(3);\n    step(3);\n}\n\nfn main() {\n    turbo_drive();\n}",
    "solutionCode": "#[cfg(feature = \"fast\")]\nfn turbo_drive() {\n    step(3);\n}\n\nfn main() {\n    turbo_drive();\n}",
    "quickChips": [
      {
        "label": "#[cfg(feature = \"fast\")]",
        "insert": "#[cfg(feature = \"fast\")]"
      }
    ],
    "hints": [
      "制限時間は 4ティック以内だよ！今は wait_tick(3) のせいで 6ティックかかっているね。",
      "#[cfg(feature = \"fast\")] に変えて、turbo_drive の中の wait_tick(3); を消そう！",
      "#[cfg(feature = \"fast\")]\nfn turbo_drive() {\n    step(3);\n}"
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
      "featureFastMaxTicks": 4
    },
    "victoryCondition": {
      "reachGoal": true,
      "maxTicks": 4
    },
    "parTicks": 3
  },
  {
    "displayId": "14-5",
    "id": "cdecc4e1-f218-52f7-8f00-8c8273122a40",
    "index": 301,
    "chapter": 14,
    "chapterTitle": "第14章 CargoとCrates.ioについてより詳しく",
    "stageKind": "puzzle",
    "title": "14-5. 2クレート協調タイムアタック（ダイヤル＋L字）",
    "topicTag": "ワークスペース + ダイヤル + fast",
    "kurumiIntro": "ダイヤル計算クレート `mod cipher` と操縦クレート `mod pilot` を連携させ、`#[test]` と `#[cfg(feature = \"fast\")]` を使って 9 ティック以内でダイヤル解除＆L字ゴールを決めよう！",
    "goalSummary": "テスト合格＋ダイヤル(5)＋L字ゴール (3, 3) を 9ティック以内で達成",
    "bookSectionTitle": "14.3 ワークスペース協調と無駄のない手順",
    "bookSummary": "複数モジュールの計算結果をそのまま最短移動へつなぎ、余計なウェイトなしで目標を達成します。",
    "bookKeyCode": "try_dial(cipher::key());\npilot::turn_walk(3, 2);",
    "starterCode": "mod cipher {\n    pub fn key() -> i32 {\n        // TODO: モジュール内の処理を実装しよう\n        0\n    }\n}\n\nmod pilot {\n    pub fn run_l(dx: i32, dy: i32) {\n        // TODO: モジュール内の処理を実装しよう\n    }\n}\n\n#[test]\nfn t_key() { assert_eq!(cipher::key(), 5); }\n\n#[cfg(feature = \"fast\")]\nfn main() {\n    // 【達成条件】\n    // - ゴール到達: (3, 3)\n    // - ダイヤル解除: 値 5 を求めて try_dial(...) を呼ぶ\n    // - ユニットテスト: #[test] を 1個以上すべて合格\n    // - 制限時間: 9 ティック以内（#[cfg(feature = \"fast\")] 必須）\n    let target_dial = 5; // ダイヤル解除コード（5 を計算して try_dial へ）\n    let max_ticks = 9; // 目標制限ティック数\n    \n}",
    "solutionCode": "mod cipher {\n    pub fn key() -> i32 {\n        5\n    }\n}\n\nmod pilot {\n    pub fn run_l(dx: i32, dy: i32) {\n        step(dx);\n        turn_right();\n        step(dy);\n    }\n}\n\n#[test]\nfn t_key() { assert_eq!(cipher::key(), 5); }\n\n#[cfg(feature = \"fast\")]\nfn main() {\n    let k = cipher::key();\n    try_dial(k);\n    pilot::run_l(3, 2);\n}",
    "quickChips": [
      {
        "label": "5",
        "insert": "5"
      }
    ],
    "hints": [
      "ダイヤルの秘密番号は `5`、ゴール (3, 3) までは東3歩・右折・南2歩のL字ルートで 9ティック以内に走れるよ。",
      "`mod cipher { pub fn key() -> i32 { 5 } }`、`mod pilot { pub fn run_l(dx: i32, dy: i32) { ... } }`、`#[test]`、`#[cfg(feature = \"fast\")] fn main()` を組んで実行しよう。",
      "mod cipher {\n    pub fn key() -> i32 {\n        5\n    }\n}\n\nmod pilot {\n    pub fn run_l(dx: i32, dy: i32) {\n        step(dx);\n        turn_right();\n        step(dy);\n    }\n}\n\n#[test]\nfn t_key() { assert_eq!(cipher::key(), 5); }\n\n#[cfg(feature = \"fast\")]\nfn main() {\n    let k = cipher::key();\n    try_dial(k);\n    pilot::run_l(3, 2);\n}"
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
      "dial": {
        "x": 2,
        "y": 0,
        "secret": 5
      },
      "featureFastMaxTicks": 9
    },
    "victoryCondition": {
      "reachGoal": true,
      "dialSolved": true,
      "testsRequired": 1,
      "maxTicks": 9
    },
    "parTicks": 8
  },
  {
    "displayId": "14-6",
    "id": "dbacae9d-d4be-50b7-b0c8-74faf457c401",
    "index": 302,
    "chapter": 14,
    "chapterTitle": "第14章 CargoとCrates.ioについてより詳しく",
    "stageKind": "puzzle",
    "title": "14-6. 再エクスポートクレート＋テスト＋スイッチ高速突破",
    "topicTag": "mod pub + #[test] + maxTicks",
    "kurumiIntro": "高速クレート `mod express_crate` に `pub` 関数を実装し、`#[test]` と `#[cfg(feature = \"fast\")]` で 6 ティック以内にスイッチ先ゲートを抜けてゴールへ！",
    "goalSummary": "テスト合格＋スイッチ連動ゲート通過を 6ティック以内で達成",
    "bookSectionTitle": "14.2 & 14.3 クレート境界の高速テスト＆実行",
    "bookSummary": "ライブラリの公開APIを単体テストで検証したうえで、`fast` ビルドで制限時間内にタスクを完了させます。",
    "bookKeyCode": "mod express_crate { pub fn calc(a: i32) -> i32 { a + 2 } }",
    "starterCode": "mod express_crate {\n    pub fn calc(a: i32) -> i32 {\n        // TODO: モジュール内の処理を実装しよう\n        0\n    }\n}\n\nuse express_crate::calc;\n\n#[test]\nfn t_fast() {\n    assert_eq!(calc(2), 4);\n}\n\n#[cfg(feature = \"fast\")]\nfn main() {\n    // 【達成条件】\n    // - ゴール到達: (4, 1)\n    // - 全スイッチ作動: (2, 1)\n    // - 金庫目標: ⚡4 以上を貯める\n    // - ユニットテスト: #[test] を 1個以上すべて合格\n    // - 制限時間: 6 ティック以内（#[cfg(feature = \"fast\")] 必須）\n    let target_vault = 4; // 目標金庫エネルギー（⚡4以上）\n    let max_ticks = 6; // 目標制限ティック数\n    \n}",
    "solutionCode": "mod express_crate {\n    pub fn calc(a: i32) -> i32 {\n        a + 2\n    }\n}\n\nuse express_crate::calc;\n\n#[test]\nfn t_fast() {\n    assert_eq!(calc(2), 4);\n}\n\n#[cfg(feature = \"fast\")]\nfn main() {\n    let d = calc(2);\n    add_vault(d);\n    step(d);\n}",
    "quickChips": [
      {
        "label": "pub fn calc(a: i32) -> i32",
        "insert": "pub fn calc(a: i32) -> i32"
      }
    ],
    "hints": [
      "6ティック以内に金庫⚡4とスイッチ(2, 1)→ゲート(3, 1)→ゴール(4, 1)を通るため、`#[cfg(feature = \"fast\")]` と `#[test]` を両方書こう。",
      "`mod express_crate { pub fn calc(a: i32) -> i32 { a + 2 } }` と `use express_crate::calc;`、`#[test]` を書き、`main()` で `let d = calc(2); add_vault(d); step(d);` を実行しよう。",
      "mod express_crate {\n    pub fn calc(a: i32) -> i32 {\n        a + 2\n    }\n}\n\nuse express_crate::calc;\n\n#[test]\nfn t_fast() {\n    assert_eq!(calc(2), 4);\n}\n\n#[cfg(feature = \"fast\")]\nfn main() {\n    let d = calc(2);\n    add_vault(d);\n    step(d);\n}"
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
        "target": 4
      },
      "featureFastMaxTicks": 6
    },
    "victoryCondition": {
      "reachGoal": true,
      "vaultTarget": 4,
      "testsRequired": 1,
      "requireAllSwitches": true,
      "maxTicks": 6
    },
    "parTicks": 6
  },
  {
    "displayId": "14-7",
    "id": "12c1af9f-0396-5ba7-826d-d039f93befd9",
    "index": 303,
    "chapter": 14,
    "chapterTitle": "第14章 CargoとCrates.ioについてより詳しく",
    "title": "14-7. 第14章まとめ：最短リリースプロファイル航行",
    "topicTag": "第14章 総合実践",
    "kurumiIntro": "第14章のまとめ！L字コースを「最小ティック数（7ティック以内）」で走り切る最適化ルーチンを組もう。無駄な回転や待機は厳禁だよ！",
    "goalSummary": "fast 最適化で金庫⚡3＋L字ゴール (3, 2) を 7ティック以内に突破",
    "bookSectionTitle": "第14章まとめ — 高速リリースビルドと最短設計",
    "bookSummary": "`#[cfg(feature = \"fast\")]` 最適化や不要なステップの削減により、本番リリース時の効率を最大化できます。",
    "bookKeyCode": "#[cfg(feature = \"fast\")]\nfn express() { add_vault(3); step(3); turn_right(); step(1); }",
    "starterCode": "#[cfg(feature = \"fast\")]\nfn express() {\n    add_vault(3);\n    // wait_tick(4); を消して最短で進もう！\n    wait_tick(4);\n    step(3);\n    turn_right();\n    step(1);\n}\n\nfn main() {\n    express();\n}",
    "solutionCode": "#[cfg(feature = \"fast\")]\nfn express() {\n    add_vault(3);\n    step(3);\n    turn_right();\n    step(1);\n}\n\nfn main() {\n    express();\n}",
    "quickChips": [
      {
        "label": "step(3);",
        "insert": "step(3);"
      }
    ],
    "hints": [
      "add_vault(1Tick) + step(3Tick) + turn_right(1Tick) + step(1Tick) = 6Tick でゴールできるよ！",
      "邪魔な `wait_tick(4);` の行を削除すれば 7ティック以内でクリア！",
      "add_vault(3);\nstep(3);\nturn_right();\nstep(1);"
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
      "vault": {
        "x": 2,
        "y": 0,
        "initial": 0,
        "target": 3
      },
      "featureFastMaxTicks": 7
    },
    "victoryCondition": {
      "reachGoal": true,
      "vaultTarget": 3,
      "maxTicks": 7
    },
    "parTicks": 6
  },
  {
    "displayId": "14-8",
    "id": "d7f2d369-4988-5e3c-a141-7effcf5a3db9",
    "index": 304,
    "chapter": 14,
    "chapterTitle": "第14章 CargoとCrates.ioについてより詳しく",
    "stageKind": "puzzle",
    "title": "14-8. 第14章マスター：最短リリース便＋全設備制覇",
    "topicTag": "第14章 パズル総仕上げ",
    "kurumiIntro": "第14章の総仕上げタイムアタック！`#[test]` で準備確認しつつ、`#[cfg(feature = \"fast\")]` のもと、コアを拾って検査・強化・納品し 10 ティック以内で完全配達しよう！",
    "goalSummary": "テスト合格＋fast 最適化でコア検査・強化⚡4+・スイッチ突破を 10ティック以内に達成",
    "bookSectionTitle": "14.3 プロダクションリリース品質の最短工程",
    "bookSummary": "不要な待ち時間を削りつつ必須の安全検査とテストをすべてパスさせるリリース品質の設計です。",
    "bookKeyCode": "#[cfg(feature = \"fast\")]\nfn ship() { ... }",
    "starterCode": "#[cfg(feature = \"fast\")]\nfn ship() {\n    // TODO: 条件を満たすように実装しよう\n}\n\n#[test]\nfn t_ready() { assert_eq!(2 + 2, 4); }\n\nfn main() {\n    // 【達成条件】\n    // - ゴール到達: (4, 1)\n    // - 全スイッチ作動: (2, 1)\n    // - コア納品: 1個（⚡4以上） [拾う(1,1) -> 検査(2,1) -> 強化⚡4+(3,1) -> 納品(4,1)]\n    // - ユニットテスト: #[test] を 1個以上すべて合格\n    // - 制限時間: 10 ティック以内（#[cfg(feature = \"fast\")] 必須）\n    let min_core_power = 4; // 納品コアの必要パワー（⚡4以上）\n    let required_scans = 1; // 必要な検査回数\n    let max_ticks = 10; // 目標制限ティック数\n    \n}",
    "solutionCode": "#[cfg(feature = \"fast\")]\nfn ship() {\n    step(1);\n    let mut c = grab_core();\n    step(1);\n    scan(&c);\n    step(1);\n    boost(&mut c);\n    step(1);\n    deliver(c);\n}\n\n#[test]\nfn t_ready() { assert_eq!(2 + 2, 4); }\n\nfn main() {\n    ship();\n}",
    "quickChips": [
      {
        "label": "boost(&mut c);",
        "insert": "boost(&mut c);"
      }
    ],
    "hints": [
      "制限時間10ティック以内に、1歩でコア取得→2歩目で検査→3歩目で強化(⚡4+)→4歩目でスイッチ＆納品台 (4, 1) へ一直線に進もう。",
      "`#[cfg(feature = \"fast\")] fn ship()` の中に `step(1); let mut c = grab_core(); step(1); scan(&c); step(1); boost(&mut c); step(1); deliver(c);` を書き、`#[test]` も1つ用意しよう。",
      "#[cfg(feature = \"fast\")]\nfn ship() {\n    step(1);\n    let mut c = grab_core();\n    step(1);\n    scan(&c);\n    step(1);\n    boost(&mut c);\n    step(1);\n    deliver(c);\n}\n\n#[test]\nfn t_ready() { assert_eq!(2 + 2, 4); }\n\nfn main() {\n    ship();\n}"
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
          "label": "特急コア"
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
      "switches": [
        {
          "x": 2,
          "y": 1
        }
      ],
      "featureFastMaxTicks": 10
    },
    "victoryCondition": {
      "reachGoal": true,
      "deliverCores": 1,
      "minCorePower": 4,
      "scanCount": 1,
      "testsRequired": 1,
      "requireAllSwitches": true,
      "requireSpatialCoreRules": true,
      "maxTicks": 10
    },
    "parTicks": 10
  }
];
