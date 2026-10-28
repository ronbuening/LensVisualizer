# Audit Log — CANON EF 17-40mm f/4 L USM

Patent: JP 2020-190696 A, Numerical Example 1 (master zoom, surfaces 1–24), Figures 1 and 6; Example 2 supplies a
second middle zoom state of the same master zoom.

## 2026-10-28 — Deployment validation, zoom-path rebuild and wording pass

### Source re-read

- Read pp. 12–14 against 200 dpi page renders: surfaces 1–24 (R, d, nd, νd, effective diameter), the stop at surface
  13, the cemented interfaces, the three aspheres (surfaces 1, 3, 21; 16 values: K plus A4–A12 on surface 1, K plus
  A4–A10 on surfaces 3 and 21) and the variable gaps d7/d12/d18 at wide, middle and tele. No mismatches. Equation (A)
  uses (1+K) in the conic term, so the printed K = 0 maps directly to the repository K.
- Example 2 (pp. 14–16) prints the same radii, glasses and fixed spacings as surfaces 1–24 in its rows 3–26 (its D2 is
  variable and its stop diameter reads 16.66), including L1's nd 1.58373, and ¶0040 states
  that its master zoom is the one of Example 1. Its wide and tele D2 + D7 sums equal Example 1's; its middle state
  (d4 12.22, d9 15.28, d14 6.41, d20 6.72) is a different zoom position.
- ¶0034: from wide to tele, G1 moves on a locus convex toward the image, G2 and G4 move objectward on the same locus,
  and G3 moves objectward on a different locus; focusing moves Lf, part of G1, objectward.
- The patent prints focal length, BF and image height only for the system with the attachment. Bare focal lengths and
  the last gap are computed. Every sd is half the printed effective diameter.

### First-order, patent and model

- With the attachment (surfaces 25–30) restored, an independent paraxial trace gives f 17.33/23.77/38.46 mm against
  the printed 17.33/23.76/38.46, BF 26.32/26.33/26.33 against 26.31, and total length 140.58/135.88/140.60 against
  140.59/135.9/140.61. Group focal lengths −21.03/28.82/−46.91/47.74 mm and all 14 single-lens focal lengths match
  the printed values.
- Bare master: EFL 17.4916/23.9911/25.7828/38.8313 mm and back focus 39.848/45.838/47.539/60.593 mm at the four printed
  states. A real axial ray at F4.1 meets the stop at 8.325 mm at tele, half the printed 16.65 mm stop diameter; the model's
  paraxial iris rule gives 6.049/6.513/6.666/8.062 mm at the four printed states.
- Fig. 6 gives F4.1 and ω = 51°/40°/29.1°; with tan ω = Y/f these are 17.49, 25.78 and 38.83 mm at Y ≈ 21.6 mm, so
  Fig. 6(B) is Example 2's middle state. The model reaches the 21.65 mm full-frame radius at 52.4°/42.2°/40.0°/28.7°.

### Maker drawing

Canon Camera Museum construction image (ef373-lens-construction.gif): L1 molded asphere, L2 replica asphere, L3,
cemented L4–L5, L6, stop, L7, cemented L8–L9, L10 Super UD, L11 replica asphere cemented to L12. Element shapes,
the 12 elements / 9 groups, the aspherical and Super UD positions and the stop position agree with the data file.
Canon's 0.28 m closest focus and 0.24× maximum magnification are reproduced by the modeled focus states.

### Zoom-path rebuild

- Before: 65 stations with three published. D7 and D24 were linear in station index between the printed states and
  G3 was solved for focus; D12 and D18 each reversed twice and G3's distance from the image reversed three times,
  none of which the printed states require. At 25.78 mm the old path had D12 5.18 and D7 13.51 mm against Example 2's
  6.41 and 13.87.
- After: four published stations (Example 1 wide, middle, tele and Example 2 middle) at indices 0, 25, 31 and 64 of
  65, with station focal lengths geometric between them. D12 follows a PCHIP curve in focal length through
  1.24/5.36/6.41/12.63; D18 = 13.12 − D12; D7 is solved for the station focal length; D24 is the paraxial back focus.
  The Example 1 rows are the printed values. The Example 2 row uses D7 = 12.22 + 15.28 − 13.63 = 13.87 (its focus is
  set for a dome port), D12 = 6.41 and D18 = 6.71; the printed 6.72 makes D12 + D18 = 13.13, and keeping it would add
  two reversals to G1's path.
