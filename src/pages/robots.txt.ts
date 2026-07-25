import type { APIRoute } from 'astro';

// Generated rather than kept as a static public/robots.txt so the sitemap URL
// is always derived from `site` in astro.config.mjs and can never point at a
// stale hardcoded domain.
export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL('sitemap-index.xml', site);

  const body = [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${sitemapURL.href}`,
    '',
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
