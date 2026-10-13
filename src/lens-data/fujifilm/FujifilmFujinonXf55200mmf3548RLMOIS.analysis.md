# FUJIFILM FUJINON XF 55-200mm f/3.5-4.8 R LM OIS — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** DE 11 2013 006 887 B4\
**PCT application:** PCT/JP2013/007607\
**Priority:** JP 2013-065916, 27 March 2013; JP 2013-196515, 24 September 2013\
**Filed:** 26 December 2013\
**PCT published:** WO 2014/155463, 2 October 2014\
**Granted / published as the transcribed German source:** 1 February 2018\
**Inventors:** Tetsuya Ori; Michio Cho\
**Assignee:** Fujifilm Corporation\
**Title:** *Zoomobjektiv und Abbildungsvorrichtung* (*Zoom lens and imaging apparatus*)\
**Embodiment analyzed:** Example 1

The LensVisualizer prescription transcribes Example 1 of DE 11 2013 006 887 B4 at its native patent scale. The patent does not identify Example 1 by the retail product name. The association with the **FUJIFILM FUJINON XF 55-200mm f/3.5-4.8 R LM OIS** is therefore a fixed project correlation, not a statement of manufacturer confirmation.

Several independent features support that correlation:

1. Example 1 contains 14 glass elements arranged in ten air-separated physical units, matching FUJIFILM's published 14-element/10-group construction for the production lens.
2. The patent example has one double-sided aspherical element, L31, while FUJIFILM specifies one aspherical element in the production lens.
3. Two patent glass coordinates are exact matches to very-low-dispersion catalog glasses: L13 at nd = 1.49700, νd = 81.54 matches OHARA S-FPL51, and L32 at nd = 1.43875, νd = 94.93 matches OHARA S-FPL53. FUJIFILM states that the production lens contains two ED elements, one of them Super ED. The element-to-marketing-designation mapping is an inference; FUJIFILM does not publish a patent-element mapping.
4. The Example 1 focal-length, maximum-aperture, and field endpoints lie close to the marketed 55-200 mm, f/3.5-4.8, 29.0°-8.1° specification, but they are not numerically identical.
5. The patent assigns axial focusing to G4 and transverse image-stabilization motion to G2 (¶¶0068-0070; claims 5-6). The production lens is a linear-motor autofocus lens with optical image stabilization.
6. The first Japanese priority date, 27 March 2013, precedes FUJIFILM's documented 25 May 2013 product release by about two months, placing the optical work in the correct development period.

The production and design quantities are deliberately kept separate:

| Quantity | FUJIFILM marketed specification | Example 1 source values | Final modeled / computed values |
|---|---:|---:|---:|
| Focal length | 55-200 mm | 56.68 / 104.94 / 194.28 mm | 56.698317505 / 104.973001275 / 194.337932167 mm |
| Maximum f-number | f/3.5-f/4.8 | 3.56 / 4.17 / 4.98 | 3.563144254 / 4.169123177 / 4.976648717 |
| Full field | 29.0°-8.1° | 27.8° / 15.0° / 8.2° | source field retained; no exact image-height row is published |
| Minimum focus distance | 1.1 m | no finite-focus spacing table | 1.1 m constrained reconstruction |
| Maximum magnification | 0.18× at tele | not published for finite focus | 0.182814155× at reconstructed tele close focus |

No uniform scaling is applied. Matching the wide patent focal length to 55 mm and the tele patent focal length to 200 mm would require materially different scale factors, so the optical prescription remains at the Example 1 scale. Consequently, no dimensional rescaling or aspheric-coefficient scaling is performed.

## Optical Architecture

Example 1 is a six-functional-group positive-negative-positive-positive-negative-positive zoom, written in the patent as G1(+), G2(-), G3(+), G4(+), G5(-), and G6(+). The aperture stop lies between G2 and G3. The patent states that all five adjacent group spacings change during zooming (¶¶0043-0046), distributing magnification change across the system rather than assigning it to one variator alone.

