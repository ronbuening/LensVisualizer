# Qualified pre-integration audit
- Original GB155640 EI governs literally. Three elements/three air groups. Source element diameters retained, not inferred caps or iris diameters.
-100× normalized representative scale, not exact factory100mm/5-inch/6.25-inch identity. Sourcef/3 vs retailfamilyf/3.5 retained. Maker retrospective reports specimen inscriptions, not photos independently inspected.
- No source optical fitting, glass substitution or geometry override. Literal EFL99.8591886688mm,−.1408113% nominal residual. Calculated BFL85.3257513035mm, not printed. Infinity only.
- Nu interpreted as conventionalVd with period/same-author support; formula absent from inspected patent. Engine d approximates historicalD, no full-curve/melt identity claim.
- Largest internal gap midpoint stop entirely inferred before rays. Source caps17/15/15mm. Independent full-cap geometry/iris review passed; not a factory stop.
- Native and isolated strict TypeScript pass. Final numerical payload matches pilot, only key/name changed. Reproduce with supplied scripts and retained LensVisualizer checkout.
- Sparse source-edge22.5°:10 successful exits,11clipped,5blocked of26. No45° coverage/throughput/image-plane/MTF claim. Axis26 exits is bounded sampling, not full pupil certification.
- Current-corpus/app/lint/format/build/browser/MTF deferred, not passed. Hidden, undelivered, undeployed. Count only after final independent closure and full private archive readback verification.


## 2026-11-13 — Deployment validation

Codex independently re-read the three local GB155640A.pdf page images at 160 dpi and checked the front-page names and dates; Example I's six radii, three glass thicknesses, two air separations, three diameters, three sodium D-line indices and three Nu values; the stated one-unit focal length, f/3 aperture and 45° field; and Figure 1's three separate elements and light entering from the right. These agree with the independent validator's exact transcription at ×100 scale; no prescription or rim change was needed.

Verdict: valid with notes. The validator reports that Cooke's Compendium links Series XI f/3.5 specimens in 5 in and 6¼ in focal lengths to the engraved patent number, and that Science Museum object 1990-5036/1206 has a 6¼ in Series XI with an f/3.5–16 scale. This strongly supports the patent association and plausibly supports Example I, but does not establish an exact production prescription; no 100 mm Series XI was sold, and the model remains a ×100 normalisation.

Changes made:

- Type import: `../LensVisualizer/src/types/lensDataV2.js` → `../../types/lensDataV2.js`. Anonymous default object → `const LENS_DATA = { ... } satisfies LensDataV2Input` followed by `export default LENS_DATA`.
- Header: absent → one JSDoc block identifying the patent, Example I, ×100 conversion to millimetres, retail focal lengths, inferred stop and calculated back focus, printed rather than inferred rims, derived image circle and index interpretation.
- Name: `Cooke Series XI 100mm-scaled f/3 (patent EI representative)` → `COOKE SERIES XI f/3 (GB 155,640 Example I Design)`.
- `catalog.focalLengthMm.marketing`: `100` → omitted because 100 mm is the model scale, not a sold focal length. `design: 100` and every prescription number remain unchanged.
- `source.patentNumber`: `GB 155640` → `GB 155,640 A`; assignees: `["Taylor, Taylor and Hobson"]` → `["Taylor, Taylor & Hobson Ltd."]`; example: absent → `{ "label": "Example I", "id": "1" }`.
- `catalog.lensMounts`: absent → `["large-format-lens-board"]`; `catalog.imageCircleMm`: absent → `82.84`, the validator's rounded diameter for 2f·tan 22.5° at the nominal 100 mm scale.
- `aperture.fStops`: `[3, 3.5, 4, 5.6, 8, 11, 16, 22]` → `[3, 3.5, 4, 5.6, 8, 11, 16]`; `maxFNumber`: `22` → `16`, matching the documented retail upper limit while retaining the patent's f/3 opening.
- `focus.description`: `NO_INTERNAL_RECONSTRUCTION: infinity normalized representative only` → `This normalised patent model represents infinity focus only.` The equivalent numeric spelling `1000000000000000.0` → `1000000000000000` removes an unnecessary decimal.
- Analysis notes: old patent/assignee wording → canonical metadata; ambiguous 100 mm qualification → explicit ×100 scale and documented retail focal lengths; f/22 convenience setting → f/3–16 model range and f/3.5–16 retail range; no image-circle explanation → 82.84 mm field-derived circle; unvalidated geometric coverage statement → the current chief-ray coverage result with illumination and image-quality limits retained.

First-order values after these changes: `built.mjs` gives EFL 99.8591886688423 mm, f/3, half-field 22.5°, stop semi-diameter 13.450040292767675 mm and total track 119.0857513035 mm. The separate paraxial check gives BFD 85.3258 mm, matching the stored 85.3257513035 mm final gap, with effectively zero paraxial defocus.

Audit results:

- Surface: OK, no validation errors.
- Aperture: one lens and one station within 3% of the stated f-number; zero rim, trace, iris or failed limits. No rim was altered.
- Image circle: one lens checked, zero undersized and zero skipped, using the 82.84 mm diameter.
- Field coverage: the assigned hidden file is skipped as hidden. A scratch copy differing only by `visible: true` reaches 99.99999993% of the 41.42 mm image radius at a modeled half-field of 22.48515754°; the corner chief ray is clear, with no corner clips and zero skipped stations. The nominal declared half-field remains 22.5°. This is geometric coverage, not full-pupil illumination; the validator reports 46.5% unvignetted pupil at the source edge.
- Prettier check: all three assigned files pass. No full test suite, typecheck, lint, build, metadata generation, server, commit or deployment was run during this integration check.

Open: the later cleanup pass still needs to review the existing key and filenames, element type and glass labels, subtitle/specs wording, dropped spaces and process wording in the analysis, and historical audit prose. Any further rim-versus-figure review must distinguish the optical surfaces from labels and mechanical strokes and retain the printed diameters unless separately justified. Product-to-example identity remains qualified; remote checks and production image quality are not established here.
