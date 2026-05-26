# Minolta AF APO Tele 200mm f/2.8 — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** US 4,786,152  
**Application Number:** 35,068  
**Filed:** April 6, 1987  
**Granted:** November 22, 1988  
**Priority:** April 7, 1986 (JP 61-79484)  
**Inventor:** Tetsuya Arimoto  
**Assignee:** Minolta Camera Kabushiki Kaisha, Osaka, Japan  
**Title:** Telephoto Lens System  
**Embodiment analyzed:** Embodiment 3 (Table 3, Figure 7)

The patent discloses a compact large-aperture telephoto lens made from three lens units in positive-negative-positive order. Only the negative second unit moves for focusing. Embodiment 3 is the closest disclosed numerical form for the Minolta AF APO Tele 200mm f/2.8 because the worked example has the same 8-element, 7-group count, the same all-spherical three-unit layout, two patent-listed anomalous-dispersion positive front elements, an f/2.8 aperture, and a full field close to the production lens. The manufacturer manual for the high-speed version lists the AF 200mm f/2.8 APO TELE (N), inner autofocusing, anomalous-dispersion glass, a 1.5 m minimum focus distance, f/32 minimum aperture, 72 mm filter, 86 × 134 mm size, and 790 g weight.

The patent table states a normalized focal length of `f = 100.0`, `F No. = 2.8`, and `2ω = 12°`. Direct paraxial tracing of the tabulated radii, thicknesses, and refractive indices gives an effective focal length of 107.407402 patent units rather than exactly 100.0. The data file therefore scales the patent prescription by ×1.862069062, making the computed data-file effective focal length 200 mm and preserving the manufacturer's focal-length marking. This is a deliberate production-normalized transcription rather than a blind ×2 expansion of the printed patent normalization.

## Optical Architecture

The lens is a classical telephoto in three functional units. Unit I is a strong positive front unit made from three positive elements followed by a negative meniscus. Unit II is a negative internal-focus unit consisting of a cemented doublet plus a separate negative meniscus. Unit III is a single positive rear relay element. Figure 7 of the patent places the aperture stop in the air gap immediately ahead of Unit II, which is consistent with the patent text explaining that a fixed diaphragm just in front of the movable negative unit minimizes focus-induced off-axis aberration change.

An independent paraxial trace of the unscaled Embodiment 3 prescription gives:

| Quantity | Patent-normalized value | Production-scaled value |
|---|---:|---:|
| Effective focal length | 107.407402 | 200.000 mm |
| Back focal distance from r15 | 30.566839 | 56.918 mm |
| Total axial track to paraxial image | 92.270839 | 171.815 mm |
| Telephoto ratio, track/EFL | 0.859 | 0.859 |
| Surface-by-surface Petzval sum | -0.001598424 | -0.000858413 mm^-1 |

The telephoto ratio of 0.859 confirms true telephoto contraction: the axial track is shorter than the effective focal length. This is not a retrofocus construction; it is the opposite configuration, with a shorter physical length obtained by placing negative power behind the strong positive front unit.

**Unit I (L1-L4, positive):** Unit I has a computed focal length of 63.894 patent units (118.97 mm scaled). Component I-1, consisting of L1-L3, has a compound focal length of 27.169 patent units; component I-2, L4 alone, is -30.990 patent units. Their independent ratio is 0.877, while the patent table reports 0.900 for the same condition. Both satisfy the claimed interval.

**Unit II (L5-L7, negative):** Unit II has a computed focal length of -31.028 patent units (-57.78 mm scaled). It is the only moving optical unit during focusing. The cemented L5-L6 doublet alone is -52.048 patent units, and the trailing negative L7 strengthens the unit to roughly -31 patent units.

**Unit III (L8, positive):** Unit III is a single biconvex low-dispersion positive element with a computed focal length of 52.336 patent units (97.45 mm scaled). It recollimates the diverging bundle from Unit II and supplies the rear relay/field-flattening action.

## Element-by-Element Analysis

### L1 — Biconvex Positive, AD Crown

`nd = 1.49310`, `νd = 83.55`. Glass: unmatched AD fluorophosphate crown, patent code 493/836, `θgF = 0.539`. `f = +179.4 mm` production-scaled (`+96.3` patent units).

