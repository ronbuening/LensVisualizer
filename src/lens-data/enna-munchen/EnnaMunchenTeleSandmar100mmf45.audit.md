# Tele-Sandmar 100 mm f/4.5 audit

Originally recorded as hidden (closed: now visible). The 100 mm f/4.5 sales manual supports the product association without establishing the factory melt or every production variant. The original claim of a photographed patent engraving was superseded by the Deployment validation below: that engraving remains unverified. A separately photographed 100 mm/Enna-Werk marking was not established as the same serial specimen. Patent assignee Harry J. Graw does not itself prove the manufacturer.

Seven radii including flat S6, six glass/air intervals and four index/Abbe pairs agree with the example and repeated claim. Four elements in three air-separated groups are distinguished from the two functional groups. The front cemented interface and rear 0.03 mm air gap are preserved. The original d-line approximation statement was superseded by explicit sodium-D references in the Deployment validation below. EFL 100.02664 mm and BFL 39.07198 mm give BFL/f about 0.39062, versus about 0.2 in the prose; no values were tuned. The image gap is calculated at infinity, with no finite-focus state.

The 14.5/14.5 mm midpoint is inferred from the source's approximate midpoint statement. Front/rear caps of 15.5/9 mm were inferred on a geometry grid; the iris radius of 6.738905554 mm is derived at f/4.5. Full-cap clearance is positive at the default 0.9 geometric limits, without exceptions or changes to source optics. Historically, 3 of 26 corner rays clipped; successful traces ended at the optical surface, not the image plane. These counts did not establish integrated pupil transmission or MTF.

The original file differed from the reviewed draft only in key/name. Isolated type and field checks were recorded at that stage. Full application/corpus checks, lint, format, build, browser review and MTF were deferred; no release, PR or deployment was recorded. Later checks and corrections are recorded below.

The manual's 1951 copyright predates the 1952 patent filing. The original inference from an engraved grant number remains unverified, as corrected below; identical optics across production versions are not established.

## 2026-11-13 — Deployment validation

Codex independently re-read all three patent page images: the figure and its stop, the bibliographic details and back-focus prose, and the sole example and repeated claim 3 table. All seven radii (including flat R6), six glass/air intervals, four index/Abbe pairs, native 100 mm f/4.5 specification and explicit sodium-D definition agree with the validator report; the 29 mm gap remains split into inferred 14.5/14.5 mm intervals. The validator's figure measurements give axial agreement within 1 % and approximate front/rear rims of 11.1/6.4 mm.

Verdict: valid with notes. The validator's Geiss-America manual evidence (German-made Argus C3 Tele-Sandmar, 100 mm f/4.5, stops 4.5–22), collector attribution to Enna-Werk and camera-shutter arrangement support a strong but circumstantial product association; no production cross-section or verified engraved patent number establishes exact internal identity.

Changes made:

- File form: incorrect `../LensVisualizer/src/types/lensDataV2.js` import → `../../types/lensDataV2.js`; two line comments → one JSDoc source/inference block; anonymous default object → `const LENS_DATA` with `satisfies LensDataV2Input` and a separate default export. The block states sole-example provenance, scale factor 1, native mm with no conversion, and inferred stop, rims and back focus.
- Maker: `Enna` → `Enna München`, the house maker in the existing `enna-munchen/` folder.
- All four `indexReference` fields: `d` → `D`, because the patent specifies sodium D at 589.3 nm. The validator records a d/D index difference of 1.2–2.3e-4, above the five-decimal print precision. Printed index and Abbe values are unchanged.
- `source.patentNumber`: `US 2631497` → `US 2,631,497 A`; absent `source.example` → `{ "label": "Sole example", "id": null }`.
- Absent `catalog.imageFormat` → `135-full-frame`; `lensMounts` remains absent because the taxonomy has no Argus C id. The then-hidden state is closed: the coordinator subsequently made the lens visible.
- `focus.description`: `NO_INTERNAL_RECONSTRUCTION: infinity representative only` → `Only the infinity-focus prescription is modeled.` Redundant `.0` suffixes on rear semi-diameters and the infinity-distance sentinel were removed without changing their values.
- Analysis: d-reference approximation claim → explicit sodium-D reference and the validator's print-precision comparison; figure described as "not a calibrated drawing" → axial agreement within 1 % and approximate 11.1/6.4 mm figure rims, with the larger retained rims left open for the SD pass. Removed the Etsy link and replaced claims of verified photographed patent engraving with the validator's qualified manual/collector evidence and unverified-engraving limitation.

After these changes, `built.mjs` reports EFL 100.026642611 mm (approximately 100.03 mm), f/4.5, physical stop radius 6.738905554 mm and total track 81.801980372 mm. The retained calculated back-focus interval is 39.071980372 mm, consistent with the validator's 39.072 mm. The patent's prose suggesting about 0.2f remains inconsistent with the example's approximately 0.39f; no prescription was retuned.

