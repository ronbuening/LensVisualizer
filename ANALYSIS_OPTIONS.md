# Analysis Options - Feature Expansion Roadmap

This document tracks forward-looking opportunities for expanding LensVisualizer's feature set. It was refreshed after
reviewing the current README, architecture notes, analysis-drawer implementation, optics modules, tests, article content,
lens analysis markdown, and agent record files.

The goal is not to list every possible optical quantity. The goal is to identify useful features that fit the data and
architecture the app already has: patent prescriptions, slider-aware runtime lens state, real and paraxial ray tracing,
SVG rendering, SSR-friendly route/content plumbing, and a growing library of educational articles.

---

## Current Baseline

The app already has these analysis surfaces and should treat them as shipped baseline rather than future work:

- On-axis, off-axis, chromatic, and pupil-overlay ray rendering in the diagram.
- Analysis drawer tabs for aberrations, coma, distortion, focus breathing, vignetting, and pupils.
- Spherical aberration scalar metrics, transverse SA profile, and front/rear blur-character readouts.
- Real 2D coma point-cloud previews, idealized coma sketches, tangential and sagittal ray fans.
- Parabasal and dense real-ray field-curvature charts, isolated astigmatism chart, Petzval reference, and chromatic
  field curvature.
- Rectilinear distortion curve plus traced 2D chief-ray distortion field grid.
- Focus-breathing readouts, vignetting/relative-illumination curves, and EP/XP pupil-aberration curves.
- Abbe glass map, Petzval overlay, LCA inset/overlay, element inspector, and bokeh preview beta overlay.
- Side-by-side comparison mode with shared focus, aperture, zoom, and scale controls.

This leaves several good opportunities: surfacing more of the scalar data users need for comparison, turning hidden
analysis helpers into first-class UI, improving diagram overlays, and connecting the educational articles to live
diagnostics.

---

## Effort Scale

- **S:** 0.5-1 day. Mostly arithmetic, display wiring, and focused tests.
- **M:** 2-4 days. New pure helper plus one UI surface and tests.
- **L:** 1-2 weeks. New charting or sampling subsystem, performance work, broader UI tests.
- **XL:** Multi-week. Build-time metric cache, new schema fields, or cross-page product behavior.

---

## Recommended Order

1. **Analysis Summary tab and current-state metric helper** - fast, high-leverage, and reusable by compare mode.
2. **Compare-mode optical scorecard** - turns existing analysis into a decision tool.
3. **Bokeh beta promotion** - significant value already exists in code but is not integrated with the drawer.
4. **Pupil/sensor diagnostics** - matches the existing pupil-geometry articles and existing pupil-aberration math.
5. **Prescription/power ledger** - strong educational payoff and useful for lens-data authoring.
6. **2D vignetting, PSF, and catalog metric cache** - valuable, but heavier and more performance-sensitive.

---

## 1. Summary And Comparison Features

### 1. Analysis Summary Tab

**Why it helps:** The drawer has excellent individual diagnostics, but there is no single "what is this lens doing right
now?" view. A summary tab would reduce tab-hunting and give users an immediate state-aware overview.

**Effort:** M

**Implementation outline:**

- Add a pure `src/optics/analysisSummary.ts` helper that aggregates already-computed scalar metrics for the current
  focus, aperture, and zoom state.
- Include current EFL, f-number/effective f-number, field angle, BFD, pupil magnification, SA, coma RMS/span, field
  curve edge shifts, astigmatism max split, edge distortion, edge relative illumination, EP/XP max shift, and bokeh
  center/rim character when available.
- Add `AnalysisSummaryTab.tsx`, append a `summary` entry to `ANALYSIS_TABS`, and route it through
  `AnalysisDrawerContent.tsx`.
- Memoize expensive sub-computations and avoid triggering bokeh/spot computations unless that section is visible.
- Add optics tests for the summary helper and drawer-routing/component smoke tests.

### 2. Compare-Mode Optical Scorecard

**Why it helps:** Comparison mode currently aligns diagrams and shared sliders, but users still have to open panels and
mentally compare numbers. A scorecard would make lens-to-lens tradeoffs explicit.

**Effort:** M-L

**Implementation outline:**

- Reuse the `analysisSummary.ts` helper for each comparison panel at the shared slider state.
- Add a compact matrix above or below the dual diagrams with columns for lens A/lens B/delta.
- Start with scalar metrics that are cheap or already present: EFL, effective f-number, total track, BFD, edge
  distortion, edge RI/GT, focus breathing, SA, field angle, EP/XP shifts.
