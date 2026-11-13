# Qualified pre-integration audit
- Original GB376044 combined example only,8elements/4cemented doublets. No separate-member operational models or additional family counts.
- Inch units inferred from adjacent stated focal lengths, exact25.4conversion. Literal EFL12.344834707in vs12.25,+.774161% retained, no fitting. BFL11.3771374842in calculated, not printed.
- f6.8 source vs1921f4.5 quote and mismatched retail member focal lengths preserved. Maker family attribution only, no exact factory/serial/AnselAdams identity.
- Explicit nD/Abbe V. Rear blank values derived from repeated Chance identifiers; unnumbered glass remains unnumbered. Engine d approximation, no measured full curves or melt identity.
- Inferred midpoint centralgap iris and common-per-cemented-body caps30.5/30/26/22.5 selected by geometry before rays. Default.9 limits, no override or optical alteration. Independent full-cap geometry/iris review accompanies handoff.
- Native and strict isolated TypeScript pass; final optical data equals pilot except key/name. Supplied scripts reproduce scoped checks, not full application integration.
- Sparse source27.5°edge14OK12clipped/26, significant peripheral limitation. Not55°coverage, throughput, image-plane or MTF validation.
- Infinity/combined only. Current-corpus/app/lint/format/build/browser/MTF deferred, not passed. Initially hidden, unintegrated, undeployed; the hidden status is closed by the coordinator's later visibility update. Count only after final independent closure and verified private archive.

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
- `focus.description`: earlier internal marker and combined-infinity restriction → `Only the complete lens at infinity is modeled; separate member operating modes are not modeled.`
- Rounded floating-point conversion noise only: surface 3 d 3.2003999999999997 → 3.2004; surface 4 R 79.90839999999999 → 79.9084 and d 12.877799999999999 → 12.8778; surface 7 R −62.230000000000004 → −62.23; surface 8 R 180.00979999999998 → 180.0098; surface 9 R −59.20739999999999 → −59.2074; surface 10 d 7.188199999999999 → 7.1882; surface 11 R −29.209999999999997 → −29.21 and d 3.0479999999999996 → 3.048. No prescription fitting or other numerical changes were made.
- Analysis, inferred-apertures paragraph: 30.5/30/26/22.5 → 30.5/30/22/22.5 mm and 0.02324 mm clearance → the validator's 1.70 mm after the rim correction; replaced the earlier grid-selection explanation with the drawing evidence and retained the mechanical-tolerance qualification.

First-order results after the changes (`built.mjs`): EFL 313.55880155878856 mm; f/6.8; inferred stop radius 20.260950616713245 mm; total track 358.0672920995148 mm; declared half-field 27.5°. The stored inferred back focus remains 288.9792920995148 mm.

Audit results:

- `audit:surface`: OK — no validation errors.
- `audit:aperture`: one lens/one station within 3% of the stated f-number; zero rim limits, trace limits, iris limits or failures. No rim raise is needed.
- `audit:image-circle`: one lens checked for 8x10, zero undersized surfaces, zero skipped; the format diagonal is 325.3 mm.
- `audit:field-coverage --below=1.01`: the then-hidden file skipped. An otherwise identical visible scratch copy gave 100% modeled corner coverage: 27.4° reaches 162.65 mm of the 162.65 mm format semi-diagonal; the corner chief ray is clear, diagnosis `ok`, zero skipped/unsolved. Closed: the coordinator subsequently made the assigned file visible; the cleanup pass checks that file directly below.
- The validator reports unchanged vignetting and 55.8% corner transmission limited by the front rim. That transmission is quoted from the independent report, not recomputed by the field-coverage check; chief-ray coverage does not establish full-pupil throughput or image quality.

Closed in cleanup: the coordinator set the name, key and filename; the pass below adds the subtitle and revises element types, glass labels and public prose, removing the private Drive reference. Open: the remaining inferred rims differ from drawing estimates (30.5 vs 30.2, 30 vs 28.9 and 22.5 vs 22.8 mm); retain them for this assignment. Exact factory identity, physical shutter accommodation, measured spectral curves and separate-member modes remain unverified. No application tests, typecheck, lint, build, generated files, server or git state changes were run in that pass; the earlier hidden status is closed by the coordinator's visibility update.

