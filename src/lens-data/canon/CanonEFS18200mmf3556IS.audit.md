# CANON EF-S 18-200mm f/3.5-5.6 IS: audit log

The source package carried no audit log; this file starts at deployment validation.

## 2026-10-29 — Deployment validation and fixes

- Source: JP 2009-175324 A (Makoto Misaka, Canon Inc.), filed 2008-01-23 as 特願2008-12497, published 2009-08-06.
  Numerical Example 1 on PDF pp. 12–13 (¶0097), Fig. 1 on p. 18, Figs. 2A–C on pp. 18–19. The PDF has a text
  layer; the numeric table was also read from 200 dpi page images and agrees with it. Bibliographic fields in the data
  file match the front page.
- Transcription: 29 R, 28 fixed d, 16 nd/νd, both aspheric surfaces (S16, S27; A–F, ten non-trivial coefficient
  slots) and the four variable gaps D5 / D13 / D19 / D24 at the three printed focal lengths were checked; zero
  mismatches. The patent's asphere equation carries an H² term A, printed 0, so K = 0 and B–E map to A4–A10. The
  printed group focal lengths are reproduced: L1 90.986, L2 −13.132 (printed −13.133), Gpf 22.315, Gis −39.674
  (−39.673), Gisr −42.370 (−42.371), Gpr 28.750 mm.
- First order, patent vs model: f 18.60 / 49.94 / 193.23 vs EFL 18.597 / 49.919 / 193.084 mm (−0.02 / −0.04 /
  −0.08 %); F 3.60 / 4.70 (Fig. 2B) / 5.88 reproduced at the printed stations. Back focus and total length are not
  printed; the paraxial image gap is 38.194 / 53.777 / 68.550 mm (front vertex to image 143.774 / 172.807 /
  204.340 mm). Traced at the printed half-angles 36.29 / 15.30 / 4.04° the chief ray lands at 12.88 / 14.22 /
  13.97 mm. Fig. 2A reads about −5.0 % distortion at the wide field edge against −5.65 % in the model; the
  prescription and group powers match exactly, so this is left as a plot-reading difference.
- Product match: the Canon Camera Museum page (global.canon/en/c-museum/product/ef399.html) lists 16 elements /
  12 groups, two UD and two glass-moulded aspherical elements, inner focus, 0.45 m, 0.24×, 72 mm filter, six blades,
  f/22–36, IS, September 2008. The construction diagram
  (global.canon/ja/c-museum/wp-content/uploads/2015/05/ef399-lens-construction.gif) marks UD at L2 and L14,
  aspheres at L8 and L15 and an IS unit behind the stop, which matches Example 1. Example 2 (17.60–120.97 mm) and
  Example 3 (18.60–241.39 mm, four aspheric surfaces, νd 95.0 glass) fit the product worse.
- Defects found in the package: its 129-node cam interpolated D5 / D13 / D19 / D24 linearly and solved the image gap,
  which made the image gap rise to 73.50 mm near 148 mm and fall back to 68.55 mm at tele, so Gpf, Gn and Gpr
  reversed by 4.95 mm, G1 overshot to 206.65 mm against 204.34 mm at tele, and L2 dipped 0.66 mm and then overshot
  7.33 mm. The printed stations are monotone and Fig. 1 draws straight arrows for L1 and the rear units. Its interior
  F-numbers were linear in node index; with that cam S20–S22 (sd 6.5) clipped the axial beam from 71 to 180 mm
  (up to 6.87 mm needed).
