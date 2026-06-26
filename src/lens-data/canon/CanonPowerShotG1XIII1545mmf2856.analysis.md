## Patent Reference and Design Identification

**Patent:** JP 2018-106021 A (Japan)
**Application Number:** 特願2016-252696 (P2016-252696)
**Filed:** December 27, 2016
**Published:** July 5, 2018
**Inventor:** Ito Daisuke (伊藤 大介)
**Applicant:** Canon Inc. (キヤノン株式会社)
**Title:** ズームレンズ及びそれを有する撮像装置 (Zoom lens and image pickup apparatus having the same)
**Embodiment analyzed:** Numerical Example 1 (数値データ1)

JP 2018-106021 A describes compact zoom lenses for image-pickup devices with a rear positive resin meniscus element, GRP, in the most image-side positive group LRP. The claimed purpose is to keep the system compact while reducing weight near the image plane and suppressing sensor/filter reflection ghosts from the final lens surfaces (¶0003–¶0015, ¶0036–¶0038).

Numerical Example 1 is the best available patent match for the Canon PowerShot G1 X Mark III fixed zoom lens. The identification rests on convergent evidence rather than a patent statement naming the commercial camera:

1. **Element and group count.** Example 1 has nine optical elements, with only P2/P3 cemented, giving eight air-separated element groups. Canon's product specification for the camera states 9 elements in 8 groups.
2. **Aspherical complement.** The patent prescription has seven aspherical surfaces on four elements: N2, P1, L3+, and GRP. This corresponds to three double-sided aspherical lenses and one single-sided aspherical lens, matching Canon's published lens-construction note.
3. **Focal length and aperture.** The patent gives f = 15.45, 26.05, and 43.70 mm with Fno = 2.88, 4.00, and 5.77. Canon markets the production lens as 15–45 mm f/2.8–5.6, or 24–72 mm equivalent.
4. **Sensor class and timing.** Canon lists the PowerShot G1 X Mark III as an APS-C compact camera. The patent filing date, December 2016, predates the October 2017 product announcement by roughly ten months, which is plausible for a product-bound Canon optical patent.
5. **Mechanical topology.** Example 1 uses the negative–positive–positive–positive four-zoom-group layout described in ¶0087–¶0091, with an independently moving aperture stop, an L2-coupled flare-cut stop, a negative inner-focus lens Fa, and a positive resin GRP element at the rear. This is the compact architecture expected for the production camera's collapsible 3× zoom.

One identification point should be handled cautiously. The patent half-field angle at the wide end is 38.02°. In a simple rectilinear paraxial calculation, f × tan(ω) gives a field radius of about 12.1 mm, which is smaller than the diagonal half-field of Canon's 3:2 APS-C sensor. This field-angle line therefore should not be used by itself as proof of full sensor coverage. The production match is stronger when based on the optical construction, aspherical distribution, focal range, aperture range, and timing.

## Optical Architecture

The lens is a compact negative-lead zoom. From object to image it consists of: negative first zoom group L1/LN, aperture stop SP1, positive second zoom group L2/LP, positive third zoom group L3, and positive fourth zoom group L4/LRP. The air-separated element group count is eight, while the zoom-mechanism group count is four.

L1 is a negative–negative–positive front group. It supplies the wide-angle negative lead while dividing the front negative power across two elements so the first group does not become excessively thick or large (¶0083–¶0084). L2 is a positive group containing the main positive aspherical element P1 followed by the cemented P2/P3 doublet. L3 is a weak positive group made from a positive asphere followed by the negative focus element Fa. L4 is the single-element rear positive resin meniscus GRP, the patent's central feature.

During zooming from wide to telephoto, L1 moves objectward on an image-side-convex trajectory, SP1 moves independently objectward, L2 and L3 move objectward, and L4 moves imageward. SP2, the flare-cut stop, travels with L2 (¶0089). The imageward motion of L4 gives the rear group a controlled share of the zooming work and reduces the travel otherwise required of L2 and L3 (¶0091).

The patent group focal lengths for Example 1 are L1 = −28.85 mm, L2 = +25.60 mm, L3 = +85.90 mm, and L4 = +50.33 mm. Independent paraxial reconstruction gives −28.848 mm, +25.594 mm, +85.902 mm, and +50.328 mm respectively.

