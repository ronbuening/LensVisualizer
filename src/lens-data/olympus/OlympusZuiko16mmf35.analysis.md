# Olympus OM Zuiko 16mm f/3.5 Fisheye — Patent Example 1 Analysis

## Patent Reference and Design Identification

**Patent:** US 3,850,509
**Inventor:** Jihei Nakagawa
**Assignee:** Olympus Optical Co., Ltd.
**Priority:** JP December 7, 1971
**Filed:** November 30, 1972
**Granted:** November 26, 1974
**Title:** Fisheye lens system
**Embodiment analyzed:** Example 1 / Table 1

The prescription analyzed here is **Example 1 / Table 1** of **U.S. Patent 3,850,509, "Fisheye lens system,"** filed by Jihei Nakagawa for Olympus Optical Co., Ltd. The U.S. filing was made on 1972-11-30 from Japanese priority 1971-12-07 and was granted on 1974-11-26. The patent describes a 180° fisheye objective for a 24 × 36 mm "Leica size" camera, with a long back focal length, a comparatively short overall lens system, and a small front element for the class.[^patent]

The production match is strong. Olympus sales literature lists the OM **Zuiko 16mm f/3.5** as an 11-element, 8-group, 180° fisheye with 0.2 m minimum focus, 31 mm length, built-in filters, and a 16 mm f/3.5 specification.[^olympus-brochure] The patent's Example 1 is normalized to $f = 1.0$ and $F = 1:3.5$; scaling by 16.0 gives the production focal length. The count also reconciles: the patent uses ten powered glass elements arranged as seven optical "lenses" or components, plus a plane-parallel built-in filter plate. Counting that filter as a glass piece gives the published 11 elements in 8 air-spaced groups.

The identification is not based on a named commercial product in the patent. It is based on the combined evidence of focal length class, f/3.5 aperture, 180° diagonal coverage for 35 mm format, element/group count after including the built-in filter, the internal filter placement, and Olympus's first-party product specifications.

No first-party interview located for this review specifically discusses the 16 mm f/3.5 fisheye or assigns its commercial optical design to a named Olympus lens designer beyond the patent inventor. Olympus's published Maitani lecture and related OM-system materials are useful only as system context: they document the OM program's compact-system objectives and the need to build a complete 35 mm SLR system, but they do not identify the optical calculation of this fisheye.[^maitani]

## Optical Architecture

This is a **retrofocus diagonal fisheye** for 35 mm format. The patent's normalized back focal distance is $f_B = 2.2916f$; the independent paraxial trace reproduced $f = 0.999970$ and $f_B = 2.291598$ with the built-in filter modeled as a normal crown plane plate. After 16× scaling, the back focal distance from the last glass surface to the image plane is **36.67 mm**, or **2.292× the effective focal length**. That is the central architectural fact of the design: a 16 mm fisheye must clear a 35 mm SLR mirror box while covering a 180° diagonal field.

Power distribution is negative-positive-negative in the front converter, followed by three positive cemented/relay sections around and behind the stop:

1. **L1–L3 front converter:** strong negative fisheye front group, moderated by a weak positive L2.
2. **L4 cemented doublet:** positive biconvex cemented component with a deliberate crown/flint dispersion split.
3. **Built-in filter:** plane-parallel filter plate between L4 and L5; optically zero power but nonzero axial optical path.
4. **L5 cemented doublet:** positive biconvex cemented component whose cemented surface is a key spherical/chromatic correction surface.
5. **Stop region:** the patent places the aperture stop behind L5.
6. **L6 and L7:** rear positive relay and final chromatic/field-correcting doublet.

The first three elements are not merely a scaled wide-angle front group. They are the angular converter. They accept rays approaching a 90° half-field, compress that angular field into the rear system, and help move the image-space focus far behind the final element. The rear components then recover image formation, tune color, and keep astigmatism and field curvature within useful limits.

