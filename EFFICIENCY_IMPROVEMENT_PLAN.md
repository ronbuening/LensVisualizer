# Efficiency Improvement Plan

Actionable cleanup and performance tasks for LensVisualizer, written so a junior engineer or a
small-model agent can execute each one without further research. Findings come from a 2026-07-06
audit; all file/line references and code excerpts below were verified against the working tree on
that date. Line numbers drift — re-locate by symbol name if a line doesn't match, and stop if the
code no longer matches the excerpt (the task may already be done).

## How To Use This Plan

- Pick ONE task per branch. Do not combine tasks. Do not fix unrelated things you notice — file
  them here instead.
- Every task ends with the same gate:
  `npm run typecheck && npm run format:check && npm run lint && npm run test`.
- For performance tasks (P-series), measure before/after with
  `npm run benchmark:optics-rendering` (see `agent_docs/benchmarks/README.md` for output policy).
  Do not claim a speedup without a benchmark run; commit the run JSON as that doc directs.
- Follow `agent_docs/code_conventions.md` and `agent_docs/commenting_guide.md`. Match surrounding
  style exactly; do not restyle code you pass through.
- When done: check the box here, and add a line to your branch record
  (`agent_docs/record_keeping.md`).

Status legend: `[ ]` open · `[x]` done · `[-]` rejected (keep the entry, note why).

---

## Part 1 — Redundancy Elimination (E-series)

### E1. Deduplicate the chromatic channel color helper

- [ ] Effort: ~15 min · Risk: low

Two byte-equivalent implementations exist. The local one:

```ts
// src/components/diagram/ChromaticFanSpreadWidget.tsx:24
function channelColor(channel: ChromaticChannel, t: Theme): string {
  if (channel === "R") return t.rayChromR;
  if (channel === "G") return t.rayChromG;
  if (channel === "B") return t.rayChromB;
  return t.rayChromV;
}
```

The shared one (already imported by `ChromaticFieldCurvaturePlot`, `LateralColorChart`,
`LongitudinalChromaticFocusChart`):

```ts
// src/components/display/analysis/chromaticChartUtils.ts:5
export function chromaticChannelColor(t: Theme, channel: ChromaticChannel): string { ... }
```

Steps:
1. In `ChromaticFanSpreadWidget.tsx`, delete the local `channelColor` and import
   `chromaticChannelColor` from `../display/analysis/chromaticChartUtils.js`.
2. Update the single call site (line ~121): `channelColor(ch, t)` becomes
   `chromaticChannelColor(t, ch)`. **The argument order is swapped** — this is the one way to get
   this task wrong.

Acceptance: `grep -rn "channelColor" src` shows only `chromaticChannelColor` (definition plus
imports/calls); gate passes.

### E2. Deduplicate date formatting — three private copies of an exported helper

- [ ] Effort: ~20 min · Risk: low

`src/utils/content/changelogHelpers.ts:19` already exports the exact function:

```ts
export function formatDisplayDate(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}
```

Verified byte-identical private copies named `formatDate` exist at:
- `src/components/homepage/RecentLenses.tsx:20-23`
- `src/components/content/ArticleCard.tsx:16-19`
- `src/components/content/SeriesCard.tsx:18-21`

Steps: in each of the three files, delete the local `formatDate`, add
`import { formatDisplayDate } from "<relative path>/utils/content/changelogHelpers.js";`, and
rename the call sites. No behavior change of any kind.

Acceptance: `grep -rn "function formatDate" src` returns nothing; gate passes.

### E3. Merge the two identical coma-span formatters

- [ ] Effort: ~30 min · Risk: low

`formatComaSpan` (`src/components/display/analysis/MeridionalComaPlot.tsx:29`) and
`formatSagittalComaSpan` (`src/components/display/analysis/SagittalComaPlot.tsx:28`) are identical:

```ts
export function formatComaSpan(spanUm: number): string {
  const abs = Math.abs(spanUm);
  if (abs >= 1000) return `${(spanUm / 1000).toFixed(2)} mm`;
  if (abs >= 100) return `${spanUm.toFixed(0)} µm`;
  if (abs >= 10) return `${spanUm.toFixed(1)} µm`;
  return `${spanUm.toFixed(2)} µm`;
}
```

