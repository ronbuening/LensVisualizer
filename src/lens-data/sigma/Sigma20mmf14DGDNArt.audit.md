# Private reconstruction audit

Whole JP2023167728A Numerical Example3, probable product family, not uniquely selected factory prescription. Native20.29/F1.46, fixed first-vertex image129.0544mm vs rounded129.05. Explicit stop21 at4.31/3.74mm split; iris and clear caps inferred. Literal source d587.56nm n/V/PgF; UI reference587.5618nm approximation, no exact catalog/full-dispersion identity. Source near d0=96.24 is first-surface distance; actual object-to-image225.2944 differs label225. Only endpoints source-backed; linear gap interpolation is implementation only. No retail0.23m cam law. The finite plot states omega50.16 degrees, while native finite angles use the current first vertex; this is an explicit operating-angle interpretation, not proof of the patent angle origin. Historical extra near image-window probes atY21.63 are an infinity-header extrapolation, not a separately printed finiteY.

All source/model states, pre-MTF geometry hypotheses, rejected alternatives, native trace counters, raw pupil records and every MTF prior grid are retained. Initial11ingest rejections lacked required layout and were corrected without optical changes. The finite height-bracket harness failure and assumed nearYwindow history are retained separately. Source-angle scientific results and compiled-viewer integration are distinct. No commit, publication or deployment.

(Closed 2026-11-06: both paragraphs above describe the package's Example 3 transcription, which was withdrawn as the wrong example; the file now transcribes Example 1. See the section below.)

## 2026-11-06 — Deployment fix and wording pass

### Why the file changed

The deployment check held the lens back because the package transcribed Numerical Example 3 exactly, but Example 3
does not match the product. Sigma's construction drawing for the 20mm F1.4 DG DN | Art draws the third element as a
thin meniscus convex to the image, its rear nested into the concave front of a biconcave fourth element, and marks a
front element aspheric on both faces. Example 1 has that L3 (R = −64.18 / −42.33 mm, 1.72 mm from L4's −39.68 mm
front) and a double-sided L1 asphere; Example 3's L3 is convex to the object (R = 84.35 / 265.74 mm). Of the other
examples, Example 2 makes only the front face of L1 aspheric, Examples 4, 5, 7 and 8 have 15 or 16 elements, and
Example 6 has 13 groups. Sigma's drawing also marks the first, eighth and last elements aspheric and the elements on
either side of the stop SLD, which in Example 1 are L10 (FCD705 coordinates) and L11 (FCD515 coordinates). Sigma's
page gives 17 elements in 15 groups, two SLD and three aspherical elements, 23 cm minimum focus, 1:6.1 and 94.5°.

### Source re-read

JP 2023-167728 A, PDF pp. 16–18 rendered and read against the text layer: all 33 rows of Numerical Example 1 (r, d,
nd, νd, PgF), the stop as surface 21, the six aspheric columns (surfaces 1, 2, 15, 16, 32, 33; K and A4–A16), the
various-data block (f = 20.33, F1.46, 2ω = 96.47°, Y = 21.63, total length 129.04) and the variable-spacing table
(INF / 226mm: d0 ∞ / 97.4379, d10 11.3900 / 3.7932, d12 2.0000 / 9.5968, BF 20.3784 / 20.3784). No mismatch between
the rendered page and the text extraction. ¶0117 prints the aspheric sag with the (1+K) conic term, so K enters as
printed (surface 2 is a paraboloidal base, K = −1). No cover glass or filter plate is listed. The 226 mm label is
object to image: 97.4379 mm plus the 129.0384 mm summed track is 226.4763 mm. ¶0013 defines the patent's ΔPgF line
as PgF − 0.64833 + 0.00180·νd; ¶0132's condition table for Example 1 (−0.58, 0.67, 1.92, 0.028, −0.84, 0.013, 47.3,
0.007, 25.2, −2.85, 1.73) is reproduced by the prescription. Front page: application 2022-79127 filed 2022-05-13,
published 2023-11-24, applicant 株式会社シグマ, inventor 植田 裕輝; the structured fields agree.

### What changed

- Prescription: every Example 3 value replaced by Example 1, no scaling (Example 1 is at production scale). Labels
  1A, 2A, 15A, 16A, 32A, 33A for the aspheres; STO at the printed position (d20 = 2.31, d21 = 3.56); variable gaps
  d10 and d12 as printed; BF 20.3784 as the last gap. Element types, cemented pairs (L11–L12, L13–L14), focal
  lengths, roles and glass labels rebuilt for Example 1.
