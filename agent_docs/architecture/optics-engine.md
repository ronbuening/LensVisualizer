# Optics Engine Architecture

Read this for pure optical calculations, lens building, ray tracing, aberration analysis, vignetting, distortion, bokeh,
validation, and diagram geometry.

> Mount-diagram geometry lives in `src/optics/mount/` (polar/annular path builders, deterministic SVG renderer),
> separate from this lens cross-section engine. See [`mount-diagrams.md`](mount-diagrams.md).

## Core Rule

`src/optics/` is the authoritative optics engine. Stable app and test imports should use the public files in
`src/optics/*` where practical, while engine-native work can import focused submodules such as `src/optics/trace/`,
`src/optics/field/`, and `src/optics/state/`. The Stage 05 rollback/parity safe window is closed: old engine files,
parity-only tests, and the old-vs-new benchmark harness have been removed.

Pure optics modules have no React dependencies. Helpers accept the runtime lens object `L` or a
`PreparedOpticalState` plus slider-derived state explicitly. Do not introduce hidden module-level optical state.

State-dependent analysis must remain outside `buildLens()`. `buildLens()` constructs build-time/runtime constants from
lens data; analysis tabs use current focus, zoom, and aperture state.

## Core Modules

| Module | Purpose |
| --- | --- |
| `src/optics/prescription/` | Lens-data normalization, runtime-lens conversion, labels, variables, aspheres, interactions, groups, and dispersion descriptors. |
| `src/optics/state/` | `PreparedOpticalState` compilation and caches for current focus/zoom/aberration state. Caches must include every optical input that changes results. |
| `src/optics/math/` | Vector math, paraxial stepping, surface profiles, and surface intersection routines. Engine-native failures use typed statuses. |
| `src/optics/trace/` | Sequential and generalized/folded exact tracing, aperture checks, stop tracing, runtime result adapters, and folded diagnostics. |
| `src/optics/field/` | Projection-aware field launch, chief-ray solving, entrance-pupil state, field/image-height inversion, and chief-ray diagnostics. |
| `src/optics/first-order/` | System matrix, cardinal elements, focus breathing, effective f-number, and first-order pupil helpers. |
| `src/optics/chromatic/` | Wavelength/index resolution, chromatic tracing, dispersion adapters, and quality summaries. |
| `src/optics/diagram/` | SVG coordinate transforms, element shape/render diagnostics, aspheric overlay paths, and second-surface mirror coating accent paths. |
| `src/optics/analysis/` | Analysis facades and state-aware wrappers for summary metrics, aberration, distortion, vignetting, pupil, bokeh, group movement, and LCA display helpers. |
| `src/optics/buildLens.ts`, `src/optics/optics.ts`, focused `src/optics/*.ts` public modules | Stable import paths for app code and tests over the engine implementation. |
| `lensMovement.ts` | Pure 2D perspective-control movement helpers for clamping shift/tilt and transforming rendered points/rays. |
| `groupMovement.ts` | Pure inferred lens-group axial movement profiles for focus, zoom, and combined overlay views. Uses fixed-image-plane anchoring and group-center positions relative to the focus plane. |
| `validateLensData.ts` | Runtime lens-data validation. |
| `projection.ts` | Projection model (rectilinear, fisheye-equidistant, fisheye-equisolid), forward/inverse maps, distortion residual reference, the `isFisheyeProjection` type guard for the recurring kind-fork, `projectionLaunchSlopeForField` (1D meridional `uField` from a field angle, with the 89° out-of-domain guard `MAX_FIELD_LAUNCH_DEG`), and its 2D companion `projectionLaunchVectorForFieldAngles` (azimuthal `(θ_x, θ_y)` → slopes + ideal image point). Also exposes the `LaunchSurface = "object-plane" \| "bounding-sphere"` discriminator, `launchSurfaceForFieldDeg(fieldDeg, projection)` selector, `ABSOLUTE_HALF_FIELD_CEILING`, `TRACING_SAFETY_FACTOR`, and `boundingSphereLaunchVector(epZ, θ_x, θ_y, R)` geometric helper for past-cap fisheye fields. |
| `chiefRayDiagnostics.ts` | Structured counter for chief-ray solve outcomes. `recordChiefRayStatus(lensKey, status)` is wired into `solveChiefRay`; `getChiefRayDiagnostics()` returns a `Map<lensKey, { converged, paraxial-fallback, bracket-failed, out-of-domain }>` snapshot for audit scripts. Dev-only `console.warn` for fallbacks is preserved. |
| `raySampling.ts` | Viewport ray-density sampling for normal/dense/diagnostic ray fans, including obstruction-aware sampling for folded annular systems, plus `isHeavyLensForRayWork(L)` — the shared heuristic for heavy-lens density downgrades (fisheye OR `N ≥ 32` OR `maxSD ≥ 50 mm` OR `halfField ≥ 40°`). |
| `stopObstruction.ts` | Shared stop-obstruction inference for annular stop display and ray sampling. Prefers authored `STO.innerSd`, then folded central blockers and annular mirror holes, while ignoring ring blockers whose center remains clear. |
| `chromaticRayFanScaling.ts` | Fixed-reference chromatic ray-fan and LOCA bar offset scaling. |
| `analysisJobs.ts` | Runtime and prepared-state analysis job facades. Currently synchronous; prepared for module-worker migration. |
| `cardinalElements.ts` | State-aware first-order/cardinal element calculations for F/F′, H/H′, N/N′ and axial spans. |
| `distortionAnalysis.ts` | Rectilinear distortion curve and traced 2D field grid. |
| `vignetteAnalysis.ts` | Vignetting / relative illumination curve. |
| `pupilAberration.ts` | Entrance and exit pupil aberration profiles. |
| `asphericComparison.ts` | Aspheric surface deviation: best-fit sphere solver, departure profiles, peak/RMS metrics, and click-surface routing. |
| `aberrationAnalysis.ts` | Public barrel for decomposed aberration modules. |
| `aberration/` | Spherical aberration, coma, field curvature, bokeh, off-axis, shared sampling/types. |
| `internal/` | Shared surface math, multi-surface tracing, and zoom/state derivation. |

