## Patent Reference and Design Identification

**Patent:** [JP 2017-223778 A](https://patents.google.com/patent/JP2017223778A/en)  
**Application Number:** JP2016-117760  
**Filed:** 14 June 2016  
**Published:** 21 December 2017  
**Inventor:** Noriyuki Ogasawara (original 小笠原典行)  
**Assignee:** Sigma Corporation  
**Title:** 防振機能を備えた変倍結像光学系 (original Japanese; translation: Variable-magnification imaging optical system with image stabilization)  
**Example details:** Numerical Table 1, original pages 13–14; Figure 1 and infinity aberration Figures 2, 5 and 8. Grant JP6690425B2 Figure 1 supplies the clearer supplemental construction drawing; its numerical table was independently checked against the application.

**This is a qualified related-patent reconstruction of the 2017 C017 DSLR product, not a proven factory prescription.** It is not the later DG DN mirrorless 100–400. The [primary Sigma page](https://www.sigma-global.com/en/lenses/c017_100_400_5_63/?tab=specification) identifies Sigma SA, Canon EF and Nikon F variants, 21 elements in 15 groups, four SLD elements, 1.6 m minimum focus, 1:3.8 maximum magnification, a 67 mm filter, 86.4 × 182.3 mm dimensions and 1160 g (SA figures).

The association is supported by: (1) exact 21/15 topology and six cemented pairs; (2) four marked manufacturer SLD positions corresponding to source L2/L3/L18/L20; (3) the five-unit +/−/+/+/− architecture, internal G4 focusing and transverse G2b stabilization; (4) near-100–400 focal range and contemporaneous filing. These convergent features do not establish numerical factory identity. Source apertures **F5.15/5.92/6.50** differ from retail F5–6.3 and remain the actual modeled apertures. Source image height is **21.63 mm**.

## Optical Architecture

There are 21 spherical glass pieces in 15 air-separated components. No asphere, resin layer or rear sensor plate is tabulated. The powers independently calculated from the literal d-line table are:

| Unit | Source surfaces | Calculated EFL, mm | Axial role                                      |
| ---- | --------------- | -----------------: | ----------------------------------------------- |
| G1   | S1–S5           |        +160.355020 | Positive front zoom unit                        |
| G2   | S6–S15          |         -36.021304 | Fixed negative unit; G2b decentered for OS only |
| G3   | S16–S24         |         +64.437713 | Positive zoom unit, stop immediately behind     |
| G4   | S26–S32         |         +53.204238 | Positive zoom and internal-focus unit           |
| G5   | S33–S37         |         -58.909508 | Negative rear zoom unit                         |

The iris is numbered surface 25: **S24→stop is 4.1000 mm**, followed by variable d25 to S26. Its radius is traced from each station's source F-number, not an independently invented fixed diameter. G2a S6–S10 and G2b S11–S15 are fixed axially during zoom/focus; only G2b has the patent's lateral stabilization motion, which is not simulated here. The native G2 coordinate relative to the image spans 0.0006 mm; that residual is retained without attributing it to rounding.

### Native planes and inferred continuous motion

| Station | Printed f, mm | Computed EFL, mm | Literal BF, mm | Paraxial BFD minus literal BF, mm |
| ------- | ------------: | ---------------: | -------------: | --------------------------------: |
| Wide    |        103.16 |     103.16548752 |        52.6388 |                      +0.000939466 |
| Middle  |        200.12 |     200.11859168 |        79.0754 |                      +0.000615706 |
| Tele    |        387.95 |     387.94926066 |        95.3018 |                      -0.003135711 |

Every native radius, thickness, material coordinate, gap and image plane stays literal. Best axial focus is a separate diagnostic, not a silent source-plane correction. The raw three-station interpolation adds approximately 11.092 mm intermediate defocus and is rejected, with its failures preserved.

The inferred cam keeps d5, d15 and BF piecewise linear through the three source stations, and keeps d25+d32 piecewise linear to preserve the source fixed-G2 coordinate. Only the G4 split between d25 and d32 is solved to interpolate the native scalar residual; intermediate EFL labels are calculated, not forced to an arbitrary focal schedule. This is not a recovered production cam. Only stations 0/64/128 are marked published; all inferred focus positions remain unpublished.

A bounded 3/9/17/33/65/129-control study selects 129 zoom controls. At 65, worst additional residual +0.0217857 mm at z=0.9921875 combines with native-interpolated −0.0030771 mm to give +0.0187086 mm absolute. At 129, +0.00551784 mm at z=0.99609375 combines with −0.00310640 mm to give +0.00241144 mm; global absolute maximum is the retained native tele −0.00313571 mm. The different signs explain why the maximum added error exceeds the maximum absolute error.

65→129 controls changes sampled reference-plane MTF40 by up to 0.07528, and reduces worst sampled far-focus label error from 7.857% to 1.863%. Denser motion sometimes lowers MTF because source spherical-aberration best focus differs; this is not MTF optimization. The existing infinity inconsistency gate is 10×2λN² at the d line, **not an optical-quality certificate or a finite-focus tolerance**. No new 0.005 mm acceptance threshold is introduced.

## Element-by-Element Analysis

Isolated-air thick-lens focal lengths below describe shape and sign only; cemented members' complete-system contributions are coupled. Roles are interpretation from group/location, not unsupported claims that an individual element uniquely controls one aberration. No factory material identity is assigned.

### L1 — Negative Meniscus

nd = 1.83481, νd = 42.72. Glass: unassigned source medium, not factory identification. f = -150.668 mm (isolated-air estimate).

Negative Meniscus member of G1, beginning at S1. Shares cemented pair D1; the source interface and separate glass are retained.

### L2 — Biconvex Positive

nd = 1.49700, νd = 81.61. Glass: unassigned source medium, not factory identification. f = +149.279 mm (isolated-air estimate).

Biconvex Positive member of G1, beginning at S2. Shares cemented pair D1; the source interface and separate glass are retained. Its position matches a blue SLD element in the manufacturer construction drawing; the patent supplies nd/νd, not a named melt or partial dispersion.

### L3 — Biconvex Positive

nd = 1.49700, νd = 81.61. Glass: unassigned source medium, not factory identification. f = +163.116 mm (isolated-air estimate).

Biconvex Positive member of G1, beginning at S4. Its position matches a blue SLD element in the manufacturer construction drawing; the patent supplies nd/νd, not a named melt or partial dispersion.

### L4 — Positive Meniscus

nd = 1.69895, νd = 30.05. Glass: unassigned source medium, not factory identification. f = +187.616 mm (isolated-air estimate).

Positive Meniscus member of G2, beginning at S6.

### L5 — Biconvex Positive

nd = 1.54814, νd = 45.82. Glass: unassigned source medium, not factory identification. f = +161.105 mm (isolated-air estimate).

Biconvex Positive member of G2, beginning at S8. Shares cemented pair D5; the source interface and separate glass are retained.

### L6 — Biconcave Negative

nd = 1.83481, νd = 42.72. Glass: unassigned source medium, not factory identification. f = -56.714 mm (isolated-air estimate).

Biconcave Negative member of G2, beginning at S9. Shares cemented pair D5; the source interface and separate glass are retained.

### L7 — Biconcave Negative

nd = 1.72916, νd = 54.67. Glass: unassigned source medium, not factory identification. f = -99.799 mm (isolated-air estimate).

Biconcave Negative member of G2, beginning at S11.

### L8 — Biconcave Negative

nd = 1.72916, νd = 54.67. Glass: unassigned source medium, not factory identification. f = -35.445 mm (isolated-air estimate).

Biconcave Negative member of G2, beginning at S13. Shares cemented pair D8; the source interface and separate glass are retained.

### L9 — Positive Meniscus

nd = 1.85478, νd = 24.80. Glass: unassigned source medium, not factory identification. f = +69.290 mm (isolated-air estimate).

Positive Meniscus member of G2, beginning at S14. Shares cemented pair D8; the source interface and separate glass are retained.

### L10 — Biconvex Positive

nd = 1.59349, νd = 67.00. Glass: unassigned source medium, not factory identification. f = +65.574 mm (isolated-air estimate).

Biconvex Positive member of G3, beginning at S16.

### L11 — Biconvex Positive

nd = 1.59349, νd = 67.00. Glass: unassigned source medium, not factory identification. f = +91.752 mm (isolated-air estimate).

Biconvex Positive member of G3, beginning at S18.

### L12 — Negative Meniscus

nd = 2.00100, νd = 29.13. Glass: unassigned source medium, not factory identification. f = -92.727 mm (isolated-air estimate).

Negative Meniscus member of G3, beginning at S20.

### L13 — Positive Meniscus

nd = 1.69895, νd = 30.05. Glass: unassigned source medium, not factory identification. f = +85.840 mm (isolated-air estimate).

Positive Meniscus member of G3, beginning at S22. Shares cemented pair D13; the source interface and separate glass are retained.

### L14 — Negative Meniscus

nd = 2.00100, νd = 29.13. Glass: unassigned source medium, not factory identification. f = -67.236 mm (isolated-air estimate).

Negative Meniscus member of G3, beginning at S23. Shares cemented pair D13; the source interface and separate glass are retained.

### L15 — Positive Meniscus

nd = 1.71736, νd = 29.50. Glass: unassigned source medium, not factory identification. f = +109.750 mm (isolated-air estimate).

Positive Meniscus member of G4, beginning at S26. Moves with G4 for the disclosed inferred finite focus.

### L16 — Biconvex Positive

nd = 1.65844, νd = 50.85. Glass: unassigned source medium, not factory identification. f = +40.638 mm (isolated-air estimate).

Biconvex Positive member of G4, beginning at S28. Shares cemented pair D16; the source interface and separate glass are retained. Moves with G4 for the disclosed inferred finite focus.

### L17 — Biconcave Negative

nd = 1.95375, νd = 32.32. Glass: unassigned source medium, not factory identification. f = -37.492 mm (isolated-air estimate).

Biconcave Negative member of G4, beginning at S29. Shares cemented pair D16; the source interface and separate glass are retained. Moves with G4 for the disclosed inferred finite focus.

### L18 — Biconvex Positive

nd = 1.55032, νd = 75.50. Glass: unassigned source medium, not factory identification. f = +87.827 mm (isolated-air estimate).

Biconvex Positive member of G4, beginning at S31. Its position matches a blue SLD element in the manufacturer construction drawing; the patent supplies nd/νd, not a named melt or partial dispersion. Moves with G4 for the disclosed inferred finite focus.

### L19 — Negative Meniscus

nd = 1.95375, νd = 32.32. Glass: unassigned source medium, not factory identification. f = -45.138 mm (isolated-air estimate).

Negative Meniscus member of G5, beginning at S33.

### L20 — Biconcave Negative

nd = 1.49700, νd = 81.61. Glass: unassigned source medium, not factory identification. f = -43.380 mm (isolated-air estimate).

Biconcave Negative member of G5, beginning at S35. Shares cemented pair D20; the source interface and separate glass are retained. Its position matches a blue SLD element in the manufacturer construction drawing; the patent supplies nd/νd, not a named melt or partial dispersion.

### L21 — Biconvex Positive

nd = 1.73800, νd = 32.26. Glass: unassigned source medium, not factory identification. f = +37.052 mm (isolated-air estimate).

Biconvex Positive member of G5, beginning at S36. Shares cemented pair D20; the source interface and separate glass are retained.

## Glass Identification and Selection

| Elements    |      nd |    νd | Assignment              |
| ----------- | ------: | ----: | ----------------------- |
| L1, L6      | 1.83481 | 42.72 | Source coordinates only |
| L2, L3, L20 | 1.49700 | 81.61 | Source coordinates only |
| L4, L13     | 1.69895 | 30.05 | Source coordinates only |
| L5          | 1.54814 | 45.82 | Source coordinates only |
| L7, L8      | 1.72916 | 54.67 | Source coordinates only |
| L9          | 1.85478 | 24.80 | Source coordinates only |
| L10, L11    | 1.59349 | 67.00 | Source coordinates only |
| L12, L14    | 2.00100 | 29.13 | Source coordinates only |
| L15         | 1.71736 | 29.50 | Source coordinates only |
| L16         | 1.65844 | 50.85 | Source coordinates only |
| L17, L19    | 1.95375 | 32.32 | Source coordinates only |
| L18         | 1.55032 | 75.50 | Source coordinates only |
| L21         | 1.73800 | 32.26 | Source coordinates only |

Indices and Abbe values use the d-line reference, 587.56 nm. The source does not give named melts or partial-dispersion/line-index data. A read-only scan of the pinned vendor catalog finds coordinate-compatible families, including several alternatives at nd=1.49700/νd=81.61 and FCD705 at 1.55032/75.50. This does not recover the actual factory melt or secondary spectrum, and no name is assigned merely to unlock spectral MTF. The unmatched labels denote unassigned source media, not proof that no compatible catalog family exists.

Reference-d-line MTF remains available. C/d/F and photopic requests correctly report **spectral-data-unavailable** for missing low-dispersion data; they are not zero MTF or optical failures. L10/L11 also have νd=67, above the engine's normal-dispersion confidence threshold. No chromatic-performance equivalence to Sigma's product plots is claimed.

## Focus Mechanism

Source paragraph 0076 and claim 3 identify **G4 alone (S26–S32), moving toward the object** for near focus. No numerical finite-focus station is published. The model reduces d25 and increases d32 by equal amounts, leaving all other group coordinates and the image plane fixed. The manufacturer supplies 1.6 m as minimum focus distance; this reconstruction interprets it under the catalog object-to-image convention, not a patent-published finite plane definition. Travel is calculated, not factory measured or patent certified:

| Native zoom | Inferred G4 travel, mm | Scalar magnification at1.6 m |
| ----------- | ---------------------: | ---------------------------: |
| Wide        |               1.626635 |                    −0.070487 |
| Middle      |               4.051992 |                    −0.132508 |
| Tele        |              12.449161 |                    −0.262167 |

Tele magnification is near the maker's 1:3.8, which is corroboration, not source certification. Nineteen focus controls are the smaller tested adequate set: [0, .004, .016] plus 1/16 increments. The 35-key alternative reduces a scalar residual but changes the checked valid d-line pupil intercept by less than 0.000791 mm; its extra density is not retained. A failed marginal-aim projection in that diagnostic is explicitly invalidated, not counted as an image result.

Across the sampled near-infinity-to-close domain t≥0.004, the final scalar label error peaks at **1.863%** (nominal400 m, actual407.45 m) and plane residual at **0.015519 mm** (tele t=.96875). These are disclosed approximations, not passes under a finite-MTF gate. Raw sub-step values0<t<.004 are not certified; native residuals dominate sufficiently near infinity. Coarser 17/33-control models' very large and virtual far-distance results are preserved as rejected diagnostics. **All finite MTF remains unavailable** because there is no published finite conjugate, even where inferred rays and scalar focus agree.

## Image Stabilization

G2b, S11–S15, moves transversely for shake correction. This candidate is centered only; no stabilization angle or moving decenter is represented. Figures4/7/10 show stabilized0.4° transverse cases and are not ordinary centered or finite-focus validation plots. Centered transverse plots are Figures3/6/9; infinity longitudinal plots are Figures2/5/8.

## Clear Apertures and Verification Limits

The application Fig1 render is faint. The independently cross-checked grant JP6690425B2 has a clearer same-example Fig1; six measured vertices fit its wide Table1 axial layout at7.428136 pixels/mm, maximum0.718px residual. Graphic outer-rim measurements are approximate, rounded to0.5mm, **not published numerical clear apertures**. The manufacturer sketch corroborates topology qualitatively, not a separate numerical aperture measurement. The front graphic estimate is34mm, not an assertion that the67mm filter opening provides34mm clear radius.

The original rounded estimates fail the default air-gap guard at S12→S13 and S19→S20. Source-geometry bounds justify reducing only inferred L7/L12 radii to11.8/12.1mm; their exact90%-sag maxima are11.80465/12.17819mm. All source R/d/nd/νd remain unchanged; no gap-sag override is used. The baseline failure is retained.

The final physical states are independently rebound to the sampled checks: 297 geometry states have zero render trim, minimum glass0.115479mm, minimum air0.095973mm and maximum gap-sag0.899284. All264 finite support assertions explicitly check `support.available=false` and `reason=finite-conjugate-unavailable`; an earlier empty-field/vacuous harness assertion is superseded and retained, not counted as proof.

Source-field pupil sampling covers16,470 requested rays: **13,723 passed, 631 physically clipped, 2,116 unlaunched, zero post-launch trace failures**. The separate full135format corner21.633308mm stress has3,294 requests: **2,311 passed, 317 clipped, 666 unlaunched, zero post-launch failures**. All sampled chief rays pass. These nonuniform polar counts are not area-weighted throughput and do not certify every pupil ray. Unlaunched requests are mostly noBracket with some aim-residual failures; trial paths often exceed an earlier physical rim, but this is not proof that no correctly aimed ray exists. Those requests remain unlaunched, not silently reclassified as ordinary vignetting.

The trace-coordinate contract is explicitly checked using actual terminal position/direction and the independent returned-vertex projection; maximum disagreement is7.11×10⁻¹⁵mm, maximum physical hit residual2.84×10⁻¹⁴mm. No failed/clipped terminal point is accepted as an image-plane result.

Sixty reference-wavelength field cases converged over native/intermediate/sensitivity/aperture/best-axial checks (including eight65-control comparison fields, not sixty final-candidate fields). Six spectral requests were guarded unavailable. Native and intermediate curves and best-axial shifts remain separate; convergence is not a quality claim. The native source plane is not changed to maximize MTF. The original comparison harnesses depended on a live candidate and became unreproducible after focus density changed; versioned v003 harnesses now bind explicit immutable19/35 and65/129 variant inputs and assert key/grid dimensions. Corrected bounded replays preserve all18 valid finite intercepts and all16 compared infinity MTF field results; two failed marginal aims remain unlaunched with no image result. Original harnesses/receipts and their mistakes are preserved, not rewritten as historical proof.

**Status: BUILT_AWAITING_VALIDATION_EXECUTION.** Independent source review passed for the qualified related-design basis. Final model review, full type/format/lint/main/tooling/build integration gates and actual viewer QA are not established by these bounded checks. No public production deployment or full completed-package claim is made.

## Sources

- [Sigma C017 product specifications and primary construction/MTF images](https://www.sigma-global.com/en/lenses/c017_100_400_5_63/?tab=specification).
- [JP2017-223778A original publication](https://patents.google.com/patent/JP2017223778A/en), original PDF Table1 pp13–14, definitions p12, motion paragraphs0072–0077.
- [JP6690425B2 grant](https://patents.google.com/patent/JP6690425B2/en), supplementary clearer Fig1 only after independent numerical-table comparison.
- Reproducible source, failed alternatives, raw diagnostics and immutable independent source review are preserved in the accompanying research archive.
