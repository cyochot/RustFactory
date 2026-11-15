import { StageDefinition } from '../types/game';

export const CHAPTER_18_STAGES: StageDefinition[] = [
  {
    "displayId": "18-1",
    "id": "7e0db7bd-3d57-50a0-93b7-78ecaeff3f76",
    "index": 376,
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
    "index": 377,
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
    "id": "a1bd41ee-e384-4a19-9e3f-4d8e3cacee5c",
    "index": 378,
    "chapter": 18,
    "chapterTitle": "第18章 パターンとマッチング",
    "stageKind": "puzzle",
    "title": "18-3. 構造体分配束縛＋if let で空間コア納品",
    "topicTag": "構造体分解 + if let + コア",
    "kurumiIntro": "`RoutePlan` 構造体を分配束縛で分解して各設備までの歩数を取り出し、`if let Some(v)` で金庫のおまけも受け取りながらコアを検査・強化して納品しよう！",
    "goalSummary": "RoutePlan 分解と if let で金庫⚡3・検査(2,1)・強化(3,1)・納品(4,1)へ",
    "bookSectionTitle": "18.2 構造体パターンと論駁可能な分岐の組み合わせ",
    "bookSummary": "移動計画の構造体を `let RoutePlan { ... } = plan;` で分解し、オプショナルな追加報酬を `if let Some(v)` で取り出します。",
    "bookKeyCode": "let RoutePlan { to_core, to_scan, to_charge } = plan;",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "struct RoutePlan {\n    to_core: i32,\n    to_scan: i32,\n    to_charge: i32,\n}\n\nfn main() {\n    let plan = RoutePlan { to_core: 1, to_scan: 1, to_charge: 1 };\n    let RoutePlan { to_core, to_scan, to_charge } = plan;\n    let bonus = Some(3);\n    if let Some(v) = bonus {\n        add_vault(v);\n    }\n    step(to_core);\n    let mut core = grab_core();\n    step(to_scan);\n    scan(&core);\n    step(to_charge);\n    boost(&mut core);\n    step(1);\n    deliver(core);\n}",
    "quickChips": [
      {
        "label": "boost(&mut core);",
        "insert": "boost(&mut core);\n    "
      }
    ],
    "hints": [
      "距離情報を持つ `RoutePlan` を分配束縛で分解し、`if let Some(v)` で金庫⚡3を入れて、1歩目でコア取得→2歩目(2, 1)で `scan`→3歩目(3, 1)で `boost`⚡4+→4歩目(4, 1)で `deliver` しよう。",
      "`let RoutePlan { to_core, to_scan, to_charge } = plan;` と `if let Some(v) = Some(3) { add_vault(v); }` を書き、各歩数移動ごとに `grab_core()`・`scan(&core)`・`boost(&mut core)`・`deliver(core)` を実行しよう。",
      "struct RoutePlan {\n    to_core: i32,\n    to_scan: i32,\n    to_charge: i32,\n}\n\nfn main() {\n    let plan = RoutePlan { to_core: 1, to_scan: 1, to_charge: 1 };\n    let RoutePlan { to_core, to_scan, to_charge } = plan;\n    let bonus = Some(3);\n    if let Some(v) = bonus {\n        add_vault(v);\n    }\n    step(to_core);\n    let mut core = grab_core();\n    step(to_scan);\n    scan(&core);\n    step(to_charge);\n    boost(&mut core);\n    step(1);\n    deliver(core);\n}"
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
      "cores": [
        {
          "id": "c1",
          "x": 1,
          "y": 1,
          "power": 2,
          "label": "仕分コア"
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
        "x": 2,
        "y": 0,
        "initial": 0,
        "target": 3
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "deliverCores": 1,
      "minCorePower": 4,
      "scanCount": 1,
      "vaultTarget": 3,
      "requireSpatialCoreRules": true
    },
    "parTicks": 10
  },
  {
    "displayId": "18-4",
    "id": "2408bb72-9259-5dd6-ba85-f9857cf291a5",
    "index": 379,
    "chapter": 18,
    "chapterTitle": "第18章 パターンとマッチング",
    "title": "18-4. 複数パターン | と範囲パターン ..=",
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
    "displayId": "18-5",
    "id": "a3e7188d-e583-4a1f-93d2-25cfc17483df",
    "index": 380,
    "chapter": 18,
    "chapterTitle": "第18章 パターンとマッチング",
    "stageKind": "puzzle",
    "title": "18-5. バッチ分類＋コンベア・スパーク時短突破",
    "topicTag": "| と ..= + コンベア + スパーク",
    "kurumiIntro": "ベルトコンベアの荷物 `conveyor_batch()`（`[1, 4, 2, 6]`）を `1 | 2` と `3..=6` で素早く分類して金庫へ⚡6を貯め、コンベア加速とスパーク待機を組み合わせて 8 ティック以内にゴールしよう！",
    "goalSummary": "金庫⚡6・スパーク回避・8ティック以内で (6, 1) へ",
    "bookSectionTitle": "18.3 複式・範囲パターンと高速コース走破",
    "bookSummary": "複数条件を `|` と `..=` でコンパクトにまとめつつ、コンベア加速の歩数計算とスパーク回避を組み合わせて制限時間内にゴールします。",
    "bookKeyCode": "1 | 2 => 1, 3..=6 => 2, _ => 0",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn main() {\n    let mut sum = 0;\n    for item in conveyor_batch() {\n        sum += match item {\n            1 | 2 => 1,\n            3..=6 => 2,\n            _ => 0,\n        };\n    }\n    add_vault(sum);\n    step(2);\n    while is_spark_ahead() {\n        wait_tick(1);\n    }\n    step(3);\n}",
    "quickChips": [
      {
        "label": "3..=6 => 2,",
        "insert": "3..=6 => 2,"
      },
      {
        "label": "while is_spark_ahead() { wait_tick(1); }",
        "insert": "while is_spark_ahead() {\n        wait_tick(1);\n    }\n    "
      }
    ],
    "hints": [
      "`conveyor_batch()` の要素を `1 | 2 => 1`、`3..=6 => 2` で合計すれば⚡6になるよ。2歩進んでコンベア(1, 1)を越えたら正面のスパーク(4, 1)を待って残り3歩で (6, 1) へ！",
      "`for item in conveyor_batch()` の `match` で `sum` を計算して `add_vault(sum)` し、`step(2); while is_spark_ahead() { wait_tick(1); } step(3);` を実行しよう。",
      "fn main() {\n    let mut sum = 0;\n    for item in conveyor_batch() {\n        sum += match item {\n            1 | 2 => 1,\n            3..=6 => 2,\n            _ => 0,\n        };\n    }\n    add_vault(sum);\n    step(2);\n    while is_spark_ahead() {\n        wait_tick(1);\n    }\n    step(3);\n}"
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
      "conveyors": [
        {
          "x": 1,
          "y": 1,
          "dir": 0
        }
      ],
      "conveyorItems": [
        1,
        4,
        2,
        6
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
              "y": 1
            }
          ],
          "initialIndex": 0
        }
      ],
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
      "maxTicks": 8
    },
    "parTicks": 7
  },
  {
    "displayId": "18-6",
    "id": "6032bb13-8be5-517d-95d7-784a910560e3",
    "index": 381,
    "chapter": 18,
    "chapterTitle": "第18章 パターンとマッチング",
    "title": "18-6. enum バリアントのデータ分配束縛",
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
    "displayId": "18-7",
    "id": "6d8acf1f-5f21-46b9-8002-4f2af473e170",
    "index": 382,
    "chapter": 18,
    "chapterTitle": "第18章 パターンとマッチング",
    "stageKind": "puzzle",
    "title": "18-7. enum ナビ分解でUターン2スイッチ迷路",
    "topicTag": "enum分解 + Uターン + ゲート",
    "kurumiIntro": "U字型になった迷路にはスイッチが2つ、そして戻り道の途中にゲートがあるよ！`enum Nav` の各コマンドを分配束縛で取り出して一気に折り返そう。",
    "goalSummary": "2スイッチを踏みゲートを抜けてUターンの先 (0, 3) へ",
    "bookSectionTitle": "18.3 列挙型コマンドと迷路ナビゲーション",
    "bookSummary": "コマンド列を `enum` バリアントで表し、`match` の分配束縛で取り出した数値に応じて安全待機や方向転換を行います。",
    "bookKeyCode": "Nav::TurnWaitGo(n) => { turn_right(); while !is_gate_open() { wait_tick(1); } step(n); }",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "enum Nav {\n    Go(i32),\n    TurnGo(i32),\n    TurnWaitGo(i32),\n}\n\nfn main() {\n    let cmds = vec![Nav::Go(3), Nav::TurnGo(2), Nav::TurnWaitGo(3)];\n    for cmd in cmds {\n        match cmd {\n            Nav::Go(n) => step(n),\n            Nav::TurnGo(n) => {\n                turn_right();\n                step(n);\n            },\n            Nav::TurnWaitGo(n) => {\n                turn_right();\n                while !is_gate_open() {\n                    wait_tick(1);\n                }\n                step(n);\n            },\n        }\n    }\n}",
    "quickChips": [
      {
        "label": "turn_right(); while !is_gate_open() { ... }",
        "insert": "{\n                turn_right();\n                while !is_gate_open() {\n                    wait_tick(1);\n                }\n                step(n);\n            }"
      }
    ],
    "hints": [
      "U字型のコースを東3歩→右折して南2歩→さらに右折（西向き）してゲートが開くのを待ってから3歩進めば、2つのスイッチを踏んで (0, 3) へ着くよ。",
      "`enum Nav { Go(i32), TurnGo(i32), TurnWaitGo(i32) }` を `vec![Nav::Go(3), Nav::TurnGo(2), Nav::TurnWaitGo(3)]` で回し、`TurnWaitGo` で `turn_right(); while !is_gate_open() { wait_tick(1); } step(n);` しよう。",
      "enum Nav {\n    Go(i32),\n    TurnGo(i32),\n    TurnWaitGo(i32),\n}\n\nfn main() {\n    let cmds = vec![Nav::Go(3), Nav::TurnGo(2), Nav::TurnWaitGo(3)];\n    for cmd in cmds {\n        match cmd {\n            Nav::Go(n) => step(n),\n            Nav::TurnGo(n) => {\n                turn_right();\n                step(n);\n            },\n            Nav::TurnWaitGo(n) => {\n                turn_right();\n                while !is_gate_open() {\n                    wait_tick(1);\n                }\n                step(n);\n            },\n        }\n    }\n}"
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
      },
      "switches": [
        {
          "x": 1,
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
            "x": 3,
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
    "displayId": "18-8",
    "id": "7bafe10a-2ef4-517f-b48f-9256122665f4",
    "index": 383,
    "chapter": 18,
    "chapterTitle": "第18章 パターンとマッチング",
    "title": "18-8. マッチガード if と @ バインディング",
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
    "displayId": "18-9",
    "id": "331c57e3-ad96-5e04-b779-c1c7a378c808",
    "index": 384,
    "chapter": 18,
    "chapterTitle": "第18章 パターンとマッチング",
    "title": "18-9. @ バインディングで金庫エネルギー選別",
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
    "displayId": "18-10",
    "id": "b4374fe3-6426-5e4b-ab02-e93453235b97",
    "index": 385,
    "chapter": 18,
    "chapterTitle": "第18章 パターンとマッチング",
    "title": "18-10. _ と .. でいらない部分を賢く無視する",
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
    "displayId": "18-11",
    "id": "c408ec78-5ad3-4fe5-862b-b05b891fba3a",
    "index": 386,
    "chapter": 18,
    "chapterTitle": "第18章 パターンとマッチング",
    "stageKind": "puzzle",
    "title": "18-11. .. 省略＋@ガード選別でダイヤル解錠",
    "topicTag": ".. 省略 + @ ガード + テスト",
    "kurumiIntro": "重さフィールドを `..` で無視して `code` だけ取り出し、`v @ 2..=6 if v % 2 == 0` で偶数番号だけを集計しよう！`#[test]` 検証のあと、ダイヤルと金庫を一気に攻略だ。",
    "goalSummary": "テスト合格・ダイヤル(6)・金庫⚡6・ゴール (4, 1) へ",
    "bookSectionTitle": "18.3 .. 省略と @ ガードの複合テスト",
    "bookSummary": "不要フィールドを `..` で省略し、取り出した値を `@` バインディングと `if` ガードで厳密に選別して計算します。",
    "bookKeyCode": "let Crate { code, .. } = c;\nmatch code { v @ 2..=6 if v % 2 == 0 => v, _ => 0 }",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "struct Crate { code: i32, weight: i32 }\n\nfn filter_even(c: Crate) -> i32 {\n    let Crate { code, .. } = c;\n    match code {\n        v @ 2..=6 if v % 2 == 0 => v,\n        _ => 0,\n    }\n}\n\n#[test]\nfn t_even() {\n    assert_eq!(filter_even(Crate { code: 3, weight: 5 }), 0);\n    assert_eq!(filter_even(Crate { code: 4, weight: 5 }), 4);\n}\n\nfn main() {\n    let crates = vec![\n        Crate { code: 2, weight: 10 },\n        Crate { code: 3, weight: 8 },\n        Crate { code: 4, weight: 6 },\n        Crate { code: 8, weight: 4 },\n    ];\n    let mut sum = 0;\n    for c in crates {\n        sum += filter_even(c);\n    }\n    try_dial(sum);\n    add_vault(sum);\n    step(4);\n}",
    "quickChips": [
      {
        "label": "v @ 2..=6 if v % 2 == 0 => v,",
        "insert": "v @ 2..=6 if v % 2 == 0 => v,"
      },
      {
        "label": "try_dial(sum);",
        "insert": "try_dial(sum);"
      }
    ],
    "hints": [
      "`Crate { code, weight }` から `..` で `weight` を省略し、`v @ 2..=6 if v % 2 == 0` の偶数だけ合計(2 + 4 = 6)しよう。`#[test]` 合格のあとダイヤル(6)・金庫⚡6・4歩でゴール！",
      "`fn filter_even(c: Crate) -> i32` に `let Crate { code, .. } = c;` とガード付き範囲マッチを書いて `#[test]` で検証し、合計 `sum` で `try_dial(sum); add_vault(sum); step(4);` しよう。",
      "struct Crate { code: i32, weight: i32 }\n\nfn filter_even(c: Crate) -> i32 {\n    let Crate { code, .. } = c;\n    match code {\n        v @ 2..=6 if v % 2 == 0 => v,\n        _ => 0,\n    }\n}\n\n#[test]\nfn t_even() {\n    assert_eq!(filter_even(Crate { code: 3, weight: 5 }), 0);\n    assert_eq!(filter_even(Crate { code: 4, weight: 5 }), 4);\n}\n\nfn main() {\n    let crates = vec![\n        Crate { code: 2, weight: 10 },\n        Crate { code: 3, weight: 8 },\n        Crate { code: 4, weight: 6 },\n        Crate { code: 8, weight: 4 },\n    ];\n    let mut sum = 0;\n    for c in crates {\n        sum += filter_even(c);\n    }\n    try_dial(sum);\n    add_vault(sum);\n    step(4);\n}"
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
      "dial": {
        "x": 1,
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
      "vaultTarget": 6,
      "testsRequired": 1
    },
    "parTicks": 7
  },
  {
    "displayId": "18-12",
    "id": "6881bf72-be99-592e-99bc-f6ad3df32748",
    "index": 387,
    "chapter": 18,
    "chapterTitle": "第18章 パターンとマッチング",
    "title": "18-12. 第18章総合：パターン司令ディスパッチャ",
    "topicTag": "パターン総合パズル",
    "kurumiIntro": "第18章の総合課題！マッチガード・`@` バインディング・構造体分配束縛を組み合わせて、連動スイッチを踏んでゲートをくぐり抜けよう！",
    "goalSummary": "パターンマッチで制御し金庫⚡5＋ゲート先の (5, 1) へ",
    "bookSectionTitle": "第18章 パターンとマッチング 総合演習",
    "bookSummary": "あらゆるデータの形を安全・正確に分解できるパターンマッチングは、Rust の記述力の要です。",
    "bookKeyCode": "match pkt { Pkt::Boost(n @ 1..=5) if n >= 5 => ... }",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "struct Packet {\n    code: i32,\n    steps: i32,\n}\n\nfn main() {\n    let pkt = Packet { code: 5, steps: 5 };\n    let Packet { code, steps } = pkt;\n    match code {\n        c @ 1..=6 if c >= 5 => {\n            add_vault(c);\n            step(steps);\n        },\n        _ => step(1),\n    }\n}",
    "quickChips": [
      {
        "label": "c @ 1..=6 if c >= 5",
        "insert": "c @ 1..=6 if c >= 5"
      }
    ],
    "hints": [
      "構造体分配束縛で `code = 5`・`steps = 5` を取り出し、ガード付き範囲パターン（`c @ 1..=6 if c >= 5`）にマッチさせて金庫⚡5＆5歩でスイッチとゲート先 (5, 1) へ進もう。",
      "`let Packet { code, steps } = Packet { code: 5, steps: 5 };` を `match code { c @ 1..=6 if c >= 5 => { add_vault(c); step(steps); }, _ => step(1) }` で処理しよう。",
      "struct Packet {\n    code: i32,\n    steps: i32,\n}\n\nfn main() {\n    let pkt = Packet { code: 5, steps: 5 };\n    let Packet { code, steps } = pkt;\n    match code {\n        c @ 1..=6 if c >= 5 => {\n            add_vault(c);\n            step(steps);\n        },\n        _ => step(1),\n    }\n}"
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
  },
  {
    "displayId": "18-13",
    "id": "6eb01978-7e5c-47c8-9833-2698e68587bb",
    "index": 388,
    "chapter": 18,
    "chapterTitle": "第18章 パターンとマッチング",
    "stageKind": "challenge",
    "title": "18-13. 第18章マスター：パターン全記法で完全自動化コース",
    "topicTag": "第18章 最終チャレンジ",
    "kurumiIntro": "第18章の最終チャレンジ！タプル・構造体・`_`・`..`・`|`・`..=`・`@`・ガード・`if let`・`enum` 網羅をフル活用し、テスト・ダイヤル・2スイッチ・ゲート・スパーク・空間コア納品を制覇しよう！",
    "goalSummary": "テスト合格・ダイヤル(6)・金庫⚡6・全スイッチ・コア検査＆強化⚡4+納品・(8, 1) へ",
    "bookSectionTitle": "第18章マスター — パターンマッチング完全制覇",
    "bookSummary": "データ構造を自在に分解・選別・網羅するパターン記法と `#[test]` 検証を組み合わせ、複雑なギミックが並ぶ工程を正確に制御します。",
    "bookKeyCode": "n @ 2..=6 if n % 2 == 0 + struct { tag, .. } + enum StepCmd",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "struct OrderPkg { tag: i32, steps: i32, secret: i32 }\n\nenum StepCmd { Advance(i32), Check, Charge, SendOff }\n\nfn pick_score(x: i32) -> i32 {\n    match x {\n        n @ 2..=6 if n % 2 == 0 => n,\n        1 | 7 => 0,\n        _ => 0,\n    }\n}\n\n#[test]\nfn t_pat() {\n    assert_eq!(pick_score(2), 2);\n    assert_eq!(pick_score(3), 0);\n    assert_eq!(pick_score(4), 4);\n}\n\nfn main() {\n    let (a, _, b) = (2, 99, 4);\n    let score = pick_score(a) + pick_score(b);\n    let pkg = OrderPkg { tag: score, steps: 2, secret: 10 };\n    let OrderPkg { tag, .. } = pkg;\n    let bonus = Some(tag);\n    if let Some(v) = bonus {\n        try_dial(v);\n        add_vault(v);\n    }\n\n    step(1);\n    let mut core = grab_core();\n    let cmds = vec![\n        StepCmd::Advance(1),\n        StepCmd::Check,\n        StepCmd::Advance(5),\n        StepCmd::Charge,\n        StepCmd::Advance(1),\n        StepCmd::SendOff,\n    ];\n    for cmd in cmds {\n        match cmd {\n            StepCmd::Advance(n) => {\n                for _ in 0..n {\n                    while !is_gate_open() || is_spark_ahead() { wait_tick(1); }\n                    step();\n                }\n            },\n            StepCmd::Check => scan(&core),\n            StepCmd::Charge => boost(&mut core),\n            StepCmd::SendOff => deliver(core),\n        }\n    }\n}",
    "quickChips": [
      {
        "label": "n @ 2..=6 if n % 2 == 0 => n,",
        "insert": "n @ 2..=6 if n % 2 == 0 => n,"
      },
      {
        "label": "try_dial(v);",
        "insert": "try_dial(v);"
      },
      {
        "label": "boost(&mut core)",
        "insert": "boost(&mut core)"
      }
    ],
    "hints": [
      "ガード付き `@` パターンで `2` と `4` を拾って合計 `6` を作り、`..` 分配束縛と `if let Some(v)` でダイヤル(6)・金庫⚡6をクリアしたら、`enum StepCmd` 列でコア検査(2,1)＆強化(7,1)⚡4+＆納品(8,1)を実行しよう。",
      "`pick_score`（`n @ 2..=6 if n % 2 == 0 => n`）と `#[test]`、`OrderPkg { tag, .. }`、`StepCmd` の `Vec`（`Advance(1), Check, Advance(5), Charge, Advance(1), SendOff`）でゲート＆スパークを待ちながら進めよう。",
      "struct OrderPkg { tag: i32, steps: i32, secret: i32 }\n\nenum StepCmd { Advance(i32), Check, Charge, SendOff }\n\nfn pick_score(x: i32) -> i32 {\n    match x {\n        n @ 2..=6 if n % 2 == 0 => n,\n        1 | 7 => 0,\n        _ => 0,\n    }\n}\n\n#[test]\nfn t_pat() {\n    assert_eq!(pick_score(2), 2);\n    assert_eq!(pick_score(3), 0);\n    assert_eq!(pick_score(4), 4);\n}\n\nfn main() {\n    let (a, _, b) = (2, 99, 4);\n    let score = pick_score(a) + pick_score(b);\n    let pkg = OrderPkg { tag: score, steps: 2, secret: 10 };\n    let OrderPkg { tag, .. } = pkg;\n    let bonus = Some(tag);\n    if let Some(v) = bonus {\n        try_dial(v);\n        add_vault(v);\n    }\n\n    step(1);\n    let mut core = grab_core();\n    let cmds = vec![\n        StepCmd::Advance(1),\n        StepCmd::Check,\n        StepCmd::Advance(5),\n        StepCmd::Charge,\n        StepCmd::Advance(1),\n        StepCmd::SendOff,\n    ];\n    for cmd in cmds {\n        match cmd {\n            StepCmd::Advance(n) => {\n                for _ in 0..n {\n                    while !is_gate_open() || is_spark_ahead() { wait_tick(1); }\n                    step();\n                }\n            },\n            StepCmd::Check => scan(&core),\n            StepCmd::Charge => boost(&mut core),\n            StepCmd::SendOff => deliver(core),\n        }\n    }\n}"
    ],
    "worldSetup": {
      "width": 9,
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
          "x": 6,
          "y": 0
        },
        {
          "x": 7,
          "y": 0
        },
        {
          "x": 8,
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
          "x": 6,
          "y": 2
        },
        {
          "x": 7,
          "y": 2
        },
        {
          "x": 8,
          "y": 2
        }
      ],
      "botStart": {
        "x": 0,
        "y": 1,
        "dir": 0
      },
      "goal": {
        "x": 8,
        "y": 1
      },
      "cores": [
        {
          "id": "c1",
          "x": 1,
          "y": 1,
          "power": 2,
          "label": "仕分極光コア"
        }
      ],
      "scanners": [
        {
          "x": 2,
          "y": 1
        }
      ],
      "switches": [
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 6,
          "y": 1
        }
      ],
      "gates": [
        {
          "x": 4,
          "y": 1,
          "openTicks": 1,
          "closedTicks": 1,
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
              "y": 0
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
              "y": 1
            }
          ],
          "initialIndex": 0
        }
      ],
      "chargers": [
        {
          "x": 7,
          "y": 1
        }
      ],
      "deliveries": [
        {
          "x": 8,
          "y": 1
        }
      ],
      "dial": {
        "x": 1,
        "y": 0,
        "secret": 6
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
      "deliverCores": 1,
      "minCorePower": 4,
      "scanCount": 1,
      "dialSolved": true,
      "vaultTarget": 6,
      "testsRequired": 1,
      "requireAllSwitches": true,
      "requireSpatialCoreRules": true
    },
    "parTicks": 17
  }
];
