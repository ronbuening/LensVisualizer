## Patent Reference and Design Identification

**Patent:** JP 2016-184136 A
**Application Number:** JP 2015-065523
**Filed:** 27 March 2015
**Published:** 20 October 2016
**Inventor:** Yukihiro Yamamoto
**Applicant:** Sigma Corporation
**Title:** Fish-eye Lens
**Embodiment analyzed:** Numerical Example 7

This model transcribes Numerical Example 7 as a construction correlation to the OLYMPUS M.ZUIKO DIGITAL ED 8mm f/1.8 Fisheye PRO. The correlation is supported by several convergent features, rather than by a manufacturer-confirmed prescription:

1. The patent construction contains 17 lens elements in 15 air-separated groups, matching the published Olympus construction.
2. The patent has one aspherical surface, on the moving cemented group, consistent with the product's single aspherical element.
3. The source's approximately 7.9 mm design focal length and F/1.82 aperture correspond closely to the marketed 8 mm and f/1.8.
4. The published near-focus configuration corresponds to a 120 mm object-to-image distance, matching the product's stated 0.12 m closest focusing distance.
5. Filing in March 2015 precedes Olympus's 12 May 2015 announcement and its planned late-June 2015 introduction. Timing is supporting context, not proof of authorship of the production lens.

The native patent field is 197.08°, with image radius 11.60 mm at infinity. The marketed lens specifies a 180° diagonal field for Micro Four Thirds. These figures are retained separately; there is no scaling to make them coincide. Neither the exact production glass identities nor a Sigma/Olympus manufacturing or supply relationship is established by these sources.

Figure 25, on original PDF page 34 (printed page 33), is the matching optical section. The reference to Figure 31 in ¶0102 is inconsistent with the drawing sequence in ¶0081, the 17-element construction, and the adjacent Example 7 aberration plots. Only that figure identification is corrected; no prescription number is repaired. [1–3]

## Optical Architecture

The design is a negative-positive-positive fisheye: a fixed negative front group G1, a weak positive moving group G2, and a fixed positive rear group G3. The negative entrance section and longer rear working distance give a retrofocus organization. The quoted group powers below are standalone Gaussian group powers, not sums of the individual element powers.

| Functional group | Source surfaces | Calculated focal length (mm) |
|---|---|---:|
| G1 | 1–8 | -8.933080 |
| G2 | 9–11 | +159.080499 |
| G3 | 12–33 | +23.596171 |
| G1N1 | 1–4 | -12.395838 |
| G1P1 | 5–6 | +54.733028 |
| G1N2 | 7–8 | -30.987556 |
| G3a | 12–17 | +34.435926 |
| G3b | 19–33 | +26.923341 |

The computed system EFL is 7.896959 mm at infinity and 7.604297 mm at the published near-focus spacing. These reproduce the source's rounded 7.90 mm and 7.60 mm values. The first-vertex-to-image track is 96.5398 mm in both configurations, in the source and in the model: filter F is traced at its source position, so the model image plane is the source's physical image plane.

Source surfaces 34–35 describe a 4.0000 mm parallel filter F, nd = 1.51633 and νd = 64.12, with 12.7099 mm of air before it and 1.0000 mm after it. Paragraph 0103 explicitly states: “このフィルターＦの光軸上の位置は第３レンズ群Ｇ３と像面の間ではどこであっても収差に影響を与えない。” This says that F may sit anywhere between G3 and the image without affecting aberrations. The statement frees the plate's axial position, not its presence: a plane-parallel plate in the converging image-side beam adds the same spherical aberration, colour and image shift wherever it stands, and the prescription is corrected with it in place. F is therefore modeled as a `rearPlates` entry carrying the source's thickness, index, Abbe number and both physical air gaps. Every analysis traces it; the drawn section, the element list and the 17-element count leave it out.

