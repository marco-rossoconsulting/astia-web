import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://astiaweb.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'it'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [],
  trailingSlash: 'never',
  build: {
    inlineStylesheets: 'auto',
  },
});
