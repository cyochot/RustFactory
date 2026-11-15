import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {
  EditorSelection,
  EditorState,
  Prec,
  RangeSetBuilder,
  StateEffect,
  StateField,
} from '@codemirror/state';
import {
  Decoration,
  DecorationSet,
  EditorView,
  drawSelection,
  gutter,
  GutterMarker,
  highlightActiveLine,
  highlightActiveLineGutter,
  keymap,
  lineNumbers,
  ViewUpdate,
} from '@codemirror/view';
import {
  bracketMatching,
  HighlightStyle,
  indentOnInput,
  indentUnit,
  syntaxHighlighting,
} from '@codemirror/language';
import {
  defaultKeymap,
  history,
  historyKeymap,
  indentLess,
  indentMore,
  redo,
  undo,
} from '@codemirror/commands';
import {
  acceptCompletion,
  autocompletion,
  closeBrackets,
  closeBracketsKeymap,
  completionKeymap,
  nextSnippetField,
  prevSnippetField,
} from '@codemirror/autocomplete';
import { Diagnostic as CmDiagnostic, linter, setDiagnostics } from '@codemirror/lint';
import { rust, rustLanguage } from '@codemirror/lang-rust';
import { tags as t } from '@lezer/highlight';
import { Redo2, Sparkles, Undo2 } from 'lucide-react';
import { CompilerDiagnostic, InStagePhase, StageDefinition } from '../types/game';
import { createWorkshopRustCompletionSource } from './rustCompletions';
import { formatRustCode } from './rustFormatter';
import { createWorkshopRustHoverExtension } from './rustHover';
import { rustTokenHighlightPlugin } from './rustTokenHighlight';

export interface RustCodeEditorHandle {
  insertAtCursor: (snippet: string) => void;
  focusLine: (line: number, col?: number) => void;
  formatCode: () => void;
}

interface RustCodeEditorProps {
  stage: StageDefinition;
  code: string;
  phase: InStagePhase;
  activeLines: number[];
  diagnostics: CompilerDiagnostic[];
  onChangeCode: (next: string) => void;
  onCompileAndRun: () => void;
}

// ============================================================================
// 1. LINE STATE DECORATIONS (Execution Line & Error Line)
// ============================================================================

interface LineHighlightsPayload {
  activeLines: number[];
  errorLines: number[];
}

const setLineHighlightsEffect = StateEffect.define<LineHighlightsPayload>();

const activeExecLineDeco = Decoration.line({ class: 'cm-exec-line' });
const errorLineDeco = Decoration.line({ class: 'cm-error-line' });

const lineHighlightField = StateField.define<DecorationSet>({
  create() {
    return Decoration.none;
  },
  update(decos, tr) {
    for (const eff of tr.effects) {
      if (eff.is(setLineHighlightsEffect)) {
        const { activeLines, errorLines } = eff.value;
        const activeSet = new Set(activeLines);
        const errorSet = new Set(errorLines);
        const builder = new RangeSetBuilder<Decoration>();
        const doc = tr.state.doc;

        const allLines = Array.from(new Set([...activeLines, ...errorLines])).sort(
          (a, b) => a - b
        );
        for (const lineNum of allLines) {
          if (lineNum < 1 || lineNum > doc.lines) continue;
          const line = doc.line(lineNum);
          if (errorSet.has(lineNum)) {
            builder.add(line.from, line.from, errorLineDeco);
          } else if (activeSet.has(lineNum)) {
            builder.add(line.from, line.from, activeExecLineDeco);
          }
        }
        return builder.finish();
      }
    }
    return decos.map(tr.changes);
  },
  provide: (f) => EditorView.decorations.from(f),
});

class StatusMarker extends GutterMarker {
  constructor(private kind: 'exec' | 'error') {
    super();
  }
  toDOM() {
    const el = document.createElement('span');
    el.className =
      this.kind === 'error' ? 'cm-gutter-badge-error' : 'cm-gutter-badge-exec';
    el.textContent = this.kind === 'error' ? '!' : '▶';
    return el;
  }
}