- Glass: every pair matched to a HOYA or OHARA catalog glass in nd, νd and PgF (local AGF catalogs, PgF within
  0.0002): L-LAL13 (L1), TAF1, TAFD55 (L3, L5), LAF3, BSC7, TAFD45L, M-LAC130, FDS20-W, FCD705, FCD515, NBFD25 (L12,
  L13), TAC6, E-FDS1, E-FEL1, M-NBFD130. All 17 labels resolve in the repo catalog. `dPgF` is the printed PgF minus
  the engine's normal line. `apd: "inferred"` on L10 and L11 only (Sigma's SLD positions).
- Focus: closeFocusM 0.2252944 → 0.2264763 (object to image); conjugate 96.24 → 97.4379 mm from the first surface;
  `catalog.closeFocusM.marketing` 0.23 added. Projection fullFieldDeg 94.46 → 96.47 with maxTraceFieldDeg 48.23
  (printed 2ω); the paraxial chief-ray estimate stops at 44.2° on the L1 rear rim while the real chief ray reaches
  the 21.63 mm corner at 48.3°.
- `name` "SIGMA 20mm f/1.4 DG DN Art" → "SIGMA 20mm f/1.4 DG DN | Art" (corpus form); `source.example` Numerical
  Example 3 → Example 1; subtitle, specs, focus description and header comment rewritten; `groups` G1 / G2 focus / G3
  added. Analysis rewritten for Example 1.

### Rims

Fig. 1 (PDF p. 31, 400 dpi crop), scale 8.153 px/mm from surface 1 (page x 452.5) to the image plane (x 1504.5),
1052 px for 129.04 mm, checked by surface 1 to surface 33 (886 px for 108.66 mm, 8.154 px/mm); every vertex crossing
along the axis falls within about two pixels of the prescription. Top and bottom silhouettes agree. The lands on S2, S4, S7,
S11 and S18 were read at 800 dpi. Old values are the Example 3 file's, for a different prescription.

| Surface | Old sd | New sd | Basis |
| --- | ---: | ---: | --- |
| 1A | 30 | 31.6 | Fig. 1, 258 px |
| 2A | 23.86 | 23.5, land to 31.6 | curve end 23.3–23.7 (step position and 800 dpi crop) |
| 3 | 23.86 | 24.8 | Fig. 1, 203 px |
| 4 | 21.1 | 20.2, land to 24.8 | figure 20.6–21.2; 20.2 is the largest the cross-gap rule admits against S5 |
| 5, 6 | 21.1, 22 | 21.6, 21.6 | Fig. 1, 176 px |
| 7 | 20 | 19.5, land to 20.4 | 800 dpi crop |
| 8 | 20 | 20.4 | Fig. 1, 166 px |
| 9, 10 | 20, 20 | 20.2, 20.2 | Fig. 1, 165 px |
| 11 | 16 | 14.7, land to 16.4 | 800 dpi crop |
| 12 | 16 | 16.4 | Fig. 1, 133 px |
| 13, 14 | 16, 16 | 17.6, 17.6 | Fig. 1, 144 px |
| 15A, 16A | 16, 16 | 17.1, 17.1 | Fig. 1, 139–140 px |
| 17 | 15 | 16.25 | Fig. 1, 132 px |
| 18 | 15 | 15.0, land to 16.25 | 800 dpi crop |
| 19, 20 | 15, 15 | 15.45, 15.45 | Fig. 1, 126 px |
| 22–24 | 14, 14, 14 | 14.4 | Fig. 1, 117 px |
| 25–27 | 16, 15.78, 15.78 | 14.5 | Fig. 1, 118 px |
| 28, 29 | 16, 16 | 15.8, 15.8 | Fig. 1, 129 px |
| 30 | 16 | 15.15 | Fig. 1, 124 px |
| 31, 32A | 13.64, 13.64 | 13.0, land to 15.15 | Fig. 1 closes the air lens K at 15.15 mm; the printed faces cross at about 13.7 mm |
| 33A | 16 | 15.15 | Fig. 1, 124 px |

