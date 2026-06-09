# HD PENTAX-D FA★ 50mm F1.4 SDM AW — Optical Analysis

## Patent Reference and Design Identification

**Patent:** US 2019/0250367 A1
**Application Number:** 16/240,856
**Priority:** JP 2018-024300, filed 14 February 2018
**Filed:** 7 January 2019
**Published:** 15 August 2019
**Inventor:** Minoru Murayama (Tokyo, JP)
**Applicant:** Minoru Murayama (Tokyo, JP)
**Title:** Imaging Lens System and Imaging Apparatus Incorporating the Same
**Embodiment analyzed:** Example 1 (FIG. 1, FIG. 31)

The patent discloses five numerical examples of a fast standard lens having back focal length sufficient for a single-lens reflex camera, an F-value of approximately 1.4, and an angle of view of approximately 45° (¶0003, ¶0174). Example 1 is the embodiment transcribed in the paired prescription file.

The identification with the HD PENTAX-D FA★ 50mm F1.4 SDM AW is strong but not unique to the last manufacturing tolerance. Example 1, Example 2, and Example 3 all share the same broad architecture. Example 1 is used here because it is the first-disclosed embodiment and matches the published production specification closely.

1. **Element and group count.** Example 1 contains fifteen glass elements in nine air-separated groups when the sensor cover plate is excluded. PENTAX publishes the production lens as 15 elements / 9 groups.
2. **Special optical elements.** Example 1 has three low-dispersion or anomalous-dispersion positive elements of interest: L22 in G1b and the two fluorophosphate ED-class elements L32 and L42 in G2. It also has a single final glass element with both faces aspherical, surfaces 24 and 25. PENTAX product material states that the production lens uses three super-low-dispersion glass elements and one aspherical element.
3. **Architecture.** PENTAX describes a modified-Gauss rear focus-lens group preceded by a front optical group of aberration-correction elements. Example 1 has that same division: a weakly positive front group G1 with a negative G1a front-converter sub-group, followed by a stronger modified-Gauss rear group G2 around the stop (¶0061-0065, ¶0088, ¶0095).
4. **Focal length and aperture.** Example 1 gives f = 49.57 mm and Fno = 1.45 at infinity. The production specification rounds this to 50 mm and F1.4.
5. **Image circle and field.** Example 1 lists image height 21.64 mm and half angle 23.5°, corresponding to a 43.28 mm full-frame diagonal and approximately 47° diagonal field. The production specification states 47° on 35 mm full frame.
6. **Focus mechanism.** Example 1 holds G1 stationary and moves the whole G2 group toward the object at short distance (¶0137). PENTAX states that the SDM motor shifts a heavy rear focus-lens group during focusing.
7. **Close focus.** Example 1 gives close-range magnification β = -0.184. PENTAX publishes 0.4 m minimum focusing distance and 0.18× maximum reproduction ratio.

A caveat is necessary. The production lens cannot be proven from public data to use Example 1 rather than one of its near siblings. Example 4 is excluded by its reduced element count and different floating focus structure; Example 5 is excluded because G1, G2a, and G2b move independently at close range (¶0169). Examples 1-3 remain close variants of the same design family. This file therefore treats Example 1 as a representative patent embodiment, not as a claim of exact production prescription identity.

## Optical Architecture

The prescription is a two-group, positive-positive standard lens. The first group **G1** is weakly positive, with computed paraxial focal length f1 = +203.8 mm. The second group **G2** is the stronger collector, with f2 = +70.5 mm. The stop lies inside G2 between G2a and G2b (¶0061, ¶0064).

G1 is divided into **G1a** and **G1b** (¶0062). G1a is a biconvex-plus-biconcave cemented doublet, L11+L12, with net negative power f1a = -76.6 mm. The patent explicitly uses this negative G1a power to give the whole lens a retrofocus character and preserve SLR back focus without forcing the rear group to accept an excessively divergent bundle (¶0088, ¶0104). The image-side concave surface of G1a, R = +40.248 mm, is the R1aN surface in conditional expression (3); its curvature is bounded to control sagittal coma and astigmatism (¶0085, ¶0103).

G1b then restores positive power. It consists of a positive cemented doublet L13+L14, a net-negative cemented component L21+L22, and a rear positive singlet L23 (¶0090-0091). Its job is to hand G2 a converging, reasonably well-corrected beam rather than leaving all convergence to the rear group.

