import { StageDefinition } from '../types/game';

export const CHAPTER_18_STAGES: StageDefinition[] = [
  {
    "displayId": "18-1",
    "id": "7e0db7bd-3d57-50a0-93b7-78ecaeff3f76",
    "index": 369,
    "chapter": 18,
    "chapterTitle": "第18章 パターンとマッチング",
    "title": "18-1. タプルの分解と if let の論駁可能性",
    "topicTag": "タプル分解 / if let",
    "kurumiIntro": "必ず一致する「論駁不能」な `let (x, y) = ...;` と、一致しないこともある「論駁可能」な `if let Some(bonus) = ...` を組み合わせてL字ルートを進もう！",
    "goalSummary": "タプル分配束縛と if let で金庫⚡2＋ゴール (3, 3) へ",
    "bookSectionTitle": "18.2 論駁可能性（Refutability）",
    "bookSummary": "let は必ずマッチするパターンしか受け付けませんが、if let や while let なら失敗し得るパターン（Some など）を安全に分岐できます。",
    "bookKeyCode": "let (right, down) = route;\nif let Some(v) = prize { add_vault(v); }",
    "starterCode": "fn main() {\n    let route = (3, 2);\n    let (right, down) = route;\n    let prize = Some(2);\n    if let Some(v) = prize {\n        add_vault(v);\n    }\n    step(right);\n    turn_right();\n    // down 歩だけ下へ進もう！\n    \n}",
    "solutionCode": "fn main() {\n    let route = (3, 2);\n    let (right, down) = route;\n    let prize = Some(2);\n    if let Some(v) = prize {\n        add_vault(v);\n    }\n    step(right);\n    turn_right();\n    step(down);\n}",
    "quickChips": [
      {
        "label": "step(down);",
        "insert": "step(down);"
      }
    ],
    "hints": [
      "right に 3、down に 2 が取り出されているよ。",
      "turn_right(); のあとに `step(down);` を書こう。",
      "step(right);\nturn_right();\nstep(down);"
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
        "x": 1,
        "y": 0,
        "initial": 0,
        "target": 2
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "vaultTarget": 2
    },
    "parTicks": 7
  },
  {
    "displayId": "18-2",
    "id": "a4e95ee9-d55c-5c3b-aa42-63d292e22a0e",
    "index": 370,
    "chapter": 18,
    "chapterTitle": "第18章 パターンとマッチング",
    "title": "18-2. 構造体の分配束縛",
    "topicTag": "分配束縛 / パターン",
    "kurumiIntro": "構造体やタプルの中身を `let` や `match` で一気に分解して取り出す「分配束縛（Destructuring）」をマスターしよう！",
    "goalSummary": "構造体 Order を分配束縛で分解してゴール (3, 1) へ",
    "bookSectionTitle": "18.1 & 18.2 パターンが使用される箇所と論駁可能性",
    "bookSummary": "`let (x, y) = (1, 2);` や `let Order { dx, dy } = order;` のように、パターンの形に合わせて変数を一度に取り出せます。",
    "bookKeyCode": "let Order { dx, dy } = order;\nstep(dx + dy);",
    "starterCode": "struct Order {\n    dx: i32,\n    dy: i32,\n}\n\nfn main() {\n    let order = Order { dx: 1, dy: 2 };\n    let Order { dx, dy } = order;\n    // dx + dy 歩進んでみよう\n    \n}",
    "solutionCode": "struct Order {\n    dx: i32,\n    dy: i32,\n}\n\nfn main() {\n    let order = Order { dx: 1, dy: 2 };\n    let Order { dx, dy } = order;\n    step(dx + dy);\n}",
    "quickChips": [
      {
        "label": "step(dx + dy);",
        "insert": "step(dx + dy);"
      }
    ],
    "hints": [
      "dx に 1、dy に 2 が取り出されているよ！",
      "最後の行に `step(dx + dy);` を追加しよう。",
      "let Order { dx, dy } = order;\nstep(dx + dy);"
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
    "displayId": "18-3",
    "id": "2408bb72-9259-5dd6-ba85-f9857cf291a5",
    "index": 371,
    "chapter": 18,
    "chapterTitle": "第18章 パターンとマッチング",
    "title": "18-3. 複数パターン | と範囲パターン ..=",
    "topicTag": "複数パターン | / ..=",
    "kurumiIntro": "`1 | 2` で「1または2」、`3..=5` で「3から5まで」のように、1つのアームに複数の条件をすっきりまとめられるよ！",
    "goalSummary": "1 | 2 と 3..=5 のパターンで合計 4 歩進んでゴールへ",
    "bookSectionTitle": "18.3 複式パターン（|）と値の範囲（..=）",
    "bookSummary": "`|` で複数候補を列挙し、`..=` で連続する数値や文字の範囲を簡潔にマッチングできます。",
    "bookKeyCode": "match x { 1 | 2 => step(2), 3..=5 => step(4), _ => step(1) }",
    "starterCode": "fn main() {\n    let tickets = vec![2, 4];\n    let mut total = 0;\n    for t in tickets {\n        let pts = match t {\n            1 | 2 => 1,\n            // 3..=5 => 3 に変えて合計 4 にしよう！\n            3..=5 => 1,\n            _ => 0,\n        };\n        total += pts;\n    }\n    add_vault(total);\n    step(total);\n}",
    "solutionCode": "fn main() {\n    let tickets = vec![2, 4];\n    let mut total = 0;\n    for t in tickets {\n        let pts = match t {\n            1 | 2 => 1,\n            3..=5 => 3,\n            _ => 0,\n        };\n        total += pts;\n    }\n    add_vault(total);\n    step(total);\n}",
    "quickChips": [
      {
        "label": "3..=5 => 3,",
        "insert": "3..=5 => 3,"
      }
    ],
    "hints": [
      "tickets は [2, 4]。2 は `1 | 2` にマッチして 1 になるよ。",
      "4 は `3..=5` にマッチするよ。ここを `3..=5 => 3,` にすると合計 1 + 3 = 4 になるよ！",
      "3..=5 => 3,"
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
    "displayId": "18-4",
    "id": "6032bb13-8be5-517d-95d7-784a910560e3",
    "index": 372,
    "chapter": 18,
    "chapterTitle": "第18章 パターンとマッチング",
    "title": "18-4. enum バリアントのデータ分配束縛",
    "topicTag": "enum 分配束縛",
    "kurumiIntro": "メッセージ型の `enum` に入れ子で入ったデータも、`match` のパターンの中でそのまま変数に取り出して動かせるよ！",
    "goalSummary": "Signal をマッチで分解して金庫⚡3＋(3, 3)へ",
    "bookSectionTitle": "18.3 enum とネストした値の分配束縛",
    "bookSummary": "データを持つ enum バリアントは `Command::Move(dx, dy)` のようなパターンで直接中の値を取り出せます。",
    "bookKeyCode": "match sig { Signal::TurnStep(n) => { turn_right(); step(n); } ... }",
    "starterCode": "enum Signal {\n    Go(i32),\n    TurnGo(i32),\n    Charge(i32),\n}\n\nfn main() {\n    let cmds = vec![Signal::Charge(3), Signal::Go(3), Signal::TurnGo(2)];\n    for c in cmds {\n        match c {\n            Signal::Charge(v) => add_vault(v),\n            Signal::Go(n) => step(n),\n            // TurnGo の中で turn_right() してから step(n) しよう！\n            Signal::TurnGo(n) => step(n),\n        }\n    }\n}",
    "solutionCode": "enum Signal {\n    Go(i32),\n    TurnGo(i32),\n    Charge(i32),\n}\n\nfn main() {\n    let cmds = vec![Signal::Charge(3), Signal::Go(3), Signal::TurnGo(2)];\n    for c in cmds {\n        match c {\n            Signal::Charge(v) => add_vault(v),\n            Signal::Go(n) => step(n),\n            Signal::TurnGo(n) => {\n                turn_right();\n                step(n);\n            },\n        }\n    }\n}",
    "quickChips": [
      {
        "label": "{ turn_right(); step(n); }",
        "insert": "{\n                turn_right();\n                step(n);\n            }"
      }
    ],
    "hints": [
      "Signal::Go(3) のあと (3, 1) にいて、ゴール (3, 3) は下方向にあるよ！",
      "Signal::TurnGo(n) の処理を `{ turn_right(); step(n); }` に直そう。",
      "Signal::TurnGo(n) => {\n    turn_right();\n    step(n);\n},"
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
    "displayId": "18-5",
    "id": "7bafe10a-2ef4-517f-b48f-9256122665f4",
    "index": 373,
    "chapter": 18,
    "chapterTitle": "第18章 パターンとマッチング",
    "title": "18-5. マッチガード if と @ バインディング",
    "topicTag": "マッチガード / @束縛",
    "kurumiIntro": "範囲パターン `1..=5` に一致しつつ、その値も変数 `n` にキャッチできる `@` バインディングと、条件追加の `if` ガードを使ってみよう！",
    "goalSummary": "n @ 1..=5 とマッチガードで 3 を選んでゴールへ",
    "bookSectionTitle": "18.3 パターン記法 — @束縛とマッチガード",
    "bookSummary": "`n @ 1..=5` と書くと範囲チェックと同時に変数 `n` へ値を取り出せます。さらに `if n > 2` のような追加条件（マッチガード）も組み合わせられます。",
    "bookKeyCode": "match code {\n    n @ 1..=5 if n > 2 => step(n),\n    _ => step(1),\n}",
    "starterCode": "fn main() {\n    let code = 3;\n    match code {\n        // n @ 1..=5 if n > 10 を n > 2 に直してマッチさせよう！\n        n @ 1..=5 if n > 10 => step(n),\n        _ => step(1),\n    }\n}",
    "solutionCode": "fn main() {\n    let code = 3;\n    match code {\n        n @ 1..=5 if n > 2 => step(n),\n        _ => step(1),\n    }\n}",
    "quickChips": [
      {
        "label": "n @ 1..=5 if n > 2",
        "insert": "n @ 1..=5 if n > 2"
      }
    ],
    "hints": [
      "code は 3 なので、`if n > 10` に引っかかって `_ => step(1)` に行ってしまっているよ！",
      "`if n > 2` に直せば 1番目のアームに一致して 3歩進めるよ！",
      "n @ 1..=5 if n > 2 => step(n),"
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
    "displayId": "18-6",
    "id": "331c57e3-ad96-5e04-b779-c1c7a378c808",
    "index": 374,
    "chapter": 18,
    "chapterTitle": "第18章 パターンとマッチング",
    "title": "18-6. @ バインディングで金庫エネルギー選別",
    "topicTag": "@バインディング応用",
    "kurumiIntro": "リストから届く迷子札の中から、`3..=5` の範囲にある値だけを `@` で受け取って金庫に入れ、その合計でゴールしよう！",
    "goalSummary": "3..=5 の番号を @ で受け取り金庫⚡7＋L字ゴールへ",
    "bookSectionTitle": "18.3 @ バインディングによる値保持と分岐",
    "bookSummary": "範囲に収まるかどうかの判定と、その実際の数値の取り出しを `@` ひとつで同時に表現できます。",
    "bookKeyCode": "match id { v @ 3..=5 => add_vault(v), _ => {} }",
    "starterCode": "fn main() {\n    let tags = vec![1, 3, 4, 8];\n    let mut vault_sum = 0;\n    for id in tags {\n        match id {\n            // 範囲 3..=5 だけマッチして vault_sum に足そう！\n            v @ 1..=2 => vault_sum += v,\n            _ => {},\n        }\n    }\n    add_vault(vault_sum);\n    step(3);\n    turn_right();\n    step(2);\n}",
    "solutionCode": "fn main() {\n    let tags = vec![1, 3, 4, 8];\n    let mut vault_sum = 0;\n    for id in tags {\n        match id {\n            v @ 3..=5 => vault_sum += v,\n            _ => {},\n        }\n    }\n    add_vault(vault_sum);\n    step(3);\n    turn_right();\n    step(2);\n}",
    "quickChips": [
      {
        "label": "v @ 3..=5 => vault_sum += v,",
        "insert": "v @ 3..=5 => vault_sum += v,"
      }
    ],
    "hints": [
      "tags の中で 3..=5 に当てはまるのは 3 と 4（合計 7）だよ！",
      "`v @ 1..=2` を `v @ 3..=5` に直そう。",
      "v @ 3..=5 => vault_sum += v,"
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
        "target": 7
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "vaultTarget": 7
    },
    "parTicks": 7
  },
  {
    "displayId": "18-7",
    "id": "b4374fe3-6426-5e4b-ab02-e93453235b97",
    "index": 375,
    "chapter": 18,
    "chapterTitle": "第18章 パターンとマッチング",
    "title": "18-7. _ と .. でいらない部分を賢く無視する",
    "topicTag": "値の無視 (_ / ..)",
    "kurumiIntro": "長いタプルや構造体のうち、必要な値だけ受け取って残りを `_` や `..` で読み飛ばすスマートな書き方を練習しよう！",
    "goalSummary": "タプルと構造体の必要部分だけ取り出し金庫⚡4＋ゴールへ",
    "bookSectionTitle": "18.3 パターン内の値を無視する (_ と ..)",
    "bookSummary": "使わない変数を `_` や `..` で明示的に無視することで、読みやすく警告の出ないクリーンなコードになります。",
    "bookKeyCode": "let (first, _, third) = vals;\nlet BoxItem { power, .. } = item;",
    "starterCode": "struct BoxItem {\n    power: i32,\n    weight: i32,\n    tag: i32,\n}\n\nfn main() {\n    let vals = (2, 99, 2);\n    // 真ん中の 99 を無視して 1番目と 3番目を受け取ろう\n    let (a, _, b) = vals;\n    let item = BoxItem { power: a + b, weight: 50, tag: 7 };\n    let BoxItem { power, .. } = item;\n    // power (4) を金庫に入れて、そのまま右へ進もう！\n    \n}",
    "solutionCode": "struct BoxItem {\n    power: i32,\n    weight: i32,\n    tag: i32,\n}\n\nfn main() {\n    let vals = (2, 99, 2);\n    let (a, _, b) = vals;\n    let item = BoxItem { power: a + b, weight: 50, tag: 7 };\n    let BoxItem { power, .. } = item;\n    add_vault(power);\n    step(power);\n}",
    "quickChips": [
      {
        "label": "add_vault(power);",
        "insert": "add_vault(power);\n    "
      },
      {
        "label": "step(power);",
        "insert": "step(power);"
      }
    ],
    "hints": [
      "a = 2, b = 2 で BoxItem { power: 4, .. } が作られ、power に 4 が取り出されているよ。",
      "`add_vault(power);` と `step(power);` を書こう！",
      "add_vault(power);\nstep(power);"
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
    "displayId": "18-8",
    "id": "6881bf72-be99-592e-99bc-f6ad3df32748",
    "index": 376,
    "chapter": 18,
    "chapterTitle": "第18章 パターンとマッチング",
    "title": "18-8. 第18章総合：パターン司令ディスパッチャ",
    "topicTag": "パターン総合パズル",
    "kurumiIntro": "第18章の総合課題！マッチガード・`@` バインディング・構造体分配束縛を組み合わせて、連動スイッチを踏んでゲートをくぐり抜けよう！",
    "goalSummary": "パターンマッチで制御し金庫⚡5＋ゲート先の (5, 1) へ",
    "bookSectionTitle": "第18章 パターンとマッチング 総合演習",
    "bookSummary": "あらゆるデータの形を安全・正確に分解できるパターンマッチングは、Rust の記述力の要です。",
    "bookKeyCode": "match pkt { Pkt::Boost(n @ 1..=5) if n >= 5 => ... }",
    "starterCode": "struct Packet {\n    code: i32,\n    steps: i32,\n}\n\nfn main() {\n    let pkt = Packet { code: 5, steps: 5 };\n    let Packet { code, steps } = pkt;\n    match code {\n        // if c > 10 を if c >= 5 にして 5 歩進むようにしよう！\n        c @ 1..=6 if c > 10 => {\n            add_vault(c);\n            step(steps);\n        },\n        _ => step(1),\n    }\n}",
    "solutionCode": "struct Packet {\n    code: i32,\n    steps: i32,\n}\n\nfn main() {\n    let pkt = Packet { code: 5, steps: 5 };\n    let Packet { code, steps } = pkt;\n    match code {\n        c @ 1..=6 if c >= 5 => {\n            add_vault(c);\n            step(steps);\n        },\n        _ => step(1),\n    }\n}",
    "quickChips": [
      {
        "label": "c @ 1..=6 if c >= 5",
        "insert": "c @ 1..=6 if c >= 5"
      }
    ],
    "hints": [
      "code は 5 なので、`if c > 10` に合わず `_ => step(1)` に行ってしまっているよ！",
      "`if c >= 5` に直せば、金庫に 5 を入れてスイッチ(2, 1)を踏み、ゲート(3, 1)を通ってゴール(5, 1)へ着くよ！",
      "c @ 1..=6 if c >= 5 => {"
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
