# Olympus Zuiko Auto-S 50mm f/1.2 — Optical Design Analysis

## US Patent 4,099,843 · Embodiment 6 · Toshihiro Imai (Olympus Optical Co., Ltd.)

Filed March 1, 1977 · Granted July 11, 1978 · Priority: Japan 51-22482 (March 2, 1976)

---

## 1. Overview

US Patent 4,099,843, titled *"Compact Large-Aperture Photographic Lens System with Long Back Focal Length,"* describes a modified Gauss-type photographic objective of six components in seven elements, designed for f/1.2 maximum aperture and a 46° full field of view. The patent contains six numerical embodiments. Embodiment 6 is the design most closely associated with the production **Olympus OM-System Zuiko Auto-S 50mm f/1.2**, released in 1982 as a replacement for the earlier 55mm G-Zuiko f/1.2. All prescription data in the patent are normalized to f = 100; the production lens scales all linear dimensions by a factor of 0.500 to achieve the marketed 50 mm focal length.

The design is **entirely spherical** — no aspherical surfaces are specified or implied anywhere in the patent text, claims, or figures. This is consistent with Olympus manufacturing capabilities and the state of the art for production SLR lenses in the late 1970s.

### Production specifications (manufacturer-published)

| Parameter | Value |
|---|---|
| Focal length | 50 mm |
| Maximum aperture | f/1.2 |
| Optical formula | 7 elements in 6 groups |
| Minimum focus distance | 0.45 m |
| Aperture blades | 8 |
| Aperture range | f/1.2 – f/16 |
| Filter thread | 49 mm |
| Dimensions | ∅66 × 43 mm |
| Weight | 288 g |
| Mount | Olympus OM bayonet |

---

## 2. Prescription — Embodiment 6

The following table presents the patent prescription at f = 100 normalization. All linear quantities (R, d, sd) scale by ×0.500 for the production 50 mm lens.

| Surface | R | d | nd | Component | Element |
|---|---|---|---|---|---|
| r₁ | +82.171 | 10.22 | 1.83481 (ν = 42.82) | L1 front | L1 |
| r₂ | +379.002 | 0.19 | air | L1 rear | — |
| r₃ | +54.883 | 10.78 | 1.83400 (ν = 37.19) | L2 front | L2 |
| r₄ | +81.410 | 2.88 | air | L2 rear | — |
| r₅ | +126.319 | 3.29 | 1.72825 (ν = 28.46) | L3 front | L3 |
| r₆ | +34.304 | 33.95 | air | L3 rear | — |
| — | *(stop)* | — | — | — | — |
| r₇ | −32.819 | 3.11 | 1.84666 (ν = 23.9) | L4a front | L4a |
| r₈ | −105.769 | 11.49 | 1.67790 (ν = 55.33) | cement | L4b |
| r₉ | −47.662 | 0.19 | air | L4b rear | — |
| r₁₀ | −163.417 | 10.95 | 1.77250 (ν = 49.6) | L5 front | L5 |
| r₁₁ | −57.517 | 0.19 | air | L5 rear | — |
| r₁₂ | +174.050 | 5.82 | 1.79952 (ν = 42.24) | L6 front | L6 |
| r₁₃ | −435.498 | (BFD) | air | L6 rear | — |

**Key patent values (f = 100):** Σd = 93.07, f_B = 74.62, f₂₃ = −133.2, f₄₅ = −144.0.

**Independently verified via paraxial ray trace (ABCD matrix):** EFL = 99.975 (Δ = 0.025), BFD = 74.621, f₂₃ = −133.16, f₄₅ = −144.06 — all within rounding tolerance of the patent values. Petzval sum = 0.1593 (patent: 0.159).

---

## 3. Aspherical Surfaces

**There are none.** The entire optical system is composed of spherical surfaces. The patent text makes no mention of aspherical coefficients, conic constants, or any polynomial sag corrections. This is confirmed by the absence of any aspherical specification in the patent's detailed numerical examples, the claims, and the abstract.

