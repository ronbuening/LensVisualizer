# Canon EF-S 55-250mm f/4-5.6 IS STM — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** US 2014/0211029 A1  
**Application number:** US 14/159,706  
**Filed:** January 21, 2014  
**Published:** July 31, 2014  
**Priority:** JP 2013-015283, filed January 30, 2013  
**Inventor:** Tetsuichirou Okumura  
**Applicant:** Canon Kabushiki Kaisha  
**Title:** Zoom Lens and Image Pickup Apparatus Including the Same  
**Embodiment analyzed:** Numerical Embodiment 3

Numerical Embodiment 3 is the best match in US 2014/0211029 A1 for the Canon EF-S 55-250mm f/4-5.6 IS STM.

1. Canon's official specifications give a 55-250mm f/4-5.6 lens with 15 elements in 12 groups, rear focus, 0.85 m minimum focusing distance, and a 58 mm filter thread. Numerical Embodiment 3 gives 15 glass elements arranged in 12 air-separated groups, with a design focal-length range of 56.80-241.32 mm and design F-numbers of 4.16-5.88.
2. The patent image height is 13.66 mm, corresponding to a 27.32 mm image circle. That is the intended APS-C coverage class for an EF-S lens.
3. The patent's six-unit refractive-power sequence is positive-negative-positive-positive-negative-positive. The production lens is a compact APS-C telephoto zoom with optical image stabilization and rear focus, matching the patent's stated design objectives.
4. The second lens unit L2 is the image-stabilizing unit in Embodiments 1-6 (paragraph 0047). In Numerical Embodiment 3, L2 remains stationary during zooming, while L1 and L3-L6 move during zooming (paragraphs 0046 and 0090). This agrees with the patent's stated reason for keeping the IS unit mechanically simple.
5. The fifth lens unit L5 is the rear focus unit. Paragraph 0047 contains a wording error, reading "the fifth lens unit L3"; paragraph 0088 and the numerical prescription confirm that the moving focus unit is L5, not L3.
6. The glass set contains one S-FPL51-class fluorophosphate UD element, matching Canon's published claim of one UD element for this production lens.

The patent's Numerical Embodiment 3 table includes six optical columns. The five columns with image height 13.66 mm are used here as zoom interpolation positions: 56.80, 74.27, 135.16, 203.01, and 241.32 mm. The final f = 57.92 mm column has image height 0.00 mm. It is therefore treated as a zero-field auxiliary prescription column and retained in verification, but it is not used as a rendered zoom position.

A minor numerical inconsistency appears in the patent table: the BF row for the 135.16 mm column reads 57.35 mm, but the same table gives d28 = 57.95 mm. Independent paraxial tracing gives a back focal distance of 57.90 mm for that column, so d28 = 57.95 mm is the internally consistent value and is used in the data file.

## Optical Architecture

The design is a six-unit APS-C telephoto zoom with a positive-negative-positive-positive-negative-positive power distribution:

| Unit |    Power | Computed focal length | Elements | Air-separated groups | Function                                        |
| ---- | -------: | --------------------: | -------: | -------------------: | ----------------------------------------------- |
| L1   | Positive |            +126.38 mm |        3 |                    2 | Front collector and main zoom-moving front unit |
| L2   | Negative |             -26.32 mm |        3 |                    2 | Optical image-stabilizing unit                  |
| L3   | Positive |             +44.00 mm |        3 |                    2 | Converging relay and stop-side correction       |
| L4   | Positive |             +42.70 mm |        3 |                    3 | Positive relay after the aperture stop          |
| L5   | Negative |             -35.50 mm |        2 |                    2 | Rear focus unit                                 |
| L6   | Positive |            +129.41 mm |        1 |                    1 | Weak rear field-correction group                |

During zooming from wide angle to telephoto, L1 moves toward the object side, L2 remains stationary, and L3, L4, L5, and L6 move toward the object side. The L1-L2 interval increases from 5.87 mm to 60.87 mm, while the L2-L3 interval decreases from 24.92 mm to 1.50 mm. That is the core variator behavior of the patent: the front positive unit and fixed negative IS unit expand the front separation, while the positive relay units move forward to maintain image formation.

The aperture stop is placed after L3. In the data file it is labeled `STO`, corresponding to patent surface 16. The stop-to-L4 gap is variable; in the five full-field columns it runs 19.96, 17.26, 13.68, 14.94, and 16.56 mm. That non-monotonic movement is preserved in the data file.

