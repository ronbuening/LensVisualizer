# Fresh audit — November 16, 2026

Historical October 2 association PR9902-06, not a new discovery. Newly modeled E1 with factory identity explicitly unverified. Primary PDF page 9/Table 1 visually checked against transcription; source stop and source image interval literal. Partial dispersion ratios transcribed into structured dPgF using engine normal line.

Geometry iteration: initial heuristic L3 SD 28 mm failed gap 4–5 intrusion check; SD 26 mm passes. No source radii/spacing changes or allowance overrides. Ingestion, axial samples, all 7 field stations, source-plane and render diagnostics pass; no hidden trimming. Source-plane offset +0.003191 mm, tolerance 0.381798 mm.

Fresh-main filename check f5b456fec7b69184844078f6ec6b1ac132f8ec58: no matching FA645300 file. Full source-body/alias and compatibility checks still required. Test snapshot /tmp/lens-derive-base, not asserted current-main. No full typecheck/regression or browser QA claimed. Estimated clear apertures and approximate glass dispersion limit performance predictions. No finite-focus positions invented.


## 2026-11-16 refinement
- Re-read original A1 Figure 1/Table 1; no defensible SD, literal prescription, glass, stop or image-plane change identified.
- Data changes: explicit infinity-only subtitle, required closeFocusM disclaimer and source/dispersion/field-boundary header. No optical numerical changes.
- Fresh independent d-line trace and geometry evidence plus pinned-engine ingestion/reference-geometric MTF recorded in analysis. No failed/unaimed rays in four app fields.
- Inherited earlier render check remains inherited, not newly run. Full regression/browser and finite-focus validation not claimed.

## 2026-11-16 — Deployment validation

Checked independently against US 2002/0041452 A1 (page image of Table 1): all 14 surfaces and the stop gaps match; no aspheres, no variable gaps printed. The model gives f 292.353 (292.35), F5.7, fB 116.663 (116.66), and reproduces the group focal lengths and Table 6 conditions. The `dPgF` values follow from the printed partial dispersion ratios (0.5774, 0.5703) on the engine normal line. Ricoh Imaging lists the smc PENTAX-FA645 300mmF5.6ED[IF] as 7 elements in 7 groups, ED glass, inner focus, 2.2 m; Pentax has published no construction diagram, so the product match rests on those figures. The FA★645 300mm F4 (8/8) does not fit this patent.

- Assignee changed to the corpus form "Asahi Kogaku Kogyo Co., Ltd.".
- Open: Embodiments 1 and 3 fit the product equally; Embodiment 1 is a choice, not a proven identity.
- Open: `focus.closeFocusM` carries the maker's 2.2 m although the model is infinity-only; name, key, specs, element types and glass labels are still in package wording. The corner bundle is cut 38–45 % one-sided at S1–S6 by the inferred rims.

## 2026-11-16 — Cleanup and wording pass

Public text and metadata only; no radius, thickness, index, Abbe number, semi-diameter or stop value changed.

