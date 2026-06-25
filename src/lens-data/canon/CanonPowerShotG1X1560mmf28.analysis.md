## Patent Reference and Design Identification

**Patent:** US 2013/0176385 A1
**Application Number:** US 13/734,819
**Filed:** January 4, 2013
**Published:** July 11, 2013
**Priority:** JP 2012-001061, January 6, 2012
**Inventor:** Hiroshi Saruwatari
**Assignee:** Canon Kabushiki Kaisha
**Title:** Zoom Lens and Image Pickup Apparatus Equipped with Same
**Embodiment analyzed:** Numerical Example 4, ¶0075, FIG. 7, FIGS. 8A/8B

Numerical Example 4 is the closest patent match for the built-in lens of the Canon PowerShot G1 X. The production lens was marketed as a 15.1–60.4 mm f/2.8–5.8, 4× optical zoom for Canon's 1.5-inch, approximately 14.3 MP CMOS compact camera. The patent example gives f = 15.57 / 30.33 / 58.93 mm, Fno = 2.88 / 4.58 / 5.94, zoom ratio 3.79×, and image height 10.34 / 11.57 / 11.75 mm. The telephoto-end image height corresponds to a 23.5 mm diagonal, effectively the same class as the G1 X's 18.7 × 14.0 mm sensor diagonal.

The structural match is also strong. Example 4 has 11 elements in 10 air-separated groups: three elements in the positive first unit, three in the negative second unit, four in the positive third unit including one cemented doublet, and one element in the positive fourth unit. Canon's published production specification states 11 elements in 10 groups. The patent further describes a fixed-lens image-pickup apparatus with an optical block G and image plane IP, rear focusing by the fourth lens unit, image stabilization by decentering the third lens unit, and an image recording area that differs between the wide-angle and telephoto ends. Those features agree with the G1 X class and with Canon's published description of the product.

Example 4 is preferred over Examples 1–3 for this lens because it is the closest focal-length and F-number match and because its mechanical section omits the separate flare-cut stop found in the first three examples. In Examples 1–3, a flare-cut stop occupies surface 21 and the fourth lens unit begins at surface 22. In Example 4, the aperture stop is surface 20 and the fourth-unit glass element begins immediately at surface 21.

## Optical Architecture

The lens is a positive-negative-positive-positive four-unit compact zoom. The first and second lens units move with loci convex toward the image side during zooming, the third lens unit moves toward the object side, and the fourth lens unit moves nonlinearly to correct image-plane variation. This is the all-moving four-unit scheme described in ¶0030 and ¶0035 rather than a two-moving-unit compact zoom.

The first lens unit, surfaces 1–6, has positive refractive power with f = +71.11 mm. It contains a negative meniscus followed by two positive lenses. Its job is to establish the front collecting power while controlling the off-axis ray height in a retractable barrel.

The second lens unit, surfaces 7–12, has negative refractive power with f = −18.28 mm. It is the principal variator and contains a dual-aspherical negative meniscus, a biconcave negative element, and a high-index positive meniscus. The patent identifies this three-lens second-unit construction as a mechanism for reducing aberration variation, especially wide-angle distortion and telephoto spherical aberration.

The third lens unit, surfaces 13–19, has positive refractive power with f = +20.73 mm. It contains a dual-aspherical positive meniscus, a cemented positive-negative doublet, and a low-dispersion positive rear meniscus. It is also the stabilization unit: the patent states that image shake is corrected by moving the third lens unit in a direction with a component perpendicular to the optical axis.

The aperture stop follows the third lens unit. In the patent's Example 4 prescription, the stop is surface 20 and moves with the third lens unit during zooming. The fourth lens unit, surfaces 21–22, is a single biconvex positive element with f = +44.82 mm and an aspherical rear surface. It is the rear-focus group.

The patent includes a flat optical block G after the fourth lens unit. In the data file, this block is not represented as glass surfaces because it is a sensor/filter block rather than a lens element. Its optical path is folded into the final air-equivalent back focal distance.

## Element-by-Element Analysis

