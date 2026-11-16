import { StageDefinition } from '../types/game';

export const CHAPTER_11_STAGES: StageDefinition[] = [
  {
    "displayId": "11-1",
    "id": "0a19c51a-2f6c-5a4c-9247-29534bd93f8a",
    "index": 249,
    "chapter": 11,
    "chapterTitle": "第11章 自動テストを書く",
    "title": "11-1. #[test] と assert_eq! で品質チェック",
    "topicTag": "#[test] / assert_eq!",
    "kurumiIntro": "出荷前の品質チェックだよ！`#[test]` を付けたテスト関数の中で `assert_eq!` を使って計算が正しいことを自動検証しよう！",
    "goalSummary": "#[test] を1つ合格させてからゴール (3, 1) へ進もう",
    "bookSectionTitle": "11.1 テストの書き方 — #[test] と assert_eq!",
    "bookSummary": "`#[test]` 属性を付けた関数はテスト実行時に自動で走ります。`assert_eq!(左, 右)` は2つの値が等しいか検証し、違えばテスト失敗を教えてくれます。",
    "bookKeyCode": "#[test]\nfn test_add() {\n    assert_eq!(add(1, 2), 3);\n}",
    "starterCode": "fn gear_sum(a: i32, b: i32) -> i32 {\n    a + b\n}\n\n#[test]\nfn check_gear() {\n    // gear_sum(1, 2) が 3 になるか assert_eq! で確かめよう！\n    assert_eq!(gear_sum(1, 2), 0);\n}\n\nfn main() {\n    step(gear_sum(1, 2));\n}",
    "solutionCode": "fn gear_sum(a: i32, b: i32) -> i32 {\n    a + b\n}\n\n#[test]\nfn check_gear() {\n    assert_eq!(gear_sum(1, 2), 3);\n}\n\nfn main() {\n    step(gear_sum(1, 2));\n}",
    "quickChips": [
      {
        "label": "assert_eq!(gear_sum(1, 2), 3);",
        "insert": "assert_eq!(gear_sum(1, 2), 3);"
      }
    ],
    "hints": [
      "check_gear テストの期待値が 0 になっているからテストが落ちちゃうよ！",
      "assert_eq!(gear_sum(1, 2), 3); に直してテスト合格させよう。",
      "#[test]\nfn check_gear() {\n    assert_eq!(gear_sum(1, 2), 3);\n}"
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
      "testsRequired": 1
    },
    "parTicks": 3
  },
  {
    "displayId": "11-2",
    "id": "570bc484-898f-5e5f-91d9-3f80f7e43530",
    "index": 250,
    "chapter": 11,
    "chapterTitle": "第11章 自動テストを書く",
    "title": "11-2. テストが落ちた関数のバグを直す",
    "topicTag": "テスト駆動デバッグ",
    "kurumiIntro": "テストが「バグがあるよ！」って教えてくれたみたい！`calc_ratio(n)` の計算式を直して、`#[test]` をパスさせてね。",
    "goalSummary": "calc_ratio を直してテスト合格＋ゴール (4, 1) へ",
    "bookSectionTitle": "11.1 テスト結果から関数のバグを修正する",
    "bookSummary": "テストが失敗したときは、テストが期待する仕様に合うように本体関数のロジックを修正します。",
    "bookKeyCode": "fn calc_ratio(n: i32) -> i32 { n * 2 }",
    "starterCode": "fn calc_ratio(n: i32) -> i32 {\n    // 2倍にするつもりが +1 になってるよ！\n    n + 1\n}\n\n#[test]\nfn test_ratio() {\n    assert_eq!(calc_ratio(2), 4);\n}\n\nfn main() {\n    step(calc_ratio(2));\n}",
    "solutionCode": "fn calc_ratio(n: i32) -> i32 {\n    n * 2\n}\n\n#[test]\nfn test_ratio() {\n    assert_eq!(calc_ratio(2), 4);\n}\n\nfn main() {\n    step(calc_ratio(2));\n}",
    "quickChips": [
      {
        "label": "n * 2",
        "insert": "n * 2"
      }
    ],
    "hints": [
      "test_ratio は calc_ratio(2) == 4 を期待しているよ！",
      "calc_ratio の中を `n * 2` に書き換えよう。",
      "fn calc_ratio(n: i32) -> i32 {\n    n * 2\n}"
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
      "testsRequired": 1
    },
    "parTicks": 4
  },
  {
    "displayId": "11-3",
    "id": "cd6ee93f-2e76-53dc-9286-0b0e7c0188c3",
    "index": 251,
    "chapter": 11,
    "chapterTitle": "第11章 自動テストを書く",
    "stageKind": "puzzle",
    "title": "11-3. コンベア歩数計算のテスト駆動修正",
    "topicTag": "#[test] + コンベア短縮",
    "kurumiIntro": "ベルトコンベアが2箇所にあるコースで「必要な手動ステップ数」を求める関数を実装し、2つの `#[test]` をパスさせて 6ティック以内で走り切ろう！",
    "goalSummary": "2つの #[test] を合格させコンベアで6ティック以内に (5, 1) へ",
    "bookSectionTitle": "11.1 仕様を満たす計算関数のテスト駆動開発",
    "bookSummary": "テストケースが求める数学的仕様（例：コンベア分の割引計算）に合わせて本体関数を修正し、同時に実戦コースも走らせます。",
    "bookKeyCode": "#[test] fn t1() { assert_eq!(net_steps(5, 2), 3); }",
    "starterCode": "fn step_count(dist: i32) -> i32 {\n    // TODO: テストが通るように計算を修正しよう（今は dist のままになっているよ）\n    dist\n}\n\n#[test]\nfn t_conveyor() {\n    assert_eq!(step_count(5), 3);\n}\n\n#[test]\nfn t_zero() {\n    assert_eq!(step_count(0), 0);\n}\n\nfn main() {\n    // 【達成条件】\n    // - ゴール到達: (5, 1)\n    // - ユニットテスト: #[test] を 2個以上すべて合格\n    // - 制限時間: 6 ティック以内\n    let max_ticks = 6; // 目標制限ティック数\n    let s = step_count(5);\n    step(s);\n}",
    "solutionCode": "fn net_steps(total_dist: i32, conv_count: i32) -> i32 {\n    total_dist - conv_count\n}\n\n#[test]\nfn t_two_conv() {\n    assert_eq!(net_steps(5, 2), 3);\n}\n\n#[test]\nfn t_zero_conv() {\n    assert_eq!(net_steps(4, 0), 4);\n}\n\nfn main() {\n    let s = net_steps(5, 2);\n    step(s);\n}",
    "quickChips": [
      {
        "label": "total_dist - conv_count",
        "insert": "total_dist - conv_count"
      }
    ],
    "hints": [
      "コンベア1つにつき1歩節約できるので、fn net_steps(total_dist: i32, conv_count: i32) -> i32 { total_dist - conv_count } を定義しよう！",
      "#[test] 関数を2つ（例: net_steps(5, 2) == 3 と net_steps(4, 0) == 4）書き、main から step(net_steps(5, 2)); で走ろう！",
      "fn net_steps(total_dist: i32, conv_count: i32) -> i32 {\n    total_dist - conv_count\n}\n\n#[test]\nfn t_two_conv() {\n    assert_eq!(net_steps(5, 2), 3);\n}\n\n#[test]\nfn t_zero_conv() {\n    assert_eq!(net_steps(4, 0), 4);\n}\n\nfn main() {\n    let s = net_steps(5, 2);\n    step(s);\n}"
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
      "testsRequired": 2,
      "maxTicks": 6
    },
    "parTicks": 4
  },
  {
    "displayId": "11-4",
    "id": "5b076c31-42b8-59b9-aabe-7805a786eac2",
    "index": 252,
    "chapter": 11,
    "chapterTitle": "第11章 自動テストを書く",
    "title": "11-4. assert! マクロで真偽値条件を検証",
    "topicTag": "assert! マクロ",
    "kurumiIntro": "等しいか比べるだけじゃなく、「条件が `true` であること」を確かめたいときは `assert!(条件)` を使うよ！",
    "goalSummary": "assert! で正のエネルギー判定テストに合格しゴールへ",
    "bookSectionTitle": "11.1 assert! マクロで結果をチェックする",
    "bookSummary": "`assert!(式)` は式が `true` なら通過、`false` ならテストを失敗させます。範囲チェックや状態フラグの検証に便利です。",
    "bookKeyCode": "#[test]\nfn test_valid() { assert!(is_positive(3)); }",
    "starterCode": "fn is_positive(n: i32) -> bool {\n    n > 0\n}\n\n#[test]\nfn check_pos() {\n    // true になる値（たとえば 3）を渡して assert! を通そう！\n    assert!(is_positive(-1));\n}\n\nfn main() {\n    if is_positive(3) {\n        add_vault(3);\n        step(3);\n    }\n}",
    "solutionCode": "fn is_positive(n: i32) -> bool {\n    n > 0\n}\n\n#[test]\nfn check_pos() {\n    assert!(is_positive(3));\n}\n\nfn main() {\n    if is_positive(3) {\n        add_vault(3);\n        step(3);\n    }\n}",
    "quickChips": [
      {
        "label": "assert!(is_positive(3));",
        "insert": "assert!(is_positive(3));"
      }
    ],
    "hints": [
      "check_pos の中で `is_positive(-1)` を呼んでいるから false になってテストが失敗するよ！",
      "is_positive(3) に変えてみよう。",
      "assert!(is_positive(3));"
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
      "testsRequired": 1
    },
    "parTicks": 4
  },
  {
    "displayId": "11-5",
    "id": "f7279691-407d-568c-8f17-97b5a23aad9b",
    "index": 253,
    "chapter": 11,
    "chapterTitle": "第11章 自動テストを書く",
    "title": "11-5. 境界条件を含むテスト追加",
    "topicTag": "#[test] 追加作成",
    "kurumiIntro": "今度は君の手で `#[test]` をもう1つ追加してみよう！`max_limit(n)` が上限をちゃんと抑えられるかテストを2つ揃えるんだ。",
    "goalSummary": "2つの #[test] を合格させ L字ゴール (3, 2) へ進もう",
    "bookSectionTitle": "11.2 テストの追加と実行",
    "bookSummary": "正常系だけでなく、上限値を超えるケースなどのテストも並べて書くことで仕様の穴を防げます。",
    "bookKeyCode": "#[test]\nfn cap_over() { assert_eq!(cap(10), 3); }",
    "starterCode": "fn cap(n: i32) -> i32 {\n    if n > 3 { 3 } else { n }\n}\n\n#[test]\nfn cap_normal() {\n    assert_eq!(cap(1), 1);\n}\n\n#[test]\nfn cap_over() {\n    // cap(10) は上限 3 になるはず！期待値を 3 に直そう\n    assert_eq!(cap(10), 10);\n}\n\nfn main() {\n    step(cap(9));\n    turn_right();\n    step(cap(1));\n}",
    "solutionCode": "fn cap(n: i32) -> i32 {\n    if n > 3 { 3 } else { n }\n}\n\n#[test]\nfn cap_normal() {\n    assert_eq!(cap(1), 1);\n}\n\n#[test]\nfn cap_over() {\n    assert_eq!(cap(10), 3);\n}\n\nfn main() {\n    step(cap(9));\n    turn_right();\n    step(cap(1));\n}",
    "quickChips": [
      {
        "label": "assert_eq!(cap(10), 3);",
        "insert": "assert_eq!(cap(10), 3);"
      }
    ],
    "hints": [
      "cap(10) を呼ぶと上限 3 に抑えられるから、期待値 10 ではテストが失敗するよ！",
      "cap_over の中の `assert_eq!(cap(10), 10);` を `assert_eq!(cap(10), 3);` に直そう！",
      "#[test]\nfn cap_over() {\n    assert_eq!(cap(10), 3);\n}"
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
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "testsRequired": 2
    },
    "parTicks": 5
  },
  {
    "displayId": "11-6",
    "id": "163a23b2-ec90-5f86-a31b-8bc41aa59448",
    "index": 254,
    "chapter": 11,
    "chapterTitle": "第11章 自動テストを書く",
    "title": "11-6. 複数テストの編成と境界値チェック",
    "topicTag": "TDD / 複数テスト",
    "kurumiIntro": "テストは1つだけじゃ足りないよ！`is_safe(n)` 関数を修正し、2つの `#[test]` テストをどちらも合格させて安全ゲートを開こう！",
    "goalSummary": "2つの #[test] を合格させてゴール (3, 1) へ進もう",
    "bookSectionTitle": "11.3 テストの編成 — 正常系と境界値",
    "bookSummary": "複数のテスト関数を用意し、`assert!(条件)` と `assert_eq!` を組み合わせることで、仕様変更やリファクタリング時もバグを即座に発見できます。",
    "bookKeyCode": "#[test]\nfn ok_case() { assert!(is_safe(3)); }",
    "starterCode": "fn is_safe(n: i32) -> bool {\n    // 3 以上のとき true になるように直そう！\n    n > 10\n}\n\n#[test]\nfn test_three() {\n    assert!(is_safe(3));\n}\n\n#[test]\nfn test_zero() {\n    assert!(!is_safe(0));\n}\n\nfn main() {\n    if is_safe(3) { step(3); }\n}",
    "solutionCode": "fn is_safe(n: i32) -> bool {\n    n >= 3\n}\n\n#[test]\nfn test_three() {\n    assert!(is_safe(3));\n}\n\n#[test]\nfn test_zero() {\n    assert!(!is_safe(0));\n}\n\nfn main() {\n    if is_safe(3) { step(3); }\n}",
    "quickChips": [
      {
        "label": "n >= 3",
        "insert": "n >= 3"
      }
    ],
    "hints": [
      "今の is_safe(n) は `n > 10` だから test_three が失敗するよ！",
      "n >= 3 に直すと test_three も test_zero も両方パスするよ。",
      "fn is_safe(n: i32) -> bool {\n    n >= 3\n}"
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
      "testsRequired": 2
    },
    "parTicks": 3
  },
  {
    "displayId": "11-7",
    "id": "6cdfbfb3-0af5-52c3-b817-05dbbbc623e5",
    "index": 255,
    "chapter": 11,
    "chapterTitle": "第11章 自動テストを書く",
    "title": "11-7. 3つのテストケースで計算式を固める",
    "topicTag": "単体テスト3種",
    "kurumiIntro": "テストが3つ用意されているよ！`gear_power(base, mul)` が「ゼロの時」「通常の時」「大きい時」の全部に合格するよう実装を完成させてね。",
    "goalSummary": "3つの #[test] を全合格させて金庫⚡6＋ゴール (3, 1) へ",
    "bookSectionTitle": "11.3 複数のテストケースを揃える",
    "bookSummary": "0倍や上限など性質の異なるテストケースを3つ以上並べることで、仕様変更で壊れにくい頑丈な関数になります。",
    "bookKeyCode": "fn gear_power(b: i32, m: i32) -> i32 { b * m }",
    "starterCode": "fn gear_power(base: i32, mul: i32) -> i32 {\n    // base * mul を返すように直そう！\n    base + mul\n}\n\n#[test]\nfn test_zero() { assert_eq!(gear_power(0, 5), 0); }\n\n#[test]\nfn test_one() { assert_eq!(gear_power(2, 1), 2); }\n\n#[test]\nfn test_double() { assert_eq!(gear_power(2, 3), 6); }\n\nfn main() {\n    add_vault(gear_power(2, 3));\n    step(3);\n}",
    "solutionCode": "fn gear_power(base: i32, mul: i32) -> i32 {\n    base * mul\n}\n\n#[test]\nfn test_zero() { assert_eq!(gear_power(0, 5), 0); }\n\n#[test]\nfn test_one() { assert_eq!(gear_power(2, 1), 2); }\n\n#[test]\nfn test_double() { assert_eq!(gear_power(2, 3), 6); }\n\nfn main() {\n    add_vault(gear_power(2, 3));\n    step(3);\n}",
    "quickChips": [
      {
        "label": "base * mul",
        "insert": "base * mul"
      }
    ],
    "hints": [
      "今は `base + mul` になっているから 3つのテストが全部落ちているよ！",
      "`base * mul` に直すと一発で3つ全部グリーンになるよ！",
      "fn gear_power(base: i32, mul: i32) -> i32 {\n    base * mul\n}"
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
      "vaultTarget": 6,
      "testsRequired": 3
    },
    "parTicks": 4
  },
  {
    "displayId": "11-8",
    "id": "4a4bab84-ce14-50b1-9a7f-d1acadec111a",
    "index": 256,
    "chapter": 11,
    "chapterTitle": "第11章 自動テストを書く",
    "stageKind": "challenge",
    "title": "11-8. テストを自分で追加してスパーク突破",
    "topicTag": "#[test] 新規追加チャレンジ",
    "kurumiIntro": "境界条件を含めた2つ以上の `#[test]` を自分で書いて合格し、スパークの向こうへ進もう！",
    "goalSummary": "2つ以上の #[test] 合格＋スパーク回避＋金庫⚡4＋(5, 1)へ",
    "bookSectionTitle": "11.2 足りないテストケースを自ら補う",
    "bookSummary": "既存のテストを直すだけでなく、抜けていたケース用の `#[test]` 関数を新規追加してテスト網羅度を引き上げます。",
    "bookKeyCode": "#[test]\nfn t_clamp_min() { assert_eq!(clamp(1, 4), 4); }",
    "starterCode": "fn clamp_min(v: i32, min_v: i32) -> i32 {\n    // TODO: 条件を満たすように実装しよう\n    0\n}\n\n#[test]\nfn t_normal() {\n    assert_eq!(clamp_min(6, 4), 6);\n}\n\n#[test]\nfn t_min() {\n    assert_eq!(clamp_min(1, 4), 4);\n}\n\nfn main() {\n    // 【達成条件】\n    // - ゴール到達: (5, 1)\n    // - 金庫目標: ⚡4 以上を貯める\n    // - ユニットテスト: #[test] を 2個以上すべて合格\n    let target_vault = 4; // 目標金庫エネルギー（⚡4以上）\n    \n}",
    "solutionCode": "fn clamp_min(v: i32, min_v: i32) -> i32 {\n    if v < min_v { min_v } else { v }\n}\n\n#[test]\nfn t_normal() {\n    assert_eq!(clamp_min(6, 4), 6);\n}\n\n#[test]\nfn t_min() {\n    assert_eq!(clamp_min(1, 4), 4);\n}\n\nfn main() {\n    let val = clamp_min(1, 4);\n    add_vault(val);\n    for _ in 0..5 {\n        while is_spark_ahead() { wait_tick(1); }\n        step();\n    }\n}",
    "quickChips": [
      {
        "label": "#[test] fn t_min() { assert_eq!(clamp_min(1, 4), 4); }",
        "insert": "#[test]\nfn t_min() {\n    assert_eq!(clamp_min(1, 4), 4);\n}\n"
      }
    ],
    "hints": [
      "下限を保証する fn clamp_min(v: i32, min_v: i32) -> i32 を作り、#[test] を2つ（通常ケースと境界ケース）書いて合格させよう！",
      "main で add_vault(clamp_min(1, 4)); し、while is_spark_ahead() { wait_tick(1); } step(); を5回繰り返して (5, 1) へ！",
      "fn clamp_min(v: i32, min_v: i32) -> i32 {\n    if v < min_v { min_v } else { v }\n}\n\n#[test]\nfn t_normal() {\n    assert_eq!(clamp_min(6, 4), 6);\n}\n\n#[test]\nfn t_min() {\n    assert_eq!(clamp_min(1, 4), 4);\n}\n\nfn main() {\n    let val = clamp_min(1, 4);\n    add_vault(val);\n    for _ in 0..5 {\n        while is_spark_ahead() { wait_tick(1); }\n        step();\n    }\n}"
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
      "vault": {
        "x": 4,
        "y": 0,
        "initial": 0,
        "target": 4
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
      "vaultTarget": 4,
      "testsRequired": 2
    },
    "parTicks": 8
  },
  {
    "displayId": "11-9",
    "id": "f904680c-0b52-5074-8b88-fc6ee3f21fdc",
    "index": 257,
    "chapter": 11,
    "chapterTitle": "第11章 自動テストを書く",
    "stageKind": "puzzle",
    "title": "11-9. ダイヤル計算モジュールの結合テスト",
    "topicTag": "mod 結合テスト + ダイヤル",
    "kurumiIntro": "秘密のダイヤル番号を組み立てるモジュール `mod cipher` の公開関数を2つのテストで確かめてから、ダイヤルとスイッチゲートを一気に開こう！",
    "goalSummary": "2つの #[test] 合格＋ダイヤル(7)解錠＋全スイッチ＋(5, 1)へ",
    "bookSectionTitle": "11.3 公開モジュールの結合テスト",
    "bookSummary": "クレートの外側から公開API（`cipher::make_code`）を呼び出すテストで、モジュール同士のつながりを確認します。",
    "bookKeyCode": "assert_eq!(cipher::make_code(3, 4), 7);",
    "starterCode": "mod cipher {\n    pub fn make_code(a: i32, b: i32) -> i32 {\n        // TODO: モジュール内の処理を実装しよう\n        0\n    }\n}\n\n#[test]\nfn t1() { assert_eq!(cipher::make_code(1, 2), 3); }\n\n#[test]\nfn t2() { assert_eq!(cipher::make_code(3, 4), 7); }\n\nfn main() {\n    // 【達成条件】\n    // - ゴール到達: (5, 1)\n    // - 全スイッチ作動: (2, 1)\n    // - 金庫目標: ⚡7 以上を貯める\n    // - ダイヤル解除: 値 7 を求めて try_dial(...) を呼ぶ\n    // - ユニットテスト: #[test] を 2個以上すべて合格\n    let target_vault = 7; // 目標金庫エネルギー（⚡7以上）\n    let target_dial = 7; // ダイヤル解除コード（7 を計算して try_dial へ）\n    \n}",
    "solutionCode": "mod cipher {\n    pub fn make_code(a: i32, b: i32) -> i32 {\n        a + b\n    }\n}\n\n#[test]\nfn t1() { assert_eq!(cipher::make_code(1, 2), 3); }\n\n#[test]\nfn t2() { assert_eq!(cipher::make_code(3, 4), 7); }\n\nfn main() {\n    let secret = cipher::make_code(3, 4);\n    try_dial(secret);\n    add_vault(secret);\n    step(5);\n}",
    "quickChips": [
      {
        "label": "a + b",
        "insert": "a + b"
      }
    ],
    "hints": [
      "mod cipher { pub fn make_code(a: i32, b: i32) -> i32 { a + b } } を作り、#[test] を2つ用意しよう！",
      "main で secret = cipher::make_code(3, 4); (7) を使って try_dial(secret); add_vault(secret); step(5); でクリア！",
      "mod cipher {\n    pub fn make_code(a: i32, b: i32) -> i32 {\n        a + b\n    }\n}\n\n#[test]\nfn t1() { assert_eq!(cipher::make_code(1, 2), 3); }\n\n#[test]\nfn t2() { assert_eq!(cipher::make_code(3, 4), 7); }\n\nfn main() {\n    let secret = cipher::make_code(3, 4);\n    try_dial(secret);\n    add_vault(secret);\n    step(5);\n}"
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
        "secret": 7
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
        "target": 7
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "dialSolved": true,
      "vaultTarget": 7,
      "testsRequired": 2,
      "requireAllSwitches": true
    },
    "parTicks": 8
  },
  {
    "displayId": "11-10",
    "id": "ba9a9ab0-13b7-56aa-888e-5528cf88b85f",
    "index": 258,
    "chapter": 11,
    "chapterTitle": "第11章 自動テストを書く",
    "stageKind": "puzzle",
    "title": "11-10. ルート長テストとL字スイッチ迷路",
    "topicTag": "Vec 集計テスト + L字迷路",
    "kurumiIntro": "配列の合計を求める `sum_legs(v: Vec<i32>)` 関数を3つのテストで鍛えてから、そのL字ルートを実際に歩いてスイッチを踏もう！",
    "goalSummary": "3つのテスト合格＋全スイッチ＋金庫⚡5＋ゴール (3, 3) へ",
    "bookSectionTitle": "11.3 コレクション入力の単体テスト",
    "bookSummary": "空配列・1要素・複数要素の3パターンを `#[test]` で検証し、コレクションを扱う関数のバグを防ぎます。",
    "bookKeyCode": "#[test] fn t_empty() { assert_eq!(sum_legs(vec![]), 0); }",
    "starterCode": "fn sum_legs(legs: Vec<i32>) -> i32 {\n    // TODO: 条件を満たすように実装しよう\n    0\n}\n\n#[test]\nfn t_empty() { assert_eq!(sum_legs(vec![]), 0); }\n\n#[test]\nfn t_one() { assert_eq!(sum_legs(vec![4]), 4); }\n\n#[test]\nfn t_pair() { assert_eq!(sum_legs(vec![3, 2]), 5); }\n\nfn main() {\n    // 【達成条件】\n    // - ゴール到達: (3, 3)\n    // - 全スイッチ作動: (2, 1)\n    // - 金庫目標: ⚡5 以上を貯める\n    // - ユニットテスト: #[test] を 3個以上すべて合格\n    let target_vault = 5; // 目標金庫エネルギー（⚡5以上）\n    \n}",
    "solutionCode": "fn sum_legs(legs: Vec<i32>) -> i32 {\n    let mut s = 0;\n    for x in legs {\n        s += x;\n    }\n    s\n}\n\n#[test]\nfn t_empty() { assert_eq!(sum_legs(vec![]), 0); }\n\n#[test]\nfn t_one() { assert_eq!(sum_legs(vec![4]), 4); }\n\n#[test]\nfn t_pair() { assert_eq!(sum_legs(vec![3, 2]), 5); }\n\nfn main() {\n    let total = sum_legs(vec![3, 2]);\n    add_vault(total);\n    step(3);\n    turn_right();\n    step(2);\n}",
    "quickChips": [
      {
        "label": "s += x;",
        "insert": "s += x;"
      }
    ],
    "hints": [
      "Vec<i32> の合計を返す sum_legs 関数を作り、3つの #[test]（空・1要素・2要素など）でテストしよう！",
      "main では sum_legs(vec![3, 2]) を add_vault に渡し、step(3); turn_right(); step(2); でスイッチを踏みながら (3, 3) へ！",
      "fn sum_legs(legs: Vec<i32>) -> i32 {\n    let mut s = 0;\n    for x in legs {\n        s += x;\n    }\n    s\n}\n\n#[test]\nfn t_empty() { assert_eq!(sum_legs(vec![]), 0); }\n\n#[test]\nfn t_one() { assert_eq!(sum_legs(vec![4]), 4); }\n\n#[test]\nfn t_pair() { assert_eq!(sum_legs(vec![3, 2]), 5); }\n\nfn main() {\n    let total = sum_legs(vec![3, 2]);\n    add_vault(total);\n    step(3);\n    turn_right();\n    step(2);\n}"
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
        "target": 5
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "vaultTarget": 5,
      "testsRequired": 3,
      "requireAllSwitches": true
    },
    "parTicks": 8
  },
  {
    "displayId": "11-11",
    "id": "b4812899-7dd0-58bb-9d34-f53ab5d04515",
    "index": 259,
    "chapter": 11,
    "chapterTitle": "第11章 自動テストを書く",
    "stageKind": "puzzle",
    "title": "11-11. 金庫目標チェックと assert! テスト",
    "topicTag": "assert! + コア検証",
    "kurumiIntro": "コアの目標パワーに達しているか確かめる関数 `can_deliver(p)` を実装して、テスト2つに合格してから現場のコア強化＆納品をこなそう！",
    "goalSummary": "2テスト合格＋コア⚡4以上を検査・強化して納品しよう",
    "bookSectionTitle": "11.1 & 11.3 条件判定と空間ルールの一致",
    "bookSummary": "プログラム上の検査関数と実際の現場ルールを一致させることで、出荷前のミスをゼロにできます。",
    "bookKeyCode": "assert!(can_deliver(4));",
    "starterCode": "fn can_deliver(power: i32) -> bool {\n    // TODO: 条件を満たすように実装しよう\n    false\n}\n\n#[test]\nfn t_ok() { assert!(can_deliver(4)); }\n\n#[test]\nfn t_low() { assert!(!can_deliver(2)); }\n\nfn main() {\n    // 【達成条件】\n    // - ゴール到達: (4, 1)\n    // - コア納品: 1個（⚡4以上） [拾う(1,1) -> 検査(2,1) -> 強化⚡4+(3,1) -> 納品(4,1)]\n    // - ユニットテスト: #[test] を 2個以上すべて合格\n    let min_core_power = 4; // 納品コアの必要パワー（⚡4以上）\n    let required_scans = 1; // 必要な検査回数\n    \n}",
    "solutionCode": "fn can_deliver(power: i32) -> bool {\n    power >= 4\n}\n\n#[test]\nfn t_ok() { assert!(can_deliver(4)); }\n\n#[test]\nfn t_low() { assert!(!can_deliver(2)); }\n\nfn main() {\n    step(1);\n    let mut c = grab_core();\n    step(1);\n    scan(&c);\n    step(1);\n    boost(&mut c);\n    if can_deliver(core_power()) {\n        step(1);\n        deliver(c);\n    }\n}",
    "quickChips": [
      {
        "label": "power >= 4",
        "insert": "power >= 4"
      }
    ],
    "hints": [
      "fn can_deliver(power: i32) -> bool { power >= 4 } を定義し、assert!(can_deliver(4)) と assert!(!can_deliver(2)) の2つの #[test] を書こう！",
      "main で (1,1)コア取得→(2,1) scan(&c)→(3,1) boost(&mut c) し、can_deliver(core_power()) が true なら (4,1) で deliver(c);！",
      "fn can_deliver(power: i32) -> bool {\n    power >= 4\n}\n\n#[test]\nfn t_ok() { assert!(can_deliver(4)); }\n\n#[test]\nfn t_low() { assert!(!can_deliver(2)); }\n\nfn main() {\n    step(1);\n    let mut c = grab_core();\n    step(1);\n    scan(&c);\n    step(1);\n    boost(&mut c);\n    if can_deliver(core_power()) {\n        step(1);\n        deliver(c);\n    }\n}"
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
          "label": "試験コア"
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
      "testsRequired": 2,
      "requireSpatialCoreRules": true
    },
    "parTicks": 9
  },
  {
    "displayId": "11-12",
    "id": "35e89f94-e94e-5719-a257-93db17b70a38",
    "index": 260,
    "chapter": 11,
    "chapterTitle": "第11章 自動テストを書く",
    "stageKind": "challenge",
    "title": "11-12. モジュール結合テスト＋コア納品チャレンジ",
    "topicTag": "3テスト + コア空間納品",
    "kurumiIntro": "公開モジュール `mod core_calc` のパワー強化計算を実装して3つのテストに全部合格し、実際の現場でも検査・強化・納品を成し遂げよう！",
    "goalSummary": "3テスト合格・金庫⚡5・コア⚡5+納品（空間ルール）を達成",
    "bookSectionTitle": "11.3 リファクタリングしてもテストが守ってくれる安心感",
    "bookSummary": "ロジックと現場の操作をつなぐ計算部分をテストで固めることで、自信を持って複雑な手順を走らせられます。",
    "bookKeyCode": "pub fn boost_calc(p: i32) -> i32 { p + 2 }",
    "starterCode": "mod core_calc {\n    pub fn boost_calc(p: i32) -> i32 {\n        // TODO: モジュール内の処理を実装しよう\n        0\n    }\n}\n\n#[test]\nfn t_base1() { assert_eq!(core_calc::boost_calc(1), 3); }\n\n#[test]\nfn t_base3() { assert_eq!(core_calc::boost_calc(3), 5); }\n\n#[test]\nfn t_zero() { assert!(core_calc::boost_calc(0) == 2); }\n\nfn main() {\n    // 【達成条件】\n    // - ゴール到達: (4, 1)\n    // - 金庫目標: ⚡5 以上を貯める\n    // - コア納品: 1個（⚡5以上） [拾う(1,1) -> 検査(2,1) -> 強化⚡5+(3,1) -> 納品(4,1)]\n    // - ユニットテスト: #[test] を 3個以上すべて合格\n    let target_vault = 5; // 目標金庫エネルギー（⚡5以上）\n    let min_core_power = 5; // 納品コアの必要パワー（⚡5以上）\n    let required_scans = 1; // 必要な検査回数\n    \n}",
    "solutionCode": "mod core_calc {\n    pub fn boost_calc(p: i32) -> i32 {\n        p + 2\n    }\n}\n\n#[test]\nfn t_base1() { assert_eq!(core_calc::boost_calc(1), 3); }\n\n#[test]\nfn t_base3() { assert_eq!(core_calc::boost_calc(3), 5); }\n\n#[test]\nfn t_zero() { assert!(core_calc::boost_calc(0) == 2); }\n\nfn main() {\n    let target = core_calc::boost_calc(3);\n    add_vault(target);\n    step(1);\n    let mut c = grab_core();\n    step(1);\n    scan(&c);\n    step(1);\n    boost(&mut c);\n    step(1);\n    deliver(c);\n}",
    "quickChips": [
      {
        "label": "p + 2",
        "insert": "p + 2"
      }
    ],
    "hints": [
      "mod core_calc { pub fn boost_calc(p: i32) -> i32 { p + 2 } } と3つの #[test] を書こう！",
      "main で add_vault(core_calc::boost_calc(3)); を呼び、(1,1)コア取得→(2,1) scan(&c)→(3,1) boost(&mut c)→(4,1) deliver(c)！",
      "mod core_calc {\n    pub fn boost_calc(p: i32) -> i32 {\n        p + 2\n    }\n}\n\n#[test]\nfn t_base1() { assert_eq!(core_calc::boost_calc(1), 3); }\n\n#[test]\nfn t_base3() { assert_eq!(core_calc::boost_calc(3), 5); }\n\n#[test]\nfn t_zero() { assert!(core_calc::boost_calc(0) == 2); }\n\nfn main() {\n    let target = core_calc::boost_calc(3);\n    add_vault(target);\n    step(1);\n    let mut c = grab_core();\n    step(1);\n    scan(&c);\n    step(1);\n    boost(&mut c);\n    step(1);\n    deliver(c);\n}"
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
          "label": "テストコア"
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
      "minCorePower": 5,
      "scanCount": 1,
      "vaultTarget": 5,
      "testsRequired": 3,
      "requireSpatialCoreRules": true
    },
    "parTicks": 10
  },
  {
    "displayId": "11-13",
    "id": "ae5f34d9-8b3d-5240-b03b-053ab713166e",
    "index": 261,
    "chapter": 11,
    "chapterTitle": "第11章 自動テストを書く",
    "title": "11-13. Result を返す関数をテストする",
    "topicTag": "Result のテスト",
    "kurumiIntro": "エラーを返す可能性がある関数 `parse_code(n)` もテストできるよ！`match` を使って `Ok` のときと `Err` のときをそれぞれテストしよう。",
    "goalSummary": "Okケースと Errケースの2テストを合格させゴールへ",
    "bookSectionTitle": "11.1 & 11.3 Result の単体テスト",
    "bookSummary": "エラーになるべき入力を与えてちゃんと `Err` が返ることをテストする「異常系テスト」も、高品質なソフトウェアには欠かせません。",
    "bookKeyCode": "match parse_code(3) { Ok(v) => assert_eq!(v, 3), Err(_) => panic!() }",
    "starterCode": "fn parse_code(n: i32) -> Result<i32, String> {\n    // n > 0 のとき Ok(n)、それ以外は Err(\"負の値はNG\") にしよう！\n    Err(\"未実装\")\n}\n\n#[test]\nfn test_ok() {\n    assert_eq!(parse_code(4).unwrap(), 4);\n}\n\n#[test]\nfn test_err() {\n    let fallback = parse_code(-1).unwrap_or(99);\n    assert_eq!(fallback, 99);\n}\n\nfn main() {\n    step(parse_code(4).unwrap_or(1));\n}",
    "solutionCode": "fn parse_code(n: i32) -> Result<i32, String> {\n    if n > 0 { Ok(n) } else { Err(\"負の値はNG\") }\n}\n\n#[test]\nfn test_ok() {\n    assert_eq!(parse_code(4).unwrap(), 4);\n}\n\n#[test]\nfn test_err() {\n    let fallback = parse_code(-1).unwrap_or(99);\n    assert_eq!(fallback, 99);\n}\n\nfn main() {\n    step(parse_code(4).unwrap_or(1));\n}",
    "quickChips": [
      {
        "label": "if n > 0 { Ok(n) } else { Err(\"負\") }",
        "insert": "if n > 0 { Ok(n) } else { Err(\"負の値はNG\") }"
      }
    ],
    "hints": [
      "test_ok では 4 を渡したときに Ok(4) が返ってきてほしいよ。",
      "if n > 0 { Ok(n) } else { Err(\"負の値はNG\") } を書こう！",
      "fn parse_code(n: i32) -> Result<i32, String> {\n    if n > 0 { Ok(n) } else { Err(\"負の値はNG\") }\n}"
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
      "testsRequired": 2
    },
    "parTicks": 4
  },
  {
    "displayId": "11-14",
    "id": "0b91ddc0-b6f7-5e13-912f-333b7f29bdb1",
    "index": 262,
    "chapter": 11,
    "chapterTitle": "第11章 自動テストを書く",
    "stageKind": "puzzle",
    "title": "11-14. Result 計算テスト3本勝負",
    "topicTag": "3テスト合格 + Result",
    "kurumiIntro": "正の数だけ受け付けて2倍にする安全関数 `double_positive(n) -> Result<i32, String>` を書いて、3つのテスト全部に通そう！",
    "goalSummary": "3つのテスト（正・0・負）すべて合格して金庫⚡6＋(3, 1)へ",
    "bookSectionTitle": "11.3 Result 関数の正常・境界・異常テスト",
    "bookSummary": "正の正常ケース、境界のゼロ、負の異常ケースの3種類をテストすることで関数の品質を保証します。",
    "bookKeyCode": "if n > 0 { Ok(n * 2) } else { Err(\"無効\") }",
    "starterCode": "fn double_positive(n: i32) -> Result<i32, String> {\n    // TODO: 条件を満たすように実装しよう\n    Err(\"TODO\")\n}\n\n#[test]\nfn t_pos() { assert_eq!(double_positive(3).unwrap(), 6); }\n\n#[test]\nfn t_zero() { assert_eq!(double_positive(0).unwrap_or(-1), -1); }\n\n#[test]\nfn t_neg() { assert_eq!(double_positive(-2).unwrap_or(-1), -1); }\n\nfn main() {\n    // 【達成条件】\n    // - ゴール到達: (3, 1)\n    // - 金庫目標: ⚡6 以上を貯める\n    // - ユニットテスト: #[test] を 3個以上すべて合格\n    let target_vault = 6; // 目標金庫エネルギー（⚡6以上）\n    \n}",
    "solutionCode": "fn double_positive(n: i32) -> Result<i32, String> {\n    if n > 0 { Ok(n * 2) } else { Err(\"無効\") }\n}\n\n#[test]\nfn t_pos() { assert_eq!(double_positive(3).unwrap(), 6); }\n\n#[test]\nfn t_zero() { assert_eq!(double_positive(0).unwrap_or(-1), -1); }\n\n#[test]\nfn t_neg() { assert_eq!(double_positive(-2).unwrap_or(-1), -1); }\n\nfn main() {\n    let val = double_positive(3).unwrap_or(0);\n    add_vault(val);\n    step(3);\n}",
    "quickChips": [
      {
        "label": "if n > 0 { Ok(n * 2) } else { Err(\"無効\") }",
        "insert": "if n > 0 { Ok(n * 2) } else { Err(\"無効\") }"
      }
    ],
    "hints": [
      "fn double_positive(n: i32) -> Result<i32, String> で n > 0 なら Ok(n * 2)、そうでなければ Err(\"無効\") を返そう！",
      "正・0・負の3つの #[test] を書き、main で double_positive(3).unwrap_or(0) の 6 を金庫に入れて step(3); しよう！",
      "fn double_positive(n: i32) -> Result<i32, String> {\n    if n > 0 { Ok(n * 2) } else { Err(\"無効\") }\n}\n\n#[test]\nfn t_pos() { assert_eq!(double_positive(3).unwrap(), 6); }\n\n#[test]\nfn t_zero() { assert_eq!(double_positive(0).unwrap_or(-1), -1); }\n\n#[test]\nfn t_neg() { assert_eq!(double_positive(-2).unwrap_or(-1), -1); }\n\nfn main() {\n    let val = double_positive(3).unwrap_or(0);\n    add_vault(val);\n    step(3);\n}"
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
      "vaultTarget": 6,
      "testsRequired": 3
    },
    "parTicks": 5
  },
  {
    "displayId": "11-15",
    "id": "9dc94aec-ccf0-5432-8846-c0c15b87b666",
    "index": 263,
    "chapter": 11,
    "chapterTitle": "第11章 自動テストを書く",
    "title": "11-15. 第11章まとめ：結合テスト付きスイッチ突破",
    "topicTag": "第11章 総合実践",
    "kurumiIntro": "第11章の総仕上げ！公開モジュール `mod calc` の関数を呼び出す結合テスト（2つ）をパスさせてから、スイッチ連動ゲートを越えてゴールしよう！",
    "goalSummary": "2つの #[test] を合格させ、金庫⚡4＋スイッチ突破でゴールへ",
    "bookSectionTitle": "第11章まとめ — 単体テストと結合テスト",
    "bookSummary": "モジュールの公開APIを通したテスト（結合テスト）と内部ロジックのテストを組み合わせれば、自信を持ってロボットを出荷できます。",
    "bookKeyCode": "#[test]\nfn integration() { assert_eq!(calc::total(2, 2), 4); }",
    "starterCode": "mod calc {\n    pub fn total(a: i32, b: i32) -> i32 {\n        // a + b を返すように直そう！\n        a\n    }\n}\n\n#[test]\nfn t_one() { assert_eq!(calc::total(1, 2), 3); }\n\n#[test]\nfn t_two() { assert_eq!(calc::total(2, 2), 4); }\n\nfn main() {\n    let dist = calc::total(2, 2);\n    add_vault(dist);\n    step(dist);\n}",
    "solutionCode": "mod calc {\n    pub fn total(a: i32, b: i32) -> i32 {\n        a + b\n    }\n}\n\n#[test]\nfn t_one() { assert_eq!(calc::total(1, 2), 3); }\n\n#[test]\nfn t_two() { assert_eq!(calc::total(2, 2), 4); }\n\nfn main() {\n    let dist = calc::total(2, 2);\n    add_vault(dist);\n    step(dist);\n}",
    "quickChips": [
      {
        "label": "a + b",
        "insert": "a + b"
      }
    ],
    "hints": [
      "calc::total が a しか返していないから t_one と t_two の両方が落ちているよ！",
      "calc::total の中を `a + b` に直そう。",
      "pub fn total(a: i32, b: i32) -> i32 {\n    a + b\n}"
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
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "vaultTarget": 4,
      "testsRequired": 2
    },
    "parTicks": 5
  },
  {
    "displayId": "11-16",
    "id": "d50a425c-2aac-553f-a6c3-87f3bfa09626",
    "index": 264,
    "chapter": 11,
    "chapterTitle": "第11章 自動テストを書く",
    "stageKind": "challenge",
    "title": "11-16. 第11章挑戦：完全品質保証の迷宮突破",
    "topicTag": "第11章 最終チャレンジ",
    "kurumiIntro": "第11章の最終チャレンジ！設計モジュール `mod spec` の計算関数と3つの結合テストを書き上げて合格したら、2スイッチ・スパーク・ゲート・金庫⚡6の迷宮を駆け抜けよう！",
    "goalSummary": "3テスト合格＋\"TEST_PASS\"＋金庫⚡6・全スイッチ・(5, 3) へ",
    "bookSectionTitle": "第11章まとめ — テストに裏打ちされた安心の発進",
    "bookSummary": "3つ以上の単体・結合テストで検証された計算モジュールを使い、障害物だらけのコースを確実に突破します。",
    "bookKeyCode": "#[test] × 3 + 迷宮攻略",
    "starterCode": "mod spec {\n    pub fn energy(a: i32, b: i32) -> i32 {\n        // TODO: モジュール内の処理を実装しよう\n        0\n    }\n}\n\n#[test]\nfn t1() { assert_eq!(spec::energy(1, 2), 6); }\n\n#[test]\nfn t2() { assert_eq!(spec::energy(0, 3), 6); }\n\n#[test]\nfn t3() { assert!(spec::energy(2, 2) == 8); }\n\nfn safe_go(n: i32) {\n    // TODO: 条件を満たすように実装しよう\n}\n\nfn main() {\n    // 【達成条件】\n    // - ゴール到達: (5, 3)\n    // - 全スイッチ作動: (1, 1), (4, 1)\n    // - 金庫目標: ⚡6 以上を貯める\n    // - 標準出力(println!): \"TEST_PASS\" を出力\n    // - ユニットテスト: #[test] を 3個以上すべて合格\n    let target_vault = 6; // 目標金庫エネルギー（⚡6以上）\n    let expected_output = \"TEST_PASS\"; // println! で出力に含める文字列\n    \n}",
    "solutionCode": "mod spec {\n    pub fn energy(a: i32, b: i32) -> i32 {\n        (a + b) * 2\n    }\n}\n\n#[test]\nfn t1() { assert_eq!(spec::energy(1, 2), 6); }\n\n#[test]\nfn t2() { assert_eq!(spec::energy(0, 3), 6); }\n\n#[test]\nfn t3() { assert!(spec::energy(2, 2) == 8); }\n\nfn safe_go(n: i32) {\n    for _ in 0..n {\n        while is_spark_ahead() || !is_gate_open() { wait_tick(1); }\n        step();\n    }\n}\n\nfn main() {\n    let e = spec::energy(1, 2);\n    add_vault(e);\n    println!(\"TEST_PASS\");\n    safe_go(5);\n    turn_right();\n    safe_go(2);\n}",
    "quickChips": [
      {
        "label": "(a + b) * 2",
        "insert": "(a + b) * 2"
      }
    ],
    "hints": [
      "mod spec { pub fn energy(a: i32, b: i32) -> i32 { (a + b) * 2 } } を定義して3つの #[test] に合格させよう！",
      "main で add_vault(spec::energy(1, 2)); と println!(\"TEST_PASS\"); を呼び、スパーク＆ゲート待ちしながら東5歩→右折→南2歩で (5, 3) へ！",
      "mod spec {\n    pub fn energy(a: i32, b: i32) -> i32 {\n        (a + b) * 2\n    }\n}\n\n#[test]\nfn t1() { assert_eq!(spec::energy(1, 2), 6); }\n\n#[test]\nfn t2() { assert_eq!(spec::energy(0, 3), 6); }\n\n#[test]\nfn t3() { assert!(spec::energy(2, 2) == 8); }\n\nfn safe_go(n: i32) {\n    for _ in 0..n {\n        while is_spark_ahead() || !is_gate_open() { wait_tick(1); }\n        step();\n    }\n}\n\nfn main() {\n    let e = spec::energy(1, 2);\n    add_vault(e);\n    println!(\"TEST_PASS\");\n    safe_go(5);\n    turn_right();\n    safe_go(2);\n}"
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
      "switches": [
        {
          "x": 1,
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
      "vaultTarget": 6,
      "testsRequired": 3,
      "stdoutIncludes": [
        "TEST_PASS"
      ],
      "requireAllSwitches": true
    },
    "parTicks": 13
  }
];
