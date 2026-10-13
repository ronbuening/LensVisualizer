# NIKKOR Z 70–200 mm f/2.8 VR S II — Patent Model

## Patent Reference and Design Identification

**Patent:** WO 2026/172598 A1

**Application Number:** PCT/JP2025/039307

**Priority:** JP 2025-022030, 2025-02-14

**Filed:** 2025-11-10

**Published:** 2026-08-20

**Inventor:** Akino Takahashi

**Applicant:** Nikon Corporation

**Title:** Variable Magnification Optical System, Optical Device, and Method for Manufacturing Variable Magnification Optical System (変倍光学系、光学機器、および変倍光学系の製造方法)

**Embodiment analyzed:** Example 1 (第1実施例), Fig. 1 and Table 1

The publication is a Japanese-language PCT application with eight numerical examples. Example 1 is described in ¶0140–0151; its Table 1 occupies PDF pp. 32–35 (printed pp. 30–33), and the conditional-expression values for all examples are tabulated on PDF pp. 68–70 (printed pp. 66–68). The PDF has no text layer, so every value in the data file was read from rasterized pages. The patent states no product name. The association with the NIKKOR Z 70–200 mm f/2.8 VR S II rests on the following convergent evidence:

1. **Applicant and timing.** Nikon Corporation is the applicant. The Japanese priority date (2025-02-14) precedes Nikon's announcement of the lens on 2026-02-24.
2. **Construction count.** Example 1 has 18 lens elements, two of them in cemented doublets, giving 16 air-separated groups. Nikon specifies 18 elements in 16 groups. The plane-parallel optical filter FL that closes the prescription is not a lens element and is excluded from both counts.
3. **Internal zoom.** G1, G4 and G7 are stationary during zoom, and the air-equivalent total length is 221.226 mm at all three published states. Nikon describes the lens as internally zooming.
4. **Two-group focus.** Two adjacent groups, G5 and G6, move in opposite directions on different trajectories for close focus (¶0140). Nikon describes a multi-focusing system driven by Silky Swift VCM actuators.
5. **Special-element pattern.** Nikon lists 1 ED, 1 Super ED, 1 aspherical ED, 2 aspherical, 1 fluorite and 1 SR element. Example 1 contains exactly one element on the calcium-fluoride coordinate (L13), one on the FCD100-class ultra-low-dispersion coordinate (L33), one double-sided aspheric element on an FCD1-class ED coordinate (L42), one further ED-class element (L44), two further single-sided aspheric elements (L45 and L71), and one flint with a published θgF of 0.625 (L41). Each assignment is a coordinate-based inference, not a Nikon statement.
6. **First-order specifications.** The published focal lengths are 71.402, 134.997 and 195.996 mm at f/2.891, f/2.904 and f/2.905, with an image height of 21.70 mm. This is consistent with a constant-aperture 70–200 mm f/2.8 full-frame zoom.

No Nikon source links this publication or Example 1 to the production lens. The correlation is therefore an inference, and three points remain open. The SR assignment to L41 is not stated anywhere. The patent identifies no vibration-reduction group. A Nikon UK product page describes "two dual-sided aspherical lens elements", whereas in Example 1 only L42 is aspheric on both faces. These items are discussed in the relevant sections below and are not resolved by changing the prescription.

## Optical Architecture

Example 1 is a seven-group zoom with the power sequence positive–negative–negative–positive–negative–positive–negative. In the patent's own vocabulary (¶0012–0013, ¶0072), G1 is a fixed positive front group, G2 and G3 form a negative intermediate group GM, G4 is the positive group GP, and G5–G7 form the rear group GR, whose last member G7 is the final group GF.

| Group | Elements | Role | Standalone f (mm), Table 1 | Zoom motion | Focus motion |
| --- | --- | --- | --- | --- | --- |
| G1 (+) | L11, L12, L13 | Front collector | +144.437 | Fixed | Fixed |
| G2 (−) | L21 | Variator | −82.865 | Toward image | Fixed |
| G3 (−) | L31, L32, L33 | Variator / compensator | −116.883 | Toward image | Fixed |
| G4 (+) | L41–L47, stop | Relay containing the aperture stop | +45.608 | Fixed | Fixed |
| G5 (−) | L51, L52 | Focus group 1 | −54.313 | Reversing | Toward image |
| G6 (+) | L61 | Focus group 2 | +64.803 | Reversing | Toward object |
| G7 (−) | L71 (+ FL plate) | Fixed rear negative group | −83.234 | Fixed | Fixed |

The verifier reproduces all seven group focal lengths from the prescription as thick systems in air, to within 0.0014 mm of the printed values.

**Zoom kinematics.** From wide to tele, G2 moves 48.940 mm and G3 moves 43.009 mm toward the image. Both motions are monotonic. Because G2 travels farther, the G2–G3 spacing closes from 16.234 to 10.303 mm, while the G3–G4 spacing closes from 44.546 to 1.537 mm. The combined focal length of G2 and G3 changes only from −43.673 mm at wide to −44.873 mm at tele, so the patent's intermediate group GM works as a nearly constant-power negative unit whose internal spacing performs the zooming. G1, G4 and G7 do not move: the summed spacings from G1 to G4 and from G4 to G7 are constant to within 0.001 mm.

