# Audit Log - Sigma 85mm F1.4 DG DN | Art

Patent: JP 2021-85935, Example 1

## 2026-05-20 - Glass relabel pass

- Opened the data, analysis, and local patent PDF `patents/JP2021085935A.pdf`; local text confirms the repeated nd=1.85451, vd=25.15 rows at surfaces 8, 15, and 18.
- Updated all three repeated anomalous-flint annotations to `S-NBH56 (OHARA)`, the closest coefficient-backed catalog match in the local catalog.
- The lens still has low Sellmeier coverage because many Sigma patent glasses remain generic SLD/proprietary class annotations outside this relabel batch.

## 2026-06-23 - Semi-diameter raw-geometry audit

### SD corrections

| Surface | Before | After | Justification |
|---|---:|---:|---|
| S7 | 26.4 | 25.6 | Raw extended edge check showed D1 L4 S7/S8 self-crossing by 0.511 mm at the larger authored endpoint. |
| S16 | 18.9 | 15.9 | Raw extended edge check showed D2 L9 S16/S17 self-crossing by 2.525 mm at the larger authored endpoint. |

### Notes

- JP 2021-85935 A Example 1 does not publish surface clear apertures.
- The S16 reduction is intentionally larger than a cosmetic trim; it removes the visible overhang/intersection in the L8/L9 cemented pair while preserving a small positive extended edge margin.
- Temporary Sigma SD audit after the edits reported 0/27 Sigma files with raw SD/render issues.
