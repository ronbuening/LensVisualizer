# Laowa 15mm f/2 Zero-D - Patent Decomposition, Example 1

## Patent Reference and Design Identification

The relevant patent is **US 2018/0149842 A1**, titled **"Mirrorless Large-Aperture Ultra Wide-Angle Lens"**, assigned to **Anhui Changgeng Optics Technology Co., Ltd.** with **Xiaohua Zhang** as inventor. The U.S. application was filed on 2017-05-05, published on 2018-05-31, and claims Chinese priority **CN 201611050404.7** from 2016-11-25.[^patent]

This prescription uses **Example 1**, not Example 2. The identification is based on convergence between the patent prescription and production specifications:

1. **Focal length and field.** Example 1 gives $f = 15.5\,\mathrm{mm}$, $F\# = 2.06$, and half-field $\omega = 54.7^\circ$, or about $109.4^\circ$ full field. Production specifications list 15 mm focal length, f/2 maximum aperture, full-frame coverage, and 110° angle of view.[^bh-spec]
2. **Element and group count.** Example 1 contains 12 powered lens elements before a plane-parallel image-side plate. Excluding that plate, the prescription resolves into 12 elements in 9 air-separated groups, matching the production optical design.[^bh-spec]
3. **Special elements.** The production lens is described as using two aspherical elements and three extra-low-dispersion elements.[^bh-special] The patent has four aspherical surfaces, but they are on two elements, L2 and L12. It also has three elements with $n_d = 1.49700$ and $\nu_d = 81.61$, matching FCD1 / N-PK52A / S-FPL51-class ED glass.
4. **Focusing structure.** The patent describes a positive first group Gr1 that remains fixed and a positive second group Gr2 that moves toward the object for focusing.[^patent-claims] The Example 1 variable-spacing table confirms that $D(12)$ decreases and $D(23)$ increases by the same amount.
5. **Product timing.** The patent priority and publication dates are consistent with the commercial appearance of the 15mm f/2 Zero-D in the 2017-2018 period.

The patent does not explicitly name the retail lens. The identification is therefore a technical match between the numerical embodiment and the known production specification, not an express naming statement in the patent.

## Optical Architecture

Example 1 is a compact full-frame mirrorless ultra-wide lens with a **positive-positive patent grouping** that internally contains a strongly negative front wide-angle section. The patent describes two main groups: Gr1 with positive power and Gr2 with positive power. This is formally true, but it can obscure the actual wide-angle behavior. The front half of Gr1, **G1F**, is a strong negative three-element field-expansion section; the rear half, **G1B**, is a positive recovery section. The complete Gr1 is weakly positive only after G1B has partly cancelled G1F's negative power.

The recomputed paraxial group powers are:

| Region | Elements | Role | Recomputed paraxial focal length |
|---|---:|---|---:|
| G1F | L1-L3 | Strong negative front wide-angle compressor | $-12.2199\,\mathrm{mm}$ |
| G1B | L4-L6 | Positive recovery and fixed-group achromatization | $+24.7879\,\mathrm{mm}$ |
| Gr1 | L1-L6 | Fixed first group, weakly positive as a whole | $+218.7696\,\mathrm{mm}$ |
| Gr2 | Stop + L7-L12 | Moving positive rear image-forming group | $+33.8146\,\mathrm{mm}$ |
| Whole system | L1-L12 plus patent cover plate | Complete Example 1 model | $+15.5052\,\mathrm{mm}$ |

The design is not a conventional long-back-focus SLR retrofocus lens, because it is intended for mirrorless cameras and does not need an SLR mirror clearance. It is better described as a **rectilinear ultra-wide mirrorless design with a retrofocus-like negative-positive front assembly**. The front negative group expands the field and controls entrance-bundle geometry; the fixed positive sub-group restores convergence; the moving rear group performs focusing and supplies most of the final image-forming power.

The aperture stop is at patent surface 13, immediately before Gr2. The fixed distance from the stop to L7 in both focus states shows that the stop translates with Gr2 in the patent model. In the data file, the stop is labeled `STO` and is included as part of the moving rear assembly.

The patent also lists a plane-parallel image-side plate at surfaces 24-25 with $n_d = 1.51680$ and $\nu_d = 64.20$. It has no optical power. The data file excludes this plate, following the project convention for sensor/cover glass, and folds its optical path into the final air-equivalent back focus: $15.6837 + 2.0/1.51680 + 1.0000 = 18.0023\,\mathrm{mm}$ at infinity.

