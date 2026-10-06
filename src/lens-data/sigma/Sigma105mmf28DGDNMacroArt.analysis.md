# SIGMA 105mm f/2.8 DG DN MACRO | Art

## Patent Reference and Design Identification

**Patent:** JP 2021-148808 A  
**Application Number:** JP 2020-044913  
**Filed:** 16 March 2020  
**Published:** 27 September 2021  
**Inventor:** Yuki Ueda  
**Applicant:** Sigma Corporation  
**Title:** Inner focus lens  
**Embodiment analyzed:** Numerical Example 1

The prescription follows the original Japanese publication, including the three numerical focus states in PDF pp. 15–17. The inventor is printed as 植田 裕輝; Yuki Ueda is the public romanized form. All dimensions remain at native scale. The optical correlation with the commercial lens is supported by the following evidence, without manufacturer confirmation of the exact factory prescription.

1. The selected example has 17 glass elements in 12 air-separated groups, matching the official product construction. The manufacturer lists one SLD element; the patent supplies numerical glass coordinates and partial dispersions without production supplier or SLD branding assignments.
2. The infinity design is close to the marketed 105 mm, F2.8, 23.3° class. Exact design and marketing values remain separate.
3. The prescription includes a native life-size state. Its object-to-image distance is 296.9112 mm, rather than the commercial minimum focus distance of 295 mm.
4. The application was filed before the September 2020 announcement and October 2020 launch. Sigma lists L-Mount and Sony E-mount versions for full-frame mirrorless cameras.

The implemented model is a fixed-iris diagnostic visualization. It preserves the source optics and all three published spacing states, with semi-diameters inferred from Figure 1. Close-focus exposure, illumination and full-pupil fidelity are not verified: the patent's finite-aperture values are not reproduced by the retained fixed-iris candidate. This boundary is important when interpreting displayed rays and aperture readouts.

## Optical Architecture

The three functional groups have positive, positive and negative net power. G1 is the fixed front pair, G2 is the internally moving focusing assembly, and G3 is a fixed negative rear assembly. The diaphragm is behind G2 and moves on a different axial path. These functional groups should not be confused with the 12 air-separated optical groups.

| Group or cemented assembly | Source surfaces | Recomputed isolated EFL, mm | Printed EFL, mm |
|---|---|---:|---:|
| G1 | 1–4 | +477.95994 | +477.96 |
| G2 | 5–21 | +70.37443 | +70.37 |
| G3 | 23–30 | -132.66376 | -132.66 |
| CL1 | 7–9 | +463.48473 | +463.44 |
| CL2 | 10–13 | +946.83131 | +946.89 |
| CL3 | 14–16 | +366.25549 | +366.25 |
| CL4 | 17–19 | -86.96912 | -86.97 |

G2 contains one cemented triplet and three cemented doublets, together with separate positive elements. This concentrates focusing motion in a many-interface positive assembly while leaving the front and rear groups stationary. The optical section in Figure 1 and paragraphs 0107–0110 define the arrangement. All refracting surfaces are spherical; there is no geometric-asphere coefficient set to reconstruct.

The patent discusses reducing overall length through the positive–positive–negative power distribution (¶0026–0029), but the present prescription is not classified here by an unverified “telephoto” or “retrofocus” label. Those labels require specific first-order length relationships, rather than the commercial focal-length category.

## Element-by-Element Analysis

The following focal lengths are those of each individual element in air, computed with its own thickness and boundary radii. Cemented interfaces have different surrounding media in the assembled lens; isolated element power is not an allocation of in-situ aberration correction. L1–L17 are model slot labels in front-to-rear order.

### L1 — Negative Meniscus

nd = 1.51742, νd = 52.15. Glass: E-CF6 (HOYA coordinate equivalent; supplier unconfirmed). f = -666.555 mm.

This negative meniscus has its concave side toward the object and forms the first member of fixed G1. The patent specifically identifies that front-facing concavity (¶0032–0034, ¶0108). Its shape is retained even though the complete front pair has positive net power. [1, ¶0108–0110]

### L2 — Biconvex Positive

nd = 1.80420, νd = 46.50. Glass: TAF3D (HOYA coordinate equivalent; supplier unconfirmed). f = +279.761 mm.

