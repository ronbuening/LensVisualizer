# Canon New FD 50mm f/1.2 — Optical Analysis

**Patent:** US 4,364,643
**Inventor:** Kikuo Momiyama
**Assignee:** Canon Inc. (Canon Kabushiki Kaisha, Tokyo)
**Japanese priority:** JP 54-67047, May 30, 1979
**Filed:** May 28, 1980
**Granted:** December 21, 1982
**Embodiment analyzed:** Embodiment 3 (FIG. 3, claim 4; 7 elements in 6 groups, all spherical)

---

## 1. Identification and Product Context

The Canon New FD 50mm f/1.2 (non-L) is a deformed double-Gauss standard lens for Canon's FD-mount SLR system, marketed from December 1980. It should not be confused with the contemporaneous New FD 50mm f/1.2 **L**, which is a more complex 8-element design incorporating aspherical and floating elements under a separate patent. The non-L variant covered here is the more affordable of the two, relying entirely on spherical surfaces and conventional glass to achieve its f/1.2 aperture.

Canon Camera Museum specifications confirm the production lens parameters:

| Parameter | Value |
|---|---|
| Construction | 7 elements in 6 groups |
| Maximum aperture | f/1.2 |
| Minimum aperture | f/16 |
| Angle of view | 46° |
| Minimum focus distance | 0.5 m |
| Maximum magnification | 0.13× |
| Filter diameter | 52 mm |
| Diaphragm blades | 8 |
| Dimensions | 65.3 × 45.6 mm |
| Weight | 315 g |

The patent presents three numerical examples, all sharing the same 7-in-6 topology at f/1.2 with a 46° field. All three embodiments satisfy the patent's nine conditions and share the same element/group count, so the topology alone does not discriminate between them. However, the identification of Embodiment 3 as the production design is corroborated by Marco Cavina's independent analysis (NOC Sensei, January 2025), which identifies Embodiment 3 as the design put into serial production and provides specific glass supplier identifications consistent with its prescription.

## 2. Aspherical Surfaces

**There are none.** The patent makes no mention of aspherical surfaces anywhere in its text, claims, or numerical examples. All thirteen optical surfaces in Embodiment 3 are spherical. This is a key differentiator from the New FD 50mm f/1.2 L, which employs at least one aspherical element to improve wide-open spherical aberration correction. The all-spherical constraint of the non-L design explains both its lower production cost and the residual softness commonly observed at f/1.2 — a characteristic well documented in user reports and comparative reviews.

## 3. Prescription Summary

The patent normalizes all data to f = 1 (F.No. 1:1.2, 2ω = 46°). The published Embodiment 3 rows trace to a paraxial focal length of 1.000022, so the data file multiplies every radius and spacing by one factor, s = 50 / 1.000022 = 49.9989, which places the computed effective focal length at 50.00 mm. All thirteen radii and twelve spacings reproduce the patent values times s to the stored 0.001 mm.

| Surface | R (mm) | d (mm) | nd | Element |
|---|---|---|---|---|
| R1 | +41.184 | 5.908 | 1.78800 | L1 front |
| R2 | +298.388 | 0.145 | 1.0 (air) | L1 rear |
| R3 | +27.334 | 4.319 | 1.78800 | L2 front |
| R4 | +42.617 | 1.773 | 1.0 (air) | L2 rear |
| R5 | +84.266 | 2.228 | 1.66680 | L3 front |
| R6 | +17.725 | 15.594 | 1.0 (air) | L3 rear |
| — | *(diaphragm)* | — | — | *(in D6 gap)* |
| R7 | −18.209 | 1.646 | 1.80518 | L4 front |
| R8 | −1568.136 | 7.007 | 1.77250 | L4–L5 junction |
| R9 | −29.365 | 0.145 | 1.0 (air) | L5 rear |
| R10 | −197.48 | 5.036 | 1.86300 | L6 front |
| R11 | −36.002 | 0.145 | 1.0 (air) | L6 rear |
| R12 | +118.686 | 3.099 | 1.77250 | L7 front |
| R13 | −238.176 | (BFD) | 1.0 (air) | L7 rear |

**Computed BFD:** 35.38 mm. Total vertex-to-vertex track: 47.05 mm. Total optical length (to image): 82.43 mm.

