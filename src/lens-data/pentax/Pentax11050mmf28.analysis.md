# Pentax-110 50mm f/2.8 — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** US 4,289,385, *Photographic Lens with Rear Stop Diaphragm*
**Assignee:** Asahi Kogaku Kogyo Kabushiki Kaisha (Asahi Pentax), Tokyo, Japan
**Inventor:** Masakazu Yamagata, Tsurugashima, Japan
**Filed:** February 5, 1980 (US); priority February 20, 1979, JP 54-18915
**Granted:** September 15, 1981
**Embodiment:** Example 1 (FIG. 1, aberration curves FIG. 4)

The patent discloses a five-element, five-group lens system with an aperture ratio of 1:2.8 and a total viewing angle of approximately 24°. A distinguishing feature is the placement of the stop diaphragm at the rear of the lens assembly, behind the fifth element — an unusual arrangement driven by the mechanical constraints of the Pentax Auto 110 camera body, whose twin-bladed shutter assembly doubles as the iris diaphragm.

### Production-to-Patent Matching

The identification of Example 1 as the production Pentax-110 50mm f/2.8 rests on the following convergent evidence:

1. **Element and group count.** The production lens is documented as 5 elements in 5 groups (Camerapedia, Pentax Forums), matching all six patent examples.
2. **Focal length and aperture.** The patent's prescription at f = 100 scales to 50 mm production at a factor of 0.5, consistent with the marketed 50 mm f/2.8.
3. **Viewing angle.** 2ω = 24° corresponds to a half-field of 12° — appropriate for a 50 mm lens on the 110 format (13 × 17 mm frame, image diagonal ≈ 21.4 mm).
4. **Physical length.** The computed vertex-to-vertex distance Σd = 53.569 scales to 26.8 mm at production, matching the manufacturer-specified lens length of 27 mm.
5. **Rear stop diaphragm.** The Pentax Auto 110 body uniquely locates its shutter/aperture mechanism behind the lens mount, precisely the configuration the patent addresses. No other Pentax system of this era used a rear stop.
6. **Patent timing.** The Japanese priority date of February 1979 precedes the production lens introduction, consistent with the standard patent-to-production timeline.
7. **Assignee.** Asahi Kogaku Kogyo is the corporate entity behind the Pentax brand.

Example 1 is selected as the most likely production embodiment because it occupies the first position in the patent disclosure (a common convention for the preferred embodiment in Japanese-origin patents) and its aberration curves (FIG. 4) show well-balanced correction — particularly in spherical aberration and coma.

### Verified System Parameters

Paraxial ray tracing of the published prescription (y-nu marginal ray, d-line) confirms:

- **EFL = 100.00** (matches patent, f = 100)
- **BFD = 51.28** (back focal distance from last surface to image plane)
- **Σd = 53.57** (vertex-to-vertex track, all element thicknesses and air gaps)
- **K = (Σd + BFD) / f = 1.049** (matches patent)
- **All four conditional expressions satisfied** (verified below)

### Scaling

The data file applies a uniform scale factor of ×0.5 to all radii, thicknesses, spacings, and semi-diameters, producing a prescription at f ≈ 50.0 mm. At production scale: EFL ≈ 50.0 mm, BFD ≈ 25.64 mm, Σd ≈ 26.78 mm. All numerical values in this analysis are stated at the patent's original f = 100 scale unless otherwise noted.

## Optical Architecture

The design is a five-element, five-group configuration with power distribution positive / positive / strong negative / weakly positive / positive. The overall ratio K = 1.049 means the total track (front vertex to image plane) is only 5% longer than the focal length — a compact arrangement for a five-element system, though not a telephoto in the strict optical sense (which requires K < 1).

The architectural key is the very long back focal distance: BFD = 51.3 at patent scale, representing 51.3% of the focal length. At production scale this becomes 25.6 mm — generous clearance for the Pentax Auto 110's reflex mirror box and the body-mounted shutter/aperture mechanism that must sit between the rear lens surface and the film plane. Achieving this long BFD without excessive overall length drives the entire design strategy.

### Power Distribution and Grouping

