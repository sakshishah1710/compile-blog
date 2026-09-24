import { defineConfig } from 'astro/config';

// Astro output is static; the Netlify scheduled function regenerates
// content and triggers a rebuild, so pages stay server-rendered-fresh
// without needing SSR hosting.
export default defineConfig({
  site: 'https://your-site-name.netlify.app',
  output: 'static'
});
