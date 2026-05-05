# Canon EF 40mm f/2.8 STM — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** US 8,970,966 B2, "Optical System and Optical Apparatus Having the Same"
**Applicant / Assignee:** Canon Kabushiki Kaisha, Tokyo (JP)
**Inventor:** Satoshi Maetaki, Utsunomiya (JP)
**Filed:** December 19, 2012 (US); priority JP 2011-288116, December 28, 2011
**Granted:** March 3, 2015
**Embodiment used:** Numerical Example 2

The prescription transcribed here corresponds to Numerical Example 2 of the patent. The following convergent evidence links this embodiment to the Canon EF 40mm f/2.8 STM production lens:

1. **Element and group count.** The patent design has 6 elements in 4 groups (cemented doublet Lp1 + positive meniscus L13 in the front unit; cemented doublet Lp2 + positive meniscus L23 in the rear unit). The production lens is specified as 6 elements / 4 groups.
2. **Focal length.** The patent's computed EFL is 39.0 mm. The production lens is marketed at 40 mm; the ~2.5% difference is within the tolerance commonly seen between patent embodiments and production rounding.
3. **Maximum aperture.** The patent specifies F/2.80, matching the production f/2.8.
4. **Half-field angle.** The patent gives ω = 29.0°, yielding 2ω = 58.0°. For a 43.3 mm image circle, this is consistent with a 40 mm full-frame lens.
5. **Back focal distance.** BF = 39.0 mm, sufficient for the Canon EF mount's ~44 mm flange distance with mirror clearance. The ratio BF/f = 1.00 is a hallmark of the design — the patent's conditional expression (4) governs this explicitly.
6. **Aspherical surface count.** One aspherical surface on the rear positive meniscus (L23), consistent with Canon's published specification of one glass-mold aspherical element.
7. **Patent timing.** JP priority December 2011; the lens was announced June 2012 and marketed from that date. The patent predates announcement by approximately six months.
8. **Focus mechanism.** The production lens uses rear/inner focus with an STM stepper motor. The patent's text describes unit focus ("focusing is made by moving the overall optical system"), which is standard practice in Japanese optical patents — the infinity-focus prescription is published without close-focus spacing data, and the manufacturer engineers the focus group separately.

Among the four numerical examples, Example 2 is the closest match: Examples 1, 3, and 4 have focal lengths of 45 mm, 35 mm, and 28 mm respectively, none of which correspond to a 40 mm production lens.

## Optical Architecture

The Canon EF 40mm f/2.8 STM is a modified double-Gauss / plasmat-variant design comprising two positive lens units flanking an aperture diaphragm. The architecture is approximately symmetric about the stop, with each unit built from a cemented doublet and a positive meniscus singlet.

The design has 6 elements in 4 groups, organized as follows:

- **Front unit (L1a):** Positive refractive power, f = +117.5 mm. Contains cemented doublet Lp1 (L11 + L12, synthetic f = −76.5 mm) and positive meniscus L13 (f = +44.3 mm). The doublet has net negative power, which shifts the principal point rearward to maintain the long BFD required for SLR mirror clearance.
- **Aperture stop (SP):** Located between the two units. The patent places it at surface 6 with an air gap of 5.12 mm following it.
- **Rear unit (L1b):** Positive refractive power, f = +45.5 mm. Contains cemented doublet Lp2 (L21 + L22, synthetic f = −160.1 mm) and positive meniscus L23 (f = +41.2 mm) with one glass-mold aspherical surface.

The power distribution within each unit follows a negative–positive pattern: each cemented doublet contributes net negative power while its companion meniscus provides positive power. The doublets' negative power is the key architectural device — by introducing negative power in front of the stop, the patent pushes the system's rear principal point toward the image plane, enabling a back focal distance equal to the focal length (BF/f = 1.00) while keeping the effective lens length to just 23.5 mm. The overall lens length (front vertex to image plane) is only 62.5 mm.

The Petzval sum is 0.00405, corresponding to a Petzval radius of 247 mm — approximately 6.3× the focal length. This is an excellent field-flatness figure for a lens of this speed and is achieved by the large refractive-index difference between the positive and negative elements in the front cemented doublet Lp1 (Δn = 0.303), which the patent identifies as the primary Petzval correction mechanism (conditional expression (1), ¶col. 4).

## Element-by-Element Analysis

### L11 — Biconvex Positive (Element 1 of cemented doublet Lp1)

