import React, { useEffect, useRef } from 'react';
import { Volume2, VolumeX, Pause, BookOpen, MessageCircleHeart } from 'lucide-react';
import {
  Direction,
  InStagePhase,
  StageDefinition,
  TickSnapshot,
} from '../types/game';
import { getStageDisplayTitle } from '../data/stages';

import { getPrintDialogueTiming } from '../engine/dialogueTiming';

interface CanvasArenaProps {
  stage: StageDefinition;
  snapshots: TickSnapshot[];
  currentTickIndex: number;
  tickProgress: number; // 0..1 interpolation toward next tick
  phase: InStagePhase;
  speedMultiplier: 1 | 2;
  isGamePaused: boolean;
  muted: boolean;
  onToggleMute: () => void;
  onPause: () => void;
  onOpenBook: () => void;
  onReplayStory: () => void;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
  shape: 'star' | 'circle' | 'puff' | 'confetti';
  rot: number;
  vrot: number;
}

interface FloatingLabel {
  x: number;
  y: number;
  text: string;
  color: string;
  life: number;
  maxLife: number;
}

interface SpeechBubble {
  threadId: string;
  gridX: number;
  gridY: number;
  text: string;
  chars: string[];
  isError: boolean;
  life: number;
  revealDuration: number;
  fadeDuration: number;
  maxLife: number;
}

const INK = '#4A352B';

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

function easeOutBack(t: number): number {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
}

function drawRoundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  const rr = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + rr, y);
  ctx.lineTo(x + w - rr, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + rr);
  ctx.lineTo(x + w, y + h - rr);
  ctx.quadraticCurveTo(x + w, y + h, x + w - rr, y + h);
  ctx.lineTo(x + rr, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - rr);
  ctx.lineTo(x, y + rr);
  ctx.quadraticCurveTo(x, y, x + rr, y);
  ctx.closePath();
}

function drawStar(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  spikes: number,
  outerR: number,
  innerR: number
) {
  let rot = (Math.PI / 2) * 3;
  const step = Math.PI / spikes;
  ctx.beginPath();
  ctx.moveTo(cx, cy - outerR);
  for (let i = 0; i < spikes; i++) {
    ctx.lineTo(cx + Math.cos(rot) * outerR, cy + Math.sin(rot) * outerR);
    rot += step;
    ctx.lineTo(cx + Math.cos(rot) * innerR, cy + Math.sin(rot) * innerR);
    rot += step;
  }
  ctx.lineTo(cx, cy - outerR);
  ctx.closePath();
}

function drawGear(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  r: number,
  teeth: number,
  angle: number,
  fill: string,
  stroke = INK
) {
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(angle);
  ctx.beginPath();
  const inner = r * 0.74;
  for (let i = 0; i < teeth; i++) {
    const a0 = (i / teeth) * Math.PI * 2;
    const a1 = ((i + 0.35) / teeth) * Math.PI * 2;
    const a2 = ((i + 0.5) / teeth) * Math.PI * 2;
    const a3 = ((i + 0.85) / teeth) * Math.PI * 2;
    if (i === 0) ctx.moveTo(Math.cos(a0) * inner, Math.sin(a0) * inner);
    else ctx.lineTo(Math.cos(a0) * inner, Math.sin(a0) * inner);
    ctx.lineTo(Math.cos(a1) * r, Math.sin(a1) * r);
    ctx.lineTo(Math.cos(a2) * r, Math.sin(a2) * r);
    ctx.lineTo(Math.cos(a3) * inner, Math.sin(a3) * inner);
  }
  ctx.closePath();
  ctx.fillStyle = fill;
  ctx.fill();
  ctx.lineWidth = 2;
  ctx.strokeStyle = stroke;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(0, 0, r * 0.35, 0, Math.PI * 2);
  ctx.fillStyle = '#FFF8EE';
  ctx.fill();
  ctx.stroke();
  ctx.restore();
}