The front pair (L1 + L2) forms a strong positive collector group with a combined focal length of 49.6 (at patent scale). The third element (L3) is a powerful divergent element (f ≈ −28.7) that nearly cancels the convergence of L1 + L2, leaving the front three elements as a very weakly positive combination (f ≈ 701 — nearly afocal). This near-cancellation is the mechanism by which the design creates such a long back focal distance: the front block contributes almost no net convergence, and the rear pair (L4 + L5, combined f ≈ 60.1) performs the bulk of the image-forming convergence from a position close to the image.

The large air gap d₆ = 9.900 separating L3 from L4 establishes the spatial separation between the nearly-afocal front block and the convergent rear pair. This gap also positions L4 where it can most effectively correct off-axis aberrations generated by the front elements.

| Group | Elements | Combined f | Role |
|-------|----------|-----------|------|
| Front pair | L1 + L2 | +49.6 | Positive collector |
| Front three | L1 + L2 + L3 | +701 | Nearly afocal (L3 cancels L1+L2) |
| Rear pair | L4 + L5 | +60.1 | Primary convergence + aberration balance |

## Element-by-Element Analysis

### L1 — Positive Meniscus, Convex to Object

nd = 1.60311, νd = 60.7. Glass: S-BSM14 (OHARA) — barium crown. f = +94.5.

L1 is a thick positive meniscus (center thickness 10.853 at patent scale) with its convex surface facing the object. Its front radius r₁ = +45.735 carries the strongest positive refraction in the front group (φ = +0.01319), collecting the incoming beam and beginning convergence. The rear surface r₂ = +210.900 is nearly flat, contributing only weak negative power (φ = −0.00286).

The choice of a barium crown (S-BSM14, Schott code 603/607) provides a moderately high refractive index that permits useful power with moderate curvature, combined with a reasonably high Abbe number (νd ≈ 60.7) that keeps longitudinal chromatic aberration manageable. L1 is the primary contributor to the positive Petzval sum from the front group.

The patent's conditional expression (3) constrains this surface: 0.39f < r₁ < 0.64f. If r₁ were too small (below 0.39f), spherical aberration correction would become insufficient and coma would worsen. If r₁ were too large (above 0.64f), the rear surface of L1 or the combined L1 + L2 focal length would exceed the bounds needed for compact design, degrading off-axis correction.

### L2 — Positive Meniscus, Convex to Object

nd = 1.51633, νd = 64.1. Glass: S-BSL7 (OHARA) — borosilicate crown (N-BK7 equivalent). f = +101.5.

L2 is the thickest element in the design (d₃ = 15.872 at patent scale) and forms the second half of the front positive collector pair. Its front surface r₃ = +33.385 carries strong positive power (φ = +0.01547), while its rear surface r₄ = +77.025 contributes moderate negative power (φ = −0.00670). The meniscus shape with convex surface toward the object continues the gently converging beam from L1.

The glass choice — S-BSL7 / N-BK7, the most ubiquitous optical crown — provides the highest Abbe number in the system (νd ≈ 64.1), making L2 the primary achromatizing partner against the dense flints used in L3–L5. The low refractive index (nd = 1.516) is compensated by the element's substantial thickness and favorable surface curvatures.

The front surface r₃ is constrained by condition (3) as the main Petzval-sum regulator: 0.25f < r₃ < 0.45f. If r₃ were too small, the Petzval sum would increase, worsening astigmatism and field curvature. If too large, the Petzval sum would decrease excessively, disrupting the astigmatic balance.

The substantial center thickness (condition (4): 0.12f < d₃ < 0.18f) serves multiple purposes. It separates the front and rear surfaces sufficiently that their individual Petzval contributions partially offset within the element — a thick positive meniscus inherently generates less field curvature per unit of power than a thin biconvex of the same focal length. The thickness also provides mechanical clearance needed for the full-aperture beam diameter at f/2.8.

### L3 — Near Plano-Concave Negative

nd = 1.80518, νd = 25.4. Glass: S-TIH6 (OHARA) — dense flint (SF6 equivalent). f = −28.7.

L3 is the most powerful single element in the system and the architectural linchpin. Its front surface r₅ = +3392.655 is effectively flat (φ ≈ +0.00024), while its rear surface r₆ = +22.917 carries enormous negative power (φ = −0.03514) — the single strongest surface refraction in the entire lens. This surface alone diverges the converging beam from L1 + L2 so strongly that the front three elements become nearly afocal (f ≈ 701). The resulting divergent bundle then travels across the long air gap d₆ to the rear pair, which reconverges it toward the image — producing the long back focal distance that the design requires.

