# Canon EF 35mm f/1.4 L USM Audit

## 2026-10-30 — Original-PDF shape and glass review

Directly inspected `patents/JP_H11211978_A.pdf`, JP H11-211978 A, published August 6, 1999, Yasunori Murata / Makoto Misaka / Canon Inc. SHA-256: `5a6080f5d3627cbcfb6a5d98816ac6f35acdf7a8a86d5712c7fa05ca3113ce7c`. Numerical Example 1, PDF page 5, prints all R/d and eleven medium pairs, the S17 asphere and focus Table 1. Paragraph 0030 / PDF page 4 defines the prescription notation; ¶0031 gives the asphere convention. Figure 1 is PDF page 8; Figure 6(A/B), PDF page 10, gives infinity/300 mm aberrations. Paragraphs 0011/0013 on PDF page 3 define the two focus states and fixed L1 / moving L2 and L3, with the stop traveling with L3. The conditional Table-1 on PDF page 7 is distinct from focus Table 1 on page 5.

The original embeds twelve 1656 × 2339 one-bit pages at native 200 ppi. Native figures and tables were inspected; enlarged viewing is magnification only. Approximately 379 native pixels span the 85.64 mm optical stack in Figure 1, about 4.43 px/mm. Practical inferred cap-height reading uncertainty is approximately ±1.5 mm; larger schematic differences and conservative cap anchors are separate qualifications. Brackets, motion arrows, the fixed-support symbol, leaders and stop symbol are excluded. Neither a production filter dimension nor another drawing substitutes for the original.

### Retained source correction, independently formalized

The native Example 1 cell visibly prints r11 = +72.820 mm. The existing model already uses −72.820 mm; this review changes no numerical radius. The correction is now recorded in all required places: header, inline surface comment, structured corrected `source.errata`, analysis and this audit.

Two independent original evidence kinds support the retained sign:

| Original evidence kind |      Printed +72.820 mm |      Applied −72.820 mm | Source requirement                                                            |
| ---------------------- | ----------------------: | ----------------------: | ----------------------------------------------------------------------------- |
| `source-summary`       | System EFL 26.892639 mm | System EFL 34.294832 mm | Numerical Example 1 heading, PDF page 5, f = 34.3 mm                          |
| `claims`               |   L2b EFL +52.755075 mm |  L2b EFL −277.776682 mm | Claim 1, PDF page 2, explicitly requires negative L2b; ¶0012 repeats its sign |

The source claim is an actual structural condition violated by the printed radius, not an invented condition or product comparison. Multiple paraxial implementations are verification methods, not different source evidence kinds. No family publication, previous note or catalog glass supplies the replacement. The applied correction is retained separately from new shape/glass work.

### Shape disposition and retained constraints

All eleven elements, every concave end, cemented interfaces S12/S16 and the single S17A asphere were inspected. The source does not publish clear diameters. Four inferred clear-cap fields now follow the original contour:

| Surface(s) | Earlier clear sd |           Reviewed clear sd / outer rim | Disposition                                                                            |
| ---------- | ---------------: | --------------------------------------: | -------------------------------------------------------------------------------------- |
| S2         |          22.0 mm | clear 22.0 mm; `rimExtensionSd` 25.0 mm | Resolved rear shoulder of first negative meniscus; conservative existing S1 cap anchor |
| S3 / S4    |   21.5 / 20.5 mm |                          23.0 / 23.0 mm | Second negative meniscus's resolved common height and curved rear cap                  |
| S9         |          18.5 mm |                                 17.0 mm | Weak negative E5 follows common source height with existing S10 cap                    |
| S15        |          13.5 mm | clear 13.5 mm; `rimExtensionSd` 14.2 mm | Resolved front shoulder of rear doublet; conservative existing bonded-cap anchor       |
| S21        |          22.0 mm |                                 18.0 mm | Final meniscus's curved cap follows the source height and existing S20 cap             |

Two shoulders and zero inferred cuts are authored. All current R/d, asphere coefficients, stops and source focus endpoint gaps remain; no equal-height block is invented at either bonded interface. No separate resin/hybrid layer, cement medium, source filter or rear plate is tabulated.

