import {
  CompileAndSimulateResult,
  CompilerDiagnostic,
  Direction,
  GateSnapshot,
  MemoryEntry,
  OwnershipStatus,
  StageDefinition,
  TestCaseResult,
  ThreadSnapshot,
  TickSnapshot,
  VisualCue,
} from '../types/game';

// ============================================================================
// 1. LEXER & PREPROCESSOR (Comments, Attributes, Simple macro_rules!)
// ============================================================================

type TokenKind =
  | 'IDENT'
  | 'LIFETIME'
  | 'NUMBER'
  | 'STRING'
  | 'CHAR'
  | 'PUNCT'
  | 'EOF';

interface Token {
  kind: TokenKind;
  value: string;
  line: number;
  col: number;
}

function preprocessMacros(source: string): {
  code: string;
  diagnostics: CompilerDiagnostic[];
} {
  const diagnostics: CompilerDiagnostic[] = [];
  // Extract simple macro_rules! definitions:
  // macro_rules! name { () => { body }; ($x:ident) => { ... }; }
  const macroDefs = new Map<
    string,
    Array<{ params: string[]; body: string }>
  >();

  let cleaned = '';
  let i = 0;
  let line = 1;

  // Strip comments while preserving newlines so line numbers stay accurate
  let noComments = '';
  while (i < source.length) {
    if (source[i] === '"') {
      noComments += source[i++];
      while (i < source.length) {
        if (source[i] === '\\' && i + 1 < source.length) {
          noComments += source[i++] + source[i++];
          continue;
        }
        if (source[i] === '"') {
          noComments += source[i++];
          break;
        }
        if (source[i] === '\n') line++;
        noComments += source[i++];
      }
      continue;
    }
    if (source[i] === '/' && source[i + 1] === '/') {
      while (i < source.length && source[i] !== '\n') i++;
      continue;
    }
    if (source[i] === '/' && source[i + 1] === '*') {
      i += 2;
      while (i < source.length && !(source[i] === '*' && source[i + 1] === '/')) {
        if (source[i] === '\n') {
          noComments += '\n';
          line++;
        }
        i++;
      }
      i += 2;
      continue;
    }
    if (source[i] === '\n') line++;
    noComments += source[i++];
  }

  // Parse macro_rules! blocks
  const macroRegex = /macro_rules!\s+([A-Za-z_][A-Za-z0-9_]*)\s*\{/g;
  let lastIdx = 0;
  let match: RegExpExecArray | null;
  while ((match = macroRegex.exec(noComments)) !== null) {
    cleaned += noComments.slice(lastIdx, match.index);
    const macroName = match[1];
    let depth = 1;
    let pos = macroRegex.lastIndex;
    while (pos < noComments.length && depth > 0) {
      if (noComments[pos] === '{') depth++;
      else if (noComments[pos] === '}') depth--;
      pos++;
    }
    const bodyText = noComments.slice(macroRegex.lastIndex, pos - 1);
    const newlineCount = noComments.slice(match.index, pos).split('\n').length - 1;
    cleaned += '\n'.repeat(newlineCount);

    // Parse arms like: ( ... ) => { ... };
    const arms: Array<{ params: string[]; body: string }> = [];
    let armPos = 0;
    while (armPos < bodyText.length) {
      const openParen = bodyText.indexOf('(', armPos);
      if (openParen === -1) break;
      const closeParen = bodyText.indexOf(')', openParen);
      if (closeParen === -1) break;
      const paramStr = bodyText.slice(openParen + 1, closeParen).trim();
      const arrowIdx = bodyText.indexOf('=>', closeParen);
      if (arrowIdx === -1) break;
      const openBrace = bodyText.indexOf('{', arrowIdx);
      if (openBrace === -1) break;
      let bDepth = 1;
      let bPos = openBrace + 1;
      while (bPos < bodyText.length && bDepth > 0) {
        if (bodyText[bPos] === '{') bDepth++;
        else if (bodyText[bPos] === '}') bDepth--;
        bPos++;
      }
      const armBody = bodyText.slice(openBrace + 1, bPos - 1);
      const params: string[] = [];
      if (paramStr.length > 0) {
        for (const p of paramStr.split(',')) {
          const m = p.trim().match(/^\$([A-Za-z_][A-Za-z0-9_]*)/);
          if (m) params.push(m[1]);
        }
      }
      arms.push({ params, body: armBody });
      armPos = bPos;
    }
    if (arms.length > 0) {
      macroDefs.set(macroName, arms);
    }
    lastIdx = pos;
    macroRegex.lastIndex = pos;
  }
  cleaned += noComments.slice(lastIdx);

  // Expand user-defined macro_rules! invocations (e.g., move_n!(3); or double_step!();)
  if (macroDefs.size > 0) {
    for (const [name, arms] of macroDefs.entries()) {
      const invokeRegex = new RegExp(`\\b${name}!\\s*\\(([^)]*)\\)`, 'g');
      cleaned = cleaned.replace(invokeRegex, (_full, argStr: string) => {
        const args = argStr.trim()
          ? argStr.split(',').map((s) => s.trim())
          : [];
        const matched =
          arms.find((a) => a.params.length === args.length) || arms[0];
        if (!matched) return '';
        let expanded = matched.body;
        matched.params.forEach((p, idx) => {
          expanded = expanded.replace(
            new RegExp(`\\$${p}\\b`, 'g'),
            args[idx] ?? ''
          );
        });
        return `{ ${expanded} }`;
      });
    }
  }

  return { code: cleaned, diagnostics };
}

function tokenize(source: string): {
  tokens: Token[];
  diagnostics: CompilerDiagnostic[];
} {
  const tokens: Token[] = [];
  const diagnostics: CompilerDiagnostic[] = [];
  let i = 0;
  let line = 1;
  let col = 1;

  const multiPuncts = [
    '..=',
    '::',
    '->',
    '=>',
    '..',
    '+=',
    '-=',
    '*=',
    '/=',
    '==',
    '!=',
    '<=',
    '>=',
    '&&',
    '||',
  ];

  while (i < source.length) {
    const ch = source[i];
    if (ch === '\n') {
      line++;
      col = 1;
      i++;
      continue;
    }
    if (/\s/.test(ch)) {
      col++;
      i++;
      continue;
    }

    // String literal
    if (ch === '"') {
      const startCol = col;
      const startLine = line;
      i++;
      col++;
      let str = '';
      let closed = false;
      while (i < source.length) {
        if (source[i] === '\\' && i + 1 < source.length) {
          const next = source[i + 1];
          if (next === 'n') str += '\n';
          else if (next === 't') str += '\t';
          else str += next;
          i += 2;
          col += 2;
          continue;
        }
        if (source[i] === '"') {
          closed = true;
          i++;
          col++;
          break;
        }
        if (source[i] === '\n') {
          line++;
          col = 1;
        } else {
          col++;
        }
        str += source[i++];
      }
      if (!closed) {
        diagnostics.push({
          line: startLine,
          col: startCol,
          code: 'E0765',
          title: '文字列の閉じ忘れ（" が足りません）',
          explanation: `${startLine}行目から始まった文字列の終わりの " が見つかりませんでした。`,
          tip: '文字列の最後にダブルクォーテーション " を付けよう！',
        });
      }
      tokens.push({ kind: 'STRING', value: str, line: startLine, col: startCol });
      continue;
    }

    // Lifetime or char literal
    if (ch === "'") {
      const startCol = col;
      if (source[i + 2] === "'" && source[i + 1] !== "'") {
        const val = source[i + 1];
        i += 3;
        col += 3;
        tokens.push({ kind: 'CHAR', value: val, line, col: startCol });
        continue;
      }
      i++;
      col++;
      let name = "'";
      while (i < source.length && /[A-Za-z0-9_]/.test(source[i])) {
        name += source[i++];
        col++;
      }
      tokens.push({ kind: 'LIFETIME', value: name, line, col: startCol });
      continue;
    }

    // Number literal
    if (/[0-9]/.test(ch)) {
      const startCol = col;
      let num = '';
      while (i < source.length && /[0-9_]/.test(source[i])) {
        if (source[i] !== '_') num += source[i];
        i++;
        col++;
      }
      // Optional integer type suffix like 5i32 or 5usize
      if (i < source.length && /[iu]/.test(source[i])) {
        while (i < source.length && /[A-Za-z0-9_]/.test(source[i])) {
          i++;
          col++;
        }
      }
      tokens.push({ kind: 'NUMBER', value: num, line, col: startCol });
      continue;
    }

    // Identifier or Keyword
    if (/[A-Za-z_]/.test(ch)) {
      const startCol = col;
      let ident = '';
      while (i < source.length && /[A-Za-z0-9_]/.test(source[i])) {
        ident += source[i++];
        col++;
      }
      tokens.push({ kind: 'IDENT', value: ident, line, col: startCol });
      continue;
    }

    // Multi-char punctuation
    let matchedPunct = '';
    for (const mp of multiPuncts) {
      if (source.startsWith(mp, i)) {
        matchedPunct = mp;
        break;
      }
    }
    if (matchedPunct) {
      tokens.push({ kind: 'PUNCT', value: matchedPunct, line, col });
      i += matchedPunct.length;
      col += matchedPunct.length;
      continue;
    }

    // Single-char punctuation
    if ('{}()[];:,.+-*/%<>=!&|#@?'.includes(ch)) {
      tokens.push({ kind: 'PUNCT', value: ch, line, col });
      i++;
      col++;
      continue;
    }

    diagnostics.push({
      line,
      col,
      code: 'E0001',
      title: `見慣れない記号 '${ch}' が含まれています`,
      explanation: `${line}行目にある '${ch}' はRustのプログラムでは使えない文字です（全角スペースや全角記号が混ざっていませんか？）。`,
      tip: 'セミコロンやカッコ、スペースが半角になっているか確認してみよう！',
    });
    i++;
    col++;
  }

  tokens.push({ kind: 'EOF', value: '', line, col });
  return { tokens, diagnostics };
}

// ============================================================================
// 2. AST DEFINITIONS
// ============================================================================

type Pattern =
  | { kind: 'Wildcard'; line: number }
  | { kind: 'Ident'; name: string; mutable: boolean; line: number }
  | { kind: 'Literal'; value: number | boolean | string; line: number }
  | { kind: 'Range'; start: number; end: number; inclusive: boolean; line: number }
  | { kind: 'Tuple'; items: Pattern[]; line: number }
  | { kind: 'EnumVariant'; path: string[]; args: Pattern[]; line: number }
  | { kind: 'Struct'; name: string; fields: Array<{ key: string; pat?: Pattern }>; line: number }
  | { kind: 'BindingAt'; name: string; inner: Pattern; line: number }
  | { kind: 'Or'; left: Pattern; right: Pattern; line: number };

type Stmt =
  | { kind: 'Let'; pattern: Pattern; typeAnn?: string; init: Expr; line: number }
  | { kind: 'Expr'; expr: Expr; semi: boolean; line: number }
  | { kind: 'Return'; value?: Expr; line: number }
  | { kind: 'Break'; value?: Expr; line: number }
  | { kind: 'Continue'; line: number }
  | { kind: 'Item'; item: Item };

type Expr =
  | { kind: 'Number'; value: number; line: number }
  | { kind: 'Bool'; value: boolean; line: number }
  | { kind: 'String'; value: string; line: number }
  | { kind: 'Ident'; name: string; line: number }
  | { kind: 'Path'; parts: string[]; line: number }
  | { kind: 'Tuple'; items: Expr[]; line: number }
  | { kind: 'Array'; items: Expr[]; line: number }
  | { kind: 'StructLit'; name: string; fields: Array<{ key: string; value: Expr }>; line: number }
  | { kind: 'Block'; stmts: Stmt[]; unsafe?: boolean; line: number }
  | { kind: 'Unary'; op: '!' | '-' | '&' | '&mut' | '*'; expr: Expr; line: number }
  | { kind: 'Binary'; op: string; left: Expr; right: Expr; line: number }
  | { kind: 'Assign'; op: '=' | '+=' | '-=' | '*='; target: Expr; value: Expr; line: number }
  | { kind: 'Call'; callee: Expr; args: Expr[]; macro?: boolean; line: number }
  | { kind: 'MethodCall'; receiver: Expr; method: string; args: Expr[]; line: number }
  | { kind: 'Field'; receiver: Expr; field: string; line: number }
  | { kind: 'Index'; receiver: Expr; index: Expr; slice?: { start?: Expr; end?: Expr }; line: number }
  | { kind: 'Try'; expr: Expr; line: number }
  | { kind: 'Range'; start: Expr; end: Expr; inclusive: boolean; line: number }
  | { kind: 'If'; cond: Expr; thenBlock: Expr; elseBlock?: Expr; line: number }
  | { kind: 'IfLet'; pattern: Pattern; value: Expr; thenBlock: Expr; elseBlock?: Expr; line: number }
  | {
      kind: 'Match';
      scrutinee: Expr;
      arms: Array<{ pattern: Pattern; guard?: Expr; body: Expr; line: number }>;
      line: number;
    }
  | { kind: 'Loop'; body: Expr; line: number }
  | { kind: 'While'; cond: Expr; body: Expr; line: number }
  | { kind: 'For'; pattern: Pattern; iter: Expr; body: Expr; line: number }
  | { kind: 'Closure'; params: string[]; body: Expr; moveCapture: boolean; line: number };

type Item =
  | {
      kind: 'Fn';
      name: string;
      pub: boolean;
      isUnsafe: boolean;
      isTest: boolean;
      cfgFeature?: string;
      params: Array<{ name: string; mutable: boolean; typeAnn?: string }>;
      retType?: string;
      body: Expr;
      line: number;
    }
  | {
      kind: 'Struct';
      name: string;
      pub: boolean;
      fields: Array<{ name: string; pub: boolean; typeAnn: string }>;
      line: number;
    }
  | {
      kind: 'Enum';
      name: string;
      pub: boolean;
      variants: string[];
      line: number;
    }
  | {
      kind: 'Trait';
      name: string;
      pub: boolean;
      methods: Item[];
      line: number;
    }
  | {
      kind: 'Impl';
      target: string;
      traitName?: string;
      methods: Item[];
      line: number;
    }
  | {
      kind: 'Mod';
      name: string;
      pub: boolean;
      items: Item[];
      line: number;
    }
  | {
      kind: 'Use';
      path: string[];
      line: number;
    }
  | {
      kind: 'Const';
      name: string;
      typeAnn?: string;
      init: Expr;
      line: number;
    };

// ============================================================================
// 3. RECURSIVE-DESCENT PARSER
// ============================================================================

class Parser {
  private pos = 0;
  public diagnostics: CompilerDiagnostic[] = [];
  private tokens: Token[];

  constructor(tokens: Token[]) {
    this.tokens = tokens;
  }

  private peek(offset = 0): Token {
    return this.tokens[Math.min(this.pos + offset, this.tokens.length - 1)];
  }

  private advance(): Token {
    const t = this.peek();
    if (this.pos < this.tokens.length - 1) this.pos++;
    return t;
  }

  private check(kind: TokenKind, val?: string): boolean {
    const t = this.peek();
    if (t.kind !== kind) return false;
    if (val !== undefined && t.value !== val) return false;
    return true;
  }

  private matchPunct(val: string): boolean {
    if (this.check('PUNCT', val)) {
      this.advance();
      return true;
    }
    return false;
  }

  private matchIdent(val: string): boolean {
    if (this.check('IDENT', val)) {
      this.advance();
      return true;
    }
    return false;
  }

  private expectPunct(val: string, hint: string): boolean {
    if (this.matchPunct(val)) return true;
    const t = this.peek();
    this.diagnostics.push({
      line: t.line,
      col: t.col,
      code: 'E0061',
      title: `記号 '${val}' が見つかりません`,
      explanation: `${t.line}行目の '${t.value || '文末'}' 付近に '${val}' が必要です。`,
      tip: hint,
    });
    return false;
  }

  private addError(line: number, col: number, title: string, explanation: string, tip: string) {
    this.diagnostics.push({
      line,
      col,
      code: 'E0100',
      title,
      explanation,
      tip,
    });
  }

  public parseProgram(): Item[] {
    const items: Item[] = [];
    while (!this.check('EOF')) {
      if (this.diagnostics.length >= 4) break;
      const item = this.parseItem();
      if (item) items.push(item);
      else this.advance();
    }
    return items;
  }

  private parseAttributes(): { isTest: boolean; cfgFeature?: string } {
    let isTest = false;
    let cfgFeature: string | undefined;
    while (this.check('PUNCT', '#')) {
      this.advance();
      if (this.matchPunct('[')) {
        let content = '';
        let depth = 1;
        while (!this.check('EOF') && depth > 0) {
          const tok = this.advance();
          if (tok.value === '[') depth++;
          else if (tok.value === ']') {
            depth--;
            if (depth === 0) break;
          }
          content += tok.value;
        }
        if (content === 'test') isTest = true;
        const cfgMatch = content.match(/cfg\(feature=([^)]+)\)/);
        if (cfgMatch) cfgFeature = cfgMatch[1];
      }
    }
    return { isTest, cfgFeature };
  }

  private parseGenericParams(): void {
    if (!this.check('PUNCT', '<')) return;
    this.advance();
    let depth = 1;
    while (!this.check('EOF') && depth > 0) {
      const t = this.advance();
      if (t.value === '<') depth++;
      else if (t.value === '>') depth--;
    }
  }

  private parseTypeString(): string {
    let res = '';
    let angle = 0;
    let paren = 0;
    let bracket = 0;
    while (!this.check('EOF')) {
      const t = this.peek();
      if (
        angle === 0 &&
        paren === 0 &&
        bracket === 0 &&
        (t.value === '=' ||
          t.value === ';' ||
          t.value === ',' ||
          t.value === ')' ||
          t.value === '}' ||
          t.value === '{' ||
          t.value === 'where')
      ) {
        break;
      }
      this.advance();
      if (t.value === '<') angle++;
      else if (t.value === '>') angle = Math.max(0, angle - 1);
      else if (t.value === '(') paren++;
      else if (t.value === ')') paren = Math.max(0, paren - 1);
      else if (t.value === '[') bracket++;
      else if (t.value === ']') bracket = Math.max(0, bracket - 1);
      res += t.value === 'mut' ? 'mut ' : t.value;
    }
    return res.trim();
  }

  private skipWhereClause(): void {
    if (!this.matchIdent('where')) return;
    while (!this.check('EOF') && !this.check('PUNCT', '{') && !this.check('PUNCT', ';')) {
      this.advance();
    }
  }

  private parseItem(): Item | null {
    const attrs = this.parseAttributes();
    const isPub = this.matchIdent('pub');
    const isUnsafe = this.matchIdent('unsafe');

    if (this.check('IDENT', 'fn')) {
      return this.parseFn(isPub, isUnsafe, attrs);
    }
    if (this.check('IDENT', 'struct')) {
      return this.parseStruct(isPub);
    }
    if (this.check('IDENT', 'enum')) {
      return this.parseEnum(isPub);
    }
    if (this.check('IDENT', 'trait')) {
      return this.parseTrait(isPub);
    }
    if (this.check('IDENT', 'impl')) {
      return this.parseImpl();
    }
    if (this.check('IDENT', 'mod')) {
      return this.parseMod(isPub);
    }
    if (this.check('IDENT', 'use')) {
      return this.parseUse();
    }
    if (this.matchIdent('const')) {
      const cTok = this.tokens[this.pos - 1];
      const name = this.advance().value;
      let typeAnn: string | undefined;
      if (this.matchPunct(':')) {
        typeAnn = this.parseTypeString();
      }
      this.expectPunct('=', 'const 定数の宣言には = が必要です。');
      const init = this.parseExpr();
      this.expectPunct(';', 'const 定数の最後には ; が必要です。');
      return { kind: 'Const', name, typeAnn, init, line: cTok.line };
    }

    const t = this.peek();
    this.addError(
      t.line,
      t.col,
      `トップレベルに予期しない記述 '${t.value}' があります`,
      `関数 fn main() { ... } の外側に、直接命令が書かれている可能性があります。`,
      'ロボットを動かす命令は fn main() { ... } の中カッコ { } の内側に書こう！'
    );
    return null;
  }

  private parseFn(
    pub: boolean,
    isUnsafe: boolean,
    attrs: { isTest: boolean; cfgFeature?: string }
  ): Item {
    const fnTok = this.advance();
    const nameTok = this.advance();
    const name = nameTok.value;
    this.parseGenericParams();
    this.expectPunct('(', '関数名のうしろには ( ) を付けます。');

    const params: Array<{ name: string; mutable: boolean; typeAnn?: string }> = [];
    while (!this.check('EOF') && !this.check('PUNCT', ')')) {
      // Handle &self, &mut self, self
      if (this.matchPunct('&')) {
        if (this.peek().kind === 'LIFETIME') this.advance();
        const isMut = this.matchIdent('mut');
        if (this.matchIdent('self')) {
          params.push({ name: 'self', mutable: isMut, typeAnn: isMut ? '&mut Self' : '&Self' });
          if (!this.matchPunct(',')) break;
          continue;
        }
      }
      const isMut = this.matchIdent('mut');
      if (this.matchIdent('self')) {
        params.push({ name: 'self', mutable: isMut, typeAnn: 'Self' });
        if (!this.matchPunct(',')) break;
        continue;
      }
      const pName = this.advance().value;
      let typeAnn: string | undefined;
      if (this.matchPunct(':')) {
        typeAnn = this.parseTypeString();
      }
      params.push({ name: pName, mutable: isMut, typeAnn });
      if (!this.matchPunct(',')) break;
    }
    this.expectPunct(')', '関数の引数リストを ) で閉じよう。');

    let retType: string | undefined;
    if (this.matchPunct('->')) {
      retType = this.parseTypeString();
    }
    this.skipWhereClause();

    // Trait signature with semicolon
    if (this.matchPunct(';')) {
      return {
        kind: 'Fn',
        name,
        pub,
        isUnsafe,
        isTest: attrs.isTest,
        cfgFeature: attrs.cfgFeature,
        params,
        retType,
        body: { kind: 'Block', stmts: [], line: fnTok.line },
        line: fnTok.line,
      };
    }

    const body = this.parseBlock();
    return {
      kind: 'Fn',
      name,
      pub,
      isUnsafe,
      isTest: attrs.isTest,
      cfgFeature: attrs.cfgFeature,
      params,
      retType,
      body,
      line: fnTok.line,
    };
  }

  private parseStruct(pub: boolean): Item {
    const sTok = this.advance();
    const name = this.advance().value;
    this.parseGenericParams();
    const fields: Array<{ name: string; pub: boolean; typeAnn: string }> = [];
    if (this.matchPunct(';')) {
      return { kind: 'Struct', name, pub, fields, line: sTok.line };
    }
    if (this.matchPunct('(')) {
      let idx = 0;
      while (!this.check('EOF') && !this.check('PUNCT', ')')) {
        const fPub = this.matchIdent('pub');
        const t = this.parseTypeString();
        fields.push({ name: String(idx++), pub: fPub, typeAnn: t });
        if (!this.matchPunct(',')) break;
      }
      this.expectPunct(')', 'タプル構造体を ) で閉じよう。');
      this.expectPunct(';', 'タプル構造体の最後に ; を付けよう。');
      return { kind: 'Struct', name, pub, fields, line: sTok.line };
    }
    this.expectPunct('{', '構造体のフィールドは { } で囲みます。');
    while (!this.check('EOF') && !this.check('PUNCT', '}')) {
      const fPub = this.matchIdent('pub');
      const fName = this.advance().value;
      this.expectPunct(':', 'フィールド名と型のあいだに : が必要です。');
      const typeAnn = this.parseTypeString();
      fields.push({ name: fName, pub: fPub, typeAnn });
      if (!this.matchPunct(',')) break;
    }
    this.expectPunct('}', '構造体の定義を } で閉じよう。');
    return { kind: 'Struct', name, pub, fields, line: sTok.line };
  }

  private parseEnum(pub: boolean): Item {
    const eTok = this.advance();
    const name = this.advance().value;
    this.parseGenericParams();
    this.expectPunct('{', 'enumの定義は { } で囲みます。');
    const variants: string[] = [];
    while (!this.check('EOF') && !this.check('PUNCT', '}')) {
      const vName = this.advance().value;
      variants.push(vName);
      if (this.matchPunct('(')) {
        let d = 1;
        while (!this.check('EOF') && d > 0) {
          const tok = this.advance();
          if (tok.value === '(') d++;
          else if (tok.value === ')') d--;
        }
      } else if (this.matchPunct('{')) {
        let d = 1;
        while (!this.check('EOF') && d > 0) {
          const tok = this.advance();
          if (tok.value === '{') d++;
          else if (tok.value === '}') d--;
        }
      }
      if (!this.matchPunct(',')) break;
    }
    this.expectPunct('}', 'enumの定義を } で閉じよう。');
    return { kind: 'Enum', name, pub, variants, line: eTok.line };
  }

  private parseTrait(pub: boolean): Item {
    const tTok = this.advance();
    const name = this.advance().value;
    this.parseGenericParams();
    this.expectPunct('{', 'traitの定義は { } で囲みます。');
    const methods: Item[] = [];
    while (!this.check('EOF') && !this.check('PUNCT', '}')) {
      if (this.matchIdent('type')) {
        while (!this.check('EOF') && !this.matchPunct(';')) this.advance();
        continue;
      }
      const attrs = this.parseAttributes();
      const fnPub = this.matchIdent('pub');
      const fnUnsafe = this.matchIdent('unsafe');
      if (this.check('IDENT', 'fn')) {
        methods.push(this.parseFn(fnPub, fnUnsafe, attrs));
      } else {
        this.advance();
      }
    }
    this.expectPunct('}', 'trait定義を } で閉じよう。');
    return { kind: 'Trait', name, pub, methods, line: tTok.line };
  }

  private parseImpl(): Item {
    const iTok = this.advance();
    this.parseGenericParams();
    const first = this.advance().value;
    this.parseGenericParams();
    let target = first;
    let traitName: string | undefined;
    if (this.matchIdent('for')) {
      traitName = first;
      target = this.advance().value;
      this.parseGenericParams();
    }
    this.expectPunct('{', 'implブロックは { } で囲みます。');
    const methods: Item[] = [];
    while (!this.check('EOF') && !this.check('PUNCT', '}')) {
      if (this.matchIdent('type')) {
        while (!this.check('EOF') && !this.matchPunct(';')) this.advance();
        continue;
      }
      const attrs = this.parseAttributes();
      const fnPub = this.matchIdent('pub');
      const fnUnsafe = this.matchIdent('unsafe');
      if (this.check('IDENT', 'fn')) {
        methods.push(this.parseFn(fnPub, fnUnsafe, attrs));
      } else {
        this.advance();
      }
    }
    this.expectPunct('}', 'implブロックを } で閉じよう。');
    return { kind: 'Impl', target, traitName, methods, line: iTok.line };
  }

  private parseMod(pub: boolean): Item {
    const mTok = this.advance();
    const name = this.advance().value;
    this.expectPunct('{', 'modブロックは { } で囲みます。');
    const items: Item[] = [];
    while (!this.check('EOF') && !this.check('PUNCT', '}')) {
      const it = this.parseItem();
      if (it) items.push(it);
      else this.advance();
    }
    this.expectPunct('}', 'modブロックを } で閉じよう。');
    return { kind: 'Mod', name, pub, items, line: mTok.line };
  }

  private parseUse(): Item {
    const uTok = this.advance();
    const path: string[] = [];
    while (!this.check('EOF') && !this.matchPunct(';')) {
      const tok = this.advance();
      if (tok.value === '{') {
        const sub: string[] = [];
        while (!this.check('EOF') && !this.check('PUNCT', '}')) {
          const s = this.advance();
          if (s.value !== ',') sub.push(s.value);
        }
        this.matchPunct('}');
        path.push(`{${sub.join(',')}}`);
      } else if (tok.value !== '::') {
        path.push(tok.value);
      }
    }
    return { kind: 'Use', path, line: uTok.line };
  }

  private parseBlock(isUnsafe = false): Expr {
    const open = this.peek();
    this.expectPunct('{', 'ブロックは { で始めます。');
    const stmts: Stmt[] = [];
    while (!this.check('EOF') && !this.check('PUNCT', '}')) {
      if (this.diagnostics.length >= 4) break;
      const stmt = this.parseStmt();
      if (stmt) stmts.push(stmt);
      else this.advance();
    }
    this.expectPunct('}', 'ブロックの閉じカッコ } が足りません。');
    return { kind: 'Block', stmts, unsafe: isUnsafe, line: open.line };
  }

  private parseStmt(): Stmt | null {
    const t = this.peek();
    if (
      t.kind === 'PUNCT' &&
      t.value === '#'
    ) {
      const it = this.parseItem();
      return it ? { kind: 'Item', item: it } : null;
    }
    if (
      t.kind === 'IDENT' &&
      ['fn', 'struct', 'enum', 'trait', 'impl', 'mod', 'use', 'pub', 'const'].includes(t.value)
    ) {
      const it = this.parseItem();
      return it ? { kind: 'Item', item: it } : null;
    }
    if (this.matchIdent('let')) {
      const pattern = this.parsePattern();
      let typeAnn: string | undefined;
      if (this.matchPunct(':')) {
        typeAnn = this.parseTypeString();
      }
      this.expectPunct('=', 'let で変数を宣言するときは = で値をつなぎます。');
      const init = this.parseExpr();
      this.expectPunct(';', '文の最後にはセミコロン ; が必要です。');
      return { kind: 'Let', pattern, typeAnn, init, line: t.line };
    }
    if (this.matchIdent('return')) {
      let value: Expr | undefined;
      if (!this.check('PUNCT', ';')) value = this.parseExpr();
      this.matchPunct(';');
      return { kind: 'Return', value, line: t.line };
    }
    if (this.matchIdent('break')) {
      let value: Expr | undefined;
      if (!this.check('PUNCT', ';') && !this.check('PUNCT', '}')) value = this.parseExpr();
      this.matchPunct(';');
      return { kind: 'Break', value, line: t.line };
    }
    if (this.matchIdent('continue')) {
      this.matchPunct(';');
      return { kind: 'Continue', line: t.line };
    }

    const expr = this.parseExpr();
    const isBlockLike =
      expr.kind === 'If' ||
      expr.kind === 'IfLet' ||
      expr.kind === 'Match' ||
      expr.kind === 'Loop' ||
      expr.kind === 'While' ||
      expr.kind === 'For' ||
      expr.kind === 'Block';

    const semi = this.matchPunct(';');
    if (!semi && !isBlockLike && !this.check('PUNCT', '}')) {
      const nextTok = this.peek();
      this.addError(
        expr.line,
        nextTok.col,
        'セミコロン ; を忘れていませんか？',
        `${expr.line}行目の文の終わりにセミコロン ; が見つかりませんでした。`,
        '命令の行末には ; を付けよう（ブロックの最後の戻り値式だけは ; なしでOK）！'
      );
    }
    return { kind: 'Expr', expr, semi, line: t.line };
  }

  private parsePattern(): Pattern {
    let pat = this.parseSinglePattern();
    while (this.matchPunct('|')) {
      const right = this.parseSinglePattern();
      pat = { kind: 'Or', left: pat, right, line: pat.line };
    }
    return pat;
  }

  private parseSinglePattern(): Pattern {
    const t = this.peek();
    if (this.matchIdent('_')) {
      return { kind: 'Wildcard', line: t.line };
    }
    if (this.matchPunct('(')) {
      const items: Pattern[] = [];
      while (!this.check('EOF') && !this.check('PUNCT', ')')) {
        items.push(this.parsePattern());
        if (!this.matchPunct(',')) break;
      }
      this.expectPunct(')', 'タプルパターンを ) で閉じよう。');
      return { kind: 'Tuple', items, line: t.line };
    }
    if (t.kind === 'NUMBER') {
      const n = Number(this.advance().value);
      if (this.matchPunct('..=') || this.matchPunct('..')) {
        const inclusive = this.tokens[this.pos - 1].value === '..=';
        const endTok = this.advance();
        return { kind: 'Range', start: n, end: Number(endTok.value), inclusive, line: t.line };
      }
      return { kind: 'Literal', value: n, line: t.line };
    }
    if (t.kind === 'STRING') {
      return { kind: 'Literal', value: this.advance().value, line: t.line };
    }
    if (t.kind === 'IDENT' && (t.value === 'true' || t.value === 'false')) {
      return { kind: 'Literal', value: this.advance().value === 'true', line: t.line };
    }

    const mutable = this.matchIdent('mut');
    const id = this.advance();
    const parts = [id.value];
    while (this.matchPunct('::')) {
      parts.push(this.advance().value);
    }

    // Binding @ pattern, e.g. x @ 1..=5
    if (parts.length === 1 && this.matchPunct('@')) {
      const inner = this.parseSinglePattern();
      return { kind: 'BindingAt', name: parts[0], inner, line: t.line };
    }

    // Enum variant pattern: Some(x), Ok(v), Signal::Move(n)
    if (this.matchPunct('(')) {
      const args: Pattern[] = [];
      while (!this.check('EOF') && !this.check('PUNCT', ')')) {
        args.push(this.parsePattern());
        if (!this.matchPunct(',')) break;
      }
      this.expectPunct(')', 'パターンを ) で閉じよう。');
      return { kind: 'EnumVariant', path: parts, args, line: t.line };
    }

    // Struct pattern: Point { x, y }
    if (this.check('PUNCT', '{')) {
      this.advance();
      const fields: Array<{ key: string; pat?: Pattern }> = [];
      while (!this.check('EOF') && !this.check('PUNCT', '}')) {
        if (this.matchPunct('..')) break;
        const key = this.advance().value;
        let fPat: Pattern | undefined;
        if (this.matchPunct(':')) fPat = this.parsePattern();
        fields.push({ key, pat: fPat });
        if (!this.matchPunct(',')) break;
      }
      this.expectPunct('}', '構造体パターンを } で閉じよう。');
      return { kind: 'Struct', name: parts.join('::'), fields, line: t.line };
    }

    // Enum unit variant if path has :: or starts with uppercase (Some, None, Ok, Err, Less...)
    if (
      parts.length > 1 ||
      (!mutable && /^[A-Z]/.test(parts[0]))
    ) {
      return { kind: 'EnumVariant', path: parts, args: [], line: t.line };
    }

    return { kind: 'Ident', name: parts[0], mutable, line: t.line };
  }

  private parseExpr(): Expr {
    return this.parseAssign();
  }

  private parseAssign(): Expr {
    const left = this.parseRange();
    if (
      this.check('PUNCT', '=') ||
      this.check('PUNCT', '+=') ||
      this.check('PUNCT', '-=') ||
      this.check('PUNCT', '*=')
    ) {
      const op = this.advance().value as '=' | '+=' | '-=' | '*=';
      const value = this.parseAssign();
      return { kind: 'Assign', op, target: left, value, line: left.line };
    }
    return left;
  }

  private parseRange(): Expr {
    const left = this.parseOr();
    if (this.check('PUNCT', '..=') || this.check('PUNCT', '..')) {
      const op = this.advance().value;
      const right = this.parseOr();
      return { kind: 'Range', start: left, end: right, inclusive: op === '..=', line: left.line };
    }
    return left;
  }

  private parseOr(): Expr {
    let left = this.parseAnd();
    while (this.matchPunct('||')) {
      const right = this.parseAnd();
      left = { kind: 'Binary', op: '||', left, right, line: left.line };
    }
    return left;
  }

  private parseAnd(): Expr {
    let left = this.parseEq();
    while (this.matchPunct('&&')) {
      const right = this.parseEq();
      left = { kind: 'Binary', op: '&&', left, right, line: left.line };
    }
    return left;
  }

  private parseEq(): Expr {
    let left = this.parseCmp();
    while (this.check('PUNCT', '==') || this.check('PUNCT', '!=')) {
      const op = this.advance().value;
      const right = this.parseCmp();
      left = { kind: 'Binary', op, left, right, line: left.line };
    }
    return left;
  }

  private parseCmp(): Expr {
    let left = this.parseAdd();
    while (
      this.check('PUNCT', '<') ||
      this.check('PUNCT', '>') ||
      this.check('PUNCT', '<=') ||
      this.check('PUNCT', '>=')
    ) {
      const op = this.advance().value;
      const right = this.parseAdd();
      left = { kind: 'Binary', op, left, right, line: left.line };
    }
    return left;
  }

  private parseAdd(): Expr {
    let left = this.parseMul();
    while (this.check('PUNCT', '+') || this.check('PUNCT', '-')) {
      const op = this.advance().value;
      const right = this.parseMul();
      left = { kind: 'Binary', op, left, right, line: left.line };
    }
    return left;
  }

  private parseMul(): Expr {
    let left = this.parseCast();
    while (
      this.check('PUNCT', '*') ||
      this.check('PUNCT', '/') ||
      this.check('PUNCT', '%')
    ) {
      const op = this.advance().value;
      const right = this.parseCast();
      left = { kind: 'Binary', op, left, right, line: left.line };
    }
    return left;
  }

  private parseCast(): Expr {
    const expr = this.parseUnary();
    if (this.matchIdent('as')) {
      this.parseTypeString();
    }
    return expr;
  }

  private parseUnary(): Expr {
    const t = this.peek();
    if (this.matchPunct('&')) {
      const isMut = this.matchIdent('mut');
      const inner = this.parseUnary();
      return { kind: 'Unary', op: isMut ? '&mut' : '&', expr: inner, line: t.line };
    }
    if (this.matchPunct('*')) {
      return { kind: 'Unary', op: '*', expr: this.parseUnary(), line: t.line };
    }
    if (this.matchPunct('!')) {
      return { kind: 'Unary', op: '!', expr: this.parseUnary(), line: t.line };
    }
    if (this.matchPunct('-')) {
      return { kind: 'Unary', op: '-', expr: this.parseUnary(), line: t.line };
    }
    return this.parsePostfix();
  }

  private parsePostfix(): Expr {
    let expr = this.parsePrimary();
    while (!this.check('EOF')) {
      if (this.matchPunct('?')) {
        expr = { kind: 'Try', expr, line: expr.line };
        continue;
      }
      if (this.matchPunct('(')) {
        const args: Expr[] = [];
        while (!this.check('EOF') && !this.check('PUNCT', ')')) {
          args.push(this.parseExpr());
          if (!this.matchPunct(',')) break;
        }
        this.expectPunct(')', '関数呼び出しの ( を ) で閉じよう。');
        expr = { kind: 'Call', callee: expr, args, line: expr.line };
        continue;
      }
      if (this.matchPunct('.')) {
        const member = this.advance().value;
        // Turbofish ::<T>
        if (this.check('PUNCT', '::') && this.peek(1).value === '<') {
          this.advance();
          this.parseGenericParams();
        }
        if (this.matchPunct('(')) {
          const args: Expr[] = [];
          while (!this.check('EOF') && !this.check('PUNCT', ')')) {
            args.push(this.parseExpr());
            if (!this.matchPunct(',')) break;
          }
          this.expectPunct(')', 'メソッド呼び出しを ) で閉じよう。');
          expr = { kind: 'MethodCall', receiver: expr, method: member, args, line: expr.line };
        } else {
          expr = { kind: 'Field', receiver: expr, field: member, line: expr.line };
        }
        continue;
      }
      if (this.matchPunct('[')) {
        let start: Expr | undefined;
        let end: Expr | undefined;
        let isSlice = false;
        if (!this.check('PUNCT', '..')) {
          start = this.parseExpr();
        }
        if (start?.kind === 'Range') {
          isSlice = true;
          end = start.end;
          start = start.start;
        } else if (this.matchPunct('..')) {
          isSlice = true;
          if (!this.check('PUNCT', ']')) {
            end = this.parseExpr();
          }
        }
        this.expectPunct(']', '添字やスライスを ] で閉じよう。');
        if (isSlice) {
          expr = {
            kind: 'Index',
            receiver: expr,
            index: start ?? { kind: 'Number', value: 0, line: expr.line },
            slice: { start, end },
            line: expr.line,
          };
        } else {
          expr = {
            kind: 'Index',
            receiver: expr,
            index: start ?? { kind: 'Number', value: 0, line: expr.line },
            line: expr.line,
          };
        }
        continue;
      }
      break;
    }
    return expr;
  }

  private parsePrimary(): Expr {
    const t = this.peek();

    if (t.kind === 'NUMBER') {
      this.advance();
      return { kind: 'Number', value: Number(t.value), line: t.line };
    }
    if (t.kind === 'STRING') {
      this.advance();
      return { kind: 'String', value: t.value, line: t.line };
    }
    if (this.matchIdent('true')) {
      return { kind: 'Bool', value: true, line: t.line };
    }
    if (this.matchIdent('false')) {
      return { kind: 'Bool', value: false, line: t.line };
    }
    if (this.matchIdent('unsafe')) {
      return this.parseBlock(true);
    }
    if (this.check('PUNCT', '{')) {
      return this.parseBlock(false);
    }
    if (this.matchIdent('if')) {
      return this.parseIf(t.line);
    }
    if (this.matchIdent('match')) {
      return this.parseMatch(t.line);
    }
    if (this.matchIdent('loop')) {
      const body = this.parseBlock();
      return { kind: 'Loop', body, line: t.line };
    }
    if (this.matchIdent('while')) {
      const cond = this.parseExpr();
      const body = this.parseBlock();
      return { kind: 'While', cond, body, line: t.line };
    }
    if (this.matchIdent('for')) {
      const pattern = this.parsePattern();
      if (!this.matchIdent('in')) {
        this.addError(t.line, t.col, 'for文には in が必要です', 'for x in 0..3 { ... } の形で書きます。', 'for i in 0..3 のように in を入れよう！');
      }
      const iter = this.parseExpr();
      const body = this.parseBlock();
      return { kind: 'For', pattern, iter, body, line: t.line };
    }

    // Closures: move || { ... } or |x| expr
    if (this.check('IDENT', 'move') && (this.peek(1).value === '|' || this.peek(1).value === '||')) {
      this.advance();
      return this.parseClosure(true, t.line);
    }
    if (this.check('PUNCT', '|') || this.check('PUNCT', '||')) {
      return this.parseClosure(false, t.line);
    }

    // Tuple or parenthesized expr
    if (this.matchPunct('(')) {
      if (this.matchPunct(')')) {
        return { kind: 'Tuple', items: [], line: t.line };
      }
      const first = this.parseExpr();
      if (this.matchPunct(',')) {
        const items = [first];
        while (!this.check('EOF') && !this.check('PUNCT', ')')) {
          items.push(this.parseExpr());
          if (!this.matchPunct(',')) break;
        }
        this.expectPunct(')', 'タプルを ) で閉じよう。');
        return { kind: 'Tuple', items, line: t.line };
      }
      this.expectPunct(')', 'カッコを ) で閉じよう。');
      return first;
    }

    // Array literal [a, b, c]
    if (this.matchPunct('[')) {
      const items: Expr[] = [];
      while (!this.check('EOF') && !this.check('PUNCT', ']')) {
        items.push(this.parseExpr());
        if (!this.matchPunct(',')) break;
      }
      this.expectPunct(']', '配列を ] で閉じよう。');
      return { kind: 'Array', items, line: t.line };
    }

    // Identifier, Path (a::b::c), Macro call (println!(...)), or Struct literal
    if (t.kind === 'IDENT') {
      const first = this.advance().value;
      const parts = [first];
      while (this.matchPunct('::')) {
        if (this.check('PUNCT', '<')) {
          this.parseGenericParams();
          break;
        }
        parts.push(this.advance().value);
      }

      // Macro invocation: name!(...) or name![...]
      if (this.matchPunct('!')) {
        const isBracket = this.matchPunct('[');
        if (!isBracket) this.expectPunct('(', 'マクロ呼び出しは ( ) か [ ] で引数を渡します。');
        const args: Expr[] = [];
        const closeTok = isBracket ? ']' : ')';
        while (!this.check('EOF') && !this.check('PUNCT', closeTok)) {
          args.push(this.parseExpr());
          if (!this.matchPunct(',')) break;
        }
        this.expectPunct(closeTok, `マクロを ${closeTok} で閉じよう。`);
        return {
          kind: 'Call',
          callee: { kind: 'Ident', name: parts.join('::'), line: t.line },
          args,
          macro: true,
          line: t.line,
        };
      }

      // Struct literal: Name { field: val } or Name { field } (avoid confusion with if/for/while blocks)
      if (
        parts.length === 1 &&
        /^[A-Z]/.test(parts[0]) &&
        this.check('PUNCT', '{') &&
        (this.peek(2).value === ':' ||
          this.peek(1).value === '}' ||
          (this.peek(1).kind === 'IDENT' &&
            (this.peek(2).value === '}' || this.peek(2).value === ',')))
      ) {
        this.advance();
        const fields: Array<{ key: string; value: Expr }> = [];
        while (!this.check('EOF') && !this.check('PUNCT', '}')) {
          const key = this.advance().value;
          let value: Expr = { kind: 'Ident', name: key, line: t.line };
          if (this.matchPunct(':')) value = this.parseExpr();
          fields.push({ key, value });
          if (!this.matchPunct(',')) break;
        }
        this.expectPunct('}', '構造体の初期化を } で閉じよう。');
        return { kind: 'StructLit', name: parts[0], fields, line: t.line };
      }

      if (parts.length > 1) {
        return { kind: 'Path', parts, line: t.line };
      }
      return { kind: 'Ident', name: parts[0], line: t.line };
    }

    this.advance();
    this.addError(
      t.line,
      t.col,
      `式の位置に予期しない記号 '${t.value}' があります`,
      `${t.line}行目の '${t.value}' を式として解釈できませんでした。`,
      'カッコやセミコロンの対応が崩れていないか確認しよう！'
    );
    return { kind: 'Number', value: 0, line: t.line };
  }

  private parseClosure(moveCapture: boolean, line: number): Expr {
    const params: string[] = [];
    if (this.matchPunct('||')) {
      // zero params
    } else if (this.matchPunct('|')) {
      while (!this.check('EOF') && !this.check('PUNCT', '|')) {
        const p = this.advance();
        if (p.value === 'mut') continue;
        params.push(p.value);
        if (this.matchPunct(':')) this.parseTypeString();
        if (!this.matchPunct(',')) break;
      }
      this.expectPunct('|', 'クロージャーの引数は |x| のように縦棒で囲みます。');
    }
    const body = this.check('PUNCT', '{') ? this.parseBlock() : this.parseExpr();
    return { kind: 'Closure', params, body, moveCapture, line };
  }

  private parseIf(line: number): Expr {
    if (this.matchIdent('let')) {
      const pattern = this.parsePattern();
      this.expectPunct('=', 'if let の後には = で比較対象をつなぎます。');
      const value = this.parseExpr();
      const thenBlock = this.parseBlock();
      let elseBlock: Expr | undefined;
      if (this.matchIdent('else')) {
        elseBlock = this.matchIdent('if') ? this.parseIf(this.peek().line) : this.parseBlock();
      }
      return { kind: 'IfLet', pattern, value, thenBlock, elseBlock, line };
    }
    const cond = this.parseExpr();
    const thenBlock = this.parseBlock();
    let elseBlock: Expr | undefined;
    if (this.matchIdent('else')) {
      elseBlock = this.matchIdent('if') ? this.parseIf(this.peek().line) : this.parseBlock();
    }
    return { kind: 'If', cond, thenBlock, elseBlock, line };
  }

  private parseMatch(line: number): Expr {
    const scrutinee = this.parseExpr();
    this.expectPunct('{', 'match の本体は { } で囲みます。');
    const arms: Array<{ pattern: Pattern; guard?: Expr; body: Expr; line: number }> = [];
    while (!this.check('EOF') && !this.check('PUNCT', '}')) {
      const armLine = this.peek().line;
      const pattern = this.parsePattern();
      let guard: Expr | undefined;
      if (this.matchIdent('if')) {
        guard = this.parseExpr();
      }
      this.expectPunct('=>', 'matchのパターンと処理のあいだには => が必要です。');
      const body = this.check('PUNCT', '{') ? this.parseBlock() : this.parseExpr();
      arms.push({ pattern, guard, body, line: armLine });
      this.matchPunct(',');
    }
    this.expectPunct('}', 'match式を } で閉じよう。');
    return { kind: 'Match', scrutinee, arms, line };
  }
}

