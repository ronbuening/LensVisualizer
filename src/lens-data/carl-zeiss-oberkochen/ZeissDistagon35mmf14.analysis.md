# Carl Zeiss Distagon T* 35mm f/1.4

## Patent & Design Analysis — US 3,915,558, Example 8

**Patent:** US 3,915,558 — *High Power Wide-Angle Lens*
**Inventor:** Erhard Glatzel (Carl Zeiss Stiftung, Oberkochen, Germany)
**Filed:** February 1, 1974 | **Granted:** October 28, 1975
**Priority:** DE 2306346, February 9, 1973
**Production lens:** Carl Zeiss Distagon T\* 1.4/35 (Contax/Yashica mount)

---

## 1. Overview

Example 8 of US 3,915,558 is the most refined of eight embodiments presented in Glatzel's patent for a family of fast wide-angle lenses. The patent describes it as "a further refinement of a lens intended for picture performance," featuring an achromatized design corrected over the full visible spectrum for color photography. Of the eight examples, Example 8 is the only one that combines the split positive component (3a/3b air-spaced), full achromatization with Abbe numbers specified, and compliance with all seven design rules (A through G) stated in the patent. The Zeiss production datasheet for the Contax C/Y-mount Distagon T\* 1.4/35 confirms the optical formula as 9 elements in 8 groups with 1 aspherical surface, matching Example 8 exactly.

### Key Production Specifications (from Zeiss Datasheet)

| Parameter | Value |
|---|---|
| Focal length | 36.5 mm (marketed as 35 mm) |
| Maximum aperture | f/1.4 |
| Elements / Groups | 9 / 8 |
| Aspherical surfaces | 1 |
| Focusing | Floating element, ∞ to 0.3 m |
| Field of view (diagonal) | ~62° |
| Filter thread | 67 mm |
| Weight | 600 g |
| Mount | Contax/Yashica (45.5 mm flange) |

### Paraxial Verification Summary

All patent data verified via independent paraxial (y-nu) ray trace:

| Parameter | Patent | Computed | Agreement |
|---|---|---|---|
| EFL (normalized) | 1.0000 | 1.000000 | Exact |
| Back focal distance | 0.98567 F | 0.98567 F | Exact |
| s'/F ratio | 0.98567 | 0.98567 | > 0.85 ✓ |

Scaled to the production focal length of 36.5 mm, the total track (first vertex to image plane) is 116.4 mm and the back focal distance is 36.0 mm. Since the C/Y-mount flange-to-film distance is 45.5 mm, the rear lens vertex sits approximately 9.5 mm behind the flange plane, protruding into the mirror box — a normal arrangement for fast wide-angle SLR lenses, where mirror clearance rather than flange distance is the binding mechanical constraint.

---

## 2. Optical Architecture