## Element-by-Element Analysis

### N1 — Negative Meniscus, convex to object

nd = 1.95375, νd = 32.3. Glass: S-LAH98 (OHARA). f = −20.8 mm.

N1 is the strongest negative element in L1. Its high refractive index allows the front element to provide substantial negative power without an excessive front diameter. The element satisfies condition (16), 1.870 < G1Nd < 2.060, which the patent uses to balance front-element diameter against chromatic correction in the negative lead group (¶0076).

Its convex-to-object meniscus form begins the negative-lead beam divergence used to reach the wide-angle field in a short fixed-lens camera barrel. This should not be called a true retrofocus construction in the strict back-focus sense: at the wide end the patent BF/EFL ratio is about 0.60, not greater than 1. The element is not aspherized; Canon places the first-group aspherical work on the smaller N2 element, where molding and tolerances are less severe.

### N2 — Negative Meniscus, convex to object (2× aspherical)

nd = 1.58254, νd = 59.4. Glass: 583594 barium-crown class; S-BAL42 / M-BACD12-class, not an exact public-catalog match. f = −95.0 mm.

N2 is a weak negative meniscus with aspherical surfaces on both faces. The patent explicitly notes that making N2 aspherical is preferable because it is smaller in diameter than N1 and therefore easier to manufacture while still correcting the first group effectively (¶0084).

The stored nd/νd pair is close to OHARA S-BAL42 and HOYA M-BACD12-class crown glass, but the d-line index is not an exact public catalog value. It is therefore treated as a barium-crown class mold glass rather than asserted as an exact catalog glass.

### N3 — Positive Meniscus, convex to object

nd = 1.95906, νd = 17.5. Glass: S-NPH3 (OHARA). f = +43.9 mm.

N3 is the positive element that completes the negative–negative–positive L1 structure described in ¶0083. Its very high dispersion, νd ≈ 17.5, supplies strong chromatic counter-power within the negative front group. This lets the design avoid a low-index ED crown in L1 while still controlling axial and lateral color over the 3× zoom range.

The element's high refractive index lets it act as a compact positive corrector even though it remains a meniscus rather than a simple biconvex lens.

### P1 — Biconvex Positive (2× aspherical)

nd = 1.69350, νd = 53.2. Glass: MC-LAC130 / M-LAC130 class (HOYA). f = +18.6 mm.

P1 is the first powered lens after the aperture stop and the strongest positive element in L2. The patent states that the object-side positive element in LP is preferably aspherical because its large effective diameter makes it important for spherical-aberration and coma correction through the zoom range (¶0086).

Both faces are aspherical. The front surface carries the largest fourth-order coefficient magnitude in the system, consistent with P1's role as the main converging element immediately behind SP1.

### P2/P3 — Cemented Doublet in L2

P2: nd = 2.00100, νd = 29.1. Glass: S-LAH99 (OHARA). f = +8.3 mm as a standalone in-air element.

P3: nd = 1.85478, νd = 24.8. Glass: S-NBH56 (OHARA). f = −6.1 mm as a standalone in-air element.

The P2/P3 cemented doublet is the compact high-index correction block at the rear of L2. P2 provides very strong positive standalone power from an ultra-high-index lanthanum-heavy-flint glass. P3 is the negative high-index flint partner. Taken together in their cemented in-situ form, the doublet is net negative with f = −37.37 mm.

This net-negative doublet is analytically important. It reduces the Petzval contribution of the otherwise strongly positive L2 group and helps stabilize field curvature against the negative front group's wide-angle geometry. The distinction between P2's standalone +8.3 mm power and the cemented doublet's in-situ −37.37 mm net power must not be collapsed; they describe different optical contexts.

### L3+ — Weak-front Biconvex Positive (1× aspherical)

nd = 1.76802, νd = 49.2. Glass: M-TAF101 (HOYA). f = +31.1 mm.

The first element of L3 is a positive lens with a nearly flat front surface and an aspherical rear surface. It provides the positive component of the weak +85.90 mm L3 group. Its single aspherical rear surface is placed well behind the aperture stop, where it is effective for balancing residual astigmatism, field curvature, and distortion changes across zoom.