This places the Zuiko 50mm f/1.2 in the tradition of all-spherical large-aperture Gauss designs — a lineage that includes the Nikon Nikkor 50mm f/1.2 AI-S, Canon FD 50mm f/1.2L, and Pentax SMC-A 50mm f/1.2, all of which rely on high-index glass selection and careful balancing of Seidel aberrations rather than aspherical correction.

---

## 4. Optical Layout and Element Roles

The design is a modified Gauss (double-Gauss) type with the aperture stop located between the third and fourth lens components. The six components divide into a **front group** (L1, L2, L3 — ahead of the stop) and a **rear group** (L4, L5, L6 — behind the stop). This asymmetric split — three single elements in front, one cemented doublet plus two singlets behind — is a key distinguishing feature of Imai's design.

### 4.1 Front group

**Computed front group focal length: +340 mm (at f = 100).** The front group is weakly positive — far weaker than the rear group (+78 mm) — which is the source of the asymmetry that Imai exploits to push the back focal distance to f_B/f ≈ 0.75. In a standard double-Gauss, this ratio is typically about 0.70; Imai gains the extra margin by deliberately unbalancing the power distribution across the stop. Despite this asymmetry, the design remains telephoto-like in character (BFD < EFL), not retrofocus.

#### L1 — Positive meniscus, convex toward the object

| Property | Value |
|---|---|
| Shape | Meniscus (both R positive), convex toward object |
| Glass | n₁ = 1.83481, ν₁ = 42.82 |
| Focal length | +123.7 mm (at f = 100) |
| Thickness | 10.22 |

L1 serves as the primary collecting element. Its strong positive power gathers the wide f/1.2 cone of light while its meniscus form — steeply curved on the front face (R = 82.2) and gently curved on the rear (R = 379) — minimizes the angle of incidence at each surface, controlling spherical aberration. The use of a high-index lanthanum crown (nd ≈ 1.835) enables the strong curvature needed for power while keeping the surface angles moderate — a direct contributor to condition (7) of the patent, which requires 1.7 < n₁ < 1.86 to keep Petzval sum small through large radii of curvature.

#### L2 — Positive meniscus, convex toward the object

| Property | Value |
|---|---|
| Shape | Meniscus (both R positive), convex toward object |
| Glass | n₂ = 1.83400, ν₂ = 37.19 |
| Focal length | +170.5 mm (at f = 100) |
| Thickness | 10.78 |

L2 continues the positive power buildup with a weaker contribution than L1. Its more moderate curvature ratio (r₃/r₄ = 54.9/81.4 = 0.674) keeps spherical aberration contributions small while adding the refracting power needed for the overall system. In a conventional Gauss, L2 would be cemented to L3 as a doublet for chromatic correction. Here, Imai deliberately separates them with a thin air gap (d₄ = 2.88), creating an "air lens" that forms a critical part of his Petzval correction strategy.

The Abbe number of L2 (ν₂ = 37.19) is notably lower than L1's (ν₁ = 42.82), meaning L2 is more dispersive. This is intentional — it allows the L2–L3 pair to provide partial chromatic correction even without cementation, by arranging the air lens between surfaces r₄ and r₅ to have negative power.

#### L3 — Negative meniscus, convex toward the object

| Property | Value |
|---|---|
| Shape | Meniscus (both R positive), convex toward object |
| Glass | n₃ = 1.72825, ν₃ = 28.46 |
| Focal length | −65.7 mm (at f = 100) |
| Thickness | 3.29 |

L3 is a strongly negative element — the most powerful negative singlet in the front group — and plays several critical roles simultaneously. Its primary function is to overcorrect the spherical aberration that L1 and L2 undercorrect, a task accomplished by the steeply curved rear surface r₆ (R = 34.3, the shortest radius among all positive-valued radii in the system). Beyond aberration balancing, L3 is essential to Imai's Petzval sum strategy: the patent explicitly requires that L2 and L3 together form a negative lens (f₂₃ = −133.2), which contributes a negative Petzval term that counteracts the large positive contributions from L1.

The ratio r₅/r₄ = 126.3/81.4 = 1.552 satisfies the patent condition (5) requiring 1.5 < r₅/r₄ < 1.87, which ensures the air lens between L2 and L3 has adequate negative power. The airspace d₄ = 2.88 is kept small (< 0.05f = 5.0) so that the chromatic correction that would have been provided by a cemented surface is not entirely lost.

