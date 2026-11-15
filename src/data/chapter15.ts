import { StageDefinition } from '../types/game';

export const CHAPTER_15_STAGES: StageDefinition[] = [
  {
    "displayId": "15-1",
    "id": "5745f0f2-7b62-5d82-a59e-c01c09ac7b17",
    "index": 305,
    "chapter": 15,
    "chapterTitle": "第15章 スマートポインタ",
    "title": "15-1. Box<T> でヒープ上のデータを持つ",
    "topicTag": "Box<T> / Deref",
    "kurumiIntro": "大きなデータや再帰的な歯車ツリーは `Box::new(値)` でヒープという広い棚に置いて、スマートポインターで指すことができるよ！",
    "goalSummary": "Box::new(3) を作って *boxed で中身を取り出しゴールへ",
    "bookSectionTitle": "15.1 ヒープ上のデータを指す Box<T>",
    "bookSummary": "`Box<T>` はデータをヒープ領域に確保するもっともシンプルなスマートポインターです。参照外し演算子 `*` で中身を取り出して使えます。",
    "bookKeyCode": "let b = Box::new(3);\nstep(*b);",
    "starterCode": "fn main() {\n    let b = Box::new(1);\n    // Box の中の値を 3 にして *b で進もう！\n    step(*b);\n}",
    "solutionCode": "fn main() {\n    let b = Box::new(3);\n    step(*b);\n}",
    "quickChips": [
      {
        "label": "Box::new(3)",
        "insert": "Box::new(3)"
      }
    ],
    "hints": [
      "Box::new(1) になっているから 1歩しか進まないよ。",
      "Box::new(3) に書き換えてみよう！",
      "let b = Box::new(3);\nstep(*b);"
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
    "displayId": "15-2",
    "id": "1f4e58fb-4cfe-5cd5-ba57-5aa128266ec5",
    "index": 306,
    "chapter": 15,
    "chapterTitle": "第15章 スマートポインタ",
    "stageKind": "puzzle",
    "title": "15-2. Box<Command> でコンベア越え歩数計算",
    "topicTag": "Box<i32> + コンベア",
    "kurumiIntro": "ヒープ上の `Box` 2つを組み合わせて目標エネルギーと歩数を決め、搬送ベルトの助けを借りてスイッチの先のゴール (5, 1) まで一っ飛びしよう！",
    "goalSummary": "Box 2つで金庫⚡5を作り、ベルトを利用してスイッチ先 (5, 1) へ",
    "bookSectionTitle": "15.1 Box<T> の計算結合と解放タイミング",
    "bookSummary": "複数の `Box<T>` から `*` で値を取り出して演算し、ベルトコンベアやスイッチを組み合わせた位置計算に活用します。",
    "bookKeyCode": "let total = *bx + *by;",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn main() {\n    let bx = Box::new(2);\n    let by = Box::new(3);\n    add_vault(*bx + *by);\n    step(*bx);\n    step(1);\n}",
    "quickChips": [
      {
        "label": "add_vault(*bx + *by);",
        "insert": "add_vault(*bx + *by);"
      }
    ],
    "hints": [
      "(1, 1) と (3, 1) の右向きコンベアに乗れば、合計3歩進めるだけでベルトの押し出し込みで (5, 1) へ着くよ。金庫目標は⚡5。",
      "`let bx = Box::new(2); let by = Box::new(3);` を作り、`add_vault(*bx + *by); step(*bx); step(1);` を実行しよう。",
      "fn main() {\n    let bx = Box::new(2);\n    let by = Box::new(3);\n    add_vault(*bx + *by);\n    step(*bx);\n    step(1);\n}"
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
      "switches": [
        {
          "x": 2,
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
            "x": 2,
            "y": 1
          }
        }
      ],
      "vault": {
        "x": 3,
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
    "parTicks": 5
  },
  {
    "displayId": "15-3",
    "id": "b901a04c-139c-52fd-9d85-acc046a59495",
    "index": 307,
    "chapter": 15,
    "chapterTitle": "第15章 スマートポインタ",
    "title": "15-3. Deref 参照外しで Box の中身を読む",
    "topicTag": "*b 参照外し / 計算",
    "kurumiIntro": "2つの `Box<i32>` の中身をそれぞれ `*`（参照外し）で取り出して足し合わせよう！金庫のエネルギーと歩数をどちらも満たしてね。",
    "goalSummary": "2つの Box の合計 4 で金庫⚡4＋ゴール (4, 1) へ",
    "bookSectionTitle": "15.2 Deref トレイトでスマートポインタを普通の参照のように扱う",
    "bookSummary": "`Deref` トレイトのおかげで、`Box<T>` や `Rc<T>` に `*ポインタ` 演算子を使って、普通の参照とまったく同じ感覚で値を取り出せます。",
    "bookKeyCode": "let sum = *b1 + *b2;",
    "starterCode": "fn main() {\n    let b1 = Box::new(1);\n    let b2 = Box::new(3);\n    // *b1 + *b2 で中身を足し算しよう！\n    let total = *b1;\n    add_vault(total);\n    step(total);\n}",
    "solutionCode": "fn main() {\n    let b1 = Box::new(1);\n    let b2 = Box::new(3);\n    let total = *b1 + *b2;\n    add_vault(total);\n    step(total);\n}",
    "quickChips": [
      {
        "label": "*b1 + *b2",
        "insert": "*b1 + *b2"
      }
    ],
    "hints": [
      "今は total が *b1（1）だけになっているよ！",
      "let total = *b1 + *b2; にすると 1 + 3 = 4 になるよ。",
      "let total = *b1 + *b2;"
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
    "displayId": "15-4",
    "id": "a5eb96f6-5132-5eff-afab-00ba03aaa75f",
    "index": 308,
    "chapter": 15,
    "chapterTitle": "第15章 スマートポインタ",
    "title": "15-4. Box の中身に構造体をしまってL字移動",
    "topicTag": "Box<Struct>",
    "kurumiIntro": "大きな構造体 `PathData { dx, dy }` を `Box::new(...)` に入れておけば、受け渡ししても軽くて安全！中身を `(*b).dx` で取り出そう。",
    "goalSummary": "Box<PathData> から dx, dy を読み取り L字ゴール (3, 2) へ",
    "bookSectionTitle": "15.1 & 15.2 大きなデータを Box で管理する",
    "bookSummary": "大きな構造体をヒープ上の `Box<Struct>` に置くと、ポインタサイズ（数バイト）のまま扱えてスタック消費を抑えられます。",
    "bookKeyCode": "let boxed = Box::new(PathData { dx: 3, dy: 1 });",
    "starterCode": "struct PathData {\n    dx: i32,\n    dy: i32,\n}\n\nfn main() {\n    let boxed = Box::new(PathData { dx: 3, dy: 1 });\n    let data = *boxed;\n    step(data.dx);\n    turn_right();\n    // あと data.dy 歩進んで (3, 2) へ！\n    \n}",
    "solutionCode": "struct PathData {\n    dx: i32,\n    dy: i32,\n}\n\nfn main() {\n    let boxed = Box::new(PathData { dx: 3, dy: 1 });\n    let data = *boxed;\n    step(data.dx);\n    turn_right();\n    step(data.dy);\n}",
    "quickChips": [
      {
        "label": "step(data.dy);",
        "insert": "step(data.dy);"
      }
    ],
    "hints": [
      "data = *boxed で Box の中身 PathData を取り出せたよ！",
      "最後に step(data.dy); を追加しよう。",
      "turn_right();\nstep(data.dy);"
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
      "reachGoal": true
    },
    "parTicks": 5
  },
  {
    "displayId": "15-5",
    "id": "6df8d4cc-5e97-58e3-b339-01c6055e64de",
    "index": 309,
    "chapter": 15,
    "chapterTitle": "第15章 スマートポインタ",
    "title": "15-5. Drop トレイトと drop() による明示解放",
    "topicTag": "Drop / drop(x)",
    "kurumiIntro": "スマートポインターは不要になると自動でお片付け（`Drop`）されるよ！途中で早く手放したいときは `drop(箱);` を呼ぶんだ。解放した後に二重使用しないよう注意してね。",
    "goalSummary": "Box を先にお片付け(drop)しつつ \"DROPPED\" を出してゴールへ",
    "bookSectionTitle": "15.3 Drop トレイトで片付け時のコードを実行する",
    "bookSummary": "Rustではスコープを抜けると自動的に `drop` が呼ばれます。また `std::mem::drop(x)` 関数を使えば、スコープの途中でも所有権を手放して解放できます。",
    "bookKeyCode": "let b = Box::new(3);\nlet val = *b;\ndrop(b);\nprintln!(\"DROPPED\");",
    "starterCode": "fn main() {\n    let b = Box::new(3);\n    let n = *b;\n    drop(b);\n    // drop(b) のあとに *b を読もうとすると Move済みエラーになるよ！\n    // かわりに n を使って進み、\"DROPPED\" を表示しよう\n    println!(\"DROPPED\");\n    step(*b);\n}",
    "solutionCode": "fn main() {\n    let b = Box::new(3);\n    let n = *b;\n    drop(b);\n    println!(\"DROPPED\");\n    step(n);\n}",
    "quickChips": [
      {
        "label": "step(n);",
        "insert": "step(n);"
      }
    ],
    "hints": [
      "試しに実行すると「所有権が移動（Move）済みの変数 b は使えません」と教えてくれるよ！",
      "drop(b) のあとでは `step(*b);` の代わりに事前コピーしておいた `step(n);` を使おう！",
      "println!(\"DROPPED\");\nstep(n);"
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
        "DROPPED"
      ]
    },
    "parTicks": 4
  },
  {
    "displayId": "15-6",
    "id": "007f4c05-dd69-51b7-b3ee-e80303a04656",
    "index": 310,
    "chapter": 15,
    "chapterTitle": "第15章 スマートポインタ",
    "stageKind": "puzzle",
    "title": "15-6. drop(box) 後の安全な値再利用とダイヤル",
    "topicTag": "drop() + ダイヤル",
    "kurumiIntro": "大きな `Box` は先に `drop()` でお片付けしつつ、取り出しておいた値で秘密ダイヤルを解錠し、L字のゴールへ進もう！",
    "goalSummary": "Box を drop してから取り出した値で \"RELEASED\" 出力・ダイヤル(7)・金庫⚡7・(3, 3) へ",
    "bookSectionTitle": "15.3 早期解放 drop() と値の退避",
    "bookSummary": "ヒープ領域を `drop(box)` で早く解放したいときは、必要なプリミティブ値だけ先に変数へコピーしておけばコンパイルエラーになりません。",
    "bookKeyCode": "let val = *b;\ndrop(b);\ntry_dial(val);",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn main() {\n    let b = Box::new(7);\n    let val = *b;\n    drop(b);\n    try_dial(val);\n    add_vault(val);\n    println!(\"RELEASED\");\n    step(3);\n    turn_right();\n    step(2);\n}",
    "quickChips": [
      {
        "label": "try_dial(val);",
        "insert": "try_dial(val);"
      },
      {
        "label": "add_vault(val);",
        "insert": "add_vault(val);"
      }
    ],
    "hints": [
      "`Box::new(7)` を `drop` する前に中身を `val` にコピーしておき、`\"RELEASED\"` 出力・ダイヤル(7)・金庫⚡7を済ませて東3歩→右折→南2歩で (3, 3) へ。",
      "`let b = Box::new(7); let val = *b; drop(b);` のあと `try_dial(val); add_vault(val); println!(\"RELEASED\"); step(3); turn_right(); step(2);` を実行しよう。",
      "fn main() {\n    let b = Box::new(7);\n    let val = *b;\n    drop(b);\n    try_dial(val);\n    add_vault(val);\n    println!(\"RELEASED\");\n    step(3);\n    turn_right();\n    step(2);\n}"
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
        "x": 1,
        "y": 0,
        "secret": 7
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
      "dialSolved": true,
      "vaultTarget": 7,
      "stdoutIncludes": [
        "RELEASED"
      ]
    },
    "parTicks": 10
  },
  {
    "displayId": "15-7",
    "id": "bb17e121-9dc5-594a-ace4-b233fef8e9d4",
    "index": 311,
    "chapter": 15,
    "chapterTitle": "第15章 スマートポインタ",
    "title": "15-7. Rc<T> で複数の所有者を作る",
    "topicTag": "Rc<T> / Rc::clone",
    "kurumiIntro": "1つの値を複数の場所で同時に所有したいときは参照カウント `Rc::new` と `Rc::clone(&rc)` を使うよ！参照カウントが増える様子をモニターで見てね！",
    "goalSummary": "Rc::clone で共有して金庫⚡3とゴール (3, 1) を達成しよう",
    "bookSectionTitle": "15.4 Rc<T> 参照カウント方式スマートポインター",
    "bookSummary": "`Rc<T>`（Reference Counting）は「何箇所から所有されているか」を数え、みんなが使い終わったときにだけ安全に片付けます（シングルスレッド用）。",
    "bookKeyCode": "let a = Rc::new(3);\nlet b = Rc::clone(&a);",
    "starterCode": "fn main() {\n    let master = Rc::new(3);\n    // Rc::clone(&master) で2つめの所有者 share を作ろう！\n    let share = Rc::clone(&master);\n    add_vault(*master);\n    // share の値を使ってゴールへ進もう\n    \n}",
    "solutionCode": "fn main() {\n    let master = Rc::new(3);\n    let share = Rc::clone(&master);\n    add_vault(*master);\n    step(*share);\n}",
    "quickChips": [
      {
        "label": "step(*share);",
        "insert": "step(*share);\n    "
      }
    ],
    "hints": [
      "master と share が同じ 3 を共有しているよ！",
      "最後の行に `step(*share);` を書いてみよう。",
      "add_vault(*master);\nstep(*share);"
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
    "displayId": "15-8",
    "id": "3e9730a7-1de7-5c4c-a484-74c7ebfb0bf6",
    "index": 312,
    "chapter": 15,
    "chapterTitle": "第15章 スマートポインタ",
    "stageKind": "puzzle",
    "title": "15-8. Rc 共有データで2箇所のスイッチ折り返し",
    "topicTag": "Rc::clone + U字スイッチ",
    "kurumiIntro": "共有歩数 `Rc::new(2)` を `Rc::clone` で複製しながら渡して、U字コース上の2つのスイッチを踏んでゴールへ戻ってこよう！",
    "goalSummary": "Rc::clone で移動パラメータを共有し全スイッチ＋(1, 3) へ",
    "bookSectionTitle": "15.4 同じ設定値を複数の移動フェーズへ渡す",
    "bookSummary": "値を関数へ渡すたびに所有権が移動しても、`Rc::clone(&rc)` を渡せば呼び出し元に所有権を残したまま何度でも共有できます。",
    "bookKeyCode": "go(Rc::clone(&d));\nturn_right();\ngo(Rc::clone(&d));",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn go(d: Rc<i32>) {\n    step(*d);\n}\n\nfn main() {\n    let unit = Rc::new(2);\n    go(Rc::clone(&unit));\n    step(1);\n    turn_right();\n    go(Rc::clone(&unit));\n    turn_right();\n    go(unit);\n}",
    "quickChips": [
      {
        "label": "go(Rc::clone(&unit));",
        "insert": "go(Rc::clone(&unit));"
      }
    ],
    "hints": [
      "`Rc::new(2)` を関数へ何度も渡すときは、`Rc::clone(&unit)` で参照カウントを増やして所有権を残そう。U字コースで2つのスイッチを踏んで (1, 3) へ。",
      "`fn go(d: Rc<i32>) { step(*d); }` を用意し、`go(Rc::clone(&unit)); step(1); turn_right(); go(Rc::clone(&unit)); turn_right(); go(unit);` の順に進もう。",
      "fn go(d: Rc<i32>) {\n    step(*d);\n}\n\nfn main() {\n    let unit = Rc::new(2);\n    go(Rc::clone(&unit));\n    step(1);\n    turn_right();\n    go(Rc::clone(&unit));\n    turn_right();\n    go(unit);\n}"
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
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "requireAllSwitches": true
    },
    "parTicks": 10
  },
  {
    "displayId": "15-9",
    "id": "89fad8cc-d58d-5e7b-b0d8-b9c93b216b4f",
    "index": 313,
    "chapter": 15,
    "chapterTitle": "第15章 スマートポインタ",
    "title": "15-9. 3箇所に共有を広げる Rc::clone",
    "topicTag": "Rc::clone × 3",
    "kurumiIntro": "共有の輪を広げよう！1つの `Rc::new(2)` を `owner_a`・`owner_b`・`owner_c` の3つで共有して、合計⚡6と4歩の移動に使ってみよう。",
    "goalSummary": "3つの Rc 所有者を使って金庫⚡6＋ゴール (4, 1) へ",
    "bookSectionTitle": "15.4 参照カウントの増加と共有",
    "bookSummary": "`Rc::clone` はデータ本体を丸ごとコピーするのではなく、参照カウントを +1 増やすだけなので非常に高速です。",
    "bookKeyCode": "let b = Rc::clone(&a);\nlet c = Rc::clone(&a);",
    "starterCode": "fn main() {\n    let a = Rc::new(2);\n    let b = Rc::clone(&a);\n    // 3つ目の所有者 c も Rc::clone(&a) で作ろう！\n    let c = Rc::clone(&a);\n    add_vault(*a + *b + *c);\n    // *a + *b 歩進んで (4, 1) へ着こう！\n    \n}",
    "solutionCode": "fn main() {\n    let a = Rc::new(2);\n    let b = Rc::clone(&a);\n    let c = Rc::clone(&a);\n    add_vault(*a + *b + *c);\n    step(*a + *b);\n}",
    "quickChips": [
      {
        "label": "step(*a + *b);",
        "insert": "step(*a + *b);"
      }
    ],
    "hints": [
      "*a, *b, *c はそれぞれ 2 だよ！合計 6 が金庫に入って、あとは東へ 4歩進めばゴール。",
      "最後の行に `step(*a + *b);` を書こう！",
      "add_vault(*a + *b + *c);\nstep(*a + *b);"
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
        "target": 6
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "vaultTarget": 6
    },
    "parTicks": 5
  },
  {
    "displayId": "15-10",
    "id": "e2eb4f07-4104-50a4-82ba-f7f105174fe4",
    "index": 314,
    "chapter": 15,
    "chapterTitle": "第15章 スマートポインタ",
    "title": "15-10. 複数枝で同じ Rc データを共有して歩く",
    "topicTag": "Rc データの再利用",
    "kurumiIntro": "同じ設計図 `Rc<i32>` を、横移動の部品と縦移動の部品の両方に渡してL字ルートを走ってみよう！所有権が移動しても元の側でもう1回使えるのが `Rc` の強みだよ。",
    "goalSummary": "Rc::clone で共有した歩数を使って (3, 3) のゴールへ",
    "bookSectionTitle": "15.4 グラフ・共有構造での Rc<T>",
    "bookSummary": "複数の箇所から同じデータを所有する必要があるとき、値を複製せずに安全に共有を保てるのが `Rc<T>` です。",
    "bookKeyCode": "let p1 = Rc::clone(&shared);\nlet p2 = Rc::clone(&shared);",
    "starterCode": "fn walk_side(dist: Rc<i32>) {\n    step(*dist);\n}\n\nfn main() {\n    let unit = Rc::new(3);\n    // ↓ unit をそのまま渡すと Move して2回目に使えないよ！Rc::clone(&unit) にしよう\n    walk_side(unit);\n    turn_right();\n    // 最後に残った unit から 1 減らした 2 歩分を歩こう\n    let y_unit = Rc::new(*unit - 1);\n    walk_side(y_unit);\n}",
    "solutionCode": "fn walk_side(dist: Rc<i32>) {\n    step(*dist);\n}\n\nfn main() {\n    let unit = Rc::new(3);\n    walk_side(Rc::clone(&unit));\n    turn_right();\n    let y_unit = Rc::new(*unit - 1);\n    walk_side(y_unit);\n}",
    "quickChips": [
      {
        "label": "Rc::clone(&unit)",
        "insert": "Rc::clone(&unit)"
      }
    ],
    "hints": [
      "今は walk_side(unit); で所有権が移動しているため、あとから *unit を読もうとすると E0382 エラーが出るよ！",
      "`walk_side(unit);` を `walk_side(Rc::clone(&unit));` に直すと、元の unit を手元に残したまま渡せるよ！",
      "walk_side(Rc::clone(&unit));"
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
    "displayId": "15-11",
    "id": "bda5e013-6d70-5ae8-a991-b576407822e8",
    "index": 315,
    "chapter": 15,
    "chapterTitle": "第15章 スマートポインタ",
    "stageKind": "puzzle",
    "title": "15-11. 3段ベルト＋Rc::clone パイプラインテスト",
    "topicTag": "Rc + テスト + 3連コンベア",
    "kurumiIntro": "共有値 `Rc` の計算を `#[test]` で確認したら、3つの搬送コンベアでジグザグ・直線加速して一発でゴール (5, 2) に乗り込もう！",
    "goalSummary": "テスト合格＋Rc 計算で金庫⚡6＋コンベア加速ゴール (5, 2) へ",
    "bookSectionTitle": "15.4 スマートポインタ計算のユニットテスト検証",
    "bookSummary": "`Rc<i32>` を使った補助関数も通常の関数と同じように `#[test]` で事前に検証できます。",
    "bookKeyCode": "let r = Rc::new(3);\nlet r2 = Rc::clone(&r);",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn double_rc(v: Rc<i32>) -> i32 {\n    *v * 2\n}\n\n#[test]\nfn t_rc() {\n    assert_eq!(double_rc(Rc::new(3)), 6);\n}\n\nfn main() {\n    let base = Rc::new(3);\n    let bonus = double_rc(Rc::clone(&base));\n    add_vault(bonus);\n    step(1);\n    turn_right();\n    step(1);\n    turn_left();\n    step(1);\n}",
    "quickChips": [
      {
        "label": "*v * 2",
        "insert": "*v * 2"
      }
    ],
    "hints": [
      "金庫目標はちょうど⚡6！`#[test]` で `Rc<i32>` を2倍にする関数を検証し、ジグザグの3段コンベア（右1→右折1→左折1）で (5, 2) へ乗ろう。",
      "`fn double_rc(v: Rc<i32>) -> i32 { *v * 2 }` と `#[test]` を作り、`add_vault(double_rc(Rc::clone(&base)));` のあと `step(1); turn_right(); step(1); turn_left(); step(1);` で進もう。",
      "fn double_rc(v: Rc<i32>) -> i32 {\n    *v * 2\n}\n\n#[test]\nfn t_rc() {\n    assert_eq!(double_rc(Rc::new(3)), 6);\n}\n\nfn main() {\n    let base = Rc::new(3);\n    let bonus = double_rc(Rc::clone(&base));\n    add_vault(bonus);\n    step(1);\n    turn_right();\n    step(1);\n    turn_left();\n    step(1);\n}"
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
          "x": 5,
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
        "y": 2
      },
      "conveyors": [
        {
          "x": 1,
          "y": 1,
          "dir": 0
        },
        {
          "x": 2,
          "y": 2,
          "dir": 0
        },
        {
          "x": 4,
          "y": 2,
          "dir": 0
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
      "vaultExact": 6,
      "testsRequired": 1
    },
    "parTicks": 7
  },
  {
    "displayId": "15-12",
    "id": "fb8c2141-1beb-5df9-a172-a207752b4715",
    "index": 316,
    "chapter": 15,
    "chapterTitle": "第15章 スマートポインタ",
    "title": "15-12. Rc<EnergyCore> 風の共有とコア納品パズル",
    "topicTag": "Rc + スイッチゲート実践",
    "kurumiIntro": "共有エネルギー値 `Rc<i32>` を金庫と移動歩数の両方で参照しながら、スイッチを踏んでコアを納品しよう！",
    "goalSummary": "Rc::clone を使って金庫⚡4・コア納品・スイッチ突破を達成",
    "bookSectionTitle": "15.4 共有読み取りデータの統合実践",
    "bookSummary": "不変な共有値を `Rc<T>` で配ることで、誰がいつ読み取っても安全に同じ参照値を使えます。",
    "bookKeyCode": "let shared = Rc::new(4);\nlet copy = Rc::clone(&shared);",
    "starterCode": "fn main() {\n    let dist = Rc::new(4);\n    let vault_ref = Rc::clone(&dist);\n    // まず金庫に *vault_ref を預けて、コアを拾おう！\n    add_vault(*vault_ref);\n    let core = grab_core();\n    // あと *dist 歩進んで core を納品しよう！\n    \n}",
    "solutionCode": "fn main() {\n    let dist = Rc::new(4);\n    let vault_ref = Rc::clone(&dist);\n    add_vault(*vault_ref);\n    let core = grab_core();\n    step(*dist);\n    deliver(core);\n}",
    "quickChips": [
      {
        "label": "step(*dist);",
        "insert": "step(*dist);\n    "
      },
      {
        "label": "deliver(core);",
        "insert": "deliver(core);\n    "
      }
    ],
    "hints": [
      "スイッチ(2, 1)を踏むと連動ゲート(3, 1)が開くから、*dist (4歩) で一直線にゴール(4, 1)へ着けるよ！",
      "step(*dist); と deliver(core); を書き足そう。",
      "step(*dist);\ndeliver(core);"
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
          "x": 0,
          "y": 1,
          "power": 2,
          "label": "共有コア"
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
        "target": 4
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "deliverCores": 1,
      "vaultTarget": 4
    },
    "parTicks": 7
  },
  {
    "displayId": "15-13",
    "id": "e3cedf2e-58b8-55c4-ab2d-4c8bd0f5fee6",
    "index": 317,
    "chapter": 15,
    "chapterTitle": "第15章 スマートポインタ",
    "stageKind": "puzzle",
    "title": "15-13. drop() で古いゲート指令を破棄しダイヤル解除",
    "topicTag": "drop + Rc + ダイヤル",
    "kurumiIntro": "テスト用の仮データ `temp_box` は `drop()` で破棄し、本番共有データ `Rc` から読み取った値で秘密ダイヤルを解除しよう！",
    "goalSummary": "仮 Box を drop し、Rc の値(8)でダイヤル解除＋コンベア突破",
    "bookSectionTitle": "15.3 & 15.4 寿命の分離と共有参照",
    "bookSummary": "一時的なデータだけ明示的に `drop` し、生き残らせる共有データは `Rc` で安全に保持する設計です。",
    "bookKeyCode": "drop(temp);\nlet ok = Rc::clone(&real_code);",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn main() {\n    let temp = Box::new(2);\n    let real_code = Rc::new(8);\n    let shared = Rc::clone(&real_code);\n    drop(temp);\n    try_dial(*shared);\n    add_vault(*shared);\n    step(2);\n    step(1);\n}",
    "quickChips": [
      {
        "label": "try_dial(*shared);",
        "insert": "try_dial(*shared);"
      }
    ],
    "hints": [
      "仮の `Box` は `drop()` で破棄し、`Rc::new(8)` を `Rc::clone` で共有してダイヤル(8)・金庫⚡8をクリアしよう。ベルト経由で計3歩進めばゴールへ届くよ。",
      "`let temp = Box::new(2); let real_code = Rc::new(8); let shared = Rc::clone(&real_code); drop(temp);` のあと `try_dial(*shared); add_vault(*shared); step(2); step(1);` を実行しよう。",
      "fn main() {\n    let temp = Box::new(2);\n    let real_code = Rc::new(8);\n    let shared = Rc::clone(&real_code);\n    drop(temp);\n    try_dial(*shared);\n    add_vault(*shared);\n    step(2);\n    step(1);\n}"
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
      "dial": {
        "x": 2,
        "y": 0,
        "secret": 8
      },
      "vault": {
        "x": 3,
        "y": 0,
        "initial": 0,
        "target": 8
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "dialSolved": true,
      "vaultTarget": 8
    },
    "parTicks": 6
  },
  {
    "displayId": "15-14",
    "id": "e54dc38b-c506-5de5-b893-6ffe329eb759",
    "index": 318,
    "chapter": 15,
    "chapterTitle": "第15章 スマートポインタ",
    "title": "15-14. RefCell<T> と内部可変性パターン",
    "topicTag": "RefCell<T> / 実行時借用",
    "kurumiIntro": "`RefCell` を使うと不変な外見のまま中身を書き換えられるけど、`borrow_mut()` を2回同時に呼ぶと実行時にパニックしちゃうよ！安全に直してね。",
    "goalSummary": "RefCell の二重借用パニックを直してゴール (3, 1) へ",
    "bookSectionTitle": "15.5 RefCell<T> と内部可変性パターン",
    "bookSummary": "`RefCell<T>` は借用ルールを「コンパイル時」ではなく「実行時」に検査します。同じタイミングで `borrow_mut()` を2つ作るとパニックして安全を守ります。",
    "bookKeyCode": "let cell = RefCell::new(3);\nlet v = cell.borrow();",
    "starterCode": "fn main() {\n    let cell = RefCell::new(3);\n    let mut r1 = cell.borrow_mut();\n    // ↓ 2回目の borrow_mut() を同時に呼ぶと実行時パニックするよ！\n    let mut r2 = cell.borrow_mut();\n    step(*r1);\n}",
    "solutionCode": "fn main() {\n    let cell = RefCell::new(3);\n    let mut r1 = cell.borrow_mut();\n    step(*r1);\n}",
    "quickChips": [
      {
        "label": "step(*r1);",
        "insert": "step(*r1);"
      }
    ],
    "hints": [
      "まずはそのまま実行して RefCell の実行時パニックを体験してみよう！",
      "重複している `let mut r2 = cell.borrow_mut();` の行を消せば安全に動くよ。",
      "let cell = RefCell::new(3);\nlet mut r1 = cell.borrow_mut();\nstep(*r1);"
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
    "displayId": "15-15",
    "id": "4f384d79-8afd-55ea-b24f-1048346a3680",
    "index": 319,
    "chapter": 15,
    "chapterTitle": "第15章 スマートポインタ",
    "title": "15-15. スコープを分けて RefCell の中身を書き換える",
    "topicTag": "RefCell スコープ分離",
    "kurumiIntro": "`borrow_mut()` で書き換える処理を `{ ... }` ブロックで囲って先に終わらせてしまえば、そのあと安全に `cell.borrow()` で読み取れるよ！",
    "goalSummary": "スコープ内で RefCell を +2 増やし、金庫⚡3＋ゴールへ",
    "bookSectionTitle": "15.5 borrow_mut() とスコープによる借用解放",
    "bookSummary": "可変借用のガードがスコープ `{ ... }` を抜けてドロップされた後なら、次の `borrow()` や `borrow_mut()` をパニックなしで安全に呼べます。",
    "bookKeyCode": "{\n    let mut r = cell.borrow_mut();\n    *r += 2;\n}\nlet v = cell.borrow();",
    "starterCode": "fn main() {\n    let cell = RefCell::new(1);\n    {\n        let mut r = cell.borrow_mut();\n        // 中身を +2 増やして 3 にしよう！\n        *r += 0;\n    }\n    // スコープを抜けたので borrow() してもパニックしないよ！\n    let val = cell.borrow();\n    add_vault(*val);\n    step(*val);\n}",
    "solutionCode": "fn main() {\n    let cell = RefCell::new(1);\n    {\n        let mut r = cell.borrow_mut();\n        *r += 2;\n    }\n    let val = cell.borrow();\n    add_vault(*val);\n    step(*val);\n}",
    "quickChips": [
      {
        "label": "*r += 2;",
        "insert": "*r += 2;"
      }
    ],
    "hints": [
      "cell の初期値は 1 だよ。金庫目標も歩数も 3 だから +2 増やしたいね！",
      "*r += 0; を *r += 2; に書き換えよう。",
      "*r += 2;"
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
    "displayId": "15-16",
    "id": "ffd83129-76d5-5bed-bef0-56d280dbddab",
    "index": 320,
    "chapter": 15,
    "chapterTitle": "第15章 スマートポインタ",
    "title": "15-16. borrow_mut() と borrow() がぶつからない順番",
    "topicTag": "borrow_mut 順序管理",
    "kurumiIntro": "今は `borrow_mut()` を握りっぱなしのまま `cell.borrow()` を呼んでパニックしちゃってるよ！`{ ... }` で囲って順番を守ろう。",
    "goalSummary": "パニックを直して RefCell を 4 に更新し、ゴール (4, 1) へ",
    "bookSectionTitle": "15.5 実行時借用ルール（1つの可変借用 OR 複数の不変借用）",
    "bookSummary": "不変の `borrow()` と可変の `borrow_mut()` は同時には存在できません。短いブロックで可変借用を終わらせるのが鉄則です。",
    "bookKeyCode": "{ let mut w = c.borrow_mut(); *w = 4; }\nlet r = c.borrow();",
    "starterCode": "fn main() {\n    let c = RefCell::new(1);\n    let mut w = c.borrow_mut();\n    *w = 4;\n    // ↓ w が生きているまま c.borrow() を呼ぶとパニックするよ！\n    // *w = 4; の周りを { ... } ブロックで囲もう！\n    let r = c.borrow();\n    step(*r);\n}",
    "solutionCode": "fn main() {\n    let c = RefCell::new(1);\n    {\n        let mut w = c.borrow_mut();\n        *w = 4;\n    }\n    let r = c.borrow();\n    step(*r);\n}",
    "quickChips": [
      {
        "label": "{ let mut w = c.borrow_mut(); *w = 4; }",
        "insert": "{\n        let mut w = c.borrow_mut();\n        *w = 4;\n    }"
      }
    ],
    "hints": [
      "このまま実行すると「RefCell が可変借用中のまま borrow() を呼んだため実行時パニック」と出るよ！",
      "let mut w = c.borrow_mut(); と *w = 4; を `{ ... }` ブロックで囲もう。",
      "{\n    let mut w = c.borrow_mut();\n    *w = 4;\n}\nlet r = c.borrow();"
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
    "displayId": "15-17",
    "id": "b3705f70-1c20-5a33-9028-eb14333e6ae3",
    "index": 321,
    "chapter": 15,
    "chapterTitle": "第15章 スマートポインタ",
    "stageKind": "puzzle",
    "title": "15-17. RefCell 二重可変借用パニックの解消とスパーク横断",
    "topicTag": "RefCell パニック回避 + スパーク",
    "kurumiIntro": "`RefCell` の可変借用スコープを短く保って実行時パニックを避けつつ、前方のスパークを待ちながら金庫⚡5＋ゴールへ進もう！",
    "goalSummary": "RefCell パニックを解消しスパーク(2, 1)を避けて金庫⚡5＋(4, 1)へ",
    "bookSectionTitle": "15.5 実行時借用ルールと安全な制御フロー",
    "bookSummary": "`borrow_mut()` の寿命を短く終えてから次の `borrow()` を呼ぶことで、実行時パニックを確実に回避します。",
    "bookKeyCode": "{ let mut w = rc.borrow_mut(); *w += 2; } let r = rc.borrow();",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn main() {\n    let cell = RefCell::new(3);\n    {\n        let mut r1 = cell.borrow_mut();\n        *r1 += 2;\n    }\n    let val = cell.borrow();\n    add_vault(*val);\n    for _ in 0..4 {\n        while is_spark_ahead() {\n            wait_tick(1);\n        }\n        step();\n    }\n}",
    "quickChips": [
      {
        "label": "{ let mut r1 = cell.borrow_mut(); *r1 += 2; }",
        "insert": "{\n        let mut r1 = cell.borrow_mut();\n        *r1 += 2;\n    }"
      }
    ],
    "hints": [
      "`RefCell` は `borrow_mut()` のガードが生きている間に再度 `borrow()` するとパニックするよ。ブロック `{ ... }` で先に解放し、スパーク(2, 1)を待ちながら4歩進もう。",
      "`let cell = RefCell::new(3); { let mut r1 = cell.borrow_mut(); *r1 += 2; } add_vault(*cell.borrow());` のあと `for _ in 0..4 { while is_spark_ahead() { wait_tick(1); } step(); }` を実行しよう。",
      "fn main() {\n    let cell = RefCell::new(3);\n    {\n        let mut r1 = cell.borrow_mut();\n        *r1 += 2;\n    }\n    let val = cell.borrow();\n    add_vault(*val);\n    for _ in 0..4 {\n        while is_spark_ahead() {\n            wait_tick(1);\n        }\n        step();\n    }\n}"
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
        "x": 4,
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
    "parTicks": 8
  },
  {
    "displayId": "15-18",
    "id": "ee0aadfe-6a0f-57db-8537-873e31cd4349",
    "index": 322,
    "chapter": 15,
    "chapterTitle": "第15章 スマートポインタ",
    "stageKind": "puzzle",
    "title": "15-18. Rc<RefCell<i32>> パターンで複数箇所から状態更新",
    "topicTag": "Rc + RefCell 共有可変状態",
    "kurumiIntro": "共有できる `Rc` と書き換えできる `RefCell` を組み合わせた定番コンビ `Rc<RefCell<i32>>` に挑戦！別々の所有者から順番に加算しよう。",
    "goalSummary": "Rc::clone 経由で同じ RefCell を2回更新し金庫⚡7＋(4, 1)へ",
    "bookSectionTitle": "15.5 Rc<T> と RefCell<T> を組み合わせて可変データへの複数の所有者を持つ",
    "bookSummary": "「複数人で共有したい（`Rc`）」かつ「中身を書き換えたい（`RefCell`）」ときは、`Rc::new(RefCell::new(値))` が Rust シングルスレッドの王道パターンです。",
    "bookKeyCode": "let a = Rc::new(RefCell::new(2));\nlet b = Rc::clone(&a);\n{ *b.borrow_mut() += 5; }",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn add_energy(target: Rc<RefCell<i32>>, amt: i32) {\n    let mut g = target.borrow_mut();\n    *g += amt;\n}\n\nfn main() {\n    let shared = Rc::new(RefCell::new(2));\n    add_energy(Rc::clone(&shared), 2);\n    add_energy(Rc::clone(&shared), 3);\n    let v = shared.borrow();\n    add_vault(*v);\n    step(4);\n}",
    "quickChips": [
      {
        "label": "Rc::clone(&shared)",
        "insert": "Rc::clone(&shared)"
      }
    ],
    "hints": [
      "共有更新する関数には `Rc<RefCell<i32>>` を `Rc::clone(&shared)` で渡そう。初期値2に2と3を足して金庫⚡7にし、4歩進んでスイッチとゴールへ。",
      "`fn add_energy(target: Rc<RefCell<i32>>, amt: i32) { let mut g = target.borrow_mut(); *g += amt; }` を用意し、`add_energy(Rc::clone(&shared), 2); add_energy(Rc::clone(&shared), 3);` のあと `add_vault(*shared.borrow()); step(4);` しよう。",
      "fn add_energy(target: Rc<RefCell<i32>>, amt: i32) {\n    let mut g = target.borrow_mut();\n    *g += amt;\n}\n\nfn main() {\n    let shared = Rc::new(RefCell::new(2));\n    add_energy(Rc::clone(&shared), 2);\n    add_energy(Rc::clone(&shared), 3);\n    let v = shared.borrow();\n    add_vault(*v);\n    step(4);\n}"
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
        "x": 2,
        "y": 0,
        "initial": 0,
        "target": 7
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "vaultTarget": 7,
      "requireAllSwitches": true
    },
    "parTicks": 6
  },
  {
    "displayId": "15-19",
    "id": "54ab4b3c-0663-52b5-8dc8-0e8f7687938e",
    "index": 323,
    "chapter": 15,
    "chapterTitle": "第15章 スマートポインタ",
    "stageKind": "puzzle",
    "title": "15-19. 空間ルール＋Rc<RefCell> で検査・強化・納品",
    "topicTag": "Rc<RefCell> + 空間コア",
    "kurumiIntro": "進捗カウンターを `Rc<RefCell<i32>>` で記録しながら、コアの拾得・検査・強化・納品を一気に行おう！",
    "goalSummary": "進捗カウンター⚡2（検査・強化の計2回）＋コア⚡5+納品を達成",
    "bookSectionTitle": "15.5 共有ログや計測カウンターとしての Rc<RefCell>",
    "bookSummary": "異なる処理ステップから共通の統計カウンターへ安全に加算する実戦的なパターンです。",
    "bookKeyCode": "{ *log.borrow_mut() += 1; }",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn tick_op(log: Rc<RefCell<i32>>) {\n    let mut g = log.borrow_mut();\n    *g += 1;\n}\n\nfn main() {\n    let ops = Rc::new(RefCell::new(0));\n    step(1);\n    let mut c = grab_core();\n    step(1);\n    scan(&c);\n    tick_op(Rc::clone(&ops));\n    step(1);\n    boost(&mut c);\n    tick_op(Rc::clone(&ops));\n    step(1);\n    deliver(c);\n    add_vault(*ops.borrow());\n}",
    "quickChips": [
      {
        "label": "boost(&mut c);",
        "insert": "boost(&mut c);\n    "
      },
      {
        "label": "tick_op(Rc::clone(&ops));",
        "insert": "tick_op(Rc::clone(&ops));\n    "
      }
    ],
    "hints": [
      "コア(初期⚡3)を (1,1)で拾い、(2,1)で `scan`、(3,1)で `boost`(⚡5+)して (4,1)で納品しよう。`scan` と `boost` のたびに `Rc<RefCell<i32>>` を+1すれば金庫⚡2も達成！",
      "`fn tick_op(log: Rc<RefCell<i32>>)` を作り、`scan(&c); tick_op(Rc::clone(&ops));` と `boost(&mut c); tick_op(Rc::clone(&ops));` をそれぞれ該当タイルで呼んで最後に `add_vault(*ops.borrow());` しよう。",
      "fn tick_op(log: Rc<RefCell<i32>>) {\n    let mut g = log.borrow_mut();\n    *g += 1;\n}\n\nfn main() {\n    let ops = Rc::new(RefCell::new(0));\n    step(1);\n    let mut c = grab_core();\n    step(1);\n    scan(&c);\n    tick_op(Rc::clone(&ops));\n    step(1);\n    boost(&mut c);\n    tick_op(Rc::clone(&ops));\n    step(1);\n    deliver(c);\n    add_vault(*ops.borrow());\n}"
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
          "label": "計測コア"
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
        "x": 1,
        "y": 0,
        "initial": 0,
        "target": 2
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "deliverCores": 1,
      "minCorePower": 5,
      "scanCount": 1,
      "vaultTarget": 2,
      "requireSpatialCoreRules": true
    },
    "parTicks": 10
  },
  {
    "displayId": "15-20",
    "id": "1bef7c21-c2cb-5cf1-84c3-65e120ca0c9f",
    "index": 324,
    "chapter": 15,
    "chapterTitle": "第15章 スマートポインタ",
    "stageKind": "puzzle",
    "title": "15-20. RefCell 書き換え中にガードを持ちすぎない設計",
    "topicTag": "RefCell スコープ + ゲート待機",
    "kurumiIntro": "蒸気ゲートが一定周期で開閉する通路を抜けながら、`RefCell` に歩数カウントを貯めよう！借用パニックを起こさないよう必ずブロック `{ ... }` を閉じてね。",
    "goalSummary": "RefCell パニックを回避し周期ゲート(2,1)を抜け金庫⚡4＋(4,1)へ",
    "bookSectionTitle": "15.5 ループ内での短寿命 borrow_mut()",
    "bookSummary": "ループ内で毎回 `borrow_mut()` を呼ぶときは、1回ごとにすぐ解放されるブロック構造にすることで安全が保たれます。",
    "bookKeyCode": "for _ in 0..4 { { *steps.borrow_mut() += 1; } ... }",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn main() {\n    let steps = RefCell::new(0);\n    for _ in 0..4 {\n        while !is_gate_open() {\n            wait_tick(1);\n        }\n        step();\n        {\n            let mut s = steps.borrow_mut();\n            *s += 1;\n        }\n    }\n    add_vault(*steps.borrow());\n}",
    "quickChips": [
      {
        "label": "for _ in 0..4 {",
        "insert": "for _ in 0..4 {"
      }
    ],
    "hints": [
      "周期ゲート(2, 1)を `while !is_gate_open() { wait_tick(1); }` で待ちながら4歩進み、1歩ごとに短いスコープ `{ ... }` で `RefCell` に加算して金庫⚡4を作ろう。",
      "`for _ in 0..4 { while !is_gate_open() { wait_tick(1); } step(); { let mut s = steps.borrow_mut(); *s += 1; } }` のあと `add_vault(*steps.borrow());` を実行しよう。",
      "fn main() {\n    let steps = RefCell::new(0);\n    for _ in 0..4 {\n        while !is_gate_open() {\n            wait_tick(1);\n        }\n        step();\n        {\n            let mut s = steps.borrow_mut();\n            *s += 1;\n        }\n    }\n    add_vault(*steps.borrow());\n}"
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
    "parTicks": 7
  },
  {
    "displayId": "15-21",
    "id": "73b33189-827b-51b7-976a-c6ea1b476074",
    "index": 325,
    "chapter": 15,
    "chapterTitle": "第15章 スマートポインタ",
    "stageKind": "puzzle",
    "title": "15-21. Box 構造体と RefCell の連携（迷路折り返し）",
    "topicTag": "Box<Struct> + RefCell + 左手法",
    "kurumiIntro": "`Box<MazeStats>` に記録用 `RefCell` を組み合わせて、曲がり角を数えながら迷路を抜けよう！スイッチの真上で曲がれたらバッチリだよ。",
    "goalSummary": "左手法迷路でコーナーを通ってスイッチを踏み (3, 3) へ",
    "bookSectionTitle": "15.1 & 15.5 Box と RefCell を合わせた状態記録",
    "bookSummary": "ヒープ管理の構造体の中身を安全に更新しながら自律探索ループを回すパターンです。",
    "bookKeyCode": "{ let mut g = steps.borrow_mut(); *g += 1; }",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn main() {\n    let max_vault = Box::new(3);\n    let count = RefCell::new(0);\n    while !at_goal() {\n        if !is_wall_left() {\n            turn_left();\n            step();\n        } else if !is_wall_ahead() {\n            step();\n        } else {\n            turn_right();\n            {\n                let mut g = count.borrow_mut();\n                *g += 1;\n            }\n        }\n    }\n    add_vault(*max_vault + *count.borrow());\n}",
    "quickChips": [
      {
        "label": "turn_right();",
        "insert": "turn_right();\n            "
      },
      {
        "label": "{ let mut g = count.borrow_mut(); *g += 1; }",
        "insert": "{\n                let mut g = count.borrow_mut();\n                *g += 1;\n            }"
      }
    ],
    "hints": [
      "左手法（左が空なら左折＆前進→前が空なら前進→壁なら右折）で迷路を抜けよう。右折した回数(1)と `Box::new(3)` を足せば金庫⚡4も満たせるよ。",
      "`while !at_goal()` 内で左手法を実行し、`else { turn_right(); { let mut g = count.borrow_mut(); *g += 1; } }` として最後に `add_vault(*max_vault + *count.borrow());` しよう。",
      "fn main() {\n    let max_vault = Box::new(3);\n    let count = RefCell::new(0);\n    while !at_goal() {\n        if !is_wall_left() {\n            turn_left();\n            step();\n        } else if !is_wall_ahead() {\n            step();\n        } else {\n            turn_right();\n            {\n                let mut g = count.borrow_mut();\n                *g += 1;\n            }\n        }\n    }\n    add_vault(*max_vault + *count.borrow());\n}"
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
          "x": 3,
          "y": 1
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
      "requireAllSwitches": true
    },
    "parTicks": 8
  },
  {
    "displayId": "15-22",
    "id": "91449bb9-4dc7-549f-8a66-54a36fe8d430",
    "index": 326,
    "chapter": 15,
    "chapterTitle": "第15章 スマートポインタ",
    "stageKind": "puzzle",
    "title": "15-22. 二重スパーク防衛線と Box・RefCell 協調",
    "topicTag": "Box + RefCell + スパーク2連続",
    "kurumiIntro": "2か所の横断スパークを越えてゴールへ！`Box` に目標値を預け、`RefCell` で通過回数を記録しながら安全に進もう。",
    "goalSummary": "Box＋RefCell で金庫⚡4を作り2つのスパークを越えて (5, 1) へ",
    "bookSectionTitle": "15.1 & 15.5 ヒープ値と安全カウンターの連動",
    "bookSummary": "安全確認付きのループと `RefCell` スコープ更新を組み合わせて危険地帯を踏破します。",
    "bookKeyCode": "while is_spark_ahead() { wait_tick(1); } step();",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn main() {\n    let base = Box::new(2);\n    let passed = RefCell::new(0);\n    for _ in 0..5 {\n        while is_spark_ahead() {\n            wait_tick(1);\n        }\n        step();\n        {\n            let mut p = passed.borrow_mut();\n            *p += 1;\n        }\n    }\n    add_vault(*base + 2);\n}",
    "quickChips": [
      {
        "label": "while is_spark_ahead() { wait_tick(1); }",
        "insert": "while is_spark_ahead() {\n            wait_tick(1);\n        }\n        "
      }
    ],
    "hints": [
      "金庫目標はちょうど⚡4！`Box::new(2)` の値と、スパーク2か所 `(1, 1)` と `(3, 1)` をやり過ごして歩いたあとの加算を組み合わせて⚡4にしよう。",
      "`for _ in 0..5 { while is_spark_ahead() { wait_tick(1); } step(); { let mut p = passed.borrow_mut(); *p += 1; } }` のあと `add_vault(*base + 2);` しよう。",
      "fn main() {\n    let base = Box::new(2);\n    let passed = RefCell::new(0);\n    for _ in 0..5 {\n        while is_spark_ahead() {\n            wait_tick(1);\n        }\n        step();\n        {\n            let mut p = passed.borrow_mut();\n            *p += 1;\n        }\n    }\n    add_vault(*base + 2);\n}"
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
          "x": 0,
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
      "sparks": [
        {
          "id": "sp1",
          "path": [
            {
              "x": 1,
              "y": 0
            },
            {
              "x": 1,
              "y": 1
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
              "y": 2
            },
            {
              "x": 1,
              "y": 1
            }
          ],
          "initialIndex": 1
        },
        {
          "id": "sp2",
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
          "initialIndex": 3
        }
      ],
      "vault": {
        "x": 2,
        "y": 0,
        "initial": 0,
        "target": 4
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "vaultTarget": 4,
      "vaultExact": 4
    },
    "parTicks": 10
  },
  {
    "displayId": "15-23",
    "id": "451659e2-c700-5579-a149-c060ef9f5d3a",
    "index": 327,
    "chapter": 15,
    "chapterTitle": "第15章 スマートポインタ",
    "title": "15-23. 第15章まとめ：Box・Rc・RefCell 総合工房",
    "topicTag": "第15章 総合実践",
    "kurumiIntro": "第15章の総決算！`Box`（横歩数）、`Rc`（縦歩数共有）、`RefCell`（金庫チャージ計算）の3種類のスマートポインターを組み合わせてL字ゴールへ！",
    "goalSummary": "Box・Rc・RefCell の3つを使って金庫⚡5＋ゴール (3, 3) へ",
    "bookSectionTitle": "第15章まとめ — スマートポインターの適材適所",
    "bookSummary": "単独所有のヒープ確保は `Box`、複数共有は `Rc`、内部の書き換えには `RefCell` と役割を分けて組み合わせます。",
    "bookKeyCode": "Box::new(...) / Rc::clone(...) / cell.borrow_mut()",
    "starterCode": "fn main() {\n    let b_dx = Box::new(3);\n    let rc_dy = Rc::new(2);\n    let rc_dy_copy = Rc::clone(&rc_dy);\n    let cell = RefCell::new(2);\n    {\n        let mut g = cell.borrow_mut();\n        *g += *b_dx; // 2 + 3 = 5\n    }\n    add_vault(*cell.borrow());\n    step(*b_dx);\n    turn_right();\n    // あと *rc_dy_copy 歩進んで (3, 3) へ着こう！\n    \n}",
    "solutionCode": "fn main() {\n    let b_dx = Box::new(3);\n    let rc_dy = Rc::new(2);\n    let rc_dy_copy = Rc::clone(&rc_dy);\n    let cell = RefCell::new(2);\n    {\n        let mut g = cell.borrow_mut();\n        *g += *b_dx;\n    }\n    add_vault(*cell.borrow());\n    step(*b_dx);\n    turn_right();\n    step(*rc_dy_copy);\n}",
    "quickChips": [
      {
        "label": "step(*rc_dy_copy);",
        "insert": "step(*rc_dy_copy);"
      }
    ],
    "hints": [
      "cell の中は 2 + 3 = 5 になって金庫に入り、東に3歩進んで南を向いているよ！",
      "最後の行に `step(*rc_dy_copy);` を書き足そう。",
      "turn_right();\nstep(*rc_dy_copy);"
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
    "displayId": "15-24",
    "id": "92eb75db-c24c-55fd-a983-832ad103d8c1",
    "index": 328,
    "chapter": 15,
    "chapterTitle": "第15章 スマートポインタ",
    "stageKind": "puzzle",
    "title": "15-24. 第15章マスター：全スマートポインタ総動員コア納品",
    "topicTag": "第15章 パズル総仕上げ",
    "kurumiIntro": "第15章の最終パズル！`Box`・`drop`・`Rc`・`RefCell` のすべてを使いこなし、スイッチでゲートを開き、空間ルール通りコアを検査・強化して納品しよう！",
    "goalSummary": "全スマートポインタ活用で金庫⚡6・全スイッチ・空間コア⚡5+納品を達成",
    "bookSectionTitle": "第15章 総まとめ — メモリ管理と安全パターンの融合",
    "bookSummary": "所有・解放・共有・内部可変性を状況に応じて組み合わせ、複雑な工程でも破綻しない安全コードを実現します。",
    "bookKeyCode": "Box + drop + Rc::clone + Rc<RefCell>",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn main() {\n    let b = Box::new(2);\n    let b_val = *b;\n    drop(b);\n\n    let step_rc = Rc::new(1);\n    let total_vault = Rc::new(RefCell::new(b_val));\n\n    step(*Rc::clone(&step_rc));\n    let mut c = grab_core();\n    step(*Rc::clone(&step_rc));\n    scan(&c);\n    {\n        let mut g = total_vault.borrow_mut();\n        *g += 2;\n    }\n    step(*Rc::clone(&step_rc));\n    boost(&mut c);\n    {\n        let mut g = total_vault.borrow_mut();\n        *g += 2;\n    }\n    step(*step_rc);\n    deliver(c);\n    add_vault(*total_vault.borrow());\n}",
    "quickChips": [
      {
        "label": "boost(&mut c);",
        "insert": "boost(&mut c);\n    "
      },
      {
        "label": "*g += 2;",
        "insert": "*g += 2;"
      }
    ],
    "hints": [
      "`Box`・`drop`・`Rc`・`RefCell` を連携させて金庫⚡6を積み上げつつ、1歩目でコア取得→2歩目で `scan`→3歩目で `boost`(⚡5+)→4歩目で `deliver` しよう。",
      "`b = Box::new(2)` を取り出して `drop(b)` し、`total_vault = Rc::new(RefCell::new(b_val))` に `scan` 後 +2・`boost` 後 +2 をそれぞれ `{ ... }` ブロックで加算して最後に `add_vault(*total_vault.borrow());` しよう。",
      "fn main() {\n    let b = Box::new(2);\n    let b_val = *b;\n    drop(b);\n\n    let step_rc = Rc::new(1);\n    let total_vault = Rc::new(RefCell::new(b_val));\n\n    step(*Rc::clone(&step_rc));\n    let mut c = grab_core();\n    step(*Rc::clone(&step_rc));\n    scan(&c);\n    {\n        let mut g = total_vault.borrow_mut();\n        *g += 2;\n    }\n    step(*Rc::clone(&step_rc));\n    boost(&mut c);\n    {\n        let mut g = total_vault.borrow_mut();\n        *g += 2;\n    }\n    step(*step_rc);\n    deliver(c);\n    add_vault(*total_vault.borrow());\n}"
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
          "label": "極上コア"
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
      "minCorePower": 5,
      "scanCount": 1,
      "vaultTarget": 6,
      "requireAllSwitches": true,
      "requireSpatialCoreRules": true
    },
    "parTicks": 11
  }
];
