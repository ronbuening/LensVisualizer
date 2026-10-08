# Audit Log - Canon EF 8-15mm f/4L Fisheye USM

Patent: US 2012/0013996 A1, Numerical Example 1

## 2026-06-25 - Canon folder patent audit

### Phase 1 - Glass corrections

- Rechecked the local patent PDF `patents/US20120013996A1.pdf`, data file, and analysis sidecar.
- No glass label changes were needed. Class labels for HOYA FCD and OHARA/TAFD-equivalent high-index glasses remain intentional where the patent gives optical constants rather than trade names.
- High-index status remains documented through nd values and the glass labels for L1, L4-L7, L10, and L12.

### Phase 2 - Retained-information audit

- Confirmed the patent `Effective Diameter` column is present for Example 1. The stored SDs are half of the printed full diameters.
- Retained the existing close-focus reconstruction notes because the patent does not publish close-focus spacing tables for Example 1.

### Phase 3 - Spectral / metadata enrichment

- Retained patent APD metadata and structured `dPgF` values on L2, L3, and L13.
- No additional line-index values were present in the source table.

## 2026-10-08 - dPgF checked against the patent

- Reviewed local `patents/US20120013996A1.pdf`. Conditional expressions (5), (5A), (6) and (6A) on PDF page 15 (printed page 3, paragraphs [0047]-[0054]) define the deviation as θgF − (−0.001682·νd + 0.6438), with θgF = (Ng − NF)/(NF − NC). Claims 4 and 5 on PDF page 19 repeat it. That is the engine's own normal line, 0.6438 − 0.001682·νd, so the patent's deviation and the runtime `dPgF` are the same number.
- The patent prints no absolute θgF: the Table 1 surface data (PDF pages 16-17) carries only r, d, nd, νd and effective diameter. The only printed partial-dispersion figures are the Table 4 values for the First Embodiment on PDF page 18: condition (5) = 0.019 and condition (6) = 0.028.
- A screen that compares stored values with catalog curves flagged this file because the HOYA FCD515 curve for L2/L3 sits near a 0.64833 − 0.0018·νd reading of 0.019. That is a false alarm: the patent states its line, and the stored values already sit on it. No `dPgF`, `apdNote` or comment changed in the data file, and the analysis sidecar needed no edit.

| Element | νd | Source figure | Stored before | Stored after |
| --- | ---: | --- | ---: | ---: |
| L2 | 68.6 | Table 4 condition (5) = 0.019 against 0.6438 − 0.001682·νd; implied θgF 0.547415 | 0.019 | 0.019 (unchanged) |
| L3 | 68.6 | Same glass as L2 (nd 1.59282, νd 68.6); Table 4 condition (5) = 0.019; implied θgF 0.547415 | 0.019 | 0.019 (unchanged) |
| L13 | 81.5 | Table 4 condition (6) = 0.028 against 0.6438 − 0.001682·νd; implied θgF 0.534717 | 0.028 | 0.028 (unchanged) |

- Left as stored: all three values, because each equals the patent deviation on the engine's line exactly. The patent rounds to three decimals, so the stored figures carry that precision and were not extended.
- Left alone: the eleven elements without `dPgF`. The patent prints no partial dispersion for them and none was added.
- Condition (5) covers "one or more negative lenses" behind the front meniscus in the first unit and Table 4 gives one figure. L2 and L3 share nd 1.59282 / νd 68.6 in Table 1, so both carry it. Condition (6) is assigned to L13 (nd 1.49700, νd 81.5). The patent's own numbers support that: the Second Embodiment uses the same nd/νd pair for its first-unit negative lens (Table 2, surfaces 5-6, PDF page 17) and Table 4 gives that embodiment's condition (5) as the same 0.028.
