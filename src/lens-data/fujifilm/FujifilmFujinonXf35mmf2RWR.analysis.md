# FUJIFILM FUJINON XF 35mm f/2 R WR — Patent Design Analysis

## Patent Reference and Design Identification

**Patent:** US 2017/0010441 A1\
**Application Number:** US 15/186,906\
**Priority:** 2015-07-10 (JP 2015-138326)\
**Filed:** 2016-06-20\
**Published:** 2017-01-12\
**Inventors:** Masato Kondo; Takashi Suzuki\
**Applicant / Assignee:** FUJIFILM Corporation\
**Title:** *Imaging Lens and Imaging Apparatus*\
**Embodiment analyzed:** Example 1

The implemented prescription is Example 1 of US 2017/0010441 A1. The patent publishes the infinity-focus prescription in Table 1 and the corresponding aspherical coefficients in Table 2; FIG. 2 shows the same nine-element configuration. The patent states that Example 1 comprises a positive first group G1, a negative second group G2, the aperture stop, and a positive third group G3, with G2 serving as the inner-focus group (¶0087–¶0090; PDF p. 22–23, printed pp. 6–7).

The match to the production FUJINON XF35mmF2 R WR is strong but remains a research correlation rather than a manufacturer-confirmed patent attribution. The evidence converges on several independently published characteristics:

1. The patent gives a design focal length of 35.328 mm and F No. 2.09, while Fujifilm markets the lens as 35 mm f/2.
2. Both the patent example and the product specification use nine elements in six physical groups.
3. Example 1 places aspherical surfaces on two elements, L31 and L35; Fujifilm specifies two aspherical elements.
4. The patent uses a single lightweight negative inner-focus group between fixed G1 and G3; Fujifilm describes an inner-focus mechanism driven by a stepping motor.
5. The Japanese priority date, 2015-07-10, precedes Fujifilm's manufacturer-recorded release month of November 2015.

One measurable offset is retained rather than reconciled: Example 1 publishes a maximum full angle of view of 47.2°, while Fujifilm specifies 44.2° for the production lens. The implemented model therefore keeps the patent field quantity separate from the marketed product specification. No Fujifilm source reviewed for this dossier explicitly states that US 2017/0010441 A1 Example 1 is the production formula.

The final LensVisualizer data file uses the exact published dimensional scale; no focal-length normalization or other uniform scaling is applied. Its computed d-line EFL is 35.3260144 mm, within 0.0020 mm of the patent's rounded 35.328 mm value.

## Optical Architecture

Example 1 is a positive-negative-positive three-power-group inner-focus lens. The power-group sequence is G1 (+), G2 (−), G3 (+), with the aperture stop between G2 and G3. The nine lens elements form six physical air-separated groups because L12/L13 are cemented together and L32/L33/L34 form a cemented triplet.

The independently recomputed in-air focal lengths of the complete power groups at infinity are approximately +30.760 mm for G1, −24.368 mm for G2, and +27.216 mm for G3. These are group properties, not sums of the standalone element powers.

G1 contains three elements. L11 is a positive meniscus followed by a cemented positive-negative pair, L12/L13. The patent specifically presents the positive-negative cemented pair as a chromatic-correction device and prefers the negative member to have the higher d-line index (¶0062–¶0065). The computed net focal length of the L12/L13 cemented pair in air is +53.394 mm.

G2 is the single biconcave element L21. Its standalone focal length is −24.368 mm, identical to the complete G2 focal length because G2 contains no other lens. During focusing toward nearer objects, this element moves toward the image side while G1, the stop, and G3 remain fixed with respect to the image plane (¶0058, ¶0087).

G3 contains five elements. L31 is a positive biconvex element with two aspherical surfaces. It is followed by the cemented positive-negative-positive triplet L32/L33/L34, whose independently computed net focal length is +34.398 mm, and finally by the negative meniscus L35 with two aspherical surfaces. The patent assigns general correction functions to the rear negative lens and the aspherical surfaces, including control of astigmatism, distortion, and field-related behavior (¶0068–¶0069); those statements are patent design rationale and are not treated here as isolated measured contributions from individual surfaces.

