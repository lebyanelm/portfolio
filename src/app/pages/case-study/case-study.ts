import { Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {
  adjacentStudies,
  disciplineChip,
  studyBySlug,
  type LogoPicture,
  type LogoStudy,
} from '../../data/logos';
import { projectBySlug, type Project } from '../../data/projects';
import { LogoMark } from '../../marks/logo-mark';
import { SiteFooter } from '../../sections/footer/footer';

@Component({
  selector: 'app-case-study',
  imports: [RouterLink, SiteFooter, LogoMark],
  templateUrl: './case-study.html',
  styleUrl: './case-study.scss',
})
export class CaseStudy {
  protected readonly study = signal<LogoStudy | null>(null);
  protected readonly project = signal<Project | null>(null);
  protected readonly previous = signal<LogoStudy | null>(null);
  protected readonly next = signal<LogoStudy | null>(null);
  protected readonly figures = signal<LogoPicture[]>([]);
  protected readonly chip = signal<string | null>(null);

  private readonly route = inject(ActivatedRoute);
  private readonly title = inject(Title);

  constructor() {
    this.route.paramMap.pipe(takeUntilDestroyed()).subscribe((params) => {
      const slug = params.get('slug') ?? '';
      const study = studyBySlug(slug) ?? null;
      const project = study ? (projectBySlug(slug) ?? null) : null;
      const adjacent = study ? adjacentStudies(slug) : undefined;
      this.study.set(study);
      this.project.set(project);
      this.previous.set(adjacent?.previous ?? null);
      this.next.set(adjacent?.next ?? null);
      this.chip.set(study ? (disciplineChip[study.id] ?? null) : null);
      this.figures.set(study ? figuresFor(study, project) : []);
      this.title.setTitle(
        study ? `${study.name} — Libby Lebyane` : 'Project not found — Libby Lebyane',
      );
    });
  }
}

function figuresFor(study: LogoStudy, project: Project | null): LogoPicture[] {
  const shots = [...study.mockups];
  const seen = new Set(shots.map((shot) => shot.src));
  for (const item of project?.gallery ?? []) {
    if (!item.src || seen.has(item.src)) continue;
    seen.add(item.src);
    shots.push({
      src: item.src,
      alt: item.alt,
      caption: item.caption,
      width: item.width ?? 1600,
      height: item.height ?? 1000,
    });
  }
  return shots;
}