Although νd = 49.2 is not a crown-glass value under the usual νd ≈ 50 boundary, the element is relatively moderate in dispersion compared with the high-dispersion flints used elsewhere. It should be described as a tantalum/dense-flint mold glass, not as a conventional crown.

### Fa — Negative Meniscus Focus Lens, concave to object

nd = 1.80610, νd = 33.3. Glass: NBFD15 (HOYA). f = −44.7 mm.

Fa is the single negative inner-focus element. It is part of zoom group L3 for zooming, but it moves independently for focusing. The patent states that Fa moves toward the image side when focusing from infinity to close distance (¶0097). The arrows Faa, Fab, and Fac in Figure 1 describe the zoom-compensated focus trajectory and the telephoto-end close-focus motion (¶0098).

The negative power of Fa is opposite in sign to the positive rear LRP group. The patent states that this opposite-sign arrangement increases positional sensitivity compared with focusing by LRP, reducing the required focus travel (¶0098).

### GRP — Positive Resin Meniscus, concave to object (2× aspherical)

nd = 1.53160, νd = 55.8. Glass: optical resin / polymer. f = +50.3 mm.

GRP is the most image-side positive lens and the only element in L4/LRP. It is a positive resin meniscus with both lens surfaces convex toward the image side. The patent's ghost-suppression explanation is explicit: if the final lens presents an image-side concave surface, light reflected from the sensor cover glass or optical filter can reflect again from that concave surface and return toward the image center; orienting the final meniscus convex toward the image side sends the reflected light away from the image center (¶0036–¶0037, ¶0094–¶0096).

The resin material also reduces weight near the image plane, where the effective diameter of the rear element grows with sensor size (¶0093–¶0096). Conditions (5), (10), and (11) constrain its specific gravity, Abbe number, and d-line index. Example 1 gives NGRP = 1.010, νdGRP = 55.840, and ndGRP = 1.5316.

Both surfaces are aspherical. Because GRP sits close to the image plane, its aspherical departures mainly trim residual field shape, telecentricity, and ghost-control geometry rather than providing the primary spherical-aberration correction.

## Glass Identification and Selection

| Element | nd | νd | Glass identification | Verification status | Role |
|---|---:|---:|---|---|---|
| N1 | 1.95375 | 32.3 | S-LAH98 (OHARA) | Catalog match | High-index front negative |
| N2 | 1.58254 | 59.4 | 583594 barium-crown class; S-BAL42 / M-BACD12-class | Close class match, not exact | Moldable first-group asphere |
| N3 | 1.95906 | 17.5 | S-NPH3 (OHARA) | Catalog match | High-dispersion L1 color corrector |
| P1 | 1.69350 | 53.2 | MC-LAC130 / M-LAC130 class (HOYA) | Catalog/class match | Main positive molded asphere |
| P2 | 2.00100 | 29.1 | S-LAH99 (OHARA) | Catalog match | Ultra-high-index positive doublet member |
| P3 | 1.85478 | 24.8 | S-NBH56 (OHARA) | Catalog match | Negative flint doublet member |
| L3+ | 1.76802 | 49.2 | M-TAF101 (HOYA) | Catalog match | Rear-group positive asphere |
| Fa | 1.80610 | 33.3 | NBFD15 (HOYA) | Catalog match | Negative inner-focus element |
| GRP | 1.53160 | 55.8 | Optical resin | Patent material class | Lightweight final field/ghost-control element |

The palette uses high-index and high-dispersion glasses rather than ED glass. L1 controls chromatic error by pairing the high-index negative N1 and low-dispersion N2 with the extreme-dispersion positive N3. L2 concentrates power in P1 and the ultra-high-index P2/P3 cemented doublet, while using the doublet's net-negative in-situ power to reduce field curvature. The rear resin element is constrained by the patent to a low-density, moderate-index, moderate-Abbe polymer region rather than a glass catalog type.

## Focus Mechanism

The patent uses inner focusing by Fa. Fa moves imageward from infinity toward close focus (¶0097–¶0098). Close-focus numerical spacings are not provided in the patent; only the infinity-focus zoom gaps are tabulated. Canon's product specification gives a minimum shooting distance of 10 cm at wide angle and 30 cm at telephoto, measured from the lens tip.

