# PENTAX SUPER-TAKUMAR 300mm f/4 — audit log

## 2026-11-09 — Deployment validation

Independent check of US 3,502,394 (single unnumbered example, Table I and the claim table, page images): 10 R, 9 d,
5 nd/νd agree at one scale factor ×300 (d6 0.370 → 111 mm, split 82 + 29 by the stop). The patent prints R3 as −0.74505
in Table I and +0.74505 in the claim; the file's negative sign is right, since the patent's Seidel table gives a
Petzval term of −0.560 at surface 3 and the full sum −0.219 reproduces only with R3 < 0. Engine EFL 300.022, f/4,
half-field 4.5°, telephoto ratio 1.271 (printed 1.27). The stop position and every semi-diameter come from
PhotonsToPhotos; the back focus is paraxial.

Attribution probable: 5 elements / 5 groups, f/4, 8° (Spotmatic II manual), M42; the earlier 3/3 Takumar, the K-mount
7/5 lens and the 6×7 300 (±8°) do not fit. No Asahi construction drawing found.

Deployment changes: added `catalog.lensMounts: ["m42"]`; `patentNumber` "US 3502394 A" → "US 3,502,394" (house form);
example label "Example 1" → "Sole example" with `id: null`, as the patent prints one unnumbered example.
Open: `focus.closeFocusM` 10 is a placeholder (production about 5.5 m); package wording and the validation-log style
of the analysis remain for the cleanup pass. (Closed in the cleanup pass below.)

## 2026-11-09 — Cleanup and wording pass

Data file. Header comment rewritten in plain words with every fact kept (patent, sole example, ×300 scale, printed
versus derived values, the R3 conflict and its resolution, stop and rims from PhotonsToPhotos, static focus).
`subtitle` "Qualified patent reconstruction; secondary stop and apertures" → "US 3,502,394, Sole example — probable
match to the M42 production lens". Added `catalog.specs` (5 ELEMENTS / 5 GROUPS, DESIGN f = 300 mm, DESIGN F/4, ALL
SPHERICAL, PATENT f = 1 SCALED × 300). `catalog.focalLengthMm.design` 300.022 (computed) → 300, the patent's F = 1.0
at the file's scale. Added `catalog.closeFocusM.marketing` 5.5 from the lens table of Asahi's Spotmatic II manual
(18 ft). `focus.closeFocusM` 10 placeholder → 1e15 with a plain description, since the patent prints the infinity
state only and names no focusing group; no gap varied before or after.

Elements: removed every `indexReferenceNote` (the patent states the indices are d-line, col. 3) and added a `role` to
each element. Glass labels, exact matches only (|Δnd| ≤ 0.0001, |Δνd| ≤ 0.15), each confirmed to resolve: L2
→ SF1 (SCHOTT, 1.71736 / 29.51); L4 → S-LAL18 (OHARA, 1.72916 / 54.68); L5 → NBFD5 (HOYA, 1.76200 / 40.26). L1 (no
catalog row near 1.50977 / 61.9) and L3 (S-FSL5 and J-FK5 are 0.24 and 0.31 higher in νd) stay `Unmatched`, reworded
in plain words.

Analysis rewritten from a validation log into the spec skeleton: product facts and sources (Spotmatic II manual,
lens-db, Pentax Forums, Cine Lens Wiki), the attribution and its strength with its caveats (no maker diagram, 1965
versus 1969 introduction against the 1966 priority), the patent's four conditions, group powers and telephoto ratio,
the R3 conflict and how the Seidel Petzval column resolves it, element roles from the patent text, a glass table,
the stop and clear-aperture basis with a Fig. 1 comparison, and a scope table. Removed MTF sample counts,
throughput-check wording, "qualified" and "package" language.

Engine numbers before and after are identical: EFL 300.0221 mm, f/4.000, half-field 4.5°, stop radius 15.198 mm,
BFD 74.8384 mm, total length 236.0164 mm; both focus keyframes trace the infinity state. Surface audit OK; the
aperture audit reports no rim, trace or iris limit.

Open: the rear-group rims (11.04 mm) are the PhotonsToPhotos values and sit at or just below the Fig. 1 readings
(11.0 to 12.4 mm), so the model vignettes strongly (39 % at the 4.1° frame corner wide open); left unchanged in this
pass. (Closed in the semi-diameter pass below: line-centre readings give 10.9 and 11.1 mm, a match.) The engine's paraxial stop radius (15.20 mm) is 1.9 % smaller than the PhotonsToPhotos diameter (30.98 mm).
No Asahi construction drawing of the 35 mm lens has been found.

## 2026-11-09 — Semi-diameter pass against the patent figure

Source: `patents/US3502394.pdf`, page 1, Fig. 1, the patent's only section (no maker drawing is known). The page is a
72 dpi bilevel scan, measured at 288 dpi. The drawn axis tilts about 0.55° across the figure, so each rim is read as
half the distance between the centres of its top and bottom edge lines, which does not depend on the axis line.
Scale from the vertex crossings near the axis, against the prescription at file scale: S1 to S10 is 3650 px for
161.178 mm (22.65 px/mm), S1 to S7 22.55 px/mm, S6 to S7 22.65 px/mm; 22.6 px/mm used. The L1 front arc traced at that
scale follows R1 = 120.75 mm, so the figure is drawn at one scale in both directions.

| Surfaces | Model sd (mm) | Fig. 1 sd (mm) | Ratio | f/4 on-axis ray (mm) |
|---|---|---|---|---|
| 1, 2 (L1) | 37.575 | 35.3 | 0.94 | 37.50, 36.80 |
| 3, 4 (L2) | 34.145 | 32.5 | 0.95 | 34.10, 33.81 |
| 5, 6 (L3) | 33.775 | 32.4 | 0.96 | 33.68, 33.05 |
| 7, 8 (L4) | 11.04 | 10.9 | 0.99 | 9.50, 9.48 |
| 9, 10 (L5) | 11.04 | 11.1 | 1.00 | 9.53, 9.48 |

