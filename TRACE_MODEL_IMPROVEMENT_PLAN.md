# Trace Model Improvement Plan

Status: revised after PRs 1–4 landed on `ronbuening/SlowLensOptimization`, 2026-05-20.

This document explains why heavy ultra-wide and fisheye lenses stress the current optics engine, what parts of the
trace model need to change, and how to stage the work without destabilizing ordinary rectilinear lenses.

The immediate trigger was the Nikon Fisheye-Nikkor 6mm f/2.8, but the underlying issue is broader: the app still treats
most field geometry as if every lens is rectilinear and every incoming ray can be described by a finite forward `z`
slope. That assumption breaks down for true fisheyes, especially lenses with coverage approaching or exceeding 180
degrees.

## Status — 2026-05-20

Four PRs on `ronbuening/SlowLensOptimization` deliver the structural foundation. The remaining work is the
projection-aware analysis migration (PR 5 below) and bounding-sphere launch (PR 8 below) that together let us
drop the 80° clamp on the Nikon 6mm.

### Done

- **`704dfbf` — Cache and harden chief-ray solver.** Per-`RuntimeLens` `WeakMap` cache eliminates the 5–6×
  duplicate solves across analysis tabs in one frame. New
  [`solveChiefRay`](src/optics/fieldGeometry.ts) returns typed `ChiefRaySolveResult` with status
  (`converged` / `paraxial-fallback` / `bracket-failed` / `out-of-domain`) and iteration count. Dev-only
  `console.warn` flags fallbacks for diagnostic triage. The slope overflow is centralized via
  [`projectionLaunchSlopeForField()`](src/optics/projection.ts) with a shared
  `MAX_FIELD_LAUNCH_DEG = 89` constant.
- **`3938596` — Vector-native exact-surface trace entry.**
  [`traceExactSurfaceStackVector`](src/optics/internal/exactSurfaceTrace.ts) exposes the
  already-vector-internal tracer; the slope entry is now a thin adapter. No callers migrated yet — this is the
  boundary that later projection-aware launches build on.
- **`c9160dc` — Heavy-lens analysis LOD.** New
  [`isHeavyLensForRayWork`](src/optics/raySampling.ts) helper (fisheye OR `N ≥ 32` OR `maxSD ≥ 50 mm` OR
  `halfField ≥ 40°`). Vignette drops from 192 to 96 pupil rays on heavy lenses; distortion drops from 17 to 9
  pupil-correction samples. Rectilinear primes unchanged. `LensDiagramPanel` reuses the helper for its
  diagram-side density downgrade.
- **`7b10495` — Drop stale exact-trace rollout machinery.** `SURFACE_TRACE_ROLLOUT_MODE`,
  `EXACT_SURFACE_TRACE_LENS_KEYS`, `SurfaceTraceRolloutMode`, `SurfaceTraceModeResolutionOptions` are deleted;
  `resolveSurfaceTraceMode` now returns `requestedMode ?? "exact"`. `SurfaceTraceMode = "legacy" | "exact"`
  remains as a test escape hatch.

### Corrections to earlier framing

The original plan misread the state of the codebase in three places:

1. **Interaction-driven LOD was claimed as done; it isn't, and isn't needed.**
   [`AnalysisDrawerContent.tsx`](src/components/layout/lensDiagram/AnalysisDrawerContent.tsx) uses
   `useDeferredValue` + a `lastSettledInputsRef` so analysis tabs literally do not recompute during slider
   drag — they display last-settled values until release. The right knob is *settled-compute density* on heavy
   lenses, which PR `c9160dc` delivers. A separate "interactive" multiplier in `raySampling.ts` would be dead
   code at the analysis-module layer.
2. **Chief-ray bisection was not duplicated.** `solveChiefRayLaunchHeight` was already shared across vignette,
   distortion, pupil-aberration, off-axis, and field-geometry. The real gap was no memoization across modules
   in a single frame, fixed by PR `704dfbf`.
3. **The exact tracer was already vector-native internally.** The Phase 1 "vector API" turned out to be a 30-
   line refactor of the public boundary, not a structural rewrite. The genuine remaining blocker is the
   `direction[2] > 1e-12` early return in
   [`surfaceIntersectionMaxT()`](src/optics/internal/exactSurfaceTrace.ts), which still rejects
   bounding-sphere / sideways rays. That gate is the dividing line between the current 80° clamp and a true
   110° fisheye trace.

