# Optics 2 Engine Migration Plan

This document is a step-by-step plan for rewriting the LensVisualizer optics engine in a new `src/optics-2`
folder, running it alongside the current `src/optics` implementation, preserving the existing lens-data and UI
contracts during the transition, and finally migrating the app to the new engine.

The plan is intentionally implementation-oriented. It starts from first principles, then maps those requirements onto
the current repository surface area so the rewrite can be efficient, readable, and DRY without forcing a disruptive
catalog or UI rewrite.

## Reviewed Inputs

The plan is based on the current project documentation and source layout, including:

- `agent_docs/architecture/optics-engine.md`
- `agent_docs/architecture/viewer-and-diagram.md`
- `agent_docs/architecture/ui-components.md`
- `agent_docs/architecture/testing.md`
- `agent_docs/architecture/public-functions.md`
- `agent_docs/architecture/program-flow.md`
- `agent_docs/gotchas.md`
- `agent_docs/code_conventions.md`
- `src/lens-data/LENS_DATA_SPEC.md`
- `src/lens-data/TEMPLATE.data.ts.template`
- `src/types/optics.ts`
- `src/optics/**`
- `src/components/hooks/useLensComputation.ts`
- `src/components/hooks/useRayTracing.ts`
- `src/components/hooks/useOnAxisRays.ts`
- `src/components/hooks/useOffAxisRays.ts`
- `src/components/hooks/useChromaticRays.ts`
- `src/components/hooks/offAxisRayUtils.ts`
- `src/components/layout/lensDiagram/AnalysisDrawerContent.tsx`
- `src/components/layout/lensDiagram/analysisTabRenderers.tsx`
- Representative data files:
  - `src/lens-data/nikon/NikonNikkorZ50f18S.data.ts`
  - `src/lens-data/canon/CanonEF815mmf4LFisheye.data.ts`
  - `src/lens-data/nikon/NikonNikkorPCE19mmf4E.data.ts`
  - `src/lens-data/minolta/MinoltaVarisoft85mmf28.data.ts`
  - `src/lens-data/reference/ReferenceNewtonianSideFocus.data.ts`

## Goals

1. Build a new, efficient optics engine in `src/optics-2` while the existing engine remains available.
2. Preserve the existing lens-data files, glass catalog, generated catalog metadata, UI controls, and analysis drawer
   behavior during the parallel phase.
3. Replace repeated optical calculations with reusable prepared state and batch tracing primitives.
4. Make vector tracing, image-plane handling, aperture clipping, folded paths, chromatic indices, and diagnostics
   explicit in the core model.
5. Keep public compatibility surfaces stable until each caller is deliberately migrated.
6. Improve folded/mirror safety by making generalized path and image-plane semantics available to every analysis helper.
7. Finish with a clean migration from `src/optics` to the new implementation and removal of legacy internals.

## Non-Goals

- Do not change the `*.data.ts` lens file format during the initial rewrite.
- Do not require lens authors to restate glass, asphere, variable spacing, projection, or folded-path metadata.
- Do not add canvas rendering for lens diagrams. The app remains inline SVG for diagram output.
- Do not add a second trace mode to lens data or UI state. Exact surface tracing remains the only trace path.
- Do not move slider-dependent analysis into lens construction.
- Do not make folded tabs appear as supported until the specific tab uses generalized stop/image-plane math and has
  fixture-backed tests.

## Current Engine Surface Area

The existing engine exposes a broad project-internal API from `src/optics/optics.ts` and focused modules. The rewrite
must account for these surfaces, even when the new internals are structured differently.

### Lens Data And Runtime Objects

Existing lens files provide:

- Identity, maker, SEO/catalog metadata, mount ids, image-format ids, element/group counts, and visibility.
- Front-to-rear physical `surfaces` with `R`, `d`, `nd`, `elemId`, `sd`, optional `innerSd`, `stopPlacement`, and
  optional `interaction`.
- Physical `elements` with `nd`, `vd`, `glass`, `dPgF`, `nC`, `nF`, `ng`, roles, cementing, and explicit spans.
- `asph` coefficients keyed by surface label.
- Focus, zoom, and independent aberration-control variable gaps.
- Projection metadata for rectilinear overrides and fisheye projections.
- Folded-path metadata through `opticalPath`, repeated `surfaceOrder`, auto path mode, and explicit image planes.
- Perspective-control movement metadata.
- Display tuning and lens-authored ray fan fractions.

The current `RuntimeLens` stores both physical data and derived runtime state: label maps, element spans, dispersion
closures, resolved path/image-plane metadata, stop data, EFL, pupils, half fields, Petzval, SVG scaling constants,
ray heights, zoom arrays, and layout labels.

### Current Public Optics Calls

Important public or semi-public calls include:

- Lens construction: `buildLens`, `validateLensData`.
- Layout and current state: `doLayout`, `thick`, `stateSurfaces`, `eflAtZoom`, `eflAtFocus`, `effectiveFNumber`.
- Surface math: `sag`, `conicPolySag`, `sagSlopeRaw`, `renderSag`, `sagSlope`, trim helpers.
- Field geometry: `computeFieldGeometryAtState`, `computeAnalysisFieldGeometryAtState`, `entrancePupilAtState`.
- Chief rays and projection inversion: `solveChiefRay`, `traceChiefRayAtAngle`, `solveFieldAngleForImageHeight`,
  `solveFieldAngleForImageHeightAccurate`.
- Ray tracing: `traceRay`, `traceRayChromatic`, `traceRayVector`, `traceRayVectorChromatic`, `traceSkewRay`,
  `traceSkewRayVector`, `traceToImage`.
- Sampling and chromatic summaries: `sampleCircularPupil`, `sampleOrthogonalPupilFan`, `computeChromaticSpread`.
- Pure analysis: aberrations, distortion, vignetting, pupils, bokeh, cardinal elements, group movement, aspheric
  comparison, LCA scaling.
- Diagram geometry: coordinate transforms, element shapes, render diagnostics, aspheric paths, mirror-coating accents.

### UI Consumption Pattern

`useLensComputation` builds or receives a `RuntimeLens`, computes layout once for the current slider state, creates SVG
coordinate transforms, builds element shapes, computes aperture/pupil data, field geometry, cardinal overlays, readouts,
and movement transforms.

`useRayTracing` delegates to on-axis, off-axis, and chromatic hooks. Those hooks consume only runtime lens data, current
state, `zPos`, stop size, entrance-pupil size, sampling density, and optional movement transforms.

`AnalysisDrawerContent` defers slider-derived inputs, freezes settled analysis inputs during drag, shows fisheye and
folded notices, and gates folded tabs whose math still assumes sequential front-to-rear systems.

This means `optics-2` should not require React-specific concepts. The UI can migrate by swapping pure functions and
compatibility types.

## First-Principles Engine Requirements

The new engine should model the optical problem from a small set of durable primitives.

### 1. Prescription Input

Required capabilities:

- Accept every existing `LensData` and `LensDataInput` feature.
- Preserve physical front-to-rear surface order as authoring order.
- Preserve label-based references for aspheres, variable gaps, annotations, folded hit order, and image planes.
- Preserve all current validation rules and error wording where tests depend on it.
- Preserve catalog auto-discovery. No manual imports of lens data.

Implementation requirement:

- Build a normalization layer that transforms existing `LensData` into a compact `EngineLens` without changing lens
  files.
- Keep the existing `RuntimeLens` shape available through a compatibility adapter while callers migrate.

### 2. Coordinate Spaces And Units

Required capabilities:

- Use millimeters internally.
- Represent rays as 3D vectors even when a caller uses meridional slopes.
- Represent ordinary image planes, tilted folded image planes, and side-focus image planes with the same plane type.
- Keep SVG coordinates outside the physical ray trace.
- Make movement transforms a display layer unless a future moved-optics analysis explicitly opts in.

Implementation requirement:

- Define explicit coordinate types for object/image space:

```ts
type Vec3 = readonly [number, number, number];

interface Plane3 {
  point: Vec3;
  normal: Vec3;
  label: string;
}

interface Ray3 {
  origin: Vec3;
  direction: Vec3; // normalized
}
```

### 3. Surface Geometry

Required capabilities:

- Spherical and flat surfaces.
- Conic plus even polynomial aspheres with A4 through A20.
- Tilted meridional planes through `interaction.normal`.
- Sag, slope, normal, finite-domain checks, and render diagnostics from one shared implementation.
- Consistent `FLAT_R_THRESHOLD`, conic-limit, rim-slope, and gap-intrusion policies.

Implementation requirement:

- Compile each surface into a `SurfaceProfile` that owns sag, slope, normal, and intersection hints.
- Use the same compiled profile for validation, tracing, and diagram geometry.
- Avoid duplicating sag or slope formulas in build, trace, diagram, and validation modules.

### 4. Media And Dispersion

Required capabilities:

- Air and glass media.
- Existing d-line `nd` behavior.
- Existing chromatic channel behavior for R, G, B, and V.
- Existing dispersion cascade: catalog Sellmeier, measured line indices, dPgF-corrected Abbe, plain Abbe, constant.
- Existing glass catalog aliases and mismatch safety checks.

Implementation requirement:

- Reuse `glassCatalog.ts`, `glassCatalogData.ts`, and `glassCatalogAliases.ts` during the parallel phase.
- Compile per-surface/per-channel index functions once during lens normalization.
- Keep chromatic ray trace hot loops free of repeated glass string resolution.

### 5. State-Dependent Geometry

Required capabilities:

- Resolve focus, zoom, and aberration-control variable gaps.
- Support prime and zoom `VarRange` formats.
- Support zoom interpolation for EFL, pupils, half fields, f-number, and projection metadata.
- Keep `buildLens()` state-independent.
- Compute state surfaces and z positions once per slider state and reuse them.

Implementation requirement:

- Introduce an immutable prepared state object:

```ts
interface EngineState {
  lens: EngineLens;
  focusT: number;
  zoomT: number;
  aberrationT: number;
  surfaces: readonly CompiledStateSurface[];
  z: readonly number[];
  imagePlane: Plane3;
  imgZ: number;
  cacheKey: string;
}
```

Callers should pass `EngineState` into tracing, fields, pupils, and analysis whenever they already have it.
Compatibility wrappers can accept the old `(focusT, zoomT, L)` arguments and internally prepare the state.

### 6. Apertures, Stops, And Blocking

Required capabilities:

- Physical stop semi-diameter and stop-down scaling.
- Surface semi-diameter clipping with `clipMargin`.
- Annular active aperture through `innerSd`.
- Block surfaces and inactive-side mirror blocking.
- Obstruction-aware ray sampling for folded systems.
- Ghost ray output for clipped diagram rays.

Implementation requirement:

- Centralize aperture evaluation:

```ts
type ApertureState = "inside" | "inside-hole" | "outside";
```

Every trace, sampling, and diagnostic caller should use this single predicate.

### 7. Path And Interaction Model

Required capabilities:

- Ordinary sequential refractive systems.
- Explicit folded hit orders that may repeat labels.
- Auto folded paths using nearest valid next surface.
- Reflection, refraction, and block interactions.
- Side-specific activation through `incidentSide` and `inactiveSide`.
- First-surface and second-surface mirror semantics.
- Arbitrary image-plane termination.
- Stop tracing through generalized paths.
- Diagnostics for hits, clips, skipped auto candidates, loops, failures, final medium, and image-plane reachability.

Implementation requirement:

- Use one vector-native path engine for all systems.
- Treat sequential front-to-rear systems as a fast path of the same core model, not a separate conceptual tracer.
- Keep a specialized fast iterator for ordinary sequential lenses if benchmarks show it matters, but make it an
  implementation detail behind the same trace result type.

### 8. Ray Launch And Projection

Required capabilities:

- Rectilinear field launches.
- Fisheye-equidistant and fisheye-equisolid projection references.
- Published coverage overrides for unusual rectilinear ultrawides.
- Safe slope launch guard at `MAX_FIELD_LAUNCH_DEG`.
- Bounding-sphere launches for fisheye and past-cap fields.
- 2D angular launches for distortion field grids.
- Chief-ray solving with typed statuses and diagnostics.

Implementation requirement:

- Keep all launch calculations in `optics-2/projection`.
- Ban inline `Math.tan(field)` in analysis and diagram code.
- Make scalar slope launches an adapter over the vector launch model where possible.

