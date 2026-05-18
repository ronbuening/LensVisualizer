# Voigtländer APO-Lanthar 180mm f/4 SL Close Focus — Optical Analysis

## Patent Reference and Design Identification

**Patent:** JP 2003-270529 A (P2003-270529A)
**Application Number:** 特願2002-069772
**Filed:** March 14, 2002 (Heisei 14)
**Published:** September 25, 2003 (Heisei 15)
**Inventor:** 蓬田 祥寿 (romanization uncertain; possibly Yomogida Yoshitoshi or similar)
**Applicant:** Cosina Co., Ltd. (株式会社コシナ), Nakano, Nagano, Japan
**Title:** Telephoto Lens (望遠レンズ)
**Embodiment analyzed:** Example 1 (第1実施例), Table 1 (表1)

The prescription transcribes **Example 1** (第1実施例, Table 1 / 表1), the primary embodiment in the patent filed for the Cosina Voigtländer APO-Lanthar 180mm f/4 SL Close Focus. The following evidence links the patent to the production lens, though questions remain about which of the two examples was manufactured:

1. **Element and group count.** 9 elements in 7 air-separated groups — matching the manufacturer's published specifications for the production lens.
2. **ED glass usage.** In Example 1, all three front-group meniscus elements use S-FPL51 (νd = 81.6), a fluorophosphate ED glass. In Example 2, only two of the three front elements use S-FPL51; the outermost meniscus uses S-FSL5 (νd = 70.4) instead. Some third-party sources describe the production lens as having "two low dispersion elements," which is consistent with Example 2. The patent's claims require three positive meniscus lenses with Abbe number ≥ 70 in the first lens group (¶0005, Claim 2) — a condition both examples satisfy, since S-FSL5 (νd = 70.4) qualifies.
3. **Focal length and aperture.** The patent states f = 197 mm, F~no~ = 4 for Example 1. The production lens is marketed as 180mm f/4. A design EFL of ~198 mm is approximately 10% above the 180 mm nominal — a larger discrepancy than typical marketing rounding (which is usually 2–5%). The patent also provides Example 2 at f = 178 mm, which is much closer to the marketed value. Physical dimension analysis (see below) suggests Example 2 may be the closer match to the production design, though both examples share the same three-group telephoto architecture and satisfy the patent's conditional expressions. The analysis below examines Example 1's optical prescription in full, as it represents the patent's primary embodiment and the stronger design (three S-FPL51 elements vs. two in Example 2).
4. **Compact telephoto ratio.** The patent's stated design goal is D/f < 0.5 (¶0004), where D is the barrel length and f the focal length. The production lens measures ~79–80 mm from front of barrel to mount flange, giving D/f ≈ 80/180 ≈ 0.44, comfortably within the target. At the Example 1 patent scale, the computed front-vertex-to-flange distance (Nikon F, 46.5 mm) is 94.0 mm, giving D/f = 0.475 — also within the target. However, the 94 mm optical length substantially exceeds the production's 79 mm barrel. By contrast, Example 2's front-vertex-to-flange distance is 76.4 mm, closely matching the production barrel length and reinforcing Example 2 as the likely production candidate.
5. **Patent timing.** Filed March 2002, published September 2003 — the production lens was announced August 2003 and released in the same window.
6. **Unit focus with close-focus capability.** The entire lens extends ~44 mm to reach the production MFD of 1.2 m — consistent with unit focus at this focal length and speed.
7. **Aperture placement.** The stop sits in the 19.04 mm air gap between surface 12 and surface 13, between the negative second group G2 and the weakly positive third group G3, consistent with the cross-section drawing in Fig. 1.

**A note on production identification.** The physical dimension analysis favors Example 2 (f = 178 mm) as the production design: its front-vertex-to-flange distance of 76.4 mm (Nikon F) closely matches the production barrel length of ~79 mm, and its two S-FPL51 elements (with one S-FSL5) match third-party descriptions of "two low dispersion elements." Example 1 (f = 197.9 mm) produces a front-vertex-to-flange distance of 94.0 mm — 15 mm too long — and if linearly scaled to 180 mm, its image circle shrinks to 39.1 mm, which cannot cover 35mm full frame. Nevertheless, Example 1 is optically the more ambitious of the two embodiments (three S-FPL51 elements vs. two), and it is the primary embodiment in the patent. The following analysis examines Example 1 on its own terms as a complete, verified optical prescription. Where conclusions depend on the assumption that Example 1 is the production design, this is noted.

