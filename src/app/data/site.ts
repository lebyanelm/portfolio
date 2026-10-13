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
    country: 'South Africa',
    coordinates: '25.99° S, 28.13° E',
  },
  email: 'hello@example.com',
  emailIsPlaceholder: true,
  cv: {
    href: 'libby-lebyane-cv.txt',
    label: 'Download CV',
    short: 'CV',
    note: 'Placeholder file. Replace it with a real CV before you send the link.',
  },
  socials: [
    {
      label: 'GitHub',
      handle: 'lebyanelm',
      href: 'https://github.com/lebyanelm',
    },
    {
      label: 'LinkedIn',
      handle: 'placeholder',
      href: 'https://www.linkedin.com/in/lebyanelm',
      placeholder: true,
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
  ],
  about: {
    title: ['Design and code,', 'ready to join a team.'],
    lead: 'Libby Lebyane is a junior frontend and fullstack developer, and a designer, in Midrand. He makes logos, websites, and applications, and he is open to roles in Johannesburg, Midrand, or remote.',
    body: 'Angular and TypeScript for the interface. JavaScript where a page should stay direct. Node.js and Python for services. SQL or MongoDB when the data has to stay honest. He studied economics, which shows up as a habit: read the brief before decorating it. The work covers logo and brand design, web design, and app development — frontend, backend, or the full stretch.',
    pull: ['Hired for the work.', 'Not the theatre.'],
    facts: [
      { label: 'Open to', value: 'Johannesburg, Midrand, or remote' },
      { label: 'Roles', value: 'Frontend, fullstack, UI and brand' },
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
        'Marks for businesses that have to work at favicon size and on a shelf. Logos, wordmarks, colour, type, and a short set of rules a team can follow.',
      points: ['Logos', 'Colour', 'Type', 'Brand rules'],
      theme: 'paper',
    },
    {
      id: 'web',
      index: '02',
      kicker: 'Sites',
      title: 'Web design',
      summary:
        'Websites and product UI with a clear job. Structure first, then type, then motion that explains something. Designed and built in Angular and TypeScript, so the page you approve is the page that ships.',
      points: ['Web design', 'UI', 'Angular', 'TypeScript'],
      theme: 'forest',
    },
    {
      id: 'apps',
      index: '03',
      kicker: 'Products',
      title: 'App development',
      summary:
        'Interfaces in Angular, TypeScript, and JavaScript. Services in Node.js or Python. Data in SQL or MongoDB. Junior fullstack work a person can use, and the next developer can read.',
      points: ['Node.js', 'Python', 'SQL', 'MongoDB'],
      theme: 'mango',
    },
  ],
  work: {
    title: ['Selected', 'work'],
    lede: 'BroilerBliss and Hetchfund are real studies. The other pieces are placeholders in the same case-study layout, ready to be replaced.',
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
    lede: 'Junior frontend, fullstack, web design, and UI or brand roles in Johannesburg, Midrand, or remote. A logo, a site, or a small product is welcome too.',
  },
};
