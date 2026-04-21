# Canon RF 24-50mm F4.5-6.3 IS STM — Optical Analysis

**Patent:** US 2023/0213739 A1 (Numerical Example 1)
**Inventors:** Makoto Nakahara, Shinya Okuoka (Canon Kabushiki Kaisha)
**Filed:** December 8, 2022 | **Published:** July 6, 2023
**Priority:** JP 2022-000021, January 1, 2022

---

## 1. Overview

The Canon RF 24-50mm F4.5-6.3 IS STM is an ultracompact, retractable full-frame zoom lens introduced alongside the Canon EOS R8 in early 2023. It weighs just 210 g and measures ø69.0 × 58 mm when retracted, making it among the smallest full-frame compatible zoom lenses ever produced. Canon achieves this miniaturization through an aggressive combination of optical compromises and manufacturing cost-reduction strategies: a narrow variable maximum aperture (f/4.5–6.3), a modest 2× zoom ratio, two plastic molded (PMo) aspherical elements, and a heavy reliance on in-camera electronic correction for distortion and vignetting.

The optical formula consists of **8 elements in 8 groups** — every element is air-separated. The construction is organized into four zoom units: a three-element negative lead group (L1), a three-element positive group (L2), a single positive focus element (L3/L31), and a single negative plastic element (L32). Three of the eight optical surfaces are aspherical, all on the two PMo resin elements.

### Published Specifications (Canon)

| Parameter | Value |
|-----------|-------|
| Focal length | 24–50 mm |
| Maximum aperture | f/4.5 (24 mm) – f/6.3 (50 mm) |
| Construction | 8 elements / 8 groups |
| Aspherical elements | 2 (PMo) |
| Diaphragm blades | 7 |
| Close focus | 0.30 m (24 mm), 0.35 m (50 mm) |
| Max magnification | 0.11× (24 mm), 0.19× (50 mm) |
| Filter diameter | 58 mm |
| Image stabilization | Optical IS, up to 4.5 stops (7.0 coordinated) |
| Autofocus | Lead screw-type STM |
| Mount | Canon RF |
| Weight | 210 g |
| Dimensions (retracted) | ø69.0 × 58.4 mm |

---

## 2. Design Architecture

### 2.1 Zoom Type: Negative-Lead with Rear Focus

The patent describes a zoom lens L0 consisting of, in order from the object side:

- **L1** — First lens unit, negative refractive power (f = −40.14 mm)
- **L2** — Second lens unit, positive refractive power (f = +39.51 mm)
- **LR** — Rear group, subdivided into:
  - **L3 (L31)** — Focus lens unit, positive refractive power (f = +62.75 mm)
  - **L32** — Fourth lens unit, negative refractive power (f = −185.51 mm)

This is a negative-lead zoom architecture — architecturally related to the retrofocus (inverted telephoto) family. The negative front group diverges the incoming beam before the positive second group converges it, extending the back focal distance beyond what a simple positive system would achieve at the same focal length. However, unlike a true retrofocus design (which requires BFD > EFL), this lens has BFD/EFL < 1 at all zoom positions: 16.94/24.71 ≈ 0.69 at the wide end and 37.19/48.53 ≈ 0.77 at the telephoto end. This works for the RF mount because its short 20 mm flange distance allows the rear element to protrude into the mount throat, so the ~17 mm back focus at the wide end provides adequate clearance for the sensor cover glass and filter stack.

### 2.2 Zoom Mechanism

During zooming from the wide-angle end to the telephoto end, the dominant movement is the closing of the L1–L2 gap (d6): it collapses from 27.85 mm to just 1.02 mm, a change of −26.83 mm. Simultaneously, the back focal distance (d18) extends by +20.25 mm. The remaining variable gaps (d14, d16) change by less than 0.3 mm across the zoom range — essentially constant. This means the zoom action is driven almost entirely by the relative motion of L1 and L2, with the rear group (L3 + L32) moving as a near-rigid assembly.

