# Nikon NIKKOR Z 28mm f/2.8 — Patent Design Analysis

**Patent:** WO 2022/071249 A1 — Example 2 (Table 2)
**Priority:** JP 2020-164402 (30 September 2020)
**Inventor:** SHIMADA, Toshiyuki (嶋田 俊之)
**Applicant:** Nikon Corporation
**Production Design Identification:** Confirmed — see §1 below

---

## 1. Production Design Identification

Example 2 of WO 2022/071249 A1 is identified as the production NIKKOR Z 28mm f/2.8 (and its cosmetically variant NIKKOR Z 28mm f/2.8 SE) through convergent criteria:

| Parameter | Patent Example 2 | Nikon Specification | Match |
|---|---|---|---|
| Focal length | 28.824 mm | 28 mm | ✓ |
| Maximum aperture | f/2.909 | f/2.8 (nominal) | ✓ |
| Element/group count | 9 elements / 8 groups | 9 elements / 8 groups | ✓ |
| Aspherical elements | 2 (L24 composite, L31 both-sides) | 2 aspherical elements | ✓ |
| Minimum focus distance | 190.0 mm (computed: D0 + TL) | 0.19 m | ✓ |
| Maximum magnification | 0.203× (β = −0.203) | 0.20× | ✓ |
| Focus mechanism | Internal focus, 2 moving groups | IF (internal focus) | ✓ |
| Angle of view (half) | 38.029° (2ω ≈ 76.1°) | 75° (FX format) | ✓ (within spec rounding) |

Note on group counting: Nikon's specification of "8 groups" counts each physically distinct lens unit (cemented elements = 1 group), yielding 8 sub-assemblies from 9 elements. The patent's 4-group designation (G1–G4) counts mechanical motion groups — sets of elements that move together during focus. Specifically, the cemented doublet L21+L22 forms one Nikon "group" but is part of the 4-element G2 assembly. Both systems are correct within their respective conventions. The hybrid composite element L24 (glass body + resin layer) counts as a single element in Nikon's 9-element total; however, the data file requires separate entries for the glass body and resin layer because they have different refractive indices.

The patent also covers Examples 1, 3, and 4. Example 1 shares the same 4-group architecture but uses a different G1 construction (cemented doublet rather than air-spaced). Example 3 uses a 4-element G1 (standalone negative L11 plus a cemented triplet L12/L13/L14, with L12 having both surfaces aspherical). Example 4 uses a 2-element G1 with a hybrid aspherical composite element. Only Example 2 matches all published production specifications simultaneously.

---

## 2. Optical Architecture Overview

The lens is a compact wide-angle design with four optical groups arranged as **G1(+) — Aperture Stop — G2(+) — G3(+) — G4(−)**, followed by the camera's sensor cover glass stack and image sensor. Example 2 is the second numerical prescription (第2実施例) in the patent; the patent separately defines three claim-level "embodiments" (実施形態), and Example 2's design satisfies the conditions of all three.

The design is notable for placing the aperture stop between G1 and G2 rather than at the front, with the weakly-positive front group (G1) handling a small fraction of the total refractive power while the bulk resides in G2 and G3 behind the stop. This rear-heavy power distribution keeps the front element small while producing a sufficient back focal distance (Bfa = 13.138 mm air-equivalent) for the Nikon Z-mount. The total track is 54.610 mm — a TL/f ratio of 1.89. Note that this is *not* a retrofocus design (which would require Bfa > f); the back focus of 13.1 mm is well under the 28.8 mm EFL. The Z-mount's relatively short 16 mm flange distance is what makes this standard-proportion design viable for a mirrorless wide-angle lens.

The rear-heavy power distribution explains the physically unusual feature noted in reviews: the front element is very small (the lens tapers toward the object), unlike typical wide-angle designs where the front element is the largest.

### System Parameters (Infinity Focus)

| Parameter | Value |
|---|---|
| f (EFL) | 28.824 mm |
| FNO | 2.909 |
| ω (half-field) | 38.029° |
| Y (image height) | 21.700 mm |
| TL (total track) | 54.610 mm |
| Bf (back focus) | 0.860 mm |
| Bfa (back focus, air-equivalent) | 13.138 mm |

### Group Powers

| Group | Starts at Surface | Focal Length | Power |
|---|---|---|---|
| G1 (+) | 1 | +187.243 mm | Weakly positive |
| G2 (+, GF1) | 6 | +34.689 mm | Strongly positive |
| G3 (+, GF2) | 14 | +46.577 mm | Moderately positive |
| G4 (−) | 18 | −44.279 mm | Moderately negative |

