# Sigma 10-18 mm F2.8 DC DN | Contemporary

## Patent Reference and Design Identification

**Patent:** JP 2024-104911 A (公開特許公報 / unexamined publication)
**Application Number:** 特願2023-9347 (P2023-9347)
**Filed:** 2023-01-25
**Published:** 2024-08-06
**Inventor:** Ryo Shioda (塩田 了)
**Applicant:** Sigma Corporation (株式会社シグマ)
**Title:** Wide-angle lens system (広角レンズ系)
**Classification:** G02B 15/20, G02B 13/18
**Worked examples in patent:** 7
**Embodiment analyzed:** Numerical Example 2 (第2実施例, Figure 8)

This file transcribes and interprets Numerical Example 2 of JP 2024-104911 A. The embodiment is an APS-C constant-aperture ultra-wide zoom with 13 glass elements in 10 air-separated groups, seven aspherical surfaces, a 10.30-17.50 mm computed focal-length range, Fno 2.92, and an image height of 14.20 mm. Those values match the production identity of the Sigma 10-18 mm F2.8 DC DN | Contemporary after normal marketing rounding.

The identification rests on convergent evidence:

1. **Element and group count.** Example 2 resolves to 13 elements in 10 groups when cemented pairs are counted as single air-separated groups. Sigma publishes the production lens as 13 elements in 10 groups.
2. **Special-element count.** The patent has seven aspherical surfaces on four elements: L1, L2, L10, and L13. Sigma publishes four aspherical elements. The three νd = 95.10 elements, L3, L9, and L12, correspond to the three published FLD-class elements; L10 is the most plausible SLD-class element, although Sigma does not publish element positions for its SLD label.
3. **Focal length and aperture.** Independent paraxial trace gives 10.300 / 13.500 / 17.500 mm at wide / middle / telephoto and a constant patent F-number of 2.92. This corresponds to the marketed 10-18 mm F2.8 specification.
4. **Image format.** The patent image height Y = 14.20 mm corresponds to an APS-C-scale image circle, matching Sigma's DC designation.
5. **Focus mechanism.** The patent states that G4, a single biconcave element L11, moves toward the image for near focus. This is consistent with the production lens being an internally focused stepping-motor AF lens.
6. **Field.** The patent full field 2ω is 113.21° / 93.70° / 77.07°. Sigma publishes a production APS-C angle-of-view range of 109.7°-76.5° for L-Mount, Fujifilm X, and Sony E, and 106.6°-73.4° for Canon RF. The small difference is consistent with the distinction between patent-design image geometry and manufacturer-published corrected/camera-format specifications.
7. **Timing.** The patent was filed in January 2023 and published after the product launch cycle, which is consistent with a production-family optical patent rather than a later retrospective filing.

Examples 1 and 2 are near-twin APS-C f/2.8 embodiments: both are 10.30-17.50 mm, Fno 2.92, Y = 14.20 mm, 13 elements / 10 groups, and the same glass map. Example 2 is retained as the analyzed embodiment because the supplied analysis selected it and the patent figure sequence explicitly associates Figure 8 with Example 2. Example 3 is a wider APS-C sibling at 9.30-17.46 mm. Examples 4-7 are full-frame f/4.12 embodiments with Y = 21.63 mm and do not correspond to this APS-C 10-18 mm production lens.

## Optical Architecture

Example 2 is a compact retrofocus, negative-lead, five-unit zoom. The patent describes a front lens group GF of net negative power and a rear lens group GR of net positive power. In the numerical prescription this expands into five moving groups:

| Group | Surfaces | Power | Patent group focal length | Function |
|---|---:|---:|---:|---|
| G1 / GF | 1-7 | Negative | -15.17 mm | Wide-angle front negative group and retrofocus field-forming unit |
| G2 | 8-12 | Positive | +42.43 mm | Weak positive collector and first rear cemented corrector |
| G3 | stop-18 | Positive | +19.52 mm | Strong positive group behind the stop; stop moves with this group |
| G4 | 19-20 | Negative | -25.70 mm | Single-element inner-focus group |
| G5 | 21-24 | Positive | +61.24 mm | Rear gathering and field/distortion correction group |