- Fix 1, zoom cam: regenerated with 37 zoom nodes (12 intervals wide–middle, 24 middle–tele) and 11 focus
  keyframes q = (i/10)³, replacing 129 × 25. The G1 position, D19 and the image gap follow monotone cubic Hermite
  curves through the printed values (PCHIP slopes, with the image-gap tele-end slope ×1.25 and the G1 slopes ×1.07
  at the middle and ×0.6 at tele); D24 = 8.63 − D19 (¶0039); the D5/D13 split is solved for paraxial infinity
  focus. Node spacing per segment follows the square root of (log-focal-length rate × interpolation-error density).
  Turn counts from wide to tele, printed vs model: D5, D13, D19, D24, image gap, G1, Gpf, Gn and Gpr 0 / 0; L2 0 / 1
  (a 0.255 mm dip toward the image near 22 mm, no overshoot at tele), in line with Fig. 1's curved L2 arrow. Node
  defocus at infinity is at most 0.0003 mm and between nodes at most 0.0175 mm; EFL rises monotonically along the
  slider (18.597 → 193.084 mm at infinity, 17.860 → 87.562 mm at close focus). The printed stations keep their
  printed gaps, focal lengths and F-numbers and the package's derived image-gap values. Close focus is re-solved at
  every node: L2 toward the object to an object-to-image distance of 450/q mm, travel 0.918 / 2.070 / 8.898 mm and
  magnification 0.054 / 0.126 / 0.244 at the printed stations. Between keyframes the slider distance label and the
  distance the spacings focus on differ by at most 4.8 % (package 4.83 %). Data file size 274,117 → about 36 KB.
- Fix 2, F-number law and rims: interior F-numbers now come from an iris radius interpolated between the radii the
  printed F-numbers need (7.048 / 7.223 / 7.336 mm), rounded to 0.01 (3.60 → 4.70 → 5.88, monotone). With the new
  cam the axial beam at S20 peaks at 6.28 mm, inside the 6.5 mm rim, so no semi-diameter was changed. Fig. 1 draws Gis
  at about 7.0 mm outer ink (0.81 of the Gpf doublet), so 6.5 mm stays within the drawing.
- Fix 3, glass: the package labels were six-digit codes ("806333 coordinate class …"); the resolver matched all 16
  through those codes, but L2 / L14 landed on K-PFK80 at Δνd −0.15. Relabelled to named catalog rows in the form
  "NAME (VENDOR catalog equivalent; production supplier unspecified)": NBFD15 (HOYA) for L1 / L12, S-FPL51 for L2 /
  L14, S-BSM14 for L3, S-LAH55V for L4 / L13 / L16, S-LAH66 for L5 / L7, S-TIH6 for L6 / L9, S-BAL42 for L8 / L15,
  S-FSL5 for L10, S-LAL8 for L11 (OHARA). All 16 resolve by name with nd exact to six decimals and |Δνd| ≤ 0.05.
  L2 and L14 carry `apd: "inferred"` with a one-sentence note citing Canon's UD marking. No nC / nF / ng were present.
- Fix 4, wording: data header rewritten in plain terms (all facts kept, cam and focus derivation described);
  `subtitle` to "JP 2009-175324 A, Numerical Example 1 — production correlation"; `specs` to "16 ELEMENTS / 12
  GROUPS", "DESIGN f = 18.60–193.23 mm", "DESIGN F/3.60–5.88", "2 ASPHERICAL SURFACES / 2 ELEMENTS", "2 UD ELEMENTS";
  focus description rewritten; element labels to "Element N" with a specific `role` each; group texts "L2 (focus)"
  and "Gis (IS)"; cemented brackets D1–D4 renamed C1–C4 so they do not read like the gap labels D5 / D13 / D19 /
  D24; station labels reduced to "Wide" and "Tele"; image-gap label "BF". Analysis: "provisional reconstruction" and
  "candidate" wording removed, the zoom and focus paragraphs rewritten for the new cam, glass lines and table updated,
  the verification section (ray-grid counts, solver-failure counts, MTF figures from the old cam, archive and gate
  notes) replaced by a short "Model Scope and Limitations" section, field-bound paragraph rewritten from the new
  clearance results.
- Re-check of the fixed file: `built.mjs` loads (EFL 18.5966, F/3.6, stop 7.048 mm); `probe.mjs` shows every node in
  focus; `audit:surface` OK; `audit:image-circle` 0 undersized; `audit:field-coverage` 37 / 37 stations at 100 % of the
  14.175 mm format; `clearap.mjs` at Y 13.41 and 14.175 reports no axial clip and no blocked chief ray (the package
  file blocked the chief at S1 at 23–31 mm). Prettier reports both edited files formatted.
- Open: production identity rests on construction matching only. Open: the intermediate cam and all close-focus
  spacings are derived, not Canon's. Open: off-axis MTF at intermediate zoom positions was not re-measured after the
  cam change.

