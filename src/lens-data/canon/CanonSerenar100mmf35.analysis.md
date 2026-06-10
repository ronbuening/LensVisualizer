# Canon Serenar 100mm f/3.5 — Optical Analysis

## Patent Reference and Design Identification

**Patent:** DE 1,022,027 B / Auslegeschrift 1 022 027  
**Application Number:** C 10521 IX/42h  
**Filed:** 3 January 1955  
**Published:** 2 January 1958  
**Priority:** Japan, 29 August 1951  
**Inventor:** Hiroshi Ito  
**Applicant:** Canon Camera Company, Incorporated, Ōta-ku, Tokyo, Japan  
**Title:** *Fotografisches Teleobjektiv mit großer relativer Öffnung und geringem Gewicht*  
**Embodiment analyzed:** The sole numerical embodiment in the patent, tabulated in col. 3 and repeated in Claim 2; normalized to f = 100 mm, f/3.5, 2ω = 24°.

The patent discloses a compact telephoto objective of four air-spaced members and five glass elements. The numerical prescription is already normalized to a focal length of 100 mm, so no production scaling is needed for the Canon Serenar 100mm f/3.5.

The production identification is the **Canon Serenar 100mm f/3.5 I** in Leica thread mount. The match rests on convergent evidence:

1. **Element and group count.** The patent prescription resolves to five elements in four groups: a cemented front doublet followed by three air-spaced singlets. Canon's structured specification table gives 5 elements in 4 groups for the Serenar 100mm f/3.5 I.
2. **Focal length and aperture.** The patent example is f = 100 mm at f/3.5. The production lens is marketed as 100 mm f/3.5.
3. **Field coverage.** The patent states a 24° full angle of view. At f = 100 mm this corresponds to an image diagonal of approximately 42.5 mm, matching 35 mm full-frame coverage.
4. **Telephoto form.** The patent gives a front-vertex-to-image total length of 93.81 mm, shorter than the 100 mm focal length. The computed telephoto ratio is 0.938.
5. **Timing.** The Japanese priority date, 29 August 1951, precedes Canon's January 1953 marketing date by a plausible production lead interval.
6. **Uniqueness within the patent.** The patent publishes one worked numerical prescription; Claim 2 repeats the same numbers rather than introducing a second embodiment.

Canon's current public page contains an internal inconsistency: the structured table lists 4 groups / 5 elements, while the prose sentence says "Triotar type with 3 elements in 3 groups." The 3/3 statement matches Canon's earlier 100 mm f/4 lens, not this patent prescription. Under the project rule that manufacturer hard specifications take precedence but internally conflicted prose must be checked against the optical prescription, the 4-group / 5-element table value is used.

The patent prescription, transcribed front to rear, is:

| Surface | Radius r (mm) | Axial distance after surface (mm) | nd after surface | νd |
|---:|---:|---:|---:|---:|
| r1 | +40.00 | d1 = 6.00 | 1.6228 | 56.9 |
| r2 | −40.40 | d2 = 1.40 | 1.6200 | 36.3 |
| r3 | +143.00 | d3 = 6.65 | air | — |
| r4 | +30.25 | d4 = 2.00 | 1.6031 | 60.7 |
| r5 | +44.50 | d5 = 16.00 | air | — |
| r6 | −140.00 | d6 = 1.50 | 1.5263 | 51.0 |
| r7 | +20.31 | d7 = 9.30 | air | — |
| r8 | +41.25 | d8 = 2.00 | 1.6237 | 47.0 |
| r9 | −785.89 | BFD | air | — |

The sign convention is the modern sequential optical convention: positive radius means the center of curvature lies to the image side. A reduced-angle paraxial trace reproduces the patent's focal length, total length, and Petzval sum, so the sign convention and transcription are internally consistent.

## Optical Architecture