The six patent functional groups should not be confused with the production-style physical group count. Cementing reduces the 14 elements to ten air-separated physical units, which is the `groupCount: 10` stored in the data file. The functional zoom groups are the larger kinematic units used by the patent.

Independent isolated-group calculations from the final prescription give the following first-order powers. These are isolated group properties in air, not the groups' complete in-situ contributions inside the zoom:

| Functional group | Isolated EFL | Power sign | Principal function in this model |
|---|---:|---|---|
| G1 | +107.174375 mm | positive | front collector / positive lead |
| G2 | -24.967201 mm | negative | principal negative variator and OIS group |
| G3 | +42.183279 mm | positive | post-stop converging and aberration-correction group |
| G4 | +56.839321 mm | positive | translating inner-focus group |
| G5 | -43.092590 mm | negative | rear negative compensating group |
| G6 | +113.976082 mm | positive | fixed rear relay / chief-ray-angle moderation |

The patent describes G1's positive power as favorable for shortening overall length, G2's negative power as carrying a large share of the zooming function, the positive G3/G4 pair as useful for controlling aberration changes with zoom, the negative G5 as another length-reduction degree of freedom, and the positive G6 as useful for moderating off-axis chief-ray incidence at the image plane (¶0044).

Relative to the final modeled image plane, the wide-to-tele group-front shifts are objectward by 58.189 mm for G1, 20.821 mm for G2, 32.710 mm for G3, 12.771 mm for G4, and 24.719 mm for G5. G6 remains fixed. The stop tracks G3 with a fixed 1.000 mm stop-to-S12A spacing. These kinematics reproduce the Example 1 trajectory logic in Fig. 1 and ¶0046.

Using the final active-equivalent image-plane reference, total track divided by EFL is 2.302 at wide, 1.547 at the intermediate station, and 0.971 at tele. Under the project's strict definition `TL/EFL < 1`, the modeled system qualifies as telephoto only at the tele endpoint. The patent's broader description of the invention as a tele-type zoom is retained as source terminology rather than substituted for that quantitative test.

The source includes a rear plane-parallel member PP representing sensor cover glass and filters (¶0042). Those planes are not active lens elements under the LensVisualizer data specification. S26-S31 are therefore omitted, and their first-order optical effect is represented by a verified 23.313560574 mm air-equivalent spacing from S25 to the image plane.

## Element-by-Element Analysis

The focal lengths quoted below are **standalone element focal lengths in air**, as stored in the final data file. They should not be read as additive contributions to the complete zoom. For the four cemented units, independent isolated-in-air net calculations give D1 (L12+L13) = +327.707547 mm, D2 (L22+L23) = -65.278362 mm, D3 (L41+L42) = +56.839321 mm, and D4 (L51+L52) = -43.092590 mm. Their in-situ behavior additionally depends on surrounding group spacings and the power of the rest of the optical train.

### L11 — Plano-Convex Positive

**nd = 1.58913, νd = 61.14. Glass: S-BAL35 (OHARA; coordinate match, supplier unspecified). Standalone f = +158.636803 mm.**

L11 is the separated front positive element of G1. Its plane rear face and moderately curved front face make it the initial positive collector. The patent specifies that G1 begins with a positive lens followed by a cemented negative-positive pair and identifies that arrangement as favorable for controlling longitudinal chromatic aberration and wavelength-dependent spherical aberration toward the tele end (¶0048).

The S-BAL35 name is a catalog-coordinate identification, not evidence that FUJIFILM purchased this exact OHARA melt. The compatible S-BAL35 curve supplies dispersion at runtime; no catalog line indices are copied into the prescription.

### L12 — Negative Meniscus, D1 Front Component

**nd = 1.58144, νd = 40.75. Glass: S-TIL25 (OHARA; coordinate match, supplier unspecified). Standalone f = -104.283111 mm.**

