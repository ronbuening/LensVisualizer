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

## 2026-10-29 — Semi-diameter pass against the patent figure

Source: `patents/US20010006433A1.pdf`, PDF p. 2 (Sheet 1 of 14, Fig. 1, Embodiment 1), a 1-bit scan of 2320 × 3408
px measured at native resolution. The optical axis runs up the sheet with the object at the bottom and leans about 0.33°
across the figure, so each rim was read as the full width between the two drawn rim edges and halved; the axis
position does not enter. The front-page drawing (PDF p. 1) is the same section at a smaller scale, with the axis across
the page, and was read as a cross-check. No Pentax construction diagram was available (the deployment validation above
found none), so there is no maker-image comparison.

Scale: vertex crossings read beside the axis follow the wide-state (103 mm) spacings. S1 to S20 is 2079.5 px for
122.308 mm and S7 to S20 is 1588.5 px for 93.439 mm, both 17.00 px/mm (58.8 µm/px); S1 to S16 gives 16.97 px/mm. The
drawn D6 (14.35 mm) and S11-to-S12 span (22.76 mm) match the wide values 14.662 and 22.706 mm, so Fig. 1 is the wide
state. On the front page S1 to S20 is 1340 px (10.96 px/mm) and L1 reads 25.42 mm against 25.46 mm on p. 2, measured
across the other scan direction, so the scan has no measurable aspect error.

| Element | Surfaces | Stored sd (mm) | Fig. 1, p. 2 (mm) | Ratio | Front page (mm) | Result |
|---|---|---|---|---|---|---|
| L1 | 1, 2 | 25.5 | 25.46 | 1.00 | 25.42 | kept |
| L2 | 3, 4 | 24.9 | 24.82 | 1.00 | — | kept |
| L3 | 5, 6 | 24.2 | 24.19 | 1.00 | — | kept |
| L4 | 7, 8 | 13.0 | 13.00 | 1.00 | 12.96 | kept |
| L5 | 8, 9 | 13.0 | 13.0 (rim edge continues L4's) | 1.00 | — | kept |
| L6 | 10, 11 | 11.5 / 12.3 | 12.46 square (12.65 one side, 12.26 the other) | 0.92 / 0.99 | 12.44 | kept; S10 raise proposed |
| L7 | 12, 13 | 13.1 | 13.09 | 1.00 | — | kept |
| L8–L9 | 14, 15, 16 | 13.0 | 13.04 | 1.00 | — | kept |
| L10 | 17, 18 | 10.2 | 10.16 | 1.00 | — | kept |
| L11 | 19, 20 | 10.5 | 10.54 | 1.00 | — | kept |

Every element except L6 agrees with the figure to within 2%, inside measurement noise, so no value moved. The figure
draws L6 with a square rim at about 12.45 mm on both sheets and draws r9 and r10 meeting at that rim. In the
prescription the two faces meet at 12.13 mm; the drawn S9–S10 axial gap is about 2.97 mm against the printed 2.684 mm,
so the drawn faces meet farther out. S11 at 12.3 mm is within 1.5% of the figure and clears its 12.26 mm axial need.

S10 is the one clearance defect. The real-ray trace puts the f/6.0 axial marginal ray at 12.04 mm on S10 at 290 mm, so
the stored 11.5 mm clips it (traced f/6.25 by the repo aperture census, about f/6.28 from the largest passing entrance
height; engine on-axis transmission at 290 mm 89.1%). The census's least raise rounds to 12.0 mm, but a trial at 12.0
still clips in the trace (on-axis transmission 97.4%). At 12.1 mm the trace is clean, the census puts all 65 stations
within 3% of the stated f-number, and on-axis transmission is 99.0%, the same as at 12.12 mm, so only the iris limits
the beam. At 12.1 mm the faces stay 0.012 mm apart (combined sag 2.672 of 2.684 mm, fraction 0.9954), so the cross-gap
check refuses it at the default 0.9 and at 0.99; the smallest two-decimal `checks.gapSagFrac` that admits it is 1.00
(12.0 mm would need 0.98). Changing `gapSagFrac` is outside this pass, so S10 stays 11.5 mm here. The proposed fix is
S10 12.1 mm with `checks.gapSagFrac` 1.00, naming the S9/S10 pair in the header. A scratch copy with both changes passes
the surface validator, the image-circle floor and full field coverage, with half-field, f-number and stop radius
unchanged.

Clearance as filed: the surface validator reports no errors; the image-circle check finds no undersized surface; field
coverage is at least 99% at all 65 stations, with corner chief rays clear at 11.8°, 7.5° and 4.2°. The trace shows no
blocked chief ray. Engine half-field is 13.33°/9.05°/5.70°, f-number 4.8/5.3/6.0 and wide stop radius 12.618 mm, all
unchanged. Wide-open transmission is 100% on axis at 103 and 160 mm and 89.1% at 290 mm. At the printed half-angles it
is 55.8%, 52.2% and 46.8% (47.0% at 290 mm with the proposed S10).

Live check: screenshots at 103, 160 and 290 mm, and at 290 mm with focus at 1, show the Fig. 1 proportions: G1 about
twice the height of G2 and the front of G3, and the rear pair smallest. Focus repeats the infinity spacings, so the
focus-1 frame matches infinity. The one visible difference is L6, rendered tapered from 11.5 to 12.3 mm where the
figure draws a square rim level with L5.

Open: S10's rim limit at 290 mm stays until the proposed S10 and `gapSagFrac` change is applied.

Coordinator follow-up (same day): S10 raised from 11.5 to 12.0 mm, the least value the repo's aperture audit asks
for at 290 mm; Fig. 1 draws L6 square at about 12.45 mm, which the prescription cannot reach because S9 and S10 meet
at 12.13 mm. The S9→S10 air gap then needs `checks.gapSagFrac` 0.98 (0.97 is refused: 2.63 mm combined sag against
2.603 mm allowed of 2.684 mm). Tele on-axis transmission rises from 89.1% to 97.4%; all 65 stations are within 3% of
the printed f-number. Engine half-field, f-numbers and stop radius are unchanged.
