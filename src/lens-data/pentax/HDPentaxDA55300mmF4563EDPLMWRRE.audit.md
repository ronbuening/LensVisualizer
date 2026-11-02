# PENTAX HD DA 55-300mm f/4.5-6.3 ED PLM WR RE: audit log

The source package carried no audit log; this file starts at deployment validation.

## 2026-10-29 — Deployment validation and cleanup

- Source: US 2017/0329112 A1 (Tomoya Koga, Ricoh Imaging Company, Ltd.), application 15/432,108 filed 2017-02-14,
  priority JP 2016-098112 (2016-05-16) and JP 2017-020845 (2017-02-08), published 2017-11-16. Numerical Embodiment 1:
  Table 1 on PDF p. 58, Tables 2–3 and ¶0196–0199 on p. 59, Fig. 1 on the front page and sheet 1, Fig. 67 on sheet 45.
  The PDF has no text layer; the tables were read from page images at 100 dpi. Bibliographic fields in the data file
  match the front page, and the assignee spelling matches the corpus.
- Transcription: 25 R plus the flat stop, 21 fixed d, 14 nd/νd pairs and the four variable gaps d5 / d10 / d22 / fB at
  the three printed focal lengths were checked; zero mismatches. The patent has no aspheric surfaces (¶0188). The
  printed rows sit unchanged at zoom nodes 0, 20 and 40. Table 3 group focal lengths are reproduced within 0.002 %
  (G1 166.476 against 166.473 printed; G2 −33.874, G3 35.380, G3F 50.571, G3R 45.787, G4 −39.835 mm), and the element
  focal lengths of L12 / L41 / L42 match ¶0196 / ¶0198 / ¶0199 (−82.849 / 77.012 / −25.572 mm).
- First order, patent vs model: f 56.500 / 132.085 / 291.188 vs EFL 56.502 / 132.094 / 291.219 mm (≤ 0.011 %); fB
  52.474 / 57.967 / 81.814 vs paraxial 52.476 / 57.973 / 81.828 mm; L 163.502 / 201.850 / 233.845 vs 163.502 /
  201.850 / 233.846 mm (the printed tele components sum to 233.846); F 4.60 / 5.14 / 6.48 vs 4.600 / 5.135 / 6.467;
  half-field 14.5° at wide, as printed.
- Zoom cam: d5, d10 and total length are linear between printed rows and G4 is placed for paraxial infinity focus.
  Every node is in focus (defocus 0.0000 mm) and EFL rises monotonically. The only reversals are d22 and the G2
  position at the printed 132.085 mm station, which the printed values require; Fig. 67 draws G2 moving imageward
  then objectward on a smooth curve, so the sharp turn at 132.085 mm is an interpolation simplification. G3F and G3R
  move as one unit, as in Fig. 67.
- Focus: the patent tabulates infinity only and says G4 moves toward the image. The close rows solve G4 alone for
  Ricoh's 0.95 m object-to-image distance (949.5–950.0 mm reached); travel 0.905 / 4.037 / 11.818 mm and
  magnification 0.068 / 0.143 / 0.296 at the printed stations, against Ricoh's 0.30×. d22 + fB is constant across
  focus.
- Clearances: `audit:surface` OK, `audit:image-circle` 0 undersized, `audit:field-coverage` 41 / 41 stations at 100 %
  of the 14.24 mm image height. `clearap.mjs` at Y 14.24 (infinity and close focus) blocks no chief ray. It flags S11 /
  S12 at tele (marginal 10.58 / 10.60 mm against sd 10.5) with its own f/6.48 iris of 9.70 mm; with the engine's stop
  of about 9.45 mm they clear at 10.10 / 10.15 mm, so the rims were left as read from Fig. 1 (G3F about 10.5–10.6 mm).
- Product match: Ricoh lists 14 elements / 11 groups, one ED element, rear focus driven by a PLM on a lead screw, a
  retracting barrel (89 mm), 0.95 m, 0.30×, 29°–5.4°, nine blades, 58 mm filter, KAF4, announced 2016-06-09. The
  construction diagram (ricoh-imaging.co.jp/japan/products/lens/img/img-hdpentax-da-55-300_re_04_en.jpg) matches
  Fig. 1 element for element and marks the eighth element, L32F (1.49700 / 81.55), as ED. The patent text also
  describes a retracted, minimum-length state. Embodiments 2, 3, 5, 6 and 8 share the 14 / 11 layout; 4, 7 and 9–11
  do not. Embodiment 1 matches the marketed 5.4° tele field; Embodiment 2 (F4.50–6.27) is closer to the marketed
  aperture, and the diagram cannot resolve L33R's rear curvature that separates them, so Embodiment 1 is kept.