- Add "heavier" rows such as bokeh RMS or dense coma RMS behind an expandable section or lazy computation.
- Add tests in `__tests__/useComparisonDisplayValues.test.ts` or a new scorecard test file.

### 3. Catalog Metric Badges And Filters

**Why it helps:** The library is now large enough that users need ways to browse by behavior, not only maker/focal
length/year. Badges like "low distortion", "strong vignetting", "short BFD", or "high pupil shift" would make the catalog
feel more analytical.

**Effort:** L-XL

**Implementation outline:**

- Decide which metrics are cheap enough to compute at build time for every visible lens. Good first candidates:
  telephoto ratio, BFD, current image circle/field, Petzval radius, asphere count, ED/APD count, zoom ratio, focus travel,
  and wide-open edge distortion/RI at infinity.
- Generate a metrics artifact during the existing build-metadata pipeline rather than recomputing heavy ray sweeps in
  the browser for catalog pages.
- Add filter chips/sort keys to `LensIndexPage.tsx` and optional badges on lens cards.
- Keep expensive real-ray metrics at a fixed canonical state: infinity focus, wide open, wide-end zoom.

### 4. Shareable Analysis State URLs

**Why it helps:** Deep links already preserve lens and slider state. Sharing a specific analysis tab, overlay, or bokeh
view would make articles, PR discussions, and user comparisons easier.

**Effort:** S-M

**Implementation outline:**

- Extend URL sync to include analysis tab, drawer open/closed state, and selected overlay flags that are safe to persist.
- Keep transient UI like hover/selected element out of the URL.
- Add parse/encode tests beside `parseComparisonParams.test.ts` and `useURLSync.test.ts`.

---

## 2. Geometry, Cardinal Points, And Mechanics

### 5. Current-State Geometry Metrics

**Why it helps:** Several useful first-order facts are present but scattered: telephoto ratio, BFD, image circle, pupil
magnification, current track, working f-number, and entrance/exit pupil sizes. These explain lens architecture quickly
and support comparison.

**Effort:** S-M

**Implementation outline:**

- Add a pure `src/optics/systemMetrics.ts` helper.
- Compute at current `focusT`/`zoomT`: total track, telephoto ratio, BFD (`imgZ - z[lastSurface]`), ideal rectilinear
  image circle, current EP/XP diameters, pupil magnification (`XP / EP`), effective f-number, and field angle.
- Surface a small set in `DiagramHeader` or the proposed Summary tab; expose the rest in compare mode.
- Use `doLayout()`, `eflAtFocus()`, `effectiveFNumber()`, `epAtZoom()`, `xpAtZoom()`, `xpZRelLastSurfAtZoom()`, and
  `computeFieldGeometryAtState()` rather than duplicating state logic.

### 6. Principal And Nodal Point Overlay

**Why it helps:** Principal planes convert the complex patent cross-section into a thick-lens mental model. This would
make telephoto, retrofocus, and unit-focusing behavior easier to teach and compare.

**Effort:** M

**Implementation outline:**

- Add a paraxial cardinal-point helper using the same sign conventions as `traceSurfacesParaxial()`.
- Derive front/rear principal plane locations, focal points, nodal points in air, and current BFL/FFL.
- Add an overlay toggle or Summary section markers for H/H', F/F', and nodal points.
- Add tests on simple synthetic lenses plus a few production-lens sanity checks.

### 7. Focus And Zoom Motion Map

**Why it helps:** The lens-data files already include `var`, `varLabels`, `focusDescription`, zoom positions, group
annotations, and many analysis markdown sections about focusing architecture. The UI could show that mechanical story
directly.

**Effort:** M

**Implementation outline:**

- Add `computeMotionProfile(L, focusT, zoomT)` to summarize variable gap deltas, group movement direction, BFD changes,
  EFL changes, and track-length changes.
- Add a "Mechanics" section to the Breathing tab or a new Mechanics tab.
- Show travel bars for focus/zoom groups, current gap values, and "external extension" vs "internal focus" cues.
- Reuse `varLabels` and `groups`; do not infer semantic group names beyond existing annotations unless the data file
  provides them.

### 8. Prescription And Surface Power Ledger

**Why it helps:** Lens analyses repeatedly discuss which surfaces/elements carry power, chromatic correction, and Petzval
balancing. A live prescription ledger would let users see that structure without reading a long article first.

**Effort:** M-L

**Implementation outline:**

