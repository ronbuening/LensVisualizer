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

Mount item closed: the canonical `agfa-ambiflex` ID (Agfa Ambiflex / Agfaflex) now exists and `catalog.lensMounts` is `["agfa-ambiflex"]`; no Ambi-Silette, DKL or fixed-lens-camera substitution was made. The later cleanup pass covered subtitle/specs style, element types, glass labels, focus wording and analysis voice; the coordinator had already settled names/keys. Rims remain inferred rather than factory measurements: Figure 4 supports the construction but does not establish exact clear apertures; the cleanup pass retains that limitation. The historical `visible: false` status is closed; the coordinator has since set `visible: true`. Full application tests, typecheck, lint, build, generators, servers, commits and release were outside this assignment and were not run. No sandbox denial occurred.

## 2026-11-14 — Cleanup and wording pass

Added the subtitle “US 2,784,646, Example 1 — Color-Solagon 55mm f/2 of the Agfa Ambiflex, scaled ×55” and specs “6 ELEMENTS / 4 GROUPS”, “ALL SPHERICAL”, “F/2”. Replaced the focus process marker with “Infinity focus only; the patent gives no close-focus spacings or focus travel.” The infinity placeholder remains 1e15; no numeric focus, aperture, stop, surface, rim or glass-index value changed. The existing source header already states the scaling, inferred rims, stop split and calculated back focus in plain terms and was retained.

Replaced generic element types with the shapes established by the radius signs: L1 Positive Meniscus; L2/L5 Plano-Convex Positive; L3/L4 Plano-Concave Negative; L6 Biconvex Positive. Added specific roles. Both L2/L3 members now carry `cemented: "C1"`; both L4/L5 members carry `cemented: "C2"`. Matching doublet brackets span S3–S5 and S6–S8. There is no resin layer or extra element. No mechanical group or APD claim was added.

Every glass label changed from “Literal source d-line and Abbe values; no factory glass or measured curve” to “Unmatched (nd … / νd …)”: L1/L6 1.72253/37.8; L2 1.66972/47.4; L3 1.65456/33.9; L4 1.69915/30.1; L5 1.69086/54.7. Δnd = 0 and Δνd = 0 for every relabel; catalog-match deltas are inapplicable because no catalog row was assigned. An exhaustive local Schott-row check found no match within |Δnd| ≤ 0.0001 and |Δνd| ≤ 0.15. The nearest N-BAF10 row differs by +0.00031/−0.29 for L2; N-LAK9 differs by +0.00014/+0.01 for L5. Legacy-name trials can resolve to other vendors and do not establish a Schott match. `trylabel.mjs` confirms the five distinct Unmatched labels remain unresolved. No catalog-copied spectral indices were present; no APD tags are supported by published special-glass positions.

The analysis retains Brendel and Lautenbacher, the DE 1,063,824/product association and Agfa brochure citations, the single scaling explanation, inferred stop split, S3/S4 correction and first-order values. Removed process history, stale draft/hidden status, sample grids/counts, solver diagnostics, test/build inventories and unsupported performance implications. Renamed the scope heading and kept the source/product-identity, off-axis-vignetting, spectral and infinity-only limitations. Earlier audit history and the dated Deployment validation section remain; stale pending/hidden claims are closed in place and private-link/hash clutter is removed. No additional catalog metadata was added.

Before → after: EFL 54.99851819670641 → 54.99851819670641 mm; FOPEN 2 → 2; half-field 25 → 25°; stop radius 9.632180754601764 → 9.632180754601764 mm; BFD 39.8881649722 → 39.8881649722 mm; stored last gap 39.88816497223844 → 39.88816497223844 mm; total track 75.56721497223845 → 75.56721497223845 mm. Both probe focus endpoints remain identical, at infinity.

Checks: `audit:surface` reports OK with no validation errors. `audit:aperture` reports one lens/one station within 3% of the stated f-number, with zero rim, trace, iris or failed diagnoses. `audit:field-coverage --all` reports one station at ≥99% chief-ray coverage, zero unsolved and zero skipped; this does not establish whole-pupil illumination. Formatting was left unchanged as required by the addendum. The prescribed screenshot helper exited without creating an image and printed macOS power-notification/DNS-watch errors; rendered-page review could not be completed. No explicit sandbox or approval refusal occurred.

