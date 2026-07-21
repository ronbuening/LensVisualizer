# Canon EF 28-135mm f/3.5-5.6 IS USM — Patent Optical Analysis

## Patent Reference and Design Identification

**Patent:** US 6,061,180  
**Application Number:** US 08/957,162  
**Priority:** 29 October 1996; 25 December 1996; 1 April 1997 (Japan)  
**Filed:** 24 October 1997  
**Granted:** 9 May 2000; certificate of correction issued 8 May 2001  
**Inventor:** Shingo Hayakawa  
**Assignee:** Canon Kabushiki Kaisha  
**Title:** Zoom Lens  
**Embodiment analyzed:** Numerical Example 1; Figs. 1–3

Numerical Example 1 is the strongest patent-internal identification for the Canon EF 28-135mm f/3.5-5.6 IS USM. Canon does not publish a statement naming the implemented numerical example, so this remains a convergent identification rather than a documentary one.

1. **Element and group count.** Example 1 contains 16 elements in 12 air-separated physical groups. Canon publishes the same 16-element/12-group construction.
2. **Focal range and aperture.** The patent design is 28.89–131.14 mm at f/3.60–5.75; Canon markets 28–135 mm at f/3.5–5.6. The production values govern the catalog specification, while the patent values govern the prescription.
3. **Image format.** The patent half-fields of 36.9°, 23.4°, and 9.3° imply image-circle diameters of approximately 43.4, 43.3, and 43.0 mm. This agrees with the diagonal of the 36 × 24 mm format and Canon's 75°–18° published diagonal field.
4. **Image stabilization.** Example 1 explicitly shifts negative unit V perpendicular to the optical axis and includes stabilized-state aberration plots for a 0.5° camera tilt. Canon describes a compact lens-shift IS unit in the production lens.
5. **Focusing.** The patent moves complete negative unit II toward the object for close focus. Canon specifies ring-USM inner focusing, a 0.5 m minimum focus distance, and 0.19× maximum magnification.
6. **Aspherical location.** Example 1 places its sole asphere on r27, the rear face of L15, which is the middle member of the final three-element unit. Canon's colored construction diagram likewise marks the middle member of the rear triplet. Canon's prose calls the GMo part the “14th” element, which conflicts with the diagram and strict front-to-rear counting; the optical location is the stronger discriminator.
7. **Chronology.** The first Japanese priority date predates the February 1998 market introduction by approximately sixteen months.

| Criterion               | Canon production specification |                                Numerical Example 1 | Assessment                           |
| ----------------------- | -----------------------------: | -------------------------------------------------: | ------------------------------------ |
| Focal length            |                      28–135 mm |                                    28.89–131.14 mm | Consistent design-to-market rounding |
| Maximum aperture        |                      f/3.5–5.6 |                                        f/3.60–5.75 | Consistent design-to-market rounding |
| Construction            |        16 elements / 12 groups |                            16 elements / 12 groups | Exact count                          |
| Aspherical elements     |                One GMo element |                            One asphere, r27 on L15 | Diagram location agrees              |
| Focus                   |           Ring-USM inner focus |                           Unit II moves objectward | Same focus architecture              |
| Stabilization           |                  Lens-shift IS |                         Unit V shifts transversely | Explicit match                       |
| MFD / magnification     |                  0.5 m / 0.19× | 0.5 m constrained paraxial model / 0.1944× at tele | First-order agreement                |
| Introduction / priority |                  February 1998 |                         Priority from October 1996 | Development timing agrees            |

### Sibling-example exclusion

Numerical Example 10 is the strongest sibling challenge because it also has 16 elements and approximately the same focal range and aperture. It is nevertheless a poorer production match for three independent reasons:

- its fourth unit is negative rather than positive;
- the patent does not provide the stabilized-state aberration set supplied for Examples 1–4; and
- its asphere lies on the first member of the rear triplet, whereas Canon's colored construction diagram marks the middle member.

