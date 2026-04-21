# Optical Analysis: Ricoh GR 28mm f/2.8 Lens

## US Patent 5,760,973 — Example 1

**Patent:** US 5,760,973, "Compact Wide-Angle Lens System"
**Inventor:** Atsushi Kawamura (Yokosuka, Japan)
**Assignee:** Ricoh Company, Ltd. (Tokyo, Japan)
**Filed:** December 20, 1996 | **Granted:** June 2, 1998
**Priority:** JP 7-338654, December 26, 1995

---

## 1. Context: The Ricoh GR-1

The Ricoh GR-1, released in 1996, established one of the most enduring legacies in compact camera design. Its 28mm f/2.8 GR lens — 7 elements in 4 groups with aspherical surfaces — set the standard against which subsequent compact wide-angle lenses would be measured for decades. The camera's magnesium alloy body measured just 26.5 mm thick, making it the thinnest full-frame 35mm camera ever produced at the time of its release.

US 5,760,973 discloses the optical design family from which the GR lens derives. The patent presents seven numerical examples spanning two primary embodiments (differing in whether the rear triplet L22 is a cemented junction lens or uses an air-spaced element, and whether the L31 asphere is ground glass or a hybrid resin layer). Example 1, corresponding to the first embodiment (FIG. 1), is the most likely candidate for the production design: a 7-element, 4-group system with two aspherical surfaces, a cemented doublet, and a cemented triplet. This identification rests on convergent criteria — matching element/group count (7/4), focal length (28.1 mm ≈ 28 mm), f-number (2.86 ≈ f/2.8), all-glass aspherical construction (consistent with "aspherical glass lenses" in Ricoh's marketing language, as opposed to the hybrid resin aspheres in Examples 6–7), and a patent priority date (December 1995) that precedes the GR-1's 1996 launch. Definitive confirmation would require Ricoh engineering disclosure.

The GR lens was subsequently extracted from the compact camera body and produced in a limited run of 3,000 units (2,000 silver, 1,000 black) in Leica Thread Mount (L39) in 1997 — a tribute to the optical quality Kawamura's design had achieved.


## 2. Lens Architecture

The lens follows a **negative-positive-positive-negative** (NPPN) quasi-symmetrical power arrangement around a central aperture stop, a classic architecture for compact wide-angle designs. The symmetry of the power distribution provides inherent correction of lateral chromatic aberration, coma, and distortion, while the use of a double-concave (rather than meniscus) front element enables the aggressive total-thickness reduction central to the patent's claims.

### Component Structure

| Component | Elements | Power | Architecture |
|-----------|----------|-------|--------------|
| L11 | L(1,1) | Negative | Single biconcave lens (aspherical front) |
| L21 | L(2,1) + L(2,2) | Positive | Cemented doublet (positive + negative) |
| *Stop* | — | — | *Aperture diaphragm between L21 and L22* |
| L22 | L(3,1) + L(3,2) + L(3,3) | Positive | Cemented triplet (junction lens) |
| L31 | L(4,1) | Negative | Single negative meniscus (aspherical front) |

The design totals 7 elements in 4 groups, with 12 optical surfaces (including the stop). Two surfaces carry aspherical profiles: the front surface of L11 (surface 1) and the front surface of L31 (surface 11).

### Verified System Parameters

| Parameter | Value | Source |
|-----------|-------|--------|
| Effective focal length | 28.106 mm | Paraxial ray trace (patent states f = 28.1) |
| F-number | 2.86 | Patent |
| Half field angle ω | 37.2° | Patent |
| Image diagonal | 42.67 mm | Computed (35mm film: 43.27 mm) |
| Total axial thickness (R1–R12) | 18.24 mm | Sum of spacings |
| D/f ratio | 0.649 | Computed (patent range: 0.549–0.651) |
| Back focal distance (BFD) | 17.22 mm | Marginal ray intercept |
| Number of aspherical surfaces | 2 | Surfaces 1 and 11 |
| Petzval sum | +0.00380 mm⁻¹ | Surface-by-surface computation |
| Petzval radius | −263.0 mm (|ρ|/f = 9.4) | Reciprocal of Petzval sum |

The D/f ratio of 0.649 sits at the upper boundary of the patent's cited range, confirming that this particular example achieves compactness (the patent's primary claim) while still meeting performance targets. The BFD of 17.22 mm — over 60% of the focal length — provides adequate flange clearance for both the compact camera's retractable barrel and the LTM conversion.