G1 contributes only f/f1 = 0.154 of the system power — it functions primarily as a field-flattening and aberration-correcting element rather than a major refractive contributor. The main positive power resides in G2 (f2 = 34.7 mm), with G3 providing supplementary positive power. G4 acts as a negative field flattener to correct Petzval curvature and control the exit pupil position relative to the sensor.

---

## 3. Element-by-Element Analysis

### 3.1 Group 1 — Front Group (Positive, f = +187.2 mm)

G1 is an air-spaced doublet composed of a negative element followed by a positive element. Despite the group having overall positive power, the leading negative element is the defining structural choice: the patent text explicitly states that placing a negative lens at the object-most position of G1 aids in correcting astigmatism ([0085]).

#### L11 — Negative Biconcave (Element 1)

| Parameter | Value |
|---|---|
| Surfaces | 1–2 |
| R₁ | −67.653 mm |
| R₂ | +18.072 mm (exit to air) |
| Center thickness | 0.800 mm |
| nd / νd | 1.53172 / 48.78 |
| Glass | **OHARA S-TIL 2** (nd = 1.53172, νd = 48.84) |
| Focal length | −26.7 mm |

L11 is a biconcave negative element with modest refractive index. Its strongly curved rear surface (R₂ = +18.07 mm) provides most of its negative power. Being placed at the front of the system where beam diameters are small, it introduces strong negative power without requiring a large aperture. The low index and moderate dispersion (νd ≈ 48.8) are consistent with a titanium-containing crown glass — economical and well-suited to the entry-level positioning of this lens.

**Optical role:** Introduces negative power ahead of the stop to control astigmatism and contribute to Petzval sum correction. The negative-first configuration within G1 shifts the group's rear principal plane toward the object, reducing the physical distance from G1 to the stop and enabling the compact overall length.

#### L12 — Positive Plano-Convex (Element 2)

| Parameter | Value |
|---|---|
| Surfaces | 3–4 |
| R₁ | +19.612 mm |
| R₂ | ∞ (flat exit) |
| Center thickness | 2.300 mm |
| nd / νd | 1.80400 / 46.60 |
| Glass | **OHARA S-LAH55V** (nd = 1.80400, νd = 46.58) |
| Focal length | +24.4 mm |

L12 is a plano-convex positive element (convex toward the object, flat rear) using a high-index lanthanum-based glass. S-LAH55V is one of Nikon's workhouse glasses — it appears three times in this design (L12, L24 glass body, L32), a clear cost-optimization strategy that reduces the number of distinct glass types requiring procurement and quality control.

**Optical role:** Provides the dominant positive power within G1. The flat rear surface simplifies manufacturing and creates a clean air gap before the aperture stop. The high refractive index (1.804) allows strong positive power from a single convex surface while keeping the element physically compact.

### 3.2 Aperture Stop

The aperture stop is located at surface 5, between G1 and G2 — in the air gap between L12's flat rear surface and L21's front surface. The stop position is explicitly specified in the patent (surface 5 marked as 絞りS). At infinity focus, the G1-to-stop distance is 1.000 mm (L12 rear air gap), and the stop-to-G2 distance is D5 = 4.850 mm.

The stop-to-G2 spacing (D5) is one of the three variable gaps, decreasing to 3.169 mm at close focus as G2 moves forward. The stop itself is fixed relative to G1 and the image plane.

### 3.3 Group 2 — First Focusing Group / GF1 (Positive, f = +34.7 mm)

G2 is the most complex group in the design, comprising four elements in three sub-groups: a cemented positive doublet (L21+L22), a negative meniscus (L23), and a positive composite aspherical element (L24). It is designated GF1 — the first focusing lens group — and moves 1.681 mm toward the object when focusing from infinity to the closest distance (0.19 m).

G2 carries the largest share of the system's refractive power. The patent describes its internal structure ([0063]) as: first positive lens + first negative lens (cemented into a positive component), second negative lens, second positive lens. The patent explicitly states that this **positive–negative–negative–positive** power sequence within G2 is the primary mechanism for simultaneously correcting axial chromatic aberration, spherical aberration, coma, and astigmatism while reducing the Petzval sum to control field curvature. This is a tightly integrated correction scheme where each sub-element's contribution is inseparable from the others.

#### L21 — Positive Biconvex, Ultra-High Index (Element 3)

