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
where Figure 1 shows a flat land; rims were not changed in this pass. (L2 land closed in the semi-diameter pass below.)

## 2026-11-09 — Semi-diameter pass against the patent figure

Source: JP 2023-32222 A, Figure 1 (Example 1 at infinity), printed page 25, read at its native 787 dpi. Axial scale
28.30 px/mm from the S1–S22 vertex span (1690.5 px for 59.73 mm); every lens-vertex crossing falls within 2 px of the
prescription, and FL and the image line land within 0.2 mm. Transverse scale 28.95 px/mm from arc fits to S4
(R 12.80), S10 (R −21.49) and S18 (R 15.61), confirmed by the stop tick, whose inner end (about 8.9 mm) matches the
real marginal ray at the stop at F1.43 (8.92 mm). The figure is about 2 % anamorphic; heights below use 28.95 px/mm.

| Surface | Stored | Figure | Now | Evidence |
|---|---|---|---|---|
| S1/S2 (L1) | 16.0 | 15.85 | 16.0 | within noise |
| S3 (L2) | 13.8 | 13.64 | 13.8 | within noise |
| S4 (L2) | 10.2 | cap end 10.67, land to 13.64 | 10.2, rimExtensionSd 13.8 | land drawn; a 10.6 cap would meet L3's front rim, which the figure draws touching it |
| S5 (L3) | 10.2 | 10.92 | 10.9 | figure; L3 stands above L4 in the figure |
| S6 (L3) | 10.2 | cap end 9.84, land to 10.92 | 10.2, rimExtensionSd 10.9 | land drawn; cap within noise |
| S7/S8 (L4) | 10.6 | 10.09, square | 10.1 | figure and step order against L3; costs no light |
| S10 (L5) | 12.5 | cap end 9.60, edge 12.30 | 12.5, rimCutDepthMm 2.34 | q = 0.781 ± 0.005 (278/356 px); cut radius 9.75 mm |
| S11/S12 (L5/L6) | 12.5 | 12.30 | 12.5 | within noise |
| S13/S14 (L7) | 13.5 | 13.82, square | 13.8 | figure; drawn top edge 1.77 mm long, model 1.72 mm at 13.8; L7 stands above L8 |
| S15/S16 (L8) | 13.5 | 13.44 | 13.5 | within noise |
| S17 (L9) | 11.1 | 11.19 | 11.1 | within noise |
| S18 (L9) | 11.1 | cap end 9.36, edge 11.19 | 11.1, rimCutDepthMm 3.94 | q = 0.836 ± 0.006 gives 9.28 mm; the wide-open beams reach 10.31 mm (focus 0.95, 23.6°), so the cut sits at 10.37 mm |
| S19/S20 (L10) | 11.1 | 11.12 | 11.1 | within noise |
| S21 (L11) | 11.1 | 10.88 | 11.1 | within noise; 10.9 would shorten the traceable field |
| S22 (L11) | 11.1 | cap end 9.98, edge 10.88 | 11.1, rimCutDepthMm 3.93 | q = 0.917 ± 0.006 gives 10.18 mm; beams reach 10.54 mm, so the cut sits at 10.60 mm |

`checks.gapSagFrac` 0.91 (from the 0.9 default) admits S5 at 10.9 mm against S4 (combined sag 5.663 mm in the 6.23 mm
gap); the faces do not cross, L2's land stays 0.57 mm clear of L3's front rim, and the figure draws the two elements
touching at the rim.

Clearance at both printed states: no axial clip or chief-ray block at F1.43 with Y = 11.15 mm; the f-number audit
reports no rim limit; image circle and corner coverage 100 %; the dense rim-cut probe clears all three cuts with no ray
inside the 0.05 mm margin. Corner illumination at F1.43, before and after (identical): 55.1 % at 29.5° at infinity and
57.0 % at the 0.025× state; no field loses light. The edge-field loss is set mainly by L10, with L9 at mid field (opening
L9–L11 to 12.5 mm raises the corner to 61 %), not by the front group. Engine EFL 20.27366, F1.43, half-field 29.505°, stop radius
8.70011 mm and back focus are unchanged; the engine's ray-tracing field margin (`tracingHalfField`) falls from 34.97° to
34.00° because of the S22 land, still well beyond the 29.5° image field. The analysis's sentence naming the
front-group rims as the vignetting limit was corrected to L9 and L10.

OM's construction drawing (press release p. 2) agrees on order and lands: L2 and L3 nested, L3 drawn above L4, flat
lands on L5's front and on L9's and L11's rear faces. It draws L7 and L8 about equal in height, where Figure 1 draws
L7 0.4 mm taller; the patent figure governs.

Open: S4's cap stays at 10.2 mm, so L2's rear land sits 0.8 mm ahead of where Figure 1 draws it; reaching the drawn
10.6 mm cap would need L3's front rim lowered or the S4/S5 gap limit near contact.

Coordinator follow-up, same day: the FL rear plate (1.51633/64.14) is labelled S-BSL7 (OHARA catalog equivalent), an
exact match; the open item above is closed.