G5 and G6 also move during zoom, and both reverse direction. G5 sits 3.004, 5.450 and 3.287 mm behind G4 at W, M and T, so it first moves toward the image and then back toward the object. G6 sits 37.363, 36.248 and 37.977 mm behind G4, so it first moves toward the object and then back toward the image. The patent describes these reversals as preferred for the group two places ahead of the final group (Gf−2, here G5) and the group immediately ahead of it (Gf−1, here G6), and claims them (claims 15–16). It states that they suppress the zoom variation of field curvature (¶0061–0064).

**Aperture stop.** The aperture stop SP is the patent's surface 19, labeled `STO` in the data file. ¶0144 places it between L42 and L43, 3.46 mm behind L42 and 6.57 mm ahead of L43 in the data file, so it remains stationary with G4 during zoom and focus. The patent does not publish a stop diameter. The data file models a single fixed iris whose semi-diameter (17.96 mm) is the real-ray value that reproduces f/2.891 at wide. The same iris then gives f/2.9040 at M and f/2.9047 at T, against the published f/2.904 and f/2.905. The wide-angle agreement is calibration by construction. The M and T agreement is consistent with a constant physical stop but does not measure it.

**First-order data.** All values below are computed from the data file at infinity focus. The published values are from Table 1.

| Quantity | W | M | T |
| --- | --- | --- | --- |
| EFL, computed (mm) | 71.404 | 135.000 | 196.005 |
| EFL, published (mm) | 71.402 | 134.997 | 195.996 |
| FNO, published | 2.891 | 2.904 | 2.905 |
| Half-field ω, published | 17.365° | 9.046° | 6.238° |
| Real-ray distortion at Y = 21.70 mm | −2.82 % | +0.96 % | +1.28 % |
| Physical length, surface 1 to image (mm) | 221.771 | 221.772 | 221.771 |
| Length / EFL | 3.11 | 1.64 | 1.13 |

The EFL residuals (+0.002, +0.003 and +0.009 mm) lie inside the scatter expected from the rounding of the printed radii and spacings. The air-equivalent back focus from surface 35 to the image plane is 30.979 mm and the air-equivalent total length is 221.226 mm, both matching Table 1. The real chief ray launched at the published ω lands within 0.002 mm of Y = 21.70 mm in every state, so the published ω is a real-ray field angle that includes distortion. The physical length exceeds the focal length at every state, so the design is not a telephoto in the TL/EFL < 1 sense even at 196 mm. Its back focus is shorter than its focal length, so it is not retrofocus either.

## Element-by-Element Analysis

Focal lengths are standalone thick-lens values in air, computed from the data file and rounded to 0.1 mm. They describe each element's own power, not its effect in place. Glass names are coordinate-compatible catalog counterparts recorded in the data file; they do not identify the supplier or melt. Element shapes and signs agree with the patent's descriptions in ¶0141–0147.

### G1 — Fixed Positive Front Group

¶0025–0026 prefers a convex–concave–convex front group as a way to reduce weight while retaining performance, and Example 1 follows that form with three air-spaced singlets. The group's standalone focal length is +144.437 mm. L13 alone (+135.6 mm) supplies nearly all of it. L11 and L12 (+327.8 and −294.1 mm) almost cancel each other in power, so they act mainly as the group's correcting pair.

#### L11 — Positive Meniscus, convex to object

nd = 1.48749, νd = 70.32. Glass: J-FK5 (HIKARI) — 487703 class; supplier unconfirmed. f = +327.8 mm.

The front element is a weak meniscus whose rear radius (1994.3 mm) is nearly flat. Its catalog counterpart is a fluor-crown (FK-type) glass, and it is the largest-diameter element in the modeled system. Nikon's fluorine coating on the front element is a mechanical/coating feature of the product and is not described in the patent.

#### L12 — Negative Meniscus, convex to object

nd = 1.77047, νd = 29.74. Glass: NBFD29 (HOYA) — 770297 class; supplier unconfirmed. f = −294.1 mm.

L12 is the only flint in G1 and the only negative element ahead of G2. Both of its radii (80.09 and 58.62 mm) are convex to the object. In the first-order color accounting described under Chromatic Correction Strategy, it supplies G1's only color term of opposite sign to L11 and L13.

#### L13 — Plano-Convex, convex to object

nd = 1.43384, νd = 95.24. Glass: CaF2 (fluorite crystal) — inferred from nd, θgF and Nikon's one-fluorite construction. f = +135.6 mm.

L13 is the thickest element in the prescription (12.30 mm) and carries G1's positive power. Its nd agrees with the Malitson calcium-fluoride dispersion to within 0.00001. Its tabulated θgF of 0.54 is consistent with calcium fluoride (PgF 0.5387, which rounds to 0.54) but not with HOYA FCD100, the nearest catalog glass (0.5336, which rounds to 0.53). The patent does not name the material, and its νd of 95.24 differs from the Malitson value of 95.00. The fluorite identification is therefore labeled Equivalent and remains an inference. The plane rear surface leaves all of the element's power on its front face.

### G2 — Negative Variator

#### L21 — Negative Meniscus, convex to object

nd = 1.55298, νd = 55.07. Glass: J-KZFH4 (HIKARI) — 553551 class; supplier unconfirmed. f = −82.9 mm.

G2 consists of this single element, which travels 48.940 mm toward the image over the zoom range. A one-element variator keeps the mass of the longest-travel group small. The coordinate corresponds to a short-flint (KZF-type) glass, whose catalog partial dispersion lies below the normal line (catalog ΔPgF −0.006). This is a catalog-derived property of the counterpart, not a patent statement.

