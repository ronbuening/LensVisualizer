# PENTAX SMC A ZOOM 35-70mm f/4

## Patent Reference and Design Identification

**Patent:** US 4,812,022\
**Filed:** June 27, 1988; continuation of application Ser. No. 569,466 filed January 9, 1984\
**Priority:** Japan, February 2, 1983\
**Granted:** March 14, 1989\
**Inventor:** Shigetada Sato\
**Assignee:** Asahi Kogaku Kogyo Co., Ltd.\
**Title:** *Zoom Lens*\
**Embodiment analyzed:** Example 3

The selected correlation is the production **PENTAX SMC A ZOOM 35-70mm f/4** with Example 3 of US 4,812,022. The patent does not identify the commercial lens by product name, so the correlation is not presented as manufacturer confirmation. It rests on the convergence of the following source facts:

1. The Pentax A-series catalog lists an SMC PENTAX-A Zoom 35-70mm f/4 with seven elements in seven groups.
2. Example 3 is likewise a seven-element / seven-group zoom and publishes a design focal range of 36-68.5 mm at f/4.1.
3. The production catalog gives a 63°-34.5° angle-of-view range, while Example 3 gives a full field of 64.5°-34.7°.
4. The production lens is a Pentax K-family A-series lens; the data therefore uses the canonical `pentax-k` mount identifier and `135-full-frame` format.

The marketed 35-70 mm f/4 identity and the patent-scale 36-68.5 mm f/4.1 design are intentionally kept separate. No uniform scaling is applied: the prescription remains at the dimensions of Example 3.

## Optical Architecture

Example 3 is an all-spherical, two-group zoom with a **negative front group** followed by a **positive rear group**. The front group contains L1-L3; the rear group contains L4-L7. All seven elements are air-spaced, so there are no cemented doublets or triplets and no cemented-group powers to report.

The patent describes the front group as a negative meniscus, a second negative lens, and a positive meniscus, and the rear group as positive-positive-negative-positive. It places the aperture between the two groups, on the object side of the rear group, and states that the aperture moves with the rear group. The published zoom variable is the intergroup spacing `d6`, which decreases from 41.111 mm at the wide endpoint to 3.821 mm at the tele endpoint, a closure of 37.290 mm.

Independent paraxial calculation from the final data gives a front-group focal length of approximately **-68.4391 mm** and a rear-group focal length of approximately **+41.3421 mm**. These are functional group powers in the complete air-spaced group geometry, distinct from the standalone focal lengths of the individual elements listed below.

The patent's design rationale emphasizes Petzval balance between the negative front group and positive rear group. Surface-by-surface computation from the final prescription gives a front-group Petzval sum of **-0.00901770 mm⁻¹**, a rear-group sum of **+0.01053300 mm⁻¹**, and a residual total of **+0.00151529 mm⁻¹**. The opposite group signs reproduce the qualitative balancing mechanism described in the patent.

The physical stop geometry is not fully published. The final model places `STO` 1.9105 mm objectward of surface 7, the midpoint of the minimum published 3.821 mm intergroup gap, and keeps it rigidly referenced to the rear group in the zoom model. This position is a modeling inference, not a patent table value. The wide-open iris radius is traced at each zoom station from the patent's f/4.1: 7.7842 mm at 36 mm and 10.3442 mm at 68.5 mm. The 7.752338441 mm semi-diameter on the `STO` row is the paraxial f/4.1 radius at 36 mm.

## Element-by-Element Analysis

The focal lengths in this section are **standalone thick-element focal lengths in air** computed from each physical element's two refracting surfaces. They do not represent the element's isolated contribution inside the assembled zoom, where neighboring spaces and the opposite group alter the system behavior.

### L1 — Negative Meniscus, convex to object

**nd = 1.83400, νd = 37.2. Glass: 834372 class (vendor unresolved). f = -50.298759 mm.**

L1 begins the diverging front group and carries the stronger of the two standalone negative powers in the L1-L2 pair. The patent's first conditional expression couples the combined power of L1-L2 to the refractive indices and individual powers of these two negative lenses. Its stated purpose is to prevent excessive negative Petzval contribution from the front negative pair, which would otherwise force stronger compensating positive power and complicate correction of spherical aberration and coma.

### L2 — Negative Meniscus

**nd = 1.80610, νd = 40.9. Glass: 806409 class (vendor unresolved). f = -80.911240 mm.**

L2 completes the negative pair at the front of the lens. Its standalone negative power is weaker than L1's, but the two work together before L3 establishes the final negative power of the complete front group. The 2.950 mm air gap between L2 and L3 is also the quantity used in patent condition (5), which constrains compactness against aberration and front-diameter penalties.

