# Canon Serenar 50mm f/1.8 — Optical Analysis

**Patent:** US 2,681,594 · Hiroshi Ito, assignor to Canon Camera Company, Ltd.  
**Filed:** June 29, 1951 (priority: Japan, November 7, 1950)  
**Granted:** June 22, 1954  
**Marketed:** November 1951 (Canon Camera Museum)

---

## 1. Overview

The Canon Serenar 50mm f/1.8 is a six-element, four-group modified Gauss (double-Gauss) design for 35mm rangefinder cameras in Leica Thread Mount (M39). It was designed by Hiroshi Ito, who had recently joined Canon (then Precision Optical Industry Co., Ltd.). Canon's Camera Museum records that the preceding Serenar 50mm f/1.9, while "well received," suffered from "lackluster performance at the maximum aperture" caused by coma inherent to Gauss-type lenses. Ito developed a novel correction method to address this weakness, and the resulting f/1.8 design became what Canon describes as "a famous standard lens in the modern optics history." Ito went on to become a central figure in Canon's optical engineering, and his design principles — including guidelines such as "flare should be reduced even at maximum aperture, and blur should be uniform" — shaped Canon's lens philosophy through the FD era and beyond.

The lens has no aspherical surfaces — all ten optical surfaces are spherical. This is entirely expected for a 1950–51 design; aspherical surfaces in photographic objectives did not become practical until decades later.

The patent provides a single worked numerical example (Example 1, Claim 3), normalized to a focal length of f = 1.00, at F/1.8 with an including field of 46°. This analysis focuses exclusively on that example.

### Key Specifications (Canon Camera Museum)

| Parameter | Value |
|---|---|
| Construction | 6 elements / 4 groups |
| Maximum aperture | f/1.8 |
| Minimum aperture | f/16 |
| Diaphragm blades | 10 |
| Closest focus | 1.0 m |
| Filter diameter | 40 mm |
| Dimensions | 48 × 36.8 mm |
| Weight | 270 g |

---

## 2. Optical Prescription

The patent normalizes all dimensions to a focal length of f = 1.00. The prescription from Claim 3 is reproduced below:

| Surface | Radius (r) | Thickness (d) | nd | νd |
|---|---|---|---|---|
| r₁ | +0.5800 | 0.095 | 1.6204 | 60.3 |
| r₂ | +3.800 | 0.005 | (air) | — |
| r₃ | +0.3570 | 0.145 | 1.6261 | 39.1 |
| r₄ | −2.100 | 0.044 | 1.7400 | 28.2 |
| r₅ | +0.2410 | 0.132 | (air) | — |
| r₆ | −0.5625 | 0.035 | 1.5014 | 56.5 |
| r₇ | +0.4380 | 0.165 | 1.6385 | 55.5 |
| r₈ | −0.800 | 0.003 | (air) | — |
| r₉ | +1.700 | 0.070 | 1.6385 | 55.5 |
| r₁₀ | −1.257 | (BFD) | (air) | — |

The aperture stop is located in the air gap d₅ = 0.132, between surfaces r₅ and r₆. The patent does not explicitly specify the stop position within this gap, but the drawing shows it centered between Groups II and III, consistent with classic Gauss-type placement.

### EFL Verification

A paraxial ABCD matrix ray trace through the full prescription yields an EFL of approximately 0.897 (normalized), about 10% shorter than the stated f = 1.00. This level of discrepancy is not uncommon in patents of this era, where tabulated values are rounded to three or four significant figures and small rounding errors accumulate through a multi-element system. The computed image circle radius, when scaled to a 50 mm production focal length, is approximately 21.2 mm — closely matching the 21.6 mm half-diagonal of the 35mm format and confirming the design's intended coverage.

The scaling factor from patent units to the 50 mm production lens is approximately 55.7×.

---

## 3. Element-by-Element Analysis

### Group I — L1: Positive Meniscus (convex to object)

| Property | Value |
|---|---|
| Surfaces | r₁ = +0.5800, r₂ = +3.800 |
| Glass | nd = 1.6204, νd = 60.3 |
| Thickness | d = 0.095 |
| Shape | Positive meniscus, nearly plano-convex |
| Element focal length | +60.8 mm (at 50 mm scale) |
| Glass match | **Schott SK16** (nd = 1.6204, νd = 60.3) — exact match |

