import { StageDefinition } from '../types/game';

export const CHAPTER_9_12_PUZZLES: StageDefinition[] = [
  // =========================================================================
  // 第9章 エラー処理 パズル・挑戦拡張 (9-13 〜 9-24)
  // =========================================================================
  {
    displayId: '9-13',
    id: 'e191b416-e095-5ee1-9b79-8582cbfe3795',
    index: 0,
    chapter: 9,
    chapterTitle: '第9章 エラー処理',
    stageKind: 'puzzle',
    title: '9-13. Result フォールバックとコンベア分岐',
    topicTag: 'unwrap_or + コンベア',
    kurumiIntro:
      'センサーが故障してもロボットを止めちゃダメ！`.unwrap_or(値)` で予備の歩数に切り替えて、2つのコンベアを乗り継ぎながらスイッチを踏もう。',
    goalSummary: 'Result フォールバックでパニックせずスイッチを踏み (5, 3) へ',
    bookSectionTitle: '9.1 & 9.2 現場機械を止めないフォールバック値',
    bookSummary:
      '異常系を受け取った際に安全な既定値へ切り替えることで、搬送ライン全体を停止させずに走り切れます。',
    bookKeyCode: 'let dy = read_part(-1).unwrap_or(1);',
    starterCode: `fn main() {
    let dx = read_part(1).unwrap_or(0) / 10;
    // 故障センサー read_part(-1) は 1 歩になるようフォールバックしよう！今は unwrap() でパニックするよ
    let dy = read_part(-1).unwrap();
    step(dx);
    turn_right();
    step(dy);
    turn_left();
    step(2);
}`,
    solutionCode: `fn main() {
    let dx = read_part(1).unwrap_or(0) / 10;
    let dy = read_part(-1).unwrap_or(1);
    step(dx);
    turn_right();
    step(dy);
    turn_left();
    step(2);
}`,
    quickChips: [
      { label: '.unwrap_or(1)', insert: '.unwrap_or(1)' },
    ],
    hints: [
      'read_part(-1).unwrap() を呼ぶとパニック停止しちゃうよ！',
      'dx = 1 でコンベア(1,1)が(2,1)スイッチへ運ぶよ。dy は `.unwrap_or(1)` にして(2,2)コンベアに乗ろう！',
      'let dy = read_part(-1).unwrap_or(1);',
    ],
    worldSetup: {
      width: 6,
      height: 5,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 3, y: 1 }, { x: 4, y: 1 }, { x: 5, y: 1 },
        { x: 3, y: 2 }, { x: 4, y: 2 }, { x: 5, y: 2 },
        { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 }, { x: 5, y: 4 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 5, y: 3 },
      switches: [{ x: 2, y: 1 }],
      gates: [{ x: 4, y: 3, openTicks: 1, closedTicks: 1, linkedSwitch: { x: 2, y: 1 } }],
      conveyors: [
        { x: 1, y: 1, dir: 0 },
        { x: 2, y: 2, dir: 1 },
        { x: 3, y: 3, dir: 0 },
      ],
    },
    victoryCondition: { reachGoal: true, requireAllSwitches: true, requireSafeErrorHandling: true },
    parTicks: 7,
  },
  {
    displayId: '9-14',
    id: '347b5576-609f-5487-9baa-3c95ffef4880',
    index: 0,
    chapter: 9,
    chapterTitle: '第9章 エラー処理',
    stageKind: 'puzzle',
    title: '9-14. 異常センサーは迂回！スパーク前安全判定',
    topicTag: 'match Result + スパーク回避',
    kurumiIntro:
      'センサー検査が `Ok(v)` のときだけ直進し、`Err` なら 1 ティック待ってから安全確認付きで進もう！巡回スパークを越えてゴールを目指すよ。',
    goalSummary: 'Result の match 分岐と安全待機でスパークを越えて (5, 1) へ',
    bookSectionTitle: '9.2 エラーとセンサー異常を組み合わせた回復',
    bookSummary:
      '結果値 `Result` の判定と空間センサー（スパーク・ゲート）を組み合わせて、絶対に止まらない安全な制御を書きます。',
    bookKeyCode: 'match read_part(-2) { Ok(v) => ..., Err(_) => ... }',
    starterCode: `fn safe_step(n: i32) {
    for _ in 0..n {
        while is_spark_ahead() || !is_gate_open() { wait_tick(1); }
        step();
    }
}

fn main() {
    let steps = match read_part(-2) {
        Ok(v) => v / 10,
        // Err のときに代替歩数 5 を返すように直そう！今は 0 だよ
        Err(_) => 0,
    };
    add_vault(steps);
    safe_step(steps);
}`,
    solutionCode: `fn safe_step(n: i32) {
    for _ in 0..n {
        while is_spark_ahead() || !is_gate_open() { wait_tick(1); }
        step();
    }
}

fn main() {
    let steps = match read_part(-2) {
        Ok(v) => v / 10,
        Err(_) => 5,
    };
    add_vault(steps);
    safe_step(steps);
}`,
    quickChips: [
      { label: 'Err(_) => 5,', insert: 'Err(_) => 5,' },
    ],
    hints: [
      'Err(_) => 0 になっているため steps が 0 で一歩も進めないよ！',
      'Err(_) => 5 にすれば金庫⚡5も(5,1)ゴールも一気に達成できるよ。',
      'Err(_) => 5,',
    ],
    worldSetup: {
      width: 6,
      height: 5,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 2 }, { x: 5, y: 2 },
        { x: 0, y: 3 }, { x: 1, y: 3 }, { x: 3, y: 3 }, { x: 4, y: 3 }, { x: 5, y: 3 },
        { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 }, { x: 5, y: 4 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 5, y: 1 },
      switches: [{ x: 1, y: 1 }],
      gates: [{ x: 3, y: 1, openTicks: 1, closedTicks: 1, linkedSwitch: { x: 1, y: 1 } }],
      vault: { x: 4, y: 0, initial: 0, target: 5 },
      sparks: [
        { id: 'sp1', path: [{ x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 2, y: 2 }, { x: 2, y: 1 }], initialIndex: 0 },
      ],
    },
    victoryCondition: { reachGoal: true, vaultTarget: 5, requireAllSwitches: true, requireSafeErrorHandling: true },
    parTicks: 9,
  },
  {
    displayId: '9-15',
    id: '12b4325e-3fae-5070-b5cc-4ac200fee821',
    index: 0,
    chapter: 9,
    chapterTitle: '第9章 エラー処理',
    stageKind: 'puzzle',
    title: '9-15. ? 連鎖関数とコア検査納品',
    topicTag: '? 演算子 + コア納品',
    kurumiIntro:
      '部品検査が1つでも `Err` ならすぐ中断して代替プランに切り替える関数を `?` で作ろう！コアを検査台→強化台→納品台へ安全に届けるよ。',
    goalSummary: 'calc_vault() の ? 連鎖を修復して金庫⚡5・コア⚡4+納品へ',
    bookSectionTitle: '9.2 ? による複数バリデーションの結合',
    bookSummary:
      '複数の確認処理を `?` で連結すると、途中のエラーを漏れなくキャッチしつつ正常時のロジックを綺麗に並べられます。',
    bookKeyCode: 'let a = validate(2)?;\nlet b = validate(3)?;',
    starterCode: `fn validate(n: i32) -> Result<i32, String> {
    if n > 0 { Ok(n) } else { Err("無効") }
}

fn calc_vault() -> Result<i32, String> {
    let a = validate(2)?;
    // ↓ -1 を渡すと Err で早期リターンしちゃう！3 に直して 2 + 3 = 5 を返そう
    let b = validate(-1)?;
    Ok(a + b)
}

fn main() {
    let v = calc_vault().unwrap_or(0);
    add_vault(v);
    step(1);
    let mut core = grab_core();
    step(1);
    scan(&core);
    step(1);
    boost(&mut core);
    step(1);
    deliver(core);
}`,
    solutionCode: `fn validate(n: i32) -> Result<i32, String> {
    if n > 0 { Ok(n) } else { Err("無効") }
}

fn calc_vault() -> Result<i32, String> {
    let a = validate(2)?;
    let b = validate(3)?;
    Ok(a + b)
}

fn main() {
    let v = calc_vault().unwrap_or(0);
    add_vault(v);
    step(1);
    let mut core = grab_core();
    step(1);
    scan(&core);
    step(1);
    boost(&mut core);
    step(1);
    deliver(core);
}`,
    quickChips: [
      { label: 'validate(3)?', insert: 'validate(3)?' },
    ],
    hints: [
      'validate(-1)? が Err を返しているため、unwrap_or(0) で金庫に 0 しか入っていないよ！',
      'validate(3)? に直すと a + b = 5 が返って金庫目標⚡5が達成できるよ。',
      'let b = validate(3)?;',
    ],
    worldSetup: {
      width: 5,
      height: 3,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 2 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 4, y: 1 },
      cores: [{ id: 'c1', x: 1, y: 1, power: 2, label: '検査コア' }],
      scanners: [{ x: 2, y: 1 }],
      chargers: [{ x: 3, y: 1 }],
      deliveries: [{ x: 4, y: 1 }],
      vault: { x: 0, y: 0, initial: 0, target: 5 },
    },
    victoryCondition: { reachGoal: true, deliverCores: 1, minCorePower: 4, scanCount: 1, vaultTarget: 5, requireSpatialCoreRules: true, requireSafeErrorHandling: true },
    parTicks: 10,
  },
  {
    displayId: '9-16',
    id: 'bb40b425-1e21-5e54-b451-89d99fcf5820',
    index: 0,
    chapter: 9,
    chapterTitle: '第9章 エラー処理',
    stageKind: 'puzzle',
    title: '9-16. コンベア異常ログと Result 分別',
    topicTag: 'Result + Errログ + コンベア',
    kurumiIntro:
      '部品配列の中に壊れた部品と正常な部品が混ざっているよ！正常なら金庫へ、`Err` なら標準エラー出力に警告を残しつつ進んで、コンベアの先を目指そう。',
    goalSummary: 'Ok の合計⚡4を金庫に入れ、"WARN_PART" を出して (5, 1) へ',
    bookSectionTitle: '9.2 正常値の集計と異常値のログ分離',
    bookSummary:
      '配列の `Result` を処理するとき、`Ok` だけを集計しつつ `Err` はログ出力や代替行動に回す実用的なパターンです。',
    bookKeyCode: 'match r { Ok(v) => sum += v, Err(_) => println!("WARN_PART") }',
    starterCode: `fn main() {
    let inputs = vec![read_part(2), read_part(-1), read_part(2)];
    let mut sum = 0;
    for r in inputs {
        match r {
            Ok(v) => sum += v / 10,
            Err(_) => println!("SKIP"),
        }
    }
    add_vault(sum);
    step(3);
}`,
    solutionCode: `fn main() {
    let inputs = vec![read_part(2), read_part(-1), read_part(2)];
    let mut sum = 0;
    for r in inputs {
        match r {
            Ok(v) => sum += v / 10,
            Err(_) => println!("WARN_PART"),
        }
    }
    add_vault(sum);
    step(3);
}`,
    quickChips: [
      { label: 'println!("WARN_PART")', insert: 'println!("WARN_PART")' },
    ],
    hints: [
      'Err(_) のときのログ出力が "SKIP" になっているよ！目標は "WARN_PART" だよ。',
      'コンベア(1,1)と(3,1)が押し出してくれるから step(3) で (5,1) のゴールに着くよ！',
      'Err(_) => println!("WARN_PART"),',
    ],
    worldSetup: {
      width: 6,
      height: 3,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 2 }, { x: 5, y: 2 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 5, y: 1 },
      conveyors: [
        { x: 1, y: 1, dir: 0 },
        { x: 3, y: 1, dir: 0 },
      ],
      vault: { x: 2, y: 0, initial: 0, target: 4 },
    },
    victoryCondition: { reachGoal: true, vaultTarget: 4, stdoutIncludes: ['WARN_PART'], requireSafeErrorHandling: true },
    parTicks: 6,
  },
  {
    displayId: '9-17',
    id: '83c80558-999e-5c81-8598-4de72b9acf09',
    index: 0,
    chapter: 9,
    chapterTitle: '第9章 エラー処理',
    stageKind: 'puzzle',
    title: '9-17. 2つのダイヤル確認を Result でつなぐ',
    topicTag: 'Result + ダイヤル解錠',
    kurumiIntro:
      'ダイヤルの暗証番号が条件を満たすか `check_dial(n) -> Result<i32, String>` で確かめてから解錠しよう！不正な値はしっかり `Err` で弾く安全設計だよ。',
    goalSummary: 'Result 検証つきの値 5 でダイヤルを解きスイッチ先 (5, 1) へ',
    bookSectionTitle: '9.2 入力バリデーションを Result で表現する',
    bookSummary:
      '不正な引数が紛れ込む前に `Result` で範囲チェックを行い、有効な値だけをデバイス制御に渡す設計です。',
    bookKeyCode: 'fn verify_dial(n: i32) -> Result<i32, String>',
    starterCode: `fn verify_dial(n: i32) -> Result<i32, String> {
    if n >= 1 && n <= 9 { Ok(n) } else { Err("範囲外") }
}

fn solve_safe() -> Result<i32, String> {
    // 秘密の数字は 5 だよ！今は -3 だから Err になっちゃう
    let d = verify_dial(-3)?;
    try_dial(d);
    Ok(d)
}

fn main() {
    match solve_safe() {
        Ok(v) => {
            add_vault(v);
            step(5);
        },
        Err(e) => println!("DIAL_ERR: {}", e),
    }
}`,
    solutionCode: `fn verify_dial(n: i32) -> Result<i32, String> {
    if n >= 1 && n <= 9 { Ok(n) } else { Err("範囲外") }
}

fn solve_safe() -> Result<i32, String> {
    let d = verify_dial(5)?;
    try_dial(d);
    Ok(d)
}

fn main() {
    match solve_safe() {
        Ok(v) => {
            add_vault(v);
            step(5);
        },
        Err(e) => println!("DIAL_ERR: {}", e),
    }
}`,
    quickChips: [
      { label: 'verify_dial(5)?', insert: 'verify_dial(5)?' },
    ],
    hints: [
      'verify_dial(-3)? が範囲外エラーになって Err の枝に入ってしまっているよ！',
      'verify_dial(5)? に変えるとダイヤルが解錠され、金庫⚡5と(5,1)ゴール両方がクリアできるよ！',
      'let d = verify_dial(5)?;',
    ],
    worldSetup: {
      width: 6,
      height: 3,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 2 }, { x: 5, y: 2 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 5, y: 1 },
      dial: { secret: 5 },
      switches: [{ x: 2, y: 1 }],
      gates: [{ x: 3, y: 1, openTicks: 1, closedTicks: 1, linkedSwitch: { x: 2, y: 1 } }],
      vault: { x: 1, y: 0, initial: 0, target: 5 },
    },
    victoryCondition: { reachGoal: true, dialSolved: true, vaultTarget: 5, requireAllSwitches: true, requireSafeErrorHandling: true },
    parTicks: 8,
  },
  {
    displayId: '9-18',
    id: 'd2207f99-4376-534a-998a-71b6e795a295',
    index: 0,
    chapter: 9,
    chapterTitle: '第9章 エラー処理',
    stageKind: 'puzzle',
    title: '9-18. 複数 Result から安全迷路ソルバー起動',
    topicTag: '? + 自律迷路',
    kurumiIntro:
      'スタート前の点検関数 `preflight() -> Result<i32, String>` が正常に完了したら、左手法の自律ループでジグザグの迷路を抜けよう！',
    goalSummary: 'preflight 検査をパスして左手法で迷路のゴール (3, 1) へ',
    bookSectionTitle: '9.2 起動前チェックを ? でまとめる',
    bookSummary:
      '複数の起動前点検を `preflight()` に `?` で並べておけば、すべての点検を突破したときだけメイン動作を開始できます。',
    bookKeyCode: 'fn preflight() -> Result<i32, String> { let a = read_part(1)?; ... }',
    starterCode: `fn preflight() -> Result<i32, String> {
    let a = read_part(2)?;
    // ↓ 故障センサー(-1)になってるよ！正常な read_part(2)? に直そう
    let b = read_part(-1)?;
    Ok((a + b) / 10)
}

fn main() {
    match preflight() {
        Ok(v) => {
            add_vault(v);
            while !at_goal() {
                if !is_wall_left() {
                    turn_left();
                    step();
                } else if !is_wall_ahead() {
                    step();
                } else {
                    turn_right();
                }
            }
        },
        Err(e) => println!("STOP: {}", e),
    }
}`,
    solutionCode: `fn preflight() -> Result<i32, String> {
    let a = read_part(2)?;
    let b = read_part(2)?;
    Ok((a + b) / 10)
}

fn main() {
    match preflight() {
        Ok(v) => {
            add_vault(v);
            while !at_goal() {
                if !is_wall_left() {
                    turn_left();
                    step();
                } else if !is_wall_ahead() {
                    step();
                } else {
                    turn_right();
                }
            }
        },
        Err(e) => println!("STOP: {}", e),
    }
}`,
    quickChips: [
      { label: 'read_part(2)?', insert: 'read_part(2)?' },
    ],
    hints: [
      'preflight() 内の `read_part(-1)?` が Err を返して発進できていないよ！',
      'read_part(2)? に直すと (20 + 20) / 10 = 4 が返って発進し、金庫⚡4と迷路ゴール両方がクリアになるよ！',
      'let b = read_part(2)?;',
    ],
    worldSetup: {
      width: 5,
      height: 5,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 },
        { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 4, y: 1 },
        { x: 4, y: 2 },
        { x: 0, y: 3 }, { x: 1, y: 3 }, { x: 2, y: 3 }, { x: 3, y: 3 }, { x: 4, y: 3 },
        { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 },
      ],
      botStart: { x: 0, y: 2, dir: 0 },
      goal: { x: 3, y: 1 },
      vault: { x: 1, y: 0, initial: 0, target: 4 },
    },
    victoryCondition: { reachGoal: true, vaultTarget: 4, requireSafeErrorHandling: true },
    parTicks: 8,
  },
  {
    displayId: '9-19',
    id: '2678885e-6411-58e7-aade-8435ea619487',
    index: 0,
    chapter: 9,
    chapterTitle: '第9章 エラー処理',
    stageKind: 'puzzle',
    title: '9-19. コア補強ステップの Result エラー検査',
    topicTag: 'fn -> Result + 空間コア',
    kurumiIntro:
      'コアの現在パワーが目標に届いているかをチェックする関数 `verify_core(p)` を完成させよう！検査と強化を行ってから安全に納品台へ届けてね。',
    goalSummary: 'verify_core で合格判定を出し、コア⚡5+を空間ルール通り納品',
    bookSectionTitle: '9.2 工程チェックとしての Result<i32, String>',
    bookSummary:
      '工程の条件を満たしているかを `Result` で検査し、満たしていなければ分かりやすいエラーを返すようにすると事故を防げます。',
    bookKeyCode: 'fn verify_core(p: i32) -> Result<i32, String>',
    starterCode: `fn verify_core(p: i32) -> Result<i32, String> {
    if p >= 5 { Ok(p) } else { Err("パワー不足") }
}

fn main() {
    step(1);
    let mut c = grab_core();
    step(1);
    scan(&c);
    step(1);
    // (3,1)の強化台で boost(&mut c) してから verify_core(core_power()) しよう！
    match verify_core(core_power()) {
        Ok(p) => {
            println!("CORE_OK: {}", p);
            step(1);
            deliver(c);
        },
        Err(e) => println!("FAIL: {}", e),
    }
}`,
    solutionCode: `fn verify_core(p: i32) -> Result<i32, String> {
    if p >= 5 { Ok(p) } else { Err("パワー不足") }
}

fn main() {
    step(1);
    let mut c = grab_core();
    step(1);
    scan(&c);
    step(1);
    boost(&mut c);
    match verify_core(core_power()) {
        Ok(p) => {
            println!("CORE_OK: {}", p);
            step(1);
            deliver(c);
        },
        Err(e) => println!("FAIL: {}", e),
    }
}`,
    quickChips: [
      { label: 'boost(&mut c);', insert: 'boost(&mut c);\n    ' },
    ],
    hints: [
      'コアの初期パワーは⚡3だよ！verify_core は 5 以上を求めるから今のままだと Err になっちゃう。',
      'match verify_core(c.power) の直前に `boost(&mut c);` を呼べば 3 + 2 = 5 で Ok になるよ！',
      'boost(&mut c);',
    ],
    worldSetup: {
      width: 5,
      height: 3,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 2 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 4, y: 1 },
      cores: [{ id: 'c1', x: 1, y: 1, power: 3, label: '検査コア' }],
      scanners: [{ x: 2, y: 1 }],
      chargers: [{ x: 3, y: 1 }],
      deliveries: [{ x: 4, y: 1 }],
    },
    victoryCondition: { reachGoal: true, deliverCores: 1, minCorePower: 5, scanCount: 1, stdoutIncludes: ['CORE_OK'], requireSpatialCoreRules: true, requireSafeErrorHandling: true },
    parTicks: 10,
  },
  {
    displayId: '9-20',
    id: 'dd2b40aa-e38b-557a-9561-b4859e3a9a15',
    index: 0,
    chapter: 9,
    chapterTitle: '第9章 エラー処理',
    stageKind: 'puzzle',
    title: '9-20. エラー伝播関数で2段スイッチ迷路を解く',
    topicTag: '? + 2スイッチゲート',
    kurumiIntro:
      'U字型通路の途中に2つのスイッチと連動ゲートがあるよ！`load_leg()` 関数で `?` を使って3区間の距離を計算し、見事にゴールへ戻ろう！',
    goalSummary: '? 関数で各区間の歩数を出し全スイッチを踏んで (0, 3) へ',
    bookSectionTitle: '9.2 ルート計算関数からのエラー伝播',
    bookSummary:
      '計算関数を `?` でつないで安全なルート座標を取り出し、全区間を一気に走り抜けます。',
    bookKeyCode: 'let d1 = read_dist(4)?;',
    starterCode: `fn read_dist(n: i32) -> Result<i32, String> {
    let v = read_part(n)?;
    Ok(v / 10)
}

fn plan() -> Result<(i32, i32, i32), String> {
    let e = read_dist(4)?;
    let s = read_dist(2)?;
    // 最後の西向き戻り距離を 4 にしよう！今は -1 でエラーになるよ
    let w = read_dist(-1)?;
    Ok((e, s, w))
}

fn main() {
    let (e, s, w) = plan().unwrap_or((1, 1, 1));
    step(e);
    turn_right();
    step(s);
    turn_right();
    step(w);
}`,
    solutionCode: `fn read_dist(n: i32) -> Result<i32, String> {
    let v = read_part(n)?;
    Ok(v / 10)
}

fn plan() -> Result<(i32, i32, i32), String> {
    let e = read_dist(4)?;
    let s = read_dist(2)?;
    let w = read_dist(4)?;
    Ok((e, s, w))
}

fn main() {
    let (e, s, w) = plan().unwrap_or((1, 1, 1));
    step(e);
    turn_right();
    step(s);
    turn_right();
    step(w);
}`,
    quickChips: [
      { label: 'read_dist(4)?', insert: 'read_dist(4)?' },
    ],
    hints: [
      'w = read_dist(-1)? が Err を返すため、unwrap_or((1, 1, 1)) が使われてしまっているよ！',
      'read_dist(4)? に直せば (4, 2, 4) で全スイッチを踏みつつ (0, 3) へ到着できるよ！',
      'let w = read_dist(4)?;',
    ],
    worldSetup: {
      width: 6,
      height: 5,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 }, { x: 5, y: 1 }, { x: 5, y: 2 }, { x: 5, y: 3 },
        { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 }, { x: 5, y: 4 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 0, y: 3 },
      switches: [{ x: 4, y: 1 }, { x: 2, y: 3 }],
      gates: [{ x: 4, y: 2, openTicks: 1, closedTicks: 1, linkedSwitch: { x: 4, y: 1 } }],
    },
    victoryCondition: { reachGoal: true, requireAllSwitches: true, requireSafeErrorHandling: true },
    parTicks: 13,
  },
  {
    displayId: '9-21',
    id: '442a7e4e-f02a-5fd6-aea4-a12ac226d4ad',
    index: 0,
    chapter: 9,
    chapterTitle: '第9章 エラー処理',
    stageKind: 'challenge',
    title: '9-21. エラー回復×コンベア最短ダッシュ',
    topicTag: 'Result + コンベア最短',
    kurumiIntro:
      '壊れた指示値が混じる中、`match` と `unwrap_or` で正しい歩数だけを素早く抜き出して、ベルトコンベアを乗り継ぎ 8ティック以内にゴールしよう！',
    goalSummary: 'Result から有効値を取り出しスイッチ＋コンベアで8ティック以内ゴール',
    bookSectionTitle: '9.2 回復と時間制限の両立',
    bookSummary:
      'フォールバックを使って止まらず動きつつ、ベルトコンベアによる加速を活かして制限時間を達成するチャレンジです。',
    bookKeyCode: 'let s = read_part(-1).unwrap_or(1);',
    starterCode: `fn main() {
    let a = read_part(1).unwrap_or(0) / 10;
    // b は (2,2)コンベアに乗るため 1、c は最後の(3,3)コンベアの先まで届くよう 2 にしよう！
    let b = read_part(-1).unwrap_or(0);
    let c = read_part(-2).unwrap_or(0);
    add_vault(a + b + c);
    step(a);
    turn_right();
    step(b);
    turn_left();
    step(c);
}`,
    solutionCode: `fn main() {
    let a = read_part(1).unwrap_or(0) / 10;
    let b = read_part(-1).unwrap_or(1);
    let c = read_part(-2).unwrap_or(2);
    add_vault(a + b + c);
    step(a);
    turn_right();
    step(b);
    turn_left();
    step(c);
}`,
    quickChips: [
      { label: '.unwrap_or(1)', insert: '.unwrap_or(1)' },
      { label: '.unwrap_or(2)', insert: '.unwrap_or(2)' },
    ],
    hints: [
      'a = 1 でコンベア(1,1)がスイッチ(2,1)へ押してくれるよ！',
      'b = 1 にすれば右折後に(2,2)コンベアが(2,3)へ押し出し、c = 2 にすれば(3,3)コンベア経由で(5,3)に着くよ！',
      'let b = read_part(-1).unwrap_or(1);\nlet c = read_part(-2).unwrap_or(2);',
    ],
    worldSetup: {
      width: 6,
      height: 5,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 3, y: 1 }, { x: 4, y: 1 }, { x: 5, y: 1 },
        { x: 3, y: 2 }, { x: 4, y: 2 }, { x: 5, y: 2 },
        { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 }, { x: 5, y: 4 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 5, y: 3 },
      switches: [{ x: 2, y: 1 }],
      gates: [{ x: 4, y: 3, openTicks: 1, closedTicks: 1, linkedSwitch: { x: 2, y: 1 } }],
      conveyors: [
        { x: 1, y: 1, dir: 0 },
        { x: 2, y: 2, dir: 1 },
        { x: 3, y: 3, dir: 0 },
      ],
      vault: { x: 0, y: 0, initial: 0, target: 4 },
    },
    victoryCondition: { reachGoal: true, vaultTarget: 4, requireAllSwitches: true, maxTicks: 8, requireSafeErrorHandling: true },
    parTicks: 8,
  },
  {
    displayId: '9-22',
    id: 'a095b4cf-0ea6-52e0-9488-b0f3af96c4af',
    index: 0,
    chapter: 9,
    chapterTitle: '第9章 エラー処理',
    stageKind: 'challenge',
    title: '9-22. ダイヤル解錠＋?伝播の二重セキュリティ',
    topicTag: '? + ダイヤル + 金庫',
    kurumiIntro:
      'ダイヤル番号のチェックとエネルギーの合算を `?` で連係させた安全関数を作ろう！故障センサーは `unwrap_or` でしのいで、二重セキュリティ突破だ！',
    goalSummary: 'Result 回復でダイヤル解錠(6)・金庫⚡6・全スイッチ・(5, 1) へ',
    bookSectionTitle: '9.2 複数のエラー源を組み合わせた回復設計',
    bookSummary:
      '壊れうる設定読み取りは安全なバックアップ値で守りつつ、セキュリティ条件は `?` で厳密に検証します。',
    bookKeyCode: 'let secret = check(6)?;',
    starterCode: `fn check_dial(n: i32) -> Result<i32, String> {
    if n >= 1 && n <= 9 { Ok(n) } else { Err("不正ダイヤル") }
}

fn run_mission() -> Result<(), String> {
    let vault_val = read_part(4).unwrap_or(0) / 10 + read_part(-1).unwrap_or(2);
    add_vault(vault_val);
    // 秘密の数字 6 を check_dial に渡してダイヤルを解錠しよう！今は 1 だよ
    let secret = check_dial(1)?;
    try_dial(secret);
    step(5);
    Ok(())
}

fn main() {
    if let Err(e) = run_mission() {
        println!("ERR: {}", e);
    }
}`,
    solutionCode: `fn check_dial(n: i32) -> Result<i32, String> {
    if n >= 1 && n <= 9 { Ok(n) } else { Err("不正ダイヤル") }
}

fn run_mission() -> Result<(), String> {
    let vault_val = read_part(4).unwrap_or(0) / 10 + read_part(-1).unwrap_or(2);
    add_vault(vault_val);
    let secret = check_dial(6)?;
    try_dial(secret);
    step(5);
    Ok(())
}

fn main() {
    if let Err(e) = run_mission() {
        println!("ERR: {}", e);
    }
}`,
    quickChips: [
      { label: 'check_dial(6)?', insert: 'check_dial(6)?' },
    ],
    hints: [
      'vault_val は 4 + 2 = 6 になっていて金庫⚡6はバッチリ！',
      'ダイヤルの正解は 6 なので、check_dial(1)? を `check_dial(6)?` に変えて解錠しよう！',
      'let secret = check_dial(6)?;',
    ],
    worldSetup: {
      width: 6,
      height: 3,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 2 }, { x: 5, y: 2 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 5, y: 1 },
      dial: { secret: 6 },
      switches: [{ x: 2, y: 1 }],
      gates: [{ x: 3, y: 1, openTicks: 1, closedTicks: 1, linkedSwitch: { x: 2, y: 1 } }],
      vault: { x: 1, y: 0, initial: 0, target: 6 },
    },
    victoryCondition: { reachGoal: true, dialSolved: true, vaultTarget: 6, requireAllSwitches: true, requireSafeErrorHandling: true },
    parTicks: 9,
  },
  {
    displayId: '9-23',
    id: '0788c04e-789b-5505-9656-d78c0da40b9b',
    index: 0,
    chapter: 9,
    chapterTitle: '第9章 エラー処理',
    stageKind: 'challenge',
    title: '9-23. コア工程＋スパーク回避の完璧リカバリ',
    topicTag: 'Result + スパーク + 空間コア',
    kurumiIntro:
      '巡回スパークが巡回する工房で、コアの検査と強化をこなしつつ、`Err` センサーのリカバリで金庫⚡5も満たそう！',
    goalSummary: 'Result 回復で金庫⚡5・スパーク回避・コア⚡5+納品・全スイッチ達成',
    bookSectionTitle: '9.2 高信頼コア搬送パイプライン',
    bookSummary:
      'センサー値が壊れていても代替計算へ切り替えてコアの検査・強化・納品を最後まで安全にやり切ります。',
    bookKeyCode: 'match read_part(-1) { Ok(v) => v, Err(_) => 5 }',
    starterCode: `fn safe_move(n: i32) {
    for _ in 0..n {
        while is_spark_ahead() || !is_gate_open() { wait_tick(1); }
        step();
    }
}

fn main() {
    let vault_val = read_part(3).unwrap_or(0) / 10 + read_part(-1).unwrap_or(2);
    add_vault(vault_val);
    safe_move(1);
    let mut c = grab_core();
    safe_move(1);
    scan(&c);
    // (3,1)はスパーク巡回、(4,1)は強化台兼スイッチ、(5,1)は納品台だよ！
    // この先を続けてゴールしよう
}`,
    solutionCode: `fn safe_move(n: i32) {
    for _ in 0..n {
        while is_spark_ahead() || !is_gate_open() { wait_tick(1); }
        step();
    }
}

fn main() {
    let vault_val = read_part(3).unwrap_or(0) / 10 + read_part(-1).unwrap_or(2);
    add_vault(vault_val);
    safe_move(1);
    let mut c = grab_core();
    safe_move(1);
    scan(&c);
    safe_move(2);
    boost(&mut c);
    safe_move(1);
    deliver(c);
}`,
    quickChips: [
      { label: 'safe_move(2);', insert: 'safe_move(2);\n    ' },
      { label: 'boost(&mut c);', insert: 'boost(&mut c);\n    ' },
      { label: 'safe_move(1);', insert: 'safe_move(1);\n    ' },
      { label: 'deliver(c);', insert: 'deliver(c);' },
    ],
    hints: [
      'scan(&c) をした(2,1)から、スパーク通路(3,1)を越えて強化台(4,1)へ行くには `safe_move(2);` だよ！',
      '(4,1) で `boost(&mut c);` してパワーを⚡5にしたら、あと `safe_move(1); deliver(c);` で(5,1)へ納品完了！',
      'safe_move(2); boost(&mut c); safe_move(1); deliver(c);',
    ],
    worldSetup: {
      width: 6,
      height: 5,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 4, y: 2 }, { x: 5, y: 2 },
        { x: 0, y: 3 }, { x: 1, y: 3 }, { x: 2, y: 3 }, { x: 4, y: 3 }, { x: 5, y: 3 },
        { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 }, { x: 5, y: 4 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 5, y: 1 },
      cores: [{ id: 'c1', x: 1, y: 1, power: 3, label: '復旧コア' }],
      scanners: [{ x: 2, y: 1 }],
      chargers: [{ x: 4, y: 1 }],
      switches: [{ x: 4, y: 1 }],
      deliveries: [{ x: 5, y: 1 }],
      vault: { x: 0, y: 0, initial: 0, target: 5 },
      sparks: [
        { id: 'sp1', path: [{ x: 3, y: 0 }, { x: 3, y: 1 }, { x: 3, y: 2 }, { x: 3, y: 3 }, { x: 3, y: 2 }, { x: 3, y: 1 }], initialIndex: 0 },
      ],
    },
    victoryCondition: { reachGoal: true, deliverCores: 1, minCorePower: 5, scanCount: 1, vaultTarget: 5, requireAllSwitches: true, requireSpatialCoreRules: true, requireSafeErrorHandling: true },
    parTicks: 12,
  },
  {
    displayId: '9-24',
    id: 'd926b74c-71b4-5d77-9b38-3c14adde08ca',
    index: 0,
    chapter: 9,
    chapterTitle: '第9章 エラー処理',
    stageKind: 'challenge',
    title: '9-24. 第9章挑戦：無停止オートリカバリ迷宮',
    topicTag: '第9章 最終チャレンジ',
    kurumiIntro:
      '第9章の最終挑戦！複数のセンサー検査から `?` と `match` と `unwrap_or` を総動員し、スパーク・スイッチ・連動ゲート・金庫⚡6・コア納品のすべてをやり切ろう！',
    goalSummary: 'Result 完全制覇で "SAFE_CLEAR"・金庫⚡6・コア⚡5+・全スイッチ・(5, 3) へ',
    bookSectionTitle: '第9章まとめ — 無停止フェイルセーフ制御',
    bookSummary:
      'あらゆる失敗可能性を `Result` と `?` で明示し、適切な回復値へ着地させることで、止まらないシステムを組み上げました。',
    bookKeyCode: 'match run() { Ok(_) => ..., Err(_) => recover() }',
    starterCode: `fn safe_go(n: i32) {
    for _ in 0..n {
        while is_spark_ahead() || !is_gate_open() { wait_tick(1); }
        step();
    }
}

fn check_batch() -> Result<i32, String> {
    let p1 = read_part(3)?;
    let p2 = read_part(3)?;
    Ok((p1 + p2) / 10)
}

fn main() {
    let energy = check_batch().unwrap_or(0);
    add_vault(energy);
    println!("SAFE_CLEAR");
    // (1,1)コア→(2,1)強化＆スイッチ1→(3,1)スパーク→(4,1)スイッチ2→(5,1)右折→(5,3)納品台！
    safe_go(1);
}`,
    solutionCode: `fn safe_go(n: i32) {
    for _ in 0..n {
        while is_spark_ahead() || !is_gate_open() { wait_tick(1); }
        step();
    }
}

fn check_batch() -> Result<i32, String> {
    let p1 = read_part(3)?;
    let p2 = read_part(3)?;
    Ok((p1 + p2) / 10)
}

fn main() {
    let energy = check_batch().unwrap_or(0);
    add_vault(energy);
    println!("SAFE_CLEAR");
    safe_go(1);
    let mut c = grab_core();
    safe_go(1);
    boost(&mut c);
    safe_go(3);
    turn_right();
    safe_go(2);
    deliver(c);
}`,
    quickChips: [
      { label: 'let mut c = grab_core();', insert: 'let mut c = grab_core();\n    ' },
      { label: 'boost(&mut c);', insert: 'boost(&mut c);\n    ' },
      { label: 'safe_go(3);', insert: 'safe_go(3);\n    ' },
      { label: 'deliver(c);', insert: 'deliver(c);' },
    ],
    hints: [
      'safe_go(1) で (1,1) に着いたら grab_core()、次の safe_go(1) で (2,1) 強化台兼スイッチで boost(&mut c) しよう！',
      'その後 safe_go(3) でスパーク(3,1)とスイッチ(4,1)を通って(5,1)へ！',
      '最後に turn_right(); safe_go(2); deliver(c); でゲート(5,2)を越えて(5,3)に納品完了！',
    ],
    worldSetup: {
      width: 6,
      height: 5,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 4, y: 2 },
        { x: 0, y: 3 }, { x: 1, y: 3 }, { x: 2, y: 3 }, { x: 3, y: 3 }, { x: 4, y: 3 },
        { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 }, { x: 5, y: 4 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 5, y: 3 },
      cores: [{ id: 'c1', x: 1, y: 1, power: 3, label: '安全コア' }],
      chargers: [{ x: 2, y: 1 }],
      switches: [{ x: 2, y: 1 }, { x: 4, y: 1 }],
      gates: [{ x: 5, y: 2, openTicks: 1, closedTicks: 1, linkedSwitch: { x: 4, y: 1 } }],
      deliveries: [{ x: 5, y: 3 }],
      vault: { x: 0, y: 0, initial: 0, target: 6 },
      sparks: [
        { id: 'sp1', path: [{ x: 3, y: 0 }, { x: 3, y: 1 }, { x: 3, y: 2 }, { x: 3, y: 3 }, { x: 3, y: 2 }, { x: 3, y: 1 }], initialIndex: 0 },
      ],
    },
    victoryCondition: { reachGoal: true, deliverCores: 1, minCorePower: 5, vaultTarget: 6, stdoutIncludes: ['SAFE_CLEAR'], requireAllSwitches: true, requireSpatialCoreRules: true, requireSafeErrorHandling: true },
    parTicks: 15,
  },

  // =========================================================================
  // 第10章 ジェネリック型・トレイト・ライフタイム パズル・挑戦拡張 (10-13 〜 10-24)
  // =========================================================================
  {
    displayId: '10-13',
    id: '8b3d8b50-360b-5151-aed0-ad7cc476ab70',
    index: 0,
    chapter: 10,
    chapterTitle: '第10章 ジェネリック型・トレイト・ライフタイム',
    stageKind: 'puzzle',
    title: '10-13. ジェネリック構造体 VecHolder<T> でルート保存',
    topicTag: 'struct Holder<T> + コンベア',
    kurumiIntro:
      '横・縦・最後の3つの距離をジェネリック構造体 `Route<T>` にしまって、ベルトコンベアをつなぎながら 7ティック以内にゴールしよう！',
    goalSummary: 'ジェネリック構造体 Route<T> でスイッチとコンベアを突破し (5, 3) へ',
    bookSectionTitle: '10.1 型パラメータを複数フィールドに持つ構造体',
    bookSummary:
      '共通の型 `T` を持つフィールドをまとめることで、将来の数値精度変更（`i32` -> `f64` など）にも強い構造体になります。',
    bookKeyCode: 'struct Route<T> { a: T, b: T, c: T }',
    starterCode: `struct Route<T> {
    a: T,
    b: T,
    c: T,
}

fn main() {
    // 地図のコンベアに合わせて (a, b, c) を設定しよう！
    let r = Route { a: 1, b: 0, c: 0 };
    step(r.a);
    turn_right();
    step(r.b);
    turn_left();
    step(r.c);
}`,
    solutionCode: `struct Route<T> {
    a: T,
    b: T,
    c: T,
}

fn main() {
    let r = Route { a: 1, b: 1, c: 2 };
    step(r.a);
    turn_right();
    step(r.b);
    turn_left();
    step(r.c);
}`,
    quickChips: [
      { label: 'Route { a: 1, b: 1, c: 2 }', insert: 'Route { a: 1, b: 1, c: 2 }' },
    ],
    hints: [
      '(1,1) の東向きコンベアでスイッチ(2,1)に乗るから a = 1 だよ！',
      '右折して b = 1 で(2,2)の南向きコンベアに乗って(2,3)へ！最後に左折して c = 2 で(3,3)コンベア経由で(5,3)に届くよ！',
      'let r = Route { a: 1, b: 1, c: 2 };',
    ],
    worldSetup: {
      width: 6,
      height: 5,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 3, y: 1 }, { x: 4, y: 1 }, { x: 5, y: 1 },
        { x: 3, y: 2 }, { x: 4, y: 2 }, { x: 5, y: 2 },
        { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 }, { x: 5, y: 4 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 5, y: 3 },
      switches: [{ x: 2, y: 1 }],
      gates: [{ x: 4, y: 3, openTicks: 1, closedTicks: 1, linkedSwitch: { x: 2, y: 1 } }],
      conveyors: [
        { x: 1, y: 1, dir: 0 },
        { x: 2, y: 2, dir: 1 },
        { x: 3, y: 3, dir: 0 },
      ],
    },
    victoryCondition: { reachGoal: true, requireAllSwitches: true, maxTicks: 7 },
    parTicks: 7,
  },
  {
    displayId: '10-14',
    id: '31e70608-d2d8-5714-8eee-3fba590ecdb3',
    index: 0,
    chapter: 10,
    chapterTitle: '第10章 ジェネリック型・トレイト・ライフタイム',
    stageKind: 'puzzle',
    title: '10-14. impl<T> でダイヤルと金庫を両方扱う器',
    topicTag: 'impl<T> + ダイヤル解錠',
    kurumiIntro:
      '金庫の値でもダイヤルの答えでも入れられる汎用ホルダ `VaultKey<T>` に、値を2つとも活かして扉を開けるメソッドを使おう！',
    goalSummary: 'VaultKey<T> から暗証番号 4 と金庫⚡4を取り出して (4, 1) へ',
    bookSectionTitle: '10.1 & 10.2 ジェネリック型の使い回し',
    bookSummary:
      '同じ `Holder<T>` の定義を使って、ダイヤル番号用・歩数用・金庫チャージ用といった異なる目的のデータを綺麗に扱います。',
    bookKeyCode: 'impl<T> Holder<T> { fn inner(&self) -> &T { &self.v } }',
    starterCode: `struct Holder<T> {
    v: T,
}

impl<T> Holder<T> {
    fn read(&self) -> &T {
        &self.v
    }
}

fn main() {
    let key = Holder { v: 4 };
    let dist = Holder { v: 4 };
    // *key.read() でダイヤルを解き、*dist.read() で金庫と移動を行おう！
    add_vault(*dist.read());
    step(*dist.read());
}`,
    solutionCode: `struct Holder<T> {
    v: T,
}

impl<T> Holder<T> {
    fn read(&self) -> &T {
        &self.v
    }
}

fn main() {
    let key = Holder { v: 4 };
    let dist = Holder { v: 4 };
    try_dial(*key.read());
    add_vault(*dist.read());
    step(*dist.read());
}`,
    quickChips: [
      { label: 'try_dial(*key.read());', insert: 'try_dial(*key.read());\n    ' },
    ],
    hints: [
      'key には秘密の番号 4 が入っているのに、まだ `try_dial(...)` を呼んでいないよ！',
      'add_vault の前に `try_dial(*key.read());` を追加しよう。',
      'try_dial(*key.read());',
    ],
    worldSetup: {
      width: 5,
      height: 3,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 2 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 4, y: 1 },
      dial: { secret: 4 },
      switches: [{ x: 2, y: 1 }],
      gates: [{ x: 3, y: 1, openTicks: 1, closedTicks: 1, linkedSwitch: { x: 2, y: 1 } }],
      vault: { x: 1, y: 0, initial: 0, target: 4 },
    },
    victoryCondition: { reachGoal: true, dialSolved: true, vaultTarget: 4, requireAllSwitches: true },
    parTicks: 7,
  },
  {
    displayId: '10-15',
    id: '8f71099b-27eb-5844-b594-aed9c6e540eb',
    index: 0,
    chapter: 10,
    chapterTitle: '第10章 ジェネリック型・トレイト・ライフタイム',
    stageKind: 'puzzle',
    title: '10-15. トレイトで異なる移動機を切り替える',
    topicTag: 'trait + スパーク警戒',
    kurumiIntro:
      '「直線型 `DashUnit`」と「安全確認型 `SafeUnit`」に同じ `trait Walker` を実装しよう！スパークが横切る通路では安全型の出番だよ。',
    goalSummary: 'SafeUnit に Walker を実装してスパークを避け (5, 1) へ',
    bookSectionTitle: '10.2 同じトレイトでも実装ごとに安全性を変える',
    bookSummary:
      '共通のメソッド名 `walk(&self, n)` でありながら、型によって安全確認の有無など異なる振る舞いを実装できます。',
    bookKeyCode: 'impl Walker for SafeUnit { fn walk(&self, n: i32) { ... } }',
    starterCode: `trait Walker {
    fn walk(&self, n: i32);
}

struct SafeUnit {
    tag: i32,
}

impl Walker for SafeUnit {
    fn walk(&self, n: i32) {
        for _ in 0..n {
            // スパークや閉じているゲートがあれば wait_tick(1) で待とう！
            step();
        }
    }
}

fn go<T: Walker>(u: &T, n: i32) {
    u.walk(n);
}

fn main() {
    let unit = SafeUnit { tag: 1 };
    go(&unit, 5);
}`,
    solutionCode: `trait Walker {
    fn walk(&self, n: i32);
}

struct SafeUnit {
    tag: i32,
}

impl Walker for SafeUnit {
    fn walk(&self, n: i32) {
        for _ in 0..n {
            while is_spark_ahead() || !is_gate_open() {
                wait_tick(1);
            }
            step();
        }
    }
}

fn go<T: Walker>(u: &T, n: i32) {
    u.walk(n);
}

fn main() {
    let unit = SafeUnit { tag: 1 };
    go(&unit, 5);
}`,
    quickChips: [
      { label: 'while is_spark_ahead() || !is_gate_open() { wait_tick(1); }', insert: 'while is_spark_ahead() || !is_gate_open() {\n                wait_tick(1);\n            }\n            ' },
    ],
    hints: [
      '(2,1) に横断スパークがいて、(3,1) にスイッチ連動ゲートがあるよ！',
      'walk メソッドの中の `step();` の前に `while is_spark_ahead() || !is_gate_open() { wait_tick(1); }` を入れよう。',
      'while is_spark_ahead() || !is_gate_open() {\n    wait_tick(1);\n}',
    ],
    worldSetup: {
      width: 6,
      height: 5,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 2 }, { x: 5, y: 2 },
        { x: 0, y: 3 }, { x: 1, y: 3 }, { x: 3, y: 3 }, { x: 4, y: 3 }, { x: 5, y: 3 },
        { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 }, { x: 5, y: 4 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 5, y: 1 },
      switches: [{ x: 1, y: 1 }],
      gates: [{ x: 3, y: 1, openTicks: 1, closedTicks: 1, linkedSwitch: { x: 1, y: 1 } }],
      sparks: [
        { id: 'sp1', path: [{ x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 2, y: 2 }, { x: 2, y: 1 }], initialIndex: 3 },
      ],
    },
    victoryCondition: { reachGoal: true, requireAllSwitches: true },
    parTicks: 8,
  },
  {
    displayId: '10-16',
    id: '28016ab7-3c5e-5472-bc4c-631fcb94ecd1',
    index: 0,
    chapter: 10,
    chapterTitle: '第10章 ジェネリック型・トレイト・ライフタイム',
    stageKind: 'puzzle',
    title: '10-16. 空間ルール対応のトレイト境界関数',
    topicTag: 'T: CoreOps + 空間コア',
    kurumiIntro:
      '検査と強化の2つができる部品だけをトレイト境界 `T: ProcessCore` で受け付ける納品関数を使おう！正しい場所で `scan` と `boost` を行ってね。',
    goalSummary: 'トレイト境界関数でコア検査・強化(⚡4+)・納品・ゴールへ',
    bookSectionTitle: '10.2 トレイト境界による処理能力の保証',
    bookSummary:
      '`fn mission<T: Trait>(u: &T)` は「このトレイトを満たす型しか渡せない」ことをコンパイル時に保証する仕組みです。',
    bookKeyCode: 'fn mission<T: CoreStage>(m: &T)',
    starterCode: `trait CoreStage {
    fn run(&self);
}

struct LineWorker {
    bonus: i32,
}

impl CoreStage for LineWorker {
    fn run(&self) {
        add_vault(self.bonus);
        step(1);
        let mut c = grab_core();
        step(1);
        scan(&c);
        // (3,1)強化台へ進んで boost(&mut c)、さらに(4,1)納品台で deliver(c) しよう！
    }
}

fn dispatch<T: CoreStage>(worker: &T) {
    worker.run();
}

fn main() {
    let w = LineWorker { bonus: 4 };
    dispatch(&w);
}`,
    solutionCode: `trait CoreStage {
    fn run(&self);
}

struct LineWorker {
    bonus: i32,
}

impl CoreStage for LineWorker {
    fn run(&self) {
        add_vault(self.bonus);
        step(1);
        let mut c = grab_core();
        step(1);
        scan(&c);
        step(1);
        boost(&mut c);
        step(1);
        deliver(c);
    }
}

fn dispatch<T: CoreStage>(worker: &T) {
    worker.run();
}

fn main() {
    let w = LineWorker { bonus: 4 };
    dispatch(&w);
}`,
    quickChips: [
      { label: 'step(1); boost(&mut c);', insert: 'step(1);\n        boost(&mut c);\n        ' },
      { label: 'step(1); deliver(c);', insert: 'step(1);\n        deliver(c);' },
    ],
    hints: [
      'scan(&c) した位置は (2,1) だよ。1歩進むと (3,1) の強化台があるから `boost(&mut c);` しよう！',
      'さらにもう1歩で (4,1) の納品台に着くから `deliver(c);` で完了！',
      'step(1); boost(&mut c); step(1); deliver(c);',
    ],
    worldSetup: {
      width: 5,
      height: 3,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 2 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 4, y: 1 },
      cores: [{ id: 'c1', x: 1, y: 1, power: 2, label: '境界コア' }],
      scanners: [{ x: 2, y: 1 }],
      chargers: [{ x: 3, y: 1 }],
      deliveries: [{ x: 4, y: 1 }],
      vault: { x: 0, y: 0, initial: 0, target: 4 },
    },
    victoryCondition: { reachGoal: true, deliverCores: 1, minCorePower: 4, scanCount: 1, vaultTarget: 4, requireSpatialCoreRules: true },
    parTicks: 10,
  },
  {
    displayId: '10-17',
    id: '843c371a-ec86-5cad-9cbb-279b2feaee78',
    index: 0,
    chapter: 10,
    chapterTitle: '第10章 ジェネリック型・トレイト・ライフタイム',
    stageKind: 'puzzle',
    title: '10-17. ライフタイム \'a で2つのセンサー値から選別',
    topicTag: 'ライフタイム + スイッチ',
    kurumiIntro:
      '2つの参照値 `&a` と `&b` の中から「ちょうどゴールに届く歩数」をライフタイム注釈付き関数 `choose_exact<\'a>` で選び出そう！',
    goalSummary: 'ライフタイム付き pick 関数でスイッチを踏み (4, 1) へ',
    bookSectionTitle: '10.3 複数の参照を安全に比較・返却する関数',
    bookSummary:
      '同じライフタイム `\'a` を持つ2つの参照を受け取り、条件に合う方の参照だけを安全に呼び出し元へ返します。',
    bookKeyCode: "fn choose<'a>(a: &'a i32, b: &'a i32) -> &'a i32",
    starterCode: `fn choose<'a>(a: &'a i32, b: &'a i32) -> &'a i32 {
    // a と b のうち 4 に等しい方（あるいは大きい方）を返そう！今は常に a を返してるよ
    a
}

fn main() {
    let wrong = 1;
    let right = 4;
    let dist = choose(&wrong, &right);
    add_vault(*dist);
    step(*dist);
}`,
    solutionCode: `fn choose<'a>(a: &'a i32, b: &'a i32) -> &'a i32 {
    if *a > *b { a } else { b }
}

fn main() {
    let wrong = 1;
    let right = 4;
    let dist = choose(&wrong, &right);
    add_vault(*dist);
    step(*dist);
}`,
    quickChips: [
      { label: 'if *a > *b { a } else { b }', insert: 'if *a > *b { a } else { b }' },
    ],
    hints: [
      'wrong = 1、right = 4 だよ！今の choose() は常に a (=1) を返しているね。',
      'if *a > *b { a } else { b } に直すと大きい方 4 の参照が返ってスイッチ経由でゴールできるよ！',
      'if *a > *b { a } else { b }',
    ],
    worldSetup: {
      width: 6,
      height: 3,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 2 }, { x: 5, y: 2 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 4, y: 1 },
      switches: [{ x: 2, y: 1 }],
      gates: [{ x: 3, y: 1, openTicks: 1, closedTicks: 1, linkedSwitch: { x: 2, y: 1 } }],
      vault: { x: 1, y: 0, initial: 0, target: 4 },
    },
    victoryCondition: { reachGoal: true, vaultTarget: 4, requireAllSwitches: true },
    parTicks: 6,
  },
  {
    displayId: '10-18',
    id: '49691899-0b21-5dcf-be1b-4c3a581670c6',
    index: 0,
    chapter: 10,
    chapterTitle: '第10章 ジェネリック型・トレイト・ライフタイム',
    stageKind: 'puzzle',
    title: '10-18. 構造体 RefGuide<\'a> と2つの参照ナビ',
    topicTag: 'struct RefGuide<\'a>',
    kurumiIntro:
      '「横の参照」と「縦の参照」を両方フィールドに持つ構造体 `RefGuide<\'a>` を使って、U字・L字の先のゴール `(3, 3)` へ到着しよう！',
    goalSummary: 'RefGuide<\'a> が指す2つの参照を読み取り金庫⚡5＋(3, 3)へ',
    bookSectionTitle: '10.3 複数参照フィールドを持つ構造体とライフタイム',
    bookSummary:
      '同じライフタイムパラメータ `\'a` を2つの参照フィールドへ割り当てることで、どちらの参照も構造体より長生きすることを保証します。',
    bookKeyCode: "struct RefGuide<'a> { x: &'a i32, y: &'a i32 }",
    starterCode: `struct RefGuide<'a> {
    x: &'a i32,
    y: &'a i32,
}

fn main() {
    let east = 3;
    let south = 2;
    let g = RefGuide { x: &east, y: &south };
    // *g.x + *g.y で金庫⚡5を満たし、L字の(3, 3)へ進もう！
    step(*g.x);
}`,
    solutionCode: `struct RefGuide<'a> {
    x: &'a i32,
    y: &'a i32,
}

fn main() {
    let east = 3;
    let south = 2;
    let g = RefGuide { x: &east, y: &south };
    add_vault(*g.x + *g.y);
    step(*g.x);
    turn_right();
    step(*g.y);
}`,
    quickChips: [
      { label: 'add_vault(*g.x + *g.y);', insert: 'add_vault(*g.x + *g.y);\n    ' },
      { label: 'turn_right(); step(*g.y);', insert: 'turn_right();\n    step(*g.y);' },
    ],
    hints: [
      'g.x は &3、g.y は &2 を指しているよ！',
      '`add_vault(*g.x + *g.y);` で⚡5を貯め、東に3歩のあと `turn_right(); step(*g.y);` で(3,3)へ！',
      'add_vault(*g.x + *g.y); step(*g.x); turn_right(); step(*g.y);',
    ],
    worldSetup: {
      width: 5,
      height: 5,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 },
        { x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 3, y: 3 },
      vault: { x: 1, y: 0, initial: 0, target: 5 },
    },
    victoryCondition: { reachGoal: true, vaultTarget: 5 },
    parTicks: 8,
  },
  {
    displayId: '10-19',
    id: '07f2c040-9791-54e8-8788-09370c49cc5b',
    index: 0,
    chapter: 10,
    chapterTitle: '第10章 ジェネリック型・トレイト・ライフタイム',
    stageKind: 'puzzle',
    title: '10-19. ジェネリック＋トレイトで自動迷路脱出',
    topicTag: 'trait Solver + 左手法迷路',
    kurumiIntro:
      '左手法の迷路アルゴリズムをトレイト `MazeSolver` として定義し、ジェネリック関数 `run_solver<T: MazeSolver>` から起動して迷路を脱出しよう！',
    goalSummary: 'MazeSolver 実装を完成させ行き止まりを右折して迷路ゴール (3, 3) へ',
    bookSectionTitle: '10.2 トレイトによるアルゴリズム差し替え設計',
    bookSummary:
      '探索手法をトレイトとして抽象化しておけば、呼び出し元の `run_solver` を一切変えずに別の探索策略へ差し替えられます。',
    bookKeyCode: 'fn run_solver<T: MazeSolver>(s: &T) { s.solve(); }',
    starterCode: `trait MazeSolver {
    fn solve(&self);
}

struct LeftWallBot {
    vault: i32,
}

impl MazeSolver for LeftWallBot {
    fn solve(&self) {
        add_vault(self.vault);
        while !at_goal() {
            if !is_wall_left() {
                turn_left();
                step();
            } else if !is_wall_ahead() {
                step();
            } else {
                // 行き止まりで右折しよう！今は wait_tick だけだよ
                wait_tick(1);
            }
        }
    }
}

fn run_solver<T: MazeSolver>(s: &T) {
    s.solve();
}

fn main() {
    let bot = LeftWallBot { vault: 4 };
    run_solver(&bot);
}`,
    solutionCode: `trait MazeSolver {
    fn solve(&self);
}

struct LeftWallBot {
    vault: i32,
}

impl MazeSolver for LeftWallBot {
    fn solve(&self) {
        add_vault(self.vault);
        while !at_goal() {
            if !is_wall_left() {
                turn_left();
                step();
            } else if !is_wall_ahead() {
                step();
            } else {
                turn_right();
            }
        }
    }
}

fn run_solver<T: MazeSolver>(s: &T) {
    s.solve();
}

fn main() {
    let bot = LeftWallBot { vault: 4 };
    run_solver(&bot);
}`,
    quickChips: [
      { label: 'turn_right();', insert: 'turn_right();' },
    ],
    hints: [
      '左も前も壁のときの `else` が `wait_tick(1);` になっているため動けなくなっているよ！',
      '`turn_right();` に書き換えよう！',
      'else {\n    turn_right();\n}',
    ],
    worldSetup: {
      width: 5,
      height: 5,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 },
        { x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 },
        { x: 2, y: 3 },
        { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 3, y: 3 },
      vault: { x: 1, y: 0, initial: 0, target: 4 },
    },
    victoryCondition: { reachGoal: true, vaultTarget: 4 },
    parTicks: 8,
  },
  {
    displayId: '10-20',
    id: '455cf048-9f16-530c-9359-1bb15e4b9236',
    index: 0,
    chapter: 10,
    chapterTitle: '第10章 ジェネリック型・トレイト・ライフタイム',
    stageKind: 'puzzle',
    title: '10-20. Duo<T, U> + ライフタイムで二重スイッチ解錠',
    topicTag: '<T, U> + <\'a> + ダイヤル',
    kurumiIntro:
      '異なる2型を持つ `Pair<T, U>` とライフタイム選択関数を合わせて、秘密のダイヤル番号を選び出し、U字コースのスイッチを2つとも踏もう！',
    goalSummary: 'Pair<T, U> と pick<\'a> でダイヤル解錠(5)＋全スイッチ＋(0, 3)へ',
    bookSectionTitle: '10.1 & 10.3 ジェネリクスとライフタイムの組み合わせ',
    bookSummary:
      'ジェネリックコンテナで受け取った値の中から、ライフタイム付きの比較関数で最適な参照を選び出す総合演習です。',
    bookKeyCode: "struct Pair<T, U> { label: T, val: U }",
    starterCode: `struct Packet<T, U> {
    tag: T,
    val: U,
}

fn pick_big<'a>(a: &'a i32, b: &'a i32) -> &'a i32 {
    if *a > *b { a } else { b }
}

fn main() {
    let p = Packet { tag: "DIAL_OK", val: 5 };
    let fallback = 2;
    let code = pick_big(&p.val, &fallback);
    println!("{}", p.tag);
    try_dial(*code);
    // (0,1)->東4(4,1)スイッチ->右折->南2(4,3)->右折->西4(0,3)へ！今は途中だよ
    step(4);
}`,
    solutionCode: `struct Packet<T, U> {
    tag: T,
    val: U,
}

fn pick_big<'a>(a: &'a i32, b: &'a i32) -> &'a i32 {
    if *a > *b { a } else { b }
}

fn main() {
    let p = Packet { tag: "DIAL_OK", val: 5 };
    let fallback = 2;
    let code = pick_big(&p.val, &fallback);
    println!("{}", p.tag);
    try_dial(*code);
    step(4);
    turn_right();
    step(2);
    turn_right();
    step(4);
}`,
    quickChips: [
      { label: 'turn_right(); step(2);', insert: 'turn_right();\n    step(2);\n    ' },
      { label: 'turn_right(); step(4);', insert: 'turn_right();\n    step(4);' },
    ],
    hints: [
      'step(4) でスイッチ(4,1)を踏んでゲート(4,2)が開くよ！',
      'そこから `turn_right(); step(2);` で(4,3)に下りて、`turn_right(); step(4);` でスイッチ(2,3)を踏みながら(0,3)のゴールへ！',
      'turn_right(); step(2); turn_right(); step(4);',
    ],
    worldSetup: {
      width: 6,
      height: 5,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 }, { x: 5, y: 1 }, { x: 5, y: 2 }, { x: 5, y: 3 },
        { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 }, { x: 5, y: 4 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 0, y: 3 },
      dial: { secret: 5 },
      switches: [{ x: 4, y: 1 }, { x: 2, y: 3 }],
      gates: [{ x: 4, y: 2, openTicks: 1, closedTicks: 1, linkedSwitch: { x: 4, y: 1 } }],
    },
    victoryCondition: { reachGoal: true, dialSolved: true, stdoutIncludes: ['DIAL_OK'], requireAllSwitches: true },
    parTicks: 15,
  },
  {
    displayId: '10-21',
    id: '08ae2516-d978-50bb-a1af-ded3ae253058',
    index: 0,
    chapter: 10,
    chapterTitle: '第10章 ジェネリック型・トレイト・ライフタイム',
    stageKind: 'challenge',
    title: '10-21. トレイト＋コンベア最短7ティック挑戦',
    topicTag: 'trait + コンベア最短',
    kurumiIntro:
      '2種類のエンジン構造体 `BoostA` と `BoostB` に同じトレイト `PowerSpec` を実装して合計⚡5を作り、コンベアを使って 7ティック以内に走り抜けよう！',
    goalSummary: 'トレイト合計⚡5＋全スイッチ＋コンベアで7ティック以内に (5, 3) へ',
    bookSectionTitle: '10.2 トレイト計算と最短コンベアパス',
    bookSummary:
      'トレイトメソッドで必要なエネルギーを算出しつつ、最短ステップでゴールを目指します。',
    bookKeyCode: 'impl PowerSpec for BoostA { ... }',
    starterCode: `trait PowerSpec {
    fn power(&self) -> i32;
}

struct BoostA { v: i32 }
struct BoostB { v: i32 }

impl PowerSpec for BoostA { fn power(&self) -> i32 { self.v * 2 } }
impl PowerSpec for BoostB {
    // v + 1 を返すよう直そう！（v=2 なら 3、合わせて 2 + 3 = 5）
    fn power(&self) -> i32 { self.v }
}

fn main() {
    let a = BoostA { v: 1 };
    let b = BoostB { v: 2 };
    add_vault(a.power() + b.power());
    step(1);
    turn_right();
    step(1);
    turn_left();
    step(2);
}`,
    solutionCode: `trait PowerSpec {
    fn power(&self) -> i32;
}

struct BoostA { v: i32 }
struct BoostB { v: i32 }

impl PowerSpec for BoostA { fn power(&self) -> i32 { self.v * 2 } }
impl PowerSpec for BoostB {
    fn power(&self) -> i32 { self.v + 1 }
}

fn main() {
    let a = BoostA { v: 1 };
    let b = BoostB { v: 2 };
    add_vault(a.power() + b.power());
    step(1);
    turn_right();
    step(1);
    turn_left();
    step(2);
}`,
    quickChips: [
      { label: 'self.v + 1', insert: 'self.v + 1' },
    ],
    hints: [
      '移動ルートは完璧！でも今の b.power() は 2 だから金庫が 2 + 2 = 4 しか入らないよ。',
      'BoostB の power() を `{ self.v + 1 }` にすれば 2 + 3 = 5 で金庫もクリア！',
      'impl PowerSpec for BoostB {\n    fn power(&self) -> i32 { self.v + 1 }\n}',
    ],
    worldSetup: {
      width: 6,
      height: 5,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 3, y: 1 }, { x: 4, y: 1 }, { x: 5, y: 1 },
        { x: 3, y: 2 }, { x: 4, y: 2 }, { x: 5, y: 2 },
        { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 }, { x: 5, y: 4 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 5, y: 3 },
      switches: [{ x: 2, y: 1 }],
      gates: [{ x: 4, y: 3, openTicks: 1, closedTicks: 1, linkedSwitch: { x: 2, y: 1 } }],
      conveyors: [
        { x: 1, y: 1, dir: 0 },
        { x: 2, y: 2, dir: 1 },
        { x: 3, y: 3, dir: 0 },
      ],
      vault: { x: 0, y: 0, initial: 0, target: 5 },
    },
    victoryCondition: { reachGoal: true, vaultTarget: 5, requireAllSwitches: true, maxTicks: 8 },
    parTicks: 8,
  },
  {
    displayId: '10-22',
    id: '73901717-26d9-5611-a9ef-6d36f09050ed',
    index: 0,
    chapter: 10,
    chapterTitle: '第10章 ジェネリック型・トレイト・ライフタイム',
    stageKind: 'challenge',
    title: '10-22. ライフタイム＋空間コア＋スパーク回避',
    topicTag: 'ライフタイム + コア納品',
    kurumiIntro:
      'ライフタイム関数 `pick_target<\'a>` で目標金庫⚡6を選び出し、スパークが守る強化台を経由してコアを納品しよう！',
    goalSummary: 'pick_target<\'a> で金庫⚡6・スパーク突破・コア⚡5+納品を達成',
    bookSectionTitle: '10.3 ライフタイム参照値と空間工程の結合',
    bookSummary:
      '参照から安全に受け取った数値を現場のエネルギー目標へ使いながら、巡回障害物とコア操作を完遂します。',
    bookKeyCode: "fn pick_target<'a>(a: &'a i32, b: &'a i32) -> &'a i32",
    starterCode: `fn pick_target<'a>(a: &'a i32, b: &'a i32) -> &'a i32 {
    if *a > *b { a } else { b }
}

fn safe_go(n: i32) {
    for _ in 0..n {
        while is_spark_ahead() { wait_tick(1); }
        step();
    }
}

fn main() {
    let low = 2;
    let high = 6;
    let target = pick_target(&low, &high);
    add_vault(*target);
    // (1,1)コア→(2,1)検査→(3,1)スパーク→(4,1)強化＆スイッチ→(5,1)納品台へ！
    safe_go(1);
}`,
    solutionCode: `fn pick_target<'a>(a: &'a i32, b: &'a i32) -> &'a i32 {
    if *a > *b { a } else { b }
}

fn safe_go(n: i32) {
    for _ in 0..n {
        while is_spark_ahead() { wait_tick(1); }
        step();
    }
}

fn main() {
    let low = 2;
    let high = 6;
    let target = pick_target(&low, &high);
    add_vault(*target);
    safe_go(1);
    let mut c = grab_core();
    safe_go(1);
    scan(&c);
    safe_go(2);
    boost(&mut c);
    safe_go(1);
    deliver(c);
}`,
    quickChips: [
      { label: 'let mut c = grab_core();', insert: 'let mut c = grab_core();\n    ' },
      { label: 'scan(&c);', insert: 'scan(&c);\n    ' },
      { label: 'boost(&mut c);', insert: 'boost(&mut c);\n    ' },
      { label: 'deliver(c);', insert: 'deliver(c);' },
    ],
    hints: [
      'safe_go(1) で (1,1) に着いたら grab_core()、次の safe_go(1) で (2,1) 検査台で scan(&c) しよう！',
      'safe_go(2) でスパーク(3,1)を越えて (4,1) 強化台で boost(&mut c)＋スイッチを踏み、safe_go(1); deliver(c); で (5,1) へ！',
      'safe_go(1); scan(&c); safe_go(2); boost(&mut c); safe_go(1); deliver(c);',
    ],
    worldSetup: {
      width: 6,
      height: 5,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 4, y: 2 }, { x: 5, y: 2 },
        { x: 0, y: 3 }, { x: 1, y: 3 }, { x: 2, y: 3 }, { x: 4, y: 3 }, { x: 5, y: 3 },
        { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 }, { x: 5, y: 4 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 5, y: 1 },
      cores: [{ id: 'c1', x: 1, y: 1, power: 3, label: '寿命コア' }],
      scanners: [{ x: 2, y: 1 }],
      chargers: [{ x: 4, y: 1 }],
      switches: [{ x: 4, y: 1 }],
      deliveries: [{ x: 5, y: 1 }],
      vault: { x: 0, y: 0, initial: 0, target: 6 },
      sparks: [
        { id: 'sp1', path: [{ x: 3, y: 0 }, { x: 3, y: 1 }, { x: 3, y: 2 }, { x: 3, y: 3 }, { x: 3, y: 2 }, { x: 3, y: 1 }], initialIndex: 0 },
      ],
    },
    victoryCondition: { reachGoal: true, deliverCores: 1, minCorePower: 5, scanCount: 1, vaultTarget: 6, requireAllSwitches: true, requireSpatialCoreRules: true },
    parTicks: 13,
  },
  {
    displayId: '10-23',
    id: '2eccc816-7f2d-5d01-af35-7bccdb1aa496',
    index: 0,
    chapter: 10,
    chapterTitle: '第10章 ジェネリック型・トレイト・ライフタイム',
    stageKind: 'challenge',
    title: '10-23. ジェネリック機構×スイッチ連動迷路',
    topicTag: '<T> + トレイト境界迷路',
    kurumiIntro:
      'トレイト境界 `<T: Pilot>` で操縦ロボを受け入れ、途中の2つのスイッチと周期ゲートを抜けて下の階層 `(4, 3)` へたどり着こう！',
    goalSummary: 'トレイト境界の操縦ロボで金庫⚡5・全スイッチ・周期ゲートを突破し (4, 3) へ',
    bookSectionTitle: '10.2 ジェネリック設計で複雑な経路を攻略する',
    bookSummary:
      '安全移動能力をトレイトに定義し、ジェネリック関数を通してミッションを実行します。',
    bookKeyCode: 'fn launch_bot<T: Pilot>(p: &T)',
    starterCode: `trait Pilot {
    fn fly(&self);
}

struct SmartPilot<T> {
    vault_amt: T,
}

impl Pilot for SmartPilot<i32> {
    fn fly(&self) {
        add_vault(self.vault_amt);
        // (1,1)スイッチ1 -> (2,1)スパーク -> (3,1)スイッチ2 -> (4,1)右折 -> (4,2)ゲート -> (4,3)ゴール！
        for _ in 0..2 {
            while is_spark_ahead() || !is_gate_open() { wait_tick(1); }
            step();
        }
    }
}

fn launch_bot<T: Pilot>(p: &T) {
    p.fly();
}

fn main() {
    let sp = SmartPilot { vault_amt: 5 };
    launch_bot(&sp);
}`,
    solutionCode: `trait Pilot {
    fn fly(&self);
}

struct SmartPilot<T> {
    vault_amt: T,
}

impl Pilot for SmartPilot<i32> {
    fn fly(&self) {
        add_vault(self.vault_amt);
        for _ in 0..4 {
            while is_spark_ahead() || !is_gate_open() { wait_tick(1); }
            step();
        }
        turn_right();
        for _ in 0..2 {
            while is_spark_ahead() || !is_gate_open() { wait_tick(1); }
            step();
        }
    }
}

fn launch_bot<T: Pilot>(p: &T) {
    p.fly();
}

fn main() {
    let sp = SmartPilot { vault_amt: 5 };
    launch_bot(&sp);
}`,
    quickChips: [
      { label: '0..4', insert: '0..4' },
      { label: 'turn_right();', insert: 'turn_right();\n        ' },
    ],
    hints: [
      '東へ 4歩（for _ in 0..4）進みながら(1,1)と(3,1)のスイッチを踏み、(2,1)のスパークを待って(4,1)へ！',
      'その後 `turn_right();` してから、さらに `for _ in 0..2` でゲート(4,2)を通って(4,3)へ！',
      'for _ in 0..4 { ... } turn_right(); for _ in 0..2 { ... }',
    ],
    worldSetup: {
      width: 6,
      height: 5,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 3, y: 2 }, { x: 5, y: 1 }, { x: 5, y: 2 }, { x: 5, y: 3 },
        { x: 0, y: 3 }, { x: 1, y: 3 }, { x: 2, y: 3 }, { x: 3, y: 3 },
        { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 }, { x: 5, y: 4 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 4, y: 3 },
      switches: [{ x: 1, y: 1 }, { x: 3, y: 1 }],
      gates: [{ x: 4, y: 2, openTicks: 1, closedTicks: 1, linkedSwitch: { x: 3, y: 1 } }],
      vault: { x: 0, y: 0, initial: 0, target: 5 },
      sparks: [
        { id: 'sp1', path: [{ x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 1 }], initialIndex: 1 },
      ],
    },
    victoryCondition: { reachGoal: true, vaultTarget: 5, requireAllSwitches: true },
    parTicks: 11,
  },
  {
    displayId: '10-24',
    id: '3d87fe8b-b0c2-53a1-bb42-215675cc5c53',
    index: 0,
    chapter: 10,
    chapterTitle: '第10章 ジェネリック型・トレイト・ライフタイム',
    stageKind: 'challenge',
    title: '10-24. 第10章挑戦：3本柱グランドマスター試験',
    topicTag: '第10章 最終チャレンジ',
    kurumiIntro:
      '第10章の最終試験！`<T>`・`trait`・`impl<T>`・`<\'a>` すべてを1つのコードに集結させ、ダイヤル解錠・スパーク回避・全スイッチ・コア⚡5+納品・金庫⚡7を完全達成しよう！',
    goalSummary: '3本柱でダイヤル(3)・"CH10_PRO"・金庫⚡7・コア⚡5+納品・全スイッチを達成',
    bookSectionTitle: '第10章まとめ — Rust の型抽象の完成形',
    bookSummary:
      'ジェネリクス・トレイト・ライフタイムの3つが合わさることで、高い再利用性と絶対的な安全性を両立した設計が完成します。',
    bookKeyCode: 'struct + trait + impl + <\'a> 統合',
    starterCode: `trait MasterMission {
    fn execute(&self);
}

struct Champion<T> {
    vault_goal: T,
}

fn select_max<'a>(a: &'a i32, b: &'a i32) -> &'a i32 {
    if *a > *b { a } else { b }
}

fn move_safe(n: i32) {
    for _ in 0..n {
        while is_spark_ahead() || !is_gate_open() { wait_tick(1); }
        step();
    }
}

impl MasterMission for Champion<i32> {
    fn execute(&self) {
        add_vault(self.vault_goal);
        println!("CH10_PRO");
        let k1 = 1;
        let k2 = 3;
        try_dial(*select_max(&k1, &k2));
        // ここから (1,1)コア→(2,1)強化＆スイッチ1→(3,1)スパーク→(4,1)スイッチ2→(5,1)右折→(5,3)納品台へ！
        move_safe(1);
    }
}

fn start<T: MasterMission>(m: &T) {
    m.execute();
}

fn main() {
    let champ = Champion { vault_goal: 7 };
    start(&champ);
}`,
    solutionCode: `trait MasterMission {
    fn execute(&self);
}

struct Champion<T> {
    vault_goal: T,
}

fn select_max<'a>(a: &'a i32, b: &'a i32) -> &'a i32 {
    if *a > *b { a } else { b }
}

fn move_safe(n: i32) {
    for _ in 0..n {
        while is_spark_ahead() || !is_gate_open() { wait_tick(1); }
        step();
    }
}

impl MasterMission for Champion<i32> {
    fn execute(&self) {
        add_vault(self.vault_goal);
        println!("CH10_PRO");
        let k1 = 1;
        let k2 = 3;
        try_dial(*select_max(&k1, &k2));
        move_safe(1);
        let mut c = grab_core();
        move_safe(1);
        boost(&mut c);
        move_safe(3);
        turn_right();
        move_safe(2);
        deliver(c);
    }
}

fn start<T: MasterMission>(m: &T) {
    m.execute();
}

fn main() {
    let champ = Champion { vault_goal: 7 };
    start(&champ);
}`,
    quickChips: [
      { label: 'let mut c = grab_core();', insert: 'let mut c = grab_core();\n        ' },
      { label: 'boost(&mut c);', insert: 'boost(&mut c);\n        ' },
      { label: 'move_safe(3);', insert: 'move_safe(3);\n        ' },
      { label: 'deliver(c);', insert: 'deliver(c);' },
    ],
    hints: [
      'ダイヤルと金庫⚡7はすでにOK！あとは移動とコア操作を `execute` に書こう！',
      'move_safe(1) でコア取得、(2,1) で boost(&mut c) しつつスイッチ1を踏み、move_safe(3) でスパーク(3,1)とスイッチ2(4,1)を越えて(5,1)へ！',
      '最後は `turn_right(); move_safe(2); deliver(c);` で(5,3)に納品完了だよ！',
    ],
    worldSetup: {
      width: 6,
      height: 5,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 4, y: 2 },
        { x: 0, y: 3 }, { x: 1, y: 3 }, { x: 2, y: 3 }, { x: 3, y: 3 }, { x: 4, y: 3 },
        { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 }, { x: 5, y: 4 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 5, y: 3 },
      dial: { secret: 3 },
      cores: [{ id: 'c1', x: 1, y: 1, power: 3, label: '極限コア' }],
      chargers: [{ x: 2, y: 1 }],
      switches: [{ x: 2, y: 1 }, { x: 4, y: 1 }],
      gates: [{ x: 5, y: 2, openTicks: 1, closedTicks: 1, linkedSwitch: { x: 4, y: 1 } }],
      deliveries: [{ x: 5, y: 3 }],
      vault: { x: 0, y: 0, initial: 0, target: 7 },
      sparks: [
        { id: 'sp1', path: [{ x: 3, y: 0 }, { x: 3, y: 1 }, { x: 3, y: 2 }, { x: 3, y: 3 }, { x: 3, y: 2 }, { x: 3, y: 1 }], initialIndex: 0 },
      ],
    },
    victoryCondition: { reachGoal: true, dialSolved: true, deliverCores: 1, minCorePower: 5, vaultTarget: 7, stdoutIncludes: ['CH10_PRO'], requireAllSwitches: true, requireSpatialCoreRules: true },
    parTicks: 17,
  },

  // =========================================================================
  // 第11章 自動テスト パズル・挑戦拡張 (11-9 〜 11-16)
  // =========================================================================
  {
    displayId: '11-9',
    id: 'cd6ee93f-2e76-53dc-9286-0b0e7c0188c3',
    index: 0,
    chapter: 11,
    chapterTitle: '第11章 自動テスト',
    stageKind: 'puzzle',
    title: '11-9. コンベア歩数計算のテスト駆動修正',
    topicTag: '#[test] + コンベア短縮',
    kurumiIntro:
      'ベルトコンベアが2箇所にあるコースで「必要な手動ステップ数」を求める関数にバグがあるよ！2つの `#[test]` をパスさせて 6ティック以内で走り切ろう。',
    goalSummary: '2つの #[test] を合格させコンベアで6ティック以内に (5, 1) へ',
    bookSectionTitle: '11.1 仕様を満たす計算関数のテスト駆動開発',
    bookSummary:
      'テストケースが求める数学的仕様（例：コンベア分の割引計算）に合わせて本体関数を修正し、同時に実戦コースも走らせます。',
    bookKeyCode: '#[test] fn t1() { assert_eq!(net_steps(5, 2), 3); }',
    starterCode: `fn net_steps(total_dist: i32, conv_count: i32) -> i32 {
    // コンベア1つにつき1歩節約できる！今は引き算を忘れているよ
    total_dist
}

#[test]
fn t_two_conv() {
    assert_eq!(net_steps(5, 2), 3);
}

#[test]
fn t_zero_conv() {
    assert_eq!(net_steps(4, 0), 4);
}

fn main() {
    let s = net_steps(5, 2);
    step(s);
}`,
    solutionCode: `fn net_steps(total_dist: i32, conv_count: i32) -> i32 {
    total_dist - conv_count
}

#[test]
fn t_two_conv() {
    assert_eq!(net_steps(5, 2), 3);
}

#[test]
fn t_zero_conv() {
    assert_eq!(net_steps(4, 0), 4);
}

fn main() {
    let s = net_steps(5, 2);
    step(s);
}`,
    quickChips: [
      { label: 'total_dist - conv_count', insert: 'total_dist - conv_count' },
    ],
    hints: [
      't_two_conv は (5, 2) -> 3 を期待しているのに、今は 5 を返しているからテストが落ちているよ！',
      'net_steps の中を `total_dist - conv_count` にすれば両方のテストに通って 3歩＋コンベア2個で (5, 1) に届くよ！',
      'total_dist - conv_count',
    ],
    worldSetup: {
      width: 6,
      height: 3,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 2 }, { x: 5, y: 2 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 5, y: 1 },
      conveyors: [
        { x: 1, y: 1, dir: 0 },
        { x: 3, y: 1, dir: 0 },
      ],
    },
    victoryCondition: { reachGoal: true, testsRequired: 2, maxTicks: 6 },
    parTicks: 4,
  },
  {
    displayId: '11-10',
    id: 'b4812899-7dd0-58bb-9d34-f53ab5d04515',
    index: 0,
    chapter: 11,
    chapterTitle: '第11章 自動テスト',
    stageKind: 'puzzle',
    title: '11-10. 金庫目標チェックと assert! テスト',
    topicTag: 'assert! + コア検証',
    kurumiIntro:
      'コアの目標パワーに達しているか確かめる関数 `can_deliver(p)` を実装して、テスト2つに合格してから現場のコア強化＆納品をこなそう！',
    goalSummary: '2テスト合格＋コア⚡4以上を検査・強化して納品しよう',
    bookSectionTitle: '11.1 & 11.3 条件判定と空間ルールの一致',
    bookSummary:
      'プログラム上の検査関数と実際の現場ルールを一致させることで、出荷前のミスをゼロにできます。',
    bookKeyCode: 'assert!(can_deliver(4));',
    starterCode: `fn can_deliver(power: i32) -> bool {
    // パワー 4 以上で true になるよう直そう！
    power >= 99
}

#[test]
fn t_ok() { assert!(can_deliver(4)); }

#[test]
fn t_low() { assert!(!can_deliver(2)); }

fn main() {
    step(1);
    let mut c = grab_core();
    step(1);
    scan(&c);
    step(1);
    boost(&mut c);
    if can_deliver(core_power()) {
        step(1);
        deliver(c);
    }
}`,
    solutionCode: `fn can_deliver(power: i32) -> bool {
    power >= 4
}

#[test]
fn t_ok() { assert!(can_deliver(4)); }

#[test]
fn t_low() { assert!(!can_deliver(2)); }

fn main() {
    step(1);
    let mut c = grab_core();
    step(1);
    scan(&c);
    step(1);
    boost(&mut c);
    if can_deliver(core_power()) {
        step(1);
        deliver(c);
    }
}`,
    quickChips: [
      { label: 'power >= 4', insert: 'power >= 4' },
    ],
    hints: [
      't_ok は can_deliver(4) == true を期待しているよ！',
      'can_deliver の中身を `power >= 4` に直せば 2つのテストに合格して納品まで自動実行されるよ！',
      'power >= 4',
    ],
    worldSetup: {
      width: 5,
      height: 3,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 2 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 4, y: 1 },
      cores: [{ id: 'c1', x: 1, y: 1, power: 2, label: '試験コア' }],
      scanners: [{ x: 2, y: 1 }],
      chargers: [{ x: 3, y: 1 }],
      deliveries: [{ x: 4, y: 1 }],
    },
    victoryCondition: { reachGoal: true, deliverCores: 1, minCorePower: 4, scanCount: 1, testsRequired: 2, requireSpatialCoreRules: true },
    parTicks: 9,
  },
  {
    displayId: '11-11',
    id: '0b91ddc0-b6f7-5e13-912f-333b7f29bdb1',
    index: 0,
    chapter: 11,
    chapterTitle: '第11章 自動テスト',
    stageKind: 'puzzle',
    title: '11-11. Result 計算テスト3本勝負',
    topicTag: '3テスト合格 + Result',
    kurumiIntro:
      '正の数だけ受け付けて2倍にする安全関数 `double_positive(n) -> Result<i32, String>` を書いて、用意された3つのテスト全部に通そう！',
    goalSummary: '3つのテスト（正・0・負）すべて合格して金庫⚡6＋(3, 1)へ',
    bookSectionTitle: '11.3 Result 関数の正常・境界・異常テスト',
    bookSummary:
      '正の正常ケース、境界のゼロ、負の異常ケースの3種類をテストすることで関数の品質を保証します。',
    bookKeyCode: 'if n > 0 { Ok(n * 2) } else { Err("無効") }',
    starterCode: `fn double_positive(n: i32) -> Result<i32, String> {
    // n > 0 のとき Ok(n * 2)、0以下は Err("無効") を返そう！
    Err("未完成")
}

#[test]
fn t_pos() { assert_eq!(double_positive(3).unwrap(), 6); }

#[test]
fn t_zero() { assert_eq!(double_positive(0).unwrap_or(-1), -1); }

#[test]
fn t_neg() { assert_eq!(double_positive(-2).unwrap_or(-1), -1); }

fn main() {
    let val = double_positive(3).unwrap_or(0);
    add_vault(val);
    step(3);
}`,
    solutionCode: `fn double_positive(n: i32) -> Result<i32, String> {
    if n > 0 { Ok(n * 2) } else { Err("無効") }
}

#[test]
fn t_pos() { assert_eq!(double_positive(3).unwrap(), 6); }

#[test]
fn t_zero() { assert_eq!(double_positive(0).unwrap_or(-1), -1); }

#[test]
fn t_neg() { assert_eq!(double_positive(-2).unwrap_or(-1), -1); }

fn main() {
    let val = double_positive(3).unwrap_or(0);
    add_vault(val);
    step(3);
}`,
    quickChips: [
      { label: 'if n > 0 { Ok(n * 2) } else { Err("無効") }', insert: 'if n > 0 { Ok(n * 2) } else { Err("無効") }' },
    ],
    hints: [
      '今は double_positive が常に Err("未完成") を返しているため t_pos が落ちているよ！',
      'if n > 0 { Ok(n * 2) } else { Err("無効") } を書けば3つのテスト全合格＋金庫⚡6達成！',
      'if n > 0 { Ok(n * 2) } else { Err("無効") }',
    ],
    worldSetup: {
      width: 5,
      height: 3,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 2 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 3, y: 1 },
      vault: { x: 2, y: 0, initial: 0, target: 6 },
    },
    victoryCondition: { reachGoal: true, vaultTarget: 6, testsRequired: 3 },
    parTicks: 5,
  },
  {
    displayId: '11-12',
    id: 'f904680c-0b52-5074-8b88-fc6ee3f21fdc',
    index: 0,
    chapter: 11,
    chapterTitle: '第11章 自動テスト',
    stageKind: 'puzzle',
    title: '11-12. ダイヤル計算モジュールの結合テスト',
    topicTag: 'mod 結合テスト + ダイヤル',
    kurumiIntro:
      '秘密のダイヤル番号を組み立てるモジュール `mod cipher` の公開関数を2つのテストで確かめてから、ダイヤルとスイッチゲートを一気に開こう！',
    goalSummary: '2つの #[test] 合格＋ダイヤル(7)解錠＋全スイッチ＋(5, 1)へ',
    bookSectionTitle: '11.3 公開モジュールの結合テスト',
    bookSummary:
      'クレートの外側から公開API（`cipher::make_code`）を呼び出すテストで、モジュール同士のつながりを確認します。',
    bookKeyCode: 'assert_eq!(cipher::make_code(3, 4), 7);',
    starterCode: `mod cipher {
    pub fn make_code(a: i32, b: i32) -> i32 {
        // a + b を返すよう直そう！（今は a だけ）
        a
    }
}

#[test]
fn t1() { assert_eq!(cipher::make_code(1, 2), 3); }

#[test]
fn t2() { assert_eq!(cipher::make_code(3, 4), 7); }

fn main() {
    let secret = cipher::make_code(3, 4);
    try_dial(secret);
    add_vault(secret);
    step(5);
}`,
    solutionCode: `mod cipher {
    pub fn make_code(a: i32, b: i32) -> i32 {
        a + b
    }
}

#[test]
fn t1() { assert_eq!(cipher::make_code(1, 2), 3); }

#[test]
fn t2() { assert_eq!(cipher::make_code(3, 4), 7); }

fn main() {
    let secret = cipher::make_code(3, 4);
    try_dial(secret);
    add_vault(secret);
    step(5);
}`,
    quickChips: [
      { label: 'a + b', insert: 'a + b' },
    ],
    hints: [
      'cipher::make_code が a しか返していないためテストが失敗しているよ！',
      'a + b に書き換えれば 3 + 4 = 7 でダイヤルも金庫⚡7も一発解錠！',
      'pub fn make_code(a: i32, b: i32) -> i32 {\n    a + b\n}',
    ],
    worldSetup: {
      width: 6,
      height: 3,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 2 }, { x: 5, y: 2 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 5, y: 1 },
      dial: { secret: 7 },
      switches: [{ x: 2, y: 1 }],
      gates: [{ x: 3, y: 1, openTicks: 1, closedTicks: 1, linkedSwitch: { x: 2, y: 1 } }],
      vault: { x: 1, y: 0, initial: 0, target: 7 },
    },
    victoryCondition: { reachGoal: true, dialSolved: true, vaultTarget: 7, testsRequired: 2, requireAllSwitches: true },
    parTicks: 8,
  },
  {
    displayId: '11-13',
    id: 'ba9a9ab0-13b7-56aa-888e-5528cf88b85f',
    index: 0,
    chapter: 11,
    chapterTitle: '第11章 自動テスト',
    stageKind: 'puzzle',
    title: '11-13. ルート長テストとL字スイッチ迷路',
    topicTag: 'Vec 集計テスト + L字迷路',
    kurumiIntro:
      '配列の合計を求める `sum_legs(v: Vec<i32>)` 関数を3つのテストで鍛えてから、そのL字ルートを実際に歩いてスイッチを踏もう！',
    goalSummary: '3つのテスト合格＋全スイッチ＋金庫⚡5＋ゴール (3, 3) へ',
    bookSectionTitle: '11.3 コレクション入力の単体テスト',
    bookSummary:
      '空配列・1要素・複数要素の3パターンを `#[test]` で検証し、コレクションを扱う関数のバグを防ぎます。',
    bookKeyCode: '#[test] fn t_empty() { assert_eq!(sum_legs(vec![]), 0); }',
    starterCode: `fn sum_legs(legs: Vec<i32>) -> i32 {
    let mut s = 0;
    for x in legs {
        // s += x に直そう！今は 1 しか足せてないよ
        s += 1;
    }
    s
}

#[test]
fn t_empty() { assert_eq!(sum_legs(vec![]), 0); }

#[test]
fn t_one() { assert_eq!(sum_legs(vec![4]), 4); }

#[test]
fn t_pair() { assert_eq!(sum_legs(vec![3, 2]), 5); }

fn main() {
    let total = sum_legs(vec![3, 2]);
    add_vault(total);
    step(3);
    turn_right();
    step(2);
}`,
    solutionCode: `fn sum_legs(legs: Vec<i32>) -> i32 {
    let mut s = 0;
    for x in legs {
        s += x;
    }
    s
}

#[test]
fn t_empty() { assert_eq!(sum_legs(vec![]), 0); }

#[test]
fn t_one() { assert_eq!(sum_legs(vec![4]), 4); }

#[test]
fn t_pair() { assert_eq!(sum_legs(vec![3, 2]), 5); }

fn main() {
    let total = sum_legs(vec![3, 2]);
    add_vault(total);
    step(3);
    turn_right();
    step(2);
}`,
    quickChips: [
      { label: 's += x;', insert: 's += x;' },
    ],
    hints: [
      'for ループの中が `s += 1;` になっているから要素の値を正しく足せていないよ！',
      '`s += x;` に直せば3つのテストすべて合格＋金庫⚡5が貯まるよ！',
      'for x in legs {\n    s += x;\n}',
    ],
    worldSetup: {
      width: 5,
      height: 5,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 },
        { x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 3, y: 3 },
      switches: [{ x: 2, y: 1 }],
      gates: [{ x: 3, y: 2, openTicks: 1, closedTicks: 1, linkedSwitch: { x: 2, y: 1 } }],
      vault: { x: 1, y: 0, initial: 0, target: 5 },
    },
    victoryCondition: { reachGoal: true, vaultTarget: 5, testsRequired: 3, requireAllSwitches: true },
    parTicks: 8,
  },
  {
    displayId: '11-14',
    id: '4a4bab84-ce14-50b1-9a7f-d1acadec111a',
    index: 0,
    chapter: 11,
    chapterTitle: '第11章 自動テスト',
    stageKind: 'challenge',
    title: '11-14. テストを自分で追加してスパーク突破',
    topicTag: '#[test] 新規追加チャレンジ',
    kurumiIntro:
      '今はテストが1つしかなくて品質基準（2テスト合格）に足りないよ！境界条件の `#[test]` をもう1つ自分で書き足して、スパークの向こうへ進もう！',
    goalSummary: '2つ以上の #[test] 合格＋スパーク回避＋金庫⚡4＋(5, 1)へ',
    bookSectionTitle: '11.2 足りないテストケースを自ら補う',
    bookSummary:
      '既存のテストを直すだけでなく、抜けていたケース用の `#[test]` 関数を新規追加してテスト網羅度を引き上げます。',
    bookKeyCode: '#[test]\nfn t_clamp_min() { assert_eq!(clamp(1, 4), 4); }',
    starterCode: `fn clamp_min(v: i32, min_v: i32) -> i32 {
    if v < min_v { min_v } else { v }
}

#[test]
fn t_normal() {
    assert_eq!(clamp_min(6, 4), 6);
}

// ここに 2つ目の #[test] 関数を書こう！例: clamp_min(1, 4) == 4

fn main() {
    let val = clamp_min(1, 4);
    add_vault(val);
    for _ in 0..5 {
        while is_spark_ahead() { wait_tick(1); }
        step();
    }
}`,
    solutionCode: `fn clamp_min(v: i32, min_v: i32) -> i32 {
    if v < min_v { min_v } else { v }
}

#[test]
fn t_normal() {
    assert_eq!(clamp_min(6, 4), 6);
}

#[test]
fn t_min() {
    assert_eq!(clamp_min(1, 4), 4);
}

fn main() {
    let val = clamp_min(1, 4);
    add_vault(val);
    for _ in 0..5 {
        while is_spark_ahead() { wait_tick(1); }
        step();
    }
}`,
    quickChips: [
      { label: '#[test] fn t_min() { assert_eq!(clamp_min(1, 4), 4); }', insert: '#[test]\nfn t_min() {\n    assert_eq!(clamp_min(1, 4), 4);\n}\n' },
    ],
    hints: [
      'プログラム自体は正しく動くけれど、テストが1つしか書かれていないよ！',
      '`#[test]` を付けた2つ目の関数（例：`fn t_min() { assert_eq!(clamp_min(1, 4), 4); }`）を書き足そう！',
      '#[test]\nfn t_min() {\n    assert_eq!(clamp_min(1, 4), 4);\n}',
    ],
    worldSetup: {
      width: 6,
      height: 5,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 2 }, { x: 5, y: 2 },
        { x: 0, y: 3 }, { x: 1, y: 3 }, { x: 3, y: 3 }, { x: 4, y: 3 }, { x: 5, y: 3 },
        { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 }, { x: 5, y: 4 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 5, y: 1 },
      vault: { x: 4, y: 0, initial: 0, target: 4 },
      sparks: [
        { id: 'sp1', path: [{ x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 2, y: 2 }, { x: 2, y: 1 }], initialIndex: 0 },
      ],
    },
    victoryCondition: { reachGoal: true, vaultTarget: 4, testsRequired: 2 },
    parTicks: 8,
  },
  {
    displayId: '11-15',
    id: '35e89f94-e94e-5719-a257-93db17b70a38',
    index: 0,
    chapter: 11,
    chapterTitle: '第11章 自動テスト',
    stageKind: 'challenge',
    title: '11-15. モジュール結合テスト＋コア納品チャレンジ',
    topicTag: '3テスト + コア空間納品',
    kurumiIntro:
      '公開モジュール `mod core_calc` に書かれたパワー強化式を直して3つのテストに全部合格し、実際の現場でも検査・強化・納品を成し遂げよう！',
    goalSummary: '3テスト合格・金庫⚡5・コア⚡5+納品（空間ルール）を達成',
    bookSectionTitle: '11.3 リファクタリングしてもテストが守ってくれる安心感',
    bookSummary:
      'ロジックと現場の操作をつなぐ計算部分をテストで固めることで、自信を持って複雑な手順を走らせられます。',
    bookKeyCode: 'pub fn boost_calc(p: i32) -> i32 { p + 2 }',
    starterCode: `mod core_calc {
    pub fn boost_calc(p: i32) -> i32 {
        // +2 するはずが +1 になってるよ！
        p + 1
    }
}

#[test]
fn t_base1() { assert_eq!(core_calc::boost_calc(1), 3); }

#[test]
fn t_base3() { assert_eq!(core_calc::boost_calc(3), 5); }

#[test]
fn t_zero() { assert!(core_calc::boost_calc(0) == 2); }

fn main() {
    let target = core_calc::boost_calc(3);
    add_vault(target);
    step(1);
    let mut c = grab_core();
    step(1);
    scan(&c);
    step(1);
    boost(&mut c);
    step(1);
    deliver(c);
}`,
    solutionCode: `mod core_calc {
    pub fn boost_calc(p: i32) -> i32 {
        p + 2
    }
}

#[test]
fn t_base1() { assert_eq!(core_calc::boost_calc(1), 3); }

#[test]
fn t_base3() { assert_eq!(core_calc::boost_calc(3), 5); }

#[test]
fn t_zero() { assert!(core_calc::boost_calc(0) == 2); }

fn main() {
    let target = core_calc::boost_calc(3);
    add_vault(target);
    step(1);
    let mut c = grab_core();
    step(1);
    scan(&c);
    step(1);
    boost(&mut c);
    step(1);
    deliver(c);
}`,
    quickChips: [
      { label: 'p + 2', insert: 'p + 2' },
    ],
    hints: [
      'core_calc::boost_calc の中が `p + 1` のままだと 3つのテスト全部が落ちちゃうよ！',
      '`p + 2` に直すだけで 3テスト全合格＋金庫⚡5＋コア納品が一気に成功するよ！',
      'pub fn boost_calc(p: i32) -> i32 {\n    p + 2\n}',
    ],
    worldSetup: {
      width: 5,
      height: 3,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 2 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 4, y: 1 },
      cores: [{ id: 'c1', x: 1, y: 1, power: 3, label: 'テストコア' }],
      scanners: [{ x: 2, y: 1 }],
      chargers: [{ x: 3, y: 1 }],
      deliveries: [{ x: 4, y: 1 }],
      vault: { x: 0, y: 0, initial: 0, target: 5 },
    },
    victoryCondition: { reachGoal: true, deliverCores: 1, minCorePower: 5, scanCount: 1, vaultTarget: 5, testsRequired: 3, requireSpatialCoreRules: true },
    parTicks: 10,
  },
  {
    displayId: '11-16',
    id: 'd50a425c-2aac-553f-a6c3-87f3bfa09626',
    index: 0,
    chapter: 11,
    chapterTitle: '第11章 自動テスト',
    stageKind: 'challenge',
    title: '11-16. 第11章挑戦：完全品質保証の迷宮突破',
    topicTag: '第11章 最終チャレンジ',
    kurumiIntro:
      '第11章の最終チャレンジ！設計モジュール `mod spec` の計算バグを直して3つの結合テストに合格したら、2スイッチ・スパーク・ゲート・金庫⚡6の迷宮を駆け抜けよう！',
    goalSummary: '3テスト合格＋"TEST_PASS"＋金庫⚡6・全スイッチ・(5, 3) へ',
    bookSectionTitle: '第11章まとめ — テストに裏打ちされた安心の発進',
    bookSummary:
      '3つ以上の単体・結合テストで検証された計算モジュールを使い、障害物だらけのコースを確実に突破します。',
    bookKeyCode: '#[test] × 3 + 迷宮攻略',
    starterCode: `mod spec {
    pub fn energy(a: i32, b: i32) -> i32 {
        // (a + b) * 2 に直そう！今は a + b だよ
        a + b
    }
}

#[test]
fn t1() { assert_eq!(spec::energy(1, 2), 6); }

#[test]
fn t2() { assert_eq!(spec::energy(0, 3), 6); }

#[test]
fn t3() { assert!(spec::energy(2, 2) == 8); }

fn safe_go(n: i32) {
    for _ in 0..n {
        while is_spark_ahead() || !is_gate_open() { wait_tick(1); }
        step();
    }
}

fn main() {
    let e = spec::energy(1, 2);
    add_vault(e);
    println!("TEST_PASS");
    safe_go(5);
    turn_right();
    safe_go(2);
}`,
    solutionCode: `mod spec {
    pub fn energy(a: i32, b: i32) -> i32 {
        (a + b) * 2
    }
}

#[test]
fn t1() { assert_eq!(spec::energy(1, 2), 6); }

#[test]
fn t2() { assert_eq!(spec::energy(0, 3), 6); }

#[test]
fn t3() { assert!(spec::energy(2, 2) == 8); }

fn safe_go(n: i32) {
    for _ in 0..n {
        while is_spark_ahead() || !is_gate_open() { wait_tick(1); }
        step();
    }
}

fn main() {
    let e = spec::energy(1, 2);
    add_vault(e);
    println!("TEST_PASS");
    safe_go(5);
    turn_right();
    safe_go(2);
}`,
    quickChips: [
      { label: '(a + b) * 2', insert: '(a + b) * 2' },
    ],
    hints: [
      't1 は energy(1, 2) == 6、t3 は energy(2, 2) == 8 を期待しているよ！',
      'spec::energy の中身を `(a + b) * 2` に直せば、テスト3つ全合格＆金庫⚡6でゴールまで一気に進めるよ！',
      'pub fn energy(a: i32, b: i32) -> i32 {\n    (a + b) * 2\n}',
    ],
    worldSetup: {
      width: 6,
      height: 5,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 4, y: 2 },
        { x: 0, y: 3 }, { x: 1, y: 3 }, { x: 2, y: 3 }, { x: 3, y: 3 }, { x: 4, y: 3 },
        { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 }, { x: 5, y: 4 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 5, y: 3 },
      switches: [{ x: 1, y: 1 }, { x: 4, y: 1 }],
      gates: [{ x: 5, y: 2, openTicks: 1, closedTicks: 1, linkedSwitch: { x: 4, y: 1 } }],
      vault: { x: 0, y: 0, initial: 0, target: 6 },
      sparks: [
        { id: 'sp1', path: [{ x: 3, y: 0 }, { x: 3, y: 1 }, { x: 3, y: 2 }, { x: 3, y: 3 }, { x: 3, y: 2 }, { x: 3, y: 1 }], initialIndex: 0 },
      ],
    },
    victoryCondition: { reachGoal: true, vaultTarget: 6, testsRequired: 3, stdoutIncludes: ['TEST_PASS'], requireAllSwitches: true },
    parTicks: 13,
  },

  // =========================================================================
  // 第12章 入出力CLIプロジェクト パズル・挑戦拡張 (12-9 〜 12-16)
  // =========================================================================
  {
    displayId: '12-9',
    id: 'd7653986-119c-5386-ae39-f3e78c4799f6',
    index: 0,
    chapter: 12,
    chapterTitle: '第12章 入出力CLIプロジェクト',
    stageKind: 'puzzle',
    title: '12-9. CLI引数ルート分岐とコンベア走破',
    topicTag: 'cli_args() + ルート分岐',
    kurumiIntro:
      'コマンドライン引数 `cli_args()` の指示 `"FAST"` を読み取ってログに出力し、コンベアを乗り継いでスイッチとゴール `(5, 3)` を 8ティック以内で駆け抜けよう！',
    goalSummary: 'cli_args() から "FAST" を出力し、スイッチ＋コンベアで8ティック以内に (5, 3) へ',
    bookSectionTitle: '12.1 CLI引数を実行モードに反映する',
    bookSummary:
      '起動時の引数 `args[1]` の内容を見て処理を切り替え、標準出力へ実行モードをログ記録します。',
    bookKeyCode: 'let args = cli_args();\nif args[1] == "FAST" { ... }',
    starterCode: `fn main() {
    let args = cli_args();
    // args[1] には "FAST" が入っているよ！出力しつつルートを走ろう
    println!("MODE: {}", args[0]);
    if args[1] == "FAST" {
        step(1);
        turn_right();
        step(1);
        turn_left();
        step(2);
    }
}`,
    solutionCode: `fn main() {
    let args = cli_args();
    println!("MODE: {}", args[1]);
    if args[1] == "FAST" {
        step(1);
        turn_right();
        step(1);
        turn_left();
        step(2);
    }
}`,
    quickChips: [
      { label: 'args[1]', insert: 'args[1]' },
    ],
    hints: [
      'println! が args[0]（"kobo"）を出力しているため目標の "FAST" が含まれていないよ！',
      'args[0] を `args[1]` に変えれば "FAST" が出力され、コンベア経由で8ティック以内にクリアできるよ！',
      'println!("MODE: {}", args[1]);',
    ],
    worldSetup: {
      width: 6,
      height: 5,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 3, y: 1 }, { x: 4, y: 1 }, { x: 5, y: 1 },
        { x: 3, y: 2 }, { x: 4, y: 2 }, { x: 5, y: 2 },
        { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 }, { x: 5, y: 4 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 5, y: 3 },
      cliArgs: ['kobo', 'FAST'],
      switches: [{ x: 2, y: 1 }],
      gates: [{ x: 4, y: 3, openTicks: 1, closedTicks: 1, linkedSwitch: { x: 2, y: 1 } }],
      conveyors: [
        { x: 1, y: 1, dir: 0 },
        { x: 2, y: 2, dir: 1 },
        { x: 3, y: 3, dir: 0 },
      ],
    },
    victoryCondition: { reachGoal: true, stdoutIncludes: ['FAST'], requireAllSwitches: true, maxTicks: 8 },
    parTicks: 8,
  },
  {
    displayId: '12-10',
    id: '986e5ff1-ac6c-57dc-90f1-74296736adc1',
    index: 0,
    chapter: 12,
    chapterTitle: '第12章 入出力CLIプロジェクト',
    stageKind: 'puzzle',
    title: '12-10. Config 構造体＋ダイヤル番号の結合',
    topicTag: 'Config::build + ダイヤル解錠',
    kurumiIntro:
      'CLI引数 `"5"` や環境設定から読み取った設定を `Config` 構造体に格納して、ダイヤル解錠と金庫チャージ、出力ログをまとめて決めよう！',
    goalSummary: 'Config で "CONFIG_OK" 出力・ダイヤル(5)解錠・金庫⚡5・(4, 1)へ',
    bookSectionTitle: '12.3 設定構造体 Config による情報一元化',
    bookSummary:
      '引数と環境設定の両方を `Config` 構造体にまとめ、`Result<Config, String>` で安全に構築してから実行部へ渡します。',
    bookKeyCode: 'struct Config { tag: String, dial: i32 }',
    starterCode: `struct Config {
    tag: String,
    dial: i32,
}

impl Config {
    fn build(args: Vec<String>) -> Result<Config, String> {
        if args.len() < 2 {
            return Err("引数不足");
        }
        // dial を秘密の番号 5 にしよう！今は 1 だよ
        Ok(Config { tag: args[1], dial: 1 })
    }
}

fn main() {
    match Config::build(cli_args()) {
        Ok(cfg) => {
            println!("TAG: {}", cfg.tag);
            try_dial(cfg.dial);
            add_vault(cfg.dial);
            step(4);
        },
        Err(e) => eprintln!("ERR: {}", e),
    }
}`,
    solutionCode: `struct Config {
    tag: String,
    dial: i32,
}

impl Config {
    fn build(args: Vec<String>) -> Result<Config, String> {
        if args.len() < 2 {
            return Err("引数不足");
        }
        Ok(Config { tag: args[1], dial: 5 })
    }
}

fn main() {
    match Config::build(cli_args()) {
        Ok(cfg) => {
            println!("TAG: {}", cfg.tag);
            try_dial(cfg.dial);
            add_vault(cfg.dial);
            step(4);
        },
        Err(e) => eprintln!("ERR: {}", e),
    }
}`,
    quickChips: [
      { label: 'dial: 5', insert: 'dial: 5' },
    ],
    hints: [
      'args[1] に "CONFIG_OK" が入っているから、tag はすでにバッチリ！',
      'dial: 1 を `dial: 5` に変えるとダイヤル解錠も金庫⚡5も一発でクリアになるよ！',
      'Ok(Config { tag: args[1], dial: 5 })',
    ],
    worldSetup: {
      width: 5,
      height: 3,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 2 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 4, y: 1 },
      cliArgs: ['kobo', 'CONFIG_OK'],
      dial: { secret: 5 },
      switches: [{ x: 2, y: 1 }],
      gates: [{ x: 3, y: 1, openTicks: 1, closedTicks: 1, linkedSwitch: { x: 2, y: 1 } }],
      vault: { x: 1, y: 0, initial: 0, target: 5 },
    },
    victoryCondition: { reachGoal: true, dialSolved: true, vaultTarget: 5, stdoutIncludes: ['CONFIG_OK'], requireAllSwitches: true },
    parTicks: 8,
  },
  {
    displayId: '12-11',
    id: '990fa11d-9836-56be-9f70-6e2e77edde16',
    index: 0,
    chapter: 12,
    chapterTitle: '第12章 入出力CLIプロジェクト',
    stageKind: 'puzzle',
    title: '12-11. minigrep 検索結果＋スパーク警告 eprintln!',
    topicTag: 'minigrep + stderr 分離',
    kurumiIntro:
      'パーツ配列からしきい値以上のものを数えて標準出力 `"FOUND"` へ、通路の異常警告は標準エラー出力 `eprintln!("WARN")` へ送りながらスパーク通路を抜けよう！',
    goalSummary: 'テスト合格・stdout "FOUND"・stderr "WARN"・金庫⚡3・(5, 1)へ',
    bookSectionTitle: '12.4 & 12.6 ライブラリ検索＋エラー出力分離',
    bookSummary:
      '検索結果などの正常データは標準出力（`println!`）、安全警告やエラー報告は標準エラー出力（`eprintln!`）へ分けるのがUNIX/CLIの鉄則です。',
    bookKeyCode: 'println!("FOUND: {}", n);\neprintln!("WARN: spark");',
    starterCode: `mod grep {
    pub fn count_ge(limit: i32, list: Vec<i32>) -> i32 {
        let mut c = 0;
        for x in list {
            if x >= limit { c += 1; }
        }
        c
    }
}

#[test]
fn t_grep() {
    assert_eq!(grep::count_ge(10, vec![2, 10, 15, 20]), 3);
}

fn main() {
    let found = grep::count_ge(10, conveyor_batch());
    add_vault(found);
    println!("FOUND: {}", found);
    // 警告は eprintln! で "WARN" を出そう！今は普通の println! だよ
    println!("WARN: spark ahead");
    for _ in 0..5 {
        while is_spark_ahead() || !is_gate_open() { wait_tick(1); }
        step();
    }
}`,
    solutionCode: `mod grep {
    pub fn count_ge(limit: i32, list: Vec<i32>) -> i32 {
        let mut c = 0;
        for x in list {
            if x >= limit { c += 1; }
        }
        c
    }
}

#[test]
fn t_grep() {
    assert_eq!(grep::count_ge(10, vec![2, 10, 15, 20]), 3);
}

fn main() {
    let found = grep::count_ge(10, conveyor_batch());
    add_vault(found);
    println!("FOUND: {}", found);
    eprintln!("WARN: spark ahead");
    for _ in 0..5 {
        while is_spark_ahead() || !is_gate_open() { wait_tick(1); }
        step();
    }
}`,
    quickChips: [
      { label: 'eprintln!("WARN: spark ahead");', insert: 'eprintln!("WARN: spark ahead");' },
    ],
    hints: [
      '2つ目のログが `println!` になっていて標準エラー出力（stderr）に出力されていないよ！',
      '`println!("WARN: spark ahead");` を `eprintln!("WARN: spark ahead");` に直そう！',
      'eprintln!("WARN: spark ahead");',
    ],
    worldSetup: {
      width: 6,
      height: 5,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 2 }, { x: 5, y: 2 },
        { x: 0, y: 3 }, { x: 1, y: 3 }, { x: 3, y: 3 }, { x: 4, y: 3 }, { x: 5, y: 3 },
        { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 }, { x: 5, y: 4 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 5, y: 1 },
      conveyorItems: [4, 10, 12, 20],
      switches: [{ x: 1, y: 1 }],
      gates: [{ x: 3, y: 1, openTicks: 1, closedTicks: 1, linkedSwitch: { x: 1, y: 1 } }],
      vault: { x: 4, y: 0, initial: 0, target: 3 },
      sparks: [
        { id: 'sp1', path: [{ x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 2, y: 2 }, { x: 2, y: 1 }], initialIndex: 0 },
      ],
    },
    victoryCondition: { reachGoal: true, vaultTarget: 3, testsRequired: 1, stdoutIncludes: ['FOUND: 3'], stderrIncludes: ['WARN'], requireAllSwitches: true },
    parTicks: 11,
  },
  {
    displayId: '12-12',
    id: '71bac323-56c1-54c5-a7b2-4d7db7c3abf3',
    index: 0,
    chapter: 12,
    chapterTitle: '第12章 入出力CLIプロジェクト',
    stageKind: 'puzzle',
    title: '12-12. env_flag 切替でコア検査・納品フロー変更',
    topicTag: 'env_flag() + 空間コア',
    kurumiIntro:
      '環境変数 `env_flag()` が `"STRICT"` モードのときは、納品前に必ず検査台 `scan(&c)` と強化台 `boost(&mut c)` の両方を通す厳格ルールでコアを届けよう！',
    goalSummary: 'STRICT モードで "STRICT_OK" 出力・コア検査＆強化(⚡5+)・納品',
    bookSectionTitle: '12.5 環境変数による安全工程の切り替え',
    bookSummary:
      '`env_flag()` の値に応じて厳密検査モードをオンにし、空間上の検査台・強化台を経由するフローを実行します。',
    bookKeyCode: 'if env_flag() == "STRICT" { scan(&c); }',
    starterCode: `fn main() {
    let mode = env_flag();
    println!("ENV: {}", mode);
    step(1);
    let mut c = grab_core();
    step(1);
    if mode == "STRICT" {
        // STRICT モード！まずここで scan(&c); して、"STRICT_OK" を出力しよう
        println!("NORMAL_OK");
    }
    step(1);
    boost(&mut c);
    step(1);
    deliver(c);
}`,
    solutionCode: `fn main() {
    let mode = env_flag();
    println!("ENV: {}", mode);
    step(1);
    let mut c = grab_core();
    step(1);
    if mode == "STRICT" {
        scan(&c);
        println!("STRICT_OK");
    }
    step(1);
    boost(&mut c);
    step(1);
    deliver(c);
}`,
    quickChips: [
      { label: 'scan(&c);', insert: 'scan(&c);\n        ' },
      { label: '"STRICT_OK"', insert: '"STRICT_OK"' },
    ],
    hints: [
      '(2,1) が検査台だから、if mode == "STRICT" の中に `scan(&c);` を追加しよう！',
      'さらに println! の出力も `"STRICT_OK"` に変えればクリアだよ！',
      'scan(&c);\nprintln!("STRICT_OK");',
    ],
    worldSetup: {
      width: 5,
      height: 3,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 2 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 4, y: 1 },
      envFlag: 'STRICT',
      cores: [{ id: 'c1', x: 1, y: 1, power: 3, label: '検査コア' }],
      scanners: [{ x: 2, y: 1 }],
      chargers: [{ x: 3, y: 1 }],
      deliveries: [{ x: 4, y: 1 }],
    },
    victoryCondition: { reachGoal: true, deliverCores: 1, minCorePower: 5, scanCount: 1, stdoutIncludes: ['STRICT_OK'], requireSpatialCoreRules: true },
    parTicks: 11,
  },
  {
    displayId: '12-13',
    id: 'b87d47fc-af3a-5703-8836-a76d69a54774',
    index: 0,
    chapter: 12,
    chapterTitle: '第12章 入出力CLIプロジェクト',
    stageKind: 'puzzle',
    title: '12-13. CLI設定から自律迷路ソルバー起動',
    topicTag: 'CLI + 左手法迷路',
    kurumiIntro:
      'CLI引数 `args[1]` が `"MAZE"` であることを確かめてログを出したら、左手法の自律ループで迷路を抜けよう！',
    goalSummary: 'CLI 起動ログ "MAZE" とテスト合格で迷路の (3, 3) へ',
    bookSectionTitle: '12.4 CLIランチャーからライブラリロジックを呼ぶ',
    bookSummary:
      'CLI層で引数と環境変数を解釈し、検証済みの設定でモジュールの自律制御ロジックを起動する綺麗なアーキテクチャです。',
    bookKeyCode: 'if args[1] == "MAZE" { cli_lib::solve(); }',
    starterCode: `mod cli_lib {
    pub fn check_mode(s: String) -> bool {
        s == "MAZE"
    }
}

#[test]
fn t_mode() {
    assert!(cli_lib::check_mode("MAZE"));
}

fn main() {
    let args = cli_args();
    if cli_lib::check_mode(args[1]) {
        println!("START: {}", args[1]);
        while !at_goal() {
            if !is_wall_left() {
                turn_left();
                step();
            } else if !is_wall_ahead() {
                step();
            } else {
                // 壁で止まったら turn_right(); しよう！今は動かないよ
                wait_tick(1);
            }
        }
    }
}`,
    solutionCode: `mod cli_lib {
    pub fn check_mode(s: String) -> bool {
        s == "MAZE"
    }
}

#[test]
fn t_mode() {
    assert!(cli_lib::check_mode("MAZE"));
}

fn main() {
    let args = cli_args();
    if cli_lib::check_mode(args[1]) {
        println!("START: {}", args[1]);
        while !at_goal() {
            if !is_wall_left() {
                turn_left();
                step();
            } else if !is_wall_ahead() {
                step();
            } else {
                turn_right();
            }
        }
    }
}`,
    quickChips: [
      { label: 'turn_right();', insert: 'turn_right();' },
    ],
    hints: [
      '左手法の最後の `else` が `wait_tick(1);` になっているよ！',
      '`turn_right();` に直せば迷路を自動で抜けてゴール(3,3)に着くよ！',
      'else {\n    turn_right();\n}',
    ],
    worldSetup: {
      width: 5,
      height: 5,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 },
        { x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 },
        { x: 2, y: 3 },
        { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 3, y: 3 },
      cliArgs: ['kobo', 'MAZE'],
    },
    victoryCondition: { reachGoal: true, testsRequired: 1, stdoutIncludes: ['MAZE'] },
    parTicks: 8,
  },
  {
    displayId: '12-14',
    id: 'c831c1c1-a891-53bd-aff3-1a64ff93dec1',
    index: 0,
    chapter: 12,
    chapterTitle: '第12章 入出力CLIプロジェクト',
    stageKind: 'challenge',
    title: '12-14. minigrep フィルタ＋二重スイッチU字ルート',
    topicTag: 'minigrep + 二重スイッチ',
    kurumiIntro:
      'コンベア部品から指定条件を満たす数を集計するライブラリ関数を完成させ、2つのテストに合格してU字型のスイッチ2箇所を踏み抜こう！',
    goalSummary: '2テスト合格＋"BATCH_3"＋金庫⚡3＋全スイッチ＋(0, 3)へ',
    bookSectionTitle: '12.4 TDD でフィルタ機能とルート実行を分離',
    bookSummary:
      '集計・フィルタ処理のテストを済ませた上で、U字の複合スイッチ経路を走り切ります。',
    bookKeyCode: 'mod filter { pub fn count_between(a: i32, b: i32, list: Vec<i32>) -> i32 }',
    starterCode: `mod filter {
    pub fn count_range(min_v: i32, max_v: i32, list: Vec<i32>) -> i32 {
        let mut n = 0;
        for x in list {
            // min_v 以上 かつ max_v 以下（x >= min_v && x <= max_v）を数えよう！
            if x >= min_v { n += 1; }
        }
        n
    }
}

#[test]
fn t_in() { assert_eq!(filter::count_range(5, 15, vec![3, 5, 12, 20]), 2); }

#[test]
fn t_all() { assert_eq!(filter::count_range(1, 10, vec![2, 5, 9]), 3); }

fn main() {
    let c = filter::count_range(5, 15, conveyor_batch());
    add_vault(c);
    println!("BATCH_{}", c);
    step(4);
    turn_right();
    step(2);
    turn_right();
    step(4);
}`,
    solutionCode: `mod filter {
    pub fn count_range(min_v: i32, max_v: i32, list: Vec<i32>) -> i32 {
        let mut n = 0;
        for x in list {
            if x >= min_v && x <= max_v { n += 1; }
        }
        n
    }
}

#[test]
fn t_in() { assert_eq!(filter::count_range(5, 15, vec![3, 5, 12, 20]), 2); }

#[test]
fn t_all() { assert_eq!(filter::count_range(1, 10, vec![2, 5, 9]), 3); }

fn main() {
    let c = filter::count_range(5, 15, conveyor_batch());
    add_vault(c);
    println!("BATCH_{}", c);
    step(4);
    turn_right();
    step(2);
    turn_right();
    step(4);
}`,
    quickChips: [
      { label: '&& x <= max_v', insert: ' && x <= max_v' },
    ],
    hints: [
      '今の条件だと上限 `max_v` をチェックしていないため 20 まで数えてしまい t_in が落ちているよ！',
      '`if x >= min_v && x <= max_v` に直せば 2つのテストも通り、"BATCH_3" と金庫⚡3も一気に達成！',
      'if x >= min_v && x <= max_v { n += 1; }',
    ],
    worldSetup: {
      width: 6,
      height: 5,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 }, { x: 5, y: 1 }, { x: 5, y: 2 }, { x: 5, y: 3 },
        { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 }, { x: 5, y: 4 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 0, y: 3 },
      conveyorItems: [2, 6, 10, 15, 30],
      switches: [{ x: 4, y: 1 }, { x: 2, y: 3 }],
      gates: [{ x: 4, y: 2, openTicks: 1, closedTicks: 1, linkedSwitch: { x: 4, y: 1 } }],
      vault: { x: 1, y: 0, initial: 0, target: 3 },
    },
    victoryCondition: { reachGoal: true, vaultTarget: 3, testsRequired: 2, stdoutIncludes: ['BATCH_3'], requireAllSwitches: true },
    parTicks: 15,
  },
  {
    displayId: '12-15',
    id: '023ce4f0-00a6-583a-9c3a-a016b2f8dc2e',
    index: 0,
    chapter: 12,
    chapterTitle: '第12章 入出力CLIプロジェクト',
    stageKind: 'challenge',
    title: '12-15. コア工場CLI：エラー分離＆検査強化',
    topicTag: 'CLI + stdout/stderr + コア',
    kurumiIntro:
      'CLIツールの実践運用！環境変数 `"TURBO"` で金庫目標を計算し、正常ログ `"CORE_DELIVERED"` は `println!`、注意ログ `"WARN_SPARK"` は `eprintln!` に出力しながらコアを運ぼう！',
    goalSummary: 'テスト合格・stdout "CORE_DELIVERED"・stderr "WARN_SPARK"・コア⚡5+納品・全スイッチ',
    bookSectionTitle: '12.6 本番CLIにおける標準出力と標準エラー出力の運用',
    bookSummary:
      '出力ストリームの分離と単体テスト、そして現実の安全操縦（スパーク待機・コア操作）をすべて統合します。',
    bookKeyCode: 'println!("CORE_DELIVERED"); eprintln!("WARN_SPARK");',
    starterCode: `mod cli {
    pub fn bonus(mode: String) -> i32 {
        if mode == "TURBO" { 5 } else { 1 }
    }
}

#[test]
fn t_turbo() { assert_eq!(cli::bonus("TURBO"), 5); }

fn safe_go(n: i32) {
    for _ in 0..n {
        while is_spark_ahead() { wait_tick(1); }
        step();
    }
}

fn main() {
    add_vault(cli::bonus(env_flag()));
    eprintln!("WARN_SPARK");
    safe_go(1);
    let mut c = grab_core();
    safe_go(1);
    scan(&c);
    // (3,1)スパーク→(4,1)強化＆スイッチ→(5,1)納品台へ進み、最後に "CORE_DELIVERED" を出力しよう！
}`,
    solutionCode: `mod cli {
    pub fn bonus(mode: String) -> i32 {
        if mode == "TURBO" { 5 } else { 1 }
    }
}

#[test]
fn t_turbo() { assert_eq!(cli::bonus("TURBO"), 5); }

fn safe_go(n: i32) {
    for _ in 0..n {
        while is_spark_ahead() { wait_tick(1); }
        step();
    }
}

fn main() {
    add_vault(cli::bonus(env_flag()));
    eprintln!("WARN_SPARK");
    safe_go(1);
    let mut c = grab_core();
    safe_go(1);
    scan(&c);
    safe_go(2);
    boost(&mut c);
    safe_go(1);
    deliver(c);
    println!("CORE_DELIVERED");
}`,
    quickChips: [
      { label: 'safe_go(2); boost(&mut c);', insert: 'safe_go(2);\n    boost(&mut c);\n    ' },
      { label: 'safe_go(1); deliver(c);', insert: 'safe_go(1);\n    deliver(c);\n    ' },
      { label: 'println!("CORE_DELIVERED");', insert: 'println!("CORE_DELIVERED");' },
    ],
    hints: [
      'scan(&c) の場所 (2,1) からスパーク通路(3,1)を抜けるには `safe_go(2);` だよ！',
      '強化台兼スイッチ (4,1) で `boost(&mut c);` し、`safe_go(1); deliver(c);` で(5,1)へ納品しよう！',
      '忘れずに `println!("CORE_DELIVERED");` を書けば全条件クリア！',
    ],
    worldSetup: {
      width: 6,
      height: 5,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 4, y: 2 }, { x: 5, y: 2 },
        { x: 0, y: 3 }, { x: 1, y: 3 }, { x: 2, y: 3 }, { x: 4, y: 3 }, { x: 5, y: 3 },
        { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 }, { x: 5, y: 4 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 5, y: 1 },
      envFlag: 'TURBO',
      cores: [{ id: 'c1', x: 1, y: 1, power: 3, label: 'CLIコア' }],
      scanners: [{ x: 2, y: 1 }],
      chargers: [{ x: 4, y: 1 }],
      switches: [{ x: 4, y: 1 }],
      deliveries: [{ x: 5, y: 1 }],
      vault: { x: 0, y: 0, initial: 0, target: 5 },
      sparks: [
        { id: 'sp1', path: [{ x: 3, y: 0 }, { x: 3, y: 1 }, { x: 3, y: 2 }, { x: 3, y: 3 }, { x: 3, y: 2 }, { x: 3, y: 1 }], initialIndex: 0 },
      ],
    },
    victoryCondition: { reachGoal: true, deliverCores: 1, minCorePower: 5, scanCount: 1, vaultTarget: 5, testsRequired: 1, stdoutIncludes: ['CORE_DELIVERED'], stderrIncludes: ['WARN_SPARK'], requireAllSwitches: true, requireSpatialCoreRules: true },
    parTicks: 15,
  },
  {
    displayId: '12-16',
    id: '4d21d984-cae8-55b3-8b37-4ee94ed21ea6',
    index: 0,
    chapter: 12,
    chapterTitle: '第12章 入出力CLIプロジェクト',
    stageKind: 'challenge',
    title: '12-16. CLIグランドパズル：完全工房システム',
    topicTag: 'CLIの最終チャレンジ',
    kurumiIntro:
      'CLIシステムの集大成！`Result` のエラー処理・`Config` 引数解析・`env_flag` 判定・`#[test]` 2つ・`println!`/`eprintln!`・ダイヤル・スパーク・2スイッチ・コア納品を全部ひとまとめに動かそう！！',
    goalSummary: '知識を総結集！全テスト・stdout/stderr・ダイヤル(4)・金庫⚡7・コア⚡5+・全スイッチ',
    bookSectionTitle: '総まとめ — 安全で堅牢なテスト駆動CLIシステム',
    bookSummary:
      'エラー処理、型とトレイトの抽象化、自動テスト、入出力CLI設計のすべてが噛み合うことで、プロ仕様の信頼できるロボットが完成しました！',
    bookKeyCode: 'Result + trait + #[test] + cli_args() + eprintln!',
    starterCode: `struct CliCfg {
    tag: String,
    vault_amt: i32,
}

mod engine {
    pub fn calc_power(flag: String, batch: Vec<i32>) -> i32 {
        let mut s = if flag == "PRO" { 2 } else { 0 };
        for x in batch {
            if x >= 10 { s += x / 10; }
        }
        s
    }
}

#[test]
fn t_pro() { assert_eq!(engine::calc_power("PRO", vec![5, 20, 30]), 7); }

#[test]
fn t_std() { assert_eq!(engine::calc_power("STD", vec![5, 20]), 2); }

fn build_cfg() -> Result<CliCfg, String> {
    let args = cli_args();
    if args.len() < 2 { return Err("引数不足"); }
    let v = engine::calc_power(env_flag(), conveyor_batch());
    Ok(CliCfg { tag: args[1], vault_amt: v })
}

fn safe_go(n: i32) {
    for _ in 0..n {
        while is_spark_ahead() || !is_gate_open() { wait_tick(1); }
        step();
    }
}

fn main() {
    match build_cfg() {
        Ok(cfg) => {
            println!("RUN_{}", cfg.tag);
            eprintln!("WARN_CHECK");
            add_vault(cfg.vault_amt);
            try_dial(4);
            // (1,1)コア→(2,1)強化＆スイッチ1→(3,1)スパーク→(4,1)スイッチ2→(5,1)右折→(5,3)納品台へ！
            safe_go(1);
        },
        Err(e) => eprintln!("ERR: {}", e),
    }
}`,
    solutionCode: `struct CliCfg {
    tag: String,
    vault_amt: i32,
}

mod engine {
    pub fn calc_power(flag: String, batch: Vec<i32>) -> i32 {
        let mut s = if flag == "PRO" { 2 } else { 0 };
        for x in batch {
            if x >= 10 { s += x / 10; }
        }
        s
    }
}

#[test]
fn t_pro() { assert_eq!(engine::calc_power("PRO", vec![5, 20, 30]), 7); }

#[test]
fn t_std() { assert_eq!(engine::calc_power("STD", vec![5, 20]), 2); }

fn build_cfg() -> Result<CliCfg, String> {
    let args = cli_args();
    if args.len() < 2 { return Err("引数不足"); }
    let v = engine::calc_power(env_flag(), conveyor_batch());
    Ok(CliCfg { tag: args[1], vault_amt: v })
}

fn safe_go(n: i32) {
    for _ in 0..n {
        while is_spark_ahead() || !is_gate_open() { wait_tick(1); }
        step();
    }
}

fn main() {
    match build_cfg() {
        Ok(cfg) => {
            println!("CHALLENGE_{}", cfg.tag);
            eprintln!("WARN_CHECK");
            add_vault(cfg.vault_amt);
            try_dial(4);
            safe_go(1);
            let mut c = grab_core();
            safe_go(1);
            boost(&mut c);
            safe_go(3);
            turn_right();
            safe_go(2);
            deliver(c);
        },
        Err(e) => eprintln!("ERR: {}", e),
    }
}`,
    quickChips: [
      { label: 'let mut c = grab_core();', insert: 'let mut c = grab_core();\n            ' },
      { label: 'boost(&mut c);', insert: 'boost(&mut c);\n            ' },
      { label: 'safe_go(3);', insert: 'safe_go(3);\n            ' },
      { label: 'deliver(c);', insert: 'deliver(c);' },
    ],
    hints: [
      'CLI・テスト・ログ・金庫⚡7・ダイヤル解錠の土台はばっちりだよ！',
      'safe_go(1) で (1,1) のコアを拾い、safe_go(1) で (2,1) 強化台兼スイッチ1で `boost(&mut c);` しよう！',
      '続いて `safe_go(3); turn_right(); safe_go(2); deliver(c);` で(5,3)の納品台へ到達すれば課題クリア！',
    ],
    worldSetup: {
      width: 6,
      height: 5,
      walls: [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 4, y: 2 },
        { x: 0, y: 3 }, { x: 1, y: 3 }, { x: 2, y: 3 }, { x: 3, y: 3 }, { x: 4, y: 3 },
        { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 }, { x: 5, y: 4 },
      ],
      botStart: { x: 0, y: 1, dir: 0 },
      goal: { x: 5, y: 3 },
      cliArgs: ['kobo', 'COMPLETE'],
      envFlag: 'PRO',
      conveyorItems: [5, 20, 30],
      dial: { secret: 4 },
      cores: [{ id: 'c1', x: 1, y: 1, power: 3, label: '総括コア' }],
      chargers: [{ x: 2, y: 1 }],
      switches: [{ x: 2, y: 1 }, { x: 4, y: 1 }],
      gates: [{ x: 5, y: 2, openTicks: 1, closedTicks: 1, linkedSwitch: { x: 4, y: 1 } }],
      deliveries: [{ x: 5, y: 3 }],
      vault: { x: 0, y: 0, initial: 0, target: 7 },
      sparks: [
        { id: 'sp1', path: [{ x: 3, y: 0 }, { x: 3, y: 1 }, { x: 3, y: 2 }, { x: 3, y: 3 }, { x: 3, y: 2 }, { x: 3, y: 1 }], initialIndex: 0 },
      ],
    },
    victoryCondition: { reachGoal: true, dialSolved: true, deliverCores: 1, minCorePower: 5, vaultTarget: 7, testsRequired: 2, stdoutIncludes: ['CHALLENGE_COMPLETE'], stderrIncludes: ['WARN_CHECK'], requireAllSwitches: true, requireSpatialCoreRules: true, requireSafeErrorHandling: true },
    parTicks: 18,
  },
];
