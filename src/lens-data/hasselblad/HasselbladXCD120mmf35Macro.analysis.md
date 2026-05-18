# Hasselblad XCD 3,5/120 Macro — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** US 2020/0192060 A1, "Optical System for Image Pickup, and Image Pickup Device"
**Applicant / Assignee:** Nittoh Inc., Suwa-shi, Nagano, Japan
**Inventor:** Akira Sawamoto
**Filed:** May 25, 2018 (PCT/JP2018/020089)
**Priority:** May 26, 2017 (JP 2017-104151)
**Published:** June 18, 2020
**Embodiment analyzed:** Example 2 (Figs. 5–8)

The prescription in Example 2 of this patent corresponds to the production Hasselblad XCD 3,5/120mm Macro lens. The identification rests on the following convergent evidence:

1. **Element and group count.** The patent describes 10 elements. The manufacturer specifies "10 elements in 7 groups." The patent organizes the elements into six functional groups (G1–G6), but G2 contains a cemented pair (L21+L22) separated by a 0.77 mm air gap from singlet L23 — yielding seven air-separated groups in the standard optical-industry counting convention.
2. **Focal length.** The patent states $f = 120.0$ mm at infinity focus. Hasselblad's datasheet specifies 120.0 mm.
3. **Maximum aperture.** The patent states F/3.5. The production lens is marketed as f/3.5.
4. **Minimum focus distance.** The patent lists 0.43 m (from the image plane) at closest focus. Hasselblad specifies 0.43 m.
5. **Maximum magnification.** The patent gives $\beta = 0.5$ (1:2). The production lens is rated at 1:2.
6. **Image circle.** The patent states $\phi 56$ mm (¶0061). The Hasselblad X-system sensor is 43.8 × 32.9 mm, with a diagonal of approximately 54.8 mm. A 56 mm image circle covers this sensor with adequate margin.
7. **Focus mechanism.** The patent describes internal focusing where G2, G4, and G5 move while G1, G3, G6, and the stop remain fixed, yielding a constant overall length. Hasselblad describes "internal focusing with floating mechanism."
8. **All-spherical design.** The patent explicitly states that "every lens that constructs the optical system is a spherical lens" (¶0042). No aspherical coefficient tables appear in the patent for any of the four examples. The production lens is consistent with this — no marketing literature identifies aspherical elements.
9. **Manufacturer relationship.** Nittoh Kogaku K.K. (Nittoh Inc.) is the documented contract manufacturer of early-generation Hasselblad XCD lenses. The patent assignee, lens specification, and manufacturing timeline are all consistent.
10. **Patent timing.** Priority date May 2017 aligns with the XCD 120mm Macro's announcement in early 2017 and market availability in late 2017.

## Optical Architecture

The XCD 3,5/120 Macro is a **doubled telephoto-type** (or "doubled reversed-retrofocus") design: two symmetric halves, each with a positive–positive–negative power arrangement, are coupled on either side of a central aperture stop. The full power distribution is:

$$G1(+) \;\;G2(+) \;\;G3(-) \;\;\text{[STO]} \;\;G4(+) \;\;G5(+) \;\;G6(-)$$

This architecture is described in the patent as "telephoto-type optical systems that each have a positive–positive–negative arrangement of refractive powers and are coupled on the object side and the image plane side with the aperture stop in between" (¶0005). The term "telephoto" here refers to the power layout within each half (positive front / negative rear), not to the overall telephoto ratio of the complete system. The total track from the front vertex to the image plane (air-equivalent, cover glass excluded) is 153.4 mm, giving a telephoto ratio of $153.4/120.0 = 1.28$ — the system is slightly longer than its focal length, as is typical for macro lenses that must accommodate large focus travel.

### Group summary

