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

Open: the live page check is left to the coordinator.