- Direction changes across the 65 stations: D7 0, D12 0, D18 0, D24 0; G2, G3 and G4 positions 0; G1 position 1
  (minimum 134.37 mm at 25.78 mm), matching ¶0034. D12 + D18 = 13.12 at every station.
- Paraxial defocus is zero at every station; linear interpolation between stations leaves at most 0.0022 mm at
  infinity and 0.0022 mm at 0.28 m. Numeric literals are rounded to 6 decimals.

### Focus

The convention is unchanged: keyframe t at an object-to-image distance of 0.28/t m, Lf moving objectward with D2 and
D7 changing by equal amounts, the image plane fixed. Lf travel at wide/middle/tele is 4.073861/3.952288/4.074528 mm
before and after; the new 25.78 mm station has 3.946784 mm. Close-focus magnification is −0.108/−0.144/−0.154/−0.240.

### Clearances and coverage

The surface validator reports no errors. The image-circle check finds no undersized station, and field coverage reaches
100 % of 21.65 mm, clear, at all 65 stations. The real-ray clearance probe at Y = 21.65 mm, at infinity and at 0.28 m,
flags no axial clip and no blocked chief ray; its chief-ray aimer does not converge above about 50° at a few wide
stations, where field coverage traces the corner clear. No semi-diameter changed.

### Wording changes

Header comment rewritten as plain prose with the same facts plus the zoom rebuild; `name` to the corpus form,
`subtitle`, `specs` (12 ELEMENTS / 9 GROUPS, DESIGN f = 17.49–38.83 mm, DESIGN F/4.1, 3 ASPHERICAL SURFACES / 3
ELEMENTS), `catalog.focalLengthMm.design` rounded, element labels and roles, glass strings without process text
(catalog resolution unchanged for all 14 entries), `apd: "inferred"` on L10, group labels and the focus description.
In the analysis: the identification now states that the source is the master zoom of a later attachment-lens patent,
printed once per example and repeated in Example 2, and that no original 2001–03 patent was found; the "three
published geometries" claim, the Fig. 6 40° pairing and the stale viewer line are corrected; the earlier MTF table,
which mixed the old middle station with the Fig. 6 angles, and the sampling counts were removed.

### Open

- Table 1 gives Skmcw/Skmw = 1.05 for Example 1 and 1.24 for Example 2. Both imply a bare wide back focus near
  39.2–39.3 mm, against 39.85 mm computed from surfaces 1–24 (ratios 1.033 and 1.222). Unexplained.
- L1's nd 1.58373 may be a misprint of 1.58313; Canon's US 2010/0033848 A1 prints the same value, so it is unconfirmed.
- No original 2001–03 Canon patent for the EF 17-40mm f/4L USM was found; the product association rests on
  construction and specification.
- The intermediate zoom path and all close-focus states are reconstructed, not published.

## 2026-10-28 — Independent re-check of the rebuilt zoom path

An independent pass re-read all 24 surfaces and 14 asphere values from the page images (no mismatches), confirmed the
W/M/T gaps are the printed literals, and found 0 direction changes in D7, D12, D18, D24 and the G2/G3/G4 positions, one
G1 turn (minimum 134.369 mm at the Example 2 station), D12 + D18 = 13.12 at every station, station defocus ≤ 2e-6 mm
and midpoint defocus ≤ 0.0022 mm, and 280.000 mm object-to-image at every close state (tele magnification −0.2396).
Keeping Example 2's printed D18 = 6.72 instead of 6.71 gives G1 three direction changes and separates G2 and G4 by
0.01 mm, so 6.71 is kept. Text corrections from that pass: the name follows the corpus form "f/4 L USM", the stop
radii quoted are the model's paraxial values (the 8.325 mm figure is a real axial ray), Example 2 is described as
printing the same radii, glasses and fixed spacings (its D2 is variable), and "ring USM", "keyframes", "PCHIP" and a
field name were removed from public text.

## 2026-10-28 — Semi-diameter pass against the patent figure

### Source and scale

Fig. 1(A) on p. 23 of the local JP 2020-190696 A PDF: the wide end at infinity, master zoom ZL followed by the
attachment Lat. Only ZL (surfaces 1–24) was measured. The sheet is a 150 ppi raster, read from a 600 dpi render, so
one native pixel is 0.36 mm and each rim reading carries about ±0.2 mm. The pass re-read the effective-diameter column
on pp. 12–13: every stored sd is exactly half the printed value, and the stop prints 16.65.