G2 is a modified double-Gauss group around the stop. G2a consists of a positive singlet L31 and a positive-plus-negative cemented lens L32+L33 whose rear face is concave to the image side (¶0093). G2b consists of a negative-plus-positive cemented lens L41+L42, a positive-meniscus-plus-negative cemented lens L43+L44, and the final double-sided aspherical positive element L51 (¶0094-0095, ¶0116-0117). The cemented pairs close to the stop are approximately symmetric, so distortion and coma are counterbalanced; the final asphere corrects residual spherical aberration, coma, and astigmatism where the off-axis principal ray height is high.

The group power sequence is therefore weak positive G1 followed by stronger positive G2, with local negative-positive correction inside G1 and near-symmetric modified-Gauss correction in G2.

## Element-by-Element Analysis

### G1a — Front Cemented Doublet (L11 + L12)

**L11 — Weak Biconvex Positive.**
nd = 1.60342, νd = 38.0. Glass: F5-class dense flint. f = +308.0 mm.

L11 is the weak positive element at the object end of G1a. Its radii, +292.188 mm and -508.040 mm, give very little standalone positive power. The patent identifies the object-side positive lens in G1a as part of the chromatic-correction strategy and applies conditional expressions (8) and (9) to its Abbe number and partial dispersion ratio (¶0079, ¶0113-0115). The front placement matters because off-axis ray height is high in this part of the system.

**L12 — Biconcave Negative.**
nd = 1.61340, νd = 44.3. Glass: short-flint / KZFS-class glass. f = -60.7 mm.

L12 is the strong negative member of the G1a cemented doublet. The rear surface, R = +40.248 mm, supplies the negative power that makes G1a net-negative. The patent describes G1a as a negative component made by joining a biconvex lens and a biconcave lens, matching surfaces 1-3 in Example 1 (¶0063). Its negative power creates the front-converter action needed for back focus, but the curvature is moderated by conditional expression (3) to avoid excessive sagittal coma and astigmatism.

### G1b — Positive Cemented Doublet (L13 + L14)

**L13 — High-Index Biconvex Positive.**
nd = 1.91082, νd = 35.2. Glass: high-index tantalum/lanthanum dense-flint class. f = +43.0 mm.

L13 is the strongest single positive element before the rear group. Its high refractive index is the n12P term of conditional expression (5), which requires n12P > 1.75 and preferably > 1.85 (¶0106-0107). Using a high-index positive glass allows the object-side surface to remain less tightly curved, reducing coma and astigmatism from this off-stop location.

**L14 — Negative Cemented Partner.**
nd = 1.61340, νd = 44.3. Glass: short-flint / KZFS-class glass. f = -62.0 mm.

L14 achromatizes L13. The cemented pair remains net positive, approximately +122 mm in paraxial focal length, so it begins re-converging the beam after the negative G1a component. This arrangement corresponds to the patent's positive cemented lens in G1b (¶0090-0091).

### G1b — Negative Cemented Component (L21 + L22)

**L21 — Biconcave Negative.**
nd = 1.72047, νd = 34.7. Glass: niobium dense-flint class. f = -45.3 mm.

L21 is the negative member of G1b's second cemented component. The patent favors distributing negative power among several lenses in G1 rather than placing all of it at the first negative surface; this keeps off-axis refraction gentler and reduces focus-dependent aberration change (¶0086-0087).

**L22 — Low-Dispersion Biconvex Positive.**
nd = 1.61800, νd = 63.4. Glass: anomalous partial-dispersion phosphate-crown class. f = +105.2 mm.

L22 is a positive low-dispersion partner cemented to L21. The pair is still net negative, approximately -82 mm, but L22 adds a mild secondary-spectrum correction contribution in the front group. Its partial-dispersion behavior is inferred from catalog-class matching rather than directly tabulated in the patent; it is therefore treated as a mild anomalous-dispersion element, not as an ED element.

### G1b — Rear Positive Singlet (L23)

**L23 — Biconvex Positive.**
nd = 1.83481, νd = 42.7. Glass: lanthanum dense crown/flint class. f = +55.8 mm.

L23 is the final element of G1b and the last lens before the moving G2 group. It converges the diverging beam left by G1's negative elements and hands G2 a more compact aperture bundle (¶0091). Its high index supplies useful positive power without excessively steep radii.

### G2a — Positive Singlet (L31)

**L31 — Positive Meniscus, Convex to Object.**
nd = 1.85150, νd = 40.8. Glass: OHARA S-LAH89 class. f = +112.5 mm.

L31 is the first lens of the moving rear group. After the front group has shaped the axial bundle, this positive singlet begins G2a's convergence before the stop. The patent notes that G2a has positive power and preferably includes both positive and negative lenses to control spherical aberration and field curvature (¶0092-0093, ¶0111-0112).