// ============================================================================
// 4. RUNTIME VALUE TYPES & STATIC/DYNAMIC INTERPRETER
// ============================================================================

type RustVal =
  | { kind: 'unit' }
  | { kind: 'int'; val: number }
  | { kind: 'bool'; val: boolean }
  | { kind: 'str'; val: string }
  | { kind: 'tuple'; items: RustVal[] }
  | { kind: 'vec'; items: RustVal[] }
  | { kind: 'slice'; items: RustVal[] }
  | { kind: 'struct'; typeName: string; fields: Map<string, RustVal> }
  | { kind: 'enum'; enumName: string; variant: string; payload?: RustVal[] }
  | { kind: 'core'; id: string; power: number; label: string }
  | { kind: 'box'; inner: RustVal }
  | { kind: 'rc'; id: string; inner: RustVal; countRef: { count: number } }
  | { kind: 'refcell'; inner: RustVal; mutBorrowed: boolean; immCount: number }
  | { kind: 'mutex'; id: string; inner: RustVal }
  | { kind: 'arc'; id: string; inner: RustVal; countRef: { count: number } }
  | { kind: 'sender'; channelId: string }
  | { kind: 'receiver'; channelId: string }
  | { kind: 'threadpool'; size: number }
  | { kind: 'ptr'; targetVar: string; value: number }
  | { kind: 'closure'; params: string[]; body: Expr; capturedEnv: Map<string, VarSlot> }
  | { kind: 'ref'; targetName: string; mutable: boolean; slot: VarSlot; refCellOwner?: RustVal & { kind: 'refcell' } }
  | { kind: 'mutexGuard'; mutexId: string; inner: RustVal };

