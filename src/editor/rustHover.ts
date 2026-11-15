import { syntaxTree } from '@codemirror/language';
import { EditorView, hoverTooltip, Tooltip } from '@codemirror/view';
import {
  MACRO_ENTRIES,
  METHOD_ENTRIES,
  RUST_SYNTAX_ENTRIES,
  RustDocEntry,
  STD_TYPES_AND_CONCURRENCY,
  WORKSHOP_API_ENTRIES,
} from './rustDocs';
import { renderHighlightedRustToElement } from './rustSyntaxHighlight';

export function createRustDocInfoElement(entry: RustDocEntry): HTMLElement {
  const wrap = document.createElement('div');
  wrap.className = 'cm-rust-doc-info';

  const header = document.createElement('div');
  header.className = 'cm-rust-doc-header';

  const cat = document.createElement('span');
  cat.className = 'cm-rust-doc-cat';
  cat.textContent = entry.category;
  header.appendChild(cat);

  const sig = document.createElement('code');
  sig.className = 'cm-rust-doc-sig';
  sig.textContent = entry.detail;
  header.appendChild(sig);
  wrap.appendChild(header);

  const desc = document.createElement('p');
  desc.className = 'cm-rust-doc-desc';
  desc.textContent = entry.description;
  wrap.appendChild(desc);

  if (entry.ownershipNote) {
    const note = document.createElement('div');
    note.className = 'cm-rust-doc-note';
    note.textContent = `所有権メモ: ${entry.ownershipNote}`;
    wrap.appendChild(note);
  }

  if (entry.example) {
    const pre = document.createElement('pre');
    pre.className = 'cm-rust-doc-example';
    renderHighlightedRustToElement(pre, entry.example);
    wrap.appendChild(pre);
  }

  return wrap;
}

const SUPPLEMENTAL_HOVER_ENTRIES: RustDocEntry[] = [
  {
    label: 'mut',
    type: 'keyword',
    detail: 'mut（可変修飾子）',
    category: 'Rust基本構文',
    description:
      '変数や参照（&mut T）を「書き換え可能（ミュータブル）」にすることを宣言します。',
    ownershipNote: '同じスコープ内で &mut 借用は同時に1つだけ作れます。',
    example: 'let mut core = grab_core();\nboost(&mut core);',
  },
  {
    label: 'Core',
    type: 'type',
    detail: 'struct Core（所有権付きリソース）',
    category: '所有権・コアAPI',
    description:
      'エネルギーコアを表す構造体です。Copy トレイトを持たないため、代入や関数渡しで所有権が移動（Move）します。',
    ownershipNote: '所有権を手放さずに調べるには &Core、強化するには &mut Core を渡します。',
  },
  {
    label: 'Arc',
    type: 'type',
    detail: 'std::sync::Arc<T>',
    category: '並行処理・スマートポインタ',
    description:
      '複数スレッドで安全に所有権を共有できるアトミック参照カウント型ポインタです。',
    example: 'let shared = Arc::new(Mutex::new(0));\nlet cloned = Arc::clone(&shared);',
  },
  {
    label: 'Mutex',
    type: 'type',
    detail: 'std::sync::Mutex<T>',
    category: '並行処理・排他制御',
    description:
      '排他ロックによって同時に1スレッドだけが内部データへアクセスできるようにする型です。',
    example: 'let mut guard = vault.lock().unwrap();\n*guard += 1;',
  },
  {
    label: 'Rc',
    type: 'type',
    detail: 'std::rc::Rc<T>',
    category: 'スマートポインタ',
    description:
      '単一スレッド内で複数の所有者を持てる参照カウント型スマートポインタです。',
    example: 'let a = Rc::new(3);\nlet b = Rc::clone(&a);',
  },
  {
    label: 'RefCell',
    type: 'type',
    detail: 'std::cell::RefCell<T>',
    category: 'スマートポインタ',
    description:
      '実行時に借用ルールを検査して内部可変性を提供するコンテナ型です。',
    example: 'let cell = RefCell::new(3);\n*cell.borrow_mut() += 1;',
  },
  {
    label: 'Box',
    type: 'type',
    detail: 'std::boxed::Box<T>',
    category: 'スマートポインタ',
    description:
      '値をヒープ領域に確保するスマートポインタです。*b で中身にアクセスできます。',
    example: 'let b = Box::new(3);\nstep(*b);',
  },
  {
    label: 'HashMap',
    type: 'type',
    detail: 'std::collections::HashMap<K, V>',
    category: 'コレクション',
    description: 'キーと値のペアを管理する連想配列（ハッシュマップ）型です。',
    example: 'let mut map = HashMap::new();\nmap.insert("crab", 3);',
  },
  {
    label: 'ThreadPool',
    type: 'type',
    detail: 'struct ThreadPool',
    category: '並行処理・最終課題',
    description:
      '複数スレッドでジョブを並列処理するためのワーカープールです。drop(pool) で完了待機します。',
    example: 'let pool = ThreadPool::new(2);\npool.execute(|| { add_vault(1); });',
  },
  {
    label: 'Ordering',
    type: 'enum',
    detail: 'enum Ordering { Less, Equal, Greater }',
    category: '比較列挙型',
    description: '2つの値を比較した結果（小さい・等しい・大きい）を表す列挙型です。',
    example: 'match try_dial(guess) {\n    Ordering::Equal => break,\n    _ => {},\n}',
  },
];

