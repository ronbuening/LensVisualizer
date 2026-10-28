# Canon EF-M 18–150mm f/3.5–6.3 IS STM — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** US 2018/0074300 A1  
**Inventors:** Yuichi Gyoda; Kohei Kimura  
**Applicant:** Canon Inc. (Canon Kabushiki Kaisha in the publication)  
**Filed:** September 13, 2017  
**Published:** March 15, 2018  
**Priority:** September 14, 2016; JP 2016-179276  
**Title:** Optical System and Image Pickup Apparatus Including the Same  
**Example details:** ¶0087, printed pages 7–8; Fig. 3; material properties in Table 1.

The model transcribes the selected numerical prescription at its original millimetre scale. The patent does not name the retail product. Its association with the EF-M 18–150mm is a supported correlation, not an exact production-prescription identification:

1. Both have 17 elements in 13 air-separated components, including four cemented doublets.
2. Four aspheric surfaces occur on two elements, consistent with the two aspherical elements in Canon's original optical diagram, which also marks L2, the νd 81.5 element of the front doublet, as UD glass.
3. The patent's 18.56–145.41 mm, F3.60–6.49 range and 13.66 mm image semi-height fit the marketed 18–150mm F3.5–6.3 APS-C zoom without rescaling.
4. The arrangement of the front cemented pair, following singlet, four-element second unit, post-stop assembly and two rear singlets agrees structurally with Canon's diagram.
5. The 14 September 2016 priority date falls one day before the lens's announcement with the EOS M5 and precedes its November 2016 release. These facts concern the EF-M generation, not a later RF-S lens with a similar focal range.

There is an important limit to this correlation: ¶0083 says the illustrated embodiments omit a vibration-reduction unit, though one may be incorporated. The retail product has optical IS, and Canon's diagram marks the B4 cemented doublet (L10–L11) as the IS unit. The model therefore represents the centered patent prescription; it does not model the stabilizer's displacement or its optical effect.

Every radius, thickness, index, Abbe number, effective diameter, aspheric coefficient and printed zoom row is transcribed as printed, including the source's rounding.

## Optical Architecture

The design has eight kinematic units with powers **+ / − / + / + / + / − / − / +**. These are not the same as the 13 air-separated components. The front positive unit and strong negative second unit form the principal variator arrangement. The post-stop units divide relay, compensation and focus functions among compact subassemblies.

| Unit | Elements    | Source unit focal length, mm | Kinematic role                             |
| ---- | ----------- | ---------------------------: | ------------------------------------------ |
| B1   | L1–L3       |                       +75.07 | Moves objectward for wide-to-tele zoom     |
| B2   | L4–L7       |                       −15.20 | Moves on an imageward-convex zoom locus    |
| B3   | Stop, L8–L9 |                       +35.51 | Coupled with B5 and B7                     |
| B4   | L10–L11     |                       +39.62 | Independently moving zoom unit; Canon's IS |
| B5   | L12–L13     |                       +52.89 | Coupled with B3 and B7                     |
| B6   | L14–L15     |                       −30.80 | Moves for zoom; rigid imageward near focus |
| B7   | L16         |                       −79.01 | Coupled with B3 and B5                     |
| B8   | L17         |                       +74.03 | Fixed during zoom                          |

Paragraphs 0071–0074 establish these movements. The stop is the source's surface 14, between B2 and B3, not an inferred position. There are no source-listed camera-side plates. The published single effective stop diameter (13.12 mm) is not a per-zoom iris schedule: the iris at each zoom position is sized from that station's design f-number.

## Element-by-Element Analysis

The individual focal lengths below are the source's single-lens values. Glass names outside L14/L15 are coordinate-compatible catalog equivalents, not established production suppliers. The descriptions of correction roles are optical interpretations of the prescription unless a patent paragraph is identified.

### L1 — Meniscus Negative

nd = 1.91082, νd = 35.3. Glass: TAFD35 (Hoya), catalog equivalent; supplier unconfirmed. f = -109.57 mm.

The front negative meniscus is cemented to L2. Its high-index, moderate-dispersion material supplies the negative part of the positive B1 component. The published front effective diameter is 40.78 mm; this is not a measured barrel diameter.

