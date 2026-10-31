# SIGMA 70mm f/2.8 DG MACRO | Art — audit log

## 2026-10-27 — Source correction and construction

Source: the 42-page JP 2019-144441 A PDF and Sigma's A018 page. Example 1 was chosen as a related design, not a proven factory prescription; Example 5 stayed a close alternative. The older MACRO 70mm f/2.8 EX DG source is a different design and was not reused.

Correction at surface 18, field d: printed 0 → 1.9577 mm, then 24.6561 mm at −0.5× and 47.7614 mm at −1×. These are d18 + d19, from the printed d18 of 0 / 7.6984 / 30.8037 and d19 of 1.9577 / 16.9577 / 16.9577. S19 glass stays 0.9000 mm. Evidence kinds: `source-summary` and `claims`. Claim 15 condition (13) with the printed Example 1 value 0.67 separates literal 0.453329 from summed 0.674079. No missing dummy plane is claimed and no source plane was optimized.

Unresolved: the printed G3 start of surface 20 conflicts with complete L11–L13, and the group annotation follows S19–24. Physical tracks of 126.8312 / 150.9810 / 175.6310 mm differ from the printed 126.83 / 150.95 / 175.57 mm; image planes unchanged. Indexed grant text repeats the error; the grant PDF was not obtained, so there is no family-publication evidence.

Geometry: rims inferred from Figure 1, with S2/S3 capped at 13.49 mm and S20/S21 at 12.09 mm below the default 90% sag limit. No gap-sag or rim-slope override and no prescription change. The LPF is a physical rear plate, 1.45 mm thick, 1 mm gap after, 51.0113 mm of air before. K = 0, A4–A14 and the printed PgF/PdC line derivations retained.

Focus: 65 inferred controls keep the printed two-gap paths and exact printed states, with published indices 32 and 64 (infinity implicit). Residual ranges −0.0193446431 to +0.0285968628 mm along the monotone path; not a recovered factory cam. d0 of 151.0718 and 82.2506 mm is referenced to the first surface. closeFocusM 0.2578816 is the physical source sum, not the rounded retail 0.258.

Limits at that date: design-plane C/d/F edge tangential MTF at 40 lp/mm of 0.3841 / 0.2884 / 0.3293 with blocked pupil samples, measured with an older stop radius. The chief-ray check targets Y = 21.63 mm, separate from the 21.65 mm MTF corner; finite MTF angles are referenced to the first surface. Source planes were not shifted to best MTF.

## 2026-10-31 — Deployment validation and fix pass

Source re-read against pp. 17–18: 95 fields (24 R, 22 fixed d, 13 nd/νd pairs, 21 asphere terms, rear plate) plus PgF, PdC, all gap rows and d0; no mismatches. Page images agree with the text layer. Front page, inventor (仲本純平) and applicant agree. The asphere form is (1 + K), with K = 0 throughout.

First-order, patent against model at infinity / −0.5× / −1×: EFL 67.95 / 63.74 / 60.05 against 67.958 / 63.746 / 60.055; 2ω 35.40 / 26.59 / 21.07 against 35.395 / 26.583 / 21.058; TL 126.83 / 150.95 / 175.57 against 126.831 / 150.981 / 175.631; β −0.50008 and −1.00022. Paraxial residuals +0.01028 / +0.01805 / +0.02860 mm are family-wide (Example 5 +0.0099 / +0.0181 / +0.0289). The printed TL shortfall is also family-wide, up to 0.063 mm in Example 6.

The d18 + d19 correction was reproduced independently. Literal d18 fails EFL, 2ω, TL, β (−0.5295 / −1.0591), condition (13) and condition (10) (1.2292 against 1.2214 summed, printed 1.22). d19 alone and d19 as L11 thickness also fail. Example 5 supports it as `sibling-example` evidence; the errata evidence array was left at its two kinds. G3 start: S19 per Figure 1 and ¶0114, −372.294 mm; Examples 1 and 5 both print 20.

Maker's drawing: compared by the coordinating review, not by this pass. L1 is drawn as ordinary glass and L5's width overlays Example 1, so Example 1 stands over Example 5. Sigma's text gives 2 FLD, 2 SLD, 1 high-index anomalous, 2 aspherical; L6 and L9 as the SLD positions come from the glass census, because no drawing was available locally.

Stop: engine radius 10.616 mm, EPD 23.43 mm, replacing the earlier 10.6658 mm figure. Working f/# from the real marginal ray is 2.914 / 3.860 / 4.823 against the printed 2.90 / 3.86 / 4.99, replacing 2.90089 / 3.84284 / 4.80233. No stop override. A fixed iris reproduces all printed F-numbers in Examples 2, 4 and 6 and misses at −1× in Examples 1, 3 and 5; the 11.87 mm S16 limit is an interpretation and is not modeled. The MTF table was removed from the analysis because it came from the older stop radius.