- Add `src/optics/prescriptionAnalysis.ts` with per-surface refractive power `(n2 - n1) / R`, approximate contribution to
  Petzval sum, surface medium transitions, and per-element/group totals.
- Add a `PrescriptionTab.tsx` or an Element Inspector expansion with sortable rows and small bar charts.
- Include element focal length, glass, Abbe number, APD status, asphere markers, cemented group labels, and Petzval
  contribution.
- Carefully handle flat surfaces and sign conventions; test on synthetic surfaces and real lenses.

### 9. Data-Quality And Render Diagnostics Panel

**Why it helps:** The validation/render-diagnostic system is sophisticated but mostly developer-facing. Surfacing it
would help when adding lenses and explain why element outlines are trimmed.

**Effort:** S-M

**Implementation outline:**

- Reuse `computeElementRenderDiagnostics()` to show declared SD, rendered SD, trim amount, and trim cause.
- Add a dev-friendly panel or Inspector section guarded behind an existing feature flag if needed.
- Link diagnostic rows to the selected element/surface.
- Add a small test confirming the diagnostics panel reflects trim causes.

---

## 3. Aberration Analysis Extensions

### 10. Field-Selectable Ray Fans And Spot Views

**Why it helps:** The current coma and field views are strong, but many are tied to fixed field fractions. Letting users
choose center/mid/edge positions would make the analysis feel exploratory rather than static.

**Effort:** M

**Implementation outline:**

- Add a small field-position control to the Coma tab: 0%, 25%, 50%, 75%, 100%, plus the lens default
  `offAxisFieldFrac`.
- Pass the selected field fraction into `computeMeridionalComa()`, `computeSagittalComa()`, and spot-preview helpers.
- Keep the existing representative 2x2 overview, but let the detailed ray fans follow the selected field.
- Add tests for the selected-field wiring and sample metadata.

### 11. Coma And Spot Scalar Curves

**Why it helps:** The app can show coma shape, but it does not yet summarize coma behavior as a curve across the field.
Scalar curves would make lenses easier to compare and would feed the Summary and Compare scorecards.

**Effort:** M

**Implementation outline:**

- Build a field sweep from existing `computeComaPointCloudPreview()` and `computeComaAnalysis()` internals.
- Plot RMS spot radius, tangential span, sagittal span, sagittal/tangential ratio, and tail-bias direction versus field.
- Add an edge/mid/average summary metric.
- Avoid duplicating ray traces already done for the spot grid by extracting a shared field-sweep helper.

### 12. Full Geometric Spot/PSF Metrics

**Why it helps:** A full density heatmap with RMS radius, 80% encircled energy, and peak/centroid metrics would be the
most intuitive "how big is the blur?" view. It would also give bokeh and aberration tabs a common metric language.

**Effort:** L

**Implementation outline:**

- Reuse or generalize `buildBokehDensityGrid()` for focused and defocused point clouds.
- Add encircled-energy and RMS helpers for circular-pupil samples at selected field positions.
- Clearly label this as geometric ray density, not diffraction MTF.
- Add performance guards: fixed sample counts, memoization, lazy rendering, and maybe a "high resolution" toggle.

### 13. Chromatic Lateral Color Curve

**Why it helps:** LCA and chromatic field curvature are visible today, but lateral color is not isolated as a first-class
curve. Many wide-angle and telephoto designs would benefit from a field-dependent R/G/B image-height separation readout.

**Effort:** M-L

**Implementation outline:**

- Trace chromatic chief rays across field positions using the existing wavelength index adjustment.
- Compute R/G/B image-height separation relative to green at each field angle.
- Add a chart to the chromatic/aberrations area or a new Chromatic tab.
- Add tests using lenses with known measurable chromatic spread.

### 14. Longitudinal Chromatic Focus Curve

**Why it helps:** The LCA inset shows a compact view, but a focus curve would explain whether color focus shift is linear,
balanced, or strongly asymmetric across channels.

**Effort:** M

**Implementation outline:**

- Repeatedly solve paraxial or real near-axis focus for R/G/B channels.
- Plot channel focus position relative to green, optionally across aperture or zoom.
- Reuse `computeChromaticSpread()` concepts but move the result into a dedicated pure helper.
- Keep the first version to the existing R/G/B channels unless the data schema gains richer dispersion data.

---

## 4. Pupils, Sensor Fit, Illumination, And Bokeh

### 15. Chief-Ray Angle And Sensor Compatibility

**Why it helps:** The pupil-geometry articles discuss telecentricity, exit pupil distance, corner color cast, and sensor
stack compatibility. A live chief-ray-angle chart would connect those articles to actual lenses.

