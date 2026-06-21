## Patent Reference and Design Identification

**Patent:** US 2003/0072086 A1
**Application Number:** 10/132,704
**Filed:** April 26, 2002 (continuation of application No. 09/522,038, filed March 9, 2000, now US 6,414,799)
**Published:** April 17, 2003
**Inventors:** Tsutomu Uzawa; Masahiro Suzuki
**Assignee:** Olympus Optical Co., Ltd.
**Title:** Zoom Lens, and Image Pickup Device Using the Same
**Priority:** JP 11-061897 (March 9, 1999); JP 2000-017311 (January 26, 2000)
**Embodiment analyzed:** Example 1

The prescription is Example 1 of the patent's ten numerical examples. It is a four-group positive-negative-positive-positive zoom lens for a fixed-lens digital camera requiring a large rear space for an optical path splitter and sensor-side flat glass. The patent states that the first group and stop remain fixed during zooming; G2 moves toward the image side, while G3 and G4 move toward the object side. The fourth group is also the focusing group.

Example 1 is identified as the optical formula corresponding to the Olympus Zuiko 9-36 mm f/2.0-2.4 fixed zoom used in the Olympus E-10/E-20 family. The match is based on the following convergent evidence: focal length 9.200-35.500 mm versus the marketed 9-36 mm; patent F-number 2.007-2.328 versus the marketed f/2.0-2.4; half-field 34.0°-9.4°, consistent with a 2/3-inch CCD and image height 5.90 mm in the patent aberration diagrams; 14 powered elements in 11 powered groups; two aspherical surfaces; a 24.0 mm rear plane-parallel path-splitter block; and a 62 mm production filter thread that constrains the inferred front clear aperture.

## Optical Architecture

The design is a four-group zoom of positive-negative-positive-positive power distribution. The powered portion contains 14 elements in 11 groups. The patent's rear flat optical train contains a 24.0 mm prism or path splitter, an air gap, a filter plate, another air gap, a cover glass, and the final image distance L = 1.290 mm. These flat elements add no optical power but materially affect the physical and air-equivalent back focus.

G1 is a fixed positive front collector with a weak positive cemented doublet followed by a stronger positive meniscus. Its paraxial focal length is +72.70 mm. G2 is the negative variator, with two negative meniscus singlets followed by a nearly afocal cemented doublet; its paraxial focal length is -16.27 mm. The stop is fixed between G2 and G3. G3 is a positive relay group of two biconvex lenses, the second with a front asphere, followed by a biconcave negative lens; its paraxial focal length is +39.78 mm. G4 is a positive rear/focusing group with a cemented negative-positive meniscus doublet, a biconvex singlet, and a rear-aspherical biconvex singlet; its paraxial focal length is +24.59 mm.

The patent describes G3 and G4 together as approximating a double-Gauss arrangement. The important boundary is L10/L11: the image-side negative lens in G3 is concave toward the image plane, and the object-side negative lens in G4 is concave toward the object. This paired negative boundary is used to maintain aberration correction while preserving a long back focus.

The zoom gaps at wide, middle, and telephoto positions are:

| Gap | Wide | Middle | Telephoto |
|---|---:|---:|---:|
| d5, G1-G2 | 1.000 | 15.911 | 27.466 |
| d12, G2-stop | 31.555 | 16.623 | 5.088 |
| d13, stop-G3 | 9.475 | 4.871 | 1.500 |
| d19, G3-G4 | 6.748 | 8.658 | 9.436 |
| d26, G4-prism | 1.700 | 4.403 | 6.997 |

The sum of those five variable spaces is 50.478 mm at wide, 50.466 mm at middle, and 50.487 mm at telephoto, confirming an effectively constant lens-to-prism-front track. The first-surface-to-prism-front track is 105.346 mm at wide. The full patent physical track including the prism, filter, cover glass, and final image distance is 135.006 mm at wide.

