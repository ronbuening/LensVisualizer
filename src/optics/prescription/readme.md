# src/optics/prescription

This folder lens prescription normalization, variable gaps, labels, groups, dispersion, interactions, and aspheric helpers.

Generated `readme.md` and `improvementsuggestions.md` files are intentionally omitted from the per-file inventory so this document stays focused on source relationships.

## Relationship Diagram

```mermaid
flowchart LR
  subgraph n_src_optics_prescription["src/optics/prescription"]
    n_src_optics_prescription_src_optics_prescription_aspheres_ts["aspheres.ts"]
    n_src_optics_prescription_src_optics_prescription_dispersion_ts["dispersion.ts"]
    n_src_optics_prescription_src_optics_prescription_groups_ts["groups.ts"]
    n_src_optics_prescription_src_optics_prescription_interactions_ts["interactions.ts"]
    n_src_optics_prescription_src_optics_prescription_labels_ts["labels.ts"]
    n_src_optics_prescription_src_optics_prescription_normalizeLensData_ts["normalizeLensData.ts"]
    n_src_optics_prescription_src_optics_prescription_variables_ts["variables.ts"]
  end
  n_external_src_lens_data_defaults_ts["src/lens-data/defaults.ts"]
  n_external_src_optics_dispersion_ts["src/optics/dispersion.ts"]
  n_external_src_optics_math["src/optics/math"]
  n_external_src_optics_runtimeLens_ts["src/optics/runtimeLens.ts"]
  n_external_src_optics_types_ts["src/optics/types.ts"]
  n_external_src_types["src/types"]
  n_src_optics_prescription_src_optics_prescription_normalizeLensData_ts --> n_external_src_lens_data_defaults_ts
  n_src_optics_prescription_src_optics_prescription_dispersion_ts --> n_external_src_optics_dispersion_ts
  n_src_optics_prescription_src_optics_prescription_interactions_ts --> n_external_src_optics_math
  n_src_optics_prescription_src_optics_prescription_normalizeLensData_ts --> n_external_src_optics_math
  n_src_optics_prescription_src_optics_prescription_variables_ts --> n_external_src_optics_math
  n_src_optics_prescription_src_optics_prescription_normalizeLensData_ts --> n_external_src_optics_runtimeLens_ts
  n_src_optics_prescription_src_optics_prescription_dispersion_ts --> n_external_src_optics_types_ts
  n_src_optics_prescription_src_optics_prescription_groups_ts --> n_external_src_optics_types_ts
  n_src_optics_prescription_src_optics_prescription_interactions_ts --> n_external_src_optics_types_ts
  n_src_optics_prescription_src_optics_prescription_normalizeLensData_ts --> n_external_src_optics_types_ts
  n_src_optics_prescription_src_optics_prescription_aspheres_ts --> n_external_src_types
  n_src_optics_prescription_src_optics_prescription_dispersion_ts --> n_external_src_types
  n_src_optics_prescription_src_optics_prescription_groups_ts --> n_external_src_types
  n_src_optics_prescription_src_optics_prescription_interactions_ts --> n_external_src_types
  n_src_optics_prescription_src_optics_prescription_labels_ts --> n_external_src_types
  n_src_optics_prescription_src_optics_prescription_normalizeLensData_ts --> n_external_src_types
  n_src_optics_prescription_src_optics_prescription_variables_ts --> n_external_src_types
  n_src_optics_prescription_src_optics_prescription_normalizeLensData_ts --> n_src_optics_prescription_src_optics_prescription_aspheres_ts
  n_src_optics_prescription_src_optics_prescription_normalizeLensData_ts --> n_src_optics_prescription_src_optics_prescription_dispersion_ts
  n_src_optics_prescription_src_optics_prescription_normalizeLensData_ts --> n_src_optics_prescription_src_optics_prescription_groups_ts
  n_src_optics_prescription_src_optics_prescription_normalizeLensData_ts --> n_src_optics_prescription_src_optics_prescription_interactions_ts
  n_src_optics_prescription_src_optics_prescription_aspheres_ts --> n_src_optics_prescription_src_optics_prescription_labels_ts
  n_src_optics_prescription_src_optics_prescription_groups_ts --> n_src_optics_prescription_src_optics_prescription_labels_ts
  n_src_optics_prescription_src_optics_prescription_normalizeLensData_ts --> n_src_optics_prescription_src_optics_prescription_labels_ts
  n_src_optics_prescription_src_optics_prescription_variables_ts --> n_src_optics_prescription_src_optics_prescription_labels_ts
  n_src_optics_prescription_src_optics_prescription_normalizeLensData_ts --> n_src_optics_prescription_src_optics_prescription_variables_ts
```

## Directory Overview

- Direct source files: 7
- Direct subfolders: 0
- Main outbound areas: same folder (9), src/types (7), src/optics/types.ts (4), src/optics/math (3), src/lens-data/defaults.ts, src/optics/dispersion.ts, src/optics/runtimeLens.ts
- External consumers: src/optics/chromatic, src/optics/compat.ts, src/optics/diagram, src/optics/field, src/optics/first-order, src/optics/state, src/optics/trace

## Files

| File | Role | Imports from | Imported by | Exports |
| --- | --- | --- | --- | --- |
| `aspheres.ts` | Aspheres helper module | same folder, src/types | same folder | compileAspheres |
| `dispersion.ts` | Dispersion helper module | src/optics/dispersion.ts, src/optics/types.ts, src/types | same folder, src/optics/chromatic | compileSurfaceDispersions |
| `groups.ts` | Groups helper module | same folder, src/optics/types.ts, src/types | same folder | compileElements, compileAnnotations |
| `interactions.ts` | Interactions helper module | src/optics/math, src/optics/types.ts, src/types | same folder | yzNormalToVec3, compileSurfaceInteraction, resolvedImagePlaneToPlane3, imagePlaneDataToPlane3 |
| `labels.ts` | Labels helper module | src/types | same folder (4) | Optics2LensNormalizationError, buildSurfaceLabelMap, resolveLabel |
| `normalizeLensData.ts` | Normalize Lens Data helper module | same folder (6), src/lens-data/defaults.ts, src/optics/math, src/optics/runtimeLens.ts, src/optics/types.ts, +1 more | src/optics/chromatic (2), src/optics/first-order (2), src/optics/compat.ts, src/optics/diagram, src/optics/field, +1 more | withLensDefaults, normalizeLensData, normalizeRuntimeLens |
| `variables.ts` | Variables helper module | same folder, src/optics/math, src/types | same folder, src/optics/state | compileVariableGaps, compileVariableLabels, resolveVariableThickness, resolveControlledThickness |

