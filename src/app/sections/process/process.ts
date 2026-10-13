import { afterNextRender, Component, ElementRef, inject } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { site as content } from '../../data/site';
import { isReducedMotion, revealLines } from '../../core/motion';

@Component({
  selector: 'app-process',
  templateUrl: './process.html',
  styleUrl: './process.scss',
})
export class Process {
  protected readonly site = content;
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private ctx?: gsap.Context;

  constructor() {
    afterNextRender(() => this.setup());
  }

  ngOnDestroy(): void {
    this.ctx?.revert();
  }

  private setup(): void {
    if (isReducedMotion()) return;
    const root = this.host.nativeElement;
    this.ctx = gsap.context(() => {
      const heading = root.querySelector('.process-head');
      if (heading) revealLines(heading);
      const line = root.querySelector('[data-line]');
      const body = root.querySelector('.process-body');
      if (line && body) {
        gsap.fromTo(
          line,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: body,
              start: 'top 72%',
              end: 'bottom 70%',
              scrub: true,
            },
          },
        );
      }
      gsap.utils.toArray<HTMLElement>('.steps li', root).forEach((step) => {
        gsap.from(step, {
          autoAlpha: 0,
          y: 24,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: step,
            start: 'top 86%',
            toggleActions: 'play none none none',
          },
        });
      });
    }, root);
    ScrollTrigger.refresh();
  }
}
