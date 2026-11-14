# Zenitar 85 mm qualified authoring audit

Status: isolated V2 draft for downstream validation, not delivery-ready. No repository source edits, commits, PRs or deployment. (Closed 2026-11-11: validated and integrated; see the sections below.)

Rules reread: frozen e3434b282271fb499a0c1865061026f56b7202e8 LENS_DATA_SPEC.md, LENS_ANALYSIS_SPEC.md, TEMPLATE.data.ts.template and agent_docs/lens-data-integration-handoff.md. Root-level type import is intentional for eventual integration; file currently remains outside discovery.

Source: RU2611106C1 original-host Table 1 image and HTML; sole unnumbered example. Inventor and assignee transcribed from HTML metadata, transliterated/translated without implying a different legal entity. All literal R/d/material values match saved axial-pass input. Final gap 38.2 mm, stop split 9.1/5.5, D reference and no scaling preserved.

Changes from diagnostic input: descriptive identity/catalog/source/errata and hidden status added; element labels spaced; static focus sentinel 1e15 replaces diagnostic marketing MFD in focus. Maker MFD0.85 moved into catalog metadata. No optical radius, spacing, cap, element index/dispersion value or stop authority changed. Correction: aperture endpoint now f/22, supported by retained manufacturer booklet page 2 (Минимальная диафрагма 22). Original f/16 endpoint was a diagnostic default, not source-backed. Conventional intermediate f-stop control steps are not asserted to be individually documented detents.

Inferences: all clear radii, optical versus mechanical rim interpretation, nominal-F1.4 derived stop radius, production-family correlation and qualitative element roles. Source stop axial placement is not an inferred position. No native guard override, no catalog glass substitution or image refocus.

Fresh evidence: native_D_feasibility_20261111 diagnostics, including DENSER_FIXED_CAPS_REVIEW_INVARIANTS.json. Earlier invalid mutable-input and blocked-entry retrace attempts remain retained and explicitly excluded from physical-failure conclusions. Primary Fig2 is source evidence only. Current draft requires independent source/metadata review, full type/corpus/integration/viewer validation and verified private archive before delivery. (Closed 2026-11-11: independent source review done in the deployment validation below.)

Source stop citation: RU2611106C1 description at https://patents.google.com/patent/RU2611106C1/en, paragraph describing Fig. 1 (retained source.html line491), explicitly «на расстоянии 5,5 мм от двояковогнутой линзы 5» (5.5 mm from biconcave lens5). Stop position is published; derived iris radius remains inferred.

## Deployment validation (2026-11-11)