## Element-by-Element Analysis

Standalone focal lengths below are in-air paraxial focal lengths computed from each element's base radii and center thickness. They are useful for sign and approximate strength. They are not identical to the element's in-situ contribution inside a cemented assembly or inside the full lens.

### L1 - Negative high-index crown meniscus

$n_d = 1.72916$, $\nu_d = 54.67$. Glass: **TAC8 / S-LAL18 / H-LaK52 class**. Standalone $f = -46.41\,\mathrm{mm}$.

L1 is the large first meniscus. It accepts the very wide oblique field and begins the angular compression needed for a 110° rectilinear image on a full-frame sensor. Its high index permits a strong first surface without forcing an excessive curvature or front diameter.

The Abbe number is crown-like rather than dense-flint-like, so L1 provides high-index bending with moderate chromatic penalty. That is appropriate for a first element that sees large chief-ray angles and strongly influences lateral color.

### L2 - Double-sided aspherical negative meniscus

$n_d = 1.80610$, $\nu_d = 40.73$. Glass: **M-NBFD130 / NBFD13 class**. Standalone $f = -35.11\,\mathrm{mm}$. Aspherical surfaces: **3A and 4A**.

L2 is the first aspherical element and lies in the high-field-angle negative front section. Its role is central to distortion, coma, astigmatism, and entrance-pupil control. The double-sided asphere gives high-order correction close to where the field bundles are most oblique.

The glass code 806-407 corresponds to Hoya's polished NBFD13 class and, in the moldable-glass section, to M-NBFD130.[^hoya-nbfd] That matters because a double-sided asphere in this position is plausibly a molded or precision-formed glass asphere, though the patent does not state the manufacturing process.

### L3 - Negative dense-flint meniscus

$n_d = 1.80518$, $\nu_d = 25.46$. Glass: **FD60 / N-SF6 class**. Standalone $f = -50.34\,\mathrm{mm}$.

L3 completes the three-element negative G1F front section. Its dense-flint dispersion helps balance the front group's chromatic behavior against the higher-Abbe crown-like elements around it. It also contributes to lateral-color and off-axis astigmatism correction because it remains within the front angular compressor.

The recomputed $F_{11} = -12.2199\,\mathrm{mm}$ confirms that L1-L3, not L1-L4, form the patent's G1F front half group. Including L4 in G1F breaks the patent's conditional-expression value.

### L4 - Strong positive high-index biconvex element

$n_d = 1.91082$, $\nu_d = 35.25$. Glass: **TAFD35L / TAFD35 class**. Standalone $f = +28.54\,\mathrm{mm}$.

L4 begins G1B, the positive rear half of the fixed first group. It restores convergence after the front negative section and reduces the burden on the moving rear group. Its very high index allows substantial positive power in a physically compact element.

The element also helps recondition pupil geometry before the stop. In an ultra-wide lens, the front negative section can otherwise push pupil positions and magnifications into a difficult range for f/2 imaging.

### L5 - Negative ED member of the fixed doublet

$n_d = 1.49700$, $\nu_d = 81.61$. Glass: **FCD1 / N-PK52A / S-FPL51 class**. Standalone $f = -22.40\,\mathrm{mm}$.

L5 is the negative ED member in the fixed G1B doublet. Its high Abbe number identifies it as one of the three ED elements corresponding to the production specification. Its negative power and low dispersion are useful for chromatic balancing within the fixed front group.

### L6 - Positive flint member of the fixed doublet

$n_d = 1.62004$, $\nu_d = 36.30$. Glass: **E-F2 / N-F2 class**. Standalone $f = +19.64\,\mathrm{mm}$.

L6 is the positive partner cemented or contacted to L5. The patent table lists coincident surfaces at $R = 16.8442\,\mathrm{mm}$ with zero intervening air, which is paraxially equivalent to a direct glass-to-glass interface. The L5-L6 pair supplies chromatic correction and positive recovery within the fixed first group.

Together, L4-L6 form G1B with recomputed $F_{12} = +24.7879\,\mathrm{mm}$.

### L7 - Negative dense-flint post-stop element

$n_d = 1.80610$, $\nu_d = 33.27$. Glass: **NBFD15 / NBFD15-W class**. Standalone $f = -39.62\,\mathrm{mm}$.

L7 is the first powered element after the aperture stop. Although Gr2 is positive overall, it begins with a negative element. This is a common way to shape the fast post-stop cone before the main positive rear power is applied.

