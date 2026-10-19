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

## 2026-10-19 — Second review: diagram, labels and movement

Compared: the local page (70.33, 147.08, 232 and 290.5 mm at infinity, 70.33 mm at 1.5 m, both movement overlays, five
element inspectors) against Fig. 1 on PDF page 10 (Example 1, wide end), the lens table and variable-gap tables on
PDF page 8, the reference-sign list ¶0043 and the aberration plots Fig. 2 (wide) and Fig. 3 (tele).

Names. ¶0043 and Fig. 1 use L1–L4 for the four lens groups and SP for the stop; the patent gives no element signs.
The page showed group brackets "G1 focus" … "G4" and element names L1–L16, so the inspector's "L3" (the SLD element)
was not the patent's L3 group. The brackets now read L1 FOCUS, L2 OS, L3 and L4, and the elements are E1–E16 (header,
`name`, analysis table and prose). The cemented brackets D1–D5 shared "D5" with the slider's D5 gap; they are now
C1–C5 in `doublets` and in the ten `cemented` fields. Earlier sections of this log use the old names: Ln there is
En now, and group Gn is Ln.

Rims, re-measured on the native 300 dpi Fig. 1 (axis column 711, both sides, 7.10 px/mm): E1 197 px (27.75 mm),
C1 190 (26.8), C2 92 (13.0), E6 90 (12.7), E7 97 (13.7), C3 98 (13.8), E10 98 (13.8), E11 93 (13.1), C4 88 (12.4),
E14 83 (11.7), C5 91 (12.8). These agree with the first pass to a pixel.

| Surfaces | Before | After | Evidence |
|---|---:|---:|---|
| 1, 2 (E1) | 29 | 27.8 | drawn 27.75 on both sides; the drawn cylindrical edge is 8 px (1.13 mm), and the prescription gives a 1.22 mm edge at 27.8 against 0.77 mm at 29; drawn step to C1 is 1.0 mm, now 0.8 (was 2.0) |
| 21–23 (C4) | 13 | 12.4 | drawn 12.39; drawn step below E11 is 0.7 mm, now 0.7 (was 0.1) |

All other rims are kept. E5 rear and E6 front (S8/S9, 11.3) are drawn meeting at the box edge near 12.7 mm, but the
faces cross at 11.55 mm, so the site shows E5 and E6 with short bevels where the figure draws square blocks; this
stays a limitation. S26 at 10.5 against the 12.8 junction renders as the near-flat land the figure draws, since the
two rim points sit within 0.3 mm axially.

Clearance: the surface validator reports no errors; the real-ray trace at all 81 zoom positions at infinity, at the
published finite keyframe and at 1.5 m finds no on-axis clip and no chief-ray block (axial floors 24.87 at S1 and
11.49 at S21); the image circle has no undersized surface; traced corner coverage is 81 of 81 positions at 100 %; the
engine builds. Half-field 20.46° and f/4.15 are unchanged, and the field limit is still S26. Meridional geometric
transmission at the largest sampled field, wide open at infinity: wide 56.8 % before and after (17.5°); middle 70.3 %
to 67.7 % (8.2°); long end 69.3 % to 68.2 % (4.2°). The loss comes from E1 alone; the C4 change leaves the curve
unchanged. These curves are meridional only.

Checked and found correct. Element types agree with the signs of R for all sixteen elements; no element has a `role`
string. There are no aspheres in the patent and none in the file. The stop sits at row 11 between E6 and E7, ahead of
L3, and travels with L3 (D10 is the gap in front of it), as claim 2 and Fig. 1 place SP. The one `apd: "inferred"`
tag is on E3 (1.497 / 81.6), the element the deployment validation records as shaded SLD in Sigma's construction
drawing; the patent text names no special glass, so nothing is tagged `"patent"`. The inspectors for E1, E3, E5, E12
and E15 show the stored type, nd/νd, focal length, glass and the C1/C5 badges. All sixteen glass labels resolve to
catalog glasses with Δνd ≤ 0.01. The pairs 1.48749/70.44, 1.497/81.60, 1.713/53.94, 1.84666/23.78 and 1.7725/49.62
recur in Example 2 and 1.51742/52.15 recurs there as row 21, so they are real melts; the rest are standard catalog
coordinates used only in Example 1. No element is `Unmatched`.

Focus: index 0 is infinity and keyframe 18 is 1.5 m at every station; only L1 moves, objectward (D5 widens), 16.2 mm
at 147 mm in the overlay. The published finite rows land on their keyframes: station 0 keyframe 9 traces to
2945.69 mm with D5 13.9067, station 40 keyframe 4 to 5998.41 mm with D5 41.2722, and station 80 keyframe 2 to
11779.49 mm with D5 60.2419, all from the first surface as ¶0040 defines Obj. The slider's far end reads 1.50 m.