No rim was raised for rays. The F1.46 on-axis beam clears every surface at infinity, mid and close focus (100 % on
axis); the tightest margins are S11 (axial marginal 13.89 mm against 14.7) and S18 (14.10 against 15.0). No aspheric
turnover inside any clear radius. Rim departures from the vertex sphere: S1 +2.331 mm at 31.6, S2 −0.209 at 23.5,
S15 −0.422 and S16 +0.291 at 17.1, S32 −0.582 at 13.0, S33 +0.478 at 15.15. Wide-open geometric transmission at
infinity: 82.0 % at 28.4°, 66.8 % at 36.9°, 50.6 % at 42.6°, 40.7 % at 45.4°, 28.8 % at 48.2°. Trial runs show the
loss comes mainly from S11, the L13–L14 doublet and S31/S32 (S31/S32 at 13.6 would give 34.5 % at the corner); it is
kept as drawn.

### First order, patent against model

| Quantity | Patent | Example 3 file (before) | Example 1 file (after) |
| --- | ---: | ---: | ---: |
| EFL | 20.33 | 20.2944 | 20.3292 |
| F-number | 1.46 | 1.460 | 1.460 |
| Back focus (paraxial / last gap) | 20.3784 | 20.0243 / 20.0244 | 20.3791 / 20.3784 |
| Track, first vertex to image | 129.04 | 129.0544 | 129.0384 |
| Stop radius (derived) | — | 12.361 | 12.726 |
| Half-field | 48.23° | 47.23° (declared) | 48.23° (declared); real chief ray to 21.63 mm at 48.3° |
| Close state, object to image | 226 mm | 225.29 | 226.48 |
| Close EFL / magnification | — | 18.3225 / −0.1607 | 18.4871 / −0.1600 |

Group focal lengths by paraxial trace: G1 −57.916, G2 −99.662, G3 31.864, G1A −30.906, G1B 120.720, G3A 37.608,
G3B 27.263, G3C −47.407 mm, against the printed −57.92, −99.66, 31.86, −30.91, 120.72, 37.61, 27.26, −47.41. Petzval
sum 0.00229 mm⁻¹. The aperture audit reports no rim limit, the surface validator passes, image-circle and field
coverage are clean (100 %, corner clear), and the page renders with the Fig. 1 silhouette at infinity and close focus.

### Open

- Open: Sigma's 23 cm and 1:6.1 differ slightly from the patent's 226.5 mm state at −0.160; the production focus
  schedule is not published, so only the printed state is modeled.
- Closed 2026-11-06: the patent's condition (4) names L15 (E-FDS1 coordinates, ΔPgF +0.028) as a high-anomaly
  positive. ¶0036–0039 call for a high anomalous-partial-dispersion material at that position, which is the source
  identifying the material, so L15 now carries `apd: "patent"` (second review, below).

## 2026-11-06 — Semi-diameter pass against the patent figure

### Source and scale

JP 2023-167728 A, Fig. 1 (PDF p. 31), the Numerical Example 1 section at infinity, rendered at 800 dpi (the page
raster is about 800 ppi). The drawing carries no rays; the axis is level across the figure, and the top and bottom
halves agree to 1 px. Along the axis every vertex crossing falls within about 1 px of the prescription at 16.30 px/mm
(surface 1 to the image plane, 2103 px for 129.04 mm; surface 1 to surface 33, 1772 px for 108.66 mm), the 8.153 px/mm
of the earlier pass at 400 dpi. Across the axis the figure is drawn about 2.4 % taller: circle fits to the outer zones
of eight strongly curved spherical faces (S4, S6, S7, S13, S23, S26, S28, S31), with sag read at the axial scale, give
16.6–16.8 px/mm, mean about 16.70. The stop tick's inner end, 222.5 px from the axis, reads 13.3 mm at that scale,
the height of the real F1.46 marginal ray at the stop (13.34 mm). Heights below are stroke centres at 16.70 px/mm.

### Rims

