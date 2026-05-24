# Canon EF-S 18–55 mm f/3.5–5.6 IS — Optical Analysis

## Patent Reference and Design Identification

**Patent:** US 2007/0058265 A1  
**Application number:** US 11/466,150  
**Filed:** August 22, 2006  
**Published:** March 15, 2007  
**Priority:** JP 2005-263889, September 12, 2005  
**Inventor:** Takeshi Nishimura  
**Assignee:** Canon Kabushiki Kaisha  
**Title:** Zoom Lens and Image-Pickup Apparatus Having the Same  
**Embodiment analyzed:** Numerical Example 2, corresponding to Exemplary Embodiment 2 and FIG. 4

This prescription is transcribed from Numerical Example 2 of Canon's image-stabilized negative-lead zoom patent. The production identification is the Canon EF-S 18–55 mm f/3.5–5.6 IS rather than the later IS II or STM variants. The match rests on convergent evidence: the patent example has 11 elements in 9 groups; a design focal-length range of 18.69–53.27 mm; a patent maximum-aperture range of Fno 3.63–5.86; one aspherical surface; a single positive IS lens in the second group; and APS-C image height Y = 13.6 mm in the aberration plots. Canon's published product page for the EF-S18-55mm f/3.5-5.6 IS gives the same 9-group/11-element construction, six-blade diaphragm, 0.25 m closest focusing distance, 0.34× maximum magnification, and 58 mm filter diameter, with marketing beginning in September 2007.

The production lens is therefore treated as the scaled-as-published realization of Example 2. No geometric scale factor was applied in the data file.

## Optical Architecture

The lens is a four-group negative-lead APS-C DSLR zoom. From object to image, the group powers are negative, positive, negative, and positive. The negative front group gives the wide-angle end its retrofocus behavior; the rear three groups provide positive resultant power at the wide end and move during zooming to vary magnification while maintaining a long SLR back focus.

The patent states that, during zooming from wide to telephoto, the spacing between the first and second groups decreases, the spacing between the second and third groups increases, and the spacing between the third and fourth groups decreases. Numerical Example 2 implements this with D8 = 33.62 → 13.53 → 3.23 mm, D14 = 3.30 → 6.19 → 8.96 mm, and D17 = 7.34 → 4.45 → 1.68 mm. The aperture stop is located immediately behind Group 2 and moves integrally with Group 2 during zooming.

The patent describes the telephoto-end arrangement as becoming more telephoto-like because Group 1 approaches Group 2 and Group 3 approaches Group 4. In strict photographic-design terminology, however, the complete lens is not a compact telephoto design: the telephoto-end first-surface-to-image track is about 119.12 mm for a 53.30 mm EFL, so TL/EFL remains greater than 1. The safer description is that the telephoto-end grouping shortens the system relative to what a simple negative-lead zoom would otherwise require, not that the whole prescription satisfies the strict TL/EFL < 1 telephoto criterion.

### Verified First-Order Values

| Quantity | Wide | Mid | Tele |
|---|---:|---:|---:|
| Patent focal length | 18.69 mm | 32.08 mm | 53.27 mm |
| Computed EFL | 18.693 mm | 32.076 mm | 53.300 mm |
| Patent Fno | 3.63 | — | 5.86 |
| Patent full field, 2ω | 72.2° | — | 28.7° |
| Computed back focus | 35.266 mm | 46.875 mm | 66.284 mm |
| D8 | 33.62 mm | 13.53 mm | 3.23 mm |
| D14 | 3.30 mm | 6.19 mm | 8.96 mm |
| D17 | 7.34 mm | 4.45 mm | 1.68 mm |

The wide-end BFD/EFL ratio is 35.266 / 18.693 = 1.887, which is the operative retrofocus evidence for the DSLR mirror-box clearance.

### Group Focal Lengths