The patent's figure drawing shows simplified movement trajectories: L1 moves toward the image as the lens zooms to the telephoto end, while L2 and L32 move toward the object side. L3 (L31) also moves toward the object side. The overall lens length *decreases* by about 6.6 mm from wide to tele, meaning the lens is physically longest at 24 mm. This is consistent with the production lens's retractable barrel design, where the lens extends when zoomed to 24 mm and shortens toward 50 mm.

| Variable Gap | Wide (24.71 mm) | Middle (35.01 mm) | Tele (48.53 mm) | Δ (W→T) |
|---|---|---|---|---|
| d6 (L1→L2) | 27.85 | 11.87 | 1.02 | −26.83 |
| d14 (FP→L31) | 10.04 | 10.38 | 10.30 | +0.26 |
| d16 (L31→L32) | 11.24 | 10.91 | 10.98 | −0.26 |
| d18 (BF) | 16.94 | 25.84 | 37.19 | +20.25 |
| **Total track** | **105.60** | **98.52** | **99.03** | **−6.57** |

### 2.3 Focus Mechanism

Focusing is performed by the L3 (L31) unit — a single positive element (surface 15–16, nd = 1.48749, νd = 70.2) that moves from the image side toward the object side when focusing from infinity to the close distance. This is an inner-focus design with the focus element located behind the aperture stop. The patent describes this as an important choice: by placing the focus unit on the image side of the aperture diaphragm (where the beam has already converged), the focus element can be made physically small and lightweight, enabling fast, quiet STM-driven autofocus — a key requirement for video applications.

The fact that L3/L31 is a single element (f ≈ +62.75 mm) with very modest refractive power means that its movement during focusing introduces only limited aberration variation. The patent notes, however, that the lens element closest to the object in the focus unit "has a shape with a concave surface on the object side" (R₁ = −65.961 mm, a concave-toward-object meniscus shape). This concave object-side surface reduces the angle of incidence of off-axis rays entering the focus element, which helps control field curvature variation during focusing.

**Note on close-focus data:** The patent provides variable spacing tables only at infinity focus. Close-focus spacings in the data file are estimated from Canon's published minimum focus distances (0.30 m at 24 mm, 0.35 m at 50 mm), assuming L31 movement of approximately 1.5–2.0 mm toward the object side. The actual close-focus gap data may differ from these estimates.

### 2.4 Aperture and Diaphragm

The aperture stop (surface 13, "Diaphragm") is located between L2 and LR, at the image-side end of the second lens unit. The patent specifies a flare-cutting stop (FP, surface 14) immediately after the diaphragm, represented as a flat surface with variable spacing to L3. The diaphragm placement satisfies the patent's inequality (3): 0.25 < DSPw/TLw < 0.53, where DSPw is the distance from the diaphragm to the image plane and TLw is the total lens length at the wide end. For Example 1: DSPw = 50.82 mm and TLw = 105.60 mm, giving DSPw/TLw ≈ 0.48.

The maximum aperture is variable: f/4.63 at the wide end, f/5.66 at the middle position, and f/6.48 at the telephoto end. In practice, Canon rounds these to the marketed f/4.5–6.3 range. The production lens reports f/4.5 only at exactly 24 mm; by 25 mm it has already stepped to f/5.0, and f/6.3 is reached by 39 mm.

### 2.5 Image Stabilization

The patent identifies the second lens unit L2 as the image stabilization group. Per [0064], L2 may be shifted in a direction orthogonal to the optical axis during image stabilization. Using the converging group (L2) as the IS element is a practical choice: L2 sits in the region where the beam is converging and relatively compact, so the three-element group can be shifted laterally to redirect the image without requiring a large-diameter IS mechanism. Canon rates the stabilization at 4.5 stops (standalone) and up to 7.0 stops with coordinated IBIS.

---

## 3. Element-by-Element Analysis

### Element 1 — G1: First Negative Lens

| Parameter | Value |
|-----------|-------|
| Surfaces | 1 (front), 2 (rear) |
| R₁ / R₂ | +238.756 / +18.479 mm |
| Center thickness | 1.40 mm |
| nd / νd | 1.63854 / 55.4 |
| Glass code | 639/554 |
| Shape | Negative meniscus, convex toward object |
| Thick-lens f | −31.45 mm |
| Shape factor | −1.168 |

