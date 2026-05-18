# Minolta MD Rokkor 45mm f/2 — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** US 4,277,149
**Inventor:** Kunihiko Konoma
**Assignee:** Minolta Camera Kabushiki Kaisha, Osaka, Japan
**Priority:** JP 52/108249, September 7, 1977
**Filed:** September 5, 1978
**Granted:** July 7, 1981
**Title:** Modified Gauss Type Lens System
**Embodiment analyzed:** Embodiment 7 (Table 7)

The prescription used is **Embodiment 7** (Table 7), the final and most refined example in the patent. The identification with the production Minolta MD Rokkor 45mm f/2 rests on the following convergent evidence:

1. **Element/group count.** The patent describes a 5-group, 6-element modified Gauss type. The production lens is 6 elements in 5 groups — an exact match.
2. **Aperture.** Embodiment 7 specifies F/2.0, matching the production lens.
3. **Field angle.** The patent states 2ω = 51.4°, yielding an image circle of approximately 43.3 mm at f = 45 mm — just sufficient to cover the 35 mm format diagonal (43.27 mm).
4. **Back focal distance.** The patent's defining innovation is BFD > 75% of focal length. Embodiment 7 achieves BFD = 80.1%, which at 45 mm focal length gives 36.1 mm — adequate for the Minolta SR mount (43.5 mm flange distance) with the rear element protruding approximately 7.4 mm behind the lens mount plane into the mirror box.
5. **Patent timing.** Priority date September 1977; the MD Rokkor 45mm f/2 entered production in 1978.
6. **Assignee.** Minolta Camera Kabushiki Kaisha — the manufacturer of the production lens.
7. **Embodiment 7 is the most refined variant.** It is the only embodiment in the patent with N₄ = 1.6398 (a lighter flint for the negative doublet element), and it uses N₅ = 1.7545 (a higher-index lanthanum crown for the cemented positive), distinguishing it from the other six embodiments. This glass-pair refinement is consistent with a final production selection.

The patent does not specify a particular focal length; all dimensions are normalized to f = 1.0. The scale factor to the production 45 mm focal length is 45.003×.

## Optical Architecture

The Minolta MD Rokkor 45mm f/2 is a **modified Gauss type** — specifically, a 5-group, 6-element variant in which the rear cemented doublet of the classical 4-group double-Gauss is retained, but the front cemented doublet is split into two separated singlets (L2 and L3). This split-front modification is the structural signature of the design and is the basis of the patent's claims.

The group structure from object to image is:

- **Group 1 (L1):** Positive meniscus, convex to object. Front collector element.
- **Group 2 (L2):** Positive meniscus, convex to object. Field-flattening and coma-control element.
- **Group 3 (L3):** Negative meniscus, convex to object. The principal diverging element of the front half.
- **Aperture stop** — located in the large air gap between L3 and L4. The patent does not specify the exact axial position of the diaphragm within this gap; the stop is placed at the midpoint of d₆ in the data file, inferred from the FIG. 1 cross-section drawing.
- **Group 4 (L4 + L5):** Cemented doublet, meniscus-shaped, concave toward the object. L4 is negative, L5 is positive. This is the only cemented group in the system.
- **Group 5 (L6):** Positive biconvex element. The principal converging element of the rear half and the primary contributor to the long back focal distance.

The power distribution follows a **positive–positive–negative | stop | weakly-negative–positive** pattern. The front half (Groups 1–3 combined) has a long focal length of approximately +156 mm, while the rear half (Groups 4–5 combined) has a focal length of approximately +42 mm. This asymmetric distribution — weak front, strong rear — is the key to achieving the patent's 80% BFD-to-EFL ratio. By concentrating converging power in the rear half, the system maintains a long lever arm from the last surface to the focal plane while still achieving f = 45 mm overall.

The total optical path (front vertex of L1 to rear vertex of L6) is 26.1 mm; the BFD is 36.1 mm. The total track from the front glass vertex to the image plane is 62.2 mm, giving a total-track-to-EFL ratio of 1.38. This ratio exceeds unity because the BFD alone (36.1 mm) accounts for 58% of the total track — a direct consequence of the asymmetric power distribution required to clear the SLR mirror. The design is not retrofocus in the architectural sense (it retains the Gauss-type positive–negative–positive symmetry about the stop), but the BFD constraint imposes a penalty on overall compactness similar to what a retrofocus wide-angle would experience.