| Parameter | Value |
|---|---|
| Surfaces | 6 (front), 7 (junction with L22) |
| R₁ | +39.039 mm |
| R₂ | −14.018 mm (cemented to L22) |
| Center thickness | 3.000 mm |
| nd / νd | 2.00100 / 29.12 |
| Glass | **OHARA S-NPH 1** (nd = 2.00100, νd = 29.13) |
| Focal length | +10.6 mm |

L21 is the powerhouse of the entire optical system — a biconvex element with an extraordinarily high refractive index of 2.001. OHARA S-NPH 1 is a dense flint glass in the highest-index tier of production optical glasses. Its nd of 2.001 allows very strong positive curvature (f = +10.6 mm) from relatively modest surface radii, keeping the element diameter small.

The low Abbe number (νd = 29.1) means high chromatic dispersion, but this is deliberately paired with L22 in a cemented doublet to create a partially achromatized positive component. The conditional expression N21 > 1.90 (condition 12) explicitly requires this ultra-high index to reduce the Petzval sum without degrading spherical aberration and coma ([0069]).

**Optical role:** Primary positive power element. The high index simultaneously provides strong convergence and flattens the Petzval field curvature (Petzval contribution ∝ φ/n, so high n reduces field curvature per unit of power). This is the design's key enabling element for achieving compact size with acceptable field flatness.

#### L22 — Negative Biconcave, High-Dispersion Flint (Element 4)

| Parameter | Value |
|---|---|
| Surfaces | 7 (junction with L21), 8 (exit to air) |
| R₁ | −14.018 mm (cemented from L21) |
| R₂ | +44.521 mm |
| Center thickness | 0.700 mm |
| nd / νd | 1.80518 / 25.45 |
| Glass | **OHARA S-TIH 14** (nd = 1.80518, νd = 25.46) |
| Focal length | −13.2 mm |
| Cemented with | L21 (positive cemented doublet) |

L22 is a thin biconcave negative element cemented directly to L21. The cemented doublet L21+L22 has net positive power. The index difference N21 − N22 = 2.00100 − 1.80518 = 0.196, satisfying condition 11 (0.00 < N21 − N22 < 0.40) and condition 12 (N21 > 1.90). Both elements are high-dispersion types (νd of 29.1 and 25.5), so the doublet is not a classical achromatic pair — rather, it is optimized for aberration balance at the expense of some residual chromatic aberration, which is corrected elsewhere in the system.

**Optical role:** Partially compensates L21's spherical aberration and coma. The cemented interface (R = −14.018 mm) is strongly curved, providing significant aberration correction at the junction without introducing the centering errors that an air-spaced interface would. The high dispersion of both elements means this doublet is *not* an achromatic corrector — its role is monochromatic aberration correction, with chromatic correction distributed across the full system.

#### L23 — Negative Meniscus, Very High Dispersion (Element 5)

| Parameter | Value |
|---|---|
| Surfaces | 9–10 |
| R₁ | −11.081 mm |
| R₂ | −29.933 mm (exit to air) |
| Center thickness | 0.900 mm |
| nd / νd | 1.80809 / 22.74 |
| Glass | **OHARA S-TIH 18** (nd = 1.80809, νd = 22.76) |
| Focal length | −22.3 mm |

L23 is a negative meniscus (concave toward the object) using OHARA S-TIH 18 — one of the highest-dispersion glasses in the catalog at νd = 22.7. Both centers of curvature lie on the object side (R₁ = −11.08, R₂ = −29.93), forming a meniscus that bows toward the image. The more strongly curved front surface (|R₁| < |R₂|) faces the cemented doublet, concentrating its corrective effect where the ray bundle is most converged.

**Optical role:** Provides additional negative power for spherical aberration correction within G2, and its very high dispersion contributes to lateral color correction in the off-axis field. The air gap of only 0.150 mm between L23 and L24 keeps the sub-group tightly packed.

#### L24 — Positive Composite Aspherical (Element 6 — Hybrid Type)

| Parameter | Value |
|---|---|
| Surfaces | 11 (glass front), 12 (glass/resin junction), 13\* (resin rear, **aspherical**) |
| Glass body R₁ | ∞ (flat front) |
| Glass body R₂ | −17.503 mm (rear, bonded to resin) |
| Resin layer R₂ | −16.276 mm (image-side, aspherical) |
| Glass body nd / νd | 1.80400 / 46.60 — **OHARA S-LAH55V** |
| Resin layer nd / νd | 1.56093 / 36.64 — UV-curing optical resin |
| Glass body thickness | 6.550 mm |
| Resin layer thickness | 0.140 mm |
| Combined focal length | ≈ +20.7 mm (positive) |