const GENERAL_ENTRY_MAP = new Map<string, RustDocEntry>();
for (const entry of [
  ...WORKSHOP_API_ENTRIES,
  ...MACRO_ENTRIES,
  ...STD_TYPES_AND_CONCURRENCY,
  ...RUST_SYNTAX_ENTRIES,
  ...SUPPLEMENTAL_HOVER_ENTRIES,
]) {
  if (!entry.label.includes(' ')) {
    GENERAL_ENTRY_MAP.set(entry.label, entry);
  }
}

// Compiler-supported aliases
const aliasSpawn = GENERAL_ENTRY_MAP.get('thread::spawn');
if (aliasSpawn) GENERAL_ENTRY_MAP.set('spawn', aliasSpawn);
const aliasStep = GENERAL_ENTRY_MAP.get('step');
if (aliasStep) GENERAL_ENTRY_MAP.set('move_forward', aliasStep);

const METHOD_ENTRY_MAP = new Map<string, RustDocEntry>();
for (const entry of METHOD_ENTRIES) {
  METHOD_ENTRY_MAP.set(entry.label, entry);
}

const IDENT_CHAR_RE = /[A-Za-z0-9_]/;

function isInsideCommentOrString(view: EditorView, pos: number, side: -1 | 1): boolean {
  let node = syntaxTree(view.state).resolveInner(pos, side);
  for (let depth = 0; depth < 6 && node; depth++) {
    const name = node.name;
    if (
      name.includes('Comment') ||
      name.includes('String') ||
      name === 'Char' ||
      name === 'CharLiteral' ||
      name === 'EscapeSequence'
    ) {
      return true;
    }
    if (!node.parent) break;
    node = node.parent;
  }
  return false;
}

interface ExtractedToken {
  fullToken: string;
  hoveredSegment: string;
  from: number;
  to: number;
  segFrom: number;
  segTo: number;
  isDotMethod: boolean;
}

