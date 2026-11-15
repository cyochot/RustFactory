import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  X,
  Lock,
  Unlock,
  CheckCircle2,
  Trash2,
  ChevronDown,
  ChevronRight,
  Compass,
  ChevronsUpDown,
} from 'lucide-react';
import { ACT_META } from '../data/stages';
import { StageDefinition, StageKind, StageProgress } from '../types/game';

type AtlasStatusFilter = 'all' | 'uncleared' | 'cleared';
type AtlasKindFilter = 'all' | StageKind;

function getStageKind(st: StageDefinition): StageKind {
  if (st.stageKind) return st.stageKind;
  if (st.topicTag.includes('チャレンジ') || st.topicTag.includes('最終')) return 'challenge';
  if (st.topicTag.includes('パズル')) return 'puzzle';
  return 'basic';
}

const KIND_LABELS: Record<StageKind, { label: string; colorClass: string }> = {
  basic: { label: '基礎', colorClass: 'text-[#7C6154]' },
  puzzle: { label: 'パズル', colorClass: 'text-[#0F766E]' },
  challenge: { label: '挑戦', colorClass: 'text-[#BE123C]' },
};

interface StageAtlasModalProps {
  stages: StageDefinition[];
  progress: Record<string, StageProgress>;
  currentStageId: string;
  freeStudyMode: boolean;
  onToggleFreeStudy: () => void;
  onSelectStage: (stageId: string) => void;
  onRequestResetSave: () => void;
  onClose: () => void;
}

