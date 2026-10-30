# Canon EF 24-70mm f/2.8L II USM — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** US 8,736,971 B2  
**Title:** Zoom Lens and Image Pickup Apparatus Including the Same  
**Filed:** January 31, 2013  
**Priority:** February 6, 2012, JP 2012-023338  
**Granted:** May 27, 2014  
**Inventor:** Takahiro Hatada  
**Assignee:** Canon Kabushiki Kaisha  
**Example details:** Numerical Example 3; source tables PDF pp. 19–20 (printed cols. 12–13), FIG. 5 on PDF p. 8 (sheet 7)

Numerical Example 3 is the strongest match in this patent for the Canon EF 24-70mm f/2.8L II USM. The patent example is not a production service prescription, but the correspondence is close enough that it is useful as a design-family decomposition.

The identification rests on the following convergent evidence.

1. The patent example contains 18 glass elements in 13 air-spaced groups. Canon's published specification for the EF 24-70mm f/2.8L II USM also gives 18 elements in 13 groups.
2. The patent prescription contains three aspherical elements: L4 with one aspherical surface, L12 with one aspherical surface, and L16 with two aspherical surfaces. Canon's product specification identifies three aspherical elements.
3. The patent prescription contains one very-low-dispersion element with $n_d=1.43875$, $\nu_d=94.9$ and two elements with $n_d=1.49700$, $\nu_d=81.5$. These correspond naturally to Canon's public description of one Super UD element and two UD elements.
4. The patent design covers 24.70-67.88 mm at F/2.91. The production lens is marketed as a 24-70 mm f/2.8 zoom. The wide-end patent half-field angle is $41.22^\circ$, giving an $82.44^\circ$ diagonal field, close to Canon's published $84^\circ$ value for the production lens.
5. The patent image height is 21.64 mm, i.e. a 43.28 mm image circle diameter. That is the nominal diagonal of the 36 × 24 mm full-frame format.
6. FIG. 5 and Numerical Example 3 use a four-unit positive-negative-positive-positive zoom layout without an image-stabilization group. The production EF 24-70mm f/2.8L II USM is a non-IS Canon EF lens.
7. The patent states that focusing is performed by moving the second lens unit. Canon describes the production lens as an inner-focusing, ring-USM design.
8. The Japanese priority date, February 6, 2012, falls at the same time as Canon's public announcement of the production lens.

Numerical Example 2 is less plausible for this production lens because it uses a five-unit layout with a fourth unit described for image stabilization. Numerical Examples 1 and 3 are the non-stabilized candidates. Numerical Example 3 is used here because its element count, special-glass distribution, FIG. 5 layout, and conditional-expression table align most cleanly with the production lens specification.

## Optical Architecture

The design is a four-unit standard zoom with a positive-negative-positive-positive power sequence. At the wide end it is retrofocus-biased: the patent effective focal length is 24.70 mm while the back focal distance is 38.08 mm, giving $\mathrm{BFD}/f \approx 1.54$. This is the expected arrangement for a fast wide-to-normal SLR zoom that must clear the Canon EF mirror box.

| Unit   | Surfaces | Elements |    Power | Focal length | Principal role                                              |
| ------ | -------: | -------: | -------: | -----------: | ----------------------------------------------------------- |
| Unit 1 |      1-5 |    L1-L3 | Positive |   +105.87 mm | Front collector and first-order wide-end retrofocus control |
| Unit 2 |     6-15 |    L4-L9 | Negative |    -16.39 mm | Variator and inner-focus group                              |
| Unit 3 |    16-24 |  L10-L13 | Positive |    +58.01 mm | Stop-side imaging group and primary relay                   |
| Unit 4 |    25-33 |  L14-L18 | Positive |    +46.14 mm | Rear relay, field correction, and chromatic cleanup         |