### G3 — Negative Variator / Compensator

G3 is a negative–positive–negative triplet of air-spaced singlets. Its standalone focal length is −116.883 mm. Its positive member is the highest-index element in the lens, and both negative members use low-dispersion glass. This reverses the usual crown/flint assignment of a negative achromat. The computed effect of that arrangement is described under Chromatic Correction Strategy.

#### L31 — Biconcave Negative

nd = 1.51860, νd = 69.89. Glass: J-PKH1 (HIKARI) — 519699 class; supplier unconfirmed. f = −83.6 mm.

L31 carries most of G3's negative power. Its catalog counterpart is a phosphate crown (PK-type) glass.

#### L32 — Positive Meniscus, convex to object

nd = 2.00069, νd = 25.46. Glass: TAFD40 (HOYA) — 2.00069/25.46 coordinate also listed as CDGM H-ZLaF90A and HIKARI J-LASFH17; supplier unresolved. f = +88.1 mm.

The identical coordinate appears in three vendors' catalogs, so the supplier cannot be resolved. With nd above 2.0, L32 obtains +88.1 mm of power from relatively shallow radii (61.70 and 199.94 mm). In the first-order color accounting it is the dominant color term within G3.

#### L33 — Biconcave Negative

nd = 1.43700, νd = 95.1. Glass: FCD100 (HOYA) — 437951 class; supplier unconfirmed. f = −126.0 mm.

The patent prints νd for this element to one decimal place. The coordinate matches HOYA FCD100 exactly, and Nikon's single "Super ED" element is most plausibly this one, although Nikon does not say so. L33 uses ultra-low-dispersion glass in a negative element, the reverse of the more common placement of such glass in positive elements. Its object-side face (R −65.63 mm) sits 3.78 mm behind L32. The modeled rims of surfaces 12 and 13 nearly touch, which is the one place in the data file that needs an enlarged gap-intrusion allowance (see Verification Summary).

### G4 — Fixed Positive Relay with the Aperture Stop

G4 carries the strongest positive power in the system (+45.608 mm) and contains seven elements, the stop, and both cemented doublets. In the patent's terms it is the positive group GP that contains "lens A". It also contains three of the four aspherical surfaces.

#### L41 — Positive Meniscus, convex to object

nd = 1.62200, νd = 30.66. Glass: J-SFH8 (HIKARI) — 622307 class; supplier unconfirmed (dPgF carries the patent θgF). f = +103.0 mm.

L41 is the patent's "lens A". It is the most object-side lens of G4 (¶0060, ¶0114), and conditions (8)–(10) and (12)–(14) constrain its nd, νd and θgF. The patent gives two reasons for the refractive-index window in condition (8). The lower index reduces the specific gravity of the lens, which lightens the system, and it suppresses the zoom variation of spherical aberration (¶0049). The patent says the Abbe-number and partial-dispersion windows serve chromatic correction (¶0053, ¶0057), and placing lens A first in G4 is likewise motivated by chromatic correction (¶0060).

The conditions table gives θgF = 0.625, and the HIKARI J-SFH8 catalog value is 0.6248. Against the normal line used by the LensVisualizer engine, this is ΔPgF = +0.033. That is larger than the deviation of any other flint in the prescription. A positive flint with elevated short-wavelength partial dispersion fits the description of Nikon's SR glass, so L41 is the most plausible SR element. The assignment remains unconfirmed.

#### L42 — Biconvex Positive (2× Asph)

nd = 1.49710, νd = 81.56. Glass: M-FCD1 (HOYA) — 497816 class, moldable ED; supplier unconfirmed. f = +93.8 mm.

L42 is the only element with two aspherical surfaces, 17A and 18A, and it stands immediately ahead of the stop. Its FCD1-class coordinate and double-sided asphere fit Nikon's single "aspherical ED" element. The patent does not state how the element is made. The data file's choice of the moldable HOYA variant reflects the catalog resolver, not documented production practice.

#### L43 + L44 — Cemented Doublet D1

L43: nd = 1.85451, νd = 25.15. Glass: NBFD25 (HOYA) — 855252 class; supplier unconfirmed. f = −35.2 mm. Negative Meniscus, convex to object.

L44: nd = 1.49782, νd = 82.57. Glass: J-FKH1 (HIKARI) — 498826 class; supplier unconfirmed. f = +100.5 mm. Positive Meniscus, convex to object.

The doublet follows the stop. Its net standalone focal length is −52.05 mm, so it is a negative achromatizing component inside the positive G4. The junction (R 28.38 mm) is the most strongly curved interface in G4. L43 is the strongest negative element in the system, and its first-order color term is the largest single term in the lens. L44's J-FKH1-class coordinate is the most plausible candidate for Nikon's remaining "ED" element.

#### L45 + L46 — Cemented Doublet D2

L45: nd = 1.59306, νd = 66.97. Glass: J-PSKH4 (HIKARI) — 593670 class; not coordinate-identical (Δnd +0.00043), supplier/melt unresolved. f = +49.4 mm. Biconvex Positive (1× Asph).

L46: nd = 1.80809, νd = 22.74. Glass: J-SFH1 (HIKARI) — 808227 class; supplier unconfirmed. f = −199.1 mm. Negative Meniscus, concave to object.

