# Efficiency Improvement Plan

Open redundancy-cleanup and performance tasks for LensVisualizer, written so a junior engineer or a
small-model agent can execute each one without further research. The plan started from a 2026-07-06
audit; the open items below were re-verified against the working tree on 2026-09-09. Line numbers
drift — re-locate by symbol name if a line doesn't match, and stop if the code no longer matches
the description (the task may already be done).

Completed items: E1–E5 (formatter/date/label-row deduplication), P1–P5 (diagram memoization,
polyline precompute, element Map lookup, bundle chunking), B1 (route-level code splitting, lazy
per-lens analysis markdown, lens summaries, vendor chunks) — see git history. The "confirmed
non-issue / do not fix" guardrails that used to live in E6 and P7 are in `agent_docs/decisions.md`.

## How To Use This Plan

- Pick ONE task per branch. Do not combine tasks. Do not fix unrelated things you notice — file
  them here instead.
- Every task ends with the same gate:
  `npm run typecheck && npm run format:check && npm run lint && npm run test`.
- For performance tasks (P-series), measure before/after with
  `npm run benchmark:optics-rendering` (see `agent_docs/benchmarks/README.md` for output policy).
  Do not claim a speedup without a benchmark run; commit the run JSON as that doc directs.
- For bundle tasks (B-series), record the emitted chunk sizes from `npm run build` before and after,
  and confirm prerendered output is unchanged with `npm run seo:audit`.
- Follow `agent_docs/code_conventions.md` and `agent_docs/commenting_guide.md`. Match surrounding
  style exactly; do not restyle code you pass through.
- When done: check the box here and describe the result in the PR (`agent_docs/workflow.md`).
- New items added to this plan should follow the shared per-item template defined in
  `FEATURE_ADDITION_PLAN.md` ("Per-Item Template").
- Before "fixing" something that looks redundant or slow, check `agent_docs/decisions.md` — several
  apparent duplicates and missing memoizations were audited and are intentional.

Status legend: `[ ]` open · `[x]` done · `[-]` rejected (keep the entry, note why).

---

## Open Items

### P6. Investigate (don't blindly remove) the manual `zPos` stability check

- [ ] Effort: ~30 min investigation · Risk: n/a until decided · Expected impact: low

`src/components/hooks/useLensComputation.ts` (~lines 123–131) keeps a `zPosRef` plus an O(n)
`every()` comparison so `zPos` keeps its previous identity when the values are numerically
unchanged (tolerance 1e-9). Relevant facts: `cur` comes from `doLayout(focusT, zoomT, L, aberrationT)`
memoized on those deps, and `cameraLayout = anchorLayoutToCamera(ref, cur)` is memoized on
`[ref, cur]`, so the naive `cameraLayout.z` gets a NEW identity on every slider move; the ref check
restores identity when the image-plane compensation makes the shifted positions numerically
identical. That identity stability feeds every downstream `useMemo` keyed on `zPos` (movement axis,
cardinal elements, element shapes, ray hooks) — it is probably intentional.

Steps:
1. Add a temporary `console.count("zPos reused")` inside the `return prev` branch.
2. In `npm run dev`, on 2–3 lenses (one prime, one zoom, one folded), record how often it fires
   during (a) focus drag, (b) zoom drag, (c) overlay toggles and unrelated re-renders.
3. If it never fires during real interaction, replace the ref/`every()` block with a plain
   `useMemo(() => cameraLayout?.z ?? [], [cameraLayout])` and note the evidence here.
   If it does fire (likely on toggles/re-renders), mark this task `[-] rejected — check is
   load-bearing` and add a dated bullet to `agent_docs/decisions.md`.
4. Remove the probe before committing.

Verification: probe counts recorded in the PR for all three interactions; if simplified,
`npm run benchmark:optics-rendering` before/after shows no regression; gate passes.
Out of scope: changing `doLayout` or `anchorLayoutToCamera`. Rollback: revert the branch.

### B2. Bundle & load follow-ups

Baseline after B1 (gzip, measured 2026-07-07): every page ships ~87 KB (entry + react + router +
runtime); index-style pages add ~30 KB of lens summaries; article pages add ~142 KB article content
plus ~131 KB markdown/KaTeX vendors; lens/compare pages add ~730 KB (viewer + all prescriptions)
plus a 10–55 KB raw per-lens analysis chunk on demand. Re-measure with `npm run build` before
starting any sub-item; the numbers below are only as current as that date.

#### B2a. Per-lens prescription loading

- [ ] Effort: 1–2 days · Risk: high (viewer core, URL sync, comparison) · Impact: high on viewer pages

Current state (verified 2026-09-09): `src/utils/catalog/lensCatalog.ts` eager-globs every
`*.data.ts` into `LENS_CATALOG`, so viewer pages download all prescriptions in one ~730 KB gzip
chunk shared with the viewer code. `src/components/hooks/useLensComputation.ts` calls
`buildLens(LENS_CATALOG[lensKey])` synchronously and `src/comparison/useComparisonMode.ts` also
reads `LENS_CATALOG` directly.

- **Files to touch** — `src/utils/catalog/lensCatalog.ts` (modified: non-eager `*.data.ts` glob +
  async cached loader), `src/components/hooks/useLensComputation.ts` (modified: async gate before
  `buildLens`), `src/comparison/useComparisonMode.ts` (modified: same gate for both slots),
  `src/entry-server.tsx` (modified: preload every prescription at module scope so SSR stays
  synchronous), matching tests under `__tests__/`.
