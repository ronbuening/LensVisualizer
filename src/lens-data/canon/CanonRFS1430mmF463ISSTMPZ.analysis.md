# Canon RF-S 14-30mm f/4-6.3 IS STM PZ — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** JP 2025-50505 A (特開2025-50505)\
**Application:** 特願2023-159337\
**Filed:** September 25, 2023\
**Published:** April 4, 2025\
**Inventor:** Takeharu Nakada (仲田 丈晴)\
**Applicant:** Canon Inc.\
**Title:** ズームレンズおよび撮像装置\
**Classification:** G02B 15/167; G02B 13/18\
**Claims:** 16\
**Worked examples:** 5\
**Example details:** 数値例5 / Numerical Example 5; Figures 9 and 10

The October 30, 2026 scoped reopening directly checks the exact local `patents/JP2025050505A.pdf`, all selected rows and aspheric coefficients, source definitions and native Figures 9–10. The actual October 1 shape/glass review remains dated in the audit; its unchanged source transcription, constrained clear caps, motion and qualified production correlation are retained. New connected shoulder evidence, unsupported public chemistry implications and expanded control-state checks are the scope of this reopening.

Numerical Example 5 has ten elements in nine groups, four aspheric surfaces on two monolithic source-unidentified media, and one cemented doublet. The four groups have negative/positive/negative/positive power. Canon is the applicant; the source does not name a retail product, historical supplier, material chemistry or production melt. Similarity to the RF-S14–30 construction remains a plausible production correlation, not manufacturer confirmation. Prior comparisons with production PMo/UD terminology do not identify the selected example's two unmatched media or chemical composition.

## Prescription, Stops and Source Limits

Numerical Example 5 starts at the bottom of PDF page 13, continues with every remaining surface, all four K/A4–A12 coefficient sets and the three-station summary on page 14, and ends with group data on page 15. Paragraphs 0037–0041, pages 8–9, define the d-line prescription, units and asphere equation. R/d, aspheres, all source media coordinates, focus reconstruction, stop authority and zoom/focus/aperture controls are unchanged.

| Group | Elements                                                              | Printed focal length | Source motion                                   |
| ----- | --------------------------------------------------------------------- | -------------------: | ----------------------------------------------- |
| L1    | G11 negative, G12 negative/aspheric, G13 positive                     |            −20.50 mm | Fixed at zoom/focus                             |
| L2    | G21 positive, STO, G22 positive, cemented G23 negative + G24 positive |            +17.40 mm | Moves objectward wide→tele; fixed for focus     |
| L3    | G31 negative, G32 positive/aspheric                                   |            −29.02 mm | Moves objectward wide→tele; imageward for focus |
| L4    | G41 image-convex positive meniscus                                    |            +51.05 mm | Fixed                                           |

The unpowered source row 1 is flat air/air with d0 and is omitted. Source row 11 is flat air/air immediately behind STO with d1.00 mm; its interval is retained in STO's modeled d1.00 mm. These do not move any powered vertex or reverse refraction order. No cover plate, required filter or hybrid resin layer is listed; row 22 retains physical d14.20 mm. Source numbers are unscaled.

| Source infinity station |  Wide | Middle |  Tele |
| ----------------------- | ----: | -----: | ----: |
| Focal length, mm        | 14.41 |  20.03 | 29.35 |
| F-number                |  4.08 |   5.18 |  6.43 |
| Half-field, degrees     | 40.33 |  33.59 | 25.69 |
| Image height, mm        | 12.24 |  13.31 | 14.12 |
| Stated total length, mm | 80.14 |  80.14 | 80.14 |
| BF, mm                  | 14.20 |  14.20 | 14.20 |
| d7, mm                  | 16.90 |   9.35 |  1.30 |
| d16, mm                 |  2.57 |   3.06 |  5.63 |
| d20, mm                 |  5.74 |  12.79 | 18.28 |

The current iris is derived from the published design F-numbers at each zoom station; no physical stop diameter is printed. Runtime radii are 4.451051189, 4.189110172 and 4.080309382 mm. These are model-derived iris values, not a source physical schedule. The current f-number targets already quote the original and are retained.

Literal gap tracks are 80.16/80.15/80.16 mm versus stated 80.14 mm; the cause is unresolved rather than proved rounding. The source condition (9) lower bound is 0.05 in claim 9/configuration 9 and 1.05 in paragraph 0023; selected value 1.207 meets either reading. Structured unresolved notes preserve both observations without fitting radii, gaps, stops or cams.

## Native Rim and Concave-End Review

Figure 9, PDF page 20, is an embedded 1287 ×1542 JPEG at about 389 ppi. Figure 10 is a separate 1297 ×1962 JPEG at about 446 ppi. A 600-dpi page render upsamples the figure ink; it is not 600-dpi native evidence. The Figure 9 first-surface-to-image span is about 986 pixels over 80.16 mm, approximately 12.3 px/mm. Practical undimensioned semi-height uncertainty is about ±0.35 mm, including stroke width, schematic scaling and conservative cap anchoring. Native wide/tele drawings agree in blank-height order. Group brackets, DOE-free focus arrows, leaders, SP and IP strokes are excluded.

