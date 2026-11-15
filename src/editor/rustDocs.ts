import { Completion } from '@codemirror/autocomplete';
import { StageDefinition } from '../types/game';

export type ReferenceCategoryGroup = '工房API' | 'マクロ' | '標準関数' | 'メソッド';

export interface RustDocEntry {
  label: string;
  type: Completion['type'];
  detail: string;
  category: string;
  refGroup?: ReferenceCategoryGroup;
  description: string;
  ownershipNote?: string;
  example?: string;
  snippet?: string;
  insertText?: string;
  isMethod?: boolean;
  keywords?: string[];
}

export interface StageFunctionDoc extends RustDocEntry {
  refGroup: ReferenceCategoryGroup;
  insertText: string;
  isPrimary: boolean;
}

export const WORKSHOP_API_ENTRIES: RustDocEntry[] = [
  {
    label: 'step',
    type: 'function',
    detail: 'fn step() / step(n: i32)',
    category: '工房ロボットAPI',
    refGroup: '工房API',
    description:
      'フェリスちゃん（または現在スレッドのメカ）を向いている方向に1マス（または n マス）前進させます。',
    example: 'step();\nstep(3);',
    snippet: 'step(${1});',
    insertText: 'step(1);',
    keywords: ['順次実行', '移動', 'step'],
  },
  {
    label: 'turn_right',
    type: 'function',
    detail: 'fn turn_right()',
    category: '工房ロボットAPI',
    refGroup: '工房API',
    description: 'その場で右へ90度向きを変えます（1ティック消費）。',
    example: 'turn_right();',
    snippet: 'turn_right();',
    insertText: 'turn_right();',
    keywords: ['向き', 'turn_right'],
  },
  {
    label: 'turn_left',
    type: 'function',
    detail: 'fn turn_left()',
    category: '工房ロボットAPI',
    refGroup: '工房API',
    description: 'その場で左へ90度向きを変えます（1ティック消費）。',
    example: 'turn_left();',
    snippet: 'turn_left();',
    insertText: 'turn_left();',
    keywords: ['向き', 'turn_left'],
  },
  {
    label: 'wait_tick',
    type: 'function',
    detail: 'fn wait_tick(n: i32)',
    category: '工房ロボットAPI',
    refGroup: '工房API',
    description:
      '移動せずに指定ティック数だけ待機します。蒸気ゲートが開くのを待つときに使います。',
    example: 'wait_tick(1);',
    snippet: 'wait_tick(${1:1});',
    insertText: 'wait_tick(1);',
    keywords: ['ゲート', '待機', 'wait_tick'],
  },
  {
    label: 'is_gate_open',
    type: 'function',
    detail: 'fn is_gate_open() -> bool',
    category: '工房センサーAPI',
    refGroup: '工房API',
    description:
      '目の前（1マス先）の蒸気ゲートが次のティックで開いているかを bool（true / false）で返します。',
    example: 'if is_gate_open() {\n    step();\n} else {\n    wait_tick(1);\n}',
    snippet: 'is_gate_open()',
    insertText: 'is_gate_open()',
    keywords: ['if', 'ゲート', 'loop', 'is_gate_open'],
  },
  {
    label: 'at_goal',
    type: 'function',
    detail: 'fn at_goal() -> bool',
    category: '工房センサーAPI',
    refGroup: '工房API',
    description:
      '現在位置がゴール旗と一致しているときに true を返します。loop の break 条件に便利です。',
    example: 'if at_goal() {\n    break;\n}',
    snippet: 'at_goal()',
    insertText: 'at_goal()',
    keywords: ['loop', 'break', 'goal', 'at_goal'],
  },
  {
    label: 'is_wall_ahead',
    type: 'function',
    detail: 'fn is_wall_ahead() -> bool',
    category: '工房センサーAPI',
    refGroup: '工房API',
    description:
      '目の前（1マス先）が壁または工房の外のときに true を返します。迷路の壁判定に使います。',
    example: 'if is_wall_ahead() {\n    turn_right();\n} else {\n    step();\n}',
    snippet: 'is_wall_ahead()',
    insertText: 'is_wall_ahead()',
    keywords: ['壁', '迷路', 'if', 'loop', 'is_wall_ahead'],
  },
  {
    label: 'is_wall_left',
    type: 'function',
    detail: 'fn is_wall_left() -> bool',
    category: '工房センサーAPI',
    refGroup: '工房API',
    description:
      '現在向いている方向から見て左側（1マス隣）が壁または範囲外のときに true を返します。',
    example: 'if !is_wall_left() {\n    turn_left();\n}',
    snippet: 'is_wall_left()',
    insertText: 'is_wall_left()',
    keywords: ['壁', '迷路', '左手法', 'is_wall_left'],
  },
  {
    label: 'is_wall_right',
    type: 'function',
    detail: 'fn is_wall_right() -> bool',
    category: '工房センサーAPI',
    refGroup: '工房API',
    description:
      '現在向いている方向から見て右側（1マス隣）が壁または範囲外のときに true を返します。',
    example: 'if !is_wall_right() {\n    turn_right();\n}',
    snippet: 'is_wall_right()',
    insertText: 'is_wall_right()',
    keywords: ['壁', '迷路', '右手法', 'is_wall_right'],
  },
  {
    label: 'is_spark_ahead',
    type: 'function',
    detail: 'fn is_spark_ahead() -> bool',
    category: '工房センサーAPI',
    refGroup: '工房API',
    description:
      '次の移動先（1マス前）に巡回スパークが来ているかどうかを判定します。true のときは wait_tick(1) でやり過ごそう！',
    example: 'if is_spark_ahead() {\n    wait_tick(1);\n} else {\n    step();\n}',
    snippet: 'is_spark_ahead()',
    insertText: 'is_spark_ahead()',
    keywords: ['スパーク', '回避', 'wait_tick', 'is_spark_ahead'],
  },
  {
    label: 'is_on_switch',
    type: 'function',
    detail: 'fn is_on_switch() -> bool',
    category: '工房センサーAPI',
    refGroup: '工房API',
    description: '現在足元に感圧スイッチがあるときに true を返します。',
    example: 'if is_on_switch() {\n    println!("SWITCH ON");\n}',
    snippet: 'is_on_switch()',
    insertText: 'is_on_switch()',
    keywords: ['スイッチ', 'is_on_switch'],
  },
  {
    label: 'has_core',
    type: 'function',
    detail: 'fn has_core() -> bool',
    category: '所有権・コアAPI',
    refGroup: '工房API',
    description: '現在エネルギーコアを手に持っているときに true を返します。',
    example: 'if !has_core() {\n    // コアを拾いに向かう\n}',
    snippet: 'has_core()',
    insertText: 'has_core()',
    keywords: ['コア', 'has_core'],
  },
  {
    label: 'core_power',
    type: 'function',
    detail: 'fn core_power() -> i32',
    category: '所有権・コアAPI',
    refGroup: '工房API',
    description: '現在持っているエネルギーコアのパワー数値を返します（未所持時は 0）。',
    example: 'if core_power() < 3 {\n    boost(&mut core);\n}',
    snippet: 'core_power()',
    insertText: 'core_power()',
    keywords: ['コア', 'power', 'core_power'],
  },
  {
    label: 'bot_x',
    type: 'function',
    detail: 'fn bot_x() -> i32',
    category: '工房センサーAPI',
    refGroup: '工房API',
    description: '現在のロボの横座標（x）を整数で返します。',
    example: 'if bot_x() < goal_x() {\n    step();\n}',
    snippet: 'bot_x()',
    insertText: 'bot_x()',
    keywords: ['座標', 'bot_x'],
  },
  {
    label: 'bot_y',
    type: 'function',
    detail: 'fn bot_y() -> i32',
    category: '工房センサーAPI',
    refGroup: '工房API',
    description: '現在のロボの縦座標（y）を整数で返します。',
    example: 'if bot_y() < goal_y() {\n    // 南へ移動\n}',
    snippet: 'bot_y()',
    insertText: 'bot_y()',
    keywords: ['座標', 'bot_y'],
  },
  {
    label: 'goal_x',
    type: 'function',
    detail: 'fn goal_x() -> i32',
    category: '工房センサーAPI',
    refGroup: '工房API',
    description: 'ゴール旗の横座標（x）を整数で返します。',
    example: 'while bot_x() < goal_x() {\n    step();\n}',
    snippet: 'goal_x()',
    insertText: 'goal_x()',
    keywords: ['座標', 'goal_x'],
  },
  {
    label: 'goal_y',
    type: 'function',
    detail: 'fn goal_y() -> i32',
    category: '工房センサーAPI',
    refGroup: '工房API',
    description: 'ゴール旗の縦座標（y）を整数で返します。',
    example: 'while bot_y() < goal_y() {\n    step();\n}',
    snippet: 'goal_y()',
    insertText: 'goal_y()',
    keywords: ['座標', 'goal_y'],
  },
  {
    label: 'bot_dir',
    type: 'function',
    detail: 'fn bot_dir() -> i32',
    category: '工房センサーAPI',
    refGroup: '工房API',
    description: '現在の向き（0:東, 1:南, 2:西, 3:北）を整数で返します。',
    example: 'if bot_dir() != 1 {\n    turn_right();\n}',
    snippet: 'bot_dir()',
    insertText: 'bot_dir()',
    keywords: ['向き', 'bot_dir'],
  },
  {
    label: 'grab_core',
    type: 'function',
    detail: 'fn grab_core() -> Core',
    category: '所有権・コアAPI',
    refGroup: '工房API',
    description:
      '近くのエネルギーコアを拾って Core 型の値として返します。Core は Copy 型ではないため代入や関数渡しで所有権が移動（Move）します。',
    ownershipNote: '値を書き換えるときは let mut core = grab_core(); を使おう！',
    example: 'let mut core = grab_core();',
    snippet: 'grab_core()',
    insertText: 'grab_core()',
    keywords: ['所有権', 'Move', 'Core', '借用', 'grab_core'],
  },
  {
    label: 'deliver',
    type: 'function',
    detail: 'fn deliver(core: Core)',
    category: '所有権・コアAPI',
    refGroup: '工房API',
    description:
      'エネルギーコアを納品台へ届けます。Core の所有権を関数へ渡すため、呼び出し後は元の変数を使えなくなります（Move）。',
    ownershipNote: 'Move 発生！scan(&core) や println! は deliver(core) より前に書こう。',
    example: 'deliver(core);',
    snippet: 'deliver(${1:core});',
    insertText: 'deliver(core);',
    keywords: ['所有権', 'Move', 'deliver'],
  },
  {
    label: 'scan',
    type: 'function',
    detail: 'fn scan(core: &Core)',
    category: '所有権・借用API',
    refGroup: '工房API',
    description:
      'コアを「不変参照 &Core」として一時的に借りてスキャンします。所有権は呼び出し元の手元に残ります。',
    ownershipNote: '不変借用（&T）：見るだけで中身は書き換えないため、複数回スキャン可能です。',
    example: 'scan(&core);',
    snippet: 'scan(&${1:core});',
    insertText: 'scan(&core);',
    keywords: ['借用', '&T', '参照', 'scan'],
  },
  {
    label: 'boost',
    type: 'function',
    detail: 'fn boost(core: &mut Core)',
    category: '所有権・借用API',
    refGroup: '工房API',
    description:
      'コアを「可変参照 &mut Core」として借り、パワーを +2 強化します。受け取る側の変数に mut が必要です。',
    ownershipNote: '可変借用（&mut T）：同時に1つしか貸し出せません。',
    example: 'let mut core = grab_core();\nboost(&mut core);',
    snippet: 'boost(&mut ${1:core});',
    insertText: 'boost(&mut core);',
    keywords: ['可変借用', '&mut', 'mut', 'boost'],
  },
  {
    label: 'try_dial',
    type: 'function',
    detail: 'fn try_dial(guess: i32) -> Ordering',
    category: '工房ギミックAPI',
    refGroup: '工房API',
    description:
      'ダイヤル錠に予想した数字を試し、秘密の数字と比べて Ordering::Less / Greater / Equal を返します。',
    example: 'match try_dial(guess) {\n    Ordering::Equal => break,\n    _ => {},\n}',
    snippet: 'try_dial(${1:guess})',
    insertText: 'try_dial(guess)',
    keywords: ['Ordering', 'cmp', 'match', 'try_dial'],
  },
  {
    label: 'conveyor_batch',
    type: 'function',
    detail: 'fn conveyor_batch() -> Vec<i32>',
    category: 'コレクションAPI',
    refGroup: '工房API',
    description:
      'コンベア上の部品データ配列（Vec<i32>）を取得します。スライスやイテレータの入力元になります。',
    example: 'let batch = conveyor_batch();\nlet part = &batch[1..3];',
    snippet: 'conveyor_batch()',
    insertText: 'conveyor_batch()',
    keywords: ['スライス', 'iter', 'Vec', 'conveyor_batch'],
  },
  {
    label: 'inspect_slice',
    type: 'function',
    detail: 'fn inspect_slice(slice: &[i32]) -> i32',
    category: 'スライスAPI',
    refGroup: '工房API',
    description:
      '配列やベクタの一部を指すスライス &[i32] を検査し、検査した要素数を返します。',
    ownershipNote: 'データをコピーせず一部だけ借りて参照できます。',
    example: 'let part = &batch[1..3];\ninspect_slice(part);',
    snippet: 'inspect_slice(${1:part});',
    insertText: 'inspect_slice(part);',
    keywords: ['スライス', '&[T]', 'inspect_slice'],
  },
  {
    label: 'add_vault',
    type: 'function',
    detail: 'fn add_vault(amount: i32)',
    category: '工房金庫API',
    refGroup: '工房API',
    description: '工房の金庫エネルギーを指定量だけ加算します。',
    example: 'add_vault(power);',
    snippet: 'add_vault(${1:1});',
    insertText: 'add_vault(1);',
    keywords: ['mut', 'Mutex', 'ThreadPool', 'add_vault'],
  },
  {
    label: 'unlock_gate',
    type: 'function',
    detail: 'fn unlock_gate()',
    category: '工房ギミックAPI',
    refGroup: '工房API',
    description: 'スイッチ連動型のゲートを解錠して通行可能にします。',
    example: 'unlock_gate();',
    snippet: 'unlock_gate();',
    insertText: 'unlock_gate();',
    keywords: ['unlock_gate', 'ゲート'],
  },
  {
    label: 'read_part',
    type: 'function',
    detail: 'fn read_part(id: i32) -> Result<i32, String>',
    category: 'エラー処理API',
    refGroup: '工房API',
    description:
      '部品IDを読み込みます。0以上なら Ok(値)、負の数なら Err("壊れた部品ID") を返します。',
    ownershipNote: 'unwrap() ではなく match / unwrap_or() / ? 演算子で安全に扱おう！',
    example: 'let v = read_part(3)?;',
    snippet: 'read_part(${1:3})',
    insertText: 'read_part(3)',
    keywords: ['Result', 'Ok', 'Err', '?', 'unwrap_or', 'read_part'],
  },
  {
    label: 'cli_args',
    type: 'function',
    detail: 'fn cli_args() -> Vec<String>',
    category: '環境・CLI API',
    refGroup: '工房API',
    description: 'プログラムに渡されたコマンドライン引数のリストを返します。',
    example: 'let args = cli_args();\nprintln!("{}", args[1]);',
    snippet: 'cli_args()',
    insertText: 'cli_args()',
    keywords: ['CLI', '引数', 'cli_args'],
  },
  {
    label: 'env_flag',
    type: 'function',
    detail: 'fn env_flag() -> String',
    category: '環境・CLI API',
    refGroup: '工房API',
    description:
      '現在の工房環境フラグ（例: "SAFE_MODE" や "TURBO"）を文字列で返します。',
    example: 'let mode = env_flag();',
    snippet: 'env_flag()',
    insertText: 'env_flag()',
    keywords: ['環境変数', 'env_flag'],
  },
  {
    label: 'job_queue',
    type: 'function',
    detail: 'fn job_queue() -> Vec<i32>',
    category: '並行処理API',
    refGroup: '工房API',
    description: 'スレッドプールで処理するジョブのキューを取得します。',
    example: 'for job in job_queue() {\n    pool.execute(|| { add_vault(1); });\n}',
    snippet: 'job_queue()',
    insertText: 'job_queue()',
    keywords: ['ThreadPool', 'job_queue'],
  },
  {
    label: 'raw_pointer_addr',
    type: 'function',
    detail: 'fn raw_pointer_addr() -> *const i32',
    category: 'Unsafe API',
    refGroup: '工房API',
    description:
      '校正用データの生ポインタを返します。参照外し（*ptr）には unsafe { ... } ブロックが必要です。',
    ownershipNote: '安全保証の範囲外になるため unsafe { *ptr } の中でのみ参照できます。',
    example: 'let ptr = raw_pointer_addr();\nlet val = unsafe { *ptr };',
    snippet: 'raw_pointer_addr()',
    insertText: 'raw_pointer_addr()',
    keywords: ['unsafe', '生ポインタ', 'raw_pointer_addr'],
  },
];

