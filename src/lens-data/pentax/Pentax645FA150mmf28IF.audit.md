# Audit — PENTAX SMC FA 645 150mm f/2.8 [IF]

## 2026-11-16 fresh refinement
- Baseline: the infinity-only Embodiment 1 files delivered earlier the same day.
- Primary PDF reacquired and Table 1 plus original Figures 1/4 reviewed. No new factory identity claim; E2 not excluded.
- Added the two literal finite rows, published-position labels and audited source-magnification conjugates. Source distances solved to 0.01 mm and labeled derived; no invented literal object distances.
- Corrected inferred square L5 rims S9/S10 14.00→14.05 mm to pass the infinity marginal ray (S9 14.043112 mm). Other apertures unchanged. Finite clipping retained and disclosed, not forced away.
- Separated computed close endpoint 1.1977456064 m from marketed 1.2 m.
- Fresh prescription equality, full canonical/surface checks, finite conjugate audit, aperture/field audits, 22-state fixed-stop/relative-travel/image-plane checks, iris-in-air sweep, zero render trims, strict isolated TypeScript, and 21-field reference geometric MTF completed.
- Literal source image plane differs by 0.01 mm between infinity and finite rows; preserved. Infinity source BFD versus Gaussian residual unchanged at −0.059411 mm.
- Fresh full-app regression and browser QA are not claimed here; integration qualification remains explicit. No git commit, PR, publication or deployment.

## Inherited evidence
Original infinity-only delivery had validated seven geometric MTF field stations and source transcription. Those historical results are not passed off as new finite-focus validation. This revision's fresh checks supersede the original infinity-only limitation only for the two literal published finite states; interpolated states are not source-certified.

## 2026-11-16 — Deployment validation

Checked independently against US 6,313,955 B1 (page image of Table 1): all 14 surfaces, the stop gap and the three focus rows match; no aspheres. The model gives f 146.985 (147.00 printed), F2.9 and 13.2° half-field, and reproduces the Table 4 conditions. Ricoh Imaging lists the smc PENTAX-FA645 150mmF2.8[IF] as 7 elements in 7 groups, inner focus, 1.2 m, 0.15×; Pentax has published no construction diagram, so the product match rests on those figures.

- Assignee changed to the corpus form "Asahi Kogaku Kogyo Co., Ltd." (front page prints Asahi Kogaku Kogyo Kabushiki Kaisha).
- Closed 2026-11-16 (model re-authored from Embodiment 2, see below): Embodiment 1's printed back focus sits 0.059 mm behind paraxial focus and its closest row gives 1.198 m object to image. Embodiment 2 (also 7/7) closes on its printed back focus and on 1.200 m exactly, so it may be the better production match. No single-value misprint repairs Embodiment 1 uniquely; printed values are kept.
- Closed 2026-11-16 (wording pass, see below): name, key, specs, element types and glass labels are still in package wording. All seven glasses have exact d-line catalog rows (S-LAL18, S-PHM52, S-TIM39, S-LAH65, S-TIM22, S-TIH53, S-LAH60 or equivalents).

## 2026-11-16 — Embodiment 2 re-author and wording pass

Why: Embodiment 2 is consistent with itself and closes at the marketed 1.2 m. Its prescription reproduces the printed back focus (76.373 computed, 76.37 printed) and its closest state focuses at 1.19996 m object to image; Embodiment 1 misses its own back focus by 0.059 mm and closes at 1.198 m. The sections above this one describe the Embodiment 1 model and are kept as history.

Source re-read on the 300 dpi page image of Table 2 (PDF p. 17): 14 surfaces (r, d, Nd, ν), the stop after surface 6 (d6 = 9.94), and the three focus rows (stop gap 30.18 / 24.56 / 1.22; fB 76.37 / 81.99 / 105.33; m 0 / −0.025 / −0.145). Entered as printed. Table 2 prints f = 147.97; the prescription gives 146.970 and Table 4's values need 146.97, so `catalog.focalLengthMm.design` is 146.97 and the misprint is stated in the header and the analysis.