L12 is the negative component of the G1 cemented pair D1. Its lower Abbe number than L13 gives the pair the dispersion contrast expected of the patent's front achromatizing structure. The patent describes the negative member as a meniscus with its convex side toward the object (¶0048), consistent with the transcribed radii.

Its standalone negative focal length describes L12 alone in air. Once cemented to L13, the two-element unit is weakly positive overall, with the verified isolated D1 EFL of +327.707547 mm.

### L13 — Positive Meniscus, D1 Rear Component

**nd = 1.49700, νd = 81.54. Glass: S-FPL51 (OHARA; coordinate match, supplier unspecified). Standalone f = +78.517681 mm.**

L13 completes the D1 cemented pair. Its high Abbe number supplies a strong dispersion contrast against L12, while its positive power restores the sign of the cemented pair. This is directly aligned with the chromatic-correction role attributed by the patent to the negative-positive cemented portion of G1 (¶0048).

The compatible S-FPL51 curve supports treating the modeled analogue as a low-dispersion glass with anomalous partial dispersion. They do not prove the production element's vendor or its retail ED designation.

### L21 — Biconcave Negative

**nd = 1.88300, νd = 40.76. Glass: S-LAH58 (OHARA; coordinate match, supplier unspecified). Standalone f = -41.781455 mm.**

L21 is the first element of the strongly negative G2 variator. The patent's preferred G2 form begins with a biconcave element whose image-side surface is the more strongly curved of the pair (¶0049), which is exactly the Example 1 geometry.

Because G2 also serves as the transverse stabilization group in the patent, L21 participates in a group whose aberrations must remain controlled not only through zooming but also under decenter. No numerical decenter is modeled because the embodiment does not publish one.

### L22 — Biconcave Negative, D2 Front Component

**nd = 1.72916, νd = 54.68. Glass: S-LAL18 (OHARA legacy; coordinate match, supplier unspecified). Standalone f = -27.103509 mm.**

L22 is the negative front member of the cemented D2 pair. The 1.72916/54.68 coordinate matches the legacy S-LAL18 coordinate; the current S-LAL18N entry has a slightly different Abbe number and is not silently substituted.

Together with L23, L22 forms the cemented portion of G2 described in ¶0049. The isolated D2 unit remains negative, with verified EFL -65.278362 mm, while the complete G2 is considerably stronger at -24.967201 mm because L21 precedes it as a separate negative singlet.

### L23 — Positive Meniscus, D2 Rear Component

**nd = 1.92286, νd = 20.88. Glass: 923209 - dense flint class (supplier unresolved). Standalone f = +46.597927 mm.**

L23 is the high-index, high-dispersion positive member cemented to L22. Its role is not captured by its positive standalone power alone: in the D2 cemented combination it moderates the negative pair while introducing a large dispersion contrast.

The coordinate pair has multiple exact catalog equivalents, so the final data deliberately uses a neutral six-digit/class description rather than asserting a vendor. No catalog `nC`, `nF`, `ng`, or `dPgF` is authored for this element; consequently no element-specific anomalous-dispersion claim is made for L23.

### L31 — Positive Meniscus, Double-Sided Asphere

**nd = 1.72777, νd = 40.33. Glass: D-LAF79-25 compatible spectral proxy; supplier unspecified. Standalone f = +54.543964 mm.**

L31 is the first element after the aperture stop and the only aspherical element in Example 1. Both faces, 12A and 13A, are aspherical. The patent specifically identifies a positive front element in G3 with two aspherical surfaces as advantageous for spherical-aberration correction (¶0052).

The CDGM D-LAF79-25 catalog curve is a compatible proxy at nd = 1.72986 and νd = 40.497566. The residuals are within the shared coordinate guard. This does not establish the patent material's composition, annealing state, or supplier; the original optical coordinates remain unchanged.

### L32 — Biconvex Positive

**nd = 1.43875, νd = 94.93. Glass: S-FPL53 (OHARA; coordinate match, supplier unspecified). Standalone f = +40.005886 mm.**