The design is a compact, all-spherical **positive–positive–negative–positive telephoto**. It is not a triplet or a simple long-focus Tessar derivative. The first two members form the converging front collector, the third member supplies the principal negative telephoto action, and the fourth member recollects the beam toward the image plane.

By member, the independently computed thick-lens powers are:

| Member | Construction | Standalone focal length |
|---|---|---:|
| I | cemented positive meniscus doublet | +86.15 mm |
| II | positive meniscus singlet | +148.78 mm |
| III | low-index biconcave negative singlet | −33.59 mm |
| IV | weakly asymmetric biconvex positive singlet | +62.90 mm |

The front collector, members I and II including the d3 air space, computes to **+57.05 mm**. The rear block, members III and IV including the d7 air space, computes to **−106.61 mm** even though member IV itself is positive. That negative rear-block power is what moves the principal plane forward enough for the optical total length to remain below the focal length.

The patent's central design decision is the low-index biconcave third member. The text states that placing a biconcave negative element after the second air gap satisfies the telephoto condition, and that using an index below 1.55 reduces the Petzval sum and improves the edge field. The independent Petzval audit confirms that member III supplies the largest negative field-curvature contribution in the system.

## Element-by-Element Analysis

### Member I — Cemented Achromatic Doublet, Positive Meniscus Convex to Object

Member I is a cemented two-element positive meniscus. Its external surfaces are r1 = +40.00 and r3 = +143.00, so the group is convex to the object and weakly concave toward the image. The cemented interface r2 = −40.40 is the chromatically active surface described in Claim 1.

**L11 — Biconvex Positive Crown.** nd = 1.62280, νd = 56.9. Glass: SK10 / S-BSM10 / E-BACD10 class dense barium crown. f = +33.22 mm. The nearly symmetric ±40 mm curvatures make this the principal positive power element in the front group.

**L12 — Biconcave Negative Flint.** nd = 1.62000, νd = 36.3. Glass: F2 / S-TIM2 class flint. f = −50.66 mm. The element shares the cemented r2 surface and exits through the much weaker r3 surface. It is the achromatizing partner of L11.

The first-order chromatic sum for the two elements, using standalone element power divided by νd, is approximately −1.48 × 10⁻⁵. That is negligible beside the individual element powers, so the doublet is effectively balanced for axial color at first order. This agrees with the patent's statement that the cemented surface of member I compensates chromatic aberration left by the divergent member.

### Member II — Positive Meniscus Convex to Object

nd = 1.60310, νd = 60.7. Glass: SK14 / S-BSM14 / BACD14 class dense barium crown. f = +148.78 mm.

Member II is a weak positive meniscus with r4 = +30.25 and r5 = +44.50. Its role is not high net power; it continues the front convergence, helps shape the marginal-ray path before the large d5 air interval, and participates in the negative air lens formed between r3 and r4. Its high Abbe number keeps the front collector's residual color low.

### Member III — Biconcave Low-Index Negative

nd = 1.52630, νd = 51.0. Glass: unmatched low-index crown/flint-class glass, code 526/510; no current public catalog match found. f = −33.59 mm.

Member III is the principal telephoto-compressing element. Its front surface r6 = −140.00 is weak, while the rear surface r7 = +20.31 is strong; the rear surface therefore supplies most of the negative power. The patent calls for this element to have nd < 1.55, and the published value of 1.5263 is the lowest index in the system.

The Petzval contributions of r6 and r7 sum to approximately −0.01944 mm⁻¹. This is the largest negative block in the lens and is the main reason the net Petzval sum is close to zero rather than strongly positive. The same two radii also satisfy the patent's form constraints: |r6| = 1.40 f and r7 = 0.203 f.

### Member IV — Biconvex Positive Rear Collector

nd = 1.62370, νd = 47.0. Glass: BaF8 / E-BAF8 / K-BaF8 class barium flint. f = +62.90 mm.

