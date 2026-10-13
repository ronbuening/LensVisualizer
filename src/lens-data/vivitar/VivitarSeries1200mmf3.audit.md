# Audit Log — Vivitar Series 1 200mm f/3 VMC

Patent: US 3,942,876, Example 4 / Table IV / Fig. 5

## 2026-07-18 — S-PHM51 catalog disambiguation

- Removed the `S-PHM51 class` suffix from L1. The newly cataloged OHARA row is code 617628 and does not match the patent's 569631 PSK2 coordinates.
- Retained the explicit `569631 — PSK2 phosphate crown (Schott)` identification and removed the false S-PHM51 equivalence from the analysis.

## 2026-06-23 — Vivitar folder patent audit

### Phase 1 — Glass reconciliation

- Reviewed local patent file `patents/US3942876.pdf` against `VivitarSeries1200mmf3.data.ts`.
- Updated L1 from a named PSK2/S-PHM51 family label to `569631 — PSK2 phosphate crown (Schott) / S-PHM51 class` so the six-digit patent code is explicit.
- Updated L5 from `713-433` punctuation to unbroken code `713433`; this remains an unresolved LaF/BaSF-boundary row with no exact public catalog match.
- Updated L6 from legacy `BaLF4 (Schott)` to `N-BALF4 (Schott; BaLF4-class equivalent)`, using the local coefficient-backed N-BALF4 row as the closest Sellmeier proxy for the patent's 1.57957 / 53.7 row.

### Phase 2 — Prescription, SD, APD, and high-index review

- Rechecked the Table IV radii, axial spacings, nd/vd rows, and variable focusing gap. No numeric prescription changes were made.
- Retained the existing R7 correction from the historical analysis notes; the printed table radius is internally inconsistent with the drawing and prescription behavior.
- The patent publishes no semi-diameter table. Fig. 5 supports the existing visual progression: the first two crowns carry the large front aperture, the rear positive/negative telephoto pair is smaller, and the fixed rear corrector remains compact. No SD edits were made.
- The patent publishes no abnormal partial dispersion, dPgF, theta-gF, line-index set, apodization, or gradient-filter data. All elements remain `apd: false`; no APD status was inferred.
- High-index status is retained only where supported by nd: L3/L4 are SF6-class dense flints, while L5 is a moderate-high-index unresolved 713433 row.

### Phase 3 — Analysis sync

- Updated the analysis note to use unbroken code `713433`.
- Updated the L6 glass explanation and summary table to describe the N-BALF4/BaLF4-class Sellmeier proxy.

## 2026-08-07 — Legacy LAFL4 catalog recovery

- Visually rechecked US 3,942,876 Table IV: L5 remains `nd=1.71270`, `νd=43.3`, code 713433.
- HOYA's obsolete LAFL4 row (`1.712704 / 43.295113`) is the exact coefficient-backed catalog equivalent. The
  production supplier remains unspecified.
- Strict and trusted catalog coverage are now complete at `6/6`; no geometry changed.

## 2026-09-21 — First-added diagram audit, lens 48

Source: `patents/US3942876.pdf` (11 pages, 300 dpi scan) — page 1 bibliographic data, page 3 FIG. 5, page 6 Table IV
and its introduction, page 7 the Table IV notes and Table VI, pages 8–9 claim 6, page 10 claim 13. Cross-check only:
Table IV on page 5 of the local family member `patents/GB_1408910_A.pdf`.

### Re-verified and retained

- Front page: US 3,942,876, Ellis I. Betensky (sole inventor), assignee Ponder & Best, Inc., granted Mar. 9, 1976.
  The patent does not number its examples; the embodiment is "FIG. 5 … Table IV" (fourth of five tables), repeated as
  claims 6 and 13. "200mm EFL, as scaled for a 24 × 36mm image frame … f/3.0": production scale, stored unscaled.
- Every Table IV row re-read on the rendered page: all R signs and values, all twelve axial distances, all six nd/νd
  pairs and the 3.2 – 15.0 gap match the file, except the deliberate R7 repair. Claim 6, claim 13 and GB Table IV
  print the same numbers, including R7 = −1567.0, BFL 77.5 and corrector EFL −240.4.
- R7 = −567.0 retained as an inferred repair, now with aberration evidence. Printed table: f = 183.36, BFL 67.39,
  marginal LSA −1.90 mm at f/3, paraxial F–C −0.30 mm. R7 = −567: f = 202.03, BFL 75.50, LSA −0.14 / −0.02 / +0.21 /
  −0.19 mm at the 0.5 / 0.71 / 0.85 / 1.0 zones, F–C −0.01 mm; neighbouring values (−667, −467) lose both balances.
  Calibration: Tables II and III of the same patent compute to f = 135.21 / 134.98 and BFL 59.71 / 40.489 against
  printed 59.67 / 40.485, so the patent's tables are normally exact.
- Stop station: FIG. 5 iris lines measured 14.5–14.9 mm behind R6 (scale 9.73 px/mm fitted to twelve vertex
  crossings, residuals ≤ 0.7 mm); stored 15.0 + 14.21 mm retained.
- Glass: all six labels resolve to catalog rows compatible with the patent pairs (PCD2 1.56873/63.11, N-BK7,
  S-TIH6/SF6 1.80518/25.43, LAFL4 1.71270/43.30, N-BALF4 1.57956/53.87). No relabel. `apd: false` throughout.
