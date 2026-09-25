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

## 2026-09-24 — Semi-diameters raised to the traced format corner

Table 29 (PDF p.53) prints 2ω = 110.0° / 87.6° / 74.6° at the wide / middle / telephoto ends, and the traced chief ray
lands those angles on the 27.39 mm 44×33 corner (55.06° / 43.89° / 37.36°), so the design covers the corner at every
station. The estimated rims clipped the real chief ray (solved through the stop centre) early: surface 1 from 44.6° at
the wide end, and surface 25 from 36.4° / 29.6° at the middle and telephoto ends (surface 24 also clipped the corner ray
there), leaving the analysis field at 71–76% of the corner. With surface 1 opened the wide-corner chief ray solves and
needs surface 1 ≥ 21.44, 2 ≥ 17.28, 3A ≥ 16.92 and 4A ≥ 14.12 mm; surfaces 24 and 25 need 20.47 and 21.23 mm, both at
the telephoto corner. Values are floor + ~0.5 mm except where the validator stops them: surface 3A is capped at 17.4 mm
by the 2→3A gap (combined sag exceeds 90% of the 6.35 mm gap at 17.5 mm) and 4A at 14.3 mm by the 4A→5 gap (from about
14.33 mm). L11's rear surface 2 (R 21.19) was not scaled with surface 1, because the scaled 20.7 mm would put its rim
past 77°. The patent's effective diameters for surfaces 8 and 23 are unchanged. FIG. 25 (PDF p.26, 9.19 px/mm at 200 dpi
from the S1–S25 span) draws L11 to 23.0 mm with surface 2's concave face ending near 18.2, L12 to 18.1 with 4A ending
near 14.9, and L51 to 23.7 — all above these values — but it overstates the two listed diameters by 6–21%, so it served
only as an upper bound.

| Surface | Before | After | Justification |
|---|---|---|---|
| 1 | 17.0 | 22.0 | wide-corner chief ray 21.44 mm + clearance |
| 2 | 16.0 | 17.8 | wide-corner chief ray 17.28 mm + clearance; not scaled with surface 1 (rim past 77°) |
| 3A | 15.0 | 17.4 | wide-corner chief ray 16.92 mm; 2→3A gap-intrusion limit at 17.5 mm |
| 4A | 14.0 | 14.3 | wide-corner chief ray 14.12 mm; 4A→5 gap-intrusion limit from ~14.33 mm |
| 24 | 15.5 | 21.0 | telephoto-corner chief ray 20.47 mm + clearance |
| 25 | 16.0 | 21.8 | telephoto-corner chief ray 21.23 mm + clearance |

The validator accepts the new values, `--scan` shows no turnover on 3A or 4A to 1.2× the new heights, the traced edge
reaches 27.39 mm with every rim clear at all three stations, and the image-circle floor reports nothing undersized. The
analysis departure table now quotes 3A at 17.4 mm (+882.139 µm) and 4A at 14.3 mm (−67.281 µm).