D2 is net positive (+64.93 mm) and carries the third aspherical surface, 23A, on its object-side face. L45's coordinate is not identical to any catalog row. The nearest rows bracket it: HOYA MP-PCD51-70 (Δnd −0.00035) and HIKARI J-PSKH4 or HOYA PCD51 (Δnd +0.00043), all within the Exact metric threshold. The data file names J-PSKH4 because that row resolves under its own name in the LensVisualizer glass catalog; the HOYA molded variants are absent from it. A small offset from catalog index values is possible for precision-molded glass, but the patent does not say how L45 is made, so the supplier and melt are left unresolved. L46 is a dense flint; the same coordinate reappears in L51.

#### L47 — Positive Meniscus, convex to object

nd = 1.80610, νd = 33.27. Glass: NBFD15 (HOYA) — 806333 class, also CDGM H-ZLaF56B; supplier unresolved. f = +92.2 mm.

L47 closes G4. Its rear surface defines the first of the three zoom-and-focus spacings (D27). It has the thinnest modeled edge in the design (1.27 mm at the modeled semi-diameter).

### G5 — First Focus Group (Negative)

#### L51 — Biconvex Positive

nd = 1.80809, νd = 22.74. Glass: J-SFH1 (HIKARI) — 808227 class; supplier unconfirmed. f = +130.7 mm.

#### L52 — Biconcave Negative

nd = 1.78800, νd = 47.35. Glass: J-LASF014 (HIKARI) — 788474 class; supplier unconfirmed. f = −37.7 mm.

G5 (−54.313 mm) is an air-spaced positive–negative pair. Like G3, it reverses the conventional glass assignment: the positive member is the dense flint and the negative member has the higher Abbe number. Its modeled clear apertures (11.6–13.45 mm semi-diameter) are the smallest in the lens, which keeps the moving mass small. The patent states that G5 moves toward the image on focusing to a near object (¶0140).

### G6 — Second Focus Group (Positive)

#### L61 — Biconvex Positive

nd = 1.68376, νd = 37.64. Glass: J-KZFH6 (HIKARI) — 684376 class; supplier unconfirmed. f = +64.8 mm.

G6 consists of this single element, which moves toward the object on focusing (¶0140). Because it is a singlet, its standalone focal length equals the group value printed in Table 1 (+64.803 mm). Its coordinate corresponds to a KZF-type short flint.

### G7 — Fixed Rear Negative Group

#### L71 — Neg. Meniscus (1× Asph)

nd = 1.58335, νd = 59.55. Glass: 583595 class — CDGM D-ZK2A / HOYA M-BACD12 coordinate family; not coordinate-identical, supplier unresolved. f = −83.2 mm.

L71 is concave to the object and carries the fourth aspherical surface (34A) on that concave face. It sits 29.75 mm ahead of the filter plate FL. The patent prefers a negative final group because it shortens the system while correcting field curvature (¶0070–0071). The computed Petzval contributions in the Aberration Correction Strategy section show G7's share quantitatively. The coordinate does not match any catalog row exactly, which again leaves room for a molded-glass index shift; the supplier is unresolved.

The filter plate FL (nd = 1.51680, νd = 64.13, 1.60 mm, J-BK7A-class) is listed in Table 1 as surfaces 36–37. The data file carries it as a rear plate rather than as a lens element.

## Glass Identification and Selection

Table 1 publishes nd, νd and a two-decimal θgF for every element. The conditions table gives L41's θgF to three decimals. The data file's catalog counterparts come from an unseeded nearest-neighbor search over OHARA, HOYA, Schott, Sumita, HIKARI and CDGM using the metric √(Δnd² + (Δνd/50)²). Fifteen of the eighteen element coordinates are within the Exact threshold of a catalog row and are coordinate-identical to one. L45 and L71 are within the threshold without being identical. L13 is classified Equivalent and attributed to calcium fluoride. The coordinates of L32 and L47 occur identically in more than one vendor's catalog.

ΔPgF below is measured from the normal line 0.6438 − 0.001682·νd used by the LensVisualizer engine. The "Table" column uses the patent's printed θgF, which is rounded to ±0.005 except for L41 (±0.0005). The "Catalog" column uses the catalog counterpart's PgF (Malitson CaF2 for L13).

| Element | nd / νd | θgF (patent) | ΔPgF, table | ΔPgF, catalog | Counterpart | Role |
| --- | --- | --- | --- | --- | --- | --- |
| L13 | 1.43384 / 95.24 | 0.54 | +0.056 | +0.055 | CaF2 (inferred) | Principal positive power of G1 |
| L33 | 1.43700 / 95.1 | 0.53 | +0.046 | +0.050 | FCD100 class | Negative low-dispersion member of G3 |
| L42 | 1.49710 / 81.56 | 0.54 | +0.033 | +0.032 | FCD1 class | Double-aspheric positive element before the stop |
| L44 | 1.49782 / 82.57 | 0.54 | +0.035 | +0.034 | J-FKH1 class | Positive member of doublet D1 |
| L41 | 1.62200 / 30.66 | 0.625 | +0.033 | +0.033 | J-SFH8 class | Lens A of conditions (8)–(10); SR candidate |
| L46, L51 | 1.80809 / 22.74 | 0.63 | +0.024 | +0.023 | J-SFH1 class | Dense flint in D2 and G5 |
| L21 | 1.55298 / 55.07 | 0.54 | −0.011 | −0.006 | J-KZFH4 class | Single-element variator G2 |

