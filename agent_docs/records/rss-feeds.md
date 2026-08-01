# Static RSS Feeds

## Summary

- Added static RSS 2.0 feeds for the 50 newest visible lenses and articles.
- Added HTML autodiscovery, contextual subscription links, Cloudflare MIME headers, and feed-aware SEO auditing.
- Kept feeds out of React routing and sitemap generation.

## Verification

- `npm run typecheck` — passed
- `npm run format:check` — passed
- `npm run lint` — passed with three unrelated pre-existing warnings
- `npm run test` — passed (215 files, 2,535 tests)
- `npm run build` — passed (987 prerendered routes and both feeds generated)
- `npm run seo:audit` — passed (0 errors, 0 warnings)

## Follow-ups

- After deployment, confirm both production feed URLs return HTTP 200 with `application/rss+xml` and that homepage
  autodiscovery resolves through the public domain.