function extractTokenAtPos(
  view: EditorView,
  pos: number,
  side: -1 | 1
): ExtractedToken | null {
  const line = view.state.doc.lineAt(pos);
  const text = line.text;
  let offset = pos - line.from;

  const isTokenChar = (i: number) =>
    i >= 0 &&
    i < text.length &&
    (IDENT_CHAR_RE.test(text[i]) ||
      (text[i] === '!' && i > 0 && IDENT_CHAR_RE.test(text[i - 1])) ||
      (text[i] === ':' && (text[i + 1] === ':' || text[i - 1] === ':')));

  if (!isTokenChar(offset)) {
    if (side < 0 && isTokenChar(offset - 1)) {
      offset -= 1;
    } else if (isTokenChar(offset - 1) && offset === text.length) {
      offset -= 1;
    } else {
      return null;
    }
  }

  if (text[offset] === '!') {
    if (offset === 0 || !IDENT_CHAR_RE.test(text[offset - 1])) return null;
    offset -= 1;
  }

  // Locate the single identifier segment around offset
  let segStart = offset;
  let segEnd = offset;
  if (text[offset] === ':') {
    // Cursor is on `::`; shift onto adjacent identifier if possible
    if (offset + 2 < text.length && text[offset + 1] === ':' && IDENT_CHAR_RE.test(text[offset + 2])) {
      segStart = offset + 2;
      segEnd = offset + 2;
    } else if (offset > 0 && text[offset - 1] === ':' && offset - 2 >= 0 && IDENT_CHAR_RE.test(text[offset - 2])) {
      segStart = offset - 2;
      segEnd = offset - 2;
    }
  }
  while (segStart > 0 && IDENT_CHAR_RE.test(text[segStart - 1])) segStart--;
  while (segEnd < text.length && IDENT_CHAR_RE.test(text[segEnd])) segEnd++;

  // Expand to full `a::b::c` path and optional trailing `!`
  let pathStart = segStart;
  while (pathStart > 0) {
    if (IDENT_CHAR_RE.test(text[pathStart - 1])) {
      pathStart--;
    } else if (
      pathStart >= 2 &&
      text[pathStart - 1] === ':' &&
      text[pathStart - 2] === ':' &&
      pathStart >= 3 &&
      IDENT_CHAR_RE.test(text[pathStart - 3])
    ) {
      pathStart -= 2;
    } else {
      break;
    }
  }

  let pathEnd = segEnd;
  while (pathEnd < text.length) {
    if (IDENT_CHAR_RE.test(text[pathEnd])) {
      pathEnd++;
    } else if (
      pathEnd + 2 < text.length &&
      text[pathEnd] === ':' &&
      text[pathEnd + 1] === ':' &&
      IDENT_CHAR_RE.test(text[pathEnd + 2])
    ) {
      pathEnd += 2;
    } else {
      break;
    }
  }

  if (pathEnd < text.length && text[pathEnd] === '!') {
    pathEnd++;
  }

  const fullToken = text.slice(pathStart, pathEnd);
  if (!fullToken || !/[A-Za-z_]/.test(fullToken)) return null;

  const hoveredSegment =
    text.slice(segStart, segEnd) + (segEnd === pathEnd - 1 && text[pathEnd - 1] === '!' ? '!' : '');

  const isDotMethod =
    pathStart > 0 &&
    text[pathStart - 1] === '.' &&
    !(pathStart > 1 && text[pathStart - 2] === '.');

  return {
    fullToken,
    hoveredSegment,
    from: line.from + pathStart,
    to: line.from + pathEnd,
    segFrom: line.from + segStart,
    segTo: line.from + segEnd,
    isDotMethod,
  };
}

function findUserDefinedDocEntry(
  docText: string,
  name: string,
  preferMethod: boolean
): RustDocEntry | null {
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  if (!name.endsWith('!')) {
    const fnRegex = new RegExp(
      `\\b(?:pub\\s+)?(?:unsafe\\s+)?fn\\s+${escaped}\\s*\\(([^)]*)\\)(?:\\s*->\\s*([^\\{\\n]+))?`
    );
    const match = docText.match(fnRegex);
    if (match) {
      const params = match[1].trim();
      const ret = match[2]?.trim();
      const hasSelf = /\bself\b/.test(params);
      if (preferMethod && !hasSelf) {
        return null;
      }
      if (!preferMethod && hasSelf) {
        return null;
      }
      const sig = `fn ${name}(${params})${ret ? ` -> ${ret}` : ''}`;
      if (name === 'main') {
        return {
          label: 'main',
          type: 'function',
          detail: sig,
          category: 'エントリーポイント',
          description: 'Rustプログラムが最初に実行する開始関数です。',
        };
      }
      return {
        label: name,
        type: preferMethod ? 'method' : 'function',
        detail: sig,
        category: preferMethod ? 'このコードのメソッド' : 'このコードの関数',
        description: preferMethod
          ? `現在のコード内の impl で定義されているメソッド '${name}' です。`
          : `現在のコード内で定義されている関数 '${name}' です。`,
      };
    }
  }

  const macroName = name.endsWith('!') ? name.slice(0, -1) : name;
  const escapedMacro = macroName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const macroRegex = new RegExp(`\\bmacro_rules!\\s+${escapedMacro}\\b`);
  if (name.endsWith('!') && macroRegex.test(docText)) {
    return {
      label: `${macroName}!`,
      type: 'function',
      detail: `macro ${macroName}!(...)`,
      category: 'このコードのマクロ',
      description: `現在のコード内の macro_rules! で定義されている自作マクロ '${macroName}!' です。`,
    };
  }

  return null;
}

