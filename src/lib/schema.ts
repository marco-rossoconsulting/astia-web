/**
 * Structured data (schema.org JSON-LD). Part of "found by people and AI":
 * every fact a search engine or assistant needs, stated once and plainly.
 */
import { SITE_URL, type Lang } from '@/i18n';

const priceValidUntil = `${new Date().getFullYear() + 1}-12-31`;

/** The one price, in each market currency. */
export function serviceSchema(lang: Lang, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/#service`,
    name: 'Astia Web',
    serviceType: 'Website design, hosting and management subscription',
    description,
    url,
    inLanguage: lang,
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: ['CH', 'EU', 'Worldwide'],
    audience: { '@type': 'BusinessAudience', name: 'Independent hotels, restaurants and small businesses' },
    offers: (['CHF', 'EUR', 'USD'] as const).map((currency) => ({
      '@type': 'Offer',
      name: 'Astia Web, one price',
      price: '150',
      priceCurrency: currency,
      priceValidUntil,
      availability: 'https://schema.org/InStock',
      url: `${SITE_URL}/pricing`,
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '150',
        priceCurrency: currency,
        unitCode: 'MON',
        referenceQuantity: { '@type': 'QuantitativeValue', value: 1, unitCode: 'MON' },
        valueAddedTaxIncluded: false,
      },
    })),
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a.replace('{money}', '9,000') },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function articleSchema(opts: {
  lang: Lang;
  title: string;
  description: string;
  path: string;
  date: string;
  image: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.title,
    description: opts.description,
    inLanguage: opts.lang,
    datePublished: opts.date,
    dateModified: opts.date,
    mainEntityOfPage: `${SITE_URL}${opts.path}`,
    image: `${SITE_URL}${opts.image}`,
    author: {
      '@type': 'Person',
      name: 'Marco Rosso',
      jobTitle: 'Founder, Astia Web',
      url: SITE_URL,
      image: `${SITE_URL}/images/marco-rosso-founder-astia-web.jpg`,
    },
    publisher: { '@id': `${SITE_URL}/#organization` },
  };
}