**Glass identification:** The nd/νd pair matches OHARA S-BSL7 or HOYA BSL7 exactly (Δnd = 0, Δνd < 0.1). This is a barium silicate crown glass — a workhorse optical material with moderate refractive index and moderate dispersion. S-BSL7 is inexpensive, easy to process, and chemically stable.

**Optical role:** G1 is the first element the light encounters. Its strong negative meniscus shape — a gently curved front surface (R₁ = +238.756 mm) paired with a steeply curved rear surface (R₂ = +18.479 mm), both convex toward the object — provides the bulk of L1's negative refractive power. The rear surface carries the dominant refraction: with a radius of just 18.5 mm, it is the most steeply curved surface in the entire lens. As the outermost element in a negative-lead zoom, G1 must diverge the beam sharply to widen the field of view at the wide-angle end.

**Semi-diameter constraint:** The rear surface R₂ = +18.479 mm imposes a hard physical limit on the clear aperture. The slope at the rim reaches the 64.2° fabrication threshold at sd ≈ 16.6 mm (sd/|R| ≈ 0.90), constraining the entire front group's maximum clear aperture. At the estimated rear SD of 16.5 mm, the rim slope is 1.98 — just under the 2.065 limit.

### Element 2 — G2: Second Negative Lens (PMo Aspherical)

| Parameter | Value |
|-----------|-------|
| Surfaces | 3A (front, aspherical), 4 (rear) |
| R₁ / R₂ | +994.673 / +56.399 mm |
| Center thickness | 3.70 mm |
| nd / νd | 1.53110 / 55.9 |
| Glass code | 531/559 |
| Shape | Negative meniscus, convex toward object |
| Thick-lens f | −112.73 mm |
| Shape factor | −1.120 |

**Material identification:** The nd/νd pair does not match any conventional optical glass in the OHARA, SCHOTT, HOYA, or Sumita catalogs. Instead, it matches cyclo-olefin polymer (COP) optical resins used in precision molded (PMo) elements, such as ZEONEX E48R (nd ≈ 1.5310, νd ≈ 56.0, residual Δnd = 0.0001, Δνd = 0.1). The patent explicitly anticipates this at [0062]: the negative lens G2 may be made of a resin material to reduce the weight of the large-diameter front group.

**Aspherical surface (3A):** The object-side surface carries the aspherical profile. At the estimated semi-diameter of 16.0 mm, the aspherical departure from the base sphere reaches approximately +315 µm. The dominant term is A4 (+2.06 × 10⁻⁶), which provides a positive departure — the surface becomes flatter than the base sphere at the margins, reducing its effective negative curvature at larger aperture heights.

**Optical role:** G2 provides supplementary negative power in L1, assisting G1 in diverging the beam at the wide-angle end. Its aspherical front surface is the primary wide-angle aberration corrector: the aspherical departure on a nearly flat base curve (R = 994.673 mm) effectively creates a freeform correction plate at the front of the lens. The very weak base curvature means the aspherical terms dominate the surface profile at larger heights — the polynomial coefficients, not the base sphere, define the optical function of this surface at the periphery.

### Element 3 — L13: Positive Lens in L1

| Parameter | Value |
|-----------|-------|
| Surfaces | 5 (front), 6 (rear) |
| R₁ / R₂ | +28.004 / +65.231 mm |
| Center thickness | 3.60 mm |
| nd / νd | 1.69895 / 30.1 |
| Glass code | 699/301 |
| Shape | Positive meniscus, convex toward object |
| Thick-lens f | +67.52 mm |
| Shape factor | +2.504 |

**Glass identification:** Exact match to OHARA S-TIH6 or HOYA FD60/E-FD60. This is a dense flint glass — high refractive index and high dispersion (low νd). S-TIH6 is one of the most common dense flint glasses in consumer zoom lenses.