During zooming from the wide-angle end to the telephoto end, all four units move toward the object side. The L1-L2 spacing increases from 2.75 mm to 30.30 mm, the L2-L3 spacing decreases from 13.76 mm to 0.23 mm, and the L3-L4 spacing decreases from 8.79 mm to 0.74 mm. The aperture stop moves with Unit 3. This is the kinematic pattern described in the patent for the first and third embodiments.

The strongest unit is the second unit. Its focal length of -16.39 mm is about 0.66 times the wide-end focal length in magnitude, so it carries most of the zoom variation and also determines much of the wide-end aberration burden. The surrounding positive units do not merely relay the image; they correct the field curvature, lateral color, spherical aberration, and astigmatism that such a strong negative variator introduces.

## Element-by-Element Analysis

### Unit 1 — Front collector and compensator

#### L1 — Negative meniscus, convex to object

$n_d=1.84666$, $\nu_d=23.9$. Glass: S-TIH53 (qualified spectral proxy; historical supplier and melt unspecified). Standalone $f=-132.5$ mm.

L1 is the high-index, high-dispersion negative member of the front cemented doublet. Its high refractive index keeps curvature from becoming excessive at the large front aperture, while its low Abbe number gives the doublet chromatic leverage against L2. As the first element, it also contributes to the large physical front diameter required by a 24 mm f/2.8 full-frame zoom with an 82 mm filter thread.

#### L2 — Positive meniscus, convex to object

$n_d=1.77250$, $\nu_d=49.6$. Glass: S-LAH66 (qualified spectral proxy; historical supplier and melt unspecified). Standalone $f=+117.7$ mm.

L2 is the positive partner of L1 in the first cemented doublet. The pair has a very weak positive combined focal length, about +1197 mm, so its purpose is not strong net power. It functions primarily as a front aberration compensator, distributing chromatic and spherical correction before the stronger positive L3.

S-LAH66 is not classified here as an ordinary crown glass. With $\nu_d=49.6$, it sits on the flint side of the usual crown/flint division, despite its lanthanum naming convention.

#### L3 — Positive meniscus, convex to object

$n_d=1.77250$, $\nu_d=49.6$. Glass: S-LAH66 (qualified spectral proxy; historical supplier and melt unspecified). Standalone $f=+114.3$ mm.

L3 is the main positive-power contributor in Unit 1. Its meniscus form helps maintain oblique-ray incidence angles at a workable level while giving the first unit enough positive power to keep the total lens length under control. It also prepares the ray bundle for the strong negative Unit 2 that follows.

### Unit 2 — Negative variator and inner-focus group

Unit 2 contains six elements in four components: an aspherical negative meniscus, a negative-positive cemented doublet, a positive singlet, and a negative-positive cemented doublet. It is both the zoom variator and the focusing group.

#### L4 — Negative meniscus with one aspherical surface

$n_d=1.88300$, $\nu_d=40.8$. Glass: S-LAH58 (qualified spectral proxy; historical supplier and melt unspecified). Standalone $f=-22.3$ mm.

L4 is the first and strongest single negative element in the variator. Its front surface, S6A, is aspherical. Because this element is near the front of the negative unit and sees substantial aperture height, it is well placed to correct the spherical aberration and coma generated by the wide-end retrofocus expansion.

The source index of 1.88300 is important. A lower-index glass would require stronger surface curvatures to obtain the same negative power, increasing aberration sensitivity and making the large-aperture f/2.8 design harder to stabilize across zoom.

#### L5 — Biconcave negative element, cemented to L6

$n_d=1.59522$, $\nu_d=67.7$. Glass: S-FPM2 (qualified spectral proxy; historical supplier and melt unspecified). Standalone $f=-24.5$ mm.

L5 is the negative member of the key Unit 2 cemented doublet. The patent's chromatic-correction logic centers on this component: the negative member is selected so that its partial-dispersion deviation satisfies Conditional Expression (3). This helps reduce secondary-spectrum lateral chromatic aberration as the off-axis ray height changes during zooming.