The Example 10 heading also prints `Fno = 1.36–5.6`, while Fig. 27 shows f/3.6 at wide angle. This is an internal source error, not evidence for an f/1.36 production design.

| Patent example | Principal excluding evidence                                                                |
| -------------- | ------------------------------------------------------------------------------------------- |
| Example 2      | 15 elements and f/3.60–5.25; wrong count and telephoto aperture                             |
| Example 3      | Two aspherical surfaces, r17 and r25; wrong aspherical count                                |
| Example 4      | f/4.00 at wide angle; wrong maximum aperture                                                |
| Examples 5–9   | Different zoom-kinematic branch, including stationary-unit variants                         |
| Examples 10–13 | Negative-fourth-unit branch; strongest sibling fails the IS-plot and asphere-location tests |

### Extraction conventions

The prescription was re-extracted from the printed Numerical Example 1 table on patent pages 12–13, corresponding to PDF pages 45–46. The following conventions were independently tested against the reconstructed focal lengths:

- **Units:** millimetres. No normalization or production scaling is required.
- **Radius sign:** positive radius places the center of curvature to the image side.
- **Index reference:** helium d line, 587.56 nm. The patent values are `nd`, not sodium-D or e-line indices.
- **Asphere convention:** spherical base plus even polynomial terms through $y^{10}$; standard conic constant $K=0$.
- **Unavailable patent data:** no clear apertures, semi-diameters, finite-focus prescription, or partial-dispersion table is published for Example 1.

The certificate of correction changes the abstract, notation, later-example entries, and claim wording. It does not alter an Example 1 radius, thickness, refractive index, Abbe number, variable separation, or aspherical coefficient.

### Published zoom separations

| Gap |     Wide |   Middle |     Tele | Function      |
| --- | -------: | -------: | -------: | ------------- |
| d5  |  2.00 mm | 13.78 mm | 33.50 mm | Unit I–II     |
| d13 | 11.40 mm |  6.97 mm |  1.40 mm | Unit II–stop  |
| d14 |  8.90 mm |  6.29 mm |  2.34 mm | Stop–unit III |
| d17 |  0.80 mm |  3.41 mm |  7.36 mm | Unit III–IV   |
| d20 |  1.80 mm |  3.74 mm |  5.90 mm | Unit IV–V     |
| d23 | 12.50 mm |  7.95 mm |  1.84 mm | Unit V–VI     |

The unit-II-to-unit-III air space is `d13 + d14`, because the stop divides that gap. It contracts from 20.30 mm at wide angle to 3.74 mm at telephoto.

## Optical Architecture

The prescription is a six-unit positive-negative-positive-positive-negative-positive zoom. Its 16 elements form 12 physical groups because four interfaces are cemented: r2, r16, r19, and r22. The six kinematic units are distinct from those 12 air-separated physical groups.

| Kinematic unit | Elements          |    Power |     EFL in air | Principal function                                |
| -------------- | ----------------- | -------: | -------------: | ------------------------------------------------- |
| I              | L1–L3             | Positive |  +78.301204 mm | Front positive unit and part of the main variator |
| II             | L4–L7             | Negative |  −15.491985 mm | Variator and inner-focus unit                     |
| III            | L8–L9, cemented   | Positive |  +32.533306 mm | Positive relay; moves with unit VI                |
| IV             | L10–L11, cemented | Positive | +139.775614 mm | Weak positive relay; stop shares its zoom locus   |
| V              | L12–L13, cemented | Negative |  −43.411851 mm | Transversely shifted image-stabilizing unit       |
| VI             | L14–L16           | Positive |  +46.717520 mm | Rear relay and image-side unit                    |

At the wide state, BFD/EFL is 1.3868; BFD therefore exceeds EFL, and the wide-angle configuration is retrofocus in the first-order sense required by an SLR mirror box. The corresponding ratio falls below unity at the middle and telephoto states, as expected for a high-ratio zoom whose rear groups move substantially during zooming.

