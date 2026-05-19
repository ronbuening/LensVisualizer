# Fujifilm Fujinon GF 120mm f/4 R LM OIS WR Macro — Optical Analysis

## Patent Reference and Design Identification

**Patent:** US 2018/0059384 A1, "Imaging Lens and Imaging Apparatus."
**Applicant:** FUJIFILM Corporation, Tokyo (JP).
**Inventor:** Taiga Noda, Saitama (JP).
**Filed:** June 13, 2017. **Published:** March 1, 2018.
**Priority:** Japanese Patent Application No. 2016-162462, filed August 23, 2016.
**Embodiment analyzed:** Example 1 (Tables 1–3, FIGS. 1, 6–7).

The identification of Example 1 as the production Fujinon GF120mmF4 R LM OIS WR Macro rests on convergent evidence across multiple independent criteria:

1. **Element and group count.** The production lens specifies 14 elements in 9 groups. Example 1 contains exactly 14 elements distributed across 9 air-separated groups (within 5 functional lens groups G1–G5), matching the manufacturer specification precisely.

2. **ED element count.** The production lens specifies three extra-low dispersion elements. Example 1 contains three elements with nd = 1.49700 and νd = 81.54, identified as S-FPL51 (OHARA), a fluorophosphate ED crown. These occupy positions L12 (G1), L31 (G3), and L42 (G4), consistent with the manufacturer's specification of three ED elements.

3. **Focal length.** Example 1 yields a computed EFL of 116.36 mm at the d-line, consistent with Fujifilm's 120 mm marketing designation.

4. **Aperture.** The patent specifies F/4.12 at infinity, consistent with the marketed F/4.0 maximum aperture.

5. **Angle of view.** The patent states 2ω = 26.4° at infinity; the manufacturer lists 25.7°. The small difference is within the range of nominal rounding and field-angle definition differences (geometric vs. vignetted).

6. **Macro capability with 0.5× magnification.** The patent's close-focus state is labeled "MOD" (minimum object distance) and the figures show β = −0.5×, matching the manufacturer's maximum magnification of 0.5×. The patent lists a close-focus distance of 0.28075 m from the front vertex; the total optical path from front vertex to image plane is approximately 173 mm, so the predicted sensor-to-subject distance is 280.8 + 173.0 ≈ 454 mm, consistent with the manufacturer's 0.45 m MFD.

7. **OIS (camera shake correction).** The patent specifies that the third lens group G3 moves perpendicular to the optical axis for image stabilization, consistent with Fujifilm's 5-stop OIS specification.

8. **Floating focus.** The patent describes a dual-group inner focus system (G2 and G4 moving along different trajectories), consistent with Fujifilm's description of a "floating focus system with two linear motors."

9. **Patent timing.** The priority date (August 2016) precedes the lens announcement (January 2017) and market availability (2017), consistent with the standard Fujifilm patent-to-product timeline.

## Optical Architecture

The GF120mm f/4 Macro is a five-group macro design with a positive-negative-positive-positive-negative power distribution. Fourteen glass elements are distributed across five functional groups:

| Functional Group | Elements | Power | Role |
|---|---|---|---|
| G1 (front) | L11, L12+L13, L14 (4 elements, 3 air-separated components) | Positive (f₁ = +72.8 mm) | Front collector; primary light-gathering and spherical/chromatic correction |
| G2 (focus group A) | L21, L22+L23 (3 elements, 2 components) | Negative (f₂ = −49.3 mm) | Inner focus group; moves 13.5 mm toward image at close focus |
| G3 (OIS group) | L31+L32 (2 elements, 1 cemented component) | Positive (f₃ = +113.4 mm) | Image stabilization group; shifts perpendicular to axis |
| G4 (focus group B) | L41, L42+L43 (3 elements, 2 components) | Positive (f₄ = +90.6 mm) | Inner focus group; moves 12.45 mm toward object at close focus |
| G5 (rear) | L51+L52 (2 elements, 1 cemented component) | Negative (f₅ = −67.2 mm) | Field flattener and telecentricity corrector |

