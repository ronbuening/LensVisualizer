# Olympus M.Zuiko Digital 14–42 mm f/3.5–5.6 II R

## Patent Reference and Design Identification

**Patent:** US 8,994,842 B2  
**Application Number:** 14/070,926  
**Filed:** November 4, 2013; priority JP 2012-246584, November 8, 2012  
**Published:** May 15, 2014  
**Granted:** March 31, 2015  
**Inventors:** Toshio Takahashi, Hiroshi Kodama, Kento Hara, Kazumi Ito  
**Assignee:** Olympus Imaging Corp.  
**Title:** Zoom Lens and Image Pickup Apparatus Equipped with Same  
**Embodiment analyzed:** Common Example A optical prescription with Example 1 focusing kinematics

The transcribed design is the patent's **Common Example A**, used by Examples 1–3, with **Example 1** chosen for the focus mechanism. Common Example A is an eight-element, seven-group, four-unit zoom with a negative-positive-negative-positive power sequence. Examples 1–3 share the same glass and surface prescription and differ only in the second lens unit used during the still-image focus mode.

The production match is strongest at the optical-prescription level rather than at the marketing-name level. OM System's current product page names the lens **M.Zuiko Digital 14-42mm F3.5-5.6 II R**; the earlier draft's **ED** title was removed because the official product name does not carry an ED designation. The patent match rests on the following convergent points:

1. **Element and group count.** Common Example A has eight glass elements in seven air-separated groups, matching the official production specification.
2. **Aspherical element count.** The prescription has aspheric surfaces on both faces of L2, L4, and L7: three molded-aspheric elements, six aspheric surfaces. The official specification lists three aspherical glass elements.
3. **Focal length.** Independent paraxial tracing gives 14.268 / 24.904 / 41.185 mm, matching the patent's 14.27 / 24.90 / 41.17 mm and the marketed 14-42 mm range.
4. **Aperture.** The patent design is F3.70 / F4.60 / F5.80, while the production lens is marketed as f/3.5-5.6. The data file therefore uses the marketed f-number range for `nominalFno` and records the patent values in the analysis.
5. **Image format.** The patent's maximum image height is 11.15 mm, giving a 22.3 mm diagonal, which is sufficient for the 21.64 mm Four Thirds / Micro Four Thirds diagonal. The wide-end image height is lower, 10.07 mm, because the patent expressly designs a barrel-shaped wide-end image for electronic distortion correction.
6. **Close focus.** The patent fixes the close-focus object-to-image distance at 243.2 mm across the three zoom states. The production page lists a closest focusing distance of 0.25 m.
7. **Camera format.** Figures 18-20 show a single-lens mirrorless camera with a bayonet mount and a short air-equivalent back focus, excluding the older Four Thirds DSLR 14-42 mm lens and supporting a Micro Four Thirds identification.

The sibling examples are weaker production matches. Common Example B, used by Examples 4-6 and 8, is a ten-element, five-unit 12.24-49.00 mm class design. Example 7 is a seven-element, three-unit 14.28-41.16 mm design. Common Example A is therefore the only worked prescription in the patent that simultaneously matches the 14-42 mm range and the official eight-element / seven-group construction.

The patent's focus claims describe a first shooting mode, suited to video, in which only the first focusing unit moves, and a second shooting mode, suited to stills, in which two units move. OM System's current specification table lists the production lens mechanism as inner focus with screw drive; the product-description text separately refers to high-speed MSC autofocus. Because that public page is internally inconsistent, this analysis treats the patent's dual-mode focus system as the transcribed embodiment's mechanism, not as a separately verified production implementation.

## Optical Architecture

The design is a compact negative-lead standard zoom for Micro Four Thirds. From object to image it uses four lens units:

- **G1, f = −21.93 mm:** a negative front group made of L1, L2, and L3. It provides the wide-angle lead power and is the group that reverses direction during zooming.
- **G2, f = +21.30 mm:** the main positive group behind the stop. It contains the primary molded positive asphere L4 and a weakly negative cemented L5-L6 color-correcting doublet.
- **G3, f = −53.28 mm:** a single molded-aspheric negative meniscus. This is the first focusing lens unit.
- **G4, f = +93.08 mm:** a fixed positive rear meniscus that sets the exit-pupil and rear-field behavior.

During zooming from wide to telephoto, G1 first moves image-ward and then back object-ward, G2 and the stop move object-ward, G3 moves object-ward, and G4 remains fixed. The variable patent gaps are d6, d12, and d14, with the back focus changing slightly over zoom. In the data file, the sensor cover glass surfaces 17-18 are omitted as required by the project format, and their air-equivalent optical path is folded into the final back-focus distance on surface 16.

The important architectural choice is the focus split. In the first shooting mode, only G3 moves toward the image side for close focus. In Example 1's second shooting mode, G1 moves toward the object side and G3 moves toward the image side. The data file models this second-shooting-mode path because it is the Example 1 focus kinematic specifically reviewed here.

## Element-by-Element Analysis

Element focal lengths below are standalone thick-lens-in-air values unless explicitly described as in-situ or group focal lengths. The cemented L5-L6 combined power is stated separately because the behavior of a cemented doublet cannot be inferred from the isolated singlet focal lengths alone.

### G1 — Front Negative Group

**L1 — Negative meniscus, convex to object**  
nd = 1.78800, νd = 47.37. Glass: S-LAH64 (Ohara). f = −19.35 mm.

L1 is the high-index leading negative meniscus. Its same-sign radii, R1 = +68.660 mm and R2 = +12.332 mm, form a convex-to-object negative meniscus. S-LAH64's high index lets the design obtain strong negative front-group power without making the first surface excessively steep.

**L2 — Negative meniscus, convex to object, 2× aspheric**  
nd = 1.52542, νd = 55.78. Glass: unmatched moldable crown, 525/558 class. f = −48.92 mm.

L2 carries aspheric surfaces 3 and 4. It is the wide-group distortion and astigmatism shaper. Surface 3 has the unusually large positive conic constant K = 55.206, and in the data file its semi-diameter is deliberately limited by the conic discriminant and by the narrow L1-L2 air gap rather than by the full paraxial field envelope.

No public catalog match was found close enough to justify a named glass. It is therefore recorded as an unmatched moldable crown class rather than forced to a circular catalog identification.

**L3 — Positive meniscus, convex to object**  
nd = 1.84666, νd = 23.78. Glass: S-TIH53 (Ohara). f = +42.61 mm.

L3 is the positive dense-flint member inside the negative front group. It balances lateral color from the two negative meniscuses and keeps the front group from becoming a simple high-distortion negative triplet. Its low Abbe number makes it a flint correction element, not a low-dispersion component.

### Aperture Stop

The stop is surface 7 in the patent and sits immediately before G2. It travels with G2 during zooming. The patent lists stop semi-diameters of 5.36785 / 5.56235 / 5.97654 mm for the close-focus states; the data file uses a 6.0 mm stop semi-diameter so that the diagram clears the telephoto wide-open state.

### G2 — Positive Main Group

**L4 — Biconvex positive, 2× aspheric**  
nd = 1.58209, νd = 59.46. Glass: M-BACD12 / L-BAL42 class moldable crown, near match. f = +18.12 mm.

L4 is the dominant positive singlet in G2. Its R8 = +14.567 mm and R9 = −35.255 mm radii make it biconvex and strongly positive. The patent prose later refers to the aspheric L4 position as a biconcave negative lens, but that is contradicted by the numerical prescription and by the earlier G2 description. The prescription is authoritative, so L4 is treated as biconvex positive.

The glass does not exactly equal the common published catalog values for Hoya M-BACD12 or Ohara L-BAL42, but it is close enough in nd and νd to be described as that moldable crown class. It is not recorded as an exact glass.

