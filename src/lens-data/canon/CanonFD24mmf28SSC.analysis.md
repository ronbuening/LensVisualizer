# Canon FD 24mm f/2.8 S.S.C. — Optical Analysis

## Patent Reference and Design Identification

**Patent:** US 3,748,021
**Title:** Reverse Telephoto Lens for Near-Distance Photography
**Application Number:** US 130,900
**Filed:** April 5, 1971
**Priority:** April 11, 1970 (Japan 45/30505)
**Granted:** July 24, 1973
**Inventors:** Akira Tajima; Kikuo Momiyama
**Assignee:** Canon Kabushiki Kaisha
**Embodiment analyzed:** Embodiment 2 / Fig. 11 / numerical Example 2, normalized `f = 1`, F/2.8, `2ω = 84°`, back-focus ratio 1.4916

US 3,748,021 describes a reverse-telephoto wide-angle lens whose close-range correction is obtained by reducing a front-group air space as the whole lens is advanced for focusing. The patent is the primary prescription source; the relevant optical layout is Fig. 11 and the relevant numerical table is Embodiment 2.

The identification with the Canon FD 24mm f/2.8 S.S.C. rests on convergent evidence:

1. **Aperture and field.** Example 2 is stated at F/2.8 and `2ω = 84°`. A 24 mm rectilinear lens on the 43.27 mm diagonal of the 135 format gives `2·atan(21.63 / 24) = 84.1°`, matching the patent field.
2. **Element and group count.** The prescription resolves to 9 elements in 8 air-spaced groups, with one cemented doublet behind the stop. Canon's official Camera Museum entry for the FD24mm f/2.8 S.S.C. lists 9 elements in 8 groups.
3. **Close-range correction.** The patent claims a front-group variable air space that is shortened at close focus. Canon's period FD wide-angle line described this mechanism as the Floating System; the Example 2 geometry places the variable gap exactly between the front positive element and the following strong negative meniscus.
4. **Production timing.** The patent priority date is April 1970 and the grant date is July 1973. Canon's official S.S.C. entry lists the FD24mm f/2.8 S.S.C. as marketed in March 1973.
5. **Hard specifications.** Canon lists the S.S.C. lens at 0.3 m closest focusing distance, 0.114× maximum magnification, 6 diaphragm blades, minimum aperture F/16, 55 mm filters, and 66 × 52.5 mm / 330 g mechanical dimensions. These specifications are consistent with the patent embodiment after scaling.
6. **Exclusion of the later redesign.** Canon's later New FD24mm f/2.8 is a 1979 10-element / 9-group design with a different construction and is therefore not the prescription analyzed here.

The requested deliverables therefore use the S.S.C. production name, while noting that the same patent embodiment is also relevant to the earlier FD 24mm f/2.8 optical family.

## Optical Architecture

The design is a classic **reverse-telephoto (retrofocus) wide-angle**: a front divergent block establishes the wide field and long back focus, followed by a rear convergent block that forms the image. The computed infinity-focus effective focal length of the rounded patent table is 0.99757691 in patent units. The data file scales all radii and axial thicknesses by `24 / 0.99757691 = 24.05829542`, giving a 24.000 mm paraxial focal length from the rounded prescription.

The computed back focal distance is 1.49165× the effective focal length, or 35.80 mm at the 24 mm scale. This is a genuine retrofocus condition: the rear vertex sits far enough ahead of the film plane to clear the reflex mirror requirements of the Canon FD SLR system.

The power distribution is:

| Block | Surfaces | Elements | Standalone group focal length | Function |
|---|---:|---:|---:|---|
| Front divergent group | R1–R6 | E1–E3 | −0.677 f | Wide-field expansion, long back focus, floating D4 correction |
| Rear convergent group | R7–R17 | E4–E9 | +0.884 f | Image formation, Petzval control, residual aberration balancing |

The architecture is all-spherical. There are no aspherical surfaces. The aperture stop is in the D10 air space between E5 and the cemented E6/E7 doublet; the patent figure gives the stop location graphically rather than as a separate axial coordinate. The data file places the stop at the midpoint of D10, which preserves the prescription's paraxial power and gives the correct entrance pupil for F/2.8.

## Element-by-Element Analysis

Focal lengths below are standalone thick-lens-in-air values after scaling to the 24 mm production focal length. They describe each physical element alone, not the element's in-situ contribution inside the complete retrofocus system.

### E1 — Negative Meniscus, convex to object