L32 is the central strong positive element of G3. Its very low index and exceptionally high Abbe number provide a large chromatic degree of freedom inside a group otherwise containing higher-index, more dispersive materials.

The matched S-FPL53 catalog curve supplies dispersion at runtime and supports characterizing the analogue as an anomalous-partial-dispersion low-dispersion glass. As with L13, the catalog match does not by itself establish FUJIFILM's production supplier or prove which patent element carried the retail "Super ED" designation.

### L33 — Negative Meniscus

**nd = 1.84666, νd = 23.78. Glass: S-TIH53 (OHARA; coordinate match, supplier unspecified). Standalone f = -48.601495 mm.**

L33 closes G3 as the negative meniscus specified by the patent. Paragraph 0052 states that a negative meniscus with its concave surface toward the image side is useful at the rear of G3 for suppressing higher-order spherical aberration, helping make a relatively small f-number practical.

Its high index and low Abbe number contrast sharply with L32. Its modeled dispersion comes from the compatible S-TIH53 catalog curve, not patent-published line indices.

### L41 — Biconvex Positive, D3 Front / Focus Component

**nd = 1.74320, νd = 49.34. Glass: S-LAM60 (OHARA; coordinate match, supplier unspecified). Standalone f = +23.839719 mm.**

L41 is the positive member of the G4 cemented focusing doublet D3. The patent states that G4 may consist of a cemented biconvex-positive plus biconcave-negative pair and associates this form with reduced focus-induced variation of spherical aberration and astigmatism (¶0053).

The strong standalone positive power of L41 is moderated by L42. The complete cemented G4 unit has verified isolated EFL +56.839321 mm and translates as one group in the finite-focus reconstruction.

### L42 — Biconcave Negative, D3 Rear / Focus Component

**nd = 1.80100, νd = 34.97. Glass: S-LAM66 (OHARA; coordinate match, supplier unspecified). Standalone f = -38.487262 mm.**

L42 completes the positive G4 focusing doublet. Its negative power and lower Abbe number counterbalance L41 both in power and chromatic response. Because the two elements are cemented, no internal air spacing is introduced during focus; the entire D3 assembly translates axially.

The compatible S-LAM66 catalog curve supplies modeled dispersion without an authored partial-dispersion override.

### L51 — Plano-Convex Positive, D4 Front Component

**nd = 1.92286, νd = 18.90. Glass: S-NPH2 (OHARA; coordinate match, supplier unspecified). Standalone f = +73.884446 mm.**

L51 is the positive front member of G5. Example 1 uses the patent's described plano-convex-plus-biconcave form for this negative functional group (¶0055). Its very high index and very low Abbe number make it a strongly dispersive positive component.

The S-NPH2 curve supplies modeled dispersion. The optical role of G5 remains that of a net negative cemented unit rather than a positive singlet: D4 has verified isolated EFL -43.092590 mm.

### L52 — Biconcave Negative, D4 Rear Component

**nd = 1.72916, νd = 54.68. Glass: S-LAL18 (OHARA legacy; coordinate match, supplier unspecified). Standalone f = -27.052498 mm.**

L52 supplies the negative power that makes G5 net negative. The patent identifies this group form as useful for correcting astigmatism toward the tele end (¶0055).

Its glass coordinate is the same legacy S-LAL18 match used by L22, so the same catalog and supplier caveats apply. The repetition also gives the designer a consistent moderate-dispersion lanthanum-crown component in two different negative cemented groups.

### L61 — Plano-Convex Positive

**nd = 1.48749, νd = 70.23. Glass: S-FSL5 (OHARA; coordinate match, supplier unspecified). Standalone f = +113.976082 mm.**

L61 is the single positive element of G6 and remains fixed relative to the image plane through the three published zoom stations. Paragraphs 0044 and 0047 associate the rear positive group with moderating chief-ray incidence and, when fixed, with reducing zoom-dependent variation of lateral color and distortion.

