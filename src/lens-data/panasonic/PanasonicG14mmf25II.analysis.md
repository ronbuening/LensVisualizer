# Panasonic LUMIX G 14mm f/2.5 II ASPH — Optical Analysis

## Patent Reference and Design Identification

**Patent:** US 2013/0148006 A1  
**Application Number:** 13/757,339, continuation of PCT/JP2011/004403  
**Filed:** 1 February 2013  
**Published:** 13 June 2013  
**Priority:** 25 August 2010, JP 2010-187820  
**Inventors:** Shunichiro Yoshinaga, Kyoichi Miyazaki, Takao Yamanaka, Keiichi Zaitsu  
**Applicant / Assignee:** Panasonic Corporation, Osaka  
**Title:** Single Focal Length Lens System, Interchangeable Lens Apparatus and Camera System  
**Embodiment analyzed:** Embodiment 1 / Numerical Example 1, FIG. 1, Tables 1–3

The prescription transcribed here is Numerical Example 1 of US 2013/0148006 A1. The production target is the Panasonic LUMIX G 14mm f/2.5 II ASPH, H-H014A. Panasonic's published H-H014A specification gives a Micro Four Thirds 14 mm f/2.5 lens, 6 elements in 5 groups, 3 aspherical lenses, 75° diagonal angle of view, 0.18 m closest focusing distance, and approximately 0.10× maximum magnification. The patent example gives a 14.5457 mm design focal length, F 2.52134, image height H = 10.2 mm, half field 37.8597°, 6 optical glass elements in 5 air-spaced groups, and 5 aspherical surfaces carried by 3 lenses.

The identification rests on the following convergent evidence.

1. **Element and group count.** Numerical Example 1 is a six-element, five-group lens: L1, L2, cemented L3+L4, L5, and L6. This matches Panasonic's published 6-elements / 5-groups construction.
2. **Aspherical lens count.** L1 has two aspherical surfaces, L5 has two aspherical surfaces, and L6 has one aspherical surface. Panasonic publishes the production lens as using three aspherical lenses, not merely three aspherical surfaces.
3. **Aperture.** Example 1 is the only six-element example in this patent computed at F 2.521. The other six-element examples in the same patent are around F 2.58. The f/2.5 aperture is therefore the strongest discriminator among the six-element embodiments.
4. **Focal length and field.** The patent's f = 14.5457 mm and 2ω = 75.7194° match the production 14 mm nominal, 75° diagonal-angle specification within normal photographic focal-length rounding.
5. **Focusing architecture.** The patent describes an inner-focus system in which the positive focusing unit moves and the front and rear units remain fixed (¶¶0073–0075). Panasonic describes the production H-H014A as using inner focus and a stepping motor.
6. **Timing and format.** The patent's 2010 priority date is contemporaneous with the original H-H014 14 mm f/2.5 optical formula, while the H-H014A is the later H-H014A / II product variant using the same published optical count and special-lens count.

Where a manufacturer hard specification and a patent design value differ, the manufacturer governs the production metadata and the patent value governs the transcribed prescription: focal length 14 mm nominal versus 14.5456 mm design EFL; aperture f/2.5 nominal versus F 2.52134 design; close focus 0.18 m and 0.10× from Panasonic's published specification.

## Optical Architecture

The lens is a compact long-back-focus Micro Four Thirds wide-angle prime. It is not a telephoto design: the patent total track from the first surface to the image plane is 37.3188 mm, giving TL/EFL = 2.57. It is also not a classic SLR-style inverted-telephoto layout with a strong negative front group. Instead, the design uses a weak positive front unit, a strong positive inner focusing unit, and a weak negative rear unit:

- **G1 fixed front unit, weak positive, f ≈ +223.33 mm.** L1 is a negative aspherical meniscus and L2 is a high-index positive meniscus. The group is nearly afocal but slightly positive.
- **Aperture stop A.** The patent also lists a separate flare-cut diaphragm as surface 6 (¶0080). Because that surface is optically neutral and mechanical, the data file folds its air spacing into the stop-to-L3 gap rather than drawing it as a second stop.
- **G2 moving focusing unit, positive, f ≈ +12.49 mm.** L3, the 0.01 mm adhesive layer, L4, and L5 form the translating positive focus unit. Its strong positive power keeps focus travel short.
- **G3 fixed rear unit, negative, f ≈ −60.85 mm.** L6 is a single negative aspherical rear lens that lengthens back focus and controls peripheral field behavior.

The paraxial back focal distance at infinity is 16.1398 mm, slightly longer than the 14.5456 mm EFL. The long back focus is produced mainly by the fixed negative rear lens rather than by a strong negative front cell. This is the central architectural feature of the patent family: a compact, fixed-length lens with most focusing power concentrated in the small internal positive unit.

## Element-by-Element Analysis

Element focal lengths below are standalone thick-lens-in-air values computed from the patent radii, thicknesses, and d-line indices. Group focal lengths are standalone paraxial group values. In-situ power inside the complete lens differs because each element works in a converging or diverging beam.

### L1 — Negative Meniscus, convex to object, 2× aspherical

nd = 1.58332, νd = 59.1. Glass: 583/594 barium crown, S-BAL42 / L-BAL42 / M-BACD12 class. f = −16.71 mm.

L1 is the wide-angle front corrector. The object-side radius is very weak, R1 = +150.1369 mm, while the image-side radius is much stronger, R2 = +9.1393 mm. The result is a negative meniscus that accepts oblique bundles with less frontal protrusion than a strongly powered negative front element would require. Both surfaces are aspherical, and the patent specifically identifies front-unit aspheres as a means of correcting peripheral astigmatism while keeping the front unit thin (¶0145).

The glass is a low-dispersion barium crown-class material. The nearest public catalog glasses are OHARA S-BAL42 / L-BAL42 and HOYA M-BACD12, all close to 1.583 / 59.4. The patent value, 1.58332 / 59.1, is close enough for class identification but not a unique catalog melt.

### L2 — Positive Meniscus, convex to object

nd = 1.91082, νd = 35.2. Glass: TAFD35-class high-index lanthanum glass. f = +16.96 mm.

L2 completes the fixed front unit. Its very high d-line index allows a positive meniscus with gentle curvature on the rear face, R2 = +408.0238 mm, while still counterbalancing L1's negative power. The front unit's combined power is only f ≈ +223.33 mm, so it mainly conditions the oblique field and pupil geometry rather than forming the image by itself.

The 911/353 glass code corresponds to HOYA TAFD35-class lanthanum glass. The patent's 1.91082 / 35.2 matches the class code to catalog precision.

### L3 + adhesive + L4 — Cemented negative/positive achromat in the focusing unit

The first part of G2 is a cemented achromat. The patent models the bond explicitly: surface 8 is a 0.01 mm adhesive layer of nd = 1.56732, νd = 42.8 between L3 and L4 (¶0078 and Table 1). Keeping this 0.01 mm medium in the data file reproduces the patent paraxial EFL and BFD to the quoted precision.

**L3 — Negative Meniscus, convex to image.** nd = 1.84666, νd = 23.8. Glass: S-TIH53 / FDS90-class dense flint, 847/238. f = −8.16 mm. L3 is the high-dispersion negative member. It carries the largest standalone negative power in the moving group and is the main axial-color balancing component.

**Adhesive layer C1.** nd = 1.56732, νd = 42.8. It is not counted as a production glass element, but it is retained as an optical medium because the patent gives it explicitly.

**L4 — Positive Meniscus, convex to image.** nd = 1.88300, νd = 40.8. Glass: S-LAH58 / TAFD30-class lanthanum dense flint, 883/408. f = +11.83 mm. L4 supplies the positive partner of the cemented achromat and reduces the chromatic imbalance that would otherwise be introduced by moving a strong flint element during focus.

