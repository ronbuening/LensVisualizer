# ZEISS Touit Makro-Planar T* 2.8/50M — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** JP 2015-161792 A (Japan)
**Application Number:** 特願2014-36880 (P2014-36880)
**Filed:** February 27, 2014
**Published:** September 7, 2015
**Inventors:** Tomioka Sadako (富岡 禎子), Saitō Hiroki (斉藤 広樹), Aurélien Dodoc, Michael Polman, Jürgen Klein
**Applicants:** Fujifilm Corporation; Carl Zeiss AG
**Title:** マクロレンズおよび撮像装置 (Macro Lens and Imaging Apparatus)
**Embodiment analyzed:** Example 1 (実施例1)

JP 2015-161792 A describes a compact macro lens for electronic cameras whose chromatic aberration remains well corrected at near-unity magnification. Example 1 is the embodiment used here. The patent gives three focus states, β = 0, β = −0.5, and β = −0.98, and tabulates the full prescription, variable group spacings, aspherical coefficients, and conditional-expression values.

The prescription is a strong match for the ZEISS Touit Makro-Planar T* 2.8/50M. The convergence is not based on a single value but on the combined pattern of the design:

1. The patent example has 14 glass elements in 11 air-separated groups, matching the published ZEISS specification for the Touit 2.8/50M.
2. The patent focal length is f′ = 51.52 mm at infinity, consistent with the marketed 50 mm APS-C macro lens and its 75 mm-equivalent angle of view.
3. The patent maximum aperture is FNo. = 2.88 at infinity, corresponding to the marketed f/2.8 aperture.
4. The patent field is 2ω = 30.6° at infinity, matching an APS-C image field rather than a 35 mm full-frame field.
5. The patent reaches β = −0.98 at closest focus, consistent with the production lens's 1:1 macro specification and 0.15 m minimum focus distance.
6. The patent uses a three-group floating inner-focus system in which G2, G4, and G5 move while G1, G3, the stop, and G6 remain fixed. ZEISS describes the production lens as using a floating-elements design.
7. The patent applicants are Fujifilm Corporation and Carl Zeiss AG, matching the Touit system's Fujifilm X and Sony E APS-C production context.

The patent includes a parallel plane plate PP behind the lens system. That plate represents camera-side cover glass or filter glass, not a lens element. In the accompanying data file it is excluded from the surface array and folded into the final air-equivalent back focal distance.

## Optical Architecture

The design is a six-group macro lens with power distribution:

| Group | Power | Elements | Focus behavior | Main role |
|---|---:|---|---|---|
| G1 | Positive | L11-L12 cemented doublet, L13 | Fixed | Front collector and primary front chromatic/spherical correction |
| G2 | Negative | L21, L22-L23 cemented doublet | Moves imageward on close focus | Main negative floating focus group |
| G3 | Positive | L31 | Fixed | High-dispersion field lens before stop |
| Stop | — | Aperture stop | Fixed | Aperture reference plane |
| G4 | Positive | L41-L42 cemented doublet, L43 | Moves objectward on close focus | Positive floating relay and close-range color correction |
| G5 | Positive | L51 | Moves objectward on close focus | Positive floating compensator |
| G6 | Negative | L61, L62, L63 | Fixed | Rear field flattener and final image-side correction |

The design should not be described as a telephoto construction in the strict optical sense: the physical track is much longer than the focal length. Its distinctive feature is instead the six-group positive-negative-positive-stop-positive-positive-negative architecture combined with three independently moving internal focus groups. This lets the lens approach unity magnification without front extension and without moving the large-diameter G1 assembly.

The front half of the lens performs the main ray collection and preliminary chromatic correction. The negative G2 group then changes the conjugate during focus. The stop is followed by a split positive relay, G4 and G5, whose relative spacing is intentionally non-monotonic. The fixed negative rear group supplies field flattening and final lateral-color correction.

## Element-by-Element Analysis

### L11 — Negative meniscus, convex to object (G1, cemented with L12)

nd = 1.84666, νd = 23.78. Glass: S-TIH53 (OHARA), dense titanium flint. f = −31.82 mm.

