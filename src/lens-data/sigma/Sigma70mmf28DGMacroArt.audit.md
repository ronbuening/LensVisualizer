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

Open: the production prescription stays unconfirmed; the model stays at 4.82 against the printed 4.99 at 1:1, which the fan section below traces to limits the figure does not draw; the cause of the TL shortfall is not established.

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

## 2026-10-31 — Second review: diagram, labels and movement

Compared: the local page at infinity, −0.5× and −1× against Figure 1 on p. 31 and the text and tables of pp. 17–18, with Sigma's construction drawing as the second check. The element paths were read from the page's own SVG and drawn over the native figure at its two scales. A separate 3-D sequential tracer, typed from the printed table, checked the engine's ray heights, F-numbers and field curves.

Scale, re-measured: vertex crossings give 7.619 px/mm, S1 at 178.5 px to S24 at 737.5 px. With those vertices, arc fits of the printed radii give 8.53–8.59 px/mm across the axis, mean 8.56, at 0.3 px rms (S2, S3, S8, S10, S11, S12, S14, S18, S20). That confirms the first pass. Half the distance between mirrored rim strokes reads 127.5 px for L1–L3, 133.5 L4, 131.5 L5, 119.0 L6–L7, 110.5 L8–L9, 111.5 L10 and L11, 118.0 L12 and 126.5 L13.

Silhouette: the live outlines follow the figure within about 1 px everywhere except two places, so no rim changed. The S12 land sits 2.6 px behind the drawn stroke because the beam rule holds the cut radius at 11.44 mm, against a drawn cap end of 91 px, 10.6 mm; the axial beam alone reaches 10.91 mm there, so the figure's cap end is inside the beam. L11 renders 12.6 mm against the drawn 13.03 mm, level with L10 in the figure and 0.4 mm below it on the page. Both the figure and the maker's drawing run L11's rear face onto L12's front, which the printed radii reach at 12.75 mm.

| Field | Before | After | Evidence |
|---|---|---|---|
| `groups` | G1 (+), S1–12 | G1A (+), S1–7; G1B (+), S8–12 | Figure 1 brackets and ¶0112, both called positive. G1A computes +389.6 mm, power 0.00257 against the printed condition (7) 0.0026; G1B +254.5 mm. Element roles already named both |
| `groups` | G3 (-) | G3 (−) | Minus sign |
| `doublets`, `cemented`, `role` | C1, C2, C3 | DB1, DB2, DB3 | ¶0112–0113 name the cemented lenses; no clash with the gap labels d12 and d18 + d19 |
| `focus.description` | G1 (L1–L7) | G1 (G1A and G1B, L1–L7) | Follows the new brackets |

The analysis follows: sub-groups and doublet names, the tag sentence, and the F-number paragraph below. The group-movement chart now lists four rows, with G1A and G1B on one travel.

Found correct: L1–L13 are the patent's own designations and the diagram's 1–13 count the same elements. Every `type` agrees with the signs of R and ¶0112–0114, and no `role` claims false motion. Aspheric markers sit on S16, S23 and S24 only, as printed and as ¶0115 says, and the drawing outlines L9 and L13. The stop lies between L7 and L8; the printed group table starts G2 at surface 13, and the bracket starts at STO. All elements carry `focalLengthMm`, no cement layer is tagged, and each doublet bracket spans its three surfaces. The inspector was read for all 13 elements and reads the same as the file. `apd` stays `inferred` on L5, L10, L6 and L9: the drawing colours exactly those, L5 and L10 yellow, L6 and L9 blue, and no other element. ¶0040–0041 and conditions (3) and (4) define anomalous elements EL_A and EL_B but name none; by value L4 is EL_A (ΔPgF +0.028) and L5 or L10 is EL_B (ΔPdC −0.015). L4 stays untagged because the drawing leaves it white.

Movement against the printed table: G1 travels 24.1498 and 48.7998 mm toward the object, G2 and the stop 22.6984 and 45.8037 mm, and G3 stays fixed, as ¶0116 and both figure arrows say. Condition (12) gives 0.0441 against the printed 0.044 and condition (13) 0.674 against 0.67. Column order is infinity first and −1× last; d12 and d18 + d19 rise monotonically through all 65 controls, object distance and magnification fall monotonically, and the printed values sit exactly at keyframes 0, 32 and 64, conjugates 151.0718 and 82.2506 mm. The slider reads ∞, 30 cm at −0.5× and 26 cm at −1×, against 302.05 and 257.88 mm object to image.