## buildLens.ts

`buildLens(data)` is the stable public constructor and delegates to `buildLens2` in `src/optics/compat.ts`.
The promoted runtime builder lives in `src/optics/runtimeLens.ts`. The returned `RuntimeLens` keeps the existing UI and
lens-data contract, while `engineLensFromRuntime()` and `prepareRuntimeState()` recover the engine-native `EngineLens`
and `PreparedOpticalState` for tracing and analysis.

The constructor validates lens data and constructs a frozen `RuntimeLens` with:

- Effective focal length, entrance pupil, field angle, total track, Petzval sum, and scale constants.
- Zoom metadata: positions, EFLs, EPs, half-fields, tracing half-fields, y-ratios, and back focal distances.
- Stop data: physical stop SD, blade stub fraction, stop housing SD, and f-stop series.
- Element/group/doublet/aspheric/variable maps for runtime lookup.
- Folded-path metadata: resolved `opticalPath`, explicit `imagePlane`, `isFoldedOptics`, and normalized surface/image-plane
  normals when mirror data opts into the generalized model.
- Folded entrance/exit pupil geometry derived from generalized real-ray stop and full-system basis traces, with finite
  geometric fallbacks when a folded path cannot produce reliable stop/full traces.

**`halfField` vs `tracingHalfField`.** Rectilinear lenses set both to the same slope-launch-bisected value
(real chief ray vignetting check) by default. Fisheye lenses set `halfField = projection.maxTraceFieldDeg`
(the declared coverage — the patent-stated half-field, which can be wider than what slope-launch chief rays
can traverse) and `tracingHalfField = halfFieldBisected × TRACING_SAFETY_FACTOR` (the bisection-narrowed
value with a small safety margin). The diagram's off-axis ray rendering uses `tracingHalfField` so bundle
rays actually reach the image plane on fisheyes; `halfField` drives distortion grid extent, projection
metadata, and info displays. Zoom variants use `zoomHalfFields[]` / `zoomTracingHalfFields[]` accessed via
`halfFieldAtZoom()` / `tracingHalfFieldAtZoom()`. Rectilinear lenses may opt into the declared-coverage
behavior by setting `projection: { kind: "rectilinear", fullFieldDeg, maxTraceFieldDeg }` — used for
ultrawides like the Carl Zeiss Hologon 15 mm f/8 where the paraxial chief-ray bisector under-counts the
published 120° coverage. The override only changes `halfField`; `tracingHalfField` still uses the bisected
value so rendered ray bundles stay safely within what real surfaces can carry.