**Diaphragm.** The patent text places a diaphragm between the third and fourth components but gives no spacing. FIG. 3 draws it at 0.49 ± 0.02 of the D6 air space, so the data file splits D6 evenly (7.797 mm on each side). The drawn iris half-opening, about 13.3 mm, is close to the 13.8 mm at which the exact f/1.2 marginal ray crosses that plane.

**Semi-diameters.** The patent publishes no clear apertures. The data file's values for the front three surfaces and the two surfaces facing the stop are estimates that agree with FIG. 3 within 5 %. The rear group (surfaces 8–13) follows the FIG. 3 rims — about 16.8 mm for L4, 17.7 mm for L5, 18.6 mm for L6 and 17.1 mm for L7 at the 50 mm scale — and was checked against an exact f/1.2 axial ray trace, which needs 16.8 to 18.4 mm there. The rear elements are therefore nearly as tall as L2, as the patent drawing shows.

**A limit inside the published prescription.** With the published R4, R5 and D4, the air space between L2 and L3 closes at a height of 16.86 mm (0.337 f): beyond that height the two glass surfaces would intersect. The f/1.2 marginal ray crosses R4 and R5 at about 17.4 mm (0.347 f), so the numerical example as printed passes an on-axis beam of roughly f/1.24 rather than a full f/1.2. FIG. 3 draws L2 and L3 touching at their rims, which is consistent with an edge-contact mounting, but the drawing is not dimensionally exact there. The data file sets both surfaces to 16.6 mm, just inside the contact height. This is a derived geometric result, not a statement in the patent.

## 4. Element-by-Element Analysis

### 4.1 Element L1 — Front Positive Meniscus (1st Component)

| Property | Value |
|---|---|
| Surfaces | R1 = +41.18, R2 = +298.39 |
| Shape | Positive meniscus, convex toward object |
| Glass | nd = 1.788, νd = 47.4 — **Lanthanum special flint** [788474] |
| Catalog match | OHARA S-LAH64 catalog equivalent (data file); Cavina attributes the legacy OHARA LASF014 type; HOYA TAF4 and Schott N-LAF21 share the coordinate |
| Thick-lens focal length | +60.0 mm |

L1 is a steeply curved positive meniscus that serves as the primary light-gathering element. Its relatively high refractive index (1.788) is essential to the patent's core strategy: maintaining a low Petzval sum despite the strong positive power needed at f/1.2. The surface pair contributes moderate positive spherical aberration (Σ I = +0.67) while providing substantial positive Petzval contribution (+0.46), consistent with its role as a collecting element.

### 4.2 Element L2 — Second Positive Meniscus (2nd Component)

| Property | Value |
|---|---|
| Surfaces | R3 = +27.33, R4 = +42.62 |
| Shape | Positive meniscus, convex toward object (steeper curvatures than L1) |
| Glass | nd = 1.788, νd = 47.4 — same glass as L1 |
| Thick-lens focal length | +86.0 mm |

L2 shares the same lanthanum special flint glass as L1 and continues the positive-power front group. Its steeper curvatures (R3 is the smallest radius in the front group) generate significant coma and astigmatism contributions, but these are intentionally balanced against the rear group. The surface pair's astigmatism contribution (Σ III = +1.10) is large but deliberately introduced; the patent's conditions (6) and (7) control how this front-group astigmatism interacts with the central air gap to achieve flat-field correction.

### 4.3 Element L3 — Negative Meniscus (3rd Component)

| Property | Value |
|---|---|
| Surfaces | R5 = +84.27, R6 = +17.73 |
| Shape | Negative meniscus, convex toward object |
| Glass | nd = 1.6668, νd = 33.0 — **Dense flint** [667330] |
| Catalog match | OHARA S-TIM39 catalog equivalent (1.66680 / 33.05); production supplier unspecified |
| Thick-lens focal length | −34.1 mm |

L3 is the most optically critical element in the front group and the subject of patent condition (5): n3 < 1.67. This is a deliberately *low*-index glass for a negative element — counterintuitive in a design that otherwise maximizes refractive index everywhere. The patent explains the rationale: using a comparatively low refractive index in L3 improves the Petzval sum by reducing the negative Petzval contribution's magnitude relative to what a higher-index flint would produce. The surface at R6 (+17.73 mm) is the sharpest curvature in the entire front group and generates the largest negative spherical aberration in the front half (I = −0.60 at surface 6), serving as the front group's primary SA corrector.

