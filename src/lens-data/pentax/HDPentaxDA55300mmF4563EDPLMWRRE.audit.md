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