The Distagon 35/1.4 follows Glatzel's eight-component, two-member retrofocus architecture. The front member (V), consisting of components I through IV, contains both the strong negative front elements (I and II) and the strong positive elements (III and IV). As a whole, the front member has net positive power — the retrofocus (inverted telephoto) geometry arises not from net negative member power, but from the spatial arrangement of negative elements at the front separated by large air spaces from the positive elements closer to the stop. This separation shifts the system's rear principal plane forward, producing a back focal distance that approaches the full focal length (s'/F = 0.986) — far longer than a symmetric wide-angle design would achieve, and essential for clearing the SLR mirror mechanism. The rear member (H), consisting of components V through VIII, carries net positive power to form the image. The aperture stop (diaphragm) sits in the central vertex space (CS) between the two members.

### Component Layout

| Component | Patent Label | Elements | Power | Role |
|---|---|---|---|---|
| I (1) | Lens 1 | 1 (L1) | Strong negative | Front diverger |
| II (2) | Lens 2 | 1 (L2) | Weak negative | Secondary diverger |
| III (3) | Lenses 3a + 3b | 2 (air-spaced) | Strong positive | Main converger |
| IV (4 / M) | Lens 4 | 1 | Weak positive | von Hoegh meniscus |
| — | *Stop (CS)* | — | — | Aperture diaphragm |
| V (5) | Lens 5 | 1 | Negative | Rear diverger (aspherical) |
| VI (6) | Lens 6 | 1 | Negative | Rear strong diverger |
| VII (7) | Lens 7 | 1 | Positive | Rear converger |
| VIII (8) | Lens 8 | 1 | Positive | Final converger |

Components VI and VII (lenses 6 and 7) are cemented together, forming a classic doublet. This yields 9 individual glass elements in 8 air-separated groups.

### Component Surface Power Summary

Surface powers (φ = Σ(n'−n)/R for each component's surfaces), verified computationally. For the cemented doublet (components 6 and 7), the design-rule ratios use standalone-in-air surface powers — the interpretation confirmed by matching the patent's Table II values to full precision.

| Component | φ (normalized) | Sign | Patent ratio check |
|---|---|---|---|
| 1 | −0.5579 | Negative | — |
| 2 | −0.1785 | Negative | φ₂/φ₁ = 0.320 (< ⅔) ✓ Rule A |
| 3 (total) | +0.9367 | Positive | — |
| 3a | +0.6110 | Positive | — |
| 3b | +0.3257 | Positive | φ₃ᵦ/φ₃ₐ = 0.533 (< ¾) ✓ Rule F |
| 4 (M) | +0.0573 | Weak positive | φ₄/Φ = 0.057 (< 0.185) ✓ Rule D |
| 5 | −0.5656 | Negative | |φ₅|/φ₃ = 0.604 (< 0.85) ✓ Rule C |
| 6 (standalone) | −1.3196 | Strong negative | — |
| 7 (standalone) | +1.4008 | Strong positive | — |
| 6+7 doublet | weak positive | — | Rule E: |φ₅_standalone|/|φ₆_standalone| = 0.429 (< 0.90) ✓ |
| 8 | +0.6138 | Positive | — |

The air lens α between components 2 and 3 has a weak negative surface power sum of −0.0428Φ, satisfying Rule B (|φα| < 0.185Φ). The inner air lens between elements 3a and 3b has a computed φᵢ = +0.048Φ, satisfying Rule G (|φᵢ| < 0.20Φ). (Note: the patent's Table II states φᵢ/Φ = +0.070 for Example 8; the source of this discrepancy is unclear, as all other design-rule ratios match the patent to 5 significant figures. The condition φᵢ < 0.20Φ is satisfied under both values.)

### Petzval Sum

The computed Petzval sum is +0.159 (normalized to F = 1), using the correct surface-by-surface formula φ/(n_before × n_after). This corresponds to a Petzval radius of 6.28F ≈ 229 mm at the production focal length. The positive sign indicates inward field curvature (toward the lens), which is the expected behavior for a net-positive optical system.

This sum represents the balance of large competing contributions: the negative elements L1 and L2 produce the strongest field-flattening contributions (cumulative Petzval = −0.468 after S4), while the positive elements L3a, L3b, and L4 swing the cumulative Petzval back to +0.112 by the end of the front member. In the rear member, L5 provides a large negative contribution, the cemented doublet L6+L7 adds a modest swing, and element L8 provides the largest single positive contribution (+0.293). The final sum of +0.159 represents modest net inward curvature — a reasonable balance for a wide-angle lens of this speed, where residual field curvature is partially compensated by astigmatism in the final optimization.

---

## 3. Element-by-Element Analysis

### Element L1 — Front Negative Element

| Property | Value |
|---|---|
| Glass | 583/46.5 — Barium flint (BaF family) |
| nd / νd | 1.5827 / 46.5 |
| Shape | Negative meniscus, concave toward front |
| Radii | R₁ = +8.3325, R'₁ = +0.9281 |
| Focal length (in air) | −1.80 F (−65.6 mm) |

L1 is a deeply curved negative meniscus with its concave surface facing the object. Both radii are positive (centers of curvature to the right), but because the rear surface (R'₁ = +0.928) curves far more strongly than the front (R₁ = +8.333), the element is thicker at the edges than at the center — the defining geometry of a negative meniscus. Its primary role is to expand the beam entering the lens, contributing the largest single negative surface power in the system (φ at R'₁ = −0.628). This expansion is essential for achieving the retrofocus geometry.

The six-digit glass code 583465 corresponds to a glass type in the old Schott catalog that has since been discontinued or reformulated. No exact match exists in modern Schott, OHARA, or HOYA catalogs.

### Element L2 — Secondary Negative Element

| Property | Value |
|---|---|
| Glass | 548/45.8 — Extra-light flint; confirmed Schott LLF1 |
| nd / νd | 1.5481 / 45.8 |
| Shape | Negative meniscus, concave toward front |
| Radii | R₂ = +1.3301, R'₂ = +0.9281 |
| Focal length (in air) | −6.10 F (−222.6 mm) |

L2 is a weaker negative meniscus, also concave toward the front, with approximately one-third the refractive power of L1. Rule A requires φ₂ < ⅔ φ₁, and in Example 8 the ratio is 0.320. The rear surface R'₂ = +0.9281 is identical to R'₁ of L1. LLF1 is confirmed with nd = 1.54814, νd = 45.75, matching patent values to manufacturing tolerance.

### Air Lens α — Between Components II and III

The air space between L2 and L3a (S₂ = 0.335F ≈ 12.2 mm) forms the air lens α. In Example 8, φα = −0.043Φ (weakly diverging, Rule B satisfied). Both bounding surfaces have positive radii, giving the gap a meniscus shape.

### Element L3a — Front Element of Split Positive Component

| Property | Value |
|---|---|
| Glass | 713/53.9 — Lanthanum crown; confirmed Schott N-LaK8 |
| nd / νd | 1.7130 / 53.9 |
| Shape | Biconvex positive |
| Radii | R₃ₐ = +1.3016, R'₃ₐ = −11.273 |
| Focal length (in air) | +1.65 F (+60.1 mm) |

L3a is the strongest positive element and the dominant converging component of the entire lens. LaK8's high index (nd = 1.713) and low dispersion (νd = 53.9) provide strong positive power without excessive chromatic contribution. This glass is used for three elements (L3a, L3b, L4).

### Element L3b — Rear Element of Split Positive Component

| Property | Value |
|---|---|
| Glass | 713/53.9 — Lanthanum crown; confirmed Schott N-LaK8 |
| nd / νd | 1.7130 / 53.9 |
| Shape | Positive meniscus, concave toward front |
| Radii | R₃ᵦ = −47.565, R'₃ᵦ = −2.0928 |
| Focal length (in air) | +3.07 F (+111.9 mm) |

L3b is the rear element of the split component 3. Both radii are negative; the extremely flat front radius (R = −47.565) versus the strongly curved rear (R' = −2.093) produces net positive power and makes the element thicker at center than edge — a positive meniscus. The patent Table II marks this as same-sign splitting with "(+)".

The splitting of component 3 into air-spaced L3a and L3b is the central innovation of Example 8. The air gap (0.083F ≈ 3.0 mm) creates differential ray penetration heights between axial and oblique beams, providing image quality refinement in the lateral field.

### Element L4 — von Hoegh Meniscus (Component M)

| Property | Value |
|---|---|
| Glass | 713/53.9 — Lanthanum crown; confirmed Schott N-LaK8 |
| nd / νd | 1.7130 / 53.9 |
| Shape | Positive meniscus, convex toward front |
| Radii | R₄ = +0.7809, R'₄ = +0.8332 |
| Focal length (in air) | +7.09 F (+258.6 mm) |

L4 is described by the patent as "a variation of the anastigmatic zero lens (v. Hoegh's meniscus)." Its surface power sum (φ₄ = +0.057Φ) is deliberately kept small per Rule D. The thick element (6.7 mm) with weak power allows it to fine-tune the Petzval sum independently of focal length.

### Aperture Stop (CS)

The stop is located in the CS gap (0.236F ≈ 8.6 mm) between L4 and L5. The entrance pupil is 32.5 mm behind the first lens vertex (datasheet); the paraxial ABCD computation yields 34.3 mm.

### Element L5 — Rear Diverging Element (Aspherical)

| Property | Value |
|---|---|
| Glass | 548/45.8 — Extra-light flint; confirmed Schott LLF1 |
| nd / νd | 1.5481 / 45.8 |
| Shape | Biconcave negative (1× aspherical surface) |
| Radii | R₅ = −6.9100 (ASPHERICAL), R'₅ = +1.1271 |
| Focal length (in air) | −1.76 F (−64.3 mm) |

L5 carries the lens's sole aspherical surface on its front face. Low-index LLF1 satisfies Rule E″: n₅ = 1.548 < (n₃ + n₆)/2 = 1.780.

### Elements L6 + L7 — Cemented Doublet

| Property | L6 | L7 |
|---|---|---|
| Glass | SF57 (nd=1.8467, νd=23.8) | N-LaF21 (nd=1.7883, νd=47.4) |
| Shape | Biconcave negative | Biconvex positive |
| Radii | R₆=−1.1854, R'₆=+1.3987 | R₇=+1.3987, R'₇=−0.9416 |
| Standalone fl | −0.75 F (−27.4 mm) | +0.74 F (+27.1 mm) |
| Doublet fl | +6.05 F (+220.7 mm) | |

The doublet provides primary chromatic correction with 23.6-unit Abbe number contrast. Cementing at R'₆ = R₇ prevents total internal reflection at the steep f/1.4 incidence angles.

### Element L8 — Final Positive Element

| Property | Value |
|---|---|
| Glass | N-LaF21 (nd=1.7883, νd=47.4) |
| Shape | Biconvex positive (nearly plano-convex) |
| Radii | R₈ = +8.8250, R'₈ = −1.5029 |
| Focal length (in air) | +1.64 F (+59.7 mm) |

---

## 4. Aspherical Surface

The single aspherical surface is on L5's front face (patent surface R₅). The patent sag formulation is P(H) = c₁H² + c₂H⁴, with c₁ = 1/(2R₅) and c₂ = −7.9340850 × 10⁻¹ (normalized). All higher-order terms are zero, making this a pure 4th-order aspherical correction.

Converted to standard conic+polynomial with K = 0: A₄ = c₂ − 1/(8R³) = −0.7930 (normalized) → −1.631 × 10⁻⁵ mm⁻³ at production scale. The aspherical departure at the estimated full-aperture semi-diameter (~13.5 mm) is approximately 0.54 mm — substantial but manufacturable for a surface of this size in the 1970s.

---

## 5. Glass Selection Strategy

Five glass types serve nine elements: barium flint 583/465 (L1), LLF1 548/458 (L2, L5), N-LaK8 713/539 (L3a, L3b, L4), SF57 847/238 (L6), and N-LaF21 788/474 (L7, L8). The achromatization strategy pairs the front member's modest dispersion contrast (~8 units, LaK8 vs LLF1/BaF) with the rear doublet's strong contrast (23.6 units, SF57 vs N-LaF21). The refractive index hierarchy satisfying Rules E' and E″ simultaneously optimizes Petzval field curvature and higher-order oblique aberration balance.

---

## 6. Focusing Mechanism

The production lens uses floating-element focusing to 0.3 m MFD. The patent provides only infinite-conjugate data. The data file approximates close focus with unit focusing (BFD change only), which does not capture the production floating-element behavior.

---

## 7. Design Rules (A–G) — Verification

| Rule | Requirement | Computed | Patent Table | Status |
|---|---|---|---|---|
| A | φ₂ < ⅔ φ₁ | 0.3199 | 0.31997 | ✓ |
| B | \|φα\| < 0.185Φ | 0.0428 | 0.04282 | ✓ |
| C | \|φ₅\| < 0.85 φ₃ | 0.6038 | 0.60385 | ✓ |
| D | φ₄ < 0.185Φ | 0.0573 | 0.05744 | ✓ |
| E | \|φ₅\| < 0.90 \|φ₆\| | 0.4286 | 0.42866 | ✓ |
| F | \|φ₃ᵦ\| < 0.75 \|φ₃ₐ\| | 0.5330 | 0.53301 | ✓ |
| G | \|φᵢ\| < 0.20Φ | 0.0483 | 0.06956 | ✓* |

\*Rule G: computed and patent values differ; see Section 2 note. Both satisfy the < 0.20 bound.

---

## 8. Historical Context

The Distagon T* 1.4/35 was introduced for the Contax RTS system in the late 1970s and remained in production through the Contax/Yashica era. When Zeiss reintroduced the 35mm f/1.4 Distagon for SLR mounts as the ZF.2 and ZE circa 2010, the optical formula was revised to 11 elements in 9 groups. The ZM version for Leica M-mount (2014) is a further distinct design with 10 elements and 2 aspherical surfaces. By 2017, the Milvus replaced the ZF.2/ZE version.

Erhard Glatzel (1925–2002) was one of the most prolific lens designers at Carl Zeiss. His work on the Distagon family established the optical foundations for Zeiss's wide-angle lineup across four decades.

---

## 9. Full Surface Prescription (Example 8)

All values normalized to F = 1.0000. Multiply by 36.5 to obtain production dimensions in mm.

| Surface | R | d | nd (after) | Component |
|---|---|---|---|---|
| S1 | +8.3325 | 0.06327 | 1.5827 | L1 front |
| S2 | +0.9281 | 0.32654 | 1.0 (air) | L1 rear |
| S3 | +1.3301 | 0.09243 | 1.5481 | L2 front |
| S4 | +0.9281 | 0.33507 | 1.0 (air) | L2 rear — air lens α |
| S5 | +1.3016 | 0.18569 | 1.7130 | L3a front |
| S6 | −11.273 | 0.08308 | 1.0 (air) | L3a rear |
| S7 | −47.565 | 0.13480 | 1.7130 | L3b front |
| S8 | −2.0928 | 0.00138 | 1.0 (air) | L3b rear |
| S9 | +0.7809 | 0.18377 | 1.7130 | L4 front (meniscus) |
| S10 | +0.8332 | 0.23576 | 1.0 (air) | L4 rear — CS (stop) |
| S11 | −6.9100 | 0.06768 | 1.5481 | L5 front (**aspherical**) |
| S12 | +1.1271 | 0.12765 | 1.0 (air) | L5 rear |
| S13 | −1.1854 | 0.04429 | 1.8467 | L6 front |
| S14 | +1.3987 | 0.19917 | 1.7883 | L6–L7 cement junction |
| S15 | −0.9416 | 0.01706 | 1.0 (air) | L7 rear |
| S16 | +8.8250 | 0.10536 | 1.7883 | L8 front |
| S17 | −1.50293 | 0.98567 | 1.0 (air) | L8 rear — BFD to image |