L11 is the high-index, high-dispersion flint member at the front of the first cemented doublet. The front radius is extremely weak at R = +794.4933 mm, while the cemented junction with L12 is strongly curved at R = +26.0420 mm. The patent specifically describes the G1 cemented surface as convex toward the object side and states that this configuration suppresses axial chromatic aberration across the image.

The element is negative in air, but in the cemented pair its role is not simply to diverge the beam. It provides the high-dispersion counterweight needed by the positive S-FPM2 element behind it.

### L12 — Biconvex positive (G1, cemented with L11)

nd = 1.59522, νd = 67.74. Glass: S-FPM2 (OHARA), fluorophosphate crown. f = +31.25 mm.

L12 is the low-index, high-Abbe positive element in G1. It satisfies the patent's first two glass conditions: N1d < 1.60 and ν1d > 60. The tighter preferred condition ν1d > 65 is also satisfied.

The catalog match is OHARA S-FPM2, a fluorophosphate glass with positive anomalous partial dispersion. This is important because a 1:1 macro lens is especially vulnerable to secondary spectrum at close focus. L12 provides the front group's low-dispersion positive power while the L11-L12 cemented interface handles primary axial color.

### L13 — Biconvex positive, aspherical front surface (G1)

nd = 1.74330, νd = 49.33. Glass: M-NBF1 / MP-NBF1 class (HOYA, 743/493). f = +30.37 mm.

L13 is a high-index positive element with an aspherical front surface. The patent text states that the final positive element in G1 helps suppress spherical aberration. This matches the prescription: surface 4A carries the first asphere in the system and sits where the aperture-zone height remains large enough to make spherical-aberration correction efficient.

The prior draft identified this glass as OHARA S-LAM2. That is not supported by an exact catalog match. The nd/νd pair 1.74330/49.33 matches HOYA NBF1-class material, so the data file labels it as M-NBF1 / NBF1-class rather than as an OHARA S-LAM glass.

### L21 — Biconcave negative, both surfaces aspherical (G2)

nd = 1.73077, νd = 40.50. Glass: M-LAF81 / MP-LAF81 class (HOYA, 731/405). f = −22.19 mm.

L21 is the dominant negative element in the moving G2 group. Both surfaces are aspherical, making it the heaviest aspherical correction element in the design. The front surface is a weak concave surface, while the rear surface is a steep positive-radius exit surface into air.

The two aspheres are not redundant. Surface 6A uses even-order terms and moderates the front-surface contribution. Surface 7A uses an extended odd/even polynomial and shapes the strong glass-to-air divergence at the rear of L21. Since G2 moves during focusing, these aspheres must remain effective across the infinity-to-macro focus range.

The prior draft identified this glass as OHARA S-NBH5. The exact catalog match is instead HOYA LAF81-class material at nd = 1.73077 and νd = 40.50.

### L22 — Biconcave negative (G2, cemented with L23)

nd = 1.51680, νd = 64.20. Glass: BSC7 (HOYA) / N-BK7 class, code 517/642. f = −30.16 mm.

L22 is the negative crown member of the rear G2 cemented doublet. The patent's condition (3) requires ν2dn − ν2dp > 25 for the negative and positive members of this cemented doublet. With L22 at νd = 64.20 and L23 at νd = 23.78, the difference is 40.42.

The earlier draft labeled L22 as OHARA S-BSL7. That is not an exact match: modern OHARA S-BSL7 is nd = 1.51633, νd = 64.14. The prescription value corresponds to the classic BK7/BSC7 code 517/642, so the corrected glass description is BSC7 / N-BK7 class.

### L23 — Positive meniscus, convex to object (G2, cemented with L22)

nd = 1.84666, νd = 23.78. Glass: S-TIH53 (OHARA), dense titanium flint. f = +42.87 mm.

L23 is the high-dispersion positive member of the G2 cemented doublet. It partially offsets the negative power of L22, leaving the doublet weakly negative while allowing L21 to carry the principal negative power of G2.

The use of the same S-TIH53 glass in L11 and L23 gives the front and moving negative groups a related high-dispersion correction strategy. In G2 this is especially significant because the group translates during focus and would otherwise produce a changing chromatic error.

### L31 — Biconvex positive (G3)