| Group | Elements | Power | Focal length | Role |
|-------|----------|-------|-------------|------|
| G1 | L11 (1 element) | Positive | +156.7 mm | Front collector; fixed |
| G2 | L21+L22 (cemented) + L23 (3 elements) | Positive | +181.7 mm | Chromatic corrector; moves during focus |
| G3 | L31+L32 (cemented, 2 elements) | Negative | −87.4 mm | Diverging group; fixed |
| G4 | L41 (1 element) | Positive | +91.4 mm | Primary focus group; moves during focus |
| G5 | L51+L52 (cemented, 2 elements) | Positive | +147.4 mm | Aberration fine-tuning; moves with reversal |
| G6 | L61 (1 element) | Negative | −76.6 mm | Field flattener / image-circle expander; fixed |

Group focal lengths are independently computed via ABCD matrix method (thick-lens, in-air). The patent's Fig. 6 table lists slightly different group focal lengths (e.g. G1 = 155.52, G4 = 91.13), likely computed via a different method or rounding convention; the independently verified values above are used throughout this analysis.

The design achieves macro capability (1:2 magnification at 0.43 m) with a constant vertex-to-vertex optical length of approximately 120.9 mm (front surface of L11 to rear surface of L61) and a compact maximum lens diameter of 42 mm (prescription-table effective diameter), using only 10 spherical elements and no aspherical surfaces.

## Element-by-Element Analysis

### L11 — Equiconvex Positive (G1)

nd = 1.85026, νd = 32.27. Glass: lanthanum flint, 850/323 (no confirmed public catalog match; possible S-NBH55 class, OHARA). $f = +156.7$ mm.

L11 is a symmetric biconvex singlet ($R_1 = +265.47$, $R_2 = -265.47$) serving as the front positive collector. Its high refractive index (1.850) allows the necessary convergent power with large radii of curvature, minimizing the surface contribution to spherical aberration at the full 42 mm clear aperture. The equiconvex symmetry further minimizes coma for on-axis ray bundles.

As the outermost element and the fixed front of the system, L11 determines the filter thread constraint. Its 42 mm effective diameter is well within the 77 mm filter thread of the production lens, leaving ample room for the mechanical barrel.

The relatively low Abbe number (νd = 32.3) is unusual for a front positive element — it contributes positive chromatism that must be corrected downstream. The patent addresses this through the cemented achromat B1 in G2, whose ED crown (L21) is specifically selected to offset the chromatic contribution of the front group.

### Cemented Doublet B1: L21 + L22 (G2, front sub-group)

**L21 — Biconvex Positive.**
nd = 1.53775, νd = 74.70. Glass: S-FPM3 (OHARA) — ED fluorophosphate crown. $f = +52.6$ mm.

**L22 — Biconcave Negative.**
nd = 1.74077, νd = 27.79. Glass: S-TIH13 (OHARA) / E-FD13 (HOYA) — dense flint. $f = -33.2$ mm.

**Cemented doublet B1 net:** $f = -108.8$ mm (net negative power).

The cemented doublet B1 is the primary chromatic correction engine of the system. L21 uses a fluorophosphate ED glass with νd = 74.7, paired with L22's dense flint at νd = 27.8 — a dispersion difference of nearly 47 Abbe numbers. The patent describes this as a "balsam lens ... capable of effectively correcting chromatic aberration" (¶0032) and specifies that it must satisfy Condition (3): $1.45 < \text{nd}_{21} < 1.65$, $65 < \text{νd}_{21} < 85$, $1.65 < \text{nd}_{22} < 1.85$, $20 < \text{νd}_{22} < 40$. Example 2's values satisfy all four inequalities.

The cement interface at $R = -75.47$ mm carries a large refractive index step ($\Delta n = 0.203$) and — more importantly — the largest Abbe number difference of any cemented interface in the system ($\Delta\nu_d = 46.9$), making it the strongest chromatic-correcting surface. Because B1 moves during focus, its chromatic correction is delivered at a variable axial position — this is the key to the patent's strategy of suppressing focus-dependent chromatic aberration.

