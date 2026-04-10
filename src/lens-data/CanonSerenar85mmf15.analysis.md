# Canon Serenar 85mm f/1.5 — Optical Analysis

**Patent:** US 2,645,973 · Hiroshi Ito · Canon Camera Company, Ltd.
**Filed:** June 29, 1951 (Japanese priority: January 31, 1951)
**Granted:** July 21, 1953
**Embodiment analyzed:** Example 1 (Figure 1) — 7 elements / 4 groups, f/1.5, 30° including field

---

## 1. Historical Context

The Canon Serenar 85mm f/1.5 was one of the most ambitious lenses produced by Canon during the Leica-screw-mount era. Designed by Hiroshi Ito and marketed from June 1952, it was developed as a faster evolution of the Serenar 85mm f/1.9 I (1951). The lens was manufactured from 1952 through approximately 1960, but production numbers were very low — sources differ, with estimates ranging from as few as 137 units (per Kitchingman's collector's guide) to around 1,336 units depending on the reference. It featured a 20-blade diaphragm, a 58mm filter thread, and weighed 730 g owing to its brass barrel construction. A later Type II revision used an aluminum alloy barrel to reduce weight.

The patent describes the lens as a "high aperture four component objective of the Gauss type" — a modified double-Gauss design whose key innovation was the correction of oblique spherical aberration (coma) across a 30° including field at wide aperture. Ito's approach involved using a three-element cemented meniscus on the object side and a two-element cemented meniscus on the image side, with carefully controlled refractive power at the cemented interfaces.

## 2. Aspherical Surfaces

**There are no aspherical surfaces in this design.** The patent specifies only spherical radii for all 11 surfaces, and makes no mention of aspherical coefficients or conic constants. This is consistent with Canon's manufacturing capabilities in the early 1950s — precision aspherical surfaces were not practical for production photographic lenses at this time. All aberration correction is achieved entirely through the choice of glass types, surface curvatures, and the cemented compound element construction.

## 3. Optical Prescription (Example 1)

The patent provides the prescription at a normalized focal length of f = 1.00. To obtain the production lens dimensions, all linear quantities (radii, thicknesses, spacings) are scaled by a factor of 85×.

| Surface | Radius | Thickness | nd | νd | Element | Group |
|---------|-------:|----------:|------:|-----:|---------|-------|
| r₁ | +0.822 | 0.105 | 1.6228 | 56.9 | L1 | I |
| r₂ | +9.500 | 0.002 | 1.0 | — | air | — |
| r₃ | +0.440 | 0.085 | 1.6385 | 55.5 | L2 | II |
| r₄ | +0.805 | 0.190 | 1.5163 | 64.0 | L3 | II |
| r₅ | −1.850 | 0.020 | 1.6889 | 31.1 | L4 | II |
| r₆ | +0.252 | 0.190 | 1.0 | — | air | — |
| r₇ | −0.310 | 0.015 | 1.5317 | 48.9 | L5 | III |
| r₈ | +0.572 | 0.103 | 1.6584 | 50.8 | L6 | III |
| r₉ | −0.440 | 0.002 | 1.0 | — | air | — |
| r₁₀ | +1.500 | 0.060 | 1.6385 | 55.5 | L7 | IV |
| r₁₁ | −0.846 | (BFD) | 1.0 | — | — | — |

**Computed system parameters** (verified via ABCD paraxial ray trace):

- EFL = 1.0001f (≈ 85.0 mm at production scale)
- BFD = 0.527f (≈ 44.8 mm)
- Total optical track = 0.772f (≈ 65.6 mm)
- Overall length (track + BFD) ≈ 110.4 mm
- Entrance pupil diameter ≈ 56.7 mm (at f/1.5)
- Half-field angle = 15°

## 4. Structural Overview

The design is a modified double-Gauss with a distinctive asymmetry: the object-side meniscus (Group II) is a cemented *triplet*, while the image-side meniscus (Group III) is a cemented *doublet*. This asymmetry is central to the patent's innovation — Ito argues that three elements in the front meniscus are necessary to simultaneously minimize the Petzval sum while maintaining coma correction.