L24 is the first of the two aspherical elements in the design and the most structurally complex element in the lens. It is a **composite (hybrid) aspherical element**: a conventional glass lens body with a thin UV-cured resin layer bonded to its image-side surface. The resin layer's outer surface (surface 13) is aspherical.

The patent describes this construction explicitly ([0113]): the glass body is S-LAH55V (the same glass as L12 and L32), and the resin layer's outer surface is aspherical. The glass body is a plano-convex positive element (flat front, curved rear), and the resin layer adds a thin aspherical corrector on top.

This hybrid approach is a cost-effective alternative to ground-and-polished or glass-molded aspheres. The glass body can be manufactured using conventional spherical techniques, while the aspherical correction is applied through precision molding of the resin layer. This is a common technique in Nikon's consumer-grade lenses.

The resin layer (nd = 1.56093, νd = 36.64) is not a cataloged optical glass — it is a UV-curing adhesive/resin formulation. Its nd and νd cannot be found in standard glass catalogs, which is the hallmark of a proprietary resin composition.

**Aspherical surface 13 coefficients:**

| Coefficient | Value |
|---|---|
| κ | 1.00000 |
| A4 | 2.85655 × 10⁻⁵ |
| A6 | −1.38279 × 10⁻⁸ |
| A8 | 5.79289 × 10⁻¹⁰ |
| A10 | 9.06875 × 10⁻¹³ |
| A12 | −2.25760 × 10⁻¹⁵ |
| A14 | 1.33070 × 10⁻¹⁷ |

The conic constant κ = 1.0 in the patent's convention corresponds to K = 0 in the standard Seidel convention (the patent defines the sag denominator as √(1 − κ·y²/R²), where κ = 1+K). All three aspherical surfaces in this design have κ = 1.0, meaning the base curve is spherical with the aspherical departure carried entirely by the polynomial terms A4 through A14. The dominant A4 term provides the primary spherical aberration correction, while the higher-order terms fine-tune the correction across the field.

**Optical role:** Provides the second major positive power contribution in G2 while simultaneously correcting spherical aberration and coma through its aspherical surface. The flat front surface simplifies alignment within the barrel. As part of the GF1 focusing group, this element moves during focus — the aspherical correction is thus optimized for the infinity position but must maintain adequate performance across the entire focus range.

### 3.4 Group 3 — Second Focusing Group / GF2 (Positive, f = +46.6 mm)

G3 is the second focusing group (GF2), composed of two **air-spaced** elements: a very weakly negative aspherical meniscus (L31) and a plano-convex positive element (L32), separated by a fixed 0.200 mm air gap. Despite being air-spaced rather than cemented, L31 and L32 move together as a single mechanical unit during focusing — the 0.200 mm gap (surface 15) is not listed among the variable spacings. G3 moves 4.792 mm toward the object at close focus — nearly 2.85× the travel of G2. This differential motion between GF1 and GF2 is the hallmark of a **floating focus** system, which maintains aberration correction across the focus range by independently adjusting the spacing between the two focusing groups.

#### L31 — Negative Meniscus, Both Surfaces Aspherical (Element 7)

| Parameter | Value |
|---|---|
| Surfaces | 14\* (front, asph), 15\* (rear, asph) |
| R₁ | −26.852 mm |
| R₂ | −28.963 mm (exit to air) |
| Center thickness | 2.000 mm |
| nd / νd | 1.53113 / 55.73 |
| Glass | **OHARA S-BAL 41** (nd = 1.53113, νd = 55.82) |
| Focal length | ≈ −1033 mm (extremely weak negative) |

L31 is the second aspherical element and the most optically subtle element in the design. Both surfaces are aspherical, yet the element's paraxial focal length is approximately −1033 mm — essentially a near-zero-power corrector plate. Its optical function comes almost entirely from its aspherical departures rather than its base curvature.

S-BAL 41 is a barium-aluminum crown glass with a low refractive index (nd = 1.53) and relatively low glass transition temperature. While it is not in OHARA's explicitly PGM-designated "L-" series (such as L-BAL42 or L-BAL43), the combination of low index, both-surface aspherical geometry, and the cost-sensitive nature of this lens makes **precision glass molding the most probable manufacturing method** for L31. The patent [0145] confirms that aspherical surfaces in this design family may be formed by grinding, glass molding, or composite methods; for a dual-aspherical element in a budget lens, PGM is the economically rational choice. (This is an inference from the glass properties and design context, not an explicit patent statement.)

