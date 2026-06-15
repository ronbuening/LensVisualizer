## Patent Reference and Design Identification

**Patent:** US 2017/0351051 A1
**Application Number:** 15/612,371
**Filed:** June 2, 2017
**Published:** December 7, 2017
**Priority:** June 6, 2016 (JP 2016-112436)
**Inventor:** Daiki Kawamura
**Assignee:** Fujifilm Corporation, Tokyo (JP)
**Title:** Imaging Lens and Imaging Apparatus
**Embodiment analyzed:** Example 1 (Table 1, Table 2, Table 3; FIG. 1, FIG. 7, FIG. 8)

US 2017/0351051 A1 discloses a three-group inner-focusing imaging lens in which the first lens group G1 and third lens group G3 remain fixed while the single-element negative second group G2 moves toward the image during close focusing. The patent's Example 1 is the closest prescription match for the Fujifilm Fujinon XF23mmF2 R WR.

The identification rests on convergent evidence. Example 1 is a 10-element, 6-group APS-C wide-angle design with two aspherical elements, matching Fujifilm's published 10-element/6-group specification with two aspherical elements. The patent gives f = 22.377 mm, FNo. = 2.06, and 2ω = 64.8°, which correspond closely to the production 23 mm f/2 lens and its official 63.4° angle of view. The focusing architecture also matches the product description: a compact inner-focus system driven by a stepping motor. Fujifilm publishes a 22 cm minimum focus distance and 0.13× maximum magnification; those values are beyond the patent's tabulated β = -0.041 near-distance example but are reached in the air-equivalent data model by extending the same G2 motion.

The patent contains six worked examples. Examples 2 and 3 have similar focal lengths, but Example 1 is the first worked example and matches the production 23 mm specification most directly. Examples 4 through 6 move toward longer focal lengths and are better understood as variants within the same compact f/2 WR prime design family rather than as the XF23mmF2 R WR prescription.

## Optical Architecture

The design is a compact mirrorless wide-angle prime with a positive-negative-weak-positive group power distribution. G1 carries most of the refractive power, G2 is the moving negative focus group, and G3 is a weak positive cemented rear doublet that limits focus-induced off-axis ray variation and helps control field curvature and chromatic aberration near the image plane.

The physical layout has 10 elements in 6 air-separated groups: {L11}, {L12-L13}, {L14}, {L15-L16-L17}, {L21}, and {L31-L32}. The first lens group G1 is further divided by the stop into a positive front group G1F and a positive rear group G1R. G1F contains a front negative meniscus L11 followed by the L12-L13 cemented doublet. G1R contains a biconcave double-asphere L14 followed by the L15-L16-L17 cemented triplet. The small single negative aspheric L21 forms G2. The rear group G3 is a cemented negative-positive doublet.

The prescription includes an optical member PP behind the lens in the patent table. In the data file this sensor-side plate is not modeled as a lens surface. Its optical path has instead been folded into the final air-equivalent back focal distance, following the project convention that excludes sensor cover glass and filters from production lens prescriptions.

## Element-by-Element Analysis

Element focal lengths in this section are standalone in-air values calculated from each element's two bounding surfaces. Cemented doublets and triplets have different in-situ behavior when their shared interfaces and neighboring air gaps are retained in the complete prescription.

### L11 — Negative Meniscus, Convex to Object (G1Fa)

nd = 1.51633, νd = 64.14. Glass: S-BSL7 (OHARA). f = -34.0 mm.

L11 is the front field-widening element. Both radii are positive, so the element is a negative meniscus with a stronger concave rear surface. Its primary function is geometric: it opens the field angle while keeping the front diameter moderate. The patent describes this front-group arrangement as a wide-converter-like configuration in which the negative leading element is followed by a positive partial group that corrects distortion and coma.

The S-BSL7 crown choice keeps dispersion low in this first element. L11 bends oblique bundles before the main positive power of G1F, but it is not the principal chromatic corrector.

### L12 — Biconvex Positive (G1Fb, cemented to L13)

nd = 1.88300, νd = 40.76. Glass: S-LAH58 (OHARA). f = +13.4 mm.

L12 is the strong positive member of the front cemented doublet. The high index permits large positive power without extreme surface curvatures. Its pairing with the higher-dispersion negative L13 gives the front group a compact achromatized positive unit rather than relying on a single high-power singlet.

### L13 — Plano-Concave Negative (G1Fb, cemented to L12)

nd = 1.68893, νd = 31.07. Glass: S-TIM28 (OHARA). f = -25.1 mm.

