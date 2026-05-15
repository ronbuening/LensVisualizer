# Laowa 24mm f/14 2× Macro Probe — Optical Design Analysis

## CN 210573001 U, Example 1 (实施例1)

---

## Patent Reference and Design Identification

Chinese Utility Model patent CN 210573001 U, titled "一种细长微距镜头" ("A Slender Macro Lens"), was filed on 2019-08-29 by 安徽长庚光学科技有限公司 (Anhui ChangGeng Optical Technology Co., Ltd. — the corporate entity behind the Laowa brand). The named inventor is 李大勇 (Li Dayong). The patent was granted and published on 2020-05-19. A companion invention patent application was filed on the same date.

**Example 1** (实施例1, described beginning at ¶0043) represents the straight-through ("direct-view") optical configuration in which all prisms are unfolded and no mirrors are inserted. This is the configuration that corresponds to the production Laowa 24mm f/14 2× Macro Probe lens, based on the following convergent evidence:

1. **Element and group count.** The prescription yields 27 glass elements in 19 air-separated groups — exactly matching the production lens specification published by Laowa.
2. **Focal length and f-number.** The patent states f = 23.70 mm, F/14.0, half-angle ω = 44.6° (2ω ≈ 89.2°). The production lens is marketed as 24 mm, f/14, with 84.1–85° diagonal angle of view on a 135 full-frame sensor. The small focal-length discrepancy (23.7 vs. 24 mm) is within normal rounding for marketing purposes. The wider patent field angle (89.2° vs. 84.8°) reflects the design image circle (Ymax = 23.38 mm half-height, ≈ 46.8 mm diameter), which intentionally exceeds the 135-format half-diagonal of 21.65 mm; the production FOV of ~84.8° corresponds to arctan(21.65 / 23.7) ≈ 42.4° half-angle, confirming that the optical design covers the sensor with margin.
3. **Macro capability.** The patent prescription includes variable-gap data from infinity to 1.0× magnification, consistent with the production lens's 2:1 maximum reproduction ratio. The focusing element travels 3.25 mm to reach 1.0× from infinity; an extended version of the same mechanism reaches the marketed 2:1.
4. **Three-section architecture.** Laowa describes the production lens as comprising three functional sub-systems — Objective + Relay + Macro (Magnification) group — which matches the patent's description of 物镜 (Objective) + 接力镜头 (Relay) + 放大镜头 (Magnification lens) exactly (¶0044).
5. **Special glass count.** Laowa markets the lens as having "2 Extra-Low Dispersion elements and 1 Extra Refractive Index element." The prescription contains exactly two elements made of nd = 1.49700 / νd = 81.61 glass (H-FK61-class ED fluorophosphate) and two elements of nd = 1.92286 / νd = 20.88 glass (H-ZF7LA-class ultra-dense flint), the latter being the "Extra Refractive Index" glass. The marketing claim of "1 ERI element" likely refers to the glass type rather than the individual element count.
6. **Patent timing.** Filing date August 2019 aligns with the period after the production lens's 2018 launch; the patent documents the optical formula behind the already-shipping product.

---

## Optical Architecture

The Laowa 24mm f/14 Probe is a compound wide-angle macro system built on the classical endoscope paradigm — a positive objective coupled to a relay telescope and a magnification (imaging) section — but scaled to cover a 35 mm full-frame sensor image circle. The objective uses a retrofocus configuration (strongly negative front element followed by net-positive power) to capture the wide field angle within the narrow barrel. The overall power distribution, from object to image, is: **positive, retrofocus (objective, EFL ≈ +5.5 mm) → zero (relay, unity conjugate) → positive (macro/magnification) → positive (focus) → negative-positive (rear correctors)**. The first intermediate image forms approximately 49 mm from the front vertex, in the air gap between the two prism plates P2 and P3.

The design comprises five functional sections spanning 27 elements and 19 groups:

| Section | Elements | Groups | Role |
|---|---|---|---|
| Objective (OBJ) | 7 (L1, P1, L3–L4, L5–L6, L7) | 5 | Captures a wide-angle field and produces a small intermediate image |
| Folding Prisms (P2, P3) | 2 | 2 | Zero-power flat plates in straight-through mode; fold to prisms in alternative configurations |
| Symmetric Relay | 10 (L8–L17) | 6 | Relays the intermediate image along the slender barrel with unit magnification |
| Macro Group | 5 (L18, L19, L20–L22) | 3 | Expands the relayed image to fill the full-frame sensor |
| Focus + Rear | 3 (L23/Foc, L24, L25) | 3 | Inner-focus element + rear corrector pair; aperture stop sits between the macro group and the focus element |

The total optical track is approximately 449 mm, consistent with the production lens's physical barrel length of ~408 mm (the difference is accounted for by the back focal distance of 39.15 mm from the rear element to the image plane, most of which lies inside the camera body).

### Verified system parameters

| Parameter | Patent-stated | Independently computed |
|---|---|---|
| EFL | 23.7059 mm | 23.7049 mm |
| F-number | 14.0 | — (stop-derived) |
| Half-field angle ω | 44.6° (design) | 42.4° (sensor-limited, 135 format) |
| Objective group EFL | — | +5.50 mm (net positive, retrofocus) |
| Petzval sum | — | 0.00649 mm⁻¹ (radius ≈ 154 mm) |

---

## Aspherical Surfaces

**The Example 1 prescription is entirely spherical.** No surface in the prescription table carries an aspherical coefficient, no "A" suffix appears on any surface label, and no aspherical coefficient table is provided for this example. All 50 optical surfaces are standard spheres or flat (R = ∞).

This is consistent with the lens's architecture: the probe-lens concept demands a narrow tube diameter (20 mm at the tip), and the resulting small semi-diameters make aspherical correction less necessary. Aberration correction is achieved instead through the large element count, extensive use of cemented doublets, and the inherent symmetry of the relay section.

The production lens — like many industrial and endoscopic optics — appears to rely on its numerical aperture advantage (f/14 is slow, yielding modest ray heights at all surfaces) and its symmetric relay design to control off-axis aberrations without aspheres.

---

## Glass Palette

The prescription uses 10 distinct glass types. Laowa is a Chinese company, and CDGM (Chengdu Guangming) is the most likely glass vendor; nine of the ten nd/νd pairs match confirmed CDGM catalog entries from the 2022-06 Zemax catalog. The tenth (nd = 1.90366, νd = 31.31) matches Schott N-LASF46B exactly and would fall in CDGM's H-ZLaF family, but the specific CDGM catalog name (listed here as H-ZLaF75B) has not been independently confirmed against a published datasheet and should be treated as tentative. Cross-vendor equivalents from OHARA and Schott are listed for reference.

| nd | νd | CDGM match | Class | Cross-reference | Used in |
|---|---|---|---|---|---|
| 1.83481 | 42.72 | H-ZLaF4A | Lanthanum flint | S-LAH55 (OHARA) | L1, L25 |
| 1.90366 | 31.31 | H-ZLaF75B | Dense lanthanum flint | N-LASF46B (Schott) | P1 rod lens |
| 1.49700 | 81.61 | **H-FK61** | **ED fluorophosphate** | S-FPL51 (OHARA) | L3, L21 |
| 1.84666 | 23.78 | H-ZF88A | Dense flint | S-TIH53 (OHARA) | L4, L5, P2, P3, L8, L9, L16, L17, L20, Foc/L23 |
| 1.48749 | 70.44 | H-QK3L | Borosilicate crown | S-FSL5 (OHARA) | L6, L18 |
| 1.92286 | 20.88 | **H-ZF7LA** | **Ultra-dense flint (ERI)** | SF66 (Schott) | L7, L19 |
| 1.72825 | 28.32 | H-ZF4A | Dense flint | S-TIH10 (OHARA) | L10, L15 |
| 1.80518 | 25.46 | H-ZF6 | Dense flint | SF6 (Schott) | L11, L14, L22 |
| 1.80610 | 40.73 | H-ZLaF52A | Lanthanum flint | S-LAH65V (OHARA) | L12, L13 |
| 1.67270 | 32.17 | H-ZF2 | Flint | N-SF5 (Schott) | L24 |

