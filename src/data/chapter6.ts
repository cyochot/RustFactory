import { StageDefinition } from '../types/game';

export const CHAPTER_6_STAGES: StageDefinition[] = [
  {
    "displayId": "6-1",
    "id": "c7db5262-fe5d-5bd7-ada8-b547ecb72e20",
    "index": 151,
    "chapter": 6,
    "chapterTitle": "第6章 数当てゲームのプログラミング",
    "title": "6-1. ひみつダイヤルと Ordering 比較",
    "topicTag": "Ordering / match",
    "kurumiIntro": "工房のダイヤル錠を当てよう！1〜10の数字を試して `try_dial(guess)` の結果（Less / Greater / Equal）で当たりを見つけてね！",
    "goalSummary": "try_dial() で秘密の数字（Equal）を当ててゴール (3, 1) へ",
    "bookSectionTitle": "第6章 数当てゲーム — Ordering と match 比較",
    "bookSummary": "Rustで2つの数を比べる `.cmp()` や判定結果には `Ordering::Less`（小さい）、`Ordering::Greater`（大きい）、`Ordering::Equal`（一致）が使われます。`match` で3通りを漏れなく扱えます。",
    "bookKeyCode": "match try_dial(n) {\n    Ordering::Less => {},\n    Ordering::Greater => {},\n    Ordering::Equal => { break; },\n}",
    "starterCode": "fn main() {\n    for guess in 1..=10 {\n        match try_dial(guess) {\n            Ordering::Less => println!(\"小さい!\"),\n            Ordering::Greater => println!(\"大きい!\"),\n            // Equal のときゴールへ進もう！\n            Ordering::Equal => {\n                \n            },\n        }\n    }\n}",
    "solutionCode": "fn main() {\n    for guess in 1..=10 {\n        match try_dial(guess) {\n            Ordering::Less => println!(\"小さい!\"),\n            Ordering::Greater => println!(\"大きい!\"),\n            Ordering::Equal => {\n                step(3);\n                break;\n            },\n        }\n    }\n}",
    "quickChips": [
      {
        "label": "step(歩数);",
        "insert": "step(/* 歩数 */);\n                "
      },
      {
        "label": "break;",
        "insert": "break;\n                "
      }
    ],
    "hints": [
      "Ordering::Equal が見つかったとき、ゴールまで3歩進む命令と break; を書こう！",
      "Equal の { } の中に step(3); と break; を入れればOKだよ。",
      "Ordering::Equal => {\n    step(3);\n    break;\n}"
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
      "dial": {
        "x": 1,
        "y": 0,
        "secret": 4
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "dialSolved": true
    },
    "parTicks": 7
  },
  {
    "displayId": "6-2",
    "id": "7fd4e25e-40fb-5133-adee-a1a0221e491d",
    "index": 152,
    "chapter": 6,
    "chapterTitle": "第6章 数当てゲームのプログラミング",
    "title": "6-2. 範囲探索と当たり後のL字移動",
    "topicTag": "for ..= / Ordering",
    "kurumiIntro": "今度の秘密の数字は6〜10のどこかにあるみたい！範囲 `6..=10` で探して、開いた扉の先のL字通路を通ってゴールしよう！",
    "goalSummary": "6..=10 でダイヤル（secret: 7）を解錠しゴール (2, 3) へ",
    "bookSectionTitle": "2.2 範囲式 6..=10 と比較ループ",
    "bookSummary": "`a..=b` は `b` を含む範囲を表します。探索範囲を絞ることで試行回数を減らし、当たったら `break;` で素早く抜け出せます。",
    "bookKeyCode": "for guess in 6..=10 {\n    if ... { break; }\n}",
    "starterCode": "fn main() {\n    // 秘密の数字は 7 だよ！今は 1..=5 までしか探していないよ\n    for guess in 1..=5 {\n        match try_dial(guess) {\n            Ordering::Equal => {\n                step(2);\n                turn_right();\n                step(2);\n                break;\n            },\n            _ => {},\n        }\n    }\n}",
    "solutionCode": "fn main() {\n    for guess in 6..=10 {\n        match try_dial(guess) {\n            Ordering::Equal => {\n                step(2);\n                turn_right();\n                step(2);\n                break;\n            },\n            _ => {},\n        }\n    }\n}",
    "quickChips": [
      {
        "label": "6..=10",
        "insert": "6..=10"
      },
      {
        "label": "break;",
        "insert": "break;\n"
      }
    ],
    "hints": [
      "1..=5 の範囲だと 7 に届く前にループが終わってしまうよ！",
      "for guess in 6..=10 に変えてみよう。",
      "for guess in 6..=10 {"
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
      "dial": {
        "x": 1,
        "y": 0,
        "secret": 7
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "dialSolved": true
    },
    "parTicks": 7
  },
  {
    "displayId": "6-3",
    "id": "d9193199-6424-5df5-b90b-3fd3665c6a67",
    "index": 153,
    "chapter": 6,
    "chapterTitle": "第6章 数当てゲームのプログラミング",
    "title": "6-3. .cmp() メソッドで数字比べ",
    "topicTag": ".cmp(&target) / Ordering",
    "kurumiIntro": "本物の数当てゲームみたいに、2つの数字を `guess.cmp(&secret)` で直接比べてみよう！一致（Equal）した数字をダイヤルに入力してね！",
    "goalSummary": "cmp で目標 5 を見つけて \"MATCH: 5\" を出力しゴールへ",
    "bookSectionTitle": "2.3 cmp メソッドと参照渡し &secret",
    "bookSummary": "`a.cmp(&b)` は `a` と `b` を比較して `Ordering` を返します。比べる相手の数字を所有権ごと渡さなくて済むよう `&b` と参照で渡すのがRust流です。",
    "bookKeyCode": "match guess.cmp(&secret) {\n    Ordering::Equal => ...,\n    _ => {},\n}",
    "starterCode": "fn main() {\n    let secret = 5;\n    for guess in 1..=8 {\n        match guess.cmp(&secret) {\n            Ordering::Less => {},\n            Ordering::Greater => {},\n            Ordering::Equal => {\n                // try_dial(guess) を呼んで、MATCH を出力し、ゴールへ進もう！\n                try_dial(guess);\n                println!(\"MATCH: {}\", 0);\n                step(3);\n                break;\n            },\n        }\n    }\n}",
    "solutionCode": "fn main() {\n    let secret = 5;\n    for guess in 1..=8 {\n        match guess.cmp(&secret) {\n            Ordering::Less => {},\n            Ordering::Greater => {},\n            Ordering::Equal => {\n                try_dial(guess);\n                println!(\"MATCH: {}\", guess);\n                step(3);\n                break;\n            },\n        }\n    }\n}",
    "quickChips": [
      {
        "label": "guess.cmp(&secret)",
        "insert": "guess.cmp(&secret)"
      },
      {
        "label": "println!(\"MATCH: {}\", guess);",
        "insert": "println!(\"MATCH: {}\", guess);"
      }
    ],
    "hints": [
      "println!(\"MATCH: {}\", 0); になっているから、見つかった数字 guess が表示されないよ！",
      "0 を guess に書き換えてみよう！",
      "println!(\"MATCH: {}\", guess);"
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
      "dial": {
        "x": 2,
        "y": 0,
        "secret": 5
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "dialSolved": true,
      "stdoutIncludes": [
        "MATCH: 5"
      ]
    },
    "parTicks": 6
  },
  {
    "displayId": "6-4",
    "id": "eb488e99-3eeb-56ad-8db6-716fca47d7b3",
    "index": 154,
    "chapter": 6,
    "chapterTitle": "第6章 数当てゲームのプログラミング",
    "title": "6-4. ゲート越しダイヤル解錠",
    "topicTag": "Ordering・制御の組み合わせ",
    "kurumiIntro": "ダイヤルを当てたあと、前にある蒸気ゲートが開いているかも確認して進もう！`is_gate_open()` が閉じていたら `wait_tick(1)` してね。",
    "goalSummary": "ダイヤル(secret: 3)を解錠し、蒸気ゲートを抜けて (4, 1) へ",
    "bookSectionTitle": "第6章 数当てゲーム — Ordering・match・制御の組み合わせ",
    "bookSummary": "数当ての `match` 比較と、ループ中の状態チェックを組み合わせることで、仕掛け付きの扉を安全に突破できるようになります。",
    "bookKeyCode": "match try_dial(n) {\n    Ordering::Equal => { ... break; },\n    _ => {},\n}",
    "starterCode": "fn main() {\n    for n in 1..=5 {\n        match try_dial(n) {\n            Ordering::Equal => {\n                step(1);\n                // ここでゲートが閉まっていたら 1拍待ってから 3歩進もう！\n                if !is_gate_open() {\n                    \n                }\n                step(3);\n                break;\n            },\n            _ => {},\n        }\n    }\n}",
    "solutionCode": "fn main() {\n    for n in 1..=5 {\n        match try_dial(n) {\n            Ordering::Equal => {\n                step(1);\n                if !is_gate_open() {\n                    wait_tick(1);\n                }\n                step(3);\n                break;\n            },\n            _ => {},\n        }\n    }\n}",
    "quickChips": [
      {
        "label": "wait_tick(1);",
        "insert": "wait_tick(1);\n                "
      },
      {
        "label": "is_gate_open()",
        "insert": "is_gate_open()"
      }
    ],
    "hints": [
      "try_dial を3回試したあと step(1) すると、ちょうどゲート(2, 1)の手前で閉まっているかも！",
      "if !is_gate_open() { wait_tick(1); } の中に wait_tick(1); を書こう！",
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
      "dial": {
        "x": 1,
        "y": 0,
        "secret": 3
      },
      "gates": [
        {
          "x": 2,
          "y": 1,
          "openTicks": 2,
          "closedTicks": 2,
          "initialOffset": 2
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "dialSolved": true
    },
    "parTicks": 9
  },
  {
    "displayId": "6-5",
    "id": "d78a5e8c-49cf-5a67-85b6-81d77e50f861",
    "index": 155,
    "chapter": 6,
    "chapterTitle": "第6章 数当てゲームのプログラミング",
    "stageKind": "puzzle",
    "title": "6-5. 変数の影（シャドーイング）と座標比較",
    "topicTag": "cmp(&target) / 変数計算",
    "kurumiIntro": "同じ変数名 `steps` を `let steps = ...;` で新しく作り直す「シャドーイング」と `.cmp()` を組み合わせて、火花に気をつけながら進もう！",
    "goalSummary": "ダイヤル(18)を解いて \"OPEN!\" を出力し、5歩進んでゴール (5, 1) に到達",
    "bookSectionTitle": "6章 & 2.1 シャドーイングと cmp",
    "bookSummary": "Rustでは `let x = x * 2;` のように同じ名前で変数を上書き（シャドーイング）して型や値を整理できます。",
    "bookKeyCode": "let guess = base * 2;\nmatch guess.cmp(&target) { ... }",
    "starterCode": "fn main() {\n    // 【達成条件】\n    // - ゴール到達: (5, 1)\n    // - ダイヤル解除: 値 18 を求めて try_dial(...) を呼ぶ\n    // - 標準出力(println!): \"OPEN!\" を出力\n    let target_dial = 18; // ダイヤル解除コード（18 を計算して try_dial へ）\n    let expected_output = \"OPEN!\"; // println! で出力に含める文字列\n    let base = 9;\n    // シャドーイングで base を 2倍(18) にし、try_dial(base) で \"OPEN!\" を出力しよう！\n    \n}",
    "solutionCode": "fn main() {\n    let base = 9;\n    let base = base * 2;\n    match try_dial(base) {\n        Ordering::Equal => println!(\"OPEN!\"),\n        _ => {},\n    }\n    step(2);\n    wait_tick(1);\n    step(3);\n}",
    "quickChips": [
      {
        "label": "let base = base * 2;",
        "insert": "let base = base * 2;\n    "
      },
      {
        "label": "try_dial(base)",
        "insert": "try_dial(base)"
      },
      {
        "label": "wait_tick(1);",
        "insert": "wait_tick(1);\n    "
      }
    ],
    "hints": [
      "let base = 9; として、let base = base * 2; でシャドーイングすると 18 になるよ！",
      "try_dial(base) で Ordering::Equal なら println!(\"OPEN!\"); し、x=3 の巡回スパークを避けるため step(2); wait_tick(1); step(3); で進もう！",
      "fn main() {\n    let base = 9;\n    let base = base * 2;\n    match try_dial(base) {\n        Ordering::Equal => println!(\"OPEN!\"),\n        _ => {},\n    }\n    step(2);\n    wait_tick(1);\n    step(3);\n}"
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
        "y": 1
      },
      "dial": {
        "x": 1,
        "y": 1,
        "secret": 18
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
      "dialSolved": true,
      "stdoutIncludes": [
        "OPEN!"
      ]
    },
    "parTicks": 9
  },
  {
    "displayId": "6-6",
    "id": "e8facaca-88b5-5973-98f1-4248dcdad4d0",
    "index": 156,
    "chapter": 6,
    "chapterTitle": "第6章 数当てゲームのプログラミング",
    "stageKind": "puzzle",
    "title": "6-6. enum ダイヤル探索機",
    "topicTag": "enum Ordering + ダイヤル解錠",
    "kurumiIntro": "秘宝ダイヤルの判定結果 `Ordering` も実は `enum` だよ！`Ordering::Less`, `Greater`, `Equal` を `match` で振り分けて秘密の番号を探り当て、ゲートを開いて進もう！",
    "goalSummary": "while loop と match try_dial(g) でダイヤルを解錠しゴール (5, 1) へ",
    "bookSectionTitle": "6.2 標準 enum Ordering のパターンマッチング",
    "bookSummary": "比較結果を表す `Ordering::{Less, Greater, Equal}` を `match` で受けるのは Rust でとてもよく見る定番パターンです。",
    "bookKeyCode": "match try_dial(g) { Ordering::Equal => { break; }, ... }",
    "starterCode": "fn main() {\n    // 【達成条件】\n    // - ゴール到達: (5, 1)\n    // - 全スイッチ作動: (2, 1)\n    // - ダイヤル解除: try_dial(guess) が Ordering::Equal になる値を探す\n    let mut guess = 1;\n    // loop と match try_dial(guess) でダイヤルを解除し、ゴールへ向かおう！\n    \n}",
    "solutionCode": "fn main() {\n    let mut guess = 1;\n    loop {\n        match try_dial(guess) {\n            Ordering::Less => guess += 1,\n            Ordering::Greater => guess -= 1,\n            Ordering::Equal => { break; },\n        }\n    }\n    step(5);\n}",
    "quickChips": [
      {
        "label": "Ordering::Equal => { break; },",
        "insert": "Ordering::Equal => { break; },"
      }
    ],
    "hints": [
      "Ordering を match で分岐して try_dial(g) を探索しよう！Less なら g += 1、Greater なら g -= 1、Equal なら { break; } だよ！",
      "ダイヤルが解錠できたら step(5); でゲートを抜けてゴール (5, 1) へ進もう。",
      "fn main() {\n    let mut guess = 1;\n    loop {\n        match try_dial(guess) {\n            Ordering::Less => guess += 1,\n            Ordering::Greater => guess -= 1,\n            Ordering::Equal => { break; },\n        }\n    }\n    step(5);\n}"
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
        "secret": 4
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
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "dialSolved": true,
      "requireAllSwitches": true
    },
    "parTicks": 10
  },
  {
    "displayId": "6-7",
    "id": "bffca818-f6e4-50f8-b50f-4ff61be8ee4e",
    "index": 157,
    "chapter": 6,
    "chapterTitle": "第6章 数当てゲームのプログラミング",
    "stageKind": "puzzle",
    "title": "6-7. 二分探索ダイヤルと角曲がり",
    "topicTag": "match Ordering / 二分探索パズル",
    "kurumiIntro": "ダイヤルの正解は 1〜20 のどこか！毎回 1 ずつ足すと制限ティックに間に合わないから、`low` と `high` の真ん中で割る「二分探索」で素早く見破ろう！",
    "goalSummary": "10ティック以内にダイヤル(13)を解き、ゴール (4, 1) へ到達",
    "bookSectionTitle": "6章 二分探索 — Ordering で探索範囲を半分に",
    "bookSummary": "`Ordering::Less` なら `low = guess + 1`、`Ordering::Greater` なら `high = guess - 1` に更新して中央値 `guess = (low + high) / 2` を試すと超高速に当たります！",
    "bookKeyCode": "let mid = (low + high) / 2;",
    "starterCode": "fn main() {\n    // 【達成条件】\n    // - ゴール到達: (4, 1)\n    // - ダイヤル解除: try_dial(guess) が Ordering::Equal になる値を探す\n    // - 制限時間: 10 ティック以内\n    let max_ticks = 10; // 目標制限ティック数\n    let mut low = 1;\n    let mut high = 20;\n    // 二分探索で try_dial(guess) が Ordering::Equal になるまで絞り込もう！\n    \n}",
    "solutionCode": "fn main() {\n    let mut low = 1;\n    let mut high = 20;\n    loop {\n        let guess = (low + high) / 2;\n        match try_dial(guess) {\n            Ordering::Less => low = guess + 1,\n            Ordering::Greater => high = guess - 1,\n            Ordering::Equal => { break; },\n        }\n    }\n    step(4);\n}",
    "quickChips": [
      {
        "label": "Ordering::Less =>",
        "insert": "Ordering::Less => low = guess + 1,\n            "
      },
      {
        "label": "Ordering::Greater =>",
        "insert": "Ordering::Greater => high = guess - 1,\n            "
      }
    ],
    "hints": [
      "low = 1, high = 20 で二分探索しよう！guess が Less なら low = guess + 1、Greater なら high = guess - 1 だよ。",
      "Ordering::Equal で { break; } してループを抜けたら、step(4); でゴール (4, 1) に届くよ！",
      "fn main() {\n    let mut low = 1;\n    let mut high = 20;\n    loop {\n        let guess = (low + high) / 2;\n        match try_dial(guess) {\n            Ordering::Less => low = guess + 1,\n            Ordering::Greater => high = guess - 1,\n            Ordering::Equal => { break; },\n        }\n    }\n    step(4);\n}"
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
        "x": 1,
        "y": 1,
        "secret": 13
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "dialSolved": true,
      "maxTicks": 10
    },
    "parTicks": 9
  },
  {
    "displayId": "6-8",
    "id": "1df14795-f8d1-5b67-80ef-75c29087e00d",
    "index": 158,
    "chapter": 6,
    "chapterTitle": "第6章 数当てゲームのプログラミング",
    "stageKind": "puzzle",
    "title": "6-8. 逆算ダイヤルとスイッチの鍵",
    "topicTag": "Ordering + スイッチパズル",
    "kurumiIntro": "まずは下のスイッチを踏んでゲートを開けよう。ダイヤルの答えは「最初より小さい数字」だから、`Ordering::Greater` のときの引き算幅を工夫して素早く当ててね！",
    "goalSummary": "スイッチを踏み、ダイヤル(11)を解いて 15ティック以内にゴール (4, 1) へ",
    "bookSectionTitle": "6章 数当て応用 — 減算ステップと経路",
    "bookSummary": "目的地の順序に応じて「スイッチを踏みゲートを開く」「ダイヤルを解く」「ゴールへ向かう」の順番をプログラム内で組み立てましょう。",
    "bookKeyCode": "Ordering::Greater => guess -= 3,",
    "starterCode": "fn main() {\n    // 【達成条件】\n    // - ゴール到達: (4, 1)\n    // - 全スイッチ作動: (2, 2)\n    // - ダイヤル解除: try_dial(guess) が Ordering::Equal になる値を探す\n    // - 制限時間: 16 ティック以内\n    let max_ticks = 16; // 目標制限ティック数\n    let mut guess = 20;\n    // loop と match try_dial(guess) でダイヤルを解除し、ゴールへ向かおう！\n    \n}",
    "solutionCode": "fn main() {\n    turn_right();\n    step();\n    turn_left();\n    step(2);\n    turn_left();\n    step();\n    turn_right();\n    let mut guess = 20;\n    loop {\n        match try_dial(guess) {\n            Ordering::Greater => guess -= 3,\n            Ordering::Less => guess += 1,\n            Ordering::Equal => { break; },\n        }\n    }\n    step(2);\n}",
    "quickChips": [
      {
        "label": "try_dial(guess)",
        "insert": "try_dial(guess)"
      },
      {
        "label": "Ordering::Greater =>",
        "insert": "Ordering::Greater => guess -= 3,"
      },
      {
        "label": "Ordering::Less =>",
        "insert": "Ordering::Less => guess += 1,"
      }
    ],
    "hints": [
      "スタート (0,1) から 南1→東2→北1→東向き にすると (2,1) に着いてスイッチ (2,2) を通れるよ！",
      "guess = 20 から Ordering::Greater なら guess -= 3、Less なら guess += 1 で 20→17→14→11 と一発（4手）で当たるよ！",
      "ダイヤルを解いたあと step(2) でゲート (3,1) を抜けて (4,1) へ！"
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
          "x": 1,
          "y": 1
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
          "y": 2
        }
      ],
      "dial": {
        "x": 2,
        "y": 1,
        "secret": 11
      },
      "gates": [
        {
          "x": 3,
          "y": 1,
          "openTicks": 1,
          "closedTicks": 0,
          "linkedSwitch": {
            "x": 2,
            "y": 2
          }
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "dialSolved": true,
      "requireAllSwitches": true,
      "maxTicks": 16
    },
    "parTicks": 15
  },
  {
    "displayId": "6-9",
    "id": "7ba5c375-80ef-52b3-bf2c-e4c386b2aab2",
    "index": 159,
    "chapter": 6,
    "chapterTitle": "第6章 数当てゲームのプログラミング",
    "stageKind": "challenge",
    "title": "6-9. 二分探索とコンベア回廊チャレンジ",
    "topicTag": "第6章チャレンジ",
    "kurumiIntro": "1〜50の大きなダイヤル（答えは27）を二分探索で見抜き、コンベアと巡回スパークを越えて制限ティック内にゴールするチャレンジだよ！",
    "goalSummary": "1〜50を二分探索し、コンベア＆スパークを越えて 14ティック以内にゴール (6, 2) へ",
    "bookSectionTitle": "第6章 数当てゲーム — アルゴリズムとコース攻略の融合",
    "bookSummary": "探索アルゴリズムでティック数を抑えることで、後続の移動・スパーク待ちにも十分な余裕が生まれます。",
    "bookKeyCode": "while low <= high { ... }",
    "starterCode": "fn main() {\n    // 【達成条件】\n    // - ゴール到達: (6, 2)\n    // - ダイヤル解除: try_dial(guess) が Ordering::Equal になる値を探す\n    // - 制限時間: 14 ティック以内\n    let max_ticks = 14; // 目標制限ティック数\n    let mut low = 1;\n    let mut high = 50;\n    // 二分探索で try_dial(guess) が Ordering::Equal になるまで絞り込もう！\n    \n}",
    "solutionCode": "fn main() {\n    let mut low = 1;\n    let mut high = 50;\n    loop {\n        let guess = (low + high) / 2;\n        match try_dial(guess) {\n            Ordering::Less => low = guess + 1,\n            Ordering::Greater => high = guess - 1,\n            Ordering::Equal => { break; },\n        }\n    }\n    step(2);\n    wait_tick(1);\n    step(2);\n}",
    "quickChips": [
      {
        "label": "let guess = (low + high) / 2;",
        "insert": "let guess = (low + high) / 2;\n        "
      },
      {
        "label": "match try_dial(guess)",
        "insert": "match try_dial(guess) {\n            Ordering::Less => low = guess + 1,\n            Ordering::Greater => high = guess - 1,\n            Ordering::Equal => { break; },\n        }\n"
      },
      {
        "label": "wait_tick(1);",
        "insert": "wait_tick(1);\n    "
      }
    ],
    "hints": [
      "1〜50の二分探索なら 25 → 38 → 31 → 28 → 26 → 27 の6回で当たるよ！",
      "ダイヤル後、step(2) すると (1,2)のコンベアで (2,2) へ、さらに step() で (3,2) に着くよ。",
      "x=4 のスパークの動きを見て wait_tick(1) を1回入れ、step(2) で (5,2)コンベア経由で (6,2) ゴール！"
    ],
    "worldSetup": {
      "width": 7,
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
          "x": 2,
          "y": 1
        },
        {
          "x": 3,
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
          "x": 6,
          "y": 3
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
      "dial": {
        "x": 0,
        "y": 2,
        "secret": 27
      },
      "conveyors": [
        {
          "x": 1,
          "y": 2,
          "dir": 0
        },
        {
          "x": 5,
          "y": 2,
          "dir": 0
        }
      ],
      "sparks": [
        {
          "id": "sp1",
          "path": [
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
            }
          ],
          "initialIndex": 0
        }
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "dialSolved": true,
      "maxTicks": 14
    },
    "parTicks": 12
  },
  {
    "displayId": "6-10",
    "id": "0173493a-1743-5f71-b043-68a133bce3ce",
    "index": 160,
    "chapter": 6,
    "chapterTitle": "第6章 数当てゲームのプログラミング",
    "stageKind": "challenge",
    "title": "6-10. 第6章マスター：ハイブリッド安全ステート制御",
    "topicTag": "第6章最終チャレンジ",
    "kurumiIntro": "第6章のラスボス課題！`enum Task` のコマンドに、スパーク検知・ゲート待機・ダイヤル解錠・コア納品のすべてを組み込んで迷宮を一気に攻略しよう！",
    "goalSummary": "enum Task でダイヤル解錠・スパーク突破・コア⚡5+納品・ゴールを達成",
    "bookSectionTitle": "第6章まとめ — enum・match・Option の完全統合",
    "bookSummary": "すべての行動と状態を型安全な `enum` で表現し、漏れのない `match` で実行することで複雑なミッションを完璧に制御できます。",
    "bookKeyCode": "match task { Task::SolveDial => ..., Task::SafeGo(n) => ... }",
    "starterCode": "enum Task {\n    SolveDial,\n    SafeGo(i32),\n    Pick,\n    Upgrade,\n    Ship,\n}\n\nfn main() {\n    // 【達成条件】\n    // - ゴール到達: (5, 1)\n    // - 全スイッチ作動: (3, 1)\n    // - ダイヤル解除: try_dial(guess) が Ordering::Equal になる値を探す\n    // - コア納品: 1個（⚡5以上） [拾う(1,1) -> 強化⚡5+(3,1) -> 納品(5,1)]\n    let min_core_power = 5; // 納品コアの必要パワー（⚡5以上）\n\n    // --- ステージの初期データ / 機構 ---\n    let plan = vec![\n        // TODO: 上で定義したコマンドを正しい順番に並べよう\n    ];\n    \n}",
    "solutionCode": "enum Task {\n    SolveDial,\n    SafeGo(i32),\n    Pick,\n    Upgrade,\n    Ship,\n}\n\nfn main() {\n    let plan = vec![\n        Task::SolveDial,\n        Task::SafeGo(1),\n        Task::Pick,\n        Task::SafeGo(2),\n        Task::Upgrade,\n        Task::SafeGo(2),\n        Task::Ship,\n    ];\n    let mut core = None;\n    for t in plan {\n        match t {\n            Task::SolveDial => {\n                let mut g = 1;\n                loop {\n                    match try_dial(g) {\n                        Ordering::Less => g += 1,\n                        Ordering::Greater => g -= 1,\n                        Ordering::Equal => { break; },\n                    }\n                }\n            },\n            Task::SafeGo(n) => {\n                for _ in 0..n {\n                    while is_spark_ahead() || !is_gate_open() { wait_tick(1); }\n                    step();\n                }\n            },\n            Task::Pick => {\n                core = Some(grab_core());\n            },\n            Task::Upgrade => {\n                if let Some(mut c) = core {\n                    boost(&mut c);\n                    core = Some(c);\n                }\n            },\n            Task::Ship => {\n                if let Some(c) = core {\n                    deliver(c);\n                }\n            },\n        }\n    }\n}",
    "quickChips": [
      {
        "label": "Task::SafeGo(2),",
        "insert": "Task::SafeGo(2),\n        "
      },
      {
        "label": "Task::Upgrade,",
        "insert": "Task::Upgrade,\n        "
      },
      {
        "label": "Task::Ship,",
        "insert": "Task::Ship,\n        "
      }
    ],
    "hints": [
      "enum Task { SolveDial, SafeGo(i32), Pick, Upgrade, Ship } を定義しよう！最初に SolveDial でダイヤルを解き、SafeGo(1)→Pick で (1,1) のコアを拾おう。",
      "(2,1)にはスパークがいるから SafeGo(2) で (3,1)の強化台兼スイッチまで進み、Upgrade（boost）のあと SafeGo(2)→Ship で (5,1) の納品台へ！",
      "enum Task {\n    SolveDial,\n    SafeGo(i32),\n    Pick,\n    Upgrade,\n    Ship,\n}\n\nfn main() {\n    let plan = vec![\n        Task::SolveDial,\n        Task::SafeGo(1),\n        Task::Pick,\n        Task::SafeGo(2),\n        Task::Upgrade,\n        Task::SafeGo(2),\n        Task::Ship,\n    ];\n    let mut core = None;\n    for t in plan {\n        match t {\n            Task::SolveDial => {\n                let mut g = 1;\n                loop {\n                    match try_dial(g) {\n                        Ordering::Less => g += 1,\n                        Ordering::Greater => g -= 1,\n                        Ordering::Equal => { break; },\n                    }\n                }\n            },\n            Task::SafeGo(n) => {\n                for _ in 0..n {\n                    while is_spark_ahead() || !is_gate_open() { wait_tick(1); }\n                    step();\n                }\n            },\n            Task::Pick => {\n                core = Some(grab_core());\n            },\n            Task::Upgrade => {\n                if let Some(mut c) = core {\n                    boost(&mut c);\n                    core = Some(c);\n                }\n            },\n            Task::Ship => {\n                if let Some(c) = core {\n                    deliver(c);\n                }\n            },\n        }\n    }\n}"
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
        "secret": 3
      },
      "cores": [
        {
          "id": "c1",
          "x": 1,
          "y": 1,
          "power": 3,
          "label": "究極コア"
        }
      ],
      "chargers": [
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
          "y": 1,
          "openTicks": 1,
          "closedTicks": 1,
          "linkedSwitch": {
            "x": 3,
            "y": 1
          }
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
      "dialSolved": true,
      "deliverCores": 1,
      "minCorePower": 5,
      "requireAllSwitches": true,
      "requireSpatialCoreRules": true
    },
    "parTicks": 14
  }
];