Glass: Unmatched 13 → 2. Eleven elements resolved as HOYA coordinate equivalents (FC5 twice, FD60, TAFD32, E-FDS1, FCD100 twice, FCD515, E-FD5, NBFD10, BACD16), recurring across examples, with printed PgF within 0.0002 of the catalog row. L9 and L13 stay Unmatched: their indices sit 0.0010 and 0.0033 below M-FCD500 and M-NBFD130. The printed nC/nF/ng derivations were kept, since they are source values rather than catalog copies, so chromatic results do not change. `apd: "inferred"` on L5, L10 (FLD) and L6, L9 (SLD). L4 stays untagged as a high-index element.

Fields changed: `name`, `subtitle`, `specs`, element `label`, `role`, `glass`, `apd`, `apdNote`, `cemented` and doublet text (D → C), gap label, `focus.description`, conjugate and rear-plate `source`, errata notes, header. Analysis: L1, L4 and L10 shapes corrected; Example 5 stated. No R, d, nd, νd, asphere, rim or gap number changed.

Open: the production prescription stays unconfirmed; the printed 4.99 at 1:1 stays unreproduced; the cause of the TL shortfall is not established.

## 2026-10-31 — Semi-diameter pass against the patent figure

Source: Figure 1 on p. 31 of the local JP 2019-144441 A PDF, native raster 1290 × 732 px at 400 ppi, a clean line drawing of Example 1 at infinity with no rays. The front-page copy on p. 1 (803 × 461 px) has the same proportions. This section replaces the rim sentence of the 2026-10-27 geometry note.

Scale: the figure is anamorphic. Along the axis, every vertex crossing fits 7.618 px/mm within 1 px (S1 to S24 is 559.0 px for 73.3699 mm, S1 to the image 966.0 px for 126.8312 mm), and the drawn S18–S19 gap is 1.94 mm, the d18 + d19 sum at infinity. Across the axis, the printed radii fit 8.55 px/mm: S2 8.56, S3 8.55, S8 8.57, S10 8.55, S11 8.55, S12 8.57, S14 8.56, S18 8.57, S20 8.54, each with both halves at 0.3 px rms. The stop tick's inner ends sit 90.5 px from the axis, 10.58 mm at that scale, against the engine's 10.616 mm. The figure is therefore stretched 12.2% across the axis. The earlier rims had been read at the axial scale and ran about 12% high. Rim heights here use 8.55 px/mm, and a reading is good to about 0.1 mm.

| Surface | Before | Figure reading | After | Evidence |
|---|---:|---:|---:|---|
| 1 | 16.5 | 127.5 px, 14.91 mm | 14.9 | Top and bottom rim lines |
| 2, 3 | 13.49 | cap ends 115.5 px, 13.5 mm | 13.49 | Retained: already the drawn cap end |
| 4, 5 | 16.5 | 127.5 px, 14.91 mm | 14.9 | S5 runs to the rim line |
| 6, 7 | 17.3 | 133.5 px, 15.61 mm | 15.6 | Rim line |
| 8, 9 | 17.1 | 131.5 px, 15.38 mm | 15.4 | Rim line |
| 10, 11 | 15.5 | 119.0 px, 13.92 mm | 13.9 | Rim line |
| 12 | 15.5 | 119.0 px, 13.92 mm, flat land | 13.9, cut 2.70 | Rim line; land below |
| 14 | 14.4 | 110.5 px, 12.92 mm, flat land | 12.9, cut 3.14 | Rim line; land below |
| 15, 16A | 14.4 | 110.5 px, 12.92 mm | 12.9 | S16 runs to the rim line |
| 17, 18 | 14.5 | 111.5 px, 13.04 mm | 13.0 | Rim line |
| 19, 20 | 14.5, 12.09 | 111.5 px, 13.04 mm | 12.6, 12.6 | Square element, held by the S20/S21 crossing |
| 21, 22 | 12.09, 15.4 | 118.0 px, 13.80 mm | 13.8, 13.8 | S21 runs to the rim line |
| 23A, 24A | 16.3 | 126.5 px, 14.80 mm | 14.8 | Rim line |