The design is entirely spherical. No aspherical surfaces are used.

## Element-by-Element Analysis

### L1 — Positive Meniscus, Convex to Object (Group 1)

nd = 1.7810, νd = 44.5. Glass: Minolta proprietary lanthanum flint (781/445 class; nearest catalog equivalent: Ohara S-LAH52). f = +53.9 mm.

L1 is the front collector. Its front surface (R = +37.5 mm) carries the strongest single-surface power in the front half of the system (φ₁ = 0.938 normalized), bending the incoming collimated rays sharply inward. The rear surface (R = +332.8 mm) is nearly flat, contributing only a weak negative correction (φ₂ = −0.106). The meniscus shape — deep convex front, nearly flat rear — is chosen to minimize the angle of incidence on the front surface at full aperture, reducing higher-order spherical aberration at the entrance. The high refractive index (nd = 1.781) further reduces the required curvature for a given power, keeping the surface contributions to spherical aberration and coma manageable.

The patent (Condition 6) requires N₁ > 1.71. At 1.781, L1 comfortably exceeds this threshold. The lanthanum flint glass family provides the high index with moderate dispersion (νd = 44.5), avoiding the heavy chromatic contribution that would accompany a conventional dense flint of similar index.

### L2 — Positive Meniscus, Convex to Object (Group 2)

nd = 1.7495, νd = 50.1. Glass: Minolta proprietary lanthanum crown (750/501 class; nearest catalog equivalent: Hoya LAC14). f = +67.6 mm.

L2 is a strongly curved meniscus with both radii positive (R₁ = +19.5 mm, R₂ = +29.3 mm). In the classical 4-group double-Gauss, the second element would be cemented to the third to form a front achromatic doublet. Here, L2 is separated from L3 by a 1.35 mm air gap (d₄ = 0.03 normalized). This separation is the patent's primary structural innovation: it provides the designer with an additional degree of freedom — the air space d₄ — which is used to balance coma and astigmatism independently of the chromatic correction at the cemented interface that no longer exists.

L2 carries significant positive power (f = +67.6 mm) and, together with L1, forms the positive front group that gathers light and directs it toward the stop. Its lanthanum crown glass (νd = 50.1) is the highest-dispersion crown in the system, placing it in the "achromatic bridge" role: its positive chromatic contribution partially offsets the negative contribution of the high-dispersion flint L3 that follows immediately behind it.

### L3 — Negative Meniscus, Convex to Object (Group 3)

nd = 1.7006, νd = 30.1. Glass: Minolta proprietary dense flint (700/301 class; nearest catalog equivalent: Hoya FD4 or Ohara S-TIM25). f = −28.6 mm.

L3 is the strongest individual element in the system by absolute power. Its front surface (R = +69.6 mm) is gently curved, while its rear surface (R = +15.4 mm) is strongly convex — producing a meniscus whose concave-side power greatly exceeds its convex-side power, yielding a short negative focal length. This element is the "diverger" of the front half and plays three critical roles:

1. **Petzval sum correction.** L3's strong negative power (φ = −1.589 normalized) generates a large negative contribution to the Petzval sum, offsetting the positive contributions of L1 and L2. The system's computed Petzval sum is 0.180 (normalized), giving a Petzval radius of approximately 250 mm — adequate for a flat field over the 35 mm format.

2. **Spherical aberration balance.** The rear surface of L3 (r₆) faces the aperture stop across the system's largest air gap (d₆ = 9.14 mm). The strongly curved r₆, combined with the strongly curved r₇ of L4 on the other side, forms a **diverging air lens** — the signature element of the double-Gauss architecture. This air lens introduces higher-order spherical aberration that balances the under-correction of the outer positive elements.

3. **Chromatic over-correction.** With νd = 30.1, L3 is the most dispersive glass in the system. Its negative power and low Abbe number produce a large negative φ/νd contribution (−0.053), which over-corrects the chromatic aberration relative to the positive elements. This over-correction is balanced by the rear group.

### The Central Air Gap — Diverging Air Lens

