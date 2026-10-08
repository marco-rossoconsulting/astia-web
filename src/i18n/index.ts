/**
 * Language, routing and formatting helpers shared by every page.
 *
 * Copy lives in one module per page (src/i18n/*.ts). Each module exports an
 * object keyed by language; the German and Italian blocks are typed against
 * the English one, so a missing or misspelt key fails the type check.
 */

export const LANGS = ['en', 'de', 'it'] as const;
export type Lang = (typeof LANGS)[number];

export const SITE_URL = 'https://astiaweb.com';

export const ROUTES = {
  home: '/',
  how: '/how-it-works',
  pricing: '/pricing',
  work: '/work',
  journal: '/journal',
  book: '/book-a-call',
  thanks: '/thank-you',
} as const;
export type RouteKey = keyof typeof ROUTES;

/** Path for a route in a language: /pricing, /de/pricing, /it/pricing. */
export function href(lang: Lang, route: RouteKey, hash = ''): string {
  const path = ROUTES[route];
  const prefix = lang === 'en' ? '' : `/${lang}`;
  const base = path === '/' ? prefix || '/' : `${prefix}${path}`;
  return hash ? `${base}#${hash}` : base;
}

/** Path for any un-prefixed path (e.g. a journal article) in a language. */
export function localPath(lang: Lang, path: string): string {
  const prefix = lang === 'en' ? '' : `/${lang}`;
  return path === '/' ? prefix || '/' : `${prefix}${path}`;
}

/** The same page in another language, from the current un-prefixed path. */
export function stripLang(path: string): string {
  const clean = path.replace(/^\/(de|it)(?=\/|$)/, '');
  return clean === '' ? '/' : clean;
}

export const CURRENCIES = ['CHF', 'EUR', 'USD'] as const;
export type Currency = (typeof CURRENCIES)[number];
export const DEFAULT_CURRENCY: Currency = 'CHF';

/**
 * Whole-number formatting per the brand book (Part II, 07 Languages):
 * EN uses a comma; DE and IT use an apostrophe for Swiss francs and a full
 * stop for euros (and dollars).
 */
export function formatNumber(n: number, lang: Lang, currency: Currency = DEFAULT_CURRENCY): string {
  const digits = Math.round(n).toString();
  const sep = lang === 'en' ? ',' : currency === 'CHF' ? '’' : '.';
  return digits.replace(/\B(?=(\d{3})+(?!\d))/g, sep);
}

/** "CHF 1,800" / "CHF 1’800" / "EUR 1.800": currency code before the amount. */
export function money(n: number, lang: Lang, currency: Currency = DEFAULT_CURRENCY): string {
  return `${currency} ${formatNumber(n, lang, currency)}`;
}

export const OG_LOCALE: Record<Lang, string> = { en: 'en_GB', de: 'de_CH', it: 'it_CH' };
export const LANG_NAMES: Record<Lang, string> = { en: 'English', de: 'Deutsch', it: 'Italiano' };

/** Escape text for safe use with set:html. */
export function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * Headlines mark their one italic word with asterisks: "One price for
 * *everything*." This renders that word as <em>, escaping everything else.
 */
export function em(s: string): string {
  return escapeHtml(s).replace(/\*([^*]+)\*/g, '<em>$1</em>');
}

/** The plain text of a headline, for meta tags and aria labels. */
export function plain(s: string): string {
  return s.replace(/\*/g, '');
}

/** Long date in the language's own format: 15 January 2026, 15. Januar 2026. */
export function formatDate(iso: string, lang: Lang): string {
  const d = new Date(`${iso}T12:00:00Z`);
  const locale = lang === 'en' ? 'en-GB' : lang === 'de' ? 'de-CH' : 'it-CH';
  return new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(d);
}