L1 is nearly plano-convex, with a strong front surface and a very weak rear surface. It starts the high-aperture converging bundle while keeping dispersion very low. The patent's condition (4) requires at least one positive front-unit element with partial dispersion ratio above 0.53 and Abbe number above 75; L1 satisfies this directly.

Current public HOYA and OHARA catalog data do not provide a confident exact name for the `1.49310 / 83.55 / θgF = 0.539` glass. No exact public HOYA or OHARA catalog name is assigned here. The data file records the element as an unmatched patent-listed anomalous-dispersion fluorophosphate crown.

### L2 — Positive Meniscus, Convex to Object, AD Crown

`nd = 1.49310`, `νd = 83.55`. Glass: unmatched AD fluorophosphate crown, patent code 493/836, `θgF = 0.539`. `f = +155.0 mm` production-scaled (`+83.2` patent units).

L2 is the second anomalous-dispersion positive element. It shares the chromatic correction load with L1 and carries substantial positive front-group power without relying on high refractive index. The close L1-L2 spacing makes this pair behave as a strong low-dispersion collector, while the different bending of L2 provides an additional spherical and coma balancing degree of freedom.

### L3 — Positive Meniscus, Convex to Object

`nd = 1.72000`, `νd = 52.14`. Glass: unmatched high-index lanthanum-crown class, code 720/521. `f = +116.1 mm` production-scaled (`+62.4` patent units).

L3 is the third element of component I-1 and provides high-index positive power after the two low-index AD crowns. Its rear surface, r6, is one of the patent's explicitly controlled surfaces. The r6/r7 radius ratio and the d6 air gap between L3 and L4 are the main distinction from the prior art designs cited by the patent, where the third positive and fourth negative front elements were cemented.

The stored `1.72000 / 52.14` glass does not match the current public HOYA LAC10 or OHARA S-LAL10 values closely enough for a firm catalog identification. It is best treated as an unmatched high-index lanthanum crown or a discontinued/proprietary melt rather than forced into a near match.

### L4 — Negative Meniscus, Convex to Object

`nd = 1.72100`, `νd = 33.40`. Glass: unmatched dense lanthanum flint, code 721/334. `f = -57.7 mm` production-scaled (`-31.0` patent units).

L4 is component I-2: the negative meniscus immediately behind the positive three-element front component. Its strongly curved rear surface adds the front unit's main negative compensating power. The positive/negative component spacing lets the compound front unit have a comparatively long focal length even though its subcomponents are individually much stronger.

No current public HOYA or OHARA catalog match is assigned to this glass. It is recorded as an unmatched dense lanthanum flint rather than forced into a named catalog type.

### L5 — Biconvex Positive, Cemented to L6

`nd = 1.75520`, `νd = 27.51`. Glass: HOYA E-FD4 / OHARA S-TIH4 dense flint. `f = +90.6 mm` production-scaled (`+48.6` patent units).

L5 is the front element of the Unit II cemented doublet. Its standalone in-air focal length is +48.641 patent units. Its high index and high dispersion let the cemented interface with L6 provide a controlled chromatic correction term inside the moving focus unit.

The patent's condition (6) constrains the cemented-surface power. Using L5 as the front element and L6 as the rear element gives `r_ab / (n_b - n_a) = -43.717 / (1.72000 - 1.75520) = 1242.0`, matching the tabulated value 1242.

### L6 — Biconcave Negative, Cemented to L5

`nd = 1.72000`, `νd = 50.31`. Glass: HOYA LAC10 / OHARA S-LAL10 lanthanum crown. `f = -46.1 mm` production-scaled (`-24.8` patent units).

L6 is the negative lower-dispersion partner of the Unit II cemented doublet. Its standalone focal length is -24.773 patent units. In combination with L5, the pair is a net negative achromat with a compound focal length of -52.048 patent units.

The patent prose and claim language around condition (5) are internally awkward because the text writes `νa - νb > 20`, while the numerical table reports `νb - νa = 22.8`. The numerical value can only be obtained as `50.31 - 27.51`, i.e., L6's Abbe number minus L5's Abbe number. The analysis follows the numerical table because it is the value tied directly to the embodiment prescription.

