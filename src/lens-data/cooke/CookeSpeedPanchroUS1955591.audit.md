# Speed Panchro patent-design audit

The initial model was hidden (closed: now visible). It has six elements in four groups, distinct from the eight-element Ultra Speed Panchro; no factory 1-inch retail identity is established. The source's explicit 1-inch f/2, 35-degree field and 16 mm cinema application are retained with the exact 25.4 mm-per-inch conversion. EFL is 25.385179309 mm and calculated BFL is 17.231299691 mm, without fitting or a claim that the source prints BFL.

Ten radii, six thicknesses, three air gaps, six index/Abbe pairs and both cemented interfaces are preserved. Chance catalog identifiers follow the source; the fifth glass is an unnumbered new glass. The source explicitly defines Abbe V. Its sodium-D indices are stored with the existing helium-d reference, a wavelength approximation. No full melt curve or modern replacement is claimed.

The stop is unspecified. S2 = 0.22 inch is an air gap; the vertex-image midpoint condition does not specify stop location. The assumed iris divides this gap into 0.11/0.11 inch. Initial 9/5/7 mm rims were inferred from a geometry grid, rather than measured or fitted to rays; the deployment section below supersedes S3/S4. Default 0.9 geometry limits are retained. No spacer, override or source optics were altered.

The initial report claimed 26 successful axial samples and, at the source's 17.5-degree edge, 8 successful and 18 clipped samples. The deployment section below supersedes the axial claim. These were optical-surface traversals only, without image-plane, coverage, throughput or MTF conclusions. The source concerns 16 mm cinema. No finite-focus state is modeled.

The initial final data differed from its draft only in key/name and had isolated syntax and field checks. Full application, current-corpus, lint, format, build, browser and MTF checks were deferred at that stage. Cooke's retrospective family association is distinguished from the 1930 advertisement, which predates the 1931 priority. No exact retail 1-inch identity, exhaustive historical novelty, publication or deployment was established.

## 2026-11-13 — Deployment validation

The independent validator re-read the patent page images and checked ten radii, six thicknesses, three air gaps, six index/Abbe rows, the inch-to-millimetre conversion, the six-element/four-group drawing and both cemented interfaces. Codex independently re-read PDF pages 1–3 for the drawing, bibliographic details, sole 1-inch f/2 example, 35-degree field, 16 mm camera context and L1 glass No. 8894. The validator’s approximately 6.9 mm front-doublet rim supports the minimum S3/S4 raises below; no other rims were changed.

