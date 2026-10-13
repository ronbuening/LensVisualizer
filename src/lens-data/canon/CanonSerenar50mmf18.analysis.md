# Canon Serenar 50mm f/1.8 — Optical Analysis

**Patent:** US 2,681,594  
**Inventor:** Hiroshi Ito  
**Assignee:** Canon Camera Company, Ltd.  
**Filed:** June 29, 1951 (priority: Japan, November 7, 1950)  
**Granted:** June 22, 1954  
**Embodiment analyzed:** Sole numerical example (description table, repeated verbatim in claim 3)  
**Marketed:** November 1951 (Canon Camera Museum)

---

## 1. Overview

The Canon Serenar 50mm f/1.8 is a six-element, four-group modified Gauss (double-Gauss) design for 35mm rangefinder cameras in Leica Thread Mount (M39). It was designed by Hiroshi Ito, who had recently joined Canon (then Precision Optical Industry Co., Ltd.). Canon's Camera Museum records that the preceding Serenar 50mm f/1.9, while "well received," suffered from "lackluster performance at the maximum aperture" caused by coma inherent to Gauss-type lenses. Ito developed a novel correction method to address this weakness, and the resulting f/1.8 design became what Canon describes as "a famous standard lens in the modern optics history." Ito went on to become a central figure in Canon's optical engineering, and his design principles — including guidelines such as "flare should be reduced even at maximum aperture, and blur should be uniform" — shaped Canon's lens philosophy through the FD era and beyond.

The lens has no aspherical surfaces — all ten optical surfaces are spherical. This is entirely expected for a 1950–51 design; aspherical surfaces in photographic objectives did not become practical until decades later.

The patent provides a single numerical example, printed in the description and repeated verbatim in claim 3, headed f = 1.00, F:1.8, with an including field of 46°. This analysis focuses exclusively on that example.

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

The patent heads its table f = 1.00. The prescription (identical in the description and in claim 3) is reproduced below:

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

The aperture stop is located in the air gap d₅ = 0.132: the text describes the concave faces r₅ and r₆ as "facing each other across the stop." The patent neither tabulates the stop position nor draws a diaphragm (the single figure shows glass only), so the diagram's mid-gap placement is a model choice consistent with classic Gauss-type practice.

### EFL Verification

A paraxial trace through the full prescription yields an EFL of 0.8973, about 10% shorter than the stated f = 1.00. Rounding of the printed values cannot account for a difference this large, and both printed copies of the table agree, so it is not a transcription slip between them. No plausible single-digit misprint restores f = 1.00 either: the only single-value change found that does so is d₈ = 0.203 instead of 0.003, which the patent figure contradicts (it draws d₈ as a hairline gap, far narrower than d₅). The discrepancy is therefore recorded as a source inconsistency rather than corrected.

The diagram scales every radius and thickness by 55.725, which puts the computed EFL at the production 50 mm (49.99 mm) and the back focal distance at 25.42 mm. At that scale the patent's 46° field reaches an image height of 21.2 mm, close to the 21.6 mm half-diagonal of the 35mm format.

### Semi-diameters

The patent publishes no clear apertures, so the diagram's semi-diameters are estimates. Their absolute size is set by the exact f/1.8 marginal ray (it reaches 13.9 mm at the front surface, carried with 15.5 mm), and the proportions between elements follow the rim heights drawn in the patent figure: L1, the front doublet, the rear doublet and L6 stand roughly 1 : 0.84 : 0.74 : 0.83. The figure draws the two stop-facing concave surfaces (r₅ and r₆) ending inside a bevel well short of their elements' outer rims, and the diagram keeps that step. With these rims the full 23° chief ray clears every surface; the rear doublet and L6 had previously been drawn too small for it to pass.

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

This is the front compound meniscus, concave toward the image side. The overall group is a negative meniscus with a thick-lens focal length of approximately −74.4 mm (at 50 mm scale).

#### L2: Biconvex Positive

| Property | Value |
|---|---|
| Surfaces | r₃ = +0.3570, r₄ = −2.100 (junction) |
| Glass | nd = 1.6261, νd = 39.1 |
| Thickness | d = 0.145 |
| Element focal length | +27.8 mm (at 50 mm scale) |
| Glass match | **CDGM H-BaF8 catalog equivalent** (code 626/391); the patent does not identify the production supplier. This is not modern HOYA BAFD7, which is a different 702/412 glass. |

