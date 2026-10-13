import { afterNextRender, Component, ElementRef, inject } from '@angular/core';
import gsap from 'gsap';
import { site as content } from '../../data/site';
import { bindViewport, isReducedMotion, revealLines, splitWords } from '../../core/motion';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
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
    this.ctx = gsap.context(() => {
      revealLines(root, root.querySelector('.about-copy') ?? undefined);
      const lead = root.querySelector<HTMLElement>('[data-words]');
      if (lead) {
        const words = splitWords(lead);
        gsap.from(words, {
          yPercent: 110,
          duration: 0.72,
          ease: 'power3.out',
          stagger: 0.012,
          scrollTrigger: {
            trigger: lead,
            start: 'top 86%',
            toggleActions: 'play none none none',
          },
        });
      }
      gsap.utils.toArray<HTMLElement>('[data-reveal]', root).forEach((el) => {
        gsap.from(el, {
          autoAlpha: 0,
          y: 28,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        });
      });
    }, root);

    this.mm = bindViewport((mode) => {
      if (mode !== 'desktop') return;
      const pull = root.querySelector('.pull');
      if (!pull) return;
      gsap.to(pull, {
        yPercent: 6,
        ease: 'none',
        scrollTrigger: {
          trigger: root,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });
  }
}