Together with the preceding surface R4 (L2 rear), R5 forms a strong diverging air lens in the gap between the 2nd and 3rd components (patent condition 8 governs the combined refracting power of surfaces R4 and R5). This air lens is essential for both astigmatism correction and maintaining sufficient back focal distance for SLR mirror clearance.

### 4.4 Elements L4 + L5 — Cemented Doublet (4th Component)

| Property | L4 (negative) | L5 (positive) |
|---|---|---|
| Surfaces | R7 = −18.21, R8 = −1568.14 | R8 = −1568.14, R9 = −29.37 |
| Shape | Negative meniscus, convex toward image | Positive meniscus, convex toward image |
| Glass | nd = 1.80518, νd = 25.4 — **SF6-type dense flint** [805254] | nd = 1.7725, νd = 49.6 — **Lanthanum special flint** [773496] |
| Catalog match | Schott SF6 catalog equivalent (data file); Cavina attributes an OHARA SF6-type glass; HOYA FD60 shares the coordinate | OHARA S-LAH66 catalog equivalent (data file); Cavina attributes the legacy OHARA LASF016 type; Schott N-LAF34 shares the coordinate |
| Thick-lens focal length | −22.9 mm | +38.7 mm |
| Doublet focal length | −81.7 mm (net negative) |

This cemented doublet is the heart of the design's aberration correction. The junction surface R8 is nearly flat (R = −1568 mm), meaning the doublet's chromatic correction relies almost entirely on the index and dispersion differences between L4 and L5 rather than on junction surface curvature.

**L4 (the negative element)** has the largest single-surface spherical aberration contribution in the entire system: I = −1.76 at surface R7. This surface is the primary corrector for the system's spherical aberration. The glass choice — a dense flint with νd = 25.4, governed by patent condition (4): ν4 < 26 — provides the high dispersion needed to compensate the chromatic under-correction that inevitably accompanies the all-high-index positive element strategy.

**L5 (the positive element)** uses the same lanthanum special flint glass as L7 (nd = 1.7725, νd = 49.6). Its positive Petzval contribution (+0.74) partially offsets L4's large negative Petzval term (−1.22), while the doublet as a whole remains net negative in power (fl = −81.7 mm), maintaining the diverging function required at this position in the double-Gauss architecture.

### 4.5 Element L6 — Rear Positive Meniscus (5th Component)

| Property | Value |
|---|---|
| Surfaces | R10 = −197.48, R11 = −36.00 |
| Shape | Positive meniscus, convex toward image |
| Glass | nd = 1.863, νd = 41.5 — **Lanthanum special flint (high-index)** [863415] |
| Catalog match | LASFN13 coefficient-backed equivalent; production supplier unspecified |
| Thick-lens focal length | +50.3 mm |

L6 is the most remarkable element in the design and the subject of patent condition (3): 1.85 < n6. At nd = 1.863, this is the highest refractive index glass in the system, and the patent explicitly identifies it as essential for correcting both spherical aberration and off-axis halo simultaneously.

Surface R11 (−36.00 mm) generates the second-largest positive spherical aberration in the system (I = +1.48), opposing the large negative SA from R7 (−1.76). Together, these two surfaces are the dominant SA-generating pair in the design, though their net contribution (−0.28) leaves a substantial residual that the remaining eleven surfaces must compensate. Patent condition (9) — 0.68f < |R11| < 0.73f — tightly controls the curvature of this surface to maintain proper SA and coma correction.

The high refractive index of the glass allows this surface to achieve the required SA correction at a moderate curvature (R11 = −36.0 mm = 0.720f), where a lower-index glass would need a steeper curve that would introduce unacceptable higher-order aberrations at f/1.2.

### 4.6 Element L7 — Rear Biconvex (6th Component)

| Property | Value |
|---|---|
| Surfaces | R12 = +118.69, R13 = −238.18 |
| Shape | Biconvex positive |
| Glass | nd = 1.7725, νd = 49.6 — same glass as L5 |
| Thick-lens focal length | +102.9 mm |

L7 is a weakly powered biconvex element that serves as the final collecting element before the image plane. Its rear surface R13 contributes notable positive SA (I = +0.67), adding a third balancing term to the SA budget. The element's weak power and gentle curvatures minimize its contribution to higher-order aberrations while providing a final adjustment to the image plane position and residual field curvature.