- Changes in this pass (data file only; no R, d, nd, νd, sd, gap or patent field touched): header comment rewritten
  in plain terms with all facts kept; `subtitle` to "US 2017/0329112 A1, Numerical Embodiment 1 — production
  correlation"; `specs` to "14 ELEMENTS / 11 GROUPS", "DESIGN f = 56.50–291.19 mm", "DESIGN F/4.60–6.48", "ALL
  SPHERICAL", "1 ED ELEMENT"; element labels to "Element 1"–"Element 14" with a specific `role` each; glass strings
  to the form "S-BSL7 (OHARA catalog equivalent; production supplier unspecified)", every element still resolving to
  the same catalog row (S-BSL7, S-LAH51, S-FSL5, S-LAH52, S-TIH53, S-LAH65V, S-LAL18, S-FPL51, NBFD15 ×2, S-BAL35,
  S-BAL42, S-TIH11, S-LAL14); L32F `apd: "inferred"` with a note citing Ricoh's ED marking; L12 `apdNote` reworded
  (dPgF −0.0063556 unchanged); station labels reduced to "Wide" and "Tele"; interior `nominalFNumber` values rounded to
  0.01 (printed 4.6 / 5.14 / 6.48 unchanged); focus description rewritten.
- Re-check after the changes: `built.mjs` loads with EFL 56.5020, F/4.6 and stop 9.463 mm at wide, as before;
  `probe.mjs` output is identical. The rounding moves interior stop radii by at most 0.010 mm, so they now step
  unevenly between 9.444 and 9.483 mm instead of varying smoothly. Glass resolution is identical before and after.
  Prettier reports the data and audit files formatted.
- Open: production identity rests on construction, specification and timing matches; Embodiment 2 remains a plausible
  alternative. Open: the intermediate zoom cam and all close-focus spacings are derived, not Ricoh's.

## 2026-10-29 — Semi-diameter pass against the patent figure

- Source: Fig. 1 on sheet 1 (PDF p. 2), Numerical Embodiment 1 at the short focal-length extremity, infinity focus.
  The sheet is a 2560 × 3300 px bilevel scan, measured at native resolution. The optical axis runs vertically, object
  at the bottom, and is tilted by about 0.15° (5 px over 2300 px).
- Scale: ink crossings beside the axis fall on every vertex of the wide prescription, including d22 = 3.01 mm at the
  drawn G4 position. S1 to S26 is 111.028 mm over 1891 px, 0.05871 mm/px; S1 to S11 gives 0.05870 (64.862 mm / 1105
  px) and S11 to S26 0.05873 (46.166 mm / 786 px). The radial scale is the same: the drawn rim ends of S1, S4 and
  S17–S26 sit where the prescription sags put them at the measured heights (S4: 6.25 mm sag at 22.0 mm, 106 px
  predicted and drawn; S26: 1.24 mm at 8.5 mm, 21 px predicted, 20 drawn), so the drawing is not anamorphic.
- Method: `figprofile.mjs` on both sides of the axis with windows kept inside the group brackets (left) and short of
  the leader ticks (right); each rim is half the full width, which cancels the axis tilt. `audit:patent-figure` was
  run on two crops and read the G3 and G2 brackets (rows 1.3–1.8× high), so it was not used.

| Surfaces   | Element   | Before | Fig. 1, left + right px → mm | After | Evidence                                                    |
| ---------- | --------- | -----: | ---------------------------- | ----: | ----------------------------------------------------------- |
| 1, 2       | L11       |   22.7 | 388 + 384 → 22.66            |  22.7 | retained; both faces reach the square-cut rim               |
| 3, 4, 5    | L12/L13   |   22.0 | 377.5 + 373 → 22.03          |  22.0 | retained                                                    |
| 6, 7, 8    | L21/L22   |   10.2 | 173 + 173 → 10.16            |  10.2 | retained                                                    |
| 9, 10      | L23       |   10.0 | 168 + 168 → 9.86             |  10.0 | retained (1.4 %); the render already steps it below L21/L22 |
| 11, 12     | L31F      |   10.5 | 181 + 181 → 10.63            |  10.6 | step-order fix, see below                                   |
| 13, 14, 15 | L32F/L33F |   10.5 | 179 + 179 → 10.51            |  10.5 | retained                                                    |
| 17, 18     | L31R      |   10.0 | 168 + 169 → 9.89             |  10.0 | retained (1.1 %)                                            |
| 19, 20     | L32R      |   10.0 | 170.5 + 171.5 → 10.04        |  10.0 | retained                                                    |
| 21, 22     | L33R      |   10.3 | 175.5 + 177 → 10.35          |  10.3 | retained                                                    |
| 23, 24     | L41       |    9.0 | 153 + 154 → 9.01             |   9.0 | retained                                                    |
| 25, 26     | L42       |    8.5 | 144 + 145 → 8.48             |   8.5 | retained                                                    |

