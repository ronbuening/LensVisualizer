# Pentax-A 28mm f/2.8 source audit

2026-11-09: Whole US 4,468,100 A Example 1 independently compared with original PDF table pixels. All fourteen signed radii, thirteen spacings and seven nd/Vd pairs retained literally. Explicit d-line definition verified in printed column 3. Manufacturer printed page 36 supplies a named seven-single-element section and iris region, not numerical clear apertures or iris location. Preferred whole-example family association remains probable, with Example 2 unexcluded. No F28 duplicate.

Initial mechanical hypothesis: iris at d6 midpoint and estimated paired caps [15, 12, 9.5, 8.5, 7.5, 8.5, 9.5] mm. Geometry and performance check pending (closed: see the native update below). Source plane z=80.51 mm retained; no optical fitting or geometry override.

Native update: initial paired caps failed rim slope at S2 and gap intrusion S10/S11. L1 reduced to 14.9 mm and L5 to 6.45 mm. Default 90 % geometry and zero-trim render pass, iris stroke in air, actual aperture f/2.8 limited by STO. Integration pending (closed: integrated 2026-11-09).

## 2026-11-09 — Deployment validation

Independent check against US 4,468,100 A Example 1 (col. 4 table, claim 2 copy): 14 R, 13 d, fB 36.79 and 7 nd/νd
pairs agree. Engine EFL 28.776 (printed 28.78), F/2.8, ω 37.6°; all seven conditional expressions reproduce.
Front page: Asahi Kogaku Kogyo, inventors Itoh and Arai, priority 1981. Attribution strong: the maker's A-lens
booklet section (7 singlets, iris between L3 and L4) fits Example 1's spacings within 0.55 mm, while Example 2
misses by up to 1.7 mm. `audit:aperture` passes.

Deployment change: none.

Open: the maker section draws L5 about 7.9 mm and the iris about 4.3 mm behind S6 (the file uses 6.45 mm and the
d6 midpoint); glass labels (exact catalog rows exist); wording. (Glass labels and wording closed in the cleanup pass
below; the L5 rim closed in the semi-diameter pass below; the iris position stays open.)

## 2026-11-09 — Cleanup and wording pass

Data file: header comment rewritten in plain technical English with the same facts, plus the maker-section comparison
and the S9/S10 and iris findings. Subtitle now names Example 1 and calls the match strong. Specs changed to the house
lines (elements/groups, design f = 28.78 mm, design F/2.8, all spherical). `catalog.closeFocusM.marketing` 0.3 added
from Pentax's A-lens booklet table (printed p. 33). The focus block is static at infinity (`closeFocusM` 1e15) with a
plain description replacing the 0.3 m entry, which never moved the optics because the patent prints no close state.
Seven glass labels changed from "Unmatched" to exact OHARA equivalents, each within the printed precision and checked
to resolve to its row: L1 S-BAL35, L2 S-BSL7, L3 S-LAM51, L4 S-BSM25, L5 S-TIH14, L6 and L7 S-LAL13. Roles added to
all seven elements. R, d, nd, νd, sd, stop position and patent fields unchanged; no `apd` (no special-dispersion
glass); `blades` not set (the five-blade figure is third-party, not in the maker table).

Analysis: process material removed (verification-status section with test counts, MTF grid notes, heap sizes and
best-focus diagnostics). Corrected the statement that the maker section gives no iris position: it draws the iris
about 4.3 mm behind S6. Added the identification list with the maker-section spacing comparison, why Example 2 fits
worse, the reported formula sharing with the second Pentax-M 28mm f/2.8 (CineLensWiki), the retail specification,
the conditional-expression table, catalog-equivalent glass table, clear-aperture readings from both drawings, and
model limits.

Engine numbers before and after: EFL 28.7758 mm, FOPEN 2.800, half-field 37.6°, stop radius 7.2439 mm, BFD 36.7948 mm,
TL 80.51 mm; only `focus.closeFocusM` changed (0.3 to 1e15). Wide-open transmission at the 37.6° edge is 49.5 %.

Open: S9/S10 rims (6.45 mm) are smaller than the maker section (about 7.9 mm) and Fig. 1 (about 7.0 mm, flat rear
land against L6); at a real-ray f/2.8 entrance pupil the S10 rim sits 0.13 mm inside the axial marginal ray, while at
the engine's paraxial stop it clears by about 0.2 mm. Widening L5 needs a flat land on S10 to respect the 1.19 mm gap
to L6. The maker section draws the iris about 4.3 mm behind S6, close to L4; the model keeps the d6 midpoint
(2.31 mm). Neither was changed in this pass. (L5 rim closed in the semi-diameter pass below: Fig. 1 draws no land on
S10; the iris position stays open.)

## 2026-11-09 — Semi-diameter pass against the patent figure

