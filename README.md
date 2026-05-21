# Astia Web

The first AI-managed website service for independent hotels.
Built on Astro, hosted on Netlify, content managed through Sveltia CMS.

## Stack

- **[Astro](https://astro.build) 4.16+** — static site generator, multi-language routing
- **[Netlify](https://netlify.com)** — hosting, builds, forms, redirects
- **[Sveltia CMS](https://github.com/sveltia/sveltia-cms)** — Git-based CMS, fork of Netlify CMS with better i18n
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
│   ├── admin/
│   │   ├── index.html      # Sveltia CMS entry point — visit /admin
│   │   └── config.yml      # Sveltia CMS field definitions
│   ├── images/             # All uploaded images live here, CMS-managed
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

## Sveltia CMS setup

The CMS lives at `/admin` (e.g. `https://astiaweb.com/admin`). Sveltia is a Git-based CMS — it reads and writes files in your GitHub repo directly. Every save is a git commit.

### Authentication setup

You need to allow Sveltia CMS to authenticate with GitHub. Two options:

**Option A — Sveltia's hosted auth (recommended, simplest):**

1. Edit `public/admin/config.yml` and replace `YOUR_GITHUB_USERNAME/astia-web` with your actual `username/repo`.
2. Visit `https://astiaweb.com/admin`.
3. Sveltia will route you through GitHub OAuth automatically. The first time you log in, you authorise Sveltia's OAuth app to access this single repo.

**Option B — Self-host the OAuth provider via Netlify:**

1. Create a GitHub OAuth app at [github.com/settings/developers](https://github.com/settings/developers):
   - Homepage URL: `https://astiaweb.com`
   - Callback URL: `https://astiaweb.com/oauth/callback`
2. In Netlify → Site settings → OAuth → add your GitHub credentials.
3. Update `config.yml` `backend.base_url` to point at your Netlify site.

### Editing content via the CMS

Once authenticated, the CMS presents these collections:

| Collection         | What it edits                                      |
| ------------------ | -------------------------------------------------- |
| **Pages**          | Home, How It Works, Pricing, Apply, Journal Index  |
| **Site Settings**  | Nav labels, footer, brand info, social links       |
| **Journal Articles** | The 5 evergreen essays + add new ones            |
| **Portfolio**      | Properties shown on the home page                  |

Every translatable field has three input boxes (one per language) shown side-by-side. Every image field has an alt-text field beneath it — alt text is also translatable. Every page has an SEO section at the top with translatable meta title, description, OG image, and OG alt.

### Adding images

Upload via the CMS media library (gear icon on any image field). Images land in `public/images/` in your repo and are immediately available across the site. Recommended formats:

- **Hero / image breakers**: 2400×1200px JPG, ~200 KB
- **Portfolio**: 800×1000px portrait JPG, ~120 KB
- **OG images**: 1200×630px JPG

Astro does not auto-optimize public/ images. For best performance, compress before upload (e.g. squoosh.app).

## SEO

The build includes:

- **Per-page meta title and description** (translatable, via CMS)
- **Open Graph + Twitter Card meta** on every page
- **`hreflang` alternates** on every page (`en`, `de`, `it`, `x-default`)
- **Canonical URLs**
- **Organization JSON-LD** site-wide (from `src/content/site/general.json`)
- **Sitemap** auto-generated at `/sitemap-index.xml` (via `@astrojs/sitemap`)
- **robots.txt** at `/robots.txt`
- **Editable alt text on every image** in the CMS

## Apply form

The form on `/apply` posts to Netlify Forms. To receive submissions:

1. Netlify auto-detects the form on first build (the `data-netlify="true"` attribute).
2. View submissions in Netlify dashboard → Forms.
3. Optionally configure email notifications in Netlify → Forms → Notifications.

The form redirects to `/thank-you` on submit.

## Adding a new Journal article

In the CMS, **Journal Articles → New article**. Fill in:

- Title, Slug (lowercase, hyphens — same across all languages), Language (en/de/it)
- Excerpt, Tag, Date, Reading time
- Body (markdown editor)
- Optionally override SEO

To publish in all three languages, create three article entries with the same slug but different `lang` values.

The article appears automatically on the Journal index in the matching language.

## Adding a new portfolio property

In the CMS, **Portfolio → New property**:

- Display order (lower = earlier on the page)
- Title (not translated)
- Tag, subtitle, image alt — all translatable
- Image (upload)
- Optional external URL

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