### Chromatic correction strategy

The design's chromatic correction rests on two mechanisms:

**Achromatizing doublets in the objective.** The cemented doublet D1 (L3 + L4) pairs a low-dispersion ED fluorophosphate crown (H-FK61, νd = 81.61) with a dense flint (H-ZF88A, νd = 23.78). The νd contrast of nearly 58 units provides strong primary-chromatic correction at the point where marginal ray height is substantial and chromatic aberration generation is largest. A second achromatic pair D2 (L5 + L6) uses the same high-νd-contrast principle with a flint–crown combination (νd = 23.78 / 70.44, Δνd ≈ 47).

**Symmetric relay cancellation.** The symmetric relay lens cancels all odd-order lateral aberrations (coma, distortion, lateral color) to first order by construction. Any residual axial chromatic aberration generated by the first relay half is also substantially cancelled by the second half. This symmetry is the principal reason the relay section can use only dense flint and lanthanum flint glasses — types with relatively low Abbe numbers — without introducing objectionable chromatic aberration.

The two ED elements (L3 and L21) are the elements Laowa markets as "Extra Low Dispersion." The two elements of nd = 1.92286 / νd = 20.88 glass (L7 and L19) are the "Extra Refractive Index" elements; their extremely high refractive index allows strong surface curvatures to be moderated, reducing higher-order spherical aberration and Petzval contribution at the cost of high dispersion (which is corrected elsewhere in the system).

---

## Element-by-Element Analysis

### Objective Section (OBJ) — 7 elements, 5 groups

#### L1 — Negative Meniscus, convex to object

nd = 1.83481, νd = 42.72. Glass: H-ZLaF4A (CDGM). f = −5.4 mm.

L1 is the front element of the entire system and the first element the light encounters after entering the narrow barrel tip. It is a strongly negative meniscus (both radii positive: R₁ = +8.731, R₂ = +2.810 mm) with its concave surface facing the image side. Its focal length of −5.4 mm gives it the strongest individual power of any element in the system.

The purpose of L1 is to diverge the incoming wide-angle beam so that it can be captured by the downstream rod lens at a manageable diameter — a classical retrofocus front-negative function, here used to achieve the 85° field of view within a barrel only ~20 mm in diameter at the tip. The lanthanum flint glass (nd = 1.83) was chosen to keep the element physically thin (1.0 mm center thickness) while maintaining sufficient refracting power; a lower-index glass would require a deeper meniscus shape that would exceed the barrel diameter constraint.

The patent's conditional expression (7) governs the balance between L1 and the rod lens P1: |Fw / FP1| = |−5.38 / 10.99| = 0.489, within the specified range 0.25–0.75 (¶0020). If L1 were weaker (ratio approaching 0.75), the barrel diameter would grow unacceptably; if stronger (ratio below 0.25), aberration correction in the front group would become impractical.

#### P1 — Rod Lens (Prism-convertible), positive

nd = 1.90366, νd = 31.31. Glass: H-ZLaF75B (CDGM). f = +11.0 mm.

P1 is a thick rod-shaped element 12.0 mm long with both surface radii negative (R₁ = −15.200, R₂ = −8.258 mm) — a meniscus form in which both surfaces curve toward the image side. Despite the negative radii, the element has positive power (f ≈ +11.0 mm): the steeper rear surface dominates the refraction at the glass-to-air exit, and the 12 mm thickness contributes a significant positive thick-lens term. In Example 1 (straight-through mode), the internal flat surfaces (surfaces 4 and 5) are continuous glass — the rod is "unfolded." In alternative configurations (Examples 2 and 3), these internal flats become 45° reflecting surfaces, converting the rod into a prism that turns the optical axis by 90°.

