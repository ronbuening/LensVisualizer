# FUJIFILM FUJINON MKX18-55mm T2.9 — audit log

## Authoring notes (as delivered)

Status (closed 2026-11-10: shown on the site after deployment validation and the wording pass): production-correlated candidate, not then release-ready. One complete model contains 3 published infinity stations and 30 unpublished solved zoom stations. All source rows are present; no endpoint file substitutes for the zoom.

Adaptive reduction from 65 reference controls to 33. All source stations are exact. Added sampled longitudinal error is bounded by 1.22 λd N² (587.5618 nm), the same disclosed engineering criterion used for the corrected Minoltas, with a 2% guard. Worst added defocus 5.312571 µm; worst total residual 6.248204 µm. This is a modeling budget, not a factory cam or manufacturing tolerance. Source residuals are retained separately. Every permitted single-knot deletion violates the budget; no global count-optimality claim.
Exact source inverse comparison: PASS, 590 assertions.
Native geometry: PASS, 325 zoom/focus states including every half-knot; minimum edge 0.302207587 mm, minimum glass-to-glass air clearance 0.119000000 mm, zero hidden trimming. Minimum iris-side clearance 0.990549916 mm across the sampled aperture stroke.
Sampled focus: positive and monotonic; near object-to-image distances 0.850000000–0.856527289 m. These are reconstructed, not certified finite source rows.
Exact aimed-pupil screen: 60 cases, 12480 samples, zero unresolved/unaimed samples and zero axial blocked samples. Fields include every source zoom station and intermediate slider states; focus endpoints and wide-open/f5.6 apertures are included. Off-axis vignetting is present. This is bounded classification, not converged throughput, MTF validation or factory performance.
Native element-shape SVGs at wide/mid/tele were visually inspected against patent and maker construction diagrams. Literal element ordering, signed curvatures, cement interfaces, stop placement and zoom-group movement remain represented. Rims are not measured factory dimensions.
No rear PP exists in this source embodiment. No gap-sag override is used. The source TELE track rounding difference of 0.001 mm remains literal.

Additional exact axial rim checks at 99.99% stop radius pass at every control and midpoint, infinity and reconstructed near focus: 130 cases. Three stressed intermediate states were compared with dense v3 at identical physical zoom coordinates using 208 matching exact d-line rays each; maximum image-point displacement is 0.934385 µm. No MTF claim follows.

Focus direction labels are verified at every authored knot: only G1b/L14 (surfaces 7–8) moves imageward toward near focus; D6 grows, D8 shrinks; other surfaces and image plane remain fixed at fixed zoom. Direction and magnitude are reconstruction, not published factory cam values.

Focused two-file TypeScript, Prettier and ESLint checks pass on these final files. The repository-wide suite/build has not run and no application route is claimed verified.

Remaining qualifications: source-to-product correlation is strong schematic association, not numeric factory identity or MK/MKX equivalence. Iris/rims and continuous zoom/focus cams remain disclosed inferences. No invented finite certification, named glass or factory aberration claim. Both files remain visible:false pending the corrected six-model package gates (closed 2026-11-10: visible; catalog glass names added in the wording pass below). No commit, PR, deployment, upload or delivery.

## Deployment validation (2026-11-10)

Independent check against Tables 16–18 (PDF p. 35): 40 surfaces, 22 nd/νd pairs, the stop, 5 cemented interfaces, 12 zoom
gaps and BF 24.783; no mismatches. EFL 18.592 / 37.183 / 55.217, F2.75 and all seven Table 37 Example 6 conditional values
reproduce. Fujifilm's MKX18-55 diagram puts Super ED exactly at the six 1.43875/94.66 positions and ED at the two others
(22/17); no other example fits; association strong at MK/MKX family level. Granted as US 10,444,479 B2.

Applied: PDF filed as `US20180188508A1.pdf`. No data change.

Open: hidden as delivered — fit to show after the wording pass (subtitle, specs, header "Work-in-progress"); no `groups`
/ `doublets` declared (G1a–G5 and five doublets); S1 sd 27.0 clips the wide corner chief ray (≈27.8, inside Fig. 6);
22 glasses labelled `Unmatched` though each is an exact catalogue code. (Closed 2026-11-10 in the pass below, except the
S1 rim, which stays open.) (S1 rim closed 2026-11-10 in the semi-diameter pass below.)