The low dispersion of L5 is unusual for such a strong negative component. It allows the cemented interface with L6 to participate in spherical and chromatic correction without making the secondary spectrum unmanageable.

#### L6 — Positive meniscus, cemented to L5

$n_d=1.88300$, $\nu_d=40.8$. Glass: S-LAH58 (qualified spectral proxy; historical supplier and melt unspecified). Standalone $f=+34.4$ mm.

L6 is the high-index positive member of the L5-L6 cemented doublet. The refractive-index ratio $N_{dp}/N_{dn}=1.88300/1.59522=1.180$ satisfies the patent's Conditional Expression (2). The large index step at the cemented surface is the patent's stated mechanism for generating negative spherical aberration that offsets positive spherical aberration from the strong negative second unit.

The L5-L6 cemented doublet has a combined focal length of about -79.2 mm. It is therefore a controlled negative component rather than a neutral achromat.

#### L7 — Biconvex positive element

$n_d=1.59270$, $\nu_d=35.3$. Glass: S-FTM16 (qualified spectral proxy; historical supplier and melt unspecified). Standalone $f=+60.8$ mm.

L7 is the positive component designated $l_p$ by the patent. It sits immediately behind the L5-L6 cemented doublet. The patent uses this component to moderate the Petzval sum of Unit 2, which would otherwise become strongly negative because of the high-index, high-power cemented pair.

The refractive index $N_{dlp}=1.59270$ satisfies Conditional Expression (5), and the focal-length ratio $|f_{lp}/f_2|=3.71$ satisfies Conditional Expression (7). Those two conditions describe L7's purpose more clearly than its shape alone: it is not just a power-balancing positive lens, but a field-curvature control element inside the variator.

#### L8 — Biconcave negative element, cemented to L9

$n_d=1.72916$, $\nu_d=54.7$. Glass: S-LAL18 (qualified spectral proxy; historical supplier and melt unspecified). Standalone $f=-30.5$ mm.

L8 begins the rear cemented doublet of Unit 2. It supplies additional negative power and helps shape the off-axis ray bundle before the stop-side groups. Its medium-high refractive index allows useful negative power without the extreme curvature of L5.

#### L9 — Biconvex positive element, cemented to L8

$n_d=1.84666$, $\nu_d=23.9$. Glass: S-TIH53 (qualified spectral proxy; historical supplier and melt unspecified). Standalone $f=+60.1$ mm.

L9 is the dense-flint positive member of the L8-L9 doublet. The Abbe-number difference between L8 and L9 is large enough to make this pair an important local chromatic corrector. The pair's combined focal length is about -66.3 mm, so it closes Unit 2 as a negative achromatized sub-unit.

### Unit 3 — Stop-side primary imaging group

The aperture stop is placed at the front of Unit 3. Surface 16 is a flat air spacing surface, and surface 17 is the stop. The stop moves together with Unit 3 during zooming.

#### L10 — Negative meniscus, cemented to L11

$n_d=1.88300$, $\nu_d=40.8$. Glass: S-LAH58 (qualified spectral proxy; historical supplier and melt unspecified). Standalone $f=-118.3$ mm.

L10 is a weak negative member immediately behind the stop. Its high index gives the L10-L11 cemented interface strong chromatic leverage, while its weak standalone focal length prevents it from overloading the stop region with negative power.

#### L11 — Biconvex positive UD-class element, cemented to L10

$n_d=1.49700$, $\nu_d=81.5$. Glass: S-FPL51 (qualified spectral proxy; historical supplier and melt unspecified). Standalone $f=+33.8$ mm.

L11 is a thick, strong, low-dispersion positive element near the aperture stop. Its position makes it highly effective for axial chromatic correction and spherical-aberration control. The L10-L11 cemented doublet has a combined focal length of about +48.0 mm, making it the central positive component of Unit 3.

#### L12 — Positive meniscus with rear aspherical surface

$n_d=1.58313$, $\nu_d=59.4$. Glass: S-BAL42 (qualified spectral proxy; historical supplier and melt unspecified). Standalone $f=+220.2$ mm.

