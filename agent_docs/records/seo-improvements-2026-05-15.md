# SEO Improvements 2026-05-15

## Summary
- Improve Surface & Stop SEO metadata, sitemap discoverability, and off-site verification notes.

## Changes
- Added patent-focused title and description wording for crawlable lens library pages.
- Added WebApplication and Dataset JSON-LD where it matches visible site content.
- Added a homepage footer link to `/sitemap.xml`.
- Documented Cloudflare Pages, Search Console, Bing, and social preview checks in `SEO_OFFSITE_ACTIONS.md`.

## Verification
- `npm run test -- lensMetadata structuredData entryServer` — passed
- `npm run typecheck` — passed
- `npm run format:check` — passed
- `npm run lint` — passed
- `npm run test` — passed
- `npm run build` — passed
- `npm run seo:audit` — passed

## Follow-ups
- Replace the default SVG social card with a correctly rendered 1200 x 630 PNG and add social-image audit guards.