### L1 — Negative Meniscus, convex to object (surfaces 1–2)

nd = 1.84666, νd = 23.9. Glass: S-TIH53 (Ohara) — dense flint. f = −134.0 mm.

L1 is a shallow negative meniscus with R1 = +257.708 mm and R2 = +78.524 mm. It is the first element in the positive first lens unit, where the patent specifically wants the first element to bend off-axis beams and share negative power through the air gap before the first positive element. Its high refractive index allows the element to provide the required negative contribution without extreme curvature.

### L2 — Biconvex Positive (surfaces 3–4)

nd = 1.69680, νd = 55.5. Glass: S-LAL14 (Ohara) — lanthanum crown. f = +136.5 mm.

L2 is a weak biconvex positive element. It has the lowest refractive index among the positive lenses in the first unit, so it supplies the patent's Np value in condition (2). The narrow air gap between L1 and L2 is not incidental; the patent treats the air lens between the first negative element and the first positive element as part of the wide-angle correction strategy.

### L3 — Positive Meniscus, convex to object (surfaces 5–6)

nd = 1.77250, νd = 49.6. Glass: S-LAH66 (Ohara) — lanthanum flint. f = +70.5 mm.

L3 completes the first lens unit. Its positive power is stronger than L2's and it brings the first unit to a net positive focal length of +71.11 mm. Although S-LAH66 is a lanthanum-family glass, the Abbe number is below 50, so in optical-design terms it belongs on the flint side of the crown/flint boundary.

### L4 — Negative Meniscus, convex to object, dual aspherical (surfaces 7A–8A)

nd = 1.85135, νd = 40.1. Glass: M-TAFD305 (Hoya) — moldable dense lanthanum flint. f = −17.8 mm.

L4 carries much of the second unit's negative power. The surface pair R7 = +426.612 mm and R8 = +14.644 mm forms a strong negative meniscus with most of the curvature on the image-side surface. Both surfaces are aspherical. Its high refractive index and moldable-glass catalog match make it a plausible location for Canon's production UA/aspherical special-element technology, but the patent does not label individual elements as UA or GMo, so that identification remains inferential.

### L5 — Biconcave Negative (surfaces 9–10)

nd = 1.77250, νd = 49.6. Glass: S-LAH66 (Ohara) — lanthanum flint. f = −39.0 mm.

L5 is a biconcave negative element and supplies supplemental negative power in the second unit. Its more moderate focal length reduces the burden on the dual-aspherical L4 and helps distribute second-unit correction across three independent lenses, the arrangement described in ¶0065.

### L6 — Positive Meniscus, convex to object (surfaces 11–12)

nd = 1.92286, νd = 18.9. Glass: S-NPH2 (Ohara) — ultra-high-index dense flint. f = +36.8 mm.

L6 is a high-index, high-dispersion positive element at the rear of the negative second unit. It tempers the net negative power of L2 while providing strong chromatic leverage. It is the highest-index glass in the example and one of the strongest individual positive elements outside the third-unit cemented pair.

### L7 — Positive Meniscus, convex to object, dual aspherical (surfaces 13A–14A)

nd = 1.84954, νd = 40.1. Glass: M-TAFD305 class (Hoya, inferred) — moldable dense lanthanum flint class. f = +18.1 mm.

L7 is the leading positive element of the third lens unit and has both surfaces aspherical. Its stored nd/νd pair does not exactly equal Hoya M-TAFD305, but νd matches and the refractive index is within a small catalog-class residual. It is therefore best recorded as an M-TAFD305-class or proprietary moldable dense-flint glass rather than as a hard catalog identification.

This element is close to the aperture stop and participates in the stabilization group. That location makes its aspheric correction important not only for ordinary zoom aberration balance but also for controlling decentering-induced aberrations when L3 is shifted for image stabilization.

### L8/L9 — Cemented Doublet (surfaces 15–17)

The cemented doublet has a standalone in-air focal length of −34.8 mm for the cemented pair. Its role is chromatic correction within the third lens unit.