Five elements carry `apd: "inferred"` in the data file: L13, L33, L41, L42 and L44. The first four rows are the low-dispersion crowns. Their positive ΔPgF is the expected behavior of fluorite and fluorophosphate glasses, and both the patent's rounded θgF and the catalog data support it. L41 differs because it is a flint: its deviation of about +0.033 is high for a νd near 31. The dense flints L46/L51 also sit above this linear normal line, which is common for such glasses under a two-point normal-line approximation. L41's deviation is about 0.01 larger than theirs at a higher Abbe number. Only L41 carries an authored `dPgF` in the data file (+0.0328), which records the patent's three-decimal θgF directly; its J-SFH8 counterpart also resolves in the LensVisualizer glass catalog.

## Focus Mechanism

**Patent statement.** On focusing from infinity to a near object, G5 moves toward the image and G6 moves toward the object, on different trajectories (¶0140; Fig. 1, arrows labeled 合焦). Only G5 and G6 are described as moving, so focusing is internal and does not change the overall length. The variable-gap table of Example 1 lists infinity spacings only (¶0136). The patent publishes no close-focus spacing, object distance or magnification for this example.

**Manufacturer specification.** Nikon gives minimum focus distances, measured from the focal plane, of 0.38 m at 70 and 85 mm, 0.5 m at 105 mm, 0.6 m at 135 mm and 0.8 m at 200 mm. Nikon's global specification page gives a maximum reproduction ratio of 0.3× at 70 mm only. Nikon's US and UK product pages give both 0.3× at 70 mm and 0.25× at 200 mm; the 200 mm value is used here as the tele constraint. AF is driven by Silky Swift VCM (SSVCM) actuators. The patent does not describe the actuators.

**Constrained reconstruction in the data file.** The close-focus spacings are not patent data. They were solved paraxially, with the image plane fixed, for Nikon's object-to-image distances. At W and T, the published reproduction ratios were imposed as a second condition, and each yields a unique admissible solution with positive gaps, G5 moving toward the image and G6 toward the object. Nikon publishes no ratio at 135 mm, so the M state uses a declared rule: the ratio of G6 travel to G5 travel is set to the mean of the W and T solutions (−0.7956). The resulting magnification, −0.253, lies within the narrow band (about −0.248 to −0.258) permitted by the minimum focus distance alone.

| State | Object to image | G5 travel (toward image) | G6 travel (toward object) | D27 / D31 / D33 close (mm) | β | Basis |
| --- | --- | --- | --- | --- | --- | --- |
| W (71.4 mm) | 0.38 m | 5.105 mm | 4.423 mm | 8.109 / 19.9307 / 10.0483 | −0.300 | MFD + 0.30× |
| M (135.0 mm) | 0.60 m | 8.747 mm | 6.959 mm | 14.1968 / 10.1925 / 13.6987 | −0.253 | MFD + declared travel-ratio rule |
| T (196.0 mm) | 0.80 m | 12.785 mm | 9.265 mm | 16.0724 / 7.7394 / 14.2762 | −0.250 | MFD + 0.25× |

The infinity spacings D27/D31/D33 are 3.004/29.459/5.625 mm (W), 5.450/25.898/6.740 mm (M) and 3.287/29.790/5.011 mm (T). G5 and G6 have nearly opposite standalone powers (−54.313 and +64.803 mm), and their travels are opposed and similar in size. The G5 travel grows from 5.1 mm at W to 12.8 mm at T. The residual paraxial defocus at the three reconstructed close states is below 0.0002 mm.

Between the three zoom stations the viewer interpolates every variable gap linearly. Those intermediate states are not solved: their paraxial defocus reaches 2.22 mm in the sampled grid, at infinity as well as at close focus. At the midpoint of the wide-to-mid interval (EFL 98.3 mm) the interpolated minimum focus distance is 0.49 m; Nikon quotes 0.5 m at 105 mm. Intermediate focus and zoom states in the viewer are therefore illustrations, not design data.

## Aspherical Surfaces

The patent's equation (A) (¶0134–0135) is

$$X(y) = \frac{y^2/R}{1 + \sqrt{1 - \kappa\, y^2/R^2}} + A4\,y^4 + A6\,y^6 + A8\,y^8 + A10\,y^{10} + A12\,y^{12}$$

where X is the sag measured toward the image, R is the paraxial radius and κ is the conic constant. In this form κ = 1 describes a sphere; the standard conic constant is K = κ − 1. All four surfaces in Example 1 have κ = 1.0000, so the data file uses K = 0, and the verifier confirms the mapping numerically. Only even-order coefficients appear; A2 is zero and omitted, and terms the patent does not print are zero. No scaling was applied, so the coefficients are the patent's values.

| Surface | Element | R (mm) | A4 | A6 | A8 | A10 |
| --- | --- | --- | --- | --- | --- | --- |
| 17A | L42 front | 51.0231 | −1.14012E-06 | −3.66784E-11 | — | — |
| 18A | L42 rear | −515.3446 | 1.30042E-06 | 1.61832E-10 | −1.7047E-13 | — |
| 23A | L45 front | 52.6942 | −1.60023E-06 | 8.51352E-11 | −5.5987E-13 | — |
| 34A | L71 front | −34.6941 | 5.46682E-06 | 2.52568E-10 | 4.7014E-12 | −4.3092E-15 |

Departures from the base sphere, evaluated at the data file's semi-diameters (ray-modeled for 17A, 18A and 23A, figure-derived for 34A; not published apertures), are:

| Surface | Modeled SD (mm) | Departure (µm) | Geometric effect at the rim |
| --- | --- | --- | --- |
| 17A | 20.30 | −196.2 | Convex front face flattened |
| 18A | 19.70 | +201.5 | Convex rear face flattened |
| 23A | 17.10 | −138.8 | Convex front face flattened |
| 34A | 17.50 | +549.7 | Concave front face made shallower |

On L42 both departures act in the same sense: each face becomes less strongly curved toward the rim, so the element converges marginal rays less than its base spheres would. This is the usual profile for limiting the spherical aberration contributed by a strong positive element in a large-aperture beam; L42 stands immediately ahead of the stop. 23A applies the same type of correction to the positive member of D2. 34A is the largest departure in the lens. It weakens the divergence of L71's concave face toward the rim. Because L71 sits far behind the stop, where field beams are well separated from the axis, its asphere chiefly affects off-axis aberrations. These interpretations follow from the departure signs and positions; the patent does not attribute a function to any individual aspherical surface, and no surface-by-surface aberration decomposition was computed.

The patent does not say how the aspheres are made. Nikon's specification counts one aspherical ED element and two aspherical elements, which matches three aspheric elements carrying four aspheric surfaces. The Nikon UK wording "two dual-sided aspherical lens elements" does not match Example 1, in which L45 and L71 are each aspheric on one face only. This difference may reflect marketing wording or a change for production. The prescription is transcribed as published.

## Chromatic Correction Strategy

Nikon attributes the reduced element count partly to newly adopted Super ED and aspherical ED elements that it describes as effective against chromatic aberration. The patent itself discusses color only through lens A: conditions (9)–(10) and (13)–(14), and the placement of lens A at the front of G4 (¶0053, ¶0057, ¶0060).

To show how the corrections are distributed, the verifier performs a first-order paraxial color accounting. For each element, the derivative of the paraxial image distance with respect to that element's index is multiplied by its C-to-F index difference Δn = (nd − 1)/νd, with all other elements held fixed. The result is that element's linearized contribution to the F–C focus separation. Positive means the F-line focus moves away from the lens. Because the terms are linear, they add exactly to the system value. A finite C-to-F index step gives slightly different figures (for example +8.726 mm rather than +8.706 mm for L43 at W), which does not change any conclusion below.

| Group | W (mm) | M (mm) | T (mm) |
| --- | --- | --- | --- |
| G1 | −0.043 | −0.154 | −0.324 |
| G2 | +0.891 | +1.786 | +2.595 |
| G3 | −0.920 | −1.690 | −2.339 |
| G4 | −0.326 | −0.236 | −0.329 |
| G5 | +0.861 | +0.813 | +0.857 |
| G6 | −0.650 | −0.704 | −0.622 |
| G7 | +0.212 | +0.212 | +0.212 |
| System, including FL | +0.030 | +0.034 | +0.056 |

Five points follow from these computed values.

- **G2 and G3 cancel each other in every state.** Their contributions are opposite in sign and both grow in magnitude toward tele. This is how the reversed glass assignment in G3 functions: the high-index flint L32 gives negative G3 a color contribution opposite to that of the single negative element G2. The cancellation holds while the two groups move.
- **G1 contributes little.** Its net term grows from −0.043 mm to −0.324 mm with focal length, and L12 offsets L11 and L13 within the group.
- **G4 is nearly self-corrected.** Its net term stays between −0.236 and −0.329 mm in every state, despite containing the largest single term in the lens: L43 contributes +8.706 mm at W. That term is balanced by the positive elements L41 (−3.833 mm), L45 (−2.260 mm), L47 (−2.130 mm), L42 (−1.490 mm) and L44 (−0.903 mm), with L46 adding +1.583 mm.
- **The rear groups are almost zoom-independent.** G5 and G6 partly offset each other, and G7 is fixed.
- **The residual is small.** The remaining paraxial F–C focus separation is under 0.06 mm throughout the zoom range.

Secondary spectrum cannot be settled at the patent's precision. Repeating the accounting with the printed θgF values gives a first-order g–F focus separation of +0.092, +0.075 and +0.098 mm at W, M and T. If each two-decimal θgF is allowed its ±0.005 rounding interval (±0.0005 for L41), the possible range at W runs from −0.046 to +0.231 mm, which includes zero. The corresponding ranges are −0.098 to +0.247 mm at M and −0.111 to +0.308 mm at T. The sign and size of the secondary spectrum are therefore not determined by the published data. The analysis makes no apochromatic claim. The anomalous-dispersion entries in the glass table describe material properties, not a demonstrated level of correction.

## Aberration Correction Strategy

Beyond the role of lens A, the patent explains its design choices through conditional expressions. Each condition is said to keep spherical aberration, coma and field curvature well corrected, or to combine compactness with performance. Condition (11) and the reversing paths of G5 and G6 are explained as controlling the zoom variation of spherical aberration, coma and field curvature (¶0061–0064, ¶0067).

The Petzval sum, computed surface by surface as φ/(n·n′) over the lens surfaces, is 0.000893 mm⁻¹, corresponding to a Petzval radius of −1119 mm. It is the same at every zoom and focus state because only spacings change. By group (×10⁻³ mm⁻¹):

| G1 | G2 | G3 | G4 | G5 | G6 | G7 |
| --- | --- | --- | --- | --- | --- | --- |
| +5.20 | −7.79 | −7.77 | +20.19 | −10.56 | +9.27 | −7.63 |