The glass choice — a titanium flint (TiF) with high dispersion (ν₃ = 28.46) and moderately high index (n₃ = 1.728) — is carefully selected to provide the negative Petzval contribution needed. A more conventional dense flint would have worked for chromatic correction but might not satisfy the index constraint of condition (7).

### 4.2 The air space and aperture stop

The gap d₆ = 33.95 (≈17 mm at production scale) between L3 and L4a contains the 8-blade iris diaphragm. This is the largest air space in the system, and the patent explicitly notes that it cannot be reduced below approximately (r₆ + r₇)/2 without degrading coma symmetry — a fundamental constraint of the Gauss-type geometry. The stop is approximately centered within this air space, as shown in Fig. 1 of the patent.

### 4.3 Rear group

**Computed rear group focal length: +77.8 mm (at f = 100).** The rear group is strongly positive — significantly stronger than the front group — which is how the design achieves its long back focal distance. The patent notes that the ratio f_B/f ≈ 0.75 is unusually high for a modified Gauss design (typical values are ≈0.70), and this requires the rear group to carry disproportionate refracting power.

#### L4 — Cemented meniscus doublet (L4a + L4b), concave toward the object

This is the only cemented component in the system and the most optically complex element group.

**L4a — Negative meniscus (front element of doublet)**

| Property | Value |
|---|---|
| Shape | Meniscus (both R negative), concave toward object |
| Glass | n₄ = 1.84666, ν₄ = 23.9 |
| Focal length | −57.3 mm (at f = 100, standalone) |
| Thickness | 3.11 |

**L4b — Positive meniscus (rear element of doublet)**

| Property | Value |
|---|---|
| Shape | Meniscus (both R negative), concave toward object |
| Glass | n₅ = 1.67790, ν₅ = 55.33 |
| Focal length | +118.5 mm (at f = 100, standalone) |
| Thickness | 11.49 |

**Combined doublet focal length: −144.1 mm (at f = 100).** The doublet as a whole is negative — a feature that is essential for Petzval correction but unusual in that the rear element (L4b) is much thicker than the front (L4a). This thickness ratio (11.49/3.11 ≈ 3.7) reflects the need for L4b to contribute substantial refracting power while maintaining manageable surface angles.

The cemented surface r₈ (R = −105.769) is concave toward the object and satisfies patent condition (2): 0.6f < −r₈ < 1.1f, i.e., 60 < 105.8 < 110. The patent states that this cemented surface "has negative power" — a statement best understood as referring to the doublet component's net negative focal length (f₄₅ = −144.0), since the refractive power of the cemented surface itself is weakly positive (φ₈ = (n₅ − n₄)/R₈ = +0.0016). The doublet's negative net power prevents undercorrection of chromatic aberration that would otherwise result from the strong rear-group asymmetry. The chromatic correction function of the cemented surface comes primarily from the large Abbe number difference across it (Δν = ν₅ − ν₄ = 31.4): light crossing from the dense flint (ν₄ = 23.9) into the crown (ν₅ = 55.33) experiences a sharp change in dispersion that counterbalances color errors accumulated elsewhere in the system.

The glass pairing — a very dense titanium flint (n₄ = 1.847, ν₄ = 23.9) cemented to a lighter crown flint (n₅ = 1.678, ν₅ = 55.33) — satisfies condition (3): the index difference Δn = n₄ − n₅ = 0.169 falls within 0.1–0.2, and the Abbe number difference Δν = ν₅ − ν₄ = 31.4 falls within 24–35. The cemented surface is the only interface in the rear group where two different glasses meet, making it the sole rear-group contributor to chromatic correction.

#### L5 — Positive meniscus, concave toward the object

| Property | Value |
|---|---|
| Shape | Meniscus (both R negative), concave toward object |
| Glass | n₆ = 1.77250, ν₆ = 49.6 |
| Focal length | +109.9 mm (at f = 100) |
| Thickness | 10.95 |

