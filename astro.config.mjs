import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://keremkinik.netlify.app',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
