# Audit log — Sigma 56mm f/1.4 DC DN | Contemporary (C018)

## Initial build

- Selected JP 2020-030383 A, Numerical Example 1, a related design rather than an exact factory match. Example 7 kept as the alternative. The grant PDF was not inspected.
- The 19 patent surfaces map to 17 lens surfaces plus the 2 mm rear plate and 1 mm of back air. All 10 elements and the printed K and A4–A12 terms are kept.
- Printed first-surface object distance 425.0723 mm. Image planes and the 0.0001 mm gap rounding unchanged.
- Square rims inferred from Figure 1, default gap allowance, no stop override.
- The inferred 65-position focus path keeps both printed states. Distance labels near infinity are approximate, and no intermediate finite conjugate is claimed.
- An early `sony-e` mount id was invalid and was replaced with `sony-fe`. The mount list comes from Sigma's current product page and does not confirm identical prescriptions or camera stacks across mounts.
- The rounded infinity spacing focuses at about 15.7 km rather than at infinity. No focus pole lies in range, and the relative distance-label error near infinity is not uniform.

## 2026-10-31 — Deployment validation and fix pass

Source re-read against the page images of pp. 15–16: 52 surface and glass cells, 18 aspheric terms, the two variable gaps and BF at both states, and the rear plate, with no mismatches. Figure 1 measures as Example 1 at 10.17 px/mm, with element shapes, cementing and stop position agreeing with the file.

First-order, patent against model: EFL 53.95 / 53.948 mm, near EFL 52.16 / 52.160 mm, BF 1.0000 / 0.9998 mm, lens length 74.93 / 74.928 mm. A 14.31° chief ray lands at Y = 14.20 mm, and 12.52° does at the 500 mm state. Group focal lengths G1 43.50 / 43.503, G2 −37.32 / −37.325, G3 42.42 / 42.418, G3a 102.19 / 102.186, G3b 60.65 / 60.647 mm. Conditions 1, 2, 4, 5, 6, 8 and 9 reproduce. On-axis LSA at the full pupil is −0.015 mm, so no misprint is indicated. The object-to-image distance of 500.0002 mm is d0 plus lens length and stands for Sigma's 50 cm; `closeFocusM` keeps that value.

Stop: the engine gives 12.1357 mm from paraxial EPD = 36.95 mm. Working f/# is 1.533 at infinity and 1.697 at the 500 mm state, paraxial working 1.460 and 1.629, against 1.46 and 1.62 printed. A 12.808 mm stop gives 1.4604 and 1.6150; Figure 1 draws about 12.8 mm and Sigma's drawing about 12.6 mm. Under the one-stop-rule decisions of 2026-10-27 and 2026-10-20 no override was added and the design f-number is unchanged. The earlier 12.808 mm iris and real-ray F-number figures were replaced, and the analysis explains the difference.

Maker comparison: Sigma lists 10 elements in 6 groups, 50 cm, 1:7.4, 9 blades, F16, and seven mounts, all matching the file's ids. The drawing marks element 2 SLD and aspherical and element 10 aspherical, matching L12 and L35. Fitted to axial crossings and surface curves on the drawing, Example 1 has rim-sag RMS 0.27 mm and thickness RMS 0.70 mm, Example 7 0.37 and 0.66, Example 6 0.91 and 2.22. Example 1 and Example 7 tie. The drawing's L32 is about 1.5 mm thicker and its L11–L12 gap about 1.4 mm narrower than either, so the file stays a related design. Lens length plus flange is about 77.5 mm on all seven mounts, which Examples 4, 5 and 6 cannot fit.

Glass: resolved elements went from 0 to 10. Every pair meets the catalog rule (largest residual Δνd 0.01, FF5) and recurs in at least three of the seven examples. Printed PgF pins FDS18 (0.6546), M-FCD500 (0.5403) and TAC8 (0.5453, against S-LAL18 0.5445). M-FCD500 and M-TAF105 print the catalog index, so no moulding index drop applies. The rear plate stays on its Abbe estimate.