## 2026-11-10 — Cleanup and wording pass

Fields changed in the data file. Header comment rewritten as plain statements of the source, correlation, scaling,
zoom stations, reconstructed focus, stop and rims (process vocabulary and the "Work-in-progress" line removed; no fact
dropped). Subtitle "US 2018/0188508 A1 Example 6; qualified MKX schematic association" → "US 2018/0188508 A1, Example 6
— strong production correlation; not manufacturer-confirmed". Specs "22 ELEMENTS / 17 GROUPS", "ALL PUBLISHED ZOOM
STATIONS", "INFERRED RIMS AND FOCUS" → "22 ELEMENTS / 17 GROUPS", "6 SUPER ED + 2 ED ELEMENTS", "DESIGN f =
18.59–55.22 mm", "F/2.75 DESIGN / T2.9 PRODUCT", "ALL SPHERICAL". Focus description reworded (L14 imageward 5.35 mm,
reconstructed to the maker's 0.85 m; macro not modeled); `focus.closeFocusM` stays 0.85 (reconstructed state kept).
Element types to house form (Negative/Positive Meniscus); element roles rewritten. Cemented ids D1–D5 → C1–C5 so they
do not read as gap labels. `groups` added (G1a 1–6, G1b 7–8 focus, G1c 9–13, G2 14–15, G3 16–22, G4 23–24, G5 STO–40,
as bracketed in Fig. 6) and `doublets` C1–C5 (9–11, 20–22, 28–30, 33–35, 36–38). The 30 solved zoom stations lost their
"Inferred T=…" labels; "Middle" also had to go, because ingest accepts labels on every station or on the first and last
alone, so only "Wide" and "Tele" remain (the middle station is still `published: true`). `aperture.fStops` gains 22 and
`maxFNumber` 16 → 22 (Fujifilm specification: F22 minimum).

Glass relabels (all from `Unmatched (patent nd/vd; catalog formulation unspecified)`; Δ = catalog − printed): L11, L12
TAFD35 (HOYA) Δnd +2.4e-6, Δνd 0.00; L13, L34 S-NPH1 (OHARA) +4.7e-6, 0.00; L14, L21, L33, L41, L52, L57 S-FPL55 (OHARA)
−4.4e-7, 0.00; L15 S-TIM28 (OHARA) +8.0e-7, +0.01; L16 S-FPM3 (OHARA) +3.6e-7, 0.00; L17 S-LAH59 (OHARA) −1.6e-7, 0.00;
L31 TAFD40 (HOYA) +3.8e-6, 0.00; L32 FCD515 (HOYA) +4.3e-6, 0.00; L51 S-TIH53 (OHARA) −3.2e-7, 0.00; L53, L55 S-LAH98
(OHARA) −5.9e-7, 0.00; L54 FD60 (HOYA) −9.2e-6, −0.01; L56 S-LAL14 (OHARA) −3.1e-6, 0.00; L58 S-NBH56 (OHARA) −7.8e-7,
0.00; L59 S-LAH53 (OHARA) −2.2e-6, 0.00. Where HOYA and OHARA rows tie (954/323, 808/228) the OHARA row was taken; no
`nC`/`nF`/`ng` were authored. `apd: "inferred"` with a one-line note on the six Super ED positions (L14, L21, L33, L41,
L52, L57) and the two ED positions (L16, L32) of Fujifilm's MKX18-55 construction diagram.

`catalog.focalLengthMm.design` stays [18.592, 55.217], the patent's printed wide and tele focal lengths, as in the
neighbouring Fujifilm zooms (traced 18.5916 / 55.2169 mm).

Analysis. Rewritten around the house skeleton: metadata block now carries the application number, priority and the
grant (US 10,444,479 B2); the identification section lists the convergent evidence and why Examples 1–5 and 7–12 do not
fit; architecture gives group powers and zoom travel; element sections carry catalog glass and roles; new glass table,
focus table and Conditional Expressions section (all seven Table 37 values reproduced); "Aperture and Rim Inference" and
"Spherical Prescription and Validation Status" became "Model Scope and Limitations". Removed: the 1.22 λd N² budget
passage and the reference to other package models, "integration gates", "native" checks, the private-evidence source
line; the es-es maker link became the en-us page, and the MK series page and the announcement article were added.

