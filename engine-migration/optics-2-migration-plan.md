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

1. Add `__tests__/src/optics-2/parity/` with tests that import both engines once `optics-2` exists.
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

- `__tests__/src/optics-2/math/*`
- `__tests__/src/optics-2/prescription/*`
- `__tests__/src/optics-2/trace/*`
- `__tests__/src/optics-2/field/*`
- `__tests__/src/optics-2/analysis/*`
- `__tests__/src/optics-2/parity/*`

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