- Change: S11 / S12 10.5 → 10.6 mm. Fig. 1 draws L31F 0.12 mm taller than the L32F/L33F doublet behind it, a step
  read to about ±0.06 mm, where the render had them equal. The same value clears the real-ray marginal of a f/6.48
  iris at 291 mm (10.58 / 10.60 mm), which `clearap.mjs` had flagged at 10.5. Every other element is within 1.5 % of
  the figure and keeps its value. The stop keeps its engine radius; the drawn stop marks are 327 px apart, a 9.60 mm
  half-opening between the engine's paraxial 9.463 mm and the real-ray 9.689 mm at wide.
- Clearances after the change: the surface validator reports no errors, the image-circle floor flags nothing, and
  field coverage reaches 100 % of the 14.24 mm image height at all 41 stations. `clearap.mjs` at Y 14.24 flags nothing
  at infinity or close focus. A finite-object trace at 0.95 m with the engine's stop radius clears every rim; the
  smallest margins are about 0.3 mm, at S11 / S12 / S13 (10.30 / 10.33 / 10.20 mm at wide).
- Engine: half-field 18.15°, F/4.60 and stop 9.463 mm at wide are unchanged. Wide-open vignetting at wide (2.4° to
  14.5°) goes from 99.8 / 98.5 / 96.9 / 94.7 / 82.1 / 64.0 % to 100 / 98.9 / 98.1 / 95.7 / 82.5 / 64.1 %; at 132 mm it
  improves by at most 0.8 %, and at 291 mm it is unchanged (55.1 % at the corner). At 291 mm the f/6.48 axial beam
  reaches 22.47 mm at S1 against the drawn 22.7 mm, so off-axis bundles clip at G1 from the first degree; kept as drawn.
- Rendered check at 56.5, 132.085 and 291.188 mm, infinity and 0.95 m: the proportions match Fig. 1 (G1 about 2.2×
  the inner groups, G4 the smallest, L33R the tallest of G3R). At 291 mm and 0.95 m the app draws its outermost
  on-axis ray faded at the L21 rim; that ray meets S1 at about 18.6 mm, above the 15.6 mm at which the stop-rim ray
  from the 0.95 m object meets it, so it lies outside the stop-limited beam and S6 was left at the drawn 10.2 mm.
- Ricoh's construction diagram shows 14 elements in 11 groups grouped as in Fig. 1, marks only the eighth element
  (L32F) as ED and marks no asphere. It is drawn in the retracted state (G1–G2 and G2–G3F both closed up) and with
  mechanical flanges on L12, L21, L33F and L42, so its inner groups read 5–15 % larger against G1 than Fig. 1 does;
  Fig. 1 governs.
- Open: L23 (9.86 mm) and L31R (9.89 mm) read about 0.1 mm under their stored 10.0 mm, inside measurement noise and
  invisible at render scale; left unchanged.

## 2026-10-29 — Second review: diagram, labels and movement

- Compared: the local page at 56.5, 132.085 and 291.188 mm, at infinity and 0.95 m, and the `mv=zoom` / `mv=focus`
  overlays, against Fig. 1 (sheet 1, PDF p. 2, native 2560 × 3300 scan), Fig. 4 (tele layout, p. 4), Fig. 67 (zoom
  path, sheet 45, p. 46), ¶0105–0114 (pp. 52–53), ¶0177–0181 (p. 57) and ¶0188–0199 with Tables 1–3 (pp. 58–59).
- Silhouette: the model outline (wide, infinity) was drawn over Fig. 1 at 17.033 px/mm with S1 on its drawn vertex.
  Every vertex and rim lands on the drawn ink, every element is squared as drawn (both faces and cemented partners
  share one value), and nothing overlaps. Independent full-width readings (left + right px) agree with the earlier
  pass to within 0.5 px: L11 390 + 381.5, L12/L13 380 + 371, L21/L22 174 + 171, L23 170 + 166, L31F 184 + 178,
  L32F/L33F 182 + 176, L31R 171 + 166, L32R 173.5 + 168, L33R 177.5 + 175, L41 155 + 152, L42 146 + 143.