The glass is a dense flint with the highest refractive index in the design (nd = 1.805) and the lowest Abbe number (νd = 25.4). This combination serves two purposes. First, the high index maximizes the refractive power achievable at r₆ for a given curvature, keeping the surface radius manageable. Second, the low Abbe number makes L3 the primary chromatic counterpart to L1 and L2: the negative element in a crown-flint achromatic strategy. The dense flint's strong dispersion, combined with its negative power, produces a chromatic contribution that opposes the positive longitudinal color introduced by the front crowns.

The rear surface radius r₆ is tightly constrained by condition (3): 0.20f < r₆ < 0.25f. Below 0.20f, spherical aberration correction would overshoot, worsening coma and producing an excessively negative Petzval sum that destabilizes astigmatism. Above 0.25f, spherical aberration correction becomes insufficient, and coma flare from high-angle rays increases while the Petzval sum grows too positive.

L3 is the strongest single contributor to the negative Petzval sum (S6 contributes −0.01946 to the surface-by-surface Petzval sum), partially counteracting the positive contributions from L1 and L2 (S1 + S3 = +0.00823 + 0.01020 = +0.01843). Without L3's powerful negative correction, the Petzval sum would be strongly positive and field curvature would dominate.

### L4 — Weakly Positive Meniscus, Concave to Object

nd = 1.74077, νd = 27.8. Glass: S-TIH11 (OHARA) — dense flint (SF13 equivalent). f = +273.7.

L4 is a meniscus element with its concave surface facing the object: r₇ = −33.391 and r₈ = −29.895 (both radii negative, both surfaces curving in the same direction). The thick-lens computation reveals it is very weakly positive (f ≈ +274), contributing negligible net power to the system. Its primary role is aberration correction — specifically coma and astigmatism — rather than beam convergence.

The concave-to-object orientation produces a Petzval contribution pattern opposite to that of L1 and L2: the front surface r₇ contributes −0.01274 while the rear surface r₈ contributes +0.01423 to the Petzval sum, for a net near-zero element-level Petzval contribution. This is by design — L4's role is to correct off-axis aberrations without disturbing the Petzval balance already established by L1–L3.

The glass choice is again a dense flint (S-TIH11, νd = 27.8), though with a lower refractive index than L3 (nd = 1.741 vs. 1.805). This pairing with the rear positive L5 forms a second achromatic correction stage: L4 as the high-dispersion partner, L5 as the lower-dispersion partner. The double achromatic correction (L1/L2 vs. L3 in the front, L4 vs. L5 in the rear) provides better longitudinal color control than a single achromatizing pair.

The patent's condition (3) constrains r₇: −0.46f < r₇ < −0.24f. Below −0.46f (|r₇| too large), outward coma flare from high-incidence off-axis rays would appear and astigmatism correction would be insufficient. Above −0.24f (|r₇| too small), inward coma flare would dominate and astigmatism correction would overshoot.

### L5 — Positive Meniscus, Convex to Object

nd = 1.66446, νd = 35.8. Glass: S-TIM22 (OHARA) — flint (SF2 equivalent). f = +79.7.

L5 is the final converging element, refocusing the divergent beam from L3/L4 onto the image plane. Its front surface r₉ = +43.549 carries moderate positive power (φ = +0.01526) and its rear surface r₁₀ = +238.081 contributes only weak negative power (φ = −0.00279). Both radii are positive (both surfaces curve in the same direction), making L5 a meniscus rather than a biconvex element — convex toward the object, gently concave toward the image. The result is a strong positive element (f ≈ +79.7), the most powerful positive element in the system.

The glass selection is notable: S-TIM22 / SF2 is a flint glass (νd = 35.8), not a crown. This is unusual for a positive element, where one might expect a crown to maintain achromatism. The choice reflects the designer's prioritization of the Petzval sum and higher-order aberration balance over simple chromatic correction. A flint glass with nd = 1.664 provides a higher refractive index than BK7 for the same element thickness, allowing a weaker front curvature for a given power — which in turn reduces the spherical aberration introduced by this last refracting surface before the image. The chromatic penalty is absorbed by the overall two-stage achromatizing strategy described above.