| Surface | sd (kept) | Fig. 1 px | Fig. 1 mm | sd / figure |
| --- | ---: | ---: | ---: | ---: |
| 1A (L1 edge; also S2 land) | 31.6 | 516 | 30.9 | 1.02 |
| 2A, curve end | 23.5 | 387 | 23.2 | 1.01 |
| 3 (L2 edge; also S4 land) | 24.8 | 405 | 24.3 | 1.02 |
| 4, curve end | 20.2 | 345 | 20.7 | 0.98 |
| 5, 6 | 21.6 | 352.5 | 21.1 | 1.02 |
| 7, curve end | 19.5 | 319.5 | 19.1 | 1.02 |
| 8 (L4 edge; also S7 land) | 20.4 | 332 | 19.9 | 1.03 |
| 9, 10 | 20.2 | 331 | 19.8 | 1.02 |
| 11, curve end | 14.7 | 242 | 14.5 | 1.01 |
| 12 (L6 edge; also S11 land) | 16.4 | 266 | 15.9 | 1.03 |
| 13, 14 | 17.6 | 287.5 | 17.2 | 1.02 |
| 15A, 16A | 17.1 | 279.5 | 16.7 | 1.02 |
| 17 (L9 edge; also S18 land) | 16.25 | 264.5 | 15.8 | 1.03 |
| 18, curve end | 15.0 | 242 | 14.5 | 1.04 |
| 19, 20 | 15.45 | 252.5 | 15.1 | 1.02 |
| 22–24 | 14.4 | 234.5 | 14.0 | 1.03 |
| 25–27 | 14.5 | 236.5 | 14.2 | 1.02 |
| 28, 29 | 15.8 | 258.5 | 15.5 | 1.02 |
| 30, 33A (also S31, S32A lands) | 15.15 | 248.5 | 14.9 | 1.02 |
| 31, 32A, curve ends | 13.0 | 227 | 13.6 | 0.96 |

No value changed. Every rim sits 1–4 % above the drawing's own scale, which is the earlier pass's use of the axial
scale for heights; that is inside measurement noise, and lowering the rims would only take corner light. The two rims
the cross-gap rule holds under the figure are inside noise too: S4 at 20.2 mm against 20.7 mm, and S31 and S32 at
13.0 mm against 13.6 mm, where Fig. 1 ends both curves on the shared land at the height the printed faces cross
(13.7 mm). Admitting the figure readings would take `checks.gapSagFrac` 0.93 (S4 at 20.6 mm) and 0.97 (S31 and S32
at 13.5 mm); neither is set. The step order across every air gap matches the drawing (L1 > L2 > L3 > L4 ≈ L5;
L7 > L8 > L6 ≈ L9 > L10; L11–L12 ≈ L13–L14 < L15 > L16 = L17), and the lands sit where Fig. 1 draws them. Fig. 1 also
ends L13's rear at a land about 12.9 mm high while L14's convex front runs on in air to the 14.2 mm edge; a cemented
junction cannot carry a land, so S26 runs to the doublet's edge.

### Clearance and light

The F1.46 on-axis beam passes every surface at infinity, mid focus and the 226 mm state (100 % on axis at each). The
real axial marginal ray comes closest to S11 (13.89 mm against 14.7) and S18 (14.10 against 15.0); the real chief ray
reaches the 21.63 mm corner at 48.23°. The surface validator passes, the aperture audit reports no rim limit, and the
image-circle and field-coverage checks are clean. No aspheric turnover inside any clear radius; the rim departures
quoted in the analysis stand. Engine half-field 48.23°, F1.46 and stop radius 12.73 mm are unchanged. Wide-open
geometric transmission at the 48.2° corner is 28.8 % at infinity, 32.1 % at mid focus and 34.5 % at the close state,
unchanged.

### Maker's drawing

Sigma's A022 construction drawing has the same 17 elements in 15 groups in the same order, aspherical elements 1, 8
and 17, SLD elements 10 and 11, and the stepped rears of L1 and L2. It is not drawn to Fig. 1's proportions: scaled to
L1, its G3A elements grow toward the stop (L6 about 17.5 mm to L10 about 18.7 mm) where Fig. 1 shrinks them (L7
17.2 mm to L10 15.1 mm), and it draws L12 taller than L11 with a step where Fig. 1 draws the doublet square. The patent
figure of the modeled example governs.

## 2026-11-06 — Second review: diagram, labels and movement

### What was compared