## Optical Architecture

The APO-Lanthar 180mm f/4 is a **compact telephoto** of the three-group positive–negative–positive type. It uses 9 elements arranged in 3 design groups (7 air-separated groups in the marketing convention):

- **G1 (Front Collector, positive):** Three air-spaced positive meniscus elements L11–L13, all convex to object. Combined focal length f₁ = 44.4 mm. This group provides the primary converging power and carries the entire chromatic burden of the ED correction, with all three elements made from the same ultra-low-dispersion fluorophosphate glass (S-FPL51, νd = 81.6).

- **G2 (Negative Middle, negative):** Two cemented doublets (L21+L22 and L23+L24). Combined focal length f₂ = −26.7 mm. This group diverges the converging bundle from G1, creating the telephoto effect — the lens's total track is substantially shorter than its effective focal length. The two doublets are also responsible for achromatizing the system and managing the secondary spectrum.

- **G3 (Rear Corrector, weakly positive):** Two air-spaced singlets L31 and L32, a positive meniscus followed by a negative meniscus. Combined focal length f₃ = 554 mm. This near-afocal group serves primarily as an aberration corrector — it contributes negligible power to the system but corrects field curvature, astigmatism, and residual lateral chromatic aberration.

The aperture stop lies in the air gap between G2 and G3, between surfaces 12 and 13 (19.04 mm spacing at the patent scale).

**Power distribution summary (computed):**

| Parameter | Value |
|-----------|-------|
| System EFL | 197.9 mm |
| G1 focal length (f₁) | +44.4 mm |
| G2 focal length (f₂) | −26.7 mm |
| G3 focal length (f₃) | +554 mm |
| f₁ / \|f₂\| | 1.66 (condition: 1.0 < x < 2.0 ✓) |
| f / \|f₂\| | 7.41 (condition: 3.5 < x < 10 ✓) |
| BFD (from last surface) | 70.5 mm |
| Total track | 140.5 mm |
| Telephoto ratio (total track / EFL) | 0.71 |

Both conditional expressions from the patent claims (¶0005–0007) are satisfied. The first condition ensures the front group's power is 1.0–2.0× the magnitude of the negative group's power, balancing compactness against aberration growth. The second condition ensures the negative group's power is strong enough relative to the system focal length to achieve the desired telephoto compression, but not so strong that higher-order aberration correction becomes impractical.

## Element-by-Element Analysis

### L11 — Positive Meniscus, convex to object (G1)

nd = 1.49700, νd = 81.6. Glass: S-FPL51 (OHARA) — ED fluorophosphate crown. f = +179.2 mm (thick-lens), +180.0 mm (thin-lens).

L11 is the front element and the weakest of the three front-group menisci (R₁ = +75.791, R₂ = +496.439, d = 5.31 mm). Its gently curved meniscus shape gives it the least power of the three, contributing modestly to the group's convergence while keeping the marginal ray height manageable for the downstream elements. As the first surface the light encounters, it operates at the largest beam diameter and therefore has the greatest leverage over spherical aberration. The weak curvature minimizes both the surface contribution to spherical aberration and the zone sensitivity that a stronger first surface would introduce.

The choice of S-FPL51 for all three front elements is the defining feature of this design. With νd = 81.6, it contributes minimal primary chromatic aberration per unit of refracting power — each element's φ/ν contribution is only 0.068–0.113 × 10⁻³ mm⁻¹, roughly an order of magnitude smaller than the chromatic contributions from the flint elements in G2.

### L12 — Positive Meniscus, convex to object (G1)

nd = 1.49700, νd = 81.6. Glass: S-FPL51 (OHARA) — ED fluorophosphate crown. f = +116.5 mm (thick-lens), +123.5 mm (thin-lens).

L12 is the middle element of the front group and carries more power than L11 (R₁ = +34.299, R₂ = +77.742, d = 7.87 mm). The steeper curvatures increase the convergence contribution, and the thicker center section (7.87 mm) provides the glass path length needed for the S-FPL51 material to exert its ultra-low-dispersion effect over a significant portion of the converging wavefront.

