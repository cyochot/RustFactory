import React from 'react';

export type RustTokenKind =
  | 'plain'
  | 'comment'
  | 'keyword'
  | 'modifier'
  | 'function'
  | 'macro'
  | 'type'
  | 'namespace'
  | 'enum'
  | 'string'
  | 'escape'
  | 'number'
  | 'operator'
  | 'bracket'
  | 'punctuation'
  | 'meta'
  | 'lifetime'
  | 'property'
  | 'variable';

export interface RustHighlightToken {
  kind: RustTokenKind;
  text: string;
}

const RUST_KEYWORDS = new Set([
  'fn',
  'let',
  'if',
  'else',
  'match',
  'loop',
  'while',
  'for',
  'in',
  'return',
  'break',
  'continue',
  'struct',
  'enum',
  'impl',
  'trait',
  'mod',
  'use',
  'crate',
  'super',
  'self',
  'Self',
  'type',
  'where',
  'macro_rules',
  'union',
]);

const RUST_MODIFIERS = new Set([
  'mut',
  'pub',
  'unsafe',
  'move',
  'ref',
  'as',
  'async',
  'await',
  'const',
  'static',
  'dyn',
  'extern',
  'default',
]);

const RUST_ENUM_VARIANTS = new Set([
  'Some',
  'None',
  'Ok',
  'Err',
  'Less',
  'Greater',
  'Equal',
]);

const RUST_TYPES = new Set([
  'i8',
  'i16',
  'i32',
  'i64',
  'i128',
  'isize',
  'u8',
  'u16',
  'u32',
  'u64',
  'u128',
  'usize',
  'f32',
  'f64',
  'bool',
  'char',
  'str',
  'String',
  'Vec',
  'Option',
  'Result',
  'Box',
  'Rc',
  'RefCell',
  'Arc',
  'Mutex',
  'MutexGuard',
  'HashMap',
  'ThreadPool',
  'JoinHandle',
  'Sender',
  'Receiver',
  'Core',
  'Ordering',
]);

const WORKSHOP_FNS = new Set([
  'step',
  'move_forward',
  'turn_right',
  'turn_left',
  'wait_tick',
  'is_gate_open',
  'at_goal',
  'grab_core',
  'deliver',
  'scan',
  'boost',
  'try_dial',
  'conveyor_batch',
  'inspect_slice',
  'add_vault',
  'unlock_gate',
  'read_part',
  'cli_args',
  'env_flag',
  'job_queue',
  'raw_pointer_addr',
  'drop',
]);

const TOKEN_COLORS: Record<RustTokenKind, { color: string; fontWeight?: string; fontStyle?: string }> = {
  plain: { color: '#FFF8EE' },
  comment: { color: '#A88E80', fontStyle: 'italic' },
  keyword: { color: '#FB923C', fontWeight: '700' },
  modifier: { color: '#F472B6', fontWeight: '600' },
  function: { color: '#2DD4BF', fontWeight: '600' },
  macro: { color: '#2DD4BF', fontWeight: '600' },
  type: { color: '#67E8F9', fontWeight: '600' },
  namespace: { color: '#67E8F9', fontWeight: '600' },
  enum: { color: '#C4B5FD', fontWeight: '600' },
  string: { color: '#FDE047' },
  escape: { color: '#FDBA74', fontWeight: '600' },
  number: { color: '#FBBF24' },
  operator: { color: '#F5D0FE' },
  bracket: { color: '#D9C0A3' },
  punctuation: { color: '#C9B2A2' },
  meta: { color: '#FDBA74' },
  lifetime: { color: '#F472B6', fontStyle: 'italic' },
  property: { color: '#FDE68A' },
  variable: { color: '#FFF8EE' },
};