### L2 — Biconvex Positive

nd = 1.49700, νd = 81.5. Glass: S-FPL51 (Ohara), catalog equivalent; supplier unconfirmed. f = +88.85 mm.

The positive partner of the front doublet has the lowest refractive index and largest Abbe number in the source palette. The pairing provides chromatic balancing within B1. Canon's diagram marks this element as the lens's single UD element, which its fluorophosphate-crown coordinates fit. S-FPL51 is an inferred equivalent; the patent does not identify this element’s actual supplier.

### L3 — Meniscus Positive

nd = 1.59522, νd = 67.7. Glass: S-FPM2 (Ohara), catalog equivalent; supplier unconfirmed. f = +88.03 mm.

This positive meniscus completes B1 after a 0.15 mm axial air interval. Its comparatively high Abbe number supports the positive front group without assigning an unsupported apochromatic classification.

### L4 — Meniscus Negative

nd = 1.95375, νd = 32.3. Glass: S-LAH98 (Ohara), catalog equivalent; supplier unconfirmed. f = -16.86 mm.

The strongly negative meniscus opens B2. B2 has the largest negative unit power and changes its separation from B1 substantially during zoom. Its first effective diameter is larger than its rear diameter, as printed.

### L5 — Biconcave Negative

nd = 1.77250, νd = 49.6. Glass: S-LAH66 (Ohara), catalog equivalent; supplier unconfirmed. f = -28.08 mm.

The biconcave negative element strengthens the diverging second unit. The 5.75 mm preceding space separates it from L4, rather than forming an incorrectly cemented pair.

### L6 — Biconvex Positive

nd = 1.84666, νd = 23.9. Glass: S-NPH53 (Ohara), catalog equivalent; supplier unconfirmed. f = +18.55 mm.

This biconvex positive element provides counter-power within the predominantly negative B2. Its high dispersion differs substantially from neighboring L5 and L7; the resulting chromatic balancing is inferred from these powers and indices.

### L7 — Meniscus Negative

nd = 1.69680, νd = 55.5. Glass: S-LAL14 (Ohara), catalog equivalent; supplier unconfirmed. f = -38.47 mm.

The final negative meniscus of B2 precedes the large, zoom-dependent gap D13 to the stop. Retaining its weak rear radius −120 mm avoids flattening a source-listed curved surface.

### L8 — Biconvex Positive (2× Asph)

nd = 1.58313, νd = 59.4. Glass: L-BAL42 (Ohara), catalog equivalent; supplier unconfirmed. f = +19.07 mm.

This positive element immediately behind the stop carries source aspheres on both faces, surfaces 15 and 16. It supplies most of B3’s positive power. The printed coefficients are used directly with K=0, without an even-order refit or a conic-convention change.

### L9 — Meniscus Negative

nd = 1.83481, νd = 42.7. Glass: S-LAH55 (Ohara), catalog equivalent; supplier unconfirmed. f = -31.33 mm.

The negative meniscus follows L8 across 0.99 mm. Together they form B3, whose position is coupled to B5 and B7. D18 after L9 is a zoom gap, not a near-focus degree of freedom in the adopted model.

### L10 — Meniscus Negative

nd = 1.90366, νd = 31.3. Glass: TAFD25 (Hoya), catalog equivalent; supplier unconfirmed. f = -29.31 mm.

The negative first member of the B4 doublet is cemented to positive L11. Its greater index and dispersion provide balancing within a net-positive unit. Canon's diagram marks this B4 doublet as the IS unit; the patent omits a vibration-reduction unit (¶0083), so the model keeps B4 centered.

### L11 — Biconvex Positive

nd = 1.69680, νd = 55.5. Glass: S-LAL14 (Ohara), catalog equivalent; supplier unconfirmed. f = +16.71 mm.

The positive partner closes B4. Its source glass coordinates also occur in L7. D18 + D21 remains 4.29 mm at every station, reflecting the fixed relative positions of the units immediately around B4.

### L12 — Meniscus Positive

nd = 1.51633, νd = 64.1. Glass: S-BSL7 (Ohara), catalog equivalent; supplier unconfirmed. f = +22.83 mm.

