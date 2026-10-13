import { afterNextRender, Component, DestroyRef, inject, Injector, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { Cursor } from './cursor/cursor';
import { Nav } from './sections/nav/nav';
import { ScrollService } from './core/scroll.service';

@Component({
  selector: 'app-root',
  imports: [Cursor, Nav, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly scroll = inject(ScrollService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly router = inject(Router);
  private readonly injector = inject(Injector);
  private fragmentWatch?: MutationObserver;

  constructor() {
    afterNextRender(() => document.body.classList.add('app-ready'));
    this.destroyRef.onDestroy(() => {
      if (isPlatformBrowser(this.platformId)) this.scroll.destroy();
    });
    if (!isPlatformBrowser(this.platformId)) return;
    this.scroll.start();
    const sub = this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => {
        const nav = this.router.lastSuccessfulNavigation();
        const fromNav = nav?.finalUrl?.fragment ?? nav?.extractedUrl.fragment ?? null;
        const fromHash = window.location.hash.length > 1 ? window.location.hash.slice(1) : null;
        const fragment = fromNav || fromHash || null;
        afterNextRender(() => this.revealFragment(fragment), { injector: this.injector });
      });
    this.destroyRef.onDestroy(() => {
      sub.unsubscribe();
      this.fragmentWatch?.disconnect();
    });
  }

  private revealFragment(fragment: string | null): void {
    this.fragmentWatch?.disconnect();
    this.fragmentWatch = undefined;
    this.scroll.jumpTop();
    if (!fragment) {
      this.scroll.refresh();
      return;
    }

    const align = (): void => {
      this.scroll.refresh();
      const target = document.getElementById(fragment);
      if (target) this.scroll.toElement(target);
    };

    // Pins in the new view are created after render. Scroll again once they exist,
    // or the target sits a viewport below where Lenis stopped.
    const alignAfterLayout = (): void => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          align();
          window.setTimeout(align, 80);
        });
      });
    };

    if (document.getElementById(fragment)) {
      alignAfterLayout();
      return;
    }

    const root = document.getElementById('main') ?? document.body;
    const observer = new MutationObserver(() => {
      if (!document.getElementById(fragment)) return;
      observer.disconnect();
      if (this.fragmentWatch === observer) this.fragmentWatch = undefined;
      alignAfterLayout();
    });
    this.fragmentWatch = observer;
    observer.observe(root, { childList: true, subtree: true });
    window.setTimeout(() => {
      if (this.fragmentWatch !== observer) return;
      observer.disconnect();
      this.fragmentWatch = undefined;
    }, 4000);
  }

  protected scrollToTop(): void {
    this.scroll.toTop();
  }
}