Patent vs model:

| Quantity | Patent | Model |
|---|---:|---:|
| f | 147.97 (read as 146.97) | 146.970 |
| FNO | 2.9 | 2.9 |
| fB, infinity | 76.37 | 76.373 paraxial |
| W at Y = 34.85 | 13.2° | 13.24° |
| Condition (1) f/fF | 0.605 | 0.605 |
| Condition (2) d/f | 0.273 | 0.273 |
| Condition (3) f/fGr3 | −0.611 | −0.611 |
| m, second state | −0.025 | −0.02498 |
| m, closest | −0.145 | −0.14534 |

Focus: keyframes 0, 0.1988467 and 1 carry the printed rows (`published: [1, 9]`). The two conjugates use first-surface distances solved from the prescription (5870.60 and 1035.76 mm), marked with `sourceMagnification`; the finite-conjugate audit reports both consistent. With only the three printed rows the paraxial defocus against the distance scale reached 0.24 mm mid-travel, so seven solved keyframes were added at 0.3–0.9 (stop gap 21.712, 18.888, 16.047, 13.177, 10.27, 7.316, 4.303; back focus = 106.55 − gap). Worst mid-travel defocus is now 0.008 mm. `focus.closeFocusM` is 1.2 (computed endpoint 1.19996 m). No `step` field.

Rims (mm), scaled from Fig. 6 using the 87.83 mm vertex-to-vertex length; the drawn stop opening scales to 17.5 against the engine's 17.42:

| Surfaces | Embodiment 1 file | Now | Wide-open axial ray at infinity |
|---|---:|---:|---:|
| 1 / 2 | 29 | 28.5 | 25.34 / 24.39 |
| 3 / 4 | 26 | 23.7 | 22.69 / 21.52 |
| 5 / 6 | 23 | 20.5 / 18.2 | 20.30 / 18.01 |
| 7 / 8 | 15 | 14.9 | 14.22 / 13.88 |
| 9 / 10 | 14.05 | 15.3 | 13.79 / 13.52 |
| 11 / 12 | 14 | 15.8 | 13.50 / 13.50 |
| 13 / 14 | 18 | 19.2 | 13.62 / 13.59 |

Surface 6 is set 0.3 mm above the drawn 17.9 so the axial beam clears. The surface audit reports no errors, the aperture audit reports no rim, trace or iris limit, the image-circle audit reports no undersized lens, and the clearance trace at Y = 34.85 shows no axial clip and no blocked chief ray. LSA at infinity: −0.041 mm at the pupil edge.

Glass labels (printed nd / νd → row, Δnd / Δνd): L1 S-LAL18 (−0.000003 / −0.02); L2 S-PHM52 (0 / −0.07); L3 and L6 S-TIM22 (−0.000001 / −0.01); L4 S-LAH65 (0 / −0.03); L5 S-TIM25 (0 / 0.00); L7 S-LAH60 (0 / −0.04). All were "Unmatched" before.

