# src/optics/analysis/aberration

This folder request-based spherical and best-focus analysis with shared aberration leaves.

Generated `readme.md` and `improvementsuggestions.md` files are intentionally omitted from the per-file inventory so this document stays focused on source relationships.

## Relationship Diagram

```mermaid
flowchart LR
  subgraph n_src_optics_analysis_aberration["src/optics/analysis/aberration"]
    n_src_optics_analysis_aberration_src_optics_analysis_aberration_bestFocus_ts["bestFocus.ts"]
    n_src_optics_analysis_aberration_src_optics_analysis_aberration_coma_ts["coma.ts"]
    n_src_optics_analysis_aberration_src_optics_analysis_aberration_fieldCurvature_ts["fieldCurvature.ts"]
    n_src_optics_analysis_aberration_src_optics_analysis_aberration_offAxis_ts["offAxis.ts"]
    n_src_optics_analysis_aberration_src_optics_analysis_aberration_radialProfile_ts["radialProfile.ts"]
    n_src_optics_analysis_aberration_src_optics_analysis_aberration_shared_ts["shared.ts"]
    n_src_optics_analysis_aberration_src_optics_analysis_aberration_spherical_ts["spherical.ts"]
    n_src_optics_analysis_aberration_src_optics_analysis_aberration_types_ts["types.ts"]
  end
  n_external_src_optics_trace["src/optics/trace"]
  n_external_src_optics_analysis["src/optics/analysis"]
  n_external_src_optics_field["src/optics/field"]
  n_external_src_optics_state["src/optics/state"]
  n_external_src_optics_chromatic["src/optics/chromatic"]
  n_external_src_optics_prescription["src/optics/prescription"]
  n_external_src_types["src/types"]
  n_src_optics_analysis_aberration_src_optics_analysis_aberration_offAxis_ts --> |5| n_external_src_optics_trace
  n_src_optics_analysis_aberration_src_optics_analysis_aberration_coma_ts --> |4| n_external_src_optics_analysis
  n_src_optics_analysis_aberration_src_optics_analysis_aberration_fieldCurvature_ts --> |3| n_external_src_optics_analysis
  n_src_optics_analysis_aberration_src_optics_analysis_aberration_offAxis_ts --> |3| n_external_src_optics_field
  n_src_optics_analysis_aberration_src_optics_analysis_aberration_offAxis_ts --> |3| n_external_src_optics_state
  n_src_optics_analysis_aberration_src_optics_analysis_aberration_spherical_ts --> |3| n_src_optics_analysis_aberration_src_optics_analysis_aberration_types_ts
  n_src_optics_analysis_aberration_src_optics_analysis_aberration_offAxis_ts --> |2| n_external_src_optics_analysis
  n_src_optics_analysis_aberration_src_optics_analysis_aberration_spherical_ts --> |2| n_external_src_optics_analysis
  n_src_optics_analysis_aberration_src_optics_analysis_aberration_fieldCurvature_ts --> |2| n_external_src_optics_state
  n_src_optics_analysis_aberration_src_optics_analysis_aberration_spherical_ts --> |2| n_external_src_optics_state
  n_src_optics_analysis_aberration_src_optics_analysis_aberration_shared_ts --> |2| n_external_src_optics_trace
  n_src_optics_analysis_aberration_src_optics_analysis_aberration_coma_ts --> |2| n_src_optics_analysis_aberration_src_optics_analysis_aberration_offAxis_ts
  n_src_optics_analysis_aberration_src_optics_analysis_aberration_fieldCurvature_ts --> |2| n_src_optics_analysis_aberration_src_optics_analysis_aberration_offAxis_ts
  n_src_optics_analysis_aberration_src_optics_analysis_aberration_spherical_ts --> |2| n_src_optics_analysis_aberration_src_optics_analysis_aberration_offAxis_ts
  n_src_optics_analysis_aberration_src_optics_analysis_aberration_bestFocus_ts --> |2| n_src_optics_analysis_aberration_src_optics_analysis_aberration_shared_ts
  n_src_optics_analysis_aberration_src_optics_analysis_aberration_fieldCurvature_ts --> |2| n_src_optics_analysis_aberration_src_optics_analysis_aberration_shared_ts
  n_src_optics_analysis_aberration_src_optics_analysis_aberration_offAxis_ts --> |2| n_src_optics_analysis_aberration_src_optics_analysis_aberration_shared_ts
  n_src_optics_analysis_aberration_src_optics_analysis_aberration_coma_ts --> |2| n_src_optics_analysis_aberration_src_optics_analysis_aberration_types_ts
  n_src_optics_analysis_aberration_src_optics_analysis_aberration_fieldCurvature_ts --> |2| n_src_optics_analysis_aberration_src_optics_analysis_aberration_types_ts
  n_src_optics_analysis_aberration_src_optics_analysis_aberration_radialProfile_ts --> |2| n_src_optics_analysis_aberration_src_optics_analysis_aberration_types_ts
  n_src_optics_analysis_aberration_src_optics_analysis_aberration_bestFocus_ts --> n_external_src_optics_analysis
  n_src_optics_analysis_aberration_src_optics_analysis_aberration_shared_ts --> n_external_src_optics_analysis
  n_src_optics_analysis_aberration_src_optics_analysis_aberration_types_ts --> n_external_src_optics_analysis
  n_src_optics_analysis_aberration_src_optics_analysis_aberration_fieldCurvature_ts --> n_external_src_optics_chromatic
  n_src_optics_analysis_aberration_src_optics_analysis_aberration_coma_ts --> n_external_src_optics_field
  n_src_optics_analysis_aberration_src_optics_analysis_aberration_fieldCurvature_ts --> n_external_src_optics_field
  n_src_optics_analysis_aberration_src_optics_analysis_aberration_bestFocus_ts --> n_external_src_optics_prescription
  n_src_optics_analysis_aberration_src_optics_analysis_aberration_coma_ts --> n_external_src_optics_prescription
  n_src_optics_analysis_aberration_src_optics_analysis_aberration_fieldCurvature_ts --> n_external_src_optics_prescription
  n_src_optics_analysis_aberration_src_optics_analysis_aberration_spherical_ts --> n_external_src_optics_prescription
  n_src_optics_analysis_aberration_src_optics_analysis_aberration_bestFocus_ts --> n_external_src_optics_state
  n_src_optics_analysis_aberration_src_optics_analysis_aberration_coma_ts --> n_external_src_optics_state
  n_src_optics_analysis_aberration_src_optics_analysis_aberration_bestFocus_ts --> n_external_src_optics_trace
  n_src_optics_analysis_aberration_src_optics_analysis_aberration_fieldCurvature_ts --> n_external_src_optics_trace
  n_src_optics_analysis_aberration_src_optics_analysis_aberration_spherical_ts --> n_external_src_optics_trace
  n_src_optics_analysis_aberration_src_optics_analysis_aberration_bestFocus_ts --> n_external_src_types
  n_src_optics_analysis_aberration_truncated["additional relationships omitted"]
```

