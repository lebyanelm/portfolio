export interface NavLink {
  label: string;
  fragment: string;
}

export interface SocialLink {
  label: string;
  handle: string;
  href: string;
  placeholder?: boolean;
}

export interface Fact {
  label: string;
  value: string;
}

export type ServiceTheme = 'paper' | 'forest' | 'mango';

export interface ServiceImage {
  src?: string;
  alt: string;
  fit?: 'contain';
  mark?: string;
}

export interface Service {
  id: string;
  index: string;
  kicker: string;
  title: string;
  summary: string;
  points: string[];
  theme: ServiceTheme;
  images: ServiceImage[];
}

export interface ProcessStep {
  index: string;
  title: string;
  body: string;
}

export interface SiteContent {
  name: string;
  first: string;
  last: string;
  role: string;
  availability: string;
  deck: string;
  location: {
    city: string;
    region: string;
    postal: string;
    country: string;
    coordinates: string;
  };
  email: string;
  emailIsPlaceholder: boolean;
  cv: {
    href: string;
    label: string;
    short: string;
    note: string;
  };
  socials: SocialLink[];
  nav: NavLink[];
  skills: string[];
  about: {
    title: string[];
    lead: string;
    body: string;
    pull: string[];
    facts: Fact[];
  };
  services: Service[];
  work: {
    title: string[];
    lede: string;
  };
  process: {
    title: string[];
    lede: string;
    steps: ProcessStep[];
  };
  contact: {
    title: string[];
    lede: string;
  };
}