### 9. Ray Trace Results

Required capabilities:

- Diagram-ready meridional points.
- Full vector hit diagnostics for tests and folded analysis.
- Final ray slope, final point, final medium, clipped status, clip reasons, and image-plane reachability.
- Chromatic channel tracing.
- Skew ray tracing for coma, bokeh, field curvature, distortion grid, and pupil analyses.

Implementation requirement:

- Split core and compatibility result shapes:

```ts
interface EngineTraceResult {
  ray: Ray3;
  hits: readonly TraceHit[];
  terminalPoint: Vec3;
  terminalDirection: Vec3;
  finalMedium: number;
  status: "ok" | "clipped" | "failed";
  reachedImagePlane: boolean;
  diagnostics: TraceDiagnostics;
}

interface LegacyRayTraceResult {
  pts: number[][];
  ghostPts: number[][];
  y: number;
  u: number;
  clipped: boolean;
  reachedImagePlane?: boolean;
}
```

The new engine should keep rich data internally and project to legacy shapes only at compatibility boundaries.

### 10. First-Order And Pupil Calculations

Required capabilities:

- Paraxial transfer/refraction for ordinary systems.
- Reflective paraxial support for axial folded mirror systems.
- EFL, BFD, FFD, principal points, nodal points, and total track spans.
- Entrance and exit pupil positions and semi-diameters.
- Current-state field geometry and current-state entrance pupil.
- Dynamic EFL and effective f-number at focus.

Implementation requirement:

- Define a small first-order module that produces a transfer matrix and named derived values.
- Reuse it in lens construction, field geometry, cardinal overlays, focus breathing, and pupil code.
- Keep real-ray correction paths separate but fed by the same prepared state.

### 11. Analysis Features

The new engine must preserve existing analysis behavior before improving it.

Required parity:

- Spherical aberration profile and blur character.
- Field curvature and astigmatism.
- Meridional coma, sagittal coma, coma previews, and point cloud previews.
- Bokeh best focus, preview pair, density grid, and radial profile.
- Distortion curve and traced 2D field grid.
- Vignetting and relative illumination.
- Entrance and exit pupil aberration profiles.
- Focus breathing readouts.
- Chromatic spread and LCA/TCA data.
- Aspheric best-fit-sphere comparison.
- Group movement profiles.
- Cardinal overlays.

Improvement path:

- Move analysis to prepared state objects so repeated calls do not rebuild surface arrays or recompute z positions.
- Use batch ray fan tracing for pupil sweeps, chromatic fans, distortion grids, and bokeh point clouds.
- Make folded image-plane coordinates available to all analysis helpers before enabling folded support tab by tab.
- Keep analysis jobs behind a facade so worker migration remains possible.

### 12. Diagram Geometry

Required capabilities:

- Coordinate transforms for SVG output.
- Element paths, aspheric overlays, surface accent paths, annular even-odd fills, and tilted flat mirror rendering.
- Render diagnostics for hidden trims.
- Aperture stop blade/housing geometry.
- Ray polylines with ghost segments.
- LCA, Petzval, bokeh, group movement, and cardinal overlay input data.

Implementation requirement:

- Keep diagram geometry pure and SVG-oriented.
- Share surface profile math with trace and validation.
- Keep `computeElementShapes` compatibility until `DiagramSVG` no longer depends on legacy types.

### 13. Performance And Reliability

Required capabilities:

- Avoid repeated state surface construction in nested analysis loops.
- Avoid repeated glass resolution in chromatic loops.
- Avoid repeated chief-ray solves for identical field/state inputs.
- Avoid excess allocations in high-volume ray sweeps.
- Keep diagnostics available without making normal rendering noisy.

Implementation requirement:

- Add explicit prepared-state caches keyed by lens identity and slider state.
- Add batch tracing entry points:

```ts
traceRayBatch(state, rays, options)
traceChromaticBatch(state, rays, channels, options)
samplePupilBatch(state, field, pupilSamples, options)
```

- Keep caches scoped to lens/state objects or explicit cache instances. Do not add hidden mutable optical state.

## Detailed Engine Requirement Specifications

The sections below make the first-principles requirements actionable. Each requirement has a stable id so later
implementation PRs can cite the exact contract they satisfy.

### R1. Prescription Input Specification

Purpose: `optics-2` must consume every existing lens file without requiring authoring changes.

Inputs:

- A fully defaulted `LensData` object from the existing catalog pipeline.
- Existing default values from `src/lens-data/defaults.ts`.
- Existing shared types from `src/types/optics.ts`.
- Existing canonical mount and image-format ids from `src/utils/catalog/lensTaxonomy.ts`.

Outputs:

- An immutable `EngineLens` for new engine-native code.
- A legacy-compatible immutable `RuntimeLens` through `buildLens2`.
- A validation report or thrown error with all detected data issues, matching current `buildLens` behavior.

Normalization rules:

1. Copy input surfaces before any runtime mutation. Never mutate `data.surfaces`.
2. Build a single `labelToSurfaceIndex` map from physical front-to-rear surface order.
3. Resolve all label-keyed objects through that map:
   - `asph`.
   - `var`.
   - `varLabels`.
   - `aberrationControl.var`.
   - `aberrationControl.varLabels`.
   - `groups`.
   - `doublets`.
   - `opticalPath.surfaceOrder`.
4. Preserve repeated labels in `opticalPath.surfaceOrder` after resolving them to indexes.
5. Preserve physical surface order even for folded systems. Hit order belongs only to path metadata.
6. Default missing `projection` to `{ kind: "rectilinear" }`.
7. Default missing `opticalPath` to sequential front-to-rear behavior.
8. Resolve missing `opticalPath.imagePlane` to the ordinary image plane at final axial track.
9. Normalize all image-plane and interaction normals to unit length.
10. Treat `SurfaceData.interaction` as `{ type: "refract" }` when omitted.
11. Preserve `stopPlacement: "inside-element"` semantics exactly.
12. Preserve the current rule that ordinary refractive lenses omit `opticalPath`, `interaction`, and `innerSd` unless
    the physical design needs them.

Required `EngineLens` fields:

```ts
interface EngineLens {
  key: string;
  source: LensData;
  surfaces: readonly CompiledSurface[];
  elements: readonly CompiledElement[];
  labelToSurfaceIndex: Readonly<Record<string, number>>;
  stop: StopSpec;
  projection: ProjectionSpec;
  opticalPath: PathSpec;
  imagePlane: Plane3;
  variables: VariableSpec;
  aberrationControl: AberrationControlSpec | null;
  annotations: AnnotationSpec;
  dispersion: readonly SurfaceDispersion[];
  display: DisplaySpec;
  authoredRayFans: AuthoredRayFans;
  flags: EngineLensFlags;
}
```

Acceptance criteria:

- Every file matched by `src/lens-data/**/*.data.ts` builds through `buildLens2`.
- `buildLens2(LENS_CATALOG[key])` produces the same visible runtime constants as `buildLens` for representative lenses.
- Hidden reference fixtures under `src/lens-data/reference/` build without special-case code.
- Existing lens files do not need edits, imports, or compatibility shims.

Regression tests:

- Catalog-wide build test for visible and hidden lenses.
- Unit tests for label resolution, repeated folded path labels, missing projection defaults, image-plane defaults, and
  normal normalization.
- Parity tests for `RuntimeLens` fields that UI code reads directly.

### R2. Coordinate Spaces And Units Specification

Purpose: all optical calculations must use explicit physical coordinates, while SVG coordinates remain a rendering
concern.

Coordinate conventions:

- Units are millimeters.
- The optical axis is the `z` axis.
- `x` is the sagittal transverse axis.
- `y` is the meridional transverse axis.
- Ordinary sequential lenses receive light from lower `z` toward higher `z`.
- A meridional slope `u` maps to a vector direction `[0, u, 1] / hypot(0, u, 1)`.
- A skew slope pair `(ux, uy)` maps to `[ux, uy, 1] / hypot(ux, uy, 1)`.
- SVG `x/y` conversion is not part of the trace core.

Required types:

```ts
type Vec3 = readonly [number, number, number];

interface Ray3 {
  origin: Vec3;
  direction: Vec3;
}

interface Plane3 {
  point: Vec3;
  normal: Vec3;
  label: string;
}

interface PlaneHit {
  point: Vec3;
  t: number;
}
```

Invariants:

- Every `Ray3.direction` entering the trace core must be normalized.
- Every `Plane3.normal` must be normalized during lens normalization.
- Functions accepting untrusted vectors must either normalize them or return an explicit failure.
- Image-plane intersection must reject parallel rays and intersections at or behind the current origin.
- The image-plane tangent coordinate used by folded analysis must be derived from the plane normal, not from global `y`
  assumptions.

Compatibility rules:

- Legacy meridional APIs keep accepting `(y0, u0)`.
- Legacy skew APIs keep accepting `(x0, y0, ux0, uy0)`.
- Legacy diagram result points remain `[z, y]` arrays.
- Perspective-control movement continues to transform display/ray output after centered-lens tracing.

Acceptance criteria:

- Ordinary sequential and folded image-plane trace endpoints project to the same legacy `[z, y]` points as the current
  engine.
- Vector and slope launches match within tolerance for fields below the slope-launch cap.
- Fisheye bounding-sphere launches do not need a slope representation.

### R3. Surface Geometry Specification

Purpose: one shared surface-profile implementation must serve validation, tracing, diagram rendering, and analysis.

Supported profiles:

- Flat spherical surface: `abs(R) > FLAT_R_THRESHOLD`.
- Spherical surface.
- Conic plus even polynomial asphere.
- Tilted meridional plane through `interaction.normal`.

Constants:

- Preserve `FLAT_R_THRESHOLD = 1e10` unless a dedicated parity PR changes it.
- Preserve the rim-slope policy derived from `MAX_RIM_SLOPE_TAN`.
- Preserve render subdivision count parity until visual tests approve a change.

Required profile API:

```ts
interface SurfaceProfile {
  kind: "flat" | "spherical" | "aspheric" | "tilted-plane";
  sag(radius: number): number;
  slope(radius: number): number;
  normalAt(point: Vec3, vertexZ: number): Vec3;
  pointAt(vertexZ: number, x: number, y: number): Vec3;
  finiteRadiusLimit(): number | null;
}
```

Formula requirements:

- Spherical sag must match current `sag(h, R)`.
- Aspheric sag must match current `conicPolySag(h, R, coeffs)`.
- Aspheric slope must match current `sagSlopeRaw(h, R, coeffs)`.
- The conic denominator guard must preserve current behavior near invalid domains.
- Tilted-plane `pointAt` must satisfy `normal dot (point - planePoint) = 0`.
- Normals must be unit vectors.

Intersection requirements:

- Flat and tilted-plane surfaces use direct plane intersection.
- Curved surfaces use bracketed root finding plus safeguarded Newton iteration.
- Failure reasons must be typed:
  - `invalid-ray-direction`.
  - `invalid-bounds`.
  - `no-bracket`.
  - `no-converged-intersection`.
- The current split between finite value evaluation and finite derivative evaluation must be preserved so grazing
  meridional rays can still anchor brackets.

Render-diagnostic requirements:

- Conic-limit trimming, slope trimming, and cross-gap intrusion trimming must share profile functions.
- A production element hidden trim greater than the existing tolerance must remain test-visible.
- Second-surface mirror coating accents must remain render-only.

Acceptance criteria:

- Sag and slope parity for spherical, aspheric, flat, and near-conic-limit samples.
- Intersection parity for forward, grazing, skew, and bounding-sphere rays.
- Diagram shape parity for ordinary, annular, aspheric, and tilted mirror fixtures.

### R4. Media And Dispersion Specification

Purpose: chromatic behavior must remain compatible with existing lens data and glass catalog sources.

Inputs:

- `SurfaceData.nd`.
- `ElementData.vd`.
- `ElementData.glass`.
- `ElementData.dPgF`, `nC`, `nF`, and `ng`.
- Existing glass catalog resolver and Sellmeier evaluator.

Channel requirements:

- `R` maps to the C line, 656.3 nm.
- `G` maps to the d line, 587.6 nm.
- `B` maps to the F line, 486.1 nm.
- `V` maps to the g line, 435.8 nm.