The 0.30 mm air gap between L11 and L12 (and between L12 and L13) is a design choice that favors aberration correction flexibility over the compactness of a cemented triplet. Air-spacing the three ED elements allows each meniscus to carry a slightly different bending, distributing the spherical aberration and coma contributions across three independently optimizable surfaces rather than constraining them to the shared curvatures of a cemented stack.

### L13 — Positive Meniscus, convex to object (G1)

nd = 1.49700, νd = 81.6. Glass: S-FPL51 (OHARA) — ED fluorophosphate crown. f = +106.2 mm (thick-lens), +108.1 mm (thin-lens).

L13 is the strongest of the three front menisci (R₁ = +40.526, R₂ = +165.053, d = 6.81 mm), providing the largest single contribution to G1's converging power. Its rear radius (R₂ = +165.053) is considerably flatter than its front, giving the element a strongly asymmetric meniscus profile. The steepening power gradient across G1 — from L11 (weakest) to L13 (strongest) — distributes the refraction load progressively, minimizing zonal spherical aberration that would result from concentrating all the convergence in a single strong element.

Together, the three S-FPL51 menisci provide a combined group focal length of f₁ = +44.4 mm while generating only 0.28 × 10⁻³ mm⁻¹ of total primary chromatic aberration (Σ φ/ν for G1). This is remarkably low for a group of this power — the same convergence achieved with conventional crown glass (νd ≈ 60) would produce roughly 35% more primary color.

### L21 — Negative Meniscus, convex to object (G2, cemented with L22)

nd = 1.83400, νd = 37.3. Glass: S-LAH55 (OHARA) — lanthanum-aluminosilicate dense crown. f = −33.5 mm (thin-lens).

L21 forms the front element of the first cemented doublet in G2 (R₁ = +124.264, R₂ = +22.803, d = 2.00 mm). Despite its high refractive index (1.834), it functions as the "flint" role in this doublet — its relatively low Abbe number (37.3) makes it the dispersive partner to L22's low-dispersion crown. The high index allows strong curvature at the cemented interface (R = 22.803 mm) while keeping the surface sag manageable.

The meniscus shape — with both radii positive but R₂ ≪ R₁ — means the element acts as a strongly negative meniscus with both surfaces convex toward the object. This bending choice places the steepest curvature at the cemented interface (R = 22.803 mm), where the large refractive-index step (Δn = 1.834 − 1.487 = 0.347) generates the strong negative power that diverges the beam and creates the telephoto shortening effect, while minimizing the coma contribution at that interface.

### L22 — Positive Meniscus, convex to object (G2, cemented with L21)

nd = 1.48749, νd = 70.4. Glass: S-FSL5 (OHARA) — fluorine crown. f = +63.6 mm (thin-lens).

L22 is the "crown" partner of the first cemented doublet (cemented face at R = 22.803 mm, exit at R = +86.224, d = 6.87 mm). Its low index (1.487) and high Abbe number (70.4) make it the chromatic counterweight to L21's dispersion. The doublet as a whole has a net focal length of −70.4 mm and is nearly achromatic in the primary spectrum: its combined φ/ν residual is only −0.58 × 10⁻³ mm⁻¹.

The choice of S-FSL5 rather than a more common crown (e.g., S-BSL7 / N-BK7) is notable. S-FSL5's low refractive index (1.487) maximizes the index step at the cemented junction with S-LAH55 (Δn = 1.834 − 1.487 = 0.347), producing strong negative power at the interface without requiring extreme curvatures. A higher-index crown would reduce this Δn and necessitate steeper curves to achieve the same divergence. S-FSL5's anomalous partial dispersion (ΔPgF = +0.0022) is modest — near the Schott normal line — so the secondary-spectrum correction in D1 derives primarily from the glass-power pairing rather than from anomalous-dispersion matching.

### L23 — Near-Plano-Concave Negative (G2, cemented with L24)

nd = 1.80610, νd = 40.7. Glass: S-LAH51 (OHARA) — lanthanum-aluminosilicate dense crown. f = −20.4 mm (thin-lens).

