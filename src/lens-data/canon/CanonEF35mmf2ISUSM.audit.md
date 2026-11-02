# CanonEF35mmf2ISUSM patent audit

## 2026-09-06 UTC

- Source: local `patents/US20150205081A1.pdf`, Example 1, Fig. 1, PDF page 2. Original PDF retained unchanged and untracked.
- Reviewed the exact embodiment at 600 dpi, distinguishing optical rims from brackets, arrows, and mechanical outlines.

### Semi-diameters

Retained all SDs. The 600-dpi optical rims support the broad front group and narrower rear group. Automated outliers at Gis and the last asphere sample leader/bracket ink or the curved interior; manual optical-rim inspection does not support those values. Smaller rear values would replace the authored ray-envelope estimates without strong figure evidence.

### Glass and identity

Strict catalog coverage: 10/10 before, 10/10 after. All patent nd/vd coordinates are retained. Catalog matches describe spectral proxies, not production supplier identities. No new catalog entry was needed.

Normalized assignee metadata to the catalog spelling `Canon Inc.` where needed. Display names follow the data specification, including hyphenated ranges and parenthetical product-case camera names.

## 2026-09-06 UTC — screenshot follow-up

Revisited the screenshot against Fig. 1 at 600 dpi. Accepted inferred SD changes:

| Surfaces | Before (mm) | After (mm) | Evidence                                                      |
| -------- | ----------- | ---------- | ------------------------------------------------------------- |
| S1/S2    | 25.5/21.0   | 25.2/25.2  | Level front-meniscus rim, about 625 pixels at 0.0403 mm/pixel |
| S5/S6    | 16.4/14.2   | 15.2/12.6  | Optical contour excludes the drawn mounting flange            |
| S13/S14  | 11.1/11.1   | 10.5/10.5  | Gis optical half-height about 260 pixels                      |
| S18A/S19 | 14.5/14.5   | 11.9/11.9  | Final asphere optical half-height about 295 pixels            |

Retained S3/S4 = 21 mm: a 22 mm trial violated cross-gap clearance. Rejected 11.8 mm E4, 11.2 mm Lc, and uniform 11 mm rear cemented rims because exact rays clipped at central surfaces and the internal S16 interface. The accepted prescription preserves the default infinity 0.6-field ±0.75-pupil fan. S18A departure is now approximately −302.4 µm; no turnover. Full-field vignetting remains possible.

Moved the source Gis callout above the element to separate it from the nested L2 focus label; removed the invented J2 callout. Lc remains source-backed. Focus remains L1 fixed and L2 objectward by 8.223332 mm at the reconstructed 0.24 m endpoint.

Surface/image-circle audits and the source-station, dispersion, and render-clearance regressions validate this follow-up; final repository gates are recorded in the batch record.

## 2026-10-30 — scoped reopening, US 2015/0205081 A1, Numerical Embodiment 1

The 2026-09-06 dates and conclusions above are retained. Unchanged source R/d, algebraic asphere conversion, focus mechanism and ten compatible glass curves reuse that coverage; the original table and reference definition were reconfirmed in this scoped reopening. Reopening is justified by a reproducible rendering/source defect: the current pointed S2/S6/S15 outlines omit resolved outer shoulders. Native profile measurements also distinguish clear caps from the old wider ray-envelope estimates. The previous 22 mm S3/S4 trial remains rejected under its physical gap constraint. Earlier rejection of smaller E4/Lc/rear caps was based on off-axis fan clipping; this review adopts the directly measured contours with full axial/chief clearance while explicitly recording the increased peripheral vignetting. Off-axis transmission is not used as proof that the source blanks are larger.

The untracked original `patents/US20150205081A1.pdf` was checked directly. Its heading is **First Numerical Embodiment**, normalized in metadata as **Numerical Embodiment 1**, not another configuration. Figure 1 is PDF p. 2 / drawing sheet 1; the nineteen-row table, asphere and source definitions are PDF p. 19 / printed p. 5 (¶¶0058–0060). Source ¶0027 explicitly pairs Figure 1 with the first embodiment; Figure 2 is its infinity aberration plot, and Figures 3A/3B compare centered and 0.3° image-stabilized states. The original consists of native 2560 × 3300 raster pages at 300 ppi. Native figures/table crops were inspected; the earlier note's 600-dpi display was upsampling, not additional source resolution. No alternate publication substituted for the original.

### Prescription, media and controls

Every source row and all ten index/Abbe pairs agree with the current prescription. All R/d, the S18 asphere and existing focus/stop controls remain unchanged. Source K = 0, A4 = −1.49529e−5, A6 = 4.91763e−9 and A8 = −4.11063e−11 match. Higher nonzero terms are not printed; existing zero defaults remain, without inventing coefficients. The source infinity gaps and BF 38.30 mm are preserved. The literal rounded prescription computes EFL 34.501498 mm and BFL 38.300742 mm versus nominal 34.49/38.30 mm; no fitting correction or second scale is applied.

The source fixes L1 and moves the entire L2, including the stop, for focus. It publishes no finite-focus spacing table. The existing product-MFD-derived 0.24 m endpoint and all intervening gap values remain a constrained reconstruction. Only centered IS is modeled: the 0.3° plot does not establish a physical actuator stroke. No hybrid, numerical cement medium, lens filter or camera-side plate appears in the selected table, so no omitted medium or air-equivalent plate fold is invented.

### Every element, concave end and cemented interface