dPgF: moved to the engine's normal line rather than dropped, because the patent prints these PgF values and an authored value sets the g line. L11 0.038464 → 0.040842, L12 0.020924 → 0.016966, L14 −0.004694 → −0.006645. Paraxial g-line focus shift from the d line went from −0.035 to +0.007 mm with the relabel. `apd` was removed from L11 and L14, and L12 changed to `"inferred"` for Sigma's SLD mark.

Fields changed: header, `subtitle`, `specs`, element `label`, `role`, `glass`, `dPgF`, `apd`, `apdNote`, `cemented` and `doublets` text (D1, T1, D2 → C1, C2, C3), `focus.description`, conjugate and plate `source` strings. No R, d, nd, νd, sd, asphere, gap, f-number or mount value changed. The analysis MTF figures were recomputed at the 12.14 mm stop with the new glass labels.

Open: JP 7094550 B2 has not been compared with the application. Sigma's larger triplet rims are measured in the semi-diameter pass below; the file follows the patent figure.

## 2026-10-31 — Semi-diameter pass against the patent figure

Source: JP 2020-030383 A p. 26, Figure 1, a 674 × 402 px 1-bit raster at 300 dpi, and the same drawing on the front page, 816 × 497 px. Both show Example 1 at infinity. Second check: Sigma's construction drawing, 1316 × 682 px, scaled by its first-to-last vertex span of 890 px to 15.52 px/mm because it is a different prescription.

Scale: S1 to S17A spans 437 px over 57.3486 mm, 7.620 px/mm along the axis. S7 lands at 24.41 mm against 24.49 mm and S10 at 29.79 mm against 29.80 mm, so the drawing is the infinity state. Fits of the printed sag to S1, S2, S3A, S6, S10, S11, S12, S14 and S16 leave 0.21–0.33 px RMS and give 7.574 px/mm across the axis, 0.994 of the axial scale. The front-page copy is 9.224 px/mm along and 9.353 px/mm across, 1.014 of its axial scale. Both figures are anamorphic by these amounts, and every rim below is corrected for it. S17A is too weakly curved to fit.

| Rim or cap end | Stored | Figure 1 | Front page | Sigma | Result |
| --- | ---: | ---: | ---: | ---: | --- |
| S1–S2 edge | 19.6 | 19.77 | 19.78 | 19.3 | kept |
| S2 cap end | 19.6 | 18.42 | 18.47 | 18.6 | `sd` 18.4, `rimExtensionSd` 19.6 |
| S3A–S4A edge | 18.4 | 18.48 | 18.44 | 18.1 | kept |
| S5–S6 edge | 17.3 | 17.43 | 17.43 | 17.2 | kept |
| S7 tip | 17.3 | 17.36 | 17.48 | 15.6 | kept |
| Stop inner end | 12.14 engine | 12.87 | 12.83 | 12.6 | stop rule, not changed |
| S9–S10 edge | 12.6 | 12.58 | 12.54 | 12.6 | kept |
| S10 cap end | none | 11.02 | 11.07 | 11.0 | cut radius 11.08 |
| S11–S13 edge | 10.3 | 10.36 | 10.32 | 11.2 | kept |
| S14 edge | 10.3 | 10.36 | 10.32 | 12.3 | kept |
| S14 cap end | none | 8.91 | 9.03 | 9.3 | land omitted |
| S15–S17A edge | 11.9 | 12.01 | 12.03 | 12.5 / 11.8 | kept |

All values are mm. Only S2's `sd` changed. Every stored edge is within 0.18 mm, about 1 %, of the figure, the two figure copies agree to 0.05 mm on the flat edges, and the step order between elements matches.

Sigma against Figure 1: L31 and L32 are 0.9 mm larger, about 9 %, L33 1.9 mm larger, about 19 %, L34 0.5 mm larger and L14 1.8 mm smaller. L11 to L13 run 2 % smaller and L21 and L35 agree. The file keeps the figure, as the patent figure of the modeled example governs. Sigma draws the same three lands, which supports the readings below, and 10 elements in 6 groups, matching the file. Its marks fall on element 2 (SLD, aspherical) and element 10 (aspherical).

Lands, read as q = cap end / edge, ±(1 + q) / edge px for one native pixel:

| Surface | q, Figure 1 / front page | ± | Beam reach | Authored | Land |
| --- | ---: | ---: | ---: | --- | ---: |
| S10 | 0.877 / 0.883 | 0.020 | 10.42 | cut depth 3.25, radius 11.08 | 1.52 |
| S2 | 0.932 / 0.934 | 0.013 | 19.06 | `sd` 18.4, `rimExtensionSd` 19.6 | 1.20 |
| S14 | 0.860 / 0.876 | 0.024 | 10.13 | none | none |

S10's cut sits at q × `sd` and clears the beams by 0.66 mm. S2's drawn cap end is 0.64 mm inside the beams, which the rim-cut rule refuses, so S2 ends its cap at the drawn height as a real aperture and an extension draws the land. The reading is solid: two figure copies and Sigma's drawing agree within 0.2 mm, and the on-axis ray clears the new rim by 0.43 mm. Restoring S2's `sd` to 19.6 mm without the extension restores the light. S14's inferred cut would have to sit at 10.18 mm or beyond, a land under 0.12 mm whose q range reaches 1, so it is left out.

Clearance: on-axis ray 17.97 mm at S2 and 10.52 mm at S10 with the 12.81 mm real-ray stop, no clipped axial ray or blocked chief ray at either printed state. The image-circle check finds nothing undersized, the corner chief ray reaches 14.20 mm of 14.20 mm, and the aperture audit stays within 3 % of the stated f-number. The dense rim-cut probe, which now covers S10 only, traced 1,004,825 rays over 81 focus states with none clipped. Half-field 16.42°, stop 12.14 mm and F/1.46 are unchanged.

Illumination on the engine's full-pupil lattice, for this final rim set:

| State | Field | Transmitted, before / after | Relative illumination, before / after |
| --- | ---: | ---: | ---: |
| Infinity | 14.3° | 51.5 / 48.3 % | 41.3 / 39.0 % |
| 500 mm | 12.5° | 75.2 / 72.2 % | 52.8 / 51.1 % |

The largest loss at any field sample is the 3.2 points at the infinity corner, under the 5-point line, and all of it comes from S2: the S10 cut clips no traced ray. The analysis's corner value and MTF figures were recomputed for this rim set. At 40 lp/mm the changes are half field at infinity 0.30/0.88 → 0.32/0.88, edge at infinity 0.37/0.33 → 0.37/0.35, edge at 500 mm 0.19/0.14 → 0.20/0.15, photopic edge at 500 mm 0.21/0.03 → 0.22/0.03, and best-axial values at 500 mm 0.59 → 0.58 on axis and 0.01/0.02 → 0.01/0.01 at the edge. The 0.58 is not an S2 effect: the previous rims also gave 0.58 in this pass, and the photopic edge there gave 0.20 against the 0.21 quoted earlier. Removing the rear plate's glass label changes neither. Both gaps sit at the engine's 0.01 convergence tolerance, and their cause was not traced.

Overlaying the engine outline on Figure 1 at these scales puts every curve within about a pixel, and L21 and L11 now match the figure's edges. Live pages at infinity and 500 mm show both lands.

Declined: S14's drawn land. S14 `sd` 9.0 with `rimExtensionSd` 10.3 passes the validator and matches the figure, but from this rim set it takes the corner from 48.3 % to 40.0 % at infinity and from 72.2 % to 60.9 % at 500 mm, 8–11 points against the 5-point line. The file keeps S14 at `sd` 10.3, so its rear corner stands 0.7 mm past the figure's land.

Limitation: Figure 1 ends L13 at a flat step 2.8 mm tall at S6, where L14 continues as free glass to its 17.4 mm tip. The model carries S6 as one junction to the tip, because lands cannot go on cemented surfaces.

## 2026-10-31 — Second review: diagram, labels and movement

Compared: the local page at infinity and at the 500 mm state, both slider and patent-position modes, the focus overlay, and the element inspectors, against Figure 1 at native resolution, the front-page copy, Sigma's construction drawing, the tables on pp. 15–16, and Figures 2–5. Rims were re-measured from the raw 1-bit rasters. Axis rows 227 and 280.5, and the crossings give 7.620 px/mm along the axis, S1 to S17A. Figure 1 is the infinity state: S10 reads 29.79 mm against 29.80 mm. Lower-side edges, clear of the group brackets: L11 19.80, L12 18.48, L13 17.43, triplet 10.30, final doublet 12.01 mm. Each stored edge stands within 0.2 mm, so those rims are kept.