nd = 1.83481, νd = 42.7. Glass: S-LAH55V (OHARA) — high-index lanthanum crown. f = +32.9 mm.

L11 is the front-most element and serves as the primary positive collector. Its high refractive index (nd = 1.83481) is central to the design: the patent's conditional expression (1) requires n11 − n12 > 0.030, and this embodiment achieves Δn = 0.303 by pairing L11's high-index lanthanum crown against L12's much lower-index light flint. This large index difference reduces the Petzval sum contribution of the cemented pair, keeping the image plane flat across the field (¶col. 4, lines 22–30).

The biconvex shape (R1 = +38.185, R2 = −93.918 mm) distributes the positive power across two surfaces, reducing surface-by-surface spherical aberration contributions. The front surface (R = +38.185) carries the majority of the convergent power. S-LAH55V is a precision glass-mold (PGM) compatible lanthanum alumino-silicate glass; its Tg of ~630 °C and good chemical durability make it suitable for high-volume production of spherical elements in the Canon EF lineup.

### L12 — Biconcave Negative (Element 2 of cemented doublet Lp1)

nd = 1.53172, νd = 48.8. Glass: S-TIL25 (OHARA) — light titanium flint. f = −21.7 mm.

L12 is cemented to L11's rear surface and provides strong negative power that establishes the cemented doublet's net negative focal length (f_Lp1 = −76.5 mm). The low refractive index (nd = 1.53172) creates the large Δn with L11 that the Petzval correction requires.

The Abbe number ratio νd11/νd12 = 42.7/48.8 = 0.88, falling within the patent's conditional expression (2) range of 0.20–1.30. The patent explains that keeping this ratio moderate — with the positive and negative elements' dispersions close to each other — ensures the cemented junction surface's curvature remains gentle enough to avoid introducing excessive higher-order spherical aberration (¶col. 4, lines 35–55). This is an unusual pairing strategy: in most achromatic doublets the positive element has much higher νd than the negative one. Here the design deliberately accepts some residual longitudinal chromatic aberration at the front doublet in exchange for better Petzval correction and spherical aberration control. The rear unit's doublet Lp2 and the asymmetric glass selection across the stop compensate chromatically.

The biconcave shape (R1 = −93.918, R2 = +13.191 mm) concentrates most of the diverging power on the steeply curved rear surface (R = +13.191), which faces toward the aperture stop.

### L13 — Positive Meniscus, Convex to Object (Element 3)

nd = 1.69680, νd = 55.5. Glass: S-LAL14 (OHARA) — lanthanum crown. f = +44.3 mm.

L13 is a positive meniscus (R1 = +15.211, R2 = +28.380 mm) that bridges the front unit's cemented doublet and the aperture stop. Its role is twofold: it contributes positive power to the front unit (making L1a net positive at f = +117.5 mm despite Lp1's negative power), and it pre-corrects the off-axis bundle's astigmatism before it crosses the stop. The meniscus shape generates less Petzval contribution per unit of power than a biconvex element would, preserving the flat field established by Lp1.

S-LAL14 is a standard lanthanum crown with moderate index and high Abbe number, providing positive power with relatively low chromatic contribution. This glass appears frequently in Canon's EF-era designs as a workhorse positive element behind the front doublet.

### L21 — Biconcave Negative (Element 4 of cemented doublet Lp2)

nd = 1.69895, νd = 30.1. Glass: S-TIM35 (OHARA) — dense flint (titanium-containing). f = −15.3 mm.

L21 is the negative element in the rear cemented doublet Lp2, positioned immediately behind the aperture stop. Its biconcave shape (R1 = −11.637, R2 = +132.356 mm) concentrates the diverging power on the steeply curved front surface (R = −11.637), which faces the stop.

S-TIM35 is a standard dense flint glass with moderate refractive index and high dispersion (νd = 30.1). The wide Abbe-number spread between L21 and its cemented partner L22 (νd22/νd21 = 42.7/30.1 = 1.42) provides the rear doublet with the chromatic leverage needed to correct both longitudinal chromatic aberration and spherochromatism. The index difference n22 − n21 = 1.83481 − 1.69895 = +0.136 falls within the patent's conditional expression (7) range of −0.10 to +0.15, and the Abbe ratio satisfies conditional expression (8)'s range of 1.20–2.50. The patent explains that these conditions ensure the rear doublet facilitates correction of spherical aberration at each wavelength independently, not merely at the fundamental wavelength (¶col. 7, lines 10–25).

