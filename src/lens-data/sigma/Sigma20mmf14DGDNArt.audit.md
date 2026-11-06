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
- Open: the patent's condition (4) names L15 (E-FDS1 coordinates, ΔPgF +0.028) as a high-anomaly positive; it is not
  tagged `apd`, because Sigma's drawing does not mark it as special glass.
