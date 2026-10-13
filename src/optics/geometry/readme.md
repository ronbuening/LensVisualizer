# src/optics/geometry

This folder the single implementation of surface sag, slope, and profiles, with the profile normal, conic domain, and slope bound, and the ray-surface intersection kernel with its roundoff envelopes and plane landings.

Generated `readme.md` and `improvementsuggestions.md` files are intentionally omitted from the per-file inventory so this document stays focused on source relationships.

## Relationship Diagram

```mermaid
flowchart LR
  subgraph n_src_optics_geometry["src/optics/geometry"]
    n_src_optics_geometry_src_optics_geometry_intersect_ts["intersect.ts"]
    n_src_optics_geometry_src_optics_geometry_intersectConic_ts["intersectConic.ts"]
    n_src_optics_geometry_src_optics_geometry_intersectPlane_ts["intersectPlane.ts"]
    n_src_optics_geometry_src_optics_geometry_intersectTolerance_ts["intersectTolerance.ts"]
    n_src_optics_geometry_src_optics_geometry_intersectTypes_ts["intersectTypes.ts"]
    n_src_optics_geometry_src_optics_geometry_surfaceProfile_ts["surfaceProfile.ts"]
  end
  n_external_src_types["src/types"]
  n_external_src_optics_math["src/optics/math"]
  n_external_src_optics_constants_ts["src/optics/constants.ts"]
  n_external_src_optics_types_ts["src/optics/types.ts"]
  n_src_optics_geometry_src_optics_geometry_surfaceProfile_ts --> |3| n_external_src_types
  n_src_optics_geometry_src_optics_geometry_intersect_ts --> |2| n_external_src_optics_math
  n_src_optics_geometry_src_optics_geometry_intersect_ts --> |2| n_src_optics_geometry_src_optics_geometry_intersectTypes_ts
  n_src_optics_geometry_src_optics_geometry_intersect_ts --> n_external_src_optics_constants_ts
  n_src_optics_geometry_src_optics_geometry_intersectConic_ts --> n_external_src_optics_constants_ts
  n_src_optics_geometry_src_optics_geometry_intersectPlane_ts --> n_external_src_optics_constants_ts
  n_src_optics_geometry_src_optics_geometry_surfaceProfile_ts --> n_external_src_optics_constants_ts
  n_src_optics_geometry_src_optics_geometry_intersectPlane_ts --> n_external_src_optics_math
  n_src_optics_geometry_src_optics_geometry_surfaceProfile_ts --> n_external_src_optics_math
  n_src_optics_geometry_src_optics_geometry_intersect_ts --> n_external_src_optics_types_ts
  n_src_optics_geometry_src_optics_geometry_intersectConic_ts --> n_external_src_optics_types_ts
  n_src_optics_geometry_src_optics_geometry_intersectPlane_ts --> n_external_src_optics_types_ts
  n_src_optics_geometry_src_optics_geometry_intersectTolerance_ts --> n_external_src_optics_types_ts
  n_src_optics_geometry_src_optics_geometry_intersectTypes_ts --> n_external_src_optics_types_ts
  n_src_optics_geometry_src_optics_geometry_surfaceProfile_ts --> n_external_src_optics_types_ts
  n_src_optics_geometry_src_optics_geometry_intersect_ts --> n_src_optics_geometry_src_optics_geometry_intersectConic_ts
  n_src_optics_geometry_src_optics_geometry_intersect_ts --> n_src_optics_geometry_src_optics_geometry_intersectTolerance_ts
  n_src_optics_geometry_src_optics_geometry_intersectPlane_ts --> n_src_optics_geometry_src_optics_geometry_intersectTolerance_ts
  n_src_optics_geometry_src_optics_geometry_intersectConic_ts --> n_src_optics_geometry_src_optics_geometry_intersectTypes_ts
  n_src_optics_geometry_src_optics_geometry_intersectConic_ts --> n_src_optics_geometry_src_optics_geometry_surfaceProfile_ts
```

## Directory Overview

- Direct source files: 6
- Direct subfolders: 0
- Main outbound areas: same folder (7), src/optics/types.ts (6), src/optics/constants.ts (4), src/optics/math (4), src/types (3)
- External consumers: src/optics/analysis, src/optics/asphericComparison.ts, src/optics/diagram, src/optics/geometry.ts, src/optics/internal, src/optics/layout.ts, src/optics/math, src/optics/perspective, +4 more

## Files

| File | Role | Imports from | Imported by | Exports |
| --- | --- | --- | --- | --- |
| `intersect.ts` | Intersect helper module | same folder (4), src/optics/math (2), src/optics/constants.ts, src/optics/types.ts | src/optics/trace (2), src/optics/internal | ClosedFormFallbackReason, SurfaceIntersectionFailure, SurfaceIntersectionFailureReason, SurfaceIntersectionOptions, SurfaceIntersectionResult, SurfaceIntersectionSuccess, intersectSurfaceProfile, selectAsphericCapHit |
| `intersectConic.ts` | Intersect Conic helper module | same folder (2), src/optics/constants.ts, src/optics/types.ts | same folder | intersectConicClosedForm |
| `intersectPlane.ts` | Intersect Plane helper module | same folder, src/optics/constants.ts, src/optics/math, src/optics/types.ts | src/optics/perspective (3), src/optics/trace | RayPlaneIntersection, RayPlaneIntersectionOptions, intersectRayPlane |
| `intersectTolerance.ts` | Intersect Tolerance helper module | src/optics/types.ts | same folder (2), src/optics/internal (2) | sagResidualRoundoff, planeResidualRoundoff |
| `intersectTypes.ts` | Intersect Types helper module | src/optics/types.ts | same folder (2) | SurfaceIntersectionFailureReason, ClosedFormFallbackReason, SurfaceIntersectionOptions, SurfaceIntersectionSuccess, SurfaceIntersectionFailure, SurfaceIntersectionResult, ParameterInterval |
| `surfaceProfile.ts` | Surface Profile helper module | src/types (3), src/optics/constants.ts, src/optics/math, src/optics/types.ts | src/optics/internal (2), same folder, src/optics/analysis, src/optics/asphericComparison.ts, src/optics/diagram, +7 more | FLAT_R_THRESHOLD, MAX_RIM_SLOPE_TAN, DEFAULT_MAX_RIM_ANGLE_DEG, sag, conicPolySag, sagSlopeRaw, normalFromSlope, conicFiniteRadiusLimit, +5 more |