Resolution cascade:

1. Air surfaces return constant `1.0`.
2. Catalog Sellmeier is used when `glass` resolves and catalog d-line `nd` agrees with the stored surface `nd` within
   the current tolerance.
3. Measured `nC` and `nF` line indices are used when both are present; measured `ng` is used for `V` when present.
4. dPgF-corrected Abbe approximation is used when `vd` is present.
5. Constant d-line `nd` is used when no dispersion data exists.

Hot-path requirements:

- Glass string resolution happens during lens normalization, not per ray.
- Per-surface channel lookup is an array or closure lookup with no catalog access.
- Chromatic trace APIs accept a channel and pass a per-surface index resolver into the core trace.

Diagnostics:

- Preserve `DispersionQuality` values: `air`, `sellmeier`, `lineIndices`, `abbe`, `constant`.
- Preserve whole-lens weakest-link summary behavior.
- Preserve catalog mismatch scan behavior.

Acceptance criteria:

- Existing glass report tests pass.
- Chromatic fan and LCA/TCA parity holds for at least one Sellmeier lens, one line-index lens, one Abbe fallback lens,
  and one constant fallback surface.

### R5. State-Dependent Geometry Specification

Purpose: current focus, zoom, and aberration-control state must be computed once, then reused.

Inputs:

- `EngineLens`.
- `focusT` in `[0, 1]`.
- `zoomT` in `[0, 1]`.
- `aberrationT` in `[0, 1]`.

Variable thickness rules:

- Prime variable gap `[dInfinity, dClose]` resolves as `dInfinity + (dClose - dInfinity) * focusT`.
- Zoom variable gap `[[wideInf, wideClose], ...]` first interpolates infinity and close values by `zoomT`, then
  interpolates between them by `focusT`.
- Aberration-control thickness resolves with the same rule, using `aberrationT`.
- Combined controlled thickness equals focus-resolved thickness plus aberration delta from base thickness.
- Negative resolved thickness is invalid and must be caught by validation or return a typed preparation failure.

Prepared state fields:

```ts
interface PreparedOpticalState {
  lens: EngineLens;
  focusT: number;
  zoomT: number;
  aberrationT: number;
  surfaces: readonly CompiledStateSurface[];
  z: readonly number[];
  imagePlane: Plane3;
  imgZ: number;
  totalTrack: number;
  cacheKey: string;
}
```

State cache requirements:

- Cache keys include lens identity plus normalized `focusT`, `zoomT`, and `aberrationT`.
- Cache values are immutable.
- Cache lookup is optional; deterministic functions must work without a cache.
- WeakMaps keyed by `RuntimeLens` or `EngineLens` are acceptable.
- No cache may depend on React component lifecycle.

Compatibility requirements:

- `doLayout(focusT, zoomT, L, aberrationT)` compatibility returns the same `z`, `th`, and `imgZ`.
- `thick(i, focusT, zoomT, L, aberrationT)` compatibility returns the prepared state's `surfaces[i].d`.
- Zoom helper outputs match current interpolation.

Acceptance criteria:

- Focus, zoom, and aberration-control readouts match current UI values.
- Repeated ray traces for the same state do not rebuild state surfaces in engine-native code.

### R6. Apertures, Stops, And Blocking Specification

Purpose: every trace and sampler must interpret stops, semi-diameters, annular holes, and blockers identically.

Required types:

```ts
type ApertureState = "inside" | "inside-hole" | "outside";

interface ApertureEvaluation {
  state: ApertureState;
  radius: number;
  semiDiameter: number | null;
  innerSemiDiameter: number;
}
```

Evaluation order:

1. Determine the active semi-diameter:
   - Use `stopSemiDiameter` for the stop surface when supplied.
   - Otherwise use `surface.sd * clipMargin`.
   - Use `null` only for synthetic surfaces with no aperture.
2. If active semi-diameter exists and radius exceeds it within tolerance, state is `outside`.
3. If `innerSd > 0` and radius is below the inner radius within tolerance, state is `inside-hole`.
4. Otherwise state is `inside`.

Trace behavior:

- `outside` clips when semi-diameter checking is active.
- `inside-hole` means an annular surface is not interacted with and the ray continues.
- A `block` surface clips only when the ray is inside the active aperture band.
- A mirror inactive side with `inactiveSide: "block"` clips only when the ray is inside the active aperture band.
- Stop-down changes only the stop aperture, not authored surface `sd`.

Sampling behavior:

- Normal ray density preserves lens-authored ray fractions exactly.
- Dense and diagnostic densities derive symmetric samples from authored fractions.
- Folded obstruction-aware sampling uses the same aperture interpretation, not hand-coded blocker guesses.

Acceptance criteria:

- Annular mirror holes pass central rays when physically intended.
- Solid blockers clip central rays.
- Stop-down affects stop clipping but does not alter element rendering.
- Existing ray sampling tests pass.

### R7. Path And Interaction Model Specification

Purpose: all sequential, folded, mirror, repeated-hit, and arbitrary image-plane behavior must be represented by one
path model.

Path modes:

- `sequential`: visit physical surface indexes from front to rear unless an explicit surface order is present.
- `explicit`: follow resolved `surfaceOrder` indexes exactly; labels may repeat.
- `auto`: choose the nearest valid next surface at each interaction.

Incident side:

- Determine side from `dot(direction, normal)`.
- Match current behavior: `dot >= 0` means `front`; otherwise `rear`.
- `incidentSide: "both"` or omitted means active from both sides.

Interaction behavior:

- `refract`: apply Snell refraction when current and next media differ; otherwise continue.
- `reflect`: reflect direction about the solved normal.
- `block`: clip when aperture state is `inside`.
- Inactive side behavior defaults to `block` for reflectors and `ignore` for refraction/block surfaces unless explicitly
  configured.

Auto path candidate rules:

- Consider only intersections with positive `t` beyond self-hit tolerance.
- Skip the previous surface when it is only an immediate self-hit.
- Skip passive same-index refractive surfaces that would not change the optical path.
- Rank valid candidates by nearest positive `t`.
- If the image plane is nearer than the next valid surface, terminate at the image plane.
- Track skipped candidates with typed reasons.

Loop and termination rules:

- `maxInteractions` is enforced for every generalized trace.
- Auto paths record a loop key from surface index, rounded point, rounded direction, and current medium.
- Termination reasons must include image plane, explicit path complete, no next surface, trace failure, clipped, loop
  detected, max interactions, and sequential return.

Stop tracing:

- Generalized stop tracing must be able to return the first or requested later occurrence of the stop.
- Stop tracing must work for repeated stop crossings.
- Stop tracing must return both the stop hit and the full trace diagnostics.

Acceptance criteria:

- All hidden mirror fixtures pass.
- Existing folded diagnostics text remains meaningful in dev.
- Sequential lenses do not pay generalized auto-path overhead unless benchmarks justify a shared path.

### R8. Ray Launch And Projection Specification

Purpose: field angle, projection, chief ray, and fisheye launches must have one owner.

Projection models:

- Rectilinear: ideal image height `f * tan(theta)`.
- Fisheye equidistant: ideal image height `f * theta`.
- Fisheye equisolid: ideal image height `2 * f * sin(theta / 2)`.

Launch rules:

- Scalar slope launch is valid only for finite `abs(fieldAngleDeg) < MAX_FIELD_LAUNCH_DEG`.
- Slope launch returns `uField = -tan(theta)`.
- Fisheye chief-ray solving always uses bounding-sphere launch, including below the scalar cap.
- Rectilinear chief-ray solving uses object-plane launch below the cap and bounding-sphere only at or above the cap.
- 2D projection launches use angular Cartesian fields `(thetaX, thetaY)` and return slopes plus ideal image point.

Bounding-sphere requirements:

- Launch sphere is centered near entrance pupil `z`.
- Direction is normalized.
- Launch bound is finite and suitable for backward or grazing rays.
- Result carries radial and sagittal pupil axes for vector-offset ray fans.

Chief-ray solver requirements:

- Return typed status:
  - `converged`.
  - `paraxial-fallback`.
  - `bracket-failed`.
  - `out-of-domain`.
- Include iteration count.
- Include launch surface kind.
- Include `vectorLaunch` when the solve used a vector launch.
- Cache by prepared state, field angle, launch surface, and aberration state.
- Record diagnostics per lens key in development/test support.

Acceptance criteria:

- No new analysis code computes `Math.tan(field)` inline.
- Fisheye and rectilinear projection tests pass.
- Off-axis display rays and analysis rays use the same solved chief-ray convention.

### R9. Ray Trace Result Specification

Purpose: core traces must preserve rich diagnostics while maintaining legacy diagram compatibility.

Core trace result:

```ts
interface EngineTraceResult {
  input: Ray3;
  hits: readonly TraceHit[];
  terminalPoint: Vec3;
  terminalDirection: Vec3;
  terminalSurfaceIndex: number;
  returnVertexIndex: number;
  finalMedium: number;
  status: "ok" | "clipped" | "failed";
  failureReason: TraceFailureReason | null;
  reachedImagePlane: boolean;
  diagnostics: TraceDiagnostics;
}
```

Trace hit:

```ts
interface TraceHit {
  surfaceIndex: number;
  surfaceLabel: string;
  point: Vec3;
  normal: Vec3;
  incidentDirection: Vec3;
  outgoingDirection: Vec3 | null;
  radius: number;
  apertureState: ApertureState;
  clipped: boolean;
  clipReason: ClipReason | null;
  failureReason: TraceFailureReason | null;
}
```

Legacy projection:

- `pts` contains visible non-clipped meridional `[z, y]` points.
- `ghostPts` contains ghost points for clipped paths when ghost rendering is enabled.
- `y` and `u` preserve current return-plane semantics.
- `reachedImagePlane` is true only when the core trace terminated at the configured image plane.
- Folded paths append image-plane terminal point to `pts` when reached and unclipped.

Options:

- `checkSemiDiameter`.
- `stopSemiDiameter`.
- `ghost`.
- `stopOnClip`.
- `indexAtSurface`.
- `launchBoundT`.
- `recordHeights`.
- `stopAt` for compatibility on sequential traces only.

Acceptance criteria:

- Existing hook tests can keep using legacy ray segment compilation.
- New folded analysis can inspect `hits` and image-plane data without retracing.
- Trace failures are typed, not inferred from `NaN` alone.

### R10. First-Order And Pupil Specification

Purpose: paraxial, pupil, field, f-number, and cardinal calculations should share one first-order model.

Paraxial state:

```ts
interface ParaxialState {
  y: number;
  u: number;
  n: number;
}
```

Transfer and interaction:

- Transfer: `y = y + d * u`, `u` unchanged.
- Refract: preserve current paraxial formula for curved and flat surfaces.
- Reflect: support axial folded reflective systems when explicitly enabled.
- Block surfaces return no paraxial continuation.

First-order output:

```ts
interface FirstOrderState {
  matrix: { A: number; B: number; C: number; D: number };
  objectIndex: number;
  imageIndex: number;
  efl: number;
  bfd: number;
  ffd: number;
  frontPrincipalZ: number;
  rearPrincipalZ: number;
  frontNodalZ: number;
  rearNodalZ: number;
}
```

Pupil requirements:

- Entrance pupil semi-diameter comes from aperture reference focal length and wide-open f-number, corrected by stop
  trace behavior as current build does.
- Physical stop semi-diameter is derived with real trace for ordinary lenses unless `stopPlacement: "inside-element"`
  preserves authored stop `sd`.
- Exit pupil position and size use the same two-ray decomposition as current behavior.
- Folded systems use generalized stop and full-system traces with finite fallbacks.

F-number requirements:

- Fisheye projection focal length is the aperture reference when declared.
- Variable-aperture zooms interpolate current wide-open f-number by zoom.
- Effective f-number preserves current close-focus bellows/pupil-magnification behavior.

Acceptance criteria:

- `buildLens` constant parity for ordinary, zoom, fisheye, and folded fixture lenses.
- Cardinal overlays preserve H/N coincidence for same-index systems.
- Folded tilted image-plane cardinal output remains unsupported until a reporting convention exists.

### R11. Analysis Specification

Purpose: analysis modules must preserve current behavior and gain prepared-state efficiency.

Common analysis input:

```ts
interface AnalysisContext {
  lens: EngineLens;
  state: PreparedOpticalState;
  z: readonly number[];
  currentEntrancePupilSemiDiameter: number;
  currentPhysicalStopSemiDiameter: number;
  fieldGeometry: FieldGeometryState | null;
}
```

Module contracts:

- Spherical aberration:
  - Trace circular or meridional pupil samples through current state.
  - Use generalized image-plane intersections for folded-safe paths.
  - Preserve blur-character classification labels and thresholds.
- Field curvature:
  - Preserve tangential/sagittal sampling and sign convention.
  - Positive focus shift remains aft, toward sensor.
- Coma:
  - Use solved chief-ray field geometry.
  - Keep meridional and sagittal outputs separate.
  - Preserve preview grid point ordering and clipping behavior.
- Bokeh:
  - Preserve best-focus search and before/after focus preview semantics.
  - Use batch skew tracing when available.
- Distortion:
  - Preserve projection-aware residual references.
  - Use accurate field-angle inversion and vector branch for fisheye grid cells beyond slope domain.
- Vignetting:
  - Preserve adaptive field sample count.
  - Preserve heavy-lens pupil sample reduction.
  - Normalize geometric transmission and relative illumination to on-axis.
- Pupil aberration:
  - Preserve entrance and exit pupil profile shapes.
  - Use vector chief-ray launches when scalar slope is out of domain.
- Focus breathing:
  - Preserve dynamic EFL and display formatting.
- Aspheric comparison:
  - Preserve best-fit-sphere, departure profile, peak, RMS, and click routing.
- Group movement:
  - Preserve fixed-image-plane anchoring.

Worker-readiness:

- Analysis functions should be serializable at the facade boundary where practical.
- No analysis module may import React.
- Long-running analysis should be callable through `analysisJobs`.

Acceptance criteria:

- Existing analysis tests pass.
- Folded unsupported UI gates remain until module-specific folded tests exist.
- Heavy-lens sample reductions remain centralized through ray sampling helpers.

### R12. Diagram Geometry Specification

Purpose: the diagram must remain SVG-only while sharing physical surface math with the engine.

Coordinate transform requirements:

- Preserve `sx`, `sy`, `clampedRayEnd`, `CX`, `IX`, `effectiveSC`, and `yViewMax` semantics.
- Preserve normalized comparison scaling.
- Preserve cardinal extent expansion when enabled.
- Keep image plane fixed for focus/zoom layout as current `useLensComputation` does.

Element shape requirements:

- Build one closed path per physical element span.
- Use independent front and rear render semi-diameters.
- Connect unequal semi-diameters with straight edges.
- Use even-odd fill for annular element holes.
- Render aspheric overlay paths and half-fill paths.
- Render second-surface mirror coating accents.
- Render tilted flat mirrors from `interaction.normal`.

Diagnostics:

- Report declared semi-diameter, render semi-diameter, trim amount, and trim cause per element side.
- Preserve trim causes: `none`, `slope`, `gap`, `conic-limit`.
- Keep production hidden-trim checks testable.

Acceptance criteria:

- Existing diagram geometry tests pass.
- Visual screenshots for representative lenses show no unexpected overlap or missing shapes.
- No canvas or CSS dependencies are introduced.

### R13. Performance And Reliability Specification

Purpose: the rewrite should reduce repeated work while keeping correctness observable.

Performance targets:

- Ordinary viewport ray rendering should be no slower than the existing engine beyond measurement noise.
- Nested analysis paths should show measurable setup reduction after prepared state adoption.
- Any benchmark regression greater than 15 percent must be documented before final migration.
- Batch APIs must be justified by benchmark output or obvious duplicated setup.

Reliability requirements:

- All failures that can be represented as typed statuses should avoid raw `NaN` as the only signal.
- Public compatibility wrappers may continue returning legacy `NaN` where existing callers expect it, but must retain
  typed diagnostics internally.
- Development-only warnings should remain gated behind dev checks.
- Caches must not hide input changes. Any cache key must include all optical state that affects results.

Benchmark dimensions:

- Sequential meridional trace.
- Sequential skew trace.
- Vector/bounding-sphere trace.
- Folded auto path.
- Chromatic ray fan.
- Vignetting curve.
- Distortion grid.
- Bokeh point cloud.

Acceptance criteria:

- Benchmark harness can run old and new engines on the same lens/state set.
- Final migration documents any accepted differences in speed or numeric output.

## Proposed `src/optics-2` Layout

Start with a folder that separates durable concepts. Avoid matching the current module layout one-for-one unless the
boundary is still useful.

```text
src/optics-2/
  index.ts                         # New public barrel once stable
  compat.ts                        # Legacy RuntimeLens and optics.ts adapter functions
  constants.ts
  types.ts                         # Engine-native types only

  math/
    vector.ts
    surfaceProfile.ts
    intersection.ts
    paraxial.ts

  prescription/
    normalizeLensData.ts
    validateLensData2.ts
    variables.ts
    annotations.ts
    projectionConfig.ts
    foldedPath.ts

  state/
    prepareState.ts
    stateCache.ts
    layout.ts
    zoom.ts

  trace/
    aperture.ts
    interactions.ts
    pathPlanner.ts
    traceCore.ts
    traceBatch.ts
    legacyRayResult.ts
    diagnostics.ts

  field/
    projection.ts
    chiefRay.ts
    fieldGeometry.ts
    pupils.ts

  chromatic/
    dispersionAdapter.ts
    chromaticTrace.ts

  diagram/
    coordinateTransforms.ts
    elementShapes.ts
    renderDiagnostics.ts

  analysis/
    analysisJobs.ts
    spherical.ts
    coma.ts
    fieldCurvature.ts
    bokeh.ts
    distortion.ts
    vignetting.ts
    pupilAberration.ts
    cardinalElements.ts
    groupMovement.ts
    asphericComparison.ts
    lcaScaling.ts

  sampling/
    raySampling.ts

  testing/
    parityHarness.ts
    benchmarkHarness.ts
```

If this feels too large during implementation, keep the folders but add files incrementally. The important DRY rule is
that math, aperture predicates, path traversal, projection launch, and state preparation each have one owner.

## Engine-Native Data Model

The existing `RuntimeLens` mixes normalized data, derived constants, diagram layout, and legacy UI conveniences. The new
engine should split those concerns internally, then provide a `RuntimeLens` adapter while the UI is still legacy-shaped.

### Engine Lens

```ts
interface EngineLens {
  key: string;
  source: LensData;
  surfaces: readonly CompiledSurface[];
  elements: readonly CompiledElement[];
  stop: StopSpec;
  projection: ProjectionSpec;
  opticalPath: PathSpec;
  imagePlane: Plane3;
  variables: VariableSpec;
  annotations: AnnotationSpec;
  dispersion: readonly SurfaceDispersion[];
  defaults: LensDisplayDefaults;
  authoredRayFans: AuthoredRayFans;
  flags: {
    isZoom: boolean;
    isFoldedOptics: boolean;
    hasPerspectiveControl: boolean;
  };
}
```

### Prepared State

```ts
interface PreparedOpticalState {
  lens: EngineLens;
  focusT: number;
  zoomT: number;
  aberrationT: number;
  surfaces: readonly CompiledStateSurface[];
  z: readonly number[];
  imagePlane: Plane3;
  imgZ: number;
  firstOrder: FirstOrderState | null;
  pupil: PupilState | null;
}
```

### Compatibility Runtime

During migration, expose:

```ts
function buildLens2(data: LensData): RuntimeLens;
function engineLensFromRuntime(L: RuntimeLens): EngineLens;
function prepareLegacyState(L: RuntimeLens, focusT: number, zoomT: number, aberrationT?: number): PreparedOpticalState;
```

The first implementation can store the `EngineLens` as a non-public symbol on the compatibility `RuntimeLens`, or keep a
WeakMap from `RuntimeLens` to `EngineLens`. The public object must remain immutable to preserve cache assumptions.

## Step-By-Step Implementation Plan

### Phase 0: Establish Migration Rules

Objective: Make the rewrite safe before new math exists.

Steps:

1. Add this document and keep it updated as decisions change.
2. Add a short note in `agent_docs/architecture/optics-engine.md` once implementation begins, pointing agents to this
   migration plan.
3. Define a temporary feature flag such as `ENABLE_OPTICS_2_PARITY` or `OPTICS_ENGINE_VERSION` only for internal
   selection. Do not expose a trace-mode flag in lens data or user-facing UI.
4. Decide the parity tolerance policy:
   - Surface sag/slope: strict numeric tolerance, around `1e-10` to `1e-8`.
   - Ray image heights: tight tolerance for ordinary lenses, looser for clipped or ghost paths.
   - Fisheye/vector and folded diagnostics: compare semantic status plus bounded numeric tolerances.
5. Define representative lenses for the parity suite:
   - Ordinary prime: `nikkor-z-50f18s`.
   - Fast/aspheric prime: `nikon-z-58f095-s-noct` or similar high-aperture lens.
   - Zoom: `canon-ef-8-15mm-f4l-fisheye-usm` and a rectilinear zoom such as a 24-70.
   - Fisheye past-cap: `nikon-fisheye-nikkor-6mm-f28` or Canon 8-15.
   - Perspective-control: `nikon-pc-nikkor-19mm-f4e-ed`.
   - Aberration control: `varisoft-rokkor-85f28`.
   - Folded fixtures: all hidden `src/lens-data/reference/*.data.ts`.

Done when:

- There is an agreed parity matrix.
- Existing tests still pass.
- No app code has switched engines yet.

### Phase 1: Add Golden Parity And Benchmark Harnesses

Objective: Capture current behavior so the rewrite can improve internals without silently changing visible output.

Steps:

1. Add `__tests__/optics-2/parity/` with tests that import both engines once `optics-2` exists.
2. Add helper fixtures that build representative runtime lenses from `LENS_CATALOG`.
3. Capture current outputs for:
   - `buildLens` constants.
   - `doLayout` z positions and image-plane positions.
   - Surface sag, slope, and render trim diagnostics.
   - On-axis ray fans at infinity, close focus, and stopped down.
   - Off-axis ray fans in true-angle and edge modes.
   - Chromatic ray fans and LCA/TCA spread.
   - Chief-ray solve statuses and launch kinds.
   - Distortion, vignetting, pupil aberration, and aberration samples.
   - Folded hit order, clip diagnostics, and image-plane reachability.
4. Add a local benchmark helper under `src/optics-2/testing/benchmarkHarness.ts` or `scripts/` that runs:
   - 1,000 sequential on-axis traces.
   - 1,000 skew traces.
   - A vignetting curve.
   - A distortion grid.
   - A chromatic fan.
   - A folded fixture trace.
5. Keep benchmarks informational at first. Do not fail CI until the new engine has stable parity.

Done when:

- Parity tests can compare old and new outputs.
- Benchmark output gives wall-clock and allocation-oriented hints for trace-heavy paths.

### Phase 2: Build Core Types And Math

Objective: Create the foundation with no UI dependency and no legacy imports except shared type definitions.

Steps:

1. Add `src/optics-2/types.ts` with engine-native types.
2. Add `src/optics-2/constants.ts` for shared constants.
3. Add `math/vector.ts`:
   - normalize, dot, cross, add, scale.
   - project point to plane.
   - reflect direction.
   - refract direction with total-internal-reflection status.
4. Add `math/surfaceProfile.ts`:
   - conic polynomial sag.
   - sag slope.
   - surface normal.
   - conic domain checks.
   - tilted plane profile.
5. Add `math/intersection.ts`:
   - flat/plane intersection.
   - sag intersection with bracket plus safeguarded Newton iteration.
   - failure reasons matching or adapting current reasons.
6. Add focused tests mirroring `surfaceMath.test.ts` and `surfaceIntersection.test.ts`.

Done when:

- New math matches current sag, slope, normal, and intersection behavior for spherical, aspheric, flat, and tilted
  surfaces.
- No React or UI imports exist in `src/optics-2`.

### Phase 3: Normalize Lens Data Into `EngineLens`

Objective: Compile existing lens files into a smaller, faster internal representation without changing the files.

Steps:

1. Add `prescription/normalizeLensData.ts`.
2. Reuse existing `LensData`, `SurfaceData`, and `ElementData` types as input.
3. Build label maps once.
4. Resolve asphere maps once.
5. Resolve element spans, explicit spans, groups, doublets, variable gaps, aberration-control gaps, and stop index.
6. Resolve projection metadata once.
7. Resolve optical path and image plane once.
8. Compile surface interactions:
   - default refract.
   - reflect.
   - block.
   - side activation.
   - inactive-side behavior.
   - mirror kind.
   - tilted normal.
9. Compile dispersion closures by reusing the existing glass catalog and `makeSurfaceDispersion` logic, either by
   importing it during the parallel phase or copying it only when tests prove identical behavior.
10. Add `validateLensData2` as a wrapper around existing validation at first. Only split validation later if it reduces
    duplication.
11. Add `compat.ts` with `buildLens2(data)` returning a legacy-compatible `RuntimeLens`.

Done when:

- Every visible and hidden lens builds through `buildLens2`.
- Lens-data tests pass when pointed at `buildLens2` in parity mode.
- No lens file changes are required.

### Phase 4: Prepare State Once Per Slider Position

Objective: Remove repeated state-surface and z-position work from hot paths.

Steps:

1. Add `state/variables.ts` or `prescription/variables.ts` for `resolveVariableThickness`.
2. Add `state/prepareState.ts`.
3. Prepare all current-state surface thicknesses.
4. Prepare z positions and `imgZ`.
5. Preserve current fixed-image-plane behavior used by `useLensComputation`.
6. Add a state cache utility that can be used by compatibility wrappers but can also be bypassed in tests.
7. Update parity tests for `doLayout`, `thick`, `stateSurfaces`, and zoom interpolation through the compatibility API.

Done when:

- `prepareState` matches current `doLayout` and `stateSurfaces`.
- Compatibility `doLayout2`, `thick2`, and zoom helpers can be exported.

### Phase 5: Implement Sequential Vector Trace

Objective: Replace the most common trace path with a vector-native core.

Steps:

1. Add `trace/aperture.ts` with aperture state and clip reason helpers.
2. Add `trace/interactions.ts` with refraction, reflection, and block handling.
3. Add `trace/traceCore.ts` for ordinary sequential path traversal.
4. Start with vector input only.
5. Add slope adapters:
   - meridional `(y0, uy0)`.
   - skew `(x0, y0, ux0, uy0)`.
6. Add chromatic index injection by channel.
7. Add legacy result projection in `trace/legacyRayResult.ts`.
8. Add compatibility functions:
   - `traceRay2`.
   - `traceRayChromatic2`.
   - `traceRayVector2`.
   - `traceSkewRay2`.
9. Add parity tests for existing sequential lenses.
10. Benchmark against current `traceRay` and `traceSkewRay`.

Done when:

- Sequential ordinary lenses match current ray paths, final `y/u`, clipping, ghost points, and chromatic behavior.
- The new core can trace without constructing state surfaces inside each ray.

### Phase 6: Implement Generalized Folded Path Trace

Objective: Port folded, mirror, annular, repeated-hit, auto-path, and arbitrary image-plane behavior.

Steps:

1. Add `trace/pathPlanner.ts`.
2. Implement explicit `surfaceOrder` traversal.
3. Implement auto nearest-valid-surface traversal.
4. Preserve same-index passive refraction skip behavior.
5. Preserve self-hit tolerance and loop detection.
6. Preserve inactive-side blocking semantics.
7. Preserve image-plane-next termination.
8. Preserve `traceToStopViaGeneralized`.
9. Preserve folded diagnostics:
   - expected mode.
   - expected labels.
   - hit labels.
   - final medium.
   - reached image plane.
   - terminal surface.
   - clip events.
   - auto skipped candidates.
   - loop key.
10. Add parity tests against all reference mirror fixtures.

Done when:

- Existing folded tests pass through the new trace core.
- Reference mirror fixture report is unchanged or intentionally improved with documented differences.

### Phase 7: Implement Projection, Field Geometry, And Chief Rays

Objective: Keep off-axis, fisheye, distortion, vignetting, and pupil calculations aligned.

Steps:

1. Move projection helpers into `optics-2/field/projection.ts`.
2. Keep compatibility exports for:
   - `isFisheyeProjection`.
   - `projectionImageHeightForAngle`.
   - `projectionLaunchSlopeForField`.
   - `projectionLaunchVectorForFieldAngles`.
   - `launchSurfaceForFieldDeg`.
   - `boundingSphereLaunchVector`.
3. Add `field/chiefRay.ts`.
4. Implement chief-ray solve over prepared state.
5. Use a cache keyed by `EngineLens`, prepared state key, field angle, and launch surface.
6. Preserve typed statuses:
   - `converged`.
   - `paraxial-fallback`.
   - `bracket-failed`.
   - `out-of-domain`.
7. Preserve vector launch output for bounding-sphere paths.
8. Add `field/fieldGeometry.ts` for current-state and analysis-clamped field geometry.
9. Add parity tests for chief-ray solver, bounding-sphere launch, projection launch vector, off-axis geometry, and
   distortion image-height inversion.

Done when:

- Visible off-axis rays, distortion, vignetting, pupil aberration, coma, and bokeh share the same solved-chief-ray
  convention through `optics-2`.

### Phase 8: Implement First-Order, Pupils, And Cardinal Elements

Objective: Centralize paraxial and pupil math that is currently repeated across build, layout, field, and analysis.

Steps:

1. Add `math/paraxial.ts` for transfer and interaction.
2. Add a first-order system builder that returns matrix data and image/object indices.
3. Add `field/pupils.ts`.
4. Port entrance-pupil and exit-pupil calculations.
5. Port zoom-position derived arrays.
6. Port `eflAtFocus`, `effectiveFNumber`, `conjugateK`, and focus breathing helpers.
7. Port cardinal elements using the shared first-order module.
8. Preserve axial folded reflective cardinal behavior and keep tilted-image-plane folded cardinal output guarded.
9. Add parity tests for:
   - `buildLens` constants.
   - `zoomOptics`.
   - `cardinalElements`.
   - `pupilAberration`.
   - `effectiveFNumber`.

Done when:

- Runtime constants and current-state first-order values match current behavior.
- Repeated two-ray decomposition logic has one owner.

### Phase 9: Port Chromatic Behavior

Objective: Preserve glass catalog compatibility and make chromatic tracing cheaper.

Steps:

1. Add `chromatic/dispersionAdapter.ts`.
2. Reuse existing `resolveGlass`, `evaluateSellmeier`, aliases, and catalog data during parallel operation.
3. Compile per-surface index closures into `EngineLens`.
4. Add `chromatic/chromaticTrace.ts` for channel-aware ray tracing and spread summaries.
5. Preserve `summarizeDispersionQuality`.
6. Add parity tests for:
   - `dispersion`.
   - catalog mismatch scans.
   - sellmeier coverage scans.
   - chromatic ray hook tests.

Done when:

- Existing glass reports stay stable.
- LCA/TCA readouts match current output for representative lenses.

### Phase 10: Port Diagram Geometry

Objective: Keep the SVG diagram visually stable while using shared surface profiles.

Steps:

1. Add `diagram/coordinateTransforms.ts`.
2. Add `diagram/renderDiagnostics.ts`.
3. Add `diagram/elementShapes.ts`.
4. Share profile rendering with trace math:
   - spherical/aspheric sag.
   - tilted flat mirror z/y conversion.
   - conic limit trimming.
   - slope trimming.
   - cross-gap intrusion trimming.
5. Preserve second-surface coating accent paths.
6. Preserve annular even-odd fills.
7. Add parity tests for `computeElementShapes` and render diagnostics.
8. Add visual smoke checks only after UI starts using the new functions.

Done when:

- SVG path geometry is stable for ordinary, aspheric, annular, and tilted mirror fixtures.

### Phase 11: Port Analysis Modules Behind The Facade

Objective: Move analysis calculations one domain at a time without changing drawer components.

Steps:

1. Add `analysis/analysisJobs.ts` mirroring the existing facade.
2. Port low-risk analysis helpers first:
   - `lcaScaling`.
   - `asphericComparison`.
   - `groupMovement`.
   - focus breathing value helpers.
3. Port ray-heavy analysis next:
   - spherical aberration.
   - bokeh.
   - field curvature.
   - coma.
   - distortion.
   - vignetting.
   - pupil aberration.
4. Replace ad hoc repeated loops with batch tracing where practical.
5. Preserve folded guards until each tab has generalized math and tests.
6. Add parity tests for each analysis module before switching UI imports.

Done when:

- Existing analysis tests pass against `optics-2`.
- Analysis functions can receive a prepared state in new code but still expose legacy signatures through `compat.ts`.

### Phase 12: Add Compatibility Barrels And Optional UI Opt-In

Objective: Let the app choose old or new engine at import boundaries without mass rewriting.

Steps:

1. Add `src/optics-2/compat.ts` exports matching the old stable functions.
2. Add an internal engine selector module if needed:

```ts
export const opticsEngine = ENABLE_OPTICS_2_PARITY ? optics2Compat : optics1Compat;
```

3. Prefer direct test imports over app-wide switching at first.
4. Migrate pure optics tests to call new functions through compatibility wrappers.
5. Migrate `useLensComputation` behind the engine selector.
6. Migrate `useOnAxisRays`, `useOffAxisRays`, and `useChromaticRays`.
7. Migrate analysis drawer imports.
8. Keep UI props unchanged until all diagram and analysis components are migrated.

Done when:

- The app can render a representative lens page using `optics-2` without changing lens files or component props.
- The old engine remains available for side-by-side debugging.

### Phase 13: Performance Pass

Objective: Ensure the rewrite actually streamlines runtime behavior.

Steps:

1. Run the benchmark harness on old and new engines.
2. Inspect trace-heavy paths:
   - vignetting pupil sweeps.
   - distortion grids.
   - chromatic fans.
   - bokeh point clouds.
   - folded auto-path traces.
3. Add batch APIs only where they remove measured overhead.
4. Avoid premature abstraction in small display-only helpers.
5. Profile allocation sources:
   - per-ray arrays.
   - per-surface temporary vectors.
   - repeated state objects.
   - repeated map lookups in hot loops.
6. Keep readability over micro-optimization unless a hotspot is measured.

Done when:

- New engine is no slower on ordinary ray rendering.
- New engine is measurably faster or less allocative in at least the nested analysis paths.
- Any intentional slowdowns are documented and justified by correctness.

### Phase 14: Documentation And Authoring Updates

Objective: Keep future work coherent after the engine split.

Steps:

1. Update `agent_docs/architecture/optics-engine.md` with the `optics-2` architecture once implemented.
2. Update `agent_docs/architecture/public-functions.md` when public imports move.
3. Update `agent_docs/gotchas.md` with any new engine-specific constraints.
4. Update `src/lens-data/LENS_DATA_SPEC.md` only if lens data authoring changes.
5. Keep `TEMPLATE.data.ts.template` unchanged unless a new optional data field is actually introduced.
6. Add a generated or manual note describing any changed diagnostic wording.

Done when:

- Future agents know which engine is authoritative.
- Lens authors do not need to learn an unnecessary new format.

## Detailed Implementation Phase Specifications

This section turns the phase outline into concrete implementation contracts. Each phase must leave the repository in a
working state, even when the new engine is only partially implemented. Any skipped parity must be explicit, named, and
tracked in the phase notes rather than hidden behind broad tolerances.

### Common Phase Gates

Every implementation phase must satisfy these rules:

- All new source code lives under `src/optics-2` until the final migration phase.
- Existing `src/optics` code remains the production fallback until Phase 12 completes.
- Lens data, analysis markdown, and generated metadata formats do not change unless a later phase explicitly proves the
  old format cannot express a required optical behavior.
- Compatibility functions expose old return shapes from a small number of adapter modules; app components should not
  learn engine-native types until the final migration.
- Pure engine modules must not import React, hooks, route code, page code, or component code.
- Hot-path functions receive `PreparedOpticalState`; they must not call `buildLens`, `doLayout`, or state-surface
  builders internally.
- New tolerances must be named constants with a comment explaining the physical or numerical reason for the tolerance.
- A phase that changes runtime behavior must include at least one representative ordinary lens and one stress-case lens
  in tests.