Zoom: the stations ascend 70.33 → 290.5 mm. Measured from the image plane, the front vertices at the three printed
states are L1 167.66 / 198.49 / 219.03, L2 142.60 / 142.60 / 142.60, L3 108.26 / 118.73 / 131.10 and L4 88.74 /
104.53 / 118.09 mm, matching Fig. 1's arrows (L1, L3, L4 toward the object, L2 level) and ML3/ML4 = 0.78. The
interpolated stations do not keep this: L2 drifts up to 5.80 mm toward the object (232 mm), and L1, L3 and L4 pass
their tele positions by up to 0.78, 2.15 and 1.91 mm before turning back at the long end. The overlay shows L2 with a
short travel bar. The same stations ask for a stop radius up to 12.67 mm (232 mm, "Stop ⌀ 25.34" on the page) from
the linearly interpolated f-number, against 12.0 at the printed states. Both come from the gap tables and the
f-number fields; they were reported to the coordinator and are fixed in the regeneration described at the end of
this section.

Aberrations against the patent plots, by an independent spherical-surface trace at the d line: wide-end distortion
−2.3 % at 17.47° (Fig. 2 about −2.4 %), long-end +2.6 % at 4.15° (Fig. 3 about +2.6 %); wide astigmatism ΔM −0.18 mm
and ΔS −0.12 mm at 0.7 field, returning to about +0.05 mm at full field (Fig. 2 shows the same dip of about −0.18 mm
and a return to zero); long end ΔS −0.15 and ΔM −0.24 mm at full field (Fig. 3 about −0.15 to −0.2 mm); spherical
aberration −0.21 mm at the wide rim (−0.24 mm at 0.85) and +0.10 mm at the long-end rim, consistent with Fig. 2's
undercorrected and Fig. 3's slightly overcorrected d-line curves. The model reproduces the printed example.

Live check after the edits: the page at 70.33, 147.08 and 290.5 mm at infinity and at 1.5 m renders without overlap;
E1 now steps 0.8 mm above C1 and C4 sits below E11 as drawn. The group labels read L1 FOCUS, L2 OS, L3 and L4 and stay
apart at the long end; the cemented brackets read C1–C5.

Maker drawing: no image was viewed in this pass; the deployment validation above records Sigma's construction drawing
as matching Example 1 element for element (16 elements in 11 groups) with the SLD element at E3.

Cam and f-number regenerated (coordinator-approved for this task: the `gaps` values and `nominalFNumber` of the 78
intermediate stations only). Stations 0, 40 and 80 and every other field are unchanged, checked by a field-by-field
comparison of the parsed file before and after. Method: L2 is held at its printed distance from the image (D10 + D16
+ Bf follows a monotone curve through the printed sums 79.3172 / 79.3171 / 79.3171 mm); D5 follows a monotone PCHIP
curve in log focal length through the printed 7.2667 / 38.0910 / 58.6405 mm; D10 and D16 are then solved so the
paraxial EFL equals the station's focal length and the infinity image lies on the image plane. Focus keyframes at the
intermediate stations re-solve D5 for object-to-image distances of 1500/t mm, so keyframe 18 is 1.5 m; the printed
stations keep their published finite rows on keyframe 9 (2945.69 mm), 4 (5998.41 mm) and 2 (11779.49 mm). The
f-number of each intermediate station is the one whose real marginal ray reaches the stop at a radius interpolated
through the printed states' 12.0017 / 11.9887 / 11.9944 mm.

| Quantity | Before | After |
|---|---:|---:|
| L2 axial drift during zoom | 5.80 mm objectward (232 mm) | 0.0001 mm |
| L1 / L3 / L4 turn-back before the long end | 0.78 / 2.15 / 1.91 mm | none (all monotone objectward) |
| Largest paraxial infinity defocus | 0.0012 mm (printed tele) | 0.0012 mm (printed tele) |
| Stop radius over all stations at infinity | 11.99–12.67 mm | 11.99–12.00 mm |
| f-number at 232 mm on the page | f/5.53, stop ⌀ 25.34 | f/5.61, stop ⌀ 23.98 |
| Largest L1 focus travel | 16.56 mm | 16.55 mm (long end) |

Station focal lengths still ascend and every focus keyframe advances D5 monotonically. After the change the surface
validator reports no errors, the real-ray trace at infinity, keyframes 2, 4 and 9 and at 1.5 m finds no on-axis clip
and no chief-ray block, corner coverage is 81 of 81 at 100 %, and the engine builds with f/4.15 and half-field 20.46°
unchanged. Wide-open corner transmission is the same as above (56.8 %, 67.7 % and 68.2 % at wide, middle and long
end, which are printed stations). The zoom overlay now shows L2 as a fixed dot and the other three groups moving
steadily toward the object; the focus overlay at 232 mm shows only L1 moving, 16.5 mm.

Open: none.
