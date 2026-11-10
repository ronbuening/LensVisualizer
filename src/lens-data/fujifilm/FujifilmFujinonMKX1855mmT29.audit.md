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
S1 rim, which stays open.)

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
19 vs about 21 mm; G3, G4 13–14 vs about 15 mm). The 0.38 m wide-end macro mode is not modeled.
