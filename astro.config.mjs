// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.sushi-bby-omakase.com',
  integrations: [
    sitemap({
      // Emit URLs without a trailing slash, matching the canonical tags in
      // Layout.astro and the site's own internal links (e.g. `/gallery`).
      serialize(item) {
        const url = new URL(item.url);
        if (url.pathname !== '/') {
          url.pathname = url.pathname.replace(/\/+$/, '');
        }
        item.url = url.href;
        return item;
      },
    }),
  ],
});