| Field curves from the paraxial focus, model / patent plot raster | Infinity (Fig. 2) | −0.5× (Fig. 4) | −1× (Fig. 6) |
|---|---:|---:|---:|
| ΔM peak, mm | +0.03 / +0.02 | +0.10 / +0.10 | +0.14 / +0.15 |
| ΔM at full field, mm | −0.01 / 0.00 | +0.04 / +0.05 | +0.24 / +0.22 |
| ΔS at full field, mm | −0.04 / −0.05 | −0.06 / −0.06 | −0.04 / −0.05 |
| Distortion at full field, % | −0.24 / −0.2 | +0.79 / +0.8 | +1.30 / +1.3 |

The plots read to about 0.01 mm and 0.1%. The shapes agree, including the ΔM dip to +0.11 near 70% of the field at −1×, so no asphere sign is suspect.

The printed 4.99: the printed F-numbers are real-ray working values. On that basis one fixed iris fits all three states in Example 2 (10.99 mm), Example 4 (11.40 mm) and Example 6 (13.86 mm). In Example 1 the iris for the printed 2.90 is 10.669 mm, which alone gives 3.842 and 4.801. A single added limit of about 11.86 mm at S16 gives 3.863 and 4.99, both printed values; 11.87 mm is also where the −0.5× beam reaches S16. The same limit at S14, S15, S17 or S18 fits 4.99 but gives 3.921, 3.886, 3.842 or 3.842 at −0.5×, and any other surface would cut the infinity beam first. Examples 3 and 5 need a similar limit at −1× only. This refines the earlier 11.87 mm note and explains the number arithmetically; it does not prove a mechanical aperture, and Figure 1 draws S16 to 12.9 mm with no land. On this reading the catalog stop rule's 10.616 mm matches 3.86 by coincidence. S16 at 11.87 mm with a land to 12.9 mm would pass the validator but costs 0.7, 2.7 and 4.8 points of corner transmission (48.6%, 64.3%, 73.3%) and draws a land the figure does not show, so it is not applied.

Unchanged numbers, since no optical field moved: engine half-field 25.50° with S2 limiting, f/2.90, stop 10.616 mm, corner transmission 49.3%, 67.0% and 78.1%, working f/# 2.91, 3.86 and 4.82. The surface validator passes, and the page rendered at all three states and in the focus movement overlay, with the sub-group labels clear of the element numbers.

Glass: L9's row (1.55230, 71.54, PgF 0.5389, PdC 0.3044) recurs at S15 in Examples 1–4, and L13's (1.80280, 40.55, 0.5687, 0.2970) at S23 in Examples 1, 2, 4 and 5. The patent prints no glass name for either.

L11 now reaches the drawn rim without changing S20's clear aperture: S19 `sd` 12.6 → 13.0, S20 `sd` 12.6 with `rimExtensionSd` 13.0, leaving 0.023 mm of air at the rim. `checks.gapSagFrac` goes 0.98 → 1.00, because 0.99 is refused (land intrusion 3.197 mm against 3.188 mm allowed). Corner transmission goes from 49.3%, 67.0% and 78.1% to 49.9%, 68.2% and 78.1%, with half-field and f-number unchanged.

## 2026-10-31 — Transverse fan ends against the rims

Figures 3, 5 and 7 (pp. 32–33) are transverse fans at infinity, −0.5× and −1×. Their ends were digitised from the native rasters, 1 px being 0.008 of the pupil, and normalised to each state's 0% fan, at ±125 px meridional and 109 px sagittal. Each end was traced from the printed prescription through the paraxial entrance pupil, with collimated rays at infinity and rays from the finite object point at the near states, and with the plot's +x on the image-height side. No rim changed, because Figure 1 draws no land at any radius the fans give.

