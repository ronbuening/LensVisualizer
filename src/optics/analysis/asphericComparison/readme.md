# src/optics/analysis/asphericComparison

This folder src/optics/analysis/asphericComparison source folder.

Generated `readme.md` and `improvementsuggestions.md` files are intentionally omitted from the per-file inventory so this document stays focused on source relationships.

## Relationship Diagram

```mermaid
flowchart LR
  subgraph n_src_optics_analysis_asphericComparison["src/optics/analysis/asphericComparison"]
    n_src_optics_analysis_asphericComparison_src_optics_analysis_asphericComparison_comparison_ts["comparison.ts"]
    n_src_optics_analysis_asphericComparison_src_optics_analysis_asphericComparison_element_ts["element.ts"]
  end
  n_external_src_optics_analysis["src/optics/analysis"]
  n_external_src_optics_geometry["src/optics/geometry"]
  n_external_src_optics_prescription["src/optics/prescription"]
  n_external_src_types["src/types"]
  n_src_optics_analysis_asphericComparison_src_optics_analysis_asphericComparison_element_ts --> n_external_src_optics_analysis
  n_src_optics_analysis_asphericComparison_src_optics_analysis_asphericComparison_comparison_ts --> n_external_src_optics_geometry
  n_src_optics_analysis_asphericComparison_src_optics_analysis_asphericComparison_element_ts --> n_external_src_optics_prescription
  n_src_optics_analysis_asphericComparison_src_optics_analysis_asphericComparison_comparison_ts --> n_external_src_types
  n_src_optics_analysis_asphericComparison_src_optics_analysis_asphericComparison_element_ts --> n_external_src_types
  n_src_optics_analysis_asphericComparison_src_optics_analysis_asphericComparison_element_ts --> n_src_optics_analysis_asphericComparison_src_optics_analysis_asphericComparison_comparison_ts
```

## Directory Overview

- Direct source files: 2
- Direct subfolders: 0
- Main outbound areas: src/optics/analysis (2), src/types (2), src/optics/geometry, src/optics/prescription
- External consumers: src/optics/analysis.ts, src/optics/compat.ts

## Files

| File | Role | Imports from | Imported by | Exports |
| --- | --- | --- | --- | --- |
| `comparison.ts` | Comparison helper module | src/optics/geometry, src/types | src/optics/analysis, src/optics/analysis.ts, src/optics/compat.ts | DepartureSample, computeAsphericDepartureFromProfiles, computeAsphericDeparture, computeDepartureProfile, computeBestFitSphereR, computeDepartureProfileFromProfiles, computeBestFitSphereRFromProfiles, peakAbsDeparture, +2 more |
| `element.ts` | Element helper module | src/optics/analysis (2), src/optics/prescription, src/types | src/optics/analysis.ts | SurfaceComparison, computeAsphericElementComparison |
