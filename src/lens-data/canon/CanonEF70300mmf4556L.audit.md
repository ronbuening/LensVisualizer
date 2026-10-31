# Audit Log - Canon EF 70-300mm f/4-5.6L IS USM

Patent: JP 2013-140404 A, Numerical Example 1

## 2026-06-25 - Canon folder patent audit

### Phase 1 - Glass corrections

- Rechecked the local patent PDF `patents/JP2013140404A.pdf`, data file, and analysis sidecar.
- No glass label changes were needed. The patent nd/vd rows match the current catalog-equivalent labels, including the explicitly documented KZFS-class L2 short flint.
- High-index rows remain correctly represented by their nd values and dense-flint / lanthanum labels.

### Phase 2 - Retained-information audit

- Confirmed the patent table has a `有効径` column. The stored `sd` values are half of those full effective diameters, matching the file header.
- Retained the existing infinity zoom variables and absence of close-focus spacings; the patent does not publish a separate close-focus prescription.

### Phase 3 - Spectral / metadata enrichment

| Element | Field             | Before  | After      | Justification                                                                                     |
| ------- | ----------------- | ------- | ---------- | ------------------------------------------------------------------------------------------------- |
| L3      | `apd` / `apdNote` | omitted | `inferred` | S-FPL51 UD fluorophosphate element; analysis and Canon production specs identify two UD elements. |
| L7      | `apd` / `apdNote` | omitted | `inferred` | Second S-FPL51 UD element in the positive relay unit.                                             |

- Retained L2 `apd: "patent"` and `dPgF: -0.00599` from patent condition (8).

## 2026-10-30 — Original-PDF shape and glass review

The exact original `patents/JP2013140404A.pdf` was inspected directly (SHA-256 `ac968dfb54b41045142b04d7ea506dd439e34fc6b25435ce1db09f007a39a275`). Front page: JP 2013-140404 A, published 2013-07-18, Shigenobu Sugita / Canon Inc. Numerical Example 1 (`数値例1`) spans PDF pages 13–14 and corresponds to Reference Example 1 (`参考例1`, paragraph 0061, PDF page 11). Figure 1 is the matching wide section on page 21; Figure 2(a)/(b), page 22, supplies wide/tele aberrations, with Fno. 4.2 and 5.86. The middle 4.67 is printed in the page 14 summary. Figure 3 on page 23 is the tele L1 decenter study, not an IS displacement control. No alternate publication or example is substituted.

The 2026-06-25 source/label notes above retain their actual date. This review checks the full shape and current runtime and narrows historical chemistry claims; it does not redate those older conclusions. The older fluorophosphate wording is a catalog-family inference, not a source chemistry determination.

### Source scale and shape

Figure 1 is a native 953 × 514 JPEG at 150 ppi. The prescription/effective-diameter tables are vector text; their rendered inspection at 200 ppi does not increase the figure's native detail. The section is approximately 4.6 native px/mm against the printed track and first clear cap, with practical ±0.6 mm rim uncertainty from JPEG/broad-stroke boundaries. Enlarged crops are viewing aids only. Unit bars, SP/IP leaders, zoom arrows and the axis are excluded. Raster stair-steps are not physical cuts.

Every element, concave end, cemented interface and source cap was checked. The source supplies full effective diameters (`有効径`) and paragraph 0058 explicitly defines the ray-effective diameter; all 33 optical caps retain exactly half their printed values. S16/STO's 24.40 mm generic entry is preserved as source envelope evidence, with existing derived iris authority retained separately.

