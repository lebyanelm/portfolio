/**
 * Selected work.
 *
 * Edit this array only — the work section renders whatever is here.
 * Set `placeholder` to false once a piece is a real project.
 * `visual` picks an abstract graphic (no stock photos):
 *   'arcs' | 'grid' | 'routes' | 'blobs' | 'columns'
 * `palette` colours that graphic and the type on the card.
 */
export type VisualKind = 'arcs' | 'grid' | 'routes' | 'blobs' | 'columns';

export interface ProjectPalette {
  bg: string;
  fg: string;
  accent: string;
}

export interface Project {
  id: string;
  title: string;
  year: string;
  category: string;
  summary: string;
  role: string;
  stack: string[];
  placeholder: boolean;
  visual: VisualKind;
  palette: ProjectPalette;
}

export const projects: Project[] = [
  {
    id: 'veld-and-co',
    title: 'Veld & Co.',
    year: '2026',
    category: 'Logo & brand',
    summary:
      'Placeholder identity for a Highveld goods label. A mark, a tight palette, and a one-page rule set — not a real client.',
    role: 'Identity exploration',
    stack: ['Logo', 'Colour', 'Type'],
    placeholder: true,
    visual: 'arcs',
    palette: { bg: '#173026', fg: '#f3efe7', accent: '#e2b15a' },
  },
  {
    id: 'ledger-lane',
    title: 'Ledger Lane',
    year: '2026',
    category: 'Web design',
    summary:
      'Placeholder marketing site for a small accounting practice. Editorial type, a calm grid, and one clear next step.',
    role: 'Design and frontend',
    stack: ['UI', 'Web', 'Angular'],
    placeholder: true,
    visual: 'grid',
    palette: { bg: '#efe6d6', fg: '#14160f', accent: '#ff4e1a' },
  },
  {
    id: 'taxi-tab',
    title: 'Taxi Tab',
    year: '2026',
    category: 'App development',
    summary:
      'Placeholder fare-split concept for shared commutes. A mobile interface with a small API behind it. Fictional from end to end.',
    role: 'Product and full stack',
    stack: ['Angular', 'Node.js', 'SQL'],
    placeholder: true,
    visual: 'routes',
    palette: { bg: '#14160f', fg: '#f6f1e8', accent: '#7dcea0' },
  },
  {
    id: 'stonefruit',
    title: 'Stonefruit',
    year: '2025',
    category: 'Brand & web',
    summary:
      'Placeholder brand and shopfront for a seasonal grocer. Warm colour, plain language, a homepage that knows the week.',
    role: 'Brand and web',
    stack: ['Identity', 'UI', 'JavaScript'],
    placeholder: true,
    visual: 'blobs',
    palette: { bg: '#f2c7a5', fg: '#2a120c', accent: '#8d1d16' },
  },
  {
    id: 'north-stack',
    title: 'North Stack',
    year: '2025',
    category: 'App development',
    summary:
      'Placeholder operations board for a logistics co-op. Statuses, tables, and a Python service talking to SQL.',
    role: 'Full stack',
    stack: ['Angular', 'Python', 'SQL'],
    placeholder: true,
    visual: 'columns',
    palette: { bg: '#1c2430', fg: '#e7eef6', accent: '#f0c14a' },
  },
];
