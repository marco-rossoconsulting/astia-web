/**
 * Site-wide behaviour, loaded once per page by BaseLayout.
 *
 * - Nav: a hairline appears once the page scrolls (IntersectionObserver on a
 *   sentinel, no scroll listener).
 * - Menu: the tablet/phone menu panel, with Escape, focus return and scroll lock.
 * - Reveal: .reveal elements ease in as they enter the viewport.
 * - Currency: one CHF / EUR / USD preference for every [data-money] figure.
 * - Consent: Google Analytics loads only after "Accept analytics" (see
 *   CookieConsent.astro); "Reject", or a Global Privacy Control signal, means
 *   it never loads. "Cookie settings" in the footer reopens the choice.
 * - Analytics: GA4 events from [data-track] and outbound links (only sent
 *   once analytics has loaded).
 */
import { CURRENCIES, DEFAULT_CURRENCY, formatNumber, type Currency, type Lang } from '@/i18n';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    [key: `ga-disable-${string}`]: boolean | undefined;
  }
  interface Navigator {
    globalPrivacyControl?: boolean;
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

/* ---------- Consent and Google Analytics ---------- */
const GA_ID = 'G-EREW8N0F4N';
const CONSENT_KEY = 'astia-consent';
type Consent = 'granted' | 'denied';

function readConsent(): Consent | null {
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    return v === 'granted' || v === 'denied' ? v : null;
  } catch {
    return null;
  }
}

function storeConsent(value: Consent): void {
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch {
    /* not remembered: the banner simply asks again next time */
  }
}

let analyticsLoaded = false;
function loadAnalytics(): void {
  window[`ga-disable-${GA_ID}`] = false;
  if (analyticsLoaded) return;
  analyticsLoaded = true;
  window.dataLayer = window.dataLayer || [];
  // gtag.js expects the arguments object itself, not an array.
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag('consent', 'default', {
    analytics_storage: 'granted',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });
  window.gtag('js', new Date());
  window.gtag('config', GA_ID, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);
}

function stopAnalytics(): void {
  window[`ga-disable-${GA_ID}`] = true;
  // Remove the analytics cookies on this host and its parent domain.
  const host = location.hostname;
  const domains = ['', host, `.${host}`, `.${host.split('.').slice(-2).join('.')}`];
  document.cookie.split(';').forEach((c) => {
    const name = c.split('=')[0].trim();
    if (!name.startsWith('_ga')) return;
    domains.forEach((d) => {
      document.cookie = `${name}=; Max-Age=0; path=/${d ? `; domain=${d}` : ''}`;
    });
  });
}

const banner = document.querySelector<HTMLElement>('[data-consent]');
const showBanner = () => {
  if (!banner) return;
  banner.hidden = false;
};
const hideBanner = () => {
  if (banner) banner.hidden = true;
};

banner?.addEventListener('click', (e) => {
  const btn = (e.target as HTMLElement).closest<HTMLElement>('[data-consent-choice]');
  if (!btn) return;
  const choice = btn.dataset.consentChoice as Consent;
  storeConsent(choice);
  hideBanner();
  if (choice === 'granted') loadAnalytics();
  else stopAnalytics();
});

document.addEventListener('click', (e) => {
  if ((e.target as HTMLElement).closest('[data-consent-open]')) {
    e.preventDefault();
    showBanner();
    banner?.querySelector<HTMLButtonElement>('[data-consent-choice]')?.focus();
  }
});

const consent = readConsent();
if (consent === 'granted') loadAnalytics();
else if (consent === null && navigator.globalPrivacyControl !== true) showBanner();

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