Every element, concave end, sole cemented interface and all four aspheres was inspected. The original prints no effective-diameter column. All existing clear semi-diameters remain inferred and unchanged. Three resolved connected outer strokes are represented without enlarging the optical caps:

| Surface        | Retained clear sd | Adopted outer rimExtensionSd | Native evidence                                                                                             |
| -------------- | ----------------: | ---------------------------: | ----------------------------------------------------------------------------------------------------------- |
| 3, G11 rear    |               9.2 |                        12.85 | Strong concave cap stops inward of the vertical upper/lower blank ends                                      |
| 18, G31 rear   |               5.5 |                          5.8 | Short connected rear stroke continues to the existing front blank height                                    |
| 19A, G32 front |               5.6 |                          6.2 | Front outer stroke precedes the inward aspheric cap; conservative outer value anchored to retained rear cap |

The native G32 outer outline is approximately 6.5 mm; the adopted 6.2 mm conservative cap anchor is within the stated drawing uncertainty and does not invent a larger unsupported optical cap. These are connected blank extensions, not detached wings, mechanical flanges or opaque cemented-interface lands. G12 and G32 remain single modeled media with two aspheric faces each; their manufacturing chemistry is unknown.

Rejected full-clear S3=9.6 mm gives combined 3→4A sag 6.38 mm versus allowed 5.895 mm in the 6.55 mm gap. Raising S18/S19A clear caps to 5.8/6.2 mm gives combined sag 1.40 mm versus allowed 1.368 mm in the 1.52 mm gap. The trial clone removes the corresponding redundant outer-extension fields so the reported refusal is the geometric condition itself. Both trials are rejected; original R/d, clear caps and tolerances remain. The outer strokes express resolved drawing shoulders without extending refraction into those constrained caps. No cuts or rimCutDepthSource exemptions exist.

## Glass, Reference Wavelengths and Published Spectral Content

Every one of the ten modeled media was checked against the selected table. Paragraph 0037 explicitly defines nd/νd; paragraph 0038 gives d587.6, F486.1 and C656.3 nm with νd=(Nd−1)/(NF−NC). Paragraph 0043 and Figure 10 identify the g435.8 nm plot. The source gives no selected individual C/F/g indices, partial-dispersion ratios, material vendors or APD classification. No authored per-lens spectral override exists or is introduced.

| Medium / source row |      nd |   νd | Retained current spectral resolution                 |
| ------------------- | ------: | ---: | ---------------------------------------------------- |
| G11 /2              | 1.77250 | 49.6 | TAF1 qualified proxy                                 |
| G12 /4              | 1.53504 | 55.7 | Unmatched; material identity and spectrum unresolved |
| G13 /6              | 1.84666 | 23.9 | S-TIH53WN qualified proxy                            |
| G21 /8              | 1.48749 | 70.2 | S-FSL5 qualified proxy                               |
| G22 /12             | 1.80400 | 46.5 | S-LAH65VS qualified proxy                            |
| G23 /14             | 1.95375 | 32.3 | S-LAH98 qualified proxy                              |
| G24 /15             | 1.49700 | 81.7 | FCD1 qualified proxy                                 |
| G31 /17             | 1.63980 | 34.5 | S-TIM27 qualified proxy                              |
| G32 /19             | 1.53504 | 55.7 | Unmatched; material identity and spectrum unresolved |
| G41 /21             | 1.90043 | 37.4 | TAFD37A qualified proxy                              |

All eight existing resolved curves retain exactly their prior identities; none is enabled, disabled or substituted by this label qualification. The old slash labels resolved to TAF1 and FCD1, which the current labels state explicitly. All ten source numeric pairs are protected. G24's existing inferred APD flag is retained only as conditional behavior under the compatible FCD1 proxy, not a source or production material identification. Its original gives no partial. No source APD badge is invented. The two unmatched media retain the engine's ordinary nd/νd dispersion approximation; no polymer grade, chemistry or artificial coefficient fit is supplied.

A low index around 1.535 does not identify a COP or molding process. The former COP-like/polymer, lanthanum/titanium/fluorophosphate chemistry implications are withdrawn from current public labels and analysis. All supplier/melt/composition identities remain unknown; compatible curves supply qualified spectral behavior. Source d/g plots are contextual evidence, not historical catalog identification or proof of production chromatic performance.

## Focus Reconstruction and Quantitative Control Limits

