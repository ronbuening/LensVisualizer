# Fresh vs inherited evidence
Fresh build and canonical schema/geometry validation: zero issues on checkout db50c52df466bbcf1b9654411b186a27d280f16e. Native source-station parity unchanged within floating arithmetic (<4e-15mm), aspheres and image planes identical. Solver conserves summed gap values at each state, never changes sensor gap to chase focus. Finite-focus columns identical and no finite-focus published rows.

Fresh native first-order sweep: VALIDATION.json (1,025 states, including all authored and between-row positions). SOLVER_SCREEN.json includes attempted translations of three different internal blocks; only d19/d22 translation solved every state within specified bounds and retained monotone EFL. Other choices have absent bounded solutions or nonmonotone EFL and were rejected. Native prepared geometry uses derived gaps, not a separate analytical model.

Fresh full 3D equal-area stop-lattice screen: RAYS.json; each original/intermediate row and midpoint on-axis (coarse 8-wide lattice), plus17 zoom values at0/.5/full test field using16-wide lattice (208 samples). No trimming of failed/clipped rays from counts. Maximum axial RMS at authored sensor2.9214µm. Edge RMS/throughput are model/aperture-dependent and do not establish retail performance. Source wide edge coarse lattice84 transmitted/124 clipped, previous dense source lattice346/466. Broad off-axis outcomes require integration review.

Inherited unchanged: primary source scan, original independent transcription, literal source geometry checks and dense source-station 3D rays in prior original archive SHA256 ef941479b53cf455c9a0dfd4c6b3f35d6857278ac05b20f76e754f17a34f7824. Prior three-station unified hold retained separately, never overwritten.

Closed 2026-11-15 (the items below were settled by the deployment validation and cleanup passes; the real zoom cam remains unknown). Not completed: TypeScript static typecheck, compiled browser/full app regression, current-main compatibility, canonical visible catalog generation, actual mechanical cam verification. No commit, PR, publish or deploy. No factory identity or production-performance claim.

Additional fresh geometry/selector audit: densifying the data to all257 source/calculated rows and between-row midpoints yields zero canonical geometry issues. Non-stop compiled apertures match every authored cap exactly (no trimming). Native `publishedZoomStations` returns precisely indices0/64/128 at zoom0/.5/1, and only infinity focus. d19 range2.85..26.52mm, no reversals; d22 range3.75..12.132645mm with3 sampled slope-sign reversals. Maximum correction displacement2.570145mm relative to baseline group location. These modeled reversals are unsupported as factory cam behavior and explicitly narrow the claim to a computed experimental path.

## 2026-11-15 — Deployment validation

Checked by an independent re-read of the page images of WO 2022/137385 A1 (the PDF has no text layer), Numerical
Example 2: all 27 surfaces (radius, thickness, nd, νd), the five aspheric surfaces (3, 4, 19, 23, 24: conic and 24
coefficients), the five variable gaps at the three printed zoom positions, the stop position, the front page
(publication date 30 June 2022, Olympus Corporation, inventors Zen, Nakagawa, Yamada) and the lens drawing (Fig. 3).
No transcription mismatch was found. The patent's asphere equation uses (1 + k), so its k is this file's K. The index
values are d-line; ten of the glasses match Ohara and Hoya catalogue entries exactly at the d-line.

Verdict: valid with notes. The model reproduces the patent's stated values at the three printed positions: focal
length 8.16 / 14.14 / 24.51 mm (model 8.1617 / 14.1433 / 24.5127), back focus 14.88 / 14.90 / 14.90 mm (paraxial
14.888 / 14.902 / 14.897), full field 112.09° / 76.17° / 46.44° (traced 112.2° / 76.2° / 46.4°), group focal
lengths f2 = 270.01 (269.98) and f4 = −40.81 (−40.81), and the three conditional values 33.08 / 2.26 / 2.76. The
product link is strong: the maker states 16 elements in 10 groups, and the maker's published construction diagram
matches the model element for element (dual-sided aspherical L12, Super ED L13, HR L14 and L34, aspherical ED L35
and L51, HD L41, Super HR L52, ED L53, same cemented pairs and stop position). Examples 1 to 3 of the patent share
this layout, so Example 2 is one of three equally good candidates.

Changes made at integration:

- `catalog.closeFocusM.marketing`: absent → 0.23 (maker's minimum focus distance, constant across the zoom range).
  `focus.closeFocusM` stays at the infinity-only placeholder; the patent tabulates no close-focus state.
- `source.errata`: the single "unresolved" total-length entry was removed. The printed gaps sum to 131.40 / 122.62 /
  124.79 mm against printed totals of 131.41 / 122.63 / 124.79 mm; with the unrounded paraxial back focus the model
  gives 131.408 / 122.622 / 124.787 mm, so the difference is rounding in the patent's table, not a source error.
- Zoom station `focalLengthMm`: the 126 calculated values were rounded from 15–16 digits to 5 decimals (for example
  8.222558865914236 → 8.22256). Binary float noise in the interpolated gap rows was removed (for example
  23.911093750000003 → 23.91109375). No prescription value, printed gap or solved gap changed beyond 1e-10 mm.
- Header comment replaced by one block comment stating the source, example, scale, and which values are inferred.
- Analysis note: the sentence on the total-length difference now says it is rounding only.
- Analysis rewritten to the house section skeleton.

After the changes: focal length 8.1617–24.5127 mm, f/4.08 at every station; paraxial focus error across all 129
stations between −0.008 and +0.003 mm. Surface validation: OK, no errors. Aperture audit: no surface below the
on-axis beam, no rim limit. Image-circle audit: not undersized. Field-coverage audit (run on a copy marked visible):
all 129 stations reach 100 % of the 10.815 mm image height (56.1° at wide, 38.1° at middle, 23.2° at tele).

Open:

- Rims: at the wide end the geometric transmission is 100 % to 44°, 76 % at 53° and 42 % at the 56.1° corner; the
  middle and tele positions stay at 98 % or better. The loss comes from the inferred semi-diameters of surfaces
  20–22 (9 mm) and surface 4 (11.5 mm), not from the design: trying 11 mm on 20–22 gives 61 % at the corner, and
  13 mm on surface 4 gives 48 %. No rim was changed here; this is for the semi-diameter pass, which must also check
  edge thickness and gap clearance for any raise.
- Calculated zoom stations: the focus group (surfaces 20–22) overshoots by 2.57 mm between the middle and tele
  positions (d22 peaks at 12.13 mm against printed 9.72 and 9.44 mm, with three slope reversals), because the
  other groups are interpolated in straight lines between three printed positions. Focus is held, but the path is
  not a real cam.
- Wording and naming for the cleanup pass: lens name and key ("representative Example 2"), missing subtitle, the
  five `specs` lines, element names "Published medium N" (patent names are L11–L14, L21–L22, L31–L35, L41–L42,
  L51–L53), element types and glass labels, station labels, `focus.description`, and the voice of the analysis note
  and of the earlier lines of this file.
- `visible` is still false. (Closed 2026-11-15: the lens is now visible.)

## 2026-11-15 — Cleanup and wording pass

Files were renamed to `OlympusMZuiko825mmf4PRO.*` and the key set to `olympus-mzuiko-8-25-f4-pro` before this pass.
The optics were not changed: every radius, thickness, index, Abbe value, asphere term, semi-diameter and gap value is
as before.

Fields changed in the data file:

- `subtitle`: none → "WO 2022/137385 A1, Example 2 — element-by-element match to the maker's construction diagram".
- `catalog.specs`: the five process lines → "16 ELEMENTS / 10 GROUPS", "1 DSA / 2 EDA / 1 SUPER ED / 1 ED",
  "1 SUPER HR / 2 HR / 1 HD", "DESIGN f = 8.16–24.51 mm, F/4.08", "MIN. FOCUS 0.23 m". The HR count follows the
  maker's diagram (two); the maker's English specification list says one.
- Elements: names "Published medium 1–16" → the patent's L11–L14, L21–L22, L31–L35, L41–L42, L51–L53; `type` "Lens"
  → shape names from the radii, with "(2× Asph)" on L12 and L51 and "(1× Asph)" on L35; `focalLengthMm` and `role`
  added; `cemented` C1–C6 on both members of the six cemented pairs.
- Surface labels of the five aspheric surfaces: 3, 4, 19, 23, 24 → 3A, 4A, 19A, 23A, 24A (house form); gap key 19
  → 19A. Gap labels D7, D11, D19, D22 and BF added.
- `groups` G1–G5 and `doublets` C1–C6 added, following the patent's group structure.
- Zoom station labels: "Source infinity …" and "Calculated infinity; not published …" removed; the first and last
  stations are labelled "Wide" and "Tele". `published` flags are unchanged (true on stations 0, 64 and 128 only).
- `aperture.fStops`: [4.08] → [4.08, 5.6, 8, 11, 16, 22] with `maxFNumber` 22 (the maker's minimum aperture).
- `focus.description` and the header comment rewritten in plain words; the facts are the same.

Glass labels (printed nd / νd against the catalogue row; Δnd, Δνd):

- L13 S-FPL55 (0, 0.00), L21 S-NBH5 (0.00001, 0.00), L31 S-BSL7 (0, 0), L33 S-LAH89 (0, 0), L42 S-LAL19 (0, 0.01),
  L53 S-FPL51 (0, 0.01): Ohara.
- L11, L22, L32 TAFD32 (0, 0), L14 TAFD45 (0, 0), L34 TAFD35 (0, 0), L41 FDS18 (0, 0), L52 TAFD55 (0, 0): Hoya.
- L12 (1.58253 / 59.32) and L35, L51 (1.49650 / 81.53) stay unmatched: the nearest rows are 0.0004 to 0.0006 away
  in nd.
- `apd: "inferred"` on L13 (Super ED), L35 and L51 (aspherical ED) and L53 (ED), the positions the maker's diagram
  marks, each with a one-line note.

Engine numbers before and after are identical: focal length 8.1617 / 14.1433 / 24.5127 mm at the printed positions,
f/4.08 at every station, stop semi-diameter 3.720 mm at wide, paraxial back focus 14.888 / 14.902 / 14.897 mm. The
only difference in the built lens is the maximum f-number (16 → 22).

Analysis: title line added, glass section brought in line with the new labels, "Verification Summary" replaced by
"Model Scope and Limitations", aspheric surface labels noted.

Open:

- Closed: after this pass the surface validation printed OK, the aperture audit found 129 of 129 stations within
  3 % of the stated f-number with no rim limit, the image-circle audit found nothing undersized, field coverage was
  ≥ 99 % at all 129 stations, and all thirteen catalog glass labels resolve (three elements stay Unmatched).
- Rims: at the wide end geometric transmission is 76 % at 53° and 42 % at the 56.1° corner, from the inferred
  semi-diameters of surfaces 20–22 (9 mm) and 4A (11.5 mm). No rim was changed. (Closed 2026-11-15: see the
  semi-diameter pass below; the figure draws both no larger than the file, so they stay.)
- Calculated zoom stations: the focusing group overshoots by 2.57 mm between the middle and tele positions.
- Close focus is not modelled; the patent prints no near state.
- The earlier lines of this file keep the package's original wording as history.

## 2026-11-15 — Semi-diameter pass against the patent figure

Source: WO 2022/137385 A1, PDF page 32, Fig. 3, native 300 dpi. Panel (b), the middle position, was measured because
panel (a) is covered by leader lines; the elements are the same at every position. Scale: first vertex to image plane
1305 px for 122.62 mm, and the fifth group's front vertex to the image plane 320 px for 29.98 mm, both 10.64–10.67
px/mm. The drawn front element is 204.5 px high, which is 19.2 mm at that scale against the printed 19.96 mm, so
the drawing may run about 4 % small in height; the readings below give both.

| Surfaces | Element | File before | Figure (mm) | File after | Reason |
| --- | --- | --- | --- | --- | --- |
| 1 | L11 front | 19.96 | 19.2–20.0 | 19.96 | printed effective diameter |
| 2 | L11 rear | 15.5 | 13.9–14.4 | 15.5 | within 10 %; kept |
| 3A | L12 front | 14.5 | 13.9–14.4 | 14.5 | agrees |
| 4A | L12 rear | 11.5 | 10.6–11.0 | 11.5 | within 8 %; kept |
| 5–7 | L13–L14 | 11.5 | 10.4–11.4 | 11.5 | within noise; kept |
| 8–10 | L21–L22 | 7 | 6.8–7.0 | 7 | agrees |
| 12–14 | L31–L32 | 9.5 | 7.6–8.4 | 8.6 | drawn 12–20 % smaller; 8.6 is the smallest value that keeps wide-end light within 3 points |
| 15–16 | L33 | 10 | 8.8–9.2 | 9.2 | drawn 8–12 % smaller |
| 17–19A | L34–L35 | 11 | 9.0–9.4 | 9.4 | drawn 15–18 % smaller |
| 20–22 | L41–L42 | 9 | 8.8–9.2 | 9 | agrees |
| 23A–24A | L51 | 12 | 10.4–10.8 | 12 | figure value costs 20 points at the tele corner; kept |
| 25–27 | L52–L53 | 12 | 10.0–10.4 | 12 | figure value costs 18–20 points at the middle and tele corners; kept |

Eight surfaces changed, all in the third group, all reductions toward the figure. The figure gives no support for
enlarging surfaces 20–22 or 4A, the two rims that set the wide-corner loss: it draws the fourth group at 8.8–9.2 mm
and smaller than its neighbours, and the rear of L12 at 10.6–11.0 mm. They stay, and the wide-corner loss stays.

Illumination against the starting rims, every eighth zoom station: worst loss 2.7 points (at 44.3°, 8.16 mm); no
loss at any other station. Wide end before → after: 100 → 99.6 % at 41°, 100 → 97.3 % at 44°, 95.8 → 93.6 % at 47°,
88.4 → 88.2 % at 50°, 76.5 % at 53° and 42.3 % at 56.1° unchanged. Middle and tele corners unchanged.

After the change: surface validation OK with no errors; aperture audit 129 of 129 stations within 3 % of the stated
f-number with no rim limit; field coverage 129 of 129 stations at 99 % or more; image circle not undersized. The
built lens is unchanged in focal length, f-number, half-field and stop radius.

Metadata: `aperture.blades` 7 added (OM System product page: seven aperture blades). The maker's name for
the lens is "M.Zuiko Digital ED 8-25mm F4.0 PRO"; the file's display name writes the aperture as "f/4".

Open:

- The fifth group is drawn 10–17 % smaller than the model. Matching it would cost about 20 points of corner light at
  the middle and tele positions, so it is left larger than the figure.
- Wide corner: 42 % at 56.1°, set by surfaces 20–22 and 4A, both already at the figure's size.
- The model sketch was compared with the figure by eye only; no side-by-side image at matched scale was made.
  (Closed 2026-11-15: the second review below compared the live page with Fig. 3(b) side by side.)

## 2026-11-15 — Second review on the local site

Compared: the local page at 8.16, 9.5, 11, 12.5, 14.14, 16, 18, 20, 22 and 24.51 mm and the element inspector for
all 16 elements, against WO 2022/137385 A1 Fig. 3 (PDF page 32, panels a to c), the Example 2 tables (printed
pp. 16–19) and the front page.

Lands and cuts (the limit applied here is a loss under about 1 point at any field of any zoom position, against the
rims before the semi-diameter pass):

| Surfaces | Element | Starting rim | Figure (mm) | Earlier today | Now | Verdict |
| --- | --- | --- | --- | --- | --- | --- |
| 12–14 | L31–L32 | 9.5 | 7.6–8.4 | 8.6 | 9.0 | cut partly restored |
| 15–16 | L33 | 10 | 8.8–9.2 | 9.2 | 9.6 | cut partly restored |
| 17–19A | L34–L35 | 11 | 9.0–9.4 | 9.4 | 9.6 | cut partly restored |
| 2 | L11 rear | 15.5 | curve ends 13.9–14.4, edge 19.2–20.0 | no land | land to 19.96 | new land, costs nothing |
| 4A | L12 rear | 11.5 | curve ends 10.6–11.0, edge 13.9–14.4 | no land | land to 14.5 | new land, costs nothing |

- The three cuts together cost 2.7 points at 44.3° at the wide end (and about 2 points at 45.6–47.2° between 8.16 and 8.67 mm), which is
  not a slight loss. Restoring any one element alone won back only 0.0 to 0.3 points, because L31–L32 and L33 clip
  the same rays; the cuts had to be eased together. Trials at the wide end: 8.8 / 9.4 / 9.6 loses 1.4 points,
  9.0 / 9.4 / 9.6 loses 1.3, 9.0 / 9.6 / 9.4 loses 0.8, 9.0 / 9.6 / 9.6 loses 0.4, 9.2 / 9.8 / 9.6 loses nothing.
  9.0 / 9.6 / 9.6 was taken: it keeps the figure's order (L31–L32 lowest, L33 and L34–L35 level, the fourth group
  at 9.0 below them) at a worst loss of 0.4 points (44.3°, 8.16 mm; every second zoom station checked). The wide
  end now reads 99.6 % at 44.3° and 95.8 % at 47.2°, against 100 % and 95.8 % with the starting rims.
- Fig. 3 draws L11 and L12 as square-edged blocks: the rear curve stops short and a flat land runs out to the
  height of the front face. The page drew both with a slanted edge. `rimExtensionSd` 19.96 on surface 2 and 14.5
  on surface 4A draw the lands; they sit outside the clear apertures, so the traced light is the same with and
  without them, and surface validation passes at the file's `gapSagFrac` 0.9 (the L11 land clears the front rim of
  L12 by about 0.5 mm, the L12 land clears L13 by about 1.1 mm; the first group's spacings do not change with zoom).
- Kept as they were: surfaces 1–7 `sd`, 8–10, 20–22 and the fifth group (the earlier pass's reasons hold: matching
  the fifth group to the figure costs about 20 points at the middle and tele corners).

After the change: surface validation OK; aperture audit 129 of 129 stations within 3 % of the stated f-number, no
rim limit; image circle not undersized; field coverage 129 of 129 stations at 99 % or more. Built lens before and
after: focal length 8.1617 mm, f/4.08, engine half-field 46.18°, stop semi-diameter 3.720 mm at the wide end.

Labels and tags, checked on the page and found correct: group brackets G1 (surfaces 1–7), G2 (8–10), G3 (12–19A),
G4 (20–22), G5 (23A–27), the patent's own group names; cemented brackets C1–C6 on the six cemented pairs (the patent
names only CL1 and CL2 in the figure); stop between L22 and L31; "A" marks on 3A, 4A, 19A, 23A, 24A and no others
(the patent stars surfaces 3, 4, 19, 23, 24); element names L11–L53 as in Fig. 3(a); element types agree with the
signs of the radii; stored focal lengths agree with the thick-lens values within 0.05 mm; the inspector shows
"APD (INFERRED)" on L13, L35, L51 and L53, the maker's Super ED, EDA, EDA and ED positions. No bracket or label
collides at any of the ten zoom settings shot.

