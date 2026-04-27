# Nikon Nikkor-S Auto 50mm f/1.4 — Optical Analysis

**Patent:** US 3,560,079 · Example 1  
**Inventors:** Zenji Wakimoto, Yoshiyuki Shimizu  
**Assignee:** Nippon Kogaku K.K. (Nikon Corporation)  
**Filed:** December 13, 1968 (continuation-in-part of Ser. No. 460,634, June 2, 1965)  
**Priority:** Japan, November 12, 1964 (39/87,702)  
**Granted:** February 2, 1971  
**Production:** 1962–1977 (single-coated versions through 1972; multicoated "SC" version from 1972; optical redesign for AI version introduced 1977)

---

## 1. Overview

The Nikkor-S Auto 50mm f/1.4 is one of the most historically significant normal lenses in the 35mm SLR era. Designed by Zenji Wakimoto and Yoshiyuki Shimizu at Nippon Kogaku (Nikon), it was the company's first true 50mm f/1.4 lens for the Nikon F mount, replacing the earlier Nikkor-S Auto 5.8cm f/1.4 whose focal length deviated from the desired 50mm standard. According to Nikon's own account in the "Thousand and One Nights" series (Tale No. 44), development began around 1959 and took approximately three full years. The lens was released in 1962 and remained the most popular Nikkor lens throughout the Nikon F and F2 eras.

The design is a **modified Gauss type** comprising **7 elements in 5 groups**, entirely spherical — no aspherical surfaces are employed. It achieves a maximum aperture of f/1.4 with a back focal distance of 0.75 × focal length, sufficient for mirror clearance in single-lens reflex cameras. The patent is normalized to f = 1.0; all analysis below provides both normalized and production-scaled (f ≈ 50 mm) values.

The "S" in the Nikkor-S designation follows Nikon's element-count naming convention, which uses a mix of Latin and Greek numeral prefixes: T (*tres*) = 3, Q (*quattuor*) = 4, P (*pente*, Greek) = 5, H (*hex*, Greek) = 6, S (*septem*) = 7, O (*octo*) = 8, N (*novem*) = 9. Greek was substituted for 5 and 6 to avoid initial-letter collisions with Q (4) and S (7).

---

## 2. Aspherical Surfaces

**There are none.** The Nikkor-S Auto 50mm f/1.4 is an entirely spherical design. The patent prescription contains only spherical radii of curvature — no conic constants, no polynomial aspheric coefficients, and no mention of aspherical manufacturing processes anywhere in the patent text. This is consistent with the era: commercial aspherical lens elements for mass-produced photographic lenses did not become practical until the 1970s and were not widely adopted until the 1980s. All aberration correction in this design is achieved through glass selection, element shaping, spacing, and the structural innovation of splitting the rear group into two elements.

---

## 3. Group Structure and Design Philosophy

The patent describes a modified Gauss type in which the last lens group (rear of the stop) has been split into three air-spaced subgroups to extend back focal distance while maintaining aberration correction. The structure is:

| Group | Elements | Position | Description |
|-------|----------|----------|-------------|
| I     | G₁ (L1)      | Front      | Single positive meniscus |
| II    | G₂+G₃ (L2+L3) | Front      | Cemented doublet (positive + negative) |
| —     | *Aperture Stop* | Center | Between Groups II and III |
| III   | G₄+G₅ (L4+L5) | Rear       | Cemented doublet (negative + positive) |
| IV    | G₆ (L6)       | Rear       | Single positive meniscus |
| V     | G₇ (L7)       | Rear       | Single biconvex positive |

The classic Gauss type has a symmetric positive–negative | negative–positive structure around the stop. In earlier Gauss designs of this speed class (such as the Nikkor-S Auto 5.8cm f/1.4), the rear group was kept as a single subgroup, resulting in a shorter back focus. According to Nikon's account, the key innovation of this design was splitting the last group into two separate positive elements (G₆ and G₇), a technique Wakimoto had previously applied to the Nikkor-H Auto 28mm f/3.5 retrofocus wide-angle for coma correction. By distributing the positive power of the rear group across two air-spaced elements rather than concentrating it in one, the design achieves two simultaneous goals: the back focus is extended to 0.75f (sufficient for the Nikon F mirror mechanism), and coma — the dominant residual aberration of the predecessor 5.8cm lens — is significantly reduced.