L5 is the last element before the rear stop diaphragm. Because the stop sits behind L5 (rather than between elements as in a conventional design), the chief ray passes through L5 at a significant height above the axis. This means L5's aberration contributions for off-axis imagery are unusually sensitive to its shape and position — a constraint that shaped the entire architectural approach of the patent.

## Glass Selection

The glass palette uses five distinct types spanning a wide dispersion range, all from standard catalog families available from OHARA (the likely vendor for a late-1970s Asahi Pentax design) or their Schott/Hoya equivalents.

| Element | nd | νd | Schott Code | Glass (OHARA) | Equivalent (Schott) | Role |
|---------|---------|------|-------------|---------------|---------------------|------|
| L1 | 1.60311 | 60.7 | 603/607 | S-BSM14 | SK14 | Barium crown — front collector |
| L2 | 1.51633 | 64.1 | 516/641 | S-BSL7 | N-BK7 | Borosilicate crown — achromatizer |
| L3 | 1.80518 | 25.4 | 805/254 | S-TIH6 | SF6 | Dense flint — diverger / color corrector |
| L4 | 1.74077 | 27.8 | 741/278 | S-TIH11 | SF13 | Dense flint — coma/astigmatism corrector |
| L5 | 1.66446 | 35.8 | 664/358 | S-TIM22 | SF2 | Flint — rear converger |

All five identifications have high confidence: the patent's nd values match the respective catalog entries to 5-decimal precision (Δnd < 0.00001 in all cases), and νd values agree within ±0.1 of published catalog data.

### Chromatic Strategy

The design employs a two-stage achromatic correction strategy. In the front group, L1 (νd = 60.7) and L2 (νd = 64.1) act as the positive crown elements, while L3 (νd = 25.4) provides the negative flint correction. In the rear group, L5 (νd = 35.8) as the positive element is chromatically countered by L4 (νd = 27.8) acting as the high-dispersion partner with near-zero net power.

The total Abbe-number spread from 64.1 (L2) to 25.4 (L3) — a Δνd of 38.7 — provides adequate chromatic leverage for a lens of this aperture and format. However, with no ED (extra-low dispersion) glasses in the palette and only standard catalog types, secondary spectrum correction is limited. This is consistent with the era (1979) and the 110 format's modest resolution requirements.

## Focus Mechanism

The patent does not disclose variable air-gap data for close focusing. The six examples each present a single set of surface spacings, corresponding to the infinity-focus configuration. The absence of published close-focus data, combined with the simple five-element construction and the Pentax Auto 110's helicoid-barrel focus mechanism, strongly suggests unit focus — the entire lens assembly translates forward as a unit to achieve close focus.

The minimum focus distance is approximately 0.9 m (from allphotolenses.com), corresponding to a magnification of roughly 1:17. At production scale (f = 50 mm), the focus extension is approximately:

$$\Delta = \frac{f^2}{d_o - f} \approx \frac{50^2}{900 - 50} \approx 2.94 \text{ mm}$$

At patent scale, this corresponds to an extension of approximately 5.88 mm. The data file models this as a single variable gap between the rear surface of L5 (surface 10) and the body-mounted stop diaphragm. At production scale: d₁₀ = 2.50 mm at infinity focus, increasing to 5.44 mm at 0.9 m MFD. The stop-to-image distance remains fixed (23.14 mm), since the stop/shutter is part of the camera body and does not translate with the lens.

## Aspherical Surfaces

There are no aspherical surfaces in this design. All ten optical surfaces are spherical. The patent makes no mention of aspherical coefficients, conic constants, or aspheric sag equations anywhere in its text or tables. This is consistent with the design's era (1979) and the cost constraints of the Pentax Auto 110 system, which was a consumer product priced modestly. All aberration correction is achieved through glass selection, surface curvature optimization, and element thickness/spacing control.

The all-spherical construction does impose limits on aberration correction — particularly spherical aberration and coma at full aperture. The patent's aberration curves (FIG. 4) show that at f/2.8, the design exhibits noticeable higher-order spherical aberration (the characteristic hook at the top of the SA curve) and moderate lateral color. These are acceptable compromises for a 110-format lens, where the small negative size limits practical resolution demands.

