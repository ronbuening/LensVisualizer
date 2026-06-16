# Nikon AF-S NIKKOR 24mm f/1.8G ED — Optical Analysis

## Patent Reference and Design Identification

**Patent:** JP 2017-3807 A  
**Filed:** June 11, 2015  
**Published:** January 5, 2017  
**Inventors:** Fukuda Taisei (福田 泰成), Inoue Kana (井上 佳奈), Furuta Akiko (古田 明子)  
**Applicants:** Konica Minolta, Inc.; Nikon Corporation  
**Title:** 広角レンズ，撮像光学装置及びデジタル機器 (Wide-angle Lens, Imaging Optical Device, and Digital Device)  
**Embodiment analyzed:** Example 4 (実施例4, ¶0079-¶0082)

The prescription transcribed here is Example 4 of JP 2017-3807 A. The patent describes a compact large-aperture wide-angle lens for an interchangeable-lens digital camera, with a field angle above 70°, F-number below 2, a first group arranged in negative-negative-positive-negative-positive sequence, and a positive second group that moves object-ward for close focusing.

Convergent identification with the production Nikon AF-S NIKKOR 24mm f/1.8G ED rests on the following points.

1. The patent Example 4 contains 12 photographic elements in 9 air-separated groups when the two sub-1 mm resin layers are counted as hybrid aspherical layers rather than separate photographic elements. Nikon's official construction is 12 elements in 9 groups.
2. Example 4 has two hybrid aspherical surfaces, S5 and S22, and two positive S-FPL51-class ED elements of nd = 1.49700, νd = 81.6 behind the aperture stop. Nikon lists two aspherical elements and two ED elements.
3. The patent states f = 24.43 mm, FNO = 1.86, 2ω = 84.4°, and y'max = 21.6 mm. These correspond to Nikon's marketed 24 mm f/1.8 FX lens with an 84° angle of view.
4. Example 4's total track is 124.37 mm and its close-focus object distance entry is 104.38 mm from the first surface. The object-to-image conjugate at POS2 is therefore approximately 228.75 mm, matching Nikon's 0.23 m minimum focus distance when measured from the focal plane.
5. The patent focus mechanism fixes Gr1 while the positive Gr2 translates toward the object. Nikon describes the production lens as using rear focusing (RF).
6. The June 2015 filing date and January 2017 publication are consistent with a design already complete by the production lens announcement in August 2015.

Example 4 is the strongest match among the six worked examples. Examples 1, 2, 3, and 5 differ more strongly in total track or first-group power. Example 6 shares the compact total track but its close-focus conjugate is shorter and its front cemented pair uses a lower-index glass set, making it a weaker match to the production lens.

## Optical Architecture

The design is a two-group retrofocus wide-angle lens. The front group Gr1 is weakly negative and fixed during focusing; the rear group Gr2 is positive and moves as the internal focus group. Independent paraxial trace of the Example 4 prescription gives an infinity-focus EFL of 24.423 mm and a back focal distance of 38.450 mm. The ratio BFD/EFL = 1.575 is greater than 1, so the design meets the optical definition of a retrofocus wide-angle, not merely a short-focal-length symmetric wide-angle.

Gr1 contains five photographic elements. Its power sequence is negative-negative-positive-negative-positive. The widest intra-Gr1 air gap is the 14.52 mm separation between L2 and L3, which divides Gr1 into a negative front sub-group Gr1a and a positive rear sub-group Gr1b. The independently traced sub-group focal lengths are f1a = -24.780 mm and f1b = 48.663 mm, giving f1a/f1b = -0.509. This split allows the strongly diverging front section to establish the wide field while the rear section recollimates the axial bundle before the focusing group.

Gr2 contains seven photographic elements. It begins with a positive collector L6, followed by a weak negative meniscus L7, the aperture stop, two post-stop cemented doublets, and a final hybrid aspherical positive meniscus. Its independently traced focal length is 44.081 mm. The two ED-containing post-stop doublets carry most of the axial chromatic correction, while the final asphere trims residual spherical aberration and coma near the exit side of the lens.

