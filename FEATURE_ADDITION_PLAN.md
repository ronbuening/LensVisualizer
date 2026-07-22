# Feature Addition Plan

**This is the single source of truth for planned LensVisualizer features.** It absorbed the open
items from `ANALYSIS_OPTIONS.md` and `MIRROR_LENS_FUTURE_ENHANCEMENTS.md` on 2026-07-06; the
originals are archived verbatim under `agent_docs/records/` for history. Items marked (AO#n) came
from the analysis-options roadmap; (ML) items came from the mirror-lens backlog. Efficiency and
performance work lives in `EFFICIENCY_IMPROVEMENT_PLAN.md`.

Every feature here is implementable from data and engine capability already in the repo unless it
sits in the final "Blocked on new data" section. Signatures and file references were verified
against the working tree on 2026-07-06; re-locate by symbol name if a line has drifted, and stop
if reality contradicts the description (the feature may have shipped — check the Shipped list and
git log first).

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
- When a feature ships: check its box here and note it in your branch record
  (`agent_docs/record_keeping.md`).

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

Verified in code on 2026-07-06:

- **Shareable analysis drawer state in URLs** — `ad`/`tab` params in
  `src/utils/state/lensViewUrlState.ts`. (Was AO#4.)
- **Analysis summary tab** — `src/optics/analysis/summary.ts` + `OpticalSummaryTab.tsx`. (AO#1.)
- **Field-selectable coma detail fans** — `ComaTab.tsx` already has a detail-field selection
  (default/25/50/75/100%) feeding `sampling.comaDetailFieldFraction` (see `ComaTab.tsx:57`).
  (Was AO#10 and this plan's former F8.)
- **Bokeh preview as a drawer tab** — `computeBokehPreviewPairForState2` + `BokehTab.tsx`. (AO#18
  core; its follow-up controls are F25 below.)
- **Cardinal/principal-point overlays** — `CardinalElementsOverlay.tsx` +
  `computeCardinalElements2` (principal planes, focal points, nodal points). (Was AO#6.)
- **Group movement / mechanics overlay** — `computeGroupMovementProfileForState2` + the `mv` URL
  param. (Covers much of AO#7; remaining mechanics ideas folded into F3.)
- **Folded trace diagnostics readout** — public `RayTraceResult.diagnostics` plus a compact
  development readout (ML backlog item 1).

---

## Tier 1 — Quick Wins (S)

### F1. Decade/era presets on the lens index year filter

- [ ] Effort: S · Data: `patentYear` (~400 lenses)

What: one-click decade chips (1930s … 2020s) that drive the existing patent-year range filter.

Verified foundation: the numeric year filter already exists. Filter state is
`CustomFilterState extends FilterBounds` with `patentYearMin` / `patentYearMax`
(`src/pages/lensIndex/types.ts`); the panel is `LensIndexFilterPanel.tsx` (numeric controls are
declared as `NumericControlDefinition[]` arrays around lines 209–246); state logic is
`useLensIndexFilters.ts`; matching is `matchesCustomFilter` in `catalog.ts`; filter URL
serialization is `urlState.ts` in the same folder.

Steps:
1. Compute the available decades from the catalog (min/max `patentYear` across visible lenses —
   derive from the same `bounds` object the panel already receives; do not hardcode the decade
   list).
2. Add a chip row component inside `LensIndexFilterPanel.tsx` above the year sliders. Clicking a
   chip sets `patentYearMin = decadeStart`, `patentYearMax = decadeStart + 9` through the same
   handler the sliders use. A chip renders "active" when the current range equals its decade.
3. No new URL state needed — the year range already round-trips through `urlState.ts`.
4. Tests: extend the existing lens-index filter tests (find them:
   `grep -rn "useLensIndexFilters\|matchesCustomFilter" __tests__`) with: chip click narrows the
   range; active-chip detection; decade list derived from bounds.

Acceptance: chips filter correctly, active state tracks manual slider edits, gate passes,
changelog entry added.

### F2. Mount/format badges in comparison headers

- [ ] Effort: S · Data: `lensMounts[]`, `imageFormat` (~394 lenses)

What: small badges in each comparison panel header showing mount(s) and image format, linking to
`/mounts/:mountId` and `/formats/:formatId`.

Steps:
1. Find where comparison panel headers render lens names (`src/comparison/`, start at
   `ComparisonContent.tsx` and follow to the layout child that renders per-panel titles).
2. New `MountFormatBadges` component. Resolve display labels ONLY through
   `src/utils/catalog/lensTaxonomy.ts` (canonical ids — never free-type labels; see
   `src/lens-data/LENS_MOUNT_FORMAT_OPTIONS.md`). Render `<Link>`s styled like existing small
   chips; render nothing when fields are absent (backfill is incomplete — see
   `agent_docs/lens-mount-format-backfill.md`).
3. If the badge component is generic enough, place it in `src/components/display/` so the lens
   page can adopt it later; otherwise keep it in `src/comparison/`.
4. Tests: smoke render with mounts present, absent, and multiple mounts.

Acceptance: badges show on compare pages for lenses with metadata, link correctly, absent
metadata renders nothing, gate passes, changelog entry.

### F3. Telephoto/track geometry rows in the Summary tab

- [ ] Effort: S · Data: already computed

What: a "geometry" group in the Summary tab: telephoto ratio (EFL ÷ total track), BFD, total
track, and how BFD/track change across the focus range — the mechanical-architecture readout
(absorbs the metric ideas from AO#5 and the non-shipped remainder of AO#7).

Verified foundation: `computeOpticalSummaryForState2(state, currentEPSD, currentPhysStopSD)` in
`src/optics/analysis/summary.ts` already reports EFL, total track, BFD, and cardinal distances;
`OpticalSummaryTab.tsx` renders rows via `AnalysisMetricRow` (`analysisUi.tsx`).

Steps:
1. In `summary.ts`, add `telephotoRatio: number | null` to the result: EFL ÷ total track, `null`
   when track is missing/zero. Pure arithmetic on fields already computed there.
2. In `OpticalSummaryTab.tsx`, add a "GEOMETRY" group of `AnalysisMetricRow`s: telephoto ratio
   (2 decimals, note "EFL / total track"), plus existing BFD/track values grouped together.
3. Tests: extend the summary helper test with a lens whose EFL and track are known; assert ratio
   and the null case.

Acceptance: rows render and live-update with focus/zoom sliders; gate passes; changelog entry.

---

## Tier 2 — Core Features (M)

### F4. Compare-mode optical scorecard (AO#2 — top roadmap priority)

- [ ] Effort: M

What: a metrics table in comparison mode — metric | lens A | lens B | delta — computed at the
shared slider state. First version: cheap rows only (EFL, effective f-number, total track, BFD,
half-field angle, focus-breathing %, telephoto ratio after F3). Heavier rows (edge distortion,
edge relative illumination, SA, coma span, EP/XP shift) go behind a collapsed "More metrics"
section computed lazily on expand.

Files to touch:
- **New:** `src/comparison/useComparisonScorecard.ts`, `src/comparison/ComparisonMetricsTable.tsx`,
  a hook test + component smoke test under `__tests__/src/comparison/` (match neighbor naming).
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
1. New hook `src/comparison/useComparisonScorecard.ts`: takes both sides' prepared states +
   pupil inputs (mirror how `useComparisonDisplayValues` gets them), returns
   `Array<{ id, label, a, b, delta, format }>`. All optics math stays in `src/optics/analysis/`
   helpers; the hook orchestrates and memoizes per prepared-state pair.
2. New `src/comparison/ComparisonMetricsTable.tsx`: theme-token table; delta column signed, muted
   color when |delta| is below a per-metric significance threshold (define thresholds as named
   constants in the hook, e.g. 0.1 mm for lengths, 0.01 for f-number).
3. Wire into `ComparisonContent.tsx` below the dual diagrams, collapsible, default open.
4. "More metrics": a `useState` expand flag; the expensive rows' `useMemo` runs only once expanded
   (guard folded systems the same way the source tabs do — show "—" with a tooltip).
5. Tests: hook test with two known catalog lenses asserting cheap-row values and delta signs;
   component smoke test; folded lens renders dashes not numbers.

Gotchas: `agent_docs/gotchas.md:53` — "Analysis drawer closes automatically when switching lenses
(SET_LENS_A) or entering comparison mode (ENTER_COMPARE) to prevent stale data display". The
scorecard therefore must NOT live in or read the analysis drawer; it renders inside
`ComparisonContent.tsx` with its own expand state. Also `gotchas.md:57-60` (folded analysis is
guarded by path) — heavy rows show "—" for any side with `L.isFoldedOptics`.

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

- [ ] Effort: M-L

What: per-surface table — radius, medium transition, index, Abbe, surface power `(n2−n1)/R`,
Petzval contribution — plus per-element focal length, grouped by the lens's annotated
groups/doublets; live with focus/zoom.

Files to touch:
- **New:** `src/optics/analysis/prescriptionLedger.ts`, the tab component
  `PrescriptionLedgerTab.tsx` (place it beside the other tabs in
  `src/components/display/analysis/`), helper unit test + tab smoke test under `__tests__/`.
- **Modified:** the four analysis-tab registration points listed in
  `agent_docs/adding_an_analysis_tab.md`.

Reference to mimic: any `*ForState2` analysis adapter (e.g. `computeOpticalSummaryForState2` in
`src/optics/analysis/summary.ts`) for the helper shape; `OpticalSummaryTab.tsx` for a
row-oriented tab component.

Data-type contract: the helper takes a `PreparedOpticalState` (type declared in
`src/optics/types.ts`, built by `prepareState` in `src/optics/state/prepareState.ts`).
`state.surfaces` is `readonly CompiledStateSurface[]`; each surface carries `physicalIndex`,
`label`, `R` (mm, signed), `d` (gap to the next surface, already resolved for the current
focus/zoom/aberration state), `z` (vertex position, mm), `nd` (index of the medium FOLLOWING the
surface), `sd`, `innerSd`, `elemId`, `stopPlacement`, `asphere` (null when spherical),
`interaction`, `profile`, and `base` (the pre-state `CompiledSurface`). Index pairing for surface
power at surface `i`: `n1 = i === 0 ? 1.0 : state.surfaces[i - 1].nd`, `n2 =
state.surfaces[i].nd`. The stop surface index is `state.lens.stop.surfaceIndex` (`StopSpec`).
Element rows come from `state.lens.elements` (`readonly CompiledElement[]`: `id`, `name`, `label`,
`type`, `nd`, `vd`, `glass`, `surfaceSpan`); group/doublet annotations are on
`state.lens.annotations`.

Steps:
1. New pure helper `src/optics/analysis/prescriptionLedger.ts`:
   `computePrescriptionLedgerForState2(state): PrescriptionLedgerResult` with
   `surfaces: Array<{ index, label, radiusMm, n1, n2, vd, powerDiopters, petzvalContribution, isAspheric, isStop }>`
   and `elements: Array<{ id, name, focalLengthMm, glass, apd, groupLabel }>`.
   - Surface power: `(n2 − n1) / R` with R in meters for diopters, or keep mm⁻¹ and label it —
     pick one, document in the helper header, use consistently.
   - Petzval contribution per surface: `(n2 − n1) / (R · n1 · n2)`.
   - Flat surfaces: power 0. The engine's flat-radius convention is
     `Math.abs(R) > FLAT_R_THRESHOLD` (`FLAT_R_THRESHOLD = 1e10`, exported from
     `src/optics/constants.ts`) — reuse that constant rather than testing a magic number.
   - Current thicknesses/indices come from the prepared state (zoom/focus dependent).
2. New tab (`agent_docs/adding_an_analysis_tab.md` — all four registration points), id
   `"prescription"`, label `PRESCRIPTION`.
3. Component `PrescriptionLedgerTab.tsx`: table with theme tokens; group header rows from the
   lens's group/doublet annotations; APD/asphere badges reusing the badge styles from
   `src/components/display/ElementInspector.tsx` (the APD badge near line 138: `fontSize: 8`,
   `padding: "2px 6px"`, `borderRadius: 3`, `t.apdPatentBg`/`t.apdInferBg` background,
   `letterSpacing: "0.08em"`, `fontWeight: 600`).
4. Stretch (separate commit, optional): row hover dispatches the same element-hover action the
   diagram uses (see `useDispatchAdapters`).
5. Tests: helper unit test on a simple triplet from the catalog with hand-checked surface powers
   (compute two surfaces by hand in the test comment); tab smoke test; folded-lens guard check
   (mirror surfaces: decide and document — simplest is to show the table with mirror rows marked,
   since per-surface power is still meaningful; if that's contentious, gate folded and note it).

Gotchas: `agent_docs/gotchas.md:33-35` — trace adapters cache prepared state by
`(RuntimeLens, focusT, zoomT, aberrationT)`; the ledger must read everything from the passed
`state`, never rebuild its own. `gotchas.md:57-60` — folded analysis is guarded by path; whatever
mirror-row decision step 5 takes, an `L.isFoldedOptics` lens must not silently show refractive
math for mirror surfaces.

Verification: gate (`npm run typecheck && npm run format:check && npm run lint && npm run test`);
the two hand-computed surface powers in the helper test match the helper output to within 0.1%;
per-element focal lengths for the chosen triplet are finite and each element's sign matches its
converging/diverging role in the lens's `*.analysis.md` notes; moving the focus slider in
`npm run dev` changes the state-dependent rows without a tab remount. Changelog entry added.

Out of scope: editing/exporting the prescription; tolerance or sensitivity columns; any
`buildLens()` change.

Rollback: revert the branch; the tab registration points are the only shared files touched.

### F6. Pupil/sensor compatibility tab (AO#16)

- [ ] Effort: M

What: chief-ray incidence angle at the image plane vs field (telecentricity readout), exit-pupil
distance, and a plain-language "more telecentric / more oblique" label.

Verified foundation: `solveChiefRay` (typed statuses: `converged` / `paraxial-fallback` /
`bracket-failed` / `out-of-domain`); pupil profiles via
`computeBothPupilAberrationProfilesForState2`. **No chief-ray incidence-curve helper exists — you
create it.**

Steps:
1. New pure helper `src/optics/analysis/sensorCompatibility.ts`:
   `computeChiefRayIncidenceForState2(state, fieldGeometry?, sampling?)` →
   `{ samples: Array<{ fieldFraction, fieldAngleDeg, incidenceDeg, status }>, exitPupilDistanceMm, verdict }`.
   - Sweep field fractions 0→1 (reuse the field-sampling pattern from the distortion or
     vignetting module — read one first and copy its structure).
   - Per sample, solve the chief ray and take the image-side ray slope at the image plane;
     `incidenceDeg = atan(|slope|)` in degrees. Skip `bracket-failed` samples; keep the status in
     the sample so the chart can mark fallbacks.
   - `verdict`: thresholds as named constants, e.g. edge incidence < 5° → "near-telecentric",
     < 15° → "moderate", else "oblique".
2. Folded systems: gate identically to whichever existing tab is most restrictive about chief-ray
   solves (check the pupils tab guard) — annular/folded chief rays have known caveats (see
   Mirror backlog M1).
3. New tab (`adding_an_analysis_tab.md`), id `"sensor"`, label `SENSOR`. Chart modeled on the
   vignetting chart component; readout rows via `AnalysisMetricRow`.
4. Tests: helper test comparing a long telephoto (low edge incidence) vs a short-BFD wide angle
   (high edge incidence) — assert ordering and rough magnitude, not exact values; smoke test.

Acceptance: curve renders and updates with zoom/focus; fallback samples visually distinguished;
gate passes; changelog entry.

### F7. Element role explorer / glass strategy summary (AO#23 + scalar part of AO#22)

- [ ] Effort: S-M

What: per-element table (glass, nd, vd, APD badge, asphere marker, annotated role text) plus
derived counts (aspheric count, high-index count nd > 1.78, low-dispersion count vd ≥ 70,
APD count) — data already on `L.elements`, currently visible only one element at a time.

Steps:
1. Pure helper (state-independent — computable once per lens) in
   `src/optics/analysis/elementRoles.ts` deriving rows + counts from `L`. Resolve glass via
   `resolveGlass` (`src/optics/glassCatalog.ts`) for vd where the element lacks it; thresholds as
   named constants matching the ones `themes.ts` uses for element fills (nd > 1.78 / nd > 1.6).
2. Render as a new collapsed section inside the Summary tab (a dedicated tab is overkill; revisit
   if the section grows).
3. Row click dispatches the existing element-select action (`useDispatchAdapters`) so the diagram
   highlights the element.
4. Tests: helper test on a lens with known annotations (pick one with `groups` + APD elements);
   counts assertions; smoke test of the section.

Acceptance: table matches the element inspector's data for spot-checked elements; row click
selects in diagram; gate passes; changelog entry.

### F25. Patent relationship map explorer — SHIPPED (2026-07-22)

- [x] Effort: M-L · Data: `patentAuthors[]`, `patentAssignees[]`, `patentNumber`, `patentYear`

What: an interactive `/relationships` page that centers on an inventor or assignee and draws a
two-ring ego graph as inline SVG — their patents on the inner ring, each patent's other
inventors/assignees on the outer ring. Clicking an outer party recenters the map (query-param
URL state, Back retraces the exploration); clicking a patent opens a detail card linking to the
derived lens diagrams. Requires build-generated assignee slugs alongside the existing author
index. No new dependencies; deterministic radial layout, no force simulation.

Full self-contained spec (milestones, files, data contracts, layout math, tests, verification):
`agent_docs/relationship-map-plan.md`. Follow that document; this entry only tracks status.

---

## Tier 3 — Depth (M)

### F8. ~~Field-selectable coma fans~~ — SHIPPED

- [x] Already implemented: `ComaTab.tsx` detail-field selection feeding
  `sampling.comaDetailFieldFraction`. Kept here so the ID stays stable.

### F9. Asphere utilization map (AO#21)

- [ ] Effort: S-M

What: per-aspheric-surface stats — peak sag departure, rim departure, departure sign — ranked
across the lens, with the existing departure-profile chart per surface.

Verified foundation: `computeAsphericDeparture2(...)` in
`src/optics/analysis/asphericComparison.ts`; an aspheric-compare overlay already renders departure
profiles (`src/components/display/overlays/` — find it via `grep -rn "asphericComparison" src`).

Steps:
1. Small aggregation helper in `asphericComparison.ts` (or a sibling):
   `computeAsphereUtilization2(L)` → per aspheric surface
   `{ surfIdx, elementId, peakDepartureUm, rimDepartureUm, sign }`, sorted by
   `|peakDepartureUm|` descending. Reuse the existing departure computation — do not re-derive
   sag math.
2. UI: a section in the Aberrations tab (or Summary) rendered only when the lens has aspheres:
   ranked horizontal bars (SVG, theme tokens) + a "show profile" affordance reusing the existing
   overlay/chart for the selected surface.
3. Tests: aggregation test on a catalog lens with ≥2 aspheres (assert ordering); smoke test;
   no-asphere lens renders nothing.

Acceptance: ranking matches per-surface overlay values; gate passes; changelog entry.

### F10. Catalog metric badges, build-time (AO#3, first pass)

- [ ] Effort: M-L

What: computed badges on lens index cards — "Telephoto" (telephoto ratio < 1), "Retrofocus"
(BFD > EFL), "Short BFD", "Aspheric" — derived at metadata-generation time at a canonical state
(infinity focus, wide open, wide-end zoom) so index pages stay static-data-driven.

Steps:
1. Read `scripts/generate-build-metadata.mjs` + `scripts/build-metadata-lib.mjs` first: confirm
   whether the pipeline can import the TypeScript optics engine (check how existing scripts load
   lens data — if they parse rather than execute lens modules, badge derivation needs the
   simplest possible inputs, or must run through a ts-capable loader like the test runner). This
   investigation decides the design — do it before writing code, and record the answer here.
2. Derive badges at the canonical state; thresholds as named constants with a comment giving one
   example lens per badge. Emit into the per-lens metadata consumed by the index (find the
   consumer: `grep -rn "build-metadata" src/pages/lensIndex src/utils/catalog`).
3. Render badges on the lens card component; keep them non-filterable in this pass (filter chips
   are a follow-up once badge quality is proven).
4. Tests: script-level test (this repo tests scripts — see `agent_docs/architecture/testing.md`)
   asserting a known telephoto lens gets "Telephoto" and a known retrofocus wide gets
   "Retrofocus".

Acceptance: `npm run build` emits badges; cards render them; badge spot-checks match optical
reality for 3 known lenses; gate + build pass; changelog entry.

### F11. Lens authoring audit script (AO#25)

- [ ] Effort: M · Developer-facing

What: `npm run audit:lens -- <lens-key>` printing an authoring checklist — validation warnings,
missing `lensMounts` / `imageFormat` / `patentYear` / `*.analysis.md`, element render-trim
diagnostics, missing `apertureBlades`, missing group annotations — accelerating the backfill
queues in `agent_docs/lens-mount-format-backfill.md`.

Verified foundation: `computeElementRenderDiagnostics2(L, zPos)` and
`computeElementRenderDiagnosticsForState2(state)` in `src/optics/diagram/`.

Steps:
1. Model the script on an existing report generator (read the implementation behind
   `npm run generate:mirror-reports` for how scripts load and build lenses).
2. New `scripts/audit-lens-author.mjs`: load the lens, `buildLens()`, run validation, run render
   diagnostics at focusT=0/zoomT=0, print a grouped checklist (❌ blocking / ⚠️ missing metadata /
   ℹ️ info). Exit code 0 always (it's a report, not a gate).
3. Register `"audit:lens"` in `package.json`; document the command in
   `agent_docs/adding_a_lens.md` (one line in its verification section).
4. Tests: one script test with a fixture lens asserting the checklist mentions a known-missing
   field.

Acceptance: running it on a fully-populated lens prints all-clear; on a backfill-queue lens it
lists the exact missing fields; gate passes.

---

## Tier 4 — Formerly Deferred, Now Specified

These were one-line deferrals in earlier versions of this plan and in the analysis roadmap. They
are now specified to the same standard as the tiers above. Build them in this order — F12 and F14
share a helper.

### F12. Coma/spot scalar field-sweep curves (AO#11)

- [ ] Effort: M

What: a chart of coma severity vs field position (0→100%), turning the existing per-field coma
numbers into a comparable curve: tangential span, sagittal span, and their ratio, with
edge/mid summary readouts. Feeds the F4 scorecard later.

Verified foundation (signatures copied from `src/optics/aberration/coma.ts`):

```ts
computeMeridionalComa(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD,
  aberrationT = 0, fieldGeometry?, sampling: AnalysisSamplingOptions = {}): MeridionalComaResult | null
computeSagittalComa(...same params...): SagittalComaResult | null
```

Both results carry `fieldFraction`, `fieldAngleDeg`, `spanUm`, `signedOuterDeltaUm`,
`validSampleCount`. The field position is controlled via `sampling.comaDetailFieldFraction`.

Steps:
1. New helper `src/optics/analysis/comaFieldSweep.ts`:
   `computeComaFieldSweepForState2(state, currentEPSD, currentPhysStopSD, fieldGeometry?, sampling?)`.
   Copy the `*ForState2` adapter pattern from `src/optics/analysis/vignetting.ts` (it wraps the
   raw-parameter function with prepared-state fields — read it first).
   - Loop `fieldFraction` over `[0, 0.25, 0.5, 0.75, 1]` (a named constant), calling both coma
     functions with `{ ...sampling, comaDetailFieldFraction: fraction }`.
   - Per fraction emit `{ fieldFraction, fieldAngleDeg, tangentialSpanUm, sagittalSpanUm, ratio, valid }`
     (`valid: false` when either result is null or `validSampleCount` is 0 — keep the sample, let
     the chart gap it).
   - Result also carries `edge` and `mid` shortcut references and a `maxSpanUm` for chart scaling.
2. Performance: 5 fractions × 2 orientations = 10 bundle traces per recompute. Memoize on the
   prepared state + pupil inputs (standard tab pattern); if drag responsiveness suffers, pass a
   reduced pupil count through `AnalysisSamplingOptions` for the sweep only (look at which knob
   the coma module already accepts — do not invent a new sampling mechanism).
3. UI: new section at the bottom of `ComaTab.tsx` ("FIELD SWEEP"): two-series SVG line chart
   (tangential/sagittal, theme ray colors), X = field %, Y = span µm formatted with
   `formatComaSpanUm` (from EFFICIENCY task E3; if E3 hasn't run, use `formatComaSpan` from
   `MeridionalComaPlot.tsx`). Model the chart on the vignetting chart component.
4. Folded systems: the coma tab is already gated for folded lenses — the sweep inherits that gate
   automatically by living inside the tab. Verify, don't assume: load a folded lens and check.
5. Tests: helper test on a fast double-Gauss from the catalog — assert `samples[0]`
   (on-axis) spans ≈ 0 (< 1 µm), edge span > mid span > 0; assert `valid` handling by
   forcing an out-of-range fraction if the module allows it; smoke test the section.

Acceptance: curve consistent with the per-field detail values already shown in the tab (same
fraction → same span number); gate passes; changelog entry.

### F13. 2D vignetting pupil-footprint tiles (AO#17)

- [ ] Effort: L

What: for field positions 0/25/50/75/100%, show which part of the entrance pupil actually
survives to the image — small footprint tiles revealing cat's-eye clipping — with a surviving-ray
percentage under each tile. The existing 1D curve stays the headline.

Verified foundation: the current vignetting analysis
(`computeVignettingCurveForState2(state, currentEPSD, currentPhysStopSD, fieldGeometry?, sampling?)`
→ `VignettingSample { fieldAngleDeg, geometricTransmission, relativeIllumination }`) sweeps ONLY
meridional pupil rays. The bokeh module (`src/optics/aberration/bokeh.ts`) already traces full 2D
pupil bundles via `sampleCircularPupil()` (defined in `src/optics/rayTrace.ts`, re-exported from
`src/optics/optics.ts`) and `traceOffAxisBundleFromSamples()` (defined in
`src/optics/aberration/offAxis.ts`) — 337 samples in concentric rings, each sample retaining
pupil radius/azimuth.

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
2. New pure helper `src/optics/analysis/pupilFootprints.ts`:
   `computePupilFootprintsForState2(state, currentEPSD, currentPhysStopSD, fieldGeometry?, sampling?)`
   → `{ fields: Array<{ fieldFraction, fieldAngleDeg, samples: Array<{ px, py, survived }>, transmission }> }`
   where `px, py` are normalized pupil coordinates in [-1, 1] and `transmission` =
   survived/total.
   - Per field fraction: solve the chief ray (skip the field with `valid: false` if the solve
     fails), build the circular pupil sample set, trace each sample, record clipped vs survived.
   - Reuse the exact sampling infrastructure from the bokeh module — do NOT write a new pupil
     sampler. If the bokeh sampler isn't exported, export it (it is pure; moving it to a shared
     internal module is acceptable — keep git history clean with a dedicated commit).
3. UI: new "PUPIL FOOTPRINTS" section in `VignettingTab.tsx`: a row of five ~90px SVG tiles; each
   tile draws the unit pupil circle (theme grid color), survived samples as small dots
   (theme value color), clipped samples faint (theme muted); transmission % beneath via
   `AnalysisMetricRow`. Compute inside `useMemo`; the section lives in the tab so it only computes
   when the tab is open.
4. Consistency check built into tests: the on-axis tile's `transmission` must match
   `geometricTransmission` at field 0 from the 1D curve within a few percent (different sampling,
   same physics). Codify as a unit test comparing both helpers on the same lens/state.
5. Folded/annular systems: gate the section exactly like the vignetting tab's existing folded
   guard; annular pupils (mirror lenses) are excluded until Mirror backlog M1 lands — check
   `L.isFoldedOptics` plus whatever annular flag the stop-display logic uses
   (`grep -rn "innerBlockedSemiDiameter\|innerSd" src/optics` to find it).
6. Performance: 5 fields × 337 samples ≈ 1,700 traces per recompute — comparable to what the bokeh
   tab already does. If drag stutters with the tab open, reduce to the lighter ring count via
   sampling options and note the chosen number here.
7. Tests: on-axis transmission = 1.0 for an unobstructed lens wide open; edge transmission ≤
   on-axis; cross-check vs 1D curve (step 4); smoke test.

Acceptance: tiles visually show progressive cat's-eye clipping on a fast double-Gauss at 100%
field; numbers reconcile with the 1D curve; sliders stay responsive; gate passes; changelog entry.

### F14. Geometric spot/PSF metrics (AO#12, bounded version)

- [ ] Effort: M (bounded; the "L" scope in the old roadmap included a new heatmap subsystem —
  this version reuses existing point clouds instead)

What: RMS spot radius, centroid offset, and encircled-energy radii (EE50/EE80) computed from the
ray point sets the app already produces, displayed beneath the coma point-cloud preview — clearly
labeled **geometric ray density, not diffraction**.

Verified foundation: `computeComaPointCloudPreview(...)` (same parameter list as the other coma
functions) returns a multi-field 2D grid of (sagittal, tangential) point sets; the bokeh pipeline
produces `BokehPoint[]` sets.

Steps:
1. New pure helper `src/optics/analysis/spotMetrics.ts`:
   `computeSpotMetrics(points: ReadonlyArray<{ x: number; y: number }>): SpotMetrics | null`
   with `SpotMetrics = { centroidX, centroidY, rmsRadiusUm, ee50RadiusUm, ee80RadiusUm, count }`.
   - Centroid = mean x/y. RMS radius = sqrt(mean squared distance from centroid).
   - EE radii: sort distances-from-centroid ascending; EE50 = distance at index
     `ceil(0.5 · n) − 1` (same for 0.8). Return null for n < 10 (named constant) — tiny sets give
     meaningless statistics.
   - Units: the point sets are in mm at the image plane — convert to µm in the helper and say so
     in the JSDoc. Verify the units by reading how the point-cloud preview component scales its
     axes before trusting this.
2. This helper is deliberately independent of tracing — it takes any point set. That makes it
   reusable by F12's future scorecard rows and by the bokeh tab.
3. UI: metric row(s) under the coma point-cloud preview (`ComaPreviewSection.tsx`): "RMS r",
   "EE80 r" for the currently displayed field, with the caption "geometric, not diffraction"
   in muted text. Optionally the same under the bokeh preview (separate commit).
4. Tests (pure math, no tracing): a 4-point square set with hand-computed RMS; a set with one
   far outlier (EE80 robust vs RMS inflated — assert both); n < 10 returns null. Then one
   integration test feeding a real `computeComaPointCloudPreview` field's points and asserting
   metrics are finite and positive at an off-axis field.

Acceptance: numbers stable across re-renders (memoized), labeled geometric; gate passes;
changelog entry.

### F15. Aperture-blade shape in bokeh (AO#19)

- [ ] Effort: M-L

What: use the blade metadata to mask the pupil when stopped down, so bokeh previews show
polygonal/rounded-polygon blur disks instead of circles, plus a small stop-shape glyph.

Verified foundation: `src/types/optics.ts:293-295` defines
`apertureBlades?: number` and `apertureBladeRoundedness?: number` ("0 = straight polygon,
1 = circular"); populated in **173** and **47** lens files respectively. Bokeh samples retain
pupil radius/azimuth (see F13 notes), which is exactly what a mask needs.

Steps:
1. New pure helper `src/optics/aberration/apertureMask.ts`:
   ```ts
   /**
    * Radial limit of an N-blade iris at a given pupil azimuth, as a fraction of the
    * full circular radius. Vertices of the polygon lie on the unit circle:
    * limit = cos(π/N) / cos(((θ − φ) mod (2π/N)) − π/N), blended toward 1 by roundedness.
    */
   export function apertureRadialLimit(azimuthRad: number, blades: number, roundedness: number): number
   export function isInsideBladeAperture(radiusFrac: number, azimuthRad: number,
     blades: number | undefined, roundedness: number | undefined): boolean
   ```
   - `blades` undefined or < 3, or `roundedness >= 1` → limit is 1 (circular; no behavior
     change). Default `roundedness` when undefined: 0 (straight blades) — document this choice.
   - Blend: `limit = polygonLimit + (1 − polygonLimit) · clamp01(roundedness)`.
   - Blade orientation `φ`: fixed constant (0) — real orientation is unknown; note it.
2. Apply the mask in the bokeh sampling path ONLY when the aperture is stopped down
   (`stopdownT > 0`): wide open, the limiting aperture is the circular barrel, not the blades.
   Find where bokeh samples are filtered against the stop radius today and add the azimuthal
   test beside it — same layer, same style.
3. UI: in `BokehTab.tsx`, a small stop-shape glyph (SVG path of the blade outline) next to the
   preview when blade data exists, with "N blades" text. The blur disks change automatically via
   the mask.
4. Tests (pure): `apertureRadialLimit` at a vertex azimuth (θ = φ + 2π·k/N) returns 1.0; at
   mid-edge (θ = φ + π/N) returns `cos(π/N)` (≈0.866 for N=6, r=0); roundedness 1 → 1.0
   everywhere; undefined blades → everything inside. Integration: a 6-blade lens stopped down
   produces fewer surviving edge-azimuth samples than the same lens with blades removed; wide
   open produces identical results with and without blade data.
5. Changelog + a line in `src/lens-data/LENS_DATA_SPEC.md`'s blade-field description noting the
   fields are now consumed (currently marked "future").

Acceptance: hexagonal bokeh visible on a 6-blade lens stopped down; wide-open output
byte-identical to before; gate passes.

### F16. Catalog-level glass Abbe scatter (page)

- [ ] Effort: M

What: a scatter of every glass used across the whole lens library on Abbe (vd) vs index (nd)
axes, dot size ∝ number of lenses using it, with vendor/name/usage tooltips — the catalog-scale
version of the existing per-lens Abbe diagram.

Verified foundation: `GlassEntry` (`src/optics/glassCatalogTypes.ts`) carries
`name, vendor, nd, vd, PgF?, code6?`; the catalog has 304 entries;
`resolveGlass(glassString): GlassEntry | null` (`src/optics/glassCatalog.ts`);
`LENS_CATALOG: Record<string, LensData>` (`src/utils/catalog/lensCatalog.ts`); the per-lens
diagram is `src/components/display/AbbeDiagram.tsx` (X = vd reversed, Y = nd 1.45–2.05 — reuse
its axis mapping).

Steps:
1. New helper `src/utils/catalog/glassUsage.ts`:
   `computeGlassUsage(): Array<{ entry: GlassEntry, lensCount: number, elementCount: number }>` —
   iterate visible catalog lenses, resolve each element's glass string, aggregate per resolved
   entry (unresolved strings are skipped and counted into an `unresolvedCount` on the result).
   Runtime aggregation is fine (LENS_CATALOG is already in memory); memoize at module level via
   lazy `let cached` since the catalog is static per build.
2. New route `/glass` per `agent_docs/adding_a_route.md` (static route — remember the metadata
   generator must emit it; follow the recipe's step 3 verification).
3. Page component: scatter SVG modeled on `AbbeDiagram.tsx` (copy its `toX`/axis code style, keep
   the reversed-vd convention), dot radius `2 + sqrt(lensCount)` capped at 8, hover tooltip with
   name/vendor/lens count (title element or the app's existing tooltip pattern — check
   `HelpTooltipButton` usage). Footnote: total glasses plotted, unresolved-token count with a
   pointer to `agent_docs/glass-relabel-followup.md`.
4. Tests: `computeGlassUsage` finds a known common glass with lensCount ≥ 1 and never returns
   entries with zero counts; page smoke test; `npm run build` route/sitemap verification.

Acceptance: page prerenders with content; dot spot-checks match reality (pick one famous glass);
gate + build + `seo:audit` pass; changelog entry.

### F17. Chief-ray solver diagnostics panel (dev-only)

- [ ] Effort: S

What: a development-only readout of chief-ray solver health for the current lens: counts of
converged / paraxial-fallback / bracket-failed / out-of-domain solves, with a warning badge when
non-converged share exceeds 5%.

Verified foundation: `src/optics/chiefRayDiagnostics.ts` exports
`getChiefRayDiagnostics(): Map<string, Record<ChiefRayStatus, number>>` (keyed by lens key;
statuses `"converged" | "paraxial-fallback" | "bracket-failed" | "out-of-domain"`) and
`resetChiefRayDiagnostics()`. **No dev UI exists today.** The repo already has a feature-flag
module: `src/utils/featureFlags.js` (e.g. `ENABLE_ASPH_DIAMOND_FILL`, consumed in
`DiagramElementLayer.tsx`).

Steps:
1. Add `ENABLE_CHIEF_RAY_DIAGNOSTICS` to the feature-flags module, default `false` (match how the
   existing flag is declared).
2. There is an existing compact development diagnostics readout for folded traces (see the mirror
   backlog record; locate it: `grep -rni "diagnostic" src/components --include="*.tsx" -l`).
   Colocate: add a small `ChiefRayDiagnosticsReadout` component next to it, rendered only when
   the flag is true.
3. The readout reads `getChiefRayDiagnostics().get(lensKey)`, renders the four counts and the
   non-converged percentage; a "reset" text-button calls `resetChiefRayDiagnostics()` and forces
   a re-read (local `useState` tick). Poll on an interval? No — re-read on each render of the
   panel plus after reset; this is a dev tool, staleness is acceptable.
4. Tests: none for the flag-off path beyond existing suites; one smoke test rendering the readout
   with a stubbed diagnostics map (import and call `recordChiefRayStatus2` if exported, else
   construct the Map in the test via the public API).

Acceptance: flag off → zero rendered output and zero cost; flag on → counts change while
dragging sliders on a fisheye; gate passes. No changelog entry (dev-only).

---

## Tier 5 — Absorbed Open Items From the Analysis Roadmap

Ordered roughly by value/effort. These keep their original intent; specifics added where the code
was verified.

### F18. Finite-conjugate chromatic focus sweep (AO#13)

- [ ] Effort: M-L

What: how axial color (LoCA) shifts as focus moves through its range — a curve of LoCA vs focusT
(0→1), for macro and floating-element lenses where chromatic behavior changes with conjugate.

Steps: new helper in `src/optics/analysis/` sweeping `focusT` over ~9 steps, computing the
existing longitudinal chromatic focus result at each (find the current helper:
`grep -rn "Longitudinal" src/optics/analysis`); reuse its prepared-state caching by building each
step's state through `prepareState` with a shared cache (see
`src/optics/state/prepareState.ts` — it accepts a caller-owned cache). Chart in the Chromatic tab
as a new collapsed section. First version: centered, sequential lenses only; document tilt/shift
and folded exclusions in the section guard. Tests: a macro lens shows larger LoCA variation
across the sweep than a unit-focusing normal lens.

### F19. Field-aware EP/XP diagram tick marks (AO#16b)

- [ ] Effort: S-M

What: when the pupil overlay is active, add subtle tick marks showing where the entrance/exit
pupils sit for 50% and 100% field, using `computeBothPupilAberrationProfilesForState2` (already
computed for the Pupils tab). On-axis labels stay primary; field ticks are lighter marks with the
existing off-screen-indicator convention. Touch `DiagramOverlayLayer.tsx`; follow its existing
pupil-marker code. Tests: overlay snapshot/geometry test per existing DiagramOverlayLayer tests.

### F20. Sensor-format framing overlay (AO#20)

- [ ] Effort: M

What: draw a selected sensor format (full-frame / APS-C / MFT / 1-inch / custom) on the
distortion field grid and the diagram image plane; report whether the traced image circle covers
the format's corner. Constants: half-diagonals 21.63 / 14.16 / 10.82 / 7.87 mm (verify against
`lensTaxonomy.ts` — if image formats there carry dimensions, use those instead of new constants).
Sensor choice is UI state (not lens data), defaulting from the lens's `imageFormat` when present.
Add the selector to the Distortion tab; shareable URL state only if requested later.

### F21. Deeper lateral-color diagram affordance (AO#15)

- [ ] Effort: M

Constraint carried from the roadmap: connect the lateral-color curve to field points in the SVG
WITHOUT overloading the LoCA inset — the inset stays LoCA-only, and any new marker must read from
`computeLateralColorCurve()` results, never from marginal ray-fan endpoint spread (they are
different quantities). Design proposal first (a small markdown sketch in the PR description),
then implement.

### F22. Glass-strategy secondary-spectrum readout (AO#22 remainder)

- [ ] Effort: M

What: beyond F7's counts — partial-dispersion (PgF) based anomalous-dispersion scoring.
Note the roadmap assumed this needs new `ElementData` fields; in fact `GlassEntry.PgF` already
exists in the catalog (optional per entry). Score only elements whose resolved glass carries
`PgF`; label the readout "heuristic — catalog PgF coverage partial" and report coverage
(n scored / n elements). Renders inside F7's section. Do after F7.

### F23. Article-to-live-diagnostic links (AO#24)

- [ ] Effort: S-M

What: article callouts deep-linking to example lenses with a chosen analysis tab open — now cheap
because tab deep links already work (`?ad=1&tab=<id>&v=1`). Implement as a markdown-friendly
pattern: ordinary links in article markdown pointing at lens URLs with view-state params (no new
React-in-markdown machinery), plus an optional "Related diagnostics" block on lens pages driven
by lens metadata (macro/APD/internal-focus flags). Start with 2–3 articles as the pilot; document
the link pattern in `agent_docs/adding_an_article.md`.

### F24. Bokeh tab controls (AO#18 follow-ups)

- [ ] Effort: M

What: user controls for the bokeh preview — source-plane (foreground/background) toggle, field
position, scale lock. Wire per `agent_docs/adding_ui_controls.md`; local component state first;
URL state only if sharing demand appears. Read `useBokehPreviewData` and
`computeBokehPreviewPairForState2` to see which knobs the pipeline already accepts before adding
parameters.

---

## Mirror/Folded Backlog (absorbed from MIRROR_LENS_FUTURE_ENHANCEMENTS.md)

Engineering-heavy items; each needs optics-fixture work, not just UI. Historical context and the
long list of completed mirror work is in the archived doc
(`agent_docs/records/mirror-lens-future-enhancements-archive.md`).

### M1. Annular-aware off-axis/chief-ray solver

- [ ] Effort: L · The highest-value open mirror item

Problem (verified in the archived backlog): on centrally obstructed systems (e.g. Nikon
Reflex-Nikkor 1000mm f/11) the true central chief ray is physically blocked, so the current
central-chief convention can collapse the displayed field to zero. Fix: solve for a
displaced-pupil reference ray (annulus centroid) when the stop has a blocked center
(`stopInnerBlockedSemiDiameter()` already resolves the blocked region — grep it in
`src/optics/`). Requires: solver change routed through the generalized tracer, fixture assertions
on the hidden reflex fixtures (`src/lens-data/reference/`), and regeneration of mirror reports
(`npm run generate:mirror-reports`). Unlocks F13 for annular lenses and M2.

### M2. Folded/annular chromatic drawer validation (AO#14 + ML)

- [ ] Effort: M-L · Blocked by M1 for annular systems

Build folded chromatic fixtures with known image-plane behavior; validate LoCA/TCA/field-focus
paths against the generalized folded tracer; lift the chromatic drawer guards one analysis at a
time, each behind its own fixture-backed test. Never lift a guard without a fixture asserting the
physical result.

### M3. Mirror coating reflectivity/transmission losses

- [ ] Effort: M · Only when relative illumination or bokeh brightness needs it

Optional per-surface loss factor for mirror coatings and second-surface substrates, consumed by
vignetting/bokeh intensity accumulation. Needs a schema addition to `SurfaceData` (spec change in
`src/lens-data/LENS_DATA_SPEC.md` + validation) — keep the default lossless.

### M4. Spider-vane / obstruction display annotations

- [ ] Effort: S-M

Display-only metadata (vane count/angle) rendered on the annular stop display; explicitly NOT
part of optical tracing. Schema addition; renderer change in the stop overlay; no engine change.

### M5. Folded zoom/focus fixture perturbation tests

- [ ] Effort: M

The `mode: "auto"` path-stability tests cover ray-height/aperture perturbations; focus/zoom
perturbations are pending because no folded zoom/focus fixture exists. Author one hidden fixture
(reference folder) with a variable gap, then extend the existing stability tests to sweep
focusT/zoomT.

Deferred indefinitely (carried from the archive): 3D folded assemblies — the 2D meridional model
is intentionally the scope until exhausted.

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

## Archived Sources

- `agent_docs/records/analysis-options-roadmap-archive.md` — the full analysis-options roadmap as
  of 2026-07-06, including its shipped-item history.
- `agent_docs/records/mirror-lens-future-enhancements-archive.md` — the mirror/folded backlog with
  its complete done-item record.

When one of the features above ships, update THIS file (check the box, add a one-line status);
do not resurrect the archived docs.