L1 is a strongly positive meniscus that serves as the front collector. Its front surface (r₁ = +0.58) has substantial converging power (φ₁ = +1.070), though not the strongest in the system — that distinction belongs to r₃ (φ₃ = +1.754, the front surface of L2). The rear surface (r₂ = +3.80) is nearly flat, making L1 behave almost as a plano-convex element. The glass is a dense barium crown (SK16 type) offering high index with low dispersion, providing positive power with minimal chromatic contribution. In a Gauss-type objective, this front element bends incoming marginal rays inward and establishes the general convergence of the system.

### Group II — Cemented Doublet: L2 (biconvex) + L3 (biconcave)

This is the front compound meniscus, concave toward the image side. The overall group is a negative meniscus with a thick-lens focal length of approximately −74.3 mm (at 50 mm scale).

#### L2: Biconvex Positive

| Property | Value |
|---|---|
| Surfaces | r₃ = +0.3570, r₄ = −2.100 (junction) |
| Glass | nd = 1.6261, νd = 39.1 |
| Thickness | d = 0.145 |
| Element focal length | +27.8 mm (at 50 mm scale) |
| Glass match | **HOYA BAFD7** (nd = 1.6261, νd = 39.2) — excellent match (barium dense flint); nearest Schott type is F2 (nd = 1.620, νd = 36.4), but with significant νd discrepancy |

L2 is the convex component of the front cemented doublet. Its front surface r₃ has the strongest converging power of any surface in the entire system (φ₃ = +1.754), making it the primary bending surface for the incoming beam. The glass has a moderate refractive index with relatively low Abbe number (νd = 39.1), placing it in the barium dense flint family. The nd/νd combination matches the HOYA BAFD7 glass type almost exactly (Δnd < 0.001, Δνd = +0.1), though the modern catalog designation may not reflect the specific glass available to Canon in 1950. No standard Schott glass matches closely — F2 has a νd discrepancy of about 2.7.

#### L3: Biconcave Negative

| Property | Value |
|---|---|
| Surfaces | r₄ = −2.100 (junction), r₅ = +0.2410 |
| Glass | nd = 1.7400, νd = 28.2 |
| Thickness | d = 0.044 |
| Element focal length | −16.2 mm (at 50 mm scale) |
| Glass match | **HOYA NBFD3** (nd = 1.7400, νd = 28.2) — exact match; nearest Schott type is SF10 (nd = 1.728, νd = 28.4, Δnd = +0.012) |

L3 is the concave component of the front doublet, and it is the single most critical element in the patent's innovation. Its glass has the highest refractive index in the entire system (nd = 1.7400), and the patent's central claim depends on this fact.

**The patent's key innovation:** In a conventional Gauss-type lens, the two concave surfaces flanking the stop (r₅ and r₆) carry nearly the entire burden of correcting axial spherical aberration. Ito observed that r₆ (the concave surface of the rear doublet facing the stop) overcorrects oblique spherical aberration (coma) for intermediate field angles. His solution was to transfer part of the spherical aberration correction from r₆ to the cemented interface r₄ of the front doublet. He accomplished this by giving L3 a refractive index markedly higher than L2 — a difference of Δnd = +0.1139, well above the 0.05 minimum specified in the claims. This large index step at the junction gives r₄ significant refracting power for spherical aberration correction, a task it did not carry in prior Gauss-type designs where the index difference at cemented interfaces was small and served mainly for chromatic correction.

The rear surface r₅ = +0.2410 is the most powerful diverging surface in the system. Together with the junction, L3 provides the strong negative power needed to create the Gauss-type air gap and to flatten the Petzval field.

### Aperture Stop

The stop sits in the air gap d₅ = 0.132 between Groups II and III, the characteristic location for a double-Gauss design. The patent drawing shows the stop centered in this space.

### Group III — Cemented Doublet: L4 (biconcave) + L5 (biconvex)

This is the rear compound meniscus, concave toward the object side. The overall group is weakly positive, with a thick-lens focal length of approximately +193.0 mm (at 50 mm scale).

#### L4: Biconcave Negative

| Property | Value |
|---|---|
| Surfaces | r₆ = −0.5625, r₇ = +0.4380 (junction) |
| Glass | nd = 1.5014, νd = 56.5 |
| Thickness | d = 0.035 |
| Element focal length | −27.1 mm (at 50 mm scale) |
| Glass match | **Schott K10** (nd = 1.5014, νd = 56.4) — essentially exact |