| Gap | Wide | Mid | Tele | Note |
|---|---:|---:|---:|---|
| d6 | 20.75 | 7.77 | 2.12 | L1 to SP1 |
| d7 | 1.87 | 1.94 | 0.10 | SP1 to L2 |
| d13 | 5.35 | 6.98 | 10.31 | SP2 to L3 |
| d17 | 5.42 | 15.57 | 31.32 | L3/Fa to L4/GRP |
| d19 | 7.93 | 6.39 | 3.33 | GRP to sensor cover glass |
| BF, air-equivalent | 9.31 | 7.77 | 4.70 | d19 plus 1.33 mm cover glass at nd = 1.51633 and 0.50 mm final air |

The companion data file models the patent's infinity-focus zoom states. Since the patent does not publish close-focus gaps, focus travel is not numerically reconstructed; the focus slider uses identical infinity/close values while the focus description records the actual Fa focus mechanism.

## Aspherical Surfaces

The patent uses the standard even-order aspherical sag form (¶0172–¶0173):

$$X = \frac{(1/R)H^2}{1 + \sqrt{1 - (1+K)(H/R)^2}} + A_4H^4 + A_6H^6 + A_8H^8 + A_{10}H^{10}$$

All listed conic constants are K = 0. No A12 or higher coefficients are published for Example 1.

**Surface 3A (N2 front):** K = 0, A4 = −2.29993×10⁻⁵, A6 = −2.10057×10⁻⁷, A8 = +1.05970×10⁻⁹. This surface begins wide-angle distortion and field correction in the smaller second element of L1.

**Surface 4A (N2 rear):** K = 0, A4 = −3.26997×10⁻⁵, A6 = −2.89658×10⁻⁷, A8 = +1.75014×10⁻⁹, A10 = −2.31976×10⁻¹². The rear asphere complements surface 3A and shapes the diverging beam before N3.

**Surface 8A (P1 front):** K = 0, A4 = −6.50277×10⁻⁵, A6 = −5.56369×10⁻⁷, A8 = −4.17807×10⁻⁹. This is the strongest fourth-order aspherical correction in the prescription and is located at the main post-stop positive element.

**Surface 9A (P1 rear):** K = 0, A4 = +2.15406×10⁻⁵, A6 = −2.86214×10⁻⁷. The sign reversal in A4 relative to surface 8A indicates a balancing rear-surface correction rather than a duplicate of the front-surface shape.

**Surface 15A (L3+ rear):** K = 0, A4 = +2.53751×10⁻⁶, A6 = −4.54443×10⁻⁸, A8 = −1.37807×10⁻¹⁰. This is a mild rear-group correction surface.

**Surface 18A (GRP front):** K = 0, A4 = −2.39006×10⁻⁵, A6 = +1.71586×10⁻⁸. This surface contributes to rear-field and telecentric correction.

**Surface 19A (GRP rear):** K = 0, A4 = +3.74727×10⁻⁵, A6 = −1.29539×10⁻⁷, A8 = +3.60781×10⁻¹⁰. The rear GRP asphere works with surface 18A to tune the final chief-ray geometry and reflection behavior near the image plane.

## Conditional Expressions

The patent defines 17 conditional expressions in ¶0034 and ¶0054. The following values are recomputed from Numerical Example 1 and agree with Table 1 within the patent's rounding.

