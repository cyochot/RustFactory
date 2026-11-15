import { StageDefinition } from '../types/game';

export const CHAPTER_12_STAGES: StageDefinition[] = [
  {
    "displayId": "12-1",
    "id": "cb19db0b-240d-50ed-be38-89c3fe355fee",
    "index": 265,
    "chapter": 12,
    "chapterTitle": "第12章 入出力プロジェクト：コマンドラインプログラムを構築する",
    "title": "12-1. コマンド引数と環境設定の読み込み",
    "topicTag": "CLI引数 / 環境変数",
    "kurumiIntro": "工房のコマンドライン指令機を作ろう！`cli_args()` と `env_flag()` を読み取って、指定どおりの合図 `\"TURBO\"` を表示して進んでね！",
    "goalSummary": "引数を受け取って \"TURBO\" を出力し、ゴールへ着こう",
    "bookSectionTitle": "12.1 & 12.5 コマンドライン引数と環境変数",
    "bookSummary": "CLIプログラムでは起動時の引数リストや環境変数を読み取り、`Config` 構造体などに整理してから処理を実行するのが定番パターンです。",
    "bookKeyCode": "let args = cli_args();\nlet mode = env_flag();",
    "starterCode": "fn main() {\n    let args = cli_args();\n    let flag = env_flag();\n    println!(\"MODE: {}\", flag);\n    // args[1] に入っている合図 \"turbo\" か \"TURBO\" を出力しよう\n    println!(\"...\");\n    step(3);\n}",
    "solutionCode": "fn main() {\n    let args = cli_args();\n    let flag = env_flag();\n    println!(\"MODE: {}\", flag);\n    println!(\"TURBO: {}\", args[1]);\n    step(3);\n}",
    "quickChips": [
      {
        "label": "println!(\"TURBO: {}\", args[1]);",
        "insert": "println!(\"TURBO: {}\", args[1]);"
      }
    ],
    "hints": [
      "println! の出力に \"TURBO\" という文字を含める必要があるよ！",
      "println!(\"TURBO: {}\", args[1]); に書き換えてみよう。",
      "println!(\"TURBO: {}\", args[1]);"
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
      "cliArgs": [
        "kobo",
        "turbo",
        "3"
      ],
      "envFlag": "SAFE_MODE"
    },
    "victoryCondition": {
      "reachGoal": true,
      "stdoutIncludes": [
        "TURBO"
      ]
    },
    "parTicks": 5
  },
  {
    "displayId": "12-2",
    "id": "d7653986-119c-5386-ae39-f3e78c4799f6",
    "index": 266,
    "chapter": 12,
    "chapterTitle": "第12章 入出力プロジェクト：コマンドラインプログラムを構築する",
    "stageKind": "puzzle",
    "title": "12-2. CLI引数ルート分岐とコンベア走破",
    "topicTag": "cli_args() + ルート分岐",
    "kurumiIntro": "コマンドライン引数 `cli_args()` の指示 `\"FAST\"` を読み取ってログに出力し、コンベアを乗り継いでスイッチとゴール `(5, 3)` を 8ティック以内で駆け抜けよう！",
    "goalSummary": "cli_args() から \"FAST\" を出力し、スイッチ＋コンベアで8ティック以内に (5, 3) へ",
    "bookSectionTitle": "12.1 CLI引数を実行モードに反映する",
    "bookSummary": "起動時の引数 `args[1]` の内容を見て処理を切り替え、標準出力へ実行モードをログ記録します。",
    "bookKeyCode": "let args = cli_args();\nif args[1] == \"FAST\" { ... }",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn main() {\n    let args = cli_args();\n    println!(\"MODE: {}\", args[1]);\n    if args[1] == \"FAST\" {\n        step(1);\n        turn_right();\n        step(1);\n        turn_left();\n        step(2);\n    }\n}",
    "quickChips": [
      {
        "label": "args[1]",
        "insert": "args[1]"
      }
    ],
    "hints": [
      "let args = cli_args(); で引数を受け取り、println!(\"MODE: {}\", args[1]); で \"FAST\" を出力しよう！",
      "(1,1)東コンベアに乗らないルートや (2,2)南コンベアを活かして、step(1); turn_right(); step(1); turn_left(); step(2); で8ティック以内に (5,3) へ！",
      "fn main() {\n    let args = cli_args();\n    println!(\"MODE: {}\", args[1]);\n    if args[1] == \"FAST\" {\n        step(1);\n        turn_right();\n        step(1);\n        turn_left();\n        step(2);\n    }\n}"
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
      "cliArgs": [
        "kobo",
        "FAST"
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
      "stdoutIncludes": [
        "FAST"
      ],
      "requireAllSwitches": true,
      "maxTicks": 8
    },
    "parTicks": 8
  },
  {
    "displayId": "12-3",
    "id": "cdcc5256-5359-5cce-a2aa-61ab4a272fc1",
    "index": 267,
    "chapter": 12,
    "chapterTitle": "第12章 入出力プロジェクト：コマンドラインプログラムを構築する",
    "title": "12-3. 環境変数 env_flag による挙動の切替",
    "topicTag": "環境変数による分岐",
    "kurumiIntro": "環境変数 `env_flag()` が `\"TURBO_MODE\"` のときは金庫に多めにチャージする設定切り替えを作ろう！",
    "goalSummary": "env_flag() == \"TURBO_MODE\" を判定して金庫⚡4＋ゴールへ",
    "bookSectionTitle": "12.5 環境変数を使った動作モード切替",
    "bookSummary": "環境変数で設定を切り替えるようにすると、コードを変更せずに本番・デバッグ・省電力モードなどを切り替えられます。",
    "bookKeyCode": "if env_flag() == \"TURBO_MODE\" { add_vault(4); }",
    "starterCode": "fn main() {\n    let mode = env_flag();\n    // mode が \"TURBO_MODE\" なら 4、そうでなければ 1 を金庫に入れよう！\n    let boost = if mode == \"SLEEP\" { 4 } else { 1 };\n    add_vault(boost);\n    step(3);\n}",
    "solutionCode": "fn main() {\n    let mode = env_flag();\n    let boost = if mode == \"TURBO_MODE\" { 4 } else { 1 };\n    add_vault(boost);\n    step(3);\n}",
    "quickChips": [
      {
        "label": "\"TURBO_MODE\"",
        "insert": "\"TURBO_MODE\""
      }
    ],
    "hints": [
      "今の判定は `mode == \"SLEEP\"` になっているから 1 しか入らないよ。",
      "`\"TURBO_MODE\"` に直すと boost が 4 になるよ！",
      "let boost = if mode == \"TURBO_MODE\" { 4 } else { 1 };"
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
      "envFlag": "TURBO_MODE",
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
    "parTicks": 4
  },
  {
    "displayId": "12-4",
    "id": "71bac323-56c1-54c5-a7b2-4d7db7c3abf3",
    "index": 268,
    "chapter": 12,
    "chapterTitle": "第12章 入出力プロジェクト：コマンドラインプログラムを構築する",
    "stageKind": "puzzle",
    "title": "12-4. env_flag 切替でコア検査・納品フロー変更",
    "topicTag": "env_flag() + 空間コア",
    "kurumiIntro": "環境変数 `env_flag()` が `\"STRICT\"` モードのときは、納品前に必ず検査台 `scan(&c)` と強化台 `boost(&mut c)` の両方を通す厳格ルールでコアを届けよう！",
    "goalSummary": "STRICT モードで \"STRICT_OK\" 出力・コア検査＆強化(⚡5+)・納品",
    "bookSectionTitle": "12.5 環境変数による安全工程の切り替え",
    "bookSummary": "`env_flag()` の値に応じて厳密検査モードをオンにし、空間上の検査台・強化台を経由するフローを実行します。",
    "bookKeyCode": "if env_flag() == \"STRICT\" { scan(&c); }",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "fn main() {\n    let mode = env_flag();\n    println!(\"ENV: {}\", mode);\n    step(1);\n    let mut c = grab_core();\n    step(1);\n    if mode == \"STRICT\" {\n        scan(&c);\n        println!(\"STRICT_OK\");\n    }\n    step(1);\n    boost(&mut c);\n    step(1);\n    deliver(c);\n}",
    "quickChips": [
      {
        "label": "scan(&c);",
        "insert": "scan(&c);\n        "
      },
      {
        "label": "\"STRICT_OK\"",
        "insert": "\"STRICT_OK\""
      }
    ],
    "hints": [
      "let mode = env_flag(); で環境フラグを取得し、(1,1)でコアを拾って (2,1) で if mode == \"STRICT\" { scan(&c); println!(\"STRICT_OK\"); } を実行しよう！",
      "続いて (3,1) で boost(&mut c);、(4,1) で deliver(c); して完了！",
      "fn main() {\n    let mode = env_flag();\n    println!(\"ENV: {}\", mode);\n    step(1);\n    let mut c = grab_core();\n    step(1);\n    if mode == \"STRICT\" {\n        scan(&c);\n        println!(\"STRICT_OK\");\n    }\n    step(1);\n    boost(&mut c);\n    step(1);\n    deliver(c);\n}"
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
      "envFlag": "STRICT",
      "cores": [
        {
          "id": "c1",
          "x": 1,
          "y": 1,
          "power": 3,
          "label": "検査コア"
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
      "minCorePower": 5,
      "scanCount": 1,
      "stdoutIncludes": [
        "STRICT_OK"
      ],
      "requireSpatialCoreRules": true
    },
    "parTicks": 11
  },
  {
    "displayId": "12-5",
    "id": "98bb6489-186b-53c3-828e-0cf6576d9cb5",
    "index": 269,
    "chapter": 12,
    "chapterTitle": "第12章 入出力プロジェクト：コマンドラインプログラムを構築する",
    "title": "12-5. 正常ログ println! とエラーログ eprintln! の両立",
    "topicTag": "stdout と stderr の分離",
    "kurumiIntro": "コマンドの結果 `\"FOUND\"` は `println!` で標準出力へ、警告 `\"WARN\"` は `eprintln!` で標準エラー出力へ分けて流そう！",
    "goalSummary": "println! に \"FOUND\"、eprintln! に \"WARN\" を出してゴールへ",
    "bookSectionTitle": "12.6 標準出力と標準エラー出力の使い分け",
    "bookSummary": "出力をファイルにリダイレクトしたときでも、エラー表示だけは画面に残るように `eprintln!` を使い分けます。",
    "bookKeyCode": "println!(\"FOUND\");\neprintln!(\"WARN\");",
    "starterCode": "fn main() {\n    println!(\"FOUND: gear_01\");\n    // 警告ログは eprintln! で \"WARN: low battery\" を出そう！\n    println!(\"WARN: low battery\");\n    step(4);\n}",
    "solutionCode": "fn main() {\n    println!(\"FOUND: gear_01\");\n    eprintln!(\"WARN: low battery\");\n    step(4);\n}",
    "quickChips": [
      {
        "label": "eprintln!",
        "insert": "eprintln!"
      }
    ],
    "hints": [
      "2行目が `println!(\"WARN: ...\")` になっているから標準エラー出力に入っていないよ！",
      "`eprintln!(\"WARN: low battery\");` に変えよう。",
      "eprintln!(\"WARN: low battery\");"
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
        "FOUND"
      ],
      "stderrIncludes": [
        "WARN"
      ]
    },
    "parTicks": 6
  },
  {
    "displayId": "12-6",
    "id": "82b69a1f-ff10-522f-b41d-dc663fc6fa3f",
    "index": 270,
    "chapter": 12,
    "chapterTitle": "第12章 入出力プロジェクト：コマンドラインプログラムを構築する",
    "title": "12-6. 引数パーサー Config::new の設計",
    "topicTag": "Config 構造体",
    "kurumiIntro": "受け取った引数配列 `args` を構造体 `Config { query, target }` にまとめるとプログラムがぐっと読みやすくなるよ！",
    "goalSummary": "Config 構造体を作って \"GEAR\" を出力しゴール (4, 1) へ",
    "bookSectionTitle": "12.3 引数解析を Config にまとめる",
    "bookSummary": "コマンドライン引数の意味が後から分かるように、構造体 `Config` にフィールド名を付けて整理するリファクタリング手法です。",
    "bookKeyCode": "struct Config { query: String }\nimpl Config { fn build(args: Vec<String>) -> Config { ... } }",
    "starterCode": "struct Config {\n    query: String,\n}\n\nimpl Config {\n    fn build(args: Vec<String>) -> Config {\n        // args[1] を query に入れよう！今は args[0] になってるよ\n        Config { query: args[0] }\n    }\n}\n\nfn main() {\n    let cfg = Config::build(cli_args());\n    println!(\"QUERY: {}\", cfg.query);\n    step(4);\n}",
    "solutionCode": "struct Config {\n    query: String,\n}\n\nimpl Config {\n    fn build(args: Vec<String>) -> Config {\n        Config { query: args[1] }\n    }\n}\n\nfn main() {\n    let cfg = Config::build(cli_args());\n    println!(\"QUERY: {}\", cfg.query);\n    step(4);\n}",
    "quickChips": [
      {
        "label": "args[1]",
        "insert": "args[1]"
      }
    ],
    "hints": [
      "cliArgs の 0番目はプログラム名 \"kobo\" で、1番目に検索語 \"GEAR\" が入っているよ！",
      "args[0] を args[1] に書き換えよう。",
      "Config { query: args[1] }"
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
      "cliArgs": [
        "kobo",
        "GEAR"
      ],
      "envFlag": "NORMAL"
    },
    "victoryCondition": {
      "reachGoal": true,
      "stdoutIncludes": [
        "GEAR"
      ]
    },
    "parTicks": 5
  },
  {
    "displayId": "12-7",
    "id": "cf512ac5-9221-505e-870c-1d52ec940528",
    "index": 271,
    "chapter": 12,
    "chapterTitle": "第12章 入出力プロジェクト：コマンドラインプログラムを構築する",
    "title": "12-7. Config::build のエラーチェック",
    "topicTag": "Result を返す build()",
    "kurumiIntro": "引数が足りないときはパニックではなく `Err(\"引数不足\")` を返すようにしよう！安全な CLI の第一歩だよ。",
    "goalSummary": "Config::build の Result を扱って \"OK_CLI\" を出力しゴールへ",
    "bookSectionTitle": "12.3 エラー処理の改善 — Config::build -> Result",
    "bookSummary": "引数チェックを `Result<Config, String>` にすることで、呼び出し元が優雅にエラーメッセージを出して終了できます。",
    "bookKeyCode": "if args.len() < 2 { return Err(\"引数不足\"); }",
    "starterCode": "struct Config {\n    cmd: String,\n}\n\nimpl Config {\n    fn build(args: Vec<String>) -> Result<Config, String> {\n        if args.len() < 2 {\n            return Err(\"引数が足りません\");\n        }\n        Ok(Config { cmd: args[1] })\n    }\n}\n\nfn main() {\n    match Config::build(cli_args()) {\n        Ok(c) => {\n            // c.cmd (\"OK_CLI\") を println! で出力して 3歩進もう！\n            step(3);\n        },\n        Err(e) => eprintln!(\"ERR: {}\", e),\n    }\n}",
    "solutionCode": "struct Config {\n    cmd: String,\n}\n\nimpl Config {\n    fn build(args: Vec<String>) -> Result<Config, String> {\n        if args.len() < 2 {\n            return Err(\"引数が足りません\");\n        }\n        Ok(Config { cmd: args[1] })\n    }\n}\n\nfn main() {\n    match Config::build(cli_args()) {\n        Ok(c) => {\n            println!(\"CMD: {}\", c.cmd);\n            step(3);\n        },\n        Err(e) => eprintln!(\"ERR: {}\", e),\n    }\n}",
    "quickChips": [
      {
        "label": "println!(\"CMD: {}\", c.cmd);",
        "insert": "println!(\"CMD: {}\", c.cmd);\n            "
      }
    ],
    "hints": [
      "cli_args() の 1番目には \"OK_CLI\" が入っているよ！",
      "Ok(c) の中で `println!(\"CMD: {}\", c.cmd);` を出力してから step(3); しよう。",
      "Ok(c) => {\n    println!(\"CMD: {}\", c.cmd);\n    step(3);\n},"
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
      "cliArgs": [
        "kobo",
        "OK_CLI"
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "stdoutIncludes": [
        "OK_CLI"
      ]
    },
    "parTicks": 4
  },
  {
    "displayId": "12-8",
    "id": "986e5ff1-ac6c-57dc-90f1-74296736adc1",
    "index": 272,
    "chapter": 12,
    "chapterTitle": "第12章 入出力プロジェクト：コマンドラインプログラムを構築する",
    "stageKind": "puzzle",
    "title": "12-8. Config 構造体＋ダイヤル番号の結合",
    "topicTag": "Config::build + ダイヤル解錠",
    "kurumiIntro": "CLI引数 `cli_args()` の `\"5\"` や環境設定から読み取った設定を `Config` 構造体に格納して、ダイヤル解錠と金庫チャージ、出力ログをまとめて決めよう！",
    "goalSummary": "Config で \"CONFIG_OK\" 出力・ダイヤル(5)解錠・金庫⚡5・(4, 1)へ",
    "bookSectionTitle": "12.3 設定構造体 Config による情報一元化",
    "bookSummary": "引数と環境設定の両方を `Config` 構造体にまとめ、`Result<Config, String>` で安全に構築してから実行部へ渡します。",
    "bookKeyCode": "struct Config { tag: String, dial: i32 }",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "struct Config {\n    tag: String,\n    dial: i32,\n}\n\nimpl Config {\n    fn build(args: Vec<String>) -> Result<Config, String> {\n        if args.len() < 2 {\n            return Err(\"引数不足\");\n        }\n        Ok(Config { tag: args[1], dial: 5 })\n    }\n}\n\nfn main() {\n    match Config::build(cli_args()) {\n        Ok(cfg) => {\n            println!(\"TAG: {}\", cfg.tag);\n            try_dial(cfg.dial);\n            add_vault(cfg.dial);\n            step(4);\n        },\n        Err(e) => eprintln!(\"ERR: {}\", e),\n    }\n}",
    "quickChips": [
      {
        "label": "dial: 5",
        "insert": "dial: 5"
      }
    ],
    "hints": [
      "`let args = cli_args();` から設定を取り出す `struct Config { tag: String, dial: i32 }` と `build(args: Vec<String>) -> Result<Config, String>` を作り、`args[1]` (`\"CONFIG_OK\"`) と `dial: 5` を格納しよう！",
      "`println!(\"TAG: {}\", cfg.tag); try_dial(cfg.dial); add_vault(cfg.dial); step(4);` でゴール (4, 1) へ！",
      "struct Config {\n    tag: String,\n    dial: i32,\n}\n\nimpl Config {\n    fn build(args: Vec<String>) -> Result<Config, String> {\n        if args.len() < 2 {\n            return Err(\"引数不足\");\n        }\n        Ok(Config { tag: args[1], dial: 5 })\n    }\n}\n\nfn main() {\n    match Config::build(cli_args()) {\n        Ok(cfg) => {\n            println!(\"TAG: {}\", cfg.tag);\n            try_dial(cfg.dial);\n            add_vault(cfg.dial);\n            step(4);\n        },\n        Err(e) => eprintln!(\"ERR: {}\", e),\n    }\n}"
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
      "cliArgs": [
        "kobo",
        "CONFIG_OK"
      ],
      "dial": {
        "secret": 5
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
      "dialSolved": true,
      "vaultTarget": 5,
      "stdoutIncludes": [
        "CONFIG_OK"
      ],
      "requireAllSwitches": true
    },
    "parTicks": 8
  },
  {
    "displayId": "12-9",
    "id": "c7c95c3c-4f38-5cdc-9522-57b0cea1a312",
    "index": 273,
    "chapter": 12,
    "chapterTitle": "第12章 入出力プロジェクト：コマンドラインプログラムを構築する",
    "title": "12-9. リファクタリングと eprintln! 標準エラー出力",
    "topicTag": "eprintln! / エラー分離",
    "kurumiIntro": "通常の出力（`println!`）とエラーの報告（`eprintln!`）は分けて出すのがプロの設計だよ！異常時に `eprintln!(\"ERR\");` を出してみよう。",
    "goalSummary": "Err時に eprintln!(\"ERR\"); を出し、予備歩数でゴールへ",
    "bookSectionTitle": "12.3 & 12.6 モジュール分割と標準エラー出力",
    "bookSummary": "ロジックを小さな関数へ分け、エラーメッセージは標準エラー出力 `eprintln!` に書き出すことで、本物の出力ログとエラーが混ざるのを防げます。",
    "bookKeyCode": "if let Err(e) = run() {\n    eprintln!(\"ERR: {}\", e);\n}",
    "starterCode": "fn run_job() -> Result<i32, String> {\n    let v = read_part(-1)?;\n    Ok(v)\n}\n\nfn main() {\n    match run_job() {\n        Ok(n) => step(n),\n        Err(e) => {\n            // ここで eprintln! を使って \"ERR\" を報告し、3歩進もう！\n            println!(\"ERR: {}\", e);\n            step(3);\n        },\n    }\n}",
    "solutionCode": "fn run_job() -> Result<i32, String> {\n    let v = read_part(-1)?;\n    Ok(v)\n}\n\nfn main() {\n    match run_job() {\n        Ok(n) => step(n),\n        Err(e) => {\n            eprintln!(\"ERR: {}\", e);\n            step(3);\n        },\n    }\n}",
    "quickChips": [
      {
        "label": "eprintln!(\"ERR: {}\", e);",
        "insert": "eprintln!(\"ERR: {}\", e);"
      }
    ],
    "hints": [
      "今は Err の中で普通の `println!` を使っているよ。",
      "`println!` を `eprintln!` に変えるだけで標準エラー出力になるよ！",
      "eprintln!(\"ERR: {}\", e);"
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
      "stderrIncludes": [
        "ERR"
      ]
    },
    "parTicks": 4
  },
  {
    "displayId": "12-10",
    "id": "06f4c9fa-5322-5af9-81f8-2f52695e366d",
    "index": 274,
    "chapter": 12,
    "chapterTitle": "第12章 入出力プロジェクト：コマンドラインプログラムを構築する",
    "title": "12-10. テスト付き検索モジュール lib.rs 風分離",
    "topicTag": "lib風検索ロジック + #[test]",
    "kurumiIntro": "ミニgrepプロジェクトの要！検索ロジックを `mod minigrep` の `search` 関数に切り出して、`#[test]` で正しさを確かめてから実行しよう。",
    "goalSummary": "#[test] を合格させ、検索一致数で金庫⚡2＋ゴールへ",
    "bookSectionTitle": "12.4 テスト駆動開発でライブラリの機能を開発する",
    "bookSummary": "コマンドの処理本体をライブラリモジュールへ分離すると、単体テストをとても書きやすくなります。",
    "bookKeyCode": "mod minigrep {\n    pub fn count_match(target: i32, list: Vec<i32>) -> i32 { ... }\n}",
    "starterCode": "mod minigrep {\n    pub fn count_ge(limit: i32, list: Vec<i32>) -> i32 {\n        let mut n = 0;\n        for x in list {\n            if x >= limit {\n                n += 1;\n            }\n        }\n        n\n    }\n}\n\n#[test]\nfn test_search() {\n    // [5, 10, 20] のうち 10以上は 2個！期待値を 2 に直そう\n    assert_eq!(minigrep::count_ge(10, vec![5, 10, 20]), 0);\n}\n\nfn main() {\n    let found = minigrep::count_ge(10, conveyor_batch());\n    add_vault(found);\n    println!(\"MATCH: {}\", found);\n    step(3);\n}",
    "solutionCode": "mod minigrep {\n    pub fn count_ge(limit: i32, list: Vec<i32>) -> i32 {\n        let mut n = 0;\n        for x in list {\n            if x >= limit {\n                n += 1;\n            }\n        }\n        n\n    }\n}\n\n#[test]\nfn test_search() {\n    assert_eq!(minigrep::count_ge(10, vec![5, 10, 20]), 2);\n}\n\nfn main() {\n    let found = minigrep::count_ge(10, conveyor_batch());\n    add_vault(found);\n    println!(\"MATCH: {}\", found);\n    step(3);\n}",
    "quickChips": [
      {
        "label": "2);",
        "insert": "2);"
      }
    ],
    "hints": [
      "test_search の期待値が 0 になっているからテストが失敗しているよ！",
      "10 と 20 の 2個が条件に合うので、期待値を `2` に直そう。",
      "assert_eq!(minigrep::count_ge(10, vec![5, 10, 20]), 2);"
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
        5,
        10,
        20
      ],
      "vault": {
        "x": 2,
        "y": 0,
        "initial": 0,
        "target": 2
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "vaultTarget": 2,
      "testsRequired": 1,
      "stdoutIncludes": [
        "MATCH: 2"
      ]
    },
    "parTicks": 5
  },
  {
    "displayId": "12-11",
    "id": "b87d47fc-af3a-5703-8836-a76d69a54774",
    "index": 275,
    "chapter": 12,
    "chapterTitle": "第12章 入出力プロジェクト：コマンドラインプログラムを構築する",
    "stageKind": "puzzle",
    "title": "12-11. CLI設定から自律迷路ソルバー起動",
    "topicTag": "CLI + 左手法迷路",
    "kurumiIntro": "CLI引数 `cli_args()` の `args[1]` が `\"MAZE\"` であることを確かめてログを出したら、左手法の自律ループで迷路を抜けよう！",
    "goalSummary": "CLI 起動ログ \"MAZE\" とテスト合格で迷路の (3, 3) へ",
    "bookSectionTitle": "12.4 CLIランチャーからライブラリロジックを呼ぶ",
    "bookSummary": "CLI層で引数と環境変数を解釈し、検証済みの設定でモジュールの自律制御ロジックを起動する綺麗なアーキテクチャです。",
    "bookKeyCode": "if args[1] == \"MAZE\" { cli_lib::solve(); }",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "mod cli_lib {\n    pub fn check_mode(s: String) -> bool {\n        s == \"MAZE\"\n    }\n}\n\n#[test]\nfn t_mode() {\n    assert!(cli_lib::check_mode(\"MAZE\"));\n}\n\nfn main() {\n    let args = cli_args();\n    if cli_lib::check_mode(args[1]) {\n        println!(\"START: {}\", args[1]);\n        while !at_goal() {\n            if !is_wall_left() {\n                turn_left();\n                step();\n            } else if !is_wall_ahead() {\n                step();\n            } else {\n                turn_right();\n            }\n        }\n    }\n}",
    "quickChips": [
      {
        "label": "turn_right();",
        "insert": "turn_right();"
      }
    ],
    "hints": [
      "`mod cli_lib { pub fn check_mode(s: String) -> bool { s == \"MAZE\" } }` と `#[test]` を用意し、`cli_args()[1]` をチェックして出力しよう！",
      "`while !at_goal()` で左手法（`!is_wall_left()`→左折&step、`!is_wall_ahead()`→step、`else`→`turn_right()`）を回して (3, 3) へ！",
      "mod cli_lib {\n    pub fn check_mode(s: String) -> bool {\n        s == \"MAZE\"\n    }\n}\n\n#[test]\nfn t_mode() {\n    assert!(cli_lib::check_mode(\"MAZE\"));\n}\n\nfn main() {\n    let args = cli_args();\n    if cli_lib::check_mode(args[1]) {\n        println!(\"START: {}\", args[1]);\n        while !at_goal() {\n            if !is_wall_left() {\n                turn_left();\n                step();\n            } else if !is_wall_ahead() {\n                step();\n            } else {\n                turn_right();\n            }\n        }\n    }\n}"
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
      "cliArgs": [
        "kobo",
        "MAZE"
      ]
    },
    "victoryCondition": {
      "reachGoal": true,
      "testsRequired": 1,
      "stdoutIncludes": [
        "MAZE"
      ]
    },
    "parTicks": 8
  },
  {
    "displayId": "12-12",
    "id": "c831c1c1-a891-53bd-aff3-1a64ff93dec1",
    "index": 276,
    "chapter": 12,
    "chapterTitle": "第12章 入出力プロジェクト：コマンドラインプログラムを構築する",
    "stageKind": "challenge",
    "title": "12-12. minigrep フィルタ＋二重スイッチU字ルート",
    "topicTag": "minigrep + 二重スイッチ",
    "kurumiIntro": "コンベア部品から指定条件を満たす数を集計するライブラリ関数を完成させ、2つのテストに合格してU字型のスイッチ2箇所を踏み抜こう！",
    "goalSummary": "2テスト合格＋\"BATCH_3\"＋金庫⚡3＋全スイッチ＋(0, 3)へ",
    "bookSectionTitle": "12.4 TDD でフィルタ機能とルート実行を分離",
    "bookSummary": "集計・フィルタ処理のテストを済ませた上で、U字の複合スイッチ経路を走り切ります。",
    "bookKeyCode": "mod filter { pub fn count_between(a: i32, b: i32, list: Vec<i32>) -> i32 }",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "mod filter {\n    pub fn count_range(min_v: i32, max_v: i32, list: Vec<i32>) -> i32 {\n        let mut n = 0;\n        for x in list {\n            if x >= min_v && x <= max_v { n += 1; }\n        }\n        n\n    }\n}\n\n#[test]\nfn t_in() { assert_eq!(filter::count_range(5, 15, vec![3, 5, 12, 20]), 2); }\n\n#[test]\nfn t_all() { assert_eq!(filter::count_range(1, 10, vec![2, 5, 9]), 3); }\n\nfn main() {\n    let c = filter::count_range(5, 15, conveyor_batch());\n    add_vault(c);\n    println!(\"BATCH_{}\", c);\n    step(4);\n    turn_right();\n    step(2);\n    turn_right();\n    step(4);\n}",
    "quickChips": [
      {
        "label": "&& x <= max_v",
        "insert": " && x <= max_v"
      }
    ],
    "hints": [
      "mod filter { pub fn count_range(min_v: i32, max_v: i32, list: Vec<i32>) -> i32 { ... } } を作って2つの #[test] に合格させよう！",
      "count_range(5, 15, conveyor_batch()) の結果 (3) を金庫に入れ、println!(\"BATCH_{}\", c); してから、東4→右折→南2→右折→東4 (西4) で (0,3) へ！",
      "mod filter {\n    pub fn count_range(min_v: i32, max_v: i32, list: Vec<i32>) -> i32 {\n        let mut n = 0;\n        for x in list {\n            if x >= min_v && x <= max_v { n += 1; }\n        }\n        n\n    }\n}\n\n#[test]\nfn t_in() { assert_eq!(filter::count_range(5, 15, vec![3, 5, 12, 20]), 2); }\n\n#[test]\nfn t_all() { assert_eq!(filter::count_range(1, 10, vec![2, 5, 9]), 3); }\n\nfn main() {\n    let c = filter::count_range(5, 15, conveyor_batch());\n    add_vault(c);\n    println!(\"BATCH_{}\", c);\n    step(4);\n    turn_right();\n    step(2);\n    turn_right();\n    step(4);\n}"
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
      "conveyorItems": [
        2,
        6,
        10,
        15,
        30
      ],
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
        "target": 3
      }
    },
    "victoryCondition": {
      "reachGoal": true,
      "vaultTarget": 3,
      "testsRequired": 2,
      "stdoutIncludes": [
        "BATCH_3"
      ],
      "requireAllSwitches": true
    },
    "parTicks": 15
  },
  {
    "displayId": "12-13",
    "id": "990fa11d-9836-56be-9f70-6e2e77edde16",
    "index": 277,
    "chapter": 12,
    "chapterTitle": "第12章 入出力プロジェクト：コマンドラインプログラムを構築する",
    "stageKind": "puzzle",
    "title": "12-13. minigrep 検索結果＋スパーク警告 eprintln!",
    "topicTag": "minigrep + stderr 分離",
    "kurumiIntro": "パーツ配列からしきい値以上のものを数えて標準出力 `\"FOUND\"` へ、通路の異常警告は標準エラー出力 `eprintln!(\"WARN\")` へ送りながらスパーク通路を抜けよう！",
    "goalSummary": "テスト合格・stdout \"FOUND: 3\"・stderr \"WARN\"・金庫⚡3・(5, 1)へ",
    "bookSectionTitle": "12.4 & 12.6 ライブラリ検索＋エラー出力分離",
    "bookSummary": "検索結果などの正常データは標準出力（`println!`）、安全警告やエラー報告は標準エラー出力（`eprintln!`）へ分けるのがUNIX/CLIの鉄則です。",
    "bookKeyCode": "println!(\"FOUND: {}\", n);\neprintln!(\"WARN: spark\");",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "mod grep {\n    pub fn count_ge(limit: i32, list: Vec<i32>) -> i32 {\n        let mut c = 0;\n        for x in list {\n            if x >= limit { c += 1; }\n        }\n        c\n    }\n}\n\n#[test]\nfn t_grep() {\n    assert_eq!(grep::count_ge(10, vec![2, 10, 15, 20]), 3);\n}\n\nfn main() {\n    let found = grep::count_ge(10, conveyor_batch());\n    add_vault(found);\n    println!(\"FOUND: {}\", found);\n    eprintln!(\"WARN: spark ahead\");\n    for _ in 0..5 {\n        while is_spark_ahead() || !is_gate_open() { wait_tick(1); }\n        step();\n    }\n}",
    "quickChips": [
      {
        "label": "eprintln!(\"WARN: spark ahead\");",
        "insert": "eprintln!(\"WARN: spark ahead\");"
      }
    ],
    "hints": [
      "mod grep { pub fn count_ge(...) -> i32 } と #[test] を用意し、conveyor_batch() から 10以上の個数 (3) を数えて金庫⚡3に入れよう！",
      "println!(\"FOUND: {}\", found); と eprintln!(\"WARN: spark ahead\"); を出力し、スパークとゲートを待ちながら5歩進んで (5, 1) へ！",
      "mod grep {\n    pub fn count_ge(limit: i32, list: Vec<i32>) -> i32 {\n        let mut c = 0;\n        for x in list {\n            if x >= limit { c += 1; }\n        }\n        c\n    }\n}\n\n#[test]\nfn t_grep() {\n    assert_eq!(grep::count_ge(10, vec![2, 10, 15, 20]), 3);\n}\n\nfn main() {\n    let found = grep::count_ge(10, conveyor_batch());\n    add_vault(found);\n    println!(\"FOUND: {}\", found);\n    eprintln!(\"WARN: spark ahead\");\n    for _ in 0..5 {\n        while is_spark_ahead() || !is_gate_open() { wait_tick(1); }\n        step();\n    }\n}"
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
      "conveyorItems": [
        4,
        10,
        12,
        20
      ],
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
      "vault": {
        "x": 4,
        "y": 0,
        "initial": 0,
        "target": 3
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
      "vaultTarget": 3,
      "testsRequired": 1,
      "stdoutIncludes": [
        "FOUND: 3"
      ],
      "stderrIncludes": [
        "WARN"
      ],
      "requireAllSwitches": true
    },
    "parTicks": 11
  },
  {
    "displayId": "12-14",
    "id": "023ce4f0-00a6-583a-9c3a-a016b2f8dc2e",
    "index": 278,
    "chapter": 12,
    "chapterTitle": "第12章 入出力プロジェクト：コマンドラインプログラムを構築する",
    "stageKind": "challenge",
    "title": "12-14. コア工場CLI：エラー分離＆検査強化",
    "topicTag": "CLI + stdout/stderr + コア",
    "kurumiIntro": "CLIツールの実践運用！環境変数 `\"TURBO\"` で金庫目標を計算し、正常ログ `\"CORE_DELIVERED\"` は `println!`、注意ログ `\"WARN_SPARK\"` は `eprintln!` に出力しながらコアを運ぼう！",
    "goalSummary": "テスト合格・stdout \"CORE_DELIVERED\"・stderr \"WARN_SPARK\"・コア⚡5+納品・全スイッチ",
    "bookSectionTitle": "12.6 本番CLIにおける標準出力と標準エラー出力の運用",
    "bookSummary": "出力ストリームの分離と単体テスト、そして現実の安全操縦（スパーク待機・コア操作）をすべて統合します。",
    "bookKeyCode": "println!(\"CORE_DELIVERED\"); eprintln!(\"WARN_SPARK\");",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "mod cli {\n    pub fn bonus(mode: String) -> i32 {\n        if mode == \"TURBO\" { 5 } else { 1 }\n    }\n}\n\n#[test]\nfn t_turbo() { assert_eq!(cli::bonus(\"TURBO\"), 5); }\n\nfn safe_go(n: i32) {\n    for _ in 0..n {\n        while is_spark_ahead() { wait_tick(1); }\n        step();\n    }\n}\n\nfn main() {\n    add_vault(cli::bonus(env_flag()));\n    eprintln!(\"WARN_SPARK\");\n    safe_go(1);\n    let mut c = grab_core();\n    safe_go(1);\n    scan(&c);\n    safe_go(2);\n    boost(&mut c);\n    safe_go(1);\n    deliver(c);\n    println!(\"CORE_DELIVERED\");\n}",
    "quickChips": [
      {
        "label": "safe_go(2); boost(&mut c);",
        "insert": "safe_go(2);\n    boost(&mut c);\n    "
      },
      {
        "label": "safe_go(1); deliver(c);",
        "insert": "safe_go(1);\n    deliver(c);\n    "
      },
      {
        "label": "println!(\"CORE_DELIVERED\");",
        "insert": "println!(\"CORE_DELIVERED\");"
      }
    ],
    "hints": [
      "mod cli { pub fn bonus(mode: String) -> i32 { if mode == \"TURBO\" { 5 } else { 1 } } } と #[test] を書き、add_vault(cli::bonus(env_flag())); と eprintln!(\"WARN_SPARK\"); を呼ぼう！",
      "スパーク待ち付きの safe_go で (1,1)コア取得→(2,1) scan(&c)→(4,1) boost(&mut c)＆スイッチ→(5,1) deliver(c) と println!(\"CORE_DELIVERED\");！",
      "mod cli {\n    pub fn bonus(mode: String) -> i32 {\n        if mode == \"TURBO\" { 5 } else { 1 }\n    }\n}\n\n#[test]\nfn t_turbo() { assert_eq!(cli::bonus(\"TURBO\"), 5); }\n\nfn safe_go(n: i32) {\n    for _ in 0..n {\n        while is_spark_ahead() { wait_tick(1); }\n        step();\n    }\n}\n\nfn main() {\n    add_vault(cli::bonus(env_flag()));\n    eprintln!(\"WARN_SPARK\");\n    safe_go(1);\n    let mut c = grab_core();\n    safe_go(1);\n    scan(&c);\n    safe_go(2);\n    boost(&mut c);\n    safe_go(1);\n    deliver(c);\n    println!(\"CORE_DELIVERED\");\n}"
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
      "envFlag": "TURBO",
      "cores": [
        {
          "id": "c1",
          "x": 1,
          "y": 1,
          "power": 3,
          "label": "CLIコア"
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
      "vault": {
        "x": 0,
        "y": 0,
        "initial": 0,
        "target": 5
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
      "deliverCores": 1,
      "minCorePower": 5,
      "scanCount": 1,
      "vaultTarget": 5,
      "testsRequired": 1,
      "stdoutIncludes": [
        "CORE_DELIVERED"
      ],
      "stderrIncludes": [
        "WARN_SPARK"
      ],
      "requireAllSwitches": true,
      "requireSpatialCoreRules": true
    },
    "parTicks": 15
  },
  {
    "displayId": "12-15",
    "id": "1ebcf4e6-6bc1-5f61-9487-faa01683ed43",
    "index": 279,
    "chapter": 12,
    "chapterTitle": "第12章 入出力プロジェクト：コマンドラインプログラムを構築する",
    "title": "12-15. 第12章まとめ：完全CLIコマンド＆スイッチ連動",
    "topicTag": "第12章 総合実践",
    "kurumiIntro": "CLIの総合課題！引数解析・環境変数・`#[test]`・`println!`/`eprintln!` すべてを組み合わせた本格CLIロボットを動かそう！",
    "goalSummary": "テスト合格＋\"CLI_DONE\" 出力＋金庫⚡4＋スイッチ突破でゴールへ",
    "bookSectionTitle": "第12章まとめ — テスト・設定・エラー処理を備えたCLI",
    "bookSummary": "小さなライブラリ関数、設定構造体、自動テスト、標準/標準エラー出力の分離が揃った実用的なCLIアプリケーションの完成です。",
    "bookKeyCode": "println!(\"CLI_DONE\");\nstep(4);",
    "starterCode": "mod cli_lib {\n    pub fn bonus(flag: String) -> i32 {\n        if flag == \"PRO\" { 4 } else { 1 }\n    }\n}\n\n#[test]\nfn test_pro() {\n    assert_eq!(cli_lib::bonus(\"PRO\"), 4);\n}\n\nfn main() {\n    let args = cli_args();\n    let b = cli_lib::bonus(env_flag());\n    add_vault(b);\n    // \"CLI_DONE\" を出力して、スイッチ(2, 1)を踏みながらゴール(4, 1)へ4歩進もう！\n    println!(\"RUN: {}\", args[1]);\n    step(4);\n}",
    "solutionCode": "mod cli_lib {\n    pub fn bonus(flag: String) -> i32 {\n        if flag == \"PRO\" { 4 } else { 1 }\n    }\n}\n\n#[test]\nfn test_pro() {\n    assert_eq!(cli_lib::bonus(\"PRO\"), 4);\n}\n\nfn main() {\n    let args = cli_args();\n    let b = cli_lib::bonus(env_flag());\n    add_vault(b);\n    println!(\"CLI_DONE: {}\", args[1]);\n    step(4);\n}",
    "quickChips": [
      {
        "label": "println!(\"CLI_DONE: {}\", args[1]);",
        "insert": "println!(\"CLI_DONE: {}\", args[1]);"
      }
    ],
    "hints": [
      "println! の出力文字が \"RUN: ...\" になっているから目標の \"CLI_DONE\" が見つからないよ。",
      "println!(\"CLI_DONE: {}\", args[1]); に書き換えれば完璧！",
      "println!(\"CLI_DONE: {}\", args[1]);"
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
      "cliArgs": [
        "kobo",
        "deploy"
      ],
      "envFlag": "PRO",
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
      "testsRequired": 1,
      "stdoutIncludes": [
        "CLI_DONE"
      ]
    },
    "parTicks": 6
  },
  {
    "displayId": "12-16",
    "id": "4d21d984-cae8-55b3-8b37-4ee94ed21ea6",
    "index": 280,
    "chapter": 12,
    "chapterTitle": "第12章 入出力プロジェクト：コマンドラインプログラムを構築する",
    "stageKind": "challenge",
    "title": "12-16. CLIグランドパズル：完全工房システム",
    "topicTag": "CLIの最終チャレンジ",
    "kurumiIntro": "CLIシステムの集大成！`Result` のエラー処理・`Config` 引数解析・`env_flag` 判定・`#[test]` 2つ・`println!`/`eprintln!`・ダイヤル・スパーク・2スイッチ・コア納品を全部ひとまとめに動かそう！！",
    "goalSummary": "知識を総結集！テスト2つ・\"CHALLENGE_COMPLETE\"・\"WARN_CHECK\"・ダイヤル(4)・金庫⚡7・コア⚡5+・全スイッチ",
    "bookSectionTitle": "総まとめ — 安全で堅牢なテスト駆動CLIシステム",
    "bookSummary": "エラー処理、型とトレイトの抽象化、自動テスト、入出力CLI設計のすべてが噛み合うことで、プロ仕様の信頼できるロボットが完成しました！",
    "bookKeyCode": "Result + trait + #[test] + cli_args() + eprintln!",
    "starterCode": "fn main() {\n    \n}",
    "solutionCode": "struct CliCfg {\n    tag: String,\n    vault_amt: i32,\n}\n\nmod engine {\n    pub fn calc_power(flag: String, batch: Vec<i32>) -> i32 {\n        let mut s = if flag == \"PRO\" { 2 } else { 0 };\n        for x in batch {\n            if x >= 10 { s += x / 10; }\n        }\n        s\n    }\n}\n\n#[test]\nfn t_pro() { assert_eq!(engine::calc_power(\"PRO\", vec![5, 20, 30]), 7); }\n\n#[test]\nfn t_std() { assert_eq!(engine::calc_power(\"STD\", vec![5, 20]), 2); }\n\nfn build_cfg() -> Result<CliCfg, String> {\n    let args = cli_args();\n    if args.len() < 2 { return Err(\"引数不足\"); }\n    let v = engine::calc_power(env_flag(), conveyor_batch());\n    Ok(CliCfg { tag: args[1], vault_amt: v })\n}\n\nfn safe_go(n: i32) {\n    for _ in 0..n {\n        while is_spark_ahead() || !is_gate_open() { wait_tick(1); }\n        step();\n    }\n}\n\nfn main() {\n    match build_cfg() {\n        Ok(cfg) => {\n            println!(\"CHALLENGE_{}\", cfg.tag);\n            eprintln!(\"WARN_CHECK\");\n            add_vault(cfg.vault_amt);\n            try_dial(4);\n            safe_go(1);\n            let mut c = grab_core();\n            safe_go(1);\n            boost(&mut c);\n            safe_go(3);\n            turn_right();\n            safe_go(2);\n            deliver(c);\n        },\n        Err(e) => eprintln!(\"ERR: {}\", e),\n    }\n}",
    "quickChips": [
      {
        "label": "let mut c = grab_core();",
        "insert": "let mut c = grab_core();\n            "
      },
      {
        "label": "boost(&mut c);",
        "insert": "boost(&mut c);\n            "
      },
      {
        "label": "safe_go(3);",
        "insert": "safe_go(3);\n            "
      },
      {
        "label": "deliver(c);",
        "insert": "deliver(c);"
      }
    ],
    "hints": [
      "env_flag() と conveyor_batch() から合計⚡7を計算する関数＋#[test] 2つと、cli_args() を解析する Config 関数を書こう！",
      "println!(\"CHALLENGE_{}\", cfg.tag); と eprintln!(\"WARN_CHECK\");、add_vault(7);、try_dial(4); を実行しよう！",
      "struct CliCfg {\n    tag: String,\n    vault_amt: i32,\n}\n\nmod engine {\n    pub fn calc_power(flag: String, batch: Vec<i32>) -> i32 {\n        let mut s = if flag == \"PRO\" { 2 } else { 0 };\n        for x in batch {\n            if x >= 10 { s += x / 10; }\n        }\n        s\n    }\n}\n\n#[test]\nfn t_pro() { assert_eq!(engine::calc_power(\"PRO\", vec![5, 20, 30]), 7); }\n\n#[test]\nfn t_std() { assert_eq!(engine::calc_power(\"STD\", vec![5, 20]), 2); }\n\nfn build_cfg() -> Result<CliCfg, String> {\n    let args = cli_args();\n    if args.len() < 2 { return Err(\"引数不足\"); }\n    let v = engine::calc_power(env_flag(), conveyor_batch());\n    Ok(CliCfg { tag: args[1], vault_amt: v })\n}\n\nfn safe_go(n: i32) {\n    for _ in 0..n {\n        while is_spark_ahead() || !is_gate_open() { wait_tick(1); }\n        step();\n    }\n}\n\nfn main() {\n    match build_cfg() {\n        Ok(cfg) => {\n            println!(\"CHALLENGE_{}\", cfg.tag);\n            eprintln!(\"WARN_CHECK\");\n            add_vault(cfg.vault_amt);\n            try_dial(4);\n            safe_go(1);\n            let mut c = grab_core();\n            safe_go(1);\n            boost(&mut c);\n            safe_go(3);\n            turn_right();\n            safe_go(2);\n            deliver(c);\n        },\n        Err(e) => eprintln!(\"ERR: {}\", e),\n    }\n}"
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
      "cliArgs": [
        "kobo",
        "COMPLETE"
      ],
      "envFlag": "PRO",
      "conveyorItems": [
        5,
        20,
        30
      ],
      "dial": {
        "secret": 4
      },
      "cores": [
        {
          "id": "c1",
          "x": 1,
          "y": 1,
          "power": 3,
          "label": "総括コア"
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
      "dialSolved": true,
      "deliverCores": 1,
      "minCorePower": 5,
      "vaultTarget": 7,
      "testsRequired": 2,
      "stdoutIncludes": [
        "CHALLENGE_COMPLETE"
      ],
      "stderrIncludes": [
        "WARN_CHECK"
      ],
      "requireAllSwitches": true,
      "requireSpatialCoreRules": true,
      "requireSafeErrorHandling": true
    },
    "parTicks": 18
  }
];