- Data file: house header, unquoted keys, one-line surfaces. Subtitle is now "US 2002/0041452 A1, Embodiment 1 — production correlation by construction". Specs are 7 ELEMENTS / 7 GROUPS; ED GLASS, ALL SPHERICAL; 300 mm MARKETED / 292.35 mm DESIGN; F5.6 MARKETED / F5.7 DESIGN; INNER FOCUS, 2.2 m MINIMUM.
- Focus: `focus.closeFocusM` 2.2 → 1e15 (focus not modeled), the maker's 2.2 m moved to `catalog.closeFocusM.marketing`, description rewritten as "Infinity focus only; …". This closes the 2.2 m item in the deployment-validation section above.
- Elements: types named from the signs of R (L1, L2, L6 Biconvex Positive; L3 Biconcave Negative; L4, L7 Negative Meniscus; L5 Positive Meniscus), a specific role for each, `focalLengthMm` 148.21 / 130.45 / −102.74 / −85.35 / 176.83 / 128.83 / −123.58. Group brackets G1 (+) surfaces 1–6, G2 (−) focus 7–10, G3 (+) 11–14 from the patent text. No cemented pairs, so no `cemented` or `doublets` entries.
- Glass labels, exact catalog rows (Δnd, Δνd against the printed values): L1 S-FSL5 (0.00000, +0.04); L2 S-FPL51 (0.00000, −0.05); L3 S-BAH32 (0.00000, −0.03); L4 S-NBH5 (−0.00001, −0.02); L5 S-TIH6 (0.00000, +0.03); L6 S-TIL26 (0.00000, +0.02); L7 S-LAH60 (0.00000, −0.04). All were "Unmatched" before. The patent-printed `dPgF` is kept on L3 and L4: the printed ratios 0.5774 and 0.5703 are 0.0041 and 0.0035 below the catalog values of S-BAH32 (0.5815) and S-NBH5 (0.5738). N-KZFS5 (Schott, 0.5710) is nearer the printed L4 ratio; the Ohara row was kept for a single-vendor palette matching the folder's label form.
- `apd: "inferred"` on L2, the only ED-class glass in the prescription; the maker states ED glass without a count or position.
- Analysis: rewritten to the house skeleton with an H1; process passages (ray counts, sampling grids, build references) removed; the grant US 6,580,568 B2 (June 17, 2003, application 09/921,897) confirmed on Google Patents; the equal fit of Embodiments 1 and 3 stated; closing section renamed "Model Scope and Limitations".
- Engine numbers before and after are identical: EFL 292.35344, F5.7, stop radius 16.29557, BFD 116.6632, half-field 12.1196 (engine default), total length 246.00. The surface audit reports no errors, the aperture audit no rim, trace or iris limit, and field coverage is at least 99 %.

Open: `aperture.nominalFNumber` stays 5.7 with `fStops` starting at 5.7. The house pattern of the FA 645 120mm (nominal = marketed) would set 5.6 and enlarge the traced stop, since the stop has no stored semi-diameter.
Open: Embodiments 1 and 3 fit the product equally; Embodiment 1 is a choice, not a proven identity.
Open: the semi-diameters are estimates. At the 645 corner the bundle is cut 38–45 % one-sided at S1–S6, worst at S5, where L3 is held to 26 mm by the 0.99 mm gap behind L2. No maker cross-section is available to check the rims against.
Closed in the second review below: BPH5 (L4) and BAH32 (L3) fit the printed ratios.
Open: no close-focus state is modeled; the patent prints none.

## 2026-11-16 — Semi-diameter pass against Fig. 1

Source: US 2002/0041452 A1, sheet 1 (PDF page 2), Fig. 1, native 300 dpi raster read at 600 dpi. The scan is sheared and the axis tilts about 2°, so heights were read against the local axis on both sides of it. Axial scale 10.96 px/mm from the S1–S11 vertex span (88.76 mm = 973 px), confirmed on S1–S7 (50.97 mm, 559 px) and S1–S13. Vertical scale checked on the stop ticks: opening ±17.0 mm against a traced stop radius of 16.3–16.8 mm. Reading error is about ±0.5 mm.

| Element | Surfaces | Before | Fig. 1 | After | Reason |
|---|---|---:|---:|---:|---|
| L1 | 1, 2 | 31 | 27.2 | 31 | kept: 30 costs no corner light but lowers the engine half-field estimate from 12.12° to 11.7° |
| L2 | 3, 4 | 30 | 26.0 | 29 | smallest value that keeps the engine half-field at 12.12°; no light cost |
| L3 | 5, 6 | 26 | 25.0 | 26 | within reading noise; faces S4/S5 would meet near 27.5 mm |
| L4 | 7, 8 | 22 | 18.0 | 18.6 | figure, kept 0.5 mm above the F5.6 axial ray (18.09); 0.1 point at 2.2° |
| L5 | 9, 10 | 21 | 18.1 | 18.3 | figure; F5.6 axial ray 18.16; no light cost |
| L6 | 11, 12 | 19 | 16.9 | 17.2 | figure; F5.6 axial ray 17.01; no light cost |
| L7 | 13, 14 | 22 | 15.0 | 17 | figure draws it much smaller; 17 costs 0.7 point at the corner, 16.5 would cost 2.5 and 15 about 10 |

