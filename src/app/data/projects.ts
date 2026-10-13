/**
 * Selected work.
 *
 * Edit this array only — the home cards and /work/:slug case studies
 * both read it. Set `placeholder` to false once a piece is a real project.
 * `visual` picks an abstract graphic when there is no photography:
 *   'arcs' | 'grid' | 'routes' | 'blobs' | 'columns'
 */
export type VisualKind = 'arcs' | 'grid' | 'routes' | 'blobs' | 'columns';

export interface ProjectPalette {
  bg: string;
  fg: string;
  accent: string;
}

export interface GalleryItem {
  src?: string;
  alt: string;
  caption: string;
  width?: number;
  height?: number;
}

export interface Swatch {
  name: string;
  hex: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  year: string;
  category: string;
  summary: string;
  role: string;
  stack: string[];
  placeholder: boolean;
  visual: VisualKind;
  palette: ProjectPalette;
  timeline: string;
  tools: string[];
  deliverables: string[];
  challenge: string;
  approach: string[];
  outcome: string;
  gallery: GalleryItem[];
  swatches?: Swatch[];
  cover?: string;
  coverAlt?: string;
  coverWidth?: number;
  coverHeight?: number;
  thumb?: string;
}

interface PlaceholderInput {
  id: string;
  title: string;
  year: string;
  category: string;
  summary: string;
  role: string;
  stack: string[];
  visual: VisualKind;
  palette: ProjectPalette;
  deliverables: string[];
  challenge: string;
  approach: string[];
  outcome: string;
}

function placeholder(input: PlaceholderInput): Project {
  return {
    ...input,
    slug: input.id,
    placeholder: true,
    timeline: input.year,
    tools: input.stack,
    gallery: [
      {
        alt: `${input.title} placeholder study frame`,
        caption: 'Placeholder frame. No client assets yet.',
      },
    ],
  };
}