| Group | Verified focal length | Role |
|---|---:|---|
| Group 1, L11-L14 | -27.281 mm | Negative front group and focusing group |
| Group 2, L21-L23 | +25.406 mm | Positive variator group with IS unit |
| L2A, L21 | +78.625 mm | Single-lens image stabilizer |
| L2B, L22-L23 | +35.427 mm | Cemented achromatizing subcomponent |
| Group 3, L31-L32 | -34.629 mm | Negative compensator group |
| Group 4, L41-L42 | +43.031 mm | Rear positive relay/field group |

## Element-by-Element Analysis

### Group 1 — Front Negative Group

Group 1 contains four air-spaced singlets and carries the front-group negative power. It is also the focusing group. The patent states that focusing may be performed by moving the first group, but it does not publish finite-distance spacing tables.

#### L11 — Positive Meniscus

nd = 1.51633, νd = 64.1. Glass: S-BSL7 (OHARA/BK7-class crown). f = +164.1 mm.

L11 is a weak positive meniscus with a very shallow rear surface. Its optical power is small relative to the following negative elements, but it moderates the entrance bundle and helps keep the first strongly negative surface from bearing the entire off-axis correction burden. The element also gives the front group a more manufacturable profile than a purely negative-front layout.

#### L12 — Negative Meniscus

nd = 1.62299, νd = 58.2. Glass: S-BSM15 (OHARA). f = -29.4 mm.

L12 is the first strong negative component of the retrofocus front group. Its steep rear radius, R4 = +14.601 mm, supplies much of the wide-angle divergence. The nd/νd pair corresponds to OHARA S-BSM15, code 623582. S-BSM22 has a materially lower Abbe number and does not match this prescription.

#### L13 — Biconcave Negative

nd = 1.62299, νd = 58.2. Glass: S-BSM15 (OHARA). f = -34.9 mm.

L13 shares the same glass as L12 and provides the second major negative contribution in Group 1. The two-lens negative pair spreads the retrofocus burden across multiple surfaces, reducing the need for a single extreme front element and giving the designer more degrees of freedom for distortion and lateral color.

#### L14 — Positive Meniscus

nd = 1.80518, νd = 25.4. Glass: S-TIH6 (OHARA). f = +45.3 mm.

L14 is a high-index dense flint positive meniscus. It partially offsets the negative power of L12 and L13 while contributing strong dispersive correction inside the front group. Its high index permits meaningful positive power without a thick element, and its low Abbe number gives Group 1 a controlled crown/flint balance rather than leaving chromatic correction entirely to the rear groups.

### Group 2 — Positive Variator and Image Stabilizer

Group 2 is the main positive variator group and contains the IS unit. The patent divides it into L2A, a single positive lens, and L2B, a cemented negative-positive doublet whose resultant power is positive.

#### L21 / L2A — Positive Meniscus IS Lens

nd = 1.48749, νd = 70.2. Glass: S-FSL5 (OHARA). f = +78.6 mm.

L21 is the single positive lens used for image stabilization. It is laterally displaced to shift the image in a direction substantially perpendicular to the optical axis. The patent's central design decision is to make the IS component a single lens, reducing the moving mass and drive load compared with a multi-lens stabilizer.

S-FSL5 is a low-index, low-dispersion crown. It should not be described as fluorite crystal. Its high νd is useful because a single decentered positive lens cannot internally achromatize its own lateral color; the glass choice reduces the chromatic penalty of using such a lightweight IS component.

#### L22-L23 / L2B — Cemented Positive Doublet

L22: nd = 1.84666, νd = 23.9. Glass: S-TIH53 (OHARA). Standalone f = -60.0 mm.  
L23: nd = 1.48749, νd = 70.2. Glass: S-FSL5 (OHARA). Standalone f = +21.9 mm.  
Cemented doublet focal length: +35.4 mm.

L2B is a high-dispersion negative lens cemented to a low-dispersion positive lens. The doublet's net power is positive, but its internal dispersion contrast is large. It corrects the second group's chromatic balance and offsets the residual color introduced by the single-lens IS component.