L8 is the positive member. nd = 1.77250, νd = 49.6. Glass: S-LAH66 (Ohara) — lanthanum flint. f = +14.6 mm.

L9 is the negative member. nd = 1.80518, νd = 25.4. Glass: S-TIH6 (Ohara) — dense flint. f = −8.8 mm.

The cemented interface at R16 = +307.386 mm is weak. Most of L9's negative power comes from its steep rear surface, R17 = +6.914 mm. The Abbe-number separation between the two members is substantial, and the patent explicitly states that the cemented lens suppresses variation in chromatic aberration during zooming.

### L10 — Positive Meniscus, convex to image (surfaces 18–19)

nd = 1.48749, νd = 70.2. Glass: S-FSL5 (Ohara) — low-dispersion fluorophosphate crown. f = +91.9 mm.

L10 is a weak positive meniscus at the rear of the third lens unit. Its low dispersion gives the third unit a mild low-dispersion positive contribution after the strongly powered cemented pair. It also helps control the field as rays leave the stabilization group toward the stop and rear-focus element.

### L11 — Biconvex Positive, rear aspherical (surfaces 21–22A)

nd = 1.58313, νd = 59.4. Glass: S-BAL42 (Ohara) — barium crown. f = +44.8 mm.

L11 is the complete fourth lens unit. It is the rear-focus element and moves for focusing according to ¶0038–0039. Its front surface is very weak, R21 = +515.350 mm, while the rear surface R22 = −27.443 mm supplies most of the power and carries the aspherical correction. This is consistent with the patent's stated preference for a lightweight fourth unit that can focus rapidly.

## Glass Identification and Selection

The patent publishes refractive index and Abbe number but not glass names. The glass names below are catalog matches or catalog-class assignments from manufacturer data. L7 is deliberately marked as a class match because its stored nd is not an exact catalog value.

| Element |      nd |   νd | Catalog assignment                                | Vendor               | Confidence         |
| ------- | ------: | ---: | ------------------------------------------------- | -------------------- | ------------------ |
| L1      | 1.84666 | 23.9 | S-TIH53                                           | Ohara                | Exact nd, close νd |
| L2      | 1.69680 | 55.5 | S-LAL14                                           | Ohara                | Exact nd, close νd |
| L3      | 1.77250 | 49.6 | S-LAH66                                           | Ohara                | Exact              |
| L4      | 1.85135 | 40.1 | M-TAFD305                                         | Hoya                 | Exact              |
| L5      | 1.77250 | 49.6 | S-LAH66                                           | Ohara                | Exact              |
| L6      | 1.92286 | 18.9 | S-NPH2                                            | Ohara                | Exact              |
| L7      | 1.84954 | 40.1 | M-TAFD305 class / proprietary moldable equivalent | Hoya class, inferred | Class match        |
| L8      | 1.77250 | 49.6 | S-LAH66                                           | Ohara                | Exact              |
| L9      | 1.80518 | 25.4 | S-TIH6                                            | Ohara                | Exact              |
| L10     | 1.48749 | 70.2 | S-FSL5                                            | Ohara                | Exact              |
| L11     | 1.58313 | 59.4 | S-BAL42                                           | Ohara                | Exact              |

The design relies on conventional high/low-dispersion pairing rather than a strict apochromatic strategy. L10 is low dispersion, but there is no patent claim or catalog basis for treating the whole zoom as an APO design. The most important chromatic correction structure is the third-unit cemented doublet, supported by additional high-dispersion positive and negative elements in L2.

Canon's public product description states that the production lens uses one large-diameter UA element and three glass-molded lens elements. The patent example exposes three aspherical elements and five aspherical surfaces, but it does not name which production elements received Canon's UA or glass-molded labels. The patent therefore supports the presence of molded/aspherical technology but not a one-to-one public-label assignment.

## Focus Mechanism

The lens uses rear focusing. The fourth lens unit moves along the optical axis for focus, and the patent states that when focusing from infinity to short distance at the telephoto end, the fourth unit moves forward toward the object side. The patent gives zoom-position spacings at infinity focus only; it does not provide close-focus d20/d22 values for Example 4.

