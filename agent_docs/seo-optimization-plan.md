# SEO Optimization Plan

## Purpose

Improve crawl efficiency, canonical consistency, index quality, and page experience for Surface & Stop without
chasing a misleading goal of indexing every URL Google discovers. Work should prioritize important lens, article,
maker, mount, format, patent, and author pages, then use Search Console evidence to decide whether excluded URLs need
technical fixes, stronger content, consolidation, or no action.

## Current Baseline

The RSS and canonical-URL work on `ronbuening/RSSEnablement` establishes the technical baseline:

- `f4aab15d` adds static RSS feeds for new lenses and articles, feed autodiscovery, visible subscription links, feed
  response headers, documentation, tests, and build/audit coverage.
- `68897761` aligns canonical tags, Open Graph URLs, JSON-LD, sitemap entries, RSS item links, and internal links with
  Cloudflare Pages' directly served trailing-slash page URLs.
- Lens-library breadcrumb context now travels in React Router state instead of crawlable `from` and `returnTo` query
  parameters. Legacy query URLs remain readable.
- Relationship-map focus uses a fragment instead of a query parameter. Legacy `?focus=` URLs normalize after
  hydration.
- The SEO audit checks all 987 prerendered routes and 10,026 same-site link occurrences for deployment-canonical URL
  forms. The current generated site passes with zero errors and zero warnings.
- Full verification passed: typecheck, formatting, lint with zero errors and three pre-existing warnings, 2,542 tests,
  production build, and SEO audit.

The Search Console screenshot captured before these changes reported:

| Reason | URLs | Initial interpretation |
| --- | ---: | --- |
| Page with redirect | 1,027 | Primarily inconsistent discovery of non-trailing-slash and query-state URLs; addressed at the source by the canonical-URL work. |
| Crawled — currently not indexed | 14 | Requires URL-level inspection; may be content selection, duplication, rendering, or a non-page resource rather than a site-wide technical failure. |
| Alternate page with proper canonical | 4 | Often expected, but exact URLs must be checked to confirm that Google selected the intended canonical. |
| Not found (404) | 2 | Fix only if the site links to the URL, lists it in the sitemap, or has a known replacement. |
| Server error (5xx) | 1 | Requires the exact URL, crawl time, and live response or Cloudflare evidence. |

## Phase 1 — Deploy and Establish the New Baseline

### Inputs required

- Merge or deploy the branch through the normal Cloudflare Pages production workflow.
- Provide the production deployment URL if it is not `https://surfaceandstop.com/`.

### Actions

1. Smoke-test both RSS feeds for HTTP 200, RSS MIME type, valid XML, current entries, and homepage autodiscovery.
2. Test representative home, lens, article, author, maker, mount, format, patent, updates, and relationship URLs.
3. Confirm canonical trailing-slash page URLs return 200 directly.
4. Confirm legacy non-trailing-slash URLs redirect once to the canonical form.
5. Confirm production canonical, Open Graph, structured-data, sitemap, and internal-link URLs agree.
6. Resubmit `https://surfaceandstop.com/sitemap.xml` in Search Console after the deployment is live.
7. Start validation for the redirect-related report only after representative live tests show the new signals.

### Acceptance criteria

- Production behavior matches the local build and SEO audit.
- The sitemap contains only directly served canonical URLs.
- No representative canonical URL redirects or returns an error.
- Search Console has fetched the updated sitemap successfully.

Google treats redirects, `rel="canonical"`, and sitemap inclusion as signals that can reinforce one another. Internal
links should also point to the preferred canonical URL:
<https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls>

## Phase 2 — Triage the Remaining Search Console Exclusions

### Inputs required

Export or copy the example URLs from these Page Indexing report rows:

- Crawled — currently not indexed
- Alternate page with proper canonical
- Not found (404)
- Server error (5xx)

For at least two representative `Crawled — currently not indexed` URLs, also capture the URL Inspection fields:

- Last crawl
- Crawled as
- Page fetch
- Crawl allowed
- Indexing allowed
- User-declared canonical
- Google-selected canonical
- Referring page and sitemap discovery, when shown
- Rendered-page screenshot and tested HTML from a live test, when available

For a 5xx URL, also capture the last crawl time and any matching Cloudflare request, error, or deployment evidence. Do
not share account credentials; exports, screenshots, and copied report fields are sufficient.

### Decision rules

#### Page with redirect

- Treat a redirecting URL as non-indexable by design; evaluate whether its target is correct.
- Fix only redirect loops, chains, bad targets, or source links that still advertise the redirecting URL.
- Expect historical counts to decline only after Google recrawls the old and new URLs.

#### Alternate page with proper canonical

- Take no action when Google selected the intended canonical page.
- Correct internal links, sitemap entries, or canonical tags only when signals conflict.
- Investigate materially different pages that Google incorrectly groups as duplicates.

#### Not found (404)

- Keep a real 404 when the URL is obsolete, unlinked, and has no equivalent replacement.
- Add a permanent redirect only when a clear successor exists.
- Repair any current internal link or sitemap entry that produces the 404.

#### Server error (5xx)