function drawCuteCrabBot(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  size: number,
  dir: Direction,
  time: number,
  isWorker: boolean,
  isPanicked: boolean,
  isWaiting: boolean,
  hopPhase: number,
  holdingPower: number | null,
  isSpeaking = false
) {
  ctx.save();

  // Hop bounce & squash-stretch
  const hopLift = hopPhase > 0 && hopPhase < 1 ? Math.sin(hopPhase * Math.PI) * size * 0.22 : 0;
  const breath = Math.sin(time * 3.4 + (isWorker ? 1.5 : 0)) * 0.03;
  const squashX = hopPhase > 0 && hopPhase < 1 ? 1 + Math.sin(hopPhase * Math.PI * 2) * 0.08 : 1 + breath;
  const squashY = hopPhase > 0 && hopPhase < 1 ? 1 - Math.sin(hopPhase * Math.PI * 2) * 0.08 : 1 - breath;

  // Ground shadow
  ctx.beginPath();
  ctx.ellipse(
    cx,
    cy + size * 0.36,
    size * (0.36 - hopLift / (size * 2)),
    size * 0.12,
    0,
    0,
    Math.PI * 2
  );
  ctx.fillStyle = 'rgba(74, 53, 43, 0.2)';
  ctx.fill();

  ctx.translate(cx, cy - hopLift);
  ctx.scale(squashX, squashY);

  const mainColor = isWorker ? '#2DD4BF' : '#FB923C';
  const shadeColor = isWorker ? '#0D9488' : '#EA580C';
  const highlightColor = isWorker ? '#99F6E4' : '#FED7AA';

  // Spinning brass wind-up key on top-back
  ctx.save();
  ctx.translate(0, -size * 0.38);
  const keyW = Math.max(0.25, Math.abs(Math.cos(time * 4.2))) * size * 0.2;
  ctx.fillStyle = '#FBBF24';
  ctx.strokeStyle = INK;
  ctx.lineWidth = 2.2;
  ctx.fillRect(-size * 0.03, 0, size * 0.06, size * 0.14);
  ctx.strokeRect(-size * 0.03, 0, size * 0.06, size * 0.14);
  ctx.beginPath();
  ctx.ellipse(-keyW * 0.55, -size * 0.02, keyW * 0.55, size * 0.09, 0, 0, Math.PI * 2);
  ctx.ellipse(keyW * 0.55, -size * 0.02, keyW * 0.55, size * 0.09, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  // Cute little legs (3 per side)
  ctx.strokeStyle = INK;
  ctx.lineWidth = 3;
  ctx.lineCap = 'round';
  for (let side of [-1, 1]) {
    for (let leg = 0; leg < 3; leg++) {
      const wiggle = Math.sin(time * 8 + leg * 1.4) * (hopPhase > 0 ? 4 : 1);
      const lx = side * size * (0.28 + leg * 0.04);
      const ly = size * (0.1 + leg * 0.06);
      ctx.beginPath();
      ctx.moveTo(side * size * 0.22, ly - 2);
      ctx.lineTo(lx + side * size * 0.12, ly + 4 + wiggle);
      ctx.stroke();
    }
  }

  // Cute Pincers
  const lookDx = dir === 0 ? 1 : dir === 2 ? -1 : 0;
  const lookDy = dir === 1 ? 1 : dir === 3 ? -1 : 0;
  for (let side of [-1, 1]) {
    ctx.save();
    ctx.translate(side * size * 0.38 + lookDx * 3, -size * 0.04 + lookDy * 2);
    ctx.rotate(side * 0.25 + Math.sin(time * 4) * 0.08);
    ctx.beginPath();
    ctx.arc(0, 0, size * 0.13, 0.3, Math.PI * 1.8);
    ctx.lineTo(0, 0);
    ctx.closePath();
    ctx.fillStyle = mainColor;
    ctx.fill();
    ctx.lineWidth = 2.4;
    ctx.strokeStyle = INK;
    ctx.stroke();
    ctx.restore();
  }

  // Main rounded anime crab shell (cel-shaded)
  ctx.beginPath();
  ctx.ellipse(0, 0, size * 0.36, size * 0.29, 0, 0, Math.PI * 2);
  ctx.fillStyle = mainColor;
  ctx.fill();

  // Cel-shaded bottom shadow crescent
  ctx.save();
  ctx.clip();
  ctx.beginPath();
  ctx.ellipse(0, size * 0.14, size * 0.38, size * 0.24, 0, 0, Math.PI * 2);
  ctx.fillStyle = shadeColor;
  ctx.fill();
  // Top anime specular highlight
  ctx.beginPath();
  ctx.ellipse(-size * 0.1, -size * 0.15, size * 0.14, size * 0.06, -0.25, 0, Math.PI * 2);
  ctx.fillStyle = highlightColor;
  ctx.fill();
  ctx.restore();

  // Shell outline
  ctx.beginPath();
  ctx.ellipse(0, 0, size * 0.36, size * 0.29, 0, 0, Math.PI * 2);
  ctx.lineWidth = 2.8;
  ctx.strokeStyle = INK;
  ctx.stroke();

  // Cute ribbon for Milk-bot worker!
  if (isWorker) {
    ctx.save();
    ctx.translate(size * 0.22, -size * 0.24);
    ctx.rotate(0.3);
    ctx.fillStyle = '#F472B6';
    ctx.strokeStyle = INK;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(-10, -7);
    ctx.lineTo(-8, 5);
    ctx.closePath();
    ctx.moveTo(0, 0);
    ctx.lineTo(10, -5);
    ctx.lineTo(8, 7);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, 3.5, 0, Math.PI * 2);
    ctx.fillStyle = '#FDE047';
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }

  // Expressive anime eyes (shift slightly toward facing direction)
  const eyeOffX = lookDx * size * 0.06;
  const eyeOffY = lookDy * size * 0.04;
  const blink = Math.sin(time * 1.9) > 0.96 && !isPanicked;
  for (let side of [-1, 1]) {
    const ex = side * size * 0.13 + eyeOffX;
    const ey = -size * 0.03 + eyeOffY;
    if (isPanicked) {
      // > < anime panic eyes
      ctx.strokeStyle = INK;
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      if (side === -1) {
        ctx.moveTo(ex - 4, ey - 4);
        ctx.lineTo(ex + 3, ey);
        ctx.lineTo(ex - 4, ey + 4);
      } else {
        ctx.moveTo(ex + 4, ey - 4);
        ctx.lineTo(ex - 3, ey);
        ctx.lineTo(ex + 4, ey + 4);
      }
      ctx.stroke();
    } else if (blink) {
      ctx.strokeStyle = INK;
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(ex - 5, ey);
      ctx.lineTo(ex + 5, ey);
      ctx.stroke();
    } else {
      ctx.beginPath();
      ctx.arc(ex, ey, size * 0.085, 0, Math.PI * 2);
      ctx.fillStyle = INK;
      ctx.fill();
      // Big anime sparkle highlight
      ctx.beginPath();
      ctx.arc(ex - size * 0.025, ey - size * 0.028, size * 0.032, 0, Math.PI * 2);
      ctx.fillStyle = '#FFFFFF';
      ctx.fill();
      ctx.beginPath();
      ctx.arc(ex + size * 0.025, ey + size * 0.025, size * 0.015, 0, Math.PI * 2);
      ctx.fillStyle = '#FFFFFF';
      ctx.fill();
    }
  }

  // Rosy anime cheeks
  ctx.fillStyle = 'rgba(244, 114, 182, 0.55)';
  ctx.beginPath();
  ctx.ellipse(-size * 0.21 + eyeOffX, size * 0.05 + eyeOffY, size * 0.055, size * 0.03, 0, 0, Math.PI * 2);
  ctx.ellipse(size * 0.21 + eyeOffX, size * 0.05 + eyeOffY, size * 0.055, size * 0.03, 0, 0, Math.PI * 2);
  ctx.fill();

  // Tiny smile / animated speaking mouth
  ctx.strokeStyle = INK;
  ctx.lineWidth = 2;
  ctx.beginPath();
  if (isPanicked) {
    ctx.arc(eyeOffX, size * 0.1 + eyeOffY, size * 0.04, 0, Math.PI * 2);
    ctx.stroke();
  } else if (isSpeaking) {
    const openH = size * (0.032 + Math.abs(Math.sin(time * 22)) * 0.035);
    ctx.ellipse(eyeOffX, size * 0.085 + eyeOffY, size * 0.055, openH, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#FB7185';
    ctx.fill();
    ctx.stroke();
  } else {
    ctx.arc(eyeOffX, size * 0.06 + eyeOffY, size * 0.055, 0.2, Math.PI - 0.2);
    ctx.stroke();
  }

  // Direction indicator arrow
  ctx.save();
  ctx.translate(lookDx * size * 0.46, lookDy * size * 0.46);
  ctx.rotate((dir * Math.PI) / 2);
  ctx.beginPath();
  ctx.moveTo(6, 0);
  ctx.lineTo(-4, -5);
  ctx.lineTo(-4, 5);
  ctx.closePath();
  ctx.fillStyle = '#FDE047';
  ctx.fill();
  ctx.lineWidth = 1.8;
  ctx.strokeStyle = INK;
  ctx.stroke();
  ctx.restore();

  // Held Energy Core above head
  if (holdingPower !== null) {
    ctx.save();
    ctx.translate(0, -size * 0.56);
    drawStar(ctx, 0, 0, 6, size * 0.17, size * 0.09);
    ctx.fillStyle = '#FBBF24';
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = INK;
    ctx.stroke();
    ctx.fillStyle = INK;
    ctx.font = `700 ${Math.max(10, Math.round(size * 0.16))}px "JetBrains Mono", monospace`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`⚡${holdingPower}`, 0, 1);
    ctx.restore();
  }

  // Waiting bubble (for recv() or Mutex lock())
  if (isWaiting) {
    ctx.save();
    ctx.translate(size * 0.34, -size * 0.36);
    drawRoundedRect(ctx, -18, -12, 36, 20, 8);
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = INK;
    ctx.stroke();
    const dots = '.'.repeat((Math.floor(time * 3) % 3) + 1);
    ctx.fillStyle = INK;
    ctx.font = '700 12px "JetBrains Mono", monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(dots, 0, -2);
    ctx.restore();
  }

  ctx.restore();
}