The positive crown-like member of B5 is cemented to L13. Its weak front radius −407.535 mm remains a finite surface rather than a plane. The positive and negative pair has a net focal length +52.89 mm.

### L13 — Meniscus Negative

nd = 2.00069, νd = 25.5. Glass: TAFD40 (Hoya), catalog equivalent; supplier unconfirmed. f = -42.04 mm.

This negative meniscus has the highest source refractive index, 2.00069. Its 0.79 mm center thickness and effective diameters are retained.

### L14 — Biconvex Positive

nd = 1.89286, νd = 20.4. Glass: S-NPH4 (Ohara), named in patent Table 1. f = +39.23 mm.

This biconvex positive lens is the PL member of the focus doublet. Table 1 explicitly identifies Ohara S-NPH4 and gives θgF=0.6393. Its pairing with L15 is central to the patent’s light, chromatically balanced negative focus unit.

### L15 — Biconcave Negative

nd = 1.74951, νd = 35.3. Glass: S-NBH51 (Ohara), named in patent Table 1. f = -16.92 mm.

This biconcave negative NL member makes the two-element B6 unit net negative. Table 1 names Ohara S-NBH51 and θgF=0.5818. Paragraph 0074 assigns imageward translation to the complete cemented pair, not relative movement between these two elements.

### L16 — Meniscus Negative (2× Asph)

nd = 1.53160, νd = 55.8. Glass: Unmatched (nd = 1.53160, νd = 55.8; material not identified). f = -79.01 mm.

The negative B7 singlet has two aspheric surfaces, 28 and 29. Its nd=1.53160 and νd=55.8 do not resolve to a coordinate-compatible catalog entry. Neither a supplier nor a polymer or glass composition is inferred from those two numbers. Its dispersion beyond νd is estimated for spectral tracing.

### L17 — Meniscus Positive

nd = 1.76200, νd = 40.1. Glass: S-LAM55 (Ohara), catalog equivalent; supplier unconfirmed. f = +74.03 mm.

The final positive meniscus forms B8. It remains fixed relative to the image plane throughout zoom and focus. Its rear effective diameter is 27.00 mm, and the literal source rear air gap is 10.65 mm at every infinity station.

## Glass Identification and Selection

Sixteen elements resolve to catalog glasses with matching nd/νd. Only the two B6 glasses are explicitly named by the source. The remaining names are catalog equivalents that reproduce the source coordinates; they do not identify Canon's suppliers. L16 remains unmatched and uses its source nd/νd rather than a misleading near match.

| Elements | Material or equivalent          | Status                                                     |
| -------- | ------------------------------- | ---------------------------------------------------------- |
| L1       | TAFD35, Hoya                    | Inferred equivalent                                        |
| L2       | S-FPL51, Ohara                  | Inferred equivalent; UD element in Canon's diagram         |
| L3       | S-FPM2, Ohara                   | Inferred equivalent                                        |
| L4       | S-LAH98, Ohara                  | Inferred equivalent                                        |
| L5       | S-LAH66, Ohara                  | Inferred equivalent                                        |
| L6       | S-NPH53, Ohara                  | Inferred equivalent                                        |
| L7, L11  | S-LAL14, Ohara                  | Inferred equivalent                                        |
| L8       | L-BAL42, Ohara                  | Inferred equivalent, not a manufacturing-process assertion |
| L9       | S-LAH55, Ohara                  | Inferred equivalent                                        |
| L10      | TAFD25, Hoya                    | Inferred equivalent                                        |
| L12      | S-BSL7, Ohara                   | Inferred equivalent                                        |
| L13      | TAFD40, Hoya                    | Inferred equivalent                                        |
| L14      | S-NPH4, Ohara                   | Source-named PL                                            |
| L15      | S-NBH51, Ohara                  | Source-named NL                                            |
| L16      | Unmatched, nd 1.53160 / νd 55.8 | No compatible catalog identity                             |
| L17      | S-LAM55, Ohara                  | Inferred equivalent                                        |

The prescription retains L14's nd/νd=1.89286/20.4 and L15's 1.74951/35.3. Table 1 separately rounds these to 1.8929/20.36 and 1.7495/35.33. The table's NL index/Abbe rows are mislabelled NdPL/νdPL; their location and values identify NL. The numerical prescription is not overwritten with these summary-table values.

