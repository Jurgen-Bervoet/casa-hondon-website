// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://casa-hondon.netlify.app',
  publicDir: './images',
  integrations: [sitemap()],
});
