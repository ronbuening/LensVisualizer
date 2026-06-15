## Patent Reference and Design Identification

**Patent:** US 2022/0276464 A1
**Application number:** US 17/667,312
**Filed:** February 8, 2022
**Published:** September 1, 2022
**Priority:** JP 2021-026601, filed February 22, 2021
**Inventors:** Taiga Noda; Ryoko Tomioka
**Assignee:** FUJIFILM Corporation
**Title:** Imaging Lens and Imaging Apparatus
**Embodiment analyzed:** Example 7, Tables 25-28, Figure 14, Figure 15, and Table 49

Example 7 is the production-relevant embodiment for the Fujinon XF 23mm F1.4 R LM WR. The identification rests on convergent, independently checked features rather than on focal length alone:

1. Example 7 has 15 glass elements in 10 air-spaced groups, matching the manufacturer specification for the XF23mmF1.4 R LM WR.
2. The prescription contains two double-sided aspherical elements, L26 and L32, and three high-Abbe ED-class elements, L21, L25, and L31. This matches Fujifilm's stated "2 aspherical and 3 ED elements" construction.
3. The patent EFL is f = 23.62 mm and FNo = 1.44; the marketed specification is 23 mm and f/1.4.
4. Example 7 gives Ymax = 14.45 mm, or a 28.9 mm image circle, which is appropriate for the Fujifilm X APS-C format.
5. The patent focus mechanism moves only G2 toward the object side for close focus while G1, the aperture stop, and G3 remain stationary. This is consistent with the product's LM inner-focus construction.
6. The patent close-focus row is at 0.100 m from the first surface. Adding the unscaled optical track gives approximately 0.191 m from the image plane, consistent with the manufacturer-published 0.19 m minimum focus distance and 0.2x maximum magnification.
7. The priority date precedes the product launch window by roughly the expected engineering-publication interval for a modern Fujifilm lens.

The other examples in the patent either differ in group content, group power, field angle, or focal length enough that they do not match the XF23mmF1.4 R LM WR specification as closely as Example 7.

## Optical Architecture

The design is a fast APS-C wide-angle prime with a positive-stop-positive-negative group architecture. It is not a strict long-back-focus retrofocus lens: the air-equivalent back focal length is Bf = 14.56 mm, while the EFL is f = 23.62 mm, giving Bf/f = 0.617. The front negative element and the wide-angle ray geometry are still characteristic of an inverted-telephoto family layout adapted to a mirrorless flange distance, but the numerical criterion Bf > f is not met.

G1 has positive net power, f1 = 67.8 mm, and contains L11, a cemented doublet L12-L13, a cemented triplet L14-L15-L16, and L17. It expands and then recollects the front field bundle before the stop. The front negative L11 helps secure the field angle; the cemented groups carry most of the early chromatic correction.

G2 has positive net power, f2 = 35.9 mm, and is the moving inner-focus group. It contains two cemented doublets, L21-L22 and L23-L24, followed by the standalone ED positive L25 and the aspherical positive meniscus L26. The patent's strongest negative lens in G2 is L23, the Ln lens, and the strongest positive lens is L25, the Lp lens. Their ordering is central to the patent's peripheral-light and breathing control logic.

G3 has weak negative net power, f3 = -163.8 mm, and remains stationary. It contains ED positive L31 and aspherical negative L32. This rear pair provides field flattening and residual chromatic correction while holding the back focal distance within the mirrorless range. The independently computed surface-by-surface Petzval sum is 0.004075 mm^-1, corresponding to a Petzval radius of about 245 mm.

## Element-by-Element Analysis

### L11 -- Biconcave Negative, nearly plano-concave

nd = 1.53996, νd = 59.73. Glass: 540597 barium crown, N-BAK2 / S-BAL12 class, vendor uncertain. f = -72.8 mm.