Mount item closed: `catalog.lensMounts` is now `["agfa-ambiflex"]`, using the canonical Agfa Ambiflex / Agfaflex mount. Open: a maker-supported minimum focus distance remains unavailable; the reported 1 m owner measurement is insufficient for definitive catalog metadata. Historical glass identities and exact production prescription/scale remain unconfirmed. Rims and stop station remain inferred, and back focus remains calculated: Figure 4 and the reproduced German diagram confirm construction and plane cemented interfaces, not factory clear apertures or exact stop placement. The requested rim and off-axis review is completed in the semi-diameter section below; the single lower marginal-ray solve remains a stated limitation, with sampled failures classified separately. Rendered-page review remains open because no screenshot was produced; the later rim pass supplies a model sketch instead.

## 2026-11-14 — Semi-diameter pass against the patent figure

Source: local `patents/US2784646.pdf`, PDF page 2, Figure 4, measured at the scan's native 300 dpi (2320 × 3408 pixels). PDF page 3 calls Figure 4 a diagrammatic section for f = 100 mm; it supports Example 1's six-element/four-component form rather than a separately identified exact-scale drawing of that table. The Example 1 lengths in the data remain scaled ×55 from f = 1. The supplied `DE1063824-Solagon.jpg` is a sibling-patent reproduction, not an independent manufacturer construction drawing. It confirms the same proportions, two plane cemented interfaces, L2/L3 and L4/L5 pairing, and absence of aspheric surfaces. Its added historical glass names are not proof of factory glass or marketed special-glass positions.

### Scale and rim evidence

Native pixel readings are approximate to 3–4 pixels at the thick strokes. S1–S10 span about 770 pixels for 35.67905 mm, or 21.58 px/mm. Independently, S5–S6 span about 280 pixels for 13.1802 mm, or 21.24 px/mm. Curvature estimates from the front S1 arc and inner S5 arc are also around 22 and 21 px/mm. Despite that gross agreement, a single fit does not reproduce individual thicknesses: L4 is about 70 pixels versus 106.7 predicted, and L5 about 100 versus 71.1 predicted, discrepancies of −34% and +41%. The drawing is therefore used only for relative rim heights and edge shape, not absolute clear apertures or a stop station.

Both the US and German drawings end S5 below the front doublet's plane cemented rim and S6 below the rear doublet's plane cemented rim. S5's endpoint-to-body height ratio is about 210/280 = 0.75 (one-pixel ratio uncertainty about ±0.006); S6's is about 195/248 = 0.79 (about ±0.007). Stroke width adds uncertainty beyond those pixel-only ranges. Applied within each component, these suggest about 9.7 and 9.1 mm, respectively. The larger axial f/2 floors govern the final caps instead. These are sloping connecting edges, without a distinct vertical land; no `rimExtensionSd` or `rimCutDepthMm` is warranted.

| Surfaces | Before (mm) | After (mm) | Evidence and disposition |
| --- | ---: | ---: | --- |
| S1/S2 | 20/20 | 20/20 | Reference outer singlet; both drawings show the largest component with essentially equal face heights. No absolute reduction follows from a schematic fit. |
| S3/S4 | 12.9/12.9 | 12.9/12.9 | Keep square L2 and the established axial floor. The schematic body is about 0.71 of the front singlet, which would imply about 14.2 mm if anchored at 20 mm; that is impossible for the table's S3/flat-S4 pair, whose faces cross at 13.6864 mm. Do not alter the prescription to fit it. |
| S5 | 12.5 | 10.2 | Inner concave face ends below S4 in both drawings. The direct proportional estimate is below the stated axial beam; 10.1 mm still triggers an aperture-raise proposal, while 10.2 mm clears it. |
| S6 | 11.5 | 9.4 | Inner concave face ends below S7 in both drawings. Keep the smallest tenth-mm cap above the stated axial beam, rather than the smaller proportional estimate. |
| S7/S8 | 11.5/11.5 | 11.5/11.5 | Keep the square outer rear-doublet edge. Its roughly 0.62–0.64 front-singlet height is within schematic uncertainty of the existing proportions; no ray floor requires a raise. |
| S9/S10 | 14.5/14.5 | 14.5/14.5 | Rear singlet is about 0.73–0.74 of the front singlet; the model's 0.725 ratio agrees. |

