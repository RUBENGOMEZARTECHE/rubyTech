// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'http://46.62.132.241',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});