**Aspherical surface 14 coefficients:**

| Coefficient | Value |
|---|---|
| κ | 1.00000 |
| A4 | 2.41081 × 10⁻⁵ |
| A6 | 9.24872 × 10⁻⁸ |
| A8 | −6.64821 × 10⁻¹⁰ |
| A10 | 1.30136 × 10⁻¹² |
| A12 | 8.89760 × 10⁻¹⁶ |
| A14 | 0 |

**Aspherical surface 15 coefficients:**

| Coefficient | Value |
|---|---|
| κ | 1.00000 |
| A4 | 3.97489 × 10⁻⁵ |
| A6 | 2.41498 × 10⁻⁷ |
| A8 | −1.14609 × 10⁻⁹ |
| A10 | 2.49848 × 10⁻¹² |
| A12 | −2.38640 × 10⁻¹⁵ |
| A14 | 0 |

Both surfaces have relatively large A4 coefficients, confirming that this element serves primarily as a wavefront corrector. The rear surface (15) has the larger A4 and A6 terms, suggesting it carries the heavier corrective load.

**Optical role:** A near-zero-power aspherical corrector plate that provides field-dependent aberration correction — principally astigmatism and field curvature at intermediate and marginal field angles. As part of GF2 (the faster-moving focusing group), it shifts its corrective influence across the field as focus distance changes. This is the primary mechanism by which the floating focus system maintains image quality at close distances.

#### L32 — Positive Plano-Convex (Element 8)

| Parameter | Value |
|---|---|
| Surfaces | 16–17 |
| R₁ | ∞ (flat front) |
| R₂ | −36.851 mm |
| Center thickness | 4.500 mm |
| nd / νd | 1.80400 / 46.60 |
| Glass | **OHARA S-LAH55V** (nd = 1.80400, νd = 46.58) |
| Focal length | +45.8 mm |

L32 is a plano-convex positive element (flat front, powered rear surface) using S-LAH55V — the same glass as L12 and L24's glass body. It provides nearly all of G3's positive refractive power (G3 total = +46.6 mm; L32 alone = +45.8 mm; L31 contributes only −1033 mm).

The flat front surface and single powered rear is a cost-effective design that reduces manufacturing complexity. The high index (1.804) allows moderate power from a single surface while keeping Petzval contributions manageable.

**Optical role:** Provides G3's convergent power. As the last positive element before the negative G4, it establishes the converging cone that G4 then diverges to form the final image. Its travel during focusing (as part of GF2) directly adjusts the image position and magnification.

### 3.5 Group 4 — Rear Negative Group (Fixed, f = −44.3 mm)

#### L41 — Negative Biconcave, Field Flattener (Element 9)

| Parameter | Value |
|---|---|
| Surfaces | 18–19 |
| R₁ | −34.466 mm |
| R₂ | +173.144 mm |
| Center thickness | 1.200 mm |
| nd / νd | 1.64769 / 33.73 |
| Glass | **OHARA S-TIM 22** (nd = 1.64769, νd = 33.79) |
| Focal length | −44.3 mm |

L41 is a single biconcave negative element that forms the entire G4 group. It is fixed relative to the image plane and acts as a negative field flattener — a standard role for the rear negative group in compact wide-angle designs. The conditional expression (−f4)/f = 1.536 (condition 2: 1.20 < (−f4)/f < 2.00) constrains the balance between G4's negative power and the system focal length, ensuring adequate field curvature correction without excessive lateral color or distortion ([0028]).

The Abbe number of 33.73 (condition 4: 28.0 < νd41 < 45.0) places L41 in the moderate-to-high dispersion range. The patent states that this range is necessary for good lateral chromatic aberration correction ([0036]).

The physical distance from L41's rear surface to the image plane is 13.683 mm (11.223 mm air + 1.600 mm sensor cover glass + 0.860 mm air), with an air-equivalent back focus of 13.138 mm (verified: 11.223 + 1.600/1.51680 + 0.860 = 13.138 mm). The Nikon Z-mount has a 16 mm flange-to-sensor distance, so L41's rear surface sits approximately 2.3 mm in front of the mount flange — well within the mount throat, which is a normal arrangement for compact Z-mount lenses.