**L5 — Biconcave negative, cemented to L6**  
nd = 1.80100, νd = 34.97. Glass: S-LAM66 (Ohara). f = −11.36 mm in air.

L5 is the negative flint member of the only cemented group. Its strong cemented interface at R11 = +10.111 mm provides most of the doublet's chromatic leverage.

**L6 — Biconvex positive, cemented to L5**  
nd = 1.48749, νd = 70.23. Glass: S-FSL5 (Ohara). f = +13.35 mm in air.

L6 is the low-dispersion crown partner of L5. In isolation it is strongly positive, but in the assembled L5-L6 doublet the pair is only weakly negative: the combined in-situ focal length is approximately −210.26 mm. The doublet therefore functions principally as a color-correcting insert within G2 rather than as the main positive power source.

The official production lens name does not include ED. Accordingly, this analysis identifies L6 as a low-dispersion S-FSL5 crown but does not use it to support an ED-marketing claim.

### G3 — Focusing Group

**L7 — Negative meniscus, convex to object, 2× aspheric**  
nd = 1.53071, νd = 55.69. Glass: unmatched moldable crown, 531/557 class. f = −53.28 mm.

G3 consists only of L7. This is the first focusing lens unit: in the first shooting mode it is the sole moving focus group, and in Example 1's second shooting mode it moves with G1. The single-element construction reduces moving mass, and the two aspheric surfaces help suppress focus-induced changes in spherical aberration and astigmatism.

### G4 — Rear Fixed Group

**L8 — Positive meniscus, convex to image**  
nd = 1.80518, νd = 25.42. Glass: S-TIH6 (Ohara). f = +93.08 mm.

L8 is the fixed rear positive meniscus. Both radii are negative, R15 = −46.801 mm and R16 = −29.294 mm, so the element is convex toward the image side. It is a dense-flint positive component placed near the sensor cover glass and contributes to rear-field correction and exit-pupil placement.

## Glass Identification and Selection

The exact Ohara identifications were checked against current Ohara catalog data. L2 and L7 remain unmatched because the patent-listed nd/νd pairs do not correspond cleanly to public catalog glasses. L4 is a near-class match only; it is not identified as a precise catalog glass.

| Element | nd | νd | Identification | Match status | Role |
|---|---:|---:|---|---|---|
| L1 | 1.78800 | 47.37 | S-LAH64 (Ohara) | exact | high-index front negative |
| L2 | 1.52542 | 55.78 | Unmatched moldable crown, 525/558 class | class only | molded wide-group asphere |
| L3 | 1.84666 | 23.78 | S-TIH53 (Ohara) | exact | front-group dense-flint color correction |
| L4 | 1.58209 | 59.46 | M-BACD12 / L-BAL42 class | near class match | main molded positive asphere |
| L5 | 1.80100 | 34.97 | S-LAM66 (Ohara) | exact | doublet flint |
| L6 | 1.48749 | 70.23 | S-FSL5 (Ohara) | exact | low-dispersion doublet crown |
| L7 | 1.53071 | 55.69 | Unmatched moldable crown, 531/557 class | class only | molded focusing asphere |
| L8 | 1.80518 | 25.42 | S-TIH6 (Ohara) | exact | rear dense-flint positive meniscus |

The chromatic strategy is conventional for a compact kit zoom. G1 balances two negative crowns/dense crowns against the low-Abbe positive L3 to manage lateral color at large field angles. G2 uses the S-LAM66 / S-FSL5 cemented doublet to reduce axial color after the high-power L4. The palette supports a well-corrected achromat, not an apochromatic claim.

## Focus Mechanism

The patent describes two shooting modes. In the first mode, only G3 moves toward the image side as focus shifts from infinity to a close object. In Example 1's second mode, G1 moves toward the object side and G3 moves toward the image side. The patent also states that, in the second shooting mode, the lens unit other than the first focusing unit moves before the first focusing unit starts to move; in Example 1 that is G1 before G3.