The power sequence is negative-positive-positive-negative-positive. The negative front group gives the lens its wide-angle retrofocus character, and the positive rear groups restore image-side convergence while keeping the back focal distance long enough for mirrorless mounts. At the wide end BF = 16.3954 mm, giving BF/EFL = 1.592; this is a genuine retrofocus condition, not merely a long mechanical rear clearance.

The wide-to-telephoto zoom movement is dominated by collapse of the G1-G2 separation: d7 changes from 16.5964 mm to 1.5720 mm. The G2-G3 spacing contracts more moderately, G3-G4 opens, G4-G5 closes, and BF increases. The patent's full optical track shortens from 87.92 mm at the wide end to 79.76 mm at the telephoto end.

The principal design choice is stated in the patent's description: the first negative element is both high-index and aspherical. The high refractive index suppresses the field-curvature penalty normally associated with a strong front negative lens, while the aspherical front surface corrects distortion without requiring the large, deeply concave front element common in older ultra-wide retrofocus designs.

## Element-by-Element Analysis

Element focal lengths below are standalone thick-lens values in air, recomputed from the Example 2 radii, thicknesses, and d-line refractive indices. Cemented-pair behavior in the assembled lens differs from these standalone values; the standalone values are included to clarify individual element signs and relative power.

### G1 — Front negative group GF

#### L1 — Negative meniscus, convex to object, object-side asphere

nd = 1.85135, νd = 40.10. Glass: Hoya M-TAFD305 match. f = -20.93 mm.

L1 is a deep object-convex negative meniscus. Both surfaces have positive radii, with the rear radius much shorter than the front radius, so the element contributes strong negative power while preserving an object-convex entry face. This is the element identified by the patent as NF1. Its high index satisfies condition 1 and is central to the compactness argument in the patent.

The front surface is aspherical. Its positive A4 term and subsequent balancing higher-order terms alter the peripheral power of the first surface, which is the patent's main mechanism for correcting wide-angle distortion while avoiding an oversized front element.

#### L2 — Negative meniscus, convex to object, both surfaces aspherical

nd = 1.59201, νd = 67.02. Glass: Hoya M-PCD51 match. f = -41.78 mm.

L2 is the second object-convex negative meniscus in the front group. Both faces are aspherical, and the image-side surface is the only surface in this example with non-zero odd-order polynomial terms. This makes L2 the most geometrically aggressive aspheric element in the patent prescription.

Its relatively high Abbe number compared with the high-index lanthanum elements helps the front group balance lateral color. Because it is also one of the moldable Hoya M-prefix matches, it fits the production statement that the lens uses multiple glass-molded aspherical elements.

#### L3-L4 — Cemented biconcave / biconvex doublet

L3: nd = 1.43700, νd = 95.10. Glass: Hoya FCD100 match. f = -30.94 mm.
L4: nd = 1.87071, νd = 40.73. Glass: Hoya TAFD32 match. f = +25.66 mm.

L3 is a fluorite-class crown with very high Abbe number and strong positive partial-dispersion deviation. L4 is a dense positive lanthanum partner. Together they form a weakly positive cemented group in air, with f ≈ +141.72 mm. In the complete G1 system the pair acts primarily as a chromatic and field corrector rather than as the main power source.

The large index contrast at the cemented interface bends oblique bundles without adding an air-glass surface. This is useful in the front group, where field and lateral color are difficult to control without increasing element count or front diameter.

### G2 — First rear positive group

#### L5 — Positive meniscus, convex to object

nd = 1.85883, νd = 30.00. Glass: Hoya NBFD30 match. f = +66.89 mm.

L5 is a weak positive meniscus at the front of the rear positive assembly. Its role is not high power by itself; instead it begins the transition from the diverging front group to the more strongly converging stop-side groups behind it.

#### L6-L7 — Cemented negative-meniscus / positive-meniscus doublet, NR1 / PR1

L6: nd = 2.05090, νd = 26.94. Glass: Hoya TAFD65 match. f = -27.22 mm.
L7: nd = 1.59270, νd = 35.45. Glass: Hoya FF5 match. f = +21.19 mm.