`paraxialTrace()` is exported for low-level first-order tracing tests.

## optics.ts

`src/optics/optics.ts` is the stable barrel for commonly consumed pure optics helpers. Continue importing from this
stable path in app code unless working inside the engine itself. Import from deeper `src/optics/**` engine modules only
for engine-native work or focused tests that need prepared-state APIs.

Major public helpers:

- Sag curves: `sag()`, `renderSag()`, `sagSlope()`, `sagSlopeRaw()`.
- Layout: `doLayout()`, `gapTrimHeight()`, `thick()`.
- Ray tracing: `traceRay()`, `traceSkewRay()`, `traceToImage()`.
- Current-state paraxial references: `traceParaxialRay()`.
- Chromatic tracing: `wavelengthNd()`, `traceRayChromatic()`, `computeChromaticSpread()`.
- Zoom interpolation: `eflAtZoom()`, `epAtZoom()`, `fopenAtZoom()`, `halfFieldAtZoom()`,
  `tracingHalfFieldAtZoom()`, `yRatioAtZoom()`, `bAtZoom()`.
- Current-state pupil geometry: `entrancePupilAtState(stopSD, focusT, zoomT, L, geometry?)`.
- Current-state field geometry: `computeFieldGeometryAtState()`.
- Chief ray solving: `solveChiefRay()` returns a typed `ChiefRaySolveResult` (`converged` / `paraxial-fallback`
  / `bracket-failed` / `out-of-domain` + iteration count + `launchSurface: "object-plane" \| "bounding-sphere"`),
  memoized per-lens via `WeakMap` keyed on focusT / zoomT / aberrationT / fieldAngleDeg / launchSurface. The solver dispatches on `launchSurfaceForFieldDeg(fieldDeg, projection)`:
  **fisheye projections always route through `solveChiefRayBoundingSphere`** regardless of angle, exercising
  the bounding-sphere code on every fisheye solve in the catalog. Rectilinear projections keep cap-based dispatch:
  object-plane below
  `MAX_FIELD_LAUNCH_DEG` (89°), bounding-sphere at/above. The bounding-sphere bisection varies the
  EP-crossing y `yEP` and traces directly via `traceExactSurfaceStackVector`; both paths return `yLaunch`
  projected to z=0 for semantic consistency. Callers that only need a scalar launch height should read
  `solve.yLaunch`; new analysis code should still inspect `solve.status` and `solve.vectorLaunch` instead of
  assuming every field has a finite slope.
- Utilities: `conjugateK()`, `formatDist()`, `formatPetzvalRadius()`.

All trace/layout functions accept `zoomT`; prime lenses ignore it.

## Exact Surface Trace

Exact tracing is the only trace path. `traceRay()`, `traceRayChromatic()`, `traceSkewRay()`,
`traceSkewRayChromatic()`, and the chief-relative skew wrappers take their full positional parameters and
have no mode/options surface — every call resolves to the exact path. The legacy vertex-plane tracer has
been removed; do not reintroduce a `RayTraceOptions` parameter or a `traceMode` flag.