The first-to-last lens-surface track is 45.999 mm. With the rear plate PP counted as its air-equivalent path, the source-image-plane total length is 58.470956 mm, giving TL/EFL = 1.65518; the physical path through the plate is 59.442 mm. This satisfies the patent's own definition of a compact lens, TL/f < 1.7 (¶0085), but it is not a telephoto design under the LensVisualizer project criterion TL/EFL < 1. The air-equivalent paraxial back focal distance from surface 16 to focus is 12.476042 mm, also well below the EFL, so the model is not classified as retrofocus under the project criterion BFD > EFL.

## Element-by-Element Analysis

The focal lengths in this section are standalone thick-element focal lengths in air, computed from the final data revision. They are not in-situ contributions to the complete lens unless explicitly stated.

### L11 — Positive Meniscus

**nd = 1.88300, νd = 40.76. Glass: 883408 dense lanthanum-flint class, supplier unconfirmed. f = +71.943 mm.**

L11 begins the positive G1 section. Its front and rear radii are both positive, giving the source-model meniscus orientation shown in FIG. 2. The patent's first-group discussion assigns G1 a system-level role in shortening total length and reducing ray height at the focusing group (¶0059); the calculation here does not isolate those effects to L11 alone.

The 883408 coordinate has exact catalog-coordinate matches in more than one vendor family, so the data file deliberately uses a six-digit class label rather than asserting a supplier. OHARA S-LAH58 and SCHOTT N-LASF31A are coordinate-exact examples in the catalog review.

### L12 — Plano-Convex Positive, Cemented Pair D1

**nd = 1.75500, νd = 52.32. Glass: 755523 lanthanum-crown class, supplier unconfirmed. f = +34.855 mm.**

L12 is the positive member of the cemented L12/L13 pair. Its rear cemented interface is plane in the patent table. The positive member's higher Abbe number relative to L13 is the quantity used by the patent's first chromatic condition.

The 755523 coordinate is retained as a generic lanthanum-crown class. Historical OHARA S-YGH51 and CDGM H-LaK53B reproduce the patent coordinate exactly; the dossier does not convert that coordinate into a supplier claim.

### L13 — Plano-Concave Negative, Cemented Pair D1

**nd = 1.89286, νd = 20.36. Glass: 893204 dense-flint class; S-NPH4 coordinate match, supplier unconfirmed. f = −92.401 mm.**

L13 is the negative member of D1. Its d-line index exceeds that of L12 and its Abbe number is much lower, matching the relationship discussed in ¶0064–¶0065. The pair's net positive power is substantially weaker than the standalone positive power of L12 because of L13's opposing contribution.

OHARA S-NPH4 is coordinate-exact at nd = 1.89286 and νd = 20.36, but the patent does not name the supplier or melt. The data therefore treats S-NPH4 as a coordinate match, not as proven production glass.

### L21 — Biconcave Negative Focus Element

**nd = 1.75500, νd = 52.32. Glass: 755523 lanthanum-crown class, supplier unconfirmed. f = −24.368 mm.**

L21 is the complete G2 group. It is the only translating optical element identified by Example 1. The patent emphasizes that limiting the focusing group to one or two lenses reduces moving mass and can support faster focusing (¶0067). The final data file does not infer a travel magnitude from that qualitative mechanism statement.

The same 755523 coordinate used by L12 appears here. The data file preserves that repeated optical coordinate without implying that the production elements necessarily came from the same catalog melt.

### L31 — Positive Biconvex, Two Aspherical Surfaces

**nd = 1.61881, νd = 63.85. Glass: 619639 low-dispersion precision-molding crown class, supplier unconfirmed. f = +26.587 mm.**

L31 starts G3 immediately behind the stop. Both surfaces, 9A and 10A, are aspherical. The patent states that aspherization of the front portion of G3 can assist correction of spherical aberration and astigmatism (¶0069), but the present analysis does not assign a quantified aberration budget to L31 in isolation.