### L22 — Biconvex Positive (Element 5 of cemented doublet Lp2)

nd = 1.83481, νd = 42.7. Glass: S-LAH55V (OHARA) — high-index lanthanum crown. f = +19.3 mm.

L22 shares the same glass as L11 — S-LAH55V — and provides the strongest individual positive power in the rear unit. The biconvex shape (R1 = +132.356, R2 = −18.087 mm) places most of the convergent power on the steeply curved rear surface (R = −18.087). The cemented pair Lp2 has a net negative focal length of −160.1 mm, much weaker than Lp1's −76.5 mm. The patent's conditional expression (10) governs this: fp2/f = −4.11, near the weaker end of the permitted range. This asymmetry between Lp1 and Lp2 is characteristic of designs that slightly favor front-group Petzval correction, relying on the rear group's aspherical meniscus to clean up residual field aberrations.

The use of the same glass (S-LAH55V) in both the front positive element L11 and the rear positive element L22 simplifies the manufacturing bill of materials — a practical consideration for a lens positioned at the entry-level price point.

### L23 — Positive Meniscus, Concave to Object (1× Asph, Element 6)

nd = 1.58313, νd = 59.4. Glass: S-BAL42 (OHARA) — barium crown. f = +41.2 mm.

L23 is the final element and the only aspherical element in the design. It is a positive meniscus with both radii negative (R1 = −39.511, R2 = −15.371 mm), meaning both surfaces are concave toward the object. The front surface (surface 10) carries the aspherical profile; the rear surface (surface 11) is spherical.

Canon's Camera Museum identifies this as a **glass-mold aspherical lens** (GMo), manufactured by softening glass under high temperature and pressing it in a high-precision aspherical mold. GMo aspheres retain the scratch and heat resistance of glass while enabling mass production — critical for an entry-level pancake lens. S-BAL42 is a barium crown with relatively low index (nd = 1.583) and moderate Abbe number (νd = 59.4); its low Tg (~540 °C) and favorable viscosity curve make it well-suited to glass molding.

L23's optical role is multifaceted. As the last powered element before the long air gap to the image plane, it is the primary field-flattening and distortion-correcting element. The meniscus shape provides positive power with minimal Petzval contribution, and the aspherical front surface corrects residual higher-order aberrations — primarily oblique spherical aberration, sagittal coma, and the field-dependent component of astigmatism — that the all-spherical elements upstream cannot address.

## Glass Identification and Selection

The design uses four distinct glass compositions across six elements. The glass palette is conservative, drawn entirely from standard OHARA catalog entries with exact refractive-index matches:

| Element | nd | νd | Glass | Vendor | Role |
|---------|--------|------|-------|--------|------|
| L11 | 1.83481 | 42.7 | S-LAH55V | OHARA | High-index positive collector |
| L12 | 1.53172 | 48.8 | S-TIL25 | OHARA | Low-index Petzval corrector |
| L13 | 1.69680 | 55.5 | S-LAL14 | OHARA | Moderate-index positive meniscus |
| L21 | 1.69895 | 30.1 | S-TIM35 | OHARA | Dense flint, chromatic corrector |
| L22 | 1.83481 | 42.7 | S-LAH55V | OHARA | High-index positive (same as L11) |
| L23 | 1.58313 | 59.4 | S-BAL42 | OHARA | Barium crown, GMo-compatible |

Cross-vendor equivalents exist for all glasses: S-LAH55V ≈ TAFD30 (HOYA); S-TIL25 ≈ E-CF6 (HOYA); S-LAL14 ≈ LAC14 (HOYA) ≈ N-LAK14 (Schott); S-TIM35 ≈ E-FD15 (HOYA) ≈ N-SF15 (Schott); S-BAL42 ≈ BACD12 (HOYA). The OHARA designations are preferred here because Canon's patent practice during this era consistently used OHARA catalog entries, and all glass types have exact nd matches to OHARA S-series glasses. No ED, super-ED, or anomalous-dispersion specialty glasses are used. The design achieves its performance through architectural choices (the negative-power cemented doublets, the aspherical meniscus) rather than exotic materials.

The chromatic correction strategy is unusual. Rather than pairing a high-νd crown with a low-νd flint in the traditional achromatic doublet arrangement, the front doublet Lp1 pairs two glasses with similar Abbe numbers (42.7 and 48.8, ratio 0.88). The patent's conditional expression (2) explicitly permits this close-Abbe pairing, explaining that it keeps the cemented junction surface's curvature moderate so that spherical aberration remains correctable (¶col. 4, lines 35–50). The chromatic correction burden is therefore carried primarily by the rear doublet Lp2, where S-TIM35 (νd = 30.1) and S-LAH55V (νd = 42.7) provide a conventional crown/flint Abbe spread (ratio 1.42) for longitudinal chromatic and spherochromatism correction.