L23 forms the front element of the second cemented doublet in G2 (R₁ = −5733.840, R₂ = +16.465, d = 2.00 mm). The front surface is essentially flat (R ≈ −5734 mm), making this a near-plano-concave element with all its refracting power concentrated at the steeply curved cemented interface. This is the strongest single element in the entire system — its −20.4 mm focal length contributes the largest share of G2's diverging power.

The element's role is primarily telephoto compression: it takes the converging bundle from G1 and sharply diverges it, creating a virtual object for G3 that lies far behind the physical lens, thereby extending the effective focal length well beyond the total track.

### L24 — Positive Meniscus, convex to object (G2, cemented with L23)

nd = 1.72825, νd = 28.3. Glass: S-TIH4 (OHARA) — titanium-flint dense glass. f = +34.6 mm (thin-lens).

L24 is the "positive flint" partner of the second doublet (cemented at R = +16.465, exit at R = +47.510, d = 6.39 mm). This is an unconventional doublet architecture: the high-dispersion glass (S-TIH4, νd = 28.3) carries the *positive* power, while the lower-dispersion glass (S-LAH51, νd = 40.7) carries the *negative* power. In a conventional achromat, the crown (low dispersion) is positive and the flint (high dispersion) is negative. Here the roles are reversed.

This reversed arrangement is deliberate. A standard doublet produces undercorrected secondary spectrum — the residual focus shift between the blue-green and red wavelengths that cannot be eliminated by Abbe-number matching alone. By reversing the dispersion–power pairing, the L23+L24 doublet generates *overcorrected* primary chromatic aberration, which, when combined with the undercorrected residual from G1's three S-FPL51 elements, achieves a net secondary-spectrum correction that approaches apochromatic performance. The doublet's net achromatic residual (φ₁/ν₁ + φ₂/ν₂ = −0.18 × 10⁻³) is small, confirming that it is nearly self-achromatized despite the reversed architecture.

The combined focal length of the L23+L24 doublet is −48.8 mm — shorter (more powerful) than the L21+L22 doublet's −70.4 mm. Together the two doublets produce G2's net focal length of f₂ = −26.7 mm.

### L31 — Positive Meniscus, convex to object (G3)

nd = 1.80518, νd = 25.5. Glass: S-TIH6 (OHARA) — titanium-flint dense glass (equivalent to Schott SF6). f = +95.4 mm (thick-lens).

L31 is the first element of the rear corrector group (R₁ = +71.108, R₂ = +947.917, d = 2.15 mm). It is a weakly positive meniscus made from a dense flint with very high refractive index (1.805) and very low Abbe number (25.5). This is the most dispersive glass in the entire system, yet it carries *positive* power — another instance of the reversed-dispersion architecture that characterizes this design's secondary-spectrum strategy.

L31 sits just behind the aperture stop and operates at a relatively small beam diameter. At this location, its primary function is to introduce controlled amounts of overcorrected longitudinal chromatic aberration and Petzval-flattening curvature. The high index contributes a positive Petzval term (φ/n) that partially offsets the strong negative Petzval contribution from G2's dense elements, helping to flatten the field.

### L32 — Negative Meniscus, concave to object (G3)

nd = 1.80610, νd = 40.7. Glass: S-LAH51 (OHARA) — lanthanum-aluminosilicate dense crown (same glass as L23). f = −113.2 mm (thick-lens).

L32 is the final optical element (R₁ = −33.161, R₂ = −53.488, d = 2.00 mm). Its concave-to-object meniscus shape gives it weak negative power, and together with L31 the pair forms a near-afocal corrector group (f₃ = +554 mm). L32's primary function is field correction: its negative meniscus shape, positioned far from the stop, generates astigmatism of the opposite sign to the astigmatism accumulated by the front and middle groups, flattening the tangential and sagittal focal surfaces.

The use of S-LAH51 (the same glass as L23) in the rear group is notable — it creates a partial-dispersion pairing with L31's S-TIH6 that mirrors the L23/L24 pairing in G2. This symmetry of glass-pair architecture across the stop is a hallmark of designs that aim for uniform chromatic correction across the field, reducing lateral chromatic aberration (lateral color) at the field edges.

## Glass Identification and Selection

All six distinct glasses in this design are exact matches to OHARA catalog entries, consistent with Cosina's established use of OHARA glass.

