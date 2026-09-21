## Patent Reference and Design Identification

**Patent:** US 8,508,864 B2\
**Application Number:** US 12/966,586\
**Priority:** August 25, 2008\
**Filed:** December 13, 2010\
**Granted:** August 13, 2013\
**Inventor:** Iain A. Neil\
**Assignee:** ACM Projektentwicklung GmbH\
**Title:** Objective Lens System\
**Embodiment analyzed:** Example 2 / second embodiment, substantially 40 mm prime

The implemented prescription is the second embodiment of US 8,508,864 B2, centered on Table 3 and FIGS. 12–14. The patent describes it as a medium-angle prime of substantially 40 mm, with a fixed first lens group G1, a focusing second lens group G2, two aspherical surfaces, and approximately f/1.4 full aperture. The final modeled infinity-focus effective focal length is 39.0263 mm, which is consistent with that nominal description.

The association with the Leica/Leitz SUMMILUX-C 40 mm T1.4 is a research correlation, not a manufacturer-confirmed statement that the production lens uses this exact patent example. The correlation rests on several converging facts:

1. The patent example is a substantially 40 mm, approximately f/1.4 cine-format prime; the SUMMILUX-C family includes a 40 mm T1.4 member.
2. Leica Camera credits Iain Neil with optical design of the SUMMILUX-C family, and Iain A. Neil is the sole inventor named on the patent.
3. The patent describes a fast cine objective with internal focusing and two aspherical surfaces, consistent with the broad design class and product era of the SUMMILUX-C family.
4. Current Leitz specifications list the 40 mm SUMMILUX-C with a 33 mm image circle, PL mount, and 0.45 m close focus. Those product values are kept separate from the patent's 28 mm design image diagonal and the 0.39925 m object-to-image close-focus distance represented by the modeled Example 2.

The marketed T1.4 designation is a transmission specification. It is therefore not used as proof of the patent model's geometric f-number or of a physical iris diameter. Leitz's current technical table also uses the qualitative product description “No Breathing.” That marketed product description is kept separate from the patent Example 2's numerical +2.8% breathing result and is not substituted for it.

## Optical Architecture

Example 2 is best described as a two-positive-group internal-focusing cine prime rather than assigned to a historical design family that the patent does not name. Both macro-groups are positive. Final-data paraxial calculation gives G1 an effective focal length of +130.710 mm and G2 +62.325 mm, close to the patent's rounded +130.77 mm and +62.22 mm values. G1 is stationary; G2, including the aperture stop, translates during focus.

The source prescription contains 16 glass elements, but L1 is a plane-parallel S-BSL7 optical filter with zero paraxial power. The LensVisualizer model excludes that filter under the project data rules, leaving 15 active lens elements, 27 modeled surfaces including the stop, 11 air-spaced element groups, four cemented pairs, and two aspherical surfaces. No uniform focal-length scaling is applied.

The omitted front filter is not ignored in finite-conjugate verification. Its 3.000 mm glass thickness plus 2.000 mm following air space is represented for source-to-model conjugate comparisons by an object-side air-equivalent propagation of 3.978461 mm before source surface S3. This preserves the first-order transfer of the omitted plane-parallel plate while keeping the active prescription free of a filter element.

Within G1, the sequence alternates positive and negative singlets and three cemented pairs before the variable S19 gap. The rear group G2 begins with the moving stop and contains three singlets plus one cemented pair. This arrangement preserves a constant source S1-to-image physical track while focus is obtained by redistributing the S19 and S29 air spaces around G2.

## Element-by-Element Analysis

### L2 — Biconvex Positive

**nd = 1.49700, νd = 81.54. Glass: S-FPL51 (OHARA). f = +89.933 mm.**

L2 is the first powered element after the omitted front filter and begins the fixed G1 assembly. The patent explicitly identifies SFPL51 as one of the abnormal-partial-dispersion glasses used in this embodiment. Its standalone power is positive; the patent does not assign L2 a unique aberration term separate from the system-level chromatic strategy.