nd = 1.58913, νd = 61.0. Glass: S-BAL35 / SK5-class dense crown equivalent. f = −61.13 mm.

E1 is the first and largest negative member of the front divergent group. Its two positive radii, R1 = +41.94 mm and R2 = +19.04 mm after scaling, form a strong negative meniscus convex toward the object. This element begins the retrofocus expansion and helps place the rear principal plane far enough forward to create the long back focal distance.

The use of a dense crown rather than a high-dispersion flint at the first large-diameter element keeps the front negative power from imposing excessive axial color. The element also helps control entrance-pupil geometry for the wide field.

### E2 — Weak Positive Meniscus, rear boundary of the floating gap

nd = 1.58913, νd = 61.0. Glass: S-BAL35 / SK5-class dense crown equivalent. f = +101.36 mm.

E2 is a weak positive front-group element. Its front radius is extremely long, so it is close to plano-convex in effect, while the rear surface is strongly convex toward the image side. The rear surface of E2 bounds the variable D4 air space.

The patent specifically teaches that the variable air space should be located where the axial bundle runs nearly parallel to the axis. A paraxial trace confirms that the slope in D4 is about +0.119 for a unit-height incoming parallel ray, much lower than the corresponding slopes in D2 (+0.394) and D6 (+1.481). This is why varying D4 changes field curvature strongly while leaving focal length and spherical aberration nearly unchanged.

### E3 — Strong Negative Meniscus after the floating gap

nd = 1.57957, νd = 53.7. Glass: N-BALF4-class barium light flint equivalent. f = −20.94 mm.

E3 is the strongest negative element in the front group. The corrected patent reading for R5 is **+7.4418**, not +7.448; after scaling this is +179.04 mm. The rear radius R6 = +11.24485 mm after scaling is the steepest surface in the front block and carries much of the negative power that makes the design retrofocus.

Because E3 sits immediately behind the floating gap, D4 is an effective field-curvature lever. As D4 is shortened, the height at E3 changes enough to retune oblique-field correction, but the axial slope in the gap is low enough that focal length changes by only about 0.63% over the patent's D4 range.

### E4 — Biconvex Positive, first rear-group element

nd = 1.80518, νd = 25.4. Glass: S-TIH6 / SF6-class dense flint equivalent. f = +46.09 mm.

E4 starts the rear convergent group. Although it is a positive element, it uses a high-index, high-dispersion dense flint. This is not a mistake: high index allows the element to carry useful power with less curvature than a lower-index glass would require, while the dispersion is balanced by the surrounding crown and lanthanum-crown elements.

E4 and E5 are separated by only 0.0986 mm after scaling. They behave as a closely coupled positive pair ahead of the stop.

### E5 — Strong Biconvex Positive ahead of the stop

nd = 1.58913, νd = 61.0. Glass: S-BAL35 / SK5-class dense crown equivalent. f = +20.97 mm.

E5 is the strongest positive singlet in the system. It provides the main pre-stop convergence, and the axial marginal ray reaches one of its largest heights here. Splitting the rear-group positive power between E4 and E5 avoids concentrating the curvature in one very steep surface.

The aperture stop follows E5 in D10. The data file splits D10 equally around the stop; this is a rendering and aperture-modeling choice because the patent figure shows the stop in this gap but the numerical table lists only the total D10 air space.

### E6 + E7 — Cemented Negative Doublet behind the stop

**E6.** nd = 1.80518, νd = 25.4. Glass: S-TIH6 / SF6-class dense flint equivalent. f = −18.95 mm.

**E7.** nd = 1.72342, νd = 37.9. Glass: S-BAH28 / BaSF-class equivalent. f = −151.16 mm.

**Cemented net.** f = −16.35 mm.

The only cemented group is a negative doublet immediately behind the diaphragm. E6 is a strong biconcave dense-flint negative. E7 is a much weaker negative meniscus, cemented to E6 at R12.

This is not a conventional positive-crown / negative-flint achromat. Both components are negative, and the doublet is best understood as a compact negative correcting group that supplies a high-index buried interface and shares the dispersion burden between two flint-family glasses. Its position just behind the stop is important for lateral color, astigmatism, and distortion balancing.

### E8 — Positive Meniscus, rear lanthanum-crown member

nd = 1.71300, νd = 53.9. Glass: S-LAL8 / LaK8-class lanthanum crown equivalent. f = +36.70 mm.