## 5. Glass Strategy

The glass selection follows a coherent strategy that the patent codifies in conditions (1) through (5):

**Positive elements (L1, L2, L5, L6, L7):** All use high-refractive-index glass (mean nd = 1.797). The patent requires this mean to exceed 1.75 (condition 1) and the mean Abbe number to exceed 45 (condition 2). This combination — high index with moderate dispersion — is the hallmark of lanthanum-containing optical glasses. The high refractive index directly reduces the Petzval sum by lowering the surface curvatures needed to achieve a given optical power, while the moderate dispersion prevents excessive chromatic aberration.

**Negative elements (L3, L4):** These serve complementary roles. L3 uses an intentionally low-index dense flint (nd = 1.667, condition 5: n3 < 1.67) to improve the Petzval sum by reducing its negative Petzval magnitude. L4 uses a high-dispersion dense flint (νd = 25.4, condition 4: ν4 < 26) to provide the chromatic correction that the low-dispersion positive elements cannot self-correct.

The use of only five distinct glass types across seven elements — with L1 = L2 and L5 = L7 — reflects a pragmatic manufacturing approach that simplifies inventory and quality control.

### Glass Identification Summary

| Element(s) | nd | νd | 6-Digit Code | Data-file catalog equivalent | Cavina's attribution | Family |
|---|---|---|---|---|---|---|
| L1, L2 | 1.78800 | 47.4 | 788474 | OHARA S-LAH64 (1.78800 / 47.37) | OHARA LASF014 | Lanthanum special flint |
| L3 | 1.66680 | 33.0 | 667330 | OHARA S-TIM39 (1.66680 / 33.05) | — | Dense flint |
| L4 | 1.80518 | 25.4 | 805254 | Schott SF6 (1.80518 / 25.43) | OHARA SF6 type | Dense flint |
| L5, L7 | 1.77250 | 49.6 | 773496 | OHARA S-LAH66 (1.77250 / 49.60) | OHARA LASF016 | Lanthanum special flint |
| L6 | 1.86300 | 41.5 | 863415 | LASFN13 (1.86300 / 41.59) | — | Lanthanum special flint |

The patent lists only nd and νd; it names no glass and no supplier. Cavina attributes several production glasses to historical OHARA types. For chromatic tracing, the data file uses coefficient-backed catalog glasses whose nd and νd match the patent pairs, and treats those names as optical equivalents rather than as production identities.

## 6. Aberration Budget

The patent provides complete third-order (Seidel) aberration coefficients for Embodiment 3. Its legend labels column II "astigmatic" and column III "coma", but the printed values satisfy III = II² / I surface by surface (surface 1: 0.1266² / 0.4410 = 0.0363), which identifies II as coma and III as astigmatism. The usual assignment is used below. The system totals are:

| Coefficient | Symbol | Sum | Interpretation |
|---|---|---|---|
| Spherical aberration | Σ I | +0.109 | Small residual positive (under-corrected) |
| Coma | Σ II | +0.030 | Well corrected |
| Astigmatism | Σ III | −0.043 | Small residual negative |
| Petzval sum | Σ P | +0.178 | Moderate (good for f/1.2) |
| Distortion | Σ V | +0.283 | Moderate barrel |

### Spherical Aberration Balancing

The dominant SA contributions occur at two surfaces: R7 (L4 front, I = −1.76) and R11 (L6 rear, I = +1.48). These are the largest individual SA contributors in the system by a wide margin, and they substantially offset each other, but their net contribution is −0.28 — not near zero. The remaining eleven surfaces collectively contribute +0.39 to bring the system total to Σ I = +0.11. Secondary contributors include R13 (+0.67), R6 (−0.60), and R5 (−0.56). The small net positive residual represents the deliberate under-correction that produces the characteristic soft "glow" at f/1.2 — a conscious design trade-off in an all-spherical system. Higher-order spherical aberration, not captured by these third-order coefficients, would add further to the wide-open softness.

### Petzval Sum