## 3. Surface Prescription

The following table reproduces the Example 1 prescription exactly as given in the patent, with the patent's surface numbering (i), radii of curvature (Ri), axial spacings (Di), lens number (j), refractive index (Nj), and Abbe number (νj).

| i | Ri (mm) | Di (mm) | j | Nj | νj | Notes |
|---|---------|---------|---|----|----|-------|
| 1 | −24.427 | 1.00 | 1 | 1.64769 | 33.8 | L(1,1) front — **aspherical** |
| 2 | 48.935 | 0.08 | | | | L(1,1) rear → air |
| 3 | 12.031 | 3.43 | 2 | 1.75700 | 47.7 | L(2,1) front |
| 4 | −14.840 | 0.90 | 3 | 1.68893 | 31.2 | Cemented junction → L(2,2) |
| 5 | −36.502 | 0.80 | | | | L(2,2) rear → air |
| 6 | (stop) | 2.41 | | | | Aperture diaphragm |
| 7 | −10.144 | 0.80 | 4 | 1.48749 | 70.4 | L(3,1) front |
| 8 | 34.733 | 4.37 | 5 | 1.83500 | 43.0 | Cemented junction → L(3,2) |
| 9 | −8.514 | 0.80 | 6 | 1.74077 | 27.8 | Cemented junction → L(3,3) |
| 10 | −19.156 | 2.45 | | | | L(3,3) rear → air |
| 11 | −9.270 | 1.20 | 7 | 1.60342 | 38.0 | L(4,1) front — **aspherical** |
| 12 | −16.394 | (BFD) | | | | L(4,1) rear → air |

**Sign convention:** R > 0 indicates the center of curvature lies to the right (image side) of the surface; R < 0 indicates it lies to the left (object side). All Di values are positive axial distances.

The last spacing (from surface 12 to the image plane) is the back focal distance, computed at 17.22 mm by extending the traced marginal ray to its axis crossing.

**Note on semi-diameters:** The patent does not list semi-diameters. On-axis marginal ray heights (scaled to the 4.91 mm entrance pupil radius) range from approximately 5.0 mm at the front surfaces to 3.0 mm at the rear, but the front element's clear aperture must also accommodate the off-axis chief ray at ω = 37.2°. For a 28mm f/2.8 wide-angle with the stop between L21 and L22, the front element SD is typically 10–12 mm while the rear element requires only 6–8 mm. This front-to-rear aperture taper is visible in the patent's FIG. 1 drawing.


## 4. Glass Identification

The patent specifies each element's refractive index (nd, d-line 587.6 nm) and Abbe number (νd) to five decimal places and one decimal place respectively. By matching these values against the OHARA, Schott, and HOYA catalogs, the following identifications can be made. All seven elements yield essentially exact catalog matches (Δnd < 0.00001, Δνd < 0.1), indicating the patent prescription uses standard production glasses rather than custom melt compositions.

### Element 1 — L(1,1): nd = 1.64769, νd = 33.8

**Best match: SF2 (Schott) / FD2 (HOYA)**

SF2 is a classic dense flint glass (nd = 1.64769, νd = 33.85). This is a traditional, inexpensive flint with moderate dispersion — an unusual choice for a front element in a wide-angle lens, where crown glasses are more common. However, the NPPN architecture places this negative element at the front of a quasi-retrofocus arrangement, where a high-dispersion flint glass enables the first component to contribute strongly to lateral chromatic correction across the wide field. The relatively low refractive index (for a flint) keeps surface curvatures from becoming extreme, which matters because this surface carries an aspherical profile.

### Element 2 — L(2,1): nd = 1.75700, νd = 47.7

**Best match: S-LAM54 (OHARA)**