### L3 — Positive Meniscus, convex to object

**nd = 1.80518, νd = 25.4. Glass: 805254 class (vendor unresolved). f = +59.199483 mm.**

L3 is the positive element embedded within the otherwise negative front group. Patent condition (3) constrains its power relative to the magnitude of the full front-group power. The patent explicitly links this balance to distortion, coma, astigmatism, and Petzval correction: too little L3 power leaves the negative pair dominant, while too much reduces its ability to offset the front group's negative Petzval contribution.

### L4 — Biconvex Positive

**nd = 1.74400, νd = 44.7. Glass: S-LAM2 (OHARA catalog equivalent for patent 744447; production supplier unspecified). f = +41.324764 mm.**

L4 is the first refracting element behind the moving aperture and begins the positive rear group. Its standalone power is strongly positive. In the assembled rear group it works with L5 and L7 against the deliberately strong negative L6 to produce the group's net converging power.

### L5 — Positive Meniscus

**nd = 1.65844, νd = 50.9. Glass: 658509 class (vendor unresolved). f = +35.825718 mm.**

L5 has the shortest positive standalone focal length in the prescription and is therefore the strongest individual positive element by this air-isolated measure. It reinforces the converging rear group immediately ahead of the strong negative L6. No cemented interface is involved; the 0.640 mm air gap following L5 is retained as a true air space.

### L6 — Biconcave Negative

**nd = 1.80518, νd = 25.4. Glass: 805254 class (vendor unresolved). f = -18.825967 mm.**

L6 is the strongest standalone element in absolute power and is the only negative element in the rear group. Patent condition (4) constrains the magnitude of this negative power relative to the rear group's positive focal length. The patent states that the balance is intended to limit zoom-dependent spherical-aberration variation while preventing the rear group's positive Petzval sum from becoming excessive.

L6 uses the same `nd`/`νd` coordinate pair as L3. The data consequently assigns both elements the same vendor-unresolved 805254 class rather than asserting a specific catalog glass.

### L7 — Positive Meniscus

**nd = 1.58144, νd = 40.8. Glass: 581408 class (vendor unresolved). f = +69.872603 mm.**

L7 is the final positive element and completes the rear converging group. Its standalone positive power is weaker than that of L4 or L5, but it contributes to the rear group's final positive net power and terminates the seven-element sequence before the computed image-space distance.

## Glass Identification and Selection

The patent publishes only d-line refractive indices and Abbe numbers. It does not name glass manufacturers or catalog designations, and it provides no `nC`, `nF`, `ng`, `PgF`, or `dPgF` values. Cross-catalog comparison therefore does not justify unique vendor assignments for most elements. L4's 744447 coordinate matches OHARA S-LAM2 to source precision, so the data uses that verified dispersion model as a catalog equivalent while leaving the production supplier unspecified; the remaining labels preserve their source coordinates without claiming chemistry or manufacturer identity.

| Element(s) | nd | νd | Data-file glass label |
|---|---:|---:|---|
| L1 | 1.83400 | 37.2 | 834372 class (vendor unresolved) |
| L2 | 1.80610 | 40.9 | 806409 class (vendor unresolved) |
| L3, L6 | 1.80518 | 25.4 | 805254 class (vendor unresolved) |
| L4 | 1.74400 | 44.7 | S-LAM2 catalog equivalent; supplier unspecified |
| L5 | 1.65844 | 50.9 | 658509 class (vendor unresolved) |
| L7 | 1.58144 | 40.8 | 581408 class (vendor unresolved) |

Because no line-index or anomalous-partial-dispersion data is authored, the prescription does not support an APO or anomalous-dispersion claim. Chromatic interpretation beyond ordinary `nd`/`νd` behavior would require information not present in Example 3 or a uniquely defensible catalog match.

## Focus Mechanism

The final data uses **NO_INTERNAL_RECONSTRUCTION**. Example 3 publishes zoom geometry but no close-focus spacing table, object distance, magnification, or focus cam law. The production catalog's 0.25 m minimum focusing distance is therefore stored only as product metadata and is not used to invent internal movement.

Every `[infinity, close]` spacing pair in `var` is identical. The model consequently contains no optically distinct close-focus prescription. Its only defined movement is zoom: the intergroup gap and the computed image-space distance change between the 36 mm and 68.5 mm endpoints.

