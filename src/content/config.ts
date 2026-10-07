import { defineCollection, z } from 'astro:content';

const i18nString = z.object({ en: z.string(), de: z.string(), it: z.string() });

// ARTICLES: markdown with the language in the filename, e.g. one-price.en.md.
// `route` is the URL slug; the same base slug (minus -en/-de/-it) links the
// translations for hreflang and the language switcher.
const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    route: z.string(),
    lang: z.enum(['en', 'de', 'it']),
    excerpt: z.string(),
    tag: z.string(),
    date: z.string(),
    readingTime: z.string(),
    published: z.boolean().default(true),
    /** True when the body is a stub pointing to another language. */
    translationPending: z.boolean().default(false),
    seo: z
      .object({
        title: z.string().optional(),
        description: z.string().optional(),
        ogImage: z.string().optional(),
      })
      .optional(),
  }),
});

// PORTFOLIO: one JSON per site on the Work page, sorted by `order`.
const portfolio = defineCollection({
  type: 'data',
  schema: z.object({
    order: z.number(),
    tag: i18nString,
    title: z.string(),
    subtitle: i18nString,
    /** 800 × 1000 card image (brand spec), in /public/images. */
    image: z.string(),
    imageAlt: i18nString,
    url: z.string().optional(),
  }),
});

export const collections = { articles, portfolio };