All ten elements, both cemented interfaces (S10 and S16), the final asphere and all air-facing concave ends were compared with native Figure 1. The figure has about 12.4 px/mm scale from its 66.2 mm first-to-last-vertex track. Independent native rim heights and edge/vertex positions support the following estimates, with practical approximately ±0.5 mm schematic uncertainty:

| Surface | Previous clear sd | Adopted clear sd | Outer shoulder |
| ------- | ----------------: | ---------------: | -------------: |
| 2       |              25.2 |             21.8 |           25.2 |
| 6       |              12.6 |             12.6 |           15.2 |
| 7 / 8   |       14.1 / 14.1 |      11.8 / 11.8 |           none |
| 9 / 10  |           13 / 13 |      11.2 / 11.2 |           none |
| 15      |              10.5 |             10.0 |           11.0 |
| 16 / 17 |       12.2 / 12.4 |      11.0 / 11.0 |           none |

The S2 endpoint is about 270 native pixels from the axis versus roughly 312 px for the outer blank. S6 ends near 156 px versus about 188 px for its outer blank. Both vertical measurements and source-profile axial sag support separate clear caps and outer shoulders. E4's approximately 146 px half-height and the 138 px Lc blank support the smaller central caps; retaining 14.1/13 mm merely to preserve the old wider pupil would not follow the native contours. The rear cemented interface stays a continuous clear curve to its shared adopted height. Its external S15 shoulder is air-facing, with no opaque land at the bond.

The earlier analysis called S5/S6's step a mounting flange. The original supplies no separate mechanical-part identification there: the step is part of the closed negative-element contour and joins its rear optical cap. It is represented as a resolved outer shoulder, with sd 12.6 retained. External brackets, stop leaders, optical-axis strokes and the IS arrow are excluded from measurements. No unsupported equal-height compound blank, resin wing, inferred cut or beam-exempt source tag is introduced. The remaining approximate heights and all guard settings are retained; no failed geometry trial is hidden by changing R/d or tolerances.

### Glass, wavelength and spectral evidence

Paragraph 0058 explicitly defines prescription nd/νd on the d-line. Paragraph 0032 identifies d = 587.6 nm and the plotted g = 435.8 nm; a plot legend does not publish per-element ng. The ten literal pairs are 1.48749/70.2, 1.77250/49.6, 1.58144/40.8, 1.88300/40.8, 1.88300/40.8, 1.61293/37.0, 1.69680/55.5, 1.73800/32.3, 1.59522/67.7 and 1.58313/59.4.

Ten compatible curves remain the same ones selected by the former code-family annotations: S-FSL5, J-LASF016, S-TIL25, S-LAH58 (twice), E-F3, J-LAK14, J-KZFH9, S-FPM2 and J-SK12. They are now named and explicitly qualified as spectral proxies. Small catalog coordinate residuals remain uncertainty; compatibility does not prove historical supplier, melt, formulation, annealing or manufacturing process. `assertCatalogConsistent` passes without changing tolerances. No individual C/F/g indices, partial dispersion, APD or Sellmeier coefficients are printed in the selected table, and none is added as a per-lens override. Production glass-molding association remains a product correlation, not a source chemistry result.

### Actual SVG and sampled runtime results

Surface and image-circle checks pass, and the infinity stated-beam audit requires no cap raise. Every one of 21 focus states has ten finite, connected, closed actual SVG paths (210 total), with zero hidden renderer trimming. Infinity/mid/close SVGs were compared with native Figure 1. Eight iris settings over the same focus grid give 168 traced working-ray calls per version; no newly clipped axial working ray is introduced. The source F2.05 sizes the derived infinity iris at 9.767426625 mm. Its actual working value is 2.104928; these are different aperture conventions, not evidence for changing the iris authority.

The 193-point circular pupil at axial/half/corner fields over 21 focus states gives 12,159 samples per version. All 193 axial samples and every sampled chief clear throughout. The source-aligned caps reduce peripheral transmission: half/corner passing counts change from 186/111 to 169/109 at infinity, and from 186/133 to 175/127 at close. Candidate launches comprise 12,047 aimed and 112 blocked, with no unaimed numerical failures. For 109 blocked launches, unrestricted ghost traces exceed the named clear cap. The remaining three independently intersect the first sphere at radii 29.109–29.330 mm, beyond its 25.2 mm cap. Zero unexplained inside-cap misses were found. These blocked attempts are not represented as successfully aimed rays or as proof of production vignetting.

The printed 32.10° infinity angle gives 21.2356 mm real chief height, while the modeled 21.65 mm format corner is reached near 32.6°. Source nominal image height, sampled real field coverage and production correlation remain distinct. The static centered geometry does not certify IS decenter clearance.

Independent finite-conjugate sampling also identifies an existing interpolation limitation: largest sampled image-plane residual −1.073096 mm at focus 0.55; at focus 0.5/display 0.48 m it is −1.052140 mm. The 0.24 m endpoint remains solved to numerical precision and infinity differs by +0.000742 mm under rounded source rows. Source gaps, trajectory and image plane are retained. The source-outline improvements and qualified glass review do not establish a production focus cam or complete full-field pupil transmission.

## Source-stated focal metadata — 2026-10-30

Original US2015/0205081A1, First Numerical Embodiment / paragraph0060, PDF p.19 / printed5, Various Data states focal length34.49mm. Retained computed EFL34.5015mm is a model result. This metadata correction preserves all R/d, material pairs, clear caps, source stops and focus/zoom controls. The earlier shape/glass review dates and results are retained; no additional lens review is counted.