## 2026-10-29 — Semi-diameter pass against the patent figure

- Source: JP 2009-175324 A, Fig. 1(a) (wide end, 広角端) on PDF p. 18, the drawing of Numerical Example 1. The page
  carries a 200 ppi raster; it was measured from a 400 dpi render. Heights are half the top-to-bottom distance between
  line centres, so the 2–3 px offset between the drawn axis and the element centres in the front group drops out.
- Axial scale: vertex crossings beside the axis put S1 at x 1118 and S29 at x 2075.5, 957.5 px for the 105.58 mm
  wide-state vertex span, 0.1103 mm/px; S1→S16 (63.58 mm, 578 px) gives 0.1100 and S5→S28 (85.87 mm, 778 px) 0.1104.
  Every other vertex and the stop mark land within 2 px of the prescription.
- Radial scale: the front group is drawn isotropic. S7 (R 13.369) is drawn with sags of 13.5 / 22 / 30 / 38.5 px at
  54.5 / 70.5 / 78.5 / 86.5 px height against 12.9 / 22.6 / 28.8 / 36.3 px predicted at 0.110 mm/px; S7 meets L5's
  corner at an 89.3 px half-height, where the prescription puts the S7/S8 intersection at 9.90 mm (0.111 mm/px); the
  L5 and L7 top corners land within 1 px of the isotropic S8 and S12 sags. In the rear the S26 and S28 curves fit about
  0.103 mm/px, and the stop mark (68 px) reads 7.5 mm isotropic against the 7.05 mm F/3.6 iris, so the rear may be
  drawn up to about 7 % tall. The authored rims of L1, L3, L4, L8, Gpf, L13, L14 and Gpr2 agree with the isotropic
  reading within 3 %, so 0.110 mm/px was used throughout; no retained value hinges on the rear-scale ambiguity.
- Readings (stored → Fig. 1, ratio): S1–S3 29.0 → 29.4 outer box, curves ending at 27.4–28.2 under a drawn flange,
  kept; S4–S5 24.75 → 24.7, kept; S6 13.25 → 13.1, kept; S7 9.4 → 9.9 (1.05), kept as noise; S8–S9 (L5) 9.4 → 9.9
  (1.05), kept as noise; S10–S11 (L6) 8.9 → 9.6 apex (1.08), kept, see below; S12–S13 (L7) 8.9 → 10.14 (1.14),
  changed; S15–S16A (L8) 8.5 → 8.5; S17–S19 (Gpf) 8.5 → 8.65; S20–S22 (Gis) 6.5 → 6.86 (1.055), kept as noise;
  S23–S24 (L13) 7.5 → 7.6; S25–S26 (L14) 11.5 → 11.5; S27A–S29 (Gpr2) 12 → 12.2.
- Change: S12 and S13 8.9 → 10.1 mm. Fig. 1 draws L7 as a square-cut box (flat top from x 1403 to 1438, top 672.5,
  bottom 857, 92.25 px), slightly taller than L5 and L6; at 8.9 mm the render showed it shorter than L5. Canon's
  construction diagram also draws L5, L6 and L7 at one height. Edge thickness at the new rim is 3.84 mm; the S11→S12
  cross-gap check reads the shared band up to L6's 8.9 mm rim and is unchanged.
- L6 retained: its rear face S11 and L7's front face S12 meet at 9.5 mm across the 0.38 mm gap, and the 0.9 cross-gap
  rule admits at most 9.1 mm, so the drawn 9.6 mm apex cannot be modelled; 9.4 mm would need `gapSagFrac` 0.97 and
  leave 12 µm of air, which the ray trace does not require.
- Clearance after the change: real-ray trace at image heights 13.41 and 14.175 mm, all 37 zoom stations, at infinity
  and at focus keyframes 5 and 10: no axial clip and no blocked chief ray. At S12 / S13 the axial beam peaks at 6.66 /
  6.84 mm and the unvignetted wide-corner bundle at 9.78 / 9.41 mm (9.93 / 9.55 mm at close focus), now inside the
  rim; before, those faces trimmed 30 % / 17 % of the corner bundle's side. Validator clean, image-circle floor
  0 undersized, field coverage 37 of 37 stations at 100 %. Engine EFL 18.597 mm, F/3.6, stop radius 7.048 mm and
  half-field 33.04° (limited by S7) are unchanged, as is the wide-open wide-end vignetting curve (86.2 % at 29.8°,
  39.2 % at 38.8°).
