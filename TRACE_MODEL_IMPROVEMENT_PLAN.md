# Trace Model Improvement Plan

Status: draft analysis, 2026-05-20

This document explains why heavy ultra-wide and fisheye lenses stress the current optics engine, what parts of the
trace model need to change, and how to stage the work without destabilizing ordinary rectilinear lenses.

The immediate trigger was the Nikon Fisheye-Nikkor 6mm f/2.8, but the underlying issue is broader: the app still treats
most field geometry as if every lens is rectilinear and every incoming ray can be described by a finite forward `z`
slope. That assumption breaks down for true fisheyes, especially lenses with coverage approaching or exceeding 180
degrees.

## Executive Summary

The current engine has a good exact surface tracer internally, but the surrounding public APIs and analysis helpers are
still slope-first. A field angle is usually turned into `tan(theta)`, then traced as a meridional or skew slope. This is
reasonable for conventional lenses at moderate fields. It is fragile for fisheyes because:

- `tan(theta)` becomes unbounded at 90 degrees.
- Fields beyond 90 degrees cannot be represented by a forward `[ux, uy, 1]` slope vector.
- Fisheye image height is not rectilinear `f * tan(theta)`.
- Distortion should be measured as residual from the declared projection, not from rectilinear perspective.
- Chief-ray, vignetting, pupil, and off-axis aberration helpers each rebuild their own slope launch assumptions.
- Heavy ray bundles and repeated bisection solves can run on every UI update unless gated or cached.

The core solution is to introduce a projection-aware vector ray launch layer:

1. Keep paraxial tracing for first-order references.
2. Expose exact tracing through normalized 3D ray origins and directions.
3. Convert field/image samples into object-space rays through a shared projection model.
4. Solve chief rays and pupil constraints in vector space.
5. Migrate distortion, vignetting, pupil aberration, off-axis aberration, bokeh, and diagram ray bundles to the shared
   launch layer.
6. Add adaptive sampling, cancellation, memoization, and optional worker execution around heavy analyses.

Until that is done, fisheye lenses should remain guarded by `projection.maxTraceFieldDeg` below 90 degrees for trace-heavy
views, even when their metadata records a larger real field of view.

## Current State

The engine currently has several trace layers:

- Paraxial first-order tracing for EFL, principal planes, pupils, and other first-order references.
- Legacy vertex-plane real tracing that propagates meridional rays by slope and `tan(U)`.
- Exact surface tracing that intersects spherical/aspheric surfaces and refracts by local normals.
- Analysis helpers that launch ray bundles for distortion, vignetting, pupil aberration, off-axis aberrations, bokeh, and
  field geometry.

The exact surface tracer is the strongest foundation. It already uses vector math internally for surface intersections
and refraction. The limitation is at the boundary: most callers still provide `ux0` and `uy0` slopes, and the tracer
normalizes those as a forward vector equivalent to `[ux0, uy0, 1]`. That means the public contract cannot represent
side-arriving rays or rays whose object-space direction has non-positive `z`.

Recent fisheye-specific groundwork already improves the situation:

- Lens data can declare `projection.kind`, currently including `rectilinear` and `fisheye-equidistant`.
- Fisheyes can use a projection focal scale for aperture sizing instead of the misleading Gaussian EFL.
- Fisheye half-field tracing can be clamped to a safe maximum.
- Distortion can be reported as residual against an equidistant projection instead of rectilinear `F-Tan(theta)`.
- Heavy/fisheye lenses can reduce ray density while the user is actively interacting.

Those are important guards, but they do not yet make the tracing model itself fully fisheye-capable.

## Why The Nikon 6mm Fisheye Exposed The Problem

The Nikon Fisheye-Nikkor 6mm f/2.8 is not just a short rectilinear lens. It is a circular fisheye with extreme coverage.
If treated as an ordinary rectilinear lens, several calculations become pathological:

- The first-order Gaussian EFL derived from paraxial tracing can be far from the marked/projection focal length. Using
  that Gaussian value to size the aperture makes the lens appear optically enormous in downstream calculations.
- Full field coverage around 220 degrees implies a half-field around 110 degrees. A rectilinear launch would call
  `tan(110deg)`, which is finite but points in the wrong representational regime; at 90 degrees it is singular, and
  beyond 90 degrees the ray is no longer a simple forward `z` slope.
- Chief-ray bisections and pupil sweeps can chase impossible or unstable launches, producing many failed traces and
  expensive retries.
