# Sigma 20 mm F1.4 DG HSM | Art — Optical Analysis

Analysis of the optical design transcribed from JP 2019-117419 A, Numerical Example 1, and modeled as the Sigma 20 mm F1.4 DG HSM | Art (A015). Prescription values, group focal lengths, conditional expressions, Petzval sum, back focal distance, and focus kinematics were re-checked by independent paraxial ray trace before being carried into the companion data file. Glass names are catalog cross-references from the stored nd/νd values; one rear aspherical glass remains non-unique and is labeled accordingly.

## Patent Reference and Design Identification

**Patent:** JP 2019-117419 A  
**Application Number:** JP 2019-84483; divisional of JP 2015-132854  
**Filed:** 2015-07-01 parent filing  
**Published:** 2019-07-18  
**Inventor:** Kenta Fujita  
**Applicant:** Sigma Corporation  
**Title:** Large-aperture wide-angle lens (大口径広角レンズ)  
**Embodiment analyzed:** Numerical Example 1 (数値実施例1), infinity focus

The patent describes a large-aperture wide-angle lens whose design target is a field angle of at least 90° with an F-number around 1.4 (¶0001). It gives five numerical examples. Examples 1-4 are full-frame-class 20.7 mm variants; Example 5 is a smaller-image-height 14.01 mm variant. Numerical Example 1 is the embodiment modeled here.

The identification with the Sigma 20 mm F1.4 DG HSM | Art rests on convergent optical evidence rather than on publication timing alone:

1. Example 1 gives f = 20.69 mm and FNO = 1.46. The independent paraxial trace returns EFL = 20.69346 mm, matching the patent and the marketed 20 mm f/1.4 after nominal rounding.
2. The prescription resolves to 15 glass elements in 11 air-separated groups, exactly matching Sigma's official construction for the A015.
3. The glass palette contains two νd = 95.10 ultra-low-dispersion elements, four νd = 68.63 ED elements, one νd = 81.61 ED element, and two double-sided aspherical elements. That is the same census as Sigma's published 2 FLD + 5 SLD + 2 aspherical specification.
4. The patent image height is Y = 21.63 mm, giving a 43.26 mm image circle, which is the 135 full-frame diagonal.
5. The production page lists no front filter size and describes a large-diameter aspherical construction, consistent with the bulbous-front DSLR-era A015 rather than the later mirrorless DG DN design.

Sigma's product specifications are treated as authoritative for product-level facts. Thus the data file uses the marketed 20 mm f/1.4, 94.5° angle of view, 0.276 m minimum focusing distance, and 1:7.1 maximum magnification as product metadata, while retaining the patent's paraxial f = 20.69 mm, FNO = 1.46, and 2ω = 93.69° as design values.

The later Sigma 20 mm F1.4 DG DN | Art is not this prescription. The DG DN is a mirrorless redesign with a different construction, different focusing package, and a front filter thread; JP 2019-117419 A, Example 1 corresponds to the DSLR-origin DG HSM Art formula.

## Optical Architecture

The lens is a fast retrofocus wide-angle in positive-negative-positive group form. The front half begins with a deep negative meniscus stack, then applies positive power before a weakly negative floating group and a strong positive rear imaging group. This is not a symmetric wide-angle derivative; the long back focal distance and strongly negative front group are the defining SLR-era retrofocus features.

The patent divides Example 1 into three moving/fixed lens groups (¶0054):

- **L1, surfaces 1-11, net positive and fixed during focus.** L1 itself is split into negative **L1f** and positive **L1r**. L1f contains the three object-side concave menisci; L1r contains one positive singlet and a cemented FLD/high-index doublet.
- **L2, surfaces 12-16, weakly negative and moving.** This group contains a positive singlet followed by a positive/negative cemented doublet. It moves toward the object during focusing and is also the group singled out by the patent as a field-curvature adjustment member.
- **L3, surfaces 18-27, positive and moving.** The stop lies between L2 and L3. L3 contains a cemented FLD/flint/ED triplet, a positive singlet, a negative singlet, and a rear double-sided aspherical positive element.

The re-computed group focal lengths are:

| Group | Computed f (mm) | Patent f (mm) | Role |
|---|---:|---:|---|
| L1 | +104.281 | +104.28 | Fixed front assembly, net positive |
| L1f | -21.645 | -21.65 | Strong diverging front sub-group |
| L1r | +41.190 | +41.19 | Positive collector and color-correcting sub-group |
| G1 | -85.768 | -85.77 | Frontmost dense-flint component |
| L2 | -267.935 | -267.96 | Weak negative floating/focus group |
| L3 | +37.059 | +37.06 | Positive moving rear imaging group |