nd = 1.92286, νd = 20.88. Glass: E-FDS1 / MP-FDS1 class (HOYA, 923/209), ultra-high-index dense flint. f = +37.09 mm.

L31 is the sole element in the fixed third group and sits immediately before the aperture stop. The patent requires the G3 element to have ν3d < 30, with a preferred limit below 25; L31 satisfies this with νd = 20.88.

Its high index permits a useful positive focal length without extreme curvature. Its very low Abbe number deliberately introduces high positive chromatic power near the stop, where the marginal ray height is controlled and the chromatic effect is primarily axial. The earlier draft's S-NPH2 identification is inconsistent with the nd/νd pair; the corrected identification is HOYA E-FDS1 / MP-FDS1-class, a 923/209 dense flint.

### L41 — Biconcave negative (G4, cemented with L42)

nd = 1.74077, νd = 27.79. Glass: S-TIH13 (OHARA), titanium flint. f = −21.67 mm.

L41 is the negative member at the front of the moving G4 cemented doublet. The patent states that placing a negative-positive cemented doublet at the object side of G4 corrects axial chromatic aberration as object distance changes.

The prior draft labeled this glass S-TIH14. The prescription pair 1.74077/27.79 corresponds to OHARA S-TIH13. This matters because the glass assignment is used downstream for chromatic modeling and should not be silently substituted.

### L42 — Biconvex positive (G4, cemented with L41)

nd = 1.59522, νd = 67.74. Glass: S-FPM2 (OHARA), fluorophosphate crown. f = +25.65 mm.

L42 is the low-dispersion positive partner of the G4 cemented doublet. Together with L41, it gives ν4dp − ν4dn = 67.74 − 27.79 = 39.95, satisfying condition (8) and its stricter preferred forms.

This is the second S-FPM2 element in the design. Its position after the stop and inside a moving focus group makes it especially important for close-range axial color and secondary-spectrum correction.

### L43 — Biconvex positive (G4)

nd = 1.61800, νd = 63.33. Glass: S-PHM52 (OHARA), phosphate crown. f = +61.02 mm.

L43 is a separate weak positive element following the G4 cemented doublet. It distributes the positive relay power over more surfaces and avoids forcing the L41-L42 doublet to carry the entire positive G4 load.

S-PHM52 is a high-Abbe phosphate glass with mild anomalous partial dispersion. Along with L42, it gives the two positive G4 lenses an average Abbe number of 65.6, satisfying condition (9). The patent links this high positive-lens Abbe average to correction of axial and lateral chromatic aberration at short object distances.

### L51 — Biconvex positive (G5)

nd = 1.72916, νd = 54.68. Glass: S-LAL18 (OHARA), lanthanum crown. f = +48.51 mm.

L51 is the sole element of G5 and acts as a positive floating compensator. It moves toward the object side during close focus, nearly in lockstep with G4.

The lens is almost plano-convex in functional terms: the front surface carries nearly all the optical power and the rear surface is very weak. This keeps the G5 group optically simple while letting its axial position tune field curvature and focus balance.

### L61 — Biconcave negative (G6)

nd = 1.69895, νd = 30.13. Glass: S-TIM35 (OHARA), titanium flint. f = −30.15 mm.

L61 is the strongest negative element in the fixed rear group. It supplies a large part of the rear group's negative power and contributes strongly to Petzval flattening.

The prior draft identified this as S-TIM25. The exact OHARA catalog match is S-TIM35. The distinction is not cosmetic; S-TIM25 is a different glass and would mislead any dispersion-aware analysis.

### L62 — Plano-concave negative (G6)

nd = 1.51742, νd = 52.43. Glass: S-NSL36 (OHARA), normal crown. f = −91.27 mm.

L62 is a weak negative crown element following L61. Its rear surface is flat, while the front concave surface supplies mild negative power.

The element supplements field flattening without adding the heavy chromatic load that a stronger flint element would introduce. It also helps space the rear group without using a large air gap alone.

### L63 — Biconvex positive (G6)

nd = 1.67003, νd = 47.23. Glass: S-BAH10 (OHARA), barium crown/flint boundary glass. f = +83.51 mm.

L63 is the final powered lens element before the camera cover glass. It is weakly positive and partly compensates the two negative lenses preceding it, leaving the rear group net negative.

