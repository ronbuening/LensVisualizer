# Feature Addition Plan

**This is the single source of truth for planned LensVisualizer features.** It absorbed the open
items from `ANALYSIS_OPTIONS.md` and `MIRROR_LENS_FUTURE_ENHANCEMENTS.md` on 2026-07-06. Items
marked (AO#n) came from the analysis-options roadmap; M1–M5 came from the mirror-lens backlog.
Efficiency and performance work lives in `EFFICIENCY_IMPROVEMENT_PLAN.md`.

Every feature here is implementable from data and engine capability already in the repo unless it
sits in the final "Blocked on new data" section. Three items (F4, F5, F13) carry full specs; every
other open item is one row in the Open Items Register. Signatures and file references were
re-verified against the working tree on 2026-09-09; re-locate by symbol name if a line has drifted,
and stop if reality contradicts the description (the feature may have shipped — check the Shipped
list and git log first).

## How To Use This Plan

- One feature per branch. Read the referenced recipe doc in `agent_docs/` BEFORE starting:
  - New analysis tab or tab section → `agent_docs/adding_an_analysis_tab.md`
  - New shareable URL state → `agent_docs/adding_url_state.md`
  - New page/route → `agent_docs/adding_a_route.md`
  - New slider/toggle → `agent_docs/adding_ui_controls.md`
  - Tests → `agent_docs/testing_recipes.md` · New colors → `agent_docs/theme_tokens.md`
- All optics computation goes in pure helpers under `src/optics/` taking the runtime lens `L` or a
  `PreparedOpticalState` explicitly (CLAUDE.md Core Working Rules). UI components only format and
  render. Slider-dependent values come from prepared state, never from `buildLens()`.
- Folded/mirror lenses: any new analysis must be guarded the way existing tabs guard folded
  systems until fixture-backed validation exists. Copy the guard pattern from an existing gated
  tab; render an explanatory placeholder, never wrong numbers.
- Gate before PR: `npm run typecheck && npm run format:check && npm run lint && npm run test`,
  plus `npm run build` if routes/metadata/SEO are touched. User-visible features get a changelog
  entry per `agent_docs/changelog.md`.
- When a feature ships: check its box here and describe the outcome in the PR
  (`agent_docs/documentation-policy.md`); do not add a per-branch record.
- Register rows are deliberately terse. Before starting one, expand it into the Per-Item Template
  below (in the PR description or in this file) so the verification criteria are concrete.

Effort scale (inherited from the analysis roadmap): **S** 0.5–1 day · **M** 2–4 days ·
**L** 1–2 weeks · **XL** multi-week.

## Per-Item Template

Items in this plan (and in `TRACE_MODEL_IMPROVEMENT_PLAN.md`) should carry the sections below so a
weaker model or junior engineer can execute them without further research.
`EFFICIENCY_IMPROVEMENT_PLAN.md` already mostly follows this shape. New items MUST include every
section; existing items are upgraded opportunistically — F4 and F5 below are fully templated
examples.

- **Files to touch** — every file, each marked **new** or **modified**.
- **Reference to mimic** — an existing file + symbol doing the closest thing; read it before
  writing code.
- **Data-type contract** — the shape of every non-obvious input/output, linking the defining type
  and file. Include one filled example value where the shape alone is ambiguous.
- **Steps** — numbered, each roughly one commit-sized action.
- **Gotchas** — the specific `agent_docs/gotchas.md` line items (by line number AND a short quote,
  since line numbers drift) that bite this task.
- **Verification** — exact commands plus concrete acceptance numbers or grep-able conditions.
  Never "plausibly", "should look right", or other judgment-only criteria.
- **Out of scope** — what the item deliberately does not do, so nobody gold-plates.
- **Rollback** — how to back the change out (usually "revert the branch"; note anything extra,
  e.g. regenerating reports or metadata).

---

## Already Shipped — Do NOT Rebuild

Verified in code on 2026-07-06 (pins re-checked 2026-09-09):

- **Shareable analysis drawer state in URLs** — `ad`/`tab` params in
  `src/utils/state/lensViewUrlState.ts`. (Was AO#4.)
- **Analysis summary tab** — `src/optics/analysis/summary.ts` +
  `src/components/display/analysis/OpticalSummaryTab.tsx`. (AO#1.)
- **Field-selectable coma detail fans** — `src/components/display/analysis/ComaTab.tsx` has a
  detail-field selection (`COMA_DETAIL_FIELD_OPTIONS`, default/25/50/75/100%, lines ~20–22 and
  ~79–80) feeding `sampling.comaDetailFieldFraction` through
  `src/components/display/analysis/aberrations/useComaData.ts`. (Was AO#10 and this plan's former
  F8.)
- **Bokeh preview as a drawer tab** — `computeBokehPreviewPairForState2`
  (`src/optics/analysis/bokeh.ts`) + `src/components/display/analysis/BokehTab.tsx`. (AO#18 core;
  its follow-up controls are F24 below.)
- **Cardinal/principal-point overlays** — `src/components/diagram/CardinalElementsOverlay.tsx` +
  `computeCardinalElements2` (`src/optics/first-order/cardinals.ts`: principal planes, focal
  points, nodal points). (Was AO#6.)
- **Group movement / mechanics overlay** — `computeGroupMovementProfileForState2`
  (`src/optics/analysis/groupMovement.ts`) + the `mv` URL param. (Covers much of AO#7; remaining
  mechanics ideas folded into F3.)
- **Folded trace diagnostics readout** — public `RayTraceResult.diagnostics`
  (`FoldedPathTraceDiagnostics`, `src/types/optics.ts`) plus a compact development readout (ML
  backlog item 1).
- **Rotationally symmetric diffractive phase surfaces** — surface-local radial optical-path polynomials now drive
  wavelength-aware paraxial, Petzval, sequential, skew, and generalized exact tracing, with PF/DO authoring support,
  semantic diagram disclosure, and the Nikon AF-S NIKKOR 500mm f/5.6 E PF ED VR production lens. See
  the "Diffractive Phase Surfaces" section of
  [`agent_docs/architecture/optics-engine.md`](agent_docs/architecture/optics-engine.md). (F26.)
- **F8** (field-selectable coma fans) is the shipped row above; **F25** (patent relationship map,
  `/relationships`) shipped 2026-07-22 — outcome record
  `agent_docs/records/relationship-map-2026-07-22.md`; its original spec lives in git history as
  `relationship-map-plan.md`. Both IDs stay reserved.

---

## Fully Specified Items

### F4. Compare-mode optical scorecard (AO#2 — top roadmap priority)

- [ ] Effort: M · Tier 2

What: a metrics table in comparison mode — metric | lens A | lens B | delta — computed at the
shared slider state. First version: cheap rows only (EFL, effective f-number, total track, BFD,
half-field angle, focus-breathing %, telephoto ratio after F3). Heavier rows (edge distortion,
edge relative illumination, SA, coma span, EP/XP shift) go behind a collapsed "More metrics"
section computed lazily on expand.

Files to touch:

- **New:** `useComparisonScorecard.ts` and `ComparisonMetricsTable.tsx` in `src/comparison/`, plus
  a hook test and a component smoke test under `__tests__/src/comparison/` (match neighbor naming:
  `useComparisonDisplayValues.test.ts`, `ComparisonContent.test.tsx`).
- **Modified:** `src/comparison/ComparisonContent.tsx` (mount the table below the dual diagrams).

Reference to mimic: `useComparisonDisplayValues` (default export,
`src/comparison/useComparisonDisplayValues.ts`) already derives per-side display values from the
comparison build result — copy its guard-then-`useMemo`-per-side structure.
`computeOpticalSummaryForState2` (`src/optics/analysis/summary.ts`) provides the cheap metrics per
prepared state.

Data-type contract: per-side inputs flow through `useComparisonOrchestration`
(`src/comparison/useComparisonOrchestration.ts`) — the single wiring hook `LensViewer` already
uses for comparison mode. It wraps `useComparisonMode`, which builds the per-side runtime lenses
(`comparisonLenses.LA` / `.LB` via `buildLens`, guarded by `isComparisonOk(comparisonLenses)`)
and maps the shared sliders to per-side slider values (`focusPair.focusA/.focusB`,
`aperturePair.stopdownA/.stopdownB`, `zoomPair.zoomA/.zoomB`). Both sides are driven by the single
`SharedSlidersSlice` (`state.sharedSliders`: `sharedFocusT`, `sharedStopdownT`, `sharedZoomT`,
`sharedShiftMm`, `sharedTiltDeg` — declared in `src/comparison/comparisonTypes.ts`); there is no
per-side slider state, so the scorecard recomputes exactly when the shared slice or a lens key
changes. Per-side prepared states are built from `(LA, focusA, zoomA)` / `(LB, focusB, zoomB)` the
same way `useComparisonDisplayValues` derives its per-side EFL/f-number values. One filled example
row of the hook's return shape:

```ts
{ id: "totalTrack", label: "TOTAL TRACK", a: 92.4, b: 118.7, delta: 26.3, format: "mm" }
// a/b/delta in the metric's native unit; delta = b − a (signed, B relative to A) —
// document the sign convention in the hook header comment.
```

Steps:

1. New hook `useComparisonScorecard.ts`: takes both sides' prepared states + pupil inputs (mirror
   how `useComparisonDisplayValues` gets them), returns `Array<{ id, label, a, b, delta, format }>`.
   All optics math stays in `src/optics/analysis/` helpers; the hook orchestrates and memoizes per
   prepared-state pair.
2. New `ComparisonMetricsTable.tsx`: theme-token table; delta column signed, muted color when
   |delta| is below a per-metric significance threshold (define thresholds as named constants in
   the hook, e.g. 0.1 mm for lengths, 0.01 for f-number).
3. Wire into `ComparisonContent.tsx` below the dual diagrams, collapsible, default open.
4. "More metrics": a `useState` expand flag; the expensive rows' `useMemo` runs only once expanded
   (guard folded systems the same way the source tabs do — show "—" with a tooltip).
5. Tests: hook test with two known catalog lenses asserting cheap-row values and delta signs;
   component smoke test; folded lens renders dashes not numbers.

Gotchas: `agent_docs/gotchas.md:51-53` — "`analysisDrawerOpen` is NOT persisted to localStorage …
The drawer also closes on `SET_LENS_A` and `ENTER_COMPARE` so stale analysis never shows for a new
lens". The scorecard therefore must NOT live in or read the analysis drawer; it renders inside
`ComparisonContent.tsx` with its own expand state. Also the folded-guard rule in CLAUDE.md Core
Working Rules ("Keep folded-system complex analysis guarded until the specific path is
mirror-safe") — heavy rows show "—" for any side with `L.isFoldedOptics`
(`src/optics/types.ts`, `RuntimeLens`).

Verification: gate (`npm run typecheck && npm run format:check && npm run lint && npm run test`);
hook test pins the cheap-row values for the two chosen catalog lenses to the same precision the
summary tab displays (2 decimals) and asserts every delta equals `b − a`; dragging a shared slider
in `npm run dev` updates cheap rows live while collapsed heavy rows compute nothing (verify with a
temporary `console.count` inside the heavy `useMemo` — zero counts until expand; remove before
commit). Changelog entry added.

Out of scope: per-frame recompute of heavy rows; URL state for the expand flag; a scorecard on the
single-lens page.

Rollback: revert the branch — no schema, generated-file, or URL-state changes are involved.

### F5. Prescription & power ledger analysis tab (AO#8)

- [ ] Effort: M-L · Tier 2

What: per-surface table — radius, medium transition, index, Abbe, surface power `(n2−n1)/R`,
Petzval contribution — plus per-element focal length, grouped by the lens's annotated
groups/doublets; live with focus/zoom.

Files to touch:

- **New:** `prescriptionLedger.ts` in `src/optics/analysis/`, the tab component
  `PrescriptionLedgerTab.tsx` beside the other tabs in `src/components/display/analysis/`, helper
  unit test + tab smoke test under `__tests__/`.
- **Modified:** the four analysis-tab registration points listed in
  `agent_docs/adding_an_analysis_tab.md`.

Reference to mimic: any `*ForState2` analysis adapter (e.g. `computeOpticalSummaryForState2` in
`src/optics/analysis/summary.ts`) for the helper shape;
`src/components/display/analysis/OpticalSummaryTab.tsx` for a row-oriented tab component.

Data-type contract: the helper takes a `PreparedOpticalState` (type declared in
`src/optics/types.ts`, built by `prepareState` in `src/optics/state/prepareState.ts`).
`state.surfaces` is `readonly CompiledStateSurface[]` (`CompiledStateSurface extends
Omit<CompiledSurface, "d">`); each surface carries `physicalIndex`, `label`, `R` (mm, signed), `d`
(gap to the next surface, already resolved for the current focus/zoom/aberration state), `z`
(vertex position, mm), `nd` (index of the medium FOLLOWING the surface), `sd`, `innerSd`,
`elemId`, `stopPlacement`, `asphere` (null when spherical), `diffractive`, `interaction`,
`profile`, and `base` (the pre-state `CompiledSurface`). Index pairing for surface power at
surface `i`: `n1 = i === 0 ? 1.0 : state.surfaces[i - 1].nd`, `n2 = state.surfaces[i].nd`. The
stop surface index is `state.lens.stop.surfaceIndex` (`StopSpec`). Element rows come from
`state.lens.elements` (`readonly CompiledElement[]`: `id`, `name`, `label`, `type`, `nd`, `vd`,
`glass`, `surfaceSpan`, `source`); group/doublet annotations are on `state.lens.annotations`.

Steps:

1. New pure helper `prescriptionLedger.ts`:
   `computePrescriptionLedgerForState2(state): PrescriptionLedgerResult` with
   `surfaces: Array<{ index, label, radiusMm, n1, n2, vd, powerDiopters, petzvalContribution, isAspheric, isStop }>`
   and `elements: Array<{ id, name, focalLengthMm, glass, apd, groupLabel }>`.
   - Surface power: `(n2 − n1) / R` with R in meters for diopters, or keep mm⁻¹ and label it —
     pick one, document in the helper header, use consistently.
   - Petzval contribution per surface: `(n2 − n1) / (R · n1 · n2)`.
   - Flat surfaces: power 0. The engine's flat-radius convention is
     `Math.abs(R) > FLAT_R_THRESHOLD` (re-exported from `src/optics/constants.ts`) — reuse that
     constant rather than testing a magic number.
   - Current thicknesses/indices come from the prepared state (zoom/focus dependent).
2. New tab (`agent_docs/adding_an_analysis_tab.md` — all four registration points), id
   `"prescription"`, label `PRESCRIPTION`.
3. Component `PrescriptionLedgerTab.tsx`: table with theme tokens; group header rows from the
   lens's group/doublet annotations; APD/asphere badges reusing the badge styles from
   `src/components/display/ElementInspector.tsx` (the APD badge near line 147: `fontSize: 8`,
   `padding: "2px 6px"`, `borderRadius: 3`, `t.apdPatentBg`/`t.apdInferBg` background,
   `letterSpacing: "0.08em"`, `fontWeight: 600`).
4. Stretch (separate commit, optional): row hover dispatches the same element-hover action the
   diagram uses (see `src/components/hooks/useDispatchAdapters.ts`).
5. Tests: helper unit test on a simple triplet from the catalog with hand-checked surface powers
   (compute two surfaces by hand in the test comment); tab smoke test; folded-lens guard check
   (mirror surfaces: decide and document — simplest is to show the table with mirror rows marked,
   since per-surface power is still meaningful; if that's contentious, gate folded and note it).

Gotchas: `agent_docs/gotchas.md:11-13` — "Runtime trace adapters cache prepared state by
`RuntimeLens` + `focusT` + `zoomT` + `aberrationT`"; the ledger must read everything from the
passed `state`, never rebuild its own. The folded-guard rule in CLAUDE.md Core Working Rules —
whatever mirror-row decision step 5 takes, an `L.isFoldedOptics` lens must not silently show
refractive math for mirror surfaces.

Verification: gate (`npm run typecheck && npm run format:check && npm run lint && npm run test`);
the two hand-computed surface powers in the helper test match the helper output to within 0.1%;
per-element focal lengths for the chosen triplet are finite and each element's sign matches its
converging/diverging role in the lens's `*.analysis.md` notes; moving the focus slider in
`npm run dev` changes the state-dependent rows without a tab remount. Changelog entry added.

Out of scope: editing/exporting the prescription; tolerance or sensitivity columns; any
`buildLens()` change.

Rollback: revert the branch; the tab registration points are the only shared files touched.

### F13. 2D vignetting pupil-footprint tiles (AO#17)

- [ ] Effort: L · Tier 4

What: for field positions 0/25/50/75/100%, show which part of the entrance pupil actually
survives to the image — small footprint tiles revealing cat's-eye clipping — with a surviving-ray
percentage under each tile. The existing 1D curve stays the headline.

Verified foundation: the current vignetting analysis
(`computeVignettingCurveForState2(state, currentEPSD, currentPhysStopSD, fieldGeometry?, sampling?)`
in `src/optics/analysis/vignetting.ts` → `VignettingSample { fieldAngleDeg, geometricTransmission,
relativeIllumination }` in `src/optics/vignetteAnalysis.ts`) sweeps ONLY meridional pupil rays.
The bokeh module (`src/optics/aberration/bokeh.ts`) already traces full 2D pupil bundles via
`sampleCircularPupil()` (defined in `src/optics/rayTrace.ts`, re-exported from
`src/optics/optics.ts`) and `traceOffAxisBundleFromSamples()` (defined in
`src/optics/aberration/offAxis.ts`) — 337 samples in concentric rings
(`BOKEH_CIRCULAR_PUPIL_RING_SAMPLES`, overridable via `sampling.bokehRingSamples`), each sample
retaining pupil radius/azimuth.

Clipped-vs-survived signal (verified in `offAxis.ts`): `traceOffAxisBundleFromSamples()` does NOT
return per-sample clipped flags — clipped samples are dropped inside its `flatMap`
(`if (trace.clipped) return [];`), and the returned `OffAxisBundle` carries only survivors in
`samples: OffAxisTracedSample[]` plus the aggregate counts `sampleCount` / `validSampleCount` /
`clippedSampleCount`. Reconstruct per-sample survival by matching each input sample's `index`
against the survivors' `sourceSampleIndex` (any input index absent from `bundle.samples` was
clipped); survivors keep their `radiusFraction` / `azimuthRad` for plotting.

Steps:

1. Read `src/optics/aberration/bokeh.ts` around its use of those two helpers first — the footprint
   helper is essentially "bokeh bundle trace, but record survival instead of image-plane
   position".
2. New pure helper `pupilFootprints.ts` in `src/optics/analysis/`:
   `computePupilFootprintsForState2(state, currentEPSD, currentPhysStopSD, fieldGeometry?, sampling?)`
   → `{ fields: Array<{ fieldFraction, fieldAngleDeg, samples: Array<{ px, py, survived }>, transmission }> }`
   where `px, py` are normalized pupil coordinates in [-1, 1] and `transmission` =
   survived/total.
   - Per field fraction: solve the chief ray (skip the field with `valid: false` if the solve
     fails), build the circular pupil sample set, trace each sample, record clipped vs survived.
   - Reuse the exact sampling infrastructure from the bokeh module — do NOT write a new pupil
     sampler.
3. UI: new "PUPIL FOOTPRINTS" section in `src/components/display/analysis/VignettingTab.tsx`: a
   row of five ~90px SVG tiles; each tile draws the unit pupil circle (theme grid color), survived
   samples as small dots (theme value color), clipped samples faint (theme muted); transmission %
   beneath via `AnalysisMetricRow` (`src/components/display/analysis/analysisUi.tsx`). Compute
   inside `useMemo`; the section lives in the tab so it only computes when the tab is open.
4. Consistency check built into tests: the on-axis tile's `transmission` must match
   `geometricTransmission` at field 0 from the 1D curve within a few percent (different sampling,
   same physics). Codify as a unit test comparing both helpers on the same lens/state.
5. Folded/annular systems: gate the section exactly like the vignetting tab's existing folded
   guard; annular pupils (mirror lenses) are excluded until M1 lands — check `L.isFoldedOptics`
   plus `stopInnerBlockedSemiDiameter()` (`src/optics/stopObstruction.ts`).
6. Performance: 5 fields × 337 samples ≈ 1,700 traces per recompute — comparable to what the bokeh
   tab already does. If drag stutters with the tab open, pass a lighter ring count through
   `sampling.bokehRingSamples` and note the chosen number here.
7. Tests: on-axis transmission = 1.0 for an unobstructed lens wide open; edge transmission ≤
   on-axis; cross-check vs 1D curve (step 4); smoke test.

Acceptance: tiles visually show progressive cat's-eye clipping on a fast double-Gauss at 100%
field; numbers reconcile with the 1D curve; sliders stay responsive; gate passes; changelog entry.

---

## Open Items Register

One row per remaining open item. Tier: T1 quick wins · T2 core · T3 depth · T4 formerly deferred,
now specified · T5 absorbed from the analysis roadmap · Mirror = the Mirror/Folded backlog
(engineering-heavy; each needs optics-fixture work, not just UI). Ordering constraints: F3 before
F4's telephoto row; F7 before F22; F12 and F14 share point-set inputs; M1 before F13-on-annular
and M2.

| Id  | Tier / effort  | Source              | What (one sentence)                                                                                                                                                                                                                                                                                                                         | Start here                                                                                                     |
| --- | -------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| F1  | T1 · S         | plan                | Decade chips (1930s … 2020s) that set `patentYearMin`/`patentYearMax` on the existing lens-index year filter, decade list derived from the panel's `bounds`, chip active when the range equals its decade; no new URL state.                                                                                                                | `src/pages/lensIndex/LensIndexFilterPanel.tsx`, `src/pages/lensIndex/useLensIndexFilters.ts`                   |
| F2  | T1 · S         | plan                | Mount/format badges in comparison panel headers linking to `/mounts/:mountId` and `/formats/:formatId`, labels resolved only through the taxonomy ids, rendering nothing when metadata is absent.                                                                                                                                          | `src/comparison/ComparisonContent.tsx`, `src/utils/catalog/lensTaxonomy.ts`                                    |
| F3  | T1 · S         | AO#5, AO#7 rest     | "GEOMETRY" group in the Summary tab: add `telephotoRatio` (EFL ÷ total track, `null` when track is missing) to `computeOpticalSummaryForState2` and group it with the existing BFD/track rows.                                                                                                                                              | `src/optics/analysis/summary.ts`, `src/components/display/analysis/OpticalSummaryTab.tsx`                      |
| F6  | T2 · M         | AO#16               | Sensor tab (`"sensor"`): chief-ray incidence angle vs field from `solveChiefRay` (skip `bracket-failed`, mark `paraxial-fallback`), exit-pupil distance, and a near-telecentric (< 5°) / moderate (< 15°) / oblique verdict; gate folded systems like the pupils tab.                                                                       | `src/optics/field/chiefRay.ts`, `src/components/display/analysis/PupilAberrationTab.tsx`                       |
| F7  | T2 · S-M       | AO#23 + AO#22 part  | Per-element role table (glass, nd, vd, APD, asphere, annotated role) plus counts (aspheric, nd > 1.78, vd ≥ 70, APD) as a collapsed Summary-tab section; row click dispatches the existing element-select action.                                                                                                                          | `src/optics/glassCatalog.ts`, `src/components/display/analysis/OpticalSummaryTab.tsx`                          |
| F9  | T3 · S-M       | AO#21               | Asphere utilization: per aspheric surface `{ surfIdx, elementId, peakDepartureUm, rimDepartureUm, sign }` ranked by peak departure from `computeAsphericDeparture2`, shown as ranked bars with the existing departure-profile overlay.                                                                                                      | `src/optics/analysis/asphericComparison.ts`, `src/components/display/overlays/`                                |
| F10 | T3 · M-L       | AO#3                | Build-time lens-card badges ("Telephoto" ratio < 1, "Retrofocus" BFD > EFL, "Short BFD", "Aspheric") at infinity / wide open / wide end; the `audit:*` scripts already load TS lens modules from Node via `scripts/ts-js-specifier-hook-register.mjs`, so reuse that loader in the metadata pipeline.                                       | `scripts/generate-build-metadata.mjs`, `scripts/audit-image-circle.mjs`                                        |
| F11 | T3 · M         | AO#25               | `npm run audit:lens -- <lens-key>` authoring checklist (validation warnings; missing `lensMounts` / `imageFormat` / `patentYear` / analysis file / `apertureBlades` / group annotations; render-trim diagnostics at focusT = 0, zoomT = 0), exit code 0 always; model it on the existing `audit:*` scripts.                                 | `scripts/audit-image-circle.mjs`, `src/optics/diagram/renderDiagnostics.ts`                                    |
| F12 | T4 · M         | AO#11               | Coma field sweep: loop `comaDetailFieldFraction` over [0, .25, .5, .75, 1] through `computeMeridionalComa` / `computeSagittalComa` (both return `spanUm`, `validSampleCount`), emit tangential/sagittal span + ratio per field, chart at the bottom of the Coma tab; on-axis span < 1 µm and edge > mid.                                    | `src/optics/aberration/coma.ts`, `src/components/display/analysis/ComaTab.tsx`                                 |
| F14 | T4 · M         | AO#12 (bounded)     | Pure `computeSpotMetrics(points)` → centroid, RMS radius, EE50/EE80 (sorted-distance index `ceil(f · n) − 1`, `null` for n < 10), µm output, shown under the coma point-cloud preview labeled "geometric, not diffraction"; no new heatmap subsystem.                                                                                      | `src/optics/aberration/coma.ts`, `src/components/display/analysis/aberrations/ComaPreviewSection.tsx`          |
| F15 | T4 · M-L       | AO#19               | Blade-shaped bokeh: mask pupil samples by `limit = cos(π/N) / cos(((θ − φ) mod 2π/N) − π/N)` blended toward 1 by `apertureBladeRoundedness` (`src/types/optics.ts:365-367`; set in 336 / 55 lens files), applied only when `stopdownT > 0`, wide-open output byte-identical; update `LENS_DATA_SPEC.md:145-146` ("reserved for future"). | `src/types/optics.ts`, `src/optics/aberration/bokeh.ts`                                                        |
| F16 | T4 · M         | plan                | `/glass` page: catalog-wide nd-vs-vd scatter from a `computeGlassUsage()` aggregate over `LENS_CATALOG` via `resolveGlass`, dot radius `2 + sqrt(lensCount)` capped at 8, reusing the per-lens Abbe diagram's reversed-vd axis mapping; new route per `agent_docs/adding_a_route.md`.                                                      | `src/optics/glassCatalog.ts`, `src/components/display/AbbeDiagram.tsx`                                         |
| F17 | T4 · S         | plan                | Dev-only chief-ray solver health readout behind a new `ENABLE_CHIEF_RAY_DIAGNOSTICS` flag: converged / paraxial-fallback / bracket-failed / out-of-domain counts from `getChiefRayDiagnostics()`, warning when non-converged > 5%, reset button; no changelog entry.                                                                        | `src/optics/field/chiefRayCache.ts`, `src/utils/featureFlags.ts`                                               |
| F18 | T5 · M-L       | AO#13               | LoCA-vs-focusT curve (~9 steps) built by re-running the longitudinal chromatic helper on states from `prepareState` with a shared caller-owned cache; collapsed Chromatic-tab section; centered sequential lenses only.                                                                                                                     | `src/optics/analysis/chromatic.ts`, `src/optics/state/prepareState.ts`                                         |
| F19 | T5 · S-M       | AO#16b              | Subtle 50% / 100%-field EP/XP tick marks on the pupil overlay from `computeBothPupilAberrationProfilesForState2`, following the existing pupil-marker and off-screen-indicator code.                                                                                                                                                       | `src/components/diagram/DiagramOverlayLayer.tsx`, `src/optics/analysis/pupilAberration.ts`                     |
| F20 | T5 · M         | AO#20               | Sensor-format framing overlay (FF / APS-C / MFT / 1-inch / custom; half-diagonals 21.63 / 14.16 / 10.82 / 7.87 mm unless the taxonomy carries dimensions) on the distortion grid and image plane, defaulting from `imageFormat`, with a corner-coverage verdict; UI state, no URL param.                                                    | `src/components/display/analysis/DistortionTab.tsx`, `src/utils/catalog/lensTaxonomy.ts`                       |
| F21 | T5 · M         | AO#15               | Lateral-color field-point markers in the SVG driven by `computeLateralColorCurve()` only (never marginal ray-fan endpoint spread), leaving the LoCA inset LoCA-only; design sketch in the PR before code.                                                                                                                                   | `src/optics/analysis/chromatic.ts`, `src/components/display/analysis/LateralColorChart.tsx`                    |
| F22 | T5 · M         | AO#22 rest          | PgF-based anomalous-dispersion score inside F7's section, scoring only elements whose resolved `GlassEntry.PgF` exists and reporting coverage (n scored / n elements), labeled heuristic.                                                                                                                                                   | `src/optics/glassCatalogTypes.ts`, `src/optics/glassCatalog.ts`                                                |
| F23 | T5 · S-M       | AO#24               | Article deep links to lens pages with `?ad=1&tab=<id>&v=1` as plain markdown links (no React-in-markdown), pilot on 2–3 articles, optional metadata-driven "Related diagnostics" block; document the pattern in the article recipe.                                                                                                        | `agent_docs/adding_an_article.md`, `src/utils/state/lensViewUrlState.ts`                                       |
| F24 | T5 · M         | AO#18 follow-ups    | Bokeh preview controls (source-plane toggle, field position, scale lock) as local component state via the shared-controls recipe, using knobs `computeBokehPreviewPairForState2` already accepts.                                                                                                                                          | `src/components/display/analysis/useBokehPreviewData.ts`, `src/optics/analysis/bokeh.ts`                       |
| M1  | Mirror · L     | ML (highest value)  | Annular-aware chief-ray solve: on centrally obstructed stops (e.g. Reflex-Nikkor 1000mm f/11) solve a displaced-pupil (annulus-centroid) reference ray via `stopInnerBlockedSemiDiameter()` through the generalized tracer, with assertions on the hidden reflex fixtures and `npm run generate:mirror-reports` regenerated.               | `src/optics/stopObstruction.ts`, `src/optics/field/chiefRay.ts`                                                |
| M2  | Mirror · M-L   | AO#14 + ML          | Folded/annular chromatic fixtures with known image-plane behavior, then lift the chromatic drawer guards one analysis at a time, each behind its own fixture-backed test; never lift a guard without a fixture asserting the physical result.                                                                                             | `src/optics/analysis/chromatic.ts`, `src/lens-data/reference/`                                                 |
| M3  | Mirror · M     | ML                  | Optional per-surface mirror-coating / second-surface loss factor consumed by vignetting and bokeh intensity accumulation; `SurfaceData` schema + spec + validation change, default lossless; only when illumination or bokeh brightness needs it.                                                                                          | `src/lens-data/LENS_DATA_SPEC.md`, `src/types/optics.ts`                                                       |
| M4  | Mirror · S-M   | ML                  | Display-only spider-vane metadata (count / angle) drawn on the annular stop display; schema addition and overlay change, explicitly no tracing change.                                                                                                                                                                                     | `src/components/diagram/DiagramOverlayLayer.tsx`, `src/lens-data/LENS_DATA_SPEC.md`                            |
| M5  | Mirror · M     | ML                  | Author one hidden folded zoom/focus fixture with a variable gap, then extend the `mode: "auto"` path-stability tests to sweep focusT/zoomT (only ray-height/aperture perturbations are covered today).                                                                                                                                     | `__tests__/src/optics/mirrorOptics.test.ts`, `src/lens-data/reference/`                                        |

Deferred indefinitely (carried from the mirror backlog): 3D folded assemblies — the 2D meridional
model is intentionally the scope until exhausted.

---

## Blocked On New Data — Do Not Attempt Without Schema/Data Work

Carried from the analysis roadmap so nobody re-proposes them as "quick":

- **True diffraction MTF / Strehl / wavefront error** — tracing is geometric; patent data lacks
  what diffraction needs. Allowed limited version: F14's clearly-labeled geometric proxies.
- **Flare/ghosting/transmission/coating models** — no coating or transmission data. Allowed
  limited version: count air-glass interfaces as an explicitly heuristic badge.
- **AF speed / OIS / actuator loads** — no mass/actuator data. Allowed limited version: group
  travel distances from existing annotations (partly covered by the shipped group-movement
  overlay).
- **Manufacturing tolerance / decenter sensitivity** — no tolerance model. Allowed limited
  version: a qualitative risk heuristic (large asphere departure + fast aperture + thin gaps),
  clearly labeled.

---

When one of the features above ships, update THIS file: check the box (or delete the register
row), add a one-line status to the Shipped list, and describe the outcome in the PR.
