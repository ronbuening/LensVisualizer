# src/optics/analysis/distortion

This folder src/optics/analysis/distortion source folder.

Generated `readme.md` and `improvementsuggestions.md` files are intentionally omitted from the per-file inventory so this document stays focused on source relationships.

## Relationship Diagram

```mermaid
flowchart LR
  subgraph n_src_optics_analysis_distortion["src/optics/analysis/distortion"]
    n_src_optics_analysis_distortion_src_optics_analysis_distortion_distortion_ts["distortion.ts"]
  end
  n_external_src_optics_trace["src/optics/trace"]
  n_external_src_optics_field["src/optics/field"]
  n_external_src_optics_analysis["src/optics/analysis"]
  n_external_src_optics_state["src/optics/state"]
  n_external_src_optics_prescription["src/optics/prescription"]
  n_external_src_utils_catalog["src/utils/catalog"]
  n_src_optics_analysis_distortion_src_optics_analysis_distortion_distortion_ts --> |5| n_external_src_optics_trace
  n_src_optics_analysis_distortion_src_optics_analysis_distortion_distortion_ts --> |3| n_external_src_optics_field
  n_src_optics_analysis_distortion_src_optics_analysis_distortion_distortion_ts --> |2| n_external_src_optics_analysis
  n_src_optics_analysis_distortion_src_optics_analysis_distortion_distortion_ts --> |2| n_external_src_optics_state
  n_src_optics_analysis_distortion_src_optics_analysis_distortion_distortion_ts --> n_external_src_optics_prescription
  n_src_optics_analysis_distortion_src_optics_analysis_distortion_distortion_ts --> n_external_src_utils_catalog
```

## Directory Overview

- Direct source files: 1
- Direct subfolders: 0
- Main outbound areas: src/optics/trace (5), src/optics/field (3), src/optics/analysis (2), src/optics/state (2), src/optics/prescription, src/utils/catalog
- External consumers: src/optics/analysis, src/optics/analysis.ts

## Files

| File | Role | Imports from | Imported by | Exports |
| --- | --- | --- | --- | --- |
| `distortion.ts` | Distortion helper module | src/optics/trace (5), src/optics/field (3), src/optics/analysis (2), src/optics/state (2), src/optics/prescription, +1 more | src/optics/analysis, src/optics/analysis.ts | DistortionSample, DistortionCurveResult, DistortionGridPoint, DistortionGridLine, DistortionFieldGridResult, computeDistortionCurve, computeDistortionFieldGrid |