Engine numbers, before and after (identical): EFL 18.59161275332654, FOPEN 2.75, halfField 32.95566859822091, stop
radius 12.474690767327504, B 141.17240610130239; the paraxial probe output (EFL, BFD, focus distances at all 33
stations) is byte-identical. Only `maxFstop` changed (16 → 22). The surface validator reports no errors; the aperture
audit reports all 33 stations within 3 % of the stated f-number, with no rim, trace or iris limit.

Open: S1 rim 27.0 mm clips the wide-corner chief ray (needs 27.23 mm for the 14.18 mm APS-C corner, about 27.8 mm for
the patent's 2ω = 78.6°); Fig. 6 draws L11 at about 28.5–29 mm. Other rims sit at or below the Fig. 6 outlines (L21
19 vs about 21 mm; G3, G4 13–14 vs about 15 mm). The 0.38 m wide-end macro mode is not modeled. (Rim items closed
2026-11-10 in the semi-diameter pass below; the macro mode stays open.)

## 2026-11-10 — Semi-diameter pass against the patent figure

Source: `US20180188508A1.pdf`, PDF p. 7, Fig. 6 (Example 6), wide-angle panel, a 300 ppi CCITT scan. The optical
axis is row 1481 at 300 dpi; the S1 vertex is at column 685 and the image line Sim at 1953, so 1268 px span the
221.716 mm wide-state track: 5.719 px/mm (0.1749 mm/px). Second span: the S39 and S40 vertices fall at 1795.5 and
1809.5 against 1794 and 1811 predicted, and the S26/S27 vertices at 1468/1482.5 against 1466/1482. The vertical scale
was fitted independently from the drawn arcs of S2, S10, S29, S34 and S37 at 600 dpi (line centres, rms under 1.1 px):
vertical/horizontal 0.99–1.00, so the drawing is isotropic. Rims were read as line centres of each element's top and
bottom edges at 600 dpi, both sides of the axis (the lower side clear of leaders, the upper side clear of the G2–G4
travel brackets); readings agree within 0.2 mm side to side.

| Surface(s) | Before | After | Fig. 6 | Evidence |
| --- | --- | --- | --- | --- |
| 1 (L11 front) | 27.0 | 27.8 | 28.9 | Wide corner chief ray clipped (needs 27.23 for the 14.18 mm format corner, 27.76 for the printed 2ω = 78.6°); least raise that clears the printed field |
| 16 (L31 front) | 14.0 | 15.8 | 15.8 | Figure 11 % larger; L31 drawn stepped, rear face kept at 14.0 |
| 18, 19 (L32) | 13.0 | 14.5 | 14.5 | Figure 10 % larger, drawn square; admitted with `checks.gapSagFrac` 0.96 (see below) |
| 24 (L41 rear) | 13.0 | 14.5 | 14.5 | Figure 10 % larger; front face S23 drawn to about 13.5 (kept 13.0, within noise), flat annulus out to 14.5 |
| 28, 29, 30 (C3) | 13.5 | 14.5 | 14.5 | 7 % on its own; raised with L54 because Fig. 6 draws C3 and L54 at one height |
| 31, 32 (L54) | 13.0 | 14.5 | 14.5 | Figure 10 % larger |
| 33, 34 (C4 front, interface) | 12.0 | 13.8 | 13.8 | Figure 13 % larger; the S34 arc ends at about 13.8 |
| 35 (C4 rear) | 12.0 | 13.5 | 13.5 | Figure 11 % larger; L56 edge 0.9 mm at these values |
| 36, 37, 38 (C5) | 13.5 | 12.0 | 12.0 | File 12 % larger than drawn and out of step order (C4 now larger than C5, as drawn); the cut costs no light at any field or zoom node |

Kept (within about 8 % of the figure): S2 23.8 (S2 arc ends at 24.8), L12 25.5 (24.5), L13 and L14 24.0 (25.3, 25.4),
C1 24.0 (24.85 front, 24.3 rear), L17 23.0 (22.7), L21 19.0 (20.0), S17 14.0 (L31's rear face meets L32's front face
at about 14.3 mm), C2 13.0 (14.1 front, 13.45 rear), S23 13.0 (13.5), L51 13.5 (14.25), L59 14.5 (14.5).
L32 (S18/S19) first stayed at 13.0: at the drawn 14.5 its front face nests in L31's rear face across the 6.718 mm
gap 17→18, and the cross-gap check refused it (combined sag 6.40 mm against 6.046 mm at gapSagFrac 0.90, and 6.382 mm
at 0.95). The faces do not cross (0.32 mm apart at 14 mm), though no ray needs the raise (the full corner bundle
reaches about 11.4 mm there). On the coordinator's decision L32 now takes the drawn 14.5 on both faces with
`checks.gapSagFrac` 0.96, the smallest two-decimal value that admits it; the header names the pair.