The final data uses the source-compatible plano-convex form described in ¶0056. The compatible S-FSL5 curve supplies its modeled dispersion.

## Glass Identification and Selection

The patent publishes `nd` and `νd` coordinates, not supplier names. The final glass annotations therefore separate the source optical coordinate from the catalog-resolution result. All fourteen elements resolve to compatible catalog curves. L31 uses a close coordinate proxy rather than an exact match. Exact coordinate agreement does not prove which supplier FUJIFILM used.

| Element(s) | Final glass annotation | nd | νd | Spectral annotation in data | Identification status |
|---|---|---:|---:|---|---|
| L11 | S-BAL35 (OHARA; coordinate match, supplier unspecified) | 1.58913 | 61.14 | catalog curve | exact coordinate; supplier unspecified |
| L12 | S-TIL25 (OHARA; coordinate match, supplier unspecified) | 1.58144 | 40.75 | catalog curve | exact coordinate; supplier unspecified |
| L13 | S-FPL51 (OHARA; coordinate match, supplier unspecified) | 1.49700 | 81.54 | catalog curve | exact coordinate; supplier unspecified |
| L21 | S-LAH58 (OHARA; coordinate match, supplier unspecified) | 1.88300 | 40.76 | catalog curve | exact coordinate; supplier unspecified |
| L22, L52 | S-LAL18 (OHARA legacy; coordinate match, supplier unspecified) | 1.72916 | 54.68 | catalog curve | exact legacy coordinate; supplier unspecified |
| L23 | 923209 - dense flint class | 1.92286 | 20.88 | catalog curve | compatible coordinate; supplier unresolved |
| L31 | D-LAF79-25 compatible spectral proxy | 1.72777 | 40.33 | catalog curve | Δnd = +0.00209; Δνd = +0.1676; supplier unspecified |
| L32 | S-FPL53 (OHARA; coordinate match, supplier unspecified) | 1.43875 | 94.93 | catalog curve | exact coordinate; supplier unspecified |
| L33 | S-TIH53 (OHARA; coordinate match, supplier unspecified) | 1.84666 | 23.78 | catalog curve | multiple exact equivalents; OHARA match retained |
| L41 | S-LAM60 (OHARA; coordinate match, supplier unspecified) | 1.74320 | 49.34 | catalog curve | exact coordinate; supplier unspecified |
| L42 | S-LAM66 (OHARA; coordinate match, supplier unspecified) | 1.80100 | 34.97 | catalog curve | multiple exact equivalents; OHARA match retained |
| L51 | S-NPH2 (OHARA; coordinate match, supplier unspecified) | 1.92286 | 18.90 | catalog curve | multiple exact equivalents; OHARA match retained |
| L61 | S-FSL5 (OHARA; coordinate match, supplier unspecified) | 1.48749 | 70.23 | catalog curve | exact coordinate; supplier unspecified |

The palette is unusually broad in dispersion. It includes high-Abbe FPL-class positive elements in G1 and G3, high-index dense flints in G2/G3/G5, and moderate-dispersion lanthanum-family glasses in the compensating cemented units. The engine evaluates the compatible catalog curves directly while preserving patent `nd`/`νd`. Copied catalog line indices and partial-dispersion fields are omitted; none are patent-measured evidence.

## Focus Mechanism

The patent assigns axial focusing to G4 (¶0068; claim 5) and states that the positive G4 moves toward the object as focus moves from infinity toward a near subject (¶0064). It does not publish finite-focus spacing rows for Example 1. The production specification supplies a 1.1 m minimum focus distance measured from the image-sensor plane.

The data file therefore labels its finite-focus model **CONSTRAINED_RECONSTRUCTION**. Only G4 translates. At each zoom station the G3-to-G5 envelope is preserved: `DD[17]` decreases by exactly the same amount that `DD[20]` increases. No second floating degree of freedom is introduced.