- Distortion viewed against rectilinear projection reports the nature of fisheye projection itself as "distortion",
  overwhelming the useful residual error.
- Large semi-diameters and many elements increase the cost of every ray bundle, so any runaway analysis loop becomes a
  UI stability problem.

The slow load and browser crashes are therefore not one isolated bug. They are the visible result of multiple assumptions
colliding:

- a rectilinear image-height model,
- a slope-based object ray model,
- first-order focal values reused for finite-ray aperture sizing,
- expensive analysis panels recomputing during UI updates,
- and no single field-launch contract that can fail cheaply and predictably.

## The Fundamental Model Gap

For a normal rectilinear lens, this approximation is usually acceptable:

```text
field angle theta -> object slope u = tan(theta) -> trace with direction [0, u, 1]
```

For a fisheye, the image formation model is closer to:

```text
field angle theta -> image height r = projection(theta)
field angle theta + azimuth phi -> object direction vector
object direction vector -> traced ray bundle through the lens
```

Those are different problems. Projection maps object angle to image radius. Ray tracing propagates physical rays through
surfaces. The app currently lets the rectilinear projection law leak into ray launch, chart reference lines, and analysis
sampling.

The improved model should make these concepts explicit:

- Object field angle: the angular direction of the scene point.
- Image height/radius: where that point should land under a chosen projection law.
- Launch ray: an origin and normalized direction in object space.
- Chief ray: the specific ray from a field point that passes through the stop or entrance pupil.
- Marginal/skew rays: surrounding bundle rays sampled around the pupil.
- Distortion residual: measured difference from the lens's declared projection reference.

## Fisheye Projection Types To Support

The first implementation only needs to use equidistant fisheye behavior where a lens declares it. To avoid future
discoveries turning into new architectural churn, the type system and helper API should leave room for other fisheye
families.

### Rectilinear

Formula:

```text
r = f * tan(theta)
```

Use for ordinary photographic lenses. It cannot represent 180 degrees because image height approaches infinity at 90
degrees.

### Equidistant Fisheye

Formula:

```text
r = f * theta
```

Use for lenses where equal increments of field angle map to equal radial image increments. This is the current Nikon 6mm
guardrail and residual-distortion reference.

### Equisolid-Angle Fisheye

Formula:

```text
r = 2 * f * sin(theta / 2)
```

Common in photographic fisheyes. It preserves equal solid angles as equal image areas. Distortion charts and field grids
must use this reference instead of equidistant spacing.

### Stereographic Fisheye

Formula:

```text
r = 2 * f * tan(theta / 2)
```

Often associated with angle-preserving/conformal fisheye projection. It approaches infinity at 180 degrees, so it is not
appropriate for circular 180+ image circles but is relevant for some ultra-wide mappings.

### Orthographic Fisheye

Formula:

```text
r = f * sin(theta)
```

Maps a hemisphere into a finite circle. It compresses near the edge and does not distinguish angles symmetrically beyond
90 degrees without additional convention, so inverse mapping needs careful range limits.

### Polynomial Or Calibrated Fisheye

Formula:

```text
r = c1 * theta + c3 * theta^3 + c5 * theta^5 + ...
```

Useful when a patent, calibration table, or empirical source gives projection coefficients rather than a named ideal
projection. This should be an escape hatch, not the first implementation.

## Projection Differences That Matter To Analysis

The physical ray direction for a field point is set by object angle and azimuth. The projection law decides how that
object angle maps to image position and how an image grid maps back to object angles.

That distinction matters per analysis view:

- Distortion: must compare actual image height to the declared projection reference, not always rectilinear height.
- Distortion field grid: must inverse-map ideal image grid points through the selected projection before tracing.
- Off-axis aberrations: should sample object field angles directly or through projection-aware image positions.
- Vignetting: should launch chief and pupil rays for the selected object angle without assuming a finite tangent slope.
- Pupil aberration: should solve entrance/exit pupil mapping using vector rays, especially off axis.
- Bokeh: should sample bundles around a chief ray defined in vector space, not around a meridional slope only.
- Diagram rendering: should be allowed to show a safe representative subset when the real full field exceeds the
  displayable forward trace domain.

Only projection-aware/fisheye-specific calculations should activate for non-rectilinear `projection.kind` values.
Rectilinear lenses should continue to use the current fast paths unless a migrated vector path is known equivalent.