The accompanying data file includes the powered lens and the 24.0 mm prism. It intentionally omits the filter plate and sensor cover glass, because the data specification excludes filters and sensor glass. The patent post-prism train is d28 = 1.000 mm air, d29 = 1.570 mm filter glass (nd = 1.54771), d30 = 1.000 mm air, d31 = 0.800 mm cover glass (nd = 1.52300), plus L = 1.290 mm to the image plane. From the rounded table this section is 4.8297 mm on an air-equivalent basis; the data file uses 4.8248 mm after the prism because that value re-closes the paraxial focus with the simplified flat-glass model.

## Element-by-Element Analysis

### L1 — Negative Meniscus, Convex to Object (Cemented with L2)

nd = 1.84666, νd = 23.78. Glass: S-TIH53 (OHARA). f = -129.1 mm.

L1 is the dense-flint negative member of the front cemented doublet. Its high index keeps the object-side curvature moderate while its low Abbe number supplies the dispersion needed to balance the positive crown partner. The lens is a negative meniscus with both radii positive, so the rear surface carries the stronger refractive action.

### L2 — Positive Meniscus, Convex to Object (Cemented with L1)

nd = 1.61800, νd = 63.33. Glass: S-PHM52 (OHARA). f = +95.8 mm.

L2 is the positive phosphate-crown member of the front achromat. The L1/L2 doublet has a long in-air focal length of +409.1 mm, so its purpose is not strong power generation. It primarily conditions axial color and spherical aberration before the stronger L3 front-group power carrier.

### L3 — Positive Meniscus, Convex to Object

nd = 1.77250, νd = 49.60. Glass: S-LAH66 (OHARA). f = +85.5 mm.

L3 supplies most of the positive power in G1. The high index allows a compact front group without excessive surface curvature. It also helps keep the front element diameter compatible with the 62 mm production filter thread.

### L4 — Negative Meniscus, Convex to Object

nd = 1.77250, νd = 49.60. Glass: S-LAH66 (OHARA). f = -20.8 mm.

L4 is the first and strongest negative element in the variator group. Its rear surface is much steeper than its front surface, producing the primary divergence required for the 4x zoom action. It also establishes the large change in G1-G2 spacing between wide and telephoto positions.

### L5 — Negative Meniscus, Convex to Object

nd = 1.84666, νd = 23.78. Glass: S-TIH53 (OHARA). f = -101.9 mm.

L5 is a weak negative meniscus, but it is the G2 lens identified by the patent for condition (8). Its relative partial dispersion θgF is approximately 0.62, above the patent's 0.59 lower limit. The patent uses this high g-line partial dispersion to reduce over-correction of lateral color at the wide-angle end.

### L6 — Biconcave Negative (Cemented with L7)

nd = 1.48749, νd = 70.23. Glass: S-FSL5 (OHARA). f = -27.4 mm.

L6 is a low-index, low-dispersion fluorophosphate crown in the G2 cemented doublet. It is strongly negative as a standalone element. In the cemented pair, however, its power is almost canceled by L7, leaving the doublet with a very long net focal length of +2286 mm.

### L7 — Positive Meniscus, Convex to Object (Cemented with L6)

nd = 1.80518, νd = 25.42. Glass: S-TIH6 (OHARA). f = +26.9 mm.

L7 is a dense-flint positive meniscus paired with L6. The large index contrast at the cemented surface gives an efficient achromatizing interface. The near-afocal net result is important: it allows G2 chromatic correction without adding much Petzval curvature or upsetting the zoom variator power.

### L8 — Biconvex Positive

nd = 1.84666, νd = 23.78. Glass: S-TIH53 (OHARA). f = +25.3 mm.

L8 is the first powered surface after the fixed stop and is the first lens in G3. It is the positive lens identified by the patent for condition (9), again using θgF approximately 0.62. Placing this glass near the stop lets the design use its partial-dispersion behavior while limiting lateral-color penalties.

### L9 — Biconvex Positive, Front Aspherical

nd = 1.69350, νd = 53.22. Glass: S-LAL13 (OHARA), equivalent to J-LAK13 (HIKARI). f = +27.1 mm.

L9 is the second positive element of G3 and carries the first aspherical surface on its object side. Catalog verification shows that OHARA S-LAL13 has the same six-digit code, 694532, and matches the patent's nd to the listed precision with only a 0.01 Abbe-number rounding difference. S-LAL13 is therefore the primary glass identification, with J-LAK13 as a cross-vendor equivalent.

