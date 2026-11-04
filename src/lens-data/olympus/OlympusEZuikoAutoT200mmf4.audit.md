# Audit Log — OLYMPUS E.ZUIKO AUTO-T 200mm f/4

Patent: US 3,838,911, Embodiment 2

## Package as received

- Whole US 3,838,911 Embodiment 2, matched to the production lens by specification; not a confirmed factory prescription.
- Every length scaled ×2 from the patent's f = 100; image plane at the paraxial focus, 169.425 mm from the front vertex.
- Semi-diameters and the stop position were set from Fig. 1 and the f/4 rule before any tracing and were not tuned afterwards.
- The package author's MTF checks converged at the paraxial plane without a focus shift; stop-position and ±5% semi-diameter variants were traced separately and not used to choose the model.
- Source files, figure crops and hashes stayed with the delivery, outside the repo. Model SHA256 `6f75c14b5b0a04f0e8f43d5d7e7d8a28cba8c13360e102a2c554ad386bf73c50` (as received).

## 2026-11-03 — Deployment validation and cleanup

- Re-read the Embodiment 2 table and claim 2 from 300 dpi page images of `patents/US3838911.pdf` (PDF pages 4–5). Checked 9 radii, 8 thicknesses and 5 index/Abbe pairs at ×2: no mismatches. The patent prints no aspheres, no variable gaps and no back focus.
- First-order, patent vs model at f = 100: f 100 vs 100.025 (200.049 at ×2), F/4 vs f/4.000, 2ω = 12° vs 6° half-field, ζ = 0.85 vs 0.847. Paraxial back focus 31.993 (63.985 at ×2).
- An independent trace gives LSA −0.003 at full pupil, field-curve offsets ≤ 0.04 and distortion +1.36% at 6° (f = 100 units), in line with Figs. 3a–3d. The distortion barely moves with the stop between 0.5 and 1.0 of d5. The stop mark in Fig. 1 reads at about 0.74 of d5.
- Maker comparison: MIR lists 5 elements / 4 groups, 12°, f/4–32, 2.5 m, 55 mm filter and straight-helicoid focus, with the same construction for the E-Zuiko and later Zuiko (MC) Auto-T. The dealer-binder section (pacificrimcamera 00358, p. 14) was cited by the package and not re-viewed here. Embodiment 1 (F/3.5, 18°) does not fit; it is the corpus's 135mm f/3.5. No other corpus file models this example; the F.Zuiko 200mm f/5 is US 3,804,494.
- All five n/ν pairs equal OHARA catalog glasses at d: S-BSM16, S-FSL5, S-TIH14, S-LAL12, S-TIH11.
- Data step: `glass` labels set to those catalog equivalents; `closeFocusM` 1e15 → 2.5; surface 9 `d` moved into `gaps` as BF [63.98538070550599, 83.56], a derived unit-focus state (2500.00 mm object to image, β −0.0978), not published; `groups` G1–G4 added. `doublets` CD1 and `aperture` (f/4–32) unchanged.
- Wording step: header comment, `subtitle`, `specs`, element `role` and `indexReferenceNote` text, analysis prose and this log rewritten in plain terms; analysis now names the catalog glasses, describes the derived 2.5 m state and drops test-run counts.
- Surface audit OK; aperture audit within 3% of f/4; no axial clipping at Y = 21.0 mm at either focus; corner light 83.5% at 6°.
- Open: none for the optics.

## 2026-11-03 — Semi-diameter pass against the patent figure

- Sources: `patents/US3838911.pdf`, the Fig. 1 copies on PDF page 1 (front page) and page 2 (sheet 1), 300 dpi native scan; and the Olympus dealer-binder section (object at the right), 800 × 600 px.
- The patent has one section drawing. Fig. 1 is captioned for "the embodiments", but its vertex spacing is Embodiment 1's: at 12.06 px per f = 100 unit the eight front-page spans read 52, 55.5, 60, 26, 180, 24, 172 and 30 px against 53, 53, 63, 21, 180, 22, 177 and 30 px for Embodiment 1. Embodiment 2 would need d1 = 36 px, d5 = 219 px and d7 = 153 px. Fig. 1 therefore gives shape and outline ratios only, not Embodiment 2 heights.
- The maker's section is drawn to Embodiment 2's scale. First to last vertex is 535 px for 105.44 mm, 0.1971 mm/px. The d5/d7 ratio is 1.415 drawn against 1.434 for Embodiment 2 and 1.014 for Embodiment 1. Every vertex lies within 1.3 mm of the prescription. Arc fits of r1, r3, r6 and r8 give a vertical scale of 0.195–0.205 mm/px, so the drawing is not anamorphic; r5, r7 and r9 are drawn somewhat flatter than printed. It draws L2 6.3 mm thick against 9.68 mm and L5 3.0 mm against 4.24 mm.
- Element-centre axis 317.5 px; the drawn axis line sits 2 px lower. Readings are taken as half the full drawn height.