| Zoom station | DD[17] infinity → close | DD[20] infinity → close | G4 objectward travel | Computed |m| at 1.1 m |
|---|---:|---:|---:|---:|
| 56.68 mm | 6.488 → 4.949521 mm | 15.478 → 17.016479 mm | 1.538479 mm | 0.056318× |
| 104.94 mm | 15.986 → 11.892756 mm | 11.858 → 15.951244 mm | 4.093244 mm | 0.102587× |
| 194.28 mm | 26.427 → 16.280213 mm | 3.530 → 13.676787 mm | 10.146787 mm | 0.182814× |

The reconstructed tele magnification is close to FUJIFILM's rounded 0.18× production specification, but that agreement is a validation check, not proof that the retail cam follows this exact paraxial trajectory. The patent constrains the moving group and direction; the numeric close-focus spacings are model results.

FUJIFILM identifies the production lens as a linear-motor autofocus design. That drive-system fact is mechanical product metadata; it does not alter the one-degree-of-freedom optical reconstruction.

## Aspherical Surfaces

Example 1 has two aspherical surfaces, 12A and 13A, both on L31. The patent gives the sag form (¶0078)

`Zd = C h² / {1 + sqrt(1 - KA C² h²)} + Σ A_m h^m`, for `m = 3, 4, 5, ...`.

LensVisualizer uses the standard conic radical `sqrt(1 - (1 + K) C² h²)`. Therefore the source coefficient must be converted by

`K = KA - 1`.

For both Example 1 surfaces, `KA = 1.0000000`, so the stored standard conic constant is `K = 0`. This is a convention conversion, not a change to the physical surface. No scale transform is applied because the prescription is not rescaled.

| Coefficient | 12A | 13A |
|---|---:|---:|
| K | 0 | 0 |
| A3 | -1.2149980e-05 | +8.2860572e-07 |
| A4 | +4.7067069e-06 | +1.5620405e-05 |
| A5 | -3.4603603e-06 | +4.0098895e-07 |
| A6 | +4.1742359e-07 | -3.0524648e-07 |
| A7 | -1.8773629e-08 | +4.2803201e-08 |
| A8 | -1.2486166e-09 | -4.0112483e-10 |
| A9 | +9.5621054e-11 | -3.4720627e-10 |
| A10 | -5.6719225e-12 | +1.4077889e-11 |

The odd powers are powers of the radial height `h` and remain rotationally symmetric. `A12` and `A14` are stored as zero only because the current data schema requires those coefficient slots; the patent's Example 1 table publishes nonzero terms only through A10.

The patent attributes the double-sided asphere in G3 to spherical-aberration correction (¶0052). At the data file's verified 10.5 mm modeled semi-diameter, the polynomial departure from the spherical base is -0.231798030 mm on 12A and +0.066646927 mm on 13A. Those departures are computed at the modeled LensVisualizer aperture, not at a patent-published clear-aperture height; Example 1 publishes no semi-diameter table.

The patent does not establish the manufacturing process for L31. The data therefore models a single glass element with two aspherical faces and does not infer a hybrid resin layer or a particular molding process.

## Chromatic Correction Strategy

The patent explicitly links the G1 positive-plus-cemented-negative-positive arrangement to suppression of longitudinal chromatic aberration and wavelength-dependent spherical aberration at the tele end (¶0048). Example 1 implements that concept with the L12/L13 cemented pair behind L11. The large Abbe contrast between L12 (νd = 40.75) and L13 (νd = 81.54) provides the first major chromatic lever.

G3 adds a second very-low-dispersion positive element, L32 at νd = 94.93, between the aspheric L31 and high-index, low-Abbe negative meniscus L33. The compatible S-FPL51 and S-FPL53 curves provide anomalous partial dispersion for the modeled analogues. This supports discussion of the catalog curves, not an assertion of the production glass identities or patent-measured partial dispersion.