The prescription contains two hybrid aspherical elements. The patent explicitly states that a resin layer of optical-axis thickness 1 mm or less formed on a lens surface is treated as part of one lens rather than as a cemented lens pair. The data file nevertheless models the resin layers as separate optical media because the prescription supplies their own nd/νd values and their outer surfaces carry the aspherical figures.

## Element-by-Element Analysis

### L1 — Negative Meniscus, convex to object

nd = 1.77250, νd = 49.6. Glass: S-LAH66 (OHARA). f = -54.77 mm.

L1 is the first negative meniscus of the retrofocus front section. Its positive radii, R1 = +40.617 mm and R2 = +20.279 mm, make it convex to the object side and more strongly curved on the image side, producing negative power. The relatively high refractive index reduces the curvature required for this front negative power and helps control the high chief-ray heights associated with an 84° full field.

The Abbe number places this glass in the lanthanum-flint region rather than in ordinary crown territory. Its role is primarily geometric and monochromatic: establish the wide field, begin barrel-distortion management, and keep the front diameter within a compact mechanical envelope.

### L2 — Negative Meniscus, hybrid aspherical

L2 body: nd = 1.61800, νd = 63.4. Glass: S-PHM52 (OHARA). L2 resin: nd = 1.51380, νd = 53.0. Composite f = -54.60 mm.

L2 consists of an S-PHM52 glass body with a thin UV-curable resin layer on its image-side face. The resin's outer surface S5 is aspherical. The composite meniscus continues the negative power of Gr1a and places the aspherical correction at a large chief-ray height, where distortion control is efficient.

The patent states that at least one negative lens in Gr1 preferably has an aspherical surface and describes this surface family as reducing peripheral power relative to the paraxial base curvature. In Example 4, S5 is the implementation of that instruction. Its dominant negative A4 term acts with the strongly curved positive-radius base to change the peripheral bending of the front group and reduce distortion generated by L1 and L2.

### L3 + L4 — Front-group cemented doublet LS

L3: nd = 1.90366, νd = 31.3. Glass: S-LAH95 (OHARA). Standalone f = +20.43 mm.  
L4: nd = 1.76182, νd = 26.6. Glass: S-TIH14 (OHARA). Standalone f = -30.66 mm.  
Cemented doublet LS: f = +53.707 mm.

The L3/L4 cemented doublet is the principal positive subassembly within Gr1. L3 is a high-index biconvex positive element; L4 is a dense-flint biconcave negative element. The cemented interface is surface 7, R = -23.529 mm. The patent conditions give this doublet special importance through f1s/f and r1s/f, and the independent trace gives f1s/f = 2.199 and r1s/f = -0.963.

The high nd of L3 is central to the design. Condition (7) requires Ndmax in this cemented pair to exceed 1.72, and the preferred condition (7a) asks for Ndmax above 1.85. L3's nd = 1.90366 satisfies both. L4 also exceeds 1.72. The pair is not a large-Δνd classical achromat, but its high-power cemented interface and dense-flint pairing help manage lateral color produced by the front negative sub-group.

### L5 — Weak Positive Meniscus

nd = 1.68893, νd = 31.2. Glass: S-TIM28 (OHARA). f = +565.14 mm.

L5 is a weak positive meniscus at the rear of Gr1. Its paraxial power is small, but its placement is significant: it closes the fixed group immediately before the variable Gr1-Gr2 spacing. The patent states that the final positive element in Gr1 helps reduce the diameter of the second group. In Example 4, L5 provides that beam-shaping function while contributing little net power.

Its dense-flint glass assignment is atypical for a positive element if judged only by Abbe number. In this location, however, the element is weak and lies in a transition region between the field-opening front group and the moving rear group. The selection is best read as a higher-order balancing choice rather than as a primary axial color corrector.

### L6 — Biconvex Positive Collector

nd = 1.69680, νd = 55.5. Glass: S-LAL14 (OHARA). f = +35.62 mm.

L6 is the first element of the moving positive focus group. It collects the nearly collimated bundle emerging from Gr1 and supplies the first strong converging action of Gr2. The moderately high index allows a compact positive element without excessive surface curvature.

