# Canon EF-M 22mm f/2 STM — Patent Example 1 Optical Analysis

## Patent Reference and Design Identification

**Patent:** US 8,854,747 B2; US 2013/0242414 A1
**Inventor:** Shunji Iwamoto
**Applicant:** Canon Kabushiki Kaisha
**Priority:** JP priority, March 15, 2012
**Filed:** March 11, 2013
**Published:** September 19, 2013
**Granted:** October 7, 2014
**Title:** Optical System and Image Pickup Apparatus Including the Same
**Embodiment analyzed:** Example 1 / First Numerical Example

The prescription analyzed here is **Example 1 / First Numerical Example** of Canon U.S. Patent **US 8,854,747 B2**, *Optical System and Image Pickup Apparatus Including the Same*. The applicant and assignee are Canon Kabushiki Kaisha, the inventor is Shunji Iwamoto, the Japanese priority date is 15 March 2012, the U.S. filing date is 11 March 2013, the U.S. publication is US 2013/0242414 A1 on 19 September 2013, and the grant date is 7 October 2014.

The patent does not name the retail lens. The correspondence to the **Canon EF-M 22mm f/2 STM** is nevertheless strong enough to treat Example 1 as the production-related prescription, with the normal qualification that the patent is a generic optical-system filing rather than a retail service drawing.

1. Example 1 gives **f = 21.78 mm**, **F-number = 2.05**, **image height = 13.66 mm**, and **half field angle = 32.09°**. These values correspond to a 22 mm f/2 APS-C normal-wide lens with a diagonal field of about 64°.
2. Example 1 is a **7-element / 6-group** system with a single rear aspherical element carrying two aspherical surfaces. Canon product literature for the EF-M 22mm f/2 STM lists 7 elements in 6 groups and one aspherical element.
3. Canon's Camera Museum describes the production lens as using a glass-mold aspherical element and a floating focus system. Example 1 places both aspherical surfaces on the seventh element and publishes focus-dependent spacings.
4. The production lens was marketed in September 2012, close to the March 2012 Japanese priority date.

The patent discloses the radii, spacings, refractive indices, Abbe numbers, aspherical coefficients, and two focus states. It does not disclose Canon internal optical codes, production clear apertures, coating data, mechanical carrier boundaries, or sensor-cover glass.

## Optical Architecture

Example 1 is a compact APS-C normal-wide prime using a weak positive front unit before a forward aperture stop and a stronger positive rear unit after the stop. It is not a telephoto design in the optical-design sense: the distance from the first surface to the image plane is about **41.33 mm**, substantially longer than the focal length. It is also not a long-back-focus retrofocus design: the paraxial back focal distance from the last optical surface is **14.198 mm**, giving **BFD/EFL = 0.651**.

The first lens unit, L1, consists of a biconcave negative first element followed by a high-index biconvex positive element. Its computed in-air group focal length is about **+57.7 mm**, so it is weakly positive as a unit even though the first element is individually strong and negative. The stop lies after this two-element unit.

The second lens unit, L2, is the main positive unit. It begins with a cemented positive/negative achromat near the stop, followed by a negative meniscus, a biconvex high-index positive element, and a weak positive double-aspherical final element. Its computed in-air focal length is about **+27.1 mm**.

| Patent label | Physical element | Power / form | Principal role |
|---|---:|---|---|
| L11 | Element 1 | Biconcave negative | Front field-angle reducer and front-diameter control |
| L12 | Element 2 | Biconvex positive | Restores convergence before the stop |
| SP | Aperture stop | — | Forward stop for compactness and image-side telecentricity |
| L21p + L21n | Elements 3–4 | Cemented positive/negative doublet | Axial chromatic correction near the stop |
| L22 | Element 5 | Negative meniscus, concave to object | Spherical-aberration and Petzval correction |
| L23 | Element 6 | Biconvex positive | Rear convergence and telecentricity control |
| L24 | Element 7 | Weak positive double-aspherical meniscus | Field, coma, and distortion correction near the image plane |

The design problem addressed by the patent is a small, wide-angle digital-camera lens with a forward stop and a reduced element count. That layout helps compactness and image-side telecentricity but tends to aggravate spherical aberration, axial chromatic aberration, field curvature, coma, and distortion. Example 1 addresses those problems with a stop-adjacent cemented achromat, a strong negative L22 meniscus, a high-index L23 relay element, and a final double-aspherical correction element.

## Element-by-Element Analysis

### L11 — Biconcave negative front element

**nd = 1.51742, νd = 52.4. Glass: OHARA S-NSL36 class, code 517524. f = −17.00 mm.**