export const MACRO_ENTRIES: RustDocEntry[] = [
  {
    label: 'println!',
    type: 'function',
    detail: 'macro println!("fmt", args...)',
    category: 'Rust標準マクロ',
    refGroup: 'マクロ',
    description:
      '標準出力（「出力・テスト」タブ）に書式付きメッセージを1行出力します。末尾に ! が付くのがマクロの目印です。',
    example: 'println!("歩数: {}", steps);',
    snippet: 'println!("${1:{}}", ${2:val});',
    insertText: 'println!("{}", val);',
    keywords: ['println!', '出力', 'マクロ'],
  },
  {
    label: 'eprintln!',
    type: 'function',
    detail: 'macro eprintln!("fmt", args...)',
    category: 'Rust標準マクロ',
    refGroup: 'マクロ',
    description:
      '標準エラー出力（stderr）へエラーメッセージを出します。通常の出力と分離したいときに使います。',
    example: 'eprintln!("ERR: {}", e);',
    snippet: 'eprintln!("ERR: {}", ${1:e});',
    insertText: 'eprintln!("ERR: {}", e);',
    keywords: ['eprintln!', 'エラー分離'],
  },
  {
    label: 'vec!',
    type: 'function',
    detail: 'macro vec![elem, ...]',
    category: 'Rust標準マクロ',
    refGroup: 'マクロ',
    description: '可変長配列 Vec<T> を初期値付きで手早く作成します。',
    example: 'let mut list = vec![1, 2, 3];',
    snippet: 'vec![${1:1, 2}]',
    insertText: 'vec![1, 2]',
    keywords: ['Vec', 'vec!', '配列'],
  },
  {
    label: 'assert_eq!',
    type: 'function',
    detail: 'macro assert_eq!(left, right)',
    category: 'テストマクロ',
    refGroup: 'マクロ',
    description:
      '左辺と右辺が等しいことを検証します。#[test] 関数内でよく使います。',
    example: 'assert_eq!(calc(1, 2), 3);',
    snippet: 'assert_eq!(${1:actual}, ${2:expected});',
    insertText: 'assert_eq!(actual, expected);',
    keywords: ['#[test]', 'assert_eq!', 'TDD'],
  },
  {
    label: 'assert!',
    type: 'function',
    detail: 'macro assert!(cond)',
    category: 'テストマクロ',
    refGroup: 'マクロ',
    description:
      '条件が true であることを検証します。false の場合はテストが失敗（パニック）します。',
    example: 'assert!(is_safe(3));',
    snippet: 'assert!(${1:cond});',
    insertText: 'assert!(cond);',
    keywords: ['#[test]', 'assert!', 'TDD'],
  },
  {
    label: 'panic!',
    type: 'function',
    detail: 'macro panic!("msg")',
    category: 'Rust標準マクロ',
    refGroup: 'マクロ',
    description: '回復不能なエラーとしてプログラムを即座にパニック停止させます。',
    example: 'panic!("想定外の値です");',
    snippet: 'panic!("${1:エラー}");',
    insertText: 'panic!("エラー");',
    keywords: ['panic!'],
  },
];