At the long end, the total lens length is 208.89 mm and the computed design EFL is 241.14 mm, giving TL/EFL = 0.866. The long-end form is therefore genuinely telephoto by the TL/EFL < 1 criterion. At the wide end, the back focal distance is 38.57 mm and the design focal length is 56.80 mm, giving BFD/EFL = 0.679; the lens is not a retrofocus wide-angle design, but a telephoto zoom that maintains adequate EF-S SLR back clearance.

## Element-by-Element Analysis

### L11 — Plano-Convex Positive

nd = 1.48749, νd = 70.2. Glass: S-FSL5 (OHARA). f = +145.05 mm.

L11 is the front positive collector. Its front surface has moderate positive curvature and its rear surface is plane. The low-dispersion S-FSL5 glass reduces the axial color burden created at the largest beam diameter in the lens.

The patent lists a 41.04 mm effective diameter for the first surface. That value is a full clear diameter, not a semi-diameter; the data file therefore stores 20.52 mm for the surface semi-diameter.

### L12 + L13 — Cemented L1 Achromatizing Doublet

L12: nd = 1.65412, νd = 39.7. Glass: S-NBH5 (OHARA). f = -97.08 mm.  
L13: nd = 1.48749, νd = 70.2. Glass: S-FSL5 (OHARA). f = +87.73 mm.  
Doublet focal length: +1048.45 mm.

This cemented doublet has very weak net positive power. Its main function is chromatic correction inside L1 rather than first-order power generation. L12 supplies the negative flint component and L13 supplies the low-dispersion positive crown component.

The catalog match for L12 is S-NBH5. The stored patent pair is nd = 1.65412 and νd = 39.7, corresponding to glass code 654397. OHARA identifies this as S-NBH5, cross-referenced to Schott N-KZFS5 and Hoya E-ADF50.

### L21 + L22 — Cemented IS Doublet

L21: nd = 1.71300, νd = 53.9. Glass: S-LAL8 (OHARA). f = -24.39 mm.  
L22: nd = 1.80809, νd = 22.8. Glass: S-NPH1 (OHARA). f = +40.93 mm.  
Doublet focal length: -56.71 mm.

L21 and L22 form the cemented front doublet of the image-stabilizing second unit. L21 is the strong negative member. L22 is a high-dispersion positive member whose material is explicitly governed by the patent's conditional expressions (4) and (5): νd < 24 and positive anomalous partial dispersion relative to the normal line.

For Numerical Embodiment 3 the patent lists θgF = 0.6307 and the expression value θgF - 0.6438 + 0.001682 × νd = 0.025. This value is stored in the data file as `dPgF: 0.025` for L22.

### L23 — Plano-Concave Negative

nd = 1.80400, νd = 46.6. Glass: S-LAH65V (OHARA). f = -50.92 mm.

L23 completes the negative-positive-negative structure of L2. Its rear surface is nearly plane, with R = 66857.597 mm. Together with the cemented doublet, L23 brings the unit focal length to -26.32 mm.

S-LAH65V is a dense lanthanum flint by Abbe number: νd = 46.6 places it in the flint region despite the lanthanum family name.

### L31 — Biconvex Positive

nd = 1.80400, νd = 46.6. Glass: S-LAH65V (OHARA). f = +49.73 mm.

L31 is the main positive power element of L3. It begins reconverging the beam after the fixed negative IS unit. Its high refractive index permits the required power without extreme curvatures.

L31 uses the same S-LAH65V glass as L23, but with opposite sign of optical power. This is a common economy and aberration-balancing pattern in compact zoom designs.

### L32 + L33 — Cemented UD Correction Doublet

L32: nd = 1.49700, νd = 81.5. Glass: S-FPL51 (OHARA). f = +38.58 mm.  
L33: nd = 1.90366, νd = 31.3. Glass: S-LAH95 (OHARA). f = -38.55 mm.  
Doublet focal length: +645.32 mm.

This is the principal secondary-spectrum correction pair in the design. L32 is the single UD fluorophosphate element. L33 is a dense lanthanum flint with high index and much lower Abbe number. The dispersion spread is approximately Δνd = 50.2.

The doublet's net focal length is very weak, confirming that it is primarily a chromatic corrector rather than a power generator. L31 supplies the main L3 power; the L32-L33 doublet shapes chromatic and residual spherical behavior before the aperture stop.

The dense-flint catalog match for L33 is S-LAH95. The patent pair nd = 1.90366 and νd = 31.3 corresponds to code 904313, which OHARA lists as S-LAH95.

### L41 — Biconcave Negative

nd = 1.80610, νd = 33.3. Glass: NBFD15 (HOYA). f = -33.53 mm.