- **Reference to mimic** — the non-eager `*.analysis.md` glob with `hasMdForKey` / `loadMdForKey`
  in `src/utils/catalog/lensCatalog.ts` and the `src/components/hooks/useLensAnalysisMarkdown.ts`
  hook; the top-level-await page preload already in `src/entry-server.tsx`. Chunk fetches go through
  `src/utils/chunkLoadRetry.ts`.
- **Steps** — (1) add the non-eager loader beside the eager map without removing the eager map;
  (2) gate `useLensComputation` on the loaded prescription with a loading state that never blanks
  prerendered HTML; (3) do the same in comparison mode, including URL-driven slot changes;
  (4) preload all prescriptions in `entry-server.tsx`; (5) remove the eager map and fix every
  remaining `LENS_CATALOG` reader (index-style pages must keep using `src/utils/catalog/lensSummaries.ts`).
- **Verification** — `npm run build` shows no chunk containing all `*.data.ts` on `/lens/:slug`
  or `/compare/*`; production preview of a lens page fetches exactly one per-lens prescription
  chunk; the parity test `__tests__/src/utils/catalog/lensSummaries.test.ts` still passes;
  `npm run seo:audit` reports 0 errors; gate passes; record before/after chunk sizes in the PR.
- **Out of scope** — changing the `LensData` shape or the summaries pipeline. **Rollback** — revert
  the branch; no generated files change.

#### B2b. Article content chunk

- [ ] Effort: ~half a day · Risk: medium (SSR parity for articles) · Impact: medium on homepage/article pages

Current state (verified 2026-09-09): `src/utils/content/homepageContent.ts` eager-globs
`src/content/**/*.md` as raw strings (454 KB raw / 142 KB gzip on 2026-07-07), and that module is
imported by `src/pages/HomePage.tsx`, `src/pages/ArticlesPage.tsx`, `src/pages/ArticlePage.tsx`,
`src/components/homepage/TrustStrip.tsx`, and — for `stripFrontmatter` only —
`src/components/layout/LensViewer.tsx`, so the full article corpus rides into the viewer chunk too.

- **Files to touch** — `src/utils/content/homepageContent.ts` (modified: non-eager glob +
  per-article async loader; keep `ARTICLES` / `ARTICLE_SERIES` metadata-driven and synchronous),
  a small new module for `stripFrontmatter` so `LensViewer.tsx` stops importing the content
  module, `src/pages/ArticlePage.tsx` (modified: consume the loader), `src/entry-server.tsx`
  (modified: preload all article bodies for SSR).
- **Reference to mimic** — the `*.analysis.md` loader pattern in `src/utils/catalog/lensCatalog.ts`
  and `src/components/hooks/useLensAnalysisMarkdown.ts`.
- **Steps** — (1) move `stripFrontmatter` out and re-point `LensViewer.tsx`; (2) switch the glob to
  non-eager with a cached loader keyed by article file; (3) make `ArticlePage` load its body on
  demand with SSR preloaded; (4) confirm `TrustStrip`/`HomePage`/`ArticlesPage` only need metadata.
- **Verification** — `npm run build` shows article markdown absent from the entry, homepage, and
  viewer chunks; every `dist/articles/<slug>/index.html` still contains the rendered body (spot-check
  one math article for styled KaTeX); `npm run seo:audit` reports 0 errors; gate passes.
- **Out of scope** — article metadata generation in `scripts/generate-build-metadata.mjs`.
  **Rollback** — revert the branch.

#### B2c. MountPage chunk

- [ ] Effort: ~30 min investigation · Risk: low · Impact: low unless the mount catalog grows

Current state (verified 2026-09-09): `src/pages/MountPage.tsx` imports `MOUNT_SPECS` from
`src/mounts/index.ts`, pulling every mount spec plus the `src/optics/mount/` engine into the
page chunk (300 KB raw on 2026-07-07).

- **Steps** — (1) re-measure the MountPage chunk in `npm run build`; (2) if it has grown
  materially, load specs per mount id via a non-eager import keyed by the ids in `src/mounts/index.ts`
  with SSR preload in `src/entry-server.tsx`, mirroring B2a; otherwise record the measurement here
  and close the item as `[-] not worth it at current size`.
- **Verification** — chunk size before/after recorded in the PR; `npm run generate:mount-svgs`
  output unchanged; `npm run seo:audit` reports 0 errors; gate passes.
- **Out of scope** — the mount renderer or spec format. **Rollback** — revert the branch.

---

## Measurement Appendix

Every task: `npm run typecheck && npm run format:check && npm run lint && npm run test`.

P-series additionally:

```bash
npm run benchmark:optics-rendering                  # before AND after; commit run JSON
npm run benchmark:optics-rendering -- --report-only # refresh the report without a new run
```

B-series additionally: `npm run build` (record the emitted chunk sizes from Vite's output) and
`npm run seo:audit` (prerendered content and metadata unchanged).

Render-count probes: `console.count("<Component> render")` inside the component body during
`npm run dev`; interact; read the console. Always remove probes before committing. React DevTools
Profiler ("Highlight updates" / flamegraph) is the no-code alternative.
