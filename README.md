# Astia Web

The first AI-managed website service for independent hotels.
Built on Astro, hosted on Netlify. This marketing site is edited in GitHub, not a CMS.

## Stack

- **[Astro](https://astro.build) 4.16+** — static site generator, multi-language routing
- **[Netlify](https://netlify.com)** — hosting, builds, forms, redirects
- Custom CSS — no framework, no Tailwind, design tokens in `src/styles/global.css`
- Fonts loaded from Fontshare (Editorial New, General Sans) and Google Fonts (JetBrains Mono)

## Project structure

```
.
├── astro.config.mjs        # i18n config, sitemap integration
├── netlify.toml            # build & security headers
├── package.json
├── tsconfig.json
├── public/
│   ├── images/             # Site images
│   ├── favicon.svg
│   └── robots.txt
└── src/
    ├── content/
    │   ├── config.ts       # Astro Content Collections schemas (Zod)
    │   ├── pages/          # One JSON per page, all 3 languages inside
    │   │   ├── home.json
    │   │   ├── how.json
    │   │   ├── pricing.json
    │   │   ├── apply.json
    │   │   └── journal-index.json
    │   ├── site/
    │   │   └── general.json   # Nav, footer, brand, social
    │   ├── articles/       # 5 articles × 3 languages = 15 markdown files
    │   │   └── {slug}.{lang}.md
    │   └── portfolio/      # One JSON per property
    │       ├── exploreans.json
    │       ├── mara-river-camp.json
    │       └── watamu.json
    ├── components/
    │   ├── Nav.astro       # Top nav + language switcher
    │   ├── Footer.astro
    │   ├── page-content/   # One per page: HomeContent, HowContent, etc.
    │   └── ...             # All UI components (ProblemCard, FAQ, etc.)
    ├── layouts/
    │   └── BaseLayout.astro    # <head>, JSON-LD, hreflang, fonts
    ├── pages/
    │   ├── index.astro           # EN root
    │   ├── how-it-works.astro    # EN /how-it-works
    │   ├── pricing.astro
    │   ├── apply.astro
    │   ├── thank-you.astro       # form submit destination
    │   ├── journal/
    │   │   ├── index.astro
    │   │   └── [slug].astro      # dynamic article route
    │   ├── de/                   # German mirror
    │   └── it/                   # Italian mirror
    └── styles/
        └── global.css
```

## Local development

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # builds to ./dist
npm run preview      # preview the production build locally
```

Node 20+ required.

## Multi-language

URL structure:

| Language | Home URL    | Pricing URL          |
| -------- | ----------- | -------------------- |
| English  | `/`         | `/pricing`           |
| German   | `/de`       | `/de/pricing`        |
| Italian  | `/it`       | `/it/pricing`        |

Content is stored once per page in `src/content/pages/*.json`, with each translatable field shaped as `{ en: "...", de: "...", it: "..." }`. The page templates consume the appropriate language slice at build time.

Article files use a different convention: `{slug}.{lang}.md` (e.g. `thirty-thousand-website-is-over.en.md`). Same `slug` across languages keeps the URL identical.

## Deploying to Netlify

### One-time setup

1. **Push this repo to GitHub.**
2. **Connect repo to Netlify** (New site from Git).
3. **Build settings** are picked up from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 20
4. **Enable Netlify Forms** in site settings (handles the apply form automatically — the `data-netlify="true"` attribute on the form is the trigger).
5. **Set custom domain** in Netlify → Domain settings.

### Subsequent deploys

Push to your `main` branch — Netlify auto-builds and deploys. Build takes ~30 seconds.

## SEO

The build includes:

- **Per-page meta title and description** (translatable, in `src/content/`)
- **Open Graph + Twitter Card meta** on every page
- **`hreflang` alternates** on every page (`en`, `de`, `it`, `x-default`)
- **Canonical URLs**
- **Organization JSON-LD** site-wide (from `src/content/site/general.json`)
- **Sitemap** auto-generated at `/sitemap-index.xml` (via `@astrojs/sitemap`)
- **robots.txt** at `/robots.txt`
- **Alt text on every image** in content JSON

## Apply form

The form on `/apply` posts to Netlify Forms. To receive submissions:

1. Netlify auto-detects the form on first build (the `data-netlify="true"` attribute).
2. View submissions in Netlify dashboard → Forms.
3. Optionally configure email notifications in Netlify → Forms → Notifications.

The form redirects to `/thank-you` on submit.

## Adding a new Journal article

Add markdown files in `src/content/articles/` named `{slug}.{lang}.md` (same slug across languages). Frontmatter: title, route, lang, excerpt, tag, date, readingTime, published, optional seo.

The article appears automatically on the Journal index in the matching language.

## Adding a new portfolio property

Add a JSON file in `src/content/portfolio/`. Fields: order (lower = earlier), title, tag, subtitle, image, imageAlt, optional url.

The home page renders portfolio entries sorted by `order`.

## Brand & design tokens

All design tokens live in `src/styles/global.css`:

- **Surfaces**: `--paper #F7F5F0`, `--cream #FAFAF7`, `--bone #E5E2DA`
- **Ink**: `--ink #141414`, `--stone #6B6B66`
- **Brand reds**: `--rosso #C41E3A` (daily accent), `--wine #7C1D1D` (hover), `--signal #E62127` (only on the wordmark dot)
- **Typography**: Editorial New (display), General Sans (body), JetBrains Mono (specs/labels)

## Performance targets

- Lighthouse: 98–100 across the board
- First Contentful Paint: < 1s
- Total page weight: ~80–150 KB
- Build time: < 30s for the full multi-language site

## Roadmap (work for the next pass)

- Full DE/IT translation of all 5 journal article bodies (currently English only with a translation notice)
- Localized URL slugs (e.g. `/de/so-funktioniert-es` instead of `/de/how-it-works`)
- Astro `<Image>` component on portfolio images for automatic responsive sizing
- Add structured data for FAQ page (FAQPage JSON-LD)
- Add structured data for articles (Article JSON-LD)
- Cookie consent banner (if pursuing EU markets seriously)

## Support & questions

This site was built by Marcorosso Consulting. Email: marcorosso.consulting@gmail.com
# Deploy trigger: 2026-05-21T08:48:22Z