### Patent Design Conditions

The patent specifies three governing conditions that define the modified Gauss geometry:

**Condition 1:** d₃ + d₄ < d₆ + d₇ and r₃ > |r₈|

This requires the combined thickness of the front cemented doublet (G₂+G₃) to be less than that of the rear cemented doublet (G₄+G₅). Thinning the front doublet reduces beam contraction before the stop, while thickening the rear doublet enlarges the light flux after the stop, both contributing to longer back focus. Example 1 satisfies this: 0.2015f < 0.2054f, and r₃ = 0.5736f > |r₈| = 0.4535f.

**Condition 2:** 0.2f < d₆ + d₇ < 0.3f and 0.9f < L < 1.1f

This limits the rear doublet thickness to prevent excessive total length. Example 1: d₆ + d₇ = 0.2054f (within range) and L = 1.01f (within range).

**Condition 3:** 0.25f < |r₆| < 0.35f

This constrains the front radius of curvature of G₄ (the rear negative meniscus). The patent text references |r₈| in the formula, but the description explicitly names "the front surface of G₄," which is surface r₆. This is likely a subscript error in the patent manuscript. For Example 1, |r₆| = 0.2892f, which satisfies 0.25f < 0.2892f < 0.35f. (The surface indexed as r₈, with |r₈| = 0.4535f, does not satisfy this condition, confirming the subscript interpretation.)

---

## 4. Optical Prescription (Example 1)

All values normalized to f = 1.0 as given in the patent. The scale factor to production focal length is ×49.99 (since the computed EFL is 1.0002, yielding f ≈ 50.01 mm at ×50; ×49.99 gives exactly 50.0 mm).

| Surface | R (norm.) | d (norm.) | nd | Medium | Element |
|---------|-----------|-----------|-------|--------|---------|
| r₁  | +0.7655  | 0.1260 | 1.66446 | Glass (L1) | G₁ front |
| r₂  | +2.5053  | 0.0019 | 1.0     | Air | G₁ rear |
| r₃  | +0.5736  | 0.1686 | 1.69350 | Glass (L2) | G₂ front |
| r₄  | +12.4041 | 0.0329 | 1.64831 | Glass (L3) | G₂→G₃ junction |
| r₅  | +0.3240  | 0.3256 | 1.0     | Air | G₃ rear |
| *STO* | — | — | — | — | *Aperture stop (within d₅ gap)* |
| r₆  | −0.2892  | 0.0407 | 1.69895 | Glass (L4) | G₄ front |
| r₇  | −3.8760  | 0.1647 | 1.71300 | Glass (L5) | G₄→G₅ junction |
| r₈  | −0.4535  | 0.0039 | 1.0     | Air | G₅ rear |
| r₉  | −2.3256  | 0.0833 | 1.67790 | Glass (L6) | G₆ front |
| r₁₀ | −0.6357  | 0.0019 | 1.0     | Air | G₆ rear |
| r₁₁ | +1.5504  | 0.0620 | 1.71300 | Glass (L7) | G₇ front |
| r₁₂ | −16.8774 | (BFD)  | 1.0     | Air | G₇ rear |

### Paraxial Verification (ABCD Matrix Ray Trace)

| Parameter | Computed | Patent |
|-----------|----------|--------|
| Effective Focal Length | 1.0002f | 1.0f |
| Back Focal Distance | 0.7499f | 0.75f |
| Total Track (L) | 1.0115f | 1.01f |
| Petzval Sum | 0.1098 | ΣP = 0.1101 |

All four parameters agree to within rounding of the patent's stated values, confirming correct transcription.

---

## 5. Glass Identification

The patent specifies refractive index (nd) and Abbe number (νd) for each element. In the 1960s, Nikon sourced optical glass primarily from Japanese manufacturers (Ohara, Hoya, and others), though the nd/νd values also correspond closely to well-known Schott catalog designations. The following identifications are based on six-digit glass code matching against historical catalogs. These are inferences at the family level — the exact proprietary melt used by Nikon in production cannot be determined from the patent alone.