The public RuntimeLens trace adapters route through the prepared-state sequential/generalized engine in
`src/optics/trace/`. Surface-intersection misses are terminal in both paths, including ghost-mode diagram
traces: the result preserves already solved hits for display and diagnostics, but does not fabricate fallback
surface points after a miss. Aperture/semi-diameter clips remain distinct from misses; ghost mode can retain
real clipped hit points, and the diagram display layer renders only the first clipped span so zoomed SVG
bounds stay finite.

The exact tracer in `internal/exactSurfaceTrace.ts` exposes two entry points:

- `traceExactSurfaceStack({ x0, y0, ux0, uy0 }, options)` — slope launch, normalizes
  `[ux0, uy0, 1]` into a `Vector3` direction and applies the configured lead distance.
- `traceExactSurfaceStackVector({ origin, direction }, options)` — vector-native launch for callers that
  already have a 3D ray. Direction must be normalized. For forward-cone rays (`direction[2] > 0`) the
  per-surface bracket bound is z-projected; for grazing or backward rays the caller must supply
  `launchBoundT` so the intersection search has a finite parametric bound (typically `2 × launchRadiusMm`
  for bounding-sphere launches). The slope entry is a thin adapter that calls into this core.
- `traceToStopViaGeneralized(lens, input, stopIdx, options)` — helper for folded callers that need a stop hit.
  It runs a full generalized trace, scans `hits` for the first unclipped requested stop occurrence by default, and
  can select a later repeated stop occurrence when the optical path intentionally crosses the same stop more than once.

Both solve each ray/sag intersection via `internal/surfaceIntersection.ts` and project the outgoing ray back
to the current surface vertex plane before returning `y`/`u` or `x`/`y`/`ux`/`uy`. `surfaceIntersection.ts`
splits its finiteness predicate into `isFiniteValueEvaluation` (used by `findBracket` endpoints and samples)
and `isFiniteEvaluation` (additionally requires non-zero derivative, used inside Newton iteration) so a
grazing meridional ray whose derivative collapses to zero at the optical axis can still anchor a bracket.
The Newton seed falls back to the bracket midpoint when the z-projected guess is non-finite.

## Mirror And Folded Optical Paths

Folded systems opt into the generalized exact tracer through lens data, not through a trace-mode flag:

- `SurfaceData.innerSd` defines an annular active aperture. Rays interact only inside `[innerSd, sd]`; central holes pass
  without reflecting, refracting, or blocking.
- `SurfaceData.interaction.type` selects `"refract"`, `"reflect"`, or `"block"`. Side-specific `incidentSide` /
  `inactiveSide` controls whether a surface is active from the front, rear, both sides, ignored from the inactive side,
  or treated as a blocker from the inactive side. Reflective reference fixtures annotate inactive-side blocking
  explicitly so mirror back-side opacity is visible in the data.
- `interaction.mirrorKind` documents first-surface vs second-surface mirrors. Refractive-index transitions still come
  from the physical `nd` sequence so explicit repeated orders can enter a Mangin body, reflect, and exit through the
  same front surface.
- Second-surface mirrors also emit a diagram surface accent from `computeElementShapes()` so the SVG can draw the
  coating separately from the glass substrate. This is visual-only; tracing behavior still comes from
  `SurfaceData.interaction`.
- `interaction.normal` turns a surface into a tilted meridional plane for both intersection and SVG element rendering.
  Use it for flat fold mirrors and their passive backing planes; omit it for curved mirrors so sag-derived normals are
  used.
- `LensData.opticalPath.surfaceOrder` is an explicit label sequence and may repeat labels. This is the preferred path
  for known Mangin or Cassegrain hit orders.
- `LensData.opticalPath.mode: "auto"` uses nearest-valid-surface selection with self-hit tolerance, passive same-index
  refractive-surface skipping, image-plane termination, and `maxInteractions` protection.
- `LensData.opticalPath.imagePlane` supplies arbitrary meridional image planes. `doLayout()` reports `imgZ` from this
  plane for folded systems, and ray traces terminate at the plane rather than assuming the final right-hand BFD.