The 619639 coordinate is consistent with a low-dispersion precision-molding crown class; HOYA M-PCD4 carries the matching rounded six-digit code. Exact supplier identity is unresolved, and no catalog line indices are authored into the model.

### L32 — Positive Meniscus, Cemented Triplet T1

**nd = 1.77250, νd = 49.60. Glass: 773496 lanthanum-flint class, supplier unconfirmed. f = +22.868 mm.**

L32 is the first positive member of the L32/L33/L34 cemented triplet. The triplet is a single air-separated physical group inside G3 but contains three distinct glass elements and two cemented interfaces.

The 773496 coordinate has exact catalog-coordinate matches including OHARA S-LAH66 and CDGM H-LaF50B. Because the patent supplies only nd and νd, the final glass string remains class-based.

### L33 — Biconcave Negative, Cemented Triplet T1

**nd = 1.60342, νd = 38.03. Glass: 603380 flint class, supplier unconfirmed. f = −11.517 mm.**

L33 is the negative center member of T1 and has the strongest standalone negative power of any element in Example 1. That numerical statement refers only to isolated thick-element focal length in air; it is not a claim that L33 dominates a specific aberration in the assembled lens.

The 603380 coordinate is catalog-common. OHARA S-TIM5 and SCHOTT F5 both reproduce the patent nd/νd pair exactly, so a supplier-specific name would overstate the evidence.

### L34 — Biconvex Positive, Cemented Triplet T1

**nd = 1.77250, νd = 49.60. Glass: 773496 lanthanum-flint class, supplier unconfirmed. f = +15.316 mm.**

L34 is the rear positive member of T1 and uses the same patent optical coordinate as L32. The complete triplet has a computed net focal length of +34.398 mm in air; that cemented-system value is distinct from the +22.868 mm, −11.517 mm, and +15.316 mm standalone powers of its three constituents.

The patent discusses cemented positive/negative combinations within G3 as a means of managing chromatic aberration while controlling other aberrations (¶0073–¶0076). That is a group-level design statement rather than evidence for a unique role assigned to L34 alone.

### L35 — Rear Negative Meniscus, Two Aspherical Surfaces

**nd = 1.51633, νd = 64.06. Glass: 516641 low-Tg crown class; OHARA L-BSL7 coordinate match, supplier unconfirmed. f = −32.400 mm.**

L35 is the rear negative element of G3. Both surfaces, 15A and 16A, are aspherical. The patent specifically describes the image-side negative lens and its concave object-side surface as useful for Petzval, total-length, distortion, and astigmatism management, and further discusses a strongly shaped image-side asphere for off-axis correction (¶0068–¶0069).

The coordinate is an exact match to OHARA L-BSL7. The L-prefix is significant because it identifies OHARA's low-Tg family; it should not be silently replaced by S-BSL7 or by SCHOTT N-BK7, which does not reproduce the stored coordinate exactly.

## Glass Identification and Selection

The patent publishes d-line refractive index and Abbe number for each element but does not name suppliers. The final model therefore separates native optical coordinates from catalog identity. Catalog review was performed against OHARA, HOYA, SCHOTT, HIKARI, SUMITA, and CDGM references; exact coordinate compatibility is treated as evidence of a glass family or equivalent, not as proof of the production supplier.

| Native coordinate | Elements | Conservative model label | Catalog evidence |
|---|---|---|---|
| 1.88300 / 40.76 | L11 | 883408 dense lanthanum-flint class | OHARA S-LAH58 and SCHOTT N-LASF31A coordinate-exact |
| 1.75500 / 52.32 | L12, L21 | 755523 lanthanum-crown class | Historical OHARA S-YGH51 and CDGM H-LaK53B coordinate-exact |
| 1.89286 / 20.36 | L13 | 893204 dense-flint class | OHARA S-NPH4 coordinate-exact |
| 1.61881 / 63.85 | L31 | 619639 low-dispersion precision-molding crown class | HOYA M-PCD4 rounded code match; other vendors near |
| 1.77250 / 49.60 | L32, L34 | 773496 lanthanum-flint class | OHARA S-LAH66 and CDGM H-LaF50B coordinate-exact |
| 1.60342 / 38.03 | L33 | 603380 flint class | OHARA S-TIM5 and SCHOTT F5 coordinate-exact |
| 1.51633 / 64.06 | L35 | 516641 low-Tg crown class | OHARA L-BSL7 coordinate-exact |

