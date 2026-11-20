# 7ARTISANS 40mm f/5.6 (CN 221175107 U Design) — Audit Log

## Source

[CN 221175107 U](https://patents.google.com/patent/CN221175107U/en) is a utility model for a 40 mm f/5.6 full-frame lens, filed on 14 December 2023 and granted on 18 June 2024. The assignee is Shenzhen 7Artisans Photoelectric Technology Co., Ltd. (深圳市七工匠光电科技有限公司), and the inventor is Changjia Liu (刘昌家). The sole numerical example appears on PDF p. 6 at its printed millimetre scale. Claim 9 and paragraph 0036 name the glasses; Figs. 1–6 show construction and calculated performance.

The material references are CDGM's [H-LaK53B](https://www.cdgmgd.com/webapp/pdf/H-LaK53B.pdf), [H-F4](https://www.cdgmgd.com/webapp/pdf/H-F4.pdf), [H-ZLaF92](https://www.cdgmgd.com/webapp/pdf/H-ZLaF92.pdf) sheets and [high-transmittance glass table](https://www.cdgmgd.com/go.htm?k=High_Transmittance_Optical_Glass&url=goods). The Zemax figure footers name “HPF40-III.ZMX” and “U.S.Patent 4143944” as a starting design; neither identifies a production lens.

## Transcription Check

The table was visually checked on 15 November 2026 and again on 20 November. All twelve radii, eleven internal distances, seven printed nd/νd pairs and two cemented joins agree with the original transcription. The radii are 15.63, 22.3, 146.2, −8.2, 28.9, 32.6, −10.5, 58.77, −60, −19.19, −11.6 and −27.63 mm. The internal distances are 2.43, 3.13, 6, 1, 0.1, 4.26, 2.6, 0.94, 2.73, 1.3 and 3 mm. Surface numbers remain 1–12; the inferred iris divides only the 3.13 mm gap. There are no aspheres, variable gaps or tabulated back focus.

The printed nd/νd pairs are 1.755/52.33, 1.497/81.6, 1.62/36.35, 2/28.32, 1.728/28.3, 2/28.32 and 1.805/25.4. The model uses the named glasses' catalog values as detailed below. The claims call L6 negative, although its −60/−19.19 mm radii and centre thickness give positive power and Fig. 1 draws a thicker centre.

## First-Order Check

The current model gives EFL 39.84 mm, f/5.60, paraxial BFD 23.51 mm and total track 51.00 mm. Its iris radius is 3.226 mm and nominal half-field is 28.8°. The last air gap places the image plane at paraxial focus. The patent states 40 mm and f/5.6; its Fig. 5 entrance-pupil radius of 3.50 mm would instead give f/5.69 at the current EFL.

For comparison, the original printed-index model gave EFL 40.43 mm, f/5.78, paraxial BFD 23.95 mm, total track 51.32 mm, iris radius 3.174 mm and half-field 27.8°. Its former 23.83 mm image gap minimized axial RMS spot size 0.114 mm inside paraxial focus. Moving to that plane reduced d-line axial RMS radius from 7.24 to 2.01 µm and the largest traced transverse radius from 13.13 to 3.28 µm. The following historical diffraction MTF values at 30 lp/mm apply only to those printed indices and that former image plane:

| Image height (mm) | Sagittal MTF | Tangential MTF |
| --- | --- | --- |
| 0 | 0.8465 | 0.8465 |
| 10.82 | 0.8200 | 0.8004 |
| 16.22 | 0.7418 | 0.5386 |
| 21.63 | 0.7611 | 0.4618 |

Those tangential values did not reproduce the patent's full-field claim above 0.7. The blocked portion of the corner pupil was about 29.8%; this was not an irradiance measurement.

With the current indices, exact spherical tracing at the patent's 26.6° half-field gives image height 19.96 mm and distortion −0.00385%, compared with the plotted 20 mm and 0.0024%. Tangential and sagittal shifts are −0.347 and −0.210 mm relative to paraxial focus, outside the patent's stated range of approximately −0.1 to +0.2 mm. Fig. 5 places its image plane about 0.08–0.14 mm inside paraxial focus, so the reference planes differ.

The surfaces stay clear of each other; the iris sets the full aperture. At 28.5°, the corner chief ray reaches 21.63 mm without obstruction; S10 trims about 47% of one side of the meridional beam.

## Values Not Printed in the Patent

The physical iris plane and diameter, clear radii and infinity image distance are inferred. The iris lies halfway through the L1–L2 gap, 4.00 mm behind S1, consistent with near-zero distortion. The circular iris follows nominal f/5.6. The f/5.6–16 display range is a choice for this model, not a documented mechanical stop range. No finite-focus spacings, diaphragm blade count or blade shape are given. The patent labels individual lenses rather than named optical groups; the two cemented pairs are L2–L3 and L4–L5.

Stop sensitivity was checked for the original printed-index model at a fixed f/5.78 entrance pupil. Positions 0.5 mm to either side of the gap midpoint passed chief rays through 28°. Positions in front of L1 clipped S10 at 28°; some positions farther back clipped front surfaces or had no extreme-field chief-ray solution. These comparisons do not establish a unique physical stop. The predicted pupil dimensions were:

| Iris position behind S1 (mm) | Iris diameter (mm) | Entrance-pupil position behind S1 (mm) | Exit-pupil position behind S1 (mm) | Exit-pupil diameter (mm) |
| --- | --- | --- | --- | --- |
| 3.495 | 6.407 | 2.731 | 10.503 | 7.087 |
| 3.995 | 6.349 | 3.333 | 11.112 | 6.982 |
| 4.495 | 6.290 | 3.947 | 11.713 | 6.878 |

Each entrance pupil had a 7 mm diameter. The positions were obtained by small-angle exact-ray extrapolation; they are predictions rather than measured dimensions or mount-clearance data.

The clear radii are estimated from Fig. 1 (see the rim review below). The drawing's air gaps are not uniformly scaled: the L3–L4 gap appears about 4 mm wide against the printed 0.1 mm. Full-frame corner chief rays pass, while the outer part of the corner beam is vignetted.

## Product Identification

No 7Artisans product with this prescription is documented. The AstrHori 40mm f/5.6 belongs to a different company and was [announced in January 2022](https://photorumors.com/2022/01/18/another-new-rockstar-lens-40mm-f-5-6-lens-for-leica-m-mount-not-for-e-mount/), about 23 months before this patent filing. Its [distributor listing](https://www.stkb.jp/shopdetail/000000002008/) gives the same nominal focal length, aperture and seven-element/five-group count; these shared specifications do not link it to the patent. No AstrHori product, mount, blade count, minimum focus distance or mechanical aperture range is attributed to this design.

## Corrections, 2026-11-20

- Replaced the former AstrHori attribution with the 7Artisans patent design identity. The name is “7ARTISANS 40mm f/5.6 (CN 221175107 U Design)”. Corrected the assignee's English spelling to “Shenzhen 7Artisans Photoelectric Technology Co., Ltd.”; the patent number, year, inventor and sole example are retained.
- Replaced the former descriptive subtitle with “CN 221175107 U, sole example — 7Artisans / Liu”.
- Removed the Leica M mount and marketing focal length and aperture because no product is documented. Replaced calculated design metadata of 40.43 mm and f/5.78 with the patent's stated 40 mm and f/5.6. Retained full-frame format and seven elements in five groups; no marketing minimum-focus value is supplied.
- Changed L6 from negative to positive meniscus according to its radii and thickness. Added optical roles and individual focal lengths of +59.84, +15.83, −10.20, +8.33, −12.04, +27.21 and −27.09 mm.
- Replaced generic glass descriptions with the patent's material names. The following changes use named-material data rather than identification by numerical proximity. CDGM's H-F4 sheet supports the L3 values. The H-ZLaF92 indices at S6 and S9 follow claim 9, the nominal focal length and the aberration figures.

| Element | Printed nd / νd | Applied nd / νd | Applied minus printed Δnd / Δνd |
| --- | --- | --- | --- |
| L1, H-LaK53B | 1.755 / 52.33 | 1.75500 / 52.32 | 0 / −0.01 |
| L2, FCD1 | 1.497 / 81.60 | 1.49700 / 81.60 | 0 / 0 |
| L3, H-F4 | 1.62 / 36.35 | 1.62005 / 36.35 | +0.00005 / 0 |
| L4 and L6, H-ZLaF92 | 2 / 28.32 | 2.00330 / 28.32 | +0.00330 / 0 each |
| L5, H-ZF4AGT | 1.728 / 28.3 | 1.72825 / 28.32 | +0.00025 / +0.02 |
| L7, H-ZF7LAGT | 1.805 / 25.4 | 1.80518 / 25.46 | +0.00018 / +0.06 |

- L2 uses Hoya's FCD1 dispersion curve, differing from the printed values by Δnd = 0 and Δνd = +0.01. This is a spectral proxy, since the patent calls all glasses domestic and does not establish Hoya supply. No anomalous-dispersion designation or additional spectral-line indices are given.
- L5 and L7 use CDGM H-ZF4A and H-ZF7LA dispersion curves for the patent's high-transmittance grades H-ZF4AGT and H-ZF7LAGT. The curves differ from the named glasses' values by Δnd = 0 for both; Δνd = −0.001203 for L5 and −0.003744 for L7.- Changed the final air gap from the former 23.83 mm axial best-RMS plane to the 23.51 mm paraxial BFD. Set nominal aperture to the printed f/5.6 instead of f/5.78. Removed f/22 from the aperture range because it belonged to the unrelated AstrHori lens. The modeled range is f/5.6–16; no mechanical stop range is documented.
- Changed `focus.closeFocusM` from 1e9 to 1e15 and described infinity focus only because no finite-focus prescription is published. No focus states, radii, internal distances, stop position, clear radii or dimensional scale were altered today.

The model gives EFL 39.84 mm, f/5.60, BFD 23.51 mm, iris radius 3.226 mm, half-field 27.8° and total track 51.00 mm.

### 2026-11-20 rim review

Fig. 1 (PDF p. 8) was measured at the drawing's own resolution. All seven glass thicknesses give 28.8–30.0 px/mm (mean 29.0), and the drawn sags of S1, S4, S7, S11 and S12 agree with the radii at that scale. The air gaps do not: L1–L2 is drawn 1.6 mm (printed 3.13), L3–L4 4.2 mm (0.1) and L5–L6 2.4 mm (0.94), while L6–L7 matches at 1.3 mm. The figure therefore sets rim heights, not spacings. Drawn heights: L1 6.5, L2 5.2, L3 and L4 6.5, L5 and L6 8.2, L7 10.2 mm; L1's rear curve ends at 5.3 mm and L7's front curve at 7.7 mm, each followed by a flat land.

- S2: 6.5 → 5.3 mm, with rimExtensionSd 6.5 mm for the drawn land. The corner beam reaches only 4.1 mm there, so no light is lost.
- S8, S9 and S10: 7.0 → 7.3 mm. The figure draws L5's rear face and L6 at 8.2 mm, but with the printed 0.94 mm gap S8 and S9 meet near 7.45 mm. 7.3 mm is the largest 0.1 mm step that keeps them apart; checks.gapSagFrac 0.96 admits that pair (0.95 does not). L6 stays square-cut, as drawn.
- S11: 9.8 → 7.7 mm, with rimExtensionSd 9.8 mm. This matches the drawn end of the front curve, where L7 nests against L6, and gives a 4.1 mm edge thickness against the drawn 3.9–4.0 mm. The former 9.8 mm curve gave a 6.6 mm edge.
- Kept: S1 6.5, S3/S4 5.2, S5–S7 6.5 and S12 9.8 mm, all within 4% of the drawing.

Wide-open geometric transmission changed from 99.0/85.8/67.8% to 100/94.5/78.3% at 22.8°/25.7°/28.5°. No field lost light, and the modelled half-field rose from 27.8° to 28.8°. The f-number stays f/5.6 with no rim limiting the axial beam. The corner chief ray still reaches 21.63 mm at 28.5°. The surface, aperture, image-circle and field-coverage checks pass. Because S8–S10 are held below the drawn 8.2 mm by the S8/S9 geometry, the rim evidence is mixed, so the file declares no clear-aperture provenance.

### 2026-11-20 glass

- L1, L3, L4 and L6 now carry the CDGM names H-LaK53B, H-F4 and H-ZLaF92 and trace on CDGM's catalog dispersion for those glasses, with unchanged nd/νd (1.75500/52.32, 1.62005/36.35, 2.00330/28.32). All six CDGM-named elements now use CDGM curves, and L2 uses Hoya's FCD1 curve. The L4/L6 index correction for the printed value 2 stands as recorded above.

## Remaining Questions

- L5's rear face and L6 remain about 0.9 mm smaller than drawn because the printed 0.94 mm gap does not leave room for the figure's 8.2 mm outline.
- FCD1's domestic material identity and supplier remain uncertain.
- The field-curvature discrepancy is unresolved. The initial MTF values do not establish the patent's full-field MTF claim for the current model, and no apochromatic performance is established.
- No product, production mount, marketing specifications, minimum focus distance, finite-focus spacings, mechanical stop range, diaphragm blade count or blade roundedness is documented. Physical iris dimensions also remain unconfirmed.