| Gap                                 |  Wide | Middle | Telephoto |
| ----------------------------------- | ----: | -----: | --------: |
| d6, L1–L2 unit gap                  |  1.00 |   6.55 |     17.05 |
| d12, L2–L3 unit gap                 | 20.46 |   8.58 |      0.90 |
| d20, stop-to-L4 gap                 | 11.00 |  23.50 |     35.91 |
| d22, L4-to-filter-block gap         |  6.82 |   5.36 |      5.00 |
| BF, air-equivalent L4 rear to image |  9.41 |   7.95 |      7.58 |

The data file implements the patent's infinity-focus zoom positions. It does not infer close-focus rear-group travel, because the production minimum focusing distances are manufacturer camera specifications rather than patent-tabulated optical spacings.

## Aspherical Surfaces

Five surfaces are aspherical: 7, 8, 13, 14, and 22. The data file labels them 7A, 8A, 13A, 14A, and 22A. The patent's equation uses the standard conic form with K as the conic constant:

$$
X = \frac{H^2/R}{1 + \sqrt{1 - (1+K)(H/R)^2}} + A_4H^4 + A_6H^6 + A_8H^8 + A_{10}H^{10}.
$$

The light-traveling direction is positive. Under this convention, K = 0 is a spherical base conic and K = −1 is a paraboloid.

**Surface 7A:** K = −9.92306e+003, A4 = +5.32644e−006, A6 = −2.24579e−008, A8 = +5.90488e−011. This is the weakly curved front surface of the second-unit negative meniscus.

**Surface 8A:** K = +1.87034e−001, A4 = −8.10318e−006, A6 = +2.62959e−007, A8 = −2.74956e−009, A10 = +1.36190e−011. This steep rear surface carries the strongest geometric aspherical constraint in the renderer because K is positive and R is short.

**Surface 13A:** K = −2.29599e−001, A4 = −2.19651e−005, A6 = −1.60274e−007, A8 = +8.38039e−010, A10 = −1.30242e−010. This is the front surface of the leading third-unit positive element.

**Surface 14A:** K = +4.80661e+001, A4 = −7.13403e−006, A6 = −3.77287e−008, A8 = −5.23381e−009, A10 = −4.54059e−011. This weakly curved rear surface balances the front-surface correction of L7.

**Surface 22A:** K = −7.99912e+000, A4 = −4.30088e−005, A6 = +5.11595e−008, A8 = +4.13624e−010, A10 = −1.51765e−012. This is the image-side surface of the rear-focus element.

## Image Stabilization

The third lens unit is the image-stabilization unit. The patent states that image shake is corrected by moving L3 in a direction having a component perpendicular to the optical axis. This avoids adding a separate stabilization group or a variable-angle prism. Because the stop is located near L3, the third unit has a smaller outside diameter than the front groups, reducing the moving mass for stabilization.

The third unit's aspherical front element and cemented doublet are both relevant to this function. The aspherical surfaces reduce aberration variation during zooming and decentering, while the cemented doublet suppresses chromatic aberration variation.

## Conditional Expressions

The patent gives eight conditional expressions and a Table 1 value for each numerical example. Recalculation from the Example 4 prescription produces the following values.

| Condition | Expression | Patent Table 1 | Recomputed from Example 4 | Status                                |
| --------- | ---------- | -------------: | ------------------------: | ------------------------------------- |
| (1)       | d/fw       |           0.04 |                   0.02698 | Within claimed bounds; Table mismatch |
| (2)       | Np         |          1.697 |                   1.69680 | Matches                               |
| (3)       | T1/fw      |           0.50 |                   0.47989 | Within claimed bounds; Table mismatch |
| (4)       | d/d23      |           4.67 |                   2.80000 | Within claimed bounds; Table mismatch |
| (5)       | m1/ft      |          −0.34 |                  −0.33229 | Rounding-level difference             |
| (6)       | Ds/fw      |           1.61 |                   1.59378 | Rounding/definition-level difference  |
| (7)       | D23t/ft    |          0.015 |                   0.01527 | Matches                               |
| (8)       | f_air/d    |        −305.92 |                   −626.85 | Within claimed bounds; Table mismatch |

