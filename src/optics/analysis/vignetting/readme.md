# src/optics/analysis/vignetting

This folder computes OpticStudio's vignetting (the share of a stop lattice's rays transmitted, geometric) and relative illumination (Rimmer's projected solid angle of the exit pupil in direction-cosine space, with transmission, relative to the axis).

Generated `readme.md` and `improvementsuggestions.md` files are intentionally omitted from the per-file inventory so this document stays focused on source relationships.

## Relationship Diagram

```mermaid
flowchart LR
  subgraph n_src_optics_analysis_vignetting["src/optics/analysis/vignetting"]
    n_src_optics_analysis_vignetting_src_optics_analysis_vignetting_vignetting_ts["vignetting.ts"]
  end
  n_external_src_optics_analysis["src/optics/analysis"]
  n_external_src_optics_trace["src/optics/trace"]
  n_external_src_optics_field["src/optics/field"]
  n_external_src_optics_state["src/optics/state"]
  n_external_src_optics_prescription["src/optics/prescription"]
  n_external_src_optics_types_ts["src/optics/types.ts"]
  n_src_optics_analysis_vignetting_src_optics_analysis_vignetting_vignetting_ts --> |7| n_external_src_optics_analysis
  n_src_optics_analysis_vignetting_src_optics_analysis_vignetting_vignetting_ts --> |3| n_external_src_optics_trace
  n_src_optics_analysis_vignetting_src_optics_analysis_vignetting_vignetting_ts --> |2| n_external_src_optics_field
  n_src_optics_analysis_vignetting_src_optics_analysis_vignetting_vignetting_ts --> |2| n_external_src_optics_state
  n_src_optics_analysis_vignetting_src_optics_analysis_vignetting_vignetting_ts --> n_external_src_optics_prescription
  n_src_optics_analysis_vignetting_src_optics_analysis_vignetting_vignetting_ts --> n_external_src_optics_types_ts
```

## Directory Overview

- Direct source files: 1
- Direct subfolders: 0
- Main outbound areas: src/optics/analysis (7), src/optics/trace (3), src/optics/field (2), src/optics/state (2), src/optics/prescription, src/optics/types.ts
- External consumers: src/optics/analysis, src/optics/analysis.ts

## Files

| File | Role | Imports from | Imported by | Exports |
| --- | --- | --- | --- | --- |
| `vignetting.ts` | Vignetting helper module | src/optics/analysis (7), src/optics/trace (3), src/optics/field (2), src/optics/state (2), src/optics/prescription, +1 more | src/optics/analysis, src/optics/analysis.ts | BEAM_GRID_CELLS, MIN_BEAM_GRID_CELLS, VIGNETTING_MAX_UNAIMED_SHARE, RIMMER_MIN_CELL_AREA_RATIO, VignettingLatticeCell, VignettingFieldUnavailableReason, RelativeIlluminationUnavailableReason, VignettingCurveUnavailableReason, +8 more |
