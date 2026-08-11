## Patent Reference and Design Identification

**Patent:** JP1996-327896 A (特開平8-327896 A)
**Filed:** May 26, 1995
**Published:** December 13, 1996
**Inventor:** Yoshinobu Asakura
**Applicant:** Minolta Co., Ltd.
**Title:** Lens system (レンズ系)
**Embodiment analyzed:** Example 1

The modeled prescription is Example 1 of JP1996-327896. The patent describes an inner-focus telephoto lens system for photographic and video cameras in which a negative internal group moves axially while the front and rear groups remain fixed. Example 1 publishes a 390 mm focal-length header, F/4.59, a 3.2° half field, and the infinity/3 m focus endpoints used in the data file (Table 1; ¶0017–0021).

The fixed production correlation is the MINOLTA AF 400mm f/4.5 APO G. The located Minolta-authored owner’s manual identifies the AF 400mm F4.5 APO G as a 400 mm f/4.5 Minolta AF SLR lens with 9 elements in 7 groups, a 3 m minimum focusing distance, 0.15× maximum magnification, and a mandatory rear NORMAL filter. The public display name follows that manufacturer source and does not add an unsupported `HS` suffix.

Several independent quantities support the selected correlation without requiring the patent prescription to be rescaled. The patent’s 390 mm header corresponds to a computed paraxial EFL of 391.432898 mm, while the production specification is 400 mm. The patent’s F/4.59 is consistent with the marketed f/4.5 designation. The 3 m focus endpoint is common to both sources, and the modeled close-focus magnification is |m| = 0.152370, consistent with the manufacturer’s rounded 0.15× figure.

The difference between the patent model’s 8 elements / 6 air-separated glass groups and the production lens’s 9 elements / 7 groups is not reconciled by adding an unsupported optical element. The manufacturer states that the rear NORMAL filter forms an integral part of the production optical design, but the available manual does not state whether its 9-element / 7-group specification counts that removable filter. The count difference is therefore left unresolved. The sequential model excludes the filter and retains the patent’s 8-element / 6-group active prescription.

No focal-length scaling is applied. All radii, glass thicknesses, and published air spacings remain at the native Example-1 scale. The marketed 400 mm and f/4.5 values are therefore kept separate from the modeled 391.432898 mm EFL and F/4.59 design aperture.

## Optical Architecture

The design is an all-spherical, three-functional-group telephoto of positive-negative-positive power sequence. The active patent model contains eight elements in six air-separated glass groups and fourteen refracting surfaces, followed by the aperture stop. The computed first-surface-to-image track is 311.124012 mm, giving `TL/EFL = 0.794834`; it satisfies the adopted telephoto criterion. Its 191.515012 mm back focal distance is shorter than the EFL, so it is not retrofocus.

The fixed front group Gr1 consists of two positive biconvex elements, L1 and L2, followed by the negative biconcave L3. Isolated in air for first-order reporting, Gr1 has an EFL of +183.752680 mm. The patent’s first condition constrains this positive-group power relative to the complete system so that the design does not become excessively long at one extreme or excessively difficult to correct at the other.

The moving focus group Gr2 contains two cemented pairs: L4+L5 and L6+L7. Gr2 is net negative, with an isolated group EFL of -113.226858 mm. Its strong negative power allows the required conjugate change to be obtained with relatively short internal travel, which is the central mechanism discussed by the patent for fast inner focusing (¶0006–0012, ¶0029–0032).

The fixed rear group Gr3 is the single positive meniscus L8, with EFL +312.413567 mm. The patent specifically associates this one-element rear group with control of focus-dependent spherical aberration and field curvature. It further states that the meniscus orientation, with its concave side facing the moving group and convex side toward the image, assists correction of spherical and chromatic changes during focusing (¶0033–0037).