### G2a — Cemented Lens (L32 + L33)

**L32 — ED-Class Biconvex Positive.**
nd = 1.59522, νd = 67.7. Glass: OHARA S-FPM2 / ED fluorophosphate class. f = +53.8 mm.

L32 is the first of the two true ED-class fluorophosphate elements in the rear group. Its high Abbe number raises the positive-lens average ν2aP in G2a to about 54.25, satisfying conditional expression (7). It is cemented to a moderate flint so that G2a can converge the beam while suppressing axial color.

**L33 — Negative, Concave to Image.**
nd = 1.60342, νd = 38.0. Glass: F5-class dense flint. f = -43.3 mm.

L33 is the negative partner to L32. Its image-side surface, R = +40.154 mm, is the concave image-facing surface specifically described for the G2a cemented lens (¶0093). The L32+L33 cemented pair is weakly negative as a standalone cemented component, so it trims chromatic and spherical aberration while the surrounding positive lenses carry the net group power.

### Aperture Stop

The aperture stop is surface 17 in the patent table. It lies in air, after G2a and before G2b, with a 3.791 mm air gap to the next optical surface. A paraxial entrance-pupil calculation from the patent Fno = 1.45 gives a physical stop semi-diameter of approximately 15.32 mm in the data file.

### G2b — Object-Side Cemented Lens (L41 + L42)

**L41 — Negative Meniscus, Concave to Object.**
nd = 1.60342, νd = 38.0. Glass: F5-class dense flint. f = -34.9 mm.

L41 is the negative member of the object-side cemented lens behind the stop. Its role mirrors the negative side of L32+L33 across the stop, contributing to the patent's symmetric coma and distortion cancellation strategy (¶0094-0095, ¶0116).

**L42 — ED-Class Biconvex Positive.**
nd = 1.59522, νd = 67.7. Glass: OHARA S-FPM2 / ED fluorophosphate class. f = +40.8 mm.

L42 is the second ED-class fluorophosphate element. It is the positive lens governed by conditional expressions (10) and (11): νd22 > 55 and θgF22 > -0.00162νd22 + 0.64. The patent's Example 1 value is νd22 = 67.74 and θgF22 = 0.5442, above the normal-line threshold of 0.5303 (¶0116-0117, FIG. 36). This element is the most explicit secondary-spectrum correction element in the disclosure.

### G2b — Image-Side Cemented Lens (L43 + L44)

**L43 — High-Index Positive Meniscus, Convex to Image.**
nd = 1.88300, νd = 40.8. Glass: high-index lanthanum dense-flint class. f = +111.7 mm.

L43 is the positive meniscus in the image-side cemented lens. Its high refractive index satisfies conditional expression (12), n2P > 1.70. The patent explains that the low-index materials useful for secondary-spectrum correction can increase Petzval burden unless balanced by a high-index positive meniscus near this position (¶0117).

**L44 — Biconcave Negative.**
nd = 1.56732, νd = 42.8. Glass: OHARA S-TIL26 class. f = -40.4 mm.

L44 is the negative partner to L43. The cemented pair has net negative power of about -60 mm and shapes the rear-side Gauss correction before the final aspherical collector.

### G2b — Rear Aspherical Singlet (L51)

**L51 — Biconvex Positive, Both Surfaces Aspherical.**
nd = 1.77250, νd = 49.5. Glass: moldable lanthanum crown class. f = +36.9 mm.

L51 is the strongest positive single element in the system and the last glass element before the sensor stack. Both faces are aspherical. The patent places the asphere at the rear because the element has high converging power and the off-axis principal ray height is high there; this position allows simultaneous correction of spherical aberration, coma, and astigmatism (¶0095, ¶0117).

## Glass Identification and Selection

The patent gives nd and νd values but does not name glass manufacturers. Glass labels below are therefore catalog-class identifications unless noted. They were checked against the common Japanese and European optical-glass catalog families by nd/νd proximity and, where relevant, partial-dispersion behavior.

