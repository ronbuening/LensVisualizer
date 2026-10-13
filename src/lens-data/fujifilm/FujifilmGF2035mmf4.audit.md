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

## 2026-10-08 - dPgF checked against the patent

- Reviewed local `patents/US20220236544A1.pdf` (57 pages). ¶[0034] on PDF page 31 defines the partial dispersion ratio
  as θgF = (Ng − NF)/(NF − NC). The patent's own deviation is conditional expression (18), θMp + 0.0018 × νMp − 0.64833,
  i.e. measured against the line 0.64833 − 0.0018·νd: ¶[0090] on PDF page 35 (printed page 7, where the body text sets
  the parentheses as "(θMp+0.0018)×(νMp−0.64833)") and the expression rows of Tables 31–33 on PDF pages 54–55. Table 33
  (PDF page 55, printed page 27) prints 0.037 for Example 10, which the νd 81.61 / θgF 0.53887 middle-group glass
  reproduces (0.53887 + 0.0018 × 81.61 − 0.64833 = 0.03744).
- Table 28 (Example 10, PDF page 53, printed page 25) prints an absolute θgF for every glass row. The digits below were
  read from the rendered page and agree with the text layer.
- Every stored `dPgF` equals the Table 28 θgF minus the engine's line 0.6438 − 0.001682·νd, to within 0.000005 (the
  five-decimal rounding of the stored figure). None is the patent's own deviation. No `dPgF`, `apdNote` or comment
  changed in the data file, and the analysis sidecar needed no edit: its statement that Table 28's θgF values were
  converted to the project's `dPgF` convention is correct. The rear plate PP (row 26, νd 64.20, θgF 0.53430) is likewise
  already on the engine's line (−0.001516 against the stored −0.00152).
- A screen that compares stored values with catalog curves flagged this file. That is a false alarm. Table 28's θgF
  differs from the catalog curve of the labelled glass on several rows: S-NPH3 0.65862 against 0.6599 (L11), S-TIH53
  0.61771 against 0.6205 (L14), E-FD8 0.60109 against 0.5990 (L22), N-FK5 0.52933 against 0.5290 (L31), FCD1 0.53887
  against 0.5377 (L33, L42), MC-FCD1-M20 0.53743 against 0.5360 (L34) and N-LASF46B 0.59481 against 0.5956 (L41). The
  stored values follow the patent's printed figures, not the catalog curves, so a mismatch against the catalog says
  nothing about which line they are on.
- Left: nothing. All fourteen elements carry a patent-printed θgF, none uses `indexReference: "e"`, and none authors
  nC/nF/ng.

| Element | νd | Source figure (Table 28, PDF page 53) | Stored before | Stored after |
| --- | ---: | --- | ---: | ---: |
| L11 | 17.47 | Row 1: θgF 0.65862; minus the engine line = +0.044205 | 0.0442 | 0.0442 (unchanged) |
| L12 | 59.46 | Row 3: θgF 0.54056; minus the engine line = −0.003228 | −0.00323 | −0.00323 (unchanged) |
| L13 | 81.60 | Row 5: θgF 0.53774; minus the engine line = +0.031191 | 0.03119 | 0.03119 (unchanged) |
| L14 | 23.79 | Row 6: θgF 0.61771; minus the engine line = +0.013925 | 0.01392 | 0.01392 (unchanged) |
| L21 | 35.25 | Row 8: θgF 0.58224; minus the engine line = −0.002270 | −0.00227 | −0.00227 (unchanged) |
| L22 | 31.20 | Row 10: θgF 0.60109; minus the engine line = +0.009768 | 0.00977 | 0.00977 (unchanged) |
| L31 | 70.44 | Row 13: θgF 0.52933; minus the engine line = +0.004010 | 0.00401 | 0.00401 (unchanged) |
| L32 | 47.71 | Row 14: θgF 0.55566; minus the engine line = −0.007892 | −0.00789 | −0.00789 (unchanged) |
| L33 | 81.61 | Row 15: θgF 0.53887; minus the engine line = +0.032338 | 0.03234 | 0.03234 (unchanged) |
| L34 | 81.30 | Row 17: θgF 0.53743; minus the engine line = +0.030377 | 0.03038 | 0.03038 (unchanged) |
| L41 | 31.31 | Row 19: θgF 0.59481; minus the engine line = +0.003673 | 0.00367 | 0.00367 (unchanged) |
| L42 | 81.61 | Row 20: θgF 0.53887; minus the engine line = +0.032338 | 0.03234 | 0.03234 (unchanged) |
| L43 | 53.20 | Row 22: θgF 0.54661; minus the engine line = −0.007708 | −0.00771 | −0.00771 (unchanged) |
| L51 | 40.73 | Row 24: θgF 0.56825; minus the engine line = −0.007042 | −0.00704 | −0.00704 (unchanged) |