## Directory Overview

- Direct source files: 8
- Direct subfolders: 0
- Main outbound areas: src/optics/analysis (37), src/optics/trace (10), src/optics/state (9), src/types (6), src/optics/field (5), src/optics/prescription (4), src/optics/chromatic
- External consumers: src/optics/analysis, src/optics/analysis.ts, src/optics/perspective

## Files

| File | Role | Imports from | Imported by | Exports |
| --- | --- | --- | --- | --- |
| `bestFocus.ts` | Best Focus helper module | src/optics/analysis (3), src/optics/prescription, src/optics/state, src/optics/trace, src/types | src/optics/analysis (2), src/optics/analysis.ts | computeImagePlaneZAtFocus, computeBestFocusZFromLayout, computeBestFocusZ |
| `coma.ts` | Coma helper module | src/optics/analysis (8), src/optics/field, src/optics/prescription, src/optics/state, src/types | src/optics/analysis, src/optics/analysis.ts | computeMeridionalComa, computeComaPreview, computeSagittalComa, computeComaPointCloudPreview, computeComaAnalysis |
| `fieldCurvature.ts` | Field Curvature helper module | src/optics/analysis (9), src/optics/state (2), src/optics/chromatic, src/optics/field, src/optics/prescription, +2 more | src/optics/analysis, src/optics/analysis.ts | FieldCurvatureBundleResult, computeFieldCurvatureBundle, computeFieldCurvature, ChromaticChannelSpan, ChromaticFieldFocusFieldSummary, ChromaticFieldFocusSummary, summarizeChromaticFieldFocus |
| `offAxis.ts` | Off Axis helper module | src/optics/trace (5), src/optics/analysis (4), src/optics/field (3), src/optics/state (3), src/types | src/optics/analysis (6), src/optics/analysis.ts | OffAxisFanOrientation, OffAxisDirection, OffAxisFieldGeometry, OffAxisVectorFieldGeometry, ProjectionAwareOffAxisFieldGeometry, OffAxisChiefRaySample, OffAxisTracedSample, OffAxisBundle, +10 more |
| `radialProfile.ts` | Radial Profile helper module | src/optics/analysis (2) | src/optics/analysis (2), src/optics/analysis.ts, src/optics/perspective | emptyRadialProfile, buildBokehRadialProfile, classifyBokehBrightnessCharacter |
| `shared.ts` | Shared helper module | src/optics/trace (2), src/optics/analysis, src/types | src/optics/analysis (4) | MARGINAL_FRACS, PROFILE_FRACS, SymmetricRealSample, TransverseFocusHit, RealRayHit, axialIntercept, imagePlaneIntercept, meridionalImagePlaneCoordinate, +9 more |
| `spherical.ts` | Spherical helper module | src/optics/analysis (9), src/optics/state (2), src/optics/prescription, src/optics/trace | src/optics/analysis, src/optics/analysis.ts | computeSphericalAberration, computeSAProfile, computeSphericalAberrationBlurCharacter |
| `types.ts` | Shared TypeScript types | src/optics/analysis, src/types | src/optics/analysis (5), src/optics/perspective (2), src/optics/analysis.ts | SAProfilePoint, SphericalAberrationBlurCharacterSample, SphericalAberrationBlurCharacterResult, SphericalAberrationResult, MeridionalComaSample, MeridionalComaResult, SagittalComaSample, SagittalComaResult, +34 more |
