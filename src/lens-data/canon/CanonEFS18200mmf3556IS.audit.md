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
