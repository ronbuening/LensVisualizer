## Patent Reference and Design Identification

**Patent:** US 7,411,746 B2
**Application Number:** 11/677,713
**Filed:** February 22, 2007
**Published:** August 30, 2007 (US 2007/0201141 A1)
**Granted:** August 12, 2008
**Priority:** February 24, 2006 (JP 2006-047933 and JP 2006-047942)
**Inventors:** Koji Kato; Masakazu Saori
**Assignee:** Hoya Corporation
**Title:** Wide-Angle Lens System
**Worked examples:** 10
**Embodiment analyzed:** Embodiment 1, Table 1 and FIG. 1

US 7,411,746 B2 describes a compact retrofocus wide-angle lens for a digital SLR: a negative front lens group, diaphragm, and positive rear lens group, arranged from object to image. Embodiment 1 is the prescription transcribed here. Its patent values are $f = 21.60$ mm, $F = 1:3.3$, $W = 35.0^\circ$, and $f_B = 36.70$ mm. The associated aberration diagrams are plotted at image height $y = 14.24$ mm, matching APS-C diagonal coverage.

The prescription is identified with the smc / HD PENTAX-DA 21mm F3.2 AL Limited on convergent evidence rather than on a manufacturer-published surface prescription:

1. Embodiment 1 resolves to eight glass elements in five air-spaced groups: L1 | L2 | L3-L4 | L5-L6-L7 | L8. Ricoh's published specifications give the production lens as 8 elements in 5 groups.
2. The single aspherical surface is on the final element. In Embodiment 1 it is the object-side surface of a thin compound-resin layer bonded to the final glass element; this corresponds to the production lens's AL / hybrid-aspherical designation, while the exact hybrid-layer construction remains patent-derived.
3. The patent design focal length of 21.60 mm and design aperture of F3.3 align with the production specifications of 21 mm and F3.2 after normal photographic rounding and product-level aperture designation.
4. The patent field is $W = 35.0^\circ$ for Embodiment 1, while Ricoh publishes a 68° diagonal angle of view. This is close to the 34.2° half-field of the later embodiments and to the APS-C field expected from a 21 mm rectilinear lens. The data file therefore keeps the Embodiment 1 prescription but records 68° as the production field.
5. The patent's focus method is a floating two-group movement: the negative front group and positive rear group move by different distances. Ricoh's product literature describes the production lens as using a floating mechanism, and publishes minimum focus as 0.2 m with 0.17x maximum magnification.

The prescription should therefore be read as a strong patent-to-product match, not as proof that the production lens uses the same melt lots or the same clear apertures as Embodiment 1. Manufacturer specifications govern focal length, marketed aperture, element/group count, coverage, and close-focus figures; the patent governs the optical prescription transcribed in the data file.

## Optical Architecture

The design is a compact negative-front retrofocus wide angle. A conventional retrofocus arrangement is required because a K-mount digital SLR lens must leave a back focal distance far longer than the focal length. The verified paraxial trace gives an effective focal length of 21.596 mm and a back focal distance of 36.701 mm, so $f_B/f = 1.70$. That ratio is sufficient by itself to classify the design as retrofocus.

The front group has net negative power, $f_F = -41.29$ mm. It is divided into two sub-groups separated by the largest front-group air space:

- Group 11 is L1 + L2, a positive meniscus followed by a stronger negative meniscus. Its focal length is $f_{la} = -26.10$ mm.
- Group 12 is the cemented L3-L4 doublet, a negative meniscus cemented to a thick positive element. Its focal length is $f_{lb} = +82.20$ mm.

The rear group has net positive power, $f_R = +21.89$ mm. It consists of a cemented positive-negative-positive triplet followed by a final positive meniscus carrying the hybrid asphere. The triplet itself is nearly afocal but weakly negative, with a computed focal length near -972 mm. This agrees with the patent's statement that the combined refractive power of the cemented fifth, sixth, and seventh elements is negative in Embodiment 1.

