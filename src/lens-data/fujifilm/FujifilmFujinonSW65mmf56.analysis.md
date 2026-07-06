## Patent Reference and Design Identification

**Patent:** JP S56-140311 (A)
**Application Number:** Shō 55-43373
**Filed:** April 2, 1980
**Published:** November 2, 1981
**Inventors:** Doi Ryōichi (土居良一), Sakai Yutaka (阪井豊), Ohno Kazunori (大野和則)
**Applicant:** Fuji Photo Optical Co., Ltd. (富士写真光機株式会社)
**Title:** Wide-Angle Lens (広角レンズ)
**Classification:** G02B 9/58
**Embodiment analyzed:** Example 1 (実施例1, Table 1)
**Worked examples:** 4 numerical examples: Examples 1–2 at 2ω = 75°, Examples 3–4 at 2ω = 70°

The patent describes a six-element, four-group, all-spherical wide-angle lens for f/5.6 and a 70°–75° full field. Example 1 is the embodiment transcribed here. It is the strongest patent match for the EBC Fujinon SW 65mm f/5.6 fixed lens used on the Fujica/Fuji GSW690-series cameras.

The identification rests on convergent evidence rather than an explicit product name in the patent. Example 1 gives six elements in four air-separated groups, f/5.6, and 2ω = 75°. The production GSW690III manual lists the fixed lens as an EBC Fujinon SW 65 mm f/5.6 with four components and six elements, a 1 m nearest focusing distance, f/32 minimum aperture, 67 mm screw-in filter thread, and 76° covering power. The same manual gives the 6×9-format actual picture size as 56 × 82.6 mm. That actual diagonal is 99.79 mm, and a 65 mm rectilinear lens over that diagonal gives $2\tan^{-1}(99.79/(2\times65)) = 75.02^\circ$, matching the patent's 75° field essentially exactly.

The patent text states that the invention is suitable for 4.5×6 cm through 6×9 cm photographic formats and notes that a 65 mm, 6×9 implementation can keep the front effective diameter at roughly 38 mm. That statement is a close mechanical match to the GSW690 wide fixed-lens application and explains why the data file constrains the front surface semi-diameter to 19 mm.

Examples 3 and 4 are 70° variants. They are not used here because the 75° Example 1 aligns with the 6×9 production field. The patent itself does not assign the 70° embodiments to a named production camera.

## Optical Architecture

The design is a compact, quasi-symmetric wide-angle lens of the negative-meniscus / cemented positive doublet / cemented positive doublet / negative-meniscus form. In broad family terms it belongs to the symmetric wide-angle tradition that includes Angulon- and Biogon-type layouts, but the prescription is deliberately asymmetric and should not be treated as a literal mirror-image Biogon derivative.

The power distribution across the four air-separated groups is negative–positive–positive–negative:

| Group | Elements | Standalone in-air group focal length | Function                                                                                                             |
| ----- | -------: | -----------------------------------: | -------------------------------------------------------------------------------------------------------------------- |
| G1    |       L1 |                            −95.44 mm | Front negative field meniscus; accepts the wide field and moderates ray angles before the front cemented doublet.    |
| G2    |    L2+L3 |                            +69.20 mm | Front positive cemented doublet; supplies front-half convergence and chromatic correction at the cemented interface. |
| G3    |    L4+L5 |                            +49.36 mm | Rear positive cemented doublet; stronger than G2 and the main image-forming contributor.                             |
| G4    |       L6 |                            −70.29 mm | Rear negative field meniscus; controls exit geometry, field curvature, and lateral color.                            |

The aperture stop lies in the air gap between surfaces 5 and 6, between the two cemented doublets. The patent drawing places the iris in that central gap but does not give a numerical split within $d_5$. The data file therefore splits the published $d_5$ equally around the stop. This does not change the Gaussian focal length or back focus, but it gives the renderer a physically reasonable central stop position.