Optically, P1 acts as a positive thick lens (f ≈ +11.0 mm) that collects the diverging beam from L1 and begins converging it toward the first intermediate image. The very high refractive index (nd = 1.904) is necessary because the rod must be long enough to function as a prism when folded — conditional expression (2) requires F / L₁ to be between 1.5 and 2.5, where L₁ is the patent's variable for the rod's unfolded length (not to be confused with element L1), yielding a rod length of 12.0 mm for this 23.7 mm focal-length system — yet must not introduce excessive chromatic aberration. The dense lanthanum flint glass provides the required refractive index at a moderate dispersion (νd = 31.31).

#### D1: L3 + L4 — Cemented Achromatic Doublet

**L3:** nd = 1.49700, νd = 81.61. Glass: H-FK61 (CDGM) — **ED fluorophosphate**. f = +16.2 mm.
**L4:** nd = 1.84666, νd = 23.78. Glass: H-ZF88A (CDGM). f = −8.5 mm.

D1 is a symmetric biconvex–biconcave cemented doublet with R = ±14.600 mm on all surfaces. L3 is a thick biconvex positive crown made of the system's ED glass; L4 is a thin biconcave negative flint. The νd contrast of 57.83 units makes this the primary achromatizing element of the objective, correcting the substantial axial color introduced by L1 and P1. The near-symmetric form (|R₁| = |R₂| = |R₃| for both elements) minimizes coma contribution while maximizing the achromatic correction per unit power.

This is one of the two elements Laowa identifies as "Extra Low Dispersion."

#### D2: L5 + L6 — Cemented Achromatic Doublet

**L5:** nd = 1.84666, νd = 23.78. Glass: H-ZF88A (CDGM). f = −27.3 mm.
**L6:** nd = 1.48749, νd = 70.44. Glass: H-QK3L (CDGM). f = +12.6 mm.

