# Private whole-E3 authoring audit

JP2025044411A Embodiment3 selected as a complete separate representative, not a repaired E1. All13rows and both complete asphere tables are source-native. Literal final18.81 and imagez41.02 frozen before native calls; header41.03/G2track13.04 versus literal13.03 and weakG1focal residual remain explicit. Source SD/iris hypotheses frozen before construction/tracing, never resized afterward. Native geometry zero hidden trim; six source-field scalar diffraction results pass, with original sparse208-ray-per-field clipping retained.

## 2026-11-09 — Deployment validation

Independent check against the full JP 2025-044411 A (Google Patents, 17 pp.; tables on pp. 13–14): 13 rows, the
stop, 2 cemented pairs, both aspheres (K, A4–A14) and D0/D13 at both states agree with the file; scale 1. Engine
EFL 18.543 (printed 18.54), F/2.82, BF 18.81, ω 37.95°, f2/f23 reproduce. Front page: Cosina Co., Ltd., inventor
Tatsuya Moriyama, published 2025-04-02. Attribution: 7/5, APD front element and the double-sided rear asphere
match Cosina's diagram; Embodiment 1 (the patent's representative figure) fits the L7 front-face shape slightly
better but prints L1 nd 1.78749, a one-digit misprint of 1.48749. Embodiment 3 is kept.

Deployment change: `maker` → "Voigtländer"; f/22 added to `fStops` and `maxFNumber` 22, as Cosina lists f/2.8–22.

Open (all closed in the cleanup pass below): the printed close state (D13 21.62, 0.169 m, 1:6.6) is not modeled;
glass labels; wording.

## 2026-11-09 — Cleanup and wording pass

Data file. Header comment rewritten in plain terms, keeping the patent, example, no scaling, the asphere convention,
the Embodiment 1 misprint (L1 nd 1.78749 for 1.48749) and why Embodiment 3 is used, the printed-versus-paraxial
image gap (18.81 against 18.814 mm), the 41.02/13.03 against 41.03/13.04 mm rounding, the G1 focal-length gap
(1113.9 against 1107.30 mm), and how the stop and rims were set. Subtitle → "JP 2025-044411 A, Embodiment 3 —
probable production correlation". The seven process-note specs → 7 ELEMENTS / 5 GROUPS, DESIGN f = 18.54 mm, DESIGN
F/2.82, 2 ASPHERICAL SURFACES / 1 ELEMENT, UNIT FOCUS; 1:6.6 MAX. `catalog.closeFocusM.marketing` 0.17 (Cosina
product page). Element labels "Source L16"… → "Element 1"…; boilerplate roles replaced by each element's job, with
the patent paragraph where one applies; L1 apdNote rewritten (Cosina marks the front element as anomalous partial
dispersion; FK5-type pair). Exact catalog equivalents replace the seven `Unmatched` labels (all within 0.0001 in nd
and 0.15 in νd, each confirmed to resolve): L1 J-FK5 (HIKARI), L2 TAFD55 (HOYA), L3 E-FD1L (HOYA), L4 and L5 TAFD37A
(HOYA), L6 J-SF6 (HIKARI), L7 L-BAL42 (OHARA).

Focus. The printed shortest-distance state of Table 11 is now modeled: surface 13's `d` moved into `gaps["13"]` as
D13 [18.81, 21.62], `focus.closeFocusM` 1e15 → 0.16903 (125.20 + 22.21 + 21.62 mm object to image),
`published: [1]`, and one `first-surface` conjugate at 125.20 mm citing Table 11. Description rewritten (PUBLISHED
unit focus, 2.81 mm extension, 1:6.6).

Engine before → after (infinity): EFL 18.54269 → 18.54269 mm, F/2.82 → 2.82, half field 37.95° → 37.95°, stop
radius 3.44193 → 3.44193 mm, BFD 18.8138 → 18.8138 mm, track 41.02 → 41.02 mm. New close keyframe: object 125.24 mm
from surface 1 (printed 125.20), 169.07 mm object to image, magnification −0.1515. Surface audit OK; aperture audit
reports no rim limit.

Analysis rewritten from process notes to the house skeleton: product identification with numbered evidence, the
Embodiment 1/2/3 comparison and the comparison with Cosina's optical section, group powers, element roles with
patent paragraphs, a glass table with catalog equivalents and partial dispersion, the printed focus states, the
asphere equation and profile, the stop and rim assumptions, a short scope section, and clean citations (process
hashes, archive IDs and ray/MTF sample tables removed).

