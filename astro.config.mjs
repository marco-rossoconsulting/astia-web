import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://astiaweb.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'it'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', de: 'de', it: 'it' },
      },
    }),
  ],
  trailingSlash: 'never',
  build: {
    inlineStylesheets: 'auto',
  },
});