Scale from vertex crossings beside the axis at the wide state (D2 13.63, D7 26.47, D12 1.24, D18 11.88): surface 1 to
surface 23 is 90.72 mm over 1011 px, surface 1 to 19 is 82.50 mm over 919 px and surface 1 to 12 is 61.73 mm over
687 px. That gives 11.13–11.15 px/mm (89.7 µm/px, 0.4 % spread), and it predicts surface 24 within 1 px. The automatic
figure screen derived 178.8 µm/px at 300 dpi, the same scale within 0.4 %. Rims were read as full top-to-bottom
diameters where both edges are clean; the upper edge was used for L2 and the lower edge for G3 and G4, where rays and the
SP label cross the other side.

### Figure against the printed radii

| Surface | sd (printed φ/2) | Fig. 1(A) | figure/data | Reading |
|---|---:|---:|---:|---|
| 1A | 26.04 | 27.3 | 1.05 | L1 outer edge |
| 2 | 18.03 | 19.1 | 1.06 | end of the concave; a flat annulus runs from there to the outer edge |
| 3A / 4 | 15.945 / 15.905 | 17.05 | 1.07 | L2 with its resin layer, square top |
| 5 | 13.96 | about 14.9 | 1.06 | where the rear concave meets the top; low confidence |
| 6 / 7 | 13.91 / 13.365 | 14.9 | 1.07 / 1.11 | L3 drawn square-cut |
| 8 / 9 / 10 | 9.23 / 9.345 / 9.68 | 10.7 | 1.16 / 1.15 / 1.11 | L4–L5 drawn as one block |
| 11 / 12 | 10.01 / 9.97 | 11.1 | 1.11 | L6 |
| 14 / 15 | 8.155 / 8.195 | 9.15 | 1.12 | L7 |
| 16 / 17 / 18 | 8.24 / 8.87 / 9.12 | 10.1 | 1.22 / 1.14 / 1.11 | L8–L9 drawn square-cut |
| 19 / 20 | 10.81 / 11.13 | 12.2 | 1.13 / 1.09 | L10 |
| 21A / 22 / 23 / 24 | 11.14 / 11.15 / 11.475 / 12.32 | 13.4 | 1.20 / 1.20 / 1.17 / 1.09 | L11–L12 drawn as one block |

The median ratio is 1.11 and the spread follows one rule: the drawing puts each element's edge, or each cemented
block's edge, a near-constant 1.0–1.2 mm beyond the largest printed radius of that element or block (L1 +1.24, L2
+1.10, L3 +0.99, L4–L5 +1.04, L6 +1.07, L7 +0.96, L8–L9 +0.97, L10 +1.03, L11–L12 +1.09 mm). The larger ratios belong
to the smaller faces of blocks the figure draws square-cut (surfaces 16, 21A and 22). The figure therefore shows the
mechanical outer edges and agrees with the printed proportions. The printed effective diameters stay as table truth,
and no sd changed.

Drawing difference with no sd remedy: Fig. 1(A) and the maker drawing show L1 as a flanged blank, a rear concave that
ends near 19 mm and a flat annulus out to the 27 mm edge. The renderer joins the surface 2 rim (18.03 mm) to the
surface 1 rim (26.04 mm) with a sloped edge. L3, L8–L9 and L11–L12 are drawn square-cut at the outer edge, while their
printed radii step face to face, and the render follows the printed radii.

### Clearance

- The aperture audit holds all 65 stations within 3 % of F4.1, with no surface below the on-axis ray. The real F4.1
  axial ray at tele matches the printed radius to within 0.01 mm at surfaces 8–12 and 14 (9.23, 9.35, 9.68, 10.01,
  9.97 and 8.15 mm), so Canon's effective diameters there are set by the tele axial beam.
- The real-ray probe at Y = 21.65 mm, at infinity and at 0.28 m, flags no axial clip and no blocked chief ray. The
  largest chief-ray uses are surface 1A at 23.35 of 26.04 mm at infinity, and surfaces 3A at 15.20 of 15.945 mm and 7
  at 12.72 of 13.365 mm at 0.28 m. Corner vignetting, the fraction of the full-field bundle cut on one side, is up to
  61 % at surface 8 and 34–40 % in G4 at infinity, and 62–70 % at surfaces 5–7 at 0.28 m.
- Field coverage reaches 100 % of 21.65 mm, clear, at all 65 stations. The image-circle check finds nothing undersized,
  the surface validator reports no errors, and the asphere scans show no turnover out to 27.5 mm (1A), 17.0 mm (3A) and
  13.5 mm (21A).
- Engine values are unchanged, since no sd changed: half-field 43.24° at wide, F4.1, stop radius 6.049 mm.

### Live check and maker drawing