L13 supplies the high-dispersion negative component of the G1Fb doublet. Its rear surface is flat in the patent prescription, simplifying the exit face of the cemented pair. The L12-L13 doublet is net positive while reducing the chromatic and field-aberration burden passed to the stop and rear group.

### L14 — Biconcave Negative, Doubly Aspherical (G1R)

nd = 1.84887, νd = 40.12. Glass: 849401 high-index lanthanum flint class, likely PGM aspheric melt. f = -33.2 mm.

L14 is the first aspherical element and is biconcave. Both its front and rear surfaces carry aspherical profiles in the patent. It subtracts power after the stop and provides a major correction point for spherical aberration, coma, and field curvature before the strongly positive cemented triplet.

No exact public catalog glass match was found for nd = 1.84887 and νd = 40.12. Hoya MC-TAFD305 / M-TAFD305 is a nearby moldable high-index glass class, but its published index is not exact. The data file therefore records the 849401 code and patent partial-dispersion deviation rather than assigning a false catalog identity.

### L15 — Plano-Convex Positive (G1R, cemented to L16)

nd = 1.81600, νd = 46.62. Glass: S-LAH59 (OHARA). f = +13.4 mm.

L15 is the first positive element of the G1R cemented triplet. Its front surface is flat and its rear surface is strongly curved, placing much of the triplet's positive power at the first cemented interface. Although the S-LAH family name is lanthanum-high-index, νd = 46.62 places this material in flint territory by the usual crown/flint boundary; it should not be described as a crown glass.

### L16 — Biconcave Negative (G1R, cemented between L15 and L17)

nd = 1.68893, νd = 31.07. Glass: S-TIM28 (OHARA). f = -15.5 mm.

L16 is the central negative member of the triplet. It supplies the high dispersion needed to balance the two flanking positive lanthanum flints. The patent specifically emphasizes the rear group construction in which positive, negative, and positive lenses are cemented in order, reducing assembly sensitivity compared with air-spaced singlets.

### L17 — Biconvex Positive (G1R, cemented to L16)

nd = 1.88300, νd = 40.76. Glass: S-LAH58 (OHARA). f = +17.0 mm.

L17 closes the cemented triplet. Its rear surface is strongly curved and contributes to the final convergence produced by G1. The complete L15-L16-L17 triplet has a short positive focal length and is the principal converging component in G1R.

### L21 — Biconcave Negative, Doubly Aspherical (G2 Focus Group)

nd = 1.80312, νd = 40.54. Glass: 803405 high-index lanthanum flint class, likely PGM aspheric melt. f = -39.8 mm.

L21 is the entire second lens group and the sole moving focus element. It is negative, compact, and aspherical on both sides. During close focusing it moves toward the image while G1 and G3 remain fixed. The patent explains that using a single negative moving group opposite in sign to G1 permits strong focus power and reduced focus travel.

No exact public catalog match was found for nd = 1.80312 and νd = 40.54. The element is therefore treated as a code-only high-index aspheric material with patent partial-dispersion support rather than being forced into a catalog glass name.

### L31 — Biconcave Negative (G3, cemented to L32)

nd = 1.78470, νd = 26.29. Glass: S-TIH23 (OHARA). f = -36.9 mm.

L31 is the negative member of the rear cemented doublet. Its high dispersion is an exact match to OHARA S-TIH23, not merely a generic dense flint. This correction matters because the patent's θgF value and six-digit glass code line up with S-TIH23's published data.

The negative power of L31 offsets much of L32's positive power, leaving G3 with only weak net positive power. This weak rear group is central to the patent's conditional-expression strategy: G3 corrects chromatic aberration and field curvature without making focus-induced off-axis ray changes excessive.

### L32 — Biconvex Positive (G3, cemented to L31)

nd = 1.80400, νd = 46.58. Glass: S-LAH65V (OHARA). f = +31.6 mm.

L32 is the positive member of the rear doublet. Like L15, its Abbe number is below the ordinary crown/flint boundary, so it is more accurately described as a dense lanthanum flint rather than a crown. The L31-L32 doublet gives the rear group weak positive power while separating the exit pupil from the image plane and reducing sensor incidence angles.

## Glass Identification / Selection

The design uses a compact but nontrivial glass palette. Six material entries are exact public OHARA catalog matches, two catalog glasses are reused, and two high-index aspherical elements remain unmatched against public catalogs.