- Source: RU 2611106 C1, full Espacenet scan (9 pp.; Google's PDF is the claims page only), kept as
  `patents/RU2611106C1.pdf`. Table 1: 12 R, 11 d, 7 nD/νD pairs exact; the stop 5.5 mm before lens 5 is printed (p. 6).
- First order: EFL 84.264 vs printed 84.23, back focus 38.259 vs 38.2. e-line indices give 84.236 / 38.221, so the
  printed values are e-line figures, not a misprint.
- Integration fixes:
  - Maker "KMZ" (folder `kmz/`).
  - `indexReference` D → d: TK14 and LF5 equal catalog nd, and TK21/TF5/STK3 sit 1.0–2.3e-4 above the GOST nD column.
  - The three errata (EFL residual, nD label, field wording) were removed; none is a source error.
  - R7: the cap at `sd` 18.4 reached 11.45 mm behind its vertex, 2.35 mm past the printed stop plane. Added
    `rimCutDepthMm` 9.1 (the stop-plane distance, per LENS_DATA_SPEC Rim cuts); cut radius 17.04 mm against a 16.4 mm
    beam need, so no light is lost.
  - Author transliteration "Vladimir Aleksandrovich Bogdankov".
- Product: maker page 7 elements / 5 groups, 85 mm f/1.4–22, 0.85 m, Canon EF and Nikon F. No maker construction
  diagram exists; patent Fig. 1 is the best drawing. The older Zenitar-1K is 7/6 and a different design.
- Open for the cleanup pass: public wording; glass labels still say "literal sodium-D only". (Closed: see the cleanup
  section below.)

## 2026-11-11 — Cleanup and wording pass

Fields changed in the data file: header comment rewritten in plain terms with every fact kept (sole example, no
scaling, d-line reading of the nD/νD columns, e-line explanation of the 84.23 / 38.2 mm printed values, stop 5.5 mm in
front of lens 5 with derived radius, estimated rims, R7 rim cut at the stop plane, infinity-only, maker f/1.4–22 scale,
probable production association). `subtitle` "RU 2611106 C1 — qualified modern production-family correlation;
literal sodium-D patent prescription" became "RU 2611106 C1, sole example — probable production design". `specs`
became 7 ELEMENTS / 5 GROUPS, DESIGN f = 84.23 mm, DESIGN F/1.4, ALL SPHERICAL. `focus.description` now states
infinity-only, the patent's unit focusing (p. 7) and the 0.85 m production minimum; `focus.closeFocusM` stays 1e15.
Element `type` "Source spherical glass" became Positive Meniscus (L1–L3), Negative Meniscus (L4), Biconcave Negative
(L5), Biconvex Positive (L6) and Plano-Convex Positive (L7), read from the signs of R and the patent's p. 6 text.
Added a short `role` per element, `cemented` C1 (L3/L4) and C2 (L5/L6), and matching `doublets` brackets.
`catalog.focalLengthMm.design` stays 84.23, the patent's stated f'; the only neighbour in `kmz/` (Industar ITMO
Variant 2) uses a traced EFL because its book source states none.

Glass relabels, against catalog d-line rows: L4 and L7 TF5 → "SF4 (Schott catalog equivalent of TF5)", Δnd −3.3e-5,
Δνd +0.06; SF4 chosen over the equally close E-FD4, S-TIH4 and H-ZF6 because it is a lead dense flint like TF5.
L5 LF5 → "QF3 (CDGM catalog equivalent of LF5)", Δnd +6e-6, Δνd 0.00 (S-TIL27 and J-LF7 miss by 0.21 in νd). TK14
(L1, L2), TK21 (L3) and STK3 (L6) have no row within 1e-4 / 0.15 (nearest K-PSK200, N-SSK5 and K-LaK11 miss by 1.6 in
νd or 5e-4 to 1.2e-3 in nd) and stay `Unmatched (<grade>, nd … / νd …)`. No `apd` tags: the maker publishes no special
dispersion elements.

Analysis: removed the review-draft paragraph, the diagnostic ray-sample and spot paragraphs and the pending-review
list; renamed "Validation Scope and Remaining Qualifications" to "Model Scope and Limitations". The glass section now
gives the d-line evidence (Lytkarino nd for TK14/LF5, GOST 13659-78 sodium-D column for the rest) and the catalog
equivalents. Added the patent's unit focusing, the e-line explanation of the first-order residual, the R7 rim cut and the
MC Zenitar-1K (7/6) distinction; the inventor line now reads "Aleksandrovich", as on the official English front page.

Engine numbers, identical before and after: EFL 84.2643 mm, FOPEN 1.4, half-field 14.25°, stop radius 15.6667 mm,
BFD 38.2590 mm, total length 101.1 mm. Surface audit OK; aperture audit reports no rim limit.

Open:

- R7 rim: Fig. 1 draws the R7 clear area to about 15.4 mm, with a flat land out to about 20.0 mm roughly 7.2 mm behind
  the vertex (1.9 mm ahead of the stop). The file has `sd` 18.4 with the cut at 9.1 mm depth (cap radius 17.04 mm).
  The f/1.4 axial beam needs 15.96 mm at R7, so a figure-exact land would clip it slightly. (Closed in the
  semi-diameter pass below: `sd` 20.91, cut at 7.7 mm.)
- Front rims run about 0.5–0.9 mm above Fig. 1 (L1 29.6 vs about 29.0, L4 front 20.9 vs about 20.0 mm), set at the
  f/1.4 axial beam height. (Closed in the semi-diameter pass below: within 3–4 % of the figure, kept.)
- Unit focusing to 0.85 m is printed as a mechanism only; no finite state is modeled.

## 2026-11-11 — Semi-diameter pass against the patent figure

Source: RU 2611106 C1 (`patents/RU2611106C1.pdf`), Fig. 1 on p. 9, a 300 ppi bilevel scan, native scale (no scaling
in the model). The axis lies on row 1332 at 300 dpi; the twelve vertex crossings sit at x = 815.5, 896.5, 901.5, 982,
988.5, 1170.5, 1207, 1384, 1418, 1528, 1534.5 and 1581 px. S1→S12 gives 765.5 px over 62.9 mm, 12.17 px/mm; the spans
S1→S7 (12.20), S5→S6 (12.13) and S8→S12 (12.16) agree, the stop tick falls at x = 1316.5 against 1316.9 predicted, and
the drawn R7 arc matches R = 20.51 mm in height (136 px at 3.29 mm sag, 135.6 predicted), so both axes share the scale.
Rims were read on the lower half, which carries no leader lines.

| Surface | Stored before | Fig. 1 | Ratio | After | Evidence |
| --- | --- | --- | --- | --- | --- |
| 1 / 2 (L1, square rim) | 29.6 / 29.6 | 28.76 (350 px) | 0.97 | kept | within noise |
| 3 / 4 (L2, square rim) | 27.91 / 27.91 | 27.03 (329 px) | 0.97 | kept | within noise |
| 5 (L3 front) | 24.61 | 23.83 (290 px) | 0.97 | kept | within noise |
| 6 (L3/L4 junction, L4 edge) | 20.91 | 20.05 (244 px) | 0.96 | kept | within noise |
| 7 (L4 rear) | 18.40, cut 9.1 mm (cap 17.04) | edge 20.05, cap end 15.32 (186.5 px) | 1.09 | 20.91, cut 7.70 mm (cap 16.02) | figure square rim and land |
| 8 (L5 front) | 15.29 | 15.28 (186 px) | 1.00 | kept | agrees |
| 9 / 10 (L5/L6) | 15.89 / 15.99 | 15.3–15.4 (186–187 px) | 0.96 | kept | within noise |
| 11 / 12 (L7) | 14.88 / 14.52 | 14.63 (178 px) | 0.98 / 1.01 | kept | agrees |

R7: Fig. 1 draws L4 square-edged (both faces end at 244 px) and ends the R7 cap on a flat land at q = 186.5 / 244 =
0.764 of the edge radius; one native pixel at each end gives q 0.757–0.771. R7 therefore takes R6's `sd`
(20.91031686675028) so L4 stays square. q × `sd` puts the cut radius at 15.98 mm (depth 7.65 mm), but the wide-open
f/1.4 beam reaches 15.961 mm at R7 and an inferred cut needs 0.05 mm clearance, so the cut moved out to 7.70 mm depth
(cut radius 16.018 mm, q = 0.766, inside the measured range). The land now sits 7.70 mm behind the R7 vertex, 1.40 mm
ahead of the stop plane; Fig. 1 draws it at 7.19 mm (88 px). The surface validator accepts 7.70 and refuses 7.65.

Lands rule: the cut and land cost no light. Geometric transmission at 0 / 2.4 / 4.8 / 7.1 / 9.5 / 11.9 / 14.3° is
100.0 / 92.3 / 83.0 / 73.1 / 62.6 / 50.9 / 39.2 % before and after; restoring the baseline R7 rim wins back 0.0 points.

Engine numbers before and after: EFL 84.264 mm, f/1.4, stop radius 15.667 mm, half-field 14.25°, BFD 38.259 mm. The
surface audit is clean, the aperture audit finds no rim limit, the image-circle check finds nothing undersized, and
field coverage reaches 21.57 of 21.65 mm at the corner (unchanged). A render of the worktree page shows L4 square with
its land just ahead of the iris, as in Fig. 1.

Open: the renderer joins L3's front rim (24.61) to the cemented junction (20.91) with a sloped edge, where Fig. 1
draws L3 square at 23.8 mm with a step down to L4; a land is not allowed on a cemented junction, so this stays.
(Carried forward to the second review below.)

## 2026-11-11 — Glass coverage pass

- Added an LZOS shard to the glass catalog (`glassCatalogEntries/lzos.ts`): TK14, TK21 and STK3, each a formula-3 fit to
  the LZOS clear-glass catalogue index table over 365–1014 nm (max index error 4.9e-6 / 9.4e-6 / 5.8e-6).
- Relabels (catalogue minus printed): L1, L2 Unmatched (TK14) → TK14 (LZOS), Δnd −3e-6, Δνd −0.03; L3 Unmatched (TK21)
  → TK21 (LZOS), +6e-6 / −0.03; L6 Unmatched (STK3) → STK3 (LZOS), +3e-6 / 0.00. All seven elements now trace on
  catalog curves.
- Metadata: `aperture.blades` 8 from the maker's product page (zenit.photo, "МС Зенитар 1,4/85": 8 blades, f/1.4–22,
  0.85 m, 28°, Canon EF / Nikon F). The display name already follows the maker's "MC Zenitar" designation.

