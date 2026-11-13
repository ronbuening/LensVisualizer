# Speed Panchro qualified pre-integration audit

One hidden six-element/four-group patent representative, not eight-elementUltraSpeed or factory1inch retailidentity. Source explicit1inchf2/35degree/16mmcinema retained with exact25.4mm-inch conversion. EFL25.385179309 and calculatedBFL17.231299691, no fitting or sourceBFLclaim.

TenR, sixthicknesses, threeairgaps, sixindex/Abbe pairs and bothcementedinterfaces preserved. Chancecatalog identifiers literal; fifthglass unnumberednewglass, no numberinvented. AbbeV sourceexplicit, historicalD/engine dapproximation disclosed. No fullmeltcurve or modernreplacement claim.

Stopunspecified. .22inch S2 is airgap, not iris; verteximagesmidpointclaim notstoplocation. Midpoint.11/.11inch is reconstructionhypothesis. Caps9/5/7 geometry-grid inference, not measured or rayfit; default.9limits retained. No spacer/override/sourceoptics alteration.

Sparse axis26OK but source17.5degreeedge8OK18clipped. Optical-surface traversal only, notimageplane, sourcecoverage, fullpupil,throughput orMTF. 16mmcinema scope notfullframe. No finitefocus reconstruction.

Finaldata key/name only differs frompilot; finalnative/isolatedstricttsc/fieldrerun. Independentfinalreview governsqualifiedscope. Fullapp/currentcorpus/lint/format/build/browser/MTF deferred. Primaryretrospectivebridge distinguished from1930advertisementpredating1931priority. No exactretail1inch/no exhaustivehistoricalnovelty/no publication or deploy.

## 2026-11-13 — Deployment validation

The independent validator re-read the patent page images and checked ten radii, six thicknesses, three air gaps, six index/Abbe rows, the inch-to-millimetre conversion, the six-element/four-group drawing and both cemented interfaces. Codex independently re-read PDF pages 1–3 for the drawing, bibliographic details, sole 1-inch f/2 example, 35-degree field, 16 mm camera context and L1 glass No. 8894. The validator’s approximately 6.9 mm front-doublet rim supports the minimum S3/S4 raises below; no other rims were changed.

Verdict: valid with notes after correction. The validator cites [Cooke’s History of Panchro, Part 1](https://cookeoptics.com/news-and-events/the-history-of-panchro-part-1/) for the patent’s Speed Panchro family association, while the example’s 16 mm camera context and absence of an identified retail 1-inch match limit that association to the family.

Changes:

- File form: two line comments and the incorrect `../LensVisualizer/src/types/lensDataV2.js` import → the required `../../types/lensDataV2.js` first line, one source JSDoc block, `const LENS_DATA` with `satisfies LensDataV2Input`, and `export default LENS_DATA`. The header now records the sole example, 1x design scale, ×25.4 inch-to-millimetre conversion, family-only attribution, and inferred iris, rims and back focus.
- S3 semi-diameter: 5.0 → 6.0 mm; S4: 5.0 → 5.1 mm. These are the exact least raises returned by `audit:aperture --raise`, replacing the f/2.41 axial limitation with an iris-limited f/2 beam and staying within the validator’s approximately 6.9 mm figure rim.
- `name`: `Cooke Speed Panchro 1-inch f/2 (patent representative)` → `COOKE SPEED PANCHRO f/2 (US 1,955,591 Design)` to describe the supported patent design rather than a specific retail lens.
- `source.patentNumber`: `US 1955591` → `US 1,955,591 A`; `source.example`: absent → `{ "label": "Sole example", "id": null }`.
- `catalog.focalLengthMm.design`: 25.4 → 25.385 mm, matching the validator’s paraxial value. `imageFormat` stays `16mm-cinema`, no `lensMounts` are added, and `visible` stays false.
- L1 glass number: 3894 → 8894 in both the data annotation and analysis, matching the patent table.
- `focus.description`: `NO_INTERNAL_RECONSTRUCTION: infinity 16mm-cinema representative only` → `Only the infinity prescription is modeled; no finite-focus movement is reconstructed.`
- Floating-point artifacts only: R2 100.27919999999999 → 100.2792; D2 3.8099999999999996 → 3.81; R4 26.288999999999998 → 26.289; D4 1.1429999999999998 → 1.143; R8 −10.540999999999999 → −10.541; R9 35.559999999999995 → 35.56. No source prescription value was fitted.
- Analysis: the old 9/5/7 mm rim summary → the corrected S3/S4 values and their reason; the claim of 26 successful axial samples → the validator’s finding of axial clipping before correction. The old off-axis counts are no longer presented as current results and have not been repeated after correction. All earlier audit lines above are retained as the historical record; the new measurements supersede its axial-success claim.

First-order values after correction from `built.mjs`: EFL 25.385179309223233 mm; design f-number (`FOPEN`) 2; derived stop radius 4.156363225316541 mm; total track 37.2210996905702 mm; paraxial final image interval 17.2312996905702 mm. The reported Petzval sum is 0.0077580882750595236 per mm (the validator reports the normalized value as 0.197).

Audit results:

- `audit:surface`: OK, no validation errors.
- `audit:aperture`: one lens/one station within 3%; zero rim, trace, iris or failed diagnoses. Exact traced f-number 1.999999997922163, limiter STO, diagnosis OK: no rim limit.
- `audit:image-circle`: one lens checked, zero undersized, zero skipped for the retained 16 mm format.
- `audit:field-coverage --below=1.01`: the hidden original was skipped. An otherwise identical scratch copy with `visible: true` reached 100% of the 6.35 mm format semi-diagonal at a reported 14.2-degree half-field; corner clear, one OK station, zero skipped. The actual lens remains hidden.

Open: the later cleanup pass still owns the representative key/file naming, element type and glass labels, subtitle/specs style, historical-D wording, analysis voice and the old audit’s run-together wording. The retained inferred rims still differ from the figure: validator measurements are approximately 6.9 mm for the front singlet/front doublet, 4.4 mm at R5/R6, and 6.2 mm for the rear doublet/rear singlet. Reconciling those drawing rims and square rim shapes is outside this assignment. A specific retail lens identification and finite-focus data remain unsupported. Full application tests, typecheck, lint, build, generated metadata, browser checks and deployment were not run under the addendum’s restrictions.
