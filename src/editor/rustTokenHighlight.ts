import { syntaxTree } from '@codemirror/language';
import { RangeSetBuilder } from '@codemirror/state';
import { Decoration, DecorationSet, EditorView, ViewPlugin, ViewUpdate } from '@codemirror/view';

const ENUM_VARIANTS = new Set(['Some', 'None', 'Ok', 'Err', 'Less', 'Greater', 'Equal']);

const KNOWN_TYPES = new Set([
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

const WORKSHOP_APIS = new Set([
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

const fnMark = Decoration.mark({ class: 'cm-tok-fn' });
const enumMark = Decoration.mark({ class: 'cm-tok-enum' });
const typeMark = Decoration.mark({ class: 'cm-tok-type' });
const placeholderMark = Decoration.mark({ class: 'cm-tok-placeholder' });

interface TokenDecoRange {
  from: number;
  to: number;
  deco: Decoration;
}

function buildRustTokenDecorations(view: EditorView): DecorationSet {
  const ranges: TokenDecoRange[] = [];
  const doc = view.state.doc;
  const tree = syntaxTree(view.state);

  for (const { from, to } of view.visibleRanges) {
    tree.iterate({
      from,
      to,
      enter(node) {
        const name = node.name;

        // Highlight `{...}` placeholders and `\n` escapes inside string literals
        if (name === 'String' || name === 'RawString') {
          const slice = doc.sliceString(node.from, node.to);
          const re = /(\\[\\'"nrt0]|\\x[0-9A-Fa-f]{2}|\\u\{[0-9A-Fa-f_]+\}|\{[^{}\n]*\})/g;
          let m: RegExpExecArray | null;
          while ((m = re.exec(slice)) !== null) {
            const rFrom = node.from + m.index;
            const rTo = rFrom + m[0].length;
            if (rFrom < rTo) {
              ranges.push({ from: rFrom, to: rTo, deco: placeholderMark });
            }
          }
          return false;
        }

        if (name === 'LineComment' || name === 'BlockComment' || name === 'Char') {
          return false;
        }

        if (name === 'Identifier' || name === 'TypeIdentifier') {
          const text = doc.sliceString(node.from, node.to);
          const parentName = node.node.parent?.name;
          const grandParentName = node.node.parent?.parent?.name;

          if (ENUM_VARIANTS.has(text)) {
            ranges.push({ from: node.from, to: node.to, deco: enumMark });
            return;
          }

          // Associated function call: e.g. `Arc::new()`, `thread::spawn()`, `String::from()`
          if (parentName === 'ScopedIdentifier' && grandParentName === 'CallExpression') {
            ranges.push({ from: node.from, to: node.to, deco: fnMark });
            return;
          }

          if (WORKSHOP_APIS.has(text)) {
            ranges.push({ from: node.from, to: node.to, deco: fnMark });
            return;
          }

          if (KNOWN_TYPES.has(text) && parentName !== 'CallExpression') {
            ranges.push({ from: node.from, to: node.to, deco: typeMark });
          }
        }
      },
    });
  }

  ranges.sort((a, b) => a.from - b.from || a.to - b.to);

  const builder = new RangeSetBuilder<Decoration>();
  let lastTo = -1;
  for (const r of ranges) {
    if (r.from < lastTo || r.from >= r.to) continue;
    builder.add(r.from, r.to, r.deco);
    lastTo = r.to;
  }

  return builder.finish();
}

export const rustTokenHighlightPlugin = ViewPlugin.fromClass(
  class {
    decorations: DecorationSet;

    constructor(view: EditorView) {
      this.decorations = buildRustTokenDecorations(view);
    }

    update(update: ViewUpdate) {
      if (update.docChanged || update.viewportChanged || syntaxTree(update.state) !== syntaxTree(update.startState)) {
        this.decorations = buildRustTokenDecorations(update.view);
      }
    }
  },
  {
    decorations: (v) => v.decorations,
  }
);
