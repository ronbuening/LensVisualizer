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

## 2026-11-09 — Focus extended to the 0.25 m minimum focus

On the owner's request the focus range now runs to OM's 0.25 m minimum focus instead of stopping at the printed 0.875 m
state. The patent names L9 (G3) as the only moving element (claim 1, ¶0092), so the close state moves L9 alone, holding
d16 + d18 = 7.48 mm and the image plane fixed: a secant solve on the paraxial trace puts the image of an object 250.00 mm
from the image plane on that plane at d16 3.019 / d18 4.461 mm (L9 travel 1.619 mm), with magnification −0.1089 (OM:
0.11×) and EFL 19.595 mm. `focus.closeFocusM` 0.8749445 → 0.25 with keyframes [0, 0.285732, 1]; the printed state is
the middle keyframe (0.25 / 0.8749445), still listed in `published` and still the only certified conjugate. The two
inferred rim cuts that the wider travel brought inside their 0.05 mm beam margin moved out: S18 3.94 → 4.00 mm (cut
radius 10.367 → 10.435 mm) and S22 3.93 → 3.97 mm (10.600 → 10.646 mm). After: `audit:surface` OK, the rim-cut probe
clear over 22 focus states, `audit:aperture` within 3 % of F1.43, field coverage 100 %, and no axial clip or blocked
chief ray at any of the three states. Infinity values are unchanged.

## 2026-11-09 — Second review: diagram, labels and movement

Compared the local page at infinity, at the printed 0.025× state (focus 0.285732, slider "88 cm") and at 0.25 m with
Figure 1 (printed page 25, 787 dpi) and with an overlay of the model and the baseline rims on the figure. Scale proved
again: 28.31 px/mm along the axis (S1–S22 1691.5 px for 59.73 mm; S1 to the filter's rear face 2232.5 px for 78.87 mm;
every vertex within 2 px) and 29.0 px/mm across it (arc fits to S4, S6, S10, S18 and S22, 28.9–29.3). Readings: L1
15.86, L2 13.66, L3 10.93, L4 10.10 (square), D1 12.34, L7 13.83, L8 13.48, L9 11.28, L10 11.14, L11 10.89 mm; lands at
S4 (cap end about 10.6), S6 (about 9.9), S10 (depth 2.36), S18 (depth 3.16, cap end 9.4) and S22 (depth 3.45, cap end
10.0). Every outer rim is within 2 % of these, and the land positions that differ are set by the beam rule (S18, S22) and
by L3's rim (S4, see Open), so no rim changed.

| Land or cut | Figure | Baseline | Final | Light cost | Verdict |
|---|---|---|---|---|---|
| S4 land (L2) | land from 10.6 to 13.66 | 10.2, none | 10.2, land to 13.8 | 0.0 | keep: drawn, costs nothing |
| S6 land (L3) | land from 9.9 to 10.93 | 10.2, none | 10.2, land to 10.9 | 0.0 | keep: drawn, costs nothing |
| S7/S8 cut (L4) | 10.10, square | 10.6 | 10.1 | 0.0 | keep: costs nothing |
| S10 cut (L5) | depth 2.36 | 12.5, none | depth 2.34 (r 9.75) | 0.0 | keep: drawn, costs nothing |
| S18 cut (L9) | depth 3.16 | 11.1, none | depth 4.00 (r 10.44) | 0.0 | keep; the beam rule refuses it deeper |
| S22 cut (L11) | depth 3.45 | 11.1, none | depth 3.97 (r 10.65) | 0.0 | keep; the beam rule refuses it deeper |

Light cost is the worst loss against baseline rims at any field, wide open, at all three focus states with the app's
lattice (rimcost.mjs, and the same lattice with each cut removed); worst loss 0.0 points. With a real object point the
corners are 60.7 % at the printed state (object 794.68 mm from S1) and 66.2 % at 0.25 m (169.74 mm), or 54.8 % and
61.4 % if the samples the aiming cannot reach count as blocked, identical with baseline rims and with all three cuts
removed; the furthest corner-beam rays reach 10.34 mm at S18 and 10.11 mm at S22.
`audit:surface` refuses S22 at depth 3.5: the beams of the uncut lens reach 10.58 mm there at the 0.25 m state at 35.0°.
`checks.gapSagFrac` 0.91 is the smallest value that admits S5 at 10.9 mm beside S4 (at 0.90: combined sag 5.66 mm
against 5.607 mm allowed in the 6.23 mm gap); the figure draws L2's land touching L3's rim.

Labels, tags and movement: element types match the signs of R and ¶0089–¶0093; G1 S1–8, G2 S10–16, G3 S17–18, G4
S19–22 match the printed group table; D1 brackets S10–12; the stop sits between L4 and L5; the page marks only S12, S19
and S20 aspheric. The inspector shows L2, L3, L7 and L8 as inferred APD and L6 and L10 as aspheric with their catalog
glasses. Only L9 moves, toward the image (d16 1.4000 → 1.7647 → 3.019, d18 6.0800 → 5.7153 → 4.461, sum 7.48 mm), as
¶0092 and the figure arrow state; the movement overlay shows G1, G2 and G4 fixed and 1.62 mm of travel. Colour agrees
with Figs. 2 and 3 within 0.01 mm: at infinity d marginal −0.091 (figure −0.090), C paraxial +0.028 (+0.027), g
+0.002 at the margin (+0.002); at 0.025× g paraxial −0.018 (−0.018) and C +0.032 (+0.030). Distortion at 29.5° is
−2.9 % (figure about −2.9 %) and ΔM −0.31 mm (about −0.34 mm). Engine EFL 20.274 mm, F1.43, half-field 29.505° and
stop radius 8.700 mm are unchanged. The analysis now names L2's rear face with L10 as the field-edge limit (opening S4
alone to 10.6 mm adds 4.6 points at 29.5°, L10 alone 4.3, L9 alone 0.2) and L9 at mid field.

(Closed the same day by the coordinator: S4 raised to 10.6 mm.) Open: L2's rear land sits 0.8 mm ahead of where Figure 1 draws it, because S4's cap stops at 10.2 mm; the drawn
10.6 mm would leave 0.01 mm to L3's rim and need `checks.gapSagFrac` 1.00 (10.5 mm needs 0.98), and would also raise
the 29.5° corner by up to 4.6 points.
Open: surface labels S12, S19 and S20 carry no `A` suffix (LENS_DATA_SPEC, surface labels); the page marks them from
the `asphere` entries.

Coordinator follow-up, same day: S4 (L2's rear face) rises 10.2 → 10.6 mm, the figure's reading, with
`checks.gapSagFrac` 0.91 → 1 so the face may come within the S4/S5 gap beside L3's 10.9 mm front rim (the faces do not
cross; 0.98 admits 10.5 mm, 1 is needed for 10.6). It costs no light and gains 4.6 points at 29.5° against the baseline
rims (55.1 → 59.7 %; 26.6° 67.3 → 70.6 %); `audit:surface` OK, aperture within 3 % of F1.43, rim-cut probe clear.
The aspheric surfaces are now labelled `12A`, `19A` and `20A`, with the D1 and G4 bracket ends renamed to match.