L11 is the field-opening negative element. Its individual focal length is comparable in magnitude to the whole system focal length, so it is not merely a mild protective or field-trimming component. The patent states that placing a negative lens closest to the object reduces the angle between off-axis rays and the optical axis, helping keep the front effective diameter small.

The glass is a medium-index, moderate-dispersion normal glass. This is appropriate for a front negative element whose main role is ray geometry and off-axis control rather than special-dispersion correction. Excessive negative power in this position would aggravate axial aberrations; Example 1 balances L11 with the high-index positive L12 and the rear corrective group.

### L12 — Biconvex positive element before the aperture stop

**nd = 1.83481, νd = 42.7. Glass: OHARA S-LAH55V class, code 835427. f = +14.22 mm.**

L12 is the positive element of the first unit. It restores convergence after L11 and prevents the front unit from behaving as a simple negative retrofocus group. Its high refractive index allows strong positive power without an excessive lens diameter or extremely short radii on both surfaces.

The element also prepares the axial ray cone for the forward stop. In a compact f/2 system, insufficient positive power before the stop would force the rear group to supply too much convergence, increasing spherical aberration and coma. L12 is therefore a compact power-balancing element rather than an ED or secondary-spectrum corrector.

### L21p + L21n — Stop-adjacent cemented achromat

**L21p: nd = 1.88300, νd = 40.8. Glass: OHARA S-LAH58 class, code 883408. f = +8.44 mm.**

**L21n: nd = 1.78472, νd = 25.7. Glass: OHARA S-TIH11 class, code 785257. f = −8.87 mm.**

The cemented doublet is the primary axial-color correction device. The patent places it closest to the stop within the second unit because the on-axis ray bundle is broad near the stop while off-axis chief-ray height is comparatively smaller. This position is efficient for axial chromatic correction in a fast lens.

The Abbe-number ratio is:

$$
\nu_{d21p}/\nu_{d21n}=40.8/25.7=1.588,
$$

which agrees with the patent's tabulated **1.587** after rounding. The positive member is a very high-index lanthanum glass; the negative member is a dense flint. Their individual powers are strong, but the cemented doublet as a combined in-air group is much weaker, **+53.60 mm**, because the positive and negative powers partly cancel. That cancellation supplies chromatic leverage without adding excessive first-order power.

### L22 — Negative meniscus, concave to the object side

**nd = 1.62588, νd = 35.7. Glass: OHARA S-TIM1 class, code 626357. f = −14.05 mm.**

L22 is the fifth lens in the patent's numbering and one of the design's main aberration-control elements. Its object-side surface has **R221 = −8.483 mm**, a strong concavity facing the object side. The patent identifies this lens as correcting spherical aberration and the Petzval sum that become difficult when the aperture is increased.

The glass has moderate index and relatively low Abbe number. The patent's refractive-index condition for L22 is significant: too high an index makes the Petzval sum too positive and undercorrects field curvature, while too low an index risks overcorrecting the Petzval sum and worsening axial color. Example 1 uses **nd = 1.62588**, inside the patent's preferred range.

The geometry is also important. The stop-to-L22-front distance at infinity is **11.18 mm**, giving **R221/D2 = −0.759**, essentially the patent's tabulated **−0.760**. This places the strongly concave surface in a near-concentric relationship with the stop, reducing the incidence angle of off-axis rays while allowing a strong negative surface to correct field curvature and spherical aberration.

### L23 — Biconvex positive rear relay element

**nd = 1.88300, νd = 40.8. Glass: OHARA S-LAH58 class, code 883408. f = +14.59 mm.**

L23 is a strong rear positive element. The patent identifies the sixth lens as a positive lens with a convex surface facing the image side and explains that this positive power helps provide image-side telecentricity.

The computed ratio is:

$$
f/f_{23}=21.78/14.585=1.493,
$$

matching the patent table. The high-index S-LAH58-class glass permits this power in a compact form. Too much L23 power would improve telecentricity but increase barrel distortion; too little would weaken telecentricity. L23 therefore acts as a controlled rear relay between the negative L22 and the final field-correction asphere.

### L24 — Weak positive double-aspherical final meniscus

**nd = 1.58313, νd = 59.4. Glass: OHARA BAL42 family, code 583594; S-BAL42 constants and L-BAL42 low-Tg counterpart both match the optical family. f = +74.37 mm.**

L24 is the final glass element. It is weak in first order but important in higher-order correction. Both surfaces are aspherical in Example 1, corresponding to patent surfaces 13 and 14. Canon product literature identifies the production lens as having one aspherical element, consistent with this final double-aspherical element.

The patent states that the seventh lens has positive refractive power whose positive power becomes smaller from the center toward the edge. That is the expected function of this final element: it trims field curvature, coma, and distortion near the image plane after the compact forward-stop layout has established the main power distribution.

