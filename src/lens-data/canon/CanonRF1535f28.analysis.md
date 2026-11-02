# Canon RF 15–35mm f/2.8L IS USM

## Patent Reference

**Patent:** US 2020/0257181 A1 (Gyoda, Canon Kabushiki Kaisha)

**Inventor:** Yuichi Gyoda

**Assignee:** Canon Kabushiki Kaisha

**Priority:** JP 2019-021356, February 8, 2019

**Published:** August 13, 2020

US 2020/0257181 A1, Yuichi Gyoda, Canon, Numerical Example 1, PDF pages 14–15 (printed pages 5–6). Figures 1A–1B on PDF page 2 show both zoom ends. The source design is 15.45/24.00/33.95 mm, f/2.91, with half-fields 54.47°/42.03°/32.51° and image height 21.64 mm. Retail focal-length and aperture markings remain distinct.

## Architecture

Sixteen glass elements form twelve air-separated components and five glass groups. The source separately counts the independently moving aperture stop as a zoom unit. Four cemented doublets are L6/L7, L8/L9, L10/L11 and L13/L14. The stop is source surface 14; B4 is the centered stabilization doublet. All optical radii, thicknesses, indices and source element focal lengths are retained.

There is no cover-glass or filter block in this example. Source S21 is a flare-cutting diaphragm, not glass. It remains omitted from the sequential prescription: its gap is combined with d20=3.52, yielding 10.56/4.79/2.47 mm between B4 and B5. The source telephoto d21=−1.05 places that diaphragm behind the next front vertex, which the current forward sequential model cannot represent as an ordinary gap. This preserves vertex spacing and paraxial power but does not preserve diaphragm clipping. Its published diameters 25.93/22.49/21.91 mm remain an explicit modeling follow-up; vignetting/flare results are not full reproductions of this source diaphragm.

## Element by element

| Element | nd / vd        | Source isolated focal length (mm) | Role                                                                               |
| ------- | -------------- | --------------------------------- | ---------------------------------------------------------------------------------- |
| 1       | 1.58313 / 59.4 | -28.51                            | Neg. Meniscus (2× Asph) singlet                                                    |
| 2       | 1.854 / 40.4   | -96.46                            | Biconcave Neg. (2× Asph) singlet                                                   |
| 3       | 1.59522 / 67.7 | -50.16                            | Biconcave Negative singlet                                                         |
| 4       | 1.85478 / 24.8 | 47                                | Biconvex Positive singlet                                                          |
| 5       | 1.84666 / 23.9 | 72.07                             | Biconvex Positive singlet; source B2 focus unit                                    |
| 6       | 1.92286 / 20.9 | -44.91                            | Negative Meniscus element of cemented doublet D1; source B2 focus unit             |
| 7       | 1.53172 / 48.8 | 45.2                              | Positive Meniscus element of cemented doublet D1; source B2 focus unit             |
| 8       | 2.00069 / 25.5 | -72.66                            | Negative Meniscus element of cemented doublet D2                                   |
| 9       | 1.53775 / 74.7 | 30.24                             | Biconvex Positive element of cemented doublet D2                                   |
| 10      | 1.92286 / 20.9 | 31.5                              | Positive Meniscus element of cemented doublet D3; centered B4 stabilization group  |
| 11      | 1.834 / 37.2   | -21.72                            | Biconcave Negative element of cemented doublet D3; centered B4 stabilization group |
| 12      | 1.497 / 81.6   | 40                                | Biconvex Positive singlet                                                          |
| 13      | 1.497 / 81.6   | 33.68                             | Biconvex Positive element of cemented doublet D4                                   |
| 14      | 2.0509 / 26.9  | -21.79                            | Biconcave Negative element of cemented doublet D4                                  |
| 15      | 1.854 / 40.4   | -93.22                            | Neg. Meniscus (2× Asph) singlet                                                    |
| 16      | 1.92286 / 20.9 | 87.31                             | Biconvex Positive singlet                                                          |

These individual focal lengths are explicitly published in the patent and are retained, rather than replaced by recalculation from rounded data. Catalog names are compatible counterparts with source nd/vd retained. Material identity, supplier, production coatings and chemistry are not established. Removed two inferred APD badges and unsupported coating/chemistry descriptions. No per-element partial-dispersion measurements are supplied.

## Aspheres and semi-diameters

All six source aspheres retain their K and A4–A14 terms. Restored the previously omitted A16 coefficients: S1 +2.16318e−23, S3 −2.43479e−21 and S27 −3.10043e−23. Paragraph 0061 defines the standard (1+K) base-sag convention. The former claim that the engine could not represent A16 is obsolete. At the published SDs these terms contribute approximately +2.34136 mm, −0.36070 mm and −0.000160 mm respectively; the old “3 μm maximum” assertion was wrong.