| Element | nd | νd | Schott Equivalent | Ohara Equivalent | Glass Family |
|---------|------|------|-------------------|-----------------|-------------|
| L1 (G₁) | 1.66446 | 35.9 | SF2 | NSL36 | Dense flint |
| L2 (G₂) | 1.69350 | 53.4 | LaK9 | LAL7 | Lanthanum crown |
| L3 (G₃) | 1.64831 | 33.8 | SF4 | PBM5 | Dense flint |
| L4 (G₄) | 1.69895 | 30.1 | SF6 | PBM6 | Dense flint |
| L5 (G₅) | 1.71300 | 53.9 | LaK8 | LAL14 | Lanthanum crown |
| L6 (G₆) | 1.67790 | 55.5 | SK16 or BaLF4 | BSL7 | Barium crown / barium light flint |
| L7 (G₇) | 1.71300 | 53.9 | LaK8 | LAL14 | Lanthanum crown |

### Glass Selection Patterns

The design employs a deliberate alternation between high-dispersion flint glasses (νd ≈ 30–36) and low-dispersion crown/lanthanum glasses (νd ≈ 53–56) that is characteristic of a well-corrected achromatic Gauss design:

The three **flint glasses** (L1, L3, L4) all have Abbe numbers below 36 and serve as the negative-power or dispersion-controlling elements. The four **crown and lanthanum crown glasses** (L2, L5, L6, L7) have Abbe numbers above 53 and carry the positive refractive power. The use of lanthanum crowns (LaK8/LaK9) is noteworthy: these high-index, low-dispersion glasses were relatively new in the 1960s and allow strong positive refractive power to be achieved at reduced surface curvatures, which helps control spherical aberration and coma. Elements L5 and L7 share the same glass (nd = 1.71300, νd = 53.9, matching LaK8/Ohara LAL14), simplifying production inventory.

No anomalous partial dispersion (APD) glasses are used. This is expected for a 1960s design — APD glasses like fluorite crowns and short-flint specials became significant in lens design primarily from the 1970s onward.

### Note on Production Glass Tolerances

According to Nikon's "Thousand and One Nights" account, the Nikkor-S Auto 50mm f/1.4 was historically significant for being the first Nikon lens to eliminate the "pot correction" process. Previously, each batch of melted glass had slightly different refractive indices, requiring Nikon's designers to recalculate and adjust radii of curvature for each batch. For this lens, Nikon defined acceptable refractive index tolerances for each glass ingredient and committed to using only glass within those tolerances, enabling true industrial-scale production without per-batch optical redesign. This represented a fundamental shift from artisanal to industrial lens manufacturing at Nikon.

---

## 6. Element-by-Element Analysis

### L1 — G₁: Front Positive Meniscus

| Property | Value |
|----------|-------|
| Shape | Positive meniscus, convex toward object |
| R₁ / R₂ | +0.7655 / +2.5053 (norm.) = +38.27 / +125.24 mm |
| Thickness | 0.1260f = 6.30 mm |
| Glass | nd = 1.66446, νd = 35.9 (SF2 / NSL36 — dense flint) |
| Focal Length | +1.61f = +80.6 mm |
| Role | Collects incoming light and begins convergence. Contributes positive power but also introduces undercorrected spherical aberration. |

L1 is a moderately thick positive meniscus made of dense flint glass, convex toward the object. Its relatively high dispersion is unusual for the first element of a fast normal lens — most Gauss designs place a crown glass here. The use of a flint glass for L1 indicates that chromatic correction is being managed globally across the system rather than locally within each half. The front surface r₁ (R = +38.27 mm at production scale) is the most strongly curved surface in the front group and is the primary contributor to initial beam convergence. The meniscus shape helps control the angle of incidence on the front surface, reducing higher-order spherical aberration compared to a biconvex form.

### L2+L3 — G₂+G₃: Front Cemented Doublet

| Property | L2 (G₂) | L3 (G₃) |
|----------|---------|---------|
| Shape | Positive meniscus, convex toward object (near-plano-convex; R₂ ≈ 22× R₁) | Negative meniscus, convex toward object (near-plano front; R₁ ≈ 38× R₂) |
| R (front / rear) | +0.5736 / +12.4041 | +12.4041 / +0.3240 |
| Thickness | 0.1686f = 8.43 mm | 0.0329f = 1.64 mm |
| Glass | nd = 1.69350, νd = 53.4 (LaK9 / LAL7) | nd = 1.64831, νd = 33.8 (SF4 / PBM5) |
| Focal Length (standalone) | +0.86f = +43.1 mm | −0.51f = −25.7 mm |
| Doublet Focal Length | −1.98f = −98.8 mm (combined) | |