## Target Architecture

### 1. Explicit Projection Model

Create a central projection module that owns:

- `imageRadiusForFieldAngle(projection, thetaRad)`
- `fieldAngleForImageRadius(projection, imageRadiusMm)`
- `fieldDirectionForAngles(thetaRad, azimuthRad)`
- projection labels for UI and chart captions
- domain checks for maximum representable angle

This module should support rectilinear, equidistant, equisolid-angle, stereographic, orthographic, and eventually
polynomial/calibrated projections.

The important rule: no analysis helper should hand-roll `f * tan(theta)` or `-Math.tan(theta)` as its private field model.

### 2. Vector Ray Contract

Add a first-class vector trace input:

```ts
interface VectorRayInput {
  origin: Vec3;
  direction: Vec3; // normalized
  wavelength?: number;
}
```

Trace output should carry:

```ts
interface VectorRayTraceResult {
  status: "ok" | "missed-surface" | "blocked-by-aperture" | "tir" | "invalid-launch";
  points: Vec3[];
  finalPoint?: Vec3;
  finalDirection?: Vec3;
  surfaceHits?: SurfaceHit[];
}
```

Legacy `y/u` slope outputs can remain as adapters for existing UI and tests, but only when `abs(direction.z)` is safely
above an epsilon.

### 3. Exact Surface Stack Vector Entry Point

The exact tracer should expose a vector-native function. Internally it can reuse most of the existing intersection and
Snell logic.

Candidate API:

```ts
traceExactSurfaceStackVector(L, zPos, {
  origin,
  direction,
  wavelength,
  stopAt,
  recordPath,
})
```

This should not construct an artificial `[ux, uy, 1]` direction. It should accept rays with very small `direction.z` and
eventually support rays that enter from outside the forward cone if the launch model can define a valid first
intersection.

### 4. Shared Field Launch Layer

Add a shared helper that turns a field sample into one or more physical rays:

```ts
interface FieldSample {
  fieldAngleRad: number;
  azimuthRad: number;
}

interface LaunchContext {
  objectConjugate: "infinity" | "finite";
  objectDistanceMm?: number;
  launchSurface: "object-plane" | "bounding-sphere" | "reverse-from-stop";
}
```

For ordinary fields below 90 degrees, a simple object-side plane may be sufficient. For extreme fisheyes, a plane before
the first surface is not enough, because rays can arrive nearly sideways or from behind the forward hemisphere. The
launch layer will likely need one or both of:

- a large object-side bounding sphere that emits rays toward the lens,
- reverse tracing from the image/stop side back into object space to identify valid entering bundles.

### 5. Vector Chief-Ray Solver

The chief ray should be solved as a vector condition, not a meridional slope bisection.

For an object at infinity:

1. Choose the object-space direction from field angle and azimuth.
2. Parameterize possible incoming rays by their transverse offset on a launch surface.
3. Trace candidates through the lens.
4. Solve for the candidate that passes through the stop center or desired pupil coordinate.

For finite objects:

1. Define the object point in 3D.
2. Parameterize rays from that object point toward candidate pupil coordinates.
3. Trace and solve against stop/pupil constraints.

This should replace duplicated chief-ray bisection logic in field geometry, distortion, vignetting, and pupil analyses.

### 6. Analysis Bundle Builder

Add a reusable bundle builder:

```ts
buildRayBundleForField(L, zPos, state, {
  fieldAngleRad,
  azimuthRad,
  pupilSampling,
  projection,
  lod,
})
```

It should return chief, sagittal, tangential, meridional, skew, and pupil samples with trace statuses. Analysis modules
can then consume the same bundle geometry instead of launching their own incompatible ray sets.

### 7. Trace Failure Semantics

Every trace-heavy analysis should handle failure without runaway retries:

- Return typed statuses, not just `null` or thrown exceptions.
- Distinguish physically blocked rays from numerical failure.
- Limit bisection iterations and expose the final reason.
- Cache failed launch domains so the UI does not rediscover the same impossible trace repeatedly.
- Prefer sparse/partial charts over tab crashes.

## Staged Implementation Plan

### Phase 0: Preserve Current Guards

Already underway:

- Keep fisheye projection metadata on lens data.
- Keep aperture sizing based on projection focal scale for fisheyes.
- Keep trace-heavy fisheye fields clamped below 90 degrees.
- Keep distortion residuals projection-aware for equidistant fisheyes.
- Keep adaptive ray density for heavy/fisheye lenses during interaction.