E8 is a positive meniscus concave toward the object. It begins the final rear positive pair. The high index of the lanthanum-crown glass helps maintain positive power while keeping the Petzval sum moderate.

### E9 — Positive Meniscus, terminal element

nd = 1.71300, νd = 53.9. Glass: S-LAL8 / LaK8-class lanthanum crown equivalent. f = +44.48 mm.

E9 is the final positive meniscus and sets the last stage of convergence into the image plane. E8 and E9 use the same glass and similar shape, forming a balanced rear positive pair separated by only 0.1468 mm after scaling.

## Glass Identification and Selection

The patent gives refractive index and Abbe number, not glass vendor names. The identifications below are therefore modern catalog equivalents, selected by matching the patent's `(nd, νd)` values against manufacturer-published optical-glass data. They should be read as catalog-class equivalents rather than guaranteed historical melt names.

| Patent nd / νd | Modern catalog equivalent | Used at | Comment |
|---:|---|---|---|
| 1.58913 / 61.0 | OHARA S-BAL35, SK5-class dense crown | E1, E2, E5 | Exact nd match; low-dispersion positive and front meniscus glass |
| 1.57957 / 53.7 | SCHOTT N-BALF4-class barium light flint | E3 | Very close catalog match; used for the strong front negative |
| 1.80518 / 25.4 | OHARA S-TIH6, SF6-class dense flint | E4, E6 | Exact nd match; high-index, high-dispersion flint |
| 1.72342 / 37.9 | OHARA S-BAH28, BaSF-class dense barium flint | E7 | Exact nd match; weak negative partner in the cemented doublet |
| 1.71300 / 53.9 | OHARA S-LAL8, LaK8-class lanthanum crown | E8, E9 | Exact nd match; high-index rear positive pair |

The chromatic strategy is classical rather than apochromatic. The design has no fluorite, no ED glass, and no anomalous partial-dispersion condition in the patent. Color correction is produced by distributing positive power through dense crown and lanthanum crown glasses while assigning the strongest negative powers to barium light flint and dense flint glasses. The computed surface-by-surface Petzval sum is +0.13975 in inverse-focal-length units, corresponding to a Petzval radius of about −7.16 f, or −172 mm at the 24 mm scale.

## Focus Mechanism

The lens focuses by whole-lens advance plus a **floating front-group air space**. The variable air gap is D4, between E2 and E3. The patent table gives:

| Focus state | Object distance from image plane | D4 in patent units | D4 at 24 mm data scale |
|---|---:|---:|---:|
| Infinity | ∞ | 0.065 | 1.5638 mm |
| Patent near example | 16.32 f | 0.004 | 0.0962 mm |

The patent's near example corresponds to about `16.32 × 24 = 392 mm` from the image plane. Canon's official production closest-focusing distance is 0.3 m, and Canon lists maximum magnification as 0.114×. The data file therefore uses the patent's near D4 minimum and solves the back focal distance paraxially for a 0.3 m object distance. That gives a close-focus model magnification of 0.112×, close to Canon's published 0.114× value.

The data-file focus variables are:

| Variable | Infinity | Close-focus model | Meaning |
|---|---:|---:|---|
| D4 | 1.5638 mm | 0.0962 mm | Floating front-group correction gap |
| BF | 35.7996 mm | 38.5201 mm | Rear vertex to image plane |

The patent's important claim is not that D4 supplies focusing by itself. Focusing remains a whole-lens advance. D4 is a close-range aberration compensator, selected because the axial flux in this gap is almost parallel to the optical axis.

## Aberration Correction Strategy and Design Philosophy

The patent explains the problem in third-order terms. In a reverse-telephoto wide-angle lens, the principal plane lies behind the iris, so the iris paraxial incidence and emergence angles cannot be made equal. The near-distance changes in astigmatism and sagittal field curvature therefore cannot both be neutralized in a fixed-spacing design.

The practical symptom is field-curvature over-correction at close range. The patent drawings show this directly: Figs. 15–17 show the second embodiment focused to the near example by ordinary whole-lens advance with D4 left unchanged, and the astigmatism / field-curvature curves deteriorate strongly. Figs. 18–20 show the same near-distance case with D4 reduced according to the table, and the field curves return close to the infinity-focus correction.

The novelty is the placement of the variable air space in the front divergent group, not a new rear-group construction. The static prescription is a competent all-spherical retrofocus design. The floating D4 space is the mechanism that preserves off-axis image quality as the object distance decreases.

## Verification Summary