The local page (infinity, the 226 mm state, the focus-movement overlay, and the inspector for L1, L6, L10, L11 and
L15) against JP 2023-167728 A Fig. 1 (PDF p. 31, rendered at the raster's native 801 dpi), the Example 1 text
(¶0079–0083), the variable-spacing table (PDF p. 17), Figs. 2–3 (longitudinal aberrations at infinity and 226 mm) and
Sigma's A022 construction drawing. Fig. 1 scale, measured afresh: vertex crossings give 16.32 px/mm along the axis
(surface 1 to the image plane, 2105 px for 129.04 mm; surface 1 to surface 33, 1774 px for 108.66 mm); a circle fit to
the L11–L12 junction (R = −18.34 mm) at three heights gives 16.61–16.67 px/mm across the axis, so heights below use
16.65 px/mm. Outer edges read L1 31.1, L2 24.4, L3 21.2, L4 19.9, L5 19.9, L6 16.0, L7 17.3, L8 16.8, L9 15.9, L10
15.2, L11–L12 14.1, L13–L14 14.2, L15 15.6, L16–L17 14.9 mm; every stored edge is 1.5–2.5 % above these, inside
measurement noise. The land corners read S7 19.0, S11 14.4 (land to 16.0), S18 14.5 mm. The silhouette, the step
order between neighbours and the square rims match Fig. 1 everywhere except L6, below.

### Lands and cuts

No face is below its value in the baseline file, so there is no cut. Each land was costed by raising the face under
it to the land height, wide open with the app's vignetting analysis at infinity and, for S11, also at the 226 mm
state traced from a real object point; where the validator refuses that, by the largest value it admits.

| Land | Fig. 1 | Baseline | Final | Light it costs (points, worst field) | Verdict |
| --- | --- | --- | --- | ---: | --- |
| S2 23.5 → 31.6 | curve end 23.2 | 23.5 | 23.5 | 0.0 (23.6 changes nothing; 24.0 and up refused, land intrusion 4.98 of 4.83 mm allowed; faces meet at 24.8) | keep: spacing, no cost |
| S4 20.2 → 24.8 | curve end 20.7 | 20.2 | 20.2 | 0.6 at the corner even at 21.0 with the cross-gap rule relaxed; 20.3 refused (combined sag 12.67 of 12.63 mm allowed) | keep: spacing |
| S7 19.5 → 20.4 | curve end 19.0 | 19.5 | 19.5 | 0.0 | keep: costs nothing |
| S11 14.7 → 16.4 | curve end 14.4 | 14.7 | 16.19 | 10.1 at 39.7° before; after, 0.93 at 42.6° at infinity and 2.99 at the 21.63 mm corner of the 226 mm state (real object) | partly raised |
| S18 15.0 → 16.25 | curve end 14.5 | 15.0 | 15.0 | 0.0 | keep: costs nothing |
| S31, S32A 13.0 → 15.15 | faces meet at 13.6 | 13.0 | 13.5 | 1.1 at the corner against 13.65, where the faces nearly touch; the printed faces cross near 13.7 | raised to the figure; keep: spacing, slight |

S11 is the front of the focus element L6. Its land took up to 10.1 points at 39.7° (59.6 % against 69.7 % for an
unstepped L6 front). The final 16.19 mm is the lowest two-decimal rim that keeps the whole lens within 3 points of an
unstepped L6 front (S11 at 16.4, S31 and S32A at 13.5) at every field, both at infinity and at the 226 mm state traced
from a real object point; 16.18 mm loses 3.20 points at that state's corner. The land stays from 16.19 to the drawn
16.4 mm edge. The F1.46 on-axis beam clears S11 at both focus states (13.89 mm against 16.19).

S31 and S32A rise to 13.5 mm, where Fig. 1 closes the air lens K. There the faces sit 0.16 mm apart (S31 sag +3.368,
S32A sag −1.321 mm across the fixed 4.85 mm gap, so the same at both focus states). The cross-gap rule needs
`checks.gapSagFrac` 0.97 to admit them (0.96 refuses: combined sag 4.69 of 4.66 mm allowed), and the file now sets it.
The raise adds 5.1 points at the infinity corner (32.96 to 38.04 %) and 13.1 at the near-state corner. The surface
validator passes at the final values. S32A's departure from its vertex sphere at 13.5 mm is −0.683 mm.

Wide-open geometric transmission, file before and after:

| State | 28.4° | 36.9° | 42.6° | 45.4° | 48.2° |
| --- | ---: | ---: | ---: | ---: | ---: |
| Infinity, before | 82.0 | 66.8 | 50.6 | 40.7 | 28.8 |
| Infinity, after | 90.4 | 75.8 | 62.9 | 53.6 | 38.0 |
| Mid focus (parallel beam), before / after | 83.6 / 91.8 | 67.8 / 77.1 | 53.2 / 64.4 | 43.2 / 56.2 | 32.1 / 45.9 |
| 226 mm state (parallel beam), before / after | 85.0 / 93.3 | 68.8 / 78.2 | 55.0 / 65.3 | 45.5 / 57.5 | 34.5 / 48.1 |

At the 226 mm state with a real object point 97.44 mm ahead of surface 1 (object heights chosen so the chief ray lands
at the stated image height; rays through a fine grid on the surface 1 vertex plane, counted relative to the axial
point), the 21.63 mm corner rises from 60.1 % to 94.0 %, against 97.0 % with S11 unstepped; at 20.5 mm image height
72.6 % to 104.8 % (107.6 %; off-axis values pass 100 % because the pupil grows off axis). The final worst loss against
the baseline file is 0.0 points (rimcost with `--loo`, infinity): the changes only add light.

### Labels, brackets and tags

- Element designations L1–L17 are the patent's own (¶0079: Ln is the nth lens from the object). Every `type` agrees
  with ¶0081–0083 and with the signs of R; the aspheric counts (L1, L8, L17, two faces each) match the table and the
  labels 1A, 2A, 15A, 16A, 32A, 33A. Element focal lengths agree with a paraxial trace to 0.05 mm. Roles agree with
  ¶0036–0039 and ¶0080–0083 and with the paragraphs the analysis cites.
- Groups G1 (1A–10), G2 focus (11–12) and G3 (13–33A) bracket the patent's groups; the subgroups are left to the
  analysis. The stop sits between L10 and L11, 2.31 mm behind surface 20, where Fig. 1 draws S.
- Added cemented brackets C1 (22–24, L11–L12) and C2 (25–27, L13–L14), which the file lacked, and renamed the two
  elements' `cemented` names D1, D2 to C1, C2 so the inspector matches the brackets and nothing reads like the d10 and
  d12 gap labels. On the page they sit above the doublets, clear of other labels.
- `apd`: L10 and L11 stay `inferred`, at Sigma's two SLD positions (blue on the A022 drawing). L15 gains
  `apd: "patent"` with an `apdNote`: ¶0036–0039 require the last positive lens of G3B to be a high-index, high
  anomalous-partial-dispersion material (conditions 3 and 4), and Example 1's L15 prints PgF 0.6388, 0.028 above the
  patent's line. Sigma's drawing marks L1, L8 and L17 aspherical and L10, L11 SLD, 17 elements in 15 groups, matching
  the file.

### Movement

The table (PDF p. 17) gives d10 11.3900 → 3.7932 and d12 2.0000 → 9.5968 from INF to the 226 mm column, BF 20.3784
in both. The file's index 0 is infinity and index 1 the 226 mm state; ¶0080 has G2 move from the image side toward
the object for close focus. On the page the movement overlay shows G2 travelling 7.60 mm from 81.5 mm to 89.1 mm
ahead of the image plane while G1 and G3 stay put, and the focus slider's far end reads 23 cm (the 226.5 mm state
rounded). Direction, order and amount are correct.