| Element | nd | νd | Glass identification | Role |
|---|---:|---:|---|---|
| L11 | 1.60342 | 38.0 | F5-class dense flint | Front color-control positive |
| L12 | 1.61340 | 44.3 | Short-flint / KZFS-class | G1a negative power |
| L13 | 1.91082 | 35.2 | High-index dense flint class | n12P positive lens |
| L14 | 1.61340 | 44.3 | Short-flint / KZFS-class | Achromatizing negative |
| L21 | 1.72047 | 34.7 | Niobium dense-flint class | Distributed negative power |
| L22 | 1.61800 | 63.4 | Anomalous phosphate-crown class | Mild front-group secondary-spectrum correction |
| L23 | 1.83481 | 42.7 | Lanthanum dense crown/flint class | Rear positive of G1 |
| L31 | 1.85150 | 40.8 | OHARA S-LAH89 class | G2a positive singlet |
| L32 | 1.59522 | 67.7 | OHARA S-FPM2 / ED fluorophosphate class | ED positive before stop |
| L33 | 1.60342 | 38.0 | F5-class dense flint | Cemented negative before stop |
| L41 | 1.60342 | 38.0 | F5-class dense flint | Cemented negative behind stop |
| L42 | 1.59522 | 67.7 | OHARA S-FPM2 / ED fluorophosphate class | ED positive governed by conditions (10)-(11) |
| L43 | 1.88300 | 40.8 | High-index lanthanum dense-flint class | n2P high-index meniscus |
| L44 | 1.56732 | 42.8 | OHARA S-TIL26 class | Image-side negative |
| L51 | 1.77250 | 49.5 | Moldable lanthanum crown class | Rear double-sided asphere |

The chromatic strategy is not apochromatic in the strict sense. The design uses two strong ED-class elements, L32 and L42, plus the milder low-dispersion/APD contribution of L22. The flint partners around the stop keep axial color and secondary spectrum controlled while preserving the modified-Gauss correction. The patent's aberration diagrams show a well-corrected fast standard lens rather than a claim of APO correction.

## Focus Mechanism

Example 1 uses rear-group unit focusing. The first group G1 remains stationary with respect to the image plane, while the complete second group G2 moves toward the object when focusing from infinity to short distance (¶0137). The patent also explains why a fixed first group is favorable: its lenses are larger and heavier than those in the second group (¶0100).

| Spacing | Infinity | Short-distance state | Change |
|---|---:|---:|---:|
| D11, G1 to G2 | 10.407 mm | 1.012 mm | -9.395 mm |
| D25, patent physical gap to cover plate | 37.310 mm | 46.706 mm | +9.396 mm |
| Folded air-equivalent final gap in data file | 39.628974 mm | 49.024974 mm | +9.396 mm |
| Patent total physical lens length | 149.24 mm | 149.24 mm | 0 |
| F-number | 1.45 | 1.74 | — |
| Effective focal length | 49.57 mm | 48.01 mm | -1.56 mm |

Only two variable gaps are required because G2 moves as a rigid unit. The data file omits the patent sensor cover plate, per project convention, and folds the cover plate's optical path into the final air gap: D25 + 2.000/1.51633 + 1.000.

## Aspherical Surfaces

The aspherical surfaces are both faces of the last element L51: patent surface 24, R = +67.722 mm, and patent surface 25, R = -47.005 mm. In the data file these are labeled **24A** and **25A**. The patent uses the standard conic-plus-even-polynomial sag form (¶0132):

$$Z(r)=\frac{r^2/R}{1+\sqrt{1-(1+K)r^2/R^2}}+A_4r^4+A_6r^6+A_8r^8+A_{10}r^{10}+A_{12}r^{12}.$$

Here K is the conventional conic constant. Both aspherical surfaces have K = 0.000, so the base conic is spherical and all aspheric departure comes from the polynomial terms.

| Coefficient | Surface 24 / 24A | Surface 25 / 25A |
|---|---:|---:|
| K | 0.000 | 0.000 |
| A4 | -0.3057E-05 | +0.2344E-05 |
| A6 | -0.2560E-08 | -0.4523E-08 |
| A8 | +0.1404E-10 | +0.1659E-10 |
| A10 | -0.3622E-13 | -0.3687E-13 |
| A12 | 0.0000E+00 | 0.0000E+00 |

The opposite signs of the A4 terms show that the two faces are not redundant; they reshape the marginal and oblique wavefronts in opposite senses across a high-power rear element. The prescription pattern and glass choice are consistent with a molded glass asphere, but the patent does not state the manufacturing process.

## Chromatic Correction Strategy

The front group starts chromatic correction at high off-axis ray height. L11 is constrained by νd11 and θgF11 in conditions (8) and (9), while L22 supplies a mild anomalous-dispersion contribution in the front group. The rear group carries the heavier axial-color burden. L32 and L42 have nd = 1.59522 and νd = 67.7; L42 is explicitly tied to νd22 and θgF22 in conditions (10) and (11). The patent states that satisfying these conditions corrects axial chromatic aberration, particularly the secondary spectrum (¶0116-0117).

