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

## 2026-08-18 - Example 1 coefficient backfill

- Visually rechecked Example 1 on rendered pages 12–13 of `patents/JP2021085935A.pdf`. The table confirms all
  fifteen stored d-line index/Abbe coordinates and the `θgF = 0.6103` value for L5.
- Assigned existing coefficient-backed catalog equivalents to every element: FDS18, FCD705, FCD515, NBFD25,
  J-PSKH4, TAFD55, TAFD65, E-FD15, and M-LAF81. These are optical-coordinate assignments, not claims about
  Sigma's production suppliers.
- Replaced the prior S-NBH56 approximation for the repeated `1.85451 / 25.15` glass with NBFD25. NBFD25 matches
  the patent coordinate within catalog precision and reproduces L5's patent-listed `θgF`; the authored patent
  `dPgF` remains authoritative.
- No geometry, focus, aperture, or patent `nd`/`νd` value changed.

## 2026-10-08 - dPgF moved to the engine's normal line

- Patent formula: condition (8), `θgF_LN − (0.648285 − 0.00180123 × Vd_LN) < 0.010`, printed in claim 4 (PDF page 2),
  ¶0060 (PDF page 9) and the footnote of the condition table (PDF page 27; Example 1 value printed as 0.007). The
  patent's line is therefore `0.648285 − 0.00180123 × νd`, not the engine's `0.6438 − 0.001682 × νd`.
- Numerical Example 1 (PDF pages 12–13, re-read on the rendered page) prints an absolute `θgF` column with one entry
  only: surface 8 (L5) `θgF = 0.6103`. No deviation is tabulated per element.
- The stored `dPgF = 0.0073` was the patent's own deviation (0.6103 − 0.602984 = +0.007316) copied directly. It is
  now the patent `θgF` minus the engine line: 0.6103 − (0.6438 − 0.001682 × 25.15) = +0.008802.

| Element | νd | Source figure | Stored before | Stored after |
|---|---:|---|---:|---:|
| L5 | 25.15 | Patent `θgF = 0.6103` (Example 1, surface 8, PDF page 12); patent deviation +0.007316 | 0.0073 | 0.008802 |

- L5 `apdNote` now quotes the patent `θgF`, the patent's own deviation and the runtime value; a header note in the
  data file names both lines. The analysis keeps the patent's `+0.0073` wherever it evaluates condition (8) and now
  states the stored value separately.
- Left: nothing. No other element carries `dPgF`, none was added (L8 and L10 share the L5 glass but the patent prints
  no `θgF` on their rows), and no element authors `nC`/`nF`/`ng`. No `nd`, `νd`, glass label, `apd` tag or surface
  changed.
