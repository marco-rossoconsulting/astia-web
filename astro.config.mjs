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
  trailingSlash: 'never',
  build: {
    format: 'file',
    // The whole stylesheet is small (~20 KB); inlining it removes the only
    // render-blocking requests, so the first paint needs one round trip.
    inlineStylesheets: 'always',
  },
});