Between the rear surface of L3 (r₆ = +15.4 mm) and the front surface of L4 (r₇ = −13.0 mm), there is a 9.14 mm air gap containing the aperture stop. This gap functions as a strongly diverging "air lens" — both bounding surfaces curve inward toward the optical axis, creating a concave air space. The ratio r₆/|r₇| = 1.187, falling within the patent's Condition 4 range of 1.0–1.5. The patent's Condition 5 further constrains |r₇| to lie between 0.2f and 0.35f; at |r₇| = 0.289f, Embodiment 7 falls exactly in this range.

This air lens is the Petzval-correcting heart of the Gauss design. Its surfaces carry no glass — but they define the boundary between the high-index media of L3 and L4 and the air at the stop. The refraction at these two surfaces generates most of the system's coma and astigmatism correction, and the precise control of the r₆/r₇ ratio is the mechanism by which the designer achieves a long back focal distance without losing field-quality control.

### L4 — Negative Meniscus, Concave to Object (Group 4, Front Element of Cemented Doublet)

nd = 1.6398, νd = 35.3. Glass: Minolta proprietary medium flint (640/353 class; nearest catalog equivalent: Ohara S-TIM28 / Schott F7, with Δνd ≈ 0.8). f = −24.9 mm.

L4 is the front (negative) component of the cemented doublet that constitutes Group 4. Its front surface (r₇ = −13.0 mm) is the most strongly curved surface in the entire system, carrying a surface power of φ = −2.213 (normalized). This surface is the primary source of negative spherical aberration in the rear group and, together with r₆ across the air gap, forms the diverging air lens described above.

The rear surface of L4 (r₈ = −73.0 mm) is the cemented interface with L5. Its weak curvature means that relatively little chromatic correction occurs at the cement junction — unlike the classical Gauss design, where the cemented interface carries a heavy achromatizing burden. Instead, the chromatic correction is distributed across the separated front elements (L2 and L3) and the strong rear surfaces.

L4 uses a medium flint glass (νd = 35.3) with a moderate refractive index (nd = 1.6398). This is the lowest-index glass in the system — a deliberate choice. The patent notes that the average index of the positive elements (N₁, N₂, N₅, N₆) must exceed 1.72 (Condition 3), but places no such requirement on the negative elements L3 and L4. A lower refractive index on a negative element is favorable for Petzval sum correction: for a thin negative lens in air, the Petzval contribution scales as φ/n, so lower n amplifies the negative contribution to the sum, helping flatten the field.

### L5 — Positive Meniscus, Concave to Object (Group 4, Rear Element of Cemented Doublet)

nd = 1.7545, νd = 50.1. Glass: Minolta proprietary lanthanum crown (755/501 class; no exact catalog match — Δnd = +0.005 from nearest Hoya LAC14). f = +30.0 mm.

L5 is the positive component of the cemented doublet and the second-strongest individual element in the system (f = +30.0 mm). Its front surface is the cemented junction with L4 (R = −73.0 mm, weakly curved), while its rear surface (R = −17.7 mm) is strongly concave — producing a meniscus that bulges toward the image. This rear surface carries the doublet's principal converging power (φ₂ = +1.922 normalized).

L5 uses a high-index lanthanum crown (nd = 1.7545) with νd = 50.1. This Abbe number is identical to that of L2, though the refractive index differs by Δnd = 0.005. Whether these represent distinct glass melts or manufacturing variants of the same base composition is not determinable from the patent. In either case, the shared Abbe number simplifies the chromatic balancing: L2 and L5, both positive and both at νd = 50.1, form a symmetric pair of achromatic partners across the stop, bracketing the two high-dispersion flint elements (L3 at νd = 30.1, L4 at νd = 35.3).

The cemented doublet L4+L5 has a combined focal length of approximately −535 mm — very weakly negative. This means the doublet functions almost as a corrector plate rather than a power element: it contributes nearly zero net power but carries enormous surface powers at r₇ and r₉ that shape the aberration profile. The heavy lifting of converging the light is left to L6.

### L6 — Biconvex Positive (Group 5)

nd = 1.6968, νd = 55.5. Glass: Minolta proprietary lanthanum crown (697/555 class; nearest catalog equivalent: Hoya LAC9 or Ohara S-LAL14 — essentially exact match). f = +44.7 mm.

L6 is the final and arguably most critical element. It is the only biconvex element in the system, with a nearly flat front surface (R = +622 mm) and a strongly concave rear surface (R = −32.8 mm). The rear surface carries nearly all of L6's converging power (φ₂ = 0.957 normalized), directing the rays toward the focal plane 36.1 mm behind the last glass vertex.