| Element(s) | nd | νd | θgF | Catalog identification | Role |
|---|---:|---:|---:|---|---|
| L11 | 1.51633 | 64.14 | 0.53531 | S-BSL7 (OHARA) | Low-index crown front field element |
| L12, L17 | 1.88300 | 40.76 | 0.56679 | S-LAH58 (OHARA) | High-index positive lanthanum flint |
| L13, L16 | 1.68893 | 31.07 | 0.60041 | S-TIM28 (OHARA) | High-dispersion titanium flint |
| L14 | 1.84887 | 40.12 | 0.57197 | 849401 high-index aspheric melt | Biconcave aspherical corrector |
| L15 | 1.81600 | 46.62 | 0.55682 | S-LAH59 (OHARA) | Positive member of G1R triplet |
| L21 | 1.80312 | 40.54 | 0.56551 | 803405 high-index aspheric melt | Moving negative focus element |
| L31 | 1.78470 | 26.29 | 0.61360 | S-TIH23 (OHARA) | Very high-dispersion negative rear corrector |
| L32 | 1.80400 | 46.58 | 0.55730 | S-LAH65V (OHARA) | Positive member of weak rear group |

The main correction to the prior glass interpretation is L31: the prescription matches OHARA S-TIH23 exactly. L15 and L32 also require classification discipline. Their Abbe numbers of 46.62 and 46.58 place them below the usual crown/flint boundary, so the analysis treats them as high-index lanthanum flints, not crowns. The two aspherical elements L14 and L21 are intentionally left as code-only matches because their stored nd/νd pairs do not correspond to exact public catalog entries; their patent θgF values are retained as `dPgF` in the data file.

## Focus Mechanism

The lens uses inner focus. G2 consists only of L21 and moves toward the image during close focusing. G1 and G3 remain stationary relative to the image plane.

| Focus state | DD[12] | DD[14] | G2 travel | Paraxial magnification |
|---|---:|---:|---:|---:|
| Infinity, patent Table 2 | 2.312 mm | 5.764 mm | 0.000 mm | 0 |
| Patent near state, β = -0.041 | 2.984 mm | 5.092 mm | +0.672 mm | -0.0408 |
| Data-file close state, production MFD 0.22 m | 4.586 mm | 3.490 mm | +2.274 mm | -0.1324 |

The patent's tabulated close state is not the production minimum focus distance. A paraxial finite-conjugate solve in the air-equivalent data model shows that the same prescription reaches the manufacturer-published 0.22 m image-plane close focus when G2 travel is extended to 2.274087 mm, yielding |m| = 0.13237. This matches the published 0.13× maximum magnification closely enough for the data file's close-focus endpoint.

## Aspherical Surfaces

Four aspherical surfaces are present: S7 and S8 on L14, and S13 and S14 on L21. The patent uses the following sag form:

$$
Z_d = \frac{C h^2}{1 + \sqrt{1 - K_A C^2 h^2}} + \sum_{m=3}^{20} A_m h^m
$$

Here C = 1/R and the patent's KA convention has KA = 1 for a spherical base curve. In the standard renderer convention this corresponds to K = 0. The patent also includes odd-order coefficients A3, A5, A7, and so on. Because the renderer supports the standard even-order form only, the data file uses even-order least-squares refits over the adopted clear semi-diameters.

The leading patent coefficients copied from Table 3 and used in the refit are:

| Surface | KA | A3 | A4 | A6 | A8 |
|---|---:|---:|---:|---:|---:|
| S7 | 1.0000000E+00 | +1.5073532E-04 | -1.1467085E-04 | +2.7115028E-05 | -2.7494956E-06 |
| S8 | 1.0000000E+00 | +2.5439114E-04 | -9.1808037E-05 | +3.4413909E-05 | -2.5271341E-06 |
| S13 | 1.0000000E+00 | +1.1475882E-04 | +9.4330279E-05 | -1.6458052E-07 | -8.0154932E-10 |
| S14 | 1.0000000E+00 | +2.2255579E-05 | +1.4188125E-04 | -3.3414964E-07 | +2.9999049E-09 |

The full A3-A20 patent series was used for the numerical refit; only the leading terms are repeated here to avoid duplicating the entire patent table.

| Surface | Element | Adopted semi-diameter | Refit maximum residual | Refit RMS residual |
|---|---|---:|---:|---:|
| 7A | L14 front | 7.20 mm | 0.041 µm | 0.015 µm |
| 8A | L14 rear | 7.13 mm | 0.057 µm | 0.021 µm |
| 13A | L21 front | 8.00 mm | 0.045 µm | 0.018 µm |
| 14A | L21 rear | 7.90 mm | 0.009 µm | 0.004 µm |