**Optical role:** L13 is the only positive element in the otherwise negative G1 unit. It serves as a chromatic corrector for G1 and G2: the negative elements (G1: νd = 55.4; G2: νd = 55.9) introduce lateral and longitudinal chromatic aberration, and L13's low νd = 30.1 (high dispersion) provides the counter-dispersive correction.

**Edge thickness constraint:** L13's strongly bent meniscus shape (shape factor +2.504) means the sag difference between the front and rear surfaces grows rapidly with aperture height. At the estimated SD of 15.5 mm, the edge thickness is approximately 1.0 mm — adequate but a binding constraint on the element's clear aperture.

### Element 4 — L2 First Element (Positive)

| Parameter | Value |
|-----------|-------|
| Surfaces | 7 (front), 8 (rear) |
| R₁ / R₂ | +21.644 / −709.102 mm |
| Center thickness | 3.00 mm |
| nd / νd | 1.90366 / 31.3 |
| Glass code | 904/313 |
| Shape | Near-planoconvex, strongly convex toward object |
| Thick-lens f | +23.29 mm |
| Shape factor | +0.941 |

**Glass identification:** Exact match to OHARA S-LAH55V or HIKARI E-LASFH13. This is a lanthanum-containing heavy flint glass — the highest refractive index in the entire lens (nd = 1.90366). S-LAH55V is an eco-friendly ("S-" prefix) glass with exceptional refractive index, commonly used in high-power positive elements where minimizing surface curvature is essential.

**Optical role:** This element provides the dominant positive refractive power for L2 (the converging group). Its ultra-high refractive index allows the front surface curvature (R₁ = +21.644 mm) to remain relatively gentle despite the strong +23.29 mm focal length. The nearly planoconvex shape (shape factor +0.941) is close to the minimum-spherical-aberration orientation for a positive singlet. This is the primary image-forming element in the system.

### Element 5 — L2 Second Element (Negative)

| Parameter | Value |
|-----------|-------|
| Surfaces | 9 (front), 10 (rear) |
| R₁ / R₂ | −102.707 / +16.164 mm |
| Center thickness | 0.70 mm |
| nd / νd | 1.84666 / 23.9 |
| Glass code | 847/239 |
| Shape | Biconcave negative |
| Thick-lens f | −16.45 mm |
| Shape factor | −0.728 |

**Glass identification:** Exact nd match to OHARA S-TIH53, HOYA TAFD5, or HIKARI E-FDS1. This is a very high-index, very high-dispersion dense flint glass — the most dispersive element in the entire lens (νd = 23.9).

**Optical role:** Element 5 is the chromatic corrector for the L2 positive group. Its biconcave shape distributes the negative power across both surfaces, with the more steeply curved rear surface (R₂ = +16.164 mm) carrying the bulk of the refraction. The thin center thickness (0.70 mm) and strong negative power (f = −16.45 mm) indicate this element operates as an air-spaced flint component of a broken-contact (air-spaced) doublet. The G2 group operates as a positive-negative-positive (PNP) triplet — an Ernostar-derived configuration — where the central negative flint provides chromatic correction while the outer positive elements provide convergence.

### Element 6 — L2 Third Element (Positive)

| Parameter | Value |
|-----------|-------|
| Surfaces | 11 (front), 12 (rear) |
| R₁ / R₂ | +26.583 / −76.939 mm |
| Center thickness | 2.05 mm |
| nd / νd | 1.77250 / 49.6 |
| Glass code | 773/496 |
| Shape | Biconvex |
| Thick-lens f | +25.80 mm |
| Shape factor | +0.486 |

**Glass identification:** Exact match to OHARA S-LAH53 or HOYA TAFD25. This is a high-index lanthanum glass with moderate dispersion.

**Optical role:** Element 6 is the second positive element in L2's PNP triplet. Its biconvex shape (shape factor +0.486, more symmetric than Element 4's near-planoconvex) distributes the refraction across both surfaces, which helps balance higher-order aberrations (particularly oblique spherical aberration and coma at intermediate field angles). Its moderate Abbe number (νd = 49.6) places it between the high-dispersion flint (Element 5, νd = 23.9) and the low-dispersion crown L3 (νd = 70.2), creating a smooth chromatic transition across the relay.