The patent states that this cemented lens, together with the following positive aspherical singlet, corrects axial chromatic aberration, lateral chromatic aberration, and coma from infinity to close object distances (¶0143). That allocation is consistent with the prescription: the color-correcting doublet is inside the moving unit, so color correction follows the focus movement.

### L5 — Biconvex Positive, greater curvature to image, 2× aspherical

nd = 1.58250, νd = 59.4. Glass: 583/594 barium crown, S-BAL42 / L-BAL42 / M-BACD12 class. f = +13.65 mm.

L5 is the main positive singlet of G2. Its rear surface, R = −10.8600 mm, is the stronger surface and sits immediately before the variable air gap to the negative rear lens. Both surfaces are aspherical. The patent assigns focusing-unit aspheres to the correction of spherical aberration and coma across the focus range (¶0144), and L5 is the element best positioned for that work because it lies in a strongly converging beam.

The low-dispersion barium crown-class glass limits the axial color added by this high-power positive element. The glass is again best treated as a 583/594 class rather than a unique catalog identification.

### L6 — Biconcave Negative Rear Lens, 1× aspherical

nd = 1.68400, νd = 31.3. Glass: unmatched dense flint, 684/313; nearest public molded/flint families are S-TIM28 / M-FD80 around 689/311. f = −60.85 mm.

L6 is the entire fixed rear unit G3. Its object-side radius is nearly flat, R = −611.6969 mm, and its image-side radius is +44.6801 mm. The lens is therefore weakly negative but placed where it can lengthen back focus and flatten the field. The patent states that rear-unit aspheres are useful for correcting astigmatism in the peripheral image while reducing the rear-unit axial thickness (¶0142).

The stored patent index does not land exactly on a public catalog glass. S-TIM28 / M-FD80-class glasses are near in Abbe number but about 0.0049 higher in nd than the patent value. The data file therefore labels the glass as unmatched 684/313 dense flint rather than forcing a misleading exact vendor name.

## Glass Identification and Selection

The table below uses six-digit glass codes as a vendor-neutral check: the first three digits are nd×1000 rounded, and the last three are νd×10 rounded. Vendor names are stated as exact only when the patent value matches a public catalog entry closely enough; otherwise the entry is a class label.

| Element | Patent nd / νd | Code | Identification | Catalog status |
|---|---:|---:|---|---|
| L1 | 1.58332 / 59.1 | 583/591 | S-BAL42 / L-BAL42 / M-BACD12-class barium crown | near class; catalog code 583/594 |
| L2 | 1.91082 / 35.2 | 911/352 | TAFD35-class high-index lanthanum glass | exact class; catalog code 911/353 |
| L3 | 1.84666 / 23.8 | 847/238 | S-TIH53 / FDS90-class dense flint | exact class |
| C1 | 1.56732 / 42.8 | 567/428 | UV-curing optical cement | patent-listed cement medium |
| L4 | 1.88300 / 40.8 | 883/408 | S-LAH58 / TAFD30-class lanthanum dense flint | exact class |
| L5 | 1.58250 / 59.4 | 583/594 | S-BAL42 / L-BAL42 / M-BACD12-class barium crown | near class |
| L6 | 1.68400 / 31.3 | 684/313 | unmatched dense flint; nearest S-TIM28 / M-FD80 class | not exact; label kept conservative |

The chromatic correction is conventional, not apochromatic. No element uses fluorite, fluorophosphate ED glass, or a clearly anomalous partial-dispersion glass. The design instead uses one moving cemented achromat: dense flint L3 paired with lanthanum dense flint L4. This is sufficient for a compact 14 mm f/2.5 wide-angle whose remaining correction burden is carried heavily by molded aspheres.

Patent condition (1) constrains the rear element's combined index/dispersion value, nd − 0.01νd. For L6 this is 1.68400 − 0.313 = 1.371, matching the patent's Table 31 value. The condition is explicitly about balancing peripheral chromatic correction against field curvature (¶0132), which agrees with L6's rear-unit role.