A larger S2 optical cap trial at 23.5 mm, suggested by the schematic curved outline, is rejected: S2→S3 intrusion is 6.72 mm against 6.219 mm allowed in the 6.910 mm printed gap. The 22.0 mm optical cap remains and the visible outer blank is handled separately. Full bonded blanks are not expanded through their curved interfaces. The near-flat S13 and continuous S6/S8/S17A/S19 profiles do not independently resolve further shoulders at this native scale. These are inferred optical caps and conservative outer anchors, not a mechanical blank measurement.

The source asphere table gives R = −65.3464 mm, K = +2.39046 and B/C/D values mapped to A4/A6/A8; the main row rounds R to −65.346. Its separate quadratic A is printed zero. The equation contains E·y^10 but Example 1 does not print E. The existing A10 = 0 remains an explicit modeling assumption, not a source zero or a newly corrected coefficient. A12/A14 are schema completion beyond the printed equation. This underdetermined higher term qualifies source/profile fidelity; it is not silently fitted to the figure or runtime rays.

### Every modeled medium

Paragraph 0030 defines Ni and νi without naming a spectral reference. The complete source supplies d/g/C aberration labels as context but does not independently link those prescription coordinates to a d-line. Every numeric pair and the current d-line convention remain with `indexReferenceNote` explaining the approximation; every medium is Unmatched. This qualifies source uncertainty, not a claim that conventional d inference is wrong.

| Elements  | Source index / Abbe | Prior conditional comparison   | Current disposition |
| --------- | ------------------: | ------------------------------ | ------------------- |
| E1 / E2   |      1.58313 / 59.4 | 583594/595 class               | Unmatched           |
| E3 / E4   |      1.71300 / 53.8 | 713538/539/540 class           | Unmatched           |
| E5        |      1.51633 / 64.2 | 516641/642 class               | Unmatched           |
| E6 / E9   |      1.83481 / 42.7 | 835427 class                   | Unmatched           |
| E7        |      1.63980 / 34.5 | S-TIM27 coefficient comparison | Unmatched           |
| E8        |      1.80518 / 25.4 | 805254/255 class               | Unmatched           |
| E10 / E11 |      1.77250 / 49.6 | 773496 class                   | Unmatched           |

Eleven previously active catalog curves are disabled. No C/F/g indices, relative partial-dispersion values or APD evidence are published or authored; no genuine source spectral value or per-lens override is removed. Prior classes/names remain disabled conditional comparisons, not evidence of historical supplier, melt, chemistry or manufacturing route. Data labels, every per-element glass claim and the consolidated analysis agree. No source APO claim is made.

### Focus, beam and actual SVG verification

Surface, image-circle, infinity aperture-census and full-frame corner-field checks pass. The stop stays derived/paraxial at the published nominal f/1.45, radius 12.592601 mm; a source physical iris diameter is not printed. Actual aimed working f-number is 1.457525 at infinity, 1.522935 at focus 0.5 and 1.588318 at the published close configuration. Finite-conjugate working values are separate from the nominal aperture control.

Across 21 focus positions and nine apertures all 189 working-ray calls trace; baseline/candidate values are identical. An aimed 193-point circular-pupil probe at axial, half-field and corner fields over all 21 positions traces every axial sample, and every chief is aimed/valid. Off-axis vignetting remains: infinity corner count 91→86 of 193; close count 125→123. Source-height refinement is not presented as full-pupil production illumination. Source supplies two endpoint gap sets, while intermediate positions remain linear interpolation rather than a complete measured cam. The computed rear gap preserves one fixed image plane and is not a printed BF row.

Actual infinity, mid and close-focus SVGs were compared with Figure 1. Twenty-one states produce 231 finite, singly connected, closed element paths with zero hidden trimming; corner aiming reaches about 21.65 mm. No inferred cut requires a beam exemption or cut probe. Source fidelity, sampled runtime behavior, the unprinted E/A10 assumption, unspecified spectral reference and production correlation remain separate conclusions.

## Runtime Launch Qualification - 2026-10-30