The shared aberration formatter module **exists**:
`src/components/display/analysis/aberrations/format.ts` (currently exports `formatSaUm`,
`formatSignedSaUm`, `formatSignedUm`, `formatSignedMm`).

Steps:
1. Add the function above to `aberrations/format.ts` as
   `export function formatComaSpanUm(spanUm: number): string`.
2. Update imports in: `MeridionalComaPlot.tsx`, `SagittalComaPlot.tsx`,
   `aberrations/MeridionalComaSection.tsx`, `aberrations/SagittalComaSection.tsx` (two call
   sites), `aberrations/ComaPreviewSection.tsx`. Delete both old exports.

CAUTION: `aberrations/format.ts` and `chromaticChartUtils.ts` **both** export a `formatSignedUm`,
with different semantics (the aberrations one appends " µm"; the chromatic one doesn't and uses
different thresholds). They are NOT duplicates — do not merge or rename them in this task.

Acceptance: `grep -rn "formatSagittalComaSpan\|formatComaSpan" src __tests__` shows only
`formatComaSpanUm`; gate passes.

### E4. Consolidate the three mm→µm spread formatters

- [ ] Effort: ~45 min · Risk: low

Three implementations of "format a millimeter value as a µm string, with a `< 0.1 µm` floor".
They are behaviorally equivalent (all three special-case exactly `mm === 0`, since
`um === 0 ⇔ mm === 0`):

```ts
// src/components/diagram/ChromaticFanSpreadWidget.tsx:31-35
function formatSpreadUm(mm: number): string {
  const um = Math.abs(mm * 1000);
  if (um === 0) return "< 0.1 µm";
  return um >= 1 ? `${um.toFixed(0)} µm` : `${um.toFixed(1)} µm`;
}

// src/components/diagram/ChromaticOverlayContent.tsx:40-47
function formatUm(mm: number): string {
  if (Math.abs(mm * 1000) >= 1) return `${Math.abs(mm * 1000).toFixed(0)} µm`;
  return `${Math.abs(mm * 1000).toFixed(1)} µm`;
}
function formatSpreadUm(mm: number): string {
  return mm !== 0 ? formatUm(mm) : "< 0.1 µm";
}

// src/components/display/DiagramLegend.tsx:61-63 (inline consts, same logic)
```

Steps:
1. In `src/components/display/analysis/chromaticChartUtils.ts`, add:
   ```ts
   /** Format a millimeter spread as a µm string; exact zero renders as the floor label. */
   export function formatSpreadUmFromMm(mm: number): string {
     const um = Math.abs(mm * 1000);
     if (um === 0) return "< 0.1 µm";
     return um >= 1 ? `${um.toFixed(0)} µm` : `${um.toFixed(1)} µm`;
   }
   ```
2. Replace all three local implementations with imports. `ChromaticOverlayContent.tsx` also uses
   its inner `formatUm` directly — check each call site: if a call must NOT have the zero floor,
   keep using the new helper only where `formatSpreadUm` was used, and inline
   `formatSpreadUmFromMm` for the rest only if output is identical (for non-zero input it is).
3. Do NOT touch `formatUmMagnitude` in the same file — it takes µm (not mm) with different
   thresholds and no unit suffix. Different function, not a duplicate.
4. Add `__tests__/src/components/display/analysis/chromaticChartUtils.test.ts` (create if absent)
   covering `formatSpreadUmFromMm` at mm = 0, 0.00005, 0.0005, 0.005, -0.005.

Acceptance: one definition of the µm-spread formatting logic in `src/`; new unit test passes; gate
passes.

### E5. Extract the repeated label/value display block in aberration sections

- [ ] Effort: 1–2 h · Risk: low