The front cemented doublet is the primary beam-contracting group ahead of the stop. L2 is a thick, strongly curved positive meniscus of lanthanum crown glass (LaK9) that is effectively plano-convex — its rear surface R₂ = +12.4041 has a radius 22 times that of the front, contributing negligible curvature. L3 is a thin negative meniscus of dense flint (SF4) with a nearly flat front surface (the shared junction r₄) and a strongly curved rear surface r₅. The junction surface r₄ (R = +12.4041, nearly flat) provides almost no refractive bending on its own; its primary role is chromatic: by placing a high-dispersion flint (νd = 33.8) in contact with a low-dispersion crown (νd = 53.4), the doublet achieves local achromatism — the dispersion introduced by L2's positive power is partially cancelled by L3's negative power in a complementary glass, reducing longitudinal chromatic aberration without requiring the two elements to have equal and opposite power.

The combined power of this doublet is weakly negative (f = −98.8 mm), meaning the doublet as a whole diverges slightly. This is consistent with the patent's strategy: reducing the beam contraction in the front group (compared to earlier Gauss designs) to preserve a longer back focus. The thick positive element L2 carries the chromatic correction load, while the thin negative element L3 provides the diverging component that balances Petzval curvature.

The patent's Condition 1 requires this doublet to be thinner than the rear doublet (d₃ + d₄ = 0.2015f < d₆ + d₇ = 0.2054f), confirming the deliberate asymmetry between front and rear groups.

### Aperture Stop

The iris diaphragm (7 blades in production) is located in the large air gap d₅ = 0.3256f = 16.28 mm between the front and rear cemented doublets. The patent figure shows the stop positioned approximately at the center of this gap. This is the longest air space in the system and represents the central break in the modified Gauss symmetry. At f/1.4, the entrance pupil diameter is approximately 35.7 mm, giving an entrance pupil semi-diameter of ≈17.9 mm. The stop semi-diameter at f/1.4 (the physical iris radius at the stop plane) is approximately 12.1 mm, smaller than the entrance pupil due to the converging effect of the front group.

### L4+L5 — G₄+G₅: Rear Cemented Doublet

| Property | L4 (G₄) | L5 (G₅) |
|----------|---------|---------|
| Shape | Negative meniscus, concave toward object | Positive meniscus, concave toward object |
| R (front / rear) | −0.2892 / −3.8760 | −3.8760 / −0.4535 |
| Thickness | 0.0407f = 2.03 mm | 0.1647f = 8.23 mm |
| Glass | nd = 1.69895, νd = 30.1 (SF6 / PBM6) | nd = 1.71300, νd = 53.9 (LaK8 / LAL14) |
| Focal Length (standalone) | −0.45f = −22.5 mm | +0.71f = +35.3 mm |
| Doublet Focal Length | −2.55f = −127.7 mm (combined) | |

This is the mirror-image counterpart of the front doublet, placed symmetrically about the stop as prescribed by the Gauss type. L4 is a thin negative meniscus of very high-dispersion flint (SF6, νd = 30.1 — the highest dispersion glass in the system), while L5 is a thick positive meniscus of lanthanum crown (LaK8). As with the front doublet, this pairing achieves local achromatism: L4's high dispersion partially cancels the chromatic contribution of L5's positive power, keeping longitudinal chromatic aberration under control in the rear half of the system. The doublet's combined power is weakly negative, matching the front doublet's behavior. The strongly curved front surface r₆ (R = −14.46 mm at production scale) is the most tightly curved surface in the entire system and is the dominant source of both spherical aberration and its correction — the patent specifically discusses how reducing this radius to extend back focus produces large spherical aberration and coma that must then be compensated by the rear elements.

The patent's Condition 3 governs r₆: 0.25f < |r₆| < 0.35f. Example 1 has |r₆| = 0.2892f, near the lower bound, indicating aggressive curvature for maximum back focus extension.

### L6 — G₆: Rear Positive Meniscus