Member IV follows the negative member and turns the diverging beam back toward the image plane. Its first surface r8 = +41.25 supplies essentially all of its optical action; the rear surface r9 = −785.89 is so weak that the element behaves close to a plano-convex rear collector. It also sets the final back focal distance, which computes to 48.951 mm at infinity.

## Glass Identification and Selection

The patent gives nd and νd values but no maker-specific glass names. The glass labels below should therefore be read as catalogue-class identifications, not proof of the exact production melt. HOYA's cross-reference tables use six-digit nd/νd codes and explicitly treat the table as an index/code correspondence rather than a guarantee of identical chemical composition.

| Element | nd | νd | Catalogue-class identification | Confidence | Optical role |
|---|---:|---:|---|---|---|
| L11 | 1.6228 | 56.9 | SK10 / S-BSM10 / E-BACD10 class dense barium crown | high | main positive crown in front doublet |
| L12 | 1.6200 | 36.3 | F2 / S-TIM2 class flint | high | achromatizing partner to L11 |
| L2 | 1.6031 | 60.7 | SK14 / S-BSM14 / BACD14 class dense barium crown | high | weak positive meniscus, low color |
| L3 | 1.5263 | 51.0 | unmatched low-index crown/flint-class glass, code 526/510 | unmatched; patent nd/νd used directly | low-index negative Petzval-control element |
| L4 | 1.6237 | 47.0 | BaF8 / E-BAF8 / K-BaF8 class barium flint | high | rear positive collector |

The earlier draft's broad glass strategy was correct, but its L3 wording still implied too much catalog certainty. The patent value maps to the six-digit code 526/510, and the governing optical fact is the patent requirement that member III have nd < 1.55. No current Hoya/Schott/OHARA/HIKARI/Sumita/CDGM public catalog entry reviewed for this pass was close enough to name the melt. The element is therefore treated as unmatched, with the patent nd/νd used directly rather than a speculative KF2 or N-KF9 label.

No element is fluorite, ED glass, or anomalous partial-dispersion glass. The chromatic design is conventional: the front cemented doublet balances axial color, while the low-index third member is chosen primarily for field-curvature control, not secondary-spectrum correction.

## Focus Mechanism

The patent publishes only the infinity prescription. There are no variable internal spaces and no floating group, so the production implementation is treated as **unit focusing**: the optical cell advances as a rigid group while all internal spacings remain fixed.

Canon's published closest focusing distance is 1 m. If that 1 m distance is interpreted in the usual camera specification sense, from image plane to object, the thick-lens unit-focus calculation requires the infinity BFD of 48.951 mm to increase to approximately 61.682 mm, an extension of 12.731 mm. The corresponding object distance from the front vertex is about 893.5 mm, and the computed magnification is approximately 0.127×, or about 1:7.9. Canon does not publish a maximum-magnification value for this lens, so this remains a calculation from the patent model and the manufacturer-stated close-focus distance.

The production lens specification gives a 15-blade diaphragm, minimum aperture f/22, 34 mm filter thread, 44 × 69.5 mm barrel dimensions, and 205 g weight. These are mechanical/manufacturer specifications and are not part of the patent optical prescription.

## Aperture Stop and Semi-Diameter Assumptions

The patent does not tabulate semi-diameters or the exact axial stop position. The data file therefore uses conservative estimated clear apertures and inserts the stop in the d5 air interval, 2.0 mm behind r5 and 14.0 mm before r6. This position is not claimed by the patent; it is a rendering and paraxial-aperture model chosen because the stop must lie in a mechanically plausible air gap and because the resulting entrance pupil gives f/3.5.

At that inferred stop location, a stop semi-diameter of 11.155 mm produces f/3.5 from the computed 99.979 mm EFL. The element semi-diameters in the data file are constrained by three independent checks: edge thickness remains positive and practically plausible, no spherical surface exceeds the renderer's rim limit, and the r5-to-stop sag intrusion remains below 90% of the 2.0 mm split gap.

