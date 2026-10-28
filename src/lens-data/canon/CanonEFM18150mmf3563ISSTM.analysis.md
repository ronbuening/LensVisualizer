# Canon EF-M 18–150mm f/3.5–6.3 IS STM — Source-Correlated Optical Model

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
2. Four aspheric surfaces occur on two elements, consistent with the two aspherical elements in Canon's original optical diagram.
3. The patent's 18.56–145.41 mm, F3.60–6.49 range and 13.66 mm image semi-height fit the marketed 18–150mm F3.5–6.3 APS-C zoom without rescaling.
4. The arrangement of the front cemented pair, following singlet, four-element second unit, post-stop assembly and two rear singlets agrees structurally with Canon's diagram.
5. The September 2016 priority predates the November 2016 product introduction. These facts concern the EF-M generation, not a later RF-S lens with a similar focal range.

There is an important limit to this correlation: ¶0083 says the illustrated embodiments omit a vibration-reduction unit, though one may be incorporated. The retail product has optical IS. The model therefore represents the centered patent prescription; it does not certify the production stabilizer, its displacement or its optical performance. Matching the diagram and specifications cannot remove that distinction.

The original PDF was checked against independent pixel-based transcription. Its radius, thickness, index, Abbe-number, effective-diameter, asphere and native-station fields agree in 325 comparison checks. Original source rounding is retained, not repaired to optimize results.

## Optical Architecture

The design has eight kinematic units with powers **+ / − / + / + / + / − / − / +**. These are not the same as the 13 air-separated components. The front positive unit and strong negative second unit form the principal variator arrangement. The post-stop units divide relay, compensation and focus functions among compact subassemblies.

| Unit | Elements    | Source unit focal length, mm | Kinematic role                             |
| ---- | ----------- | ---------------------------: | ------------------------------------------ |
| B1   | L1–L3       |                       +75.07 | Moves objectward for wide-to-tele zoom     |
| B2   | L4–L7       |                       −15.20 | Moves on an imageward-convex zoom locus    |
| B3   | Stop, L8–L9 |                       +35.51 | Coupled with B5 and B7                     |
| B4   | L10–L11     |                       +39.62 | Independently moving zoom unit             |
| B5   | L12–L13     |                       +52.89 | Coupled with B3 and B7                     |
| B6   | L14–L15     |                       −30.80 | Moves for zoom; rigid imageward near focus |
| B7   | L16         |                       −79.01 | Coupled with B3 and B5                     |
| B8   | L17         |                       +74.03 | Fixed during zoom                          |

Paragraphs 0071–0074 establish these movements. The stop is the source's surface 14, between B2 and B3, not an inferred position. There are no source-listed camera-side plates. The published single effective stop diameter is not a per-zoom iris schedule: the runtime derives the physical opening from each station's design f-number and the actual ray geometry.

## Element-by-Element Analysis

The individual focal lengths below are the source's single-lens values. Glass names outside L14/L15 are coordinate-compatible catalog equivalents, not established production suppliers. The descriptions of correction roles are optical interpretations of the prescription unless a patent paragraph is identified.

### L1 — Meniscus Negative

nd = 1.91082, νd = 35.3. Glass: TAFD35 (Hoya) — inferred catalog equivalent; not a source-named supplier. f = -109.57 mm.

The front negative meniscus is cemented to L2. Its high-index, moderate-dispersion material supplies the negative part of the positive B1 component. The published front effective diameter is 40.78 mm; this is not a measured barrel diameter.

### L2 — Biconvex Positive

nd = 1.49700, νd = 81.5. Glass: S-FPL51 (Ohara) — inferred catalog equivalent; not a source-named supplier. f = +88.85 mm.

The positive partner of the front doublet has the lowest refractive index and largest Abbe number in the source palette. The pairing provides chromatic balancing within B1. S-FPL51 is an inferred equivalent; the patent does not identify this element’s actual supplier.

### L3 — Meniscus Positive

nd = 1.59522, νd = 67.7. Glass: S-FPM2 (Ohara) — inferred catalog equivalent; not a source-named supplier. f = +88.03 mm.

This positive meniscus completes B1 after a 0.15 mm axial air interval. Its comparatively high Abbe number supports the positive front group without assigning an unsupported apochromatic classification.

### L4 — Meniscus Negative

nd = 1.95375, νd = 32.3. Glass: S-LAH98 (Ohara) — inferred catalog equivalent; not a source-named supplier. f = -16.86 mm.

The strongly negative meniscus opens B2. B2 has the largest negative unit power and changes its separation from B1 substantially during zoom. Its first effective diameter is larger than its rear diameter, as printed.

### L5 — Biconcave Negative

nd = 1.77250, νd = 49.6. Glass: S-LAH66 (Ohara) — inferred catalog equivalent; not a source-named supplier. f = -28.08 mm.