function pushStringTokens(raw: string, out: RustHighlightToken[]) {
  // Split out format placeholders `{...}` and backslash escapes `\n` inside string literals
  const partRe = /(\\[\\'"nrt0]|\\x[0-9A-Fa-f]{2}|\\u\{[0-9A-Fa-f_]+\}|\{[^{}\n]*\})/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = partRe.exec(raw)) !== null) {
    if (m.index > last) {
      out.push({ kind: 'string', text: raw.slice(last, m.index) });
    }
    out.push({ kind: 'escape', text: m[0] });
    last = m.index + m[0].length;
  }
  if (last < raw.length) {
    out.push({ kind: 'string', text: raw.slice(last) });
  }
}

function prevNonWsChar(code: string, idx: number): string {
  for (let i = idx - 1; i >= 0; i--) {
    if (!/\s/.test(code[i])) return code[i];
  }
  return '';
}

function nextNonWsChar(code: string, idx: number): string {
  for (let i = idx; i < code.length; i++) {
    if (!/\s/.test(code[i])) return code[i];
  }
  return '';
}

export function tokenizeRustCode(code: string): RustHighlightToken[] {
  const tokens: RustHighlightToken[] = [];
  let i = 0;
  const len = code.length;

  while (i < len) {
    const ch = code[i];

    // 1. Whitespace
    if (/\s/.test(ch)) {
      let j = i + 1;
      while (j < len && /\s/.test(code[j])) j++;
      tokens.push({ kind: 'plain', text: code.slice(i, j) });
      i = j;
      continue;
    }

    // 2. Line comment
    if (ch === '/' && code[i + 1] === '/') {
      let j = i + 2;
      while (j < len && code[j] !== '\n') j++;
      tokens.push({ kind: 'comment', text: code.slice(i, j) });
      i = j;
      continue;
    }

    // 3. Block comment
    if (ch === '/' && code[i + 1] === '*') {
      let j = i + 2;
      while (j < len && !(code[j] === '*' && code[j + 1] === '/')) j++;
      j = Math.min(len, j + 2);
      tokens.push({ kind: 'comment', text: code.slice(i, j) });
      i = j;
      continue;
    }

    // 4. Attribute #[...] or #![...]
    if (ch === '#' && (code[i + 1] === '[' || (code[i + 1] === '!' && code[i + 2] === '['))) {
      let j = code[i + 1] === '!' ? i + 3 : i + 2;
      let depth = 1;
      let inStr = false;
      while (j < len && depth > 0) {
        if (code[j] === '"' && code[j - 1] !== '\\') inStr = !inStr;
        else if (!inStr) {
          if (code[j] === '[') depth++;
          else if (code[j] === ']') depth--;
        }
        j++;
      }
      tokens.push({ kind: 'meta', text: code.slice(i, j) });
      i = j;
      continue;
    }

    // 5. String literal
    if (ch === '"') {
      let j = i + 1;
      while (j < len) {
        if (code[j] === '\\' && j + 1 < len) {
          j += 2;
          continue;
        }
        if (code[j] === '"') {
          j++;
          break;
        }
        j++;
      }
      pushStringTokens(code.slice(i, j), tokens);
      i = j;
      continue;
    }

    // 6. Lifetime ('a, 'static) or char literal ('x', '\n')
    if (ch === "'") {
      const charMatch = code.slice(i).match(/^'(?:\\.|[^'\\\n])'/);
      if (charMatch) {
        tokens.push({ kind: 'string', text: charMatch[0] });
        i += charMatch[0].length;
        continue;
      }
      const lifeMatch = code.slice(i).match(/^'[A-Za-z_][A-Za-z0-9_]*/);
      if (lifeMatch) {
        tokens.push({ kind: 'lifetime', text: lifeMatch[0] });
        i += lifeMatch[0].length;
        continue;
      }
    }

    // 7. Number literal
    if (/[0-9]/.test(ch)) {
      const numMatch = code
        .slice(i)
        .match(/^(?:0x[0-9a-fA-F_]+|0b[01_]+|0o[0-7_]+|\d[\d_]*(?:\.(?!\.)\d[\d_]*)?)(?:[iu](?:8|16|32|64|128|size)|f(?:32|64))?/);
      if (numMatch) {
        tokens.push({ kind: 'number', text: numMatch[0] });
        i += numMatch[0].length;
        continue;
      }
    }

    // 8. Identifier / Keyword / Function / Macro / Type
    if (/[A-Za-z_]/.test(ch)) {
      let j = i + 1;
      while (j < len && /[A-Za-z0-9_]/.test(code[j])) j++;
      if (code[j] === '!' && code[j + 1] !== '=') {
        j++;
      }

      const word = code.slice(i, j);
      const prevCh = prevNonWsChar(code, i);
      const nextCh = nextNonWsChar(code, j);
      const nextTwo = code.slice(j, j + 2);

      let kind: RustTokenKind = 'variable';
      if (word.endsWith('!')) {
        kind = 'macro';
      } else if (word === 'true' || word === 'false') {
        kind = 'number';
      } else if (RUST_KEYWORDS.has(word)) {
        kind = 'keyword';
      } else if (RUST_MODIFIERS.has(word)) {
        kind = 'modifier';
      } else if (RUST_ENUM_VARIANTS.has(word)) {
        kind = 'enum';
      } else if (nextTwo === '::') {
        kind = 'namespace';
      } else if (nextCh === '(' || WORKSHOP_FNS.has(word)) {
        kind = 'function';
      } else if (prevCh === '.') {
        kind = 'property';
      } else if (RUST_TYPES.has(word) || /^[A-Z][A-Za-z0-9_]*$/.test(word)) {
        kind = 'type';
      }

      tokens.push({ kind, text: word });
      i = j;
      continue;
    }

    // 9. Multi-character operators & `::`
    const two = code.slice(i, i + 2);
    const three = code.slice(i, i + 3);
    if (three === '..=') {
      tokens.push({ kind: 'operator', text: three });
      i += 3;
      continue;
    }
    if (two === '::') {
      tokens.push({ kind: 'punctuation', text: two });
      i += 2;
      continue;
    }
    if (
      two === '->' ||
      two === '=>' ||
      two === '..' ||
      two === '&&' ||
      two === '||' ||
      two === '==' ||
      two === '!=' ||
      two === '<=' ||
      two === '>=' ||
      two === '+=' ||
      two === '-=' ||
      two === '*=' ||
      two === '/='
    ) {
      tokens.push({ kind: 'operator', text: two });
      i += 2;
      continue;
    }

    // 10. Brackets
    if ('(){}[]'.includes(ch)) {
      tokens.push({ kind: 'bracket', text: ch });
      i++;
      continue;
    }

    // 11. Punctuation
    if (';,:.'.includes(ch)) {
      tokens.push({ kind: 'punctuation', text: ch });
      i++;
      continue;
    }

    // 12. Operators
    if ('=+-*/%&|^!?<>'.includes(ch)) {
      tokens.push({ kind: 'operator', text: ch });
      i++;
      continue;
    }

    tokens.push({ kind: 'plain', text: ch });
    i++;
  }

  return tokens;
}

export function renderHighlightedRustToElement(container: HTMLElement, code: string) {
  container.textContent = '';
  const tokens = tokenizeRustCode(code);
  for (const tok of tokens) {
    if (tok.kind === 'plain') {
      container.appendChild(document.createTextNode(tok.text));
      continue;
    }
    const span = document.createElement('span');
    span.textContent = tok.text;
    const style = TOKEN_COLORS[tok.kind];
    span.style.color = style.color;
    if (style.fontWeight) span.style.fontWeight = style.fontWeight;
    if (style.fontStyle) span.style.fontStyle = style.fontStyle;
    container.appendChild(span);
  }
}

interface RustCodeBlockProps {
  code: string;
  className?: string;
}

export const RustCodeBlock: React.FC<RustCodeBlockProps> = ({ code, className = '' }) => {
  const tokens = React.useMemo(() => tokenizeRustCode(code), [code]);
  return React.createElement(
    'pre',
    { className: `overflow-x-auto font-code text-[#FFF8EE] ${className}` },
    React.createElement(
      'code',
      null,
      tokens.map((tok, idx) => {
        if (tok.kind === 'plain') {
          return React.createElement(React.Fragment, { key: idx }, tok.text);
        }
        const style = TOKEN_COLORS[tok.kind];
        return React.createElement(
          'span',
          {
            key: idx,
            style: {
              color: style.color,
              fontWeight: style.fontWeight,
              fontStyle: style.fontStyle,
            },
          },
          tok.text
        );
      })
    )
  );
};