The weakly curved biconvex element completes fixed G1. Its positive isolated power exceeds the opposing power of L1, consistent with the independently calculated positive G1 result. The broad front aperture is estimated from the optical section, not a published diameter. [1, ¶0108–0110]

### L3 — Biconvex Positive

nd = 2.05090, νd = 26.94. Glass: TAFD65 (HOYA coordinate equivalent; supplier unconfirmed). f = +88.257 mm.

This separate biconvex element begins moving G2. Its high source index is retained, and it precedes the four cemented assemblies. Its positive power contributes to the focusing group, without establishing a unique element-level aberration role from index alone. [1, ¶0108–0110]

### L4 — Biconvex Positive

nd = 1.59282, νd = 68.62. Glass: FCD515 (HOYA coordinate equivalent; supplier unconfirmed). f = +58.061 mm.

L4 is the source-designated low-dispersion positive element G2LPL. It is cemented to L5 as CL1. Its Abbe number and source-normal-line partial dispersion satisfy conditions (4) and (5); the material choice is therefore directly relevant to the patent’s stated secondary-spectrum strategy. [1, ¶0108–0110]

### L5 — Biconcave Negative

nd = 1.85451, νd = 25.15. Glass: NBFD25 (HOYA coordinate equivalent; supplier unconfirmed). f = -62.257 mm.

This biconcave element is the negative partner in CL1 and one of the source-designated G2LN elements. Its lower Abbe number and constrained native partial-dispersion deviation enter conditions (8) and (9). The recomputed CL1 net power is much weaker than either isolated component. [1, ¶0108–0110]

### L6 — Positive Meniscus

nd = 1.72916, νd = 54.67. Glass: TAC8 (HOYA coordinate equivalent; supplier unconfirmed). f = +89.210 mm.

L6 is a positive meniscus convex toward the image, at the front of cemented triplet CL2. The triplet remains a distinct three-medium construction; no synthetic cement layer is inserted. Its compound power must be evaluated through the actual cemented interfaces. [1, ¶0108–0110]

### L7 — Biconcave Negative

nd = 1.77047, νd = 29.74. Glass: NBFD29 (HOYA coordinate equivalent; supplier unconfirmed). f = -31.609 mm.

This biconcave middle member is cemented on both sides within CL2. It is another G2LN element used by conditions (8) and (9). The negative isolated power is largely opposed by the two positive members of the triplet, but that power balance alone does not quantify residual chromatic aberration. [1, ¶0108–0110]

### L8 — Biconvex Positive

nd = 1.83481, νd = 42.72. Glass: TAFD5G (HOYA coordinate equivalent; supplier unconfirmed). f = +47.553 mm.

The final biconvex member completes CL2. The source assigns it a higher index and lower Abbe number than L6. The three-member assembly has a weak positive compound power, calculated independently from the same source surfaces. [1, ¶0108–0110]

### L9 — Biconcave Negative

nd = 1.77047, νd = 29.74. Glass: NBFD29 (HOYA coordinate equivalent; supplier unconfirmed). f = -33.447 mm.

L9 is the biconcave front member of CL3 and the third G2LN element named in the condition table. It repeats L7’s native glass coordinate and PgF, with different curvatures. Both media remain separately identified in the model. [1, ¶0108–0110]

### L10 — Biconvex Positive

nd = 1.92286, νd = 20.88. Glass: E-FDS1-W (HOYA coordinate equivalent; supplier unconfirmed). f = +31.581 mm.

This biconvex element is G2LPH, the high-index positive member of CL3. It satisfies the source’s index and anomalous-partial-dispersion conditions (6) and (7). Its strong positive isolated power opposes L9, leaving a much weaker positive compound assembly. [1, ¶0108–0110]

### L11 — Negative Meniscus

nd = 1.84666, νd = 23.78. Glass: FDS90-SG (HOYA coordinate equivalent; supplier unconfirmed). f = -56.405 mm.

The negative meniscus begins CL4 and presents its convex side toward the object. It is not one of the three negative elements used for the listed G2LN partial-dispersion values. The distinction matters because the patent requires qualifying negative elements, rather than imposing one numerical inequality on every negative element. [1, ¶0108–0110]

### L12 — Positive Meniscus

nd = 1.54814, νd = 45.82. Glass: E-FEL1 (HOYA coordinate equivalent; supplier unconfirmed). f = +149.767 mm.

