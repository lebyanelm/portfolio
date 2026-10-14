import { afterNextRender, Component, inject, Injector, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  adjacentStudies,
  disciplineChip,
  studyBySlug,
  type LogoFile,
  type LogoPicture,
  type LogoStudy,
} from '../../data/logos';
import { projectBySlug, type Project, type Swatch } from '../../data/projects';
import { isReducedMotion } from '../../core/motion';
import { LogoMark } from '../../marks/logo-mark';
import { SiteFooter } from '../../sections/footer/footer';

type MetaRow = { label: string; value: string };

type Shot = LogoPicture & { sizes: string };

type Block =
  | { kind: 'text'; label: string; paragraphs: string[] }
  | { kind: 'swatches'; label: string; swatches: Swatch[] }
  | { kind: 'files'; label: string; note: string; files: LogoFile[] }
  | { kind: 'images'; shots: Shot[]; eager: boolean };

@Component({
  selector: 'app-case-study',
  imports: [RouterLink, SiteFooter, LogoMark],
  templateUrl: './case-study.html',
  styleUrl: './case-study.scss',
})
export class CaseStudy {
  protected readonly study = signal<LogoStudy | null>(null);
  protected readonly next = signal<LogoStudy | null>(null);
  protected readonly discipline = signal('Logo');
  protected readonly meta = signal<MetaRow[]>([]);
  protected readonly blocks = signal<Block[]>([]);
  protected readonly heroShot = signal<Shot | null>(null);

  private readonly route = inject(ActivatedRoute);
  private readonly title = inject(Title);
  private readonly injector = inject(Injector);
  private ctx?: gsap.Context;

  constructor() {
    this.route.paramMap.pipe(takeUntilDestroyed()).subscribe((params) => {
      const slug = params.get('slug') ?? '';
      const study = studyBySlug(slug) ?? null;
      const project = study ? (projectBySlug(slug) ?? null) : null;
      this.study.set(study);
      this.next.set(study ? (adjacentStudies(slug)?.next ?? null) : null);
      this.discipline.set(study ? (disciplineChip[study.id] ?? 'Logo') : 'Logo');
      this.meta.set(study ? metaFor(study, project) : []);
      this.heroShot.set(study ? heroShotFor(study) : null);
      this.blocks.set(study ? blocksFor(study, project) : []);
      this.title.setTitle(study ? `${study.name} — Libby Lebyane` : 'Project not found — Libby Lebyane');
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
      const title = root.querySelector('h1');
      if (title) {
        gsap.from(title, { yPercent: 30, opacity: 0, duration: 0.9, ease: 'power3.out' });
      }
      gsap.utils.toArray<HTMLElement>(root.querySelectorAll('.reveal')).forEach((el) => {
        gsap.from(el, {
          y: 32,
          opacity: 0,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
        });
      });
      root.querySelectorAll('img').forEach((img) => {
        if (!img.complete) img.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
      });
    }, root);
  }
}

function heroShotFor(study: LogoStudy): Shot | null {
  const picture = study.mockups.find((item) => item.hero);
  return picture ? { ...picture, sizes: '100vw' } : null;
}

function metaFor(study: LogoStudy, project: Project | null): MetaRow[] {
  const rows: MetaRow[] = [];
  if (study.tag === 'Client') rows.push({ label: 'Client', value: study.name });
  rows.push({ label: 'Type', value: study.tag });
  rows.push({
    label: 'Services',
    value: project?.deliverables?.length ? project.deliverables.join(', ') : (disciplineChip[study.id] ?? 'Logo'),
  });
  if (project?.year && /^\d{4}$/.test(project.year)) rows.push({ label: 'Year', value: project.year });
  return rows;
}

function blocksFor(study: LogoStudy, project: Project | null): Block[] {
  const pictures: LogoPicture[] = [];
  const seen = new Set<string>();
  const add = (picture?: LogoPicture): void => {
    if (!picture || seen.has(picture.src)) return;
    seen.add(picture.src);
    pictures.push(picture);
  };
  study.mockups.filter((picture) => !picture.hero).forEach(add);
  project?.gallery.forEach((item) => {
    if (!item.src) return;
    add({
      src: item.src,
      alt: item.alt,
      caption: item.caption,
      width: item.width ?? 1600,
      height: item.height ?? 1000,
    });
  });
  add(study.card);

  const images = packImages(pictures);
  const texts: Block[] = [];
  if (project) {
    texts.push({ kind: 'text', label: 'challenge', paragraphs: [project.challenge] });
    texts.push({ kind: 'text', label: 'approach', paragraphs: project.approach });
    if (project.swatches?.length) texts.push({ kind: 'swatches', label: 'colour', swatches: project.swatches });
    texts.push({ kind: 'text', label: 'outcome', paragraphs: [project.outcome] });
  }
  const mixed = interleave(texts, images);
  if (study.cardFiles?.length) {
    mixed.push({
      kind: 'files',
      label: 'print',
      note: 'Business card print files, 85 × 55 mm with bleed.',
      files: study.cardFiles,
    });
  }
  const firstImages = mixed.find((block) => block.kind === 'images');
  if (firstImages && firstImages.kind === 'images') firstImages.eager = true;
  return mixed;
}

function packImages(pictures: LogoPicture[]): Block[] {
  const blocks: Block[] = [];
  const full = (picture: LogoPicture): Shot => ({
    ...picture,
    sizes: '(max-width: 800px) 100vw, min(1400px, 92vw)',
  });
  const half = (picture: LogoPicture): Shot => ({
    ...picture,
    sizes: '(max-width: 800px) 100vw, 46vw',
  });
  for (let index = 0; index < pictures.length; ) {
    const current = pictures[index];
    const next = pictures[index + 1];
    const pageCapture = current.height > current.width * 1.8;
    if (!pageCapture && next && next.height <= next.width * 1.8) {
      blocks.push({ kind: 'images', shots: [half(current), half(next)], eager: false });
      index += 2;
      continue;
    }
    blocks.push({ kind: 'images', shots: [full(current)], eager: false });
    index += 1;
  }
  return blocks;
}

function interleave(texts: Block[], images: Block[]): Block[] {
  if (!texts.length) return images;
  const mixed: Block[] = [];
  const count = Math.max(texts.length, images.length);
  for (let index = 0; index < count; index += 1) {
    if (texts[index]) mixed.push(texts[index]);
    if (images[index]) mixed.push(images[index]);
  }
  return mixed;
}