L41 is the leading negative element in the positive fourth unit. Its strong negative power, placed immediately after the aperture stop and variable stop-to-L4 gap, balances spherical aberration and coma in the post-stop converging bundle.

The catalog match is Hoya NBFD15. The patent pair nd = 1.80610 and νd = 33.3 corresponds to code 806333. Hoya identifies NBFD15 as nd = 1.80610 and νd = 33.27.

### L42 — Biconvex Positive

nd = 1.72916, νd = 54.7. Glass: S-LAL18 (OHARA). f = +33.37 mm.

L42 is the main positive element of L4. It counteracts the negative L41 and provides the unit's net positive power. The L3 and L4 unit focal lengths, +44.00 mm and +42.70 mm, are deliberately close; the patent's condition (6) requires this positive power split to remain in a controlled range.

### L43 — Positive Meniscus

nd = 1.65844, νd = 50.9. Glass: S-BSM25 (OHARA). f = +48.00 mm.

L43 is a secondary positive relay element. Its weak rear curvature and moderate index help smooth the output from L4 into the focus group.

The catalog match is S-BSM25. The patent pair nd = 1.65844 and νd = 50.9 corresponds to code 658509, listed by OHARA as S-BSM25 and cross-referenced to Schott N-SSK5.

### L51 — Positive Meniscus

nd = 1.76182, νd = 26.5. Glass: S-TIH14 (OHARA). f = +77.49 mm.

L51 is the positive element in the negative rear-focus group. Its high dispersion is not accidental: in a net negative achromatized group, the positive component can carry higher dispersion while the negative component carries lower dispersion, reversing the usual positive-group achromat pattern.

### L52 — Biconcave Negative

nd = 1.69680, νd = 55.5. Glass: S-LAL14 (OHARA). f = -23.74 mm.

L52 supplies most of the negative power of L5. The two-element L5 group has a computed focal length of -35.50 mm and a center track of only 4.42 mm, making it suitable for rear focusing by a compact STM mechanism.

During focusing from infinity to a short distance, L5 moves toward the image side. The patent does not publish a full set of close-focus variable spacings for the five full-field zoom positions, so the data file models the verified infinity-focus zoom spacings and stores the production minimum focusing distance as metadata.

### L61 — Positive Meniscus

nd = 1.54072, νd = 47.2. Glass: S-TIL2 (OHARA). f = +129.41 mm.

L61 is a weak positive rear element. In Numerical Embodiment 3 it moves during zooming, unlike Embodiments 1 and 2 where L6 remains fixed. Its role is rear field correction and fine control of image-side convergence across the zoom range.

The catalog match is S-TIL2. OHARA S-TIL2 has code 541472, nd = 1.54072, and νd = 47.23, matching the patent pair to transcription precision.

## Glass Identification and Selection

The glass identifications are as follows:

| Element |      nd |   νd | Corrected glass identification | Vendor | Notes                                             |
| ------- | ------: | ---: | ------------------------------ | ------ | ------------------------------------------------- |
| L11     | 1.48749 | 70.2 | S-FSL5                         | OHARA  | Low-dispersion front positive                     |
| L12     | 1.65412 | 39.7 | S-NBH5                         | OHARA  | Code 654397; KZFS-family flint                    |
| L13     | 1.48749 | 70.2 | S-FSL5                         | OHARA  | Low-dispersion crown component                    |
| L21     | 1.71300 | 53.9 | S-LAL8                         | OHARA  | Negative member of IS doublet                     |
| L22     | 1.80809 | 22.8 | S-NPH1                         | OHARA  | High-dispersion positive IS element; θgF = 0.6307 |
| L23     | 1.80400 | 46.6 | S-LAH65V                       | OHARA  | Dense lanthanum flint                             |
| L31     | 1.80400 | 46.6 | S-LAH65V                       | OHARA  | Positive relay element                            |
| L32     | 1.49700 | 81.5 | S-FPL51                        | OHARA  | UD fluorophosphate element                        |
| L33     | 1.90366 | 31.3 | S-LAH95                        | OHARA  | Dense lanthanum flint; code 904313                |
| L41     | 1.80610 | 33.3 | NBFD15                         | HOYA   | Code 806333; no exact OHARA match used here       |
| L42     | 1.72916 | 54.7 | S-LAL18                        | OHARA  | Positive L4 relay element                         |
| L43     | 1.65844 | 50.9 | S-BSM25                        | OHARA  | Code 658509                                       |
| L51     | 1.76182 | 26.5 | S-TIH14                        | OHARA  | Positive high-dispersion focus element            |
| L52     | 1.69680 | 55.5 | S-LAL14                        | OHARA  | Negative low-dispersion focus element             |
| L61     | 1.54072 | 47.2 | S-TIL2                         | OHARA  | Rear field-correction element                     |