The pattern "10px letter-spaced label + 13px 600-weight tabular-nums value in a flex row" is
hand-copied ~20 times across `src/components/display/analysis/aberrations/`
(`MeridionalComaSection.tsx:56` is a representative instance; also `SagittalComaSection.tsx`,
`ComaPreviewSection.tsx`, `FieldCurvatureSection.tsx`, `SphericalAberrationSection.tsx`).

Note: `AnalysisMetricRow` in `src/components/display/analysis/analysisUi.tsx` is similar but NOT
identical (it uses `alignItems: "baseline"`, `t.muted` label color, uppercase transform, and
optional suffix/note). The aberration sections use `alignItems: "center"` and `theme.label`. Do
not force the sections onto `AnalysisMetricRow`; add a sibling component instead:

```tsx
// add to src/components/display/analysis/analysisUi.tsx
interface AberrationValueDisplayProps {
  label: string;
  value: ReactNode;
  t: Theme;
}

/** Inline label/value pair used by aberration drawer sections. */
export function AberrationValueDisplay({ label, value, t }: AberrationValueDisplayProps) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <span style={{ fontSize: 10, color: t.label, letterSpacing: "0.1em", transition: "color 0.3s" }}>
        {label}
      </span>
      <span
        style={{
          fontSize: 13,
          fontWeight: 600,
          color: t.value,
          fontVariantNumeric: "tabular-nums",
          transition: "color 0.3s",
        }}
      >
        {value}
      </span>
    </div>
  );
}
```

Steps:
1. Before adding it, diff the copied block in EACH target file against this component. Convert only
   byte-matching instances; leave variants (extra styles, different sizes) alone and list them here.
2. Convert one file per commit. After each file: visual check in `npm run dev` (Aberrations tab,
   dark theme is enough) and run that file's tests.

Acceptance: converted files render identically; each replaced block is gone; gate passes.

### E6. Confirmed non-issues — do NOT "fix" these (audited 2026-07-06)

- The six local formatters in `OpticalSummaryTab.tsx` (~line 107) are intentionally local.
- `formatSignedUm` existing in both `aberrations/format.ts` and `chromaticChartUtils.ts` is
  intentional — different semantics (see E3 caution).
- `chromaticChannelLegendLabel` in `chromaticChartUtils.ts` is used
  (`LongitudinalChromaticFocusChart`, `LateralColorChart`) — not dead code.
- `src/optics/math/numerics.ts`: all exports are used.
- The dispersion index resolver is centralized in `src/optics/chromatic/indexResolver.ts`.
- `scripts/`: audited for copy-pasted helpers; none found (`deriveMakerSlug` lives once in
  `lens-data-lib.mjs`; `build-metadata-lib.mjs` consumes precomputed `makerSlug`).
- Generic wrappers for the coma section components and a universal "precision formatter" were
  considered and rejected as over-abstraction.

---

## Part 2 — Performance (P-series)

Context established by the audit:

- The analysis drawer already renders ONLY the active tab
  (`ANALYSIS_TAB_RENDERERS[activeTab]` in `AnalysisDrawerContent.tsx`) — do not touch that.
- In `src/components/diagram/`, exactly three components are memoized: `DiagramSVG`,
  `DiagramRayLayers`, `DiagramElementLayer`. The other ~20 are not.
- The coordinate transforms `sx` / `sy` / `clampedRayEnd` ARE memoized at their source
  (`useLensComputation.ts:157`, `useMemo` keyed on `[L, IMG_MM, scaleRatio, cardinalZExtent]`), so
  "function props are always unstable" is NOT true here — verify per prop before memoizing
  (see P2).
- Everything in this section is per-frame cost during slider drag, plus P5 (bundle size).

### P1. Make `RayPolylines` memoizable and stabilize the props it receives

- [ ] Effort: ~45 min · Risk: low · Expected impact: high

Facts (verified): `RayPolylines` (`src/components/diagram/RayPolylines.tsx`) is a plain function
component — NOT wrapped in `memo`. Its parent `DiagramRayLayers`
(`src/components/diagram/DiagramRayLayers.tsx`) IS memoized, but re-renders whenever any ray array
or toggle changes, and on every such render it:

```ts
// lines 36-41 — new arrays + new closure every render
const chromaticOnAxisRays = chromaticRays.filter((ray) => ray.axis === "onAxis");
const chromaticOffAxisRays = chromaticRays.filter((ray) => ray.axis === "offAxis");
const chromaticColor = (ray: ChromaticRaySegment | undefined) => {
  const ch = ray?.channel;
  return ch === "R" ? t.rayChromR : ch === "G" ? t.rayChromG : t.rayChromB;
};
```

and passes four inline closures down:

```tsx
// lines 48, 58, 69, 79
colorFn={(ri) => (ri < rays.length / 2 ? t.rayCool : t.rayWarm)}
colorFn={(ri) => (ri < offAxisRays.length / 2 ? t.rayOffCool : t.rayOffWarm)}
colorFn={(ri) => chromaticColor(chromaticOnAxisRays[ri])}
colorFn={(ri) => chromaticColor(chromaticOffAxisRays[ri])}
```

Steps:
1. In `RayPolylines.tsx`: wrap the component in `memo` (keep the same default export shape as
   `DiagramElementLayer.tsx`, which is the in-repo example of the pattern).
2. In `DiagramRayLayers.tsx`:
   - `useMemo` the two `.filter()` results, deps `[chromaticRays]`.
   - `useCallback` each of the four `colorFn`s. Deps, respectively:
     `[rays.length, t]`, `[offAxisRays.length, t]`, `[chromaticOnAxisRays, t]`,
     `[chromaticOffAxisRays, t]`. Fold `chromaticColor`'s logic into the last two callbacks (or
     `useCallback` it too, deps `[t]`).
3. Verify: temporarily add `console.count("RayPolylines render")` inside the component in
   `npm run dev`; toggling an unrelated overlay must not increase the count for unchanged ray
   sets. Remove the probe before committing.

Acceptance: benchmark run before/after committed; render-count check performed; gate passes.

### P2. Memoize pure diagram SVG components — with prop-stability verification

- [ ] Effort: ~2 h in batches · Risk: low-medium · Expected impact: medium-high

Unmemoized components in `src/components/diagram/` (census 2026-07-06): `ApertureStop`,
`CardinalElementsOverlay`, `ChromaticFanSpreadWidget`, `ChromaticOverlayContent`, `DiagramDefs`,
`DiagramGridAxisLayer`, `DiagramOverlayLayer`, `ElementAnnotations`, `EntrancePupilDiagram`,
`ExitPupilDiagram`, `LocaDiagram`, `LocaInsetWidget`, `MTFDiagram`, `PVDiagram`,
`PetzvalOverlayContent`, `PetzvalSumBadge`, `RayPolylines` (→ P1), `TelecentricityDiagram`,
`WorkingFNumberDiagram`.