The design is all-spherical. Its correction burden is carried by power distribution, strongly curved cemented interfaces, and glass selection rather than by aspherical surfaces.

## Element-by-Element Analysis

The element focal lengths below are **standalone in-air focal lengths after 16× scaling**. They are useful for sign and relative power, but they should not be confused with each element's in-situ contribution inside the complete fisheye, especially inside cemented doublets where the adjacent glass changes the interface power.

### L1 — Negative Meniscus, convex to object

**nd = 1.58913, νd = 61.1. Glass: S-BAL35 (OHARA). Standalone f = −23.32 mm.**

L1 is the fisheye entrance element. Its front surface is weakly convex and its rear surface is strongly concave in the patent sign convention, making a powerful negative meniscus. The patent explicitly states that a strong negative meniscus is used to obtain the 180° field and a long back focal length.[^patent]

The use of a high-Abbe crown-class glass at this position is significant. A very wide-angle front negative element sees extreme oblique bundles. If that element were made from a high-dispersion flint, the design would begin with excessive lateral color. S-BAL35 glass keeps the first negative power comparatively low in dispersion while still giving the large geometric bending needed for fisheye coverage.

L1 also keeps the front diameter small for the field angle. The lens is not trying to be rectilinear; it is deliberately mapping a 180° diagonal field into a 24 × 36 mm frame. That lets the first element be smaller than a rectilinear 16 mm with comparable coverage would require.

### L2 — Positive Meniscus, convex to object

**nd = 1.78590, νd = 44.2. Glass: S-LAH51 (OHARA). Standalone f = 59.10 mm.**

L2 is weakly positive. The patent gives $f_2 = 3.694f$, and the independent calculation gives $f_2 = 3.6940f$, or **59.10 mm** at the 16 mm production scale.

This element is the front group's first major correction element. The patent states that a comparatively weak positive second meniscus is effective because oblique rays meet it at large incidence angles; in that position it helps correct intermediate-field aberrations, especially coma, and chromatic aberration of magnification.[^patent]

Its glass is a high-index, medium-dispersion lanthanum-flint-region material. The high index allows L2 to provide useful positive correction without excessive curvature. The νd of 44.2 places it in flint territory by dispersion, even though the glass family name is lanthanum. That distinction matters: L2 is not a crown element in the chromatic sense.

### L3 — Negative Meniscus

**nd = 1.58913, νd = 61.1. Glass: S-BAL35 (OHARA). Standalone f = −18.76 mm.**

L3 is the second negative member of the front converter. Its front radius is extremely weak compared with its rear radius, so most of its standalone negative power is generated at the rear face. The patent says the third lens assists the first lens.[^patent] That means the front converter's negative power is split rather than forcing all field compression into L1.

This split is one reason the front element can remain comparatively small. L1 begins the angular compression; L2 moderates intermediate-field coma and chromatic magnification; L3 then restores negative power before the ray bundle reaches the cemented correction block. The repeated use of S-BAL35 glass for L1 and L3 keeps the high-obliquity negative-power portion from becoming an uncontrolled lateral-color source.

The combined L1–L3 focal length is $f_{123} = -0.6696f$, or **−10.71 mm** at production scale. That independently verifies the patent's stated $f_{123} \approx -0.670f$.

### L4 — Cemented Biconvex Doublet, hyperchromatic-like correction pair

**L4a: nd = 1.69680, νd = 55.6. Glass: S-LAL14 (OHARA). Standalone f = −25.02 mm.**

**L4b: nd = 1.69895, νd = 30.1. Glass: S-TIM35 (OHARA). Standalone f = 15.71 mm.**

**L4 cemented doublet f = 43.91 mm (ABCD thick-lens computation).**

L4 is the first cemented doublet and the patent's main named chromatic correction component. The patent says the fourth lens is composed under conditions similar to a hyperchromatic lens to correct chromatic aberration.[^patent] In practical terms, the design uses two glasses of nearly equal refractive index but very different dispersion. The refractive-index match keeps the cemented interface from being a large monochromatic power discontinuity, while the dispersion difference makes that same interface powerful chromatically.

