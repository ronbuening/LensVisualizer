# src/optics/internal

This folder private exact surface-tracing implementation details for the optics engine.

Generated `readme.md` and `improvementsuggestions.md` files are intentionally omitted from the per-file inventory so this document stays focused on source relationships.

## Relationship Diagram

```mermaid
flowchart LR
  subgraph n_src_optics_internal["src/optics/internal"]
    n_src_optics_internal_src_optics_internal_apertureBands_ts["apertureBands.ts"]
    n_src_optics_internal_src_optics_internal_exactSurfaceTrace_ts["exactSurfaceTrace.ts"]
    n_src_optics_internal_src_optics_internal_lensState_ts["lensState.ts"]
    n_src_optics_internal_src_optics_internal_surfaceIntersection_ts["surfaceIntersection.ts"]
    n_src_optics_internal_src_optics_internal_traceSurfaces_ts["traceSurfaces.ts"]
  end
  n_external_src_optics_geometry["src/optics/geometry"]
  n_external_src_optics_math["src/optics/math"]
  n_external_src_optics_prescription["src/optics/prescription"]
  n_external_src_optics_constants_ts["src/optics/constants.ts"]
  n_external_src_optics_trace["src/optics/trace"]
  n_external_src_types["src/types"]
  n_src_optics_internal_src_optics_internal_exactSurfaceTrace_ts --> |2| n_external_src_optics_geometry
  n_src_optics_internal_src_optics_internal_surfaceIntersection_ts --> |2| n_external_src_optics_geometry
  n_src_optics_internal_src_optics_internal_traceSurfaces_ts --> |2| n_external_src_optics_math
  n_src_optics_internal_src_optics_internal_lensState_ts --> |2| n_external_src_optics_prescription
  n_src_optics_internal_src_optics_internal_exactSurfaceTrace_ts --> |2| n_src_optics_internal_src_optics_internal_surfaceIntersection_ts
  n_src_optics_internal_src_optics_internal_exactSurfaceTrace_ts --> n_external_src_optics_constants_ts
  n_src_optics_internal_src_optics_internal_exactSurfaceTrace_ts --> n_external_src_optics_math
  n_src_optics_internal_src_optics_internal_exactSurfaceTrace_ts --> n_external_src_optics_trace
  n_src_optics_internal_src_optics_internal_exactSurfaceTrace_ts --> n_external_src_types
  n_src_optics_internal_src_optics_internal_lensState_ts --> n_external_src_types
  n_src_optics_internal_src_optics_internal_surfaceIntersection_ts --> n_external_src_types
```

## Directory Overview

- Direct source files: 5
- Direct subfolders: 0
- Main outbound areas: src/optics/geometry (4), src/optics/math (3), src/types (3), same folder (2), src/optics/prescription (2), src/optics/constants.ts, src/optics/trace
- External consumers: src/optics/diagram, src/optics/layout.ts, src/optics/prescription, src/optics/publishedStations.ts, src/optics/pupilAberration.ts, src/optics/rayTrace.ts, src/optics/runtimeLens.ts, src/optics/validateLensData.ts, +1 more

## Files

| File | Role | Imports from | Imported by | Exports |
| --- | --- | --- | --- | --- |
| `apertureBands.ts` | Aperture Bands helper module | none | src/optics/diagram, src/optics/validateLensData.ts | ApertureBandSurface, ApertureBand, materialBandForSurface, sharedMaterialBand, centralOpeningSemiDiameter, surfaceFitsInsideCentralOpening |
| `exactSurfaceTrace.ts` | Exact Surface Trace helper module | same folder (2), src/optics/geometry (2), src/optics/constants.ts, src/optics/math, src/optics/trace, +1 more | src/optics/pupilAberration.ts, src/optics/rayTrace.ts, src/optics/validateLensData.ts | Vector3, ExactTraceSurface, ExactTraceLens, ExactSurfaceTraceInput, VectorRayInput, ExactSurfaceTraceOptions, ExactSurfaceTraceHit, ExactSurfaceTraceResult, +10 more |
| `lensState.ts` | Lens State helper module | src/optics/prescription (2), src/types | src/optics/layout.ts, src/optics/prescription, src/optics/publishedStations.ts, src/optics/runtimeLens.ts, src/optics/validateLensData.ts | resolveControlledThickness, resolveVariableThickness, buildLabelIndex, buildAsphereIndex, buildVarIndex, resolveAnnotations, buildElementSpans, buildVdIndex, +5 more |
| `surfaceIntersection.ts` | Surface Intersection helper module | src/optics/geometry (2), src/types | same folder | SurfaceIntersectionFailureReason, Vector3, SurfaceIntersectionRay, SurfaceIntersectionOptions, SurfaceIntersectionLens, SurfaceIntersectionSuccess, SurfaceIntersectionFailure, SurfaceIntersectionResult, +3 more |
| `traceSurfaces.ts` | Trace Surfaces helper module | src/optics/math (2) | src/optics/layout.ts, src/optics/prescription, src/optics/pupilAberration.ts, src/optics/rayTrace.ts, src/optics/validateTeleconverterData.ts | transferParaxialRay, interactParaxialSurface, traceSurfacesParaxial, ParaxialRayState, ParaxialSurfaceTraceOptions, RealSurfaceTraceOptions, RealSurfaceTraceResult |