Because Gr2 moves as a unit during focusing, L6 also affects focus sensitivity. The patent's condition on φ2/φ requires sufficiently strong Gr2 power to keep focus travel short. Example 4's f2 = 44.081 mm gives φ2/φ = 0.554, within the preferred 0.5-0.7 band.

### L7 — Negative Meniscus before the Stop

nd = 1.51823, νd = 59.0. Glass: S-NSL3 (OHARA). f = -57.87 mm.

L7 is a weak negative meniscus directly before the aperture stop. Its first surface is very weakly curved, R13 = +638.554 mm, while its rear surface, R14 = +28.631 mm, gives the element its negative power. The element shapes the converging bundle from L6 before it passes through the stop and helps balance the post-stop correction burden.

The ordinary crown-like glass is consistent with the element's modest power and pre-stop position. It is not part of the ED correction strategy; its role is mainly monochromatic balancing and beam sizing.

### L8 + L9 — First Post-stop Cemented Doublet

L8: nd = 1.69895, νd = 30.1. Glass: S-TIM35 (OHARA). Standalone f = -26.34 mm.  
L9: nd = 1.49700, νd = 81.6. Glass: S-FPL51 (OHARA), ED fluorophosphate. Standalone f = +70.93 mm.  
Cemented doublet: f = -44.13 mm.

The first post-stop doublet pairs a dense-flint negative element with a positive ED element. The Abbe-number spread is large, and the cemented interface at R17 = +119.399 mm contributes axial chromatic correction without making the rear group excessively long.

L9 is the first of two post-stop positive elements satisfying the patent's νd > 60 condition. Using Ohara S-FPL51 line indices, the glass also has a positive anomalous partial-dispersion deviation of about +0.029 from an Ohara NSL7-PBM2 normal line. That supports secondary-spectrum reduction, but the patent makes no apochromatic claim and the design is best described as ED-assisted rather than apochromatic.

### L10 + L11 — Second Post-stop Cemented Doublet

L10: nd = 1.72916, νd = 54.7. Glass: S-LAL18 (OHARA). Standalone f = -68.30 mm.  
L11: nd = 1.49700, νd = 81.6. Glass: S-FPL51 (OHARA), ED fluorophosphate. Standalone f = +30.27 mm.  
Cemented doublet: f = +53.08 mm.

The second post-stop doublet is net positive. L10 is a negative meniscus and L11 is a thick positive ED element; together they provide a major share of the rear group's convergence while continuing chromatic correction. The use of a second S-FPL51 element distributes the chromatic correction across two doublets instead of forcing one strongly powered ED group to do all the work.

This layout satisfies the patent's recommendation that a positive element with νd > 60 be placed behind the stop, and also the recommendation that a cemented lens be present behind the stop. Example 4 exceeds the minimum by using two ED-containing cemented doublets.

### L12 — Final Positive Meniscus, hybrid aspherical

L12 resin: nd = 1.51380, νd = 53.0. L12 glass body: nd = 1.61800, νd = 63.4. Glass: UV-curable resin + S-PHM52 (OHARA). Composite f = +62.53 mm.

L12 is the final positive meniscus, convex toward the image. Its front resin layer carries aspherical surface S22, while the S-PHM52 glass body provides the main substrate. This final asphere sits near the exit side of the optical system and primarily corrects residual spherical aberration and coma rather than front-group distortion.

The patent states that an asphere behind the stop can correct spherical aberration and coma generated on the object side of the stop. In Example 4, S22 has a negative A4 coefficient on a negative-radius base surface, producing the required edge-power change in the rear relay.

## Glass Identification and Selection

The prescription's glass palette matches Ohara S-line catalog data closely enough to assign catalog names without using circular patent-derived labels. The resin layers are not catalog glasses; they are identified only by the patent's listed nd = 1.51380 and νd = 53.0.

