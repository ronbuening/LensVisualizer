# Agfa Color-Solagon 55 mm f/2: qualified patent-example reconstruction

DRAFT pending final independent review and backup. Not deployed or factory-validated.

US2784646 Example1 is modeled literally at55 times normalized scale. Explicit d-line587.6nm indices and Abbe values are retained without catalog substitution. Six elements/four components. The secondary historian associates the numerically identical reproduced DE1063824 table with Color-Solagon55/2; the original maker sales brochure confirms55/2 and six elements. This is a qualified named-family bridge, not proof of the retail numerical prescription, exact scale or complete German patent-family metadata. Existing50/2 uses a different patent. Bounded historical searches found no prior55 delivery, not exhaustive historical novelty.

EFL54.9985181967mm, calculated BFL39.8881649722mm, f/2. No optical fitting. Source supplies no cap dimensions or stop split. Body-common caps20/12.5/11.5/14.5mm were selected on a0.5mm geometry grid before ray tests at default90% limits. The initial vertex-midpoint iris failed full-cap clearance and is preserved. The alternative iris is the midpoint of the feasible full-cap interval,8.376374101204mm afterS5, leaving4.803825898796mm beforeS6. Independent clearance0.660540553mm each side does not establish manufactured shutter/mounting clearance.

## Performance limitations
At the unchanged calculated image plane,812 equal-area aimed stop-lattice samples give:
- Axis:772 image-plane arrivals,40 physical clips,0 failures.4.9261% sampled axial clipping.
-12.5degrees:598 arrivals,160 clips,54 noBracket failures.
-25degrees:294 arrivals,376 clips,142 noBracket failures.36.2069% arrivals, not certified50-degree coverage.

Uniform stop-lattice survival is not an entrance-pupil or energy-throughput estimate; pupil mapping Jacobians are not integrated. NoBracket means failed intersection solving, not proven physical obstruction. Failed/blocked samples are retained, not removed as outliers. RMS radii of surviving arrivals are0.028630/0.030991/0.043562mm; these are not whole-pupil image quality or MTF. Sparse26-ray checks missed the dense axial clipping. No retuning, refocus, measured illumination, measured glass curves, full spectral validation, near-focus reconstruction or exact factory performance is claimed.

Native construction, isolated TypeScript, source parity and independent body/air/full-cap iris checks are scoped pre-integration checks. Current-main/full-corpus app/build/browser/rendering/MTF checks remain integration-side and unperformed here. Hidden infinity-only representative; no release/deployment.

## Reproduction
Run prepare.py, native.mjs, field.mjs and diagnostics.mjs against recovered LensVisualizer4caca439fdd7186caf6cf458b1c56e6e114b752b; sources and scripts are retained. Independent reviews separate failed midpoint from accepted geometry alternative. Source backup: https://drive.google.com/file/d/1EEgGxcxg2sDp4_VvPBCZgaW7Z1gr49Zf/view . Final data differs from pilot only in name/key; source optics unchanged.


## 2026-11-13 — Deployment validation

The independent agfa55 validator re-read the patent page images at 300 dpi: both Example 1 tables on PDF pp. 3–4, all ten radii, nine printed thicknesses/spaces, six d-line index/Abbe pairs, both cemented interfaces, the ×55 length conversion and the central-gap sum. Figure 4 was checked for six elements/four groups, the L2/L3 and L4/L5 doublets, radius signs and the central stop. There were no transcription mismatches; the patent expressly defines the 587.6 nm d line. This integration agent applied the assigned corrections and re-ran the optical checks below.

