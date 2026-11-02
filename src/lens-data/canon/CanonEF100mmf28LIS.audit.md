# Audit Log - Canon EF 100mm f/2.8L Macro IS USM

Patent: US 7,864,451 B2, First Numerical Example

## 2026-06-25 - Canon folder patent audit

### Phase 1 - Glass corrections

- Rechecked the local patent PDF `patents/US7864451.pdf` and the existing analysis sidecar against the data file.
- No glass label changes were needed. The stored nd/vd pairs match the patent table and the OHARA-equivalent labels remain plausible catalog matches.
- High-index dense-flint and lanthanum rows (notably E3, E7, E8, E11, and E12) are already represented by their nd/vd values and roles; no separate high-index schema field exists.

### Phase 2 - Retained-information audit

- Confirmed the source note: the patent table prints full effective diameters, so the stored `sd` values are one half of the patent values.
- Retained the documented renderer guardrail reductions on surfaces 5 and 10; these do not change the optical prescription.
- Retained SP2 at surface 14 and the main aperture stop at surface 15.

### Phase 3 - Spectral / metadata enrichment

- No new patent line-index or partial-dispersion table was found.
- E4 remains `apd: "inferred"` from the S-FPL51 catalog material and Canon's one-UD production description.

## 2026-10-30 — Original-patent shape, concave-end and glass review

### Exact source and measurement boundary

The supplied original `patents/US7864451.pdf` is US 7,864,451 B2, granted 4 January 2011 to Canon, inventor Yoshiyuki Taki. The First Numerical Example corresponds to Figures 1A/1B on PDF page 2 (sheet 1 of 13): infinity and close focus. Its complete spherical surface table, effective diameters and 15 index/Abbe pairs are on PDF page 18, column 8; focal-length/aperture/image-height data and the infinity/−0.5×/−1× gap table continue on PDF page 19, column 9. Column 8 explicitly defines the d-line at 587.6 nm and Abbe number through F = 486.1 nm and C = 656.3 nm. Individual line indices or partial dispersions are not tabulated; defining the lines is not numerical spectral data.

Every page embeds a 2560 × 3300 one-bit raster at 300 ppi. Native-resolution figures and prescription crops were inspected; 600 ppi details were only 2× magnifications. In Figure 1A, approximately 1158 native pixels span 114.55 mm between the first and last vertices, or about 10.11 px/mm. Rim stroke picks carry about ±1–2 native pixels; approximate figure proportions raise practical semi-height uncertainty to approximately ±0.4 mm. Brackets, stop strokes, axis and image-plane marks were excluded.

### Element heights, bonded boundaries and concave ends

| Element(s) / surfaces | Disposition | Original-figure evidence and constraint |
|---|---|---|
| E1 / S1–S2 | Retained | Published effective diameters retained as clear caps; rounded connector is not a separate shoulder. |
| E2 / S3–S4 | Retained | Meniscus optical caps retained; no independently resolved vertical land exceeding stroke/proportion uncertainty. |
| E3 / S5–S6 | Adjusted at S6 | Source draws the concave rear cap ending below a taller outer edge. Preserve S6 clear 15.875 mm and extend its drawn radius to the retained front height 18.15 mm. |
| E4 / S7–S8 | Retained | Convex caps and connecting edges agree with the table/figure; no separate concave land. |
| E5 / S9–S10 | Constrained | A real rear shoulder is visible, but the S10 extension trial fails the existing gap guard. Preserve both optical caps and record that outline difference. |
| E6–E7 / S11–S13 | Adjusted at S11 | Source resolves a short outer shoulder on the concave object-side air face. Preserve S11 clear 12.355 mm and extend its drawn radius to 12.96 mm. The S12 bonded interface remains curved, with no opaque land. |
| E8 / S16–S17 | Retained | Small difference between source clear radii does not independently resolve an additional shoulder. |
| E9 / S18–S19 | Retained | Biconvex cap ends retained; small endpoint differences are within drawing uncertainty. |
| E10–E11 / S20–S22 | Retained | Bonded interface and two outer air caps remain connected without opaque interface lands. |
| E12–E13 / S23–S25 | Retained | IS doublet remains a connected bonded pair; concave ends do not independently resolve a land beyond the source clear caps. |
| E14 / S26–S27 | Retained | A geometrically valid S26 extension was rejected: magnified original shows the curve reaching its edge without a separate vertical shoulder. Valid geometry alone is insufficient evidence. |
| E15 / S28–S29 | Retained | Final biconvex element retains source half-diameters; no added shoulder. |

| Surface | Field | Before | After | Basis |
|---|---|---:|---:|---|
| S6 | `sd` | 15.875 mm | 15.875 mm | Clear cap preserved. |
| S6 | `rimExtensionSd` | absent | 18.15 mm | Resolved source shoulder, conservatively joined to the retained object-side height. |
| S11 | `sd` | 12.355 mm | 12.355 mm | Clear cap preserved. |
| S11 | `rimExtensionSd` | absent | 12.96 mm | Resolved source shoulder at the front of the cemented pair. |

The adopted outer heights retain the neighboring authored clear/compound heights rather than inflating every surface to an equal source-blank block. No opaque land is introduced at S12, S21 or S24. No hybrid layer, separate cement medium, source filter or rear plate appears in this selected prescription. No inferred cut or `rimCutDepthSource` exemption is authored.

Rejected trials and retained source/model differences:

- Literal S5 = 36.36/2 = 18.18 mm and S10 = 24.65/2 = 12.325 mm violate the existing S4–S5 and S10–S11 gap guards: approximately 1.43 > 1.422 mm and 3.95 > 3.870 mm respectively. Retain the previously documented 18.15/12.2 mm caps; this is a clear-aperture qualification, not an exact source-diameter claim.
- A source-shaped S10 outer extension to 13.595 mm intrudes 3.892 mm into the 4.300 mm gap, beyond the allowed 3.870 mm. It remains unmodeled. No guard is relaxed and no R/d value is tuned to admit it.
- S26 outer extension 15.695 mm passes geometry but lacks a separately resolved source shoulder and is rejected on source evidence.

The source R/d, d-line index/Abbe values, stops, aperture and endpoint focus gaps remain unchanged. The original also prints a −0.5× intermediate spacing row; the existing endpoint interpolation is retained and does not claim exact reproduction of that row. The source's focus-dependent SP2 diameter reduction is not numerically dimensioned, and the decentered IS motion does not constitute a full shifted/skew-ray clearance model.

Actual SVG outlines were compared with both source layouts. All 15 elements remain connected and finite, with no hidden cap trimming over the sampled focus range. The model's corner chief ray reaches the format corner throughout the sampled centered focus range; this is separate from source-outline resemblance and from a complete finite-object/three-dimensional validation.

### Glass review and public qualifications

All 15 modeled media match the original column-8 `nd`/`νd` pairs, including all members of the three cemented doublets. There are no authored per-lens `nC`, `nF`, `ng` or `dPgF` overrides to remove. All 15 compatible catalog curves remain active as **spectral proxies**; the source does not name those suppliers, melts or chemical compositions.

| Source pair `nd / νd` | Element(s) | Retained compatible proxy |
|---|---|---|
| 1.72916 / 54.7 | E1, E2, E10 | S-LAL18 |
| 1.80100 / 35.0 | E3, E8 | S-LAM66 |
| 1.49700 / 81.5 | E4 | S-FPL51 |
| 1.72047 / 34.7 | E5 | S-NBH8 |
| 1.53172 / 48.8 | E6 | S-TIL6 |
| 1.84666 / 23.9 | E7, E11, E12 | S-TIH53 |
| 1.61800 / 63.4 | E9 | S-PHM52 |
| 1.71999 / 50.2 | E13 | S-LAL10 |
| 1.61340 / 44.3 | E14 | S-NBM51 |
| 1.74320 / 49.3 | E15 | S-LAM60 |

E4's `apd: "inferred"` remains a qualified property of its compatible catalog proxy, with its note explicitly stating that the patent supplies no partial-dispersion/line-index evidence. No source APD designation is invented. Glass labels and the analysis now distinguish the compatible catalog model from historical glass identity, and the production correlation is qualified separately. The analysis also documents the two new shoulders, rejected trials, retained diameter/focus constraints and the distinction between source facts and sampled runtime results.

The structured example label remains the required normalized `Numerical Example 1`, id `1`; the original heading `FIRST NUMERICAL EXAMPLE` is retained in the public Example details and source prose.

## Runtime Launch Qualification - 2026-10-30

This is a runtime-only supplement to the dated source/shape/glass review above. No original PDF was reinspected for this supplement; source review dates, prescription values, controls and review counts remain unchanged. Earlier pupil/chief grids labeled near or close sampled **collimated rays through focus-adjusted geometry**. Those labels identify the control geometry, not finite-object illumination. Independently computed finite paraxial residuals and exact-working-f-number probes remain separate; the latter use the runtime distance-label object plane.

The explicit finite-object supplement samples 20 positive focus positions. The complete current ABCD matrix, including any rear plates, supplies the real Gaussian object plane. A paraxial entrance-stop seed and inverse chief solve target actual image heights 0, 10.8250 and 21.6500 mm; paraxial object-height scaling alone is not accepted as the actual image-edge solve. Geometric roots are solved before current-aperture classification. The 21.6500 mm edge is the viewer format corner, which may exceed the selected source's image height; these probes do not establish production illumination or source support for an inferred continuous cam.

Of 20 positive-real-object geometries, 60/60 target chiefs converge: 60 clear the current caps and 0 clip. Across the converged fields, 193 current-iris samples per field give 8,802 passed, 2,774 clipped, 4 failed and 0 unaimed rays. Minimum sampled axial transmission is 169/193. Failed traces are retained numerical/path outcomes, separately from clipping: `noBracket @ 2` (4). No clear aperture, R/d, stop, cam, tolerance or source field is altered to clear those diagnostics.

Selected current close geometries, with Gaussian conjugates and their exact aimed bundle counts:

| Zoom control | Aberration control | Gaussian object-to-image (m) | Distance label (m) | Axis / half / edge passing of 193 | Chief result          |
| -----------: | -----------------: | ---------------------------: | -----------------: | --------------------------------- | --------------------- |
|            0 |                  0 |                  0.297666509 |           0.300000 | 169 / 147 / 116                   | clear / clear / clear |

The largest sampled relative difference between a positive Gaussian object-to-image conjugate and its distance label is 66.519671% at zoom 0, focus 0.05, aberration control 0: Gaussian 2.008819742 m versus label 6.000000000 m. This is a first-order conjugate/control distinction, not a new production-distance measurement. Nominal infinity controls remain in their separate collimated checks; their small rounding residual is not converted into a finite-source claim.
