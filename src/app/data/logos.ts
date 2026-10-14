export type LogoTag = 'Client' | 'Concept' | 'Own venture';

export interface LogoPicture {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}

export interface LogoFile {
  label: string;
  href: string;
}

export interface LogoStudy {
  id: string;
  name: string;
  file: string;
  tag: LogoTag;
  description: string;
  caseSlug?: string;
  mockups: LogoPicture[];
  card?: LogoPicture;
  cardFiles?: LogoFile[];
}

const cardFiles = (id: string): LogoFile[] => [
  { label: 'Front SVG', href: `logos/cards/${id}-front.svg` },
  { label: 'Front PDF', href: `logos/cards/${id}-front.pdf` },
  { label: 'Back SVG', href: `logos/cards/${id}-back.svg` },
  { label: 'Back PDF', href: `logos/cards/${id}-back.pdf` },
];

export const logos: LogoStudy[] = [
  {
    id: 'behind-the-noise',
    name: 'Behind the Noise',
    file: 'behind-the-noise',
    tag: 'Concept',
    description:
      'I’m planning Behind the Noise as a financial news site, focused on trading information and on forming inferences, with analysis of historical context. It is not financial advice.',
    mockups: [
      {
        src: 'logos/mockups/behind-the-noise.jpg',
        alt: 'Behind the Noise wordmark on a laptop screen, with a weekly briefing layout',
        caption: 'News screen',
        width: 1400,
        height: 933,
      },
    ],
  },
  {
    id: 'bitbooks',
    name: 'BitBooks',
    file: 'bitbooks',
    tag: 'Own venture',
    description:
      'I’m shaping BitBooks as a simplified online accounting app for small businesses that don’t have complex accounting structures, so they can track simple financial information. I want it to be a simpler alternative, inspired by Sage.',
    mockups: [
      {
        src: 'logos/mockups/bitbooks.jpg',
        alt: 'BitBooks logo on a laptop showing a simple ledger with blank amounts',
        caption: 'Ledger',
        width: 1400,
        height: 933,
      },
    ],
  },
  {
    id: 'bitsense',
    name: 'BitSense',
    file: 'bitsense',
    tag: 'Own venture',
    description:
      'I’m exploring BitSense as an electronics company that would produce sensitive sensors and smart tech. One direction is affordable sensors for poultry and general farming, because standard farming technology is extremely expensive.',
    mockups: [
      {
        src: 'logos/mockups/bitsense.jpg',
        alt: 'BitSense wordmark on a product box, on a circuit-board surface',
        caption: 'Product box',
        width: 1400,
        height: 933,
      },
    ],
  },
  {
    id: 'broilerbliss',
    name: 'BroilerBliss',
    file: 'broilerbliss',
    tag: 'Own venture',
    description:
      'Brand identity I designed for BroilerBliss, my small broiler chicken farm in Gauteng. Logo, colour, labels, and packaging.',
    caseSlug: 'broilerbliss',
    mockups: [
      {
        src: 'work/broilerbliss/tray-mockup.png',
        alt: 'BroilerBliss tray of chicken portions in the branded sleeve',
        caption: 'Tray',
        width: 1400,
        height: 1000,
      },
      {
        src: 'work/broilerbliss/label-fresh.png',
        alt: 'BroilerBliss whole fresh chicken label',
        caption: 'Fresh label',
        width: 1400,
        height: 980,
      },
      {
        src: 'work/broilerbliss/brand-sheet.png',
        alt: 'BroilerBliss brand sheet with the logo, type, and colours',
        caption: 'Brand sheet',
        width: 1600,
        height: 1200,
      },
    ],
  },
  {
    id: 'chesswars',
    name: 'Chesswars',
    file: 'chesswars',
    tag: 'Concept',
    description:
      'I’m designing Chesswars as a platform for online chess tournaments, inspired by World Chess, with faster rounds and a tournament hosted every day. The project is on hold for legal reasons.',
    mockups: [
      {
        src: 'logos/mockups/chesswars.jpg',
        alt: 'Chesswars poster on a wall, reading online tournaments, faster rounds, every day',
        caption: 'Poster',
        width: 1400,
        height: 933,
      },
    ],
  },
  {
    id: 'doku',
    name: 'DOKU',
    file: 'doku',
    tag: 'Concept',
    description:
      'I’m designing DOKU as a cloud platform where people can store and save files and documents online.',
    mockups: [
      {
        src: 'logos/mockups/doku.jpg',
        alt: 'DOKU logo on a phone screen listing stored files',
        caption: 'Files',
        width: 1400,
        height: 933,
      },
    ],
  },
  {
    id: 'flybak',
    name: 'Flybak',
    file: 'flybak',
    tag: 'Own venture',
    description:
      'Flybak sits next to BitSense, but it is specifically for poultry. I’m exploring automated poultry farming equipment, such as automated lighting and feeding.',
    mockups: [
      {
        src: 'logos/mockups/flybak.jpg',
        alt: 'Flybak logo on a product box on concrete',
        caption: 'Equipment box',
        width: 1400,
        height: 933,
      },
    ],
  },
  {
    id: 'fried-corner',
    name: 'Fried Corner',
    file: 'fried-corner',
    tag: 'Client',
    description:
      'A client is starting Fried Corner, a corner food outlet selling fried foods. I created the branding and the packaging.',
    mockups: [
      {
        src: 'logos/mockups/fried-corner.jpg',
        alt: 'Fried Corner logo printed on a cardboard takeaway box, on a kitchen counter',
        caption: 'Takeaway box',
        width: 1400,
        height: 933,
      },
    ],
    card: {
      src: 'logos/mockups/card-fried-corner.jpg',
      alt: 'Fried Corner business card template, front and back, on a counter',
      caption: 'Business card',
      width: 1400,
      height: 933,
    },
    cardFiles: cardFiles('fried-corner'),
  },
  {
    id: 'gift-of-health',
    name: 'Gift of Health',
    file: 'gift-of-health',
    tag: 'Client',
    description:
      'I designed the Gift of Health logo and an app concept where people upload prescriptions and receive medication deliveries. I had older people in mind, people who can’t constantly collect medication. The project didn’t go ahead.',
    mockups: [
      {
        src: 'logos/mockups/gift-of-health.jpg',
        alt: 'Gift of Health logo on a phone screen for uploading a prescription',
        caption: 'Upload screen',
        width: 1400,
        height: 933,
      },
    ],
    card: {
      src: 'logos/mockups/card-gift-of-health.jpg',
      alt: 'Gift of Health business card template, front and back',
      caption: 'Business card',
      width: 1400,
      height: 933,
    },
    cardFiles: cardFiles('gift-of-health'),
  },
  {
    id: 'hetchfund',
    name: 'Hetchfund',
    file: 'hetchfund',
    tag: 'Own venture',
    description:
      'I built Hetchfund, a full-stack crowdfunding platform for start-up innovation and youth empowerment. It is paused. The pictures are the showcase from the project README.',
    caseSlug: 'hetchfund',
    mockups: [
      {
        src: 'logos/mockups/hetchfund.jpg',
        alt: 'Hetchfund homepage screenshot on a laptop',
        caption: 'Homepage on a laptop',
        width: 1400,
        height: 933,
      },
      {
        src: 'work/hetchfund/showcase.jpg',
        alt: 'Hetchfund homepage showcase from the project README',
        caption: 'Showcase from the README',
        width: 1200,
        height: 5485,
      },
    ],
  },
  {
    id: 'jonjon-constructions',
    name: 'JonJon Construction',
    file: 'jonjon-constructions',
    tag: 'Client',
    description:
      'I designed a logo for JonJon Construction, a construction company that builds swimming pools, walls, and buildings.',
    mockups: [
      {
        src: 'logos/mockups/jonjon.jpg',
        alt: 'JonJon Construction logo on a site hoarding, with the line Pools, Walls, Buildings',
        caption: 'Site hoarding',
        width: 1400,
        height: 933,
      },
    ],
    card: {
      src: 'logos/mockups/card-jonjon-constructions.jpg',
      alt: 'JonJon Construction business card template, front and back',
      caption: 'Business card',
      width: 1400,
      height: 933,
    },
    cardFiles: cardFiles('jonjon-constructions'),
  },
  {
    id: 'towards-common-foundry',
    name: 'Towards Common Foundry',
    file: 'towards-common-foundry',
    tag: 'Own venture',
    description:
      'I’m starting Towards Common Foundry as a foundry for founding other businesses: a holding company, similar to TFG, that holds and manages other companies.',
    mockups: [
      {
        src: 'logos/mockups/foundry.jpg',
        alt: 'Towards Common Foundry letterhead on a wooden desk',
        caption: 'Letterhead',
        width: 1400,
        height: 933,
      },
    ],
  },
  {
    id: 'viga',
    name: 'Viga',
    file: 'viga',
    tag: 'Client',
    description:
      'I designed the logo for Viga, a magazine brand sharing local South African stories in the space of medical marijuana use.',
    mockups: [
      {
        src: 'logos/mockups/viga.jpg',
        alt: 'Viga magazine cover on a table, using a forest photograph and the headline Local stories',
        caption: 'Cover',
        width: 1400,
        height: 933,
      },
    ],
    card: {
      src: 'logos/mockups/card-viga.jpg',
      alt: 'Viga business card template, front and back, on a wooden table',
      caption: 'Business card',
      width: 1400,
      height: 933,
    },
    cardFiles: cardFiles('viga'),
  },
];