### The hard ceiling that remains

Today every fisheye half-field is clamped to `projection.maxTraceFieldDeg` (80° on the Nikon Fisheye-Nikkor
6mm) at [`fieldGeometry.ts`](src/optics/fieldGeometry.ts). The 220° fullFieldDeg metadata is honored for the
projection model but charts stop at 80° object angle. The clamp can't be raised today because every analysis
module still computes its launch slope as `uField = -Math.tan(θ)` independently — a hunt across nine call
sites would be needed before any of them could survive θ ≥ 89°. PR 5 below removes that scatter.

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
2. Expose exact tracing through normalized 3D ray origins and directions. **[done — PR `3938596`]**
3. Convert field/image samples into object-space rays through a shared projection model. **[partially done —
   `projectionLaunchSlopeForField` exists; analysis modules still inline `-Math.tan(θ)` (see PR 5 below)]**
4. Solve chief rays and pupil constraints in vector space. **[chief-ray solver routes through projection
   guard via PR `704dfbf`; pupil-constraint solvers still slope-first]**
5. Migrate distortion, vignetting, pupil aberration, off-axis aberration, bokeh, and diagram ray bundles to
   the shared launch layer. **[remaining — PR 5 below]**
6. Add adaptive sampling, cancellation, memoization, and optional worker execution around heavy analyses.
   **[memoization in PR `704dfbf`; heavy-lens density LOD in PR `c9160dc`; useDeferredValue in
   AnalysisDrawerContent already handles cancellation-by-staleness; workers deferred]**

Until step 5 is complete, fisheye lenses remain guarded by `projection.maxTraceFieldDeg` below 89 degrees
(currently 80° on the Nikon 6mm). Bounding-sphere launch for fields ≥89° is PR 8.

## Current State

The engine currently has several trace layers:

- Paraxial first-order tracing for EFL, principal planes, pupils, and other first-order references.
- Legacy vertex-plane real tracing that propagates meridional rays by slope and `tan(U)`. Retained only as a
  test/debug `"legacy"` mode in [traceMode.ts](src/optics/traceMode.ts) — exact is the production default.
- Exact surface tracing that intersects spherical/aspheric surfaces and refracts by local normals. Now
  exposed through both slope and vector entries in
  [exactSurfaceTrace.ts](src/optics/internal/exactSurfaceTrace.ts) (`traceExactSurfaceStack` for slope launch,
  `traceExactSurfaceStackVector` for direct origin/direction).
- Analysis helpers that launch ray bundles for distortion, vignetting, pupil aberration, off-axis aberrations,
  bokeh, and field geometry. All still construct their launch slope as `uField = -Math.tan(θ)` independently.

The exact surface tracer remains the strongest foundation. Its real limitation now is the `direction[2] > 1e-
12` early return in [`surfaceIntersectionMaxT()`](src/optics/internal/exactSurfaceTrace.ts), which gates
sideways/backward incidence. Until that gate is lifted (PR 8), no caller can launch a ray that arrives outside
the forward cone — even with the vector entry point.

Recent fisheye-specific groundwork already in place:

- Lens data can declare `projection.kind`, currently `rectilinear` and `fisheye-equidistant`.
- Fisheyes use a projection focal scale for aperture sizing instead of the misleading Gaussian EFL
  ([buildLens.ts:303](src/optics/buildLens.ts)).
- Fisheye half-field tracing is clamped to `projection.maxTraceFieldDeg`
  ([fieldGeometry.ts:81](src/optics/fieldGeometry.ts)) — 80° on the Nikon 6mm.
- Distortion residuals are projection-aware
  ([distortionAnalysis.ts](src/optics/distortionAnalysis.ts) +
  [projection.ts](src/optics/projection.ts)) — equidistant fisheye residuals instead of rectilinear `F-Tan(θ)`.
- Chief-ray solves are memoized per `(lens, focusT, zoomT, aberrationT, fieldDeg, mode)` and surface typed
  status ([fieldGeometry.ts:178](src/optics/fieldGeometry.ts)).
