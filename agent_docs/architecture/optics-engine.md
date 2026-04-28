# Optics Engine Architecture

Read this for pure optical calculations, lens building, ray tracing, aberration analysis, vignetting, distortion, bokeh,
validation, and diagram geometry.

## Core Rule

`src/optics/` has no React dependencies. Helpers accept the runtime lens object `L` and slider-derived state explicitly.
Do not introduce hidden module-level optical state.

State-dependent analysis must remain outside `buildLens()`. `buildLens()` constructs build-time/runtime constants from
lens data; analysis tabs use current focus, zoom, and aperture state.

## Core Modules

| Module | Purpose |
| --- | --- |
| `buildLens.ts` | Validates lens data and constructs frozen `RuntimeLens` objects. |
| `optics.ts` | Ray tracing, sag curves, layout, zoom interpolation, pupil geometry, chromatic tracing, chief ray solver. |
| `diagramGeometry.ts` | SVG coordinate transforms and element shape/render diagnostics. |
| `lensMovement.ts` | Pure 2D perspective-control movement helpers for clamping shift/tilt and transforming rendered points/rays. |
| `validateLensData.ts` | Runtime lens-data validation. |
| `raySampling.ts` | Viewport ray-density sampling for normal/dense/diagnostic ray fans. |
| `lcaScaling.ts` | Fixed-reference LCA bar offset scaling. |
| `analysisJobs.ts` | Analysis facade. Currently synchronous; prepared for module-worker migration. |
| `distortionAnalysis.ts` | Rectilinear distortion curve and traced 2D field grid. |
| `vignetteAnalysis.ts` | Vignetting / relative illumination curve. |
| `pupilAberration.ts` | Entrance and exit pupil aberration profiles. |
| `asphericComparison.ts` | Aspheric surface deviation: best-fit sphere solver, departure profiles, peak/RMS metrics, and click-surface routing. |
| `aberrationAnalysis.ts` | Public barrel for decomposed aberration modules. |
| `aberration/` | Spherical aberration, coma, field curvature, bokeh, off-axis, shared sampling/types. |
| `internal/` | Shared surface math, multi-surface tracing, and zoom/state derivation. |

## buildLens.ts

`buildLens(data)` validates lens data and constructs a frozen `RuntimeLens` with:

- Effective focal length, entrance pupil, field angle, total track, Petzval sum, and scale constants.
- Zoom metadata: positions, EFLs, EPs, half-fields, y-ratios, and back focal distances.
- Stop data: physical stop SD, blade stub fraction, stop housing SD, and f-stop series.
- Element/group/doublet/aspheric/variable maps for runtime lookup.

`paraxialTrace()` is exported for low-level first-order tracing tests.

## optics.ts

Major public helpers:

- Sag curves: `sag()`, `renderSag()`, `sagSlope()`, `sagSlopeRaw()`.
- Layout: `doLayout()`, `gapTrimHeight()`, `thick()`.
- Ray tracing: `traceRay()`, `traceToImage()`.
- Current-state paraxial references: `traceParaxialRay()`.
- Chromatic tracing: `wavelengthNd()`, `traceRayChromatic()`, `computeChromaticSpread()`.
- Zoom interpolation: `eflAtZoom()`, `epAtZoom()`, `fopenAtZoom()`, `halfFieldAtZoom()`, `yRatioAtZoom()`,
  `bAtZoom()`.
- Current-state pupil geometry: `entrancePupilAtState(stopSD, focusT, zoomT, L, geometry?)`.
- Current-state field geometry: `computeFieldGeometryAtState()`.
- Chief ray solving: `solveChiefRayLaunchHeight()` with bisection and small-angle guards.
- Utilities: `conjugateK()`, `formatDist()`, `formatPetzvalRadius()`.

All trace/layout functions accept `zoomT`; prime lenses ignore it.

## Ray Sampling Policy

Lens data owns the baseline ray fans through `rayFractions` and `offAxisFractions`. `raySampling.ts` preserves those
arrays exactly for `normal`, then derives symmetric denser viewport-only samples for `dense` and `diagnostic`. Use the
helper from display/tracing hooks instead of mutating runtime lens data or adding density-specific arrays to lens files.

## Off-Axis Geometry Policy

Use explicit naming:

- `computeParaxialOffAxisFieldGeometry()` - first-order/paraxial geometry for compatibility and comparisons.
- `computeStateAwareOffAxisFieldGeometry()` - current focus/zoom-aware geometry using solved chief-ray behavior.
- `computeOffAxisFieldGeometry` remains as a legacy compatibility alias for paraxial geometry.

Visible off-axis rays, chromatic off-axis rays, distortion, vignetting, pupil aberration, coma, and bokeh use the
state-aware solved-chief-ray path where current focus/zoom can move pupil geometry. Keep legacy paraxial behavior only
where the UI or test explicitly needs first-order comparison.

## Perspective-Control Movement

