# Audit Log — Leica Summilux 28 mm f/1.7 ASPH.

Patent: US 2016/0266350 A1, Example 1

## 2026-05-20 — Glass relabel audit

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L1 / S1 | `glass` | `S-BAL42 (OHARA)` | `S-TIL26 (OHARA)` | Patent Example 1 lists nd=1.56732, vd=42.8; S-TIL26 matches. |
| L4 / S7 | `glass` | `L-LAM60 (OHARA)` | `FCD515 (HOYA)` | Patent Example 1 lists nd=1.59282, vd=68.6; FCD515 matches. |
| L5 / S9 | `glass` | `S-LAH79 (OHARA)` | `TAFD35 (HOYA)` | Patent Example 1 lists nd=1.91082, vd=35.2; TAFD35 matches. |
| L6 / S12A | `glass` | `S-LAH63 (OHARA)` | `877370 — high-index lanthanum glass` | Patent Example 1 lists nd=1.87722, vd=37.0; no unique public match found. |
| L8 / S15 | `glass` | `S-NBH55 (OHARA)` | `S-TIH13 (OHARA)` | Patent Example 1 lists nd=1.74077, vd=27.8; S-TIH13 matches. |

### Phase 2 — Retained-information audit

- Confirmed flagged nd/vd rows against local `patents/US20160266350A1.pdf`. Stored nd/vd values matched the patent.
- Non-flagged prescription fields were not fully rekeyed in this queue pass.

### Phase 4 — Analysis sync

- Updated the companion analysis entries for L1, L4, L5, and L8.

## 2026-06-24 — Folder audit recheck

- Rechecked local `patents/US20160266350A1.pdf` text for Example 1 against the current data file.
- Retained L6 as `877370` high-index lanthanum glass. The patent row is nd=1.87722, vd=37.0 and still lacks a verified coefficient-backed public match.
- Rechecked APD status: the patent gives no partial-dispersion data supporting APD flags for this Summilux-Q design, so all elements remain non-APD.
- No patent clear-aperture or semi-diameter table was found. Existing SDs remain visualization estimates constrained by f/1.7 ray envelopes, image height, and the drawing proportions.

## 2026-09-21 — First-added diagram audit, lens 56

Source: local `patents/US20160266350A1.pdf` (300 dpi CCITT raster with a poor OCR layer; all numbers read from the
rendered pages). Front page p. 1; FIG. 1 cross-section p. 2 (sheet 1, axis horizontal, object at left); FIG. 14
surface data p. 15; FIG. 15 aspherical data p. 16 (rotated table); FIG. 16 various data and FIG. 17 lens-group data
p. 17; Numerical Example 1 text ¶0114–0125 and Table 1.

### Retained after re-reading the source

- Front page: `US 2016/0266350 A1`, published 2016-09-15, inventors Tomoko Iiyama (Osaka) and Masafumi Sueyoshi
  (Kanagawa), applicant Panasonic Intellectual Property Management Co., Ltd. — all stored fields and the subtitle
  (Example 1) agree.
- FIG. 14: all 21 rows of `R`, `d`, `nd`, `νd` match; the diaphragm is surface 11 with d10 = 2 before it; surfaces
  22–23 are the 1.4 mm / 1.5168 plane plate. FIG. 15: 12A, 18A, 19A, 21A coefficients and all conic constants match
  (Equation 1 uses (1 + k)h²/r², so K = k as stored). FIG. 16: d11/d14/d17/d19 at infinity and short distance 1
  match `var`; f = 27.0831 / 23.7442, FNO 1.75737 / 1.79498, ω = 39.9403° / 40.9747°, image height 19.875 / 19.525,
  overall length 63.9797 (S1 to S23), BF 1.00114 / 1.0763, d0 = 235 mm. FIG. 17 group focal lengths 36.07796 /
  178.3235 / 363.4437 / 33.98372 / −27.8386 all reproduce (thick-lens 36.08 / 178.33 / 363.44 / 33.98 / −27.84);
  element `fl` values agree with thick-lens values to the stored precision.
- Paraxial EFL 27.0834 mm (infinity) and 23.7444 mm (0.3 m); the stored close gaps focus an object 234.99 mm from
  S1 (patent d0 = 235). `closeFocusM` 0.3 = 235 + 63.98 + 1.08 mm object-to-image. Only the two M1 rows sit on the
  focus axis; the two M2 macro rows (unit extension 2.3457 mm, F/2.9) have no infinity conjugate and stay documented.
- L1–L9 rims retained: FIG. 1 reads them 12–15% below the stored values (see scale note below), inside the leave-it
  band, and none clips the f/1.76 axial beam or the full-field chief ray.
- L6 (877370) and L11 keep code-form labels; no catalog glass reproduces 1.87722 / 37.0 or 1.68250 / 33.0.

### Figure scale

FIG. 1's axial scale is 14.5 px/mm at 300 dpi (S1 707.5 px to image plane 1650 px = 64.98 mm; every fixed thickness
agrees). Least-squares fits of eleven drawn surface curves (S2, S3, S5–S8, S13, S15–S17, 19A, 20A) to the
prescription radii return 15.7–16.6 px/mm in the height direction with sub-pixel residuals, i.e. the reproduction
is about 12% taller than wide. The fitted 16.2 px/mm puts the drawn image-plane line at 20.2 mm (image height
19.875) and reproduces the 21A rim sag at the blank edge (29 px = 2.0 mm), so rim heights below use 16.2 px/mm.
The repo figure screen, which assumes an isotropic scale, over-reads every rim by that 12% (and L5 by the stop
arrow).

