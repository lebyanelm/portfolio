import { isPlatformBrowser } from '@angular/common';
import { Component, effect, inject, input, PLATFORM_ID, signal } from '@angular/core';
import { DomSanitizer, type SafeHtml } from '@angular/platform-browser';

const cache = new Map<string, Promise<string>>();

function assetUrl(file: string): string {
  return new URL(`logos/${file}.svg`, document.baseURI).toString();
}

function prepare(svg: string): string {
  return svg
    .replace(/<style>[\s\S]*?<\/style>/g, '')
    .replace(/\s(?:width|height)="[^"]*"/, '')
    .replace(/\s(?:width|height)="[^"]*"/, '');
}

function loadSvg(file: string): Promise<string> {
  const hit = cache.get(file);
  if (hit) return hit;
  const pending = fetch(assetUrl(file))
    .then((response) => {
      if (!response.ok) throw new Error(response.statusText);
      return response.text();
    })
    .then(prepare);
  cache.set(file, pending);
  return pending;
}

@Component({
  selector: 'app-logo-mark',
  templateUrl: './logo-mark.html',
  styleUrl: './logo-mark.scss',
  host: {
    '[class.on-dark]': 'tone() === "dark"',
    '[class.on-light]': 'tone() === "light"',
  },
})
export class LogoMark {
  readonly name = input.required<string>();
  readonly label = input('');
  readonly tone = input<'light' | 'dark' | 'auto'>('auto');

  protected readonly svg = signal<SafeHtml | null>(null);

  private readonly sanitizer = inject(DomSanitizer);
  private readonly browser = isPlatformBrowser(inject(PLATFORM_ID));

  constructor() {
    effect(() => {
      const file = this.name();
      this.svg.set(null);
      if (!this.browser) return;
      void loadSvg(file)
        .then((markup) => {
          if (this.name() !== file) return;
          this.svg.set(this.sanitizer.bypassSecurityTrustHtml(markup));
        })
        .catch(() => {
          if (this.name() === file) this.svg.set(null);
        });
    });
  }
}
