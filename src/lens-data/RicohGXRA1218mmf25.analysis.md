# Ricoh GR LENS A12 28mm f/2.5 — Optical Analysis

**Patent:** JP 2012-003015 A (filed 2010-06-16, published 2012-01-05)
**Inventor:** Takashi Kubota (窪田 高士), Ricoh Co., Ltd.
**Example analyzed:** Example 3 (実施例３), Figure 5
**Design focal length:** 18.3 mm (28 mm equiv. on APS-C)
**Design f-number:** f/2.56

---

## 1. Overview and Production Context

The Ricoh GR LENS A12 28mm f/2.5 is a wide-angle prime module for the Ricoh GXR interchangeable-unit camera system, released at Photokina in September 2010. It pairs an 18.3 mm f/2.5 lens with a 23.6 × 15.7 mm (APS-C) CMOS sensor in a sealed, dust-free unit. The production module features a 40.5 mm filter thread, a minimum focus distance of approximately 20 cm from the front element, and a floating-focus lens structure.

Patent JP 2012-003015 A presents seven numerical examples of a positive–positive two-group imaging lens design. All share the same fundamental architecture: a positive first group and a positive second G1 separated by an aperture stop, with floating focus achieved by advancing both groups toward the object at different rates.

**Production specification versus Example 3:** Ricoh's published specifications describe a 9-element, 6-group design with "2 aspherical lens elements with 2 surfaces," whereas Example 3 is an 8-element, 6-G1 design with 2 aspherical elements bearing 3 aspherical surfaces (both surfaces of L11 plus the rear surface of L24). Example 1 from the same patent — a 9-element, 6-group design with exactly 2 aspherical surfaces — is a closer match to the published element/G1 count and aspherical surface count. The production lens is likely a refinement whose overall topology more closely follows Example 1 or a hybrid of the two. Nevertheless, Example 3 is among the closest designs in the patent family and shares all the fundamental architectural and focusing principles of the production lens.

---

## 2. Lens Architecture