## 2026-11-11 — Second review: diagram, labels and movement

Compared the local page (infinity, element inspectors, movement overlay) with RU 2611106 C1 Fig. 1 (p. 9, re-read at 300
and 600 dpi; axis row 1332, 12.17 px/mm as proved in the semi-diameter pass), Table 1 (p. 7) and the description (pp. 6–7).

A stop-aimed real-ray trace puts every stored rim 0.01 mm outside the f/1.4 axial beam (S1 29.59, S3 27.90, S5 24.60, S6
20.90, S8 15.28, S9 15.88, S10 15.98, S11 14.87 mm); Fig. 1 draws every element 2–5 % below that beam, so no rim can come
down to the drawing. Fig. 1 draws all seven elements square-edged: L5 and L6 share one flat top (184.5–185.5 px at 600 dpi
halved, 15.2 mm) and L7 is square (14.4–14.6 mm). The page showed L5 rising from 15.29 to 15.89 mm across its edge, L6
from 15.89 to 15.99 and L7 falling from 14.88 to 14.52, and put L5's front rim below the iris radius (15.67 mm) where
Fig. 1 draws it level with or just above the stop tick (15.16 vs 15.04 mm).

| Surface | Before | Fig. 1 | After | Evidence |
| --- | --- | --- | --- | --- |
| 8 (L5 front) | 15.29 | 15.2–15.3, square with L5/L6 | 15.99 (R10's rim) | square-cut pair; S9/S10 axial floor 15.88/15.98 bars lowering the rest |
| 9 (L5/L6 junction) | 15.89 | 15.2–15.3 | 15.99 (R10's rim) | same |
| 12 (L7 rear, flat) | 14.52 | 14.4–14.6, square | 14.88 (R11's rim) | square-cut L7; S11 axial floor 14.87 |

The C2 pair now sits 4–5 % and L7 2–3 % above the figure, in line with L1–L4 (3–5 %). These are raises; they cost no
light and were made for the drawn shape, not for the numbers. Lands and cuts: the R7 land (cut 7.70 mm) is the only one;
it is needed for spacing (R7's `sd` 20.91 exceeds |R| 20.51) and `rimcost.mjs` against the 1121 baseline gives a worst
loss of 0.0 points, so it stays. Full-pupil transmission at 0 / 2.4 / 4.8 / 7.1 / 9.5 / 11.9 / 14.3° goes from 100.0 / 92.3
/ 83.0 / 73.1 / 62.6 / 50.9 / 39.2 % to 100.0 / 92.3 / 83.4 / 73.8 / 63.8 / 52.5 / 40.9 %. Engine numbers unchanged: EFL
84.264 mm, f/1.4, stop radius 15.667 mm, half-field 14.25°, BFD 38.259 mm; field coverage 21.57 of 21.65 mm; the surface,
aperture and image-circle audits are clean.

Labels: added `groups` I (S1–S7) and II (S8–S12), the two optical components the description names and Fig. 1 braces;
they render under the element numbers and do not touch the C1/C2 cemented brackets. Added `focalLengthMm` to every element
(thick-lens d-line values +176.4, +203.6, +67.5, −33.7, −32.4, +33.3, +111.9 mm), which the inspector had shown as "FL = —".
Element names L1–L7 follow the patent's lens numbers 1–7; types agree with the signs of R; roles are true; the stop sits
9.1 mm behind R7 and 5.5 mm before lens 5 as printed; no aspheres and no `apd` tags, as neither the patent nor the maker
names a special glass. The patent's text calls the L5/L6 pair a negative meniscus; the printed prescription gives +360.0
mm at the d line, so roles avoid a power sign.

Movement: static infinity-only prime with no `gaps`; `focus.description` states the patent's unit focusing (p. 7, "by
moving the whole optical system") and the 0.85 m production minimum; the movement overlay reports no modeled movement.

Glass: all seven labels resolve within the exact window (TK14 Δnd −5e-7, TK21 +4e-6, STK3 +7e-7; SF4 −3.3e-5 / +0.06; QF3
+6e-6 / 0.00). The patent prints only nD/νD and Table 2 spectral weights (435–656 nm): no line indices, no partial
dispersion and no chromatic aberration curves, so there is no colour comparison to make. Hoya E-FD4/FD4 and Ohara PBH4
(TF5) and Sumita LF7 (LF5) are equally exact alternatives; the current labels stand. The `.analysis.md` limitations
paragraph still described three unmatched glasses on Abbe estimates; it now matches the catalog state.

Assignee and inventor match the front page (ПАО "Красногорский завод им. С.А. Зверева"; Богданков Владимир Александрович);
the spelling is the corpus's only KMZ assignee entry.

Open: L3 still renders with a sloped edge from 24.61 mm to the 20.91 mm cemented junction, where Fig. 1 draws it square at
23.8 mm with a step down to L4; `rimExtensionSd` is not allowed on a cemented interface, and S5 cannot drop below its
24.60 mm axial floor.

## 2026-11-12 — Assignee consolidation

`source.assignees` changed from "Public Joint-Stock Company Krasnogorsk Plant named after S. A. Zverev" to "PJSC
Krasnogorsky Zavod named after S. A. Zverev", the form the KMZ Zenitar 35mm f/1 and 50mm f/0.95 on main use for the
same patent holder, so the three patents share one assignee page and one node on the relationship map.
