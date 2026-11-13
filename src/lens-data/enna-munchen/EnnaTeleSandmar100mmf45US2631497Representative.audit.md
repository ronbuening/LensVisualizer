# Tele-Sandmar100 qualified pre-integration audit

One hidden representative, not exact factorymelt or every productionvariant. Primary100f4.5sales manual and direct photographedpatent engraving supply strong familyassociation; separately photographed100mm/Enna-Werk marking is not claimed same serialspecimen. Source patent assigneeHarryJ.Graw does not itself prove manufacturer.

Seven literal radii including flatS6, six glass/air intervals and fourindex/Abbe pairs agree example/repeatedclaim. Fourelements/threeairgroups versus twofunctional groups distinguished. Frontcementedinterface and rear.03mmairgap preserved. SodiumD589.3nm engine dapproximation disclosed. LiteralEFL100.02664/BFL39.07198; proseBFL/f~.2 differs example~.39062, retained with no tuning. Derived imagegap/infinityonly, no finitefocus reconstruction.

Exactmidpoint14.5/14.5 is inference from source'substantiallymidway', not exactcoordinate. Caps15.5front/9rear geometry-grid inference; nativeiris6.738905554 derivedf4.5. Positivefullcapclearance, defaults.9, no exceptions or sourceoptical alteration. Corner3of26 sparse raysclipped; successfultraces terminateopticalsurface, not imageplane. No fullpupil/throughput/MTF claim.

Finaltypedmodel differs fromacceptedpilot onlykey/name. Nativeconstruction, isolatedstrictTypeScript and sparsefield rerun; finalindependentreview governsqualified pre-integrationscope. Fullapp/currentcorpus/lint/format/build/browser/MTF deferred. No novelty/release/PR/deploy or individualdelivery.

Manualcopyright1951 predatespatentfiling1952; later engravedgrant supports laterfamilyassociation, not allversionidentity. Chronology retained.

## 2026-11-13 — Deployment validation

Codex independently re-read all three patent page images: the figure and its stop, the bibliographic details and back-focus prose, and the sole example and repeated claim 3 table. All seven radii (including flat R6), six glass/air intervals, four index/Abbe pairs, native 100 mm f/4.5 specification and explicit sodium-D definition agree with the validator report; the 29 mm gap remains split into inferred 14.5/14.5 mm intervals. The validator's figure measurements give axial agreement within 1 % and approximate front/rear rims of 11.1/6.4 mm.

Verdict: valid with notes. The validator's Geiss-America manual evidence (German-made Argus C3 Tele-Sandmar, 100 mm f/4.5, stops 4.5–22), collector attribution to Enna-Werk and camera-shutter arrangement support a strong but circumstantial product association; no production cross-section or verified engraved patent number establishes exact internal identity.

Changes made:

- File form: incorrect `../LensVisualizer/src/types/lensDataV2.js` import → `../../types/lensDataV2.js`; two line comments → one JSDoc source/inference block; anonymous default object → `const LENS_DATA` with `satisfies LensDataV2Input` and a separate default export. The block states sole-example provenance, scale factor 1, native mm with no conversion, and inferred stop, rims and back focus.
- Maker: `Enna` → `Enna München`, the house maker in the existing `enna-munchen/` folder.
- All four `indexReference` fields: `d` → `D`, because the patent specifies sodium D at 589.3 nm. The validator records a d/D index difference of 1.2–2.3e-4, above the five-decimal print precision. Printed index and Abbe values are unchanged.
- `source.patentNumber`: `US 2631497` → `US 2,631,497 A`; absent `source.example` → `{ "label": "Sole example", "id": null }`.
- Absent `catalog.imageFormat` → `135-full-frame`; `lensMounts` remains absent because the taxonomy has no Argus C id. `visible: false` is retained.
- `focus.description`: `NO_INTERNAL_RECONSTRUCTION: infinity representative only` → `Only the infinity-focus prescription is modeled.` Redundant `.0` suffixes on rear semi-diameters and the infinity-distance sentinel were removed without changing their values.
- Analysis: d-reference approximation claim → explicit sodium-D reference and the validator's print-precision comparison; figure described as "not a calibrated drawing" → axial agreement within 1 % and approximate 11.1/6.4 mm figure rims, with the larger retained rims left open for the SD pass. Removed the Etsy link and replaced claims of verified photographed patent engraving with the validator's qualified manual/collector evidence and unverified-engraving limitation.

After these changes, `built.mjs` reports EFL 100.026642611 mm (approximately 100.03 mm), f/4.5, physical stop radius 6.738905554 mm and total track 81.801980372 mm. The retained calculated back-focus interval is 39.071980372 mm, consistent with the validator's 39.072 mm. The patent's prose suggesting about 0.2f remains inconsistent with the example's approximately 0.39f; no prescription was retuned.

Audit results: surface validation OK, no errors; aperture audit within 3 % of the stated f-number, with zero rim, trace or iris limits and zero failures; image-circle audit 1 checked, 0 undersized, 0 skipped. Field coverage skipped the hidden original, then passed on an otherwise identical visible scratch copy: 100 %, modeled half-field 12.1°, 21.65 mm of 21.65 mm, corner clear, 1 station, 0 unsolved and 0 skipped. These results use the retained larger rims and do not establish full corner transmission at the smaller figure rims.

Open: SD pass — front/rear model rims remain 15.5/9.0 mm, larger than the figure's approximately 11.1/6.4 mm; no rim value was changed. The validator reports corner transmission of 86 % with the retained rims, 18 % at figure size and 44 % at 13/7.5 mm, so later rim decisions must retain this distinction.

Open: cleanup pass — names, key, filenames, subtitle/specs, element type labels, glass labels (including their now-outdated d-reference approximation wording) and remaining analysis/audit wording. All earlier audit lines are preserved as historical statements; this section records the current corrections. Full application checks, browser review and release remain outside this integration assignment.
