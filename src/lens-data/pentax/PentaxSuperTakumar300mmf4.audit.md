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