This positive meniscus completes CL4, also with its convex side toward the object. CL4 remains net negative despite the positive rear member. The numerical medium on the shared interface belongs to L12, as required by downstream-medium surface bookkeeping. [1, ¶0108–0110]

### L13 — Biconvex Positive

nd = 1.87070, νd = 40.73. Glass: TAFD32 (HOYA coordinate equivalent; supplier unconfirmed). f = +110.094 mm.

The separate biconvex element closes moving G2. Behind its exit surface, the d21 spacing leads to the independently moving diaphragm. L13 and its two source radii are preserved without fitting its aperture to the patent’s finite F values. [1, ¶0108–0110]

### L14 — Negative Meniscus

nd = 1.62041, νd = 60.35. Glass: BACD16 (HOYA coordinate equivalent; supplier unconfirmed). f = -72.014 mm.

This negative meniscus opens fixed G3, with its convex side toward the object. It is one of the two G3LN elements. Its moderate index and relatively high Abbe number satisfy the rear-group conditions (2) and (3). [1, ¶0108–0110]

### L15 — Positive Meniscus

nd = 1.91082, νd = 35.25. Glass: TAFD35 (HOYA coordinate equivalent; supplier unconfirmed). f = +131.926 mm.

The positive meniscus has its convex side toward the image and sits between the two negative members of G3. Its positive isolated power partly offsets their contributions. The source provides its absolute PgF, which also helps distinguish catalog-coordinate alternatives. [1, ¶0108–0110]

### L16 — Biconcave Negative

nd = 1.55032, νd = 75.50. Glass: FCD705 (HOYA coordinate equivalent; supplier unconfirmed). f = -45.099 mm.

This biconcave element is the second G3LN member. It has a high Abbe number and a positive native partial-dispersion deviation. It remains a numerical glass assignment; the commercial SLD branding and a specific supplier are not asserted for this slot. [1, ¶0108–0110]

### L17 — Biconvex Positive

nd = 1.51680, νd = 64.20. Glass: BSC7 (HOYA coordinate equivalent; supplier unconfirmed). f = +54.009 mm.

The final biconvex element closes G3. Its positive contribution does not change the negative sign of the complete rear group. The final source gap to the image is preserved physically; no unlisted camera cover glass is invented. [1, ¶0108–0110]

## Glass Identification and Spectral Limits

The patent publishes absolute PgF for every glass medium. Its spectral normal line differs from the application normal line:

- Native patent: ΔPgF = PgF − 0.64833 + 0.00180 × νd
- Application: dPgF = PgF − (0.6438 − 0.001682 × νd)

The absolute ratio is retained through this transformation. Copying the native deviation directly into runtime dPgF would change the intended g–F partial dispersion. No independent nC, nF or ng anchors are supplied by the example, so none are fabricated. [1, PDF p. 8, ¶0024–0025]

| Element | nd | νd | Source PgF | Native ΔPgF | Runtime dPgF |
|---|---:|---:|---:|---:|---:|
| L1 | 1.51742 | 52.15 | 0.5590 | +0.004540 | +0.00291630 |
| L2 | 1.80420 | 46.50 | 0.5573 | -0.007330 | -0.00828700 |
| L3 | 2.05090 | 26.94 | 0.6052 | +0.005362 | +0.00671308 |
| L4 | 1.59282 | 68.62 | 0.5440 | +0.019186 | +0.01561884 |
| L5 | 1.85451 | 25.15 | 0.6103 | +0.007240 | +0.00880230 |
| L6 | 1.72916 | 54.67 | 0.5453 | -0.004624 | -0.00654506 |
| L7 | 1.77047 | 29.74 | 0.5951 | +0.000302 | +0.00132268 |
| L8 | 1.83481 | 42.72 | 0.5647 | -0.006734 | -0.00724496 |
| L9 | 1.77047 | 29.74 | 0.5951 | +0.000302 | +0.00132268 |
| L10 | 1.92286 | 20.88 | 0.6390 | +0.028254 | +0.03032016 |
| L11 | 1.84666 | 23.78 | 0.6192 | +0.013674 | +0.01539796 |
| L12 | 1.54814 | 45.82 | 0.5700 | +0.004146 | +0.00326924 |
| L13 | 1.87070 | 40.73 | 0.5682 | -0.006816 | -0.00709214 |
| L14 | 1.62041 | 60.35 | 0.5394 | -0.000300 | -0.00289130 |
| L15 | 1.91082 | 35.25 | 0.5822 | -0.002680 | -0.00230950 |
| L16 | 1.55032 | 75.50 | 0.5401 | +0.027670 | +0.02329100 |
| L17 | 1.51680 | 64.20 | 0.5343 | +0.001530 | -0.00151560 |