The mismatches in conditions (1), (3), (4), and (8) are not OCR artifacts in the prescription. The surface table visibly gives d = 0.42 mm between L1 and L2, d23 = 0.15 mm between L2 and L3, and the Table 1 values cannot be made mutually consistent by substituting one alternate value for d. Conditions (1), (3), and (4) suggest a larger first air gap than the prescription, while condition (8) would require a different air-lens result. The numerical prescription is treated as authoritative because it independently reproduces the patent's system focal lengths, group focal lengths, back focal distances, image heights, and half-field angles.

## Verification Summary

Independent paraxial verification used a reduced-coordinate y-nu ray trace with ABCD matrix cross-check. The filter block G was included for verification of the patent's air-equivalent BF convention and then omitted from the data file by folding its optical path into the final BF.

| Quantity                           |      Wide |    Middle | Telephoto |
| ---------------------------------- | --------: | --------: | --------: |
| Computed EFL                       | 15.566 mm | 30.335 mm | 58.925 mm |
| Patent EFL                         |  15.57 mm |  30.33 mm |  58.93 mm |
| Computed paraxial BFD from L4 rear |  9.407 mm |  7.955 mm |  7.576 mm |
| Patent BF                          |   9.41 mm |   7.95 mm |   7.58 mm |
| Patent half-field angle            |    33.60° |    20.88° |    11.28° |
| Patent image height                |  10.34 mm |  11.57 mm |  11.75 mm |

The computed group focal lengths are L1 = +71.109 mm, L2 = −18.278 mm, L3 = +20.729 mm, and L4 = +44.816 mm, matching the patent's +71.11, −18.28, +20.73, and +44.82 mm values. Standalone thick-lens element focal lengths are L1 −134.0 mm, L2 +136.5 mm, L3 +70.5 mm, L4 −17.8 mm, L5 −39.0 mm, L6 +36.8 mm, L7 +18.1 mm, L8 +14.6 mm, L9 −8.8 mm, L10 +91.9 mm, and L11 +44.8 mm. The L8/L9 cemented doublet has a standalone net focal length of −34.8 mm.

The surface-by-surface Petzval sum, computed as Σφ/(n·n′), is +0.003944 mm⁻¹, corresponding to a Petzval radius of +253.5 mm. This value is recorded as a design diagnostic only; it is not a manufacturer-published specification.

The semi-diameters in the data file are not patent values. They were estimated from paraxial marginal and chief ray envelopes across the three zoom positions, then reduced where necessary to satisfy renderer constraints: conic height limit on surface 8A, edge thickness for L6 and L7, cross-gap sag between surfaces 8A–9 and 17–18, and element semi-diameter ratio. These are conservative visualization apertures rather than a production barrel drawing.

## Design Context

The G1 X was an unusual compact-camera zoom because it had to cover a sensor much larger than the small-sensor PowerShot G-series cameras that preceded it. The patent's variable image height, from 10.34 mm at wide angle to 11.75 mm at telephoto, is therefore a significant design clue: the optical design and camera electronics were intended to use different active image-recording areas across the zoom range.

The four-unit design spreads variable magnification across moving units rather than putting the burden entirely on a strongly powered second group. The result is a compact positive-lead zoom with a rear-focus group, third-unit stabilization, and five aspherical surfaces. The prescription is not a telephoto design in the strict TL/EFL sense at the wide and mid positions; it is a compact retractable zoom for a fixed-lens camera.

## Sources

- US 2013/0176385 A1, "Zoom Lens and Image Pickup Apparatus Equipped with Same," Numerical Example 4.
- Canon Camera Museum, "PowerShot G1 X" product page: https://global.canon/en/c-museum/product/dcc612.html
- Ohara optical glass data pages for S-TIH53, S-LAL14, S-LAH66, S-NPH2, S-TIH6, S-FSL5, and S-BAL42.
- Hoya optical glass data/cross-reference material for M-TAFD305 moldable glass class.