L12 is a weak positive element whose rear surface, S22A, is aspherical. Its weak power indicates that it functions chiefly as an aberration corrector rather than a major contributor to focal length. Its placement behind the stop-side doublet gives it useful leverage over residual spherical aberration, coma, and astigmatism.

#### L13 — Negative meniscus, concave to object

$n_d=1.72047$, $\nu_d=34.7$. Glass: N-KZFS8 (qualified spectral proxy; historical supplier and melt unspecified). Standalone $f=-89.3$ mm.

L13 closes Unit 3 as a negative field-correction element. Its source low-Abbe coordinate and negative power help balance residual lateral color after the low-dispersion positive L11; the compatible N-KZFS8 curve does not establish niobium chemistry in the patent element. Its negative power also offsets the positive Petzval contribution of the preceding positive elements.

### Unit 4 — Rear relay and field corrector

Unit 4 contains the Super-UD element, the second UD-class element, the doubly aspherical negative element, and the final cemented doublet. It provides the final positive relay power and most of the late-stage field and chromatic cleanup.

#### L14 — Biconvex positive Super-UD-class element

$n_d=1.43875$, $\nu_d=94.9$. Glass: S-FPL53 (qualified spectral proxy; historical supplier and melt unspecified). Standalone $f=+62.4$ mm.

L14 is the lowest-dispersion glass in the prescription. It is the natural candidate for Canon's single Super UD element. Its positive power in the rear relay lets the design recover converging power without adding much primary chromatic aberration.

#### L15 — Biconvex positive UD-class element

$n_d=1.49700$, $\nu_d=81.5$. Glass: S-FPL51 (qualified spectral proxy; historical supplier and melt unspecified). Standalone $f=+58.1$ mm.

L15 supplies additional low-dispersion positive relay power. Together, L14 and L15 form a low-dispersion positive pair at the front of Unit 4. This is a direct response to the chromatic burden imposed by the strong negative variator.

#### L16 — Biconcave negative element with two aspherical surfaces

$n_d=1.85006$, $\nu_d=40.2$. Glass: M-TAFD305 (HOYA spectral proxy; historical material, supplier and forming process unresolved). Standalone $f=-71.5$ mm.

L16 is a doubly aspherical negative element. Both its front surface S29A and rear surface S30A are aspherical. Its position near the rear relay gives it strong control over field curvature, astigmatism, and distortion at the edge of the full-frame image circle.

The historical material and forming process remain unresolved. The current M-TAFD305 catalog curve is a compatible approximate spectral proxy, with catalog nd 1.851348 versus source 1.85006 (about +0.00129) and Abbe number about 40.10 versus 40.2. The source d index stays literal. This proxy does not establish HOYA supply, melt identity or precision molding; the presence of two aspheres is not manufacturing evidence.

#### L17 — Biconcave negative element, cemented to L18

$n_d=1.83400$, $\nu_d=37.2$. Glass: S-LAH60 (qualified spectral proxy; historical supplier and melt unspecified). Standalone $f=-63.3$ mm.

L17 is the negative member of the final cemented doublet. Its role is mainly corrective: it supplies negative field curvature and chromatic balancing after the strong positive ED relay elements.

#### L18 — Biconvex positive element, cemented to L17

$n_d=1.51633$, $\nu_d=64.1$. Glass: S-BSL7 (qualified spectral proxy; historical supplier and melt unspecified). Standalone $f=+58.7$ mm.

L18 is the final optical element before the image plane. The L17-L18 pair has a very weak combined focal length, about +579 mm, so the pair is best understood as a final chromatic and field-correction doublet rather than a primary power group.

## Glass Identification and Selection

