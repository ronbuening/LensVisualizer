# Patent Author Search

## Summary

- Added catalog search for lens names, patent numbers, and patent authors.

## Changes

- Added prominent homepage search, a dedicated `/search` route, live suggestions, and direct exact-match navigation.
- Added prerendered author pages that aggregate unique patents and group them by assignee or co-author.
- Added a crawlable `/authors` index with patent and lens counts, sortable alphabetically or by patent count.
- Added a secondary homepage index bar for mounts, formats, authors, and articles, and moved the provenance strip to the bottom of the page content.
- Added sticky in-page group navigation and persistent Search links to static and viewer headers.
- Extended generated metadata, route freshness, sitemap coverage, SEO data, tests, architecture docs, and changelog data.
- Used React's `SubmitEvent` type for form submission instead of the deprecated `FormEvent` alias.

## Verification

- `npm run typecheck` — passed
- `npm run format:check` — passed
- `npm run lint` — passed
- `npm run test` — passed (2,351 tests)
- `npm run build` — passed (928 prerendered routes)
- `npm run seo:audit` — passed with 0 errors and 0 warnings

## Follow-ups

- None.
