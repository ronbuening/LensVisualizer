# Canon RF 24-50mm F4.5-6.3 IS STM — Optical Analysis

**Patent:** US 2023/0213739 A1 (Numerical Example 1)  
**Inventors:** Makoto Nakahara, Shinya Okuoka (Canon Kabushiki Kaisha)  
**Filed:** December 8, 2022 | **Published:** July 6, 2023  
**Priority:** JP 2022-000021, January 1, 2022

---

## 1. Overview

The Canon RF 24-50mm F4.5-6.3 IS STM is an ultracompact, retractable full-frame zoom lens introduced alongside the Canon EOS R8 in early 2023. It weighs just 210 g and measures ø69.0 × 58 mm when retracted, making it among the smallest full-frame compatible zoom lenses ever produced. Canon achieves this miniaturization through an aggressive combination of optical compromises and manufacturing cost-reduction strategies: a narrow variable maximum aperture (f/4.5–6.3), a modest 2× zoom ratio, two aspherical elements with an optical-resin index/dispersion coordinate, and a heavy reliance on in-camera electronic correction for distortion and vignetting.

The optical formula consists of **8 elements in 8 groups** — every element is air-separated. The construction is organized into four zoom units: a three-element negative lead group (L1), a three-element positive group (L2), a single positive focus element (L3/LP), and a single weak negative aspherical element (L4). Three of the sixteen lens surfaces are aspherical: one on G2 and both on L4, the two elements that share the resin-class 1.5311 / 55.9 coordinate. The patent's Examples 2 and 3 have the same eight-element layout; Example 1 is the FIG. 1 embodiment and is the one modeled here.

### Published Specifications (Canon)

| Parameter | Value |
|-----------|-------|
| Focal length | 24–50 mm |
| Maximum aperture | f/4.5 (24 mm) – f/6.3 (50 mm) |
| Construction | 8 elements / 8 groups |
| Aspherical elements | 2 |
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
  - **L3 (LP)** — Focus lens unit, positive refractive power (f = +62.75 mm)
  - **L4** — Fourth lens unit, negative refractive power (f = −185.51 mm)

This is a negative-lead zoom architecture — architecturally related to the retrofocus (inverted telephoto) family. The negative front group diverges the incoming beam before the positive second group converges it, extending the back focal distance beyond what a simple positive system would achieve at the same focal length. However, unlike a true retrofocus design (which requires BFD > EFL), this lens has BFD/EFL < 1 at all zoom positions: 16.94/24.71 ≈ 0.69 at the wide end and 37.19/48.53 ≈ 0.77 at the telephoto end. This works for the RF mount because its short 20 mm flange distance allows the rear element to protrude into the mount throat, so the ~17 mm back focus at the wide end provides adequate clearance for the sensor cover glass and filter stack.

### 2.2 Zoom Mechanism

During zooming from the wide-angle end to the telephoto end, the dominant movement is the closing of the L1–L2 gap (d6): it collapses from 27.85 mm to just 1.02 mm, a change of −26.83 mm. At the same time the back focal distance (d18) extends by +20.25 mm. The remaining variable gaps (d14, d16) change by less than 0.35 mm across the zoom range, and their sum stays at 21.28 mm at every station.

The patent states the motion directly (¶0070). L1 moves on a path convex toward the image side. L2, L3 and L4 move monotonically toward the object, and L2 and L4 move as one on the same trajectory. The gap table confirms it. Measured from the image plane (derived from the tabulated gaps), the L1 front vertex sits at 105.60 → 98.52 → 99.03 mm, so L1 first moves about 7.1 mm toward the image and then turns back by about 0.5 mm near the middle station. The stop (L2) sits at 50.82 → 59.73 → 71.07 mm and the L4 rear vertex at 16.94 → 25.84 → 37.19 mm; both move +20.25 mm. The LP front vertex moves 34.63 → 43.20 → 54.62 mm (+19.99 mm), so LP drifts only a few tenths of a millimetre relative to the L2–L4 block. Zooming is therefore L1 against a nearly rigid L2–LP–L4 assembly.