export const CanvasArena: React.FC<CanvasArenaProps> = ({
  stage,
  snapshots,
  currentTickIndex,
  tickProgress,
  phase,
  speedMultiplier,
  isGamePaused,
  muted,
  onToggleMute,
  onPause,
  onOpenBook,
  onReplayStory,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Store latest props in ref so 60fps loop never restarts on React state updates
  const latestRef = useRef({
    stage,
    snapshots,
    currentTickIndex,
    tickProgress,
    phase,
    speedMultiplier,
    isGamePaused,
  });
  latestRef.current = {
    stage,
    snapshots,
    currentTickIndex,
    tickProgress,
    phase,
    speedMultiplier,
    isGamePaused,
  };

  const animRef = useRef({
    particles: [] as Particle[],
    labels: [] as FloatingLabel[],
    speechBubbles: [] as SpeechBubble[],
    lastCueTick: -1,
    shakeTime: 0,
    shakeMag: 0,
    hitstopTime: 0,
    prevPhase: phase,
  });

  // Reset visual effects when stage changes or resets to Tick 0
  useEffect(() => {
    if (currentTickIndex === 0 || phase === 'OBSERVE_EDIT' || phase === 'COMPILE_ERROR') {
      animRef.current.lastCueTick = -1;
      animRef.current.particles = [];
      animRef.current.labels = [];
      animRef.current.speechBubbles = [];
    }
  }, [stage.id, currentTickIndex, phase]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    let rafId = 0;
    let lastTime = performance.now();
    let elapsed = 0;

    const spawnParticles = (
      px: number,
      py: number,
      count: number,
      color: string,
      shape: Particle['shape']
    ) => {
      for (let i = 0; i < count; i++) {
        const ang = (Math.PI * 2 * i) / count + Math.random() * 0.5;
        const spd = 25 + Math.random() * 65;
        animRef.current.particles.push({
          x: px,
          y: py,
          vx: Math.cos(ang) * spd,
          vy: Math.sin(ang) * spd - 15,
          life: 0,
          maxLife: 0.45 + Math.random() * 0.35,
          size: shape === 'confetti' ? 6 + Math.random() * 4 : 4 + Math.random() * 4,
          color,
          shape,
          rot: Math.random() * Math.PI * 2,
          vrot: (Math.random() - 0.5) * 8,
        });
      }
    };

    const render = (now: number) => {
      rafId = requestAnimationFrame(render);
      const rawDt = (now - lastTime) / 1000;
      lastTime = now;
      const dt = Math.min(Math.max(rawDt, 0.001), 0.05);

      const state = animRef.current;
      if (state.hitstopTime > 0) {
        state.hitstopTime = Math.max(0, state.hitstopTime - dt);
        return;
      }
      elapsed += dt;
      if (state.shakeTime > 0) {
        state.shakeTime = Math.max(0, state.shakeTime - dt);
      }

      const {
        stage: stg,
        snapshots: snaps,
        currentTickIndex: tIdx,
        tickProgress: tProg,
        phase: ph,
        speedMultiplier: spd,
        isGamePaused: pausedGame,
      } = latestRef.current;

      const dpr = window.devicePixelRatio || 1;
      const rect = container.getBoundingClientRect();
      const width = Math.max(320, Math.floor(rect.width));
      const height = Math.max(260, Math.floor(rect.height));
      if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
        canvas.width = width * dpr;
        canvas.height = height * dpr;
      }

      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.save();
      ctx.scale(dpr, dpr);

      // Camera shake offset
      if (state.shakeTime > 0) {
        const decay = state.shakeTime / 0.32;
        const mag = state.shakeMag * decay;
        ctx.translate((Math.random() - 0.5) * mag, (Math.random() - 0.5) * mag);
      }

      // 1. Cozy Sunlit Atelier Backdrop
      const bgGrad = ctx.createLinearGradient(0, 0, width, height);
      bgGrad.addColorStop(0, '#FFF6E6');
      bgGrad.addColorStop(1, '#F5DFC2');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Background subtle decorative spinning gears in corners
      drawGear(ctx, 56, height - 48, 42, 10, elapsed * 0.28, '#EAD0AF', 'rgba(74, 53, 43, 0.2)');
      drawGear(ctx, 118, height - 22, 26, 8, -elapsed * 0.42, '#F3DFC4', 'rgba(74, 53, 43, 0.2)');
      drawGear(ctx, width - 54, 72, 34, 9, elapsed * 0.3, '#EAD0AF', 'rgba(74, 53, 43, 0.2)');

      // Compute board layout
      const setup = stg.worldSetup;
      const padX = 48;
      const padTop = 76;
      const padBottom = 56;
      const availW = Math.max(200, width - padX * 2);
      const availH = Math.max(160, height - padTop - padBottom);
      const tileSize = Math.floor(Math.min(availW / setup.width, availH / setup.height, 96));
      const boardW = tileSize * setup.width;
      const boardH = tileSize * setup.height;
      const originX = Math.floor((width - boardW) / 2);
      const originY = Math.floor(padTop + (availH - boardH) / 2);

      // Wooden frame tray around board
      drawRoundedRect(ctx, originX - 14, originY - 14, boardW + 28, boardH + 28, 22);
      ctx.fillStyle = '#D9B184';
      ctx.fill();
      ctx.lineWidth = 3;
      ctx.strokeStyle = INK;
      ctx.stroke();

      const snapA = snaps[Math.min(tIdx, Math.max(0, snaps.length - 1))];
      const snapB = snaps[Math.min(tIdx + 1, Math.max(0, snaps.length - 1))];

      // Trigger particles & hitstop on new tick cues
      if (snapA && state.lastCueTick !== snapA.tick) {
        state.lastCueTick = snapA.tick;
        for (const cue of snapA.cues) {
          const cx = originX + (cue.x + 0.5) * tileSize;
          const cy = originY + (cue.y + 0.5) * tileSize;
          if (cue.kind === 'hop') {
            spawnParticles(cx, cy + tileSize * 0.2, 5, '#FFF8EE', 'puff');
          } else if (cue.kind === 'scan' || cue.kind === 'test_pass') {
            spawnParticles(cx, cy, 8, '#2DD4BF', 'star');
          } else if (cue.kind === 'boost' || cue.kind === 'deliver') {
            spawnParticles(cx, cy, 10, '#FBBF24', 'star');
          } else if (cue.kind === 'channel_send' || cue.kind === 'channel_recv') {
            spawnParticles(cx, cy, 8, '#F472B6', 'star');
          } else if (cue.kind === 'crash') {
            state.hitstopTime = 0.045;
            state.shakeTime = 0.32;
            state.shakeMag = 10;
            spawnParticles(cx, cy, 14, '#F87171', 'star');
          }
          if (cue.kind === 'print' && cue.text !== undefined) {
            const tId = cue.threadId ?? 'main';
            state.speechBubbles = state.speechBubbles.filter((b) => b.threadId !== tId);
            const timing1x = getPrintDialogueTiming(cue.text, 1);
            const chars = Array.from(cue.text);
            state.speechBubbles.push({
              threadId: tId,
              gridX: cue.x,
              gridY: cue.y,
              text: cue.text,
              chars,
              isError: Boolean(cue.isError),
              life: 0,
              revealDuration: timing1x.revealMs / 1000,
              fadeDuration: timing1x.fadeMs / 1000,
              maxLife: timing1x.totalMs / 1000,
            });
          } else if (cue.text) {
            state.labels.push({
              x: cx,
              y: cy - tileSize * 0.32,
              text: cue.text,
              color: INK,
              life: 0,
              maxLife: 1.15,
            });
          }
        }
        if (snapA.outcome === 'CLEARED') {
          const gx = originX + (setup.goal.x + 0.5) * tileSize;
          const gy = originY + (setup.goal.y + 0.5) * tileSize;
          spawnParticles(gx, gy, 20, '#F97316', 'confetti');
          spawnParticles(gx, gy, 18, '#2DD4BF', 'confetti');
          spawnParticles(gx, gy, 16, '#FBBF24', 'confetti');
        }
      }

      if (state.prevPhase !== ph && ph === 'CLEARED') {
        const gx = originX + (setup.goal.x + 0.5) * tileSize;
        const gy = originY + (setup.goal.y + 0.5) * tileSize;
        spawnParticles(gx, gy, 24, '#FBBF24', 'confetti');
      }
      state.prevPhase = ph;

      const wallSet = new Set(setup.walls.map((w) => `${w.x},${w.y}`));

      // 2. Draw Grid Tiles
      for (let ty = 0; ty < setup.height; ty++) {
        for (let tx = 0; tx < setup.width; tx++) {
          const px = originX + tx * tileSize;
          const py = originY + ty * tileSize;
          const isWall = wallSet.has(`${tx},${ty}`);

          if (isWall) {
            // Cozy craft crate / wooden block wall
            drawRoundedRect(ctx, px + 3, py + 3, tileSize - 6, tileSize - 6, 12);
            ctx.fillStyle = '#B8895C';
            ctx.fill();
            ctx.lineWidth = 2.4;
            ctx.strokeStyle = INK;
            ctx.stroke();

            // Cute crate cross slats
            ctx.beginPath();
            ctx.moveTo(px + 10, py + 10);
            ctx.lineTo(px + tileSize - 10, py + tileSize - 10);
            ctx.strokeStyle = 'rgba(74, 53, 43, 0.25)';
            ctx.lineWidth = 2;
            ctx.stroke();
          } else {
            // Honey-oak parquet floor tile
            drawRoundedRect(ctx, px + 2, py + 2, tileSize - 4, tileSize - 4, 12);
            ctx.fillStyle = (tx + ty) % 2 === 0 ? '#FFF4E3' : '#FCEAD1';
            ctx.fill();
            ctx.lineWidth = 1.6;
            ctx.strokeStyle = '#DFC39F';
            ctx.stroke();
          }
        }
      }

      // 2.5. Draw Conveyor Belts (direction arrows + animated chevron motion)
      for (const cv of setup.conveyors ?? []) {
        const px = originX + cv.x * tileSize;
        const py = originY + cv.y * tileSize;
        const cx = px + tileSize / 2;
        const cy = py + tileSize / 2;
        const angle = cv.dir * (Math.PI / 2);

        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(angle);
        drawRoundedRect(
          ctx,
          -tileSize * 0.4,
          -tileSize * 0.34,
          tileSize * 0.8,
          tileSize * 0.68,
          8
        );
        ctx.fillStyle = '#E0E7FF';
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#4F46E5';
        ctx.stroke();

        // Moving animated chevrons
        const phase = (elapsed * 1.8) % 1;
        for (let k = -1; k <= 1; k++) {
          const offset = (k + phase - 0.5) * (tileSize * 0.24);
          if (Math.abs(offset) > tileSize * 0.28) continue;
          ctx.beginPath();
          ctx.moveTo(offset - 5, -tileSize * 0.16);
          ctx.lineTo(offset + 5, 0);
          ctx.lineTo(offset - 5, tileSize * 0.16);
          ctx.strokeStyle = '#3730A3';
          ctx.lineWidth = 2.6;
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          ctx.stroke();
        }
        ctx.restore();
      }

      // 2.6. Draw Switch-to-Gate Circuit Lines & Floor Switches
      const activeSwSet = new Set(
        (snapA?.switchesActive ?? []).map((sw) => `${sw.x},${sw.y}`)
      );
      for (const g of setup.gates ?? []) {
        if (!g.linkedSwitch) continue;
        const sx = originX + (g.linkedSwitch.x + 0.5) * tileSize;
        const sy = originY + (g.linkedSwitch.y + 0.5) * tileSize;
        const gx = originX + (g.x + 0.5) * tileSize;
        const gy = originY + (g.y + 0.5) * tileSize;
        const isLit = activeSwSet.has(`${g.linkedSwitch.x},${g.linkedSwitch.y}`);
        ctx.save();
        ctx.setLineDash([6, 5]);
        ctx.lineWidth = isLit ? 3 : 2;
        ctx.strokeStyle = isLit ? '#0D9488' : '#F97316';
        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.lineTo(gx, gy);
        ctx.stroke();
        ctx.restore();
      }

      for (const sw of setup.switches ?? []) {
        const cx = originX + (sw.x + 0.5) * tileSize;
        const cy = originY + (sw.y + 0.5) * tileSize;
        const isPressed = activeSwSet.has(`${sw.x},${sw.y}`);
        drawRoundedRect(
          ctx,
          cx - tileSize * 0.34,
          cy - tileSize * 0.34,
          tileSize * 0.68,
          tileSize * 0.68,
          12
        );
        ctx.fillStyle = isPressed ? '#99F6E4' : '#FED7AA';
        ctx.fill();
        ctx.lineWidth = 2.2;
        ctx.strokeStyle = INK;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(cx, cy, tileSize * 0.17, 0, Math.PI * 2);
        ctx.fillStyle = isPressed ? '#0D9488' : '#EA580C';
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#FFFFFF';
        ctx.font = '700 10px "M PLUS Rounded 1c", sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(isPressed ? 'ON' : 'SW', cx, cy);
      }

      // 3. Draw Special Pedestals (Goal, Worker Goal, Scanners, Chargers, Deliveries, Vault, Dial)
      const drawGoalFlag = (gx: number, gy: number, color: string, label: string) => {
        const cx = originX + (gx + 0.5) * tileSize;
        const cy = originY + (gy + 0.5) * tileSize;
        const pulse = 1 + Math.sin(elapsed * 4) * 0.06;

        ctx.save();
        ctx.translate(cx, cy);
        ctx.scale(pulse, pulse);
        ctx.beginPath();
        ctx.arc(0, 0, tileSize * 0.34, 0, Math.PI * 2);
        ctx.fillStyle = color === '#F97316' ? 'rgba(249, 115, 22, 0.16)' : 'rgba(20, 184, 166, 0.16)';
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 4]);
        ctx.strokeStyle = color;
        ctx.stroke();
        ctx.setLineDash([]);

        // Cute flag
        ctx.strokeStyle = INK;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(-8, 14);
        ctx.lineTo(-8, -16);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(-8, -16);
        ctx.lineTo(14, -8);
        ctx.lineTo(-8, 0);
        ctx.closePath();
        ctx.fillStyle = color;
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.fillStyle = INK;
        ctx.font = '700 10px "M PLUS Rounded 1c", sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(label, 0, tileSize * 0.38);
        ctx.restore();
      };

      // Separate Delivery Pedestals (when not overlapping goal)
      for (const del of setup.deliveries ?? []) {
        if (del.x === setup.goal.x && del.y === setup.goal.y) continue;
        const cx = originX + (del.x + 0.5) * tileSize;
        const cy = originY + (del.y + 0.5) * tileSize;
        drawRoundedRect(ctx, cx - tileSize * 0.34, cy - tileSize * 0.28, tileSize * 0.68, tileSize * 0.56, 10);
        ctx.fillStyle = '#FFEDD5';
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#EA580C';
        ctx.stroke();
        ctx.fillStyle = '#C2410C';
        ctx.font = '700 11px "M PLUS Rounded 1c", sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('納品台', cx, cy);
      }

      drawGoalFlag(setup.goal.x, setup.goal.y, '#F97316', 'ゴール');
      if (setup.workerGoal) {
        drawGoalFlag(setup.workerGoal.x, setup.workerGoal.y, '#14B8A6', '2号ゴール');
      }

      // Scanners (&T)
      for (const sc of setup.scanners ?? []) {
        const cx = originX + (sc.x + 0.5) * tileSize;
        const cy = originY + (sc.y + 0.5) * tileSize;
        drawRoundedRect(ctx, cx - tileSize * 0.32, cy - tileSize * 0.28, tileSize * 0.64, tileSize * 0.56, 10);
        ctx.fillStyle = '#CCFBF1';
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = INK;
        ctx.stroke();
        ctx.fillStyle = '#0F766E';
        ctx.font = '700 12px "JetBrains Mono", monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('&T検査', cx, cy);
      }

      // Chargers (&mut T)
      for (const ch of setup.chargers ?? []) {
        const cx = originX + (ch.x + 0.5) * tileSize;
        const cy = originY + (ch.y + 0.5) * tileSize;
        drawRoundedRect(ctx, cx - tileSize * 0.34, cy - tileSize * 0.28, tileSize * 0.68, tileSize * 0.56, 10);
        ctx.fillStyle = '#FEF3C7';
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = INK;
        ctx.stroke();
        ctx.fillStyle = '#B45309';
        ctx.font = '700 11px "JetBrains Mono", monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('&mut強化', cx, cy);
      }

      // Shared Vault (let mut / Mutex)
      if (setup.vault) {
        const cx = originX + (setup.vault.x + 0.5) * tileSize;
        const cy = originY + (setup.vault.y + 0.5) * tileSize;
        const vVal = snapA?.vaultValue ?? setup.vault.initial;
        drawRoundedRect(ctx, cx - tileSize * 0.36, cy - tileSize * 0.34, tileSize * 0.72, tileSize * 0.68, 12);
        ctx.fillStyle = vVal >= setup.vault.target ? '#FEF08A' : '#FDE68A';
        ctx.fill();
        ctx.lineWidth = 2.4;
        ctx.strokeStyle = INK;
        ctx.stroke();
        ctx.fillStyle = INK;
        ctx.font = '700 11px "M PLUS Rounded 1c", sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('金庫', cx, cy - 8);
        ctx.font = '700 13px "JetBrains Mono", monospace';
        ctx.fillText(`⚡${vVal}/${setup.vault.target}`, cx, cy + 10);
      }

      // Secret Dial (Ch.2)
      if (setup.dial) {
        const cx = originX + ((setup.dial.x ?? setup.goal.x) + 0.5) * tileSize;
        const cy = originY + ((setup.dial.y ?? setup.goal.y) + 0.5) * tileSize;
        ctx.beginPath();
        ctx.arc(cx, cy, tileSize * 0.32, 0, Math.PI * 2);
        ctx.fillStyle = snapA?.dialSolved ? '#A7F3D0' : '#FCE7F3';
        ctx.fill();
        ctx.lineWidth = 2.4;
        ctx.strokeStyle = INK;
        ctx.stroke();
        ctx.fillStyle = INK;
        ctx.font = '700 11px "M PLUS Rounded 1c", sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(snapA?.dialSolved ? `一致!` : 'ダイヤル', cx, cy);
      }

      // 4. Periodic Steam Gates with Clear Countdown Badges
      const gates = snapA?.gates ?? [];
      for (const g of gates) {
        const px = originX + g.x * tileSize;
        const py = originY + g.y * tileSize;
        const cx = px + tileSize / 2;
        const cy = py + tileSize / 2;

        if (g.isOpen) {
          drawRoundedRect(ctx, px + 6, py + 6, tileSize - 12, tileSize - 12, 10);
          ctx.fillStyle = 'rgba(16, 185, 129, 0.18)';
          ctx.fill();
          ctx.lineWidth = 2;
          ctx.strokeStyle = '#10B981';
          ctx.stroke();
        } else {
          drawRoundedRect(ctx, px + 6, py + 6, tileSize - 12, tileSize - 12, 10);
          ctx.fillStyle = '#FECACA';
          ctx.fill();
          ctx.lineWidth = 2.4;
          ctx.strokeStyle = INK;
          ctx.stroke();

          // Cute cross bars
          ctx.beginPath();
          ctx.moveTo(px + 12, py + tileSize / 2 - 4);
          ctx.lineTo(px + tileSize - 12, py + tileSize / 2 - 4);
          ctx.moveTo(px + 12, py + tileSize / 2 + 4);
          ctx.lineTo(px + tileSize - 12, py + tileSize / 2 + 4);
          ctx.strokeStyle = '#EF4444';
          ctx.lineWidth = 4;
          ctx.stroke();
        }

        // Countdown label
        if (g.countdown > 0) {
          drawRoundedRect(ctx, cx - 22, py + 4, 44, 18, 6);
          ctx.fillStyle = '#FFFFFF';
          ctx.fill();
          ctx.lineWidth = 1.6;
          ctx.strokeStyle = INK;
          ctx.stroke();
          ctx.fillStyle = g.isOpen ? '#047857' : '#B91C1C';
          ctx.font = '700 10px "M PLUS Rounded 1c", sans-serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(g.isOpen ? `開:${g.countdown}` : `閉:${g.countdown}`, cx, py + 13);
        }
      }

      // 5. Unheld Energy Cores on Map
      for (const core of snapA?.cores ?? []) {
        if (core.heldBy || core.delivered) continue;
        const cx = originX + (core.x + 0.5) * tileSize;
        const cy = originY + (core.y + 0.5) * tileSize + Math.sin(elapsed * 4) * 3;
        drawStar(ctx, cx, cy, 6, tileSize * 0.24, tileSize * 0.13);
        ctx.fillStyle = '#FBBF24';
        ctx.fill();
        ctx.lineWidth = 2.2;
        ctx.strokeStyle = INK;
        ctx.stroke();
      }

      // 5.5. Patrolling Sparks (track + smoothly interpolated crackling orb)
      for (const spSpec of setup.sparks ?? []) {
        if (spSpec.path.length > 1) {
          ctx.save();
          ctx.setLineDash([4, 5]);
          ctx.strokeStyle = 'rgba(225, 29, 72, 0.35)';
          ctx.lineWidth = 2;
          ctx.beginPath();
          spSpec.path.forEach((pt, idx) => {
            const px = originX + (pt.x + 0.5) * tileSize;
            const py = originY + (pt.y + 0.5) * tileSize;
            if (idx === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          });
          ctx.stroke();
          ctx.restore();
        }
      }

      for (const spA of snapA?.sparks ?? []) {
        const spB = snapB?.sparks?.find((b) => b.id === spA.id) ?? spA;
        const jumpDist = Math.abs(spA.x - spB.x) + Math.abs(spA.y - spB.y);
        const sx = jumpDist <= 1 ? lerp(spA.x, spB.x, tProg) : spA.x;
        const sy = jumpDist <= 1 ? lerp(spA.y, spB.y, tProg) : spA.y;
        const cx = originX + (sx + 0.5) * tileSize;
        const cy = originY + (sy + 0.5) * tileSize;
        const pulse = 1 + Math.sin(elapsed * 12) * 0.12;

        ctx.save();
        ctx.translate(cx, cy);
        ctx.scale(pulse, pulse);
        // Danger aura
        ctx.beginPath();
        ctx.arc(0, 0, tileSize * 0.32, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(244, 63, 94, 0.22)';
        ctx.fill();
        // Electric star core
        ctx.rotate(elapsed * 3.5);
        drawStar(ctx, 0, 0, 8, tileSize * 0.26, tileSize * 0.11);
        ctx.fillStyle = '#FB7185';
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#881337';
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(0, 0, tileSize * 0.09, 0, Math.PI * 2);
        ctx.fillStyle = '#FEF08A';
        ctx.fill();
        ctx.restore();
      }

      // 6. Cute Threads / Bots (with smooth interpolation!)
      const threadsA = snapA?.threads ?? [];
      const threadsB = snapB?.threads ?? [];

      threadsA.forEach((thA, idx) => {
        const thB = threadsB.find((b) => b.id === thA.id) ?? thA;
        const smoothT = thA.x !== thB.x || thA.y !== thB.y ? easeOutBack(Math.min(1, tProg)) : tProg;
        const bx = lerp(thA.x, thB.x, smoothT);
        const by = lerp(thA.y, thB.y, smoothT);
        const px = originX + (bx + 0.5) * tileSize;
        const py = originY + (by + 0.5) * tileSize;
        const isMoving = thA.x !== thB.x || thA.y !== thB.y;
        const hopPhase = isMoving ? tProg : 0;

        // Draw Ownership / Borrow Ribbon Tether when scanning/boosting
        if (thA.lastAction.includes('scan') && setup.scanners?.[0]) {
          const sx = originX + (setup.scanners[0].x + 0.5) * tileSize;
          const sy = originY + (setup.scanners[0].y + 0.5) * tileSize;
          ctx.save();
          ctx.setLineDash([6, 5]);
          ctx.strokeStyle = '#14B8A6';
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.moveTo(px, py - tileSize * 0.25);
          ctx.lineTo(sx, sy);
          ctx.stroke();
          ctx.restore();
        }
        if (thA.lastAction.includes('boost') && setup.chargers?.[0]) {
          const sx = originX + (setup.chargers[0].x + 0.5) * tileSize;
          const sy = originY + (setup.chargers[0].y + 0.5) * tileSize;
          ctx.save();
          ctx.strokeStyle = '#F59E0B';
          ctx.lineWidth = 4;
          ctx.beginPath();
          ctx.moveTo(px, py - tileSize * 0.25);
          ctx.lineTo(sx, sy);
          ctx.stroke();
          ctx.restore();
        }

        const activeBubble = state.speechBubbles.find(
          (b) => b.threadId === thA.id && b.life < b.revealDuration + 0.08
        );

        drawCuteCrabBot(
          ctx,
          px,
          py,
          tileSize * 0.78,
          thA.dir,
          elapsed,
          idx > 0 || thA.id !== 'main',
          thA.status === 'PANICKED',
          thA.status === 'WAITING_RECV' || thA.status === 'WAITING_LOCK',
          hopPhase,
          thA.holdingCoreId ? thA.holdingPower : null,
          Boolean(activeBubble)
        );
      });

      // 7. Particles & Floating Labels
      for (let i = state.particles.length - 1; i >= 0; i--) {
        const p = state.particles[i];
        p.life += dt;
        if (p.life >= p.maxLife) {
          state.particles.splice(i, 1);
          continue;
        }
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.vy += 80 * dt;
        p.rot += p.vrot * dt;
        const alpha = 1 - p.life / p.maxLife;
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        if (p.shape === 'star') {
          drawStar(ctx, 0, 0, 5, p.size, p.size * 0.45);
          ctx.fill();
        } else if (p.shape === 'confetti') {
          ctx.fillRect(-p.size / 2, -p.size / 3, p.size, p.size * 0.65);
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }

      for (let i = state.labels.length - 1; i >= 0; i--) {
        const lb = state.labels[i];
        lb.life += dt;
        if (lb.life >= lb.maxLife) {
          state.labels.splice(i, 1);
          continue;
        }
        const alpha = 1 - lb.life / lb.maxLife;
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.font = '700 12px "M PLUS Rounded 1c", sans-serif';
        const tw = Math.min(180, ctx.measureText(lb.text).width + 18);
        drawRoundedRect(ctx, lb.x - tw / 2, lb.y - 12 - lb.life * 18, tw, 22, 8);
        ctx.fillStyle = '#FFFFFF';
        ctx.fill();
        ctx.lineWidth = 1.8;
        ctx.strokeStyle = INK;
        ctx.stroke();
        ctx.fillStyle = lb.color;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(lb.text, lb.x, lb.y - 1 - lb.life * 18, tw - 10);
        ctx.restore();
      }

      // 8. Anime Speech Bubbles for println! / eprintln!
      for (let i = state.speechBubbles.length - 1; i >= 0; i--) {
        const sb = state.speechBubbles[i];
        if (!pausedGame) {
          const stepDt = dt * (spd === 2 ? 2 : 1);
          if (ph === 'PAUSED_SIM') {
            const holdCap = Math.max(0, sb.maxLife - sb.fadeDuration);
            sb.life = Math.min(holdCap, sb.life + stepDt);
          } else {
            sb.life += stepDt;
          }
        }
        if (sb.life >= sb.maxLife) {
          state.speechBubbles.splice(i, 1);
          continue;
        }

        // Locate speaker bot position smoothly
        const thA = threadsA.find((t) => t.id === sb.threadId);
        const thB = thA ? threadsB.find((b) => b.id === thA.id) ?? thA : undefined;
        let anchorX = originX + (sb.gridX + 0.5) * tileSize;
        let anchorY = originY + (sb.gridY + 0.5) * tileSize;
        if (thA && thB) {
          const smoothT = thA.x !== thB.x || thA.y !== thB.y ? easeOutBack(Math.min(1, tProg)) : tProg;
          anchorX = originX + (lerp(thA.x, thB.x, smoothT) + 0.5) * tileSize;
          anchorY = originY + (lerp(thA.y, thB.y, smoothT) + 0.5) * tileSize;
        }

        const fadeStart = Math.max(0, sb.maxLife - sb.fadeDuration);
        const alpha =
          sb.life > fadeStart && sb.fadeDuration > 0
            ? Math.max(0, 1 - (sb.life - fadeStart) / sb.fadeDuration)
            : 1;
        const popT = Math.min(1, sb.life / 0.11);
        const scale = popT < 1 ? easeOutBack(popT) : 1;

        const revealRatio =
          sb.revealDuration > 0 ? Math.min(1, sb.life / sb.revealDuration) : 1;
        const visibleCount =
          sb.chars.length === 0
            ? 0
            : Math.max(1, Math.ceil(revealRatio * sb.chars.length));
        const visibleText = sb.chars.slice(0, visibleCount).join('');

        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.font = '700 13px "M PLUS Rounded 1c", "JetBrains Mono", sans-serif';

        const maxTextW = Math.min(280, Math.max(140, width - 56));
        const padXBubble = 14;
        const padYBubble = 9;
        const lineH = 18;

        // Compute wrapped lines for full text so bubble frame stays steady while typing
        const wrapText = (src: string): string[] => {
          const paragraphs = src.split('\n');
          const out: string[] = [];
          for (const p of paragraphs) {
            if (p.length === 0) {
              out.push('');
              continue;
            }
            let cur = '';
            for (const ch of Array.from(p)) {
              const test = cur + ch;
              if (ctx.measureText(test).width > maxTextW && cur.length > 0) {
                out.push(cur);
                cur = ch;
              } else {
                cur = test;
              }
            }
            if (cur.length > 0) out.push(cur);
          }
          return out.length > 0 ? out : [''];
        };

        const fullLines = wrapText(sb.isError ? `[stderr] ${sb.text}` : sb.text);
        const displayRaw = sb.isError
          ? `[stderr] ${visibleText}`
          : visibleText;
        const visibleLines = wrapText(displayRaw);

        let measuredW = 48;
        for (const ln of fullLines) {
          measuredW = Math.max(measuredW, ctx.measureText(ln).width);
        }
        const bubbleW = Math.min(maxTextW + padXBubble * 2, Math.ceil(measuredW) + padXBubble * 2);
        const bubbleH = fullLines.length * lineH + padYBubble * 2;

        const tailH = 9;
        const botHeadY = anchorY - tileSize * 0.42;
        const placeBelow = botHeadY - tailH - bubbleH < 56;

        let bx = anchorX - bubbleW / 2;
        bx = Math.max(12, Math.min(width - bubbleW - 12, bx));
        const by = placeBelow
          ? anchorY + tileSize * 0.4 + tailH
          : botHeadY - tailH - bubbleH;

        const tailTipX = Math.max(bx + 14, Math.min(bx + bubbleW - 14, anchorX));
        const tailBaseY = placeBelow ? by : by + bubbleH;
        const tailTipY = placeBelow ? by - tailH : by + bubbleH + tailH;

        ctx.translate(tailTipX, tailTipY);
        ctx.scale(scale, scale);
        ctx.translate(-tailTipX, -tailTipY);

        // Drop shadow
        drawRoundedRect(ctx, bx, by + 3, bubbleW, bubbleH, 12);
        ctx.fillStyle = sb.isError ? 'rgba(190, 18, 60, 0.2)' : 'rgba(74, 53, 43, 0.16)';
        ctx.fill();

        // Main bubble box
        drawRoundedRect(ctx, bx, by, bubbleW, bubbleH, 12);
        ctx.fillStyle = sb.isError ? '#FFF1F2' : '#FFFDF9';
        ctx.fill();
        ctx.lineWidth = 2.4;
        ctx.strokeStyle = sb.isError ? '#BE123C' : INK;
        ctx.stroke();

        // Speech tail
        ctx.beginPath();
        ctx.moveTo(tailTipX - 7, tailBaseY);
        ctx.lineTo(tailTipX, tailTipY);
        ctx.lineTo(tailTipX + 7, tailBaseY);
        ctx.closePath();
        ctx.fillStyle = sb.isError ? '#FFF1F2' : '#FFFDF9';
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(tailTipX - 7, tailBaseY);
        ctx.lineTo(tailTipX, tailTipY);
        ctx.lineTo(tailTipX + 7, tailBaseY);
        ctx.lineWidth = 2.4;
        ctx.strokeStyle = sb.isError ? '#BE123C' : INK;
        ctx.stroke();

        // Cover tail seam line cleanly
        ctx.beginPath();
        ctx.moveTo(tailTipX - 5.5, tailBaseY);
        ctx.lineTo(tailTipX + 5.5, tailBaseY);
        ctx.lineWidth = 3.2;
        ctx.strokeStyle = sb.isError ? '#FFF1F2' : '#FFFDF9';
        ctx.stroke();

        // Render typed lines
        ctx.fillStyle = sb.isError ? '#9F1239' : INK;
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        visibleLines.forEach((ln, lineIdx) => {
          const ly = by + padYBubble + lineIdx * lineH + lineH / 2;
          ctx.fillText(ln, bx + padXBubble, ly);
        });

        // Subtle typing caret while revealing
        if (visibleCount < sb.chars.length && Math.floor(elapsed * 10) % 2 === 0) {
          const lastIdx = visibleLines.length - 1;
          const lastStr = visibleLines[lastIdx] ?? '';
          const caretX = bx + padXBubble + ctx.measureText(lastStr).width + 2;
          const caretY = by + padYBubble + lastIdx * lineH + 3;
          ctx.fillStyle = sb.isError ? '#BE123C' : '#F97316';
          ctx.fillRect(caretX, caretY, 2.5, lineH - 6);
        }

        ctx.restore();
      }

      ctx.restore();
    };

    rafId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const currentSnap = snapshots[Math.min(currentTickIndex, Math.max(0, snapshots.length - 1))];
  const tickNum = currentSnap?.tick ?? 0;

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden rounded-2xl border-2 border-[#4A352B] bg-[#FFF6E6] select-none"
    >
      <canvas ref={canvasRef} className="block w-full h-full" />

      {/* Low-occlusion perimeter HUD (pointer-events: none wrapper) */}
      <div className="pointer-events-none absolute inset-x-3 top-3 flex items-start justify-between gap-3">
        <div className="pointer-events-auto flex items-center gap-2 rounded-xl border-2 border-[#4A352B] bg-[#FFFDF9] px-3 py-1.5 shadow-[0_3px_0_#D9C0A3]">
          <span className="font-code text-xs font-bold text-[#EA580C]">
            {stage.displayId}
          </span>
          <span className="text-xs text-[#7C6154]">·</span>
          <span className="text-xs font-bold text-[#4A352B] truncate max-w-[230px]">
            {getStageDisplayTitle(stage)}
          </span>
        </div>

        <div className="pointer-events-auto flex items-center gap-2">
          <div className="rounded-xl border-2 border-[#4A352B] bg-[#FFFDF9] px-3 py-1.5 shadow-[0_3px_0_#D9C0A3] flex items-center gap-2 text-xs font-bold text-[#4A352B]">
            <span>Tick</span>
            <span className="font-code tabular-nums text-[#EA580C]">
              {tickNum}
            </span>
            <span aria-hidden="true" className="text-[#D9C0A3]">/</span>
            <span className="text-[#7C6154]">目標</span>
            <span className="font-code tabular-nums text-[#0F766E]">
              {stage.parTicks}
            </span>
          </div>

          <button
            type="button"
            onClick={onReplayStory}
            className="anime-btn flex h-9 items-center gap-1.5 rounded-xl bg-[#FEF3C7] px-3 text-xs font-bold text-[#92400E] whitespace-nowrap cursor-pointer"
            title="このステージの依頼会話を見返す"
          >
            <MessageCircleHeart className="h-3.5 w-3.5" />
            <span>お話</span>
          </button>

          <button
            type="button"
            onClick={onOpenBook}
            className="anime-btn flex h-9 items-center gap-1.5 rounded-xl bg-[#CCFBF1] px-3 text-xs font-bold text-[#0F766E] whitespace-nowrap cursor-pointer"
            title="Book-ja の解説を開く"
          >
            <BookOpen className="h-3.5 w-3.5" />
            <span>Book解説</span>
          </button>

          <button
            type="button"
            onClick={onToggleMute}
            aria-label={muted ? '音声オン' : '音声ミュート'}
            className="anime-btn flex h-9 w-9 items-center justify-center rounded-xl bg-[#FFFDF9] text-[#4A352B] cursor-pointer"
          >
            {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </button>

          <button
            type="button"
            onClick={onPause}
            aria-label="一時停止メニュー"
            className="anime-btn flex h-9 w-9 items-center justify-center rounded-xl bg-[#FFFDF9] text-[#4A352B] cursor-pointer"
          >
            <Pause className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Bottom tiny deterministic guarantee note */}
      <div className="pointer-events-none absolute inset-x-3 bottom-2.5 flex items-center justify-between text-[11px] font-bold text-[#7C6154]">
        <span>目標: {stage.goalSummary}</span>
        <span>同期ティック制 · 実行タイミングで結果は変わりません</span>
      </div>
    </div>
  );
};