Wording: subtitle, specs, element types, roles and focal lengths, focus description, conjugate source strings, gap label, group brackets Gf / Gr, and a house header comment. The analysis was rewritten for Embodiment 2 without the process passages. No cemented pairs, so no `cemented` or `doublets` entries. `nominalFNumber` stays 2.9 (the patent's), with 2.8 as the marketed value.

- Open: rims are a simple scaling of Fig. 6, not the full figure procedure, so `sdSource` stays `"heuristic"`.
- Open: at the closest distance the wide-open axial beam (about 17.3 mm at surface 7) exceeds the rear group (14.9 mm), so the rear group limits the aperture there; the L4/L5 and L5/L6 air spaces close near 16 mm, so the rims cannot be raised to pass it. At infinity the rear group trims roughly three quarters of one side of the corner bundle. Both follow the drawn proportions and are left as they are.
- Open: the engine reports a 14.30° half-field for the 645 format, against the patent's 13.2° at Y = 34.85.
- Open: no maker construction diagram was found, so Embodiments 1 and 2 cannot be separated by drawing. A maker statement about special low-dispersion glass was seen only second-hand; no `apd` tag was added.

## 2026-11-16 — Semi-diameter pass against Fig. 6

Source: US 6,313,955 B1, PDF p. 5, Fig. 6 (Embodiment 2 at infinity), profiled at 300 dpi below the axis (the side without brackets). Scale 12.752 px/mm from the first to the last vertex (87.83 mm over 1120 px); the vertices of surfaces 4, 6, 7 and 13 and the stop tick fall within 2 px of their computed positions.

| Element | Stored sd | Fig. 6, lower / upper side | Result |
|---|---:|---:|---|
| L1 (1, 2) | 28.5 | 28.7 / 28.5 | kept |
| L2 (3, 4) | 23.7 | 23.8 / 23.8 | kept |
| L3 front (5) | 20.5 | 20.4 / 20.5 | kept |
| L3 rear (6) | 18.2 | curve ends near 17.9, flat edge to 20.4 | sd kept (axial ray 18.01); `rimExtensionSd: 20.5` added |
| L4 (7, 8) | 14.9 | 15.1 / 14.9 | kept |
| L5 (9, 10) | 15.3 | 15.6 / 15.3 | kept |
| L6 (11, 12) | 15.8 | 16.2 / 15.8 | kept |
| L7 (13, 14) | 19.2 | 19.6 / 19.2 | kept |

Every clear semi-diameter is within 3 % of the drawing, so none moved. The one shape difference was L3: the figure draws a square block whose top runs flat to 29.0 mm behind the first vertex, where the stored rims joined in a slant. The land on surface 6 ends at the same 29.0 mm. It adds no clipping: corner illumination is 39.8 % at 13.2° before and after, and no field changed (worst loss 0.0 points). The step order L4 < L5 < L6 < L7 and the touching rims of L4/L5 and L5/L6 match the drawing.

After the change the surface audit reports no errors, the aperture audit reports no rim limit at infinity, the image-circle and field-coverage audits are unchanged, and the engine still gives f 146.970, F2.9 and a 17.42 mm stop radius.

Metadata: `aperture.blades: 8` added (Ricoh Imaging product page: 8 diaphragm blades, minimum aperture F22, which the f-stop list already ends on). Ricoh Imaging writes the product name "smc PENTAX-FA645 150mmF2.8[IF]"; the display name is the same product in the catalog's style, as on the FA 645 120mm sibling. Mount `pentax-645` and format `645` are correct.

- Open: at the closest distance the wide-open axial ray needs about 17.3 mm at surface 7 and 16.8 / 16.4 mm at surfaces 8 / 9, against rims of 14.9 / 14.9 / 15.3 mm. Surfaces 8 and 9 touch at about 15.85 mm, so no rim can pass that beam, although the patent labels its closest-distance plots 1:3.3 (the full stop-limited beam). The rims stay as drawn; the rear group limits the aperture at close focus.
- Open: the figure's small bevel at L3's rear corner is not modelled.
- Open: `sdSource` stays `"heuristic"`.

## 2026-11-16 — Second review on the local site

Compared the local page (infinity, focus 0.2, 0.4, 0.5, 0.6, 0.8 and 1, the movement panel, and the inspector of all seven elements) with US 6,313,955 B1 Fig. 6 and Fig. 9, Table 2 and the Fig. 7, 8 and 10 plots. No rim, label, tag or data value changed; one sentence of the analysis was corrected.

Rims, re-measured on Fig. 6 at 300 dpi below the axis (12.75 px/mm over the 87.83 mm vertex length): L1 28.7, L2 23.8, L3 20.5, L4 15.1, L5 15.6, L6 16.2, L7 19.6 mm against stored 28.5, 23.7, 20.5, 14.9, 15.3, 15.8, 19.2. All within 3 %, step order L4 < L5 < L6 < L7 as drawn. L3's flat top runs from 21.6 to 29.0 mm behind the first vertex in the figure; the model's front rim and the end of the land sit at 21.45 and 29.02 mm. The page draws L3 as the figure does: flat top, short vertical rear face and a chamfer down to the curve end.

Lands and cuts: no face is below its baseline. The one land (`rimExtensionSd` 20.5 on surface 6) leaves the clear semi-diameter at 18.2, so it cannot clip in any state; corner light is 39.8 % at 13.2° with and without it (worst loss 0.0 points). Kept: the figure draws it and it costs nothing.

Movement: Table 2 prints the stop gap 30.18 → 24.56 → 1.22 and fB 76.37 → 81.99 → 105.33, so the rear group moves 28.96 mm toward the object while Gf and the stop stay fixed. Keyframes and both gap rows run infinity → near and are monotonic; every pair sums to 106.55. The seven solved positions focus an object at 1200 / t mm from the image to within 0.0003 mm paraxially. The slider reads 6.00 m / 24.53 at 0.2, 2.40 m / 16.05 at 0.5, 1.50 m / 7.32 at 0.8 and 1.20 m / 1.22 at 1, with no jump.

Closest state with a real object (1035.76 mm ahead of surface 1, exact meridional trace): the ray that fills the 17.42 mm stop needs 17.23 / 16.96 / 17.01 / 16.81 / 16.81 / 16.94 mm at surfaces 7–12 against rims of 14.9 / 14.9 / 15.3 / 15.3 / 15.8 / 15.8, so the clip is real and not a product of the parallel-beam trace (which gives 17.13 mm at surface 7). The rear group passes a stop radius of 15.04 mm: working f/3.58 against f/3.10 for the full stop. Meridional fans pass 86 % of the stop diameter on axis and 81 % at Y = 34.85. At −0.025× the full beam clears (14.88 mm at surface 7). The earlier note that the patent's 1:3.3 label is the full stop-limited value was wrong: the full stop gives 3.10 (3.09 paraxial), and 3.3 equals 2.9 × 1.145, as the 1:3.0 label of Fig. 8 equals 2.9 × 1.025. The analysis now says so. Fig. 9 draws the rear group at the same size, behind a wider stop opening, with L4/L5 and L5/L6 touching at the rim, so the rims stay.

Labels and tags: element types agree with the signs of R, inspector focal lengths equal the computed values (88.67, 196.05, −59.67, 114.07, −72.63, −240.69, 73.18), brackets Gf / Gr are the patent's names over surfaces 1–6 and 7–14, the stop sits between L3 and L4, no aspheres, no cemented pairs. The patent names no special glass, so no `apd` tag. The page shows f/2.9 with "marketed f/2.8" and both values in the spec line.

Glass and colour: all seven rows match the printed digits (largest Δνd 0.07, L2). S-TIM22 on both L3 and L6 follows the table, which prints 1.64769 / 33.8 twice. HOYA's TAF3 is 1.80420, so L4's printed 1.80400 points to the OHARA row. The patent prints no partial dispersion and no index beyond the d line. On-axis focus relative to paraxial d, model against the plots: infinity paraxial C +0.16 (plot about +0.15) and g +0.16 (about +0.11); at the pupil edge C +0.08 (about +0.09), g +0.34 (about +0.29), d −0.04 (about −0.03); closest paraxial C +0.23 (about +0.2), g 0.00 (about −0.03). All inside the reading error of about 0.05 mm.

Assignee: front page prints "Asahi Kogaku Kogyo Kabushiki Kaisha"; the file's "Asahi Kogaku Kogyo Co., Ltd." is the form 29 files use.

- Open: the two close-focus lines above stand (rear group limits the aperture at 1.2 m; L3's small chamfer is drawn by the land, not modelled as glass).
- Open: the engine half-field of 14.30° against the patent's 13.2° is unchanged.
