# Astia Web

**astiaweb.com**: one price for everything your website needs.

The marketing site for Astia Web, a product of Marco Rosso Consulting. Built with
[Astro](https://astro.build), hosted on [Netlify](https://netlify.com), edited in
GitHub. The brand rules it follows are in *Astia Web Brand Guidelines v2.0*
(October 2026).

## Stack

- **Astro 4** static site, three languages (EN at `/`, DE at `/de`, IT at `/it`)
- **Netlify** hosting, Netlify Forms for "Book a call", a function that emails each submission (Resend)
- **No CSS framework, no React.** Design tokens and shared components in `src/styles/global.css`; section styles are scoped inside each component
- **Self-hosted fonts** in `public/fonts`: Instrument Serif (display), General Sans (text), JetBrains Mono (labels, prices). Nothing loads from a font CDN

## Local development

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # builds to ./dist and writes the sitemap
npx astro check    # type-checks pages and every translation
```

Node 20+.

## Where things live

```
src/
├── i18n/                 All page copy, one module per page, EN/DE/IT side by side
│   ├── index.ts          Languages, routes, href(), money formatting, em()
│   ├── shared.ts         Nav, footer, price card, included lists, person, FAQ, five questions
│   ├── home.ts · how.ts · pricing.ts · pages.ts (work, journal, book, thank-you, 404)
├── views/                One view per page, shared by all three languages
├── pages/                Thin route files: /, /de, /it × each page
├── components/           Shared blocks (PriceCard, PersonCard, Faq, FinalCta, …)
│   ├── home/             Hero with Rosso grid, AI shift, rebuild cycle, three routes
│   ├── how/              Steps, change walkthrough, built-differently orbit, ready-for-next
│   └── pricing/          Five-year cost section
├── scripts/              site.ts (nav, menu, reveal, currency, analytics),
│                         cost-chart.ts, rising-particles.ts (WebGL)
├── content/
│   ├── articles/         Journal: {slug}.{lang}.md
│   └── portfolio/        Work page entries (JSON)
├── lib/                  schema.ts (JSON-LD), articles.ts
└── styles/global.css     Tokens, type, layout, buttons, lists
```

## Editing copy

Copy is in `src/i18n/*.ts`. The German and Italian blocks are typed against the
English one, so `npx astro check` fails if a key is missing in any language.

- **The italic word.** Each headline marks its one italic word with asterisks:
  `'One price for *everything* your website needs.'`. One per headline, never two.
- **Prices** are whole numbers. Anything that shows an amount uses `<Money n={9000} />`
  so it follows the visitor's CHF / EUR / USD choice and the language's format
  (EN `9,000`; DE/IT `9’000` in CHF and `9.000` in EUR).
- **German** uses formal *Sie* and Swiss spelling (ss, not ß). **Italian** uses formal *voi*.
- Words to avoid, and the voice in general: Brand Guidelines v2, Part II.

## Journal

Add `src/content/articles/{slug}.{lang}.md` with the frontmatter: `title`, `route`,
`lang`, `excerpt`, `tag`, `date`, `readingTime`, `published`. Use the same base
slug with `-en`, `-de`, `-it` for the `route` so translations link up.

If a translation is not written yet, set `translationPending: true`. The page stays
reachable but is `noindex`, and is left out of hreflang and the sitemap.

## Work

One JSON per site in `src/content/portfolio/` with an 800 × 1000 image in
`public/images/`. Sorted by `order`.

## Marco's portrait

The person card and the journal byline use `public/images/marco-rosso-founder-astia-web*`
(WebP with JPEG fallback): 400 × 500 and 240 × 300 for the card, 160 × 160 for the
byline. The background is the brand's Bone tone. To replace the photo, keep the
file names and sizes (a real photo only, never stock or AI-generated). If the files
are missing, the card falls back to a monogram.

## Book a call

- **Calendar:** `CALENDAR_URL` in `src/i18n/pages.ts`.
- **Form:** `book-a-call` on Netlify Forms (Name, Email, Business, Website). Keep the
  field names in sync with `public/__form.html`, which exists so Netlify always
  detects the form.
- **Email:** `netlify/functions/submission-created.js` sends each submission through
  Resend. It needs `NOTIFY_EMAIL` and `RESEND_API_KEY` in Netlify's environment
  variables. Replies go straight to the person who filled in the form.

## Legal pages and consent

- **Privacy policy** `/privacy`, **legal notice** `/legal` (EN/DE/IT) and the
  **General Terms** `/terms`: copy in `src/i18n/legal.ts`; the terms are
  transcribed verbatim in `src/i18n/terms-en.ts` from the signed Order Form PDF.
  The DE/IT terms pages show the English original (it prevails) with a note, and
  are noindex with their canonical pointing to `/terms`.
- **Analytics consent:** Google Analytics (G-EREW8N0F4N) loads only after "Accept
  analytics" in the banner (`CookieConsent.astro`, logic in `src/scripts/site.ts`).
  "Reject" is equally prominent, a Global Privacy Control signal counts as reject,
  and "Cookie settings" in the footer reopens the choice; withdrawing deletes the
  `_ga` cookies. Google signals and ad personalisation are off.
- **Keep them true:** if a provider (Netlify, Resend, Google), a cookie or a
  retention period changes, update `src/i18n/legal.ts` and `LEGAL_UPDATED`. If the
  General Terms PDF changes, update `terms-en.ts` word for word.

## Brand rules held in code

- Signal Red `#E62127` appears only on the wordmark dot (`Wordmark.astro`). Rosso
  `#C41E3A` everywhere else.
- Palette colours only; no pure black or white. Paper and Cream alternate by section.
- One primary button per section. Every major section opens with a mono section
  number (`01 — The price`), restarting on each page.
- The faint Rosso grid lives only in the home hero.
- Every cost comparison includes the case where a lean one-off build is cheaper.

## Interactive pieces

| Where | What | Notes |
|---|---|---|
| Home hero | Rosso grid; cells warm under the pointer, one fills now and then | Canvas, sleeps when idle or off-screen |
| Home 01 | 100 Google visits, with and without an AI summary (Pew, 2025) | Plays once, then switchable |
| Home 02 | The rebuild cycle: one-off build vs Astia Web | Toggle; line draws in |
| Price | Currency switch CHF / EUR / USD | Remembered per visitor |
| Price 02 | Five-year cost chart | Crosshair readout, keyboard arrows, table view |
| Price 03 | Five questions, copy to clipboard | |
| How hero | Rising particles | Raw WebGL, a few KB |
| How 02 | One change, start to finish | Plays once, replayable |
| How 03 | What is (and isn't) on the live site | Orbit diagram |
| How 04 | What a guest sees vs what an AI reads (JSON-LD) | Toggle |

All motion respects `prefers-reduced-motion`, and every section reads correctly
without JavaScript.

## SEO and machines

- **Share cards:** one 1200 × 630 card per page and language, and per article, in
  `public/images/og/`. Titles come from the site copy. After changing a headline or
  adding an article: `node scripts/og/manifest.mjs && python3 scripts/og/render.py`
  (needs `pip install pillow fonttools brotli`).
- **AI search:** `public/llms.txt` (index) and `/llms-full.txt` (the whole offer,
  generated from `src/i18n` at build). `robots.txt` names the AI crawlers explicitly.
- **IndexNow:** `netlify/functions/deploy-succeeded.js` pings IndexNow (Bing, which
  also feeds ChatGPT search and Copilot) with the sitemap after each production deploy.
  The key file is `public/8002eeb36e922237e75962bc4209652d.txt`.
- **Clean URLs:** the build writes `dist/_redirects` so `/pricing.html` 301s to `/pricing`.
- **Preferred sources:** the Journal and every article link to Google's preferred-source
  page for astiaweb.com (a plain link, no script).


- Per-page titles and descriptions in all three languages; canonical and hreflang
- JSON-LD: Organization, WebSite, Service with the 150 offer in CHF, EUR and USD,
  FAQPage, BreadcrumbList, Article
- `public/llms.txt` and `public/ai.txt` describe the offer plainly for AI crawlers
- Sitemap written by `scripts/generate-sitemap.mjs` after each build
- Old URLs: `/apply` → `/book-a-call`, `/showcase` → `/work` (301, in `netlify.toml`)

## Deploying

Pushing to `main` deploys to production. Open a pull request first: Netlify builds
a deploy preview for every PR.