### Colour, astigmatism and distortion against Figs. 2–3

Read at 801 dpi on the plots' own scales (315 px/mm). At infinity the model's on-axis focus relative to the d-line
paraxial focus is C +35 µm, g −25 µm paraxially and d −88, C −45, g −122 µm at the F1.46 rim; Fig. 2 draws the three
curves within about ±0.05 mm of zero at the bottom, leaning to −0.05…−0.15 mm at the top, the same within reading
error. At the 226 mm state (real object): paraxial C +46, g −37 µm; rim d −59, C −17, g −57 µm, matching Fig. 3's
spread. No line is off by more than the reading error, so no glass label is suspect. Astigmatism at the infinity
corner: model ΔS −0.111, ΔM −0.102 mm against about −0.11 for both in Fig. 2; distortion −4.98 % at 48.2° against
about −5 %. Near-state astigmatism was not compared: the engine traces parallel beams at the near spacing.

### Unchanged

Engine half-field 48.23°, F1.46 and stop radius 12.73 mm before and after. The image-circle, field-coverage and
aperture audits are clean, and there is no clip of the on-axis beam or the corner chief ray at either focus state. All 17
glass labels resolve; the patent prints PgF for every glass, so none is unidentified.

### Open

- Closed 2026-11-06: the near-state cost of the L6 step. The coordinator applied the 3-point rule at the 226 mm state
  with a real object point too, and S11 is 16.19 mm (2.99 points at that corner).
- Closed 2026-11-06: S31 and S32A at 13.5 mm with `checks.gapSagFrac` 0.97, as the coordinator decided. Fig. 1 draws
  the air lens K closed at about that height, and the raise adds 5.1 points at the infinity corner.
