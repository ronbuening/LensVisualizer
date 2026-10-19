# Audit Log — SIGMA 70–300mm f/4–5.6 DG OS

Patent: JP 2010-217838 A, Example 1 (table p. 8), Fig. 1.

## 2026-10-19 — Deployment validation

Source re-read from 400 dpi renders: all 28 rows (R, d, nd, νd), the stop at row 11, five cemented pairs, and the
variable gaps d5 / d10 / d16 / Bf at all three infinity and three finite states (with the printed object distances)
match the data file. No aspheres.

Patent vs model: EFL 70.33 / 147.08 / 290.50 vs 70.333 / 147.080 / 290.504; Bf 46.196 / 61.984 / 75.546 vs 46.196 /
61.985 / 75.547; 2ω 34.94 / 16.40 / 8.30° reproduced at Y 21.63; f1/fw 1.941, ML3/ML4 0.778, |βw2| 0.338 as printed.
At 290 mm and 1.5 m the model gives 1:3.88 (Sigma: 1:3.9). `audit:surface` OK, image circle OK, field coverage 81/81 at
100 %.

Departures from the literal example: 78 intermediate stations interpolated (Bf solved paraxially), F-number linear
between stations, focus to 1.5 m solved paraxially (G1 travel up to about 16.6 mm), OS group modelled centred only,
all rims inferred.

Product: Sigma lists 16 elements / 11 groups with one SLD element, 1.5 m, 1:3.9, 62 mm filter, SA / EF / F / Pentax /
Sony A mounts; announced September 2009, six months after filing. Sigma's drawing
(`sigma-global.com/lenses/70_300_4_56_os_specification_01.jpg`) matches Example 1 element for element, with the shaded
SLD element at L3 (1.497 / 81.6). Example 2's G3/G4 split does not match the drawing.

Open: the G2 on-axis clip and the rear G4 rim noted at deployment are handled in the semi-diameter pass below. Wording items (missing spaces, "EXAMPLE 1" / "CENTERED OS" spec chips, package
internals in the analysis "Validation Limits" section, the SLD element not named) were reported and not changed;
closed in the wording pass below.

## 2026-10-19 — Semi-diameter pass against the patent figure

Source: `patents/JP2010217838A.pdf`, page 10, Fig. 1 (Example 1, wide end, infinity), measured at its native 300 dpi.
The figure prints the optical axis vertically with the object at the top. The page carries no drawn axis line; the
symmetry axis is the column every element is centred on.

Scale: S1 to S28 at the wide-end infinity spacings is 121.464 mm and spans 863 px (7.105 px/mm); the S10 to S12 span
(D10 plus the stop gap, 27.31 mm) gives 7.10 px/mm. Transverse scale from arc fits of S1 (R 75.8), S4 (R 44.2) and S7
(R 20.3) is 7.0–7.15 px/mm, and the inner ends of the stop marks sit at 11.8 mm against the engine's 12.0 mm stop
radius. The figure is isotropic, not anamorphic, so 7.10 px/mm is used both ways (one pixel is 0.14 mm).