The stop position itself is source-published: it follows T14, 31.000 mm behind surface 14. The patent does not publish a stop diameter or numerical image-plane distance. The data file therefore uses a modeled stop semi-diameter of 17.4853 mm and a stop-to-image distance of 160.515012 mm; these are modeling inferences that reproduce the published design f-number and the computed infinity conjugate, not patent table entries.

The patent also does not publish clear semi-diameters. The surface semi-diameters in the data file are inferred modeling values. Stage-4 validation traced exact meridional spherical rays through the physical stop at both published focus endpoints, including wide-open on-axis rays to the stop edge and 0.60-field rays at the viewer’s ±0.75 pupil samples. The final dimensions were then checked for edge thickness, rim slope, cross-gap clearance, and containment. They should not be read as source dimensions.

## Element-by-Element Analysis

### L1 — Biconvex Positive

`nd = 1.49310`, `νd = 83.6`. Glass: `493836 — Minolta AD/ED fluorophosphate class (catalog unresolved)`. Standalone `f = +214.144 mm`.

L1 is the first converging element of fixed Gr1. It shares its d-line index and Abbe number with L2, so the front pair begins with two relatively low-index, high-Abbe positive elements before the negative L3. The standalone focal length is reported for the element isolated in air; it is not the same as L1’s in-situ contribution inside the complete thick group.

### L2 — Biconvex Positive

`nd = 1.49310`, `νd = 83.6`. Glass: `493836 — Minolta AD/ED fluorophosphate class (catalog unresolved)`. Standalone `f = +219.750 mm`.

L2 continues the positive front-group power with nearly the same standalone power as L1. The 0.400 mm air gap between L1 and L2 keeps the two lenses optically distinct rather than forming a cemented pair. In the complete Gr1 assembly, L1 and L2 act together with L3 to produce the group’s +183.752680 mm isolated EFL.

### L3 — Biconcave Negative

`nd = 1.72100`, `νd = 33.4`. Glass: `721334 — high-index medium-dispersion glass (catalog unresolved)`. Standalone `f = -240.817 mm`.

L3 is the negative member that completes Gr1. Its higher index and lower Abbe number distinguish it from L1 and L2. The contrast in sign and glass coordinates is consistent with chromatic and monochromatic balancing within the fixed front group, but the patent does not name a vendor glass or publish partial-dispersion data from which a more specific spectral role could be established.

### L4 + L5 — First Cemented Pair in the Moving Group

**L4:** `nd = 1.62004`, `νd = 36.3`. Glass: `E-F2 (HOYA catalog equivalent; patent 620363; production supplier unspecified)`. Standalone `f = -271.004 mm`.

**L5:** `nd = 1.48749`, `νd = 70.2`. Glass: `S-FSL5 (OHARA catalog equivalent; patent 487702; production supplier unspecified)`. Standalone `f = +224.071 mm`.

L4 is a negative meniscus concave toward the image and L5 is a positive meniscus of the same general orientation, cemented at surface 8. Their standalone powers are opposite in sign, but the cemented pair is only weakly positive when isolated in air: EFL `+1707.801735 mm`. This distinction is important because the complete moving group Gr2 is negative; D1 does not by itself supply that negative group power.

The patent’s focus-group condition applies to Gr2 as a whole, not to either member of this cemented pair individually. The design therefore uses the pair as part of a compound negative focusing assembly rather than treating L4’s standalone negative power as a direct measure of Gr2 behavior.

### L6 + L7 — Second Cemented Pair in the Moving Group

**L6:** `nd = 1.65844`, `νd = 50.9`. Glass: `N-SSK5 (SCHOTT catalog equivalent; patent 658509; production supplier unspecified)`. Standalone `f = -60.264 mm`.

**L7:** `nd = 1.84566`, `νd = 23.8`. Glass: `846238 — dense-flint glass (catalog unresolved)`. Standalone `f = +135.182 mm`.

