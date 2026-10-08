/**
 * Site-wide behaviour, loaded once per page by BaseLayout.
 *
 * - Nav: a hairline appears once the page scrolls (IntersectionObserver on a
 *   sentinel, no scroll listener).
 * - Menu: the tablet/phone menu panel, with Escape, focus return and scroll lock.
 * - Reveal: .reveal elements ease in as they enter the viewport.
 * - Currency: one CHF / EUR / USD preference for every [data-money] figure.
 * - Analytics: GA4 events from [data-track] and outbound links.
 */
import { CURRENCIES, DEFAULT_CURRENCY, formatNumber, type Currency, type Lang } from '@/i18n';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const lang = (document.documentElement.lang || 'en') as Lang;

export function track(name: string, params: Record<string, unknown> = {}): void {
  if (typeof window.gtag === 'function') window.gtag('event', name, params);
}

/* ---------- Nav ---------- */
const nav = document.querySelector<HTMLElement>('[data-nav]');
const sentinel = document.querySelector('[data-nav-sentinel]');
if (nav && sentinel && 'IntersectionObserver' in window) {
  new IntersectionObserver(([entry]) => {
    nav.classList.toggle('is-scrolled', !entry.isIntersecting);
  }).observe(sentinel);
}

/* ---------- Menu ---------- */
const toggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
const menu = document.querySelector<HTMLElement>('[data-menu]');
if (nav && toggle && menu) {
  const setOpen = (open: boolean, returnFocus = true) => {
    toggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
    document.documentElement.style.overflow = open ? 'hidden' : '';
    if (open) {
      menu.hidden = false;
      menu.classList.add('is-animating');
      menu.querySelector<HTMLElement>('a')?.focus({ preventScroll: true });
    } else {
      menu.hidden = true;
      menu.classList.remove('is-animating');
      if (returnFocus) toggle.focus({ preventScroll: true });
    }
  };
  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  menu.addEventListener('click', (e) => {
    if ((e.target as HTMLElement).closest('a')) setOpen(false, false);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') setOpen(false);
  });
  window.matchMedia('(min-width: 1024px)').addEventListener('change', (mq) => {
    if (mq.matches && toggle.getAttribute('aria-expanded') === 'true') setOpen(false, false);
  });
}

/* ---------- Reveal ---------- */
if (document.documentElement.classList.contains('js')) {
  const items = document.querySelectorAll<HTMLElement>('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    );
    items.forEach((el) => io.observe(el));
  } else {
    items.forEach((el) => el.classList.add('is-in'));
  }
}

/* ---------- Currency ---------- */
const CURRENCY_KEY = 'astia-currency';

function readCurrency(): Currency {
  try {
    const stored = localStorage.getItem(CURRENCY_KEY);
    if (stored && (CURRENCIES as readonly string[]).includes(stored)) return stored as Currency;
  } catch {
    /* storage unavailable: fall back to the default */
  }
  return DEFAULT_CURRENCY;
}

function applyCurrency(currency: Currency): void {
  document.documentElement.dataset.currency = currency;
  document.querySelectorAll<HTMLElement>('[data-money]').forEach((el) => {
    const n = Number(el.dataset.money);
    const num = formatNumber(n, lang, currency);
    el.textContent = el.dataset.moneyFormat === 'number' ? num : `${currency} ${num}`;
  });
  document.querySelectorAll<HTMLElement>('[data-currency-code]').forEach((el) => {
    el.textContent = currency;
  });
  document.querySelectorAll<HTMLElement>('[data-currency-btn]').forEach((btn) => {
    btn.setAttribute('aria-pressed', String(btn.dataset.currencyBtn === currency));
  });
  window.dispatchEvent(new CustomEvent<Currency>('astia:currency', { detail: currency }));
}

document.addEventListener('click', (e) => {
  const btn = (e.target as HTMLElement).closest<HTMLElement>('[data-currency-btn]');
  if (!btn) return;
  const next = btn.dataset.currencyBtn as Currency;
  try {
    localStorage.setItem(CURRENCY_KEY, next);
  } catch {
    /* preference simply isn't remembered */
  }
  applyCurrency(next);
  track('currency_change', { currency: next });
});

const initial = readCurrency();
if (initial !== DEFAULT_CURRENCY) applyCurrency(initial);
else document.documentElement.dataset.currency = DEFAULT_CURRENCY;

/* ---------- Analytics ---------- */
document.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;
  const tracked = target.closest<HTMLElement>('[data-track]');
  if (tracked) track(tracked.dataset.track!, { link_text: tracked.textContent?.trim().slice(0, 80) });

  const link = target.closest<HTMLAnchorElement>('a[href]');
  if (link && /^(https?:|mailto:|tel:)/.test(link.getAttribute('href') || '') && link.host !== location.host) {
    track('outbound_link', { link_url: link.href, link_text: link.textContent?.trim().slice(0, 80) });
  }
});