- A phase that touches folded or mirror behavior must run the hidden reference fixture tests or explain why the phase is
  not yet connected to folded tracing.
- A phase that introduces a cache must also include a no-cache execution path for deterministic tests.
- Public compatibility exports must preserve old names, argument order, and `null` versus `undefined` behavior unless
  the final migration section says otherwise.
- Performance work must be based on measured traces, not on style preferences.

The preferred phase record is a short note in the migration PR or branch notes with:

- Implemented requirement ids.
- Files added or changed.
- Parity cases covered.
- Known tolerated differences.
- Commands run.
- Follow-up risks.

### P0. Establish Migration Rules

Implements: project-level migration policy.

Required artifacts:

- Keep this plan in `engine-migration/optics-2-migration-plan.md`.
- Add an architecture pointer in `agent_docs/architecture/optics-engine.md` only when `src/optics-2` first lands.
- Define the internal selector name, but do not wire it into public UI.
- Create the canonical parity lens list in a test helper or fixture file before broad parity tests depend on it.

Policy decisions locked by this phase:

- `src/optics-2` is additive until final migration.
- Current `src/optics` remains the reference engine for parity.
- The lens-data authoring contract remains `LensDataInput`.
- Exact tracing remains the only trace model; no legacy trace-mode switch is reintroduced.
- Feature selection is an internal development control, not a lens-data field and not a user-facing toggle.

Tolerance specification:

- Surface sag, slope, and normal: strict absolute tolerance first; introduce relative tolerance only when the value range
  proves absolute tolerance misleading.
- Ray points and image heights: compare finite numeric values, status, and clip reasons separately.
- Folded traces: compare status, hit labels, terminal surface, final medium, and image-plane reachability before numeric
  coordinates.
- Analysis samples: compare sample counts, field positions, statuses, and bounded values.
- Any tolerance above ordinary floating-point noise must include a named reason such as iterative root solve,
  clipping boundary, or old-engine bug compatibility.

Verification:

- Documentation-only P0 changes require no runtime test.
- If a feature flag or fixture helper is added, run `npm run typecheck` and the affected focused tests.

Exit gate:

- The team can identify which lenses and behaviors define parity.
- No production code path has switched to `optics-2`.
- No undocumented compatibility exception exists.

### P1. Golden Parity And Benchmark Harnesses

Implements: the safety net for all later phases.

Required file layout:

- `__tests__/optics-2/parity/parityFixtures.ts` for canonical lens cases and slider states.
- `__tests__/optics-2/parity/tolerances.ts` for named tolerance groups.
- `__tests__/optics-2/parity/buildLensParity.test.ts` for build-time constants.
- `__tests__/optics-2/parity/layoutParity.test.ts` for `doLayout`, `thick`, and image plane positions.
- `__tests__/optics-2/parity/rayTraceParity.test.ts` for ordinary on-axis and off-axis tracing.
- `__tests__/optics-2/parity/foldedTraceParity.test.ts` for hidden mirror fixtures.
- `__tests__/optics-2/parity/analysisParity.test.ts` for analysis helpers as they migrate.
- `src/optics-2/testing/benchmarkHarness.ts` for reusable benchmark runners.
- Optional `scripts/benchmark-optics-2.ts` when command-line benchmarks are useful outside tests.

Fixture matrix:

- Ordinary prime at infinity, close focus, wide open, and stopped down.
- Fast/aspheric prime with high marginal ray height.
- Rectilinear zoom at wide, middle, and tele positions.
- Fisheye zoom or fisheye prime below and above the scalar launch cap.
- Perspective-control lens with movement state where existing helpers support it.
- Aberration-control lens at minimum, midpoint, and maximum control state.
- At least one lens with Sellmeier glass, one with line indices, one with Abbe fallback, and one with constant fallback.
- All hidden folded reference fixtures.

Golden data policy:

- Prefer dynamic old-versus-new comparison inside tests while `src/optics` exists.
- Commit fixed JSON golden data only for cases where the old engine will be removed before the parity assertion can be
  preserved.
- Golden files must be compact, sorted, and human-readable.
- Do not snapshot full SVG strings or large ray clouds unless a reducer first extracts stable numeric facts.

Benchmark specification:

- Measure old and new engines through the same input fixture.
- Warm up each benchmark before recording.
- Record median and worst measurement for each case.
- Record successful trace count, clipped count, failed count, and allocation hints when available.
- Keep benchmark output informational until Phase 13.

Verification:

- Before `optics-2` exists, harness tests may be skipped with a narrow skip reason.
- Once an `optics-2` function exists, the matching parity test must either pass or list a named pending difference.
- The benchmark harness must be callable without mutating lens data or generated metadata.

Exit gate:

- Later phases can add a new engine function and immediately compare it against the old behavior.
- Benchmark output is repeatable enough to identify large regressions.

### P2. Core Types And Math

Implements: R2 and R3, plus the low-level math used by R7 through R12.

Required modules:

- `src/optics-2/types.ts` for engine-native records and result unions.
- `src/optics-2/constants.ts` for shared tolerances, wavelengths, launch caps, and iteration caps.
- `src/optics-2/math/vector.ts` for immutable vector operations.
- `src/optics-2/math/surfaceProfile.ts` for sag, slope, normals, and aperture-radius helpers.
- `src/optics-2/math/intersection.ts` for ray/surface and ray/plane intersections.
- `src/optics-2/math/numerics.ts` for interpolation, finite checks, clamping, and root-solver utilities when needed.

Type rules:

- Use discriminated unions for success and failure results.
- Do not encode failure only as `NaN`, `null`, or an empty array.
- Keep vector records small and explicit: `{ x, y, z }`.
- Return `readonly` arrays from public engine functions.
- Distinguish physical surface index, path index, and hit sequence index in type names.

Math rules:

- Surface normals must point according to the convention documented in R2 and R3.
- Intersection code must report domain failure, no positive hit, iteration failure, and invalid input separately.
- Root solving must bracket when the current engine brackets; a Newton step may only be used inside a safeguarded range.
- All finite checks happen at module boundaries and at iterative solver outputs.
- Plane and sag intersections share result types so trace code can handle them uniformly.

Tests:

- Sag and slope parity for spherical, conic, even-asphere, flat, and tilted surfaces.
- Normal orientation parity for both positive and negative radii.
- Intersection parity for on-axis, marginal, skew, tangent, miss, and domain-limited rays.
- Refraction and reflection vector tests including total internal reflection status.

Exit gate:

- `src/optics-2/math` has no dependency on old trace code.
- All core math can be tested without building a `RuntimeLens`.

### P3. Normalize Lens Data Into `EngineLens`

Implements: R1, R3, R4, R6, and the static portions of R7.

Required modules:

- `src/optics-2/prescription/normalizeLensData.ts`.
- `src/optics-2/prescription/labels.ts`.
- `src/optics-2/prescription/aspheres.ts`.
- `src/optics-2/prescription/groups.ts`.
- `src/optics-2/prescription/interactions.ts`.
- `src/optics-2/prescription/dispersion.ts`.
- `src/optics-2/compat.ts` with `buildLens2` and `engineLensFromRuntime`.

Normalization steps:

1. Merge defaults exactly as the current build path does.
2. Preserve the original lens key, title, maker, source metadata, notes, projection metadata, and UI-facing fields.
3. Assign stable physical surface indexes from the original surface array.
4. Build a label map and fail on duplicate labels using the same severity as current validation.
5. Resolve stop index from current stop rules and preserve stop label behavior.
6. Resolve asphere coefficients once per surface.
7. Resolve element membership, group membership, doublets, explicit spans, and render metadata once.
8. Resolve variable thickness descriptors without applying slider state.
9. Compile surface profiles without evaluating current-state positions.
10. Compile surface interactions from optical path data, mirror data, blockers, and defaults.
11. Compile dispersion descriptors and per-channel index resolvers.
12. Resolve projection and image-plane descriptors into engine-native objects.
13. Store compatibility metadata needed to rebuild legacy return fields.

Compatibility rules:

- `buildLens2(data)` must accept the same inputs as `buildLens(data)`.
- `engineLensFromRuntime(L)` must be idempotent for objects created by `buildLens2`.
- A `RuntimeLens` produced by `buildLens2` must satisfy existing UI type expectations.
- If a WeakMap is used, missing entries must produce a clear compatibility error, not silent fallback.
- Dev/test builds may freeze normalized records to catch mutation.

Tests:

- Every visible lens and hidden fixture builds.
- Normalized stop, labels, groups, aspheres, variable gaps, projection, and optical path match old build output.
- Dispersion quality and index lookup match current glass behavior.

Exit gate:

- No `src/lens-data` file needs a content change.
- Build-time constants that the UI reads remain available through compatibility.

### P4. Prepare State Once Per Slider Position

Implements: R5 and state-dependent pieces of R10 and R12.

Required modules:

- `src/optics-2/state/variables.ts`.
- `src/optics-2/state/prepareState.ts`.
- `src/optics-2/state/cache.ts`.
- Compatibility exports for `doLayout2`, `thick2`, and current-state helpers.

Preparation algorithm:

1. Normalize `focusT`, `zoomT`, and `aberrationT` the same way the current UI and helpers do.
2. Resolve each surface thickness from the compiled variable-thickness descriptor.
3. Reject negative or non-finite resolved thickness with a typed preparation failure.
4. Accumulate `z` positions in physical surface order.
5. Resolve current image plane from the lens prescription, image-plane metadata, and focus state.
6. Compute total track and any current-state convenience values needed by trace and diagram code.
7. Attach the prepared state to a stable cache key.
8. Return immutable prepared state records.

Cache contract:

- Cache lookup is optional and must not alter output.
- Cache keys include lens identity and normalized slider values.
- Cache values are immutable.
- Cache invalidation is automatic when a different `EngineLens` identity is used.
- Tests can call `prepareState` with cache disabled.

Tests:

- `doLayout` parity across focus, zoom, and aberration states.
- `thick` parity for every surface on representative lenses.
- Fixed image-plane and tilted image-plane parity.
- Cache hit test proving repeated trace setup reuses prepared state when requested.

Exit gate:

- Ray tracing can receive all current-state geometry from `PreparedOpticalState`.
- No new hot-path code needs to recompute z positions.

### P5. Sequential Vector Trace

Implements: R6, sequential portions of R7, R8 launch adapters where needed, and R9.

Required modules:

- `src/optics-2/trace/aperture.ts`.
- `src/optics-2/trace/interactions.ts`.
- `src/optics-2/trace/sequentialTrace.ts`.
- `src/optics-2/trace/legacyRayResult.ts`.
- `src/optics-2/trace/rayAdapters.ts`.

Core loop:

1. Accept a `PreparedOpticalState`, an input `Ray3`, channel or index resolver, and trace options.
2. For each physical surface in sequence, intersect the ray with the prepared surface.
3. Evaluate aperture state before optical interaction.
4. Record a `TraceHit` for hits, clips, and typed failures.
5. Apply block, refraction, or reflection behavior.
6. Update current medium only after a successful interaction.
7. Terminate at the image plane when the configured trace mode requires image-plane completion.
8. Return `EngineTraceResult`.
9. Convert to legacy ray result only at the compatibility boundary.

Compatibility adapters:

- `traceRay2` maps meridional slope input to `Ray3`.
- `traceSkewRay2` maps skew input to `Ray3`.
- `traceRayVector2` accepts vector-native input.
- `traceRayChromatic2` selects the channel index resolver.
- Legacy `stopAt` remains supported only for sequential compatibility.

Tests:

- On-axis marginal and paraxial rays.
- Off-axis meridional rays.
- Skew rays.
- Stop-down clipping.
- Ghost point behavior.
- Chromatic channel traces.
- Total internal reflection or failure cases where existing lenses expose them.

Exit gate:

- Ordinary sequential lens pages can compute visible rays through `optics-2` compatibility wrappers.
- Sequential tracing does not rebuild state surfaces per ray.

### P6. Generalized Folded Path Trace

Implements: full R7, folded portions of R6, and folded portions of R9.

Required modules:

- `src/optics-2/trace/pathPlanner.ts`.
- `src/optics-2/trace/generalizedTrace.ts`.
- `src/optics-2/trace/stopTrace.ts`.
- `src/optics-2/trace/foldedDiagnostics.ts`.

