# Audit Log - Fujifilm XF 56mm F1.2 R

Patent: US 2015/0212302 A1, Example 3

## 2026-05-19 - Missing-Sellmeier queue audit

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L15 / S8 | `glass` | `Dense flint (752/251, uncertain)` | `FF8 (HOYA fluor flint)` | Patent Example 3 gives nd=1.75211 and vd=25.1. Public HOYA FF8 data is code 752251 and supplies a coefficient-backed formula-3 match. |
| L16 / S10 | `glass` | `Flint (673/382, uncertain)` | `S-NBH52 (OHARA)` | Patent Example 3 gives nd=1.67300 and vd=38.2. OHARA S-NBH52 is nd=1.672999 / vd=38.15, matching the 673382 code family within normal rounding. |

### Phase 2 - Patent evidence

- Local patent file: `patents/US20150212302A1.pdf` is present but gitignored; rechecked it via local text extraction and cross-checked the public Google Patents HTML.
- Confirmed Example 3 rows for L15 / S8 (nd=1.75211, vd=25.1) and L16 / S10 (nd=1.67300, vd=38.2).
- No radius, spacing, asphere, stop, mount, or format edits made.

### Phase 3 - Catalog-search disposition

- Added HOYA FF8 to `glassCatalogData.ts` from the public HOYA Zemax / refractiveindex.info formula-3 row.
- Added `code6: "673382"` to existing OHARA S-NBH52 so future code annotations resolve directly.

### Phase 4 - Analysis sync

- Updated the L15/L16 narratives and glass summary table to remove the uncertain-code interpretation.

## 2026-09-21 — First-added diagram audit, lens 50

Source: local `patents/US20150212302A1.pdf` (15 pages, 300 dpi 1-bit scans with an OCR text layer). Front page p. 1;
FIG. 3 p. 3 (sheet 2/6, axis horizontal, infinity focus, with the FOCUSING arrow under L21–L24); FIG. 8 aberration
plots p. 5; ¶0037–0057 (structure, focusing, PP, formula (A), units) p. 9–11; Table 7 and the start of Table 8
p. 12; Table 8 (continued) and Table 9 p. 13; Table 16 p. 14. All numbers were read from rendered page images; the
OCR layer garbles Table 7 ("SS.403", "S1536") and was used only to locate pages.

### Retained after re-reading the source

- Front page: US 2015/0212302 A1, published Jul. 30, 2015, inventor Takashi Suzuki, applicant FUJIFILM Corporation,
  application 14/606,301 filed Jan. 27, 2015, priority JP 2014-015509. `patentNumber`, `patentAuthors`,
  `patentAssignees`, `patentYear` and the Example 3 `subtitle` are right. The patent never names the product; the
  Example 3 identification (11 elements, two 1.49700/81.6 lenses, one double-sided asphere, f 56.98, Fno 1.25)
  stays an inference, and the file does not describe the APD variant's filter or the 13-element R WR redesign.
- All 20 stored R, d, nd, νd rows equal Table 7 rows 1–20, including the stop as surface 12 and the paraxial radii
  −187.802 / 74.266 of the asphere rows marked "*". Table 8: f 56.98, BF 16.53, 2ω 28.0, Fno 1.25. Paraxial trace
  of the stored file: EFL 56.991, BFD 16.532 (defocus −0.002 mm), field angle 13.96° for Y = 14.2 mm (patent
  ω = 14.0° in FIG. 8). Native scale kept.
- Cover plate: Table 7 rows 21–22 (PP, d 2.80, nd 1.51680, νd 64.2) 10.00 mm behind surface 20, no plate-to-image
  distance printed. Excluded; the stored last gap 16.53 mm is the Table 8 air-equivalent BF, which implies
  4.684 mm of air behind the plate (paraxial recomputation with the plate gives 4.686 mm).
- Every element `fl` equals its thick-lens value to the stored precision; calculated group focal lengths G1
  +112.85, G2 +34.98, D1 +199.95, T1 +29.70, focus group L21–L24 +39.62 mm.
- Aspheric coefficients A3–A20 of both surfaces match Table 9 digit by digit (one value was stored truncated, see
  below). Table 9 prints K = 0.0000000E+00 for both surfaces.
- Glass: all eleven labels resolve to catalog glasses compatible with the patent pairs (largest Δnd 4.4e-6,
  largest Δνd 0.05). The patent names no glasses; θgF is printed only on the L13 row (0.5375).