Source: patents/US4468100A.pdf, sheet 1 (PDF page 2), Fig. 1 (Example 1), a 1-bit scan measured at its native 72 dpi
raster. The optical axis is drawn tilted by 1.33° (fitted line, 186 points, residual under 1.2 px); heights were taken
perpendicular to it. Scale 18.8 px/mm from the S1 to S14 vertex span (823.5 px for 43.72 mm), checked on S1–S9
(18.80), S3–S12 (18.79) and S2–S8 (18.70). The drawing places S7 about 0.7 mm late (L4 drawn about 4.0 mm thick
against the printed 4.75 mm, d6 about 5.1 mm against 4.62 mm, as Pentax's section also does); the printed table is
kept, since it reproduces the printed f and fB and the drawn spacings do not. Arc fits give a vertical/axial ratio of
0.97–1.01 on the rear faces and 1.04–1.07 on the front menisci, so the readings carry about ±5 %. Each rim was read
above and below the axis (line centres); the two sides agree within 0.25 mm.

| Surface | Before (mm) | Fig. 1 (mm) | After (mm) | Evidence |
|---|---|---|---|---|
| S2 | 14.9 | 13.0 (12.9–13.1) | 13.0 | Curve ends at a chamfer; full-field beam 12.57 mm |
| S4 | 12.0 | 10.4 (10.3–10.45) | 10.4 | Curve ends at a chamfer; full-field beam 10.20 mm |
| S9 | 6.45 | 7.1 | 6.8 | L5 square-cut; contact with L6 by prescription at 6.84 mm |
| S10 | 6.45 | 7.1 | 6.8 | Rear rim meets S11 in Fig. 1; real-ray f/2.8 marginal 6.58 mm |
| S11 | 8.5 | about 7.1, then a bevel to 7.9 | 7.2 | Ends at L5's rim; 7.2 keeps the traced field at 38.76° (7.0 gave 38.13°) |
| checks.gapSagFrac | 0.9 | | 0.99 | S10/S11 intrusion 1.1776 of 1.19 mm at 6.8 mm; faces do not cross below 6.84 mm |

Retained, within about 8 % of the figure: S1 14.9 (15.3), S3 12.0 (11.6), S5/S6 9.5 (9.4, S6 chamfer 8.8), S7/S8 8.5
(8.1), S12 8.5 (L6 tip 7.9), S13/S14 9.5 (9.5). Fig. 1 draws no land on S10: the horizontal stroke is L5's edge, and
its rear face runs to the corner where it meets L6, so the earlier reading of a flat land was wrong.

Clearance and light: no CLIPS-AXIAL or BLOCKS-CHIEF at Y = 21.63 mm (S10 cleared the real-ray f/2.8 marginal ray by
-0.13 mm before, +0.22 mm now). Rim slope, edge thickness and gap checks pass; the f/2.8 axial beam is stop-limited.
Engine EFL 28.7758 mm, F/2.8, half-field 37.6°, traced half-field 38.76°, stop radius 7.2439 mm, all unchanged;
the corner chief ray reaches 21.63 of 21.65 mm. Wide-open transmission rises at every field and loses at none
(37.6°: 49.5 → 53.9 %; 20.2°: 75.7 → 80.5 %); the S2 and S4 cuts cost 0.0 points, and S11 at 7.2 costs 0.0. Live check
done at infinity, the only state; the overlay of the model on Fig. 1 matches each element's outline within the
reading's noise.

Second check, Pentax's A-lens booklet section (printed p. 36): seven single elements in seven groups, iris between L3
and L4, no aspherical or special-dispersion element marked. Its widths (L1 16.0, L2 12.5, L3 10.0, L4 8.6, L5 7.9,
L6 8.7, L7 10.2 mm) keep the same order as the model; it draws L1 and L2 square-edged without chamfers and L5 wider
than its contact with L6 allows.

Open: the iris position (maker section about 4.3 mm behind S6; model at the d6 midpoint).

## 2026-11-09 — Second review: diagram, labels and movement

Compared the live page (infinity; the lens is static) with Fig. 1 of US 4,468,100 at its native 72 dpi raster. The
scale was re-proved on a fresh render: axis tilt 1.33°, S1 to S14 vertex span 823.5 px for 43.72 mm (18.8 px/mm), L5
edges at 760.5 and 1028 px (7.1 mm). Element order, heights and the L1/L2 chamfers, square L5 meeting L6 and bevelled
L6 match the figure within the reading error; no rim moved.

| Face | Baseline | Final | Fig. 1 | Light cost | Verdict |
|---|---|---|---|---|---|
| S2 cut | 14.9 | 13.0 | 13.0 (chamfer end) | 0.0 points | keep (slight) |
| S4 cut | 12.0 | 10.4 | 10.4 (chamfer end) | 0.0 points | keep (slight) |
| S11 cut | 8.5 | 7.2 | about 7.1, at L5's rim | 0.0 points | keep (slight) |

Worst loss against baseline 0.0 points at every field; the edge (37.6°) gains 4.4 points (49.5 → 53.9 %). No lands.

Changed: `groups` added, Front (S1–S4), Intermediate (S5–S8) and Rear (S9–S14), the three components the patent text
names (column 2); L3 and L4 roles and three analysis sentences now say "intermediate component" to match. The
brackets render under the element numbers without collisions.

Checked and found correct: names L1–L7 as in Fig. 1; types agree with the R signs; no aspheric surfaces and no `apd`
tags (the patent names no special glass, and Pentax's section marks none); stop between L3 and L4; the inspector for
L1 and L5 shows type, nd/νd, focal length (−51.36 and −16.8 mm), glass and role. Movement: none modeled, as the patent
prints the infinity state only; the focus panel says so, the slider's far end reads "Not modeled", and the movement
overlay reports no group movement. Engine EFL 28.776 mm, F/2.8, half-field 37.6° (traced 38.76°) unchanged.

Colour and plots against Fig. 2: paraxial g-line focus +0.066 mm behind d in the model, +0.059 mm on the plot (330 px/mm
there, about ±0.01 mm). d-line spherical aberration −0.074 mm at half pupil, −0.075 at 0.7 and crossing zero near 0.9
on the plot; the model gives −0.072, −0.084 and −0.030 at 0.85. Distortion at 37.6° is −2.38 % on the plot and −2.37 %
in the model. All seven glasses resolve to OHARA rows within Δνd 0.14; no constant or nd-only medium. Assignee "Asahi
Kogaku Kogyo Co., Ltd." is the catalog's spelling for all 33 Asahi files (front page: Asahi Kogaku Kogyo Kabushiki
Kaisha).

Open: the iris position, as above.