const statusGutterState = StateField.define<LineHighlightsPayload>({
  create() {
    return { activeLines: [], errorLines: [] };
  },
  update(val, tr) {
    for (const eff of tr.effects) {
      if (eff.is(setLineHighlightsEffect)) return eff.value;
    }
    return val;
  },
});

const statusGutterExtension = gutter({
  class: 'cm-status-gutter',
  lineMarker(view, line) {
    const { activeLines, errorLines } = view.state.field(statusGutterState);
    const lineNo = view.state.doc.lineAt(line.from).number;
    if (errorLines.includes(lineNo)) return new StatusMarker('error');
    if (activeLines.includes(lineNo)) return new StatusMarker('exec');
    return null;
  },
  initialSpacer() {
    return new StatusMarker('exec');
  },
});

// ============================================================================
// 2. COCOA ATELIER THEME & SYNTAX HIGHLIGHTING
// ============================================================================

const cocoaAtelierTheme = EditorView.theme(
  {
    '&': {
      backgroundColor: '#2C211D',
      color: '#FFF8EE',
      height: '100%',
      fontSize: '13px',
      fontFamily: '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace',
    },
    '.cm-scroller': {
      overflow: 'auto',
      lineHeight: '1.65',
      fontFamily: '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace',
    },
    '.cm-content': {
      padding: '10px 4px',
      caretColor: '#FDBA74',
    },
    '.cm-cursor, .cm-dropCursor': {
      borderLeftColor: '#FDBA74',
      borderLeftWidth: '2px',
    },
    '&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection':
      {
        backgroundColor: 'rgba(249, 115, 22, 0.34)',
      },
    '.cm-activeLine': {
      backgroundColor: 'rgba(255, 248, 238, 0.05)',
    },
    '.cm-gutters': {
      backgroundColor: '#231916',
      color: '#A38A7D',
      borderRight: '1px solid #3E2E27',
      fontVariantNumeric: 'tabular-nums',
      userSelect: 'none',
    },
    '.cm-lineNumbers .cm-gutterElement': {
      padding: '0 8px 0 6px',
      minWidth: '30px',
    },
    '.cm-activeLineGutter': {
      backgroundColor: '#362722',
      color: '#FDE68A',
      fontWeight: '700',
    },
    '.cm-status-gutter': {
      width: '16px',
      paddingLeft: '4px',
    },
    '.cm-gutter-badge-exec': {
      color: '#FBBF24',
      fontSize: '10px',
      fontWeight: '800',
    },
    '.cm-gutter-badge-error': {
      color: '#FB7185',
      fontSize: '11px',
      fontWeight: '800',
    },
    '.cm-exec-line': {
      backgroundColor: 'rgba(217, 119, 6, 0.22)',
      boxShadow: 'inset 3px 0 0 #F59E0B',
    },
    '.cm-error-line': {
      backgroundColor: 'rgba(190, 18, 60, 0.24)',
      boxShadow: 'inset 3px 0 0 #FB7185',
    },
    '.cm-matchingBracket, .cm-nonmatchingBracket': {
      backgroundColor: 'rgba(251, 191, 36, 0.22)',
      outline: '1px solid rgba(251, 191, 36, 0.55)',
      borderRadius: '2px',
    },
    // Autocomplete popup & Japanese info drawer
    '.cm-tooltip': {
      backgroundColor: '#231916',
      border: '2px solid #5E4539',
      borderRadius: '12px',
      boxShadow: '0 10px 25px rgba(24, 15, 11, 0.55)',
      color: '#FFF8EE',
      overflow: 'hidden',
      zIndex: '60',
    },
    '.cm-tooltip-autocomplete > ul': {
      fontFamily: '"JetBrains Mono", ui-monospace, monospace',
      fontSize: '12px',
      maxHeight: '220px',
      minWidth: '210px',
    },
    '.cm-tooltip-autocomplete > ul > li': {
      padding: '5px 10px',
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      borderBottom: '1px solid rgba(255, 248, 238, 0.05)',
    },
    '.cm-tooltip-autocomplete > ul > li[aria-selected]': {
      backgroundColor: '#EA580C',
      color: '#FFFFFF',
    },
    '.cm-completionLabel': {
      fontWeight: '600',
    },
    '.cm-completionDetail': {
      marginLeft: 'auto',
      fontSize: '11px',
      opacity: '0.8',
      fontStyle: 'normal',
    },
    '.cm-tooltip.cm-completionInfo, .cm-tooltip.cm-tooltip-hover': {
      padding: '10px 12px',
      maxWidth: '340px',
      fontFamily: '"M PLUS Rounded 1c", system-ui, sans-serif',
      backgroundColor: '#2A1E1A',
      border: '2px solid #5E4539',
    },
    '.cm-tooltip.cm-tooltip-hover': {
      zIndex: '65',
    },
    '.cm-rust-doc-info': {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
    },
    '.cm-rust-doc-header': {
      display: 'flex',
      flexDirection: 'column',
      gap: '2px',
    },
    '.cm-rust-doc-cat': {
      fontSize: '10px',
      fontWeight: '700',
      color: '#FDBA74',
    },
    '.cm-rust-doc-sig': {
      fontFamily: '"JetBrains Mono", monospace',
      fontSize: '11px',
      color: '#5EEAD4',
      fontWeight: '600',
      wordBreak: 'break-word',
    },
    '.cm-rust-doc-desc': {
      margin: '0',
      fontSize: '11.5px',
      lineHeight: '1.5',
      color: '#FFF8EE',
    },
    '.cm-rust-doc-note': {
      fontSize: '11px',
      lineHeight: '1.4',
      color: '#FDE68A',
      backgroundColor: 'rgba(245, 158, 11, 0.14)',
      borderRadius: '6px',
      padding: '4px 7px',
    },
    '.cm-rust-doc-example': {
      margin: '0',
      padding: '6px 8px',
      borderRadius: '6px',
      backgroundColor: '#1B1310',
      color: '#FDE047',
      fontFamily: '"JetBrains Mono", monospace',
      fontSize: '11px',
      lineHeight: '1.45',
      whiteSpace: 'pre-wrap',
      wordBreak: 'break-word',
      overflowX: 'auto',
    },
    // Lint squiggle & tooltip
    '.cm-lintRange-error': {
      backgroundImage: 'none',
      textDecoration: 'underline wavy #FB7185',
      textUnderlineOffset: '3px',
    },
    '.cm-diagnostic': {
      padding: '6px 10px',
      fontFamily: '"M PLUS Rounded 1c", system-ui, sans-serif',
      fontSize: '12px',
      lineHeight: '1.45',
    },
    '.cm-diagnostic-error': {
      borderLeft: '3px solid #FB7185',
      color: '#FFF8EE',
    },
    '.cm-tok-fn': {
      color: '#2DD4BF',
      fontWeight: '600',
    },
    '.cm-tok-enum': {
      color: '#C4B5FD',
      fontWeight: '600',
    },
    '.cm-tok-type': {
      color: '#67E8F9',
      fontWeight: '600',
    },
    '.cm-tok-placeholder': {
      color: '#FDBA74',
      fontWeight: '600',
    },
  },
  { dark: true }
);