export const site: SiteContent = {
  name: 'Libby Lebyane',
  first: 'Libby',
  last: 'Lebyane',
  role: 'Junior frontend developer and designer',
  availability: 'Open to roles in Johannesburg, Midrand, or remote',
  deck: 'Logos, websites, and apps — from the mark to the database.',
  location: {
    city: 'Midrand',
    region: 'Gauteng',
    postal: '1685',
    country: 'South Africa',
    coordinates: '25.99° S, 28.13° E',
  },
  email: 'lebyane.lm@gmail.com',
  emailIsPlaceholder: false,
  cv: {
    href: 'libby-lebyane-cv.pdf',
    label: 'Download CV',
    short: 'CV',
    note: '',
  },
  socials: [
    {
      label: 'GitHub',
      handle: 'lebyanelm',
      href: 'https://github.com/lebyanelm',
    },
    {
      label: 'LinkedIn',
      handle: 'lebyanelm',
      href: 'https://www.linkedin.com/in/lebyanelm',
    },
  ],
  nav: [
    { label: 'About', fragment: 'about' },
    { label: 'Services', fragment: 'services' },
    { label: 'Work', fragment: 'work' },
    { label: 'Process', fragment: 'process' },
    { label: 'Contact', fragment: 'contact' },
  ],
  skills: [
    'Angular',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'Python',
    'SQL',
    'MongoDB',
    'Logo design',
    'Web design',
    'UI design',
    'Microsoft Office',
  ],
  about: {
    title: ['Design and code,', 'ready to join a team.'],
    lead: 'I am a junior frontend and fullstack developer, and a designer, in Midrand. I make logos, websites, and applications, and I am open to roles in Johannesburg, Midrand, or remote.',
    body: 'Angular and TypeScript for the interface. JavaScript where a page should stay direct. Node.js and Python for services. SQL or MongoDB when the data has to stay honest. I studied economics at Tshwane University of Technology: a Diploma in Economics in 2024, then an Advanced Diploma in Economics in 2025. That training shows up as a habit: read the brief before decorating it. I currently work as a cross-trained sales consultant at Truworths, Mall of Africa, handling transactions, stock, and records. From 2019 to 2022 I was an administrative assistant at Ikamva Youth in Ebony Park, keeping databases and documents in order. Alongside that, I design logos, websites, and apps.',
    pull: ['Hired for the work.', 'Not the theatre.'],
    facts: [
      { label: 'Open to', value: 'Johannesburg, Midrand, or remote' },
      { label: 'Education', value: 'Advanced Diploma in Economics' },
      { label: 'Based in', value: 'Midrand, Gauteng, 1685' },
    ],
  },
  services: [
    {
      id: 'logo',
      index: '01',
      kicker: 'Branding',
      title: 'Logo design',
      summary:
        'I make marks that have to work at favicon size and on a shelf. Logos, wordmarks, colour, type, and a short set of rules a team can follow.',
      points: ['Logos', 'Colour', 'Type', 'Brand rules'],
      theme: 'paper',
      images: [
        { mark: 'fried-corner', alt: 'Fried Corner logo', fit: 'contain' },
        { mark: 'viga', alt: 'Viga logo', fit: 'contain' },
        { mark: 'broilerbliss', alt: 'BroilerBliss logo', fit: 'contain' },
        { mark: 'hetchfund', alt: 'Hetchfund logo', fit: 'contain' },
      ],
    },
    {
      id: 'web',
      index: '02',
      kicker: 'Sites',
      title: 'Web design',
      summary:
        'I design and build websites and product UI with a clear job. Structure first, then type, then motion that explains something. In Angular and TypeScript, the page you approve is the page that ships.',
      points: ['Web design', 'UI', 'Angular', 'TypeScript'],
      theme: 'forest',
      images: [
        {
          src: 'work/hetchfund/ui-hero.jpg',
          alt: 'Hetchfund homepage hero',
        },
        {
          src: 'work/hetchfund/ui-flow.jpg',
          alt: 'Hetchfund how-it-works section',
        },
        {
          src: 'work/hetchfund/ui-board.jpg',
          alt: 'Hetchfund page section with verification and learning tools',
        },
      ],
    },
    {
      id: 'apps',
      index: '03',
      kicker: 'Products',
      title: 'App development',
      summary:
        'I build interfaces in Angular, TypeScript, and JavaScript, services in Node.js or Python, and data in SQL or MongoDB. Work you can use, and the next developer can read.',
      points: ['Node.js', 'Python', 'SQL', 'MongoDB'],
      theme: 'mango',
      images: [
        {
          src: 'work/hetchfund/ui-flow.jpg',
          alt: 'Hetchfund product flow on the marketing site',
        },
        {
          src: 'work/hetchfund/ui-board.jpg',
          alt: 'Hetchfund product sections for verification and AI tools',
        },
        {
          src: 'work/hetchfund/ui-hero.jpg',
          alt: 'Hetchfund product homepage',
        },
      ],
    },
  ],
  work: {
    title: ['Selected', 'work'],
    lede: 'Two studies: a farm brand, and a crowdfunding platform I designed and built.',
  },
  process: {
    title: ['A short path', 'from brief to ship.'],
    lede: 'Four steps. No theatre. The work stays close to the person who asked for it.',
    steps: [
      {
        index: '01',
        title: 'Listen',
        body: 'The brief, the audience, and the constraint that is actually real. What it needs to do comes before how it looks.',
      },
      {
        index: '02',
        title: 'Shape',
        body: 'A direction, not a pile of options. A logo sketch, a page structure, or a slice you can click — enough to decide with.',
      },
      {
        index: '03',
        title: 'Build',
        body: 'Design and code stay in one conversation. Angular, TypeScript, JavaScript, Node.js, Python, SQL, and MongoDB, each where it earns a place.',
      },
      {
        index: '04',
        title: 'Handover',
        body: 'Files, the repo, and a clear way to change things later. Then watch what people do, and tighten.',
      },
    ],
  },
  contact: {
    title: ['Open to', 'roles'],
    lede: 'I am open to junior frontend, fullstack, web design, and UI or brand roles in Johannesburg, Midrand, or remote. A logo, a site, or a small product is welcome too.',
  },
};
