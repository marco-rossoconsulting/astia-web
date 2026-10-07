import { getCollection, type CollectionEntry } from 'astro:content';
import { localPath, type Lang } from '@/i18n';

export type Article = CollectionEntry<'articles'>;

/** The shared slug across translations: "one-price-en" -> "one-price". */
export const baseSlug = (route: string) => route.replace(/-(en|de|it)$/, '');

export const articlePath = (a: Article) => localPath(a.data.lang, `/journal/${a.data.route}`);

export async function articlesFor(lang: Lang): Promise<Article[]> {
  const all = await getCollection('articles', (a) => a.data.lang === lang && a.data.published);
  return all.sort((a, b) => b.data.date.localeCompare(a.data.date));
}

/**
 * Paths of this article in every language that has a full translation.
 * Stubs (translationPending) are left out so hreflang only points at real text.
 */
export async function articleAlternates(article: Article): Promise<Partial<Record<Lang, string>>> {
  const base = baseSlug(article.data.route);
  const all = await getCollection('articles', (a) => a.data.published && baseSlug(a.data.route) === base);
  const out: Partial<Record<Lang, string>> = {};
  for (const a of all) {
    if (!a.data.translationPending || a.id === article.id) out[a.data.lang] = articlePath(a);
  }
  return out;
}

/** Minutes as a number from "7 min". */
export const minutes = (readingTime: string) => parseInt(readingTime, 10) || 5;