- Live check: the local page at 18.6 / 49.94 / 193.23 mm and at infinity and closest focus shows L7 as the tallest
  member of L2, as Fig. 1 draws it, with no overlap against L6 or the stop.
- Maker diagram (Canon Camera Museum construction drawing): 16 elements in 12 groups with the same grouping; UD at
  L2 and L14, glass-moulded aspheres at L8 and L15, the IS box around L11–L12. Scaled to the front doublet it draws
  L3, L4, L8, L14 and Gpr2 within 2 % of the stored values, L5–L7 near 10.5 mm, Gis near 6.7 mm and L13 near 7.9 mm.
  It supports the L7 rise; for L5 and L6 it reads higher than Fig. 1, which governs.
- Open: Gis (S20–S22) stays 6.5 mm, 5 % under Fig. 1's 6.86 mm; the axial beam peaks at 6.28 mm there. L4's rear
  face S7 and L5 stay 5 % under the drawing.

## 2026-10-29 — Second review: diagram, labels and movement

Element names below are the new E1–E16; the two sections above use the old L1–L16 element names.

- Compared: the local page (wide, 49.94 mm, tele, closest focus at wide and tele, both motion overlays, and the
  inspector of E2, E8, E9, E14 and E15) against Fig. 1(a)–(c) on PDF p. 18, re-measured independently from a 400 dpi
  render (0.1103 mm/px, S1 at x 1117, S6 at x 1297, axes at y 767 / 1444 / 2118) and 800 dpi crops, the patent text
  (¶0033–0039, ¶0045, ¶0051–0069, ¶0082, ¶0097, ¶0102) and Canon's construction diagram.
- Silhouette, Fig. 1 vs stored (half top-to-bottom, isotropic): C1 box 29.4 vs 29.0; E3 24.7 vs 24.75; E4 13.15 vs
  13.25, drawn square-cut with a flat top and a flat rear land square to the axis at z ≈ 5.7 mm from S6; S7/S8 curves
  meet the land at 9.27 mm; E5 box 9.93 vs 9.4; E6 apex 9.62 vs 8.9; E7 box 10.17 vs 10.1; stop mark lower end 7.72 vs
  the 7.05 mm iris; E8 8.48 vs 8.5; C2 8.65 vs 8.5; Gis 6.95 vs 6.5; E13 7.72 vs 7.5; E14 11.58 vs 11.5; C4 12.19 vs
  12.0. Every element keeps its drawn height order. Edge shapes: C1, E3, E7, Gis, E13 and C4 agree with the drawing.
- One visible silhouette difference: E4 is drawn as a square block, while the site draws a taper from the 13.25 mm front
  rim to the 9.4 mm rear rim. S7 (R 13.369) cannot reach 13.25 mm as a sphere, and the coordinator owns
  `rimCutDepthMm`, so nothing was changed. A trial copy with S7 sd 13.25 and `rimCutDepthMm` 4.09 (cut radius 9.62 mm,
  land 5.29 mm behind S6) passes the surface validator with the default `gapSagFrac`; depth 4.08 fails the
  inferred-cut beam rule (beams reach 9.565 mm at wide, closest focus, 40.26°). With it the engine half-field goes
  33.04° → 33.66° and the wide-end vignetting curve at 38.8° goes 39.2 → 44.2 %; it is unchanged at 35.8° and below,
  inside the printed 36.29°, and at 0.33 and tele. Field coverage 37 / 37, image-circle floor 0 undersized.