The key surface is **r8 = 0.6771f**, the cemented interface between L4a and L4b. The Abbe-number split is **ν4 − ν5 = 55.6 − 30.1 = 25.5**, directly inside the patent's required interval. This makes L4 a lateral-color corrector placed soon after the front fisheye converter, where the chief-ray heights and oblique-ray geometry still give it leverage over chromatic magnification.

The rear surface, **r9 = 46.7176f**, is deliberately weak. The patent requires $10f < r_9$ because too much curvature there would enlarge astigmatic difference. Example 1 greatly exceeds that lower bound. The doublet therefore corrects color primarily through its internal cemented surface rather than by adding a strong rear air-glass surface that would damage astigmatism.

### Built-in Filter between L4 and L5

The patent places a filter between the fourth and fifth lenses. In Table 1 it appears as two plane surfaces, r10 and r11, with finite axial thickness. Olympus production literature also lists built-in filters for the 16 mm lens.[^olympus-brochure]

The filter has no paraxial optical power because both surfaces are plane. It nevertheless matters in the axial calculation. Treating it as air gives $f = 0.98353$ and $f_B = 2.27284$, which does not reproduce the patent. Treating it as a normal crown plate ($n \approx 1.51633$, N-BK7 / S-BSL7 equivalent) gives $f = 0.99997$ and $f_B = 2.29160$, matching the patent's stated $f = 1.0$ and $f_B = 2.2916$. The filter index is not printed in the U.S. table, so the normal-crown assignment is a reconstruction for paraxial verification, not a manufacturer-identified glass.

In the data file, the filter is excluded per project convention. Its optical-path contribution is folded into an air-equivalent reduced gap: $d_\text{reduced} = d_9 + d_{10}/n_\text{filter} + d_{11} = 0.0792 + 0.0742/1.51633 + 0.0829 = 0.211034$ (normalized), or 3.377 mm at production scale. This preserves the correct EFL and BFD identically to the full-filter model.

### L5 — Cemented Biconvex Doublet

**L5a: nd = 1.78472, νd = 25.7. Glass: S-TIH11 (OHARA). Standalone f = −19.26 mm.**

**L5b: nd = 1.60342, νd = 38.0. Glass: S-TIM5 (OHARA). Standalone f = 15.91 mm.**

**L5 cemented doublet f = 94.42 mm (ABCD thick-lens computation).**

L5 is the second cemented biconvex component. The patent says that the fifth cemented lens is used so that its cemented surface serves for aberration correction.[^patent] Example 1 makes that explicit: **r13 = 0.6517f**, placing the cemented surface in the required $0.5f < r_{13} < f$ interval.

The glass pairing is unusual if read only as two flints. It is not a conventional crown/flint achromat. L5a is an extremely dispersive dense flint; L5b is a moderate flint. The large index and dispersion differences across r13 allow the designer to tune both spherical aberration and chromatic error after the L4 color correction but before the aperture stop.

Because L5 sits directly in front of the stop region, it has strong control over pupil-dependent aberrations. Its cemented interface contributes correction without creating another air-spaced surface, which would be more prone to flare and would add more degrees of monochromatic aberration.

### Aperture Stop behind L5

The patent places the stop behind the fifth lens. The numerical table does not insert a separate "STO" row, but the sectional drawing and prose identify the stop position between L5 and L6. In the data file, the d14 air gap is split at the midpoint and a STO surface inserted there, with the exact split estimated from Fig. 1.

This stop placement is not incidental. Putting the stop behind the main front converter and the two cemented correction blocks lets the front group accept the 180° field while the rear group controls the aperture-dependent residuals. It also lets L6 and L7 act as a compact rear relay rather than as part of the primary fisheye field collector.

### L6 — Positive Meniscus, convex to image side