The close-focus object-to-image distance is 243.2 mm for all three zoom states in the patent. The production lens official closest-focusing-distance specification is 0.25 m. The data file sets `closeFocusM` to 0.25 m but uses the patent's Example 1 second-mode group motions for the internal spacing interpolation.

| Zoom state | First mode: G3 travel | Second mode: G1 travel | Second mode: G3 travel |
|---|---:|---:|---:|
| Wide | 1.10 mm | 0.75 mm object-ward | 0.82 mm image-ward |
| Middle | 2.66 mm | 0.76 mm object-ward | 2.06 mm image-ward |
| Telephoto | 5.67 mm | 0.86 mm object-ward | 4.49 mm image-ward |

For the data file, these movements are implemented as follows: d6 increases by the G1 object-ward shift, d12 increases by the G3 image-ward shift, and d14 decreases by the same G3 shift. Back focus changes only with zoom, not with the modeled close-focus state, because G4 and the sensor plane remain fixed.

## Aspherical Surfaces

Six surfaces are aspherical: surfaces 3 and 4 on L2, surfaces 8 and 9 on L4, and surfaces 13 and 14 on L7. The patent defines the sag as:

$$
Z(y)=\frac{y^2/r}{1+\sqrt{1-(1+K)(y/r)^2}}+A_4y^4+A_6y^6+A_8y^8+A_{10}y^{10}.
$$

The tabulated `k` is the standard conic constant K because the square-root term contains `(1+k)`. It is not a κ = K + 1 convention. No A12 or higher coefficient is used in Common Example A.

| Surface | Element / face | K | A4 | A6 | A8 | A10 |
|---|---|---:|---:|---:|---:|---:|
| 3 | L2 object | 55.206 | 3.61587e-05 | -4.90569e-07 | 5.56253e-09 | -2.97659e-11 |
| 4 | L2 image | -0.639 | 2.53915e-05 | -3.87220e-07 | 2.80346e-09 | -1.81533e-11 |
| 8 | L4 object | 0.000 | -2.82063e-05 | -2.06359e-07 | 7.86736e-09 | -1.77341e-10 |
| 9 | L4 image | 0.000 | 4.86449e-05 | -2.43220e-07 | 7.79158e-09 | -1.74694e-10 |
| 13 | L7 object | 10.752 | -4.89530e-05 | 1.95403e-06 | -3.39070e-08 | 5.00099e-10 |
| 14 | L7 image | 3.686 | -7.81833e-05 | 1.74053e-06 | -3.92602e-08 | 5.00369e-10 |

The L2 aspheres carry most of the wide-end distortion and oblique-astigmatism correction. The L4 aspheres are close to the stop and primarily shape spherical aberration and coma in the high-aperture bundle. The L7 aspheres are associated with the moving focus group and help reduce focus-dependent aberration changes.

## Chromatic Correction Strategy

The design uses two separate color-correction stations. G1 uses the high-dispersion positive L3 against the two negative meniscuses to reduce lateral color across the wide field. G2 uses the S-LAM66 / S-FSL5 cemented doublet behind L4 to reduce axial color and residual lateral color through the zoom range.

The L5-L6 doublet is analytically important because its standalone components are strong, but the assembled pair is nearly afocal relative to the main G2 power. A thin-lens reading of the singlets would misstate its function; the doublet's in-situ combined focal length is approximately −210.26 mm, so it acts mainly as a chromatic corrector embedded inside the positive group.

## Dual-Mode Aberration Control

The patent's central claim is not the zoom architecture itself but the use of different focusing kinematics for two shooting modes. A single moving group is preferred for quiet, low-power video focusing. Two moving groups are preferred for still-image focusing because their aberration changes can be made to cancel.

The patent specifically describes cancellation of spherical aberration and meridional field curvature when two units move in the second shooting mode. In Example 1, G1 and G3 provide that cancellation pair.

## Conditional Expressions

The patent gives three conditional expressions. Expression (1) is a movement ratio and can be recomputed directly from the focus-travel table. Expressions (2) and (3) use finite-ray spherical aberration and meridional-field quantities tabulated by the patent; paraxial tracing can check consistency but cannot reconstruct the finite-ray values.