FUJIFILM describes the production lens as using two ED elements, including one Super ED element. The patent coordinates at L13 and L32 are consistent with that design strategy, but the analysis does not equate those elements to the production ED/Super-ED labels as a sourced fact. Nor does it make an APO claim: neither the patent nor the product literature used here establishes an apochromatic classification for this prescription.

The rear cemented groups use dispersion contrast differently. G4 combines S-LAM60 and S-LAM66-class coordinates in a net-positive focusing doublet, while G5 combines high-index S-NPH2-class positive power with the much higher-Abbe S-LAL18-class negative component to form a net-negative group. These combinations help distribute color correction rather than concentrating it solely in the two low-dispersion elements.

## Conditional Expressions

The patent defines the power ratio `f1/f2` and the wide-end G1-G2 spacing ratio `d1w/f1` as principal design conditions (¶¶0057-0067). Independent computation from the final TypeScript arrays gives

- `f1/f2 = -4.292606815544014`
- `d1w/f1 = 0.133725995360015`

Both values satisfy the base and preferred ranges:

| Condition | Patent range | Computed value | Result |
|---|---|---:|---|
| (1) | -5 < f1/f2 < -1.5 | -4.292606816 | pass |
| (1-1) | -4.8 < f1/f2 < -2.5 | -4.292606816 | pass |
| (1-2) | -4.6 < f1/f2 < -3.0 | -4.292606816 | pass |
| (2) | 0.04 < d1w/f1 < 0.3 | 0.133725995 | pass |
| (2-1) | 0.08 < d1w/f1 < 0.2 | 0.133725995 | pass |
| (2-2) | 0.11 < d1w/f1 < 0.2 | 0.133725995 | pass |

The German grant contains two numbering anomalies that are normalized only in interpretation. Claim 11 gives the `(2-1)` inequality but prints the equation tag `(24)`. Claim 13 describes the tighter inequality in prose as `(2-1)` while its inequality and printed tag are `(2-2)`; ¶0067 independently establishes that tighter range as `(2-2)`. No prescription number is altered to resolve these text-level errors.

The patent also contains a wording error in ¶0075, where the German text refers to the "signs of the refractive indices" while describing which surface convexities correspond to positive and negative signs. All refractive indices are positive, and the numerical tables show that the statement is plainly the radius-sign convention. The data retains the table radii and applies the ordinary sequential sign convention rather than changing any source value.

## Image Stabilization

The patent assigns image-blur correction to transverse movement of G2 (¶0069; claim 6). Paragraph 0070 explains the design rationale: G2 is already a strongly corrected negative group immediately behind positive G1, giving it useful stabilization sensitivity for a comparatively modest transverse displacement.

The production lens is explicitly an OIS model, which strengthens the product correlation. However, Example 1 gives no decenter amplitude, stabilization angle, or actuator travel. The LensVisualizer data therefore records G2 as the OIS group in labels and prose but does not synthesize an off-axis displacement state.

This distinction matters because a stabilization mechanism can be source-established while its numerical movement remains underdetermined. The current model preserves the published mechanism without inventing a stabilization range.

## Verification Summary

Independent verification of the final TypeScript arrays passes source transcription, dual paraxial formulations, determinant, focal-length agreement, stop/f-number consistency, all three constrained focus states, Petzval, patent conditions, spectral arithmetic, asphere conversion, zoom kinematics, geometry, and default-ray containment.

Key first-order results from the final arrays are:

| Check | Result |
|---|---:|
| EFL, wide / intermediate / tele | 56.698317505 / 104.973001275 / 194.337932167 mm |
| Modeled f-number, wide / intermediate / tele | 3.563144254 / 4.169123177 / 4.976648717 |
| Total Petzval sum, Σφ/(n·n′) | +0.002319178936819303 mm⁻¹ |
| Petzval reciprocal | 431.187083 mm |

