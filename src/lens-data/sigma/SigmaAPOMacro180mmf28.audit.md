# Audit Log - Sigma APO Macro 180mm F2.8 EX DG OS HSM

Patent: JP 2013-104994 A, Numerical Example 2

## 2026-06-23 - Semi-diameter raw-geometry audit

### SD corrections

| Surface | Before | After | Justification |
|---|---:|---:|---|
| S7 | 37.0 | 36.0 | Raw extended edge check showed L4 S7/S8 self-crossing by 0.440 mm at the larger authored endpoint. |
| S18 | 21.0 | 20.2 | Raw extended edge check showed L11 S18/S19 self-crossing by 0.675 mm at the larger authored endpoint. |

### Notes

- JP 2013-104994 A Example 2 does not publish a clear-aperture / effective-radius table.
- Temporary Sigma SD audit after the edits reported 0/27 Sigma files with raw SD/render issues.

## 2026-08-07 - Line-index ambiguity audit

- Rechecked Numerical Example 2's glass-index table in the ignored local `patents/JP2013104994A.pdf`.
- Relabeled L11 from the ambiguous `BK7 / S-BSL7` class to N-BK7 as a catalog equivalent, without asserting Sigma's
  production supplier. The patent gives nC/nF/ng = 1.51432/1.52237/1.52667; N-BK7 reproduces all three within
  1.5e-5 maximum error, while S-BSL7 differs by approximately 4.65e-4.
- The complete patent line indices remain the runtime source of truth and bypass catalog dispersion for this element.