The patent highlights the unusual configuration of L6: unlike conventional modified Gauss designs, where |r₁₀| < |r₁₁| (the front surface of the last element is more strongly curved than the rear), this design has |r₁₀| > |r₁₁| — the rear surface is the strongly curved one. The patent's opening design description states this explicitly as a defining characteristic of the system. This reversal concentrates L6's converging power on its rear surface, where the marginal ray height is lower (the beam has already begun converging through the doublet), reducing the angle of incidence and thereby limiting the higher-order spherical aberration that would result from a strongly curved front surface at this position in the optical train. The nearly flat front surface (R = +622 mm) acts as a weak corrector rather than a refracting power surface.

L6 uses the least dispersive glass in the system (νd = 55.5), consistent with its role as the final converging element. A low-dispersion crown at the rear minimizes the chromatic blur introduced at the surfaces closest to the image plane, where residual chromatic aberration has the largest impact on image quality.

## Glass Identification and Selection

Minolta was one of the few Japanese camera manufacturers that produced its own optical glass, melting custom formulations at the company's Mukogawa factory near Osaka. The glass indices and Abbe numbers in the patent therefore represent Minolta proprietary melts, not off-the-shelf catalog glasses. The nearest catalog equivalents are identified below for reference, but the actual production glasses may differ in their detailed dispersion characteristics (partial dispersion, thermal coefficients) from any public catalog entry.

| Element | nd | νd | Six-Digit Code | Nearest Catalog Match | Vendor | Δnd | Δνd | Glass Family |
|---------|------|------|----------------|----------------------|--------|------|------|-------------|
| L1 | 1.7810 | 44.5 | 781/445 | S-LAH52 | OHARA | 0.000 | −0.05 | Lanthanum flint |
| L2 | 1.7495 | 50.1 | 750/501 | LAC14 | HOYA | 0.000 | +0.10 | Lanthanum crown |
| L3 | 1.7006 | 30.1 | 700/301 | FD4 / S-TIM25 | HOYA / OHARA | +0.001 | +0.05 | Dense flint |
| L4 | 1.6398 | 35.3 | 640/353 | S-TIM28 / F7 | OHARA / Schott | 0.000 | +0.80 | Medium flint |
| L5 | 1.7545 | 50.1 | 755/501 | (no exact match) | — | — | — | Lanthanum crown |
| L6 | 1.6968 | 55.5 | 697/555 | LAC9 / S-LAL14 | HOYA / OHARA | 0.000 | −0.03 | Lanthanum crown |

The glass palette reveals a deliberate chromatic correction strategy:

- **Two dispersion classes.** The six elements separate into two groups by Abbe number: the four positive-power elements (L1 at νd = 44.5; L2 and L5 at νd = 50.1; L6 at νd = 55.5) occupy the moderate-to-low dispersion range (νd = 44–56), while the two negative-power elements (L3 at νd = 30.1; L4 at νd = 35.3) are high-dispersion flints (νd = 30–36). This clean separation — every positive element is lower-dispersion than every negative element — is the classic achromatization pattern, and it extends across both halves of the system.

- **Distributed achromatization.** Unlike a simple achromatic doublet where one crown and one flint are cemented, this design distributes the chromatic correction across the full lens. The thin-lens chromatic sum Σ(φ/νd) = −0.027, indicating a slight over-correction of axial chromatic aberration at the d-line. This small residual is a common design choice for fast normal lenses, where a trace of over-correction at the paraxial level helps balance the chromatic variation of spherical aberration at full aperture.

- **High-index strategy.** The average refractive index of the four positive elements is (1.781 + 1.7495 + 1.7545 + 1.6968)/4 = 1.745, comfortably exceeding the patent's Condition 3 threshold of 1.72. High-index glass allows the designer to achieve the required power with gentler curvatures, reducing surface contributions to aberrations. The patent emphasizes that this condition is essential for simultaneously reducing spherical aberration, controlling the Petzval sum, and minimizing coma flare.

