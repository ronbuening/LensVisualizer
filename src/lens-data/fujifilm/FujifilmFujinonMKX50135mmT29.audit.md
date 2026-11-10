# FujifilmFujinonMKX50135mmT29 audit (delivered as FujinonMKX50135mmT29; authoring log first)

Status (as delivered): production-correlated candidate, authoring checks passed, not yet released. Closed 2026-11-10: deployment validation passed and the lens is shown. One complete model contains 2 literal published infinity stations and 33 explicitly unpublished inferred zoom samples. All source rows are present; no endpoint file substitutes for the zoom.

Adaptive reduction from 65 reference controls to 35. All source stations are exact. Added sampled longitudinal error is bounded by 1.22 λd N² (587.5618 nm), with a 2% guard. Worst added defocus 5.327390 µm; worst total residual 4.517413 µm. This is a modeling budget, not a factory cam or manufacturing tolerance. Source residuals are retained separately. Every permitted single-knot deletion violates the budget; no global count-optimality claim.
Exact source inverse comparison: PASS, 412 assertions.
Native geometry: PASS, 345 zoom/focus states including every half-knot; minimum edge 0.833175621 mm, minimum glass-to-glass air clearance 0.200000000 mm, zero hidden trimming. Minimum iris-side clearance 1.233503912 mm across the sampled aperture stroke.
Sampled focus: positive and monotonic; near object-to-image distances 1.200000000–1.202277766 m. These are reconstructed, not certified finite source rows.
Exact aimed-pupil screen: 60 cases, 12480 samples, zero unresolved/unaimed samples and zero axial blocked samples. Fields include every source zoom station and intermediate slider states; focus endpoints and wide-open/f5.6 apertures are included. Off-axis vignetting is present. This is bounded classification, not converged throughput, MTF validation or factory performance.
Native element-shape SVGs at wide/mid/tele were visually inspected against patent and maker construction diagrams. Literal element ordering, signed curvatures, cement interfaces, stop placement and zoom-group movement remain represented. Rims are not measured factory dimensions.
The rear PP remains 2.000 mm, nd=1.51633, vd=64.14, with physical 5.000 mm air before and 30.658 mm after. It is synthetic in native drawing and remains traced. A 91.5% gap-sag allowance is the smallest tested stage preserving the required axial pupil: 90%/91% fail, 91.5% passes. Source D15=4.440 mm remains unchanged, with 0.386810 mm physical edge clearance. This existing 91.5% setting is retained unchanged from the earlier version; no additional increase is made.

Additional exact axial rim checks at 99.99% stop radius pass at every control and midpoint, infinity and reconstructed near focus: 138 cases. Three stressed intermediate states were compared with the earlier dense version at identical physical zoom coordinates using 208 matching exact d-line rays each; maximum image-point displacement is 0.832685 µm. No MTF claim follows.

Focus direction labels are verified at every authored knot: only G1b/L14 (surfaces 7–8) moves imageward toward near focus; D6 grows, D8 shrinks; other surfaces and image plane remain fixed at fixed zoom. Direction and magnitude are reconstruction, not published factory cam values.

Focused two-file TypeScript, Prettier and ESLint checks pass on these final files. The repository-wide suite/build has not run and no application route is claimed verified.

Remaining qualifications: source-to-product correlation is strong schematic association, not numeric factory identity or MK/MKX equivalence. Iris/rims and continuous zoom/focus cams remain disclosed inferences. No invented finite certification, named glass or factory aberration claim. Both files remained visible: false as delivered (closed 2026-11-10: shown after deployment validation and the wording pass).

## Deployment validation (2026-11-10)

Independent check against Example 1 (PDF p. 27): 42 surfaces including the PP plate, the stop, five cemented interfaces and
DD13/20/25 at both stations; no mismatches. EFL 51.501 / 134.929, Bf 36.976 and FNo 2.750 / 2.754 reproduce; conditions (3)
and (5) match, (2) and (4) carry the patent's own f1 convention offset (Example 2 shows the same). Fujifilm's 22/17 with
2 ED + 2 Super ED matches the patent's 1.497/81.54 and 1.43875/94.66 positions; Example 3 has the same counts with a
different G2 order and no public construction drawing was found to separate them.