The architecture separates focusing and stabilization into different negative units. Unit II focuses axially near the front of the moving system, while the smaller unit V shifts transversely near the rear. This avoids combining both mechanisms in the same relatively large negative group, a difficulty discussed explicitly in the patent background.

### Zoom kinematics

Positions below are first-vertex locations in millimetres relative to the fixed image plane; negative values lie toward the object.

| Component     |      Wide z |    Middle z |      Tele z |                       Wide-to-tele motion |
| ------------- | ----------: | ----------: | ----------: | ----------------------------------------: |
| Unit I, r1    | −138.565651 | −151.272613 | −169.373727 |                   30.808077 mm objectward |
| Unit II, r6   | −120.165651 | −121.092613 | −119.473727 | 0.691923 mm imageward net; locus reverses |
| Stop          |  −94.465651 |  −99.822613 | −103.773727 |                    9.308077 mm objectward |
| Unit III, r15 |  −85.565651 |  −93.532613 | −101.433727 |                   15.868077 mm objectward |
| Unit IV, r18  |  −78.765651 |  −84.122613 |  −88.073727 |                    9.308077 mm objectward |
| Unit V, r21   |  −72.065651 |  −75.482613 |  −77.273727 |                    5.208077 mm objectward |
| Unit VI, r24  |  −55.365651 |  −63.332613 |  −71.233727 |                   15.868077 mm objectward |

Units III and VI have identical displacement at all three states, reproducing the patent's common-motion statement. The stop and unit IV likewise share an identical displacement.

### Semi-diameter reconstruction for the data file

The patent gives no clear apertures. The `*.data.ts` semi-diameters are therefore inferred renderer dimensions rather than patent or production dimensions.

The initial reconstruction was informed by combined marginal and chief rays at all three zoom states and at infinity and the 0.5 m modeled focus endpoint. The working envelope used the project defaults: on-axis pupil fractions through ±0.83 and off-axis rays at 60% of the patent half-field through pupil fractions through ±0.75. The front group was additionally constrained by Canon's 72 mm filter diameter and by the proportions of Canon's published block diagram.

The final static geometry passed the following independent checks:

| Check                                 |     Verified result |                  Limit |
| ------------------------------------- | ------------------: | ---------------------: |
| Largest $sd/                          |                   R |                      $ | 0.897679 at r7 | < 0.90 |
| Largest rim angle                     |       63.855° at r7 | < 64.2° renderer limit |
| Largest same-element SD ratio         |        1.250000 for L4 |                 ≤ 1.25 |
| Minimum modeled edge thickness        | 0.368727 mm for L12 |              ≥ 0.30 mm |
| Largest signed cross-gap sag fraction |     0.888899 of d11 |                 ≤ 0.90 |

Because the patent publishes neither clear apertures nor a finite-focus prescription, this geometry is not used to claim exact wide-open bundle clearance, production vignetting, or measured mechanical edge dimensions. The values validate only the static renderer geometry.

## Element-by-Element Analysis

Standalone focal lengths below are thick-lens focal lengths in air. For members of cemented assemblies, they do not describe the in-situ component power; the cemented net is stated separately.

### C1 — L1 + L2, weak positive cemented front component

**L1:** $n_d = 1.84666$, $\nu_d = 23.8$. Glass: S-TIH53 (OHARA catalog equivalent). $f = -124.444653$ mm. Negative meniscus, concave toward the image.

**L2:** $n_d = 1.69680$, $\nu_d = 55.5$. Glass: S-LAL14 (OHARA catalog equivalent). $f = +86.820609$ mm. Positive meniscus, convex toward the object.

The cemented pair has EFL +300.248201 mm. It is therefore a weak positive component despite the strongly negative standalone L1. This illustrates why isolated element powers cannot be algebraically substituted for the in-situ behavior of a cemented pair.

