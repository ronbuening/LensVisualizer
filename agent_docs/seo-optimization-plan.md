# SEO Optimization Plan

**Status:** blocked since 2026-08-04 on the inputs below; the full staged plan (baseline, five phases, Search Console
triage rules, reporting cadence) is in git history at this path.

## Standing check

`npm run seo:audit` (`scripts/seo-audit.mjs`) runs against `dist/` after `npm run build` and validates every
prerendered route: title, description, and canonical URL on each page; JSON-LD, H1, and content on lens pages; sitemap
coverage and deployment-canonical URL forms; `robots.txt`; the RSS feeds; index-to-child links; and `404.html`. It must
pass with zero errors before any SEO change ships. Deployment notes are in `agent_docs/workflow.md`.

## Required inputs (user-supplied)

- [ ] Production deployment completed
- [ ] Production or preview URL supplied for smoke testing
- [ ] Search Console exclusion URL exports supplied
- [ ] URL Inspection details supplied for representative excluded pages
- [ ] 5xx crawl timestamp and Cloudflare evidence supplied, if available
- [ ] Core Web Vitals report supplied
- [ ] PageSpeed Insights reports supplied

Already resolved: the editorial decision for thin author pages, and approval to add production CI monitoring or change
indexation policy once the inputs above exist.

## Acceptance criteria that still apply

- Production matches the local build and `npm run seo:audit`: no representative canonical URL redirects or errors, and
  legacy non-trailing-slash or query-state URLs redirect exactly once to the canonical form.
- The sitemap lists only directly served canonical URLs; canonical tags, Open Graph URLs, JSON-LD, sitemap entries,
  RSS item links, and internal links agree.
- Search Console has fetched the updated sitemap. Excluded URLs are triaged per URL (fetch, render, `noindex`,
  canonical, soft-404) before any enrichment, consolidation, or `noindex` decision; `noindex` is never mass-applied
  ahead of that triage.
- Thin author pages (no curated biography, one patent, one lens) stay `noindex,follow` but remain prerendered and
  internally linked; sitemap generation excludes them from the rendered robots metadata.
- Performance work measures field and lab data before changing bundle boundaries and never trades prerendered primary
  content or crawlable links for a synthetic score.
- Any production monitoring is read-only, rate-limited, tolerant of a deployment propagation window, and never submits
  URLs to Google.