`memo` only helps when props are referentially stable. Known facts: `sx`/`sy`/`clampedRayEnd`
come from a `useMemo` in `useLensComputation.ts:157` (stable per layout state); `t`/`theme` is
stable; `pointTransform` reaches `ApertureStop`/`ElementAnnotations` from
`DiagramOverlayLayer` — its stability is UNVERIFIED (it derives from a movement transform; check
where `movementTransform.point` is created and whether it's memoized).

Steps (repeat per batch of 3–5 components, one commit per batch):
1. For each component, find its call site(s) (`grep -rn "<ComponentName" src`).
2. For every non-primitive prop at the call site, trace where the value is created. Classify:
   memoized/stable (from `useMemo`/`useCallback`/state) vs freshly allocated per render (inline
   object/array/closure).
3. If all props are stable → wrap the component in `memo`.
   If a prop is freshly allocated → first hoist/memoize it at the call site, then wrap.
   If a prop cannot be made stable cheaply → skip the component and record it under P7 with the
   reason.
4. Verify one component per batch with the `console.count` probe technique from P1.

Suggested first batch (rendered every frame inside the SVG): `DiagramGridAxisLayer`,
`DiagramDefs`, `ApertureStop`, `ElementAnnotations`. Second batch: overlay widgets
(`LocaInsetWidget`, `PetzvalSumBadge`, `ChromaticFanSpreadWidget`). The standalone article
diagrams (`MTFDiagram`, `PVDiagram`, `TelecentricityDiagram`, `WorkingFNumberDiagram`,
`EntrancePupilDiagram`, `ExitPupilDiagram`, `LocaDiagram`) render outside the hot path — lowest
priority, only do them if their props are trivially stable.

Acceptance per batch: benchmark before/after; probe check; no test/visual changes; gate passes.

### P3. Precompute SVG polyline point strings once per compiled ray

- [ ] Effort: ~45 min · Risk: low · Expected impact: medium

`RayPolylines.tsx` rebuilds the `points` attribute for every ray on every render:

```tsx
// lines 44 and 53
points={sp.map((p) => `${p[0]},${p[1]}`).join(" ")}
points={gp.map((p) => `${p[0]},${p[1]}`).join(" ")}
```

Rays are compiled once per slider state inside `useMemo` in the ray hooks — that is the right
place to build the strings. The pieces:

- `RaySegment` interface is declared in `src/components/hooks/useOnAxisRays.ts` (fields
  `sp: number[][]`, `gp: number[][]`); `ChromaticRaySegment` extends it in
  `src/components/diagram/diagramSvgTypes.ts`.
- `compileRaySegment(...)` lives in `src/components/hooks/raySegmentUtils.ts` (lines ~25–58) and
  returns `{ sp, gp }`.
- Callers of `compileRaySegment`: `useOnAxisRays.ts`, `useOffAxisRays.ts`, `useChromaticRays.ts`
  (two call sites), and `src/benchmarks/opticsRenderingBenchmark.tsx` — the benchmark caller must
  keep compiling (do not fork the type).

Steps:
1. Extend `RaySegment` with `spPoints: string` and `gpPoints: string` (required, not optional —
   optional fields would silently fall back at call sites).
2. In `compileRaySegment`, after `sp`/`gp` are final, add:
   `const spPoints = sp.map((p) => `${p[0]},${p[1]}`).join(" ");` (same for `gp`), and return them.
3. In `RayPolylines.tsx`, use `ray.spPoints` / `ray.gpPoints`; delete the inline `.map().join()`.
4. Add a unit test in `__tests__/src/components/hooks/raySegmentUtils.test.ts` (create if absent):
   compile a segment from 3 known points and assert `spPoints` equals the hand-written string.

Acceptance: no `.map((p)` remains in `RayPolylines.tsx`; new test passes; benchmark before/after;
gate passes.

### P4. Replace O(shapes × elements) lookup with a Map in `DiagramElementLayer`

- [ ] Effort: ~15 min · Risk: low · Expected impact: low-medium

`src/components/diagram/DiagramElementLayer.tsx:39` (inside `shapes.map`):

```ts
const element = L.elements.find((candidate) => candidate.id === eid)!;
```

Steps:
1. Above the `return`, add
   `const elementById = useMemo(() => new Map(L.elements.map((e) => [e.id, e])), [L.elements]);`
   (add the `useMemo` import next to the existing `memo` import).
2. Replace the `.find()` line with `const element = elementById.get(eid)!;`.
3. Leave the inline `onMouseEnter`/`onClick` closures alone — they are per-`eid` and required.

Acceptance: gate passes; no visual change.

### P5. Shrink the initial bundle — component-level lazy loading (NOT route-level)

- [x] Superseded by Part 3 (B-series, done 2026-07-07) — route-level splitting DID prove viable.

The "hard constraint" below was circumventable: the manifest now holds dynamic-import loaders,
and `entry-server.tsx` awaits every page module once at module scope (top-level await) before the
still-synchronous `renderToString` runs. Prerendered output is unchanged. The original constraint
text is kept for history; see Part 3 for what actually shipped.

Original note: `src/entry-server.tsx` prerenders with synchronous `renderToString`
over the shared route manifest. `React.lazy` around route pages in
`src/routes/routeManifest.tsx` would break prerendered output. Do NOT convert the manifest.

Steps:
1. Measure first: `npm run build` and record the emitted chunk sizes from Vite's output in your
   branch record. Identify which chunk contains `react-markdown` / `rehype-katex` (KaTeX is the
   usual heavyweight).
2. If the markdown/KaTeX chain is bundled into the shared entry chunk, choose ONE of:
   a. **manualChunks** (safe for SSR, do this first): in `vite.config.*`, add
      `build.rollupOptions.output.manualChunks` splitting `katex`, `react-markdown`, and remark/
      rehype packages into a `markdown` vendor chunk. Prerendered HTML is unaffected; browsers
      only download the chunk on pages that import it.
   b. **React.lazy inside `ThemedMarkdown`** (only if (a) is insufficient): lazy-wrap the inner
      renderer with a plain-text fallback — then verify `dist/articles/<slug>/index.html` still
      contains the rendered article body. If the body is missing, revert to (a); losing
      prerendered content is not an acceptable trade.
3. Acceptance: `npm run build` shows the markdown/KaTeX code in its own chunk; entry chunk size
   reduced (record numbers); article pages in `dist/` still contain full content;
   `npm run seo:audit` passes; gate passes.

### P6. Investigate (don't blindly remove) the manual `zPos` stability check

- [ ] Effort: ~30 min investigation · Risk: n/a until decided · Expected impact: low

`useLensComputation.ts:114-123` keeps a ref plus an O(n) `every()` comparison so `zPos` keeps its
previous identity when values are numerically unchanged. Relevant facts: `cur` comes from
`doLayout(focusT, zoomT, L, aberrationT)` memoized on those deps, so `cur` (and therefore the
naive `zPos`) gets a NEW identity on every slider move; the ref check restores identity when the
`dz` image-plane compensation makes the shifted positions numerically identical. That identity
stability feeds every downstream `useMemo` keyed on `zPos` — it is probably intentional.

Steps: add a temporary counter for how often the check returns `prev` during (a) focus drag,
(b) zoom drag, (c) overlay toggles, on 2–3 lenses. If it never returns `prev` during real
interaction, simplify to a plain `useMemo` and note the evidence here. If it does fire (likely on
toggles/re-renders), mark this task `[-] rejected — check is load-bearing` and move it to P7.

### P7. Confirmed non-issues (audited 2026-07-06 — do not "fix")

- Analysis tabs already render lazily; slider deferral already shipped.
- `buildLens()` memoization in `useLensComputation.ts` is correct (keyed on `lensKey`).
- `prepareState()` already caches by `lens.key:focusT:zoomT:aberrationT` with frozen arrays
  (`src/optics/state/prepareState.ts`).
- `sx`/`sy`/`clampedRayEnd` are already memoized (`useLensComputation.ts:157`).
- Ray-count allocations in the ray hooks are bounded by ray density and already inside `useMemo`.
- The three ray hooks are intentionally separate; do not unify.
- `scripts/` has no copy-pasted helper duplication worth extracting.

---

## Part 3 — Bundle & Load (B-series)

### B1. Code-split the monolithic bundle (done 2026-07-07)

- [x] Effort: done · Risk: was high (SSR parity) · Impact: first-load download cut ~50–98% per page

Before: the client build emitted ONE JS chunk (14,576,907 B raw / 4,335,901 B gzip) downloaded by
every visitor to every page. ~97% of it was lens prescriptions (421 eager `*.data.ts`, ~4.4 MB
source) and analysis prose (413 eager `*.analysis.md?raw`, ~9.8 MB source).

What shipped (four coordinated changes):

1. **Per-lens analysis markdown** — the `*.analysis.md` glob in
   `src/utils/catalog/lensCatalog.ts` is non-eager; `hasMdForKey` (sync existence check for
   SSR/LensPage) + `loadMdForKey` (async, cached) + `useLensAnalysisMarkdown` hook feed
   `DescriptionPanel`, which shows "Loading analysis…" while the chunk fetches. Prerendered lens
   pages never contained the markdown body (the viewer is `ClientOnly`), so SSR output is
   unchanged.
2. **Route-level splitting** — `src/routes/routeManifest.tsx` maps paths to dynamic-import
   loaders. The client router (`src/router.tsx`) uses React Router's `lazy` route option (no
   Suspense fallback flash; navigation waits for the chunk), and `src/main.tsx` delays the first
   React commit until the router is initialized so prerendered HTML is never blanked.
   `src/entry-server.tsx` awaits all page modules via top-level await, keeping `render()`
   synchronous for `prerender.mjs` and the SSR tests. All chunk fetches go through
   `src/utils/chunkLoadRetry.ts`, which force-reloads once when stale cached HTML references
   deleted hashed assets.