Verdict: the supplied inferred S3 rim clipped 40/812 axial samples; the corrected model clears the stated f/2 beam. The product association remains qualified: the [Agfa brochure](https://www.cameramanuals.org/agfa_ansco/agfa_agfaflex.pdf) confirms a 55 mm f/2 six-element Color-Solagon, and the [historian's reproduced DE1063824 table](https://www.zeissikonveb.de/start/objektive/normalobjektive/pancolar2.html) agrees numerically with US Example 1; neither proves the exact production prescription.

Changes:

- Type import: `../../LensVisualizer/src/types/lensDataV2.js` → `../../types/lensDataV2.js`; anonymous default object → `const LENS_DATA = { ... } satisfies LensDataV2Input;` followed by `export default LENS_DATA;`. Added one source JSDoc describing Example 1, ×55 normalized-length conversion to millimetres, inferred rims/stop and calculated unprinted back focus.
- `source.patentNumber`: `US 2784646` → `US 2,784,646`, matching this batch's old-US corpus form without a kind code. `source.example`: absent → `{ label: "Example 1", id: "1" }`. `source.assignees`: `["Agfa Camera-Werk"]` → `["Agfa Camera-Werk AG"]`, the corpus form of the printed Aktiengesellschaft.
- `catalog.imageFormat`: absent → `135-full-frame`. Mount metadata remains absent because no canonical Ambiflex mount exists.
- S3 `sd`: 12.5 → 12.9 mm, the smallest proposal from `audit:aperture --raise` at the file's rim precision. S4 `sd`: 12.5 → 12.9 mm so L2 has equal front/rear rims. S3 starts L2; S4 is L2's flat rear face and the cemented L2/L3 interface; L3 ends at S5, which stays 12.5 mm. The geometry check accepts this cemented-face arrangement. No other rim changed.
- Obvious numeric representation noise was shortened without changing source precision: S1 R 43.003949999999996 → 43.00395; S2 R 122.95909999999999 → 122.9591; S3 R 18.880399999999998 → 18.8804; S5 R 13.983200000000002 → 13.9832; stop gap 4.803825898795999 → 4.803825898796; S6 R −18.031200000000002 → −18.0312; S8 d 0.20955000000000001 → 0.20955; S9 R 333.54089999999997 → 333.5409; S10 R −43.271249999999995 → −43.27125.
- Analysis: the delivered rim choices, dense counts and RMS values are now identified as pre-correction results; added the corrected counts and the separate current aperture-miss classification. No naming, key, element-type, glass-label or general wording cleanup was performed.

First-order results after correction (`built.mjs` OK): EFL 54.99851819670641 mm, f/2 (`FOPEN = 2`), derived stop radius 9.632180754601764 mm, total track 75.56721497223845 mm and declared half-field 25°. EFL is −0.0027% from the normalized 55 mm target. The separate paraxial probe gives BFD 39.8881649722 mm and printed-length track 35.67905 mm; the stored back-focus gap remains 39.88816497223844 mm. No optical fitting or focus change was made.

Checks after correction:

- `audit:surface`: OK — no validation errors, including the revised cemented-face geometry.
- `audit:aperture`: one lens/one station OK, traced f/1.9999999979472862, limiter STO; zero rim, trace, iris or failed diagnoses. Re-running `--raise` proposes zero changes.
- `clearap.mjs --omega 25`: no CLIPS-AXIAL or blocked-chief flags; axial heights at S3/S4 are 12.74/12.34 mm against 12.9/12.9 mm rims. The lower edge-bundle ray is still not found and rear off-axis vignetting remains; this does not establish full-pupil edge clearance.
- `audit:image-circle`: one lens checked, zero undersized, zero skipped, with the authored file hidden and format explicit; the visible scratch copy gives the same result.
- `audit:field-coverage --below=1.01`: the authored hidden file skips. A scratch copy differing only by `visible: true` passes: one station, 100% coverage, modeled chief ray 21.7° → 21.65 mm of the 21.65 mm full-frame corner, corner clear; zero skipped. This is chief-ray coverage, not whole-pupil illumination.

The same 32×32 equal-area stop lattice contains 812 samples. Axis: 772 arrivals/40 clips/0 failures → 812/0/0. At 12.5°: 598 arrivals/160 clips/54 noBracket failures → 628/142/42. At 25°: 294 arrivals/376 clips/142 noBracket failures → 322/358/132, or 36.2069% → 39.6552% arrivals. The current aperture-miss classifier marks the remaining 25° results as 322 valid/490 blocked/0 unresolved, including the 132 raw noBracket results. These are sample fractions within inferred caps, not measured throughput or factory clear apertures.

Open: add a canonical Agfa Ambiflex mount before populating `catalog.lensMounts`; do not substitute Ambi-Silette, DKL or fixed-lens-camera. The later cleanup pass still covers names/keys, subtitle/specs style, element types, glass labels, focus wording and analysis voice. Rims remain inferred rather than factory measurements: Figure 4 supports the construction but does not establish exact clear apertures; retain that qualification and review rims against the figure in the cleanup pass. The file remains `visible: false`. Full application tests, typecheck, lint, build, generators, servers, commits and release were outside this assignment and were not run. No sandbox denial occurred.
