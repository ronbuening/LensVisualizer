# src/optics/internal

This folder private exact surface-tracing implementation details for the optics engine.

Generated `readme.md` and `improvementsuggestions.md` files are intentionally omitted from the per-file inventory so this document stays focused on source relationships.

## Relationship Diagram

```mermaid
flowchart LR
  subgraph n_src_optics_internal["src/optics/internal"]
    n_src_optics_internal_src_optics_internal_apertureBands_ts["apertureBands.ts"]
    n_src_optics_internal_src_optics_internal_lensState_ts["lensState.ts"]
  end
  n_external_src_optics_prescription["src/optics/prescription"]
  n_external_src_types["src/types"]
  n_src_optics_internal_src_optics_internal_lensState_ts --> |2| n_external_src_optics_prescription
  n_src_optics_internal_src_optics_internal_lensState_ts --> n_external_src_types
```

## Directory Overview

- Direct source files: 2
- Direct subfolders: 0
- Main outbound areas: src/optics/prescription (2), src/types
- External consumers: src/optics/diagram, src/optics/layout.ts, src/optics/prescription, src/optics/publishedStations.ts, src/optics/runtimeLens.ts, src/optics/validateLensData.ts

## Files

| File | Role | Imports from | Imported by | Exports |
| --- | --- | --- | --- | --- |
| `apertureBands.ts` | Aperture Bands helper module | none | src/optics/diagram, src/optics/validateLensData.ts | ApertureBandSurface, ApertureBand, materialBandForSurface, sharedMaterialBand, centralOpeningSemiDiameter, surfaceFitsInsideCentralOpening |
| `lensState.ts` | Lens State helper module | src/optics/prescription (2), src/types | src/optics/layout.ts, src/optics/prescription, src/optics/publishedStations.ts, src/optics/runtimeLens.ts, src/optics/validateLensData.ts | resolveControlledThickness, resolveVariableThickness, buildLabelIndex, buildAsphereIndex, buildVarIndex, resolveAnnotations, buildElementSpans, buildVdIndex, +5 more |
