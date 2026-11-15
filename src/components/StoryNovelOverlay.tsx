import React, { useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, FastForward, MessageCircleHeart } from 'lucide-react';
import { STORY_CHARACTERS } from '../data/storyCharacters';
import { StageStoryEntry, StoryBeatPhase } from '../types/game';
import { StoryCharacterAvatar } from './StoryCharacterAvatar';

interface StoryNovelOverlayProps {
  story: StageStoryEntry;
  stageDisplayId: string;
  chapterTitle: string;
  beatPhase: StoryBeatPhase;
  onComplete: () => void;
}

export const StoryNovelOverlay: React.FC<StoryNovelOverlayProps> = ({
  story,
  stageDisplayId,
  chapterTitle,
  beatPhase,
  onComplete,
}) => {
  const lines = useMemo(
    () => (beatPhase === 'intro' ? story.intro : story.outro),
    [beatPhase, story]
  );

  const [lineIndex, setLineIndex] = useState(0);
  const [visibleChars, setVisibleChars] = useState(0);

  const currentLine = lines[Math.min(lineIndex, Math.max(0, lines.length - 1))];
  const fullText = currentLine?.text ?? '';
  const isTextComplete = visibleChars >= fullText.length;
  const isLastLine = lineIndex >= lines.length - 1;

  // Reset cursor whenever story or phase changes
  useEffect(() => {
    setLineIndex(0);
    setVisibleChars(0);
  }, [story.stageId, beatPhase]);

  // Gentle typewriter effect (respects prefers-reduced-motion)
  useEffect(() => {
    if (!fullText) return;
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setVisibleChars(fullText.length);
      return;
    }

    setVisibleChars(0);
    const interval = window.setInterval(() => {
      setVisibleChars((prev) => {
        if (prev >= fullText.length) {
          window.clearInterval(interval);
          return prev;
        }
        return prev + 2;
      });
    }, 22);
    return () => window.clearInterval(interval);
  }, [fullText, lineIndex]);

  const handleAdvance = () => {
    if (!isTextComplete) {
      setVisibleChars(fullText.length);
      return;
    }
    if (!isLastLine) {
      setLineIndex((i) => i + 1);
      return;
    }
    onComplete();
  };

  const handlePrev = () => {
    if (lineIndex > 0) {
      setLineIndex((i) => i - 1);
    }
  };

  // Capture Enter/Space/ArrowLeft/Escape exclusively while overlay is open
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        e.stopPropagation();
        onComplete();
        return;
      }
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        e.stopPropagation();
        if (!isTextComplete) {
          setVisibleChars(fullText.length);
        } else if (!isLastLine) {
          setLineIndex((i) => i + 1);
        } else {
          onComplete();
        }
        return;
      }
      if (e.key === 'ArrowLeft' && lineIndex > 0) {
        e.preventDefault();
        e.stopPropagation();
        setLineIndex((i) => i - 1);
      }
    };
    window.addEventListener('keydown', onKeyDown, true);
    return () => window.removeEventListener('keydown', onKeyDown, true);
  }, [fullText.length, isLastLine, isTextComplete, lineIndex, onComplete]);

  if (!currentLine) return null;

  const speaker = STORY_CHARACTERS[currentLine.speaker];
  const isRightSpeaker = speaker.side === 'right';
  const displayedText = fullText.slice(0, visibleChars);

  const phaseLabel =
    beatPhase === 'intro' ? '町のちいさな依頼' : 'おてつだい完了！';
  const finishLabel = beatPhase === 'intro'
    ? 'パズルへすすむ'
    : 'クリア結果を見る';

  return (
    <div
      className="fixed inset-0 z-60 flex items-end sm:items-center justify-center bg-[#4A352B]/60 p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="story-request-title"
    >
      <div className="anime-card w-full max-w-2xl overflow-hidden rounded-3xl bg-[#FFFDF9] transition-transform duration-150">
        {/* Clean Top Context Bar (zero pills, typographic · separators) */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-[#4A352B] bg-[#F7EBDA] px-5 py-3">
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[11px] font-bold text-[#7C6154]">
              <span className="font-code text-[#EA580C]">{stageDisplayId}</span>
              <span aria-hidden="true">·</span>
              <span className="truncate">{story.requestTitle}</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#0F766E]">{phaseLabel}</span>
            </div>
            <h2
              id="story-request-title"
              className="mt-0.5 flex items-center gap-1.5 font-display text-base sm:text-lg font-extrabold text-[#4A352B] truncate"
            >
              <MessageCircleHeart className="h-4 w-4 shrink-0 text-[#F97316]" />
              <span className="truncate">{story.requestTitle}</span>
            </h2>
          </div>

          <button
            type="button"
            onClick={onComplete}
            className="anime-btn flex min-h-[40px] shrink-0 items-center gap-1.5 rounded-xl bg-[#FFFDF9] px-3 text-xs font-bold text-[#5C4438] whitespace-nowrap cursor-pointer"
          >
            <FastForward className="h-3.5 w-3.5" />
            <span>スキップ</span>
          </button>
        </div>

        {/* Visual Novel Dialogue Body (click to advance) */}
        <div
          onClick={handleAdvance}
          className="cursor-pointer select-none px-5 py-5 sm:px-6 sm:py-6"
          style={{ backgroundColor: '#FFFDF9' }}
        >
          <div
            className={`flex items-start gap-4 ${
              isRightSpeaker ? 'flex-row-reverse text-right sm:text-left' : 'flex-row'
            }`}
          >
            <StoryCharacterAvatar
              speakerId={currentLine.speaker}
              emotion={currentLine.emotion ?? 'normal'}
              size="lg"
            />

            <div className="min-w-0 flex-1 space-y-2">
              <div
                className={`flex flex-wrap items-center gap-2 text-xs font-extrabold ${
                  isRightSpeaker ? 'justify-end sm:justify-start' : 'justify-start'
                }`}
              >
                <span style={{ color: speaker.accentColor }}>{speaker.name}</span>
                <span className="text-[#C4A68A]" aria-hidden="true">
                  ·
                </span>
                <span className="font-medium text-[#7C6154]">{speaker.role}</span>
              </div>

              <p className="min-h-[4.5rem] text-sm sm:text-base font-medium leading-relaxed text-[#4A352B]">
                {displayedText}
                {!isTextComplete && (
                  <span className="inline-block w-1.5 h-4 ml-0.5 align-middle bg-[#F97316]" />
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Controls */}
        <div className="flex items-center justify-between gap-3 border-t border-[#E5D3BC] bg-[#FFF8EE] px-5 py-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled={lineIndex === 0}
              onClick={handlePrev}
              className="anime-btn flex min-h-[40px] items-center gap-1 rounded-xl bg-[#FFFDF9] px-3 text-xs font-bold text-[#4A352B] disabled:opacity-40 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>もどる</span>
            </button>

            <span className="px-2 font-code text-xs font-bold tabular-nums text-[#7C6154]">
              {lineIndex + 1} / {lines.length}
            </span>
          </div>

          <button
            type="button"
            onClick={handleAdvance}
            className="anime-btn flex min-h-[40px] items-center gap-1.5 rounded-xl bg-[#F97316] px-5 text-xs sm:text-sm font-extrabold text-white whitespace-nowrap cursor-pointer"
          >
            <span>{!isTextComplete ? 'すべて表示' : isLastLine ? finishLabel : 'つぎへ'}</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