| Face | Before | After | Maker section, mm | Fig. 1 ratio to L1 | Evidence and decision |
| ---- | -----: | ----: | ----------------: | -----------------: | --------------------- |
| 1, 2 | 27.5 | 27.5 | 27.6 | 1.00 | Agrees. Kept. Square rim in both drawings. |
| 3, 4 | 24.2 | 24.2 | 24.0 | 0.88 | Agrees. Kept. The cemented line runs the full doublet height. |
| 5 | 24.2 | 22.6 | 22.4 (curve end); flat 24.0 | q = 0.85 | Both drawings end the rear curve at a chamfer below the doublet's flat top. Maker q = 0.932 ± 0.016 of the edge, × 24.2. |
| 6 | 14.9 | 14.9 | 14.0 | 0.57 (15.6 mm) | The two readings bracket the stored value, 6% from each. Kept. |
| 7 | 14.9 | 13.2 | 12.5 (curve end); flat 14.0 | q = 0.85 | Same image-side chamfer. Maker q = 0.888 ± 0.027, × 14.9. |
| 8, 9 | 17.1 | 17.1 | 17.4 | 0.63 | Agrees within 2%. Kept. Near-square rim. |

- Fig. 1 chamfers read q = 0.84–0.87 on both elements at 165 and 106 px edge radii, deeper than the maker's. That reading belongs to Embodiment 1's glass, so the values follow the maker's q. The diagram draws the shorter rear faces as a sloped top edge, which stands in for the drawn flat-plus-bevel corner.
- Clearance at f/4, axial marginal heights at faces 5 and 7: 19.78 and 10.58 mm, unchanged between infinity and 2.5 m. No axial clip and no blocked chief ray at Y = 21.3 mm in either state. The surface validator passes and the aperture check stays within 3% of f/4.
- Engine half-field 6.0°, f/4.000, stop radius 13.37 mm and field coverage (98%, 21.31 of 21.65 mm) are unchanged.
- Corner light is unchanged against the starting rims. At infinity it is 96.8 / 92.9 / 88.2 / 83.5% at 3 / 4 / 5 / 6°. At 2.5 m it is 98.1 / 94.9 / 91.3 / 87.4% at 2.6 / 3.5 / 4.3 / 5.2°. Restoring either face wins back 0.0 points, and both cuts cost nothing.
- The binder lists a 55 mm filter. Faces 1–2 at 27.5 mm meet that bound with no margin. Pulling them to 26.5 mm would cost 3.4 points at 6°, and the to-scale maker section draws 27.6 mm, so they stay.
- Live page checked at infinity and 2.5 m: five elements in the drawn order, with the L3 and L4 image-side rims stepped down as in both drawings.
- Limitations: no patent drawing of Embodiment 2 exists, and the patent prints no ray fans. The maker's section is a production catalog drawing, matched to Embodiment 2 by spacing, not confirmed as the same prescription.

## 2026-11-03 — Glass labels revisited

L2 now traces its printed 1.48749/69.8 as `Unmatched`: S-FSL5 matches nd but is 0.44 off in νd, enough to move the colour correction of a 200 mm telephoto. The other four elements keep their OHARA catalog equivalents.

## 2026-11-04 — Second review: diagram, labels and movement

