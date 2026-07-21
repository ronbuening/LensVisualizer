# Patent Author Search

## Summary

- Added catalog search for lens names, patent numbers, and patent authors.

## Changes

- Added prominent homepage search, a dedicated `/search` route, live suggestions, and direct exact-match navigation.
- Added prerendered author pages that aggregate unique patents and group them by assignee or co-author.
- Added sticky in-page group navigation and persistent Search links to static and viewer headers.
- Extended generated metadata, route freshness, sitemap coverage, SEO data, tests, architecture docs, and changelog data.
- Used React's `SubmitEvent` type for form submission instead of the deprecated `FormEvent` alias.

## Verification

- `npm run typecheck` — passed
- `npm run format:check` — passed
- `npm run lint` — passed
- `npm run test` — passed (2,347 tests)
- `npm run build` — passed (927 prerendered routes)
- `npm run seo:audit` — passed with 0 errors and 0 warnings

## Follow-ups

- None.
