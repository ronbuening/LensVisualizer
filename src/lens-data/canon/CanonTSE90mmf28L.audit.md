# Audit Log - Canon TS-E 90mm f/2.8L Macro

Patent: JP 2018-205474 A, Numerical Data 1 (Yamagishi / Canon)

## 2026-06-23 - Patent geometry and glass review

### Source note

- The exact cited patent PDF was not present in the untracked local `patents/` folder during this pass, so the official Google Patents PDF was fetched to `tmp/pdfs/JP2018205474A.pdf` for direct review.
- The first patent figure was checked against the data-file layout: L1a/L1b/L1c before the stop, aperture stop after surface 11 and before surface 13, rear L2 group, and image plane order all match.

### Retained-data audit

- Confirmed Numerical Data 1 surface rows 1-21 against the data file after the documented 90 / 55.986 scale factor: radii, spacings, nd, vd, stop spacing, variable d17/d21, focal length 55.99 mm patent scale, F-number 2.91, image height 21.60 mm, total length 83.72 mm, and BF 44.70 mm.
- Confirmed the patent does not publish effective diameters for Numerical Data 1. The data-file SDs therefore remain reconstructed renderer-safe values, not primary-source clear apertures. Examples 2 and 3 do publish effective diameters, and they were used only as a scale sanity check.

### Glass corrections

| Element | Before                    | After             | Justification                                                                                                                                                                                |
| ------- | ------------------------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| L6      | `S-NBH52V (OHARA)`        | `S-NBH52 (OHARA)` | Patent row 10 gives nd=1.67300, vd=38.1. Catalog S-NBH52 round-trips the 673382 pair more directly than S-NBH52V.                                                                            |
| L10     | retained `S-BAL3 (OHARA)` | retained          | Patent row 18 gives nd=1.57135, vd=53.0. The label is numerically plausible, but no current local Sellmeier catalog entry resolves S-BAL3; the analysis now states this fallback explicitly. |

### Analysis sync

- Updated the L6 prose and glass table from S-NBH52V to S-NBH52.
- Updated the L10 prose/table/source note so S-BAL3 is not described as a resolved local-catalog match.

## 2026-10-30 — Scoped original shape, glass and control-state review

- This reopening checks resolved rim evidence, a reproducible finite axial clip, public material qualifications and runtime coverage. The June 23 review remains dated history; it is not a separate reused-entry count.
- Exact local original: `patents/JP_2018205474_A.pdf`, SHA-256 `b30d3841cddf2a1e212e904a9481434e39c39bcf54acb0c6da9aaf5ade937eed`. First page confirms JP 2018-205474 A, Canon/Yamagishi and December 27, 2018. Numerical Data 1, paragraphs 0045–0048, PDF/printed pages 8–9: all rows 1–21, eleven nd/νd pairs and both d17/d21 stations checked directly. Table 1 and Figures 1–2(A)/(B) are on page 11; paragraph 0019 page 5 defines d 587.6 nm and g 435.8 nm. No selected effective diameters, individual line indices, partials/APD, hybrid layer, filter, rear plate or asphere is published.
- Native raster 1653 × 2338, one bit, 200 ppi. Nearest-neighbor 3×/6× crops add no detail. About 488 pixels over retained 134.615790 mm track gives 3.6 px/mm; practical semi-height uncertainty about ±1 mm. All eleven elements, concave ends and both cemented interfaces checked, excluding leaders, brackets, axis and movement arrows. Other examples' diameter columns are not adopted.
- Adopt S2 outer shoulder 17.6 mm, preserving clear 16.8 mm, for the native connected rear outer stroke. Adopt S17 clear 14.5→14.55 mm: the source-near Gaussian axial bundle needs 14.51631953 mm there, while the old cap clips 24 of 193 samples. This small change is within native uncertainty and below the retained S16 cap 14.8 mm. All other clear caps remain; no cuts or exemptions.
- Reject S4/S5 full-cap trial 17.3/17.1 mm: combined sag 2.33 mm exceeds unchanged 1.982 mm allowed intrusion in the 2.202 mm gap. Weak adjoining ink does not resolve independent shoulders. A larger S16/S17 15.5 mm diagnostic is unnecessary; the adopted S17 change is minimal. No opaque bonded lands, resin wings or unsupported equal-height blocks. Every source R/d, index/Abbe pair, stop and focus/aperture/perspective control is protected.
- Table 1 prints f55.986 mm, directly supporting retained 90/55.986 scaling; page 9 summary is 55.99 mm. Design metadata becomes the scaled printed 90.00 mm; computed EFL remains 89.963158 mm. Example term becomes Numerical Data 1. Literal track 83.74 versus summary 83.72 mm and computed f55.963 versus Table 1 55.986 mm remain unresolved in structured source.errata, without fitting.
- All eleven compatible curves now resolve, including S-BAL3; the earlier June 23 no-curve statement remains historical. Labels and analysis qualify every curve as a spectral proxy, with supplier, melt and chemistry unidentified. No authored spectral override existed to remove; none added. No published partial or APD badge. Numeric source pairs unchanged.
- Standard surface, image-circle, aperture and field audits pass: one infinity station within 3% and at least 99% field coverage. Full 65-focus ×9-preset working grid: 585/585 traced, versus 583/585 before (two S17 vignettes). Infinity/near display-plane working values 2.932362979/4.207966883 are separate from nominal source plot Fno2.91. Derived iris 12.7349561568 mm is retained; source supplies no physical diameter/schedule.
- Collimated control-grid axis bundles all pass 193/193; infinity/full-field 139/193 and near/full-field 161/193 versus 159 before. These are not finite-object illumination. Separate source 21.1° bounding-sphere vector chief clears all 21 surfaces and lands at |Y|34.699634 mm versus source-scaled 34.722966 mm.
- Explicit Gaussian finite-object supplement: 64 positive focus states ×3 actual image-height targets, 192/192 chief roots clear. Pupil results 30,087 passed /6,253 clipped /716 no-bracket continuations /0 unaimed. Every axial bundle now passes 193/193, versus near 169/193 before. Source-near axis/half/full fields pass 193/166/128, with one failed marginal continuation at full field. No speculative inflation for unresolved marginal continuations or off-axis vignetting.
- Source-near Gaussian total 0.401099738 m and magnification −0.500613520 differ from display 0.39 m; display-plane residual +2.971004838 mm, infinity −0.034956482 mm. Worst sampled interpolation residual −8.531333501 mm at focus 0.59375 (Gaussian 0.510800277 m/display 0.656842105 m); maximum relative label discrepancy 54.420081% at focus 0.015625. Sparse source stations do not certify interpolation or a production cam.
- Movement grid: 75 rigid poses, 375 sensor targets; 373 usable chiefs and two unresolved after 512-bracket/80-iteration retry. Physical rays: 55,543 clear /14,788 clipped /1,658 failed /0 unaimed. Separate sensor classification: 23,979 usable /33,222 missed-sensor samples. These launches are collimated directions through adjusted rigid geometry, not finite moved-object fields. Unmeasured fallback hinge and extreme-motion limits remain explicit.
- Actual centered/moved SVG comparison: 65 centered plus 75 posed states, 1,540 finite/closed/connected element paths, zero hidden trim. Detailed source, shape, glass, runtime and production qualifications are synchronized in the analysis. Scratch `/tmp/canon-c/tse90-*` evidence is not staged; coordinator owns shared reports and full gates.
