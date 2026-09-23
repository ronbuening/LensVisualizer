# Audit Log — FUJIFILM FUJINON GF 20-35mm f/4 R WR

Patent: US 2022/0236544 A1, Example 10 (Tables 28-30)

## 2026-05-19 — Six-digit Sellmeier source recheck

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L22 / S10-S11 | `glass` | `Unmatched (light dense flint, 689/312; no exact public catalog match confirmed)` | `E-FD8 (HOYA, 689312 code)` | Patent Table 28 row 10 gives nd=1.68863, vd=31.20, θgF=0.60109. HOYA's cross-reference lists E-FD8 and M-FD80 at code 689312, and the project already has coefficient-backed E-FD8; the 0.00030 nd offset is small enough to use as a code-family Sellmeier source. |

### Notes

- No changes were made to L34 / 496813; it remains an unmatched ED fluorophosphate near the FCD1/S-FPL51 family.
- Updated [FujifilmGF2035mmf4.analysis.md](FujifilmGF2035mmf4.analysis.md) to distinguish the E-FD8 code-family assignment from a patent-confirmed exact melt.
- Batch verification is recorded in [six-digit-glass-codes-missing-sellmeier-reviewed.md](../../../agent_docs/generated/six-digit-glass-codes-missing-sellmeier-reviewed.md).

## 2026-08-18 — L34 curve and Table 28 partial-dispersion recovery

- Visually rechecked `patents/US20220236544A1.pdf`, PDF page 53, Table 28. L34 remains `nd = 1.49648`, `νd = 81.30`; the table also publishes θgF for all fourteen glass rows.
- HOYA MC-FCD1-M20 is a close coefficient-backed ED match (`Δnd = +0.000419`, `Δνd = +0.21`). Relabeled L34 as its catalog equivalent with the production supplier unspecified.
- Converted every Table 28 θgF value to the project's `dPgF` convention and stored all fourteen patent-authored values. No prescription geometry changed.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Replaced the air-equivalent surface-25 gap (21.2375 mm) with Table 28's physical rear stack (PDF p. 53, rendered and
  read): d25 = 17.0778 mm, then optical member PP 3.2000 mm, nd 1.51680, νd 64.20, θgF 0.53430 (stored as
  dPgF −0.00152), and 2.0500 mm to the image. Surface 25 is not a zoom/focus variable gap, so no `var` rows changed.
- Glass label N-BK7 (exact nd, Δνd −0.03; resolves as catalog-compatible); the patent names no vendor.
- Paraxial check against the previous data: EFL and defocus identical at all three zoom stations and both focus keyframes
  (worst difference 5e-11 mm, since the old fold was stored unrounded). Physical track grows by 1.090 mm (3.20 × (1 −
  1/1.5168)).