### L3 — positive meniscus

**L3:** $n_d = 1.71300$, $\nu_d = 53.8$. Glass: S-LAL8 (OHARA catalog equivalent). $f = +103.354992$ mm.

L3 is air-spaced from C1 and completes positive unit I, whose net EFL is +78.301204 mm.

### L4 — negative meniscus

**L4:** $n_d = 1.83481$, $\nu_d = 42.7$. Glass: S-LAH55V (OHARA catalog equivalent). $f = -20.186862$ mm.

L4 supplies the strongest individual negative power in unit II and begins the inner-focus variator.

### L5 — biconcave negative

**L5:** $n_d = 1.80400$, $\nu_d = 46.6$. Glass: S-LAH65V (OHARA catalog equivalent). $f = -36.774802$ mm.

The Abbe number places this dense lanthanum glass in flint territory despite the family name.

### L6 — biconvex positive

**L6:** $n_d = 1.84666$, $\nu_d = 23.8$. Glass: S-TIH53 (OHARA catalog equivalent). $f = +20.119536$ mm.

L6 is the positive member embedded within the otherwise negative unit II. Its high index permits substantial positive power in a short axial thickness.

### L7 — biconcave negative

**L7:** $n_d = 1.83481$, $\nu_d = 42.7$. Glass: S-LAH55V (OHARA catalog equivalent). $f = -28.972898$ mm.

L7 closes unit II. The complete four-element unit has EFL −15.491985 mm and moves toward the object for close focus.

### C2 — L8 + L9, positive cemented unit III

**L8:** $n_d = 1.84666$, $\nu_d = 23.8$. Glass: S-TIH53 (OHARA catalog equivalent). $f = -47.413921$ mm. Negative meniscus.

**L9:** $n_d = 1.60311$, $\nu_d = 60.7$. Glass: S-BSM14 (OHARA catalog equivalent). $f = +19.339618$ mm. Biconvex positive.

The cemented net is +32.533306 mm. Unit III shares its zoom displacement with unit VI.

### C3 — L10 + L11, weak positive cemented unit IV

**L10:** $n_d = 1.51742$, $\nu_d = 52.4$. Glass: S-NSL36 (OHARA catalog equivalent). $f = +28.004510$ mm. Biconvex positive.

**L11:** $n_d = 1.83481$, $\nu_d = 42.7$. Glass: S-LAH55V (OHARA catalog equivalent). $f = -33.346608$ mm. Biconcave negative.

The cemented net is only +139.775614 mm. The stop follows the same zoom locus as this weak positive relay.

### C4 — L12 + L13, negative image-stabilizing unit V

**L12:** $n_d = 1.80518$, $\nu_d = 25.4$. Glass: S-TIH6 (OHARA catalog equivalent). $f = +25.842999$ mm. Positive meniscus, convex toward the image.

**L13:** $n_d = 1.70154$, $\nu_d = 41.2$. Glass: S-BAH27 (OHARA catalog equivalent). $f = -16.565005$ mm. Biconcave negative.

The cemented net is −43.411851 mm. The complete doublet, rather than either member individually, moves perpendicular to the optical axis for stabilization.

### L14 — biconvex positive

**L14:** $n_d = 1.72342$, $\nu_d = 38.0$. Glass: S-BAH28 (OHARA catalog equivalent). $f = +76.152917$ mm.

L14 begins positive rear unit VI and is air-spaced from L15.

### L15 — biconvex positive with rear-surface asphere

**L15:** $n_d = 1.58313$, $\nu_d = 59.4$. Glass: L-BAL42 (OHARA low-$T_g$ catalog equivalent). $f = +30.118835$ mm.

L15 supplies the principal positive power in the rear triplet. Its rear surface r27 is the only asphere. The exact optical-constant match also exists in polished S-BAL42; the GMo manufacturing statement and the low-softening L-series catalog make L-BAL42 a plausible molding-class reference, not proof of the undisclosed production melt.

