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

Closed: SD pass — the later dated semi-diameter section records front rims 15.5 → 15.1 mm and retained 9.0 mm rear rims, with 86.3 → 83.6 % corner transmission. The figure-sized rims remain substantially smaller; the illumination and traced-field rules prevent adopting them. The validator's older 86 %/18 %/44 % comparisons describe different aperture sets.

Closed: cleanup pass — the coordinator set the names, key and filenames; the cleanup section below resolves subtitle/specs, element types, glass labels and remaining wording. Earlier audit lines record historical decisions and are superseded where corrected below. Full application checks and release remain outside this assignment; browser review remains Open below.

## 2026-11-13 — Cleanup and wording pass

Re-read the validator and deployment reports, the patent's sole example/repeated claim 3, and the Geiss-America manual pages showing the 100 mm f/4.5 lens, click stops and rangefinder coupling. Seven radii, six glass/air intervals and four sodium-D index/Abbe pairs remain unchanged; no aspheres, variable gaps, stops or rims were edited.

Absent subtitle → `US 2,631,497 A, sole example — Tele-Sandmar for the Argus C3`. Absent specs → `4 ELEMENTS / 3 GROUPS`, `ALL SPHERICAL`, `f/4.5–22`, `TELEPHOTO`; the aperture range is illustrated on manual page 2. The infinity placeholder remains numerically unchanged at 1e15 m. Focus text now begins “Infinity focus only” and names the manual's Argus C3 rangefinder coupling. No marketing close-focus value or mount id was added. Element labels remain “Element N”; types now follow the radius signs: Biconvex Positive, Biconcave Negative, Negative Meniscus and Plano-Convex Positive, each with a specific role. L1 and L2 both have `cemented: "C1"`; one C1 doublet spans surfaces 1–3. The 0.03 mm L3–L4 air gap remains uncemented. No APD tags or spectral indices were added or removed.

All four old glass labels described a sodium-D/d-line approximation. They now read `Unmatched (nD 1.62398 / V 47.0)`, `Unmatched (nD 1.74066 / V 27.2)`, `Unmatched (nD 1.61008 / V 46.0)` and `Unmatched (nD 1.72719 / V 28.0)` for L1–L4 respectively. Label-only changes have ΔnD = 0 and ΔνD = 0. A complete catalog scan evaluated coefficients at 589.3 nm and Abbe numbers at C/D/F: no row met both |ΔnD| ≤ 0.0001 and |ΔνD| ≤ 0.15. Nearest candidates, not adopted, were L1 E-BAF8 (−0.00035747, +0.03552), L2 E-FD13 (−0.00012201, +0.55182), L3 H-BaF6 (−0.00218173, +0.21119), L4 H-ZF4A (+0.00083673, +0.31014). The label checker intentionally leaves all four unresolved with Abbe-based dispersion; the resolver's broader compatibility test is not the exact-row criterion.

Analysis changes remove process and hidden-state prose, retain the Schlegel/Graw attribution and uncertain product association, explain the manual's chronology and aperture range, and condense the patent's 0.2f prose versus the example's 0.39f back focus to one sentence. The model limitations retain the larger-rim discrepancy. Audit history is spaced and corrected in place, with stale hidden/cleanup statements closed; the dated Deployment validation section is retained.

Before → after: EFL 100.0266426114469 → 100.0266426114469 mm; FOPEN 4.5 → 4.5; built halfField 17.883574616115126 → 17.883574616115126°; stop radius 6.738905553647886 → 6.738905553647886 mm; paraxial BFD 39.071980372 → 39.071980372 mm; track including image gap 81.80198037168 → 81.80198037168 mm. Complete built/probe outputs are identical, including both focus keyframes; all authored surface objects are unchanged. The built default half-field above is distinct from the approximately 12.1° full-frame corner used in the earlier report.

Surface audit: OK, no validation errors. Aperture audit: one station within 3 % of stated f-number; zero rim, trace or iris limits and zero failures. Field coverage: one station at ≥99 %, zero unsolved and zero skipped. The screenshot helper produced no image and reported Chromium power-notification/DNS-watch errors, so rendered UI review was not completed. No explicit sandbox/approval denial occurred. Prettier was skipped as directed by the addendum.

Closed: model-rim review — the later semi-diameter pass changes front rims to 15.1 mm and retains rear rims at 9.0 mm under the illumination and traced-field constraints. The drawing's long spans are calibrated, but its thin rear features are schematic; its approximately 11.1/6.4 mm proportional targets are not printed clear diameters.

Open: the taxonomy has no Argus C mount id; `lensMounts` remains absent. Retail minimum focus distance and finite-focus travel are not established; no marketing close-focus distance or finite-focus state was added. (closed 2026-11-13: missing mount id resolved by taxonomy `argus-c`, “Argus C-series”, and `catalog.lensMounts: ["argus-c"]`; the retail minimum focus distance and finite-focus travel remain open.)

Open: no exact catalog glass rows, production optical cross-section or verified patent engraving establish production identity. The manual/product association remains circumstantial. Browser review remains incomplete because no screenshot was produced.