These semi-diameters should not be read as factory clear-aperture measurements. They are patent-derived estimates for LensVisualizer. Full-frame corner bundles at f/3.5 are expected to be vignetted by such a small 1950s telephoto; the patent itself provides no illumination table.

## Air Lenses

Claim 1 describes the air space between members I and II as a thick diverging meniscus. This air lens is bounded by r3 = +143.00 and r4 = +30.25. Both surfaces have positive radius, but r4 is much stronger, so the air volume has meniscus form and negative optical effect. The patent treats this curved air interval as part of the correction system rather than as mere mechanical clearance.

The larger d5 air interval is the dominant separation between the positive front collector and the negative telephoto member. It is one of the explicitly bounded quantities in Claim 1.

## Conditional Expressions

The patent states the following form constraints, evaluated here at f = 100 mm:

| Patent condition | Evaluated quantity | Value | Result |
|---|---:|---:|:--:|
| 0.1 f ≤ d5 ≤ 0.2 f | d5 | 16.00 mm = 0.160 f | pass |
| 0.06 f ≤ d7 ≤ 0.16 f | d7 | 9.30 mm = 0.093 f | pass |
| 0.8 f ≤ |r6| ≤ 3 f | |r6| | 140.00 mm = 1.400 f | pass |
| 0.15 f ≤ r7 ≤ 0.30 f | r7 | 20.31 mm = 0.203 f | pass |
| nd(III) < 1.55 | nd of member III | 1.5263 | pass |
| Σ axial glass thicknesses < 0.16 f | d1 + d2 + d4 + d6 + d8 | 12.90 mm = 0.129 f | pass |

The r6 condition is evaluated on magnitude because the numerical surface radius is negative under the adopted sign convention.

## Verification Summary

The prescription was re-traced with an independent reduced-angle paraxial matrix model. The field-curvature value below uses the surface-by-surface Petzval formula φ/(n · n′), not a thin-element approximation.

| Quantity | Patent value | Independent computation |
|---|---:|---:|
| Effective focal length | 100 mm | 99.97897 mm |
| Back focal distance | not tabulated | 48.95125 mm |
| Front vertex to final image plane | 93.81 mm | 93.80125 mm |
| Telephoto ratio | < 1 | 0.9382 |
| Sum of axial glass thicknesses | 12.9 mm | 12.90 mm |
| Petzval sum | 0.0012 mm⁻¹ | 0.001287 mm⁻¹ |

The computed focal length and total length reproduce the patent within the precision of the printed prescription. The Petzval result also matches the patent's rounded value.

## Design Heritage and Context

The patent positions the design against earlier telephoto objectives with a large air gap between separated positive and negative groups. According to the patent text, those earlier designs left excessive spherical aberration and distortion, while contemporary lightweight telephotos had not reached f/3.5 at comparable size.

Canon's later historical summary describes the f/4 Triotar-type 100 mm as Canon's first 100 mm lens and the 100 mm f/3.5 as the compact telephoto-type successor with five elements in four groups. That distinction resolves the apparent conflict between Canon's prose sentence on the museum page and the structured 4/5 specification table for this lens.

## Sources

- DE 1,022,027 B / Auslegeschrift 1 022 027, *Fotografisches Teleobjektiv mit großer relativer Öffnung und geringem Gewicht*, Canon Camera Company, Inc.; inventor Hiroshi Ito; priority Japan, 29 August 1951; published 2 January 1958.
- Canon Camera Museum, "Serenar 100mm f/3.5 I," official product/specification page.
- Canon U.S.A., "The Never Ending Challenge — The History of Canon Lenses," Canon RF Lens World history page.
- HOYA Group Optics Division, "Glass Cross Reference Index" and "Glass Polished Lenses" glass-type tables.
- OHARA and other manufacturer catalogue data used only for glass-class cross-checks where the patent supplies no maker-specific names.