### Changes

| Surface / field | Before | After | Evidence |
|---|---|---|---|
| 20A `A4` | 6.7124e-5 | 6.72124e-5 | FIG. 15 row 20 reads 6.72124E-05; a digit had been dropped. |
| 21A `d`, `var["21A"]` | 4.7011 / 4.7763 (2.3 + 1.4 physical + BF) | 4.2241 / 4.2993 (2.3 + 1.4/1.5168 + BF) | Repo convention folds the plate's equivalent air thickness; paraxial BFD 4.2244 mm now matches within 0.3 µm (was 0.48 mm behind focus). |
| 18A `sd` | 13.0 | 14.7 | FIG. 1 L10 rim 242 px = 14.9 mm; exact chief ray for Y = 19.875 mm needs 13.18 mm (old rim blocked it); 18A polynomial turns over at 14.8 mm. |
| 19A `sd` | 14.0 | 14.9 | FIG. 1 L10 rim 14.9 mm (rear curve meets the rim); chief ray 13.99 mm; turnover 16.7 mm. Kept coherent with 18A. |
| 20A `sd` | 15.0 | 15.5 | FIG. 1 front-curve end 15.2–15.5 mm (fit 15.5) before a flat annulus; image-circle floor 15.43 mm for the 135 format; chief ray 14.95 mm; rim slope 42°. |
| 21A `sd` | 15.5 | 18.4 | FIG. 1 L11 blank 298 px = 18.4 mm with the rear curve drawn to the edge; chief ray 17.59 mm (old rim blocked it); floor 16.95 mm. |
| STO `sd` | 7.95 | 8.3 | Records the iris radius the engine derives at F/1.76 (8.30 mm real ray). |
| `nominalFno`, `fstopSeries`, `maxFstop` | 1.7; series from 1.7; default | 1.76; series from 1.76; 16 | FIG. 16 FNO 1.75737; f/1.7 is not reachable at the patent aperture; production minimum aperture f/16. `apertureMarketing` stays 1.7. |
| L2, L9 `glass` | `S-LAH58 (OHARA)` (1.88300 / 40.77) | `TAFD33 (HOYA catalog equivalent; …)` | Patent 1.881 / 40.1; catalog TAFD33 1.88100 / 40.14 exact; Δnd of the old label 2.0e-3. |
| L10 `glass` | `S-LAH66 (OHARA)` | `S-LAH66 (OHARA catalog equivalent; … Δnd 2e-4 …)` | Patent 1.77271 / 49.7 vs catalog 1.77250 / 49.60; no exact public match. |
| L1, L3, L4, L5, L7, L8 `glass` | vendor names | same names worded as catalog equivalents, vendor unspecified | The patent names no glasses. |
| L11 `glass` | `Unmatched (…)` | `683330 — dense flint (catalog unresolved; …)` | Six-digit form allows a future catalog entry to resolve it; still no match. |
| L6 `glass` | `877370 — … nu_d=37.0` | `877370 — … (catalog unresolved; … νd=37.0)` | Wording only. |
| Header | "physical thickness folded"; SD note | t/n fold, figure-based rear rims, aperture note | See above. |

### Checks on the result

- Surface validator clean; image-circle floor clean (Y′ = 21.65 mm); all eleven labels resolve as intended
  (683330 and 877370 stay unresolved by design).
- Exact chief ray for the patent image height 19.875 mm passes every rim: ω = 39.11° at infinity (patent 39.94°)
  and 40.95° at 0.3 m (patent 40.97°). Axial f/1.76 beam clears every rim (largest ratio 8.30 / 8.3 at the stop).
- The 135 sensor corner (21.6 mm, ω = 42.3°) is outside the design image height; it would need 15.05 / 16.02 /
  19.16 mm at 19A / 20A / 21A, past the drawn L11 blank. Not applied.
- Asphere rims: 18A sag −0.73 mm, departure −626 µm at 14.7 mm (slope 1°); 19A −4.45 mm, +325 µm at 14.9 mm
  (slope 25°); 20A −6.07 mm, +3,014 µm at 15.5 mm (slope 42°); 21A −2.14 mm, −1,545 µm at 18.4 mm (slope 35°).
- Engine paraxial half-field estimate 34.0° → 35.5° (limited by 20A/19A); exact coverage is 39–41°.
- Live: production (L1 drawn largest, small L10/L11, f/1.7 series, BF 4.70) compared with the local page at
  infinity and 0.3 m (D11 4.43 / D14 4.98 / D17 1.39 / D19 8.61 / BF 4.30, EFL 23.74 mm), the off-axis toggle
  (21.3° bundle passes the rear group) and the f/1.76–f/16 slider; L11 now renders as the largest element with
  its stepped rim, as in FIG. 1.

### Open limitations

- All semi-diameters remain estimates; the patent publishes none. L1–L9 are 12–15% above the drawn rims.
- The M2 macro mode (0.3–0.164 m, F/2.9) is not on the focus axis; the iris is inferred from the nominal F-number.
- L6 (1.87722 / 37.0) and L11 (1.68250 / 33.0) have no catalog Sellmeier; both run on the Abbe fallback.
- The viewer's paraxial half-field (≈35°) understates the exact-ray field (39–41°) because of the steep rear
  aspheres; FIG. 1 is anisotropic, so figure-based rims carry about ±3% scale uncertainty.