The patent identifies L6 as NR1 and L7 as PR1. The cemented interface is convex to the object, satisfying the patent's rear-doublet construction requirement. The index difference ndNR1 - ndPR1 = 0.45820 satisfies condition 4 and gives the designer a strong cemented-surface lever for coma and oblique-aberration correction.

The doublet is only weakly positive as a standalone cemented group, f ≈ +126.67 mm. Its importance is therefore not raw power, but controlled bending and chromatic balancing near the front of GR.

### G3 — Second rear positive group, stop on object side

The aperture stop is located between G2 and G3 and moves with G3 during zooming.

#### L8-L9 — Cemented negative-meniscus / biconvex doublet, NR2 / PR2

L8: nd = 1.91650, νd = 31.60. Glass: Ohara S-LAH88 match. f = -37.18 mm.
L9: nd = 1.43700, νd = 95.10. Glass: Hoya FCD100 match. f = +32.12 mm.

The patent identifies L8 as NR2 and L9 as PR2. This is the second negative-positive cemented doublet in GR, also with an object-convex cemented interface. The index difference ndNR2 - ndPR2 = 0.47950 satisfies condition 6.

The partial-dispersion difference between PR2 and NR2 is especially large: ΔPgFPR2 - ΔPgFNR2 = 0.0569. This is one of the primary secondary-spectrum correction mechanisms in the design.

#### L10 — Biconvex positive, both surfaces aspherical

nd = 1.55332, νd = 71.68. Glass: Hoya M-FCD500 match. f = +21.32 mm.

L10 is the strongest positive singlet in the system and sits directly behind the stop-side cemented group. Its low dispersion and positive ΔPgF make it the most plausible match for Sigma's published SLD count, although that assignment remains inferential because Sigma does not publish the element-by-element special-glass map.

Both faces are aspherical. Their location behind the stop makes them effective for spherical aberration and coma correction without requiring extreme front-element curvature.

### G4 — Inner-focus group

#### L11 — Biconcave negative

nd = 1.74330, νd = 49.22. Glass: Hoya NBF1 / CDGM H-LaF53-class match. f = -25.70 mm.

L11 is the whole of G4. Its standalone focal length reproduces the patent's group focal length because there are no other elements in the group. The patent states that G4 moves toward the image plane for near focusing, making this a single-element inner-focus design.

The glass has a relatively low partial-dispersion deviation, which helps keep the moving focus group from destabilizing chromatic correction as it shifts.

### G5 — Rear positive group

#### L12 — Biconvex positive

nd = 1.43700, νd = 95.10. Glass: Hoya FCD100 match. f = +24.41 mm.

L12 is the third fluorite-class crown in the design. Its strong positive power is placed relatively far to the rear, where it helps collect the steeply converging bundle while contributing high positive ΔPgF to the rear-of-stop positive-element average used in condition 8.

#### L13 — Biconcave negative, both surfaces aspherical

nd = 1.80610, νd = 40.73. Glass: Hoya M-NBFD130 match. f = -37.03 mm.

L13 is the final element and the rear aspherical distortion/astigmatism corrector. Its object-side surface uses a paraboloid base, K = -1, and both faces carry polynomial aspheric correction. Its position gives it high leverage on peripheral field behavior while the axial bundle remains relatively small.

## Glass Identification and Selection

The patent gives nd, νd, and θgF for each element, but it does not name glass catalog designations. The names below are catalog matches by refractive index / Abbe signature and partial-dispersion consistency. Hoya matches dominate the prescription; L8 is an exact Ohara S-LAH88 match and is treated as S-LAH88-class rather than forced into a weaker Hoya equivalent.

ΔPgF is calculated from the patent's stated relation: ΔPgF = θgF - (0.648285 - 0.00180123 × νd).