L5 provides strong positive power that, together with L6, produces most of the rear group's convergence. Its meniscus form (concave toward the object) continues the symmetry-like pairing with L2 across the stop, which is a hallmark of double-Gauss designs. The combination of high index (n₆ = 1.773) and moderate Abbe number (ν₆ = 49.6) is constrained by conditions (8) and (9), which require 1.6 < n₆ < 1.82 and 40 < ν₆ < 60, respectively. This trade-off — higher-index glasses in this range tend to have lower Abbe numbers, and vice versa — is a fundamental material constraint that limits how aggressively the rear group can contribute positive power without introducing chromatic aberration.

#### L6 — Biconvex positive lens

| Property | Value |
|---|---|
| Shape | Biconvex (r₁₂ > 0, r₁₃ < 0) |
| Glass | n₇ = 1.79952, ν₇ = 42.24 |
| Focal length | +156.2 mm (at f = 100) |
| Thickness | 5.82 |

L6 is the only non-meniscus element in the design. Its biconvex form provides the final convergence needed to bring the image to focus at the required back focal distance. The asymmetry of its radii (r₁₂ = +174.1 vs r₁₃ = −435.5) gives it a best-form orientation that minimizes coma for the converging beam arriving from L5. The glass (n₇ = 1.800, ν₇ = 42.24) is the same lanthanum heavy crown family used in L1 and L5, providing a consistent material base for the positive-power elements.

---

## 5. Glass Identification

Olympus was a long-standing customer of both OHARA and HOYA glass manufacturers during the OM-system era. The following identifications are based on six-digit glass code matching against catalog data; all seven glasses have excellent or exact matches in at least one major catalog.

| Element | nd | νd | Code | Best match | Glass family | Confidence |
|---|---|---|---|---|---|---|
| L1 | 1.83481 | 42.82 | 835/428 | OHARA S-LAH58 / HOYA TAFD5 | Lanthanum heavy crown (LaH) | Confirmed (Δnd = 0, Δνd ≈ 0.1) |
| L2 | 1.83400 | 37.19 | 834/372 | OHARA S-LAH65 / HOYA TAFD25 | Lanthanum heavy crown (LaH) | Confirmed (Δnd = 0, Δνd ≈ 0.03) |
| L3 | 1.72825 | 28.46 | 728/285 | OHARA S-TIF8 / HOYA TIF6 | Titanium flint (TiF) | Confirmed exact (Δnd = 0, Δνd = 0) |
| L4a | 1.84666 | 23.90 | 847/239 | OHARA S-TIH53 / HOYA E-TIH53 | Heavy titanium flint (TiH) | Confirmed (Δnd = 0, Δνd ≈ 0.12) |
| L4b | 1.67790 | 55.33 | 678/553 | HOYA E-CF6 | Crown flint (CF) | Confirmed (Δnd = 0, Δνd ≈ 0.01) |
| L5 | 1.77250 | 49.60 | 772/496 | OHARA S-LAH51 / HOYA TAF1 | Lanthanum crown (LaH) | Confirmed exact (Δnd = 0, Δνd = 0) |
| L6 | 1.79952 | 42.24 | 800/422 | OHARA S-LAH52 / HOYA TAFD30 | Lanthanum heavy crown (LaH) | Confirmed (Δnd = 0, Δνd ≈ 0.02) |

**Observations on glass selection:**

The design makes heavy use of lanthanum-based glasses (L1, L2, L5, L6), which provide the high refractive indices needed to satisfy conditions (7) and (8) while maintaining adequate Abbe numbers. The two flint elements in the front group (L3: titanium flint) and the doublet (L4a: heavy titanium flint) are chosen for their high dispersion to provide chromatic correction, while L4b — a crown flint with an unusually specific nd/νd combination — is the most distinctive glass choice in the design. The HOYA E-CF6 match for L4b is the only glass in the system found in only one catalog, which may indicate that Olympus specified this particular melt for its precise nd/νd balance within the cemented doublet.

No anomalous partial dispersion (APD) behavior is required or specified. All glasses are conventional types available from standard optical glass catalogs of the 1970s.

---

## 6. Petzval Sum and Field Curvature Strategy