The front asphere reduces the spherical and coma residuals generated by the strong positive relay surfaces around the fixed stop.

### L10 — Biconcave Negative

nd = 1.80518, νd = 25.42. Glass: S-TIH6 (OHARA). f = -16.6 mm.

L10 is the negative image-side member of G3. Its image-side radius, r19 = +20.7424 mm, is the patent's r3R in conditions (1) and (2). It opposes the positive Petzval contributions of L8 and L9 and forms the front half of the negative pair at the G3/G4 boundary.

### L11 — Negative Meniscus, Convex to Image (Cemented with L12)

nd = 1.80518, νd = 25.42. Glass: S-TIH6 (OHARA). f = -17.8 mm.

L11 is the negative object-side member of G4. Its object-side radius, r20 = -13.5000 mm, is the patent's r4F, and its focal length and Abbe number appear directly in conditions (3) and (4). The strongly curved object-side surface gives the G3/G4 interface the negative bending needed for aberration control and long back focus.

### L12 — Positive Meniscus, Convex to Image (Cemented with L11)

nd = 1.61800, νd = 63.33. Glass: S-PHM52 (OHARA). f = +35.6 mm.

L12 is the positive crown partner of L11. The L11/L12 doublet has a net in-air focal length of -43.6 mm, so it remains a negative subassembly even after the crown element is added. Its role is to temper the dense-flint dispersion of L11 while maintaining the negative boundary required by the patent's double-Gauss-like rear structure.

### L13 — Biconvex Positive

nd = 1.61800, νd = 63.33. Glass: S-PHM52 (OHARA). f = +31.0 mm.

L13 is the principal positive power element in G4. Its rear surface is substantially stronger than its front surface, helping form the converging beam headed into the final aspherical element and prism.

### L14 — Biconvex Positive, Rear Aspherical

nd = 1.69350, νd = 53.22. Glass: S-LAL13 (OHARA), equivalent to J-LAK13 (HIKARI). f = +49.7 mm.

L14 is the final powered element before the path-splitting prism. Its rear asphere is the fourth-group asphere specifically relevant to the patent's statement that an aspherical fourth-group surface should be configured so that positive refracting power decreases farther from the optical axis or negative refracting power increases.

At the inferred semi-diameter of 12.4 mm, the polynomial departure of surface 26A is +0.379 mm relative to the spherical base. Because the base radius is negative, this positive departure reduces the magnitude of the negative rear-surface sag at the rim rather than simply "steepening" the rear surface. The fourth-group asphere therefore reduces peripheral positive power, consistent with the patent's stated fourth-group asphere condition.

### P1 — 24 mm Plane-Parallel Path-Splitter Prism

nd = 1.51633, νd = 64.14. Glass: path-splitter prism glass, patent-listed 516/641 class. Paraxial power = 0.

The 24.0 mm flat prism is included in the rendered data file because it is a substantial part of the optical path and explains the long rear distance. It has no paraxial power. The filter and sensor cover plates behind it are not modeled as separate surfaces in the data file; the post-prism flat train is folded into the final air distance as described above.

## Glass Identification and Selection

The prescription uses six powered-lens glass types plus the flat prism glass. Five powered glass types are direct OHARA catalog matches: S-TIH53, S-PHM52, S-LAH66, S-FSL5, and S-TIH6. The two aspherical substrates match OHARA S-LAL13, with HIKARI J-LAK13 as the six-digit-code equivalent. The aspherical-substrate identification is therefore an OHARA S-LAL13 match, with J-LAK13 as the cross-vendor HIKARI equivalent.