| Position | Patent nd | Patent νd | Identification | Role |
|---|---:|---:|---|---|
| L1 | 1.77250 | 49.6 | S-LAH66 (OHARA) | Front high-index negative meniscus |
| L2 body | 1.61800 | 63.4 | S-PHM52 (OHARA) | Hybrid asphere substrate |
| L2/L12 resin | 1.51380 | 53.0 | UV-curable resin | Thin composite aspherical layer |
| L3 | 1.90366 | 31.3 | S-LAH95 (OHARA) | High-index positive member of LS |
| L4 | 1.76182 | 26.6 | S-TIH14 (OHARA) | Dense-flint negative member of LS |
| L5 | 1.68893 | 31.2 | S-TIM28 (OHARA) | Weak positive Gr1 terminal meniscus |
| L6 | 1.69680 | 55.5 | S-LAL14 (OHARA) | Positive collector in Gr2 |
| L7 | 1.51823 | 59.0 | S-NSL3 (OHARA) | Pre-stop negative meniscus |
| L8 | 1.69895 | 30.1 | S-TIM35 (OHARA) | Negative member of first ED doublet |
| L9 | 1.49700 | 81.6 | S-FPL51 (OHARA) | ED positive element |
| L10 | 1.72916 | 54.7 | S-LAL18 (OHARA) | Negative member of second ED doublet |
| L11 | 1.49700 | 81.6 | S-FPL51 (OHARA) | ED positive element |
| L12 body | 1.61800 | 63.4 | S-PHM52 (OHARA) | Final hybrid asphere substrate |

The chromatic correction strategy is distributed. In Gr1, the L3/L4 cemented doublet works at a high ray-height location and helps reduce lateral color from the retrofocus front section. In Gr2, the two S-FPL51 doublets provide the main ED correction behind the aperture stop. The design should not be described as apochromatic from the available source data; the patent supports ED-assisted chromatic reduction, not an APO classification.

## Focus Mechanism

The patent describes rear-group inner focusing. Gr1 remains fixed, and the whole positive Gr2 moves toward the object from POS1 to POS2. In Example 4, only the Gr1-Gr2 gap and final back-focus gap change.

| Parameter | Infinity POS1 | Close POS2 | Change |
|---|---:|---:|---:|
| d10, Gr1-Gr2 air gap | 9.36 mm | 4.38 mm | -4.98 mm |
| d24, final back-focus gap | 38.46 mm | 43.44 mm | +4.98 mm |
| Total track | 124.37 mm | 124.37 mm | 0 mm |
| Patent object distance to first surface | ∞ | 104.38 mm | — |

The close-focus object distance in the patent table is measured to the first surface, not to the focal plane. Adding the 124.37 mm total track gives an object-to-image conjugate of 228.75 mm, consistent with Nikon's specified 0.23 m minimum focus distance. First-order trace at POS2 gives a lateral magnification of approximately 0.202×, consistent with Nikon's specified 0.20× maximum reproduction ratio.

## Aspherical Surfaces

Example 4 uses two aspherical surfaces: S5 on the front hybrid element and S22 on the final hybrid element. The patent uses the standard conic convention, with K appearing in the square-root term as:

$$z = \frac{c h^2}{1 + \sqrt{1 - (1 + K)c^2h^2}} + \sum A_j h^j$$

Here c = 1/r. Omitted coefficients are zero and E-n means ×10^-n.

| Surface | K | A4 | A6 | A8 | A10 | A12 |
|---|---:|---:|---:|---:|---:|---:|
| S5 | 0 | -1.0527e-5 | -3.6577e-8 | +5.8633e-11 | -2.8305e-13 | +8.2210e-17 |
| S22 | 0 | -1.7739e-5 | +2.9940e-9 | -1.2218e-11 | +1.11346e-13 | 0 |

S5 is the front-group distortion-control asphere. It lies at high chief-ray height and low marginal-ray height, a location well suited to shaping field distortion without strongly altering axial aperture correction.

S22 is the rear relay asphere. It lies after the stop and near the image side, where it is more effective against residual spherical aberration and coma from the relay section.

## Chromatic Correction Strategy

