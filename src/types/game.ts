export type GameState =
  | 'TITLE_MENU'
  | 'PLAYING'
  | 'PAUSED'
  | 'ROUND_SUMMARY'
  | 'GAME_OVER';

export type InStagePhase =
  | 'OBSERVE_EDIT'
  | 'COMPILE_ERROR'
  | 'RUNNING'
  | 'PAUSED_SIM'
  | 'CLEARED'
  | 'FAILED_RUN';

export type Direction = 0 | 1 | 2 | 3; // 0: East (+x), 1: South (+y), 2: West (-x), 3: North (-y)

export type TileKind =
  | 'floor'
  | 'wall'
  | 'goal'
  | 'worker_goal'
  | 'gate'
  | 'core'
  | 'scanner'
  | 'charger'
  | 'delivery'
  | 'vault'
  | 'switch'
  | 'dial'
  | 'conveyor';

export interface GateSpec {
  x: number;
  y: number;
  openTicks: number;
  closedTicks: number;
  initialOffset?: number;
  linkedSwitch?: { x: number; y: number };
}

export interface SparkSpec {
  id: string;
  path: Array<{ x: number; y: number }>;
  initialIndex?: number;
}

export interface ConveyorSpec {
  x: number;
  y: number;
  dir: Direction;
}

export interface CoreItemSpec {
  id: string;
  x: number;
  y: number;
  power: number;
  label?: string;
}

export interface PedestalSpec {
  x: number;
  y: number;
  requiredCount?: number;
  label?: string;
}

export interface StageWorldSetup {
  width: number;
  height: number;
  walls: Array<{ x: number; y: number }>;
  goal: { x: number; y: number };
  workerGoal?: { x: number; y: number };
  botStart: { x: number; y: number; dir: Direction };
  workerStart?: { x: number; y: number; dir: Direction };
  gates?: GateSpec[];
  sparks?: SparkSpec[];
  conveyors?: ConveyorSpec[];
  cores?: CoreItemSpec[];
  scanners?: PedestalSpec[];
  chargers?: PedestalSpec[];
  deliveries?: PedestalSpec[];
  switches?: Array<{ x: number; y: number }>;
  vault?: { x: number; y: number; initial: number; target: number };
  dial?: { x?: number; y?: number; secret: number };
  conveyorItems?: number[];
  cliArgs?: string[];
  envFlag?: string;
  jobs?: number[];
  featureFastMaxTicks?: number;
}

export interface VictoryCondition {
  reachGoal?: boolean;
  workerReachGoal?: boolean;
  deliverCores?: number;
  minCorePower?: number;
  scanCount?: number;
  vaultTarget?: number;
  vaultExact?: number;
  dialSolved?: boolean;
  testsRequired?: number;
  jobsRequired?: number;
  stdoutIncludes?: string[];
  stderrIncludes?: string[];
  maxTicks?: number;
  requireSafeErrorHandling?: boolean;
  requireSpatialCoreRules?: boolean;
  requireAllSwitches?: boolean;
}

export type StageKind = 'basic' | 'puzzle' | 'challenge';

export interface QuickChip {
  label: string;
  insert: string;
}

export interface StageDefinition {
  id: string;
  index: number;
  act: 1 | 2 | 3 | 4 | 5;
  chapter: number;
  chapterTitle: string;
  stageKind?: StageKind;
  title: string;
  topicTag: string;
  kurumiIntro: string;
  goalSummary: string;
  bookSectionTitle: string;
  bookSummary: string;
  bookKeyCode: string;
  starterCode: string;
  solutionCode: string;
  quickChips: QuickChip[];
  hints: [string, string, string];
  worldSetup: StageWorldSetup;
  victoryCondition: VictoryCondition;
  parTicks: number;
}

export type OwnershipStatus =
  | 'OWNED'
  | 'BORROWED'
  | 'MUT_BORROWED'
  | 'MOVED'
  | 'RC_SHARED'
  | 'MUTEX_LOCKED';

export interface MemoryEntry {
  name: string;
  typeName: string;
  valuePreview: string;
  ownership: OwnershipStatus;
  detail?: string;
  threadOwner?: string;
}

export interface ThreadSnapshot {
  id: string;
  label: string;
  status: 'RUNNING' | 'WAITING_RECV' | 'WAITING_LOCK' | 'DONE' | 'PANICKED';
  activeLine: number | null;
  x: number;
  y: number;
  dir: Direction;
  holdingCoreId: string | null;
  holdingPower: number;
  lastAction: string;
}

export interface GateSnapshot {
  x: number;
  y: number;
  isOpen: boolean;
  countdown: number;
}

export interface TestCaseResult {
  name: string;
  passed: boolean;
  message: string;
}

export interface VisualCue {
  kind:
    | 'hop'
    | 'turn'
    | 'grab'
    | 'deliver'
    | 'scan'
    | 'boost'
    | 'channel_send'
    | 'channel_recv'
    | 'mutex_lock'
    | 'mutex_unlock'
    | 'switch'
    | 'test_pass'
    | 'dial_check'
    | 'crash'
    | 'print';
  x: number;
  y: number;
  targetX?: number;
  targetY?: number;
  text?: string;
  threadId?: string;
  isError?: boolean;
}

export interface TickSnapshot {
  tick: number;
  threads: ThreadSnapshot[];
  gates: GateSnapshot[];
  sparks: Array<{ id: string; x: number; y: number }>;
  cores: Array<{ id: string; x: number; y: number; power: number; heldBy: string | null; delivered: boolean }>;
  scansCompleted: number;
  switchesActive: Array<{ x: number; y: number }>;
  vaultValue: number;
  dialSolved: boolean;
  jobsCompleted: number;
  memory: MemoryEntry[];
  stdout: string[];
  stderr: string[];
  testResults: TestCaseResult[];
  cues: VisualCue[];
  outcome: 'RUNNING' | 'CLEARED' | 'FAILED';
  failureReason?: string;
}

export interface CompilerDiagnostic {
  line: number;
  col: number;
  code: string;
  title: string;
  explanation: string;
  tip: string;
}

export interface CompileAndSimulateResult {
  ok: boolean;
  diagnostics: CompilerDiagnostic[];
  snapshots: TickSnapshot[];
  cleared: boolean;
  failureReason?: string;
  totalTicks: number;
  codeLines: number;
}

export interface StageProgress {
  cleared: boolean;
  bestTicks?: number;
  savedCode?: string;
}

export type StorySpeakerId =
  | 'kurumi'
  | 'ferris'
  | 'milk'
  | 'coppe'
  | 'mimosa'
  | 'poppo'
  | 'moka';

export type StoryEmotion = 'normal' | 'happy' | 'panic';

export interface StoryLine {
  speaker: StorySpeakerId;
  text: string;
  emotion?: StoryEmotion;
}

export type StoryBeatPhase = 'intro' | 'outro';

export interface StageStoryEntry {
  stageId: string;
  requestTitle: string;
  client: StorySpeakerId;
  intro: StoryLine[];
  outro: StoryLine[];
}

export type SeenStoryMap = Record<
  string,
  {
    intro?: boolean;
    outro?: boolean;
  }
>;