- Stop: Table 7 places it 6.22 mm behind L16 and 11.59 mm ahead of L21; it belongs to the fixed part (¶0050). The
  stored STO sd 11.3 mm is the paraxial f/1.25 iris radius (real-ray 11.39 mm); the drawn stop symbol (21.9 mm)
  marks position only per ¶0057.
- Semi-diameters kept on surfaces 3–9, 11, 15 and 16 (see the figure comparison below).

### Figure measurement

FIG. 3 at 300 dpi, axis at row 1200. Vertex crossings at 768.5 (S1), 807 (S2/S3), 946 (S4/S5), 1014 (S6), 1020
(S7), 1078 (S8), 1097 (S9), 1142 (S10), 1160 (S11), 1251 (stop), 1422 (S13), 1447 (S14/S15), 1554 (S16), 1572
(S17), 1669 (S18), 1683 (S19), 1709 (S20), 1858 / 1899 (PP), 1967 (Sim) fit 14.775 px/mm within 2 px of the
prescription, so the sheet is drawn to scale (S1 → Sim 1198 px = 81.1 mm against 81.14 mm with the plate).
Lower-side rims in mm (stored before → after): L11 23.8 (27.5 → 23.8); L12 22.5 (23.5 kept, +4 %); L13 19.5
(21.0 kept, +8 %); L14 17.1 / L15 16.4 (18.5 kept, +8–13 %); L16 14.35 (14.0 → 14.3 for the axial ray); L21 10.7
(6.0 → 10.0 / 10.4, polynomial-limited); L22 front rim 11.5 (11.5 kept); triplet mounting edge 13.7 (S16 kept at
11.5 because 13.7 exceeds the hemisphere of R −13.865; S17 11.5 → 13.7); L24 rear 13.9–14.0 (S18 11.5 → 13.9);
L25 14.1 (11.5 → 14.1). The G1 rims sit 1–4 % above the calculated f/1.25 axial marginal ray, so the drawing is
close to the clear apertures rather than a loose sketch.

### Changes

