# Panasonic LUMIX S 20–60mm F3.5–5.6 — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** JP 2021-179551 A, "ズームレンズ系、撮像装置、カメラシステム" (Zoom Lens System, Imaging Device, Camera System).
**Applicant:** Panasonic Intellectual Property Management Co., Ltd. (パナソニックＩＰマネジメント株式会社), Osaka, Japan.
**Inventors:** Kitada Takahiro (北田 高博), Kudo Yuka (工藤 有華), Sueyoshi Masashi (末吉 正史), Li Jindong (李 金東).
**Filed:** 15 May 2020 (令和2年5月15日), Application No. 2020-85568.
**Published:** 18 November 2021 (令和3年11月18日).
**Embodiment analyzed:** Numerical Example 2 (数値実施例2), corresponding to Embodiment 2 (実施の形態2), illustrated in Figs. 3–4.

The following convergent evidence identifies Example 2 as the production design for the LUMIX S 20–60mm F3.5–5.6 (model S-R2060):

1. **Element and group count.** 11 elements in 9 air-separated groups — matching the manufacturer specification exactly. The patent describes 5 zoom groups (G1–G5), which decompose into 9 air-separated subgroups: G1 (1 element), G2 (3 subgroups, 4 elements), G3 (3 subgroups, 4 elements), G4 (1 element), G5 (1 element).
2. **Special element count.** Two aspherical elements (L6 with both surfaces aspheric, L10 with both surfaces aspheric), three ED elements (L3, L7, L9), and one UHR element (L11, nd = 1.92286) — matching Panasonic's published specification of "2 ASPH, 3 ED, 1 UHR."
3. **Focal length range.** Example 2 yields f = 20.81–57.63 mm (paraxial, verified), consistent with the marketed 20–60 mm.
4. **Aperture.** F/3.57 (wide) through F/5.81 (tele), consistent with the marketed F3.5–5.6.
5. **Five-group power distribution.** Positive–negative–positive–negative–positive, with G5 stationary during zoom and G1–G4 moving — confirmed by the patent text (¶0043) and by the Panasonic blog, which describes a "five group symmetrical zoom design centered on the aperture."
6. **Focus mechanism.** G4 (single biconcave element L10) moves toward the image side for close focus (¶0044), consistent with the production lens's use of a stepping motor driving a lightweight single-element focus group.
7. **Patent timing.** Filed May 2020, aligning with the lens's announcement in mid-2020 and market release in July 2020.

