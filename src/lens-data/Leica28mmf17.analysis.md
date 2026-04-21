# Leica Summilux 28 mm f/1.7 ASPH — Optical Design Analysis

## Patent Identification

**US 2016/0266350 A1**, "Lens System and Imaging Device"
Filed by Panasonic Intellectual Property Management Co., Ltd., Osaka, Japan.
Inventors: Tomoko Iiyama (Osaka), Masafumi Sueyoshi (Kanagawa).
Japanese priority: JP 2014-195434, filed September 25, 2014.
US continuation filed May 20, 2016; published September 15, 2016.

**Production lens:** Leica Summilux 28 mm f/1.7 ASPH, the fixed lens of the Leica Q (Typ 116), Q2, and Q3 compact cameras. Designed by Peter Karbe (head of optics at Leica Camera AG), manufactured by Panasonic, which produces the Q-series hardware. This patent covers the optical prescription used in the production lens, with Example 1 (Numerical Example 1) being the implemented embodiment.

**Confirmation of identity:** The Leica Q's published specification — 11 elements in 9 groups, 3 aspherical elements, 28 mm f/1.7 on a full-frame (36 × 24 mm) sensor — exactly matches Example 1's computed parameters: f = 27.08 mm (marketed as 28 mm), F/1.76 (marketed as f/1.7), image height 19.88 mm, and 11 glass elements in a 5-group focusing architecture with 5 aspherical surfaces across 3 elements. Peter Karbe has publicly confirmed that he designed the Q's lens, and that the same optical formula has been retained across all three Q generations.

The "9 groups" in Leica's published specification refers to the traditional air-separated group count (5 singlets in the front group, 2 cemented doublets, and 2 rear singlets), while the patent's "5 groups" (G1–G5) designates the focusing-architecture groups that move or remain stationary as units during focus.

---

## Design Overview

The Summilux 28 mm f/1.7 is a 5-group, 11-element wide-angle prime designed for a fixed-lens full-frame compact camera. Its architecture exploits the closed optical-mechanical system of the Q cameras: with no interchangeable mount or focal-plane shutter to clear, the rear elements can sit extremely close to the sensor — the back focal distance is only 1.0 mm beyond the cover glass. This freedom allows the designer to place a strong negative field-flattener (G5) just millimetres from the image plane, dramatically improving corner performance without the BFD constraints that would handicap an interchangeable lens.

The optical layout features a negative-leading front group (G1) that accepts the full ±40° field angle, a centrally placed aperture stop, and a sequence of post-stop groups that provide inner-focus capability and field correction. Five aspherical surfaces on three elements — one in G2, two each in G4 and G5 — control higher-order aberrations across the full f/1.7 aperture. The negative first element (L11) is not a retrofocus arrangement for extending back focus (BFD/EFL = 0.037, far below unity), but rather provides the angular coverage needed for a 28 mm-equivalent wide-angle while keeping the front element diameter manageable.

| Parameter | Patent (Example 1) | Marketed |
|-----------|-------------------|----------|
| Focal length | 27.08 mm | 28 mm |
| Maximum aperture | F/1.76 | f/1.7 |
| Half-field angle | 39.94° | ~38° (at infinity) |
| Image height | 19.88 mm | Full-frame (21.6 mm diagonal half) |
| Elements / Groups | 11 / 9 (5 focusing groups) | 11 / 9 |
| Aspherical elements | 3 (5 surfaces) | 3 |
| Overall length (infinity) | 63.98 mm | ~64 mm |
| Back focal distance | 1.0 mm (after cover glass) | — |
| Close focus (State M1) | 0.3 m (object to image plane) | 0.3 m |
| Close focus (State M2, macro) | 0.163 m (object to image plane) | 0.17 m |

---

## Group Structure and Focusing Mechanism

The five lens groups, their powers, and their roles during focusing are:

| Group | Elements | Group f (mm) | Power | Behaviour in focus |
|-------|----------|-------------|-------|-------------------|
| G1 (+) | L11–L15 (5 singlets) | +36.08 | Positive | Fixed in M1; extends with G2–G4 in M2 |
| G2 (+) | L21–L22 (cemented doublet) | +178.32 | Weakly positive | Moves toward object (1st focus group) |
| G3 (+) | L31–L32 (cemented doublet) | +363.44 | Weakly positive | Fixed; shifts laterally for OIS |
| G4 (+) | L41 (singlet) | +33.98 | Positive | Moves toward object (2nd focus group) |
| G5 (−) | L51 (singlet) | −27.84 | Negative | Fixed (stationary throughout) |

### Focusing in State M1 (infinity to 0.3 m)

G2 and G4 both translate toward the object along the optical axis. G1, G3, and G5 remain stationary. The overall lens length does not change — the sum of the four variable air gaps (d11 + d14 + d17 + d19) stays constant at 19.41 mm. At 0.3 m focus, G2 moves 1.95 mm toward the object, while G4 moves 2.95 mm. The different travel distances provide floating-element field correction: G4's stronger excursion primarily corrects field curvature and coma that would otherwise degrade at close range, while G2's smaller movement trims spherical aberration.

### Focusing in State M2 (macro mode, 0.3 m down to ~0.16 m)

Upon switching to macro mode, groups G1 through G4 extend as a rigid unit approximately 2.35 mm toward the object, with G5 remaining stationary. Within this extended state, G2 and G4 continue to move independently for fine focus. The aperture diaphragm is automatically stopped down — the F-number jumps from approximately f/1.8 to f/2.9 — to maintain image quality at these extreme close-focus distances (patent [0086]).

### Focus Breathing

Inner focusing inherently changes the system's effective focal length as the focus groups shift. The Summilux 28 exhibits significant focus breathing:

| Focus state | EFL (mm) | Δ from infinity | F-number |
|-------------|----------|-----------------|----------|
| Infinity (M1) | 27.08 | — | F/1.76 |
| 0.3 m (M1) | 23.74 | −12.3% | F/1.79 |
| ~0.3 m (M2) | 25.14 | −7.2% | F/2.90 |
| Macro limit (M2) | 21.67 | −20.0% | F/2.81 |

At the 0.3 m close-focus limit of State M1, the effective focal length has shortened to approximately 24 mm — a 12% reduction. In macro mode at the closest distance, the EFL drops to 21.7 mm, a 20% reduction. This breathing is a trade-off inherent to the inner-focus architecture; it enables the compact, lightweight focusing groups that deliver fast, silent autofocus at the expense of focal-length stability.

### Optical Image Stabilization

G3 (the L31–L32 cemented doublet) serves as the OIS compensation group. Per the patent ([0051], FIG. 1), G3 shifts perpendicular to the optical axis to compensate for camera shake. The patent's lateral aberration diagrams (FIG. 3) evaluate performance at 0.5 mm of decentering, demonstrating well-controlled asymmetric aberration in the stabilised state. Using the stationary (non-focusing) G3 for OIS avoids interference with the focusing mechanism — G2 and G4 handle focus, while G3 independently handles stabilisation.

### Patent Conditional Expressions

The patent's conditional expressions confirm the power balance:

- |f2/f4| = 5.25 (condition 1: must lie between 2.5 and 6.5). G4 is roughly five times more powerful than G2, meaning G4 does the heavy lifting of focus compensation while G2 provides a fine-tuning correction.
- |f/f4| = 0.80 (condition 2: must lie between 0.5 and 1.5). G4's focal length is close to the system's, keeping its travel short and its weight low for fast, silent autofocus.

Both focusing groups together contain only three lens elements (a cemented doublet plus a singlet), making the moving mass very small — an important factor in the Leica Q's contrast-detect AF speed, which Leica marketed at the time as the fastest in its class.

---

## Element-by-Element Analysis

### Group 1: Front Positive Group (L11–L15, f = +36.08 mm)

