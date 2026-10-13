import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const DESKTOP_MQ = '(min-width: 900px)';
export const MOBILE_MQ = '(max-width: 899px)';

export function isReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function pad(value: number): string {
  return String(value).padStart(2, '0');
}

export function splitWords(element: HTMLElement): HTMLElement[] {
  if (element.dataset['split'] === 'true') {
    return Array.from(element.querySelectorAll<HTMLElement>('.word-inner'));
  }
  const source = (element.textContent ?? '').replace(/\s+/g, ' ').trim();
  if (!source) return [];
  element.dataset['split'] = 'true';
  const words = source.split(' ');
  element.replaceChildren();
  const inners: HTMLElement[] = [];
  words.forEach((word, index) => {
    const mask = document.createElement('span');
    mask.className = 'word';
    const inner = document.createElement('span');
    inner.className = 'word-inner';
    inner.textContent = word;
    mask.appendChild(inner);
    element.appendChild(mask);
    if (index < words.length - 1) {
      element.appendChild(document.createTextNode(' '));
    }
    inners.push(inner);
  });
  return inners;
}

export function revealLines(scope: ParentNode, trigger?: Element): void {
  const lines = scope.querySelectorAll('.line-inner');
  if (!lines.length) return;
  gsap.from(lines, {
    yPercent: 110,
    duration: 1.05,
    ease: 'power4.out',
    stagger: 0.07,
    scrollTrigger: {
      trigger: trigger ?? lines[0].parentElement,
      start: 'top 84%',
      toggleActions: 'play none none none',
    },
  });
}

export function bindViewport(setup: (mode: 'desktop' | 'mobile') => void): gsap.MatchMedia {
  const mm = gsap.matchMedia();
  mm.add(
    {
      desktop: DESKTOP_MQ,
      mobile: MOBILE_MQ,
      reduce: '(prefers-reduced-motion: reduce)',
    },
    (context) => {
      if (context.conditions?.['reduce']) return;
      setup(context.conditions?.['desktop'] ? 'desktop' : 'mobile');
    },
  );
  return mm;
}
