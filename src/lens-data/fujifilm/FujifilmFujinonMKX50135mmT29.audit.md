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
clearance at D15), not a patent value; G2–G4 rims sit ≈10 % inside the figure outline; glass labels `Unmatched`.
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
G2/G3 rims sit just outside the axial beam); a rim pass against the figure is still due. Example 1 vs Example 3 rests
on the patent's lead example; Fujifilm's construction drawing has not been compared element by element.