Lands. S12: the cap ends 90.5 px from the axis on a 119.0 px edge, q 0.76 ± 0.015, and the land stroke sits 18 px behind the vertex, 2.36 mm. The wide-open beams reach 11.376 mm there at −1×, field 10.83°, so the depth moved out to 2.70 mm, cut radius 11.44 mm, 2.6 px behind the stroke. S14: the cap ends 93.5 px out on a 110.5 px edge, q 0.846 ± 0.017, and the stroke sits 24 px ahead of the vertex, 3.15 mm. The depth follows the stroke at 3.14 mm, cut radius 11.23 mm, against a beam reach of 10.997 mm. The dense rim-cut probe clips no ray at either land. S2 and S3 also end on drawn lands, but a cut at S2's drawn cap end is refused: the beams reach 13.636 mm there. Those two stay as plain rims.

L11: the figure draws it square to 13.04 mm, touching L12, but the printed S20 and S21 cross at 12.75 mm. Both faces are 12.6 mm, leaving about 0.08 mm of air at the rim. The faces close 3.144 of the 3.220 mm gap, 0.976, so `checks.gapSagFrac` 0.98 is the smallest two-decimal limit that admits the rim. S21 alone runs past L11's edge, as drawn.

Clearance at the three printed states, wide open with the iris at 10.616 mm, from finite-object rays through the stop rim: no surface comes within 0.6 mm of the axial beam. The closest are S16A 12.28 mm at −1× against 12.9, S17 12.28 and S18 12.25 at −1× against 13.0, S10 12.76 at infinity against 13.9, S8 14.20 and S7 14.36 at infinity against 15.4 and 15.6, and S5 13.66 at infinity against 14.9. No rim touches the axial beam, so the working f/# stays 2.91 / 3.86 / 4.82. Longitudinal spherical aberration reads 0.012 mm at the full pupil, so no prescription suspicion arises. The image-circle check is clean, the corner chief ray reaches 21.65 mm of 21.65 mm at 17.7°, the aperture census stays within 3%, and the surface validator passes. Engine half-field stays 25.50° with S2 limiting, f/2.90 and stop radius 10.616 mm. S16A, S23A and S24A show no turnover to 13.5, 15.5 and 15.5 mm. The analysis quotes no sag or departure at these rims.

| Geometric transmission, full-pupil lattice | Infinity, 17.7° | −0.5×, 13.3° | −1×, 10.5° |
|---|---:|---:|---:|
| Before | 45.0% | 62.2% | 79.8% |
| After | 49.3% | 67.0% | 78.1% |

The largest loss anywhere on the three curves is 2.3 points, at 11.1° at −0.5×, set by S15–S18; below about 9° the small losses come from the lower front rims. The gains at infinity and −0.5× come from S20 and S21, the tightest rims at those corners: with both back at 12.09 mm the corners return to 45.0% and 62.1%, and −1× stays 78.1%. Relative illumination at the infinity corner goes from 39.6% to 43.3%. Geometric corner MTF at 40 lp/mm moves from tangential 0.423 / 0.487 / 0.298 and sagittal 0.560 / 0.667 / 0.640 to 0.376 / 0.414 / 0.305 and 0.512 / 0.659 / 0.620, so the analysis statement on weak tangential edge response stands.

Maker's drawing, read locally this time: it is isotropic at 6.64 px/mm, with S1 to S24 at 487 px. Its vertices fall within about 1 px of Example 1 except S4, S8 and S9, at 3–4 px, and the S2 and S3 arcs agree. That supports Example 1 strongly. It shows 13 elements in 10 groups, L5 and L10 yellow, L6 and L9 blue, and the aspheric outline on L9 and L13, which confirms the inferred FLD and SLD positions. Rim heights there: L1 16.0 and L2 15.8 (flanges), L3 14.3, L4 15.5, L5 15.7, L6 13.7, L7 14.8 (flange), L8 13.6, L9 12.5, L10 14.0, L11 14.0, L12 14.2, L13 14.8. L4, L5, L6 and L13 agree with the corrected patent reading to about 0.3 mm, against 1.4–1.8 mm for the old values. It draws S12's cap to 12.8 mm with a stepped flange, and the S2/S3 caps closing near 14.0 mm. It draws L8, L10 and L11 0.6–1.0 mm larger than the patent figure, and L3 and L9 about 0.5 mm smaller; the patent figure of the modeled example governs.

Live check: the local page was shot at focus 0, 0.8538 and 1, and an overlay of the model outline on Figure 1 at its own two scales followed every arc to within about 1 px. On-axis fan rays outside the stop-limited beam at −1× now end on the S12 land instead of at the iris; they were stopped either way.

`rimExtensionSd` 14.9 on S2 and S3 draws the flat land and square block the figure shows on L1 and L2, from the 13.49 mm cap end, and passes the validator with no change to the transmission curves. The S12 land sits 0.34 mm behind the drawn stroke, and L11 sits 0.44 mm below the drawn rim line, both for the reasons above.