function resolveHoverDoc(
  view: EditorView,
  pos: number,
  side: -1 | 1
): { from: number; to: number; entry: RustDocEntry } | null {
  if (isInsideCommentOrString(view, pos, side)) return null;

  const token = extractTokenAtPos(view, pos, side);
  if (!token) return null;

  const docText = view.state.doc.toString();

  // 1. Method calls (`foo.method()`)
  if (token.isDotMethod) {
    const methodEntry = METHOD_ENTRY_MAP.get(token.fullToken);
    if (methodEntry) {
      return { from: token.from, to: token.to, entry: methodEntry };
    }
    const userMethod = findUserDefinedDocEntry(docText, token.fullToken, true);
    if (userMethod) {
      return { from: token.from, to: token.to, entry: userMethod };
    }
    return null;
  }

  // 2. Attribute like `#[test]`
  const line = view.state.doc.lineAt(pos);
  const lineOffset = token.from - line.from;
  if (lineOffset >= 2 && line.text.slice(lineOffset - 2, lineOffset) === '#[' && token.fullToken === 'test') {
    const testAttr = RUST_SYNTAX_ENTRIES.find((e) => e.label === '#[test]');
    if (testAttr) {
      return { from: token.from - 2, to: token.to + 1, entry: testAttr };
    }
  }

  // 3. Exact match (functions, macros, associated functions, keywords, types)
  const exact = GENERAL_ENTRY_MAP.get(token.fullToken);
  if (exact) {
    return { from: token.from, to: token.to, entry: exact };
  }

  // 4. Qualified path resolution (e.g. `std::thread::spawn`, `Option::Some`, `Result::Ok`, `kobo::drive`)
  if (token.fullToken.includes('::')) {
    const parts = token.fullToken.split('::');
    if (parts.length >= 2) {
      const tail2 = parts.slice(-2).join('::');
      const tail2Match = GENERAL_ENTRY_MAP.get(tail2);
      if (tail2Match) {
        return { from: token.from, to: token.to, entry: tail2Match };
      }

      const lastPart = parts[parts.length - 1];
      if (
        tail2 === 'Option::Some' ||
        tail2 === 'Option::None' ||
        tail2 === 'Result::Ok' ||
        tail2 === 'Result::Err'
      ) {
        const enumCtor = GENERAL_ENTRY_MAP.get(lastPart);
        if (enumCtor) {
          return { from: token.from, to: token.to, entry: enumCtor };
        }
      }

      const userPathFn = findUserDefinedDocEntry(docText, lastPart, false);
      if (userPathFn) {
        return { from: token.from, to: token.to, entry: userPathFn };
      }
    }

    const segEntry = GENERAL_ENTRY_MAP.get(token.hoveredSegment);
    if (segEntry) {
      return { from: token.segFrom, to: token.segTo, entry: segEntry };
    }
  }

  // 5. User-defined function or macro_rules! in the current editor buffer
  const userFn = findUserDefinedDocEntry(docText, token.fullToken, false);
  if (userFn) {
    return { from: token.from, to: token.to, entry: userFn };
  }

  return null;
}

export function createWorkshopRustHoverExtension() {
  return hoverTooltip(
    (view, pos, side): Tooltip | null => {
      const resolved = resolveHoverDoc(view, pos, side);
      if (!resolved) return null;

      return {
        pos: resolved.from,
        end: resolved.to,
        above: true,
        create() {
          const dom = createRustDocInfoElement(resolved.entry);
          dom.classList.add('cm-rust-hover-card');
          return { dom };
        },
      };
    },
    {
      hoverTime: 220,
      hideOnChange: 'touch',
    }
  );
}