Clearance and light. The surface validator reports no errors; the aperture audit reports all 33 stations within
3 % of the stated f-number with no rim, trace or iris limit; the image-circle audit finds nothing undersized; field
coverage is 100 % at all 33 stations (wide 14.17 of 14.18 mm, corner chief ray clear, where it was 99 % and clipped
at S1 before). Engine EFL 18.5916 mm, F/2.75, half-field 32.9557°, stop radius 12.4747 mm and B are unchanged; only
maxSD (27.0 → 27.8), gapSagFrac (0.90 → 0.96) and the derived layout offsets moved. The paraxial LSA check shows no
misprint (−0.11 to +0.04 mm at full pupil over all stations). The real-ray clearance trace at the printed half-fields
(39.3°, 20.6°, 14.2°; chief rays land at 14.49, 14.51 and 14.47 mm) shows no axial clip and no blocked chief ray at
any printed station. Corner illumination, wide open at infinity, before → after: wide 18.592 mm at 38.4°, 37.5 % →
54.9 %; middle 37.183 mm at 20.2°, 46.3 % → 54.7 %; tele 55.217 mm at 13.9°, 46.9 % → 55.1 %. Across all 33 zoom
nodes no field loses light; the largest gain is 17.4 points.

Open: C2 and L21 sit about 5–8 % inside their drawn outlines.

## 2026-11-10 — Second review: diagram, labels and movement

Compared: the live page (infinity, 0.85 m, the three printed stations, both movement overlays and all 22 inspector
panels) against the Fig. 6 wide panel (PDF p. 7) read at 300, 600 and 1200 dpi on the semi-diameter pass's scale
(5.719 px/mm at 300 dpi). An outline overlay of the final rims on the figure lines up at every vertex from S1 to S40.
Rim heights are line centres of the drawn top and bottom edges; both sides agree within 0.2 mm.

| Surface(s) | Before | After | Fig. 6 | Verdict |
| --- | --- | --- | --- | --- |
| 2 (L11 rear) | 23.8, no land | 23.8, `rimExtensionSd` 27.8 | cap ends at 24.2–24.3; vertical land out to the 28.8 edge | Land added: the site drew L11 as a pointed bevel from S1 (27.8) to S2 (23.8), the figure draws a square block. The land sits outside the clear aperture and costs no light; it stops at the S1 height, which stays the least raise for the printed field |
| 3, 4 (L12) | 25.5 | 24.5 | 24.35 top, 24.57 bottom | Step order: the site drew L12 1.5 mm taller than L13 and L14, Fig. 6 draws it 0.8 mm lower. A cut of 1.0 against baseline; restoring it wins back 0.0 points |
| 5, 6 (L13) | 24.0 | 25.3 | 25.22 top, 25.31 bottom | Same step; raised to the drawn height (edge 1.27 mm, as drawn) |
| 7, 8 (L14) | 24.0 | 25.3 | 25.22 top, 25.44 bottom | Same step; L13 and L14 drawn at one height. D8 at 0.85 m (1.25 mm) still clears C1 by 6.4 mm at the rim |
| 23 (L41 front) | 13.0, no land | 13.0, `rimExtensionSd` 14.5 | arc ends at about 13.0–13.5, steep land to the 14.5 edge | Land added: the site drew a slanted top from S23 (13.0) to S24 (14.5), the figure a square block |

