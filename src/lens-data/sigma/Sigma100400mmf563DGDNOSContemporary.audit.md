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
  TC-1411 / TC-2011 converters (L-Mount version only) are not modelled. Later the same day (first pass),
  `fujifilm-x` was added to `lensMounts`: Sigma sells the same optics in FUJIFILM X Mount, and the corpus lists X
  Mount on other full-frame lenses (Samyang 135mm f/2, Laowa 180mm f/4.5) while keeping `135-full-frame`.

## 2026-10-29 — Semi-diameter pass against the patent figure

- Source: `patents/JP2021092636A.pdf`, Fig. 1 on PDF p. 30, which is Example 1 at the wide end, focused at infinity.
  The figure is an embedded 300-ppi raster of 804 × 414 px, measured on a 600-dpi render.
- Scale: the element tops and bottoms are symmetric about row 985. Surface 1's vertex is at x 652.5 and the image plane
  at x 2052.5, giving 1400 px for 212.148 mm, or 6.599 px/mm (0.1515 mm/px). A second span, surfaces 16 to 37,
  gives 6.593 px/mm. All 33 detected vertex crossings fall within 1.5 px of the prescription.
- Radial check: at this same scale, the drawn L1 front rim position and the curvature traces of the L3 front
  (R 103.67) and L22 rear (R −59.13) match the printed radii within about 2–3%. Fig. 1 is therefore drawn isotropic,
  not anamorphic.
- Method: each element's half-height is the mean of its top and bottom ink, read at the line centre. This is 1 px
  under the outer edge. Each curved face was also traced against its predicted spherical profile, to find where the
  ink stops following the curve and continues as a flat land (a straight edge perpendicular to the axis). Where it
  does, the model keeps sd at the element edge and authors the land as a rim cut. Overlays of the model outline on
  the figure confirmed each call.

| Surface | Element face       | Before | Fig. 1                                              | After | Evidence |
| ------- | ------------------ | -----: | --------------------------------------------------- | ----: | -------- |
| 10      | L6 rear            |   15.0 | curve ends at 12.2–13.5, flat land out to 14.85     |  15.0 | Kept at the drawn edge, with a rim cut of depth 1.77 at cut radius 13.95 (see the rim-cut bullet) |
| 11      | L7 front           |   14.0 | 12.7                                                |  12.8 | Figure rim |
| 14      | L8/L9 junction     |   14.0 | 13.2                                                |  13.2 | Figure rim. G3 sits under G4 (13.9) and above L7 |
| 15      | L9 rear            |   14.0 | 13.2                                                |  13.2 | Figure rim |
| 23      | L14 front          |   13.5 | 13.2                                                |  13.2 | Step order: Fig. 1 has L13 (13.6) 3 px above L14/L15 |
| 24      | L14/L15 junction   |   13.5 | runs into the 13.2 rim                              |  13.2 | Follows surface 23 |
| 25      | L15 rear           |   13.5 | curve ends at 10.6–11.5, flat land out to 13.2      |  13.2 | Drawn edge, with a rim cut of depth 1.48 at cut radius 11.42 (see the rim-cut bullet) |
| 26      | L16 front          |   13.5 | 12.0                                                |  11.4 | Kept square with surface 27, which the gap limits |
| 29      | L17 rear           |   13.5 | 12.0                                                |  11.4 | Kept square with surface 28 |
| 33      | L19 front          |   13.5 | 12.0                                                |  12.0 | Figure rim |
| 36      | L20/L21 junction   |   13.5 | 13.2                                                |  13.2 | Fig. 1 draws L20/L21 level with L14/L15, below L13 |
| 37      | L21 rear           |   13.5 | 13.2                                                |  13.2 | Figure rim |

- Rim cuts (inferred; the patent states no depth, so there is no `rimCutDepthSource`):
  - Measured on the native raster at 3.30 px/mm, with the axis at native row 179.
  - Surface 10: the edge is at 49 px and the cap ends at 40–44 px, so q = 0.86 ± 0.04 and the drawn cut radius is
    about 12.9 mm (12.2–13.5) of sd 15.0.
  - Surface 25: the edge is at 43.5 px and the cap ends at 35–38 px, so q = 0.84 ± 0.04 and the drawn cut radius is
    about 11.1 mm (10.6–11.5) of sd 13.2.
  - The wide-open beams, traced without the cuts, reach 13.883 mm at surface 10 (200.08 mm, focus 0.5, 4.39°). At
    surface 25 they reach 11.357 mm (184.91 mm, infinity, 2.71°).
  - Each land moved out to reach plus its 0.05 mm margin, plus 0.005 mm, with the depth rounded up. Surface 10 gets
    depth 1.77 mm, cut radius 13.951 (q 0.93), a 1.05 mm land and 0.069 mm clearance. Surface 25 gets depth 1.48 mm,
    cut radius 11.423 (q 0.87), a 1.78 mm land and 0.066 mm clearance.
  - The beam rule in the surface validator passes. The dense probe (81 zoom × 21 focus states, 11.6 M rays) refines
    the reach to 13.870 and 11.354 mm and finds 0 clipped rays and 0 rays within either margin.
  - Both cut radii sit above the axial beam, at 12.73 and 10.99 mm.