The symmetry is approximate rather than exact. G2 and G3 differ materially in power (+69.20 mm versus +49.36 mm), L1 and L6 use different glasses, and the rear doublet carries the stronger positive component. This controlled asymmetry is central to the six-element reduction: the patent's own discussion states that conventional lenses of comparable f-number and field generally required about eight elements, while the invention preserves correction with six by choosing the total track, core length, and cemented-interface powers within defined limits.

At the 65 mm production scale, the front-vertex to rear-vertex optical track is 72.5985 mm. The computed infinity back focal distance from surface 10 is 41.6297 mm, giving a front-vertex to image-plane distance of 114.2282 mm.

## Element-by-Element Analysis

### L1 — Negative Meniscus, Convex to Object

nd = 1.51823, νd = 59.0. Glass: S-NSL3 (OHARA), catalog match. Standalone f = −95.44 mm.

L1 is a negative meniscus with both radii positive ($r_1 = +0.4706$, $r_2 = +0.2856$ normalized), so both centers of curvature lie to the image side. The front surface is convex to the object; the more strongly curved rear surface supplies most of the negative power.

This element is the wide-angle field collector. Its negative power reduces the ray-angle burden on the following positive doublet and helps set the compact total track constrained by patent condition ①. The glass is an ordinary crown by Abbe number, so it does not introduce a large chromatic load before the achromatizing cemented group.

### L2 — Biconvex Positive, Front Member of D1

nd = 1.69350, νd = 53.4. Glass: S-LAL13 (OHARA) class; current catalog νd = 53.21. Standalone f = +25.99 mm.

L2 is the high-index positive member of the front cemented doublet. Its biconvex shape gives power on both surfaces, while the high index reduces the curvature needed for a given positive power. This is one of the design's principal element-count savings: a lower-index crown would require steeper surfaces or an additional element to reach the same correction.

The cemented surface $r_4$ is one of the patent's explicitly constrained surfaces. Its power is $\varphi_4 = (N_3-N_2)/r_4 = +0.31256$, inside the specified range 0.29–0.42. The sign is positive because the refractive-index drop from L2 to L3 occurs on a negative-radius surface.

### L3 — Biconcave Negative, Rear Member of D1

nd = 1.56732, νd = 42.8. Glass: S-TIL26 (OHARA), catalog match. Standalone f = −35.00 mm.

L3 is the negative member of the first cemented doublet. The current OHARA catalog lists S-TIL26 at nd = 1.56732 and νd = 42.82, which is an essentially exact match to the patent's 567/428 glass code.

Its main function is chromatic and off-axis correction at the L2/L3 cemented interface. The Abbe-number separation between L2 and L3 is modest, but the interface is strongly powered and occurs near a useful ray height. The result is a compact achromatizing doublet rather than a classical large-dispersion achromat.

### L4 — Biconcave Negative, Front Member of D2

nd = 1.56732, νd = 42.8. Glass: S-TIL26 (OHARA), catalog match. Standalone f = −27.77 mm.

L4 repeats the S-TIL26 glass of L3 and begins the rear cemented doublet. It is biconcave, with the more influential surface at the cemented junction to L5. The element is stronger than L3 as a standalone element, reflecting the deliberately stronger rear doublet.

Together with L5, L4 forms the second achromatizing pair. This pair is not a mere mirror copy of D1: the rear cemented interface is much more strongly curved, and condition ④ permits a wider range of interface power than condition ③.

### L5 — Biconvex Positive, Rear Member of D2

nd = 1.69350, νd = 53.4. Glass: S-LAL13 (OHARA) class; current catalog νd = 53.21. Standalone f = +20.98 mm.

L5 is the strongest individual positive element in the lens. It is biconvex and shares the high-index lanthanum-crown glass family used for L2. The rear doublet's net focal length is +49.36 mm, making it the stronger of the two positive doublet groups.

The cemented surface $r_7$ is the other constrained interface. Its power is $\varphi_7 = (N_5-N_4)/r_7 = +0.43935$, within the specified 0.24–0.46 range and close to the upper bound. This high interface power is consistent with the patent's emphasis on coma-flare and astigmatism control in a six-element construction.

### L6 — Negative Meniscus, Convex to Image