## Petzval Sum and Field Curvature

The surface-by-surface Petzval sum was computed at +0.00187, corresponding to a Petzval radius of approximately 535. Normalized by the EFL, the Petzval product (Petzval sum × f) is +0.187. This is a well-corrected value — substantially flatter than a simple positive singlet (which would have a Petzval product of 1/nd ≈ 0.6) and indicative of the designer's successful use of the strong negative L3 to counter the positive field curvature from L1, L2, and L5.

The Petzval contributions by surface illustrate the balancing act:

| Surface | Element | R | Petzval contribution |
|---------|---------|--------|---------------------|
| S1 | L1 front | +45.735 | +0.00823 |
| S2 | L1 rear | +210.900 | −0.00178 |
| S3 | L2 front | +33.385 | +0.01020 |
| S4 | L2 rear | +77.025 | −0.00442 |
| S5 | L3 front | +3392.655 | ≈ 0 (flat) |
| S6 | L3 rear | +22.917 | **−0.01946** |
| S7 | L4 front | −33.391 | −0.01274 |
| S8 | L4 rear | −29.895 | +0.01423 |
| S9 | L5 front | +43.549 | +0.00917 |
| S10 | L5 rear | +238.081 | −0.00168 |

The largest single contributor is the rear surface of L3 (S6), which alone contributes −0.01946, nearly canceling the combined front-surface contributions of L1 and L2 (+0.00823 + 0.01020 = +0.01843). The remaining small positive residual is further balanced by L4's front surface (−0.01274), with L4's rear surface (+0.01423) and L5's front surface (+0.00917) adding back the positive curvature needed to keep the net sum slightly positive.

## Rear Stop Diaphragm — Design Consequences

The patent's central innovation is the placement of the stop diaphragm behind the last element, rather than between elements as in conventional designs. The patent text explains the motivation: in the Pentax Auto 110 camera, the shutter and aperture mechanism are built into the body, positioned behind the lens mount. This constrains the lens designer to achieve good aberration correction despite a geometrically unfavorable stop location.

A rear stop diaphragm creates several design challenges that the patent specifically addresses.

The exit pupil coincides with (or is very close to) the physical stop, meaning the chief ray passes through all five elements at significant height. This amplifies off-axis aberrations — particularly coma, astigmatism, and distortion — relative to a centrally-stopped design of the same power. The patent's conditional expressions (3) and (4) are specifically calibrated to constrain the curvatures and spacings that most affect these off-axis contributions.

Additionally, when the aperture is stopped down from f/2.8 to smaller openings, the vignetting characteristics differ from a centrally-stopped lens. The patent notes that a sufficient amount of peripheral or marginal light must be obtained even if the stop value is set to a minimal aperture value. This requirement forces the rear elements (L4 and L5) to have adequately large diameters, which in turn affects their aberration contributions — a design tension that the patent's conditions (1) and (2) manage by constraining the focal lengths of L1 and the L4 + L5 group.

The long back focal distance (BFD = 51.3% of EFL) is a direct consequence of the rear-stop requirement. The space between the last lens surface and the image plane must accommodate the reflex mirror, the twin-blade shutter, and the rear stop diaphragm. At production scale, the 25.6 mm back focus provides this clearance.

### Stop Position in the Data File

The patent does not specify the exact axial position of the rear stop diaphragm within the back focal space. For the data file, the stop is placed 2.5 mm (production scale) behind the rear surface of L5, inferred from the Pentax Auto 110's body register geometry: the lens rear vertex sits approximately at the flange, and the twin-blade shutter mechanism occupies the first few millimeters inside the body cavity. The remaining 23.14 mm from the stop to the image plane accommodates the mirror box and film-plane clearance. This stop position yields a marginal-ray height of approximately 4.1 mm at the stop, consistent with the entrance pupil semi-diameter of ≈8.9 mm required for f/2.8 operation when imaged back through the full lens system.

## Conditional Expressions

The patent specifies four sets of conditional inequalities that the design must satisfy. All are verified against the computed system parameters at f = 100.

### Condition (1) — Compactness and front element diameter