### Element 7 — L3/L31: Focus Element (Positive Meniscus)

| Parameter | Value |
|-----------|-------|
| Surfaces | 15 (front), 16 (rear) |
| R₁ / R₂ | −65.961 / −21.205 mm |
| Center thickness | 2.95 mm |
| nd / νd | 1.48749 / 70.2 |
| Glass code | 487/702 |
| Shape | Positive meniscus, concave toward object |
| Thick-lens f | +62.75 mm |
| Shape factor | −1.948 |

**Glass identification:** Exact match to OHARA S-FSL5, HOYA FC5, or SCHOTT N-FK5. This is a fluorine-containing (fluor silicate) crown glass — the lowest refractive index (1.48749) and lowest dispersion (νd = 70.2) in the entire system. S-FSL5 is lightweight (density ~2.46 g/cm³) and inexpensive — an ideal choice for a focus element that must be physically moved by the STM motor during video autofocus.

**Optical role:** L3/L31 is the focus element — the only moving group during focus. The concave-toward-object shape is unusual for a positive focus element and is a deliberate aberration-management choice: when an off-axis ray enters the focus element through the concave front surface, the angle of incidence is reduced compared to a convex-toward-object orientation, which reduces field curvature variation during focus racking. The low dispersion (νd = 70.2) ensures minimal focus-dependent chromatic aberration.

### Element 8 — L32: Fourth Lens Unit (PMo Aspherical, Negative)

| Parameter | Value |
|-----------|-------|
| Surfaces | 17A (front, aspherical), 18A (rear, aspherical) |
| R₁ / R₂ | −90.404 / −1111.779 mm |
| Center thickness | 3.50 mm |
| nd / νd | 1.53110 / 55.9 |
| Glass code | 531/559 |
| Shape | Negative meniscus, concave toward object |
| Thick-lens f | −185.51 mm |
| Shape factor | +1.177 |

**Material identification:** Same COP resin as G2 — nd/νd = 1.53110/55.9, matching ZEONEX E48R or an equivalent cyclo-olefin polymer. Both PMo elements share identical optical constants, confirming they use the same injection-molding resin.

**Aspherical surfaces (17A, 18A):** Both surfaces of L32 are aspherical, with very large departures from their base spheres:

- **Surface 17A** (front): departure ≈ −3.4 mm at the estimated SD of 13.5 mm. The A4 term (−1.02 × 10⁻⁴) provides the dominant low-order departure, but the A10 term (−1.16 × 10⁻¹¹) contributes significantly at larger heights due to the h¹⁰ dependence. The surface becomes substantially more concave than its base sphere at the margins.
- **Surface 18A** (rear): departure ≈ −2.7 mm at the estimated SD of 14.0 mm. Again A4-dominated (−9.01 × 10⁻⁵), with the surface becoming more concave than its nearly flat base sphere (R = −1111.779 mm).

These are extremely large aspherical departures — over 3 mm on the front surface. Such departures are feasible only through injection molding of optical-grade polymer and would be prohibitively expensive to achieve via glass grinding and polishing.

**Optical role:** L32 is the rearmost element in the system. Despite its weak negative power (f = −185.51 mm), L32 performs a critical aberration correction role. The two heavily aspherized surfaces serve as a field-correction lens — a final aberration compensator that adjusts field curvature, astigmatism, and distortion before the image reaches the sensor plane. The negative power contribution also slightly extends the back focal distance. The two aspherical surfaces provide substantially more degrees of freedom for wavefront correction than any other element in the system.

---

## 4. Aspherical Surface Summary

The lens has three aspherical surfaces across two plastic molded elements:

| Surface | Element | R (mm) | K | Departure at SD | Dominant term |
|---------|---------|--------|---|-----------------|---------------|
| 3A | G2 (PMo) | +994.673 | 0 | +315 µm (sd 16.0) | A4 = +2.06 × 10⁻⁶ |
| 17A | L32 (PMo) | −90.404 | 0 | −3445 µm (sd 13.5) | A4 = −1.02 × 10⁻⁴ |
| 18A | L32 (PMo) | −1111.779 | 0 | −2743 µm (sd 14.0) | A4 = −9.01 × 10⁻⁵ |

