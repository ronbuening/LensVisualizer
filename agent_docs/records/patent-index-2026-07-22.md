# Patent-Centered Map and Index

## Summary

- Make patent nodes actionable in the relationship map and add a browsable patent index.

## Changes

- Added a shared visible-patent catalog used by author pages, the relationship graph, and the patent index.
- Added URL-backed patent focus with a patent-centered SVG view of credited inventors and assignees.
- Added `/patents` with patent, party, and related lens-diagram links plus number/year sorting.
- Added homepage navigation, prerender/sitemap metadata, SEO data, changelog, docs, and regression coverage.

## Verification

- `npm run typecheck` — passed
- `npm run format:check` — passed
- `npm run lint` — passed with three pre-existing warnings
- `npm run test` — passed, 2,394 tests
- `npm run build` — passed, 933 routes prerendered
- `npm run seo:audit` — passed with 0 errors and 0 warnings

## Follow-ups

- Manual browser click-through was unavailable in this session; component and page interaction tests cover patent-click URL navigation and centered rendering.