An aperture stop (St) is positioned in the air space between G2 and G3. The overall topology — positive front group, negative diverging group, positive relay, positive focus group, and a strongly negative rear group — is a configuration the patent describes as suitable for mirrorless cameras with short back focuses (¶0069). The total track from front vertex to image plane is 173.0 mm (including the cover glass optical path), which exceeds the 116.4 mm EFL (telephoto ratio ≈ 1.49), so this is not a telephoto design in the classical sense; rather, the negative rear group (G5) serves primarily to bend the exit pupil rearward, achieving adequate telecentricity for the GFX sensor's microlens array while maintaining a back focal distance of approximately 36.7 mm (optical, before cover glass).

The total track is conserved during focusing to within rounding tolerance (< 0.001 mm), confirming that the lens maintains constant overall length during focus — a desirable property for macro lenses where extension would alter working distance.

The Petzval sum is +0.000737 mm⁻¹, corresponding to a Petzval radius of approximately 1,357 mm. This positive value means the uncorrected Petzval surface curves toward the lens (the image field is undercorrected for curvature). The moderate magnitude indicates that the power distribution across the five groups — particularly the strongly negative G5 — substantially flattens the Petzval surface relative to what the positive groups alone would produce, though residual field curvature is managed through the cemented-doublet corrections and the astigmatism balance across the system.

## Element-by-Element Analysis

### L11 — Biconvex Positive

nd = 1.48749, νd = 70.24. Glass: S-FSL5 (OHARA). f = +135.2 mm.

L11 is the front element of the system, a weakly positive biconvex lens (R₁ = +92.15, R₂ = −227.31). The S-FSL5 glass is a fluorosilicate crown with low dispersion, well suited for a front element where it collects the marginal ray bundle at full aperture while introducing minimal chromatic aberration. Its modest power distributes the refractive workload, reducing surface contributions to spherical aberration. The biconvex shape is nearly plano-convex (the rear surface is weakly curved), placing more bending on the front surface — which is the conventional minimum-deviation form for a converging front element receiving collimated light.

The θgF = 0.53007 places this glass slightly above the Schott normal line (ΔPgF ≈ +0.004), indicating mildly anomalous partial dispersion — a subtle secondary-spectrum benefit.

### L12+L13 — Cemented Doublet (D1), G1

**L12** — Biconvex Positive (ED). nd = 1.49700, νd = 81.54. Glass: S-FPL51 (OHARA) — ED fluorophosphate crown. f = +70.5 mm.

**L13** — Biconcave Negative. nd = 1.74950, νd = 35.28. Glass: S-NBH51 (OHARA) — niobium-barium heavy flint. f = −41.0 mm.

**Doublet combined:** f = −112.9 mm (net negative).

This is the first of the three ED-containing doublets and constitutes the primary longitudinal chromatic aberration corrector for the front group. The pairing of S-FPL51 (νd = 81.54, ΔPgF ≈ +0.031) with S-NBH51 (νd = 35.28) achieves a large Abbe-number difference of Δν ≈ 46 in a compact cemented interface, providing strong primary chromatic correction. The anomalous partial dispersion of S-FPL51 simultaneously addresses secondary spectrum.

Despite containing two individually strong elements, the doublet as a combined unit is weakly negative (f ≈ −113 mm). The patent text at ¶0122 explains this arrangement: the positive-negative-positive sub-structure of G1 (L11, then L12+L13 net negative, then L14 positive) suppresses spherical aberration and longitudinal chromatic aberration while maintaining the overall positive power of G1.

### L14 — Positive Meniscus, Convex to Object

nd = 1.85150, νd = 40.78. Glass: S-LAH85V (OHARA) — high-index lanthanum glass. f = +62.4 mm.

L14 is the rearmost element of G1, a strongly positive meniscus (R₁ = +47.52, R₂ = +429.86) made of high-index S-LAH85V glass. The high refractive index (nd = 1.852) allows this element to carry substantial positive power with reduced surface curvatures, which limits higher-order spherical aberration contributions. Its meniscus shape (both radii have the same sign) bends the converging beam gently toward the axis, preparing the ray bundle for the diverging G2 group.