No rim changed. The front three elements sit 0.04 to 0.10 mm outside the real wide-open on-axis ray at their
limiting faces; the figure draws them 4 to 6 % smaller, and a trial at the figure readings clips the f/4 beam on all
six front faces, so the ray is the floor. The order of sizes matches the figure (L1 tallest; L2 and L3 nearly equal,
0.37 mm apart in the model because each follows its own ray floor; L4 and L5 equal within the 0.2 mm reading
precision). The rear pair matches within 1 %. The header and analysis now state these readings; the earlier rough
figure readings (L2 and L3 about 69 mm, L4 and L5 23.5 to 25 mm, from outer ink scaled to L1) are replaced.

Results, unchanged from the start of the pass: surface audit OK; aperture audit reports no surface below the stated
on-axis ray; EFL 300.022 mm, f/4.000, half-field 4.5°, engine stop radius 15.198 mm. Wide-open transmission at 0,
1.4, 2.1, 2.8, 3.4 and 4.1° is 100, 89.0, 77.3, 64.6, 51.7 and 39.3 %, identical to the starting rims. The lens is
static, so the infinity state is the only printed state; the page at infinity matches the figure in element order,
shapes and proportions.

## 2026-11-09 — Second review: diagram, labels and movement

Compared the local page (infinity, `focus=1`, the focus-movement panel, the inspectors of L1 and L3) with Fig. 1 read at
the scan's native 72 dpi, and the model's on-axis colour, distortion and astigmatism with Fig. 2. Scale from vertex
crossings beside the axis: S1 to S10 913.3 px for 161.178 mm (5.666 px/mm), S1 to S7 5.643, S6 to S7 5.671; 5.65 px/mm
used. The L1 front arc follows R1 = 120.75 mm within 0.5 px of sag at 150 to 190 px from the axis (top and bottom
averaged to cancel the 0.54° axis tilt), so both directions share one scale. Line-centre rim readings: L1 35.35 mm,
L2 32.5, L3 32.5, L4 10.9, L5 11.0, the semi-diameter pass's values. No rim changed: the front three stay on the f/4
on-axis ray (6 % above the figure, inside the 10 % band), the rear pair matches, and L2 stands 0.37 mm above L3 (the
figure draws them equal) only because L2's own ray floor is 34.10 mm at S3; raising L3 to match has no figure support.
There are no lands and no face below its baseline; `rimcost.mjs` worst loss against the pre-pass rims is 0.0 points
(100, 96.6, 89.0, 77.3, 64.6, 51.7 and 39.3 % at 0 to 4.1°). EFL 300.022 mm, f/4.000, half-field 4.5°, stop radius
15.198 mm before and after.

| Item | Before | After | Evidence |
|---|---|---|---|
| `groups` | none | G1 (+) S1–S6, G2 (−) S7–S10 | Fig. 1 brackets G1 and G2; col. 3 names lenses 1 to 3 the front group G1 and 4 and 5 the rear group G2 |

The analysis now names G1 and G2. On the page the brackets sit under elements 1 to 3 and 4 and 5 without touching the
element numbers; the diagram numbers 1 to 5 are the patent's lens numbers and the names L1 to L5 follow them. Types agree
with the signs of R; there are no aspheric surfaces and no `apd` tags (the patent names no special glass). The stop is
not in the patent; Table II's third-order coefficients (all 40 printed s1, s2, s3 and s5 values reproduced within 0.009)
are computed with the entrance pupil at S1, a calculation convention, while Fig. 2(d) supports the iris in the air space:
the model gives −0.028 % distortion at 4° against −0.025 % read, where a front stop would give −0.065 %. The lens is
static: `focus=1` stays at infinity with the slider's far end reading "Not modeled", and the movement panel reports no
modeled group movement.

Colour against Fig. 2(b) (d, g and C spherical aberration at f/4, 86.25 px per 0.001F), in units of 0.001F at pupil
0 / 0.5 / 0.7 / 0.85: C read 1.15 / 1.21 / 1.24 / 1.19, model 1.15 / 1.22 / 1.26 / 1.24; d at the rim read −0.30,
model −0.30. The g line runs behind the plot at every height: read 0.14 / 0.16 / 0.16 / 0.06, model 0.22 / 0.26 / 0.25
/ 0.14, about 0.025 mm. L1 and L3 trace on normal-line partial dispersion. L3's nd is FK5's to five digits, and FK5-family
glass lies about 0.004 above the normal line in PgF (S-FSL5 0.5301). Keeping νd 70.0 with that excess gives g 0.15 /
0.19 / 0.17 / 0.06, on the plot. Labelling L3 S-FSL5 (νd 70.24, inside the 0.25 window) leaves C on the plot but moves g
to 0.24 / 0.28 / 0.28 / 0.17. L1 (1.50977 / 61.9) has no catalog row within the window in the repo catalog or the HOYA
(including obsolete), OHARA and Sumita files; the nearest are BK1-type 1.51009 / 63.4 and ZNC7 1.50847 / 61.27. The
patent prints only nd and ν (d-line, col. 3) in its one example.

Open: the g-line offset of 0.00008F in Fig. 2(b) waits on the coordinator's glass decision for L3.
Open: Fig. 2(c) ΔS matches at 4° (+0.00029F read and modeled), but the model's tangential curve sits near −0.0002F at
2 to 3° where the plot reads +0.0001 to +0.0002F; trial stop positions from 20 to 105 mm behind S6 do not give a positive
tangential focus there, so the stop position is not the cause.