| Property | Value |
|----------|-------|
| Shape | Positive meniscus, concave toward object |
| R₉ / R₁₀ | −2.3256 / −0.6357 (norm.) = −116.3 / −31.8 mm |
| Thickness | 0.0833f = 4.16 mm |
| Glass | nd = 1.67790, νd = 55.5 (SK16 or BaLF4 / BSL7) |
| Focal Length | +1.27f = +63.3 mm |
| Role | First element of the split rear group. Provides positive power and works in tandem with L7 to correct coma and spherical aberration introduced by the rear doublet. |

L6 is a positive meniscus concave toward the object, made of barium crown glass (SK16/BaLF4). This is one of the two elements that result from splitting the traditional Gauss rear group. Its rear surface r₁₀ (R = −31.8 mm) is moderately strongly curved and contributes significant positive power. The air gap between L6 and L7 (d₁₀ = 0.0019f = 0.095 mm) is extremely thin — nearly in contact — but the separation is optically critical because it allows independent correction of higher-order coma that a single thick element cannot address.

### L7 — G₇: Rear Biconvex Element

| Property | Value |
|----------|-------|
| Shape | Biconvex positive (near-plano-convex; |R₂| ≈ 11× R₁) |
| R₁₁ / R₁₂ | +1.5504 / −16.8774 (norm.) = +77.5 / −843.7 mm |
| Thickness | 0.0620f = 3.10 mm |
| Glass | nd = 1.71300, νd = 53.9 (LaK8 / LAL14) |
| Focal Length | +1.99f = +99.7 mm |
| Role | Final collecting element. Completes the rear-group coma correction and establishes the exit pupil position. The near-plano rear surface minimizes aberration contribution at the last interface. |

L7 is the only biconvex element in the entire system. Made of the same lanthanum crown glass as L5 (LaK8), it provides a gentle positive power contribution at the rear of the system. Its rear surface r₁₂ (R = −843.7 mm) is nearly flat, meaning essentially all of L7's optical power derives from the front surface r₁₁. This is by design: a near-flat last surface minimizes its contribution to off-axis aberrations (particularly distortion and lateral color) at the position farthest from the stop.

The biconvex shape of L7 is a distinguishing feature of this design. In earlier Gauss lenses of this speed class, the rear group terminated in a single positive meniscus. By splitting this into two elements (L6 meniscus + L7 biconvex), each with a different glass and shape, the designer gained two additional degrees of freedom for coma and spherical aberration correction — precisely the innovation that Nikon credits with overcoming the coma problems of the predecessor 5.8cm f/1.4.

---

## 7. Group-Level Optical Analysis

| Group | Focal Length | Power Contribution |
|-------|-------------|-------------------|
| Front half (L1 + L2+L3) | +3.37f = +168.6 mm | Weak positive (beam convergence) |
| Rear half (L4+L5 + L6 + L7) | +0.76f = +38.0 mm | Strong positive (beam convergence + image formation) |
| Whole system | +1.00f = +50.0 mm | — |

The strong asymmetry in group powers is notable. The front half provides only weak convergence (f = +168.6 mm), while the rear half carries the dominant positive power (f = +38.0 mm). This asymmetry is deliberate: by reducing the front group's converging power, the beam remains more open through the stop region, requiring less beam contraction and enabling the longer back focus that the patent seeks. The rear group then performs the bulk of the convergence to form the final image.

This power distribution also explains why the rear half has more elements (four) than the front half (three): the stronger rear power demands more surfaces for aberration control.

### Petzval Sum

The surface-by-surface Petzval sum is Σ = 0.1098 (normalized), giving a Petzval radius of −9.11f = −455 mm. This is a moderately negative field curvature — acceptable for a standard normal lens where the field angle is only ±23° and the depth of focus at f/1.4 is already shallow. The patent's Seidel coefficient ΣP = 0.1101 confirms this calculation. For comparison, a "flat-field" design would target a Petzval sum near zero, but such designs require either extreme glass disparities or additional elements, neither of which is practical at this speed and era.

---

## 8. Semi-Diameter Estimation

The patent does not provide semi-diameters (clear apertures). The following estimates were derived using a multi-step approach and validated against all renderer constraints.

### Method

