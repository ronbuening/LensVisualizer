# Olympus M.Zuiko Digital ED 12-100mm f/4.0 IS PRO — Patent Optical Analysis

## Patent Reference and Design Identification

**Patent:** JP2017-090535A, "ズームレンズ及びそれを備えた撮像装置" (Zoom Lens and Imaging Device Equipped with Same)  
**Applicant:** Olympus Corporation  
**Inventors:** Tetsuya Yanai, Tokinori Ima, Daichi Murakami, and Yuki Kubota  
**Filing date:** November 4, 2015  
**Publication date:** May 25, 2017  
**Embodiment used:** Numerical Example 1 (数値実施例1)

Numerical Example 1 remains the strongest match to the production **M.Zuiko Digital ED 12-100mm f/4.0 IS PRO**. The patent example gives $f = 12.36, 34.62, 97.98$ mm and constant FNO = 4.08 at the wide, middle, and tele positions, while Olympus/OM System publishes the production lens as a 12-100 mm constant-f/4 Micro Four Thirds zoom. The patent half-to-full field value, $2\omega = 83.05^\circ$ at the wide end, also tracks the production 84° wide-angle specification.

The element count and special-element allocation are also convergent. The patent prescription has 17 glass elements in five moving zoom groups, decomposing into 11 air-separated production subgroups. Olympus lists 17 elements in 11 groups, with one DSA element, three further aspherical elements, five ED elements, two Super HR elements, and one HR element. The patent has six aspherical surfaces on four elements: both faces of L4, both faces of L8, the image-side surface of L13, and the image-side surface of L17.

The mechanism match is direct. The patent states that G4 moves toward the image side for close focusing, and that the L12-L13 cemented doublet in G3 shifts perpendicular to the optical axis for image stabilization; it also gives L10-L11 as an alternative stabilizing doublet. The production lens is an internally focusing stabilized PRO-series zoom, making the Example 1 architecture consistent with the released product.

This re-review changes the earlier draft in four material ways. First, several glass identifications were corrected against manufacturer catalogs rather than inferred from name similarity. Second, the aspherical surface departures are now quoted at the selected, verification-tested semi-diameters rather than at arbitrary heights. Third, the data file omits the patent's cover glass and folds it into the patent BF(in air), consistent with project policy. Fourth, the close-focus behavior is no longer modeled by invented gap values: Example 1 publishes infinity-focus zoom spacings only, so the data file models zoom motion and duplicates the infinity values in each `[d_inf, d_close]` pair.

## Optical Architecture

The lens is a five-zoom-group high-ratio Micro Four Thirds zoom with a **positive / negative / positive / negative / positive** power sequence:

| Group |    Power | Elements     | Paraxial focal length | Role                                                     |
| ----- | -------: | ------------ | --------------------: | -------------------------------------------------------- |
| G1    | Positive | L1-L3        |            +110.52 mm | Front collector and tele-end chromatic stabilizer.       |
| G2    | Negative | L4-L7        |             -14.17 mm | Main variator and wide-end aberration corrector.         |
| G3    | Positive | STO + L8-L13 |             +23.28 mm | Relay/compensator, aperture-stop region, and IS carrier. |
| G4    | Negative | L14-L15      |             -24.12 mm | Inner-focus group and wobbling-compatible group.         |
| G5    | Positive | L16-L17      |             +39.58 mm | Rear field flattener and lateral-color balancer.         |

This is not a simple retrofocus wide-angle lens or a simple telephoto lens. It is a compact, high-ratio zoom whose rear negative-positive pair works as a magnifying subsystem behind the aperture-side relay. That rear subsystem lets the front diameter remain smaller than it would be if the front groups had to pass the final image-space cone alone. The patent explicitly treats the G4-G5 rear groups as important to compactness and aberration balancing, particularly at the wide end.

The tabulated zoom spacings are:

| Gap        |     Wide |   Middle |     Tele | Interpretation                                             |
| ---------- | -------: | -------: | -------: | ---------------------------------------------------------- |
| d5, G1-G2  |  0.72 mm | 25.09 mm | 53.60 mm | G1-G2 separation increases strongly.                       |
| d12, G2-G3 | 37.65 mm | 13.89 mm |  1.30 mm | G2-G3 separation collapses toward tele.                    |
| d23, G3-G4 |  2.44 mm | 10.11 mm | 20.20 mm | G3-G4 separation increases.                                |
| d26, G4-G5 |  4.87 mm | 12.72 mm | 12.50 mm | G4 reverses slightly between middle and tele.              |
| BF(in air) | 15.67 mm | 15.65 mm | 15.69 mm | Air-equivalent final image gap after omitting cover glass. |

The small non-monotonicity in d26 is retained in the data file; reducing it to a monotonic trend would change the paraxial solution. The cover glass listed as patent surfaces 30-31 is excluded from the `surfaces` array and is represented by the patent's air-equivalent BF after surface 29A.

A surface-by-surface Petzval calculation using $\phi/(n n')$ gives a Petzval sum of +0.001401 mm$^{-1}$, corresponding to a Petzval radius of about -714 mm. That is a small native curvature relative to the 21.6 mm Four Thirds diagonal and is consistent with the use of the rear G5 doublet as a field-correction group.

## Element-by-Element Analysis

### L1 — Negative Meniscus, convex to object

$n_d = 1.85478$, $\nu_d = 24.80$. Glass: **S-NBH56 (OHARA)**. Standalone in-air focal length: **-294.1 mm**.

L1 is the negative high-dispersion member of the front cemented doublet. The earlier draft identified this glass as S-NPH53, but OHARA S-NPH53 is 1.84666 / 23.88, not the patent's 1.85478 / 24.80. The correct catalog match is S-NBH56, code 855248. In this location it supplies chromatic leverage against the low-dispersion S-FPL51 positive L2 while keeping the front group only weakly positive overall.

### L2 — Plano-Convex Positive, cemented to L1

$n_d = 1.49700$, $\nu_d = 81.54$. Glass: **S-FPL51 (OHARA)**. Standalone in-air focal length: **+136.4 mm**.

L2 is the positive ED partner in the front achromat. The L1-L2 cemented pair has a verified focal length of +260.3 mm, so the doublet is not the main source of G1's positive power by itself. Its job is controlled collection: it starts the front-group convergence while limiting the axial color that would otherwise be magnified by the downstream variator and relay groups.

### L3 — Positive Meniscus, convex to object

$n_d = 1.49700$, $\nu_d = 81.54$. Glass: **S-FPL51 (OHARA)**. Standalone in-air focal length: **+187.5 mm**.

L3 is the second front-group ED positive element. Splitting the front positive power across L2 and L3 reduces the bending per surface and helps the front group remain useful at both the wide and tele ends. The 0.15 mm air space between L2 and L3 is deliberately small and was kept at reduced semi-diameter in the data file to preserve cross-gap sag clearance.

### L4 — Negative Meniscus, dual-surface asphere / DSA

$n_d = 1.88227$, $\nu_d = 37.18$. Glass: **HOYA M-TAFD307 / MC-TAFD307-class moldable high-index glass**. Standalone in-air focal length: **-17.1 mm**.

L4 is the dominant optical correction element in G2. It is strongly negative, sits at the object side of the variator, and carries both DSA aspherical surfaces. The earlier draft labeled it OHARA L-LAH85V, but current OHARA L-LAH85V is around 1.854 / 40.38 and therefore cannot represent the patent value. HOYA's M-TAFD307/MC-TAFD307 family is the correct class by six-digit glass code and by molded-asphere use, though the patent value differs slightly from the current catalog nominal.

The front asphere has a computed departure of **+91 µm at h = 12.5 mm**. The rear asphere has a computed departure of **-264 µm at h = 10.2 mm**, the largest verified departure in the design. This rear surface is the main wide-end correction surface for distortion, field curvature, and coma.

### L5 — Biconcave Negative, cemented to L6

$n_d = 1.59282$, $\nu_d = 68.62$. Glass: **FCD515 (HOYA)**. Standalone in-air focal length: **-22.2 mm**.

L5 is the low-dispersion negative member of the G2 cemented doublet. The prior draft treated it as an unresolved fluorophosphate glass with only an approximate OHARA neighbor. Manufacturer catalog matching gives the exact HOYA FCD515 value. In a negative group, the achromatization strategy is inverted: the negative element can use a high-Abbe ED glass while the positive partner uses a lower-Abbe, higher-index glass.

### L6 — Biconvex Positive / Super HR, cemented to L5

$n_d = 2.00069$, $\nu_d = 25.46$. Glass: **TAFD40 (HOYA)**. Standalone in-air focal length: **+19.2 mm**.

L6 is one of the two Super HR elements because its d-line index exceeds 2.0. The earlier S-NPH4 assignment was incorrect: S-NPH4 is not a 2.00069 / 25.46 glass. HOYA TAFD40 is an exact match. The high index allows strong positive power in a short cemented pair while limiting curvature escalation.

### L7 — Negative Meniscus, convex to image

$n_d = 1.83481$, $\nu_d = 42.73$. Glass: **S-LAH55V (OHARA)**. Standalone in-air focal length: **-54.4 mm**.

L7 is the trailing negative member of G2. Its role is less about raw variator power than about shaping G2's exit beam and managing the off-axis aberrations handed into G3. The glass match is the S-LAH55V/S-LAH55VS family; the patent value agrees exactly with OHARA S-LAH55V and within 0.01 in Abbe number with S-LAH55VS.

### L8 — Biconvex Positive, dual-surface asphere

$n_d = 1.58253$, $\nu_d = 59.32$. Glass: **L-BAL42-class (OHARA)**. Standalone in-air focal length: **+40.4 mm**.

L8 is immediately behind the aperture stop, where the axial beam is narrow and the element has high leverage over spherical aberration with less penalty to off-axis color. Both surfaces are aspherical. The selected semi-diameter departures are **-135 µm at h = 9.7 mm** for S14 and **+36.8 µm at h = 10.1 mm** for S15. The base rear radius is nearly flat at -700 mm, so the polynomial correction carries much of the useful shape on that surface.

### L9 — Symmetric Biconvex Positive

$n_d = 1.49700$, $\nu_d = 81.54$. Glass: **S-FPL51 (OHARA)**. Standalone in-air focal length: **+57.6 mm**.

L9 is a symmetric ED biconvex element behind L8. It shares G3's positive relay burden without adding much chromatic load. Its symmetric radii reduce coma sensitivity near the stop region and help the front portion of G3 behave as a gentle positive relay rather than a single high-power element.

### L10 — Negative Meniscus / HR, cemented to L11

$n_d = 1.91082$, $\nu_d = 35.25$. Glass: **TAFD35L (HOYA)**. Standalone in-air focal length: **-25.9 mm**.

L10 is the HR-class negative member of the L10-L11 cemented doublet. The earlier draft's HOYA TAFD30 label was wrong: HOYA TAFD35L matches 1.91082 / 35.25. Its role is to make the third group chromatically self-contained after the L8-L9 positive pair.

The patent also allows this L10-L11 doublet to act as the image-stabilizing doublet, but Example 1's primary stabilization statement assigns the moving IS doublet to L12-L13.

### L11 — Positive Meniscus, cemented to L10

$n_d = 1.49700$, $\nu_d = 81.54$. Glass: **S-FPL51 (OHARA)**. Standalone in-air focal length: **+43.0 mm**.

L11 supplies the low-dispersion positive partner to L10. The Abbe-number separation between L10 and L11 is roughly 46, giving the doublet strong chromatic leverage. The combined L10-L11 focal length is -59.8 mm, so the doublet is a negative subgroup nested inside the otherwise positive G3 assembly.

### L12 — Negative Meniscus, cemented to L13 / IS doublet front

$n_d = 1.85478$, $\nu_d = 24.80$. Glass: **S-NBH56 (OHARA)**. Standalone in-air focal length: **-67.0 mm**.

L12 is the negative front member of the image-stabilization doublet. It uses the same corrected S-NBH56 glass as L1. The negative-positive ordering is important: the patent explains that placing the negative element on the object side of a stabilizing pair helps reduce image-stabilization-induced field curvature and chromatic error.

### L13 — Biconvex Positive, one aspherical surface / IS doublet rear

$n_d = 1.58253$, $\nu_d = 59.32$. Glass: **L-BAL42-class (OHARA)**. Standalone in-air focal length: **+23.9 mm**.

L13 is the positive member of the L12-L13 stabilizing doublet. The cemented pair has a verified focal length of +37.4 mm, and the ratio $f_{IS}/f_{ISG} = 37.41/23.28 = 1.607$ satisfies the patent's stabilization condition (15). The rear asphere at S23 has a verified departure of **+73.5 µm at h = 10.4 mm**.

### L14 — Negative Meniscus, cemented to L15 / focus group front

$n_d = 1.83481$, $\nu_d = 42.73$. Glass: **S-LAH55V (OHARA)**. Standalone in-air focal length: **-14.3 mm**.

L14 is the dominant negative element of G4. Because G4 is the focusing group, this high-power negative element gives the focus unit high sensitivity: a relatively short mechanical motion produces a significant image-position shift. The doublet form keeps focus-driven chromatic variation under control.

### L15 — Positive Meniscus, cemented to L14 / focus group rear

$n_d = 1.80809$, $\nu_d = 22.76$. Glass: **S-NPH1 (OHARA)**. Standalone in-air focal length: **+29.6 mm**.

L15 is the high-dispersion positive partner in the negative focus group. This glass identification was retained from the earlier draft and is correct. In a negative group, the positive component can use the lower Abbe number; the patent's conditions (3) and (4) explicitly encode this chromatic strategy for G4.

### L16 — Negative Meniscus / Super HR, cemented to L17

$n_d = 2.00100$, $\nu_d = 29.13$. Glass: **TAFD55 (HOYA)**. Standalone in-air focal length: **-68.5 mm**.

L16 is the second Super HR element. The previous S-NPH5 assignment was incorrect; S-NPH5 is not a 2.001 / 29.13 glass. HOYA TAFD55 is the exact practical match, and OHARA S-LAH99 is a close cross-vendor equivalent. In G5, the negative high-index element helps flatten the field and balances the short-wavelength lateral color generated by the G4 positive flint.

### L17 — Biconvex Positive, one aspherical surface

$n_d = 1.51593$, $\nu_d = 64.25$. Glass: **S-BSL7 / BK7-class (OHARA-equivalent)**. Standalone in-air focal length: **+25.5 mm**.

L17 is the final glass element before the camera cover glass. It is close to the BK7/S-BSL7 family but not an exact catalog value in the current public OHARA table. Because the mismatch is small, it is appropriate to store it as S-BSL7/BK7-class rather than force an exact vendor name. The rear asphere at S29 has a verified departure of **-80.6 µm at h = 12.4 mm**, not the earlier draft's -2.5 µm value quoted at an arbitrary 9 mm height.

## Glass Identification and Selection

The glass audit corrected the main weaknesses in the earlier draft. The updated identifications are:

| Elements        | Patent $n_d$ / $\nu_d$ | Corrected identification          | Audit note                                                  |
| --------------- | ---------------------: | --------------------------------- | ----------------------------------------------------------- |
| L1, L12         |        1.85478 / 24.80 | S-NBH56 (OHARA)                   | Replaces incorrect S-NPH53.                                 |
| L2, L3, L9, L11 |        1.49700 / 81.54 | S-FPL51 (OHARA)                   | Exact ED match.                                             |
| L4              |        1.88227 / 37.18 | HOYA M-TAFD307 / MC-TAFD307-class | Replaces incorrect OHARA L-LAH85V.                          |
| L5              |        1.59282 / 68.62 | FCD515 (HOYA)                     | Exact HOYA ED match; not merely an unknown fluorophosphate. |
| L6              |        2.00069 / 25.46 | TAFD40 (HOYA)                     | Exact Super HR match; replaces incorrect S-NPH4.            |
| L7, L14         |        1.83481 / 42.73 | S-LAH55V (OHARA)                  | Exact S-LAH55V value; S-LAH55VS is only a near twin.        |
| L8, L13         |        1.58253 / 59.32 | L-BAL42-class (OHARA)             | Near match to low-Tg molded barium crown family.            |
| L10             |        1.91082 / 35.25 | TAFD35L (HOYA)                    | Replaces incorrect TAFD30.                                  |
| L15             |        1.80809 / 22.76 | S-NPH1 (OHARA)                    | Exact match.                                                |
| L16             |        2.00100 / 29.13 | TAFD55 (HOYA)                     | Exact Super HR match; S-LAH99 is a close OHARA equivalent.  |
| L17             |        1.51593 / 64.25 | S-BSL7 / BK7-class                | Close crown-glass class match; not forced to exact S-BSL7.  |

The design uses two distinct chromatic tactics. In positive groups, very low-dispersion S-FPL51 elements keep the converging power from generating excessive axial color. In negative groups, the glass pairing is inverted: negative ED or higher-Abbe elements are paired with high-index, high-dispersion positive members. The G4/G5 pair then uses high-dispersion positive and negative elements in different groups to cancel short-wavelength lateral color at the wide end, matching the patent's explanation of the rearmost two groups.

## Focus Mechanism

The focus system is an inner-focus arrangement using G4, the L14-L15 cemented doublet. During focusing from infinity to close distance, the patent states that G4 moves toward the image side. G4 is small, only two cemented meniscus elements, and has high focus sensitivity because it sits behind the strong G3 relay and ahead of G5.

The production lens is specified at 0.15 m minimum focus distance at the wide end and 0.45 m at the tele end. However, JP2017-090535A Example 1 publishes only infinity-focus zoom spacings, not close-focus spacing tables. The `.data.ts` file therefore does **not** fabricate close-focus d23/d26 values. It duplicates the infinity values in the focus pairs and records the production close-focus distance only as catalog metadata.

## Image Stabilization

The patent identifies the L12-L13 cemented doublet in G3 as the primary image-stabilization group. This pair shifts perpendicular to the optical axis. Its verified focal length is +37.41 mm, while G3's focal length is +23.28 mm, giving $f_{IS}/f_{ISG} = 1.607$. That satisfies the patent's stated 1.2-3.0 condition for limiting stabilizer movement while preserving correction.

The negative-positive ordering of L12-L13 is not incidental. The patent explains that a stabilizing group benefits from having positive and negative power in the moving unit, and that placing the negative element toward the object side helps reduce field curvature during decentering. The L10-L11 cemented doublet is described as an alternative possible stabilizing unit, but the implemented interpretation follows the L12-L13 statement.

## Aspherical Surfaces

The patent uses the standard even-order aspheric equation:

$$
z = \frac{y^2/r}{1 + \sqrt{1 - (1+k)(y/r)^2}} + A_4 y^4 + A_6 y^6 + A_8 y^8 + A_{10} y^{10} + A_{12} y^{12} + \cdots
$$

The tabulated `k = 0.000` is therefore the standard conic constant $K = 0$ spherical base. No Japanese-patent $\kappa - 1$ conversion is required.

| Surface | Element  | Coefficients copied from patent                                                                    | Selected SD | Polynomial departure at SD |
| ------- | -------- | -------------------------------------------------------------------------------------------------- | ----------: | -------------------------: |
| S6      | L4 front | A4=-7.50532e-6, A6=1.23396e-7, A8=-4.26522e-10, A10=6.20739e-13                                    |     12.5 mm |                   +91.1 µm |
| S7      | L4 rear  | A4=-3.12688e-5, A6=6.45994e-8, A8=-5.06358e-10, A10=1.39139e-11, A12=-1.22469e-13, A14=3.55245e-16 |     10.2 mm |                  -263.9 µm |
| S14     | L8 front | A4=-1.21943e-5, A6=-3.40663e-8, A8=-3.04610e-11, A10=4.72594e-13                                   |      9.7 mm |                  -135.2 µm |
| S15     | L8 rear  | A4=7.50787e-6, A6=-4.91245e-8, A8=9.97723e-11                                                      |     10.1 mm |                   +36.8 µm |
| S23     | L13 rear | A4=7.76950e-6, A6=-7.45428e-9, A8=-5.82084e-11                                                     |     10.4 mm |                   +73.5 µm |
| S29     | L17 rear | A4=3.64978e-6, A6=-5.98934e-8, A8=1.63111e-10, A10=-4.69751e-13                                    |     12.4 mm |                   -80.6 µm |

The earlier draft's qualitative explanation of the L4 DSA element was broadly correct, but its departure table mixed test heights with implied rim heights. This revision uses only the semi-diameters carried by the data file.

## Conditional Expressions

The re-run paraxial trace reproduced the patent's Example 1 condition table. The following values were recomputed independently from the prescription and spacing table:

| Condition                                              | Recomputed value | Patent value | Result                                           |
| ------------------------------------------------------ | ---------------: | -----------: | ------------------------------------------------ |
| (1) $(\beta_{4T}/\beta_{4W})/(\beta_{2T}/\beta_{2W})$  |            0.428 |        0.429 | Matches rounding.                                |
| (2) $(\beta_{4T}/\beta_{4W})/(\beta_{3T}/\beta_{3W})$  |            0.403 |        0.403 | Matches.                                         |
| (3) $\nu_{dG4P}$                                       |            22.76 |        22.76 | Matches.                                         |
| (4) $\nu_{dG4N}-\nu_{dG4P}$                            |            19.97 |        19.97 | Matches.                                         |
| (5) G4 positive lens shape factor                      |           -4.081 |       -4.081 | Matches.                                         |
| (6) $f_{4G}/f_W$                                       |           -1.952 |       -1.952 | Matches.                                         |
| (7) $DG4W/LW$                                          |            0.263 |        0.263 | Matches when physical cover-glass track is used. |
| (8) $(\beta_{4T}/\beta_{4W})/(f_T/f_W)$                |            0.140 |        0.140 | Matches.                                         |
| (9) G4 group shape factor                              |            1.217 |        1.217 | Matches.                                         |
| (10) G5 group shape factor                             |           -0.020 |       -0.020 | Matches.                                         |
| (11) $(\beta_{3T}/\beta_{3W})/(f_T/f_W)$               |            0.348 |        0.348 | Matches.                                         |
| (12) $f_{3G}/f_T$                                      |            0.238 |        0.238 | Matches.                                         |
| (13) $(\beta_{2W}/\beta_{3W})/(\beta_{2T}/\beta_{3T})$ |            1.064 |        1.064 | Matches.                                         |
| (14) $f_T/Exp_T$                                       |           -0.468 |       -0.467 | Matches rounding.                                |
| (15) $f_{IS}/f_{ISG}$                                  |            1.607 |        1.607 | Matches.                                         |

## Verification Summary

The prescription was re-entered from the patent, omitting only the camera cover glass in the final data file. A paraxial ABCD trace using the actual zoom gaps gave:

| Zoom position | Patent EFL | Recomputed EFL | Patent BF(in air) | Recomputed BF before folding |
| ------------- | ---------: | -------------: | ----------------: | ---------------------------: |
| Wide          |   12.36 mm |      12.354 mm |          15.67 mm |                    15.669 mm |
| Middle        |   34.62 mm |      34.623 mm |          15.65 mm |                    15.641 mm |
| Tele          |   97.98 mm |      97.966 mm |          15.69 mm |                    15.658 mm |

The small BF differences are within the expected sensitivity of a paraxial calculation using rounded patent table values. The group focal lengths computed independently are +110.52, -14.17, +23.28, -24.12, and +39.58 mm, matching the patent table.

The stop semi-diameter is a renderer accommodation rather than a patent value. Solving for F/4.08 from the paraxial entrance pupil gives approximate physical stop semi-diameters of 5.43 mm, 7.08 mm, and 8.28 mm at the three zoom positions. The data file carries 8.3 mm so the wide-open tele position is not under-stopped; the viewer's nominal f-number remains the marketed f/4.

## Sources

1. JP2017-090535A, "ズームレンズ及びそれを備えた撮像装置," Olympus Corporation, published May 25, 2017. Numerical Example 1 and condition table.
2. Olympus Global, "The first high-magnification zoom lens in the M.Zuiko PRO category with powerful image stabilization M.Zuiko Digital ED 12-100mm f4.0 IS PRO," September 19, 2016.
3. OM System, "M.Zuiko Digital ED 12-100mm F4.0 IS PRO" official product specifications.
4. OHARA optical glass catalog pages for S-NBH56, S-FPL51, S-LAH55V/S-LAH55VS, S-NPH1, L-BAL42/S-BAL42, S-BSL7, and S-LAH99.
5. HOYA optical glass catalog and cross-reference pages for FCD515, TAFD40, TAFD35L, TAFD55, and M-TAFD307 / MC-TAFD307-class moldable glass.
