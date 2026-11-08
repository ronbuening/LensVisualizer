# Source and inference audit — SMC Pentax 24mm f/2.8 (US 3,938,883)

## 2026-11-06 — Package history

Source: US 3,938,883 (Yasuo Takahashi, Asahi Kogaku Kogyo, granted 17 February 1976), the sole example in column 3, repeated in the claim, with Fig. 1 and Fig. 2. Printed at F = 100 and 1:2.8, with d-line indices and Abbe numbers. All surfaces spherical.

- Scaling: the package first held the prescription at F = 100, then rescaled it uniformly by 24/100 = 0.24, using the printed F rather than the traced EFL. Every R, d, inferred `sd`, the stop split and the image distance scale together; nd and νd do not. The traced EFL of 23.9937 mm (99.974 at F = 100) was kept, not refitted. r16 = 34680.0 stays curved (8323.2 mm).
- Printed vs derived: R, d, nd and νd are printed. The final gap, 39.981 mm, is the computed paraxial back focus (166.588 at F = 100); the patent's only back-focus figure is the abstract's "about 1.6 times" the focal length. The stop is inferred: of quarter, midpoint and three-quarter positions in d9, the three-quarter one (3.33 + 1.11 mm, z = 21.57 mm) was chosen for chief-ray clearance before any image-quality trace. All `sd` values are inferred from Fig. 1's shapes, a tapering L2, paraxial envelopes and rim and edge-thickness limits; they were not calibrated to the figure.
- Rim variants: rims 5 % larger failed the L4 and L8 edge thickness, the r4 rim slope and cross-gap clearance, and were rejected. Rims 5 % smaller passed but cut more corner light (valid/blocked pupil samples at 0/21/42°: 208/0, 188/20, 108/100 for the chosen rims; 208/0, 178/30, 74/134 at −5 %).
- Focus: static at infinity, `focus.closeFocusM` = 1e15; the maker's 0.25 m was not authored as a state.
- Field: the maker's 84° and Fig. 2's 42° half field were used as the operating field.
- Identity: the package treated the lens as a probable design-family association, based on the 9-element, 8-group count and a section drawing in an Asahi Pentax lens brochure that the package did not include.

## 2026-11-08 — Deployment validation and production cleanup