The most important architectural choice is the three-element negative L1f, all convex toward the object. It accepts the very wide field before the stop, converts the steep field geometry into a tractable cone, and allows the rear groups to perform the actual high-speed imaging work. The cost is obvious: the design has a long front section, large ray heights in the front group, no normal filter thread, and a long back focus.

## Element-by-Element Analysis

Element focal lengths below are standalone in-air thick-lens values. Cemented-group behavior is discussed separately where the in-situ role differs from the standalone element sign.

### L1f — Diverging front sub-group

**E1 — Negative meniscus, convex to object.**  
nd = 1.92286, νd = 20.88. Glass: E-FDS1 (Hoya), dense flint. f = -85.8 mm.

E1 is the patent's frontmost component G1 (¶0055). It is a high-index, very low-Abbe dense flint, used not for color correction but for compact negative power at the front of a fast retrofocus system. Conditional expression (3) exists largely to keep this component's negative distortion contribution within a usable range.

**E2 — Negative meniscus, convex to object, both surfaces aspherical.**  
nd = 1.69350, νd = 53.20. Glass: M-LAC130 (HOYA), moldable lanthanum crown. f = -64.9 mm.

E2 is the front molded asphere. Its object-side surface is convex toward the object, satisfying the patent's preferred arrangement for correcting distortion and field curvature with fewer elements (¶0041). Both surfaces are aspherical, and the glass designation is consistent with a press-molded optical element.

**E3 — Negative meniscus, convex to object.**  
nd = 1.49700, νd = 81.61. Glass: FCD1 (Hoya) / S-FPL51 class. f = -103.1 mm.

E3 is a relatively weak negative ED element. The radius pair gives little power compared with E1 and E2, but the high Abbe number reduces lateral color introduced by the large ray heights in the front group. In Sigma's nomenclature this is an SLD-class element rather than an FLD element.

### L1r — Positive rear sub-group of L1

**E4 — Biconvex positive.**  
nd = 1.88300, νd = 40.80. Glass: TAFD30 (Hoya). f = +51.2 mm.

E4 begins the turn from the negative front group back toward a converging beam. The high index keeps the curvatures less severe than a lower-index crown would require, reducing spherical aberration in a high-aperture part of the lens.

**E5 + E6 — Cemented doublet, biconcave FLD plus biconvex high-index positive.**

- **E5:** nd = 1.43700, νd = 95.10. Glass: FCD100 (Hoya) / S-FPL53 class. f = -62.6 mm.
- **E6:** nd = 2.00100, νd = 29.13. Glass: TAFD55 (Hoya). f = +46.4 mm.

The doublet is the front half's strongest explicit axial-color corrector. The low-index, ultra-high-Abbe E5 is paired with an extremely high-index, low-Abbe lanthanum flint. The doublet is only weakly positive as a cemented unit, with computed f = +162.45 mm; its main purpose is chromatic correction and controlled convergence, not raw power.

E5 is also the negative L1 element satisfying condition (1), νd1n > 70. Its νd = 95.10 is well above both the stated lower bound and the patent's preferred νd > 80 form.

### L2 — Negative floating focus group

**E7 — Biconvex positive.**  
nd = 1.59282, νd = 68.63. Glass: FCD515 (Hoya). f = +64.8 mm.

E7 is a low-dispersion positive element at the front of the moving L2 group. Its role is not simply positive power; it prepares the beam for the following cemented pair while limiting chromatic variation during focus.

**E8 + E9 — Cemented doublet, biconvex ED crown plus biconcave dense flint.**

- **E8:** nd = 1.59282, νd = 68.63. Glass: FCD515 (Hoya). f = +47.7 mm.
- **E9:** nd = 1.80610, νd = 33.27. Glass: NBFD15 (Hoya). f = -22.0 mm.

The cemented pair has net f = -44.75 mm. Combined with E7, the whole L2 group is weakly negative at f = -267.94 mm. That weak group power is important: L2 can move for focusing and for assembly-time field-curvature correction without excessive back-focus sensitivity, which is the concern behind conditions (4) and (5) (¶0027-0035).

### L3 — Positive rear imaging group

**E10 + E11 + E12 — Cemented triplet, positive meniscus / biconcave / biconvex.**

- **E10:** nd = 1.43700, νd = 95.10. Glass: FCD100 (Hoya) / S-FPL53 class. f = +45.1 mm.
- **E11:** nd = 1.80610, νd = 33.27. Glass: NBFD15 (Hoya). f = -18.9 mm.
- **E12:** nd = 1.59282, νd = 68.63. Glass: FCD515 (Hoya). f = +95.1 mm.

