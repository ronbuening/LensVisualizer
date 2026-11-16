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