| Field | Printed end: low / high / sagittal | Model now, with limiter | Fan-fit apertures |
|---|---|---|---|
| ∞ 100% | −0.392 / 0.624 / 0.798 | −0.432 S2 / 0.708 S20 / 0.902 S2 | −0.396 / 0.628 / 0.800 |
| ∞ 90% | −0.456 / 0.688 / 0.844 | −0.504 S2 / 0.776 S20 / 0.950 S5 | −0.458 / 0.690 / 0.842 |
| ∞ 70% | −0.584 / 0.808 / 0.908 | −0.650 S2 / 0.906 S20 / 1.008 stop | −0.582 / 0.810 / 0.910 |
| ∞ 50% | −0.704 / 0.896 / 0.954 | −0.792 S3 / 1.004 S18 / 1.004 stop | −0.704 / 0.898 / 0.958 |
| ∞ 30% | −0.824 / 0.968 / 0.982 | −0.920 S5 / 1.004 stop / 1.002 stop | −0.826 / 0.972 / 0.988 |
| −0.5× 100% | −0.592 / 0.424 / 0.982 | −0.680 S3 / 0.540 S20 / 1.010 stop | −0.596 / 0.436 / 0.976 |
| −0.5× 90% | −0.648 / 0.560 / 0.982 | −0.746 S3 / 0.670 S20 / 1.008 stop | −0.652 / 0.560 / 0.982 |
| −0.5× 70% | −0.760 / 0.808 / 0.991 | −0.864 S5 / 0.920 S18 / 1.006 stop | −0.762 / 0.804 / 0.992 |
| −0.5× 50% | −0.872 / 0.880 / 0.991 | −0.976 S5 / 0.974 S18 / 1.004 stop | −0.872 / 0.882 / 0.996 |
| −0.5× 30% | −0.984 / 0.936 / 0.991 | −1.000 stop / 1.006 stop / 1.002 stop | −0.980 / 0.934 / 1.000 |
| −1× 100% | −0.776 / 0.248 / 0.972 | −0.864 S5 / 0.366 S20 / 1.006 stop | −0.776 / 0.248 / 0.978 |
| −1× 90% | −0.832 / 0.440 / 0.982 | −0.916 S5 / 0.560 S20 / 1.006 stop | −0.828 / 0.438 / 0.982 |
| −1× 70% | −0.936 / 0.824 / 0.991 | −0.996 stop / 0.914 S18 / 1.004 stop | −0.934 / 0.818 / 0.990 |
| −1× 50% | −1.024 / 0.896 / 0.991 | −0.996 stop / 0.956 S18 / 1.002 stop | −1.036 / 0.898 / 0.996 |
| −1× 30% | −1.032 / 0.936 / 1.000 | −0.998 stop / 0.998 S18 / 1.002 stop | −1.036 / 0.940 / 1.000 |

The current rims do not reproduce the ends: RMS error 0.085 meridional and 0.051 sagittal. The fan-fit set is iris 10.669 mm, S5 13.76 mm, S16 and S17 11.87 mm, and S19 11.92 mm, at 0.004 for both. Evidence by surface: the low ends trace to S5 at 13.73–13.81 mm on the 13 ends the stop does not take, across all three states. The high ends at 100–70% trace to S19 at 11.85–11.95 mm, and those at 50–30% to S17 at 11.82–11.90 mm. Alternatives: S4 at 13.41 mm fits about as well but is a cemented interface; S20 at 11.86 mm gives 0.0044 against 0.0037 for S19, and S18 at 11.89 mm gives 0.0053.

S16 test: the 1:1 low ends at 50% and 30% run to −1.024 and −1.032, past the axial fan, and stop at the iris at −1.036, so the iris is not the limit behind 4.99. S16 alone at 11.87 mm is rejected as the only rear limit: it leaves the 50% high ends at 0.918 and 0.926 against 0.896, RMS 0.010. S17 at 11.86 mm fits the fans and 4.99 but alone gives 3.84 at −0.5×. S16 and S17 both at 11.87 mm give 2.900, 3.860 and 4.986 on axis, the printed values, and every fan end. Two faces at one radius suggest a mechanical bore between L9 and L10; that is an inference.

Figure check: at S5, S16, S17 and S19 the arcs run unbroken to their rim lines, with no land near 13.76, 11.87 or 11.92 mm, so none of the four moves. The maker's drawing steps S19 near 12.5 mm on its own scale, which does not settle it. Every land Figure 1 does draw stays clear of the fans: rays reach 13.08 mm at S2, 12.96 mm at S3 and 10.49 mm at S14. S12's drawn cap end, 10.6 mm, sits inside rays that reach 11.02 mm, so the 11.44 mm cut stands. Corner transmission with S5, S16, S17 and S19 at the fan radii would be 40.2%, 52.5% and 64.8%, a loss of 9.7, 15.7 and 13.3 points from today's 49.9%, 68.2% and 78.1%. S5, S16, S17 and S19 keep `sd` 14.9, 12.9, 13.0 and 13.0, and the model's corners remain brighter than the design's.