**nd = 1.51728, νd = 69.6. Glass: S-APL1 / APL1 (OHARA). Standalone f = 62.10 mm.**

L6 is a positive meniscus placed immediately behind the stop. The patent describes it as having its convex surface on the image side.[^patent] Its role is to recondition the post-stop bundle before it reaches the rear cemented doublet.

The high-Abbe, low-index glass selection is consistent with that role. At this point the rear system should not reintroduce excessive axial color after L4 and L5 have already done the heavy chromatic work. L6 supplies positive relay power with low dispersion and helps control field shape and spherical residuals in the aperture-limited portion of the lens.

The air gap between L5 and L6 is also the stop region. That makes L6 sensitive to marginal-ray geometry: small changes in its curvature would affect spherical aberration and pupil aberration more than field-angle capture.

### L7 — Rear Cemented Biconvex Doublet

**L7a: nd = 1.80518, νd = 25.4. Glass: S-TIH6 (OHARA). Standalone f = −35.71 mm.**

**L7b: nd = 1.51728, νd = 69.6. Glass: S-APL1 / APL1 (OHARA). Standalone f = 19.16 mm.**

**L7 cemented doublet f = 39.24 mm (ABCD thick-lens computation).**

L7 is the final cemented doublet. Its first element is a high-index, high-dispersion dense flint and its second is a low-index, high-Abbe crown. This is a stronger chromatic contrast than L5 and is placed near the image plane, where it has leverage over axial color, residual lateral color, and field curvature at the final image surface.

The final rear surface r19 is negative and relatively strong. It contributes to the final positive image-forming power while maintaining the long image-space clearance. Because the group is cemented, the designer can use a strong internal chromatic lever without adding an air-spaced interface close to the film plane.

The rear group is not a field flattener in the modern aspheric sense. It is a compact spherical relay and final achromatizing component whose job is to make the retrofocus fisheye usable on a 24 × 36 mm SLR frame.

## Glass Identification and Selection

The patent gives refractive index and Abbe number only; it does **not** name glass manufacturers or melt designations. The names below are therefore **catalog-equivalent identifications**, not proof of Olympus procurement from a named vendor. The matches are to OHARA current or historical catalog entries by $n_d$ and $\nu_d$, which is the most defensible manufacturer-catalog mapping available for this Japanese patent.

| Where used | Catalog-equivalent glass | nd | νd | Six-digit code | Function |
|---|---|---:|---:|---:|---|
| L1, L3 | S-BAL35 (OHARA) | 1.58913 | 61.1 | 589/611 | Barium crown / high-Abbe crown in the front negative converter. |
| L2 | S-LAH51 (OHARA) | 1.78590 | 44.2 | 786/442 | High-index dense lanthanum flint; weak positive corrector in high obliquity region. |
| L4a | S-LAL14 (OHARA) | 1.69680 | 55.6 | 697/556 | Lanthanum crown side of the fourth cemented doublet. |
| L4b | S-TIM35 (OHARA) | 1.69895 | 30.1 | 699/301 | Dense flint side of the fourth cemented doublet; high dispersion for lateral color control. |
| L5a | S-TIH11 (OHARA) | 1.78472 | 25.7 | 785/257 | Very high-dispersion dense flint in the fifth doublet. |
| L5b | S-TIM5 (OHARA) | 1.60342 | 38.0 | 603/380 | Moderate-index flint paired to L5a across a strongly powered cemented surface. |
| L6, L7b | S-APL1 / APL1 (OHARA) | 1.51728 | 69.6 | 517/696 | Low-index high-Abbe crown used after the stop and in the rear doublet. |
| L7a | S-TIH6 (OHARA) | 1.80518 | 25.4 | 805/254 | Very high-dispersion dense flint at the front of the rear cemented doublet. |

The palette has three clear patterns.

First, the front negative converter uses high-Abbe crown-class glass for L1 and L3. That limits the amount of lateral color created before the ray bundle reaches the cemented correction blocks.