Movement, wide → middle → tele, as distances from the image plane (the image and G5 are fixed; back focus 14.88 /
14.90 / 14.90 mm):

- G1 front vertex: 131.40 → 122.62 → 124.79 mm. Toward the image by 8.78 mm, then back toward the object by
  2.17 mm, as the patent's totals (131.41 / 122.63 / 124.79) and the curved arrows of Fig. 3 show.
- G2 with the stop: toward the object throughout (3.31 mm, then 12.58 mm).
- G3: toward the object throughout (13.51 mm, then 15.87 mm).
- G4: toward the object by 5.99 mm, then toward the image by 0.28 mm between the printed middle and tele positions
  (d22 3.75 / 9.72 / 9.44). Fig. 3 draws the second arrow straight down.
- The printed gaps are held exactly at stations 0, 64 and 128: d7 24.10 / 12.01 / 1.60, d11 15.09 / 4.89 / 1.60,
  d19 2.85 / 10.37 / 26.52, d22 3.75 / 9.72 / 9.44, d27 14.88 / 14.90 / 14.90 (printed pp. 18–19). Stations ascend
  in focal length; every gap lists them wide → tele; both focus columns are equal (infinity only).
- Slider: the largest movement of any group between neighbouring stations is 0.25 mm (G3), and the shots at ten
  focal lengths show no jump. The calculated path has corners at the middle position (G1 turns round there, G2
  and G3 change speed) and G4 swings out to 45.23 mm at about 18.3 mm before returning to 42.57 mm at tele.