The optical overall length is longest at the wide end (105.60 mm), shortest near the middle station (98.52 mm) and 99.03 mm at the telephoto end. The patent does not describe the retracting barrel, so how the mechanical length tracks this is not stated.

| Variable Gap | Wide (24.71 mm) | Middle (35.01 mm) | Tele (48.53 mm) | Δ (W→T) |
|---|---|---|---|---|
| d6 (L1→L2) | 27.85 | 11.87 | 1.02 | −26.83 |
| d14 (FP→LP) | 10.04 | 10.38 | 10.30 | +0.26 |
| d16 (LP→L4) | 11.24 | 10.91 | 10.98 | −0.26 |
| d18 (BF) | 16.94 | 25.84 | 37.19 | +20.25 |
| **Total track** | **105.60** | **98.52** | **99.03** | **−6.57** |

### 2.3 Focus Mechanism

Focusing is performed by the L3 (LP) unit — a single positive element (surface 15–16, nd = 1.48749, νd = 70.2) that moves from the image side toward the object side when focusing from infinity to the close distance. This is an inner-focus design with the focus element located behind the aperture stop. The patent describes this as an important choice: by placing the focus unit on the image side of the aperture diaphragm (where the beam has already converged), the focus element can be made physically small and lightweight, enabling fast, quiet STM-driven autofocus — a key requirement for video applications.

The fact that L3/LP is a single element (f ≈ +62.75 mm) with very modest refractive power means that its movement during focusing introduces only limited aberration variation. The patent notes, however, that the lens element closest to the object in the focus unit "has a shape with a concave surface on the object side" (R₁ = −65.961 mm, a concave-toward-object meniscus shape). This concave object-side surface reduces the angle of incidence of off-axis rays entering the focus element, which helps control field curvature variation during focusing.

**Note on close-focus data:** The patent provides variable spacing tables only at infinity focus. The close-focus d14/d16 values in the data file are calculated. They are the paraxial LP positions that focus Canon's published minimum distances (0.30 m at 24 mm and 0.35 m at 50 mm, object to image plane; 0.32 m at 35 mm is interpolated), with the image plane held fixed. LP travels 3.27 / 4.79 / 6.88 mm toward the object at the wide / middle / telephoto stations. The resulting magnifications, −0.116× at 24 mm and −0.195× at 50 mm, agree with Canon's published 0.11× and 0.19× maxima, which supports the single-unit LP focus model. The travel itself is not patent data.

### 2.4 Aperture and Diaphragm

The aperture stop (surface 13, "Diaphragm") is located between L2 and LR, at the image-side end of the second lens unit. The patent specifies a flare-cutting stop (FP, surface 14) immediately after the diaphragm, represented as a flat surface with variable spacing to L3. The diaphragm placement satisfies the patent's inequality (3): 0.25 < DSPw/TLw < 0.53, where DSPw is the distance from the diaphragm to the image plane and TLw is the total lens length at the wide end. For Example 1: DSPw = 50.82 mm and TLw = 105.60 mm, giving DSPw/TLw ≈ 0.48.

The maximum aperture is variable: f/4.63 at the wide end, f/5.66 at the middle position, and f/6.48 at the telephoto end. The patent publishes no iris diameters, so the viewer infers the physical iris at each station from these f-numbers. The inferred radii are 4.58 / 4.40 / 4.58 mm: the iris stops down slightly at the middle station and opens again at the telephoto end. The front-page figure draws the SP opening at about 4.4 mm. In practice, Canon rounds these to the marketed f/4.5–6.3 range. The production lens reports f/4.5 only at exactly 24 mm; by 25 mm it has already stepped to f/5.0, and f/6.3 is reached by 39 mm.

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

**Glass identification:** The nd/νd pair matches OHARA S-BSM18. This is a barium silicate crown glass — a workhorse optical material with moderate refractive index and moderate dispersion.