Example 3 is a 2-group, 8-element design arranged in 6 air-separated groups. The prescription was verified computationally via paraxial ray trace in the (y, nu) convention, yielding an EFL of 18.28 mm (within 0.1% of the patent's stated 18.3 mm).

### Group and Element Layout

| Position | Element(s) | Air-Separated Group | Description |
|----------|-----------|---------------------|-------------|
| Front | L11 | Group A | Negative meniscus, 2× aspherical |
| | L12 | Group B | Positive meniscus, convex to object |
| | L13 + L14 | Group C | Cemented doublet (neg + pos) |
| *Stop* | — | — | Aperture diaphragm |
| | L21 + L22 | Group D | Cemented doublet (pos + neg) |
| | L23 | Group E | Negative meniscus |
| Rear | L24 | Group F | Biconvex positive, 1× aspherical |

The overall topology is a modified double-Gauss variant adapted for a wide-angle, positive-leading design. Rather than the classic negative-leading retrofocus architecture used in most wide-angle SLR lenses, this design places positive power first, which yields a compact total track (≈ 1.7× the sensor diagonal at infinity focus, per the patent text) at the cost of somewhat greater difficulty in correcting distortion and field curvature. The positive–positive power split also enables a near-telecentric exit pupil, well-suited to the large APS-C sensor.

### Key Computed Parameters

| Parameter | Value |
|-----------|-------|
| Effective focal length (EFL) | 18.28 mm |
| Back focal distance (BFD, to cover glass front) | 14.26 mm (infinity) |
| Half-field angle (ω) | 37.8° |
| Full field of view (2ω) | 75.6° |
| 35 mm equivalent focal length | 27.9 mm |
| Petzval sum | 0.00700 mm⁻¹ |
| Petzval radius | 142.9 mm |
| Total optical track (surface 1 to image) | 50.4 mm |
| Minimum focus distance | 200 mm (patent design value) |
| Group 1 focal length | +240.2 mm |
| Group 2 focal length | +23.4 mm |

---

## 3. Element-by-Element Analysis

All individual element focal lengths below are thick-lens values computed in-air (standalone), which is the standard reporting convention. Cemented doublet focal lengths are computed as complete air-to-air subsystems using ABCD matrix trace. Within the cemented groups, each element's optical contribution differs from its standalone value due to the higher-index surrounding medium; these contextual values are noted where relevant.

### L11 — Negative Meniscus with Two Aspherical Surfaces

| Property | Value |
|----------|-------|
| Surfaces | 1\* (front, R = +23.77) / 2\* (rear, R = +9.53) |
| Thickness | 1.1 mm |
| nd / νd | 1.5163 / 64.1 |
| Glass match | S-BSL7 (OHARA) or N-BK7 (SCHOTT) |
| Focal length | −31.6 mm |

L11 is the most optically distinctive element in the design. It is the lowest-dispersion element in this prescription (νd = 64.1), and it carries aspherical correction on both surfaces — a highly unusual choice for a front element in a compact wide-angle lens. Its glass is a standard borosilicate crown (BK7 family), selected here for its low dispersion and excellent moldability. This element is almost certainly produced by precision glass molding (PGM).

As a negative meniscus with its convex side toward the object, L11 acts as a field-flattening element for the incoming wide-angle beam. Its negative power diverges the marginal ray bundle before it enters the high-power positive elements behind it, distributing the refraction across more surfaces and reducing the load on any single element.

**Front surface (surface 1\*):** K = −6.163 (strong hyperboloid in standard convention). The aspherical departure reaches +230 µm at h = 8.5 mm relative to the best-fit sphere. The complex profile controls both spherical aberration contribution and the refraction angle of wide-angle off-axis bundles entering the lens.

**Rear surface (surface 2\*):** K = −0.812 (prolate ellipsoid, approaching paraboloidal). This surface carries the most dramatic aspherical departure in the design: −796 µm at h = 7.5 mm. This strong flattening reduces the divergence of the marginal ray exiting L11 at large heights, directly controlling spherical aberration and coma. The departure profile through A18 (eight polynomial terms) provides extremely fine control over the wide-angle beam geometry.

### L12 — Positive Meniscus

| Property | Value |
|----------|-------|
| Surfaces | 3 (front, R = +32.35) / 4 (rear, R = +133.80) |
| Thickness | 1.7 mm |
| nd / νd | 1.8830 / 40.8 |
| Glass match | S-LAH58 (OHARA) or N-LASF45HT (SCHOTT) |
| Focal length | +47.9 mm |

L12 is a positive meniscus with its convex surface toward the object. It is the primary positive-power element of Group 1, using a high-index lanthanum glass (nd = 1.883) to provide strong convergence with relatively gentle surface curvatures.

L12 works in partnership with L11: the negative power of L11 partially pre-corrects the beam before L12 converges it. The patent's Condition (2) governs the focal-length ratio between L11 and L12, requiring −1.0 < f_L11/f_L12 < −0.1. The computed ratio is −0.66, indicating that L11 has about two-thirds the absolute power of L12.

### L13 + L14 — Cemented Doublet (Group 1 Rear)

| Property | L13 (front element) | L14 (rear element) |
|----------|--------------------|--------------------|
| Surfaces | 5 (R = −17.05) | 6 (junction, R = +17.77) / 7 (R = −29.70) |
| Thickness | 0.9 mm | 3.0 mm |
| nd / νd | 1.6200 / 36.3 | 1.8830 / 40.8 |
| Glass match | S-TIM2 (OHARA) / N-F2 (SCHOTT) | S-LAH58 (OHARA) |
| Individual focal length (standalone) | −13.9 mm | +13.0 mm |
| **Doublet focal length** | **+99.3 mm** | |

This cemented doublet is the achromatic corrector for Group 1. L13 is a biconcave negative element in a moderate-dispersion flint glass, while L14 is a biconvex positive element in the same high-index lanthanum crown used by L12. The combination provides weak net positive power (+99.3 mm focal length) while strongly correcting axial chromatic aberration.

The cemented interface at R = +17.77 is convex toward the image and nearly symmetric with L21's front surface (R = +22.92) across the stop. This near-symmetry, cited by the patent as the basis for Claim 8, is crucial for suppressing lateral chromatic aberration, coma, and distortion.

The doublet focal-length ratio between this doublet and the Group 2 front doublet (L21+L22) is governed by Condition (3): 2.0 < f₁c/f₂c < 7.9. The computed value is 3.49, indicating that the Group 1 doublet is substantially weaker than the G1 2 doublet.

### Aperture Stop

The stop is positioned between Group 1 and G1 2, in the air gap between L14 (rear surface 7) and L21 (front surface 9). At infinity focus, this gap is split as 2.2 mm (L14 rear to stop) + 5.58 mm (stop to L21 front) = 7.78 mm total. The surfaces flanking the stop — L14 rear (R = −29.70, convex toward image) and L21 front (R = +22.92, convex toward object) — are both convex toward the stop, creating the quasi-symmetric configuration described in Claim 8.

### L21 + L22 — Cemented Doublet (Group 2 Front)

| Property | L21 (front element) | L22 (rear element) |
|----------|--------------------|--------------------|
| Surfaces | 9 (R = +22.92) | 10 (junction, R = −11.87) / 11 (R = +30.47) |
| Thickness | 4.2 mm | 0.8 mm |
| nd / νd | 1.8830 / 40.8 | 1.6727 / 32.2 |
| Glass match | S-LAH58 (OHARA) | S-TIF6 (OHARA) / N-SF5 (SCHOTT) |
| Individual focal length (standalone) | +9.4 mm | −12.6 mm |
| **Doublet focal length** | **+28.5 mm** | |

This is the primary power-generating doublet of the entire system. L21 is a thick (4.2 mm) biconvex element — note that its standalone focal length of +9.4 mm makes it by far the strongest individual positive element when measured in air. Within the cemented group, its effective contribution is moderated by the high-index L22 glass (nd = 1.673) on its image side, which reduces the refraction at the junction compared to an air interface. L22 is a thin biconcave negative element providing chromatic correction.

The patent's Condition (4) governs the glass-dispersion balance between the Group 1 and G1 2 cemented doublets. The computed value of 0.78 falls within the required range of 0.7–1.6.

### L23 — Negative Meniscus

| Property | Value |
|----------|-------|
| Surfaces | 12 (front, R = −15.38) / 13 (rear, R = −129.05) |
| Thickness | 0.8 mm |
| nd / νd | 1.8467 / 23.9 |
| Glass match | S-TIH53 (OHARA) or N-SF57 (SCHOTT) |
| Focal length | −20.7 mm |

L23 is the most strongly dispersive element in the design (νd = 23.9), a dense flint glass with very high refractive index (nd = 1.847). It is a thin negative meniscus with its concave side toward the object. Its role is threefold: field flattener (pulling the Petzval sum toward zero), chromatic lever (extreme dispersion provides strong chromatic correction leverage with minimal power), and telephoto spacer (negative element between L21+L22 and L24 shortens the back focal distance).

The separation between L23 and L24 is extremely thin (0.1 mm), suggesting they function almost as a compound doublet, though they are not cemented.

### L24 — Biconvex Positive with One Aspherical Surface

| Property | Value |
|----------|-------|
| Surfaces | 14 (front, R = +72.46) / 15\* (rear, R = −16.82) |
| Thickness | 3.8 mm |
| nd / νd | 1.8014 / 45.4 |
| Glass match | S-LAH65V (OHARA) or N-LAF34 (SCHOTT) |
| Focal length | +17.4 mm |

L24 is the final optical element and the strongest individual positive element at its system position (f = +17.4 mm standalone). It is a biconvex lens with a relatively weak front surface (R = +72.46) and a strongly curved aspherical rear surface.

**Rear surface (surface 15\*):** K = −0.542 (prolate ellipsoid) with significant positive polynomial departure (+260 µm at h = 6.5 mm). As the last refracting surface, it has maximum leverage over field-dependent aberrations — particularly astigmatism and field curvature at the edge of the APS-C frame.

---

## 4. Aspherical Surface Summary

Example 3 uses three aspherical surfaces on two elements. The patent's sag formula uses the coefficient `k` in the position of `(1+K)` in the standard ISO sag equation. Therefore, K_standard = k_patent − 1. The polynomial coefficients transfer directly.

| Surface | R (mm) | k (patent) | K (standard) | Shape | Dominant departure |
|---------|--------|------------|-------------|-------|-------------------|
| 1\* (L11 front) | +23.77 | −5.163 | −6.163 | Strong hyperboloid | +230 µm at h=8.5 mm |
| 2\* (L11 rear) | +9.53 | +0.188 | −0.812 | Prolate ellipsoid | −796 µm at h=7.5 mm |
| 15\* (L24 rear) | −16.82 | +0.458 | −0.542 | Prolate ellipsoid | +260 µm at h=6.5 mm |

Surface 2\* specifies polynomial terms through A18, providing extremely fine control over the wide-angle beam at the rear of L11. Surfaces 1\* and 15\* use terms through A12.

---

## 5. Glass Selection and Material Strategy

The design uses a deliberate material palette organized around two principles: high-index lanthanum glasses for the positive power elements, and moderate-to-high-dispersion flint glasses for the negative elements.

| Element | nd | νd | Glass Type | Glass Code | Role |
|---------|------|------|-----------|------------|------|
| L11 | 1.5163 | 64.1 | Borosilicate crown | 516.641 | Low-dispersion aspherical corrector |
| L12 | 1.8830 | 40.8 | Lanthanum crown | 883.408 | High-index positive power |
| L13 | 1.6200 | 36.3 | Light flint | 620.363 | Chromatic corrector (neg.) |
| L14 | 1.8830 | 40.8 | Lanthanum crown | 883.408 | Achromat positive element |
| L21 | 1.8830 | 40.8 | Lanthanum crown | 883.408 | Primary positive power |
| L22 | 1.6727 | 32.2 | Dense flint | 673.322 | Chromatic corrector (neg.) |
| L23 | 1.8467 | 23.9 | Dense flint | 847.239 | Field flattener, chromatic lever |
| L24 | 1.8014 | 45.4 | Lanthanum crown | 801.454 | Rear positive, aspherical corrector |

Three elements (L12, L14, L21) share the identical glass — nd = 1.8830, νd = 40.8 — corresponding to OHARA S-LAH58 or equivalent. This simplifies procurement and manufacturing.

L23's extreme dispersion (νd = 23.9) marks it as a dense flint, likely OHARA S-TIH53 or SCHOTT N-SF57. Despite its thin profile (0.8 mm center thickness), its high dispersion gives it disproportionate chromatic correction leverage.

No anomalous partial dispersion (APD) glasses are used in this design.

**A note on the "special low-dispersion lens" marketing claim:** Ricoh's marketing describes "one special low-dispersion lens." In Example 3, L11 (νd = 64.1, N-BK7/S-BSL7 type) is the lowest-dispersion element, but BK7 is not typically considered "special" by industry standards — that term usually denotes ED glass with νd > 80. Notably, Examples 4 and 5 in the same patent include elements with νd = 81.5 (likely S-FPL51 or equivalent fluorite crown), which would unambiguously qualify. The production design may incorporate glass selections from other examples in the patent family.

---

## 6. Focusing Mechanism

The lens focuses by advancing both groups independently toward the object, with G1 1 moving farther than G2 2. This is the "floating focus" system described in the patent claims.

| Parameter | Infinity | Close (200 mm) | Change |
|-----------|---------|----------------|--------|
| D1 (inter-group gap, stop to L21) | 5.58 mm | 5.06 mm | −0.52 mm |
| D2 (BFD to cover glass front) | 14.26 mm | 15.92 mm | +1.66 mm |
| Group 1 extension | — | — | 2.18 mm |
| Group 2 extension | — | — | 1.66 mm |
| Extension ratio (G1/G2) | — | — | 1.31× |

The differential extension ratio of 1.31:1 is governed by Condition (7), which limits the log of the extension ratio to between −15 and −0.05. The computed value of −0.50 places this design comfortably mid-range.

The floating focus system provides two key optical benefits: it corrects for the change in aberration balance that occurs at finite conjugates, and it allows the close-focus distance to be quite short (200 mm) while maintaining excellent correction.

**Data file note:** The BFD values in the data file include the air-equivalent contribution of the cover glass (2.5 mm, nd = 1.5168), yielding air-equivalent BFDs of 15.91 mm (infinity) and 17.57 mm (close focus). The variable gap on the STO surface carries the inter-group spacing change.

---

## 7. Aberration Correction Strategy

The Petzval sum of 0.00700 mm⁻¹ corresponds to a Petzval radius of 142.9 mm — approximately 5× the image diagonal. This is a well-corrected value for a wide-angle lens.

**Spherical aberration** is controlled primarily by the aspherical surfaces on L11, which pre-shape the beam entering the high-power positive elements. The high refractive indices of L12, L14, and L21 (all nd = 1.883) further reduce spherical aberration by minimizing surface curvatures for a given power.

**Axial chromatic aberration** is corrected by the two cemented doublets (L13+L14 and L21+L22), which bracket the aperture stop. L23's extreme dispersion provides additional fine-tuning.

**Lateral chromatic aberration** is suppressed by the quasi-symmetric placement of the cemented doublets around the stop.

**Astigmatism and field curvature** are managed by the distributed negative elements (especially L23 as a field flattener) and by the aspherical rear surface of L24.

**Distortion** is controlled by the positive-leading architecture combined with the near-symmetric doublet placement. The patent claims distortion below 2.0% in absolute value.

**Coma** is controlled by the differential bending of the cemented doublets and by the aspherical profile on L11's rear surface.

---

## 8. Conditional Expression Verification

All seven patent conditional expressions were verified computationally for Example 3:

| Condition | Expression | Required Range | Computed | Patent Stated | Status |
|-----------|-----------|---------------|----------|---------------|--------|
| (1) | d₁₂₋₃ / d₁₁₋₂ | 0.0 – 1.0 | 0.347 | 0.36 | ✓ |
| (2) | f₁₁ / f₁₂ | −1.0 – −0.1 | −0.660 | −0.66 | ✓ |
| (3) | f₁c / f₂c | 2.0 – 7.9 | 3.486 | 3.48 | ✓ |
| (4) | (Nd₄·νd₄−Nd₃·νd₃)/(Nd₅·νd₅−Nd₆·νd₆) | 0.7 – 1.6 | 0.785 | 0.78 | ✓ |
| (5) | \|R₁₁ / R₂e\| | 0.4 – 2.1 | 1.413 | 1.41 | ✓ |
| (6) | \|R₁e / R₂₁\| | 1.2 – 2.6 | 1.296 | 1.30 | ✓ |
| (7) | Log\|(D1∞−D1c)/(D2∞−D2c)\| | −15 – −0.05 | −0.504 | −0.50 | ✓ |

The close agreement between computed and patent-stated values (all within rounding tolerance) confirms the accuracy of the prescription transcription.

---

## 9. Semi-Diameter Estimation

The patent does not list semi-diameters. Values were estimated via combined marginal-ray and chief-ray paraxial trace at f/2.56 with a 37.8° half-field angle (APS-C sensor diagonal of 28.3 mm). The entrance pupil semi-diameter is 3.57 mm, located 10.1 mm behind surface 1.

Marginal ray heights provide the on-axis beam size at each surface. Chief ray heights at 70% of the full field angle were used as the off-axis contribution, with 5–10% mechanical clearance added. The resulting estimates were validated against physical constraints: edge thickness > 0.3 mm for all elements, cross-gap sag intrusion < 1.1× the air gap, and sd/|R| < 0.90 for spherical surfaces. All constraints pass with the assigned values.

The L12→L13 air gap (1.7 mm) and L14 edge thickness (0.38 mm at sd = 7.5) were the binding constraints that limited the doublet-region semi-diameters.

---

## 10. Design Philosophy and Context

This lens represents Ricoh's approach to a difficult optical problem: designing a fast (f/2.5), wide-angle (28 mm equiv.), compact prime for a large (APS-C) sensor, with close-focus capability down to 20 cm, while maintaining image quality across the entire field that justifies the "GR LENS" designation.

The positive-leading two-group architecture is a departure from the more common retrofocus design. Since the GXR module has no mirror, the designer was free to use the more optically efficient positive-first layout, which yields shorter total track and better distortion characteristics.

The use of only 8 elements (or 9 in production) to achieve f/2.5 at 28 mm equivalent with APS-C coverage is remarkably efficient. This economy is enabled by three key design choices: the double-aspherical front element (L11), the high-index lanthanum glasses (nd ≈ 1.88) used throughout, and the floating focus system. The resulting lens achieves a total optical track of approximately 50 mm (≈ 1.77× the sensor diagonal).