These residuals are small enough for visual ray-tracing and layout use. Surface 8A was held to a 7.13 mm semi-diameter because the patent's full odd/even departure becomes steep near the rim and is followed by only a 0.420 mm air gap; this keeps cross-gap sag intrusion within the project limit without materially changing the optical diagram.

## Conditional Expressions

The patent defines ten conditional expressions. The principal values below were independently re-derived from the transcribed paraxial prescription except for expressions (7) and (8), which depend on the patent's group-magnification convention and are therefore accepted from Table 19.

| Expression | Formula | Verified / accepted value | Patent Table 19 | Bound |
|---|---|---:|---:|---|
| (1) | \|f3/f2\| | 4.882 | 4.881 | > 2.5 |
| (2) | f1/f | 0.664 | 0.66 | 0.4-1.2 |
| (3) | NdG2 | 1.803 | 1.803 | > 1.68 |
| (4) | νdG2 | 40.54 | 40.54 | 30-60 |
| (5) | \|f23/f1\| | 3.636 | 3.636 | 1.5-5.4 |
| (6) | \|f2/f\| | 1.780 | 1.779 | 0.8-3.0 |
| (7) | \|(1-β2²)×β3²\| | 1.384 accepted | 1.384 | 0.6-2.3 |
| (8) | β2/β3 | 1.707 accepted | 1.707 | 1.0-2.6 |
| (9) | \|f3/f\| | 8.690 | 8.686 | > 3.0 |
| (10) | Ds/TL | 0.333 | 0.333 | 0.2-0.5 |

The values confirm that Example 1 was transcribed consistently. The large |f3/f2| and |f3/f| ratios indicate that G3 is deliberately weak, which is central to the patent's suppression of focus-induced field curvature variation.

## Verification Summary

The paraxial audit used an independent y-nu matrix trace. The optical member PP was excluded from the surface list and folded into the final air-equivalent back focal distance: 10.862 mm + 2.850/1.51680 mm + 1.000 mm = 13.740956 mm.

At infinity, the matrix trace gives EFL = 22.3718 mm, agreeing with the patent's rounded f = 22.377 mm. The computed image-side back focal distance from the last lens surface is 13.7428 mm, agreeing with the folded air-equivalent value within rounding. The aperture stop semi-diameter required by the patent FNo. = 2.06 is 6.53 mm, so the data file uses 6.54 mm.

The close-focus endpoint in the data file is not copied from the patent near-state table. It is solved to the production 0.22 m minimum focus distance and returns paraxial magnification -0.13237, matching the official 0.13× maximum magnification. Semi-diameters were then checked against the project constraints: sd/|R| < 0.90, front/rear element semi-diameter ratio ≤ 1.25, positive edge thickness, and signed cross-gap sag intrusion ≤ 90% of the adjacent air gap.

## Design Heritage and Context

The XF23mmF2 R WR belongs to Fujifilm's compact weather-resistant f/2 prime family. Its external simplicity is not matched by a simple optical formula: the patent design uses a wide-converter-like front arrangement, multiple cemented achromatizing groups, two double-aspherical elements, and a single light moving focus lens. The later examples in the same patent move toward longer focal lengths, but the analysis does not treat them as production transcriptions. The Example 1 prescription is a modern mirrorless adaptation of older compact quasi-symmetric wide-angle practice, with the focusing burden shifted to a small internal negative group to support high-speed autofocus and stable aberration correction.

## Sources

Fujifilm Corporation. "FUJINON XF23mmF2 R WR — Specifications." Fujifilm X Series Global Product Page. https://www.fujifilm-x.com/global/products/lenses/xf23mmf2-r-wr/specifications/

Fujifilm Corporation. "FUJINON XF23mmF2 R WR — Product Page." Fujifilm X Series Global Product Page. https://www.fujifilm-x.com/global/products/lenses/xf23mmf2-r-wr/

Kawamura, Daiki. US Patent Application Publication US 2017/0351051 A1, "Imaging Lens and Imaging Apparatus." Published December 7, 2017.

OHARA Corporation / OHARA GmbH. Optical glass datasheets and catalog entries for S-BSL7, S-LAH58, S-TIM28, S-LAH59, S-TIH23, and S-LAH65V.

HOYA Corporation. Molded-glass catalog/news data for MC-TAFD305 / M-TAFD305, used only as a nearby comparison for the unmatched L14 aspherical material.
