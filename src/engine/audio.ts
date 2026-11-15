class CuteWorkshopAudio {
  private ctx: AudioContext | null = null;
  private muted = false;

  private ensureContext(): AudioContext | null {
    if (this.muted) return null;
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return null;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      void this.ctx.resume();
    }
    return this.ctx;
  }

  public unlock(): void {
    this.ensureContext();
  }

  public setMuted(muted: boolean): void {
    this.muted = muted;
  }

  public isMuted(): boolean {
    return this.muted;
  }

  private playTone(
    freq: number,
    duration: number,
    type: OscillatorType = 'triangle',
    gainPeak = 0.08,
    delay = 0,
    slideTo?: number
  ): void {
    const ctx = this.ensureContext();
    if (!ctx) return;

    const now = ctx.currentTime + delay;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, now);
    if (slideTo !== undefined) {
      osc.frequency.exponentialRampToValueAtTime(Math.max(40, slideTo), now + duration);
    }

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(gainPeak, now + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + duration + 0.02);
  }

  public playCompileBell(): void {
    this.playTone(587.33, 0.14, 'triangle', 0.09, 0);
    this.playTone(880, 0.22, 'sine', 0.08, 0.07);
  }

  public playHop(): void {
    this.playTone(340, 0.09, 'triangle', 0.06, 0, 520);
  }

  public playTurn(): void {
    this.playTone(460, 0.06, 'sine', 0.045, 0, 390);
  }

  public playWait(): void {
    this.playTone(280, 0.06, 'sine', 0.03, 0);
  }

  public playSpeak(): void {
    this.playTone(540, 0.055, 'sine', 0.045, 0, 660);
    this.playTone(720, 0.07, 'triangle', 0.04, 0.045);
  }

  public playBorrowChime(): void {
    this.playTone(659.25, 0.12, 'sine', 0.07, 0);
    this.playTone(987.77, 0.16, 'triangle', 0.06, 0.06);
  }

  public playChannelPop(): void {
    this.playTone(523.25, 0.08, 'sine', 0.07, 0, 784);
    this.playTone(1046.5, 0.12, 'triangle', 0.06, 0.06);
  }

  public playLockClick(): void {
    this.playTone(420, 0.05, 'square', 0.035, 0);
    this.playTone(620, 0.08, 'triangle', 0.06, 0.04);
  }

  public playError(): void {
    this.playTone(240, 0.16, 'triangle', 0.08, 0, 170);
    this.playTone(185, 0.22, 'sine', 0.08, 0.1, 140);
  }

  public playVictory(): void {
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((n, idx) => {
      this.playTone(n, 0.26, 'triangle', 0.085, idx * 0.085);
    });
  }
}

export const workshopAudio = new CuteWorkshopAudio();