The conditional expression (10) in the patent governs the air-lens shape between L13's rear surface (R = +39.06) and L14's front surface (R = +47.52). The computed value of (L13r − L14f)/(L13r + L14f) = −0.0976 satisfies expression (10), indicating that this air space is designed to balance longitudinal chromatic aberration against spherical aberration.

### L21 — Biconcave Negative

nd = 1.83481, νd = 42.72. Glass: S-LAH55V (OHARA) — high-index lanthanum glass. f = −34.9 mm.

L21 is the front element of the focusing group G2, a strongly negative biconcave lens (R₁ = −204.56, R₂ = +34.02). The strongly curved rear surface is the primary source of this element's diverging power. S-LAH55V is a high-index lanthanum glass frequently used in Fujifilm designs where strong negative power must be achieved without excessive surface curvature. This element begins the divergence of the marginal ray bundle, reducing its height before it enters the L22+L23 doublet.

### L22+L23 — Cemented Doublet (D2), G2

**L22** — Biconcave Negative. nd = 1.51742, νd = 52.43. Glass: S-NSL36 (OHARA) — light silicate glass. f = −43.3 mm.

**L23** — Biconvex Positive. nd = 1.80000, νd = 29.84. Glass: S-LAH52Q (OHARA) — high-index anomalous-dispersion lanthanum flint. f = +34.2 mm.

**Doublet combined:** f = +148.3 mm (weakly positive).

This doublet is the chromatic corrector for G2. The pairing is unusual: S-NSL36 is a moderate-dispersion silicate glass (νd = 52.43) while S-LAH52Q is a strongly dispersive lanthanum flint (νd = 29.84, θgF = 0.60178 — well above the normal line). The large Abbe difference (Δν ≈ 23) provides lateral chromatic aberration correction within G2. The doublet is net weakly positive, so the overall negative power of G2 comes predominantly from L21. The patent at ¶0135 states that this three-element negative-negative-positive structure in G2 suppresses variation in astigmatism during focusing.

### L31+L32 — Cemented Doublet (D3 / G3, OIS Group)

**L31** — Biconvex Positive (ED). nd = 1.49700, νd = 81.54. Glass: S-FPL51 (OHARA) — ED fluorophosphate crown. f = +53.5 mm.

**L32** — Negative Meniscus, Concave to Object. nd = 1.72000, νd = 43.69. Glass: S-LAM52 (OHARA) — lanthanum flint. f = −100.7 mm.

**Doublet combined (= G3):** f = +113.4 mm.

This cemented doublet constitutes the entire G3 group, which serves as the optical image stabilization (OIS) element. During camera shake correction, this doublet moves perpendicular to the optical axis. The patent at ¶0098 explains that making G3 a single cemented lens component simplifies the mechanical structure of the stabilization mechanism and suppresses aberration variation from assembly tolerances.

The conditional expression (3) requires that the positive element's Abbe number satisfy 60 < νd3p < 100; S-FPL51 at νd = 81.54 satisfies this comfortably, suppressing longitudinal chromatic aberration that would otherwise degrade during OIS decentering. The cemented interface between L31 and L32 cancels a significant fraction of the lateral color that would be generated by the decentered positive element alone.

The shape factor of L32, governed by conditional expression (4), produces (L3nf − L3nr)/(L3nf + L3nr) = −0.331, within the specified range. This meniscus shape (both radii negative, concave to object) was chosen to correct spherical aberration and its chromatic variation during stabilization (¶0087–0089).

The ratio DD3/DL = 0.059 satisfies conditional expression (5), ensuring that G3 is thin enough relative to the overall system to be lightweight for the OIS actuator, while still maintaining sufficient power (f/f3 = 1.03) for effective stabilization with small decentering motions (¶0095–0096). Here DL = 132.0 mm is the axial distance from the first to the last surface apex of the lens system at infinity focus.