## Focus Mechanism

The patent describes unit focus — the entire optical system moves as a rigid body, changing only the back focal distance. No variable air-spacing data is published for any of the four numerical examples.

The production Canon EF 40mm f/2.8 STM departs from this: Canon's specifications list "inner focusing system" and "rear focus." The STM (Stepping Motor Technology) linear motor drives a rear focus group — most likely the L23 positive meniscus alone, or possibly the Lp2 + L23 pair — axially to achieve focus. Moving only the lightweight rear element(s) enables the fast, silent AF required for Canon's Movie Servo AF system, and keeps the front element and filter thread stationary during focusing.

The prescription as transcribed models the patent's unit-focus behavior. The close-focus BFD is computed from paraxial conjugate theory at MFD = 0.30 m (Canon's published minimum focus distance, measured from the focal plane). The resulting magnification of 0.184× agrees well with Canon's published 0.18×, confirming the unit-focus model is a reasonable approximation at this conjugate despite the production lens using a different focus mechanism. The BFD changes from 39.00 mm at infinity to 46.17 mm at close focus (an extension of 7.17 mm).

| Configuration | BFD (mm) |
|---------------|----------|
| Infinity      | 39.00    |
| Close (0.30 m)| 46.17    |

## Aspherical Surfaces

The design has one aspherical surface: **surface 10A**, the front (object-facing) surface of L23.

### Aspheric equation convention

The patent uses the standard even-power aspheric sag equation with coefficients labeled B (4th order), C (6th order), D (8th order), E (10th order), and F (12th order):

$$z(h) = \frac{h^2 / R}{1 + \sqrt{1 - (1+K)(h/R)^2}} + B \cdot h^4 + C \cdot h^6 + D \cdot h^8 + E \cdot h^{10} + F \cdot h^{12}$$

The conic constant K in this patent corresponds directly to the standard convention (K = 0 for a sphere, K = −1 for a paraboloid). No κ = 1 + K offset is used.

### Coefficients for surface 10A (L23 front)

| Parameter | Value |
|-----------|-------|
| R | −39.511 mm |
| K | 0.0 |
| A4 (B) | −3.4255 × 10⁻⁵ |
| A6 (C) | +4.6012 × 10⁻⁸ |
| A8 (D) | −2.0635 × 10⁻⁹ |
| A10 (E) | +1.3485 × 10⁻¹¹ |
| A12 (F) | 0.0 |

### Correction profile

The dominant coefficient is A4 = −3.4255 × 10⁻⁵, which is negative. On this concave-to-object surface (R = −39.511), the negative A4 increases the concavity at the rim — the aspherical surface sags more deeply than the best-fit sphere at peripheral heights. The higher-order terms (A6 positive, A8 negative, A10 positive) provide an oscillating correction that fine-tunes the peripheral sag profile, preventing over-correction at the extreme rim.

The aspherical departure profile is smooth and monotonically increasing in magnitude out to approximately h ≈ 13 mm, beyond which the higher-order terms begin to reverse the trend. This is consistent with a surface whose primary job is correcting the quadratic (A4-dominated) component of residual field curvature and oblique spherical aberration across the field, while the higher-order terms trim coma and astigmatism at the extreme corners of the 58° field.

Canon identifies this element as a **glass-mold (GMo) aspherical lens**. The glass (S-BAL42, nd = 1.583) has a low softening point compatible with high-volume glass-mold manufacturing, where the element is pressed from heated glass in a precision aspherical die.

## Conditional Expressions

The patent defines ten conditional expressions governing the design. All are satisfied by Numerical Example 2:

| Expression | Condition | Example 2 Value | Status |
|------------|-----------|-----------------|--------|
| (1) | n11 − n12 > 0.030 | 0.303 | ✓ |
| (2) | 0.20 < νd11/νd12 < 1.30 | 0.88 | ✓ |
| (3) | −10.0 < fp1/f < −0.2 | −1.96 | ✓ |
| (4) | 0.8 < BF/f < 1.5 | 1.00 | ✓ |
| (5) | 1.8 < f1a/f < 25.0 | 3.01 | ✓ |
| (6) | 0.50 < Ltot/BF < 0.72 | 0.60 | ✓ |
| (7) | −0.10 < n22 − n21 < 0.15 | 0.136 | ✓ |
| (8) | 1.20 < νd22/νd21 < 2.50 | 1.42 | ✓ |
| (9) | 1.00 < f1b/f < 1.40 | 1.17 | ✓ |
| (10) | −5.00 < fp2/f < −0.20 | −4.11 | ✓ |

