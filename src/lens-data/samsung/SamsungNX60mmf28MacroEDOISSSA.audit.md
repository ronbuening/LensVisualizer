# Audit Log — SAMSUNG 60mm f/2.8 Macro ED OIS SSA

Patent: US 8,203,795 B2, Embodiment 5 / Tables 10–12 / Fig. 12 (PDF pp. 37 and 27)

## 2026-11-07 — Package history

The lens arrived in a reviewed lens package and was added as received. What the package established:

- Source: US 8,203,795 B2, Embodiment 5, transcribed whole and unscaled; image plane 106.0 mm behind S1. The S23–S24
  plate (2.8 mm, 1.51680/64.2) and the 1.0 mm gap G are kept as printed in `rearPlates`.
- Printed: radii, thicknesses, nd/νd, the S4 asphere (K = 0, A = −1.4452e−6, B = −2.54447e−9, C = D = 0), the stop
  row between S14 and S16, and Table 11's gaps at M = 0, −0.5 and −1.0. A transcription that had dropped a digit of
  the S4 B term (−2.5447e−9) was corrected to the printed −2.54447e−9 before any tracing.
- Derived: semi-diameters (none printed), estimated from the axial entrance-pupil envelope with clearance and rough
  Fig. 12 proportions, one value per group (12, 10.7, 8.8, 8.8, 9.4, 9.4, 10.4, 10.2, 10.2 mm front to rear), fixed
  before any pupil tracing. A uniform −5 % cap variant passed the geometry checks; +5 % failed them. The iris follows
  from F/2.86.
- First order: EFL 59.265 mm (patent 59.3); paraxial back focus behind the plate 0.972 mm against G = 1.0 mm, the
  0.028 mm residual kept.
- Focus: modelled at infinity only. Table 11's finite states were kept as evidence; the package's paraxial conjugates
  were 125.49 and 79.75 mm from S1 against the printed 124.92 and 79.41 mm.
- Vignetting: with the estimated rims, pupil sampling at 0°, 6.75° and 13.5° passed 208, 152 and 22 of 208 cells.
- Glass: all twelve elements were left unmatched with their printed nd/νd.
- Metadata: Samsung NX mount, APS-C, marketed 60 mm f/2.8, 0.187 m minimum focus, 12 elements / 9 groups. The
  inventor is written in the corpus form "Jae Myung Ryu" (the patent prints Jae-myung Ryu).

## 2026-11-08 — Deployment validation and production cleanup

Source re-read. Tables 10–12 (PDF p. 37) were re-read from 200 and 400 dpi renders: 24 surface rows (R, d, nd, νd),
the stop row, the three cemented pairs (S1–S3, S8–S10, S16–S18), the S4 asphere and Table 11's seven distances A–G in
three states. No mismatches against the file. The column heads print nd and νd and the text defines the d-line as
587.6 nm, so `indexReference: "d"` is correct. Table 11 heads the third column "M = 1.0" without its minus sign; the
text and Fig. 12 give M = −1.0. B + C = 12.94 mm and D + E = 33.72 mm in all three states, so G1, G3 and G5 are fixed.
Table 13 gives f3/f = 1.26, Expression 3 νd = 81.6 and a marginal ray ratio of 32.1 for Embodiment 5.

First order, patent / model: f 59.3 / 59.265 mm; F-number 2.86 / 2.86; 2ω 27.0° / 27.0°; track 106.0 / 106.0 mm;
G 1.0 / paraxial 0.972 mm; f3/f 1.26 / 1.255. Real-ray LSA at infinity 0.058 mm at full pupil, so no misprint is
suspected. Group focal lengths: G1 +31.33, G2 −20.09, G3 +74.42, G4 +40.63, G5 −73.82 mm. At the printed object
distances (124.9239 and 79.4080 mm from S1) the paraxial magnifications are −0.5007 and −1.0033, with the image 0.14
and 0.34 mm behind the printed plane. With the plane held, the engine's 0.5× and 1:1 rows focus at 125.60 and
79.78 mm from S1 (m −0.497 and −0.994), 231.57 and 185.75 mm object to image.