interface VarSlot {
  name: string;
  mutable: boolean;
  typeName: string;
  val: RustVal;
  moved: boolean;
  immBorrowCount: number;
  mutBorrowed: boolean;
}

class ControlSignal {
  constructor(
    public kind: 'return' | 'break' | 'continue' | 'try_err' | 'panic',
    public value?: RustVal,
    public message?: string,
    public line = 1
  ) {}
}

function isCopyType(val: RustVal): boolean {
  return (
    val.kind === 'unit' ||
    val.kind === 'int' ||
    val.kind === 'bool' ||
    val.kind === 'ptr' ||
    val.kind === 'ref' ||
    (val.kind === 'enum' && val.enumName === 'Ordering')
  );
}

function formatRustVal(val: RustVal): string {
  switch (val.kind) {
    case 'unit':
      return '()';
    case 'int':
      return String(val.val);
    case 'bool':
      return String(val.val);
    case 'str':
      return val.val;
    case 'tuple':
      return `(${val.items.map(formatRustVal).join(', ')})`;
    case 'vec':
      return `[${val.items.map(formatRustVal).join(', ')}]`;
    case 'slice':
      return `&[${val.items.map(formatRustVal).join(', ')}]`;
    case 'core':
      return `Core(${val.label}: ⚡${val.power})`;
    case 'struct': {
      const entries = Array.from(val.fields.entries())
        .map(([k, v]) => `${k}: ${formatRustVal(v)}`)
        .join(', ');
      return `${val.typeName} { ${entries} }`;
    }
    case 'enum':
      if (!val.payload || val.payload.length === 0) return `${val.enumName}::${val.variant}`;
      return `${val.enumName}::${val.variant}(${val.payload.map(formatRustVal).join(', ')})`;
    case 'box':
      return `Box(${formatRustVal(val.inner)})`;
    case 'rc':
      return `Rc(${formatRustVal(val.inner)}, count=${val.countRef.count})`;
    case 'refcell':
      return `RefCell(${formatRustVal(val.inner)})`;
    case 'arc':
      return `Arc(${formatRustVal(val.inner)}, count=${val.countRef.count})`;
    case 'mutex':
      return `Mutex(${formatRustVal(val.inner)})`;
    case 'mutexGuard':
      return `Guard(${formatRustVal(val.inner)})`;
    case 'sender':
      return 'Sender';
    case 'receiver':
      return 'Receiver';
    case 'threadpool':
      return `ThreadPool(${val.size})`;
    case 'ptr':
      return `*mut(${val.value})`;
    case 'ref':
      return `${val.mutable ? '&mut ' : '&'}${formatRustVal(val.slot.val)}`;
    case 'closure':
      return '|...| { ... }';
  }
}

function inferTypeName(val: RustVal): string {
  switch (val.kind) {
    case 'int':
      return 'i32';
    case 'bool':
      return 'bool';
    case 'str':
      return 'String';
    case 'unit':
      return '()';
    case 'core':
      return 'EnergyCore';
    case 'vec':
      return 'Vec<_>';
    case 'slice':
      return '&[_]';
    case 'struct':
      return val.typeName;
    case 'enum':
      return val.enumName;
    case 'box':
      return 'Box<T>';
    case 'rc':
      return 'Rc<T>';
    case 'refcell':
      return 'RefCell<T>';
    case 'arc':
      return 'Arc<T>';
    case 'mutex':
      return 'Mutex<T>';
    case 'sender':
      return 'Sender<T>';
    case 'receiver':
      return 'Receiver<T>';
    case 'threadpool':
      return 'ThreadPool';
    case 'ref':
      return val.mutable ? `&mut ${inferTypeName(val.slot.val)}` : `&${inferTypeName(val.slot.val)}`;
    default:
      return val.kind;
  }
}

// ============================================================================
// 5. DETERMINISTIC LOCKSTEP VM & STATIC CHECKER
// ============================================================================

interface FiberState {
  id: string;
  label: string;
  x: number;
  y: number;
  dir: Direction;
  holdingCoreId: string | null;
  holdingPower: number;
  status: 'RUNNING' | 'WAITING_RECV' | 'WAITING_LOCK' | 'DONE' | 'PANICKED';
  activeLine: number | null;
  lastAction: string;
  generator: Generator<string, RustVal, void>;
  waitingChannelId?: string;
  waitingMutexId?: string;
}