D2 is a flint-leading doublet (reversed order from D1) with the negative element L5 as a meniscus (R₁ = 24.228, R₂ = 11.55 mm) cemented to a biconvex crown L6 (R₂ = 11.55, R₃ = −11.55 mm). The νd contrast here is 46.66 units. D2 serves a dual role: it provides further axial chromatic correction and contributes net positive power (+12.6 mm focal length for L6, partially offset by L5's −27.3 mm) to help form the intermediate image before the relay section.

#### L7 — Biconvex Positive, Extra Refractive Index (ERI) Element

nd = 1.92286, νd = 20.88. Glass: H-ZF7LA (CDGM) — **ultra-dense flint (ERI)**. f = +21.8 mm.

L7 is a symmetric biconvex element (R = ±39.496 mm) made of the highest-index glass in the system. The extremely high refractive index (nd = 1.923) means that moderate surface curvatures produce substantial power — the focal length of +21.8 mm is achieved with relatively gentle curves, which reduces higher-order spherical aberration. The trade-off is very high dispersion (νd = 20.88), but L7 sits immediately before the relay prisms where marginal ray height is already decreasing, so its chromatic contribution is manageable.

L7 functions as a field flattener and spherical-aberration balancer for the intermediate image. It is one of the two elements of this glass type in the system; the other (L19) performs the analogous role in the macro section.

### Prism Section — 2 elements, 2 groups

#### P2 and P3 — Zero-Power Flat Plates (Prism Equivalents)

nd = 1.84666, νd = 23.78. Glass: H-ZF88A (CDGM). f = ∞ (zero power).

In Example 1, both P2 and P3 are flat glass plates 12.0 mm thick, with infinite radii on both surfaces. They contribute no optical power — their only effect is a small axial shift of the image due to the glass thickness, and a minor chromatic effect from the dense flint glass. In the alternative Examples 2 and 3, these plates are replaced by 45° reflecting prisms that fold the optical path by 90°, enabling the "periscope" configurations. Across all three examples, the P2 and P3 material uses the same nd/νd, ensuring that the optical path length through glass is preserved whether the prisms are unfolded or folded.

The use of dense flint glass (nd = 1.847) rather than BK7-class glass for the prisms is deliberate: the higher refractive index reduces the air-equivalent thickness of the glass, minimizing the path-length perturbation when switching between straight and folded configurations.

### Symmetric Relay Section — 10 elements, 6 groups

The relay section is the heart of the probe lens's slender-barrel architecture. Its job is to transfer the intermediate image formed by the objective+prism section to the macro (magnification) section at unit magnification, through a barrel too narrow to accommodate large-diameter elements. It achieves this through a **perfectly symmetric** relay telescope: the second half is the exact sign-reversed mirror of the first half.

This symmetry was verified computationally: every radius in the first half (surfaces 19–26) corresponds to a negated radius in the second half (surfaces 27–34), in reversed order, with zero residual.

#### L8 — Negative Meniscus, convex to object

nd = 1.84666, νd = 23.78. Glass: H-ZF88A (CDGM). f = −132.8 mm.

Despite having two positive radii (R₁ = 18.876, R₂ = 11.452 mm), L8 is a weakly negative meniscus (f ≈ −133 mm) when computed as a standalone thick lens. Its primary role is to accept the beam from the prism section and begin the relay transfer. The thick center (12.0 mm) and high-index glass keep the beam diameter within the barrel constraint.

#### D3: L9 + L10 — Cemented Relay Doublet (first half)

**L9:** nd = 1.84666, νd = 23.78. Glass: H-ZF88A (CDGM). f = +8.3 mm.
**L10:** nd = 1.72825, νd = 28.32. Glass: H-ZF4A (CDGM). f = −6.5 mm.

D3 is a strongly powered cemented doublet that performs the primary converging action of the relay's first half. Both glasses are relatively dense flints (νd = 23.78 and 28.32), with only 4.54 units of νd contrast — far too little for achromatic correction by itself. This is acceptable because the symmetric relay design cancels chromatic aberration in aggregate: D3's residual axial color is precisely nullified by its mirror twin D6 in the second half.

#### D4: L11 + L12 — Cemented Relay Doublet (first half)

**L11:** nd = 1.80518, νd = 25.46. Glass: H-ZF6 (CDGM). f = −56.9 mm.
**L12:** nd = 1.80610, νd = 40.73. Glass: H-ZLaF52A (CDGM). f = +9.2 mm.

D4 completes the first half of the relay. L11 is a weakly negative meniscus (dense flint) cemented to L12, a strongly positive lanthanum-flint element. The L12 glass (H-ZLaF52A, νd = 40.73) provides the highest Abbe number of any glass used in the relay section, giving D4 a modest achromatic contribution (Δνd ≈ 15.3 units). The 1.593 mm air gap that follows D4 (between surfaces 26 and 27) is the geometric symmetry plane of the relay — optically, this corresponds to the relay's internal pupil, not an image plane. The intermediate image from the objective is reimaged by the full relay to a conjugate point after L17.

#### D5: L13 + L14 — Cemented Relay Doublet (second half, mirror of D4)

**L13:** nd = 1.80610, νd = 40.73. Glass: H-ZLaF52A (CDGM). f = +9.2 mm.
**L14:** nd = 1.80518, νd = 25.46. Glass: H-ZF6 (CDGM). f = −56.9 mm.

D5 is the sign-reversed twin of D4. The radii and glass types are mirrored: L13 corresponds to L12, L14 to L11. This symmetry ensures that odd-order aberrations (coma, distortion, lateral color) generated by D4 are exactly cancelled by D5 at the system level.

#### D6: L15 + L16 — Cemented Relay Doublet (second half, mirror of D3)

**L15:** nd = 1.72825, νd = 28.32. Glass: H-ZF4A (CDGM). f = −6.5 mm.
**L16:** nd = 1.84666, νd = 23.78. Glass: H-ZF88A (CDGM). f = +8.3 mm.

D6 is the mirror of D3. L15 corresponds to L10, L16 to L9.

#### L17 — Negative Meniscus (mirror of L8)

nd = 1.84666, νd = 23.78. Glass: H-ZF88A (CDGM). f = −132.8 mm.

L17 is the exit element of the relay, the sign-reversed twin of L8. It delivers the relayed intermediate image to the macro section.

### Macro (Magnification) Section — 5 elements, 3 groups

#### L18 — Positive Element, Borosilicate Crown

nd = 1.48749, νd = 70.44. Glass: H-QK3L (CDGM). f = +63.7 mm.

L18 is a large positive element (R₁ = 27.795, R₂ = 232.402 mm, d = 10.13 mm) that begins the magnification function — expanding the small relayed intermediate image toward the full 43.3 mm diagonal of the 135 format. Its low refractive index and relatively high Abbe number (νd = 70.44) contribute minimal chromatic aberration while providing gentle positive power.

The 47.48 mm air gap following L18 is the largest gap in the entire system and represents the space over which the expanding beam transitions from the narrow relay tube to the larger-diameter macro section.

#### L19 — Positive Element, ERI Glass

nd = 1.92286, νd = 20.88. Glass: H-ZF7LA (CDGM) — **ultra-dense flint (ERI)**. f = +33.7 mm.

L19 is the second "Extra Refractive Index" element, performing the same role in the macro section that L7 performs in the objective: its extremely high refractive index (nd = 1.923) produces strong positive power (+33.7 mm) with relatively gentle curvatures (R₁ = 36.48, R₂ = −194.0 mm), suppressing higher-order spherical aberration at a surface where ray heights are now substantial. The heavy dispersion is compensated by the adjacent cemented triplet T1.

#### T1: L20 + L21 + L22 — Cemented Triplet

**L20:** nd = 1.84666, νd = 23.78. Glass: H-ZF88A (CDGM). f = −17.9 mm.
**L21:** nd = 1.49700, νd = 81.61. Glass: H-FK61 (CDGM) — **ED fluorophosphate**. f = +15.3 mm.
**L22:** nd = 1.80518, νd = 25.46. Glass: H-ZF6 (CDGM). f = −27.2 mm.

T1 is the only cemented triplet in the design and is the most sophisticated chromatic corrector in the macro section. Its structure — dense flint / ED crown / dense flint — is a classical negative-positive-negative achromatizing triplet, with the central ED element (L21, H-FK61, νd = 81.61) providing the positive power while the outer flints supply negative power and chromatic correction. The νd contrasts are extreme: 57.83 units (L20→L21) and 56.15 units (L21→L22), providing robust correction of both primary axial color and lateral color.

L21 is the second of the two elements Laowa identifies as "Extra Low Dispersion."

### Aperture Stop and Focus Section — 3 elements, 3 groups

#### STOP — Aperture Diaphragm

The aperture stop is a flat surface (R = ∞) positioned 2.4 mm behind the rear surface of the cemented triplet T1. A further 41.6 mm of air (29.79 mm from the stop to surface 44, plus D(44) = 11.82 mm) separates the stop from the focus element. This placement — behind the macro group and before the focus element — means the stop does not move during focusing, which keeps the f-number constant across the focus range. The stop's semi-diameter defines the system's entrance pupil; at f/14, this is quite small, contributing to the design's large depth of field.

#### L23 (Foc) — Focus Element, Positive Meniscus

nd = 1.84666, νd = 23.78. Glass: H-ZF88A (CDGM). f = +69.3 mm.

L23 is the sole focusing element of the entire system. It is a weak positive meniscus (R₁ = −269.8, R₂ = −48.42 mm, d = 3.0 mm) that translates axially toward the object side as the lens focuses from infinity to close-up. The patent (¶0044) states that a "positive-power lens moves from the image side toward the object side to achieve focus."

The variable-gap data confirms this:

| Focus state | D(44) (gap before Foc) | D(46) (gap after Foc) | D(50) (BFD) |
|---|---|---|---|
| Infinity | 11.818 mm | 67.283 mm | 39.154 mm |
| 0.025× | 11.686 mm | 67.370 mm | 39.154 mm |
| 1.0× | 8.569 mm | 70.533 mm | 39.154 mm |

Key observations about the focus mechanism:

- **Conservation:** D(44) + Foc thickness (3.0 mm) + D(46) = 82.101 mm at infinity and 1.0× — conserved to four decimal places. At the intermediate 0.025× position, the patent table yields 82.056 mm (Δ = 0.045 mm), which is a rounding artifact in the published table rather than a genuine non-conservation; a single-element translating focus mechanism conserves this sum by construction.
- **Constant BFD:** D(50) = 39.154 mm at all positions, meaning the flange distance does not change during focusing. This is essential for an interchangeable-lens camera system.
- **Travel:** The focus element moves 3.250 mm from infinity to 1.0× magnification. For the production lens's 2:1 maximum magnification, the travel would be somewhat greater.
- **Focus type:** This is an **inner focus** design with a single moving element — the simplest possible inner-focus mechanism, consistent with the lens's manual-focus-only operation.

The choice of a weakly positive element (f = +69.3 mm) for the focus group means focus-induced aberration change is small, preserving image quality across the entire focus range from infinity to 1× or beyond.

#### L24 — Biconcave Negative

nd = 1.67270, νd = 32.17. Glass: H-ZF2 (CDGM). f = −16.5 mm.

L24 is a moderately strong biconcave negative element (R₁ = −17.67, R₂ = +31.18 mm) positioned between the focus element and the final element. Its role is to diverge the converging beam from the focus element, extending the back focal distance to clear the camera's mirror box (or mirrorless mount flange) and to correct field curvature and astigmatism introduced by the preceding positive elements. The relatively low refractive index (nd = 1.673) and moderate dispersion (νd = 32.17) help balance the residual lateral color from the macro group.

#### L25 — Plano-Convex Positive

nd = 1.83481, νd = 42.72. Glass: H-ZLaF4A (CDGM). f = +55.9 mm.

L25 is the last optical element before the image plane, a plano-convex lens with a flat front surface (R₁ = ∞) and a convex rear surface (R₂ = −46.7 mm). It acts as a field flattener, and its positive power helps control the exit-pupil position for digital sensor compatibility. The glass is the same lanthanum flint used in L1, bookending the system with a matched glass type that helps balance residual chromatic aberration.

---

## Focus Mechanism

The lens uses a single-element inner-focus mechanism. The focusing element is L23 (Foc), a weak positive meniscus (f = +69.3 mm) located behind the aperture stop and before the rear corrector pair L24–L25.

During focusing from infinity to close distance, L23 translates axially toward the object side. The air gap D(44) before L23 decreases while D(46) after L23 increases by the same amount. The sum D(44) + D(46) + element thickness is conserved at 82.10 mm (the patent's 0.025× data point shows a 0.045 mm deviation due to table rounding), and the BFD (D50) is fixed at 39.154 mm.

| Parameter | Infinity | 1.0× magnification |
|---|---|---|
| D(44) | 11.818 mm | 8.569 mm |
| D(46) | 67.283 mm | 70.533 mm |
| D(50) | 39.154 mm | 39.154 mm |
| Focus element travel | — | 3.250 mm (toward object) |

The patent describes the system as achieving magnifications from infinity to 1.0× (¶0046–0052). The production lens extends this to 2:1, which requires additional focus travel beyond what the patent's published three-position data covers. The drive system is purely mechanical (manual focus ring).

---

## Conditional Expressions

The patent specifies eight conditional expressions governing the design. The first four most directly constrain the optical architecture:

| Condition | Expression | Required range | Patent-stated value | Independently computed | Status |
|---|---|---|---|---|---|
| (1) | LA / Ymax | 10–30 | 19.285 | 19.217 | ✓ Satisfied |
| (2) | F / L1 | 1.5–2.5 | 1.969 | 1.975 | ✓ Satisfied |
| (7) | \|Fw / FP1\| | 0.25–0.75 | 0.491 | 0.489 | ✓ Satisfied |
| (8) | S1 / F | 1.5–4.0 | 2.849 | 2.838 | ✓ Satisfied |

Where: LA = total optical track (≈ 449.2 mm), Ymax = F × tan ω (≈ 23.38 mm), F = system focal length (23.706 mm), L1 = P1 rod lens unfolded length (12.0 mm), Fw = front negative element L1 focal length (−5.38 mm), FP1 = rod lens P1 focal length (+10.99 mm), S1 = D(46) gap between focus element and adjacent image-side element (67.28 mm).

The patent's own conditional-expression table (¶0089–0090) provides values for all three examples, listed here in the "Patent-stated" column. The "Independently computed" values were obtained by applying the stated definitions to the prescription data. The small discrepancies (≤ 0.4%) are consistent with the patent having used a slightly different EFL or rounding convention in its internal computation; all values fall well within the specified ranges, and the patent-stated values should be cited as authoritative.

Condition (1) governs the system's slenderness — the ratio of optical length to image height. At ≈ 19.3, the system is moderately elongated; the patent notes that exceeding 30 would require additional relay stages, while falling below 10 would prevent the slender form factor.

Condition (2) governs the ratio of system focal length to rod-lens length. At ≈ 1.97, the rod is long enough to function as a prism when folded but short enough to control aberrations.

Condition (8) governs the gap S1 between the focus element and its adjacent image-side neighbor (L24). At ≈ 2.85× the focal length, there is sufficient space to insert a 30°–60° folding mirror (as in Example 3) while keeping chromatic aberration manageable. If this gap were smaller than 1.5F, no mirror would fit; above 4.0F, color correction would degrade unacceptably (¶0032).

---

## Design Heritage and Context

The Laowa 24mm f/14 Probe draws directly on classical rigid endoscope (borescope) optical design, most closely associated with the Hopkins rod-lens relay telescope patented by Harold H. Hopkins in the 1960s. The key innovation Hopkins introduced was replacing the traditional train of thin relay lenses with thick rod lenses of high refractive index, dramatically increasing the light-gathering ability and image quality of endoscopes. The P1 rod lens in this design (nd = 1.904, 12 mm long) is a direct descendant of that concept.

What distinguishes this design from a medical endoscope is the magnification section and focus mechanism that expand the image to cover a 135-format sensor — enabling this to function as an interchangeable camera lens rather than a specialized medical instrument. The patent explicitly acknowledges prior art in medical endoscopy (¶0003, citing JP H05-297272) and conventional macro lenses (¶0002, citing JP 2006-153942 and JP 2012-53260), positioning this design as a hybrid that combines the slender form factor of the former with the image quality and focus range of the latter.

The production lens has spawned two further generations — the Laowa 24mm T14 PeriProbe (which implements the folded configurations of Examples 2 and 3 with interchangeable modules) and the Laowa 24mm T8 Pro2be (a redesigned version with a faster aperture and improved optical performance).

---

## Sources

- CN 210573001 U, "一种细长微距镜头," 安徽长庚光学科技有限公司 (Anhui ChangGeng Optical Technology Co., Ltd.), published 2020-05-19. Inventor: 李大勇.
- Laowa product page: Laowa 24mm f/14 2× Macro Probe. Specifications: 27 elements / 19 groups, 2 ED elements, 1 ERI element, f/14–f/40, 85° angle of view, 474 g.
- Newsshooter review (2018-10-15): confirms three-section architecture (Objective + Relay + Macro) and 27 elements / 19 groups.
- Nature TTL review (2018-09-05): confirms 27 elements / 19 groups, 2 ED + 1 ERI elements.
- CDGM optical glass catalog (2022-06 Zemax catalog, via refractiveindex.info). Used for glass identification; 9 of 10 nd/νd pairs confirmed against published catalog data. The H-ZLaF75B identification for nd = 1.90366 / νd = 31.31 is tentative.