The aperture-stop **position** is published: source S11, between G2 and G3. Its clear radius is not published. The data's `STO.sd = 9.460132942 mm` is an inferred common physical stop radius that reproduces the three rounded source f-numbers within 0.00336 f-number.

Likewise, the patent publishes no surface semi-diameters for Example 1. The S24/S25 rims are estimated from Fig. 1 at 14.5 mm; S16/S17 use 11.8 mm and G2 uses a geometry-limited 9.0 mm. The remaining `sd` values are modeled clear apertures derived from the verified ray envelope and constrained by edge-thickness, actual-rim-slope, conic-domain, cross-gap, and off-axis-containment checks. They are not presented as production mechanical dimensions.

The rear PP cover/filter member is intentionally excluded from the active prescription. Its verified first-order effect is retained through the 23.313560574 mm S25-to-image air-equivalent spacing. This keeps the image-plane reference consistent with the patent ray model while avoiding non-lens sensor/filter elements in the ordinary sequential prescription.

There is no uniform production scaling. The native Example 1 dimensions are retained, and the asphere polynomials are therefore not rescaled. The only asphere transformation is the source-convention conversion `K = KA - 1`.


## Sources

1. **Primary prescription:** DE 11 2013 006 887 B4, Example 1 — especially ¶¶0042-0079, Tables 1-3, Table 19, Fig. 1, Fig. 7, Fig. 8, and claims 1-16. Supplied project file: `DE112013006887B4.pdf`.
2. **FUJIFILM product page:** FUJINON XF55-200mmF3.5-4.8 R LM OIS, official Japanese X Series page: <https://www.fujifilm-x.com/ja-jp/products/lenses/xf55-200mmf35-48-r-lm-ois/>. Used for product identity, release date, production construction, and ED/Super ED description.
3. **FUJIFILM lens manual:** official XF10-24 / XF18-55 / XF55-200 manual: <https://dl.fujifilm-x.com/support/manual/lenses/lens_xf10-24_xf18-55_xf55-200_manual_02.pdf>. Used for 14-element/10-group construction, 55-200 mm focal range, 29.0°-8.1° angle of view, f/3.5-4.8 maximum aperture, seven rounded blades, 1.1 m focus range, and 0.18× tele maximum magnification.
4. **OHARA optical glass catalog:** <https://www.ohara-inc.co.jp/en/product/01000/>. Used for the selected coordinate-compatible catalog identities and compatible spectral proxies.
5. **Cross-catalog glass audit:** OHARA, HOYA, SCHOTT, HIKARI, CDGM, and SUMITA authoritative catalogs, recorded in the glass annotations and generated coverage reports. Vendor names in the data remain catalog-resolution choices unless the source itself identifies the supplier.
## Integration audit — 2026-09-11 UTC

DE 11 2013 006 887 B4, Fig. 1 wide and tele panels, PDF p25 (600 dpi; wide crop 0.39,0.265,0.73,0.37). At 0.06660 mm/pixel, S24/S25 have a roughly 435-pixel full optical height, supporting their 14.5 mm SD. Direct local-SVG comparison also enlarges S16/S17 to a common 11.8 mm and G2 S6–S10 to 9.0 mm. The figure suggests about 10.4 mm for G2, but that would produce 2.39 mm of S7/S8 cross-gap intrusion across a 1.998 mm axial gap; the physical geometry bound takes precedence. PP plates, labels, and leader ink were excluded.

The local controls and sampled motion profiles agree with the patent ordering: wide to tele moves G1–G5 objectward while G6 stays fixed; infinity to near moves only G4 objectward, with greater travel at tele. L13 and L32 now carry inferred APD color tags based on their compatible S-FPL51 and S-FPL53 curves. These are catalog-based inferences, not measured patent partial dispersion or identified production suppliers.

Surface validation and image-circle audits passed. Display names were checked against the shared all-caps maker/line, separated system-token, and aperture conventions; the existing titles already conform. Patent optical coordinates and inferred-focus qualifications were preserved.