- Compared the local page at infinity and 2.5 m, the focus-movement overlay and all five element inspectors with Fig. 1 of `patents/US3838911.pdf` (PDF page 2, shapes and ratios only, since it is drawn to Embodiment 1's spacing) and with the Olympus dealer-binder section (object at the right, to Embodiment 2's scale). The binder lists 5 elements / 4 groups and marks no special glass or aspheric surface.
- Fresh column scans of the binder section, 0.1971 mm/px from the 535 px first-to-last vertex span: L1 27.6, doublet flat top 24.0, L3 rear curve end 22.7 (corner rows 203.5 and 433.5 px), L4 flat top 14.0, L4 rear curve end 12.5, L5 17.4 mm. The model's 27.5 / 24.2 / 22.6 / 14.9 / 13.2 / 17.1 stays within 6% of each reading, and the L4 pair keeps the drawn 0.89 step from front to rear.
- The only visible difference is the image-side corner of L3 and L4: both drawings show a flat top and a short 45° chamfer, and the renderer joins the two rims with one sloped edge. A `rimExtensionSd` land would draw a vertical step, which neither drawing shows, so no land is added.

| Face | Kind | Figure reading, mm | Baseline | Final | Light cost at 6°, points | Verdict |
| ---- | ---- | -----------------: | -------: | ----: | -----------------------: | ------- |
| 5 | cut | 22.7 (maker curve end) | 24.2 | 22.6 | 0.0 | keep: slight |
| 7 | cut | 12.5 (maker curve end) | 14.9 | 13.2 | 0.0 | keep: slight |

- No lands. The rim cost tool's worst loss against the baseline rims is 0.0 points at every field (83.5% at 6° for both). With a real object 2.5 m from the image plane, the corner at 21.3 mm image height (5.3° at the front vertex) keeps 92.4% of the axial light with the cut rims and with the baseline rims alike.
- No `sd` value changed. The surface validator passes, the image-circle and field-coverage checks are unchanged (6.0°, 21.31 of 21.65 mm), and the real-ray trace shows no axial clip or blocked chief ray at 6° in either focus state. Engine half-field 6.0°, f/4.000 and stop radius 13.37 mm are unchanged.
- Labels: the patent names no elements, so L1–L5 follow the sequence and the diagram shows the ids. G1–G4 are the patent's first to fourth lenses, and CD1 brackets faces 3–5. The stop sits in d5 between the doublet and the negative meniscus, as the patent text places it. Every `type` agrees with the signs of R, `role` text holds, there are no aspheres, and no element carries an `apd` tag; the patent names no special glass.
- Movement: focus keyframe 0 is infinity (BF 63.99 mm) and the last is 2.5 m (BF 83.56 mm, 2500.00 mm object to image, β −0.098). The overlay moves all four groups 19.57 mm toward the object together, and the slider's far end reads 2.50 m. The binder's 36 × 24 cm minimum field (1:10) agrees.
- Close-range correction: the binder copy says an automatic correction mechanism compensates for aberrations at close focusing distances. The patent prints one fixed prescription, with no variable spacing and no text on close range, and the MIR lens notes list a straight helicoid. Olympus used similar wording for the floating group of its 50mm f/3.5 Auto-Macro. No readable source shows a floating group for this lens, so the unit-focus model stays.
- Colour: Fig. 3a plots d and g. Read at the plot's own axis and ticks (177 px per unit at f = 100), the g focus lies 0.071 short of d near the axis and 0.127 beyond the d curve at full aperture, ±0.009. The model gives −0.089 and +0.115 with L2 at the printed 1.48749/69.8, and −0.080 and +0.125 with the S-FSL5 curve. The d curve matches: zonal −0.02 at 0.7 of the pupil, −0.003 at the rim.
- Fig. 3c draws both field curves within 0 to +0.06 of the image plane at 6°; the model gives tangential +0.024 and sagittal −0.032. Fig. 3d plots +1.21% distortion at 6°; the model gives +1.36%, and moving the stop between 0.5 and 1.0 of d5 changes it by less than 0.01%.
- Limitations: Fig. 1 is not a drawing of Embodiment 2, and the binder section is a catalog drawing matched to Embodiment 2 by spacing. The patent prints no C or F curves, so only the g line can test the L2 dispersion.

## 2026-11-04 — L2 glass restored to S-FSL5

The second review read Fig. 3a's g-line curve relative to d: −0.071 near the axis and +0.127 at the rim (f = 100, reading error ±0.009). The model gives −0.089 / +0.115 with L2 at its printed 1.48749/69.8 and −0.080 / +0.125 with S-FSL5's catalog curve. The patent's own plot favours the S-FSL5 dispersion, so L2 returns to S-FSL5 as a catalog equivalent, reversing the earlier revert made on the νd difference alone.