3. **Lens summaries for index-style pages** — `scripts/generate-build-metadata.mjs` evaluates
   every `*.data.ts` (Node 24 type stripping; the files only have type-only imports) and emits
   `src/generated/lens-summaries.json` (171 KB raw / ~30 KB gzip). `src/utils/catalog/
   lensSummaries.ts` exposes it; the lens index, maker/mount/format pages, updates page, and
   homepage cards consume summaries, so only viewer pages (`/lens/:slug`, `/compare/*`) load the
   full-prescription chunk. A parity test (`__tests__/src/utils/catalog/lensSummaries.test.ts`)
   fails if the script's field list drifts from the runtime catalog.
4. **Vendor chunking + KaTeX CSS** — `vite.config.js` uses rolldown `codeSplitting.groups` for
   `vendor-react`, `vendor-router`, `vendor-katex`, `vendor-markdown` (client build only; the SSR
   build keeps default chunking). KaTeX CSS moved from `main.tsx` into `ThemedMarkdown.tsx`;
   `prerender.mjs` injects a direct `<link>` to the hashed KaTeX stylesheet only into pages whose
   rendered HTML contains KaTeX markup, so math stays styled without JS.

After (gzip, measured 2026-07-07): every page ships ~87 KB (entry 11 KB + react 45 KB + router
31 KB + runtime); index-style pages add ~30 KB of summaries; article pages add ~142 KB article
content + ~131 KB markdown/KaTeX vendors; lens/compare pages add ~730 KB (viewer + all
prescriptions) plus a ~10–55 KB raw per-lens analysis chunk on demand. Worst page ≈ 0.9 MB gzip
vs 4.34 MB before; most pages are 90–97% smaller.