| Element | Source surfaces | Clear caps, mm  | Shape disposition                                                               |
| ------- | --------------- | --------------- | ------------------------------------------------------------------------------- |
| L1      | 1 / 2           | 28.5 / 28.2     | Retain weak rear surface; no resolved separate shoulder                         |
| L2      | 3 / 4           | 27.41 / 25.825  | Retain source unequal bonded caps; no opaque interface land                     |
| L3      | 4 / 5           | 25.825 / 25.375 | Retain weak concave rear; taller plain blank lacks a reliable cap/land junction |
| L4      | 6 / 7           | 12.2 / 11.85    | Retain both concave caps; small discrepancy is within native uncertainty        |
| L5      | 8 / 9           | 11.85 / 12.26   | Retain concave front and cemented cap                                           |
| L6      | 9 / 10          | 12.26 / 12.35   | Retain interface and rear cap                                                   |
| L7      | 11 / 12         | 13.065 / 13.06  | Retain both caps and d12 = 0.15 air                                             |
| L8      | 13 / 14         | 12.715 / 12.435 | Retain front and cemented interface                                             |
| L9      | 14 / 15         | 12.435 / 12.2   | Retain interface and rear; source cap remains the dense interpolation limiter   |
| L10     | 17 / 18         | 11.4 / 11.735   | Retain concave front and bonded cap                                             |
| L11     | 18 / 19         | 11.735 / 11.8   | Retain bonded front and rear                                                    |
| L12     | 20 / 21         | 12.6 / 12.805   | Retain concave front; no unsupported equal-height block                         |
| L13     | 22 / 23         | 12.9 / 12.86    | Retain cap and cemented interface                                               |
| L14     | 23 / 24         | 12.86 / 12.95   | Retain interface and rear                                                       |
| L15     | 25 / 26         | 12.945 / 12.8   | Retain both caps and d24 = 0.15 air                                             |
| L16     | 27 / 28         | 12.325 / 11.97  | Retain concave rear; small difference remains within uncertainty                |
| L17     | 29 / 30         | 12.23 / 12.395  | Retain concave front and rear cap                                               |
| L18     | 31 / 32         | 12.15 / 12.8    | Add S31 outer shoulder 12.8, preserving clear 12.15                             |
| L19     | 33 / 34         | 14.145 / 14.315 | Retain final positive caps                                                      |

The S31 outer stroke continues beyond the curved front optical cap and connects to the native outer rim. Its own rear cap anchors conservative 12.8 mm outer height. No source dimension for that shoulder is claimed. No source clear aperture, R/d, gap, stop or control changes. No new bonded-interface lands, resin wings, unsupported equal-height blocks or inferred cuts. There is no hybrid layer, source filter or rear plate.

Rejected shape interpretations: the taller L2/L3 outer rectangle does not justify extending the bonded S4 optical face or enlarging printed S5 clear diameter; the weak rear curvature does not resolve a distinct cap/land transition. Subpixel/two-pixel discrepancies at S7/S8, S17, S20 and S28 are not enough to set additional outer dimensions. Published S15 must not be enlarged to remove intermediate reconstruction clipping. No geometric guard is relaxed.

### Glass and source qualifications

All 19 source nd/νd pairs were checked against the rendered original tables, including every cemented component. Paragraph 0058, PDF page 11, explicitly defines the d-line reference. Paragraph 0055, PDF page 10, names d = 587.6 nm and g = 435.8 nm for aberration plots. No individual C/F/g material indices are published or authored.

| Elements | Source nd / νd | Qualified proxy          |
| -------- | -------------- | ------------------------ |
| L1       | 1.48749 / 70.2 | S-FSL5                   |
| L2       | 1.61340 / 44.3 | N-KZFS4-compatible class |
| L3, L7   | 1.49700 / 81.5 | S-FPL51                  |
| L4       | 1.83481 / 42.7 | S-LAH55V                 |
| L5       | 1.63854 / 55.4 | S-BSM18                  |
| L6, L14  | 1.84666 / 23.8 | S-TIH53                  |
| L8, L13  | 1.60311 / 60.6 | S-BSM14                  |
| L9       | 1.85026 / 32.3 | S-LAH71                  |
| L10      | 1.70154 / 41.2 | S-BAH27                  |
| L11, L17 | 1.80518 / 25.4 | S-TIH6                   |
| L12      | 1.69680 / 55.5 | S-LAL14                  |
| L15      | 1.77250 / 49.6 | S-LAH66                  |
| L16, L18 | 1.88300 / 40.8 | S-LAH58                  |
| L19      | 1.69895 / 30.1 | S-TIM35                  |

All 19 catalog-compatible curves remain qualified spectral proxies; none is disabled. Every historical supplier, melt, chemistry, cement, coating and manufacturing identity remains unresolved. Public labels and prose now state that distinction. L3/L7 retain production-correlated inferred UD tags, with no source APD number or fluorophosphate chemistry claim.

L2's `dPgF: -0.00599` and patent APD tag are genuinely source-supported. Paragraph 0051 (PDF page 9) prints condition (8), θgF − 0.6438 + 0.001682νdN; Table 1 (page 20), numerical-example row 1, prints −0.00599. With printed νdN = 44.3, the algebraic implied θgF is 0.5632974. That is derived from printed terms, not another measured line-index set. Preserve the exact published normal-line expression/deviation; no catalog-derived per-lens overrides are removed or added. Catalog consistency and current resolution were checked.

New unresolved source erratum: paragraphs 0052 and 0059 define total length to the final lens surface, but 185.20 / 214.53 / 239.20 mm and Table 1 condition (9) = 0.825 numerically include BF. Literal first-to-final-lens sums are 138.46 / 166.71 / 181.79 mm. The cause is not isolated; all R/d/BF and summary values remain literal. Header, structured `source.errata` and analysis disclose this definition mismatch separately from shape/glass. No source-data correction is claimed.