The two printed absolute θgF values are stored as ΔPgF, the printed θgF less the normal line evaluated at the stored νd. The patent's different normal-line polynomial and its Table 2 deviations are not copied directly into ΔPgF. Table 2's displayed PL difference 0.0074 also differs by 0.0001 from subtraction of the rounded Table 1 numbers, a rounding difference in the source.

Where a catalog glass matches, its dispersion is used for tracing in preference to the Abbe/ΔPgF reconstruction. Tracing keeps the source nd; the C-, F- and photopic-weighted calculations use the catalog equivalents and an estimated dispersion for L16. These spectral results are model estimates, not measured chromatic performance of a manufactured lens, and no apochromatic correction is claimed.

## Focus Mechanism

B6 is a cemented two-element negative unit. The patent assigns it imageward near-focus translation. D24 increases while D27 decreases by the same displacement; their sum remains 13.79 mm. No other unit moves for focus in the model.

Canon reports a 0.25 m minimum distance at 18–50 mm, increasing to 0.45 m at 150 mm. The patent gives no finite-focus spacings for this example. Nine focus keyframes at normalized focus 0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875 and 1 hold paraxially calculated B6 positions for object-to-image distances of the closest distance divided by the keyframe value. Between the middle and tele rows the closest distance is interpolated; this interpolation is a modeling assumption. At tele the 0.45 m position gives a paraxial magnification of 0.31×, Canon's stated maximum. The finite states are calculated, not printed.

| Printed row | Calculated B6 travel to close focus, mm | Assumed object-to-image distance, m |
| ----------- | ----------------------------------------------: | ----------------------------------: |
| Wide        |                                        0.805775 |                                0.25 |
| Middle      |                                        2.934660 |                                0.25 |
| Tele        |                                        7.142928 |                                0.45 |

Spacings are interpolated linearly between keyframes; this is not a measured motor or cam law. At every finite keyframe (2 m and closer at wide, 3.6 m and closer at tele) the calculated object distance equals the label.

Far-distance labels at the printed wide row read long. Its rounded infinity spacings leave a 0.013 mm back-focus residual, so the infinity setting already focuses at about 27 m, and the 32 m setting focuses at about 14.9 m. The printed row is kept rather than moving the source image plane; the labels remain estimates.

## Aspherical Surfaces

The patent uses the ordinary sag convention with denominator `1 + sqrt(1 − (1+K)(h/R)²)` plus even polynomial terms. All four conic constants are zero. Scale is 1, so no radius, thickness or coefficient rescaling is performed. The paired surfaces are 15/16 on L8 and 28/29 on L16.

| Surface |            K |      A4, mm⁻³ |      A6, mm⁻⁵ |     A8, mm⁻⁷ |         A10, mm⁻⁹ |
| ------- | -----------: | ------------: | ------------: | -----------: | ----------------: |
| 15      | 0.00000e+000 | -3.70870e-005 | -9.06300e-008 | 1.50901e-009 |      8.60362e-012 |
| 16      | 0.00000e+000 |  4.21568e-005 | -3.28652e-008 | 2.46762e-009 |      5.11535e-012 |
| 28      | 0.00000e+000 | -4.90424e-005 | -2.47272e-007 | 3.25583e-009 | 0 (not tabulated) |
| 29      | 0.00000e+000 | -4.47195e-005 | -1.49024e-007 | 2.93480e-009 |     -9.51658e-012 |

The source's full coefficients are retained. Negative leading A4 terms on surfaces 15, 28 and 29 do not by themselves determine a global aberration benefit: the higher terms, surface curvature, pupil position and zoom state also contribute. No source-independent refit, polymer assumption or molding-process assignment is used.

## Zoom Reconstruction and Its Limits

The three printed infinity rows are kept as printed, including BF = 10.65 mm. B3/B5/B7 remain coupled: D18 + D21 = 4.29 mm and D24 + D27 = 13.79 mm. B8 is fixed. The model has 65 zoom stations: the three printed rows and 62 calculated ones between them. B1, B4 and B6 move objectward over the whole range.

