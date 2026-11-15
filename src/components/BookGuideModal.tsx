import React from 'react';
import { BookOpen, X } from 'lucide-react';
import { RustCodeBlock } from '../editor/rustSyntaxHighlight';
import { StageDefinition } from '../types/game';

interface BookGuideModalProps {
  stage: StageDefinition;
  onClose: () => void;
}

export const BookGuideModal: React.FC<BookGuideModalProps> = ({ stage, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#4A352B]/55 p-4">
      <div className="anime-card w-full max-w-xl overflow-hidden rounded-3xl bg-[#FFFDF9]">
        <div className="flex items-center justify-between border-b-2 border-[#4A352B] bg-[#CCFBF1] px-5 py-4">
          <div className="flex items-center gap-2.5 text-[#0F766E]">
            <BookOpen className="h-5 w-5" />
            <div>
              <p className="text-[11px] font-bold">{stage.chapterTitle}</p>
              <h2 className="font-display text-lg font-extrabold text-[#4A352B]">
                {stage.bookSectionTitle}
              </h2>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="解説を閉じる"
            className="anime-btn flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#4A352B] cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="space-y-4 p-5 text-sm leading-relaxed text-[#4A352B]">
          <p>{stage.bookSummary}</p>

          <div className="overflow-hidden rounded-2xl border-2 border-[#4A352B] bg-[#2C211D] p-4">
            <div className="mb-1.5 text-[11px] font-bold text-[#FDBA74]">
              基本の形（書き方見本）
            </div>
            <RustCodeBlock
              code={stage.bookKeyCode}
              className="text-xs leading-6"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="anime-btn h-11 rounded-xl bg-[#F97316] px-5 text-sm font-extrabold text-white cursor-pointer"
            >
              わかった！工房へ戻る
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
