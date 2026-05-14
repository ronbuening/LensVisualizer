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

- More physically accurate marginal rays. The current trace transfers each ray to the next surface vertex plane, then
  evaluates sag and normal at that transferred height. Exact intersection would instead find the true point where the
  ray meets the sagged surface. The difference is small for paraxial rays, but can matter for fast lenses, steep menisci,
  ultra-wide designs, and high-aspheric surfaces.
- More reliable off-axis diagnostics. Distortion, vignetting, coma, field curvature, bokeh, and pupil aberration all
  depend on chief-ray and pupil-bundle traces. If the traced hit point is exact, those analyses share a stronger
  geometric foundation and should disagree less in edge-field cases where the current approximation compounds over many
  surfaces.
- Better clipping and aperture interpretation. Exact hit points make semi-diameter checks more meaningful because the
  ray is tested where it actually intersects the physical surface, not at the vertex plane. This should reduce ambiguous
  cases near clear-aperture edges and improve catalog-quality diagnostics for hidden trim, vignetting, and stop behavior.
- Cleaner skew-ray behavior. The current skew trace uses a rotationally symmetric surface normal at the transferred
  radius, but it still inherits the vertex-plane approximation. Exact 3D-ish hit solving would improve sagittal coma,
  field-grid distortion, circular bokeh pupil bundles, and any future full-field spot diagram work.
- A path to optical path length and wavefront features. Once each segment has an exact intersection and propagation
  length, the engine can start tracking optical path length, OPD, wavefront error, focus metrics, or rough MTF/PSF-style
  diagnostics without bolting on a separate tracing model.
- Better support for future moved-optics analysis. Perspective-control movement is currently a render-layer transform.
  Exact surface intersection is a prerequisite for any future true shifted/tilted optical trace, where the ray no longer
  meets surfaces in the centered, vertex-plane-friendly geometry.
- Stronger patent audit confidence. For patent-derived prescriptions, exact tracing would make numerical comparisons
  against recalculated back focus, image height, vignetting limits, and aberration behavior easier to trust when the lens
  includes steep groups or close-focus floating movement.
- A cleaner internal architecture. Pulling intersection, normal calculation, refraction, clipping, and failure reporting
  into focused helpers would reduce duplicated meridional/skew logic and make future trace modes easier to reason about.

## Risks

- Performance cost in dense analyses. Vignetting, bokeh, coma previews, and field-curvature sweeps trace many rays per
  render. Replacing simple thickness transfers with iterative root solving could make slider interaction feel worse
  unless the implementation uses fast analytic paths for flats/spheres, tight iteration caps, caching, and deferred UI
  calculation where appropriate.
- Harder numerical failure modes. Extreme aspheres, rays near grazing incidence, surfaces with invalid sag domains, and
  rays that skim the rim can all produce roots that are hard to bracket. The solver needs clear failure states such as
  `missedSurface`, `outsideClearAperture`, `totalInternalReflection`, and `noConvergedIntersection` so callers do not
  silently treat a numerical failure as optical clipping.
- Edge behavior may change across the catalog. Some existing lens data and tests have been tuned around the current
  approximation. Exact intersection may shift half-field limits, pupil positions, distortion curves, spherical
  aberration values, bokeh footprints, and edge clipping. Those changes may be correct, but they still need review so
  data-quality regressions are not confused with physics improvements.
- More complicated state and coordinate conventions. The engine currently keeps a simple convention: surface vertex
  positions come from `doLayout()`, and rays advance by current `thick()`. Exact intersection must preserve those public
  conventions while carefully distinguishing vertex z, sagged hit z, local surface coordinates, and image-plane
  propagation.
- Aspheric sag derivatives become more central. The solver would rely heavily on `renderSag()` and `sagSlope()` for
  convergence and normals. Any coefficient transcription issue, missing higher-order term, or near-domain conic behavior
  would have more visible consequences than it does in the current approximation.
- Ghost-ray rendering needs policy decisions. Today clipped rays can continue as ghost paths for visualization. Exact
  tracing must decide how far ghost rays should be solved after clipping, how to render a ray that misses a physical
  surface, and whether diagnostic overlays should distinguish clipping from numerical miss.
- Backward compatibility pressure. Public callers expect `traceRay`, `traceRayChromatic`, `traceSkewRay`, and the
  analysis helpers to return the same broad shapes. Exact tracing should be introduced behind an internal option or
  feature flag first, with legacy parity tests, before becoming the default.
- Harder debugging. The current approximation is easy to inspect by reading surface-by-surface heights. An iterative
  solver needs good diagnostics: iteration count, bracket interval, hit residual, surface index, failure reason, and
  possibly a dev-only trace log for one selected ray.
- Possible overkill for display-only rays. The SVG diagram is primarily educational and interactive. Exact tracing may
  offer little visible improvement for many ordinary lenses while adding maintenance cost. The upgrade is most justified
  if it unlocks analysis accuracy and future wavefront/moved-optics functionality, not merely prettier ray polylines.

## Test Plan

- Unit-test spherical, flat, conic, and polynomial-aspheric intersections against analytic or high-precision fixtures.
- Add parity tests proving paraxial and low-height exact traces stay close to the current engine.
- Add catalog smoke tests for finite, non-NaN traced rays across on-axis, off-axis, chromatic, distortion, vignetting, coma, bokeh, and pupil analyses.
- Benchmark dense analysis paths before enabling exact intersection by default.
