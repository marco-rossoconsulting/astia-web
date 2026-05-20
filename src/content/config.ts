import { defineCollection, z } from 'astro:content';

// Reusable schemas
const i18nString = z.object({ en: z.string(), de: z.string(), it: z.string() });
const i18nText = z.object({ en: z.string(), de: z.string(), it: z.string() });

const seoSchema = z.object({
  title: i18nString,
  description: i18nText,
  ogImage: z.string().optional(),
  ogImageAlt: i18nString.optional(),
});

const imageWithAlt = z.object({
  src: z.string(),
  alt: i18nString,
  attribution: i18nString.optional(),
});

// PAGES collection — singletons (one file per page, JSON, all 3 languages inside)
const pages = defineCollection({
  type: 'data',
  schema: z.object({
    seo: seoSchema,
    // Everything else is page-specific; we use z.any() to allow flexible content
    // while still validating SEO consistently.
  }).passthrough(),
});

// SITE collection — global settings (nav labels, footer, social, brand)
const site = defineCollection({
  type: 'data',
  schema: z.object({}).passthrough(),
});

// ARTICLES collection — markdown files with language suffix in filename
// e.g. thirty-thousand.en.md, thirty-thousand.de.md, thirty-thousand.it.md
const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    lang: z.enum(['en', 'de', 'it']),
    excerpt: z.string(),
    tag: z.string(),
    date: z.string(),
    readingTime: z.string(),
    published: z.boolean().default(true),
    seo: z.object({
      title: z.string().optional(),
      description: z.string().optional(),
      ogImage: z.string().optional(),
      ogImageAlt: z.string().optional(),
    }).optional(),
  }),
});

// PORTFOLIO collection — single JSON per property
const portfolio = defineCollection({
  type: 'data',
  schema: z.object({
    order: z.number(),
    tag: i18nString,
    title: z.string(),
    subtitle: i18nString,
    image: z.string(),
    imageAlt: i18nString,
    url: z.string().optional(),
  }),
});

export const collections = { pages, site, articles, portfolio };
