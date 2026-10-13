import { afterNextRender, Component, ElementRef, inject } from '@angular/core';
import gsap from 'gsap';
import { site as content } from '../../data/site';
import { bindViewport, isReducedMotion, pad } from '../../core/motion';

@Component({
  selector: 'app-services',
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  protected readonly site = content;
  protected readonly services = content.services;
  protected readonly total = pad(content.services.length);

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private mm?: gsap.MatchMedia;

  constructor() {
    afterNextRender(() => this.setup());
  }

  ngOnDestroy(): void {
    this.mm?.revert();
  }

  private setup(): void {
    if (isReducedMotion() || this.services.length < 2) return;
    const root = this.host.nativeElement;
    this.mm = bindViewport((mode) => {
      if (mode !== 'desktop') {
        const shots = root.querySelectorAll<HTMLElement>('.shot img');
        shots.forEach((img, index) => {
          const from = index % 2 === 0 ? 8 : -8;
          gsap.fromTo(
            img,
            { yPercent: from, scale: 1.08 },
            {
              yPercent: from * -0.6,
              scale: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: img.closest('.panel') ?? img,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
              },
            },
          );
        });
        return;
      }
      const pin = root.querySelector<HTMLElement>('.services-pin');
      const panels = gsap.utils.toArray<HTMLElement>('.panel', root);
      const rail = root.querySelector<HTMLElement>('[data-rail]');
      if (!pin || panels.length < 2) return;

      panels.forEach((panel, index) => {
        if (index === 0) return;
        gsap.set(panel, { clipPath: 'inset(100% 0% 0% 0%)' });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pin,
          start: 'top top',
          end: () => '+=' + window.innerHeight * (panels.length - 1),
          pin: true,
          scrub: 0.65,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (!rail) return;
            const scale = 1 / panels.length + self.progress * (1 - 1 / panels.length);
            gsap.set(rail, { scaleX: scale, transformOrigin: 'left center' });
          },
        },
      });

      panels.forEach((panel, index) => {
        const shots = panel.querySelectorAll<HTMLElement>('.shot img');
        const at = index === 0 ? 0 : index - 1;
        shots.forEach((img, shot) => {
          const from = shot % 2 === 0 ? 12 : -10;
          tl.fromTo(
            img,
            { yPercent: from, scale: 1.12 },
            { yPercent: from * -0.45, scale: 1, ease: 'none', duration: 1 },
            at,
          );
        });
        if (index === 0) return;
        tl.to(panel, { clipPath: 'inset(0% 0% 0% 0%)', ease: 'none', duration: 1 }, index - 1);
        const previous = panels[index - 1].querySelector('.panel-inner');
        const mark = panels[index - 1].querySelector('.watermark');
        if (previous) {
          tl.to(previous, { scale: 0.96, ease: 'none', duration: 1 }, index - 1);
        }
        if (mark) {
          tl.to(mark, { yPercent: -10, ease: 'none', duration: 1 }, index - 1);
        }
      });
    });
  }
}