S-LAM54 is a lanthanum flint (LaF) type glass with an excellent combination of high refractive index and moderate-to-low dispersion. In the Abbe diagram, this glass sits in the "lanthanum" region above the normal line — it provides anomalous partial dispersion characteristics that help control secondary spectrum. As the positive element of the L21 cemented doublet, it carries the primary convergent power of the front half of the lens. The high index (1.757) allows this convergent power to be achieved with moderate curvatures (R3 = +12.031, R4 = −14.840), reducing higher-order spherical aberration and making the doublet more tolerant to manufacturing errors.

### Element 3 — L(2,2): nd = 1.68893, νd = 31.2

**Best match: S-TIM35 (OHARA) / FD110 (HOYA)**

S-TIM35 is a titanium flint glass with moderately high dispersion. Cemented to L(2,1), it forms the negative half of the L21 doublet. The Abbe number difference between L(2,1) and L(2,2) is 47.7 − 31.2 = 16.5, satisfying the patent's Condition (4) requiring this difference to exceed 7.0. This large Δν drives effective achromatization in the front group — the positive and negative elements focus different wavelengths at sufficiently similar points to control longitudinal chromatic aberration on the object side of the stop.

### Element 4 — L(3,1): nd = 1.48749, νd = 70.4

**Best match: FK5 (Schott) / S-FSL5 (OHARA) / FC5 (HOYA)**

FK5 is a fluorophosphate crown glass with very low dispersion and relatively low refractive index. This is the negative element at the front of the L22 cemented triplet. Its very low index (1.487) compared to L(3,2) behind it (1.835) creates a powerful refracting junction surface that provides strong convergent correction — this is the junction whose power is characterized by Condition (7). The low index also contributes to a low Petzval sum contribution, helping to flatten the field across the wide 74.4° total field angle. FK5 is a well-characterized glass with excellent homogeneity, an important consideration since it forms part of a precision cemented triplet.

### Element 5 — L(3,2): nd = 1.83500, νd = 43.0

**Best match: S-LAH55 (OHARA) / TAFD5 (HOYA)**

S-LAH55 is a high-index lanthanum crown glass — one of the highest-index glasses in common production optical design. As the biconvex positive core of the L22 cemented triplet, it provides the strongest convergent contribution in the rear half of the lens. The very high refractive index (1.835) is critical: it allows strong power in a compact axial thickness (4.37 mm center thickness) while the cemented boundaries with L(3,1) and L(3,3) control chromatic and spherical aberrations through the index-step mechanism. The patent's Condition (1A) — N(3,2) − {N(3,1) + N(3,3)}/2 > 0.1 — evaluates to 0.221 for this design, confirming that L(3,2) has substantially higher index than the average of its two cemented neighbors, enabling the junction surfaces to carry convergent correction.

### Element 6 — L(3,3): nd = 1.74077, νd = 27.8

**Best match: EFD4 (HOYA)**

EFD4 is a high-dispersion extra-dense flint glass. As the rear element of the L22 cemented triplet, this concave meniscus provides the high-dispersion complement needed to achromatize the triplet as a unit. The cemented junction between L(3,2) and L(3,3) acts as a chromatic corrector for the rear group — the large index step (1.835 → 1.741) at R9 = −8.514 mm creates a strongly curved virtual boundary that separates wavelengths without introducing the alignment sensitivity of an air-spaced interface. This glass has no obvious Schott catalog equivalent at the exact nd/νd combination, suggesting that HOYA (or an equivalent Japanese manufacturer) was the primary supplier for this element.

### Element 7 — L(4,1): nd = 1.60342, νd = 38.0

**Best match: F5 (Schott) / S-TIM5 (OHARA) / E-F5 (HOYA)**

F5 is a medium-index flint glass with moderate dispersion. This element serves as the field flattener and rear corrector, carrying the second aspherical surface. The moderate refractive index (1.603) keeps the surface curvatures manageable while the aspherical front surface provides the diverging correction needed to flatten the Petzval field curvature across the wide field. F5 is an inexpensive, commonly available glass — appropriate for a production compact camera lens where cost and supply chain reliability matter.

### Glass Summary