**Optical role:** G1 is the first element the light encounters. Its strong negative meniscus shape — a gently curved front surface (R₁ = +238.756 mm) paired with a steeply curved rear surface (R₂ = +18.479 mm), both convex toward the object — provides the bulk of L1's negative refractive power. The rear surface carries the dominant refraction: with a radius of just 18.5 mm, it is the most steeply curved surface in the entire lens. As the outermost element in a negative-lead zoom, G1 must diverge the beam sharply to widen the field of view at the wide-angle end.

**Semi-diameter constraint:** The rear surface R₂ = +18.479 mm imposes a hard physical limit on the clear aperture. The slope at the rim reaches the 64.2° fabrication threshold at sd ≈ 16.6 mm (sd/|R| ≈ 0.90). In the patent's FIG. 1 the rear curve ends at about 14.8 mm, and a flat flange carries the element out to the front surface's 18.8 mm rim. The data file uses 18.8 mm for the front surface and 14.4 mm for the rear, both within a few percent of the figure.

### Element 2 — G2: Second Negative Lens (Aspherical)

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

**Material identification:** The nd/νd pair does not match any conventional optical glass in the OHARA, SCHOTT, HOYA, or Sumita catalogs. Instead, it matches cyclo-olefin polymer (COP) optical resins used in precision molded (PMo) elements, such as ZEONEX E48R (nd ≈ 1.531, νd ≈ 56). The patent allows for this at [0062]: the negative lens G2 may be made of a resin material to reduce the weight of the large-diameter front group. The patent does not name the material, so the resin identification is inferred from the coordinate; the data file stores the code `531559` rather than a trade name.

**Aspherical surface (3A):** The object-side surface carries the aspherical profile. At the estimated semi-diameter of 14.0 mm, the aspherical departure from the base sphere reaches approximately +126 µm. The dominant term is A4 (+2.06 × 10⁻⁶). The positive departure bends the margin further toward the image than the base sphere, so the convex surface becomes steeper toward its edge. This adds surface power in the outer zone, which only the wide-angle off-axis bundles use.

**Optical role:** G2 provides supplementary negative power in L1, assisting G1 in diverging the beam at the wide-angle end. Its aspherical front surface is the primary wide-angle aberration corrector: the aspherical departure on a nearly flat base curve (R = 994.673 mm) effectively creates a freeform correction plate at the front of the lens. The very weak base curvature means the aspherical terms dominate the surface profile at larger heights — the polynomial coefficients, not the base sphere, define the optical function of this surface at the periphery.

### Element 3 — L1P: Positive Lens in L1

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

**Glass identification:** The nd/νd pair matches OHARA S-TIM35 (1.69895 / 30.13). This is a flint glass with a fairly high refractive index and high dispersion (low νd).

**Optical role:** L1P is the only positive element in the otherwise negative L1 unit. It serves as a chromatic corrector for G1 and G2: the negative elements (G1: νd = 55.4; G2: νd = 55.9) introduce lateral and longitudinal chromatic aberration, and L1P's low νd = 30.1 (high dispersion) provides the counter-dispersive correction.

**Edge thickness constraint:** L1P's strongly bent meniscus shape (shape factor +2.504) means the sag difference between the front and rear surfaces grows rapidly with aperture height. The stored SDs of 13.2/12.7 mm are estimates; FIG. 1 draws L1P to about 14.3 mm, within about 11 % of them, so they were kept.

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

**Glass identification:** The nd/νd pair matches OHARA S-LAH95 (1.90366 / 31.34). This is a lanthanum dense flint glass with the highest refractive index in the lens (nd = 1.90366). Glasses of this class are used in strong positive elements where keeping surface curvatures moderate matters.

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

**Glass identification:** The nd/νd pair matches OHARA S-NPH53 (1.84666 / 23.88). This is a very high-index, very high-dispersion dense flint glass — the most dispersive element in the entire lens (νd = 23.9).

**Optical role:** Element 5 is the chromatic corrector for the L2 positive group. Its biconcave shape distributes the negative power across both surfaces, with the more steeply curved rear surface (R₂ = +16.164 mm) carrying the bulk of the refraction. The thin center thickness (0.70 mm) and strong negative power (f = −16.45 mm) indicate this element operates as an air-spaced flint component of a broken-contact (air-spaced) doublet. The L2 group operates as a positive-negative-positive (PNP) triplet — an Ernostar-derived configuration — where the central negative flint provides chromatic correction while the outer positive elements provide convergence.

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

