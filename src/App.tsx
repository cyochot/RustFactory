/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ALL_STAGES } from './data/stages';
import { compileAndSimulate } from './engine/rustCompiler';
import {
  getSnapshotPrintWaitMs,
  hasThreadMovement,
} from './engine/dialogueTiming';
import { workshopAudio } from './engine/audio';
import {
  CompileAndSimulateResult,
  CompilerDiagnostic,
  GameState,
  InStagePhase,
  StageDefinition,
  StageProgress,
  TickSnapshot,
} from './types/game';
import { getStageStory, getStoryChapterTitle } from './data/storyScripts';
import { TitleScreen } from './components/TitleScreen';
import { CanvasArena } from './components/CanvasArena';
import { KurumiWorkbench } from './components/KurumiWorkbench';
import { StageAtlasModal } from './components/StageAtlasModal';
import { BookGuideModal } from './components/BookGuideModal';
import { StageModals } from './components/StageModals';
import { ResetSaveModal } from './components/ResetSaveModal';
import { StoryNovelOverlay } from './components/StoryNovelOverlay';
import { CheckCircle2 } from 'lucide-react';

const STORAGE_KEY_PROGRESS = 'kobo_rust_progress_v5';
const STORAGE_KEY_FREE_MODE = 'kobo_rust_free_study_v5';

function buildInitialTick0Snapshot(stage: StageDefinition): TickSnapshot {
  const s = stage.worldSetup;
  const threads = [
    {
      id: 'main',
      label: 'フェリスちゃん',
      status: 'RUNNING' as const,
      activeLine: null,
      x: s.botStart.x,
      y: s.botStart.y,
      dir: s.botStart.dir,
      holdingCoreId: null,
      holdingPower: 0,
      lastAction: '待機中 (Tick 0)',
    },
  ];
  if (s.workerStart) {
    threads.push({
      id: 'worker_preview',
      label: 'みるく号',
      status: 'RUNNING' as const,
      activeLine: null,
      x: s.workerStart.x,
      y: s.workerStart.y,
      dir: s.workerStart.dir,
      holdingCoreId: null,
      holdingPower: 0,
      lastAction: '待機中 (Tick 0)',
    });
  }

  return {
    tick: 0,
    threads,
    gates: (s.gates ?? []).map((g) => {
      const period = g.openTicks + g.closedTicks;
      const phase = (g.initialOffset ?? 0) % Math.max(1, period);
      const isOpen = g.linkedSwitch ? false : phase < g.openTicks;
      const countdown = g.linkedSwitch
        ? 0
        : isOpen
        ? g.openTicks - phase
        : period - phase;
      return { x: g.x, y: g.y, isOpen, countdown };
    }),
    sparks: (s.sparks ?? []).map((sp) => ({
      id: sp.id,
      x: sp.path[sp.initialIndex ?? 0].x,
      y: sp.path[sp.initialIndex ?? 0].y,
    })),
    cores: (s.cores ?? []).map((c) => ({
      id: c.id,
      x: c.x,
      y: c.y,
      power: c.power,
      heldBy: null,
      delivered: false,
    })),
    scansCompleted: 0,
    switchesActive: [],
    vaultValue: s.vault?.initial ?? 0,
    dialSolved: false,
    jobsCompleted: 0,
    memory: [],
    stdout: [],
    stderr: [],
    testResults: [],
    cues: [],
    outcome: 'RUNNING',
  };
}

