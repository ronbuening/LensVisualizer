# Agfa Color-Solagon 55 mm f/2: patent-example reconstruction

Historical draft status — closed by the 2026-11-13 deployment validation and this cleanup pass. Factory prescription and production scale remain unconfirmed.

US 2,784,646 Example 1 is modeled at 55 times the normalized scale. Explicit d-line 587.6 nm indices and Abbe values are retained without catalog substitution. Six elements/four components. The secondary historian associates the numerically identical reproduced DE 1,063,824 table with Color-Solagon 55/2; the original maker sales brochure confirms 55/2 and six elements. This supports the product association without proving the retail numerical prescription, exact scale or complete German patent-family metadata. The existing 50/2 uses a different patent. Bounded historical searches found no prior 55 mm entry, without establishing exhaustive historical novelty.

EFL 54.9985181967 mm, calculated BFL 39.8881649722 mm, f/2. No optical fitting. The source supplies no rim dimensions or stop split. Body-common rims of 20/12.5/11.5/14.5 mm were selected on a 0.5 mm geometry grid before ray tests at default 90% limits. The initial vertex-midpoint iris failed full-aperture clearance and remains recorded here as a rejected choice. The alternative iris is the midpoint of the feasible full-aperture interval, 8.376374101204 mm after S5, leaving 4.803825898796 mm before S6. Independent clearance of 0.660540553 mm on each side does not establish manufactured shutter/mounting clearance.

## Performance limitations
Historical results before the S3/S4 correction: at the unchanged calculated image plane, 812 equal-area aimed stop-lattice samples gave:

- Axis: 772 image-plane arrivals, 40 physical clips, 0 failures; 4.9261% sampled axial clipping.
- 12.5°: 598 arrivals, 160 clips, 54 noBracket failures.
- 25°: 294 arrivals, 376 clips, 142 noBracket failures; 36.2069% arrivals, without establishing 50° full-field illumination.

Uniform stop-lattice survival is not an entrance-pupil or energy-throughput estimate; pupil mapping Jacobians are not integrated. NoBracket means failed intersection solving, not proven physical obstruction. Failed/blocked samples are retained, not removed as outliers. Historical RMS radii of surviving arrivals were 0.028630/0.030991/0.043562 mm; these are not whole-pupil image quality or MTF. Sparse 26-ray checks missed the dense axial clipping. No retuning, refocus, measured illumination, measured glass curves, full spectral validation, near-focus reconstruction or exact factory performance is claimed.

Historical checks covered prescription construction, isolated TypeScript, source parity and independent body/air/full-aperture iris clearance. Full-application, full-corpus, build, browser and MTF checks were outside that pass. The historical hidden status is closed: the coordinator has since set `visible: true`; the model remains infinity-only.

## Reproduction
The original preparation and diagnostic scripts were retained with their source evidence. Independent reviews distinguish the failed midpoint stop from the accepted geometry alternative. At that stage the final data differed from the pilot only in name/key; the later S3/S4 correction is documented below.


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

Open: add a canonical Agfa Ambiflex mount before populating `catalog.lensMounts`; do not substitute Ambi-Silette, DKL or fixed-lens-camera. The later cleanup pass covered subtitle/specs style, element types, glass labels, focus wording and analysis voice; the coordinator had already settled names/keys. Rims remain inferred rather than factory measurements: Figure 4 supports the construction but does not establish exact clear apertures; the cleanup pass retains that limitation. The historical `visible: false` status is closed; the coordinator has since set `visible: true`. Full application tests, typecheck, lint, build, generators, servers, commits and release were outside this assignment and were not run. No sandbox denial occurred.

## 2026-11-14 — Cleanup and wording pass