export const projects: Project[] = [
  {
    id: 'broilerbliss',
    slug: 'broilerbliss',
    title: 'BroilerBliss',
    year: '2026',
    category: 'Logo & brand',
    summary:
      'Brand identity for BroilerBliss farm, a small broiler chicken farm in Gauteng. Logo, colour, labels, and packaging.',
    role: 'Brand design',
    stack: ['Logo', 'Colour', 'Packaging', 'Poppins'],
    placeholder: false,
    visual: 'arcs',
    palette: { bg: '#2E1503', fg: '#FFF8E7', accent: '#FFD23C' },
    timeline: '2026',
    tools: ['Poppins', 'Brand colour', 'Packaging layout'],
    deliverables: ['Logo', 'Brand sheet', 'Product labels', 'Packaging'],
    thumb: 'work/broilerbliss/logo-dark.png',
    cover: 'work/broilerbliss/logo-dark.png',
    coverAlt: 'BroilerBliss logo in yolk yellow and farm cream on roast brown',
    coverWidth: 1400,
    coverHeight: 716,
    swatches: [
      { name: 'Roast Brown', hex: '#2E1503' },
      { name: 'Bliss Green', hex: '#3FA037' },
      { name: 'Yolk Yellow', hex: '#FFD23C' },
      { name: 'Farm Cream', hex: '#FFF8E7' },
      { name: 'Frozen Blue', hex: '#1F5F9E' },
    ],
    challenge:
      'BroilerBliss started with a simple question: why should good, fresh chicken be hard to find close to home? The farm needed a brand that could carry that answer onto a label, a crate, and a tray.',
    approach: [
      'BroilerBliss is a small broiler farm in Gauteng, South Africa, founded by Libby Lebyane. We raise and supply fresh, quality chicken for local families and businesses, and we run every flock with careful records and honest costs, so what reaches your table is chicken you can trust, every time.',
      'Libby Lebyane studied economics, earning an Advanced Diploma in Economics at Tshwane University of Technology. Somewhere between the theory of markets and the reality of household budgets, he saw a gap: families and small businesses in Gauteng want chicken that is fresh, fairly priced and from someone they know. So the economist became a farmer.',
      'BroilerBliss is a small broiler farm, and we like it that way. Small means we know our flocks. It means every batch is looked after by hand, and every decision is close to the ground. Libby still thinks like an economist. Every flock has its own set of books: feed, care, electricity, transport and time are all tracked, so we know exactly what each bird costs to raise. That discipline is not just about profit. It keeps our prices honest and our quality consistent, because nothing gets hidden in the numbers.',
      'The mark is a chicken beside the word BroilerBliss. Colour is Roast Brown, Bliss Green, Yolk Yellow, Farm Cream, and Frozen Blue. Type is Poppins. The same rules go on three labels — whole fresh chicken, a portions braai pack, and frozen whole chicken — and onto a crate sticker, a tray sleeve, and a tray.',
      'And because Libby is also a developer, the farm runs on simple tools he builds himself, from cost tracking to order planning, so less is left to guesswork. What we care about is straightforward: fresh, quality chicken for local families, braai weekends, kitchens, butcheries and businesses who need a supplier they can rely on.',
    ],
    outcome:
      'The delivered brand pack is the logo, the brand sheet, labels for whole fresh chicken, a portions braai pack, and frozen whole chicken, plus a crate sticker, a tray sleeve, and a tray mockup. The line on the work is the farm’s own: Fresh from our farm to your table.',
    gallery: [
      {
        src: 'work/broilerbliss/logo-colour.png',
        alt: 'Full-colour BroilerBliss logo with a yellow chicken and roast-brown wordmark',
        caption: 'Logo, full colour',
        width: 1400,
        height: 716,
      },
      {
        src: 'work/broilerbliss/logo-dark.png',
        alt: 'BroilerBliss logo reversed for a dark background',
        caption: 'Logo on dark',
        width: 1400,
        height: 716,
      },
      {
        src: 'work/broilerbliss/brand-sheet.png',
        alt: 'BroilerBliss brand sheet showing the logo, Poppins, and the five brand colours',
        caption: 'Brand sheet — colour, type, and the mark',
        width: 1600,
        height: 1200,
      },
      {
        src: 'work/broilerbliss/label-fresh.png',
        alt: 'Product label for BroilerBliss whole fresh chicken',
        caption: 'Label — whole fresh chicken',
        width: 1400,
        height: 980,
      },
      {
        src: 'work/broilerbliss/label-braai.png',
        alt: 'Product label for the BroilerBliss portions braai pack',
        caption: 'Label — portions braai pack',
        width: 1400,
        height: 980,
      },
      {
        src: 'work/broilerbliss/label-frozen.png',
        alt: 'Product label for BroilerBliss frozen whole chicken, using frozen blue',
        caption: 'Label — frozen whole chicken',
        width: 1400,
        height: 980,
      },
      {
        src: 'work/broilerbliss/crate-sticker.png',
        alt: 'Crate sticker for a BroilerBliss box',
        caption: 'Packaging — crate sticker',
        width: 1400,
        height: 933,
      },
      {
        src: 'work/broilerbliss/tray-sleeve.png',
        alt: 'Flat tray sleeve for BroilerBliss chicken portions',
        caption: 'Packaging — tray sleeve, flat',
        width: 1600,
        height: 560,
      },
      {
        src: 'work/broilerbliss/tray-mockup.png',
        alt: 'Mockup of a BroilerBliss tray of chicken portions in the branded sleeve',
        caption: 'Packaging — tray mockup',
        width: 1400,
        height: 1000,
      },
    ],
  },
  {
    id: 'hetchfund',
    slug: 'hetchfund',
    title: 'Hetchfund',
    year: 'Paused',
    category: 'App development',
    summary:
      'Hetchfund, a full-stack crowdfunding platform for start-up innovation and youth empowerment. The product is paused. The pictures are the showcase from the project README.',
    role: 'Product and full stack',
    stack: ['Angular', 'Python', 'PostgreSQL', 'Heroku'],
    placeholder: false,
    visual: 'routes',
    palette: { bg: '#161616', fg: '#F6F5F2', accent: '#13B065' },
    timeline: 'Paused',
    tools: ['Angular', 'Flask/FastAPI', 'PostgreSQL', 'Heroku'],
    deliverables: ['Homepage showcase', 'Dashboard', 'Payments', 'Identity verification'],
    thumb: 'work/hetchfund/cover.jpg',
    cover: 'work/hetchfund/cover.jpg',
    coverAlt: 'Hetchfund homepage hero from the project README showcase',
    coverWidth: 1400,
    coverHeight: 1036,
    swatches: [
      { name: 'Leaf green', hex: '#13B065' },
      { name: 'Leaf orange', hex: '#FF7410' },
      { name: 'Ink', hex: '#161616' },
      { name: 'Paper', hex: '#F6F5F2' },
    ],
    challenge:
      'Hetchfund was built to support innovative start-up businesses and to address rising youth unemployment. Young entrepreneurs needed a streamlined, secure place to raise capital, pitch their ideas, and connect with backers.',
    approach: [
      'Hetchfund.com is a full-stack crowdfunding platform. The frontend is Angular, for a responsive, mobile-ready experience. The backend is Python, in Flask or FastAPI, with PostgreSQL for the data and a REST API between them.',
      'Payments go through Yoco for local card payments in South Africa, PayPal for international backers, and Coinbase Commerce for crypto contributions such as USDT and BTC. SmileID checks identity in real time, so a campaign can be reviewed for legitimacy and compliance.',
      'The dashboard covers campaign creation, contribution tracking, and analytics. An admin portal manages users, projects, and transactions. ChatGPT is an optional aid for drafting a project description.',
      'The build covered the system architecture, those third-party integrations, secure authentication, and deployment on Heroku, including environment setup and the build pipeline. The product status is paused.',
      'The gallery is the showcase image published with the project README: the Hetchfund homepage as it was captured, not a redraw. No funding totals are claimed here.',
    ],
    outcome:
      'What shipped in the product is the Angular and Python platform, the Yoco, PayPal, Coinbase Commerce, and SmileID integrations, the dashboard and admin portal, and the Heroku deployment. The gallery is the showcase image from the project README. The project is paused.',
    gallery: [
      {
        src: 'work/hetchfund/showcase.jpg',
        alt: 'Hetchfund homepage showcase from the project README, from the hero through the footer',
        caption: 'Showcase from the project README',
        width: 1200,
        height: 5485,
      },
    ],
  },
  placeholder({
    id: 'veld-and-co',
    title: 'Veld & Co.',
    year: '2026',
    category: 'Logo & brand',
    summary:
      'Placeholder identity for a Highveld goods label. A mark, a tight palette, and a one-page rule set — not a real client.',
    role: 'Identity exploration',
    stack: ['Logo', 'Colour', 'Type'],
    visual: 'arcs',
    palette: { bg: '#173026', fg: '#f3efe7', accent: '#e2b15a' },
    deliverables: ['Mark study', 'Palette', 'Type note'],
    challenge:
      'A placeholder brief: a Highveld goods label needs a mark that still reads at a small size. This is not a client project.',
    approach: [
      'The shared case-study template is filled with a direction only, so a real identity can replace this copy and these frames later.',
      'The study is a mark, a tight palette, and a one-page rule set. Nothing here has been sold or shipped.',
    ],
    outcome: 'No client outcome. The page exists so every project in the list uses the same presentation.',
  }),
  placeholder({
    id: 'ledger-lane',
    title: 'Ledger Lane',
    year: '2026',
    category: 'Web design',
    summary:
      'Placeholder marketing site for a small accounting practice. Editorial type, a calm grid, and one clear next step.',
    role: 'Design and frontend',
    stack: ['UI', 'Web', 'Angular'],
    visual: 'grid',
    palette: { bg: '#efe6d6', fg: '#14160f', accent: '#ff4e1a' },
    deliverables: ['Page structure', 'Type study', 'Interface frame'],
    challenge:
      'A placeholder brief: a small accounting practice needs a calm marketing page with one next step. Not a real engagement.',
    approach: [
      'Editorial type and a quiet grid, drawn as a study rather than a launched site.',
      'The frame uses the same case-study sections as the shipped work, with no invented results.',
    ],
    outcome: 'No launch and no traffic figures. Swap this entry when a real site is ready.',
  }),
  placeholder({
    id: 'taxi-tab',
    title: 'Taxi Tab',
    year: '2026',
    category: 'App development',
    summary:
      'Placeholder fare-split concept for shared commutes. A mobile interface with a small API behind it. Fictional from end to end.',
    role: 'Product and full stack',
    stack: ['Angular', 'Node.js', 'SQL'],
    visual: 'routes',
    palette: { bg: '#14160f', fg: '#f6f1e8', accent: '#7dcea0' },
    deliverables: ['Interface study', 'API sketch', 'Data note'],
    challenge:
      'A fictional fare-split concept for shared commutes. The point of the page is the product shape, not a live service.',
    approach: [
      'A mobile interface in front, a small API behind it, and SQL as the place the numbers would sit.',
      'Fictional from end to end. No users, no fares, and no performance claims.',
    ],
    outcome: 'Nothing shipped. The case study is a placeholder in the same layout as the real work.',
  }),
  placeholder({
    id: 'stonefruit',
    title: 'Stonefruit',
    year: '2025',
    category: 'Brand & web',
    summary:
      'Placeholder brand and shopfront for a seasonal grocer. Warm colour, plain language, a homepage that knows the week.',
    role: 'Brand and web',
    stack: ['Identity', 'UI', 'JavaScript'],
    visual: 'blobs',
    palette: { bg: '#f2c7a5', fg: '#2a120c', accent: '#8d1d16' },
    deliverables: ['Identity study', 'Homepage frame'],
    challenge:
      'A placeholder brief for a seasonal grocer: warm colour, plain language, and a homepage that could follow the week. Not a real shop.',
    approach: [
      'An identity study and a single homepage frame. The language stays plain on purpose.',
      'No catalogue, no orders, and no sales story — those would be invented.',
    ],
    outcome: 'No shop went live. This entry keeps a seat in the case-study template.',
  }),
  placeholder({
    id: 'north-stack',
    title: 'North Stack',
    year: '2025',
    category: 'App development',
    summary:
      'Placeholder operations board for a logistics co-op. Statuses, tables, and a Python service talking to SQL.',
    role: 'Full stack',
    stack: ['Angular', 'Python', 'SQL'],
    visual: 'columns',
    palette: { bg: '#1c2430', fg: '#e7eef6', accent: '#f0c14a' },
    deliverables: ['Board layout', 'Service sketch', 'Table study'],
    challenge:
      'A placeholder operations board for a logistics co-op: statuses and tables a team could scan. Not a deployed product.',
    approach: [
      'Angular for the board, Python for a service, SQL for the rows. The study stops at the shape of the screen.',
      'No uptime, no volume, and no customer quote.',
    ],
    outcome: 'No rollout. The page matches the other case studies so the portfolio reads as one system.',
  }),
];

export function projectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function nextProject(slug: string): Project | undefined {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index < 0) return undefined;
  return projects[(index + 1) % projects.length];
}