### L16 — negative meniscus

**L16:** $n_d = 1.84666$, $\nu_d = 23.8$. Glass: S-TIH53 (OHARA catalog equivalent). $f = -34.559468$ mm. Negative meniscus, concave toward the object.

L16 is the terminal element. L14–L16 combine to a positive rear-unit EFL of +46.717520 mm.

## Glass Identification and Selection

The patent discloses only $n_d$ and $\nu_d$, not suppliers or melt names. The following names are nearest OHARA catalog equivalents verified directly against the manufacturer's polished-glass and low-$T_g$ catalogs. They are reference identifications; multiple vendors publish equivalent or near-equivalent optical constants.

Residuals are catalog values minus patent values.

| Patent $n_d/\nu_d$ | OHARA reference | Catalog $n_d/\nu_d$ | Residual $\Delta n_d/\Delta\nu_d$ | Elements        |
| -----------------: | --------------- | ------------------: | --------------------------------: | --------------- |
|     1.84666 / 23.8 | S-TIH53         |     1.84666 / 23.78 |                   0.00000 / −0.02 | L1, L6, L8, L16 |
|     1.69680 / 55.5 | S-LAL14         |     1.69680 / 55.53 |                   0.00000 / +0.03 | L2              |
|     1.71300 / 53.8 | S-LAL8          |     1.71300 / 53.87 |                   0.00000 / +0.07 | L3              |
|     1.83481 / 42.7 | S-LAH55V        |     1.83481 / 42.73 |                   0.00000 / +0.03 | L4, L7, L11     |
|     1.80400 / 46.6 | S-LAH65V        |     1.80400 / 46.58 |                   0.00000 / −0.02 | L5              |
|     1.60311 / 60.7 | S-BSM14         |     1.60311 / 60.64 |                   0.00000 / −0.06 | L9              |
|     1.51742 / 52.4 | S-NSL36         |     1.51742 / 52.43 |                   0.00000 / +0.03 | L10             |
|     1.80518 / 25.4 | S-TIH6          |     1.80518 / 25.42 |                   0.00000 / +0.02 | L12             |
|     1.70154 / 41.2 | S-BAH27         |     1.70154 / 41.24 |                   0.00000 / +0.04 | L13             |
|     1.72342 / 38.0 | S-BAH28         |     1.72342 / 37.95 |                   0.00000 / −0.05 | L14             |
|     1.58313 / 59.4 | L-BAL42         |     1.58313 / 59.38 |                   0.00000 / −0.02 | L15             |

No element has the very high Abbe number characteristic of ED, UD, or fluorite-class crown glass. The design's axial color correction is therefore conventional multi-pair achromatization rather than an apochromatic strategy. The data file uses catalog names so the dispersion engine can resolve manufacturer Sellmeier data, but the labels should not be interpreted as procurement records.

## Focus Mechanism

The patent specifies inner focusing by translating complete negative unit II toward the object. Canon specifies ring-USM drive, full-time manual focus, 0.5 m closest focus, and 0.19× maximum magnification.

Example 1 gives no finite-conjugate spacing table. The data file therefore uses a manufacturer-constrained first-order reconstruction. The image plane and all non-focusing units remain fixed; the object plane is placed 500 mm in front of the image plane; and unit II is shifted until the system matrix satisfies the conjugate condition $B=0$. Objectward travel decreases d5 and increases d13 by the same amount, preserving total track.

| Zoom state | Unit-II objectward travel | Calculated magnification |  d5 at close | d13 at close |
| ---------- | ------------------------: | -----------------------: | -----------: | -----------: |
| Wide       |               1.472631 mm |               −0.069765× |  0.527369 mm | 12.872631 mm |
| Middle     |               2.398925 mm |               −0.112021× | 11.381075 mm |  9.368925 mm |
| Tele       |               7.758964 mm |               −0.194416× | 25.741036 mm |  9.158964 mm |

