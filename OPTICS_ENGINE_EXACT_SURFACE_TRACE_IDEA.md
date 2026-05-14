# Exact Surface Ray-Tracing Idea

## Summary

The current real-ray trace steps rays surface-by-surface at each surface vertex plane, then evaluates sag and surface
normal at the resulting ray height. This is fast and stable for display, but it is not a true ray-to-sag-surface
intersection. A future engine upgrade could solve the exact intersection between each incoming ray and the spherical or
aspheric sag profile before applying Snell's law.

## Proposed Implementation

- Add an internal intersection helper that solves `z_ray(t) = z_surface + sag(r_ray(t))` for meridional and skew rays.
- Use Newton iteration with bisection fallback, bounded to the gap between adjacent vertex planes.
- Return the exact hit point, surface normal, propagated optical path length, and failure reason when no valid hit exists.
- Introduce the helper behind a feature flag or trace option, then compare exact and legacy traces across the catalog.
- Keep `traceRay`, `traceSkewRay`, and chromatic wrappers API-compatible while moving shared intersection/refraction logic into a focused internal module.

## Expected Gains

- More accurate marginal and wide-angle ray paths on strongly curved or high-aspheric surfaces.
- Better consistency between rendered surface sag, clipping diagnostics, distortion, vignetting, coma, bokeh, and pupil analyses.
- Cleaner future support for optical path length, wavefront/OPD estimates, sensor stack modeling, or true moved-optics perspective-control analysis.

## Risks

- Iterative intersections can be slower than vertex-plane stepping, especially in dense bokeh and vignetting sweeps.
- Extreme aspheres and rays near grazing incidence need robust bracketing to avoid false misses or infinite loops.
- Existing numeric expectations may shift because the new trace would be more physically exact than the current approximation.

## Test Plan

- Unit-test spherical, flat, conic, and polynomial-aspheric intersections against analytic or high-precision fixtures.
- Add parity tests proving paraxial and low-height exact traces stay close to the current engine.
- Add catalog smoke tests for finite, non-NaN traced rays across on-axis, off-axis, chromatic, distortion, vignetting, coma, bokeh, and pupil analyses.
- Benchmark dense analysis paths before enabling exact intersection by default.