Audit results: surface validation OK, no errors; aperture audit within 3 % of the stated f-number, with zero rim, trace or iris limits and zero failures; image-circle audit 1 checked, 0 undersized, 0 skipped. Field coverage skipped the hidden original, then passed on an otherwise identical visible scratch copy: 100 %, modeled half-field 12.1°, 21.65 mm of 21.65 mm, corner clear, 1 station, 0 unsolved and 0 skipped. These results use the retained larger rims and do not establish full corner transmission at the smaller figure rims.

Open: SD pass — front/rear model rims remain 15.5/9.0 mm, larger than the figure's approximately 11.1/6.4 mm; no rim value was changed. The validator reports corner transmission of 86 % with the retained rims, 18 % at figure size and 44 % at 13/7.5 mm, so later rim decisions must retain this distinction.

Closed: cleanup pass — the coordinator set the names, key and filenames; the cleanup section below resolves subtitle/specs, element types, glass labels and remaining wording. Earlier audit lines record historical decisions and are superseded where corrected below. Full application checks and release remain outside this assignment; browser review remains Open below.

## 2026-11-13 — Cleanup and wording pass

Re-read the validator and deployment reports, the patent's sole example/repeated claim 3, and the Geiss-America manual pages showing the 100 mm f/4.5 lens, click stops and rangefinder coupling. Seven radii, six glass/air intervals and four sodium-D index/Abbe pairs remain unchanged; no aspheres, variable gaps, stops or rims were edited.

Absent subtitle → `US 2,631,497 A, sole example — Tele-Sandmar for the Argus C3`. Absent specs → `4 ELEMENTS / 3 GROUPS`, `ALL SPHERICAL`, `f/4.5–22`, `TELEPHOTO`; the aperture range is illustrated on manual page 2. The infinity placeholder remains numerically unchanged at 1e15 m. Focus text now begins “Infinity focus only” and names the manual's Argus C3 rangefinder coupling. No marketing close-focus value or mount id was added. Element labels remain “Element N”; types now follow the radius signs: Biconvex Positive, Biconcave Negative, Negative Meniscus and Plano-Convex Positive, each with a specific role. L1 and L2 both have `cemented: "C1"`; one C1 doublet spans surfaces 1–3. The 0.03 mm L3–L4 air gap remains uncemented. No APD tags or spectral indices were added or removed.

All four old glass labels described a sodium-D/d-line approximation. They now read `Unmatched (nD 1.62398 / V 47.0)`, `Unmatched (nD 1.74066 / V 27.2)`, `Unmatched (nD 1.61008 / V 46.0)` and `Unmatched (nD 1.72719 / V 28.0)` for L1–L4 respectively. Label-only changes have ΔnD = 0 and ΔνD = 0. A complete catalog scan evaluated coefficients at 589.3 nm and Abbe numbers at C/D/F: no row met both |ΔnD| ≤ 0.0001 and |ΔνD| ≤ 0.15. Nearest candidates, not adopted, were L1 E-BAF8 (−0.00035747, +0.03552), L2 E-FD13 (−0.00012201, +0.55182), L3 H-BaF6 (−0.00218173, +0.21119), L4 H-ZF4A (+0.00083673, +0.31014). The label checker intentionally leaves all four unresolved with Abbe-based dispersion; the resolver's broader compatibility test is not the exact-row criterion.

Analysis changes remove process and hidden-state prose, retain the Schlegel/Graw attribution and uncertain product association, explain the manual's chronology and aperture range, and condense the patent's 0.2f prose versus the example's 0.39f back focus to one sentence. The model limitations retain the larger-rim discrepancy. Audit history is spaced and corrected in place, with stale hidden/cleanup statements closed; the dated Deployment validation section is retained.

Before → after: EFL 100.0266426114469 → 100.0266426114469 mm; FOPEN 4.5 → 4.5; built halfField 17.883574616115126 → 17.883574616115126°; stop radius 6.738905553647886 → 6.738905553647886 mm; paraxial BFD 39.071980372 → 39.071980372 mm; track including image gap 81.80198037168 → 81.80198037168 mm. Complete built/probe outputs are identical, including both focus keyframes; all authored surface objects are unchanged. The built default half-field above is distinct from the approximately 12.1° full-frame corner used in the earlier report.

Surface audit: OK, no validation errors. Aperture audit: one station within 3 % of stated f-number; zero rim, trace or iris limits and zero failures. Field coverage: one station at ≥99 %, zero unsolved and zero skipped. The screenshot helper produced no image and reported Chromium power-notification/DNS-watch errors, so rendered UI review was not completed. No explicit sandbox/approval denial occurred. Prettier was skipped as directed by the addendum.

Open: model front/rear rims remain 15.5/9.0 mm versus approximately 11.1/6.4 mm in the to-scale figure; no rim correction was authorized in this pass. The earlier report's 86 %/18 %/44 % transmission comparison remains a distinction between retained, figure-sized and intermediate apertures.

Open: the taxonomy has no Argus C mount id; `lensMounts` remains absent. Retail minimum focus distance and finite-focus travel are not established; no marketing close-focus distance or finite-focus state was added.

Open: no exact catalog glass rows, production optical cross-section or verified patent engraving establish production identity. The manual/product association remains circumstantial. Browser review remains incomplete because no screenshot was produced.