### L3 — Negative Meniscus with Rear Asphere

**nd = 1.48749, νd = 70.23. Glass: S-FSL5 (OHARA). f = −54.588 mm.**

L3 follows L2 with negative standalone power. Its rear surface is source S6, represented as `6A`. The patent's two-positive-group architecture specifically places an aspherical surface toward the front portion of G1 and states that this front aspherical element assists aberration correction; it does not isolate that correction into a single named Seidel term.

### D1 — L4 + L5 Cemented Pair

**L4: nd = 1.43875, νd = 94.93. Glass: S-FPL53 (OHARA). f = −40.527 mm.**\
**L5: nd = 1.80440, νd = 39.59. Glass: S-LAH63 (OHARA). f = +52.488 mm.**

L4 and L5 share source surface S8 and form the first cemented pair in the active model. Their standalone powers have opposite signs, while the verified thick-compound power is net negative with an effective focal length of −114.205 mm. L4 is one of the SFPL53 elements that the patent groups into its abnormal-dispersion strategy; L5 supplies the high-index positive partner. The descriptive prose calls L4 a negative meniscus, but Table 3's signed radii make the implemented L4 biconcave; the numerical prescription controls the model and the wording conflict is retained as a source discrepancy. Any more specific allocation of coma, astigmatism, or spherical-aberration correction would require evidence beyond the patent's system-level discussion.

### D2 — L6 + L7 Cemented Pair

**L6: nd = 1.80100, νd = 34.97. Glass: S-LAM66 (OHARA). f = −24.394 mm.**\
**L7: nd = 1.49700, νd = 81.54. Glass: S-FPL51 (OHARA). f = +50.383 mm.**

D2 combines a strong negative S-LAM66 meniscus with a positive S-FPL51 element. The verified cemented-pair effective focal length is −69.744 mm. The patent explicitly lists L7 among the SFPL51 elements used for the abnormal-dispersion strategy. Its prose calls L7 biconvex, whereas Table 3 gives two negative radii and the implemented numerical geometry is a positive meniscus; the model follows the table. The pair therefore combines substantial power opposition with a documented dispersion contrast rather than merely a geometric positive/negative pairing.

### L8 — Biconvex Positive

**nd = 1.76200, νd = 40.10. Glass: S-LAM55 (OHARA). f = +74.506 mm.**

L8 is an air-spaced positive singlet in the middle-to-rear portion of fixed G1. It follows the compact D2 pair and precedes another positive singlet. The patent gives its shape and glass but does not assign a separate aberration function to it, so its role is best limited to its verified positive contribution within the aggregate G1 power distribution.

### L9 — Biconvex Positive

**nd = 1.80100, νd = 34.97. Glass: S-LAM66 (OHARA). f = +63.890 mm.**

L9 is the second consecutive positive singlet in this part of G1. The source prints its six-digit glass code as `801.350`; the catalog-resolved form used in the data is 801350, consistent with OHARA S-LAM66 and with the same glass used at L6. This is a source-format normalization, not an optical change.

### D3 — L10 + L11 Cemented Pair

**L10: nd = 1.74950, νd = 35.33. Glass: S-NBH51 (OHARA). f = −33.877 mm.**\
**L11: nd = 1.43875, νd = 94.93. Glass: S-FPL53 (OHARA). f = +51.120 mm.**

The final cemented pair in G1 has a verified compound effective focal length of −124.330 mm. L11 is another of the SFPL53 elements specifically identified by the patent as part of its abnormal-dispersion glass set. The pair terminates the fixed group immediately ahead of the variable S19 spacing to G2.

### L12 — Positive Meniscus

**nd = 1.43875, νd = 94.93. Glass: S-FPL53 (OHARA). f = +261.966 mm.**

