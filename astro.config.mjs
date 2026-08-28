import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://astiaweb.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'it'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [react()],
  trailingSlash: 'never',
  build: {
    format: 'file',
    inlineStylesheets: 'auto',
  },
});
