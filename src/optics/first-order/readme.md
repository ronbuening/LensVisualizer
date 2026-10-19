# src/optics/first-order

This folder first-order optical calculations for cardinals, pupils, f-number, focus breathing, and system matrices.

Generated `readme.md` and `improvementsuggestions.md` files are intentionally omitted from the per-file inventory so this document stays focused on source relationships.

## Relationship Diagram

```mermaid
flowchart LR
  subgraph n_src_optics_first_order["src/optics/first-order"]
    n_src_optics_first_order_src_optics_first_order_cardinals_ts["cardinals.ts"]
    n_src_optics_first_order_src_optics_first_order_fNumber_ts["fNumber.ts"]
    n_src_optics_first_order_src_optics_first_order_focusBreathing_ts["focusBreathing.ts"]
    n_src_optics_first_order_src_optics_first_order_lensConstants_ts["lensConstants.ts"]
    n_src_optics_first_order_src_optics_first_order_pupils_ts["pupils.ts"]
    n_src_optics_first_order_src_optics_first_order_systemMatrix_ts["systemMatrix.ts"]
    n_src_optics_first_order_src_optics_first_order_thickLens_ts["thickLens.ts"]
  end
  n_external_src_optics_math["src/optics/math"]
  n_external_src_optics_trace["src/optics/trace"]
  n_external_src_optics_focusDistance_ts["src/optics/focusDistance.ts"]
  n_external_src_optics_prescription["src/optics/prescription"]
  n_external_src_optics_state["src/optics/state"]
  n_external_src_optics_field["src/optics/field"]
  n_external_src_optics_geometry["src/optics/geometry"]
  n_external_src_optics_types_ts["src/optics/types.ts"]
  n_external_src_types["src/types"]
  n_external_src_utils_featureFlags_ts["src/utils/featureFlags.ts"]
  n_src_optics_first_order_src_optics_first_order_lensConstants_ts --> |3| n_external_src_optics_math
  n_src_optics_first_order_src_optics_first_order_lensConstants_ts --> |3| n_external_src_optics_trace
  n_src_optics_first_order_src_optics_first_order_fNumber_ts --> |2| n_external_src_optics_focusDistance_ts
  n_src_optics_first_order_src_optics_first_order_focusBreathing_ts --> |2| n_external_src_optics_prescription
  n_src_optics_first_order_src_optics_first_order_lensConstants_ts --> |2| n_external_src_optics_prescription
  n_src_optics_first_order_src_optics_first_order_focusBreathing_ts --> |2| n_external_src_optics_state
  n_src_optics_first_order_src_optics_first_order_lensConstants_ts --> |2| n_external_src_optics_state
  n_src_optics_first_order_src_optics_first_order_cardinals_ts --> |2| n_external_src_optics_trace
  n_src_optics_first_order_src_optics_first_order_lensConstants_ts --> n_external_src_optics_field
  n_src_optics_first_order_src_optics_first_order_focusBreathing_ts --> n_external_src_optics_focusDistance_ts
  n_src_optics_first_order_src_optics_first_order_lensConstants_ts --> n_external_src_optics_geometry
  n_src_optics_first_order_src_optics_first_order_thickLens_ts --> n_external_src_optics_geometry
  n_src_optics_first_order_src_optics_first_order_cardinals_ts --> n_external_src_optics_math
  n_src_optics_first_order_src_optics_first_order_focusBreathing_ts --> n_external_src_optics_math
  n_src_optics_first_order_src_optics_first_order_pupils_ts --> n_external_src_optics_math
  n_src_optics_first_order_src_optics_first_order_systemMatrix_ts --> n_external_src_optics_math
  n_src_optics_first_order_src_optics_first_order_fNumber_ts --> n_external_src_optics_state
  n_src_optics_first_order_src_optics_first_order_cardinals_ts --> n_external_src_optics_types_ts
  n_src_optics_first_order_src_optics_first_order_focusBreathing_ts --> n_external_src_optics_types_ts
  n_src_optics_first_order_src_optics_first_order_lensConstants_ts --> n_external_src_optics_types_ts
  n_src_optics_first_order_src_optics_first_order_pupils_ts --> n_external_src_optics_types_ts
  n_src_optics_first_order_src_optics_first_order_systemMatrix_ts --> n_external_src_optics_types_ts
  n_src_optics_first_order_src_optics_first_order_fNumber_ts --> n_external_src_types
  n_src_optics_first_order_src_optics_first_order_focusBreathing_ts --> n_external_src_types
  n_src_optics_first_order_src_optics_first_order_lensConstants_ts --> n_external_src_types
  n_src_optics_first_order_src_optics_first_order_thickLens_ts --> n_external_src_types
  n_src_optics_first_order_src_optics_first_order_lensConstants_ts --> n_external_src_utils_featureFlags_ts
  n_src_optics_first_order_src_optics_first_order_fNumber_ts --> n_src_optics_first_order_src_optics_first_order_focusBreathing_ts
  n_src_optics_first_order_src_optics_first_order_cardinals_ts --> n_src_optics_first_order_src_optics_first_order_systemMatrix_ts
```

## Directory Overview

- Direct source files: 7
- Direct subfolders: 0
- Main outbound areas: src/optics/math (7), src/optics/state (5), src/optics/trace (5), src/optics/types.ts (5), src/optics/prescription (4), src/types (4), src/optics/focusDistance.ts (3), same folder (2), +3 more
- External consumers: src/optics/analysis, src/optics/buildLens.ts, src/optics/compat.ts, src/optics/layout.ts, src/optics/perspective, src/optics/prescription

## Files

| File | Role | Imports from | Imported by | Exports |
| --- | --- | --- | --- | --- |
| `cardinals.ts` | Cardinals helper module | src/optics/trace (2), same folder, src/optics/math, src/optics/types.ts | src/optics/analysis (2), src/optics/compat.ts | CardinalPoint2, CardinalDistance2, CardinalElements2, computeCardinalElements2, buildCardinalElementsFromMatrix2, computeCardinalElementsWithLayout |
| `fNumber.ts` | F Number helper module | src/optics/focusDistance.ts (2), same folder, src/optics/state, src/types | src/optics/compat.ts, src/optics/layout.ts | effectiveFNumber2 |
| `focusBreathing.ts` | Focus Breathing helper module | src/optics/prescription (2), src/optics/state (2), src/optics/focusDistance.ts, src/optics/math, src/optics/types.ts, +1 more | same folder, src/optics/analysis, src/optics/compat.ts, src/optics/layout.ts, src/optics/perspective | eflAtFocus2, eflAtPreparedState |
| `lensConstants.ts` | Lens Constants helper module | src/optics/math (3), src/optics/trace (3), src/optics/prescription (2), src/optics/state (2), src/optics/field, +4 more | src/optics/buildLens.ts, src/optics/prescription | computeLensConstants, paraxialTrace, realTraceToStop |
| `pupils.ts` | Pupils helper module | src/optics/math, src/optics/types.ts | src/optics/perspective (3) | FirstOrderPupilState, entrancePupilFromStop2, paraxialPupilGeometry2 |
| `systemMatrix.ts` | System Matrix helper module | src/optics/math, src/optics/types.ts | same folder | FirstOrderSystemMatrix, computeSystemMatrix2 |
| `thickLens.ts` | Thick Lens helper module | src/optics/geometry, src/types | none | thickLensFocalLength, computeElementFocalLength |