The source identifies its indices and Abbe numbers with respect to the d-line (PDF p. 18, printed cols. 9–10). Its earlier dispersion definitions print rounded g/F/d/C wavelengths of 436/486/588/656 nm (PDF p. 16). All 18 source pairs are retained, and all 18 existing compatible curves remain qualified spectral proxies with unchanged curve selections. The modern catalog names below do not identify historical supplier, melt, chemistry or forming process; L16 remains explicitly unidentified despite its approximate M-TAFD305 curve.

| Element(s)  | Glass identification                                         |   $n_d$ | $\nu_d$ | Design role                                           |
| ----------- | ------------------------------------------------------------ | ------: | ------: | ----------------------------------------------------- |
| L1, L9      | S-TIH53 (OHARA)                                              | 1.84666 |    23.9 | Dense-flint achromatizing partner                     |
| L2, L3      | S-LAH66 (OHARA)                                              | 1.77250 |    49.6 | High-index lanthanum flint, front positive power      |
| L4, L6, L10 | S-LAH58 (OHARA)                                              | 1.88300 |    40.8 | Highest-index dense lanthanum flint in the design     |
| L5          | S-FPM2 (OHARA)                                               | 1.59522 |    67.7 | Anomalous low-dispersion negative component in Unit 2 |
| L7          | S-FTM16 (OHARA)                                              | 1.59270 |    35.3 | Positive Petzval-control component $l_p$              |
| L8          | S-LAL18 (OHARA)                                              | 1.72916 |    54.7 | Rear Unit 2 negative doublet member                   |
| L11, L15    | S-FPL51 (OHARA)                                              | 1.49700 |    81.5 | UD-class ED positive elements                         |
| L12         | S-BAL42 (OHARA)                                              | 1.58313 |    59.4 | Weak aspherical barium-crown corrector                |
| L13         | N-KZFS8 / S-NBH8 equivalent                                  | 1.72047 |    34.7 | KZFS-family field and lateral-color corrector         |
| L14         | S-FPL53 (OHARA)                                              | 1.43875 |    94.9 | Super-UD-class ED relay element                       |
| L16         | M-TAFD305 approximate proxy; historical material unresolved | 1.85006 |    40.2 | High-index doubly aspherical rear corrector           |
| L17         | S-LAH60 (OHARA)                                              | 1.83400 |    37.2 | Dense lanthanum flint in final doublet                |
| L18         | S-BSL7 (OHARA)                                               | 1.51633 |    64.1 | Borosilicate crown in final doublet                   |

The chromatic strategy is distributed. Primary C-F correction is handled by five cemented doublets: L1-L2, L5-L6, L8-L9, L10-L11, and L17-L18. Secondary-spectrum and lateral-color correction are handled by the anomalous and low-dispersion glasses: S-FPM2 in the second unit, S-FPL51 and S-FPL53 in the rear positive units, and N-KZFS8 / S-NBH8-equivalent glass in Unit 3.

The source genuinely supplies additional spectral evidence for the L5–L6 pair: Table 1, Numerical Example 3 (PDF p. 20), gives deviations +0.014 and −0.009 from the normal line 0.6438−0.001682νd defined in Conditional Expressions (3)/(4). Those are the retained per-lens `dPgF` values and patent APD annotations. They are source values, not catalog-derived overrides. No individual nC/nF/ng value is printed or authored, and no other per-lens spectral override is added. OHARA PBM2/NSL7 are normal-line reference examples in the patent, not supplier identification for these elements.

The most important patent-specific spectral constraints concern the L5-L6 pair in Unit 2. Conditional Expression (2) requires a large positive-to-negative index ratio at the cemented interface, while Conditional Expressions (3) and (4) constrain the partial-dispersion deviations of the negative and positive members. This is the mechanism the patent uses to keep a strong negative variator from producing excessive chromatic spherical aberration and lateral color variation during zooming.

## Focus Mechanism

The patent states that focusing is performed by moving the second lens unit in the optical-axis direction. In this prescription, that means L4-L9 move as one inner-focus group. The front Unit 1, stop-side Unit 3, rear Unit 4, and image plane remain fixed in the simplified focus model.

