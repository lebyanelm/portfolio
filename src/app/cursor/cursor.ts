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
    const blob = root.querySelector<HTMLElement>('.cursor-blob');
    const label = root.querySelector<HTMLElement>('.cursor-label');
    if (!blob || !label) return;

    gsap.set(blob, { xPercent: -50, yPercent: -50 });
    const blobX = gsap.quickTo(blob, 'x', { duration: 0.6, ease: 'power3.out' });
    const blobY = gsap.quickTo(blob, 'y', { duration: 0.6, ease: 'power3.out' });

    let current = '';
    const rest = (): void => {
      current = '';
      label.textContent = '';
      gsap.to(blob, {
        width: 16,
        height: 16,
        borderRadius: 8,
        duration: 0.45,
        ease: 'power3.out',
        overwrite: 'auto',
      });
      gsap.to(label, { autoAlpha: 0, duration: 0.2, overwrite: 'auto' });
    };
    const grow = (text: string): void => {
      if (text === current) return;
      current = text;
      label.textContent = text;
      const pill = text.length > 7;
      const width = pill ? Math.min(220, 36 + text.length * 13) : 108;
      gsap.to(blob, {
        width,
        height: pill ? 58 : 108,
        borderRadius: pill ? 999 : 54,
        duration: 0.5,
        ease: 'power3.out',
        overwrite: 'auto',
      });
      gsap.to(label, { autoAlpha: 1, duration: 0.28, delay: 0.06, overwrite: 'auto' });
    };

    const onMove = (event: PointerEvent): void => {
      blobX(event.clientX);
      blobY(event.clientY);
      root.classList.add('is-on');
      const text = labelFor(event.target);
      if (text) grow(text);
      else if (current) rest();
    };
    const onLeave = (): void => {
      root.classList.remove('is-on');
      rest();
    };

    document.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerleave', onLeave);
    this.cleanups.push(() => {
      document.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
    });
  }
}

function labelFor(target: EventTarget | null): string {
  if (!(target instanceof Element)) return '';
  const el = target.closest<HTMLElement>('a, button, [data-cursor]');
  if (!el) return '';
  const explicit = el.getAttribute('data-cursor');
  if (explicit) return clip(explicit);

  const href = (el.getAttribute('href') ?? '').toLowerCase();
  const fragment = href.split('#')[1]?.split('?')[0] ?? '';
  const aria = (el.getAttribute('aria-label') ?? '').toLowerCase();

  if (el.classList.contains('mark')) return 'Go home';
  if (href.includes('github.com')) return 'View my code';
  if (href.includes('linkedin.com')) return 'Follow me';
  if (href.includes('cv')) return 'Hire me';
  if (el.hasAttribute('download')) return 'Take the file';
  if (href.startsWith('mailto:')) return 'Say hello';
  if (href.includes('/work/')) return 'View project';
  if (fragment === 'work') return 'See the work';
  if (fragment === 'about') return 'Meet me';
  if (fragment === 'process') return 'How I work';
  if (fragment === 'contact') return "Let's talk";
  if (fragment === 'top' || aria.includes('top')) return 'Back up';
  if (el.classList.contains('theme-toggle') || aria.includes('dark') || aria.includes('theme')) return 'Flip theme';
  if (el.getAttribute('aria-controls') === 'site-menu') {
    return el.getAttribute('aria-expanded') === 'true' ? 'Close' : 'Open menu';
  }
  if (aria.includes('close')) return 'Close';
  return '';
}

function clip(value: string): string {
  const clean = value.replace(/\s+/g, ' ').trim();
  if (clean.length <= 18) return clean;
  return clean.slice(0, 17).trimEnd() + '…';
}
