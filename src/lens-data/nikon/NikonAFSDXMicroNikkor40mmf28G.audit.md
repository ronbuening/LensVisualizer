# Nikon AF-S DX MICRO-NIKKOR 40mm f/2.8G Patent Audit

Patent: US 2011/0170195 A1, Example 1

## 2026-08-18 — Initial integration audit

- Reviewed the untracked local patent PDF `patents/US20110170195A1.pdf`; the infinity section of Figure 1 on PDF page 2 is the controlling optical section.
- Refined the inferred SDs to better reproduce the fuller rear half of G1 and the narrower G2/G3 outline in the patent figure.

| Surfaces | Before (mm) | After (mm) |
|---|---:|---:|
| 5 / 6 / 7 / 8 | 9.6 / 9.3 / 8.7 / 8.1 | 10.5 / 10.2 / 10.0 / 9.4 |
| 13 / 14A | 10.3 / 10.3 | 9.0 / 9.0 |
| 15 / 16 / 17 / 18 | 9.3 / 9.1 / 9.2 / 9.3 | 8.2 / 8.0 / 8.0 / 8.0 |

- Recomputed surface 14A at the new 9.0mm rim: sag `-1.580828mm`, reference-sphere sag `-1.650574mm`, and departure `+0.069746mm`.
- Relabeled L12, L13, and L23 to catalog-compatible HOYA `NBFD13`, `BACD4`, and `M-PCD4`. These provide checked dispersion curves while remaining explicitly vendor-unproven patent correlations.
- Normalized the display name to `NIKON AF-S DX MICRO-NIKKOR 40mm f/2.8G`.

## 2026-08-18 — Screenshot follow-up

- Rechecked the supplied infinity rendering against Figure 1. The revised G1/G2/G3 height progression follows the source; no further SD adjustment exceeded the audit threshold with sufficient visual confidence.
- Confirmed published close-focus travel: G1 moves `−26.8627mm` objectward, G2 moves `−24.4988mm` objectward with the stop, and G3 remains fixed.
- Added those focus/fixed roles to the group labels and completed curve coverage with FK5, F3, N-SK16, and J-LAF2 equivalents alongside the existing HOYA correlations.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Table 1 (PDF p. 27, printed p. 9) lists low-pass filter P1 as surfaces 19–20: d18 = 0.100 mm, t = 2.000 mm,
  nd = 1.51680, νd = 64.12, then Bf (printed 37.65, constant). Surface 18 now stores the physical 0.100 mm gap and
  `rearPlates` holds P1 as J-BK7A with `gapAfterMm` 37.65276, derived (not printed to that precision) from INF
  TL 86.85516 − Σd1–17 47.1024 − 2.100, which keeps the previous ACTL-normalized image plane.
- Paraxial check against the previous data: EFL identical; defocus changes by 0.000005 mm at INF/MID/CLD (rounding of
  2/1.5168 in the old fold). Physical track grows by 0.681 mm to 86.85516 mm, matching the patent TL.