Open: Cosina's section draws L7 with a slightly concave front face, as in Embodiment 1; if a later source favors
Embodiment 1, it could be modeled with a `source.errata` entry for L1 nd. Rims remain Fig. 5 estimates (measured
against Fig. 5 in the semi-diameter pass below).

## 2026-11-09 — Semi-diameter pass against the patent figure

Source: JP 2025-044411 A (`patents/JP2025044411A.pdf`, 17 pp.), Fig. 5 (Embodiment 3) on p. 17, rendered at 600 dpi
(the embedded CCITT image is 592 ppi). The axis is vertical with the object at the bottom. Scale: the S1–S13 vertex
span is 1329 px for 22.21 mm, so 59.84 px/mm. The other vertices then read S4 5.21, stop 7.50, S8 13.27 and S11
19.54 mm (printed 5.20, 7.50, 13.28, 19.56). Laterally, the drawn S1 arc follows the sphere within 0.03 mm out to
6.35 mm, the S9 arc within 0.02 mm out to 3.0 mm, and the S2 arc to 5.9 mm, so the figure is isotropic and to
scale. Edges were read as line centres on both sides of the axis, which sits at x = 1454.5 px. The left and right
readings agree within 2 px.

| Surface | Before | After | Fig. 5 | Evidence and decision |
|---|---:|---:|---:|---|
| 1 | 8.0 | 7.2 | 7.19 | L1 square edge; no light cost |
| 2 | 7.5 | 7.2, cut 2.46 | cap end 5.96, edge 7.19 | Flat land square to the axis at q = 0.829 ± 0.004. Cut radius 6.03 mm clears the wide-open beams (5.977 mm at 37.9°, infinity) by 0.05 mm. |
| 3 | 5.8 | 5.9 | 5.91 | L2 square edge; +0.5 points at the corner |
| 4 | 6.8 | 5.9 | 5.91 | L2 square edge |
| 6, 7, 8 | 4.0 | 4.0 | 3.69 | Kept. 3.7 costs 7.3 points (23°), 3.8 costs 4.8; 3.9 (2.5 points) is inside the noise band. |
| 9 | 5.1 | 5.3, cut 1.35 | cap end 3.79, edge 4.66 | Flat land at q = 0.81 ± 0.007. The cut moves out to radius 4.66 mm: the beams reach 4.598 mm (34.4°, focus 0.75), and an S9 cap under about 4.6 mm costs light (4.4 mm: 3.5 points). Edge raised to S10's height, as L5 is drawn square-cut. |
| 10 | 5.3 | 5.3 | 4.66 | Kept. 4.7 costs 17.5 points; the smallest value within 3 points is 5.2. |
| 11 | 6.1 | 6.1 | 5.42 | Kept. 5.4 costs 17.4 points; the smallest value within 3 points is 6.0. |
| 12, 13 | 7.2 | 7.2 | 6.70 | Kept. 6.7 costs 13.3 points at 37.9°; the smallest value within 3 points is 7.1. |

Light costs are against this file's starting rims, measured with the app's vignetting curve at focus 0, 0.25, 0.5,
0.75 and 1. The kept rims of G2A, G2B and L7 are 7–14 % above Fig. 5. Their light-limited minimums (3.9, 5.2, 6.0 and
7.1 mm) are within 0.1 mm of the current values, so they were not spent from the 3-point budget. The S2 and S9 lands
reproduce the drawn flat steps on L1 and L5 at no light cost.

Results for the final set: worst corner-light loss 0.0 points at every focus state. Corner illumination is 58.9 →
59.4 % at 37.9° (infinity), 63.9 → 63.9 % at 36.8° (focus 0.5) and 67.5 → 67.5 % at 35.9° (close). The real-ray
check at the patent's 14.2 mm image height shows no axial clip or chief-ray block at either printed focus state:
S1 7.2 mm against the lower rim ray's 7.21 mm (0 % side), S3 1 % side. The rim-cut probe is clear for both cuts. The
surface validator passes, the image-circle floor shows no undersized surface, field coverage is 100 %, and the
aperture audit reports no rim limit. Engine EFL 18.543 mm, F/2.82, half field 37.95° and stop radius 3.442 mm are
unchanged. The live page shows the L1 and L5 lands and L1 taller than L2 at infinity and at the close state.
Overlay: `$S/sd/color18/overlay.png` (scratch, not in the repo).