Its position makes it important for balancing spherical aberration, coma, and pupil aberration. It also helps prevent the following cemented triplet from carrying the entire burden of cone shaping.

### L8 - Negative high-index member of the rear triplet

$n_d = 1.90366$, $\nu_d = 31.31$. Glass: **TAFD25 / N-LASF46B class**. Standalone $f = -49.98\,\mathrm{mm}$.

L8 is the first member of the moving rear triplet. Its high index and negative power give the triplet strong aberration-control leverage without a large physical diameter. The corrected cross-reference is N-LASF46B-class, not N-LASF46A-class.[^hoya-tafd]

### L9 - Strong positive ED core of the rear triplet

$n_d = 1.49700$, $\nu_d = 81.61$. Glass: **FCD1 / N-PK52A / S-FPL51 class**. Standalone $f = +14.41\,\mathrm{mm}$.

L9 is the strongest standalone positive element in the system and the second ED element. It is the main positive core of the moving rear triplet. Its ED glass controls axial color while the surrounding high-index negative members control spherical and comatic residuals.

### L10 - Negative high-index rear member of the triplet

$n_d = 1.83481$, $\nu_d = 42.72$. Glass: **TAFD5G class**. Standalone $f = -29.67\,\mathrm{mm}$.

L10 completes the L8-L10 triplet. It is a negative high-index element that balances L9's strong positive power. The short 0.1500 mm air gap behind L10 suggests that the following ED singlet is tightly coupled optically, even though it is not cemented.

### L11 - Positive ED rear-convergence element

$n_d = 1.49700$, $\nu_d = 81.61$. Glass: **FCD1 / N-PK52A / S-FPL51 class**. Standalone $f = +28.38\,\mathrm{mm}$.

L11 is the third ED element and the second positive ED element in Gr2. Its rearward placement gives it leverage over axial color, rear convergence, and field behavior close to the image plane. It also reduces the correction burden on the final aspherical meniscus.

### L12 - Double-sided aspherical rear negative meniscus

$n_d = 1.58313$, $\nu_d = 59.46$. Glass: **M-BACD12 / L-BAL42 / D-ZK2 class**. Standalone $f = -91.42\,\mathrm{mm}$. Aspherical surfaces: **22A and 23A**.

L12 is the second aspherical element. Its base power is weakly negative, but its location near the image side makes it effective for final trimming of distortion, field curvature, and astigmatism. The updated glass label uses Hoya M-BACD12 as the primary catalog match, with L-BAL42 and D-ZK2 as cross-vendor equivalents.[^hoya-mbacd]

This element is the last production lens element in the data file. The plane-parallel plate behind it is not counted as a production element and is not included as a data-file glass surface.

## Glass Identification and Selection

The patent gives only $n_d$ and $\nu_d$ values, not supplier names. The glass names below are therefore catalog-class matches, not proof of actual procurement from a particular manufacturer. Hoya codes are emphasized because many patent constants match Hoya six-digit codes closely, and Hoya publishes cross-vendor equivalents. Hoya cautions that identical or nearly identical six-digit codes do not necessarily imply identical glass composition.[^hoya-crossref]

| Element(s) | Patent $n_d$ | Patent $\nu_d$ | Catalog-class match | Function |
|---|---:|---:|---|---|
| L1 | 1.72916 | 54.67 | TAC8 / S-LAL18 / H-LaK52 class | High-index front crown-like meniscus |
| L2 | 1.80610 | 40.73 | M-NBFD130 / NBFD13 class | Double-sided front aspherical negative element |
| L3 | 1.80518 | 25.46 | FD60 / N-SF6 class | Dense-flint member in G1F |
| L4 | 1.91082 | 35.25 | TAFD35L / TAFD35 class | Strong positive recovery element |
| L5, L9, L11 | 1.49700 | 81.61 | FCD1 / N-PK52A / S-FPL51 class | Three ED elements |
| L6 | 1.62004 | 36.30 | E-F2 / N-F2 class | Positive flint doublet partner |
| L7 | 1.80610 | 33.27 | NBFD15 / NBFD15-W class | Post-stop negative cone shaper |
| L8 | 1.90366 | 31.31 | TAFD25 / N-LASF46B class | Negative member of rear triplet |
| L10 | 1.83481 | 42.72 | TAFD5G class | Negative rear triplet corrector |
| L12 | 1.58313 | 59.46 | M-BACD12 / L-BAL42 / D-ZK2 class | Weak rear aspherical meniscus |
| Patent plate | 1.51680 | 64.20 | BSC7 / N-BK7 class | Plane-parallel image-side plate, excluded from data file |