Five public manufacturer catalogs were examined: HOYA, OHARA, SCHOTT, HIKARI and SUMITA. All distinct source coordinate pairs have close HOYA alternatives, including E-CF6, TAFD65, FCD515/FCD505, NBFD25, NBFD29 and FCD705. The pattern is a catalog equivalence observation, not proof of a production supplier. Some equal nd/νd choices differ in partial dispersion: TAFD35 reproduces the listed PgF more closely than TAFD35L. Relevant coefficient rows and residuals are retained in the accompanying evidence. [4]

The implemented labels name the HOYA catalog glass whose nd, νd and PgF reproduce each source row: E-CF6, TAF3D, TAFD65, FCD515, NBFD25, TAC8, NBFD29, TAFD5G, E-FDS1-W, FDS90-SG, E-FEL1, TAFD32, BACD16, TAFD35, FCD705 and BSC7. Each catalog curve evaluates to a dPgF within 0.0002 of the converted patent value. Chromatic tracing therefore uses catalog Sellmeier data at C, d and F and rebuilds g from the patent PgF through the stored dPgF, so the source partial dispersion stays authoritative. These are coordinate equivalents, not a confirmed production supplier or melt. The patent’s numerical partial-dispersion constraints can be checked, but they do not establish verified APO performance or complete wavelength-dependent image quality.

The diagram's anomalous-dispersion tags follow the patent's own wording. L4 (G2LPL) and L10 (G2LPH) carry the patent-listed tag: paragraphs 0053–0062 describe the first as a low-dispersion glass with anomalous partial dispersion and the second as a high-index glass with large anomalous partial dispersion, and conditions (4) and (7) set lower limits on their ΔPgF. L16 carries the inferred tag, because its coordinates are those of the FCD705 low-dispersion crown class while the patent constrains that G3LN element only through nd and νd. The G2LN elements L5, L7 and L9 are untagged, since condition (8) caps their deviation instead of requiring one, and the dense flints L3 and L11 are untagged despite positive deviations because the patent makes no such statement about them. Sigma lists one SLD element for the production lens; the patent does not say which slot that is, and both L4 and L16 are low-dispersion candidates. [1, PDF pp. 10–11; 2]

## Focus Mechanism

G1 and G3 remain fixed while G2 and the diaphragm move objectward at different rates. The source distinguishes this diaphragm motion from motion rigidly attached to G2. Paragraphs 0077–0086 relate that separation to mechanical flare interception and exit-pupil positioning; no quantitative stray-light or teleconverter-performance result is inferred here.

| Source quantity | Infinity | −0.5× | −1× |
|---|---:|---:|---:|
| d4, mm | 42.2916 | 21.2405 | 1.7259 |
| d21, mm | 2.3594 | 11.2153 | 19.4249 |
| d22, mm | 1.6794 | 13.8745 | 25.1795 |
| Final image gap, mm | 31.7486 | 31.7486 | 31.7486 |
| Object to first vertex, mm | Infinity | 237.4813 | 150.1845 |
| Object to image, mm | Infinity | 384.2080 | 296.9112 |
| Recomputed EFL, mm | 103.476770 | 80.010754 | 65.345921 |
| Physical track, mm | 146.7268 | 146.7267 | 146.7267 |

From the published gaps, G2 advances 21.0511 mm toward the object at −0.5× and 40.5657 mm at −1×, and the diaphragm 12.1951 mm and 23.5001 mm, which is 0.579 of the G2 travel at both finite states. The three variable gaps sum to 46.3304 mm at infinity and 46.3303 mm at each finite state, so G1, G3 and the image plane stay fixed to table rounding. Figure 1 marks the same two motions with separate objectward "focus" arrows under G2 and under the stop. These travel figures are derived from the table, not separately published.