export const RUST_SYNTAX_ENTRIES: RustDocEntry[] = [
  {
    label: 'fn main',
    type: 'keyword',
    detail: 'プログラムの開始関数',
    category: 'Rust基本構文',
    description: 'Rustプログラムが最初に実行するエントリーポイント関数です。',
    snippet: 'fn main() {\n    ${1}\n}',
    keywords: ['main'],
  },
  {
    label: 'fn',
    type: 'keyword',
    detail: 'fn name(arg: Type) -> Ret',
    category: 'Rust基本構文',
    description:
      '新しい関数を定義します。ブロック末尾の式にセミコロン ; を付けないと戻り値になります。',
    example: 'fn double(x: i32) -> i32 {\n    x * 2\n}',
    snippet: 'fn ${1:name}(${2:x: i32}) -> ${3:i32} {\n    ${4}\n}',
    keywords: ['fn', '関数', '戻り値'],
  },
  {
    label: 'let',
    type: 'keyword',
    detail: 'let name = value;',
    category: 'Rust基本構文',
    description:
      '不変（イミュータブル）な変数を宣言します。後から値を書き換えることはできません。',
    snippet: 'let ${1:name} = ${2:val};',
    keywords: ['let', '変数'],
  },
  {
    label: 'let mut',
    type: 'keyword',
    detail: 'let mut name = value;',
    category: 'Rust基本構文',
    description:
      '可変（ミュータブル）な変数を宣言します。値の上書きや &mut 借用が可能になります。',
    ownershipNote: '値を変更する変数や .push() するベクタには mut を付けよう！',
    snippet: 'let mut ${1:name} = ${2:val};',
    keywords: ['mut', '可変性', 'let mut'],
  },
  {
    label: 'if',
    type: 'keyword',
    detail: 'if cond { ... }',
    category: '制御フロー',
    description:
      '条件が true のときだけブロックを実行します。Rustでは条件の丸カッコ () は不要です。',
    snippet: 'if ${1:cond} {\n    ${2}\n}',
    keywords: ['if'],
  },
  {
    label: 'if else',
    type: 'keyword',
    detail: 'if cond { ... } else { ... }',
    category: '制御フロー',
    description: '条件が true の場合と false の場合で処理を分岐します。',
    snippet: 'if ${1:cond} {\n    ${2}\n} else {\n    ${3}\n}',
    keywords: ['if', 'else'],
  },
  {
    label: 'if let',
    type: 'keyword',
    detail: 'if let Some(x) = opt { ... }',
    category: 'パターンマッチ',
    description:
      'Option や Result などの1つのパターンに一致するときだけ中身を取り出して実行します。',
    snippet: 'if let ${1:Some(x)} = ${2:val} {\n    ${3}\n}',
    keywords: ['if let', 'Option', 'Result'],
  },
  {
    label: 'match',
    type: 'keyword',
    detail: 'match value { ... }',
    category: 'パターンマッチ',
    description:
      '値の取りうるパターンを漏れなく分岐処理します。enum / Option / Result / Ordering で大活躍します。',
    snippet: 'match ${1:val} {\n    ${2:pat} => ${3:expr},\n    _ => ${4:{}},\n}',
    keywords: ['match', 'enum', 'Ordering', 'Result'],
  },
  {
    label: 'loop',
    type: 'keyword',
    detail: 'loop { ... break; }',
    category: '制御フロー',
    description: 'break; に到達するまで処理を繰り返す無限ループです。',
    snippet: 'loop {\n    if ${1:at_goal()} {\n        break;\n    }\n    ${2}\n}',
    keywords: ['loop', 'break'],
  },
  {
    label: 'while',
    type: 'keyword',
    detail: 'while cond { ... }',
    category: '制御フロー',
    description: '条件式が true である間ずっとブロックを繰り返します。',
    snippet: 'while ${1:cond} {\n    ${2}\n}',
    keywords: ['while'],
  },
  {
    label: 'for',
    type: 'keyword',
    detail: 'for item in iter { ... }',
    category: '制御フロー',
    description: '範囲（0..3 や 1..=5）やベクタの要素を順番に処理します。',
    snippet: 'for ${1:i} in ${2:0..3} {\n    ${3}\n}',
    keywords: ['for', 'イテレータ'],
  },
  {
    label: 'struct',
    type: 'keyword',
    detail: 'struct Name { field: Type }',
    category: '型定義',
    description: '関連するデータをひとまとめにした構造体（struct）を定義します。',
    snippet: 'struct ${1:Name} {\n    ${2:field}: ${3:i32},\n}',
    keywords: ['struct'],
  },
  {
    label: 'enum',
    type: 'keyword',
    detail: 'enum Name { Variant }',
    category: '型定義',
    description: '複数の取りうる状態（バリアント）を表す列挙型を定義します。',
    snippet: 'enum ${1:Command} {\n    ${2:Move(i32)},\n    ${3:Stop},\n}',
    keywords: ['enum'],
  },
  {
    label: 'impl',
    type: 'keyword',
    detail: 'impl Type { fn method(&self) ... }',
    category: 'メソッド・トレイト',
    description: '構造体や列挙型にメソッドやトレイト実装を紐づけます。',
    snippet:
      'impl ${1:Type} {\n    fn ${2:method}(&self) -> ${3:i32} {\n        ${4}\n    }\n}',
    keywords: ['impl', '&self', 'trait'],
  },
  {
    label: 'trait',
    type: 'keyword',
    detail: 'trait Name { fn ...; }',
    category: 'メソッド・トレイト',
    description:
      '型が備えるべき共通の振る舞い（メソッドのシグネチャ）を定義します。',
    snippet: 'trait ${1:Name} {\n    fn ${2:run}(&self) -> ${3:i32};\n}',
    keywords: ['trait', 'Box<dyn'],
  },
  {
    label: 'mod',
    type: 'keyword',
    detail: 'mod name { pub fn ... }',
    category: 'モジュール・可視性',
    description:
      'コードをモジュールに整理します。中の要素は初期状態では非公開のため、外から使うには pub が必要です。',
    snippet: 'mod ${1:kobo} {\n    pub fn ${2:drive}() {\n        ${3}\n    }\n}',
    keywords: ['mod', 'pub', 'use'],
  },
  {
    label: 'unsafe',
    type: 'keyword',
    detail: 'unsafe { ... }',
    category: 'Unsafe Rust',
    description:
      '生ポインタの参照外し（*ptr）など、コンパイラの安全チェックを一時的に解除して実行するブロックです。',
    snippet: 'unsafe { ${1:*ptr} }',
    keywords: ['unsafe', '生ポインタ'],
  },
  {
    label: '#[test]',
    type: 'keyword',
    detail: '#[test] fn test_name() { ... }',
    category: 'テスト属性',
    description:
      '自動テスト関数としてマークします。内部で assert! や assert_eq! を実行できます。',
    snippet: '#[test]\nfn ${1:test_case}() {\n    ${2:assert_eq!(1, 1);}\n}',
    keywords: ['#[test]', 'TDD'],
  },
  {
    label: '#[cfg(feature = "fast")]',
    type: 'keyword',
    detail: '条件付きコンパイル属性',
    category: 'Cargo Feature属性',
    description: '特定のフィーチャーが有効なときだけ関数や処理を有効化します。',
    snippet: '#[cfg(feature = "fast")]',
    keywords: ['cfg', 'feature'],
  },
  {
    label: 'pub',
    type: 'keyword',
    detail: '公開修飾子',
    category: 'モジュール・可視性',
    description:
      'モジュールの外から関数やフィールドへアクセスできるように公開します。',
  },
  {
    label: 'use',
    type: 'keyword',
    detail: 'use path::item;',
    category: 'モジュール・可視性',
    description:
      '別モジュールやクレートの要素を現在のスコープに短縮名として取り込みます。',
  },
  {
    label: 'return',
    type: 'keyword',
    detail: 'return expr;',
    category: '制御フロー',
    description: '関数の実行を途中で終了して値を返します。',
  },
  {
    label: 'break',
    type: 'keyword',
    detail: 'break;',
    category: '制御フロー',
    description: '最も内側の loop / while / for ループを即座に抜けます。',
  },
  {
    label: 'continue',
    type: 'keyword',
    detail: 'continue;',
    category: '制御フロー',
    description: '現在のループ周回をスキップして次の周回へ進みます。',
  },
  {
    label: 'true',
    type: 'constant',
    detail: 'bool',
    category: 'リテラル',
    description: '真を表す真偽値リテラルです。',
  },
  {
    label: 'false',
    type: 'constant',
    detail: 'bool',
    category: 'リテラル',
    description: '偽を表す真偽値リテラルです。',
  },
];