- Retained, all within about 2.5% of Fig. 1:
  - Surfaces 1–3 at 33.0 (figure 33.2) and 4–5 at 32.0 (31.8).
  - Surfaces 6–7 at 20.5 (20.3). Surface 7 is almost flat, so a possible annulus above 16–17 mm cannot be told
    apart from the curve.
  - Surfaces 8–9 at 15.0 (14.85), 16–20 at 14.0 (13.9) and 21–22 at 13.5 (13.6).
  - Surfaces 31–32 at 12.0 (12.3). Surfaces 38–39 at 16.3 (16.1), where the front curve ends at about 15.6 into a short
    flat.
- Retained, below Fig. 1 because the faces nearly meet across an air gap:
  - Surfaces 12/13 at 11.5. The figure runs both faces until they meet at about 12.2. The 90% gap-sag limit allows
    11.6, and the axial beam reaches 11.31 / 11.32.
  - Surfaces 27/28 at 11.4. The figure draws them meeting at the 12.0 rim, and the gap closes only at 12.15. Raising
    the pair needs a gapSagFrac of 0.91 at 11.6, 0.95 at 11.8 and 0.98 at 12.0. It was not applied, and L16 and L17
    were kept square at 11.4 instead, 0.95 of the drawing.
  - Surfaces 34/35 at 11.0. Here the figure draws faces that would physically cross at 11.55. L19's front face follows
    the figure at 12.0, so the element steps down to 11.0 at its rear.
  - The STO is unchanged.
- Clearance:
  - The surface validator reports no errors. The image-circle floor finds 0 undersized surfaces. Field coverage is
    65 of 65 stations at 100% of 21.63 mm.
  - The real-ray trace at Y 21.63 mm shows no axial clip and no blocked chief ray, at infinity or at close focus.
    The tightest new rim, surface 26 at 11.4, sits above the axial beam's 10.87.
  - The engine half-field is unchanged at all 65 stations (13.20° wide, 3.78° tele), as are the F-numbers (5.15 to
    6.50) and the stop radius (10.39 mm wide). The aperture audit finds 65 of 65 stations within 3%, with no rim,
    trace or failed rows.
  - Wide-open engine vignetting at infinity is unchanged at zoom 0, 0.25, 0.5, 0.75 and 1.
- Live check: the local app was viewed at 103 / 200.08 / 387.4 mm at infinity, and at 103 and 387.4 mm at close focus.
  G3 now sits below G4, and L16/L17 below L14/L15. L6 and L15 draw a flat land at the rear rim, as Fig. 1 does. No
  element overlaps a neighbour at any state.
- Maker diagram: Sigma's construction diagram agrees on 22 elements in 16 groups and the same grouping, and it is drawn
  at the wide state. Measured at its own isotropic scale, about 0.158 mm/px from L1, its heights agree with Fig. 1
  within about 5%. The exceptions are L16/L17 and L19 (about 12.7 mm against Fig. 1's 12.0) and L11/L12 (14.9 against
  13.9). It also draws L15's rear rim below L14's front.
- Open: surface 10's cut sits 0.5–1.7 mm outside the drawn cap end, because the beams need it. L16/L17 stay 0.6 mm
  under the drawing unless the coordinator raises gapSagFrac for the 27/28 pair.

## 2026-10-29 — Second review: diagram, labels and movement

- Compared: the local page at 103 / 200.08 / 387.4 mm, at infinity and at close focus, with both movement overlays,
  against Fig. 1 (PDF p. 30, wide, infinity) and Sigma's construction diagram. The figure was re-measured on its
  native 804 × 414 raster. Surface 1's vertex sits at column 90.5 and the image plane at 790.5 on axis row 179, so
  the scale is 3.2996 px/mm. A second span, surfaces 16 to 37, gives 3.294 px/mm, and all 37 vertex crossings fall
  within 1 px of the prescription.
- Isotropy: surfaces 13, 24, 35, 38 and 39 were traced against their spherical profiles out to the rim and stay
  within 0.8 px of them. A 10% vertical stretch would put surface 38 2 px off at its rim, so the figure is isotropic.
- Rims at the line centre (mm): C1 33.0–33.2, L3 31.7, L4 20.2, L5/L6 14.7, L7 12.6, L8/L9 13.0, L10 13.8, L11/L12
  13.8, L13 13.5, L14/L15 13.0, L16/L17 11.8, L18 12.1, L19 11.8, L20/L21 13.0, L22 16.1. Except for the two faces
  below, every model rim is within 3.5% of these.