The native close-focus distance is used for the model, while the commercial 295 mm value remains a separate production specification. The middle focus control is normalized from the two source object-to-image distances. All three source spacing columns are represented; interpolation between them is not a production cam law. The two finiteConjugates entries use the exact first-vertex distance reference, which the existing finite-source runtime can resolve without inventing focus positions. [1, PDF p. 16; 2]

The production lens uses HSM autofocus according to Sigma. This does not independently establish that the commercial lens uses the exact group paths or mechanical iris behavior of Example 1. [2]

## Aperture Model and Readout Limitations

The fixed physical iris radius is 9.611937886 mm, inferred from the infinity F2.90 target by exact ray calibration. It is not a patent-published diameter. The builder recalculates the same radius within numerical precision. Figure-guided semi-diameters are neither enlarged to clear approximate UI launches nor shrunk to force finite-F agreement. L16 is drawn to the 15.0 mm rim of its blank on both faces, so that it renders with the square edge of Figure 1. The figure ends the concave curve of surface 27 at a flat annulus near 13.1 mm, so the outer 1.7 mm of that surface is blank, not clear aperture: no meridional ray that reaches the 21.6 mm image circle passes surface 27 above 13.3 mm, and the zone lies outside every admitted axial cone and does not enter the table below.

| Aperture definition | Infinity | −0.5× | −1× |
|---|---:|---:|---:|
| Published patent F | 2.90 | 4.32 | 5.73 |
| Unconstrained fixed-iris working F | 2.898152 | 3.862330 | 4.746829 |
| Admitted candidate-rim working F | 2.898152 | 4.013750 | 5.225883 |
| Current close-focus effective-F helper | 2.900000 | 4.221402 | 4.317708 |
| Current Summary EFL/EP metric | 2.823872 | 1.724900 | 1.027894 |

The exact working number is 1/(2 NA) in air, evaluated from the outgoing cone of an actual finite-object ray aimed through the physical stop. It already includes close-focus effects. Applying another bellows correction to this cone would double-count them. An aperture-disabled continuation is an optical diagnostic and is never counted as transmitted light.

The source F4.32/F5.73 are not reproduced by the unchanged aperture model. Source positions and F values do not publish the physical iris schedule or uniquely establish a different aperture-control mechanism. A sequence of inverse-calibrated diameters would be a new assumption, not recovered source data. This model therefore does not claim verified close-focus exposure, illumination or full-pupil fidelity.

The current close-focus helper uses an approximate thin-lens magnification and a stored infinity pupil ratio. The Summary scalar instead divides current EFL by current entrance-pupil diameter; it omits the complete finite-conjugate working-aperture relationship. The two readouts therefore have different semantics and neither substitutes for the admitted cone. [5]

The ordinary diagram fan also remains approximate at finite focus. It uses a current parallel-input pupil radius for first-vertex launch height and then applies a focus-dependent launch slope. At the finite states this produces additional clipping compared with physical finite-source stop aiming. The clipped diagram rays are not evidence for changing the source spacings. The existing runtime already supports exact finite-source geometry; the limitation concerns these particular launch/readout conventions.

## Conditional Expressions

The source conditions apply to designated elements and compound groups. They use the native patent normal line, not the runtime dPgF field.

| Condition | Selected example result | Interpretation |
|---|---|---|
| (1) 1.40 < βG3 < 2.50 | 1.55 printed | Rear-group transverse magnification satisfies the interval |
| (2) G3LN nd < 1.67 | 1.62041, 1.55032 | L14 and L16 |
| (3) G3LN νd > 55.00 | 60.35, 75.50 | L14 and L16 |
| (4) G2LPL ΔPgF > 0.0050 | 0.019186 computed | L4 |
| (5) G2LPL νd > 55.00 | 68.62 | L4 |
| (6) G2LPH nd > 1.80 | 1.92286 | L10 |
| (7) G2LPH ΔPgF > 0.0100 | 0.028254 computed | L10 |
| (8) G2LN ΔPgF < 0.0080 | 0.007240, 0.000302, 0.000302 | L5, L7 and L9 |
| (9) G2LN νd < 35.00 | 25.15, 29.74, 29.74 | L5, L7 and L9 |
| (10) absolute CLfj/f2 > 0.80 | 6.59, 13.46, 5.20, 1.24 printed | Compound focal lengths divided by G2 focal length |