L12 is the first powered element behind the moving aperture stop and has comparatively low standalone positive power. It is one of the patent's SFPL53 elements. Because the entire G2 assembly translates as a rigid optical group in the published focus states, L12 retains its internal spacing to the rest of G2 while its position relative to fixed G1 changes.

### D4 — L13 + L14 Cemented Pair with Asphere

**L13: nd = 1.43875, νd = 94.93. Glass: S-FPL53 (OHARA). f = +85.516 mm.**\
**L14: nd = 1.80518, νd = 25.42. Glass: S-TIH6 (OHARA). f = −34.678 mm.**

L13 and L14 form the only cemented pair in G2. Their verified compound effective focal length is −55.382 mm. L14's rear surface is the second asphere, source S25 / modeled `25A`. The descriptive prose calls L14 an aspheric biconcave element, while Table 3's two negative radii produce the implemented negative-meniscus geometry; the table controls the model. The patent table also prints the L14 glass name as `STIH16`, but its OHARA code 805254 resolves to S-TIH6; the corrected catalog identity is used in the model while the raw patent string is retained in the evidence record.

### L15 — Biconvex Positive Dense-Flint Element

**nd = 1.80809, νd = 22.76. Glass: S-NPH1 (OHARA). f = +54.868 mm.**

L15 is a high-index, low-Abbe positive singlet immediately behind the aspheric D4 pair. The patent specifically calls out SNPH1 as a dense flint in G2 and carries forward the first embodiment's explanation that such a glass can introduce secondary dispersion that compensates secondary dispersion generated elsewhere in the lens. This is a patent-level system claim; the present paraxial model does not by itself apportion the resulting chromatic correction to individual aberration terms.

### L16 — Positive Meniscus

**nd = 1.49700, νd = 81.54. Glass: S-FPL51 (OHARA). f = +96.527 mm.**

L16 is the final glass element and another S-FPL51 member of the patent's abnormal-dispersion set. The rendered source table prints `SFP151`, but code 497816 and the surrounding patent text identify S-FPL51. Its rear surface S29 defines the final variable air space to the image plane.

## Glass Identification and Selection

Table 3 states that its listed glasses are available from Ohara Corporation. The active model resolves nine distinct OHARA catalog glasses. The runtime Sellmeier curves and `dPgF` values below are catalog-derived metadata used by the model; they are not measurements of the patent's or production lens's individual melts.

| Glass | nd | νd | dPgF | Used at |
|---|---:|---:|---:|---|
| S-FPL51 | 1.49700 | 81.54 | +0.029043 | L2, L7, L16 |
| S-FSL5 | 1.48749 | 70.23 | +0.002417 | L3 |
| S-FPL53 | 1.43875 | 94.93 | +0.046750 | L4, L11, L12, L13 |
| S-LAH63 | 1.80440 | 39.59 | −0.004578 | L5 |
| S-LAM66 | 1.80100 | 34.97 | +0.001320 | L6, L9 |
| S-LAM55 | 1.76200 | 40.10 | −0.000272 | L8 |
| S-NBH51 | 1.74950 | 35.33 | −0.002504 | L10 |
| S-TIH6 | 1.80518 | 25.42 | +0.016214 | L14 |
| S-NPH1 | 1.80809 | 22.76 | +0.026064 | L15 |

Two OHARA code ambiguities require the patent's printed glass names and line coordinates to be considered together with the six-digit codes. Current OHARA material lists both S-LAM7 and S-NBH51 under code 750353; Table 3 explicitly prints `SNBH51`, and the stored νd = 35.33 and C/F/g coordinates agree with S-NBH51 rather than S-LAM7. Current OHARA listings use S-LAH63Q for code 804396, whereas Table 3 explicitly prints `SLAH63`; OHARA also retains an S-LAH63 data sheet with nd = 1.80440, νd = 39.59 and the corresponding catalog C/F/g coordinates. The model therefore retains the source-era S-LAH63 coordinates rather than silently substituting the Q variant.