Applied: PDF filed as `US10274698B2.pdf`. No data change.

Open: hidden as delivered — fit to show after the wording pass; per-station `nominalFNumber` on a constant-aperture zoom
(use `aperture.nominalFNumber` 2.75); inferred station labels; `gapSagFrac` 0.915 is a model allowance (≈0.38 mm edge
clearance at D15), not a patent value; G2–G4 rims sit ≈10 % inside the figure outline (closed 2026-11-10 by the
semi-diameter pass below); glass labels `Unmatched`.
(Visibility, f-number, station labels and glass labels closed in the cleanup pass below; the rim item stays open.)

## 2026-11-10 — Cleanup and wording pass

Data file. Header rewritten in plain terms with every fact kept (patent and application, printed vs inferred zoom
stations, L14 focus reconstruction, PP plate and air-equivalent Bf, rim inference, the 0.915 gap-sag allowance and its
D15 reason, iris from F/2.75). `subtitle` "US 10,274,698 B2 Example 1; qualified MKX schematic association" →
"US 10,274,698 B2, Example 1 — production correlation; 1.2 m focus reconstructed". `specs` → 22 ELEMENTS / 17 GROUPS,
2 SUPER ED + 2 ED ELEMENTS, DESIGN f = 51.50–134.93 mm, DESIGN F/2.75 (MARKETED T2.9), ALL SPHERICAL. Focus
description reworded (L14 toward the image by about 9.19 mm to 1.2 m; infinity rows only printed; macro not modeled);
`focus.closeFocusM` stays 1.2 (reconstructed finite state kept). Element roles replaced; cemented ids D1–D5 → C1–C5;
`groups` (G1a 1–6, G1b 7–8, G1c 9–13, G2 14–20, G3 21–25, G4 27–40, per Fig. 1) and `doublets` C1–C5 added. The 33
inferred zoom stations lost their labels; Wide and Tele keep theirs. Per-station `nominalFNumber` (2.750–2.754) replaced
by `aperture.nominalFNumber: 2.75` (constant-aperture zoom, LENS_DATA_SPEC). `fStops` end and `maxFNumber` 16 → 22
(Fujifilm specification: minimum aperture F22).

Glass relabels (all from "Unmatched (patent nd/vd; …)"; Δ = catalog − patent; each resolves with trylabel):
S-FSL5 (L11; Δnd 0, Δνd 0.00), S-TIH53 (L12, L15, L23, L44; −1e-5, −0.01), S-LAH89 (L13, L24; 0, 0.00), S-FPL51
(L14, L22; 0, +0.01), S-FPL55 (L16, L42; 0, 0.00), S-LAL18 (L17; 0, 0.00), TAFD37 HOYA (L21; 0, 0.00), TAFD25 HOYA
(L31, L47; 0, +0.01), S-PHM53 (L32, L45; 0, 0.00), S-TIH1 (L33; 0, +0.01), BAC4 HOYA (L41; 0, 0.00), S-NBH57 (L43;
0, 0.00), S-LAH98 (L46; 0, 0.00), S-BSL7 (L48; 0, 0.00). Exact ties resolved to OHARA (FDS90, TAFD45, J-PSK03 also
match); PBH1 also matches L33 exactly, S-TIH1 chosen as the current lead-free row. `apd: "inferred"` with a one-line
note on L14 and L22 (ED) and L16 and L42 (Super ED), per Fujifilm's 2 ED + 2 Super ED. The PP plate keeps nd/νd only.

