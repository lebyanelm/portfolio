import { afterNextRender, Component, ElementRef, inject } from '@angular/core';
import { isReducedMotion } from '../core/motion';

interface Glyph {
  id: number;
  char: '0' | '1';
  x: number;
  y: number;
  size: number;
  period: number;
  offset: number;
  turns: number;
  axis: 'x' | 'y';
}

function makeGlyphs(count: number): Glyph[] {
  const glyphs: Glyph[] = [];
  for (let id = 0; id < count; id++) {
    glyphs.push({
      id,
      char: Math.random() < 0.5 ? '0' : '1',
      x: 3 + Math.random() * 94,
      y: 4 + Math.random() * 92,
      size: 16 + Math.random() * 52,
      period: 4800 + Math.random() * 6400,
      offset: Math.random() * 9000,
      turns: Math.random() < 0.45 ? 2 : 1,
      axis: Math.random() < 0.5 ? 'x' : 'y',
    });
  }
  return glyphs;
}

@Component({
  selector: 'app-digits',
  templateUrl: './digits.html',
  styleUrl: './digits.scss',
})
export class Digits {
  protected readonly glyphs = makeGlyphs(22);

  private readonly host = inject(ElementRef<HTMLElement>);
  private nodes: HTMLElement[] = [];
  private raf = 0;
  private shift = 0;
  private hiddenAt = 0;
  private alive = false;

  constructor() {
    afterNextRender(() => this.mount());
  }

  ngOnDestroy(): void {
    this.alive = false;
    cancelAnimationFrame(this.raf);
    document.removeEventListener('visibilitychange', this.onVisibility);
  }

  private mount(): void {
    this.nodes = Array.from(this.host.nativeElement.querySelectorAll('.glyph'));
    if (isReducedMotion()) {
      for (const node of this.nodes) node.style.opacity = '0.28';
      return;
    }
    this.alive = true;
    document.addEventListener('visibilitychange', this.onVisibility);
    this.raf = requestAnimationFrame(this.frame);
  }

  private readonly onVisibility = (): void => {
    if (!this.alive) return;
    if (document.hidden) {
      this.hiddenAt = performance.now();
      cancelAnimationFrame(this.raf);
      this.raf = 0;
      return;
    }
    if (this.hiddenAt) {
      this.shift += performance.now() - this.hiddenAt;
      this.hiddenAt = 0;
    }
    if (!this.raf) this.raf = requestAnimationFrame(this.frame);
  };

  private readonly frame = (now: number): void => {
    if (!this.alive || document.hidden) {
      this.raf = 0;
      return;
    }
    const time = now - this.shift;
    for (let i = 0; i < this.nodes.length; i++) {
      const glyph = this.glyphs[i];
      const node = this.nodes[i];
      if (!glyph || !node) continue;
      const t = ((time + glyph.offset) % glyph.period) / glyph.period;
      let fade = 1;
      if (t < 0.2) fade = t / 0.2;
      else if (t > 0.68) fade = Math.max(0, (1 - t) / 0.32);
      const spin = t * glyph.turns * 360;
      const rx = glyph.axis === 'x' ? spin : 0;
      const ry = glyph.axis === 'y' ? spin : 0;
      node.style.opacity = (fade * 0.5).toFixed(3);
      node.style.transform = `translate(-50%, -50%) rotateX(${rx.toFixed(1)}deg) rotateY(${ry.toFixed(1)}deg)`;
    }
    this.raf = requestAnimationFrame(this.frame);
  };
}