### Aperture, field and corner light

The complete trial set passed the surface probe before editing, with no axial/chief flags in the real-ray clearance probe. The final authored file passes `audit:surface` with no errors; `audit:aperture` reports traced f/1.9999999979472862, limiter STO, and zero diagnoses. Its separate raise proposal contains zero surfaces. The real-meridional f/2 axial heights at S5/S6 are approximately 10.06/9.31 mm, below 10.2/9.4 mm. The aperture audit's engine trace supplies the stricter S5 floor. S3/S4 remain 12.9 mm and no spherical cap exceeds its radius of curvature.

Before → after engine results are unchanged: EFL 54.99851819670641 mm, f/2, declared half-field 25°, tracing half-field 31.992707583907936°, stop radius 9.632180754601764 mm and total track 75.56721497223845 mm. The image-circle audit checks one lens with zero undersized surfaces. The field-coverage audit reports one station at 100%, chief ray 21.7° → 21.65 mm, no blocked corner and zero skips. Only the printed infinity state exists.

`rimcost.mjs` against `.lens-work/base1125sd/AgfaColorSolagon55mmf2.data.ts`, with `--loo`, measures full-frame corner transmission 51.7% → 51.7%. The worst loss over its nine common-angle samples is 1.0 percentage point at 2.7°, within the 3-point budget. Restoring S5 alone wins back 0.0 points; restoring S6 wins back 1.0 point. The curves, at 0/2.7/5.4/8.1/10.9/13.6/16.3/19.0/21.7°, are 100.0/97.8/93.7/88.4/82.2/75.2/67.8/60.0/51.7% before and 100.0/96.8/92.8/87.9/81.9/75.1/67.8/60.0/51.7% after. These are geometric model fractions, not measured illumination.

An independent 812-sample aimed stop-lattice census is unchanged before/after: 812 arrivals on axis, 628 at 12.5°, 420 at 21.7° and 322 at 25°. At 25°, the remaining samples are 358 direct clips and 132 raw noBracket failures, classified by the engine as 490 blocked and zero unresolved. The reductions mostly move the first clipping surface from S7 to S6 for rays already rejected downstream. Both clearance-helper root variants still print `LOWER no-ray-found` at the corner and 25°; no complete lower marginal ray is claimed. Heavy field loss is retained rather than erased by widening rims, and the sampled classification does not prove factory full-pupil clearance.

### Rendered proportions and remaining scope

Viewed the queued model-sketch render and the patent at matched overall axial scale. The final sketch has the drawn inward step at both inner concave faces; equal-height outer/cemented rims remain. A side-by-side with black final outlines, blue starting outlines and the source crop is retained at `/private/tmp/claude-501/-Users-ronbuening--claude-spares-spare-4b6LS6/fcefa615-105e-4bd7-925a-ed68ad81cb71/scratchpad/sd/agfa55/overlay.png`. No live browser check is available in this assignment; the coordinator checks the app afterwards.

The iris station and radius were not changed. Current full-cap axial clearances to the inferred stop plane are 3.958208458 mm from S5 and 2.159769020 mm from S6; the previous equal-clearance/midpoint description no longer describes these shorter caps and is replaced in the analysis. No stop move is recommended without source evidence; the schematic tick is insufficient. No `gapSagFrac` change is needed.

PDF page 3 identifies Theodor Brendel and Hans Lautenbacher, assignors to Agfa Camera-Werk Aktiengesellschaft, Munich; US 2,784,646, patented March 12, 1957, application October 21, 1953, German priority October 28, 1952. Existing AG abbreviation is consistent. The absent canonical Ambiflex mount and unconfirmed production prescription/minimum-focus metadata remain coordinator items; no name or metadata was edited. Only the three assigned files changed. No sandbox refusal occurred.

## 2026-11-14 — Glass labels, name and mount metadata

The data file already contains the following spectral-proxy labels. `glasscheck.mjs`, run from the main checkout against the assigned worktree file, resolves all six elements as compatible: six catalog proxies, zero mismatches and zero unmatched elements. Deltas below are evaluated catalog-row values minus the patent's printed nd/νd, rounded as reported by glasscheck; the stored patent values are unchanged.