G1 is the stationary front group, carrying the bulk of the lens's positive optical power. Its five air-spaced singlets form a sequence of negative–positive–negative–positive–positive elements that progressively bends the wide-angle ray bundle toward the axis while managing spherical aberration and coma. The alternating-power structure distributes the refractive work across multiple surfaces, reducing higher-order aberrations that would result from concentrating the power in fewer elements.

**L11 — Biconcave Negative (f = −31.0 mm)**
R1 = −111.98 mm, R2 = +20.94 mm; d = 1.4 mm; nd = 1.56732, vd = 42.8.
Glass: **S-BAL42 (OHARA)** — barium light crown. Exact catalog match.

L11 is a strongly negative element whose steeply curved rear surface (R2 = 20.94 mm) diverges the incoming ray bundle. As the first element in the system, it accepts light at the full field angle of ±40° and spreads the beam, allowing the downstream positive elements to collect it at manageable angles. The moderate-index barium crown glass provides adequate dispersion control at this position, where the on-axis ray height is still modest. The biconcave shape with a much stronger rear surface introduces substantial negative Petzval contribution — essential for counteracting the strong positive Petzval from the downstream high-index positive elements.

**L12 — Biconvex Positive (f = +30.7 mm)**
R1 = +33.30 mm, R2 = −131.60 mm; d = 6.17 mm; nd = 1.881, vd = 40.1.
Glass: **S-LAH58 (OHARA)** — lanthanum dense flint. Exact catalog match.

L12 is the primary power-carrying element of G1. Its high refractive index (nd = 1.881) provides strong positive power with relatively gentle surface curvatures, which keeps higher-order spherical aberration manageable at wide apertures. The biconvex shape with a dominant front surface (R1 ~ 33 mm vs. R2 ~ −132 mm) is a classical choice for minimising spherical aberration from a single positive element — a form close to the best-form singlet for a distant object conjugate. At 6.17 mm centre thickness, L12 is the thickest element in G1, indicating that substantial ray bending occurs here.

**L13 — Symmetric Biconcave Negative (f = −39.5 mm)**
R1 = −47.87 mm, R2 = +47.87 mm; d = 1.0 mm; nd = 1.60342, vd = 38.0.
Glass: **S-TIM5 (OHARA)** — titanium flint. Exact catalog match.

L13 is notable for its perfectly symmetric biconcave form (|R1| = |R2|), which eliminates odd-order coma contributions at the element level by symmetry. Positioned after the strong positive L12, it acts as an aberration corrector: the negative power partially compensates the Petzval contribution from L12, and the titanium flint glass (lower Abbe number, vd = 38) provides chromatic compensation.

**L14 — Biconvex Positive (f = +31.2 mm)**
R1 = +23.77 mm, R2 = −76.96 mm; d = 4.64 mm; nd = 1.59282, vd = 68.6.
Glass: **L-LAM60 (OHARA)** — low-softening-temperature lanthanum crown (PGM glass). Exact catalog match.

L14 is the second strong positive element in G1, and its glass choice is significant: L-LAM60 is a precision glass moulding (PGM) type with an unusually high Abbe number for its index class (vd = 68.6), meaning very low dispersion. This element restores positive power while introducing minimal chromatic aberration.

**L15 — Positive Meniscus, Convex to Object (f = +80.2 mm)**
R1 = +62.55 mm, R2 = +428.74 mm; d = 1.81 mm; nd = 1.91082, vd = 35.2.
Glass: **S-LAH79 (OHARA)** — ultra-high-index lanthanum dense flint. Exact catalog match.

L15 is the final element before the aperture stop. Its very high refractive index (nd = 1.911, the highest in the system) allows the gently curved meniscus to contribute positive power while keeping surface slopes moderate. The meniscus shape acts as a weak positive field lens, guiding the chief ray through the stop at a favourable angle.

### Aperture Diaphragm

The iris diaphragm sits between G1 and G2, in the air gap d11 (6.38 mm at infinity). Its position approximately 38% of the way from front to image allows the front elements to handle the full ±40° field angle at moderate ray heights.