L11 is the weak front negative element. Its object-side radius is very long, R = -887.4776 mm, so most of the element's negative power comes from the rear surface, R = +41.1494 mm. This satisfies the patent's preferred configuration in which the object-side lens of G1 can be a negative lens with a concave surface facing the image side. The glass identification is intentionally cautious: the patent value exactly matches the 540597 barium-crown code more closely than public S-BAL12 data, so the data file records the code and class rather than a single asserted vendor.

### L12 + L13 -- Cemented Doublet, net negative

**L12:** nd = 1.88300, νd = 40.80. Glass: S-LAH58-class lanthanum dense flint. f = 100.9 mm.
**L13:** nd = 1.80809, νd = 22.76. Glass: S-NPH1 / 808-228 short flint. f = -24.1 mm.
**Combined doublet:** f = -30.4 mm.

This cemented doublet is net negative. L12 is a high-index positive meniscus, and L13 is a powerful high-dispersion biconcave negative. The Abbe-number separation at the cemented interface gives the front group strong axial color leverage without introducing an air gap at a high-ray-height location.

### L14 + L15 + L16 -- Cemented Triplet, net positive

**L14:** nd = 1.88300, νd = 40.80. Glass: S-LAH58-class lanthanum dense flint. f = 32.3 mm.
**L15:** nd = 1.59270, νd = 35.31. Glass: S-FTM16. f = -25.6 mm.
**L16:** nd = 1.88300, νd = 40.80. Glass: S-LAH58-class lanthanum dense flint. f = 30.5 mm.
**Combined triplet:** f = 40.0 mm.

The positive-negative-positive cemented triplet contributes much of G1's positive power. The equal-and-opposite central radii, R7 = -30.6142 mm and R8 = +30.6142 mm, form a geometrically balanced internal shape. That symmetry is useful for balancing coma and lateral color while preserving a compact front group.

### L17 -- Biconvex Positive

nd = 1.95906, νd = 17.47. Glass: S-NPH3 / 959-175 short flint. f = 54.3 mm.

L17 closes G1 with a very high-index, very high-dispersion positive element. Its optical role is primarily power and beam steering into the stop. Because it sits near the rear of G1 rather than at the full front pupil diameter, its high dispersion can be used without placing the most chromatically active material at the largest ray heights.

### L21 + L22 -- Cemented Doublet, weak net positive

**L21:** nd = 1.59282, νd = 68.62. Glass: FCD505 ED fluorophosphate crown. f = 26.5 mm.
**L22:** nd = 1.53172, νd = 48.85. Glass: S-TIL6-class light flint. f = -28.0 mm.
**Combined doublet:** f = 156.0 mm.

This doublet opens the moving G2 focus group immediately behind the aperture stop. The net group power is deliberately weak compared with the individual element powers, so the cemented interface is used more for chromatic balancing than for strong net convergence. L21 is one of the three ED elements corresponding to the manufacturer's published special-element count.

### L23 + L24 -- Cemented Doublet, net negative

**L23:** nd = 1.71736, νd = 29.51. Glass: S-TIH1-class dense flint. f = -17.7 mm.
**L24:** nd = 1.69680, νd = 55.53. Glass: S-LAL14 lanthanum crown. f = 45.5 mm.
**Combined doublet:** f = -29.8 mm.

L23 is the Ln lens, the strongest negative lens in G2. The patent explains that placing the strongest negative lens on the object side of the strongest positive lens helps separate the on-axis and off-axis luminous fluxes and suppresses excessive principal-ray incidence at the image plane. L24 then partially cancels L23's power and dispersion while leaving the pair net negative.

The air gap between L22 and L23 is also significant. S15 and S16 are concave lens surfaces facing each other and form the patent's biconvex air lens in G2.

### L25 -- Biconvex Positive, Lp lens

nd = 1.59282, νd = 68.62. Glass: FCD505 ED fluorophosphate crown. f = 23.3 mm.

L25 is the Lp lens, the strongest positive lens in G2. Its two radii are equal and opposite, R19 = +26.3178 mm and R20 = -26.3178 mm, giving a balanced biconvex form. It supplies the main positive power in the moving focus group while also serving as the second FCD505 ED element.

