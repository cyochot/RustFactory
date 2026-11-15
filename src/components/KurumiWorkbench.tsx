import React, { useRef, useState } from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  StepForward,
  Lightbulb,
  AlertTriangle,
  CheckCircle2,
  Terminal,
  Cpu,
  Gauge,
  Undo2,
  Code2,
} from 'lucide-react';
import {
  CompilerDiagnostic,
  InStagePhase,
  OwnershipStatus,
  StageDefinition,
  TickSnapshot,
} from '../types/game';
import { RustCodeEditor, RustCodeEditorHandle } from '../editor/RustCodeEditor';
import { FunctionReferenceModal } from './FunctionReferenceModal';
import kurumiImg from '../assets/images/kurumi_anime_face_1794631912164.jpg';

interface KurumiWorkbenchProps {
  stage: StageDefinition;
  code: string;
  onChangeCode: (next: string) => void;
  onResetStarterCode: () => void;
  phase: InStagePhase;
  diagnostics: CompilerDiagnostic[];
  currentSnapshot: TickSnapshot | undefined;
  speedMultiplier: 1 | 2;
  onToggleSpeed: () => void;
  onCompileAndRun: () => void;
  onTogglePausePlay: () => void;
  onStepTick: () => void;
  onResetWorld: () => void;
  showFunctionRef: boolean;
  onOpenFunctionRef: () => void;
  onCloseFunctionRef: () => void;
}

const OWNERSHIP_LABELS: Record<
  OwnershipStatus,
  { text: string; colorClass: string }
> = {
  OWNED: { text: '所有中', colorClass: 'text-[#0F766E] bg-[#CCFBF1]' },
  BORROWED: { text: '借用 &', colorClass: 'text-[#0369A1] bg-[#E0F2FE]' },
  MUT_BORROWED: { text: '可変借用 &mut', colorClass: 'text-[#B45309] bg-[#FEF3C7]' },
  MOVED: { text: '移動済み Moved', colorClass: 'text-[#BE185D] bg-[#FCE7F3]' },
  RC_SHARED: { text: '共有 Rc/Arc', colorClass: 'text-[#6D28D9] bg-[#EDE9FE]' },
  MUTEX_LOCKED: { text: 'ロック中 Mutex', colorClass: 'text-[#B45309] bg-[#FEF08A]' },
};

