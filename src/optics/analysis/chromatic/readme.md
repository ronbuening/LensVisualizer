# src/optics/analysis/chromatic

This folder src/optics/analysis/chromatic source folder.

Generated `readme.md` and `improvementsuggestions.md` files are intentionally omitted from the per-file inventory so this document stays focused on source relationships.

## Relationship Diagram

```mermaid
flowchart LR
  subgraph n_src_optics_analysis_chromatic["src/optics/analysis/chromatic"]
    n_src_optics_analysis_chromatic_src_optics_analysis_chromatic_analysis_ts["analysis.ts"]
    n_src_optics_analysis_chromatic_src_optics_analysis_chromatic_rayFan_ts["rayFan.ts"]
    n_src_optics_analysis_chromatic_src_optics_analysis_chromatic_rayFanScaling_ts["rayFanScaling.ts"]
  end
  n_external_src_optics_analysis["src/optics/analysis"]
  n_external_src_optics_chromatic["src/optics/chromatic"]
  n_external_src_optics_prescription["src/optics/prescription"]
  n_external_src_optics_state["src/optics/state"]
  n_external_src_optics_trace["src/optics/trace"]
  n_external_src_optics_field["src/optics/field"]
  n_external_src_optics_types_ts["src/optics/types.ts"]
  n_external_src_types["src/types"]
  n_src_optics_analysis_chromatic_src_optics_analysis_chromatic_rayFan_ts --> |4| n_external_src_optics_analysis
  n_src_optics_analysis_chromatic_src_optics_analysis_chromatic_analysis_ts --> |3| n_external_src_optics_analysis
  n_src_optics_analysis_chromatic_src_optics_analysis_chromatic_analysis_ts --> |2| n_external_src_optics_chromatic
  n_src_optics_analysis_chromatic_src_optics_analysis_chromatic_rayFan_ts --> |2| n_external_src_optics_chromatic
  n_src_optics_analysis_chromatic_src_optics_analysis_chromatic_rayFan_ts --> |2| n_external_src_optics_prescription
  n_src_optics_analysis_chromatic_src_optics_analysis_chromatic_analysis_ts --> |2| n_external_src_optics_state
  n_src_optics_analysis_chromatic_src_optics_analysis_chromatic_rayFan_ts --> |2| n_external_src_optics_state
  n_src_optics_analysis_chromatic_src_optics_analysis_chromatic_rayFan_ts --> |2| n_external_src_optics_trace
  n_src_optics_analysis_chromatic_src_optics_analysis_chromatic_rayFanScaling_ts --> n_external_src_optics_chromatic
  n_src_optics_analysis_chromatic_src_optics_analysis_chromatic_analysis_ts --> n_external_src_optics_field
  n_src_optics_analysis_chromatic_src_optics_analysis_chromatic_rayFan_ts --> n_external_src_optics_field
  n_src_optics_analysis_chromatic_src_optics_analysis_chromatic_analysis_ts --> n_external_src_optics_prescription
  n_src_optics_analysis_chromatic_src_optics_analysis_chromatic_analysis_ts --> n_external_src_optics_trace
  n_src_optics_analysis_chromatic_src_optics_analysis_chromatic_analysis_ts --> n_external_src_optics_types_ts
  n_src_optics_analysis_chromatic_src_optics_analysis_chromatic_rayFan_ts --> n_external_src_optics_types_ts
  n_src_optics_analysis_chromatic_src_optics_analysis_chromatic_analysis_ts --> n_external_src_types
  n_src_optics_analysis_chromatic_src_optics_analysis_chromatic_rayFan_ts --> n_external_src_types
  n_src_optics_analysis_chromatic_src_optics_analysis_chromatic_rayFanScaling_ts --> n_external_src_types
```

## Directory Overview

- Direct source files: 3
- Direct subfolders: 0
- Main outbound areas: src/optics/analysis (7), src/optics/chromatic (5), src/optics/state (4), src/optics/prescription (3), src/optics/trace (3), src/types (3), src/optics/field (2), src/optics/types.ts (2)
- External consumers: src/optics/analysis, src/optics/analysis.ts

## Files

| File | Role | Imports from | Imported by | Exports |
| --- | --- | --- | --- | --- |
| `analysis.ts` | Analysis helper module | src/optics/analysis (3), src/optics/chromatic (2), src/optics/state (2), src/optics/field, src/optics/prescription, +3 more | src/optics/analysis (2), src/optics/analysis.ts | DEFAULT_CHROMATIC_ANALYSIS_CHANNELS, DEFAULT_LONGITUDINAL_CHROMATIC_FRACTIONS, DEFAULT_LATERAL_COLOR_FIELD_FRACTIONS, ChromaticAnalysisOptions, LongitudinalChromaticFocusSample, LongitudinalChromaticFocusResult, LateralColorChannelSample, LateralColorFieldSample, +5 more |
| `rayFan.ts` | Ray Fan helper module | src/optics/analysis (4), src/optics/chromatic (2), src/optics/prescription (2), src/optics/state (2), src/optics/trace (2), +3 more | src/optics/analysis, src/optics/analysis.ts | ChromaticRayFanAnalysisOptions, ChromaticRayFanAnalysis, computeChromaticRayFanAnalysis |
| `rayFanScaling.ts` | Ray Fan Scaling helper module | src/optics/chromatic, src/types | src/optics/analysis.ts | REFERENCE_LOCA_MM, REFERENCE_FAN_IMAGE_HEIGHT_SPREAD_MM, ChromaticBarResult, computeChromaticBarOffsets, computeLocaBarOffsets |
