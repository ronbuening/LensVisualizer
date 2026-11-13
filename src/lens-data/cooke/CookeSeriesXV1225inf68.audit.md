# Qualified pre-integration audit
- Original GB376044 combined example only,8elements/4cemented doublets. No separate-member operational models or additional family counts.
- Inch units inferred from adjacent stated focal lengths, exact25.4conversion. Literal EFL12.344834707in vs12.25,+.774161% retained, no fitting. BFL11.3771374842in calculated, not printed.
- f6.8 source vs1921f4.5 quote and mismatched retail member focal lengths preserved. Maker family attribution only, no exact factory/serial/AnselAdams identity.
- Explicit nD/Abbe V. Rear blank values derived from repeated Chance identifiers; unnumbered glass remains unnumbered. Engine d approximation, no measured full curves or melt identity.
- Inferred midpoint centralgap iris and common-per-cemented-body caps30.5/30/26/22.5 selected by geometry before rays. Default.9 limits, no override or optical alteration. Independent full-cap geometry/iris review accompanies handoff.
- Native and strict isolated TypeScript pass; final optical data equals pilot except key/name. Supplied scripts reproduce scoped checks, not full application integration.
- Sparse source27.5°edge14OK12clipped/26, significant peripheral limitation. Not55°coverage, throughput, image-plane or MTF validation.
- Infinity/combined only. Current-corpus/app/lint/format/build/browser/MTF deferred, not passed. Hidden, unintegrated, undeployed. Count only after final independent closure and verified private archive.

Important: inferred stop has only0.02324mm rear full-cap clearance. This is a mathematical geometry pass, not validated mechanical/manufacturing tolerance or shutter fit.

## 2026-11-13 — Deployment validation

Codex independently re-read the patent page images at 300 dpi: p. 3's complete-lens table (12 radii, eight glass thicknesses, three airspaces and eight glass rows), the nominal complete/member focal lengths, f/6.8 and about 55° field, and p. 4's four-doublet drawing. The table agrees with the delivered prescription after uniform inch-to-millimetre conversion; the drawing makes L5/L6 smaller than L7/L8 and prints neither an iris nor clear diameters.

Verdict: valid with notes. The independent validator cites Cooke's Compendium Series XV entry explicitly identifying “British patent GB376044, 1932, Horace W. Lee,” together with 10×8 coverage and the Science Museum's 312 mm f/6.8 retail example; this supports a family association, not a proven factory prescription.

Changes:

- File form: the external `../LensVisualizer/src/types/lensDataV2.js` import → `../../types/lensDataV2.js`; direct default object → `const LENS_DATA = { ... } satisfies LensDataV2Input` and `export default LENS_DATA`. Added one JSDoc block identifying the sole complete-lens example, the uniform ×25.4 inch-to-millimetre conversion with no further scaling, inferred stop/rims/back focus, repeated-identifier glass values, sodium-D approximation and infinity-only focus sentinel.
- Surfaces 7/8/9, L5/L6 `sd`: 26 → 22 mm, following the drawing's approximately 21.9 mm rim estimate. The validator reports an axial requirement of 21.2 mm and rear iris clearance increasing from 0.02324 to 1.70 mm. All other rims are retained at 30.5/30/22.5 mm for their respective doublets.
- `source.patentNumber`: `GB 376044` → `GB 376,044 A`; `source.example`: absent → `{ "label": "Sole example", "id": null }`, identifying the complete-lens table.
- `catalog.focalLengthMm.design`: 311.15 → 313.56 mm, matching the computed model EFL. The marketing value remains 311.15 mm.
- `catalog.lensMounts`: absent → `["large-format-lens-board"]`; `catalog.imageFormat`: absent → `"8x10"`, using canonical identifiers.
- `focus.description`: `NO_INTERNAL_RECONSTRUCTION: combined infinity only; separate member operating modes not modeled` → `Only the complete lens at infinity is modeled; separate member operating modes are not modeled.`
- Rounded floating-point conversion noise only: surface 3 d 3.2003999999999997 → 3.2004; surface 4 R 79.90839999999999 → 79.9084 and d 12.877799999999999 → 12.8778; surface 7 R −62.230000000000004 → −62.23; surface 8 R 180.00979999999998 → 180.0098; surface 9 R −59.20739999999999 → −59.2074; surface 10 d 7.188199999999999 → 7.1882; surface 11 R −29.209999999999997 → −29.21 and d 3.0479999999999996 → 3.048. No prescription fitting or other numerical changes were made.
- Analysis, inferred-apertures paragraph: 30.5/30/26/22.5 → 30.5/30/22/22.5 mm and 0.02324 mm clearance → the validator's 1.70 mm after the rim correction; replaced the earlier grid-selection explanation with the drawing evidence and retained the mechanical-tolerance qualification.

First-order results after the changes (`built.mjs`): EFL 313.55880155878856 mm; f/6.8; inferred stop radius 20.260950616713245 mm; total track 358.0672920995148 mm; declared half-field 27.5°. The stored inferred back focus remains 288.9792920995148 mm.

Audit results:

- `audit:surface`: OK — no validation errors.
- `audit:aperture`: one lens/one station within 3% of the stated f-number; zero rim limits, trace limits, iris limits or failures. No rim raise is needed.
- `audit:image-circle`: one lens checked for 8x10, zero undersized surfaces, zero skipped; the format diagonal is 325.3 mm.
- `audit:field-coverage --below=1.01`: the delivered file is hidden and skips. An otherwise identical scratch copy with `visible: true` gives 100% modeled corner coverage: 27.4° reaches 162.65 mm of the 162.65 mm format semi-diagonal; the corner chief ray is clear, diagnosis `ok`, zero skipped/unsolved. The assigned file retains `visible: false`.
- The validator reports unchanged vignetting and 55.8% corner transmission limited by the front rim. That transmission is quoted from the independent report, not recomputed by the field-coverage check; chief-ray coverage does not establish full-pupil throughput or image quality.

Open: the later cleanup pass still needs to review the combined/representative name, key and filename, subtitle, element type labels, glass-label wording, glued prose, handoff wording and private Drive reference. The remaining inferred rims differ from the drawing estimates (30.5 vs 30.2, 30 vs 28.9 and 22.5 vs 22.8 mm); retain them for this assignment. Exact factory identity, physical shutter accommodation, measured spectral curves and separate-member modes remain unverified. No application tests, typecheck, lint, build, generated files, server or git state changes were run; the lens remains hidden.