Second, the strongest chromatic work is concentrated in cemented pairs. L4 uses nearly equal refractive indices with a large Abbe split, making the cemented surface act as a chromatic correction surface with limited monochromatic disruption. L5 and L7 use more aggressive flint/crown or flint/flint pairings to trim residual color and spherical aberration behind the front converter.

Third, the high-index glasses with νd below 50 are flints for classification purposes, even where the family name contains lanthanum or the element has positive power. L2's S-LAH51 glass, for example, is not a crown in dispersion behavior.

## Focus Mechanism

The patent does not publish a focus-distance table, variable air spaces, floating groups, or any moving internal focus component. The production specification gives a 0.2 m minimum focus distance, but it does not identify floating correction for the 16 mm fisheye. In the same Olympus literature, adjacent lenses that do use floating correction are explicitly labeled "Floating Element Design," while the 16 mm fisheye is not.[^olympus-brochure]

The defensible conclusion is that the lens uses **unit focusing by whole-block helicoid motion**: the optical block moves as a unit relative to the film plane, and no individual focusing elements can be identified from the patent. Secondary OM-system tables derived from Olympus sales files describe this class of focusing as a straight helicoid, but the patent itself supplies no focusing-mechanism drawing or close-focus prescription.[^esif] The focusing elements are therefore not L1, L2, or a rear floating group; they are the entire optical assembly moving together.

This is also mechanically plausible for a 16 mm f/3.5 fisheye with a 0.2 m minimum focus. The extension required for unit focusing is modest at such a short focal length (~1.4 mm computed from $f^2 / (d - f) = 256 / 184$), and the system does not need the close-range aberration correction burden seen in some rectilinear retrofocus wide-angles.

## Aspherical Surfaces

There are no aspherical surfaces in Example 1.

The patent gives only spherical radii for r1 through r19 and plane surfaces for the filter. It does not provide an aspheric sag equation, conic constants, or polynomial coefficients, and the claims do not recite aspherical surfaces. The production literature located for this review also does not claim aspherical construction. The design is **all-spherical**.

The absence of aspheres is not a weakness in context. This is an early-1970s 35 mm SLR fisheye. The design solves its problem by distributing power across many spherical surfaces, using three cemented doublets, placing a stop behind L5, and using deliberate glass dispersion contrasts. The L4, L5, and L7 cemented surfaces are the functional substitutes for what a later compact fisheye might accomplish with molded or polished aspheres.

## Conditional Expressions

| Patent condition | Example 1 value | Result | Optical meaning |
|---|---:|---|---|
| $0.4f < \lvert f_{123}\rvert < f$, $f_{123} < 0$ | $\lvert f_{123}\rvert = 0.6696f$ | Satisfies | The first three elements remain a compact negative front converter without becoming so strong that off-axis aberrations dominate. |
| $3f < f_2 < 6f$ | $f_2 = 3.6940f$ | Satisfies | L2 is weakly positive; it corrects intermediate-field coma and lateral color without destroying the front negative power. |
| $0.4f < r_8 < f$ | $r_8 = 0.6771f$ | Satisfies | The L4 cemented interface has enough curvature to act on chromatic magnification. |
| $20 < \nu_4 - \nu_5 < 30$ | $55.6 - 30.1 = 25.5$ | Satisfies | The L4 cemented pair has the dispersion split required by the patent's lateral-color strategy. |
| $10f < r_9$ | $r_9 = 46.7176f$ | Satisfies | The rear face of L4 is weak enough not to drive astigmatic separation. |
| $0.5f < r_{13} < f$ | $r_{13} = 0.6517f$ | Satisfies | The L5 cemented interface is in the intended spherical/chromatic correction range. |

The prescription is not merely within the broad claims; it sits very close to the values named in the narrower claim language. In particular, $\lvert f_{123}\rvert \approx 0.670f$, $f_2 \approx 3.694f$, and $r_{13} = 0.6517f$ are tight design choices rather than loose tolerances.

## Verification Summary