## 2026-11-13 — Semi-diameter pass against the patent figure

Source: local `patents/US2631497A.pdf`, PDF page 1, sole unnumbered section drawing of the sole 100 mm f/4.5 example; scale factor 1. The bibliography on PDF page 2 reads Franz Schlegel, Munich, assignor to Harry J. Graw, Chicago; US 2,631,497, application 21 February 1952, publication 17 March 1953. No patent optical prescription or metadata was edited.

Measurements used the source's native 2320 × 3408 raster at 72 dpi, avoiding interpolation. Approximate vertex coordinates are x = 660.5, 894.5, 923.5, 1610.5, 1629.5, 1639.5 and 1669.5 px for S1–S7. The local axis slopes from y ≈1725 at the front to ≈1716 at the rear. S1–S7 gives 1009 px / 42.73 mm = 23.613 px/mm; the independent S1–S4 span gives 950 px / 40.2 mm = 23.632 px/mm. L1's 234 px / 10 mm gives 23.4 px/mm, within 1 % of the long-span fit. The clean lower S1 arc fits radius approximately 533.25 px against R1 = 24.01 mm, giving 22.21 px/mm, about 6 % below that fit. Thus the scale is approximate in both directions, not a calibrated clear-diameter source.

There is a stronger local limitation: drawn S6–S7 thickness is about 30 px, or 1.27 mm at the long-span scale, versus the table's 1.7 mm (about 25 % smaller); the drawn approximately 10 px rear air gap is also exaggerated versus 0.03 mm. Consequently the drawing is used for relative heights, square cuts and step order. Its thin rear construction is schematic, superseding earlier unqualified statements that all axial dimensions agreed within 1 %.

Clean horizontal rims span y ≈1462–1988 at the front and ≈1564–1868 at the rear, giving half-heights of 263/152 px and long-span estimates 11.1/6.4 mm. The arc scale instead suggests about 11.8/6.9 mm. Leaders, the axis, stop strokes and radius labels were excluded. All four elements are drawn square-cut; the front cemented chain and both rear singlets retain equal face heights, with no lands or inferred chamfers.

| Surface | Starting sd (mm) | Figure proportional target (mm) | Final sd (mm) | Evidence and constraint |
| --- | ---: | ---: | ---: | --- |
| 1 | 15.5 | ≈11.1–11.8 | 15.1 | Smaller front cap supported; minimum 0.1 mm-grid value under the light budget with unchanged rear rims. |
| 2 | 15.5 | ≈11.1–11.8 | 15.1 | Cemented interface follows the same square-cut front group. |
| 3 | 15.5 | ≈11.1–11.8 | 15.1 | Square-cut rear face of front doublet follows S1/S2. |
| 4 | 9.0 | ≈6.4–6.9 | 9.0 | Retained to preserve rear step order and traced field. |
| 5 | 9.0 | ≈6.4–6.9 | 9.0 | Same square-cut L3 cap. |
| 6 | 9.0 | ≈6.4–6.9 | 9.0 | Same-height rear pair; smaller L4 cap shrinks the traced field. |
| 7 | 9.0 | ≈6.4–6.9 | 9.0 | Rear cap retained under the no-field-shrink rule. |

The committed baseline is `.lens-work/base1124sd/EnnaMunchenTeleSandmar100mmf45.data.ts`. The full-pupil lattice comparison at infinity gives the following geometric transmission, not photometric relative illumination:

| Field (degrees) | Baseline (%) | Final (%) |
| --- | ---: | ---: |
| 0.0 | 100.0 | 100.0 |
| 2.0 | 100.0 | 100.0 |
| 4.0 | 100.0 | 100.0 |
| 6.0 | 100.0 | 100.0 |
| 8.0 | 100.0 | 100.0 |
| 10.1 | 98.0 | 97.6 |
| 12.1, full-frame corner | 86.3 | 83.6 |

The final `rimcost.mjs --loo` comparison loses at most 2.7 percentage points, at the corner; restoring the front group recovers those 2.7 points. Lowering the front group one further tenth to 15.0 mm loses 3.4 points, so 15.1 mm is the minimum front-group value at the authored precision with the rear caps retained. An 11.2/6.4 mm figure-size trial gives only 14.9 % corner transmission (71.4 points lost). A 15.3/8.9 mm trial meets the light budget but lowers built half-field from 17.883574616° to 17.697330370°, so it was rejected. Larger remaining figure discrepancies are intentional constraints, not a claim of matched clear diameters.

Final surface audit: OK, no validation errors. Aperture audit: one station within 3 % of f/4.5, zero rim, trace or iris limits and zero failures. Image-circle audit: one checked, zero undersized, zero skipped. Field coverage: 100 %, 21.65 mm of 21.65 mm at approximately 12.1°, corner clear, zero unsolved and zero skipped. Exact meridional trace at image height 21.6333 mm and ω = 12.06° has no axial or chief-ray clips. S1–S7 axial marginal heights are 11.11, 9.94, 9.44, 4.37, 4.40, 4.40 and 4.41 mm; chief heights are 7.75, 5.57, 5.16, 4.89, 5.48, 5.59 and 5.93 mm. Minimum optical-rim margins are about 3.99 mm to the axial beam and 3.07 mm to the corner chief ray. Real off-axis bundle clipping remains, including about 26–33 % per meridional side on S5–S7; these are not integrated pupil percentages.