### L7 — Negative Meniscus, Convex to Object

`nd = 1.58144`, `νd = 40.89`. Glass: HOYA E-FL5 light flint. `f = -156.7 mm` production-scaled (`-84.1` patent units).

L7 is the air-spaced trailing singlet of Unit II. It adds negative power behind the cemented doublet, taking the moving unit from the doublet's -52.048 patent-unit focal length to -31.028 patent units for the whole focusing group. Current public HOYA catalog matching supports E-FL5 for this glass.

### L8 — Biconvex Positive

`nd = 1.48749`, `νd = 70.44`. Glass: HOYA FC5 / OHARA S-FSL5 fluor crown. `f = +97.5 mm` production-scaled (`+52.3` patent units).

L8 is the single positive rear relay element. Its low dispersion avoids introducing a large residual chromatic term at the rear of the lens, while its position after the largest air gap gives it leverage over field curvature and astigmatism.

## Glass Identification and Selection

| Element | nd | νd | Catalog treatment | Role |
|---|---:|---:|---|---|
| L1 | 1.49310 | 83.55 | Unmatched AD fluorophosphate crown, θgF = 0.539 | Primary anomalous-dispersion positive collector |
| L2 | 1.49310 | 83.55 | Unmatched AD fluorophosphate crown, θgF = 0.539 | Secondary anomalous-dispersion positive collector |
| L3 | 1.72000 | 52.14 | Unmatched high-index lanthanum crown, 720/521 | High-index positive power in I-1 |
| L4 | 1.72100 | 33.40 | Unmatched dense lanthanum flint, 721/334 | Negative front-unit compensator |
| L5 | 1.75520 | 27.51 | HOYA E-FD4 / OHARA S-TIH4 | Dense-flint member of Unit II doublet |
| L6 | 1.72000 | 50.31 | HOYA LAC10 / OHARA S-LAL10 | Lower-dispersion crown member of Unit II doublet |
| L7 | 1.58144 | 40.89 | HOYA E-FL5 | Negative auxiliary element in Unit II |
| L8 | 1.48749 | 70.44 | HOYA FC5 / OHARA S-FSL5 | Low-dispersion rear relay |

The front unit's chromatic strategy is not a conventional crown/flint achromat alone. The two low-index, very-high-Abbe positive front elements are also anomalous-dispersion glasses, and the patent explicitly uses `θgF > 0.53` and `νd > 75` to describe the required glass behavior. Because the patent provides the partial-dispersion ratio directly, the AD function is patent-grounded even though the exact public catalog name is unresolved.

The moving Unit II is separately achromatized. L5 and L6 have a large Abbe-number separation and a strongly controlled cemented interface, reducing chromatic-aberration change as the negative unit translates during focusing.

## Focus Mechanism

The lens uses internal focusing by moving Unit II, consisting of L5-L7, toward the image side when focusing from infinity to close range. Unit I, Unit III, and the image plane remain fixed. The patent states that Embodiment 3 moves Unit II by 5.389 patent units at magnification `β = -0.1`; direct first-order tracing of the published prescription does not reproduce that exact conjugate. Using the computed paraxial model, a 5.389-unit movement gives approximately `β = -0.128` at the fixed image plane, while `β = -0.1` would require approximately 4.153 patent units. This is consistent with the broader focal-length normalization discrepancy noted above.

For the production-scaled data file, focus travel is instead solved against the manufacturer 1.5 m minimum focus distance. The resulting Unit II travel is 12.731 mm, giving a paraxial magnification of -0.161× at the fixed image plane. This aligns with the usual published maximum-magnification range for this lens class and is more useful for the viewer than stopping at the patent's internally inconsistent `β = -0.1` note.

| Gap | Infinity, production-scaled | Close-focus model, production-scaled | Function |
|---|---:|---:|---|
| r8 → STO | 25.427 mm | 25.427 mm | fixed stop placement in d8 |
| STO → r9 | 0.931 mm | 13.662 mm | Unit II moves imageward |
| r11 → r12 | 6.603 mm | 6.603 mm | fixed spacing inside Unit II |
| r13 → r14 | 33.813 mm | 21.082 mm | compensating rear gap shrinkage |