The patent explicitly groups SFPL51 and SFPL53 as abnormal-partial-dispersion glasses and singles out SNPH1 as a dense flint used for secondary-dispersion compensation. The model's OHARA catalog data and `dPgF` values support discussion of those catalog dispersion properties. They do not establish production-melt identity beyond the patent's OHARA supplier statement, and they do not by themselves justify an apochromatic-performance label.

## Focus Mechanism

The focus status is `PUBLISHED`: no internal focus law has been reconstructed from a production minimum-focus specification. G1 remains fixed, while G2 — the stop plus L12 through L16 — translates rigidly. Table 3 supplies three focus states:

| State | Object to source S1 | S19 gap | S29-to-image gap | Model focusT |
|---|---:|---:|---:|---:|
| F1 | 1,000,010 mm | 6.990 mm | 44.800 mm | 0 |
| F2 | 470 mm | 3.865 mm | 47.925 mm | 0.601960 |
| F3 | 206 mm | 0.800 mm | 50.990 mm | 1 |

From F1 to F3, S19 decreases by 6.190 mm while S29 increases by the same amount. The numerical table and the arrows in FIG. 13 therefore place G2 6.190 mm toward object space at close focus, while maintaining `S19 + S29 = 51.790 mm`. A prose sentence in the patent describes the direction oppositely, toward the rear; the model follows the numerical table and rendered movement arrows rather than silently reconciling that contradiction.

The normalized intermediate `focusT` value is a model interpolation coordinate derived from the published object-to-image distances, not a source-published cam coordinate. The source S1-to-image physical track remains 193.250 mm at all three states. After excluding the 5.000 mm front filter-plus-air section, the active first-surface-to-image track is 188.250 mm.

The patent's close state places the object 206 mm in front of source S1; with the constant 193.250 mm source track this corresponds to a 0.39925 m object-to-image distance used as `closeFocusM`. Current Leitz specifications list 0.45 m close focus for the 40 mm production SUMMILUX-C, so the production specification is not substituted into the patent focus model.

The physical full-open iris diameter is not published. Source S20's 19.98 mm table entry is retained as clear-aperture evidence, but the authored stop radius is 18.485036 mm, calibrated so that the final F1 paraxial model gives f/1.400. With the same fixed physical stop, the modeled paraxial f-number changes slightly to about f/1.404 at F2 and f/1.408 at F3. This agreement is a calibrated model condition, not independent evidence of the production diaphragm size.

## Aspherical Surfaces

The patent uses the conventional conic form in which the radical contains `1 − (1 + K)c²h²`, followed by even polynomial terms in radial height. Its `K` therefore maps directly to the LensVisualizer conic constant; no `K ± 1` conversion is applied. No prescription scaling is used, so the polynomial coefficients are copied without dimensional rescaling.

### Surface 6A — rear surface of L3

| Term | Value |
|---|---:|
| K | −0.5829 |
| A4 | +8.137e−6 mm⁻³ |
| A6 | −1.474e−8 mm⁻⁵ |
| A8 | +2.636e−10 mm⁻⁷ |
| A10 | −1.479e−12 mm⁻⁹ |
| A12 | +4.687e−15 mm⁻¹¹ |
| A14 | −6.151e−18 mm⁻¹³ |

At the published 16.42 mm semi-diameter, the verified departure from the corresponding spherical base is −0.47994 mm. The actual modeled rim-slope angle there is 49.31°.

### Surface 25A — rear surface of L14

| Term | Value |
|---|---:|
| K | 0 |
| A4 | +4.348e−6 mm⁻³ |
| A6 | +4.069e−10 mm⁻⁵ |
| A8 | −1.918e−12 mm⁻⁷ |
| A10 | +1.164e−15 mm⁻⁹ |
| A12 | −1.345e−18 mm⁻¹¹ |
| A14 | +1.221e−21 mm⁻¹³ |

