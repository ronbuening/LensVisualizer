# Laowa 12mm f/2.8 Zero-D — Patent Example 2 Analysis

## Patent Reference and Design Identification

**Patent:** CN205720849U
**Inventor:** Zhang Xiaohua
**Assignee:** Anhui Changgeng Optical Technology Co., Ltd.
**Filed:** April 12, 2016
**Published:** November 23, 2016
**Granted:** November 23, 2016
**Title:** 一种大光圈广角微距镜头 / Large-aperture wide-angle macro lens
**Embodiment analyzed:** Example 2 / 第二实施例

The relevant filing is **CN205720849U**, *一种大光圈广角微距镜头* / “large-aperture wide-angle macro lens,” assigned to **Anhui Changgeng Optical Technology Co., Ltd.** and naming **Zhang Xiaohua** as inventor. The Chinese utility-model application was filed on 2016-04-12 and published/granted on 2016-11-23. The same optical disclosure is also present in **WO2017177665A1**, *一种超广角大光圈镜头*, which is text-searchable and was used as a cross-check against the image-only CN scan.

This analysis uses **Example 2 / 第二实施例**. In the attached CN document, Example 2 is the design drawn in Figure 3, with its aberration plots in Figure 4. The numerical example gives **f = 12.5 mm**, **Fno = 2.87**, and **half-field angle ω = 60.1°**. Independent reduced-angle paraxial tracing of the transcribed prescription gives **EFL = 12.49993 mm** and **back focal distance = 38.83061 mm**, matching the patent’s stated focal length and the infinity **LB = 38.8325 mm** spacing within transcription precision.

The production match is strong but should be stated as an identification by convergent evidence, not because the patent itself prints the commercial lens name.

1. The production Laowa 12mm f/2.8 Zero-D is a full-frame 12 mm f/2.8 lens with a 121.96° angle of view, 16 elements in 10 groups, two aspherical elements, three ED / extra-low-dispersion elements, 0.18 m minimum focus, and 1:5 maximum magnification.
2. Patent Example 2 is a full-frame ultra-wide design. Its f = 12.5 mm and ω = 60.1° imply an image height of **21.738 mm**, essentially the half-diagonal of the 36 × 24 mm format.
3. The patent prescription contains **16 glass elements** and **10 air-spaced groups**, matching the production element/group count.
4. The patent lists four aspherical surfaces, but they occur in pairs on only two physical glass elements: surfaces **3/4** on L2 and surfaces **26/27** on L16. That is consistent with a production description of two aspherical elements.
5. The patent contains exactly three low-dispersion elements at **nd = 1.49700, νd = 81.61**: L3, L13, and L15. These correspond to the three ED-class elements in the production specification.
6. The patent describes a fixed first group and moving second and third groups. That agrees with Laowa’s public description of coordinated focusing groups used to maintain close-focus correction.

The patent embodiment is therefore best treated as the implemented optical type of the original Laowa 12mm f/2.8 Zero-D, with the normal caveat that the patent example is normalized at 12.5 mm while the production lens is marketed as 12 mm.

## Optical Architecture

The lens is a **retrofocus ultra-wide-angle design**. Its first group is negative and fixed; its second group is negative and moves for focus; its third group is positive and also moves for focus. The patent’s group structure is therefore **negative / negative / positive**, with the aperture stop between G2 and G3.

| Optical unit | Patent surfaces | Elements | Recalculated paraxial focal length |
|---|---:|---:|---:|
| G1 | 1–4 | L1–L2 | -26.819 mm |
| G2 | 5–12 | L3–L7 | -57.727 mm |
| G3 | 14–27 | L8–L16 | +28.838 mm |
| G1+G2 | 1–12 | L1–L7 | -17.890 mm |
| Complete lens | 1–27 | L1–L16 | +12.49993 mm |

The infinity back focal distance ratio is **BFD/EFL = 3.1065**. This is not a telephoto construction. It is a strong retrofocus design: the image plane lies far behind the last optical surface relative to the 12.5 mm focal length, allowing SLR-compatible rear clearance.