The chromatic strategy is distributed rather than localized. One ED element is in the fixed front recovery doublet, and two ED elements are in the moving rear group. That split is significant: the fixed front group receives chromatic correction before the stop, while the moving focus group carries its own low-dispersion correction so axial color does not become wholly focus-position dependent.

The design should be called **well achromatized using ED glass**, not apochromatic. The patent does not publish partial-dispersion values, and the production literature does not claim APO correction.

## Focus Mechanism

The patent defines a rear/inner focusing mechanism: **Gr1 remains fixed**, while **Gr2 moves toward the object** as the object distance decreases.[^patent-claims] In Example 1, Gr2 includes the aperture stop plus L7-L12.

| Variable spacing | Infinity | Patent 0.020x state | Change |
|---|---:|---:|---:|
| $D(12)$, gap after fixed Gr1 | 3.4480 mm | 3.1500 mm | -0.2980 mm |
| Physical $D(23)$, gap after L12 before patent plate | 15.6837 mm | 15.9816 mm | +0.2979 mm |
| $D(25)$, plate-to-image distance | 1.0000 mm | 1.0000 mm | 0.0000 mm |
| Data-file air-equivalent BF | 18.0023 mm | 18.3002 mm | +0.2979 mm |

The equal-and-opposite changes mean that the stop-plus-Gr2 assembly translates objectward by approximately 0.298 mm at the patent's 0.020x state. The data file models this published patent interval. It does **not** extrapolate to the production lens's 15 cm / 0.25x close-focus specification, because the patent does not publish the full production close-focus spacing and a simple extrapolation would overrun the fixed Gr1-to-Gr2 clearance.

The production lens is manual focus, with no optical image stabilization and a 72 mm front filter thread.[^bh-spec]

## Aspherical Surfaces

Example 1 contains four aspherical surfaces on two elements:

- **3A and 4A** on L2, the front negative aspherical element.
- **22A and 23A** on L12, the rear weak negative aspherical element.

This reconciles the patent prescription with the production description of two aspherical elements. The official Laowa leaflet for the FFII 15mm F2.0 D-Dreamer describes a 12-elements/9-groups design with two aspherical elements and three ED elements.[^laowa-leaflet]

The patent uses the standard conic-constant form:

$$
z = \frac{(1/r)y^2}{1 + \sqrt{1 - (1 + K)(y/r)^2}} + A_4y^4 + A_6y^6 + A_8y^8 + A_{10}y^{10} + A_{12}y^{12}.
$$

Because the square-root term is written as $1-(1+K)(y/r)^2$, the tabulated **K** is the standard conic constant. No Japanese-style $\kappa \rightarrow K=\kappa-1$ conversion is applied.[^patent-asphere]

| Surface | Element | K | A4 | A6 | A8 | A10 | A12 |
|---|---|---:|---:|---:|---:|---:|---:|
| 3A | L2 front | -1.3707 | -1.17922e-005 | -2.42926e-008 | 1.19122e-010 | -4.63418e-013 | 4.68088e-016 |
| 4A | L2 rear | 0.2535 | -2.62577e-005 | -1.64819e-007 | 4.27783e-010 | -2.38377e-012 | 4.58404e-015 |
| 22A | L12 front | 1.1397 | 2.80111e-005 | 1.12817e-007 | -9.53129e-009 | 2.83332e-011 | 0.00000e+000 |
| 23A | L12 rear | -6.2261 | -3.98955e-005 | 1.56517e-006 | -1.18499e-008 | 4.20888e-011 | -6.35520e-014 |

The front pair works where the field angles are largest and where distortion, coma, and astigmatism are most strongly generated. The rear pair works near the image plane, where small shape changes can efficiently trim residual distortion, astigmatism, and field curvature.

The patent does not publish clear semi-diameters for the aspherical surfaces. The data file therefore uses inferred render semi-diameters constrained by conic limit, rim slope, edge thickness, and cross-gap sag intrusion, but this analysis does not quote rim departures as patent facts.

## Conditional Expressions and Paraxial Verification

A fresh paraxial ray trace was run from the Example 1 prescription using a $y, n u$ transfer convention. The zero-thickness duplicate surface between L5 and L6 was condensed into a single glass-to-glass interface. This is paraxially equivalent to the patent's coincident-surface representation.