The lens uses a front-group cemented doublet plus two rear ED doublets. This is a conventional but carefully distributed solution for a fast 24 mm retrofocus lens: lateral color is addressed early in the high-ray-height front group, while axial color and secondary spectrum are addressed behind the stop with high-νd ED glass.

The two S-FPL51 elements are both positive and both post-stop. This directly satisfies the patent's condition (8), which requires a post-stop positive lens with νd > 60. It also satisfies the stronger design preference stated in the patent text, because two such elements are present. Ohara S-FPL51 line-index data support a positive anomalous partial-dispersion deviation of about +0.029, so the ED glass has secondary-spectrum value beyond its high Abbe number alone. The analysis nevertheless avoids APO terminology because the patent does not establish apochromatic correction criteria.

## Conditional Expressions

Independent paraxial verification reproduces the patent's Example 4 conditional table within rounding.

| Condition | Expression | Patent limit | Code-verified value | Patent table value |
|---|---|---:|---:|---:|
| (1) | φ1/φ | -0.2 < x < 0.1 | -0.073 | -0.07 |
| (2) | φ2/φ | 0.45 < x | 0.554 | 0.55 |
| (3) | t/f | 0.5 < x < 0.9 | 0.595 | 0.59 |
| (4) | f1a/f1b | -1 < x < -0.1 | -0.509 | -0.51 |
| (5) | f1s/f | 1 < x < 5 | 2.199 | 2.20 |
| (6) | r1s/f | -3 < x < -0.9 | -0.963 | -0.96 |
| (7) | Ndmax | 1.72 < x | 1.90366 | 1.9037 |
| (8) | post-stop positive νd | 60 < x | 81.6 | 81.6 |
| (0) | BF/f | 1.4 < x | 1.575 | 1.57 |

The power balance is the critical architectural point. Gr1 is only weakly negative, with f1 = -333.68 mm by independent trace, while Gr2 is a stronger positive group with f2 = 44.08 mm. This gives a long back focus with a short focusing travel, which is the patent's stated purpose for conditions (1) and (2).

## Verification Summary

The surface prescription was independently retraced using first-order refraction matrices in y/u form. The numerical values below use the patent's Example 4 prescription at infinity focus.

| Quantity | Patent value | Code-verified value |
|---|---:|---:|
| EFL | 24.43 mm | 24.423 mm |
| BFD | 38.46 mm | 38.450 mm |
| Total track | 124.37 mm | 124.37 mm |
| Gr1 focal length | -333.33 mm | -333.68 mm |
| Gr2 focal length | 44.08 mm | 44.081 mm |
| Gr1a focal length | -24.78 mm | -24.780 mm |
| Gr1b focal length | 48.66 mm | 48.663 mm |
| LS focal length | 53.70 mm | 53.707 mm |
| Petzval sum | — | +0.003700 mm^-1 |
| Petzval radius | — | approximately 270 mm |

The Petzval value was computed surface by surface using φ/(n · n′), not by thin-lens element approximations. Semi-diameters are not present in the patent and were therefore inferred. The selected values satisfy the renderer's semi-diameter constraints: no surface exceeds sd/|R| = 0.90, element surface semi-diameter ratios remain within the project limit, and air-gap sag intrusion remains below 90% of the gap using signed sag contribution.

## Sources

JP 2017-3807 A, 広角レンズ，撮像光学装置及びデジタル機器, Example 4 prescription and Table 1.

Nikon Imaging, "AF-S NIKKOR 24mm f/1.8G ED" official product page: https://imaging.nikon.com/imaging/lineup/lens/f-mount/singlefocal/wide/af-s_24mmf_18g_ed/

Nikon Corporation, "Release of the AF-S NIKKOR 24mm f/1.8G ED" news release, August 4, 2015: https://www.nikon.com/company/news/2015/0804_lens_02.html

OHARA Corporation, optical glass catalog and S-glass data downloads: https://www.oharacorp.com/catalog.html

OHARA individual catalog sheets consulted for catalog cross-checks include S-PHM52, S-LAH95, S-TIH14, S-LAL14, S-NSL3, S-TIM35, S-LAL18, and S-FPL51.