Path planner contract:

- `sequential` uses physical surface order unless explicit optical path data overrides it.
- `explicit` follows resolved labels or indexes exactly and allows repeated surfaces.
- `auto` evaluates valid positive intersections and selects the nearest candidate.
- The planner records skipped candidates with reasons.
- The planner never relies on array order when auto mode needs geometric nearest-hit behavior.

Folded behavior:

- Repeated surface hits are legal when separated by valid propagation.
- Self-hit tolerance prevents immediate duplicate hits after reflection.
- Inactive mirror sides obey the compiled inactive-side behavior.
- Annular mirrors, holes, and blockers use the same aperture evaluator as sequential tracing.
- Image-plane-next termination takes precedence when the image plane is nearer than the next optical surface.
- Loop detection and `maxInteractions` always produce typed termination.

Stop tracing:

- Support first stop occurrence and requested later stop occurrence.
- Return both the stop hit and full diagnostics.
- Preserve behavior needed by pupil and vignetting analysis.

Tests:

- All hidden reference fixtures.
- Explicit path with repeated labels.
- Auto path with skipped self-hit candidate.
- Annular obstruction pass-through and block cases.
- Arbitrary image plane reachability.
- Folded diagnostic wording or structured diagnostic parity.

Exit gate:

- Folded fixture reports are unchanged or intentionally updated with documented improvements.
- Sequential lenses still use the cheaper sequential path unless a benchmark supports unification.

### P7. Projection, Field Geometry, And Chief Rays

Implements: R8 and the field-dependent portions of R10 and R11.

Required modules:

- `src/optics-2/field/projection.ts`.
- `src/optics-2/field/launch.ts`.
- `src/optics-2/field/chiefRay.ts`.
- `src/optics-2/field/fieldGeometry.ts`.
- `src/optics-2/field/chiefRayCache.ts`.

Implementation contract:

- Move projection formulas into one module and expose compatibility wrappers.
- Keep scalar slope launch, object-plane launch, and bounding-sphere launch as distinct named paths.
- Chief-ray solving must return typed statuses, iteration count, launch surface kind, and optional vector launch data.
- Fisheye projection must use bounding-sphere chief-ray solving.
- Rectilinear projection may use scalar/object-plane launch below the cap.
- All field-dependent analysis must call the shared projection module.

Search and cleanup rule:

- Before the phase exits, search for field-angle `Math.tan` usage outside `field/projection.ts` and documented low-level
  numeric tests.
- Any remaining usage must be either deleted, routed through projection helpers, or documented as not field-launch math.

Tests:

- Projection image-height formulas.
- Launch slope and launch vector parity.
- Chief-ray status parity.
- Fisheye above-cap and below-cap cases.
- Distortion image-height inversion.
- Off-axis ray fan start and target geometry.

Exit gate:

- Off-axis display rays and analysis rays agree on chief-ray convention.
- No new analysis code owns its own projection formulas.

### P8. First-Order, Pupils, And Cardinal Elements

Implements: R10.

Required modules:

- `src/optics-2/math/paraxial.ts`.
- `src/optics-2/first-order/systemMatrix.ts`.
- `src/optics-2/first-order/cardinals.ts`.
- `src/optics-2/first-order/pupils.ts`.
- `src/optics-2/first-order/fNumber.ts`.
- `src/optics-2/first-order/focusBreathing.ts`.

Implementation contract:

- Document the matrix convention in the module that builds the system matrix.
- Keep transfer and interaction math reusable by pupils, cardinals, and zoom calculations.
- Compute runtime constants from the same prepared-state and first-order primitives.
- Preserve special handling for stop placement and inside-element stops.
- Folded reflective cardinal output remains guarded unless tests cover the specific configuration.
- Do not duplicate two-ray pupil decomposition in analysis modules.

Tests:

- `buildLens` constant parity.
- Effective focal length and back focal distance parity.
- Entrance and exit pupil parity.
- Effective f-number parity.
- Zoom optics arrays.
- Cardinal element overlays for ordinary lenses.
- Mirror-safe axial cardinal fixture parity.

Exit gate:

- Build-time and current-state first-order values come from one `optics-2` owner.
- Pupil calculations can be reused by vignetting, bokeh, and pupil-aberration modules.

### P9. Chromatic Behavior

Implements: R4 and chromatic portions of R9 and R11.

Required modules:

- `src/optics-2/chromatic/dispersionAdapter.ts`.
- `src/optics-2/chromatic/indexResolver.ts`.
- `src/optics-2/chromatic/chromaticTrace.ts`.
- `src/optics-2/chromatic/dispersionQuality.ts`.

Implementation contract:

- Reuse existing glass catalog data and resolver logic during the parallel phase.
- Resolve glass names once during normalization.
- Compile per-surface channel index resolvers into `EngineLens`.
- Keep channel wavelength constants centralized.
- Preserve the existing quality cascade and mismatch diagnostics.
- Make chromatic trace a thin wrapper around the core trace with channel-specific media.

Tests:

- Sellmeier lens chromatic parity.
- Line-index lens chromatic parity.
- Abbe fallback parity.
- Constant-index fallback parity.
- Glass catalog mismatch scan parity.
- Existing generated glass report stability.

Exit gate:

- Chromatic UI readouts and ray fans do not need direct access to old dispersion helpers.
- Glass catalog compatibility remains unchanged.

### P10. Diagram Geometry

Implements: R12.

Required modules:

- `src/optics-2/diagram/coordinateTransforms.ts`.
- `src/optics-2/diagram/surfaceOutline.ts`.
- `src/optics-2/diagram/elementShapes.ts`.
- `src/optics-2/diagram/renderDiagnostics.ts`.
- `src/optics-2/diagram/legacyDiagramAdapter.ts`.

Implementation contract:

- Surface outline generation must use the same sag and slope functions as tracing.
- Element shape code must operate on `PreparedOpticalState`.
- Rendering diagnostics must remain structured and testable.
- SVG path output should be generated only at the diagram adapter boundary.
- Numeric path comparisons in tests should parse points or commands rather than compare raw strings when possible.
- Preserve coating accents, annular fills, tilted mirror shapes, conic trimming, slope trimming, and cross-gap intrusion
  trimming.

Tests:

- Element shape parity for ordinary spherical lens groups.
- Aspheric path parity.
- Tilted mirror fixture geometry.
- Annular mirror even-odd fill geometry.
- Render diagnostic parity for conic limit and intrusion cases.

Exit gate:

- The diagram can render from `optics-2` shape output without changing component props.
- Trace and diagram no longer duplicate surface-profile math.

### P11. Analysis Modules Behind The Facade

Implements: R11.

Required modules:

- `src/optics-2/analysis/analysisJobs.ts`.
- `src/optics-2/analysis/aberrations.ts`.
- `src/optics-2/analysis/bokeh.ts`.
- `src/optics-2/analysis/distortion.ts`.
- `src/optics-2/analysis/fieldCurvature.ts`.
- `src/optics-2/analysis/vignetting.ts`.
- `src/optics-2/analysis/pupilAberration.ts`.
- Additional small modules only when they map to a real existing analysis boundary.

Migration order:

1. Port scalar and low-risk helpers with no ray trace dependency.
2. Port axial ray-heavy helpers such as spherical aberration.
3. Port field-dependent helpers that need chief-ray solving.
4. Port chromatic helpers after P9 is complete.
5. Port folded-safe analysis only after P6 tests cover that tab.
6. Leave mirror-unsafe tabs guarded until their fixture-backed implementation exists.

Implementation contract:

- Analysis functions accept `PreparedOpticalState` in engine-native code.
- Compatibility wrappers preserve old function signatures for UI callers.
- Batch trace APIs are introduced only where repeated trace loops are measured.
- Sample grids, field positions, stop settings, and fallback statuses remain visible in typed output.
- Drawer components should receive the same data shape until final migration.

Tests:

- One parity suite per migrated analysis module.
- Focus, zoom, aperture, and field-angle state cases for every slider-dependent module.
- Folded guard tests proving unsafe tabs stay guarded.
- Regression tests for known historical failures referenced in agent docs.

Exit gate:

- Analysis drawer imports can switch module by module without component rewrites.
- No migrated analysis module calls old trace helpers through a hidden side path.

### P12. Compatibility Barrels And Optional UI Opt-In

Implements: the temporary bridge between old app code and new engine modules.

Required modules:

- `src/optics-2/compat.ts`.
- `src/optics-2/index.ts`.
- Optional `src/optics/engineSelector.ts` or a utility-layer selector if that better fits existing import boundaries.
- Focused tests for hooks that consume the selector.

Selector contract:

- The default production selector remains the existing engine until parity gates are satisfied.
- The optional `optics-2` selector is internal and may be driven by a compile-time constant or test-only flag.
- No lens file, URL state, or user-facing UI control chooses the engine.
- Selector return values preserve existing object identity expectations as far as React memoization depends on them.

Hook migration order:

1. Pure optics tests import `optics-2` directly.
2. `useLensComputation` uses the selector for build, layout, and diagram data.
3. `useOnAxisRays` uses the selector for sequential ray fans.
4. `useOffAxisRays` uses shared projection and chief-ray helpers.
5. `useChromaticRays` uses chromatic trace wrappers.
6. Analysis drawer data imports switch after each module passes parity.

Verification:

- Representative lens page renders with old engine.
- Representative lens page renders with `optics-2` selector enabled.
- URL state, slider state, theme state, and analysis tab state are unchanged.
- Existing component props do not gain engine-specific fields.

Exit gate:

- Developers can compare old and new engines side by side.
- App code has a narrow import boundary for the final migration.

### P13. Performance Pass

Implements: R13.

Required artifacts:

- A repeatable benchmark command or script.
- A short benchmark summary under `engine-migration/` or branch notes.
- Any new batch APIs justified by benchmark output.

Benchmark protocol:

1. Record machine, Node version, branch, and commit.
2. Run old-engine and new-engine benchmarks in the same process when possible.
3. Warm up each case before measurement.
4. Use the same prepared lens, slider state, field state, aperture state, and ray density for both engines.
5. Record median, worst, and successful sample counts.
6. Repeat enough times to distinguish signal from noise.
7. Include failure counts and clipped counts so speedups do not hide behavior loss.

Required benchmark cases:

- Sequential on-axis display rays.
- Sequential off-axis display rays.
- Skew ray trace.
- Chromatic fan.
- Distortion grid.
- Vignetting sweep.
- Bokeh point cloud or spot grid.
- Folded auto-path fixture.

Optimization rules:

- Remove repeated state preparation before changing math algorithms.
- Prefer compiled arrays and prepared closures over map lookups in per-ray loops.
- Reuse small vector temporaries only when profiling shows allocation pressure and the code remains readable.
- Keep compatibility adapters thin; do not optimize by duplicating core trace logic.
- Document any intentional difference that trades performance for correctness.

Exit gate:

- Ordinary display rendering is not slower beyond measurement noise.
- At least one nested analysis path is measurably faster or less allocative.
- Any regression over 15 percent has a documented reason and follow-up.

### P14. Documentation And Authoring Updates

Implements: long-term maintainability after the rewrite.

Required documentation updates:

- `agent_docs/architecture/optics-engine.md` describes `optics-2` modules, data flow, and migration status.
- `agent_docs/architecture/public-functions.md` lists new authoritative imports after each public import moves.
- `agent_docs/architecture/viewer-and-diagram.md` notes diagram data flow changes after P10/P12.
- `agent_docs/architecture/ui-components.md` notes any analysis facade changes after P11/P12.
- `agent_docs/gotchas.md` captures new numerical, folded-path, projection, and caching constraints.
- `src/lens-data/LENS_DATA_SPEC.md` changes only if lens authors gain a real new field or rule.
- `src/lens-data/TEMPLATE.data.ts.template` changes only if authoring changes.

Documentation quality rules:

- State whether old `src/optics` or new `src/optics-2` is authoritative at that point in the migration.
- Keep diagrams or flow summaries focused on import boundaries and data flow.
- Avoid documenting temporary internals as permanent authoring rules.
- Include examples only when they help lens authors or future engine work.

Verification:

- Documentation references real files and exported names.
- No doc tells lens authors to use a field that validation does not support.
- No doc claims final migration is complete until old import paths are actually removed or redirected.

