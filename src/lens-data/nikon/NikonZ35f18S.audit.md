# Audit Log — Nikon NIKKOR Z 35mm f/1.8 S

Patent: JP 2019-090947 A, Example 4

## 2026-05-19 — Glass relabel audit + S-TIM3 catalog addition

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L12 / 3 | `glass` | `S-LAH79 (OHARA)` | `S-LAH98 (OHARA)` | Patent Example 4 row 3 lists nd=1.95375, vd=32.33; S-LAH98 matches the Ohara 954323 code family. |
| L13 / 4 | `glass` | `S-TIM2 (OHARA)` | `S-TIM5 (OHARA)` | Patent Example 4 row 4 lists nd=1.60342, vd=38.03; S-TIM5 round-trips the pair. |
| L14 / 6 | `glass` | `S-TIH14 (OHARA)` | `S-TIM28 (OHARA)` | Patent Example 4 row 6 lists nd=1.68893, vd=31.16; S-TIM28 is the Ohara-family match. |
| L15 / 7 | `glass` | `S-LAH51 (OHARA)` | `S-LAH89 (OHARA)` | Patent Example 4 row 7 lists nd=1.85150, vd=40.78; S-LAH89 round-trips the pair. |
| L21 / 14 | `glass` | `S-TIM25 (OHARA)` | `S-TIM3 (OHARA)` | Patent Example 4 row 14 lists nd=1.61293, vd=36.94. Source pass found Ohara S-TIM3 (613370) in both Ohara and refractiveindex.info, so a catalog entry was added instead of using a generic code. |

### Phase 2 — Retained-information audit

- Checked the flagged Example 4 rows against the patent table; stored `R`, `d`, `nd/vd`, and `Ri`-derived semi-diameters already match the published rows.
- No asphere, variable-gap, or metadata edits made.

### Phase 3 — Spectral / metadata enrichment

- Added `S-TIM3` to `glassCatalogData.ts` with Ohara/refractiveindex.info Sellmeier coefficients, code6 `613370`, and `PgF` from the catalog line indices.

### Phase 4 — Analysis sync

- Updated D1, D2, L21, and design-summary prose to match S-LAH98, S-TIM5, S-TIM28, S-LAH89, and S-TIM3.

## 2026-07-29 - Catalog expansion follow-up

- Corrected L23 from probable `L-LAL14` to OHARA `L-LAL13`, the exact 1.69350 / 53.19 low-Tg row.

## 2026-07-29 - Remaining catalog-mismatch audit

- Rechecked JP 2019-090947 A Example 4 surface 11A; stored `R`, `d`, `nd=1.83441`, and `νd=37.28` agree with the patent.
- Relabeled double-aspheric L17 from probable `S-LAH55VS` to HOYA `M-NBFD10`, whose molded-glass row is an exact coordinate match and is consistent with the element's manufacturing context.
- Synchronized the analysis and removed the obsolete VS speculation. No geometry changed.

## 2026-08-11 - FCD515 triple-match recovery

- Rendered local `patents/JP2019090947A.pdf` page 17 and confirmed Example 4 surface 16 at
  `nd = 1.59282`, `vd = 68.62`, and `theta_gF = 0.544` (the patent text carries 0.5441).
- HOYA FCD515 reproduces the full published triple at `1.59282 / 68.63 / 0.5441`; the earlier family-only disposition
  predated the coefficient-backed FCD515 row used by the current catalog.
- Relabeled L22 as an FCD515 catalog equivalent. The patent does not identify a production supplier, and the existing
  patent-backed APD metadata remains unchanged.

## 2026-09-21 — First-added diagram audit, lens 42

Source: local `patents/JP2019090947A.pdf` — p. 1 and p. 24 (bibliographic data, inventors), p. 11–12 (¶0053–0058 focus
mechanism and Example 4 element shapes, ¶0060–0062 table conventions and asphere equation), p. 17–18 (Example 4 surface
data, asphere data, general data, variable parameters, Tables 1–2), p. 19 (FIG. 4), p. 20 (FIG. 8). The text layer is
native; every Example 4 number was also confirmed on the rendered page image.