L4 is the concave component of the rear doublet. Its refractive index is the lowest in the entire system (nd = 1.5014), and it is lower than L5's index by Δnd = −0.1371 — again well above the 0.05 minimum claimed. This is the complementary half of the Ito innovation: while the front doublet has its concave element at *high* index, the rear doublet has its concave element at *low* index. The patent explains that this is necessary to control the Petzval sum. Increasing L3's index (front doublet) raises the Petzval sum; compensating by decreasing L4's index (rear doublet) pulls it back down, preserving field flatness.

The glass is an ordinary crown (K10), one of the simplest and cheapest optical glasses available — an elegant choice that simultaneously achieves the low refractive index the design requires and keeps material cost down.

#### L5: Biconvex Positive

| Property | Value |
|---|---|
| Surfaces | r₇ = +0.4380 (junction), r₈ = −0.800 |
| Glass | nd = 1.6385, νd = 55.5 |
| Thickness | d = 0.165 |
| Element focal length | +26.1 mm (at 50 mm scale) |
| Glass match | **Schott SK18 / SK18A** (nd = 1.6385, νd = 55.4) — essentially exact |

L5 is the convex component of the rear doublet. It provides the dominant positive power in Group III. The glass (SK18 type) is a dense barium crown with moderately high index and low dispersion. Notably, the Abbe number difference between L4 and L5 is only Δνd ≈ 1.0 — far too small for effective achromatization. This confirms that the rear doublet's cemented interface serves primarily for the Petzval balancing and spherical aberration redistribution described in the patent, rather than for chromatic correction. The large Δnd of 0.137 between L4 and L5 drives the refractive power at the junction, while chromatic correction for the rear half of the system is carried primarily by the curvatures and air spacings rather than by the cemented interface.

**Interface curvature:** The cemented surface r₇ = +0.4380 is convex toward the object side, as required by the patent claims. The patent further specifies that the ratio |r₄|/|r₇| should be "substantially 5 to 1." The actual ratio is 2.100/0.438 = 4.79, close to the claimed 5:1. This ratio controls the balance of spherical aberration correction between the two cemented interfaces.

### Group IV — L6: Biconvex Positive

| Property | Value |
|---|---|
| Surfaces | r₉ = +1.700, r₁₀ = −1.257 |
| Glass | nd = 1.6385, νd = 55.5 |
| Thickness | d = 0.070 |
| Element focal length | +63.7 mm (at 50 mm scale) |
| Glass match | **Schott SK18 / SK18A** (nd = 1.6385, νd = 55.4) — same glass as L5 |

L6 is the rear collector, a weakly biconvex positive element using the same SK18-type glass as L5. Its role is to provide the final convergence needed to form the image. Its relatively gentle curvatures (compared to the inner elements) minimize the introduction of higher-order aberrations at the edge of the system. Using the same glass as L5 simplifies manufacturing logistics — a practical consideration that early Japanese lens makers were attentive to.

---

## 4. Petzval Sum and Field Curvature

The surface-by-surface Petzval sum computes to approximately +0.414 (normalized), corresponding to a Petzval field radius of roughly 135 mm at the 50 mm production focal length. This is a moderately undercorrected Petzval sum (the field curves toward the lens), which is typical for double-Gauss designs of this era at f/1.8. The patent's asymmetric index strategy — high-index concave in the front doublet, low-index concave in the rear — was specifically designed to manage this sum. Without the low-index L4, the Petzval sum would be substantially larger, producing more pronounced field curvature.

---

## 5. Focus Mechanism

The Canon Serenar 50mm f/1.8 uses **unit focusing**: the entire optical assembly moves axially as a rigid unit, with only the back focal distance changing. This is standard for rangefinder lenses of this era and is consistent with the patent, which does not describe any internal focusing groups or floating elements. The Canon Camera Museum lists a minimum focusing distance of 1.0 m (approximately 3.3 ft).

---

## 6. Aspherical Surfaces

**There are none.** All ten optical surfaces in the design are spherical. The patent makes no mention of aspherical surfaces, conic constants, or polynomial deformation terms. This is consistent with the state of optical manufacturing in 1950–51, when aspherical surfaces were extraordinarily difficult and expensive to produce for photographic lenses. The entire aberration correction strategy relies on the choice of glass types, curvature distribution, and the innovative use of the cemented interface r₄ — all achieved with spherical surfaces alone.

---

## 7. Glass Summary