- **Lanthanum-based glass dominance.** Four of the six elements (L1, L2, L5, L6) use lanthanum-containing glass (lanthanum flints or lanthanum crowns), while the two negative-power elements (L3 and L4) use conventional dense and medium flint glasses. Lanthanum glasses offer high refractive indices with moderate-to-low dispersion — a combination unavailable in conventional barium crowns or dense flints. Minolta's in-house glass-melting capability was a significant competitive advantage here, as proprietary lanthanum formulations could be optimized for specific refractive-index/dispersion targets without the constraints of a commercial catalog.

- **L5 is the most unusual glass.** At nd = 1.7545, νd = 50.1, L5 has no exact match in any major public catalog. The nearest candidate is Hoya LAC14 (nd = 1.74950, νd = 50.00), which is a reasonable class equivalent but carries a residual of Δnd = +0.005 — outside the tolerance for a confident identification. L5 shares its Abbe number with L2 (both at νd = 50.1) but has a higher refractive index (Δnd = +0.005). In Embodiments 1 and 2, L2 and L5 use identical glass (both N₂ = N₅ = 1.7495); the deliberate index split in Embodiment 7 suggests a final production refinement — holding dispersion constant while adjusting the index to control the monochromatic aberrations (spherical, coma, Petzval) at the cemented junction without disturbing the chromatic balance. This kind of fine-tuning is characteristic of a manufacturer with in-house glass-melting capability.

## Focus Mechanism

The Minolta MD Rokkor 45mm f/2 is a **unit-focus** design: the entire optical assembly translates forward along the optical axis to focus on closer objects, while the image plane (film) remains fixed. This is the simplest and most common focus mechanism for standard-length SLR lenses of this era.

The minimum focus distance is **0.6 m** (approximately 2 feet), as published in Minolta's product specifications. The patent does not provide variable-spacing data for close focus — only the infinity prescription is tabulated. At unit focus, the only parameter that changes is the back focal distance: as the lens assembly moves forward, the distance from the rear vertex of L6 to the film plane increases from 36.1 mm (infinity focus) to a longer value at MFD. At 0.6 m object distance for a 45 mm lens, the required extension is approximately:

$$\Delta = \frac{f^2}{d_o - f} \approx \frac{45^2}{600 - 45} \approx 3.6 \text{ mm}$$

The focusing ring on the production lens provides approximately 3.6 mm of helicoid travel. The 5-blade aperture stops down to f/16. The lens uses a 49 mm filter thread — the Minolta MD standard for compact primes.

## Aspherical Surfaces

The design is **entirely spherical**. No aspherical surfaces are used on any element. The patent makes no mention of aspherical coefficients, and none of the seven embodiments employ aspheres.

This is consistent with the patent's date (priority 1977) and the production lens's price positioning as a kit lens. Glass-molded aspheres were not yet common in consumer SLR lenses in the late 1970s; polished aspheres would have been prohibitively expensive for a lens positioned as a compact, affordable standard prime. The optical designer achieved the required aberration correction entirely through the selection of glass types, the separation of the front doublet, and the careful control of the central air-lens geometry.

## Aberration Correction Strategy

The patent text describes the conditional expressions governing the design and their roles in aberration correction. All eight conditions are satisfied by Embodiment 7:

| Condition | Requirement | Embodiment 7 Value | Role |
|-----------|------------|---------------------|------|
| (1) | 2.8f < f₁₂₃ < 10f | 3.47f | Controls BFD via front-group power |
| (2) | 0.25 < (d₁+d₂+d₃+d₄+d₅)/Σd < 0.35 | 0.341 | Constrains front-group compactness |
| (3) | (N₁+N₂+N₅+N₆)/4 > 1.72 | 1.745 | Reduces SA, Petzval sum, coma |
| (4) | 1.0 < r₆/\|r₇\| < 1.5 | 1.187 | Controls air-lens divergence and BFD |
| (5) | 0.2f < \|r₇\| < 0.35f | 0.289f | Constrains SA at the inner air-lens surface |
| (6) | N₁, N₂ > 1.71 | 1.781, 1.750 | Enables SA correction with gentle curvatures |
| (7) | 30 < ν₁, ν₂, ν₅, ν₆ < 56 | 44.5, 50.1, 50.1, 55.5 | Chromatic correction of positive elements |
| (8) | 28 < ν₃, ν₄ < 40 | 30.1, 35.3 | Chromatic correction of negative elements |