Note that B1 has net negative power ($f = -108.8$ mm) despite belonging to a positive group. The group's positive power comes from L23.

### L23 — Positive Meniscus, Convex to Object (G2, rear sub-group)

nd = 1.91650, νd = 31.60. Glass: very high-index lanthanum flint, 917/316 (no confirmed public catalog match). $f = +63.6$ mm.

L23 is the positive power contributor of G2. Its object-side surface ($R = +40.36$) is convex toward the object and is placed adjacent to the concave image-side surface of B1 ($R = +36.66$, concave toward image) with a minimal 0.77 mm air gap. The patent explicitly describes this arrangement: "a combination of the cemented lens B1 that is concave on the image plane side and the lens L23 that is convex toward the object side" places "many surfaces that are effective in correcting aberration in a narrow space" (¶0033).

The very high refractive index (1.917) of L23 allows the meniscus to carry strong convergent power while keeping surface curvatures manageable. This glass — which reappears as L52 later in the system — is the highest-index material in the prescription.

### Cemented Doublet B2: L31 + L32 (G3)

**L31 — Nearly Plano-Convex Positive (convex toward image).**
nd = 1.89286, νd = 20.36. Glass: ultra-high-dispersion dense flint, 893/204 (no confirmed public catalog match). $f = +50.4$ mm.

**L32 — Biconcave Negative.**
nd = 1.67270, νd = 32.10. Glass: S-TIM25 (OHARA) / E-FD5 (HOYA) — dense flint. $f = -31.6$ mm.

**Cemented doublet B2 net:** $f = -87.4$ mm.

G3 is the diverging group of the front telephoto half (S1). B2's front surface has a nearly infinite radius ($R = +17{,}080.5$ mm — effectively plano), making L31 a nearly plano-convex element whose power comes almost entirely from its strongly curved rear surface ($R = -45.12$). The patent prose describes L31 as a "positive meniscus lens ... convex toward the image plane side" (¶0039), but the numerical prescription shows opposite-sign radii — technically biconvex, though effectively plano-convex given the extremely weak front curvature.

The glass selection here is unusual: L31 uses an ultra-high-dispersion flint (νd = 20.4) that does not match any standard glass in the major public catalogs (OHARA, HOYA, Schott, HIKARI, CDGM). With a refractive index of 1.893 and an Abbe number of just 20.4, this glass sits in the extreme short-flint region of the nd–νd diagram — one of the most dispersive conventional optical glass types available. Its role is not to correct chromatic aberration — as a component of the fixed G3 group, it does not participate in the focus-dependent chromatic balancing act. Instead, its very high dispersion, paired with L32's moderate flint, creates a specific chromatic offset within G3 that pre-compensates for the residual chromatism of the post-stop groups (G4–G6). The Petzval sum contribution of this doublet is also significant: the strong negative power at moderate index helps flatten the field.

### Aperture Stop (STO)

The stop is positioned in the large air gap between G3 and G4, at 7.93 mm behind the rear surface of G3 and 45.01 mm in front of G4 (at infinity focus). The total G3-to-G4 gap of 52.94 mm is by far the largest air space in the system and constitutes the "coupling gap" between the two telephoto halves. As focus shifts to close range, G4 moves forward into this space, compressing the STO-to-G4 distance from 45.0 mm down to 4.6 mm — a reduction of over 40 mm.

The stop semi-diameter is 11.51 mm (23.02 mm full diameter), yielding an entrance pupil that produces the f/3.5 aperture at infinity focus.

### L41 — Biconvex Positive, Equiconvex (G4)

nd = 1.48749, νd = 70.24. Glass: S-FSL5 (OHARA) / N-FK5 (Schott) — fluorine crown, low-dispersion (ED class). $f = +91.4$ mm.

