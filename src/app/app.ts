import { afterNextRender, Component, DestroyRef, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Cursor } from './cursor/cursor';
import { Nav } from './sections/nav/nav';
import { Hero } from './sections/hero/hero';
import { About } from './sections/about/about';
import { Services } from './sections/services/services';
import { Work } from './sections/work/work';
import { Process } from './sections/process/process';
import { Contact } from './sections/contact/contact';
import { SiteFooter } from './sections/footer/footer';
import { ScrollService } from './core/scroll.service';

@Component({
  selector: 'app-root',
  imports: [Cursor, Nav, Hero, About, Services, Work, Process, Contact, SiteFooter],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly scroll = inject(ScrollService);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => document.body.classList.add('app-ready'));
    this.destroyRef.onDestroy(() => {
      if (isPlatformBrowser(this.platformId)) this.scroll.destroy();
    });
    if (isPlatformBrowser(this.platformId)) this.scroll.start();
  }

  protected scrollToTop(): void {
    this.scroll.toTop();
  }
}