At the published 21.07 mm semi-diameter, the verified departure from the corresponding spherical base is +0.83196 mm, with a 6.45° rim-slope angle. The departures describe geometry only; they are not a decomposition of the surface's contribution to any individual aberration.

## Chromatic Correction Strategy

The patent's chromatic strategy is unusually explicit. For the corresponding design family it states that using multiple SFPL51/SFPL53 abnormal-dispersion glasses adds degrees of freedom for reducing aberrations, particularly chromatic aberration. For Example 2 it identifies SFPL51 at L2, L7, and L16 and SFPL53 at L4, L11, L12, and L13, and it places dense-flint SNPH1 at L15. The first-embodiment explanation, which the second embodiment incorporates by reference, describes the dense flint as providing secondary dispersion that compensates secondary dispersion introduced elsewhere in the system.

The model uses OHARA Sellmeier curves plus catalog-derived `dPgF` for every active glass, so the dispersion discussion is not based on Abbe number alone. Even so, these are public catalog coordinates rather than measured production-melt data, and no claim of apochromatic performance is made from them.

## Verification Summary

Final-model first-order calculations at F1 give an effective focal length of 39.0263 mm and a back focal length of 44.7616 mm measured from the S29 rear vertex. The surface-by-surface Petzval sum is +0.00181698 mm⁻¹, corresponding to a reciprocal magnitude of about 550.36 mm. These values use the OHARA d-line catalog indices carried by the final data.

The patent states +2.8% focus breathing for the 40 mm example. Independent paraxial chief-ray backtracing of the source/final prescription gives 2.7901% from F1 to F3, while the rendered FIG. 14 full-field legends reproduce 2.8028% from 19.98° to 19.42°. The patent prose elsewhere gives 19.42° for the infinity plot; the rendered figures and breathing equation indicate that this is a source-text discrepancy rather than the value used for the published +2.8% result.

The final semi-diameter model retains the patent's active clear-aperture half-diameters except at the calibrated stop. The two narrowest shared air-gap bands require a model `gapSagFrac` of 0.96 rather than the project default 0.90, while remaining physically separated. Final geometric checks retain positive element thickness and air clearance at every published focus state, and representative exact meridional rays at F1, F2, F3 and two intermediate focus samples remain inside the authored apertures; the smallest tested aperture margin is 0.210 mm.

## Sources / References

1. Iain A. Neil, **Objective Lens System**, US 8,508,864 B2, granted August 13, 2013. Primary prescription: Table 3, printed pp. 15–16; architecture and focus discussion: printed pp. 16–18; FIGS. 12–14; performance data: Table 4. https://patents.google.com/patent/US8508864B2/en
2. Leitz Cine, **SUMMILUX-C**, current product specifications for focal lengths, T-stop, image circle, close focus, PL mount, dimensions, and family information. https://www.leitz-cine.com/product/summilux-c
3. Leica Camera AG, **Development Team of the Leica Summilux-C Lenses Receives the Scientific and Engineering Award**, 2015; identifies Iain Neil with optical design of the SUMMILUX-C family. https://leica-camera.com/en-MY/Company/Press-Centre/Press-Releases/2015/Press-Release-Development-Team-of-the-Leica-Summilux-C-Lenses-Receives-the-Scientific-and-Engineering-Award%C2%AE
4. OHARA INC., **Optical Glass** catalog and technical information, used for the catalog identities, d-line coordinates, C/F/g line indices, and partial-dispersion reference calculation. https://www.ohara-inc.co.jp/en/product/01000/ and https://www.ohara-inc.co.jp/en/product/technology/
5. OHARA INC., **All Glass Types** and the S-LAH63 data sheet, used to distinguish the duplicated 750353 code and the legacy S-LAH63 coordinates from the current S-LAH63Q listing. https://www.ohara-inc.co.jp/en/product/01001/ and https://www.ohara-inc.co.jp/assets/en/product/pdf/eslah63.pdf