L41 is the heart of the focus mechanism — a single equiconvex lens ($R_1 = +88.12$, $R_2 = -88.12$) that travels up to 40.4 mm toward the object during close focusing. The patent specifically states that G4 should be "a single lens L41 with positive refractive power" as "the minimum configuration" to "reduce the number of lenses that compose the optical system and to reduce the load on an autofocus mechanism" (¶0035).

The glass selection is governed by Condition (5): $1.40 < \text{nd}_{41} < 1.60$ and $70 < \text{νd}_{41} < 90$ (¶0036). L41's S-FSL5 / N-FK5 fluorine crown (nd = 1.487, νd = 70.2) satisfies both. The patent explains that "by placing an ED lens in the fourth lens group G4 that moves to change the focal length, variations in chromatic aberration due to variations in focal length are also effectively corrected" (¶0036). The low dispersion of L41 means that its large focus travel introduces minimal chromatic variation — a critical property given that this single element moves over 40 mm during macro focusing.

The equiconvex symmetry of L41 minimizes coma at the stop, where the chief ray crosses the axis. Because L41 sits immediately behind the stop, this symmetry is optically significant.

### Cemented Doublet B3: L51 + L52 (G5)

**L51 — Biconcave Negative.**
nd = 1.80000, νd = 29.84. Glass: dense flint, 800/298 (no confirmed public catalog match). $f = -45.4$ mm.

**L52 — Biconvex Positive.**
nd = 1.91650, νd = 31.60. Glass: very high-index lanthanum flint, 917/316 (same glass as L23). $f = +35.5$ mm.

**Cemented doublet B3 net:** $f = +147.4$ mm.

G5 is a positive cemented doublet that provides additional aberration correction during focus. It mirrors the role of G2 in the front half: both are positive groups containing cemented lenses that move during focus. The patent notes that "by additionally moving the positive fifth lens group G5 ... it is possible to have the fifth lens group G5 contribute to the correction of chromatic aberration during macro magnification and possible to suppress an increase in the amount of movement PF1 of the second lens group G2, thereby making it possible to provide a much more compact optical system" (¶0037).

The cement interface at $R = +40.80$ mm carries a refractive index step from nd = 1.800 to nd = 1.917 ($\Delta n = 0.117$). Both glasses are high-dispersion flints, but with different Abbe numbers (29.8 vs 31.6) — the doublet provides modest chromatic correction while primarily controlling monochromatic aberrations (spherical aberration and coma) in the converging beam.

L52 reuses the same glass type as L23 (nd = 1.91650, νd = 31.60), which simplifies the glass palette and procurement for production.

### L61 — Biconcave Negative (G6)

nd = 1.69895, νd = 30.13. Glass: E-FD15L (HOYA) / S-TIM35 (OHARA) / N-SF15 (Schott) — dense flint. $f = -76.6$ mm.

L61 is the final optical element, a diverging biconcave lens whose object-side radius ($R = -61.95$) is smaller (more strongly curved) than its image-side radius ($R = +401.07$). The patent states that "by disposing a negative lens L61 as the final sixth lens group G6 on the image plane side, it is possible to widen the light beam that reaches the image pickup plane and provide the optical system with a large image circle" (¶0029).

This is the field-flattening and image-circle-expanding element. Its divergent power spreads the converging cone from G5 across the full 56 mm image circle required for the 44 × 33 mm medium-format sensor. Together with G3, it provides the negative Petzval correction that flattens the field — the two negative groups (G3 and G6) contribute nearly equally to field flattening, a natural consequence of the design's front–rear symmetry.

L61 is fixed during focus, forming the rearmost mechanical element of the optical assembly. The 31.26 mm back focal distance (to the cover glass) provides clearance for the leaf shutter mechanism integrated into XCD lenses.

## Glass Selection

The design uses nine distinct glass types across ten elements (L23 and L52 share the same glass). The glass palette spans a wide range of refractive indices (1.487 to 1.917) and Abbe numbers (20.4 to 74.7).