- The site differed from the figure in G3 and G7. Fig. 1 draws the L8/L9 and L20/L21 doublets as square blocks, with
  the concave front faces of L8 (surface 13) and L20 (35) running on their spheres to the block edge. Surface 13 holds
  its sphere to 12.4 mm and surface 35 to 12.7 mm, and both then meet the 13.0 mm edge. The smaller L7 and L19 end
  against those faces. Sigma's diagram draws both junctions the same way.
- On the site, both fronts stopped at the gap-limited height of the face ahead of them. L8 and L20 were drawn as
  bevels rising to 13.2 mm, leaving a V-notch at each junction.
- The cross-gap check reads each pair at its smaller rim, so raising the larger front face leaves that check
  unchanged.

| Surface | Face                 | Before | Fig. 1 | After | Evidence |
| ------- | -------------------- | -----: | -----: | ----: | -------- |
| 13      | L8 front (concave)   |   11.5 |   13.0 |  13.2 | Figure and Sigma diagram; squares C3 at its 13.2 junction and rear |
| 35      | L20 front (concave)  |   11.0 |   13.0 |  13.2 | Figure and Sigma diagram; squares C6 at its 13.2 junction and rear |

- Kept:
  - Surface 12 (L7 rear) stays at 11.5. The 90% gap-sag limit allows 11.6, but at 11.6 the surface-10 cut would have
    to move out to 14.004 mm to keep clear of the beams. The faces cross at 12.22 mm in any case.
  - Surface 34 (L19 rear) stays at 11.0, with a limit of 11.03; the faces cross at 11.63 mm.
  - L7 and L19 keep their fronts at the drawn 12.8 and 12.0 mm, so they taper toward the rear. A square cut would sit
    8–9% under the figure.
  - L16/L17 stay at 11.4. The rim cuts on surfaces 10 and 25 match the lands drawn in Fig. 1 and are unchanged.
- Clearance: the surface validator, including the rim-cut beam rule, reports no errors. The image-circle floor finds
  0 undersized surfaces, and field coverage is 65 of 65 stations at 100%. The real-ray trace at Y 21.63 mm flags
  nothing, at infinity or at close focus. The engine half-field is unchanged at 13.20° wide and 3.78° tele, as are
  F 5.15 / 6.50 and the 10.39 mm stop radius.
- Vignetting (meridional engine curve, wide open, infinity): surface 13 changes nothing. Surface 35 had clipped rays
  that already pass L19's 11.0 mm rear rim. The edge field goes 60.7 → 60.9% at zoom 0, 68.2 → 68.5% at 0.25,
  62.8 → 63.0% at 0.5, 47.0 → 47.3% at 0.75 and 41.9 → 42.8% at 1; inner fields are unchanged. The clip at surface 34
  stays.
- Labels:
  - Group brackets G1–G8 match ¶0056 in power (+ − − + + + − −) and surface range, with the OS label on G3 (¶0061)
    and the focus label on G6 (¶0057).
  - ¶0058 also names the parent groups GF (G2+G3), GM (G4–G6) and GR (G7+G8); only the subgroups are bracketed.
  - Cemented brackets C1–C6 cover L1/L2, L5/L6, L8/L9, L11/L12, L14/L15 and L20/L21.
  - Element names L1–L22 and every element type match ¶0059–0066.
  - The stop sits between L17 and L18, as Fig. 1's S does. Every surface is spherical and none carries an A suffix.
  - Gap labels D5 / D10 / D15 / D20 / D30 / D32 / D37 are the patent's.
- Tags: the patent has no anomalous-dispersion language. The five inferred tags match the maker's colours: blue SLD at
  L2, L15, L17 and L20, and yellow FLD at L3. The inspector for L2, L3, L7, L15, L17, L18, L20 and L22 shows the
  expected type, catalog glass, focal length, role and tag. All 22 glass labels resolve.
- Movement, wide → tele, from the authored gaps:
  - G1 moves 77.000 mm objectward. G2 is fixed within 0.002 mm, the printed rounding. G3 moves 4.942 mm imageward.
  - G4 moves 18.590 mm, G5 and the stop 34.909 mm, G6 8.938 mm and G7 23.936 mm, all objectward. G8 is fixed.
  - Every moving group steps one way at all 64 steps, matching ¶0057 and Fig. 1's arrows. Stations ascend
    103 → 387.4 mm.
  - Focus moves only G6, objectward, by 2.905 mm at 103 mm and 18.416 mm at 387.4 mm. Keyframe 0 is infinity, and the
    slider ends at 1.12 m wide and 1.60 m tele.
  - Both overlays show the same.
- Live check after the edit: at every printed state and focus end, C3 and C6 draw as square blocks, with L7 and L19
  tucked under the concave fronts as in Fig. 1. No element overlaps a neighbour.
- Open:
  - At the wide end the group labels "G2 (−)" / "G3 OS (−)" and "G5 (+)" / "G6 Focus (+)" touch without a space. The
    label packer's width estimate is short for this font; this is a renderer matter, not a data one.