The total axial distance from the first surface to the image plane in the patent table is **121.2727 mm**. That number is not a barrel length. It includes the long retrofocus back space and the optical prescription’s axial air gaps.

The aperture stop is listed after surface 12. In the data file it is modeled as **STO**, with a **2.6149 mm** gap to surface 14. From the patent focal length and f-number, the entrance-pupil semi-diameter is **2.17769 mm**; the corresponding physical stop semi-diameter in the paraxial model is **6.58773 mm**. This large stop semi-diameter relative to entrance-pupil size is another consequence of the strong negative front section.

The patent’s conditional expressions are reproduced by the transcribed prescription when the G2–G3 separation **D23** is interpreted as the complete spacing from the last surface of G2 to the first surface of G3, including the stop-to-G3 gap. The recalculated values are:

| Condition | Recalculated Example 2 value | Patent summary value | Interpretation |
|---|---:|---:|---|
| (1) $(|F_{12}|+S)/LB$ | 1.66093 | 1.661 | Keeps combined front-negative power and stop position within the required retrofocus range. |
| (2) $(|F_{12}|+S)/(\tan\omega \times LB)$ | 0.95507 | 0.955 | Normalizes the same compactness condition to field angle. |
| (3) $(D_{23}+|F_{12}|)/(\tan\omega \times LB)$ | 0.37990 | 0.380 | Constrains the G2–G3 separation while preserving the ultra-wide field. |
| (4) $|F_1|/|F_{12}|$ | 1.49909 | 1.499 | Balances the first fixed negative group against the combined G1+G2 power. |
| (5) $G2R/SG10$ | 2.18667 | 2.187 | Measures the strength of the G1 rear asphere at the patent’s SG10 reference. |
| (6) $G2R/SG5$ | 7.46626 | 7.466 | Measures the same surface at the SG5 reference. |