The distinctive design choice is not the basic retrofocus layout, which is conventional, but the rear-group correction strategy. The patent keeps the asphere out of the large front group and puts it on the smaller final element, while using the L5-L6-L7 cemented triplet to control higher-order spherical aberration and coma. This is a cost- and size-disciplined solution for a slow pancake wide angle, not a high-speed or anomalous-dispersion design.

## Element-by-Element Analysis

Element focal lengths are standalone thick-lens-in-air values unless the text explicitly discusses an in-situ cemented group. The hybrid resin layer is optically modeled as a separate refractive layer, but it is not counted as one of the eight glass elements in the production specification.

### L1 — Positive Meniscus, convex to object

nd = 1.69680, νd = 55.5. Glass: S-LAL14 (OHARA equivalent) — lanthanum crown. f = +64.2 mm.

L1 is the leading positive meniscus of the negative first sub-lens group. Its radii, R1 = +32.486 mm and R2 = +113.238 mm, give weak positive power. The patent explains why this positive element is needed: a single negative front element could provide retrofocus separation, but it would not adequately correct distortion. L1 moderates the front negative group's distortion contribution before L2 supplies the strong diverging power.

### L2 — Negative Meniscus, convex to object

nd = 1.80400, νd = 46.6. Glass: S-LAH65V (OHARA equivalent) — high-index lanthanum flint-side glass. f = -17.4 mm.

L2 is the strong negative member of group 11. Its surfaces, R3 = +20.902 mm and R4 = +8.178 mm, form a forward-convex negative meniscus. Together L1 and L2 produce $f_{la} = -26.10$ mm. The high refractive index permits strong negative power in a short axial length, while νd = 46.6 places it on the flint side of the crown/flint boundary despite the lanthanum family designation.

### L3 — Negative Meniscus, convex to object; cemented to L4

nd = 1.77250, νd = 49.6. Glass: S-LAH66 (OHARA equivalent) — high-index lanthanum glass, flint-side by Abbe number. f = -13.9 mm.

L3 is the negative member of the second front sub-group. The patent specifies that the third and fourth elements are cemented and that their combined refractive power is positive. L3's negative power is therefore not an isolated function; it is the balancing member that lets the L3-L4 doublet correct astigmatism and chromatic aberration without turning the second sub-group negative.

### L4 — Positive Meniscus / near plano-convex, convex to object; cemented to L3

nd = 1.69895, νd = 30.1. Glass: S-TIM35 (OHARA equivalent) — dense flint. f = +11.7 mm.

L4 is the thick positive rear member of the L3-L4 doublet. Its rear radius, R7 = +6403.341 mm, is effectively flat in this prescription, while the shared cemented interface R6 = +8.178 mm supplies most of the positive power. At 5.67 mm center thickness it is the thickest element in the patent example, and the patent explicitly ties a relatively thick positive element near the object side of the diaphragm to distortion correction.

The L3-L4 cemented doublet has only weak positive group power, $f_{lb} = +82.20$ mm. That weak positive result is analytically important: L3 and L4 are individually strong, but the cemented assembly is primarily a correction group rather than a strong focusing group.

### L5 — Positive Meniscus, convex to image; cemented triplet front

nd = 1.72916, νd = 54.7. Glass: S-LAL18 (OHARA equivalent) — lanthanum crown. f = +18.9 mm.

L5 is the first element behind the diaphragm and the first positive member of the rear cemented triplet. Its negative radii, R8 = -20.013 mm and R9 = -8.600 mm, make it a rearward-convex positive meniscus. In the patent's correction scheme it is one of the positive elements bracketing the buried negative L6.

### L6 — Negative Plano-Concave, concave to object; cemented triplet middle

nd = 1.74077, νd = 27.8. Glass: S-TIH13 (OHARA equivalent) — dense flint. f = -11.6 mm.

