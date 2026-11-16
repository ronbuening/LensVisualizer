# Representative E6 derived-cam audit
Fresh isolated construction; old three-node and unified-HOLD checkpoints untouched.
Native base70600ffc; one data file plus this audit and analysis.
All exact source optics including six glasses/plate/stop and caps retained at three nodes, parity asserted.
G2-only screening:19of129rows unsolved within±2mm and nonmonotonic EFL. G3-only screening: all129solved but axial aperture failure3.8%; retained rejected evidence.
Selected two-translation solve preserves summed gap/track while matching piecewise actual source EFL and source focus residual. All129solved; largest nonlinear-equation residual8.1e−14. Source nodes are immutable, not retuned to nominal EFL or zero focus.
257point native geometry/aperture/focus/EFL/track and1028chief tests pass scoped gates. Fortyphysical-image-height MTFcells converge. Targeted strict TypeScript passes. Source optical data had no repair and caps no inflation.
Three published stations only;126calculated. d11hasthree sampled reversals, minimum.839594mm; bounded optical model not factorycam or mechanical-clearance proof.
Full application tests, integration, current-main and browserQA pending. No publishing/Drive/user delivery performed. (Closed 2026-11-15: the file is integrated; see the sections below.)

## 2026-11-15 — Deployment validation

Checked by an independent re-read of the page images of US 2003/0197949 A1 (Table 6 and its aspheric block on PDF page 30, the aspheric equation on page 27, Fig. 21 on page 12, the front page). Checked: all 13 surfaces (r, d, Nd, νd), the stop position (0.50 ahead of surface 5), the four conic values and twelve aspheric coefficients, the nine variable-gap values, the 2.00mm plate and fB = 0.00. No transcription mismatch. The model reproduces the printed f = 5.80 / 9.60 / 17.40 as 5.8017 / 9.6009 / 17.3936, half-fields 33.1 / 20.7 / 11.8° as 33.19 / 20.79 / 11.85° at 3.6mm image height, and conditions (1)–(3) of Table 10 (0.587, 0.955, 0.808) as 0.587, 0.954, 0.808. All six glasses and the plate coincide with OHARA d-line catalog values (S-LAH58, S-TIH53, S-BAL35 or L-BAL35, S-LAH60, S-TIH53, S-LAL7, S-BSL7).

Verdict: valid with notes. The link to the Optio S rests on the Nomura/Eguchi development paper (same inventor), whose Fig. 7 shows the same 2+3+1 layout with both faces of L2 and L3 aspheric and L1, L2 above index 1.8, and on the shared 5.8–17.4mm range and 6 elements / 5 groups. It is not the exact production design: the retail lens is f/2.6–4.8 and its third group is fixed during zoom, while Table 6 is f/2.7–5.3 and moves it. Embodiment 7 fits equally well. The camera uses a 1/2.5-type sensor; the nearest canonical format id is `1-2.55-inch-type`.

Changes:
- Calculated zoom rows (126): re-solved. Old: G2 and G3 were translated to hold a piecewise-linear total track, which made d11 swing 2.40 → 1.906 → 2.27 → 0.840 → 2.02 with three reversals. New: d11 is linear between the printed values, and d4, d9 are solved for the row focal length and the interpolated printed focus residual. The three printed rows are unchanged. This supersedes the cam description in the lines above. Result over 129 rows: EFL and d9 strictly increasing, d4 and d11 strictly decreasing, largest paraxial defocus 0.0122mm (the printed tele station), total track 34.64 → minimum 30.12 near 11.2mm → 31.99.
- Calculated-row focal lengths, labels and f-numbers rounded to six decimals (float noise removed).
- `catalog.lensMounts`: none → `["fixed-lens-camera"]`; `catalog.imageFormat`: none → `"1-2.55-inch-type"`.
- `catalog.focalLengthMm.marketing`: none → `[5.8, 17.4]`; `catalog.fNumber`: none → marketing 2.6, design 2.7.
- Header comment replaced by a source/inference block; `subtitle`, one `specs` chip and `focus.description` changed only where they named the old G2/G3 track (now G1/G2 solved, G3 linear).
- Rims: no change. The planned raises (surfaces 5/6 to 2.41, 7/8 to 2.18) were needed only by the old calculated rows, whose stop demand peaked mid-zoom; with the new rows the aperture audit finds no surface below the on-axis ray.
- Analysis: the compensator and consolidated-validation sections rewritten for the new rows.

After the change: EFL 5.8017mm at f/2.7 (wide), stop semi-diameter 2.268mm, total track 34.64mm. Surface audit: no errors. Aperture audit: 129 of 129 rows within 3% of the stated f-number, no rim, trace or iris limit. Image circle: not undersized. Field coverage: 129 of 129 rows at 100% (both on a copy with `visible: true`).

