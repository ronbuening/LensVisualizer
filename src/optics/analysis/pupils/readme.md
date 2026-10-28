# src/optics/analysis/pupils

This folder src/optics/analysis/pupils source folder.

Generated `readme.md` and `improvementsuggestions.md` files are intentionally omitted from the per-file inventory so this document stays focused on source relationships.

## Relationship Diagram

```mermaid
flowchart LR
  subgraph n_src_optics_analysis_pupils["src/optics/analysis/pupils"]
    n_src_optics_analysis_pupils_src_optics_analysis_pupils_aimedPupil_ts["aimedPupil.ts"]
    n_src_optics_analysis_pupils_src_optics_analysis_pupils_pupilAberration_ts["pupilAberration.ts"]
    n_src_optics_analysis_pupils_src_optics_analysis_pupils_stopLattice_ts["stopLattice.ts"]
  end
  n_external_src_optics_trace["src/optics/trace"]
  n_external_src_optics_state["src/optics/state"]
  n_external_src_optics_analysis["src/optics/analysis"]
  n_external_src_optics_field["src/optics/field"]
  n_external_src_optics_prescription["src/optics/prescription"]
  n_external_src_optics_types_ts["src/optics/types.ts"]
  n_external_src_optics_chromatic["src/optics/chromatic"]
  n_external_src_optics_math["src/optics/math"]
  n_external_src_types["src/types"]
  n_src_optics_analysis_pupils_src_optics_analysis_pupils_aimedPupil_ts --> |8| n_external_src_optics_trace
  n_src_optics_analysis_pupils_src_optics_analysis_pupils_pupilAberration_ts --> |5| n_external_src_optics_state
  n_src_optics_analysis_pupils_src_optics_analysis_pupils_pupilAberration_ts --> |3| n_external_src_optics_trace
  n_src_optics_analysis_pupils_src_optics_analysis_pupils_pupilAberration_ts --> |2| n_external_src_optics_analysis
  n_src_optics_analysis_pupils_src_optics_analysis_pupils_pupilAberration_ts --> |2| n_external_src_optics_field
  n_src_optics_analysis_pupils_src_optics_analysis_pupils_pupilAberration_ts --> |2| n_external_src_optics_prescription
  n_src_optics_analysis_pupils_src_optics_analysis_pupils_pupilAberration_ts --> |2| n_external_src_optics_types_ts
  n_src_optics_analysis_pupils_src_optics_analysis_pupils_aimedPupil_ts --> |2| n_src_optics_analysis_pupils_src_optics_analysis_pupils_stopLattice_ts
  n_src_optics_analysis_pupils_src_optics_analysis_pupils_aimedPupil_ts --> n_external_src_optics_analysis
  n_src_optics_analysis_pupils_src_optics_analysis_pupils_aimedPupil_ts --> n_external_src_optics_chromatic
  n_src_optics_analysis_pupils_src_optics_analysis_pupils_aimedPupil_ts --> n_external_src_optics_field
  n_src_optics_analysis_pupils_src_optics_analysis_pupils_aimedPupil_ts --> n_external_src_optics_math
  n_src_optics_analysis_pupils_src_optics_analysis_pupils_pupilAberration_ts --> n_external_src_optics_math
  n_src_optics_analysis_pupils_src_optics_analysis_pupils_aimedPupil_ts --> n_external_src_optics_types_ts
  n_src_optics_analysis_pupils_src_optics_analysis_pupils_aimedPupil_ts --> n_external_src_types
```

## Directory Overview

- Direct source files: 3
- Direct subfolders: 0
- Main outbound areas: src/optics/trace (11), src/optics/analysis (5), src/optics/state (5), src/optics/field (3), src/optics/types.ts (3), src/optics/math (2), src/optics/prescription (2), src/optics/chromatic, +1 more
- External consumers: src/optics/analysis, src/optics/analysis.ts, src/optics/perspective

## Files

| File | Role | Imports from | Imported by | Exports |
| --- | --- | --- | --- | --- |
| `aimedPupil.ts` | Aimed Pupil helper module | src/optics/trace (8), src/optics/analysis (3), src/optics/chromatic, src/optics/field, src/optics/math, +2 more | src/optics/analysis (9), src/optics/analysis.ts, src/optics/perspective | AIMED_PUPIL_RESIDUAL_TOLERANCE, AIMED_PUPIL_MAX_ITERATIONS, AIMED_PUPIL_POLISH_TOLERANCE, AimedPupilUnaimedReason, AimedPupilLaunchSurface, AimedPupilSampleInput, AimedObjectPlaneField, AimedBoundingSphereField, +22 more |
| `pupilAberration.ts` | Pupil Aberration helper module | src/optics/state (5), src/optics/trace (3), src/optics/analysis (2), src/optics/field (2), src/optics/prescription (2), +2 more | src/optics/analysis, src/optics/analysis.ts | PupilAberrationSample, PupilAberrationProfile, ExitPupilAberrationSample, ExitPupilAberrationProfile, PUPIL_ABERRATION_SAMPLE_COUNT, computePupilAberrationProfile, computeExitPupilAberrationProfile, BothPupilAberrationProfiles, +1 more |
| `stopLattice.ts` | Stop Lattice helper module | none | src/optics/analysis (2) | StopLatticeCell, stopLattice |