The surface-by-surface Petzval sum, using $\sum \Phi/(n n')$, is **+0.00983476 mm^-1**, corresponding to a Petzval radius of about **101.68 mm**. For a 12.5 mm retrofocus lens this is relatively well moderated. The result comes from distributing field and chromatic correction across several high-index flint / ED-crown pairings in the rear group rather than relying on a single strong field flattener.

## Element-by-Element Analysis

### L1 — Front negative meniscus

**nd = 1.74916, νd = 54.67. Glass: 749/547 high-index crown class, unmatched in checked public catalogs. f = -77.64 mm.**

L1 is the first element of the fixed front group. It begins the retrofocus conversion by receiving a very wide off-axis bundle and beginning the chief-ray bending needed for the downstream groups to work with a long back focus.

Its standalone power is moderate; the front group becomes strongly negative only when L1 works with the double-aspheric L2 behind it. The glass has high index and only moderate dispersion, which is appropriate for a first element that must bend large field angles without creating an excessive chromatic burden.

### L2 — Double-aspheric negative meniscus

**nd = 1.58313, νd = 59.46. Glass: BACD12 / S-BAL42-class barium crown equivalent. f = -43.85 mm.**

L2 is the principal correction element in G1. Both of its surfaces are aspherical. Surface 3 is the object-side surface and surface 4 is the image-side surface. Surface 4 is the surface explicitly used in the patent’s SG5 and SG10 conditions, so it is the patent’s main quantified front-group asphere.

Optically, L2 lets the front negative group be strong enough for a roughly 120° diagonal field while keeping distortion and off-axis aberrations within the range that the rear group can correct. A purely spherical front negative group with comparable coverage would generally require more severe curvature, more elements, or more residual distortion.

The glass is a moderate-index barium-crown-class material. That choice is consistent with a molded or precision-formed aspheric element: enough refractive index for useful correction, but not a highly dispersive front flint.

### L3 — ED negative meniscus at the front of G2

**nd = 1.49700, νd = 81.61. Glass: 497/816 ED fluorophosphate / fluorocrown class, equivalent to FCD1 / H-FK61 / S-FPL51-class glass. f = -29.13 mm.**

L3 starts the second group. It is a negative low-dispersion element, which is significant because G2 still sees a broad off-axis bundle before the aperture stop. Its role is not only focusing. It also reduces chromatic error introduced by the front-negative section before the beam enters the cemented high-index correction blocks.

This is the first of the three ED-class elements in the design. The patent gives nd and νd but does not name a vendor or melt, so a class identification is more defensible than a single named glass.

### L4–L5 — First cemented correction doublet in G2

**L4: nd = 1.62588, νd = 35.74. Glass: HOYA E-F1 class. f = +22.07 mm.**  
**L5: nd = 1.83481, νd = 44.72. Glass: 835/447 high-index lanthanum-type class, unmatched in checked public catalogs. f = -13.76 mm.**  
**Cemented doublet focal length in air = -36.91 mm.**

L4 and L5 form the first cemented doublet in moving G2. L4 is a positive component; L5 is a high-index negative component. The pair has net negative power, but the cemented interface allows the group to correct spherical aberration and axial color more cleanly than an equivalent air-spaced pair.

This doublet is part of the compactness strategy. G2 moves during focusing, so the design benefits from concentrating several correction functions into cemented blocks rather than adding more air-spaced lenses.

### L6–L7 — Second cemented correction doublet in G2

**L6: nd = 1.76182, νd = 26.61. Glass: HOYA FD140 dense-flint class. f = +13.56 mm.**  
**L7: nd = 1.92286, νd = 20.88. Glass: SCHOTT N-SF66 / HOYA E-FDS1-class dense flint. f = -26.22 mm.**  
**Cemented doublet focal length in air = +28.35 mm.**

L6 and L7 form the second cemented block in G2. In standalone terms L6 is strong positive and L7 is negative dense flint; cemented together they act as a positive subunit within an overall negative moving group.

L7 is one of the most dispersive elements in the prescription. Its **1.92286 / 20.88** glass class provides strong chromatic leverage before the stop. The doublet therefore contributes to both focus-group power distribution and color correction.

### Stop — Aperture position between G2 and G3

The aperture stop is located between the negative moving G2 and the positive moving G3. This placement keeps the front diameter from becoming even larger, but it also makes distortion, lateral color, and pupil behavior sensitive to focus-group movement. That sensitivity explains why the patent uses a floating-focus arrangement rather than a simple unit-focus construction.

### L8–L10 — Post-stop cemented triplet

**L8: nd = 1.61293, νd = 36.96. Glass: HOYA E-F3 class. f = +26.27 mm.**  
**L9: nd = 1.91082, νd = 35.25. Glass: HOYA TAFD35 / TAFD35L class. f = -10.53 mm.**  
**L10: nd = 1.62004, νd = 36.30. Glass: HOYA E-F2 class. f = +15.22 mm.**  
**Cemented triplet focal length in air = +72.37 mm.**

This cemented triplet begins the positive rear group. It sits immediately after the stop, where it has strong influence over spherical aberration, coma balance, axial color, and pupil behavior.

The triplet is not merely a positive relay. Its positive-negative-positive structure spreads correction across two cemented interfaces and three glass types. L9’s very high refractive index allows strong negative correction without forcing the surrounding positive elements to carry all of the rear-group power.

### L11–L12 — Rear-group correction doublet

**L11: nd = 1.78472, νd = 25.72. Glass: HOYA FD110 dense-flint class. f = +15.97 mm.**  
**L12: nd = 1.90366, νd = 29.31. Glass: 904/293 dense-flint class, unmatched in checked public catalogs. f = -13.64 mm.**  
**Cemented doublet focal length in air = -74.77 mm.**

This doublet provides weak net negative correction inside the positive rear group. Its role is to restrain the rear relay from becoming a simple high-Petzval positive group.

The positive L11 / negative L12 pairing contributes to field flattening and lateral color control after the post-stop triplet. L12 should remain labeled as an unmatched dense-flint class unless a catalog entry is found with a close nd/νd match.

### L13 — Thick ED positive lens

**nd = 1.49700, νd = 81.61. Glass: 497/816 ED fluorophosphate / fluorocrown class, equivalent to FCD1 / H-FK61 / S-FPL51-class glass. f = +26.37 mm.**

L13 is the second ED-class element. It contributes positive power in the rear group while keeping dispersion low. Its position is effective because it acts after the stop and after two cemented correction blocks, where it can influence image-side convergence and lateral color.

The element’s thickness and curvature also distribute rear-group power. Without this low-dispersion positive element, the design would need more aggressive high-index correction later in the group.

### L14–L15 — Rear ED achromatizing doublet

**L14: nd = 1.91082, νd = 35.25. Glass: HOYA TAFD35 / TAFD35L class. f = -28.47 mm.**  
**L15: nd = 1.49700, νd = 81.61. Glass: 497/816 ED fluorophosphate / fluorocrown class, equivalent to FCD1 / H-FK61 / S-FPL51-class glass. f = +20.98 mm.**  
**Cemented doublet focal length in air = +57.11 mm.**

L14–L15 is the clearest rear achromatizing pair. L14 supplies high-index negative correction; L15 supplies low-dispersion positive power. The doublet has net positive power, but its chromatic function is more important than the sign of the net thin-lens power.

L15 is the third ED-class element. Placing this ED positive component near the rear is useful for lateral color and field-edge correction because ray heights and chief-ray angles remain substantial in a rectilinear ultra-wide retrofocus lens.

### L16 — Rear double-aspheric field corrector

**nd = 1.80781, νd = 40.97. Glass: 808/410 high-index class, unmatched in checked public catalogs. f = -63.30 mm.**

L16 is the second physical aspherical element. Both surfaces are aspherical. It is positioned close to the image plane, so it acts mainly as a rear field corrector rather than as the primary front distortion-control element.

The rear double asphere works on a converged beam. That placement is well suited for correcting residual field curvature, astigmatism, distortion, and pupil-dependent aberration after the rear achromatizing groups.

## Glass Identification and Selection

The patent does **not** name glass manufacturers. The following identifications are therefore nd/νd-based catalog or class identifications, not patent-printed melt names. Where a catalog match is not sufficiently supported, the glass is deliberately left as an unmatched code class.

| Element(s) | Patent nd / νd | Six-digit code | Best-supported identification | Role |
|---|---:|---:|---|---|
| L1 | 1.74916 / 54.67 | 749/547 | Unmatched high-index crown / lanthanum-crown class | Front negative power with moderate dispersion. |
| L2 | 1.58313 / 59.46 | 583/595 | BACD12 / S-BAL42 barium-crown class | Large double-aspheric front correction element. |
| L3, L13, L15 | 1.49700 / 81.61 | 497/816 | FCD1 / H-FK61 / S-FPL51-class ED fluorophosphate / fluorocrown | Three ED-class elements. |
| L4 | 1.62588 / 35.74 | 626/357 | HOYA E-F1 class | Positive member of first G2 doublet. |
| L5 | 1.83481 / 44.72 | 835/447 | Unmatched high-index lanthanum-type class | Negative partner in first G2 doublet. |
| L6 | 1.76182 / 26.61 | 762/266 | HOYA FD140 dense-flint class | Positive dense-flint member of second G2 doublet. |
| L7 | 1.92286 / 20.88 | 923/209 | SCHOTT N-SF66 / HOYA E-FDS1-class dense flint | Strong pre-stop chromatic leverage. |
| L8 | 1.61293 / 36.96 | 613/370 | HOYA E-F3 class | First positive component of post-stop triplet. |
| L9, L14 | 1.91082 / 35.25 | 911/353 | HOYA TAFD35 / TAFD35L class | High-index low-dispersion negative components. |
| L10 | 1.62004 / 36.30 | 620/363 | HOYA E-F2 class | Positive member completing the post-stop triplet. |
| L11 | 1.78472 / 25.72 | 785/257 | HOYA FD110 dense-flint class | Positive dense-flint member of rear doublet. |
| L12 | 1.90366 / 29.31 | 904/293 | Unmatched dense-flint class | Negative partner in rear correction doublet. |
| L16 | 1.80781 / 40.97 | 808/410 | Unmatched high-index class | Rear double-aspheric field corrector. |

The chromatic strategy is distributed. The three ED-class elements are not clustered: one is in moving G2, one is a thick positive element in the middle of G3, and one is cemented into a rear achromatizing doublet. This distribution is appropriate for a rectilinear ultra-wide lens, where axial color, lateral color, field curvature, and focus-distance-dependent color must be controlled simultaneously.

The ED-class elements are paired or balanced against high-index flints and lanthanum dense-flint classes. The design therefore does not rely on ED glass in isolation; it uses ED components as part of a larger power and dispersion balancing scheme.

## Focus Mechanism

The patent describes a **two-moving-group floating focus system**. G1 remains fixed. G2 and G3 move as the object distance changes. Example 2 provides two spacing states: infinity and a finite state labeled at approximately **β = 0.02×**.

| Variable spacing | Infinity | Finite state | Change | Meaning |
|---|---:|---:|---:|---|
| D(4) | 10.1074 mm | 10.1118 mm | +0.0044 mm | Gap between fixed G1 and moving G2. |
| D(12) | 5.1500 mm | 4.6207 mm | -0.5293 mm | Gap between G2 and the stop / G3 side. |
| LB | 38.8325 mm | 39.3529 mm | +0.5204 mm | Back distance from final surface to image plane. |

In coordinates fixed to surface 1, G2 shifts imageward by about **0.0044 mm**, while the stop/G3 assembly shifts objectward by about **0.5249 mm**. The image plane relative to the first surface changes by only about **-0.0045 mm**, effectively constant at the precision of the patent table.

The motion is therefore not unit focus. It is a floating scheme in which G2 and G3 counterbalance one another to preserve aberration correction as focus changes. The patent does not identify motor hardware, cam shapes, or barrel mechanics, so only the moving optical groups can be identified from the prescription.

The production lens is specified at **0.18 m minimum focus** and **1:5 / 0.2×** maximum magnification. The patent’s finite-state table is only a published verification state at **0.02×**. The data file therefore uses the patent variable gaps as published and records the production minimum-focus distance separately.

## Aspherical Surfaces

Example 2 has four aspherical surfaces on two physical elements.

| Surface in patent | Data-file label | Element | Function |
|---|---|---|---|
| 3 | 3A | L2 | Front-group distortion and coma correction. |
| 4 | 4A | L2 | Patent’s explicitly quantified G1 image-side asphere; principal front distortion-control surface. |
| 26 | 26A | L16 | Rear-field correction in the converging beam. |
| 27 | 27A | L16 | Final residual field, astigmatism, and distortion correction near the image plane. |

The aspheric equation uses the standard conic constant **K** directly:

$$
z = \frac{(1/r)y^2}{1+\sqrt{1-(1+K)(y/r)^2}} + A_4y^4 + A_6y^6 + A_8y^8 + A_{10}y^{10} + A_{12}y^{12}.
$$

| Surface | K | A4 | A6 | A8 | A10 | A12 |
|---|---:|---:|---:|---:|---:|---:|
| 3 | 0.0080 | 5.00208e-005 | -1.48696e-007 | 2.85395e-010 | -3.26206e-013 | 5.77197e-017 |
| 4 | -0.5807 | 2.41854e-005 | 1.14397e-008 | -1.61462e-009 | 4.64271e-012 | -4.16529e-015 |
| 26 | 0.4154 | 1.60608e-004 | -3.90127e-007 | 1.97932e-009 | -1.00952e-011 | 5.34069e-014 |
| 27 | -11.4671 | 3.56937e-005 | 3.58224e-007 | -4.31857e-009 | 2.03624e-011 | -3.90187e-014 |

Surface 4 verifies the patent’s aspheric convention. Direct sag evaluation gives **G2R/SG10 = 2.18667** and **G2R/SG5 = 7.46626**, matching the Example 2 condition table.

A source conflict must be handled explicitly. The attached CN utility-model scan appears to show the row for surface 26 with **K = 0.4151** and **A4 = 1.60608e-001**. The WO family text gives **K = 0.4154** and **A4 = 1.60608e-004**. The latter value is physically usable and is consistent with the conic limit and rear-element semi-diameter; the former would produce implausible rear-element departure at normal clear apertures. The data file therefore uses **K = 0.4154** and **A4 = 1.60608e-004** for surface 26.

## Data-File Implementation Notes

The prescription is stored at the **patent scale**, not uniformly scaled down to the marketed 12.0 mm focal length. The data file records `focalLengthMarketing: 12` and `focalLengthDesign: 12.49993` to keep this distinction explicit.

The patent does not publish semi-diameters. The data file therefore uses estimated `sd` values. These were constrained by the computed stop semi-diameter, edge thickness, element front/rear diameter ratio, conic discriminant limits, and cross-gap sag intrusion. They should be treated as renderer-safe geometric estimates, not as recovered production clear apertures.

The focus variables in the data file reproduce the patent’s infinity and β = 0.02× finite state. They do not extrapolate to the production 0.2× close-focus endpoint, because the patent does not publish that endpoint.

## Verification Summary

The prescription was rechecked by an independent reduced-angle paraxial trace and direct aspheric sag evaluation.

| Quantity | Independent result | Patent value / implication | Status |
|---|---:|---:|---|
| Effective focal length | 12.49993 mm | 12.5 mm | Match. |
| Infinity back focal distance | 38.83061 mm | LB = 38.8325 mm | Match within 0.002 mm. |
| Total optical distance to image | 121.2727 mm | Sum of patent spacings | Match. |
| Half-field image height from f and ω | 21.738 mm | Full-frame diagonal half-height ≈ 21.633 mm | Consistent with full-frame coverage. |
| BFD/EFL | 3.1065 | Retrofocus design | Confirms retrofocus, not telephoto. |
| G1 focal length | -26.819 mm | Condition-table F1 basis | Reproduces condition (4). |
| G1+G2 focal length | -17.890 mm | Condition-table F12 basis | Reproduces conditions (1)–(3). |
| Petzval sum | +0.00983476 mm^-1 | Surface-by-surface calculation | Used in architecture discussion. |
| Surface 4 G2R/SG10 | 2.18667 | 2.187 | Match. |
| Surface 4 G2R/SG5 | 7.46626 | 7.466 | Match. |

The corrected interpretation is internally consistent: Example 2 is a 16-element, 10-group retrofocus ultra-wide lens with two physical double-aspheric glass elements, three ED-class elements, a fixed front group, and two moving floating focus groups.

## Sources and References

1. **CN205720849U**, *一种大光圈广角微距镜头*, Anhui Changgeng Optical Technology Co., Ltd., filed 2016-04-12 and published/granted 2016-11-23. Key pages: bibliographic page; Example 2 prescription and variable spacing table; aspheric coefficient table; Figure 3 and Figure 4.
2. **WO2017177665A1**, *一种超广角大光圈镜头*, same family disclosure. Used as a text-searchable cross-check for Example 2 numerical data, conditional expressions, and the surface 26 aspheric coefficient row.
3. **Laowa / Laowa product documentation** for the Laowa 12mm f/2.8 Zero-D production specifications: 12 mm, f/2.8, 121.96° angle of view, full-frame coverage, 16 elements in 10 groups, two aspherical elements, three ED elements, 0.18 m minimum focus, and 1:5 maximum magnification.
4. **HOYA Optical Glass technical documentation**, used for six-digit glass-code interpretation and catalog checks for FCD1, E-F1, FD140, E-FDS1, E-F3, E-F2, FD110, and TAFD35 / TAFD35L-class materials.
5. **OHARA S-FPL51 and S-BAL42 data sheets**, used for low-dispersion and barium-crown cross-vendor class checks.
6. **CDGM H-FK61 data sheet**, used for the 497/816 ED-class equivalence check.
7. **SCHOTT N-SF66 data sheet**, used for the 923/209 dense-flint equivalence check.