The biconcave negative element strengthens the diverging second unit. The 5.75 mm preceding space separates it from L4, rather than forming an incorrectly cemented pair.

### L6 — Biconvex Positive

nd = 1.84666, νd = 23.9. Glass: S-NPH53 (Ohara) — inferred catalog equivalent; not a source-named supplier. f = +18.55 mm.

This biconvex positive element provides counter-power within the predominantly negative B2. Its high dispersion differs substantially from neighboring L5 and L7; the resulting chromatic balancing is inferred from these powers and indices.

### L7 — Meniscus Negative

nd = 1.69680, νd = 55.5. Glass: S-LAL14 (Ohara) — inferred catalog equivalent; not a source-named supplier. f = -38.47 mm.

The final negative meniscus of B2 precedes the large, zoom-dependent gap D13 to the stop. Retaining its weak rear radius −120 mm avoids flattening a source-listed curved surface.

### L8 — Biconvex Positive (2× Asph)

nd = 1.58313, νd = 59.4. Glass: L-BAL42 (Ohara) — inferred catalog equivalent; not a source-named supplier. f = +19.07 mm.

This positive element immediately behind the stop carries source aspheres on both faces, surfaces 15 and 16. It supplies most of B3’s positive power. The printed coefficients are used directly with K=0, without an even-order refit or a conic-convention change.

### L9 — Meniscus Negative

nd = 1.83481, νd = 42.7. Glass: S-LAH55 (Ohara) — inferred catalog equivalent; not a source-named supplier. f = -31.33 mm.

The negative meniscus follows L8 across 0.99 mm. Together they form B3, whose position is coupled to B5 and B7. D18 after L9 is a zoom gap, not a near-focus degree of freedom in the adopted model.

### L10 — Meniscus Negative

nd = 1.90366, νd = 31.3. Glass: TAFD25 (Hoya) — inferred catalog equivalent; not a source-named supplier. f = -29.31 mm.

The negative first member of the B4 doublet is cemented to positive L11. Its greater index and dispersion provide balancing within a net-positive unit. The manufacturer’s diagram places the highlighted IS assembly near this structural location, but the patent explicitly omits an IS unit; no decenter behavior is authored.

### L11 — Biconvex Positive

nd = 1.69680, νd = 55.5. Glass: S-LAL14 (Ohara) — inferred catalog equivalent; not a source-named supplier. f = +16.71 mm.

The positive partner closes B4. Its source glass coordinates also occur in L7. D18+D21 remains 4.29 mm at every native station, reflecting the fixed relative positions of the units immediately around B4.

### L12 — Meniscus Positive

nd = 1.51633, νd = 64.1. Glass: S-BSL7 (Ohara) — inferred catalog equivalent; not a source-named supplier. f = +22.83 mm.

The positive crown-like member of B5 is cemented to L13. Its weak front radius −407.535 mm remains a finite surface rather than a plane. The positive and negative pair has a net focal length +52.89 mm.

### L13 — Meniscus Negative

nd = 2.00069, νd = 25.5. Glass: TAFD40 (Hoya) — inferred catalog equivalent; not a source-named supplier. f = -42.04 mm.

This negative meniscus has the highest source refractive index, 2.00069. Its 0.79 mm center thickness and effective diameters are retained. No increase in the allowed gap-sag fraction is needed for the source geometry or the adopted inferred controls.

### L14 — Biconvex Positive

nd = 1.89286, νd = 20.4. Glass: S-NPH4 (Ohara) — source named in Table 1. f = +39.23 mm.

This biconvex positive lens is the PL member of the focus doublet. Table 1 explicitly identifies Ohara S-NPH4 and gives θgF=0.6393. Its pairing with L15 is central to the patent’s light, chromatically balanced negative focus unit.

### L15 — Biconcave Negative

nd = 1.74951, νd = 35.3. Glass: S-NBH51 (Ohara) — source named in Table 1. f = -16.92 mm.

This biconcave negative NL member makes the two-element B6 unit net negative. Table 1 names Ohara S-NBH51 and θgF=0.5818. Paragraph 0074 assigns imageward translation to the complete cemented pair, not relative movement between these two elements.

### L16 — Meniscus Negative (2× Asph)

nd = 1.53160, νd = 55.8. Glass: Unmatched (531558; source nd=1.53160, νd=55.8; supplier and dispersion unresolved). f = -79.01 mm.

The negative B7 singlet has two aspheric surfaces, 28 and 29. Its nd=1.53160 and νd=55.8 do not resolve to a coordinate-compatible catalog entry. Neither a supplier nor a polymer or glass composition is inferred from those two numbers. Spectral tracing uses the explicitly qualified estimated-dispersion fallback for this element.

### L17 — Meniscus Positive