Analysis. Rewritten section by section on the existing skeleton: product correlation stated against Fujifilm's
specification and the MK50-135's F2.75, Example 3 named as an equal-count alternative that no public drawing separates;
architecture, zoom motion and printed states; element entries with glass, focal length and role; glass section;
focus section with the solved spacings; "Spherical Prescription and Validation Status" → "Model Scope and
Limitations" (printed f and Bf reproduced, Table 31 conditions (3)/(5) exact and (2)/(4) offset). Process text
(adaptive-knot budget, Minolta cross-reference, check counts, gates, hidden status, evidence-file line) removed;
maker links moved from the es-es page to the global page; MK series page added.

Audit. Hash lines and package evidence-file names removed; run-together words spaced; stale status lines closed in
place.

Engine numbers before → after: EFL 51.50101347202039, FOPEN 2.75, halfField 16.454795865918392, stop radius at wide
13.94077867697397, BFD 30.6572 (wide) / 30.6555 (tele) and both focus keyframes at every station — identical. Expected
change from the single f-number: tele stop radius 13.9202 → 13.9404 mm (wide-open F/2.754 → F/2.750 at tele), tele
entrance-pupil radius 24.497 → 24.533 mm; `maxFstop` 16 → 22. audit:surface OK; audit:aperture: 35 stations within
3 % of the stated f-number, no rim, trace or iris limit.

Open: G2–G4 rims sit about 10 % inside the Fig. 1 outline and the long-end corner bundles are strongly vignetted (the
G2/G3 rims sit just outside the axial beam); a rim pass against the figure is still due (closed 2026-11-10 by the
semi-diameter pass below). Example 1 vs Example 3 rests on the patent's lead example; Fujifilm's construction drawing
has not been compared element by element.

## 2026-11-10 — Semi-diameter pass against the patent figure

Source: `US10274698B2.pdf`, PDF page 2, Fig. 1 (Example 1, wide-angle end panel, infinity focus), native 300 dpi
raster; outlines read at 600 dpi as line centres from the axis on both sides. Scale: S1 vertex at x = 708 px and the
image plane at 2007 px (300 dpi) give 1299 px / 214.692 mm = 6.05 px/mm; the vertex crossings of S13 (55.6 mm against
55.667) and S40 (177.1 against 177.034) confirm it. Vertical scale: the drawn on-axis marginal ray enters at ±9.34 mm
(entrance-pupil radius 9.364) and runs at ≈13.99 mm between G3 and G4 (stop radius 13.94).

Readings (figure semi-diameter, mm; above/below axis) and changes, before → after:

- L11 S1–S2: 28.1 / 28.2; kept 28.0. L12 S3–S4: 27.3; kept 28.0 (2.5 %).
- L13 S5–S6: 25.9 / 25.95, a square-cut biconcave outline; 28.0 → 26.0.
- L14 S7–S8: 26.0; kept 27.0 (4 %). L15/L16 S9–S11: 26.65 / 26.7; kept 26.0. L17 S12–S13: 25.7; kept 25.0.
- L21 S14: outline 13.0 / 13.35; 12.35 → 13.2. S15 kept 11.93 and L22 S16 kept 11.96: Fig. 1 draws these facing
  faces meeting at ≈12.4–12.9 mm, and the printed curvatures cross at 12.45 mm, so the current rims (0.39 mm edge
  clearance) already sit at the drawn junction within 4 %; `gapSagFrac` stays 0.915.
- L22 S17: outline 13.55 / 13.9; 12.71 → 13.6.
- L23/L24 S18–S20: 14.5 / 14.8, square doublet; 13.01 / 13.16 / 13.41 → 14.6 / 14.6 / 14.6.
- L31 S21–S22: 14.8 / 15.1; 13.66 / 13.78 → 15.0 / 15.0.
- L32/L33 S23–S25: 15.1 / 15.4; 13.85 / 13.85 / 13.95 → 15.2 / 15.2 / 15.2.
- L41 S27–S28: 15.1 / 15.4; kept 14.5 (5 %). L42/L43 S29–S31: 14.2 / 14.4; kept 14.5.
- L44 S32–S33: 14.7 / 14.8; 13.0 → 14.7.
- L45/L46 S34–S36: 13.8 / 14.1; 13.0 → 13.9 (7 %, also restores the drawn L45/L46-above-L47 step).
- L47 S37: 13.0 / 13.35; 12.0 → 13.2. S38 kept 11.8 and L48 S39 kept 12.0: drawn meeting L48's front face, and the
  printed curvatures cross at ≈12.3 mm.