- Analysis density is structurally halved for heavy lenses via `isHeavyLensForRayWork`
  ([raySampling.ts](src/optics/raySampling.ts)).
- Analysis tabs pause on stale data during slider drag via `useDeferredValue + lastSettledInputsRef`
  ([AnalysisDrawerContent.tsx](src/components/layout/lensDiagram/AnalysisDrawerContent.tsx)).

Those guards plus the four landed PRs stabilize the Nikon 6mm at the 80° clamp. They do not yet make the
tracing model fully fisheye-capable for the full 110° half-field.

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

## Implementation Status By Phase

| Phase | Original scope | Status |
|-------|---------------|--------|
| 0 — Preserve current guards | fisheye metadata, projection focal scale, halfField clamp, projection-aware distortion residuals, adaptive ray density during interaction | **Mostly done.** Adaptive ray density during interaction was never implemented as the original plan claimed; useDeferredValue does it differently and arguably better. Heavy-lens settled-compute LOD shipped in PR `c9160dc`. |
| 1 — Vector trace API | expose vector entry, preserve slope adapter, parity tests | **Done** (PR `3938596`). |
| 2 — Centralize projection math | inverse functions for rectilinear/equidistant/equisolid/stereographic/orthographic, domain validation | **Partial.** `projectionLaunchSlopeForField` centralizes the slope launch with domain guard. Equisolid/stereographic/orthographic deferred until a real catalog lens demands them. |
| 3 — Shared field launch + chief-ray solver | typed failures, iteration caps, launch-surface abstraction | **Done at the chief-ray layer** (PR `704dfbf`): typed `ChiefRaySolveResult` with `converged` / `paraxial-fallback` / `bracket-failed` / `out-of-domain` status, iteration count, memoization, projection guard. Launch-surface abstraction (for bounding-sphere) still future work — see PR 8. |
| 4 — Migrate analysis modules | switch each module to vector launch | **Not started.** This is PR 5 below — nine `-Math.tan(θ)` sites across six files still inline their slope. The chief-ray solver is the only migrated consumer. |
| 5 — Extreme fisheye fields (≥90°) | bounding-sphere or reverse-trace launch | **Not started.** PR 8 below. Requires removing the `direction[2] > 1e-12` early return in `surfaceIntersectionMaxT`. |
| 6 — Performance hardening | typed failure semantics, caching, cancellation, workers | **Partial.** Solver memoization + heavy-lens LOD shipped. Workers and `AbortSignal`-style cancellation still future; useDeferredValue + lastSettledInputsRef already provides cancellation-by-staleness for analysis tabs. |
| 7 — Data + UI rollout | catalog audit, image-circle metadata, label clarity | **Partial.** Projection labels in distortion tab; projection-aware notice banner in AnalysisDrawerContent. Catalog audit for other fisheye/ultra-wide lenses pending. |

## Next Concrete PRs

PR ordering picks small, independently shippable changes. Each cites precise call sites and a risk level so it
can be picked up out of order.

### PR 5 — Migrate analysis slope launches to projectionLaunchSlopeForField

**Goal.** Centralize every `uField = -Math.tan(θ)` in the optics layer on the projection helper added in
PR `704dfbf`, so raising the field clamp later is a one-line change rather than a cross-file hunt.

**Sites to migrate.** Each currently inlines its own slope construction:

- [fieldGeometry.ts:65](src/optics/fieldGeometry.ts#L65) — `testChief` bisection inside `computeFieldGeometryAtState`
- [fieldGeometry.ts:147](src/optics/fieldGeometry.ts#L147) — `traceChiefRayAtAngle`
- [fieldGeometry.ts:233](src/optics/fieldGeometry.ts#L233) — `chiefRayImageHeightAccurate`
- [vignetteAnalysis.ts:112](src/optics/vignetteAnalysis.ts#L112) — per-field pupil sweep
- [pupilAberration.ts:221](src/optics/pupilAberration.ts#L221), [:291](src/optics/pupilAberration.ts#L291), [:368](src/optics/pupilAberration.ts#L368), [:407](src/optics/pupilAberration.ts#L407) — EP/XP profile loops
- [distortionAnalysis.ts:140](src/optics/distortionAnalysis.ts#L140) — scale-probe angle
- [aberration/offAxis.ts:144](src/optics/aberration/offAxis.ts#L144) — `computeOffAxisFieldGeometry`

**Scope.**
- Replace each site with `projectionLaunchSlopeForField(L, fieldDeg)` and consume `.uField`.
- Where the loop also computes `paraxialYChief = epRatio * tan(θ)`, switch to `-epRatio * uField` for a single
  source of truth.
- In the four loops that sample across the field (vignette, distortion pupil correction, both pupil-aberration
  profiles, off-axis), skip iterations whose `.status === "out-of-domain"`. Today this never triggers because
  the clamp stands; the skip is forward-compatibility for PR 8.
- Snapshot-style regression test: every analysis module on the Nikon 6mm at fixed focus/zoom must produce the
  same curve before and after migration to ~1e-12.

**Risk.** Low. Rectilinear lenses are bit-identical (`-tan(θ)` unchanged). Fisheyes at θ < 89° are also
bit-identical because `projectionLaunchSlopeForField` currently returns `-tan(θ)` regardless of kind below the
89° gate.

### PR 6 — Projection-aware distortion field grid

**Goal.** Make the Distortion tab's 2D field grid honor `projection.kind` instead of sampling rectilinear
image-plane coordinates.

**Current behavior.** [distortionAnalysis.ts](src/optics/distortionAnalysis.ts) uses
`DISTORTION_GRID_LINE_COORDINATES = [-1, -0.5, 0, 0.5, 1]` over `idealFieldRadius` and inverse-maps via
[`projectionFieldSlopesForImagePoint`](src/optics/projection.ts#L64), which returns `null` at θ ≥ 90° for any
projection. For rectilinear lenses this is correct; for the Nikon 6mm it leaves the field-grid corners blank
or sparse.

**Scope.**
- Add a projection-native grid sampler: for non-rectilinear projections, sample 5×5 angular coordinates
  `(θ_x, θ_y) ∈ θ_max · [-1, -0.5, 0, 0.5, 1]²` and forward-map through the projection.
- Update [DistortionFieldGrid.tsx](src/components/display/analysis/DistortionFieldGrid.tsx) to render
  projection-native arcs (curved lines for fisheye) instead of straight grid lines.
- Add a smoke test: Nikon 6mm grid has no `null` cells inside the image circle.
- Snapshot test: rectilinear lenses render identical grids before/after.

**Risk.** Medium. Visual regression on the rectilinear path must be ruled out. Snapshot tests catch
unintended changes.

### PR 7 — Equisolid-angle projection support

**Goal.** Add the most common photographic fisheye projection so a Sigma 15mm / Nikkor AF 8mm / Olympus 8mm
can be catalogued with the right model.

**Scope.**
- Add `"fisheye-equisolid"` to `ProjectionReferenceKind` in [projection.ts](src/optics/projection.ts).
- Forward: `r = 2f·sin(θ/2)`. Inverse: `θ = 2·asin(r/2f)`, domain `[0, π]`, with `null` returned outside.
- Extend `distortionProjectionReferenceForLens` to label the kind ("Equisolid-angle projection residual").
- Update `validateLensData` to accept the new metadata variant.
- Update [LENS_DATA_SPEC.md](src/lens-data/LENS_DATA_SPEC.md) and the lens template with an example.
- Round-trip and out-of-domain tests in `chiefRaySolver.test.ts` style.

**Risk.** Low. Purely additive; no existing lens declares this kind.

### PR 8 — Lift the slope-launch cap with bounding-sphere origin

**Goal.** Allow chief and pupil rays to launch from outside the forward cone, enabling true 110° fisheye
tracing on the Nikon 6mm. **PR 5 is a precondition.**

**Scope.**
- Define a `LaunchSurface` type with two variants: `"object-plane"` (today's behavior — origin at
  `z = zPos[0]`, slope-encoded direction) and `"bounding-sphere"` (origin on a large sphere centered near the
  entrance pupil, direction toward the lens vertex).
- In `solveChiefRay` and the field-traversal loops migrated by PR 5, dispatch on `fieldAngleDeg` vs
  `MAX_FIELD_LAUNCH_DEG`. Below 89°: object-plane. At or above: bounding-sphere. The cache key extends with
  launch-surface kind so the two paths cache independently.
- In [surfaceIntersectionMaxT()](src/optics/internal/exactSurfaceTrace.ts#L298), replace the
  `direction[2] <= 1e-12` early return with a path that handles small-positive-z directions. A conservative
  `maxT` based on a bounding-sphere radius keeps the intersection search bounded without rejecting valid rays.
- Add `solveChiefRayLaunch` parity tests: a 70° fisheye ray traced via object-plane should match the same ray
  traced via bounding-sphere within tolerance.
- Raise `maxTraceFieldDeg` on the Nikon 6mm to 110° once snapshot/visual smoke tests pass.

**Risk.** High — touches the tracer's deepest forward-cone assumption. Land behind a feature flag (e.g.
`projection.bounceSphereLaunch?: boolean` or per-lens override) that defaults off, enable per-lens after smoke
tests, then promote to default for `kind === "fisheye-*"` only.

### Smaller follow-ups, opportunistic

These don't need a dedicated PR — pair with whatever's adjacent in scope:

- **Telemetry aggregation.** Today `solveChiefRay` `console.warn`s fallbacks. A small structured collector
  (e.g. a debug-only `chiefRayDiagnostics.ts` that exposes `getCounts()`) would let an "audit" script flag
  every catalog lens that produces non-converged solves.
- **`computeFieldGeometryAtState`'s `halfField` clamp.** The clamp comparison at
  [fieldGeometry.ts:81-82](src/optics/fieldGeometry.ts#L81) is `halfFieldDeg = Math.min(halfFieldDeg,
  L.projection.maxTraceFieldDeg)`. It should ideally also clamp at `MAX_FIELD_LAUNCH_DEG` so a future lens
  with a bogus `maxTraceFieldDeg: 95` doesn't immediately overflow downstream tangents.
- **Catalog audit.** Walk every lens in `LENS_CATALOG`, check `(focal, fullField)` consistency vs declared
  `projection.kind`, and flag suspects. Likely candidates for fisheye classification beyond the Nikon 6mm:
  any lens with `fullFieldDeg ≥ 100` whose `focalLengthMm` is much smaller than `EFL/tan(fullField/2)`.

### Deferred

- **Stereographic, orthographic, polynomial projections.** Add when a real catalog lens demands them.
- **`buildRayBundleForField()` shared bundle builder.** Existing pupil-sampling shapes (circular ring,
  orthogonal fan, meridional sweep) differ enough across modules that unification would be premature
  abstraction. Revisit if PR 8's bounding-sphere launch introduces a unified bundle requirement.
- **Web Workers for analysis.** PR `c9160dc`'s density halving + PR `704dfbf`'s solver caching may make this
  unnecessary. Profile after PR 5 lands; only worth the complexity if the Nikon 6mm settled compute is still
  >100 ms.
- **Reverse trace from image side.** Genuinely needed only if bounding-sphere launch (PR 8) can't cover some
  extreme geometry. Defer until a concrete failure case surfaces.

## Candidate File Touch Points

For each pending PR:

| PR | Files |
|----|-------|
| 5  | [fieldGeometry.ts](src/optics/fieldGeometry.ts), [vignetteAnalysis.ts](src/optics/vignetteAnalysis.ts), [pupilAberration.ts](src/optics/pupilAberration.ts), [distortionAnalysis.ts](src/optics/distortionAnalysis.ts), [aberration/offAxis.ts](src/optics/aberration/offAxis.ts) |
| 6  | [distortionAnalysis.ts](src/optics/distortionAnalysis.ts), [DistortionFieldGrid.tsx](src/components/display/analysis/DistortionFieldGrid.tsx), [projection.ts](src/optics/projection.ts) |
| 7  | [projection.ts](src/optics/projection.ts), [validateLensData.ts](src/optics/validateLensData.ts), [LENS_DATA_SPEC.md](src/lens-data/LENS_DATA_SPEC.md) |
| 8  | [internal/exactSurfaceTrace.ts](src/optics/internal/exactSurfaceTrace.ts), [fieldGeometry.ts](src/optics/fieldGeometry.ts), [projection.ts](src/optics/projection.ts), Nikon 6mm lens data files |

## Test Strategy

Already covered by tests in tree (as of 2026-05-20):

- Chief-ray solver convergence + memoization + projection-guard ([chiefRaySolver.test.ts](__tests__/src/optics/chiefRaySolver.test.ts)).
- Vector trace equals slope trace for rectilinear lenses ([exactSurfaceTraceVector.test.ts](__tests__/src/optics/exactSurfaceTraceVector.test.ts)).
- Heavy-lens classification ([raySampling.test.ts](__tests__/src/optics/raySampling.test.ts)).
- Trace-mode resolution defaults to exact ([traceMode.test.ts](__tests__/src/optics/traceMode.test.ts)).
- Existing full-catalog smoke traces ([exactTraceCatalog.test.ts](__tests__/src/optics/exactTraceCatalog.test.ts)).

To add as each PR lands:

- **PR 5.** For each migrated module, a Nikon 6mm snapshot at fixed (focus, zoom, aperture) compared before/after.
- **PR 6.** Snapshot of rectilinear and fisheye distortion grid renderings; smoke test that the Nikon 6mm grid has
  no `null` interior cells.
- **PR 7.** Equisolid forward/inverse round-trip at 5°/30°/60°/90° within tolerance; out-of-domain handling at θ > π.
- **PR 8.** Object-plane vs bounding-sphere parity at 70° for rectilinear and fisheye lenses; smoke trace at 100°
  on the Nikon 6mm.

Visual/manual checks (not automatable today, since the dev server is the only ground truth):

- Conventional 50mm prime — diagrams unchanged.
- Wide rectilinear — distortion still labeled rectilinear, no curved-grid artifacts.
- Nikon 6mm — analysis tabs load without hang, distortion labeled "equidistant residual", and after PR 8 the
  half-field clamp can be raised to 110°.

## Risks And Mitigations

| Risk | Mitigation |
|------|------------|
| Vector tracing changes results for ordinary lenses | Slope adapter ships parity tests already (PR `3938596`). Future migrations include before/after snapshots. |
| Projection metadata wrong or unknown for some lenses | Default to rectilinear; `validateLensData` checks focal/field consistency. Catalog audit pending (see opportunistic follow-ups). |
| Extreme fisheye rays need launch from outside the forward cone | PR 8 introduces bounding-sphere launch behind a per-lens flag; the 89° gate stays in place until then. |
| Full vector chief-ray solves are expensive | Memoization + heavy-lens density LOD already shipped. Workers deferred unless profiling justifies them. |
| UI users misread fisheye residuals as barrel/pincushion distortion | Distortion tab already labels chart references by projection kind; AnalysisDrawerContent shows a projection-aware notice. PR 6 will make the field grid match. |

## Suggested Next PR

PR 5 above — migrate the remaining nine `-Math.tan(θ)` sites onto `projectionLaunchSlopeForField`. It's the
precondition for PR 8, has low regression risk (rectilinear behavior is bit-identical), and shrinks the slope-
leak surface to zero in the optics layer. After it lands, raising any fisheye's `maxTraceFieldDeg` toward 89°
becomes safe; raising it past 89° unlocks at PR 8.

## Long-Term Goal

The long-term goal is not to make every view pretend that 220-degree fisheye tracing is simple. The goal is to make the
model honest:

- first-order values stay first-order **[holds today]**,
- rectilinear distortion stays rectilinear **[holds today — projection-aware distortion gates fisheye paths
  behind `projection.kind`]**,
- fisheye residuals are measured against their declared projection **[holds for equidistant fisheyes]**,
- physical ray tracing uses physical vectors **[vector entry exposed; analysis modules still slope-launch —
  PR 5]**,
- unsupported domains fail visibly and cheaply **[holds: typed `ChiefRaySolveResult.status` + 89° guard]**,
- and expensive calculations run only when they can provide meaningful information **[holds for heavy lenses
  via `isHeavyLensForRayWork` density LOD + `useDeferredValue` interaction pause]**.

After PR 5 + PR 8, fisheye lenses become a supported class of optical systems rather than exceptional data
that must be guarded from the rest of the app — and the `maxTraceFieldDeg` clamp moves from a load-bearing
safety guard to an optional declaration of "this is the field the lens can usefully render", not "anything
past this number breaks the math."