### L26 -- Positive Meniscus, double-sided aspherical

nd = 1.80610, νd = 40.73. Glass: HOYA NBFD13 / M-NBFD130, 806407 code. f = 92.5 mm.

L26 is a positive meniscus with both radii negative, R21 = -47.8136 mm and R22 = -29.8762 mm. It is the rear element of the moving G2 group and has aspherical surfaces on both sides. Its weak positive standalone power means its primary contribution is aberration shaping at the exit of the focus group rather than gross focal power.

### L31 -- Biconvex Positive

nd = 1.59282, νd = 68.62. Glass: FCD505 ED fluorophosphate crown. f = 57.8 mm.

L31 is the third FCD505 ED element and the positive component of the stationary rear group. Because it lies behind the stop, it has useful leverage on off-axis color and residual field behavior while keeping the moving focus mass lower.

### L32 -- Biconcave Negative, double-sided aspherical

nd = 1.68863, νd = 31.20. Glass: M-FD80-class / 689-312 moldable dense flint, patent melt offset. f = -40.8 mm.

L32 is the final powered element and the dominant negative component of G3. Its aspherical surfaces provide field flattening and astigmatism control close to the image plane. The glass label is not an exact public-catalog assertion: public Hoya M-FD80 is nominally 1.68893 / 31.16, while the patent gives 1.68863 / 31.20. The match is close enough for a class identification, but the document should not pretend the public catalog value is exact.

## Glass Identification and Selection

| Element(s) | Patent nd | Patent νd | Catalog/class identification | Status | Optical role |
|---|---:|---:|---|---|---|
| L11 | 1.53996 | 59.73 | 540597 barium crown, N-BAK2 / S-BAL12 class | code/class, vendor uncertain | Front negative collector |
| L12, L14, L16 | 1.88300 | 40.80 | S-LAH58-class lanthanum dense flint | near-exact | High-index positive power in G1 |
| L13 | 1.80809 | 22.76 | S-NPH1 / 808-228 short flint | exact public match | High-dispersion negative in front achromat |
| L15 | 1.59270 | 35.31 | S-FTM16 | exact public match | Flint member of G1 triplet |
| L17 | 1.95906 | 17.47 | S-NPH3 / 959-175 short flint | exact public match | High-index rear G1 positive |
| L21, L25, L31 | 1.59282 | 68.62 | FCD505 ED fluorophosphate crown | exact/near-exact | Three ED elements |
| L22 | 1.53172 | 48.85 | S-TIL6-class light flint | near-exact | G2 achromat partner |
| L23 | 1.71736 | 29.51 | S-TIH1-class dense flint | near-exact | Ln negative lens |
| L24 | 1.69680 | 55.53 | S-LAL14 lanthanum crown | exact public match | Positive partner of L23 |
| L26 | 1.80610 | 40.73 | NBFD13 / M-NBFD130, 806407 code | exact public match | G2 aspherical positive meniscus |
| L32 | 1.68863 | 31.20 | M-FD80-class / 689-312 moldable dense flint | close class match | Rear aspherical negative field flattener |

The chromatic correction is distributed rather than localized. G1 uses high-index dense flints and short flints in cemented groups; G2 uses an ED-containing doublet and a standalone ED Lp lens; and G3 places another ED element immediately before the final negative asphere. This is consistent with a fast wide-angle prime that must control both axial and lateral color while keeping the focusing group light enough for linear-motor drive.

## Focus Mechanism

The patent specifies inner focusing by unit translation of G2. During close focusing, G2 moves toward the object side; G1, the aperture stop, and G3 remain stationary with respect to the image plane. The two variable gaps are DD[12], from the stop to G2, and DD[22], from G2 to G3.