| Field | Before | After | Evidence |
|---|---|---|---|
| `asph.13A.K`, `asph.14A.K` | 0 | −1 | Formula (A) in ¶0062 is Zd = C·h²/{1 + (1 − K·C²h²)^½} + ΣAm·h^m, the Fujifilm form without "1 +" inside the root; printed K = 0 is a parabolic base, standard K = −1 (same reading as the repo's XF 35mm F1.4 R, X100 and X70 files from the same inventor). Check: with the plate restored, K = −1 gives −0.008 mm of longitudinal spherical aberration at full aperture, K = 0 gives +0.032 mm; FIG. 8 draws the d-line at about −0.005 mm. Rounding of Table 7 cannot bridge that gap (all half-digit perturbations sum to 0.027 mm). |
| `asph.13A.A14` | 5.669064e-12 | 5.6690635e-12 | Table 9 prints 5.6690635E−12. |
| `sd` S1–S2 | 27.5 | 23.8 | FIG. 3 L11 rim 352 px = 23.8 mm (stored was +15.5 %); axial ray needs 22.80. |
| `sd` S10 | 14.0 | 14.3 | Stored value clipped the f/1.25 axial ray (needs 14.24 mm); 14.4 would exceed the 90 % sag limit of the 2.96 mm gap to S9. Figure rim 14.35. |
| `sd` S13A / S14A | 6.0 / 6.0 | 10.0 / 10.4 | Stored values clipped the axial ray (needs 9.22 / 9.41) and blocked the 14.2 mm chief ray (6.32 / 7.12). Figure rim 10.7, but the Table 9 polynomial's slope on S13 peaks at h ≈ 10.05 mm and the profile reverses by 10.75 mm, so the front face stops at 10.0; 10.4 is where a ray entering at 10.0 leaves the diverging element. |
| `sd` S17–S20 | 11.5 | 13.7 / 13.9 / 14.1 / 14.1 | Stored values blocked the Y = 14.2 mm chief ray (needs 11.57 / 11.72 on S19 / S20). Figure rims 13.7, 13.9–14.0, 14.1. |
| `var` close column | STO 5.39, S18 7.10 (6.20 mm travel) | STO 4.69, S18 7.80 (6.90 mm travel) | The patent publishes no close state. 6.20 mm focused an object 700 mm from surface 1 (0.78 m from the image plane). The new column is a paraxial solve for the production 0.7 m object-to-image MFD; magnification −0.087 against the 0.09× production figure. Marked calculated in the header, `var` comment, `focusDescription` and analysis. |
| `varLabels` | D(STO), BF(G2) | D12, D18 | Table 7 surface numbers; the second gap is not a back focus. |
| `nominalFno`, `fstopSeries`, `maxFstop` | 1.2; series from 1.2; default | 1.25; series from 1.25; explicit 16 | Table 8 Fno 1.25; production minimum aperture f/16. |
| `focalLengthDesign`, `specs` | 56.99, "f ≈ 56.99" | 56.98, "f = 56.98" | Table 8. |
| L12 `apd` / `apdNote` | "patent", "θgF = 0.5375 (patent-listed)" | "inferred", same pair as L13 | Table 7 prints θgF only on the L13 row. |
| L13 `apdNote`, `dPgF` | note only | note names L1p and Table 16 value 0.0280; `dPgF` 0.03095 | θgF − (0.6438 − 0.001682·81.6), calculated from the printed 0.5375. |
| L25 `role` | "maintains image-side telecentricity" | fixed rear lens limiting focus-induced spherical aberration and field-curvature change | ¶0050; the calculated exit pupil is 57 mm ahead of the last surface, so the lens is not telecentric. |
| Header | boxed header: "f/1.25 design aperture, ~8 % clearance, 62 mm filter" SD note; K = 0 note; BFD arithmetic | plain notes on scale, focus, formula (A), FIG. 3 measurement, plate arithmetic, glass naming | Findings above. |
| Analysis | metadata block missing Published/Applicant/Title; glass S-LAH66 in prose and table (data file says S-LAH58); "θgF = 0.5375" attributed to L12; "6.20 mm to 0.7 m", EFL 53.35 at close focus; "PGM glass ensures…"; asphere departures quoted at 6.0 mm (−0.262 / −0.212 mm); telecentric L25 | block normalized; S-LAH58 throughout; L1p wording; calculated 6.90 mm / EFL 52.98; moldable-glass inference; departures at 10.0 / 10.4 mm (−1.676 / −1.309 mm) and the polynomial turnover; ¶0050 wording; new "Semi-Diameters and Cover Plate" section; APD / R WR disambiguation | Data-file sync. |

### Checks on the result

- Surface validator reports no errors; image-circle floor check reports 0 undersized surfaces; the exact-profile scan
  of S13A at 10.0 mm shows slope −0.640 (32.6°) with departure −1.676 mm, and S14A at 10.4 mm slope −0.227 with
  departure −1.309 mm, both short of the turnover.
- Exact meridional trace at f/1.25, Y = 14.2 mm, infinity: ω = 13.96°; no surface clips the axial beam or blocks the
  chief ray (largest demands 22.80 mm on S1 against 23.8, 14.24 on S10 against 14.3, 9.41 on S14A against 10.4,
  11.72 on S20 against 14.1). At the calculated 0.7 m state ω = 13.58°, and the axial f/1.25 cone would reach 11.0 mm
  on S13A, so L21 trims it to a stop-plane height of about 10.35 of 11.39 mm; the chief ray still clears.
- Paraxial: EFL 56.991 / BFD 16.532 at infinity; the close column focuses an object 619.4 mm ahead of surface 1
  (object-to-image 699.6 mm), magnification −0.0867, EFL 52.98. Engine: FOPEN 1.25, iris radius 11.39 mm.
- Glass check: 11 of 11 labels compatible with the stored pairs.
- Live: production baseline (infinity, f/1.2, on-axis) shows the old silhouette with the tiny 6 mm L21 and the
  11.5 mm rear group. The local page after the edits loads without console errors, reports f = 56.98 mm, F/1.25,
  the focus text "close-focus travel (6.90 mm to 0.7 m) is calculated", D12 11.59 / D18 0.90 at infinity and
  D12 4.69 / D18 7.80 at 70 cm with EFL 52.98; the cross-section now shows L21 at the size FIG. 3 draws, the
  stepped rear group and the enlarged L25, and the off-axis bundle (9.4°) is listed in the legend. No zoom stations.

### Open limitations

- Close-focus spacings are calculated, not published; the production lens's actual travel and any stop-down at
  minimum focus are unknown.
- L21 is drawn 0.7 mm smaller than FIG. 3 because the published 18-term polynomial turns over just past 10 mm; the
  production element presumably uses a differently bounded surface description.
- Semi-diameters of surfaces 3–9 and 11 remain ray-trace estimates 4–13 % above the figure rims.
- Glass names are catalog equivalents; the patent names none, and only L13 carries a printed θgF.
- The engine's paraxial half-field estimate (15.6°) exceeds the patent's 14.0° because the enlarged rear rims admit
  a larger image circle than APS-C; the format diagonal governs the analysis field.