| Element(s) | Glass | nd | νd | Type | Role |
|------------|-------|----|----|------|------|
| L11, L12, L13 | S-FPL51 (OHARA) | 1.49700 | 81.6 | ED fluorophosphate crown | Ultra-low dispersion front group; primary APO contributor |
| L21 | S-LAH55 (OHARA) | 1.83400 | 37.3 | Lanthanum dense crown | High-index "flint role" in D1; telephoto divergence |
| L22 | S-FSL5 (OHARA) | 1.48749 | 70.4 | Fluorine crown | Low-index crown in D1; maximizes Δn at cemented interface |
| L23, L32 | S-LAH51 (OHARA) | 1.80610 | 40.7 | Lanthanum dense crown | Negative power in reversed doublets; telephoto + APO |
| L24 | S-TIH4 (OHARA) | 1.72825 | 28.3 | Titanium dense flint | Positive flint in reversed D2; secondary-spectrum correction |
| L31 | S-TIH6 (OHARA) | 1.80518 | 25.5 | Titanium dense flint (≡ Schott SF6) | Positive rear corrector; Petzval flattening + APO |

The glass palette clusters into two functional families:

**Ultra-low-dispersion crowns (νd > 70):** S-FPL51 and S-FSL5 provide the low-dispersion refractive power that anchors the chromatic correction. S-FPL51 in particular has strongly anomalous positive partial dispersion (ΔPgF ≈ +0.035), meaning its blue-to-green dispersion ratio deviates from the Schott normal line. This anomalous dispersion is the mechanism by which the design attacks the secondary spectrum — the residual longitudinal color shift between the C-line, d-line, and F-line focuses that an ordinary achromat cannot eliminate.

**Dense flints and dense crowns (νd < 42):** S-LAH55, S-LAH51, S-TIH4, and S-TIH6 provide the high-dispersion counterweights. The patent uses three of OHARA's lanthanum-aluminosilicate (LAH) glasses in addition to two titanium-flint (TIH) glasses. The lanthanum glasses combine high index with moderate Abbe numbers (37–41), making them effective at creating large refractive-index steps at cemented interfaces without requiring extremely thick elements. The titanium flints (νd = 25–28) provide the strongest dispersion in the system and are deployed in the unusual positive-flint configuration that drives the secondary-spectrum correction.

## Focus Mechanism

The APO-Lanthar 180mm f/4 SL uses **unit focus** — the entire optical assembly translates forward along the axis as the focus distance decreases. There is no internal focusing group; all air spacings remain constant during focus. The focusing ring provides approximately 350° of rotation from infinity to the minimum focus distance of 1.2 m, with the barrel extending approximately 44 mm at closest focus.

At the patent's design focal length of 197.9 mm, the thin-lens focus extension for an object at 1.2 m is approximately 39 mm. However, in a telephoto of this class the thin-lens formula substantially underestimates the actual extension. The rear principal plane H′ lies approximately 57 mm ahead of (to the left of) the front vertex, and the front principal plane H lies approximately 148 mm ahead — far outside the physical lens body. When the thick-system conjugate equation is solved exactly using the ABCD-derived principal plane positions, the predicted extension is approximately 60 mm at the patent focal length. The production barrel extension of approximately 44 mm is substantially shorter, which is consistent with Example 2's shorter focal length (f = 178 mm) producing a correspondingly shorter focus throw.

The production lens achieves a maximum magnification ratio stated by the manufacturer as 1:4 at 1.2 m MFD. The paraxial thin-lens calculation at the patent EFL yields approximately 1:5, while the thick-system conjugate at the patent EFL gives approximately 1:3.3 — noticeably higher than both the thin-lens estimate and the manufacturer's claimed ratio. The production design (likely Example 2, with EFL ≈ 178 mm) would produce a thick-system magnification closer to 1:4 at the same MFD, consistent with the manufacturer's specification.

Unit focus in a telephoto of this class is the mechanically simplest and optically most predictable approach. Because no internal spacings change, the aberration balance established at infinity is preserved at all focus distances — there is no focus breathing, no group-motion-induced coma shift, and no change in the telephoto ratio during focusing. The tradeoff is increased barrel extension and a larger, heavier helicoid assembly, but at f/4 and 180 mm the tube diameter and extension remain compact enough for the lens to achieve its 79 mm overall length at infinity — shorter than many 135 mm primes.

