# src/optics/analysis/summary

This folder src/optics/analysis/summary source folder.

Generated `readme.md` and `improvementsuggestions.md` files are intentionally omitted from the per-file inventory so this document stays focused on source relationships.

## Relationship Diagram

```mermaid
flowchart LR
  subgraph n_src_optics_analysis_summary["src/optics/analysis/summary"]
    n_src_optics_analysis_summary_src_optics_analysis_summary_breathing_ts["breathing.ts"]
    n_src_optics_analysis_summary_src_optics_analysis_summary_cardinals_ts["cardinals.ts"]
    n_src_optics_analysis_summary_src_optics_analysis_summary_groupMovement_ts["groupMovement.ts"]
    n_src_optics_analysis_summary_src_optics_analysis_summary_summary_ts["summary.ts"]
  end
  n_external_src_optics_state["src/optics/state"]
  n_external_src_optics_first_order["src/optics/first-order"]
  n_external_src_optics_prescription["src/optics/prescription"]
  n_external_src_types["src/types"]
  n_external_src_optics_analysis["src/optics/analysis"]
  n_src_optics_analysis_summary_src_optics_analysis_summary_groupMovement_ts --> |4| n_external_src_optics_state
  n_src_optics_analysis_summary_src_optics_analysis_summary_breathing_ts --> |2| n_external_src_optics_first_order
  n_src_optics_analysis_summary_src_optics_analysis_summary_groupMovement_ts --> |2| n_external_src_optics_prescription
  n_src_optics_analysis_summary_src_optics_analysis_summary_breathing_ts --> |2| n_external_src_optics_state
  n_src_optics_analysis_summary_src_optics_analysis_summary_summary_ts --> |2| n_external_src_optics_state
  n_src_optics_analysis_summary_src_optics_analysis_summary_groupMovement_ts --> |2| n_external_src_types
  n_src_optics_analysis_summary_src_optics_analysis_summary_breathing_ts --> n_external_src_optics_analysis
  n_src_optics_analysis_summary_src_optics_analysis_summary_cardinals_ts --> n_external_src_optics_analysis
  n_src_optics_analysis_summary_src_optics_analysis_summary_groupMovement_ts --> n_external_src_optics_analysis
  n_src_optics_analysis_summary_src_optics_analysis_summary_summary_ts --> n_external_src_optics_analysis
  n_src_optics_analysis_summary_src_optics_analysis_summary_cardinals_ts --> n_external_src_optics_first_order
  n_src_optics_analysis_summary_src_optics_analysis_summary_breathing_ts --> n_external_src_optics_prescription
  n_src_optics_analysis_summary_src_optics_analysis_summary_summary_ts --> n_external_src_optics_prescription
  n_src_optics_analysis_summary_src_optics_analysis_summary_summary_ts --> n_src_optics_analysis_summary_src_optics_analysis_summary_cardinals_ts
```

## Directory Overview

- Direct source files: 4
- Direct subfolders: 0
- Main outbound areas: src/optics/state (8), src/optics/analysis (5), src/optics/prescription (4), src/optics/first-order (3), src/types (2)
- External consumers: src/optics/analysis, src/optics/analysis.ts, src/optics/state

## Files

| File | Role | Imports from | Imported by | Exports |
| --- | --- | --- | --- | --- |
| `breathing.ts` | Breathing helper module | src/optics/first-order (2), src/optics/state (2), src/optics/analysis, src/optics/prescription | src/optics/analysis.ts | computeFocusEFL, BreathingSample, computeFocusBreathingSeries |
| `cardinals.ts` | Cardinals helper module | src/optics/analysis, src/optics/first-order | src/optics/analysis, src/optics/analysis.ts | computeCardinalElements |
| `groupMovement.ts` | Group Movement helper module | src/optics/state (4), src/optics/prescription (2), src/types (2), src/optics/analysis | src/optics/analysis.ts, src/optics/state | LensMovementGroup, GroupMovementPoint, GroupMovementSeries, GroupMovementAvailability, GroupMovementProfile, getGroupMovementAvailability, isGroupMovementModeAvailable, firstAvailableGroupMovementMode, +2 more |
| `summary.ts` | Summary helper module | src/optics/analysis (2), src/optics/state (2), src/optics/prescription | src/optics/analysis, src/optics/analysis.ts | OpticalSummaryMetrics, computeOpticalSummary |
