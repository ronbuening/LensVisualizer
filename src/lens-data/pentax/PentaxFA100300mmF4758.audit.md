# PENTAX SMC FA 100-300mm f/4.7-5.8: audit log

The source package carried no audit log; this file starts at deployment validation.

## 2026-10-29 — Deployment validation and wording pass

Source: US 2001/0006433 A1 (Hiroyasu Ozaki; front page assignee ASAHI KOGAKU KOGYO KABUSHIKI KAISHA, catalogued as
Asahi Kogaku Kogyo Co., Ltd.), filed 2000-12-26, published 2001-07-05, JP priority 1999-12-27. Embodiment 1, Table 1
(PDF p. 19), section Fig. 1, group motion Fig. 13, focusing ¶0058. Local copy: `patents/US20010006433A1.pdf`.

Source re-read: 20 radii plus the diaphragm row, every thickness, 11 N/ν pairs, the header (FNO 4.8-5.3-6.0,
f 103.00-160.00-290.04, W 11.8-7.5-4.2, fB 49.71-57.08-69.77) and the three variable gaps (D6, D11, fB) at three states
were checked against the page image; no mismatches. No aspheres, no cover-glass plate, no close-focus table. Table 4
conditions (1) 0.704, (2) 1.774, (3) 0.195 and (6) −0.803 reproduce; (2) is (1.744 + 1.804) / 2.

First order, patent → model (wide/middle/tele): EFL 103.00/160.00/290.04 → 103.0008/160.0067/290.0427 mm; printed fB
49.71/57.08/69.77 against paraxial BFD 49.7104/57.0828/69.7631 mm (printed planes kept); f/4.8/5.3/6.0 as the iris
schedule; chief rays at the printed 11.8/7.5/4.2° land at 21.71/21.59/21.88 mm. G2 sits 143.149/143.148/143.153 mm
ahead of the image plane, stationary as Fig. 13 shows. The 65-position zoom keeps the three printed states at indices
0/32/64.

Close focus: closeFocusM is now the published 1.5 m (was a calculated 1.497108 m). A paraxial check at 290 mm moving
G1 forward 19.15 mm focuses at 1.500 m object-to-image with 0.259× (0.26× is reached at 1.497 m, 19.21 mm), consistent
with ¶0058 front-group focusing. The model stays infinity-only.

Production match: Pentax lists product 27610 as 11 elements / 9 groups with a 58 mm filter and 0.26×; published product
data (Imaging Resource, Lenstip) add 1.5 m minimum focus, 24.5–8.2° and f/32. Fig. 1 shows 3 + 3 + 5 elements in 9 air-separated groups with no special-dispersion glass. 103-290 mm f/4.8-6.0
against the marketed 100-300 mm f/4.7-5.8 is ordinary rounding. Embodiments 2 and 3 share the layout and neither fits
better. No Pentax construction diagram was found, so there is no maker-diagram comparison for the element outlines.

Clear apertures: S9 and S10 approach to 0.057 mm at 12 mm height and meet at 12.13 mm, so S10 stays at 11.5 mm. At
290 mm the S10 rim limits the axial beam to f/6.28 (largest passing entrance height 23.094 mm against the paraxial
24.170 mm; 91.3% of the area); the independent check quoted about f/6.25. Kept as a stated limitation; no rim changed.
Corner transmission wide open at the printed half-angles: 55.8/52.2/46.8%. All 11 glasses resolve to catalog Sellmeier
data (Ohara equivalents, supplier unconfirmed).

Fields changed in this pass: data header comment rewritten in plain terms with the same facts; subtitle → "US
2001/0006433 A1, Embodiment 1 — qualified production correlation"; specs → 11 ELEMENTS / 9 GROUPS, DESIGN f =
103.00–290.04 mm, DESIGN F/4.8–6.0, ALL SPHERICAL; focus description rewritten for the 1.5 m figure; element names
10a/10b/10c/20aN/20aP/20b/30a/30bP/30bN/30c/30d → L1–L11 with labels "Element 1"–"Element 11" and matching
diagramLabel; short roles added; doublet and cemented names D2a/D3b → C1/C2. The analysis lost its process wording,
test-case counts and the incorrect statement that color MTF is unavailable for unmatched glasses; its verification
section is now "Model Scope and Limitations". Engine output (EFL, f-number, half-field, stop radius, BFD, focus
keyframes) is identical before and after; the surface audit reports OK.

Open: compare the estimated semi-diameters with a Pentax construction diagram if one turns up.