All three surfaces have K = 0 (spherical base curve, no conic component). The aspherical profiles are defined entirely by the even-order polynomial coefficients A4 through A12. The conic constant being zero on all surfaces is typical of injection-molded plastic optics — the polynomial terms alone provide sufficient degrees of freedom, and a nonzero K would complicate the mold fabrication.

The departures on surfaces 17A and 18A are extremely large — over 3 mm and 2.7 mm respectively. These values are strongly SD-dependent because of the high-order terms (particularly A10 and A12), which grow very rapidly with ray height. The A10 term on surface 17A (−1.16 × 10⁻¹¹) contributes approximately −3.4 mm of sag at sd = 13.5 mm, dominating the departure at the rim despite its small coefficient. This is characteristic of injection-molded plastic optics where the entire surface profile is designed as a high-order polynomial rather than as a perturbation of a base sphere.

The aspherical strategy follows a clear design philosophy: **surface 3A corrects wide-angle field aberrations** (where the beam footprint on G2 is largest), while **surfaces 17A and 18A correct residual field curvature and astigmatism across all zoom positions** (where the converged beam is small but the angular spread of off-axis rays is significant).

---

## 5. Glass Selection Strategy

The lens uses six distinct optical materials: four conventional optical glasses and one optical resin (used in two elements):

| Element | Material | nd | νd | Glass family | Role |
|---------|----------|----|----|-------------|------|
| G1 | S-BSL7 / BSL7 | 1.63854 | 55.4 | Barium silicate crown | Structural negative |
| G2 | PMo resin (COP) | 1.53110 | 55.9 | Cyclo-olefin polymer | Aspherical corrector |
| L13 | S-TIH6 / FD60 | 1.69895 | 30.1 | Dense flint | Chromatic balance for L1 |
| L21 | S-LAH55V | 1.90366 | 31.3 | Lanthanum heavy flint | Primary convergence |
| L22 | S-TIH53 / TAFD5 | 1.84666 | 23.9 | Dense flint | Chromatic balance for L2 |
| L23 | S-LAH53 / TAFD25 | 1.77250 | 49.6 | Lanthanum glass (high-index) | Secondary convergence |
| L31 | S-FSL5 / FC5 | 1.48749 | 70.2 | Fluor silicate crown | Lightweight focus |
| L32 | PMo resin (COP) | 1.53110 | 55.9 | Cyclo-olefin polymer | Field corrector |

Several patterns emerge from this glass map:

**Cost-conscious material selection.** The glasses are all mainstream catalog types — no exotic special-dispersion or ED glass appears anywhere in the design. There are no fluorite elements, no anomalous-partial-dispersion glasses, and no UD (ultra-low dispersion) types. This is a deliberate cost optimization consistent with the lens's $299 retail price.

**Weight minimization through PMo.** The two largest elements by diameter (G2 in the front group, L32 in the rear) are both plastic, with COP resin having a density of approximately 1.01 g/cm³ — roughly 60% lighter than the lightest glass in the system (S-FSL5 at ~2.46 g/cm³). This resin-for-glass substitution is a major contributor to the lens's remarkably low 210 g weight, alongside the compact mechanical barrel and the reduced element count enabled by accepting electronic correction.

**Chromatic correction through flint/crown pairing.** Each powered group contains an internal flint-crown chromatic balance: L1 pairs its low-dispersion negatives (G1 νd = 55.4, G2 νd = 55.9) with a high-dispersion positive (L13 νd = 30.1), while L2 pairs its high-index positives (L21 νd = 31.3, L23 νd = 49.6) with an ultra-dispersive negative (L22 νd = 23.9). This is a textbook zoom chromatic correction strategy.

---

## 6. Petzval Sum and Field Curvature

The surface-by-surface Petzval sum for the system is:

**Σ (Δn / n·n′·R) = +0.00192 mm⁻¹**