Maker-diagram comparison. No Samsung construction drawing was found; the only section is the patent's Fig. 12, drawn
to scale (stop about 8.5 mm against the engine's 8.48 mm). Read against it, the rims are 12–20 % small in G1, G4 and
G5: L1/L2 about 13.7 mm drawn (file 12), L3 about 11.3 (10.7), G4 12.2–12.7 (10.2–10.4), L12 about 11.8 (10.2). They
were not widened, because the repository does not fit rims to a figure reading. G2's rim (8.8) sits close to where S7
and S8 meet (y ≈ 9.35). Marketed construction (Imaging Resource, LensTip): 12 elements / 9 groups, 1 aspherical and
1 ED lens, 7 rounded blades, 0.187 m at 1:1, 52 mm filter, 84 mm length, 26.4° diagonal, released 2011. The model has
12/9, one asphere (S4) and one ED-class glass (L8). Embodiments 1–3 are all spherical; Embodiment 4 has the same counts
and length, and Embodiment 5 is kept.

Fields changed in this pass:

- Focus: `d` removed from S5, S10, STO and S20; `gaps` D5, D10, D15, D20 hold Table 11's B, C, D, E in the order
  ∞ / 0.5× / 1:1. `focus.closeFocusM` 1e15 (infinity only) → 0.185408 m, the printed A = 79.408 mm plus the 106.0 mm
  track; keyframes [0, 0.8029, 1], the middle one 185.408 / 230.9239 mm; `published: [1, 2]`; two first-surface
  conjugates at the printed A (124.9239 and 79.408 mm); the description rewritten. `catalog.closeFocusM.marketing`
  stays 0.187 because the model's 0.1854 m differs.
- Header comment replaced with the house block; `visible: true` added.
- `subtitle`: "US 8,203,795 B2 — Embodiment 5; qualified infinity-only patent reconstruction" → "US 8,203,795 B2,
  Embodiment 5 — probable production design".
- `specs`: nine qualifying lines → "12 ELEMENTS / 9 GROUPS", "DESIGN f = 59.3 mm", "DESIGN F/2.86",
  "1 ASPHERICAL SURFACE / 1 ELEMENT", "1:1 MACRO".
- Elements: labels "Source Ln" → "Element n"; specific roles; L3 type → "Pos. Meniscus (1× Asph)"; focal lengths added;
  `cemented` D1–D3. Ten glass labels → HOYA catalog equivalents (FDS90 ×4, BAC4, BSC7, FCD1, LAC14, TAF1, FC5), each
  matching the printed nd to five decimals and νd within 0.04. L2 (1.61780/63.4) and L3 (1.73968/49.0) stay unmatched
  (nearest catalog rows 1.61800/63.4 and 1.74330/49.2).
- L8: `apd: "inferred"` with a note. Samsung lists one ED element; 1.49700/81.6 is the only ED-class glass and the G3
  lens that Expression 3 sets for the OIS shift.
- `aperture.blades: 7`; rear plate label CG → FL (the text calls it a filter) and its source citation rewritten.
- `groups` G1 (S1–S5), G2 (S6–S10), G3 (S11–S14), G4 (S16–S20), G5 (S21–S22) and `doublets` D1–D3 added; top-level
  groups put in specification order.
- Analysis rewritten to the house skeleton: per-element sections, glass table, focus table, Image Stabilization and the
  Fig. 12 rim statement corrected (the rims do not follow Fig. 12); sources now cite the patent, Imaging Resource,
  LensTip and the NX flange distance. "Powered plane interface" for the flat S6 removed.

Results: EFL, FOPEN, half-field, stop radius (8.4827 mm) and infinity back focus unchanged; `audit:surface` OK;
`audit:aperture` within 3 % of the stated f-number with no rim limit; `audit:image-circle` and the field-coverage
audit do not flag the lens.

Open:

- Rims 12–20 % inside Fig. 12 in G1, G4 and G5 are kept, so the full-field corner is probably more heavily vignetted
  than the patent's marginal ray ratio of 32.1 implies. (Closed 2026-11-08: the rims now follow Fig. 12; see the
  second review below.)