Glass: all thirteen catalogue labels are exact (|Δnd| ≤ 6e-6, |Δνd| ≤ 0.01) and are current Ohara and Hoya rows,
which suits a 2020 Olympus design. L12 (1.58253 / 59.32) and L35, L51 (1.49650 / 81.53) stay unmatched: the patent
prints nd and νd only, and the Hoya, Ohara and Sumita catalogue files hold no row inside the window (nearest:
M-BACD12 1.58313 / 59.46 and MC-FCD1-M20 1.49690 / 81.51). The L12 pair is printed again in Example 3, so it is a
real glass, most likely a moulded-state index of a catalogue moulding glass. No constant-index medium is used.

Front page: WO 2022/137385 A1, published 30 June 2022, applicant Olympus Corporation, inventors Zen Yuki, Nakagawa
Koji, Yamada Yasuharu. `source.assignees` uses the spelling the other Olympus Corporation files use.

Open:

- The wide corner is 42 % at 56.1° and 76 % at 53°, set by surfaces 20–22 and 4A at the figure's sizes; unchanged.
- The fifth group stays 10–17 % larger than drawn, and the third group is now 2–12 % larger than drawn, both for
  light.
- The calculated stations between the printed positions are not the real cam (corners at the middle position; G4
  overshoot of 2.57 mm between middle and tele).
- The built lens reports an engine half-field of 46.18° at the wide end, while the chief ray reaches the corner at
  56.1°; not changed by this review and not investigated further.

## 2026-11-24 — production-match review

- PhotonsToPhotos Optical Bench lists "Olympus M.Zuiko Digital ED 8-25mm F4.0 Pro", WO 2022/137385, Example 2: the same patent and example as this model. This validates the choice of source; it is not a maker confirmation.
- The lens is classed as a production match in the Lens Library.