nd = 1.60342, νd = 38.0. Glass: S-TIM5 (OHARA), catalog match. Standalone f = −70.29 mm.

L6 is the rear negative meniscus, with both radii negative ($r_9 = -0.2739$, $r_{10} = -0.4894$ normalized). It curves toward the object side and presents a convex rear face to the image.

The glass selection breaks the front/rear material symmetry: L1 is a crown, while L6 is a denser flint. The rear meniscus works at large oblique-ray heights near the image side, so its dispersion and power help control lateral color and field curvature after the rear doublet has supplied the main convergence.

## Glass Identification and Selection

The glass palette resolves cleanly against OHARA catalog entries or close OHARA class matches. L1 corresponds to S-NSL3, L3/L4 to S-TIL26, and L6 to S-TIM5. L2/L5 align with S-LAL13 in index and glass code, though the patent's νd = 53.4 is slightly higher than the current catalog value of 53.21; the data file therefore labels these elements as S-LAL13 class rather than as an exact catalog identity.

| Element(s) | Patent nd | Patent νd | Patent code | Catalog identification | Catalog comparison                                                       |
| ---------- | --------: | --------: | ----------: | ---------------------- | ------------------------------------------------------------------------ |
| L1         |   1.51823 |      59.0 |     518/590 | S-NSL3 (OHARA)         | nd = 1.51823, νd = 58.90                                                 |
| L2, L5     |   1.69350 |      53.4 |     694/534 | S-LAL13 (OHARA) class  | nd = 1.69350, νd = 53.21; close Abbe mismatch from catalog/melt rounding |
| L3, L4     |   1.56732 |      42.8 |     567/428 | S-TIL26 (OHARA)        | nd = 1.56732, νd = 42.82                                                 |
| L6         |   1.60342 |      38.0 |     603/380 | S-TIM5 (OHARA)         | nd = 1.60342, νd = 38.03                                                 |

The chromatic design is economical: two high-index lanthanum-crown positive elements are paired with two lower-index flint elements in cemented doublets, and the final dense flint meniscus supplies additional rear-side correction. The design does not claim apochromatic behavior, and the patent publishes only ordinary nd/νd glass data. The data file records catalog line indices where current OHARA matches are exact or sufficiently close, but no anomalous-partial-dispersion claim is made.

## Focus Mechanism

The patent publishes the infinity-focus prescription only. It gives no variable-spacing table for close focus.

The production GSW690-series lens is represented as a unit-focus lens. This is consistent with a fixed-lens mechanical rangefinder using a helicoid-coupled optical block and with the absence of any patent-published floating gaps. In the data file, unit focus is modeled by increasing only the final air distance from surface 10 to the image plane.

The manufacturer manual gives a nearest focusing distance of 1 m. A thick-lens paraxial unit-focus solve using a 1 m object distance measured from the film plane gives an estimated infinity-to-close extension of 5.0252 mm, increasing BFD from 41.6297 mm to 46.6549 mm. The corresponding magnification is approximately 0.0773×. This close-focus model is an approximation for visualization; the patent itself supplies only the infinity state.

## Conditional Expressions

The patent defines four conditions with all lengths normalized to the whole-system focal length of 1.0:

- $a$: vertex distance from surface 1 to surface 10.
- $b$: vertex distance from surface 3 to surface 8.
- $\varphi_4$: refractive power of the fourth surface.
- $\varphi_7$: refractive power of the seventh surface.

| Condition                   | Patent range | Computed value, Example 1 | Result    |
| --------------------------- | -----------: | ------------------------: | --------- |
| ① $1.09 < a < 1.31$         |    1.09–1.31 |                    1.1169 | Satisfied |
| ② $0.61 < b < 0.81$         |    0.61–0.81 |                    0.6595 | Satisfied |
| ③ $0.29 < \varphi_4 < 0.42$ |    0.29–0.42 |                   0.31256 | Satisfied |
| ④ $0.24 < \varphi_7 < 0.46$ |    0.24–0.46 |                   0.43935 | Satisfied |

