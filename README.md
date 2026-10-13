# Libby Lebyane

Portfolio site for Libby Lebyane, a creative developer in Midrand, Gauteng. One page: hero, about, services, selected work, process, contact, and footer. Motion uses [GSAP](https://gsap.com) ScrollTrigger and [Lenis](https://github.com/darkroomengineering/lenis) (both free to use). There is no backend.

Angular 22, standalone components, SCSS.

## Run locally

Angular CLI 22 needs Node.js `^22.22.3`, `^24.15.0`, or `>=26`.

```bash
npm install
npx ng serve
```

Open the URL the CLI prints (default `http://localhost:4200`).

Production build:

```bash
npm run build
```

Output folder: `dist/libby/browser`.

## Edit the content

Two files drive the copy and the work.

| What                                              | File                       |
| ------------------------------------------------- | -------------------------- |
| Name, bio, services, process, email, social links | `src/app/data/site.ts`     |
| Selected work                                     | `src/app/data/projects.ts` |
| Title, description, and JSON-LD                   | `src/index.html`           |

### Projects

Add, remove, or replace objects in the `projects` array. The work section renders that list and nothing else.

```ts
{
  id: 'my-project',
  title: 'Project name',
  year: '2026',
  category: 'Web design',
  summary: 'One or two sentences.',
  role: 'Design and frontend',
  stack: ['Angular', 'Node.js'],
  placeholder: false,
  visual: 'arcs',
  palette: { bg: '#173026', fg: '#f3efe7', accent: '#e2b15a' },
}
```

- `placeholder: true` shows a Placeholder badge. Set it to `false` for real work.
- `visual` is an abstract graphic, not a photo: `arcs`, `grid`, `routes`, `blobs`, or `columns`.
- `palette.bg` fills the card, `palette.fg` colours the type, `palette.accent` colours the graphic.

### Email and socials

`email` in `site.ts` is `hello@example.com` and `emailIsPlaceholder` is `true`, so the contact section labels it as a placeholder. Change the address and set `emailIsPlaceholder` to `false` before you publish. Update the same address in the JSON-LD block in `src/index.html`.

Add another network by pushing an item onto `socials` (`label`, `handle`, `href`).

### SEO

When you have a domain, add this to `src/index.html`:

```html
<link rel="canonical" href="https://your-domain.example/" />
<meta property="og:url" content="https://your-domain.example/" />
```

Point the JSON-LD `url` at that domain too.

## Motion

- Smooth scrolling is Lenis, synced to ScrollTrigger. It stays off when the visitor prefers reduced motion.
- Desktop (900px and up) pins the services panels and runs the horizontal work strip.
- Narrow screens keep the same sections in a vertical stack and drop the pin, the horizontal strip, the custom cursor, and magnetic links.
- `prefers-reduced-motion: reduce` shows the page without scroll-scrubbed animation.

## Deploy for free

The build command is `npm run build`. Publish **`dist/libby/browser`**.

### Netlify

`netlify.toml` is already set. Connect the repo, or:

```bash
npx netlify deploy --prod --dir=dist/libby/browser
```

(after `npm run build`).

### Vercel

`vercel.json` sets the build command and output directory. Import the repo and deploy. If the dashboard asks, the output directory is `dist/libby/browser`.

### GitHub Pages

`.github/workflows/pages.yml` runs on every push to `main`. It builds with `--base-href /dev-canvas/`, copies `index.html` to `404.html` (so GitHub Pages still serves the app on unknown paths), adds `.nojekyll`, and deploys `dist/libby/browser`.

The live site is [https://lebyanelm.github.io/dev-canvas/](https://lebyanelm.github.io/dev-canvas/).

Pages has to use **GitHub Actions** as the source, not a branch:

```bash
gh api -X POST repos/lebyanelm/dev-canvas/pages -f build_type=workflow
```

A free GitHub account can publish Pages only from a **public** repository. A private repository needs GitHub Pro. Do not expect a private deploy to come up on a free plan.