Open:
- Name, key, file name, subtitle, specs and analysis wording still carry package terms ("representative", "source", "caps", run-together numbers).
- Glass labels read "Unmatched"; the OHARA matches above are not yet applied.
- No 1/2.5-type format id exists (5.76 × 4.29mm); `1-2.55-inch-type` is a stand-in.
- Maker close-focus distance is not recorded.
- Semi-diameters are inferred and not yet compared with Fig. 21; surface 5 clears the wide-open axial ray with almost no margin (2.35 needed, 2.35 stored).
- The ray-intercept and MTF convergence samples in the analysis were not repeated for the new calculated rows.
- Whether another Eguchi filing holds the production design (fixed third group, f/2.6–4.8) was not checked.

## 2026-11-15 — Cleanup and wording pass

No optical value changed: radii, thicknesses, indices, aspheric terms, stop, semi-diameters and all zoom gaps are as left by the deployment validation. Engine numbers before and after are identical: EFL 5.8017mm, f/2.7, half-field 32.49°, stop semi-diameter 2.2678mm, and the same focal length, back focus and track at every one of the 129 stations. Surface audit: no errors. Aperture audit: 129 of 129 stations within 3% of the stated f-number, no rim, trace or iris limit. Field coverage: 129 of 129 stations at 99% or more.

Fields changed:
- `subtitle`: "Representative patent with derived G1/G2 compensator; published nodes labeled; not factory cam" → "US 2003/0197949 A1, Embodiment 6 — design f/2.7–5.3; correlated to the Optio S zoom".
- `specs`: four package lines → "6 ELEMENTS / 5 GROUPS", "2 DOUBLE-SIDED ASPHERICAL ELEMENTS", "MARKETED f/2.6–4.8; DESIGN f/2.7–5.3", "1/2.5-TYPE SENSOR".
- `focus.description`: plain infinity-only sentence; `catalog.closeFocusM.marketing` added as 0.4 (normal range, DPReview specification table; macro 0.18m and super-macro 0.06m modes are named in the analysis).
- Elements: `type` of L2 and L3 to the house "(2× Asph)" form; `focalLengthMm` and `role` added to all six; cemented id D1 → C1 on L4, L5 and the `doublets` entry.
- Aspheric surface labels 3, 4, 5, 6 → 3A, 4A, 5A, 6A, with the gap key (4 → 4A) and the G1/G2 bracket ends renamed to match.
- Zoom station labels: 129 "Source/Calculated infinity … mm" labels → "Wide" on the first and "Tele" on the last; the `published` flags on the three printed stations are unchanged.
- `rearPlates`: `glass` "S-BSL7" added; `source` reworded to name the patent table.
- Header comment: station wording only.

Glass labels (printed nd / νd → catalog row, Δnd / Δνd):
- L1 1.88300 / 40.8 → S-LAH58 (OHARA), −0.000003 / −0.03.
- L2 and L5 1.84666 / 23.8 → S-TIH53 (OHARA), 0 / −0.02.
- L3 1.58913 / 61.2 → L-BAL35 (OHARA), 0 / −0.07. The label resolves to the S-BAL35 dispersion row; the L- name is used because a double-sided aspheric element of this size is normally press-moulded.
- L4 1.83400 / 37.2 → S-LAH60 (OHARA), 0 / −0.04.
- L6 1.65160 / 58.5 → S-LAL7 (OHARA), −0.000003 / +0.05.
- Plate 1.51633 / 64.1 → S-BSL7, 0 / +0.04.
No `apd` tag: the maker publishes no special-dispersion element for this lens.

Analysis: rewritten as public text under the title "Pentax Optio S 5.8–17.4mm f/2.6–4.8". Removed the process sections (sample counts, convergence runs, pending checks) and the discovery-lead note; kept the patent identification, the evidence for and against the product link, the element table (now with glass and focal lengths), and the limits of the model; the intermediate stations are described in two sentences under "Zoom Motion".

Open:
- Semi-diameters are estimates and have not been compared with Fig. 21; surface 5A clears the wide-open axial ray with almost no margin (2.35 needed, 2.35 stored).
- L2 is a moulded glass asphere above index 1.8 according to the development paper; its actual moulding glass is not identified (S-TIH53 is the exact catalog match for the printed values).
- No 1/2.5-type format id exists (5.76 × 4.29mm); `1-2.55-inch-type` stands in.
- `catalog.closeFocusM.marketing` uses the normal-range 0.4m; decide whether the macro (0.18m) or super-macro (0.06m) limit should be the catalog value.
- No finite-focus state is modelled; the patent prints none.
- `aperture.fStops` is 2.7, 8, 11, 16 as delivered; the camera's real stop choices were not checked.
- Whether another Eguchi filing holds the production design (fixed third group, f/2.6–4.8) was not checked.
- The title line and first nine lines of this log keep the delivered package's wording as history.