L6 is the strongest negative standalone element in the prescription. It is cemented to the high-index, low-Abbe positive meniscus L7 at surface 11. Unlike the first cemented pair, this D2 pair remains strongly negative when isolated in air, with EFL `-99.746001 mm`. It therefore supplies most of the negative character of Gr2, whose complete isolated EFL is -113.226858 mm.

The patent explains the system-level tradeoff of this negative focus-group power: stronger negative power reduces the required focus-group displacement, but excessive power increases focus-dependent coma and axial/lateral chromatic variation (¶0029–0032). That statement applies to the assembled Gr2 and should not be reduced to the standalone power of L6 alone.

### L8 — Positive Meniscus, Convex toward Image

`nd = 1.48749`, `νd = 70.2`. Glass: `S-FSL5 (OHARA catalog equivalent; patent 487702; production supplier unspecified)`. Standalone `f = +312.414 mm`.

L8 is the entire fixed Gr3 rear group, so its standalone element focal length and the isolated Gr3 focal length are the same to reporting precision. Its two radii form the positive rear meniscus specified by the patent, with the convex side toward the image.

The patent assigns L8 a specific role in stabilizing aberrations as Gr2 moves. It states that the positive rear meniscus is effective in compensating variations of spherical aberration and field curvature, and that its orientation aids correction of spherical and chromatic changes induced by focusing (¶0033–0037). Condition (3) constrains the curvature of L8’s object-side surface relative to the Gr3 focal length.

## Glass Identification and Selection

The patent publishes only d-line refractive index and Abbe number for each glass. It does not identify manufacturers or catalog names. The data file uses compatible modern catalog curves only where both coordinates agree within the project tolerance and labels them as equivalents with the production supplier unspecified.

| Elements | nd | νd | Data-file glass annotation |
|---|---:|---:|---|
| L1, L2 | 1.49310 | 83.6 | `493836 — Minolta AD/ED fluorophosphate class (catalog unresolved)` |
| L3 | 1.72100 | 33.4 | `721334 — high-index medium-dispersion glass (catalog unresolved)` |
| L4 | 1.62004 | 36.3 | `E-F2 catalog equivalent (patent 620363)` |
| L5, L8 | 1.48749 | 70.2 | `S-FSL5 catalog equivalent (patent 487702)` |
| L6 | 1.65844 | 50.9 | `N-SSK5 catalog equivalent (patent 658509)` |
| L7 | 1.84566 | 23.8 | `846238 — dense-flint glass (catalog unresolved)` |

The glass palette spans a wide range of Abbe numbers, but the patent names no glass vendor and does not publish per-element `nC`, `nF`, `ng`, or `dPgF`. An independent catalog-coordinate check supports E-F2 for L4, S-FSL5 for L5/L8, and N-SSK5 for L6 as close modern equivalents. These labels enable compatible Sellmeier curves without claiming the production melts came from those vendors. L1/L2, L3, and L7 remain coordinate-only, and `APO` remains product branding rather than a modeled spectral classification.

## Focus Mechanism

The focus status is `PUBLISHED`, not reconstructed. The patent states that Gr2 moves toward the image as the object distance changes from infinity to the closest published distance of 3 m, while Gr1 and Gr3 remain fixed (¶0017–0018).

| Variable gap | Infinity | 3 m | Change |
|---|---:|---:|---:|
| T6, Gr1 → Gr2 | 29.311 mm | 43.262 mm | +13.951 mm |
| T12, Gr2 → Gr3 | 21.978 mm | 8.028 mm | -13.950 mm |

The nearly equal and opposite changes correspond to approximately 13.95 mm of imageward translation of Gr2. The published endpoint gaps do not conserve their sum exactly: the close-focus total is larger by 0.001 mm. That residual is retained as source-precision rounding rather than silently normalized.

A finite-conjugate trace using the authored close-focus state gives an image-plane-referenced shooting distance of 3.009346 m and transverse magnification `m = -0.152370`. These computed values agree with the source-level 3 m endpoint and the manufacturer’s rounded 0.15× maximum magnification within the precision expected from the published prescription.