Not applied: Fig. 6 also draws L31 square (S16 at 15.8 with a land on S17's rim). A `rimExtensionSd` of 15.8 on S17 is
refused at `gapSagFrac` 0.96 (the land intrudes 6.579 mm into the 6.718 mm gap 17→18, allowed 6.449 mm) and would need
0.98; no ray needs it, so the slanted L31 top stays. Kept on re-measurement: S1 27.8 (28.8 drawn, 3.5 %), C1 24.0 (24.8
front, 24.1 rear), L21 19.0 (20.0), C2 13.0 (14.1 front, 13.3 rear); the step order of each against its neighbours is as
drawn.

Lands and cuts against `.lens-work/base1120sd`: the C5 cut (36–38 at 12.0 against 13.5) and the L12 cut each win back
0.0 points when restored; the S2 and S23 lands cost 0.0. Worst loss against the baseline rims is 0.0 points at every
one of the 33 zoom nodes and at the zoom eighths; the largest gain is 19.3 points. Wide-open corner transmission at
infinity, before this review → after: wide 38.4° 54.9 → 55.7 %, middle 20.2° 54.7 → 54.7 %, tele 13.9° 55.1 → 55.1 %.
A finite-object trace at 0.85 m (full pupil, wide to tele) shows the corner unchanged or slightly better (wide +1.4
points). The real-ray clearance trace at the 14.18 mm corner shows no axial clip and no blocked chief ray at any
station (largest chief height at S3/S4 22.6/22.2 mm, axial marginal 12.3 mm). The surface validator reports no errors,
the aperture audit has all 33 stations within 3 % with no rim limit, the image-circle audit finds nothing undersized and
field coverage is 100 % at all 33 stations. Engine EFL 18.5916 mm, F/2.75, half-field 32.9557° and stop radius
12.4747 mm are unchanged; one interpolated station's half-field (33.88 mm) moved 26.408° → 26.428°.

Labels and tags found correct: element names L11–L59 are the patent's (¶0100–0101); every `type` agrees with the signs
of R (L32 flat on its image side, L33 on its object side); every element has a focal length in the inspector; the stop
sits between L41 and L51; no aspheres, none marked. Groups G1a 1–6, G1b 7–8 (focus), G1c 9–13, G2 14–15, G3 16–22, G4
23–24 and G5 STO–40 match ¶0101 and the Fig. 6 movement brackets (G1b, G2, G3, G4); doublets C1–C5 bracket the cemented
surfaces 10, 21, 29, 34 and 37. `apd: "inferred"` sits on the six νd 94.66 elements (L14, L21, L33, L41, L52, L57) and on
L16 and L32, the eight Super ED / ED positions recorded in the deployment validation; the patent text names no special
glass.

Movement found correct. Zoom stations ascend 18.592 → 55.217 mm and every gap lists them in that order. Wide → tele, G2
moves 19.13 mm toward the image (D13 1.726 → 20.857, monotonic), G3 36.41 mm (D13 + D15) and G4 24.21 mm (D24 25.173 →
0.967, monotonic); G1 and G5 stay fixed, as Table 18 and the `mv=zoom` overlay show. Focus keyframe 0 is infinity and
keyframe 1 focuses at 849.9–850.2 mm object to image at every station; only L14 moves, 5.35 mm toward the image (D6
7.691 → 13.04, D8 6.601 → 1.25). The slider ends read 18.59 / 55.22 mm and ∞ / 85 cm.

Glass: all 22 labels resolve to exact catalog rows (largest offsets Δnd −9.2e-6 on FD60, Δνd 0.01); none is unmatched,
the patent prints nd and νd only, and no catalog-copied line indices are present. Colour against Fig. 18 (PDF p. 19,
spherical-aberration panels read at 600 dpi, about 1.5 µm per pixel): C, d and F agree within the reading error at all
three stations (wide full aperture C −117, d −114, F −102 µm against curves at −121 to −100 µm). The g line is short:
at full aperture −178 µm wide and −109 µm middle, where the figure's curves reach no further than −121 and −51 µm;
paraxially −22 and −75 µm against about −9 and −50 µm. At the tele end g agrees (−48 µm against about −59 µm). The
exact-tie alternatives move g by at most 27 µm and none closes the gap at both ends (L13/L34 FD225, L53/L55 TAFD45, L51
FDS90, L54 S-TIH6 or H-ZF7LA); only the lead flint PBH6 on L54 helps much, which does not fit a 2017 design. Labels
kept. Distortion matches Fig. 18: −4.8 % at the wide corner, +3.6 % middle, +3.4 % tele. Assignee "Fujifilm
Corporation" is the corpus spelling and matches the front page.

Open: Fig. 6 draws L31 square; the S17 land needs `checks.gapSagFrac` 0.98 and is not applied.
Open: the model's g-line focus at full aperture is 57–90 µm shorter than Fig. 18 at the wide and middle stations (C, d
and F agree); probably the partial dispersions of the catalog rows rather than one label.