The patent does not publish close-focus variable-spacing tables for Numerical Example 3. The data file therefore uses patent infinity-focus zoom spacings and paraxially infers close-focus spacings from Canon's official 0.38 m minimum focus distance. The inferred model moves Unit 2 objectward at close focus, which reduces the L1-L2 spacing and increases the L2-L3 spacing while preserving total track length.

| Zoom position | D5 infinity | D5 inferred at 0.38 m | D15 infinity | D15 inferred at 0.38 m | Computed magnification |
| ------------: | ----------: | --------------------: | -----------: | ---------------------: | ---------------------: |
|      24.70 mm |     2.75 mm |              0.797 mm |     13.76 mm |              15.713 mm |                 0.091× |
|      34.93 mm |    11.72 mm |              9.321 mm |      7.73 mm |              10.129 mm |                 0.123× |
|      67.88 mm |    30.30 mm |             26.293 mm |      0.23 mm |               4.237 mm |                 0.207× |

The telephoto close-focus magnification, about 0.207× in the paraxial model, is consistent with Canon's published maximum magnification of 0.21×. The agreement supports the objectward close-focus direction: close focusing is not modeled by increasing D5. It is modeled by shifting the negative second unit toward the object side, decreasing D5 and increasing D15.

## Aspherical Surfaces

The patent uses the standard even-order aspheric sag form:

$$
X(h)=\frac{h^2/R}{1+\sqrt{1-(1+K)(h/R)^2}}+A_4h^4+A_6h^6+A_8h^8+A_{10}h^{10}+A_{12}h^{12}.
$$

For Numerical Example 3, all four aspherical surfaces have $K=0$, so each has a spherical base conic. The polynomial terms provide departure from that spherical base. The data file labels the aspherical surfaces S6A, S22A, S29A, and S30A.

### Surface S6A — front surface of L4

| Coefficient |                    Value |
| ----------- | -----------------------: |
| $K$         |                        0 |
| $A_4$       |  $+7.24687\times10^{-6}$ |
| $A_6$       |  $-9.33789\times10^{-9}$ |
| $A_8$       | $+2.38226\times10^{-11}$ |
| $A_{10}$    | $-5.23831\times10^{-14}$ |
| $A_{12}$    | $+8.03521\times10^{-17}$ |

S6A is the front surface of the first element in the negative variator. At the inferred clear semi-diameter of 16.8 mm, the polynomial departure relative to the spherical base is about +0.465 mm. Because this surface is early in the strong negative unit, it is the principal aspherical control point for wide-end spherical aberration and coma.

### Surface S22A — rear surface of L12

| Coefficient |                    Value |
| ----------- | -----------------------: |
| $K$         |                        0 |
| $A_4$       |  $+5.45182\times10^{-6}$ |
| $A_6$       |  $+4.70739\times10^{-9}$ |
| $A_8$       | $+2.06430\times10^{-13}$ |
| $A_{10}$    | $+7.16170\times10^{-14}$ |
| $A_{12}$    | $-2.30646\times10^{-17}$ |

S22A is on a weak positive element behind the stop-side doublet. At the estimated semi-diameter of 14.1 mm, the departure is about +0.274 mm. Its position makes it more useful for residual oblique-aberration correction than for gross power generation.

### Surface S29A — front surface of L16

| Coefficient |                    Value |
| ----------- | -----------------------: |
| $K$         |                        0 |
| $A_4$       |  $+2.73159\times10^{-5}$ |
| $A_6$       |  $-1.56554\times10^{-7}$ |
| $A_8$       | $+4.00484\times10^{-10}$ |
| $A_{10}$    | $-7.50876\times10^{-13}$ |
| $A_{12}$    | $+7.01430\times10^{-16}$ |

S29A is the front surface of the rear doubly aspherical negative element. At the inferred semi-diameter of 14.8 mm, its net polynomial departure is about +0.286 mm. The alternating higher-order terms show that this surface is being used for controlled higher-order shaping rather than simple low-order bending.