No element carries authored nC, nF, ng, or dPgF values because the patent does not publish those quantities per element and supplier identity is not established. Consequently, this model supports the patent's nd/νd-level chromatic relationships but does not support an APO or anomalous-partial-dispersion claim. Candidate catalog line indices recorded during the glass audit are not treated as patent measurements.

## Focus Mechanism

The patent describes an inner-focus mechanism. G2 consists solely of L21 and moves from the object side toward the image side as focus changes from infinity toward a nearer object. G1, the aperture stop, G3, and the image plane remain fixed (¶0058, ¶0087).

The final data file uses `NO_INTERNAL_RECONSTRUCTION`. Example 1 provides only the infinity-focus spacing state. It does not provide a near-focus G2 displacement, a second set of adjacent air gaps, or a second object distance/magnification state from which a unique travel law could be solved. Accordingly, `var` is empty and no close-focus internal geometry is synthesized.

Fujifilm specifies a 0.35 m minimum focus distance for the production XF35mmF2 R WR and describes an inner-focus stepping-motor mechanism. In the data file, 0.35 m is retained only as production metadata through `closeFocusM`; it is not used to infer patent group travel. This distinction prevents a marketed object-distance limit from being mistaken for a published Example 1 focus state.

## Aspherical Surfaces

Example 1 uses four aspherical surfaces: 9A and 10A on L31, and 15A and 16A on L35. The patent's Formula 1, shown on PDF p. 22 / printed p. 6, uses

$Z_d = \frac{C h^2}{1 + \sqrt{1 - K_A C^2 h^2}} + \sum_{m=3}^{20} A_m h^m$.

LensVisualizer uses the standard conic denominator $\sqrt{1-(1+K)(h/R)^2}$, so the implemented conversion is $K = K_A - 1$. No dimensional scaling is applied, so all polynomial coefficients remain at their published values and units. The patent explicitly tabulates orders A3 through A20; the odd radial powers remain rotationally symmetric because $h$ is radial height.

The complete coefficient set used by the final data file is:

| Term | 9A | 10A | 15A | 16A |
|---|---:|---:|---:|---:|
| K | -1.04748686 | -0.54007933 | -2.67038830 | +9.63585400 |
| A3 | -1.2643757E-18 | -1.6447749E-18 | -1.9493628E-18 | -3.1677145E-18 |
| A4 | +1.0564294E-04 | +1.3648227E-04 | -2.5784133E-04 | -1.1573006E-05 |
| A5 | -8.4672574E-05 | -1.8257331E-05 | +2.7063703E-04 | +6.7399444E-05 |
| A6 | -4.0381816E-05 | -1.4750820E-04 | -1.1145518E-04 | -2.2887143E-05 |
| A7 | +5.4863043E-05 | +1.3195012E-04 | +1.3088266E-05 | +2.1959363E-08 |
| A8 | -1.8547523E-05 | -4.3615873E-05 | +2.9935319E-06 | +9.7674734E-07 |
| A9 | +7.1905820E-07 | +2.5433238E-06 | -8.8653080E-07 | -3.6780866E-08 |
| A10 | +1.0273073E-06 | +1.9712984E-06 | +7.4602330E-09 | -3.5471268E-08 |
| A11 | -2.3209720E-07 | -3.9405286E-07 | +1.8805990E-08 | +3.4858475E-09 |
| A12 | +2.3251601E-10 | -2.7267968E-08 | -1.4435222E-09 | +5.0526237E-10 |
| A13 | +6.8269048E-09 | +1.3302317E-08 | -1.6166265E-10 | -7.5632002E-11 |
| A14 | -9.6610366E-10 | -2.2666307E-10 | +2.3633018E-11 | -2.8646816E-12 |
| A15 | -1.0773615E-11 | -2.2810661E-10 | +8.1185882E-14 | +7.4736294E-13 |
| A16 | +1.8361819E-11 | +1.2408051E-11 | -1.4708308E-13 | -5.0468383E-16 |
| A17 | -1.8742420E-12 | +2.0954425E-12 | +6.7434567E-15 | -3.7482823E-15 |
| A18 | -3.8276515E-14 | -1.6023253E-13 | +1.9896264E-16 | +8.0823827E-17 |
| A19 | +1.8367620E-14 | -8.2114964E-15 | -2.8464253E-17 | +7.8330549E-18 |
| A20 | -9.0677432E-16 | +7.4848161E-16 | +8.5380389E-19 | -2.7827820E-19 |