export const STD_TYPES_AND_CONCURRENCY: RustDocEntry[] = [
  {
    label: 'Some',
    type: 'enum',
    detail: 'Option::Some(value)',
    category: 'Option / Result',
    refGroup: '標準関数',
    description: '「値が存在する」ことを表す Option 型のバリアントです。',
    example: 'let maybe_steps = Some(3);',
    snippet: 'Some(${1:val})',
    insertText: 'Some(val)',
    keywords: ['Option', 'if let', 'match'],
  },
  {
    label: 'None',
    type: 'enum',
    detail: 'Option::None',
    category: 'Option / Result',
    description: '「値が空である」ことを表す Option 型のバリアントです。',
    keywords: ['Option'],
  },
  {
    label: 'Ok',
    type: 'enum',
    detail: 'Result::Ok(value)',
    category: 'Option / Result',
    refGroup: '標準関数',
    description: '処理の「成功」と結果値を表す Result 型のバリアントです。',
    example: 'Ok(val)',
    snippet: 'Ok(${1:val})',
    insertText: 'Ok(val)',
    keywords: ['Result', '?'],
  },
  {
    label: 'Err',
    type: 'enum',
    detail: 'Result::Err(error)',
    category: 'Option / Result',
    refGroup: '標準関数',
    description: '処理の「失敗」とエラー情報を表す Result 型のバリアントです。',
    example: 'Err(e)',
    snippet: 'Err(${1:e})',
    insertText: 'Err(e)',
    keywords: ['Result'],
  },
  {
    label: 'Ordering::Less',
    type: 'enum',
    detail: 'cmp の比較結果（小さい）',
    category: '比較列挙型',
    description: '左辺が右辺より小さいことを表します。',
    keywords: ['Ordering', 'cmp', 'try_dial'],
  },
  {
    label: 'Ordering::Greater',
    type: 'enum',
    detail: 'cmp の比較結果（大きい）',
    category: '比較列挙型',
    description: '左辺が右辺より大きいことを表します。',
    keywords: ['Ordering', 'cmp', 'try_dial'],
  },
  {
    label: 'Ordering::Equal',
    type: 'enum',
    detail: 'cmp の比較結果（一致）',
    category: '比較列挙型',
    description: '2つの値が完全に等しいことを表します。',
    keywords: ['Ordering', 'cmp', 'try_dial'],
  },
  {
    label: 'String::from',
    type: 'function',
    detail: 'String::from("...") -> String',
    category: '文字列型',
    refGroup: '標準関数',
    description:
      '文字列スライス &str から所有権を持つ可変文字列 String を生成します。',
    example: 'let mut msg = String::from("RUST");',
    snippet: 'String::from("${1:text}")',
    insertText: 'String::from("text")',
    keywords: ['String', 'push_str'],
  },
  {
    label: 'Vec::new',
    type: 'function',
    detail: 'Vec::new() -> Vec<T>',
    category: 'コレクション',
    refGroup: '標準関数',
    description: '空の可変長配列（ベクタ）を作成します。',
    example: 'let mut list = Vec::new();',
    snippet: 'Vec::new()',
    insertText: 'Vec::new()',
    keywords: ['Vec'],
  },
  {
    label: 'HashMap::new',
    type: 'function',
    detail: 'HashMap::new() -> HashMap<K, V>',
    category: 'コレクション',
    refGroup: '標準関数',
    description: 'キーと値のペアを保存する空のハッシュマップを作成します。',
    example: 'let mut map = HashMap::new();',
    snippet: 'HashMap::new()',
    insertText: 'HashMap::new()',
    keywords: ['HashMap', 'insert'],
  },
  {
    label: 'Box::new',
    type: 'function',
    detail: 'Box::new(val) -> Box<T>',
    category: 'スマートポインタ',
    refGroup: '標準関数',
    description:
      '値をヒープ領域に確保するスマートポインタです。*b で中身を参照できます。',
    example: 'let b = Box::new(3);\nstep(*b);',
    snippet: 'Box::new(${1:val})',
    insertText: 'Box::new(3)',
    keywords: ['Box', 'Deref', 'dyn'],
  },
  {
    label: 'Rc::new',
    type: 'function',
    detail: 'Rc::new(val) -> Rc<T>',
    category: 'スマートポインタ',
    refGroup: '標準関数',
    description:
      '単一スレッド内で複数の所有者を共有できる参照カウント型ポインタです。',
    ownershipNote: 'Rc::clone(&a) で参照カウントを増やして所有権を共有します。',
    example: 'let master = Rc::new(3);',
    snippet: 'Rc::new(${1:val})',
    insertText: 'Rc::new(3)',
    keywords: ['Rc', '共有'],
  },
  {
    label: 'Rc::clone',
    type: 'function',
    detail: 'Rc::clone(&rc) -> Rc<T>',
    category: 'スマートポインタ',
    refGroup: '標準関数',
    description:
      'データ本体をコピーせず、Rc の参照カウントだけを増やして新しい所有権ハンドルを作ります。',
    example: 'let share = Rc::clone(&master);',
    snippet: 'Rc::clone(&${1:rc})',
    insertText: 'Rc::clone(&master)',
    keywords: ['Rc', 'clone'],
  },
  {
    label: 'RefCell::new',
    type: 'function',
    detail: 'RefCell::new(val) -> RefCell<T>',
    category: 'スマートポインタ',
    refGroup: '標準関数',
    description:
      'コンパイル時ではなく「実行時」に借用ルールをチェックする内部可変性コンテナです。',
    ownershipNote:
      'borrow_mut() 中に再度 borrow() / borrow_mut() するとパニックします！',
    example: 'let cell = RefCell::new(3);',
    snippet: 'RefCell::new(${1:val})',
    insertText: 'RefCell::new(3)',
    keywords: ['RefCell', 'borrow'],
  },
  {
    label: 'Arc::new',
    type: 'function',
    detail: 'Arc::new(val) -> Arc<T>',
    category: '並行処理・スマートポインタ',
    refGroup: '標準関数',
    description:
      'スレッド間で安全に共有できるアトミック参照カウント型ポインタです（Send + Sync）。',
    example: 'let vault = Arc::new(Mutex::new(0));',
    snippet: 'Arc::new(${1:val})',
    insertText: 'Arc::new(val)',
    keywords: ['Arc', 'Mutex', 'Send', 'Sync'],
  },
  {
    label: 'Arc::clone',
    type: 'function',
    detail: 'Arc::clone(&arc) -> Arc<T>',
    category: '並行処理・スマートポインタ',
    refGroup: '標準関数',
    description:
      '別スレッドへ渡すための Arc クローン（参照カウント+1）を作成します。',
    example: 'let shared = Arc::clone(&vault);',
    snippet: 'Arc::clone(&${1:shared})',
    insertText: 'Arc::clone(&shared)',
    keywords: ['Arc', 'Mutex'],
  },
  {
    label: 'Mutex::new',
    type: 'function',
    detail: 'Mutex::new(val) -> Mutex<T>',
    category: '並行処理・排他制御',
    refGroup: '標準関数',
    description:
      '同時に1つのスレッドだけが中身を安全に書き換えられるようロックで保護します。',
    example: 'let m = Mutex::new(0);',
    snippet: 'Mutex::new(${1:0})',
    insertText: 'Mutex::new(0)',
    keywords: ['Mutex', 'Arc', 'lock'],
  },
  {
    label: 'mpsc::channel',
    type: 'function',
    detail: 'mpsc::channel() -> (Sender, Receiver)',
    category: '並行処理・通信',
    refGroup: '標準関数',
    description:
      'スレッド間で値を安全に送受信するチャンネルの送信側 (tx) と受信側 (rx) の組を作ります。',
    example: 'let (tx, rx) = mpsc::channel();',
    snippet: 'mpsc::channel()',
    insertText: 'mpsc::channel()',
    keywords: ['mpsc', 'channel', 'send', 'recv'],
  },
  {
    label: 'thread::spawn',
    type: 'function',
    detail: 'thread::spawn(move || { ... }) -> JoinHandle',
    category: '並行処理・スレッド',
    refGroup: '標準関数',
    description:
      '新しい並列スレッドを起動し、クロージャ内の処理（みるく号）を同時に走らせます。',
    ownershipNote:
      '外の変数を安全に渡すには move || や Arc<Mutex<T>> を使おう！',
    example: 'let h = thread::spawn(move || {\n    step(2);\n});',
    snippet: 'thread::spawn(move || {\n    ${1}\n})',
    insertText: 'thread::spawn(move || {\n    \n})',
    keywords: ['thread', 'spawn', '並列'],
  },
  {
    label: 'ThreadPool::new',
    type: 'function',
    detail: 'ThreadPool::new(size: i32) -> ThreadPool',
    category: '並行処理・最終課題',
    refGroup: '標準関数',
    description:
      '指定本数のワーカースレッドを束ねたスレッドプールを作成します。drop(pool) で全ジョブ完了を待ちます。',
    example: 'let pool = ThreadPool::new(2);',
    snippet: 'ThreadPool::new(${1:2})',
    insertText: 'ThreadPool::new(2)',
    keywords: ['ThreadPool', 'Drop'],
  },
  {
    label: 'drop',
    type: 'function',
    detail: 'drop(value)',
    category: '所有権・リソース解放',
    refGroup: '標準関数',
    description:
      '値の所有権を受け取って即座に破棄・解放します。MutexGuard の早め解除や ThreadPool の終了待機に使います。',
    example: 'drop(pool);',
    snippet: 'drop(${1:val});',
    insertText: 'drop(pool);',
    keywords: ['drop', 'Drop', 'ThreadPool', 'Mutex'],
  },
  {
    label: 'i32',
    type: 'type',
    detail: '32bit 符号付き整数型',
    category: '基本データ型',
    description: '整数（例: -5, 0, 42）を表す標準的な型です。',
  },
  {
    label: 'bool',
    type: 'type',
    detail: '真偽値型 (true / false)',
    category: '基本データ型',
    description: 'はい（true）または いいえ（false）を表す型です。',
  },
  {
    label: 'String',
    type: 'type',
    detail: '所有権付き可変文字列',
    category: '文字列型',
    description: '文字の追加や変更ができるヒープ管理の文字列型です。',
  },
  {
    label: 'Vec',
    type: 'type',
    detail: 'Vec<T> 可変長ベクタ',
    category: 'コレクション',
    description: '要素数を動的に増やせる配列コンテナです。',
  },
  {
    label: 'Option',
    type: 'type',
    detail: 'Option<T> (Some / None)',
    category: '標準列挙型',
    description: '値があるかないかを表す安全な型です（null の代わり）。',
  },
  {
    label: 'Result',
    type: 'type',
    detail: 'Result<T, E> (Ok / Err)',
    category: '標準列挙型',
    description: '成功（Ok）またはエラー（Err）を表す型です。',
  },
];