The aperture model requires a separate qualification. Example 3 prints one F number, 1:4.1, for the whole 36-68.5 mm range, and its aberration plots (Figures 10-12) are headed 1:4.1 at minimum, medium, and maximum focal length. The patent gives no stop coordinate, stop diameter, or iris-opening law. `nominalFno` is therefore 4.1 at both stations, `apertureDesign` is 4.1, and `apertureMarketing` is 4. The wide-open iris is traced from that f-number at each station. With the stop riding on the rear group, f/4.1 needs an iris radius of 7.7842 mm at 36 mm and 10.3442 mm at 68.5 mm, about 33 % more, so no single iris radius gives the printed value at both ends.

| Station | Stated | Iris radius | Traced on axis | Limiter |
|---|---:|---:|---:|---|
| 36 mm | f/4.1 | 7.7842 mm | f/4.10 | iris (`STO`) |
| 68.5 mm | f/4.1 | 10.3442 mm | f/4.10 | iris (`STO`) |

The model reaches f/4.1 at both stations, and the iris is the limiter at each. At 68.5 mm, where the axial beam is widest in the rear group, the f/4.1 marginal ray stays inside every rear rim:

| Surface | f/4.1 marginal ray at 68.5 mm | Semi-diameter | Clearance |
|---|---:|---:|---:|
| 7 (L4 front) | 10.762 mm | 10.8 mm | 0.038 mm |
| 8 (L4 rear) | 10.681 mm | 10.8 mm | 0.119 mm |
| 9 (L5 front) | 10.201 mm | 10.3 mm | 0.099 mm |
| 10 (L5 rear) | 9.698 mm | 10.3 mm | 0.602 mm |
| 11 (L6 front) | 9.612 mm | 9.7 mm | 0.088 mm |
| 12 (L6 rear) | 7.731 mm | 9.4 mm | 1.669 mm |
| 13 (L7 front) | 7.714 mm | 7.8 mm | 0.086 mm |
| 14 (L7 rear) | 7.755 mm | 7.8 mm | 0.045 mm |

The patent prints no clear apertures, so every semi-diameter in the file is inferred. The rear group is sized to the stated beam: the height the f/4.1 on-axis ray reaches at 68.5 mm, rounded up to 0.1 mm, is at that precision the smallest rim that passes the printed f-number. Figure 9 draws L4, L5 and L7 with square-cut rims, one rim line parallel to the axis joining the front and rear faces (on L5 the rear corner is cut by about 0.5 mm, little more than the width of a drawn line), so each of those elements carries one value on both faces, the higher of its two rounded ray heights: 10.8 mm from surface 7, 10.3 mm from surface 9, and 7.8 mm, which surfaces 13 and 14 both round up to. Figure 9 draws L6 with a chamfer on its rear, so its two faces are sized separately: surface 11 carries its rounded ray height, 9.7 mm, and surface 12 carries 9.4 mm, inferred from ray bundles and the Figure 9 silhouette. The rims on L4, on the fronts of L5 and L6 and on L7 sit 0.4 to 1.1 % outside the marginal ray; surface 10 sits 6.2 % outside it and surface 12 21.6 %.

Figure 9, which the patent calls a schematic view, is the check on these values and not their source. Read as half the distance between each element's upper and lower rim lines, on two scales that agree to 0.5 %, it draws L4 at 11.3 mm, L5 at 10.7 mm, L6 at 10.2 mm and L7 at 8.2 mm, each at least as large as that element's rims in the file. The figure ends the rear arc of L6 at a chamfer corner 8.4 mm from the axis; surface 12, at 9.4 mm, lies between that corner and the element's drawn outer rim.

## Conditional Expressions

The patent defines six inequalities governing the two-group power distribution, the positive and negative balancing elements, the L2-L3 air gap, and the principal-plane separation at maximum focal length. Recalculation from the final prescription reproduces every printed Example 3 value to the patent's displayed three-decimal precision.

| Condition | Computed | Patent Example 3 | Patent bound | Result |
|---|---:|---:|---|---|
| (1) negative-pair power/index expression | 1.903862 | 1.904 | > 1.80 | Pass |
| (2) `|fI| / fT` | 0.999108 | 0.999 | 0.90 < value < 1.20 | Pass |
| (3) `f3 / |fI|` | 0.864995 | 0.865 | 0.75 < value < 1.10 | Pass |
| (4) `|f6| / fII` | 0.455370 | 0.455 | 0.35 < value < 0.55 | Pass |
| (5) `l2 / fT` | 0.043066 | 0.043 | 0.025 < value < 0.050 | Pass |
| (6) `e / fT` | 0.207419 | 0.207 | 0.15 < value < 0.25 | Pass |

Here `fI` is the front-group focal length, `fII` the rear-group focal length, `fT` the system focal length at maximum focal length, `l2` the L2-L3 air gap, and `e` the separation between the rear principal plane of the front group and the front principal plane of the rear group at the tele endpoint.