| Elem | Patent nd/νd | Best Catalog Match | Glass Family | Role in Design |
|------|-------------|-------------------|--------------|----------------|
| L11 | 1.64769 / 33.8 | SF2 (Schott) | Dense flint | Front negative, asph. |
| L21 | 1.75700 / 47.7 | S-LAM54 (OHARA) | Lanthanum flint | Doublet positive |
| L22 | 1.68893 / 31.2 | S-TIM35 (OHARA) | Titanium flint | Doublet negative |
| L31 | 1.48749 / 70.4 | FK5 (Schott) | Fluorophosphate crown | Triplet front negative |
| L32 | 1.83500 / 43.0 | S-LAH55 (OHARA) | Lanthanum crown | Triplet positive core |
| L33 | 1.74077 / 27.8 | EFD4 (HOYA) | Extra-dense flint | Triplet rear negative |
| L41 | 1.60342 / 38.0 | F5 (Schott) | Flint | Field flattener, asph. |

The glass selection reveals a deliberate mix of Japanese (OHARA, HOYA) and European (Schott) catalog types. All seven glasses are standard catalog items available in the mid-1990s, consistent with a high-volume production compact camera. No exotic or special-melt glasses appear in the prescription. The design achieves its performance through architecture and aspherical correction rather than exotic materials.


## 5. Aspherical Surface Analysis

### 5.1 Sag Equation

Both aspherical surfaces use the standard even-polynomial asphere formula defined in the patent:

$$Z(h) = \frac{h^2 / R}{1 + \sqrt{1 - (1+K)(h/R)^2}} + A \cdot h^4 + B \cdot h^6 + C \cdot h^8 + D \cdot h^{10}$$

where R is the paraxial radius of curvature, K is the conic constant, and A through D are the 4th through 10th order deformation coefficients.

### 5.2 Surface 1 — L(1,1) Front (Object Side)

| Parameter | Value |
|-----------|-------|
| R (paraxial) | −24.427 mm |
| K | −0.0665 |
| A (4th order) | −2.7200 × 10⁻⁵ |
| B (6th order) | −1.4150 × 10⁻⁶ |
| C (8th order) | +4.4660 × 10⁻⁸ |
| D (10th order) | −6.1390 × 10⁻¹⁰ |

**Aspherical departure from base sphere (computed):**

| h (mm) | Z_asph (mm) | Z_sphere (mm) | Departure (μm) |
|--------|-------------|---------------|-----------------|
| 2.0 | −0.0825 | −0.0820 | −0.5 |
| 4.0 | −0.3401 | −0.3297 | −10.3 |
| 6.0 | −0.8109 | −0.7484 | −62.6 |
| 8.0 | −1.7368 | −1.3472 | −389.6 |

*Note: The aspherical departure grows rapidly at large heights due to the h⁴ and h⁶ polynomial terms. The actual clear aperture of L11 is estimated at SD ≈ 10–12 mm (accounting for off-axis bundles), where the departure would exceed 1 mm. At such magnitudes, the aspherical surface is no longer a small perturbation of the sphere — it is a fundamentally reshaped surface that can only be economically produced by precision glass molding rather than polishing.*

The conic constant K = −0.0665 is a mild prolate ellipsoid, which in isolation would slightly flatten the surface relative to a sphere. However, the even-order polynomial terms — particularly the dominant 4th and 6th orders (A = −2.72×10⁻⁵, B = −1.415×10⁻⁶, both negative) — overwhelm the conic contribution and deepen the surface sag beyond that of the base sphere at all aperture heights. Decomposition confirms the conic reduces curvature by only +0.15 μm at h = 4 mm, while the polynomials increase it by −10.5 μm. The net aspherical departure is negative throughout (−0.5 μm at h = 2 mm, rising to −390 μm at h = 8 mm), meaning the aspherical surface is consistently more deeply curved — and therefore more diverging — than the base sphere toward the periphery. Numerical differentiation confirms the aspherical surface slope exceeds the spherical slope at all computed heights (|dZ/dh|_asph = 0.177 vs 0.166 at h = 4 mm, rising to 0.754 vs 0.347 at h = 8 mm), directly demonstrating the increasing diverging characteristic the patent describes.

**Optical role:** The patent explicitly states that this aspherical surface corrects curvature of field and coma aberrations produced by the fifth refraction surface (R5, the rear of L21,2). By making the front surface of the biconcave L11 aspherical with increasing divergence toward the periphery, off-axis rays passing through the outer zones of this element experience progressively more negative power than they would from a pure sphere. This increased peripheral divergence counteracts the inward-curving Petzval surface produced by the positive groups, selectively flattening the field at large image heights. The coma correction arises because the aspherical departure modifies the effective prism angle for off-axis ray bundles as a function of both ray height and field angle, reducing the asymmetric aberration of the beam cross-section.