export const KurumiWorkbench: React.FC<KurumiWorkbenchProps> = ({
  stage,
  code,
  onChangeCode,
  onResetStarterCode,
  phase,
  diagnostics,
  currentSnapshot,
  speedMultiplier,
  onToggleSpeed,
  onCompileAndRun,
  onTogglePausePlay,
  onStepTick,
  onResetWorld,
  showFunctionRef,
  onOpenFunctionRef,
  onCloseFunctionRef,
}) => {
  const [inspectorTab, setInspectorTab] = useState<'memory' | 'output'>('memory');
  const [hintTier, setHintTier] = useState<number>(0);
  const [imgError, setImgError] = useState(false);
  const editorRef = useRef<RustCodeEditorHandle | null>(null);

  // Reset hint tier when stage changes
  const prevStageIdRef = useRef(stage.id);
  if (prevStageIdRef.current !== stage.id) {
    prevStageIdRef.current = stage.id;
    if (hintTier !== 0) setHintTier(0);
  }

  const activeLines = Array.from(
    new Set<number>(
      (currentSnapshot?.threads ?? [])
        .map((t) => t.activeLine)
        .filter((n): n is number => n !== null)
    )
  );

  const insertAtCursor = (snippet: string) => {
    if (editorRef.current) {
      editorRef.current.insertAtCursor(snippet);
      return;
    }
    onChangeCode(code + '\n' + snippet);
  };

  let kurumiMoodLabel = 'わくわく解説中';
  let kurumiMessage = stage.kurumiIntro;
  let kurumiToneBorder = 'border-[#4A352B] bg-[#FFFDF9]';

  if (phase === 'COMPILE_ERROR' && diagnostics[0]) {
    kurumiMoodLabel = 'あわわ！コンパイル助言';
    kurumiMessage = `${diagnostics[0].line}行目をチェックしよう！${diagnostics[0].tip}`;
    kurumiToneBorder = 'border-[#E11D48] bg-[#FFF1F2]';
  } else if (phase === 'RUNNING') {
    kurumiMoodLabel = '応援中！';
    kurumiMessage = `Tick ${currentSnapshot?.tick ?? 0} を実行中だよ！フェリスちゃんの動きとメモリを見てみよう！`;
    kurumiToneBorder = 'border-[#EA580C] bg-[#FFF7ED]';
  } else if (phase === 'PAUSED_SIM') {
    kurumiMoodLabel = '観察ストップ中';
    kurumiMessage = '一時停止中だよ。「1コマ送り」で1ティックずつ順番に観察できるよ！';
  } else if (phase === 'CLEARED') {
    kurumiMoodLabel = 'やったね！';
    kurumiMessage = `大成功！「${stage.topicTag}」バッチリ使いこなせたね！`;
    kurumiToneBorder = 'border-[#0D9488] bg-[#F0FDFA]';
  } else if (phase === 'FAILED_RUN') {
    kurumiMoodLabel = 'おしい！原因をチェック';
    kurumiMessage =
      currentSnapshot?.failureReason ??
      'あと一歩！コードをちょっと直してもう一度試してみよう！';
    kurumiToneBorder = 'border-[#E11D48] bg-[#FFF1F2]';
  }

  const memoryEntries = currentSnapshot?.memory ?? [];
  const threads = currentSnapshot?.threads ?? [];
  const stdout = currentSnapshot?.stdout ?? [];
  const stderr = currentSnapshot?.stderr ?? [];
  const testResults = currentSnapshot?.testResults ?? [];

  return (
    <div className="flex h-full flex-col gap-2.5 overflow-y-auto lg:overflow-hidden">
      {/* 1. Kurumi-chan Partner & Mission Bubble */}
      <div
        className={`anime-card shrink-0 flex items-start gap-3 rounded-2xl p-2.5 transition-colors duration-150 ${kurumiToneBorder}`}
      >
        <div className="relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-xl border-2 border-[#4A352B] bg-[#FFF8EE]">
          {!imgError ? (
            <img
              src={kurumiImg}
              alt="見習い技師くるみちゃん"
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
              className="h-full w-full object-cover object-center"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-[#FDE68A] text-xs font-bold text-[#4A352B]">
              くるみ
            </div>
          )}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 pt-0.5 text-[11px] font-bold text-[#7C6154]">
              <span className="text-[#EA580C]">くるみちゃん</span>
              <span aria-hidden="true">·</span>
              <span>{kurumiMoodLabel}</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#0F766E]">{stage.topicTag}</span>
              <span aria-hidden="true">·</span>
              <span className="font-code tabular-nums">目標 {stage.parTicks}T</span>
            </div>

            <button
              type="button"
              onClick={() => setHintTier((prev) => (prev + 1) % 4)}
              className="anime-btn flex h-9 shrink-0 items-center gap-1.5 rounded-xl bg-[#FEF3C7] px-2.5 text-xs font-bold text-[#92400E] whitespace-nowrap cursor-pointer"
            >
              <Lightbulb className="h-3.5 w-3.5" />
              <span>{hintTier === 0 ? 'ヒント' : `ヒント ${hintTier}/3`}</span>
            </button>
          </div>
          <p className="mt-1 text-xs font-medium leading-relaxed text-[#4A352B] break-words">
            {kurumiMessage}
          </p>
        </div>
      </div>

      {/* Progressive 3-Tier Hint Drawer */}
      {hintTier > 0 && (
        <div className="shrink-0 max-h-36 overflow-y-auto rounded-xl border-2 border-[#4A352B] bg-[#FEF9C3] px-3 py-2 text-xs text-[#4A352B]">
          <div className="flex items-center justify-between font-bold text-[#92400E]">
            <span>ヒント {hintTier} / 3</span>
            <button
              type="button"
              onClick={() => setHintTier(0)}
              className="underline cursor-pointer"
            >
              閉じる
            </button>
          </div>
          <pre className="mt-1 whitespace-pre-wrap font-sans leading-relaxed">
            {stage.hints[hintTier - 1]}
          </pre>
        </div>
      )}

      {/* 2. Quick-Insert Syntax Templates (>= 40px tall) */}
      <div className="shrink-0 flex flex-wrap items-center gap-1.5">
        <span className="mr-0.5 text-[11px] font-bold text-[#7C6154]">
          構文パーツ:
        </span>
        {stage.quickChips.map((chip) => (
          <button
            key={chip.label}
            type="button"
            title="カーソル位置に構文テンプレートを挿入（中身を自分で埋めよう）"
            onClick={() => insertAtCursor(chip.insert)}
            className="anime-btn min-h-[40px] rounded-xl bg-[#FFFDF9] px-2.5 py-1.5 font-code text-xs font-semibold text-[#4A352B] hover:bg-[#FEF3C7] whitespace-nowrap cursor-pointer"
          >
            + {chip.label}
          </button>
        ))}
        <div className="ml-auto flex items-center gap-1.5">
          <button
            type="button"
            onClick={onOpenFunctionRef}
            title="このステージで使える関数の一覧を見る"
            className="anime-btn flex min-h-[40px] items-center gap-1.5 rounded-xl bg-[#CCFBF1] px-3 text-xs font-bold text-[#0F766E] whitespace-nowrap cursor-pointer"
          >
            <Code2 className="h-3.5 w-3.5" />
            <span>関数一覧</span>
          </button>

          <button
            type="button"
            onClick={onResetStarterCode}
            title="初期コードに戻す"
            className="flex min-h-[40px] items-center gap-1 rounded-xl border-2 border-[#D9C0A3] bg-[#FFFDF9] px-2.5 text-xs font-bold text-[#7C6154] hover:border-[#4A352B] hover:text-[#4A352B] whitespace-nowrap cursor-pointer"
          >
            <Undo2 className="h-3.5 w-3.5" />
            <span>初期コード</span>
          </button>
        </div>
      </div>

      {/* 3. Cocoa Rust Code Editor (CodeMirror 6) */}
      <RustCodeEditor
        ref={editorRef}
        stage={stage}
        code={code}
        phase={phase}
        activeLines={activeLines}
        diagnostics={diagnostics}
        onChangeCode={onChangeCode}
        onCompileAndRun={onCompileAndRun}
      />

      {/* 4. Core Flow Playback & Compile Controls */}
      <div className="shrink-0 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={onCompileAndRun}
          className="anime-btn flex h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-[#F97316] px-4 text-sm font-extrabold text-white whitespace-nowrap cursor-pointer"
        >
          <Play className="h-4 w-4 fill-current" />
          <span>コンパイルして実行</span>
          <span className="hidden sm:inline font-code text-[11px] opacity-90">
            Ctrl+Enter
          </span>
        </button>

        {(phase === 'RUNNING' || phase === 'PAUSED_SIM') && (
          <button
            type="button"
            onClick={onTogglePausePlay}
            className="anime-btn flex h-11 items-center gap-1.5 rounded-xl bg-[#FFFDF9] px-3 text-xs font-bold text-[#4A352B] whitespace-nowrap cursor-pointer"
          >
            {phase === 'RUNNING' ? (
              <>
                <Pause className="h-4 w-4" />
                <span>停止</span>
              </>
            ) : (
              <>
                <Play className="h-4 w-4" />
                <span>再開</span>
              </>
            )}
          </button>
        )}

        <button
          type="button"
          onClick={onStepTick}
          title="1ティックずつ進める"
          className="anime-btn flex h-11 items-center gap-1 rounded-xl bg-[#CCFBF1] px-3 text-xs font-bold text-[#0F766E] whitespace-nowrap cursor-pointer"
        >
          <StepForward className="h-4 w-4" />
          <span>1コマ</span>
        </button>

        <button
          type="button"
          onClick={onToggleSpeed}
          title="再生速度を切り替え"
          className="anime-btn flex h-11 items-center gap-1 rounded-xl bg-[#FFFDF9] px-3 font-code text-xs font-bold text-[#4A352B] whitespace-nowrap cursor-pointer"
        >
          <Gauge className="h-4 w-4" />
          <span>{speedMultiplier}x</span>
        </button>

        <button
          type="button"
          onClick={onResetWorld}
          title="Tick 0 へリセット (R)"
          className="anime-btn flex h-11 items-center gap-1 rounded-xl bg-[#FFFDF9] px-3 text-xs font-bold text-[#4A352B] whitespace-nowrap cursor-pointer"
        >
          <RotateCcw className="h-4 w-4" />
          <span>戻す</span>
        </button>
      </div>

      {/* 5. Diagnostics OR Live Memory / Output Inspector */}
      <div className="anime-card flex min-h-[110px] flex-[0.85] flex-col overflow-hidden rounded-2xl bg-[#FFFDF9]">
        {diagnostics.length > 0 ? (
          <div className="flex-1 overflow-y-auto bg-[#FFF1F2] p-3 space-y-2">
            {diagnostics.map((d, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => editorRef.current?.focusLine(d.line, d.col)}
                className="w-full rounded-xl p-1.5 text-left transition-colors hover:bg-white/60 space-y-1 cursor-pointer"
              >
                <div className="flex items-center gap-2 text-xs font-extrabold text-[#BE123C]">
                  <AlertTriangle className="h-4 w-4 shrink-0" />
                  <span className="font-code">{d.code}</span>
                  <span>·</span>
                  <span>{d.line}行目</span>
                  <span>·</span>
                  <span>{d.title}</span>
                </div>
                <p className="text-xs leading-relaxed text-[#4A352B]">
                  {d.explanation}
                </p>
                <p className="rounded-lg bg-white/80 px-2.5 py-1.5 text-xs font-bold text-[#9F1239]">
                  アドバイス: {d.tip}
                </p>
              </button>
            ))}
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between border-b border-[#E5D3BC] bg-[#F7EBDA] px-3 py-1.5">
              <div className="flex items-center gap-1 rounded-lg bg-[#EAD7BE] p-0.5">
                <button
                  type="button"
                  onClick={() => setInspectorTab('memory')}
                  className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-bold transition-colors cursor-pointer ${
                    inspectorTab === 'memory'
                      ? 'bg-white text-[#4A352B] shadow-sm'
                      : 'text-[#7C6154] hover:text-[#4A352B]'
                  }`}
                >
                  <Cpu className="h-3.5 w-3.5" />
                  <span>所有権・スレッド</span>
                </button>
                <button
                  type="button"
                  onClick={() => setInspectorTab('output')}
                  className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-bold transition-colors cursor-pointer ${
                    inspectorTab === 'output'
                      ? 'bg-white text-[#4A352B] shadow-sm'
                      : 'text-[#7C6154] hover:text-[#4A352B]'
                  }`}
                >
                  <Terminal className="h-3.5 w-3.5" />
                  <span>出力・テスト ({stdout.length + stderr.length + testResults.length})</span>
                </button>
              </div>

              <span className="text-[11px] font-bold text-[#7C6154]">
                {threads.length} スレッド稼働中
              </span>
            </div>

            <div className="flex-1 overflow-y-auto p-2.5 text-xs">
              {inspectorTab === 'memory' ? (
                <div className="space-y-2">
                  {/* Thread Status Rows */}
                  <div className="flex flex-wrap gap-2">
                    {threads.map((t) => (
                      <div
                        key={t.id}
                        className="flex items-center gap-2 rounded-lg border border-[#D9C0A3] bg-[#FFF8EE] px-2.5 py-1"
                      >
                        <span className="font-bold text-[#4A352B]">{t.label}</span>
                        <span className="text-[#7C6154]">·</span>
                        <span className="font-code text-[11px] text-[#0F766E]">
                          {t.lastAction}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Variable & Ownership Rows */}
                  {memoryEntries.length === 0 ? (
                    <p className="py-2 text-center text-[#7C6154]">
                      実行するとここに変数と所有権の動きがリアルタイム表示されるよ！
                    </p>
                  ) : (
                    <div className="divide-y divide-[#F0E1CE]">
                      {memoryEntries.map((m) => {
                        const badge = OWNERSHIP_LABELS[m.ownership];
                        return (
                          <div
                            key={m.name}
                            className="flex items-center justify-between gap-2 py-1.5"
                          >
                            <div className="flex items-center gap-2 min-w-0">
                              <span className="font-code font-bold text-[#4A352B]">
                                {m.name}
                              </span>
                              <span className="font-code text-[11px] text-[#7C6154] truncate">
                                : {m.typeName}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 shrink-0">
                              <span className="font-code text-[11px] text-[#4A352B] max-w-[130px] truncate">
                                {m.valuePreview}
                              </span>
                              <span
                                className={`rounded-md px-1.5 py-0.5 text-[10px] font-bold ${badge.colorClass}`}
                              >
                                {badge.text}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              ) : (
                <div className="space-y-1.5 font-code text-xs">
                  {testResults.map((tr) => (
                    <div
                      key={tr.name}
                      className={`flex items-center gap-2 rounded-lg px-2 py-1 ${
                        tr.passed
                          ? 'bg-[#CCFBF1] text-[#0F766E]'
                          : 'bg-[#FFE4E6] text-[#BE123C]'
                      }`}
                    >
                      {tr.passed ? (
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                      ) : (
                        <AlertTriangle className="h-3.5 w-3.5 shrink-0" />
                      )}
                      <span className="font-bold">test {tr.name}</span>
                      <span>— {tr.message}</span>
                    </div>
                  ))}
                  {stdout.map((line, idx) => (
                    <div key={`out-${idx}`} className="text-[#4A352B]">
                      &gt; {line}
                    </div>
                  ))}
                  {stderr.map((line, idx) => (
                    <div key={`err-${idx}`} className="text-[#BE123C] font-bold">
                      [stderr] {line}
                    </div>
                  ))}
                  {stdout.length === 0 &&
                    stderr.length === 0 &&
                    testResults.length === 0 && (
                      <p className="py-2 text-center font-sans text-[#7C6154]">
                        println! や #[test] の結果がここに表示されます。
                      </p>
                    )}
                </div>
              )}
            </div>
          </>
        )}
      </div>
      {showFunctionRef && (
        <FunctionReferenceModal
          stage={stage}
          onInsertCode={insertAtCursor}
          onClose={onCloseFunctionRef}
        />
      )}
    </div>
  );
};