| Element | Catalog match | nd | νd | θgF | ΔPgF | Optical role |
|---|---|---:|---:|---:|---:|---|
| L1 | M-TAFD305 (Hoya) | 1.85135 | 40.10 | 0.5694 | -0.0067 | High-index first asphere |
| L2 | M-PCD51 (Hoya) | 1.59201 | 67.02 | 0.5358 | +0.0082 | Moldable anomalous crown asphere |
| L3 | FCD100 (Hoya) | 1.43700 | 95.10 | 0.5335 | +0.0565 | FLD-class front-group crown |
| L4 | TAFD32 (Hoya) | 1.87071 | 40.73 | 0.5681 | -0.0068 | Dense positive doublet partner |
| L5 | NBFD30 (Hoya) | 1.85883 | 30.00 | 0.5978 | +0.0036 | Positive collector |
| L6 | TAFD65 (Hoya) | 2.05090 | 26.94 | 0.6050 | +0.0052 | NR1 high-index negative |
| L7 | FF5 (Hoya) | 1.59270 | 35.45 | 0.5926 | +0.0082 | PR1 positive doublet partner |
| L8 | S-LAH88 (Ohara) | 1.91650 | 31.60 | 0.5910 | -0.0004 | NR2 dense negative |
| L9 | FCD100 (Hoya) | 1.43700 | 95.10 | 0.5335 | +0.0565 | PR2 FLD-class crown |
| L10 | M-FCD500 (Hoya) | 1.55332 | 71.68 | 0.5402 | +0.0210 | Inferred SLD-class asphere |
| L11 | NBF1 (Hoya) / H-LaF53 (CDGM) | 1.74330 | 49.22 | 0.5493 | -0.0103 | Moving focus group |
| L12 | FCD100 (Hoya) | 1.43700 | 95.10 | 0.5335 | +0.0565 | Rear FLD-class crown |
| L13 | M-NBFD130 (Hoya) | 1.80610 | 40.73 | 0.5693 | -0.0056 | Rear moldable asphere |

The published production count of three FLD elements is best mapped to L3, L9, and L12, all νd = 95.10 FCD100 matches. The single SLD element is most plausibly L10, the M-FCD500 element with νd = 71.68 and ΔPgF = +0.0210. L2 is a secondary low-dispersion moldable crown and could be considered an alternative SLD candidate, but its lower ΔPgF makes L10 the stronger assignment.

The data file keeps the patent-derived ΔPgF value on every element for chromatic tracing, but the APD display tag is limited to the three FLD elements and the strongest SLD candidate. Ordinary dense flints and mild near-normal glasses are not marked as APD merely because the patent publishes θgF for them.

## Focus Mechanism

The patent describes focusing from infinity to close distance by moving G4 toward the image plane. In Example 2, G4 consists only of L11, a biconcave negative element. This is a mechanically light inner-focus scheme, consistent with the production lens' stepping motor and video-oriented focus-breathing suppression.

The patent publishes only infinity-focus zoom separations. It does not provide close-focus separation tables or focus travel. Therefore the data file models the infinity zoom states only; close-focus metadata is taken from the manufacturer specification, 0.116 m at the wide end and 0.191 m at the telephoto end.

| Gap | Between groups | Wide | Middle | Telephoto |
|---|---|---:|---:|---:|
| d7 | G1-G2 | 16.5964 | 7.7505 | 1.5720 |
| d12 | G2-stop/G3 | 3.2532 | 3.0431 | 2.5382 |
| d18 | G3-G4 | 1.6000 | 2.5118 | 3.3767 |
| d20 | G4-G5 | 4.6173 | 3.7055 | 2.8406 |
| BF | G5-image | 16.3954 | 19.7381 | 23.9736 |

## Aspherical Surfaces

Seven patent surfaces are aspherical: 1, 3, 4, 17, 18, 23, and 24. They are represented in the data file as 1A, 3A, 4A, 17A, 18A, 23A, and 24A.

The patent uses the standard conic-plus-polynomial sag equation:

$$
z=\frac{(1/r)y^2}{1+\sqrt{1-(1+K)(y/r)^2}}+A_3y^3+A_4y^4+A_5y^5+\cdots+A_{20}y^{20}
$$

Here K is the ordinary conic constant: K = 0 is spherical and K = -1 is paraboloidal. There is no Japanese κ-to-K offset in this patent.

The original Example 2 coefficients are:

| Surface | K | Non-zero coefficients |
|---|---:|---|
| 1 | 0 | A4 = +3.57607E-05, A6 = -1.17819E-07, A8 = +3.35081E-10, A10 = -6.45434E-13, A12 = +5.60529E-16 |
| 3 | 0 | A4 = -1.08527E-04, A6 = +9.36708E-07, A8 = -3.94825E-09, A10 = +8.17700E-12, A12 = -7.19759E-15 |
| 4 | -0.20000 | A3 = -8.61492E-06, A4 = -9.04369E-05, A5 = +1.49662E-06, A6 = -6.10593E-09, A7 = +3.07996E-07, A8 = -5.78057E-08, A9 = +3.22483E-09, A10 = +1.20097E-10, A11 = -1.86496E-11, A12 = +1.23408E-12, A13 = -1.53332E-13, A14 = +7.16732E-15 |
| 17 | 0 | A4 = -3.94666E-05, A6 = -2.00299E-07, A8 = +3.02534E-10, A10 = -3.61272E-12, A12 = +1.10093E-13 |
| 18 | 0 | A4 = -2.02550E-05, A6 = -2.24984E-07, A8 = +1.61641E-09, A10 = -9.56611E-12, A12 = +5.04251E-14 |
| 23 | -1.00000 | A4 = -3.17786E-05, A6 = -6.56688E-07, A8 = +3.22451E-09, A10 = -4.39587E-13 |
| 24 | 0 | A4 = +5.38996E-05, A6 = -2.92940E-07, A8 = -4.43503E-10, A10 = +6.04648E-11, A12 = -3.46836E-13 |

The data-file renderer supports even-order aspheres. Surface 4 is therefore stored as an even-order least-squares refit over the rendered clear semi-diameter y = 0-10.25 mm, with R and K retained from the patent. The fitted coefficients used in the data file are:

A4 = -9.373052525359E-05, A6 = +1.170550452395E-06, A8 = -1.533130191306E-08, A10 = +1.814323930378E-10, A12 = -1.373015437848E-12, A14 = +3.668693896826E-15.

Against the original odd-plus-even surface over y = 0-10.25 mm, the fit residual is 1.37E-05 mm maximum and 5.53E-06 mm RMS. This is a data-file implementation approximation only; the patent analysis remains based on the original odd-order prescription.

## Chromatic Correction Strategy

The patent's glass strategy depends on partial dispersion, not just Abbe number. In GF, the mean ΔPgF of the negative elements L1, L2, and L3 is +0.0194, while the positive L4 is -0.0068. Their difference, +0.0262, satisfies condition 3.

Behind the stop, the positive elements L9, L10, and L12 average ΔPgF = +0.0447, satisfying condition 8, while the negative elements L8, L11, and L13 average ΔPgF = -0.0054, satisfying condition 10. The design therefore pairs high-ΔPgF positive fluorite-class crowns against low-ΔPgF dense negative glasses behind the stop. That is the principal secondary-spectrum control mechanism.

The correct characterization is not apochromatic. The patent publishes θgF values and uses anomalous partial dispersion deliberately, but it does not claim APO correction or provide a three-wavelength residual analysis.

## Conditional Expressions

The following values were recomputed from the transcribed Example 2 prescription where paraxial computation is sufficient. Condition 2 is a finite-ray local-curvature condition involving the chief-ray intersection with NF1 at maximum image height; the patent's tabulated value is adopted for that term.

| # | Expression | Example 2 value | Result |
|---|---|---:|---|
| 1 | 1.81 < ndNF1 < 2.15 | 1.851 | Met |
| 2 | 0.05 < fw(1/RE1 - 1/RE2 - 1/RC1 + 1/RC2) < 0.50 | 0.160 | Met |
| 3 | -0.010 < ΔPgFNFA - ΔPgFPFA < 0.050 | 0.0262 | Met |
| 4 | 0.30 < ndNR1 - ndPR1 < 0.60 | 0.458 | Met |
| 5 | 0.015 < ΔPgFPR2 - ΔPgFNR2 | 0.0569 | Met |
| 6 | 0.20 < ndNR2 - ndPR2 < 0.60 | 0.479 | Met |
| 7 | 1.40 < ndPRA < 1.65 | 1.476 | Met |
| 8 | 0.020 < ΔPgFPRA | 0.0447 | Met |
| 9 | 1.75 < ndNRA < 2.10 | 1.822 | Met |
| 10 | ΔPgFNRA < 0.010 | -0.0054 | Met |
| 11 | -1.50 < sqrt(fw ft) / fF < -0.50 | -0.885 | Met |
| 12 | 0.40 < sqrt(fw ft) / fR < 0.80 | 0.595 | Met |

