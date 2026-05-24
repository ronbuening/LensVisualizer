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
| `groupMovement.ts` | Pure inferred lens-group axial movement profiles for focus, zoom, and combined overlay views. Uses fixed-image-plane anchoring and group-center positions relative to the focus plane. |
| `validateLensData.ts` | Runtime lens-data validation. |
| `projection.ts` | Projection model (rectilinear, fisheye-equidistant, fisheye-equisolid), forward/inverse maps, distortion residual reference, the `isFisheyeProjection` type guard for the recurring kind-fork, `projectionLaunchSlopeForField` (1D meridional `uField` from a field angle, with the 89° out-of-domain guard `MAX_FIELD_LAUNCH_DEG`), and its 2D companion `projectionLaunchVectorForFieldAngles` (azimuthal `(θ_x, θ_y)` → slopes + ideal image point). Also exposes the `LaunchSurface = "object-plane" \| "bounding-sphere"` discriminator, `launchSurfaceForFieldDeg(fieldDeg, projection)` selector, `ABSOLUTE_HALF_FIELD_CEILING`, `TRACING_SAFETY_FACTOR`, and `boundingSphereLaunchVector(epZ, θ_x, θ_y, R)` geometric helper for past-cap fisheye fields. |
| `chiefRayDiagnostics.ts` | Structured counter for chief-ray solve outcomes. `recordChiefRayStatus(lensKey, status)` is wired into `solveChiefRay`; `getChiefRayDiagnostics()` returns a `Map<lensKey, { converged, paraxial-fallback, bracket-failed, out-of-domain }>` snapshot for audit scripts. Dev-only `console.warn` for fallbacks is preserved. |
| `raySampling.ts` | Viewport ray-density sampling for normal/dense/diagnostic ray fans, plus `isHeavyLensForRayWork(L)` — the shared heuristic for heavy-lens density downgrades (fisheye OR `N ≥ 32` OR `maxSD ≥ 50 mm` OR `halfField ≥ 40°`). |
| `lcaScaling.ts` | Fixed-reference LCA bar offset scaling. |
| `analysisJobs.ts` | Analysis facade. Currently synchronous; prepared for module-worker migration. |
| `cardinalElements.ts` | State-aware first-order/cardinal element calculations for F/F′, H/H′, N/N′ and axial spans. |
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
- Zoom metadata: positions, EFLs, EPs, half-fields, tracing half-fields, y-ratios, and back focal distances.
- Stop data: physical stop SD, blade stub fraction, stop housing SD, and f-stop series.
- Element/group/doublet/aspheric/variable maps for runtime lookup.

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
  the bounding-sphere code on every fisheye solve in the catalog (parity tests prove bit-identical results
  vs object-plane at θ < 89°). Rectilinear projections keep cap-based dispatch: object-plane below
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

The exact tracer in `internal/exactSurfaceTrace.ts` exposes two entry points:

- `traceExactSurfaceStack({ x0, y0, ux0, uy0 }, options)` — slope launch, normalizes
  `[ux0, uy0, 1]` into a `Vector3` direction and applies the configured lead distance.
- `traceExactSurfaceStackVector({ origin, direction }, options)` — vector-native launch for callers that
  already have a 3D ray. Direction must be normalized. For forward-cone rays (`direction[2] > 0`) the
  per-surface bracket bound is z-projected; for grazing or backward rays the caller must supply
  `launchBoundT` so the intersection search has a finite parametric bound (typically `2 × launchRadiusMm`
  for bounding-sphere launches). The slope entry is a thin adapter that calls into this core.

Both solve each ray/sag intersection via `internal/surfaceIntersection.ts` and project the outgoing ray back
to the current surface vertex plane before returning `y`/`u` or `x`/`y`/`ux`/`uy`. `surfaceIntersection.ts`
splits its finiteness predicate into `isFiniteValueEvaluation` (used by `findBracket` endpoints and samples)
and `isFiniteEvaluation` (additionally requires non-zero derivative, used inside Newton iteration) so a
grazing meridional ray whose derivative collapses to zero at the optical axis can still anchor a bracket.
The Newton seed falls back to the bracket midpoint when the z-projected guess is non-finite.

## Catadioptric Trace

Catadioptric (mirror) lenses are first-class. The exact and paraxial tracers both iterate a **step
sequence** — an ordered list of `{ surfaceIdx, action: "refract" | "reflect", defaultNextN }` entries —
rather than walking `lens.S` directly. For ordinary refractive lenses the step sequence is the identity
`[{0,refract}, {1,refract}, ...]` and per-step behavior reduces to the pre-refactor loop byte-identically.

`buildTraceStepSequence(lens, tracedCount)` builds the sequence:

1. **No reflective surfaces** — identity sequence.
2. **One reflective surface, no explicit `traceSequence`** — inferred forward-reflect-backward path:
   refract through surfaces `0..k-1`, reflect at `k`, refract back through surfaces `k-1..0`.
3. **`lens.traceSequence` set** — walk the explicit label-resolved indices. The same index may repeat;
   direction tracking flips a `forward` flag at every reflect step so refract steps after a reflection
   pick the medium on the −z side of the surface (i.e. `S[i-1].nd` instead of `S[i].nd`).
4. **Multiple reflective surfaces without an explicit `traceSequence`** — throws. Catadioptric lenses
   with two or more mirrors must author the explicit path.

Per-step body in `traceExactSurfaceStackVector` and `traceSurfacesParaxial`:

