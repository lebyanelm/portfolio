export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  handle: string;
  href: string;
}

export interface Fact {
  label: string;
  value: string;
}

export type ServiceTheme = 'paper' | 'forest' | 'mango';

export interface Service {
  id: string;
  index: string;
  kicker: string;
  title: string;
  summary: string;
  points: string[];
  theme: ServiceTheme;
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
    country: string;
    coordinates: string;
  };
  email: string;
  emailIsPlaceholder: boolean;
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
  role: 'Creative developer',
  availability: 'Open for selected projects',
  deck: 'Logo design, web design, and apps — front to back.',
  location: {
    city: 'Midrand',
    region: 'Gauteng',
    country: 'South Africa',
    coordinates: '25.99° S, 28.13° E',
  },
  email: 'hello@example.com',
  emailIsPlaceholder: true,
  socials: [
    {
      label: 'GitHub',
      handle: 'lebyanelm',
      href: 'https://github.com/lebyanelm',
    },
  ],
  nav: [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ],
  skills: [
    'Angular',
    'JavaScript',
    'Node.js',
    'Python',
    'SQL',
    'Logo design',
    'Web design',
    'App development',
  ],
  about: {
    title: ['Economics first.', 'Then the making.'],
    lead: 'Libby Lebyane is a creative developer in Midrand, Gauteng. He graduated in economics, then crossed into design and software with the habit school gave him still intact: check the numbers before you trust the story.',
    body: 'He learns quickly and does not treat a stack as an identity. Angular and JavaScript for the interface. Node.js and Python where a product needs a backend. SQL when the data has to stay honest. The practice covers logos and branding, websites, and applications — frontend, backend, or the full stretch.',
    pull: ['Numbers on one side.', 'Craft on the other.'],
    facts: [
      { label: 'Studied', value: 'Economics' },
      { label: 'Works in', value: 'Design and code' },
      { label: 'Based in', value: 'Midrand, Gauteng' },
    ],
  },
  services: [
    {
      id: 'logo',
      index: '01',
      kicker: 'Branding',
      title: 'Logo design',
      summary:
        'A mark has to hold at the size of a favicon and still feel considered on a shopfront. Logos, wordmarks, and the short system around them — colour, type, and rules a team will actually use.',
      points: ['Logos', 'Colour', 'Typography', 'Brand rules'],
      theme: 'paper',
    },
    {
      id: 'web',
      index: '02',
      kicker: 'Sites',
      title: 'Web design',
      summary:
        'Websites with a point of view. Structure first, then type, then motion that explains something instead of decorating it. Designed and built in the same hands, so the page you approve is the page that ships.',
      points: ['Web design', 'UI', 'Interaction', 'Frontend'],
      theme: 'forest',
    },
    {
      id: 'apps',
      index: '03',
      kicker: 'Products',
      title: 'App development',
      summary:
        'Frontend, backend, or the path between them. Interfaces in Angular and JavaScript. Services in Node.js or Python. Data in SQL. Software a person can use, and the next developer can read.',
      points: ['Frontend', 'Backend', 'Full stack', 'SQL'],
      theme: 'mango',
    },
  ],
  work: {
    title: ['Selected', 'work'],
    lede: 'Studies for brands, sites, and products. Each one is a placeholder — swap in real work from the projects file when it is ready.',
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
        body: 'Design and code stay in one conversation. Angular, JavaScript, Node.js, Python, and SQL, each where it earns a place.',
      },
      {
        index: '04',
        title: 'Handover',
        body: 'Files, the repo, and a clear way to change things later. Then watch what people do, and tighten.',
      },
    ],
  },
  contact: {
    title: ['Start a', 'project'],
    lede: 'A logo, a site, or a product with a backend. Send as much as you have. A hunch is enough to start.',
  },
};