**Expression (1):** $0.1 < M_{F1M2}/M_{F1M1} < 0.999$; preferred form $0.15 < M_{F1M2}/M_{F1M1} < 0.98$.

| State | MF1M2 | MF1M1 | Ratio | Status |
|---|---:|---:|---:|---|
| Wide | 0.821 | 1.102 | 0.745 | satisfied |
| Telephoto | 4.487 | 5.673 | 0.791 | satisfied |

**Expression (2):** $SP_{M2}/SP_{M1} < 1$; preferred form $< 0.86$.

| State | SP_M2 | SP_M1 | Absolute ratio | Status |
|---|---:|---:|---:|---|
| Wide | -0.066 | -0.072 | 0.917 | broad expression satisfied; preferred form not satisfied |
| Telephoto | -0.111 | -0.139 | 0.799 | satisfied |

**Expression (3):** $CM_{M2}/CM_{M1} < 1$; preferred form $< 0.92$.

| State | CM_M2 | CM_M1 | Absolute ratio | Status |
|---|---:|---:|---:|---|
| Wide | -0.084 | -0.098 | 0.857 | satisfied |
| Telephoto | -0.179 | -0.179 | 1.000 | not satisfied |

At the telephoto end, Example 1 does not satisfy expression (3), because the tabulated meridional curvature magnitudes are equal. This is not a transcription error; it follows from the patent's own parameter table.

## Verification Summary

All principal paraxial values were recomputed from the transcribed prescription using a y-u ABCD trace before preparing the data file.

| Quantity | Recomputed | Patent value |
|---|---:|---:|
| EFL, wide | 14.268 mm | 14.27 mm |
| EFL, middle | 24.904 mm | 24.90 mm |
| EFL, telephoto | 41.185 mm | 41.17 mm |
| BFD, wide | 17.146 mm | 17.15 mm |
| BFD, middle | 17.135 mm | 17.13 mm |
| BFD, telephoto | 17.085 mm | 17.06 mm |
| G1 focal length | -21.925 mm | -21.93 mm |
| G2 focal length | +21.300 mm | +21.30 mm |
| G3 focal length | -53.283 mm | -53.28 mm |
| G4 focal length | +93.085 mm | +93.08 mm |
| Petzval sum | +0.002968 mm^-1 | not tabulated |

The Petzval value uses the surface-by-surface sum Σφ/(n·n′), not a thin-lens element approximation. It corresponds to a Petzval radius of approximately +336.9 mm and is invariant with zoom because the air gaps do not change surface powers.

Semi-diameters in the data file were then estimated from paraxial marginal and chief-ray heights at the three zoom states and checked against the project constraints. Several surfaces are intentionally smaller than the raw paraxial field envelope: surface 3A is limited by the K = 55.206 conic discriminant and by cross-gap sag intrusion into the L1-L2 air gap, and the L5-L6 doublet aperture is limited by L6 edge thickness. These are renderer-valid clear-aperture estimates, not patent-published mechanical apertures.

## Sources

- US 8,994,842 B2, *Zoom Lens and Image Pickup Apparatus Equipped with Same*, Olympus Imaging Corp. Surface prescription, zoom data, aspheric coefficients, focus movement, conditional-expression parameters, and claims.
- OM System, official product page for *M.Zuiko Digital 14-42mm F3.5-5.6 II R*: production name, 14-42 mm focal length, f/3.5-5.6 aperture, 75°-29° angle of view, 8 elements / 7 groups, 3 aspherical glass elements, 0.25 m closest focusing distance, inner-focus technical-table entry, 37 mm filter, 7-blade diaphragm, and 113 g listed weight.
- Ohara current catalog pages for S-LAH64, S-TIH53, S-LAM66, S-FSL5, and S-TIH6.
- Hoya / Ohara public catalog data for M-BACD12 / L-BAL42-class moldable crown comparison.