- The one step the render lacked: Fig. 1 draws L31R 0.13 mm shorter than L32R (9.89 against 10.02 mm; on the clean
  side 171 against 173.5 px, read to about 1 px), while both rendered at 10.0 mm.

| Item | Before | After | Evidence |
| --- | --- | --- | --- |
| S17 / S18 `sd` (L31R) | 10.0 | 9.9 | Fig. 1 full width 337.5 px → 9.89 mm; restores the drawn step below L32R. Validator OK; the close-focus axial ray reaches 9.34 mm at 291 mm, the infinity axial ray 8.89 mm |
| `doublets` text | D1 / D2 / D3 | C1 / C2 / C3 | the D prefix read as the D5 / D10 / D22 spacing labels shown on the same page; surface ranges 3–5, 6–8, 13–15 unchanged |
| element `cemented` | D1 / D2 / D3 | C1 / C2 / C3 | kept equal to the bracket text (the inspector shows "Doublet C1") |
| element `diagramLabel` | none (diagram drew 1–14) | L11 … L42, L31F … L33R | the patent's reference numerals in Fig. 1 and ¶0191–0195, matching each `name` |
| L12 `apdNote` | "… No anomalous-dispersion tag." | cites condition (11), ¶0178, and both normal lines | ¶0178–0179 make L12's θgF a secondary-spectrum condition; the patent names no special glass, so no `apd` tag |

- Clearances after the change: the surface validator reports no errors, the image-circle floor flags nothing, field
  coverage reaches 100 % of the 14.24 mm image height at all 41 stations, and the clearance trace flags no axial clip
  or chief-ray block at infinity or close focus. Only S17 / S18 change in that trace (side clipping of the unvignetted
  bundle 10 % → 11 %). The engine keeps half-field 18.15°, F/4.60 and stop 9.463 mm at wide; its wide-open
  curves are identical at 56.5, 132.085 and 291.188 mm (corner 64.1 / 55.3 / 55.1 %), because S19 / S20 at 10.0 mm
  clip the same meridional rays first. The drawn stop housing shortens from 10.0 to 9.9 mm.
- Checked and correct: groups G1 (1–5), G2 (6–10), G3F (11–15), G3R (17–22) and G4 (23–26) bracket the right
  elements in the patent's notation, with no parent G3 bracket. The stop sits 2.700 mm behind S15, as Fig. 1 and
  Table 1 place S. Every element `type` agrees with the R signs and with ¶0191–0195. No surface carries an asphere or
  an `A` suffix (¶0188). L32F `apd: "inferred"` matches Ricoh's construction diagram, which colours only the eighth
  element ED; that diagram also shows 14 elements in 11 groups with three cemented pairs, as modelled. All 14 glass
  labels resolve; none is Unmatched. The focus slider ends at 95 cm.
- Zoom, wide → tele, distance from the image at the printed stations: G1 163.50 → 201.85 → 233.85 mm (toward the
  object); G2 (S6) 145.05 → 132.42 → 138.69 mm (U-turn); G3 (S11) 98.64 → 106.86 → 128.28 mm; G4 (S23) 57.55 →
  63.05 → 86.89 mm. Stations ascend 56.5 → 291.188 mm and every gap array follows that order. This matches ¶0108 and
  Fig. 67 (Embodiments 1–4): G1 advances, G2 U-turns, G3F and G3R move as one, and G3 and G4 finish objectward of
  their wide positions. The page's zoom overlay draws the same.
- Focus: index 0 is infinity and index 8 is 0.95 m at every station. Only G4 moves, toward the image (¶0114): d22
  3.010 → 3.915, 5.736 → 9.773 and 3.310 → 15.128 mm with BF falling by the same amount. The focus overlay at 291 mm
  shows G4 alone travelling about 12 mm imageward.
- Open: ¶0108 gives G3 and G4 an initial imageward hook before they move objectward (Fig. 67 draws the hooked
  paths). It falls between the printed 56.5 and 132.085 mm rows, which cannot place it, and the interpolated cam
  moves both groups objectward from the start. The gap tables were not changed; the analysis now says so.
- Open: the diagram's element-label rows sit inside G1's lower rim at every zoom position, so "L12" overlaps the
  bottom corners of L11 and L12, as the bare "2" did before. This comes from the renderer's label-row placement
  under a 22.7 mm front group, not from the data.