At the geometry-verified modeled semi-diameters, the aspheric sag departure from a sphere having the same paraxial radius is −0.136922 mm at 9A (sd 6.6 mm), −0.020673 mm at 10A (sd 7.0 mm), +0.353191 mm at 15A (sd 8.7 mm), and +0.005718 mm at 16A (sd 9.7 mm). These departures apply only to the modeled apertures; the patent does not publish production clear semi-diameters.

The reviewed sources establish that the production lens contains two aspherical elements but do not establish a specific manufacturing process for those surfaces. No claim is therefore made here about molded, polished, hybrid, or other asphere fabrication.

## Conditional Expressions

The patent gives seven principal conditional expressions. Each was recomputed from the final parsed data, using the same definitions and reference planes as the patent. The four Table 19 discrepancies remain visible rather than being reconciled by altering Table 1.

| Condition | Recomputed from final data | Table 19 | Result |
|---|---:|---:|---|
| $20 < \nu_{1p}-\nu_{1n}$ | 31.960 | 32.960 | Pass; Table 19 mismatch |
| $-1.5 < f/f_e < -0.4$ | -1.090293 | -1.090 | Pass; agrees within printed precision |
| $10 < \nu_{3p}-\nu_{3n}$ | 11.570 | 11.570 | Pass |
| $-3.0 < f/f_2 < -0.6$ | -1.449671 | -0.860 | Pass; Table 19 mismatch |
| $-2.0 < R_a/f_3 < -0.3$ | -0.804585 | -0.535 | Pass; Table 19 mismatch |
| $0.9 < f/f_1 < 1.4$ | 1.148431 | 1.088 | Pass; Table 19 mismatch |
| $0.2 < B_f/f < 0.5$ | 0.353053 | 0.353 | Pass |

The first discrepancy is arithmetically apparent from Table 1 itself: 52.32 − 20.36 = 31.96, not 32.96. The remaining mismatches involve group-derived quantities. The final Table 1 transcription independently reproduces the published focal length within source precision, and all seven principal inequalities pass. The applicable preferred sub-ranges tested by the verifier also pass. For that reason, Table 1 is retained unchanged and Table 19 is treated as a derived-summary discrepancy rather than as a prescription correction.

## Verification Summary

The final model was recomputed from the literal contents of `FujifilmFujinonXf35mmf2RWR.data.ts`, not from a separate intended prescription. Sequential reduced-angle tracing and an independently coded conventional ABCD implementation agree on EFL to better than 1e-11 mm.