`traceRay*` remains the public caller surface for diagram rays. Focused optics tests can import
`internal/exactSurfaceTrace.ts` to inspect generalized-path details such as hit labels, terminal direction, final medium,
and whether the explicit image plane was reached.

Analysis support is deliberately incremental. Spherical aberration, pupil aberration, and mirror-safe blur/bokeh helpers
use generalized image-plane intersections where valid, folded visible off-axis geometry uses generalized stop/chief-ray
solves, and axial folded reflective systems can report first-order cardinal overlays. Complex tabs that still need a
settled folded interpretation, such as coma, distortion, vignetting, and field curvature, remain guarded in the UI until
each tab has fixture-backed validation.

## Field-Launch Convention

Every analysis launch slope flows through `projectionLaunchSlopeForField(L, fieldAngleDeg)` in
`projection.ts` rather than computing `uField = -Math.tan(θ)` inline. The helper returns
`{ uField, status: "ok" | "out-of-domain" }` and applies the shared `MAX_FIELD_LAUNCH_DEG = 89` guard so
overflow cannot leak into downstream tracers. All chief-ray, vignette, distortion, pupil-aberration, and
off-axis-aberration call sites consume the helper; loops that sample across the field skip iterations whose
`status === "out-of-domain"`.

For 2D angular sampling (the distortion field grid), `projectionLaunchVectorForFieldAngles(reference, θ_x,
θ_y)` is the 2D analog. It takes azimuthal projections of a single off-axis direction and returns
`{ fieldSlopeX, fieldSlopeY, idealImageX, idealImageY, totalFieldDeg, status }`. The Distortion tab routes
non-rectilinear projections through this helper to sample angular Cartesian grids that don't suffer the
inverse-map's π/2 rejection.

For past-cap fisheye fields (θ ≥ 89°), `boundingSphereLaunchVector(epZ, θ_x, θ_y, R)` builds a vector launch
from a bounding sphere centered near the entrance pupil. The chief-ray solver auto-dispatches to this path
via `launchSurfaceForFieldDeg(fieldDeg, projection)`, and fisheye projections use the bounding-sphere path at
every field angle. Vector-aware callers consume `solve.vectorLaunch` directly: visible off-axis and chromatic
diagram rays promote to vector launch when the declared fisheye off-axis field exceeds `tracingHalfField`;
bokeh footprint sampling, vignetting, and pupil-aberration loops trace vector rays when the scalar slope is out of
domain; the distortion field grid traces vector skew rays for fisheye angular cells beyond the slope cap.
Scalar-only logic must still check `projectionLaunchSlopeForField(...).status` before using `uField`.

## Ray Sampling Policy

Lens data owns the baseline ray fans through `rayFractions` and `offAxisFractions`. `raySampling.ts` preserves
those arrays exactly for `normal`, then derives symmetric denser viewport-only samples for `dense` and
`diagnostic`. Use the helper from display/tracing hooks instead of mutating runtime lens data or adding
density-specific arrays to lens files.

For folded systems, `obstructionAwareRayFractionsForDensity()` scans usable pupil bands so visible on-axis/off-axis rays
avoid central blockers and annular mirror holes automatically. Do not work around a secondary obstruction by hand-editing
`rayFractions`; fix the physical blocker or `innerSd` data instead.

`raySampling.ts` also exports `isHeavyLensForRayWork(L)` — the shared heaviness heuristic. `LensDiagramPanel`
uses it to downgrade interactive diagram ray density during slider drag; analysis modules use it to halve
pupil sweep / pupil-correction sample counts on heavy lenses regardless of interaction state. Reuse this
helper instead of reimplementing the criteria.

## Performance And Rollback

Stage 05 benchmark results remain as a historical record in
`agent_docs/records/optics-2-stage-05-performance.md`. The comparison harness and old engine references were removed
when the migration safe window closed. Future performance work should use focused benchmarks or production profiling
against the current `src/optics` engine; do not reintroduce an in-tree old-vs-new selector.