All quantitative values below were recalculated from the patent prescription using an independent paraxial matrix trace. The prescription uses R5 = +7.4418, verified from the patent image; this corrects the ambiguous OCR reading of +7.448.

| Quantity | Patent / source value | Independent result | Comment |
|---|---:|---:|---|
| Rounded-table EFL, patent scale | f = 1 nominal | 0.99757691 | Difference is from rounded prescription data |
| Data-file scale factor | Production f = 24 mm | 24.05829542× | Forces rounded prescription to 24.000 mm |
| Data-file EFL | 24 mm marketed | 24.000000 mm | Verified after scaling |
| Back focal ratio | 1.4916 | 1.49165 | Computed as BFD / EFL |
| Infinity BFD at 24 mm | 1.4916 × 24 | 35.7996 mm | Used for final surface-to-image spacing |
| D4 variable range | 0.065 → 0.004 | 1.5638 → 0.0962 mm | Scaled directly from patent table |
| EFL change over D4 range | Not tabulated | 24.000 → 24.147 mm | About +0.61%; close to the patent's “little influence” claim |
| Petzval sum | Not tabulated | +0.13975 / f | Surface-by-surface `φ / (n · n′)` formula |
| Close-focus data model | Canon 0.3 m, 0.114× | 0.3 m, 0.112× | Uses patent near D4 and solved BF |
| Stop size | F/2.8 source spec | stop SD 6.22 mm | Mid-D10 stop estimate; entrance pupil SD ≈ 4.286 mm |

The semi-diameters in the data file are not patent-listed values. They are inferred clear apertures chosen to pass the default LensVisualizer ray fans while respecting rim-slope, edge-thickness, element-ratio, and cross-gap sag constraints.

## Design Heritage and Context

US 3,748,021 is an early Canon patent for close-range correction in retrofocus wide-angle lenses. Example 1 is the wider F/4 embodiment, while Example 2 is the 84° F/2.8 embodiment analyzed here. The design belongs to the first FD-era generation of wide-angle lenses and predates the later New FD 24mm f/2.8 redesign.

The optical significance is the floating correction gap. The rear half of the lens remains a conventional all-spherical positive/negative/positive retrofocus rear group, but the D4 cam gives the design a way to keep field curvature from collapsing at near distances. This is why the patent is better understood as a focusing-aberration patent than as a simple static 24 mm prescription patent.

## Sources and References

- US 3,748,021, **Reverse Telephoto Lens for Near-Distance Photography**, Akira Tajima and Kikuo Momiyama, Canon Kabushiki Kaisha. Primary source for the prescription, variable D4 table, figures, and claims.
- Canon Camera Museum, **FD24mm f/2.8 S.S.C.** Official source for marketed date, 9 elements / 8 groups, 6 blades, minimum aperture F/16, 0.3 m closest focusing distance, 0.114× maximum magnification, 55 mm filter size, dimensions, and weight. https://global.canon/en/c-museum/product/fd134.html
- Canon Camera Museum, **New FD24mm f/2.8**. Official source used to exclude the later 10-element / 9-group New FD redesign. https://global.canon/en/c-museum/product/nfd201.html
- OHARA, **S-BAL35** optical-glass data sheet. Manufacturer catalog match for the 1.58913 / 61.0 glass. https://www.ohara-gmbh.com/fileadmin/user_upload/export-data/pdf/product_datasheets/S-BAL35_English_.pdf
- SCHOTT, **N-BALF4** optical-glass data sheet. Manufacturer catalog match for the 1.57957 / 53.7 barium light flint class. https://media.schott.com/api/public/content/710baa54349548fe9babbd4d86732e04
- OHARA, **S-TIH6** optical-glass data sheet. Manufacturer catalog match for the 1.80518 / 25.4 dense flint glass. https://www.ohara-gmbh.com/fileadmin/user_upload/export-data/pdf/product_datasheets/S-TIH6_English_.pdf
- OHARA, **S-BAH28** optical-glass data sheet. Manufacturer catalog match for the 1.72342 / 37.9 glass. https://www.ohara-gmbh.com/fileadmin/user_upload/export-data/pdf/product_datasheets/S-BAH28_English_.pdf
- OHARA, **S-LAL8** optical-glass data sheet. Manufacturer catalog match for the 1.71300 / 53.9 lanthanum crown glass. https://www.ohara-gmbh.com/fileadmin/user_upload/export-data/pdf/product_datasheets/S-LAL8_English_.pdf
