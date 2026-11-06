# smc PENTAX-FA★ 300mm F2.8 ED [IF]: audit log

## Package audit (as delivered)

Whole JPH06138385A Example1 representative of historical FA300 family; E2 is an alternative, no unique factory selection. Native100mm/F2.8, no retail300mm scale conversion. Header BF24.86 is conditionally interpreted as final physical air gap AFTER the source plate, fixing image95.19mm; datum not explicitly defined. Midpoint of infinity d12 is a fixed-to-G4 stop hypothesis, not a printed diaphragm. Clear caps and nativeF/N iris inferred. Source indices explicitly588nm retained literally; schema d-line/standard viewer587.5618nm is a disclosed approximate reference, not a source588nm calculation. Exact588nm scalar research is separate. No finite conjugate certified:500mm datum unspecified, no retail2m/.17 transplant. Plate optical role unnamed; kept as separate drawn plane-parallel source medium. Infinity-only performance scope. Standard compiled-viewer monochromatic MTF is an approximate587.5618nm implementation of the literal source588nm indices; exact588nm research uses a private support-parameter adapter with unchanged native kernel and tolerances. Native100mm image scale is not retail300mm full-frame coverage.

(Closed 2026-11-06: the native scale, the infinity-only scope, the mid-d12 stop and the 588 nm index notes are superseded by the deployment fix below.)

All source/model states, pre-MTF geometry hypotheses, rejected alternatives, native trace counters, raw pupil records and every MTF prior grid are retained. Initial11ingest rejections lacked required layout and were corrected without optical changes. The finite height-bracket harness failure and assumed nearYwindow history are retained separately. Source-angle scientific results and compiled-viewer integration are distinct. No commit, publication or deployment.

(Closed 2026-11-06: the lens was added to the repository; the package's evidence archive stays outside it.)

## 2026-11-06 — Deployment fix and wording pass

Held back because the file stayed at the patent's f = 100 scale, carried no close-focus state, and put its assumed
stop at the midpoint of the infinity d12 fixed to G4, where group 3's rear face would cross it once d12 shrinks to
10.91 at the printed near state. File renamed to `PentaxFAStar300mmF28EDIF` before this pass.

Source re-read. The local copy of JP H06-138385 A holds the front page only: application 特願平4-287356 filed
1992-10-26, published 1994-05-20, applicant 旭光学工業株式会社 (000000527), inventor 丸山晃一, 3 claims, 10 pages; the
abstract gives groups +, +, −, + with G2 −/+ cemented, G3 +/− cemented and moved to focus, G4 +/− cemented. Table 1
and Table 2 were checked against the values read from J-PlatPat's text view: all 17 rows of R, d, n and ν, the header
(FNO 1:2.8, ω 4.1°, fB 24.86, L 500) and both focus rows. Zero mismatches; the delivered d12 was the printed 19.60
split 9.80 + 9.80 around the assumed stop. Google Patents' JP text gives conditions (1)–(9), relation (a), no stop or
diaphragm anywhere, no name for the plate, and the captions (Fig. 1 Example 1 at infinity, Fig. 3 Example 1 at 500).
Conditions recomputed from Table 1: 1.220, 1.880, 0.577, 0.261, 0.153, 1.076, 0.197, 0.234, 0.500. Full-pupil LSA
0.007 / −0.005 / −0.014 / −0.014 mm at pupil 1 / 0.85 / 0.7 / 0.5: no misprint signature.

Scale. Uniform ×3 on every R, d, gap, rim and the printed fB; no aspheres. EFL 299.995 mm against the printed 100.00
(×3); Gaussian BFD 74.563 mm against fB 74.58 mm (−0.017 mm, kept as printed). The plate stays a drawn
`Plane-Parallel Plate` element (the lens's 43 mm rear filter, by inference from Ricoh's 7/10 count and 43 mm filter)
with the printed 9.00 mm gap before it and 74.58 mm after it.

Close-focus datum. With the Table 2 spacings at the fixed image plane, an object 500 (native) from the image plane
focuses within 0.0054 mm (native) of the infinity plane with M = −0.2528 and f = 77.835, matching the printed −0.253
and 77.83. Measured from the first vertex, the same row gives M = −0.193 and 4.65 mm (native) of defocus. The printed
distance is object to image: `closeFocusM` 1.5, conjugate at 1500 mm with `distanceReference: "image-plane"`,
`focus.published: [10]`. Eleven keyframes place G3 at equal steps of 2.607 mm; their coordinates 1500/D from the
paraxial conjugate law are 0, 0.1342, 0.2584, 0.3739, 0.4816, 0.5822, 0.6764, 0.7648, 0.848, 0.9263, 1. Ricoh's
2.0 m / 0.17× goes in `catalog.closeFocusM.marketing`; the model reaches 0.178× at 2.0 m with 17.80 mm of G3 travel.

Stop. Two placements were traced. Fixed to G4, 13.0 mm ahead of r13, the iris clears r12's rim (sag 6.61 mm at
25.4 mm) by 13.1 mm at the close state, but its F/2.8 beam at the close state needs more than the Fig. 1 rims allow
(S1 54.8 / 54.5, S3 53.1 / 50.5, S7 36.4 / 31.7 mm), so G2 would take over as the axial stop; corner transmission
54.2 %. Fixed to G2 in d9, 5.6 mm behind r9 (the middle of the 9.3 mm between the rims of r9 and r10 at infinity),
the close-state beam stays inside every rim (largest 30.5 / 31.7 mm at S7) and the corner transmission is 57.6 %. The
G2 placement was kept; it matches the FA★ 300mm f/4.5's iris ahead of its focusing doublet. The iris is in air at
every keyframe: r9 sag at the 25.80 mm iris radius is 0.64 mm, and r10's rim is 4.70 mm behind the iris at infinity,
30.77 mm at the close state.