| Glass | nd | νd | Where used | Role |
|---|---:|---:|---|---|
| S-TIH53 (OHARA) | 1.84666 | 23.78 | L1, L5, L8 | Dense titanium flint; front achromat, G2 partial-dispersion lens, G3 partial-dispersion lens |
| S-PHM52 (OHARA) | 1.61800 | 63.33 | L2, L12, L13 | Phosphate crown; positive achromatizing partner and rear-group power carrier |
| S-LAH66 (OHARA) | 1.77250 | 49.60 | L3, L4 | High-index lanthanum glass; G1 power carrier and strong G2 negative meniscus |
| S-FSL5 (OHARA) | 1.48749 | 70.23 | L6 | Low-dispersion fluorophosphate crown in the G2 near-afocal doublet |
| S-TIH6 (OHARA) | 1.80518 | 25.42 | L7, L10, L11 | Dense flint; G2 achromat partner and G3/G4 negative boundary elements |
| S-LAL13 (OHARA) / J-LAK13 equivalent | 1.69350 | 53.22 | L9, L14 | Lanthanum crown aspherical substrates |
| Prism glass, 516/641 class | 1.51633 | 64.14 | P1 | Flat optical path splitter |

The patent does not rely on FPL/FCD-series ED glass in the numerical prescription. Its chromatic strategy is instead based on a low-dispersion S-FSL5 element in the G2 cemented doublet and high-θgF S-TIH53 elements in L5 and L8, which satisfy conditions (8) and (9). This wording is deliberate: production literature describes the lens as an ED/aspherical zoom, but the patent prescription itself identifies only refractive-index and Abbe-number codes, and the glass palette resolves to the catalog types listed above.

## Focus Mechanism

Focusing is carried out by the fourth lens group. The patent explicitly allows G4 focusing and shows aberration diagrams at infinity and at an object distance of 300 mm, but it does not publish the close-focus numerical spacings for Example 1. The data file therefore does not attempt to reconstruct close-focus group travel. It uses identical infinity and close values in the `var` table so that the zoom mechanism is represented without inventing a focus curve.

The production camera's marketed focus range is retained as metadata: 0.6 m to infinity in standard focusing and 0.2-0.6 m in macro mode. This is not used as a ray-traced close-focus state in the prescription file.

## Aspherical Surfaces

The patent uses two even-order aspheres: surface 16A, the object-side surface of L9, and surface 26A, the image-side surface of L14. The equation uses x along the optical axis and y perpendicular to it, with r as the paraxial radius, K as the conic coefficient, and fourth-, sixth-, eighth-, and tenth-order coefficients. Both surfaces have K = 0, so the base conic is spherical and the departure is entirely polynomial.

### Surface 16A — L9 front, R = +30.9459 mm

| Coefficient | Value |
|---|---:|
| K | 0 |
| A4 | -8.0364 × 10^-6 |
| A6 | +8.1241 × 10^-8 |
| A8 | -1.9286 × 10^-9 |
| A10 | +1.7517 × 10^-11 |

At the inferred semi-diameter of 9.4 mm, the polynomial departure is -0.0299 mm. On this positive-radius front surface, the negative peripheral departure slightly flattens the surface relative to the spherical base and reduces marginal positive power.

### Surface 26A — L14 rear, R = -39.8402 mm

| Coefficient | Value |
|---|---:|
| K | 0 |
| A4 | +1.4849 × 10^-5 |
| A6 | +1.6305 × 10^-8 |
| A8 | -8.0908 × 10^-11 |
| A10 | +1.6693 × 10^-13 |

At the inferred semi-diameter of 12.4 mm, the polynomial departure is +0.379 mm. Because the surface has a negative base radius, this positive departure shifts the rim toward the image side relative to the negative spherical sag and reduces peripheral positive refracting power. The patent does not identify the manufacturing process for either asphere. Both are glass-body aspheres in the numerical prescription; no resin hybrid layer is listed.

## Conditional Expressions

The patent gives nine conditional expressions. Using r3R = r19 = +20.7424 mm, r4F = r20 = -13.5000 mm, f4F = -17.7807 mm, νd4F = 25.42, fw = 9.200 mm, z3 = 7.975 mm, z4 = 5.297 mm, and Ds3w = 9.475 mm, Example 1 evaluates as follows.