This corresponds to a Petzval radius of approximately **+521 mm** — meaning the natural (uncorrected) Petzval image surface has an extremely gentle curvature that is, for practical purposes, flat. This is a remarkable result for an 8-element zoom lens and merits discussion.

The near-zero Petzval sum arises from careful power balancing between the negative and positive elements. The negative elements contribute −0.0617 mm⁻¹ in aggregate (dominated by G1 at −0.0194 and L22 at −0.0328), while the positive elements contribute +0.0636 mm⁻¹ (dominated by L21 at +0.0226, L23 at +0.0164, and L31 at +0.0155). The difference is just +0.0019 mm⁻¹ — within 3% of zero. This balance is not accidental: the patent's conditional inequalities (4) through (9) constrain the refractive indices and Abbe numbers of key elements precisely to maintain this Petzval equilibrium across the allowed design space.

The near-zero Petzval sum means that the field curvature budget is not a primary constraint on this design. Instead, the aspherical surfaces on L32 are primarily addressing astigmatism, coma, and distortion — with the underlying Petzval field already essentially flat. This is an unusual luxury for a compact zoom, made possible by having the negative power distributed across four elements (G1, G2, L22, L32) whose combined Petzval contribution closely matches that of the four positive elements.

For comparison, a typical 24–70 mm f/2.8 zoom achieves a Petzval sum around −0.020 to −0.025 mm⁻¹ with significantly more elements available for balancing.

---

## 7. Patent Conditional Inequalities — Example 1 Values

The patent defines a set of conditional inequalities characterizing the design space. For Example 1:

| Inequality | Formula | Limits | Example 1 Value | Status |
|------------|---------|--------|-----------------|--------|
| (1) | fLP / fL2 | 1.20 – 3.20 | 62.75 / 39.51 = 1.59 | ✓ |
| (2) | fL1 / fL2 | −3.00 – −0.85 | −40.14 / 39.51 = −1.02 | ✓ |
| (3) | DSPw / TLw | 0.25 – 0.53 | ~0.48 | ✓ |
| (4) | ndG1 | 1.40 – 1.69 | 1.639 | ✓ |
| (5) | vdG1 | 45 – 95 | 55.4 | ✓ |
| (6) | ndLPP | 1.40 – 1.65 | 1.487 | ✓ |
| (7) | vdLPP | 45 – 95 | 70.2 | ✓ |
| (8) | ndL1P | 1.60 – 2.10 | 1.699 | ✓ |
| (9) | vdL1P | 15 – 45 | 30.1 | ✓ |
| (10) | MLP / ML2 | 0.50 – 1.50 | 0.99 | ✓ |

The ratio fLP/fL2 = 1.59 sits near the center of the allowed range, indicating a well-balanced power split between the focus unit and the converging group. The ratio fL1/fL2 = −1.02 (nearly unity in magnitude) indicates that the negative front group and positive second group have almost equal and opposite powers — a hallmark of a well-corrected negative-lead zoom where the retrofocus effect is achieved through separation rather than through grossly asymmetric power distribution.

---

## 8. Design Context and Commentary

The Canon RF 24-50mm F4.5-6.3 IS STM represents an extreme of modern zoom lens design philosophy: minimizing physical size, weight, and cost while relying on computational imaging to compensate for optical shortcomings. The uncorrected raw images from this lens exhibit substantial barrel distortion at 24 mm and heavy vignetting, both of which Canon corrects via mandatory lens profile corrections applied in-camera (the correction profile cannot be disabled for JPEG output).

The extent of this reliance on electronic correction is quantifiable from the patent data. At the wide-angle end, the patent's paraxial half-field angle of 36.23° yields an image height of 18.10 mm — a native image circle diameter of just 36.2 mm. A full-frame sensor has a 43.3 mm diagonal, meaning the lens optically covers only about 84% of the sensor at 24 mm. Canon's marketed 84° diagonal angle of view (corresponding to a true 24 mm perspective) requires image content out to a half-diagonal of 21.6 mm — but the optics only deliver an 18.1 mm image height at the stated field angle. The barrel distortion profile pushes peripheral image content outward beyond the paraxial prediction, and Canon's electronic correction then de-warps and brightens the expanded image to fill the frame. At the telephoto end, coverage improves to about 96% (image circle 41.4 mm vs. sensor diagonal 43.3 mm), explaining why the optical performance and vignetting are noticeably better at 50 mm.