Behind surface 33 come the 12.7099 mm air gap, the 4.0000 mm plate and 1.0000 mm of air, so the last lens vertex is 17.709900 mm from the image plane. The infinity paraxial BFD measured from the same vertex through the plate is 17.709918 mm, more than twice the EFL. The table's BF = 1.0000 mm is only the air after F. The plate's d-line air-equivalent thickness is 4/1.51633 = 2.637948 mm; an air-only gap of 12.7099 + 2.637948 + 1 = 16.347848 mm would carry the same paraxial rays to an image plane 1.362052 mm closer to the lens. The model does not use that fold, which preserves first-order values only: by exact trace the marginal on-axis ray at F/1.82 crosses the axis 13.95 µm short of the paraxial focus with the plate and 72.65 µm short with the folded gap.

The stop is source surface 18, between G3a and G3b. G1 contains two front negative menisci, an intervening positive lens, and a final negative meniscus; G2 is a cemented positive/negative doublet. The patent links the positive lens within G1 to reduced ray-bundle diameter at the focusing group (¶0037–0039). G3 distributes positive and negative elements on both sides of the stop rather than concentrating all rear power in one element. [1]

Figure 25 brackets the three groups and, beneath them, the sub-groups G1N1, G1P1, G1N2, G3a and G3b, with the stop S between G3a and G3b, filter F and image plane I behind G3, and a focus arrow under G2 pointing toward the image. The patent designates only three elements individually: L1N1 and L2N1, the two menisci of G1N1 (L1 and L2 here), and L3N2, the single lens of G1N2 (L4 here; the patent's index counts the negative lenses of G1, so its third negative lens is the fourth element). The diagram numbers all seventeen elements in sequence; the three patent designations appear in the role text of L1, L2 and L4, because "L3N2" printed under the fourth element beside a plain "3" reads as the third lens. Its group row carries G1, G2 and G3; the sub-groups are named in each element's role text.

## Element-by-Element Analysis

The focal lengths in this section are calculated for each glass element standing alone in air, using its two bounding curvatures and center thickness. At a cemented junction these are explanatory isolated-element values; the net cemented-group power is calculated separately. Catalog names identify coordinate equivalents, not the source's supplier or melt. Surface numbers below are those of the patent, with 9A denoting its starred asphere.

### L1: Negative Meniscus

nd = 2.00100, νd = 29.12. Glass: TAFD55 (HOYA coordinate equivalent; supplier unconfirmed). f = -25.097136 mm.

L1 is the patent's L1N1, the first negative meniscus of G1N1, convex toward the object. Its high index and strongly curved rear face permit substantial negative power in the front section. The patent's first shape condition governs this meniscus together with the wide-field/aberration compromise discussed in ¶0025–0027. The inferred rear semi-diameter is 15.4 mm; its steep rim is treated explicitly in the model limits below.

### L2: Negative Meniscus

nd = 1.77250, νd = 49.60. Glass: TAF1 (HOYA coordinate equivalent; supplier unconfirmed). f = -36.158630 mm.

L2 is the patent's L2N1, the second negative meniscus of G1N1, convex toward the object. Together with L1 it forms the front negative subassembly, rather than an isolated front diverger followed immediately by the focus unit. Condition (2) concerns this element's bending; the patent discusses its relationship to field coverage and off-axis correction in ¶0028–0029.

### L3: Biconvex Positive

nd = 1.84666, νd = 23.77. Glass: FDS90 (HOYA coordinate equivalent; supplier unconfirmed). f = +54.733028 mm.

L3 is the positive G1P1 lens between the two negative subassemblies of G1. Its biconvex form opposes the surrounding negative power. The patent specifically attributes reduced ray-bundle diameter at G2 to this positive subgroup, supporting a smaller, lighter focusing unit (¶0037–0039); that statement is distinct from a computed aberration contribution for L3.

### L4: Negative Meniscus

nd = 1.77250, νd = 49.60. Glass: TAF1 (HOYA coordinate equivalent; supplier unconfirmed). f = -30.987556 mm.

L4 is the patent's L3N2, the final negative meniscus of G1, concave toward the object, and forms G1N2. It precedes the first moving air gap. The source ties its shape to the aberration balance with the adjacent focus group (¶0030–0032). It remains fixed while G2 moves.

### L5: Biconvex Positive (1× Asph)

nd = 1.80610, νd = 40.71. Glass: NBFD13 (HOYA coordinate equivalent; supplier unconfirmed). f = +52.341655 mm.

L5 is the positive member of the moving G2 doublet. Its object-side surface 9A is the design's sole asphere. The source places an asphere in G2 to limit focus-dependent spherical-aberration variation (¶0067–0068); no manufacturing method is specified. Figure 25 draws the doublet square-cut, so the shared surface 10 and both exterior surfaces carry one inferred 11.0 mm rim.

### L6: Biconcave Negative

nd = 1.84666, νd = 23.77. Glass: FDS90 (HOYA coordinate equivalent; supplier unconfirmed). f = -77.140711 mm.

L6 is the negative member cemented to L5, with no invented cement layer or air gap at surface 10. Its negative isolated power largely offsets L5, leaving a much weaker positive focusing doublet. This distinction matters: G2 moves as a whole, so its net power and spacing sensitivity, not either isolated-element focal length, govern the first-order focus action.

### L7: Biconvex Positive

nd = 1.95374, νd = 32.31. Glass: TAFD45 (HOYA coordinate equivalent; supplier unconfirmed). f = +36.937561 mm.

L7 is the first positive lens of fixed G3a. It receives the ray bundle after the moving doublet and the second variable air gap. Its position and positive power begin the rear converging section; the source does not assign it a separately quantified aberration budget.

### L8: Positive Meniscus

nd = 2.00100, νd = 29.12. Glass: TAFD55 (HOYA coordinate equivalent; supplier unconfirmed). f = +45.347366 mm.

L8 is a positive meniscus in G3a, convex toward the object. It uses the same native 2.00100/29.12 coordinate as L1 despite their different signs of power. This repeated prescription coordinate must not be changed to force a distinction between commercial HR and Super HR labels.

### L9: Negative Meniscus

nd = 1.48749, νd = 70.41. Glass: FC5 (HOYA coordinate equivalent; supplier unconfirmed). f = -40.086569 mm.

L9 is the negative meniscus immediately preceding the stop-side air space. Its lower-index, higher-Abbe glass and negative power contrast with the two preceding positive elements. Those facts establish the group's mixed-power arrangement, but do not by themselves measure a particular chromatic or field-curvature correction.

### L10: Biconvex Positive

nd = 1.43700, νd = 95.06. Glass: FCD100 (HOYA coordinate equivalent; supplier unconfirmed). f = +63.959744 mm.

L10 is the first positive lens after the stop. Its high-Abbe coordinate is shared by several later positive elements. It contributes to the positive rear subgroup identified in ¶0102; its glass choice is consistent with the source's preference for multiple high-Abbe positive lenses in G3b (¶0069–0072).

### L11: Biconvex Positive

nd = 1.43700, νd = 95.06. Glass: FCD100 (HOYA coordinate equivalent; supplier unconfirmed). f = +32.142653 mm.

L11 is the positive, low-dispersion member of the second cemented pair. Its rear face is the shared source surface 22. The pairing places a positive high-Abbe element next to a negative lower-Abbe element, furnishing a chromatic balancing degree of freedom without establishing apochromatic performance.

### L12: Biconcave Negative

nd = 1.92118, νd = 23.95. Glass: FDS24 (HOYA coordinate equivalent; supplier unconfirmed). f = -22.211152 mm.

L12 is the negative member of that cemented pair, entered as the medium after shared surface 22. Its stronger isolated negative power makes this pair net negative, even though the surrounding G3b group is net positive. A net positive label for every assembly behind the stop would therefore be incorrect.

### L13: Biconvex Positive

nd = 1.59282, νd = 68.60. Glass: FCD505 (HOYA coordinate equivalent; supplier unconfirmed). f = +50.447365 mm.

L13 is an air-separated positive lens following the second cemented pair. Its 1.59282/68.60 coordinate is compatible with multiple current or historical catalog variants. Its front surface 24 is also the first exterior boundary limiting one outer member of the modeled wide-open default off-axis fan; that edge loss is retained as vignetting.

### L14: Negative Meniscus

nd = 1.84666, νd = 23.77. Glass: FDS90 (HOYA coordinate equivalent; supplier unconfirmed). f = -27.801197 mm.

L14 is a negative meniscus between L13 and the following positive rear elements. It adds another sign change within G3b. The clear rim and the narrow following air gap are treated together: extending the spherical faces beyond the modeled optical apertures can cause nonphysical intersections, so aperture checks cannot be replaced by unlimited surface extension.

### L15: Biconvex Positive

nd = 1.80420, νd = 46.48. Glass: TAF3 (HOYA coordinate equivalent; supplier unconfirmed). f = +46.781404 mm.

L15 is a positive biconvex lens following L14. Its higher-Abbe coordinate differs from the denser lower-Abbe glasses of the negative members. This element is part of the fixed rear imaging group; no stabilization or independent motion is assigned to it.

### L16: Positive Meniscus

nd = 1.43700, νd = 95.06. Glass: FCD100 (HOYA coordinate equivalent; supplier unconfirmed). f = +57.754941 mm.

L16 is a positive meniscus, convex toward the object, near the back of G3b. It shares the native high-Abbe 1.43700/95.06 coordinate with L10, L11 and L17. The repeated coordinate is preserved rather than split into production ED/Super ED categories that the patent does not identify.

### L17: Plano-Convex

nd = 1.43700, νd = 95.06. Glass: FCD100 (HOYA coordinate equivalent; supplier unconfirmed). f = +65.208467 mm.

L17 is the final plano-convex lens, with the plane face toward the image. It closes the fixed rear group before the 12.7099 mm air gap to filter F. The source filter is excluded from the 17-element photographic-lens count and from the drawn section; it is traced at its source position as a rear plate.

The calculated net focal length of D1 (L5/L6, source surfaces 9–11) is +159.080499 mm. D2 (L11/L12, source surfaces 21–23) is -94.525082 mm. These complete cemented-interface calculations use the actual change of refractive index at each junction; they are not sums of isolated lens powers.

## Glass Identification and Selection

The prescription uses native d-line indices at 587.56 nm and d-line Abbe numbers (¶0074). The following names are defensible HOYA coordinate equivalents checked against the manufacturer catalog, including obsolete entries. They do not establish which supplier furnished production glass. The unchanged patent coordinates, including nd greater than 2, remain the primary numerical inputs. [1,4]

| HOYA coordinate equivalent | Patent nd | Patent νd | Model elements |
|---|---:|---:|---|
| TAFD55 | 2.00100 | 29.12 | L1, L8 |
| TAF1 | 1.77250 | 49.60 | L2, L4 |
| FDS90 | 1.84666 | 23.77 | L3, L6, L14 |
| NBFD13 | 1.80610 | 40.71 | L5 |
| TAFD45 | 1.95374 | 32.31 | L7 |
| FC5 | 1.48749 | 70.41 | L9 |
| FCD100 | 1.43700 | 95.06 | L10, L11, L16, L17 |
| FDS24 | 1.92118 | 23.95 | L12 |
| FCD505 | 1.59282 | 68.60 | L13 |
| TAF3 | 1.80420 | 46.48 | L15 |

The catalog matches have small but nonzero rounding or variant residuals; the file does not replace patent coordinates with catalog coordinates. FCD505/FCD515 and TAF3/TAF3D illustrate naming ambiguity at essentially shared coordinates. The application resolver currently selects a compatible OHARA S-LAH66 entry for the TAF1 annotations. That is a runtime spectral equivalent, not evidence of an OHARA production supply chain.

Filter F's source coordinate, 1.51633/64.12, lies 0.02 in νd below OHARA S-BSL7 (1.51633/64.14). The same small offset separates this example's printed values from other catalog rows: 23.77 against FDS90's 23.78 and 29.12 against TAFD55's 29.13. The plate is labeled S-BSL7 as a coordinate equivalent so that it traces on a catalog dispersion curve; the source index and Abbe number stay as printed, and the patent does not name the filter material. HOYA BSC7 and Schott N-BK7 sit at a different index, 1.51680, and are not used. Catalog searches directly checked HOYA's current/obsolete data; the independent review additionally compared pinned OHARA, Schott, HIKARI, CDGM and Sumita catalog excerpts without claiming a fresh primary-source survey of every glassmaker.

No per-glass nC, nF, ng or partial-dispersion deviation is printed for this example. Consequently none is invented in the data. Catalog-based dispersion remains a proxy, and the manufacturer's commercial ED/Super ED or HR/Super HR categories are not imposed on identical nd/νd pairs.

## Focus Mechanism

The source states that G1 and G3 remain fixed relative to the image plane while G2 moves imageward for close focus (¶0102). Both published spacing endpoints are retained. The motion is internal focus, with no invented floating, stabilization or barrel-extension mechanism.

| Quantity | Infinity | Near state |
|---|---:|---:|
| Gap after surface 8 (mm) | 3.2000 | 10.2212 |
| Gap after surface 11 (mm) | 10.3358 | 3.3146 |
| Air from surface 33 to filter F (mm) | 12.7099 | 12.7099 |
| Air from filter F to the image, BF (mm) | 1.0000 | 1.0000 |
| Published design focal length (mm) | 7.90 | 7.60 |
| Published f-number | 1.82 | 1.83 |
| Published full field | 197.08° | 197.08° |
| Published image radius (mm) | 11.60 | 11.71 |

The two changing gaps exchange 7.0212 mm, so G2 moves that distance toward the image while the total optical track remains fixed. Intermediate slider positions linearly interpolate this travel; they are not separately published focus calibrations.

The table's 120 mm shooting distance is an object-to-image distance. With filter F in place, the Gaussian conjugate of the near spacing is 119.999907 mm object-to-image, or 23.460107 mm object-to-first-vertex, which rounds to the printed 120 mm. This distinguishes the table's shooting-distance label from the generic object-plane distance definition in ¶0075. The model's finiteConjugates entry uses the first-surface reference, 120 − 96.5398 = 23.4602 mm. Because the model track is the source's 96.5398 mm, that object plane is 120.0000 mm from the model image plane, and the 0.12 m close-focus label describes the same distance. The paraxial image of that object falls within 0.01 µm of the image plane.

The calculated paraxial transverse magnification remains -0.204271. The sign denotes inversion; this first-order result does not measure finite-field fisheye reproduction across the image.

The stop position is published, but its diameter is not. The modeled stop semi-diameter 7.453758 mm is calibrated by an exact axial trace to the infinity design F/1.82 with the 7.90 mm aperture reference. Agreement with that f-number is therefore a calibration dependency, not independent evidence of a physical diaphragm measurement. The near table's F/1.83 is preserved as a source value; the model does not claim a separately measured focus-dependent iris schedule.

## Aspherical Surfaces

Only surface 9A, the object-side face of L5 in the focusing doublet, is aspherical. The source equation in ¶0077 uses the conventional conic factor 1 + K:

z(h) = (h²/R) / [1 + √(1 − (1 + K)(h/R)²)] + A4h⁴ + A6h⁶ + A8h⁸ + A10h¹⁰.

Here h and z are in millimetres, K is dimensionless, and Ap has units mm^(1−p). The original coefficients and radius are retained with no scaling or conic conversion.

| Term | Surface 9A |
|---|---:|
| K | 0.0000 |
| A4 | -1.1788E-06 |
| A6 | -7.2708E-08 |
| A8 | 6.1681E-10 |
| A10 | -2.5605E-12 |

The application's required unused A12/A14 slots are zero, expressing the absence of those terms in the printed equation; no higher-order fit is substituted. At the inferred 11.0 mm model semi-diameter, the polynomial departure from the K = 0 sphere is -80.259542 µm, and the actual rim slope is 3.710061°. The negative total departure reduces sag relative to the base sphere over this modeled aperture. These are evaluated model-aperture quantities, not patent-listed effective diameters.

The source associates use of a G2 asphere with controlling spherical-aberration variation during focusing (¶0067–0068). It does not state whether this particular element is polished, molded or hybrid, so no fabrication method is assigned.

## Chromatic Correction Strategy

The rear positive group contains several high-Abbe elements, including the repeated FCD100-compatible coordinate. This is consistent with ¶0069–0072, which favors multiple positive G3b lenses with high Abbe number. The negative lower-Abbe partner in D2 and the other negative members provide additional chromatic balancing variables.

Those design ingredients do not prove apochromatic correction or a particular secondary spectrum. Neither source line indices nor measured partial dispersions are available for the actual production melts. No independent chromatic or skew-field performance claim is made from the monochromatic geometry checks.

The computed surface-by-surface Petzval sum is 0.004109237 mm⁻¹, using each interface power divided by its incident and emergent indices. It is an invariant first-order curvature sum for the preserved glasses and radii, not the sagittal or tangential image surface of this strongly non-rectilinear system.

## Conditional Expressions

All thirteen general patent inequalities are evaluated at infinity. Group powers and inter-group distances use the retained final lens prescription; conditions (9) and (11) use the patent-defined LT = 96.5398 mm, which is the model's own first-vertex-to-image track with filter F in place. Condition (8) uses the exit-pupil distance in image space behind the plate, 45.609442 mm; the source's printed 5.78 agrees with that reading. The values below retain sufficient digits to separate the calculation from the source's two-decimal printed summary. All satisfy the stated bounds. [1, ¶0024–0072 and EX7 condition table]

| No. | Patent expression and bound | Calculated value |
|---:|---|---:|
| 1 | 0.10 < (L1N1R1−L1N1R2)/(L1N1R1+L1N1R2) < 1.00 | 0.496644 |
| 2 | 0.10 < (L2N1R1−L2N1R2)/(L2N1R1+L2N1R2) < 1.00 | 0.700390 |
| 3 | 0.15 < L3N2R1/fL3N2 < 4.00 | 0.755571 |
| 4 | 8.0 < f2/f < 45.0 | 20.144527 |
| 5 | 4.00 < f1P1/f < 70.00 | 6.930899 |
| 6 | −2.40 < f1/f < −0.70 | -1.131205 |
| 7 | −5.00 < fN12/f < −1.00 | -1.569698 |
| 8 | 2.80 < EXP/f < 20.00 | 5.775570 |
| 9 | 0.05 < D13/LT < 0.45 | 0.174227 |
| 10 | 1.40 < f3/f < 6.50 | 2.988007 |
| 11 | 0.05 < D2S/LT < 0.60 | 0.225980 |
| 12 | 1.30 < f3a/f < 12.50 | 4.360657 |
| 13 | 1.40 < f3b/f < 10.00 | 3.409330 |

Here f is the infinity EFL; fN12 is the net focal length of the first two negative menisci; EXP is exit-pupil-to-image distance; LT is first-vertex-to-image distance; D13 spans the last face of G1 to the first face of G3; and D2S spans the last face of G2 to the stop. The bounds concern a combination of bending, group power, focus space and pupil placement. Their satisfaction is not a substitute for tracing the high-angle field or establishing image quality.

## Verification and Model Limits

The inferred semi-diameters are estimated from Figure 25 (element outer rims agree with the drawing within 2%) and checked against ray clearance and physical geometry. A per-lens 73° rim-angle limit accommodates the rear face of the large front meniscus: source surface 2 has inferred radius 15.4 mm and actual rim slope approximately 72.474684°. The 98.54° source-edge chief needs approximately 15.281988 mm there. A smaller rim satisfying the ordinary default limit clips that published field. The G2 doublet is drawn square-cut at 11.0 mm, so source surfaces 9A, 10 and 11 share that inferred radius; the figure's 15.5–15.6 mm for surface 2 is not reachable under the rim and gap limits. The flat lands the figure draws on the concave faces 7, 15, 17, 23 and 27 are not modeled. These aperture choices do not alter any published curvature, spacing, index or asphere coefficient.

The source full field remains 197.08°, with a model image-circle diameter of 23.2 mm, twice the published infinity image radius. Equisolid metadata supplies an application reference law for aperture sizing and distortion comparison; the patent does not identify an exact analytic projection law. The field is traced with bounding-sphere vectors, including rays beyond 90°, rather than rectilinear tangent launches or a marketing-based field reduction.

Across 21 sampled mechanical focus positions and eight angular fields, all 168 tested native-field chief rays converge and clear the modeled apertures. With filter F traced, the source-edge image heights are 11.600303 mm at infinity and 11.709626 mm at the near mechanical state, reproducing the printed 11.60/11.71 mm within the half-last-decimal 0.005 mm rounding interval. An air-equivalent gap in place of the plate would put them at 11.605383 mm and 11.714641 mm, about 5.080 µm and 5.014 µm higher and, at infinity, outside that interval. These field tests use the default collimated rayTracksF=false launch convention; they do not certify finite-conjugate MTF or the optional focus-tracking ray mode.

The model retains exterior vignetting. The current-state UI pupil is calculated from the physical stop and current front-group magnification, rather than held at the nominal calibration radius. At the actual default 59.124° field and wide-open F/1.82, the central three of five meridional fan rays survive; the two outer fractions first clip exterior surfaces 24 and 12. They do not first clip a cemented interface. At F/2.8, F/4, F/8 and F/22, all five default rays survive at the sampled focus positions. A later ghost-ray failure after a known exterior loss is not counted as a new internal obstruction.

A wider 10,920-ray nonuniform nominal-pupil stress grid retains 6,659 unvignetted rays, 2,503 physical-stop first clips and 1,758 exterior first losses. The latter include 240 raw noBracket diagnostics at surface 2: independent full-sphere intersections place every forward admissible root beyond the authored rim, so these are exterior-aperture misses, not successful traces. A focused 21,708-ray nominal-pupil grid and a separate 21,708-ray current-state-pupil grid reached at most 11.38 mm on surface 10. All of these grids were run with surface 10 at an earlier 11.5 mm; with the interface now at the doublet's common 11.0 mm rim, a ray in that last band stops at the interface instead of at the exit face 11, and a meridional scan at both focus endpoints finds the transmitted bundle unchanged. These counts are not transmission percentages and do not establish clearance over every field, pupil point or control position.

The source plate has zero paraxial power and no Petzval contribution, but it is not optically neutral in the converging F/1.82 beam: it adds overcorrecting spherical aberration and its own dispersion. With the plate traced, on-axis LSA at infinity is −13.95 µm at the pupil margin and −53.52, −59.53 and −42.17 µm at 0.85, 0.7 and 0.5 of the pupil radius; an air-equivalent gap would leave −72.65 µm at the margin. Near-axis focus relative to the d line is +19.66 µm at C, −19.58 µm at F and −4.17 µm at g with the plate, against +23.97, −29.25 and −21.25 µm without it. The spectral figures use catalog-equivalent dispersion curves, S-BSL7 for the plate among them, not source-published line indices; they show that the prescription is balanced with the plate in place and do not certify production chromatic performance. No detachable-teleconverter compatibility is asserted: the current composition predicate excludes fisheye hosts.

Sampled edge thickness, conic domain and shared-band gaps remain physically valid; the unchanged gap-intrusion limit is respected, and the actual production geometry diagnostics require no material trim. The finite-conjugate selector exposes only the published 120 mm near endpoint; its axial object point is 23.4602 mm ahead of the first vertex. The current finite-object launch rejects the 98.54° field, so whole-field finite-conjugate MTF is not certified. These finite monochromatic tests do not certify a full mounted application, chromatic/skew performance, continuum throughput, or the exact factory lens.

## Sources

1. [JP2016184136A, original Japanese publication with PAJ wrapper](https://depatisnet.dpma.de/DepatisNet/depatisnet?action=pdf&docid=JP2016184136A). Numerical Example 7: original PDF pp25–26 (printed pp24–25); conventions and equation: PDF p13, ¶0074–0082; construction and focus: ¶0102–0104; condition values: PDF pp28–29 (printed pp27–28), EX7 column; Figure 25: PDF p34 (printed p33). Applicant and inventor are retained from the original publication wrapper.
2. [Olympus, 12 May 2015 product announcement](https://www.olympus.co.jp/jp/news/2015a/nr150512fisheyej.html). Product identity, Micro Four Thirds, marketed field/aperture, near focusing and planned introduction timing.
3. [OM SYSTEM, M.ZUIKO DIGITAL ED 8mm F1.8 Fisheye PRO specifications](https://jp.omsystem.com/product/lens/single/pro/8_18pro/spec.html). Production construction, marketed specifications and MSC focusing description; retrieved 4 October 2026.
4. [HOYA optical-glass catalog, 20260707, including obsolete entries](https://www.hoya-opticalworld.com/common/agf/HOYA20260707_include_obsolete.agf). Manufacturer catalog coordinates and equivalent-family comparisons; production supplier and exact melts remain unconfirmed.