## Aspherical Surfaces

This is an **all-spherical design**. No aspherical surfaces are used anywhere in the optical system. All 16 refracting surfaces are standard spherical or near-planar (surface 10, R = −5733.8 mm).

The absence of aspherical elements is consistent with Cosina's manufacturing approach for the SL lens series (early 2000s production), which relied on traditional glass grinding and polishing rather than glass-molded or hybrid aspherical technology. It is also a point of note for the lens's bokeh character — spherical surfaces produce smoother out-of-focus rendition than aspherical surfaces, which can introduce concentric ring artifacts ("onion ring" bokeh). Multiple reviewers have commented on the APO-Lanthar 180mm's smooth and natural bokeh quality, a characteristic that is directly attributable to the all-spherical optical formula.

## Chromatic Correction Strategy

The "APO" (apochromatic) designation is the lens's defining optical claim. An achromatic lens brings two wavelengths to a common focus; an apochromatic lens brings three. The mechanism by which this design achieves apochromatic correction is worth examining in detail, as it differs from the conventional approach.

### The conventional approach and its limitation

In a standard achromatic telephoto, a positive crown-glass front group is paired with a negative flint-glass diverging group. The achromatic condition requires:

$$\sum_i \frac{\varphi_i}{\nu_{d,i}} = 0$$

where φᵢ is the power and νd,ᵢ is the Abbe number of each element. This eliminates the primary longitudinal chromatic aberration (the F-line and C-line focus difference). However, it leaves a residual called the **secondary spectrum** — the difference between the common F–C focus and the d-line focus. The secondary spectrum arises because real glasses do not disperse linearly with wavelength; the ratio of partial dispersions ($P_{g,F} = (n_g - n_F)/(n_F - n_C)$) varies from glass to glass. In a conventional crown–flint achromat, the secondary spectrum is proportional to the difference in partial dispersions ΔPgF between the two glasses, and it cannot be reduced below a floor set by the available glass types — roughly 1/2500 of the focal length for standard glasses.

### This design's strategy

The APO-Lanthar 180mm uses three independent mechanisms to suppress the secondary spectrum:

1. **Ultra-low-dispersion front group.** All three G1 elements use S-FPL51, which has anomalous partial dispersion (ΔPgF ≈ +0.035 above the Schott normal line). Because the front group generates the primary converging power, using an anomalous-dispersion glass here shifts the secondary-spectrum balance of the entire system. The very high Abbe number (81.6) also means each element contributes minimal primary color per unit of power, reducing the total chromatic load that the negative group must compensate.

2. **Reversed-dispersion doublets in G2.** The second doublet (L23+L24) uses the unusual positive-flint/negative-crown architecture. The "flint" element (S-TIH4, νd = 28.3) carries positive power, while the "crown" (S-LAH51, νd = 40.7) carries negative power. This reversal flips the sign of the doublet's secondary-spectrum contribution relative to a conventional achromatic doublet of the same net power. When combined with G1's anomalous-dispersion contribution, the reversed secondary spectrum from D2 enables a three-wavelength correction that a conventional glass pairing cannot achieve.

3. **Rear corrector pairing.** G3 uses S-TIH6 (positive, νd = 25.5) paired with S-LAH51 (negative, νd = 40.7), mirroring the reversed-dispersion architecture of D2. Because G3 operates behind the stop at a different beam geometry than G2, it corrects the lateral component of chromatic aberration (lateral color, which affects the image height rather than the focus position) while contributing a small reinforcement to the longitudinal APO correction established by G1 and G2.

### Computed chromatic residuals

The total first-order chromatic residual Σ(φ/ν) for the full system is −0.30 × 10⁻³ mm⁻¹, which is −5.9% of the system power. This is not zero because the Abbe-number-based first-order sum does not capture the secondary-spectrum correction — it only measures the primary (F–C) achromatism. The true APO performance depends on the partial-dispersion matching across all three wavelength pairs, which requires full spectral ray tracing beyond the scope of a first-order analysis. The patent's aberration diagrams (Fig. 2) show the d-line and F-line spherical aberration curves converging to within ±0.2 mm across the full pupil, consistent with well-corrected longitudinal color.