The expressions are internally consistent with the numerical table. The total track condition is satisfied near the lower side of its range, which fits the patent's goal of compactness. The rear cemented-interface power is close to the upper limit, consistent with the stronger rear doublet and with the asymmetry seen in the group focal lengths.

## Verification Summary

The prescription was re-entered from Example 1 and checked by independent paraxial matrix and y–u ray tracing. All values below are based on the normalized patent prescription unless otherwise stated.

| Quantity                           | Computed value |  Scaled value at f = 65 mm | Notes                                                                     |
| ---------------------------------- | -------------: | -------------------------: | ------------------------------------------------------------------------- |
| Effective focal length             |       1.000015 |                  65.001 mm | Agreement with patent's normalized f = 1.0; residual from table rounding. |
| Infinity back focal distance       |       0.640457 |                 41.6297 mm | Distance from surface 10 to the image plane.                              |
| 1 m unit-focus back focal distance |       0.717768 |                 46.6549 mm | Visualization estimate; not supplied by the patent.                       |
| Front-to-rear optical track        |       1.116900 |                 72.5985 mm | Sum of $d_1$ through $d_9$.                                               |
| Front vertex to image plane        |       1.757357 |                114.2282 mm | Track plus infinity BFD.                                                  |
| Petzval sum                        |       0.048777 | Petzval radius ≈ 1332.6 mm | Computed surface-by-surface as $\sum \varphi/(n n')$.                     |
| G1 focal length                    |       −1.46827 |                  −95.44 mm | Standalone in-air group focal length.                                     |
| G2 focal length                    |       +1.06462 |                  +69.20 mm | Standalone in-air cemented group focal length.                            |
| G3 focal length                    |       +0.75937 |                  +49.36 mm | Standalone in-air cemented group focal length.                            |
| G4 focal length                    |       −1.08145 |                  −70.29 mm | Standalone in-air group focal length.                                     |

The surface-by-surface Petzval calculation gives $0.048777$ at normalized scale, corresponding to a Petzval radius of about 20.50 normalized focal lengths or 1332.6 mm at the 65 mm scale.

The semi-diameters in the data file are inferred, not patent-published. They were constrained by the patent's approximately 38 mm front effective-diameter statement, by the official 67 mm filter-thread envelope, by the renderer's spherical rim limits, by element front/rear semi-diameter ratios, by cross-gap sag intrusion, and by the Fig. 1 silhouette. The central doublets are kept narrower than the outer menisci but less pinched than the initial paraxial-only estimate. The resulting clear apertures should be treated as mechanically plausible visualization apertures, not as a measured Fuji production drawing.

## Design Heritage and Context

The patent's stated purpose is to produce a high-performance f/5.6 wide-angle lens of 70°–75° field with only six elements. The text contrasts this with conventional symmetric wide-angle lenses of similar aperture and field, which typically required roughly eight or more elements to maintain correction. The design reaches the six-element count by combining a compact total track, a constrained cemented-core length, and strongly controlled cemented-interface powers.

The design is therefore best understood as a production-oriented compact symmetric wide-angle rather than merely a simplified Biogon. Its central stop and negative-positive-positive-negative grouping provide the usual cancellation advantages of symmetric wide-angle lenses, while the asymmetric group powers and glass choices correct the residual field and chromatic errors that would remain in a purely symmetric prescription.

## Sources

- JP S56-140311 (A), 「広角レンズ」, Fuji Photo Optical Co., Ltd., published November 2, 1981. Primary source for the prescription, conditional expressions, worked examples, field angle, and patent design rationale.
- Fuji GW690III / GSW690III / GW670III Professional Owner's Manual. Manufacturer source for production lens specifications, actual picture size, nearest focusing distance, filter thread, and covering power.
- OHARA INC., Glass Type product table, for S-NSL3, S-TIL26, and S-TIM5 catalog values and line-index data.
- OHARA GmbH, S-LAL13 product datasheet, December 2019, for the S-LAL13 class match and line-index data.
- OHARA INC., Comparative Table of Recommended Glasses, for cross-manufacturer equivalents and glass-code confirmation.