Example 2 is identified as the production embodiment. It is the only example that uses a lower-index glass for L2 (S-LAH93, nd = 1.90366 vs. nd = 2.00100 in Examples 1, 3, and 4), a cost- and weight-saving substitution that still satisfies condition (2). Notably, Example 4 has the closest wide-end F-number to the marketed F3.5 (F3.50 vs. Example 2's F3.57), but Example 4 substitutes a lower-grade ED glass for L9 (νd = 68.6 vs. 81.6 in Example 2), weakening chromatic correction in the relay group. Example 2's use of S-FPL51 (νd = 81.6) for both L7 and L9 provides stronger secondary-spectrum correction in G3 than Example 4, while its lower-cost L2 glass reduces weight and cost relative to Examples 1 and 3 — making it the most likely production balance of cost, weight, and chromatic performance.

## Optical Architecture

The LUMIX S 20–60mm F3.5–5.6 is a five-group zoom of the positive–negative–positive–negative–positive type, a layout that descends from the classic telephoto-zoom architecture but adapted here for a wide-angle starting point on a short-flange mirrorless mount (L-mount, 20 mm flange distance).

The design contains 11 elements in 5 zoom groups (9 air-separated subgroups), with 4 aspherical surfaces on 2 elements, 3 ED elements, and 1 ultra-high-refractive-index (UHR) element. The aperture stop sits at the front of G3.

**Group roles:**

- **G1 (positive, f = +163.4 mm):** Front collector. A single positive meniscus (L1) that gathers the wide-angle field and begins converging the beam. The positive first group leverages the L-mount's large diameter and short flange distance to control distortion while keeping the front element diameter compact. During zoom from wide to tele, G1 moves toward the object side, increasing its separation from G2.
- **G2 (negative, f = −19.7 mm):** Variator. Four elements — L2 (negative meniscus), L3+L4 (cemented negative–positive doublet), and L5 (biconcave negative) — produce the primary magnification change. G2 carries the strongest negative power in the system and is the main driver of the zoom ratio. Its ED element (L3) paired with three high-index flints suppresses chromatic aberration and field curvature during zoom.
- **G3 (positive, f = +21.9 mm):** Relay / imaging group. Four elements behind the aperture stop — L6 (double-aspheric meniscus), L7 (symmetric biconvex), and the L8+L9 cemented doublet — relay the aerial image toward the sensor with aberration correction. G3 carries the strongest positive power in the system and determines the imaging conjugate. Two S-FPL51 elements (L7, L9) provide the primary chromatic correction.
- **G4 (negative, f = −48.9 mm):** Focus group. A single double-aspheric biconcave element (L10) that moves toward the image during close focus. Its lightweight construction (single element in moldable glass) enables fast, quiet autofocus with a stepping motor. G4 also contributes to zoom-dependent field curvature correction.
- **G5 (positive, f = +121.0 mm):** Field flattener. A single positive meniscus (L11) in ultra-high-index glass (nd = 1.92286) that remains stationary during both zoom and focus. G5 corrects residual field curvature and acts as a teleconverter-like rear element that stretches the back focal distance to the sensor plane. The high refractive index allows strong curvature correction with minimal thickness.

**Zoom kinematics.** During zoom from wide (20.8 mm) to tele (57.6 mm), all four front groups (G1–G4) translate toward the object side, while G5 remains fixed. The inter-group spacings change as follows: d(G1–G2) increases from 0.50 to 25.45 mm, d(G2–G3) decreases from 19.71 to 2.53 mm, d(G3–G4) increases from 2.92 to 7.24 mm, and d(G4–G5) increases from 12.29 to 36.22 mm. Total track length increases from approximately 105.9 mm (wide) to 141.9 mm (tele).

**Focusing.** G4 alone moves toward the image side for infinity-to-close focusing (¶0044). The production lens achieves a minimum focus distance of 0.15 m at 20–26 mm and 0.40 m at 60 mm, with a maximum magnification of 0.43× at 26 mm. The patent publishes variable spacing data only at the infinity focus state, so the close-focus G4 travel in the data file is inferred by moving only L10, conserving the total G3–G5 cavity length, and solving the paraxial finite-conjugate focus condition against the production MFD constraints.

**Petzval sum.** The surface-by-surface Petzval sum is +0.00109 mm⁻¹, corresponding to a Petzval radius of approximately 914 mm — a well-flattened field suitable for a full-frame sensor (43.3 mm diagonal image circle). The nearly vanishing Petzval sum arises from the balanced positive–negative–positive–negative–positive power distribution, with the strong negative power of G2 (f = −19.7 mm) and G4 (f = −48.9 mm) counteracting the positive contributions of G1, G3, and G5.

## Element-by-Element Analysis

### L1 — Positive Meniscus, Convex to Object (G1)

nd = 1.58913, νd = 61.3. Glass: S-BAL35 (OHARA) — barium lanthanum crown. f = +163.4 mm.

L1 constitutes the entirety of G1 and serves as the front collector. Its weakly positive meniscus shape (R1 = +79.05, R2 = +433.29 mm) minimizes spherical aberration at wide field angles while providing just enough convergence to steer the beam into the variator group. The choice of a mid-index barium crown (nd ≈ 1.59) represents a deliberate cost-and-weight trade: a higher-index front element would reduce curvature but increase cost and density. The modest power (f = +163 mm, roughly 8× the wide-end EFL) keeps aberration contributions small across the zoom range.

### L2 — Negative Meniscus, Convex to Object (G2, L2a)

nd = 1.90366, νd = 31.3. Glass: S-LAH93 (OHARA) — high-index lanthanum flint; equivalent to TAFD25 (HOYA). f = −22.2 mm.

L2 is the first and most strongly curved element in the variator group, entering with R1 = +52.42 mm and exiting through a steeply curved rear surface R2 = +14.38 mm. Its high refractive index (nd > 1.9, satisfying condition (2)) enables a compact meniscus form that bends the diverging beam sharply without introducing excessive higher-order aberrations. The strong negative power (f = −22.2 mm) is the primary source of G2's variator action. The high index also reduces Petzval curvature contribution per unit of power, helping to flatten the field at the wide end where the diverging beam is at its widest. The patent notes (¶0086) that if nd falls below 1.9, wide-angle field curvature correction becomes difficult. Example 2 satisfies this condition only marginally (1.90366 vs. the 2.00100 used in Examples 1, 3, and 4), suggesting a production optimization for cost and weight.

### L3 + L4 — Cemented Doublet (G2, L2b + L2c)

**L3 — Biconcave Negative (L2b).** nd = 1.59283, νd = 68.6. Glass: FCD515 (HOYA) — fluorophosphate crown, ED class (dPgF ≈ +0.019). f = −21.7 mm.

**L4 — Biconvex Positive (L2c).** nd = 1.85883, νd = 30.0. Glass: S-TIH14 (OHARA) — dense titanium flint. f = +14.9 mm.

The L3+L4 cemented doublet is the chromatic corrector within the variator group. L3's ED glass (νd = 68.6, satisfying the preferred condition (1b): νL2b > 67) paired with L4's high-dispersion flint (νd = 30.0) provides strong achromatization of the beam passing through G2. The Abbe number difference Δν = 38.6 is substantial, enabling effective correction of both axial and lateral chromatic aberration across the zoom range.

The cemented interface at R = +17.40 mm carries the abrupt index step from 1.59283 to 1.85883 (Δn = +0.266), producing convergent power at the junction. This positive power partially offsets L3's strong negative front-surface contribution and fine-tunes the chromatic balance between the low-dispersion crown (L3) and high-dispersion flint (L4). The doublet's combined power is negative, contributing to G2's overall variator function.

The identification of L3 as FCD515 (HOYA) rather than an OHARA equivalent is inferred from the precise match at nd = 1.59282, νd = 68.63 — no OHARA catalog entry matches within tolerance (the nearest OHARA glass, S-FPM2, differs by Δnd = 0.0024). Panasonic's supply chain, jointly based in Japan with relationships to both OHARA and HOYA, supports mixed-vendor glass usage. FCD515 is classified as a "dense fluor crown" in the HOYA catalog with moderate anomalous partial dispersion (dPgF = +0.0194), placing it between ordinary crown and the extreme anomalous dispersion of S-FPL51-class glasses.

### L5 — Biconcave Negative (G2, L2d)

nd = 1.85000, νd = 32.4. Glass: S-TIH10 (OHARA) — dense titanium flint. f = −32.2 mm.

L5 closes the variator group as the trailing negative element (R1 = −31.69, R2 = +204.40 mm). The patent notes (¶0077–0078) that placing a negative element at the rear of G2 enables smaller lens size and reduces the angle of incidence on L5, thereby suppressing field curvature. The relatively long rear radius (R2 = +204.4 mm, nearly plano) means most of L5's power comes from the front surface, which faces the air gap after L4 — a configuration that moderates spherical aberration at the wide end. The choice of dense flint (nd = 1.85) allows this correction without excessive thickness.

### L6 — Positive Meniscus, Convex to Object, Both Surfaces Aspherical (G3, L3a)

nd = 1.80998, νd = 40.9. Glass: S-LAH63Q (OHARA) — precision-glass-moldable (PGM) lanthanum crown. f = +30.1 mm.

L6 is the first element after the aperture stop and carries the highest positive power in G3. Both surfaces are aspherical (surfaces 11* and 12*), making it the primary monochromatic aberration corrector in the relay group. The "Q" suffix in S-LAH63Q designates a glass grade specifically formulated for precision glass molding — consistent with the double-aspheric requirement, as conventional polishing of two aspheric surfaces per element is prohibitively expensive at this price point.

The meniscus form (R1 = +18.32, R2 = +67.33 mm, both convex to object) positions L6's power contribution predominantly at the front surface, where the beam is most collimated after passing through the stop. The aspherical coefficients on surface 11 show a small positive A4 term (+2.38×10⁻⁶), introducing slight additional convergence at the rim, combined with a negative A6 term (−2.09×10⁻⁷) that progressively flattens the outer zone — a classic spherical-aberration correction signature. Surface 12's aspherical profile (A4 = +3.89×10⁻⁵) provides complementary coma and astigmatism control.

### L7 — Symmetric Biconvex Positive (G3, L3b)

nd = 1.49700, νd = 81.6. Glass: S-FPL51 (OHARA) — fluorophosphate crown, ED class. f = +37.2 mm.

L7 is the first of two S-FPL51 elements in the relay group. Its symmetric biconvex form (R1 = +36.38, R2 = −36.38 mm, with |R1| = |R2| exactly) is unusual and deliberate: symmetric elements exhibit zero coma and minimum spherical aberration for a given power, making L7 an optically efficient positive contributor that introduces minimal off-axis degradation. The extremely low dispersion of S-FPL51 (νd = 81.6) means L7 provides strong positive power with minimal chromatic contribution, leaving the chromatic balance to be set by its cemented partner L8.

S-FPL51 is a fluorophosphate crown with strong anomalous partial dispersion (dPgF ≈ +0.038), which enables correction of secondary spectrum — the residual chromatic error that persists even after primary achromatization with an ordinary crown-flint pair.

### L8 + L9 — Cemented Doublet (G3, L3c + L3d)

**L8 — Plano-Concave Negative (L3c).** nd = 1.80610, νd = 33.3. Glass: S-TIH4 (OHARA) — dense titanium flint. f = −12.7 mm.

**L9 — Biconvex Positive (L3d).** nd = 1.49700, νd = 81.6. Glass: S-FPL51 (OHARA) — fluorophosphate crown, ED class. f = +15.8 mm. νd = 81.6, satisfying condition (3b): νL3d > 67.

The L8+L9 cemented doublet is the second chromatic corrector in G3, positioned after L7 and closing the relay group. Its architecture mirrors the classical achromatic doublet — a negative high-dispersion flint element (L8, νd = 33.3) cemented to a positive low-dispersion crown (L9, νd = 81.6) — but with the exceptional Abbe number difference Δν = 48.3 afforded by the S-FPL51 crown. This large Δν enables strong achromatization with moderate surface curvatures, keeping higher-order chromatic residuals small.

L8's plano-concave form (R1 = ∞, R2 = +10.24 mm at the junction) concentrates all of its refractive power at the cemented interface, which simplifies manufacturing and reduces sensitivity to tilt and decentration. The junction surface at R = +10.24 mm carries the index step from 1.80610 to 1.49700 (Δn = −0.309), the largest single index discontinuity in the system, producing strong negative power. This negative contribution dominates L8's behavior and is essential for balancing L7's and L9's combined positive power.

The patent notes (¶0091) that condition (3) — νL3d > 62 — governs the chromatic correction of the relay group, particularly axial color. Example 2 exceeds the strongest sub-condition (3b) with νd = 81.6, indicating that Panasonic prioritized chromatic performance in the relay group despite the cost premium of S-FPL51.

### L10 — Biconcave Negative, Both Surfaces Aspherical (G4)

nd = 1.58313, νd = 59.5. Glass: L-PHL1 (OHARA) — phosphate crown, precision-glass-moldable. f = −48.9 mm.

L10 constitutes the entire focus group (G4). Its double-aspheric biconcave form (R1 = −33.62, R2 = +191.02 mm) provides negative power with extensive aspherical correction on both surfaces. The "L-" prefix in L-PHL1 designates a moldable-grade glass, essential for economical double-aspheric production via precision glass molding.

As the sole focusing element, L10 translates toward the image during close focus. Its relatively weak power (f = −48.9 mm, |f4/fT| = 0.85, satisfying condition (4)) represents a deliberate balance between focus speed and stopping accuracy: a stronger focus group would require less travel for the same focus shift but would amplify positional errors, degrading focus precision. The patent discusses this trade explicitly (¶0096).

The aspherical profiles on surfaces 18 and 19 are the most aggressive in the system, with A4 coefficients roughly 100× larger than surface 11 on L6 (A4 ≈ 2.37×10⁻⁴ vs. 2.38×10⁻⁶). These strong aspherical departures compensate for field curvature and astigmatism variations that arise as the focus distance changes — a critical requirement for maintaining image quality from infinity to the 0.15 m close-focus distance. The aspherical correction also suppresses focus breathing, a design goal highlighted in the Panasonic technical blog.

### L11 — Positive Meniscus, Convex to Image (G5, L5a)

nd = 1.92286, νd = 20.9. Glass: S-NPH7 (OHARA) — ultra-high-refractive-index flint. f = +121.0 mm.

L11 is the sole element of G5 and is the UHR (Ultra High Refractive Index) element identified in Panasonic's marketing materials. It remains stationary during both zoom and focus, serving as a fixed field flattener and teleconverter at the rear of the system. Its meniscus shape concave to the object (R1 = −44.50, R2 = −32.79 mm, both negative, with |R2| < |R1|) places the more strongly curved surface toward the sensor, matching the converging beam geometry.

The ultra-high refractive index (nd = 1.92286, satisfying the strongest sub-condition (6b): nL5a > 1.9) is the critical enabler of L11's design role. At nd ≈ 1.92, even modest surface curvatures produce significant refractive power and Petzval contribution, allowing L11 to flatten the field with a single compact element rather than the multi-element field group that would be needed with lower-index glass. The patent notes (¶0106) that falling below nd = 1.8 would make wide-angle field curvature correction difficult.

Condition (7) governs L11's shape factor, which at −6.60 satisfies the preferred sub-condition range of −8.0 to −3.0 (conditions (7c) and (7d)). The strongly negative shape factor indicates a meniscus deeply bent toward the image — optimized for correcting barrel distortion at the wide end while minimizing the optical total length.

The choice of a high-dispersion glass (νd = 20.9) for a rear field flattener is not unusual: L11's weak power (f = +121 mm) means its chromatic contribution is modest in absolute terms, and the high dispersion is an acceptable price for the index advantage. The G5 group magnification is approximately 0.85 across the zoom range, essentially constant — a consequence of its stationary position and the fact that it operates on a nearly telecentric beam from G4.

## Glass Identification and Selection

The glass palette for Example 2 draws predominantly from OHARA's catalog, with one identified HOYA glass for the ED element in G2. The selection reflects a deliberate strategy of pairing anomalous-dispersion crowns with high-dispersion flints for chromatic correction, and using precision-glass-moldable grades wherever aspherical surfaces are required.

| Element | nd | νd | Glass | Vendor | Role |
|---------|-----------|------|-------------------|--------|------|
| L1 | 1.58913 | 61.3 | S-BAL35 | OHARA | Front collector, barium crown |
| L2 | 1.90366 | 31.3 | S-LAH93 | OHARA | Variator, high-index lanthanum flint |
| L3 | 1.59283 | 68.6 | FCD515 | HOYA | ED crown (dPgF ≈ +0.019), variator achromat |
| L4 | 1.85883 | 30.0 | S-TIH14 | OHARA | Variator achromat partner, dense flint |
| L5 | 1.85000 | 32.4 | S-TIH10 | OHARA | Trailing negative, dense flint |
| L6 | 1.80998 | 40.9 | S-LAH63Q | OHARA | PGM, double-aspheric relay element |
| L7 | 1.49700 | 81.6 | S-FPL51 | OHARA | ED crown, relay positive (1st) |
| L8 | 1.80610 | 33.3 | S-TIH4 | OHARA | Relay achromat partner, dense flint |
| L9 | 1.49700 | 81.6 | S-FPL51 | OHARA | ED crown, relay positive (2nd) |
| L10 | 1.58313 | 59.5 | L-PHL1 | OHARA | PGM, double-aspheric focus element |
| L11 | 1.92286 | 20.9 | S-NPH7 | OHARA | UHR field flattener, ultra-high-index flint |

**Chromatic strategy.** The design uses two distinct achromatic doublet pairs — one in G2 (L3+L4) and one in G3 (L8+L9) — augmented by the standalone ED biconvex L7 in G3. The G2 doublet corrects chromatic aberration in the variator, where the beam divergence is large and wavelength-dependent, while the G3 doublet and L7 handle chromatic correction in the relay group, where beam convergence toward the image is strongest. The use of three ED elements (all with νd > 68) is unusual in a lens at this price point and reflects the wide-angle demands of the 20 mm starting focal length.

**Moldable glass usage.** Two elements (L6, L10) use precision-glass-moldable grades (S-LAH63Q and L-PHL1 respectively), enabling cost-effective production of the four aspherical surfaces. Both grades have glass transition temperatures (Tg) suitable for high-volume molding, which is essential for a lens positioned as an affordable kit zoom.

## Focus Mechanism

The lens uses inner focusing via G4, consisting solely of L10. During infinity-to-close focus, L10 translates along the optical axis toward the image plane. This single-element focus group is exceptionally lightweight, enabling the stepping motor to drive fast, quiet autofocus suitable for both stills and video.

The patent publishes variable gap data only at the infinity focus state. In production, the lens achieves two distinct minimum focus distances depending on the focal length setting: 0.15 m (from the sensor plane) at 20–26 mm, and 0.40 m at 60 mm. The maximum magnification of 0.43× at 26 mm indicates substantial focus travel at the wide end.

The close-focus spacings in the data file are therefore inferred rather than directly transcribed. The inference uses the patent's stated focus architecture (G4/L10 is the only focus group and moves imageward), keeps G3 and G5 fixed during focus, conserves the cavity length `D17 + D19` at each zoom position, and solves for the L10 displacement that brings a near-axis finite-conjugate ray from the production close distance onto the fixed image plane. For the middle zoom sample, where Panasonic does not publish a separate MFD, the solve uses a linearly interpolated close distance between 0.15 m at 26 mm and 0.40 m at 60 mm.

| Parameter | Wide (20.8 mm) | Mid (34.6 mm) | Tele (57.6 mm) |
|---|---|---|---|
| d(G3–G4), infinity | 2.92 mm | 5.95 mm | 7.24 mm |
| d(G4–G5), infinity | 12.29 mm | 20.96 mm | 36.22 mm |
| Inferred L10 imageward travel | 4.57 mm | 4.89 mm | 3.72 mm |
| d(G3–G4), close | 7.49 mm | 10.84 mm | 10.96 mm |
| d(G4–G5), close | 7.72 mm | 16.07 mm | 32.50 mm |
| MFD constraint used | 0.15 m | 0.213 m (interpolated) | 0.40 m |

The choice of G4 as the focus group is driven by several factors: its position behind the relay group means it operates on a converging beam with small ray heights, minimizing focus-induced aberration shifts; its proximity to the sensor allows small movements to produce large focus changes; and its single-element construction minimizes mass, favoring speed and quiet operation. The patent notes (¶0096, condition (4)) that the |f4/fT| ratio of 0.85 represents an optimal balance between focus sensitivity and stopping precision.

Because these close-focus values are inferred, they should be read as a physically constrained focus model rather than a published cam table. The sign of the motion is patent-backed; the magnitude comes from paraxial conjugate matching to production close-focus distances.

## Aspherical Surfaces

The design contains 4 aspherical surfaces distributed across 2 elements (L6 in G3, L10 in G4). All surfaces use the standard even-polynomial aspheric sag equation with a conic constant κ set to zero (spherical base curve):

$$Z(h) = \frac{h^2/r}{1 + \sqrt{1 - (1+\kappa)(h/r)^2}} + A_4 h^4 + A_6 h^6 + A_8 h^8 + A_{10} h^{10} + A_{12} h^{12} + A_{14} h^{14}$$

The patent uses κ (kappa) in its notation; in this design κ = 0 for all surfaces, corresponding to K = 0 in the standard conic convention (the base curve is a sphere).

### Surface 11* (L6 front)

| Coefficient | Value |
|---|---|
| κ | 0.0 |
| A4 | +2.37925 × 10⁻⁶ |
| A6 | −2.08870 × 10⁻⁷ |
| A8 | +1.86643 × 10⁻⁹ |
| A10 | −1.36154 × 10⁻¹¹ |
| A12 | −1.95074 × 10⁻¹³ |
| A14 | 0.0 |

The small positive A4 term introduces a slight additional convergence at the rim relative to a sphere, while the negative A6 progressively flattens the outer zone. This profile reduces zonal spherical aberration in the marginal-ray region immediately after the stop, where ray heights are largest within G3.

### Surface 12* (L6 rear)

| Coefficient | Value |
|---|---|
| κ | 0.0 |
| A4 | +3.88512 × 10⁻⁵ |
| A6 | −2.93102 × 10⁻⁷ |
| A8 | +4.60572 × 10⁻⁹ |
| A10 | −5.77765 × 10⁻¹¹ |
| A12 | 0.0 |
| A14 | 0.0 |

The larger A4 coefficient (roughly 16× that of surface 11) indicates more aggressive correction at the rear surface, consistent with its role in compensating coma and oblique spherical aberration in the off-axis beam. This surface handles the field-angle-dependent corrections while surface 11 handles the aperture-dependent ones — a classic division of labor in double-aspheric elements.

### Surface 18* (L10 front)

| Coefficient | Value |
|---|---|
| κ | 0.0 |
| A4 | +2.36793 × 10⁻⁴ |
| A6 | −3.87770 × 10⁻⁶ |
| A8 | +6.37251 × 10⁻⁸ |
| A10 | −7.56853 × 10⁻¹⁰ |
| A12 | +4.93569 × 10⁻¹² |
| A14 | −8.49844 × 10⁻¹⁵ |

### Surface 19* (L10 rear)

| Coefficient | Value |
|---|---|
| κ | 0.0 |
| A4 | +2.39528 × 10⁻⁴ |
| A6 | −3.14396 × 10⁻⁶ |
| A8 | +2.40725 × 10⁻⁸ |
| A10 | +2.59660 × 10⁻¹⁰ |
| A12 | −8.75404 × 10⁻¹² |
| A14 | +6.41106 × 10⁻¹⁴ |

The A4 coefficients on surfaces 18 and 19 (≈ 2.4 × 10⁻⁴) are roughly 100× larger than surface 11's A4 (2.4 × 10⁻⁶), and approximately 6× larger than surface 12's A4 (3.9 × 10⁻⁵), indicating substantially more aggressive aspherical departure. This is consistent with L10's dual role as both the focus element and the primary astigmatism / field-curvature corrector for the system. Because L10 moves during focus, the aspherical profiles must maintain good correction across its full range of axial positions — a demanding requirement that necessitates the higher-order terms (A10, A12, A14) seen in the coefficients. Both the L6 and L10 aspherics are inferred to be precision glass molded (PGM), based on their glass types (S-LAH63Q and L-PHL1, both OHARA PGM grades).

## Conditional Expressions

The patent defines seven conditional expressions governing the design. Example 2's compliance is summarized below:

| Condition | Expression | Value | Base | Preferred | Strongest |
|---|---|---|---|---|---|
| (1) | νL2b (L3) | 68.6 | > 62 ✓ | > 65 ✓ | > 67 ✓ |
| (2) | nL2a (L2) | 1.90366 | > 1.9 ✓ | > 1.95 ✗ | > 2.00 ✗ |
| (3) | νL3d (L9) | 81.6 | > 62 ✓ | > 65 ✓ | > 67 ✓ |
| (4) | \|f4/fT\| | 0.849 | 0.5–1.1 ✓ | 0.6, <0.9 ✓ | 0.7, <0.85 ✓ |
| (5) | f5/f1 | 0.740 | 0.5–1.0 ✓ | 0.55, <0.95 ✓ | 0.6, <0.9 ✓ |
| (6) | nL5a (L11) | 1.92286 | > 1.8 ✓ | > 1.85 ✓ | > 1.9 ✓ |
| (7) | Shape(L11) | −6.60 | > −8.5 ✓ | < −1.0 ✓ | −8.0 to −3.0 ✓ |

Example 2 satisfies all base conditions and all strongest sub-conditions except (2), where L2's index of 1.90366 exceeds the base threshold of 1.9 but falls short of the preferred 1.95. This is the primary distinguishing feature of Example 2 relative to Examples 1, 3, and 4, which all use nd = 2.00100 for L2. The relaxation to S-LAH93 (nd = 1.903) reduces material cost and specific gravity, making the production lens lighter — consistent with the marketed 350 g weight and the design philosophy of a compact, affordable kit zoom.

## Design Heritage and Context

The LUMIX S 20–60mm F3.5–5.6 was announced in mid-2020 as a standalone lens for the L-mount system. It subsequently became the kit lens for the LUMIX S5 when that body was launched on 2 September 2020. Panasonic's technical blog notes that the lens was designed to match the size and concept of the LUMIX S5, placing it as the compact alternative to the existing LUMIX S 24–105mm f/4. Its most distinctive design choice — starting at 20 mm rather than the conventional 24 mm or 28 mm — was motivated by the growing demand for wider perspectives in video, vlogging, and interior photography.

The five-group positive–negative–positive–negative–positive zoom architecture is a common topology in compact standard zooms for short-flange mirrorless systems, but the Panasonic design is notable for several reasons: the unusually wide starting focal length in this class, the use of three ED elements (including two S-FPL51) in what is marketed as an entry-level zoom, and the single-element focus group that prioritizes video-friendly characteristics (quiet, fast AF with suppressed focus breathing). The fixed rear group (G5) also serves a practical purpose: it keeps the rearmost element stationary, maintaining weather sealing at the mount interface.

The lens remains in production and is commonly bundled as a kit lens with the LUMIX S5II, S5IIx, and S9 camera bodies.

## Sources

- JP 2021-179551 A (published 18 November 2021). Full prescription data, embodiment descriptions, and conditional expressions.
- Panasonic LUMIX product page (panasonic.com): production specifications, element count, special element designations.
- Panasonic blog, "S Series Lenses — Chapter 7: S 20–60mm F3.5–5.6" (shop.panasonic.com/blogs/lumix): design philosophy, group layout, video performance goals.
- OHARA Optical Glass Catalog (May 2023 edition): glass identification for S-BAL35, S-LAH93, S-TIH14, S-TIH10, S-LAH63Q, S-FPL51, S-TIH4, L-PHL1, S-NPH7.
- HOYA Optical Glass data (refractiveindex.info): FCD515 identification (nd = 1.59282, νd = 68.63, dPgF = +0.0194).
- HOYA news releases (hoya-opticalworld.com): TAFD25 cross-reference (nd = 1.90366, νd = 31.32) confirming S-LAH93 equivalence.