The stop is modeled 0.5 patent units ahead of surface r9, i.e., just in front of Unit II as shown in the patent figures. This position gives a computed stop semi-diameter of 16.014 mm for f/2.8 after production scaling.

## Aspherical Surfaces

The design is entirely spherical. No aspherical coefficients are listed for any of the three patent embodiments, and the figures show conventional spherical lens elements. Aberration correction is accomplished by the positive-negative-positive telephoto power distribution, the r6/r7 and d6 front-unit spacing controls, two AD positive front elements, and the achromatized Unit II cemented doublet.

## Conditional Expressions

| Condition | Expression | Value used for Embodiment 3 | Status |
|---|---|---:|---|
| (1) | r6 / r7 | 0.646 | Satisfied |
| (2) | d6 / f, patent basis | 0.00979 | Satisfied |
| (3) | fI-1 / |fI-2| | 0.877 independent; 0.900 patent table | Satisfied |
| (4) | θgF > 0.53, νd > 75 | θgF = 0.539, νd = 83.55 for L1/L2 | Satisfied |
| (5) | Abbe-number separation in cemented pair | 50.31 - 27.51 = 22.80 | Satisfied |
| (6) | r_ab / (n_b - n_a) | 1242.0 | Satisfied |
| (7) | fI / f | 0.639 on patent f=100 basis; 0.595 on traced-EFL basis | Satisfied |
| (8) | tI,II < tII,III | 14.155 < 18.159 | Satisfied |

The `500f` and `1600f` notation in condition (6) is treated as a typographical artifact for the numerical examples: the table reports 1242, which is obtained from the raw radius and index difference, not from a value multiplied by the system focal length.

## Petzval Sum and Field Curvature

Using the surface-by-surface Petzval formula `Σ φ/(n n')`, with `φ = (n' - n)/R`, the normalized Petzval sum is -0.001598424. The corresponding Petzval radius is +625.6 patent units, or about +1165 mm in the production-scaled data file.

The sign and magnitude are produced by competing contributions. L1-L3 initially drive the sum positive, but the strongly curved rear surface of L4 contributes -0.023944 by itself, pulling Unit I much closer to zero. The negative elements in Unit II then push the final sum slightly negative. The net field curvature is therefore much flatter than a simple positive front telephoto group would suggest.

## Verification Summary

The prescription is based on a fresh transcription of Table 3 and Figure 7, with paraxial verification of effective focal length, back focal distance, total track, group focal lengths, standalone in-air element focal lengths, conditional-expression values, stop semi-diameter, close-focus travel, and Petzval sum. The data file uses the production-normalized scale factor described above, retains the patent's all-spherical prescription, and models focus by the two variable air gaps surrounding Unit II.

## Design Heritage and Context

The patent contrasts the invention with earlier positive-negative-positive telephoto systems in which the third positive and fourth negative elements of the first unit were cemented. The present design deliberately introduces an air gap between L3 and L4. That gap, controlled by conditions (1) and (2), is the chief structural distinction in the front unit and gives the designer an additional coma-correction degree of freedom.

The production lens belongs to Minolta's autofocus APO telephoto line. The manufacturer manual identifies inner autofocusing and anomalous-dispersion glass as core features of the AF APO telephoto lenses, matching the central optical strategy disclosed in this patent.

## Sources

1. Tetsuya Arimoto / Minolta Camera Kabushiki Kaisha, US 4,786,152, "Telephoto Lens System," filed April 6, 1987 and granted November 22, 1988. Embodiment 3, Table 3 and Figure 7.
2. Minolta, *Maxxum AF High-Speed Lenses* instruction manual for AF 200mm f/2.8 APO TELE (N), AF 300mm f/2.8 APO TELE (N), and AF 600mm f/4 APO TELE (N).
3. HOYA GROUP Optics Division, optical-glass data download and designation documentation, accessed for current catalog matching and glass-family terminology.
4. OHARA Corporation, optical-glass catalog download and catalog-data notes, accessed for current catalog matching and cross-vendor verification.