The patent constants match OHARA S-BAL42 and the same six-digit 583594 BAL42 family. Canon's statement that the production lens uses a glass-mold aspherical element makes an L-BAL42-type low-softening implementation plausible, but the patent table alone does not identify the production melt, supplier, or molding process.

## Glass Identification and Selection

The patent gives only d-line refractive index and Abbe number, not manufacturer names. The identifications below are catalog matches to OHARA published values. Cross-vendor equivalents are intentionally not used as primary labels because the patent is silent on supplier identity and the OHARA codes match the six-digit values directly.

| Element | Patent nd / νd | Six-digit code | Catalog identification | Optical role |
|---|---:|---:|---|---|
| L11 | 1.51742 / 52.4 | 517524 | OHARA S-NSL36 class | Moderate-dispersion front negative element |
| L12 | 1.83481 / 42.7 | 835427 | OHARA S-LAH55V class | Compact high-index positive power |
| L21p | 1.88300 / 40.8 | 883408 | OHARA S-LAH58 class | Positive member of axial-color doublet |
| L21n | 1.78472 / 25.7 | 785257 | OHARA S-TIH11 class | Dense-flint negative doublet member |
| L22 | 1.62588 / 35.7 | 626357 | OHARA S-TIM1 class | Negative meniscus for spherical/Petzval control |
| L23 | 1.88300 / 40.8 | 883408 | OHARA S-LAH58 class | Rear positive telecentricity/control element |
| L24 | 1.58313 / 59.4 | 583594 | OHARA S-BAL42 / L-BAL42 family | Glass-mold-compatible final aspherical element |

No element is identified by the patent or Canon product literature as ED, super-ED, fluorite, or anomalous partial-dispersion glass. The color-correction strategy is conventional but compact: a high-index positive lanthanum glass and a dense flint are cemented immediately behind the stop, with the remaining glasses selected primarily for compact power, Petzval balance, and manufacturable shape.

## Focus Mechanism

The patent publishes two focus states: infinity and a finite-conjugate state at lateral magnification **−0.1×**. It does not publish the production minimum-focus setting. Canon product literature gives the retail lens a **0.15 m** minimum focusing distance and **0.21×** maximum magnification, but those production end-point spacings are not in the patent table.

| Focus state | Stop-to-L2 spacing S | Rear spacing d14 | Comment |
|---|---:|---:|---|
| Infinity | 3.14 mm | 14.20 mm | Patent Example 1 infinity state |
| β = −0.1× | 2.25 mm | 16.47 mm | Patent finite-conjugate state |
| Change | −0.89 mm | +2.27 mm | Rear unit shifts relative to stop/front unit; image-side spacing increases |

A finite-conjugate paraxial solve using the patent's second state gives an object distance of **221.7 mm from the first surface** and magnification **−0.0997×**, confirming that the table is internally consistent with the stated −0.1× condition.

The focus behavior should not be described as simple unit focus. The patent states that, when focusing toward a nearby object, the air gap between the first lens unit and the second lens unit is made smaller, and it allows the stop to move with L1, with L2, or separately. Canon's product sources describe the retail lens as an inner/floating focus design driven by STM. The data file therefore preserves the two patent-tabulated variable gaps, **S** and **d14**, without extrapolating to the production 0.15 m endpoint.

## Aspherical Surfaces

Example 1 has two aspherical surfaces, both on L24: patent surfaces **13** and **14**. The patent uses the standard even-order sag form:

$$
X(H)=\frac{H^2/R}{1+\sqrt{1-(1+K)(H/R)^2}}+A_4H^4+A_6H^6+A_8H^8+A_{10}H^{10}+A_{12}H^{12}.
$$

Here X is measured along the optical axis, H is radial height, the light-propagation direction is positive, R is the paraxial radius, and K is the conic constant. Example 1 lists **K = 0** for both aspherical surfaces. No conversion from an alternative Japanese κ convention is needed for this U.S. patent text.

| Surface | Element | R | K | A4 | A6 | A8 | A10 | A12 |
|---|---|---:|---:|---:|---:|---:|---:|---:|
| 13A | L24 front | −65.386 | 0 | −1.06417e−4 | −2.68284e−7 | −5.69512e−9 | −5.83577e−14 | −4.69051e−14 |
| 14A | L24 rear | −26.414 | 0 | +6.63637e−6 | −1.81488e−7 | −8.38345e−10 | −2.73326e−12 | +3.03992e−14 |

Surface 13A has negative fourth-, sixth-, eighth-, tenth-, and twelfth-order coefficients, producing increasing negative departure from its spherical base. Surface 14A has a small positive fourth-order term followed by negative sixth-, eighth-, and tenth-order terms and a small positive twelfth-order term. The combined profile reduces the peripheral positive contribution of L24 and trims off-axis aberrations close to the image plane.