Several catalog entries are tightly constrained by their six-digit glass code rather than by family names alone. This is particularly important for L12 (654397), L33 (904313), L41 (806333), L43 (658509), and L61 (541472), where nearby family labels can lead to incorrect glass assignments.

The chromatic strategy uses three main levers. First, L1 uses a weak cemented S-NBH5/S-FSL5 doublet to correct the front positive unit. Second, L3 uses the S-FPL51/S-LAH95 UD doublet to correct secondary spectrum near the stop. Third, L2 uses S-NPH1 as a high-dispersion positive element inside the negative IS unit, satisfying the patent's anomalous-partial-dispersion condition while keeping the moving stabilizer compact.

## Focus Mechanism

The production lens uses rear focus, and the patent identifies L5 as the focus unit. During focusing from infinity to short distance, L5 moves toward the image side. Canon's official specifications give a minimum focusing distance of 0.85 m and maximum magnification of 0.29× at 250 mm.

The full-field infinity-focus variable spacings used in the data file are:

| Gap            | 56.80 mm | 74.27 mm | 135.16 mm | 203.01 mm | 241.32 mm |
| -------------- | -------: | -------: | --------: | --------: | --------: |
| d5: L1-L2      |     5.87 |    19.11 |     43.27 |     56.30 |     60.87 |
| d10: L2-L3     |    24.92 |    20.90 |     11.82 |      4.95 |      1.50 |
| d16/STO: L3-L4 |    19.96 |    17.26 |     13.68 |     14.94 |     16.56 |
| d22: L4-L5     |     4.10 |     3.85 |      3.40 |      2.60 |      2.05 |
| d26: L5-L6     |    11.86 |    12.11 |     12.56 |     13.36 |     13.91 |
| d28/BF         |    38.57 |    45.28 |     57.95 |     63.56 |     65.38 |

Because the patent does not give complete close-focus spacing columns corresponding to these five full-field positions, focus travel is not parameterized as a variable spacing model. The data file stores 0.85 m as the production close-focus metadata and preserves the verified infinity-focus zoom behavior.

## Aspherical Surfaces

This design contains no aspherical surfaces. The patent's Numerical Embodiment 3 prescription lists spherical radii only and provides no aspherical coefficient table. The data file therefore uses `asph: {}`.

The absence of aspheres is plausible for this design: the lens uses a comparatively high element count, a UD element, and a dense glass palette to control aberrations without molded or hybrid aspherical surfaces.

## Image Stabilization

L2 is the image-stabilizing unit. It consists of three elements in a negative-positive-negative sequence: L21, L22, and L23. During stabilization, L2 translates with a component perpendicular to the optical axis, shifting the image position to compensate for camera shake. Canon rates the production IS unit at up to 3.5 equivalent stops.

The patent's decentering-aberration discussion explains why a positive-negative-positive arrangement around the moving unit is useful. L1, L2, and L3 form the positive-negative-positive core, and the negative L2 group is selected as the laterally moving image-stabilizing unit. The patent also states that keeping L2 stationary during zooming avoids a larger moving mechanical member around the image-stabilizing unit.

The L2 focal length is -26.32 mm. With fw = 56.80 mm, |fvi|/fw = 0.46, satisfying the patent's condition (3). This places the IS group in the middle of the claimed sensitivity range: strong enough to move the image with modest group shift, but not so strong that decentering aberrations become excessive for a three-element moving unit.

## Conditional Expressions

Numerical Embodiment 3 satisfies the patent's seven listed conditional expressions:

| Expression | Formula or governed parameter | Embodiment 3 value | Patent range or requirement |
| ---------- | ----------------------------- | -----------------: | --------------------------: |
| (1)        | abs(ΔL1) / fw                 |               0.97 |                   0.85-1.10 |
| (2)        | f1 / fw                       |               2.23 |                   2.10-2.80 |
| (3)        | abs(fvi) / fw                 |               0.46 |                   0.28-0.60 |
| (4)        | νd of positive IS element     |               22.8 |                        < 24 |
| (5)        | θgF - 0.6438 + 0.001682 × νd  |              0.025 |                 0.015-0.100 |
| (6)        | f3 / f4                       |               1.03 |                   0.80-1.10 |
| (7)        | SKw / fw                      |               0.68 |                   0.58-0.90 |