### L41 — Positive Meniscus, Concave to Object

nd = 1.70154, νd = 41.24. Glass: S-BAH27 (OHARA) — barium flint. f = +122.9 mm.

L41 is the front element of focusing group G4, a meniscus with both radii negative (R₁ = −120.66, R₂ = −50.75), concave toward the object. This shape provides weakly positive power while presenting a concave surface to the converging beam from G3, which helps control coma and astigmatism. The S-BAH27 glass has moderate dispersion and a refractive index of 1.702 — a compromise that balances optical performance against element weight in this movable focus group.

### L42+L43 — Cemented Doublet (D4), G4

**L42** — Biconvex Positive (ED). nd = 1.49700, νd = 81.54. Glass: S-FPL51 (OHARA) — ED fluorophosphate crown. f = +61.7 mm.

**L43** — Negative Meniscus, Concave to Object. nd = 1.62588, νd = 35.70. Glass: E-F1 (HOYA) — dense flint. f = −74.7 mm.

**Doublet combined:** f = +342.4 mm (weakly positive).

This is the third ED doublet. The S-FPL51 + E-F1 pairing achieves a large Abbe difference (Δν ≈ 46) and also leverages the anomalous partial dispersion of S-FPL51 to correct secondary spectrum introduced by the converging beam geometry at this location. The doublet is weakly positive, contributing modestly to G4's overall positive power (f₄ = +90.6 mm), with L41 providing the majority. The distribution of power between L41 (a singlet) and the weakly positive D4 helps maintain stable aberration correction across the focus range.

### L51+L52 — Cemented Doublet (D5 / G5, Rear Group)

**L51** — Biconcave Negative. nd = 1.80400, νd = 46.58. Glass: S-LAH65V (OHARA) — high-index lanthanum glass. f = −27.6 mm.

**L52** — Plano-Convex Positive. nd = 1.83400, νd = 37.16. Glass: S-LAH60V (OHARA) — high-index lanthanum flint. f = +47.3 mm.

**Doublet combined (= G5):** f = −67.2 mm.

G5 is a powerfully negative rear group positioned after a large air space from G4. It performs two critical functions: it flattens the image field across the 43.8 × 32.9 mm GFX sensor, and it bends the exit pupil rearward to achieve adequate telecentricity for the sensor's microlens array — essential for mirrorless medium-format systems with short back focuses (¶0070).

The conditional expression (6) requires 30 < νd5p < 45 for the positive element; S-LAH60V at νd = 37.16 satisfies this, and the patent explains at ¶0106 that this constraint corrects secondary lateral chromatic aberration. The pairing of two high-index glasses (nd > 1.8 for both) allows G5 to achieve its strong negative power (f/f5 = −1.73) without excessive surface curvatures, which would otherwise introduce coma and astigmatism at the large beam heights present at this rear position.

The flat rear surface of L52 (R = ∞) simplifies manufacture and mounting, and forms the last optical surface before the back focal distance and cover glass assembly.

## Glass Identification and Selection

All 14 glasses resolve to OHARA catalog entries with exact (Δnd = 0, Δνd < 0.02) matches, consistent with Fujifilm's established sourcing relationship with OHARA for their GFX lens series.