Verdict: valid with notes after correction. The validator cites [Cooke’s History of Panchro, Part 1](https://cookeoptics.com/news-and-events/the-history-of-panchro-part-1/) for the patent’s Speed Panchro family association, while the example’s 16 mm camera context and absence of an identified retail 1-inch match limit that association to the family.

Changes:

- File form: two line comments and the incorrect `../LensVisualizer/src/types/lensDataV2.js` import → the required `../../types/lensDataV2.js` first line, one source JSDoc block, `const LENS_DATA` with `satisfies LensDataV2Input`, and `export default LENS_DATA`. The header now records the sole example, 1x design scale, ×25.4 inch-to-millimetre conversion, family-only attribution, and inferred iris, rims and back focus.
- S3 semi-diameter: 5.0 → 6.0 mm; S4: 5.0 → 5.1 mm. These are the exact least raises returned by `audit:aperture --raise`, replacing the f/2.41 axial limitation with an iris-limited f/2 beam and staying within the validator’s approximately 6.9 mm figure rim.
- `name`: `Cooke Speed Panchro 1-inch f/2 (patent representative)` → `COOKE SPEED PANCHRO f/2 (US 1,955,591 Design)` to describe the supported patent design rather than a specific retail lens.
- `source.patentNumber`: `US 1955591` → `US 1,955,591 A`; `source.example`: absent → `{ "label": "Sole example", "id": null }`.
- `catalog.focalLengthMm.design`: 25.4 → 25.385 mm, matching the validator’s paraxial value. `imageFormat` stays `16mm-cinema`, no `lensMounts` are added, and `visible` stayed false at this stage (closed: now true).
- L1 glass number: 3894 → 8894 in both the data annotation and analysis, matching the patent table.
- `focus.description`: the earlier internal marker → `Only the infinity prescription is modeled; no finite-focus movement is reconstructed.`
- Floating-point artifacts only: R2 100.27919999999999 → 100.2792; D2 3.8099999999999996 → 3.81; R4 26.288999999999998 → 26.289; D4 1.1429999999999998 → 1.143; R8 −10.540999999999999 → −10.541; R9 35.559999999999995 → 35.56. No source prescription value was fitted.
- Analysis: the old 9/5/7 mm rim summary → the corrected S3/S4 values and their reason; the claim of 26 successful axial samples → the validator’s finding of axial clipping before correction. The old off-axis counts are no longer presented as current results and have not been repeated after correction. All earlier audit lines above are retained as the historical record; the new measurements supersede its axial-success claim.

First-order values after correction from `built.mjs`: EFL 25.385179309223233 mm; design f-number (`FOPEN`) 2; derived stop radius 4.156363225316541 mm; total track 37.2210996905702 mm; paraxial final image interval 17.2312996905702 mm. The reported Petzval sum is 0.0077580882750595236 per mm (the validator reports the normalized value as 0.197).

Audit results:

- `audit:surface`: OK, no validation errors.
- `audit:aperture`: one lens/one station within 3%; zero rim, trace, iris or failed diagnoses. Exact traced f-number 1.999999997922163, limiter STO, diagnosis OK: no rim limit.
- `audit:image-circle`: one lens checked, zero undersized, zero skipped for the retained 16 mm format.
- `audit:field-coverage --below=1.01`: the hidden original was skipped. An otherwise identical scratch copy with `visible: true` reached 100% of the 6.35 mm format semi-diagonal at a reported 14.2-degree half-field; corner clear, one OK station, zero skipped. The actual lens remained hidden at this stage (closed: now visible).

Open at this stage (wording and naming items closed by the cleanup section below): the later cleanup pass owned key/file naming, element type and glass labels, subtitle/specs style, historical-D wording, analysis voice and the old audit’s run-together wording. The retained inferred rims still differ from the figure: validator measurements are approximately 6.9 mm for the front singlet/front doublet, 4.4 mm at R5/R6, and 6.2 mm for the rear doublet/rear singlet. Reconciling those drawing rims and square rim shapes is outside this assignment. A specific retail lens identification and finite-focus data remain unsupported. Full application tests, typecheck, lint, build, generated metadata, browser checks and deployment were not run under the addendum’s restrictions.

## 2026-11-13 — Cleanup and wording pass

Re-read the supplied patent table and drawing renders and the validator/integration reports. The table's ten radii, six thicknesses, three air gaps, six nD/V rows and Chance identifiers agree with the retained data; both cemented interfaces remain intact. Cooke's [History of Panchro, Part 1](https://cookeoptics.com/news-and-events/the-history-of-panchro-part-1/) was re-read for its explicit association of US 1,955,591 A with Lee's Speed Panchro family. The analysis distinguishes the 1-inch 16 mm example from the 35 mm cinema line and does not identify it as a specific retail lens. No public production construction diagram is established; the manufacturer-hosted advertisement is not one.

Fields changed:

- Subtitle: absent → `US 1,955,591 A, sole example — Speed Panchro family design for 16 mm`.
- Catalog specs: absent → `6 ELEMENTS / 4 GROUPS`, `ALL SPHERICAL`, `f/2`. An initial top-level placement was rejected by V2 ingestion and corrected to `catalog.specs` before the successful audits below.
- Focus: the numerical placeholder is unchanged, `1000000000000000.0` → `1e15`; description → `Infinity focus only; the patent supplies no finite-focus spacings or focusing mechanism.` No production focusing method or marketing close-focus distance was invented.
- Element types: generic spherical-glass wording → Positive Meniscus, Positive Meniscus, Negative Meniscus, Biconcave Negative, Biconvex Positive, Biconvex Positive, in front-to-rear order. Added short roles; existing `Element N` labels remain.
- Cemented annotations: added `C1` to both L2/L3 and `C2` to both L4/L5, with matching `doublets` brackets over surfaces 3–5 and 6–8. No air gap or cement layer was inserted. No `apd` tags were added.
- Glass labels: each former `Source Chance Bros …` label with wavelength/process wording → the explicit Unmatched label below. `glassnear.mjs` found no exact catalog row at |Δnd| ≤ 0.0001 and |Δν| ≤ 0.15; `trylabel.mjs` and `glasscheck.mjs` confirm all six labels remain intentionally unresolved. No catalog-copied spectral values existed to remove. For every row, stored-value changes are Δnd = 0 and Δν = 0; catalog-match deltas are inapplicable because no row was assigned.

| Element | Old Chance identifier | New glass label |
|---|---|---|
| L1 | 8894 | Unmatched (Chance 8894, nD 1.6100 / V 53.3) |
| L2 | 3265 | Unmatched (Chance 3265, nD 1.6150 / V 56.1) |
| L3 | 4743 | Unmatched (Chance 4743, nD 1.6134 / V 36.9) |
| L4 | 337 | Unmatched (Chance 337, nD 1.6469 / V 33.7) |
| L5 | unnumbered new glass | Unmatched (Chance unnumbered new glass, nD 1.6437 / V 48.3) |
| L6 | 6665 | Unmatched (Chance 6665, nD 1.6234 / V 56.3) |

The header and analysis now use plain technical wording. The analysis retains the patent metadata, source citations, inch conversion and first-order numbers; removes package status, ray-count and TypeScript passages; replaces the old review heading with Model Scope and Field Limitation; and explains the sodium-D versus retained helium-d convention. Element and cemented-group powers were checked with the paraxial probe. Historical audit paragraphs were spaced and stale hidden/cleanup lines marked closed; the dated deployment section and its rim corrections remain recorded. Key, name, maker, visibility, source metadata, catalog focal lengths, format, aperture settings, index references and all optical geometry are unchanged. No mounts or other unsupported catalog metadata were added.

Before → after engine values are identical: EFL 25.385179309223233 → 25.385179309223233 mm; FOPEN 2 → 2; half-field 17.5 → 17.5°; stop radius 4.156363225316541 → 4.156363225316541 mm; BFD/final interval 17.2312996905702 → 17.2312996905702 mm; total track 37.2210996905702 → 37.2210996905702 mm. The complete `built.mjs` and `probe.mjs --elements` outputs compare identically, including the unchanged static focus keyframes.

Checks: `audit:surface` reports OK with no validation errors. `audit:aperture` checks one lens/one station within 3%, with zero rim, trace, iris or failed diagnoses. `audit:field-coverage --all` reports one station at ≥99% of the 16 mm corner, no unsolved stations and zero skipped. The screenshot helper exited without producing an image, so no rendered-page review is claimed. No explicit command or edit denial occurred. Prettier and broad application checks were omitted as required by the cleanup addendum.

Open:

- Rims and square edge profiles differ from the patent figure: current front-singlet 9 mm and front-doublet S3/S4 6.0/5.1 mm versus approximately 6.9 mm in the figure; current R5/R6 5 mm versus approximately 4.4 mm; current rear-doublet 5 mm and rear-singlet 7 mm versus approximately 6.2 mm. These remain unchanged for the separate rim review.
- The patent does not specify the physical iris location or clear apertures; the centered iris, derived radius and calculated BFD remain model assumptions/results. Peripheral illumination and image quality over the full 35° field are not established by the format-corner result.
- A specific retail 1-inch product, camera mount, focusing mechanism and marketing minimum-focus distance remain unsupported. No finite-focus state is available. The selectable f/22 endpoint lacks a retail source and remains unchanged.
- Printed sodium-D indices retain the existing helium-d reference by instruction; historical full dispersion and an exact catalog match remain unavailable for all six glasses.
- Visual page review remains incomplete because the screenshot helper produced no image; broader checks and deployment are outside this pass.