There are two distinct source-precision issues. CL1, CL2 and CL3 do not all reproduce their printed group focal lengths within output rounding alone. Conservative propagation of the displayed input precision encloses the printed values; the original residuals remain recorded. Similarly, condition (8)'s first printed deviation is 0.0073 rather than the 0.007240 calculated from rounded PgF/νd. Its inequality remains satisfied, while exact printed equality is not claimed.

Condition (10) also contains a wording conflict. Claim 8 and paragraph 0021 define f2 as G2 focal length; paragraph 0089 calls it the whole-system focal length. The printed ratios agree with the former definition and fail under the latter. Both calculation branches are retained, and no prescription value is silently changed. [1, PDF pp. 4, 6, 14, 16–17]

## Verification and Model Boundaries

The final-file prescription passes source-map, first-order, conjugate, normal-line and sampled solid-geometry checks. The released validator and constructor execute successfully. Native element rendering shows no hidden trim at the sampled source and intermediate focus controls. The same candidate is a defensible geometry visualization, with explicit ray rejection; it is not a verified reproduction of the complete production aperture system.

An extreme off-axis infinity ray illustrates a retained numerical limitation. Independent sphere tracing puts its first-surface intersection outside the modeled rim. Released native tracing returns noBracket at that surface, even with aperture checking disabled. Both reject the physical ray, but native continuation is unavailable. No native image position or working NA is inferred from that incomplete trace. The failed cross-implementation comparison remains in the audit rather than being relabeled as a successful transmitted ray.

The 60% and full-field meridional sample sets retain real vignetting and unavailable extreme rays. They do not certify full three-dimensional pupil transmission, relative illumination, all continuous focus positions or a particular integrated browser deployment. Surface estimates and interpolation are disclosed in the data and do not replace unavailable production dimensions.

No camera-side plate is listed by the source and none is invented. Sigma advertises compatible L-Mount teleconverters, but this data does not opt into converter compatibility without separate fit and beam checks. Native optical gaps and the image plane remain unchanged.

## Sources

1. [JP2021148808A, original Japanese publication](https://patents.google.com/patent/JP2021148808A/), Sigma Corporation, published 27 September 2021. Original unmodified PDF supplied with this dossier. Example 1: PDF pp. 15–17 (printed pp. 14–16); spectral definitions: PDF p. 8; Figure 1: PDF p. 30. [DPMA full-document source](https://depatisnet.dpma.de/DepatisNet/depatisnet?action=pdf&docid=JP2021148808A).
2. [Sigma 105mm F2.8 DG DN MACRO | Art specifications](https://www.sigma-global.com/en/lenses/a020_105_28/), including construction, mounts, format, minimum focus, HSM and accessory compatibility. Accessed 4 October 2026.
3. [Sigma product announcement, 30 September 2020](https://www.sigma-global.com/en/news/2020/09/30/10945/), with October 2020 launch and native mount variants.
4. Primary glass catalogs: [HOYA optical-glass data](https://www.hoya-opticalworld.com/english/datadownload/), [OHARA catalog](https://oharacorp.com/glass-catalog/), [SCHOTT optical-glass downloads](https://www.schott.com/en-gb/products/optical-glass-p1000267/downloads), [HIKARI optical glass](https://www.nikon.com/business/components/lineup/materials/optical-glass/), and [SUMITA downloads](https://www.sumita-opt.co.jp/en/download/). Exact inspected catalog revisions, relevant rows, coefficients and hashes accompany the source evidence.
5. Released LensVisualizer main `709dda72`: [close-focus effective-F helper](https://github.com/ronbuening/LensVisualizer/blob/709dda72a0ddead8ee77b8306347429031f8b379/src/optics/first-order/fNumber.ts), [Summary metric](https://github.com/ronbuening/LensVisualizer/blob/709dda72a0ddead8ee77b8306347429031f8b379/src/optics/analysis/summary.ts), and [finite-conjugate selector](https://github.com/ronbuening/LensVisualizer/blob/709dda72a0ddead8ee77b8306347429031f8b379/src/optics/analysis/mtfConjugates.ts). Native optical execution is distinguished from a complete integrated application run.
