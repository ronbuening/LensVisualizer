# Zenitar 85 mm qualified authoring audit

Status: isolated V2 draft for downstream validation, not delivery-ready. No repository source edits, commits, PRs or deployment.

Rules reread: frozen e3434b282271fb499a0c1865061026f56b7202e8 LENS_DATA_SPEC.md, LENS_ANALYSIS_SPEC.md, TEMPLATE.data.ts.template and agent_docs/lens-data-integration-handoff.md. Root-level type import is intentional for eventual integration; file currently remains outside discovery.

Source: RU2611106C1 original-host Table 1 image and HTML; sole unnumbered example. Inventor and assignee transcribed from HTML metadata, transliterated/translated without implying a different legal entity. All literal R/d/material values match saved axial-pass input. Final gap 38.2 mm, stop split 9.1/5.5, D reference and no scaling preserved.

Changes from diagnostic input: descriptive identity/catalog/source/errata and hidden status added; element labels spaced; static focus sentinel 1e15 replaces diagnostic marketing MFD in focus. Maker MFD0.85 moved into catalog metadata. No optical radius, spacing, cap, element index/dispersion value or stop authority changed. Correction: aperture endpoint now f/22, supported by retained manufacturer booklet page 2 (Минимальная диафрагма 22). Original f/16 endpoint was a diagnostic default, not source-backed. Conventional intermediate f-stop control steps are not asserted to be individually documented detents.

Inferences: all clear radii, optical versus mechanical rim interpretation, nominal-F1.4 derived stop radius, production-family correlation and qualitative element roles. Source stop axial placement is not an inferred position. No native guard override, no catalog glass substitution or image refocus.

Fresh evidence: native_D_feasibility_20261111 diagnostics, including DENSER_FIXED_CAPS_REVIEW_INVARIANTS.json. Earlier invalid mutable-input and blocked-entry retrace attempts remain retained and explicitly excluded from physical-failure conclusions. Primary Fig2 is source evidence only. Current draft requires independent source/metadata review, full type/corpus/integration/viewer validation and verified private archive before delivery.

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
- Open for the cleanup pass: public wording; glass labels still say "literal sodium-D only".
