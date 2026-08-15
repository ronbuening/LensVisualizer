# SMC PENTAX-A ZOOM 35-70mm f/4

## Patent Reference and Design Identification

**Patent:** US 4,812,022\
**Filed:** June 27, 1988; continuation of application Ser. No. 569,466 filed January 9, 1984\
**Priority:** Japan, February 2, 1983\
**Granted:** March 14, 1989\
**Inventor:** Shigetada Sato\
**Assignee:** Asahi Kogaku Kogyo Co., Ltd.\
**Title:** *Zoom Lens*\
**Embodiment analyzed:** Example 3

The selected correlation is the production **SMC PENTAX-A ZOOM 35-70mm f/4** with Example 3 of US 4,812,022. The patent does not identify the commercial lens by product name, so the correlation is not presented as manufacturer confirmation. It rests on the convergence of the following source facts:

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

The physical stop geometry is not fully published. The final model places `STO` 1.9105 mm objectward of surface 7, the midpoint of the minimum published 3.821 mm intergroup gap, and assigns it a physical semi-diameter of 7.752338441 mm. This position and radius are modeling inferences, not patent table values. The stop remains rigidly referenced to the rear group in the zoom model.

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

The aperture model requires a separate qualification. The patent and its aberration plots identify the design as f/4.1 across the plotted zoom range, but the patent does not give an exact physical stop position, stop radius, or zoom-dependent iris-opening law. With the model's inferred stop fixed to the rear group and calibrated to f/4.1 at 36 mm, the same physical stop produces a calculated **f/5.394215** at 68.5 mm. For that reason, `nominalFno` is `[4.1, 5.394215]`, because this field is required to describe the modeled pupil geometry. `apertureDesign` remains 4.1 and `apertureMarketing` remains 4. The f/5.394215 value is not a claim that the production 35-70 mm lens becomes an f/5.39 lens at the long end; it is a disclosed limitation of the underdetermined fixed-stop model.

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

The patent does not publish semi-diameters. All authored surface semi-diameters are inferred from meridional ray bundles and constrained by edge thickness, actual rim slope, shared-band cross-gap clearance, and field containment. In the authored geometry, the minimum element edge thickness is **0.735335 mm**, the maximum spherical rim angle is **48.515°**, and the smallest remaining clearance to the 0.90 shared-band cross-gap limit is **0.064313 mm**. The required on-axis, default 0.60-field, and full-field chief-ray checks are contained at both endpoints. An extreme wide-angle, extreme-pupil test ray vignettes at surface 3 by approximately **0.586 mm**; enlarging that element enough to pass the ray conflicts with the adopted cross-gap limit, so that extreme vignetting is retained rather than hidden by layout controls.

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