The patent's aberration diagrams for Embodiment 7 (Figs. 9a–9c) show well-corrected spherical aberration at F/2 with a gentle S-shaped residual, astigmatism under 0.005f, and distortion below 1%. The meridional and sagittal coma plots (shown only for Embodiment 1 in Fig. 3, but stated to be similar across all embodiments) show controlled coma flare at field angles up to ω = 25.7°.

## Semi-Diameter Estimation Notes

The patent does not provide semi-diameters. The data file estimates clear apertures from the marginal and chief-ray envelope, then caps the central air-lens surfaces where the renderer's cross-gap sag policy is binding. In particular, the L4 front surface (r7) is limited to 9.9 mm so the strongly curved r6/r7 pair remains within the default 90% intrusion threshold across the stop gap.

## Verification Summary

Independent paraxial ray trace (ABCD matrix method, 11 surfaces) confirms:

| Parameter | Patent Value | Computed Value | Status |
|-----------|-------------|---------------|--------|
| EFL (normalized) | 1.000 | 0.9999 | ✓ Match |
| BFD (normalized) | 0.8014 | 0.8014 | ✓ Exact |
| Σd | 0.5807 | 0.5807 | ✓ Exact |
| F-number | 2.0 | 2.0 (design) | ✓ Match |
| 2ω | 51.4° | 51.4° (stated) | ✓ Match |

All eight patent conditional expressions are independently verified as satisfied.

## Design Heritage and Context

The Minolta MD Rokkor 45mm f/2 occupies a unique position in the history of SLR standard lenses. Its design addresses a specific engineering problem that constrained every SLR lens designer of the era: the swinging reflex mirror requires a back focal distance far longer than the 65–70% of EFL that a classical Gauss design naturally provides. For a 50 mm f/2, the typical BFD is 33–35 mm, which was workable with the long flange distances of early SLR mounts. But at 45 mm focal length, a 70% BFD would yield only 31.5 mm — inadequate for mirror clearance. Konoma's innovation was to push the BFD to 80% of EFL by weakening the front group and strengthening the rear, accepting the telephoto-ratio penalty (total track 62.2 mm for a 45 mm lens) in exchange for a compact and manufacturable all-spherical design.

The patent's prior-art citations include the Tronnier Ultron (US 2,627,204, 1953) — a 4-component modified Gauss design that pioneered the split-inner-unit approach — and several Japanese patents from the 1950s–1970s exploring related configurations. The Tronnier Ultron achieves a BFD of approximately 70% of EFL (Example II: paraxial intersectional width = 0.6972f), consistent with the Konoma patent's observation that conventional modified Gauss designs are limited to BFD < 75% of EFL. Konoma's key distinguishing feature, as stated in the patent text, is the reversal of the r₆/|r₇| ratio at the central air lens: conventional designs have r₆/|r₇| < 1, while the present design requires r₆/|r₇| > 1 (Condition 4). This reversal redistributes the aberration contributions at the most optically active surfaces in the system and, in combination with the weakened front group (Condition 1) and the high-index glass selection (Condition 3), enables the 80% BFD that the Ultron and its derivatives could not achieve.

The production MD Rokkor 45mm f/2 was manufactured in a single version (MD mount, never updated to MD III specifications) from approximately 1978 onward. It was offered as a kit lens with entry- and mid-level Minolta bodies (XG-series, X-700) and distinguished itself by its compact size (approximately 31 mm barrel length, 125 g, 49 mm filter thread) and solid optical performance, particularly from f/2.8 onward. Among vintage-lens users, it has remained a well-regarded compact standard prime.

## Sources

1. US 4,277,149. "Modified Gauss Type Lens System." Kunihiko Konoma, assigned to Minolta Camera Kabushiki Kaisha. Filed September 5, 1978; granted July 7, 1981.
2. Minolta Camera Co., Ltd. Product specifications: MD Rokkor 45mm 1:2. Published in Minolta lens catalogs, c. 1979–1985.
3. Minolta Camera Co., Ltd. Sales brochure excerpt on in-house optical glass production (mid-1970s), referenced via Vintage Camera Digest archival material.
4. US 2,627,204. "Four-Component Gauss-Type Photographic Objective of High Light-Transmitting Capacity." Albrecht W. Tronnier, assigned to Voigtländer & Sohn AG (1953) — cited as prior art in US 4,277,149.
