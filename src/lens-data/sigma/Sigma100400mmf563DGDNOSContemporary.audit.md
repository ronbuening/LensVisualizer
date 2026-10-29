# SIGMA 100-400mm f/5-6.3 DG DN OS Contemporary: audit log

The source package carried no audit log; this file starts at deployment validation.

## 2026-10-29 — Deployment validation and cleanup

- Source: JP 2021-92636 A (Hiromichi Ochiai, Sigma Corporation), filed 2019-12-10 as 特願2019-222569, published
  2021-06-17. Numerical Example 1 on PDF pp. 12–13 (¶0056–0067), Fig. 1 on p. 30. The PDF has a text layer; the
  numeric table was also read from 200 dpi page images and agrees with it. Bibliographic fields in the data file match
  the front page.
- Transcription: 39 surfaces (R, d, nd, νd, stop at surface 30, six cemented pairs), the seven variable gaps D5 / D10 /
  D15 / D20 / D30 / D32 / D37 and BF at the three printed focal lengths were checked; zero mismatches. Every surface
  is spherical. The printed group focal lengths are reproduced: G1 197.57, G2 −433.85 (printed −433.83), G3 −40.20,
  G4 79.54, G5 193.70 (193.71), G6 74.24, G7 −98.69 (−98.68), G8 −122.70 mm.
- First order, patent vs model: f 103.00 / 200.08 / 387.40 vs EFL 103.000 / 200.080 / 387.388 mm; F 5.15 / 5.90 /
  6.50 reproduced; BF 33.1482 vs paraxial 33.149 / 33.148 / 33.145 mm; total length 212.15 / 255.54 / 289.15 vs
  212.148 / 255.545 / 289.148 mm. The chief ray reaches the printed 21.63 mm image height at 11.7 / 6.0 / 3.1°
  (printed half-angles 11.65 / 5.97 / 3.08°).
- Zoom cam: the 62 stations between the printed ones are derived (G1 position and a rigid G4 shift solved for paraxial
  infinity focus, other gaps interpolated). No gap and no group reverses across the 65 stations; G2 stays within
  0.002 mm (the printed values' own rounding) and G8 is fixed; EFL rises monotonically along the slider. Infinity focus
  error is at most 0.015 mm between stations; straight interpolation of the three printed rows would give 12.56 mm.
- Close focus: the patent prints infinity states only. G6 (L18) moves toward the object, D30 + D32 constant, to
  Sigma's 1.12 m / 1.60 m minimum focus distances (1.36 m assumed at the middle station): travel 2.90 / 7.08 /
  18.42 mm, magnification 0.105 / 0.157 / 0.241× against Sigma's 1:4.1 (0.244×) at 400 mm.
- Checks: `audit:surface` OK; `audit:image-circle` 0 undersized; `audit:field-coverage` 65 / 65 stations at 100 % of
  21.63 mm; `clearap.mjs` at Y 21.63 reports no axial clip and no blocked chief ray at infinity or close focus.
- Product match: Sigma's product page (sigma-global.com/en/lenses/c020_100_400_5_63/) lists 22 elements / 16 groups,
  one FLD and four SLD elements, 1.12–1.60 m, 1:4.1, 67 mm filter, nine rounded blades, L-Mount, Sony E-mount and
  FUJIFILM X Mount. The construction diagram (sigma-global.com/lenses/c020_100_400_5_63_specification_01.png) matches
  Example 1 element by element (G2 = L4 plus a cemented pair, single-element G6, plano-convex L17, same 16-group
  split) and colours FLD at L3 and SLD at L2, L15, L17 and L20. Example 1's glasses at those positions are
  coordinate-equal to HOYA FCD100, FCD1, FCD600, FCD515 and FCD705; L18 (PCD51 coordinates) is not marked by Sigma.
  Examples 5 and 6 share the layout; Examples 2, 3, 4 and 7 group differently. Example 1 is the best fit.
- Fields changed in this pass: `catalog.lensMounts` from L-Mount only to L-Mount and Sony E, as in the other Sigma
  DG DN files; `acceptsTeleconverters` removed, since no Sigma converter is modelled and the flag would have offered
  Sony's converters once Sony E is listed. `subtitle` to "JP 2021-92636 A, Numerical Example 1 — production
  correlation"; `specs` to "22 ELEMENTS / 16 GROUPS", "DESIGN f = 103.00–387.40 mm", "DESIGN F/5.15–6.50", "ALL
  SPHERICAL", "1 FLD / 4 SLD ELEMENTS". Header comment rewritten in plain terms with all facts kept; focus
  description rewritten; the 22 identical element roles replaced by specific ones; cemented brackets D1–D6 renamed
  C1–C6 so they do not read like the gap labels D5 / D10 / … / D37.
- Glass: all 22 "Unmatched (nd, νd)" labels relabelled to coordinate-equal catalog rows in the form "NAME (VENDOR
  catalog equivalent; production supplier unspecified)": TAF3D, FCD1, FCD100, E-FL6, TAFD35, TAF1, TAC8, FDS90,
  LAC14, E-FL5, TAFD65 (L12, L22), E-FD15, TAFD37A, FCD600, TAFD55 (L16, L19), FCD515, PCD51, FCD705 (HOYA) and
  S-NBH8, S-NBH58 (OHARA). All 22 resolve by name with nd exact at the printed precision and |Δνd| ≤ 0.01. L2, L3,
  L15, L17 and L20 carry `apd: "inferred"` with a one-sentence note citing Sigma's FLD / SLD marking. The engine's
  first-order output is unchanged by this pass.
- Open: production identity rests on construction and glass matching only. Open: the intermediate cam and all
  close-focus spacings are derived, not Sigma's; the 1.36 m middle-station distance is an assumption. Open: the
  source package recorded weak full-field MTF at the derived quarter-zoom station; it was not re-measured. Open: Sigma's
  TC-1411 / TC-2011 converters (L-Mount version only) are not modelled, and the 2023 FUJIFILM X Mount version is not
  listed, following the other full-frame Sigma DG DN files.