- A paraxial-iris clear-aperture check flags S6 (8.8 mm against an 8.84 mm axial height with an 8.61 mm iris); with the
  engine's 8.48 mm iris the beam clears. Rim clearance at the 0.5× and 1:1 states was not traced separately. (Closed
  2026-11-08: S6 is 9.9 mm, and both near states were traced from the printed object points; see below.)
- No source decides between Embodiments 4 and 5 for the production lens.
- The OIS shift of L8 is not modelled.

## 2026-11-08 — Second review: diagram, labels and movement

Compared: the local page at infinity, 0.5× and 1:1, its focus-movement overlay and the inspector for L3, L4, L8 and
L11, against Fig. 12 (PDF p. 27, the M = 0 panel at the 300 dpi native scan; the patent ties Fig. 12 to Tables 10–12,
so it is Embodiment 5) and the Fig. 13A aberration plots (PDF p. 28). An overlay of the model outline on the figure,
baseline rims included, was made at matched scale.

Figure scale. The axis line is level to 0.5 px across the panel. Vertex crossings put S1 at 617.5 px and the image
line at 2023.5 px for the printed 106.0 mm track, 13.264 px/mm; S22 (82.9 mm) then falls at 1717.1 px against
1716.5 px read, and S11 at 1043.4 against 1041.5. Across the axis, arc fits of the strongly curved faces (S1, S2,
S4, S7, S9, S10, S17, S21) give 0.97–1.04 of the axial scale, and the stop tick's inner end (112 px) gives 8.44 mm
against the engine's 8.48 mm iris, so the radial scale is about 13.2 px/mm.

Readings (mm; line centres, both sides averaged): C1 13.7–13.8; L3 11.2–11.3; L4 9.9 at its edge, its flat S6 running
to the edge and its S7 curve ending near 8.7 mm in a vertical land; C2 9.5 at its edge, S8 reaching the edge, the
cemented S9 ending near 8.5 mm (L5 land) and S10 near 8.3 mm (land); L7 8.8; L8 9.5; C3 12.7, the cemented S17
ending near 11.1 mm in an L9 land while S16 and S18 reach the edge; L11 12.2; L12 11.8.

Rims raised to the figure (each square where Fig. 12 draws it square):

| Surfaces | Baseline | Fig. 12 | Final | Evidence |
| -------- | -------: | ------: | ----: | -------- |
| S1–S3 (C1) | 12.0 | 13.7–13.8 | 13.7 | drawn edge, 14 % above baseline |
| S4A, S5 (L3) | 10.7 | 11.2–11.3 | 11.3 | drawn edge; the wide-open 1:1 axial beam from the printed object point reaches 11.21 mm at S4A and 10.98 mm at S5, and the baseline rim clipped 8.5 % of it |
| S6 (L4) | 8.8 | 9.9 | 9.9 | flat face drawn to the 9.9 mm edge |
| S16–S18 (C3) | 10.4 | 12.7 | 12.7 | drawn edge, 22 % above baseline |
| S19, S20 (L11) | 10.2 | 12.2 | 12.2 | drawn edge |
| S21, S22 (L12) | 10.2 | 11.8 | 11.8 | drawn edge |

Cuts and lands (the baseline had none):