The prior draft identified this as S-LAM3. The exact catalog match is S-BAH10. With νd = 47.23, it sits on the flint side of the usual crown/flint boundary despite its barium-glass family label.

## Glass Identification and Selection

The patent itself gives refractive indices and Abbe numbers, not vendor glass names. The glass names below are catalog matches to the published nd/νd pairs. Exact matches are preferred over assuming an OHARA name for every element.

| Element(s) | nd | νd | Corrected catalog identification | Note |
|---|---:|---:|---|---|
| L11, L23 | 1.84666 | 23.78 | S-TIH53 (OHARA) | Dense titanium flint; high-dispersion doublet member |
| L12, L42 | 1.59522 | 67.74 | S-FPM2 (OHARA) | Fluorophosphate crown; positive anomalous partial dispersion |
| L13 | 1.74330 | 49.33 | M-NBF1 / MP-NBF1 class (HOYA, 743/493) | Corrects earlier S-LAM2 assignment |
| L21 | 1.73077 | 40.50 | M-LAF81 / MP-LAF81 class (HOYA, 731/405) | Corrects earlier S-NBH5 assignment |
| L22 | 1.51680 | 64.20 | BSC7 (HOYA) / N-BK7 class | Corrects earlier S-BSL7 assignment |
| L31 | 1.92286 | 20.88 | E-FDS1 / MP-FDS1 class (HOYA, 923/209) | Corrects earlier S-NPH2 assignment |
| L41 | 1.74077 | 27.79 | S-TIH13 (OHARA) | Corrects earlier S-TIH14 assignment |
| L43 | 1.61800 | 63.33 | S-PHM52 (OHARA) | Mild anomalous partial dispersion |
| L51 | 1.72916 | 54.68 | S-LAL18 (OHARA) | High-index lanthanum crown |
| L61 | 1.69895 | 30.13 | S-TIM35 (OHARA) | Corrects earlier S-TIM25 assignment |
| L62 | 1.51742 | 52.43 | S-NSL36 (OHARA) | Weak negative crown in rear group |
| L63 | 1.67003 | 47.23 | S-BAH10 (OHARA) | Corrects earlier S-LAM3 assignment |

The chromatic strategy is distributed rather than concentrated in one ED group. G1 contains a high-dispersion flint plus S-FPM2 positive doublet. G2 contains a high-Abbe negative crown and high-dispersion positive flint cemented pair. G3 intentionally uses an ultra-high-dispersion positive field lens near the stop. G4 repeats a negative flint plus S-FPM2 positive doublet and adds a high-Abbe phosphate positive element. The result is a floating-focus macro design whose color correction is controlled in both the fixed and moving parts of the lens.

## Focus Mechanism

The lens uses a three-group floating inner-focus mechanism. G1, G3, the aperture stop, and G6 remain fixed. G2 moves toward the image side. G4 and G5 move toward the object side.

| Patent gap | Location | β = 0 | β = −0.5 | β = −0.98 | Close-focus change |
|---|---|---:|---:|---:|---:|
| DD[5] | G1 to G2 | 1.60 | 5.25 | 9.61 | +8.01 |
| DD[10] | G2 to G3 | 9.10 | 5.45 | 1.10 | −8.00 |
| DD[13] | Stop to G4 | 12.68 | 6.82 | 2.47 | −10.21 |
| DD[18] | G4 to G5 | 1.52 | 2.54 | 1.51 | −0.01 net |
| DD[20] | G5 to G6 | 1.85 | 6.69 | 12.08 | +10.23 |

The G2 movement is confirmed by the near-equal and opposite changes in DD[5] and DD[10]. G4 and G5 move objectward by almost the same distance: D4/D5 = 10.21/10.23 = 0.998. The gap between G4 and G5 is the critical floating correction: it expands from 1.52 mm to 2.54 mm at intermediate focus and then contracts to 1.51 mm near unity magnification. The patent explicitly identifies this expand-then-contract behavior as a way to correct field curvature across the focus range.

The physical track from the first surface to the image plane, including the patent's PP plate, is essentially constant: 95.37 mm at infinity and 95.39 mm at β = −0.98. The small 0.02 mm difference is table rounding. This confirms a constant-length internal-focus macro design rather than a front-extension macro.