Linear interpolation of all seven gaps between the printed rows leaves several millimetres of intermediate defocus. D5, D13, D18, D21 and D29 are therefore interpolated linearly, and B6 is solved at each station for zero paraxial defocus; it departs from its linear path by up to 1.23 mm, near 89 mm. Near wide that solution alone would first close D24 from 1.40 to 1.32 mm, whereas ¶0073 has the B5–B6 distance widen once and then narrow. From 18.56 to about 31 mm the model instead prescribes a smooth, steadily widening D24 and solves B2 for focus. B2 then moves up to 0.27 mm imageward of its linear path, near 21.8 mm, before moving objectward: the locus convex to the image side that ¶0072 describes. Every variable gap now changes direction as ¶0073 states: D5 widens, D13 narrows, D18 and D27 narrow and then widen, D21 and D24 widen and then narrow, and D29 widens. Using B4 as the compensator instead would bring its rims into B3 (D18 near 0.24 mm against 0.62 mm of facing sag). This is an admissible reconstruction, not Canon's cam.

Station f-numbers are linear in station index from F3.60 at wide to F5.56 at the middle row. From middle to tele, linear interpolation would open the axial beam past the printed B4 diameters (surfaces 19–21) by up to 0.12 mm around 90 mm. Those stations instead follow a smooth curve that rises steadily to F6.49 and just clears the B4 rims: F5.72 at 54.9 mm, F6.02 at 70.2 mm, F6.36 at 102.3 mm and F6.46 at 123.7 mm. The printed rows themselves fit: the F3.60 wide beam fills surface 15 and the F6.49 tele beam fills surface 21, so the B3 and B4 diameters are the design's axial-beam apertures.

The printed rows reproduce as follows:

| Zoom   | Printed EFL, mm | Calculated EFL, mm | Calculated BFL, mm | Printed BF, mm |
| ------ | --------------: | -----------------: | -----------------: | -------------: |
| Wide   |           18.56 |          18.551899 |          10.637197 |          10.65 |
| Middle |           48.87 |          48.848759 |          10.614771 |          10.65 |
| Tele   |          145.41 |         145.338195 |          10.598473 |          10.65 |

The literal tele axial sum is 145.34 mm while the separately printed total is 145.33 mm. Both are retained as a source-rounding discrepancy. Source radii, indices and gaps are not altered to force equality. Between stations the infinity image plane stays within 0.03 mm of the printed back focus; the largest residual, 0.052 mm, is that of the printed tele row.

## Model Scope and Limitations

The printed effective diameters are used as clear apertures (semi-diameter = half the printed value), not as mechanical outlines. At every station, at infinity and at closest focus, the corner chief ray for the full 13.66 mm image height passes every rim.

The printed wide half-angle, 36.35°, equals atan(13.66/18.56); the real chief ray that reaches a 13.66 mm image height leaves at about 37.77° in this model. Nominal angle and actual image height are not interchangeable in a distorted wide-angle zoom.

The calculated zoom stations and every finite-focus state come from first-order solutions, not from Canon's cam. Image quality between the printed rows depends on that reconstruction and is a model estimate only. The model does not simulate the IS decenter, manufacturing tolerances or measured performance.

## Sources

1. [US 2018/0074300 A1, original publication PDF](https://patentimages.storage.googleapis.com/46/73/a7/906c1117d3386b/US20180074300A1.pdf): ¶0071–0074, ¶0083–0087, Numerical Value Data 2, Fig. 3 and Tables 1–2. Original PDF SHA256: `f5f790b919fbb73ebac85183c13534996c5bc4b97563f812a1fdedce56f9272d`.
2. [Canon Camera Museum, EF-M18–150mm f/3.5–6.3 IS STM](https://global.canon/en/c-museum/product/ef462.html): product generation, November 2016 introduction, 17/13 construction, two aspherical elements, original optical diagram (UD element, aspherical elements and IS unit), aperture blades, minimum distances and production IS.
3. Catalog glass records with matching nd/νd from the LensVisualizer glass catalog. These establish model equivalents except where the patent explicitly names L14/L15; they do not establish production suppliers.