| Item | Fig. 12 | Baseline | Final | Light it costs | Verdict |
| ---- | ------- | -------: | ----: | -------------- | ------- |
| S11, S12 (L7) cut | 8.8 | 9.4 | 8.8 | 0.0 points at every field, at infinity and from the printed 0.5× and 1:1 object points | keep (slight); restores the drawn steps L7 below L8 and not above C2 |
| S7 land (`rimExtensionSd`) | curve to about 8.7, land to 9.9 | none | sd 8.8, land 9.9 | 0.0 points | keep; drawn, squares L4 at its 9.9 mm edge |

Kept: C2 at 8.8 mm (its drawn curves end at 8.3–8.5 mm; see Open) and L8 at 9.4 mm (drawn 9.5, 1.6 %). The STO radius
is untouched.

Light. The corner-light comparison against the baseline rims (full-pupil lattice, wide open, infinity) loses nothing
anywhere; the worst loss is 0.0 points. Transmission at 0, 2.2, 4.5, 6.7, 9.0, 11.2 and 13.5° goes from 100, 92.8,
84.9, 74.7, 57.1, 36.6 and 11.7 % to 100, 99.4, 93.9, 86.4, 77.6, 62.5 and 41.2 %; relative illumination at the
corner goes from 11.1 to 38.6 %, against the patent's marginal ray ratio of 32.1 at 14.25 mm (Expression 5). Traced
from the printed object points to the 14.18 mm corner: at 0.5× (A = 124.9239 mm) the axis passes 100 % before and
after and the corner 33.5 → 57.5 %; at 1:1 (A = 79.408 mm) the axis 91.5 → 100 % and the corner 50.5 → 63.4 %.
`audit:surface` reports no errors; `audit:aperture` finds the stated f-number within 3 % with no rim limit; the
image-circle and field-coverage audits do not flag the lens (corner 13.5° clear). EFL 59.265 mm, F/2.86, engine
half-field 13.5° and stop radius 8.4827 mm are unchanged. The S4 asphere departs −28.9 µm from its sphere at 11.3 mm
(sag 2.258 mm) and does not turn over within 13 mm.

Labels. The cemented brackets D1–D3 became C1–C3, because the gap labels D5, D10, D15 and D20 name spacings; the
elements' `cemented` values, the roles and the analysis follow. L11's role and analysis text said lanthanum crown;
1.77250/49.6 (TAF1, N-LAF34 class) is a lanthanum flint, and both now say so. Checked and correct: element types
against the signs of R (L1 and L6 negative/positive menisci convex to the object, L2, L8, L10 and L11 biconvex, L4
plano-concave with S6 flat, L5, L9 and L12 biconcave, L3 a positive meniscus with one asphere, L7 a positive
meniscus); L1–L12 sequential, since the patent names groups and surfaces but no elements; focal lengths shown in the
inspector (L3 +40.44, L8 +135.39, L11 +60.24 mm); S4 the only asphere (Table 12) and the only `A` label; the stop
between S14 and S16 (ST); groups G1 S1–S5, G2 S6–S10, G3 S11–S14, G4 S16–S20 and G5 S21–S22 as bracketed in Fig. 12,
with no parent and subgroup pair and no cement layer.

Tag. L8 keeps `apd: "inferred"`. The patent designates no anomalous-dispersion glass; Samsung lists one ED element
without placing it, and no Samsung construction drawing was found. L8 (1.49700/81.6, FCD1 class) is the only ED-class
glass, and Table 13's Expression 3 value (81.6) marks it as the stabilizing lens. The inspector shows "APD (INFERRED)"
with glass FCD1.

Movement. Keyframes 0, 0.8029 and 1 are infinity, 0.5× (230.92 mm object to image) and 1:1 (185.41 mm). D5 2.0 →
6.2983 → 11.3642 mm (G2 toward the image by 4.30 and 9.36 mm); D10 10.94 → 6.6417 → 1.5758 (B + C = 12.94); D15
22.0052 → 11.5409 → 3.5925 (G4 toward the object by 10.46 and 18.41 mm); D20 11.7148 → 22.1791 → 30.1275 (D + E =
33.72). G1, G3 with the stop and G5 stay fixed. This matches Table 11, claims 3 and 4 and the three panels of
Fig. 12; the overlay shows a maximum travel of 18.41 mm and the slider's near end reads 19 cm.

