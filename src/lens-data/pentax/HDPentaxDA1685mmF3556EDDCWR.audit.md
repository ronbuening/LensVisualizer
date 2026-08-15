# Audit Log — PENTAX HD DA 16-85mm f/3.5-5.6 ED DC WR

Patent: JP 2016-114800 A, Numerical Example 1, Figure 1 and Tables 1–4

## 2026-08-14 — Patent-figure, metadata, and glass review

### Semi-diameters

| Element / surfaces | Before | After | Evidence |
|---|---:|---:|---|
| L13, 4–5 | 28.0 mm | 24.0 mm | Figure 1 narrows the third front element relative to L11/L12; the previous equal-height front block hid that taper. |
| Hybrid L21, 6A–8 | 9.75 mm | 11.0 mm | Figure 1 draws L21 larger than the following G2 elements. The figure suggests a slightly larger rim, but surface 8's 12.493 mm radius makes 11.0 mm the validator-safe limit. |
| L41, 24–25A | 12.0 mm | 10.0 mm | The rear group begins smaller than the previous uniform envelope. |
| L42/L43, 26–28 | 12.0 mm | 10.5 mm | The central rear pair follows the gradual Figure 1 flare rather than a constant 12 mm block. |
| L44, 29–30 | 12.75 mm | 11.0 mm | The final element remains the largest member of G4 without exceeding the figure silhouette. |

All revised asphere diagnostics were recomputed at the new modeled apertures. The stop and prescription dimensions remain unchanged.

### Labels and glass

- Romanized inventor 能村 洋一 as Yoichi Nomura and normalized the assignee spelling.
- Corrected the displayed model name to the repository's `PENTAX HD DA` convention.
- All 16 physical glass elements retain coordinate-compatible Sellmeier coverage. The explicitly synthetic L21 resin remains unmatched because the patent does not identify its chemistry.

### Verification

- `audit:surface` accepted the complete revised SD set.
- `audit:image-circle` reported zero undersized surfaces.