export const METHOD_ENTRIES: RustDocEntry[] = [
  {
    label: 'unwrap',
    type: 'method',
    detail: '.unwrap() -> T',
    category: 'Option / Result メソッド',
    refGroup: 'メソッド',
    description:
      'Some(v) や Ok(v) の中身を取り出します。None や Err の場合は即パニックするため安全な場面でのみ使います。',
    ownershipNote: '失敗しうる場面では match や .unwrap_or() や ? を使おう！',
    example: 'let received = rx.recv().unwrap();',
    snippet: 'unwrap()',
    insertText: '.unwrap()',
    isMethod: true,
    keywords: ['Result', 'Option', 'lock', 'recv'],
  },
  {
    label: 'unwrap_or',
    type: 'method',
    detail: '.unwrap_or(default) -> T',
    category: 'Option / Result メソッド',
    refGroup: 'メソッド',
    description:
      'Some / Ok ならその値、None / Err ならパニックせずに代替の default 値を返します。',
    example: 'let val = read_part(-1).unwrap_or(3);',
    snippet: 'unwrap_or(${1:0})',
    insertText: '.unwrap_or(0)',
    isMethod: true,
    keywords: ['unwrap_or', 'panic', 'Result'],
  },
  {
    label: 'clone',
    type: 'method',
    detail: '.clone() -> Self',
    category: '共有・複製メソッド',
    refGroup: 'メソッド',
    description:
      '値の複製（Rc / Arc の場合は参照カウントの増加）を行います。',
    example: 'let copy = item.clone();',
    snippet: 'clone()',
    insertText: '.clone()',
    isMethod: true,
    keywords: ['Rc', 'Arc', 'clone'],
  },
  {
    label: 'push',
    type: 'method',
    detail: '.push(item)',
    category: 'Vec メソッド',
    refGroup: 'メソッド',
    description: '可変ベクタ（let mut）の末尾に新しい要素を追加します。',
    example: 'steps.push(1);',
    snippet: 'push(${1:val})',
    insertText: '.push(1)',
    isMethod: true,
    keywords: ['Vec', 'push'],
  },
  {
    label: 'push_str',
    type: 'method',
    detail: '.push_str("&str")',
    category: 'String メソッド',
    refGroup: 'メソッド',
    description:
      '可変 String（let mut）の末尾に文字列スライスを連結します。',
    example: 'msg.push_str("_OK");',
    snippet: 'push_str("${1:_OK}")',
    insertText: '.push_str("_OK")',
    isMethod: true,
    keywords: ['String', 'push_str'],
  },
  {
    label: 'insert',
    type: 'method',
    detail: '.insert(key, value)',
    category: 'HashMap メソッド',
    refGroup: 'メソッド',
    description: 'HashMap にキーと値のペアを登録（または上書き）します。',
    example: 'map.insert("crab", 3);',
    snippet: 'insert(${1:"key"}, ${2:val})',
    insertText: '.insert("key", val)',
    isMethod: true,
    keywords: ['HashMap', 'insert'],
  },
  {
    label: 'get',
    type: 'method',
    detail: '.get(key_or_index) -> Option<&V>',
    category: 'コレクション メソッド',
    refGroup: 'メソッド',
    description:
      '指定キーまたは添字の要素を安全に Option（Some / None）として取得します。',
    example: 'if let Some(n) = map.get("crab") { ... }',
    snippet: 'get(${1:0})',
    insertText: '.get("key")',
    isMethod: true,
    keywords: ['HashMap', 'Vec', 'Option'],
  },
  {
    label: 'len',
    type: 'method',
    detail: '.len() -> usize',
    category: 'コレクション メソッド',
    refGroup: 'メソッド',
    description: 'ベクタ・スライス・文字列などの要素数や長さを返します。',
    example: 'let n = list.len();',
    snippet: 'len()',
    insertText: '.len()',
    isMethod: true,
    keywords: ['Vec', 'スライス'],
  },
  {
    label: 'iter',
    type: 'method',
    detail: '.iter()',
    category: 'イテレータ メソッド',
    refGroup: 'メソッド',
    description:
      '要素を順番に借りて処理するイテレータを作ります。.filter() や .map() と繋げて使えます。',
    example: 'batch.iter().filter(|x| x >= 10).sum()',
    snippet: 'iter()',
    insertText: '.iter()',
    isMethod: true,
    keywords: ['iter', 'filter', 'map'],
  },
  {
    label: 'filter',
    type: 'method',
    detail: '.filter(|x| cond)',
    category: 'イテレータ メソッド',
    refGroup: 'メソッド',
    description: 'クロージャの条件が true になる要素だけを残します。',
    example: '.filter(|x| x >= 10)',
    snippet: 'filter(|${1:x}| ${2:x >= 10})',
    insertText: '.filter(|x| x >= 10)',
    isMethod: true,
    keywords: ['iter', 'filter', 'クロージャー'],
  },
  {
    label: 'map',
    type: 'method',
    detail: '.map(|x| expr)',
    category: 'イテレータ メソッド',
    refGroup: 'メソッド',
    description: '各要素にクロージャを適用して新しい値へ変換します。',
    example: '.map(|x| x / 10)',
    snippet: 'map(|${1:x}| ${2:x / 10})',
    insertText: '.map(|x| x / 10)',
    isMethod: true,
    keywords: ['iter', 'map', 'クロージャー'],
  },
  {
    label: 'sum',
    type: 'method',
    detail: '.sum() -> i32',
    category: 'イテレータ メソッド',
    refGroup: 'メソッド',
    description: 'イテレータの全数値要素を合計します。',
    example: 'let total = batch.iter().sum();',
    snippet: 'sum()',
    insertText: '.sum()',
    isMethod: true,
    keywords: ['iter', 'sum'],
  },
  {
    label: 'collect',
    type: 'method',
    detail: '.collect()',
    category: 'イテレータ メソッド',
    refGroup: 'メソッド',
    description: 'イテレータの処理結果を Vec などのコレクションにまとめます。',
    example: 'let v = list.iter().map(|x| x * 2).collect();',
    snippet: 'collect()',
    insertText: '.collect()',
    isMethod: true,
    keywords: ['iter'],
  },
  {
    label: 'borrow',
    type: 'method',
    detail: '.borrow() -> Ref<T>',
    category: 'RefCell メソッド',
    refGroup: 'メソッド',
    description:
      'RefCell の中身を不変借用します。同時に可変借用中だと実行時パニックになります。',
    example: 'let v = cell.borrow();',
    snippet: 'borrow()',
    insertText: '.borrow()',
    isMethod: true,
    keywords: ['RefCell', 'borrow'],
  },
  {
    label: 'borrow_mut',
    type: 'method',
    detail: '.borrow_mut() -> RefMut<T>',
    category: 'RefCell メソッド',
    refGroup: 'メソッド',
    description: 'RefCell の中身を書き換え可能な形で借用します。',
    example: 'let mut r1 = cell.borrow_mut();',
    snippet: 'borrow_mut()',
    insertText: '.borrow_mut()',
    isMethod: true,
    keywords: ['RefCell', 'borrow'],
  },
  {
    label: 'send',
    type: 'method',
    detail: '.send(val) -> Result<(), E>',
    category: 'mpsc チャンネルメソッド',
    refGroup: 'メソッド',
    description:
      '送信側 tx から値をチャンネルへ送ります。送った値の所有権は受信側へ移ります（Move）。',
    example: 'tx.send(core);',
    snippet: 'send(${1:core})',
    insertText: '.send(core)',
    isMethod: true,
    keywords: ['mpsc', 'channel', 'send'],
  },
  {
    label: 'recv',
    type: 'method',
    detail: '.recv() -> Result<T, E>',
    category: 'mpsc チャンネルメソッド',
    refGroup: 'メソッド',
    description:
      '受信側 rx で値が届くまで待機し、届いたら所有権を受け取ります。',
    example: 'let received = rx.recv().unwrap();',
    snippet: 'recv()',
    insertText: '.recv()',
    isMethod: true,
    keywords: ['mpsc', 'channel', 'recv'],
  },
  {
    label: 'lock',
    type: 'method',
    detail: '.lock() -> Result<MutexGuard<T>, E>',
    category: 'Mutex メソッド',
    refGroup: 'メソッド',
    description:
      '他スレッドがロックを解放するまで待機し、安全に書き換えるためのガードを取得します。',
    example: 'let mut g = shared.lock().unwrap();',
    snippet: 'lock()',
    insertText: '.lock()',
    isMethod: true,
    keywords: ['Mutex', 'Arc', 'lock'],
  },
  {
    label: 'execute',
    type: 'method',
    detail: '.execute(|| { ... })',
    category: 'ThreadPool メソッド',
    refGroup: 'メソッド',
    description:
      'スレッドプールのワーカースレッドにジョブ（クロージャ）を割り当てて並列実行します。',
    example: 'pool.execute(|| {\n    add_vault(1);\n});',
    snippet: 'execute(|| {\n    ${1}\n});',
    insertText: '.execute(|| {\n    \n});',
    isMethod: true,
    keywords: ['ThreadPool', 'execute'],
  },
  {
    label: 'join',
    type: 'method',
    detail: '.join() -> Result',
    category: 'スレッド メソッド',
    refGroup: 'メソッド',
    description:
      'spawn した別スレッドの処理が完了するまで現在のスレッドを待機させます。',
    example: 'handle.join();',
    snippet: 'join()',
    insertText: '.join()',
    isMethod: true,
    keywords: ['thread', 'spawn', 'join'],
  },
  {
    label: 'cmp',
    type: 'method',
    detail: '.cmp(&other) -> Ordering',
    category: '比較メソッド',
    refGroup: 'メソッド',
    description:
      '2つの値を比較して Ordering::Less / Greater / Equal を返します。',
    example: 'match a.cmp(&b) {\n    Ordering::Equal => ...,\n    _ => ...,\n}',
    snippet: 'cmp(&${1:other})',
    insertText: '.cmp(&other)',
    isMethod: true,
    keywords: ['Ordering', 'cmp'],
  },
];

