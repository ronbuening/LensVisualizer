# OM SYSTEM M.ZUIKO DIGITAL ED 20mm f/1.4 PRO — audit log

## 2026-11-09 — Deployment validation

Independent check of JP 2023-32222 A Numerical Example 1 (printed pp. 13–14, page images and text layer): all 24 rows
(R, d, nd, νd), the stop at S9, the S12/S19/S20 aspheres (K and A4–A16; standard (1+K) sag form, every K = 0), d16 and
d18 at both states and the S23–S24 optical filter (`rearPlates`, 15 mm ahead, BF 1.3929 behind) agree with the file.
Engine EFL 20.274 (printed 20.27), F1.43, half-field 29.505°, total length 80.263 (80.26); the seven printed group
focal lengths reproduce; close state β −0.0250 at 794.75 mm object distance (printed 794.68).

Attribution: the applicant is Sigma Corporation, but OM Digital Solutions' own construction drawing (press release
PDF `jp.omsystem.com/cms/content/000116719.pdf`, p. 2) matches Example 1 element by element: Super HR on L1/L4 (nd 2.00069,
2.0509), ED on L2/L7/L8, Super ED on L3 (1.437/95.1), aspheres on L6 and L10, same cemented pair and stop. 11/10,
Four Thirds image height 11.15 mm, filed 2021-08-26 before the November 2021 announcement. No other example fits.

Deployment change: `maker` "OM System" → "Olympus" and file moved from `om-system/` to `olympus/`, matching the catalog's
OM SYSTEM 90mm f/3.5 Macro; the package's `OM SYSTEM` maker-prefix row and `om-system` maker profile were not kept.
Open: production MFD 0.25 m is not in `catalog.closeFocusM`; package wording ("inferred product association") and
"Unmatched" labels on glasses that equal HOYA catalog rows remain for the cleanup pass. (Closed in the cleanup pass
below.)

## 2026-11-09 — Cleanup and wording pass

Data file. Header comment rewritten as plain technical notes (patent, example, scale 1, sag form, maker-drawing match,
stop, rear plate and printed-vs-computed BF, focus scope, semi-diameter and glass-label basis). Subtitle "JP 2023-32222
A Example 1 — inferred product association" → "JP 2023-32222 A, Example 1 — element-by-element match to the
production lens"; the attribution rests on OM's construction drawing matching every element and special-glass
position. Specs now 11 ELEMENTS / 10 GROUPS, DESIGN f = 20.27 mm, DESIGN F/1.43, 3 ASPHERICAL SURFACES / 2 ELEMENTS,
1 SUPER ED / 3 ED ELEMENTS. `catalog.closeFocusM.marketing` 0.25 added (OM product page: 0.25 m, 0.11×).
`aperture.blades` 9 added (OM: nine-blade circular diaphragm, F1.4–F16); `fStops` and `maxFNumber` 16 unchanged. The
printed infinity and 0.025× states, `focus.closeFocusM` 0.8749445 and the conjugate are unchanged; the focus
description and conjugate source text were reworded. Roles added to all eleven elements. `apd: "inferred"` with a
one-line note on L2 (FCD1, ED), L3 (FCD100, Super ED), L7 and L8 (FCD515, ED), the positions OM's drawing marks.
`groups` G1–G4 (S1–8, S10–16, S17–18, S19–22, after Figure 1) and `doublets` D1 (S10–12) added, so the cemented pair is
drawn.

Glass labels (exact catalog coordinates, confirmed with trylabel): L1 TAFD40, L2 FCD1, L3 FCD100, L4 TAFD65, L5
NBFD29, L7/L8 FCD515 (νd 68.63 against printed 68.62), L9 NBFD32, L10 M-NBFD130 (NBFD13 shares the coordinates; the
mouldable grade was chosen for the double-aspherical element), L11 FC5 (νd 70.45 against 70.44), all HOYA; L6 L-LAH91
(OHARA), the only exact match for 1.76450 / 49.10. Each was "Unmatched (patent nd…, vd…)" before.

Analysis. Identification rewritten: product facts (announcement 4 November 2021, release 10 December 2021, 11/10,
special elements, 0.25 m, nine blades), a plain explanation of Sigma as applicant, and the maker-drawing comparison
per element; other examples ruled out. Element entries now carry catalog equivalents and OM designations. Added a
glass table, a conditional-expression table (all ten conditions recomputed from the prescription: f/f1 −0.26 …
νdG1b 88.35, M4 0.54, |M4²(1 − M3²)| 1.40) and Sources. Removed process material: local-validation and archive
sentences, the trace-sample and transmission percentages, the MTF grid and convergence paragraph, and the
"unmatched / no ED designation" statements the maker drawing contradicts. The validation-limits section became Model
Scope and Limitations.

Engine numbers before and after (identical): EFL 20.27366, FOPEN 1.43, half-field 29.505°, stop radius 8.70011,
paraxial BFD 1.3933 at infinity; near keyframe EFL 20.1233, magnification −0.0250. Surface audit OK.

Open: FL in `rearPlates` keeps "Unmatched (patent nd=1.51633, vd=64.14)"; S-BSL7 (OHARA) is an exact match but
`rearPlates` was outside this pass. L2's rim steps from 13.8 mm (S3) to 10.2 mm (S4) and draws as a sloped edge,
where Figure 1 shows a flat land; rims were not changed in this pass.

Coordinator follow-up, same day: the FL rear plate (1.51633/64.14) is labelled S-BSL7 (OHARA catalog equivalent), an
exact match; the open item above is closed.