This is a runtime-only supplement to the dated source/shape/glass review above. No original PDF was reinspected for this supplement; source review dates, prescription values, controls and review counts remain unchanged. Earlier pupil/chief grids labeled near or close sampled **collimated rays through focus-adjusted geometry**. Those labels identify the control geometry, not finite-object illumination. Independently computed finite paraxial residuals and exact-working-f-number probes remain separate; the latter use the runtime distance-label object plane.

The explicit finite-object supplement samples 20 positive focus positions. The complete current ABCD matrix, including any rear plates, supplies the real Gaussian object plane. A paraxial entrance-stop seed and inverse chief solve target actual image heights 0, 10.8250 and 21.6500 mm; paraxial object-height scaling alone is not accepted as the actual image-edge solve. Geometric roots are solved before current-aperture classification. The 21.6500 mm edge is the viewer format corner, which may exceed the selected source's image height; these probes do not establish production illumination or source support for an inferred continuous cam.

Of 20 positive-real-object geometries, 60/60 target chiefs converge: 60 clear the current caps and 0 clip. Across the converged fields, 193 current-iris samples per field give 9,301 passed, 2,279 clipped, 0 failed and 0 unaimed rays. Minimum sampled axial transmission is 193/193. No clear aperture, R/d, stop, cam, tolerance or source field is altered to clear those diagnostics.

Selected current close geometries, with Gaussian conjugates and their exact aimed bundle counts:

| Zoom control | Aberration control | Gaussian object-to-image (m) | Distance label (m) | Axis / half / edge passing of 193 | Chief result          |
| -----------: | -----------------: | ---------------------------: | -----------------: | --------------------------------- | --------------------- |
|            0 |                  0 |                  0.299794800 |           0.300000 | 193 / 173 / 120                   | clear / clear / clear |

The largest sampled relative difference between a positive Gaussian object-to-image conjugate and its distance label is 33.724995% at zoom 0, focus 0.05, aberration control 0: Gaussian 3.976500274 m versus label 6.000000000 m. This is a first-order conjugate/control distinction, not a new production-distance measurement. Nominal infinity controls remain in their separate collimated checks; their small rounding residual is not converted into a finite-source claim.

## 2026-10-31 — d-line inferred from printed coordinates

Scope: reference-line classification and catalog curves only. No source pair, geometry, rim, stop or control changed, and no new whole-lens review is claimed.

The patent names no spectral line for its index and Abbe columns, and the 2026-10-30 review marked every medium `Unmatched` for that reason. Under the coordinate test in `src/lens-data/LENS_DATA_SPEC.md`, 11 of 11 printed pairs match a catalog nd/νd within |Δn| ≤ 6e-5 and |Δν| ≤ 0.15, and none matches a catalog ne/νe. The table is therefore read as d-line, and the per-element `indexReferenceNote` fields are removed.

11 media carry qualified catalog curves. Rows keep the earlier selection where it is still an exact match. Catalog-copied C/F/g indices and dPgF stay removed. Supplier, melt and chemistry stay unspecified.

| Element | Printed n / ν | Curve | Δn | Δν |
| --- | --- | --- | --- | --- |
| Element 1 | 1.58313 / 59.4 | J-SK12 | +0.000000 | +0.020 |
| Element 2 | 1.58313 / 59.4 | J-SK12 | +0.000000 | +0.020 |
| Element 3 | 1.713 / 53.8 | N-LAK8 | +0.000003 | +0.032 |
| Element 4 | 1.713 / 53.8 | N-LAK8 | +0.000003 | +0.032 |
| Element 5 | 1.51633 / 64.2 | S-BSL7 | -0.000000 | -0.058 |
| Element 6 | 1.83481 / 42.7 | J-LASF05 | +0.000000 | +0.033 |
| Element 7 | 1.6398 / 34.5 | S-TIM27 | -0.000001 | -0.034 |
| Element 8 | 1.80518 / 25.4 | N-SF6 | +0.000000 | -0.040 |
| Element 9 | 1.83481 / 42.7 | J-LASF05 | +0.000000 | +0.033 |
| Element 10 | 1.7725 / 49.6 | J-LASF016 | +0.000000 | +0.020 |
| Element 11 | 1.7725 / 49.6 | J-LASF016 | +0.000000 | +0.020 |
