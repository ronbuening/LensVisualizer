# Trace Model Improvement Plan

Status: revised after PRs 1–7 landed and PR 8 scaffolding shipped on `ronbuening/SlowLensOptimization`, 2026-05-20.

The current branch state: every analysis module's field-launch slope routes through the shared projection helper,
the Distortion tab's field grid samples in angular space for fisheyes, equisolid-angle projection is a recognized
projection kind, and the chief-ray solver carries a `LaunchSurface` discriminator that toggles between
`"object-plane"` and `"bounding-sphere"` at θ ≥ 89°. The remaining work for true 110° fisheye tracing is the
deep tracer surgery to make `surfaceIntersectionMaxT` and `intersectSagSurface` accept `direction[2] ≤ 0` rays —
see "PR 8 — Remaining: tracer surgery" below.

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
| 2 — Centralize projection math | inverse functions for rectilinear/equidistant/equisolid/stereographic/orthographic, domain validation | **Done for rectilinear, equidistant, equisolid** (PR 7 / commit `7ca5706`). Stereographic/orthographic/polynomial still deferred until a real catalog lens demands them. |
| 3 — Shared field launch + chief-ray solver | typed failures, iteration caps, launch-surface abstraction | **Done.** Typed `ChiefRaySolveResult` with `converged` / `paraxial-fallback` / `bracket-failed` / `out-of-domain` status (PR `704dfbf`); `LaunchSurface = "object-plane" \| "bounding-sphere"` discriminator threaded through results and cache key (PR 8 scaffolding / commit `0a2442c`). |
| 4 — Migrate analysis modules | switch each module to vector launch | **Done** (PR 5 / commit `be230d1`). All 11 `Math.tan(field)` call sites across fieldGeometry, vignette, pupil-aberration, distortion, off-axis route through `projectionLaunchSlopeForField`. |
| 5 — Extreme fisheye fields (≥90°) | bounding-sphere or reverse-trace launch | **Scaffolded, tracer surgery remaining.** `boundingSphereLaunchVector` helper + launch-surface dispatch ship in commit `0a2442c`; the `direction[2] > 1e-12` gates in `surfaceIntersectionMaxT` and `intersectSagSurface` remain. Detailed remaining work in "PR 8 — Remaining: tracer surgery" below. |
| 6 — Performance hardening | typed failure semantics, caching, cancellation, workers | **Partial.** Solver memoization + heavy-lens LOD shipped. Workers and `AbortSignal`-style cancellation still future; useDeferredValue + lastSettledInputsRef already provides cancellation-by-staleness for analysis tabs. |
| 7 — Data + UI rollout | catalog audit, image-circle metadata, label clarity | **Partial.** Distortion field grid is projection-aware (PR 6); equisolid label and notice banner ship (PR 7); `isFisheyeProjection` predicate centralizes the recurring fork. Catalog audit for fisheye/ultra-wide classification and equisolid lens entries (Sigma 15mm, Nikkor AF 8mm, Olympus 8mm) pending. |

## Next Concrete PRs

PRs 5–7 are landed (commits `be230d1` and `7ca5706`). PR 8 has scaffolding shipped but the deeper tracer surgery
is still required to actually enable 110° launches. See "PR 8 — Remaining: tracer surgery" below.

### Landed: PR 5 — Migrate analysis slope launches to projectionLaunchSlopeForField

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

### Landed: PR 6 — Projection-aware distortion field grid

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

### Landed: PR 7 — Equisolid-angle projection support

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

### Landed (scaffolding only): PR 8 — Bounding-sphere launch type infrastructure

Shipped in the same commit as PR 7's follow-up:

- `LaunchSurface = "object-plane" | "bounding-sphere"` exported from
  [projection.ts](src/optics/projection.ts).
- `launchSurfaceForFieldDeg(fieldDeg)` selects the launch surface (today: object-plane below the cap,
  bounding-sphere at or above).
- `boundingSphereLaunchVector(epZ, θ_x, θ_y, radius)` computes a unit direction and bounded origin for the
  bounding-sphere chief ray. For θ > 90° the direction's z-component is correctly negative — exactly the rays
  the tracer currently rejects.