| Element | Old label → current label | Resolved row | Δnd | Δνd |
| --- | --- | --- | ---: | ---: |
| L1 | Unmatched (nd 1.72253 / νd 37.8) → BASF8 (SUMITA spectral proxy for the patent's nd 1.72253 / νd 37.8; 1950s melt and supplier unconfirmed) | BASF8, Sumita legacy BaSF8 row | +0.00089 | +0.17 |
| L2 | Unmatched (nd 1.66972 / νd 47.4) → S-BAH10 (OHARA spectral proxy for the patent's nd 1.66972 / νd 47.4; 1950s melt and supplier unconfirmed) | S-BAH10, Ohara | +0.00031 | −0.17 |
| L3 | Unmatched (nd 1.65456 / νd 33.9) → SF9 (HIKARI spectral proxy for the patent's nd 1.65456 / νd 33.9; 1950s melt and supplier unconfirmed) | SF9, Hikari | −0.00010 | −0.04 |
| L4 | Unmatched (nd 1.69915 / νd 30.1) → SF15 (SUMITA spectral proxy for the patent's nd 1.69915 / νd 30.1; 1950s melt and supplier unconfirmed) | SF15, Sumita | −0.00020 | −0.05 |
| L5 | Unmatched (nd 1.69086 / νd 54.7) → N-LAK9 (SCHOTT spectral proxy for the patent's nd 1.69086 / νd 54.7; 1950s melt and supplier unconfirmed) | N-LAK9, Schott | +0.00014 | +0.01 |
| L6 | Unmatched (nd 1.72253 / νd 37.8) → BASF8 (SUMITA spectral proxy for the patent's nd 1.72253 / νd 37.8; 1950s melt and supplier unconfirmed) | BASF8, Sumita legacy BaSF8 row | +0.00089 | +0.17 |

All rows are inside the site's proxy tolerance of |Δnd| ≤ 0.003 and |Δνd| ≤ 0.25. None stays unmatched. `trylabel.mjs` independently confirms the five distinct row/vendor combinations. These catalog curves supply C/F/g dispersion estimates anchored at the printed patent index; they do not identify a historical supplier or production melt. Exact production glasses remain unconfirmed. The analysis now names the proxies element by element and replaces the obsolete all-Unmatched/strict-Schott-window explanation with this scope; no APD, optical, rim or stop value changed.

Mount item closed: the worktree's `src/utils/catalog/lensTaxonomy.ts` contains `agfa-ambiflex`, labeled Agfa Ambiflex / Agfaflex, and the data file already has `catalog.lensMounts: ["agfa-ambiflex"]`. The [retinarescue Ambiflex account](https://retinarescue.com/ambiflex.html), re-read for this update, identifies the US Agfaflex name, Prontor Reflex shutter system and top-model 55 mm f/2 Color-Solagon. The analysis now states that mount and cites the account; the earlier open mount items are closed in place. The existing name, AGFA COLOR-SOLAGON 55mm f/2, is unchanged, as are subtitle, specs and all other data fields. The semi-diameter section is retained unchanged.

Before editing, both required `built.mjs` and `probe.mjs` checks failed at canonical-input loading: the prescribed main-checkout engine does not recognize `catalog.lensMounts[0] = agfa-ambiflex`, although the assigned worktree taxonomy contains it. No engine numbers were produced, and no metadata workaround was applied. This is a checkout-taxonomy mismatch, not a sandbox refusal; prior optical results above remain historical rather than newly reproduced results.

After editing, both probes and `audit:surface` report the same unknown-canonical-mount error. The data-file SHA-256 is identical before and after (`25df718a4a96e6e6ad773f7dbc73df4a56a92610863ca1d84fece1d722755c5c`), and repeated glasscheck remains six compatible, zero mismatched, zero unmatched. Only the analysis and audit were edited. The prescribed screenshot helper printed macOS power-notification and DNS-watch errors and produced no image, so rendered-page review remains open. No sandbox refusal occurred. Engine-number comparison and a passing surface check remain open until the main-checkout tools use the updated taxonomy.