| Element | nd | νd | Code | Identification | Confidence | Class |
|---------|-------|-------|------|---------------|------------|-------|
| L11 | 1.85026 | 32.27 | 850/323 | Lanthanum flint | Unmatched | LaF |
| L21 | 1.53775 | 74.70 | 538/747 | S-FPM3 (OHARA) | High | ED fluorophosphate crown |
| L22 | 1.74077 | 27.79 | 741/278 | S-TIH13 (OHARA) / E-FD13 (HOYA) | High | Dense flint |
| L23 | 1.91650 | 31.60 | 917/316 | Very high-index lanthanum flint | Unmatched | LaF |
| L31 | 1.89286 | 20.36 | 893/204 | Ultra-high-dispersion flint | Unmatched | Dense flint |
| L32 | 1.67270 | 32.10 | 673/321 | S-TIM25 (OHARA) / E-FD5 (HOYA) | High | Dense flint |
| L41 | 1.48749 | 70.24 | 487/702 | S-FSL5 (OHARA) / N-FK5 (Schott) | Exact | Fluorine crown (ED) |
| L51 | 1.80000 | 29.84 | 800/298 | Dense flint | Unmatched | Dense flint |
| L52 | 1.91650 | 31.60 | 917/316 | Same glass as L23 | — | LaF |
| L61 | 1.69895 | 30.13 | 699/301 | E-FD15L (HOYA) / S-TIM35 (OHARA) | High | Dense flint |

The glass palette draws from multiple vendors — OHARA (S-FPM3, S-FSL5, S-TIM25), HOYA (E-FD13, E-FD15L), and Schott (N-SF15 equivalent) — which is consistent with Nittoh Kogaku's multi-vendor sourcing practice. Five glasses (L11, L23/L52, L31, and L51) do not match standard catalog entries within the tolerance thresholds of Δnd ≤ 0.005 and Δνd ≤ 1.0. These may be specialty melts, custom compositions, or glasses from less commonly indexed catalogs. The L31 glass (nd = 1.89286, νd = 20.36) is particularly unusual — its ultra-high dispersion places it in the extreme short-flint region of the glass map, a sparsely populated zone in most vendor catalogs.

### Chromatic strategy

The chromatic correction strategy is built around two key pairings:

The **B1 doublet** (L21 + L22) pairs an ED fluorophosphate crown (νd = 74.7) against a dense flint (νd = 27.8), creating the primary achromat within the moving G2 group. Because B1 moves during focus, its chromatic correction tracks the changing conjugate and compensates for the shift in chromatic balance that accompanies the EFL change from 120 mm (infinity) to 81 mm (closest focus).

The **G4 singlet** (L41) uses S-FSL5, a fluorine crown with νd = 70.2 — itself an ED glass. By making the primary focus element low-dispersion, the designer minimizes the chromatic penalty of its 40 mm focus travel. This is the patent's core insight: the element that moves the most contributes the least chromatic variation.

The remaining glasses are predominantly high-index flints (νd = 20–32) whose chromatic contributions are largely static (in fixed groups G1, G3, G6) and balanced against each other.

## Focus Mechanism

The XCD 120mm Macro uses a **triple-group inner focus** system with a fixed overall length. Three groups move during focus; three remain stationary.

### Moving groups

| Group | Travel (inf → 0.43 m) | Direction | Role |
|-------|----------------------|-----------|------|
| G2 (L21+L22+L23) | +8.24 mm | Toward object | Chromatic correction |
| G4 (L41) | +40.39 mm | Toward object | Primary focus adjustment |
| G5 (L51+L52) | −1.01 mm (net) | Reversal (see below) | Fine aberration correction |

### Fixed groups

G1 (L11), G3 (L31+L32), G6 (L61), and the aperture stop remain stationary relative to the image plane.

### Focus travel details

The variable air gaps at three focus positions:

| Gap | Location | Infinity | 2.0 m | 0.43 m |
|-----|----------|---------|-------|--------|
| THI 2 | G1 ↔ G2 | 9.651 | 8.844 | 1.410 |
| THI 7 | G2 ↔ G3 | 5.155 | 5.961 | 13.395 |
| THI 11 | STO ↔ G4 | 45.010 | 37.350 | 4.622 |
| THI 13 | G4 ↔ G5 | 0.800 | 10.099 | 42.200 |
| THI 16 | G5 ↔ G6 | 11.239 | 9.600 | 10.227 |

The constant total track verifies the inner-focus design: the sum of all thicknesses from the front vertex of L11 to the front of the cover glass is 152.12 mm at all focus positions.

G4 dominates the focus adjustment, traveling 40.4 mm forward (THI 11 compresses from 45.0 to 4.6 mm while THI 13 expands from 0.8 to 42.2 mm). The patent's Condition (1) relates the G4 and G2 travel distances: $PB1/PF1 = 40.39/8.24 = 4.90$, within the specified range of 1–8 (¶0030).

G5's motion is non-monotonic: it first moves toward the image (THI 16 decreases from 11.24 to 9.60 at 2.0 m), then reverses toward the object (THI 16 increases to 10.23 at 0.43 m). The net displacement of −1.01 mm is toward the image, satisfying the patent's Condition (6): $PB2 < 0$ (¶0058). This reversal allows G5 to fine-tune aberrations at different conjugates without requiring excessive travel from G2.

### Effective focal length variation

The EFL changes significantly with focus distance due to the inner-focus architecture:

| Object distance | EFL (mm) | F-number | Magnification |
|----------------|----------|----------|---------------|
| Infinity | 120.0 | 3.50 | 0.000 |
| 2.0 m | 113.6 | 3.29 | 0.065 |
| 0.43 m | 81.0 | 2.16 | 0.500 |

The focal length shortens to 81 mm at closest focus — a 32% reduction. This is a characteristic property of inner-focus macro designs and explains the significant effective aperture brightening at close range (from f/3.5 to f/2.16 in terms of the system's paraxial f-number, though the practical effective aperture includes the 0.7-stop exposure compensation noted in the manufacturer's datasheet).

## Aspherical Surfaces

This design contains **no aspherical surfaces**. The patent states explicitly for Example 1 that "every lens that constructs the optical system 10 is a spherical lens in this example" (¶0042), and no aspherical coefficient tables are provided for any of the four examples. The production lens's marketing materials are similarly silent on aspherical elements.

The all-spherical construction is notable for a modern macro lens covering a large medium-format image circle. The designer achieved the necessary aberration correction through glass selection (nine distinct types, spanning a 54-unit Abbe-number range), the cemented-doublet chromatic strategy, and the triple-group floating focus mechanism rather than through aspherical surface shaping. This is consistent with Nittoh Kogaku's established manufacturing strengths in conventionally polished spherical glass optics.

## Petzval Field Curvature

The surface-by-surface Petzval sum of the prescription is:

$$\Sigma \frac{n' - n}{n \cdot n' \cdot R} = +0.00115 \;\text{mm}^{-1}$$

This corresponds to a Petzval radius of approximately 873 mm, or a Petzval ratio $R_P / f = 7.3$. This is a well-corrected value for a telephoto macro lens, indicating a nearly flat Petzval surface.

The flat field is achieved through the two negative groups — G3 and G6 — whose divergent power contributions counterbalance the positive Petzval from G1, G2, G4, and G5:

| Group | Petzval contribution (mm$^{-1}$) |
|-------|--------------------------------|
| G1 | +0.00346 |
| G2 | +0.00339 |
| G3 | −0.00827 |
| G4 | +0.00744 |
| G5 | +0.00280 |
| G6 | −0.00767 |
| **Total** | **+0.00115** |