### Surface S30A — rear surface of L16

| Coefficient |                    Value |
| ----------- | -----------------------: |
| $K$         |                        0 |
| $A_4$       |  $+4.42990\times10^{-5}$ |
| $A_6$       |  $-1.33910\times10^{-7}$ |
| $A_8$       | $+3.22402\times10^{-10}$ |
| $A_{10}$    | $-4.40140\times10^{-13}$ |
| $A_{12}$    | $+2.46872\times10^{-16}$ |

S30A has the largest net aspherical departure in the design. At the estimated semi-diameter of 14.2 mm, its departure is about +1.106 mm. This confirms L16 as a major rear field-correction element. The source does not identify this element's forming process; its approximate moldable-family catalog proxy does not establish historical molding.

## Conditional Expressions

The patent gives seven principal conditions. The transcribed prescription satisfies all of them. Differences between its independently printed numerical tables remain qualified source discrepancies; no source R/d is tuned to force agreement.

| No. | Patent constraint                         | Meaning                                      | Computed value | Patent Table 1 |
| --- | ----------------------------------------- | -------------------------------------------- | -------------: | -------------: |
| (1) | 5.0 < abs(f1/f2) < 9.0                    | Unit 1 / Unit 2 power ratio                  |           6.46 |           6.49 |
| (2) | 1.1 < Ndp/Ndn < 1.5                       | Index ratio in L5-L6 cemented doublet        |           1.18 |           1.18 |
| (3) | 0 < theta_gF,n - normal-line value < 0.1  | L5 anomalous dispersion                      |          0.014 |          0.014 |
| (4) | -0.1 < theta_gF,p - normal-line value < 0 | L6 partial-dispersion deviation              |         -0.009 |         -0.009 |
| (5) | 1.4 < Ndlp < 1.7                          | Index of positive lp component               |           1.59 |           1.59 |
| (6) | 0.25 < abs(f2/fw) < 0.8                   | Strength of second unit relative to wide EFL |           0.66 |           0.66 |
| (7) | 2.0 < abs(flp/f2) < 4.5                   | Focal-length ratio of lp to Unit 2           |           3.71 |            3.7 |

Direct paraxial tracing and the source's printed unit focal lengths give $105.87/16.39\approx6.46$ for Condition (1), while Table 1 lists 6.49. Both satisfy the claimed bound, but the cause of their disagreement is unresolved. The structured source erratum retains the literal prescription rather than assuming a rounding or transcription explanation.

## First-Order Results and Model Limits

A reduced-angle paraxial ray trace was run independently from the patent surface data. The trace used the surface-by-surface refraction form with reduced angle $U=nu$ and measured back focal distance from the final refracting surface to the image plane.

### Effective focal length and back focus

| Zoom position | Patent EFL | Computed EFL | Patent BFD | Computed BFD |
| ------------: | ---------: | -----------: | ---------: | -----------: |
|          Wide |   24.70 mm |    24.697 mm |   38.08 mm |    38.084 mm |
|  Intermediate |   34.93 mm |    34.940 mm |   46.62 mm |    46.626 mm |
|     Telephoto |   67.88 mm |    67.917 mm |   63.32 mm |    63.347 mm |

The small telephoto difference of about 0.04 mm is within the expected effect of rounded variable spacings in a published patent table.

### Unit focal lengths

| Unit   | Patent focal length | Computed focal length |
| ------ | ------------------: | --------------------: |
| Unit 1 |          +105.87 mm |           +105.871 mm |
| Unit 2 |           -16.39 mm |            -16.390 mm |
| Unit 3 |           +58.01 mm |            +58.005 mm |
| Unit 4 |           +46.14 mm |            +46.141 mm |

### Cemented group checks