Source re-read: page images of US 3,938,883 at 200 dpi, PDF page 4 (column 3 table and the claim's table). All 17 radii, 16 spacings and 9 nd/νd pairs agree with the file: each file length divided by 0.24 equals the printed value. No mismatches. The PDF text layer misreads r17 as −46.9 and n7 as 1.8058; the page image prints −146.9 and 1.80518, as the file has. The claim's table agrees with column 3.

Patent vs model (printed at F = 100, model at × 0.24):

| Quantity | Patent | Model |
| --- | --- | --- |
| EFL | F = 100 (24 mm scaled) | 23.9937 mm (99.974 at F = 100, −0.026 %) |
| F-number | 1:2.8 | 2.80; stop radius 5.763 mm, entrance pupil radius 4.285 mm |
| Back focus | about 1.6 F | 39.981 mm = 1.666 F (paraxial; the image plane) |
| Vertex span | 195.4 | 46.896 mm; 86.877 mm to the image |
| Half field | 42° (Fig. 2) | declared 42°, lands at 21.03 mm (97 % of 21.65 mm); corner 42.8°, clear |
| Distortion at 42° | about −2.7 % (Fig. 2(c)) | −2.66 % |
| Spherical aberration | zonal undercorrection (Fig. 2(a)) | +0.111, −0.110, −0.176, −0.136 mm at pupil 1, 0.85, 0.7, 0.5 |
| F1 / F1–5 / F1–6 | 571.4 / −65.4 / 149.3 | 572.06 / −65.28 / 149.01 at F = 100 |

Conditions (1) to (5) all hold: n3 − n4 = 0.1132, ν3 − ν4 = 12.1, (n8 + n9)/2 = 1.60994, (ν8 + ν9)/2 = 57.05. The text has three slips that touch no data: the claim's condition (2) lacks the absolute-value bars of column 2, the condition (4) discussion says F/0.55 for F/0.6, and the condition (5) discussion says 1.55 for 1.5.

Maker-diagram comparison: no Pentax cross-section of the 24mm f/2.8 was available, so the element shapes were not compared with the production lens. Against the patent's Fig. 1 (page 2 at 300 dpi, about 19.1 px/mm from the 46.896 mm vertex span, vertical scale assumed equal to axial), half-spans read L1 about 19.3 mm (model 19.2), L2 front 13.5 (13.2), L6 7.6 (7.92), L7 7.6 (8.4), L8 8.9 (10.08) and L9 10.1 (12.0). The front group fits; the rear group stands 0.3 to 1.9 mm wider than drawn. Axial marginal heights at F/2.8 on r10 to r17 are 6.48, 7.19, 6.85, 7.07, 7.19, 7.47, 7.42 and 7.40 mm, so the figure's rims would still pass the axial beam. At the full-frame corner (Y = 21.63 mm, 42.75°) the bundle is clipped on r10 to r17, most at r13 (66 % of one side); nothing clips the axial beam or blocks the chief ray, and the lower rim ray was not found.

Product: Cine Lens Wiki (cinelenswiki.com/lens:pensmc24mmf2.8) gives introduction in 1977, production to 1984, 9 elements in 8 groups, 84°, 0.25 m (0.12×), 52 mm filter, five blades, f/22 and 194 g, and says the SMC Pentax-A 24mm f/2.8 keeps the same optical formula. The release year is 1977, not 1975; 1975 is the year of the K mount. The patent's 1:2.8 separates this design from Asahi's slower 24 mm lenses. With no maker section drawing, the association is plausible to moderate.

Glass: each label matches the printed nd to five decimals and νd within 0.3, and all nine resolve as compatible.

| Element | Printed | Label | Δνd | Note |
| --- | --- | --- | --- | --- |
| L1 | 1.71300 / 54.0 | LAC8 (HOYA) | −0.06 | S-LAL8 (1.71299) misses the fifth decimal |
| L2 | 1.62041 / 60.3 | S-BSM16 (OHARA) | −0.01 | N-SK16 (+0.02) also fits |
| L3 | 1.78590 / 44.2 | S-LAH51 (OHARA) | 0.00 | |
| L4 | 1.67270 / 32.1 | SF5 (Schott) | +0.11 | S-TIM25 (0.00) also fits; legacy lead flint, as SF6 on L7 |
| L5 | 1.64250 / 58.4 | S-BSM36 (OHARA) | −0.03 | |
| L6 | 1.74320 / 49.4 | S-LAM60 (OHARA) | −0.06 | N-LAF35 (1.74330) misses |
| L7 | 1.80518 / 25.4 | SF6 (Schott) | +0.03 | the 18mm f/3.5 uses SF6 for the same pair |
| L8 | 1.52307 / 58.4 | C12 (HOYA) | +0.24 | only catalog row at 1.52307 |
| L9 | 1.69680 / 55.7 | S-LAL14 (OHARA) | −0.17 | K-LaK14 (Sumita, −0.04) also fits |

Fields changed in this pass:

- `key` `pentax-smc-k-24mm-f28-scaled-patent-reconstruction` → `pentax-smc-24mm-f28`, the house form of `pentax-smc-18mm-f35`.
- `name` "PENTAX SMC K 24mm f/2.8 — scaled patent-family reconstruction" → "PENTAX SMC PENTAX 24mm f/2.8".
- `subtitle` → "US 3,938,883, sole example — F = 100 design scaled 0.24× to 24 mm; probable production correlation".
- `catalog.specs`: 13 lines of process notes → "9 ELEMENTS / 8 GROUPS", "DESIGN f = 24 mm", "DESIGN F/2.8", "ALL SPHERICAL", "SCALED FROM f = 100".
- `catalog.closeFocusM.marketing` 0.25 added. `focalLengthMm.design` stays 24, the printed F = 100 × 0.24 (LENS_DATA_SPEC item 9).
- `focus.description` rewritten in plain terms; `focus.closeFocusM` stays 1e15, since the patent prints no finite state.
- Elements: labels "Source element n" → "Element n"; boilerplate roles replaced; L9 type "Positive nearly Plano-Convex" → "Biconvex Positive" (r16 > 0, r17 < 0); `focalLengthMm` added; the nine `Unmatched` glass strings → the labels above; `cemented: "C1"` on L3 and L4.
- `groups` FRONT (surfaces 1–9, the patent's front group) and REAR (10–17) added; `doublets` C1 (5–7) added.
- Header comment rewritten as the house block. Analysis rewritten to the LENS_ANALYSIS_SPEC skeleton with the conditional expressions, product sources and the 1977 date. This log condensed.
- No R, d, nd, νd, `sd`, stop or image-plane value changed. First-order values before and after are identical (EFL 23.9937 mm, F/2.80, BFD 39.9811 mm, stop radius 5.7626 mm, half field 42°).

Checks after the edits: the surface audit reports no validation errors; the aperture audit puts the lens within 3 % of its stated f-number with no rim, trace or iris failure; the image-circle audit does not flag it; field coverage is 97 %, stopped by the declared 42° field.

Open: the rear rims (L6 to L9) stand wider than Fig. 1. Narrowing them toward the figure would keep the axial beam but cut corner light; that needs the patent-figure rim procedure and was not done here.

Open: no maker cross-section has been compared. The Asahi Pentax lens brochure cited for the 18mm f/3.5 (cameramanuals.org) may hold a 24mm f/2.8 section; the package notes placed one on its p. 3 and the specification table on p. 11. A comparison would firm up or weaken the association.

Open: the stop position is inferred. A Pentax drawing showing the iris would settle it.