**Effort:** M

**Implementation outline:**

- Add `computeChiefRayIncidenceCurve(L, zPos, focusT, zoomT)` using solved chief-ray launch and the image-side ray slope.
- Report center/mid/edge CRA, exit pupil distance, and a simple "more sensor-friendly / more oblique" qualitative label.
- Add chart/readouts to the Pupils tab or a new Sensor tab.
- Optionally overlay representative chief-ray directions near the image plane.

### 16. Field-Aware EP/XP Diagram Overlay

**Why it helps:** The diagram already draws on-axis EP and XP markers. The Pupils tab already computes how EP/XP shift
with field. Combining them would make pupil aberration tangible.

**Effort:** S-M

**Implementation outline:**

- Use `computeBothPupilAberrationProfiles()` to draw subtle 0%, 50%, and 100% field tick marks when `showPupils` is active.
- Keep the existing on-axis EP/XP labels primary; use lighter marks for field-shifted positions.
- Include off-screen indicators for finite but distant positions, matching the current overlay style.
- Add DiagramSVG/DiagramOverlayLayer tests for the new field ticks.

### 17. 2D Vignetting And Pupil Footprint Maps

**Why it helps:** The current vignetting curve uses a dense meridional sweep and already separates geometric transmission
from relative illumination. A 2D pupil footprint would reveal sagittal clipping, cat's-eye shape, and asymmetric
mechanical constraints.

**Effort:** L

**Implementation outline:**

- Reuse the circular/orthogonal pupil sampling infrastructure from coma and bokeh.
- Compute surviving pupil masks for 0%, 25%, 50%, 75%, and 100% field positions.
- Add a Vignetting tab section with small pupil-footprint tiles and transmission percentages.
- Keep the existing 1D curve as the headline because it is faster and easier to compare.

### 18. Promote Bokeh Preview From Beta Overlay To Analysis Tab

**Why it helps:** Bokeh preview already has a real computation pipeline, tests, and UI, but it is a separate beta overlay
button. Promoting it to the drawer would make it discoverable and easier to compare with SA/coma/vignetting.

**Effort:** M

**Implementation outline:**

- Add a `bokeh` analysis tab and route the existing `BokehPreviewOverlay` content through drawer conventions.
- Add controls for source plane, field positions, scale lock, and optional density-vs-circularized display.
- Keep or remove the floating beta button after the drawer version is stable.
- Add tests to `analysisDisplayTabs.test.ts` and `BokehPreviewOverlay.test.tsx`.

### 19. Aperture Blade Shape In Bokeh

**Why it helps:** The data model already includes `apertureBlades` and `apertureBladeRoundedness`, and bokeh samples
already preserve pupil radius/azimuth. Polygonal or rounded-aperture previews would make stopped-down rendering much
more photographic.

**Effort:** M-L

**Implementation outline:**

- Use `apertureBlades` and `apertureBladeRoundedness` to mask circular-pupil samples before tracing or before density
  accumulation.
- Show both the physical stop shape and the resulting blur disks.
- Backfill blade metadata where production specs are known; leave missing values as circular defaults.
- Add tests ensuring blade masking preserves open-aperture behavior and changes stopped-down footprints.

### 20. Sensor Format And Image-Circle Framing

**Why it helps:** Some lens analyses discuss whether the optical image circle fully covers full-frame, APS-C, or
correction-expanded fields. Letting users choose a sensor frame would make distortion/vignetting coverage more concrete.

**Effort:** M

**Implementation outline:**

- Add standard sensor format constants: full-frame, APS-C, Micro Four Thirds, 1-inch, and custom diagonal.
- Draw a sensor rectangle or diagonal on the distortion grid and diagram image plane.
- Report optical image circle coverage, corner field angle, and whether current traced field reaches the selected sensor
  corner.
- Keep sensor choice as UI state rather than lens data unless a lens page explicitly declares a native format.

---

## 5. Materials, Glass, And Aspheres

### 21. Asphere Departure And Utilization Map

**Why it helps:** The lens analyses often discuss which aspheres carry the correction burden. The app can compute sag
departure and slope directly from existing coefficients.

**Effort:** M

**Implementation outline:**

- Add a helper that compares each aspheric surface to its base sphere across semi-diameter: max departure, rim
  departure, peak slope, and departure sign.
- Add an Inspector section or Prescription tab bars ranked by maximum absolute departure.
- Highlight surfaces where rendering trim or gap constraints reduce visible aperture.
- Test with known high-departure aspheres from existing lens data.

