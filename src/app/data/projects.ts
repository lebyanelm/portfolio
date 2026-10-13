/**
 * Selected work.
 *
 * Edit this array only — the home cards and /work/:slug case studies
 * both read it.
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

export const projects: Project[] = [
  {
    id: 'broilerbliss',
    slug: 'broilerbliss',
    title: 'BroilerBliss',
    year: '2026',
    category: 'Logo & brand',
    summary:
      'Brand identity I designed for BroilerBliss, my small broiler chicken farm in Gauteng. Logo, colour, labels, and packaging.',
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
      'I started BroilerBliss with a simple question: why should good, fresh chicken be hard to find close to home? The farm needed a brand that could carry that answer onto a label, a crate, and a tray.',
    approach: [
      'BroilerBliss is my small broiler farm in Gauteng, South Africa. I raise and supply fresh, quality chicken for local families and businesses, and I run every flock with careful records and honest costs, so what reaches the table is chicken you can trust.',
      'I studied economics at Tshwane University of Technology, a Diploma in Economics and then an Advanced Diploma in Economics. Somewhere between the theory of markets and the reality of household budgets, I saw a gap: families and small businesses in Gauteng want chicken that is fresh, fairly priced, and from someone they know. So I went from the classroom to the farm.',
      'I like the farm small. Small means I know the flocks. Every batch is looked after by hand, and every decision is close to the ground. I still think like an economist. Every flock has its own set of books: feed, care, electricity, transport, and time are all tracked, so I know what each bird costs to raise. That discipline keeps my prices honest and the quality consistent, because nothing gets hidden in the numbers.',
      'The mark is a chicken beside the word BroilerBliss. Colour is Roast Brown, Bliss Green, Yolk Yellow, Farm Cream, and Frozen Blue. Type is Poppins. The same rules go on three labels — whole fresh chicken, a portions braai pack, and frozen whole chicken — and onto a crate sticker, a tray sleeve, and a tray.',
      'Because I also build software, the farm runs on simple tools I make myself, from cost tracking to order planning, so less is left to guesswork. What I care about is straightforward: fresh, quality chicken for local families, braai weekends, kitchens, butcheries, and businesses who need a supplier they can rely on.',
    ],
    outcome:
      'I delivered the logo, the brand sheet, labels for whole fresh chicken, a portions braai pack, and frozen whole chicken, plus a crate sticker, a tray sleeve, and a tray mockup. The line on the work is the farm’s own: Fresh from our farm to your table.',
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
      'I built Hetchfund, a full-stack crowdfunding platform for start-up innovation and youth empowerment. It is paused. The pictures are the showcase from the project README.',
    role: 'Product and full stack',
    stack: ['Angular', 'Python', 'PostgreSQL', 'Heroku'],
    placeholder: false,
    visual: 'routes',
    palette: { bg: '#161616', fg: '#F6F5F2', accent: '#13B065' },
    timeline: 'Paused',
    tools: ['Angular', 'Flask/FastAPI', 'PostgreSQL', 'Heroku'],
    deliverables: ['Homepage showcase', 'Dashboard', 'Payments', 'Identity verification'],
    thumb: 'work/hetchfund/logo-on-dark.png',
    cover: 'work/hetchfund/logo-on-dark.png',
    coverAlt: 'Hetchfund logo, green and orange leaf marks above a light wordmark',
    coverWidth: 235,
    coverHeight: 103,
    swatches: [
      { name: 'Leaf green', hex: '#13B065' },
      { name: 'Leaf orange', hex: '#FF7410' },
      { name: 'Ink', hex: '#161616' },
      { name: 'Paper', hex: '#F6F5F2' },
    ],
    challenge:
      'I built Hetchfund to support innovative start-up businesses and to address rising youth unemployment. Young entrepreneurs needed a streamlined, secure place to raise capital, pitch their ideas, and connect with backers.',
    approach: [
      'Hetchfund.com is a full-stack crowdfunding platform I designed and built. The frontend is Angular, for a responsive, mobile-ready experience. The backend is Python, in Flask or FastAPI, with PostgreSQL for the data and a REST API between them.',
      'I connected Yoco for local card payments in South Africa, PayPal for international backers, and Coinbase Commerce for crypto contributions such as USDT and BTC. SmileID checks identity in real time, so a campaign can be reviewed for legitimacy and compliance.',
      'The dashboard I made covers campaign creation, contribution tracking, and analytics. An admin portal manages users, projects, and transactions. ChatGPT is an optional aid I added for drafting a project description.',
      'I took the system architecture, those third-party integrations, secure authentication, and deployment on Heroku, including environment setup and the build pipeline. The product is paused.',
      'The gallery is the showcase image from the project README: the Hetchfund homepage as it was captured, not a redraw. I am not claiming funding totals.',
    ],
    outcome:
      'What I shipped is the Angular and Python platform, the Yoco, PayPal, Coinbase Commerce, and SmileID integrations, the dashboard and admin portal, and the Heroku deployment. The gallery is the showcase image from the project README. The project is paused.',
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
];

export function projectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function nextProject(slug: string): Project | undefined {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index < 0) return undefined;
  return projects[(index + 1) % projects.length];
}
