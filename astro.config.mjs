import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from '@astrojs/tailwind';
import robotsTxt from "astro-robots-txt";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://haroldbjc.github.io',
  output: 'static',
  server: {
    headers: {
      "cache-control": "public, max-age=31536000"
    }
  },
  integrations: [
    react({
      include: ['**/react/*']
    }),
    tailwind({
      applyBaseStyles: false
    }),
    robotsTxt(),
    mdx()
  ]
});