const ALWAYS_BASIC_LABELS = new Set([
  'step',
  'turn_right',
  'turn_left',
  'println!',
]);

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function matchesEntryInCode(entry: RustDocEntry, codeCorpus: string): boolean {
  const escaped = escapeRegExp(entry.label);
  if (entry.isMethod) {
    return new RegExp(`\\.${escaped}\\b`).test(codeCorpus);
  }
  if (entry.label.endsWith('!')) {
    return new RegExp(`\\b${escaped}`).test(codeCorpus);
  }
  if (entry.label.includes('::')) {
    return new RegExp(`\\b${escaped}\\b`).test(codeCorpus);
  }
  return new RegExp(`\\b${escaped}\\s*\\(`).test(codeCorpus);
}

function matchesWorldFeature(label: string, stage: StageDefinition): boolean {
  const ws = stage.worldSetup;
  const vc = stage.victoryCondition;

  if (ws.gates && ws.gates.length > 0) {
    if (label === 'is_gate_open' || label === 'wait_tick') return true;
    if (ws.gates.some((g) => Boolean(g.linkedSwitch)) && label === 'unlock_gate') {
      return true;
    }
  }
  if (ws.sparks && ws.sparks.length > 0) {
    if (label === 'is_spark_ahead' || label === 'wait_tick') return true;
  }
  if (ws.switches && ws.switches.length > 0) {
    if (label === 'is_on_switch') return true;
  }
  if (ws.cores && ws.cores.length > 0) {
    if (label === 'grab_core' || label === 'deliver') return true;
    if (ws.scanners && ws.scanners.length > 0 && label === 'scan') return true;
    if (ws.chargers && ws.chargers.length > 0 && label === 'boost') return true;
  }
  if (ws.vault && label === 'add_vault') return true;
  if (ws.dial && label === 'try_dial') return true;
  if (ws.conveyorItems && ws.conveyorItems.length > 0) {
    if (label === 'conveyor_batch' || label === 'inspect_slice') return true;
  }
  if (ws.cliArgs && ws.cliArgs.length > 0) {
    if (label === 'cli_args' || label === 'env_flag') return true;
  }
  if (ws.jobs && ws.jobs.length > 0) {
    if (
      label === 'job_queue' ||
      label === 'ThreadPool::new' ||
      label === 'execute' ||
      label === 'drop'
    ) {
      return true;
    }
  }
  if (ws.workerStart && (label === 'thread::spawn' || label === 'join')) {
    return true;
  }
  if (vc.testsRequired && vc.testsRequired > 0) {
    if (label === 'assert_eq!' || label === 'assert!') return true;
  }
  if (vc.stderrIncludes && vc.stderrIncludes.length > 0 && label === 'eprintln!') {
    return true;
  }
  if (vc.requireSafeErrorHandling) {
    if (label === 'read_part' || label === 'unwrap_or' || label === 'Ok' || label === 'Err') {
      return true;
    }
  }
  return false;
}