## Focus Mechanism

The patent describes inner focusing: G1 and G3 are fixed, while positive G2 moves along the optical axis from the infinity in-focus condition to the close-object in-focus condition (¶¶0073–0075). Panasonic's production specification gives 0.18 m closest focusing distance and approximately 0.10× maximum magnification.

The patent publishes only the infinity prescription. However, because the architecture has one moving positive focus unit and fixed front/rear units, the close-focus paraxial gaps can be inferred by imposing three constraints: official object distance 0.18 m measured from the image plane, official magnification 0.10×, and constant total optical track. Solving the paraxial conjugate condition gives a G2 movement of 0.9089 mm toward the object side.

| Variable spacing | Infinity | Close-focus inferred | Change |
|---|---:|---:|---:|
| Stop-to-L3 gap, with patent flare-stop gap folded in | 4.9334 mm | 4.0245 mm | −0.9089 mm |
| L5-to-L6 gap | 1.4500 mm | 2.3589 mm | +0.9089 mm |
| Total first-surface-to-image track | 37.3188 mm | 37.3188 mm | 0.0000 mm |

The inferred close-focus state gives paraxial magnification |m| = 0.10023 at the official 0.18 m minimum focus distance, matching Panasonic's published 0.10× value. Because the close-focus spacings are not patent-published, they are stored in the data file as an inferred focus model rather than as patent table values.

## Aspherical Surfaces

Five surfaces are aspherical: surfaces 1 and 2 on L1, surfaces 11 and 12 on L5, and surface 14 on L6. The patent defines sag as:

$$
Z = \frac{h^2/r}{1 + \sqrt{1 - (1+K)(h/r)^2}} + \sum A_n h^n
$$

The conic constant appears directly as K in the standard `(1+K)` term (¶¶0154–0159). No conversion from Japanese κ notation is required. In Numerical Example 1, all five aspherical surfaces have K = 0, so each is a spherical base modified by even-order polynomial terms.

| Surface | Element | K | A4 | A6 | A8 | A10 | A12 | ΔZ at patent effective semi-diameter |
|---|---|---:|---:|---:|---:|---:|---:|---:|
| 1 | L1 front | 0 | −3.85000E−05 | +1.82000E−06 | −9.53000E−08 | +1.88000E−09 | −1.12000E−11 | −0.0372 mm at h = 6.069 mm |
| 2 | L1 rear | 0 | −1.30000E−04 | −6.84000E−07 | −3.09000E−08 | −2.92000E−09 | +9.26000E−11 | −0.1267 mm at h = 5.160 mm |
| 11 | L5 front | 0 | −1.88000E−05 | −7.59000E−07 | +2.03000E−08 | −1.45000E−10 | 0 | −0.0604 mm at h = 7.073 mm |
| 12 | L5 rear | 0 | +2.69000E−04 | −4.50000E−06 | +1.05000E−07 | −1.05000E−09 | +4.67000E−12 | +0.6103 mm at h = 7.371 mm |
| 14 | L6 rear | 0 | −9.05000E−05 | +4.19000E−06 | −8.41000E−08 | +9.16000E−10 | −4.09000E−12 | +0.0044 mm at h = 7.526 mm |

The L1 departures flatten the effective front-unit shape at the field edge and are consistent with the patent's stated use of front-unit aspheres for peripheral astigmatism (¶0145). The largest departure is surface 12 on L5: the +0.610 mm polynomial departure makes the strongly curved rear face less concave at the rim than its spherical base, which is exactly where the moving positive singlet has leverage over spherical aberration and coma. The rear L6 asphere has only a small rim departure but sits near the image side, where a small shape change is effective for peripheral astigmatism and field curvature.

## Conditional Expressions

The patent defines three conditions relevant to Numerical Example 1 and tabulates the example values in Table 31. The values below were recomputed from the prescription by paraxial trace.

