# Source and native geometry audit

- Complete primary numerical table and associated figure independently viewed.
- Literal radii, spacings and d-line glass pairs preserved; no performance tuning.
- Image plane derived independently and frozen before native rays; not printed BFL.
- Model is infinity-only; full dispersion remains a proxy (closed 2026-11-09: all three pairs now resolve to exact
  catalog rows).

## 2026-11-09 — Deployment validation

Independent check against US 4,139,264 A Example 2 (400 dpi page images; the OCR layer is corrupt): 11 R, 10 d and
6 nd/νd pairs equal the patent ×2. Engine EFL 200.03, F/4, half-field 6.2°; F123 69.05, F1234 55.12 and Petzval −0.062
match the printed 69.0 / 55.1 / −0.06. Front page: Asahi Kogaku Kogyo, inventor Yasuo Takahashi, granted 1979-02-13,
so the design is in-house. Attribution: the LX manual lists the M 200mm f/4 as 6 elements / 5 groups, 12°, 2 m,
matching Fig. 3; Example 1 is also 6/5, and the Example 2 choice follows the PhotonsToPhotos mapping. No maker
section drawing was found. At ×2 the front vertex sits about 2.7 mm ahead of the 111 mm barrel, so the production
focal length may be a little shorter.

Deployment change: `focalLengthMm.design` → 200, the stated design focal length at the file's scale.

Open: name form ("PENTAX SMC M 200mm f/4" in the house pattern); wording. (Closed: name set in the rename commit;
wording in the cleanup pass below.)

## 2026-11-09 — Cleanup and wording pass

Fields changed in `PentaxM200mmf4.data.ts`:

- Header comment rewritten in plain terms with every fact kept: patent and example, ×2 scale, printed vs derived
  values, the misprinted Petzval footer, how the stop and rims were set, the Example 1 alternative, and the
  retail-length note.
- `subtitle`: "US 4,139,264 A; probable association, 2x retail-scale hypothesis" → "US 4,139,264 A, Example 2 —
  probable match to the 1977 production lens" (1977 release per Cine Lens Wiki).