export function getStageFunctionDocs(stage: StageDefinition): StageFunctionDoc[] {
  const codeCorpus = [
    stage.starterCode,
    stage.solutionCode,
    stage.bookKeyCode,
    ...stage.quickChips.map((c) => `${c.label} ${c.insert}`),
  ].join('\n');

  const textCorpus = [
    stage.topicTag,
    stage.goalSummary,
    stage.kurumiIntro,
    stage.bookSummary,
  ].join('\n');

  const callableEntries = [
    ...WORKSHOP_API_ENTRIES,
    ...MACRO_ENTRIES,
    ...STD_TYPES_AND_CONCURRENCY,
    ...METHOD_ENTRIES,
  ].filter(
    (entry) =>
      (entry.type === 'function' ||
        entry.type === 'method' ||
        entry.label === 'Some' ||
        entry.label === 'Ok' ||
        entry.label === 'Err') &&
      Boolean(entry.refGroup)
  );

  const results: StageFunctionDoc[] = [];

  for (const entry of callableEntries) {
    const inCode = matchesEntryInCode(entry, codeCorpus);
    const inText =
      matchesEntryInCode(entry, textCorpus) ||
      (entry.label === 'cmp' && textCorpus.includes('cmp'));
    const inWorld = matchesWorldFeature(entry.label, stage);
    const isBasic = ALWAYS_BASIC_LABELS.has(entry.label);

    if (!inCode && !inText && !inWorld && !isBasic) continue;

    // If it's a standard enum constructor (Some/Ok/Err), only treat it as primary when actually used/mentioned in stage
    const isPrimary = inCode || inText || inWorld;

    results.push({
      ...entry,
      refGroup: entry.refGroup!,
      insertText: entry.insertText ?? entry.example ?? `${entry.label}()`,
      isPrimary,
    });
  }

  // Sort: primary stage-specific APIs first, then basic robot controls; keep catalog order within each tier
  const groupPriority: Record<ReferenceCategoryGroup, number> = {
    工房API: 0,
    マクロ: 1,
    標準関数: 2,
    メソッド: 3,
  };

  return results.sort((a, b) => {
    if (a.isPrimary !== b.isPrimary) return a.isPrimary ? -1 : 1;
    const ga = groupPriority[a.refGroup];
    const gb = groupPriority[b.refGroup];
    if (ga !== gb) return ga - gb;
    return 0;
  });
}
