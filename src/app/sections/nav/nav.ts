import { afterNextRender, Component, ElementRef, inject, signal } from '@angular/core';
import { site as content } from '../../data/site';
import { Magnetic } from '../../core/magnetic';
import { ScrollService } from '../../core/scroll.service';

@Component({
  selector: 'app-nav',
  imports: [Magnetic],
  templateUrl: './nav.html',
  styleUrl: './nav.scss',
})
export class Nav {
  protected readonly site = content;
  protected readonly open = signal(false);

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly scroll = inject(ScrollService);
  private desktopMq?: MediaQueryList;

  private readonly onScroll = (): void => {
    this.host.nativeElement.classList.toggle('is-scrolled', window.scrollY > 8);
  };

  private readonly onKey = (event: KeyboardEvent): void => {
    if (event.key === 'Escape') this.close();
  };

  private readonly onDesktop = (event: MediaQueryListEvent): void => {
    if (event.matches) this.close();
  };

  constructor() {
    afterNextRender(() => {
      this.onScroll();
      window.addEventListener('scroll', this.onScroll, { passive: true });
      document.addEventListener('keydown', this.onKey);
      this.desktopMq = window.matchMedia('(min-width: 980px)');
      this.desktopMq.addEventListener('change', this.onDesktop);
    });
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.onScroll);
    document.removeEventListener('keydown', this.onKey);
    this.desktopMq?.removeEventListener('change', this.onDesktop);
    document.body.classList.remove('menu-open');
  }

  protected toggle(): void {
    this.open.update((value) => !value);
    this.sync();
  }

  protected close(): void {
    if (!this.open()) return;
    this.open.set(false);
    this.sync();
  }

  private sync(): void {
    const isOpen = this.open();
    this.host.nativeElement.classList.toggle('is-open', isOpen);
    document.body.classList.toggle('menu-open', isOpen);
    if (isOpen) this.scroll.stop();
    else this.scroll.play();
  }
}