- `ChiefRaySolveResult` now carries `launchSurface`; the cache key includes it so object-plane and
  bounding-sphere solves at the same field magnitude cache independently.
- At θ ≥ `MAX_FIELD_LAUNCH_DEG`, the solver still surfaces `"out-of-domain"`, but the result correctly tags
  `launchSurface: "bounding-sphere"` — telegraphing the future path to consumers.

### PR 8 — Remaining: tracer surgery

The scaffolding from commit `0a2442c` is correct but currently dead. Two tracer-internal forward-cone gates
plus a Newton seed that divides by `direction[2]` mean any bounding-sphere launch with `|direction[2]| < MIN_DZ`
fails before the intersection algorithm gets a chance to converge. Wiring the bounding-sphere path end-to-end
takes six numbered steps below, ordered so each builds on the previous. Steps 1–3 are the load-bearing numerics
work; without them, steps 4–7 are dead code.

**Update.** Steps 1 and 2a+2b landed (commit `<pending>`); the tracer now accepts grazing and backward rays
when given a `launchBoundT` option. Step 2c is intentionally deferred — see note under step 2 below. Steps 3–7
remain. Synthetic 1-surface analytic tests at `direction[2] = 0` and `direction[2] < 0` confirm convergence
against closed-form ground truth in [surfaceIntersection.test.ts](__tests__/src/optics/internal/surfaceIntersection.test.ts).

**Realistic effort.** 1–2 days for steps 1–3 (focused numerics + tests). A few hours for step 4 (parity). An
afternoon with browser access for steps 5–6. Step 7 is opportunistic. The whole thing is one focused engineering
session, but it MUST include browser access because step 5 is the only thing that catches the failure mode
"the trace converges to a wrong answer that still looks finite." No automated assertion catches that —
distortion-tab plausibility is a visual judgment.

#### Step 1 — Lift the forward-cone gate in `surfaceIntersectionMaxT()`