- L48 S40: the face reaches the drawn top line at 12.6–13.0; 12.0 → 12.9.

Every change follows a clean outline reading (≈±0.2 mm); the faces that meet a neighbour stay below the crossing, and
the stop is untouched. Clearance: real-ray trace to the patent's image height (14.55 mm at 2ω = 32.2° / 12.0°) at the
engine's stop radius, all 35 zoom stations, infinity and 1.2 m focus: no clipped axial beam and no blocked chief ray.
audit:surface OK; audit:aperture: no rim, trace or iris limit; field coverage 35 of 35 stations at ≥99 %; image circle
0 undersized. Engine half-field (16.4548° wide, 8.0078° tele) and f-number 2.75 unchanged.

Corner light (geometric transmission at the edge of the traced field, wide open, infinity): wide 47.8 → 53.3 %, tele
44.0 → 48.0 %. Against the package baseline no field at any of the 35 zoom nodes loses light (largest gain 12.9
points). The L13 trim alone costs at most 2.4 points (6.5° at 81.4 mm) against the raised set, so it stays inside the
3-point allowance and the lens still gains everywhere against the baseline.

Maker diagram: not viewed in this pass; the deployment-validation section above records Fujifilm's 22 elements in
17 groups with 2 ED + 2 Super ED matching L14/L22 and L16/L42.

Open: the live page check is left to the coordinator (closed 2026-11-10 by the second review below).

## 2026-11-10 — Second review: diagram, labels and movement

Compared: the live page (1400×900 at 1× and 2×: infinity, 1.2 m, 88.7 mm, tele, tele at 1.2 m, both movement
overlays, inspector for L12 and L14) against Fig. 1 (PDF p. 2, 300 dpi raster read at 600 dpi, 12.1 px/mm, half-heights
taken between the line centres above and below the axis), Fig. 11 (PDF p. 12) and Tables 1–3 (PDF p. 27).

| Surfaces | Element | Before | After | Fig. 1 (this pass; SD pass) | Reason |
| --- | --- | --- | --- | --- | --- |
| S7–S8 | L14 | 27.0 | 26.0 | 25.95; 26.0 | rendered 1 mm above L13 and C1; drawn level with L13 and 0.75 mm below C1 |
| S9–S11 | L15/L16 (C1) | 26.0 | 26.7 | 26.7; 26.65/26.7 | restores the drawn step of C1 above L13 and L14 |
| S27–S28 | L41 | 14.5 | 15.2 | 15.25; 15.1/15.4 | rendered level with C4 and 0.7 mm below C3; drawn level with C3, 0.85 mm above C4 |

Lands and cuts: L14 is a new cut against the 27.0 baseline; the L13 cut (28.0 → 26.0) stays; no lands. Full-pupil
rimcost against the baseline rims: worst loss 0.0 points at every one of the 35 nodes and at the zoom eighths (the lens
gains everywhere, up to 12.9 points). Against the rims before this review the L14 cut costs at most 1.6 points (5.5° at
96.3 mm); restoring L14 to 27.0 wins back 1.7 points (4.7° at 112.5 mm), restoring L13 now wins nothing. Corner light at
the traced field edge: wide 53.3 → 53.3 %, tele 48.0 → 47.1 %. Near state traced with a real object point (1.2 m object
to image, meridional fan, 14.55 mm corner, engine stop): wide 56.3 → 56.3 %, 88.7 mm 49.0 → 49.0 %, tele 65.7 → 64.7 %
(baseline 55.0, 42.3, 64.3 %); the on-axis 1.2 m beam clears every rim at all three. Validator OK; aperture audit: 35
stations within 3 % of F/2.75, no rim, trace or iris limit; image circle 0 undersized; field coverage 35 of 35 at
≥ 99 %; engine half-field 16.4548° wide and 8.0078° tele, F/2.75 and stop radius 13.9408 mm unchanged.

