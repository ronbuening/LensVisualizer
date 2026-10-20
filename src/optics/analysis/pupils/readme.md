# src/optics/analysis/pupils

This folder src/optics/analysis/pupils source folder.

Generated `readme.md` and `improvementsuggestions.md` files are intentionally omitted from the per-file inventory so this document stays focused on source relationships.

## Relationship Diagram

```mermaid
flowchart LR
  subgraph n_src_optics_analysis_pupils["src/optics/analysis/pupils"]
    n_src_optics_analysis_pupils_src_optics_analysis_pupils_pupilAberration_ts["pupilAberration.ts"]
  end
  n_external_src_optics_state["src/optics/state"]
  n_external_src_optics_trace["src/optics/trace"]
  n_external_src_optics_prescription["src/optics/prescription"]
  n_external_src_optics_analysis["src/optics/analysis"]
  n_external_src_optics_field["src/optics/field"]
  n_external_src_optics_focusDistance_ts["src/optics/focusDistance.ts"]
  n_external_src_optics_math["src/optics/math"]
  n_external_src_optics_types_ts["src/optics/types.ts"]
  n_external_src_types["src/types"]
  n_src_optics_analysis_pupils_src_optics_analysis_pupils_pupilAberration_ts --> |5| n_external_src_optics_state
  n_src_optics_analysis_pupils_src_optics_analysis_pupils_pupilAberration_ts --> |3| n_external_src_optics_trace
  n_src_optics_analysis_pupils_src_optics_analysis_pupils_pupilAberration_ts --> |2| n_external_src_optics_prescription
  n_src_optics_analysis_pupils_src_optics_analysis_pupils_pupilAberration_ts --> n_external_src_optics_analysis
  n_src_optics_analysis_pupils_src_optics_analysis_pupils_pupilAberration_ts --> n_external_src_optics_field
  n_src_optics_analysis_pupils_src_optics_analysis_pupils_pupilAberration_ts --> n_external_src_optics_focusDistance_ts
  n_src_optics_analysis_pupils_src_optics_analysis_pupils_pupilAberration_ts --> n_external_src_optics_math
  n_src_optics_analysis_pupils_src_optics_analysis_pupils_pupilAberration_ts --> n_external_src_optics_types_ts
  n_src_optics_analysis_pupils_src_optics_analysis_pupils_pupilAberration_ts --> n_external_src_types
```

## Directory Overview

- Direct source files: 1
- Direct subfolders: 0
- Main outbound areas: src/optics/state (5), src/optics/trace (3), src/optics/prescription (2), src/optics/analysis, src/optics/field, src/optics/focusDistance.ts, src/optics/math, src/optics/types.ts, +1 more
- External consumers: src/optics/analysis, src/optics/analysis.ts, src/optics/compat.ts

## Files

| File | Role | Imports from | Imported by | Exports |
| --- | --- | --- | --- | --- |
| `pupilAberration.ts` | Pupil Aberration helper module | src/optics/state (5), src/optics/trace (3), src/optics/prescription (2), src/optics/analysis, src/optics/field, +4 more | src/optics/analysis, src/optics/analysis.ts, src/optics/compat.ts | PupilAberrationSample, PupilAberrationProfile, ExitPupilAberrationSample, ExitPupilAberrationProfile, PUPIL_ABERRATION_SAMPLE_COUNT, PUPIL_ABERRATION_SAMPLE_COUNT_2, computePupilAberrationProfile, computeExitPupilAberrationProfile, +2 more |
