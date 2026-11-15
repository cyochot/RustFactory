import React from 'react';
import {
  ArrowRight,
  Map,
  RotateCcw,
  CheckCircle2,
  Home,
  Play,
  AlertCircle,
} from 'lucide-react';
import { GameState, StageDefinition } from '../types/game';
import { getStageDisplayTitle } from '../data/stages';

interface StageModalsProps {
  gameState: GameState;
  stage: StageDefinition;
  totalStages: number;
  hasNextStage: boolean;
  totalTicks: number;
  codeLines: number;
  failureReason?: string;
  onResume: () => void;
  onRetrySameCode: () => void;
  onNextStage: () => void;
  onOpenAtlas: () => void;
  onReturnTitle: () => void;
}

export const StageModals: React.FC<StageModalsProps> = ({
  gameState,
  stage,
  totalStages,
  hasNextStage,
  totalTicks,
  codeLines,
  failureReason,
  onResume,
  onRetrySameCode,
  onNextStage,
  onOpenAtlas,
  onReturnTitle,
}) => {
  if (gameState !== 'PAUSED' && gameState !== 'ROUND_SUMMARY' && gameState !== 'GAME_OVER') {
    return null;
  }

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-[#4A352B]/55 p-4">
      {gameState === 'PAUSED' && (
        <div className="anime-card w-full max-w-md rounded-3xl bg-[#FFFDF9] p-6 text-center space-y-5">
          <div>
            <p className="text-xs font-bold text-[#EA580C]">{stage.displayId} · 一時停止</p>
            <h2 className="font-display text-2xl font-extrabold text-[#4A352B] mt-1">
              工房の休憩メニュー
            </h2>
          </div>

          <div className="flex flex-col gap-2.5">
            <button
              type="button"
              onClick={onResume}
              className="anime-btn flex h-12 items-center justify-center gap-2 rounded-xl bg-[#F97316] text-sm font-extrabold text-white cursor-pointer"
            >
              <Play className="h-4 w-4 fill-current" />
              <span>パズルに戻る</span>
            </button>
            <button
              type="button"
              onClick={onOpenAtlas}
              className="anime-btn flex h-12 items-center justify-center gap-2 rounded-xl bg-[#CCFBF1] text-sm font-bold text-[#0F766E] cursor-pointer"
            >
              <Map className="h-4 w-4" />
              <span>ステージ一覧を開く</span>
            </button>
            <button
              type="button"
              onClick={onReturnTitle}
              className="anime-btn flex h-12 items-center justify-center gap-2 rounded-xl bg-[#FFF8EE] text-sm font-bold text-[#4A352B] cursor-pointer"
            >
              <Home className="h-4 w-4" />
              <span>タイトル画面へ</span>
            </button>
          </div>
        </div>
      )}

      {gameState === 'ROUND_SUMMARY' && (
        <div className="anime-card w-full max-w-lg rounded-3xl bg-[#FFFDF9] p-6 space-y-5">
          <div className="text-center space-y-2">
            <p className="text-xs font-extrabold text-[#0D9488]">
              {stage.displayId} · ステージクリア！
            </p>
            <h2 className="font-display text-2xl font-extrabold text-[#4A352B]">
              {getStageDisplayTitle(stage)}
            </h2>

            <div className="flex items-center justify-center gap-1.5 pt-1 text-sm font-extrabold text-[#0D9488]">
              <CheckCircle2 className="h-5 w-5" />
              <span>クリア済み</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 rounded-2xl border-2 border-[#E5D3BC] bg-[#FFF8EE] p-3.5 text-center">
            <div>
              <div className="text-[11px] font-bold text-[#7C6154]">かかったTick</div>
              <div className="font-code text-lg font-extrabold tabular-nums text-[#4A352B]">
                {totalTicks}
              </div>
            </div>
            <div>
              <div className="text-[11px] font-bold text-[#7C6154]">目標 Par</div>
              <div
                className={`font-code text-lg font-extrabold tabular-nums ${
                  totalTicks <= stage.parTicks ? 'text-[#0D9488]' : 'text-[#EA580C]'
                }`}
              >
                {stage.parTicks} {totalTicks <= stage.parTicks ? '★達成' : ''}
              </div>
            </div>
            <div>
              <div className="text-[11px] font-bold text-[#7C6154]">コード行数</div>
              <div className="font-code text-lg font-extrabold tabular-nums text-[#4A352B]">
                {codeLines} 行
              </div>
            </div>
          </div>

          <div className="rounded-2xl border-2 border-[#4A352B] bg-[#F0FDFA] p-4 space-y-1">
            <div className="text-xs font-extrabold text-[#0F766E]">
              このステージのRustポイント：{stage.topicTag}
            </div>
            <p className="text-xs leading-relaxed text-[#4A352B]">
              {stage.bookSummary}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              onClick={onRetrySameCode}
              className="anime-btn flex h-12 items-center justify-center gap-1.5 rounded-xl bg-[#FFF8EE] px-4 text-xs font-bold text-[#4A352B] whitespace-nowrap cursor-pointer"
            >
              <RotateCcw className="h-4 w-4" />
              <span>もう一度調整</span>
            </button>

            {hasNextStage ? (
              <button
                type="button"
                onClick={onNextStage}
                className="anime-btn flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-[#F97316] px-5 text-sm font-extrabold text-white whitespace-nowrap cursor-pointer"
              >
                <span>次のステージへ進む</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={onOpenAtlas}
                className="anime-btn flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-[#0D9488] px-5 text-sm font-extrabold text-white whitespace-nowrap cursor-pointer"
              >
                <span>全{totalStages}ステージ制覇！ステージ一覧を見る</span>
              </button>
            )}
          </div>
        </div>
      )}

      {gameState === 'GAME_OVER' && (
        <div className="anime-card w-full max-w-md rounded-3xl bg-[#FFFDF9] p-6 space-y-4">
          <div className="flex items-center gap-3 text-[#BE123C]">
            <AlertCircle className="h-7 w-7 shrink-0" />
            <div>
              <p className="text-xs font-bold">あと一歩！</p>
              <h2 className="font-display text-xl font-extrabold text-[#4A352B]">
                目標に届きませんでした
              </h2>
            </div>
          </div>

          <p className="rounded-2xl border-2 border-[#FECDD3] bg-[#FFF1F2] p-3.5 text-xs font-medium leading-relaxed text-[#4A352B]">
            {failureReason ?? '条件を確認してもう一度コードを直してみよう！'}
          </p>

          <button
            type="button"
            onClick={onRetrySameCode}
            className="anime-btn flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#F97316] text-sm font-extrabold text-white cursor-pointer"
          >
            <RotateCcw className="h-4 w-4" />
            <span>コードを直してすぐ再挑戦 (R)</span>
          </button>
        </div>
      )}
    </div>
  );
};