Rims. Fig. 1 is the front-page drawing: at 804 dpi its vertices give 26.56 px/mm (r1–r17 1868 px / 70.33 mm native;
r1–r13 26.54), and d4 3.01 (Example 1 3.00, Example 2 3.58), d6 17.39 (17.40; 17.92) and d9 3.54 (3.66) identify it
as Example 1 at infinity. Native heights, mean of top and bottom flats: L1 18.15, L2 16.83, L3 15.62, G2 10.56,
G3 8.45, G4 6.46, plate 6.57. Old (native × 3) → new, in mm: S1–S2 58.92 → 54.5; S3–S4 55.5 → 50.5; S5–S6 47.1 kept
(Fig. 1 46.86); S7–S9 27.9 → 31.7; S10–S12 21.0 → 25.4; S13–S15 23.4 → 19.4; S16–S17 23.4 → 20.5. The delivered G2
and G3 rims clipped the F/2.8 axial beam (rim limit +16.7 %, f/2.80 → f/3.27 at surface 10); Fig. 1 puts both just
outside it (31.56 and 24.98 mm). The old L1 (Ø117.8 mm) would not fit inside the 112 mm front protective filter; Fig. 1
gives Ø109 mm. The filter rim follows the spec's drop-in rule: the highest ray reaching the image at either focus end
crosses it at 19.47 mm (G4-limited), plus 5 %, rounded up to 20.5 mm. Fig. 3 was not viewed.

First-order before → after: EFL 99.998 → 299.995 mm; BFD 24.854 → 74.563 mm; first vertex to image 95.19 → 285.57 mm;
stop radius 6.466 (mid-d12) → 25.800 mm (d9); FOPEN 2.8 → 2.8; engine half-field 4.10° (declared 8.2° projection
block) → 6.32° (projection block removed, `imageFormat` 135-full-frame added); close state none → EFL 233.50 mm
(printed 233.49), M −0.2528, 1500.00 mm object to image. Wide-open geometric transmission at infinity, axis → 4.1°:
72.7 → 64.3 % before (axis clipped by G2/G3), 100 → 57.6 % after. The aperture audit now reports no rim limit, the
surface validator reports no errors, the image-circle check reports nothing undersized, and the traced corner chief
ray clears at 100 %.

