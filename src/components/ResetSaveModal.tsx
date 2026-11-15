import React from 'react';
import { AlertTriangle, Trash2, X } from 'lucide-react';
import { StageProgress } from '../types/game';

interface ResetSaveModalProps {
  totalStages: number;
  progress: Record<string, StageProgress>;
  freeStudyMode: boolean;
  onConfirmReset: () => void;
  onClose: () => void;
}

export const ResetSaveModal: React.FC<ResetSaveModalProps> = ({
  totalStages,
  progress,
  freeStudyMode,
  onConfirmReset,
  onClose,
}) => {
  const entries = Object.values(progress);
  const clearedCount = entries.filter((p) => p.cleared).length;
  const savedCodeCount = entries.filter(
    (p) => typeof p.savedCode === 'string' && p.savedCode.length > 0
  ).length;
  const hasSaveData = entries.length > 0 || freeStudyMode;

  return (
    <div
      className="fixed inset-0 z-60 flex items-center justify-center bg-[#4A352B]/60 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="reset-save-title"
    >
      <div className="anime-card w-full max-w-md rounded-3xl bg-[#FFFDF9] p-6 space-y-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border-2 border-[#4A352B] bg-[#FFE4E6] text-[#BE123C]">
              <AlertTriangle className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-extrabold text-[#BE123C]">
                データ管理
              </p>
              <h2
                id="reset-save-title"
                className="font-display text-xl font-extrabold text-[#4A352B]"
              >
                セーブデータの初期化
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="閉じる"
            className="anime-btn flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FFF8EE] text-[#4A352B] cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {hasSaveData ? (
          <>
            <p className="text-xs font-medium leading-relaxed text-[#5C4438]">
              ブラウザに保存されているプレイ記録をすべて消去して、最初の状態に戻します。この操作は取り消せません。
            </p>

            <div className="rounded-2xl border-2 border-[#FECDD3] bg-[#FFF1F2] p-3.5 space-y-2 text-xs text-[#4A352B]">
              <div className="font-extrabold text-[#9F1239]">
                消去されるデータの内容
              </div>
              <ul className="space-y-1 font-medium">
                <li className="flex items-center justify-between">
                  <span>クリア済みステージ記録</span>
                  <span className="font-code font-bold tabular-nums">
                    {clearedCount} / {totalStages}
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span>各ステージの保存コード</span>
                  <span className="font-code font-bold tabular-nums">
                    {savedCodeCount} 件
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span>全章フリー解放設定</span>
                  <span className="font-code font-bold">
                    {freeStudyMode ? 'ON → OFF' : 'OFF'}
                  </span>
                </li>
              </ul>
            </div>

            <div className="flex items-center gap-2.5 pt-1">
              <button
                type="button"
                onClick={onClose}
                className="anime-btn flex h-11 flex-1 items-center justify-center rounded-xl bg-[#FFF8EE] px-4 text-xs font-bold text-[#4A352B] cursor-pointer"
              >
                キャンセル
              </button>
              <button
                type="button"
                onClick={onConfirmReset}
                className="anime-btn flex h-11 flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#E11D48] px-4 text-xs font-extrabold text-white cursor-pointer"
              >
                <Trash2 className="h-4 w-4" />
                <span>すべて初期化する</span>
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="rounded-2xl border-2 border-[#E5D3BC] bg-[#FFF8EE] p-4 text-xs font-medium leading-relaxed text-[#5C4438]">
              現在保存されているセーブデータはありません。すでに初期状態です。
            </p>

            <button
              type="button"
              onClick={onClose}
              className="anime-btn flex h-11 w-full items-center justify-center rounded-xl bg-[#FFF8EE] px-4 text-xs font-bold text-[#4A352B] cursor-pointer"
            >
              閉じる
            </button>
          </>
        )}
      </div>
    </div>
  );
};