## Aspherical Surfaces

The patent marks three aspherical surfaces: surface 4 on L13, and surfaces 6 and 7 on L21. Thus the design has three aspherical surfaces on two aspherical elements.

The patent aspheric equation is:

$$Z_d = \frac{C h^2}{1 + \sqrt{1 - K_A C^2 h^2}} + \sum_m A_m h^m$$

where C = 1/R. In the LensVisualizer convention, the conic term is written with 1 + K inside the square root. Therefore the standard conic constant is K = K_A − 1. In Example 1 all three aspherical surfaces list K_A = 1.0000000, so all have K = 0 spherical bases and use polynomial departure terms for the correction.

A notable feature is the presence of odd-order terms on surfaces 4 and 7. Since h is a radial coordinate, the odd powers do not break rotational symmetry. They simply provide additional radial degrees of freedom. The LensVisualizer data file cannot store odd powers, so surfaces 4A and 7A are represented by even-order least-squares fits over their listed renderer semi-diameters. The fit residuals are below 0.026 µm on surface 4A and below 0.006 µm on surface 7A, far smaller than the prescription table precision.

### Surface 4A — L13 front, R = +23.5562 mm

| Coefficient | Patent value |
|---|---:|
| KA | 1.0000000E+00 |
| A3 | −1.9975218E−05 |
| A4 | +6.2378398E−07 |
| A5 | −6.7539764E−07 |
| A6 | −1.4423201E−08 |
| A7 | +7.9012377E−10 |
| A8 | +1.3838857E−10 |
| A9 | +2.1167277E−11 |
| A10 | +4.3025158E−13 |
| A11 | −1.6841831E−14 |
| A12 | −2.1109002E−14 |
| A13 | −2.4650413E−15 |
| A14 | −5.8476062E−17 |
| A15 | +2.9617348E−17 |

At the data-file semi-diameter h = 12.0 mm, the polynomial departure is −92.27 µm. The negative departure flattens the rim of this positive front surface relative to the base sphere and reduces the spherical-aberration contribution of the strong G1 positive element.

### Surface 6A — L21 front, R = −105.5377 mm

| Coefficient | Patent value |
|---|---:|
| KA | 1.0000000E+00 |
| A4 | +4.1237569E−05 |
| A6 | −5.6417743E−07 |
| A8 | +3.6088348E−09 |
| A10 | −8.8306165E−12 |

Surface 6A uses even-order terms only and is copied directly into the data file. At the data-file semi-diameter h = 8.1 mm, its polynomial departure is +74.31 µm. Because the base surface is concave toward the object side, the positive departure makes the rim less deeply concave and moderates high-zone negative power.

### Surface 7A — L21 rear, R = +19.2398 mm

| Coefficient | Patent value |
|---|---:|
| KA | 1.0000000E+00 |
| A3 | −1.7101547E−05 |
| A4 | +3.8413905E−05 |
| A5 | −6.3738940E−07 |
| A6 | −2.2519977E−07 |
| A7 | −2.8870262E−08 |
| A8 | −1.5872068E−09 |
| A9 | +8.7049597E−11 |
| A10 | +4.6685223E−11 |
| A11 | +5.4433814E−12 |
| A12 | −1.0209216E−13 |
| A13 | −5.5368150E−14 |
| A14 | −1.2829288E−14 |
| A15 | +1.2965500E−15 |

At the data-file semi-diameter h = 7.7 mm, the polynomial departure is +40.01 µm. This is the exit surface of the dominant negative L21 element. The positive departure increases the rim sag of a glass-to-air diverging surface and gives the designer a strong high-order correction handle inside the moving G2 group.

## Conditional Expressions

Example 1 satisfies all of the patent's base and preferred conditional expressions. The values below are independently recomputed from the prescription and agree with the patent's Table 21 within rounding.