The four groups have the following power balance:

| Group | Elements | Focal Length | Power (φ) | Role |
|-------|----------|------------:|----------:|------|
| I | L1 | +122.2 mm | +0.695 | Front positive collector |
| II | L2+L3+L4 | −106.4 mm | −0.799 | Object-side negative meniscus |
| III | L5+L6 | +500.0 mm | +0.170 | Image-side weak positive meniscus |
| IV | L7 | +72.7 mm | +1.169 | Rear positive collector |

The overall power arrangement is P–N–P–P, which departs from the classic double-Gauss template where both inner groups are negative menisci. Here, Group III is only weakly positive (φ = +0.170), contributing relatively little convergence — its primary role is aberration correction rather than power contribution. The dominant negative power resides entirely in Group II, and the rear collector (Group IV) carries the strongest positive power of any individual group, pulling the focal plane into position behind the lens.

## 5. Element-by-Element Analysis

### L1 — Front Positive Meniscus (Group I)

- **Shape:** Positive meniscus (R₁ = +0.822, R₂ = +9.500; both surfaces convex to object)
- **Glass:** nd = 1.6228, νd = 56.9 → **Schott SK10** (exact match)
- **Focal length:** +122.2 mm (thick-lens)
- **Role:** L1 serves as the front collecting element, gathering light from the object and beginning to converge it. Its very weak rear surface (r₂ = +9.500, nearly flat) means almost all of its refractive power comes from the front surface. As a meniscus with a low-dispersion crown glass, it introduces positive power with minimal chromatic aberration. Its moderate curvature keeps the angle of incidence on the front surface manageable at f/1.5, reducing higher-order spherical aberration contributions.

### L2 — Positive Meniscus (Group II, front element of cemented triplet)

- **Shape:** Positive meniscus (R₃ = +0.440, R₄ = +0.805)
- **Glass:** nd = 1.6385, νd = 55.5 → likely a dense barium crown of the **SK/BSM family** (six-digit code 639/555). No exact modern catalog match has been confirmed; this may be a proprietary Japanese melt from the early 1950s, or the historical Schott SK18.
- **Focal length:** +118.4 mm (thick-lens)
- **Cemented to:** L3 at surface r₄
- **Role:** L2 is the leading element of the critical object-side cemented triplet. Its steeply curved front surface (r₃ = +0.440, the third-strongest curvature in the system after r₆ and r₇) introduces substantial spherical aberration on-axis, which is intentional — per the patent text, the object-side meniscus is designed to "act in concave manner to correct spherical aberration on the axis." L2's crown glass provides positive power with moderate dispersion.

### L3 — Biconvex Positive (Group II, center element of cemented triplet)

- **Shape:** Biconvex (R₄ = +0.805, R₅ = −1.850)
- **Glass:** nd = 1.5163, νd = 64.0 → **Schott BK7** or equivalent (Δnd = +0.5×10⁻⁴, Δνd = +0.2 from exact BK7 values of 1.5168/64.2; within typical patent rounding)
- **Focal length:** +94.7 mm (thick-lens)
- **Cemented to:** L2 at r₄, L4 at r₅
- **Role:** L3 is the thickest single element in the system (d₄ = 0.190f = 16.15 mm). As a low-index, low-dispersion crown sandwiched between two higher-index glasses, it serves two purposes. First, it provides positive power to partially compensate L4's strong negative contribution, keeping the group's net power manageable. Second, the large index difference at the L3–L4 junction (Δnd = 0.173) creates the strong negative refractive power at surface r₅ that is central to spherical aberration correction. The use of BK7-type glass — the most common and economical optical crown — for this thick element was also likely a practical manufacturing consideration.

### L4 — Biconcave Negative (Group II, rear element of cemented triplet)