The thin L22 flint element provides the dispersive counter-power, while L23 supplies most of the positive refractive power. The strong cemented interface at R12 = +12.277 mm is a key chromatic-correction surface.

### Group 3 — Negative Compensator Doublet

#### L31-L32 — Cemented Negative Group

L31: nd = 1.63980, νd = 34.5. Glass: S-TIM27 (OHARA). Standalone f = -13.7 mm.  
L32: nd = 1.78472, νd = 25.7. Glass: S-TIH11 (OHARA). Standalone f = +22.0 mm.  
Cemented doublet focal length: -34.6 mm.

Group 3 is a net-negative cemented doublet and serves as the compensator. It moves toward the object as the lens zooms from wide to telephoto while the G2-G3 gap expands. This motion controls image-plane position and balances aberration variation through the zoom range.

The glass identifications are S-TIM27 and S-TIH11. S-NBH51 / S-TIH18-style assignments are not supported by the nd/νd pairs. L31's code is 640345, matching S-TIM27, while L32's code is 785257, matching S-TIH11. The positive element is still a dense flint by Abbe number; νd = 25.7 is not crown territory.

### Group 4 — Rear Relay and Field Group

Group 4 is the rearmost positive group. It contains a weak negative aspherized element followed by a stronger positive element. It is close enough to the image plane that it has strong leverage over field-dependent aberrations, including distortion, astigmatism, and field curvature.

#### L41 — Weak Negative Meniscus with Rear Asphere

nd = 1.58306, νd = 30.2. Glass: Unmatched 583/302 flint; obsolete HOYA E-F3-class candidate. f = -212.0 mm.

L41 is a weak negative element. Its rear surface, Surface 19, is the only aspherical surface in the patent example. The nd/νd pair corresponds to a 583/302 flint code. It does not match OHARA S-TIM28; current OHARA cross-reference data place S-TIM28 near code 689311, which is far from the stored prescription value. Because no current authoritative manufacturer line was captured for 583/302 in the reviewed catalogs, the data file leaves this element explicitly marked as unmatched rather than assigning a false catalog name.

#### L42 — Positive Biconvex Rear Lens

nd = 1.48749, νd = 70.2. Glass: S-FSL5 (OHARA). f = +36.4 mm.

L42 supplies most of Group 4's positive power. Its very weak front radius and steep rear radius place much of the bending at the last glass-air interface, contributing to the exit-pupil and image-side relay geometry. The use of S-FSL5 again pairs a low-dispersion crown with flint elements elsewhere in the system.

## Glass Identification / Selection

The prescription gives refractive index and Abbe number but not manufacturer glass names. The following identifications were made by matching the patent nd/νd pairs against manufacturer catalogs and current cross-reference data.

| Element(s) | nd | νd | Assigned glass | Confidence | Note |
|---|---:|---:|---|---|---|
| L11 | 1.51633 | 64.1 | S-BSL7 (OHARA), BK7-class | High | Standard borosilicate crown match |
| L12, L13 | 1.62299 | 58.2 | S-BSM15 (OHARA) | High | Code 623582; S-BSM22 does not match |
| L14 | 1.80518 | 25.4 | S-TIH6 (OHARA) | High | Dense flint, code 805254 |
| L21, L23, L42 | 1.48749 | 70.2 | S-FSL5 (OHARA) | High | Low-dispersion crown, code 487702 |
| L22 | 1.84666 | 23.9 | S-TIH53 (OHARA) | High | Heavy flint, code 847238 |
| L31 | 1.63980 | 34.5 | S-TIM27 (OHARA) | High | Code 640345 |
| L32 | 1.78472 | 25.7 | S-TIH11 (OHARA) | High | Code 785257 |
| L41 | 1.58306 | 30.2 | Unmatched 583/302 flint | Medium-low | Obsolete HOYA E-F3-class candidate; no current authoritative line captured |