The positive groups contribute +34.66 and the negative groups −33.76, leaving a residual under 3 % of either. G7 alone offsets more than a third of G4's contribution. This puts a number on the patent's statement that a negative final group serves field-curvature correction (¶0070–0071). G5 offsets more than G6 adds, so the focus pair is also net-negative in Petzval terms.

## Image Stabilization

Example 1 assigns no group a decentering role. Neither ¶0140–0147 nor Fig. 1 identifies a vibration-reduction group, and the construction record found no stabilization group identified elsewhere in the publication. Nikon specifies built-in VR with a 5.5-stop effect, extended to 6.0 stops with Synchro VR on compatible cameras. Which part of the optical system shifts for VR cannot be established from this source, and the data file models no VR group.

## Conditional Expressions

The patent's two embodiments share conditions (2), (6) and (7) and repeat them as (19), (20) and (21). They state the lens-A conditions twice, as (8)–(10) for G4 and (12)–(14) for the positive group GP, which is G4 in Example 1. In conditions (15)–(18), GM is G2 + G3. Computed values come from the prescription; Δ2Z and Δ3Z use the variable-gap table, with motion toward the image taken as positive (¶0066).

| No. | Expression | Range | Table value | Computed |
| --- | --- | --- | --- | --- |
| (1) | f2/f3 | 0.01 – 2.00 | 0.71 | 0.709 |
| (2), (19) | Bfw/fw | 0.10 – 1.50 | 0.43 | 0.434 |
| (3) | (−f2)/f1 | 0.10 – 1.50 | 0.57 | 0.574 |
| (4) | f1/(−f3) | 0.10 – 2.50 | 1.24 | 1.236 |
| (5) | (−f3)/f4 | 0.50 – 15.00 | 2.56 | 2.563 |
| (6), (20) | Bft/ft | 0.01 – 0.40 | 0.16 | 0.158 |
| (7), (21) | TLw/fw | 1.00 – 5.00 | 3.10 | 3.098 |
| (8), (12) | nd of lens A | 1.50 – 1.80 | 1.622 | 1.622 |
| (9), (13) | νd of lens A | 22.00 – 35.00 | 30.66 | 30.66 |
| (10), (14) | θgF of lens A | 0.60 – 0.66 | 0.625 | 0.625 (source value) |
| (11) | \|Δ3Z/Δ2Z\| | 0.50 – 1.20 | 0.879 | 0.879 |
| (15) | (−fmw)/f1 | 0.05 – 1.00 | 0.30 | 0.302 |
| (16) | (−fmw)/fp | 0.10 – 1.50 | 0.96 | 0.958 |
| (17) | (−fmt)/f1 | 0.05 – 1.00 | 0.31 | 0.311 |
| (18) | (−fmt)/fp | 0.10 – 1.50 | 0.98 | 0.984 |

Every computed value rounds to the printed value and lies within its claimed range. Example 1 also meets the narrowest limits the patent offers for several conditions:

| Condition | Narrowest limits offered | Paragraphs | Example 1 |
| --- | --- | --- | --- |
| (1) | 0.22 – 0.75 | ¶0018–0019 | 0.709 |
| (8) | 1.61 – 1.68 | ¶0050–0051 | 1.622 |
| (9) | 27.00 – 30.80 | ¶0054–0055 | 30.66 |
| (10) | 0.620 – 0.635 | ¶0058–0059 | 0.625 |
| (11) | 0.75 – 0.95 | ¶0068–0069 | 0.879 |

The θgF in conditions (10) and (14) cannot be recomputed from Table 1, which prints θgF to two decimals. The value 0.625 is the patent's own; the catalog counterpart J-SFH8 has 0.6248.

One printed value is inconsistent with the rest of Table 1. Table 1 [全体諸元] prints Δ2Z = 48.949, but the variable-gap table gives a G2 travel of 48.940 mm, because G1 is fixed and Δ2Z equals the change in D6. Condition (11) evaluates to 0.879 with either value. The data file uses the gap table and does not alter the printed value. This analysis treats 48.949 as a probable typographical error in the publication, but that reading is an inference.

## Verification Summary

All checks below were executed against the final data file. The governing record is the dossier's results file.

| Check | Result |
| --- | --- |
| EFL, sequential y-nu trace vs ABCD product | Agree to better than 1e-9 mm at W, M and T |
| EFL vs Table 1 | +0.002 / +0.003 / +0.009 mm, within the rounding-propagation tolerance |
| Group focal lengths vs Table 1 | All seven within 0.0014 mm |
| Air-equivalent BF and TL vs Table 1 | 30.979 mm and 221.226 mm reproduced |
| Element power signs and shapes vs ¶0141–0147 | All 18 agree |
| Conditional expressions (1)–(21) | All reproduced and satisfied |
| Real chief ray at published ω | Lands at Y = 21.70 mm (within 0.002 mm) |
| Fixed iris (real-ray SD 17.96 mm) | f/2.891 (calibrated), f/2.9040, f/2.9047 |
| LensVisualizer `validateLensData`, `buildLens`, scoped `tsc`, render diagnostics | No errors; zero hidden render trim at 15 sampled states |

The data file departs from a literal transcription in the following ways, each recorded in the dossier:

- **Labels.** Patent surface numbers 1–35 are kept. Surface 19 is labeled `STO`. The aspherical surfaces carry an `A` suffix (17A, 18A, 23A and 34A).
- **Filter plate.** FL is carried as a rear plate. The fixed spacing D37 = 0.174 mm, printed as variable but equal in all three states, follows it.
- **Conic constant.** K = κ − 1 = 0 for every asphere. No scale factor was applied.
- **Semi-diameters.** None are published. They are modeled as 1.04 times the largest real-ray height over 15 zoom/focus states, covering the full-aperture axial bundle, the full-field chief ray and 0.6-field ±0.5-pupil rays, rounded up to 0.05 mm. The cemented doublets are equalized. Six rims instead follow the wide-end panel of patent Fig. 1 (scaled at 0.0782 mm per pixel at 600 dpi from the tabulated vertex spacings), where the drawing is 12–22 % taller than the ray model: L21 (22.6 mm front, 20.7 mm rear), L61 (18.3 mm) and L71 (17.5 mm front, 18.7 mm rear). The other rims agree with the figure within about 7 % and are kept. Figure-derived values are drawing measurements, not published apertures.
- **Surfaces 12/13.** These are held below the general rule at 18.72 mm, a value that still passes the full-aperture axial bundle at every sampled state. Their sag intrusion into the 3.78 mm gap then reaches 95.4 %, so the data file sets a per-lens gap-intrusion allowance of 0.96. Every other gap stays within the default 0.90 at all sampled states.
- **Stop.** The semi-diameter is a wide-end real-ray calibration, as described under Optical Architecture.
- **Close focus.** The spacings are the constrained reconstruction described under Focus Mechanism. Intermediate zoom states are interpolated, not solved.

## Design Heritage and Context

The lens replaces the NIKKOR Z 70–200 mm f/2.8 VR S, released in 2020. Nikon specifies that lens as 21 elements in 18 groups, including 6 ED, 2 aspherical, 1 fluorite and 1 SR elements, with minimum focus distances of 0.5 m at wide and 1.0 m at tele and a 0.2× maximum reproduction ratio. The second-generation lens has three fewer elements and two fewer groups. Its ED-type complement changes from six ED elements to one ED, one Super ED and one aspherical ED. Its close-focus capability increases to 0.38 m and 0.3× at wide.

Nikon attributes the roughly 26 % weight reduction to three changes: a modified front-group configuration, the removal of mechanical components from the moving groups, and the reduced element count. Example 1 is consistent with that account, though it cannot confirm it. Its front group has three singlets of modest power, with a fluorite principal element. Its longest-travel group, G2, is a single element. Its two focus groups contain three elements in total, with semi-diameters of 11.6–13.45 mm in G5 and 18.3 mm for the single G6 element. The patent itself lists weight among its aims: ¶0026 for the G1 form, and ¶0049 and ¶0076 for the refractive index of lens A.

The LensVisualizer corpus represents the first-generation lens by WO 2020/105104 A1, Example 1. That prescription has not been re-verified for this analysis, and no quantitative comparison between the two designs is made here. The background section of WO 2026/172598 A1 cites JP 2023-033649 A as prior art (¶0003) without describing it.

## Sources

1. WO 2026/172598 A1, *変倍光学系、光学機器、および変倍光学系の製造方法* (Variable magnification optical system, optical device, and method for manufacturing variable magnification optical system), applicant Nikon Corporation, inventor Akino Takahashi; international application PCT/JP2025/039307, filed 2025-11-10, priority JP 2025-022030 (2025-02-14), published 2026-08-20 by WIPO. Cited passages: ¶0003, ¶0012–0019, ¶0025–0026, ¶0048–0071, ¶0072–0076, ¶0085–0092, ¶0114, ¶0132–0151; Fig. 1; Table 1 (PDF pp. 32–35, printed pp. 30–33); conditional-expression values (PDF pp. 68–70, printed pp. 66–68).
2. Nikon Corporation, "NIKKOR Z 70-200mm f/2.8 VR S II — Overview / Specifications," imaging.nikon.com, https://imaging.nikon.com/imaging/lineup/lens/z-mount/z_70-200mmf28_vr_s2/ (accessed 2026-10-01).
3. Nikon Corporation, "Nikon releases the NIKKOR Z 70-200mm f/2.8 VR S II, a fast telephoto zoom lens that combines significant weight reduction with outstanding rendering capabilities and next-generation, high-performance AF," news release, 2026-02-24, https://www.nikon.com/company/news/2026/0224_imaging_01/ (accessed 2026-10-01).
4. Nikon Corporation, "NIKKOR Z 70-200mm f/2.8 VR S — Specifications," imaging.nikon.com, https://imaging.nikon.com/imaging/lineup/lens/z-mount/z_70-200mmf28_vr_s/ (accessed 2026-10-01).
5. Nikon UK, NIKKOR Z 70-200mm f/2.8 VR S II product page, https://www.nikon.co.uk/en_GB/product/lenses/mirrorless/nikkor-z-70-200mm-f2.8-vr-s-ii (search-result excerpt, accessed 2026-10-01).
6. Nikon Inc., NIKKOR Z 70-200mm f/2.8 VR S II product overview, https://www.nikonusa.com/p/nikkor-z-70-200mm-f28-vr-s-ii/20130/overview (search-result excerpt, accessed 2026-10-01).
7. I. H. Malitson, "A redetermination of some optical properties of calcium fluoride," *Applied Optics* 2, 1103–1107 (1963).
8. Optical glass catalogs of OHARA, HOYA, Schott, Sumita, HIKARI and CDGM, as bundled in the `opticalglass` Python package, version 2.0.2 (accessed 2026-10-01).
