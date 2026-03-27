# SEO Optimization

## Summary
- Strengthened technical SEO coverage for prerendered pages, share previews, structured data, and sitemap freshness.

## Changes
- Expanded `SEOHead` to support optional canonicals, robots directives, reusable social tags, and multiple JSON-LD blocks.
- Marked compare and 404 routes as `noindex,follow`, and changed prerendering to emit a real `404.html` instead of copying the home page.
- Added build-time freshness metadata for lenses, articles, and prerendered routes; wired sitemap `lastmod` generation and audit validation to that source of truth.
- Added a reusable social card asset in `public/og-default.png` with shared Open Graph/Twitter defaults.
- Rolled out page-type schema coverage for home, collection pages, maker pages, article pages, and lens pages, with breadcrumb support where appropriate.

## Verification
- `npm run format`
- `npm run format:check`
- `npm run lint`
- `npm run typecheck`
- `npm run test`
- `npm run build`
- `npm run seo:audit`

## Follow-ups
- Optional: add page-specific social images if individual lens/article previews become important.
- Optional: reduce the large Vite client bundle size warning with route-level code splitting or manual chunking.