- E5 retained at 9.4 mm (5.3 % under its drawn 9.93 mm, the same height order as the figure). Raising S8 / S9 to 9.9 mm
  passes the validator alone and leaves the meridional vignetting curve unchanged at every zoom position, but a
  later S7 rim cut combined with E5 at 9.9 mm would need `gapSagFrac` 0.96 (0.29 mm of air at E5's corner).
- Rear group: Gis reads 7 % tall, like the stop mark (9.5 %), so 6.5 mm stays; the rest agree within 3 %.
- Labels changed: element `name` L1–L16 → E1–E16, because the patent's groups are L1 and L2 and the inspector showed
  "Element 2 L2" while the "L2 (focus)" bracket sat over E4–E7. Roles now give the patent's element designations:
  E9 NGpf and E10 PGpf (¶0061; NLf and PLf in Fig. 1), E11 NGis and E12 PGis (¶0045; NL and PL), E14 PGpr1 (¶0056),
  with E15–E16 marked as Gpr2 (¶0051). The E13 role no longer says it is "fixed to" Gis: it keeps its spacing to Gis
  during zoom (¶0069) and does not shift for stabilization. Cross-references in the E1 and E16 roles, the focus text
  "(E4–E7)", the data header and the analysis follow the new names.
- Checked and correct: element types against the signs of R (16 of 16); aspheric markers only on S16A and S27A, the
  two starred surfaces; the stop between S13 and S15 with 0.57 mm to S15; group brackets L1 S1–5, L2 S6–13, Gpf
  S15–19, Gis S20–22, Gisr S23–24, Gpr S25–29; cemented brackets C1 S1–3, C2 S17–19, C3 S20–22, C4 S27A–29, with
  matching `cemented` values and no cement layer tagged; `focalLengthMm` on all 16; gap labels D5 / D13 / D19 / D24 /
  BF; station labels Wide / Tele; focus slider far end 45 cm. `apd: "inferred"` on E2 and E14 is right: Canon marks
  both UD, while the patent only bounds νPGpr1 (72–97) and names no special glass, so `"patent"` would not be.
  Canon's diagram: 16 / 12, UD at E2 and E14, aspheres at E8 and E15, IS box on E11–E12, the same layout.
- Zoom direction and order: stations ascend 18.6 → 193.23 mm and every gap array follows that order. Printed values
  are reproduced at nodes 0 / 12 / 36: D5 2.16 / 27.19 / 54.51 (grows, ¶0036), D13 24.99 / 13.41 / 2.85 (shrinks),
  D19 2.63 / 5.84 / 7.99 (grows, ¶0038), D24 6.00 / 2.79 / 0.64 (shrinks), D19 + D24 = 8.63. All are monotone. Front
  vertices from the image, wide → tele: L1 143.77 → 204.34, Gpf 83.86 → 114.22, Gn 71.61 → 96.61, Gpr 58.56 → 88.92,
  all toward the object. Gpf and Gpr both travel 30.36 mm, matching Fig. 1's straight arrows. L2 goes 123.91 →
  132.13 mm; the 400 dpi panels read 123.6 / 127.7 / 132.0 mm.
- Fig. 1's L2 arrow, traced at 400 dpi, starts at x 1355, bows 9 px toward the object (x 1346 at mid-height) and ends
  at x 1378 with its head pointing toward the image. It reads as a locus convex toward the object. The model instead
  dips 0.255 mm toward the image near 21.8 mm and then moves toward the object, still accelerating at tele (+0.18 mm
  over the last interval). The data header and analysis said the dip was "in line with" the arrow; both now say the
  dip comes from the derived cam. The gap values were not changed.
- Focus: index 0 is infinity and index 10 is the 0.45 m state. Only D5 and D13 change, by equal and opposite
  amounts (wide 2.16 → 1.24 / 24.99 → 25.91; tele 54.51 → 45.61 / 2.85 → 11.75), so L2 moves toward the object as
  ¶0082 prefers. The focus overlay at tele shows L2 alone moving 8.9 mm toward the object.
- Unchanged by this review: `sd`, engine EFL 18.597 mm, F/3.6, stop radius 7.048 mm, half-field 33.04°.
  Surface validator OK, 0 undersized, field coverage 37 / 37. At Y 12.88 mm the clearance trace gives ω 36.28° at
  wide with no clip or block.
- Pre-existing: at the app's 14.175 mm APS-C corner and closest focus at wide (ω 40.26°, beyond the printed 36.29°)
  the clearance trace reports S4 / S5 (E3, 24.75 mm) blocking the chief ray; at 13.41 mm it does not.
- Live page after the edits: the inspector reads "Element 14 E14", "Element 9 E9" with the NGpf role, and so on. The
  focus text shows "(E4–E7)". The diagram is unchanged: 18.6 / 49.94 / 193.23 mm and closest focus show no overlaps.
  The STO label overlaps the S16A "A" marker at every zoom position, which is renderer layout.

## 2026-10-29 — Coordinator follow-ups after the second review

- E4 (S7): `sd` 9.4 → 13.25 mm with an inferred `rimCutDepthMm: 4.09` (cut radius 9.6245 mm), so E4 draws square-cut
  with the flat rear land Fig. 1 shows. The drawn cap end (about 9.3 mm) sits inside the traced beams, so the land
  moved out to the beam reach (9.5626 mm at 18.6 mm, 0.95 focus, 40.17°) plus the 0.05 mm margin. The surface
  validator passes, the rim-cut probe clips no ray and finds none within the margin, and the engine half-field rises
  from 33.04° to 33.66° at 18.6 mm; EFL, F/3.6 and the 7.048 mm stop are unchanged.
- E8 and E15 relabelled from S-BAL42 to L-BAL42 (OHARA's moulding version of the same glass; |Δνd| 0.014 against
  0.025), matching Canon's glass-moulded aspherical elements. Both resolve with n(d) exact.
- Open: the second review traced Fig. 1's L2 arrow as bowing toward the object, while the derived cam dips 0.255 mm
  toward the image near 21.8 mm. The cam was left unchanged; its printed stations are exact and monotone. (Closed:
  cam rebuilt to follow the arrow, next section.)

## 2026-10-29 — L2 cam rebuilt to follow Fig. 1

- Arrow reading (`patents/JP2009175324A.pdf` p. 18, 200 and 400 dpi): Fig. 1 draws movement arrows only between
  panels (a) and (b); there are none between (b) and (c). The L1 arrow and the three rear arrows (Gpf, Gn, Gpr) are
  straight and point down-left, toward the object. The L2 arrow starts under L2 in (a), bows left (toward the object)
  to its leftmost point a little before half its length, and ends with its head pointing down-right, toward the image;
  its end lies right of its start, so it is a shape sketch, not a scaled displacement (the printed spacings move L2
  8.2 mm toward the object from wide to tele). Read as the wide-to-tele locus, it shows L2 moving toward the object,
  passing beyond its tele position and returning toward the image before the tele end. The previous cam had the
  opposite shape (a 0.255 mm dip toward the image near 21.8 mm, then steadily toward the object).
- Rebuild: same method (G1 position, D19 and image gap on monotone cubic Hermite curves through the printed values,
  D24 = 8.63 − D19, D5/D13 split solved for paraxial infinity focus), with the image-gap slope at the wide end ×2.4
  and the D19 slope at the wide end ×0.62 of their PCHIP values; every other slope, including all of the 49.94–193.23
  mm segment, is plain PCHIP. These were the smallest changes (least log-deviation from PCHIP) that remove the wide
  dip while keeping L2's slope toward the object at least 2 mm per unit zoom coordinate until its turn.
- New L2 track (S6 ahead of the image): 123.914 at 18.6 mm, 125.344 at 26.69, 127.917 at 49.94, 132.201 at 88.81,
  133.425 at 133.08 (the turn), 133.224 at 156.32, 132.790 at 174.40, 132.130 at 193.23 mm. One reversal, an
  objectward overshoot of 1.295 mm placed in the middle–tele segment. The size is not tuned: with the other curves
  left unbiased between 49.94 and 193.23 mm, infinity focus requires it (plain PCHIP everywhere gives 1.296 mm plus
  the wide dip). The patent prints no intermediate position, so the size is a model result.
- Turn counts from wide to tele, printed vs model: D5, D13, D19, D24, image gap, G1, Gpf, Gn, Gpr 0 / 0; L2 0 / 1
  (`turns.mjs`: group from S6 turns at node 26, extreme 133.425). `protcmp.mjs` against HEAD: no protected field
  changed, printed stations identical, 37 zoom and 11 focus nodes as before.
- Nodes: 37 zoom nodes kept (12 wide–middle, 24 middle–tele); node placement weights the interpolation-error density
  more (exponent 0.75 instead of 0.5) because the tele-end return is steep. Infinity defocus at most 0.0004 mm at
  nodes and 0.0165 mm between them; EFL rises monotonically along the slider (18.597 → 193.084 mm at infinity,
  17.860 → 87.562 mm at close focus). Close focus re-solved at every node: travel 0.918 / 2.070 / 8.898 mm and
  magnification 0.054 / 0.126 / 0.244 at the printed stations, distance-label error at most 4.8 % between keyframes.
  Interior F-numbers recomputed with the same iris-radius law (3.60 → 4.70 → 5.88, monotone, 0.01 steps).
- Checks: `audit:surface` OK; `audit:rim-cut-probe` (53 × 30 states) finds the E4 cut at 9.6245 mm clear, reach
  9.5626 mm at 18.6 mm, 0.95 focus, 40.17°, no ray clipped or within the 0.05 mm margin, so the cut is unchanged;
  `clearap.mjs` at Y 13.41 and 14.175 reports no axial clip and no blocked chief ray (axial beam at S20 at most
  6.39 mm against 6.5); `audit:image-circle` 0 undersized; `audit:field-coverage` 37 / 37 stations at 100 %;
  `built.mjs` EFL 18.5966, F/3.6, stop 7.048 mm, half-field 33.66°, unchanged from HEAD. Header and analysis cam text
  rewritten to describe the new L2 track.

## 2026-10-30 — Reused source coverage and runtime/qualification follow-up

**Coverage clarification:** original shape/glass and independent cut coverage is reused from the completed **2026-10-29** reviews above. The 2026-10-30 additions record explicit d-reference provenance, prose qualification and expanded runtime sampling with unchanged numerical geometry, controls and compatible curves. They add no fresh source-review count; the useful 52,020,664-ray evidence below remains intact.

- Selected-original coverage retained from the 2026-10-29 review: `patents/JP2009175324A.pdf`, Numerical Example 1, ¶0092–0097 and the unnumbered prescription/variable-gap/asphere tables pp. 12–13; Fig. 1(a)–(c) p. 18 and Fig. 2A–C pp. 18–19. Front-page filing/publication 2008-01-23 / 2009-08-06, inventor Makoto Misaka and Canon Inc. confirmed. Actual earlier review dates above are preserved.
- Native figure: 1070 × 1002 JPEG, approximately 200 ppi; about 0.220–0.222 mm/native pixel from the 105.58 mm wide vertex span. Two-pixel contour uncertainty is about 0.44 mm, with additional small rear-scale ambiguity. Earlier 400/800 dpi renders are approximately 2×/4× upsampling. Fresh 200 dpi text renders independently checked the printed R/d, all 16 Ni/νi, both starred aspheres and four variable gaps; no prescription/control value changed.
- Shape disposition: retained all twelve connected component outlines after examining every element, concave end, bond and actual SVG at source wide/middle/tele and focus 0/0.5/1. The detailed source/adopted-height table is in the analysis review section. No hybrid layer or source camera plate exists in the selected example. Front mechanical outline, leaders, movement arrows and brackets were excluded. No new outer shoulder is resolved beyond uncertainty; no interface land or unsupported common-height block was invented.
- Rejected fresh trials: E5 S8/S9 9.9 mm gives S7→S8 combined sag 5.690 > 5.382 mm allowed in D7 5.980 mm. E6 S10/S11 9.6 mm gives S11→S12 about 0.39 > 0.342 mm allowed in D11 0.380 mm. S7 without the cut at 13.25 mm gives 82.3° rim slope > 64.2° unchanged threshold. Retain E5 9.4, E6 8.9 and source R/d.
- S7 cut provenance: existing 4.09 mm depth / 9.6245 mm cap radius is inferred from the squared silhouette plus runtime clearance. The original gives no numerical depth. **No `rimCutDepthSource` is present**, and no exemption is claimed. A separate full adaptive rim-edge supplement uses scratch Gaussian finite conjugates at all 97 × 30 states, scans at least the inferred finite-object generic-APS-C corner, and finds reach 9.537617988 mm at wide/infinity versus radius 9.624464660 mm and required 0.05 mm margin, with no untraced field. These inferred finite launches are not published source conjugates. Independent dense probes use grid 41 and 0.5° field steps, with the cut removed while defining the admitted beam. The standard authored/0.05-control union covers 53 zoom × 30 focus states and 24,520,877 beam rays; a complementary 60 zoom × 30 focus probe adds every missing 1/64 zoom sample and 27,499,787 rays. Together the 113 × 30 control union includes every 37-station/65-grid zoom plus 16 extra 0.05 samples: 52,020,664 beam rays, zero clipped, zero within margin, zero untraced. Global refined dense reach is about 9.5626 mm at wide, focus 0.95, field 40.169°, below 9.624464660 − 0.05 = 9.574464660 mm. The complementary probe peaks at 9.528010081 mm. The canonical dense probes use collimated launches where no source finite conjugate is published; the Gaussian finite supplement above independently covers inferred finite-object beams.
- Glass disposition: ¶0092 p. 12 explicitly defines d-line Ni/νi. All 16 literal pairs checked and now explicitly tagged `indexReference: "d"`; 16 compatible catalog curves retained only as qualified proxies. The whole source was checked for C/F/g lists, partial-dispersion or APD data, filters/rear plates and layers: none is supplied for this example beyond d pairs and ν constraints. Zero spectral overrides existed/removed/added. E2/E14 UD/APD remains inferred from the earlier qualified product-position correlation. No supplier, melt, chemistry, resin or molding process is identified by a curve code; analysis corrected those implications.
- Current-state iris / controls: 97 zoom positions (37 authored union 65 uniform) × 30 focus values (11 authored cubic union 21 uniform), 2,910 states and 427,770 aimed rays at axial/60%/full generic APS-C field. All 142,590 axial rays and 8,730 chiefs pass; zero unaimed. Source-station infinity 49-ray bundle counts 49/46/24, 49/46/26, 49/45/24; inferred close 49/46/26, 49/46/26, 49/46/19. All 16 actual SVG paths finite/closed/connected, zero hidden trim. All source/control data retained, including the inferred image gaps, interior cam and 11-keyframe finite-focus track.
- Separate 65-position infinity census: no aperture departure >3%; maximum sampled paraxial residual −0.016255613 mm at zoom 0.015625. Source half-fields 36.29/15.30/4.04° reach 12.883586/14.219619/13.969857 mm (90.89/100.31/98.55% of generic APS-C). Source-field coverage, sampled runtime-format clearance and production correlation are separate. Inferred closest object-to-image conjugates 449.991665/449.999586/450.003804 mm. Centered IS only; finite/interpolated aberrations and factory cam remain unverified.
- Narrow checks: canonical surface/beam rule passed; image-circle 0 undersized; stated on-axis aperture 0 undersized surfaces; field coverage 37/37 source/authored stations reaches the runtime format corner. These do not establish manufacturing dimensions or production image quality. Independent dense cut probes and the separate finite adaptive supplement also pass with the original 0.05 mm margin; no tolerance or engine change.

## 2026-10-31 — Positive d-reference annotation correction

- Scope: reference-field contract only; reuse the completed 2026-10-29 whole source/shape/cut work and the 2026-10-30 reuse/runtime follow-up. No whole-review count or new shape measurement.
- Exact source reinspection: **JP 2009-175324 A, Numerical Example 1**. ¶0092 p. 12 explicitly defines Ni/νi at d; all 16 material pairs appear on pp. 12–13; Fig. 1(a–c) is on p. 18. The original d-line definition and selected prescription are PDF text, read in fresh 200 dpi page renders. Fig. 1(a–c), p. 18, is an embedded 1070 × 1002 JPEG at approximately 200 ppi; render enlargement adds no native detail.
- Removed only the 16 repeated positive d-line citations from the uncertainty-only `indexReferenceNote` field. Their provenance is preserved in the data header and analysis. Every `indexReference: "d"` remains. The previous annotations incorrectly selected `n (source)` / `ν (source)` inspector labels despite the explicit d definition.
- No actual uncertain-reference or rounding note was removed. Source pairs, genuine partials/line indices, APD, curve identities, R/d/sd, rim fields and all controls remain identical. Four compiled channel indices and sampled state geometry are checked against the frozen baseline; compatible-curve counts are unchanged. Existing source/clearance/production limitations remain; no new historical supplier, melt or chemistry is identified.
