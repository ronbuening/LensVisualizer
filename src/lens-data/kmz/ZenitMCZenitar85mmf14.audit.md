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
  The f/1.4 axial beam needs 15.96 mm at R7, so a figure-exact land would clip it slightly.
- Front rims run about 0.5–0.9 mm above Fig. 1 (L1 29.6 vs about 29.0, L4 front 20.9 vs about 20.0 mm), set at the
  f/1.4 axial beam height.
- Unit focusing to 0.85 m is printed as a mechanism only; no finite state is modeled.
