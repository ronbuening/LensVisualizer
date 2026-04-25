# Nikon PC NIKKOR 19mm f/4E ED — Optical Design Analysis

**Patent:** JP 2017-161685 A (published 2017.09.14)
**Applicants:** Konica Minolta, Inc. & Nikon Corporation
**Inventors:** Ryosuke Imashima, Taisei Fukuda (Konica Minolta); Toshinori Take, Takayuki Sensui (Nikon)
**Examined Example:** Example 1 (EX1)
**Lens type:** Retrofocus ultra-wide-angle perspective control (tilt-shift) prime

---

## 1. Overview and Production Identification

The PC NIKKOR 19mm f/4E ED is Nikon's widest perspective control lens, announced in October 2016. It features independent tilt (±7.5°) and shift (±12 mm) mechanisms with a novel "PC Rotation" capability that allows the tilt axis to be set parallel or perpendicular to the shift direction — a first for NIKKOR PC lenses.

**Manufacturer specifications (Nikon):**

| Parameter | Value |
|---|---|
| Focal length | 19 mm |
| Maximum aperture | f/4 |
| Minimum aperture | f/32 |
| Angle of view (FX) | 97° |
| Angle of view (full image circle) | ~119° (design covers y'max = 33.0 mm for ±12 mm shift) |
| Lens construction | 17 elements in 13 groups |
| Special elements | 3 ED, 2 aspherical |
| Diaphragm blades | 9 (rounded) |
| Minimum focus distance | 0.25 m (from focal plane) |
| Maximum reproduction ratio | 0.18× |
| Filter size | None (bulbous front element) |
| Mount | Nikon F (with electromagnetic diaphragm) |
| Dimensions | 89 mm (Ø) × 124 mm (L) |
| Weight | 885 g |

### Example Selection

Example 1 is identified as the most probable production design based on element/group count matching. The patent provides four numerical examples, all sharing the same general architecture (positive-positive two-group retrofocus with four leading negative meniscus elements). The critical differentiator is the rear group's internal structure:

- **EX1** separates L24 as an air-spaced negative meniscus after the cemented doublet L22+L23, yielding **17 elements in 13 groups** — an exact match to Nikon's published specification.
- **EX2** cements L22+L23+L24 into a triplet, producing **17 elements in 12 groups** — one group short of the published specification.

Both examples share identical Gr1 constructions (surfaces 1–16), and their Gr2 prescriptions are very similar. The distinction lies solely in whether L24 is cemented to L23 (EX2) or air-spaced (EX1).

Nikon's marketing material counts 17 elements, though all four examples contain 18 physical optical pieces. The composite aspherical element (resin layer L28 bonded to glass body L29) is counted as a single "element" for marketing purposes — standard industry practice for composite-type aspherical elements.

---

## 2. Optical Architecture

The design is a **retrofocus (inverted telephoto)** configuration comprising two positive-power groups separated by an aperture stop:

- **Group 1 (Gr1):** Positive power, fixed during focusing. Contains the leading negative sub-group (four negative meniscus elements L11–L14) followed by two cemented doublets (Ja and Jb) and a positive meniscus (L19). Total: 9 elements in 7 groups.
- **Aperture Stop (ST):** Located between Gr1 and Gr2. Moves with Gr2 during focusing.
- **Group 2 (Gr2):** Positive power, moves axially toward the object for close focusing. Contains a biconvex singlet (L21), a cemented doublet (Jc: L22+L23), an air-spaced negative meniscus (L24), an ED biconvex singlet (L25), a cemented doublet (Jd: L26+L27), and a composite aspherical element (H1: L28+L29). Total: 9 elements in 6 groups.

### Verified Paraxial Parameters (EX1)

| Parameter | Computed | Patent | Δ |
|---|---|---|---|
| EFL | 19.372 mm | 19.37 mm | +0.002 |
| BFD (infinity) | 56.433 mm | 56.38 mm | +0.053 |
| Gr1 focal length (f₁) | 94.93 mm | 94.90 mm | +0.03 |
| Gr2 focal length (f₂) | 68.68 mm | 68.69 mm | −0.01 |
| Total track | 168.95 mm | 168.90 mm | +0.05 |
| Half-field angle (paraxial) | 59.59° | 59.60° (2ω = 119.2°) | −0.01° |
| BF/f ratio | 2.913 | 2.91 | +0.003 |
| Φ₁/Φ | 0.204 | 0.20 | +0.004 |
| Φ₂/Φ | 0.282 | 0.28 | +0.002 |
| Φ₁/Φ₂ | 0.724 | 0.72 | +0.004 |

The small residuals (all ≤ 0.05 mm or ≤ 0.01°) reflect rounding in the patent's stated values. The BF/f ratio of 2.91 means the back focal distance is nearly three times the focal length — an extreme retrofocus configuration necessary to accommodate the Nikon F-mount flange distance (46.5 mm) plus the mechanical clearance required for the tilt-shift mechanism (approximately 9.8 mm beyond the flange).

### Petzval Sum

The surface-by-surface Petzval sum is **+0.00532 mm⁻¹**, yielding a Petzval radius of **+188.0 mm** (about 9.7× the focal length). The normalized product Petzval × EFL = 0.103. This is well-corrected for an ultra-wide retrofocus lens, enabled by the extensive use of high-index glasses in the negative elements (nd = 1.90366 in L16, nd = 1.91082 in L24) and ED glass (nd = 1.49700) in the positive elements. The large index differential between negative and positive elements reduces the magnitude of each element's Petzval contribution (which scales as φ/(n·n′)), helping to drive the net sum toward zero despite the overall positive system power.

---

## 3. Element-by-Element Analysis

### 3.1 Group 1 — Front Fixed Group (Surfaces 1–16)

Group 1 is the stationary (non-focusing) group. Its front sub-group (L11–L14) consists of four successive negative meniscus elements that progressively diverge the incoming beam, establishing the retrofocus power balance. The rear sub-group (L15–L19) contains two cemented doublets and a positive meniscus that begin re-converging the light before it reaches the stop.

#### L11 — Negative Meniscus (Surfaces 1–2)

| Property | Value |
|---|---|
| Glass | S-LAL14 (OHARA); nd = 1.69680, νd = 55.46 |
| Radii | R₁ = +43.971, R₂ = +30.197 |
| Center thickness | 3.50 mm |
| Standalone focal length | −154.5 mm |
| Shape | Meniscus convex to object, negative power |

L11 is the outermost element of the lens, directly exposed to the environment (protected by Nikon's fluorine coating). Its weak negative power gently begins diverging the on-axis beam while accepting the full cone of the 119° field. The large radii and moderate-index glass (S-LAL14, a lanthanum crown) keep the surface contributions to spherical aberration and coma manageable. S-LAL14 is a lanthanum alumino-silicate glass with good chemical durability, appropriate for an exposed front element.

#### L12 — Negative Meniscus (Surfaces 3–4)

| Property | Value |
|---|---|
| Glass | S-LAL14 (OHARA); nd = 1.69680, νd = 55.46 |
| Radii | R₁ = +35.045, R₂ = +22.843 |
| Center thickness | 3.17 mm |
| Standalone focal length | −105.4 mm |
| Shape | Meniscus convex to object, negative power |

L12 uses the same glass as L11 and continues the beam divergence with moderately stronger curvatures. Using identical glass in L11 and L12 simplifies manufacturing and inventory while maintaining consistency in the refractive and dispersive properties of the leading sub-group.

#### L13 — Negative Meniscus, Double Asphere (Surfaces 5A–6A)

| Property | Value |
|---|---|
| Glass | L-BAL42 (OHARA); nd = 1.58313, νd = 59.39 |
| Radii (vertex) | R₁ = +34.175, R₂ = +13.901 |
| Center thickness | 3.50 mm |
| Standalone focal length | −42.9 mm |
| Shape | Meniscus convex to object, negative power |
| Aspherical surfaces | Both (front and rear) |

L13 is the most optically significant element in the front sub-group. Both surfaces are aspherical, and the patent specifically describes it as having "a negative meniscus with an aspherical shape in which the negative power decreases from the lens center to the periphery" (paragraph 0030). This height-dependent power variation is essential for controlling distortion and field curvature across the enormous 119° field.

The glass choice, L-BAL42, is a moldable (low-Tg) barium alumino-silicate from OHARA's L-series. The "L-" prefix indicates suitability for precision glass molding (PGM), confirming that L13 is a **glass-molded aspherical element** rather than a polished asphere.

**Aspherical coefficients — Surface 5 (front):**

| Coefficient | Value |
|---|---|
| K | +1.19330 |
| A₄ | +1.3754 × 10⁻⁵ |
| A₆ | −6.3757 × 10⁻⁸ |
| A₈ | +9.3030 × 10⁻¹¹ |
| A₁₀ | −5.9263 × 10⁻¹⁴ |
| A₁₂ | +5.6844 × 10⁻¹⁷ |
| A₁₄ | −1.9087 × 10⁻¹⁹ |

The positive conic constant (K = +1.193, oblate ellipsoid) combined with positive A₄ causes the surface to become progressively **more curved** toward the rim compared to a sphere, increasing the front surface's positive refractive contribution at the periphery and thereby reducing the net negative power of the element toward the edge.

Note: The conic height limit for this surface is sd < |R|/√(1+K) = 34.175/√2.193 = 23.1 mm, well above the estimated sd of 14.0 mm.

**Aspherical coefficients — Surface 6 (rear):**

| Coefficient | Value |
|---|---|
| K | −0.42274 |
| A₄ | −1.1347 × 10⁻⁶ |
| A₆ | −6.8233 × 10⁻⁸ |
| A₈ | −6.9108 × 10⁻¹⁰ |
| A₁₀ | +1.6037 × 10⁻¹² |
| A₁₂ | +2.0146 × 10⁻¹⁵ |
| A₁₄ | −1.6393 × 10⁻¹⁷ |

The rear surface has a negative conic (K = −0.423, between sphere and paraboloid) and substantial negative aspherical departure at the rim, making the surface substantially **flatter** at the edge than a sphere of the same vertex radius. Both aspherical surfaces independently act to reduce the net negative power of L13 toward the edge, directly implementing the patent's prescribed power variation.

#### L14 — Negative Meniscus, ED Glass (Surfaces 7–8)

| Property | Value |
|---|---|
| Glass | S-FPL51 (OHARA); nd = 1.49700, νd = 81.61 |
| Radii | R₁ = +160.346, R₂ = +20.956 |
| Center thickness | 2.00 mm |
| Standalone focal length | −48.7 mm |
| Shape | Deep negative meniscus, convex to object (near-flat front) |

L14 is the fourth and final negative element in the front sub-group. It uses **S-FPL51**, the same fluorophosphate ED glass used in L25 and L27. The near-flat front surface (R₁ = +160.3 mm) combined with the strongly curved rear (R₂ = +21.0 mm) produces a deep negative meniscus. Using ED glass in a negative element is unusual — typically ED elements are positive to exploit their low dispersion for chromatic correction. Here, L14's role is to contribute negative power to the retrofocus balance while simultaneously reducing lateral chromatic aberration, which is the dominant chromatic error in wide-angle retrofocus designs.

#### L15 + L16 — Cemented Doublet "Ja" (Surfaces 9–11)

| Element | Glass | nd | νd | θgf | Radii | ct |
|---|---|---|---|---|---|---|
| L15 (positive) | NBFD3 (HOYA) | 1.64769 | 33.84 | — | R₉ = +76.016 (front), R₁₀ = −16.389 (junction) | 8.40 mm |
| L16 (negative) | S-LAH79 (OHARA) | 1.90366 | 31.32 | 0.5947 | R₁₀ = −16.389 (junction), R₁₁ = +60.949 (rear) | 5.29 mm |

| Property | L15 | L16 |
|---|---|---|
| Standalone focal length | +21.6 mm | −13.8 mm |
| Shape | Biconvex | Biconcave |
| APD status | — | Patent-confirmed APD glass |

This doublet has a concave-to-object junction surface (R₁₀ = −16.389, satisfying condition (4): R₁a/f = −0.85). Per the patent (paragraph 0033), this doublet primarily **controls coma** — the concave junction allows adjustment of residual coma without significantly affecting other aberrations.

L16 is notable: S-LAH79 (nd = 1.90366) is one of the highest-index commercial optical glasses available, with anomalous partial dispersion (θgf = 0.5947). The extreme refractive index allows L16 to provide strong negative power within a compact element. The small Abbe number difference between L15 and L16 (Δνd = 2.52) means this doublet contributes relatively little to primary chromatic correction — its role is primarily monochromatic aberration control.

#### L17 + L18 — Cemented Doublet "Jb" (Surfaces 12–14)

| Element | Glass | nd | νd | θgf | Radii | ct |
|---|---|---|---|---|---|---|
| L17 (negative) | TAFD25 (HOYA) | 1.83481 | 42.72 | — | R₁₂ = +34.641 (front), R₁₃ = +19.438 (junction) | 5.00 mm |
| L18 (positive) | S-NBH5 (OHARA) | 1.65412 | 39.68 | 0.5737 | R₁₃ = +19.438 (junction), R₁₄ = −31.576 (rear) | 6.73 mm |

| Property | L17 | L18 |
|---|---|---|
| Standalone focal length | −62.4 mm | +19.4 mm |
| Shape | Meniscus (convex to object) | Biconvex |
| APD status | — | Patent-confirmed APD glass |

This doublet has a convex-to-object junction (R₁₃ = +19.438, satisfying condition (7): R₁b/f = +1.00). Per the patent (paragraph 0038), it primarily **controls spherical aberration**, allowing the designer to adjust residual spherical aberration independently of other aberrations.

L18 is an anomalous partial dispersion glass (θgf = 0.5737), which contributes to secondary spectrum correction. The negative Abbe number difference (νL₁b₁ − νL₁b₂ = 39.68 − 42.72 = −3.04) confirms the pair is not primarily a chromatic corrector but rather a monochromatic aberration control doublet that uses APD materials for secondary spectrum management.

#### L19 — Positive Meniscus (Surfaces 15–16)

| Property | Value |
|---|---|
| Glass | NBFD3 (HOYA); nd = 1.64769, νd = 33.84 |
| Radii | R₁₅ = +31.187, R₁₆ = +74.264 |
| Center thickness | 2.25 mm |
| Standalone focal length | +81.3 mm |
| Shape | Meniscus convex to object, positive power |

L19 is the last element of Gr1 and provides weak positive power that begins converging the divergent beam before it passes through the stop. Using the same glass as L15 (NBFD3), it shares L15's dispersion characteristics. The air gap after L19 (surface 16, d = 6.81 mm at infinity) is the first variable gap — it decreases to 3.14 mm at close focus as Gr2 (and the stop) advance toward the object.

### 3.2 Aperture Stop (Surface 17)

The aperture stop is positioned between Gr1 and Gr2. The stop **moves with Gr2** during focusing (paragraph 0060–0061), meaning the stop-to-Gr2 distance remains constant while the Gr1-to-stop distance changes. At f/4.08 (design), the stop semi-diameter is approximately 7.35 mm, which yields an entrance pupil semi-diameter of approximately 2.37 mm — consistent with the slow f/4 maximum aperture.

### 3.3 Group 2 — Rear Focusing Group (Surfaces 18–32)

Group 2 is the focusing group. It translates axially toward the object for close focus. The Gr2 group focal length is 68.68 mm and its power ratio Φ₂/Φ = 0.28 means it contributes about a quarter of the total system power. The moderate Gr2 power ensures the focusing travel is manageable (3.67 mm forward movement from infinity to minimum focus) while keeping aberration variation during focus within acceptable limits.

#### L21 — Biconvex Positive (Surfaces 18–19)

| Property | Value |
|---|---|
| Glass | S-TIM28 (OHARA); nd = 1.59270, νd = 35.44, θgf = 0.5926 |
| Radii | R₁₈ = +49.359, R₁₉ = −27.494 |
| Center thickness | 3.23 mm |
| Standalone focal length | +30.3 mm |

L21 is the first element of the focusing group and provides substantial positive power. Its partial dispersion ratio places it just below the APD threshold: (0.6425 − 0.5926)/35.44 = 0.00141 < 0.00150. This near-boundary status means L21's chromatic contribution is nearly "anomalous," helping to suppress secondary spectrum. L21 is identified in the patent tables as satisfying conditions (12) and (13), confirming its role as a normal-PD positive element in Gr2.

#### L22 + L23 — Cemented Doublet "Jc" (Surfaces 20–22)

| Element | Glass | nd | νd | Radii | ct | fl |
|---|---|---|---|---|---|---|
| L22 (neg) | S-LAH55V (OHARA) | 1.77250 | 49.62 | R₂₀ = −23.268, R₂₁ = +14.617 | 1.20 mm | −11.5 mm |
| L23 (pos) | S-NSL5 (OHARA) | 1.51742 | 52.15 | R₂₁ = +14.617, R₂₂ = −27.000 | 4.90 mm | +19.1 mm |

This negative-positive doublet provides aberration correction within the focusing group. The junction's large refractive index difference (Δnd = 1.77250 − 1.51742 = 0.255) creates a "buried surface" effect — strong aberration control with minimal chromatic impact at the cemented interface.

**Glass identification note for L23:** The glass nd = 1.51742, νd = 52.15 (six-digit code 517/522) matches closely to OHARA S-NSL5 (nd = 1.51742, νd = 52.43, Δνd = +0.28). CDGM H-K10 is also a near-exact match. Given the Konica Minolta co-applicant status, a Japanese glass catalog match is more likely; S-NSL5 is the nearest OHARA candidate.

#### L24 — Negative Meniscus (Surfaces 23–24)

| Property | Value |
|---|---|
| Glass | TAFD55 (HOYA); nd = 1.91082, νd = 35.25 |
| Radii | R₂₃ = −25.008, R₂₄ = −188.788 |
| Center thickness | 1.00 mm |
| Standalone focal length | −31.7 mm |
| Shape | Negative meniscus, concave to object |

L24 is the highest-index element in the entire system (nd = 1.911). In EX1, it is **air-spaced** from the L22+L23 doublet, creating a separate group and yielding the 13-group total that matches Nikon's specification. The nearly flat rear surface (R₂₄ = −188.788) makes it effectively plano-concave, concentrating the refractive action primarily at the front surface. L24's strong negative power at high refractive index provides field-flattening correction in Gr2 without introducing excessive chromatic spread.

#### L25 — Biconvex Positive, ED Glass (Surfaces 25–26)

| Property | Value |
|---|---|
| Glass | S-FPL51 (OHARA); nd = 1.49700, νd = 81.61, θgf = 0.5388 |
| Radii | R₂₅ = +35.526, R₂₆ = −22.931 |
| Center thickness | 5.51 mm |
| Standalone focal length | +28.9 mm |

L25 is the first of three ED elements (all using S-FPL51) and provides the strongest individual positive power in the rear group. S-FPL51 is a fluorophosphate crown with exceptionally low dispersion (νd = 81.61) and normal partial dispersion (θgf = 0.5388), making it ideal for correcting both primary and secondary axial chromatic aberration.

#### L26 + L27 — Cemented Doublet "Jd" (Surfaces 27–29)

| Element | Glass | nd | νd | θgf | Radii | ct | fl |
|---|---|---|---|---|---|---|---|
| L26 (neg) | TAFD25 (HOYA) | 1.83481 | 42.72 | — | R₂₇ = +112.277, R₂₈ = +18.718 | 1.20 mm | −27.1 mm |
| L27 (pos) | S-FPL51 (OHARA) | 1.49700 | 81.61 | 0.5388 | R₂₈ = +18.718, R₂₉ = −22.556 | 11.00 mm | +22.6 mm |

This is a classic achromatic doublet pairing a high-index flint (L26, nd = 1.83481) with a low-index ED crown (L27, nd = 1.49700). The large Abbe number difference (Δνd = 81.61 − 42.72 = 38.89) makes this doublet a powerful chromatic corrector. L27 is notably thick (11.00 mm), contributing substantially to the positive power of Gr2. L26 uses the same glass as L17 (TAFD25), maintaining inventory efficiency.

#### L28 + L29 — Composite Aspherical Element "H1" (Surfaces 30A–32)

| Element | Material | nd | νd | Radii | ct |
|---|---|---|---|---|---|
| L28 (resin) | UV-cure aspherical resin | 1.51380 | 52.97 | R₃₀ = −64.378 (asph), R₃₁ = −60.928 | 0.10 mm |
| L29 (glass) | BSC7 (HOYA) | 1.51680 | 64.20 | R₃₁ = −60.928, R₃₂ = −1000.000 | 1.90 mm |

This is a **composite-type aspherical element** — a thin layer of UV-cured aspherical resin (L28) bonded to the object-side surface of a glass meniscus (L29). The resin layer is extremely thin (0.10 mm center thickness) and has nearly zero optical power on its own (fl ≈ +2191 mm). Its purpose is to provide the aspherical surface correction. The base glass element L29 is a weak negative meniscus (fl = −125.6 mm) concave toward the object, using BSC7 — a borosilicate crown with good optical homogeneity.

**Aspherical coefficients — Surface 30 (resin front):**

| Coefficient | Value |
|---|---|
| K | 0.00000 (sphere baseline) |
| A₄ | −1.2685 × 10⁻⁵ |
| A₆ | +1.5258 × 10⁻⁸ |
| A₈ | −1.6714 × 10⁻¹⁰ |
| A₁₀ | +1.1054 × 10⁻¹² |
| A₁₂ | −2.1127 × 10⁻¹⁵ |
| A₁₄ | 0 |

Per the patent (paragraph 0031), placing an aspherical surface on the rearmost element of Gr2 "effectively suppresses image plane variation during focusing." Because this element is closest to the image plane where different field angles are well-separated spatially, small surface figure changes here have a large and localized effect on field-dependent aberrations — particularly field curvature and astigmatism residuals that would otherwise shift during the 3.67 mm focus travel.

---

## 4. Glass Summary

The design uses 13 distinct optical materials (12 glasses plus 1 UV-cure resin) across 18 elements:

| Glass | Catalog | nd | νd | Elements | Count | Role |
|---|---|---|---|---|---|---|
| S-LAL14 | OHARA | 1.69680 | 55.46 | L11, L12 | 2 | Front negative group |
| L-BAL42 | OHARA | 1.58313 | 59.39 | L13 | 1 | Moldable asphere |
| S-FPL51 | OHARA | 1.49700 | 81.61 | L14, L25, L27 | 3 | ED elements |
| NBFD3 | HOYA | 1.64769 | 33.84 | L15, L19 | 2 | Doublet Ja & Gr1 meniscus |
| S-LAH79 | OHARA | 1.90366 | 31.32 | L16 | 1 | Ultra-high-index negative (APD) |
| TAFD25 | HOYA | 1.83481 | 42.72 | L17, L26 | 2 | High-index flint |
| S-NBH5 | OHARA | 1.65412 | 39.68 | L18 | 1 | APD positive |
| S-TIM28 | OHARA | 1.59270 | 35.44 | L21 | 1 | Near-APD positive |
| S-LAH55V | OHARA | 1.77250 | 49.62 | L22 | 1 | High-index LaF |
| S-NSL5 | OHARA | 1.51742 | 52.15 | L23 | 1 | Low-index crown |
| TAFD55 | HOYA | 1.91082 | 35.25 | L24 | 1 | Ultra-high-index flint |
| UV-cure resin | Polymer | 1.51380 | 52.97 | L28 | 1 | Composite asphere |
| BSC7 | HOYA | 1.51680 | 64.20 | L29 | 1 | Base glass for composite |

The three ED elements (L14, L25, L27) all use S-FPL51 (νd = 81.61), consistent with Nikon's published specification of "3 ED glass elements." The two aspherical elements — L13 (glass-molded, both surfaces aspherical) and L28+L29 (composite resin aspherical) — match the "2 aspherical elements" specification. The three aspherical *surfaces* are: S5A (L13 front), S6A (L13 rear), and S30A (L28 front).

---

## 5. Focusing Mechanism

Focusing is achieved by translating the entire Group 2 (including the aperture stop) axially toward the object. Group 1 remains fixed relative to the image plane.

**Variable gaps:**

| Surface | Label | d (infinity) | d (close) | Δd |
|---|---|---|---|---|
| 16 | L19 rear → stop | 6.81 mm | 3.14 mm | −3.67 mm |
| 32 | L29 rear → image | 56.38 mm | 60.01 mm | +3.63 mm |

At close focus, Gr2 moves **3.67 mm toward the object**. The BFD simultaneously increases by 3.63 mm (from 56.38 to 60.01 mm). The 0.04 mm net shortening of the Gr1-to-image path reflects the change in principal plane positions as the conjugate ratio changes.

The close focus distance from the focal plane computes to approximately **249 mm** (80.48 mm object distance from surface 1 plus 168.86 mm total track at close focus), consistent with Nikon's specified minimum focus distance of **0.25 m**.

This is a **rear-group focusing** mechanism. The patent specifically states that this configuration keeps the four front negative meniscus elements (L11–L14) stationary, which is advantageous because those elements handle the most extreme ray heights at the edge of the 119° field. Moving them during focus would severely degrade off-axis performance. The two variable gaps classify this as **inner focus** (though in this case the entire rear group translates as a rigid unit rather than having internal differential motion).

---

## 6. Chromatic Aberration Strategy

The design employs a multi-pronged strategy for chromatic aberration correction:

**Primary chromatic correction** is handled by the large Abbe number differences in the Gr2 cemented groups — particularly the L26+L27 doublet Jd (Δνd = 38.89) and the ED singlet L25.

**Lateral chromatic aberration** — the dominant chromatic error in retrofocus wide-angles — is addressed by placing an ED element (L14, S-FPL51) in the front negative sub-group. By using extremely low-dispersion glass for a negative element at high ray heights, the lateral color contribution from the diverging front group is suppressed at its source.

**Secondary spectrum** is controlled through anomalous partial dispersion materials. The patent identifies L16 (θgf = 0.5947) and L18 (θgf = 0.5737) as satisfying APD conditions (10) and (11), meaning they have positive anomalous partial dispersion that can be balanced against the normal-PD ED elements (L25 and L27, θgf = 0.5388) to reduce secondary spectrum. The patent requires at least three positive elements in Gr2 satisfying conditions (12)+(13) — met by L25, L27, and L21.

---

## 7. Patent Condition Compliance (EX1)

All required patent conditions are satisfied:

| Condition | Expression | Required | EX1 Value | Status |
|---|---|---|---|---|
| (1) | Φ₁/Φ | 0.2–0.5 | 0.20 | ✓ (at boundary) |
| (1a) | Φ₁/Φ | 0.2–0.3 | 0.20 | ✓ (at boundary) |
| (2) | Φ₂/Φ | 0.2–0.3 | 0.28 | ✓ |
| (3) | Φ₁/Φ₂ | 0.6–1.7 | 0.72 | ✓ |
| (3a) | Φ₁/Φ₂ | 0.7–1.0 | 0.72 | ✓ |
| (4) | R₁a/f | −1.5–0 | −0.85 | ✓ |
| (5) | nL₁a₁ − nL₁a₂ | −0.3–−0.2 | −0.26 | ✓ |
| (6) | νL₁a₁ − νL₁a₂ | 0–10 | 2.52 | ✓ |
| (7) | R₁b/f | 0–1.5 | +1.00 | ✓ |
| (8) | nL₁b₁ − nL₁b₂ | −0.25–−0.1 | −0.18 | ✓ |
| (9) | νL₁b₁ − νL₁b₂ | −10–12 | −3.04 | ✓ |

EX1 sits at or very near the boundary of conditions (1) and (1a), with Φ₁/Φ = 0.20 where the condition requires > 0.2 as a strict inequality. The patent tables report Φ₁/Φ = 0.20, which is technically on the boundary. However, more precise computation gives Φ₁/Φ = 0.204, which satisfies the strict inequality. EX1 also satisfies the tighter preferred ranges (1a) and (3a), meaning it achieves an optimal balance between long back focal distance and aberration correction — consistent with what would be expected in a production design.

---

## 8. Design Context and Significance

The PC NIKKOR 19mm f/4E ED represents a significant engineering achievement: an ultra-wide-angle tilt-shift lens with a ~119° diagonal field of view and a BF/f ratio approaching 3:1, while maintaining corrected aberrations across the full shift range (±12 mm, corresponding to an image circle approximately 66 mm in diameter — substantially larger than the 43.3 mm FX format diagonal).

The joint patent filing by Konica Minolta and Nikon is notable. Konica Minolta's optical engineering division has deep expertise in wide-angle design (inherited from Minolta's legacy), and this collaboration leverages that capability for a lens marketed exclusively under the NIKKOR brand.

The 18-element (17 marketed) construction with three aspherical surfaces and three ED elements is complex for a prime lens, but justified by the extraordinary optical demands: maintaining resolution and a flat image plane across a 66 mm image circle while allowing the optical axis to be shifted and tilted relative to the sensor. The long back focal distance (56.38 mm) provides the necessary mechanical clearance for the tilt-shift mechanism behind the rear element, a constraint that fundamentally shapes the retrofocus power balance.

---

*Analysis based on JP 2017-161685 A, Example 1. Paraxial parameters independently verified via ABCD matrix ray trace. Glass identifications cross-referenced against OHARA, HOYA, SCHOTT, and CDGM catalogs using six-digit code matching. Semi-diameters estimated via combined marginal + chief ray trace and validated against edge thickness, cross-gap sag overlap, and sd/|R| constraints. All computations performed in Python with IEEE-754 double precision.*