Added the subtitle “US 2,784,646, Example 1 — Color-Solagon 55mm f/2 of the Agfa Ambiflex, scaled ×55” and specs “6 ELEMENTS / 4 GROUPS”, “ALL SPHERICAL”, “F/2”. Replaced the focus process marker with “Infinity focus only; the patent gives no close-focus spacings or focus travel.” The infinity placeholder remains 1e15; no numeric focus, aperture, stop, surface, rim or glass-index value changed. The existing source header already states the scaling, inferred rims, stop split and calculated back focus in plain terms and was retained.

Replaced generic element types with the shapes established by the radius signs: L1 Positive Meniscus; L2/L5 Plano-Convex Positive; L3/L4 Plano-Concave Negative; L6 Biconvex Positive. Added specific roles. Both L2/L3 members now carry `cemented: "C1"`; both L4/L5 members carry `cemented: "C2"`. Matching doublet brackets span S3–S5 and S6–S8. There is no resin layer or extra element. No mechanical group or APD claim was added.

Every glass label changed from “Literal source d-line and Abbe values; no factory glass or measured curve” to “Unmatched (nd … / νd …)”: L1/L6 1.72253/37.8; L2 1.66972/47.4; L3 1.65456/33.9; L4 1.69915/30.1; L5 1.69086/54.7. Δnd = 0 and Δνd = 0 for every relabel; catalog-match deltas are inapplicable because no catalog row was assigned. An exhaustive local Schott-row check found no match within |Δnd| ≤ 0.0001 and |Δνd| ≤ 0.15. The nearest N-BAF10 row differs by +0.00031/−0.29 for L2; N-LAK9 differs by +0.00014/+0.01 for L5. Legacy-name trials can resolve to other vendors and do not establish a Schott match. `trylabel.mjs` confirms the five distinct Unmatched labels remain unresolved. No catalog-copied spectral indices were present; no APD tags are supported by published special-glass positions.

The analysis retains Brendel and Lautenbacher, the DE 1,063,824/product association and Agfa brochure citations, the single scaling explanation, inferred stop split, S3/S4 correction and first-order values. Removed process history, stale draft/hidden status, sample grids/counts, solver diagnostics, test/build inventories and unsupported performance implications. Renamed the scope heading and kept the source/product-identity, off-axis-vignetting, spectral and infinity-only limitations. Earlier audit history and the dated Deployment validation section remain; stale pending/hidden claims are closed in place and private-link/hash clutter is removed. No additional catalog metadata was added.

Before → after: EFL 54.99851819670641 → 54.99851819670641 mm; FOPEN 2 → 2; half-field 25 → 25°; stop radius 9.632180754601764 → 9.632180754601764 mm; BFD 39.8881649722 → 39.8881649722 mm; stored last gap 39.88816497223844 → 39.88816497223844 mm; total track 75.56721497223845 → 75.56721497223845 mm. Both probe focus endpoints remain identical, at infinity.

Checks: `audit:surface` reports OK with no validation errors. `audit:aperture` reports one lens/one station within 3% of the stated f-number, with zero rim, trace, iris or failed diagnoses. `audit:field-coverage --all` reports one station at ≥99% chief-ray coverage, zero unsolved and zero skipped; this does not establish whole-pupil illumination. Formatting was left unchanged as required by the addendum. The prescribed screenshot helper exited without creating an image and printed macOS power-notification/DNS-watch errors; rendered-page review could not be completed. No explicit sandbox or approval refusal occurred.

Open: a canonical Ambiflex mount ID is absent, so `catalog.lensMounts` remains unset. A maker-supported minimum focus distance remains unavailable; the reported 1 m owner measurement is insufficient for definitive catalog metadata. Historical glass identities and exact production prescription/scale remain unconfirmed. Rims and stop station remain inferred, and back focus remains calculated: Figure 4 and the reproduced German diagram confirm construction and plane cemented interfaces, not factory clear apertures or exact stop placement. S3/S4 remain 12.9 mm with S5 12.5 mm; off-axis vignetting and the previously unresolved lower edge-bundle clearance warrant a separate rim review without changing this pass's geometry. Rendered-page review remains open because no screenshot was produced.