L6 is the buried negative element of the rear triplet. It is plano-concave in the prescription, with R9 = -8.600 mm on the object side and a plane rear interface at R10. The patent states that a negative element in the rear group generates negative spherical aberration and that cementing positive elements to both sides helps reduce higher-order spherical aberration. L6 is that element.

### L7 — Positive Plano-Convex, convex to image; cemented triplet rear

nd = 1.62299, νd = 58.2. Glass: S-BSM15 (OHARA equivalent) — barium crown. f = +30.7 mm.

L7 closes the L5-L6-L7 triplet. It is plano-convex, with the plane front interface at R10 and the image-side convex surface R11 = -19.142 mm. The full triplet is weakly negative in situ, with a computed focal length of about -972 mm. Treating L5, L6, and L7 only as standalone lenses would therefore misrepresent their actual role; the cemented assembly is a higher-order aberration corrector placed immediately before the final aspheric element.

### L8r — Hybrid compound-resin aspherical layer

nd = 1.52972, νd = 42.7. Glass: compound UV-curing resin, not a catalog optical glass. f ≈ -1946 mm in air.

The resin layer is approximately 0.10 mm thick at the vertex and carries the single aspherical surface, surface 12. Its paraxial power is negligible compared with the glass body of L8. Its role is not to add first-order power, but to supply an aspheric departure on a small-diameter rear element.

### L8 — Positive Meniscus, convex to image; final glass body

nd = 1.77250, νd = 49.6. Glass: S-LAH66 (OHARA equivalent). f = +24.0 mm for the glass body alone; f = +24.3 mm for the resin-plus-glass hybrid unit.

The final glass element is a positive meniscus with R13 = -69.548 mm and R14 = -14.886 mm. The resin layer is bonded to its object-side face. This is the final positive element of the rear group and the surface on which residual spherical aberration and coma correction is concentrated.

## Glass Identification and Selection

The patent publishes only nd and νd; it does not identify glass vendors. The glass names below are equivalent catalog matches against OHARA's published catalog values. They should not be read as confirmed Pentax/Hoya melt names. The close numerical matches make the OHARA designations useful for dispersion modeling and for describing the glass palette.

| Element | nd | νd | Equivalent catalog glass | Role |
|---|---:|---:|---|---|
| L1 | 1.69680 | 55.5 | S-LAL14 (OHARA), code 697555 | Lanthanum crown, leading positive meniscus |
| L2 | 1.80400 | 46.6 | S-LAH65V (OHARA), code 804466 | High-index lanthanum flint-side negative meniscus |
| L3 | 1.77250 | 49.6 | S-LAH66 (OHARA), code 773496 | High-index negative member of front cemented doublet |
| L4 | 1.69895 | 30.1 | S-TIM35 (OHARA), code 699301 | Dense flint positive member of front cemented doublet |
| L5 | 1.72916 | 54.7 | S-LAL18 (OHARA), code 729547 | Lanthanum crown, triplet front positive |
| L6 | 1.74077 | 27.8 | S-TIH13 (OHARA), code 741278 | Dense flint, triplet buried negative |
| L7 | 1.62299 | 58.2 | S-BSM15 (OHARA), code 623582 | Barium crown, triplet rear positive |
| L8 body | 1.77250 | 49.6 | S-LAH66 (OHARA), code 773496 | Final positive meniscus substrate |
| L8 resin | 1.52972 | 42.7 | Unmatched compound resin | Hybrid aspherical layer |

No ED, super-ED, fluorite, or anomalous-partial-dispersion glass is disclosed in the patent or production name. The chromatic correction strategy is conventional: the L3-L4 cemented doublet and L5-L6-L7 cemented triplet pair high-index crown/lanthanum glasses with dense flints to control axial and lateral color in a small package.

## Focus Mechanism

The patent uses two-group floating focus. The negative front group and positive rear group both move toward the object as the focus distance decreases, but the rear group moves slightly farther. The published Embodiment 1 focus travels are:

| Patent focus state | Front group travel X1 | Rear group travel X2 | X1/X2 |
|---|---:|---:|---:|
| β = -1/10 | 2.045 mm | 2.216 mm | 0.923 |
| β = -1/4 | 5.146 mm | 5.575 mm | 0.923 |

The ratio satisfies the patent's condition (6), $0.7 < X1/X2 < 0.94$. The movement is nearly linear across the two published states.

The production lens is specified at 0.2 m minimum focus and 0.17x maximum magnification, so the data file uses a close-focus model interpolated to β ≈ -0.17 rather than the patent's more extreme β = -1/4 state. That gives X1 ≈ 3.492 mm and X2 ≈ 3.784 mm. In the sequential prescription this is represented by reducing the stop-to-rear-group gap by 0.291 mm and increasing the back focal distance by 3.784 mm. This preserves the patent's floating ratio while matching the production close-focus magnification more closely than the β = -1/4 table state.

## Aspherical Surfaces

The only aspherical surface is surface 12, renamed `12A` in the data file. It is the object-side surface of the compound-resin layer bonded to the final glass element.

The patent uses the standard even-order sag equation:

$$
x = \frac{c y^2}{1 + \sqrt{1 - (1 + K)c^2y^2}} + A_4 y^4 + A_6 y^6 + A_8 y^8 + A_{10} y^{10} + \cdots
$$

where $c = 1/r$. The listed conic coefficient is the standard $K$ convention, not a shifted Japanese κ convention. In Embodiment 1 the base conic is spherical because $K = 0$.

| Surface | Base radius | K | A4 | A6 | A8 | A10 |
|---|---:|---:|---:|---:|---:|---:|
| 12A | -65.119 mm | 0.00 | -0.41055e-4 | -0.12824e-7 | 0 | 0 |

At the data-file semi-diameter of 8.3 mm, the polynomial departure is -0.199 mm relative to the spherical base. The negative fourth- and sixth-order terms deepen the concave object-side surface toward the edge. This is consistent with the patent's explanation that the final-element asphere corrects residual spherical aberration and coma while avoiding the higher cost and coma penalty of a larger front-group asphere.

## Conditional Expressions

All patent conditional expressions were recalculated from the transcribed Embodiment 1 prescription by paraxial trace. Conditions (1)-(5) are first-order power ratios; condition (6) is taken from the published floating-travel table and independently checked by ratio.

| # | Patent condition | Quantity | Computed | Patent table | Result |
|---|---|---:|---:|---:|---|
| (1) | -0.8 < fla/flb < -0.2 | fla/flb | -0.318 | -0.32 | satisfied |
| (2) | 0.7 < f/fR < 1.1 | f/fR | 0.987 | 0.99 | satisfied |
| (3) | 0.1 < d/f < 0.3 | d/f | 0.185 | 0.19 | satisfied |
| (4) | -15 < fF/f < -1.5 | fF/f | -1.912 | -1.91 | satisfied |
| (5) | -2.0 < fla/f < -0.5 | fla/f | -1.209 | -1.21 | satisfied |
| (6) | 0.7 < X1/X2 < 0.94 | X1/X2 | 0.923 | 0.92 | satisfied |