The patent does not publish clear-aperture semi-diameters. The data file therefore uses inferred renderer-safe semi-diameters, and this analysis does not quote aspherical rim departures as production measurements.

## Data File Semi-Diameter Treatment

The prescription table does not include semi-diameters. The accompanying `CanonEFM22mmf2STM.data.ts` file therefore uses inferred values rather than Canon-published clear apertures.

The first pass used a paraxial marginal ray at the patent F-number and a full-field chief ray at the patent image height. The resulting envelopes were then constrained by the lens-renderer requirements: **sd/|R| < 0.90**, front/rear surface SD ratio not exceeding **1.25**, signed cross-gap sag intrusion not exceeding **90%** of the air gap, aspherical rim slope below the renderer limit, and edge thickness above about **0.5 mm** where the patent geometry permits. The front group was also checked against the production 43 mm filter size.

The most restrictive inferred aperture occurs around the air gap between L21n and L22. At surface 8 / surface 9, the facing curvatures and the 3.26 mm air gap limit the common renderer semi-diameter to about **5.61 mm** under the signed cross-gap rule, so surface 8 is intentionally smaller than the full paraxial off-axis envelope. This is a data-file rendering constraint, not a statement about the production mechanical aperture.

## Conditional Expressions and Verification Summary

The prescription was rechecked with an independent first-order y–nν paraxial ray trace using the patent's Example 1 radii, spacings, refractive indices, and infinity-focus variable spacing.

| Quantity | Patent value | Recalculated value | Comment |
|---|---:|---:|---|
| Effective focal length | 21.78 mm | 21.7907 mm | Matches within prescription precision |
| Infinity back focal distance | 14.20 mm | 14.1980 mm | Matches patent d14 at infinity |
| Half field angle | 32.09° | 32.10° | From image height 13.66 mm and computed EFL |
| F-number | 2.05 | 2.05 by stop sizing | Physical stop semi-diameter used in data file: 5.440 mm |
| Finite-conjugate magnification | −0.1× | −0.0997× | Solved from S = 2.25 mm and d14 = 16.47 mm |
| Petzval sum | — | +0.00734 mm⁻¹ | Surface-by-surface sum using φ/(n·n′) |

The main standalone in-air element focal lengths are:

| Element | Standalone focal length |
|---|---:|
| L11 | −17.00 mm |
| L12 | +14.22 mm |
| L21p | +8.44 mm |
| L21n | −8.87 mm |
| L21 cemented doublet as a group | +53.60 mm |
| L22 | −14.05 mm |
| L23 | +14.59 mm |
| L24 | +74.37 mm |

The recalculated conditional-expression values are:

| Patent condition | Recalculated Example 1 value | Patent table value |
|---|---:|---:|
| D1/Dt | 0.165 | 0.166 |
| νd21p/νd21n | 1.588 | 1.587 |
| Nd22 | 1.62588 | 1.626 |
| R221/f | −0.389 | −0.389 |
| R221/D2 | −0.759 | −0.760 |
| f/f23 | 1.493 | 1.493 |
| f/f11 | −1.280 | −1.281 |

The recalculated values agree with the patent's first numerical example after rounding. No sign reversal or OCR correction was required for the Example 1 radii, spacings, refractive indices, or aspherical coefficients.

## Sources

1. Canon, **US 8,854,747 B2**, *Optical System and Image Pickup Apparatus Including the Same*, Shunji Iwamoto, granted 7 October 2014. Primary source for the optical prescription, aspherical coefficients, conditional expressions, and two focus-state spacings.
2. Canon Camera Museum, **EF-M22mm f/2 STM**. First-party product source for the market date, element/group count, aspherical element count, glass-mold asphere statement, floating focus statement, closest focusing distance, maximum magnification, filter size, dimensions, and weight.
3. Canon USA Support, **EF-M 22mm f/2 STM technical specifications**. First-party product source for focal length, maximum aperture, construction, diagonal angle of view, inner focusing system, closest focusing distance, filter size, and dimensions.
4. Canon regional specification page, **EF-M 22mm f/2 STM specifications**. First-party product source for 35 mm equivalent focal length, angle of view, optical construction, diaphragm blades, minimum aperture, closest focusing distance, maximum magnification, lack of image stabilizer, STM actuator, and physical specifications.
5. OHARA Corporation and OHARA GmbH public optical-glass catalogs and datasheets for S-NSL36, S-LAH55V, S-LAH58, S-TIH11, S-TIM1, S-BAL42, and L-BAL42. Used only to map the patent's nd/νd pairs to catalog glass classes.