| Focus state | DD[12] St-to-G2 | DD[22] G2-to-G3 | Sum | G2 travel from infinity |
|---|---:|---:|---:|---:|
| Infinity | 7.1000 mm | 1.7500 mm | 8.8500 mm | 0.0000 mm |
| Close, 0.100 m from S1 | 2.3603 mm | 6.4897 mm | 8.8500 mm | 4.7397 mm objectward |

The conserved sum confirms pure translation of the whole G2 focus group. In the scaled data file, the same motion is reduced by the 23/23.6233 scale factor, but the relative kinematics are unchanged.

## Aspherical Surfaces

The patent uses four aspherical surfaces: S21 and S22 on L26, and S25 and S26 on L32. The patent sag equation is:

$$Z_d = \frac{C h^2}{1 + \sqrt{1 - KA C^2 h^2}} + \sum A_m h^m$$

Here C = 1/R. The patent's KA is equivalent to 1 + K in the common conic notation; therefore KA = 1.0000000 corresponds to a spherical base conic, K = 0. All four Example 7 aspheres have KA = 1 and A3 = 0. The patent nevertheless includes odd-order polynomial terms A5, A7, A9, A11, and A13.

| Coefficient | S21 | S22 | S25 | S26 |
|---|---:|---:|---:|---:|
| A4 | -2.5889736E-05 | 3.8776676E-05 | 7.2364942E-06 | -2.7396067E-05 |
| A5 | -1.2982469E-05 | -2.5112083E-05 | 5.0239052E-06 | 3.6746936E-05 |
| A6 | 3.9674529E-06 | 6.3074834E-06 | -2.1832431E-07 | -1.0191898E-05 |
| A7 | -3.3303227E-07 | -3.8211736E-07 | -2.7355498E-07 | 1.1281121E-06 |
| A8 | -3.6339144E-08 | -7.3012005E-08 | 3.9540483E-08 | -5.4977919E-09 |
| A9 | 8.3507781E-09 | 1.1737062E-08 | 1.0727165E-09 | -1.0847982E-08 |
| A10 | -8.8865392E-11 | 5.8414358E-11 | -4.4759311E-10 | 1.0246797E-09 |
| A11 | -6.1824538E-11 | -9.0385482E-11 | 1.2086165E-11 | -1.8775158E-11 |
| A12 | 2.4978937E-12 | 2.8952969E-12 | 1.4154146E-12 | -3.3599052E-12 |
| A13 | 1.5432811E-13 | 2.2843368E-13 | -6.6987628E-14 | 2.7496660E-13 |
| A14 | -8.6065364E-15 | -1.1340132E-14 | 1.6259149E-17 | -6.8934430E-15 |

The data renderer does not support odd-order aspherical terms. The `.data.ts` prescription therefore uses an even-order least-squares refit through A20 after uniform scaling to 23 mm. The fit was performed over the estimated clear semi-diameter of each aspherical surface.

| Surface | Fitted semi-diameter in scaled file (mm) | Max absolute residual (µm) | RMS residual (µm) |
|---|---:|---:|---:|
| 21A | 11.878 | 0.02 | 0.01 |
| 22A | 11.878 | 0.06 | 0.02 |
| 25A | 11.975 | 0.03 | 0.01 |
| 26A | 11.975 | 0.08 | 0.03 |

The residuals are small enough for layout and qualitative ray visualization. They should not be treated as a substitute for the original odd-order patent polynomial in wavefront-accurate optical design work.

## Conditional Expressions

The patent gives eleven conditional-expression values for Example 7 in Table 49. Independent paraxial calculations reproduce all directly paraxial values except the known TTL x FNo / Ymax discrepancy caused by the patent table's internal precision convention.