Movement, from p. 15 ¶0074 and the p. 16 table: G2 alone moves, and only toward the image between infinity and 500 mm. d8 rises from 2.7902 to 8.3091 mm, +5.5189 mm, and d10 falls from 11.3404 to 5.8216 mm, −5.5188 mm. Figure 1's arrow under G2 points to the image. In the file, the first column is infinity, the last is the printed 500 mm state, all 65 positions are monotonic, and d8 + d10 stays between 14.1306 and 14.1307 mm. The overlay shows G1 and G3 fixed, G2 moving right, and 5.52 mm of travel. The slider reads ∞ to 50 cm, 1.00 m at mid travel and 51 cm just short of the end, and patent-position mode offers ∞ and 50 cm. The printed heading 撮影距離500mm is object to image: d0 425.0723 mm plus 74.9279 mm gives 500.0002 mm. Nothing needed changing.

New evidence on S14. Figures 4 and 5 (pp. 26–27) are transverse fans plotted against pupil position, and their fans shorten with field. Each fan end is a ray the design vignettes. Tracing the printed prescription at each digitised end, with the plots' +x on the image-height side, the ends fall on constant heights at a single surface at each state: 18.46–18.58 mm and 18.39–18.48 mm on S1, 9.35–9.36 mm and 9.33–9.36 mm on S11, and 8.89–8.93 mm and 8.90–8.92 mm on S14. Three clear radii, S1 18.45, S11 9.35 and S14 8.90 mm, with the 12.81 mm stop, then reproduce the plots:

| Image height | Figure 4, low / high / sagittal | Traced | Figure 5, low / high / sagittal | Traced |
| --- | ---: | ---: | ---: | ---: |
| 100 % | −0.713 / 0.175 / 0.642 | −0.708 / 0.178 / 0.634 | −0.778 / 0.320 / 0.875 | −0.782 / 0.320 / 0.870 |
| 90 % | −0.742 / 0.291 / 0.767 | −0.736 / 0.292 / 0.762 | −0.807 / 0.436 / 0.933 | −0.806 / 0.434 / 0.934 |
| 70 % | −0.800 / 0.516 / 0.875 | −0.794 / 0.514 / 0.872 | −0.858 / 0.655 / 1.000 | −0.858 / 0.656 / stop |
| 50 % | −0.851 / 0.669 / 0.942 | −0.852 / 0.668 / 0.938 | −0.909 / 0.800 / 1.000 | −0.910 / 0.800 / stop |
| 30 % | −0.916 / 0.807 / 0.975 | −0.910 / 0.808 / 0.974 | −0.960 / 0.931 / 1.000 | −0.964 / 0.930 / stop |

Pupil values are normalised to the 0 % fan. The meridional ends fit to 0.004 at infinity and 0.002 at 500 mm RMS, and the sagittal ends were not used in the fit. S14 is the land the semi-diameter pass declined. Its drawn cap end reads 8.91–8.98 mm on Figure 1, 8.93–9.03 mm on the front page and about 9.4 mm on Sigma's drawing of a different prescription, so the figure reading is solid and the land is a real design aperture. The 8–11 point cost recorded above moves the corner toward the patent's own value, so the decline is reversed.

| Surface | Before | After | Evidence |
| --- | --- | --- | --- |
| S14 | `sd` 10.3 | `sd` 8.9, `rimExtensionSd` 10.3 | Fan ends 8.89–8.93 mm at both states, Figure 1 cap end and land |

No other value changed. S1 and S11 keep their rims because Figure 1 draws no land at 18.45 or 9.35 mm. S2's 18.4 mm cap stays: the fans fit S1 at 18.45 mm, equally S2 at about 17.9 mm, so the first pass's aperture is not too tight. Against the printed fan ends, the meridional RMS error falls from 0.092 to 0.041 at infinity and from 0.104 to 0.032 at 500 mm.

Illumination on the engine's full-pupil lattice:

| State | Field | Transmitted, before / after | Relative illumination, before / after | All three fan radii |
| --- | ---: | ---: | ---: | ---: |
| Infinity | 14.3° | 48.3 / 38.8 % | 39.0 / 31.2 % | 36.0 / 29.1 % |
| 500 mm | 12.5° | 72.2 / 59.2 % | 51.1 / 40.9 % | 55.8 / 38.8 % |

Both corners move past the 5-point line, by 9.5 and 13.0 points. The reading is solid, as set out above. `sd` 10.3 with no extension restores 48.3 % and 72.2 %. The largest change is at the corners, and fields out to 4.8° at infinity and 6.3° at 500 mm do not change.

On-axis clearance at S14: the marginal ray reaches 7.69 mm at infinity and 6.93 mm at 500 mm with the 12.81 mm stop, 7.33 and 6.60 mm with the 12.14 mm stop. The corner chief ray reaches 7.58 and 6.89 mm. The validator passes, the image-circle check finds nothing undersized, the chief ray reaches 14.20 of 14.20 mm, the aperture audit stays within 3 %, and the S10 rim-cut probe traced 969,440 rays with none clipped. F/1.46 and the 12.14 mm stop are unchanged. Engine half-field falls from 16.42° to 16.12°, above the printed 14.31°, because S14 now ranks next after S17A among the field limits.

MTF at 40 lp/mm, S/T, recomputed for this rim set: edge at infinity 0.37/0.35 → 0.41/0.43, half field at 500 mm 0.07/0.31 → 0.07/0.33, edge at 500 mm 0.20/0.15 → 0.24/0.15, photopic edge at 500 mm 0.22/0.03 → 0.27/0.03, best-axial edge at 500 mm 0.01/0.01 → 0.01/0.03. Axis and the infinity half-field values are unchanged. The edge rises because the land removes the worst rays of the fan.

Aberrations, model against the plots. Infinity, Figure 2: ΔS/ΔM at full field +0.012/−0.079 mm against about +0.015/−0.073, at 75 % −0.063/−0.024 against −0.063/−0.024, distortion +3.20 % against about +3.2 %. 500 mm, Figure 3: full field +0.033/+0.069 against about +0.034/+0.073, about −0.10 mm at 70 % on both, distortion +6.13 % against about +6.0 %. Transverse fans agree too: at the infinity corner +0.0146 and −0.0034 mm at the fan ends against about +0.015 and −0.004 in Figure 4, and at the 500 mm corner −0.0373 and +0.0257 mm against about −0.037 and +0.026 in Figure 5. No asphere sign slip is indicated. The 500 mm astigmatism came from a finite-object trace of the printed table, because the engine's field-curvature helper launches collimated rays there.

Labels found correct. Element designations are the patent's L11–L35, and `name` equals `diagramLabel` on all ten. `type` agrees with the signs of R and with ¶0073–¶0075. `focalLengthMm` is present on all ten. The inspector shows Element 2 as APD (inferred) and ASPH ×2, Element 10 as doublet C3 and ASPH, Element 8 as triplet C2, and Element 5 as the focusing element. `A` suffixes sit on S3, S4 and S17 only, matching the printed asterisks. The stop sits between L14 and L21 at surface 8. Group brackets G1 S1–S7, G2 S9–S10 and G3 S11–S17 match the p. 16 group table. C1, C2 and C3 cover the three cemented components and do not collide with d8 or d10. No cement layer is tagged. ¶0052 treats anomalous dispersion only as an average over G1's positive elements, so no element earns `apd: "patent"`. Sigma's drawing has one blue SLD fill, on element 2, and two red aspherical outlines, on elements 2 and 10, which matches the single `"inferred"` tag on L12 and the specs line. Sigma's element and group counts match: 10 in 6.

Open limitations: L31 repeats L13's step at cemented S12, a stroke about 0.9 mm tall where L32 runs on to its rim, and neither can be modelled. Figure 1 draws nothing at S1's and S11's fan radii, so the corner stays about 3 points brighter than those radii give, on the engine's lattice. The stop stays at 12.14 mm under the one-stop rule, so the fan comparison above is a statement about the patent's apertures, not the model's working f-number.
