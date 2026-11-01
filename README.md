# jeremy-stokes.com

Astro rebuild of the Portfolio 2026 Figma spec (single page, responsive).

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Content updates

Edit data files — layout stays untouched:

- `src/data/site.ts` — email, intro, banners, footer
- `src/data/projects.ts` — 6 work slots (title, `href`, image path)
- `src/data/about.ts` — about mosaic quotes + images

### Image drop-ins

| Path | Used for |
| --- | --- |
| `public/images/figma/hero-portrait-a.png` / `hero-portrait-b.png` | Hero collage |
| `public/icons/bolt-yellow.svg` | Hero bolts |
| `public/images/figma/project-placeholder.png` | Work tiles (replace per project in `projects.ts`) |
| `public/images/figma/about-mario.png` | About mosaic |
| `public/images/figma/about-family.png` | About mosaic |
| `public/images/figma/about-adventure.png` | About mosaic |

## Build

```bash
npm run build
npm run preview
```

Static output: `dist/`.