Current focused benchmarks live under `agent_docs/benchmarks/` and are run manually with
`npm run benchmark:optics-rendering`. Each real run writes one permanent JSON record under
`agent_docs/benchmarks/runs/`, and `agent_docs/benchmarks/benchmark-report.md` summarizes the latest 10 records. The
benchmark covers lens building, current-state layout, ray tracing, generic analysis work, static SVG rendering, and
aberration-panel data/rendering categories.

Rollback is now a normal git-level revert of the migration commit or a focused fix to the current engine with regression
coverage. There are no retained `*Legacy.ts` engine files to switch back to.

## Cardinal Elements

`cardinalElements.ts` computes the Tier 1 first-order overlay from the current focus and zoom state. It uses current
surface spacings, receives the visible `zPos`/image-plane positions from the diagram computation pipeline, and returns
all six cardinal points atomically plus EFL, BFD, FFD, Hiatus, and Total track spans. For ordinary same-index
photographic lenses, H/N and H′/N′ are marked coincident explicitly; non-unity image-side systems compute N/N′
independently. Axial folded reflective systems share the same paraxial transfer/interaction stepper with an enabled
reflect branch; folded systems with tilted image planes still return no cardinal result until a rotated-frame reporting
convention exists.

## Off-Axis Geometry Policy

Use explicit naming:

- `computeParaxialOffAxisFieldGeometry()` - first-order/paraxial geometry for compatibility and comparisons.
- `computeStateAwareOffAxisFieldGeometry()` - current focus/zoom-aware geometry using solved chief-ray behavior.
- `computeOffAxisFieldGeometry` remains as a backward-compatible alias for paraxial geometry.

Visible off-axis rays, chromatic off-axis rays, distortion, vignetting, pupil aberration, coma, and bokeh use the
state-aware solved-chief-ray path where current focus/zoom can move pupil geometry. Folded callers that need the stop
height use generalized stop tracing rather than sequential `stopAt`, and folded image-plane coordinates use the same
  plane-normal intersection helper as sequential callers. Keep paraxial behavior only where the UI or test explicitly
  needs first-order comparison.

## Perspective-Control Movement

`lensMovement.ts` models v1 PC-lens movement as a 2D meridional display/ray layer: the optical trace is computed in the
centered lens coordinates, then rendered lens geometry and ray segments are shifted/tilted relative to a fixed image
plane. This keeps zero movement byte-for-byte equivalent to the existing coordinate path while making active movement
visible in the SVG.

Only lenses that declare `perspectiveControl` get movement controls. Use `clampLensMovement()` before rendering or
sharing movement values, and keep analysis helpers centered-lens unless a future task explicitly adds full moved-optics
diagnostics.

## Lens-Group Movement

`groupMovement.ts` infers display groups from `RuntimeLens.groups` and falls back to construction groups when annotations
are absent. It samples focus and zoom states through `doLayout()`, applies the same fixed-image-plane anchoring used by
the viewer, and reports each group center as a signed axial position relative to the fixed focus plane (`0` on the image
side, negative toward the object side). The overlay consumes these pure profiles; do not move the calculations into
React components or `buildLens()`.

## Aberration Analysis

`aberrationAnalysis.ts` re-exports helpers from `src/optics/aberration/`.
Because that barrel is consumed by prepared-state analysis adapters, implementation modules under
`src/optics/aberration/` should import lower-level engine sources directly (`field/`, `layout.ts`, `rayTrace.ts`,
`trace/`, and `field/projection.ts`) instead of routing through public barrels such as `optics.ts` or `projection.ts`.
Keep those public barrels stable for app/test callers, but avoid using them inside the re-exported aberration modules so
`compat.ts` and `aberrationAnalysis.ts` do not form an initialization cycle.

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