The palette is a conventional consumer-zoom mixture: crown-class glass in the front group, dense flints where compact chromatic correction is needed, and repeated S-FSL5 in the IS lens, the L2B positive element, and the rear positive element. No fluorite crystal or anomalous-partial-dispersion claim is supported by the patent data.

## Focus Mechanism

The patent states that focusing can be performed by moving the first lens group. The production product page gives a closest focusing distance of 0.25 m at all focal lengths. The patent does not publish a finite-distance spacing table, so the data file uses a paraxial inferred model: Group 1 is translated objectward, represented by increasing D8 while the rear groups and image plane remain fixed for each zoom position.

| Zoom position | Infinity D8 | Inferred close-focus D8 at 0.25 m | Travel |
|---|---:|---:|---:|
| Wide | 33.620 mm | 38.244 mm | +4.624 mm |
| Mid | 13.530 mm | 17.916 mm | +4.386 mm |
| Tele | 3.230 mm | 7.872 mm | +4.642 mm |

These values are not patent data; they are data-file approximations used to make the focus slider behave consistently with Canon's published MFD.

## Aspherical Surface

The patent specifies one aspherical surface: Surface 19, the rear surface of L41. The patent equation is:

$$
X = \frac{(1/R)H^2}{1 + \sqrt{1 - (H/R)^2}} + AH^2 + BH^4 + CH^6 + DH^8 + EH^{10} + FH^{12}.
$$

There is no conic-constant term in the denominator. In the standard renderer convention, this is a spherical base with K = 0, plus even-order polynomial coefficients. For Numerical Example 2:

| Quantity | Value |
|---|---:|
| Surface | 19A |
| R | -437.245 mm |
| K | 0 |
| A2 / patent A | 0 |
| A4 / patent B | 3.76648e-5 |
| A6 / patent C | 3.00374e-8 |
| A8 / patent D | 7.60709e-10 |
| A10 / patent E | -8.99719e-12 |
| A12 / patent F | 0 |

At the data-file clear semi-diameter of 8.0 mm, the polynomial departure from the base sphere is +165.3 µm. The total sag at 8.0 mm is +92.1 µm because the spherical base sag is negative while the polynomial departure is positive. The sign therefore shifts the rim imageward relative to the spherical base.

| Height | Polynomial departure |
|---:|---:|
| 4.0 mm | +9.8 µm |
| 6.0 mm | +50.9 µm |
| 8.0 mm | +165.3 µm |

The surface sits close to the image plane, immediately before a nearly contacting positive rear element. This is an efficient location for field-dependent correction. Canon's product page describes the production lens as having a precision aspherical element; the patent placement indicates that the asphere also participates in rear-group field and distortion correction, not only axial spherical correction.

## Image Stabilization

The IS lens is L21, the second group's single positive L2A component. The patent explicitly describes image stabilization by moving L2A with a component perpendicular to the optical axis. The reason for using one lens is mechanical: lower moving mass, reduced actuator load, and faster response.

The patent aberration drawings for Example 2 include stabilization cases correcting a deflection inclination of 0.3°. At the computed telephoto EFL of 53.300 mm, this angular shake corresponds to a paraxial image displacement of:

$$
53.300 \tan(0.3^\circ) = 0.279\text{ mm}.
$$

The optical design is built around the ratio f2/f2A = 0.323. This keeps the IS lens strong enough to shift the image effectively, but weak enough that coma and lateral color from decentering remain manageable for a single-element stabilizer.

## Conditional Expressions

The patent defines nine conditional expressions. Values below use the transcribed prescription and independently computed thick-lens/group values.