Kept: L12 at 28.0 (Fig. 1 reads 27.0 here and 27.3 in the SD pass, a spread wider than the 0.15 mm a step-order
change needs). S15/S16 and S38/S39: Fig. 1 draws L21/L22 and L47/L48 meeting under a common top line (about 13.5 and
13.0 mm), but the printed curvatures cross at 12.45 and about 12.3 mm, so the faces stay just short of the crossing
with `gapSagFrac` 0.915; the figure draws no land there and none is added.

Labels: `diagramLabel` L11–L48 added (Fig. 1's designations; the diagram showed 1–22). Group text "G1a (−)", "G1b (+)",
"G1c (+)" → "G1a", "G1b", "G1c": on the page "G1a (−)" and "G1b (+)" ran together; "G2 (−)", "G3 (+)", "G4 (+)" kept.
Brackets G1a 1–6, G1b 7–8, G1c 9–13, G2 14–20, G3 21–25, G4 27–40 and C1–C5 (9–11, 18–20, 23–25, 29–31, 34–36) match
Fig. 1 and Table 1. All 22 `type` strings agree with the signs of R; the stop sits between L33 and L41; no aspheres.
`apd: "inferred"` on L14/L22 (1.49700/81.54) and L16/L42 (1.43875/94.66): the patent names no special glass, and these
are the only νd > 80 positions, matching Fujifilm's 2 ED + 2 Super ED; the inspector shows "APD (INFERRED)" for L14.
Assignee "Fujifilm Corporation" matches the front page and the corpus spelling.

Movement: stations ascend 51.501 → 134.933 mm and every gap lists them in that order; the printed ends match Table 3
(D13 14.039 → 44.630, D20 22.245 → 1.243, D25 13.006 → 3.417). G1 and G4 stay fixed; G2 moves toward the image by
30.59 mm, monotonic; G3 moves toward the image by 11.79 mm to about 101.6 mm (D25 minimum 1.219) and returns 2.20 mm by
the tele end, as Fig. 1's straight G2 arrow and curved G3 arrow show. Focus keyframe 0 is infinity and keyframe 1 is
1.2 m (object to image 1200.3 mm); only L14 moves, toward the image by 9.186 mm (wide) and 9.188 mm (tele), with
D6 + D8 = 12.344 mm; the slider's far end reads 1.20 m.

Glass and colour: all 22 labels resolve to exact rows. Fig. 11 spherical-aberration curve bases read at 1200 dpi
(1.40 px/µm, about ±4 µm), relative to d: wide C +21, F +9, g +50 µm; tele C +20, g about −10 µm. Model before: wide
C +21.7, F +10.7, g +31.4; tele C +21.1, F −2.5, g −41.0. L12, L15, L23, L44 relabelled S-TIH53 (OHARA) → FDS90
(HOYA) (Δnd −1e-5, Δνd −0.01 against the printed pair, both rows): wide F +12.6, g +43.3; tele F +0.1, g −23.9.
Every other exact tie moves g by 4 µm or less (Hikari J-PSK03 for S-PHM53: +4 µm at both ends, inside the reading
error, not applied); PBH1 for S-TIH1 moves g 20 µm the wrong way. No nd-only medium; the patent prints no partial
dispersions.

Open: the tele g-line focus still sits about 14 µm in front of the Fig. 11 reading after the FDS90 relabel.
Open: L12 renders level with L11 where Fig. 1 draws it about 1 mm lower (two readings 0.3 mm apart).