The telephoto result rounds to Canon's 0.19× specification. This agreement supports the focus model but does not convert the reconstructed gaps into patent-published dimensions.

The shifted configurations have the following first-order powers. “Collimated-input BFD” is the BFD of the shifted optical configuration for an object at infinity; it is not the finite-object image distance, because the actual image plane remains fixed at the infinity-focus location.

| Zoom state | Close-configuration EFL | Collimated-input BFD | Units I–IV EFL |
| ---------- | ----------------------: | -------------------: | -------------: |
| Wide       |            26.727269 mm |         38.201036 mm |   25.091513 mm |
| Middle     |            42.549963 mm |         43.266116 mm |   40.126908 mm |
| Tele       |            71.497547 mm |         42.033472 mm |   66.071005 mm |

## Aspherical Surfaces

Only r27, the rear surface of L15 in unit VI, is aspherical. The patent narrative calls the location the “sixth lens unit IV”; the numerical prescription, Fig. 1 labels, and six-unit sequence require **VI**, making “IV” an uncorrected source-text error.

The patent equation is

$$
x(y)=\frac{(y^2/R)}{1+\sqrt{1-(y/R)^2}}+B y^4+C y^6+D y^8+E y^{10}.
$$

Compared with the standard conic form, the square-root term corresponds to $K=0$. No odd polynomial terms occur.

| Surface     |          R |   K |               A4 |               A6 |                A8 |               A10 |
| ----------- | ---------: | --: | ---------------: | ---------------: | ----------------: | ----------------: |
| r27 / `27A` | −23.956 mm |   0 | +1.29656e−5 mm−3 | +1.07517e−8 mm−5 | −3.30087e−11 mm−7 | +8.80605e−14 mm−9 |

At the inferred 15.8 mm renderer semi-diameter, the spherical base sag is −5.949059 mm and the full aspherical sag is −5.016590 mm. The polynomial departure is therefore +0.932469 mm in the imageward coordinate: the rim is shallower than the spherical base. The evaluation height is explicitly tied to the validated data-file semi-diameter, not an assumed arbitrary height.

Canon identifies the production component as molded glass. The optical constants match both S-BAL42 and the low-softening L-BAL42 family; the data file uses L-BAL42 as a manufacturing-consistent catalog reference, with no claim that Canon disclosed that exact melt.

## Image Stabilization

Unit V is the cemented r21–r23 doublet with EFL −43.411851 mm. The patent shifts this complete unit substantially perpendicular to the optical axis and plots the resulting aberrations for a 0.5° camera tilt in Figs. 3(a)–3(c). It does not publish the corresponding decenter in millimetres.

The focus group lies ahead of the stabilizing unit. The patent's stated rationale is that focusing ahead of the decentered unit limits the change in incident and emergent ray angles at that unit, reducing focus-dependent variation of decentering aberrations.

Canon describes the production mechanism as a compact lens-shift IS unit with an effect of approximately two shutter-speed steps. That production rating is separate from the patent's optical prescription and is not converted into an inferred decenter distance.

## Conditional Expressions

Conditions (1)–(6) directly govern the first embodiment containing Examples 1–4. Conditions (7)–(14) are introduced for a later positive-fourth-unit embodiment. Example 1 has a positive fourth unit and can be tested numerically, but the patent does not include it in that later correspondence table. Conditions (15)–(18) apply to the negative-fourth-unit branch and are not architecturally applicable.

The calculations use reconstructed rather than rounded focal lengths:

- $f_W = 28.891048$ mm;
- $f_T = 131.182095$ mm;
- $f_{FW} = 27.329372$ mm;
- $f_{FT} = 119.779988$ mm;
- $f_C = -43.411851$ mm;
- $f_3 = 32.533306$ mm;
- $f_4 = 139.775614$ mm; and
- $\sqrt{f_W f_T} = 61.562880$ mm.