| Condition | Formula | Computed | Patent table | Status |
|---|---|---:|---:|---|
| (1) | (r4F + r3R) / (r4F - r3R) | -0.2115 | -0.21 | Satisfies |
| (2) | (1/r3R - 1/r4F) × fw | 1.125 | 0.13 | Patent table error |
| (3) | f4F / fw | -1.933 | -1.93 | Satisfies |
| (4) | νd4F | 25.42 | 25.42 | Satisfies |
| (5) | z3 / fw | 0.867 | 0.87 | Satisfies |
| (6) | z4 / fw | 0.576 | 0.58 | Satisfies |
| (7) | Ds3w / fw | 1.030 | 1.03 | Satisfies |
| (8) | θgF of L5 | approximately 0.62 | 0.62 | Satisfies |
| (9) | θgF of L8 | approximately 0.62 | 0.62 | Satisfies |

The patent's Example 1 value for condition (2) is printed as 0.13, but the formula in the patent includes multiplication by fw. The value 0.13 corresponds to the unscaled reciprocal-radius difference, approximately 0.1223, rounded. The correct condition value is 1.125, which lies inside the required 0.5-2.5 interval.

## Aberration Correction Strategy

The design uses three main strategies. First, the G3/G4 boundary supplies a negative pair shaped like the central negative pair of a double-Gauss system. This controls axial aberrations while preserving a long rear distance.

Second, the variator group uses a near-afocal cemented pair, L6/L7, to correct color without materially adding to field curvature. The pair's standalone element powers are strong, but the cemented assembly is close to zero net power.

Third, the design places high-relative-partial-dispersion dense flints at L5 and L8. These are not the strongest elements in their respective groups by simple power alone, but they occupy positions where g-line residual color is important. This is the purpose of patent conditions (8) and (9).

The surface-by-surface Petzval sum of the powered lens is +0.000306 mm^-1, corresponding to a Petzval radius of approximately 3265 mm. This value was computed using the surface formula φ/(n·n'), not a thin-lens element approximation.

## Verification Summary

Independent paraxial verification was performed from the transcribed Example 1 prescription. The trace used the y, n·u form of the paraxial ray vector, with surface power φ = (n' - n) / R and translation in the current medium.

| Quantity | Computed | Patent / source value |
|---|---:|---:|
| EFL, wide | 9.1998 mm | 9.200 mm |
| EFL, middle | 18.1997 mm | 18.200 mm |
| EFL, telephoto | 35.4995 mm | 35.500 mm |
| Patent F-number, wide | 2.007 | 2.007 |
| Patent F-number, middle | 2.176 | 2.176 |
| Patent F-number, telephoto | 2.328 | 2.328 |
| Air-equivalent BFD from L14 rear, wide | 22.352 mm | 22.35 mm |
| G1 focal length | +72.70 mm | — |
| G2 focal length | -16.27 mm | — |
| G3 focal length | +39.78 mm | — |
| G4 focal length | +24.59 mm | — |
| Petzval sum | +0.000306 mm^-1 | — |

Tracing the full rounded patent table with L = 1.290 mm leaves only a few microns of residual paraxial focus error, which is consistent with the published rounding. The data-file simplification folds the omitted filter, cover glass, intervening air gaps, and final image distance into a post-prism air distance of 4.8248 mm.

Patent table errata used in the transcription are: nd11 is printed without the leading 1; νd12 is printed with a spurious minus sign; νd13 is printed with a spurious leading 3; and the condition (2) correspondence value for Example 1 omits multiplication by fw.

## Sources

- US 2003/0072086 A1, "Zoom Lens, and Image Pickup Device Using the Same," Tsutomu Uzawa and Masahiro Suzuki, Olympus Optical Co., Ltd. Primary source for the prescription, zoom gaps, aspherical coefficients, conditional expressions, and patent back focus.
- Olympus CAMEDIA E-10 reference/specification material. Source for the marketed 9-36 mm f/2.0-2.4 lens, 14 elements in 11 groups, 62 mm filter thread, 2/3-inch CCD, and published working ranges.
- OHARA S-TIH53, S-PHM52, S-LAH66, S-FSL5, S-TIH6, and S-LAL13 catalog datasheets.
- HIKARI J-LAK13 datasheet and OHARA/Hoya cross-reference material for the 694532 S-LAL13 / J-LAK13 equivalence.