| Element | nd | νd | θgF | Glass (OHARA) | Class | Role |
|---|---|---|---|---|---|---|
| L11 | 1.48749 | 70.24 | 0.53007 | S-FSL5 | Fluorosilicate crown | Low-aberration front element |
| L12 | 1.49700 | 81.54 | 0.53748 | S-FPL51 | ED fluorophosphate crown | Primary chromatic corrector (G1) |
| L13 | 1.74950 | 35.28 | 0.58704 | S-NBH51 | Niobium-barium heavy flint | Achromatic partner to L12 |
| L14 | 1.85150 | 40.78 | 0.56958 | S-LAH85V | High-index lanthanum glass | Strong positive power, low SA |
| L21 | 1.83481 | 42.72 | 0.56486 | S-LAH55V | High-index lanthanum glass | Primary diverger (G2) |
| L22 | 1.51742 | 52.43 | 0.55649 | S-NSL36 | Light silicate glass | Chromatic corrector (G2) |
| L23 | 1.80000 | 29.84 | 0.60178 | S-LAH52Q | High-index lanthanum flint | Chromatic corrector flint (G2) |
| L31 | 1.49700 | 81.54 | 0.53748 | S-FPL51 | ED fluorophosphate crown | OIS group chromatic corrector |
| L32 | 1.72000 | 43.69 | 0.56995 | S-LAM52 | Lanthanum flint | Achromatic partner to L31 |
| L41 | 1.70154 | 41.24 | 0.57664 | S-BAH27 | Barium flint | Focus group singlet (G4) |
| L42 | 1.49700 | 81.54 | 0.53748 | S-FPL51 | ED fluorophosphate crown | Focus group chromatic corrector |
| L43 | 1.62588 | 35.70 | 0.58935 | E-F1 | Dense flint | Achromatic partner to L42 |
| L51 | 1.80400 | 46.58 | 0.55730 | S-LAH65V | High-index lanthanum glass | Rear diverger |
| L52 | 1.83400 | 37.16 | 0.57759 | S-LAH60V | High-index lanthanum flint | Lateral chromatic corrector |

The chromatic correction strategy is built around three instances of S-FPL51, each paired with a different high-dispersion partner glass. S-FPL51's anomalous partial dispersion (ΔPgF ≈ +0.031) means that each ED doublet corrects both primary and secondary spectrum simultaneously. The three ED elements are distributed across three different functional groups — G1 (front collector), G3 (OIS), and G4 (rear focus) — so that chromatic correction remains stable regardless of focus position or OIS decentering state. This distributed ED architecture is a notable feature of the design, ensuring that neither the floating focus nor the image stabilization mechanism degrades the chromatic correction established at infinity.

## Focus Mechanism

The GF120mm f/4 Macro employs a dual-group inner focus system. During focusing from infinity to the minimum object distance (0.45 m from sensor, β = −0.5×), two groups move axially while the remaining three groups remain stationary relative to the image plane:

| Group | Movement (INF → MOD) | Direction |
|---|---|---|
| G1 | Fixed (0 mm) | — |
| G2 (L21, L22+L23) | +13.50 mm | Toward image |
| G3 (L31+L32) | Fixed axially (0 mm) | Perpendicular only (OIS) |
| G4 (L41, L42+L43) | −12.45 mm | Toward object |
| G5 (L51+L52) | Fixed (0 mm) | — |

The two focus groups move in opposite directions (G2 toward the image, G4 toward the object), which the patent explains at ¶0099 reduces aberration sensitivity to assembly errors where both groups might shift in the same direction. The counter-moving geometry also maintains the total track length to within 0.001 mm, ensuring the lens barrel does not change physical length during focus — a practical advantage for macro work.

The variable air gaps at infinity and close focus are:

| Gap | Infinity | Close (0.28 m) | Change |
|---|---|---|---|
| DD[7] (G1–G2) | 3.232 mm | 16.729 mm | +13.497 mm |
| DD[12] (G2–G3) | 20.862 mm | 7.364 mm | −13.498 mm |
| DD[16] (G3–G4) | 24.855 mm | 12.408 mm | −12.447 mm |
| DD[21] (G4–G5) | 26.884 mm | 39.331 mm | +12.447 mm |

The sum of all four variable gaps is conserved at 75.83 mm (to within rounding), confirming constant overall length. Both focus groups are driven by linear motors (LM), as indicated by the lens designation, providing fast and silent autofocus performance suitable for video recording on the GFX platform.

At close focus, the effective focal length shortens from 116.4 mm to 84.3 mm and the effective f-number increases from F/4.12 to F/5.94, as is characteristic of internal-focusing macro designs. The half-field angle narrows from 13.2° to 8.4°.

## Aspherical Surfaces

