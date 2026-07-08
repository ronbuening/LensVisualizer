# Bundle Code Splitting — 2026-07-07

## Purpose

Break up the monolithic client bundle (one 14.5 MB raw / 4.34 MB gzip JS chunk downloaded on
every page). Root causes: eager globs for all 421 `*.data.ts` and 413 `*.analysis.md?raw` in
`lensCatalog.ts`, a fully static route manifest, and no vendor chunking.

## What Changed

- `*.analysis.md` glob is non-eager: `hasMdForKey` / `loadMdForKey` / `cachedMdForKey` replace
  `mdForKey`; new `useLensAnalysisMarkdown` hook; `DescriptionPanel` gained a loading state.
- `routeManifest.tsx` holds `{ path, load }` loaders. Client router uses React Router `lazy`
  routes; `main.tsx` waits for router initialization before the first commit (prerendered HTML is
  never blanked, no fallback flash). `entry-server.tsx` awaits all page modules at module scope
  (top-level await) so `render()` stays synchronous — `prerender.mjs` and SSR tests unchanged.
- New `src/utils/chunkLoadRetry.ts`: reload-once guard for stale hashed chunks after deploys
  (used by route lazy loaders and markdown loaders).
- New generated `src/generated/lens-summaries.json` (from `generate-build-metadata.mjs`, which
  imports each `*.data.ts` directly via Node 24 type stripping — they only have type-only
  imports) + `src/utils/catalog/lensSummaries.ts`. Lens index, maker/mount/format/updates pages
  and homepage cards consume summaries; only `/lens/:slug` + `/compare/*` load full prescriptions.
  `RECENT_LENS_KEYS` / `ALL_LENSES_BY_DATE` moved from `lensCatalog.ts` to `lensSummaries.ts`.
  Parity test: `__tests__/src/utils/catalog/lensSummaries.test.ts`.
- `vite.config.js`: rolldown `codeSplitting.groups` for react/router/katex/markdown vendors
  (client build only, skipped when `isSsrBuild`). KaTeX CSS import moved from `main.tsx` to
  `ThemedMarkdown.tsx`; `prerender.mjs` injects the hashed KaTeX `<link>` only into prerendered
  pages containing KaTeX markup.
- GoatCounter SPA tracking in `main.tsx` now counts on actual location change instead of
  skip-first-emission (lazy-route initialization adds an extra emission).

## Results (gzip)

Every page: ~87 KB shared. Lens/compare pages: +~730 KB viewer+prescriptions chunk, analysis
markdown per lens on demand. Index-style pages: +~30 KB summaries. Articles: +~142 KB content
+ markdown/KaTeX vendors. Previously: 4.34 MB on every page.

## Verification

`npm run typecheck`, `npm run lint`, `npm run format:check`, `npm run test` (2248 passed),
`npm run build` (524 routes prerendered), `npm run seo:audit` (0 errors), and a production
`npm run preview` click-through: lens page viewer + async analysis panel, lens index (413
entries), math article with styled KaTeX, no console errors or failed network requests.

## Follow-ups

See `EFFICIENCY_IMPROVEMENT_PLAN.md` Part 3 (B2): per-lens prescription loading for viewer
pages, article-content lazy loading, MountPage chunk review.