Acceptance criteria:

- The Nikon 6mm fisheyes load reliably.
- Ordinary rectilinear lenses show unchanged behavior.
- Distortion labels clearly distinguish rectilinear distortion from fisheye projection residual.

### Phase 1: Add Vector Trace API Without Migrating Callers

Scope:

- Add vector-native exact trace entry point.
- Add vector types and normalization helpers.
- Preserve existing slope-based functions as adapters.
- Add unit tests that compare vector and slope traces for moderate rectilinear rays.

Acceptance criteria:

- For small and moderate fields, vector entry and current slope entry agree within tolerance.
- Vector trace accepts very large direction slopes without constructing infinities.
- Legacy tests remain unchanged.

### Phase 2: Centralize Projection Math

Scope:

- Expand projection helpers beyond equidistant.
- Add inverse projection support for each named projection.
- Add domain validation in lens data validation.
- Update documentation and template examples.

Acceptance criteria:

- Rectilinear, equidistant, equisolid-angle, stereographic, and orthographic projections round-trip angle to radius and
  back within tolerance over their valid domains.
- UI labels and chart references are generated from projection metadata.
- Non-rectilinear calculations only activate when `projection.kind` is non-rectilinear.

### Phase 3: Add Shared Field Launch And Chief-Ray Solver

Scope:

- Build field-to-direction helpers.
- Add launch-surface abstraction for object plane and future bounding sphere.
- Implement vector chief-ray solve for fields below 90 degrees first.
- Add strict iteration caps and typed failures.

Acceptance criteria:

- Existing field geometry matches current results for ordinary lenses.
- Fisheye fields below the clamp use the vector solver successfully.
- Failed solves return structured status and do not block the UI thread with repeated retries.

### Phase 4: Migrate Analysis Modules One At A Time

Suggested order:

1. `fieldGeometry`: centralize chief-ray and image-height solving.
2. `distortionAnalysis`: finish projection-aware curve and grid behavior on top of vector launch.
3. `vignetteAnalysis`: move pupil sweeps to shared bundle builder.
4. `pupilAberration`: use vector chief and pupil mapping.
5. `aberration/offAxis`: migrate off-axis bundles.
6. `bokeh`: reuse vector bundle/pupil sampling.
7. Diagram ray hooks: optionally use vector launch for non-rectilinear lenses only.

Acceptance criteria:

- Each migrated module has comparison tests for rectilinear lenses.
- Each migrated module has at least one fisheye fixture test.
- The UI can show partial results with warnings when rays are blocked or unsupported.

### Phase 5: Support Extreme Fisheye Fields

Scope:

- Add bounding-sphere or reverse-trace launch for fields near and beyond 90 degrees.
- Decide how diagram views represent rays outside the forward half-space.
- Add support for circular fisheye image circles and fields up to 180, then 220 degrees where physically meaningful.

Acceptance criteria:

- 180-degree circular fisheyes can compute projection residuals and representative ray bundles without `tan` singularities.
- 220-degree lenses can represent metadata truthfully while limiting views that do not yet have a meaningful physical
  launch.
- The app reports "not supported for this field/projection" instead of hanging.

### Phase 6: Performance Hardening

Scope:

- Add `lod: "interactive" | "final"` options to heavy analysis functions.
- Cache trace bundles by lens, focus, zoom, aperture, wavelength, field angle, azimuth, projection, and LOD.
- Add cancellation via `AbortSignal` or equivalent for stale slider-driven analysis.
- Consider Web Workers for distortion grids, vignetting sweeps, and bokeh previews.
- Keep heavy non-visible analyses unmounted or deferred.

Acceptance criteria:

- Slider interaction remains smooth on heavy/fisheye lenses.
- Pointer release converges to full-resolution final results.
- Stale analysis computations cannot overwrite newer UI state.

### Phase 7: Data And UI Rollout

Scope:

- Audit existing fisheye and ultra-wide lens data for projection kind.
- Add image circle metadata where known.
- Add clear UI labels for projection kind and residual reference.
- Keep warnings concise and specific when an analysis view is clamped or approximated.

Acceptance criteria:

- Lens pages explain when a projection-aware path is being used.
- Analysis tabs do not imply rectilinear distortion for fisheye lenses.
- Lens data validation catches missing projection metadata for lenses whose field/focal relationship is impossible as
  rectilinear.