### Petzval sum

The computed Petzval sum is −0.000185 mm⁻¹, corresponding to a Petzval radius of −5411 mm — essentially flat. This near-zero Petzval sum is achieved through the balance of positive and negative powers across high-index glasses: the strong negative elements in G2 (S-LAH55, S-LAH51) contribute large negative Petzval terms that offset the positive contributions from the front group and rear corrector. The extremely flat Petzval surface is favorable for a telephoto lens, as it reduces the field curvature that would otherwise require the photographer to stop down significantly for sharp corners.

## Conditional Expressions

The patent specifies two inequalities governing the power distribution (¶0005–0007):

1. $1.0 < f_1 / |f_2| < 2.0$

   Computed: f₁/|f₂| = 1.66. ✓

   This condition balances the front group's convergence against the middle group's divergence. Below 1.0, the front group would be too weak relative to the diverging group, inflating the lens's total length and defeating the telephoto compression. Above 2.0, the front group would be twice as powerful as the negative group, creating severe aberration growth in G1 that would require more elements to compensate (¶0006).

2. $3.5 < f / |f_2| < 10$

   Computed: f/|f₂| = 7.41. ✓

   This condition ensures the negative group's power is strong enough to achieve a useful telephoto ratio. Below 3.5, the negative group would be too weak and the lens would be too long. Above 10, the negative group's power would dominate, making higher-order aberration correction impractical and reducing the back focal distance to the point where SLR mirror clearance becomes difficult (¶0007).

## Design Heritage and Context

The Cosina Voigtländer APO-Lanthar 180mm f/4 SL Close Focus was part of the SL lens series — a short-lived line of high-quality manual-focus primes for SLR cameras, released by Cosina under the Voigtländer brand in the early 2000s. The series also included the APO-Lanthar 90mm f/3.5 SL and the APO-Lanthar 125mm f/2.5 Macro SL, both of which shared the apochromatic design philosophy and compact form factor.

The 180mm was the longest lens in the SL lineup. It was offered in Nikon AI-S, Canon FD, Pentax K, Contax/Yashica, Olympus OM, Minolta SR, and M42 mounts. Production numbers were small — estimated at 700–1000 units in Nikon mount alone — and the lens was discontinued around 2004–2005 as Cosina transitioned its factory capacity to manufacturing the Carl Zeiss ZF/ZS lens series.

The optical formula is notable for its era. In 2003, most 180–200 mm telephotos for SLR cameras used 5–6 elements and achieved D/f ratios around 0.65. The APO-Lanthar's 9-element design with ED elements, all-spherical surfaces, and a production D/f of approximately 0.44 was an outlier in compactness and chromatic correction. The only comparable apochromatic telephoto at this focal length was the Leica APO-Telyt-R 180mm f/3.4, which used a fundamentally different optical architecture (apochromatic triplet front group with fluorite) at a significantly larger size and price point.

The designer's approach in Example 1 — using three matched S-FPL51 menisci rather than one or two ED elements paired with conventional glass — represents an aggressive solution to the secondary-spectrum problem in compact telephotos. Whether the production lens uses all three S-FPL51 elements (Example 1) or substitutes one S-FSL5 (Example 2), the core architecture is the same: a triple-meniscus front group with ultra-low-dispersion glass, paired with reversed-dispersion doublets in G2 that attack the secondary spectrum from a direction that conventional flint–crown achromats cannot reach.

## Sources

- JP 2003-270529 A (P2003-270529A), 「望遠レンズ」, Cosina Co., Ltd. / 蓬田 祥寿. Published 2003-09-25. Primary source for optical prescription, group architecture, conditional expressions, and aberration diagrams.
- Cosina Co., Ltd. product specifications for the Voigtländer APO-Lanthar 180mm f/4 SL Close Focus. Manufacturer source for production specifications: 9 elements / 7 groups, f/4, MFD 1.2 m, 9 aperture blades, 49 mm filter thread, overall length ~79 mm.
- OHARA Inc. optical glass catalog (current edition). Referenced for S-FPL51, S-LAH55, S-FSL5, S-LAH51, S-TIH4, S-TIH6 refractive indices, Abbe numbers, and partial-dispersion data.
