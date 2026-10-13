import { afterNextRender, Component, ElementRef, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects as projectList } from '../../data/projects';
import { site as content } from '../../data/site';
import { bindViewport, isReducedMotion, pad, revealLines } from '../../core/motion';
import { ProjectVisual } from './project-visual';

@Component({
  selector: 'app-work',
  imports: [ProjectVisual, RouterLink],
  templateUrl: './work.html',
  styleUrl: './work.scss',
})
export class Work {
  protected readonly site = content;
  protected readonly projects = projectList;
  protected readonly total = pad(projectList.length);

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
      const heading = root.querySelector('.work-intro');
      if (heading) revealLines(heading);
    }, root);

    this.mm = bindViewport((mode) => {
      const cards = gsap.utils.toArray<HTMLElement>('.card', root);
      if (!cards.length) return;
      if (mode === 'mobile') {
        cards.forEach((card) => {
          gsap.from(card, {
            autoAlpha: 0,
            y: 32,
            duration: 0.75,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          });
        });
        return;
      }

      const stage = root.querySelector<HTMLElement>('.work-stage');
      const track = root.querySelector<HTMLElement>('.work-track');
      const fraction = root.querySelector<HTMLElement>('[data-fraction]');
      if (!stage || !track) return;
      const distance = (): number => Math.max(0, track.scrollWidth - stage.clientWidth);
      if (distance() < 24) return;

      const tween = gsap.to(track, {
        x: () => -distance(),
        ease: 'none',
        scrollTrigger: {
          trigger: stage,
          pin: true,
          scrub: 0.75,
          start: 'top top',
          end: () => '+=' + distance(),
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (!fraction) return;
            const count = cards.length;
            const current = Math.min(
              count,
              Math.max(1, Math.round(self.progress * (count - 1)) + 1),
            );
            const label = pad(current);
            if (fraction.textContent !== label) fraction.textContent = label;
          },
        },
      });

      cards.forEach((card) => {
        const art = card.querySelector('.art-media');
        if (!art) return;
        gsap.fromTo(
          art,
          { scale: 1.12, xPercent: 5 },
          {
            scale: 1,
            xPercent: -5,
            ease: 'none',
            scrollTrigger: {
              trigger: card,
              containerAnimation: tween,
              start: 'left right',
              end: 'right left',
              scrub: true,
            },
          },
        );
      });
    });
    ScrollTrigger.refresh();
    void document.fonts?.ready.then(() => ScrollTrigger.refresh());
  }
}