Verified: `npm run build` (524 routes prerendered), `npm run seo:audit` (0 errors), typecheck,
lint, format:check, full test suite (2248 tests), plus production-preview click-through (lens
page viewer + async analysis, lens index, math article with styled KaTeX, no console errors or
failed requests).

### B2. Follow-ups (open)

- [ ] **Per-lens prescription loading** — viewer pages still download all 421 prescriptions
  (~730 KB gzip chunk shared with the viewer code). The real fix is loading `*.data.ts` per lens
  behind an async gate in `useLensComputation`/comparison, with `entry-server.tsx` preloading all
  of them for SSR. High risk (touches the viewer core, URL sync, comparison); do it as its own
  branch with the parity test as a safety net.
- [ ] **Article content chunk** — `src/utils/content/homepageContent.ts` eagerly inlines all
  article markdown (454 KB raw / 142 KB gzip) and rides into the homepage and every article page;
  LensViewer also imports it for `stripFrontmatter` + primer overlays. Same treatment as lens
  analysis markdown: non-eager glob + per-article loader, keeping SSR preloaded.
- [ ] **MountPage chunk** — 300 KB raw; mount diagram engine + specs. Check whether
  `MOUNT_SPECS` can be summary-ized the same way if it grows.

---

## Measurement Appendix

Every task: `npm run typecheck && npm run format:check && npm run lint && npm run test`.

P-series additionally:

```bash
npm run benchmark:optics-rendering                  # before AND after; commit run JSON
npm run benchmark:optics-rendering -- --report-only # refresh the report without a new run
```

Render-count probes: `console.count("<Component> render")` inside the component body during
`npm run dev`; interact; read the console. Always remove probes before committing. React DevTools
Profiler ("Highlight updates" / flamegraph) is the no-code alternative.
