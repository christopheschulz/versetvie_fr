// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://versetvie.fr',
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en', 'de'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false
    }
  },
  prefetch: {
    defaultStrategy: 'hover',
    prefetchAll: true
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