## Verification Summary

The prescription was re-entered from the rendered patent pages and verified by an independent paraxial y-ν trace.

| Quantity | Computed | Patent table |
|---|---:|---:|
| EFL, wide | 10.3002 mm | 10.30 mm |
| EFL, middle | 13.5001 mm | 13.50 mm |
| EFL, telephoto | 17.5003 mm | 17.50 mm |
| BFD, wide | 16.3958 mm | 16.3954 mm |
| BFD, middle | 19.7384 mm | 19.7381 mm |
| BFD, telephoto | 23.9741 mm | 23.9736 mm |
| G1 focal length | -15.1707 mm | -15.17 mm |
| G2 focal length | +42.4345 mm | +42.43 mm |
| G3 focal length | +19.5222 mm | +19.52 mm |
| G4 focal length | -25.7019 mm | -25.70 mm |
| G5 focal length | +61.2447 mm | +61.24 mm |

The surface-by-surface Petzval sum, computed as Σ((n' - n)/(R n n')), is +5.144E-03 mm^-1, corresponding to a Petzval radius of -194.4 mm. This value is not tabulated in the patent and is reported only as an independent diagnostic.

The following implementation details are reflected in the data file:

- The optical prescription is unscaled; all R, d, nd, and νd values follow Example 2 directly.
- The data file uses the patent infinity zoom spacings only. Manufacturer close-focus distance is recorded as metadata, but no close-focus optical travel is synthesized.
- Semi-diameters are conservative diagrammatic estimates because the patent does not publish clear apertures. They were checked for sd/|R| < 0.90, element front/rear SD ratio ≤ 1.25, positive edge thickness, and signed cross-gap sag clearance. The second review changed only these estimated SD values and the surface-4 even-order refit; it did not change the patent prescription radii, thicknesses, glasses, zoom spacings, or computed paraxial values.
- APD UI tagging is intentionally restricted to L3, L9, L10, and L12. The remaining elements still retain patent-derived ΔPgF values where available, but they are not highlighted as special anomalous-dispersion elements.
- Surface 4 is approximated in the data file by an even-order refit, because the original patent surface includes odd-order terms not represented by the viewer's asphere model.

## Deviations Between Patent and Production Specifications

The patent design and production lens agree on the main optical identity, but the following differences should be read as normal patent-to-product and marketing conventions:

- Patent EFL is 10.30-17.50 mm; production marking is 10-18 mm.
- Patent Fno is 2.92; production marking is F2.8.
- Patent field is the design full field 2ω = 113.21°-77.07°; Sigma publishes camera-format angle-of-view values of 109.7°-76.5° for L-Mount, Fujifilm X, and Sony E and 106.6°-73.4° for Canon RF.
- The patent gives infinity-focus zoom data only; Sigma publishes minimum focusing distance and maximum magnification for the production lens.

## Sources

JP 2024-104911 A, "広角レンズ系" (Wide-angle lens system), Sigma Corporation; inventor Ryo Shioda; filed 2023-01-25, published 2024-08-06. Numerical Example 2 supplied the surface prescription, aspherical coefficients, variable spacing data, group focal lengths, and conditional-expression values.

Sigma Corporation, official product specifications for the 10-18 mm F2.8 DC DN | Contemporary. Used for production element/group count, special-element count, mount list, field-of-view values, close-focus distance, maximum magnification, AF drive, and product identity.

Hoya, Ohara, and CDGM public glass catalog data. Used for nd / νd catalog matching and glass-family annotation. The patent itself supplies nd, νd, and θgF; catalog names are best catalog matches, not patent-stated glass trade names.