Paragraph 0036 page 8 gives only L3 imageward motion for close focus. It supplies no close-focus distances, spacings or intermediate cam. Existing reconstructed L3 shifts 1.428/2.166/4.126 mm, d16+d20 conservation and 0.15 m display endpoint are retained. They were solved against each station's own paraxial infinity plane, not a published near station. Interpolated focus and zoom states remain illustrative.

A geometry-identical 65-station diagnostic clone matches actual runtime geometry exactly at focus 0/.5/1. All 65 infinity aperture stations meet the unchanged 3% criterion, and all65 current-format chief-coverage stations report at least 99%. Source real working values are 4.098124377/5.218597563/6.477245719 versus printed 4.08/5.18/6.43. All 65 exact working calls trace, with maximum relative difference +0.745127%. A separate 65 zoom ×5 focus ×13-preset diagnostic traces all 4225 calls before and after. Those raw requested presets include values faster than some current wide-open states; they are supplementary probes, not a claim that the UI exposes a source-faster opening.

First-order infinity residuals relative to retained 14.20 mm image gap are −0.016309048/+0.002168181/−0.022888512 mm at the three source stations. Across interpolated zoom the worst sampled residual is −0.929653336 mm at zoom 0.78125; actual EFL 24.581654 mm versus displayed 25.2725 mm. No source cam is invented to remove that defocus.

A current-iris collimated pupil census covers 65 zoom positions ×5 focus controls ×3 fields, each 193 rays: 174678 pass, 13497 clip, 0fail/unaimed. All 325 axial bundles pass 193/193. Current-format full-field bundles at infinity pass 94/161/170 of 193 at W/M/T; reconstructed-close controls pass 100/163/170. These are collimated rays through focus-adjusted geometry, not finite-object illumination. A clear field chief does not imply an unvignetted pupil.

The actual finite-object supplement uses five zooms 0/.25/.5/.75/1 and 20 positive focus controls each. It derives the full current Gaussian object plane and inverse-solves object height to actual axis/half/full image height; targets follow the printed 12.24/13.31/14.12 mm heights at source stations and a stated linear interpolation between them. All 300 chief roots physically clear, with 54207 passed /3693 clipped /0failed /0unaimed pupil samples. Every finite axial bundle passes193/193.

At reconstructed closest focus, Gaussian total object-to-image distances are 149.473930/150.024246/149.848601 mm at W/M/T rather than an exact 150.00 mm. Intermediate zoom close states give 139.888044 mm at zoom .25 and 137.401694 mm at .75. The largest sampled display-plane image residual in this finite grid is −2.509245746 mm at zoom .75/focus.6 (Gaussian total 172.083208 mm versus display 250 mm). Maximum relative distance-label discrepancy reaches 83.157520% in this sampled grid. These are current reconstruction/control limitations, not new source focus data. No optical cap, gap or iris is retuned to conceal them.

## Field Convention, Render and Retained Constraints

The printed angles are consistent with paraxial atan(Y/f) and paragraph 0043 explicitly evaluates the plots by image height. Direct bounding-sphere vector chiefs at source 40.33/33.59/25.69° clear every modeled surface and land at |Y| 10.872872/12.552374/14.027139 mm. A separate wide 44.45° vector chief clears and lands 12.238816 mm, close to source Y12.24. The current APS-C field target is 14.175 mm and must not be confused with the smaller printed wide image height or a production digitally corrected field.

The October 1 review's meridional-field discrepancy remains retained evidence: its trace at the printed full image heights gave about−0.131 mm wide and−0.237 mm tele versus native plotted about−0.05/+0.11 mm. The current pass inspects the native Figure 10, retains literal asphere signs/exponents and does not claim a fresh dense aberration refit or prove why the source differs. The discrepancy is unresolved; a different plotted design state was an earlier hypothesis, not established fact.

Actual SVGs at source wide/middle/tele were compared with the native Figure 9 outlines. Across 65 zoom ×5 focus controls, 3250 element paths are finite, closed and connected, with zero hidden renderer trimming. The sole cemented interface stays a connected physical junction without an invented opaque land. The three shoulders improve resolved blank outlines while the existing constrained caps remain visible and documented.

Source stabilization alternatives (G21 alone or all L2 under paragraphs 0034/0036) provide no decenter travel or performance. There is no authored IS movement control to validate, and the current centered model cannot certify decentered production performance, barrel obstructions or electronic correction. Source fidelity, sampled runtime clearance, reconstructed focus and production correlation remain separate conclusions.

## Sources and Review History

- Exact local JP2025050505A.pdf, first page for identity; paragraphs 0034–0041 on pages8–9 for motion, materials, wavelengths and asphere convention; Numerical Example 5 pages13–15 for all selected rows/coefficient sets and summaries; native Figures 9–10 page 20.
- [Audit](CanonRFS1430mmF463ISSTMPZ.audit.md): actual October 1, 2026 source/glass/rim review and October 30 scoped reopening. Unchanged earlier conclusions are reused with their actual date; current material qualifications and three resolved shoulders are new.