- **Shape:** Biconcave (R₅ = −1.850, R₆ = +0.252)
- **Glass:** nd = 1.6889, νd = 31.1 → **Schott SF8** (exact match)
- **Focal length:** −27.3 mm (thick-lens) — the strongest individual element
- **Cemented to:** L3 at r₅
- **Role:** L4 is the key dispersive (flint) element of the front meniscus group and the single most powerful element in the entire system. Its extremely short focal length dominates Group II's net negative power. The steeply curved rear surface r₆ = +0.252 (the strongest curvature in the system at |R| = 21.4 mm production scale) is the concave face that directly confronts the aperture stop. The patent specifies that the refractive power at the L3–L4 cemented interface (r₅) must exceed −0.08 in absolute value; the computed value is φ(r₅) = −0.0933, satisfying this condition. This interface is the primary surface for correcting axial spherical aberration. L4's high-dispersion flint glass also provides critical chromatic aberration correction by counteracting the dispersion of L2 and L3.

### L5 — Biconcave Negative (Group III, front element of cemented doublet)

- **Shape:** Biconcave (R₇ = −0.310, R₈ = +0.572)
- **Glass:** nd = 1.5317, νd = 48.9 → most likely **Schott LLF6** (nd = 1.5313, νd = 48.8; residuals Δnd = −0.4×10⁻⁴, Δνd = −0.1). This is a "light light flint" — a glass with moderate dispersion falling between crown and flint categories.
- **Focal length:** −32.0 mm (thick-lens)
- **Cemented to:** L6 at r₈
- **Role:** L5 is the concave-facing element of the image-side meniscus, directly opposing L4 across the stop. The patent emphasizes that this concave face (r₇) must have an absolute radius between 0.25f and 0.45f for proper oblique spherical aberration (coma) correction; the computed value |r₇| = 0.310f satisfies this constraint. Per the patent, the image-side meniscus "shall act in convex manner" — that is, the doublet's net power profile differs from the front meniscus. L5's choice of an intermediate-dispersion glass (rather than a heavy flint) reflects the asymmetric aberration correction strategy. The large index jump at the L5–L6 cemented interface (Δnd = 0.127) creates the strong positive refractive power (φ = +0.2215) that the patent requires to exceed +0.18.

### L6 — Biconvex Positive (Group III, rear element of cemented doublet)

- **Shape:** Biconvex (R₈ = +0.572, R₉ = −0.440)
- **Glass:** nd = 1.6584, νd = 50.8 → **Schott KzFS2** (exact match). This is a "short flint special" glass — a relatively unusual type with high index and moderate dispersion, positioned between the crown and flint families.
- **Focal length:** +33.5 mm (thick-lens)
- **Cemented to:** L5 at r₈
- **Role:** L6 provides the dominant positive power within Group III and is the element that gives the group its net (weakly) positive character. Its use of KzFS2 — a glass known for its anomalous partial dispersion characteristics — suggests that L6 plays a role in secondary chromatic aberration (secondary spectrum) correction. As the second-thickest element (d₈ = 0.103f = 8.76 mm), it also contributes substantially to the total optical path length. The biconvex shape with relatively steep curvatures on both surfaces makes L6 a strong converging element that partially compensates L5's negative power while directing the beam toward the rear collector.

### L7 — Biconvex Positive (Group IV)

- **Shape:** Biconvex (R₁₀ = +1.500, R₁₁ = −0.846)
- **Glass:** nd = 1.6385, νd = 55.5 → same glass type as L2 (dense barium crown, SK/BSM family)
- **Focal length:** +72.7 mm (thick-lens)
- **Role:** L7 is the rear collector element. It provides the final convergence needed to bring the image to focus at the film plane, contributing the second-strongest positive power among the individual elements. Its asymmetric biconvex shape (rear surface more steeply curved than front) helps minimize coma and astigmatism for off-axis rays that have already passed through the stop. The use of the same glass as L2 was likely a deliberate manufacturing economy — sharing glass types across a design reduces inventory complexity, a meaningful consideration for a low-volume production lens like the Serenar 85mm f/1.5.

## 6. Glass Selection Strategy

The design uses only five distinct glass types across seven elements:

| Glass Code | nd | νd | Catalog Match | Elements | Type |
|------------|----:|-----:|---------------|----------|------|
| 623/569 | 1.6228 | 56.9 | Schott SK10 | L1 | Dense barium crown |
| 639/555 | 1.6385 | 55.5 | SK family (unconfirmed) | L2, L7 | Dense barium crown |
| 517/640 | 1.5163 | 64.0 | Schott BK7 (≈) | L3 | Borosilicate crown |
| 689/311 | 1.6889 | 31.1 | Schott SF8 | L4 | Dense flint |
| 532/489 | 1.5317 | 48.9 | Schott LLF6 (≈) | L5 | Light light flint |
| 658/508 | 1.6584 | 50.8 | Schott KzFS2 | L6 | Short flint special |

The glass palette reflects a careful balance between aberration correction and 1950s-era glass availability. The crown elements (L1, L2, L3, L7) span a moderate range of indices (1.52–1.64), while the flint elements (L4, L5, L6) cover a wide dispersion range (νd = 31–51). The use of KzFS2 for L6 is particularly noteworthy — this "short flint special" glass has anomalous relative partial dispersion, meaning its blue-to-green dispersion ratio deviates from the normal glass line. This property is useful for secondary spectrum correction in fast lenses where longitudinal chromatic aberration must be tightly controlled.

With the exception of KzFS2 (L6), whose anomalous partial dispersion is noted above, none of the glasses in this design exhibit the strong anomalous partial dispersion characteristics seen in modern ED (extra-low dispersion) or fluorite elements. This is expected for a 1951 design — such specialty glasses did not become widely available to Japanese manufacturers until the 1960s and 1970s. KzFS2's anomalous dispersion is comparatively modest and represents the extent of what was available for secondary spectrum control in this era.

## 7. Aperture Stop and Focusing

### Stop Position

The aperture stop is located in the air gap d₆ = 0.190f (≈ 16.2 mm) between Groups II and III, between surfaces r₆ and r₇. This is the classic Gauss-type stop placement: centered between the two opposing meniscus compound lenses. The patent does not specify the exact axial position of the iris within this gap, but the Figure 1 drawing shows it approximately centered, which is consistent with the symmetry of the design.

The stop has 20 diaphragm blades (per Canon Camera Museum specifications), producing a nearly circular aperture at all f-stops — an unusually high blade count that contributes to the smooth out-of-focus rendering that users of this lens frequently praise.

### Focusing Mechanism

The patent does not specify the focusing mechanism, which is typical for lens patents of this era that concern themselves only with the optical design. However, based on the design structure and the era of manufacture, this lens almost certainly uses **unit focusing** — the entire optical assembly moves forward as a unit to focus on closer objects, with only the back focal distance changing.

This is confirmed by the Canon Camera Museum specification of a 1.0 m minimum focus distance. With unit focusing, the entire lens assembly translates forward along the optical axis; the distance from the last surface to the film plane increases as the lens extends to accommodate closer subjects. There are no internal floating elements or rear-focus groups — the design predates such mechanisms in photographic lenses.

## 8. Patent Conditional Expressions

Ito's patent establishes several design conditions that the prescription must satisfy. All conditions are verified computationally for Example 1:

| Condition | Required | Computed | Status |
|-----------|----------|----------|--------|
| φ at last cemented face of Group II (r₅) | \|φ\| > 0.08 | \|−0.0933\| = 0.0933 | ✓ |
| φ at first cemented face of Group III (r₈) | \|φ\| > 0.18 | \|+0.2215\| = 0.2215 | ✓ |
| \|r₇\| / f (concave face of Group III) | 0.25 – 0.45 | 0.310 | ✓ |
| Axial thickness of Group II / f | > 0.25 | 0.295 | ✓ |

The patent further specifies in Claim 6 (which corresponds to Example 1) that the Group II thickness should be "substantially 0.295 times" the focal length, the refractive power at r₅ should be "substantially −0.093," and the power at r₈ should be "substantially 0.221." All three values match the computed results exactly.

## 9. Aberration Correction Philosophy