The Example 1 prescription is entirely spherical. No aspherical coefficients are listed for any surface, and no aspherical surface labels (suffix "A") appear in the prescription data. All 14 elements use conventional spherical surfaces.

This is noteworthy for a modern 14-element macro design. The absence of aspherics indicates that the aberration correction is achieved entirely through the glass selection (three ED elements with anomalous partial dispersion), the careful distribution of power across five groups, and the cemented-doublet architecture. The trade-off for an all-spherical design is typically a simpler manufacturing process — particularly relevant for medium-format optics where element diameters are larger and aspherical surfaces are more costly to produce — at the expense of somewhat larger residual higher-order aberrations compared to an asphere-assisted design.

## Image Stabilization

The OIS mechanism uses the entire G3 group (the L31+L32 cemented doublet) as the stabilization element, which shifts perpendicular to the optical axis during camera shake correction. Fujifilm rates the system at 5 stops of stabilization.

The choice of G3 — a centrally located, positive, single-component cemented doublet — for the OIS element offers several advantages described in the patent:

The central location (between the stop and the second focus group) provides a favorable ratio of image shift to element shift, minimizing the required mechanical travel for a given correction angle (¶0070, ¶0074). The single-component structure simplifies the actuator mechanism and avoids tilt-induced aberrations that would occur with a multi-element OIS group (¶0098). The relatively low weight of the cemented doublet (DD3 = 7.75 mm axial thickness, DD3/DL = 0.059) allows fast response from the OIS actuator without excessive power consumption (¶0096).

The use of S-FPL51 (ED glass) in the stabilization group is critical: it ensures that lateral chromatic aberration remains well corrected even when the group is decentered from the optical axis during stabilization. This is a design refinement that distinguishes high-performance OIS implementations from simpler single-element stabilization schemes.

## Conditional Expression Summary

The patent defines eight primary conditional expressions governing the design's critical ratios. All are satisfied by Example 1:

| Expression | Formula | Computed | Required Range | Satisfied? |
|---|---|---|---|---|
| (1) | f/f2 | −2.361 | −3.3 to −1.8 | Yes |
| (2) | f/f3 | 1.027 | 0.85 to 1.45 | Yes |
| (3) | νd3p | 81.54 | 60 to 100 | Yes |
| (4) | (L3nf−L3nr)/(L3nf+L3nr) | −0.331 | −0.5 to −0.16 | Yes |
| (5) | DD3/DL | 0.059 | 0.04 to 0.1 | Yes |
| (6) | νd5p | 37.16 | 30 to 45 | Yes |
| (7) | f/f5 | −1.732 | −2.0 to −0.8 | Yes |
| (8) | f/f1 | 1.599 | 1.4 to 2.0 | Yes |

The tighter preferred ranges (expressions 1-1 through 8-1) are also satisfied in all cases.

## Design Heritage and Context

The GF120mm f/4 Macro was one of the launch lenses for the Fujifilm GFX 50S system announced in January 2017, making it among the earliest purpose-built autofocus macro lenses for a mirrorless medium-format platform. The patent cites three prior-art designs (JP2014-219601A, JP2014-142601A, JP5584064B) as related five-group positive-negative-positive-positive-negative macro designs, but notes their limitations: weak OIS power (JP2014-219601A), poor suitability for short-distance imaging (JP2014-142601A), and rear-group OIS placement incompatible with short-flange mirrorless mounts (JP5584064B).

The GF120mm's central-group OIS architecture and dual-linear-motor focus system represent Fujifilm's solution to these constraints, enabling a compact 0.5× macro lens with effective stabilization for the short-flange GFX mount while maintaining constant length during focus.

## Sources

- US 2018/0059384 A1 (primary source for all prescription data and design rationale).
- Fujifilm product page, "GF120mmF4 R LM OIS WR Macro — Specifications," fujifilm-x.com/global (manufacturer specifications for element count, focal length, aperture, MFD, magnification, filter size, weight).
- OHARA Optical Glass Catalog (glass identification cross-reference for nd/νd/θgF values).