The supporting focal lengths are $f = 21.596$ mm, $f_{la} = -26.105$ mm, $f_{lb} = +82.201$ mm, $f_F = -41.292$ mm, and $f_R = +21.887$ mm. Embodiment 1 does not satisfy the patent's narrower optional preferred ranges for conditions (4') and (5'), but those are not required for the broader claimed design.

## Aberration Correction Strategy

The patent's aberration strategy is explicit and is borne out by the prescription.

Distortion is handled primarily in the front group. L1 is placed before the strong negative L2 because a single negative element would make distortion difficult to correct. The thick L4 element just ahead of the diaphragm is another distortion-control lever.

Astigmatism and field curvature are controlled by the split front group. Condition (1) governs the power ratio between the negative first sub-group and the weakly positive second sub-group. The cemented L3-L4 construction corrects the astigmatism left by the L1-L2 sub-group without requiring a large positive single element.

Spherical aberration and coma are concentrated in the rear group. L6 provides negative spherical aberration inside the cemented triplet; L5 and L7 bracket it to reduce higher-order residuals. The final hybrid asphere then trims residual spherical aberration and coma on a smaller-diameter element.

The verified surface-by-surface Petzval sum, using $\sum \phi/(n n')$, is +0.005916 mm⁻¹, corresponding to a Petzval radius of about 169 mm. This is a modestly positive Petzval result for an APS-C wide-angle design and is consistent with the patent's use of a negative front group, weakly positive front doublet, and rear correction group rather than a simple thin-lens power split.

## Verification Summary

The core prescription was rechecked against Table 1 and the Embodiment 1 figure before generating the data file.

| Quantity | Recomputed value | Patent value | Status |
|---|---:|---:|---|
| Effective focal length | 21.596 mm | 21.60 mm | matched |
| Back focal distance | 36.701 mm | 36.70 mm | matched |
| Front group focal length | -41.292 mm | supports condition (4) | matched by ratio |
| Rear group focal length | +21.887 mm | supports condition (2) | matched by ratio |
| L1-L2 sub-group focal length | -26.105 mm | supports conditions (1), (5) | matched by ratio |
| L3-L4 sub-group focal length | +82.201 mm | supports condition (1) | matched by ratio |
| L5-L6-L7 triplet focal length | about -972 mm | patent says negative | matched sign |
| Petzval sum | +0.005916 mm⁻¹ | not tabulated | independently computed |

The data file includes the stop as a separate `STO` surface 2.00 mm behind surface 7, matching the patent statement that the diaphragm is 2.00 mm behind the positive second sub-lens group. The listed surface 7-to-surface 8 patent spacing of 4.00 mm is therefore split as 2.00 mm + 2.00 mm.

The semi-diameters are not patent-published. They are estimated clear apertures constrained by paraxial ray envelopes, mechanical plausibility, and renderer geometry: `sd/|R| < 0.90`, front/rear element semi-diameter ratio ≤ 1.25, positive edge thickness, and signed cross-gap sag clearance. They should not be treated as manufacturer-published aperture data.

## Design Heritage and Context

This lens is a compact APS-C SLR retrofocus design in the traditional negative-front / positive-rear line. Its novelty lies in how aggressively the axial length is compressed while preserving a long SLR back focus. The design does not rely on exotic dispersion materials. It relies instead on a conventional high-index/dense-flint palette, two cemented correction groups, and a single hybrid asphere on the final element. That is consistent with the production role of the DA 21mm Limited: a small pancake wide-angle lens rather than a high-speed or apochromatic design.

## Sources and References

- US 7,411,746 B2, "Wide-Angle Lens System," Hoya Corporation, granted August 12, 2008. Patent prescription, asphere data, focus-travel data, condition table, and design rationale are taken from Embodiment 1, Table 1, the aspherical-surface definition, Table 11, and claims 1-22.
- Ricoh Imaging official product specifications for HD PENTAX-DA 21mm F3.2 AL Limited: focal length 21 mm, 8 elements in 5 groups, F3.2 maximum aperture, 68° angle of view, 0.2 m minimum focus, 0.17x maximum magnification, 7 diaphragm blades, KAF mount, Quick-Shift Focus System, and APS-C coverage.
- OHARA Corporation / OHARA GmbH published catalog pages and datasheets for S-LAL14, S-LAH65V, S-LAH66, S-TIM35, S-LAL18, S-TIH13, and S-BSM15. These are equivalent-glass matches for the patent's nd/νd pairs, not manufacturer-confirmed production melt disclosures.