## Candidate File Touch Points

Likely implementation areas:

- `src/types/optics.ts`: vector ray types, projection types, trace status types.
- `src/optics/projection.ts`: projection formulas and inverse formulas.
- `src/optics/internal/exactSurfaceTrace.ts`: vector-native trace entry point.
- `src/optics/rayTrace.ts`: legacy adapters and public trace migration.
- `src/optics/fieldGeometry.ts`: shared vector chief-ray solver.
- `src/optics/distortionAnalysis.ts`: projection-aware residuals and grid inverse mapping.
- `src/optics/vignetteAnalysis.ts`: vector bundle/pupil sweeps.
- `src/optics/pupilAberration.ts`: vector pupil mapping.
- `src/optics/aberration/offAxis.ts`: off-axis vector bundles.
- `src/components/hooks/useOnAxisRays.ts`: representative diagram rays for non-rectilinear lenses.
- `src/components/hooks/useOffAxisRays.ts`: off-axis diagram ray migration.
- `src/components/display/analysis/*`: labels, warnings, partial-result states.
- `src/optics/validateLensData.ts`: projection validation.
- `src/lens-data/LENS_DATA_SPEC.md`: data conventions.

## Test Strategy

Unit tests:

- Projection formula round-trips for every projection type.
- Vector trace equals slope trace for modest rectilinear cases.
- Vector trace rejects invalid directions cleanly.
- Chief-ray solver converges for known ordinary lenses.
- Solver failure statuses are deterministic.

Regression tests:

- Nikon 6mm f/2.8 and f/5.6 fisheyes load and compute clamped analysis without hanging.
- Rectilinear catalog fixtures keep existing image heights and distortion signs.
- Distortion residual labels change only for non-rectilinear projections.

Performance tests or probes:

- Distortion grid, vignetting, and bokeh do not recompute during hidden states.
- Heavy lens interaction uses reduced ray density or deferred analysis.
- Repeated failed launches are cached or short-circuited.

Visual/manual checks:

- Load a conventional 50mm lens and confirm ordinary diagrams are unchanged.
- Load a wide rectilinear lens and confirm distortion remains rectilinear.
- Load Nikon 6mm fisheye and confirm the UI reports projection-aware residuals and does not try to trace the full 110
  degree half-field through slope math.

## Risks And Mitigations

Risk: vector tracing changes results for ordinary lenses.

Mitigation: keep slope adapters, compare old/new trace output in tests, and migrate modules one at a time behind
projection or trace-mode gates.

Risk: projection metadata is wrong or unknown for some lenses.

Mitigation: default to rectilinear only when plausible, validate impossible focal/field combinations, and allow lens data
to declare unknown/provisional projection notes before enabling fisheye analysis.

Risk: extreme fisheye rays require more than forward tracing from an object plane.

Mitigation: ship vector tracing for below-90-degree fields first, then add bounding-sphere or reverse-trace launch for
full circular fisheye coverage.

Risk: full vector chief-ray solves are expensive.

Mitigation: cache bundles, cap iterations, use adaptive LOD, defer hidden analysis, and move expensive sweeps to workers
only after the pure functions have stable inputs/outputs.

Risk: UI users misread fisheye residuals as ordinary barrel/pincushion distortion.

Mitigation: label chart references by projection kind, use "residual" language for fisheyes, and avoid rectilinear-only
terms in non-rectilinear tabs.

## Suggested First PR

The next focused PR should be Phase 1:

1. Add vector ray types.
2. Add `traceExactSurfaceStackVector`.
3. Make the current slope-based exact trace call the vector entry point internally.
4. Add comparison tests proving old slope traces and new vector traces agree for normal lenses.
5. Add tests for high-angle vector inputs that are finite even when slope equivalents would be unstable.

This PR should not migrate every analysis view. Its job is to create the stable boundary that later fisheye/projection
work can depend on.

## Long-Term Goal

The long-term goal is not to make every view pretend that 220-degree fisheye tracing is simple. The goal is to make the
model honest:

- first-order values stay first-order,
- rectilinear distortion stays rectilinear,
- fisheye residuals are measured against their declared projection,
- physical ray tracing uses physical vectors,
- unsupported domains fail visibly and cheaply,
- and expensive calculations run only when they can provide meaningful information.

Once that boundary is in place, fisheye lenses become a supported class of optical systems rather than exceptional data
that must be guarded from the rest of the app.
