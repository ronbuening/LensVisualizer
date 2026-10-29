# Pentax FA★ 28–70mm F2.8 AL — reconstruction audit

## Disposition

**Candidate pending independent final review** (closed 2026-10-29: independent validation passed; see the deployment validation section below). This is a table-derived related-design/infinity-only reconstruction. It is not exact factory equivalence, a literal published-plane model, an official BF correction, a fully validated/finished package, or a deployment.

No source radii/materials/native optical spacing edits. The only applied official correction is the 1999 certificate's K=−1. The inferred image plane is BF=55.45−d20, preserving the wide printed BF39.87 and stationary G3/stop. Literal BF, E5 and both bounded E6 radius hypotheses remain archived. The source Figure 9/10 conflict is unresolved and its plots do not validate this model.

## Native construction and provenance

- 26 refracting surfaces plus a distinct stop; source d15 precedes STOP, followed by 1.68 mm to S16.
- 14 counted glass pieces / 11 components, plus one separate 0.13 mm resin medium.
- D-line indices; source named glass/secondary dispersion unavailable, no factory-glass identification.
- Only complete wide row marked published. Mid/tele retain literal optical rows but infer BF; their flags and every added cam control are false.
- Groups independently calculate −/+/−/+. A provisional draft's incorrect display group signs were corrected; it changed no optical numbers. Those raw draft/validation files remain in `validation/superseded_group_label_v001`.
- Source front-page barcode prints kindA. Final structured metadata includes it. `final_metadata_only_rebinding.json` proves this citation-only delta after numerical execution: every other JSON value is identical. Original input hashes and raw numerical receipts are preserved.

## Semi-diameter estimates

No numerical clear apertures are published. **The numeric seeds came from approximate E5 Figure 17 measurements**, recorded in `sources/inferred_rims_diagnostic.json` and `repro/build_native_diagnostics.py`, not from independent E3 or manufacturer measurements. They were transferred through the E6 hybrid diagnostic and then into E3, with geometry-driven reductions. Same-family topology is a rationale for an exploratory transfer, not proof of equal clear apertures: E5 is the rejected direct-glass exact-product association, not this hybrid prescription.

The primary manufacturer sketch supplies qualitative construction/envelope consistency only; it was not quantitatively measured to produce these rims. No precise photogrammetric uncertainty is established. Wrong E3 Figure 9 is explicitly excluded. `source_review/final_e3_rim_lineage_v002.json` preserves the exact per-element ancestry. These estimates are not source-certified E3 dimensions or production metrology. S1 front retains the transferred 26 mm estimate while its shared rear/hybrid rim is 24 mm.

| Modeled medium | Estimated rim, mm |
| -------------- | ----------------: |
| L1             |                24 |
| Resin          |                24 |
| L2             |              21.5 |
| L3             |                22 |
| L4             |              17.5 |
| L5             |              17.5 |
| L6             |              17.5 |
| L7             |              17.5 |
| L8             |              17.5 |
| L9             |              12.5 |
| L10            |              12.5 |
| L11            |              11.1 |
| L12            |              12.5 |
| L13            |              12.8 |
| L14            |                14 |

The preliminary L2 rim 22 mm violated the default gap-sag bound; 21.5 mm is retained. L13 was reduced from 12.9 to 12.8 mm to remain below the default bound. Original failures are retained. Shared resin rim 24 mm has positive thickness; larger trial rims produced negative resin edges in the separate E6 diagnostics. No source radius or center thickness is changed. There is **no gap-sag override** and no render trim.

## Cam density and stopping basis

The study preserves source d20 interpolation and solves d7/d15 at intermediate controls for interpolated actual native EFL and retained native plane residual. It is not a factory mechanical law. All native optical spacings remain exact. Across 1,025 scalar samples, added residual is 2.970 mm at 3 controls, 0.2333 mm at 9, 0.06093 mm at 17, 0.01558 mm at 33 and 0.003941 mm at 65. Native residual magnitude is at most 0.004091 mm. Existing runtime inconsistency limit is 10×2λN²≈0.0921 mm; this is reported separately from image quality, not used as sufficient proof of good interpolation.

17→33→65 reference-MTF sensitivities are retained. Reduced interpolation defocus can lower design-plane MTF when native spherical aberration has a different best axial plane. 65 is the bounded stopping density, not an optical optimization or new acceptance tolerance. No further density/radius search was performed.

## Actual bounded checks

- 383 final source/model binding checks passed; independently keyed source review separately has 248 comparisons.
- 257 zoom geometry states: zero trim; minimum glass/resin 0.13 mm and air 0.10 mm; max gap-sag 0.892593775; no image-plane inconsistency under existing limit.
- Repeated focus geometry is identical: this is an infinity-only model, not validated finite focus.
- 585 support checks: 65 reference-infinity supported; 130 spectral guards and 390 finite guards correctly unavailable.
- 72 exact chief checks across 9 zoom states and source-mapped/full 135-format fields pass. No area/full-pupil claim follows.
- 5,490 requested polar pupil points: 4,675 transmitted, 541 physical clips, 226 unlaunched, 48 noBracket. Nonuniform polar counts are not area-weighted transmission.
- All 48 postlaunch failures encounter only backward sphere intersections of S19 outside its 11.1 mm inferred rim (vertex-sheet radii 11.856–12.359 mm). They remain raw failures, not passes; positive declared common-rim geometry is a different statement.
- 220 of 226 final attempted unlaunched aims physically clip before iris; 6 still fail before it. This does not prove alternate aims impossible.
- Projection coordinate contract verified to 7.11e−15 mm; maximum successful intersection residual 9.85e−13 mm.
- 23 reference-MTF cases / 92 fields: 90 converged at 128-grid; 2 needed supported 256 refinement, after which 92 converged. Native tele f/8 edge S40≈0.0675 is retained as weak, not a quality pass. No source-plot or spectral performance claim.

