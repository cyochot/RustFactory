import { StageDefinition } from '../types/game';

export const CHAPTER_8_STAGES: StageDefinition[] = [
  {
    "displayId": "8-1",
    "id": "c0581340-c3c5-5377-b453-7ef58d8eecfe",
    "index": 177,
    "chapter": 8,
    "chapterTitle": "第8章 一般的なコレクション",
    "title": "8-1. ベクタ Vec<T> でリスト操作",
    "topicTag": "Vec<T> / push / for",
    "kurumiIntro": "いくつでも中身を増やせる便利なリスト `Vec`（ベクタ）を使おう！`push` で歩数リストを作って合計分だけ歩いてみて！",
    "goalSummary": "Vec に歩数を追加して合計3歩進み、ゴール (3, 1) へ",
    "bookSectionTitle": "8.1 ベクタでリストの値を保存する",
    "bookSummary": "`vec![1, 2]` や `Vec::new()` で作る可変長リストがベクタです。`.push(値)` で末尾に追加でき、`for x in list` で順番に取り出せます。",
    "bookKeyCode": "let mut list = vec![1, 1];\nlist.push(1);",
    "starterCode": "fn main() {\n    let mut steps = vec![1, 1];\n    // ここにもう1歩 push しよう！\n    \n    for s in steps {\n        step(s);\n    }\n}",
    "solutionCode": "fn main() {\n    let mut steps = vec![1, 1];\n    steps.push(1);\n    for s in steps {\n        step(s);\n    }\n}",
    "quickChips": [
      {
        "label": "steps.push(1);",
        "insert": "steps.push(1);\n    "
      }
    ],
    "hints": [
      "今 steps には [1, 1] の合計2歩しか入っていないよ。",
      "`steps.push(1);` を書いて3歩にしよう！",
      "let mut steps = vec![1, 1];\nsteps.push(1);"
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
    "displayId": "8-2",
    "id": "8b57d218-9e07-5421-a27f-e7d227d78e80",
    "index": 178,
    "chapter": 8,
    "chapterTitle": "第8章 一般的なコレクション",
    "title": "8-2. Vec::new() から空のリストを育てる",
    "topicTag": "Vec::new() / push",
    "kurumiIntro": "最初は空っぽの `Vec::new()` を作って、必要な数だけ `.push(...)` で積み上げてから金庫と移動に使ってみよう！",
    "goalSummary": "Vec::new() に 2 と 2 を push して金庫⚡4＋ゴールへ",
    "bookSectionTitle": "8.1 Vec::new による生成と追加",
    "bookSummary": "空のベクタは `let mut v = Vec::new();` で作り、あとから `.push(値)` でどんどん要素を追加できます。",
    "bookKeyCode": "let mut v = Vec::new();\nv.push(2);\nv.push(2);",
    "starterCode": "fn main() {\n    let mut list = Vec::new();\n    list.push(2);\n    // もう1つ 2 を push しよう！\n    \n    for x in list {\n        add_vault(x);\n        step(x);\n    }\n}",
    "solutionCode": "fn main() {\n    let mut list = Vec::new();\n    list.push(2);\n    list.push(2);\n    for x in list {\n        add_vault(x);\n        step(x);\n    }\n}",
    "quickChips": [
      {
        "label": "list.push(2);",
        "insert": "list.push(2);\n    "
      }
    ],
    "hints": [
      "今は 2 が1個しか入っていないから合計 2 しか増えないよ。",
      "list.push(2); をもう1行追加して [2, 2] にしよう！",
      "list.push(2);\nlist.push(2);"
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
    "parTicks": 6
  },
  {
    "displayId": "8-3",
    "id": "da6c9668-2286-5537-b079-941dd62655fb",
    "index": 179,
    "chapter": 8,
    "chapterTitle": "第8章 一般的なコレクション",
    "title": "8-3. ベクタの .get(index) で安全に読む",
    "topicTag": "Vec::get / Option",
    "kurumiIntro": "`v[99]` みたいに存在しない番号を読むとパニックするけど、`v.get(index)` なら `Option`（`Some` か `None`）を返してくれるから安全なんだ！",
    "goalSummary": "v.get(2) で3番目の歩数 4 を取り出してゴール (4, 1) へ",
    "bookSectionTitle": "8.1 ベクタの要素を読む — [] と .get()",
    "bookSummary": "`.get(i)` メソッドは範囲外なら `None`、範囲内なら `Some(値)` を返すため、安全に要素を取り出せます。",
    "bookKeyCode": "if let Some(n) = v.get(2) {\n    step(n);\n}",
    "starterCode": "fn main() {\n    let v = vec![1, 2, 4];\n    // v.get(0) だと 1 しか取れないよ。2番目(添字2)の 4 を取り出そう！\n    if let Some(n) = v.get(0) {\n        step(n);\n    }\n}",
    "solutionCode": "fn main() {\n    let v = vec![1, 2, 4];\n    if let Some(n) = v.get(2) {\n        step(n);\n    }\n}",
    "quickChips": [
      {
        "label": "v.get(2)",
        "insert": "v.get(2)"
      }
    ],
    "hints": [
      "添字は 0 から始まるから、vec![1, 2, 4] の 4 は添字 2 にあるよ！",
      "v.get(0) を v.get(2) に変えてみよう。",
      "if let Some(n) = v.get(2) {"
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
    "displayId": "8-4",
    "id": "056db8f2-5847-5e13-9b61-f1d6f9ec7501",
    "index": 180,
    "chapter": 8,
    "chapterTitle": "第8章 一般的なコレクション",
    "stageKind": "puzzle",
    "title": "8-4. Vec::get() で境界外を安全ガード",
    "topicTag": "Vec::get + スパーク回避",
    "kurumiIntro": "指示配列の「範囲外」を読んでパニックしちゃうバグを `.get(i)` の安全なパターンに書き換えて、金庫⚡6とゴールへの配達を決めよう！",
    "goalSummary": "Vec::get で安全に値を集計し、金庫⚡6＋全スイッチで (5, 1) へ",
    "bookSectionTitle": "8.1 範囲外アクセスを防ぐ .get() と unwrap_or",
    "bookSummary": "添字がベクタの長さを超える可能性があるときは `list.get(i)` で `Option` として受け取ると安全です。",
    "bookKeyCode": "let val = cmds.get(i).unwrap_or(0);",
    "starterCode": "fn main() {\n    let cmds = vec![2, 4];\n    let mut sum = 0;\n    for i in 0..4 {\n        // cmds の長さは2！cmds.get(i).unwrap_or(0) で全要素を安全に足そう（今は先頭1個だけ）\n        if i == 0 {\n            sum += cmds[i];\n        }\n    }\n    add_vault(sum);\n    step(5);\n}",
    "solutionCode": "fn main() {\n    let cmds = vec![2, 4];\n    let mut sum = 0;\n    for i in 0..4 {\n        sum += cmds.get(i).unwrap_or(0);\n    }\n    add_vault(sum);\n    step(5);\n}",
    "quickChips": [
      {
        "label": "cmds.get(i).unwrap_or(0)",
        "insert": "cmds.get(i).unwrap_or(0)"
      }
    ],
    "hints": [
      "for i in 0..4 は 0, 1, 2, 3 を回すけど cmds の要素は 2 個しかないよ！",
      "cmds[i] を `cmds.get(i).unwrap_or(0)` に変えれば、安全に 2 + 4 + 0 + 0 = 6 が得られるよ！",
      "sum += cmds.get(i).unwrap_or(0);"
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
    "parTicks": 8
  },
  {
    "displayId": "8-5",
    "id": "5da5c53a-688d-5247-bb6f-5080b1a23189",
    "index": 181,
    "chapter": 8,
    "chapterTitle": "第8章 一般的なコレクション",
    "title": "8-5. ベクタの要素を変換してL字＋金庫",
    "topicTag": "Vec 実践パズル",
    "kurumiIntro": "配列に入った2つの数字を使って、1つめは「横移動」、2つめは「金庫に足して縦移動」してみよう！",
    "goalSummary": "Vec の要素を使って金庫⚡2＋L字ゴール (3, 3) へ",
    "bookSectionTitle": "8.1 ベクタの反復とインデックス活用",
    "bookSummary": "リストの長さと要素を活用することで、定型ルートやパラメータを柔軟に管理できます。",
    "bookKeyCode": "let legs = vec![3, 2];\nstep(legs[0]); turn_right(); step(legs[1]);",
    "starterCode": "fn main() {\n    let mut legs = vec![3];\n    // legs に 2 を push して、横 legs[0]、縦 legs[1]、金庫にも legs[1] を入れよう！\n    \n    step(legs[0]);\n    turn_right();\n    add_vault(legs[1]);\n    step(legs[1]);\n}",
    "solutionCode": "fn main() {\n    let mut legs = vec![3];\n    legs.push(2);\n    step(legs[0]);\n    turn_right();\n    add_vault(legs[1]);\n    step(legs[1]);\n}",
    "quickChips": [
      {
        "label": "legs.push(2);",
        "insert": "legs.push(2);\n    "
      }
    ],
    "hints": [
      "legs には今 3 しか入っていないから legs[1] が取れないよ！",
      "legs.push(2); を2行目に追加しよう！",
      "let mut legs = vec![3];\nlegs.push(2);"
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
    "displayId": "8-6",
    "id": "0ef458ae-a34d-580a-a67b-888e8ed83efe",
    "index": 182,
    "chapter": 8,
    "chapterTitle": "第8章 一般的なコレクション",
    "stageKind": "puzzle",
    "title": "8-6. Vec で記録するステップと折り返し移動",
    "topicTag": "Vec<i32> / 折り返し設計",
    "kurumiIntro": "U字やS字の折れ曲がったコースを、1つの `Vec<i32>` リストに詰めた歩数と左右のターン規則だけで走破しよう！",
    "goalSummary": "Vec に4区間の歩数を登録してスイッチを踏み、ゴール (5, 3) へ",
    "bookSectionTitle": "8.1 Vec による柔軟なルートパラメータ化",
    "bookSummary": "各直進区間の長さを `Vec` に格納しておけば、同じループ構造で異なるマップも簡単に走らせられます。",
    "bookKeyCode": "let segs = vec![2, 2, 2, 1];",
    "starterCode": "fn main() {\n    let mut segs = vec![2, 2];\n    // あと2つ数値を push して「東2→右折→南2→左折→東3」を作ろう！\n    // 注意: (3,3)と(4,3)にコンベアがあるから最後の1歩だけでゴールするかも？\n    step(segs[0]);\n    turn_right();\n    step(segs[1]);\n}",
    "solutionCode": "fn main() {\n    let mut segs = vec![2, 2];\n    segs.push(2);\n    step(segs[0]);\n    turn_right();\n    step(segs[1]);\n    turn_left();\n    step(segs[2]);\n}",
    "quickChips": [
      {
        "label": "segs.push(2);",
        "insert": "segs.push(2);\n    "
      },
      {
        "label": "turn_left();\n    step(segs[2]);",
        "insert": "turn_left();\n    step(segs[2]);"
      }
    ],
    "hints": [
      "(0,1) から東2で (2,1)スイッチを踏み、右折して南2で (2,3) へ着くよ！",
      "最後は左折して東へ進むとき、(3,3)に右向きコンベアがあるから 2 歩分（実質3マス進める）で (5,3) のゴールにぴったり届くよ！",
      "segs.push(2);\n... turn_left();\nstep(segs[2]);"
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
          "x": 3,
          "y": 3,
          "dir": 0
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "requireAllSwitches": true
    },
    "parTicks": 10
  },
  {
    "displayId": "8-7",
    "id": "2f8e6a17-235e-55d7-b8af-33443c7435b2",
    "index": 183,
    "chapter": 8,
    "chapterTitle": "第8章 一般的なコレクション",
    "stageKind": "challenge",
    "title": "8-7. Vec ログ記録＆最大スピードコンベア",
    "topicTag": "Vec + コンベア最短タイム",
    "kurumiIntro": "移動ログを `Vec` に集めつつ、ベルトコンベアの加速を使って7ティック以内にスイッチ＋金庫＋ゴールをすべて決めよう！",
    "goalSummary": "Vec の移動データで7ティック以内に金庫⚡6＋全スイッチ＋(5, 3) へ",
    "bookSectionTitle": "8.1 最短手順リストを Vec で組む",
    "bookSummary": "コンベアによって稼げるマス数を計算し、最小限の `Vec` ステップを組み立てるタイムアタックパズルです。",
    "bookKeyCode": "let moves = vec![1, 1, 1];",
    "starterCode": "fn main() {\n    let mut bonuses = Vec::new();\n    bonuses.push(3);\n    bonuses.push(3);\n    let mut total = 0;\n    for b in bonuses { total += b; }\n    add_vault(total);\n    // 7ティック以内に行きたい！コンベア(1,1),(2,2),(3,3),(4,3)を見よう\n    step(2);\n}",
    "solutionCode": "fn main() {\n    let mut bonuses = Vec::new();\n    bonuses.push(3);\n    bonuses.push(3);\n    let mut total = 0;\n    for b in bonuses { total += b; }\n    add_vault(total);\n    step(1);\n    turn_right();\n    step(1);\n    turn_left();\n    step(2);\n}",
    "quickChips": [
      {
        "label": "step(1);",
        "insert": "step(1);\n    "
      },
      {
        "label": "step(2);",
        "insert": "step(2);"
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
      "(1,1) の東向きコンベアに乗れば 1 歩でスイッチのある (2,1) に着くよ！",
      "そこから右折して 1 歩で (2,2) の南向きコンベアに乗り (2,3) へ！",
      "さらに左折して `step(2);` で (3,3) コンベア→(4,3)→(5,3) へ！合計8ティック以内にクリア！"
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
      ],
      "vault": {
        "x": 0,
        "y": 0,
        "initial": 0,
        "target": 6
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "vaultTarget": 6,
      "requireAllSwitches": true,
      "maxTicks": 8
    },
    "parTicks": 8
  },
  {
    "displayId": "8-8",
    "id": "a854babb-ef5d-5c32-9762-d2ca6ff15c51",
    "index": 184,
    "chapter": 8,
    "chapterTitle": "第8章 一般的なコレクション",
    "stageKind": "puzzle",
    "title": "8-8. String 荷札の文字列組み立てと検証",
    "topicTag": "String::push_str + コア納品",
    "kurumiIntro": "チェックポイントを1つ越えるごとに `String` のスタンプ台に荷札を追記して、最終的に `\"CORE_SCANNED_BOOSTED\"` を表示してから納品台へ届けよう！",
    "goalSummary": "\"CORE_SCANNED_BOOSTED\" を出力し、コア⚡4以上を空間ルール通り納品",
    "bookSectionTitle": "8.2 String の段階的な追記",
    "bookSummary": "処理が1ステップ完了するたびに `.push_str()` で状態ラベルを追記していくパターンです。",
    "bookKeyCode": "log.push_str(\"_SCANNED\");",
    "starterCode": "fn main() {\n    let mut tag = String::from(\"CORE\");\n    step(1);\n    let mut c = grab_core();\n    step(1);\n    scan(&c);\n    tag.push_str(\"_SCANNED\");\n    step(1);\n    boost(&mut c);\n    // ここで \"_BOOSTED\" を push_str し、println! してから(4,1)へ運ぼう！\n    println!(\"{}\", tag);\n    step(1);\n    deliver(c);\n}",
    "solutionCode": "fn main() {\n    let mut tag = String::from(\"CORE\");\n    step(1);\n    let mut c = grab_core();\n    step(1);\n    scan(&c);\n    tag.push_str(\"_SCANNED\");\n    step(1);\n    boost(&mut c);\n    tag.push_str(\"_BOOSTED\");\n    println!(\"{}\", tag);\n    step(1);\n    deliver(c);\n}",
    "quickChips": [
      {
        "label": "tag.push_str(\"_BOOSTED\");",
        "insert": "tag.push_str(\"_BOOSTED\");\n    "
      }
    ],
    "hints": [
      "boost(&mut c) の直後に `tag.push_str(\"_BOOSTED\");` が抜けているよ！",
      "それだけで `\"CORE_SCANNED_BOOSTED\"` が完成して出力されるよ。",
      "tag.push_str(\"_BOOSTED\");"
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
          "label": "荷札コア"
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
        "CORE_SCANNED_BOOSTED"
      ],
      "requireSpatialCoreRules": true
    },
    "parTicks": 10
  },
  {
    "displayId": "8-9",
    "id": "d6a7bb8f-68d7-5a00-aa96-3acd02299e6a",
    "index": 185,
    "chapter": 8,
    "chapterTitle": "第8章 一般的なコレクション",
    "title": "8-9. + 演算子で文字列を合体しよう",
    "topicTag": "String の + 連結",
    "kurumiIntro": "`String::from(\"KOBO_\") + \"GO\"` のように `+` で文字をつなげることもできるよ！つなげた文字の長さ（`.len()`）や合言葉で出発しよう。",
    "goalSummary": "String を + で結合して \"KOBO_GO\" を出力しゴールへ",
    "bookSectionTitle": "8.2 + 演算子での文字列結合",
    "bookSummary": "`let s = String::from(\"A\") + \"B\";` のように `+` で結合すると左辺の所有権を取り込みつつ連結した `String` を作れます。",
    "bookKeyCode": "let word = String::from(\"KOBO_\") + \"GO\";",
    "starterCode": "fn main() {\n    let prefix = String::from(\"KOBO_\");\n    // \"GO\" を + で足して \"KOBO_GO\" にしよう！\n    let label = prefix + \"...\";\n    println!(\"{}\", label);\n    step(4);\n}",
    "solutionCode": "fn main() {\n    let prefix = String::from(\"KOBO_\");\n    let label = prefix + \"GO\";\n    println!(\"{}\", label);\n    step(4);\n}",
    "quickChips": [
      {
        "label": "\"GO\"",
        "insert": "\"GO\""
      }
    ],
    "hints": [
      "\"...\" の部分がそのまま出力されてしまっているよ！",
      "\"...\" を \"GO\" に直して \"KOBO_GO\" を出力しよう！",
      "let label = prefix + \"GO\";"
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
        "KOBO_GO"
      ]
    },
    "parTicks": 5
  },
  {
    "displayId": "8-10",
    "id": "fd9002e9-f055-5419-9d4e-7df7295beebc",
    "index": 186,
    "chapter": 8,
    "chapterTitle": "第8章 一般的なコレクション",
    "title": "8-10. 文字列の長さと日本語UTF-8の安全さ",
    "topicTag": "String::new / push_str",
    "kurumiIntro": "空の `String::new()` に何度も `push_str` を重ねて、合言葉 `\"OPEN_SESAME\"` を作ってからゲートを開けよう！",
    "goalSummary": "\"OPEN_SESAME\" を組み立てて出力し、ゴール (3, 1) へ",
    "bookSectionTitle": "8.2 String::new と連続 push_str",
    "bookSummary": "`String::new()` で空文字列を作り、条件に応じて少しずつ文字を足していくのは実践的な文字列構築パターンです。",
    "bookKeyCode": "let mut s = String::new();\ns.push_str(\"OPEN\");\ns.push_str(\"_SESAME\");",
    "starterCode": "fn main() {\n    let mut key = String::new();\n    key.push_str(\"OPEN\");\n    // \"_SESAME\" を後ろに足して println! しよう\n    \n    println!(\"{}\", key);\n    step(3);\n}",
    "solutionCode": "fn main() {\n    let mut key = String::new();\n    key.push_str(\"OPEN\");\n    key.push_str(\"_SESAME\");\n    println!(\"{}\", key);\n    step(3);\n}",
    "quickChips": [
      {
        "label": "key.push_str(\"_SESAME\");",
        "insert": "key.push_str(\"_SESAME\");\n    "
      }
    ],
    "hints": [
      "key には今 \"OPEN\" しか入っていないよ。",
      "key.push_str(\"_SESAME\"); を追加しよう！",
      "key.push_str(\"OPEN\");\nkey.push_str(\"_SESAME\");"
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
        "OPEN_SESAME"
      ]
    },
    "parTicks": 4
  },
  {
    "displayId": "8-11",
    "id": "e7b903f4-ca79-5791-8042-61ec29eb9a3b",
    "index": 187,
    "chapter": 8,
    "chapterTitle": "第8章 一般的なコレクション",
    "stageKind": "puzzle",
    "title": "8-11. 文字列の長さ .len() で歩数決定",
    "topicTag": "String::len() 活用",
    "kurumiIntro": "メッセージの文字数（`.len()`）がそのまま「進む歩数」になる暗号指令だよ！半角英字で作った合言葉の文字数を計算して、スイッチとゲートを抜けよう！",
    "goalSummary": "String の文字数 5 を使ってスイッチ経由でゴール (5, 1) へ",
    "bookSectionTitle": "8.2 .len() による長さ取得",
    "bookSummary": "ASCII文字列なら `s.len()` で文字数がそのまま数値として取得できるため、設定値やチェックに活用できます。",
    "bookKeyCode": "let dist = code.len();",
    "starterCode": "fn main() {\n    let mut code = String::from(\"KOBO\");\n    // ゴールは 5 歩先！あと 1 文字 push_str して長さ 5 の合言葉にしよう（例: \"!\"）\n    let dist = code.len();\n    add_vault(dist);\n    step(dist);\n}",
    "solutionCode": "fn main() {\n    let mut code = String::from(\"KOBO\");\n    code.push_str(\"!\");\n    let dist = code.len();\n    add_vault(dist);\n    step(dist);\n}",
    "quickChips": [
      {
        "label": "code.push_str(\"!\");",
        "insert": "code.push_str(\"!\");\n    "
      }
    ],
    "hints": [
      "\"KOBO\" は 4 文字だから、1文字足せば 5 文字になるよ！",
      "たとえば `code.push_str(\"!\");` を追加すると dist = 5 になって金庫⚡5と (5,1) のゴール両方がクリアになるよ！",
      "code.push_str(\"!\");"
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
      "vaultTarget": 5,
      "requireAllSwitches": true
    },
    "parTicks": 8
  },
  {
    "displayId": "8-12",
    "id": "1eb1e04b-a566-559e-b5bc-1a3bac25a608",
    "index": 188,
    "chapter": 8,
    "chapterTitle": "第8章 一般的なコレクション",
    "title": "8-12. 文字列ラベル比較でコア納品ルート分岐",
    "topicTag": "String 比較実践",
    "kurumiIntro": "荷札の文字 `tag` が `\"DELIVER\"` ならコアを運んでL字ゴールへ！合言葉もログに出してから届けよう。",
    "goalSummary": "String を組み立てて \"DELIVER_OK\" を出力しコア納品へ",
    "bookSectionTitle": "8.2 文字列の比較と利用",
    "bookSummary": "`String` 同士を `==` で安全に比較したり、フォーマットして出力したりできます。",
    "bookKeyCode": "if tag == \"DELIVER\" { ... }",
    "starterCode": "fn main() {\n    let mut tag = String::from(\"DELIVER\");\n    if tag == \"DELIVER\" {\n        let core = grab_core();\n        tag.push_str(\"_OK\");\n        println!(\"{}\", tag);\n        step(3);\n        turn_right();\n        step(2);\n        // コアを deliver(core) しよう！\n        \n    }\n}",
    "solutionCode": "fn main() {\n    let mut tag = String::from(\"DELIVER\");\n    if tag == \"DELIVER\" {\n        let core = grab_core();\n        tag.push_str(\"_OK\");\n        println!(\"{}\", tag);\n        step(3);\n        turn_right();\n        step(2);\n        deliver(core);\n    }\n}",
    "quickChips": [
      {
        "label": "deliver(core);",
        "insert": "deliver(core);"
      }
    ],
    "hints": [
      "移動と文字列出力はバッチリできているよ！あとは掴んだ core を納品するだけ。",
      "step(2); のあとに deliver(core); を書き足そう！",
      "step(2);\ndeliver(core);"
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
      "cores": [
        {
          "id": "c1",
          "x": 0,
          "y": 1,
          "power": 2,
          "label": "荷札コア"
        }
      ],
      "deliveries": [
        {
          "x": 3,
          "y": 3
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "deliverCores": 1,
      "stdoutIncludes": [
        "DELIVER_OK"
      ]
    },
    "parTicks": 9
  },
  {
    "displayId": "8-13",
    "id": "4af280a8-2c53-54a9-bd94-b10ddce67661",
    "index": 189,
    "chapter": 8,
    "chapterTitle": "第8章 一般的なコレクション",
    "title": "8-13. String と文字列の連結",
    "topicTag": "String / push_str",
    "kurumiIntro": "認証合言葉 `\"RUST_OK\"` を `String` で組み立てて出力しよう！`push_str` で文字列をつなげられるよ。",
    "goalSummary": "\"RUST_OK\" を出力してゴール (3, 1) に着こう",
    "bookSectionTitle": "8.2 UTF-8エンコードされた文字列を String で保持する",
    "bookSummary": "所有権を持つ書き換え可能な文字列が `String` です。`String::from(\"...\")` で作り、`.push_str(\"...\")` で後ろに文字をつなげられます（日本語UTF-8も安全に扱えます）。",
    "bookKeyCode": "let mut s = String::from(\"RUST\");\ns.push_str(\"_OK\");",
    "starterCode": "fn main() {\n    let mut msg = String::from(\"RUST\");\n    // \"_OK\" を後ろにつなげて println! しよう\n    msg.push_str(\"...\");\n    println!(\"{}\", msg);\n    step(3);\n}",
    "solutionCode": "fn main() {\n    let mut msg = String::from(\"RUST\");\n    msg.push_str(\"_OK\");\n    println!(\"{}\", msg);\n    step(3);\n}",
    "quickChips": [
      {
        "label": "msg.push_str(\"_OK\");",
        "insert": "msg.push_str(\"_OK\");"
      }
    ],
    "hints": [
      "今は msg.push_str(\"...\"); になっているよ。",
      "\"...\" を \"_OK\" に書き換えると \"RUST_OK\" が完成するよ！",
      "msg.push_str(\"_OK\");"
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
        "RUST_OK"
      ]
    },
    "parTicks": 4
  },
  {
    "displayId": "8-14",
    "id": "77e7ce27-a4fd-5c15-99d0-bb64128a16b5",
    "index": 190,
    "chapter": 8,
    "chapterTitle": "第8章 一般的なコレクション",
    "stageKind": "puzzle",
    "title": "8-14. Vec 経由で2方向コマンド分岐",
    "topicTag": "Vec<String> コマンド解釈",
    "kurumiIntro": "コマンド名を `Vec<String>` に並べて順番に解釈しよう！`\"R\"` なら右折、`\"F\"` ならスパーク待ち付きの安全前進、`\"S\"` なら2歩進むルールにして迷路を抜けよう！",
    "goalSummary": "Vec 文字列コマンドを実行して全スイッチ＋ゴール (4, 3) へ",
    "bookSectionTitle": "8.1 & 8.2 文字列配列をそのままスクリプトに",
    "bookSummary": "文字列のリストをループして `if cmd == \"...\"` で振り分けると、シンプルなスクリプトインタプリタが作れます。",
    "bookKeyCode": "for c in cmds { if c == \"F\" { ... } }",
    "starterCode": "fn main() {\n    let cmds = vec![\n        String::from(\"F\"),\n        String::from(\"F\"),\n        // ここから迷路に合わせて追加しよう！\n    ];\n    for c in cmds {\n        if c == \"F\" {\n            while is_spark_ahead() || !is_gate_open() { wait_tick(1); }\n            step();\n        } else if c == \"R\" {\n            turn_right();\n        } else if c == \"L\" {\n            turn_left();\n        }\n    }\n}",
    "solutionCode": "fn main() {\n    let cmds = vec![\n        String::from(\"F\"),\n        String::from(\"F\"),\n        String::from(\"F\"),\n        String::from(\"F\"),\n        String::from(\"R\"),\n        String::from(\"F\"),\n        String::from(\"F\"),\n    ];\n    for c in cmds {\n        if c == \"F\" {\n            while is_spark_ahead() || !is_gate_open() { wait_tick(1); }\n            step();\n        } else if c == \"R\" {\n            turn_right();\n        } else if c == \"L\" {\n            turn_left();\n        }\n    }\n}",
    "quickChips": [
      {
        "label": "String::from(\"F\"),",
        "insert": "String::from(\"F\"),\n        "
      },
      {
        "label": "String::from(\"R\"),",
        "insert": "String::from(\"R\"),\n        "
      }
    ],
    "hints": [
      "上の廊下は (0,1) から東へ4歩で (4,1) の角まで届くよ！途中 (1,1) にスイッチ、(2,1) にスパーク、(3,1) にスイッチ連動ゲートがあるけど、\"F\" が自動で待って進めるよ！",
      "角 (4,1) で `\"R\"` で右折して、`\"F\"` をあと2回実行すれば (4,3) へ着くよ！",
      "cmds を F × 4 → R → F × 2 の順に並べよう！"
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
              "y": 1
            }
          ],
          "initialIndex": 0
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
    "displayId": "8-15",
    "id": "7af4a668-eb8f-519c-b356-0338ccbea270",
    "index": 191,
    "chapter": 8,
    "chapterTitle": "第8章 一般的なコレクション",
    "title": "8-15. HashMap で鍵と値を照合",
    "topicTag": "HashMap<K, V>",
    "kurumiIntro": "道具箱のラベルから個数を取り出そう！`HashMap` に `\"crab\"` → `3` を登録して、取り出した数だけ進んでみてね！",
    "goalSummary": "HashMap から取り出した数 3 でゴール (3, 1) へ",
    "bookSectionTitle": "8.3 ハッシュマップにキーと値を保持する",
    "bookSummary": "`HashMap` はキーと値をペアで保存する辞書です。`.insert(k, v)` で登録し、`.get(&k)` で `Option` として値を取り出します。",
    "bookKeyCode": "let mut map = HashMap::new();\nmap.insert(\"kobo\", 3);",
    "starterCode": "fn main() {\n    let mut map = HashMap::new();\n    map.insert(\"crab\", 1);\n    // \"crab\" の値を 3 に登録しなおしてみよう！\n    \n    if let Some(n) = map.get(\"crab\") {\n        step(n);\n    }\n}",
    "solutionCode": "fn main() {\n    let mut map = HashMap::new();\n    map.insert(\"crab\", 3);\n    if let Some(n) = map.get(\"crab\") {\n        step(n);\n    }\n}",
    "quickChips": [
      {
        "label": "map.insert(\"crab\", 3);",
        "insert": "map.insert(\"crab\", 3);\n    "
      }
    ],
    "hints": [
      "同じキーでもう一度 insert すると値が上書きされるよ！",
      "map.insert(\"crab\", 3); に書き換えるか追記しよう。",
      "map.insert(\"crab\", 3);"
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
    "displayId": "8-16",
    "id": "7a589476-6bbc-5804-bf17-4e28397fdf75",
    "index": 192,
    "chapter": 8,
    "chapterTitle": "第8章 一般的なコレクション",
    "stageKind": "puzzle",
    "title": "8-16. HashMap 暗号テーブルとダイヤル解錠",
    "topicTag": "HashMap + ダイヤル",
    "kurumiIntro": "扉の合言葉テーブルが `HashMap` に入っているよ！`\"alpha\"` や `\"beta\"` から取り出した値を足し合わせて、秘密のダイヤル番号を一発で当てよう！",
    "goalSummary": "HashMap から取り出した合計 6 でダイヤルを解錠しゴール (4, 1) へ",
    "bookSectionTitle": "8.3 HashMap を設定テーブルとして使う",
    "bookSummary": "名前をキーにして値を引く辞書は、複数パーツのパスワードや係数を管理するときにとても便利です。",
    "bookKeyCode": "let code = dict.get(\"alpha\").unwrap_or(0) + dict.get(\"beta\").unwrap_or(0);",
    "starterCode": "fn main() {\n    let mut dict = HashMap::new();\n    dict.insert(\"alpha\", 2);\n    dict.insert(\"beta\", 4);\n    dict.insert(\"gamma\", 9);\n    // \"alpha\" と \"beta\" を取り出して足そう（目標のダイヤルは 6 だよ！）\n    let secret = dict.get(\"alpha\").unwrap_or(0);\n    try_dial(secret);\n    step(4);\n}",
    "solutionCode": "fn main() {\n    let mut dict = HashMap::new();\n    dict.insert(\"alpha\", 2);\n    dict.insert(\"beta\", 4);\n    dict.insert(\"gamma\", 9);\n    let secret = dict.get(\"alpha\").unwrap_or(0) + dict.get(\"beta\").unwrap_or(0);\n    try_dial(secret);\n    step(4);\n}",
    "quickChips": [
      {
        "label": "+ dict.get(\"beta\").unwrap_or(0)",
        "insert": " + dict.get(\"beta\").unwrap_or(0)"
      }
    ],
    "hints": [
      "dict の `\"alpha\"` が 2、`\"beta\"` が 4 だよ。足すと 6 になるね！",
      "secret の計算式に `+ dict.get(\"beta\").unwrap_or(0)` を足そう。",
      "let secret = dict.get(\"alpha\").unwrap_or(0) + dict.get(\"beta\").unwrap_or(0);"
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
      "dial": {
        "secret": 6
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
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "dialSolved": true,
      "requireAllSwitches": true
    },
    "parTicks": 7
  },
  {
    "displayId": "8-17",
    "id": "a2fc03f5-86ff-517d-8bf9-a0250c01b161",
    "index": 193,
    "chapter": 8,
    "chapterTitle": "第8章 一般的なコレクション",
    "title": "8-17. 複数のキーを辞書から引いて合算",
    "topicTag": "HashMap 複数キー参照",
    "kurumiIntro": "パンの注文リストを `HashMap` に保存したよ！`\"milk\"` と `\"honey\"` の注文数をそれぞれ引き出して合計し、金庫へチャージしよう。",
    "goalSummary": "\"milk\" と \"honey\" を合計して金庫⚡4＋ゴール (4, 1) へ",
    "bookSectionTitle": "8.3 ハッシュマップの値へのアクセス",
    "bookSummary": "複数のキーに対して `.get(key)` を使い、見つかった値同士を組み合わせて計算できます。",
    "bookKeyCode": "let a = map.get(\"milk\").unwrap_or(0);\nlet b = map.get(\"honey\").unwrap_or(0);",
    "starterCode": "fn main() {\n    let mut order = HashMap::new();\n    order.insert(\"milk\", 1);\n    order.insert(\"honey\", 3);\n    let a = order.get(\"milk\").unwrap_or(0);\n    // \"honey\" も get して a + b を使おう！\n    let b = order.get(\"missing\").unwrap_or(0);\n    add_vault(a + b);\n    step(a + b);\n}",
    "solutionCode": "fn main() {\n    let mut order = HashMap::new();\n    order.insert(\"milk\", 1);\n    order.insert(\"honey\", 3);\n    let a = order.get(\"milk\").unwrap_or(0);\n    let b = order.get(\"honey\").unwrap_or(0);\n    add_vault(a + b);\n    step(a + b);\n}",
    "quickChips": [
      {
        "label": "order.get(\"honey\")",
        "insert": "order.get(\"honey\")"
      }
    ],
    "hints": [
      "b が `order.get(\"missing\")` になっているから 0 になっちゃっているよ！",
      "`order.get(\"honey\")` に直せば 1 + 3 = 4 になるよ！",
      "let b = order.get(\"honey\").unwrap_or(0);"
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
    "displayId": "8-18",
    "id": "6090b7ba-d154-55d5-92ab-a275029fda2c",
    "index": 194,
    "chapter": 8,
    "chapterTitle": "第8章 一般的なコレクション",
    "title": "8-18. 古い値を元にした更新パターン",
    "topicTag": "HashMap の累積更新",
    "kurumiIntro": "すでに辞書に入っている値を取り出して、さらに `+ 2` してから上書き保存しよう！お店の在庫カウンターと同じ仕組みだね。",
    "goalSummary": "在庫を 1 → 3 に更新し、金庫⚡3＋ゴール (3, 1) へ",
    "bookSectionTitle": "8.3 古い値に基づいて値を更新する",
    "bookSummary": "辞書にある値を読み出し、加算した結果を同じキーに `.insert` し直すことでカウントアップができます。",
    "bookKeyCode": "let cur = map.get(\"gear\").unwrap_or(0);\nmap.insert(\"gear\", cur + 2);",
    "starterCode": "fn main() {\n    let mut stock = HashMap::new();\n    stock.insert(\"gear\", 1);\n    let cur = stock.get(\"gear\").unwrap_or(0);\n    // stock に cur + 2 を再登録しよう！\n    \n    let final_val = stock.get(\"gear\").unwrap_or(0);\n    add_vault(final_val);\n    step(final_val);\n}",
    "solutionCode": "fn main() {\n    let mut stock = HashMap::new();\n    stock.insert(\"gear\", 1);\n    let cur = stock.get(\"gear\").unwrap_or(0);\n    stock.insert(\"gear\", cur + 2);\n    let final_val = stock.get(\"gear\").unwrap_or(0);\n    add_vault(final_val);\n    step(final_val);\n}",
    "quickChips": [
      {
        "label": "stock.insert(\"gear\", cur + 2);",
        "insert": "stock.insert(\"gear\", cur + 2);\n    "
      }
    ],
    "hints": [
      "cur には元の在庫 1 が取り出されているよ！",
      "stock.insert(\"gear\", cur + 2); を書けば在庫が 3 になるね。",
      "stock.insert(\"gear\", cur + 2);"
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
    "displayId": "8-19",
    "id": "1af1c991-6dca-5b76-a75d-9cf99273c780",
    "index": 195,
    "chapter": 8,
    "chapterTitle": "第8章 一般的なコレクション",
    "stageKind": "puzzle",
    "title": "8-19. HashMap 在庫集計とコンベア出荷",
    "topicTag": "HashMap 更新ループ",
    "kurumiIntro": "出荷タグの配列から種類ごとに個数を数えて `HashMap` に積み上げよう！合計のエネルギーを金庫に入れたら、コンベアを使って最短でゴールへ向かおう。",
    "goalSummary": "Vec のタグを HashMap で集計し金庫⚡5＋6ティック以内にゴールへ",
    "bookSectionTitle": "8.3 リストの要素を HashMap でカウントする",
    "bookSummary": "配列の要素を1つずつ確認しながら `map.insert(k, cur + 1)` のように回数を積み上げて集計します。",
    "bookKeyCode": "let c = counts.get(k).unwrap_or(0); counts.insert(k, c + 1);",
    "starterCode": "fn main() {\n    let tags = vec![\"gear\", \"spring\", \"gear\", \"gear\", \"bolt\"];\n    let mut counts = HashMap::new();\n    for t in tags {\n        let prev = counts.get(t).unwrap_or(0);\n        counts.insert(t, prev + 1);\n    }\n    // \"gear\" と \"spring\" と \"bolt\" の数を足して金庫⚡5を入れよう！今は gear だけだよ\n    let total = counts.get(\"gear\").unwrap_or(0);\n    add_vault(total);\n    step(2);\n}",
    "solutionCode": "fn main() {\n    let tags = vec![\"gear\", \"spring\", \"gear\", \"gear\", \"bolt\"];\n    let mut counts = HashMap::new();\n    for t in tags {\n        let prev = counts.get(t).unwrap_or(0);\n        counts.insert(t, prev + 1);\n    }\n    let total = counts.get(\"gear\").unwrap_or(0)\n        + counts.get(\"spring\").unwrap_or(0)\n        + counts.get(\"bolt\").unwrap_or(0);\n    add_vault(total);\n    step(3);\n}",
    "quickChips": [
      {
        "label": "+ counts.get(\"spring\").unwrap_or(0) + counts.get(\"bolt\").unwrap_or(0)",
        "insert": " + counts.get(\"spring\").unwrap_or(0) + counts.get(\"bolt\").unwrap_or(0)"
      },
      {
        "label": "step(3);",
        "insert": "step(3);"
      }
    ],
    "hints": [
      "gear=3, spring=1, bolt=1 なので、3つを全部足せば合計⚡5になるよ！",
      "(1,1) と (3,1) が右向きコンベアだから、step(3) で (5,1) へ着けるよ！",
      "total に spring と bolt も足して、`step(3);` で進もう。"
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
      "maxTicks": 6
    },
    "parTicks": 6
  },
  {
    "displayId": "8-20",
    "id": "57500e74-d953-58fd-9776-75f205d6ebd6",
    "index": 196,
    "chapter": 8,
    "chapterTitle": "第8章 一般的なコレクション",
    "stageKind": "puzzle",
    "title": "8-20. HashMap でスイッチ座標とゲート連動計画",
    "topicTag": "HashMap ルート計画",
    "kurumiIntro": "区間ごとの方向転換とステップ数を `HashMap` 辞書から引いて、スイッチを順に2つ踏んでU字型の地下通路を攻略しよう！",
    "goalSummary": "辞書からルートを引いて全スイッチを踏み (0, 3) へ到達しよう",
    "bookSectionTitle": "8.3 HashMap から段階的パラメータを引き出す",
    "bookSummary": "文字列キー `\"leg1\"`, `\"leg2\"`, `\"leg3\"` に距離を登録して取り出すと、各フェーズの意味が明確になります。",
    "bookKeyCode": "step(map.get(\"leg1\").unwrap_or(0));",
    "starterCode": "fn main() {\n    let mut route = HashMap::new();\n    route.insert(\"east\", 4);\n    route.insert(\"south\", 2);\n    // \"west\" キーに 4 を登録して、最後の戻り区間に使おう！\n    step(route.get(\"east\").unwrap_or(0));\n    turn_right();\n    step(route.get(\"south\").unwrap_or(0));\n    turn_right();\n    step(route.get(\"west\").unwrap_or(0));\n}",
    "solutionCode": "fn main() {\n    let mut route = HashMap::new();\n    route.insert(\"east\", 4);\n    route.insert(\"south\", 2);\n    route.insert(\"west\", 4);\n    step(route.get(\"east\").unwrap_or(0));\n    turn_right();\n    step(route.get(\"south\").unwrap_or(0));\n    turn_right();\n    step(route.get(\"west\").unwrap_or(0));\n}",
    "quickChips": [
      {
        "label": "route.insert(\"west\", 4);",
        "insert": "route.insert(\"west\", 4);\n    "
      }
    ],
    "hints": [
      "上の廊下を東に 4 歩で (4,1) スイッチを踏み、右折して南へ 2 歩でゲート (4,2) を抜けるよ！",
      "最後は右折して西へ 4 歩戻るとスイッチ (2,3) を踏みながら (0,3) のゴールへ着くよ！",
      "route.insert(\"west\", 4);"
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
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "requireAllSwitches": true
    },
    "parTicks": 13
  },
  {
    "displayId": "8-21",
    "id": "80000176-efda-5bc0-8fe2-07fb165a0beb",
    "index": 197,
    "chapter": 8,
    "chapterTitle": "第8章 一般的なコレクション",
    "stageKind": "puzzle",
    "title": "8-21. Vec + String + HashMap コア納品",
    "topicTag": "コレクション3種連携",
    "kurumiIntro": "部品ごとのパワー表 `HashMap` から目標パワーを計算して金庫に入れ、コアの納品と合言葉ログも同時にクリアしよう！",
    "goalSummary": "コレクション3種を使い \"ORDER_OK\"・金庫⚡5・コア⚡4+納品を達成",
    "bookSectionTitle": "8.1〜8.3 3大コレクションの実践連携",
    "bookSummary": "リスト（`Vec`）、ラベル（`String`）、設定表（`HashMap`）を組み合わせることで複雑な業務処理が組めます。",
    "bookKeyCode": "let p = menu.get(k).unwrap_or(0);",
    "starterCode": "fn main() {\n    let mut menu = HashMap::new();\n    menu.insert(\"bread\", 2);\n    menu.insert(\"coffee\", 3);\n\n    let orders = vec![\"bread\", \"coffee\"];\n    let mut sum = 0;\n    for o in orders {\n        sum += menu.get(o).unwrap_or(0);\n    }\n    add_vault(sum);\n\n    let mut label = String::from(\"ORDER\");\n    // label に \"_OK\" を付けて println! しよう！\n    println!(\"{}\", label);\n\n    step(1);\n    let mut c = grab_core();\n    step(1);\n    boost(&mut c);\n    step(2);\n    deliver(c);\n}",
    "solutionCode": "fn main() {\n    let mut menu = HashMap::new();\n    menu.insert(\"bread\", 2);\n    menu.insert(\"coffee\", 3);\n\n    let orders = vec![\"bread\", \"coffee\"];\n    let mut sum = 0;\n    for o in orders {\n        sum += menu.get(o).unwrap_or(0);\n    }\n    add_vault(sum);\n\n    let mut label = String::from(\"ORDER\");\n    label.push_str(\"_OK\");\n    println!(\"{}\", label);\n\n    step(1);\n    let mut c = grab_core();\n    step(1);\n    boost(&mut c);\n    step(2);\n    deliver(c);\n}",
    "quickChips": [
      {
        "label": "label.push_str(\"_OK\");",
        "insert": "label.push_str(\"_OK\");\n    "
      }
    ],
    "hints": [
      "menu と orders で金庫⚡5が入るよ。コア操作も完璧！",
      "足りないのは `label.push_str(\"_OK\");` の 1 行だけだよ。",
      "label.push_str(\"_OK\");"
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
          "label": "注文コア"
        }
      ],
      "chargers": [
        {
          "x": 2,
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
      "minCorePower": 4,
      "vaultTarget": 5,
      "stdoutIncludes": [
        "ORDER_OK"
      ],
      "requireAllSwitches": true,
      "requireSpatialCoreRules": true
    },
    "parTicks": 10
  },
  {
    "displayId": "8-22",
    "id": "22c0ba77-9cf6-5294-a052-97e578c28c55",
    "index": 198,
    "chapter": 8,
    "chapterTitle": "第8章 一般的なコレクション",
    "stageKind": "challenge",
    "title": "8-22. コアと文字と辞書の大迷宮チャレンジ",
    "topicTag": "コレクション + スパーク迷宮",
    "kurumiIntro": "巡回スパークの先の迷路へ挑もう！`HashMap` の合言葉でダイヤルを解き、`String` に経過を記録しつつ、コアを拾って検査・強化・納品まで一気に決めよう！",
    "goalSummary": "ダイヤル解錠・\"COLLECTIONS_PRO\" 出力・コア⚡4+納品・全スイッチ・ゴール達成",
    "bookSectionTitle": "8.1〜8.3 コレクションの複合パズル",
    "bookSummary": "データ構造を使い分けながら、現実の空間ルールと危険物をすべてコントロールする総合演習です。",
    "bookKeyCode": "HashMap / String / Vec + 空間コア操作",
    "starterCode": "fn main() {\n    let mut book = HashMap::new();\n    book.insert(\"dial\", 5);\n    try_dial(book.get(\"dial\").unwrap_or(0));\n\n    let mut msg = String::from(\"COLLECTIONS\");\n    println!(\"{}\", msg);\n\n    // (1,1)コア→(2,1)検査→(3,1)スパーク注意！→(4,1)強化＆スイッチ→(5,1)納品\n    step(1);\n}",
    "solutionCode": "fn main() {\n    let mut book = HashMap::new();\n    book.insert(\"dial\", 5);\n    try_dial(book.get(\"dial\").unwrap_or(0));\n\n    let mut msg = String::from(\"COLLECTIONS\");\n     msg.push_str(\"_PRO\");\n    println!(\"{}\", msg);\n\n    while is_spark_ahead() { wait_tick(1); }\n    step(1);\n    let mut c = grab_core();\n    while is_spark_ahead() { wait_tick(1); }\n    step(1);\n    scan(&c);\n    while is_spark_ahead() { wait_tick(1); }\n    step(1);\n    while is_spark_ahead() { wait_tick(1); }\n    step(1);\n    boost(&mut c);\n    while is_spark_ahead() || !is_gate_open() { wait_tick(1); }\n    step(1);\n    deliver(c);\n}",
    "quickChips": [
      {
        "label": "msg.push_str(\"_PRO\");",
        "insert": "msg.push_str(\"_PRO\");\n    "
      },
      {
        "label": "while is_spark_ahead() { wait_tick(1); }",
        "insert": "while is_spark_ahead() { wait_tick(1); }\n    "
      }
    ],
    "hints": [
      "msg に `msg.push_str(\"_PRO\");` を足すのを忘れないでね！",
      "(1,1)でコア取得 → (2,1)で scan(&c) → (3,1)はスパーク横断なので `while is_spark_ahead() { wait_tick(1); }` で待ってから越えよう！",
      "(4,1)で boost(&mut c) しつつスイッチを踏み、(5,1) で deliver(c) すればコンプリートだよ！"
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
        "secret": 5
      },
      "cores": [
        {
          "id": "c1",
          "x": 1,
          "y": 1,
          "power": 2,
          "label": "総括コア"
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
          "x": 4,
          "y": 1
        }
      ],
      "switches": [
        {
          "x": 4,
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
      "reachGoal": true,
      "dialSolved": true,
      "deliverCores": 1,
      "minCorePower": 4,
      "scanCount": 1,
      "stdoutIncludes": [
        "COLLECTIONS_PRO"
      ],
      "requireAllSwitches": true,
      "requireSpatialCoreRules": true
    },
    "parTicks": 15
  },
  {
    "displayId": "8-23",
    "id": "3b8c3958-3f0b-5049-881c-0663cb6f152c",
    "index": 199,
    "chapter": 8,
    "chapterTitle": "第8章 一般的なコレクション",
    "stageKind": "challenge",
    "title": "8-23. コレクション総合パズル：迷宮制覇",
    "topicTag": "コレクションの最終チャレンジ",
    "kurumiIntro": "コレクションの総合チャレンジ！`Vec`・`String`・`HashMap`・`struct`・`enum`・`mod` すべての知識が詰まった大迷宮だよ。2つのスイッチ、スパーク、コンベア、金庫、コア納品をすべて制覇しよう！",
    "goalSummary": "知識を総動員！\"CHALLENGE_COMPLETE\"・金庫⚡7・コア⚡5+納品・全スイッチ・ゴール (5, 3) へ",
    "bookSectionTitle": "総まとめ — 設計図・列挙型・モジュール・コレクション",
    "bookSummary": "構造体や列挙型でプログラムの骨格を作り、モジュールで整理し、コレクションでデータを自在に扱う力が身に着きました！",
    "bookKeyCode": "struct + enum + mod + HashMap + Vec + String",
    "starterCode": "mod helper {\n    pub fn safe_move(n: i32) {\n        for _ in 0..n {\n            while is_spark_ahead() || !is_gate_open() { wait_tick(1); }\n            step();\n        }\n    }\n}\n\nuse helper::safe_move;\n\nfn main() {\n    let mut dict = HashMap::new();\n    dict.insert(\"part1\", 3);\n    dict.insert(\"part2\", 4);\n    let keys = vec![\"part1\", \"part2\"];\n    let mut vault_sum = 0;\n    for k in keys {\n        vault_sum += dict.get(k).unwrap_or(0);\n    }\n    add_vault(vault_sum);\n\n    println!(\"IN_PROGRESS\");\n\n    // ここから (1,1)コア→(2,1)強化＆スイッチ→(4,1)スイッチ→(5,1)右折→(5,3)納品台へ進もう！\n    safe_move(1);\n}",
    "solutionCode": "mod helper {\n    pub fn safe_move(n: i32) {\n        for _ in 0..n {\n            while is_spark_ahead() || !is_gate_open() { wait_tick(1); }\n            step();\n        }\n    }\n}\n\nuse helper::safe_move;\n\nfn main() {\n    let mut dict = HashMap::new();\n    dict.insert(\"part1\", 3);\n    dict.insert(\"part2\", 4);\n    let keys = vec![\"part1\", \"part2\"];\n    let mut vault_sum = 0;\n    for k in keys {\n        vault_sum += dict.get(k).unwrap_or(0);\n    }\n    add_vault(vault_sum);\n\n    let mut badge = String::from(\"CHALLENGE\");\n    badge.push_str(\"_COMPLETE\");\n    println!(\"{}\", badge);\n\n    safe_move(1);\n    let mut c = grab_core();\n    safe_move(1);\n    boost(&mut c);\n    safe_move(3);\n    turn_right();\n    safe_move(2);\n    deliver(c);\n}",
    "quickChips": [
      {
        "label": "let mut c = grab_core();",
        "insert": "let mut c = grab_core();\n    "
      },
      {
        "label": "boost(&mut c);",
        "insert": "boost(&mut c);\n    "
      },
      {
        "label": "safe_move(3);",
        "insert": "safe_move(3);\n    "
      },
      {
        "label": "deliver(c);",
        "insert": "deliver(c);"
      }
    ],
    "hints": [
      "(1,1)で `let mut c = grab_core();`、次の `(2,1)` が強化台兼スイッチ1だから `boost(&mut c);` しよう！",
      "その後 `safe_move(3);` で(3,1)のスパークを待って越え、(4,1)のスイッチ2を踏み、(5,1)へ！",
      "最後は `turn_right(); safe_move(2); deliver(c);` でゲート (5,2) を抜けて (5,3) に納品完了だよ！"
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
      "cores": [
        {
          "id": "c1",
          "x": 1,
          "y": 1,
          "power": 3,
          "label": "最終コア"
        }
      ],
      "chargers": [
        {
          "x": 2,
          "y": 1
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
      "deliveries": [
        {
          "x": 5,
          "y": 3
        }
      ],
      "vault": {
        "x": 0,
        "y": 0,
        "initial": 0,
        "target": 7
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
              "y": 1
            }
          ],
          "initialIndex": 0
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "deliverCores": 1,
      "minCorePower": 5,
      "vaultTarget": 7,
      "stdoutIncludes": [
        "CHALLENGE_COMPLETE"
      ],
      "requireAllSwitches": true,
      "requireSpatialCoreRules": true
    },
    "parTicks": 15
  },
  {
    "displayId": "8-24",
    "id": "5cc099ac-9b4a-5d44-95b0-608fb71d08f7",
    "index": 200,
    "chapter": 8,
    "chapterTitle": "第8章 一般的なコレクション",
    "title": "8-24. コレクション3種の総合課題",
    "topicTag": "第8章 総合実践",
    "kurumiIntro": "コレクションの総合課題！`Vec` のルート、`String` の合言葉、`HashMap` の金庫エネルギーを全部連携させて、L字の先のゴールへ着こう！",
    "goalSummary": "Vec・String・HashMap を使い \"CHALLENGE_COMPLETE\" 出力＋金庫⚡3＋ゴールへ",
    "bookSectionTitle": "第8章まとめ — Vec・String・HashMap",
    "bookSummary": "リストには `Vec`、可変テキストには `String`、キー検索には `HashMap` を使うのがRustコレクションの基本3点セットです。",
    "bookKeyCode": "let mut msg = String::from(\"CHALLENGE\");\nmsg.push_str(\"_COMPLETE\");",
    "starterCode": "fn main() {\n    let mut msg = String::from(\"CHALLENGE\");\n    msg.push_str(\"_COMPLETE\");\n    println!(\"{}\", msg);\n\n    let mut map = HashMap::new();\n    map.insert(\"vault\", 3);\n    add_vault(map.get(\"vault\").unwrap_or(0));\n\n    let moves = vec![3, 2];\n    step(moves[0]);\n    turn_right();\n    // moves[1] 歩だけ進んでゴール (3, 3) へ！\n    \n}",
    "solutionCode": "fn main() {\n    let mut msg = String::from(\"CHALLENGE\");\n    msg.push_str(\"_COMPLETE\");\n    println!(\"{}\", msg);\n\n    let mut map = HashMap::new();\n    map.insert(\"vault\", 3);\n    add_vault(map.get(\"vault\").unwrap_or(0));\n\n    let moves = vec![3, 2];\n    step(moves[0]);\n    turn_right();\n    step(moves[1]);\n}",
    "quickChips": [
      {
        "label": "step(moves[1]);",
        "insert": "step(moves[1]);"
      }
    ],
    "hints": [
      "msg と map と moves[0] までは準備完了！あとは最後の曲がった先の2歩だよ。",
      "最後の行に step(moves[1]); を書こう！",
      "turn_right();\nstep(moves[1]);"
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
      "vaultTarget": 3,
      "stdoutIncludes": [
        "CHALLENGE_COMPLETE"
      ]
    },
    "parTicks": 8
  }
];