|      No. | Published expression                |          Example 1 result | Status                                       |
| -------: | ----------------------------------- | ------------------------: | -------------------------------------------- |
|      (1) | $0.7<(f_{FT}/f_{FW})/(f_T/f_W)<1.2$ |               0.965257878 | Satisfied; patent table rounds to 0.965      |
|      (2) | $0.2<                               |                       f_C | /\sqrt{f_W f_T}<1.0$                         | 0.705162775 | Satisfied; patent table rounds to 0.705 |
|      (3) | $D_{1W}<D_{1T}$                     |           2.00 < 33.50 mm | Satisfied                                    |
|      (4) | $D_{2W}>D_{2T}$                     |           20.30 > 3.74 mm | Satisfied; $D_2=d13+d14$                     |
|      (5) | $D_{5W}>D_{5T}$                     |           12.50 > 1.84 mm | Satisfied                                    |
|      (6) | $0.3<I_{CT}<5.0$                    |           $I_{CT}=+1.090$ | Patent third-order value; satisfied          |
| (7)–(10) | Same applicable separation trends   |                  All true | Numerically satisfied in positive-IV branch  |
|     (11) | $0.3<f_3/\sqrt{f_Wf_T}<1.3$         |               0.528456527 | Satisfied                                    |
|     (12) | $0.6<f_4/\sqrt{f_Wf_T}$             |               2.270452812 | Satisfied                                    |
|     (13) | $\sqrt{f_Wf_T}<10.0$                |          61.562880 < 10.0 | False and dimensionally defective as printed |
|     (14) | $f_3<f_4$                           | 32.533306 < 139.775614 mm | Satisfied                                    |

The explanatory prose for condition (13) says that it limits the fourth-unit focal length. The likely intended expression is $f_4/\sqrt{f_Wf_T}<10.0$, which gives 2.270452812. This is an inference, not a correction printed in the certificate. Claim 12 omits condition (13), which further limits its legal and analytical significance.

The Example 1 correspondence line also publishes third-order spherical-aberration coefficients $I_{FT}=+0.916$, $I_{CT}=+1.090$, and $I_{RT}=-2.299$. These normalized patent quantities are reported on the patent's authority rather than replaced with ABCD-matrix proxies.

## Independent Paraxial Verification

