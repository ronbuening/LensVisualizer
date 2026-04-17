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
- `npm run typecheck` — passed (pre-existing `build-metadata.json` errors unrelated)
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

## Deferred work (future sessions)

### Analysis Drawer tab — Pupil Aberrations
Add a new "PUPILS" tab to the Analysis Drawer showing:
- EP z-shift vs field angle (curve chart, units mm)
- XP z-shift vs field angle (curve chart, units mm)
- On-axis EP and XP positions as reference lines
- Summary metrics: max EP shift, max XP shift across field

Implementation steps:
1. Add `{ id: "pupils", label: "PUPILS" }` to `ANALYSIS_TABS` in
   `src/components/layout/lensDiagram/analysisTabs.ts`
2. Create `src/components/display/PupilAberrationTab.tsx` — wires
   `computePupilAberrationProfile` + `computeExitPupilAberrationProfile` via
   `useMemo`, renders two SVG line charts (reuse the distortion/vignetting chart
   pattern)
3. Add a `case "pupils":` branch in `AnalysisDrawerContent.tsx`
4. Pass `focusT`, `zoomT`, and `L` (already available from the analysis context)
5. Add tests in `__tests__/analysisDisplayTabs.test.ts` for the new tab

### Combined profile computation
When both EP and XP profiles are needed simultaneously (e.g. for the drawer tab),
consider adding `computeBothPupilAberrationProfiles(focusT, zoomT, L, sampleCount?,
geometry?)` to `pupilAberration.ts` to share the geometry solve, `doLayout` call,
and per-angle `solveChiefRayLaunchHeight` calls — each field angle currently traces
to the stop twice (once for EP, once for XP; the XP function could reuse the solved
launch height from the EP pass).

### XP aberration visualization overlay on the diagram
Consider adding a subtle per-field marker showing where the real XP lies when
`showPupils` is toggled.  This would require computing at least 3 representative
field angles (0°, 50%, 100%) and drawing their apparent XP z-positions as
translucent tick marks near the existing XP marker.

### Sign and magnitude sanity reference values
Document expected EP/XP shift magnitudes for a few reference lenses so future
changes can be caught by a regression test (similar to `__tests__/zoomOptics.test.ts`
for the Nikkor Z 70-200).  Good candidates:
- Zeiss Sonnar 50/1.5 (modest EP aberration, compact rear stop)
- A retrofocus wide angle (large EP aberration by design)
- A telephoto (minimal EP aberration)