- Reproduce with both a normal request and a Search Console live test.
- Correlate the URL and crawl time with Cloudflare or deployment evidence.
- Fix deterministic application or routing failures; monitor rather than redesign around a single historical transient
  error that no longer reproduces.

#### Crawled — currently not indexed

- First rule out fetch, rendering, `noindex`, canonical, and soft-404 problems.
- Compare the page with indexed pages of the same type for unique content, internal-link prominence, and search value.
- Enrich, consolidate, or deliberately `noindex` only after the affected URLs reveal a repeatable pattern.
- Request indexing for a small set of corrected representative URLs rather than repeatedly submitting every page.

Search Console's URL Inspection report is the primary diagnostic surface for a specific URL:
<https://support.google.com/webmasters/answer/9012289>

## Phase 3 — Decide the Index-Quality Policy

This phase follows the URL-level triage; do not mass-apply `noindex` before identifying the excluded page types.

### Search page

Evaluate removing `/search/` from the sitemap and marking it `noindex,follow`. It is useful navigation for people but
does not currently provide a stable, standalone search landing page. Keep its result links crawlable.

### Author pages

The generated catalog currently contains 368 author pages. Of those, 206 represent a single patent, while only 19
authors have curated biographies. If thin author pages appear disproportionately in the excluded set, choose one of
these policies:

1. Enrich important authors with sourced biographies and design context.
2. Keep bibliographically useful pages indexable when their patent and lens relationships provide distinct value.
3. Consolidate or `noindex,follow` pages that add no standalone value beyond a single lens page.

The choice requires editorial judgment about whether Surface & Stop wants comprehensive inventor records or a smaller
curated author index. Do not generate generic biographies merely to increase word count.

### Content review

- Prioritize unique patent interpretation, optical analysis, provenance, and helpful cross-links.
- Avoid publishing near-duplicate template text solely for indexing.
- Use Search Console query and landing-page performance to select pages for enrichment.

Google recommends people-first content with first-hand expertise and useful depth:
<https://developers.google.com/search/docs/fundamentals/creating-helpful-content>

## Phase 4 — Page Experience and Delivery Performance

### Inputs required

- Search Console Core Web Vitals report, grouped by mobile and desktop.
- PageSpeed Insights links or exports for the homepage, lens library, one representative lens, one article, and the
  patents index.

### Known local opportunities

- The production build currently reports a roughly 3.4 MB `ClientOnly` viewer chunk.
- The prerendered patents index is roughly 815 KB of HTML, the lens library roughly 293 KB, and the authors index
  roughly 204 KB.

### Actions

1. Measure field and lab data before changing bundle boundaries.
2. Split expensive viewer analysis modules and lens-prescription payloads so initial navigation loads only what the
   selected route and visible tab require.
3. Review the large patent and catalog indexes for markup repetition, rendering cost, and mobile interaction latency
   while preserving crawlable links.
4. Re-test Largest Contentful Paint, Interaction to Next Paint, and Cumulative Layout Shift after each material
   change.
5. Treat performance as a user-experience project; do not trade away prerendered primary content or crawlable links
   for a synthetic score.

PageSpeed Insights reports both lab diagnostics and available real-user Chrome data:
<https://developers.google.com/speed/docs/insights/v5/about>

## Phase 5 — Production SEO Monitoring

Add a production-safe audit that can run manually after deployment and, once stable, in CI or a scheduled workflow.
It should verify:

- Representative canonical URLs return HTTP 200 without a redirect.
- Legacy URL forms redirect exactly once to the expected target.
- `robots.txt`, sitemap, RSS feeds, and feed response types are correct.
- Canonical tags, Open Graph URLs, and structured-data page URLs agree.
- No indexable representative page accidentally emits `noindex`.
- Sitemap URLs are unique, canonical, parseable, and fetchable.
- Representative lens, article, author, archive, and 404 pages contain the expected prerendered content.

The production audit must be read-only, rate-limited, and tolerant of a deployment propagation window. It must fail
clearly on deterministic errors without creating crawl traffic or repeatedly submitting URLs to Google.

## Reporting Cadence

After deployment:

1. Record the deployment date and initial Search Console counts.
2. Recheck after Google has recrawled representative URLs; indexing is not immediate and may take days or weeks.
3. Review the Page Indexing report monthly and after substantial route or content changes.
4. Track indexed important pages, organic impressions/clicks, Core Web Vitals, and error regressions instead of using
   total indexed percentage as the sole success metric.

Google notes that a sitemap improves discovery but does not guarantee crawling or indexing:
<https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview>

## Inputs Checklist

- [ ] Production deployment completed
- [ ] Production or preview URL supplied for smoke testing
- [ ] Search Console exclusion URL exports supplied
- [ ] URL Inspection details supplied for representative excluded pages
- [ ] 5xx crawl timestamp and Cloudflare evidence supplied, if available
- [ ] Core Web Vitals report supplied
- [ ] PageSpeed Insights reports supplied
- [ ] Editorial decision made for thin author pages if they form a material exclusion pattern
- [ ] Approval given before adding production CI monitoring or changing indexation policy

