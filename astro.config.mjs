// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: replace with the real production domain before indexing.
  // Canonical tags, OG URLs, robots.txt and the sitemap are all derived from
  // this value — changing it here updates every one of them.
  site: 'https://sushi-bby.vercel.app',
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