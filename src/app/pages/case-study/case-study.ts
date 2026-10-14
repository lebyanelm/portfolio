import { afterNextRender, Component, inject, Injector, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { nextProject, projectBySlug, type Project } from '../../data/projects';
import { isReducedMotion, revealLines } from '../../core/motion';
import { ProjectVisual } from '../../sections/work/project-visual';
import { SiteFooter } from '../../sections/footer/footer';
import { LogoMark } from '../../marks/logo-mark';
import gsap from 'gsap';

@Component({
  selector: 'app-case-study',
  imports: [RouterLink, ProjectVisual, SiteFooter, LogoMark],
  templateUrl: './case-study.html',
  styleUrl: './case-study.scss',
})
export class CaseStudy {
  protected readonly project = signal<Project | null>(null);
  protected readonly next = signal<Project | null>(null);

  private readonly route = inject(ActivatedRoute);
  private readonly title = inject(Title);
  private readonly injector = inject(Injector);
  private ctx?: gsap.Context;

  constructor() {
    this.route.paramMap.pipe(takeUntilDestroyed()).subscribe((params) => {
      const slug = params.get('slug');
      const current = slug ? projectBySlug(slug) : undefined;
      this.project.set(current ?? null);
      this.next.set(slug && current ? (nextProject(slug) ?? null) : null);
      this.title.setTitle(
        current ? `${current.title} — Libby Lebyane` : 'Project not found — Libby Lebyane',
      );
      afterNextRender(() => this.setupMotion(), { injector: this.injector });
    });
  }

  ngOnDestroy(): void {
    this.ctx?.revert();
  }

  private setupMotion(): void {
    this.ctx?.revert();
    if (isReducedMotion()) return;
    const root = document.querySelector('app-case-study');
    if (!(root instanceof HTMLElement)) return;
    this.ctx = gsap.context(() => {
      revealLines(root, root.querySelector('.case-hero') ?? undefined);
    }, root);
  }
}