| Surface | Before | Figure | After | Evidence |
|---|---:|---:|---:|---|
| 1, 2 (L1) | 29 | 27.6–27.75 | 29 | 4–5 % over, inside noise; kept |
| 3–5 (L2/L3) | 27 | 26.8 | 27 | agrees |
| 6, 7 (L4/L5 front, junction) | 11 | 12.96 | 12.9 | figure; old value clipped the axial beam (needs 11.86 / 11.46) |
| 8, 9 (L5 rear, L6 front) | 11 | about 12.7 as drawn | 11.3 | axial floor 11.25; needs gap-sag 0.95, see below |
| 10 (L6 rear) | 11 | 12.68 | 12.6 | figure; old value clipped the axial beam (needs 11.50) |
| 12, 13 (L7) | 14 | 13.66 | 14 | agrees |
| 14–16 (L8/L9) | 14 | 13.80 | 14 | agrees |
| 17, 18 (L10) | 15 | 13.80 | 13.8 | figure draws L10 level with L8/L9, not 1 mm wider; axial floor 13.55 |
| 19, 20 (L11) | 15 | 13.10 | 13.1 | figure, 13 % under the old value; axial floor 12.83 |
| 21–23 (L12/L13) | 13 | 12.39 | 13 | 5 % over, inside noise; kept, still stepped below L11 |
| 24, 25 (L14) | 13 | 11.69 | 11.7 | figure, square rim; chief ray 8.2, axial 7.6 |
| 26 (L15 front) | 10.5 | 10.56 | 10.5 | figure: the curve ends at 10.56 inside a flat flange that reaches 12.8; a wider S26 would run into L14's rear face |
| 27, 28 (L15/L16 junction, rear) | 10.5 | 12.82 | 12.8 | figure, 22 % over the old value |

S8 and S9 face each other across a 2.957 mm air gap and, by the prescription, would touch at about 11.55 mm; the figure
draws them meeting at the box edge. The f/5.84 on-axis beam at the long end needs 11.25 on both, which rounds to 11.3.
At 11.3 the faces still clear by 0.16 mm, but the combined sag (2.80 mm) is 0.946 of the gap, past the default 0.90
limit, which admits at most 11.0 (a 2 % trim of the long-end beam). `checks.gapSagFrac` is set to 0.95, the smallest
two-decimal value that admits 11.3, and both rims are 11.3.

Clearance after the edit: the real-ray trace at all 81 zoom positions, at infinity, at the published finite state and
at 1.5 m, finds no on-axis clip and no chief-ray block. Image circle: no surface undersized. Traced corner coverage: 81
of 81 positions at 100 %. Surface validator: no errors with gap-sag 0.95; the engine builds.

Engine: f/4.15 at the wide end unchanged. Half-field 18.79° before, 20.46° after (the wider G2 front and the rear
doublet now pass more of the corner bundle); the engine's field limit is now set by S26. Geometric transmission at the
largest sampled field, wide open at infinity: wide 33.9 % before, 56.8 % after (17.5°); middle 62.0 % to 70.3 % (8.2°);
long end 66.9 % to 69.3 % (4.2°). The narrower L14 adds some vignetting; the larger G2 and rear rims remove more.

Live check: the local page at 70 mm and 290 mm infinity and at 70 mm, 1.5 m renders with no overlap. An outline of the
model drawn over the Fig. 1 crop at the same scale lines up on every element; the remaining visible differences are
L1 and the L12/L13 doublet, each about 5 % wider than drawn, both left as noise.

Maker drawing: no image was viewed in this pass. The deployment validation above records that Sigma's construction
drawing matches Example 1 element for element (16 elements in 11 groups) with the SLD element at L3.

## 2026-10-19 — Wording pass

The source re-read, first-order comparison and maker-drawing comparison are in the deployment validation above; the
semi-diameter pass is above as well. This pass changed text only; EFL, f-number, half-field, stop radius, back focus
and focus positions are unchanged.

Data file: header comment rewritten as plain sentences with the run-together tokens split ("stop11",
"manufacturer1.5m", "Example1"); focus description rewritten to lead with the convention keyword PUBLISHED and to state
the group-1 travel, the printed D5 values and object distances, and that the printed states are not the 1.5 m minimum
focus; the three finite-object `source` strings now read "JP 2010-217838 A, Example 1 … ¶0040". The name, subtitle,
spec lines and the L3 SLD tag were set by the coordinator in this batch.

Analysis: the "Validation Limits" heading is now "Clear Apertures and Model Limitations"; the runtime ray-sample
counts (measured with the first inferred rims), the CI / type-check paragraph and the "complete original preserved"
source notes were removed; the clear-aperture sentence gives 11.3 mm on the facing group-2 surfaces; L3 is named as
the SLD element; Sigma's construction drawing is listed as a source.

Open: none.