Maker drawing (second check, Cosina section SVG): it has the same 7/5 order, with the APD front element and the
double-sided rear asphere. It also draws the S2 land (cap end 0.79 of L1's edge), the L5 front land (cap end 0.54)
and a flat step on L6's front. Relative to L1 its heights are L2 0.83, G2A 0.51, L5 0.72, L6 0.83 and L7 1.01.
Fig. 5 gives 0.82, 0.51, 0.65, 0.75 and 0.93, and the model 0.82, 0.56, 0.74, 0.85 and 1.00, so the maker drawing
sides with the model's larger G2B and L7.

Open: the renderer joins L6's front rim to S11 with a sloped edge where Fig. 5 draws a flat step (a cemented face
cannot carry a land).

## 2026-11-09 — Second review: diagram, labels and movement

Compared the live page with Fig. 5 (p. 17 at 600 dpi). Pages checked: infinity, the close state, the focus overlay,
and the inspectors for elements 1 and 7. The scale was re-proved: the S13–S1 vertices sit at 4238–5567 px, which is
1329 px for 22.21 mm, so 59.84 px/mm. S4, the stop, S8 and S11 fall within 0.02 mm.

Rims: no change. The semi-diameter pass verdicts stand on re-measurement against the starting rims:

| Rims at the drawn value | Points lost at infinity |
|---|---:|
| G2A at 3.7 | 7.3 (23.3°) |
| S10 at 4.7 | 16.5 |
| S11 at 5.4 | 16.4 |
| L22 at 6.7 | 12.8 |

The cuts at S1 and S4 and the lands at S2 and S9 cost 0.0 points at focus 0, 0.25, 0.5, 0.75 and 1. The worst loss
is 0.0, and the corner gains 0.6 points at 37.9°. The close state was also traced exactly with a real object 125.2 mm
ahead of S1, at object heights 0–100 mm (95 mm images at 14.24 mm, the corner). The file transmits the same as the
starting rims at every height: 85.9 % of the stop-limited rays at the corner.

Labels changed:
- Element names L1–L7 → the patent's L16–L22, as `name` and `diagramLabel` (Fig. 5, ¶0071–¶0075).
- Cemented brackets and tags D1/D2 → C1/C2, because D labels name the spacings D0 and D13.
- `groups` G1 (S1–S4) and G2 (S6–S13) added, the patent's two groups (¶0070, ¶0072).
- L22 type → "Biconvex Positive (2× Asph)".

The header and analysis were remapped to match.

Checked and found correct:
- Every `type` agrees with the signs of R.
- Only surfaces 12 and 13 carry the aspheric marker.
- The stop sits between L17 and L18 (2.30 / 1.68 mm).
- The only `apd` tag is "inferred" on L16. Cosina's section marks that element; the patent names no special glass.

Movement: unit focus. Keyframe 0 is infinity (D13 18.81 mm) and keyframe 1 is Table 11's shortest state (D13 21.62,
D0 125.20 mm). The overlay moves G1 and G2 together 2.81 mm toward the object, and the slider's far end reads 17 cm
(0.169 m).

Colour against Fig. 6, paraxial, relative to d:

| Line | Patent | Model |
|---|---:|---:|
| C | +0.0375 mm | +0.038 mm |
| g | −0.015 mm | −0.030 mm |

No single catalog alternative moves g by more than 1.4 µm. Tried: FC5 and S-FSL5 (L16), S-LAH99 (L17), S-TIH1 and J-SF1
(L18), S-TIH6 (L21), S-BAL42 (L22). At full pupil, d reads −0.026 mm on the plot against −0.042 mm in the model.
Distortion at 14.2 mm is −1.8 % on the plot and −1.74 % in the model. All seven glass labels resolve. No medium is
nd-only, and the patent prints no line indices or PgF.

Assignee: "Cosina Co., Ltd." matches the front page (株式会社コシナ) and the corpus (29 files, no variant).

Open: the model's paraxial g focus is 0.015 mm short of Fig. 6 (1.5 % of the plot's full scale); no exact catalog
label explains it. The L21 front-edge bevel noted above remains.