The local page was rendered at 17.49, 23.99, 25.78 and 38.83 mm at infinity, and at 17.49 and 38.83 mm at 0.28 m. The
silhouette matches Fig. 1(A) element for element at about 0.9 of the drawn size. There is no overlap at the
close-focus L1–L2 gap or the tele G3–G4 gap. The Canon Camera Museum drawing shows 12 elements in 9 groups, aspherical
L1, L2 and L11 and Super UD L10, the same as the data file. Its height ratios to L1 (L2 about 0.63, L4–L6 about 0.41,
L11–L12 about 0.49) agree with Fig. 1(A) (0.62, 0.39–0.41, 0.49) and the printed radii (0.61, 0.35–0.38, 0.47).

### Open

- The probe's chief-ray aimer does not converge above about 50° at stations 0–5 at infinity, nor at a few wide stations
  at 0.28 m. Field coverage traces those corners clear.
- The engine's paraxial half-field estimate (43.2° at wide, limited by surface 2) is below the traced 52.4° corner
  field. This is an estimator limit; the printed radii are not short.
- The engine vignetting probe returned no samples for this lens, and for an unrelated lens as well, so the vignetting
  figures above come from the real-ray probe.

## 2026-10-28 — Second review: diagram, labels and movement

### What was compared

The local page at 17.49 mm and infinity was set beside Fig. 1(A) on p. 23 of JP 2020-190696 A, read at 600 dpi. The
page was also shot at 23.99, 25.78 and 38.83 mm, at 0.28 m at 17.49 and 38.83 mm, and with both movement overlays.
The patent text (¶0034, the Example 1 table on pp. 12–13 and the single-lens table on p. 14) and the Canon Camera
Museum drawing were checked as well.

### Silhouette

This review measured the figure independently. Vertex crossings beside the axis give 11.14–11.15 px/mm at 600 dpi:
surface 1 to 24 (99.43 mm) spans 1109 px and surface 1 to 19 (82.50 mm) spans 919 px. Every other vertex from
surface 2 to 23 falls within 3 px of its prescription position. E1's outer edge sits 26.9 mm above and 27.6 mm below
the axis (mean 27.3). Its rear concave ends at 18.6 mm (printed radius 18.03), and a flat annulus at z ≈ 13.2 mm runs
from there to the edge. E2's square top is at 17.0 mm, and its rear concave meets a short land near 15.0 mm (printed
15.945 and 13.96). E3's top is at 15.0 mm (printed 13.91 and 13.365). These readings repeat the first pass's 1.07–1.12
figure-to-print ratio: the figure draws mechanical edges, and the printed effective diameters stay as table truth.
No sd changed.

The site and the figure differ in these places, and an sd edit cannot remove any of them:

- E1: the render joins the 26.04 mm front rim to the 18.03 mm rear rim, which lies 12.5 mm behind the front vertex,
  with one sloped line. The figure and Canon's drawing show a thick blank: a flat rear annulus from about 18.6 mm out
  to a 27 mm cylindrical edge that is about 10 mm long.
- E2 with R1, E3, C2 (E8–E9) and C3 (R2, E11–E12) are drawn square-cut in the figure. The render slopes their edges
  where the printed radii step: E2 15.945 to 13.96 mm, E3 13.91 to 13.365 mm, C2 8.24 to 9.12 mm, C3 11.14 to 12.32 mm.
- The whole render is about 0.9 of the drawn size. The order of heights matches the figure: E1 > E2 > E3, E6 above
  C1, C2 above E7, and C3 above E10. No element overlaps a neighbour at either end of the zoom or focus range.

### Changes

| Field | Before | After | Evidence |
|---|---|---|---|
| Element names | L1–L12, R1, R2 | E1–E12, R1, R2 | ¶0034 and Fig. 1 name the groups 第1レンズ群L1 to 第4レンズ群L4 and the focusing group Lf. Element "L2" was a member of the patent's L1, while the patent's L2 is E4–E6. |
| Diagram labels | none, so the diagram drew ids 1–14: "Element 11 (resin layer)" appeared as 12 and "Element 11" as 13 | equal to the name on all 14 entries | The diagram sign and the inspector heading now name the same entry. |
| Group brackets | G1 (L1), G1 (Lf focus), G2, G3, G4 | L1 (E1), Lf (focus), L2, L3, L4 | These are the patent's own group names. The surface ranges are unchanged. |
| Cemented brackets and tags | H1, D1, D2, H2-D3; R2, L11 and L12 all tagged H2-D3 | H1, C1, C2, C3; E11 and E12 tagged C3, R2 untagged | "D2" was also the focus-gap label beside the slider. The three shared tags made the inspector read "TRIPLET H2-D3" for the resin layer and both glasses, whereas Canon counts L11–L12 as one two-element cemented lens. The C3 bracket still spans R2. |
| E1 type | Negative Meniscus (1x Asph) | Negative Meniscus (1× Asph) | the corpus spelling |
| Roles | G1–G4 notation | group L1–L4 and the doublet names | same facts |
| Focus description | L2 with its layer and L3 move inside G1, L1 fixed | E2 with its layer and E3 move inside group L1, E1 fixed | same facts in the new names |