1. **Paraxial marginal ray trace** at f/1.4 (entrance pupil semi-diameter = 17.86 mm) establishes the minimum clear aperture at each surface for full on-axis illumination.
2. **Front-group off-axis allowance** accounts for the fact that elements ahead of the stop must pass both the on-axis marginal beam and off-axis ray bundles. The front element SD is constrained by the 52 mm filter thread (clear aperture ≈ 46 mm diameter, SD ≈ 23 mm), with intermediate surfaces scaled by the marginal ray progression plus mechanical clearance.
3. **Rear-group SDs** are dominated by the marginal ray height plus ~8–15% clearance, since the chief ray is already close to the axis behind the stop.
4. **Constraint validation**: all SDs were checked against slope limits (sag slope < 2.065), cross-gap sag intrusion (< 90% of air gap), and element edge thickness (positive).

### Semi-Diameter Table

| Surface | R (mm) | Marginal (mm) | SD (mm) | sd/|R| | Limiting Factor |
|---------|--------|---------------|---------|--------|-----------------|
| r₁  | +38.27  | 17.86 | 23.0 | 0.60 | 52 mm filter thread |
| r₂  | +125.24 | 16.68 | 21.0 | 0.17 | L1 edge thickness |
| r₃  | +28.67  | 16.66 | 19.5 | 0.68 | L2 edge thickness |
| r₄  | +620.06 | 13.55 | 16.5 | 0.03 | Cemented junction taper |
| r₅  | +16.20  | 12.93 | 14.0 | 0.86 | Sag slope (1.72 at SD=14) |
| STO | ∞       | 12.07 | 12.1 | —    | f/1.4 stop aperture |
| r₆  | −14.46  | 11.21 | 12.5 | 0.86 | Cross-gap sag vs r₅ |
| r₇  | −193.76 | 11.73 | 13.0 | 0.07 | Cemented junction |
| r₈  | −22.67  | 13.83 | 15.0 | 0.66 | Marginal + clearance |
| r₉  | −116.25 | 13.83 | 15.0 | 0.13 | Marginal + clearance |
| r₁₀ | −31.78  | 14.04 | 14.5 | 0.46 | Marginal + clearance |
| r₁₁ | +77.50  | 14.01 | 14.5 | 0.19 | Marginal + clearance |
| r₁₂ | −843.68 | 13.39 | 14.0 | 0.02 | Marginal + clearance |

### Key Constraints

The two most strongly curved surfaces in the system — r₅ (R = +16.20 mm, L3 rear) and r₆ (R = −14.46 mm, L4 front) — are the binding constraints. Both face each other across the central air gap d₅ = 16.28 mm (which contains the aperture stop), and their sags curve toward each other, reducing the effective air clearance at the rim. The cross-gap sag intrusion at the mutual check diameter (12.5 mm) is approximately 13.1 mm, consuming about 80% of the 16.28 mm gap — within the 90% limit but leaving only about 3.2 mm of physical clearance at the rim. This is tight but consistent with production lenses of this era, where the strongly curved surfaces near the stop in fast Gauss designs operate close to physical clearance limits.

---

## 9. Focusing Mechanism

The Nikkor-S Auto 50mm f/1.4 uses **unit focusing** — the entire optical assembly moves forward as a rigid unit along the optical axis to focus at closer distances. The back focal distance increases as the lens extends, while the image conjugate shortens. There is no internal focusing, no floating elements, and no differential group movement. This is consistent with all Nikon F-mount manual-focus normal lenses of the era.

The production lens has a minimum focusing distance of **0.6 m (2 feet)** and a 7-blade aperture diaphragm with a range of f/1.4 to f/16.

Since the patent provides data only at infinity focus (a single set of air spacings), close-focus spacings cannot be derived from the patent itself. For unit focusing, the required extension Δ from infinity to object distance M can be approximated from the Gaussian image shift:

Δ ≈ f² / (M − f)

At 0.6 m (600 mm) with f = 50 mm: Δ ≈ 50² / (600 − 50) = 2500 / 550 ≈ 4.55 mm of forward extension.

The BFD thus changes from 37.49 mm (infinity) to approximately 42.03 mm (0.6 m close focus).

---

## 10. Aberration Characteristics

The patent provides both the raw Seidel sums and the stop-shifted coefficients for Example 1:

| Coefficient | Without Stop | With Stop | Aberration |
|-------------|-------------|-----------|------------|
| ΣI  | 0.2314 | 0.2314 | Spherical aberration |
| ΣII | 0.1428 | 0.0270 | Coma |
| ΣIII | 0.0602 | 0.0360 | Astigmatism |
| ΣIV | 0.1101 | 0.0854 | Petzval field curvature |
| ΣV  | 0.3391 | 0.2718 | Distortion |

The most striking feature is the dramatic reduction in coma from ΣII = 0.1428 (without stop) to ΣII = 0.0270 (with stop). This five-fold reduction demonstrates the effectiveness of the stop placement and the split-rear-group design. Nikon specifically cited the elimination of center-of-frame coma flare (which plagued the predecessor 5.8cm f/1.4) as the primary achievement of this design.

Spherical aberration (ΣI = 0.2314) is the largest residual, and this is confirmed by practical experience: the lens is noticeably soft at f/1.4 due to spherical aberration, sharpening dramatically by f/2.8 and reaching peak performance around f/4–f/5.6. The lens also exhibits noticeable focus shift when stopping down, a classic signature of undercorrected spherical aberration.

---

## 11. Production Specifications

The following specifications are from Nikon's published data for the production Nikkor-S Auto 50mm f/1.4:

| Specification | Value |
|---------------|-------|
| Focal Length | 50 mm |
| Maximum Aperture | f/1.4 |
| Minimum Aperture | f/16 |
| Optical Formula | 7 elements in 5 groups |
| Angle of View | 46° |
| Aperture Blades | 7 |
| Minimum Focus Distance | 0.6 m (2 ft) |
| Filter Size | 52 mm |
| Dimensions | 67 mm diameter × 56.5 mm length |
| Mount | Nikon F (pre-AI; AI-converted versions exist) |
| Coating | Single-coated (original); multicoated from 1972 ("SC" version) |

### Production Variants

The lens went through several production variants between 1962 and 1977:

1. **Nikkor-S Auto 50mm f/1.4** (early, ~1962): Original version with external screws on the focusing ring and a construction closely resembling the predecessor 5.8cm lens.
2. **Nikkor-S Auto 50mm f/1.4** (later, ~1966–1972): Revised barrel construction, single-coated.
3. **Nikkor-SC Auto 50mm f/1.4** (~1972–1974): Multi-layer coating adopted ("C" for coated/multi-coated), same optical formula.
4. **New Nikkor 50mm f/1.4** (1974–1977): Same optical formula with updated cosmetics and naming.
5. **Nikkor 50mm f/1.4 AI** (1977): New optical formula (7 elements in 6 groups), closer minimum focus of 0.45 m — a distinct design not covered by this patent. This 7/6 formula was carried forward through the AI-S (1981), AF (1986), and AF-D (1995) versions.

The optical prescription analyzed here (US 3,560,079, Example 1) covers the original 7-element/5-group design used in variants 1 through 4. The 1977 AI version introduced a redesigned optical system with 7 elements in 6 groups and does not correspond to this patent. Note that some pre-AI lenses were mechanically converted to AI compatibility by adding a meter coupling ridge; these "AI-converted" lenses retain the original 7/5 optical formula despite carrying "AI" markings.

---

## 12. Historical Context and Significance

The Nikkor-S Auto 50mm f/1.4 was significant on multiple levels. Optically, it was the first fast normal lens to offer stopped-down performance rivaling that of slower f/2 designs, establishing the principle that faster lenses should be "better at every aperture" rather than merely usable wide open. Its split-rear-group approach to coma correction, borrowed from retrofocus wide-angle design, was innovative for Gauss-type normal lenses.

Industrially, the elimination of pot correction for this lens marked Nikon's transition from artisanal to industrial optical manufacturing. By defining glass tolerance specifications and committing to consistency rather than per-batch correction, Nikon was able to dramatically increase production volume and uniformity — essential for what became one of the highest-volume Nikkor lenses ever produced.

The lens was standard equipment for a generation of photojournalists using Nikon F and F2 cameras through the 1960s and 1970s. Its 52mm filter thread established a standard that Nikon maintained across many of its prime lenses for decades. Despite its known limitations — strong spherical aberration and vignetting at maximum aperture, mediocre flare resistance with single coatings — the lens earned enduring respect for its rendering character, build quality, and the foundational optical design that influenced all subsequent Nikon fast normal lenses.
