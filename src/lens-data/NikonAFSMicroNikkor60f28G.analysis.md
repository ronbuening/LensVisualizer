# Optical Analysis: Nikon AF-S Micro-NIKKOR 60mm f/2.8G ED

**Patent:** US 7,898,744 B2 — *"Close-Up Lens, Imaging Apparatus, and Method for Focusing Close-Up Lens"*
**Inventor:** Mitsuaki Wada
**Assignee:** Nikon Corporation (Tokyo, JP)
**Filed:** March 13, 2008 | **Granted:** March 1, 2011
**Priority:** JP 2007-065400 (March 14, 2007), JP 2008-034053 (February 15, 2008)
**Production design:** Example 2 (Table 2)

---

## 1. Patent-to-Production Correspondence

The patent covers eight numerical examples of an internal-focusing macro (close-up) lens with four focusing groups. Example 2 matches the production AF-S Micro-NIKKOR 60mm f/2.8G ED on all verifiable parameters:

| Parameter | Example 2 (patent) | Production lens (Nikon) | Match |
|---|---|---|---|
| Elements | 12 | 12 | ✓ |
| Optical groups | 9 | 9 | ✓ |
| Aspherical elements | 2 (S2, S8) | 2 | ✓ |
| ED glass elements | 1 (L31, vd = 82.56) | 1 | ✓ |
| f-number | 2.88 | 2.8 | ✓ |
| Maximum magnification | β = −1.0 (1:1) | 1:1 | ✓ |
| Internal focusing | Yes (G1, G4 fixed) | Yes | ✓ |
| Computed EFL | 58.01 mm | 60 mm | ~×1.034 scale |

The patent prescription is computed at f ≈ 58.0 mm. The production lens is marketed as 60 mm, implying a uniform scale factor of approximately ×1.034 applied to all radii, thicknesses, and semi-diameters. This small scaling is typical of Nikon patent practice where prescriptions are given at a nominal focal length and the production design is scaled to the marketed specification. The image height of Y = 21.63 mm listed in the patent aberration plots corresponds to an image diagonal of 43.26 mm — consistent with the FX-format (35 mm) image circle. At the production focal length of 60 mm, the resulting full field of view is 2 × arctan(21.63 / 60) = 39.66°, essentially identical to the production specification of 39° 40′.


## 2. Design Architecture

### 2.1 Overall Configuration: Four Focusing Groups

The lens is organized into four groups defined by their behavior during focusing:

- **G1** (fixed): Surfaces S1–S6 — three elements (L11, L12, L13). Positive net power (f_G1 ≈ +91.2 mm). Fixed relative to the image plane.
- **G2** (focusing): Surfaces S7–S11 — three elements (L21, L22+L23 cemented doublet). Negative net power (f_G2 ≈ −301.4 mm). Moves toward the image upon close focusing.
- **Aperture stop S**: Located between G2 and G3. Fixed relative to the image plane.
- **G3** (focusing): Surfaces S13–S17 — three elements (L31, L32+L33 cemented doublet). Positive net power (f_G3 ≈ +44.3 mm). Moves toward the object upon close focusing.
- **G4** (fixed): Surfaces S18–S22 — three elements (L41, L42+L43 cemented doublet). Negative net power (f_G4 ≈ −70.5 mm). Fixed relative to the image plane.

