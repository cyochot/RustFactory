import { StageDefinition } from '../types/game';

export const CHAPTER_4_STAGES: StageDefinition[] = [
  {
    "displayId": "4-1",
    "id": "50da55a5-9f54-56a0-9ca7-ad9d72ff3541",
    "index": 97,
    "chapter": 4,
    "chapterTitle": "第4章 所有権を理解する",
    "title": "4-1. 所有権と Move（お引っ越し）",
    "topicTag": "所有権 / Move",
    "kurumiIntro": "いよいよRustの看板ルール「所有権」だよ！`grab_core()` で拾ったコアを `deliver(core)` に渡すと所有権が移動して、元の変数は空っぽになるんだ。",
    "goalSummary": "Moveエラーを直して、コアを1つゴールへ正しく届けよう",
    "bookSectionTitle": "4.1 所有権とは何か？ — 値のムーブ（Move）",
    "bookSummary": "Rustでは各値に「所有者が1人だけ」存在します。関数へ値を渡したり別変数へ代入すると所有権が移動（Move）し、元の変数は二度と使えなくなります。これにより二重解放バグを防ぎます。",
    "bookKeyCode": "let core = grab_core();\ndeliver(core); // 所有権が移動！",
    "starterCode": "fn main() {\n    let core = grab_core();\n    step(3);\n    deliver(core);\n    // ↓ もう渡した後の core を使おうとしているのでエラーになるよ！\n    println!(\"使ったコア: {}\", core);\n}",
    "solutionCode": "fn main() {\n    let core = grab_core();\n    println!(\"拾ったコア: {}\", core);\n    step(3);\n    deliver(core);\n}",
    "quickChips": [
      {
        "label": "println!(\"{}\", 変数);",
        "insert": "println!(\"{}\", /* 変数 */);\n    "
      },
      {
        "label": "deliver(core);",
        "insert": "deliver(core);\n    "
      }
    ],
    "hints": [
      "まずはそのまま実行して、「所有権が移動（Move）済み」のエラーを体験してみよう！",
      "println! を deliver(core); より「前」に動かすか、余計な行を消せばOKだよ。",
      "let core = grab_core();\nprintln!(\"拾ったコア: {}\", core);\nstep(3);\ndeliver(core);"
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
      "cores": [
        {
          "id": "c1",
          "x": 1,
          "y": 1,
          "power": 1,
          "label": "オレンジコア"
        }
      ],
      "deliveries": [
        {
          "x": 3,
          "y": 1
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "deliverCores": 1
    },
    "parTicks": 6
  },
  {
    "displayId": "4-2",
    "id": "2cd33dd4-9627-54ce-97b8-a711e77061e4",
    "index": 98,
    "chapter": 4,
    "chapterTitle": "第4章 所有権を理解する",
    "title": "4-2. 変数代入での Move に気をつけよう",
    "topicTag": "代入による Move",
    "kurumiIntro": "コアを `let backup = core;` と別変数に代入しただけでも所有権はお引っ越し（Move）するよ！新しく所有した `backup` の方を納品してあげよう。",
    "goalSummary": "所有権が移った backup を使って納品＋ゴールへ",
    "bookSectionTitle": "4.1 変数とデータのやりとり: ムーブ",
    "bookSummary": "整数 `i32` のような単純な型はコピー（`Copy`）されますが、`Core` や `String` などのリソースは代入時に所有権が移動（Move）します。",
    "bookKeyCode": "let backup = core; // core → backup へ Move\ndeliver(backup);",
    "starterCode": "fn main() {\n    let core = grab_core();\n    let backup = core;\n    step(3);\n    // core はもう空っぽなので、新しい所有者 backup を渡そう！\n    deliver(core);\n}",
    "solutionCode": "fn main() {\n    let core = grab_core();\n    let backup = core;\n    step(3);\n    deliver(backup);\n}",
    "quickChips": [
      {
        "label": "deliver(backup);",
        "insert": "deliver(backup);"
      }
    ],
    "hints": [
      "そのまま実行すると「所有権が移動（Move）済みの変数 core は使えません」と怒られるよ。",
      "deliver(core); を deliver(backup); に書き換えよう！",
      "deliver(backup);"
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
      "cores": [
        {
          "id": "c1",
          "x": 1,
          "y": 1,
          "power": 1,
          "label": "バックアップコア"
        }
      ],
      "deliveries": [
        {
          "x": 3,
          "y": 1
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "deliverCores": 1
    },
    "parTicks": 5
  },
  {
    "displayId": "4-3",
    "id": "3bfa7dd4-ab23-5565-9b0f-a597d3e73d62",
    "index": 99,
    "chapter": 4,
    "chapterTitle": "第4章 所有権を理解する",
    "title": "4-3. 関数から所有権を返してもらう",
    "topicTag": "所有権と戻り値",
    "kurumiIntro": "関数へ渡したコアをもう1回使いたいときは、関数の戻り値で「所有権を返してもらう」ことができるんだよ！",
    "goalSummary": "inspect_and_return が返したコアを受け取って納品しよう",
    "bookSectionTitle": "4.1 戻り値とスコープ — 所有権を返す",
    "bookSummary": "値を引数として受け取った関数が最後にその値をそのまま返せば、呼び出し元が再び所有権を受け取って処理を続けられます。",
    "bookKeyCode": "fn pass_back(c: Core) -> Core {\n    c\n}",
    "starterCode": "fn inspect_and_return(c: Core) -> Core {\n    println!(\"点検OK: {}\", c);\n    // c をそのまま返そう！\n    c\n}\n\nfn main() {\n    let core1 = grab_core();\n    let core2 = inspect_and_return(core1);\n    step(3);\n    // 返ってきた core2 を deliver() しよう！\n    \n}",
    "solutionCode": "fn inspect_and_return(c: Core) -> Core {\n    println!(\"点検OK: {}\", c);\n    c\n}\n\nfn main() {\n    let core1 = grab_core();\n    let core2 = inspect_and_return(core1);\n    step(3);\n    deliver(core2);\n}",
    "quickChips": [
      {
        "label": "deliver(core2);",
        "insert": "deliver(core2);"
      }
    ],
    "hints": [
      "core1 の所有権は inspect_and_return に入って、戻り値として core2 に返ってきているよ！",
      "最後に deliver(core2); を書き足そう。",
      "step(3);\ndeliver(core2);"
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
      "cores": [
        {
          "id": "c1",
          "x": 0,
          "y": 1,
          "power": 2,
          "label": "点検コア"
        }
      ],
      "deliveries": [
        {
          "x": 3,
          "y": 1
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "deliverCores": 1
    },
    "parTicks": 6
  },
  {
    "displayId": "4-4",
    "id": "f1fea5fa-191c-5269-8dc8-e4d3486dbbe9",
    "index": 100,
    "chapter": 4,
    "chapterTitle": "第4章 所有権を理解する",
    "stageKind": "puzzle",
    "title": "4-4. 所有権を関数で返してもらう",
    "topicTag": "関数への Move と返却",
    "kurumiIntro": "別の関数 `prepare(mut c: Core) -> Core` にコアの所有権を渡して中で強化（`boost`）し、戻り値として手元へ戻してもらってから自分で届けよう！",
    "goalSummary": "補助関数に所有権を渡して戻してもらい、検査後に納品(⚡3以上)しよう",
    "bookSectionTitle": "4.1 所有権の移動と返却",
    "bookSummary": "関数に値を渡すと所有権が移りますが、関数が `-> Core` としてその値を返せば、呼び出し元が再び所有権を受け取って次の処理へ進めます。",
    "bookKeyCode": "fn enhance(mut c: Core) -> Core {\n    boost(&mut c);\n    c\n}",
    "starterCode": "fn enhance(mut c: Core) -> Core {\n    // ここで強化して c を返そう（セミコロンなしで返すよ）\n    c\n}\n\nfn main() {\n    step();\n    let core = grab_core();\n    step(2);\n    // enhance(core) で強化を受け取り、検査台(4,1)と納品台(5,1)へ！\n}",
    "solutionCode": "fn enhance(mut c: Core) -> Core {\n    boost(&mut c);\n    c\n}\n\nfn main() {\n    step();\n    let core = grab_core();\n    step(2);\n    let core = enhance(core);\n    step();\n    scan(&core);\n    step();\n    deliver(core);\n}",
    "quickChips": [
      {
        "label": "let core = enhance(core);",
        "insert": "let core = enhance(core);\n    "
      },
      {
        "label": "boost(&mut c);",
        "insert": "boost(&mut c);\n    "
      }
    ],
    "hints": [
      "enhance 関数の中に `boost(&mut c);` を書いて最後に `c` を返そう。",
      "(3,1) の強化台の上で `let core = enhance(core);` を呼び、所有権を新しい `core` に受け取ろう！",
      "その後 (4,1) で `scan(&core);`、(5,1) で `deliver(core);` でクリア！"
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
      "cores": [
        {
          "id": "c1",
          "x": 1,
          "y": 1,
          "power": 1,
          "label": "返却コア"
        }
      ],
      "chargers": [
        {
          "x": 3,
          "y": 1
        }
      ],
      "scanners": [
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
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "deliverCores": 1,
      "minCorePower": 3,
      "scanCount": 1,
      "requireSpatialCoreRules": true
    },
    "parTicks": 10
  },
  {
    "displayId": "4-5",
    "id": "05bf262f-5786-5234-b6cc-9de582a1a776",
    "index": 101,
    "chapter": 4,
    "chapterTitle": "第4章 所有権を理解する",
    "title": "4-5. 2つのコアを順番に回収＆納品",
    "topicTag": "Move と 複数コア実践",
    "kurumiIntro": "道すがらにコアが2個落ちているよ！1個目も2個目も、それぞれの変数の所有権を大切に運びきって納品台へ届けよう！",
    "goalSummary": "2つのコア（c1, c2）を拾ってL字先のゴール (3, 3) へ納品",
    "bookSectionTitle": "4.1 複数の所有者の管理実践",
    "bookSummary": "異なる2つの値を別々の変数に束縛すれば、それぞれの所有権が独立して管理され、安全に両方を取り扱えます。",
    "bookKeyCode": "let c1 = grab_core();\nstep(2);\nlet c2 = grab_core();\ndeliver(c1); deliver(c2);",
    "starterCode": "fn main() {\n    let c1 = grab_core();\n    step(2);\n    let c2 = grab_core();\n    step(1);\n    turn_right();\n    step(2);\n    deliver(c1);\n    // c2 も忘れずに deliver しよう！\n    \n}",
    "solutionCode": "fn main() {\n    let c1 = grab_core();\n    step(2);\n    let c2 = grab_core();\n    step(1);\n    turn_right();\n    step(2);\n    deliver(c1);\n    deliver(c2);\n}",
    "quickChips": [
      {
        "label": "deliver(c2);",
        "insert": "deliver(c2);"
      }
    ],
    "hints": [
      "c1 と c2 は別々の変数だから、順番に 1つずつ deliver できるよ！",
      "最後の行に deliver(c2); を追加しよう！",
      "deliver(c1);\ndeliver(c2);"
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
          "power": 1,
          "label": "Aコア"
        },
        {
          "id": "c2",
          "x": 2,
          "y": 1,
          "power": 1,
          "label": "Bコア"
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
      "deliverCores": 2
    },
    "parTicks": 10
  },
  {
    "displayId": "4-6",
    "id": "c2034a35-446f-5458-861a-e8845be95e9d",
    "index": 102,
    "chapter": 4,
    "chapterTitle": "第4章 所有権を理解する",
    "stageKind": "puzzle",
    "title": "4-6. 2つのコアを連続シャトル配送",
    "topicTag": "複数所有権管理 / シャトルルート",
    "kurumiIntro": "今度はコアが2つ！左の部屋と真ん中の部屋にあるコアを順番に拾って、納品台 (4, 2) に2つとも運び込もう。最初のコアを納品してから2つ目を拾ってね！",
    "goalSummary": "2つのコアを別々に拾って納品台 (4, 2) へ deliver し、ゴールへ",
    "bookSectionTitle": "4.1 値のライフタイムと再利用",
    "bookSummary": "変数 `c1` を `deliver(c1)` で手放したあと、新しく `let c2 = grab_core();` として次のコアの所有権を受け取ることで連続輸送ができます。",
    "bookKeyCode": "let c1 = grab_core();\ndeliver(c1);\nlet c2 = grab_core();\ndeliver(c2);",
    "starterCode": "fn main() {\n    // (1,1) の Aコアを (4,1) に納品するか、(4,2) 納品台に2つとも届けよう！\n    step();\n}",
    "solutionCode": "fn main() {\n    step();\n    let c1 = grab_core();\n    step(3);\n    turn_right();\n    step();\n    deliver(c1);\n    turn_right();\n    step(2);\n    let c2 = grab_core();\n    turn_right();\n    turn_right();\n    step(2);\n    deliver(c2);\n}",
    "quickChips": [
      {
        "label": "let c1 = grab_core();",
        "insert": "let c1 = grab_core();\n    "
      },
      {
        "label": "let c2 = grab_core();",
        "insert": "let c2 = grab_core();\n    "
      },
      {
        "label": "deliver(c1);",
        "insert": "deliver(c1);\n    "
      }
    ],
    "hints": [
      "Aコア (1,1) を拾ったら、東へ3歩・南へ1歩で納品台 (4,2) に届けて `deliver(c1);` しよう！",
      "そこから西向きに2歩歩くと (2,2) のBコアがあるので拾い、反転（turn_right 2回）して東へ2歩戻ろう！",
      "step(); let c1 = grab_core(); step(3); turn_right(); step(); deliver(c1); turn_right(); step(2); let c2 = grab_core(); turn_right(); turn_right(); step(2); deliver(c2);"
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
        "x": 4,
        "y": 2
      },
      "cores": [
        {
          "id": "c1",
          "x": 1,
          "y": 1,
          "power": 1,
          "label": "Aコア"
        },
        {
          "id": "c2",
          "x": 2,
          "y": 2,
          "power": 1,
          "label": "Bコア"
        }
      ],
      "deliveries": [
        {
          "x": 4,
          "y": 2
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "deliverCores": 2,
      "requireSpatialCoreRules": true
    },
    "parTicks": 19
  },
  {
    "displayId": "4-7",
    "id": "780244e4-ee33-5914-93ed-d60d1bf06489",
    "index": 103,
    "chapter": 4,
    "chapterTitle": "第4章 所有権を理解する",
    "title": "4-7. 不変借用 & は何度でもOK！",
    "topicTag": "複数回の不変借用 &T",
    "kurumiIntro": "見るだけの不変借用 `&core` なら、所有権を奪わないから3回連続でスキャンしても大丈夫なんだよ！試してみよう！",
    "goalSummary": "同じコアを 3回 scan(&core) してから納品しよう",
    "bookSectionTitle": "4.2 不変参照はいくつでも同時に作れる",
    "bookSummary": "中身を書き換えない `&T` 参照は読み取り専用なので、何度でも・同時に何箇所からでも安全に借りることができます。",
    "bookKeyCode": "scan(&core);\nscan(&core);\nscan(&core);",
    "starterCode": "fn main() {\n    let core = grab_core();\n    scan(&core);\n    // あと2回スキャンしてからゴールへ届けよう！\n    \n    step(3);\n    deliver(core);\n}",
    "solutionCode": "fn main() {\n    let core = grab_core();\n    scan(&core);\n    scan(&core);\n    scan(&core);\n    step(3);\n    deliver(core);\n}",
    "quickChips": [
      {
        "label": "scan(&core);",
        "insert": "scan(&core);\n    "
      }
    ],
    "hints": [
      "scan(&core); は所有権を動かさないから、続けて何度でも呼べるよ！",
      "scan(&core); を合計3回並べてみよう。",
      "scan(&core);\nscan(&core);\nscan(&core);"
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
      "cores": [
        {
          "id": "c1",
          "x": 0,
          "y": 1,
          "power": 1,
          "label": "検査コア"
        }
      ],
      "scanners": [
        {
          "x": 1,
          "y": 0
        }
      ],
      "deliveries": [
        {
          "x": 3,
          "y": 1
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "scanCount": 3,
      "deliverCores": 1
    },
    "parTicks": 8
  },
  {
    "displayId": "4-8",
    "id": "c24b0e4e-1143-56af-9b3f-e27b805160e5",
    "index": 104,
    "chapter": 4,
    "chapterTitle": "第4章 所有権を理解する",
    "stageKind": "puzzle",
    "title": "4-8. 複数回の不変借用（&T は何個でもOK）",
    "topicTag": "複数回の不変借用 &core",
    "kurumiIntro": "途中の検査台が2箇所あり、合計3回のスキャンが必要だよ！同じ `&core` は書き換えない限り何度貸してもOKなRustのルールを活かして通過しよう！",
    "goalSummary": "2つの検査台で合計3回 scan(&core) して納品台 (5, 1) へ届けよう",
    "bookSectionTitle": "4.2 借用規則 — 複数の不変参照は同時に存在できる",
    "bookSummary": "データを読み取るだけの不変借用（`&T`）は何度でも、いくつでも安全に作れます。",
    "bookKeyCode": "scan(&core);\nscan(&core);",
    "starterCode": "fn main() {\n    // (1,1)の検査台で2回、(3,1)の検査台で1回 scan(&core) して (5,1) へ届けよう！\n    let core = grab_core();\n}",
    "solutionCode": "fn main() {\n    let core = grab_core();\n    step();\n    scan(&core);\n    scan(&core);\n    step(2);\n    scan(&core);\n    step(2);\n    deliver(core);\n}",
    "quickChips": [
      {
        "label": "scan(&core);",
        "insert": "scan(&core);\n    "
      },
      {
        "label": "deliver(core);",
        "insert": "deliver(core);\n    "
      }
    ],
    "hints": [
      "(0,1) で grab_core() したあと 1歩で (1,1) の検査台へ。ここで scan(&core); を2回呼ぼう！",
      "あと2歩で (3,1) の検査台に着いたらもう1回 scan(&core); して、最後に2歩進んで deliver(core);！",
      "let core = grab_core(); step(); scan(&core); scan(&core); step(2); scan(&core); step(2); deliver(core);"
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
      "cores": [
        {
          "id": "c1",
          "x": 0,
          "y": 1,
          "power": 2,
          "label": "精密コア"
        }
      ],
      "scanners": [
        {
          "x": 1,
          "y": 1
        },
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
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "deliverCores": 1,
      "scanCount": 3,
      "requireSpatialCoreRules": true
    },
    "parTicks": 11
  },
  {
    "displayId": "4-9",
    "id": "93d94563-e767-55af-911d-43a5c6a17067",
    "index": 105,
    "chapter": 4,
    "chapterTitle": "第4章 所有権を理解する",
    "title": "4-9. 可変借用 &mut のぶつかり回避",
    "topicTag": "E0499 / &mut の排他性",
    "kurumiIntro": "同じ行で同時に `&mut core` と `&core` を渡そうとすると「書き換え中に読んじゃダメ！」ってコンパイラが止めてくれるよ。1つずつ順番に借りよう！",
    "goalSummary": "同時借用エラーを直し、強化(⚡3)＋スキャン1回＋納品へ",
    "bookSectionTitle": "4.2 借用の規則 — 1つの可変参照 vs 複数の不変参照",
    "bookSummary": "同じデータに対し「書き換え用 `&mut` が生きている間は、他の `&` も `&mut` も作れない」のがRustの鉄則です。順番に行を分ければ安全に使えます。",
    "bookKeyCode": "boost(&mut core);\nscan(&core);",
    "starterCode": "fn dual_check(a: &mut Core, b: &Core) {\n    boost(a);\n    scan(b);\n}\n\nfn main() {\n    let mut core = grab_core();\n    // ↓ 同じ変数の &mut と & を同時に渡すと競合エラーになるよ！\n    dual_check(&mut core, &core);\n    step(3);\n    deliver(core);\n}",
    "solutionCode": "fn main() {\n    let mut core = grab_core();\n    boost(&mut core);\n    scan(&core);\n    step(3);\n    deliver(core);\n}",
    "quickChips": [
      {
        "label": "boost(&mut core);",
        "insert": "boost(&mut core);\n    "
      },
      {
        "label": "scan(&core);",
        "insert": "scan(&core);\n    "
      }
    ],
    "hints": [
      "まずはそのまま実行して E0499 エラー（同時借用エラー）を見てみよう！",
      "dual_check(&mut core, &core); を消して、代わりに boost(&mut core); と scan(&core); を順番に書こう！",
      "boost(&mut core);\nscan(&core);"
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
      "cores": [
        {
          "id": "c1",
          "x": 0,
          "y": 1,
          "power": 1,
          "label": "二重借用コア"
        }
      ],
      "scanners": [
        {
          "x": 1,
          "y": 0
        }
      ],
      "chargers": [
        {
          "x": 2,
          "y": 0
        }
      ],
      "deliveries": [
        {
          "x": 3,
          "y": 1
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "scanCount": 1,
      "deliverCores": 1,
      "minCorePower": 3
    },
    "parTicks": 7
  },
  {
    "displayId": "4-10",
    "id": "b93e4f37-2a9d-5313-84f8-af74f2395f5e",
    "index": 106,
    "chapter": 4,
    "chapterTitle": "第4章 所有権を理解する",
    "title": "4-10. 2回ブーストで⚡5超強力コア納品",
    "topicTag": "&mut 連続強化実践",
    "kurumiIntro": "`boost(&mut core)` は1回で⚡+2されるよ！初期⚡1のコアを2回連続で可変借用して⚡5にして、L字通路先の納品台へ運ぼう！",
    "goalSummary": "コアを2回 boost して⚡5以上にし、スキャン＋L字納品へ",
    "bookSectionTitle": "4.2 可変借用の順次実行パターン",
    "bookSummary": "1回目の `&mut core` の使用が終われば借用期間は終了するので、次の行で再び `&mut core` を安全に作成できます。",
    "bookKeyCode": "boost(&mut core);\nboost(&mut core);\nscan(&core);",
    "starterCode": "fn main() {\n    let mut core = grab_core();\n    boost(&mut core);\n    // もう1回 boost して、スキャンもしてから (2, 3) へ届けよう！\n    \n    step(2);\n    turn_right();\n    step(2);\n    deliver(core);\n}",
    "solutionCode": "fn main() {\n    let mut core = grab_core();\n    boost(&mut core);\n    boost(&mut core);\n    scan(&core);\n    step(2);\n    turn_right();\n    step(2);\n    deliver(core);\n}",
    "quickChips": [
      {
        "label": "boost(&mut core);",
        "insert": "boost(&mut core);\n    "
      },
      {
        "label": "scan(&core);",
        "insert": "scan(&core);\n    "
      }
    ],
    "hints": [
      "必要なパワーは⚡5以上（初期1 + 2 + 2 = 5）と、スキャン1回だよ！",
      "boost(&mut core); と scan(&core); を追加しよう。",
      "boost(&mut core);\nboost(&mut core);\nscan(&core);"
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
      "cores": [
        {
          "id": "c1",
          "x": 0,
          "y": 1,
          "power": 1,
          "label": "高出力コア"
        }
      ],
      "scanners": [
        {
          "x": 1,
          "y": 0
        }
      ],
      "chargers": [
        {
          "x": 2,
          "y": 0
        }
      ],
      "deliveries": [
        {
          "x": 2,
          "y": 3
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "scanCount": 1,
      "deliverCores": 1,
      "minCorePower": 5
    },
    "parTicks": 10
  },
  {
    "displayId": "4-11",
    "id": "48754d16-9caf-509c-8aa7-b0042f4d82d9",
    "index": 107,
    "chapter": 4,
    "chapterTitle": "第4章 所有権を理解する",
    "stageKind": "puzzle",
    "title": "4-11. 拾って→強化して→検査して→納品",
    "topicTag": "&mut T ＆ &T / 空間ルート",
    "kurumiIntro": "コアを拾ってから強化台（`&mut強化`）へ、そして検査台（`&T検査`）へ寄り道しながらゴールに届けよう！変数の `mut` を忘れないでね！",
    "goalSummary": "コア(1,1)を拾い、強化台(1,3)と検査台(3,3)を経てゴール(4,3)へ deliver(⚡3以上)",
    "bookSectionTitle": "4.2 可変借用と不変借用の順番",
    "bookSummary": "1つの `let mut core` に対して、まず `&mut core` で強化を終わらせてから、あとで `&core` で検査すれば借用の衝突は起きません。",
    "bookKeyCode": "let mut core = grab_core();\nboost(&mut core);\nscan(&core);",
    "starterCode": "fn main() {\n    // 強化台 (1,3) -> 検査台 (3,3) -> ゴール (4,3) の順に進もう！\n    step();\n}",
    "solutionCode": "fn main() {\n    step();\n    let mut core = grab_core();\n    turn_right();\n    step(2);\n    boost(&mut core);\n    turn_left();\n    step(2);\n    scan(&core);\n    step();\n    deliver(core);\n}",
    "quickChips": [
      {
        "label": "let mut core = grab_core();",
        "insert": "let mut core = grab_core();\n    "
      },
      {
        "label": "boost(&mut core);",
        "insert": "boost(&mut core);\n    "
      },
      {
        "label": "scan(&core);",
        "insert": "scan(&core);\n    "
      },
      {
        "label": "deliver(core);",
        "insert": "deliver(core);\n    "
      }
    ],
    "hints": [
      "(1,1) で `let mut core = grab_core();` を呼んだら、右折して2歩南の (1,3) 強化台に乗ろう！",
      "`boost(&mut core);` のあと左折して東へ2歩の (3,3) で `scan(&core);`、最後に1歩進んで `deliver(core);`！",
      "step(); let mut core = grab_core(); turn_right(); step(2); boost(&mut core); turn_left(); step(2); scan(&core); step(); deliver(core);"
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
          "x": 0,
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
        "x": 4,
        "y": 3
      },
      "cores": [
        {
          "id": "c1",
          "x": 1,
          "y": 1,
          "power": 1,
          "label": "改良コア"
        }
      ],
      "chargers": [
        {
          "x": 1,
          "y": 3
        }
      ],
      "scanners": [
        {
          "x": 3,
          "y": 3
        }
      ],
      "deliveries": [
        {
          "x": 4,
          "y": 3
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "deliverCores": 1,
      "minCorePower": 3,
      "scanCount": 1,
      "requireSpatialCoreRules": true
    },
    "parTicks": 13
  },
  {
    "displayId": "4-12",
    "id": "7038a61a-393c-5fcc-b7ba-9108ba9d831b",
    "index": 108,
    "chapter": 4,
    "chapterTitle": "第4章 所有権を理解する",
    "stageKind": "puzzle",
    "title": "4-12. コンベア上の検査＆強化ライン",
    "topicTag": "コンベア + 借用タイミング",
    "kurumiIntro": "通路にコンベアが敷かれているよ！どのマスを通り過ぎる前に `grab_core()` と `boost(&mut core)` と `scan(&core)` を呼ぶか、立ち位置をパズルしよう！",
    "goalSummary": "コンベアで短縮しつつ強化(⚡3)・検査・納品を 10ティック以内に完了",
    "bookSectionTitle": "4.2 借用タイミングの設計",
    "bookSummary": "コンベアのマスに乗ると自動で押し出されるため、検査台や強化台はコンベアの前後に配置されています。足元を見極めて呼び出しましょう。",
    "bookKeyCode": "step(); boost(&mut core);",
    "starterCode": "fn main() {\n    // (1,1)は東コンベア！押された先の(2,1)からどう動くか考えよう\n    let mut core = grab_core();\n}",
    "solutionCode": "fn main() {\n    let mut core = grab_core();\n    step();\n    boost(&mut core);\n    step();\n    scan(&core);\n    step();\n    deliver(core);\n}",
    "quickChips": [
      {
        "label": "boost(&mut core);",
        "insert": "boost(&mut core);\n    "
      },
      {
        "label": "scan(&core);",
        "insert": "scan(&core);\n    "
      },
      {
        "label": "deliver(core);",
        "insert": "deliver(core);\n    "
      }
    ],
    "hints": [
      "スタート (0,1) にコアがあるよ！すぐ `let mut core = grab_core();` しよう。",
      "step() 1回で (1,1) のコンベアに乗って (2,1) の強化台へ着くから `boost(&mut core);`！次の step() で (3,1) コンベアから (4,1) 検査台へ、さらに step() で (5,1) 納品台！",
      "let mut core = grab_core(); step(); boost(&mut core); step(); scan(&core); step(); deliver(core);"
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
      "cores": [
        {
          "id": "c1",
          "x": 0,
          "y": 1,
          "power": 1,
          "label": "高速コア"
        }
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
      "chargers": [
        {
          "x": 2,
          "y": 1
        }
      ],
      "scanners": [
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
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "deliverCores": 1,
      "minCorePower": 3,
      "scanCount": 1,
      "requireSpatialCoreRules": true,
      "maxTicks": 9
    },
    "parTicks": 8
  },
  {
    "displayId": "4-13",
    "id": "5565fbf6-40de-53c4-912d-bd215afe50f2",
    "index": 109,
    "chapter": 4,
    "chapterTitle": "第4章 所有権を理解する",
    "stageKind": "puzzle",
    "title": "4-13. 火花の廊下でコアを守り抜け",
    "topicTag": "借用 + スパーク回避パズル",
    "kurumiIntro": "大切なエネルギーコアを抱えたまま、巡回スパークが守る狭い廊下を通り抜けるよ！`is_spark_ahead()` でスパークを見張りながら運ぼう！",
    "goalSummary": "スパークをかわしつつコア(0,2)を検査台(3,2)と強化台(4,2)へ運び(6,2)へ納品",
    "bookSectionTitle": "4.2 所有権 × 安全センサーの組み合わせ",
    "bookSummary": "センサー待機 `while is_spark_ahead() { wait_tick(1); }` を補助関数にまとめておくと、運搬コードがぐっと見やすくなります。",
    "bookKeyCode": "while is_spark_ahead() { wait_tick(1); }\nstep();",
    "starterCode": "fn step_avoid() {\n    while is_spark_ahead() {\n        wait_tick(1);\n    }\n    step();\n}\n\nfn main() {\n    // コアを拾って、スパークをかわしながら検査・強化・納品しよう！\n}",
    "solutionCode": "fn step_avoid() {\n    while is_spark_ahead() {\n        wait_tick(1);\n    }\n    step();\n}\n\nfn main() {\n    let mut core = grab_core();\n    step_avoid();\n    step_avoid();\n    step_avoid();\n    scan(&core);\n    step_avoid();\n    boost(&mut core);\n    step_avoid();\n    step_avoid();\n    deliver(core);\n}",
    "quickChips": [
      {
        "label": "step_avoid();",
        "insert": "step_avoid();\n    "
      },
      {
        "label": "scan(&core);",
        "insert": "scan(&core);\n    "
      },
      {
        "label": "boost(&mut core);",
        "insert": "boost(&mut core);\n    "
      },
      {
        "label": "deliver(core);",
        "insert": "deliver(core);\n    "
      }
    ],
    "hints": [
      "(0,2) で `let mut core = grab_core();` を呼ぼう。",
      "step_avoid() を3回で (3,2) 検査台(`scan(&core)`)、もう1回で (4,2) 強化台(`boost(&mut core)`)、あと2回で (6,2) 納品台(`deliver(core)`)！",
      "let mut core = grab_core(); step_avoid(); step_avoid(); step_avoid(); scan(&core); step_avoid(); boost(&mut core); step_avoid(); step_avoid(); deliver(core);"
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
          "x": 4,
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
      "cores": [
        {
          "id": "c1",
          "x": 0,
          "y": 2,
          "power": 1,
          "label": "輸送コア"
        }
      ],
      "scanners": [
        {
          "x": 3,
          "y": 2
        }
      ],
      "chargers": [
        {
          "x": 4,
          "y": 2
        }
      ],
      "deliveries": [
        {
          "x": 6,
          "y": 2
        }
      ],
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
          "initialIndex": 1
        },
        {
          "id": "sp2",
          "path": [
            {
              "x": 5,
              "y": 3
            },
            {
              "x": 5,
              "y": 2
            },
            {
              "x": 5,
              "y": 1
            },
            {
              "x": 5,
              "y": 2
            }
          ],
          "initialIndex": 0
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "deliverCores": 1,
      "minCorePower": 3,
      "scanCount": 1,
      "requireSpatialCoreRules": true
    },
    "parTicks": 12
  },
  {
    "displayId": "4-14",
    "id": "839a50b3-0e8d-5eab-8a16-e61279527412",
    "index": 110,
    "chapter": 4,
    "chapterTitle": "第4章 所有権を理解する",
    "stageKind": "puzzle",
    "title": "4-14. 実地搬入！歩いて拾って届けよう",
    "topicTag": "所有権 Move / 空間ルーティング",
    "kurumiIntro": "今回から本当に現地まで歩いてコアを拾い（`grab_core()`）、検査台に乗って `scan(&core)` し、納品台まで運んで `deliver(core)` する必要があるよ！手順を組み立ててね。",
    "goalSummary": "コア(1,1)を拾い、検査台(3,1)で scan(&core) してゴール(5,1)へ deliver",
    "bookSectionTitle": "4.1 & 4.2 空間ルーティング × 所有権",
    "bookSummary": "コアのある場所・検査台（`&T検査`）・納品台それぞれに実際に移動してから命令を呼ばないとエラーになります。`deliver(core)` は最後に呼びましょう！",
    "bookKeyCode": "step(); let core = grab_core();\nstep(2); scan(&core);\nstep(2); deliver(core);",
    "starterCode": "fn main() {\n    // (1,1)でコアを拾い、(3,1)の検査台で scan(&core) して、(5,1)へ deliver しよう！\n    step();\n}",
    "solutionCode": "fn main() {\n    step();\n    let core = grab_core();\n    step(2);\n    scan(&core);\n    step(2);\n    deliver(core);\n}",
    "quickChips": [
      {
        "label": "let core = grab_core();",
        "insert": "let core = grab_core();\n    "
      },
      {
        "label": "scan(&core);",
        "insert": "scan(&core);\n    "
      },
      {
        "label": "deliver(core);",
        "insert": "deliver(core);\n    "
      }
    ],
    "hints": [
      "(0,1) から1歩で (1,1) のコアを拾えるよ。そのあと2歩進んで (3,1) の `&T検査` 台の上に乗ろう！",
      "検査台で `scan(&core);` したら所有権はまだ手元にあるから、あと2歩進んで (5,1) で `deliver(core);`！",
      "step(); let core = grab_core(); step(2); scan(&core); step(2); deliver(core);"
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
      "cores": [
        {
          "id": "c1",
          "x": 1,
          "y": 1,
          "power": 1,
          "label": "空間コア"
        }
      ],
      "scanners": [
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
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "deliverCores": 1,
      "scanCount": 1,
      "requireSpatialCoreRules": true
    },
    "parTicks": 9
  },
  {
    "displayId": "4-15",
    "id": "982d2f3c-0ac0-53b8-a8c4-e8d038dd8fa4",
    "index": 111,
    "chapter": 4,
    "chapterTitle": "第4章 所有権を理解する",
    "title": "4-15. 参照と借用（&T と &mut T）",
    "topicTag": "&T 不変借用 / &mut T 可変借用",
    "kurumiIntro": "コアを渡さずにスキャン（`scan(&core)`）したり、許可付きで強化（`boost(&mut core)`）したりしよう！借用すれば所有権は手元に残るよ！",
    "goalSummary": "コアを1回スキャンし、⚡3以上に強化してゴールへ届けよう",
    "bookSectionTitle": "4.2 参照と借用 — & と &mut のルール",
    "bookSummary": "`&x` は「見るだけの一時貸出（不変借用）」、`&mut x` は「書き換えOKの一時貸出（可変借用）」です。`&mut` は同時に1つしか作れないため、安全にデータを変更できます。",
    "bookKeyCode": "let mut core = grab_core();\nscan(&core);\nboost(&mut core);\ndeliver(core);",
    "starterCode": "fn main() {\n    let mut core = grab_core();\n    // 1) &core でスキャンして、2) &mut core で強化しよう！\n    scan(&core);\n    \n    step(3);\n    deliver(core);\n}",
    "solutionCode": "fn main() {\n    let mut core = grab_core();\n    scan(&core);\n    boost(&mut core);\n    step(3);\n    deliver(core);\n}",
    "quickChips": [
      {
        "label": "scan(&core);",
        "insert": "scan(&core);\n    "
      },
      {
        "label": "boost(&mut core);",
        "insert": "boost(&mut core);\n    "
      }
    ],
    "hints": [
      "scan(&core); のあとに、可変借用（&mut）を使ってコアを強化する関数を呼ぼう！",
      "mut が付いているおかげで &mut core を作れるよ。boost(&mut core); を書いてみよう。",
      "scan(&core);\nboost(&mut core);"
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
      "cores": [
        {
          "id": "c1",
          "x": 0,
          "y": 1,
          "power": 1,
          "label": "強化コア"
        }
      ],
      "scanners": [
        {
          "x": 1,
          "y": 0
        }
      ],
      "chargers": [
        {
          "x": 2,
          "y": 0
        }
      ],
      "deliveries": [
        {
          "x": 3,
          "y": 1
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "scanCount": 1,
      "deliverCores": 1,
      "minCorePower": 3
    },
    "parTicks": 7
  },
  {
    "displayId": "4-16",
    "id": "ee757951-5d2f-5c76-ada5-6791b35593b6",
    "index": 112,
    "chapter": 4,
    "chapterTitle": "第4章 所有権を理解する",
    "stageKind": "puzzle",
    "title": "4-16. ダブル・ブーストで⚡5以上を目指せ！",
    "topicTag": "連続可変借用 &mut",
    "kurumiIntro": "この納品先ではパワー ⚡5 以上の超強力コアが必要だよ！初期パワー1のコアに `boost(&mut core);` を2回かけてパワーを +4 しよう！（ただし1回ずつ順番にね！）",
    "goalSummary": "強化台で2回 boost(&mut core) して ⚡5 にし、ゴール (4, 1) へ納品",
    "bookSectionTitle": "4.2 借用のスコープ — 1回ずつ順番に &mut する",
    "bookSummary": "同じ行の中で2つの `&mut core` を同時に作ることはできませんが、1行ずつ順番に呼べば前の可変借用が終わってから次の可変借用を始められます。",
    "bookKeyCode": "boost(&mut core);\nboost(&mut core);",
    "starterCode": "fn main() {\n    let mut core = grab_core();\n    step();\n    // 強化台の上で2回ブーストし、検査と納品をしよう！\n}",
    "solutionCode": "fn main() {\n    let mut core = grab_core();\n    step();\n    boost(&mut core);\n    boost(&mut core);\n    step();\n    scan(&core);\n    step(2);\n    deliver(core);\n}",
    "quickChips": [
      {
        "label": "boost(&mut core);",
        "insert": "boost(&mut core);\n    "
      },
      {
        "label": "scan(&core);",
        "insert": "scan(&core);\n    "
      },
      {
        "label": "deliver(core);",
        "insert": "deliver(core);\n    "
      }
    ],
    "hints": [
      "step() で (1,1) の強化台に乗ったら `boost(&mut core);` を2行に分けて2回呼ぼう（パワー 1→3→5！）。",
      "そのあと (2,1) で `scan(&core);` して (4,1) で `deliver(core);` だよ。",
      "let mut core = grab_core(); step(); boost(&mut core); boost(&mut core); step(); scan(&core); step(2); deliver(core);"
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
          "x": 0,
          "y": 1,
          "power": 1,
          "label": "高出力コア"
        }
      ],
      "chargers": [
        {
          "x": 1,
          "y": 1
        }
      ],
      "scanners": [
        {
          "x": 2,
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
      "minCorePower": 5,
      "scanCount": 1,
      "requireSpatialCoreRules": true
    },
    "parTicks": 10
  },
  {
    "displayId": "4-17",
    "id": "0c595cd1-d38e-5bce-8a42-e6c45af0dd2b",
    "index": 113,
    "chapter": 4,
    "chapterTitle": "第4章 所有権を理解する",
    "stageKind": "puzzle",
    "title": "4-17. スイッチでゲートを開いてコアを運べ",
    "topicTag": "スイッチ連動 + コア搬送",
    "kurumiIntro": "エネルギーコアと納品台のあいだを閉じられたゲートが塞いでいるよ！先にコアを拾うか、先にスイッチを押すか――順番を間違えるとゲートにぶつかっちゃうパズルだよ！",
    "goalSummary": "スイッチ(1,3)とコア(2,1)を回り、強化・検査してゴール(5,1)へ納品",
    "bookSectionTitle": "4.1 & 4.2 手順の組み立て（依存関係パズル）",
    "bookSummary": "すべての条件（スイッチ、コア拾得、強化、検査、納品）を1回の走行で満たすための空間ルートを逆算しましょう。",
    "bookKeyCode": "step();\nturn_right();\nstep(2);",
    "starterCode": "fn main() {\n    // 先にスイッチ(1,3)を押す？ それともコア(2,1)を拾う？ 盤面を見て組み立てよう！\n    step();\n}",
    "solutionCode": "fn main() {\n    step();\n    turn_right();\n    step(2);\n    turn_left();\n    turn_left();\n    step(2);\n    turn_right();\n    step();\n    let mut core = grab_core();\n    step();\n    boost(&mut core);\n    step(2);\n    deliver(core);\n}",
    "quickChips": [
      {
        "label": "let mut core = grab_core();",
        "insert": "let mut core = grab_core();\n    "
      },
      {
        "label": "boost(&mut core);",
        "insert": "boost(&mut core);\n    "
      },
      {
        "label": "deliver(core);",
        "insert": "deliver(core);\n    "
      }
    ],
    "hints": [
      "(1,1) まで来たらまず南へ2歩降りて (1,3) のスイッチを踏んでから北へ2歩戻ろう！",
      "北へ戻って東を向き、1歩進んだ (2,1) でコアを拾い、次の (3,1) の強化台で `boost(&mut core);`！",
      "開いたゲート (4,1) を通り、(5,1) で `deliver(core);` でクリアだよ！"
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
          "y": 3
        }
      ],
      "cores": [
        {
          "id": "c1",
          "x": 2,
          "y": 1,
          "power": 1,
          "label": "扉向こうコア"
        }
      ],
      "chargers": [
        {
          "x": 3,
          "y": 1
        }
      ],
      "gates": [
        {
          "x": 4,
          "y": 1,
          "openTicks": 1,
          "closedTicks": 0,
          "linkedSwitch": {
            "x": 1,
            "y": 3
          }
        }
      ],
      "deliveries": [
        {
          "x": 5,
          "y": 1
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "deliverCores": 1,
      "minCorePower": 3,
      "requireAllSwitches": true,
      "requireSpatialCoreRules": true
    },
    "parTicks": 17
  },
  {
    "displayId": "4-18",
    "id": "f5a0f239-cfc0-553b-8c39-f24be2137f2e",
    "index": 114,
    "chapter": 4,
    "chapterTitle": "第4章 所有権を理解する",
    "title": "4-18. スライス記法（&arr[1..3]）",
    "topicTag": "スライス &[T]",
    "kurumiIntro": "配列の全部じゃなく「1番目から2番目までの2個だけ」を切り出して検査機 `inspect_slice(...)` に渡そう！`&batch[1..3]` がスライスだよ。",
    "goalSummary": "スライスで2個だけ検査してゴール (3, 1) へ進もう",
    "bookSectionTitle": "4.3 スライス型 — コレクションの一部への参照",
    "bookSummary": "スライス `&vec[開始..終了]` を使うと、データをコピーすることなく配列の一部だけを指し示すことができます（`1..3` は添字1と2の2要素を指します）。",
    "bookKeyCode": "let slice = &batch[1..3];\ninspect_slice(slice);",
    "starterCode": "fn main() {\n    let batch = conveyor_batch();\n    // batch の [1..3] をスライスで切り出して検査しよう！\n    let part = &batch[0..1];\n    inspect_slice(part);\n    step(3);\n}",
    "solutionCode": "fn main() {\n    let batch = conveyor_batch();\n    let part = &batch[1..3];\n    inspect_slice(part);\n    step(3);\n}",
    "quickChips": [
      {
        "label": "&batch[1..3]",
        "insert": "&batch[1..3]"
      },
      {
        "label": "inspect_slice(part);",
        "insert": "inspect_slice(part);\n    "
      }
    ],
    "hints": [
      "今は &batch[0..1] になっているから1個しか検査されていないよ！",
      "&batch[1..3] に変えると2個分（長さ2）のスライスになるよ。",
      "let part = &batch[1..3];"
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
        10,
        20,
        30,
        40
      ],
      "scanners": [
        {
          "x": 1,
          "y": 0
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "scanCount": 2
    },
    "parTicks": 4
  },
  {
    "displayId": "4-19",
    "id": "be100168-6dd5-54c6-b965-8e2b5f48f2bd",
    "index": 115,
    "chapter": 4,
    "chapterTitle": "第4章 所有権を理解する",
    "title": "4-19. 省略スライス &arr[..3] と &arr[2..]",
    "topicTag": "範囲の開始・終了省略",
    "kurumiIntro": "先頭から切り出すときは `0` を省略して `&batch[..3]`、最後まで切り出すときは `&batch[2..]` って書けるんだよ！3個ぶん検査して進んでみよう。",
    "goalSummary": "省略スライスで 3個検査し、ゴール (3, 1) へ",
    "bookSectionTitle": "4.3 スライスの省略記法",
    "bookSummary": "`&s[0..3]` は `&s[..3]` と同じ意味です。同様に末尾まで指すときは `&s[2..]`、全体を指すときは `&s[..]` と書けます。",
    "bookKeyCode": "let front = &batch[..3];\nlet back = &batch[1..];",
    "starterCode": "fn main() {\n    let batch = conveyor_batch();\n    // 先頭から3個（..3）をスライスして検査しよう！\n    let part = &batch[..1];\n    inspect_slice(part);\n    step(3);\n}",
    "solutionCode": "fn main() {\n    let batch = conveyor_batch();\n    let part = &batch[..3];\n    inspect_slice(part);\n    step(3);\n}",
    "quickChips": [
      {
        "label": "&batch[..3]",
        "insert": "&batch[..3]"
      }
    ],
    "hints": [
      "&batch[..1] だと1個しか入っていないよ！",
      "&batch[..3] にすれば先頭の3個がスライスされるよ。",
      "let part = &batch[..3];"
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
        10,
        20,
        30,
        40
      ],
      "scanners": [
        {
          "x": 1,
          "y": 0
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "scanCount": 3
    },
    "parTicks": 4
  },
  {
    "displayId": "4-20",
    "id": "9ba6d447-0926-51b4-b323-bcd6e3074cc8",
    "index": 116,
    "chapter": 4,
    "chapterTitle": "第4章 所有権を理解する",
    "title": "4-20. スライスの長さ .len() で歩行",
    "topicTag": "slice.len() / 検査戻り値",
    "kurumiIntro": "切り出したスライスは `.len()` や `inspect_slice(part)` の戻り値で「何個あるか」が分かるんだ！その個数だけ歩いてゴールしてみよう！",
    "goalSummary": "スライス検査の個数 4 をそのまま step() に渡して (4, 1) へ",
    "bookSectionTitle": "4.3 スライスの長さとデータ共有",
    "bookSummary": "スライスは開始位置と長さ情報だけを借りて持つため、軽量で高速です。`.len()` で要素数を調べられます。",
    "bookKeyCode": "let part = &batch[1..5];\nlet count = inspect_slice(part);\nstep(count);",
    "starterCode": "fn main() {\n    let batch = conveyor_batch();\n    // batch は5個あるよ。[1..5] をスライスすると長さ 4 になる！\n    let part = &batch[1..3];\n    let count = inspect_slice(part);\n    step(count);\n}",
    "solutionCode": "fn main() {\n    let batch = conveyor_batch();\n    let part = &batch[1..5];\n    let count = inspect_slice(part);\n    step(count);\n}",
    "quickChips": [
      {
        "label": "&batch[1..5]",
        "insert": "&batch[1..5]"
      }
    ],
    "hints": [
      "今は [1..3] なので count が 2 になっているよ。ゴールは (4, 1) だから4個必要だね！",
      "&batch[1..5] に変えて 4個ぶん検査＋4歩移動しよう！",
      "let part = &batch[1..5];"
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
        10,
        20,
        30,
        40,
        50
      ],
      "scanners": [
        {
          "x": 1,
          "y": 0
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "scanCount": 4
    },
    "parTicks": 5
  },
  {
    "displayId": "4-21",
    "id": "e059ebd7-5f3d-55e8-afda-279711b587a2",
    "index": 117,
    "chapter": 4,
    "chapterTitle": "第4章 所有権を理解する",
    "stageKind": "puzzle",
    "title": "4-21. スライス &[i32] で区間検査＆コンベア",
    "topicTag": "スライス &[T] / インデックス",
    "kurumiIntro": "`conveyor_batch()` から取り出したベクタの一部だけを `&batch[1..4]` のようにスライスで切り出して検査しよう！コンベアの押し出しを計算して `(n + 1)` 歩でぴったりゴールしよう！",
    "goalSummary": "スライスを長さ3で inspect_slice し、スイッチ経由でゴール (5, 1) へ",
    "bookSectionTitle": "4.3 スライス型 — 所有権を持たずに一部分を参照する",
    "bookSummary": "`&vec[1..4]` は配列のインデックス1〜3（合計3要素）をコピーなしで指し示すスライス参照です。",
    "bookKeyCode": "let batch = conveyor_batch();\nlet n = inspect_slice(&batch[1..4]);",
    "starterCode": "fn main() {\n    let batch = conveyor_batch();\n    // 長さ3のスライスを inspect_slice して、コンベア分の歩数を調整して進もう！\n    let part = &batch[0..1];\n    let n = inspect_slice(part);\n    step(n);\n}",
    "solutionCode": "fn main() {\n    let batch = conveyor_batch();\n    let part = &batch[1..4];\n    let n = inspect_slice(part);\n    step(n + 1);\n}",
    "quickChips": [
      {
        "label": "&batch[1..4]",
        "insert": "&batch[1..4]"
      },
      {
        "label": "step(n + 1);",
        "insert": "step(n + 1);\n    "
      }
    ],
    "hints": [
      "part を `&batch[1..4]` に変えると要素数が 3 になって `scanCount: 3` の条件を満たすよ！",
      "(2,1) の東コンベアに乗ると自動で (3,1) のスイッチに運ばれるため、5マス先のゴールには4歩（n + 1）で着くよ！",
      "let part = &batch[1..4];\nlet n = inspect_slice(part);\nstep(n + 1);"
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
        4,
        7,
        10,
        12,
        15
      ],
      "conveyors": [
        {
          "x": 2,
          "y": 1,
          "dir": 0
        }
      ],
      "switches": [
        {
          "x": 3,
          "y": 1
        }
      ],
      "gates": [
        {
          "x": 4,
          "y": 1,
          "openTicks": 1,
          "closedTicks": 0,
          "linkedSwitch": {
            "x": 3,
            "y": 1
          }
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "scanCount": 3,
      "requireAllSwitches": true
    },
    "parTicks": 6
  },
  {
    "displayId": "4-22",
    "id": "ebdddaaf-e4ed-5151-a9a4-dd654d3c9eb4",
    "index": 118,
    "chapter": 4,
    "chapterTitle": "第4章 所有権を理解する",
    "stageKind": "challenge",
    "title": "4-22. 文字列スライス & コア納品の二重借用パズル",
    "topicTag": "スライス + &core / &mut core",
    "kurumiIntro": "スライス検査（2要素以上）と、コアの強化・スキャン・納品をすべて順番通りにこなす実戦パズルだよ！どの順番なら所有権エラーにならず最短で着けるかな？",
    "goalSummary": "スライス2要素以上を検査し、コア(1,1)を⚡3以上・スキャンして(5,1)へ納品",
    "bookSectionTitle": "4.3 借用とスライスの総合応用",
    "bookSummary": "スライス `&batch[..2]` とコアの借用 `&core` / `&mut core` を正しく組み合わせ、Move 前に必要な検査を完了させましょう。",
    "bookKeyCode": "inspect_slice(&batch[0..2]);\nboost(&mut core);\nscan(&core);",
    "starterCode": "fn main() {\n    let batch = conveyor_batch();\n    // batch の先頭2要素を検査し、コア(1,1)を強化・検査・納品しよう！\n    step();\n}",
    "solutionCode": "fn main() {\n    let batch = conveyor_batch();\n    inspect_slice(&batch[0..2]);\n    step();\n    let mut core = grab_core();\n    step();\n    boost(&mut core);\n    step();\n    scan(&core);\n    step();\n    deliver(core);\n}",
    "quickChips": [
      {
        "label": "inspect_slice(&batch[0..2]);",
        "insert": "inspect_slice(&batch[0..2]);\n    "
      },
      {
        "label": "boost(&mut core);",
        "insert": "boost(&mut core);\n    "
      },
      {
        "label": "scan(&core);",
        "insert": "scan(&core);\n    "
      }
    ],
    "hints": [
      "最初に `inspect_slice(&batch[0..2]);` で2要素検査し、step() して (1,1) で `let mut core = grab_core();` しよう！",
      "次は (2,1) で `boost(&mut core);`、step() 1歩で (3,1) コンベアに乗って (4,1) 検査台へ着くからそこで `scan(&core);`！",
      "最後に step() で (5,1) へ着き、`deliver(core);` でクリア！"
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
        10,
        20,
        30,
        40
      ],
      "cores": [
        {
          "id": "c1",
          "x": 1,
          "y": 1,
          "power": 1,
          "label": "出荷コア"
        }
      ],
      "chargers": [
        {
          "x": 2,
          "y": 1
        }
      ],
      "conveyors": [
        {
          "x": 3,
          "y": 1,
          "dir": 0
        }
      ],
      "scanners": [
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
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "deliverCores": 1,
      "minCorePower": 3,
      "scanCount": 3,
      "requireSpatialCoreRules": true,
      "maxTicks": 11
    },
    "parTicks": 10
  },
  {
    "displayId": "4-23",
    "id": "9173a523-fa9e-5b50-adc2-b98d38e4c2a7",
    "index": 119,
    "chapter": 4,
    "chapterTitle": "第4章 所有権を理解する",
    "title": "4-23. 所有権の総仕上げ：借用・強化・スライス",
    "topicTag": "第4章 総合実践",
    "kurumiIntro": "所有権の総合課題だよ！コンベアのスライス検査（2個）と、コアの強化（&mut で⚡3以上）＆納品を全部組み合わせて、U字コースのゴールへ！",
    "goalSummary": "スライス検査2個＋コア強化(⚡3)＋納品＋U字ゴール (0, 3) へ",
    "bookSectionTitle": "第4章まとめ — 所有権・借用・スライス",
    "bookSummary": "Move（所有権の移動）、`&T`（不変借用）、`&mut T`（可変借用）、`&[T]`（スライス）はRustの核となる4つの概念です。",
    "bookKeyCode": "inspect_slice(&batch[..2]);\nboost(&mut core);\ndeliver(core);",
    "starterCode": "fn main() {\n    let batch = conveyor_batch();\n    inspect_slice(&batch[..2]);\n    let mut core = grab_core();\n    // core を &mut で強化してから U字コースを進んで納品しよう！\n    \n    step(3);\n    turn_right();\n    step(2);\n    turn_right();\n    step(3);\n    deliver(core);\n}",
    "solutionCode": "fn main() {\n    let batch = conveyor_batch();\n    inspect_slice(&batch[..2]);\n    let mut core = grab_core();\n    boost(&mut core);\n    step(3);\n    turn_right();\n    step(2);\n    turn_right();\n    step(3);\n    deliver(core);\n}",
    "quickChips": [
      {
        "label": "boost(&mut core);",
        "insert": "boost(&mut core);\n    "
      },
      {
        "label": "deliver(core);",
        "insert": "deliver(core);\n    "
      }
    ],
    "hints": [
      "スライス検査（2個）と U字移動・納品は書かれているよ！あとはコアのパワーを⚡3以上にするだけ。",
      "step(3); の前に `boost(&mut core);` を追加しよう！",
      "let mut core = grab_core();\nboost(&mut core);"
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
        "x": 0,
        "y": 3
      },
      "conveyorItems": [
        10,
        20,
        30
      ],
      "cores": [
        {
          "id": "c1",
          "x": 0,
          "y": 1,
          "power": 1,
          "label": "所有権コア"
        }
      ],
      "scanners": [
        {
          "x": 1,
          "y": 0
        }
      ],
      "chargers": [
        {
          "x": 2,
          "y": 0
        }
      ],
      "deliveries": [
        {
          "x": 0,
          "y": 3
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "scanCount": 2,
      "deliverCores": 1,
      "minCorePower": 3
    },
    "parTicks": 12
  },
  {
    "displayId": "4-24",
    "id": "e754be20-628a-5af1-9496-0caceada82d4",
    "index": 120,
    "chapter": 4,
    "chapterTitle": "第4章 所有権を理解する",
    "stageKind": "challenge",
    "title": "4-24. 第4章マスター：所有権グランドチャレンジ",
    "topicTag": "所有権の最終チャレンジ / 所有権完成",
    "kurumiIntro": "所有権の最終関門だよ！2つのコアを回収して、スイッチ連動ゲートを解き、強化と検査とスパーク回避をすべてこなして2つとも納品しよう！所有権マスターへの第一歩だ！",
    "goalSummary": "\"CHALLENGE_COMPLETE\" を出力し、2つのコアを強化・検査して(6,3)へ納品",
    "bookSectionTitle": "4章マスター — 所有権の総合実習",
    "bookSummary": "ここまで学んだ制御フロー・関数・所有権・可変/不変借用のすべてを使って2連続の精密輸送ミッションを達成します。",
    "bookKeyCode": "println!(\"CHALLENGE_COMPLETE\");",
    "starterCode": "fn step_wait() {\n    while !is_gate_open() || is_spark_ahead() {\n        wait_tick(1);\n    }\n    step();\n}\n\nfn main() {\n    println!(\"CHALLENGE_COMPLETE\");\n    // 左のAコア(1,1)と下のBコア(4,3)を両方 (6,3) の納品台へ運ぼう！\n}",
    "solutionCode": "fn step_wait() {\n    while !is_gate_open() || is_spark_ahead() {\n        wait_tick(1);\n    }\n    step();\n}\n\nfn main() {\n    println!(\"CHALLENGE_COMPLETE\");\n    step_wait();\n    let mut c1 = grab_core();\n    step_wait();\n    boost(&mut c1);\n    step_wait();\n    scan(&c1);\n    turn_right();\n    step_wait();\n    step_wait();\n    turn_left();\n    step_wait();\n    step_wait();\n    step_wait();\n    deliver(c1);\n    turn_right();\n    turn_right();\n    step_wait();\n    step_wait();\n    let c2 = grab_core();\n    turn_right();\n    turn_right();\n    step_wait();\n    step_wait();\n    deliver(c2);\n}",
    "quickChips": [
      {
        "label": "step_wait();",
        "insert": "step_wait();\n    "
      },
      {
        "label": "let mut c1 = grab_core();",
        "insert": "let mut c1 = grab_core();\n    "
      },
      {
        "label": "boost(&mut c1);",
        "insert": "boost(&mut c1);\n    "
      },
      {
        "label": "scan(&c1);",
        "insert": "scan(&c1);\n    "
      },
      {
        "label": "deliver(c1);",
        "insert": "deliver(c1);\n    "
      }
    ],
    "hints": [
      "上の廊下：`(1,1)`でAコア取得→`(2,1)`強化台で`boost(&mut c1)`→`(3,1)`検査台で`scan(&c1)`兼スイッチON！",
      "右折して下の廊下`(3,3)`へ降りたら、東へ3歩の`(6,3)`まで行って`deliver(c1)`！",
      "そこから西へ2歩戻って`(4,3)`のBコアを拾い、反転して`(6,3)`へ`deliver(c2)`しよう！"
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
      "cores": [
        {
          "id": "c1",
          "x": 1,
          "y": 1,
          "power": 1,
          "label": "コアA"
        },
        {
          "id": "c2",
          "x": 4,
          "y": 3,
          "power": 3,
          "label": "コアB"
        }
      ],
      "chargers": [
        {
          "x": 2,
          "y": 1
        }
      ],
      "scanners": [
        {
          "x": 3,
          "y": 1
        }
      ],
      "switches": [
        {
          "x": 3,
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
              "y": 2
            },
            {
              "x": 5,
              "y": 3
            },
            {
              "x": 5,
              "y": 4
            },
            {
              "x": 5,
              "y": 3
            }
          ],
          "initialIndex": 0
        }
      ],
      "deliveries": [
        {
          "x": 6,
          "y": 3
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "deliverCores": 2,
      "minCorePower": 3,
      "scanCount": 1,
      "requireAllSwitches": true,
      "requireSpatialCoreRules": true,
      "stdoutIncludes": [
        "CHALLENGE_COMPLETE"
      ]
    },
    "parTicks": 29
  }
];