| Condition | Form | Patent bounds | Patent Table 31 | Recomputed | Status |
|---|---|---:|---:|---:|---|
| (1) | nd − 0.01νd for rear single lens | 1.25 < value < 1.85 | 1.371 | 1.371 | satisfied |
| (2) | fW / fGR | −0.5 < value < −0.1 | −0.239 | −0.239 | satisfied |
| (3) | fW / fGF | 0.45 < value < 1.5 | 1.165 | 1.165 | satisfied |

The recomputation uses fW = 14.5456 mm, fGR = −60.8452 mm for the rear unit, and fGF = +12.4874 mm for the moving focus unit. Condition (2) sets the rear negative unit's field-flattening and image-magnifying strength (¶0125). Condition (3) bounds the positive focusing unit's power so that focus travel remains short without excessive manufacturing sensitivity (¶0139). Condition (1) controls the rear element's index/dispersion balance for peripheral color and field curvature (¶0132).

## Verification Summary

A y–n·u paraxial ray trace of Numerical Example 1 gives the following values.

| Quantity | Patent value | Recomputed value |
|---|---:|---:|
| Effective focal length | 14.5457 mm | 14.5456 mm |
| F-number | 2.52134 | 2.5218 from stop and entrance pupil |
| Back focal distance | 16.1399 mm | 16.1398 mm |
| Total first-surface-to-image track | 37.3188 mm | 37.3188 mm |
| Front unit focal length G1 | not tabulated | +223.326 mm |
| Focus-unit focal length G2 | from condition (3) | +12.487 mm |
| Rear-unit focal length G3 | from condition (2) | −60.845 mm |
| Petzval sum Σφ/(n·n′) | not tabulated | +0.0075928 mm⁻¹ |
| Petzval radius | not tabulated | −131.70 mm, or −9.05×EFL |

The surface-by-surface Petzval calculation uses φ/(n·n′), not thin-lens element approximations. The strong negative Petzval contribution from L1's inner surface and the high-index flint surface in G2 counterbalance the positive contributions of the high-power focusing surfaces, while the negative rear lens contributes final field flattening.

## Aberration Correction Strategy

The patent's own division of labor is internally consistent with the recomputed paraxial powers. L1's two front-unit aspheres correct peripheral astigmatism while keeping the front unit thin (¶0145). The moving cemented pair L3+L4 suppresses axial and lateral color through the focus stroke, while L5's two aspheres correct spherical aberration and coma near the center and mid-field (¶¶0143–0144). L6 supplies a weak negative rear unit whose glass choice and aspheric rear face help balance field curvature, peripheral color, and astigmatism (¶¶0132, 0142).

The design therefore uses aspherical geometry rather than exotic glass as its primary compactness tool. That is consistent with Panasonic's public description, which emphasizes three aspherical lenses and does not claim ED or APO glass.

## Sources and References

- US 2013/0148006 A1, Panasonic Corporation, *Single Focal Length Lens System, Interchangeable Lens Apparatus and Camera System*. Primary source for lens architecture, paragraph descriptions, Numerical Example 1 surface data, aspherical coefficients, and conditional expressions.
- Panasonic H-H014A published specification page: production focal length, f-number, construction, Micro Four Thirds mount, aperture blades, closest focusing distance, maximum magnification, angle of view, size, and weight.
- Panasonic / PRNewswire release, 15 September 2014, *New Micro Four Thirds Digital Interchangeable Single Focal Length Lens LUMIX G 14mm / F2.5 II ASPH. (H-H014A)*: product introduction, 6-lens / 5-group construction, three aspherical lenses, inner focus, stepping motor, seven aperture blades, and multi-coated elements.
- OHARA public glass catalog and datasheets: S-BAL42, L-BAL42, S-TIH53, S-LAH58, S-TIM28.
- HOYA Optics cross-reference and catalog material: TAFD35, M-BACD12, FDS90, TAFD30, M-FD80 family cross-checks.
