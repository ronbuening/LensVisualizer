# Enna35 qualified pre-integration audit

One hidden historical representative; sourcef2.5 versus marketedf2.8. Not exact factory prescription, novelty proof, release or deployment.

Main numerical table retains11 radii, source spacings,6 mean-index/Abbe pairs and rear cemented interface. Uniform35× scale is representative. SourceV3 discrepancy53.5main/53.7claim is not corrected; main example retained. d-reference convention is assumed, not explicitly source-defined. Printed source BFL35.3325 retained despite literal paraxial35.327695235; no refocus or source fit.

Inferredfront19/rear9.5 caps use a2:1 schematic-height hypothesis and halfmm geometry-grid limit, not ray-success selection or measured clear apertures. Iris has no explicit source mark; l3midpoint is an engineering hypothesis. Explicit fullcap clearancepositive. Default.9geometry retained, no exception or invented spacer.

Qualified product bridge rests on primary Enna brochure ordered6/5 section plus original patent, not the inconsistent secondary patent citation alone. Standard/pre-set focus differences not conflated. No finitefocus reconstruction, no claim every retailversion uses these numbers. Existing35f3.5/35f1.9 excluded.

Final data differs from pilot only key/name. Final typednative, isolatedtsc and both sparse-field checks are rerun. Fieldcounts are optical-surface traversal, not image-plane or MTF. Peripheralclipping persists. Fullapp/currentcorpus/lint/format/build/browser/MTF deferred under agreed split. Final independent review accompanies package; no global pass claim.

## 2026-11-13 — Deployment validation

The independent lith35 validator checked the patent against the delivered prescription and returned VALID WITH NOTES. Codex independently re-read all three local patent page images: the sole figure's six elements/five groups and R10 cemented interface; inventor, assignee, filing, priority and grant dates; all 11 radii, 10 thicknesses/air gaps, six indices and six Abbe numbers in the sole example; f = 1, f/2.5, 65° field and s′ = 1.00950; and the example/claim discrepancy νIII = 53.5/53.7. The 35× transcription agrees, including the split l3 gap, and no prescription correction is needed.

Verdict: valid with the stated inferred stop and rims, and a strong qualified association with the marketed Lithagon 2,8/35. The validator's primary Enna brochure evidence is the six-element/five-group section, 64° field, f/2.8–22 range and Exakta/M42 listings, supported by the patent's f/2.8 correction statement and the historical DE 1,062,028 association; it does not establish an exact production prescription.

Changes made:

- File form: two line-comment headers and the incorrect `../LensVisualizer/src/types/lensDataV2.js` import → the first-line `../../types/lensDataV2.js` type import and one JSDoc block recording the sole example, 35× normalized-to-mm conversion, inferred stop/rims and printed rather than inferred back focus. Direct default object → `const LENS_DATA = { ... } satisfies LensDataV2Input;` followed by `export default LENS_DATA;`, as required for integration.
- `maker`: `Enna` → `Enna München`.
- `source.patentNumber`: `US 2983191` → `US 2,983,191 A`; missing `source.example` → `{ "label": "Sole example", "id": null }`.
- Missing `catalog.lensMounts` → `["exakta", "m42"]`; missing `catalog.imageFormat` → `"135-full-frame"`, using the canonical identifiers and the validator's product evidence.
- Missing `catalog.closeFocusM` → `{ "marketing": 0.46 }`, the standard-mount brochure's about 1½ feet rounded to metres. `focus.closeFocusM` remains the infinity-only sentinel; the marketing value does not reconstruct focus travel.
- `focus.description`: `NO_INTERNAL_RECONSTRUCTION: infinity source plane only` → `The patent gives only the infinity prescription, so no focus movement is modeled.`
- Obvious floating-point noise only: S1 d `1.4000000000000001` → `1.4`; S2 R `27.615000000000002` → `27.615`; S3 R `32.550000000000004` → `32.55`; S5 d `2.0300000000000002` → `2.03`. No optical fitting, rim change, index change or gap adjustment was made.
- Analysis close focus: approximately 14 inches standard → about 1½ feet (approximately 0.46 m) standard mount; the distinct 9-inch pre-set value remains.
- Analysis glass claims: all unmatched / d-reference assumption → five exact helium-d catalog index matches, PK2 (L1), LaF2 (L3), SF8 (L4), SF19 (L5), LaK9 (L6), establishing the d reference. L2 remains unmatched; supplier and melt remain unproven. The new header records the same correction. These findings supersede the original audit's d-reference-assumption statement; that historical text is retained above.
- This deployment-validation section is appended without changing any previous audit line. The lens remains hidden and its nominal f/2.5 is retained.

After the edits, `built.mjs` reports EFL 34.996580089734984 mm, f/2.5, a physical stop semi-diameter of 7.246861835680957 mm, half-field 32.5° and total track 72.08250000000001 mm. The printed final gap stays 35.3325 mm; the independent validator's paraxial back focus is 35.3277 mm.

Audit results:

- `audit:surface`: OK, no validation errors.
- `audit:aperture`: one lens / one station within 3% of the stated f-number; zero rim limits, trace limits, iris limits or failures.
- `audit:image-circle`: one lens checked, zero undersized surfaces and zero skipped, with the assigned full-frame format.
- `audit:field-coverage --below=1.01`: the assigned file is skipped because it is hidden. Repeating the check on a scratch copy with only `visible: true` reports 100% coverage, diagnosis `ok`, one lens / one station and zero skipped. The modeled half-field is 32.360013019136346°, reaching 21.64999934502625 mm of the 21.65 mm format corner (coverage 0.9999999697471709); the corner chief ray at 32.36001382171275° is clear, with no corner clips. This establishes chief-ray field coverage, not absence of peripheral pupil vignetting.

Open: the later cleanup pass still needs the requested production-style key/name/subtitle/specs, shape-based element type labels, catalog glass labels and remaining wording cleanup. In particular, the data object's glass strings still say d-reference assumption and must be reconciled with the corrected analysis. Retain the distinction between the f/2.5 example and marketed f/2.8 lens. Rims remain inferred at 19/9.5 mm; the validator estimates about 16 mm front and 8.5–8.9 mm rear from the figure and notes the modeled rims are 10–20% larger. No rim edits were assigned. Full application tests, type checking, linting, builds, generation and browser checks were outside this assignment and were not run.