$$0.84f < f_1 < 1.04f$$
$$0.43f < f_{1 \cdot 2} < 0.54f$$

Verified: $f_1$ = 94.5, within (84.0, 104.0). **PASS.**
Verified: $f_{1 \cdot 2}$ = 49.6, within (43.0, 54.0). **PASS.**

These bounds keep the overall lens length short and the front element diameter small, while ensuring that element powers remain manageable for aberration correction.

### Condition (2) — Backfocus and rear stop positioning

$$0.57f < f_{4 \cdot 5} < 0.78f$$

Verified: $f_{4 \cdot 5}$ = 60.1, within (57.0, 78.0). **PASS.**

This condition ensures the rear pair provides enough convergence to maintain a sufficient backfocus for the rear stop and shutter, while keeping K below approximately 1.06.

### Condition (3) — Critical curvatures

$$0.39f < r_1 < 0.64f \quad;\quad 0.25f < r_3 < 0.45f$$
$$0.20f < r_6 < 0.25f \quad;\quad -0.46f < r_7 < -0.24f$$

Verified: $r_1$ = 45.7, within (39.0, 64.0). **PASS.**
Verified: $r_3$ = 33.4, within (25.0, 45.0). **PASS.**
Verified: $r_6$ = 22.9, within (20.0, 25.0). **PASS.**
Verified: $r_7$ = −33.4, within (−46.0, −24.0). **PASS.**

These curvature bounds govern the balance of spherical aberration, coma, astigmatism, and Petzval sum across the design.

### Condition (4) — Element thickness and air-gap proportions

$$0.48f < \Sigma d < 0.58f \quad;\quad 0.12f < d_3 < 0.18f \quad;\quad 0.07f < d_6 < 0.13f$$

Verified: $\Sigma d$ = 53.6, within (48.0, 58.0). **PASS.**
Verified: $d_3$ = 15.9, within (12.0, 18.0). **PASS.**
Verified: $d_6$ = 9.9, within (7.0, 13.0). **PASS.**

The Σd constraint keeps the overall track compact. The d₃ constraint (L2 thickness) ensures adequate spherical aberration generation in the front group. The d₆ constraint (L3–L4 air gap) balances coma control against the need to keep the backfocus long enough for the rear stop.

## Design Heritage and Context

The Pentax Auto 110 system, introduced in 1978, was the world's smallest interchangeable-lens SLR camera. Its 110 cartridge film format (13 × 17 mm frame) is roughly half the linear dimensions of 35mm film, demanding proportionally smaller and lighter optics. The 50 mm focal length on this format is a medium telephoto equivalent to approximately 101 mm on 35mm film (crop factor ≈ 2.0×).

The five-element, five-group rear-stop design is an unusual configuration born from necessity: the Auto 110's body-integral shutter/aperture mechanism left no room for a conventional inter-element stop. Masakazu Yamagata's solution — a nearly-afocal front block (L1 + L2 + L3) paired with a convergent rear pair (L4 + L5), separated by a carefully tuned air gap — achieves a compact total track (K ≈ 1.05) while maintaining the long back focal distance (51% of EFL) that the rear-stop SLR architecture demands.

At production scale, the lens measures approximately 27 mm from front vertex to rear vertex (matching the computed Σd × 0.5 = 26.8 mm), weighs 53 grams, and accepts 37.5 mm filters. The filter thread diameter confirms that the front element clear aperture is substantially larger than the entrance pupil diameter of approximately 17.9 mm, providing the margin needed for off-axis ray clearance that the rear-stop configuration demands.

## Sources

1. US Patent 4,289,385 — *Photographic Lens with Rear Stop Diaphragm*, Yamagata, granted September 15, 1981.
2. Camerapedia, "Pentax Auto 110" — confirms 5 elements / 5 groups, filter Ø 37.5 mm.
3. allphotolenses.com, "Pentax-110 50mm f/2.8" — MFD 0.9 m, weight 53 g, length 27 mm.
4. Vintage Camera Lab, "Pentax Auto 110" — confirms body-integral shutter/aperture mechanism.
5. OHARA Optical Glass Catalog — glass identification reference for S-BSM14, S-BSL7, S-TIH6, S-TIH11, S-TIM22.
