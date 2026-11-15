import React, { useState } from 'react';
import { Map, Play, BookOpen, Award, Trash2, BookHeart } from 'lucide-react';
import { StageDefinition, StageProgress } from '../types/game';
import titleBgImg from '../assets/images/atelier_title_bg_1794618239723.jpg';

interface TitleScreenProps {
  stages: StageDefinition[];
  progress: Record<string, StageProgress>;
  nextStage: StageDefinition;
  onStartNext: () => void;
  onOpenAtlas: () => void;
  onOpenStoryLog: () => void;
  onRequestResetSave: () => void;
}

export const TitleScreen: React.FC<TitleScreenProps> = ({
  stages,
  progress,
  nextStage,
  onStartNext,
  onOpenAtlas,
  onOpenStoryLog,
  onRequestResetSave,
}) => {
  const [bgError, setBgError] = useState(false);

  const clearedCount = Object.values(progress).filter((p) => p.cleared).length;

  return (
    <div className="relative h-dvh w-full overflow-hidden bg-[#FFF8EE] select-none">
      {/* Anime Workshop Key Art Backdrop */}
      {!bgError ? (
        <img
          src={titleBgImg}
          alt="木漏れ日のRust時計仕掛け工房"
          referrerPolicy="no-referrer"
          onError={() => setBgError(true)}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFF8EE] via-[#F7DFC2] to-[#E6B88A]" />
      )}

      {/* Measured contrast scrim on the left negative space for razor-sharp readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FFF8EE]/95 via-[#FFF8EE]/82 to-transparent md:w-[68%]" />

      {/* Main Title Content over calm left negative space */}
      <div className="relative z-10 flex h-full flex-col justify-between p-6 md:p-12 lg:p-16 max-w-2xl">
        {/* Top quiet progress line (no pills) */}
        <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-[#7C6154]">
          <span>プログラミング言語Rust 日本語版 第1章〜第20章 全網羅</span>
          <span aria-hidden="true">·</span>
          <span className="tabular-nums text-[#4A352B]">
            クリア {clearedCount} / {stages.length}
          </span>
        </div>

        {/* Bespoke Inline SVG Title Lockup + Mascot Emblem */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            {/* Cute Ferris-chan Clockwork Crab Emblem SVG */}
            <svg
              width="76"
              height="76"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="shrink-0 drop-shadow-[0_4px_0_#D9C0A3]"
            >
              {/* Wind-up Key */}
              <rect x="37" y="6" width="6" height="12" rx="2" fill="#FBBF24" stroke="#4A352B" strokeWidth="2.5" />
              <ellipse cx="32" cy="8" rx="6" ry="5" fill="#FBBF24" stroke="#4A352B" strokeWidth="2.5" />
              <ellipse cx="48" cy="8" rx="6" ry="5" fill="#FBBF24" stroke="#4A352B" strokeWidth="2.5" />
              {/* Legs */}
              <path d="M18 46L8 54M18 52L10 62M62 46L72 54M62 52L70 62" stroke="#4A352B" strokeWidth="3.5" strokeLinecap="round" />
              {/* Pincers */}
              <circle cx="14" cy="34" r="9" fill="#FB923C" stroke="#4A352B" strokeWidth="2.8" />
              <circle cx="66" cy="34" r="9" fill="#FB923C" stroke="#4A352B" strokeWidth="2.8" />
              {/* Main Shell */}
              <ellipse cx="40" cy="46" rx="25" ry="20" fill="#FB923C" stroke="#4A352B" strokeWidth="3" />
              <ellipse cx="34" cy="35" rx="9" ry="4" fill="#FED7AA" />
              {/* Anime Eyes */}
              <circle cx="31" cy="44" r="4.5" fill="#4A352B" />
              <circle cx="49" cy="44" r="4.5" fill="#4A352B" />
              <circle cx="29.5" cy="42.5" r="1.7" fill="#FFFFFF" />
              <circle cx="47.5" cy="42.5" r="1.7" fill="#FFFFFF" />
              {/* Blush & Smile */}
              <ellipse cx="24" cy="50" rx="4" ry="2.2" fill="#F472B6" fillOpacity="0.6" />
              <ellipse cx="56" cy="50" rx="4" ry="2.2" fill="#F472B6" fillOpacity="0.6" />
              <path d="M36 51C38 54 42 54 44 51" stroke="#4A352B" strokeWidth="2.5" strokeLinecap="round" />
            </svg>

            <div>
              <p className="font-display text-sm font-bold tracking-wide text-[#EA580C]">
                KOBO RUST · かわいいアニメ調アクションパズル
              </p>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#4A352B] leading-tight">
                鉄と歯車のRust工房
              </h1>
            </div>
          </div>

          <p className="max-w-lg text-sm sm:text-base font-medium leading-relaxed text-[#5C4438]">
            プログラムの超基礎（順次実行・変数・分岐）から、Rustならではの所有権・借用・スマートポインター・並行処理まで。本物のRustコードを書いて、かわいい機械カニ「フェリスちゃん」と一緒に全{stages.length}ステージを冒険しよう！
          </p>

          {/* Primary Start CTA + Stage Atlas */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <button
              type="button"
              onClick={onStartNext}
              className="anime-btn flex h-13 items-center gap-2.5 rounded-2xl bg-[#F97316] px-6 text-base font-extrabold text-white whitespace-nowrap cursor-pointer"
            >
              <Play className="h-5 w-5 fill-current" />
              <span>
                {clearedCount > 0
                  ? `つづきから遊ぶ (${nextStage.displayId})`
                  : '工房へあそびにいく'}
              </span>
            </button>

            <button
              type="button"
              onClick={onOpenAtlas}
              className="anime-btn flex h-13 items-center gap-2 rounded-2xl bg-[#FFFDF9] px-5 text-sm font-bold text-[#4A352B] whitespace-nowrap cursor-pointer"
            >
              <Map className="h-4 w-4 text-[#0D9488]" />
              <span>全{stages.length}ステージ地図</span>
            </button>

            <button
              type="button"
              onClick={onOpenStoryLog}
              className="anime-btn flex h-13 items-center gap-2 rounded-2xl bg-[#FFFDF9] px-5 text-sm font-bold text-[#4A352B] whitespace-nowrap cursor-pointer"
            >
              <BookHeart className="h-4 w-4 text-[#F97316]" />
              <span>お話ログ</span>
            </button>

            <button
              type="button"
              onClick={onRequestResetSave}
              title="セーブデータを初期化する"
              className="anime-btn flex h-13 items-center gap-2 rounded-2xl bg-[#FFFDF9] px-4 text-sm font-bold text-[#9F1239] whitespace-nowrap cursor-pointer"
            >
              <Trash2 className="h-4 w-4 text-[#E11D48]" />
              <span>セーブ初期化</span>
            </button>
          </div>

          {/* 3-line concise feature highlights without cards-inside-cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-[#D9C0A3]/70 text-xs text-[#5C4438]">
            <div className="flex items-start gap-2">
              <BookOpen className="h-4 w-4 shrink-0 text-[#EA580C] mt-0.5" />
              <span>Book-ja 第1〜20章を1トピックずつ細分化</span>
            </div>
            <div className="flex items-start gap-2">
              <Play className="h-4 w-4 shrink-0 text-[#0D9488] mt-0.5" />
              <span>実行タイミングに左右されない同期ティック制</span>
            </div>
            <div className="flex items-start gap-2">
              <Award className="h-4 w-4 shrink-0 text-[#EC4899] mt-0.5" />
              <span>優しい日本語コンパイラ診断＆1クリック入力</span>
            </div>
          </div>
        </div>

        {/* Single flat control-hint line */}
        <p className="text-xs font-bold text-[#7C6154]">
          Enter / Space で開始 · Ctrl+Enter コンパイル実行 · R リセット · Esc メニュー
        </p>
      </div>
    </div>
  );
};