- `specs`: ["6 ELEMENTS / 5 GROUPS", "QUALIFIED PATENT RECONSTRUCTION"] → ["6 ELEMENTS / 5 GROUPS", "DESIGN f = 200
  mm", "DESIGN F/4", "ALL SPHERICAL", "PATENT f = 100 SCALED × 2"].
- `catalog.closeFocusM.marketing`: added, 2 m (Pentax LX manual, printed p. 61).
- `focus.closeFocusM`: 2 → 1e15 (static infinity; the patent prints no close state and names no focusing group);
  description rewritten.
- `aperture.blades`: added, 8 (Cine Lens Wiki; the LX manual gives no blade count).
- Glass labels, exact catalog rows at the printed precision: L1, L3, L4 Unmatched → S-BSL7 (OHARA, 1.51633 / 64.14);
  L2, L6 Unmatched → FD140 (HOYA, 1.76182 / 26.61); L5 Unmatched → NBFD5 (HOYA, 1.76200 / 40.26).
- Element `role` added to all six.

`PentaxM200mmf4.analysis.md` rewritten to the analysis spec: product description, in-house attribution and its basis
(PhotonsToPhotos listing; Example 1 is also 6/5), the retail-length note, conditions table, element roles from the
patent text, glass table, Fig. 4 spherical-aberration comparison and a limitations list. Removed process material
(frozen-plane wording, MTF grid and sensitivity-study counts, render-trim and gate notes) and the separate
"Aspherical Surfaces" section (all spherical).

Engine numbers, identical before and after: EFL 200.0297 mm, F/4.000, half-field 6.2°, stop radius 18.158 mm,
paraxial BFD 62.6492 mm, total track 159.2092 mm. Only `focus.closeFocusM` changed (2 → 1e15). Surface audit OK;
the aperture audit reports no rim limit.

Open: no Pentax construction diagram was found, so Fig. 3 cannot be compared with a maker drawing. At ×2 the front
vertex sits about 2.7 mm ahead of the 111 mm retail barrel; a production focal length a few percent below 200 mm
would fit better, but the file keeps the house rule of scaling to the marketed focal length. The stop position (mid
d6) is a modeling choice; the patent draws no iris. (Stop closed 2026-11-09: moved into d8 from Fig. 4's field curves;
see the second review.)

## 2026-11-09 — Semi-diameter pass against the patent figure

Source: `patents/US4139264A.pdf`, PDF p. 3 (sheet 2), Fig. 3, which is Example 2 (Fig. 1 is Example 1). The page is a
300 ppi CCITT scan; it was read at 600 dpi. The optical axis is row 2599–2600 (600 dpi), skewed by under 2 px across
the figure.

Scale: vertex crossings on the axis put S1 at x = 1579.5 and S11 at x = 2944.5, 1365 px for 96.56 mm (×2 model), so
14.14 px/mm. Checks on other spans: S1 to S7 reads 817 px against 811 predicted, S8 to S9 410 against 405, S1 to S3
and S1 to S6 within 4 px. The vertical scale matches: the sag of the deep S9 face (R −28.36 mm) at 100 and 150 px
from the axis reads 12 and 30 px against 12.7 and 29 predicted. S1 reads about 10 % flatter than its radius, so the
L1 front curve is drawn slightly schematically.

Figure rims (outer ink, top and bottom averaged, mm at model scale) against the file:

| Surface | File sd | Figure | Ratio | Decision |
|---|---|---|---|---|
| 1, 2 (L1) | 25.2 | 25.7 | 1.02 | kept (noise) |
| 3, 4 (L2) | 23.6 | 23.9 | 1.01 | kept (noise); drawn square-cut |
| 5, 6 (L3) | 23.0 | 23.2 | 1.01 | kept (noise) |
| 7, 8 (L4) | 15.6 | 16.0 | 1.03 | kept (noise); drawn square-cut |
| 9 (L5 front) | 12.5 | cap 10.8, edge 12.7 | 0.86 / 1.02 | sd 12.5 → 11.1, `rimExtensionSd` 12.5 |
| 10, 11 (L5/L6) | 12.5 | 12.7 | 1.02 | kept (noise) |

S9: Fig. 3 ends L5's concave front face at 150–155 px from the axis (10.6–11.0 mm; q ≈ 0.85 of the 179 px edge, ±0.02
for one native pixel) and bevels it to the flat top at 178–182 px, on both halves. At 10.8 mm the cap would cost
4.5 points of corner light at 4.1° and 5.0 at 5.1° against the starting rims; 11.1 mm is the smallest radius within
3 points at every field (rimcost: 94.4 → 92.1 at 4.1°, 84.8 → 82.5 at 5.1°, 72.4 → 71.6 at 6.1°; 11.0 mm loses 3.2).
The land keeps the drawn 12.5 mm edge. An inferred `rimCutDepthMm` was not usable: the traced corner beam reaches the
12.5 mm rim of S9, so no inferred cut radius can clear it.

Engine values are unchanged: EFL 200.03 mm, F/4.000, half-field 6.2°, stop radius 18.158 mm, image circle and field
coverage 100 % (21.65 mm corner, 6.1°). Real-ray clearance at Y = 21.63 mm: no axial clip or chief-ray block; the
axial marginal ray reaches 8.01 mm at S9 against the new 11.1 mm cap. Corner illumination 72.4 % before, 71.6 % after.
Surface audit OK, aperture audit reports no rim limit. The page at `/lens/pentax-m-200mm-f4` (infinity, the only
printed state) shows the bevelled L5 front as a short land and otherwise matches the figure's proportions.

Open: none for rims. No maker section drawing exists to compare.

## 2026-11-09 — Second review: diagram, labels and movement

Compared the live page (`/lens/pentax-m-200mm-f4`, infinity, `?el=1`, `?el=5`, `?el=6`, `?mv=focus`) with Fig. 3 of
US 4,139,264 (PDF p. 3, Example 2) at the scale proved in the semi-diameter pass (14.14 px/mm at 600 dpi from S1–S11;
the S9 and S11 arc sags fit their radii at that scale in both directions), with the model outline overlaid on the
figure at that scale.