The Petzval sum of 0.178 (normalized to f) is well controlled for an f/1.2 design. The primary negative Petzval contributors are R7 (−1.22) and R6 (−1.13), balanced against the distributed positive contributions from the five positive elements. The patent's high-index glass strategy is directly responsible for this result: a design using conventional glasses (nd ≈ 1.6–1.7) for the positive elements would produce a Petzval sum roughly 40–50% larger.

## 7. Focusing Mechanism

The patent does not specify any variable air spacings or internal focusing groups. Combined with the simple 7-in-6 topology and the absence of any floating-element mechanism (which is explicitly noted as a feature of the *L* variant), this confirms that the Canon New FD 50mm f/1.2 uses **unit focusing** — the entire optical assembly translates forward along the optical axis to focus on closer objects.

At the minimum focus distance of 0.5 m (measured from the film plane), thick-lens analysis using the ABCD-derived principal plane positions yields a focus extension of 6.15 mm and a magnification of 0.123×, close to Canon's published specification of 0.13×. This close-focus state is calculated; the patent publishes no finite-distance data. The principal planes of this design are crossed — the rear principal plane H' lies 12.4 mm in front of the front principal plane H — a common configuration in compact double-Gauss lenses that significantly affects the conjugate geometry relative to a thin-lens approximation.

Unit focusing is the simplest and most common approach for standard lenses of this era. Its primary disadvantage is degraded off-axis performance at close focus distances, since the design is optimized for infinity. The L variant addressed this limitation by incorporating floating elements that adjust internal air spacings during focusing.

## 8. Optical Architecture — Double-Gauss Lineage

The design follows the classic deformed (modified) double-Gauss architecture that has been the dominant form for fast standard lenses since the 1920s. The layout is symmetric about the central air gap (D6) and diaphragm:

**Front group (converging):** L1 (+) → L2 (+) → L3 (−)
**Central air gap with diaphragm**
**Rear group (converging):** L4–L5 cemented (−) → L6 (+) → L7 (+)

The near-symmetry about the stop provides natural correction of odd-order aberrations (coma, distortion, lateral color), while the thick meniscus elements flanking the stop (L3 and L4–L5) provide the strong diverging surfaces needed to control spherical aberration and Petzval curvature.

Momiyama's contribution relative to prior double-Gauss designs lies in the specific glass distribution strategy — codified in the nine patent conditions — which achieves a favorable Petzval sum while maintaining manageable chromatic aberration despite the extreme aperture of f/1.2. The key insight is the asymmetric treatment of the two negative elements: L3 uses a deliberately low-index glass to improve Petzval sum (sacrificing some chromatic correction at that position), while L4 compensates with a high-dispersion glass to restore overall chromatic balance.

## 9. Design Limitations

As an all-spherical f/1.2 design from 1979, the lens operates at the edge of what spherical optics can achieve. The principal limitations are:

**Wide-open softness:** The residual under-corrected spherical aberration (Σ I = +0.11), combined with higher-order SA not captured in the third-order analysis, produces noticeable softness and reduced contrast at f/1.2. This was the primary motivation for Canon's parallel development of the aspherical L variant.

**No floating elements:** Unit focusing means off-axis performance degrades at close distances. The large central air gap (D6 = 15.6 mm) is fixed during focusing, so the careful balance of aberration coefficients established for infinity is progressively disturbed as the lens extends.

**Vignetting:** The f/1.2 aperture with a 52 mm filter thread implies tight mechanical margins, particularly at the front elements. Inside the lens the L2–L3 rim contact described in Section 3 is the tightest point for the axial beam. Marginal ray heights at R1 exceed 20.8 mm, while the 52 mm filter thread limits the maximum clear aperture to roughly 24 mm semi-diameter — leaving minimal room for off-axis ray bundles at the extreme field angles. This manifests as the significant wide-open vignetting noted in user reports.

Despite these limitations, the design represents a carefully optimized solution within its constraints. Stopped to f/2 or smaller, the lens performs at a level consistent with its lanthanum-glass optical quality, and the Petzval sum of 0.178 delivers flat-field results that many simpler designs cannot match even at smaller apertures.

---

*Analysis based on US 4,364,643 Embodiment 3. All numerical values independently verified by paraxial ray trace (ABCD matrix method). Catalog glass names provide compatible dispersion curves and do not establish production suppliers. Aberration coefficients are as published in the patent. The identification of Embodiment 3 as the production design is corroborated by Cavina's independent analysis but not confirmed by Canon directly.*