Fields changed: `key` `pentax-smc-fa-300mm-f28-ed-if-native-e1` → `pentax-fa-star-300mm-f28-ed-if`; `name` → `PENTAX
SMC FA* 300mm f/2.8 ED [IF]` (the sibling FA★ 300/4.5's style); `subtitle` → `JP H06-138385 A, Example 1 — probable
production correlation`; `specs` → 10 ELEMENTS / 7 GROUPS, DESIGN f = 300.00 mm, DESIGN F/2.8, ALL SPHERICAL, 2 ED
ELEMENTS; `focalLengthMm` design 100 → 300 with marketing 300; aperture `maxFNumber` 22 → 32 (Ricoh: F32). L1 and L2
take `FCD1 (HOYA) / S-FPL51 class ED` with `apd: "inferred"` (Ricoh: thin ED glass in the first and second elements).
Every `indexReferenceNote` was removed: the patent names the d-line, and all nine pairs are exact d-line catalog
coordinates (FCD1; S-NBH8 / N-KZFS8; S-LAH51; SK5 / BACD5 class; S-TIH6 / SF6; S-BAL2; S-LAL13; S-TIL2 / E-FEL2;
S-BSL7 / K-BK7). Roles, the plate's name and label (F, "Rear filter F"), cemented ids (D1–D3), G1–G4 group brackets,
the header, the focus description and the analysis were rewritten in plain technical English.

Product sources: Ricoh's discontinued 35 mm catalog (FA★300mm F2.8 ED[IF]: 7 groups / 10 elements, thin ED glass in
the first and second elements, inner focus, 8.2°, 2.0 m, 0.17×, filter 43 mm, PF filter 112 mm included, 123 × 247 mm,
2,500 g, F32); Imaging Resource (10/7, "1 ED element", 2.0 m, 112 / 43 mm); Lenstip (10/7, 2 m, 1:5.9, internal 43 mm
filter). Imaging Resource's single ED element conflicts with Ricoh's text; Ricoh governs.

Open: L3–L9 and the filter keep the `Unmatched (...)` glass string although every pair is an exact catalog coordinate;
a glass pass could label them. The package's own transcription of Table 7 gives condition (1) as 1.255 against 1.220
computed from Table 1 (the other eight agree); Table 7 was not re-read here. The iris position and the filter
identification are inferences; Fig. 3 and Ricoh's construction image were not viewed.

(Glass part closed 2026-11-06: L3–L9 and the filter now carry OHARA coordinate-equivalent labels, and all ten elements
resolve in the glass catalog within Δνd 0.06. The Table 7 and inference items stay open.)

## 2026-11-06 — Semi-diameter pass against the patent figure

Source: the local JP H06-138385 A front page, whose representative drawing is Fig. 1, Example 1 at infinity. It was
measured on the extracted 1-bit bitmap (630 × 459 px at its native 200 ppi), not on a resampled render. Fig. 3, the
aberration plots and Ricoh's construction image are not in the local copy, so no fan-end or maker-diagram check was made.

Scale. A least-squares fit of all 17 vertex columns to the Table 1 positions at infinity gives 6.625 native px per native
mm (2.208 px per model mm), with residuals within 1.1 px; d9 = 3.66 fits, so the drawing is the infinity state. Arc fits
with a free vertex on leader-free stretches give a vertical-to-horizontal ratio of 1.04 (r3), 1.02 and 1.05 (r6), 1.07
(r7), 1.03 and 1.02 (r8) and 0.97 and 0.98 (r12), mean 1.02; r12's drawn arc follows its prescription sag to 0.5 px out to
48 px at a ratio of 1. The figure is taken as isotropic within ±3 %.

Outer rims, line centre to line centre over the full drawn diameter: L1 120.75 px (54.7 mm; file 54.5), L2 112.0 (50.7;
50.5), L3 104.0 (47.1; 47.1), G2 70.25 (31.8; 31.7), G3 56.4 (25.5; 25.4), G4 43.1 (19.5; 19.4), filter 43.75 (19.8; 20.5,
set by the drop-in ray-trace rule). The earlier 804 dpi readings reproduce to 0.25 px and every lens rim agrees within
0.6 %. At a ratio of 1 the L1 to G3 rims sit 0.4 to 1.6 % outside their F/2.8 axial beams, a margin the ±3 % scale
allowance cannot resolve, so they stay. No `sd` changed.

Lands. Fig. 1 ends the concave rear caps r6 (L3) and r12 (L7) short of the element edge, with a stroke square to the axis
from the cap end to the edge line, in both halves of the figure. No other face has one: r1, r3, r4, r7, r9, r13 and r15
meet the edge lines within 2 px of their prescription sags. Cap ends, where the drawn arc meets the stroke, at 6.625
native px per native mm: r12 48.25 px of a 56.4 px edge radius, q = 0.856 ± 0.033, q × sd = 21.7 mm (20.9 to 22.6); r6
95.75 px of 104.15 px, q = 0.919 ± 0.018, 43.3 mm (42.4 to 44.2). The rim-cut probe (30 focus states, every field) puts
the widest wide-open beam at 21.91 mm on r12 and 43.90 mm on r6, so both cuts move out to clear it by the spec margin
(0.066 and 0.132 mm). Surface 12 keeps `sd` 25.4 and takes `rimCutDepthMm` 4.87 (cut radius 21.99 mm, 0.25 mm outside the
figure's cap end; land 3.4 mm). Surface 6 keeps `sd` 47.1 and takes `rimCutDepthMm` 5.32 (cut radius 44.05 mm, 0.76 mm
outside; land 3.05 mm). Both faces are glass on the vertex side and air on the rim side; neither is cemented.

Clearance and light. The surface validator reports no errors, the rim-cut probe finds no ray clipped or within margin at
either cut, the aperture audit reports no rim limit, the image-circle check finds nothing undersized and the traced
corner chief ray clears at 100 %. Engine half-field 6.32°, FOPEN 2.8 and stop radius 25.80 mm are unchanged. Wide-open
transmission equals the starting rims at every field: 100, 100, 97.8, 89.5, 79.3, 68.6 and 57.6 % from 0° to 4.12° at
infinity, 76.1 % at 3.77° at mid travel and 90.0 % at 3.42° at the close state. The lands cost no light.

Rendered check. The page at infinity and at the close state draws both lands. An overlay of the model outline on Fig. 1
shows the starting rear corners of L3 and L7 running past the drawn strokes and the cut outline following them.

## 2026-11-06 — Second review: diagram, labels and movement

Compared: the local page at infinity and at the close state, its focus-movement overlay and the inspectors of L1, L5, L7
and F, against Fig. 1 of the local front page (Example 1 at infinity), measured on its native 630 × 459 px, 200 ppi
bitmap. Fig. 2 (aberration curves) and Fig. 3 (the 500 state) are not in the local copy, so no colour, astigmatism or
distortion comparison and no close-state figure comparison was made. No maker image was viewed; counts and ED positions
are Ricoh's catalog as recorded above (10 elements / 7 groups, thin ED glass in elements 1 and 2).

Silhouette, measured afresh. Vertex crossings 4 px above the axis (axis centre row 203.6): r1 at 66.5 px and r17 at
532.5 px over 70.33 native mm give 6.626 px per native mm (2.209 px per model mm); r9 and r13 fall at 315.0 and 487.5
px against 315.0 and 487.6 predicted, and d9 spans 23.5 px (3.55 native mm), so the drawing is the infinity state. Rims,
line centre to line centre over the full diameter, in model mm (file value in brackets): L1 54.67 (54.5), L2 50.6
(50.5), L3 47.09 (47.1), G2 31.81 (31.7), G3 25.47 (25.4), G4 19.51 (19.4), filter 19.81 (20.5, the drop-in ray rule).
Every lens rim agrees within 0.6 %, the filter within 3.5 %; the drawn height order L1 > L2 > L3 > G2 > G3 > filter ≥ G4
holds on the page, and every element is one height on both faces, as drawn. L2's drawn edge is about 7 px against the
model's 2.86 mm (6.3 px), and G2's cemented r8 meets the top edge 2 px ahead of r9's rim in both. No `sd` changed.

| Cut or land | Figure reading | Baseline | Final | Light cost | Verdict |
| --- | --- | --- | --- | --- | --- |
| r6 (L3 rear) land | arc meets the square stroke at 94.9–97 px of a 104 px rim, q 0.91–0.93, 43.0–44.0 mm | `sd` 47.1, no land | `sd` 47.1, `rimCutDepthMm` 5.32 (cut radius 44.05 mm) | 0.0 points at every field, both focus ends | keep: drawn, costs no light |
| r12 (L7 rear) land | arc meets the stroke at 47.5 ± 1 px of a 56.25 px rim, q 0.84, 21.5 ± 0.45 mm | `sd` 25.4, no land | `sd` 25.4, `rimCutDepthMm` 4.87 (cut radius 21.99 mm) | 0.0 points | keep: drawn, costs no light |

No face sits below its baseline `sd`; the rim-cost comparison against the baseline file finds a worst loss of 0.0
points. The lands were costed on their own by removing both: the engine's wide-open curves are identical with and
without them at focus 0, 0.5 and 1 (infinity 100, 100, 97.8, 89.5, 79.3, 68.6 and 57.6 % from 0° to 4.12°; mid travel
76.1 % at 3.77°; close state 90.0 % at 3.42°). At the close state with a real object point 1500 mm from the image (an
independent all-spherical trace through a 241 × 241 grid on S1), the corner (image height 21.63 mm, object height 84.8 mm)
transmits 83.4 % with and without the lands and the axis 100 %; the same trace at infinity gives 58.5 % at 4.12° both
ways, against the engine's 57.6 %. The figure draws r6's stroke about 2 px (0.9 mm) ahead of the arc's continuation, as
the model's 0.77 mm land step does. r12's cut sits 0.5 mm outside the figure reading because the widest F/2.8 beam
reaches 21.91 mm there (rim-cut probe, 30 focus states), so the beam sets that value.

| Field | Before | After | Evidence |
| --- | --- | --- | --- |
| `cemented` on L4–L9 | D1, D2, D3 | C1, C2, C3 | "D" repeated the patent's d1–d16 spacing names and the D9 / D12 gap labels; the inspector badge now reads DOUBLET C1 to C3 |
| `doublets` | none | C1 surfaces 7–9, C2 10–12, C3 13–15 | one bracket per cemented component; the abstract makes G2, G3 and G4 cemented pairs |
| `diagramLabel` of F | none (the diagram drew "10") | F | matches the element's name and label |

Checked and found correct. Group brackets G1 1–6, G2 7–9, G3 10–12 and G4 13–15 match Fig. 1's brackets 1 to 4 (bracket
4 spans r13–r15 and leaves the plate out) and the abstract's powers +, +, −, +. Fig. 1 prints no element numbers, so
sequential L1–L9 stand. Every `type` agrees with the signs of R; thick-lens focal lengths recomputed for L1 (+253.47 mm)
and L7 (−59.74 mm) match the file. No surface is aspheric and none is marked. The stop is drawn in d9 between L5 and L6.
L1 and L2 carry `apd: "inferred"` on Ricoh's ED positions with the patent's 1.49700 / 81.6; no other element is tagged.
All ten glass labels resolve (Δνd ≤ 0.06). Roles quote conditions (5), (7), (8) and (9) with values that recompute
from the prescription (0.153, 0.197, 0.234, 0.500).

Movement. Only G3 moves. Keyframe 0 is infinity and keyframe 10 the printed close state: the iris-to-G3 gap runs 5.38 to
31.45 mm and d12 58.80 to 32.73 mm in ten equal steps with a constant sum of 64.18 mm. With the fixed 5.6 mm from r9 to
the iris, d9 is 10.98 to 37.05 mm, Table 2's 3.66 to 12.35 times 3; d12 is 19.60 to 10.91 times 3. G3 travels 26.07 mm
toward the image while G1, G2, the iris, G4 and the filter stay fixed, as the overlay shows. The close keyframe focuses at
1500.00 mm object to image with M −0.2528 and EFL 233.50 mm, and the slider's far end reads 1.50 m.

Stop. The iris stays the aperture stop at both focus ends: the axial bundle that fills its 25.80 mm radius passes every
rim, tightest at S7 (30.41 of 31.70 mm at infinity, 29.65 mm at the close state with a real object) and at the r12 and r6
lands (21.22 of 21.99 mm and 41.93 of 44.05 mm at infinity). The iris sits 4.96 mm behind r9 at its own radius and 4.70 mm
ahead of r10's rim at infinity (30.77 mm at the close state). The aperture audit reports the stated f-number and no rim
limit.

Engine figures unchanged by this review: EFL 299.995 mm, half-field 6.32°, FOPEN 2.8, stop radius 25.80 mm. The surface
validator reports no errors, the image-circle check nothing undersized, traced corner coverage 100 %, no clipped axial
or blocked chief ray, and the rim-cut probe clears both lands.

Open: Fig. 2 and Fig. 3 are not in the local copy, so the colour, astigmatism and distortion curves and the close-state
section remain uncompared.