Restored the published effective diameters/2 throughout, subject to one explicit renderer margin: S3 SD=18.10 mm versus source 18.225 mm. With the full polynomial, source S2/S3 combined sag is 9.59 mm, exceeding the renderer's 90% clearance allowance 9.513 mm within the physical 10.57 mm gap. This is a clearance-policy margin, not proof that the source glasses intersect. All remaining source SDs are retained exactly. Figure 1 was inspected from the original; numerical diameters take precedence over contaminated automated windows around labels or adjacent elements.

## Zoom, focus and aperture

All three source zoom stations and variable gaps are retained. Camera-relative wide-to-tele motions are B1 +14.59, B2 −9.23, B3 −23.07, B4 −10.06 and B5 −18.15 mm. The stop moves independently of B3. Matrix EFL is 15.45054/24.00347/33.95268 mm; total tracks are 159.58/147.48/144.99 mm, with the middle differing 0.01 mm from the source summary. No gap is fitted to remove that rounding difference.

B2 (L5–L7) moves imageward for focusing, but finite-focus spacings are not published. Focus remains disabled and the 0.28 m label is retained retail metadata rather than a modeled conjugate. Stabilization remains centered.

The published iris diameters are 16.52/20.93/26.65 mm. They now directly supply physical radii 8.26/10.465/13.325 mm at the source stations; they are not inferred from nominal f-number. Intermediate iris sizes are interpolated. The first aperture preset is corrected to f/2.91; the existing f/22 upper limit remains a display setting. The shared data contract validates the schedule's length and positive finite radii and distinguishes it from the inferred iris option.

## Verification and limits

Surface and image-circle checks pass with the explicit S3 rendering margin. Source zoom stations have no hidden rim trimming. The omitted flare diaphragm, unavailable finite-focus travel and centered IS remain source-model limitations even when those checks pass.

## Sources