**Optical role:** Petzval field flattener, lateral chromatic aberration corrector, and exit pupil position controller. The magnification β4 = 1.310 (condition 3: 1.10 < β4 < 1.40) indicates that G4 operates as a slight magnifier of the intermediate image formed by G1+G2+G3, which is characteristic of a negative rear group that shifts the exit pupil away from the sensor for more telecentric illumination.

### 3.6 Sensor Cover Glass (Patent Model)

| Parameter | Value |
|---|---|
| Surfaces | 20–21 |
| R₁, R₂ | ∞ / ∞ (both flat) |
| Thickness | 1.600 mm |
| nd / νd | 1.51680 / 63.88 |
| Glass | **OHARA S-BSL 7** (N-BK7 equivalent) |

Surfaces 20–21 represent the camera body's internal sensor cover glass and infrared-cut filter stack — they are *not* an element within the lens barrel. The patent includes them in the prescription because the optical design is optimized for the total optical path including the sensor stack. The cover glass is optically neutral (parallel flat surfaces) and introduces no refractive power, but it shifts the image plane by approximately 0.545 mm (= d × (1 − 1/n) = 1.600 × (1 − 1/1.5168)) relative to an air-only path. The Bf = 0.860 mm listed in the patent is the residual air gap from the rear of the cover glass to the sensor plane.

---

## 4. Aspherical Surfaces Summary

The design employs **3 aspherical surfaces distributed across 2 aspherical elements**:

| Surface | Element | Type | Location in System | Role |
|---|---|---|---|---|
| 13\* | L24 (resin layer) | Composite (hybrid) — UV-cured resin on glass | G2 rear (GF1) | SA correction, coma |
| 14\* | L31 (front) | Glass-molded aspherical (inferred) | G3 front (GF2) | Field-dependent correction |
| 15\* | L31 (rear) | Glass-molded aspherical (inferred) | G3 rear (GF2) | Field-dependent correction |

The two distinct manufacturing technologies reflect the cost-sensitive nature of this budget lens:

1. **Composite aspherical (L24):** A conventional spherical glass element with a thin aspherical resin layer. This is the least expensive aspherical manufacturing method and is adequate when the aspherical departure is modest and the element is not exposed to extreme environmental conditions (it sits deep within the lens barrel).

2. **Glass-molded aspherical (L31, inferred):** Both surfaces are aspherical on a monolithic glass element. Given the low-index glass (S-BAL 41, nd = 1.53) and the cost-sensitive nature of this lens, precision glass molding is the most probable manufacturing method — though the patent does not specify the technique. This produces a thermally and mechanically stable element without the layered interface of a composite asphere.

The placement of all aspherical surfaces behind the stop (in G2 and G3) means they operate on converging beams with significant off-axis ray heights. This positioning maximizes their corrective leverage on field-dependent aberrations — particularly astigmatism and field curvature — which are the dominant residual aberrations in a compact wide-angle design.

---

## 5. Focusing Mechanism — Floating Focus

The NIKKOR Z 28mm f/2.8 employs a **floating inner-focus** system with two independently moving groups (GF1 = G2, GF2 = G3). G1, the aperture stop, and G4 remain fixed relative to the image plane during focusing.

### Variable Air Gaps

| Gap | Surface | Infinity | Close Focus (β = −0.203) | Change |
|---|---|---|---|---|
| D5 (Stop → G2) | 5 | 4.850 mm | 3.169 mm | −1.681 mm |
| D13 (G2 → G3) | 13 | 4.450 mm | 1.339 mm | −3.111 mm |
| D17 (G3 → G4) | 17 | 3.700 mm | 8.492 mm | +4.792 mm |
| **Sum** | | **13.000 mm** | **13.000 mm** | **0.000 mm** |

The conservation of the total variable gap sum (13.000 mm at both focus positions) confirms that the fixed groups maintain constant positions. The lens barrel length does not change during focusing — hence the "IF" (internal focus) designation.

### Group Travel

| Group | Travel (∞ → close) | Direction |
|---|---|---|
| G2 (GF1) | 1.681 mm | Toward object |
| G3 (GF2) | 4.792 mm | Toward object |

G3 moves 2.85× farther than G2. This differential motion is the defining characteristic of a floating focus system: by varying the spacing between the two focusing groups as a function of object distance, the designer can independently control focus position and aberration balance. Specifically:

- **G2's motion** primarily adjusts the overall focus (bringing the image plane back to the sensor as the object distance decreases).
- **G3's additional motion** compensates for the aberration changes that would otherwise degrade close-focus performance — particularly astigmatism and field curvature, which worsen rapidly at close distances in a fixed-group design.