`lensMovement.ts` models v1 PC-lens movement as a 2D meridional display/ray layer: the optical trace is computed in the
centered lens coordinates, then rendered lens geometry and ray segments are shifted/tilted relative to a fixed image
plane. This keeps zero movement byte-for-byte equivalent to the existing coordinate path while making active movement
visible in the SVG.

Only lenses that declare `perspectiveControl` get movement controls. Use `clampLensMovement()` before rendering or
sharing movement values, and keep analysis helpers centered-lens unless a future task explicitly adds full moved-optics
diagnostics.

## Aberration Analysis

`aberrationAnalysis.ts` re-exports helpers from `src/optics/aberration/`.

Important functions:

- `computeSphericalAberration()` traces marginal rays and compares axial intercepts against near-axis references.
- `computeSAProfile()` samples the pupil zones for the spherical-aberration fan.
- `computeSphericalAberrationBlurCharacter()` classifies front/rear defocus disks around best focus.
- `computeComaPointCloudPreview()` returns chief-ray-referenced coma spot clouds and metrics.
- `computeComaAnalysis()` shares state-aware chief-ray geometry across tangential, sagittal, and circular pupil samples.
- `computeSagittalComa()` traces sagittal pupil fan x-intercept spread.
- `computeFieldCurvature()` computes parabasal and real-ray tangential/sagittal field curves plus Petzval reference;
  optional chromatic mode adds R/G/B field curves and focus spread.

Sign convention: negative spherical aberration means undercorrected; positive means overcorrected. Keep copy, tests, and
primers aligned to that convention.

## Distortion

`distortionAnalysis.ts` computes:

- `computeDistortionCurve()` - 21-sample 1D rectilinear distortion curve from center to edge.
- `computeDistortionFieldGrid()` - traced 2D chief-ray field grid against the same rectilinear reference.
- `computeDistortionReference()` - near-axis rectilinear reference setup.

These functions accept optional precomputed `FieldGeometryState` so UI code can avoid recomputing current-state field
geometry.

## Vignetting

`vignetteAnalysis.ts` computes relative illumination using solved chief rays, adaptive field spacing, and pupil sweeps.
`computeVignettingCurve()` accepts optional precomputed field geometry.

## Pupil Aberration

`pupilAberration.ts` provides:

- `computePupilAberrationProfile()` - entrance pupil z-shift per field angle from solved/paraxial chief-ray launch ratio.
- `computeExitPupilAberrationProfile()` - exit pupil z per field angle from full-system chief-ray back-projection.
- `computeBothPupilAberrationProfiles()` - combined single-loop version that shares the per-angle bisection call.

Prefer `computeBothPupilAberrationProfiles()` in UI code. All accept optional precomputed field geometry.

## Bokeh

`aberration/bokeh.ts` traces circular pupil bundles at infinity and near-focus optics:

- `computeBokehPreviewPair()` - paired infinity/near-focus entry point.
- `computeBokehPreview()` - one preview grid for a supplied image-plane position.
- `computeBokehFieldFootprint()` - per-field point cloud, surviving pupil footprint, and radial blur profile.
- `buildBokehRadialProfile()` - annular brightness profile.
- `buildBokehDensityGrid()` - retained for future full-density/PSF visualizations.

The traced image-plane point cloud is the source of truth; radial profiles are derived summaries.

## Aspheric Comparison

`asphericComparison.ts` provides pure helpers for analysing how much an aspheric surface departs from a sphere:

- `computeBestFitSphereR(R_base, asph, sd)` — golden-section search for the radius that minimises RMS sag deviation across the clear aperture. Falls back to `R_base` for flat surfaces.
- `computeAsphericDeparture(h, R_sphere, R_aspheric, asph)` — Δsag at a single radius.
- `computeDepartureProfile(R_sphere, R_aspheric, asph, sd)` — sampled radial profile for rendering and metrics.
- `peakAbsDeparture(profile)` / `rmsDeparture(profile)` — aggregate departure metrics displayed in the overlay footer.
- `nearestSurfaceForClick(clickZ, surfaces)` — routes a click coordinate to the nearest aspheric surface for click-to-measure.

These functions feed `AsphericComparisonOverlay.tsx` exclusively and must not be called from `buildLens()`.

## Validation And Rendering Geometry

`validateLensData.ts` checks required fields, references, STO presence, element edge thickness, SD consistency, rim slope,
boundary-surface cross-gap overlap, conic limits, and zoom field consistency.

`diagramGeometry.ts` provides:

- `createCoordinateTransforms()` - optical mm to SVG coordinate mapping.
- `computeElementRenderDiagnostics()` - declared/rendered SD, trim amount, and trim cause.
- `computeElementShapes()` - closed SVG element paths using the same rim and boundary gap policy as validation; accepts an
  optional point transform for perspective-control movement.

Production tests treat excessive hidden render trim as a data-quality failure.