The analysis now uses E1–E12 throughout, with group L1–L4 in the architecture table and the prose. It also has a
naming paragraph that states the patent's notation, names H1 and C1–C3, and records that the patent's single-lens
table numbers the 14 entries 1–14. The header comment explains the same naming.

The resin layers' focal lengths, +910.93 and +309.06 mm, are the printed values for lenses 2 and 12 in the
single-lens table on p. 14, which counts each layer as a lens, so they stay. R1 keeps the H1 tag that it shares with
E2, the repository's hybrid convention, and the inspector reads "DOUBLET H1". The spec has no rule for a resin layer on
a lens that is itself cemented to another glass; leaving R2 untagged is this review's choice.

### Checked and found correct

- Every element type agrees with the signs of R: E1, E3, E4 and E9 are menisci convex to the object; E2, E7, E8 and
  E11 are biconcave; E5, E6, E10 and E12 are biconvex; R1 and R2 are thin positive resin menisci concave to the object.
- Only surfaces 1, 3 and 21 carry the A suffix and coefficients, the three surfaces the table stars on pp. 12–13. The
  stop is surface 13 (絞り), drawn between E6 and E7, and it rides with L3 because its 1.87 mm spacing to surface 14
  is fixed.
- Every stored sd is half the printed effective diameter, re-read for all 23 rims.
- E10 carries `apd: "inferred"` at Canon's Super UD position. The patent text names no special dispersion class, so no
  element is tagged "patent". Eleven glass labels resolve to OHARA rows within Δnd 6e-6. E1 and the two resin layers
  are unmatched by design. The patent prints only nd and νd (the columns are r, d, nd, νd and effective diameter), so
  it gives no further identification for them.
- Inspector checks on the page: E1 reads "Element 1 E1", ASPH, f −38.77 mm, Unmatched. R1 reads "Element 2 (resin
  layer) R1", DOUBLET H1, ASPH, f +910.93 mm. E8 reads DOUBLET C2. E10 reads APD (INFERRED) with its note and
  S-FPL53. R2 reads "Element 11 (resin layer) R2", ASPH, f +309.06 mm, with no doublet badge. E11 reads "Element 11
  E11", DOUBLET C3, S-LAH60.
- Zoom: the 65 stations ascend from 17.49 to 38.83 mm, with the published states at indices 0, 25, 31 and 64. Measured
  from the image, L1's front vertex goes from 139.278 mm to a minimum of 134.369 mm at 25.78 mm and back to 139.303 mm,
  one reversal, the image-convex locus of ¶0034. L2 and L4 each move 20.745 mm objectward with no reversal and a
  constant 30.960 mm separation, which is the common locus. L3 moves 9.355 mm objectward with no reversal. The overlay
  at both ends shows the same directions.
- Focus: keyframe 0 is infinity and the last is 0.28 m (the slider end reads 28 cm). Lf moves objectward 4.074,
  3.952, 3.947 and 4.075 mm at the four printed states, while E1 and L2–L4 stay fixed. D2 falls and D7 rises
  monotonically at every station, and their sum is constant.
- The engine output is identical before and after: half-field 43.24°, F4.1, stop radius 6.049 mm at wide. The
  wide-open vignetting curve is unchanged: 100 % to 40.7°, 97.5 % at 43.6°, 89.7 % at 46.6°, 73.2 % at 49.5° and
  45.2 % at 52.4°. The surface validator reports no errors and the image-circle check finds nothing undersized. Field
  coverage reaches 100 % at all 65 stations. The real-ray probe at Y = 21.65 mm flags no axial clip and no blocked
  chief ray, either at infinity or at 0.28 m.

### Open

- E1's flat rear annulus and the square-cut edges of E2, E3, C2 and C3 cannot be drawn without leaving the printed
  effective diameters. They need a renderer feature for a mechanical edge beyond the clear aperture.
- R2 carries no cemented tag, unlike the spec's hybrid example. If the convention should instead be one shared tag on
  all three entries, the inspector will again read TRIPLET.
