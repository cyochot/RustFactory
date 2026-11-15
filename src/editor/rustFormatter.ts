/**
 * Lightweight, comment- & string-preserving Rust code formatter for the workshop editor.
 * Normalizes 4-space brace indentation, spacing around arrows/operators, and clean blank lines.
 */

interface Span {
  kind: 'code' | 'string' | 'char' | 'line_comment' | 'block_comment';
  text: string;
}

function splitLineSpans(
  line: string,
  inBlockComment: boolean
): { spans: Span[]; nextInBlockComment: boolean } {
  const spans: Span[] = [];
  let i = 0;
  let blockComment = inBlockComment;
  let codeBuf = '';

  const flushCode = () => {
    if (codeBuf.length > 0) {
      spans.push({ kind: 'code', text: codeBuf });
      codeBuf = '';
    }
  };

  while (i < line.length) {
    if (blockComment) {
      const endIdx = line.indexOf('*/', i);
      if (endIdx === -1) {
        spans.push({ kind: 'block_comment', text: line.slice(i) });
        i = line.length;
      } else {
        spans.push({ kind: 'block_comment', text: line.slice(i, endIdx + 2) });
        i = endIdx + 2;
        blockComment = false;
      }
      continue;
    }

    const ch = line[i];
    const next = line[i + 1];

    // Line comment
    if (ch === '/' && next === '/') {
      flushCode();
      spans.push({ kind: 'line_comment', text: line.slice(i) });
      break;
    }

    // Block comment start
    if (ch === '/' && next === '*') {
      flushCode();
      const endIdx = line.indexOf('*/', i + 2);
      if (endIdx === -1) {
        spans.push({ kind: 'block_comment', text: line.slice(i) });
        blockComment = true;
        break;
      } else {
        spans.push({ kind: 'block_comment', text: line.slice(i, endIdx + 2) });
        i = endIdx + 2;
        continue;
      }
    }

    // String literal
    if (ch === '"') {
      flushCode();
      let j = i + 1;
      while (j < line.length) {
        if (line[j] === '\\' && j + 1 < line.length) {
          j += 2;
          continue;
        }
        if (line[j] === '"') {
          j++;
          break;
        }
        j++;
      }
      spans.push({ kind: 'string', text: line.slice(i, j) });
      i = j;
      continue;
    }

    // Char literal (distinguish 'c' or '\n' from lifetime 'a)
    if (ch === "'") {
      if (
        (next === '\\' && i + 3 < line.length && line[i + 3] === "'") ||
        (next && next !== "'" && line[i + 2] === "'")
      ) {
        flushCode();
        const len = next === '\\' ? 4 : 3;
        spans.push({ kind: 'char', text: line.slice(i, i + len) });
        i += len;
        continue;
      }
    }

    codeBuf += ch;
    i++;
  }

  flushCode();
  return { spans, nextInBlockComment: blockComment };
}

function normalizeCodeSegment(seg: string): string {
  // Collapse internal runs of whitespace to single spaces
  let s = seg.replace(/\s+/g, ' ');

  // Normalize comma spacing: no space before ',', single space after ',' unless end of segment
  s = s.replace(/\s*,\s*/g, ', ');

  // Normalize semicolon spacing: no space before ';'
  s = s.replace(/\s+;/g, ';');

  // Normalize arrows: `->` and `=>`
  s = s.replace(/\s*->\s*/g, ' -> ');
  s = s.replace(/\s*=>\s*/g, ' => ');

  // Normalize compound assignments & comparisons (keep unary/reference tokens intact)
  s = s.replace(/\s*(\+=|-=|\*=|\/=|==|!=|<=|>=|&&|\|\|)\s*/g, ' $1 ');

  // Normalize single '=' (not part of ==, !=, <=, >=, +=, -=, *=, /=, =>)
  s = s.replace(/(?<![=!<>+\-*/])\s*=\s*(?![=>])/g, ' = ');

  // Clean space right after opening parens/brackets and right before closing parens/brackets
  s = s.replace(/\(\s+/g, '(');
  s = s.replace(/\s+\)/g, ')');
  s = s.replace(/\[\s+/g, '[');
  s = s.replace(/\s+\]/g, ']');

  // Ensure single space before '{' when preceded by ident/paren/keyword (but not empty or start)
  s = s.replace(/([A-Za-z0-9_)\]>])\s*\{/g, '$1 {');

  // Ensure space after control-flow keywords before '(' or '{' or condition
  s = s.replace(/\b(if|while|for|match|return)\(/g, '$1 (');
  s = s.replace(/\b(else)\{/g, '$1 {');

  // Keep `&mut ` clean
  s = s.replace(/&\s+mut\s+/g, '&mut ');

  // Keep `::` tight
  s = s.replace(/\s*::\s*/g, '::');

  return s;
}

function countBraceDelta(spans: Span[]): { leadingCloses: number; netDelta: number } {
  const codeOnly = spans
    .filter((sp) => sp.kind === 'code')
    .map((sp) => sp.text)
    .join('');

  const trimmed = codeOnly.trimStart();
  let leadingCloses = 0;
  for (let i = 0; i < trimmed.length; i++) {
    const ch = trimmed[i];
    if (ch === '}' || ch === ')' || ch === ']') {
      leadingCloses++;
    } else if (!/\s/.test(ch)) {
      break;
    }
  }

  let opens = 0;
  let closes = 0;
  for (let i = 0; i < codeOnly.length; i++) {
    const ch = codeOnly[i];
    if (ch === '{' || ch === '(' || ch === '[') opens++;
    else if (ch === '}' || ch === ')' || ch === ']') closes++;
  }

  return { leadingCloses, netDelta: opens - closes };
}

export function formatRustCode(source: string): string {
  const rawLines = source.replace(/\r\n/g, '\n').split('\n');
  const formattedLines: string[] = [];
  let indentLevel = 0;
  let inBlockComment = false;
  let consecutiveBlanks = 0;

  for (const rawLine of rawLines) {
    const trimmed = rawLine.trim();
    if (trimmed.length === 0) {
      if (formattedLines.length > 0 && consecutiveBlanks === 0) {
        formattedLines.push('');
        consecutiveBlanks++;
      }
      continue;
    }
    consecutiveBlanks = 0;

    const { spans, nextInBlockComment } = splitLineSpans(trimmed, inBlockComment);
    inBlockComment = nextInBlockComment;

    const { leadingCloses, netDelta } = countBraceDelta(spans);
    const effectiveIndent = Math.max(0, indentLevel - leadingCloses);

    // Reassemble spans, normalizing only 'code' spans
    let rebuilt = '';
    for (let idx = 0; idx < spans.length; idx++) {
      const sp = spans[idx];
      if (sp.kind === 'code') {
        rebuilt += normalizeCodeSegment(sp.text);
      } else {
        // Ensure a single space before inline line comment if preceded by code
        if (sp.kind === 'line_comment' && rebuilt.length > 0 && !rebuilt.endsWith(' ')) {
          rebuilt += ' ';
        }
        rebuilt += sp.text;
      }
    }

    rebuilt = rebuilt.trim();
    const indentPrefix = '    '.repeat(effectiveIndent);
    formattedLines.push(indentPrefix + rebuilt);

    indentLevel = Math.max(0, indentLevel + netDelta);
  }

  // Trim trailing blank lines
  while (formattedLines.length > 0 && formattedLines[formattedLines.length - 1] === '') {
    formattedLines.pop();
  }

  return formattedLines.join('\n');
}
