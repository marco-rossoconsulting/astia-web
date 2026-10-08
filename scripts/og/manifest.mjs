/**
 * Writes scripts/og/manifest.json: one entry per share card, with the title
 * taken from the site's own copy (src/i18n) and article frontmatter, so the
 * cards never drift from the pages. Then run scripts/og/render.py.
 *
 *   node scripts/og/manifest.mjs && python3 scripts/og/render.py
 */
import { build } from 'esbuild';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const tmp = path.join(root, 'node_modules/.cache/og-i18n.mjs');
fs.mkdirSync(path.dirname(tmp), { recursive: true });
await build({
  stdin: {
    contents: `export { home } from './home'; export { how } from './how'; export { pricing } from './pricing'; export { pages } from './pages'; export { shared } from './shared';`,
    resolveDir: path.join(root, 'src/i18n'),
    loader: 'ts',
  },
  bundle: true,
  format: 'esm',
  platform: 'node',
  outfile: tmp,
  logLevel: 'error',
});
const { home, how, pricing, pages, shared } = await import(pathToFileURL(tmp).href + `?t=${Date.now()}`);

const LINE = {
  en: 'CHF 150 / month · Every change, every language',
  de: 'CHF 150 / Monat · Jede Änderung, jede Sprache',
  it: 'CHF 150 / mese · Ogni modifica, ogni lingua',
};
const cards = [];
for (const lang of ['en', 'de', 'it']) {
  const add = (page, eyebrow, title) => cards.push({ file: `${page}-${lang}.jpg`, eyebrow, title, line: LINE[lang] });
  add('home', home[lang].hero.eyebrow, home[lang].hero.title);
  add('pricing', pricing[lang].hero.eyebrow, pricing[lang].hero.title);
  add('how', how[lang].hero.eyebrow, how[lang].hero.title);
  add('work', shared[lang].nav.work, pages[lang].work.title);
  add('journal', 'Journal', pages[lang].journal.title);
  add('book', shared[lang].nav.book, pages[lang].book.title);
}

// Journal articles (English originals), title from frontmatter.
const dir = path.join(root, 'src/content/articles');
for (const f of fs.readdirSync(dir).filter((f) => f.endsWith('.en.md'))) {
  const fm = fs.readFileSync(path.join(dir, f), 'utf8').split('---')[1];
  const get = (k) => (fm.match(new RegExp(`^${k}:\\s*"?(.*?)"?\\s*$`, 'm')) || [])[1];
  const slug = get('route').replace(/-(en|de|it)$/, '');
  cards.push({ file: `journal-${slug}.jpg`, eyebrow: `Journal · ${get('readingTime')} read`, title: get('title'), line: 'Marco Rosso · Astia Web' });
}

fs.writeFileSync(path.join(root, 'scripts/og/manifest.json'), JSON.stringify(cards, null, 2));
console.log(`manifest: ${cards.length} cards`);