Expressions (1)–(3) govern the front cemented doublet Lp1 and are the patent's core claims. Expression (1) ensures a large refractive index difference for Petzval correction. Expression (2) keeps the Abbe numbers close to control the cemented junction's spherical aberration contribution. Expression (3) constrains Lp1's negative power — it must be strong enough to push the principal point rearward for BFD maintenance, but not so strong that the rear unit must over-compensate, degrading performance.

## Verification Summary

Independent paraxial verification via ABCD transfer-matrix ray trace confirms:

| Parameter | Computed | Patent | Match |
|-----------|----------|--------|-------|
| EFL | 38.997 mm | 39.00 mm | ✓ (Δ = 0.003 mm) |
| BFD | 38.984 mm | 39.00 mm | ✓ (Δ = 0.016 mm) |
| Half-field ω | 29.03° | 29.02° | ✓ |
| Petzval sum | 0.00405 | — | — |
| Petzval radius | 247 mm | — | — |

Individual element focal lengths were verified against the patent's single-lens data table (all computed as standalone thick lenses in air). All six elements match to within rounding precision (≤ 0.01 mm).

| Element | Computed | Patent | Δ |
|---------|----------|--------|---|
| L11 | +32.867 | +32.870 | −0.003 |
| L12 | −21.669 | −21.670 | +0.001 |
| L13 | +44.270 | +44.280 | −0.010 |
| L21 | −15.260 | −15.260 | 0.000 |
| L22 | +19.256 | +19.260 | −0.004 |
| L23 | +41.207 | +41.210 | −0.003 |

Close-focus magnification at 0.30 m MFD (unit-focus model): m = 0.184, consistent with Canon's published 0.18×.

## Design Heritage and Context

The Canon EF 40mm f/2.8 STM, announced June 2012, was Canon's first EF-mount pancake lens and Canon's first lens to use a stepping motor (STM) for autofocus. At 22.8 mm depth and 130 g, it was the thinnest and lightest lens in the EF series at the time. It was launched alongside the EOS 650D (Rebel T4i), Canon's first DSLR with phase-detect + contrast-detect hybrid AF and Movie Servo AF — features designed to leverage the STM motor's smooth, silent operation for video.

The 40 mm focal length places the lens in a lineage of compact pancake primes that includes the Olympus Zuiko 40mm f/2, Pentax DA 40mm f/2.8 Limited, and Voigtländer Ultron 40mm f/2 SL. The focal length is slightly shorter than the standard 50 mm, enabling a more compact design while remaining close to the "normal" perspective. As the patent text discusses, the modified Gauss architecture achieves the BF/f ≈ 1 ratio needed for SLR compatibility with a total effective lens length of only 23.5 mm — less than the focal length itself — by exploiting the principal-point-shifting effect of the front doublet's negative power.

The design philosophy contrasts with Canon's other moderate-wide primes of the era. The contemporary EF 35mm f/2 IS USM (2012) uses 10 elements in 8 groups with two aspherical surfaces and image stabilization; the EF 40mm f/2.8 STM achieves competitive center-to-edge sharpness with half the element count and no IS, trading maximum aperture and wide-angle coverage for extreme compactness.

## Sources

1. US 8,970,966 B2, Maetaki (Canon), granted March 3, 2015. Primary source for all optical prescription data.
2. Canon Camera Museum, "EF40mm f/2.8 STM" product page (https://global.canon/en/c-museum/product/ef419.html). Source for glass-mold aspherical confirmation, marketing date, and pricing.
3. Canon Europe, "EF 40mm f/2.8 STM" specification page. Source for production specifications (6/4 construction, 0.3 m MFD, 52 mm filter, STM motor, inner focus).
4. Canon Camera Museum, "Aspherical lens elements: Transcending challenges in ultra-high-precision processing" (https://global.canon/en/c-museum/special/exhibition1.html). Source for GMo manufacturing process description.
5. OHARA Pocket Catalog, May 2023 edition. Cross-reference table used to verify glass identifications against six-digit glass codes.