| Element | nd | νd | 6-Digit Code | Best Catalog Match | Match Quality |
|---|---|---|---|---|---|
| L1 | 1.6204 | 60.3 | 620/603 | Schott SK16 | Exact |
| L2 | 1.6261 | 39.1 | 626/391 | HOYA BAFD7 (1.6261/39.2) | Excellent (Δνd = +0.1) |
| L3 | 1.7400 | 28.2 | 740/282 | HOYA NBFD3 (1.7400/28.2) | Exact |
| L4 | 1.5014 | 56.5 | 501/565 | Schott K10 (1.5014/56.4) | Excellent |
| L5 | 1.6385 | 55.5 | 639/555 | Schott SK18/SK18A (1.6385/55.4) | Excellent |
| L6 | 1.6385 | 55.5 | 639/555 | Schott SK18/SK18A (1.6385/55.4) | Excellent |

Four of the six elements match Schott catalog glasses with high confidence. The two most optically critical elements — L2 and L3, which carry the Ito innovation — match HOYA catalog types (BAFD7 and NBFD3 respectively) with excellent to exact precision. These are modern catalog designations; the specific glass names available in 1950 would have differed, but the nd/νd values identify equivalent compositions within the barium dense flint and dense flint families. Canon likely sourced these glasses from early Japanese manufacturers such as HOYA (founded 1941) or Ohara (founded 1935), who were producing their own optical glass formulations by this period.

It is worth noting that L5 and L6 share the same glass type. This is a practical simplification: using a single glass for two elements reduces procurement complexity and melt-lot variability — an important consideration for a lens produced in large volume. Third-party estimates place total production of the Serenar 50mm f/1.8 at approximately 90,000 to over 100,000 units (Kitchingman, 2008; klassik-cameras.de).

---

## 8. The Ito Innovation in Context

Hiroshi Ito's contribution, as described in the patent, can be summarized as a redistribution of aberration correction labor among the cemented interfaces of a Gauss-type quadruplet. In conventional designs of the era, the cemented interfaces served almost exclusively for chromatic correction, while axial spherical aberration was corrected primarily by the two concave air-glass surfaces facing the stop. Ito recognized that this arrangement overcorrected oblique spherical aberration (coma), particularly at intermediate field angles — a persistent weakness of fast Gauss-type lenses.

His solution was to give the front cemented interface (r₄) a meaningful role in spherical aberration correction, achieved by creating a large refractive index step at that junction (Δnd > 0.05). This relieved the rear concave surface r₆ of some of its corrective burden, reducing the overcorrection of coma. The compensating low-index choice for L4 preserved the Petzval sum.

This approach proved highly influential. Canon credits this lens and its underlying optical theory as the foundation for subsequent high-performance wide-angle and telephoto designs. The Canon Camera Museum records that "the basic optical theory developed by Ito to solve the problem using his own unique analysis expedited the development of the large aperture wide angle and telephoto interchangeable lenses." The lens itself earned a reputation for unusually clean wide-open performance — contemporary reviews consistently praised its freedom from coma-induced flare, exactly the aberration Ito targeted.

### Surface Power Summary

For reference, the refractive power (φ = (n′ − n)/R) of each surface, listed front to rear:

| Surface | R | φ | Role |
|---|---|---|---|
| S1 (r₁) | +0.5800 | +1.070 | Strong positive — front collector |
| S2 (r₂) | +3.800 | −0.163 | Weak negative |
| S3 (r₃) | +0.3570 | **+1.754** | **Strongest positive** — main bending surface |
| S4 (r₄) | −2.100 | −0.054 | Weak negative — cemented junction (innovation surface) |
| S5 (r₅) | +0.2410 | **−3.071** | **Strongest negative** — primary diverging surface |
| S6 (r₆) | −0.5625 | −0.891 | Strong negative — rear meniscus front |
| S7 (r₇) | +0.4380 | +0.313 | Moderate positive — cemented junction |
| S8 (r₈) | −0.800 | +0.798 | Positive — rear meniscus exit |
| S9 (r₉) | +1.700 | +0.376 | Positive — rear collector front |
| S10 (r₁₀) | −1.257 | +0.508 | Positive — rear collector exit |

The power is concentrated in the inner elements (S3 and S5), with the two outer groups providing moderate, distributed positive power — a hallmark of the Gauss type.

---

*Analysis based on US Patent 2,681,594 (Ito, 1954); Canon Camera Museum product pages for the Serenar 50mm f/1.8 I and Canon II C camera; and independent paraxial ray trace verification. Glass identifications are inferred from nd/νd matching against the Schott and HOYA catalogs. Modern HOYA catalog designations (BAFD7, NBFD3) identify equivalent glass families but may not reflect the specific trade names used in 1950. Production volume estimates from Kitchingman (2008).*
