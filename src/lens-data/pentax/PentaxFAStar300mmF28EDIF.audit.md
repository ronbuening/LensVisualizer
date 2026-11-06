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