Aberrations against Fig. 13A (M = 0). Relative to the d-line paraxial focus, patent / model in mm: C paraxial +0.048 /
+0.048, F paraxial −0.023 / −0.023, d marginal +0.056 / +0.058, C marginal +0.116 / +0.113, F marginal +0.019 /
+0.018. The plot's zero lies 0.058 mm behind the model's printed image plane, a uniform shift. Tangential and sagittal
focus relative to the axis, patent at 3.56, 7.12, 10.68 and 14.25 mm: +0.008/−0.005, +0.022/−0.015, +0.055/−0.019,
+0.053/+0.005; model at 3.48, 6.99, 10.54 and 14.17 mm: +0.004/−0.006, +0.022/−0.018, +0.055/−0.022, +0.051/+0.007.
Distortion −0.022, −0.061, −0.096 and −0.050 % against the model's −0.02, −0.06, −0.095 and −0.046 %. No line or
curve is off by more than the reading error.

Glass. L2 (1.61780/63.4) and L3 (1.73968/49.0) stay unmatched. Table 10 (PDF p. 37) prints only nd and νd, with no
glass name, extra line index or partial dispersion. Both pairs occur once in the patent: Embodiments 1 and 3 put
1.61800/63.4 (PCD4 / N-PSK53A class) at L2, and Embodiment 4 puts 1.74330/49.2 (NBF1 class) at the aspherical L3.

Open:

- C2 is drawn at 8.8 mm against the figure's 9.5 mm edge. Fig. 12 ends its cemented S9 and rear S10 curves at
  8.3–8.5 mm inside lands; a cemented face cannot carry a land, and S8 at 9.5 mm is refused by the S7–S8 gap (2.931 mm
  of the 2.898 mm allowed at the default gap fraction; 0.92 would admit it). (Closed 2026-11-08: C2 is square at
  9.4 mm with an S10 land and `checks.gapSagFrac` 0.91; see the third review below.)
- C3's cemented S17 is drawn to the 12.7 mm edge, where Fig. 12 ends it near 11.1 mm inside an L9 land; at 11.1 mm it
  limits no ray at infinity. (Closed 2026-11-08: Fig. 12 carries S17 to the edge on L10's side; only L9's concave
  side stops near 11.1 mm, and a cemented face takes one rim. See the third review below.)

## 2026-11-08 — Glass backfill

L2 now takes HOYA PCD4's dispersion curve (1.61800 / 63.40) while the trace keeps the printed nd 1.61780: Embodiments
1 and 3 print 1.61800 / 63.4 in the same position, and the Abbe number is identical, so the colour trace is unchanged
in practice (the second review found C and F foci within 0.003 mm of Fig. 13A). L3 (1.73968 / 49.0) stays Unmatched;
Embodiment 4's 1.74330 / 49.2 in that position is 0.0036 away in nd, outside the catalog match window.

## 2026-11-08 — Third review: diagram, labels and movement

Compared: the local page at infinity, 0.5× and 1:1, the focus-movement overlay and the inspector line of all twelve
elements, against Fig. 12 (PDF p. 27, M = 0 panel at the native 300 dpi; the text ties Tables 10–12 to Fig. 12). The
scale was proved again: the axis is level on row 1131.5; S1 at 617.5 px and the image line at 2023.5 px give
13.264 px/mm, and S10, S16, S21 and S23 then fall within 1.6 px of their crossings; arc fits of S1, S2, S4, S7, S9,
S17, S18 and S21 give 0.96–1.03 of that scale across the axis. Every rim reads within 1 % of its file value except C2.