- Element focal lengths match thick-lens values (101.40, 139.83, −63.21, 74.82, −71.01, −249.38 mm).
  `nominalFno` 3, `fstopSeries` from 3, `maxFstop` 22, 6 elements / 6 groups, element type strings vs R signs: no change.

### Changes

| Field | Before | After | Evidence |
|---|---|---|---|
| `sd` surface 1 | 33.5 | 33.8 | Exact f/3 marginal ray 33.67 mm was clipped. Edge thickness 1.02 mm at 33.8, so not taken higher. |
| `sd` surface 2 | 31.5 | 33.8 | Marginal ray 33.39 mm was clipped by 1.9 mm; kept coherent with surface 1. |
| `sd` surface 4 | 27.0 | 28.5 | Marginal ray 28.06 mm was clipped. |
| `sd` surface 5 | 24.0 | 26.0 | Marginal ray 25.68 mm was clipped. |
| `sd` surface 6 | 23.0 | 24.0 | Marginal ray 22.92 mm had 0.08 mm margin; kept coherent with surface 5. |
| `sd` STO | 19.5 | 20.65 | Exact-ray f/3 iris radius (engine-built value 20.648); 19.5 was close to the paraxial marginal height (19.4 mm). |
| `sd` surface 8 | 17.5 | 18.2 | Marginal ray 17.71 mm was clipped. |
| `sd` surface 9 | 17.0 | 18.0 | Marginal ray 17.40 mm was clipped. |
| `focusPositions` / `var["11"]` | `[3.2, 33.8]` | `[0, 0.489091, 1]` / `[3.2, 15.0, 33.8]` | The patent's 15.0 mm close row was not stored. Its coordinate is 1.2 m ÷ 2.4535 m, the calculated object-to-film distance of that state in the stored prescription (same convention as the 135 mm f/2.3 sibling). |
| `focusDescription` | "Unit focus — …" | objective L1–L5 moves, L6 fixed; names patent rows and the calculated endpoint | Patent description of barrel 12 / compensating lens 32. |
| `imageFormat` | unset | `135-full-frame` | Patent: "scaled for a 24 × 36mm image frame". |
| `subtitle` | "Ex. 4 (FIG. 5)" | "Table IV (FIG. 5)" | The patent has no example numbers. |
| Header comment | short notes | scale, R7 source conflict, focus, stop, NOTE ON SEMI-DIAMETERS | — |

Analysis sync: embodiment wording; R7 discussion rewritten (the earlier text said the repair converged on all stated
parameters and that Table II computed to 131.3 mm — Table II computes to 135.21 mm); claim/page references; focus
section (patent row vs calculated endpoint, 3,000 mm row corrected from 11.97 to 12.53 mm gap, magnification 0.253,
EFL 190.4 mm belongs to the 15.0 mm state and 174.4 mm to the 1.2 m endpoint); stop and semi-diameter sections;
implementation notes.

### Checks on the result

- Paraxial: f = 202.034, BFD 75.504 against stored last gap 75.5 (defocus −0.004 mm), total length 156.0.
- Focus keyframes: 15.0 mm focuses 2285.3 mm from R1 / 2453.1 mm from the film (m = −0.098, f = 190.39);
  33.8 mm focuses 1199.9 mm from the film (m = −0.253, f = 174.38).
- Exact trace at Y = 21.6 mm: ω = 5.97°, no surface clips the f/3 axial beam or blocks the corner chief ray;
  corner-bundle vignetting 2–34% per side. Image-circle floor: 0 undersized. Surface validator: no errors.
- FIG. 5 rims at the fitted scale: L1 31.5, L2 28.8, L3 24.4, L4 17.0, L5 14.0, L6 12.6, iris 17.4 mm — all below the
  f/3 axial beam, so the figure was not used for sizes; stored values are within 15% of it except where the beam
  requires more.

### Open limitations

- Table IV remains internally inconsistent after the R7 repair: f 202.03 vs "200mm", BFL 75.50 vs 77.5, FVD 156.0 vs
  157.9 (GB: 158.00), L6 f −249.4 vs −240.4 (independent of R7), 15.0 mm state at 2286 mm from R1 vs 2372 mm. No
  single-character change to the printed table reproduces f, BFL and the close conjugate together under either
  reading of the 2372 mm; character-pair searches only turn up arbitrary front-group combinations. A continuous
  repair confined to L1 (nd ≈ 1.5524) gives f 199.97 / BFL 77.50 / 2376 mm object-to-film with near-zero coma, but it
  contradicts the printed PCD2/PSK2 coordinate and leaves F–C at −0.19 mm; it was not adopted. The calculated 75.50
  and −249.4 each differ from the printed 77.5 and −240.4 in one digit, which hints at further manuscript slips but
  proves nothing.
- The reference point of the patent's 2372 mm is not stated (Table III's 1606 mm matches the front-vertex distance).
- The 33.8 mm endpoint and the 1.2 m MFD are production-calibrated calculations, not patent data.
- `lensMounts` stays unset pending the multi-mount source review noted in the mount/format backfill queue.
- Live view completed by the coordinator after the agent's browser session was refused: local infinity and 1.2 m
  states render the full f/3 on-axis fan through every rim, the L6 corrector stays fixed while L1–L5 advance, the stop
  sits between L3 and L4 as in FIG. 5, the D11 readout follows the keyframes, and the 8.3° off-axis bundle traces
  with no console errors.
- The νd rounding of all five glasses (63.1, 64.2, 25.5, 43.3, 53.7) follows HOYA catalog values rather than Schott's
  (SF6 25.43 would print 25.4); supplier remains unspecified in the patent.