The verification uses the reduced-angle vector $[y,nu]$, surface power $\phi=(n'-n)/R$, translation $d/n$, EFL $=-1/C$, and BFD $=-A/C$. A separate $[y,u]$ implementation reproduced the same first-order results to floating-point precision. The aspherical polynomial does not contribute paraxial power; r27 contributes through its base radius.

### System focal length, BFD, and track

| State  |  Patent f | Calculated EFL |   Difference |          BFD | First-to-last vertex | First vertex to image |
| ------ | --------: | -------------: | -----------: | -----------: | -------------------: | --------------------: |
| Wide   |  28.89 mm |   28.891048 mm | +0.001048 mm | 40.065651 mm |             98.50 mm |         138.565651 mm |
| Middle |  50.00 mm |   50.004242 mm | +0.004242 mm | 48.032613 mm |            103.24 mm |         151.272613 mm |
| Tele   | 131.14 mm |  131.182095 mm | +0.042095 mm | 55.933727 mm |            113.44 mm |         169.373727 mm |

The maximum discrepancy is approximately 0.032% at telephoto and is consistent with the patent's rounded refractive indices and variable gaps. No uniform scale factor is applied. The data file uses marketed endpoint apertures f/3.5 and f/5.6; its middle f/4.24 value is a manufacturer-constrained interpolation obtained by applying the mean endpoint design-to-market ratio to the patent's f/4.36 middle state.

### Group, cemented-component, and element powers

| Assembly                    |     EFL in air |
| --------------------------- | -------------: |
| Unit I                      |  +78.301204 mm |
| Unit II                     |  −15.491985 mm |
| Unit III / C2               |  +32.533306 mm |
| Unit IV / C3                | +139.775614 mm |
| Unit V / C4                 |  −43.411851 mm |
| Unit VI                     |  +46.717520 mm |
| C1 front cemented component | +300.248201 mm |
| Units I–IV, wide            |  +27.329372 mm |
| Units I–IV, middle          |  +47.600273 mm |
| Units I–IV, tele            | +119.779988 mm |

The standalone element focal lengths are stated in the element-by-element section. The four cemented nets were recalculated independently and were not obtained by summing isolated element powers.

### Surface-by-surface Petzval sum

For each refracting surface,

$$
P_i=\frac{\phi_i}{n_i n'_i},\qquad \phi_i=\frac{n'_i-n_i}{R_i}.
$$

The full surface-by-surface sum is

$$
P=+0.002821460459\ \mathrm{mm}^{-1},
$$

with reciprocal magnitude 354.426374 mm.

| Unit | Petzval contribution |
| ---- | -------------------: |
| I    |    +0.007775174 mm−1 |
| II   |    −0.033212987 mm−1 |
| III  |    +0.021474079 mm−1 |
| IV   |    +0.007760768 mm−1 |
| V    |    −0.014636425 mm−1 |
| VI   |    +0.013660850 mm−1 |

Axial zoom gaps do not enter the Petzval sum. The result differs materially from element-level thin-lens approximations and therefore must be evaluated surface by surface.

### Field and image-circle check

Using the reconstructed EFLs with the patent half-field angles gives:

| State  | $f\tan\omega$ | Implied diameter |
| ------ | ------------: | ---------------: |
| Wide   |  21.692013 mm |     43.384025 mm |
| Middle |  21.638768 mm |     43.277536 mm |
| Tele   |  21.481892 mm |     42.963784 mm |

The approximately 43 mm field agrees with the 36 × 24 mm format. The `h = ±15 mm` stabilized-aberration plots are sampled field positions and are not a 30 mm image-circle specification.

## Claims and Embodiment Correspondence

The prescription maps explicitly as follows: unit I is r1–r5; unit II r6–r13; unit III r15–r17; unit IV r18–r20; unit V r21–r23; and unit VI r24–r29. The stop is r14. The sole asphere is r27. The IS assembly is the cemented r21–r23 doublet.

Claims 1–10 and 17–21 describe the object-side positive group, negative transverse intermediate unit, positive rear unit, and object-side focusing architecture instantiated by Example 1. Claims 11–14 describe the positive-fourth-unit branch and are numerically compatible with Example 1, apart from the defective printed condition (13) in the explanatory text. Claims 15–16 require a negative fourth unit and therefore do not describe Example 1.

## Sources

1. Shingo Hayakawa, “Zoom Lens,” US 6,061,180, filed 24 October 1997, granted 9 May 2000, Numerical Example 1, Figs. 1–3, cols. 1–14, claims 1–21, and certificate of correction.
2. [Canon Camera Museum: EF28-135mm f/3.5-5.6 IS USM](https://global.canon/en/c-museum/product/ef342.html) — introduction date, construction, MFD, magnification, filter diameter, GMo asphere, IS description, ring USM, and inner focus.
3. [Canon Latin America: EF 28-135mm f/3.5-5.6 IS USM](https://www.cla.canon.com/en/p/ef-28-135mm-f-3-5-5-6-is-usm) — marketed focal length/aperture, construction, diagonal field, focusing system, and minimum focus distance.
4. OHARA, _Optical Glass Pocket Catalog_, 2023 edition, and official glass-type data sheets — polished-glass $n_d/\nu_d$ values and catalog names.
5. OHARA, _Low Softening Temperature Optical Glass_, version 9.1 — L-BAL42 molding-family data.
