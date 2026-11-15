import {
  Completion,
  CompletionContext,
  CompletionResult,
  snippetCompletion,
} from '@codemirror/autocomplete';
import { StageDefinition } from '../types/game';
import {
  MACRO_ENTRIES,
  METHOD_ENTRIES,
  RUST_SYNTAX_ENTRIES,
  RustDocEntry,
  STD_TYPES_AND_CONCURRENCY,
  WORKSHOP_API_ENTRIES,
} from './rustDocs';
import { createRustDocInfoElement } from './rustHover';

function createDocInfoNode(entry: RustDocEntry): () => Node {
  return () => createRustDocInfoElement(entry);
}

function computeStageBoost(entry: RustDocEntry, stage: StageDefinition): number {
  const haystack = `${stage.topicTag} ${stage.goalSummary} ${stage.bookKeyCode} ${stage.starterCode} ${stage.quickChips.map((c) => c.label).join(' ')}`;
  if (haystack.includes(entry.label)) return 40;
  if (entry.keywords?.some((kw) => haystack.includes(kw))) return 22;
  if (entry.category.startsWith('工房')) return 10;
  return 0;
}

function extractDocumentSymbols(docText: string): Completion[] {
  const seen = new Set<string>();
  const out: Completion[] = [];

  const fnMatches = docText.matchAll(/\bfn\s+([A-Za-z_][A-Za-z0-9_]*)/g);
  for (const m of fnMatches) {
    const name = m[1];
    if (name !== 'main' && !seen.has(name)) {
      seen.add(name);
      out.push({
        label: name,
        type: 'function',
        detail: '現在のコードの関数',
        boost: 15,
      });
    }
  }

  const varMatches = docText.matchAll(/\blet\s+(?:mut\s+)?([A-Za-z_][A-Za-z0-9_]*)/g);
  for (const m of varMatches) {
    const name = m[1];
    if (name !== '_' && !seen.has(name)) {
      seen.add(name);
      out.push({
        label: name,
        type: 'variable',
        detail: '現在のコードの変数',
        boost: 18,
      });
    }
  }

  const typeMatches = docText.matchAll(/\b(?:struct|enum|trait)\s+([A-Za-z_][A-Za-z0-9_]*)/g);
  for (const m of typeMatches) {
    const name = m[1];
    if (!seen.has(name)) {
      seen.add(name);
      out.push({
        label: name,
        type: 'type',
        detail: '現在のコードの型',
        boost: 15,
      });
    }
  }

  return out;
}

function buildCompletionOption(entry: RustDocEntry, stage: StageDefinition): Completion {
  const boost = computeStageBoost(entry, stage);
  const info = createDocInfoNode(entry);
  if (entry.snippet) {
    return snippetCompletion(entry.snippet, {
      label: entry.label,
      type: entry.type,
      detail: entry.detail,
      info,
      boost,
    });
  }
  return {
    label: entry.label,
    type: entry.type,
    detail: entry.detail,
    info,
    boost,
  };
}

export function createWorkshopRustCompletionSource(getStage: () => StageDefinition) {
  return (context: CompletionContext): CompletionResult | null => {
    const stage = getStage();
    const line = context.state.doc.lineAt(context.pos);
    const textBeforeCursor = line.text.slice(0, context.pos - line.from);

    // 1) Dot-method completion: `core.` or `rx.re`
    const dotMatch = textBeforeCursor.match(/\.([A-Za-z0-9_]*)$/);
    if (dotMatch) {
      const from = context.pos - dotMatch[1].length;
      return {
        from,
        options: METHOD_ENTRIES.map((e) => buildCompletionOption(e, stage)),
        validFor: /^[A-Za-z0-9_]*$/,
      };
    }

    // 2) Attribute completion: `#[`
    const attrMatch = textBeforeCursor.match(/(#\[[A-Za-z0-9_(= "]*)$/);
    if (attrMatch) {
      const from = context.pos - attrMatch[1].length;
      const attrEntries = RUST_SYNTAX_ENTRIES.filter((e) => e.label.startsWith('#['));
      return {
        from,
        options: attrEntries.map((e) => buildCompletionOption(e, stage)),
      };
    }

    // 3) Standard identifier / macro / path completion (supports `Ordering::`, `println!`)
    const word = context.matchBefore(/[A-Za-z_#][A-Za-z0-9_:!]*/);
    if (!word && !context.explicit) return null;

    const from = word ? word.from : context.pos;
    const allEntries = [
      ...WORKSHOP_API_ENTRIES,
      ...MACRO_ENTRIES,
      ...RUST_SYNTAX_ENTRIES,
      ...STD_TYPES_AND_CONCURRENCY,
    ];

    const docSymbols = extractDocumentSymbols(context.state.doc.toString());
    const knownLabels = new Set(allEntries.map((e) => e.label));
    const uniqueDocSymbols = docSymbols.filter((s) => !knownLabels.has(s.label));

    return {
      from,
      options: [
        ...allEntries.map((e) => buildCompletionOption(e, stage)),
        ...uniqueDocSymbols,
      ],
      validFor: /^[A-Za-z0-9_:!#]*$/,
    };
  };
}