Exit gate:

- A future contributor can add a lens, debug a trace, and migrate an analysis helper without rediscovering the engine
  architecture from source alone.

## Compatibility Strategy

### Lens Files

Keep the current `LensDataInput` contract. `optics-2` should normalize existing files and should not require migration
edits to `src/lens-data/**/*.data.ts`.

Compatibility requirements:

- `satisfies LensDataInput` keeps working.
- `LENS_DEFAULTS` merging keeps working.
- `validateLensData` errors remain clear and mostly stable.
- Auto-discovery through `import.meta.glob` keeps working.
- `*.analysis.md` companion files are unaffected.
- Hidden reference fixtures stay hidden and continue to anchor folded behavior.

### Glass Catalog

During parallel operation:

- Keep the glass catalog data in its current source files.
- Import existing catalog helpers into `optics-2/chromatic/dispersionAdapter.ts`.
- Keep report tests and scan tests pointed at the same catalog data.

At final migration:

- Either leave the catalog files at stable paths and let `src/optics` re-export new engine functions around them, or move
  catalog files only with compatibility re-exports and updated public-function docs.
- Do not split catalog aliases or data into two divergent copies.

### RuntimeLens

During parallel operation:

- `buildLens2` returns a legacy-compatible `RuntimeLens`.
- Legacy properties remain available:
  - `S`, `N`, `ES`, `asphByIdx`, `varByIdx`, `indexByIdx`.
  - `stopIdx`, `stopPhysSD`, `EP`, `EFL`, `FOPEN`, `halfField`, `tracingHalfField`.
  - zoom arrays.
  - display scale constants.
  - ray fan arrays.
  - `opticalPath`, `imagePlane`, `isFoldedOptics`.

Internally:

- Store `EngineLens` and prepared-state caches separately.
- Avoid mutating `RuntimeLens`.
- Prefer `EngineLens` in new code.

### UI Code

Keep UI props stable until after engine parity:

- `useLensComputation` still returns `L`, `IMG_MM`, `zPos`, transforms, shapes, aperture values, field geometry, and
  readouts.
- `useRayTracing` still returns ray segments and chromatic spread.
- Analysis drawer inputs remain `focusT`, `zoomT`, `aberrationT`, `currentEPSD`, `currentPhysStopSD`, `dynamicEFL`, and
  `fieldGeometry`.
- Diagram components remain SVG-only.

Once stable, migrate hooks to prepare state once and pass `PreparedOpticalState` internally while preserving component
props.

### Tests

Add tests before changing callers. The existing suite already has strong coverage; use it as a migration scaffold.

Required new test groups:

- `__tests__/optics-2/math/*`
- `__tests__/optics-2/prescription/*`
- `__tests__/optics-2/trace/*`
- `__tests__/optics-2/field/*`
- `__tests__/optics-2/analysis/*`
- `__tests__/optics-2/parity/*`

Run focused tests after each phase, then the normal gate:

```bash
npm run typecheck
npm run format:check
npm run lint
npm run test
```

Run `npm run build` when route metadata, lens-data organization, generated metadata, SEO, article, or sitemap behavior
could be affected.

## Readability And DRY Guardrails

These are engineering rules for the rewrite.

1. One owner per formula.
   - Sag and slope live in surface profiles.
   - Aperture state lives in trace aperture helpers.
   - Projection launch lives in projection helpers.
   - Variable thickness lives in the state/prescription layer.

2. One prepared state per slider state.
   - Do not rebuild state surfaces inside every trace or analysis loop.
   - Compatibility wrappers may prepare state internally, but new code should pass prepared state explicitly.

3. Keep adapters thin.
   - `compat.ts` should translate arguments and result shapes.
   - It should not become a second engine.

4. Prefer small typed result objects over tuple-heavy APIs for new code.
   - Legacy wrappers can keep positional arguments.
   - Engine-native functions should name state, options, and diagnostics clearly.

5. Keep pure modules pure.
   - No React imports in `src/optics-2`.
   - No browser globals.
   - No hidden mutable module-level optical state.

6. Use caches only where their lifetime is explicit.
   - Lens/state caches are acceptable.
   - Avoid global caches that outlive the lens object without a clear owner.

7. Keep comments focused on why.
   - Do not narrate formulas line by line.
   - Do document sign conventions, fallback choices, and numerical tolerances.

8. Do not broaden feature support without tests.
   - Folded analysis tabs remain guarded until generalized math and fixtures are in place.
   - Perspective-control analysis remains centered-lens until moved-optics analysis is explicitly implemented.

## Feature Parity Matrix

| Existing capability | Current owner | Optics 2 owner | Migration notes |
| --- | --- | --- | --- |
| Lens validation | `validateLensData.ts` | `prescription/validateLensData2.ts` | Wrap current validation first; split later only if needed. |
| Runtime construction | `buildLens.ts` | `prescription/normalizeLensData.ts`, `compat.ts` | Return legacy `RuntimeLens` during parallel phase. |
| Variable gaps | `internal/lensState.ts` | `prescription/variables.ts`, `state/prepareState.ts` | One resolver reused by build, layout, trace, and analysis. |
| Sag/slope/asphere | `internal/surfaceMath.ts` | `math/surfaceProfile.ts` | Single implementation for trace, validation, render. |
| Surface intersection | `internal/surfaceIntersection.ts` | `math/intersection.ts` | Preserve bracket/Newton robustness. |
| Sequential trace | `rayTrace.ts`, `exactSurfaceTrace.ts` | `trace/traceCore.ts` | Vector-native with legacy slope adapters. |
| Folded trace | `internal/exactSurfaceTrace.ts` | `trace/pathPlanner.ts`, `trace/traceCore.ts` | Same result diagnostics, same fixtures. |
| Projection launch | `projection.ts` | `field/projection.ts` | Keep all field launch logic centralized. |
| Chief ray solve | `fieldGeometry.ts` | `field/chiefRay.ts` | Cache by prepared state and launch surface. |
| Layout | `layout.ts` | `state/layout.ts` | Prepared state should remove repeated z rebuilds. |
| Dispersion | `dispersion.ts`, `glassCatalog*` | `chromatic/dispersionAdapter.ts` | Reuse catalog data, avoid divergent copies. |
| Diagram shapes | `diagramGeometry.ts` | `diagram/elementShapes.ts` | Keep SVG output stable. |
| Ray sampling | `raySampling.ts` | `sampling/raySampling.ts` | Preserve normal lens-authored fans. |
| Analysis jobs | `analysisJobs.ts`, analysis modules | `analysis/*` | Port behind facade with parity tests. |
| Perspective movement | `lensMovement.ts` | Keep or port after core parity | Display-layer transform remains separate. |

## Improvements Over The Existing Engine

The rewrite should improve the engine in concrete ways, not just rename modules.

### Prepared State Instead Of Repeated State Rebuilds

Today many helpers reconstruct state surfaces or z positions from `(focusT, zoomT, L)`. `optics-2` should prepare those
once per slider state and pass them through ray rendering and analysis.

Expected benefit:

- Less repeated work in ray fans and analysis loops.
- Fewer accidental differences between visible rays and analysis rays.
- Clearer cache boundaries.

### One Vector-Native Trace Core

Today slope launches, vector launches, skew launches, sequential paths, and generalized folded paths share some code but
still expose several adapters and return projections. `optics-2` should make vector rays the core representation.

Expected benefit:

- Fisheye and bounding-sphere paths become ordinary ray inputs.
- Skew analysis uses the same model as meridional drawing.
- Folded image-plane termination becomes a core result, not a special case.

### Shared Aperture Semantics

Today aperture checks are correct but spread through trace and sampling helpers. `optics-2` should centralize aperture
state and clipping reasons.

Expected benefit:

- Annular mirrors, inner holes, stops, blockers, and inactive-side mirrors stay consistent.
- Obstruction-aware sampling can reuse the same physical aperture interpretation.

### Batch Ray APIs

Analysis code often traces many rays with the same prepared state and options. Add batch APIs only where the benchmark
harness shows repeated overhead.

Expected benefit:

- Vignetting, distortion grids, bokeh previews, and chromatic fans can amortize setup.
- The UI can stay responsive while settled analysis becomes cheaper.

### Rich Core Diagnostics, Thin UI Results

Keep the rich `EngineTraceResult` inside the engine and project it to legacy diagram results only at the boundary.

Expected benefit:

- Tests can inspect why a trace failed.
- UI remains simple.
- Folded analysis can reuse hit/image-plane data without retracing.

### More Direct Folded Analysis Path

Do not mark folded tabs safe prematurely. Instead, make the engine provide the missing primitives: generalized stop hits,
image-plane coordinates, vector chief rays, and final plane tangents for every trace.

Expected benefit:

- Each folded analysis tab can become supported through a local, fixture-backed change instead of another special path.

## Final Migration From Existing Engine

The final migration should happen only after `optics-2` has parity coverage, app-level smoke coverage, and benchmark
results. Treat it as its own phase, not an incidental cleanup.

### Entry Criteria

All of the following must be true:

- `buildLens2` can build every visible lens and every hidden reference fixture.
- `optics-2` parity tests pass for layout, rays, chromatic paths, field geometry, chief rays, folded diagnostics, diagram
  geometry, and analysis outputs.
- `useLensComputation`, `useRayTracing`, and analysis drawer tests pass with the new engine selected.
- `npm run test` passes with `optics-2` selected.
- `npm run typecheck`, `npm run format:check`, and `npm run lint` pass.
- Benchmarks show no unacceptable regression in normal diagram rendering or settled analysis.
- Folded unsupported tab gating remains correct.

### Migration Steps

1. Freeze the old engine.
   - Stop adding features to `src/optics` except critical bug fixes.
   - Route new optics features to `src/optics-2`.

2. Flip compatibility imports.
   - Change the stable `src/optics/optics.ts` barrel to re-export from `src/optics-2/compat.ts`.
   - Change `src/optics/buildLens.ts` to delegate to `buildLens2`.
   - Change focused public modules one at a time:
     - `projection.ts`.
     - `dispersion.ts` or its adapter.
     - `diagramGeometry.ts`.
     - `raySampling.ts`.
     - analysis modules.

3. Run the full gate.

```bash
npm run typecheck
npm run format:check
npm run lint
npm run test
npm run build
```

4. Keep old internals temporarily.
   - Move old implementation files to `src/optics-legacy` only if needed for rollback.
   - Prefer leaving them untouched until one release/deployment has exercised `optics-2`.
   - Do not keep duplicate public exports longer than needed.

5. Update documentation.
   - `agent_docs/architecture/optics-engine.md`
   - `agent_docs/architecture/public-functions.md`
   - `agent_docs/gotchas.md`
   - Any generated reports whose wording or paths change.

6. Remove the engine selector flag.
   - Delete temporary feature flags.
   - Delete old-vs-new parity scaffolding that is no longer useful.
   - Keep durable regression tests that protect the new implementation.

7. Retire legacy files.
   - Delete old internals only after the new public modules own all callers.
   - Keep stable module paths where app code and tests expect them, even if they re-export `optics-2`.
   - Avoid mass import churn unless it makes the codebase clearer.

8. Verify production-facing behavior.
   - Run `npm run build`.
   - Spot-check ordinary, zoom, fisheye, PC, soft-focus, and folded-reference pages locally.
   - Confirm analysis drawer gating and notices.
   - Confirm generated glass and mirror reports if relevant.

### Rollback Plan

If a serious regression appears during final migration:

1. Revert only the barrel/delegation changes that selected `optics-2`.
2. Keep `src/optics-2` and its tests in the tree if they do not break the app.
3. Add a failing regression test in the `optics-2` parity suite.
4. Fix the new engine behind the selector before attempting migration again.

## Suggested Milestone Order

1. Math and surface profiles.
2. Lens normalization and legacy `RuntimeLens` adapter.
3. Prepared state and layout parity.
4. Sequential tracing parity.
5. Folded tracing parity.
6. Projection and chief-ray parity.
7. First-order, pupils, and runtime constant parity.
8. Chromatic parity.
9. Diagram geometry parity.
10. Analysis parity.
11. UI opt-in.
12. Performance pass.
13. Final migration.

This order keeps the riskiest correctness contracts visible early while delaying broad UI churn until the new engine has
earned trust.