| Item | Before | After | Fig. 12 | Light it costs |
| ---- | -----: | ----: | ------- | -------------- |
| S8, S9 (C2) | 8.8 | 9.4 | 9.5 edge, on the same pixel rows as L8's | 0.0 points |
| S10 land (`rimExtensionSd`, `sd` 8.8 kept) | none | 9.4 | curve ends near 8.2 mm, vertical to the edge | 0.0 points; drawn, so it stays |
| `checks.gapSagFrac` | 0.90 (default) | 0.91 | L4's land and L5's front corner 0.34 mm apart (model 0.30) | none |

Verdict: C2 sat inside the 10 % band, but the page drew it level with L7 and 0.6 mm below L8, where Fig. 12 draws it
0.7 mm above L7 and level with L8, and the L4-to-C2 step was 1.1 mm against 0.35 mm drawn. The figure draws C2 as it
draws C1 and C3: S8 runs to the edge, the cemented S9 reaches it on L6's side (L5's concave side ends near 8.6 mm in
a land), and S10's curve stops near 8.2 mm. 9.4 rather than 9.5 keeps C2 level with L8 (9.4) and needs the smaller
relaxation. At the default fraction the validator refuses it: "combined surface sag (2.92 mm) exceeds allowed gap
intrusion (2.898 mm of 3.220 mm)", and S7's land "intrudes 2.917 mm into the 3.220 mm gap" to S8. 0.91 admits it;
9.5 would need 0.92, as the second review quoted. The faces do not cross at any focus state.

Second-review land and cut verdicts re-measured: unchanged; worst loss 0.0 points. Transmission at infinity stays 100,
99.4, 93.9, 86.4, 77.6, 62.5 and 41.2 % from 0 to 13.5°. Traced from the printed object points, the corner stays at
57.5 % (0.5×) and 63.4 % (1:1), with the axis at 100 %. Engine half-field 13.5°, F/2.86 and stop radius 8.4827 mm
are unchanged; `audit:surface` reports no errors, `audit:aperture` finds no rim limit, and the image-circle and
field-coverage audits pass the lens.

Labels and tags re-checked. Inspector types agree with the signs of R, focal lengths match thick-lens values to
0.01 mm, the roles hold (L5 at −27.15 mm is the strongest negative and L10 at +30.74 mm the strongest positive), and
S4 carries the only `A`. L8 keeps `apd: "inferred"`: Samsung lists one ED element without placing it, Table 13's
Expression 3 value (81.6) marks L8 as the stabilizer, and its FCD1 curve has ΔPgF +0.032 against +0.005 for L12's FC5.
The analysis claimed νd within 0.04 for the ten HOYA equivalents (FC5 is 70.45 against 70.4) and the Abbe-number
model for L2 after the PCD4 backfill; both now read correctly. Colour with PCD4 on L2: C and F paraxial foci +0.047
and −0.024 mm, d, C and F marginal +0.058, +0.113 and +0.017 mm, against Fig. 13A's +0.048, −0.023, +0.056, +0.116
and +0.019. Every medium, the plate included, is dispersive.

Movement re-checked against Table 11: G2 moves 4.30 and 9.36 mm toward the image and G4 10.46 and 18.41 mm toward the
object at 0.5× and 1:1; G1, G3 with the stop and G5 stay fixed (B + C = 12.94, D + E = 33.72 mm). The 0.8029 keyframe
is 185.41 / 230.92; the overlay shows 18.41 mm maximum travel and the slider runs from ∞ to 19 cm.

At 0.5× and 1:1 the page's outermost on-axis rays pass above L3 and end there. They are launched from the focused
state's paraxial entrance pupil (48.17 mm across at 1:1), which over-fills the stop at these conjugates; the beam that
fills the stop from the printed object point reaches 11.21 mm at S4A and clears it.

Still open from the first section: which of Embodiments 4 and 5 is the production lens, and the unmodelled OIS shift.