Ito's patent text explains the design philosophy clearly. Prior Gauss-type lenses with apertures above f/1.5 suffered from a persistent problem: while axial spherical aberration could be corrected relatively straightforwardly by adjusting the cemented surfaces, the oblique spherical aberration (coma, in modern terminology "sagittal coma flare") was extremely difficult to remove across the full image field. This produced "considerable unpleasant shading-off" at wide aperture — a loss of contrast and resolution toward the edges of the frame.

Ito's solution involved two key insights:

1. **Three-element front meniscus:** By composing Group II from three cemented lenses rather than the conventional two, the designer gains an additional cemented interface to distribute the aberration correction. The thick BK7 center element (L3) serves as a "spacer" that separates the two strongly refracting interfaces (r₃ entering L2, and r₅/r₆ at the L3–L4 boundary), reducing the angle of incidence of off-axis rays at each surface and thereby reducing higher-order aberration contributions.

2. **Asymmetric meniscus action:** The front meniscus "acts in concave manner" (its concave exit face r₆ is the dominant aberration-correcting surface), while the rear meniscus "acts in convex manner" (its cemented interface r₈ provides the correction). This asymmetry allows independent control of the tangential and sagittal field components, enabling coma correction without disturbing the axial spherical aberration balance.

The Petzval sum of the design is 0.186 (normalized to f = 1), yielding a Petzval field curvature radius of approximately 457 mm at production scale. This is a moderately high value for an 85mm lens and indicates inward-curving field — a common trade-off in fast Gauss designs where the strong negative power of the inner groups cannot fully flatten the field without sacrificing aperture or other aberrations.

## 10. Production Specifications Summary

The following specifications are drawn from Canon's first-party documentation (Canon Camera Museum):

| Parameter | Value |
|-----------|-------|
| Marketed | June 1952 |
| Focal length | 85 mm |
| Maximum aperture | f/1.5 |
| Minimum aperture | f/16 |
| Lens construction | 7 elements / 4 groups |
| Including field | 30° (patent) |
| Diaphragm blades | 20 |
| Closest focus distance | 1.0 m |
| Filter diameter | 58 mm |
| Dimensions (max dia. × length) | 62.5 × 82.8 mm |
| Weight | 730 g |
| Mount | Leica screw mount (M39 / LTM) |

---

## 11. Data File Adaptation Notes

The companion `.data.ts` file adapts the patent prescription for the interactive renderer with the following accommodations:

- **Air gap d₂ widened:** The patent specifies d₂ = 0.002f (0.17 mm at production scale) between L1 and the cemented triplet. At the estimated front-element semi-diameter of 27 mm, the sag of the nearly flat r₂ surface (R = 807.5 mm) exceeds this gap thickness (0.45 mm > 0.17 mm), causing a cross-gap overlap violation in the renderer's validator. The gap was widened to 0.50 mm (0.006f) to clear this constraint. The optical impact is negligible: ΔEFL < 0.2 mm, ΔBFD < 0.2 mm. The adjusted BFD at infinity is 44.63 mm (vs. 44.79 mm from the unmodified prescription).

- **Stop position inferred:** The patent does not specify the exact axial position of the iris within the d₆ gap. Based on the Figure 1 drawing, the stop is placed at the center of the gap, splitting d₆ = 16.15 mm into two equal halves of 8.075 mm. The physical stop semi-diameter of 15.5 mm is derived from the paraxial marginal ray trace at f/1.5.

- **Semi-diameters estimated:** The patent does not list semi-diameters. Values were estimated from a paraxial marginal ray trace at f/1.5 with 8–10% mechanical clearance, constrained by the 58 mm filter thread diameter, the 1.25× front-to-rear SD ratio limit per element, and the sd/|R| < 0.90 validator limit (particularly significant for the steeply curved r₆ surface at R = 21.42 mm).

---

*Analysis based on US Patent 2,645,973 Example 1 (Figure 1). All focal lengths, powers, and conditional expression values independently verified via ABCD paraxial ray trace. Glass identifications are best-effort matches against historical Schott catalogs; production glasses may have been sourced from Japanese manufacturers (Ohara, Hoya, or Sumita) using equivalent or proprietary melt formulations.*