The patent text ([0014]) states that it is desirable for GF1 and GF2 to move by different amounts during focusing, and the floating focus is what enables the lens to maintain well-corrected performance from infinity down to the remarkably close MFD of 0.19 m (approximately 6.6× the focal length).

---

## 6. Glass Usage and Cost Optimization

The design uses only **6 distinct glass types** (plus one resin) across 9 elements — a deliberately economical glass palette:

| Glass | nd | νd | Elements Using It | Count |
|---|---|---|---|---|
| OHARA S-LAH55V | 1.80400 | 46.58 | L12, L24 body, L32 | 3 |
| OHARA S-NPH 1 | 2.00100 | 29.13 | L21 | 1 |
| OHARA S-TIH 14 | 1.80518 | 25.46 | L22 | 1 |
| OHARA S-TIH 18 | 1.80809 | 22.76 | L23 | 1 |
| OHARA S-TIL 2 | 1.53172 | 48.84 | L11 | 1 |
| OHARA S-BAL 41 | 1.53113 | 55.82 | L31 | 1 |
| OHARA S-TIM 22 | 1.64769 | 33.79 | L41 | 1 |
| UV-curing resin | 1.56093 | 36.64 | L24 resin layer | 1 |

The triple use of S-LAH55V is the most significant cost optimization. Procuring a single glass type in larger volume reduces per-element cost and simplifies quality control. The three elements using it (L12, L24 body, L32) are all plano-convex or plano-concave positive elements — the flat surface on each further reduces manufacturing cost.

None of the glasses in this design are ED (extra-low dispersion) or anomalous partial dispersion types. The lowest Abbe number is 22.74 (S-TIH 18 in L23) and the highest is 55.73 (S-BAL 41 in L31). This is consistent with the lens's non-S-Line positioning: it relies on aspherical correction and floating focus rather than exotic glass types to achieve acceptable aberration control.

---

## 7. Conditional Expression Summary

All 15 conditional expressions are satisfied by Example 2. These were verified independently by computation from the prescription data; all computed values match the patent's tabulated values to within rounding tolerance.

| Condition | Expression | Computed Value | Range |
|---|---|---|---|
| (1) | D1/TL | 0.076 | 0.03 – 0.25 |
| (2) | (−f4)/f | 1.536 | 1.20 – 2.00 |
| (3) | β4 | 1.310 | 1.10 – 1.40 |
| (4) | νd41 | 33.730 | 28.0 – 45.0 |
| (5) | f2/f3 | 0.745 | 0.50 – 2.00 |
| (6) | d23/TL | 0.081 | 0.04 – 0.11 |
| (7) | d23/d12 | 0.761 | 0.60 – 1.00 |
| (8) | β2/β3 | 0.226 | 0.10 – 0.90 |
| (9) | {β2 + (1/β2)}⁻² | 0.025 | 0.015 – 0.170 |
| (10) | {β3 + (1/β3)}⁻² | 0.225 | 0.100 – 0.250 |
| (11) | N21 − N22 | 0.196 | 0.00 – 0.40 |
| (12) | N21 | 2.001 | > 1.90 |
| (13) | νd21 | 29.120 | 25.0 – 35.0 |
| (14) | (R31 + R32)/(R32 − R31) | −1.000 | −1.20 – 0.00 |
| (15) | f/f1 | 0.154 | 0.00 – 0.70 |

**Note on condition (14):** The patent defines R31 and R32 as the paraxial radii of curvature of the *positive lens* in G3 — which in Example 2 is L32 (not L31). L32 has R₁ = ∞ (flat front) and R₂ = −36.851 mm. In the limit R₁ → ∞, the shape factor (R31 + R32)/(R32 − R31) evaluates to −1.000, indicating an equi-convex-equivalent plano-convex form. In Example 3 (where G3 is a single positive element), R31/R32 refer to that element's surfaces instead. The patent's general conditions apply across embodiments with different G3 constructions.

---

## 8. Design Philosophy and Observations

The NIKKOR Z 28mm f/2.8 represents a deliberate exercise in compact, cost-effective wide-angle design for the Z-mount system. Several design decisions reveal Shimada's priorities:

**Compactness over speed.** At f/2.8, the lens is 1.3 stops slower than Nikon's adjacent S-Line wide primes — the NIKKOR Z 24mm f/1.8 S and Z 35mm f/1.8 S — both of which are substantially larger (447 g and 364 g respectively, versus 155 g). The slower aperture permits a dramatically smaller front element — the entrance pupil diameter is only ≈9.9 mm — and the entire optical track fits in 54.6 mm.