| Expression | Condition | Example 1 value | Result |
|---|---|---:|---|
| (1) | N1d < 1.60 | 1.59522 | Satisfied |
| (2) | 60.0 < ν1d | 67.7 | Satisfied |
| (2-1) | 65.0 < ν1d | 67.7 | Satisfied |
| (3) | 25.0 < ν2dn − ν2dp | 40.4 | Satisfied |
| (3-1) | 30.0 < ν2dn − ν2dp | 40.4 | Satisfied |
| (4) | ν3d < 30.0 | 20.9 | Satisfied |
| (4-1) | ν3d < 25.0 | 20.9 | Satisfied |
| (5) | 0.5 < f3/f < 1.0 | 0.720 | Satisfied |
| (5-1) | 0.6 < f3/f < 0.9 | 0.720 | Satisfied |
| (5-2) | 0.65 < f3/f < 0.8 | 0.720 | Satisfied |
| (6) | 1.0 < f4/f < 2.0 | 1.369 | Satisfied |
| (6-1) | 1.1 < f4/f < 1.8 | 1.369 | Satisfied |
| (7) | 0.7 < D4/D5 < 1.5 | 0.998 | Satisfied |
| (7-1) | 0.8 < D4/D5 < 1.3 | 0.998 | Satisfied |
| (7-2) | 0.9 < D4/D5 < 1.1 | 0.998 | Satisfied |
| (8) | 20 < ν4dp − ν4dn | 39.95 | Satisfied |
| (8-1) | 25 < ν4dp − ν4dn | 39.95 | Satisfied |
| (8-2) | 30 < ν4dp − ν4dn | 39.95 | Satisfied |
| (9) | 60.0 < ν4d | 65.6 | Satisfied |

## Verification Summary

A fresh paraxial y-nu ray trace was run directly from the patent's Example 1 surface table.

| Quantity | Computed | Patent value | Comment |
|---|---:|---:|---|
| EFL at β = 0 | 51.506 mm | 51.52 mm | Matches within table rounding |
| BFD, PP folded to air | 24.608 mm | 24.62 mm | Patent Bf′ includes the PP path |
| FNo. | 2.88 | 2.88 | Stop semi-diameter set to 8.73 mm |
| f3/f | 0.720 | 0.720 | Matches Table 21 |
| f4/f | 1.369 | 1.368 | Rounding difference only |
| D4/D5 | 0.998 | 0.998 | Matches Table 21 |
| Physical track, infinity | 95.37 mm | — | Includes PP plate |
| Physical track, closest | 95.39 mm | — | Constant within rounding |
| Surface-by-surface Petzval sum | +0.002666 mm⁻¹ | — | Petzval radius ≈ −375 mm |

The standalone in-air element focal lengths and the group focal lengths were also recomputed. The group values are: G1 = +28.36 mm, G2 = −17.48 mm, G3 = +37.09 mm, G4 = +70.52 mm, G5 = +48.51 mm, and G6 = −33.22 mm. These confirm the patent's positive-negative-positive-stop-positive-positive-negative architecture.

The data file deliberately differs from the patent in three implementation details. First, PP is excluded and folded into the final BFD, as required by the project data convention. Second, the odd-order aspheres on surfaces 4 and 7 are represented by even-order fits, because the renderer's aspherical model is even-order only. Third, the current prime-focus spacing model stores only the β = 0 and β = −0.98 endpoints, so it cannot reproduce the β = −0.5 expansion of DD[18] in the interactive interpolation. These changes do not affect the infinity-focus paraxial focal length or group-power verification.

## Sources

- JP 2015-161792 A, *Macro Lens and Imaging Apparatus*, Fujifilm Corporation / Carl Zeiss AG. Primary source for the surface prescription, variable focus spacings, aspherical coefficients, conditional expressions, and design rationale.
- ZEISS official Touit 2.8/50M product information and technical data sheet. Used only for production matching: focal length, aperture, APS-C format, focus range, 1:1 macro ratio, element/group count, mounts, and floating-elements description.
- OHARA optical glass catalog pages for S-TIH53, S-FPM2, S-TIH13, S-PHM52, S-LAL18, S-TIM35, S-NSL36, and S-BAH10.
- HOYA optical glass catalog/cross-reference material for BSC7, M-NBF1 / MP-NBF1 class, M-LAF81 / MP-LAF81 class, and E-FDS1 / MP-FDS1 class glass matches.
- SCHOTT N-BK7 datasheet used as a cross-check for the 517/642 BK7-class L22 assignment.