**Glass identification:** The nd/νd pair matches OHARA S-LAH66 (1.77250 / 49.60). This is a high-index lanthanum glass with moderate dispersion.

**Optical role:** Element 6 is the second positive element in L2's PNP triplet. Its biconvex shape (shape factor +0.486, more symmetric than Element 4's near-planoconvex) distributes the refraction across both surfaces, which helps balance higher-order aberrations (particularly oblique spherical aberration and coma at intermediate field angles). Its moderate Abbe number (νd = 49.6) places it between the high-dispersion flint (Element 5, νd = 23.9) and the low-dispersion crown L3 (νd = 70.2), creating a smooth chromatic transition across the relay.

### Element 7 — L3/LP: Focus Element (Positive Meniscus)

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

**Glass identification:** The nd/νd pair matches OHARA S-FSL5 (1.48749 / 70.24); HOYA FC5 and SCHOTT N-FK5 are the same glass class. This is a fluorine-containing (fluor silicate) crown glass — the lowest refractive index (1.48749) and lowest dispersion (νd = 70.2) in the entire system. S-FSL5 is lightweight (density ~2.46 g/cm³) and inexpensive — an ideal choice for a focus element that must be physically moved by the STM motor during video autofocus.

**Optical role:** L3/LP is the focus element — the only moving group during focus. The concave-toward-object shape is unusual for a positive focus element and is a deliberate aberration-management choice: when an off-axis ray enters the focus element through the concave front surface, the angle of incidence is reduced compared to a convex-toward-object orientation, which reduces field curvature variation during focus racking. The low dispersion (νd = 70.2) ensures minimal focus-dependent chromatic aberration.

### Element 8 — L4: Fourth Lens Unit (Aspherical, Negative)

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

**Material identification:** Same coordinate as G2 — nd/νd = 1.53110/55.9, the usual value for a cyclo-olefin optical resin. The patent does not name the material for L4 either. The shared constants suggest both aspherical elements use the same molding resin, but that is an inference.

**Aspherical surfaces (17A, 18A):** Both surfaces of L4 are aspherical, with very large departures from their base spheres:

- **Surface 17A** (front): departure ≈ −1.8 mm at the estimated SD of 11.8 mm. The A4 term (−1.02 × 10⁻⁴) provides the dominant low-order departure, but the A10 term (−1.16 × 10⁻¹¹) contributes significantly at larger heights due to the h¹⁰ dependence. The surface becomes substantially more concave than its base sphere at the margins.
- **Surface 18A** (rear): departure ≈ −1.7 mm at the estimated SD of 12.5 mm. Again A4-dominated (−9.01 × 10⁻⁵), with the surface becoming more concave than its nearly flat base sphere (R = −1111.779 mm).

These are still large, millimeter-scale aspherical departures, of the kind usually made by molding rather than by grinding and polishing. In the patent's FIG. 1, the 17A curve ends at about 12.1 mm and a flat flange carries L4 out to about 13.5 mm.

**Optical role:** L4 is the rearmost element in the system. Despite its weak negative power (f = −185.51 mm), L4 performs a critical aberration correction role. The two heavily aspherized surfaces serve as a field-correction lens — a final aberration compensator that adjusts field curvature, astigmatism, and distortion before the image reaches the sensor plane. The negative power contribution also slightly extends the back focal distance. The two aspherical surfaces provide substantially more degrees of freedom for wavefront correction than any other element in the system.

---

## 4. Aspherical Surface Summary

The lens has three aspherical surfaces across two elements:

| Surface | Element | R (mm) | K | Departure at SD | Dominant term |
|---------|---------|--------|---|-----------------|---------------|
| 3A | G2 | +994.673 | 0 | +126 µm (sd 14.0) | A4 = +2.06 × 10⁻⁶ |
| 17A | L4 | −90.404 | 0 | −1844 µm (sd 11.8) | A4 = −1.02 × 10⁻⁴ |
| 18A | L4 | −1111.779 | 0 | −1744 µm (sd 12.5) | A4 = −9.01 × 10⁻⁵ |