- Original local patents/US20200257181A1.pdf, Numerical Example 1, Figures 1A–1B, equation paragraph 0061 and source iris/flare-diaphragm tables.
- [US 2020/0257181 A1 patent record](https://patents.google.com/patent/US20200257181A1/en).
- Current local glass catalog for qualified compatible counterparts.

## 2026-10-30 — Scoped native-shoulder and runtime review

The completed **2026-09-09** source/shape/glass coverage remains the basis for every unchanged conclusion above. Canonical comparison against that reviewed raw configuration confirms identical optical surfaces, media, clear caps, source aspheres, three zoom stations and controls after schema conversion, excluding only example-provenance metadata. Today's reopening addresses reproducible missing outer shoulders in the actual SVG and documents current runtime behavior; it does not relabel the earlier source inspection date. The metadata example label is normalized to **Numerical Example 1**, matching the printed NUMERICAL EXAMPLE 1 heading on PDF page 14 / printed 5.

The same original US 2020/0257181 A1 is independently identified on its first page. Its complete Surface data table and first four aspheres are PDF page 14 / printed 5; the remaining two aspheres, Various data, effective iris/flare diameters and isolated focal lengths are PDF page 15 / printed 6. Paragraph 0060 explicitly defines d=587.6 nm, F=486.1 nm and C=656.3 nm and the d-line Abbe formula; paragraph 0061 defines the standard (1+K) conic. All 16 index/Abbe pairs agree with the current file. All 16 existing compatible catalog curves remain qualified spectral proxies, with no per-lens C/F/g or partial-dispersion overrides and no inferred APD flags. No source filter, rear plate, hybrid resin layer or extra glass medium is present. Historical supplier, melt and chemistry remain unresolved.

Figures 1A/B on PDF page 2 / sheet 1 resolve two straight outer strokes beyond existing optical caps. The original is a 2560×3300 one-bit raster at native 300 ppi; 600 ppi viewing would only double its pixels. The section measures about 11.1 pixels/mm vertically and 11.0 pixels/mm axially, with adopted shoulder uncertainty **±0.6 mm**. Leaders, the unit brackets, stop lines, motion arrows and PLL labels are excluded. S2A retains clear `sd=18.92` and gains `rimExtensionSd=27.52`; S4A retains clear `sd=15.74` and gains outer 18.10, conservatively anchored to the retained S3 clear cap (source S3 effective diameter/2 is 18.225, with the existing rendering margin described above). Both strokes are symmetric and remain attached to their curved caps in the SVG. All other cap and bonded-interface geometry remains unchanged; weak rear curves and adjacent boundary/leader ink do not independently resolve another shoulder. No inferred cut or bonded-interface land is added.

Rejected alternatives are explicit. Treating the S2A blank as clear sd 27.52 produces an 89.0° aspheric rim slope, beyond the unchanged 64.2° guard. Increasing S4A's clear cap to 18.10 passes geometric checks but contradicts its printed effective diameter 31.48 mm; the drawing's blank is not a larger clear aperture. Restoring S3 to source 18.225 repeats the known 9.59 mm cross-gap sag versus the 9.513 mm renderer allowance in the physical 10.57 mm gap at every zoom. The retained S3=18.10 margin and every numerical R/d, full asphere, published stop radius, cam and preset remain unchanged.

The source's dedicated **Effective diameter data** table gives physical Fno-stop diameters 16.52/20.93/26.65 mm at all three source stations; this is a station tuple, not an isolated generic effective-diameter cell. Its existing radii 8.26/10.465/13.325 remain authoritative. A geometry-identical 65-position diagnostic preserves every current z and sd, including current iris, exactly. The paraxial/admitted-beam aperture census is within 3% at **11/65** states: wide/middle pass, tele gives f/2.791057 versus stated 2.91 with source S17 limiting; 53 intermediate states have the published-iris convention discrepancy, worst −5.601269%. Exact aimed-rim working f-number uses a different convention: source wide/middle trace at **2.909700/2.909847**, essentially reproducing 2.91, while tele is vignetted at S11 and has no numeric result. Across 65 zooms and all seven aperture presets, 454/455 exact-working calls trace and one tele wide-open call is vignetted; classifications are identical before and after the outline-only change. No iris is fitted to either numerical criterion.

All 65 format-corner chiefs reach at least 99% of the declared format. Independent bounding-sphere vector launches at printed source half-fields 54.47°/42.03°/32.51° reach image heights 20.884283/22.015042/22.210586 mm without clipping, versus source Y=21.64 mm; these rounded source-field/model differences remain qualified, without an invented projection or coefficient correction. Current-state 193-point pupil samples over 65 zooms and four fields retain source axial counts 193/193/169 and corner counts 98/136/132. Omitted source flare-stop clipping is still unavailable, so these are sampled runtime clearances rather than a full source-illumination reproduction.

At the three source infinity stations, back-focus residuals are −0.000209/+0.004311/+0.002639 mm. Sparse-station linear interpolation is illustrative: zoom 0.28125 gives EFL 19.167711 versus displayed 20.259375 mm and a **−1.632517 mm** image-plane residual. It is not a source-certified continuous zoom cam. Finite focus remains disabled and IS centered. Across the 65 available states, all 1,040 rendered paths are finite, closed and connected, with zero hidden renderer trimming. The source-backed outlines, sampled runtime transmission and production correlation remain separate conclusions.

### Fully dimensioned flare plane — rejected restoration and representation limit

The original's **Effective diameter data** table, PDF page 15 / printed 6, explicitly gives source flare row 21 diameters **25.93/22.49/21.91 mm**, hence clear radii **12.965/11.245/10.955 mm**. The Surface data on PDF page 14 / printed 5 puts it after fixed d20=3.52 mm, followed by d21=**7.04/1.27/−1.05 mm** at wide/middle/tele. These values are unambiguous source evidence. The current combined d20+d21 intervals remain 10.56/4.79/2.47 mm and preserve every glass vertex.

A literal restoration trial inserts the flat source row and splits those intervals without changing any glass R/d, iris tuple or aggregate spacing. Ordinary sequential validation rejects its tele `gaps["21"].values[2][0]` and `[2][1]`: thickness −1.05 is negative. Physically, the tele plane lies 1.05 mm imageward of the next glass front vertex, while its opaque outer annulus can sit objectward of that curved face at the opening edge. Reordering the refraction to remove the signed step would change the source path. Independently, the current surface schema offers one scalar `sd`; station schedules address the primary iris only, so it cannot represent the secondary flare radii as published. A diagnostic wide-radius value only isolated the first validation failure; it is not an adopted constant substitute for the tuple.

The source original remains usable and fully reviewed. These are explicit **source-model representation limitations**. The numerical prescription, source iris and combined spacings are retained; no refraction is reordered, no constant flare radius is invented, and no engine guard is relaxed. Revalidated current aperture, pupil, vector, SVG and working-f-number outcomes remain those reported above. A generic engine follow-up must support this source-positioned secondary aperture and its independent schedule before full source-illumination fidelity can be claimed.