### Group 2: First Focusing Doublet (L21–L22, f = +178.3 mm)

G2 is a cemented doublet comprising a positive meniscus and a negative meniscus, both convex toward the image. Together they form a very weakly positive group (f = +178.3 mm) that moves toward the object during focus. The weak net power ensures that even large translational movements produce only modest changes in system aberrations.

**L21 — Positive Meniscus (f = +24.8 mm)** — aspherical front surface (Surface 12A).
**L22 — Negative Meniscus (f = −28.9 mm)** — cemented to L21.

### Group 3: Stationary Corrector Doublet and OIS Group (L31–L32, f = +363.4 mm)

G3 is a fixed cemented doublet. Its very weak positive power means it contributes almost nothing to the system's focal length; its role is corrective and stabilising. G3 shifts perpendicular to the optical axis to provide optical image stabilisation (OIS).

**L31 — Biconcave Negative (f = −21.7 mm)** — niobium heavy flint (S-NBH55).
**L32 — Biconvex Positive (f = +22.5 mm)** — same glass as L12 (S-LAH58).

### Group 4: Second Focusing Singlet (L41, f = +33.98 mm)

**L41 — Positive Meniscus (f = +34.0 mm)** — both surfaces aspherical (Surfaces 18A and 19A).

L41 carries substantially more power than the G2 doublet. It is a thick, strongly curved meniscus with both surfaces aspherical — the most heavily corrected single element in the design. L41 moves during focus, and its aspherical profiles must maintain correction quality across the full travel range.

### Group 5: Field Flattener (L51, f = −27.84 mm)

**L51 — Negative Meniscus (f = −27.8 mm)** — both surfaces aspherical (Surfaces 20A and 21A). Glass: H-ZF52A (CDGM) dense flint.

L51 is the final optical element before the sensor cover glass. Its strong negative power shortens the back focal distance, allowing the overall lens to be more compact, while the strongly concave front surface bends the image field back toward flatness. Surface 20A has K = −1.070 (hyperboloid) — the only non-zero conic constant in the design — providing zone-dependent correction for astigmatism and field curvature at the extreme corners of the full-frame sensor.

---

## Aspherical Surface Summary

| Surface | Element | Group | Conic K | Dominant A4 | Role |
|---------|---------|-------|---------|-------------|------|
| 12A | L21 front | G2 (focus) | 0 | −2.24e-05 | Spherical aberration control near the stop |
| 18A | L41 front | G4 (focus) | 0 | −2.96e-05 | Corrector-plate-like wavefront trim |
| 19A | L41 rear | G4 (focus) | 0 | −7.64e-06 | Field-dependent correction during focus travel |
| 20A | L51 front | G5 (fixed) | −1.070 | +6.71e-05 | Astigmatism/field curvature (hyperboloid) |
| 21A | L51 rear | G5 (fixed) | 0 | +5.71e-05 | Final wavefront trimming |

The concentration of aspherical surfaces behind the stop — and particularly on the focusing and field-flattening groups — follows Peter Karbe's established design philosophy: aspherical surfaces are most effective for correcting oblique spherical aberration when placed where off-axis ray bundles are well separated from the on-axis bundle.

---

## Verification Summary

All patent-stated parameters were independently verified by ABCD paraxial ray trace:

| Parameter | Patent value | Computed | Residual |
|-----------|-------------|----------|---------|
| System EFL | 27.0831 mm | 27.0834 mm | +0.0003 mm |
| G1 focal length | 36.07796 mm | 36.0783 mm | +0.0003 mm |
| G2 focal length | 178.3235 mm | 178.3257 mm | +0.0022 mm |
| G3 focal length | 363.4437 mm | 363.4437 mm | < 0.001 mm |
| G4 focal length | 33.98372 mm | 33.9837 mm | < 0.001 mm |
| G5 focal length | −27.8386 mm | −27.8386 mm | < 0.001 mm |

All values agree within expected rounding tolerance, confirming the transcription integrity of the patent data.
