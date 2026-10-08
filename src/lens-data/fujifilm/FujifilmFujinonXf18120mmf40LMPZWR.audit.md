# FUJIFILM FUJINON XF 18-120mm f/4 LM PZ WR — Audit Log

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Replaced the air-equivalent S28 spacing (24.8295380953 mm) with JP 2023-033114 A Example 1 Table 1 (PDF p. 50,
  rendered): D28 = 21.929 mm, then `rearPlates` PP 2.850 mm, nd 1.51633, νd 64.14, θgF 0.53531 (dPgF −0.00061),
  ED 29.50 / 29.70 (sd 14.85, the larger ED/2, so the plate never clips rays the patent passes), and 1.021 mm to the
  image plane. G5 is fixed, so D28 is a single value at every zoom/focus state. Glass S-BSL7 (exact 1.51633 / 64.14
  coordinate; `resolveCompatibleGlass` passes).
- Paraxial check against the previous data: EFL identical and defocus unchanged at both zoom stations and all three
  focus keyframes (worst |Δ| 1.8e-15 mm), since 21.929 + 2.850/1.51633 + 1.021 reproduces the old fold exactly. Physical
  track grows by 0.970 mm to 139.726 mm. The reconstructed focus keyframes were solved against the air-equivalent image
  plane, so their physical object-to-image distances are 0.970 mm longer (tele middle 1.196365 m); `closeFocusM` stays
  at the Fujifilm-quoted 0.6 m.

## 2026-10-08 - dPgF checked against the patent

- Reviewed local `patents/JP2023033114A.pdf` (JP 2023-033114 A). The patent defines no partial-dispersion deviation and
  no normal line of its own. Paragraph [0167] (PDF p. 39) defines only the absolute ratio θgF = (Ng − NF)/(NF − NC), and
  paragraph [0216] (PDF p. 49) says the θgF column of the basic lens data holds that ratio. The only line-like
  expressions are conditions (41), (45) and (49) (PDF pp. 39, 40 and 41), which bound the sum θ + 0.001625·ν directly
  (for example 0.645 < θL2 + 0.001625·νL2 < 0.66); none of them is stated as a deviation.
- Example 1 Table 1 (PDF p. 50, a table image; rendered at 200 and 300 dpi and read) prints absolute θgF to five
  decimals for every glass row, including the plane-parallel member PP.
- Each stored `dPgF` was recomputed as θgF − (0.6438 − 0.001682·νd) from the printed θgF and the element's stored νd.
  All fifteen elements and the `rearPlates` PP entry reproduce the stored number to the last stored digit, so every value
  is already on the engine's normal line. No `dPgF`, `apdNote` or comment changed in the data file, and the analysis
  sidecar needed no edit (its condition table already quotes the patent's own θ + 0.001625·ν sums: 0.654384 for L12,
  0.631778 for L22 and 0.630599 for L42).
- The catalog screen that flagged this file is a false alarm. The glass labels are coordinate classes, so the screen
  compared each stored value with the nearest catalog glass rather than with the patent's melt figure; for L11 the
  N-SF66 curve (PgF 0.6394) happens to sit nearer a 0.64833 − 0.0018·νd reading of the stored value (0.6401) than the
  patent's printed 0.63806. The patent decides, and it prints 0.63806.

| Element | νd | Source figure (Table 1 θgF, PDF p. 50) | Stored before | Stored after |
| --- | ---: | ---: | ---: | ---: |
| L11 | 20.89 | 0.63806 | 0.02939698 | 0.02939698 (unchanged) |
| L12 | 68.63 | 0.54286 | 0.01449566 | 0.01449566 (unchanged) |
| L13 | 50.30 | 0.55004 | -0.0091554 | -0.0091554 (unchanged) |
| L21 | 40.73 | 0.56940 | -0.00589214 | -0.00589214 (unchanged) |
| L22 | 50.30 | 0.55004 | -0.0091554 | -0.0091554 (unchanged) |
| L23 | 23.79 | 0.61771 | 0.01392478 | 0.01392478 (unchanged) |
| L24 | 40.78 | 0.56829 | -0.00691804 | -0.00691804 (unchanged) |
| L31 | 81.26 | 0.53689 | 0.02976932 | 0.02976932 (unchanged) |
| L32 | 35.25 | 0.58224 | -0.0022695 | -0.0022695 (unchanged) |
| L33 | 74.70 | 0.53936 | 0.0212054 | 0.0212054 (unchanged) |
| L41 | 25.26 | 0.61662 | 0.01530732 | 0.01530732 (unchanged) |
| L42 | 47.47 | 0.55346 | -0.01049546 | -0.01049546 (unchanged) |
| L51 | 59.46 | 0.54056 | -0.00322828 | -0.00322828 (unchanged) |
| L52 | 25.43 | 0.61417 | 0.01314326 | 0.01314326 (unchanged) |
| L53 | 48.85 | 0.56700 | 0.0053657 | 0.0053657 (unchanged) |
| PP (`rearPlates`) | 64.14 | 0.53531 | -0.00060652 | -0.00060652 (unchanged) |

- Left as stored: all sixteen values, because each equals the printed θgF minus the engine's line exactly. They were
  not re-rounded to six decimals.
- No element authors `nC`, `nF` or `ng`, and none uses `indexReference: "e"`, so neither special case applied.
