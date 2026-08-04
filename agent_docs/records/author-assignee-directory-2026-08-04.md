# Author and Assignee Directory Improvements

## Summary

- Improved the patent-author directory, thin-page indexing policy, and historical assignee metadata on
  `ronbuening/NewSearchImprovements`.

## Changes

- Marked author pages `noindex,follow` only when they have no biography and contain a single patent represented by a
  single lens; sitemap generation and the SEO audit now honor rendered `noindex` directives.
- Added biography labels, persistent sort selection, a non-persistent bounded assignee filter, assignee links, and
  accessible result counts to the author directory.
- Normalized and backfilled patent assignees across the catalog, including canonical historical Zeiss entities.
- Added a build-time audit for known Zeiss aliases and legal-form start years without automatic metadata rewrites.
- Added separate changelog entries for the author-page features and assignee corrections.

## Verification

- `npm run typecheck` — passed
- `npm run format:check` — passed
- `npm run lint` — passed
- `npm run test` — passed, 223 files / 2,605 tests
- `npm run build` — passed, 1,008 routes prerendered

## Follow-ups

- None.