| Quantity | Verified value | Interpretation |
|---|---:|---|
| EFL | 35.326014 mm | d-line, infinity state, active surfaces 1–16 |
| Patent EFL | 35.328 mm | Table 1 published value |
| Paraxial BFD | 12.476042 mm | surface 16 to paraxial focus, air-equivalent through PP |
| Air-equivalent rear spacing to source Sim | 12.471956 mm | paraxial equivalent of 8.806 + PP 2.850 + 1.787 |
| Air-converted total length | 58.470956 mm | first lens surface to source Sim |
| Physical total length | 59.442 mm | includes the 2.850 mm PP glass path |
| TL/EFL | 1.655181 | compact under patent's <1.7 criterion |
| Petzval sum | +0.004610411 mm⁻¹ | surface-by-surface $\phi/(n n')$ |
| Reciprocal Petzval value | 216.900382 mm | reciprocal of the signed sum |

The plane-parallel optical member PP at patent surfaces 17–18 (2.850 mm, nd 1.51680, νd 64.20; ¶0057 notes it may be omitted or placed elsewhere) is modeled in `rearPlates`: surface 16 keeps the patent's 8.806 mm gap, and the plate is followed by the printed 1.787 mm to Sim. Every analysis traces the plate, but it is not drawn. Its paraxial equivalent is the air spacing

$8.806 + 2.850/1.51680 + 1.787 = 12.4719556962\ \mathrm{mm}$.

The source-Sim plane lies about 0.00409 mm short of the exact paraxial focus, a small residual consistent with the rounded source prescription.

The patent publishes the stop location but not its physical diameter. The model therefore calibrates `STO` semi-diameter to 6.07833 mm so that the final parsed system reproduces the published design F No. 2.09. The resulting modeled f-number is 2.090000. This is a calibration target, not independent evidence for the physical production diaphragm diameter.

Likewise, the patent publishes no lens clear semi-diameters. The authored semi-diameters are modeled from exact meridional ray envelopes and then checked against edge thickness, actual aspherical rim slope, conic domain, shared-gap sag intrusion, and finite off-axis containment. For the defined infinity-state sample set, the minimum element edge thickness is 1.485 mm, the maximum actual rim-slope angle is 47.365°, the largest positive shared-gap sag intrusion is 0.349 of the gap, and the minimum sampled radial clearance on a lens surface is 8.07%. These are checks of the authored visualization/trace geometry, not measurements of production clear apertures or a proof over every possible ray.

Two source-reading corrections are retained transparently. Rendered Table 1 establishes surface 7 as R = +19.88862 mm where plain text extraction lost the decimal, and rendered Table 2 establishes surface 16 A4 = −1.1573006E-05 where text extraction garbled the exponent. These correct transcription of the source document; they do not amend the patent.


## Sources and References

1. **US 2017/0010441 A1**, Masato Kondo and Takashi Suzuki, *Imaging Lens and Imaging Apparatus*, FUJIFILM Corporation, published 2017-01-12. Example 1: FIG. 2; ¶0087–¶0095; Table 1 and Table 2 on PDF p. 23 / printed p. 7; Formula 1 on PDF p. 22 / printed p. 6; Table 19 on PDF p. 31 / printed p. 15.
2. **FUJIFILM Corporation, FUJINON XF35mmF2 R WR specifications.** https://www.fujifilm-x.com/ja-jp/products/lenses/xf35mmf2-r-wr/specifications/
3. **FUJIFILM Corporation, FUJINON XF35mmF2 R WR product page.** https://shopusa.fujifilm-x.com/xf35mmf2-xf35mmf2/
4. **FUJIFILM Korea, XF35mmF2 R WR official product record.** https://www.fujifilm.co.kr/goods/detail.do?goodsIdx=32666&schPsCode=
5. **FUJIFILM Corporation, XF23mmF2 R WR / XF35mmF2 R WR Owner's Manual.** https://dl.fujifilm-x.com/support/manual/lenses/lens_xf23f2_xf35f2_manual_02.pdf
6. **OHARA Corporation, Optical Glass Catalog.** https://oharacorp.com/glass-catalog/
7. **HOYA Corporation, Optical Glass Data / Cross Reference.** https://www.hoya-opticalworld.com/english/datadownload/index.html and https://www.hoya-opticalworld.com/english/products/crossreference.html
8. **SCHOTT AG, Advanced Optics glass search.** https://www.us.schott.com/shop/advanced-optics/en/search/
9. **HIKARI GLASS CO., LTD., General Optical Glass.** https://www.hikari-g.co.jp/cn/optical_glass/general_optical_glass/j-lasf/
10. **SUMITA Optical Glass, Inc., optical-glass catalog resources.** https://www.sumita-opt.co.jp/
11. **Chengdu Guangming Optoelectronic Corp. (CDGM), optical glass database.** https://www.cdgmgd.com/database/toWebDatabase.htm?k=Products_Data&pageIndex=2&url=database
