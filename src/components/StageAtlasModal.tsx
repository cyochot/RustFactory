import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  X,
  Lock,
  Unlock,
  CheckCircle2,
  Trash2,
  Compass,
} from 'lucide-react';
import { getStageDisplayTitle } from '../data/stages';
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
  const [selectedChapter, setSelectedChapter] = useState<number | 'all'>('all');
  const [statusFilter, setStatusFilter] = useState<AtlasStatusFilter>('all');
  const [kindFilter, setKindFilter] = useState<AtlasKindFilter>('all');
  const [pendingJumpId, setPendingJumpId] = useState<string | null>(null);
  const stageRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const chapterStages = useMemo(
    () => stages
      .filter((s) => selectedChapter === 'all' || s.chapter === selectedChapter)
      .sort((a, b) => a.index - b.index),
    [stages, selectedChapter]
  );

  const filteredStages = useMemo(
    () => chapterStages.filter((st) => {
      const isCleared = Boolean(progress[st.id]?.cleared);
      const matchesStatus =
        statusFilter === 'all' ||
        (statusFilter === 'cleared' && isCleared) ||
        (statusFilter === 'uncleared' && !isCleared);
      const matchesKind = kindFilter === 'all' || getStageKind(st) === kindFilter;
      return matchesStatus && matchesKind;
    }),
    [chapterStages, progress, statusFilter, kindFilter]
  );

  useEffect(() => {
    if (!pendingJumpId) return;
    const el = stageRefs.current[pendingJumpId];
    if (el) {
      el.scrollIntoView({ block: 'center', behavior: 'smooth' });
      setPendingJumpId(null);
    }
  }, [pendingJumpId, selectedChapter, statusFilter, kindFilter]);

  const handleJumpToCurrent = () => {
    setSelectedChapter('all');
    setStatusFilter('all');
    setKindFilter('all');
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

        {/* Filter & Navigation Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 border-b border-[#E5D3BC] bg-[#FFF8EE] px-5 py-2.5">
          <div className="flex flex-wrap items-center gap-2">
            <label className="flex min-h-[38px] items-center gap-2 rounded-xl border border-[#E5D3BC] bg-[#FFFDF9] px-3 text-xs font-bold text-[#4A352B]">
              <span>章</span>
              <select
                value={selectedChapter}
                onChange={(event) => setSelectedChapter(event.target.value === 'all' ? 'all' : Number(event.target.value))}
                aria-label="章で絞り込む"
                className="max-w-[180px] bg-transparent font-bold outline-none"
              >
                <option value="all">全章・全体順</option>
                {Array.from(new Set(stages.map((stage) => stage.chapter))).sort((a, b) => a - b).map((chapter) => (
                  <option key={chapter} value={chapter}>{`第${chapter}章`}</option>
                ))}
              </select>
            </label>

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
              onClick={handleJumpToCurrent}
              className="flex min-h-[36px] items-center gap-1.5 rounded-xl border-2 border-[#4A352B] bg-[#CCFBF1] px-3 text-xs font-extrabold text-[#0F766E] hover:bg-[#99F6E4] whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Compass className="h-3.5 w-3.5" />
              <span>現在のステージへ ({activeStage.displayId})</span>
            </button>
          </div>
        </div>

        {/* Flat Stage List */}
        <div className="flex-1 overflow-y-auto p-5">
          {filteredStages.length === 0 ? (
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
            <div className="flex flex-col gap-3">
              {filteredStages.map((st) => {
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
                        <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-bold text-[#7C6154]">
                          <span className="rounded-md bg-[#4A352B] px-1.5 py-0.5 font-code tabular-nums text-white">
                            #{String(st.index).padStart(3, '0')}
                          </span>
                          <span className="font-code text-[#EA580C]">{st.displayId}</span>
                          <span aria-hidden="true">·</span>
                          <span>{`第${st.chapter}章 ${st.chapterTitle}`}</span>
                          <span aria-hidden="true">·</span>
                          <span className={kindInfo.colorClass}>{kindInfo.label}</span>
                          <span aria-hidden="true">·</span>
                          <span className="text-[#0F766E] truncate">
                            {st.topicTag}
                          </span>
                        </div>
                        <h4 className="mt-0.5 text-sm font-extrabold text-[#4A352B]">
                          {getStageDisplayTitle(st)}
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
        </div>
      </div>
    </div>
  );
};