All three surfaces have K = 0 (spherical base curve, no conic component). The aspherical profiles are defined entirely by the even-order polynomial coefficients A4 through A12. The patent's aspheric formula (¶0078) uses the standard (1 + K) conic form, so K = 0 means a spherical base and the stored K = 0 needs no conversion.

The departures on surfaces 17A and 18A remain large — roughly 1.8 mm and 1.7 mm respectively. These values are strongly SD-dependent because of the high-order terms (particularly A10 and A12), which grow very rapidly with ray height. On these two surfaces the polynomial terms, rather than the base sphere, set most of the rim profile.

The aspherical strategy follows a clear design philosophy: **surface 3A corrects wide-angle field aberrations** (where the beam footprint on G2 is largest), while **surfaces 17A and 18A correct residual field curvature and astigmatism across all zoom positions** (where the converged beam is small but the angular spread of off-axis rays is significant).

---

## 5. Glass Selection Strategy

The lens uses six distinct optical materials: four conventional optical glasses and one optical resin (used in two elements):

| Element | Material | nd | νd | Glass family | Role |
|---------|----------|----|----|-------------|------|
| G1 | S-BSM18 | 1.63854 | 55.4 | Barium silicate crown | Structural negative |
| G2 | Resin, inferred (531559) | 1.53110 | 55.9 | Optical resin (COP class) | Aspherical corrector |
| L1P | S-TIM35 | 1.69895 | 30.1 | Flint | Chromatic balance for L1 |
| L2a | S-LAH95 | 1.90366 | 31.3 | Lanthanum dense flint | Primary convergence |
| L2b | S-NPH53 | 1.84666 | 23.9 | Dense flint | Chromatic balance for L2 |
| L2c | S-LAH66 | 1.77250 | 49.6 | Lanthanum glass (high-index) | Secondary convergence |
| LP | S-FSL5 | 1.48749 | 70.2 | Fluor silicate crown | Lightweight focus |
| L4 | Resin, inferred (531559) | 1.53110 | 55.9 | Optical resin (COP class) | Field corrector |

Several patterns emerge from this glass map:

**Cost-conscious material selection.** The glasses are all mainstream catalog types — no exotic special-dispersion or ED glass appears anywhere in the design. There are no fluorite elements, no anomalous-partial-dispersion glasses, and no UD (ultra-low dispersion) types. This is a deliberate cost optimization consistent with the lens's $299 retail price.

**Weight minimization through resin.** Two of the larger elements (G2 in the front group, L4 in the rear) have a resin-class index coordinate, and the patent names weight reduction as the reason for a resin G2 (¶0062). COP resin has a density of approximately 1.01 g/cm³ — roughly 60% lighter than the lightest glass in the system (S-FSL5 at ~2.46 g/cm³). This resin-for-glass substitution is a major contributor to the lens's remarkably low 210 g weight, alongside the compact mechanical barrel and the reduced element count enabled by accepting electronic correction.

**Chromatic correction through flint/crown pairing.** Each powered group contains an internal flint-crown chromatic balance: L1 pairs its low-dispersion negatives (G1 νd = 55.4, G2 νd = 55.9) with a high-dispersion positive (L1P νd = 30.1), while L2 pairs its high-index positives (L2a νd = 31.3, L2c νd = 49.6) with an ultra-dispersive negative (L2b νd = 23.9). This is a textbook zoom chromatic correction strategy.

---

## 6. Petzval Sum and Field Curvature

The surface-by-surface Petzval sum for the system is:

**Σ (Δn / n·n′·R) = +0.00192 mm⁻¹**

This corresponds to a Petzval radius of approximately **+521 mm** — meaning the natural (uncorrected) Petzval image surface has an extremely gentle curvature that is, for practical purposes, flat. This is a remarkable result for an 8-element zoom lens and merits discussion.