G3 and G6 contribute nearly equally (−0.00827 and −0.00767 mm$^{-1}$ respectively), together providing the −0.01594 mm$^{-1}$ of negative correction that offsets the +0.01709 mm$^{-1}$ from the four positive groups. The symmetric distribution of negative Petzval correction on both sides of the aperture stop is a natural consequence of the doubled telephoto architecture.

The aberration plots in the patent (Fig. 8) confirm well-controlled astigmatism across the full 28 mm image height at all three focus positions, with the tangential and sagittal focal surfaces remaining within ±0.25 mm of each other. Distortion is below 2% at all conjugates.

## Design Heritage and Context

The doubled telephoto (positive–positive–negative repeated on each side of the stop) architecture described in this patent is not common in the existing literature. Traditional telephoto macro lenses, such as the 19-element design cited in the patent's background (JP 2013-104994), typically use more complex configurations with dedicated image-stabilization groups. The Sawamoto design achieves comparable macro performance with only 10 elements by exploiting the symmetry of the doubled telephoto layout: aberrations introduced by the front half are partially cancelled by the structurally similar rear half, and the two moving positive groups (G2, G4) share the focus-correction burden.

The design philosophy prioritizes compactness and low focus-group mass (G4 is a single ED lens) for fast autofocus response, which aligns with the Hasselblad X system's contrast-detect AF architecture. The constant overall length and internal focusing are essential for the integrated leaf shutter that is a distinguishing feature of all XCD lenses.

## Verification Summary

Independent paraxial verification (y-nu ray trace, ABCD matrix) confirms the following:

| Parameter | Computed | Patent | Δ |
|-----------|---------|--------|---|
| EFL (infinity) | 120.03 mm | 120.0 mm | +0.03 mm |
| EFL (2.0 m) | 113.66 mm | 113.61 mm | +0.05 mm |
| EFL (0.43 m) | 81.13 mm | 81.0 mm | +0.13 mm |
| Half-field angle | 13.13° | 13.2° | −0.07° |
| PB1/PF1 | 4.90 | 4.90 | 0.00 |
| PF1/AL | 0.068 | 0.068 | 0.000 |
| PB1/AL | 0.334 | 0.334 | 0.000 |
| PB2 (G5 net) | −1.012 mm | −1.01 mm | −0.002 mm |
| Total track (to cover glass, constant) | 152.12 mm | — | ±0.00 mm |
| Petzval sum | +0.00115 mm⁻¹ | — | — |

All computed values agree with the patent's stated values within rounding tolerance. The data file's air-equivalent BFD (32.543 mm) was computed by folding the cover glass (Flat, d = 1.80 mm, nd = 1.51633) and trailing air gap (d = 0.10 mm) into an equivalent air path: $31.256 + 1.800/1.51633 + 0.100 = 32.543$ mm.

## Sources

1. US 2020/0192060 A1 (Sawamoto / Nittoh Inc.), published June 18, 2020. All prescription data, variable gap tables, and conditional expressions from Figs. 5–8 and ¶0057–0070.
2. Hasselblad XCD 3,5/120mm Macro datasheet (UK v5), retrieved from cdn.hasselblad.com. Manufacturer specifications: 120 mm, f/3.5–45, 10 elements in 7 groups, MFD 0.43 m, 1:2 magnification, image circle ≈ 56 mm, 77 mm filter thread, 150 mm length, 970 g.
3. OHARA Pocket Catalog (May 2023). Glass identification for S-FPM3 (538/747), S-FSL5 (487/702), S-TIM25 (673/321).
4. HOYA Group Optics Division, Glass Cross Reference Index (hoya-opticalworld.com). Cross-vendor glass equivalents, six-digit code verification, and identification of E-FD13 (741/278), E-FD15L (699/301).
5. Schott Optical Glass Collection (2019). Cross-reference verification for N-FK5 (487/704), N-SF15 (699/302).
6. Wikipedia, "List of lenses for Hasselblad cameras." Confirmation that XCD lenses are manufactured by Nittoh Kogaku K.K. in Suwa, Japan.
