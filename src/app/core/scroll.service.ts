import { Injectable } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  private lenis?: Lenis;
  private tickerOn = false;
  private started = false;
  private desktopMq?: MediaQueryList;
  private reduceMq?: MediaQueryList;

  private readonly onTick = (time: number): void => {
    this.lenis?.raf(time * 1000);
  };

  private readonly onPreference = (): void => {
    this.syncRoot();
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) this.teardownLenis();
    else this.setupLenis();
    requestAnimationFrame(() => ScrollTrigger.refresh());
  };

  start(): void {
    if (this.started) return;
    this.started = true;
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.config({ ignoreMobileResize: true, limitCallbacks: true });
    this.syncRoot();
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.setupLenis();
    }
    this.desktopMq = window.matchMedia('(min-width: 900px)');
    this.reduceMq = window.matchMedia('(prefers-reduced-motion: reduce)');
    this.desktopMq.addEventListener('change', this.onPreference);
    this.reduceMq.addEventListener('change', this.onPreference);
    window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
    void document.fonts?.ready.then(() => ScrollTrigger.refresh());
  }

  stop(): void {
    this.lenis?.stop();
  }

  play(): void {
    this.lenis?.start();
  }

  toTop(): void {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduce && this.lenis) {
      this.lenis.scrollTo(0);
      return;
    }
    window.scrollTo(0, 0);
  }

  jumpTop(): void {
    this.lenis?.resize();
    if (this.lenis) this.lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }

  toElement(element: HTMLElement): void {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.lenis?.resize();
    if (!reduce && this.lenis) {
      this.lenis.scrollTo(element);
      return;
    }
    element.scrollIntoView();
  }

  refresh(): void {
    ScrollTrigger.refresh();
    this.lenis?.resize();
  }

  destroy(): void {
    this.desktopMq?.removeEventListener('change', this.onPreference);
    this.reduceMq?.removeEventListener('change', this.onPreference);
    this.teardownLenis();
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    this.started = false;
  }

  private setupLenis(): void {
    if (this.lenis) return;
    this.lenis = new Lenis({
      autoRaf: false,
      lerp: 0.085,
      smoothWheel: true,
      syncTouch: false,
      anchors: true,
      stopInertiaOnNavigate: true,
    });
    this.lenis.on('scroll', () => ScrollTrigger.update());
    if (!this.tickerOn) {
      gsap.ticker.add(this.onTick);
      gsap.ticker.lagSmoothing(0);
      this.tickerOn = true;
    }
  }

  private teardownLenis(): void {
    if (this.tickerOn) {
      gsap.ticker.remove(this.onTick);
      this.tickerOn = false;
    }
    this.lenis?.destroy();
    this.lenis = undefined;
  }

  private syncRoot(): void {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const desktop = window.matchMedia('(min-width: 900px)').matches;
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const root = document.documentElement;
    root.classList.toggle('motion', !reduce);
    root.classList.toggle('motion-desktop', !reduce && desktop);
    root.classList.toggle('has-cursor', !reduce && fine);
    root.classList.toggle('reduced', reduce);
  }
}