### 22. Glass Strategy And APD/Secondary-Spectrum Readouts

**Why it helps:** The Abbe diagram is useful, but many lens notes discuss ED, fluorite-family, lanthanum, APD, and
secondary-spectrum strategy. A compact glass summary would make that information searchable and comparable.

**Effort:** M-L

**Implementation outline:**

- Add scalar summaries: low-dispersion count, high-index count, APD patent/inferred count, highest/lowest Vd, glass
  diversity, and positive-power ED placement.
- Add Abbe side readouts and compare-mode rows.
- For true secondary-spectrum scoring, consider adding optional partial-dispersion fields to `ElementData`; without those
  fields, label the score as heuristic.
- Add lens-data typing tests if new optional schema fields are introduced.

### 23. Element And Group Role Explorer

**Why it helps:** Element `role`, `glass`, `cemented`, `groups`, and `doublets` metadata are rich but mostly exposed only
one selected element at a time. A role explorer would make the prescription easier to scan.

**Effort:** S-M

**Implementation outline:**

- Add a compact table grouped by annotated groups/doublets.
- Show role text, focal length, glass, APD/asphere/cemented badges, and group membership.
- Let table rows select/highlight the corresponding element in the diagram.
- Keep it in the Inspector/Prescription area rather than creating a large modal.

---

## 6. Content And Workflow Bridges

### 24. Article-To-Live-Diagnostic Links

**Why it helps:** The site has excellent articles on pupils, telecentricity, working f-number, and focusing architecture.
Those articles can become entry points into the live tool instead of only static explanations.

**Effort:** S-M

**Implementation outline:**

- Add article callouts that deep-link to example lenses with a chosen analysis tab open.
- Add "related diagnostics" links on lens pages when a lens has relevant metadata: macro, APD, internal focus, strong
  retrofocus, unusual BFD, large pupil shift, etc.
- Keep the article markdown authoring flow simple; use frontmatter or a small shared content map rather than embedding
  React components in markdown.

### 25. Lens-Authoring Analysis Report

**Why it helps:** Adding lenses requires checking validation, render trims, fields, pupils, and analysis sanity. A generated
report would reduce repeated manual inspection.

**Effort:** M

**Implementation outline:**

- Add a script that loads a lens data file, builds the runtime lens, runs validation/render diagnostics, and outputs
  current-state metric summaries.
- Include warnings for hidden trim, impossible BFD, field clipping, missing blade count, missing analysis markdown, and
  missing group annotations.
- Optionally generate a markdown stub for the lens analysis file.
- Keep it separate from production build unless it proves stable.

### 26. Performance Budget And Lazy Analysis Scheduling

**Why it helps:** More real-ray diagnostics will increase compute cost. A shared scheduling pattern would keep the app
responsive as more analysis tabs are added.

**Effort:** M

**Implementation outline:**

- Establish a convention for "cheap summary now, heavy chart when visible".
- Use existing `useMemo` patterns, but centralize expensive analysis dependencies and sample-count constants.
- Consider idle-time precomputation for open tabs only.
- Add basic performance regression tests or smoke benchmarks for heavy helpers.

---

## Defer Unless New Data Is Added

These features are attractive but should be framed carefully because the current patent data does not fully support them.

### True Diffraction MTF, Strehl, Or Wavefront Error

**Why defer:** Current tracing is geometric. Real diffraction MTF requires wavefront phase, pupil weighting, wavelength
bandpass, aperture shape, and often design details absent from patent tables.

**Possible limited version:** A clearly labeled geometric spot/encircled-energy proxy.

### Flare, Ghosting, Transmission, And Coating Modeling

**Why defer:** Lens data lacks coating reflectance, glass transmission, surface polish/scatter, cement behavior, and barrel
geometry.

**Possible limited version:** Count air-glass interfaces and flag high-risk architectures, explicitly as a heuristic.

### AF Speed, OIS Performance, And Actuator Loads

**Why defer:** The analyses often identify focusing or stabilization groups, but mass, density, motor force, control loops,
and mechanical stroke limits are not consistently in the schema.

**Possible limited version:** Travel distance and moving-group optical diameter estimates where group annotations are
available.

### Manufacturing Tolerance Or Decenter Sensitivity

**Why defer:** Tolerance analysis needs mechanical tolerances, assembly degrees of freedom, and perturbation models that
are not part of the current data.

**Possible limited version:** A qualitative "sensitivity risk" heuristic based on large asphere departure, high powers,
thin air gaps, and fast apertures.

