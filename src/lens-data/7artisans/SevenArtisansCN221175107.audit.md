# 7ARTISANS 40mm f/5.6 (CN 221175107 U Design) — Audit Log

## Source

[CN 221175107 U](https://patents.google.com/patent/CN221175107U/en) is a utility model for a 40 mm f/5.6 full-frame lens, filed on 14 December 2023 and granted on 18 June 2024. The assignee is Shenzhen 7Artisans Photoelectric Technology Co., Ltd. (深圳市七工匠光电科技有限公司), and the inventor is Changjia Liu (刘昌家). The sole numerical example appears on PDF p. 6 at its printed millimetre scale. Claim 9 and paragraph 0036 name the glasses; Figs. 1–6 show construction and calculated performance.

The material references are CDGM's [H-LaK53B](https://www.cdgmgd.com/webapp/pdf/H-LaK53B.pdf), [H-F4](https://www.cdgmgd.com/webapp/pdf/H-F4.pdf), [H-ZLaF92](https://www.cdgmgd.com/webapp/pdf/H-ZLaF92.pdf) sheets and [high-transmittance glass table](https://www.cdgmgd.com/go.htm?k=High_Transmittance_Optical_Glass&url=goods). The Zemax figure footers name “HPF40-III.ZMX” and “U.S.Patent 4143944” as a starting design; neither identifies a production lens.

## Transcription Check

The table was visually checked on 15 November 2026 and again on 20 November. All twelve radii, eleven internal distances, seven printed nd/νd pairs and two cemented joins agree with the original transcription. The radii are 15.63, 22.3, 146.2, −8.2, 28.9, 32.6, −10.5, 58.77, −60, −19.19, −11.6 and −27.63 mm. The internal distances are 2.43, 3.13, 6, 1, 0.1, 4.26, 2.6, 0.94, 2.73, 1.3 and 3 mm. Surface numbers remain 1–12; the inferred iris divides only the 3.13 mm gap. There are no aspheres, variable gaps or tabulated back focus.

The printed nd/νd pairs are 1.755/52.33, 1.497/81.6, 1.62/36.35, 2/28.32, 1.728/28.3, 2/28.32 and 1.805/25.4. The model uses the named glasses' catalog values as detailed below. The claims call L6 negative, although its −60/−19.19 mm radii and centre thickness give positive power and Fig. 1 draws a thicker centre.

## First-Order Check

The current model gives EFL 39.84 mm, f/5.60, paraxial BFD 23.51 mm and total track 51.00 mm. Its iris radius is 3.226 mm and nominal half-field is 27.8°. The last air gap agrees with paraxial BFD within 0.000001 mm. These quantities are unchanged by the final text and aperture-range corrections on 20 November. The patent states 40 mm and f/5.6; its Fig. 5 entrance-pupil radius of 3.50 mm would instead give f/5.69 at the current EFL.

For comparison, the original printed-index model gave EFL 40.43 mm, f/5.78, paraxial BFD 23.95 mm, total track 51.32 mm, iris radius 3.174 mm and half-field 27.8°. Its former 23.83 mm image gap minimized axial RMS spot size 0.114 mm inside paraxial focus. Moving to that plane reduced d-line axial RMS radius from 7.24 to 2.01 µm and the largest traced transverse radius from 13.13 to 3.28 µm. The following historical diffraction MTF values at 30 lp/mm apply only to those printed indices and that former image plane:

| Image height (mm) | Sagittal MTF | Tangential MTF |
| --- | --- | --- |
| 0 | 0.8465 | 0.8465 |
| 10.82 | 0.8200 | 0.8004 |
| 16.22 | 0.7418 | 0.5386 |
| 21.63 | 0.7611 | 0.4618 |

Those tangential values did not reproduce the patent's full-field claim above 0.7. The blocked portion of the corner pupil was about 29.8%; this was not an irradiance measurement.

With the current indices, exact spherical tracing at the patent's 26.6° half-field gives image height 19.96 mm and distortion −0.00385%, compared with the plotted 20 mm and 0.0024%. Tangential and sagittal shifts are −0.347 and −0.210 mm relative to paraxial focus, outside the patent's stated range of approximately −0.1 to +0.2 mm. Fig. 5 places its image plane about 0.08–0.14 mm inside paraxial focus, so the reference planes differ.

Surface geometry has no edge-thickness, overlap or air-gap errors. The aperture is within 3% of its stated value and is not limited by a lens rim. The image circle covers the declared format. Earlier field checks reached the full 21.65 mm target at 28.5°, with no blocked corner chief ray. Tracing to 21.63 mm at 28.5° likewise found no axial clipping or chief-ray obstruction; S10 caused about 64% one-side meridional vignetting.

## Values Not Printed in the Patent

The physical iris plane and diameter, clear radii and infinity image distance are inferred. The iris lies halfway through the L1–L2 gap, 4.00 mm behind S1, consistent with near-zero distortion. The circular iris follows nominal f/5.6. The f/5.6–16 display range is a choice for this model, not a documented mechanical stop range. No finite-focus spacings, diaphragm blade count or blade shape are given. The patent labels individual lenses rather than named optical groups, so no group brackets are added; the two cemented pairs remain marked C1 and C2.

Stop sensitivity was checked for the original printed-index model at a fixed f/5.78 entrance pupil. Positions 0.5 mm to either side of the gap midpoint passed chief rays through 28°. Positions in front of L1 clipped S10 at 28°; some positions farther back clipped front surfaces or had no extreme-field chief-ray solution. These comparisons do not establish a unique physical stop. The predicted pupil dimensions were:

| Iris position behind S1 (mm) | Iris diameter (mm) | Entrance-pupil position behind S1 (mm) | Exit-pupil position behind S1 (mm) | Exit-pupil diameter (mm) |
| --- | --- | --- | --- | --- |
| 3.495 | 6.407 | 2.731 | 10.503 | 7.087 |
| 3.995 | 6.349 | 3.333 | 11.112 | 6.982 |
| 4.495 | 6.290 | 3.947 | 11.713 | 6.878 |

Each entrance pupil had a 7 mm diameter. The positions were obtained by small-angle exact-ray extrapolation; they are predictions rather than measured dimensions or mount-clearance data.

The inferred 7 mm rear clear radii retain the usual 90% air-gap sag limit. S8 and S9 meet near 7.45 mm, although Fig. 1 draws an outline near 8.2 mm. The drawing's air gaps are not uniformly scaled: the L3–L4 gap appears about 4 mm wide against the printed 0.1 mm. Full-frame corner chief rays pass, while marginal rays are vignetted.

## Product Identification

No 7Artisans product with this prescription is documented. The AstrHori 40mm f/5.6 belongs to a different company and was [announced in January 2022](https://photorumors.com/2022/01/18/another-new-rockstar-lens-40mm-f-5-6-lens-for-leica-m-mount-not-for-e-mount/), about 23 months before this patent filing. Its [distributor listing](https://www.stkb.jp/shopdetail/000000002008/) gives the same nominal focal length, aperture and seven-element/five-group count; these shared specifications do not link it to the patent. No AstrHori product, mount, blade count, minimum focus distance or mechanical aperture range is attributed to this design.

## Corrections, 2026-11-20

- Replaced the former AstrHori attribution, name and key with the 7Artisans patent design identity, and made the design visible. The name is “7ARTISANS 40mm f/5.6 (CN 221175107 U Design)”. Corrected the assignee's English spelling to “Shenzhen 7Artisans Photoelectric Technology Co., Ltd.”; the patent number, year, inventor and sole example are retained.
- Replaced the former descriptive subtitle with “CN 221175107 U, sole example — 7Artisans / Liu”. The specification chips now read “7 ELEMENTS / 5 GROUPS”, “DESIGN f = 40 mm”, “DESIGN F/5.6” and “ALL SPHERICAL”. The latter three had already replaced text about modeling choices earlier today and remain unchanged in this final edit.
- Removed the Leica M mount and marketing focal length and aperture because no product is documented. Replaced calculated design metadata of 40.43 mm and f/5.78 with the patent's stated 40 mm and f/5.6. Retained full-frame format and seven elements in five groups; no marketing minimum-focus value is supplied.
- Changed L6 from negative to positive meniscus according to its radii and thickness. Added plain optical roles and individual focal lengths of +59.84, +15.83, −10.20, +8.33, −12.04, +27.21 and −27.09 mm. Renamed the cemented-pair captions and identifiers from D1/D2 to C1/C2 without changing the L2–L3 and L4–L5 joins.
- Replaced generic glass descriptions with the patent's material names. The following changes use named-material data rather than identification by numerical proximity. CDGM's H-F4 sheet supports the L3 values. Two source notes record the rounded H-ZLaF92 index at S6 and S9, supported by claim 9, the nominal focal length and the aberration figures.

| Element | Printed nd / νd | Applied nd / νd | Applied minus printed Δnd / Δνd |
| --- | --- | --- | --- |
| L1, H-LaK53B | 1.755 / 52.33 | 1.75500 / 52.32 | 0 / −0.01 |
| L2, FCD1 | 1.497 / 81.60 | 1.49700 / 81.60 | 0 / 0 |
| L3, H-F4 | 1.62 / 36.35 | 1.62005 / 36.35 | +0.00005 / 0 |
| L4 and L6, H-ZLaF92 | 2 / 28.32 | 2.00330 / 28.32 | +0.00330 / 0 each |
| L5, H-ZF4AGT | 1.728 / 28.3 | 1.72825 / 28.32 | +0.00025 / +0.02 |
| L7, H-ZF7LAGT | 1.805 / 25.4 | 1.80518 / 25.46 | +0.00018 / +0.06 |

- L2 uses Hoya's FCD1 dispersion curve, with catalog-minus-stored Δnd = 0 and Δνd = +0.01. This is a spectral proxy, since the patent calls all glasses domestic and does not establish Hoya supply. No anomalous-dispersion designation or additional spectral-line indices were added.
- L5 and L7 changed from “Unmatched” to CDGM H-ZF4A and H-ZF7LA, retaining the patent's high-transmittance grade names H-ZF4AGT and H-ZF7LAGT in their descriptions. Catalog-minus-stored Δnd = 0 for both; Δνd = −0.001203 for L5 and −0.003744 for L7. Four elements remain “Unmatched”: L1, L3, L4 and L6, comprising three distinct named glasses without matching catalog dispersion curves.
- Changed the final air gap from the former 23.83 mm axial best-RMS plane to the 23.51 mm paraxial BFD. Set nominal aperture and the first stop to the printed f/5.6 instead of f/5.78. In the final edit, shortened `aperture.fStops` from [5.6, 8, 11, 16, 22] to [5.6, 8, 11, 16] and removed `maxFNumber: 22`; f/22 belonged to the unrelated AstrHori lens. The model now ends at the default f/16 without asserting a mechanical limit.
- Changed `focus.closeFocusM` from 1e9 to 1e15 and described infinity focus only because no finite-focus prescription is published. No focus states, radii, internal distances, stop position, clear radii or dimensional scale were altered today.
- Reworded the header and optical descriptions, rounded displayed calculated values, and retained the source citations. These descriptions distinguish the patent's stated values from the inferred stop, rims and image plane.

After all changes today, the model gives EFL 39.84 mm, f/5.60, BFD 23.51 mm, iris radius 3.226 mm, half-field 27.8° and total track 51.00 mm. The final wording and aperture-range edits leave these optical values unchanged.

## Remaining Questions

- Every inferred clear rim still needs a complete comparison with Fig. 1. The rear-surface intersection and the drawing's nonuniform air-gap scale prevent adopting its larger outlines directly.
- Dispersion curves for H-LaK53B, H-F4 and H-ZLaF92 are unavailable in the model's glass catalog. Their four elements retain an nd/νd approximation. FCD1's domestic material identity and supplier remain uncertain.
- The field-curvature discrepancy is unresolved. The initial MTF values do not establish the patent's full-field MTF claim for the current model, and no apochromatic performance is established.
- No product, production mount, marketing specifications, minimum focus distance, finite-focus spacings, mechanical stop range, diaphragm blade count or blade roundedness is documented. These product fields are left out. Physical iris dimensions also remain unconfirmed.