| No. | Quantity | Independent value | Patent Table 49 |
|---|---:|---:|---:|
| (1) | Bf / f | 0.616 | 0.617 |
| (2) | TTL x FNo / Ymax, using rounded FNo = 1.44 | 8.938 | 9.073 |
| (3) | f / f2 | 0.658 | 0.658 |
| (4) | f / f3 | -0.144 | -0.144 |
| (5) | f1 / f2 | 1.887 | 1.887 |
| (6) | f2 / f2p | 1.542 | 1.542 |
| (7) | StI / LpTI | 2.147 | 2.147 |
| (8) | f2p / f2n | -1.314 | -1.314 |
| (9) | StI / TTL | 0.611 | 0.611 |
| (10) | Breathing expression | 0.019, patent value accepted | 0.019 |
| (11) | (Raf + Rar) / (Raf - Rar) | 0.032 | 0.032 |

For expression (2), the rounded prescription gives TTL = 89.6947 mm and TTL x 1.44 / 14.45 = 8.938. Reproducing the patent's 9.073 with the same rounded TTL and Ymax would require FNo = 1.46168. The discrepancy is therefore documented rather than silently rounded away. Expression (10) depends on focus-group and rear-group magnification and exit pupil position; the table value is recorded as the patent authority.

## Air Lens

The biconvex air lens in G2 is bounded by S15 and S16, the rear surface of L22 and the front surface of L23. The radii are R15 = +19.7263 mm and R16 = -18.5053 mm, separated by a 4.9315 mm air gap. The air-lens shape factor is:

$$(Raf + Rar) / (Raf - Rar) = 0.032$$

This nearly symmetric air lens matches the patent's preferred range for correcting spherical aberration and suppressing the Petzval sum.

## Data-File Scaling and Verification Summary

The `.data.ts` file is scaled to the manufacturer-published 23 mm focal length. The patent prescription itself remains f = 23.623314 mm. The scale factor is:

$$23 / 23.623313748258 = 0.973614465993$$

All radii, axial spacings, semi-diameters, focus-gap values, and asphere polynomial coefficients were scaled consistently. Refractive indices and Abbe numbers were not scaled. Patent cover-glass surfaces 27 and 28 were omitted, and their optical path was folded into the final BFD. The unscaled air-equivalent BFD is:

$$12.4725 + 2.8500 / 1.51680 + 0.2112 = 14.562656\,\text{mm}$$

Independent paraxial verification from the unscaled patent prescription produced:

| Quantity | Independent value | Patent value |
|---|---:|---:|
| System EFL | 23.623314 mm | 23.62 mm |
| Air-equivalent BFD | 14.562656 mm | 14.56 mm |
| Scaled data-file EFL | 23.000000 mm | 23.00 mm target |
| G1 focal length | 67.777 mm | not tabulated |
| G2 focal length | 35.923 mm | not tabulated |
| G3 focal length | -163.750 mm | not tabulated |
| Petzval sum | 0.00407525 mm^-1 | not tabulated |
| Petzval radius | 245.38 mm | not tabulated |

Semi-diameters are not published in the patent. The data file uses ray-envelope-derived estimates constrained by edge thickness, surface slope, and cross-gap sag intrusion. In several rear and inner-focus locations, the full ideal paraxial envelope would violate physical edge or air-gap clearance; the final semi-diameters therefore represent render-safe clear apertures with expected full-field vignetting, not factory mechanical aperture drawings.

## Sources

- US 2022/0276464 A1, "Imaging Lens and Imaging Apparatus," FUJIFILM Corporation. Example 7: Tables 25-28, Figure 14, Figure 15; conditional values in Table 49.
- FUJIFILM Corporation, official specifications for FUJINON XF23mmF1.4 R LM WR. Manufacturer-published values used for production focal length, f-number, element/group count, special-element count, focus range, magnification, aperture blades, dimensions, weight, and filter size.
- OHARA optical glass catalog pages for S-LAH58, S-NPH1/S-NPH3 class, S-FTM16, S-TIL6, S-TIH1, and S-LAL14 matches.
- HOYA optical glass catalog data for FCD505, NBFD13 / M-NBFD130, and M-FD80-class glasses.
- Schott catalog reference for the N-BAK2 / 540-597 barium-crown class used to qualify L11's vendor-uncertain match.