Before → after: EFL 100.026642611 → 100.026642611 mm; f-number 4.5 → 4.5; built and tracing half-field 17.883574616 → 17.883574616°; physical stop radius 6.738905554 → 6.738905554 mm. Optical length, back focus and focus model are unchanged. Stop-to-cap clearance is 12.786010 → 12.874357 mm in front and 11.025989 → 11.025989 mm behind. The rear singlet retains its approximately 0.193 mm edge. No rim lands, cut-depth parameters or geometry overrides were needed.

The unchanged stop is at z = 25.7 mm, splitting the air gap 14.5/14.5 mm. Its drawn x ≈1304 px corresponds to z ≈27.2 mm and roughly a 16.1/12.9 mm split. An optional drawing-fidelity adjustment is therefore about +1.6 mm toward the rear within the existing gap; the coordinator must assess its beam and pupil consequences. No stop position or radius was changed, and no iris-radius change is recommended from these uncalibrated strokes.

Rendered comparison: the model sketch and patent were viewed side by side at matched 23.63 px/mm scale, with black final outlines and blue baseline outlines. Square rims, the cemented front group and same-height rear pair remain coherent. The front change is modest; both groups remain visibly taller than the drawing under the stated constraints. Artifact: `/private/tmp/claude-501/-Users-ronbuening--claude-spares-spare-EIkiKm/8d989648-1a4e-43f9-bdb4-c4cbb0d8c850/scratchpad/sd/sandmar/overlay.png`. This is the required model-sketch replacement; live browser review belongs to the coordinator and was not performed.

The supplied Geiss-America manual page 2 was inspected: it shows the external 100 mm f/4.5 Argus C3 lens and diaphragm controls, not an optical cross-section. No maker construction diagram supports independent element/group counts, special-glass positions or aperture measurements. The patent gives four elements / three air-separated groups; no aspheres or identified special-glass positions are claimed. No new name or metadata mismatch was found; the missing Argus C taxonomy id, unverified production identity and patent prose's approximately 0.2f versus numerical 0.39f back focus remain outside this SD pass. The three assigned files pass Prettier and whitespace checks. Full application gates and git state changes belong to the coordinator. No sandbox refusal occurred.


## 2026-11-13 — Glass proxies and catalog metadata

- L1: `Unmatched (nD 1.62398 / V 47.0)` → `E-BAF8 (spectral proxy; patent nD 1.62398 / V 47.0; supplier and melt unspecified)`. Hikari catalog row: nd 1.62374, νd 47.044346; catalog minus printed pair Δn = −0.00024, Δν = +0.044346.
- L3: `Unmatched (nD 1.61008 / V 46.0)` → `H-BaF6 (spectral proxy; patent nD 1.61008 / V 46.0; supplier and melt unspecified)`. CDGM catalog row: nd 1.60801, νd 46.2; catalog minus printed pair Δn = −0.00207 (approximately −0.0021), Δν = +0.20.
- L2 retains `Unmatched (nD 1.74066 / V 27.2)` and L4 retains `Unmatched (nD 1.72719 / V 28.0)`; neither has a catalog row within the proxy Abbe window.

The proxy rule uses an Abbe difference within about 0.25 and an index difference within about 0.002, rather than the earlier exact-row bar. Catalog nd/νd and printed nD/νD have different reference-line conventions; the deltas above compare those reported pairs. The engine retains the printed index at sodium D and borrows only the catalog row's wavelength dependence. Printed nD/νD values remain unchanged. Neither proxy is an exact historical glass identification; supplier and melt remain unspecified.

`chan.mjs` compares `.lens-work/base1124glass/EnnaMunchenTeleSandmar100mmf45.data.ts` → the current data file. Paraxial focus is expressed as BFD and as its offset from G; C/d/F/g channel labels correspond to R/G/B/V, with G serving as this prescription's sodium-D-anchored reference.

| Channel | BFD before → after (mm) | Focus offset from G before → after (µm) |
| --- | ---: | ---: |
| C / R | 39.1970 → 39.2004 | +125.0 → +128.5 |
| d / G (reference) | 39.0720 → 39.0720 | 0.0 → 0.0 |
| F / B | 38.9329 → 38.9358 | −139.0 → −136.2 |
| g / V | 38.9755 → 38.9958 | −96.5 → −76.2 |

Catalog metadata: absent `catalog.lensMounts` → `["argus-c"]`. The taxonomy defines `argus-c` as “Argus C-series”, the geared screw mount of the Argus C2/C3 and later C-series rangefinders. The missing-mount item is closed in place above; unresolved production identity, retail minimum focus distance, finite-focus travel and browser review retain their existing limitations. The analysis describes the final mount and glass assignments. Only the two assigned Markdown files are edited; the data file is read-only for this assignment.
