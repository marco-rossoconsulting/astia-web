/**
 * Generate sitemap-0.xml and sitemap-index.xml from content files.
 * Run after `astro build` so the files land in dist/.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../dist');
const articlesDir = path.resolve(__dirname, '../src/content/articles');

const siteUrl = 'https://astiaweb.com';
const today = new Date().toISOString().split('T')[0];

// Static routes with their locales
const staticRoutes = [
  { path: '/', locales: ['en', 'de', 'it'], changefreq: 'weekly', priority: '1.0' },
  { path: '/how-it-works', locales: ['en', 'de', 'it'], changefreq: 'monthly', priority: '0.8' },
  { path: '/pricing', locales: ['en', 'de', 'it'], changefreq: 'weekly', priority: '0.9' },
  { path: '/apply', locales: ['en', 'de', 'it'], changefreq: 'monthly', priority: '0.8' },
  { path: '/thank-you', locales: ['en'], changefreq: 'yearly', priority: '0.3' },
  { path: '/journal', locales: ['en', 'de', 'it'], changefreq: 'weekly', priority: '0.7' },
];

// Read all articles and group by base slug
const articleFiles = fs.readdirSync(articlesDir).filter(f => f.endsWith('.md'));
const articles = articleFiles.map(file => {
  const content = fs.readFileSync(path.join(articlesDir, file), 'utf-8');
  const frontmatter = content.match(/^---\n([\s\S]*?)\n---/);
  if (!frontmatter) return null;
  const data = Object.fromEntries(
    frontmatter[1].split('\n').map(line => {
      const match = line.match(/^(\w+):\s*(.*)$/);
      if (match) {
        const key = match[1];
        let value = match[2].trim();
        if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
        if (value === 'true') value = true;
        if (value === 'false') value = false;
        return [key, value];
      }
      return null;
    }).filter(Boolean)
  );
  return data;
}).filter(a => a && a.published !== false);

// Group articles by base slug
const articleGroups = {};
for (const article of articles) {
  const base = article.route.replace(/-(en|de|it)$/, '');
  if (!articleGroups[base]) articleGroups[base] = {};
  articleGroups[base][article.lang] = article;
}

function buildUrl(path, lang) {
  const prefix = lang === 'en' ? '' : `/${lang}`;
  const urlPath = path === '/' ? (prefix || '/') : `${prefix}${path}`;
  return `${siteUrl}${urlPath}`;
}

function buildAlternates(path, locales) {
  const alts = {};
  for (const lang of locales) {
    alts[lang] = buildUrl(path, lang);
  }
  return alts;
}

function urlEntry(loc, lastmod, changefreq, priority, alternates) {
  let xml = `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n`;
  if (alternates) {
    for (const [lang, href] of Object.entries(alternates)) {
      xml += `    <xhtml:link rel="alternate" hreflang="${lang}" href="${href}"/>\n`;
    }
    if (alternates.en) {
      xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${alternates.en}"/>\n`;
    }
  }
  xml += '  </url>\n';
  return xml;
}

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n`;

// Static pages
for (const route of staticRoutes) {
  const alternates = buildAlternates(route.path, route.locales);
  for (const lang of route.locales) {
    const loc = alternates[lang];
    sitemap += urlEntry(loc, today, route.changefreq, route.priority, alternates);
  }
}

// Articles
for (const [base, group] of Object.entries(articleGroups)) {
  const locales = Object.keys(group);
  const alternates = {};
  for (const lang of locales) {
    const prefix = lang === 'en' ? '' : `/${lang}`;
    alternates[lang] = `${siteUrl}${prefix}/journal/${group[lang].route}`;
  }
  for (const lang of locales) {
    sitemap += urlEntry(alternates[lang], today, 'monthly', '0.6', alternates);
  }
}

sitemap += '</urlset>\n';

const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <sitemap>\n    <loc>${siteUrl}/sitemap-0.xml</loc>\n    <lastmod>${today}</lastmod>\n  </sitemap>\n</sitemapindex>\n`;

fs.writeFileSync(path.join(distDir, 'sitemap-0.xml'), sitemap);
fs.writeFileSync(path.join(distDir, 'sitemap-index.xml'), sitemapIndex);

console.log('Sitemap generated:', path.join(distDir, 'sitemap-0.xml'));
console.log('Sitemap index generated:', path.join(distDir, 'sitemap-index.xml'));