The triplet sits immediately behind the aperture stop, where the axial beam is large. It alternates FLD / dense flint / ED crown, a layout suited to axial-color and secondary-spectrum control. As a cemented unit it is net negative, f = -49.15 mm; it is a corrector inside L3, not the main positive power source.

**E13 — Biconvex positive.**  
nd = 1.59282, νd = 68.63. Glass: FCD515 (Hoya). f = +39.5 mm.

E13 is one of the main positive-power elements of L3. Its ED glass limits the color penalty of placing a strong positive singlet close to the image side of a fast wide-angle system.

**E14 — Biconcave negative.**  
nd = 1.70154, νd = 41.15. Glass: BAFD7 (HOYA). f = -58.7 mm.

E14 supplies negative field-balancing power between the strong positive E13 and the rear asphere E15. It helps keep the final converging group from producing excessive positive Petzval curvature.

**E15 — Biconvex positive, both surfaces aspherical.**  
nd = 1.76450, νd = 49.10. Glass: 764491 L-LAM69 / moldable lanthanum-crown class, with no public Sellmeier match. f = +30.9 mm.

E15 is the strongest individual positive element in the design and the rear molded asphere. Its two aspherical surfaces work close to the image, where they can control spherical aberration, coma, and residual field behavior after the triplet and rear singlets have set the basic convergence.

The glass label is intentionally cautious. The stored nd/νd pair does not exactly match a public coefficient-backed catalog glass, so the data file preserves the six-digit 764491 code and the low-softening lanthanum-crown class rather than asserting a specific catalog identity.

## Glass Identification and Selection

The prescription does not name glass vendors; it gives nd and νd values. The identifications below come from cross-checking the six-digit glass codes against Hoya, Ohara, Schott, HIKARI, Sumita, and CDGM references. The Hoya palette is the most internally consistent fit.

| Elements | nd | νd | Code | Catalog identification | Optical role |
|---|---:|---:|---|---|---|
| E1 | 1.92286 | 20.88 | 923/209 | E-FDS1 (Hoya) | Dense flint front diverger |
| E2 | 1.69350 | 53.20 | 694/532 | M-LAC130 (HOYA) | Moldable front asphere |
| E3 | 1.49700 | 81.61 | 497/816 | FCD1 (Hoya) / S-FPL51 class | SLD-class ED front meniscus |
| E4 | 1.88300 | 40.80 | 883/408 | TAFD30 (Hoya) | High-index positive collector |
| E5, E10 | 1.43700 | 95.10 | 437/951 | FCD100 (Hoya) / S-FPL53 class | FLD-class axial-color correction |
| E6 | 2.00100 | 29.13 | 1001/291 | TAFD55 (Hoya) | Very-high-index flint partner |
| E7, E8, E12, E13 | 1.59282 | 68.63 | 593/686 | FCD515 (Hoya) | SLD-class ED crowns |
| E9, E11 | 1.80610 | 33.27 | 806/333 | NBFD15 (Hoya) | Dense-flint cemented partners |
| E14 | 1.70154 | 41.15 | 702/412 | BAFD7 (HOYA) | Barium dense flint field balancer |
| E15 | 1.76450 | 49.10 | 764/491 | L-LAM69 / moldable lanthanum-crown class; no public Sellmeier match | Rear molded asphere |

The FLD/SLD assignment is therefore straightforward. E5 and E10 are the two FLD elements. E3, E7, E8, E12, and E13 are the five SLD-class low-dispersion elements. This exactly matches Sigma's published special-glass count.

No apochromatic claim is made from Abbe data alone. The design is better described as a strongly corrected, FLD-assisted wide-angle achromat with explicit secondary-spectrum management. The glass choices are consistent with secondary-spectrum correction, but the patent does not publish partial-dispersion or line-index tables for the prescription.

## Focus Mechanism

The patent describes a dual-group floating internal-focus system. L1 is fixed. L2 and L3 both move toward the object as focus shifts from infinity to the closer patent state, and they move by different amounts (¶0013-0014, ¶0054). The aperture stop remains a fixed spacing ahead of surface 18, so in mechanical terms it travels with L3.

The patent's finite-focus table is not the production minimum focus distance. It gives only one finite state, labeled 撮影距離959mm. The corresponding variable spacings are:

| Gap | Infinity (mm) | Patent finite state (mm) | Change (mm) | Interpretation |
|---|---:|---:|---:|---|
| d11 | 7.5732 | 6.5175 | -1.0557 | L2 moves objectward by 1.0557 mm |
| d16 | 5.2496 | 5.7528 | +0.5032 | Differential L2 vs. stop/L3 motion |
| d27 | 36.5001 | 37.0527 | +0.5526 | L3 moves objectward by 0.5526 mm |

The motion is internally consistent: L2 moves 1.0557 mm objectward and L3 moves 0.5526 mm objectward, so the differential is 0.5031 mm, matching the increase in d16 to rounding. A finite-conjugate paraxial trace of the patent's 959 mm state gives magnification about -0.0247, or roughly 1:40. This is far from Sigma's product specification of 1:7.1.

For the data file, the close-focus slider therefore does not use the patent's 959 mm table as if it were minimum focus. Instead, the L2:L3 motion ratio from the patent table is extended paraxially until the object-image distance is Sigma's official 0.276 m and the magnification is 0.1407, essentially 1:7.1. That gives the following data-file close-focus spacings:

| Gap | Infinity (mm) | Data-file close value (mm) | Modeling basis |
|---|---:|---:|---|
| d11 | 7.5732 | 1.7094 | Extrapolated L2 objectward motion = 5.8638 mm |
| d16 | 5.2496 | 8.0446 | Extrapolated L2-L3 differential = 2.7950 mm |
| folded final air gap | 38.4492 | 41.5185 | Extrapolated L3 objectward motion = 3.0694 mm |

This extrapolation is not patent-published. It is included because the project data model needs a close-focus state and Sigma's published MFD/magnification should govern product metadata. The patent-grounded finite state remains documented above.

## Aspherical Surfaces

Example 1 has four aspherical surfaces: surfaces 3 and 4 on E2, and surfaces 26 and 27 on E15. The data file labels them 3A, 4A, 26A, and 27A.

The patent uses the standard even-order sag equation, with K as the conventional conic constant where K = 0 is a sphere (¶0045):

$$
z(y)=\frac{y^2/R}{1+\sqrt{1-(1+K)(y/R)^2}}+A_4y^4+A_6y^6+A_8y^8+A_{10}y^{10}+A_{12}y^{12}
$$

No K-convention conversion is required, and no odd-order terms are present.

| Surface | K | A4 | A6 | A8 | A10 | A12 |
|---|---:|---:|---:|---:|---:|---:|
| 3A | -2.4116 | +6.66830E-07 | -8.65320E-09 | +1.57870E-11 | -1.44600E-14 | +5.75550E-18 |
| 4A | -0.9479 | -1.12480E-07 | -1.99500E-08 | +3.17347E-11 | -3.47710E-14 | +1.78990E-17 |
| 26A | 0.0000 | -3.08870E-06 | -3.81950E-09 | +1.59760E-11 | -2.59380E-14 | 0 |
| 27A | 0.0000 | +4.54650E-06 | -3.84130E-09 | +1.68370E-11 | -1.13420E-14 | 0 |

Surfaces 3A and 4A primarily address the distortion and field-curvature burden created by the very strong negative front group. Surface 3A uses a hyperbolic base, while surface 4A is close to a prolate ellipsoid. Surfaces 26A and 27A are rear spherical-base aspheres of opposite fourth-order sign, consistent with final correction of spherical aberration and coma close to the image plane.

## Conditional Expressions

The patent gives six conditions and tabulates Example 1 values in the condition correspondence table (¶0084). The re-checks below use the transcribed Example 1 prescription.

| Condition | Patent value | Recomputed / verified value | Status |
|---|---:|---:|---|
| (1) νd1n > 70 | 95.10 | 95.10 | Verified by E5 glass data |
| (2) 0.23 < f1r/f1 < 0.54 | 0.40 | 0.395 | Verified |
| (3) 1.90 < fG1/f1f < 6.80 | 3.96 | 3.963 | Verified |
| (4) focus-sensitivity bound for L2 | 0.034 | 0.0340 | Verified paraxially |
| (5) |ΔSA2/Δast2| < 0.046 | 0.036 | Not paraxial; reported from patent |
| (6) 1.38 < f3/f < 2.83 | 1.79 | 1.791 | Verified |

The rendered patent table gives condition (4) as the standard moving-group back-focus sensitivity term β2b²(β2² - 1). The paraxial decomposition gives β2 = 2.6998 and β2b = 0.07361; β2b²(β2² - 1) = 0.03398, matching the patent's 0.034.

Condition (5) cannot be reproduced by paraxial tracing because it depends on finite-ray spherical aberration and meridional astigmatism changes for a unit movement of L2. The analysis therefore reports the patent's value and does not recast it as independently verified.