[exactSurfaceTrace.ts:323](src/optics/internal/exactSurfaceTrace.ts#L323):

```ts
function surfaceIntersectionMaxT(...): number {
  if (direction[2] <= 1e-12) return 0;   // ← the gate
  // existing z-projected formula
}
```

For bounding-sphere launches, `direction[2]` can be tiny, zero, or negative. The z-projected `maxT` is meaningless
in those cases. Replace with a launch-radius-derived bound:

```ts
function surfaceIntersectionMaxT(
  surfIdx, origin, direction, zPos, lens,
  launchBoundT?: number,   // NEW optional param
): number {
  if (direction[2] > 1e-12) {
    return existing z-projected formula;
  }
  // Bounding-sphere fallback: any ray that originated on a sphere of radius R
  // exits the lens region in at most 2R parametric units of travel.
  return launchBoundT ?? 0;
}
```

The caller (`traceExactSurfaceStackVector`) must thread the launch bound through. The simplest path: add
`launchBoundT?: number` to its options shape. Default behavior (omitted) preserves today's `return 0` for invalid
slope-launches. Bounding-sphere callers pass `2 * launchRadiusMm` explicitly.

**Why not always `2R`?** Because the z-projected bound is tighter for forward-cone rays and lets the bracket
finder skip past empty intervals faster. Keep it as the primary bound; only fall back to the radius bound when
the slope path doesn't apply.

#### Step 2 — Lift the matching gate (and fix the seed) in `intersectSagSurface()`

[surfaceIntersection.ts:104](src/optics/internal/surfaceIntersection.ts#L104):

```ts
if (direction === null || direction[2] <= MIN_DZ) {
  return failure(surfaceIdx, "invalidRayDirection", null, 0);
}
```

And [surfaceIntersection.ts:127](src/optics/internal/surfaceIntersection.ts#L127):

```ts
let t = clamp((vertexZ - ray.origin[2]) / direction[2], lo, hi);   // ← undefined at direction[2] ≈ 0
```

Two fixes, tightly coupled:

**2a. Replace the gate.** Drop the `direction[2] <= MIN_DZ` rejection. The numeric concern that gate guarded
was Newton step instability for grazing rays — that's a property of the seed (2b), not of the ray itself. A ray
with `direction[2] = 0` that hits a curved surface from the side has a perfectly well-defined intersection; the
algorithm just can't find it by stepping in z.

**2b. Fix the Newton seed.** Today the seed is `t = (vertexZ - origin[2]) / direction[2]` — the "time to reach
the vertex plane assuming flat z-travel." For `direction[2] ≈ 0` this is `±Infinity`. Fallback hierarchy:

```ts
const zProjected = (vertexZ - ray.origin[2]) / direction[2];
const seed =
  isFinite(zProjected) && zProjected > lo && zProjected < hi
    ? zProjected
    : (lo + hi) / 2;
let t = clamp(seed, lo, hi);
```

The bracket midpoint is a worse starting guess for steep rays but a perfectly good one for grazing rays. The
bracket finder at [surfaceIntersection.ts:118](src/optics/internal/surfaceIntersection.ts#L118) already
guarantees `lo < hi` brackets a sign change.

**2c. Same fix in `fallbackSurfacePoint()`** at [exactSurfaceTrace.ts:340](src/optics/internal/exactSurfaceTrace.ts#L340).
Currently `if (Math.abs(direction[2]) <= 1e-12) return null;`. The fallback's job is to give the *ghost-mode*
visualizer something to draw when the real intersection fails. For grazing rays, project to the bounding-sphere
intersection with the vertex plane via the `(lo, hi)` midpoint instead of dividing by `direction[2]`. If even
that fails (e.g., the ray completely misses the sphere), return `null` is correct.

**Deferred from steps 1–2** (commit `<commit-pending>`): Step 2c was not implemented in the steps-1+2 commit
because `fallbackSurfacePoint` is only called from the `ghost: true` visualization branch in
[exactSurfaceTrace.ts:195](src/optics/internal/exactSurfaceTrace.ts#L195), and no chief-ray-solving or analysis
path enables ghost mode. With ghost mode off (today's default everywhere), failed intersections just break out
of the trace loop. Step 2c becomes necessary only when the diagram panel (which does use ghost-mode rays) is
asked to render a bounding-sphere launch — i.e., as part of step 6's catalog promotion. Wire it then.

**Risk assessment for steps 1–2.** This is the genuine numerics work. The intersection algorithm has been stable
for forward-cone rays for many lens generations; opening it up to sideways and backward rays creates new failure
modes:

- **Bracket finder iterating forever.** [findBracket](src/optics/internal/surfaceIntersection.ts) walks `t`
  from `minT` to `maxT`. With `maxT = 2R` (potentially huge for `R = 200mm`), the walk could take many bracket
  samples before finding a sign change. Pre-validate by clamping the bracket scan resolution to a fixed sample
  count regardless of `maxT` magnitude.
- **Newton overshoot when the surface curvature points the wrong way.** A grazing ray hitting a strongly convex
  front element from outside can have a derivative that flips sign within the bracket. The existing
  `clamp(newtonT, lo, hi)` guard at [surfaceIntersection.ts:144](src/optics/internal/surfaceIntersection.ts#L144)
  handles this, but the convergence tolerance may need relaxing for grazing rays (the geometric "error" in mm
  is larger when the ray is nearly parallel to the surface).
- **Spurious "convergence" to the wrong root.** A sideways ray passing OUTSIDE the lens vertex plane can still
  have a numerical `surface_eq(t) = 0` solution at a t that doesn't correspond to a physical intersection.
  Validate the converged point's `(x, y)` radius against the surface SD before accepting.

Test these failure modes on a synthetic 1-surface fixture (a single sphere with known geometry) at
θ = 89.5°, 90°, 95°, 100°, 110°, 130°. The intersection math is closed-form solvable for a sphere; compare to
analytic ground truth, not just internal self-consistency.

#### Step 3 — Vector-launch dispatch in `solveChiefRay`

[fieldGeometry.ts:254-315](src/optics/fieldGeometry.ts#L254) currently always goes through
`traceStateSurfacesReal` (slope-based). Add a dispatch arm:

```ts
function computeChiefRaySolve(...): ChiefRaySolveResult {
  const launchSurface = launchSurfaceForFieldDeg(fieldAngleDeg);

  if (launchSurface === "bounding-sphere") {
    return solveChiefRayBoundingSphere(fieldAngleDeg, focusT, zoomT, L, geometry, aberrationT, options);
  }
  // existing object-plane path unchanged
}

function solveChiefRayBoundingSphere(...): ChiefRaySolveResult {
  const geom = geometry ?? computeFieldGeometryAtState(...);
  const epZ = geom.b;   // entrance pupil z, paraxial
  const launchRadiusMm = computeLaunchRadius(L, geom);

  const heightAtStop = (yEP: number): number | null => {
    const launch = boundingSphereLaunchVector(epZ, fieldAngleDeg, 0, launchRadiusMm);
    if (launch.status !== "ok") return null;
    const offsetOrigin: [number, number, number] = [
      launch.origin[0],
      launch.origin[1] + yEP,   // shift in EP-crossing y, perpendicular to direction
      launch.origin[2],
    ];
    const result = traceExactSurfaceStackVector(
      { S: stateSurfaces(...), asphByIdx: L.asphByIdx, stopIdx: L.stopIdx },
      { origin: offsetOrigin, direction: launch.direction },
      { stopAt: L.stopIdx, launchBoundT: 2 * launchRadiusMm },
    );
    return result.clipped ? null : projectY(result);
  };

  // Bisect on yEP exactly as the object-plane path bisects on yLaunch.
  // ... same bracketing + Newton structure as computeChiefRaySolve ...
}
```

**Launch radius computation.** Needs to be large enough that the launch origin is unambiguously outside the
lens, but small enough that `findBracket` doesn't waste samples. A reasonable formula:

```ts
function computeLaunchRadius(L: RuntimeLens, geom: FieldGeometryState): number {
  const sumThickness = L.S.reduce((acc, s) => acc + Math.abs(s.d ?? 0), 0);
  const maxSD = Math.max(...L.S.map((s) => s.sd ?? 0));
  return Math.max(2 * maxSD, sumThickness + Math.abs(geom.b) + 5);
}
```

Cache the radius on `RuntimeLens` if it's recomputed often — `buildLens` is the natural home.

**The free parameter.** Object-plane bisection varies `yLaunch` (y at z=0). Bounding-sphere bisection varies
`yEP` (y at the EP plane). These have the same physical meaning: the perpendicular offset of the chief ray
candidate. The bracketing logic carries over verbatim.

**The `paraxial-fallback` case.** Today's solver returns `paraxialYChief` when the real trace fails inside the
loop. For the bounding-sphere path, the paraxial fallback should be `-epRatio * uField` where `uField = -tan(θ)`
— same formula, but `θ` may be ≥ 89°, so the paraxial value is no longer physically meaningful past 90°. The
fallback should instead be `0` (chief ray through EP center) with status `"paraxial-fallback"` — better than NaN
propagation.

#### Step 4 — Parity test at moderate angles

Synthetic test fixture: a single-element lens (one curved surface + flat back) where chief-ray-through-stop
geometry is analytically solvable. Or use the Nikon 6mm at θ = 60°, 70°, 80° (well inside today's clamp).

```ts
// __tests__/src/optics/boundingSphereParity.test.ts
describe("bounding-sphere parity vs object-plane", () => {
  it("70° chief ray crosses the stop center at the same y via either path", () => {
    const L = buildLens(LENS_CATALOG[FISHEYE_FIXTURE]);
    const objectPlane = solveChiefRayWithLaunchSurface(70, 0, 0, L, "object-plane");
    const boundingSphere = solveChiefRayWithLaunchSurface(70, 0, 0, L, "bounding-sphere");
    expect(boundingSphere.status).toBe("converged");
    expect(boundingSphere.yLaunch).toBeCloseTo(objectPlane.yLaunch, 7);
  });
});
```

Note: `yLaunch` for the bounding-sphere path means "EP-crossing y," which is geometrically the same point as
the object-plane path's "EP-crossing y" — projecting the object-plane ray forward to the EP gives the same y.
So the `yLaunch` field can be reinterpreted (or renamed to `yChief` once both paths exist).

Disagreement at this test indicates a bug in steps 1–3, almost always the Newton seed (2b) or the maxT bound (1).

#### Step 5 — Visual smoke test on the Nikon 6mm

Cannot be automated. Run `npm run dev`, open the Nikon Fisheye-Nikkor 6mm, and verify each tab:

- **Diagram panel.** Rays render without obvious artifacts. The forward-traced cone at the current 80° clamp
  should be identical to today's diagram (bounding-sphere is dispatched only at θ ≥ 89°, so this is pure
  regression check).
- **Distortion tab.** Curve renders without NaN gaps. Field grid corners that were previously usable still are.
- **Vignette tab.** No console warnings, curve renders.
- **Pupil aberration tab.** EP and XP curves render.
- **Off-axis aberration tab.** Field samples up to 80° render.

Console must be free of `[chiefRaySolver]` warnings during interaction. Use the chief-ray diagnostics aggregator
(`getChiefRayDiagnostics()`) to confirm all solves are `converged` or `paraxial-fallback`.

Then bump `maxTraceFieldDeg` from 80 to 110 in
[NikonFisheyeNikkor6mmf28.data.ts:48](src/lens-data/nikon/NikonFisheyeNikkor6mmf28.data.ts#L48) and repeat. New
visible behavior:

- Distortion grid corners that were previously blank should fill in.
- The vignette/distortion curves now extend to ~110° on the x-axis.
- The off-axis tab's field sweep covers the wider range.
- AnalysisDrawerContent's projection notice should still read sensibly.

If any tab produces NaN, console errors, or visually nonsense rays, revert the metadata bump and diagnose. Most
likely culprits: Newton non-convergence on a specific surface (step 2 issue) or radius-bound too tight (step 1
issue).

#### Step 6 — Promote bounding-sphere as the fisheye default

Once the Nikon 6mm runs at 110° cleanly, generalize the dispatch:

```ts
export function launchSurfaceForFieldDeg(
  fieldAngleDeg: number,
  projection?: LensProjectionConfig,   // NEW optional param
): LaunchSurface {
  if (isFisheyeProjection(projection)) return "bounding-sphere";
  return Math.abs(fieldAngleDeg) >= MAX_FIELD_LAUNCH_DEG ? "bounding-sphere" : "object-plane";
}
```

This exercises the bounding-sphere path on every fisheye at every field angle, surfacing regressions early
instead of at the >89° edge case. Cache keys naturally separate object-plane (rectilinear) from bounding-sphere
(fisheye) per-lens, so warm-up cost is paid once per lens kind.

Catalog impact: existing rectilinear lenses are unaffected (`projection` undefined → still object-plane).

#### Step 7 — Update `MAX_FIELD_LAUNCH_DEG`'s semantics

Once steps 1–6 land, `MAX_FIELD_LAUNCH_DEG` no longer represents "the largest field angle the engine can
trace." It represents "the largest field angle the *object-plane* slope-launch path can trace." Rename to
`MAX_OBJECT_PLANE_FIELD_DEG` and document the actual semantics — the absolute trace ceiling becomes whatever
the bounding-sphere path can do, which is approximately 179° (limited only by `cos(θ) ≈ -1` numerical issues).

The Stage 1 clamp in [fieldGeometry.ts:124](src/optics/fieldGeometry.ts#L124) should then loosen:

```ts
// Old: halfFieldDeg never exceeds the slope-launch domain
halfFieldDeg = Math.min(halfFieldDeg, projectionClampDeg, MAX_FIELD_LAUNCH_DEG - 1e-3);

// New: only clamp by per-lens metadata and an absolute physical ceiling
const ABSOLUTE_HALF_FIELD_CEILING = 175;  // numerical-stability bound
halfFieldDeg = Math.min(halfFieldDeg, projectionClampDeg, ABSOLUTE_HALF_FIELD_CEILING);
```

This is the bookkeeping step that completes PR 8.

#### Files touched

| Step | Files |
|------|-------|
| 1    | [src/optics/internal/exactSurfaceTrace.ts](src/optics/internal/exactSurfaceTrace.ts) (`surfaceIntersectionMaxT` + `traceExactSurfaceStackVector` options) |
| 2    | [src/optics/internal/surfaceIntersection.ts](src/optics/internal/surfaceIntersection.ts) (gate + Newton seed), [src/optics/internal/exactSurfaceTrace.ts](src/optics/internal/exactSurfaceTrace.ts) (`fallbackSurfacePoint`) |
| 3    | [src/optics/fieldGeometry.ts](src/optics/fieldGeometry.ts) (`solveChiefRayBoundingSphere`), [src/optics/buildLens.ts](src/optics/buildLens.ts) (cache launch radius if useful) |
| 4    | new `__tests__/src/optics/boundingSphereParity.test.ts` |
| 5    | none in code (visual verification only) |
| 6    | [src/lens-data/nikon/NikonFisheyeNikkor6mmf28.data.ts](src/lens-data/nikon/NikonFisheyeNikkor6mmf28.data.ts) (110° flip), [src/optics/projection.ts](src/optics/projection.ts) (`launchSurfaceForFieldDeg` signature) |
| 7    | [src/optics/projection.ts](src/optics/projection.ts) (rename), [src/optics/fieldGeometry.ts](src/optics/fieldGeometry.ts) (clamp loosen) |

#### Per-step risk

| Step | Risk | Mitigation |
|------|------|------------|
| 1    | Low — additive change to maxT bound, default behavior preserved | Existing exact-trace tests catch regressions on the forward-cone path |
| 2    | High — opens up the intersection algorithm to a new class of inputs | Synthetic 1-surface analytic test + visual smoke at step 5 |
| 3    | Medium — new dispatch branch, but mirrors the existing object-plane path's structure | Parity test at step 4 |
| 4    | None — just a new test | — |
| 5    | Medium — requires human judgment to spot subtle visual regressions | Compare side-by-side against pre-bump screenshots |
| 6    | Low — generalizes the dispatch but each lens still gets its own cache slot | Run full catalog smoke (`npm run build`) before committing |
| 7    | Low — bookkeeping cleanup | typecheck catches missed call sites |

### Smaller follow-ups, opportunistic

These don't need a dedicated PR — pair with whatever's adjacent in scope. Two from the prior plan revision
already shipped in commit `be230d1`:

- ~~Telemetry aggregation~~ — shipped as [`chiefRayDiagnostics.ts`](src/optics/chiefRayDiagnostics.ts).
- ~~`halfField` clamp tightening~~ — shipped in [`fieldGeometry.ts:124`](src/optics/fieldGeometry.ts#L124).

Remaining:

- **Catalog audit.** Walk every lens in `LENS_CATALOG`, check `(focal, fullField)` consistency vs declared
  `projection.kind`, and flag suspects. Likely candidates for fisheye classification beyond the Nikon 6mm:
  any lens with `fullFieldDeg ≥ 100` whose `focalLengthMm` is much smaller than `EFL/tan(fullField/2)`.
- **Audit script consuming `getChiefRayDiagnostics()`.** A `scripts/auditChiefRays.mjs` that builds every
  catalog lens, sweeps θ across its declared half-field, and reports any lens with non-`converged` solves.
  Pairs naturally with the catalog audit above.
- **Cached launch radius on `RuntimeLens`.** Step 3 of PR 8's tracer surgery proposes
  `computeLaunchRadius(L, geom)`. If the bisection calls it on every iteration, cache it once at `buildLens`
  time. Skip until profiling justifies it; bisection is ~30 iterations and the computation is O(N) over
  surfaces.
- **Equisolid catalog entries.** PR 7 added the projection type but no lens declares it. Sigma 15mm f/2.8 EX
  DG Fisheye, Nikkor AF 8mm f/2.8 D, Olympus Zuiko 8mm f/3.5 — all candidates if patent data is available.

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

PRs 5–7 and PR 8 scaffolding are landed. Remaining file touch points for the PR 8 tracer-surgery completion
are tabulated in "Files touched" within the "PR 8 — Remaining" section above. For historical reference, the
original per-PR file map was:

| PR | Files |
|----|-------|
| 5 (landed) | [fieldGeometry.ts](src/optics/fieldGeometry.ts), [vignetteAnalysis.ts](src/optics/vignetteAnalysis.ts), [pupilAberration.ts](src/optics/pupilAberration.ts), [distortionAnalysis.ts](src/optics/distortionAnalysis.ts), [aberration/offAxis.ts](src/optics/aberration/offAxis.ts), [chiefRayDiagnostics.ts](src/optics/chiefRayDiagnostics.ts) |
| 6 (landed) | [distortionAnalysis.ts](src/optics/distortionAnalysis.ts), [DistortionFieldGrid.tsx](src/components/display/analysis/DistortionFieldGrid.tsx), [projection.ts](src/optics/projection.ts) |
| 7 (landed) | [projection.ts](src/optics/projection.ts), [validateLensData.ts](src/optics/validateLensData.ts), [LENS_DATA_SPEC.md](src/lens-data/LENS_DATA_SPEC.md), [buildLens.ts](src/optics/buildLens.ts), UI consumers (DiagramHeader, DiagramControls, AnalysisDrawerContent, DistortionTab, DistortionChart, DistortionFieldGrid) |
| 8 scaffolding (landed) | [projection.ts](src/optics/projection.ts), [fieldGeometry.ts](src/optics/fieldGeometry.ts) |
| 8 remaining | [internal/exactSurfaceTrace.ts](src/optics/internal/exactSurfaceTrace.ts), [internal/surfaceIntersection.ts](src/optics/internal/surfaceIntersection.ts), [fieldGeometry.ts](src/optics/fieldGeometry.ts), [NikonFisheyeNikkor6mmf28.data.ts](src/lens-data/nikon/NikonFisheyeNikkor6mmf28.data.ts) |

## Test Strategy

Already covered by tests in tree (post commits `be230d1`, `7ca5706`, `0a2442c`):

- Chief-ray solver convergence + memoization + projection-guard + halfField clamp + diagnostics aggregator
  ([chiefRaySolver.test.ts](__tests__/src/optics/chiefRaySolver.test.ts)).
- Vector trace equals slope trace for rectilinear lenses ([exactSurfaceTraceVector.test.ts](__tests__/src/optics/exactSurfaceTraceVector.test.ts)).
- Heavy-lens classification ([raySampling.test.ts](__tests__/src/optics/raySampling.test.ts)).
- Trace-mode resolution defaults to exact ([traceMode.test.ts](__tests__/src/optics/traceMode.test.ts)).
- Existing full-catalog smoke traces ([exactTraceCatalog.test.ts](__tests__/src/optics/exactTraceCatalog.test.ts)).
- 2D angular launch helper for rectilinear and fisheye projections, on-axis + out-of-domain
  ([projectionLaunchVector.test.ts](__tests__/src/optics/projectionLaunchVector.test.ts)).
- Equisolid forward/inverse round-trip + out-of-domain
  ([projectionEquisolid.test.ts](__tests__/src/optics/projectionEquisolid.test.ts)).
- Distortion grid fisheye smoke (Nikon 6mm interior cells usable) in
  [distortionAnalysis.test.ts](__tests__/src/optics/distortionAnalysis.test.ts).
- Bounding-sphere launch geometry + LaunchSurface dispatch + cache-key separation
  ([boundingSphereLaunch.test.ts](__tests__/src/optics/boundingSphereLaunch.test.ts)).

Still to add for PR 8 completion:

- **Synthetic 1-surface analytic intersection** at θ = 89.5°, 90°, 95°, 100°, 110°, 130°. Closed-form ground
  truth comparison validates the lifted gates in `surfaceIntersectionMaxT` and `intersectSagSurface` against
  the math, not against the algorithm's own self-consistency.
- **Object-plane vs bounding-sphere parity** at 60°, 70°, 80° on the Nikon 6mm. Same physical ray, two
  parameterizations — must agree to ~1e-9 at the stop crossing.
- **Past-cap smoke trace** at θ = 100° on the Nikon 6mm (after the metadata bump). Validates that the
  bounding-sphere path actually converges past the old clamp.

Visual/manual checks (not automatable today, since the dev server is the only ground truth):

- Conventional 50mm prime — diagrams unchanged.
- Wide rectilinear — distortion still labeled rectilinear, no curved-grid artifacts.
- Nikon 6mm — analysis tabs load without hang, distortion labeled "equidistant residual", and after PR 8
  completion the half-field clamp can be raised to 110°.

## Risks And Mitigations

| Risk | Mitigation |
|------|------------|
| Vector tracing changes results for ordinary lenses | Slope adapter ships parity tests already (PR `3938596`); PR 5's bit-identical migration is pinned by the 1697-test optics suite. |
| Projection metadata wrong or unknown for some lenses | Default to rectilinear; `validateLensData` checks focal/field consistency. Catalog audit pending (see opportunistic follow-ups). |
| Extreme fisheye rays need launch from outside the forward cone | Scaffolding ships (`LaunchSurface` discriminator, `boundingSphereLaunchVector`); the 89° gate stays in place until the tracer-surgery work in "PR 8 — Remaining" lands. |
| Tracer-surgery for grazing rays converges to a wrong root | Synthetic 1-surface analytic test catches numerical drift; visual smoke on Nikon 6mm catches plausible-but-wrong renders. |
| Full vector chief-ray solves are expensive | Memoization + heavy-lens density LOD already shipped. Workers deferred unless profiling justifies them. |
| UI users misread fisheye residuals as barrel/pincushion distortion | Distortion tab labels chart references by projection kind; AnalysisDrawerContent shows a projection-aware notice; distortion field grid renders projection-native arcs (PR 6). |

## Suggested Next Work

The PR 8 tracer-surgery completion described in "PR 8 — Remaining: tracer surgery" above. Step 1 (lift the
`surfaceIntersectionMaxT` gate) can land independently as a low-risk standalone change, paving the way for
the higher-risk step 2 (`intersectSagSurface` gate + Newton seed). Steps 4–6 follow naturally once steps 1–3
are stable.

If picking up opportunistic work instead: the **catalog audit script** consuming `getChiefRayDiagnostics()`
is the highest-value follow-up — it surfaces which catalog lenses currently fall back, which informs whether
PR 8's tracer surgery should ship before or after a metadata-only catalog cleanup pass.

## Long-Term Goal

The long-term goal is not to make every view pretend that 220-degree fisheye tracing is simple. The goal is to make the
model honest:

- first-order values stay first-order **[holds today]**,
- rectilinear distortion stays rectilinear **[holds today — projection-aware distortion gates fisheye paths
  behind `projection.kind`, and the distortion field grid samples in angular space for fisheye projections]**,
- fisheye residuals are measured against their declared projection **[holds for equidistant and equisolid
  fisheyes; stereographic / orthographic / polynomial pending real catalog demand]**,
- physical ray tracing uses physical vectors **[vector entry exposed; analysis-module slope launches all
  route through `projectionLaunchSlopeForField`; bounding-sphere launch is scaffolded — PR 8 tracer surgery
  remaining]**,
- unsupported domains fail visibly and cheaply **[holds: typed `ChiefRaySolveResult.status`, the 89° guard,
  `launchSurface` discriminator, and `chiefRayDiagnostics` aggregator]**,
- and expensive calculations run only when they can provide meaningful information **[holds for heavy lenses
  via `isHeavyLensForRayWork` density LOD + `useDeferredValue` interaction pause]**.

After the PR 8 tracer-surgery completion, fisheye lenses become a supported class of optical systems rather
than exceptional data that must be guarded from the rest of the app — and the `maxTraceFieldDeg` clamp moves
from a load-bearing safety guard to an optional declaration of "this is the field the lens can usefully
render", not "anything past this number breaks the math."
