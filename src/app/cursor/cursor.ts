import { afterNextRender, Component, ElementRef, inject } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-cursor',
  templateUrl: './cursor.html',
  styleUrl: './cursor.scss',
})
export class Cursor {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly cleanups: Array<() => void> = [];

  constructor() {
    afterNextRender(() => this.bind());
  }

  ngOnDestroy(): void {
    for (const cleanup of this.cleanups) cleanup();
  }

  private bind(): void {
    if (!document.documentElement.classList.contains('has-cursor')) return;
    const root = this.host.nativeElement;
    const dot = root.querySelector<HTMLElement>('.cursor-dot');
    const ring = root.querySelector<HTMLElement>('.cursor-ring');
    if (!dot || !ring) return;

    const dotX = gsap.quickTo(dot, 'x', { duration: 0.12, ease: 'power3.out' });
    const dotY = gsap.quickTo(dot, 'y', { duration: 0.12, ease: 'power3.out' });
    const ringX = gsap.quickTo(ring, 'x', { duration: 0.45, ease: 'power3.out' });
    const ringY = gsap.quickTo(ring, 'y', { duration: 0.45, ease: 'power3.out' });
    const ringScale = gsap.quickTo(ring, 'scale', { duration: 0.35, ease: 'power3.out' });

    const onMove = (event: PointerEvent): void => {
      dotX(event.clientX);
      dotY(event.clientY);
      ringX(event.clientX);
      ringY(event.clientY);
      root.classList.add('is-on');
    };
    const onOver = (event: Event): void => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      ringScale(target.closest('a, button') ? 1.75 : 1);
    };
    const onLeave = (): void => {
      root.classList.remove('is-on');
    };

    document.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerover', onOver);
    document.addEventListener('pointerleave', onLeave);
    this.cleanups.push(() => {
      document.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerover', onOver);
      document.removeEventListener('pointerleave', onLeave);
    });
  }
}