The near-zero Petzval sum arises from careful power balancing between the negative and positive elements. The negative elements contribute −0.0617 mm⁻¹ in aggregate (dominated by G1 at −0.0194 and L2b at −0.0328), while the positive elements contribute +0.0636 mm⁻¹ (dominated by L2a at +0.0226, L2c at +0.0164, and LP at +0.0155). The difference is just +0.0019 mm⁻¹ — within 3% of zero. This balance is not accidental: the patent's conditional inequalities (4) through (9) constrain the refractive indices and Abbe numbers of key elements precisely to maintain this Petzval equilibrium across the allowed design space.

The near-zero Petzval sum means that the field curvature budget is not a primary constraint on this design. Instead, the aspherical surfaces on L4 are primarily addressing astigmatism, coma, and distortion — with the underlying Petzval field already essentially flat. This is an unusual luxury for a compact zoom, made possible by having the negative power distributed across four elements (G1, G2, L2b, L4) whose combined Petzval contribution closely matches that of the four positive elements.

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

The extent of this reliance on electronic correction is quantifiable from the patent data. At the wide-angle end the patent lists a half-field of 36.23° and an image height of 18.10 mm, which is simply f·tan ω, an image circle of 36.2 mm against the 43.3 mm full-frame diagonal. The real image is smaller still. An exact ray trace puts the chief ray at 36.23° on 15.8 mm, about −13 % barrel distortion, which matches the distortion curve of FIG. 2A. Reaching 18.1 mm takes a real field of about 41.3°, and no ray reaches 21.6 mm at 24 mm at all; the trace tops out near 20.6 mm. Barrel distortion compresses the edge of the field inward, and Canon's in-camera correction stretches and brightens that compressed periphery to fill the frame. At the telephoto end, coverage improves to about 96% (image circle 41.4 mm vs. sensor diagonal 43.3 mm), explaining why the optical performance and vignetting are noticeably better at 50 mm.

This "design-for-correction" approach allows the optical designers to accept significantly more aberration than would be tolerable in an optically-corrected design, enabling the 8-element/8-group construction that would otherwise require 12–14 elements to achieve comparable corrected image quality at 24 mm.

The two-aspherical-element strategy is particularly noteworthy: G2 and L4 share one resin-class coordinate, which suggests (the patent does not say) one molding material for both aspherical elements. The three aspherical surfaces across these two elements provide 15 polynomial degrees of freedom (5 coefficients × 3 surfaces) for aberration correction — a substantial optimization budget that compensates for the absence of cemented doublets, ED glass, and the additional elements found in more complex zooms.

---

## Appendix A: Complete Surface Prescription (Example 1)

| Surface | R (mm) | d (mm) | nd | νd | Element |
|---------|--------|--------|----|----|---------|
| 1 | +238.756 | 1.40 | 1.63854 | 55.4 | G1 |
| 2 | +18.479 | 7.21 | — | — | air |
| 3A | +994.673 | 3.70 | 1.53110 | 55.9 | G2 |
| 4 | +56.399 | 0.30 | — | — | air |
| 5 | +28.004 | 3.60 | 1.69895 | 30.1 | L1P |
| 6 | +65.231 | (var) | — | — | air |
| 7 | +21.644 | 3.00 | 1.90366 | 31.3 | L2a |
| 8 | −709.102 | 2.60 | — | — | air |
| 9 | −102.707 | 0.70 | 1.84666 | 23.9 | L2b |
| 10 | +16.164 | 0.37 | — | — | air |
| 11 | +26.583 | 2.05 | 1.77250 | 49.6 | L2c |
| 12 | −76.939 | 2.00 | — | — | air |
| 13 (STO) | ∞ | 6.15 | — | — | stop |
| 14 (FP) | ∞ | (var) | — | — | flare stop |
| 15 | −65.961 | 2.95 | 1.48749 | 70.2 | LP |
| 16 | −21.205 | (var) | — | — | air |
| 17A | −90.404 | 3.50 | 1.53110 | 55.9 | L4 |
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