### Re-verified and retained

- `patentNumber`, `patentYear`, both applicants, and the four inventors in source order (山田恵子, 今嶋亮介, 辰野亘,
  佐藤治夫). `subtitle` names Example 4.
- Every `R`, `nd`, `νd`, every `d` except d5, the stop position (surface 13), all six asphere blocks (K used directly in
  `1 + K`; A4–A10 signs and exponents; A12 = 0 everywhere), the POS1/POS2 variable rows and the L22 θgF data agree with
  the printed table. Element `type` strings agree with ¶0058 and the R signs; groups, doublets and `varLabels` are correct.
- Glass labels for L12–L17, L21–L23 resolve to catalog rows compatible with the patent pairs and were kept. Exact
  alternative coordinates exist (E-FD8 / J-SF8 for L14 at 31.16, M-LAC130 for L23 at 53.20, E-F3 for L21); the
  differences from the kept labels are ≤ 0.08 in νd, so no relabel.
- `closeFocusM: 0.25`, floating-focus description, `imageFormat`, `lensMounts`, element and group counts.

### Findings and changes

| Item | Before | After | Evidence |
|---|---|---|---|
| d5 (air space D1→D2) | 0.108 (as printed) | 0.2595 normalized = 5.6052 mm, labelled derived | Printed spacings sum to 4.4015 vs stated TL 4.553 (Example 1 sums to its TL exactly). With the printed value the table traces to f = 1.6237, f1 = 2.1683 vs patent 1.572 / 2.089, and the published effective radii of surfaces 5/6 overlap by 0.06. With d5 = TL − Σ(other spacings) = 0.2595: f = 1.5729, f1 = 2.0906, f2 = 2.5108 (2.512), f3 = −4.5064 (−4.507), paraxial image 0.0013 from the stated plane. Adding the same 0.1515 to any other Gr1 spacing instead misses f by ≥ 1.3 % (and the two closest, d3 and d11, leave the image 0.011 and 0.19 out of focus). FIG. 4 vertex crossings at 300 dpi (141.4 px per unit from the d5-independent Gr2–image span): S5→S6 = 36 px = 0.255; all other Gr1 spacings match the table within 0.015. |
| Scale | patent-normalized (f = 1.572), header "22.26× to 35 mm" | stored at 21.6×: all R, d, sd, var gaps × 21.6; A_n ÷ 21.6^(n−1); K unchanged | FIG. 8 IMG HT axis ends at 1.00, so the patent is normalized to image height 1.00 mm; 2ω = 64.9° = 2·atan(1/1.572). At 21.6× the POS2 object-to-image distance (7.0 + 4.553) is 249.5 mm = Nikon MFD 0.25 m; at 22.26× it would be 257 mm with a 22.3 mm image height. |
| `focalLengthDesign` | 1.572 | 33.96 | 1.572 × 21.6 = 33.955; traced EFL 33.974 mm. |
| Rear gap (surface 21A) | 0.8675 / 0.6615 (plate counted at full thickness) | 18.1934 / 13.7438 mm = (d21 + 0.074/1.5168 + 0.0425) × 21.6 | Repo convention: omitted plate contributes t/n. Infinity defocus is now −0.029 mm (was +0.0057 normalized ≈ 0.12 mm at scale, hidden by the two errors partly cancelling). |
| Semi-diameters | Gr1 surfaces 3–12A and all of Gr2/Gr3 trimmed to 0.40–0.58 (header claimed "from patent Ri"); axial f/1.8 beam clipped at several surfaces | patent Ri × 21.6 for every surface (17.97 … 15.21 mm); surfaces 9, 10, 11A, 12A, STO stored at the traced F/1.85 marginal height 14.112 / 13.637 / 12.682 / 12.041 / 11.516 | The earlier trim was forced by the misprinted d5 (D1 and D2 collided). The traced F/1.85 marginal ray is 0.65332 / 0.63134 / 0.58710 / 0.55745 / 0.53314 at surfaces 9–13, i.e. the published 0.653 / 0.631 / 0.587 / 0.557 / 0.533; the stored values stay inside the printed rounding band. FIG. 4 rims (clean lower side) read 1.09–1.11 × Ri for every element — uniform edge margin, so no figure-based change. |
| `nominalFno`, `fstopSeries[0]` | 1.8 | 1.85 | Patent FNO 1.85; `maxFstop: 16` written explicitly (production minimum aperture). |
| L11 `glass` | `S-BSL7 (OHARA)` (catalog nd 1.51633) | `J-BK7A (HIKARI catalog equivalent; exact 1.51680 / 64.13)` | Patent row 1: 1.51680 / 64.13. |
| L31 `glass` | `L-BAL42 (OHARA), probable` (νd 59.39) | `M-BACD12 (HOYA catalog equivalent; exact molded-glass coordinate match)` | Patent row 20: 1.58313 / 59.46 = M-BACD12 exactly; same disposition as L17. |
| Element `fl` | normalized values | −45.75, 31.32, −44.38, −22.81, 23.22, 39.81, −99.43, −42.4, 31.58, 130.98, −97.34 mm | Thick-lens values at the stored scale. |
| Asphere rim departures (roles + analysis) | +39 / +122 / −530 / +218 / −674 / −850 µm (22.26× scale) | +38 / +119 / −515 / +211 / −653 / −825 µm at 12.68 / 12.04 / 12.94 / 13.26 / 13.93 / 15.21 mm | Recomputed at the stored semi-diameters; no surface turns over inside its aperture. |
| Analysis | 22.26× scale, "3.3 % EFL discrepancy from rounding", MFD 257 mm, stop 11.87→11.33 mm, thin-lens 0.20×, "OHARA almost exclusively", stale L22 family-level sentence, inventor romanization "Imashima" | 21.6× scale and its justification, d5 derivation, MFD 249.5 mm, stop 11.51→10.99 mm, traced 0.19×, catalog-equivalent wording, all scaled focal lengths / radii / travels / Petzval radius (395 mm) recomputed, inventors as in the data file | Follows from the rows above. |

