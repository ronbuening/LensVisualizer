# Pupil Aberration Analysis

## Branch
`claude/pupil-calculations-review-rEAXD`

## Summary
Groundwork for pupil aberration analysis: a data layer that quantifies how the
entrance pupil (EP) and exit pupil (XP) z-positions shift with field angle.  This
variation — absent in first-order optics — affects distortion, vignetting, and
bokeh shape across the frame.

## Changes
- `src/optics/pupilAberration.ts` — New module with:
  - `PupilAberrationSample` / `PupilAberrationProfile` — EP z-shift per field angle
  - `ExitPupilAberrationSample` / `ExitPupilAberrationProfile` — XP z per field angle
  - `computePupilAberrationProfile` — EP aberration via solved chief-ray / paraxial ratio
  - `computeExitPupilAberrationProfile` — XP aberration via full-system chief-ray
    back-projection (`xpZ = −y'_last / u'_last`)
  - `PUPIL_ABERRATION_SAMPLE_COUNT = 9` default samples
- `__tests__/pupilAberration.test.ts` — 35 tests covering both EP and XP profiles
  (structure, on-axis edge cases, metadata invariants, pre-computed geometry shortcut,
  zoom lens behavior)
- `src/components/layout/lensDiagram/DiagramViewport.tsx` — Fixed missing `zoomT` prop
  forwarded to DiagramSVG
- `agent_docs/architecture.md` — Added `pupilAberration.ts` to optics engine table
- `CLAUDE.md` — Added pupil aberration pattern bullet to Key Design Patterns

## Verification
- `npm run typecheck` — passed (pre-existing `src/generated/build-metadata.json` errors unrelated)
- `npm run format:check` — passed
- `npm run lint` — passed
- `npm run test -- --run __tests__/pupilAberration.test.ts` — 35/35 passed

## How the computations work

### EP aberration
The paraxial chief-ray launch height for field angle θ is `epRatio × tan(θ)`.
The actual chief ray that passes through the stop center has a different launch
height (found by `solveChiefRayLaunchHeight`).  The ratio `r = solved / paraxial`
is the "correction factor"; the EP z-shift is `(r − 1) × epRatio`.

### XP aberration
The same solved chief ray is traced through the **full** system via `traceRay`.
At the last surface it has height `y'` and slope `u'`.  Back-projecting to the
axis gives `xpZ = −y' / u'` (relative to last surface).  The XP shift is
`xpZ − xpZRelLastSurfAtZoom(zoomT, L)` (deviation from on-axis paraxial baseline).

The on-axis sample always returns shift = 0 because the chief ray degenerates to
the optical axis at θ = 0.

## Follow-up work (branch `claude/pupil-aberration-plan-C1Oz4`)

The deferred work above was fully implemented. Branch adds:

- `PUPIL_ABERRATION_SAMPLE_COUNT` bumped 9 → 17
- `BothPupilAberrationProfiles` type + `computeBothPupilAberrationProfiles` —
  single-loop combined computation sharing the per-angle chief-ray bisection
- `PupilAberrationChart.tsx` — SVG chart: EP shift (solid) + XP shift (dashed)
  on a shared symmetric axis; telecentric guard; zero reference line
- `PupilAberrationTab.tsx` — PUPILS drawer tab; memoized on `[L, focusT, zoomT]`
- `analysisTabs.ts` — `{ id: "pupils", label: "PUPILS" }` appended
- `AnalysisDrawerContent.tsx` — `activeTab === "pupils"` case added
- Tests: +14 optics tests (combined function agreement) + mock/routing test +
  render smoke test; total 35 → 60 tests across the three files

Verification: typecheck passed (pre-existing build-metadata errors unrelated),
format:check passed, lint passed, 60/60 tests passed.

### Remaining open items

- **XP overlay on diagram** — subtle per-field tick marks showing real XP
  z-positions when `showPupils` is toggled (3 representative field angles:
  0°, 50%, 100%)
- **Regression reference values** — document expected EP/XP shift magnitudes
  for a few reference lenses (Sonnar 50/1.5, a retrofocus wide-angle, a
  telephoto) as snapshot tests analogous to `__tests__/zoomOptics.test.ts`
