import { StageDefinition } from '../types/game';

export const CHAPTER_5_STAGES: StageDefinition[] = [
  {
    "displayId": "5-1",
    "id": "1395d0fb-100f-5691-bb36-d711fd1986a4",
    "index": 129,
    "chapter": 5,
    "chapterTitle": "第5章 Enumとパターンマッチング",
    "title": "5-1. enum とデータ付きバリアント",
    "topicTag": "enum 列挙型",
    "kurumiIntro": "「右へ曲がる」や「2歩進む」みたいなコマンドの種類を `enum` で表現しよう！データ付きのバリアントも作れるんだよ。",
    "goalSummary": "enum Command::Move(3) を使ってゴール (3, 1) へ進もう",
    "bookSectionTitle": "6.1 enum を定義する",
    "bookSummary": "`enum` は「いくつかの決まった選択肢のどれか1つ」を表します。さらに `Move(i32)` のように、選択肢ごとにデータを持たせることもできる強力な仕組みです。",
    "bookKeyCode": "enum Command {\n    Move(i32),\n    TurnRight,\n}",
    "starterCode": "enum Command {\n    Move(i32),\n    TurnRight,\n}\n\nfn run_cmd(cmd: Command) {\n    match cmd {\n        Command::Move(n) => step(n),\n        Command::TurnRight => turn_right(),\n    }\n}\n\nfn main() {\n    let c = Command::Move(1);\n    run_cmd(c);\n}",
    "solutionCode": "enum Command {\n    Move(i32),\n    TurnRight,\n}\n\nfn run_cmd(cmd: Command) {\n    match cmd {\n        Command::Move(n) => step(n),\n        Command::TurnRight => turn_right(),\n    }\n}\n\nfn main() {\n    let c = Command::Move(3);\n    run_cmd(c);\n}",
    "quickChips": [
      {
        "label": "Command::Move(3)",
        "insert": "Command::Move(3)"
      }
    ],
    "hints": [
      "main関数の中で渡している Command::Move(1) を変更してみよう！",
      "Command::Move(3) にすると 3歩進んでゴールに着くよ。",
      "let c = Command::Move(3);\nrun_cmd(c);"
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
    "displayId": "5-2",
    "id": "d14868f8-8cbf-530d-a93d-a98815a08d63",
    "index": 130,
    "chapter": 5,
    "chapterTitle": "第5章 Enumとパターンマッチング",
    "title": "5-2. match 演算子と網羅性",
    "topicTag": "match の網羅性",
    "kurumiIntro": "Rustの `match` は enum の選択肢を1つでも書き忘れるとコンパイルエラーで教えてくれるんだ！全部のパターンを埋めてね。",
    "goalSummary": "欠けている Signal::Stop を追加して match を完成させよう",
    "bookSectionTitle": "6.2 match 制御フロー演算子",
    "bookSummary": "`match` はすべての可能性を漏れなくチェック（網羅性検査）します。書き漏れがなくなるため、想定外の状態でバグる心配がありません。",
    "bookKeyCode": "match sig {\n    Signal::Go => step(3),\n    Signal::Stop => wait_tick(1),\n}",
    "starterCode": "enum Signal {\n    Go,\n    Stop,\n}\n\nfn main() {\n    let sig = Signal::Go;\n    // Stop のパターンが抜けているのでコンパイルエラーになるよ！\n    match sig {\n        Signal::Go => step(3),\n    }\n}",
    "solutionCode": "enum Signal {\n    Go,\n    Stop,\n}\n\nfn main() {\n    let sig = Signal::Go;\n    match sig {\n        Signal::Go => step(3),\n        Signal::Stop => wait_tick(1),\n    }\n}",
    "quickChips": [
      {
        "label": "Signal::Stop => wait_tick(1),",
        "insert": "Signal::Stop => wait_tick(1),"
      }
    ],
    "hints": [
      "そのまま実行すると「網羅性が不足しています（不足: Stop）」と表示されるよ！",
      "match sig { ... } の中に `Signal::Stop => wait_tick(1),` を書き足そう。",
      "match sig {\n    Signal::Go => step(3),\n    Signal::Stop => wait_tick(1),\n}"
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
    "displayId": "5-3",
    "id": "0abe7860-9851-59fc-a65f-b3773dcbc1e4",
    "index": 131,
    "chapter": 5,
    "chapterTitle": "第5章 Enumとパターンマッチング",
    "title": "5-3. match で値を返す（式としての match）",
    "topicTag": "let x = match ...",
    "kurumiIntro": "`match` も `if` と同じように結果を値として返せるんだ！信号の色に合わせて金庫へチャージするパワーを決めよう。",
    "goalSummary": "match が返す数値で金庫⚡3を満たし、ゴール (3, 1) へ",
    "bookSectionTitle": "6.2 パターンに束縛して値を返す match",
    "bookSummary": "各アーム（腕）が同じ型の値を返すなら、`let power = match lamp { ... };` のように変数へ直接代入できます。",
    "bookKeyCode": "let p = match lamp {\n    Lamp::Gold => 3,\n    _ => 1,\n};",
    "starterCode": "enum Lamp {\n    Red,\n    Blue,\n    Gold,\n}\n\nfn main() {\n    let lamp = Lamp::Gold;\n    let power = match lamp {\n        Lamp::Red => 1,\n        Lamp::Blue => 2,\n        // Gold のときは 3 を返そう！\n        Lamp::Gold => 0,\n    };\n    add_vault(power);\n    step(power);\n}",
    "solutionCode": "enum Lamp {\n    Red,\n    Blue,\n    Gold,\n}\n\nfn main() {\n    let lamp = Lamp::Gold;\n    let power = match lamp {\n        Lamp::Red => 1,\n        Lamp::Blue => 2,\n        Lamp::Gold => 3,\n    };\n    add_vault(power);\n    step(power);\n}",
    "quickChips": [
      {
        "label": "Lamp::Gold => 3,",
        "insert": "Lamp::Gold => 3,"
      }
    ],
    "hints": [
      "Lamp::Gold => 0 になっているから金庫も歩数も足りなくなっているよ！",
      "Lamp::Gold => 3 に変えればOK！",
      "Lamp::Gold => 3,"
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
    "displayId": "5-4",
    "id": "aaf4d7e9-f870-51f1-adf1-33c70b50c739",
    "index": 132,
    "chapter": 5,
    "chapterTitle": "第5章 Enumとパターンマッチング",
    "title": "5-4. ワイルドカード _ プレースホルダー",
    "topicTag": "match と _ ワイルドカード",
    "kurumiIntro": "たくさんの種類のうち、特定の1つだけ特別扱いして「それ以外は全部同じ処理でいいよ」というときは `_ => ...` が超便利！",
    "goalSummary": "ワイルドカード _ を追加してエラーを直し、ゴール (4, 1) へ",
    "bookSectionTitle": "6.2 _ プレースホルダーによる網羅",
    "bookSummary": "パターン `_` はどんな値にも一致します。`match` の最後に `_ => {}` を置くことで残りの全パターンを一括で処理できます。",
    "bookKeyCode": "match num {\n    4 => step(4),\n    _ => {},\n}",
    "starterCode": "enum Gear {\n    Small,\n    Medium,\n    Large,\n    Mega,\n}\n\nfn main() {\n    let g = Gear::Large;\n    // Small と Medium しか書いていないから未網羅エラーになるよ！_ を足そう\n    match g {\n        Gear::Large => step(4),\n    }\n}",
    "solutionCode": "enum Gear {\n    Small,\n    Medium,\n    Large,\n    Mega,\n}\n\nfn main() {\n    let g = Gear::Large;\n    match g {\n        Gear::Large => step(4),\n        _ => step(1),\n    }\n}",
    "quickChips": [
      {
        "label": "_ => step(1),",
        "insert": "_ => step(1),"
      }
    ],
    "hints": [
      "4種類のバリアントがあるのに Gear::Large しか書かれていないよ。",
      "`_ => step(1),` を追加すれば残りの3つを一気にカバーできるよ！",
      "match g {\n    Gear::Large => step(4),\n    _ => step(1),\n}"
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
    "displayId": "5-5",
    "id": "3bf874e0-1b14-507d-ab3e-f9bab2d94df7",
    "index": 133,
    "chapter": 5,
    "chapterTitle": "第5章 Enumとパターンマッチング",
    "title": "5-5. enum にも impl メソッドが書ける！",
    "topicTag": "enum + impl",
    "kurumiIntro": "実は `struct` だけじゃなくて `enum` にも `impl` ブロックでメソッドを定義できるんだよ！`Action::Charge(3).apply()` みたいに動かしてみよう。",
    "goalSummary": "impl Action 内の apply(&self) を完成させて金庫⚡3＋ゴールへ",
    "bookSectionTitle": "6.1 enum 上のメソッド定義",
    "bookSummary": "`enum` に `impl` でメソッドを定義し、内部で `match self` を使うと、オブジェクト指向のようなきれいな命令実行器を作れます。",
    "bookKeyCode": "impl Action {\n    fn apply(&self) { match self { ... } }\n}",
    "starterCode": "enum Action {\n    Walk(i32),\n    Charge(i32),\n}\n\nimpl Action {\n    fn apply(&self) {\n        match self {\n            Action::Walk(n) => step(*n),\n            // Charge(v) のときに add_vault(*v) するよう書こう！\n            Action::Charge(v) => {},\n        }\n    }\n}\n\nfn main() {\n    Action::Charge(3).apply();\n    Action::Walk(3).apply();\n}",
    "solutionCode": "enum Action {\n    Walk(i32),\n    Charge(i32),\n}\n\nimpl Action {\n    fn apply(&self) {\n        match self {\n            Action::Walk(n) => step(*n),\n            Action::Charge(v) => add_vault(*v),\n        }\n    }\n}\n\nfn main() {\n    Action::Charge(3).apply();\n    Action::Walk(3).apply();\n}",
    "quickChips": [
      {
        "label": "add_vault(*v)",
        "insert": "add_vault(*v)"
      }
    ],
    "hints": [
      "Action::Charge(v) の処理が空 `{}` になっているよ！",
      "Action::Charge(v) => add_vault(*v), に書き換えよう。",
      "Action::Charge(v) => add_vault(*v),"
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
    "displayId": "5-6",
    "id": "39d37ecf-45a1-554c-a739-37b5aac62d84",
    "index": 134,
    "chapter": 5,
    "chapterTitle": "第5章 Enumとパターンマッチング",
    "title": "5-6. Option<T> 型の Some と None",
    "topicTag": "Option<T> / Some / None",
    "kurumiIntro": "Rustには「null（ぬる）」の代わりに、値がある `Some(値)` か、空っぽの `None` を表す標準の `enum Option<T>` があるんだ！",
    "goalSummary": "Option 値を match で取り出してゴール (4, 1) へ",
    "bookSectionTitle": "6.1 Option enum と Null よりも優れた利点",
    "bookSummary": "値が存在しない可能性を型として表すのが `Option<T>` です。使うときに必ず `Some` と `None` を意識するため、ぬるぽ（Null参照エラー）が起きません。",
    "bookKeyCode": "let opt = Some(4);\nmatch opt {\n    Some(n) => step(n),\n    None => {},\n}",
    "starterCode": "fn get_bonus(ok: bool) -> Option<i32> {\n    if ok { Some(4) } else { None }\n}\n\nfn main() {\n    // false を true にして Some(4) を受け取ろう！\n    let bonus = get_bonus(false);\n    match bonus {\n        Some(n) => step(n),\n        None => println!(\"ボーナスなし!\"),\n    }\n}",
    "solutionCode": "fn get_bonus(ok: bool) -> Option<i32> {\n    if ok { Some(4) } else { None }\n}\n\nfn main() {\n    let bonus = get_bonus(true);\n    match bonus {\n        Some(n) => step(n),\n        None => println!(\"ボーナスなし!\"),\n    }\n}",
    "quickChips": [
      {
        "label": "true",
        "insert": "true"
      }
    ],
    "hints": [
      "今は get_bonus(false) を呼んでいるから None になって進まないよ。",
      "get_bonus(true) に変えてみよう！",
      "let bonus = get_bonus(true);"
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
    "displayId": "5-7",
    "id": "b8655651-9707-54d9-9fdf-78b6aa2502b1",
    "index": 135,
    "chapter": 5,
    "chapterTitle": "第5章 Enumとパターンマッチング",
    "title": "5-7. if let による簡潔な制御フロー",
    "topicTag": "if let / Option",
    "kurumiIntro": "「1つのパターンだけ取り出したい！」ときは `match` より短く書ける `if let Some(n) = ...` がぴったりだよ！",
    "goalSummary": "if let Some(steps) で Option から歩数を取り出してゴールへ",
    "bookSectionTitle": "6.3 if let による簡潔な制御フロー",
    "bookSummary": "値が `Some(x)` のときだけ処理し、`None` のときは何もしないような場合、`match` の代わりに `if let Some(x) = 値 { ... }` と簡潔に書けます。",
    "bookKeyCode": "if let Some(n) = maybe_steps {\n    step(n);\n}",
    "starterCode": "fn main() {\n    let maybe_steps = Some(3);\n    // if let Some(n) = maybe_steps { ... } を書いてみよう！\n    \n}",
    "solutionCode": "fn main() {\n    let maybe_steps = Some(3);\n    if let Some(n) = maybe_steps {\n        step(n);\n    }\n}",
    "quickChips": [
      {
        "label": "if let Some(n) = maybe_steps { step(n); }",
        "insert": "if let Some(n) = maybe_steps {\n        step(n);\n    }"
      }
    ],
    "hints": [
      "maybe_steps の中には Some(3) が入っているよ。",
      "if let Some(n) = maybe_steps { step(n); } で中の 3 を取り出せるよ！",
      "if let Some(n) = maybe_steps {\n    step(n);\n}"
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
    "displayId": "5-8",
    "id": "d9880bf2-1382-506d-9278-982f6a23b006",
    "index": 136,
    "chapter": 5,
    "chapterTitle": "第5章 Enumとパターンマッチング",
    "title": "5-8. if let ... else で空だった時の代案",
    "topicTag": "if let ... else",
    "kurumiIntro": "`if let` には `else` もくっつけられるんだ！予備ボックスが空（`None`）だったときは、代わりに `else` の中で予備ルートを動かそう。",
    "goalSummary": "if let ... else で予備の3歩を使ってゴール (3, 1) へ",
    "bookSectionTitle": "6.3 if let と else の組み合わせ",
    "bookSummary": "`if let Some(v) = opt { ... } else { ... }` と書くと、一致した時の処理と、それ以外のフォールバック処理を簡潔に書けます。",
    "bookKeyCode": "if let Some(n) = box_val {\n    step(n);\n} else {\n    step(3);\n}",
    "starterCode": "fn main() {\n    let box_val: Option<i32> = None;\n    if let Some(n) = box_val {\n        step(n);\n    } else {\n        // None だったときに予備の 3歩を進んで、金庫にも 3 入れよう！\n        \n    }\n}",
    "solutionCode": "fn main() {\n    let box_val: Option<i32> = None;\n    if let Some(n) = box_val {\n        step(n);\n    } else {\n        add_vault(3);\n        step(3);\n    }\n}",
    "quickChips": [
      {
        "label": "add_vault(3);",
        "insert": "add_vault(3);\n        "
      },
      {
        "label": "step(3);",
        "insert": "step(3);\n        "
      }
    ],
    "hints": [
      "box_val は None だから else ブロックが実行されるよ。",
      "else の中に add_vault(3); と step(3); を書こう！",
      "else {\n    add_vault(3);\n    step(3);\n}"
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
    "displayId": "5-9",
    "id": "5cec4f53-25c5-5d1a-9e73-5237c34fab1b",
    "index": 137,
    "chapter": 5,
    "chapterTitle": "第5章 Enumとパターンマッチング",
    "title": "5-9. 複数バリアントのコマンド列でL字攻略",
    "topicTag": "enum コマンド列",
    "kurumiIntro": "今度は `Move` だけじゃなく `TurnRight` と `TurnLeft` も並べて、リストにまとめた `enum` コマンド列を実行してみよう！",
    "goalSummary": "enum Command の配列を実行してゴール (3, 3) へ",
    "bookSectionTitle": "6.1 異なるデータを1つの配列にまとめる enum",
    "bookSummary": "配列は同じ型しか入れられませんが、`enum` で包めば「歩数付き移動」と「回転」を1つの `vec!` リストに並べて順番に実行できます。",
    "bookKeyCode": "let cmds = vec![Command::Move(3), Command::TurnRight];",
    "starterCode": "enum Command {\n    Move(i32),\n    TurnRight,\n}\n\nfn main() {\n    let cmds = vec![\n        Command::Move(3),\n        Command::TurnRight,\n        // 下へ2歩進むコマンドを追加しよう！\n        \n    ];\n    for c in cmds {\n        match c {\n            Command::Move(n) => step(n),\n            Command::TurnRight => turn_right(),\n        }\n    }\n}",
    "solutionCode": "enum Command {\n    Move(i32),\n    TurnRight,\n}\n\nfn main() {\n    let cmds = vec![\n        Command::Move(3),\n        Command::TurnRight,\n        Command::Move(2),\n    ];\n    for c in cmds {\n        match c {\n            Command::Move(n) => step(n),\n            Command::TurnRight => turn_right(),\n        }\n    }\n}",
    "quickChips": [
      {
        "label": "Command::Move(2),",
        "insert": "Command::Move(2),"
      }
    ],
    "hints": [
      "東に3歩 → 右折（南向き）まで書かれているよ。あと2歩進めば (3, 3) のゴールだね！",
      "cmds の最後に `Command::Move(2),` を書き足そう。",
      "Command::Move(3),\nCommand::TurnRight,\nCommand::Move(2),"
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
    "displayId": "5-10",
    "id": "64c45e7d-03c6-56a7-907d-ce965a9b5065",
    "index": 138,
    "chapter": 5,
    "chapterTitle": "第5章 Enumとパターンマッチング",
    "title": "5-10. Option のリストから Some だけ拾う",
    "topicTag": "for + if let Some",
    "kurumiIntro": "リストの中に `Some(2)` や `None` が混ざっているよ！`for` と `if let Some(x)` を組み合わせると、有効なデータだけを安全に拾い上げられるんだ。",
    "goalSummary": "Some の値だけを足して合計 4歩進みゴール (4, 1) へ",
    "bookSectionTitle": "6.3 ループ内での if let 活用",
    "bookSummary": "欠損データ（`None`）を含むリストから有効な値（`Some`）だけを抽出して合計する定番イディオムです。",
    "bookKeyCode": "for item in items {\n    if let Some(n) = item { step(n); }\n}",
    "starterCode": "fn main() {\n    let packets = vec![Some(2), None, Some(2), None];\n    for p in packets {\n        // if let Some(n) = p を使って、Some のときだけ n歩進もう！\n        \n    }\n}",
    "solutionCode": "fn main() {\n    let packets = vec![Some(2), None, Some(2), None];\n    for p in packets {\n        if let Some(n) = p {\n            step(n);\n        }\n    }\n}",
    "quickChips": [
      {
        "label": "if let Some(n) = p { step(n); }",
        "insert": "if let Some(n) = p {\n            step(n);\n        }"
      }
    ],
    "hints": [
      "packets の中の Some(2) と Some(2) を合わせるとちょうど 4歩になるよ！",
      "for の中に `if let Some(n) = p { step(n); }` を書こう。",
      "if let Some(n) = p {\n    step(n);\n}"
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
    "displayId": "5-11",
    "id": "a9d69c8c-39e3-58dc-b93f-074d77f1b9d2",
    "index": 139,
    "chapter": 5,
    "chapterTitle": "第5章 Enumとパターンマッチング",
    "stageKind": "puzzle",
    "title": "5-11. センサー状態 enum で自律ルート選択",
    "topicTag": "enum + match 分岐",
    "kurumiIntro": "周りの壁センサーを見て「右に行くか・左に行くか・前に進むか」を `enum Sense { FrontClear, LeftClear, Blocked }` にまとめて選ぼう！",
    "goalSummary": "enum Sense で迷路を自律判定してゴール (4, 4) へ",
    "bookSectionTitle": "6.2 状態を enum にして match で分岐",
    "bookSummary": "複雑な条件判定の結果をいったん分かりやすい `enum` 値へ変換してから `match` で行動を決めると、ミスが激減します。",
    "bookKeyCode": "match sense_tile() { Sense::Left => turn_left(), ... }",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "enum Sense {\n    LeftOpen,\n    FrontOpen,\n    Blocked,\n}\n\nfn check_env() -> Sense {\n    if !is_wall_left() {\n        Sense::LeftOpen\n    } else if !is_wall_ahead() {\n        Sense::FrontOpen\n    } else {\n        Sense::Blocked\n    }\n}\n\nfn main() {\n    loop {\n        if at_goal() {\n            break;\n        }\n        match check_env() {\n            Sense::LeftOpen => { turn_left(); step(); },\n            Sense::FrontOpen => step(),\n            Sense::Blocked => turn_right(),\n        }\n    }\n}",
    "quickChips": [
      {
        "label": "match check_env() { ... }",
        "insert": "match check_env() {\n            Sense::LeftOpen => { turn_left(); step(); },\n            Sense::FrontOpen => step(),\n            Sense::Blocked => turn_right(),\n        }"
      }
    ],
    "hints": [
      "enum Sense { LeftOpen, FrontOpen, Blocked } と、壁センサーで状態を返す check_env() -> Sense 関数を作ろう！",
      "main で loop { if at_goal() { break; } match check_env() { ... } } を回し、LeftOpen なら左折&step、FrontOpen なら step、Blocked なら右折しよう！",
      "enum Sense {\n    LeftOpen,\n    FrontOpen,\n    Blocked,\n}\n\nfn check_env() -> Sense {\n    if !is_wall_left() {\n        Sense::LeftOpen\n    } else if !is_wall_ahead() {\n        Sense::FrontOpen\n    } else {\n        Sense::Blocked\n    }\n}\n\nfn main() {\n    loop {\n        if at_goal() {\n            break;\n        }\n        match check_env() {\n            Sense::LeftOpen => { turn_left(); step(); },\n            Sense::FrontOpen => step(),\n            Sense::Blocked => turn_right(),\n        }\n    }\n}"
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
        "x": 4,
        "y": 4
      }
    },
    "victoryCondition": {
      "reachGoal": true
    },
    "parTicks": 10
  },
  {
    "displayId": "5-12",
    "id": "a642e260-2f26-5f89-8ee0-9f27405ba456",
    "index": 140,
    "chapter": 5,
    "chapterTitle": "第5章 Enumとパターンマッチング",
    "stageKind": "puzzle",
    "title": "5-12. match 網羅性＋ワイルドカードでスパーク警戒",
    "topicTag": "match 網羅性と _ 制御",
    "kurumiIntro": "4種類の警告レベル `Warn { Clear, GateClosed, SparkNear, Emergency }` を `match` でさばこう！大切な1つだけ特別扱いして、残りを `_` でまとめることもできるよ。",
    "goalSummary": "enum Warn を完全に網羅して、スパークとゲートを安全突破しよう",
    "bookSectionTitle": "6.2 match の網羅性とワイルドカード _",
    "bookSummary": "すべてのケースを書くか、残りを `_` で受けることでコンパイル時に漏れを防ぎます。",
    "bookKeyCode": "match status { Status::Go => step(), _ => wait_tick(1) }",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "enum Warn {\n    Clear,\n    GateClosed,\n    SparkNear,\n    Emergency,\n}\n\nfn sense() -> Warn {\n    if !is_gate_open() {\n        Warn::GateClosed\n    } else if is_spark_ahead() {\n        Warn::SparkNear\n    } else {\n        Warn::Clear\n    }\n}\n\nfn main() {\n    while !at_goal() {\n        match sense() {\n            Warn::Clear => step(),\n            _ => wait_tick(1),\n        }\n    }\n}",
    "quickChips": [
      {
        "label": "_ => wait_tick(1),",
        "insert": "_ => wait_tick(1),"
      }
    ],
    "hints": [
      "enum Warn { Clear, GateClosed, SparkNear, Emergency } を定義して、目の前の状態で Warn を返す sense() 関数を作ろう。",
      "match sense() で Warn::Clear => step()、それ以外は _ => wait_tick(1) で安全にゴール (5, 1) まで進めよう！",
      "enum Warn {\n    Clear,\n    GateClosed,\n    SparkNear,\n    Emergency,\n}\n\nfn sense() -> Warn {\n    if !is_gate_open() {\n        Warn::GateClosed\n    } else if is_spark_ahead() {\n        Warn::SparkNear\n    } else {\n        Warn::Clear\n    }\n}\n\nfn main() {\n    while !at_goal() {\n        match sense() {\n            Warn::Clear => step(),\n            _ => wait_tick(1),\n        }\n    }\n}"
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
      "gates": [
        {
          "x": 3,
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
      "reachGoal": true
    },
    "parTicks": 8
  },
  {
    "displayId": "5-13",
    "id": "b8cacf70-a74c-57ea-bdaf-d5c24934b111",
    "index": 141,
    "chapter": 5,
    "chapterTitle": "第5章 Enumとパターンマッチング",
    "stageKind": "puzzle",
    "title": "5-13. enum 命令インタプリタ迷路",
    "topicTag": "enum + match インタプリタ",
    "kurumiIntro": "`Go(n)`・`TurnR`・`TurnL` を並べて、ジグザグの壁とスイッチを抜けながらコンベアへ乗り込むプログラムを `enum` で組もう！",
    "goalSummary": "enum Cmd 列を正しく組んでスイッチとコンベア経由で (5, 3) へ",
    "bookSectionTitle": "6.1 命令を配列で並べて解釈する enum",
    "bookSummary": "ロボットの一連の動きをデータ（`enum` の配列）として表現すると、ルート編集や拡張がとてもやりやすくなります。",
    "bookKeyCode": "vec![Cmd::Go(2), Cmd::TurnR, Cmd::Go(2)]",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "enum Cmd {\n    Go(i32),\n    TurnR,\n    TurnL,\n}\n\nfn main() {\n    let script = vec![\n        Cmd::Go(2),\n        Cmd::TurnR,\n        Cmd::Go(2),\n        Cmd::TurnL,\n        Cmd::Go(2),\n    ];\n    for c in script {\n        match c {\n            Cmd::Go(n) => step(n),\n            Cmd::TurnR => turn_right(),\n            Cmd::TurnL => turn_left(),\n        }\n    }\n}",
    "quickChips": [
      {
        "label": "Cmd::TurnR,",
        "insert": "Cmd::TurnR,\n        "
      },
      {
        "label": "Cmd::TurnL,",
        "insert": "Cmd::TurnL,\n        "
      },
      {
        "label": "Cmd::Go(2),",
        "insert": "Cmd::Go(2),\n        "
      }
    ],
    "hints": [
      "enum Cmd { Go(i32), TurnR, TurnL } を定義しよう！東へ Go(2) で (2,1) のスイッチを踏みつつ角へ着くよ！",
      "TurnR して Go(2) で南へ (2,3) まで下りたら、TurnL して Go(2) でコンベア (3,3)->(4,3) を抜けて (5,3) へ！",
      "enum Cmd {\n    Go(i32),\n    TurnR,\n    TurnL,\n}\n\nfn main() {\n    let script = vec![\n        Cmd::Go(2),\n        Cmd::TurnR,\n        Cmd::Go(2),\n        Cmd::TurnL,\n        Cmd::Go(2),\n    ];\n    for c in script {\n        match c {\n            Cmd::Go(n) => step(n),\n            Cmd::TurnR => turn_right(),\n            Cmd::TurnL => turn_left(),\n        }\n    }\n}"
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
          "x": 3,
          "y": 1
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
          "closedTicks": 1,
          "linkedSwitch": {
            "x": 2,
            "y": 1
          }
        }
      ],
      "conveyors": [
        {
          "x": 3,
          "y": 3,
          "dir": 0
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "requireAllSwitches": true,
      "maxTicks": 10
    },
    "parTicks": 9
  },
  {
    "displayId": "5-14",
    "id": "670de184-8b92-50de-9968-d8c01ebcb71a",
    "index": 142,
    "chapter": 5,
    "chapterTitle": "第5章 Enumとパターンマッチング",
    "title": "5-14. match と蒸気ゲート・ジグザグ実践",
    "topicTag": "enum + ゲート突破パズル",
    "kurumiIntro": "コマンドの配列に `Wait` や `Turn` も混ぜて、途中の蒸気ゲートを待ちながら曲がり角の先のゴールへ辿り着こう！",
    "goalSummary": "enum 指令列でゲートを安全に抜けて (3, 3) へ",
    "bookSectionTitle": "6.2 パターンマッチング実践パズル",
    "bookSummary": "複数のアクションを `enum` で表現してループ＋`match` で解釈する設計は、インタプリタやゲーム制御の基本構造です。",
    "bookKeyCode": "match step_cmd {\n    Cmd::WaitOrGo => ...,\n}",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "enum Cmd {\n    SafeStep,\n    TurnR,\n}\n\nfn main() {\n    let plan = vec![\n        Cmd::SafeStep,\n        Cmd::SafeStep,\n        Cmd::SafeStep,\n        Cmd::TurnR,\n        Cmd::SafeStep,\n        Cmd::SafeStep,\n    ];\n    for c in plan {\n        match c {\n            Cmd::SafeStep => {\n                if !is_gate_open() {\n                    wait_tick(1);\n                }\n                step();\n            },\n            Cmd::TurnR => turn_right(),\n        }\n    }\n}",
    "quickChips": [
      {
        "label": "wait_tick(1);",
        "insert": "wait_tick(1);"
      }
    ],
    "hints": [
      "(2, 1) に蒸気ゲートがあるよ！enum Cmd { SafeStep, TurnR } を使って安全に進もう。",
      "SafeStep では while !is_gate_open() { wait_tick(1); } step(); を実行し、東3歩→右折→南2歩で (3, 3) へ着くよ！",
      "enum Cmd {\n    SafeStep,\n    TurnR,\n}\n\nfn main() {\n    let plan = vec![\n        Cmd::SafeStep,\n        Cmd::SafeStep,\n        Cmd::SafeStep,\n        Cmd::TurnR,\n        Cmd::SafeStep,\n        Cmd::SafeStep,\n    ];\n    for c in plan {\n        match c {\n            Cmd::SafeStep => {\n                if !is_gate_open() {\n                    wait_tick(1);\n                }\n                step();\n            },\n            Cmd::TurnR => turn_right(),\n        }\n    }\n}"
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
    "parTicks": 7
  },
  {
    "displayId": "5-15",
    "id": "34266106-3321-5c2d-9168-172c91df8523",
    "index": 143,
    "chapter": 5,
    "chapterTitle": "第5章 Enumとパターンマッチング",
    "stageKind": "puzzle",
    "title": "5-15. 複数バリアント enum でコア納品",
    "topicTag": "enum + 空間コア納品",
    "kurumiIntro": "歩いたり、コアを拾ったり、強化したりする一連の手順を全部 `enum Op` に書き出して、順番に実行してみよう！",
    "goalSummary": "enum Op 列でコアを拾い、検査・強化して (4, 1) で納品しよう",
    "bookSectionTitle": "6.1 操作のミニ言語（DSL）を enum で作る",
    "bookSummary": "異なる種類の操作（移動・コア操作）を1つの `enum` 型として定義し、実行エンジン側で解釈させることができます。",
    "bookKeyCode": "enum Op { Walk(i32), Grab, Scan, Boost, Deliver }",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "enum Op {\n    Walk(i32),\n    Grab,\n    Scan,\n    Boost,\n    Deliver,\n}\n\nfn main() {\n    let ops = vec![\n        Op::Walk(1),\n        Op::Grab,\n        Op::Walk(1),\n        Op::Scan,\n        Op::Walk(1),\n        Op::Boost,\n        Op::Walk(1),\n        Op::Deliver,\n    ];\n    let mut has = false;\n    let mut held = None;\n    for op in ops {\n        match op {\n            Op::Walk(n) => step(n),\n            Op::Grab => {\n                held = Some(grab_core());\n                has = true;\n            },\n            Op::Scan => {\n                if let Some(c) = held {\n                    scan(&c);\n                }\n            },\n            Op::Boost => {\n                if let Some(mut c) = held {\n                    boost(&mut c);\n                    held = Some(c);\n                }\n            },\n            Op::Deliver => {\n                if let Some(c) = held {\n                    deliver(c);\n                }\n            },\n        }\n    }\n}",
    "quickChips": [
      {
        "label": "Op::Scan,",
        "insert": "Op::Scan,\n        "
      },
      {
        "label": "Op::Boost,",
        "insert": "Op::Boost,\n        "
      },
      {
        "label": "Op::Deliver,",
        "insert": "Op::Deliver,\n        "
      }
    ],
    "hints": [
      "(1,1)でコア取得 → (2,1)で scan(&core) → (3,1)で boost(&mut core) → (4,1)で deliver(core) だよ！",
      "enum Op { Walk(i32), Grab, Scan, Boost, Deliver } を定義し、let mut held = None; に Option<Core> を入れて ops を順番に match で実行しよう！",
      "enum Op {\n    Walk(i32),\n    Grab,\n    Scan,\n    Boost,\n    Deliver,\n}\n\nfn main() {\n    let ops = vec![\n        Op::Walk(1),\n        Op::Grab,\n        Op::Walk(1),\n        Op::Scan,\n        Op::Walk(1),\n        Op::Boost,\n        Op::Walk(1),\n        Op::Deliver,\n    ];\n    let mut has = false;\n    let mut held = None;\n    for op in ops {\n        match op {\n            Op::Walk(n) => step(n),\n            Op::Grab => {\n                held = Some(grab_core());\n                has = true;\n            },\n            Op::Scan => {\n                if let Some(c) = held {\n                    scan(&c);\n                }\n            },\n            Op::Boost => {\n                if let Some(mut c) = held {\n                    boost(&mut c);\n                    held = Some(c);\n                }\n            },\n            Op::Deliver => {\n                if let Some(c) = held {\n                    deliver(c);\n                }\n            },\n        }\n    }\n}"
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
          "label": "指示コア"
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
    "displayId": "5-16",
    "id": "bd45fe4b-97ce-51ea-a3b3-aa112c3af960",
    "index": 144,
    "chapter": 5,
    "chapterTitle": "第5章 Enumとパターンマッチング",
    "stageKind": "puzzle",
    "title": "5-16. 出力チェック付き enum ログ設計",
    "topicTag": "enum + stdout 検証",
    "kurumiIntro": "どの工程を実行したかが工房のログにしっかり残るように、移動とコア強化で別々のメッセージを表示する `enum Event` を動かそう！",
    "goalSummary": "\"SCAN_DONE\" と \"BOOST_DONE\" を出力し、コア⚡4以上を納品しよう",
    "bookSectionTitle": "6.2 ログ出力と処理実行をセットにする enum",
    "bookSummary": "ログ印字とロボット動作を `match` の同じ腕（アーム）に書けば、動いた記録の取りこぼしがなくなります。",
    "bookKeyCode": "match ev { Ev::Scan => { println!(\"SCAN_DONE\"); scan(&c); } ... }",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "enum StepJob {\n    Move(i32),\n    Inspect,\n    PowerUp,\n    Finish,\n}\n\nfn main() {\n    step(1);\n    let mut core = grab_core();\n    let jobs = vec![StepJob::Move(1), StepJob::Inspect, StepJob::Move(1), StepJob::PowerUp, StepJob::Move(1), StepJob::Finish];\n    for j in jobs {\n        match j {\n            StepJob::Move(n) => step(n),\n            StepJob::Inspect => {\n                println!(\"SCAN_DONE\");\n                scan(&core);\n            },\n            StepJob::PowerUp => {\n                println!(\"BOOST_DONE\");\n                boost(&mut core);\n            },\n            StepJob::Finish => deliver(core),\n        }\n    }\n}",
    "quickChips": [
      {
        "label": "println!(\"SCAN_DONE\");",
        "insert": "println!(\"SCAN_DONE\");\n                "
      },
      {
        "label": "println!(\"BOOST_DONE\");",
        "insert": "println!(\"BOOST_DONE\");\n                "
      }
    ],
    "hints": [
      "enum StepJob { Move(i32), Inspect, PowerUp, Finish } を定義して、1歩目でコア取得、各設備の真上で Inspect / PowerUp / Finish を実行しよう！",
      "Inspect の枝で println!(\"SCAN_DONE\"); と scan(&core);、PowerUp の枝で println!(\"BOOST_DONE\"); と boost(&mut core); を呼ぼう！",
      "enum StepJob {\n    Move(i32),\n    Inspect,\n    PowerUp,\n    Finish,\n}\n\nfn main() {\n    step(1);\n    let mut core = grab_core();\n    let jobs = vec![StepJob::Move(1), StepJob::Inspect, StepJob::Move(1), StepJob::PowerUp, StepJob::Move(1), StepJob::Finish];\n    for j in jobs {\n        match j {\n            StepJob::Move(n) => step(n),\n            StepJob::Inspect => {\n                println!(\"SCAN_DONE\");\n                scan(&core);\n            },\n            StepJob::PowerUp => {\n                println!(\"BOOST_DONE\");\n                boost(&mut core);\n            },\n            StepJob::Finish => deliver(core),\n        }\n    }\n}"
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
          "label": "記録コア"
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
      "stdoutIncludes": [
        "SCAN_DONE",
        "BOOST_DONE"
      ],
      "requireSpatialCoreRules": true
    },
    "parTicks": 12
  },
  {
    "displayId": "5-17",
    "id": "b7414456-bea4-51ca-94bb-093e5d09772c",
    "index": 145,
    "chapter": 5,
    "chapterTitle": "第5章 Enumとパターンマッチング",
    "stageKind": "puzzle",
    "title": "5-17. enum impl メソッドと時計仕掛けスイッチ",
    "topicTag": "enum への impl + コンベア",
    "kurumiIntro": "`enum StepAction` に `impl StepAction` で `run(&self)` メソッドを持たせよう！コンベアの押し出しを計算して最短歩数で両方のスイッチを回収してね。",
    "goalSummary": "enum Action::run() で全スイッチを踏んで 8ティック以内に (5, 1) へ",
    "bookSectionTitle": "6.1 & 6.2 enum メソッドと最短パス",
    "bookSummary": "振る舞いまで `enum` 自身に `impl` しておくと、配列をループで回しながら `.run()` を呼ぶだけで済みます。",
    "bookKeyCode": "impl StepAction { fn run(&self) { match self { ... } } }",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "enum StepAction {\n    SafeStep,\n    Charge(i32),\n}\n\nimpl StepAction {\n    fn run(&self) {\n        match self {\n            StepAction::SafeStep => {\n                while !is_gate_open() { wait_tick(1); }\n                step();\n            },\n            StepAction::Charge(v) => add_vault(*v),\n        }\n    }\n}\n\nfn main() {\n    let list = vec![\n        StepAction::Charge(3),\n        StepAction::SafeStep,\n        StepAction::SafeStep,\n        StepAction::SafeStep,\n        StepAction::SafeStep,\n    ];\n    for a in list {\n        a.run();\n    }\n}",
    "quickChips": [
      {
        "label": "StepAction::Charge(3),",
        "insert": "StepAction::Charge(3),\n        "
      },
      {
        "label": "StepAction::SafeStep,",
        "insert": "StepAction::SafeStep,\n        "
      }
    ],
    "hints": [
      "コンベア (1,1) が 1マス押し出してくれるから、SafeStep 1回で (2,1) のスイッチに到達するよ！さらに SafeStep を3回で (5,1) のゴールに着くよ。",
      "enum StepAction { Charge(i32), SafeStep } に impl StepAction { fn run(&self) { ... } } を定義し、Charge(3) と SafeStep × 4 回を順に実行しよう！",
      "enum StepAction {\n    SafeStep,\n    Charge(i32),\n}\n\nimpl StepAction {\n    fn run(&self) {\n        match self {\n            StepAction::SafeStep => {\n                while !is_gate_open() { wait_tick(1); }\n                step();\n            },\n            StepAction::Charge(v) => add_vault(*v),\n        }\n    }\n}\n\nfn main() {\n    let list = vec![\n        StepAction::Charge(3),\n        StepAction::SafeStep,\n        StepAction::SafeStep,\n        StepAction::SafeStep,\n        StepAction::SafeStep,\n    ];\n    for a in list {\n        a.run();\n    }\n}"
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
        }
      ],
      "switches": [
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 4,
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
        "target": 3
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "vaultTarget": 3,
      "requireAllSwitches": true,
      "maxTicks": 8
    },
    "parTicks": 6
  },
  {
    "displayId": "5-18",
    "id": "a0ccee25-7aa9-5139-9e29-5bb6b8fe7012",
    "index": 146,
    "chapter": 5,
    "chapterTitle": "第5章 Enumとパターンマッチング",
    "stageKind": "puzzle",
    "title": "5-18. Option と match 式で動的分岐ルート",
    "topicTag": "let val = match opt",
    "kurumiIntro": "「次の歩数はいくらか？」を `Option` で返す関数 `next_hop(x)` と `match` 式を使って、L字の曲がり角でちょうど向きを変えよう！",
    "goalSummary": "match 式が返す距離を使って L字コース (3, 4) へ到達しよう",
    "bookSectionTitle": "6.2 & 6.3 Option を返す関数と match 式",
    "bookSummary": "`match` は値を返す「式」なので、直接関数の戻り値を受け取って変数の計算に組み込めます。",
    "bookKeyCode": "let d = match get_hop(pos) { Some(n) => n, None => 0 };",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn plan_leg(is_first: bool) -> Option<i32> {\n    if is_first { Some(3) } else { Some(3) }\n}\n\nfn main() {\n    let dx = match plan_leg(true) {\n        Some(n) => n,\n        None => 0,\n    };\n    let dy = match plan_leg(false) {\n        Some(n) => n,\n        None => 0,\n    };\n    step(dx);\n    turn_right();\n    step(dy);\n}",
    "quickChips": [
      {
        "label": "Some(n) => n,",
        "insert": "Some(n) => n,"
      }
    ],
    "hints": [
      "Option<i32> を返す関数を作り、match で Some(n) => n, None => 0 のように歩数を取り出そう！",
      "東へ 3 歩で (3,1) のスイッチを踏みつつ右折し、南へ 3 歩でゲート (3,2) を抜けて (3,4) へ到着するよ！",
      "fn plan_leg(is_first: bool) -> Option<i32> {\n    if is_first { Some(3) } else { Some(3) }\n}\n\nfn main() {\n    let dx = match plan_leg(true) {\n        Some(n) => n,\n        None => 0,\n    };\n    let dy = match plan_leg(false) {\n        Some(n) => n,\n        None => 0,\n    };\n    step(dx);\n    turn_right();\n    step(dy);\n}"
    ],
    "worldSetup": {
      "width": 5,
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
      },
      "switches": [
        {
          "x": 3,
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
            "x": 3,
            "y": 1
          }
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
    "displayId": "5-19",
    "id": "9675f3b2-9098-5081-baa8-a36a4ec53ab4",
    "index": 147,
    "chapter": 5,
    "chapterTitle": "第5章 Enumとパターンマッチング",
    "stageKind": "puzzle",
    "title": "5-19. Option<i32> の宝石（ボーナス電力）集め",
    "topicTag": "Option<T> / Some / None",
    "kurumiIntro": "金庫への追加入力が `Option<i32>` として届くよ！`Some(v)` のときだけ金庫へ入れて、`None` のときはスキップして先に進もう。",
    "goalSummary": "Option 配列の Some 値だけ合計⚡6を金庫に入れ、ゲートを越えて (4, 1) へ",
    "bookSectionTitle": "6.1 & 6.3 Option<T> をリストで扱う",
    "bookSummary": "値が存在しない場合があるデータは `Option<T>` のリストにまとめておき、`if let Some(v)` や `match` で安全に取り出します。",
    "bookKeyCode": "for opt in bonuses { if let Some(v) = opt { add_vault(v); } }",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn main() {\n    let items = vec![Some(2), None, Some(4), None];\n    for item in items {\n        if let Some(v) = item {\n            add_vault(v);\n        }\n    }\n    step(4);\n}",
    "quickChips": [
      {
        "label": "if let Some(v) = item { add_vault(v); }",
        "insert": "if let Some(v) = item {\n            add_vault(v);\n        }"
      }
    ],
    "hints": [
      "let items = [Some(2), None, Some(4), None]; のように Option<i32> の配列を作り、if let Some(v) = item { add_vault(v); } で⚡6を貯めよう！",
      "金庫が⚡6になったら step(4); でゲートを越えて (4, 1) へ進もう。",
      "fn main() {\n    let items = vec![Some(2), None, Some(4), None];\n    for item in items {\n        if let Some(v) = item {\n            add_vault(v);\n        }\n    }\n    step(4);\n}"
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
        "target": 6
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "vaultTarget": 6,
      "requireAllSwitches": true
    },
    "parTicks": 7
  },
  {
    "displayId": "5-20",
    "id": "0dc09086-c946-5991-ac3e-0f967d5ad0e8",
    "index": 148,
    "chapter": 5,
    "chapterTitle": "第5章 Enumとパターンマッチング",
    "stageKind": "challenge",
    "title": "5-20. 迷路探索＋if let ボーナス金庫",
    "topicTag": "enum + if let + 迷路探索",
    "kurumiIntro": "道中のチェックポイントごとに金庫エネルギーを受け取りつつ、スイッチを踏んでコの字の迷路を抜けていこう！",
    "goalSummary": "全スイッチを踏んで金庫⚡6を満たし、(0, 3) のゴールへ到達",
    "bookSectionTitle": "6.3 if let と自律迷路走破の融合",
    "bookSummary": "重要な1パターンだけを手早く拾う `if let` と、網羅性が要る移動判定 `match` を両方適材適所で使い分けましょう。",
    "bookKeyCode": "if let Bonus::Gold(v) = cell { add_vault(v); }",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "enum Bonus {\n    Gold(i32),\n    Empty,\n}\n\nfn main() {\n    let rewards = vec![Bonus::Gold(2), Bonus::Empty, Bonus::Gold(4)];\n    for r in rewards {\n        if let Bonus::Gold(v) = r {\n            add_vault(v);\n        }\n    }\n    step(4);\n    turn_right();\n    step(2);\n    turn_right();\n    step(4);\n}",
    "quickChips": [
      {
        "label": "turn_right();",
        "insert": "turn_right();\n    "
      },
      {
        "label": "step(2);",
        "insert": "step(2);\n    "
      },
      {
        "label": "step(4);",
        "insert": "step(4);\n    "
      }
    ],
    "hints": [
      "上の廊下で step(4) をすると (4,1) のスイッチを踏みつつ行き止まりまで来るよ！",
      "そこから turn_right() → step(2) でゲート (4,2) を抜けて (4,3) へ！さらに turn_right() → step(4) で (0,3) のゴールに着くよ（途中 (2,3) のスイッチも踏めるね）。",
      "enum Bonus {\n    Gold(i32),\n    Empty,\n}\n\nfn main() {\n    let rewards = vec![Bonus::Gold(2), Bonus::Empty, Bonus::Gold(4)];\n    for r in rewards {\n        if let Bonus::Gold(v) = r {\n            add_vault(v);\n        }\n    }\n    step(4);\n    turn_right();\n    step(2);\n    turn_right();\n    step(4);\n}"
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
        "x": 0,
        "y": 3
      },
      "switches": [
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 2,
          "y": 3
        }
      ],
      "gates": [
        {
          "x": 4,
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
        "x": 1,
        "y": 0,
        "initial": 0,
        "target": 6
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "vaultTarget": 6,
      "requireAllSwitches": true
    },
    "parTicks": 15
  },
  {
    "displayId": "5-21",
    "id": "e9eb0507-342b-51a4-835f-29d3b7e4a845",
    "index": 149,
    "chapter": 5,
    "chapterTitle": "第5章 Enumとパターンマッチング",
    "title": "5-21. 第5章まとめ：独自 enum と if let 実践",
    "topicTag": "第5章 総合実践",
    "kurumiIntro": "第5章の総まとめ！独自の `enum Task { Boost(i32), Wait }` に対して `if let Task::Boost(v) = t` で強化を抜き出しつつ、残りは `match` で実行しよう！",
    "goalSummary": "enum Task を処理して金庫⚡4＋ゴール (4, 1) を達成",
    "bookSectionTitle": "第5章まとめ — enum・match・if let",
    "bookSummary": "網羅性チェックの `match` と簡潔な `if let` を使い分けることで、状態の抜け漏れゼロで読みやすいコードが書けます。",
    "bookKeyCode": "if let Task::Boost(v) = t {\n    add_vault(v);\n}",
    "starterCode": "enum Task {\n    Boost(i32),\n    Move(i32),\n}\n\nfn main() {\n    let list = vec![Task::Boost(2), Task::Boost(2), Task::Move(4)];\n    for t in list {\n        if let Task::Boost(v) = t {\n            add_vault(v);\n        }\n        // match で Task::Move(n) のときに step(n) を実行しよう！\n        \n    }\n}",
    "solutionCode": "enum Task {\n    Boost(i32),\n    Move(i32),\n}\n\nfn main() {\n    let list = vec![Task::Boost(2), Task::Boost(2), Task::Move(4)];\n    for t in list {\n        if let Task::Boost(v) = t {\n            add_vault(v);\n        }\n        match t {\n            Task::Move(n) => step(n),\n            _ => {},\n        }\n    }\n}",
    "quickChips": [
      {
        "label": "Task::Move(n) => step(n),",
        "insert": "match t {\n            Task::Move(n) => step(n),\n            _ => {},\n        }"
      }
    ],
    "hints": [
      "if let Task::Boost(v) = t で金庫には 4 が入るよ。あとは Task::Move(n) のとき一歩も動いていないんだ！",
      "for ループの中に `match t { Task::Move(n) => step(n), _ => {}, }` を追加してスイッチ(2, 1)を踏みながら(4, 1)へ進もう！",
      "match t {\n    Task::Move(n) => step(n),\n    _ => {},\n}"
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
      "vaultTarget": 4
    },
    "parTicks": 6
  },
  {
    "displayId": "5-22",
    "id": "3d5f336d-5d5a-5a55-bb0b-0f06f14d372c",
    "index": 150,
    "chapter": 5,
    "chapterTitle": "第5章 Enumとパターンマッチング",
    "stageKind": "challenge",
    "title": "5-22. 第5章挑戦：二重スイッチと enum コマンド短縮",
    "topicTag": "第5章最終チャレンジ",
    "kurumiIntro": "コマンド列を工夫して、2箇所のコンベアを連続で乗り継ぎながら制限ティック以内にスイッチもゴールも決めよう！",
    "goalSummary": "enum 指令でコンベアとスイッチを抜け 9ティック以内に (5, 3) へ",
    "bookSectionTitle": "6.2 & 6.3 コンベア連鎖を enum で操る",
    "bookSummary": "コンベアが自動で移動を補ってくれる場所を見抜き、最小限のバリアント列を組むパズルです。",
    "bookKeyCode": "vec![Inst::Go(1), Inst::Right, ...]",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "enum Inst {\n    Go(i32),\n    Right,\n    Left,\n}\n\nfn main() {\n    let prog = vec![\n        Inst::Go(1),\n        Inst::Right,\n        Inst::Go(1),\n        Inst::Left,\n        Inst::Go(2),\n    ];\n    for p in prog {\n        match p {\n            Inst::Go(n) => step(n),\n            Inst::Right => turn_right(),\n            Inst::Left => turn_left(),\n        }\n    }\n}",
    "quickChips": [
      {
        "label": "Inst::Right,",
        "insert": "Inst::Right,\n        "
      },
      {
        "label": "Inst::Left,",
        "insert": "Inst::Left,\n        "
      },
      {
        "label": "Inst::Go(1),",
        "insert": "Inst::Go(1),\n        "
      },
      {
        "label": "Inst::Go(2),",
        "insert": "Inst::Go(2),\n        "
      }
    ],
    "hints": [
      "(1,1) の東向きコンベアで (2,1) のスイッチに乗れるよ！まずは東へ Go(1)、次に右折して Go(1) で (2,2) の南向きコンベアから (2,3) へ！",
      "さらに左折して Go(2) を実行すると (3,3) の東コンベアで (4,3) へ押され、合計8〜9ティック以内で (5,3) ゴールへ着くよ！",
      "enum Inst {\n    Go(i32),\n    Right,\n    Left,\n}\n\nfn main() {\n    let prog = vec![\n        Inst::Go(1),\n        Inst::Right,\n        Inst::Go(1),\n        Inst::Left,\n        Inst::Go(2),\n    ];\n    for p in prog {\n        match p {\n            Inst::Go(n) => step(n),\n            Inst::Right => turn_right(),\n            Inst::Left => turn_left(),\n        }\n    }\n}"
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
          "closedTicks": 1,
          "linkedSwitch": {
            "x": 2,
            "y": 1
          }
        }
      ],
      "conveyors": [
        {
          "x": 1,
          "y": 1,
          "dir": 0
        },
        {
          "x": 2,
          "y": 2,
          "dir": 1
        },
        {
          "x": 3,
          "y": 3,
          "dir": 0
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "requireAllSwitches": true,
      "maxTicks": 8
    },
    "parTicks": 7
  }
];
