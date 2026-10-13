# Audit Log - Sigma 60mm F2.8 DN | Art

Patent: JP 2014-145954 A, Numerical Example 1

## 2026-06-23 - Semi-diameter raw-geometry audit

### SD correction

| Surface | Before | After | Justification |
|---|---:|---:|---|
| S3 | 13.0 | 12.75 | Raw extended edge check showed L2 S3/S4 self-crossing by 0.060 mm at the larger authored endpoint. |

### Notes

- JP 2014-145954 A Example 1 does not publish a clear-aperture / effective-radius table.
- Temporary Sigma SD audit after the edit reported 0/27 Sigma files with raw SD/render issues.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Replaced the air-equivalent surface-15 gap (25.5204 mm) with the patent's physical rear stack (Numerical Example 1,
  pp. 8–9 text layer): d15 = 23.0700 mm, filter F (surfaces 16–17) 2.2000 mm, nd 1.51680, νd 64.20, then
  BF 1.0000 mm (the patent's 800 mm BF of 1.0001 mm is within rounding; one `gapAfterMm` kept). Glass label
  BSC7 (HOYA), matching the file's HOYA element labels and the exact 517/642 coordinate.
- Paraxial check against the previous data: EFL identical and defocus unchanged at all three focus keyframes (the old
  fold was stored unrounded). Physical track grows by 0.750 mm, t(1 − 1/n), and now matches the patent's 74.02 mm.