## Field Curvature and Petzval Sum

The Petzval sum was recomputed surface by surface as:

$$
P=\sum \frac{\phi_i}{n_i n'_i}, \qquad \phi_i=\frac{n'_i-n_i}{R_i}
$$

The LPF/sensor cover is flat and contributes no power. For the powered lens surfaces, P = +4.04344E-3 mm^-1. The corresponding Petzval radius is -247.31 mm, and P·f = 0.08367 for f = 20.69346 mm.

That is a controlled value for a 20 mm f/1.4 full-frame retrofocus lens. The negative front sub-group, the negative cemented partners in L2 and L3, and E14 all help restrain the positive field curvature that would otherwise be produced by the strong rear converging group.

## Data-File Modeling Notes

The companion `.data.ts` excludes the patent's LPF plate after surface 27, as required by the project data convention. The patent's stated total track is 161.26 mm. Summing the listed distances through the 1.45 mm LPF leaves BF = 0.9970 mm. The folded air-equivalent final distance is therefore:

$$
d_{27,air}=36.5001+\frac{1.4500}{1.52301}+0.9970=38.4492\text{ mm}
$$

A direct paraxial trace through the glass elements gives a focal distance of 38.4532 mm from the last glass vertex; the 0.004 mm difference is within the rounding implied by the patent table.

The stop semi-diameter in the data file is 12.8688 mm, computed from the marketed f/1.4 nominal aperture. The patent design FNO = 1.46 would correspond to a stop semi-diameter of about 12.3400 mm. Using the marketed value is intentional: `nominalFno` represents the production lens, while `apertureDesign` records the patent value.

The patent does not list semi-diameters. The values in the data file are conservative renderer-safe estimates, not physical clear-aperture specifications. They were derived from a combined marginal/chief paraxial envelope and then constrained by edge thickness, element semi-diameter ratio, signed cross-gap sag clearance, and the renderer's rim-angle/sd-to-radius limits. The small gap between surfaces 25 and 26A is the strongest rear-group constraint.

## Verification Summary

The re-review found no gross transcription error in the original prescription, but it did require several modeling and wording corrections:

- EFL: 20.69346 mm, matching the patent's 20.69 mm.
- Patent F-number: 1.46; production metadata uses Sigma's marketed f/1.4.
- Group focal lengths: L1 +104.281 mm, L1f -21.645 mm, L1r +41.190 mm, G1 -85.768 mm, L2 -267.935 mm, L3 +37.059 mm.
- Petzval sum: +4.04344E-3 mm^-1, computed surface by surface, not by thin-element approximation.
- Air-equivalent BFD after excluding the LPF: 38.4492 mm from patent distances; paraxial best focus at 38.4532 mm.
- Patent finite focus: about -0.0247 magnification at the tabulated 959 mm state, not the production minimum focus distance.
- Data-file close focus: extrapolated to 0.276 m and -0.1407 magnification using the patent's L2:L3 motion ratio.
- E15 glass: kept as non-unique/probable rather than asserted as an exact Hoya M-TAF101 match.

## Design Heritage and Context

Within Sigma's Art-line wide-angle family, the 20 mm F1.4 DG HSM | Art is significant because it combines a full-frame 20 mm field with an f/1.4 aperture in an SLR-compatible retrofocus package. The prescription shows how that was achieved: a large negative front group accepts the field, a molded front asphere suppresses distortion and field curvature early, and a second aspherical element close to the image finishes high-aperture correction. The design is therefore best understood as a large, uncompromising DSLR-era retrofocus lens rather than a compact mirrorless wide-angle.

## Sources

- JP 2019-117419 A, Sigma Corporation, Kenta Fujita, Numerical Example 1. Primary source for the prescription, aspherical coefficients, focus spacings, group data, conditional expressions, and patent text paragraphs cited above.
- Sigma Corporation, official product page for **20mm F1.4 DG HSM | Art (A015)**. Source for production construction, angle of view, mount list, minimum focus distance, maximum magnification, HSM description, aperture-blade count, and special-element count: https://www.sigma-global.com/en/lenses/a015_20_14/
- HOYA Group Optics Division, official optical-glass data download and technical pages. Used for Hoya glass code and catalog-name cross-reference: https://www.hoya-opticalworld.com/english/datadownload/index.html and https://www.hoya-opticalworld.com/english/technical/001.html
- Ohara Corporation / Ohara GmbH, S-FPL51 and S-FPL53 glass datasheets and cross-reference tables. Used only for equivalence notes where the stored nd/νd matches the Hoya/Ohara ED-glass families.