Fig. 1 draws every rim just outside the axial beam (the G2 and L6 rims coincide with the F5.6 marginal ray). Fitting all seven to the drawing would take the 6.7° corner from 74.2 % to 55.6 % and the engine half-field to 10.7°, so the cuts are limited to those that cost almost no light.

Corner illumination, wide open, baseline → now: 98.6 → 98.5 % at 2.2°, 93.1 → 93.1 at 3.4°, 87.2 → 87.2 at 4.5°, 80.7 → 80.7 at 5.6°, 74.2 → 73.4 at 6.7°. Worst loss 0.7 point; restoring L7 alone wins it back. Engine EFL 292.353, F5.7, stop radius 16.296 and half-field 12.12° are unchanged. The surface audit reports no errors, the aperture audit no rim, trace or iris limit, the image-circle audit nothing undersized, field coverage at least 99 %, and the real-ray clearance at Y = 34.85 mm shows no axial clip and no blocked chief ray. No `gapSagFrac` override was needed. The one-sided corner cut quoted in the earlier Open line still comes from the front group (L1–L3), which this pass leaves as it was apart from L2.

Metadata: `aperture.blades: 9` added from the Ricoh Imaging product page (https://www.ricoh-imaging.co.jp/english/products/lens/645/telephoto/smcpentax-fa645-300/), which also confirms F5.6–F45, 2.2 m, 7 elements in 7 groups and the 645 mount. The maker writes the product name "smc PENTAX-FA645 300mmF5.6ED[IF]"; the display name carries the same words in the folder's house form.

Closed in the second review below: L1 and L2 were 14 % and 12 % larger than Fig. 1; they are now 30 and 27 mm.
Open: L7 remains 13 % larger than Fig. 1 because the drawn rim would darken the corner.
Open: the stop has no stored semi-diameter; a stop of 16.59 mm would make a nominal F5.6 honest, and the new L4–L6 rims already clear that beam.

## 2026-11-16 — Second review on the local site

Compared: the live page (infinity, and the inspector of all seven elements) with US 2002/0041452 A1 Fig. 1, Table 1 and the text, and the model's colour with Fig. 2A. No maker construction drawing exists for this lens.

Figure re-read (600 dpi, local axis, 10.96 px/mm from the S1–S7 span of 50.97 mm = 559 px, heights on both sides of the axis): L1 27.4, L2 25.9, L3 25.1, L4 18.1, L5 18.0, L6 17.0, L7 15.1 mm, stop opening ±17.0. These agree with the earlier readings within 0.2 mm.

| Element | Surfaces | Baseline | Before | Fig. 1 | After | Light cost | Verdict |
|---|---|---:|---:|---:|---:|---|---|
| L1 | 1, 2 | 31 | 31 | 27.4 | 30 | 0.0 point | cut, slight; 29 would cost 2.5 points at 6.7° |
| L2 | 3, 4 | 30 | 29 | 25.9 | 27 | 0.0 point | cut, slight; now 1 mm above L3 as drawn (0.8 mm) |
| L3 | 5, 6 | 26 | 26 | 25.1 | 26 | none | unchanged, within reading error |
| L4 | 7, 8 | 22 | 18.6 | 18.1 | 18.6 | 0.1 point at 2.2° | cut kept, slight |
| L5 | 9, 10 | 21 | 18.3 | 18.0 | 18.3 | 0.0 point | cut kept |
| L6 | 11, 12 | 19 | 17.2 | 17.0 | 17.2 | 0.0 point | cut kept |
| L7 | 13, 14 | 22 | 17 | 15.1 | 17 | 0.7 point at 6.7° | cut kept, slight; not lowered further |

Lands and cuts: no `rimExtensionSd` or `rimCutDepthMm` in the file. Full-pupil transmission, baseline → now: 98.6 → 98.5 % at 2.2°, 93.1 → 93.1 at 3.4°, 87.2 → 87.2 at 4.5°, 80.7 → 80.7 at 5.6°, 74.2 → 73.4 at 6.7°; worst loss 0.7 point, all of it from L7. The front rims of 30 and 27 mm change no sample. The lens has no near state, so no finite-conjugate check applies.

Engine half-field estimate 12.12° → 11.33°, set by L2. The patent's half-field is 6.7° and the 645 corner 6.8°, so the estimate still exceeds the field by two thirds; it only moves the default off-axis fan from 7.27° to 6.80°, which is the frame corner. EFL 292.353, F5.7, stop radius 16.296 and back focus 116.663 are unchanged. After the edit the surface audit reports no errors, the aperture audit no rim, trace or iris limit, the image-circle audit nothing undersized, field coverage at least 99 %, and the real-ray clearance at Y = 34.85 mm no axial clip and no blocked chief ray.

Labels and tags found correct: element types against the signs of R, the seven focal lengths (recomputed, equal to two decimals), brackets G1 (+) 1–6, G2 (−) focus 7–10, G3 (+) 11–14 against the patent's first, second and third lens groups (10, 20, 30), the stop 20.25 mm behind L5 and 1.5 mm ahead of L6, no aspheres, no cemented pairs, `apd: "inferred"` on L2. The patent designates the elements 10a, 10b, 10c, 20a, 20b, 30a, 30b and uses "L2" for the G2–G3 distance in Fig. 1; the sequential L1–L7 names are kept.

Focus: no variable gap in the file, `focus.closeFocusM` 1e15, slider shown as not modeled. The description matches ¶[0036] and ¶[0058] (second group moves toward the image from infinity to the shortest distance, diaphragm fixed between the second and third groups) and the maker's 2.2 m.

Glass and colour:

- L4 relabelled S-NBH5 (OHARA) → BPH5 (OHARA): nd 1.654115, νd 39.69 (Δnd −0.000005, Δνd −0.01), partial dispersion ratio 0.5709 against the printed 0.5703; S-NBH5 has 0.5738. A resolved label takes its dispersion from the catalog and the stored `dPgF` is not used, so the label decides the g line.
- L4 tagged `apd: "patent"`: ¶[0056] speaks of "the anomalous dispersion characteristics of the glass materials used in the negative lens elements" (third and fourth), condition (6) is 0.6371 < 0.638, and the printed ratio lies 0.0067 below the normal line. L3 is left untagged: its printed ratio lies on the normal line (−0.0003).
- L3: the printed 0.5774 fits Ohara's older BAH32 (nd 1.669979, νd 39.28, ratio 0.5779; `OHARA_260701.AGF`, discontinued), not S-BAH32 (0.5815). A BAH32 row was then added to the glass catalog and L3 relabelled S-BAH32 (OHARA) → BAH32 (OHARA): Δnd −0.000001, Δνd −0.02, ratio 0.5779. Its `apdNote` now quotes that ratio; it stays untagged.
- Fig. 2A, read against the sheared d-line: C +0.12 mm on axis and about +0.15 at the full aperture; g +0.11 on axis and about −0.10 at the full aperture. Model with S-BAH32 and S-NBH5 (before): C +0.14 / +0.16, g +0.21 / 0.00. With S-BAH32 and BPH5 (L4 relabelled only): C +0.13 / +0.15, g +0.17 / −0.05. With BAH32 and BPH5 (the file as it now stands): C +0.130 / +0.150, F −0.020 / −0.119, g +0.107 / −0.116, d-line back focus 116.658, which is the plot within reading error. These come from a separate exact meridional trace using the catalog rows' Sellmeier coefficients; both labels resolve in the glass catalog to ratios 0.5779 and 0.5709.
- The other five rows match the printed digits (Δνd at most 0.05). The patent prints no further line indices and no glass names. No constant-index medium.

Assignee: the front page prints "ASAHI KOGAKU KOGYO KABUSHIKI KAISHA"; the file's "Asahi Kogaku Kogyo Co., Ltd." is the form used by 29 other files.

Closed: the Ohara BAH32 row was added and L3 relabelled; the 0.06 mm g-line excess is gone.
Open: L1 remains 10 % and L7 13 % larger than Fig. 1 because smaller rims would darken the corner (L1 at 29 mm: 2.5 points; L7 at 16.5 mm: 2.5 points).