export default function App() {
  const [gameState, setGameState] = useState<GameState>('TITLE_MENU');
  const [progress, setProgress] = useState<Record<string, StageProgress>>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_PROGRESS);
      return raw ? (JSON.parse(raw) as Record<string, StageProgress>) : {};
    } catch {
      return {};
    }
  });
  const [freeStudyMode, setFreeStudyMode] = useState<boolean>(() => {
    try {
      return localStorage.getItem(STORAGE_KEY_FREE_MODE) === 'true';
    } catch {
      return false;
    }
  });

  const [currentStageId, setCurrentStageId] = useState<string>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_PROGRESS);
      if (raw) {
        const parsed = JSON.parse(raw) as Record<string, StageProgress>;
        const firstUncleared = ALL_STAGES.find((s) => !parsed[s.id]?.cleared);
        if (firstUncleared) return firstUncleared.id;
      }
    } catch {
      // ignore
    }
    return ALL_STAGES[0].id;
  });

  const currentStage = useMemo(
    () => ALL_STAGES.find((s) => s.id === currentStageId) ?? ALL_STAGES[0],
    [currentStageId]
  );

  const [code, setCode] = useState<string>(
    () => progress[currentStage.id]?.savedCode ?? currentStage.starterCode
  );
  const [phase, setPhase] = useState<InStagePhase>('OBSERVE_EDIT');
  const [diagnostics, setDiagnostics] = useState<CompilerDiagnostic[]>([]);
  const [snapshots, setSnapshots] = useState<TickSnapshot[]>(() => [
    buildInitialTick0Snapshot(currentStage),
  ]);
  const [currentTickIndex, setCurrentTickIndex] = useState<number>(0);
  const [tickProgress, setTickProgress] = useState<number>(0);
  const [speedMultiplier, setSpeedMultiplier] = useState<1 | 2>(1);
  const [lastRunMeta, setLastRunMeta] = useState<{
    totalTicks: number;
    codeLines: number;
    failureReason?: string;
  }>({ totalTicks: 0, codeLines: 0 });

  const [muted, setMuted] = useState(false);
  const [showAtlas, setShowAtlas] = useState(false);
  const [showBookGuide, setShowBookGuide] = useState(false);
  const [showFunctionRef, setShowFunctionRef] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [resetDoneNotice, setResetDoneNotice] = useState(false);
  const [activeStory, setActiveStory] = useState<{
    stageId: string;
    phase: 'intro' | 'outro';
    pendingRoundSummary?: boolean;
  } | null>(null);

  const lastPlayedTickSoundRef = useRef<number>(-1);
  const settleTimerRef = useRef<number | null>(null);
  const snapshotsRef = useRef<TickSnapshot[]>(snapshots);
  snapshotsRef.current = snapshots;
  const tickIndexRef = useRef<number>(0);
  const tickProgressRef = useRef<number>(0);
  const dialogueProgressRef = useRef<number>(0);

  // Persist progress & free study mode
  useEffect(() => {
    try {
      if (Object.keys(progress).length === 0) {
        localStorage.removeItem(STORAGE_KEY_PROGRESS);
      } else {
        localStorage.setItem(STORAGE_KEY_PROGRESS, JSON.stringify(progress));
      }
    } catch {
      // ignore storage quota errors
    }
  }, [progress]);

  useEffect(() => {
    try {
      if (!freeStudyMode) {
        localStorage.removeItem(STORAGE_KEY_FREE_MODE);
      } else {
        localStorage.setItem(STORAGE_KEY_FREE_MODE, 'true');
      }
    } catch {
      // ignore
    }
  }, [freeStudyMode]);

  useEffect(() => {
    if (!resetDoneNotice) return;
    const timer = window.setTimeout(() => setResetDoneNotice(false), 3500);
    return () => window.clearTimeout(timer);
  }, [resetDoneNotice]);

  const clearSettleTimer = () => {
    if (settleTimerRef.current !== null) {
      window.clearTimeout(settleTimerRef.current);
      settleTimerRef.current = null;
    }
  };

  const syncTickState = useCallback((nextIdx: number, nextProg = 0) => {
    tickIndexRef.current = nextIdx;
    tickProgressRef.current = nextProg;
    dialogueProgressRef.current = 0;
    setCurrentTickIndex(nextIdx);
    setTickProgress(nextProg);
  }, []);

  const handleResetAllSaveData = useCallback(() => {
    clearSettleTimer();
    try {
      localStorage.removeItem(STORAGE_KEY_PROGRESS);
      localStorage.removeItem(STORAGE_KEY_FREE_MODE);
    } catch {
      // ignore
    }
    const firstStage = ALL_STAGES[0];
    setProgress({});
    setActiveStory(null);
    setFreeStudyMode(false);
    setCurrentStageId(firstStage.id);
    setCode(firstStage.starterCode);
    setPhase('OBSERVE_EDIT');
    setDiagnostics([]);
    const initSnaps = [buildInitialTick0Snapshot(firstStage)];
    snapshotsRef.current = initSnaps;
    setSnapshots(initSnaps);
    syncTickState(0, 0);
    setLastRunMeta({ totalTicks: 0, codeLines: 0 });
    lastPlayedTickSoundRef.current = -1;
    setShowAtlas(false);
    setShowBookGuide(false);
    setShowFunctionRef(false);
    setShowResetConfirm(false);
    setGameState('TITLE_MENU');
    setResetDoneNotice(true);
  }, [syncTickState]);

  const loadStage = useCallback(
    (stageId: string) => {
      clearSettleTimer();
      const target = ALL_STAGES.find((s) => s.id === stageId) ?? ALL_STAGES[0];
      setCurrentStageId(target.id);
      setCode(progress[target.id]?.savedCode ?? target.starterCode);
      setPhase('OBSERVE_EDIT');
      setDiagnostics([]);
      const initSnaps = [buildInitialTick0Snapshot(target)];
      snapshotsRef.current = initSnaps;
      setSnapshots(initSnaps);
      syncTickState(0, 0);
      lastPlayedTickSoundRef.current = -1;
      setShowAtlas(false);
      setShowBookGuide(false);
      setShowFunctionRef(false);
      setGameState('PLAYING');
      if (getStageStory(target.id)) {
        setActiveStory({
          stageId: target.id,
          phase: 'intro',
        });
      } else {
        setActiveStory(null);
      }
    },
    [progress, syncTickState]
  );

  const handleCompleteActiveStory = useCallback(() => {
    if (!activeStory) return;
    const { pendingRoundSummary } = activeStory;
    setActiveStory(null);
    if (pendingRoundSummary) {
      setGameState('ROUND_SUMMARY');
    }
  }, [activeStory]);

  const handleCodeChange = (nextCode: string) => {
    setCode(nextCode);
    setProgress((prev) => ({
      ...prev,
      [currentStage.id]: {
        cleared: prev[currentStage.id]?.cleared ?? false,
        bestTicks: prev[currentStage.id]?.bestTicks,
        savedCode: nextCode,
      },
    }));
  };

  const resetWorldToTick0 = useCallback(() => {
    clearSettleTimer();
    setPhase('OBSERVE_EDIT');
    setDiagnostics([]);
    const initSnaps = [buildInitialTick0Snapshot(currentStage)];
    snapshotsRef.current = initSnaps;
    setSnapshots(initSnaps);
    syncTickState(0, 0);
    lastPlayedTickSoundRef.current = -1;
    if (gameState === 'GAME_OVER' || gameState === 'ROUND_SUMMARY') {
      setGameState('PLAYING');
    }
  }, [currentStage, gameState, syncTickState]);

  const playSoundsForSnapshot = useCallback((snap: TickSnapshot) => {
    if (lastPlayedTickSoundRef.current === snap.tick) return;
    lastPlayedTickSoundRef.current = snap.tick;
    for (const cue of snap.cues) {
      if (cue.kind === 'hop') workshopAudio.playHop();
      else if (cue.kind === 'turn') workshopAudio.playTurn();
      else if (cue.kind === 'print') workshopAudio.playSpeak();
      else if (cue.kind === 'scan' || cue.kind === 'boost' || cue.kind === 'deliver' || cue.kind === 'test_pass') {
        workshopAudio.playBorrowChime();
      } else if (cue.kind === 'channel_send' || cue.kind === 'channel_recv') {
        workshopAudio.playChannelPop();
      } else if (cue.kind === 'mutex_lock' || cue.kind === 'mutex_unlock' || cue.kind === 'switch') {
        workshopAudio.playLockClick();
      } else if (cue.kind === 'crash') {
        workshopAudio.playError();
      }
    }
  }, []);

  const finishRunForSnapshot = useCallback(
    (finalSnap: TickSnapshot, immediateModal = false) => {
      if (finalSnap.outcome === 'CLEARED') {
        workshopAudio.playVictory();
        setPhase('CLEARED');
        setLastRunMeta((m) => ({
          ...m,
          totalTicks: finalSnap.tick,
        }));
        setProgress((p) => ({
          ...p,
          [currentStage.id]: {
            cleared: true,
            bestTicks: Math.min(p[currentStage.id]?.bestTicks ?? 999, finalSnap.tick),
            savedCode: code,
          },
        }));
        const openClear = () => {
          if (getStageStory(currentStage.id)) {
            setActiveStory({
              stageId: currentStage.id,
              phase: 'outro',
              pendingRoundSummary: true,
            });
          } else {
            setGameState('ROUND_SUMMARY');
          }
        };
        if (immediateModal) {
          openClear();
        } else {
          clearSettleTimer();
          settleTimerRef.current = window.setTimeout(openClear, 480);
        }
      } else if (finalSnap.outcome === 'FAILED') {
        workshopAudio.playError();
        setPhase('FAILED_RUN');
        setLastRunMeta((m) => ({
          ...m,
          failureReason: finalSnap.failureReason,
        }));
        if (immediateModal) {
          setGameState('GAME_OVER');
        } else {
          clearSettleTimer();
          settleTimerRef.current = window.setTimeout(() => {
            setGameState('GAME_OVER');
          }, 360);
        }
      }
    },
    [code, currentStage.id]
  );

  const handleCompileAndRun = useCallback(() => {
    workshopAudio.unlock();
    clearSettleTimer();
    lastPlayedTickSoundRef.current = -1;

    // Always reset deterministically to Tick 0 before compiling & running!
    const result: CompileAndSimulateResult = compileAndSimulate(currentStage, code);
    if (!result.ok) {
      workshopAudio.playError();
      setDiagnostics(result.diagnostics);
      const initSnaps = [buildInitialTick0Snapshot(currentStage)];
      snapshotsRef.current = initSnaps;
      setSnapshots(initSnaps);
      syncTickState(0, 0);
      setPhase('COMPILE_ERROR');
      setGameState('PLAYING');
      return;
    }

    workshopAudio.playCompileBell();
    setDiagnostics([]);
    snapshotsRef.current = result.snapshots;
    setSnapshots(result.snapshots);
    syncTickState(0, 0);
    setLastRunMeta({
      totalTicks: result.totalTicks,
      codeLines: result.codeLines,
      failureReason: result.failureReason,
    });
    setPhase('RUNNING');
    setGameState('PLAYING');
  }, [code, currentStage, syncTickState]);

  const handleStepTick = useCallback(() => {
    workshopAudio.unlock();
    clearSettleTimer();

    if (phase === 'OBSERVE_EDIT' || phase === 'COMPILE_ERROR' || phase === 'FAILED_RUN') {
      const result = compileAndSimulate(currentStage, code);
      if (!result.ok) {
        workshopAudio.playError();
        setDiagnostics(result.diagnostics);
        setPhase('COMPILE_ERROR');
        return;
      }
      workshopAudio.playCompileBell();
      setDiagnostics([]);
      snapshotsRef.current = result.snapshots;
      setSnapshots(result.snapshots);
      const nextIdx = Math.min(1, result.snapshots.length - 1);
      syncTickState(nextIdx, 0);
      setLastRunMeta({
        totalTicks: result.totalTicks,
        codeLines: result.codeLines,
        failureReason: result.failureReason,
      });
      if (result.snapshots[nextIdx]) playSoundsForSnapshot(result.snapshots[nextIdx]);
      setPhase('PAUSED_SIM');
      return;
    }

    setPhase('PAUSED_SIM');
    const snaps = snapshotsRef.current;
    const next = Math.min(tickIndexRef.current + 1, snaps.length - 1);
    syncTickState(next, 0);
    const snap = snaps[next];
    if (snap) {
      playSoundsForSnapshot(snap);
      if (snap.outcome === 'CLEARED' || snap.outcome === 'FAILED') {
        finishRunForSnapshot(snap, true);
      }
    }
  }, [
    code,
    currentStage,
    finishRunForSnapshot,
    phase,
    playSoundsForSnapshot,
    syncTickState,
  ]);

  // Deterministic Playback Loop for Tick Interpolation & println Dialogue Wait
  useEffect(() => {
    if (gameState !== 'PLAYING' || phase !== 'RUNNING') return;

    let rafId = 0;
    let lastTime = performance.now();
    const msPerTick = speedMultiplier === 2 ? 200 : 400;
    let finished = false;

    const advanceToTick = (nextIdx: number) => {
      const snaps = snapshotsRef.current;
      tickIndexRef.current = nextIdx;
      tickProgressRef.current = 0;
      dialogueProgressRef.current = 0;
      setCurrentTickIndex(nextIdx);
      setTickProgress(0);

      const snap = snaps[nextIdx];
      if (snap) {
        playSoundsForSnapshot(snap);
        if (nextIdx >= snaps.length - 1) {
          const finalPrintWait = getSnapshotPrintWaitMs(snap, speedMultiplier);
          if (finalPrintWait === 0) {
            finished = true;
            finishRunForSnapshot(snap);
          }
        }
      }
    };

    const stepLoop = (now: number) => {
      if (finished) return;
      const rawDt = now - lastTime;
      lastTime = now;
      const dtMs = Math.min(rawDt, 50);

      const snaps = snapshotsRef.current;
      const idx = tickIndexRef.current;
      const curSnap = snaps[idx];
      const nextSnap = snaps[idx + 1];

      // 1. Wait until current tick's println!/eprintln! dialogue completes
      const printWaitMs = getSnapshotPrintWaitMs(curSnap, speedMultiplier);
      if (printWaitMs > 0 && dialogueProgressRef.current < 1) {
        dialogueProgressRef.current = Math.min(
          1,
          dialogueProgressRef.current + dtMs / printWaitMs
        );
        if (tickProgressRef.current !== 0) {
          tickProgressRef.current = 0;
          setTickProgress(0);
        }
        if (dialogueProgressRef.current < 1) {
          rafId = requestAnimationFrame(stepLoop);
          return;
        }
        if (idx >= snaps.length - 1 && curSnap) {
          finished = true;
          finishRunForSnapshot(curSnap);
          return;
        }
        if (!hasThreadMovement(curSnap, nextSnap)) {
          advanceToTick(idx + 1);
          if (!finished) rafId = requestAnimationFrame(stepLoop);
          return;
        }
      }

      if (idx >= snaps.length - 1) {
        if (curSnap) {
          finished = true;
          finishRunForSnapshot(curSnap);
        }
        return;
      }

      // Start initial stationary println! promptly from Tick 0
      if (
        idx === 0 &&
        getSnapshotPrintWaitMs(nextSnap, speedMultiplier) > 0 &&
        !hasThreadMovement(curSnap, nextSnap)
      ) {
        advanceToTick(1);
        if (!finished) rafId = requestAnimationFrame(stepLoop);
        return;
      }

      // 2. Normal tick interpolation toward nextSnap
      const nextProg = tickProgressRef.current + dtMs / msPerTick;
      if (nextProg < 1) {
        tickProgressRef.current = nextProg;
        setTickProgress(nextProg);
        rafId = requestAnimationFrame(stepLoop);
        return;
      }

      advanceToTick(idx + 1);
      if (!finished) {
        rafId = requestAnimationFrame(stepLoop);
      }
    };

    rafId = requestAnimationFrame(stepLoop);
    return () => cancelAnimationFrame(rafId);
  }, [
    finishRunForSnapshot,
    gameState,
    phase,
    playSoundsForSnapshot,
    speedMultiplier,
  ]);

  // Global keyboard shortcuts (with textarea guard)
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const inInput =
        target?.tagName === 'TEXTAREA' ||
        target?.tagName === 'INPUT' ||
        Boolean(target?.isContentEditable) ||
        Boolean(target?.closest('.cm-editor'));

      if (activeStory) return;

      if (gameState === 'TITLE_MENU' && !showAtlas && !showResetConfirm) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          workshopAudio.unlock();
          loadStage(currentStageId);
        }
        return;
      }

      if (e.key === 'Escape') {
        if (e.defaultPrevented) return;
        e.preventDefault();
        if (showResetConfirm) {
          setShowResetConfirm(false);
          return;
        }
        if (showFunctionRef) {
          setShowFunctionRef(false);
          return;
        }
        if (showBookGuide) {
          setShowBookGuide(false);
          return;
        }
        if (showAtlas) {
          setShowAtlas(false);
          return;
        }
        if (gameState === 'PLAYING') setGameState('PAUSED');
        else if (gameState === 'PAUSED') setGameState('PLAYING');
        return;
      }

      if (showResetConfirm) return;
      if (inInput) return;

      if (gameState === 'PLAYING') {
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
          e.preventDefault();
          handleCompileAndRun();
        } else if (e.key === ' ') {
          e.preventDefault();
          if (phase === 'RUNNING') setPhase('PAUSED_SIM');
          else if (phase === 'PAUSED_SIM') setPhase('RUNNING');
        } else if (e.key === 'r' || e.key === 'R') {
          e.preventDefault();
          resetWorldToTick0();
        }
      } else if (gameState === 'GAME_OVER' && (e.key === 'r' || e.key === 'R')) {
        e.preventDefault();
        resetWorldToTick0();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [
    activeStory,
    currentStageId,
    gameState,
    handleCompileAndRun,
    loadStage,
    phase,
    resetWorldToTick0,
    showAtlas,
    showBookGuide,
    showFunctionRef,
    showResetConfirm,
  ]);

  const currentSnapshot =
    snapshots[Math.min(currentTickIndex, Math.max(0, snapshots.length - 1))];

  const currentStageIdx = ALL_STAGES.findIndex((s) => s.id === currentStage.id);
  const nextStageObj =
    currentStageIdx >= 0 && currentStageIdx + 1 < ALL_STAGES.length
      ? ALL_STAGES[currentStageIdx + 1]
      : undefined;

  const activeStoryStage = activeStory
    ? ALL_STAGES.find((s) => s.id === activeStory.stageId)
    : undefined;
  const activeStoryObj = activeStoryStage
    ? getStageStory(activeStoryStage.id)
    : undefined;

  return (
    <div className="min-h-dvh lg:h-dvh w-full overflow-x-hidden lg:overflow-hidden bg-[#FFF8EE] text-[#4A352B]">
      {gameState === 'TITLE_MENU' ? (
        <TitleScreen
          stages={ALL_STAGES}
          progress={progress}
          nextStage={currentStage}
          onStartNext={() => {
            workshopAudio.unlock();
            loadStage(currentStage.id);
          }}
          onOpenAtlas={() => {
            workshopAudio.unlock();
            setShowAtlas(true);
          }}
          onRequestResetSave={() => setShowResetConfirm(true)}
        />
      ) : (
        <main className="grid min-h-dvh lg:h-dvh w-full grid-cols-1 gap-3 p-3 lg:grid-cols-[1.35fr_1fr]">
          {/* Left: Isolated 60fps Cute Anime Canvas */}
          <div className="min-h-[300px] lg:min-h-0">
            <CanvasArena
              stage={currentStage}
              snapshots={snapshots}
              currentTickIndex={currentTickIndex}
              tickProgress={tickProgress}
              phase={phase}
              speedMultiplier={speedMultiplier}
              isGamePaused={gameState === 'PAUSED'}
              muted={muted}
              onToggleMute={() => {
                const next = !muted;
                setMuted(next);
                workshopAudio.setMuted(next);
              }}
              onPause={() => setGameState('PAUSED')}
              onOpenBook={() => setShowBookGuide(true)}
            />
          </div>

          {/* Right: Kurumi's Workbench Dock */}
          <div className="min-h-0">
            <KurumiWorkbench
              stage={currentStage}
              code={code}
              onChangeCode={handleCodeChange}
              onResetStarterCode={() => {
                handleCodeChange(currentStage.starterCode);
                resetWorldToTick0();
              }}
              phase={phase}
              diagnostics={diagnostics}
              currentSnapshot={currentSnapshot}
              speedMultiplier={speedMultiplier}
              onToggleSpeed={() =>
                setSpeedMultiplier((s) => (s === 1 ? 2 : 1))
              }
              onCompileAndRun={handleCompileAndRun}
              onTogglePausePlay={() =>
                setPhase((p) => (p === 'RUNNING' ? 'PAUSED_SIM' : 'RUNNING'))
              }
              onStepTick={handleStepTick}
              onResetWorld={resetWorldToTick0}
              showFunctionRef={showFunctionRef}
              onOpenFunctionRef={() => setShowFunctionRef(true)}
              onCloseFunctionRef={() => setShowFunctionRef(false)}
            />
          </div>
        </main>
      )}

      {/* Stage Atlas Modal (available from Title or Pause menu) */}
      {showAtlas && (
        <StageAtlasModal
          stages={ALL_STAGES}
          progress={progress}
          currentStageId={currentStage.id}
          freeStudyMode={freeStudyMode}
          onToggleFreeStudy={() => setFreeStudyMode((f) => !f)}
          onSelectStage={loadStage}
          onClose={() => setShowAtlas(false)}
        />
      )}

      {/* Book-ja Section Summary Guide Modal */}
      {showBookGuide && (
        <BookGuideModal
          stage={currentStage}
          onClose={() => setShowBookGuide(false)}
        />
      )}

      {/* Pause / Victory / Instant Retry Modals */}
      <StageModals
        gameState={gameState}
        stage={currentStage}
        totalStages={ALL_STAGES.length}
        hasNextStage={Boolean(nextStageObj)}
        totalTicks={lastRunMeta.totalTicks}
        codeLines={lastRunMeta.codeLines}
        failureReason={lastRunMeta.failureReason}
        onResume={() => setGameState('PLAYING')}
        onRetrySameCode={resetWorldToTick0}
        onNextStage={() => {
          if (nextStageObj) loadStage(nextStageObj.id);
        }}
        onOpenAtlas={() => setShowAtlas(true)}
        onReturnTitle={() => {
          clearSettleTimer();
          setGameState('TITLE_MENU');
        }}
      />

      {/* Save Data Reset Confirmation Modal */}
      {showResetConfirm && (
        <ResetSaveModal
          totalStages={ALL_STAGES.length}
          progress={progress}
          freeStudyMode={freeStudyMode}
          onConfirmReset={handleResetAllSaveData}
          onClose={() => setShowResetConfirm(false)}
        />
      )}

      {/* Novel Dialogue Overlay (Intro / Outro / Replay) */}
      {activeStory && activeStoryObj && activeStoryStage && (
        <StoryNovelOverlay
          story={activeStoryObj}
          chapterTitle={getStoryChapterTitle(activeStoryStage.chapter)}
          beatPhase={activeStory.phase}
          onComplete={handleCompleteActiveStory}
        />
      )}

      {/* Reset Completion Toast */}
      {resetDoneNotice && (
        <div className="pointer-events-none fixed bottom-5 left-1/2 z-70 -translate-x-1/2">
          <div className="anime-card flex items-center gap-2 rounded-2xl bg-[#F0FDFA] px-4 py-2.5 text-xs font-extrabold text-[#0F766E]">
            <CheckCircle2 className="h-4 w-4 shrink-0" />
            <span>セーブデータを初期化しました</span>
          </div>
        </div>
      )}
    </div>
  );
}