const cocoaRustHighlight = HighlightStyle.define([
  { tag: [t.keyword, t.controlKeyword, t.definitionKeyword, t.moduleKeyword, t.self], color: '#FB923C', fontWeight: '700' },
  { tag: [t.operatorKeyword, t.modifier], color: '#F472B6', fontWeight: '600' },
  { tag: [t.function(t.variableName), t.function(t.definition(t.variableName)), t.function(t.propertyName), t.macroName], color: '#2DD4BF', fontWeight: '600' },
  { tag: [t.typeName, t.standard(t.typeName), t.namespace], color: '#67E8F9', fontWeight: '600' },
  { tag: [t.string, t.special(t.string), t.character], color: '#FDE047' },
  { tag: [t.escape], color: '#FDBA74', fontWeight: '600' },
  { tag: [t.number, t.integer, t.float, t.bool], color: '#FBBF24' },
  { tag: [t.special(t.variableName), t.labelName], color: '#F472B6', fontStyle: 'italic' },
  { tag: [t.variableName, t.definition(t.variableName)], color: '#FFF8EE' },
  { tag: [t.propertyName], color: '#FDE68A' },
  { tag: [t.operator, t.derefOperator, t.arithmeticOperator, t.logicOperator, t.bitwiseOperator, t.compareOperator, t.updateOperator, t.definitionOperator], color: '#F5D0FE' },
  { tag: [t.bracket, t.paren, t.squareBracket, t.brace, t.angleBracket], color: '#D9C0A3' },
  { tag: [t.punctuation, t.separator], color: '#C9B2A2' },
  { tag: [t.attributeName, t.meta], color: '#FDBA74' },
  { tag: [t.comment, t.lineComment, t.blockComment], color: '#A88E80', fontStyle: 'italic' },
]);