L2 is the convex component of the front cemented doublet. Its front surface r₃ has the strongest converging power of any surface in the entire system (φ₃ = +1.754), making it the primary bending surface for the incoming beam. The glass has a moderate refractive index with relatively low Abbe number (νd = 39.1), placing it in the barium dense flint family. The public CDGM H-BaF8 row carries the same 626391 code and reproduces the patent coordinate closely, so it supplies the coefficient-backed spectral model without asserting the 1950 production supplier. The current HOYA BAFD7 catalog row is not this material; it is nd = 1.70154, νd = 41.15.

#### L3: Biconcave Negative

| Property | Value |
|---|---|
| Surfaces | r₄ = −2.100 (junction), r₅ = +0.2410 |
| Glass | nd = 1.7400, νd = 28.2 |
| Thickness | d = 0.044 |
| Element focal length | −16.2 mm (at 50 mm scale) |
| Glass match | **OHARA S-TIH3** (nd = 1.74000, νd = 28.30 against the patent's 28.2) — coefficient-backed catalog equivalent |

L3 is the concave component of the front doublet, and it is the single most critical element in the patent's innovation. Its glass has the highest refractive index in the entire system (nd = 1.7400), and the patent's central claim depends on this fact.

**The patent's key innovation:** In a conventional Gauss-type lens, the two concave surfaces flanking the stop (r₅ and r₆) carry nearly the entire burden of correcting axial spherical aberration. Ito observed that r₆ (the concave surface of the rear doublet facing the stop) overcorrects oblique spherical aberration (coma) for intermediate field angles. His solution was to transfer part of the spherical aberration correction from r₆ to the cemented interface r₄ of the front doublet. He accomplished this by giving L3 a refractive index markedly higher than L2 — a difference of Δnd = +0.1139, well above the 0.05 minimum specified in the claims. This large index step at the junction gives r₄ significant refracting power for spherical aberration correction, a task it did not carry in prior Gauss-type designs where the index difference at cemented interfaces was small and served mainly for chromatic correction.

The rear surface r₅ = +0.2410 is the most powerful diverging surface in the system. Together with the junction, L3 provides the strong negative power needed to create the Gauss-type air gap and to flatten the Petzval field.

### Aperture Stop

The stop sits in the air gap d₅ = 0.132 between Groups II and III, the characteristic location for a double-Gauss design. The patent does not draw it; the centered position in the diagram is a model choice.

### Group III — Cemented Doublet: L4 (biconcave) + L5 (biconvex)

This is the rear compound meniscus, concave toward the object side. The overall group is weakly positive, with a thick-lens focal length of approximately +192.9 mm (at 50 mm scale).

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
| Glass match | **SUMITA K-SK18** (nd = 1.63854, νd = 55.5) — coefficient-backed catalog equivalent to historical Schott SK18; patent supplier unspecified |

L5 is the convex component of the rear doublet. It provides the dominant positive power in Group III. Its historical SK18-type coordinate is modeled with coefficient-backed SUMITA K-SK18 without claiming that SUMITA supplied the patent glass. This dense barium crown has moderately high index and low dispersion. Notably, the Abbe number difference between L4 and L5 is only Δνd ≈ 1.0 — far too small for effective achromatization. This confirms that the rear doublet's cemented interface serves primarily for the Petzval balancing and spherical aberration redistribution described in the patent, rather than for chromatic correction. The large Δnd of 0.137 between L4 and L5 drives the refractive power at the junction, while chromatic correction for the rear half of the system is carried primarily by the curvatures and air spacings rather than by the cemented interface.

**Interface curvature:** The cemented surface r₇ = +0.4380 is convex toward the object side, as required by the patent claims. Claim 1 bounds the two interfaces relative to the focal length (|r₄| between two and three times f, r₇ between 0.4 and 0.5 f), and claim 2 specifies that the ratio |r₄|/|r₇| should be "substantially 5 to 1." The actual ratio is 2.100/0.438 = 4.79, close to the claimed 5:1. This ratio controls the balance of spherical aberration correction between the two cemented interfaces.

### Group IV — L6: Biconvex Positive

| Property | Value |
|---|---|
| Surfaces | r₉ = +1.700, r₁₀ = −1.257 |
| Glass | nd = 1.6385, νd = 55.5 |
| Thickness | d = 0.070 |
| Element focal length | +63.7 mm (at 50 mm scale) |
| Glass match | **SUMITA K-SK18** (nd = 1.63854, νd = 55.5) — same catalog-equivalent model as L5 |

L6 is the rear collector, a weakly biconvex positive element using the same K-SK18 catalog-equivalent model as L5. Its role is to provide the final convergence needed to form the image. Its relatively gentle curvatures (compared to the inner elements) minimize the introduction of higher-order aberrations at the edge of the system. Using the same historical glass coordinate as L5 simplifies manufacturing logistics — a practical consideration that early Japanese lens makers were attentive to.

---

## 4. Petzval Sum and Field Curvature

The surface-by-surface Petzval sum computes to approximately +0.414 (normalized), corresponding to a Petzval field radius of roughly 135 mm at the 50 mm production focal length. This is a moderately undercorrected Petzval sum (the field curves toward the lens), which is typical for double-Gauss designs of this era at f/1.8. The patent's asymmetric index strategy — high-index concave in the front doublet, low-index concave in the rear — was specifically designed to manage this sum. Without the low-index L4, the Petzval sum would be substantially larger, producing more pronounced field curvature.

---

## 5. Focus Mechanism

The Canon Serenar 50mm f/1.8 uses **unit focusing**: the entire optical assembly moves axially as a rigid unit, with only the back focal distance changing. This is standard for rangefinder lenses of this era and is consistent with the patent, which does not describe any internal focusing groups or floating elements. The Canon Camera Museum lists a minimum focusing distance of 1.0 m (approximately 3.3 ft). The patent publishes no close-focus state; in the diagram the whole lens moves 2.77 mm forward to focus an object 1.0 m from the film plane (magnification about 1:18). That extension is calculated from the scaled prescription, not a patent or factory value.

---

## 6. Aspherical Surfaces

**There are none.** All ten optical surfaces in the design are spherical. The patent makes no mention of aspherical surfaces, conic constants, or polynomial deformation terms. This is consistent with the state of optical manufacturing in 1950–51, when aspherical surfaces were extraordinarily difficult and expensive to produce for photographic lenses. The entire aberration correction strategy relies on the choice of glass types, curvature distribution, and the innovative use of the cemented interface r₄ — all achieved with spherical surfaces alone.

---

## 7. Glass Summary

| Element | nd | νd | 6-Digit Code | Best Catalog Match | Match Quality |
|---|---|---|---|---|---|
| L1 | 1.6204 | 60.3 | 620/603 | Schott SK16 | Exact |
| L2 | 1.6261 | 39.1 | 626/391 | CDGM H-BaF8 catalog equivalent; supplier unspecified | Code-backed |
| L3 | 1.7400 | 28.2 | 740/282 | OHARA S-TIH3 (1.74000/28.30) | Excellent |
| L4 | 1.5014 | 56.5 | 501/565 | Schott K10 (1.5014/56.4) | Excellent |
| L5 | 1.6385 | 55.5 | 639/555 | SUMITA K-SK18 catalog equivalent (1.63854/55.5) | Coefficient-backed equivalent |
| L6 | 1.6385 | 55.5 | 639/555 | SUMITA K-SK18 catalog equivalent (1.63854/55.5) | Coefficient-backed equivalent |

All six elements now resolve to coefficient-backed catalog rows within 1×10⁻⁴ in nd and 0.1 in νd of the patent pair. L5 and L6 use SUMITA K-SK18 as the public spectral model for the patent's historical SK18 coordinate without asserting the production supplier. L3 uses OHARA S-TIH3. L2 uses CDGM H-BaF8, which carries the same 626/391 code; modern HOYA BAFD7 is a different 702/412 glass. The patent names no glasses or suppliers; these are modern catalog designations, and the specific glass names available in 1950 would have differed.

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

*Analysis based on US Patent 2,681,594 (Ito, 1954); Canon Camera Museum product pages for the Serenar 50mm f/1.8 I and Canon II C camera; and independent paraxial ray trace verification. Glass identifications are inferred from nd/νd matching against public Schott, OHARA, CDGM, and SUMITA catalogs. Modern catalog designations identify equivalent glass families but may not reflect the specific trade names used in 1950. Production volume estimates from Kitchingman (2008).*