nd = 1.76200, νd = 40.1. Glass: S-LAM55 (Ohara) — inferred catalog equivalent; not a source-named supplier. f = +74.03 mm.

The final positive meniscus forms B8. It remains fixed relative to the image plane throughout zoom and focus. Its rear effective diameter is 27.00 mm, and the literal source rear air gap is 10.65 mm at every infinity station.

## Glass Identification and Selection

Sixteen elements resolve to coordinate-compatible catalog dispersion records. Only the two B6 glasses are explicitly named by the source. The remaining named equivalents reproduce the source coordinates within the existing catalog tolerances; they are not material provenance certificates. L16 remains unmatched and uses its source nd/νd rather than a misleading near match.

| Elements | Material or equivalent          | Status                                                     |
| -------- | ------------------------------- | ---------------------------------------------------------- |
| L1       | TAFD35, Hoya                    | Inferred equivalent                                        |
| L2       | S-FPL51, Ohara                  | Inferred equivalent                                        |
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

The two printed absolute θgF values are represented by subtracting the engine's normal-line value evaluated at the stored νd. The patent's different normal-line polynomial and its Table 2 deviations are not copied directly into ΔPgF. Table 2's displayed PL difference 0.0074 also differs by 0.0001 from subtraction of the rounded Table 1 numbers; this remains a rounding qualification, not a silent correction.

Catalog dispersion has its existing precedence over an Abbe/ΔPgF reconstruction when a compatible catalog record is available. Reference-line tracing preserves source nd; C/d/F and photopic calculations include catalog-equivalent and estimated L16 dispersion. Those spectral simulations are qualified model estimates, not measured chromatic performance of a manufactured lens or an assertion of apochromatic correction.

## Focus Mechanism

B6 is a cemented two-element negative unit. The patent assigns it imageward near-focus translation. D24 increases while D27 decreases by the same displacement; their sum remains 13.79 mm. No other unit moves for focus in the model.

Canon reports a 0.25 m minimum distance at 18–50 mm, increasing to 0.45 m at 150 mm. The patent gives no finite-focus spacings for this example. Nine controls at normalized focus 0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875 and 1 reconstruct paraxial B6 travel for those production endpoints. Between the middle and tele source zoom stations, the endpoint distance is interpolated; this interpolation is a modeling assumption. Finite controls are not marked published and no finite-conjugate MTF certificate is authored.

| Native zoom | Inferred B6 imageward travel to close focus, mm | Assumed object-to-image distance, m |
| ----------- | ----------------------------------------------: | ----------------------------------: |
| Wide        |                                        0.805775 |                                0.25 |
| Middle      |                                        2.934660 |                                0.25 |
| Tele        |                                        7.142928 |                                0.45 |

The continuous slider is piecewise-linear between controls, not a measured motor or cam law. A 32,896-state first-order check over 257 zooms and 128 finite focus settings found a maximum needed image-plane refocus of 0.052969 mm, close to the retained native infinity rounding residual of 0.051527 mm. This is a sampled result, not a global bound.

Far-distance labels are particularly sensitive to the retained source image-plane residual. The largest sampled relative label discrepancy was 53.4%: a nominal 32 m wide-angle label corresponded to approximately 14.91 m in the paraxial reconstructed model. This does not justify moving the source image plane or claiming source-certified focus accuracy. The labels and inferred finite-focus performance remain estimates; exact native infinity data take priority.

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

The three native infinity rows are retained literally, including source BF=10.65 mm. B3/B5/B7 remain coupled: D18+D21=4.29 mm and D24+D27=13.79 mm. B8 is fixed. B1, B4 and B6 move objectward over the sampled wide-to-tele path; B2 follows interpolation between its three printed positions; the detailed curvature of its actual cam remains unknown.

Linear interpolation of only the three published rows leaves multi-millimetre intermediate first-order defocus; the unreconstructed variant is preserved in the evidence. The adopted model has 65 zoom controls: three source rows and 62 explicitly unpublished controls. B1–B5/B7 positions follow source interpolation; B6 alone supplies inferred intermediate compensation to keep the same image plane. The largest B6 offset from the source-linear path is 1.226085 mm. This is an admissible reconstruction, not a recovered production cam or an optimization of the commercial lens.

A bounded B4-only alternative was also tested and rejected. With unchanged source clear apertures it fails 13 geometry checks; its D18 gap becomes about 0.244 mm while the facing sag intrusion is about 0.620 mm. That is actual overlap, not an occasion to enlarge the allowance. The viable B6 model uses no gap-sag override and no shrunken source aperture. Further freedom in the real multi-unit zoom cam is not identified by the three printed rows.

The native first-order replay is:

| Zoom   | Printed EFL, mm | Calculated EFL, mm | Calculated BFL, mm | Printed BF, mm |
| ------ | --------------: | -----------------: | -----------------: | -------------: |
| Wide   |           18.56 |          18.551899 |          10.637197 |          10.65 |
| Middle |           48.87 |          48.848759 |          10.614771 |          10.65 |
| Tele   |          145.41 |         145.338195 |          10.598473 |          10.65 |

The literal tele axial sum is 145.34 mm while the separately printed total is 145.33 mm. Both are retained as a source-rounding discrepancy. Source radii, indices and gaps are not altered to force equality. The largest sampled intermediate infinity residual is 0.022789 mm on the 129-zoom geometry grid and 0.029242 mm on the denser 257-zoom control grid; the largest overall residual, 0.051527 mm, occurs at the unchanged tele source row.

## Verification Summary

Geometry and numerical checks import the pinned public optical engine without changes. Source effective diameters are used as twice the clear semi-diameters, not inferred mechanical outlines. Across 2,193 sampled zoom/focus states, the minimum material thickness is 0.600 mm, minimum adjacent air clearance 0.111640 mm, largest gap-sag ratio 0.840515 and hidden render trim zero. The default allowance remains 0.90.

The exact d-line ray grid samples five zooms, three focus settings, five image-height fractions, three aperture-radius ratios and 61 circular pupil points: 13,725 rays. It records 11,052 transmitted, 2,663 physically clipped and 10 raw `noBracket` failures. Independent spherical intersection checks place all ten missing front-surface intersections outside the authored clear radius by 4.284–6.688 mm. Raw failure statuses remain in the evidence; they are not relabelled converged. All 75 full-image-height chief solutions converge. Finite rays use inferred paraxial conjugates, not patent-certified finite states.

Primary diffraction MTF checks cover five zoom settings (0, 0.25, 0.5, 0.75, 1), wide open and F8, reference/C/d/F/photopic spectra, and field fractions 0, 0.5, 0.7 and 1 at frequencies 0, 10, 20 and 40 lp/mm. All 120 field computations converge within the existing adaptive tolerance, with zero unknown pupil flux. The grid cap is 128. Field fractions refer to the same source-native 13.66 mm semi-height at every zoom and are inverted through real chief rays; they are not fractions of a varying vignetting-limited angular field. Finite MTF correctly remains unavailable.

Convergence does not mean high contrast. In the inferred wide-to-middle cam, reference-line edge tangential MTF at 40 lp/mm is low: 0.0431 at zoom 0.20, 0.0793 at 0.25 and 0.0983 at 0.30. The native wide/middle/tele edge values are approximately 0.3728/0.3841/0.5191 at their respective open apertures. These are model results, not claims that the marketed lens has those performance values.

An additional 48-field reference-line sensitivity computation, partly repeating primary cases, checks zooms 0.20/0.225/0.25/0.275/0.30, design versus best-axial focus, and F8 at 0.25. At zoom 0.25, a best-axial shift of −0.021480 mm raises center T40 from 0.7960 to 0.8463 but changes edge T40 from 0.0793 to 0.0728; edge S40 also falls. Stopping to F8 gives edge T40 0.0469 at the design plane. The low intermediate edge response is therefore not removed by a simple common refocus or stop convention. It remains an underdetermined-cam qualification, not a reason to alter source anchors or claim recovered production quality.

The printed wide half-angle is 36.35°, whereas the real chief-ray inversion for an actual 13.66 mm image height in this model is about 37.77°. Nominal angle and actual image-height axes are not interchangeable in a distorted wide-angle zoom. Full-format image-height tests and the source's nominal field must remain distinguishable.

The numerical evidence is limited to the stated sampled states, field points, spectra and pupil grids. It is not a proof for every continuous position, a production tolerance analysis, an IS/decenter simulation or a measurement. Repository integration gates and actual interactive-viewer QA are separate required evidence; no numerical or static-render result substitutes for them.

## Sources

1. [US 2018/0074300 A1, original publication PDF](https://patentimages.storage.googleapis.com/46/73/a7/906c1117d3386b/US20180074300A1.pdf): ¶0071–0074, ¶0083–0087, Numerical Value Data 2, Fig. 3 and Tables 1–2. Original PDF SHA256: `f5f790b919fbb73ebac85183c13534996c5bc4b97563f812a1fdedce56f9272d`.
2. [Canon Camera Museum, EF-M18–150mm f/3.5–6.3 IS STM](https://global.canon/en/c-museum/product/ef462.html): product generation, November 2016 introduction, 17/13 construction, two aspherical elements, original optical diagram, aperture blades, minimum distances and production IS.
3. Coordinate-compatible catalog dispersion records and their manufacturer provenance, resolved through the pinned LensVisualizer glass catalog. These establish model equivalents except where the patent explicitly names L14/L15; they do not establish production suppliers.
