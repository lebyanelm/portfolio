import { afterNextRender, Component, ElementRef, inject } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { site as content } from '../../data/site';
import { isReducedMotion, revealLines } from '../../core/motion';
import { Magnetic } from '../../core/magnetic';

@Component({
  selector: 'app-contact',
  imports: [Magnetic],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
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
    const section = root.querySelector('.contact');
    if (!section) return;
    this.ctx = gsap.context(() => {
      revealLines(section);
      gsap.from(section, {
        clipPath: 'inset(8% 8% 8% 8%)',
        duration: 1.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }, root);
    ScrollTrigger.refresh();
  }
}
