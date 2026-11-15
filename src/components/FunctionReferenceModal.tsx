import React, { useEffect, useMemo, useState } from 'react';
import {
  Check,
  Code2,
  Copy,
  Plus,
  Search,
  X,
} from 'lucide-react';
import {
  getStageFunctionDocs,
  ReferenceCategoryGroup,
  StageFunctionDoc,
} from '../editor/rustDocs';
import { RustCodeBlock } from '../editor/rustSyntaxHighlight';
import { StageDefinition } from '../types/game';

interface FunctionReferenceModalProps {
  stage: StageDefinition;
  onInsertCode: (snippet: string) => void;
  onClose: () => void;
}

const CATEGORY_ORDER: ReferenceCategoryGroup[] = [
  '工房API',
  'マクロ',
  '標準関数',
  'メソッド',
];

export const FunctionReferenceModal: React.FC<FunctionReferenceModalProps> = ({
  stage,
  onInsertCode,
  onClose,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<'すべて' | ReferenceCategoryGroup>('すべて');
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null);

  useEffect(() => {
    setSearchQuery('');
    setSelectedGroup('すべて');
    setCopiedLabel(null);
  }, [stage.id]);

  const stageDocs = useMemo(() => getStageFunctionDocs(stage), [stage]);

  const availableGroups = useMemo(() => {
    const counts = new Map<ReferenceCategoryGroup, number>();
    for (const doc of stageDocs) {
      counts.set(doc.refGroup, (counts.get(doc.refGroup) ?? 0) + 1);
    }
    return CATEGORY_ORDER.filter((g) => (counts.get(g) ?? 0) > 0).map((g) => ({
      group: g,
      count: counts.get(g) ?? 0,
    }));
  }, [stageDocs]);

  const filteredDocs = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return stageDocs.filter((doc) => {
      if (selectedGroup !== 'すべて' && doc.refGroup !== selectedGroup) {
        return false;
      }
      if (!q) return true;
      const haystack = [
        doc.label,
        doc.detail,
        doc.category,
        doc.description,
        doc.ownershipNote ?? '',
        doc.example ?? '',
        ...(doc.keywords ?? []),
      ]
        .join(' ')
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [searchQuery, selectedGroup, stageDocs]);

  const handleCopy = async (doc: StageFunctionDoc) => {
    const text = doc.example ?? doc.insertText;
    try {
      await navigator.clipboard.writeText(text);
      setCopiedLabel(doc.label);
      window.setTimeout(() => {
        setCopiedLabel((prev) => (prev === doc.label ? null : prev));
      }, 1400);
    } catch {
      // Clipboard may be unavailable in restricted contexts; fall back silently
    }
  };

  const handleInsert = (doc: StageFunctionDoc) => {
    onInsertCode(doc.insertText);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#4A352B]/55 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="function-ref-title"
    >
      <div className="anime-card flex max-h-[88dvh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl bg-[#FFF8EE]">
        {/* Header */}
        <div className="flex items-center justify-between gap-3 border-b-2 border-[#4A352B] bg-[#F7EBDA] px-5 py-4">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-2 border-[#4A352B] bg-[#CCFBF1] text-[#0F766E]">
              <Code2 className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[11px] font-bold text-[#7C6154]">
                <span>{stage.chapterTitle}</span>
                <span aria-hidden="true">·</span>
                <span className="truncate">{stage.title}</span>
                <span aria-hidden="true">·</span>
                <span className="tabular-nums text-[#0F766E]">
                  関連 {stageDocs.length}件
                </span>
              </div>
              <h2
                id="function-ref-title"
                className="font-display text-lg font-extrabold text-[#4A352B]"
              >
                使用できる関数リファレンス
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="関数リファレンスを閉じる"
            className="anime-btn flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFFDF9] text-[#4A352B] cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Search & Category Filter Toolbar */}
        <div className="space-y-3 border-b border-[#E5D3BC] bg-[#FFFDF9] px-5 py-3.5">
          <div className="relative flex items-center">
            <Search className="pointer-events-none absolute left-3.5 h-4 w-4 text-[#7C6154]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="関数名・機能・キーワードで検索（例: step, 所有権, unwrap）"
              aria-label="関数を検索"
              className="h-10 w-full rounded-xl border-2 border-[#D9C0A3] bg-[#FFF8EE] pl-10 pr-10 text-xs font-medium text-[#4A352B] placeholder:text-[#9C8173] focus:border-[#4A352B] focus:outline-none"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                aria-label="検索をクリア"
                className="absolute right-2 flex h-7 w-7 items-center justify-center rounded-lg text-[#7C6154] hover:bg-[#F7EBDA] hover:text-[#4A352B] cursor-pointer"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>

          <div
            className="flex flex-wrap items-center gap-1.5"
            role="tablist"
            aria-label="カテゴリ絞り込み"
          >
            <button
              type="button"
              role="tab"
              aria-selected={selectedGroup === 'すべて'}
              onClick={() => setSelectedGroup('すべて')}
              className={`flex h-10 items-center gap-1.5 rounded-xl border-2 px-3.5 text-xs font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                selectedGroup === 'すべて'
                  ? 'border-[#4A352B] bg-[#F97316] text-white'
                  : 'border-[#E5D3BC] bg-[#FFF8EE] text-[#4A352B] hover:border-[#4A352B]'
              }`}
            >
              <span>すべて</span>
              <span className="font-code tabular-nums opacity-90">
                ({stageDocs.length})
              </span>
            </button>

            {availableGroups.map(({ group, count }) => {
              const active = selectedGroup === group;
              return (
                <button
                  key={group}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedGroup(group)}
                  className={`flex h-10 items-center gap-1.5 rounded-xl border-2 px-3.5 text-xs font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    active
                      ? 'border-[#4A352B] bg-[#F97316] text-white'
                      : 'border-[#E5D3BC] bg-[#FFF8EE] text-[#4A352B] hover:border-[#4A352B]'
                  }`}
                >
                  <span>{group}</span>
                  <span className="font-code tabular-nums opacity-90">
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Scrollable Reference List */}
        <div className="flex-1 space-y-3 overflow-y-auto p-5">
          {filteredDocs.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#D9C0A3] bg-[#FFFDF9] px-6 py-10 text-center">
              <p className="text-sm font-bold text-[#4A352B]">
                条件に一致する関数が見つかりませんでした
              </p>
              <p className="mt-1 text-xs text-[#7C6154]">
                別のキーワードを試すか、カテゴリ絞り込みを「すべて」に戻してみてください。
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedGroup('すべて');
                }}
                className="anime-btn mt-4 flex h-10 items-center rounded-xl bg-[#CCFBF1] px-4 text-xs font-extrabold text-[#0F766E] whitespace-nowrap cursor-pointer"
              >
                絞り込みをリセット
              </button>
            </div>
          ) : (
            filteredDocs.map((doc) => {
              const isCopied = copiedLabel === doc.label;
              return (
                <article
                  key={`${doc.refGroup}-${doc.label}`}
                  className={`rounded-2xl border-2 bg-white p-4 ${
                    doc.isPrimary
                      ? 'border-[#4A352B] shadow-[0_3px_0_#D9C0A3]'
                      : 'border-[#D9C0A3]'
                  }`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[11px] font-bold text-[#7C6154]">
                        <span
                          className={
                            doc.isPrimary ? 'text-[#EA580C]' : 'text-[#7C6154]'
                          }
                        >
                          {doc.isPrimary ? 'このステージで注目' : '基本操作'}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{doc.category}</span>
                      </div>

                      <h3 className="mt-1 font-code text-sm font-bold text-[#0F766E] break-all">
                        {doc.detail}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        type="button"
                        onClick={() => handleCopy(doc)}
                        title="コード例をコピー"
                        className="anime-btn flex h-10 items-center gap-1.5 rounded-xl bg-[#FFFDF9] px-3 text-xs font-bold text-[#4A352B] whitespace-nowrap shrink-0 cursor-pointer"
                      >
                        {isCopied ? (
                          <>
                            <Check className="h-3.5 w-3.5 text-[#0D9488]" />
                            <span className="text-[#0F766E]">コピー済み</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-3.5 w-3.5" />
                            <span>コピー</span>
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={() => handleInsert(doc)}
                        className="anime-btn flex h-10 items-center gap-1.5 rounded-xl bg-[#F97316] px-3.5 text-xs font-extrabold text-white whitespace-nowrap shrink-0 cursor-pointer"
                      >
                        <Plus className="h-3.5 w-3.5" />
                        <span>エディタに挿入</span>
                      </button>
                    </div>
                  </div>

                  <p className="mt-2.5 text-xs leading-relaxed text-[#4A352B]">
                    {doc.description}
                  </p>

                  {doc.ownershipNote && (
                    <div className="mt-2.5 rounded-xl border border-[#F59E0B]/45 bg-[#FEF9C3] px-3 py-2 text-xs font-semibold text-[#92400E]">
                      所有権・安全メモ: {doc.ownershipNote}
                    </div>
                  )}

                  {doc.example && (
                    <div className="mt-2.5 overflow-hidden rounded-xl border-2 border-[#4A352B] bg-[#2C211D] px-3.5 py-2.5">
                      <RustCodeBlock
                        code={doc.example}
                        className="text-xs leading-5"
                      />
                    </div>
                  )}
                </article>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
