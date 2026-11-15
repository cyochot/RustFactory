import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  BookHeart,
  Lock,
  Play,
  X,
  ChevronDown,
  ChevronRight,
  Compass,
  ChevronsUpDown,
} from 'lucide-react';
import { STORY_CHARACTERS } from '../data/storyCharacters';
import { getStageStory, getStoryChapterTitle } from '../data/storyScripts';
import {
  SeenStoryMap,
  StageDefinition,
  StageProgress,
  StoryBeatPhase,
} from '../types/game';
import { StoryCharacterAvatar } from './StoryCharacterAvatar';

type StoryStatusFilter = 'all' | 'unsolved' | 'solved';

interface StoryLogModalProps {
  stages: StageDefinition[];
  progress: Record<string, StageProgress>;
  seenStories: SeenStoryMap;
  freeStudyMode: boolean;
  currentStageId?: string;
  onPlayStoryBeat: (stageUUID: string, phase: StoryBeatPhase) => void;
  onClose: () => void;
}

export const StoryLogModal: React.FC<StoryLogModalProps> = ({
  stages,
  progress,
  seenStories,
  freeStudyMode,
  currentStageId,
  onPlayStoryBeat,
  onClose,
}) => {
  const activeStage =
    (currentStageId ? stages.find((s) => s.id === currentStageId) : undefined) ??
    stages[0];

  const [statusFilter, setStatusFilter] = useState<StoryStatusFilter>('all');
  const [expandedChapters, setExpandedChapters] = useState<Set<number>>(
    () => new Set([activeStage.chapter])
  );
  const [pendingJumpId, setPendingJumpId] = useState<string | null>(null);
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const chapterGroups = useMemo(() => {
    const groups: Array<{
      chapter: number;
      chapterTitle: string;
      allStages: StageDefinition[];
      filteredStages: StageDefinition[];
      solvedCount: number;
    }> = [];
    const byChap = new Map<number, (typeof groups)[number]>();

    for (const st of [...stages].sort((a, b) => a.index - b.index)) {
      let grp = byChap.get(st.chapter);
      if (!grp) {
        grp = {
          chapter: st.chapter,
          chapterTitle: getStoryChapterTitle(st.chapter),
          allStages: [],
          filteredStages: [],
          solvedCount: 0,
        };
        byChap.set(st.chapter, grp);
        groups.push(grp);
      }
      grp.allStages.push(st);
      const isSolved = Boolean(progress[st.id]?.cleared);
      if (isSolved) grp.solvedCount += 1;

      const matchesFilter =
        statusFilter === 'all' ||
        (statusFilter === 'solved' && isSolved) ||
        (statusFilter === 'unsolved' && !isSolved);
      if (matchesFilter) {
        grp.filteredStages.push(st);
      }
    }
    return groups.sort((a, b) => a.chapter - b.chapter);
  }, [stages, progress, statusFilter]);

  const visibleGroups = useMemo(
    () => chapterGroups.filter((g) => g.filteredStages.length > 0),
    [chapterGroups]
  );

  const allVisibleExpanded =
    visibleGroups.length > 0 &&
    visibleGroups.every((g) => expandedChapters.has(g.chapter));

  useEffect(() => {
    if (!pendingJumpId) return;
    const el = cardRefs.current[pendingJumpId];
    if (el) {
      el.scrollIntoView({ block: 'center', behavior: 'smooth' });
      setPendingJumpId(null);
    }
  }, [pendingJumpId, expandedChapters, statusFilter]);

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
    setStatusFilter('all');
    setExpandedChapters((prev) => {
      const next = new Set(prev);
      next.add(activeStage.chapter);
      return next;
    });
    setPendingJumpId(activeStage.id);
  };

  const isStageUnlocked = (st: StageDefinition): boolean => {
    if (freeStudyMode || st.index === 1) return true;
    const prev = stages.find((p) => p.index === st.index - 1);
    if (!prev) return true;
    return Boolean(progress[prev.id]?.cleared) || Boolean(progress[st.id]?.cleared);
  };

  const seenCount = stages.filter(
    (s) => seenStories[s.id]?.intro || progress[s.id]?.cleared
  ).length;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#4A352B]/55 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="story-log-title"
    >
      <div className="anime-card flex max-h-[88dvh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl bg-[#FFF8EE]">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-[#4A352B] bg-[#F7EBDA] px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-2 border-[#4A352B] bg-[#FFF7ED] text-[#EA580C]">
              <BookHeart className="h-5 w-5" />
            </div>
            <div>
              <h2
                id="story-log-title"
                className="font-display text-xl font-extrabold text-[#4A352B]"
              >
                歯車町の依頼ノート（全{stages.length}話）
              </h2>
              <p className="text-xs font-medium text-[#7C6154] tabular-nums">
                町のみんなから届いた小さな頼みごと · 閲覧済み {seenCount} / {stages.length} 話
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="閉じる"
            className="anime-btn flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFFDF9] text-[#4A352B] shrink-0 cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Filter & Navigation Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 border-b border-[#E5D3BC] bg-[#FFF8EE] px-5 py-2.5">
          <div
            className="flex items-center gap-1 rounded-xl border border-[#E5D3BC] bg-[#F7EBDA] p-1"
            role="group"
            aria-label="解決状況で絞り込む"
          >
            {(
              [
                { id: 'all', label: 'すべて' },
                { id: 'unsolved', label: '未解決' },
                { id: 'solved', label: '解決済み' },
              ] as const
            ).map((opt) => {
              const active = statusFilter === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setStatusFilter(opt.id)}
                  className={`min-h-[32px] rounded-lg px-3 py-1 text-xs font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
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
              <span>現在の話へ ({activeStage.displayId})</span>
            </button>
          </div>
        </div>

        {/* Chapter-Grouped Episode Accordions */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {visibleGroups.length === 0 ? (
            <div className="rounded-2xl border-2 border-dashed border-[#D9C0A3] bg-[#FFFDF9] p-8 text-center">
              <p className="text-sm font-bold text-[#4A352B]">
                {statusFilter === 'unsolved'
                  ? '未解決の依頼はありません（すべて解決済みです！）'
                  : statusFilter === 'solved'
                  ? '解決済みの依頼はまだありません。'
                  : '表示できる依頼はありません。'}
              </p>
              <button
                type="button"
                onClick={() => setStatusFilter('all')}
                className="mt-3 inline-flex min-h-[40px] items-center justify-center rounded-xl border-2 border-[#4A352B] bg-[#FFF8EE] px-4 text-xs font-bold text-[#4A352B] hover:bg-[#F7EBDA] whitespace-nowrap cursor-pointer"
              >
                すべて表示に戻す
              </button>
            </div>
          ) : (
            visibleGroups.map((grp) => {
              const isExpanded = expandedChapters.has(grp.chapter);
              const containsCurrent = grp.filteredStages.some(
                (s) => s.id === activeStage.id
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
                            現在の依頼
                          </span>
                        </>
                      )}
                    </div>

                    <div className="text-xs font-bold text-[#7C6154] tabular-nums whitespace-nowrap shrink-0">
                      解決 {grp.solvedCount}/{grp.allStages.length}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="grid grid-cols-1 gap-3 border-t border-[#E5D3BC] p-4 sm:grid-cols-2">
                      {grp.filteredStages.map((st) => {
                        const story = getStageStory(st.id);
                        if (!story) return null;
                        const client = STORY_CHARACTERS[story.client];
                        const unlocked = isStageUnlocked(st);
                        const cleared = Boolean(progress[st.id]?.cleared);
                        const canPlayIntro =
                          unlocked || Boolean(seenStories[st.id]?.intro);
                        const canPlayOutro =
                          freeStudyMode ||
                          cleared ||
                          Boolean(seenStories[st.id]?.outro);
                        const isCurrent = st.id === activeStage.id;

                        return (
                          <div
                            key={st.id}
                            ref={(el) => {
                              cardRefs.current[st.id] = el;
                            }}
                            className={`flex flex-col justify-between gap-3 rounded-2xl border-2 p-4 ${
                              !canPlayIntro
                                ? 'border-[#E5D3BC] bg-[#F5EBDD] opacity-70'
                                : isCurrent
                                ? 'border-[#EA580C] bg-[#FFF7ED] shadow-[0_3px_0_#FDBA74]'
                                : 'border-[#4A352B] bg-white shadow-[0_3px_0_#D9C0A3]'
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              <StoryCharacterAvatar speakerId={story.client} size="sm" />
                              <div className="min-w-0 flex-1">
                                <div className="flex flex-wrap items-center gap-x-1.5 text-[11px] font-bold text-[#7C6154]">
                                  <span className="font-code text-[#EA580C]">
                                    {st.displayId}
                                  </span>
                                  <span aria-hidden="true">·</span>
                                  <span style={{ color: client.accentColor }}>
                                    {client.name}
                                  </span>
                                  <span aria-hidden="true">·</span>
                                  <span>
                                    {cleared
                                      ? '解決済み'
                                      : canPlayIntro
                                      ? '受注可能'
                                      : '未解放'}
                                  </span>
                                </div>
                                <h4 className="mt-0.5 text-sm font-extrabold text-[#4A352B] truncate">
                                  {story.requestTitle}
                                </h4>
                                <p className="mt-1 text-xs text-[#7C6154] line-clamp-2">
                                  {canPlayIntro
                                    ? story.intro[0]?.text
                                    : '前の依頼を解決すると読めるようになります。'}
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center gap-2 pt-1">
                              <button
                                type="button"
                                disabled={!canPlayIntro}
                                onClick={() => onPlayStoryBeat(st.id, 'intro')}
                                className="anime-btn flex min-h-[40px] flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#FFF8EE] px-3 text-xs font-bold text-[#4A352B] disabled:opacity-45 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
                              >
                                {canPlayIntro ? (
                                  <Play className="h-3.5 w-3.5 text-[#F97316] fill-current" />
                                ) : (
                                  <Lock className="h-3.5 w-3.5" />
                                )}
                                <span>はじまりを読む</span>
                              </button>

                              <button
                                type="button"
                                disabled={!canPlayOutro}
                                onClick={() => onPlayStoryBeat(st.id, 'outro')}
                                className="anime-btn flex min-h-[40px] flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#CCFBF1] px-3 text-xs font-bold text-[#0F766E] disabled:opacity-45 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
                              >
                                {canPlayOutro ? (
                                  <Play className="h-3.5 w-3.5 fill-current" />
                                ) : (
                                  <Lock className="h-3.5 w-3.5" />
                                )}
                                <span>解決を見る</span>
                              </button>
                            </div>
                          </div>
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