## Verification Summary and Modeling Limits

The final data reproduces the patent-scale focal endpoints. Independent sequential y-ν tracing and an ABCD cross-check give **35.999849 mm** at the 36 mm state and **68.500182 mm** at the 68.5 mm state. The corresponding modeled rear vertex-to-image distances are **42.386857 mm** and **62.019383 mm**. These rear distances are computed image-space values; they are not rows printed in the patent prescription.

The patent does not publish semi-diameters. The front-group semi-diameters (surfaces 1-6) are inferred from meridional ray bundles and constrained by edge thickness, actual rim slope, shared-band cross-gap clearance, and field containment. In the rear group, L4, L5 and L7, which Figure 9 draws with square-cut rims, each carry one value on both faces, 10.8, 10.3 and 7.8 mm: the height of the stated f/4.1 on-axis ray at 68.5 mm on the face that needs more, rounded up to 0.1 mm. L6, which the figure draws with a chamfered rear, carries 9.7 mm on surface 11 for the same ray and the inferred 9.4 mm on surface 12. Figure 9 checks those values on the 300 dpi patent scan, on two scales: the r7-r14 vertex span, 354.6 px for the printed 23.250 mm (15.25 px/mm), and circles fitted to eight drawn arcs (median 15.17 px/mm). It draws every rear element at least as large as the file does. In the authored geometry, the minimum element edge thickness is **1.470464 mm** (L7), the maximum spherical rim angle is **48.515°** (surface 2), and the smallest remaining clearance to the 0.90 shared-band cross-gap limit is **0.064313 mm**, in the 4.240 mm air gap between L1 and L2. The chief ray to the 21.65 mm format corner is clear at both endpoints, at 32.2° at 36 mm and 17.4° at 68.5 mm. The on-axis f/4.1 beam is contained at both endpoints with the iris as its limiter, as tabulated under Focus Mechanism. The diagram's default fan at 0.60 of the chief-ray-limited field passes whole at 36 mm; at 68.5 mm its lowest ray is cut at surface 13, the front of L7. An extreme wide-angle, extreme-pupil test ray vignettes at surface 3 by approximately **0.586 mm**; enlarging that element enough to pass the ray conflicts with the adopted cross-gap limit, so that extreme vignetting is retained rather than hidden by layout controls.

No sensor cover glass, filter, inactive dummy plane, flare-cutter plane, or mechanical part is included. Example 3 contains no such optical prescription entries, and no omitted plate requires an air-equivalent compensation. The design is entirely spherical, so there are no aspheric coefficients or conic conventions to transform. The scale factor is **1.0**, so neither dimensions nor coefficients are rescaled.

No patent numerical value has been silently corrected. Ambiguous OCR readings were resolved against the rendered patent page before transcription; the retained Example 3 values include `r4 = +33.150`, `d6 = 41.111-3.821`, `r10 = +193.485`, `d11 = 6.040`, `r14 = -28.475`, and the f/4.1 design header.

## Sources / References

1. Shigetada Sato, **US 4,812,022, “Zoom Lens,”** Asahi Kogaku Kogyo Co., Ltd., granted March 14, 1989. Example 3 prescription and conditions; Figures 9-12.
2. **Pentax Lenses & Accessories: A Comprehensive and Versatile Photographic System**, Pentax Corporation. A-series lens specifications for the SMC PENTAX-A Zoom 35-70mm f/4, catalog pp. 22-23.
3. **HOYA GROUP Optics Division, Glass Cross Reference Index.** Cross-vendor optical-code comparison covering HOYA, SCHOTT, OHARA, HIKARI, SUMITA, and CDGM, with the manufacturer's warning that code equivalence does not establish identical glass composition.
4. **OHARA Corporation, Optical Glass Catalog and Data Sheets.** Coordinate checks for candidate families corresponding to the patent `nd`/`νd` pairs.
5. **SCHOTT Advanced Optics, Optical Glass Catalog and Data Sheets.** Coordinate checks for candidate families corresponding to the patent `nd`/`νd` pairs.
6. **HIKARI GLASS CO., LTD., Optical Glass Catalog / All Catalog Data.** Coordinate checks for candidate families corresponding to the patent `nd`/`νd` pairs.
7. **SUMITA Optical Glass, Optical Glass Data Book**, Data Version 14.01, March 31, 2025. Coordinate checks for candidate families corresponding to the patent `nd`/`νd` pairs.
8. **CDGM, Optical Glass Catalog and Data.** Coordinate checks for candidate families corresponding to the patent `nd`/`νd` pairs.
