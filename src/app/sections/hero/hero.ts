import { afterNextRender, Component, ElementRef, inject } from '@angular/core';
import gsap from 'gsap';
import { site as content } from '../../data/site';
import { bindViewport, isReducedMotion } from '../../core/motion';
import { Magnetic } from '../../core/magnetic';

@Component({
  selector: 'app-hero',
  imports: [Magnetic],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  protected readonly site = content;
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private ctx?: gsap.Context;
  private mm?: gsap.MatchMedia;

  constructor() {
    afterNextRender(() => this.setup());
  }

  ngOnDestroy(): void {
    this.ctx?.revert();
    this.mm?.revert();
  }

  private setup(): void {
    if (isReducedMotion()) return;
    const root = this.host.nativeElement;
    try {
      this.ctx = gsap.context(() => {
        const lines = root.querySelectorAll('.hero-title .line-inner');
        const intros = root.querySelectorAll('.js-intro');
        const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
        tl.fromTo(lines, { yPercent: 110 }, { yPercent: 0, duration: 1.15, stagger: 0.08 }, 0);
        tl.fromTo(
          intros,
          { autoAlpha: 0, y: 18 },
          { autoAlpha: 1, y: 0, duration: 0.85, stagger: 0.06, ease: 'power3.out' },
          0.28,
        );
      }, root);

      this.mm = bindViewport((mode) => {
        if (mode !== 'desktop') return;
        const title = root.querySelector('.hero-title');
        if (!title) return;
        gsap.to(title, {
          yPercent: -8,
          ease: 'none',
          scrollTrigger: {
            trigger: root,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      });
    } catch {
      document.documentElement.classList.remove('motion');
    }
  }
}