## Unrun and blocked gates

Whole-project typecheck, format-check, lint, main corpus, tooling and build are **NOT_RUN for this final candidate** under the standing resource-execution restriction. Prior other-lens passes/waivers do not transfer. Actual viewer QA is **NOT_RUN**; no public preview update or production operation occurred. The private checkpoint and final-authoring independent review are coordinated externally; their status must not be inferred from this local file. (Closed 2026-10-29: the independent review passed, the rendered page was viewed in the wording pass below, and repository-wide checks belong to the batch integration.)

## Source/reproducibility evidence

The controlling source is the original US PDF, which includes its certificate. Manufacturer recovered rawHTML and current primary text have distinct provenance. JP evidence is indexed text only, not inspected original pixels.

Unchanged independent source manifests:

- `independent_coordinator_source_check/manifest.json`.
- `independent_alternative_source_review/FROZEN_MANIFEST.json`.

Rebuild only the package's data/scripts; the pinned runtime remains read-only. No node_modules are bundled. See REBUILD.md and final manifests for exact inputs, scripts and evidence hashes.

## 2026-10-29 — Deployment validation and wording pass

An independent check transcribed Table 3 / Example 3 of the local `US5568323.pdf` (column 9, PDF p. 20) and found the data file exact: 27 radius rows including the stop, 23 fixed thicknesses, three variable gaps at three positions, 15 nd/νd pairs, and K with A4–A10 on S3. This pass re-read the same page and confirmed the rows. The certificate of correction dated 21 December 1999 (PDF p. 23) changes Table 3's K from −0.1000 to −0.1000E01; the file uses −1.0, and formula (2) is negative only with −1.0.

At wide / middle / tele the patent prints f = 29.00 / 50.00 / 68.00 mm, F/2.8 and ω = 37.8 / 23.1 / 17.3°; the model gives EFL 29.000701 / 50.001890 / 67.995339 mm, and the Table 7 conditions (3)–(8) match. The patent prints fB = 39.87 mm at all three positions. That is a printing error rather than a model choice: column 7 and claim 9 fix the third group with the diaphragm during zooming, and all six tables repeat a near-constant fB. With G3 and the stop fixed, the stop stays 80.19 mm from the image (80.19 / 29.00 = 2.765, Table 7 prints 2.76), so the model BF is 39.87 / 47.54 / 53.55 mm. The Gaussian BFD is 39.870129 / 47.544091 / 53.548695 mm, leaving offsets of +0.000129 / +0.004091 / −0.001305 mm. Linear interpolation of the three rows alone would add up to 2.970177 mm of defocus between them; the 65-position path adds at most 0.003941 mm. A paraxial check of Example 6 gives a wide EFL of 24.100 mm with the printed R22 = −22.946 mm and 28.999 mm with −26.946 mm. Example 5's text describes a glass asphere without resin, against the maker's hybrid wording.

Pentax lists 14 elements in 11 groups, a large-aperture hybrid aspherical element, anomalous low-dispersion and high-index low-dispersion glass, 75–34.5°, 0.43 m, F22 and a 67 mm filter. Example 3 has 14 elements in 11 groups with a resin asphere on the rear of L1 and 2ω = 75.6–34.6°. The independent check compared the maker's construction diagram (`https://www.ricoh-imaging.co.jp/japan/products/filmcamera/lens/image/construct/sz-faz28-70f28.jpg`) with this layout; it was not measured and sets no rim. Figures 9 and 10 show another lens (three groups, r1–r20, W = 31.1°), so the semi-diameters stay carried over from Example 5's Figure 17. The rims are unchanged. A full f/2.8 axial beam at tele (entrance radius 12.14 mm) clips slightly at S11, S14, S16, S19 and S20, most at S20 (11.99 mm needed against the 11.1 mm rim); the 3.00 mm S18–S19 air space limits L11's rim.

Data changes are limited to the header comment, subtitle, the five catalog specification lines (formerly seven process lines), element labels (Glass N to Element N; the resin is "Element 1 resin layer"), the zoom station labels (now "Wide" and "Tele" only, replacing 62 interpolation labels and two middle/tele row labels), the G3 group text and the focus description. The coordinator's key, name, glass strings and APD tags are kept. The analysis now states the qualified production correlation, explains the fB printing error from the patent's own text, replaces the inaccurate "four nonlinear-moving units" with the maker's four-group nonlinear-movement wording and the patent's fixed G3, adds the measured group movements, names the catalog equivalents, drops the claim that colour analysis is unavailable, and replaces process counts and status lines with plain model limitations. In this file, the BUILT_AWAITING_VALIDATION_EXECUTION token and the source and manifest hashes are removed, and stale pending lines are marked closed.

Built summary and all 130 probe lines (65 zoom positions × two focus keyframes) are identical before and after: EFL 29.000701219314394 mm, FOPEN 2.7999999999999994, half-field 38.357855609939016°, stop radius 10.454890503804634 mm, BFD 39.8701 / 47.5441 / 53.5487 mm at the three printed positions. The surface audit reports “OK — no validation errors”. The rendered lens page reads cleanly.

Open: production identity beyond the qualified correlation, the factory zoom cam, the focusing method and travel, production melts and suppliers, and the cause of the small paraxial offsets remain unknown. The resin layer keeps an `Unmatched` glass label. The tele MTF figure in the analysis (edge sagittal 0.0675 at 40 lp/mm, f/8) is carried from the original package and was not re-run in this pass. lens-db dates the announcement to March 1993, before the November 1993 Japanese priority; that date is unconfirmed and not used. The maker's table pairs a 67 mm filter with hood PH-RBC77; not resolved.
