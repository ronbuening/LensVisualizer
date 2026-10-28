# src/optics/analysis/summary

This folder src/optics/analysis/summary source folder.

Generated `readme.md` and `improvementsuggestions.md` files are intentionally omitted from the per-file inventory so this document stays focused on source relationships.

## Relationship Diagram

```mermaid
flowchart LR
  subgraph n_src_optics_analysis_summary["src/optics/analysis/summary"]
    n_src_optics_analysis_summary_src_optics_analysis_summary_breathing_ts["breathing.ts"]
    n_src_optics_analysis_summary_src_optics_analysis_summary_cardinals_ts["cardinals.ts"]
    n_src_optics_analysis_summary_src_optics_analysis_summary_fNumbers_ts["fNumbers.ts"]
    n_src_optics_analysis_summary_src_optics_analysis_summary_groupMovement_ts["groupMovement.ts"]
    n_src_optics_analysis_summary_src_optics_analysis_summary_summary_ts["summary.ts"]
  end
  n_external_src_optics_state["src/optics/state"]
  n_external_src_optics_analysis["src/optics/analysis"]
  n_external_src_optics_first_order["src/optics/first-order"]
  n_external_src_optics_prescription["src/optics/prescription"]
  n_external_src_optics_trace["src/optics/trace"]
  n_external_src_types["src/types"]
  n_external_src_optics_field["src/optics/field"]
  n_external_src_optics_types_ts["src/optics/types.ts"]
  n_src_optics_analysis_summary_src_optics_analysis_summary_groupMovement_ts --> |4| n_external_src_optics_state
  n_src_optics_analysis_summary_src_optics_analysis_summary_fNumbers_ts --> |3| n_external_src_optics_analysis
  n_src_optics_analysis_summary_src_optics_analysis_summary_breathing_ts --> |2| n_external_src_optics_first_order
  n_src_optics_analysis_summary_src_optics_analysis_summary_groupMovement_ts --> |2| n_external_src_optics_prescription
  n_src_optics_analysis_summary_src_optics_analysis_summary_breathing_ts --> |2| n_external_src_optics_state
  n_src_optics_analysis_summary_src_optics_analysis_summary_summary_ts --> |2| n_external_src_optics_state
  n_src_optics_analysis_summary_src_optics_analysis_summary_fNumbers_ts --> |2| n_external_src_optics_trace
  n_src_optics_analysis_summary_src_optics_analysis_summary_groupMovement_ts --> |2| n_external_src_types
  n_src_optics_analysis_summary_src_optics_analysis_summary_summary_ts --> |2| n_src_optics_analysis_summary_src_optics_analysis_summary_fNumbers_ts
  n_src_optics_analysis_summary_src_optics_analysis_summary_breathing_ts --> n_external_src_optics_analysis
  n_src_optics_analysis_summary_src_optics_analysis_summary_cardinals_ts --> n_external_src_optics_analysis
  n_src_optics_analysis_summary_src_optics_analysis_summary_groupMovement_ts --> n_external_src_optics_analysis
  n_src_optics_analysis_summary_src_optics_analysis_summary_summary_ts --> n_external_src_optics_analysis
  n_src_optics_analysis_summary_src_optics_analysis_summary_fNumbers_ts --> n_external_src_optics_field
  n_src_optics_analysis_summary_src_optics_analysis_summary_cardinals_ts --> n_external_src_optics_first_order
  n_src_optics_analysis_summary_src_optics_analysis_summary_summary_ts --> n_external_src_optics_first_order
  n_src_optics_analysis_summary_src_optics_analysis_summary_breathing_ts --> n_external_src_optics_prescription
  n_src_optics_analysis_summary_src_optics_analysis_summary_summary_ts --> n_external_src_optics_prescription
  n_src_optics_analysis_summary_src_optics_analysis_summary_fNumbers_ts --> n_external_src_optics_types_ts
  n_src_optics_analysis_summary_src_optics_analysis_summary_fNumbers_ts --> n_external_src_types
  n_src_optics_analysis_summary_src_optics_analysis_summary_summary_ts --> n_src_optics_analysis_summary_src_optics_analysis_summary_cardinals_ts
```

## Directory Overview

- Direct source files: 5
- Direct subfolders: 0
- Main outbound areas: src/optics/analysis (10), src/optics/state (8), src/optics/first-order (4), src/optics/prescription (4), src/types (3), src/optics/trace (2), src/optics/field, src/optics/types.ts
- External consumers: src/optics/analysis, src/optics/analysis.ts, src/optics/state

## Files

| File | Role | Imports from | Imported by | Exports |
| --- | --- | --- | --- | --- |
| `breathing.ts` | Breathing helper module | src/optics/first-order (2), src/optics/state (2), src/optics/analysis, src/optics/prescription | src/optics/analysis.ts | computeFocusEFL, BreathingSample, computeFocusBreathingSeries |
| `cardinals.ts` | Cardinals helper module | src/optics/analysis, src/optics/first-order | src/optics/analysis, src/optics/analysis.ts | computeCardinalElements |
| `fNumbers.ts` | F Numbers helper module | src/optics/analysis (3), src/optics/trace (2), src/optics/field, src/optics/types.ts, src/types | src/optics/analysis (2), src/optics/analysis.ts | WorkingFNumberResult, computeWorkingFNumber |
| `groupMovement.ts` | Group Movement helper module | src/optics/state (4), src/optics/prescription (2), src/types (2), src/optics/analysis | src/optics/analysis.ts, src/optics/state | LensMovementGroup, GroupMovementPoint, GroupMovementSeries, GroupMovementAvailability, GroupMovementProfile, getGroupMovementAvailability, isGroupMovementModeAvailable, firstAvailableGroupMovementMode, +2 more |
| `summary.ts` | Summary helper module | src/optics/analysis (4), src/optics/state (2), src/optics/first-order, src/optics/prescription | src/optics/analysis, src/optics/analysis.ts | OpticalSummaryMetrics, computeOpticalSummary |