| Cond. | Expression | Computed | Patent Table 1 | Broad range | Result |
|---|---|---:|---:|---:|---|
| (1) | f2/f2A | 0.323 | 0.32 | 0.2-0.6 | Pass |
| (2) | LP/fw | 0.562 | 0.56 | 0.4-1.0 | Pass |
| (3) | d2A/fw | 0.102 | 0.10 | 0.05-0.2 | Pass |
| (4) | V2A | 70.2 | 70.2 | 55-85 | Pass |
| (5) | (Vp - Vn)/V2A | 0.660 | 0.59 | 0.4-0.7 | Pass |
| (6) | ft/fw | 2.850 | 2.85 | 2.4-4.0 | Pass |
| (7) | fw/bfw | 0.530 | 0.53 | 0.30-0.70 | Pass |
| (8) | d23w/fw | 0.230 | 0.23 | 0.15-0.40 | Pass |
| (9) | f4/fw | 2.303 | 2.30 | 1.5-2.6 | Pass |

Two patent-table issues require caution. First, expression (5) computes to 0.660 from the patent's own values Vp = 70.2, Vn = 23.9, and V2A = 70.2; Table 1 lists 0.59. The computed value still satisfies the broad condition, although it is slightly above the narrower preferred upper value of 0.65 printed in paragraph 0114. Second, Table 1 labels row (9) as fw/f4, but both the patent prose and the tabulated values correspond to f4/fw. The inverse would be about 0.434, not 2.30.

## Petzval and Field Curvature

Using the project convention, the surface-by-surface Petzval sum is:

$$
P = \sum \frac{\phi_i}{n_i n'_i}, \quad \phi_i = \frac{n'_i - n_i}{R_i}.
$$

For the 21 refracting surfaces in Numerical Example 2, the verified sum is:

> P = +0.002620 mm^-1, corresponding to a Petzval radius of +381.6 mm under this sign convention.

The sign is positive under the formula above. The magnitude remains modest: at the 13.6 mm APS-C corner image height used in the patent plots, the Petzval-only sag estimate is approximately h²/(2R) = 0.242 mm before astigmatic and aspherical correction.

## Data-File Implementation Notes

The data file transcribes all refracting surfaces from the front element through Surface 21 and omits sensor cover glass. The aperture stop is represented as `STO` between Surfaces 13 and 15. The variable gaps are D8, D14, D17, and the computed back focus. D8 is both a zoom and inferred-focus variable; D14, D17, and the back focus are zoom-only in the delivered data model.

The patent omits semi-diameters. The delivered semi-diameters are therefore inferred. The front group is constrained by the production 58 mm filter thread and by renderer limits; Surface 19A and Surface 20 are capped at 8.0 mm to preserve the 0.03 mm near-contact air gap after the large positive aspherical departure at Surface 19A.

## Verification Summary

The following quantities were independently re-run with a Python paraxial ray trace using y / n·u coordinates:

| Check | Result |
|---|---|
| EFL at 18.69 mm setting | 18.693 mm |
| EFL at 32.08 mm setting | 32.076 mm |
| EFL at 53.27 mm setting | 53.300 mm |
| Wide back focus | 35.266 mm |
| Mid back focus | 46.875 mm |
| Tele back focus | 66.284 mm |
| Group focal lengths | G1 -27.281, G2 +25.406, G3 -34.629, G4 +43.031 mm |
| IS subcomponent focal length | L2A +78.625 mm |
| L2B focal length | +35.427 mm |
| Petzval sum | +0.002620 mm^-1 |
| Surface 19A departure at h = 8.0 mm | +165.3 µm |

The prescription reproduces the patent focal lengths to within 0.03 mm at all three zoom positions.

## Sources

1. US 2007/0058265 A1, Takeshi Nishimura / Canon Kabushiki Kaisha, "Zoom Lens and Image-Pickup Apparatus Having the Same," Numerical Example 2.
2. Canon Camera Museum, "EF-S18-55mm f/3.5-5.6 IS," product page: https://global.canon/en/c-museum/product/ef394.html
3. OHARA Corporation / OHARA GmbH optical-glass data sheets and cross-reference tables for S-BSL7, S-BSM15, S-TIH6, S-FSL5, S-TIH53, S-TIM27, and S-TIH11.
4. HOYA Group Optics Division, Glass Cross Reference Index: https://www.hoya-opticalworld.com/english/products/crossreference.html