## 2026-11-13 — Cleanup and wording pass

The complete-lens table and both cells on patent p. 3, the glass explanation on p. 2 and the four-doublet drawing on p. 4 were re-read. Printed radii, thicknesses, airspaces, indices, Abbe numbers, rims and the midpoint stop remain unchanged. The earlier deployment rim correction is retained.

Added subtitle `GB 376,044 A, complete lens — Cooke Series XV Triple Convertible` and specs `8 ELEMENTS / 4 GROUPS`, `ALL SPHERICAL`, `f/6.8`, `CONVERTIBLE`. Element labels remain Element 1–8; types now follow the signed radii and calculated powers, with short position-specific roles. Both members of each pair carry `cemented`: C1 = L1/L2, C2 = L3/L4, C3 = L5/L6, C4 = L7/L8. Four matching `doublets` entries span surfaces 1–3, 4–6, 7–9 and 10–12. No anomalous-dispersion tags were added.

Glass labels changed from source/process descriptions to explicit Unmatched labels: L1/L8, nD 1.5472 / V 45.8, Chance 458; L2/L7, 1.5186 / 60.3, Chance 9322; L3/L6, 1.6437 / 48.3, not yet in Chance's catalogue; L4/L5, 1.5290 / 51.6, Chance 7863. Stored Δnd = 0 and ΔV = 0 for every element. An exhaustive catalog comparison found no row within both |Δnd| ≤ 0.0001 and |ΔV| ≤ 0.15; `trylabel.mjs` and `glasscheck.mjs` confirm deliberate non-resolution. No catalog spectral curve was substituted. The repeated-identifier inference for L5/L7/L8 remains explained in the header and analysis.

Focus distance 1000000000000000.0 → 1e15 is numerically unchanged; description now reads `Infinity focus only; only the complete lens is modeled.` Marketing minimum focus remains absent without a source. No other catalog metadata changed. The analysis now follows the identification/architecture/elements/glass/focus skeleton, retains the +0.774161% EFL residual and member focal lengths, and removes process sections, ray-count passages, broken spacing and the private link. Cooke's Compendium and Science Museum object 1979-559/1290 supply the cited Series XV association, 10×8 coverage, 312 mm f/6.8 lens and 26.5-inch (673 mm) front-cell comparison with approximately 645 mm calculated here. The museum's c.1920 date is explicitly distinguished from this later patent. Existing audit history and the dated deployment section are preserved, with stale hidden/cleanup lines marked closed.

Before → after, identical: EFL 313.55880155878856 → 313.55880155878856 mm; FOPEN 6.8 → 6.8; half-field 27.5 → 27.5°; stop radius 20.260950616713245 → 20.260950616713245 mm; BFD 288.9792920995148 → 288.9792920995148 mm; total track 358.0672920995148 → 358.0672920995148 mm. The two probe endpoints retain the same static prescription and infinity focus. Surface audit: OK, no validation errors. Aperture audit: one lens/one station within 3%, zero rim/trace/iris limits and zero failures. Field-coverage audit with `--all`: one lens/one station ≥99%, zero unsolved and zero skipped.

Open: retained rims versus drawing estimates remain 30.5/30/22/22.5 mm versus approximately 30.2/28.9/21.9/22.8 mm. Iris position and clear diameters are inferred; physical shutter fit and manufacturing tolerances are undetermined. Exact factory/serial prescription identity and the historical cell focal-length differences remain unresolved. Measured spectral curves, separate-cell configurations and retail minimum focus remain unavailable; the production minimum aperture marking is unconfirmed, so the existing model settings through f/32 are retained. Full commercial field/image-quality and MTF claims remain unsupported by chief-ray coverage. Rendered page inspection is incomplete: `shot.sh` produced no PNG, and the browser navigation tool returned `MCP tool call requires approval, but approval policy is never`; that inspection was stopped without a retry or workaround. No application tests, typecheck, lint, build, generators, formatting commands, dev server or git-state mutations were run, as required by the cleanup scope.