export const RustCodeEditor = forwardRef<RustCodeEditorHandle, RustCodeEditorProps>(
  (
    { stage, code, phase, activeLines, diagnostics, onChangeCode, onCompileAndRun },
    ref
  ) => {
    const hostRef = useRef<HTMLDivElement | null>(null);
    const viewRef = useRef<EditorView | null>(null);
    const stageRef = useRef<StageDefinition>(stage);
    const onChangeRef = useRef(onChangeCode);
    const onRunRef = useRef(onCompileAndRun);
    const isExternalSyncRef = useRef(false);

    const [cursorInfo, setCursorInfo] = useState({ line: 1, col: 1 });
    const [justFormatted, setJustFormatted] = useState(false);

    stageRef.current = stage;
    onChangeRef.current = onChangeCode;
    onRunRef.current = onCompileAndRun;

    const performFormat = () => {
      const view = viewRef.current;
      if (!view) return;
      const current = view.state.doc.toString();
      const formatted = formatRustCode(current);
      if (formatted === current) return;

      const cursorLine = view.state.doc.lineAt(view.state.selection.main.head).number;
      view.dispatch({
        changes: { from: 0, to: current.length, insert: formatted },
      });
      const targetLineNum = Math.min(cursorLine, view.state.doc.lines);
      const targetLine = view.state.doc.line(targetLineNum);
      view.dispatch({
        selection: EditorSelection.cursor(targetLine.to),
      });
      view.focus();
      setJustFormatted(true);
      window.setTimeout(() => setJustFormatted(false), 1200);
    };

    const formatRef = useRef(performFormat);
    formatRef.current = performFormat;

    useImperativeHandle(ref, () => ({
      insertAtCursor(snippet: string) {
        const view = viewRef.current;
        if (!view) return;
        const { from, to } = view.state.selection.main;
        const commentMatch = snippet.match(/\/\*[^*]*\*\//);
        const emptyQuoteIdx = snippet.indexOf('""');
        let nextSelection = EditorSelection.cursor(from + snippet.length);
        if (commentMatch && commentMatch.index !== undefined) {
          const selStart = from + commentMatch.index;
          nextSelection = EditorSelection.range(
            selStart,
            selStart + commentMatch[0].length
          );
        } else if (emptyQuoteIdx !== -1) {
          nextSelection = EditorSelection.cursor(from + emptyQuoteIdx + 1);
        }
        view.dispatch({
          changes: { from, to, insert: snippet },
          selection: nextSelection,
          scrollIntoView: true,
        });
        view.focus();
      },
      focusLine(line: number, col = 1) {
        const view = viewRef.current;
        if (!view) return;
        const clampedLine = Math.max(1, Math.min(line, view.state.doc.lines));
        const lineInfo = view.state.doc.line(clampedLine);
        const pos = Math.min(lineInfo.to, lineInfo.from + Math.max(0, col - 1));
        view.dispatch({
          selection: EditorSelection.cursor(pos),
          scrollIntoView: true,
        });
        view.focus();
      },
      formatCode() {
        formatRef.current();
      },
    }));

    // Initialize CodeMirror instance once
    useEffect(() => {
      const host = hostRef.current;
      if (!host) return;

      const completionSource = createWorkshopRustCompletionSource(
        () => stageRef.current
      );

      // Avoid auto-closing single quotes so Rust lifetimes ('a, 'static) type naturally
      const rustCloseBracketsConfig = rustLanguage.data.of({
        closeBrackets: {
          brackets: ['(', '[', '{', '"'],
          before: ')]}:;,',
        },
      });

      const customKeymap = Prec.highest(
        keymap.of([
          {
            key: 'Mod-Enter',
            run: () => {
              onRunRef.current();
              return true;
            },
          },
          {
            key: 'Shift-Alt-f',
            run: () => {
              formatRef.current();
              return true;
            },
          },
          {
            key: 'Mod-Shift-f',
            run: () => {
              formatRef.current();
              return true;
            },
          },
          {
            key: 'Tab',
            run: (view) => {
              if (acceptCompletion(view)) return true;
              if (nextSnippetField(view)) return true;
              return indentMore(view);
            },
          },
          {
            key: 'Shift-Tab',
            run: (view) => {
              if (prevSnippetField(view)) return true;
              return indentLess(view);
            },
          },
        ])
      );

      const updateListener = EditorView.updateListener.of((update: ViewUpdate) => {
        if (update.docChanged && !isExternalSyncRef.current) {
          onChangeRef.current(update.state.doc.toString());
        }
        if (update.selectionSet || update.docChanged) {
          const head = update.state.selection.main.head;
          const ln = update.state.doc.lineAt(head);
          setCursorInfo({ line: ln.number, col: head - ln.from + 1 });
        }
      });

      const state = EditorState.create({
        doc: code,
        extensions: [
          cocoaAtelierTheme,
          syntaxHighlighting(cocoaRustHighlight),
          rust(),
          rustTokenHighlightPlugin,
          rustCloseBracketsConfig,
          indentUnit.of('    '),
          EditorState.tabSize.of(4),
          statusGutterExtension,
          lineNumbers(),
          highlightActiveLineGutter(),
          highlightActiveLine(),
          drawSelection(),
          history(),
          indentOnInput(),
          bracketMatching(),
          closeBrackets(),
          autocompletion({
            override: [completionSource],
            activateOnTyping: true,
            maxRenderedOptions: 14,
            icons: true,
          }),
          createWorkshopRustHoverExtension(),
          linter(null),
          lineHighlightField,
          statusGutterState,
          customKeymap,
          keymap.of([
            ...closeBracketsKeymap,
            ...completionKeymap,
            ...historyKeymap,
            ...defaultKeymap,
          ]),
          EditorView.contentAttributes.of({
            'aria-label': 'Rustコードエディタ',
          }),
          updateListener,
        ],
      });

      const view = new EditorView({
        state,
        parent: host,
      });
      viewRef.current = view;

      return () => {
        view.destroy();
        viewRef.current = null;
      };
      // Mount once; external updates are synchronized via the effect below
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Sync external code changes (stage switch, starter code reset)
    useEffect(() => {
      const view = viewRef.current;
      if (!view) return;
      const current = view.state.doc.toString();
      if (current === code) return;

      isExternalSyncRef.current = true;
      view.dispatch({
        changes: { from: 0, to: current.length, insert: code },
      });
      isExternalSyncRef.current = false;
    }, [code]);

    // Sync active execution line & compiler diagnostic highlights + lint tooltips
    useEffect(() => {
      const view = viewRef.current;
      if (!view) return;

      const execLines =
        phase === 'RUNNING' || phase === 'PAUSED_SIM' ? activeLines : [];
      const errorLines = diagnostics.map((d) => d.line);

      const cmDiagnostics: CmDiagnostic[] = [];
      for (const d of diagnostics) {
        if (d.line < 1 || d.line > view.state.doc.lines) continue;
        const lineObj = view.state.doc.line(d.line);
        const from = Math.min(lineObj.to, lineObj.from + Math.max(0, d.col - 1));
        const to = Math.max(from + 1, lineObj.to);
        cmDiagnostics.push({
          from: Math.min(from, lineObj.to),
          to: Math.min(to, view.state.doc.length),
          severity: 'error',
          message: `[${d.code}] ${d.title} — ${d.tip}`,
        });
      }

      view.dispatch(
        setDiagnostics(view.state, cmDiagnostics),
        {
          effects: setLineHighlightsEffect.of({
            activeLines: execLines,
            errorLines,
          }),
        }
      );
    }, [activeLines, diagnostics, phase, code]);

    return (
      <div className="flex min-h-[175px] flex-[1.3] flex-col overflow-hidden rounded-2xl border-2 border-[#4A352B] bg-[#2C211D] shadow-[0_4px_0_#D9C0A3]">
        {/* Compact Cocoa Editor Utility Bar */}
        <div className="flex shrink-0 items-center justify-between gap-2 border-b border-[#3E2E27] bg-[#231916] px-3 py-1.5 text-[11px] text-[#C9B2A2]">
          <div className="flex items-center gap-2 whitespace-nowrap shrink-0">
            <span className="font-code font-bold text-[#FB923C]">Rust</span>
            <span aria-hidden="true" className="text-[#5E4539]">
              ·
            </span>
            <span className="font-code tabular-nums">
              Ln {cursorInfo.line}, Col {cursorInfo.col}
            </span>
          </div>

          <div className="flex items-center gap-1 shrink-0">
            <button
              type="button"
              onClick={() => {
                const v = viewRef.current;
                if (v) {
                  undo(v);
                  v.focus();
                }
              }}
              title="元に戻す (Ctrl+Z)"
              className="flex h-7 items-center gap-1 rounded-md px-2 text-[11px] font-bold text-[#D9C0A3] hover:bg-[#3A2B25] hover:text-[#FFF8EE] whitespace-nowrap cursor-pointer"
            >
              <Undo2 className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">戻す</span>
            </button>
            <button
              type="button"
              onClick={() => {
                const v = viewRef.current;
                if (v) {
                  redo(v);
                  v.focus();
                }
              }}
              title="やり直す (Ctrl+Y)"
              className="flex h-7 items-center gap-1 rounded-md px-2 text-[11px] font-bold text-[#D9C0A3] hover:bg-[#3A2B25] hover:text-[#FFF8EE] whitespace-nowrap cursor-pointer"
            >
              <Redo2 className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">やり直し</span>
            </button>
            <button
              type="button"
              onClick={performFormat}
              title="インデントと空白を整形 (Shift+Alt+F)"
              className={`flex h-7 items-center gap-1 rounded-md px-2.5 text-[11px] font-bold transition-colors whitespace-nowrap cursor-pointer ${
                justFormatted
                  ? 'bg-[#0F766E] text-[#CCFBF1]'
                  : 'bg-[#3A2B25] text-[#FDE68A] hover:bg-[#4A352B] hover:text-white'
              }`}
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>{justFormatted ? '整形完了' : 'コード整形'}</span>
            </button>
          </div>
        </div>

        {/* CodeMirror Host */}
        <div ref={hostRef} className="min-h-0 flex-1 overflow-hidden" />
      </div>
    );
  }
);

RustCodeEditor.displayName = 'RustCodeEditor';