| Cemented group | Elements | Computed in-air focal length |
| -------------- | -------- | ---------------------------: |
| D1             | L1-L2    |                   +1196.7 mm |
| D2             | L5-L6    |                     -79.2 mm |
| D3             | L8-L9    |                     -66.3 mm |
| D4             | L10-L11  |                     +48.0 mm |
| D5             | L17-L18  |                    +579.1 mm |

These values reinforce the architectural interpretation: D1 and D5 are weak corrective doublets, while D2 and D3 are active negative variator components and D4 is a stop-side positive imaging doublet.

### Petzval sum

The surface-by-surface Petzval sum, using $\phi/(nn')$ at each refracting surface, is approximately:

$$
\sum \frac{\phi_i}{n_i n'_i}=+0.001173\ \mathrm{mm}^{-1}.
$$

The corresponding Petzval radius is about -852 mm in this sign convention. This calculation deliberately uses the surface-by-surface formula rather than a thin-element approximation, because cemented groups and high-index interfaces are central to this design.

### Semi-diameter and stop notes

The patent provides no effective diameters. The inferred caps now follow native Fig. 5, whose original 2560 × 3300 image is 300 ppi. Its 116.47 mm first-to-last vertex span gives about 9 pixels/mm; practical height uncertainty is about ±0.5 mm. Twenty-three caps are revised, and the resolved rear shoulder of L4 uses `rimExtensionSd` 16.8 mm at surface 7 while preserving its 12.2 mm optical cap. The larger first doublet and smaller rear units now follow their visible optical endpoints. The historical audit's Fig. 3 citation is not the selected configuration; Fig. 5 is the corresponding section for Numerical Example 3.

The 22A/23 and 30A/31 clear caps remain 14.1/14.1 and 14.2/14.2 mm. Raising those paired boundaries uniformly to the roughly 15 mm schematic blank exceeds the existing gap guards; the drawing does not justify changing source R/d, adding opaque lands or relaxing those guards. All four source aspheres, the stop and focus/zoom controls remain unchanged. There is no added resin, cement medium, source plate or inferred cut.

The source gives no physical iris radius. The existing paraxial F/2.91 rule gives radii 9.518562/10.587874/12.940031 mm at the three source stations; those are model-derived values rather than a published physical schedule. The old front cap of L10 at surface 18 limited the tele source state to about f/3.10. Its source-figure-supported 15 mm cap clears that unintended restriction. All 65 sampled zoom positions now pass the aperture check within 3% and retain clear full-frame chiefs.

The three published zoom anchors remain the quantitative source configurations. Their linear interpolation retains up to −1.187079 mm of infinity back-focus error near normalized zoom 0.765625; an unpublished compensator cam is not invented to remove it. Finite-focus spacings remain a reconstruction from the maker's 0.38 m target, not a source focus table. Dense sampled pupil and renderer checks are reported in the audit, with marginal ray-entry/intersection limits kept separate from source fidelity and production correlation.

## Sources

- US 8,736,971 B2, Takahiro Hatada / Canon Kabushiki Kaisha, _Zoom Lens and Image Pickup Apparatus Including the Same_, granted May 27, 2014. Primary source for prescription data, zoom spacings, focal lengths, conditional expressions, and FIG. 5 layout.
- Canon Camera Museum, _EF24-70mm f/2.8L II USM_. Source for production element/group count, special-element count, closest focusing distance, magnification, blade count, filter size, weight, and market release data.
- Canon U.S.A., _EF 24-70mm f/2.8L II USM_ specifications. Source for marketed focal length, aperture, angle of view, inner-focus/ring-USM description, and production specifications.
- OHARA and Schott optical glass catalogs. Source for catalog matches to S-TIH53, S-LAH66, S-LAH58, S-FPM2, S-FTM16, S-LAL18, S-FPL51, S-BAL42, N-KZFS8 / S-NBH8, S-FPL53, S-LAH60, and S-BSL7.
- HOYA optical glass cross-reference and molded-glass catalog material. Source for the approximate M-TAFD305 curve used for the unidentified L16; it does not establish a production supplier or forming process.
