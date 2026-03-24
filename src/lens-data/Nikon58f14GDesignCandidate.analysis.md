# Nikon AF-S NIKKOR 58mm f/1.4G — Patent Analysis

**Patent:** JP 2013-019993 A (published 2013.01.31, filed 2011.07.08)
**Inventor:** Haruo Sato (佐藤治夫), Nikon Corporation
**Production Lens:** AF-S NIKKOR 58mm f/1.4G, announced October 2013

---

## 1. Production Example Identification

Patent JP2013-019993A contains four numerical examples. The production AF-S NIKKOR 58mm f/1.4G is most closely represented by **Example 2 (OS2)**, identified through the following convergent criteria:

| Criterion | Production (Nikon) | Example 2 | Match |
|---|---|---|---|
| Focal length | 58 mm | 58.0216 mm | ✓ |
| Maximum aperture | f/1.4 | f/1.450 | ✓ (patent convention rounds to f/1.4) |
| Half-field angle | ~20.4° (2ω = 40°50') | ω = 20.86° | Close |
| Element count | 9 | 9 | ✓ |
| Aspherical elements | 2 | 2 | ✓ |
| Asphere locations | Front element + rear element (blue in Nikon diagram) | Surface 1 (La front) + Surface 15 (Ldp2 rear) | ✓ |
| Image circle | FX (43.2 mm Ø) | Y = 21.6 mm (43.2 mm Ø) | ✓ |

**Example 4** (f = 51.6 mm) was eliminated immediately by its substantially different focal length. **Example 1** was eliminated because its aspherical surfaces are on surfaces 5 (inside the second-group cemented doublet) and 15 (rear triplet), which does not match the Nikon lens construction diagram showing the *front* element highlighted as aspherical. **Example 3** has only 8 elements (it omits the cemented doublet in group Gb, using a single positive meniscus instead), which does not match the production specification of 9 elements.

### The Group-Count Discrepancy

The patent organizes the design into **4 lens groups** (Ga, Gb, Gc, Gd), which is the patent's own structural designation. However, within this 4-group framework, Gb contains two air-separated components (the cemented doublet Lb1 and the singlet Lb2), giving **5 air-separated lens components** overall: La | Lb1(cemented) | Lb2 | Lc(cemented) | Ld(triplet). Nikon specifies the production lens as 9 elements in **6 groups**, where "groups" in Nikon's published specifications means air-separated components.

The most parsimonious explanation for the 5→6 group discrepancy is that Nikon split the Lb1 cemented doublet (Lb1p + Lb1n) in the production design into two air-separated elements:

- **Patent Example 2:** La | Lb1(cemented doublet) | Lb2 | Lc(cemented doublet) | Ld(cemented triplet) = 5 air-separated components
- **Inferred production:** La | Lb1p(singlet) | Lb1n(singlet) | Lb2 | Lc(cemented doublet) | Ld(cemented triplet) = 6 air-separated components

This modification is common in Nikon's production process — breaking a cemented junction provides manufacturing flexibility and may improve chromatic correction at the cost of an additional air–glass reflection (mitigated by Nano Crystal Coat).

The cameragossip.github.io patent database notes that "this patent does not appear to match the production lens exactly — in particular the second aspherical element in the production lens is different from the one in the patent." This suggests additional production changes beyond the doublet split.

---

## 2. Design Architecture

The lens is a **modified Gauss type** with a positive–negative–negative–positive four-group structure, specifically optimized for sagittal coma correction — the same objective that drove Yoshiyuki Shimizu's design of the legendary Ai Noct-NIKKOR 58mm f/1.2 in 1977. The patent describes this as an improvement on the classical Gauss/Xenotar arrangement, which is known to suffer from coma (particularly sagittal coma) at large apertures.

From object to image, the four groups are:

| Group | Patent Designation | Power | Elements | Role |
|---|---|---|---|---|
| Ga | First Lens Group | Positive | La | Front positive collector |
| Gb | Second Lens Group | Negative | Lb1 (cemented doublet) + Lb2 | Negative diverging group; controls field curvature and Petzval sum |
| Gc | Third Lens Group | Negative | Lc (cemented doublet) | Post-stop corrector; sagittal coma and field curvature balance |
| Gd | Fourth Lens Group | Positive | Ld (cemented triplet) | Rear positive power with strong aberration correction |

The aperture stop is located between Gb and Gc (between surfaces 7 and 9, at surface 8), which the patent identifies as favorable for correcting lateral chromatic aberration and distortion (paragraph 0064).

### Group Focal Lengths (Verified by Paraxial Ray Trace)

| Group | Computed f (mm) | Patent stated f (mm) | f/f₀ |
|---|---|---|---|
| Ga | +90.950 | +90.950 | 1.568 |
| Gb | −104.241 | −104.241 | −1.797 |
| Gc | −84.896 | −84.896 | −1.463 |
| Gd | +35.197 | +35.197 | 0.607 |
| **System** | **58.022** | **58.022** | **1.000** |

The strong positive power of Gd (fd/f₀ = 0.607) relative to the gentle Ga (fa/f₀ = 1.568) produces a strongly asymmetric power distribution. This is characteristic of modified Gauss designs optimized for wide-aperture performance: the rear group does the heavy lifting in converging the beam, while the weaker front group controls the entrance pupil without introducing excessive aberration.

---

## 3. Element-by-Element Analysis

### Element 1 — La: Front Positive Meniscus (1× Aspherical)

- **Surfaces:** 1A (aspherical, R = +52.858), 2 (R = +229.348)
- **Glass:** nd = 1.74443, νd = 49.53 → **Sumita K-LaKn2** (Δνd = 0.01), **HIKARI E-LAF7** (Δνd = 0.04), or **OHARA S-LAH55** (Δνd = 0.08). All are lanthanum dense flint types. No exact Schott catalog match exists at this nd/νd combination; the earlier identification as "LASF35" was incorrect (Schott LASF35 has νd ≈ 44.8, a 4.7 unit discrepancy).
- **Shape:** Positive meniscus, convex to object
- **Focal length:** +91.0 mm
- **Aspherical surface:** Front (object-side), patent κ = 0.5721, standard K = −0.4279 (prolate ellipsoid)

**Role:** La serves as the primary light-gathering element and the first of two aspherical correctors. Its meniscus shape with gentle curvature (weakened by the high refractive index) reduces the ray bending at each surface, which is the classical approach to controlling sagittal coma in fast Gauss-type lenses. The aspherical front surface corrects residual spherical aberration and lower coma generated by the steep marginal rays entering an f/1.4 system.

The patent specifically identifies the front aspherical surface as important for correcting "lower coma, sagittal coma, and spherical aberration" (paragraph 0065).

### Elements 2–3 — Lb1: Cemented Positive Doublet

- **Surfaces:** 3 (R = +40.374), 4 (junction, R = +354.974), 5 (R = +42.413)
- **Lb1p glass:** nd = 1.75500, νd = 52.34 → **OHARA S-LAL14** (exact match) or **Schott N-LAK14** (Δνd = 0.02)
- **Lb1n glass:** nd = 1.48749, νd = 70.31 → **OHARA S-FSL5** (exact match) or **Schott FK5** (Δνd = 0.07)
- **Shape:** Lb1p is a positive meniscus (convex to object); Lb1n is a negative meniscus
- **Combined focal length:** +134.3 mm (net positive, as a cemented component)

**Role:** This cemented doublet acts as a chromatic corrector within the front half of the lens. The large Abbe number difference (Δνd ≈ 18) between the lanthanum crown Lb1p and the low-dispersion FK5-type Lb1n provides lateral chromatic aberration correction for the converging beam. The nearly flat junction surface (R = +355 mm) means the two glasses contribute power primarily at the outer surfaces, with the junction serving as a color-correcting interface with minimal power contribution.

As discussed in Section 1, the production lens likely separates these two elements with a small air gap.

### Element 4 — Lb2: Negative Meniscus

- **Surfaces:** 6 (R = +290.847), 7 (R = +31.636)
- **Glass:** nd = 1.68893, νd = 31.16 → **Schott N-SF8** (exact match) or **OHARA S-TIH4** (Δνd = 0.08)
- **Shape:** Negative meniscus, convex to object, with a strongly curved rear surface
- **Focal length:** −51.6 mm

**Role:** Lb2 is the classical "diverging meniscus" of the front Gauss half. Its strong negative power (the strongest individual element in the front half) works against the positive power of Ga and Lb1 to flatten the Petzval field and generate the characteristic Gauss-type beam divergence ahead of the aperture stop. The steep rear surface (R = 31.6 mm) is the most sharply curved surface in the front group and is the primary source of higher-order coma and spherical aberration contributions from Gb.

### Elements 5–6 — Lc: Cemented Negative Doublet

- **Surfaces:** 9 (R = −30.787), 10 (junction, R = +35.143), 11 (R = −131.141)
- **Lcn glass:** nd = 1.72825, νd = 28.46 → **OHARA S-TIH11** or **Schott N-SF10** (both exact matches)
- **Lcp glass:** nd = 1.88300, νd = 40.77 → **OHARA S-LAH58** (exact match) or **Schott N-LASF44** (Δνd = 0.01)
- **Shape:** Lcn is a biconcave negative; Lcp is a biconvex positive
- **Combined focal length:** −84.9 mm (net negative)

**Role:** Lc is the first group after the aperture stop. Its concave-toward-object front surface (R = −30.8 mm) is the steepest surface in the entire system and is critical for sagittal coma correction. The patent devotes considerable attention to the shape factor of this doublet (conditional expression 4, paragraph 0040), requiring it to form an image-side convex meniscus overall.

The refractive index step at the cemented junction is Ncp − Ncn = +0.1548 (the patent's conditional expression 2). The patent requires this difference to be positive, meaning the higher-index glass (S-LAH58) is on the image side. This configuration reduces the Petzval sum while maintaining the correct sign of chromatic correction at the junction.

### Elements 7–8–9 — Ld: Cemented Positive Triplet (1× Aspherical)

- **Surfaces:** 12 (R = +118.766), 13 (junction, R = −44.232), 14 (junction, R = +44.268), 15A (aspherical, R = −77.294)
- **Ldp1 glass:** nd = 1.88300, νd = 40.66 → **OHARA S-LAH64** (exact match). Note: this is a *different* catalog glass from Lcp's S-LAH58 (νd = 40.77), not a melt variation — S-LAH64 has a distinct composition.
- **Ldn glass:** nd = 1.53172, νd = 48.78 → **OHARA S-NBM51** (exact match) or **Schott KZFS2** (Δνd = 0.06)
- **Ldp2 glass:** nd = 1.74443, νd = 49.53 → Same glass as La (Sumita K-LaKn2 / HIKARI E-LAF7 / OHARA S-LAH55)
- **Combined focal length:** +35.2 mm (strong net positive)
- **Aspherical surface:** Surface 15 (rear), patent κ = 14.1597, standard K = +13.1597 (oblate ellipsoid)

**Role:** The cemented triplet Ld is the optical engine of this design. With a focal length of only 35.2 mm — less than the system focal length — it provides the dominant positive power that converges the beam to the image plane. Its positive–negative–positive (PNP) sandwich structure is the patent's central innovation.

The patent's conditional expression 1 specifies that the average refractive index of the two positive elements must exceed the negative element's index by 0.01–0.50 (actual value: 0.2820). This ensures a strongly negative contribution to the Petzval sum from within the triplet, counteracting the overall positive power's tendency to curve the field inward.

The central negative element Ldn uses S-NBM51 / KZFS2-type glass, which is a **short flint** known for anomalous partial dispersion (positive ΔPgF deviation from the normal line). Paired with the high-index lanthanum positive elements, the triplet achieves partial-dispersion balancing that reduces secondary spectrum within the rear group. This is consistent with the production lens's reported absence of purple fringing.

The conditional expression 3 specifies the shape factor of Ldn: (rd2 + rd1)/(rd2 − rd1) = 0.0004, which means rd1 ≈ −rd2 — essentially a symmetric biconcave lens. The patent states this is optimal for simultaneously correcting spherical aberration, meridional coma, and sagittal coma (paragraph 0035).

---

## 4. Glass Selection Strategy

The nine elements use **seven distinct glass types** (corrected from the original count of six):

| Glass Type | Elements | nd | νd | Catalog Match | Role |
|---|---|---|---|---|---|
| Lanthanum dense flint | La, Ldp2 | 1.74443 | 49.53 | Sumita K-LaKn2 / HIKARI E-LAF7 | Aspherical substrates |
| Lanthanum crown | Lb1p | 1.75500 | 52.34 | OHARA S-LAL14 | Low-aberration positive power |
| Fluorine crown | Lb1n | 1.48749 | 70.31 | OHARA S-FSL5 | Chromatic correction |
| Dense flint | Lb2 | 1.68893 | 31.16 | Schott N-SF8 | Petzval field flattening |
| Dense flint (high) | Lcn | 1.72825 | 28.46 | OHARA S-TIH11 / Schott N-SF10 | Chromatic balancing |
| High-index lanthanum | Lcp | 1.88300 | 40.77 | OHARA S-LAH58 | Petzval correction |
| High-index lanthanum | Ldp1 | 1.88300 | 40.66 | OHARA S-LAH64 | Petzval correction |
| Short flint (APD) | Ldn | 1.53172 | 48.78 | OHARA S-NBM51 | Secondary spectrum control |

**Key correction from earlier analysis:** The La/Ldp2 glass was previously identified as "Schott LASF35," which has νd ≈ 44.8 — a 4.7-unit Abbe number discrepancy. The correct match is Sumita K-LaKn2 (νd = 49.52, Δνd = 0.01) or HIKARI E-LAF7. Nikon frequently sources specialty glasses from Japanese suppliers including Sumita and HIKARI, making these identifications plausible. However, Nikon may also use in-house or custom-melt glasses not available in public catalogs; all identifications remain inferential.

**Additional correction:** Lcp (S-LAH58, νd = 40.77) and Ldp1 (S-LAH64, νd = 40.66) are **distinct catalog glasses** with different compositions, not melt variations of the same type as previously suggested. The 0.11 νd difference corresponds to a meaningful dispersion difference relevant to chromatic balancing within the rear triplet.

The design uses no ED glass (νd > 80), consistent with Nikon's marketing — the lens carries no ED designation. Chromatic correction relies on the FK5-type glass in Lb1n (νd = 70.3) for primary color, and the anomalous-dispersion S-NBM51 in Ldn for secondary spectrum control within the rear triplet.

---

## 5. Aspherical Surface Analysis

### Surface 1A (La front)

| Parameter | Value |
|---|---|
| Base radius | R = +52.8577 mm |
| Patent conic | κ = 0.5721 |
| Standard conic | K = −0.4279 (prolate ellipsoid) |
| A4 | +1.10084 × 10⁻⁷ |
| A6 | +6.21998 × 10⁻¹⁰ |
| A8 | −4.25694 × 10⁻¹³ |
| A10–A14 | 0 |

**Conic convention note:** The patent uses κ in the sag discriminant as 1 − κ(y/r)², while the standard optical convention uses 1 − (1+K)(h/R)². Therefore κ = (1+K), and K = κ − 1. The value K = −0.4279 describes a prolate ellipsoid — a surface slightly flatter at the rim than a sphere, tending toward a paraboloid. The low-order aspheric coefficients (A4 ≈ 10⁻⁷) are very small, indicating that the conic departure does most of the correction work.

### Surface 15A (Ldp2 rear)

| Parameter | Value |
|---|---|
| Base radius | R = −77.2943 mm |
| Patent conic | κ = 14.1597 |
| Standard conic | K = +13.1597 (oblate ellipsoid) |
| A4 | +8.65514 × 10⁻⁶ |
| A6 | +4.15194 × 10⁻⁹ |
| A8 | +1.25812 × 10⁻¹¹ |
| A10 | +1.22728 × 10⁻¹⁴ |
| A12–A14 | 0 |

The very large K = +13.16 (oblate ellipsoid) means the surface curves more steeply toward the rim than a sphere. For this concave surface (R < 0), the increased concavity at the rim means the surface contributes increasingly negative power at higher ray heights, directly correcting the positive spherical aberration that the strong Gd power would otherwise produce. The A4 coefficient (about 80× larger than Surface 1A's) adds further sag in the same direction.

**Conic height limit:** The oblate conic has a geometric height limit h_max = |R| / √(1+K) = 77.29 / √14.16 ≈ 20.5 mm. The data file enforces sd ≤ 0.98 × 20.5 = 20.1 mm at this surface. The estimated physical semi-diameter (17.6 mm) is well within this limit, but the unvignetted paraxial ray height at full field (24.9 mm) exceeds it — confirming that significant natural vignetting occurs at this surface at full aperture, consistent with the ~2.5-stop corner vignetting reported by reviewers.

The patent notes that having one aspherical surface on each side of the aperture stop is "effective for correcting aberrations caused by large aperture, including spherical aberration, sagittal coma, and meridional coma" (paragraph 0067).

---

## 6. Focusing Mechanism

### Patent Description

The patent states that the Examples use **whole-system extension** (unit focus) for infinity-to-close focusing (paragraph 0075). However, the patent also explicitly notes that rear-focus or internal-focus designs using Gc or Gd are applicable (paragraph 0075).

### Production Implementation

The production AF-S NIKKOR 58mm f/1.4G uses **unit focus** — the entire optical assembly translates forward inside a fixed-length barrel, driven by a Silent Wave Motor (SWM). The NikonForums review confirms: "Focusing is not internal, so at the minimum focusing distance, the front element moves forward by about one centimeter." The PhotographyLife review corroborates this with the same observation. Note that some third-party descriptions (notably B&H Photo) incorrectly describe the lens as using "internal focusing," but this appears to be a misuse of the term.

### Computed Focus Extension

Paraxial ray tracing through the Example 2 prescription yields a unit-focus extension of **≈ 7.3 mm** for the production close-focus distance of 0.58 m. This is consistent with the reviewer observation of "about one centimeter" of front element travel, which would include some additional mechanical clearance. At close focus:

| Parameter | Infinity | Close focus (0.58 m) |
|---|---|---|
| BFD (last surface to image) | 38.700 mm | 46.003 mm |
| Object distance from S1 | ∞ | ~480 mm |
| Focus extension (Δ) | — | +7.30 mm |

Since the patent provides no variable-gap data (no tables of spacing changes at close focus), and no Nikon technical documentation confirms or denies the presence of floating elements, the unit-focus identification is based on behavioral observation and the patent's own description.

---

## 7. Conditional Expressions (Verified)

All eight conditional expressions were independently verified using paraxial ray trace computation. Every value matches the patent's Table 6 to the stated precision.

| Condition | Expression | Range | Computed Value | Status |
|---|---|---|---|---|
| (1) | ((Ndp1+Ndp2)/2) − Ndn | 0.01 – 0.50 | 0.2820 | ✓ |
| (2) | Ncp − Ncn | 0.000 – 0.500 | 0.1548 | ✓ |
| (3) | (rd2+rd1)/(rd2−rd1) | −1.0 – 2.0 | 0.0004 | ✓ |
| (4) | (rc2−rc1)/(rc2+rc1) | 0.00 – 1.00 | 0.6197 | ✓ |
| (5) | fd/f₀ | 0.10 – 4.00 | 0.6066 | ✓ |
| (6) | fa/f₀ | 1.00 – 10.0 | 1.5675 | ✓ |
| (7) | (−fb)/f₀ | 0.30 – 30.0 | 1.7966 | ✓ |
| (8) | (−fc)/f₀ | 0.3 – 30.0 | 1.4632 | ✓ |

---

## 8. Semi-Diameter Estimation

The patent does not list semi-diameters. SDs were estimated via a two-step paraxial process:

1. **Marginal ray at full aperture** (y = 20.0 mm at surface 1, u = 0) traced through all surfaces to establish the on-axis beam footprint.
2. **Chief ray at 0.6× full field** (ω = 12.5°) traced to establish the off-axis beam contribution within the expected vignetting-free zone of a fast f/1.4 design.
3. **SD = (|y_marginal| + |y_chief_0.6|) × clearance factor**, capped by edge-thickness positivity (ET > 0.3 mm for all elements) and the conic height limit at surface 15A.

Key physical constraints incorporated:

- **Filter thread:** 72 mm → maximum front element SD ≈ 33 mm
- **F-mount throat:** 44 mm → maximum rear element SD ≈ 22 mm
- **S15A conic limit:** sd ≤ 20.1 mm (0.98 × |R|/√(1+K))
- **Edge thickness:** all elements verified ET > 0.3 mm at their assigned SDs

The resulting SDs produce moderate natural vignetting at the field edges, consistent with the ~2.5-stop corner vignetting measured in the production lens at f/1.4.

---

## 9. Design Philosophy and Context

The AF-S NIKKOR 58mm f/1.4G is Nikon's spiritual successor to the Ai Noct-NIKKOR 58mm f/1.2, designed by Yoshiyuki Shimizu in 1977. Both lenses share the 58 mm focal length (a deliberate choice to ease back-focus constraints on the Gauss design) and prioritize sagittal coma correction for point-source rendering at wide apertures.

The 58mm f/1.4G's design philosophy — as noted by both Nikon's marketing and independent reviewers — deliberately retains some residual spherical aberration at f/1.4 to create a characteristic soft rendering wide open that sharpens progressively on stopping down. This is consistent with the patent's aberration curves (Figure 4), which show modest spherical aberration at full aperture. The design achieves this while aggressively correcting sagittal coma, which produces the lens's signature ability to render point light sources as clean points even at the field edges at f/1.4.

The inventor, Haruo Sato, is one of Nikon's optical designers associated with the "NIKKOR: The Thousand and One Nights" series. The 58mm f/1.4G represents his application of modern aspherical and high-index glass technology to the classical Gauss problem that Shimizu first attacked with a single hand-polished aspherical surface decades earlier.

---

## 10. Element Focal Lengths (Computed)

| Element | Type | Focal Length (mm) |
|---|---|---|
| La | Singlet | +91.0 |
| Lb1 | Cemented doublet | +134.3 |
| — Lb1p alone | Singlet | +59.8 |
| — Lb1n alone | Singlet | −99.0 |
| Lb2 | Singlet | −51.6 |
| Lc | Cemented doublet | −84.9 |
| — Lcn alone | Singlet | −22.3 |
| — Lcp alone | Singlet | +32.0 |
| Ld | Cemented triplet | +35.2 |
| — Ldp1 alone | Singlet | +37.1 |
| — Ldn alone | Singlet | −41.4 |
| — Ldp2 alone | Singlet | +38.6 |

---

## Sources

1. **JP 2013-019993 A** — Patent publication, Japan Patent Office (2013.01.31). Inventor: Sato Haruo. Assignee: Nikon Corporation.
2. **Nikon USA product specifications** — AF-S NIKKOR 58mm f/1.4G, nikonusa.com/p/af-s-nikkor-58mm-f14g/2210/overview.
3. **Nikon product page, AF-S NIKKOR 50mm f/1.4G** — "Although all lens groups shift during focusing, the lens barrel length does not change." imaging.nikon.com.
4. **cameragossip.github.io** — Nikon Nikkor Lens Patent Database, last updated September 2025.
5. **DPReview** — "Nikon AF-S Nikkor 58mm f/1.4G review," dpreview.com (2013).
6. **NikonForums** — "AF-S Nikkor 58mm F1.4G Review": "Focusing is not internal, so at the minimum focusing distance, the front element moves forward by about one centimeter."
7. **Thom Hogan (DSLRBodies)** — "Nikon 58mm f/1.4G AF-S Lens Review."
8. **Nikon "NIKKOR — The Thousand and One Nights"** — Tale 16 (Ai Noct-NIKKOR 58mm f/1.2), Tale 40 (Nikkor-S Auto 5.8cm f/1.4). imaging.nikon.com.
9. **OHARA Optical Glass Catalog** — Glass identification reference (S-LAH58, S-LAH64, S-LAL14, S-FSL5, S-TIH11, S-TIH4, S-NBM51).
10. **Schott Optical Glass Catalog** — Glass identification reference (N-LAK14, FK5, N-SF8, N-SF10, N-LASF44, KZFS2).
11. **Sumita Optical Glass Catalog** — Glass identification reference (K-LaKn2).

---

## Revision History

- **v2 (current):** Corrected glass identification for La/Ldp2 — removed incorrect "LASF35" attribution (νd mismatch of 4.7 units), replaced with Sumita K-LaKn2 / HIKARI E-LAF7 / OHARA S-LAH55. Corrected Ldp1 glass identification from "same as Lcp" to OHARA S-LAH64 (distinct catalog entry from S-LAH58). Added computed focus extension data (Section 6). Added semi-diameter estimation methodology (Section 8). Added element focal length table (Section 10). Added conic constant convention note throughout.
- **v1:** Initial analysis from patent JP2013-019993A Example 2.

---

*Analysis prepared from patent JP2013-019993A Example 2 with independent numerical verification via paraxial ray trace. Glass identifications are inferential based on nd/νd catalog matching and should not be taken as confirmed production glass types. The production lens may differ from the patent example in details including the cemented/air-spaced status of the Lb1 doublet and the precise aspherical coefficients.*
