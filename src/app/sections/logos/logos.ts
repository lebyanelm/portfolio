import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  inject,
  PLATFORM_ID,
  signal,
  viewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import gsap from 'gsap';
import { logos, type LogoStudy } from '../../data/logos';
import { isReducedMotion } from '../../core/motion';
import { ScrollService } from '../../core/scroll.service';
import { LogoMark } from '../../marks/logo-mark';

@Component({
  selector: 'app-logos',
  imports: [LogoMark, RouterLink],
  templateUrl: './logos.html',
  styleUrl: './logos.scss',
})
export class Logos {
  protected readonly logos = logos;
  protected readonly active = signal<LogoStudy | null>(null);

  private readonly scroll = inject(ScrollService);
  private readonly browser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly closeBtn = viewChild<ElementRef<HTMLButtonElement>>('closeBtn');
  private readonly dialogEl = viewChild<ElementRef<HTMLElement>>('dialogEl');
  private readonly overlayEl = viewChild<ElementRef<HTMLElement>>('overlayEl');
  private previous: HTMLElement | null = null;
  private locked = false;

  open(logo: LogoStudy): void {
    this.previous = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    this.active.set(logo);
    this.lock();
    if (!this.browser) return;
    window.setTimeout(() => {
      this.closeBtn()?.nativeElement.focus();
      if (isReducedMotion()) return;
      const overlay = this.overlayEl()?.nativeElement;
      const dialog = this.dialogEl()?.nativeElement;
      if (overlay) gsap.fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: 0.25, overwrite: true });
      if (dialog) {
        gsap.fromTo(
          dialog,
          { y: 28, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out', overwrite: true },
        );
      }
    });
  }

  close(): void {
    const finish = (): void => {
      this.active.set(null);
      this.unlock();
      this.previous?.focus();
      this.previous = null;
    };
    const dialog = this.dialogEl()?.nativeElement;
    if (!dialog || isReducedMotion()) {
      finish();
      return;
    }
    gsap.to(dialog, { y: 12, opacity: 0, duration: 0.2, overwrite: true, onComplete: finish });
  }

  ngOnDestroy(): void {
    if (this.locked) this.unlock();
  }

  @HostListener('document:keydown', ['$event'])
  onKey(event: KeyboardEvent): void {
    if (!this.active()) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      this.close();
      return;
    }
    if (event.key !== 'Tab') return;
    const root = this.dialogEl()?.nativeElement;
    if (!root) return;
    const items = [...root.querySelectorAll<HTMLElement>('a, button, [href], [tabindex]:not([tabindex="-1"])')].filter(
      (el) => !el.hasAttribute('disabled'),
    );
    if (!items.length) return;
    const first = items[0];
    const last = items[items.length - 1];
    const current = document.activeElement;
    if (event.shiftKey && (current === first || !root.contains(current))) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && (current === last || !root.contains(current))) {
      event.preventDefault();
      first.focus();
    }
  }

  private lock(): void {
    if (this.locked) return;
    this.locked = true;
    document.documentElement.classList.add('modal-open');
    this.scroll.stop();
  }

  private unlock(): void {
    if (!this.locked) return;
    this.locked = false;
    document.documentElement.classList.remove('modal-open');
    this.scroll.play();
  }
}