The analysis therefore describes the design as a highly corrected achromatic fast standard lens with secondary-spectrum suppression. It should not be labeled APO without stronger evidence than the patent provides.

## Conditional Expressions

The patent's conditional expressions are reproduced with the Example 1 values from FIG. 36 and an independent paraxial check. Focal-ratio quantities were recomputed from the transcribed prescription using a y-nu ray trace. Index and Abbe quantities are taken from the patent table. The θgF quantities are patent-tabulated glass properties.

| # | Expression | Patent Example 1 | Independent check |
|---|---|---:|---:|
| (1) | 0.07 < f2/f1 < 0.4 | 0.35 | 0.346 |
| (2) | 0.45 < f2/f2a < 0.7 | 0.49 | 0.495 |
| (3) | 1.05 < f/R1aN < 1.55 | 1.23 | 1.232 |
| (4) | -0.75 < f/f1a < -0.45 | -0.65 | -0.647 |
| (5) | 1.75 < n12P | 1.91082 | 1.91082 |
| (6) | 1.55 < n2GN < 1.62 | 1.59 | 1.591 |
| (7) | 50 < ν2aP | 54.26 | 54.25 |
| (8) | 30 < νd11 < 50 | 38.03 | 38.0 |
| (9) | θgF11 > -0.002νd11 + 0.656 | 0.5835 > 0.5799 | RHS verified |
| (10) | νd22 > 55 | 67.74 | 67.7 |
| (11) | θgF22 > -0.00162νd22 + 0.64 | 0.5442 > 0.5303 | RHS verified |
| (12) | 1.70 < n2P | 1.883 | 1.883 |

Derived group values used for the focal-ratio checks are f1 = +203.8 mm, f2 = +70.5 mm, f1a = -76.6 mm, and f2a = +142.5 mm. FIG. 36's footnote labels the right-hand side of condition (11) with νd21 in the OCR text; context and the expression definition show that νd22 is intended.

## Verification Summary

A fresh paraxial y-nu trace was run directly from the FIG. 31 prescription, including the patent sensor cover plate for patent comparison and with the cover plate folded into air-equivalent back focus for the data file.

- Infinity EFL: computed 49.567 mm; patent value 49.57 mm.
- Short-distance EFL: computed 48.011 mm; patent value 48.01 mm.
- Patent physical total length: 149.237 mm from surface 1 to image plane, matching the stated 149.24 mm after rounding.
- Folded data-file optical length: 148.556 mm, lower by the physical cover-glass excess path but optically equivalent for paraxial focus.
- Stop semi-diameter: 15.32 mm gives Fno = 1.450 from the traced entrance pupil.
- Petzval sum: +2.126E-03 mm^-1 by the surface-by-surface formula Σ(n' - n)/(n n' R), corresponding to a Petzval radius of about +470 mm.
- Semi-diameter estimates pass the adopted checks: element surface-ratio <= 1.25, edge thickness >= 0.5 mm, the tightest rear aspherical element remains about 0.93 mm at the rim, and cross-gap signed sag intrusion stays below 90% of each air gap.

The trace reproduces the patent focal lengths and focus kinematics, so the radius signs, d-line refractive indices, and variable gaps are consistent.

## Design Heritage and Context

This design is a modern SLR fast-normal lens built from two older ideas: a front negative/positive converter arrangement to obtain back focus, and a modified double-Gauss rear group to obtain a fast, well-corrected standard-lens core. The patent's background explicitly mentions both the modified-double-Gauss standard lens and the front converter used to obtain a long back focus (¶0003). Example 1 combines them by putting a negative G1a doublet ahead of a strong rear Gauss-type focusing group.

The modern additions are the three low-dispersion/APD correction lenses and the double-sided rear asphere. They let the lens hold correction wide open over a full-frame field while still using a rear focusing group rather than moving the entire optical system.

## Sources

- US 2019/0250367 A1, *Imaging Lens System and Imaging Apparatus Incorporating the Same*, M. Murayama. FIG. 1, FIG. 31, FIG. 36, and ¶¶0003, 0060-0117, 0131-0137, 0169, 0172-0174.
- PENTAX official product specification and Star Lens product overview for production hard specifications: 50 mm, F1.4, 15 elements / 9 groups, 47° diagonal field, KAF4 mount, 0.4 m minimum focusing distance, 0.18× maximum reproduction ratio, three super-low-dispersion elements, one aspherical element, and ring-type SDM rear-group focusing.
- Optical glass catalog cross-checks against OHARA, HOYA, Schott, Sumita, CDGM, and HIKARI nd/νd families. Specific glass labels are catalog-class identifications unless explicitly stated as patent-tabulated.