| Condition | Expression | Patent range | Example 1 value |
|---|---|---:|---:|
| (1) | BkT / fW | 0.15–0.50 | 0.304 |
| (2) | fRP / mRP | 8.0–50.0 | 10.925 |
| (3) | fRP / fLP | 1.40–3.50 | 1.966 |
| (4) | R1sag / DGRP | −3.00–−0.15 | −0.480 |
| (5) | NGRP | 0.90–1.30 | 1.010 |
| (6) | (R1 + R2) / (R1 − R2) | 1.01–3.50 | 1.772 |
| (7) | fRP / fW | 2.0–5.0 | 3.257 |
| (8) | fRP / √(fW × fT) | 1.40–4.00 | 1.937 |
| (9) | \|fRP / fLN\| | 1.50–5.00 | 1.744 |
| (10) | νdGRP | 50.0–60.0 | 55.840 |
| (11) | ndGRP | 1.50–1.60 | 1.5316 |
| (12) | \|mLN / mRP\| | 0.40–1.50 | 1.270 |
| (13) | \|mLP / mRP\| | 3.50–10.00 | 5.698 |
| (14) | \|fLP / fLN\| | 0.50–2.50 | 0.887 |
| (15) | mLN / mLP | 0.05–0.40 | 0.223 |
| (16) | G1Nd | 1.870–2.060 | 1.954 |
| (17) | fa / fRP | −1.30–−0.30 | −0.888 |

The movement signs in Table 1 follow the patent definition in ¶0035: objectward motion from wide to telephoto is negative, and imageward motion is positive. Example 1 therefore has mLN = −5.849 mm, mLP = −26.248 mm, and mRP = +4.607 mm; the table reports positive magnitudes for the ratios in conditions (12) and (13).

## Verification Summary

The prescription was re-extracted from the patent numerical table and recomputed with a paraxial reduced-angle matrix trace. The final faceplate/cover glass was treated as the patent instructs: the last two surfaces are not lens elements, and BF is the air-equivalent distance from the last lens surface to the image plane.

| Quantity | Wide | Mid | Tele |
|---|---:|---:|---:|
| EFL from matrix trace | 15.452 mm | 26.049 mm | 43.711 mm |
| Patent focal length | 15.45 mm | 26.05 mm | 43.70 mm |
| Air-equivalent BF from rounded gaps | 9.307 mm | 7.767 mm | 4.707 mm |
| Patent BF line | 9.31 mm | 7.77 mm | 4.70 mm |
| Patent total length | 69.61 mm | 66.93 mm | 75.45 mm |

Standalone in-air element focal lengths are N1 = −20.775 mm, N2 = −94.999 mm, N3 = +43.892 mm, P1 = +18.562 mm, P2 = +8.297 mm, P3 = −6.116 mm, L3+ = +31.066 mm, Fa = −44.689 mm, and GRP = +50.328 mm. The cemented P2/P3 net in-situ focal length is −37.368 mm. The surface-by-surface Petzval sum, using φ/(n·n′), is +0.005814 mm⁻¹, corresponding to a Petzval radius of about +172 mm.

For the data file, the patent's faceplate surfaces 20 and 21 are omitted. Their optical path is folded into the final BFD values after surface 19A: 9.307, 7.767, and 4.707 mm. Semi-diameters are not published in the patent and were estimated from combined marginal/chief-ray clearance, then reduced where necessary to satisfy edge-thickness and cross-gap sag constraints for rendering. The most visible trims are the N1/N2 air gap and the SP2 flare-stop region, both of which are constrained by short air gaps between strongly curved surfaces.

## Image Stabilization

Canon's production specification describes the camera as using lens-shift image stabilization with approximately four-stop stabilization. JP 2018-106021 A does not identify a dedicated IS group or provide decentered stabilization examples. The companion data file therefore does not model IS; it represents the centered optical prescription only.

## Sources

1. JP 2018-106021 A, Ito Daisuke / Canon Inc., published July 5, 2018. Primary source for the prescription, zoom gaps, group focal lengths, aspherical coefficients, ghost-control rationale, and conditional expressions.
2. Canon Europe, “Canon PowerShot G1 X Mark III Specifications.” Source for production focal length, maximum f-number, 9-elements/8-groups construction, aspherical-lens count, and lens-shift IS specification. https://www.canon-europe.com/cameras/powershot-g1-x-mark-iii/specifications/
3. Canon Asia Support, “Specifications (PowerShot G1 X Mark III),” issue 6200500100, October 12, 2017. Source for APS-C product classification and shooting-range specification. https://asia.canon/en/support/6200500100
4. OHARA optical glass catalog / datasheets: S-LAH98, S-LAH99, S-NPH3, S-NBH56, and S-BAL42 reference data.
5. HOYA optical glass catalog data and product notes: MC-LAC130/M-LAC130 class, M-TAF101, and NBFD15 reference data.