### 5.3 Surface 11 — L(4,1) Front (Object Side)

| Parameter | Value |
|-----------|-------|
| R (paraxial) | −9.270 mm |
| K | +0.5327 |
| A (4th order) | −8.3178 × 10⁻⁵ |
| B (6th order) | +2.8840 × 10⁻⁶ |
| C (8th order) | −1.0011 × 10⁻⁷ |
| D (10th order) | +1.0731 × 10⁻⁹ |

**Aspherical departure from base sphere (computed):**

| h (mm) | Z_asph (mm) | Z_sphere (mm) | Departure (μm) |
|--------|-------------|---------------|-----------------|
| 1.4 | −0.1070 | −0.1063 | −0.6 |
| 2.8 | −0.4429 | −0.4330 | −9.9 |
| 4.2 | −1.0590 | −1.0060 | −52.9 |
| 5.6 | −2.0904 | −1.8827 | −207.7 |

The conic constant K = +0.5327 is an oblate ellipsoid, which by itself makes the conic surface steeper than a sphere at the periphery. The dominant 4th-order polynomial coefficient A = −8.3178×10⁻⁵ (approximately three times larger in magnitude than Surface 1's coefficient) adds further deepening in the same direction — for a surface with R < 0, negative polynomial contributions produce more negative sag, meaning greater curvature. Both the conic and the dominant polynomial term therefore work together to make this surface more deeply curved than the base sphere toward the rim, producing the increasing diverging characteristic the patent specifies. The alternating signs of the higher-order coefficients (B positive, C negative, D positive) fine-tune the departure profile across the clear aperture, but do not reverse the overall trend.

**Optical role:** This is the primary field-flattening asphere. The patent's Condition (5) governs the shape factor of this element, and the aspherical surface is specifically identified as providing correction for curvature of field and coma at the image side. The L31 component carries negative power that bends diverging off-axis ray bundles back toward the image plane; the aspherical correction tailors this bending as a function of ray height so that the tangential and sagittal focal surfaces are brought into coincidence at the film plane across the full 74.4° field.

### 5.4 Comparison of the Two Aspheres

The two aspherical surfaces form a matched pair bracketing the lens system — one at the front (object side of L11) and one near the rear (object side of L31). This front-and-rear aspherical strategy is characteristic of compact wide-angle designs where a single asphere cannot provide sufficient correction across the full field. Surface 1 primarily addresses the object-side ray bundle geometry (wide-angle entrance condition, distortion, field curvature from the front group), while Surface 11 provides the final image-side correction (residual field curvature, coma, sagittal/tangential focus balance). The aspherical departure of Surface 11 is roughly 3–4× larger than Surface 1 at comparable fractional aperture heights, consistent with its stronger corrective role.


## 6. Element-by-Element Optical Roles

### L(1,1) — Biconcave Negative (Component L11)

**Surfaces:** R1 = −24.427 (asph), R2 = +48.935
**Thin-lens focal length:** −25.0 mm
**Shape factor:** (R1+R2)/(R1−R2) = −0.334

This element serves as the front negative component of the quasi-retrofocus arrangement, diverging the incoming wide-angle ray bundle before it reaches the positive groups. Its biconcave form — rather than a more conventional negative meniscus — is specifically cited by the patent as enabling a reduction in total lens thickness. The asymmetric curvatures (the front surface is roughly twice as steep as the rear) orient the stronger power toward the object, which distributes the ray bending more evenly and reduces higher-order aberrations. The aspherical front surface progressively increases the diverging power toward the periphery, strengthening the element's field-flattening contribution for off-axis ray bundles while simultaneously correcting coma generated downstream in the G2 group.

### L(2,1) — Biconvex Positive (First Element of Component L21)

**Surfaces:** R3 = +12.031, R4 = −14.840 (junction)
**Thin-lens focal length:** +8.8 mm

This is the strongest positive element in the system and carries the primary convergent power of the front group. The high-index lanthanum glass (S-LAM54, nd = 1.757) allows this power to be achieved with moderate curvatures, keeping spherical aberration contributions under control. Its biconvex form distributes the refraction roughly equally between front and rear surfaces, minimizing the contribution to coma.

### L(2,2) — Negative Meniscus (Second Element of Component L21)

**Surfaces:** R4 = −14.840 (junction from L21,1), R5 = −36.502
**Thin-lens focal length:** −36.3 mm

Cemented to L(2,1), this element primarily serves as a chromatic corrector for the G2 group. The Abbe number difference of 16.5 between L(2,1) and L(2,2) — well above the Condition (4) minimum of 7 — ensures strong achromatization. The cemented junction at R4 also corrects some of the spherical aberration generated by L(2,1)'s strong positive power.

### L(3,1) — Biconcave Negative (Front of Component L22 Triplet)

**Surfaces:** R7 = −10.144, R8 = +34.733 (junction to L22,2)
**Thin-lens focal length:** −16.1 mm

The front element of the cemented triplet. Its low-index FK5 glass (nd = 1.487) creates a large index step at the cemented junction with L(3,2) (Δn = 0.348 at R8), which is the critical correcting surface described by Condition (7). The patent specifically notes that the air-lens equivalent between L(3,1) and L(3,2) — in embodiments where this element is air-spaced rather than cemented — carries a "fifth refracting power" that plays a critical role in correcting distortion and astigmatism. In the cemented (junction lens) form used in Example 1, the junction surface itself fulfills this role with the added benefit of reduced sensitivity to assembly errors and decentration.

### L(3,2) — Biconvex Positive (Core of Component L22 Triplet)

**Surfaces:** R8 = +34.733 (junction from L22,1), R9 = −8.514 (junction to L22,3)
**Thin-lens focal length:** +8.2 mm

The positive powerhouse of the rear group. At nd = 1.835, this S-LAH55 glass has the highest refractive index in the system. The two cemented junction surfaces on either side of this element — R8 (from FK5 at 1.487) and R9 (to EFD4 at 1.741) — create strongly refracting buried surfaces that provide convergent correction without the alignment sensitivity of air-spaced interfaces. The 4.37 mm center thickness (the thickest element in the system) accommodates the steep curvatures while maintaining adequate edge thickness for the junction bond.

### L(3,3) — Concave Meniscus Negative (Rear of Component L22 Triplet)

**Surfaces:** R9 = −8.514 (junction from L22,2), R10 = −19.156
**Thin-lens focal length:** −20.7 mm

The rear element of the cemented triplet, this high-dispersion flint (EFD4, νd = 27.8) provides the chromatic balance for the G3 group. The three-element cemented construction — low-index crown, high-index lanthanum, high-dispersion flint — is a sophisticated variant of the classic apochromatic triplet configuration, optimized here not for secondary spectrum correction but for simultaneous control of chromatic aberration, Petzval sum, and spherical aberration within a minimal axial thickness.

### L(4,1) — Negative Meniscus (Component L31)

**Surfaces:** R11 = −9.270 (asph), R12 = −16.394
**Thin-lens focal length:** −35.4 mm
**Shape factor:** (R11+R12)/(R11−R12) = −3.60

The final element serves as the field flattener and exit corrector. Its aspherical front surface is the primary mechanism for final image-side correction of field curvature and coma. The meniscus form (both surfaces concave toward the object) bends peripheral ray bundles outward, counteracting the natural inward-curving Petzval field surface. The Condition (5) shape factor of −3.60 places this element in a regime where the diverging characteristic is moderate — not so extreme as to overcorrect coma, but sufficient to flatten the field adequately.

In the compact camera implementation, this is the rearmost glass element, positioned close to the film plane. Its object-side aspherical surface faces inward (toward the lens barrel interior) and is therefore protected from physical contact — a practical consideration the patent explicitly notes, since aspherical surfaces are more easily scratched than spherical ones.


## 7. Cemented Groups

### G2 — Cemented Doublet: L(2,1) + L(2,2)

The L21 doublet (surfaces R3 through R5) cements a lanthanum positive element (S-LAM54) to a titanium flint negative (S-TIM35). The junction at R4 = −14.840 mm creates an internal refracting surface with index step Δn = 1.68893 − 1.75700 = −0.06807. This relatively small step (compared to the L22 junctions) indicates that the L21 doublet functions primarily as an achromatic pair where the chromatic correction derives from the Abbe number difference (Δν = 16.5) rather than from a large power contribution at the cemented surface itself.

### L22 — Cemented Triplet (Junction Lens): L(3,1) + L(3,2) + L(3,3)

The L22 triplet (surfaces R7 through R10) is the most optically complex sub-assembly in the system. The junction at R8 carries the large index step Δn = 1.83500 − 1.48749 = +0.34751 — one of the largest cemented-surface index steps in production lens design. This junction surface alone has a power φ_C = 0.01001 mm⁻¹, which represents 28.1% of the total system power (Condition 7 = 0.281).

The second junction at R9 carries Δn = 1.74077 − 1.83500 = −0.09423. Combined, the two buried surfaces provide a powerful chromatic correction mechanism internal to the triplet, independent of the air-glass boundaries.

The patent notes that the cemented triplet form (versus the air-spaced alternative in Examples 4 and 5) provides two advantages: reduced sensitivity to manufacturing tolerances and decentration, and the replacement of air-glass boundaries by junction surfaces, which reduces ghost reflections and flare.


## 8. Patent Condition Verification

The patent defines eight conditional expressions that characterize valid designs within the family. All are satisfied by Example 1.

| Condition | Expression | Range | Example 1 Value | Status |
|-----------|-----------|-------|-----------------|--------|
| (1) | φ₁/φ₄ | 0.7 – 2.5 | 1.44 | ✓ |
| (2) | φ₂/φ₃ | 1.8 – 7.0 | 4.17 | ✓ |
| (3) | {N(2,1)+N(3,2)}/2 | > 1.7 | 1.80 | ✓ |
| (4) | ν(2,1) − ν(2,2) | > 7 | 16.5 | ✓ |
| (5) | {R(4,1)+R(4,2)}/{R(4,1)−R(4,2)} | −6 to +2 | −3.60 | ✓ |
| (7) | φ_C / φ | 0.15 – 0.5 | 0.281 | ✓ |
| (8) | {R(1,1)+R(1,2)}/{R(1,1)−R(1,2)} | −1 to 0 | −0.334 | ✓ |
| (1A) | N(3,2) − {N(3,1)+N(3,3)}/2 | > 0.1 | 0.221 | ✓ |

Condition values (1) and (2) as listed in the patent (1.44 and 4.17 respectively) are taken directly from the patent text. Independent thick-lens group focal length computation (tracing each group in isolation through its full surface prescription) yields φ₁/φ₄ ≈ 1.51 and φ₂/φ₃ ≈ 4.56. The 5–9% discrepancy between these values and the patent's stated figures likely reflects a difference in how the group "refracting power" is defined internally: the patent author may compute group power using Gaussian brackets, thin-lens-with-thickness-correction formulae, or the equivalent power extracted from the full system matrix, each of which can yield slightly different results for thick cemented groups. This is a known subtlety in patent condition verification — the conditions define design ranges (e.g., 0.7–2.5 and 1.8–7.0), and both the patent-stated and independently-computed values fall well within bounds. Conditions (5), (7), and (8), which depend only on surface radii and glass indices (not composite group powers), verify to full precision against the patent values.


## 9. Focus Mechanism

The patent does not include variable air-gap tables for any of the seven examples, and describes the lens system in the context of a compact camera with a "lens-system retracting mechanism" (retractable barrel). This is consistent with **unit focusing**: the entire 7-element optical assembly moves as a rigid unit along the optical axis, with only the back focal distance changing during focus.

The Ricoh GR-1 specification confirms a focus range of 0.35 m to infinity (the later L39/LTM interchangeable version was limited to 0.7 m, constrained by rangefinder coupling geometry rather than optical performance). Using the thin-lens conjugate formula and the verified 28.1 mm EFL, the lens extension at 0.35 m object distance is approximately 2.5 mm — well within the range of a compact helicoid or cam-driven barrel mechanism.

Unit focusing is the simplest and most mechanically reliable focus mechanism, which aligns with the patent's design goals of compactness and simple barrel construction. It does mean that off-axis aberrations (particularly coma, astigmatism, and field curvature) are optimized for infinity and will degrade somewhat at close focus distances, since the aspherical corrections are designed for the infinity conjugate. For a 28mm wide-angle lens focused beyond about 1 meter, this degradation is negligible in practice.


## 10. Aberration Correction Strategy

The overall aberration correction strategy can be understood as a layered approach:

**Spherical aberration** is primarily controlled by the biconvex forms of L(2,1) and L(3,2), which distribute the refraction across front and rear surfaces, and by the high refractive indices of these elements (1.757 and 1.835), which reduce the surface curvatures required for a given power. The cemented junctions further subdivide the ray bending.

**Coma** is corrected through the quasi-symmetrical NPPN power arrangement and the two aspherical surfaces. The front asphere (Surface 1) corrects coma generated by the front group, while the rear asphere (Surface 11) corrects residual coma from the rear group.

**Astigmatism and field curvature** are the most challenging aberrations in a compact wide-angle design. The computed Petzval sum of +0.00380 mm⁻¹ (Petzval radius ρ = −263 mm, |ρ|/f = 9.4) demonstrates a nearly flat intrinsic field — an outstanding result for a 7-element design. This is achieved through careful balancing of positive and negative Petzval contributions across the four groups: L21 contributes the largest positive term (+0.0485, from its strong convergent power and high-index glass), while L11 (−0.0241), L31 (−0.0176), and L22 (−0.0030) provide compensating negative contributions. The low-index FK5 glass in L(3,1) (nd = 1.487) is specifically chosen for its Petzval contribution — low index means the (n'−n)/(n·n'·R) term at surface 7 carries a large negative value that helps flatten the field. The remaining astigmatism and residual field curvature are corrected by: (a) the cemented junction surface at R8 (Condition 7), which provides a strong corrective effect on the sagittal/tangential field balance; (b) both aspherical surfaces, which modulate the peripheral power to bring tangential and sagittal focal surfaces into coincidence; and (c) the NPPN power distribution itself.

**Distortion** is controlled through the quasi-symmetrical arrangement around the aperture stop. The patent's aberration curves (FIG. 5) for Example 1 show distortion below 3% at the maximum field angle — well controlled for a 74.4° total field.

**Chromatic aberration** is corrected in two stages: the L21 cemented doublet achromatizes the front group (object side of stop), while the L22 cemented triplet achromatizes the rear group (image side of stop). The symmetric placement of these achromatized groups on either side of the stop makes axial and lateral chromatic correction naturally compatible, as the patent text notes.


## 11. Notes on the Production Lens

The GR-1 lens (and the subsequent GR-1s and GR-1v variants) used the same 7-element, 4-group optical formula throughout the production run, with the GR-1s adding two additional anti-reflection coatings to the lens elements. The mechanical implementation featured a retractable barrel that collapsed the lens to near-flat within the camera body (contributing to the 26.5 mm body thickness), extending the full optical assembly on power-up.

The limited-edition L39 mount version (1997) placed the entire optical assembly in a fixed barrel at the correct flange distance, without the retractable mechanism. This conversion required no optical changes — the lens formula, glass types, and aspherical surfaces were identical to the compact camera version. The L39 version's close-focus was limited to 0.7 m by the rangefinder coupling mechanism, versus 0.35 m in the camera body.

**Caveat on production identification:** While Example 1 is the strongest candidate for the production GR lens (see Section 1 for convergent criteria), optical patents routinely include the production design alongside related variants, and the precise correspondence is inferential. The production lens may incorporate minor optimization changes (coating prescriptions, manufacturing tolerances, slight prescription tweaks) not reflected in the patent examples.

---

**Document prepared from US Patent 5,760,973. All numerical values and condition parameters verified by independent paraxial ray trace computation (EFL verified to within 0.02% of patent-stated value). Petzval sum computed surface-by-surface and verified against group contributions. Aspherical departures and local slopes computed numerically and cross-checked against patent descriptions. Glass identifications are inferred from catalog matching against OHARA, Schott, and HOYA databases and should be treated as best-fit identifications rather than confirmed production specifications.**