This "design-for-correction" approach allows the optical designers to accept significantly more aberration than would be tolerable in an optically-corrected design, enabling the 8-element/8-group construction that would otherwise require 12–14 elements to achieve comparable corrected image quality at 24 mm.

The two-PMo-element strategy is particularly noteworthy: by using the same COP resin for both G2 and L32, Canon can manufacture both aspherical elements using the same material supply chain. The three aspherical surfaces across these two elements provide 15 polynomial degrees of freedom (5 coefficients × 3 surfaces) for aberration correction — a substantial optimization budget that compensates for the absence of cemented doublets, ED glass, and the additional elements found in more complex zooms.

---

## Appendix A: Complete Surface Prescription (Example 1)

| Surface | R (mm) | d (mm) | nd | νd | Element |
|---------|--------|--------|----|----|---------|
| 1 | +238.756 | 1.40 | 1.63854 | 55.4 | G1 |
| 2 | +18.479 | 7.21 | — | — | air |
| 3A | +994.673 | 3.70 | 1.53110 | 55.9 | G2 (PMo) |
| 4 | +56.399 | 0.30 | — | — | air |
| 5 | +28.004 | 3.60 | 1.69895 | 30.1 | L13 |
| 6 | +65.231 | (var) | — | — | air |
| 7 | +21.644 | 3.00 | 1.90366 | 31.3 | L21 |
| 8 | −709.102 | 2.60 | — | — | air |
| 9 | −102.707 | 0.70 | 1.84666 | 23.9 | L22 |
| 10 | +16.164 | 0.37 | — | — | air |
| 11 | +26.583 | 2.05 | 1.77250 | 49.6 | L23 |
| 12 | −76.939 | 2.00 | — | — | air |
| 13 (STO) | ∞ | 6.15 | — | — | stop |
| 14 (FP) | ∞ | (var) | — | — | flare stop |
| 15 | −65.961 | 2.95 | 1.48749 | 70.2 | L31 |
| 16 | −21.205 | (var) | — | — | air |
| 17A | −90.404 | 3.50 | 1.53110 | 55.9 | L32 (PMo) |
| 18A | −1111.779 | (var) | — | — | air → image |

## Appendix B: Aspherical Coefficients

All surfaces use K = 0.

| Coefficient | Surface 3A | Surface 17A | Surface 18A |
|-------------|-----------|------------|------------|
| A4 | +2.06228 × 10⁻⁶ | −1.01775 × 10⁻⁴ | −9.00719 × 10⁻⁵ |
| A6 | −3.09541 × 10⁻⁹ | +1.71677 × 10⁻⁷ | +2.07355 × 10⁻⁷ |
| A8 | +7.24904 × 10⁻¹¹ | +1.83977 × 10⁻¹⁰ | −1.21619 × 10⁻¹⁰ |
| A10 | −3.07809 × 10⁻¹³ | −1.16025 × 10⁻¹¹ | −4.95038 × 10⁻¹² |
| A12 | +9.19241 × 10⁻¹⁶ | +2.80092 × 10⁻¹⁴ | +1.35424 × 10⁻¹⁴ |

## Appendix C: Variable Gap Data (Infinity Focus)

| Position | f (mm) | Fno | ω (°) | d6 | d14 | d16 | d18 (BF) | Total track |
|----------|--------|-----|--------|-----|-----|-----|----------|-------------|
| Wide | 24.71 | 4.63 | 36.23 | 27.85 | 10.04 | 11.24 | 16.94 | 105.60 |
| Middle | 35.01 | 5.66 | 29.55 | 11.87 | 10.38 | 10.91 | 25.84 | 98.52 |
| Tele | 48.53 | 6.48 | 23.08 | 1.02 | 10.30 | 10.98 | 37.19 | 99.03 |