### Current runtime, all states and SVG

Surface validator passes; image-circle audit reports zero undersized lenses. Source-station aperture-census f-numbers are 4.200000 / 4.670000 / 5.860000. Existing derived physical iris radii are 11.658727 / 12.049027 / 12.016189 mm. The single generic 24.40 mm stop effective diameter does not prove a physical station schedule. Independent real working iris-rim values are 4.218162 / 4.699177 / 5.895946, using 1/(2 n′ sin θ′), distinct from the census's paraxial-reference beam convention.

A 65-position diagnostic clone matches actual runtime z/sd at all sampled zooms and focus 0/0.5/1 (maximum difference zero). All 65 full-frame corner chiefs clear; field coverage is at least 99% throughout. Aperture census is within the unchanged 3% threshold at 40/65 positions; 25 interpolated positions clip at S15, worst +9.071975% (5.864323 versus interpolated 5.376563). The three source stations pass.

First order at source stations: EFL 72.203476 / 135.035689 / 290.109068 mm; BFD 46.746198 / 47.848169 / 57.469551 mm against retained printed BF 46.74 / 47.82 / 57.41. Defocus +0.006198 / +0.028169 / +0.059551 mm is retained without fitting. The worst sampled intermediate state is zoom 0.796875: EFL 231.819321 versus displayed 227.031250, BFD 65.804216 versus current gap 53.514062, defocus +12.290153 mm. Three source gap stations do not define the continuous compensator cam; intermediate states are illustrative and not focus preserving. No trajectory, cap inflation or iris correction is invented.

At 21 zoom positions × seven presets, 129/147 real working calls trace and 18 vignette at interpolated states; baseline/candidate classifications agree. A separate 193-point full pupil at 65 zooms × four fields uses the current zoom iris and matches baseline/candidate classifications/counts in all 260 states. Source axial pupils pass 193/193, while some intermediate axial pupils pass 169/193. Source corner counts are 123 / 127 / 121; actual configured-diagram counts 154 / 159 / 156 of 193. These centered samples do not certify production illumination.

No finite-focus table exists; repeated infinity entries do not certify 1.2 m production focus. Figure 3/paragraphs 0056–0057 describe a tele first-unit five-arcminute tilt/decenter about a pivot one L1 zoom-travel behind its last surface. That study is unavailable as a viewer control; it is not an IS calibration and is not validated by centered field checks.

Actual SVGs at 65 zoom positions have 1235 finite, closed, connected paths and zero hidden front/rear renderer trim. Wide/middle/tele diagrams were compared with the original's wide section; no separate printed tele section is substituted. Source fidelity, centered runtime, spectral proxies and production correlation remain separate. No original-source blocker remains. Coordinator owns generated metadata/reports and full gates.

## 2026-10-31 — Source-partial catalog follow-up

Original JP2013140404A Numerical Example1 is retained: the d-line definition is paragraph0058/PDF11, L2 surface3 prints 1.61340/44.3 on PDF13, and Table1/condition(8) on PDF20 prints −0.00599. Direct rendered Figure1/PDF21 confirms the same front cemented member; no geometry is remeasured or changed. Paragraph0051/PDF9 prints the normal expression, giving θgF=.5632974. Existing OHARA S-NBM51 evaluates nd1.613397229/ν44.267706 and θgF=.563371814 (partial residual+.000074414), versus N-KZFS4 θgF=.558995176 (−.004302224). The current official OHARA May2026 AGF publishes the S-NBM51 coefficients verbatim. The originally authored nd/ν and genuine dPgF remain authoritative.

New CDGM H-TF3L is rejected despite its exact nominal index: θgF=.565641306 differs by+.002343906. NHG2601 H-TF3L gives θgF=.563491987, but its printed/fit partial discrepancy and weaker residual do not improve on the existing OHARA row; no duplicate catalog row is added. All19 source pairs, surfaces, clear diameters/shoulders, gaps, stop and control trajectories are unchanged. The original October30 whole-lens review and its sparse-cam, focus and source-length limitations retain their dates. This is a qualified spectral-proxy improvement, with no historical supplier, melt or chemistry identification and no repeated whole-shape claim.

Catalog source reinspection: [OHARA official downloads](https://www.ohara-gmbh.com/dialog-downloads/downloads.html), retained `OHARA_260529.AGF` all-products file, literal `NM S-NBM51`/`CD` row; coefficients exactly match the existing registered S-NBM51 row. The manufacturer file is source material for the proxy, not evidence of the lens supplier.
