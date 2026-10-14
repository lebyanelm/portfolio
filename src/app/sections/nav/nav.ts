import { afterNextRender, Component, ElementRef, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { site as content } from '../../data/site';
import { ScrollService } from '../../core/scroll.service';
import { applyTheme, persistTheme, storedTheme, systemTheme } from '../../core/theme';

@Component({
  selector: 'app-nav',
  imports: [RouterLink],
  templateUrl: './nav.html',
  styleUrl: './nav.scss',
})
export class Nav {
  protected readonly site = content;
  protected readonly open = signal(false);
  protected readonly dark = signal(
    typeof document !== 'undefined' && document.documentElement.dataset['theme'] === 'dark',
  );

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly scroll = inject(ScrollService);
  private schemeMq?: MediaQueryList;
  private unlistenScroll?: () => void;
  private anchor = 0;

  private readonly onKey = (event: KeyboardEvent): void => {
    if (event.key === 'Escape') this.close();
  };

  private readonly onScheme = (): void => {
    if (storedTheme()) return;
    const theme = systemTheme();
    applyTheme(theme);
    this.dark.set(theme === 'dark');
  };

  private readonly onWindowScroll = (): void => {
    this.onScroll(window.scrollY);
  };

  constructor() {
    afterNextRender(() => {
      document.addEventListener('keydown', this.onKey);
      window.addEventListener('scroll', this.onWindowScroll, { passive: true });
      this.unlistenScroll = this.scroll.onScroll((top) => this.onScroll(top));
      this.schemeMq = window.matchMedia('(prefers-color-scheme: dark)');
      this.schemeMq.addEventListener('change', this.onScheme);
      this.dark.set(document.documentElement.dataset['theme'] === 'dark');
      this.anchor = window.scrollY;
    });
  }

  ngOnDestroy(): void {
    document.removeEventListener('keydown', this.onKey);
    window.removeEventListener('scroll', this.onWindowScroll);
    this.unlistenScroll?.();
    this.schemeMq?.removeEventListener('change', this.onScheme);
    document.body.classList.remove('menu-open');
  }

  protected toggleTheme(): void {
    const next = this.dark() ? 'light' : 'dark';
    this.dark.set(next === 'dark');
    persistTheme(next);
  }

  protected toggle(): void {
    this.open.update((value) => !value);
    if (this.open()) this.anchor = window.scrollY;
    this.sync();
  }

  protected close(): void {
    if (!this.open()) return;
    this.open.set(false);
    this.sync();
  }

  private onScroll(top: number): void {
    if (!this.open()) {
      this.anchor = top;
      return;
    }
    if (Math.abs(top - this.anchor) > 20) this.close();
  }

  private sync(): void {
    const isOpen = this.open();
    this.host.nativeElement.classList.toggle('is-open', isOpen);
    document.body.classList.toggle('menu-open', isOpen);
    if (isOpen) this.scroll.stop();
    else this.scroll.play();
  }
}