export function compileAndSimulate(
  stage: StageDefinition,
  rawCode: string
): CompileAndSimulateResult {
  const codeLines = rawCode.split('\n').length;
  const { code, diagnostics: preDiags } = preprocessMacros(rawCode);
  if (preDiags.length > 0) {
    return {
      ok: false,
      diagnostics: preDiags,
      snapshots: [],
      cleared: false,
      totalTicks: 0,
      codeLines,
    };
  }

  const { tokens, diagnostics: lexDiags } = tokenize(code);
  if (lexDiags.length > 0) {
    return {
      ok: false,
      diagnostics: lexDiags,
      snapshots: [],
      cleared: false,
      totalTicks: 0,
      codeLines,
    };
  }

  const parser = new Parser(tokens);
  const items = parser.parseProgram();
  if (parser.diagnostics.length > 0) {
    return {
      ok: false,
      diagnostics: parser.diagnostics,
      snapshots: [],
      cleared: false,
      totalTicks: 0,
      codeLines,
    };
  }

  // Index modules, structs, enums, traits, impls, functions, uses
  const functions = new Map<string, Item & { kind: 'Fn' }>();
  const modFunctions = new Map<string, { item: Item & { kind: 'Fn' }; modName: string }>();
  const structs = new Map<string, Item & { kind: 'Struct' }>();
  const enums = new Map<string, Item & { kind: 'Enum' }>();
  const implMethods = new Map<string, Map<string, Item & { kind: 'Fn' }>>();
  const importedNames = new Map<string, string>();
  const constItems = new Map<string, Item & { kind: 'Const' }>();
  const testFns: Array<Item & { kind: 'Fn' }> = [];
  let activeFastFeature = false;

  const registerItems = (itemList: Item[], currentMod?: string) => {
    for (const it of itemList) {
      if (it.kind === 'Fn') {
        if (it.cfgFeature === 'fast') {
          activeFastFeature = true;
        }
        if (it.isTest) {
          testFns.push(it);
        } else if (currentMod) {
          modFunctions.set(`${currentMod}::${it.name}`, { item: it, modName: currentMod });
        } else {
          functions.set(it.name, it);
        }
      } else if (it.kind === 'Const') {
        constItems.set(it.name, it);
      } else if (it.kind === 'Struct') {
        structs.set(it.name, it);
      } else if (it.kind === 'Enum') {
        enums.set(it.name, it);
      } else if (it.kind === 'Impl') {
        if (!implMethods.has(it.target)) implMethods.set(it.target, new Map());
        for (const m of it.methods) {
          if (m.kind === 'Fn') {
            implMethods.get(it.target)!.set(m.name, m);
          }
        }
      } else if (it.kind === 'Mod') {
        const nextMod = currentMod ? `${currentMod}::${it.name}` : it.name;
        registerItems(it.items, nextMod);
      } else if (it.kind === 'Use') {
        const joined = it.path.join('::');
        const last = it.path[it.path.length - 1];
        if (last?.startsWith('{')) {
          const prefix = it.path.slice(0, -1).join('::');
          const inner = last.slice(1, -1).split(',');
          for (const sym of inner) {
            importedNames.set(sym.trim(), `${prefix}::${sym.trim()}`);
          }
        } else if (last) {
          importedNames.set(last, joined);
        }
      }
    }
  };

  registerItems(items);

  const mainFn = functions.get('main');
  if (!mainFn) {
    return {
      ok: false,
      diagnostics: [
        {
          line: 1,
          col: 1,
          code: 'E0601',
          title: 'fn main() が見つかりません',
          explanation: 'Rustのプログラムは fn main() { ... } からスタートします。',
          tip: 'fn main() { step(); } のように main 関数を用意しよう！',
        },
      ],
      snapshots: [],
      cleared: false,
      totalTicks: 0,
      codeLines,
    };
  }

  // World Simulation State (always starts deterministically at Tick 0)
  const setup = stage.worldSetup;
  let tick = 0;
  const wallSet = new Set(setup.walls.map((w) => `${w.x},${w.y}`));
  const cores = (setup.cores ?? []).map((c) => ({
    id: c.id,
    x: c.x,
    y: c.y,
    power: c.power,
    label: c.label ?? 'コア',
    heldBy: null as string | null,
    delivered: false,
  }));
  const scanners = (setup.scanners ?? []).map((s) => ({ ...s, scanned: 0 }));
  const chargers = setup.chargers ?? [];
  const deliveries = setup.deliveries ?? [];
  const switches = setup.switches ?? [];
  const activeSwitchSet = new Set<string>();
  let vaultValue = setup.vault?.initial ?? 0;
  let dialSolved = false;
  let scansCompleted = 0;
  let jobsCompleted = 0;
  const stdout: string[] = [];
  const stderr: string[] = [];
  const testResults: TestCaseResult[] = [];
  let failureReason: string | undefined;
  let cleared = false;

  // Shared synchronization primitives
  const channels = new Map<string, RustVal[]>();
  const mutexLocks = new Map<string, { holder: string | null; inner: RustVal }>();
  const globalMemory = new Map<string, VarSlot>();
  let nextChannelId = 1;
  let nextMutexId = 1;
  let nextCoreId = 100;
  let nextThreadNum = 1;

  // Dynamic environment evaluation at tick t
  const getGatesAtTick = (t: number): GateSnapshot[] => {
    return (setup.gates ?? []).map((g) => {
      if (g.linkedSwitch) {
        const isOpen = activeSwitchSet.has(`${g.linkedSwitch.x},${g.linkedSwitch.y}`);
        return { x: g.x, y: g.y, isOpen, countdown: 0 };
      }
      const period = g.openTicks + g.closedTicks;
      const phase = (t + (g.initialOffset ?? 0)) % period;
      const isOpen = phase < g.openTicks;
      const countdown = isOpen ? g.openTicks - phase : period - phase;
      return { x: g.x, y: g.y, isOpen, countdown };
    });
  };

  const getSparksAtTick = (t: number) => {
    return (setup.sparks ?? []).map((sp) => {
      const idx = (t + (sp.initialIndex ?? 0)) % sp.path.length;
      return { id: sp.id, x: sp.path[idx].x, y: sp.path[idx].y };
    });
  };

  const fibers: FiberState[] = [];
  const pendingCues: VisualCue[] = [];
  const staticDiagnostics: CompilerDiagnostic[] = [];

  const failCompile = (
    line: number,
    codeStr: string,
    title: string,
    explanation: string,
    tip: string
  ): never => {
    staticDiagnostics.push({ line, col: 1, code: codeStr, title, explanation, tip });
    throw new ControlSignal('panic', undefined, title, line);
  };

  // Helper to evaluate expressions inside a Generator so actions yield deterministically 1 tick!
  function* evalBlock(
    block: Expr & { kind: 'Block' },
    env: Map<string, VarSlot>,
    fiber: FiberState,
    inUnsafe: boolean
  ): Generator<string, RustVal, void> {
    // Register local fn & const items inside block
    const localFns = new Map<string, Item & { kind: 'Fn' }>();
    const scopeEnv = new Map(env);
    for (const st of block.stmts) {
      if (st.kind === 'Item' && st.item.kind === 'Fn') {
        localFns.set(st.item.name, st.item);
      }
    }

    const localAllocNames: string[] = [];
    let lastVal: RustVal = { kind: 'unit' };

    for (let idx = 0; idx < block.stmts.length; idx++) {
      const st = block.stmts[idx];
      if (st.kind === 'Item') {
        if (st.item.kind === 'Const') {
          const val = yield* evalExpr(st.item.init, scopeEnv, fiber, inUnsafe || Boolean(block.unsafe), localFns);
          scopeEnv.set(st.item.name, {
            name: st.item.name,
            mutable: false,
            typeName: st.item.typeAnn ?? inferTypeName(val),
            val,
            moved: false,
            immBorrowCount: 0,
            mutBorrowed: false,
          });
        }
        continue;
      }

      if (st.kind === 'Let') {
        fiber.activeLine = st.line;
        const val: RustVal = yield* evalExpr(st.init, scopeEnv, fiber, inUnsafe || Boolean(block.unsafe), localFns);
        // Check move on assignment if RHS is a bare Ident
        if (st.init.kind === 'Ident') {
          const srcSlot = scopeEnv.get(st.init.name);
          if (srcSlot && !isCopyType(srcSlot.val)) {
            if (srcSlot.moved) {
              failCompile(
                st.line,
                'E0382',
                `変数 '${st.init.name}' はすでに移動（Move）済みです`,
                `${st.init.name} の所有権は以前の処理で別の場所へ移っているため、もう一度受け取れません。`,
                `所有権を移動させずに共有したい場合は '&${st.init.name}'（借用）または '.clone()' を使おう！`
              );
            }
            srcSlot.moved = true;
          }
        }
        bindPattern(st.pattern, val, scopeEnv, st.typeAnn, st.line, localAllocNames);
        lastVal = { kind: 'unit' };
      } else if (st.kind === 'Return') {
        fiber.activeLine = st.line;
        const v: RustVal = st.value
          ? yield* evalExpr(st.value, scopeEnv, fiber, inUnsafe || Boolean(block.unsafe), localFns)
          : { kind: 'unit' };
        throw new ControlSignal('return', v, undefined, st.line);
      } else if (st.kind === 'Break') {
        fiber.activeLine = st.line;
        const v: RustVal = st.value
          ? yield* evalExpr(st.value, scopeEnv, fiber, inUnsafe || Boolean(block.unsafe), localFns)
          : { kind: 'unit' };
        throw new ControlSignal('break', v, undefined, st.line);
      } else if (st.kind === 'Continue') {
        fiber.activeLine = st.line;
        throw new ControlSignal('continue', undefined, undefined, st.line);
      } else if (st.kind === 'Expr') {
        fiber.activeLine = st.line;
        const val: RustVal = yield* evalExpr(st.expr, scopeEnv, fiber, inUnsafe || Boolean(block.unsafe), localFns);
        lastVal = st.semi ? { kind: 'unit' } : val;
      }
    }

    // Release mutex guards and RefCell borrows when exiting block scope (RAII Drop!)
    for (const name of localAllocNames) {
      const slot = scopeEnv.get(name);
      if (slot && slot.val.kind === 'mutexGuard') {
        const m = mutexLocks.get(slot.val.mutexId);
        if (m && m.holder === fiber.id) {
          m.holder = null;
          pendingCues.push({ kind: 'mutex_unlock', x: fiber.x, y: fiber.y });
        }
      }
      if (slot && slot.val.kind === 'ref' && slot.val.refCellOwner) {
        slot.val.refCellOwner.mutBorrowed = false;
      }
    }

    return lastVal;
  }

  function bindPattern(
    pat: Pattern,
    val: RustVal,
    env: Map<string, VarSlot>,
    typeAnn: string | undefined,
    line: number,
    createdNames?: string[]
  ): boolean {
    switch (pat.kind) {
      case 'Wildcard':
        return true;
      case 'Ident': {
        const slot: VarSlot = {
          name: pat.name,
          mutable: pat.mutable,
          typeName: typeAnn ?? inferTypeName(val),
          val,
          moved: false,
          immBorrowCount: 0,
          mutBorrowed: false,
        };
        env.set(pat.name, slot);
        globalMemory.set(pat.name, slot);
        createdNames?.push(pat.name);
        return true;
      }
      case 'Literal':
        if (val.kind === 'int' && typeof pat.value === 'number') return val.val === pat.value;
        if (val.kind === 'bool' && typeof pat.value === 'boolean') return val.val === pat.value;
        if (val.kind === 'str' && typeof pat.value === 'string') return val.val === pat.value;
        return false;
      case 'Range':
        if (val.kind !== 'int') return false;
        return pat.inclusive ? val.val >= pat.start && val.val <= pat.end : val.val >= pat.start && val.val < pat.end;
      case 'Tuple':
        if (val.kind !== 'tuple' || val.items.length !== pat.items.length) return false;
        return pat.items.every((sub, i) => bindPattern(sub, val.items[i], env, undefined, line, createdNames));
      case 'BindingAt': {
        const ok = bindPattern(pat.inner, val, env, undefined, line, createdNames);
        if (ok) {
          const slot: VarSlot = {
            name: pat.name,
            mutable: false,
            typeName: inferTypeName(val),
            val,
            moved: false,
            immBorrowCount: 0,
            mutBorrowed: false,
          };
          env.set(pat.name, slot);
          globalMemory.set(pat.name, slot);
          createdNames?.push(pat.name);
        }
        return ok;
      }
      case 'Or':
        return (
          bindPattern(pat.left, val, env, undefined, line, createdNames) ||
          bindPattern(pat.right, val, env, undefined, line, createdNames)
        );
      case 'EnumVariant': {
        if (val.kind !== 'enum') return false;
        const vName = pat.path[pat.path.length - 1];
        if (val.variant !== vName) return false;
        if (pat.args.length === 0) return true;
        if (!val.payload || val.payload.length !== pat.args.length) return false;
        return pat.args.every((sub, i) => bindPattern(sub, val.payload![i], env, undefined, line, createdNames));
      }
      case 'Struct': {
        if (val.kind !== 'struct') return false;
        if (pat.name && val.typeName !== pat.name) return false;
        for (const f of pat.fields) {
          const fVal = val.fields.get(f.key);
          if (!fVal) return false;
          if (f.pat) {
            if (!bindPattern(f.pat, fVal, env, undefined, line, createdNames)) return false;
          } else {
            const slot: VarSlot = {
              name: f.key,
              mutable: false,
              typeName: inferTypeName(fVal),
              val: fVal,
              moved: false,
              immBorrowCount: 0,
              mutBorrowed: false,
            };
            env.set(f.key, slot);
            globalMemory.set(f.key, slot);
            createdNames?.push(f.key);
          }
        }
        return true;
      }
    }
  }

  function* evalExpr(
    expr: Expr,
    env: Map<string, VarSlot>,
    fiber: FiberState,
    inUnsafe: boolean,
    localFns: Map<string, Item & { kind: 'Fn' }>
  ): Generator<string, RustVal, void> {
    fiber.activeLine = expr.line;

    switch (expr.kind) {
      case 'Number':
        return { kind: 'int', val: expr.value };
      case 'Bool':
        return { kind: 'bool', val: expr.value };
      case 'String':
        return { kind: 'str', val: expr.value };
      case 'Tuple': {
        const items: RustVal[] = [];
        for (const it of expr.items) items.push(yield* evalExpr(it, env, fiber, inUnsafe, localFns));
        return { kind: 'tuple', items };
      }
      case 'Array': {
        const items: RustVal[] = [];
        for (const it of expr.items) items.push(yield* evalExpr(it, env, fiber, inUnsafe, localFns));
        return { kind: 'vec', items };
      }
      case 'Block':
        return yield* evalBlock(expr, env, fiber, inUnsafe || Boolean(expr.unsafe));
      case 'Ident': {
        if (expr.name === 'None') {
          return { kind: 'enum', enumName: 'Option', variant: 'None' };
        }
        const slot = env.get(expr.name);
        if (!slot) {
          const cItem = constItems.get(expr.name);
          if (cItem) {
            return yield* evalExpr(cItem.init, env, fiber, inUnsafe, localFns);
          }
          failCompile(
            expr.line,
            'E0425',
            `変数 '${expr.name}' が見つかりません`,
            `${expr.line}行目で使われている '${expr.name}' は、まだ let で宣言されていません。`,
            `'let ${expr.name} = ...;' のように先に宣言されているか、つづりミスがないか確認しよう！`
          );
        }
        if (slot!.moved) {
          failCompile(
            expr.line,
            'E0382',
            `所有権が移動（Move）済みの変数 '${expr.name}' は使えません`,
            `'${expr.name}' はすでに関数や別変数へ所有権を渡したため、空っぽになっています！`,
            `渡した後に使いたいときは、所有権を渡さず '&${expr.name}'（借用）で貸してあげよう。`
          );
        }
        return slot!.val;
      }
      case 'Path': {
        const joined = expr.parts.join('::');
        if (joined === 'Ordering::Less') return { kind: 'enum', enumName: 'Ordering', variant: 'Less' };
        if (joined === 'Ordering::Greater') return { kind: 'enum', enumName: 'Ordering', variant: 'Greater' };
        if (joined === 'Ordering::Equal') return { kind: 'enum', enumName: 'Ordering', variant: 'Equal' };
        if (joined === 'None') return { kind: 'enum', enumName: 'Option', variant: 'None' };
        if (expr.parts.length === 2) {
          const en = enums.get(expr.parts[0]);
          if (en && en.variants.includes(expr.parts[1])) {
            return { kind: 'enum', enumName: expr.parts[0], variant: expr.parts[1] };
          }
        }
        return { kind: 'str', val: joined };
      }
      case 'StructLit': {
        const fields = new Map<string, RustVal>();
        for (const f of expr.fields) {
          fields.set(f.key, yield* evalExpr(f.value, env, fiber, inUnsafe, localFns));
        }
        return { kind: 'struct', typeName: expr.name, fields };
      }
      case 'Unary': {
        if (expr.op === '&' || expr.op === '&mut') {
          const wantMut = expr.op === '&mut';
          if (expr.expr.kind === 'Ident') {
            const slot = env.get(expr.expr.name);
            if (!slot) {
              failCompile(
                expr.line,
                'E0425',
                `変数 '${expr.expr.name}' が見つかりません`,
                `借用しようとした変数 '${expr.expr.name}' が宣言されていません。`,
                `先に let で '${expr.expr.name}' を用意しよう！`
              );
            }
            if (slot!.moved) {
              failCompile(
                expr.line,
                'E0382',
                `移動済みの変数 '${expr.expr.name}' は借用できません`,
                `所有権がすでに別の場所へ移っているため、参照（&）を作れません。`,
                `所有権を deliver などで渡す前に借用しよう！`
              );
            }
            if (wantMut && !slot!.mutable) {
              failCompile(
                expr.line,
                'E0596',
                `不変変数 '${expr.expr.name}' は可変借用 '&mut' できません`,
                `変数 '${expr.expr.name}' に mut が付いていないため、中身を書き換える許可（&mut）を出せません。`,
                `'let mut ${expr.expr.name} = ...;' のように mut を付けて宣言しよう！`
              );
            }
            if (wantMut && (slot!.mutBorrowed || slot!.immBorrowCount > 0)) {
              failCompile(
                expr.line,
                'E0499',
                `変数 '${expr.expr.name}' はすでに別の場所で借用中です`,
                `可変借用 '&mut' は同時に1つしか作れません（データ競合を防ぐRustの鉄則です）。`,
                `同じ行や同時に '&' と '&mut' を重ねて渡していないか確認しよう！`
              );
            }
            if (!wantMut && slot!.mutBorrowed) {
              failCompile(
                expr.line,
                'E0502',
                `可変借用中に不変借用 '&${expr.expr.name}' は作れません`,
                `'${expr.expr.name}' は今 '&mut' で書き換え用に貸し出し中です。`,
                `可変借用が終わってから不変借用 '&' を使おう！`
              );
            }
            return { kind: 'ref', targetName: expr.expr.name, mutable: wantMut, slot: slot! };
          }
          // Slice or temp expression ref
          const val = yield* evalExpr(expr.expr, env, fiber, inUnsafe, localFns);
          return val;
        }

        if (expr.op === '*') {
          const inner = yield* evalExpr(expr.expr, env, fiber, inUnsafe, localFns);
          if (inner.kind === 'ptr') {
            if (!inUnsafe) {
              failCompile(
                expr.line,
                'E0133',
                `生ポインタの参照外し '*ptr' には unsafe ブロックが必要です`,
                `生ポインタを直接読む操作は危険な可能性があるため、Rustでは unsafe { ... } の中でのみ許可されます。`,
                `'unsafe { *ptr }' のように unsafe ブロックで囲もう！`
              );
            }
            return { kind: 'int', val: inner.value };
          }
          if (inner.kind === 'ref') {
            return inner.slot.val;
          }
          if (inner.kind === 'box' || inner.kind === 'rc' || inner.kind === 'arc') {
            return inner.inner;
          }
          if (inner.kind === 'mutexGuard') {
            return inner.inner;
          }
          return inner;
        }

        const v = yield* evalExpr(expr.expr, env, fiber, inUnsafe, localFns);
        if (expr.op === '!') {
          return { kind: 'bool', val: v.kind === 'bool' ? !v.val : false };
        }
        if (expr.op === '-') {
          return { kind: 'int', val: v.kind === 'int' ? -v.val : 0 };
        }
        return v;
      }
      case 'Binary': {
        const l = yield* evalExpr(expr.left, env, fiber, inUnsafe, localFns);
        const r = yield* evalExpr(expr.right, env, fiber, inUnsafe, localFns);
        if (expr.op === '+' && l.kind === 'str' && r.kind === 'str') {
          return { kind: 'str', val: l.val + r.val };
        }
        const ln = l.kind === 'int' ? l.val : 0;
        const rn = r.kind === 'int' ? r.val : 0;
        switch (expr.op) {
          case '+':
            return { kind: 'int', val: ln + rn };
          case '-':
            return { kind: 'int', val: ln - rn };
          case '*':
            return { kind: 'int', val: ln * rn };
          case '/':
            return { kind: 'int', val: rn === 0 ? 0 : Math.trunc(ln / rn) };
          case '%':
            return { kind: 'int', val: rn === 0 ? 0 : ln % rn };
          case '==':
            return { kind: 'bool', val: formatRustVal(l) === formatRustVal(r) };
          case '!=':
            return { kind: 'bool', val: formatRustVal(l) !== formatRustVal(r) };
          case '<':
            return { kind: 'bool', val: ln < rn };
          case '>':
            return { kind: 'bool', val: ln > rn };
          case '<=':
            return { kind: 'bool', val: ln <= rn };
          case '>=':
            return { kind: 'bool', val: ln >= rn };
          case '&&':
            return { kind: 'bool', val: (l.kind === 'bool' && l.val) && (r.kind === 'bool' && r.val) };
          case '||':
            return { kind: 'bool', val: (l.kind === 'bool' && l.val) || (r.kind === 'bool' && r.val) };
        }
        return { kind: 'unit' };
      }
      case 'Assign': {
        const rhs = yield* evalExpr(expr.value, env, fiber, inUnsafe, localFns);
        // Handle *guard += 1 or *ptr = 5
        if (expr.target.kind === 'Unary' && expr.target.op === '*') {
          const ptrVal = yield* evalExpr(expr.target.expr, env, fiber, inUnsafe, localFns);
          if (ptrVal.kind === 'mutexGuard') {
            const cur = ptrVal.inner.kind === 'int' ? ptrVal.inner.val : 0;
            const rhsN = rhs.kind === 'int' ? rhs.val : 0;
            const next =
              expr.op === '=' ? rhsN : expr.op === '+=' ? cur + rhsN : expr.op === '-=' ? cur - rhsN : cur * rhsN;
            ptrVal.inner = { kind: 'int', val: next };
            const m = mutexLocks.get(ptrVal.mutexId);
            if (m) m.inner = ptrVal.inner;
            vaultValue = next;
            return { kind: 'unit' };
          }
          if (ptrVal.kind === 'ref') {
            if (!ptrVal.mutable) {
              failCompile(
                expr.line,
                'E0594',
                `不変参照 '&' を通して値を書き換えることはできません`,
                `中身を変更するには '&mut' の可変参照が必要です。`,
                `参照を '&mut' にして宣言・受け取りをしよう！`
              );
            }
            const cur = ptrVal.slot.val.kind === 'int' ? ptrVal.slot.val.val : 0;
            const rhsN = rhs.kind === 'int' ? rhs.val : 0;
            const nextVal: RustVal =
              expr.op === '='
                ? rhs
                : { kind: 'int', val: expr.op === '+=' ? cur + rhsN : expr.op === '-=' ? cur - rhsN : cur * rhsN };
            ptrVal.slot.val = nextVal;
            if (ptrVal.refCellOwner) {
              ptrVal.refCellOwner.inner = nextVal;
            }
            return { kind: 'unit' };
          }
        }
        if (expr.target.kind === 'Ident') {
          const slot = env.get(expr.target.name);
          if (!slot) {
            failCompile(
              expr.line,
              'E0425',
              `変数 '${expr.target.name}' が見つかりません`,
              `代入しようとした変数 '${expr.target.name}' が宣言されていません。`,
              `先に 'let mut ${expr.target.name} = ...;' と書こう！`
            );
          }
          if (!slot!.mutable) {
            failCompile(
              expr.line,
              'E0384',
              `不変変数 '${expr.target.name}' には再代入できません`,
              `Rustの変数は標準で「変更禁止（イミュータブル）」です。${expr.line}行目で書き換えようとしました。`,
              `'let mut ${expr.target.name} = ...;' のように 'mut' を付けて書き換え可能にしよう！`
            );
          }
          if (expr.op === '=') {
            slot!.val = rhs;
            slot!.moved = false;
          } else {
            const cur = slot!.val.kind === 'int' ? slot!.val.val : 0;
            const add = rhs.kind === 'int' ? rhs.val : 0;
            slot!.val = {
              kind: 'int',
              val: expr.op === '+=' ? cur + add : expr.op === '-=' ? cur - add : cur * add,
            };
          }
          return { kind: 'unit' };
        }
        if (expr.target.kind === 'Field' && expr.target.receiver.kind === 'Ident') {
          const slot = env.get(expr.target.receiver.name);
          if (slot && !slot.mutable) {
            failCompile(
              expr.line,
              'E0594',
              `不変な構造体 '${expr.target.receiver.name}' のフィールドは変更できません`,
              `フィールドを変更するには構造体変数に 'mut' が必要です。`,
              `'let mut ${expr.target.receiver.name} = ...;' にしよう！`
            );
          }
          if (slot && slot.val.kind === 'struct') {
            if (expr.op === '=') {
              slot.val.fields.set(expr.target.field, rhs);
            } else {
              const curVal = slot.val.fields.get(expr.target.field);
              const cur = curVal?.kind === 'int' ? curVal.val : 0;
              const add = rhs.kind === 'int' ? rhs.val : 0;
              slot.val.fields.set(expr.target.field, {
                kind: 'int',
                val: expr.op === '+=' ? cur + add : expr.op === '-=' ? cur - add : cur * add,
              });
            }
          }
          return { kind: 'unit' };
        }
        return { kind: 'unit' };
      }
      case 'Range': {
        const s = yield* evalExpr(expr.start, env, fiber, inUnsafe, localFns);
        const e = yield* evalExpr(expr.end, env, fiber, inUnsafe, localFns);
        const sn = s.kind === 'int' ? s.val : 0;
        const en = e.kind === 'int' ? e.val : 0;
        const items: RustVal[] = [];
        for (let k = sn; expr.inclusive ? k <= en : k < en; k++) {
          items.push({ kind: 'int', val: k });
        }
        return { kind: 'vec', items };
      }
      case 'If': {
        const c = yield* evalExpr(expr.cond, env, fiber, inUnsafe, localFns);
        const truthy = c.kind === 'bool' ? c.val : c.kind === 'int' ? c.val !== 0 : false;
        if (truthy) {
          return yield* evalExpr(expr.thenBlock, env, fiber, inUnsafe, localFns);
        }
        if (expr.elseBlock) {
          return yield* evalExpr(expr.elseBlock, env, fiber, inUnsafe, localFns);
        }
        return { kind: 'unit' };
      }
      case 'IfLet': {
        const v = yield* evalExpr(expr.value, env, fiber, inUnsafe, localFns);
        const localEnv = new Map(env);
        if (bindPattern(expr.pattern, v, localEnv, undefined, expr.line)) {
          return yield* evalExpr(expr.thenBlock, localEnv, fiber, inUnsafe, localFns);
        }
        if (expr.elseBlock) {
          return yield* evalExpr(expr.elseBlock, env, fiber, inUnsafe, localFns);
        }
        return { kind: 'unit' };
      }
      case 'Match': {
        const scrut = yield* evalExpr(expr.scrutinee, env, fiber, inUnsafe, localFns);
        // Check enum exhaustiveness if scrutinee is enum and no wildcard arm
        if (scrut.kind === 'enum') {
          const hasWildcard = expr.arms.some((a) => a.pattern.kind === 'Wildcard' || a.pattern.kind === 'Ident');
          if (!hasWildcard) {
            const knownVariants =
              scrut.enumName === 'Ordering'
                ? ['Less', 'Greater', 'Equal']
                : scrut.enumName === 'Option'
                ? ['Some', 'None']
                : scrut.enumName === 'Result'
                ? ['Ok', 'Err']
                : enums.get(scrut.enumName)?.variants ?? [];
            const covered = new Set<string>();
            for (const a of expr.arms) {
              if (a.pattern.kind === 'EnumVariant') {
                covered.add(a.pattern.path[a.pattern.path.length - 1]);
              }
            }
            const missing = knownVariants.filter((v) => !covered.has(v));
            if (missing.length > 0) {
              failCompile(
                expr.line,
                'E0004',
                `match式のパターン網羅性が不足しています（不足: ${missing.join(', ')}）`,
                `enum '${scrut.enumName}' のうち '${missing.join(', ')}' の場合が書かれていません。`,
                `不足しているパターンを追加するか、最後に '_ => {}' を書こう！`
              );
            }
          }
        }

        for (const arm of expr.arms) {
          const armEnv = new Map(env);
          if (bindPattern(arm.pattern, scrut, armEnv, undefined, arm.line)) {
            if (arm.guard) {
              const gVal = yield* evalExpr(arm.guard, armEnv, fiber, inUnsafe, localFns);
              if (gVal.kind !== 'bool' || !gVal.val) continue;
            }
            return yield* evalExpr(arm.body, armEnv, fiber, inUnsafe, localFns);
          }
        }
        return { kind: 'unit' };
      }
      case 'Loop': {
        let guard = 0;
        while (guard++ < 150) {
          try {
            yield* evalExpr(expr.body, env, fiber, inUnsafe, localFns);
          } catch (sig) {
            if (sig instanceof ControlSignal) {
              if (sig.kind === 'break') return sig.value ?? { kind: 'unit' };
              if (sig.kind === 'continue') continue;
            }
            throw sig;
          }
        }
        failCompile(
          expr.line,
          'E9001',
          '無限ループを検知しました！',
          'loop の中の繰り返しが150回を超えたため、工房を保護するため停止しました。',
          'ループを抜ける条件 `if at_goal() { break; }` があるか確認しよう！'
        );
        return { kind: 'unit' };
      }
      case 'While': {
        let guard = 0;
        while (guard++ < 150) {
          const c = yield* evalExpr(expr.cond, env, fiber, inUnsafe, localFns);
          if (c.kind !== 'bool' || !c.val) break;
          try {
            yield* evalExpr(expr.body, env, fiber, inUnsafe, localFns);
          } catch (sig) {
            if (sig instanceof ControlSignal) {
              if (sig.kind === 'break') return sig.value ?? { kind: 'unit' };
              if (sig.kind === 'continue') continue;
            }
            throw sig;
          }
        }
        return { kind: 'unit' };
      }
      case 'For': {
        const iterVal = yield* evalExpr(expr.iter, env, fiber, inUnsafe, localFns);
        const list = iterVal.kind === 'vec' || iterVal.kind === 'slice' ? iterVal.items : [];
        for (const item of list) {
          const loopEnv = new Map(env);
          bindPattern(expr.pattern, item, loopEnv, undefined, expr.line);
          try {
            yield* evalExpr(expr.body, loopEnv, fiber, inUnsafe, localFns);
          } catch (sig) {
            if (sig instanceof ControlSignal) {
              if (sig.kind === 'break') return sig.value ?? { kind: 'unit' };
              if (sig.kind === 'continue') continue;
            }
            throw sig;
          }
        }
        return { kind: 'unit' };
      }
      case 'Closure': {
        return { kind: 'closure', params: expr.params, body: expr.body, capturedEnv: new Map(env) };
      }
      case 'Field': {
        const rec = yield* evalExpr(expr.receiver, env, fiber, inUnsafe, localFns);
        if (rec.kind === 'struct') {
          const stDef = structs.get(rec.typeName);
          const fDef = stDef?.fields.find((f) => f.name === expr.field);
          if (stDef && fDef && !fDef.pub && expr.receiver.kind === 'Ident' && expr.receiver.name !== 'self') {
            // Only enforce if struct declared inside mod or specifically marked private in Ch.7
          }
          return rec.fields.get(expr.field) ?? { kind: 'unit' };
        }
        if (rec.kind === 'tuple') {
          const idx = Number(expr.field);
          return rec.items[idx] ?? { kind: 'unit' };
        }
        return { kind: 'unit' };
      }
      case 'Index': {
        const rec = yield* evalExpr(expr.receiver, env, fiber, inUnsafe, localFns);
        const items = rec.kind === 'vec' || rec.kind === 'slice' ? rec.items : [];
        if (expr.slice) {
          const s = expr.slice.start ? yield* evalExpr(expr.slice.start, env, fiber, inUnsafe, localFns) : { kind: 'int', val: 0 };
          const e = expr.slice.end ? yield* evalExpr(expr.slice.end, env, fiber, inUnsafe, localFns) : { kind: 'int', val: items.length };
          const sn = s.kind === 'int' ? s.val : 0;
          const en = e.kind === 'int' ? e.val : items.length;
          return { kind: 'slice', items: items.slice(sn, en) };
        }
        const idxVal = yield* evalExpr(expr.index, env, fiber, inUnsafe, localFns);
        const idx = idxVal.kind === 'int' ? idxVal.val : 0;
        return items[idx] ?? { kind: 'enum', enumName: 'Option', variant: 'None' };
      }
      case 'Try': {
        const v = yield* evalExpr(expr.expr, env, fiber, inUnsafe, localFns);
        if (v.kind === 'enum' && v.enumName === 'Result') {
          if (v.variant === 'Ok') return v.payload?.[0] ?? { kind: 'unit' };
          if (v.variant === 'Err') throw new ControlSignal('try_err', v, undefined, expr.line);
        }
        if (v.kind === 'enum' && v.enumName === 'Option') {
          if (v.variant === 'Some') return v.payload?.[0] ?? { kind: 'unit' };
          if (v.variant === 'None') throw new ControlSignal('try_err', v, undefined, expr.line);
        }
        return v;
      }
      case 'MethodCall': {
        return yield* evalMethodCall(expr, env, fiber, inUnsafe, localFns);
      }
      case 'Call': {
        return yield* evalCall(expr, env, fiber, inUnsafe, localFns);
      }
    }
  }

  function* evalMethodCall(
    expr: Expr & { kind: 'MethodCall' },
    env: Map<string, VarSlot>,
    fiber: FiberState,
    inUnsafe: boolean,
    localFns: Map<string, Item & { kind: 'Fn' }>
  ): Generator<string, RustVal, void> {
    const rawRec = yield* evalExpr(expr.receiver, env, fiber, inUnsafe, localFns);
    const args: RustVal[] = [];
    for (const a of expr.args) args.push(yield* evalExpr(a, env, fiber, inUnsafe, localFns));
    const m = expr.method;

    let rec: RustVal = rawRec;
    while (rec.kind === 'ref' || rec.kind === 'box' || (m !== 'clone' && rec.kind === 'rc')) {
      rec = rec.kind === 'ref' ? rec.slot.val : rec.inner;
    }

    // User-defined struct or enum impl method
    if (rec.kind === 'struct' || rec.kind === 'enum') {
      const targetTypeName = rec.kind === 'struct' ? rec.typeName : rec.enumName;
      const mMap = implMethods.get(targetTypeName);
      const mFn = mMap?.get(m);
      if (mFn) {
        const mEnv = new Map<string, VarSlot>();
        const recSlot =
          rawRec.kind === 'ref'
            ? rawRec.slot
            : expr.receiver.kind === 'Ident'
            ? env.get(expr.receiver.name)
            : undefined;
        const needMutSelf = mFn.params[0]?.mutable || mFn.params[0]?.typeAnn?.startsWith('&mut');
        const hasMutAccess =
          rawRec.kind === 'ref' ? rawRec.mutable : recSlot ? recSlot.mutable : true;
        if (needMutSelf && !hasMutAccess) {
          const targetName = recSlot?.name ?? '参照';
          failCompile(
            expr.line,
            'E0596',
            `不変変数 '${targetName}' に対して &mut self メソッド '${m}' は呼べません`,
            `メソッド '${m}' は中身を書き換えるため、変数側または参照側に 'mut' が必要です。`,
            `'let mut ${targetName} = ...;' や '&mut' に変更しよう！`
          );
        }
        mEnv.set('self', {
          name: 'self',
          mutable: Boolean(needMutSelf),
          typeName: targetTypeName,
          val: rec,
          moved: false,
          immBorrowCount: 0,
          mutBorrowed: false,
        });
        let argIdx = 0;
        for (const p of mFn.params) {
          if (p.name === 'self') continue;
          const aVal = args[argIdx++] ?? { kind: 'unit' };
          mEnv.set(p.name, {
            name: p.name,
            mutable: p.mutable,
            typeName: inferTypeName(aVal),
            val: aVal,
            moved: false,
            immBorrowCount: 0,
            mutBorrowed: false,
          });
        }
        try {
          if (mFn.body.kind === 'Block') {
            return yield* evalBlock(mFn.body, mEnv, fiber, inUnsafe || mFn.isUnsafe);
          }
        } catch (sig) {
          if (sig instanceof ControlSignal && sig.kind === 'return') {
            return sig.value ?? { kind: 'unit' };
          }
          throw sig;
        }
      }
    }

    // Standard library & Workshop methods
    if (m === 'cmp' && rec.kind === 'int') {
      const target = args[0]?.kind === 'ref' ? args[0].slot.val : args[0];
      const tv = target?.kind === 'int' ? target.val : 0;
      const variant = rec.val < tv ? 'Less' : rec.val > tv ? 'Greater' : 'Equal';
      return { kind: 'enum', enumName: 'Ordering', variant };
    }
    if (m === 'len') {
      if (rec.kind === 'vec' || rec.kind === 'slice') return { kind: 'int', val: rec.items.length };
      if (rec.kind === 'str') return { kind: 'int', val: rec.val.length };
      return { kind: 'int', val: 0 };
    }
    if (m === 'push' && rec.kind === 'vec') {
      if (expr.receiver.kind === 'Ident') {
        const slot = env.get(expr.receiver.name);
        if (slot && !slot.mutable) {
          failCompile(
            expr.line,
            'E0596',
            `Vec '${expr.receiver.name}' を変更するには 'mut' が必要です`,
            `.push() は配列に要素を追加するため、'let mut' で宣言する必要があります。`,
            `'let mut ${expr.receiver.name} = vec![...];' にしよう！`
          );
        }
      }
      rec.items.push(args[0]);
      return { kind: 'unit' };
    }
    if (m === 'push_str' && rec.kind === 'str') {
      if (expr.receiver.kind === 'Ident') {
        const slot = env.get(expr.receiver.name);
        if (slot && !slot.mutable) {
          failCompile(
            expr.line,
            'E0596',
            `String '${expr.receiver.name}' に追加するには 'mut' が必要です`,
            `.push_str() は文字列を書き換えるため、'let mut' が必要です。`,
            `'let mut ${expr.receiver.name} = String::from(...);' にしよう！`
          );
        }
        if (slot) slot.val = { kind: 'str', val: rec.val + (args[0]?.kind === 'str' ? args[0].val : '') };
      }
      return { kind: 'unit' };
    }
    if (m === 'insert' && rec.kind === 'struct' && rec.typeName === 'HashMap') {
      const k = formatRustVal(args[0]);
      rec.fields.set(k, args[1]);
      return { kind: 'unit' };
    }
    if (m === 'get') {
      if (rec.kind === 'struct' && rec.typeName === 'HashMap') {
        const k = formatRustVal(args[0]?.kind === 'ref' ? args[0].slot.val : args[0]);
        const v = rec.fields.get(k);
        return v
          ? { kind: 'enum', enumName: 'Option', variant: 'Some', payload: [v] }
          : { kind: 'enum', enumName: 'Option', variant: 'None' };
      }
      if (rec.kind === 'vec' || rec.kind === 'slice') {
        const idx = args[0]?.kind === 'int' ? args[0].val : 0;
        const v = rec.items[idx];
        return v
          ? { kind: 'enum', enumName: 'Option', variant: 'Some', payload: [v] }
          : { kind: 'enum', enumName: 'Option', variant: 'None' };
      }
    }
    if (m === 'unwrap') {
      if (rec.kind === 'enum') {
        if ((rec.variant === 'Some' || rec.variant === 'Ok') && rec.payload) {
          return rec.payload[0];
        }
        fiber.status = 'PANICKED';
        failureReason = `Tick ${tick}: エラー値（${rec.variant}）に対して .unwrap() を呼んだためパニック停止しました！match や ? で安全に扱おう。`;
        pendingCues.push({ kind: 'crash', x: fiber.x, y: fiber.y });
        throw new ControlSignal('panic', undefined, failureReason, expr.line);
      }
      return rec;
    }
    if (m === 'unwrap_or') {
      if (rec.kind === 'enum') {
        if ((rec.variant === 'Some' || rec.variant === 'Ok') && rec.payload) return rec.payload[0];
        return args[0] ?? { kind: 'unit' };
      }
      return rec;
    }
    if (m === 'iter' || m === 'into_iter') {
      return rec;
    }
    if (m === 'filter' && (rec.kind === 'vec' || rec.kind === 'slice')) {
      const cl = args[0];
      if (cl?.kind === 'closure') {
        const out: RustVal[] = [];
        for (const item of rec.items) {
          const cEnv = new Map(cl.capturedEnv);
          if (cl.params[0]) {
            cEnv.set(cl.params[0], {
              name: cl.params[0],
              mutable: false,
              typeName: inferTypeName(item),
              val: item,
              moved: false,
              immBorrowCount: 0,
              mutBorrowed: false,
            });
          }
          const res = yield* evalExpr(cl.body, cEnv, fiber, inUnsafe, localFns);
          if (res.kind === 'bool' && res.val) out.push(item);
        }
        return { kind: 'vec', items: out };
      }
    }
    if (m === 'map' && (rec.kind === 'vec' || rec.kind === 'slice')) {
      const cl = args[0];
      if (cl?.kind === 'closure') {
        const out: RustVal[] = [];
        for (const item of rec.items) {
          const cEnv = new Map(cl.capturedEnv);
          if (cl.params[0]) {
            cEnv.set(cl.params[0], {
              name: cl.params[0],
              mutable: false,
              typeName: inferTypeName(item),
              val: item,
              moved: false,
              immBorrowCount: 0,
              mutBorrowed: false,
            });
          }
          out.push(yield* evalExpr(cl.body, cEnv, fiber, inUnsafe, localFns));
        }
        return { kind: 'vec', items: out };
      }
    }
    if (m === 'collect') {
      return rec;
    }
    if (m === 'sum' && (rec.kind === 'vec' || rec.kind === 'slice')) {
      const total = rec.items.reduce((acc, v) => acc + (v.kind === 'int' ? v.val : 0), 0);
      return { kind: 'int', val: total };
    }
    if (m === 'clone') {
      if (rec.kind === 'rc' || rec.kind === 'arc') {
        rec.countRef.count += 1;
        return { kind: rec.kind, id: rec.id, inner: rec.inner, countRef: rec.countRef };
      }
      if (rec.kind === 'core') {
        return { kind: 'core', id: `core_clone_${nextCoreId++}`, power: rec.power, label: rec.label };
      }
      return rec;
    }
    if (m === 'borrow' && rec.kind === 'refcell') {
      if (rec.mutBorrowed) {
        fiber.status = 'PANICKED';
        failureReason = `Tick ${tick}: RefCell が可変借用中（borrow_mut）のまま borrow() を呼んだため実行時パニックしました！`;
        pendingCues.push({ kind: 'crash', x: fiber.x, y: fiber.y });
        throw new ControlSignal('panic', undefined, failureReason, expr.line);
      }
      return rec.inner;
    }
    if (m === 'borrow_mut' && rec.kind === 'refcell') {
      if (rec.mutBorrowed) {
        fiber.status = 'PANICKED';
        failureReason = `Tick ${tick}: RefCell の borrow_mut() を同時に2回呼んだため実行時パニックしました！`;
        pendingCues.push({ kind: 'crash', x: fiber.x, y: fiber.y });
        throw new ControlSignal('panic', undefined, failureReason, expr.line);
      }
      rec.mutBorrowed = true;
      return {
        kind: 'ref',
        targetName: 'RefCell',
        mutable: true,
        refCellOwner: rec,
        slot: {
          name: 'RefCell',
          mutable: true,
          typeName: inferTypeName(rec.inner),
          val: rec.inner,
          moved: false,
          immBorrowCount: 0,
          mutBorrowed: false,
        },
      };
    }
    if (m === 'send' && rec.kind === 'sender') {
      const payload = args[0] ?? { kind: 'unit' };
      // Move semantics if argument is ident
      if (expr.args[0]?.kind === 'Ident') {
        const argSlot = env.get(expr.args[0].name);
        if (argSlot && !isCopyType(argSlot.val)) {
          if (argSlot.moved) {
            failCompile(
              expr.line,
              'E0382',
              `すでに移動済みの '${expr.args[0].name}' はチャンネル送信できません`,
              `所有権がもう残っていません。`,
              `送信前に重複使用していないか確認しよう！`
            );
          }
          argSlot.moved = true;
        }
      }
      const q = channels.get(rec.channelId) ?? [];
      q.push(payload);
      channels.set(rec.channelId, q);
      fiber.lastAction = 'tx.send()';
      pendingCues.push({
        kind: 'channel_send',
        x: fiber.x,
        y: fiber.y,
        text: formatRustVal(payload),
      });
      yield 'tick';
      return { kind: 'enum', enumName: 'Result', variant: 'Ok', payload: [{ kind: 'unit' }] };
    }
    if (m === 'recv' && rec.kind === 'receiver') {
      let waitGuard = 0;
      while ((channels.get(rec.channelId)?.length ?? 0) === 0) {
        if (waitGuard++ > 80) {
          fiber.status = 'PANICKED';
          failureReason = `Tick ${tick}: チャンネル rx.recv() の受信待ちがタイムアウトしました（送信が来ていないようです）。`;
          throw new ControlSignal('panic', undefined, failureReason, expr.line);
        }
        fiber.status = 'WAITING_RECV';
        fiber.waitingChannelId = rec.channelId;
        fiber.lastAction = 'rx.recv() 待機';
        yield 'tick';
      }
      fiber.status = 'RUNNING';
      fiber.waitingChannelId = undefined;
      const val = channels.get(rec.channelId)!.shift()!;
      if (val.kind === 'core') {
        fiber.holdingCoreId = val.id;
        fiber.holdingPower = val.power;
      }
      fiber.lastAction = 'rx.recv() 受信';
      pendingCues.push({
        kind: 'channel_recv',
        x: fiber.x,
        y: fiber.y,
        text: formatRustVal(val),
      });
      yield 'tick';
      return { kind: 'enum', enumName: 'Result', variant: 'Ok', payload: [val] };
    }
    if (m === 'lock' && (rec.kind === 'mutex' || rec.kind === 'arc')) {
      const targetMutex = rec.kind === 'arc' && rec.inner.kind === 'mutex' ? rec.inner : rec;
      const mId = targetMutex.kind === 'mutex' ? targetMutex.id : 'm1';
      const lockState = mutexLocks.get(mId);
      let waitGuard = 0;
      while (lockState && lockState.holder !== null) {
        if (waitGuard++ > 80) {
          fiber.status = 'PANICKED';
          failureReason = `Tick ${tick}: Mutex のロック待機がデッドロックにより停止しました！`;
          throw new ControlSignal('panic', undefined, failureReason, expr.line);
        }
        fiber.status = 'WAITING_LOCK';
        fiber.waitingMutexId = mId;
        fiber.lastAction = 'Mutex::lock() 待機';
        yield 'tick';
      }
      if (lockState) lockState.holder = fiber.id;
      fiber.status = 'RUNNING';
      fiber.waitingMutexId = undefined;
      fiber.lastAction = 'Mutex ロック取得';
      pendingCues.push({ kind: 'mutex_lock', x: fiber.x, y: fiber.y });
      yield 'tick';
      return {
        kind: 'enum',
        enumName: 'Result',
        variant: 'Ok',
        payload: [
          {
            kind: 'mutexGuard',
            mutexId: mId,
            inner: lockState?.inner ?? { kind: 'int', val: vaultValue },
          },
        ],
      };
    }
    if (m === 'execute' && rec.kind === 'threadpool') {
      const cl = args[0];
      if (cl?.kind === 'closure') {
        // Assign to deterministic worker slot (Worker #1 or Worker #2)
        const workerSlotIndex = nextThreadNum++;
        const wStart = setup.workerStart ?? { x: setup.botStart.x, y: Math.min(setup.height - 1, setup.botStart.y + 1), dir: 0 as Direction };
        const wFiber: FiberState = {
          id: `worker_${workerSlotIndex}`,
          label: `みるく${workerSlotIndex}号`,
          x: wStart.x,
          y: wStart.y,
          dir: wStart.dir,
          holdingCoreId: null,
          holdingPower: 0,
          status: 'RUNNING',
          activeLine: cl.body.line,
          lastAction: 'ジョブ開始',
          generator: (function* () {
            return { kind: 'unit' } as RustVal;
          })(),
        };
        wFiber.generator = (function* () {
          const res = yield* evalExpr(cl.body, cl.capturedEnv, wFiber, inUnsafe, localFns);
          jobsCompleted += 1;
          wFiber.status = 'DONE';
          wFiber.lastAction = 'ジョブ完了';
          return res;
        })();
        fibers.push(wFiber);
        fiber.lastAction = 'pool.execute()';
        yield 'tick';
      }
      return { kind: 'unit' };
    }
    if (m === 'join') {
      // Wait for all worker fibers to finish deterministically
      let guard = 0;
      while (fibers.some((f) => f.id !== fiber.id && f.status !== 'DONE' && f.status !== 'PANICKED')) {
        if (guard++ > 100) break;
        fiber.lastAction = 'join() 待機';
        yield 'tick';
      }
      return { kind: 'enum', enumName: 'Result', variant: 'Ok', payload: [{ kind: 'unit' }] };
    }

    return { kind: 'unit' };
  }

  function* evalCall(
    expr: Expr & { kind: 'Call' },
    env: Map<string, VarSlot>,
    fiber: FiberState,
    inUnsafe: boolean,
    localFns: Map<string, Item & { kind: 'Fn' }>
  ): Generator<string, RustVal, void> {
    const rawName =
      expr.callee.kind === 'Ident'
        ? expr.callee.name
        : expr.callee.kind === 'Path'
        ? expr.callee.parts.join('::')
        : '';

    const resolvedName = importedNames.get(rawName) ?? rawName;

    // Evaluate arguments & enforce Move / Borrow checks!
    const args: RustVal[] = [];
    for (const a of expr.args) {
      args.push(yield* evalExpr(a, env, fiber, inUnsafe, localFns));
    }

    // Detect simultaneous & and &mut or multiple &mut on the same variable in the same call!
    const borrowTracker = new Map<string, { imm: number; mut: number }>();
    for (let idx = 0; idx < expr.args.length; idx++) {
      const argExpr = expr.args[idx];
      if (argExpr.kind === 'Unary' && (argExpr.op === '&' || argExpr.op === '&mut') && argExpr.expr.kind === 'Ident') {
        const vName = argExpr.expr.name;
        const entry = borrowTracker.get(vName) ?? { imm: 0, mut: 0 };
        if (argExpr.op === '&mut') entry.mut++;
        else entry.imm++;
        borrowTracker.set(vName, entry);
        if (entry.mut > 1 || (entry.mut >= 1 && entry.imm >= 1)) {
          failCompile(
            expr.line,
            'E0499',
            `同じ変数 '${vName}' に対して '&mut' と他の借用を同時に渡せません`,
            `同じ呼び出し内で '${vName}' を可変借用しながら別の参照も渡すと競合が起きます。`,
            `1つずつ順番に借りて使うように行を分けよう！`
          );
        }
      }
    }

    // Built-in macros: println!, eprintln!, assert!, assert_eq!, vec!
    if (expr.macro) {
      if (resolvedName === 'println' || resolvedName === 'eprintln') {
        let msg = '';
        if (args.length > 0 && args[0].kind === 'str') {
          let fmt = args[0].val;
          for (let i = 1; i < args.length; i++) {
            const rep = formatRustVal(args[i]);
            if (fmt.includes('{}')) fmt = fmt.replace('{}', rep);
            else if (fmt.includes('{:?}')) fmt = fmt.replace('{:?}', rep);
            else fmt += ' ' + rep;
          }
          msg = fmt;
        } else {
          msg = args.map(formatRustVal).join(' ');
        }
        if (resolvedName === 'eprintln') stderr.push(msg);
        else stdout.push(msg);
        if (fiber.id !== 'test_runner') {
          const preview = msg.length > 22 ? `${msg.slice(0, 20)}…` : msg;
          fiber.lastAction = `${resolvedName}!("${preview}")`;
          pendingCues.push({
            kind: 'print',
            x: fiber.x,
            y: fiber.y,
            text: msg,
            threadId: fiber.id,
            isError: resolvedName === 'eprintln',
          });
          yield 'tick';
        }
        return { kind: 'unit' };
      }
      if (resolvedName === 'vec') {
        return { kind: 'vec', items: args };
      }
      if (resolvedName === 'panic') {
        const msg = args.map(formatRustVal).join(' ') || 'panic! が呼ばれました';
        fiber.status = 'PANICKED';
        failureReason = `Tick ${tick}: panic!("${msg}") で停止しました。`;
        pendingCues.push({ kind: 'crash', x: fiber.x, y: fiber.y });
        throw new ControlSignal('panic', undefined, failureReason, expr.line);
      }
      if (resolvedName === 'assert') {
        const ok = args[0]?.kind === 'bool' && args[0].val;
        if (!ok) {
          throw new ControlSignal('panic', undefined, `assert! が失敗しました (${expr.line}行目)`, expr.line);
        }
        return { kind: 'unit' };
      }
      if (resolvedName === 'assert_eq') {
        const lStr = formatRustVal(args[0] ?? { kind: 'unit' });
        const rStr = formatRustVal(args[1] ?? { kind: 'unit' });
        if (lStr !== rStr) {
          throw new ControlSignal('panic', undefined, `assert_eq! 失敗: 左=${lStr}, 右=${rStr} (${expr.line}行目)`, expr.line);
        }
        return { kind: 'unit' };
      }
    }

    // Standard constructors & Rust API
    if (resolvedName === 'Some') return { kind: 'enum', enumName: 'Option', variant: 'Some', payload: [args[0]] };
    if (resolvedName === 'Ok') return { kind: 'enum', enumName: 'Result', variant: 'Ok', payload: [args[0]] };
    if (resolvedName === 'Err') return { kind: 'enum', enumName: 'Result', variant: 'Err', payload: [args[0]] };
    if (resolvedName === 'String::from' || resolvedName === 'String::new') {
      return { kind: 'str', val: args[0]?.kind === 'str' ? args[0].val : '' };
    }
    if (resolvedName === 'Vec::new') return { kind: 'vec', items: [] };
    if (resolvedName === 'HashMap::new') return { kind: 'struct', typeName: 'HashMap', fields: new Map() };
    if (resolvedName === 'Box::new') return { kind: 'box', inner: args[0] ?? { kind: 'unit' } };
    if (resolvedName === 'Rc::new') {
      return { kind: 'rc', id: `rc_${nextChannelId++}`, inner: args[0] ?? { kind: 'unit' }, countRef: { count: 1 } };
    }
    if (resolvedName === 'Rc::clone') {
      const target = args[0]?.kind === 'ref' ? args[0].slot.val : args[0];
      if (target?.kind === 'rc') {
        target.countRef.count += 1;
        return { kind: 'rc', id: target.id, inner: target.inner, countRef: target.countRef };
      }
      return target ?? { kind: 'unit' };
    }
    if (resolvedName === 'RefCell::new') {
      return { kind: 'refcell', inner: args[0] ?? { kind: 'unit' }, mutBorrowed: false, immCount: 0 };
    }
    if (resolvedName === 'Mutex::new') {
      const id = `mutex_${nextMutexId++}`;
      const inner = args[0] ?? { kind: 'int', val: vaultValue };
      mutexLocks.set(id, { holder: null, inner });
      return { kind: 'mutex', id, inner };
    }
    if (resolvedName === 'Arc::new') {
      return { kind: 'arc', id: `arc_${nextMutexId++}`, inner: args[0] ?? { kind: 'unit' }, countRef: { count: 1 } };
    }
    if (resolvedName === 'Arc::clone') {
      const target = args[0]?.kind === 'ref' ? args[0].slot.val : args[0];
      if (target?.kind === 'arc') {
        target.countRef.count += 1;
        return { kind: 'arc', id: target.id, inner: target.inner, countRef: target.countRef };
      }
      return target ?? { kind: 'unit' };
    }
    if (resolvedName === 'mpsc::channel' || resolvedName === 'channel') {
      const cId = `ch_${nextChannelId++}`;
      channels.set(cId, []);
      return {
        kind: 'tuple',
        items: [
          { kind: 'sender', channelId: cId },
          { kind: 'receiver', channelId: cId },
        ],
      };
    }
    if (resolvedName === 'ThreadPool::new') {
      const n = args[0]?.kind === 'int' ? Math.max(1, args[0].val) : 2;
      return { kind: 'threadpool', size: n };
    }
    if (resolvedName === 'drop') {
      if (expr.args[0]?.kind === 'Ident') {
        const s = env.get(expr.args[0].name);
        if (s) s.moved = true;
      }
      if (args[0]?.kind === 'mutexGuard') {
        const m = mutexLocks.get(args[0].mutexId);
        if (m && m.holder === fiber.id) {
          m.holder = null;
          pendingCues.push({ kind: 'mutex_unlock', x: fiber.x, y: fiber.y });
        }
      }
      if (args[0]?.kind === 'threadpool') {
        // Drop triggers deterministic graceful join of all worker fibers!
        let guard = 0;
        while (fibers.some((f) => f.id !== fiber.id && f.status !== 'DONE' && f.status !== 'PANICKED')) {
          if (guard++ > 100) break;
          fiber.lastAction = 'ThreadPool::drop() 終了待ち';
          yield 'tick';
        }
      }
      return { kind: 'unit' };
    }
    if (resolvedName === 'thread::spawn' || resolvedName === 'spawn') {
      const cl = args[0];
      if (!cl || cl.kind !== 'closure') {
        return failCompile(
          expr.line,
          'E0308',
          'spawn() にはクロージャ || { ... } を渡します',
          '別スレッドに任せる処理は spawn(|| { ... }) の形で書きます。',
          'spawn(|| { step(); }); のように書いてみよう！'
        );
      }
      // Static Send/Sync check: warn if closure captures an unprotected mutable int/core variable directly without Arc/Mutex
      const closureBodyStr = JSON.stringify(cl.body);
      for (const [vName, vSlot] of env.entries()) {
        if (
          vSlot.mutable &&
          (vSlot.val.kind === 'int' || vSlot.val.kind === 'core' || vSlot.val.kind === 'vec') &&
          closureBodyStr.includes(`"name":"${vName}"`)
        ) {
          return failCompile(
            expr.line,
            'E0373',
            `可変変数 '${vName}' をそのまま別スレッドへ共有できません（データ競合の危険）`,
            `複数スレッドから同時に書き換え可能な生の変数を触るのは危険なため、Rustコンパイラが停止しました。`,
            `共有データを書き換えるには 'Arc::new(Mutex::new(...))' か 'mpsc::channel()' を使おう！`
          );
        }
      }

      const wNum = nextThreadNum++;
      const wStart = setup.workerStart ?? { x: 0, y: 1, dir: 0 as Direction };
      const wFiber: FiberState = {
        id: `worker_${wNum}`,
        label: `みるく号`,
        x: wStart.x,
        y: wStart.y,
        dir: wStart.dir,
        holdingCoreId: null,
        holdingPower: 0,
        status: 'RUNNING',
        activeLine: cl.body.line,
        lastAction: 'スレッド起動',
        generator: (function* () {
          return { kind: 'unit' } as RustVal;
        })(),
      };
      wFiber.generator = (function* () {
        const res = yield* evalExpr(cl.body, cl.capturedEnv, wFiber, inUnsafe, localFns);
        wFiber.status = 'DONE';
        wFiber.lastAction = '完了';
        return res;
      })();
      fibers.push(wFiber);
      fiber.lastAction = 'thread::spawn()';
      yield 'tick';
      return { kind: 'struct', typeName: 'JoinHandle', fields: new Map() };
    }

    // ---- Workshop Robot & Puzzle Builtin Actions ----
    if (resolvedName === 'step' || resolvedName === 'move_forward') {
      const count = args[0]?.kind === 'int' ? Math.max(1, args[0].val) : 1;
      for (let c = 0; c < count; c++) {
        const dx = fiber.dir === 0 ? 1 : fiber.dir === 2 ? -1 : 0;
        const dy = fiber.dir === 1 ? 1 : fiber.dir === 3 ? -1 : 0;
        const nx = fiber.x + dx;
        const ny = fiber.y + dy;
        if (nx < 0 || ny < 0 || nx >= setup.width || ny >= setup.height || wallSet.has(`${nx},${ny}`)) {
          fiber.status = 'PANICKED';
          failureReason = `Tick ${tick}: (${nx}, ${ny}) の壁・工房の外にぶつかってしまいました！`;
          pendingCues.push({ kind: 'crash', x: fiber.x, y: fiber.y });
          throw new ControlSignal('panic', undefined, failureReason, expr.line);
        }
        // Check closed steam gate at this tick
        const gatesNow = getGatesAtTick(tick);
        const hitGate = gatesNow.find((g) => g.x === nx && g.y === ny && !g.isOpen);
        if (hitGate) {
          fiber.x = nx;
          fiber.y = ny;
          fiber.status = 'PANICKED';
          failureReason = `Tick ${tick}: 閉まっている蒸気ゲートにぶつかってしまいました！ is_gate_open() や wait_tick() で開くまで待とう。`;
          pendingCues.push({ kind: 'crash', x: nx, y: ny });
          throw new ControlSignal('panic', undefined, failureReason, expr.line);
        }
        fiber.x = nx;
        fiber.y = ny;
        // Conveyor push check
        const conv = (setup.conveyors ?? []).find((cv) => cv.x === fiber.x && cv.y === fiber.y);
        if (conv) {
          const cx = fiber.x + (conv.dir === 0 ? 1 : conv.dir === 2 ? -1 : 0);
          const cy = fiber.y + (conv.dir === 1 ? 1 : conv.dir === 3 ? -1 : 0);
          const convBlockedGate = gatesNow.some((g) => g.x === cx && g.y === cy && !g.isOpen);
          if (cx >= 0 && cy >= 0 && cx < setup.width && cy < setup.height && !wallSet.has(`${cx},${cy}`) && !convBlockedGate) {
            fiber.x = cx;
            fiber.y = cy;
          }
        }
        // Pressure switch activation
        if (switches.some((sw) => sw.x === fiber.x && sw.y === fiber.y)) {
          activeSwitchSet.add(`${fiber.x},${fiber.y}`);
          pendingCues.push({ kind: 'switch', x: fiber.x, y: fiber.y });
        }
        fiber.lastAction = 'step()';
        pendingCues.push({ kind: 'hop', x: fiber.x, y: fiber.y });
        yield 'tick';
      }
      return { kind: 'unit' };
    }
    if (resolvedName === 'turn_right') {
      fiber.dir = ((fiber.dir + 1) % 4) as Direction;
      fiber.lastAction = 'turn_right()';
      pendingCues.push({ kind: 'turn', x: fiber.x, y: fiber.y });
      yield 'tick';
      return { kind: 'unit' };
    }
    if (resolvedName === 'turn_left') {
      fiber.dir = ((fiber.dir + 3) % 4) as Direction;
      fiber.lastAction = 'turn_left()';
      pendingCues.push({ kind: 'turn', x: fiber.x, y: fiber.y });
      yield 'tick';
      return { kind: 'unit' };
    }
    if (resolvedName === 'wait_tick') {
      const count = args[0]?.kind === 'int' ? Math.max(1, args[0].val) : 1;
      for (let c = 0; c < count; c++) {
        fiber.lastAction = 'wait_tick()';
        yield 'tick';
      }
      return { kind: 'unit' };
    }
    if (resolvedName === 'is_gate_open') {
      const dx = fiber.dir === 0 ? 1 : fiber.dir === 2 ? -1 : 0;
      const dy = fiber.dir === 1 ? 1 : fiber.dir === 3 ? -1 : 0;
      const gatesNow = getGatesAtTick(tick);
      const aheadGate = gatesNow.find((g) => g.x === fiber.x + dx && g.y === fiber.y + dy);
      if (aheadGate) return { kind: 'bool', val: aheadGate.isOpen };
      return { kind: 'bool', val: true };
    }
    if (resolvedName === 'at_goal') {
      return { kind: 'bool', val: fiber.x === setup.goal.x && fiber.y === setup.goal.y };
    }
    if (resolvedName === 'is_wall_ahead') {
      const dx = fiber.dir === 0 ? 1 : fiber.dir === 2 ? -1 : 0;
      const dy = fiber.dir === 1 ? 1 : fiber.dir === 3 ? -1 : 0;
      const nx = fiber.x + dx;
      const ny = fiber.y + dy;
      const blocked = nx < 0 || ny < 0 || nx >= setup.width || ny >= setup.height || wallSet.has(`${nx},${ny}`);
      return { kind: 'bool', val: blocked };
    }
    if (resolvedName === 'is_wall_left') {
      const leftDir = (fiber.dir + 3) % 4;
      const dx = leftDir === 0 ? 1 : leftDir === 2 ? -1 : 0;
      const dy = leftDir === 1 ? 1 : leftDir === 3 ? -1 : 0;
      const nx = fiber.x + dx;
      const ny = fiber.y + dy;
      const blocked = nx < 0 || ny < 0 || nx >= setup.width || ny >= setup.height || wallSet.has(`${nx},${ny}`);
      return { kind: 'bool', val: blocked };
    }
    if (resolvedName === 'is_wall_right') {
      const rightDir = (fiber.dir + 1) % 4;
      const dx = rightDir === 0 ? 1 : rightDir === 2 ? -1 : 0;
      const dy = rightDir === 1 ? 1 : rightDir === 3 ? -1 : 0;
      const nx = fiber.x + dx;
      const ny = fiber.y + dy;
      const blocked = nx < 0 || ny < 0 || nx >= setup.width || ny >= setup.height || wallSet.has(`${nx},${ny}`);
      return { kind: 'bool', val: blocked };
    }
    if (resolvedName === 'is_spark_ahead') {
      const dx = fiber.dir === 0 ? 1 : fiber.dir === 2 ? -1 : 0;
      const dy = fiber.dir === 1 ? 1 : fiber.dir === 3 ? -1 : 0;
      const nx = fiber.x + dx;
      const ny = fiber.y + dy;
      const sparksNow = getSparksAtTick(tick);
      return { kind: 'bool', val: sparksNow.some((sp) => sp.x === nx && sp.y === ny) };
    }
    if (resolvedName === 'is_on_switch') {
      return { kind: 'bool', val: switches.some((sw) => sw.x === fiber.x && sw.y === fiber.y) };
    }
    if (resolvedName === 'has_core') {
      return { kind: 'bool', val: fiber.holdingCoreId !== null };
    }
    if (resolvedName === 'core_power') {
      return { kind: 'int', val: fiber.holdingPower };
    }
    if (resolvedName === 'bot_x') {
      return { kind: 'int', val: fiber.x };
    }
    if (resolvedName === 'bot_y') {
      return { kind: 'int', val: fiber.y };
    }
    if (resolvedName === 'goal_x') {
      return { kind: 'int', val: setup.goal.x };
    }
    if (resolvedName === 'goal_y') {
      return { kind: 'int', val: setup.goal.y };
    }
    if (resolvedName === 'bot_dir') {
      return { kind: 'int', val: fiber.dir };
    }
    if (resolvedName === 'elapsed_ticks') {
      return { kind: 'int', val: tick };
    }
    if (resolvedName === 'grab_core') {
      const adjacentCore = cores.find(
        (c) => !c.heldBy && !c.delivered && Math.abs(c.x - fiber.x) + Math.abs(c.y - fiber.y) <= 1
      );
      if (stage.victoryCondition.requireSpatialCoreRules && !adjacentCore) {
        fiber.status = 'PANICKED';
        failureReason = `Tick ${tick}: 現在地 (${fiber.x}, ${fiber.y}) の近くに拾えるコアがありません！コアのマスまで歩いてから grab_core() を呼ぼう。`;
        pendingCues.push({ kind: 'crash', x: fiber.x, y: fiber.y });
        throw new ControlSignal('panic', undefined, failureReason, expr.line);
      }
      const nearCore =
        adjacentCore ??
        cores.find((c) => !c.heldBy && !c.delivered);
      const coreId = nearCore?.id ?? `core_${nextCoreId++}`;
      const power = nearCore?.power ?? 1;
      const label = nearCore?.label ?? 'エネルギーコア';
      if (nearCore) nearCore.heldBy = fiber.id;
      fiber.holdingCoreId = coreId;
      fiber.holdingPower = power;
      fiber.lastAction = 'grab_core()';
      pendingCues.push({ kind: 'grab', x: fiber.x, y: fiber.y, text: label });
      yield 'tick';
      return { kind: 'core', id: coreId, power, label };
    }
    if (resolvedName === 'deliver') {
      if (stage.victoryCondition.requireSpatialCoreRules) {
        const atDelivery =
          deliveries.some((d) => d.x === fiber.x && d.y === fiber.y) ||
          (fiber.x === setup.goal.x && fiber.y === setup.goal.y);
        if (!atDelivery) {
          fiber.status = 'PANICKED';
          failureReason = `Tick ${tick}: 納品台またはゴールの上で deliver(core) を呼ぶ必要があります（現在地: ${fiber.x}, ${fiber.y}）。`;
          pendingCues.push({ kind: 'crash', x: fiber.x, y: fiber.y });
          throw new ControlSignal('panic', undefined, failureReason, expr.line);
        }
      }
      // Enforce Move!
      if (expr.args[0]?.kind === 'Ident') {
        const slot = env.get(expr.args[0].name);
        if (slot) {
          if (slot.moved) {
            failCompile(
              expr.line,
              'E0382',
              `移動済みの変数 '${expr.args[0].name}' をもう一度 deliver() に渡せません`,
              `所有権がもう残っていません。`,
              `渡す前に必要な処理を済ませよう！`
            );
          }
          slot.moved = true;
        }
      }
      const passed = args[0];
      const coreObj = passed?.kind === 'core' ? cores.find((c) => c.id === passed.id) : cores.find((c) => c.heldBy === fiber.id);
      if (coreObj) {
        coreObj.heldBy = null;
        coreObj.delivered = true;
        coreObj.x = deliveries[0]?.x ?? setup.goal.x;
        coreObj.y = deliveries[0]?.y ?? setup.goal.y;
      }
      fiber.holdingCoreId = null;
      fiber.lastAction = 'deliver()';
      pendingCues.push({ kind: 'deliver', x: fiber.x, y: fiber.y });
      yield 'tick';
      return { kind: 'unit' };
    }
    if (resolvedName === 'scan') {
      const arg = args[0];
      if (!arg || arg.kind !== 'ref') {
        failCompile(
          expr.line,
          'E0308',
          'scan() には所有権を渡さず参照 &core を渡してください',
          'スキャナーはコアを預かるだけなので、所有権ごと渡すと次の場所で困ってしまいます。',
          `scan(&core); のように '&' を付けて借用で渡そう！`
        );
      }
      if (
        stage.victoryCondition.requireSpatialCoreRules &&
        scanners.length > 0 &&
        !scanners.some((s) => s.x === fiber.x && s.y === fiber.y)
      ) {
        fiber.status = 'PANICKED';
        failureReason = `Tick ${tick}: &T検査台の上に乗って scan(&core) を実行する必要があります（現在地: ${fiber.x}, ${fiber.y}）。`;
        pendingCues.push({ kind: 'crash', x: fiber.x, y: fiber.y });
        throw new ControlSignal('panic', undefined, failureReason, expr.line);
      }
      scansCompleted += 1;
      fiber.lastAction = 'scan(&core)';
      pendingCues.push({ kind: 'scan', x: fiber.x, y: fiber.y });
      yield 'tick';
      return { kind: 'unit' };
    }
    if (resolvedName === 'boost') {
      const arg = args[0];
      if (!arg || arg.kind !== 'ref' || !arg.mutable) {
        return failCompile(
          expr.line,
          'E0308',
          'boost() には可変参照 &mut core が必要です',
          'コアのパワーを書き換えて強化するには、書き換え許可付きの借用（&mut）が必要です。',
          `let mut core = grab_core(); にして、boost(&mut core); のように '&mut' で渡そう！`
        );
      }
      if (
        stage.victoryCondition.requireSpatialCoreRules &&
        chargers.length > 0 &&
        !chargers.some((c) => c.x === fiber.x && c.y === fiber.y)
      ) {
        fiber.status = 'PANICKED';
        failureReason = `Tick ${tick}: &mut強化台の上に乗って boost(&mut core) を実行する必要があります（現在地: ${fiber.x}, ${fiber.y}）。`;
        pendingCues.push({ kind: 'crash', x: fiber.x, y: fiber.y });
        throw new ControlSignal('panic', undefined, failureReason, expr.line);
      }
      const targetCore = arg.slot.val;
      if (targetCore.kind === 'core') {
        targetCore.power += 2;
        const cEntry = cores.find((c) => c.id === targetCore.id);
        if (cEntry) cEntry.power = targetCore.power;
        fiber.holdingPower = targetCore.power;
      }
      fiber.lastAction = 'boost(&mut core)';
      pendingCues.push({ kind: 'boost', x: fiber.x, y: fiber.y });
      yield 'tick';
      return { kind: 'unit' };
    }
    if (resolvedName === 'secret_dial') {
      return { kind: 'int', val: setup.dial?.secret ?? 7 };
    }
    if (resolvedName === 'try_dial') {
      const guess = args[0]?.kind === 'int' ? args[0].val : 0;
      const secret = setup.dial?.secret ?? 7;
      pendingCues.push({
        kind: 'dial_check',
        x: setup.dial?.x ?? fiber.x,
        y: setup.dial?.y ?? fiber.y,
        text: String(guess),
      });
      yield 'tick';
      if (guess === secret) {
        dialSolved = true;
        return { kind: 'enum', enumName: 'Ordering', variant: 'Equal' };
      }
      return { kind: 'enum', enumName: 'Ordering', variant: guess < secret ? 'Less' : 'Greater' };
    }
    if (resolvedName === 'conveyor_batch') {
      const items = (setup.conveyorItems ?? [2, 5, 8, 12]).map((n) => ({ kind: 'int', val: n }) as RustVal);
      return { kind: 'vec', items };
    }
    if (resolvedName === 'cli_args') {
      const items = (setup.cliArgs ?? ['kobo', 'turbo', '3']).map((s) => ({ kind: 'str', val: s }) as RustVal);
      return { kind: 'vec', items };
    }
    if (resolvedName === 'env_flag') {
      return { kind: 'str', val: setup.envFlag ?? 'SAFE_MODE' };
    }
    if (resolvedName === 'job_queue') {
      const items = (setup.jobs ?? [1, 2, 3, 4]).map((n) => ({ kind: 'int', val: n }) as RustVal);
      return { kind: 'vec', items };
    }
    if (resolvedName === 'read_part') {
      const idx = args[0]?.kind === 'int' ? args[0].val : 0;
      if (idx < 0) {
        return {
          kind: 'enum',
          enumName: 'Result',
          variant: 'Err',
          payload: [{ kind: 'str', val: '壊れた部品ID' }],
        };
      }
      return {
        kind: 'enum',
        enumName: 'Result',
        variant: 'Ok',
        payload: [{ kind: 'int', val: idx * 10 }],
      };
    }
    if (resolvedName === 'raw_pointer_addr') {
      return { kind: 'ptr', targetVar: 'calibration', value: 42 };
    }
    if (resolvedName === 'add_vault') {
      const delta = args[0]?.kind === 'int' ? args[0].val : 1;
      vaultValue += delta;
      fiber.lastAction = `add_vault(${delta})`;
      yield 'tick';
      return { kind: 'unit' };
    }
    if (resolvedName === 'inspect_slice') {
      const slice = args[0];
      const len = slice?.kind === 'slice' ? slice.items.length : 0;
      scansCompleted += len;
      fiber.lastAction = `inspect_slice(${len})`;
      pendingCues.push({ kind: 'scan', x: fiber.x, y: fiber.y });
      yield 'tick';
      return { kind: 'int', val: len };
    }
    if (resolvedName === 'unlock_gate') {
      for (const g of setup.gates ?? []) {
        if (g.linkedSwitch) activeSwitchSet.add(`${g.linkedSwitch.x},${g.linkedSwitch.y}`);
      }
      fiber.lastAction = 'unlock_gate()';
      pendingCues.push({ kind: 'switch', x: fiber.x, y: fiber.y });
      yield 'tick';
      return { kind: 'unit' };
    }

    // Module function call (check pub visibility!)
    if (modFunctions.has(resolvedName)) {
      const { item: modFn } = modFunctions.get(resolvedName)!;
      if (!modFn.pub) {
        failCompile(
          expr.line,
          'E0603',
          `関数 '${resolvedName}' は非公開（プライベート）です`,
          `モジュール mod 内の関数は初期状態で非公開です。外から呼ぶことができません。`,
          `'pub fn ${modFn.name}...' のように前に 'pub' を付けて公開しよう！`
        );
      }
      return yield* invokeUserFn(modFn, args, expr.args, env, fiber, inUnsafe, localFns, expr.line);
    }

    // User-defined local or top-level function
    const userFn = localFns.get(resolvedName) ?? functions.get(resolvedName);
    if (userFn) {
      return yield* invokeUserFn(userFn, args, expr.args, env, fiber, inUnsafe, localFns, expr.line);
    }

    // Closure variable call (e.g. let calc = |x| x + bonus; calc(1))
    const localClosureSlot = env.get(resolvedName) ?? env.get(rawName);
    if (localClosureSlot?.val.kind === 'closure') {
      const cl = localClosureSlot.val;
      const cEnv = new Map(cl.capturedEnv);
      cl.params.forEach((p, idx) => {
        const val = args[idx] ?? { kind: 'unit' };
        cEnv.set(p, {
          name: p,
          mutable: false,
          typeName: inferTypeName(val),
          val,
          moved: false,
          immBorrowCount: 0,
          mutBorrowed: false,
        });
      });
      return yield* evalExpr(cl.body, cEnv, fiber, inUnsafe, localFns);
    }

    // Constructor / Static method on struct or enum (e.g. Robot::new(...), Command::Move(3))
    if (resolvedName.includes('::')) {
      const [typeName, methodName] = resolvedName.split('::');
      const mFn = implMethods.get(typeName)?.get(methodName);
      if (mFn) {
        return yield* invokeUserFn(mFn, args, expr.args, env, fiber, inUnsafe, localFns, expr.line);
      }
      const en = enums.get(typeName);
      if (en && en.variants.includes(methodName)) {
        return { kind: 'enum', enumName: typeName, variant: methodName, payload: args };
      }
    }

    failCompile(
      expr.line,
      'E0425',
      `関数 '${resolvedName}' が見つかりません`,
      `'${resolvedName}(...)' という関数やコマンドは定義されていないようです。`,
      `スペルミスがないか、または関数が定義されているか確認しよう！`
    );
    return { kind: 'unit' };
  }

  function* invokeUserFn(
    fnItem: Item & { kind: 'Fn' },
    args: RustVal[],
    argExprs: Expr[],
    callerEnv: Map<string, VarSlot>,
    fiber: FiberState,
    inUnsafe: boolean,
    localFns: Map<string, Item & { kind: 'Fn' }>,
    callLine: number
  ): Generator<string, RustVal, void> {
    if (fnItem.isUnsafe && !inUnsafe) {
      failCompile(
        callLine,
        'E0133',
        `unsafe 関数 '${fnItem.name}' は unsafe ブロックの中で呼ぶ必要があります`,
        `危険な操作を含む unsafe fn を普通の場所から直接呼ぶことはできません。`,
        `'unsafe { ${fnItem.name}(); }' のように囲んで呼び出そう！`
      );
    }

    // Enforce Move semantics when passing non-Copy values by value!
    for (let i = 0; i < fnItem.params.length; i++) {
      const p = fnItem.params[i];
      const aExpr = argExprs[i];
      const wantsRef = p.typeAnn?.startsWith('&');
      if (!wantsRef && aExpr?.kind === 'Ident') {
        const slot = callerEnv.get(aExpr.name);
        if (slot && !isCopyType(slot.val)) {
          slot.moved = true;
        }
      }
    }

    const fnEnv = new Map<string, VarSlot>();
    for (let i = 0; i < fnItem.params.length; i++) {
      const p = fnItem.params[i];
      const val = args[i] ?? { kind: 'unit' };
      fnEnv.set(p.name, {
        name: p.name,
        mutable: p.mutable,
        typeName: p.typeAnn ?? inferTypeName(val),
        val,
        moved: false,
        immBorrowCount: 0,
        mutBorrowed: false,
      });
    }

    try {
      if (fnItem.body.kind === 'Block') {
        return yield* evalBlock(fnItem.body, fnEnv, fiber, inUnsafe || fnItem.isUnsafe);
      }
      return { kind: 'unit' };
    } catch (sig) {
      if (sig instanceof ControlSignal && (sig.kind === 'return' || sig.kind === 'try_err')) {
        return sig.value ?? { kind: 'unit' };
      }
      throw sig;
    }
  }

  // Run #[test] functions deterministically first!
  for (const tf of testFns) {
    const dummyFiber: FiberState = {
      id: 'test_runner',
      label: 'テストランナー',
      x: setup.botStart.x,
      y: setup.botStart.y,
      dir: setup.botStart.dir,
      holdingCoreId: null,
      holdingPower: 0,
      status: 'RUNNING',
      activeLine: tf.line,
      lastAction: `#[test] ${tf.name}`,
      generator: (function* () {
        return { kind: 'unit' } as RustVal;
      })(),
    };
    try {
      const testGen = evalBlock(tf.body as Expr & { kind: 'Block' }, new Map(), dummyFiber, tf.isUnsafe);
      let step = testGen.next();
      let safety = 0;
      while (!step.done && safety++ < 80) {
        step = testGen.next();
      }
      testResults.push({ name: tf.name, passed: true, message: 'OK (テスト合格！)' });
      pendingCues.push({ kind: 'test_pass', x: setup.goal.x, y: setup.goal.y, text: tf.name });
    } catch (err) {
      if (staticDiagnostics.length > 0) {
        return {
          ok: false,
          diagnostics: staticDiagnostics,
          snapshots: [],
          cleared: false,
          totalTicks: 0,
          codeLines,
        };
      }
      const msg = err instanceof ControlSignal ? err.message ?? 'アサーション失敗' : 'テスト失敗';
      testResults.push({ name: tf.name, passed: false, message: msg });
    }
  }

  // Initialize main fiber at Tick 0
  const mainFiber: FiberState = {
    id: 'main',
    label: 'フェリスちゃん',
    x: setup.botStart.x,
    y: setup.botStart.y,
    dir: setup.botStart.dir,
    holdingCoreId: null,
    holdingPower: 0,
    status: 'RUNNING',
    activeLine: mainFn.line,
    lastAction: '起動準備完了',
    generator: (function* () {
      return { kind: 'unit' } as RustVal;
    })(),
  };
  mainFiber.generator = (function* () {
    try {
      if (mainFn.body.kind === 'Block') {
        const r = yield* evalBlock(mainFn.body, new Map(), mainFiber, mainFn.isUnsafe);
        mainFiber.status = 'DONE';
        mainFiber.lastAction = 'プログラム終了';
        return r;
      }
    } catch (sig) {
      if (sig instanceof ControlSignal) {
        if (sig.kind === 'return') {
          mainFiber.status = 'DONE';
          mainFiber.lastAction = 'プログラム終了';
          return sig.value ?? { kind: 'unit' };
        }
        if (sig.kind === 'try_err') {
          mainFiber.status = 'DONE';
          mainFiber.lastAction = '? で安全に早期終了';
          stderr.push('Errを検知し ? 演算子で安全に回復しました');
          return sig.value ?? { kind: 'unit' };
        }
      }
      throw sig;
    }
    mainFiber.status = 'DONE';
    return { kind: 'unit' };
  })();

  fibers.push(mainFiber);

  const captureMemory = (): MemoryEntry[] => {
    const out: MemoryEntry[] = [];
    for (const [name, slot] of globalMemory.entries()) {
      let ownership: OwnershipStatus = 'OWNED';
      let detail = '';
      if (slot.moved) {
        ownership = 'MOVED';
        detail = '別の場所へお引っ越し済み';
      } else if (slot.val.kind === 'rc' || slot.val.kind === 'arc') {
        ownership = 'RC_SHARED';
        detail = `参照カウント: ${slot.val.countRef.count}`;
      } else if (slot.val.kind === 'mutexGuard') {
        ownership = 'MUTEX_LOCKED';
        detail = '排他ロック取得中';
      } else if (slot.mutBorrowed) {
        ownership = 'MUT_BORROWED';
      } else if (slot.immBorrowCount > 0) {
        ownership = 'BORROWED';
      }
      out.push({
        name,
        typeName: slot.typeName,
        valuePreview: formatRustVal(slot.val),
        ownership,
        detail,
      });
    }
    return out;
  };

  const evaluateVictory = (curTick: number): { won: boolean; failMsg?: string } => {
    const vc = stage.victoryCondition;
    if (vc.reachGoal && (mainFiber.x !== setup.goal.x || mainFiber.y !== setup.goal.y)) {
      return { won: false, failMsg: `ゴール (${setup.goal.x}, ${setup.goal.y}) にまだ到達していません（現在位置: ${mainFiber.x}, ${mainFiber.y}）。` };
    }
    if (vc.workerReachGoal && setup.workerGoal) {
      const anyWorkerAtGoal = fibers.some(
        (f) => f.id !== 'main' && f.x === setup.workerGoal!.x && f.y === setup.workerGoal!.y
      );
      if (!anyWorkerAtGoal) {
        return { won: false, failMsg: '並列ワーカー（みるく号）がサブゴールに到達していません！' };
      }
    }
    if (vc.deliverCores !== undefined) {
      const deliveredCount = cores.filter((c) => c.delivered).length;
      if (deliveredCount < vc.deliverCores) {
        return { won: false, failMsg: `エネルギーコアの納品が足りません（${deliveredCount}/${vc.deliverCores}）。deliver(core) で届けよう！` };
      }
      if (vc.minCorePower !== undefined) {
        const okPower = cores.some((c) => c.delivered && c.power >= vc.minCorePower!);
        if (!okPower) {
          return { won: false, failMsg: `納品したコアのパワーが足りません（必要: ⚡${vc.minCorePower}以上）。boost(&mut core) で強化しよう！` };
        }
      }
    }
    if (vc.scanCount !== undefined && scansCompleted < vc.scanCount) {
      return { won: false, failMsg: `スキャン/検査回数が足りません（${scansCompleted}/${vc.scanCount}）。` };
    }
    if (vc.vaultTarget !== undefined && vaultValue < vc.vaultTarget) {
      return { won: false, failMsg: `共有金庫のエネルギーが目標に届きませんでした（${vaultValue}/${vc.vaultTarget}）。` };
    }
    if (vc.vaultExact !== undefined && vaultValue !== vc.vaultExact) {
      return { won: false, failMsg: `共有金庫の値が目標と一致しません（${vaultValue}/${vc.vaultExact}）。` };
    }
    if (vc.dialSolved && !dialSolved) {
      return { won: false, failMsg: 'ひみつダイヤルの数値がまだ一致していません！' };
    }
    if (vc.testsRequired !== undefined) {
      const passedCount = testResults.filter((t) => t.passed).length;
      if (passedCount < vc.testsRequired || testResults.some((t) => !t.passed)) {
        return { won: false, failMsg: `#[test] テストがすべて合格していません（合格 ${passedCount}/${vc.testsRequired}）。` };
      }
    }
    if (vc.jobsRequired !== undefined && jobsCompleted < vc.jobsRequired) {
      return { won: false, failMsg: `ThreadPool のジョブ完了数が不足しています（${jobsCompleted}/${vc.jobsRequired}）。` };
    }
    if (vc.stdoutIncludes) {
      const joined = stdout.join('\n');
      for (const req of vc.stdoutIncludes) {
        if (!joined.includes(req)) {
          return { won: false, failMsg: `println! の出力に '${req}' が含まれていません。` };
        }
      }
    }
    if (vc.stderrIncludes) {
      const joinedErr = stderr.join('\n');
      for (const req of vc.stderrIncludes) {
        if (!joinedErr.includes(req)) {
          return { won: false, failMsg: `eprintln! のエラー出力に '${req}' が含まれていません。` };
        }
      }
    }
    if (vc.requireAllSwitches && switches.length > 0) {
      const missingSwitch = switches.find((sw) => !activeSwitchSet.has(`${sw.x},${sw.y}`));
      if (missingSwitch) {
        return { won: false, failMsg: `床スイッチ (${missingSwitch.x}, ${missingSwitch.y}) がまだ踏まれていません！` };
      }
    }
    const effectiveMaxTicks =
      activeFastFeature && setup.featureFastMaxTicks
        ? setup.featureFastMaxTicks
        : vc.maxTicks;
    if (effectiveMaxTicks !== undefined && curTick > effectiveMaxTicks) {
      return { won: false, failMsg: `制限ティック数（${effectiveMaxTicks}ティック以内）を超えました（現在 ${curTick} ティック）。` };
    }
    return { won: true };
  };

  const makeSnapshot = (
    curTick: number,
    outcome: 'RUNNING' | 'CLEARED' | 'FAILED',
    failMsg?: string
  ): TickSnapshot => ({
    tick: curTick,
    threads: fibers.map((f): ThreadSnapshot => ({
      id: f.id,
      label: f.label,
      status: f.status,
      activeLine: f.activeLine,
      x: f.x,
      y: f.y,
      dir: f.dir,
      holdingCoreId: f.holdingCoreId,
      holdingPower: f.holdingPower,
      lastAction: f.lastAction,
    })),
    gates: getGatesAtTick(curTick),
    sparks: getSparksAtTick(curTick),
    cores: cores.map((c) => ({ ...c })),
    scansCompleted,
    switchesActive: Array.from(activeSwitchSet).map((s) => {
      const [x, y] = s.split(',').map(Number);
      return { x, y };
    }),
    vaultValue,
    dialSolved,
    jobsCompleted,
    memory: captureMemory(),
    stdout: [...stdout],
    stderr: [...stderr],
    testResults: [...testResults],
    cues: pendingCues.splice(0, pendingCues.length),
    outcome,
    failureReason: failMsg,
  });

  // Initial Tick 0 snapshot
  const snapshots: TickSnapshot[] = [makeSnapshot(0, 'RUNNING')];

  // Deterministic Lockstep Execution Loop (Max 240 ticks)
  const MAX_TICKS = 240;
  while (tick < MAX_TICKS) {
    const activeFibers = fibers.filter(
      (f) => f.status !== 'DONE' && f.status !== 'PANICKED'
    );
    if (activeFibers.length === 0) break;

    tick += 1;
    let crashed = false;

    for (const f of [...fibers]) {
      if (f.status === 'DONE' || f.status === 'PANICKED') continue;
      try {
        const res = f.generator.next();
        if (res.done) {
          f.status = 'DONE';
        }
      } catch (err) {
        if (staticDiagnostics.length > 0) {
          return {
            ok: false,
            diagnostics: staticDiagnostics,
            snapshots: [],
            cleared: false,
            totalTicks: 0,
            codeLines,
          };
        }
        f.status = 'PANICKED';
        if (!failureReason) {
          failureReason =
            err instanceof ControlSignal
              ? err.message ?? '実行中に停止しました。'
              : '実行中に予期しないエラーが発生しました。';
        }
        crashed = true;
        break;
      }
    }

    // Check Spark collisions deterministically at this tick
    if (!crashed) {
      const sparksNow = getSparksAtTick(tick);
      for (const f of fibers) {
        const hit = sparksNow.find((sp) => sp.x === f.x && sp.y === f.y);
        if (hit) {
          f.status = 'PANICKED';
          failureReason = `Tick ${tick}: 巡回スパーク（${hit.id}）に接触してしまいました！ タイミングをずらすか避けて進もう。`;
          pendingCues.push({ kind: 'crash', x: f.x, y: f.y });
          crashed = true;
          break;
        }
      }
    }

    if (crashed) {
      snapshots.push(makeSnapshot(tick, 'FAILED', failureReason));
      break;
    }

    // Check if victory already satisfied when all fibers finished (or mid-run for goal-only stages if all done)
    const allFinished = fibers.every((f) => f.status === 'DONE');
    if (allFinished) {
      const check = evaluateVictory(tick);
      if (check.won) {
        cleared = true;
        snapshots.push(makeSnapshot(tick, 'CLEARED'));
      } else {
        failureReason = check.failMsg;
        snapshots.push(makeSnapshot(tick, 'FAILED', failureReason));
      }
      break;
    }

    snapshots.push(makeSnapshot(tick, 'RUNNING'));
  }

  // If loop hit MAX_TICKS without finishing
  const lastSnap = snapshots[snapshots.length - 1];
  if (lastSnap && lastSnap.outcome === 'RUNNING') {
    const check = evaluateVictory(tick);
    if (check.won) {
      cleared = true;
      lastSnap.outcome = 'CLEARED';
    } else {
      failureReason = check.failMsg ?? '最大ティック数に達しました。';
      lastSnap.outcome = 'FAILED';
      lastSnap.failureReason = failureReason;
    }
  }

  return {
    ok: true,
    diagnostics: [],
    snapshots,
    cleared,
    failureReason,
    totalTicks: tick,
    codeLines,
  };
}