| Quantity | Patent / condition value | Recomputed value | Comment |
|---|---:|---:|---|
| Whole-system EFL | 15.5000 mm | 15.5052 mm | Within prescription rounding tolerance |
| $F_1/F_2$ | 6.469 | 6.4697 | Satisfies condition (1) |
| $\lvert F_{11}\rvert/F$ | 0.788 | 0.7881 | Confirms G1F = L1-L3 |
| $F_{12}/F$ | 1.599 | 1.5987 | Confirms G1B = L4-L6 |
| $BF/F_2$ | 0.553 | 0.5525 | Uses physical BF from L12 rear surface to image through the patent plate |
| Gr2 focus shift | Published by gaps | 0.2980 mm objectward | Derived from $D(12)$ and $D(23)$ |
| Petzval sum before plate | Not stated | $+0.006738\,\mathrm{mm}^{-1}$ | Surface-by-surface $\sum \Phi/(nn')$ |
| Petzval curvature radius | Not stated | $-148.4\,\mathrm{mm}$ | Sign follows the computation convention |

The conditional-expression check corrects a common possible drawing misread: **G1F is L1-L3**, not L1-L4. If L4 is incorrectly included in G1F, the recomputed $\lvert F_{11}\rvert/F$ no longer matches the patent's summary table.

The $BF/F_2$ condition requires care. The value matches the patent only when BF is measured physically from the rear surface of L12 to the image plane, including the 2.0 mm plane-parallel plate and the 1.0 mm final image gap. The data file uses an air-equivalent BF after omitting the plate; this is a renderer/data-model convention, not a change to the patent optical calculation.

## Sources

[^patent]: US Patent Application Publication US 2018/0149842 A1, "Mirrorless Large-Aperture Ultra Wide-Angle Lens," Anhui Changgeng Optics Technology Co., Ltd.; inventor Xiaohua Zhang; filed 2017-05-05; published 2018-05-31; priority CN 201611050404.7. Attached patent PDF and Google Patents: https://patents.google.com/patent/US20180149842A1/en

[^patent-claims]: US 2018/0149842 A1, description and conditional expressions: Gr1 and Gr2 positive; Gr1 fixed and Gr2 objectward for focus; conditions (1)-(4). Google Patents: https://patents.google.com/patent/US20180149842A1/en

[^patent-asphere]: US 2018/0149842 A1, aspherical surface definition and equation following Example 1 variable spacing table. Attached patent PDF and Google Patents: https://patents.google.com/patent/US20180149842A1/en

[^laowa-leaflet]: Laowa, "FFII 15mm F2.0 D-Dreamer" official product PDF/leaflet, listing full-frame 110° field, 12 elements in 9 groups, two aspherical elements, and three extra-low-dispersion elements. https://www.laowalens.com/Ftp/FF%2015mm%20F2.0%20D-Dreamer.pdf

[^bh-spec]: [B&H Photo Video, "Laowa 15mm f/2 FE Zero-D Lens for Sony E,"](https://www.bhphotovideo.com/c/product/1357085-REG/venus_optics_ve1520sfe_15mm_f_2_0_fe_zero_d.html) specifications: 15 mm, f/2-f/22, full-frame, 110° angle of view, 15 cm minimum focus, 1:4 reproduction, 12 elements in 9 groups, manual focus, no stabilization, and 72 mm front filter thread.

[^bh-special]: [B&H Photo Video product description](https://www.bhphotovideo.com/c/product/1357085-REG/venus_optics_ve1520sfe_15mm_f_2_0_fe_zero_d.html), noting three extra-low-dispersion elements and two aspherical elements in the optical construction.

[^hoya-crossref]: Hoya Optics Division, "Glass Cross Reference Index," explaining six-digit glass codes and warning that equivalent codes do not necessarily imply identical composition. https://www.hoya-opticalworld.com/english/products/crossreference.html

[^hoya-nbfd]: Hoya Optics Division, "Glass Cross Reference Index," NBFD13 806-407 and M-NBFD130 806-407 entries. https://www.hoya-opticalworld.com/english/products/crossreference.html

[^hoya-tafd]: Hoya Optics Division, "Glass Cross Reference Index," TAFD5G 835-427, TAFD25 904-313 / N-LASF46B, and TAFD35L 911-353 entries. https://www.hoya-opticalworld.com/english/products/crossreference.html

[^hoya-mbacd]: Hoya Optics Division, "Glass Cross Reference Index," M-BACD12 583-595 with L-BAL42 and D-ZK2 cross-reference entries. https://www.hoya-opticalworld.com/english/products/crossreference.html