### Checks on the result

- Paraxial: EFL 33.974 mm (patent 33.955), BFD 18.222 vs stored 18.193 mm, total track 97.80 mm in air-equivalent form
  (patent TL 4.553 × 21.6 = 98.34 mm through the 1.60 mm plate). Stop radius for F/1.85 = 11.516 mm (patent 11.513).
- POS2 gaps focus on an object 153.3 mm before surface 1 (patent 7.0 → 151.2 mm, two-figure value), object-to-image
  251.2 mm, magnification −0.191 (Nikon 0.19×).
- Real-ray trace at Y = 21.6 mm: chief ray reaches the corner at ω = 32.86° (−1.6 % distortion against the paraxial
  32.45°; FIG. 8C shows the same sign and size); no axial clipping and no chief-ray blocking at infinity or POS2; rear
  groups vignette the full-field bundle 34–57 % per side as the published radii imply. Engine half-field 32.9°, limited
  by surface 2.
- Repo surface validator reports no errors with the patent radii; image-circle floor check reports 0 undersized; all
  eleven glass labels resolve compatibly; data and analysis files pass the formatter.
- Live view (local build): infinity and 25 cm states render with the D1–D2 air space and element proportions of FIG. 4;
  Gr2 moves forward and Gr3 rearward; header shows f/1.85 and Petzval R ≈ 396 mm. Production baseline showed EFL 1.62 mm
  and the trimmed inner elements.

### Open limitations

- d5 is a derived value (patent misprint), not a published one; its uncertainty is ±0.0005 normalized (±0.011 mm) from
  TL rounding.
- The patent's POS2 stop radius (0.509 → 10.99 mm) is not modelled; the file keeps the infinity iris.
- The patent's Table 2 d_npr1 (0.969) is not reproduced by a direct principal-point trace (0.60; Example 1 gives 0.58
  vs 0.958), so it was not used as evidence.
- Design focal length 33.96 mm vs marketed 35 mm (−3 %) follows from the image-height normalization; all glass names
  are catalog equivalents because the patent lists only nd / νd (θgF for L22).