export const StageAtlasModal: React.FC<StageAtlasModalProps> = ({
  stages,
  progress,
  currentStageId,
  freeStudyMode,
  onToggleFreeStudy,
  onSelectStage,
  onRequestResetSave,
  onClose,
}) => {
  const activeStage = stages.find((s) => s.id === currentStageId) ?? stages[0];
  const [selectedAct, setSelectedAct] = useState<1 | 2 | 3 | 4 | 5>(activeStage.act);
  const [statusFilter, setStatusFilter] = useState<AtlasStatusFilter>('all');
  const [kindFilter, setKindFilter] = useState<AtlasKindFilter>('all');
  const [expandedChapters, setExpandedChapters] = useState<Set<number>>(
    () => new Set([activeStage.chapter])
  );
  const [pendingJumpId, setPendingJumpId] = useState<string | null>(null);
  const stageRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const actStages = useMemo(
    () => stages.filter((s) => s.act === selectedAct),
    [stages, selectedAct]
  );

  const chapterGroups = useMemo(() => {
    const groups: Array<{
      chapter: number;
      chapterTitle: string;
      allStages: StageDefinition[];
      filteredStages: StageDefinition[];
      clearedCount: number;
    }> = [];
    const byChap = new Map<number, (typeof groups)[number]>();

    for (const st of actStages) {
      let grp = byChap.get(st.chapter);
      if (!grp) {
        grp = {
          chapter: st.chapter,
          chapterTitle: st.chapterTitle,
          allStages: [],
          filteredStages: [],
          clearedCount: 0,
        };
        byChap.set(st.chapter, grp);
        groups.push(grp);
      }
      grp.allStages.push(st);
      const isCleared = Boolean(progress[st.id]?.cleared);
      if (isCleared) grp.clearedCount += 1;

      const matchesStatus =
        statusFilter === 'all' ||
        (statusFilter === 'cleared' && isCleared) ||
        (statusFilter === 'uncleared' && !isCleared);
      const matchesKind = kindFilter === 'all' || getStageKind(st) === kindFilter;
      if (matchesStatus && matchesKind) {
        grp.filteredStages.push(st);
      }
    }
    return groups;
  }, [actStages, progress, statusFilter, kindFilter]);

  const visibleGroups = useMemo(
    () => chapterGroups.filter((g) => g.filteredStages.length > 0),
    [chapterGroups]
  );

  const allVisibleExpanded =
    visibleGroups.length > 0 &&
    visibleGroups.every((g) => expandedChapters.has(g.chapter));

  useEffect(() => {
    if (!pendingJumpId) return;
    const el = stageRefs.current[pendingJumpId];
    if (el) {
      el.scrollIntoView({ block: 'center', behavior: 'smooth' });
      setPendingJumpId(null);
    }
  }, [pendingJumpId, selectedAct, expandedChapters, statusFilter]);

  const handleSelectAct = (actNum: 1 | 2 | 3 | 4 | 5) => {
    setSelectedAct(actNum);
    const actChapters = Array.from(
      new Set(stages.filter((s) => s.act === actNum).map((s) => s.chapter))
    );
    setExpandedChapters((prev) => {
      if (actChapters.some((ch) => prev.has(ch))) return prev;
      const next = new Set(prev);
      if (actNum === activeStage.act) {
        next.add(activeStage.chapter);
      } else if (actChapters.length > 0) {
        next.add(actChapters[0]);
      }
      return next;
    });
  };

  const toggleChapter = (chapter: number) => {
    setExpandedChapters((prev) => {
      const next = new Set(prev);
      if (next.has(chapter)) {
        next.delete(chapter);
      } else {
        next.add(chapter);
      }
      return next;
    });
  };

  const handleToggleExpandAll = () => {
    setExpandedChapters((prev) => {
      const next = new Set(prev);
      if (allVisibleExpanded) {
        for (const g of visibleGroups) next.delete(g.chapter);
      } else {
        for (const g of visibleGroups) next.add(g.chapter);
      }
      return next;
    });
  };

  const handleJumpToCurrent = () => {
    setSelectedAct(activeStage.act);
    setStatusFilter('all');
    setKindFilter('all');
    setExpandedChapters((prev) => {
      const next = new Set(prev);
      next.add(activeStage.chapter);
      return next;
    });
    setPendingJumpId(activeStage.id);
  };

  // Determine unlocked stages sequentially
  const isUnlocked = (st: StageDefinition): boolean => {
    if (freeStudyMode || st.index === 1) return true;
    const prev = stages.find((p) => p.index === st.index - 1);
    if (!prev) return true;
    return Boolean(progress[prev.id]?.cleared) || Boolean(progress[st.id]?.cleared);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#4A352B]/55 p-4">
      <div className="anime-card flex max-h-[88dvh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl bg-[#FFF8EE]">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-[#4A352B] bg-[#F7EBDA] px-5 py-4">
          <div>
            <h2 className="font-display text-xl font-extrabold text-[#4A352B]">
              Rust工房 ステージ地図（全{stages.length}ステージ）
            </h2>
            <p className="text-xs font-medium text-[#7C6154]">
              『プログラミング言語Rust 日本語版』第1章〜第20章を基礎・応用・実践で段階収録
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={onToggleFreeStudy}
              className={`anime-btn flex h-10 items-center gap-1.5 rounded-xl px-3 text-xs font-bold whitespace-nowrap shrink-0 cursor-pointer ${
                freeStudyMode
                  ? 'bg-[#CCFBF1] text-[#0F766E]'
                  : 'bg-[#FFFDF9] text-[#4A352B]'
              }`}
            >
              {freeStudyMode ? (
                <Unlock className="h-3.5 w-3.5" />
              ) : (
                <Lock className="h-3.5 w-3.5" />
              )}
              <span>{freeStudyMode ? '全章フリー解放 ON' : '順番にアンロック'}</span>
            </button>

            <button
              type="button"
              onClick={onRequestResetSave}
              title="セーブデータを初期化する"
              className="anime-btn flex h-10 items-center gap-1.5 rounded-xl bg-[#FFF1F2] px-3 text-xs font-bold text-[#BE123C] whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Trash2 className="h-3.5 w-3.5" />
              <span>データ初期化</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label="閉じる"
              className="anime-btn flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFFDF9] text-[#4A352B] shrink-0 cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* 5-Act Segmented Tabs */}
        <div className="flex flex-wrap gap-1.5 border-b border-[#E5D3BC] bg-[#FFFDF9] px-5 py-3">
          {ACT_META.map((act) => {
            const countCleared = stages.filter(
              (s) => s.act === act.act && progress[s.id]?.cleared
            ).length;
            const countTotal = stages.filter((s) => s.act === act.act).length;
            const active = selectedAct === act.act;
            return (
              <button
                key={act.act}
                type="button"
                onClick={() => handleSelectAct(act.act)}
                className={`rounded-xl border-2 px-3 py-2 text-left transition-colors cursor-pointer ${
                  active
                    ? 'border-[#4A352B] bg-[#F97316] text-white'
                    : 'border-[#E5D3BC] bg-[#FFF8EE] text-[#4A352B] hover:border-[#4A352B]'
                }`}
              >
                <div className="text-xs font-extrabold whitespace-nowrap">
                  {act.title}
                </div>
                <div
                  className={`text-[11px] tabular-nums whitespace-nowrap ${
                    active ? 'text-white/90' : 'text-[#7C6154]'
                  }`}
                >
                  {act.chaptersLabel} · {countCleared}/{countTotal}
                </div>
              </button>
            );
          })}
        </div>

        {/* Filter & Navigation Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 border-b border-[#E5D3BC] bg-[#FFF8EE] px-5 py-2.5">
          <div className="flex flex-wrap items-center gap-2">
            {/* Status Filter Segmented Control */}
            <div
              className="flex items-center gap-1 rounded-xl border border-[#E5D3BC] bg-[#F7EBDA] p-1"
              role="group"
              aria-label="クリア状況で絞り込む"
            >
              {(
                [
                  { id: 'all', label: 'すべて' },
                  { id: 'uncleared', label: '未クリア' },
                  { id: 'cleared', label: 'クリア済み' },
                ] as const
              ).map((opt) => {
                const active = statusFilter === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setStatusFilter(opt.id)}
                    className={`min-h-[32px] rounded-lg px-2.5 py-1 text-xs font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      active
                        ? 'bg-[#FFFDF9] text-[#4A352B] shadow-sm'
                        : 'text-[#7C6154] hover:text-[#4A352B]'
                    }`}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>

            {/* Kind Filter Segmented Control */}
            <div
              className="flex items-center gap-1 rounded-xl border border-[#E5D3BC] bg-[#F7EBDA] p-1"
              role="group"
              aria-label="難易度種別で絞り込む"
            >
              {(
                [
                  { id: 'all', label: '全種別' },
                  { id: 'basic', label: '基礎' },
                  { id: 'puzzle', label: 'パズル' },
                  { id: 'challenge', label: '挑戦' },
                ] as const
              ).map((opt) => {
                const active = kindFilter === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setKindFilter(opt.id)}
                    className={`min-h-[32px] rounded-lg px-2.5 py-1 text-xs font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      active
                        ? 'bg-[#FFFDF9] text-[#4A352B] shadow-sm'
                        : 'text-[#7C6154] hover:text-[#4A352B]'
                    }`}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleToggleExpandAll}
              disabled={visibleGroups.length === 0}
              className="flex min-h-[36px] items-center gap-1.5 rounded-xl border border-[#D9C0A3] bg-[#FFFDF9] px-3 text-xs font-bold text-[#4A352B] hover:border-[#4A352B] disabled:opacity-45 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <ChevronsUpDown className="h-3.5 w-3.5 text-[#7C6154]" />
              <span>{allVisibleExpanded ? 'すべて折りたたむ' : 'すべて展開'}</span>
            </button>

            <button
              type="button"
              onClick={handleJumpToCurrent}
              className="flex min-h-[36px] items-center gap-1.5 rounded-xl border-2 border-[#4A352B] bg-[#CCFBF1] px-3 text-xs font-extrabold text-[#0F766E] hover:bg-[#99F6E4] whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Compass className="h-3.5 w-3.5" />
              <span>現在のステージへ ({activeStage.id})</span>
            </button>
          </div>
        </div>

        {/* Chapter-Grouped Stage Accordions */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {visibleGroups.length === 0 ? (
            <div className="rounded-2xl border-2 border-dashed border-[#D9C0A3] bg-[#FFFDF9] p-8 text-center">
              <p className="text-sm font-bold text-[#4A352B]">
                {statusFilter === 'uncleared'
                  ? '条件に一致する未クリアステージはありません。'
                  : statusFilter === 'cleared'
                  ? '条件に一致するクリア済みステージがまだありません。'
                  : '条件に一致するステージがありません。'}
              </p>
              <button
                type="button"
                onClick={() => {
                  setStatusFilter('all');
                  setKindFilter('all');
                }}
                className="mt-3 inline-flex min-h-[40px] items-center justify-center rounded-xl border-2 border-[#4A352B] bg-[#FFF8EE] px-4 text-xs font-bold text-[#4A352B] hover:bg-[#F7EBDA] whitespace-nowrap cursor-pointer"
              >
                すべて表示に戻す
              </button>
            </div>
          ) : (
            visibleGroups.map((grp) => {
              const isExpanded = expandedChapters.has(grp.chapter);
              const containsCurrent = grp.filteredStages.some(
                (s) => s.id === currentStageId
              );

              return (
                <section
                  key={grp.chapter}
                  className="rounded-2xl border-2 border-[#E5D3BC] bg-[#FFFDF9] overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggleChapter(grp.chapter)}
                    aria-expanded={isExpanded}
                    className="flex w-full items-center justify-between gap-3 bg-[#F7EBDA]/75 px-4 py-3 text-left hover:bg-[#F7EBDA] transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      {isExpanded ? (
                        <ChevronDown className="h-4 w-4 shrink-0 text-[#4A352B]" />
                      ) : (
                        <ChevronRight className="h-4 w-4 shrink-0 text-[#4A352B]" />
                      )}
                      <h3 className="text-sm font-extrabold text-[#4A352B] truncate">
                        {grp.chapterTitle}
                      </h3>
                      {containsCurrent && (
                        <>
                          <span aria-hidden="true" className="text-[#D9C0A3]">
                            ·
                          </span>
                          <span className="text-xs font-extrabold text-[#EA580C] whitespace-nowrap shrink-0">
                            現在挑戦中
                          </span>
                        </>
                      )}
                    </div>

                    <div className="flex items-center gap-2 text-xs font-bold text-[#7C6154] tabular-nums whitespace-nowrap shrink-0">
                      <span>
                        {grp.clearedCount}/{grp.allStages.length} クリア
                      </span>
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="grid grid-cols-1 gap-3 border-t border-[#E5D3BC] p-4 sm:grid-cols-2">
                      {grp.filteredStages.map((st) => {
                        const stProg = progress[st.id];
                        const unlocked = isUnlocked(st);
                        const isCurrent = st.id === currentStageId;
                        const kindInfo = KIND_LABELS[getStageKind(st)];

                        return (
                          <button
                            key={st.id}
                            ref={(el) => {
                              stageRefs.current[st.id] = el;
                            }}
                            type="button"
                            disabled={!unlocked}
                            onClick={() => onSelectStage(st.id)}
                            className={`flex flex-col justify-between rounded-2xl border-2 p-4 text-left transition-transform duration-150 ${
                              !unlocked
                                ? 'border-[#E5D3BC] bg-[#F5EBDD] opacity-60 cursor-not-allowed'
                                : isCurrent
                                ? 'border-[#EA580C] bg-[#FFF7ED] shadow-[0_3px_0_#FDBA74] hover:-translate-y-0.5 cursor-pointer'
                                : 'border-[#4A352B] bg-white shadow-[0_3px_0_#D9C0A3] hover:-translate-y-0.5 cursor-pointer'
                            }`}
                          >
                            <div className="flex items-start justify-between gap-2">
                              <div className="min-w-0">
                                <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#7C6154]">
                                  <span className="font-code text-[#EA580C]">{st.id}</span>
                                  <span aria-hidden="true">·</span>
                                  <span className={kindInfo.colorClass}>{kindInfo.label}</span>
                                  <span aria-hidden="true">·</span>
                                  <span className="text-[#0F766E] truncate">
                                    {st.topicTag}
                                  </span>
                                </div>
                                <h4 className="mt-0.5 text-sm font-extrabold text-[#4A352B]">
                                  {st.title}
                                </h4>
                              </div>

                              {stProg?.cleared ? (
                                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#0D9488]" />
                              ) : !unlocked ? (
                                <Lock className="h-4 w-4 shrink-0 text-[#7C6154]" />
                              ) : null}
                            </div>

                            <div className="mt-3 flex items-center justify-between gap-3 text-xs">
                              <span className="min-w-0 flex-1 text-[#7C6154] truncate">
                                {st.goalSummary}
                              </span>

                              <span
                                className={`shrink-0 font-bold tabular-nums whitespace-nowrap ${
                                  stProg?.cleared
                                    ? 'text-[#0D9488]'
                                    : !unlocked
                                    ? 'text-[#9C8173]'
                                    : isCurrent
                                    ? 'text-[#EA580C]'
                                    : 'text-[#7C6154]'
                                }`}
                              >
                                {stProg?.cleared
                                  ? stProg.bestTicks !== undefined
                                    ? `クリア ${stProg.bestTicks}/${st.parTicks}T`
                                    : 'クリア済み'
                                  : !unlocked
                                  ? '未解放'
                                  : isCurrent
                                  ? '挑戦中'
                                  : `目標 ${st.parTicks}T`}
                              </span>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </section>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