- `computeDistortionCurve()` - 21-sample 1D distortion curve from center to edge. Residual is measured against
  the lens's declared projection (rectilinear, fisheye-equidistant, or fisheye-equisolid), not always
  rectilinear. The image-height solver uses `chiefRayImageHeightAccurate`, so it can consume vector chief rays
  when `solveChiefRay` returns a bounding-sphere launch.
- `computeDistortionFieldGrid()` - traced 2D chief-ray field grid. The internal `resolveDistortionGridLaunch`
  helper forks on `reference.projectionReference.kind`: rectilinear uses the existing image-space Cartesian
  sampler + inverse-map (bit-identical to pre-PR-6 behavior); fisheye kinds sample angular Cartesian and
  forward-map through `projectionLaunchVectorForFieldAngles`. Cells inside the slope cap use the slope/skew path;
  out-of-domain angular cells trace through `computeBoundingSphereVectorFieldLaunch` + `traceSkewRayVector`.
- `computeDistortionReference()` - near-axis reference setup; picks `rectilinear`, `fisheye-equidistant`, or
  `fisheye-equisolid` based on `L.projection.kind` via `distortionProjectionReferenceForLens()`.

The per-field pupil correction table size halves on heavy lenses (17 → 9) via `isHeavyLensForRayWork`. All
three functions accept an optional precomputed `FieldGeometryState`.

## Vignetting

`vignetteAnalysis.ts` computes relative illumination using solved chief rays, adaptive field spacing
(~3° spacing, min 7 samples), and dense meridional pupil sweeps. The per-field pupil sweep is 192 rays for
rectilinear primes and 96 for heavy lenses (fisheye, ≥32 surfaces, ≥50 mm SD, or ≥40° half-field).
`computeVignettingCurve()` accepts optional precomputed field geometry and traces `solve.vectorLaunch` for
fisheye/past-cap fields when the scalar slope helper reports `out-of-domain`.

## Pupil Aberration

`pupilAberration.ts` provides:

- `computePupilAberrationProfile()` - entrance pupil z-shift per field angle from solved/paraxial chief-ray launch ratio.
- `computeExitPupilAberrationProfile()` - exit pupil z per field angle from full-system chief-ray back-projection.
- `computeBothPupilAberrationProfiles()` - combined single-loop version that shares the per-angle bisection call.

Prefer `computeBothPupilAberrationProfiles()` in UI code. All accept optional precomputed field geometry.
Exit-pupil back-projection uses vector chief rays when available; entrance-pupil correction ratios remain tied
to finite slope launches and fall back to neutral correction when no scalar reference exists.

## Bokeh

`aberration/bokeh.ts` traces circular pupil bundles at infinity and near-focus optics:

- `computeBokehPreviewPair()` - paired infinity/near-focus entry point.
- `computeBokehPreview()` - one preview grid for a supplied image-plane position.
- `computeBokehFieldFootprint()` - per-field point cloud, surviving pupil footprint, and radial blur profile.
- `buildBokehRadialProfile()` - annular brightness profile.
- `buildBokehDensityGrid()` - retained for future full-density/PSF visualizations.

The traced image-plane point cloud is the source of truth; radial profiles are derived summaries. Off-axis bokeh
footprints use projection-aware field geometry and vector launches for fisheye/past-cap fields when available.

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
boundary-surface cross-gap overlap, conic limits, and zoom field consistency. Elements that span more than one surface
(via `fromSurface`/`toSurface`) and stops marked `stopPlacement: "inside-element"` are validated against tighter rules:
explicit spans must be ordered and confined to one `elemId`, internal stops must be flat with `nd` matching the
containing glass, and every interior surface inside a multi-surface element must itself be a flagged internal stop.

`diagramGeometry.ts` provides:

- `createCoordinateTransforms()` - optical mm to SVG coordinate mapping.
- `computeElementRenderDiagnostics()` - declared/rendered SD, trim amount, and trim cause.
- `computeElementShapes()` - closed SVG element paths using the same rim and boundary gap policy as validation; accepts an
  optional point transform for perspective-control movement.

Production tests treat excessive hidden render trim as a data-quality failure.