- **Refract step.** Standard Snell's-law refraction with `defaultNextN` as the target index.
  `refractDirection` auto-flips the surface normal when `direction · normal < 0` so post-reflection
  backward rays refract in the correct z-direction.
- **Reflect step (`kind: "first"` or `"second"`).** Apply `reflectDirection(direction, normal)`. The
  refractive index is unchanged for a specular reflection. Direction's z-component flips.
- **Reflect step with `region`.** Radial check first: when the hit point's radius falls outside the
  silvered region the surface transmits instead of reflects. The transmit branch refracts using
  `surface.nd` (forward) or `S[surfaceIdx-1].nd` (backward) per the current direction sign.
- **Reflect step with `opaqueFrom`.** Side-aware absorption: inside the silvered region, a forward ray
  is absorbed when `opaqueFrom === "front"` (or backward ray when `"back"`). Trace clips with
  `failureReason: "absorbed"`.

The paraxial tracer uses the same step shape plus a signed `transferD` (positive for forward steps,
negative for the backward walk after reflection). Reflection is encoded by the standard `n → −n` trick:
the formula `u' = (n·u − y·(n' − n)/R) / n'` with `n' = −n` reduces to `u' = −u − 2y/R`. Subsequent
backward-direction refract steps consume the signed `n` so the medium transitions remain consistent;
the public return restores `n` to its magnitude. `buildLens` stores
`L.imagePlaneZ = z_terminal + (−y/u)` from this trace, signed — negative when the image forms in front
of the lens for a backward-image catadioptric.

For surfaces outside any element span (pure-mirror lenses where `elements: []`), `validateLensData`
allows the empty `elements` array provided at least one surface has `reflect` set.

## Annular Entrance Pupil

Catadioptric lenses declare `entrancePupilObstructionSD` (mm) to mark the inner radius of an annular
entrance pupil. `buildLens` carries this onto `L.EP.epObstructionSD`; the helpers
`rayHeightForPupilFraction` (1-D pupil fractions) and `remapCircularPupilToAnnulus` (2-D pupil samples)
redistribute pupil sampling into the unobstructed band `[epObstructionSD, epSD]`. The vignetting,
bokeh, and MTF analyses consume these helpers so per-lens ray fans, vignetting curves, bokeh discs, and
diffraction MTF all reflect the annular pupil instead of treating the obstructed inner zone as part of
the usable aperture.

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
vignetting and pupil-aberration loops trace vector rays when the scalar slope is out of domain; the distortion
field grid traces vector skew rays for fisheye angular cells beyond the slope cap. Scalar-only logic must still
check `projectionLaunchSlopeForField(...).status` before using `uField`.

## Ray Sampling Policy

Lens data owns the baseline ray fans through `rayFractions` and `offAxisFractions`. `raySampling.ts` preserves
those arrays exactly for `normal`, then derives symmetric denser viewport-only samples for `dense` and
`diagnostic`. Use the helper from display/tracing hooks instead of mutating runtime lens data or adding
density-specific arrays to lens files.

`raySampling.ts` also exports `isHeavyLensForRayWork(L)` — the shared heaviness heuristic. `LensDiagramPanel`
uses it to downgrade interactive diagram ray density during slider drag; analysis modules use it to halve
pupil sweep / pupil-correction sample counts on heavy lenses regardless of interaction state. Reuse this
helper instead of reimplementing the criteria.

## Cardinal Elements

`cardinalElements.ts` computes the Tier 1 first-order overlay from the current focus and zoom state. It uses current
surface spacings, receives the visible `zPos`/image-plane positions from the diagram computation pipeline, and returns
all six cardinal points atomically plus EFL, BFD, FFD, Hiatus, and Total track spans. For ordinary same-index
photographic lenses, H/N and H′/N′ are marked coincident explicitly; non-unity image-side systems compute N/N′
independently.

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

## Lens-Group Movement

`groupMovement.ts` infers display groups from `RuntimeLens.groups` and falls back to construction groups when annotations
are absent. It samples focus and zoom states through `doLayout()`, applies the same fixed-image-plane anchoring used by
the viewer, and reports each group center as a signed axial position relative to the fixed focus plane (`0` on the image
side, negative toward the object side). The overlay consumes these pure profiles; do not move the calculations into
React components or `buildLens()`.

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

When `L.EP.epObstructionSD > 0` the pupil sweep redistributes its 192 (or 96) samples across the annular
band via `rayHeightForPupilFraction` so a catadioptric lens's on-axis transmission reflects the actual
unobstructed-annulus flux rather than the deflated baseline you'd get from counting central samples as
clipped.

## MTF

`mtfAnalysis.ts` computes diffraction-limited MTF curves at the current working F-number for three
Fraunhofer wavelengths (F=486.1 nm, d=587.6 nm, C=656.3 nm). The pure-math kernel
`aberration/diffractionMTF.ts` exposes `circularAiryMTF(nu)` and `annularAiryMTF(nu, epsilon)`; the
analysis wraps them with per-channel cutoff frequencies `nu_c = 1 / (λ · F#)`. For catadioptric lenses
`L.EP.epObstructionSD / L.EP.epSD` is fed to `annularAiryMTF` as `epsilon`, picking up the annular
mid-frequency suppression that gives mirror telephotos their characteristic MTF rolloff. The current
implementation is the diffraction-limit upper bound — aberration-induced degradation (PSF → FFT → OTF)
is a separate compute path.

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