**Rear-heavy power distribution.** Unlike conventional wide-angle designs where the front group is the largest, this design places most of its refractive power behind the stop in G2. This inverts the typical element size progression (front-to-rear decreasing) into an unusual increasing progression, which is why the front element is notably small. The trade-off is that the rear elements must handle larger beam diameters at steeper angles, requiring higher-index glasses (hence S-NPH 1 and S-LAH55V in G2).

**Floating focus for close-focus quality.** The floating focus system with 2.85:1 differential travel ensures that the aspherical correctors in G3 maintain their effectiveness at close distances. Without the floating mechanism, the 0.19 m MFD (≈ 0.2× magnification) would show significantly worse field performance.

**Software-corrected distortion.** The patent's aberration diagrams (Fig. 4) show that the lens has appreciable distortion at full field, consistent with the barrel distortion that Nikon corrects digitally in-camera and through embedded lens profiles. This is a common modern design trade-off: accepting larger optical distortion enables simpler, more compact optical designs, with the residual corrected computationally. This approach is standard across Nikon's non-S-Line Z-mount lenses.

---

## 9. Semi-Diameter Estimation

The patent does not list semi-diameters (clear aperture half-widths) for any surface. Semi-diameters were initially estimated via paraxial marginal ray trace (y₀ = EP semi-diameter = 4.95 mm, u₀ = 0) and paraxial chief ray trace (full-field, ω = 38.029°) through the complete prescription. The chief ray heights were corrected by a distortion factor of Y_patent / Y_paraxial = 21.700 / 22.543 = 0.963 to account for the paraxial approximation overestimating ray heights at large field angles.

The initial combined semi-diameter at each surface was SD = (|y_marginal| + |y_chief_corrected|) × 1.10, where the 1.10 factor provides 10% mechanical clearance. The stop SD = |y_marginal| directly (no chief ray contribution, no clearance factor). However, several initial estimates exceeded the renderer's geometric constraints and were reduced:

- **Cemented doublet L21+L22** (surfaces 6–8): SDs reduced from 9.5–10.5 to 7.0–9.0 mm to maintain positive edge thickness on L21 (the strongly curved R₂ = −14.018 mm junction surface causes the front/rear surfaces to cross at the rim for sd > ~7.5 mm given the 3.0 mm center thickness).
- **L23** (surfaces 9–10): Front SD reduced from 12.5 to 9.5 mm to satisfy the sd/|R| ≤ 0.9 constraint (|R₁| = 11.08 mm → max sd = 9.97 mm). Rear SD reduced from 13.0 to 11.5 mm for front/rear ratio consistency.
- **Hybrid composite L24** (surfaces 11–13A): Glass body front SD reduced from 14.5 to 13.0 mm to maintain positive edge thickness (the concave R = −17.50 mm rear surface crosses the flat front at sd ≈ 13.8 mm given the 6.55 mm center thickness). Junction and resin-layer SDs reduced from 17.0 to 15.5 and 14.5 mm respectively for sd/|R| compliance (|R| = 17.50 and 16.28 mm). The aspherical departure on surface 13A (+1.2 mm at the rim) keeps the resin layer's edge thickness positive.
- **L32** (surfaces 16–17): SDs reduced from 19.5–20.5 to 17.0–17.5 mm to maintain positive edge thickness (the concave R = −36.85 mm rear surface crosses the flat front at sd ≈ 18.2 mm given the 4.5 mm center thickness).
- **Sensor cover glass** (surfaces 20–21): SD set to 21.7 mm (the patent image height Y).

The rear-heavy power distribution produces an unusual SD progression: front elements have small SDs (≈7–9 mm in G2) while the rear elements are larger (≈17–20 mm in G3/G4), reflecting the inverted beam diameter profile characteristic of this design. The SD reductions relative to the initial ray-trace estimates are most significant in G2, where the ultra-high-index cemented doublet (L21+L22) and the thick hybrid composite (L24) have strongly curved surfaces that impose tight geometric constraints.

---

*Analysis prepared from WO 2022/071249 A1, Example 2 (Table 2). All numerical values verified by independent paraxial ray trace and conditional expression computation. Semi-diameters estimated via combined marginal + chief ray trace with 10% mechanical clearance (see §9). Glass identifications are inferred from nd/νd matching against the OHARA optical glass catalog and should be treated as high-confidence matches (exact nd agreement, νd within melt variation) rather than manufacturer-confirmed designations.*