The nine optical groups (as counted by Nikon's marketing specification) correspond to the individual elements and cemented doublets: L11 | L12 | L13 | L21 | L22+L23 | L31 | L32+L33 | L41 | L42+L43.


### 2.2 Design Lineage

The G1(+)–G2(−)–Stop–G3(+)–G4(−) power arrangement distributes positive power across the front fixed group and the rear focusing group, with G3 carrying the strongest positive power (f ≈ +44 mm) and G4 acting as a negative field-flattening group. This is structurally related to a double-Gauss arrangement split around the stop, adapted for internal focusing by dividing the lens into fixed and movable subassemblies. G2's very weak negative power (f ≈ −301 mm) means it acts primarily as an aberration corrector rather than a strong diverging element. The design is noteworthy for using *two* independent focusing groups (G2 and G3) that move in opposite directions — a floating-focus strategy that enables effective correction of aberration variation across the full focus range from infinity to 1:1 magnification.

---

## 3. Element-by-Element Analysis

### 3.1 Summary Table

| Elem | Group | Type | nd | vd | f (mm) | Glass (catalog match) |
|---|---|---|---|---|---|---|
| L11 | G1 | Neg. Meniscus (1× Asph) | 1.80440 | 39.57 | −50.0 | S-LAH63Q (OHARA) / TAF3 (HOYA) |
| L12 | G1 | Positive Meniscus | 1.63854 | 55.48 | +85.0 | H-LAK6A (CDGM) or Nikon melt |
| L13 | G1 | Biconvex Positive | 1.83481 | 42.71 | +57.6 | TAFD5 (HOYA) |
| L21 | G2 | Neg. Meniscus (1× Asph) | 1.51612 | 64.03 | −51.5 | S-BSL7 (OHARA) / N-BK7 (Schott) |
| L22 | G2 | Biconcave Negative | 1.62004 | 36.30 | −26.3 | S-TIM2 (OHARA) |
| L23 | G2 | Biconvex Positive | 1.88300 | 40.77 | +21.9 | S-LAH58 (OHARA) |
| L31 | G3 | Biconvex Positive (ED) | 1.49782 | 82.56 | +79.4 | S-FPM4 (OHARA) — **ED glass** |
| L32 | G3 | Biconvex Positive | 1.60300 | 65.47 | +40.6 | S-PHM53 (OHARA) |
| L33 | G3 | Negative Meniscus | 1.84666 | 23.78 | −66.7 | S-TIH53 (OHARA) / N-SF57 (Schott) |
| L41 | G4 | Negative Meniscus | 1.80518 | 25.43 | −45.3 | S-TIH6 (OHARA) / SF6 (Schott) |
| L42 | G4 | Negative Meniscus | 1.80100 | 34.96 | −30.2 | NBFD3 (HOYA) |
| L43 | G4 | Positive Meniscus | 1.84666 | 23.78 | +24.0 | S-TIH53 (OHARA) / N-SF57 (Schott) |


### 3.2 Group 1 — Front Fixed Group (G1): L11, L12, L13

**Overall function:** G1 provides positive front-group convergence (f_G1 ≈ +91.2 mm), establishing the initial focusing of the marginal ray and setting the angular behavior of the chief ray entering the movable groups. Although G3 is the stronger positive group (f_G3 ≈ +44.3 mm), G1's fixed position means its aberration contributions are constant across the entire focus range — the design must balance these against the variable contributions of G2 and G3.

**L11 — Negative Meniscus with Aspherical Rear Surface (f = −50.0 mm)**

L11 is the front element, a negative meniscus lens with its convex surface facing the object. The rear surface (S2) is aspherical, making this one of the two aspherical elements in the design. Its glass is a lanthanum-dense-flint type (nd = 1.80440, vd = 39.57), closely matching OHARA S-LAH63Q or HOYA TAF3. This high-index, moderate-dispersion glass minimizes surface curvatures for a given optical power, which in turn reduces higher-order aberrations.

The negative meniscus form in front of a positive group is a classic strategy for extending the field angle while controlling Petzval sum and coma. The aspherical rear surface carries a strongly negative conic constant (K = −5.3148, a hyperboloid) which acts to counteract the spherical aberration and coma that would otherwise be generated by the fast, wide-aperture front group. At a height of 10 mm, the aspherical departure from the base sphere is approximately +0.115 mm — a significant correction. This asphere is likely fabricated by precision glass molding or a hybrid (compound) process given the high-index glass substrate.

**L12 — Positive Meniscus (f = +85.0 mm)**

L12 is a weak positive meniscus (convex to object). Its glass (nd = 1.63854, vd = 55.48) places it in the lanthanum crown / dense barium crown region of the glass map. No exact match was found in the major Japanese or German catalogs (OHARA, Schott, HOYA); the closest candidate from extended catalogs is CDGM H-LAK6A (nd ≈ 1.6385, vd ≈ 55.4). This may alternatively be a Nikon-specified melt optimized for specific partial dispersion characteristics. Its moderate power and meniscus form contribute to correcting the Petzval sum (field curvature) while introducing minimal additional spherical aberration.

**L13 — Biconvex Positive (f = +57.6 mm)**

L13 is the strongest positive element in G1, with a high-index lanthanum-dense-flint glass (nd = 1.83481, vd = 42.71) that matches HOYA TAFD5 essentially exactly. The biconvex form provides strong convergence, and the high refractive index keeps surface curvatures moderate despite the short focal length. This element provides the bulk of the group's positive power and, together with L11's aspherical correction, establishes the primary imaging convergence before the light enters the moving groups.


### 3.3 Group 2 — First Focusing Group (G2): L21, L22+L23

**Overall function:** G2 has negative net power and moves toward the image plane as the lens focuses from infinity to 1:1 magnification. It travels approximately +11.2 mm over the full focus range. The group contains one aspherical element and one cemented doublet.

**L21 — Negative Meniscus with Aspherical Rear Surface (f = −51.5 mm)**

L21 is the second aspherical element. Its glass is a borosilicate crown (nd = 1.51612, vd = 64.03), closely matching OHARA S-BSL7 or Schott N-BK7 — one of the most common and well-characterized optical glasses. The meniscus form (convex to object) combined with the aspherical rear surface (S8) provides correction of the residual spherical aberration and coma that varies as G2 changes position during focusing.

The S8 asphere has a positive conic constant (K = +2.1218, an oblate ellipsoid), meaning the conic base surface is *steeper* than a sphere at the edge — it sags more rapidly as ray height increases. This is the opposite behavior to L11's hyperboloidal asphere, which flattens at the edge. The negative C4 coefficient (−2.6928 × 10⁻⁵) partially counteracts this conic steepening at moderate ray heights, producing a surface profile that balances overcorrection from the steep conic base against undercorrection from the polynomial terms. This positive K value also imposes a geometric constraint: the conic sag discriminant goes negative at h = |R|/√(1+K) = 12.14 mm, so the usable semi-diameter is limited to approximately 11.9 mm. At h = 10 mm, the net departure from a base sphere is +0.121 mm.

The use of N-BK7 (rather than a higher-index glass) for an aspherical element is significant: BK7 is one of the easiest glasses to precision-mold due to its low transformation temperature, good thermal shock resistance, and excellent homogeneity. This suggests the L21 asphere is fabricated by precision glass molding (PGM), consistent with Nikon's manufacturing capabilities.

**L22+L23 — Cemented Doublet (combined f ≈ +80.7 mm)**

The cemented doublet consists of L22 (biconcave negative, S-TIM2 / OHARA, nd = 1.62004, vd = 36.30) and L23 (biconvex positive, S-LAH58 / OHARA, nd = 1.88300, vd = 40.77). Despite both glasses being moderate-to-low dispersion types, the doublet's primary function here is not chromatic correction but rather *monochromatic aberration control* — specifically, balancing spherical aberration and coma contributions that change as G2 translates during focusing.

L23's extremely high refractive index (nd = 1.883) allows strong curvatures at the junction surface that produce significant higher-order aberration correction. The doublet has a moderate net positive power (f ≈ +81 mm), meaning G2's overall negative power comes primarily from L21.


### 3.4 Aperture Stop

The aperture stop is located between G2 and G3, and is *fixed* with respect to the image plane. This is a critical design decision: by keeping the stop stationary while both adjacent groups move, the designer ensures that the entrance pupil position changes only moderately during focusing, maintaining consistent vignetting behavior across the focus range. The production lens uses a 9-blade rounded diaphragm.


### 3.5 Group 3 — Second Focusing Group (G3): L31, L32+L33

**Overall function:** G3 has positive net power and moves toward the object as the lens focuses to closer distances. It travels approximately +21.4 mm over the full focus range — nearly twice the movement of G2. This asymmetric focusing strategy, where the rear focusing group moves further than the front one, is key to maintaining aberration correction across the extreme magnification range (0× to 1×).

**L31 — Biconvex Positive / ED Glass (f = +79.4 mm)**

L31 is the single ED (Extra-low Dispersion) glass element in the design. Its glass (nd = 1.49782, vd = 82.56) matches OHARA S-FPM4 — a fluorophosphate crown glass with anomalous partial dispersion. This is the element Nikon identifies in marketing materials as the "ED glass lens." With vd = 82.56, L31 has exceptionally low dispersion, meaning it contributes positive power with minimal chromatic aberration. The anomalous partial dispersion characteristic means L31 departs from the "normal line" on the PgF–vd diagram, enabling correction of secondary spectrum (residual longitudinal chromatic aberration) that cannot be eliminated with ordinary crown-flint doublets alone.

Placing the ED element in the rear focusing group (G3) rather than the fixed front group is a deliberate design choice: as G3 moves during focusing, the ED element's chromatic contribution shifts, compensating for the changing chromatic balance that would otherwise degrade image quality at close focus distances.

The biconvex form with a very weak front surface (R = 279.33 mm) and a moderately strong rear surface (R = −45.87 mm) concentrates the refracting power at the rear, reducing the angle of incidence on the front surface and minimizing surface aberration contributions.

**L32+L33 — Cemented Doublet (combined f ≈ +100.0 mm)**

L32 (biconvex positive, nd = 1.60300, vd = 65.47, matching OHARA S-PHM53) is cemented to L33 (negative meniscus, nd = 1.84666, vd = 23.78, matching OHARA S-TIH53 or Schott N-SF57). This is a classical achromatic doublet pairing: a positive crown (L32, vd = 65.47) with a negative flint (L33, vd = 23.78), providing the large vd difference (Δvd = 41.69) needed for effective correction of primary longitudinal chromatic aberration.

The doublet's net positive power (f ≈ +100 mm) supplements L31's contribution. Together with the ED element, G3 provides well-corrected chromatic and monochromatic imaging performance that varies minimally during focusing — despite the group's 21.4 mm travel.


### 3.6 Group 4 — Rear Fixed Group (G4): L41, L42+L43

**Overall function:** G4 has negative net power and acts primarily as a field-flattening and chromatic-correction group. It is fixed during focusing. The group's position after the aperture stop and behind all moving elements means it operates on a converging beam and principally affects field-dependent aberrations: field curvature, astigmatism, distortion, and lateral chromatic aberration.

**L41 — Negative Meniscus (f = −45.3 mm)**

L41 is a strong negative meniscus (convex to object) made from a dense flint glass (nd = 1.80518, vd = 25.43), matching OHARA S-TIH6 or Schott SF6. The high-dispersion, high-index glass provides strong negative power with large chromatic contribution — exactly what is needed to balance the positive chromatic contributions from the preceding groups. Its meniscus form minimizes coma and astigmatism contributions for off-axis ray bundles.

**L42+L43 — Cemented Doublet (combined f ≈ +126.6 mm)**

L42 (negative meniscus, nd = 1.80100, vd = 34.96) is cemented to L43 (positive meniscus, nd = 1.84666, vd = 23.78). L42's glass matches HOYA NBFD3 (nd = 1.80100, vd = 34.97, Δvd = 0.01) — a niobium-containing dense barium flint. This is a high-index glass in the lanthanum-dense-flint region of the glass map, providing strong negative power with moderate dispersion.

L43 uses the same glass as L33 (S-TIH53 / N-SF57), a very high-index dense flint. The doublet's net positive power (f ≈ +126.6 mm) partially compensates for L41's strong negative contribution. The glass pairing has a moderate Abbe number difference (Δvd ≈ 11.2), which provides some chromatic correction — though far less than the classical achromat L32+L33 (Δvd = 41.7). The doublet's primary contribution is *monochromatic*: field curvature correction (Petzval sum control) and minimization of astigmatism. The use of two high-index, relatively low-vd glasses in a cemented pair is a design choice that prioritizes Petzval sum control (high nd reduces the Petzval contribution per unit power) while delegating the bulk of chromatic correction to the G3 achromatic doublet and ED element.


---

## 4. Aspherical Surface Analysis

The lens contains two aspherical surfaces, both on rear surfaces of negative meniscus elements.

### 4.1 Aspherical Sag Equation

Both surfaces follow the standard even-polynomial asphere:

Z(h) = (h²/R) / [1 + √(1 − (1+K)·(h/R)²)] + C4·h⁴ + C6·h⁶ + C8·h⁸ + C10·h¹⁰

where h is the radial height from the optical axis, R is the paraxial radius of curvature, K is the conic constant, and C4–C10 are the polynomial deformation coefficients.


### 4.2 Surface S2 — L11 Rear (G1, Fixed)

| Parameter | Value |
|---|---|
| R | 25.1596 mm |
| K | −5.3148 (hyperboloid) |
| C4 | +5.5804 × 10⁻⁵ |
| C6 | −1.4307 × 10⁻⁷ |
| C8 | +5.0263 × 10⁻¹⁰ |
| C10 | −7.7598 × 10⁻¹³ |

**Base conic:** Strongly hyperbolic (K = −5.3148). A hyperboloidal base opens up faster than a sphere — for the same paraxial radius, the surface is flatter at the edge than a sphere would be. The C4 coefficient is positive, adding a slight fourth-order correction that *steepens* the surface at the rim relative to the hyperboloid alone. Higher-order coefficients alternate in sign, providing fine-tuning at increasing ray heights.

**Departure from base sphere:** The table below shows the total aspherical departure (conic + polynomial) measured against a reference sphere of the same paraxial radius. The hyperboloid alone would produce *negative* departure (flatter than sphere), but the positive C4 coefficient overwhelms this at all ray heights, yielding a net positive departure — the complete aspherical surface is steeper than the base sphere at the rim.

| h (mm) | Aspherical departure (µm) |
|---|---|
| 2 | +0.2 |
| 4 | +3.5 |
| 6 | +16.8 |
| 8 | +50.0 |
| 10 | +115.3 |
| 12 | +229.1 |

The departure grows rapidly with height, reaching approximately 0.23 mm at h = 12 mm. This substantial correction (on the order of hundreds of wavelengths of visible light) indicates that S2 is a primary aberration-correction surface responsible for managing spherical aberration and coma across the full aperture of the fast f/2.8 system.


### 4.3 Surface S8 — L21 Rear (G2, Moving)

| Parameter | Value |
|---|---|
| R | 21.4584 mm |
| K | +2.1218 (oblate ellipsoid) |
| C4 | −2.6928 × 10⁻⁵ |
| C6 | −9.4708 × 10⁻⁸ |
| C8 | +9.7003 × 10⁻¹¹ |
| C10 | −2.5636 × 10⁻¹² |

**Base conic:** Oblate ellipsoidal (K = +2.1218). Unlike S2's hyperboloid, this surface is *steeper* than a sphere at the edge — it curves inward more rapidly. The negative C4 coefficient partly counteracts this steepening at moderate heights, while the higher-order terms provide fine correction.

**Conic height limit:** Since K > 0, the conic sag formula has a finite maximum height of h_max = |R| / √(1+K) = 21.4584 / √3.1218 = 12.14 mm. The semi-diameter of this element must remain below 0.98 × 12.14 = 11.9 mm to avoid a sag discontinuity.

**Departure from base sphere:**

| h (mm) | Aspherical departure (µm) |
|---|---|
| 2 | ~0 |
| 4 | +0.1 |
| 6 | +2.2 |
| 8 | +18.7 |
| 10 | +120.6 |
| 12 | +1187.8 |

The departure is modest through h = 8 mm but grows dramatically near the conic limit. This behavior is characteristic of an asphere designed to provide strong correction at the edge of the aperture — essentially redirecting marginal rays to correct residual zonal spherical aberration. Because this surface is on a *moving* element (G2), its aspherical correction contribution shifts as the lens focuses, providing a built-in mechanism for controlling the variation of spherical aberration across the focus range.


### 4.4 Design Strategy: Two Aspheres, Two Roles

The placement of the two aspherical surfaces reveals a deliberate division of labor. The first asphere (S2, in fixed G1) provides the *baseline* correction for the fast f/2.8 aperture — it dominates the spherical aberration and coma correction at all focus positions. The second asphere (S8, in moving G2) provides a *focus-dependent* correction that compensates for the changing aberration balance as G2 translates. Together, they enable the lens to maintain sharp performance across the entire focus range from infinity to 1:1 — a task that would require many more spherical elements to achieve with comparable quality.


### 4.5 Clear Aperture Constraints from Aspherical Geometry

The aspherical surface geometry imposes physical limits on element clear apertures that are tighter than what the ray bundle geometry alone would suggest.

**S2A (L11 rear):** The strongly hyperbolic base (K = −5.31) combined with the large positive C4 coefficient produces deep sag at the rim. At a semi-diameter of 15 mm, the sag reaches 5.49 mm — nearly exhausting the 3.16 mm air gap to the next element (L12 front at S3). Accounting for S3's convex shape curving away from the gap, the maximum usable semi-diameter for G1 is approximately 14.5 mm, beyond which the surfaces would physically collide. This limits the off-axis ray bundle that G1 can transmit, producing measurable vignetting at full field — a characteristic consistent with the production lens's known behavior.

**S8A (L21 rear):** The oblate ellipsoidal base (K = +2.12) imposes a conic height limit of h_max = |R|/√(1+K) = 21.46/√3.12 = 12.14 mm, beyond which the sag equation becomes undefined. The practical limit is 0.98 × 12.14 = 11.9 mm. Combined with the tight air gap to L22 (S9, 5.2 mm), the usable semi-diameter for L21 is approximately 10.5 mm — only marginally above the on-axis marginal ray height of 10.23 mm. This means L21 effectively acts as a vignetting stop for oblique ray bundles, further limiting the off-axis light throughput at wide apertures.

These constraints are a fundamental trade-off in the design: the aspherical surfaces provide powerful aberration correction, but the deep sag associated with that correction limits the physical clear aperture. The resulting vignetting is managed by the optical design (the balanced power distribution and the f/2.88 maximum aperture) and is typical of high-performance macro lenses where aberration correction over the full focus range takes priority over maximizing peripheral illumination.


---

## 5. Focusing Mechanism

### 5.1 Internal Floating Focus

The patent describes an internal focusing (IF) system where G1 and G4 are fixed while G2 and G3 move along the optical axis. The aperture stop is also fixed. This gives the lens a constant overall length during focusing — the total optical path is 124.166 mm at all focus positions, verified computationally to be invariant to within numerical precision.

The four variable air gaps change as follows:

| Gap | Location | β = 0 (∞) | β = −0.5 | β = −1.0 (1:1) | Change |
|---|---|---|---|---|---|
| D6 | G1 → G2 | 2.626 mm | 6.635 mm | 13.833 mm | +11.208 mm |
| D11 | G2 → Stop | 12.296 mm | 8.287 mm | 1.088 mm | −11.208 mm |
| D12 | Stop → G3 | 23.272 mm | 12.337 mm | 1.872 mm | −21.400 mm |
| D17 | G3 → G4 | 4.491 mm | 15.428 mm | 25.891 mm | +21.400 mm |

**D6 + D11 = constant (14.922 mm):** The sum of D6 and D11 is invariant — confirming that G2 moves as a rigid unit away from G1 and toward the stop. The G2 focusing travel is 11.208 mm.

**D12 + D17 = constant (27.763 mm):** Similarly, the sum of D12 and D17 is invariant, confirming that G3 moves as a rigid unit away from the stop and toward G1. The G3 focusing travel is 21.400 mm.


### 5.2 Why Two Moving Groups?

A single-group internal focusing system would require very large group travel to achieve 1:1 magnification at 60 mm focal length, and would produce unacceptable aberration variation. By splitting the focusing action between two groups that move in *opposite* directions (G2 toward the image, G3 toward the object), the design achieves two critical benefits. First, the total aberration change is distributed across more air gaps and more surfaces, allowing each surface to contribute a smaller correction and keeping residual aberrations low. Second, the opposing movements of G2 and G3 partially cancel each other's aberration drift — particularly for spherical aberration and field curvature — enabling the "superb optical performance" across the full focus range that the patent claims.

### 5.3 Conditional Expressions

The patent defines two conditional expressions for the magnification of the second lens group (G2):

- **(1):** 1.5 < β0 < 2.3 — where β0 is the lateral magnification of G2 at infinity focus. For Example 2, β0 = 2.00.
- **(2):** 0.3 < β1 < 0.9 — where β1 is the lateral magnification of G2 at β = −1.0. For Example 2, β1 = 0.64.

These expressions constrain the optical power and position of G2 to ensure that its focusing travel remains manageable while keeping spherical aberration and field curvature well-corrected. When β0 exceeds the upper limit (2.3), G2's focal length becomes too short and spherical aberration and field curvature are overcorrected. When β0 falls below the lower limit (1.5), these aberrations become undercorrected. The change in β from 2.00 to 0.64 across the focus range (a ratio of 3.13:1) indicates that G2 undergoes a substantial change in its imaging conjugates — consistent with its large 11.2 mm travel.


---

## 6. Glass Selection and Chromatic Strategy

### 6.1 Glass Map Overview

The 12 elements use a range of glass types spanning from low-index fluorophosphate crowns (L31, vd = 82.56) to very high-index dense flints (L23, L33, L43, nd = 1.883). The glass selection strategy can be understood through the lens's chromatic correction requirements:

**Primary chromatic correction** is handled by the classical achromatic doublet L32+L33 in G3, which provides a large Abbe number difference (Δvd = 41.69) for effective primary color correction.

**Secondary spectrum correction** is provided by the ED glass element L31 (S-FPM4, vd = 82.56), whose anomalous partial dispersion (dPgF ≈ +0.033) enables correction beyond what ordinary crown-flint pairs can achieve. This is the element identified by Nikon's "ED" designation. S-FPM4 is a fluorophosphate crown with moderate anomalous dispersion — less extreme than the fluorite-substitute glasses used in Nikon's Super ED elements (such as S-FPL53, dPgF ≈ +0.048), but sufficient for effective secondary spectrum reduction in a 60 mm normal-focal-length design where the chromatic demands are less severe than in a long telephoto.

**Petzval sum control** drives the use of multiple high-index glasses (nd > 1.80) throughout the design. High refractive index allows strong positive or negative power with relatively weak surface curvatures, which contributes less Petzval curvature per unit of optical power. The negative G4 group with its high-index flint glasses (L41, L42, L43) is specifically positioned to flatten the field.


### 6.2 Glass Identification Confidence

Glasses matched with Δnd < 0.001 and Δvd < 0.5 are considered high-confidence identifications. The following elements have effectively exact catalog matches: L11 (S-LAH63Q / TAF3), L13 (TAFD5), L21 (S-BSL7 / N-BK7), L22 (S-TIM2), L23 (S-LAH58), L31 (S-FPM4), L32 (S-PHM53), L33 (S-TIH53), L41 (S-TIH6), L42 (HOYA NBFD3), L43 (S-TIH53). One element — L12 (nd = 1.63854, vd = 55.48) — has no precise match in the standard OHARA, Schott, or HOYA catalogs. Its position on the glass map falls in the lanthanum crown / barium crown boundary region. The closest candidate from extended catalogs is CDGM H-LAK6A (nd ≈ 1.6385, vd ≈ 55.4), though this may also be a Nikon-specified melt.

### 6.3 Nano Crystal Coat

Nikon's marketing specifies that one element carries the Nano Crystal Coat (N designation). This proprietary anti-reflective coating uses nanometer-scale structures to achieve broadband reflectance reduction superior to conventional multilayer coatings. The patent does not specify which surface receives this treatment, but based on Nikon's typical practice, it is likely applied to one of the larger-aperture front-group surfaces (S1 or S5) or the ED element (L31), where ghost and flare reduction would have the greatest impact on image contrast.


---

## 7. Summary

The AF-S Micro-NIKKOR 60mm f/2.8G ED, as embodied in Example 2 of US 7,898,744, is a 12-element, 9-group internal-focusing macro lens with a sophisticated dual-moving-group focusing system. Its key optical innovations include the use of two aspherical elements (one in the fixed front group for baseline aperture correction, one in a moving group for focus-dependent correction), one ED fluorophosphate glass element for secondary spectrum control, and a pair of independently moving focusing groups that enable 1:1 magnification with minimal aberration variation — all within a constant-length barrel suitable for autofocus operation. The design represents a significant advancement over its predecessor (the AF Micro-Nikkor 60mm f/2.8D), adding four additional elements and introducing internal focusing to what had previously been a whole-lens-focusing architecture.

---

**Sources:**
- US 7,898,744 B2 (Wada, Nikon Corporation, 2011)
- Nikon USA product specifications (nikonusa.com)
- OHARA Optical Glass Catalog (nd/vd matching)
- Schott Optical Glass Catalog (nd/vd matching)
- HOYA Optical Glass Catalog (nd/vd matching)
- Element focal lengths and system EFL independently computed via paraxial ray trace (Python)