The Petzval sum is the single most discussed optical parameter in the patent, and Imai's approach to controlling it is the design's central innovation.

**Computed Petzval sum: 0.001593 per unit (= 0.159 in the patent's ×f convention).**

For context, the patent provides Seidel aberration coefficients for Embodiment 2, which yield a Petzval sum of 0.184 — about 16% higher than Embodiment 6's value of 0.159. This improvement reflects the glass substitutions and rebalancing that Imai performed across the six embodiments. The value of 0.159 is low for a modified Gauss at f/1.2, and the patent text emphasizes that keeping it small is essential for achieving usable image quality across the full 46° field. Imai achieves this through two mechanisms:

1. **The L2+L3 negative combination** (f₂₃ = −133.2): By separating the traditional cemented doublet of the Gauss front group into two singlets with an air lens between them, Imai creates a strong negative Petzval contribution from the 2/(n₂ + n₃)f₂₃ term. The L2+L3 combination functions as a single thick negative lens for Petzval purposes, despite L2 being individually positive.

2. **The L4 cemented doublet** (f₄₅ = −144.0): The doublet is net negative, contributing a second negative Petzval term via 2/(n₄ + n₅)f₄₅.

Patent condition (4) bounds the sum of these two contributions: the combined term 2/((n₂+n₃)f₂₃) + 2/((n₄+n₅)f₄₅) = −0.00816 falls within the required range of −0.0085 to −0.0065. This negative contribution offsets the large positive contributions from the individual positive elements (L1, L5, L6), yielding the low net Petzval sum.

The trade-off for this aggressive Petzval correction is that the front and rear groups become increasingly asymmetric (front group f = +340 vs rear group f = +78), which tends to degrade coma symmetry and produce more chromatic aberration from the rear group. The design addresses coma through the long air space d₆ around the stop, and chromatic aberration through the cemented surface r₈ in the doublet.

---

## 7. Focus Mechanism

The patent does not describe any internal focus mechanism, floating element system, or differential group motion during focusing. The Zuiko Auto-S 50mm f/1.2 uses **unit focusing** — the entire optical assembly translates forward as a rigid body to focus on closer objects. This is confirmed by the production lens's mechanical design, which features a helicoid that moves all seven elements together.

For unit focusing at the published minimum focus distance of 0.45 m, the required extension at production scale can be estimated from the thin-lens conjugate equation. With a 50 mm focal length and 450 mm object distance, the lens extension from infinity to 0.45 m close focus is approximately:

**Extension ≈ f²/(object distance − f) = 50²/(450 − 50) = 6.25 mm**

In unit focus the entire lens translates forward, away from the film plane. The distance from the last glass surface (r₁₃) to the image plane therefore *increases* by the extension amount — from approximately 37.3 mm at infinity to approximately 43.6 mm at 0.45 m. No internal air gaps change during focusing; the only variable spacing is this back focal distance.

Unit focus is the simplest and most common focus mechanism for 50 mm SLR lenses of this era. It means that off-axis aberrations (particularly coma and astigmatism) are optimized for infinity focus and degrade somewhat at close range, but this was the standard trade-off for production lenses of the period.

---

## 8. Design Philosophy: The Nine Patent Conditions

The patent is organized around nine inequality conditions that together define the design space. Embodiment 6 satisfies all nine; the verified values are tabulated below.

| Condition | Requirement | Embodiment 6 value | Status |
|---|---|---|---|
| (1) | L/f < 1 | 0.931 | Pass |
| (2) | 0.6f < −r₈ < 1.1f | −r₈ = 105.8 | Pass |
| (3) | 0.1 < n₄−n₅ < 0.2; 24 < ν₅−ν₄ < 35 | Δn = 0.169; Δν = 31.4 | Pass |
| (4) | −0.85/f < [Petzval term] < −0.65/f | −0.00816 | Pass |
| (5) | 1.5 < r₅/r₄ < 1.87; d₄ < 0.05f | 1.552; 2.88 | Pass |
| (6) | 0.16f < d₃+d₄+d₅ < 0.19f; 0.14f < d₇+d₈ < 0.17f | 16.95; 14.60 | Pass |
| (7) | 1.7 < n₁, n₂, n₃, n₄ < 1.86 | 1.835, 1.834, 1.728, 1.847 | Pass |
| (8) | 1.6 < n₅, n₆, n₇ < 1.82 | 1.678, 1.773, 1.800 | Pass |
| (9) | 40 < ν₅, ν₆, ν₇ < 60 | 55.3, 49.6, 42.2 | Pass |

Condition (1) ensures compactness: the total optical track (93.1 at f = 100) is shorter than the focal length. At production scale, the optical track is approximately 46.5 mm, fitting within the marketed 43 mm lens barrel length (measured from the mount flange to the front of the filter ring). Condition (6) achieves this compactness by constraining the thicknesses of L2, L3, and the doublet elements — these are made as thin as practical to keep overall length short while still maintaining the Petzval correction of condition (4).

---

## 9. Embodiment 6 vs. Embodiment 5

The patent's six embodiments fall into two groups: Embodiments 1–4 share the same L1 glass (n₁ = 1.834, ν₁ = 37.19), while Embodiments 5 and 6 use a different L1 glass (n₁ = 1.83481, ν₁ = 42.82) that has a notably higher Abbe number. The change from ν₁ = 37.19 to ν₁ = 42.82 reduces the chromatic contribution of the large front element, giving the designer more freedom to balance color correction in the rear group.

The principal difference between Embodiments 5 and 6 lies in the doublet's rear element glass: Embodiment 5 uses n₅ = 1.6968 (ν₅ = 55.52), while Embodiment 6 uses n₅ = 1.6779 (ν₅ = 55.33). This seemingly small change shifts the doublet focal length from f₄₅ = −157.1 to f₄₅ = −144.0 — a stronger negative contribution that improves Petzval correction. Embodiment 6 achieves a Petzval sum of 0.159 (vs 0.158 for Embodiment 5 — effectively identical), but the more significant advantage is likely in the overall aberration balance. Both Embodiments 5 and 6 receive the patent's extended five-figure aberration treatment (spherical aberration, sine condition, astigmatism, distortion, and coma at three field angles: ω = 23°, 16.4°, and 9.5°), while Embodiments 1–4 receive only three plots each (spherical aberration, astigmatism, distortion). The fact that Imai chose Embodiment 6 for the final claim in the patent — and that its glass selections diverge most from the earlier embodiments — suggests it represents the most refined iteration of the design.

---

## 10. Aberration Performance (Figs. 7A–7E)

The patent provides five aberration plots for Embodiment 6 (Figs. 7A through 7E), which characterize the design's optical performance at the f/1.2 maximum aperture.

**Spherical aberration (Fig. 7A):** The plot shows the d-line and g-line longitudinal spherical aberration as a function of aperture height, up to f/1.2. The d-line curve exhibits the typical overcorrected higher-order residual characteristic of fast Gauss designs: a smooth S-shaped curve that remains within approximately ±0.5 mm across the full aperture. The g-line (blue) curve shows a larger departure, reflecting the residual secondary spectrum that is unavoidable without anomalous-dispersion glasses.

**Sine condition / OSC (Fig. 7B):** The offense against the sine condition is plotted for d- and g-lines. The curves show modest departures — well within practical tolerances for an f/1.2 design — indicating that the coma correction is reasonably well balanced across the aperture.

**Astigmatism (Fig. 7C):** The sagittal (s) and meridional (m) field curves are plotted to the full half-field of 23°. The two curves remain close together and nearly flat out to about 16°, diverging moderately in the outer field. This tight control of astigmatism at moderate field angles is a direct benefit of the low Petzval sum (0.159) — with less inward field curvature to fight, the sagittal and meridional surfaces stay closer to the design focal plane.

**Distortion (Fig. 7D):** Distortion is well corrected, remaining below approximately 2% at the full 23° half-field. This is typical of a near-symmetric Gauss design, where the residual distortion is predominantly barrel-type.

**Coma (Fig. 7E):** Coma is plotted at three field angles (ω = 23°, 16.4°, and 9.5°). At the inner field (9.5°), coma is negligible. At 16.4° and 23° the coma fans show moderate asymmetry, with the full-field coma remaining within approximately ±0.05 mm — acceptable for an f/1.2 design. The patent text discusses the importance of d₆ (the stop-to-rear-group air space) in maintaining coma symmetry; the Embodiment 6 plots confirm that this balance was achieved.

---

## 11. Identification of Embodiment 6 as the Production Design

The identification of Embodiment 6 as the basis for the production Zuiko Auto-S 50mm f/1.2 rests on several converging lines of evidence, though no single piece of documentation provides absolute confirmation:

1. **Element and group count:** All six embodiments share the same 7-element/6-group configuration, matching the production lens specification.

2. **Focal length and BFD:** Embodiment 6 scales to f ≈ 50 mm with BFD ≈ 37.3 mm, consistent with the OM mount flange distance of 46.0 mm and the compact barrel design.

3. **Patent position:** Embodiment 6 appears as the final claim (Claim 7) in the patent, a position typically reserved for the most commercially significant design in Japanese patent practice of this era.

4. **Aberration presentation:** Embodiments 5 and 6 receive the most thorough aberration analysis in the patent (five plots vs three for Embodiments 1–4), suggesting these were the designs closest to production consideration.

5. **Glass modernization:** Embodiments 5 and 6 use a different L1 glass with higher Abbe number (ν₁ = 42.82 vs 37.19 for Embodiments 1–4), suggesting these are later refinements of the design.

It should be noted that production lenses often undergo further optimization from the patent design — minor adjustments to radii, thicknesses, or glass melts that fall within the patent's claimed ranges but differ from the tabulated numerical example. The prescription presented here is the patent design, which may differ slightly from the final production lens.

---

## 12. Production Context

The Zuiko Auto-S 50mm f/1.2 was released in 1982 as part of the later-generation OM lens lineup. It replaced the earlier 55mm G-Zuiko f/1.2 (circa 1974), which used a different optical design. The 50mm version is noted for improved sharpness, higher contrast from multi-coating, and smoother bokeh rendering compared to its predecessor.

At production scale (f ≈ 50 mm), the key dimensions are:

| Parameter | Value |
|---|---|
| Effective focal length | ≈50.0 mm |
| Back focal distance | ≈37.3 mm |
| Total optical track | ≈46.5 mm |
| Image circle | Full-frame 24×36 mm (image height ≈21.2 mm at ω = 23°) |

The OM mount flange distance is 46.0 mm, which exceeds the BFD of 37.3 mm by approximately 8.7 mm. This means the rearmost glass surface (r₁₃ of L6) extends approximately 8.7 mm behind the camera's bayonet mount flange, projecting into the mirror box of the camera body. This is standard practice for fast normal lenses on SLR cameras — the rear element must sit close to the film plane to achieve the required back focal distance at f/1.2. The OM system's notably compact reflex mirror box, one of Yoshihisa Maitani's signature engineering achievements, was designed to accommodate exactly this type of rear-element protrusion while maintaining reliable mirror clearance.

---

## 13. Summary of Element Functions

| Element | Power | Shape | Primary role |
|---|---|---|---|
| L1 | Positive (f = +124) | Meniscus, convex to object | Primary collecting element; high-index glass minimizes surface angles |
| L2 | Positive (f = +170) | Meniscus, convex to object | Secondary power buildup; forms negative air lens with L3 for Petzval correction |
| L3 | Negative (f = −66) | Meniscus, convex to object | Spherical aberration correction; negative Petzval contribution via L2+L3 pair |
| L4a | Negative (f = −57) | Meniscus, concave to object | Dense flint half of cemented doublet; chromatic correction at cemented surface |
| L4b | Positive (f = +119) | Meniscus, concave to object | Crown half of doublet; balances L4a for net negative power and Petzval correction |
| L5 | Positive (f = +110) | Meniscus, concave to object | Strong rear convergence; symmetric counterpart to L2 across the stop |
| L6 | Positive (f = +156) | Biconvex | Final convergence to image plane; best-form orientation minimizes coma |

*All focal lengths at f = 100 patent scale. Multiply by 0.500 for production values.*