The prescription was re-entered from the patent table and verified with an independent paraxial $y$-$nu$ ray trace. The built-in filter was modeled as a plane-parallel normal crown plate because the patent table includes the filter thickness but does not print its refractive index. This is not an arbitrary embellishment: with the plate treated as air, the prescription does not reproduce the stated focal length.

| Quantity | Patent value | Independent calculation | 16× production-scale equivalent |
|---|---:|---:|---:|
| Effective focal length | $f = 1.0000$ | $0.999970$ | 16.000 mm |
| Back focal distance from r19 | $f_B = 2.2916$ | $2.291598$ | 36.67 mm |
| L2 focal length | $f_2 = 3.694$ | $3.693955$ | 59.10 mm |
| L1–L3 combined focal length | $f_{123} = -0.670$ | $-0.669556$ | −10.71 mm |
| First surface to last glass surface | — | 2.469000 | 39.50 mm |
| First surface to image plane (total track) | — | 4.760598 | 76.17 mm |
| Petzval sum (surface formula $\sum \Phi / n n'$) | — | 0.02425307 | 0.00151582 mm⁻¹ |

The Petzval value above is the surface-by-surface sum. No element-level thin-lens approximation was used.

### Cemented Doublet Focal Lengths (ABCD thick-lens, standalone in air)

| Component | Focal length (mm) |
|---|---:|
| L4 (L4a + L4b) | 43.91 |
| L5 (L5a + L5b) | 94.42 |
| L7 (L7a + L7b) | 39.24 |

### Patent Transcription Notes

The most important transcription-sensitive values are r8 = 0.6771, r9 = 46.7176, d14 = 0.2116, and r19 = −1.1190. OCR output from the scanned U.S. patent is poor enough that these values should be taken from the page image, not from the raw text layer.

The critical erratum is d2: the main Table 1 prints 0.457, but the claims text (columns 5–6) gives 0.4157. The claims value reproduces the patent's stated EFL; the table value does not. d2 = 0.4157 is used throughout this analysis and in the data file.

## Sources and Notes

[^patent]: U.S. Patent 3,850,509, "Fisheye lens system," Jihei Nakagawa, Olympus Optical Co., Ltd., priority 1971-12-07, filed 1972-11-30, granted 1974-11-26. Google Patents: https://patents.google.com/patent/US3850509A/

[^olympus-brochure]: Olympus Zuiko interchangeable-lens brochure scan, "Olympus Zuiko 16mm f/3.5–f/22," listing 11 elements / 8 groups, 180° angle of view, minimum focus 0.2 m, built-in filters, and catalog number 103-002. The same page notes "Floating Element Design" for some adjacent lenses but not for the 16 mm fisheye.

[^mir]: MIR, "Zuiko Fisheye 16mm f/3.5 Fisheye Lens." Third-party compilation of Olympus OM lens data, used as a secondary cross-check for construction, filter set, dimensions, and weight. URL: https://www.mir.com.my/rb/photography/hardwares/classics/olympusom1n2/shared/zuiko/htmls/fish16mm.htm

[^esif]: The Unofficial Olympus OM Sales Information File, Lens Group pages. Data derived from the Olympus Sales Information File (October 1979) and The OM System Lens Handbook (October 1985). URL: https://esif.world-traveller.org/om-sif/lensgroup.htm

[^maitani]: Olympus Global, "The Olympus OM-1 – the XA Series," Maitani special lecture and translated OM-system interview material. These sources provide system-level context for compactness and OM-system development, not a lens-specific account of the 16 mm fisheye prescription.

Glass-catalog identifications checked against OHARA catalog pages for S-BAL35, S-LAH51, S-LAL14, S-TIM35, S-TIH11, S-TIM5, and S-TIH6, plus the historical OHARA catalog entry for S-APL1 / APL1. The patent does not name the glass supplier; all glass names in this document are catalog-equivalent identifications by $n_d$ and $\nu_d$.