No separate mechanical drive system is asserted here. The patent establishes the moving optical group and its axial direction; the available data used for this model does not establish a motor architecture that needs to be represented in the prescription.

## Conditional Expressions

The patent gives three conditions for the three-group inner-focus form:

$$
0.40 < \frac{f_1}{f} < 0.52
$$

$$
0.23 < \left|\frac{f_2}{f}\right| < 0.35
$$

$$
0.35 < \frac{r}{f_3} < 0.55
$$

Using the patent’s 390 mm header focal length and group powers recomputed from the rounded Table-1 prescription gives `f1/f = 0.471161` and `|f2/f| = 0.290325`, both within the printed ranges. Example 1 Table 4 prints 0.471 and 0.291 respectively; the second value differs by 0.000675 from the recomputation, which is consistent with Table 4 having been evaluated from higher-precision design data than the rounded construction table.

Condition (3) contains a sign inconsistency within the printed source. The patent defines `r` as the object-side radius of L8, but Example 1 gives surface 13 as `R13 = -136.006 mm` while Gr3 has positive focal length. The literal signed ratio is therefore `r13/f3 = -0.435340`, which cannot satisfy the printed positive inequality. Using the radius magnitude gives `|r13|/f3 = 0.435340`, reproducing Table 4’s positive 0.435 value. The data file preserves `R13 = -136.006 mm`; only the condition check uses the magnitude needed to reproduce the patent’s own table.

## Verification Summary

Independent paraxial calculations from the final data arrays give EFL `391.432898 mm`, compared with the patent’s rounded 390 mm header, a residual of +0.3674%. The infinity back focal distance from surface 14 is `191.515012 mm`. The surface-by-surface Petzval sum, computed as `φ/(n·n′)`, is `-0.000255893771 mm⁻¹`, corresponding to a reciprocal signed Petzval radius of approximately `-3907.872 mm` under the adopted curvature convention.

Because the patent supplies the stop position but not its diameter, the physical stop semi-diameter is inferred. The authored `17.4853 mm` stop semi-diameter yields an entrance-pupil diameter of `85.2795 mm` and reproduces F/4.59 to the precision of the model. The stop-to-image spacing is likewise modeled because the patent does not tabulate the image plane.

The inferred semi-diameters were checked at both published focus endpoints. The minimum modeled element edge thickness is `0.536191 mm`, the maximum spherical rim angle is `41.992°`, and the most restrictive close-focus cross-gap is surface 12→13: 5.976658 mm of sag intrusion against a 7.225200 mm 90%-gap limit. Exact wide-open meridional rays to the physical stop edge and representative 0.60-field / ±0.75-pupil rays are contained at all fourteen refracting surfaces; the smallest sampled clear-aperture margin is 0.596131 mm at surface 10. These are model-validation results, not patent dimensions.

The system is entirely spherical, so there are no aspheric coefficients, conic conventions, or asphere-scaling transformations to report. No dummy, flare-cutter, cover-glass, or folded-path surfaces are included. The production rear filter is deliberately omitted as described above, and no focal-length scaling is applied.

## Sources

1. Minolta Co., Ltd., JP1996-327896 A (特開平8-327896 A), “Lens system” (レンズ系), Example 1; especially Table 1, Table 4, and ¶0017–0021, ¶0029–0038.
2. Minolta Co., Ltd., owner’s manual for AF APO Telephoto 300mm F4 APO G / AF 400mm F4.5 APO G, document 9222-2640-14 (P9611-B509), manufacturer-authored archival scan.
3. HOYA E-F2 and OHARA S-FSL5 optical-glass catalog data; used only for compatible dispersion curves and coordinate-class comparison.
4. SCHOTT Advanced Optics N-SSK5 catalog data; used only for a compatible dispersion curve and cross-vendor coordinate comparison.