Condition (1) reflects the large front-unit travel used to obtain the 4.25× zoom ratio while keeping the image-stabilizing second unit small. Condition (2) constrains the front positive unit so it is neither too weak nor too sensitive to manufacturing error. Conditions (4) and (5) define the special high-dispersion positive glass in the IS unit. Condition (6) describes the close positive-power split between L3 and L4. Condition (7) preserves enough wide-end back focus for an SLR camera body without excessive total length.

## Petzval Sum and Field Curvature

The Petzval sum is computed surface by surface using φ/(n·n′), rather than by a thin-element approximation. The unit contributions are:

| Unit      | Petzval contribution (mm^-1) |
| --------- | ---------------------------: |
| L1        |                    +0.005944 |
| L2        |                    -0.021898 |
| L3        |                    +0.015333 |
| L4        |                    +0.013614 |
| L5        |                    -0.017462 |
| L6        |                    +0.004963 |
| **Total** |                **+0.000493** |

The corresponding Petzval radius is approximately 2028 mm. At the patent image height of 13.66 mm, the simple Petzval sag estimate is approximately 0.046 mm. The field flattening is therefore produced by the cancellation of the negative L2 and L5 contributions against the positive contributions from L1, L3, L4, and L6.

## Verification Summary

Independent paraxial ray tracing confirms the Numerical Embodiment 3 transcription. The following EFL values are computed from the spherical prescription and the five full-field zoom columns:

|    Zoom column | Patent focal length | Computed EFL | Difference |
| -------------: | ------------------: | -----------: | ---------: |
|           Wide |            56.80 mm |     56.79 mm |   -0.01 mm |
| Intermediate 1 |            74.27 mm |     74.26 mm |   -0.01 mm |
| Intermediate 2 |           135.16 mm |    135.11 mm |   -0.05 mm |
| Intermediate 3 |           203.01 mm |    202.93 mm |   -0.08 mm |
|      Telephoto |           241.32 mm |    241.14 mm |   -0.18 mm |

The computed unit focal lengths also match the patent's unit table:

| Unit | Patent focal length | Computed focal length | Difference |
| ---- | ------------------: | --------------------: | ---------: |
| L1   |          +126.40 mm |            +126.38 mm |   -0.02 mm |
| L2   |           -26.32 mm |             -26.32 mm |    0.00 mm |
| L3   |           +44.00 mm |             +44.00 mm |    0.00 mm |
| L4   |           +42.70 mm |             +42.70 mm |    0.00 mm |
| L5   |           -35.50 mm |             -35.50 mm |    0.00 mm |
| L6   |          +129.41 mm |            +129.41 mm |    0.00 mm |

The zero-field auxiliary column also traces consistently: the computed EFL is 57.90 mm against the patent's 57.92 mm, and the computed back focal distance is 39.02 mm against d28 = 39.06 mm. It remains excluded from `zoomPositions` because its image height is 0.00 mm and it is not a full-field zoom state.

Element edge-thickness checks using the patent effective diameters divided by two all remain positive. The smallest computed edge thickness is above 1.0 mm, so the patent-listed clear apertures are geometrically usable as rendered semi-diameters after converting full diameter to half diameter. Cross-gap sag checks also pass at the rendered semi-diameters, including the thin 0.36 mm L41-L42 gap and the 0.10 mm L42-L43 gap.

## Sources

1. US Patent Application Publication US 2014/0211029 A1, Tetsuichirou Okumura / Canon Kabushiki Kaisha, "Zoom Lens and Image Pickup Apparatus Including the Same," published July 31, 2014. Uploaded patent PDF used for the numerical prescription and patent paragraphs.
2. Canon U.S.A., EF-S 55-250mm f/4-5.6 IS STM official product specifications: https://www.usa.canon.com/shop/p/ef-s-55-250mm-f-4-5-6-is-stm
3. Canon EF-S55-250mm f/4-5.6 IS STM instruction manual, specifications page: https://gdlp01.c-wss.com/gds/8/0300012888/01/efs55-250f4-56isstm-im-eng.pdf
4. OHARA INC., Optical Glass Type master list: https://www.ohara-inc.co.jp/en/product/01000/
5. OHARA Corporation, S-FSL5 product page: https://oharacorp.com/glass/s-fsl5/
6. OHARA Corporation, S-NBH5 product page: https://oharacorp.com/glass/s-nbh5/
7. OHARA Corporation, S-TIL2 product page: https://oharacorp.com/glass/s-til2/
8. OHARA comparative glass table, including cross-references for S-NBH5 and S-BSM25: https://www.ohara-inc.co.jp/en/product/01002/
9. HOYA Corporation, NBFD15 / NBFD15-W optical glass data: https://www.hoya-opticalworld.com/english/pdf/NBFD15-W_FD60-W_120524.pdf