Silhouette: L2 drawn taller than L3 (23.9 against 23.2 mm on the figure) renders taller (23.6 against 23.0); L2, L3 and
L4 render square-cut as drawn; the rear pair's front face ends in the short land where Fig. 3 bevels it. No rim change.

| Cut or land | Figure | Baseline | Final | Light cost | Verdict |
|---|---|---|---|---|---|
| S9 cap (cut) | cap end 10.6–11.0 mm | 12.5 | 11.1 | 2.4 pts at 4.1°, 2.3 at 5.1°, 0.8 at 6.1° | keep: slight |
| S9 `rimExtensionSd` (land) | bevelled edge 12.6 mm | none | 12.5 | 0.0 (outside the clear cap) | keep: drawn |

Final worst loss against the baseline rims: 2.4 points at 4.1°; corner 72.4 % → 71.6 % at 6.1°. Engine half-field
6.2° and F/4.000 before and after.

Labels changed: the cemented-pair bracket `REAR DOUBLET` → `C1`, and `cemented: "C1"` on L5 and L6, the convention of
the other Pentax M files; the inspector now tags both elements "DOUBLET C1". Checked and correct: L1–L6 names (the
patent names lenses only as first to sixth), every `type` against the signs of R, roles, focal lengths in the
inspector (L5 −33.97 mm, L6 +60.78 mm), no aspheric markers (all spherical), no `apd` tags (the patent names no
special glass and Pentax publishes none). Movement: static; the movement panel reports no modeled group movement and
the focus slider reads "Not modeled".

Colour against Fig. 4 (d and g lines, F = 100): g-line paraxial focus +0.088 behind d (figure +0.090); g-line zones at
0.7 and full aperture −0.046 and +0.217 (figure −0.04 and +0.20); d-line zones −0.150 and +0.080 (figure −0.144 and
+0.06). Distortion at 6.2° +1.08 % (figure +1.16 %). All six labels resolve exactly (S-BSL7, FD140, NBFD5); no
nd-only medium. Assignee "Asahi Kogaku Kogyo Co., Ltd." is the catalog's canonical spelling (34 uses); the front page
prints Asahi Kogaku Kogyo Kabushiki Kaisha.

Open: Fig. 4's tangential field curve does not fit the mid-d6 stop. Traced at the d-line, the model gives ΔM −0.170
and ΔS −0.037 at 6.2° (F = 100) where the figure reads −0.104 and −0.026; the mid-field values agree. Moving the stop
plane in a scratch copy, the curve fits best 2–4 mm (model scale) behind L4's rear vertex, in d8: ΔM RMS error 0.003
over seven field readings against 0.028 now, edge −0.106, distortion +1.11 %. Placing the stop there is a change to
`d` and the stop position, outside this pass; with the current rims it would lower the corner to 69.6 % and make the
front rims vignette from 1°. (Closed 2026-11-09 on the coordinator's decision, as for the M 120: S6 d 16.61 → 33.22
with the STO row removed there; S8 d 28.68 → 3.12 with the STO row, d 25.56, after it, so the stop sits 64.00 mm
behind S1, the centre of the 63–65 mm best-fit band. Nothing else moved and no rim changed. At 6.2°, F = 100:
ΔM −0.170 → −0.103 (figure −0.104), ΔS −0.037 → −0.032 (figure −0.026), distortion +1.08 % → +1.11 % (figure
+1.16 %); ΔM RMS over seven fields 0.028 → 0.003. EFL 200.030 mm, BFD 62.649 mm, half-field 6.2° and F/4.000 are
unchanged; the stop radius follows F/N, 18.158 → 13.687 mm. Vignetting with the new stop: 99.0 / 95.0 / 91.0 / 86.7
/ 79.5 / 69.6 % at 1.0 / 2.0 / 3.1 / 4.1 / 5.1 / 6.1°, against 100 / 99.9 / 98.0 / 92.1 / 82.5 / 71.6 % before; the
rim cut at S9 now costs at most 1.4 points against baseline rims at the same stop (rimcost worst loss, 5.1°). Surface
and aperture audits pass, image circle and field coverage 100 %, no axial clip or chief-ray block.)
