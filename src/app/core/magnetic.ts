import { Directive, ElementRef, inject, afterNextRender } from '@angular/core';
import gsap from 'gsap';

@Directive({
  selector: '[appMagnetic]',
})
export class Magnetic {
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly cleanups: Array<() => void> = [];

  constructor() {
    afterNextRender(() => this.bind());
  }

  ngOnDestroy(): void {
    for (const cleanup of this.cleanups) cleanup();
  }

  private bind(): void {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (reduce || !fine) return;

    const node = this.el.nativeElement;
    const xTo = gsap.quickTo(node, 'x', { duration: 0.4, ease: 'power3.out' });
    const yTo = gsap.quickTo(node, 'y', { duration: 0.4, ease: 'power3.out' });
    let origin: { x: number; y: number } | null = null;

    const onEnter = (): void => {
      const rect = node.getBoundingClientRect();
      origin = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
    };
    const onMove = (event: PointerEvent): void => {
      if (!origin) onEnter();
      if (!origin) return;
      const max = 14;
      const dx = clamp((event.clientX - origin.x) * 0.35, -max, max);
      const dy = clamp((event.clientY - origin.y) * 0.35, -max, max);
      xTo(dx);
      yTo(dy);
    };
    const onLeave = (): void => {
      origin = null;
      xTo(0);
      yTo(0);
    };

    node.addEventListener('pointerenter', onEnter);
    node.addEventListener('pointermove', onMove);
    node.addEventListener('pointerleave', onLeave);
    this.cleanups.push(() => {
      node.removeEventListener('pointerenter', onEnter);
      node.removeEventListener('pointermove', onMove);
      node.removeEventListener('pointerleave', onLeave);
    });
  }
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}
