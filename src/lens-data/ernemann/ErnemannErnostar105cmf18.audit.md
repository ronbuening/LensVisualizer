# Ernostar Example II qualified pre-integration audit

One hidden representative, not factory85mm/100mm prescription or sourcefieldcoverage certification. Governing table is cropped/concatenated DE436260 original-content reproduction; primary designer article supports commercialf1.8/50°six4family, not uniqueexample. Sourceprovenance and scope remain explicit. (Historical status: the complete source and visibility statements are superseded by the dated entries below; visibility is now enabled.)

TenR, sixthicknesses, threeairgaps, sixnD/νpairs and numericstop5.87/6.62 retained. Cementedtriplet interfaces preserved. ν interpretedasconventionalVd supported by originalvonRohr1899p59 and sameauthornotation; formula notexplicitinDEreproduction. Source sodiumD→engine dapproximation separate. No historicalmelt/measuredcurve or spectralfitting.

Caps28/25/17.5/20 are geometry-grid hypotheses, negativecap additionally sourcefixedstopclearance. No ray-performance fit, source repair, artificialspacer or geometryoverride. DerivedBFL56.83526107, EFL99.72006043 residualretained, infinityonly. No scalingto85mm or finitefocus.

Sparse source25°edge only6OK7clipped13blocked. Nominalframecorner21OK2clipped3blocked. These successfuloptical-surface traversals do not certify imageplane, sourcecoverage, throughput or MTF. Strongfieldlimitation remains prominent.

Final data onlykey/name differs frompilot; native, isolatedstricttsc and bothfields rerun. Independent finalreview governsqualifiedpreintegrationacceptance. Fullapp/currentcorpus/lint/format/build/browser/MTF deferred. No publicrelease/deploy, exactfactoryidentity, historicalnovelty or individualdelivery.

## 2026-11-13 — Deployment validation

Codex independently re-read all four page images of `patents/DE436260C.pdf` against the independent validator's report. The check covered the front-page patent number, owner and dates, the absence of a printed inventor, Example II's ten radii, six thicknesses, three air gaps, six nD/ν pairs, the 5.87 + 6.62 = 12.49 mm stop split, f = 100 mm normalisation, f/1.8 and approximately 50° field, and Abb. 2's six elements in four groups with the cemented triplet second. The transcription agrees; no source prescription number was changed.

Verdict: valid with notes as a hidden patent design. The validator's product evidence links the f/1.8 Ernostar family by aperture, six-element/four-group layout and second-component cemented triplet, including the [10.5 cm f/1.8 section](https://upload.wikimedia.org/wikipedia/commons/d/d0/Ernostar_10%2C5cm_1%2C8_%281924%29.jpg); the commercial focal lengths were 8.5, 10.5, 12.5 and 16.5 cm, so the patent's normalised 100 mm is not evidence for a commercial 10 cm f/1.8 lens.

Changes:

- File form: two opening `//` comments and the `../LensVisualizer/src/types/lensDataV2.js` import → first-line `../../types/lensDataV2.js` import followed by one JSDoc header; direct default object → `const LENS_DATA` with `satisfies LensDataV2Input` and a final default export. The header now identifies the complete patent, example, scale factor 1, millimetres without units conversion, printed stop position, derived iris and back focus, inferred rims, historical authorship, infinity placeholder and authored f/22 range.
- Name: `Ernemann Ernostar 100mm f/1.8 (Example II representative)` → `ERNEMANN ERNOSTAR f/1.8 (DE 436,260 Example II Design)`, to distinguish the patent normalisation from a sold focal length.
- Surface 7 semi-diameter: 17.5 → 18.4 mm. Before the change the validator measured f/1.87 (+4.1%); the aperture audit's least-change proposal independently confirmed 18.4 mm. Only the named front surface was raised; surface 8 and every other rim remain unchanged.
- Patent number: `DE 436260` → `DE 436,260 C`. Assignees: `["Ernemann-Werke A.G."]` → `["Ernemann-Werke AG"]`. The front page prints the Dresden company and no inventor. `source.authors` retains Ludwig Bertele only as a historical attribution, now explicitly marked in the header and analysis. `source.example` already had label `Example II` and id `2`, which were verified and retained.
- Catalog mounts: absent → `["fixed-lens-camera"]`; image format: absent → `645`, using canonical ids. `visible: false` is retained.
- Focus description: previous process wording → `Only the infinity prescription is modeled because the patent provides no focusing data.` The infinity placeholder is unchanged.
- Analysis: outdated cropped-source caveat and source link → complete four-page local patent reference; authorship and normalised focal-length statements now distinguish the historical attribution and sold focal lengths. The aperture discussion now records the surface-7 correction and unequal L5 rims, and identifies the unchanged 17.5 mm rear rim as the source of the retained stop-clearance value. Old 36 × 24 mm coverage trials → the current 645 audit results; earlier full-field fan results are labeled as pre-correction evidence, without claiming full-pupil illumination.

First-order values after the change, from `built.mjs`: EFL 99.7200604306 mm, f-number 1.8, total track 107.73526107 mm, stop radius 16.6141411993 mm and source half-field 25°. The stored derived back focus remains 56.83526107 mm; no focal fit, scaling or source-value adjustment was made.

Audit results:

- `audit:surface`: OK — no validation errors.
- `audit:aperture`: 1 lens / 1 station within 3%; no rim limit, trace failure, iris mismatch or failed station. The exact traced f-number is 1.7999999983, with STO as the limiter.
- `audit:image-circle`: 1 checked, 0 undersized, 0 skipped for 645 (69.7 mm diagonal). An otherwise identical visible scratch copy also passed.
- `audit:field-coverage --below=1.01`: the hidden file is skipped, so an otherwise identical scratch copy with `visible: true` was checked: 100% coverage, 34.85 mm of the required 34.85 mm corner radius, 18.9132° modeled/corner half-angle, corner clear, no limiting rim and 0 skipped. The production data remains hidden. This is chief-ray field coverage, not full-pupil transmission or certification of the patent's 50° field.

The scoped Prettier check passed for all three files. A comparison against the delivered files confirmed that every radius, spacing, glass value and other rim is unchanged, that the lens remains hidden, and that every existing audit line is preserved.

Open: the later cleanup pass still owns key/file naming, element type labels, glass labels, remaining wording and the catalog focal-length presentation (closed: coordinator naming/catalog changes and the cleanup entry below). Rims remain inferred rather than calibrated measurements of Abb. 2; the aperture proposal also lists 18.4 mm for both L5 faces if a square rim is later required, but this assignment authorizes only surface 7. Full-pupil illumination and exact factory-product prescription identity remain unverified. The existing audit lines above are preserved as historical records; this section supersedes their old source-provenance and rim statements.

## 2026-11-13 — Rescale and rename

Codex checked the rescaled file against the independent validator's report and compared the public 10.5 cm f/1.8 section. The validator independently re-read the patent page images, checking Example II's ten radii, nine thicknesses/gaps, six nD/ν pairs, 5.87 + 6.62 = 12.49 mm stop split, and Abb. 2's six elements in four groups with the cemented triplet second. This pass preserves that verified relative prescription and the prior surface-7 correction.

Reason and verdict: the validator found commercial f/1.8 Ernostars at 8.5, 10.5, 12.5 and 16.5 cm, whereas the 10 cm Ernostar was the four-element f/2 lens. The owner-approved ×1.05 scale maps the patent's f = 100 normalisation to the 10.5 cm f/1.8 Ermanox 4.5 × 6 cm lens. Its [public optical section](https://upload.wikimedia.org/wikipedia/commons/d/d0/Ernostar_10%2C5cm_1%2C8_%281924%29.jpg) shows the same 6/4 layout and second-component cemented triplet. This is a valid family-based reconstruction at the marketed focal length, without claiming an exact factory prescription; the 8.5, 12.5 and 16.5 cm f/1.8 lenses share the design family.

Changes:

- Name: `ERNEMANN ERNOSTAR f/1.8 (DE 436,260 Example II Design)` → `ERNEMANN ERNOSTAR 10.5cm f/1.8`.
- `catalog.focalLengthMm.marketing`: 100 → 105 mm; `catalog.focalLengthMm.design`: 100 → 104.71 mm, the newly traced paraxial EFL rounded to two decimals rather than the patent's nominal value.
- Uniform factor 1.05 applied by a script to all ten numeric radii, eleven spacings (both stop gaps and the image-side distance included), and ten explicit optical semi-diameters. Every length change is listed below. No explicit stop radius, element focal length, image-circle diameter or dimensional projection/field coordinate is present to scale. The derived iris radius scales from 16.6141411993 to 17.4448482593 mm. Refractive indices, Abbe numbers, angles, f-numbers and the nonphysical infinity placeholder are retained; no conic is authored.
- Header and analysis: patent-normalised Design identification → ×1.05 reconstruction of the 10.5 cm f/1.8 lens, with the shared 8.5/12.5/16.5 cm family, scaled dimensions, first-order values, aperture notes and updated 645 coverage. Millimetres need no units conversion. Source stop coordinates remain distinguished from inferred iris/rims and calculated back focus.
- `imageFormat: "645"`, `lensMounts: ["fixed-lens-camera"]`, `visible: false`, the key and all three filenames are retained.

| Surface | R (mm), old → new | d (mm), old → new | sd (mm), old → new |
|---|---|---|---|
| 1 | 50.2 → 52.71 | 7.26 → 7.623 | 28 → 29.4 |
| 2 | 181.5 → 190.575 | 0.53 → 0.5565 | 28 → 29.4 |
| 3 | 45.4 → 47.67 | 11.74 → 12.327 | 25 → 26.25 |
| 4 | -106.8 → -112.14 | 6.94 → 7.287 | 25 → 26.25 |
| 5 | -41.6 → -43.68 | 1.07 → 1.1235 | 25 → 26.25 |
| 6 | 92 → 96.6 | 4.46 → 4.683 | 25 → 26.25 |
| 7 | -179 → -187.95 | 1.07 → 1.1235 | 18.4 → 19.32 |
| 8 | 30.4 → 31.92 | 5.87 → 6.1635 | 17.5 → 18.375 |
| STO | flat (retained) | 6.62 → 6.951 | — |
| 9 | 85.4 → 89.67 | 5.34 → 5.607 | 20 → 21 |
| 10 | -85.4 → -89.67 | 56.83526107 → 59.677024 | 20 → 21 |

First-order before → after: EFL 99.7200604306 → 104.7060634521 mm; BFD 56.83526107 → 59.67702412 mm (stored image interval rounded to 59.677024 mm); total track 107.73526107 → 113.122024 mm; f-number 1.8 → 1.8. `built.mjs` confirms the new EFL, f-number, total track and derived iris; `probe.mjs` confirms EFL 104.7061, BFD 59.6770, total track 113.1220 mm and f/1.800. The EFL and derived iris ratios are 1.0499999999999998, equal to 1.05 to floating-point precision. All 31 stored lengths were checked after parsing and again from the saved file; maximum ratio error is 2.18 × 10⁻⁹ from rounding the final image interval. Total track differs from the exact ×1.05 product by only 0.0000001235 mm. No unrelated data field was changed.

Audit results:

- `audit:surface`: OK — no validation errors.
- `audit:aperture`: 1 lens / 1 station within 3%; traced f/1.7999999983, STO limiter; no rim limit, trace failure, iris mismatch or failed station.
- `audit:image-circle`: 1 checked, 0 undersized, 0 skipped; also passes on the visible scratch copy.
- `audit:field-coverage --below=1.01`: the hidden file was skipped, so an otherwise identical visible scratch copy was checked. Result: 100% coverage, 34.84999972 of the required 34.85 mm corner radius, modeled half-angle 18.0800114°, corner half-angle 18.0800115°, converged solve, clear corner, no limiting rim and 0 skipped. This checks chief-ray field coverage, not full-pupil illumination or the entire approximately 50° source field.

The scoped Prettier check passed for all three files; the original audit text remains byte-for-byte intact.

Open: the coordinator still owns key/file renaming; later cleanup owns element type labels, glass labels and remaining wording (closed: coordinator naming and the cleanup entry below). Rims remain inferred rather than calibrated from Abb. 2; full-pupil illumination and exact factory-product prescription identity remain unverified. Full application tests, typecheck, lint, build and browser checks were outside this authorized scoped pass. Earlier audit lines are preserved as historical records; this section supersedes their scale, name, catalog focal-length and field-angle statements.

## 2026-11-13 — Cleanup and wording pass

The cleanup addendum and both playbooks were read, together with the validator, integration and rescale reports. Example II's table crops were re-read for its ten radius signs, six glass pairs and their printed precision; Abb. 2 confirms six elements in four groups, the second-group triplet and the iris behind L5. No prescription discrepancy was found. Existing radii, spacings, rims, stop position, refractive indices, Abbe numbers and index-reference choices remain unchanged. The earlier deployment and rescale sections remain historical records; their hidden status is closed, since the coordinator has enabled visibility.

Data wording: added subtitle `DE 436,260 C, Example II — Ernostar 10.5cm f/1.8 of the Ermanox` and specs `6 ELEMENTS / 4 GROUPS`, `ALL SPHERICAL`, `f/1.8`. Element types now follow the radius signs: Positive Meniscus, Biconvex Positive, Positive Meniscus, Biconcave Negative, Biconcave Negative, Biconvex Positive. Element labels remain `Element N`; each now has a specific role. L2, L3 and L4 all carry `cemented: "C1"`; the four group annotations identify G2 over surfaces 3–6, and the single `doublets` bracket is labeled `C1 (TRIPLET)` over that complete span. This denotes one triplet, not two doublets or an added cement layer. No APD tags were added.

Glass: each old label was the common sentence about interpreting patent ν. L1 now reads `Schott N-SK11`, verified with `trylabel.mjs`: catalog nd/νd = 1.56384/60.80, Δnd = +0.00004 and Δνd = +0.05 relative to 1.5638/60.75. L2–L6 now read `Unmatched (nD 1.6053 / V 59.4)`, `Unmatched (nD 1.6485 / V 33.8)`, `Unmatched (nD 1.6270 / V 39.0)`, `Unmatched (nD 1.6223 / V 36.0)` and `Unmatched (nD 1.6220 / V 53.15)`; every numerical source pair is unchanged (Δnd = 0, Δνd = 0). These labels were also checked and resolve to no catalog row. SF2 resolves but its Δnd = −0.00081 exceeds tolerance for L3; N-SSK2 likewise resolves but Δnd = +0.00029 exceeds tolerance for L6 (Δνd = +0.12). Sumita SSK2 differs by +0.00030/−0.05 and is also excluded. The source prints L6 as 1.6220, not a three-decimal index. No nC/nF/ng fields were present to remove. N-SK11 supplies a catalog spectral equivalent without establishing historical glass identity.

Focus: the numerical infinity placeholder is unchanged, now written `1e15`; description now starts `Infinity focus only` and notes that the patent supplies no focusing data and production Ermanox cameras used helical lens focusing. The latter comes from the Swiss Camera Museum's Ermanox account, cited in the analysis. No minimum focus distance or aperture endpoint was added from another focal-length variant. Other catalog metadata was retained.

Analysis: retained the required section order, historical Bertele attribution, source numbers, source stop versus inferred apertures, normalization and spectral caveats. Removed package-process wording, ray-count and test passages, obsolete visibility statements and field-trial discussion; renamed the final section `Model Scope and Field Limitations`. Added the Science Museum Group's 1925 Ermanox record, object 1970-372, explicitly as camera/lens-family evidence without a focal-length or numerical-prescription claim, and the Swiss Camera Museum citation for attribution and focusing. The scale factor is stated once in the header and once in the analysis. Earlier cleanup ownership notes above are marked closed in place.

Engine before → after, identical: EFL 104.7060634521182 → 104.7060634521182 mm; FOPEN 1.8 → 1.8; half-field 25 → 25°; stop radius 17.444848259301825 → 17.444848259301825 mm; BFD 59.67702412697454 → 59.67702412697454 mm; total track 113.12202400000001 → 113.12202400000001 mm. Both `built.mjs` and `probe.mjs` agree. A scratch comparison confirmed every engine numeric field and every protected prescription field unchanged, including the infinity focus state.

Scoped checks: `audit:surface` reports OK, no validation errors. `audit:aperture` reports one lens/one station within 3%, no rim limit, trace failure, iris mismatch or failed station. `audit:field-coverage --all` reports one lens/one station at ≥99%, zero unsolved and zero skipped. The prescribed screenshot helper exited without producing a PNG, reporting Chrome power-monitor and DNS-watch errors; browser appearance was not verified and the attempt was not retried. Prettier was skipped as directed by the addendum; full tests, typecheck, lint, build and generators were excluded. No command or edit received an explicit sandbox/approval denial.

Open: rims remain inferred rather than calibrated from Abb. 2; L5 retains unequal 19.32/18.375 mm front/rear semi-diameters (closed: the semi-diameter pass below confirms a small drawn bevel, not a square optical rim). Exact factory radii, glass supplier/melt identity, five unmatched glass pairs and the historical sodium-D versus helium-d spectral interpretation remain unresolved. Full-pupil illumination, performance over the approximately 50° source field, image-plane performance and MTF are unquantified (645 geometric pupil transmission is quantified below; full source-field and image-plane performance remain open). A source-backed minimum focus distance and retail aperture endpoint for this 10.5 cm variant are missing; f/22 remains an authored display limit. Browser appearance remains unchecked because the screenshot helper produced no image. (closed 2026-11-13: the five unmatched-label issues are resolved by L2–L6 qualified spectral proxies; historical glass identity and all other stated limitations remain open.) (Browser appearance closed by the live screenshots inspected in the second review below.)

## 2026-11-13 — Semi-diameter pass against the patent figure

Source: complete local `patents/DE436260C.pdf`, Example II on page 2 and Abb. 2 on page 4. The front page prints publication 436260, issue date 28 October 1926, effective date 6 December 1924, and owner Firma Ernemann-Werke, A.-G. in Dresden. No inventor is printed; Bertele remains a qualified historical attribution. No new naming or metadata discrepancy was found. All prescription values, catalog metadata, the stop and focus state remain unchanged.

### Figure scale and limits

The PDF contains native 300 dpi, 2592 × 3508 pixel scans. At that resolution Abb. 2 has a local axis near x = 640, with approximate vertex rows S1 789, S2 867, S3 879, S4 1013, S5 1091, S6 1108, S7 1161, S8 1170, S9 1310 and S10 1372. The first-to-last optical vertex span is about 583 px for 53.445 mm at the file's ×1.05 scale, or 10.91 px/mm. Independently, S3–S6 spans about 229 px for 20.7375 mm, or 11.04 px/mm; S8–S9 spans about 140 px for 13.1145 mm, or 10.68 px/mm. L1's center thickness gives approximately 10.23 px/mm, and L6's approximately 11.06 px/mm. These agree to within roughly 6%.

Transverse curvature was also checked, excluding labels and hatching by following the outer contour over x = 500–740. Circle fits give S1 radius about 569 px / 52.71 mm = 10.79 px/mm and S10 about 952 px / 89.67 mm = 10.61 px/mm. The S9 arc instead gives about 776 px / 89.67 mm = 8.66 px/mm, despite the table's equal and opposite last radii. The very thin L5 thickness is comparable with scan stroke width. Thus 10.9 px/mm is an approximate overall fit, not proof of calibrated per-face apertures; the rim decisions use proportions with several-percent uncertainty. The sketch and patent are compared at this matched scale.

Optical rim endpoints exclude radius/thickness leaders, stop ticks and hatch strokes. Abb. 2 and the supplied public 10.5 cm section agree on six elements/four groups, L2–L4 as the cemented second component and the iris behind L5. Both show a small bevel at L5's rear corners: the outer sidewall continues beyond the curved rear face's optical endpoint. L5 is not drawn with equal optical face radii. No special-glass or aspherical positions are identified by either drawing; all six modeled elements are spherical. The public section supports grouping and proportions, not exact factory dimensions or historical glasses.

| Surfaces | Starting sd (mm) | Approximate figure sd at 105 mm scale | Final sd (mm) | Decision |
| --- | --- | --- | --- | --- |
| 1, 2 | 29.4, 29.4 | 27–28; figure/stored about 0.93 | 29.4, 29.4 | Retained: near the scale/measurement uncertainty, and the iris-admitted front beam reaches 28.038 mm. |
| 3, 4, 5, 6 | 26.25 each | 26–27; ratio about 1.00 | 26.25 each | Retained: common triplet rims agree with the drawing. |
| 7 | 19.32 | About 19.1; ratio 0.99 | 19.32 | Retained: the actual axial beam reaches 19.3077 mm. |
| 8 | 18.375 | Roughly 17.5–18.0 at the beveled optical endpoint | 18.375 | Retained: consistent with the small drawn bevel within scan uncertainty; no square-face raise is warranted. |
| 9 | 21.0 | Roughly 18.3–18.6; ratio about 0.88 | 20.2 | Reduced toward the figure, limited by the corner-light rule. |
| 10 | 21.0 | Roughly 18.3–18.6; ratio about 0.88 | 20.2 | Same height as surface 9, preserving the square rear singlet. |

### Ray clearance, illumination and stop

The baseline passes the surface, aperture, image-circle and 645 chief-ray corner audits. Before and after, the engine gives EFL 104.706063452 mm, nominal f/1.8, source half-field 25°, tracingHalfField 28.089035670°, iris radius 17.444848259 mm and total track 113.122024 mm. The 645 corner is clear at 18.0800°, reaching the required 34.85 mm semi-diagonal with 100% chief-ray coverage; no limiting rim or skipped station is reported.

The raw clear-aperture helper launches a 29.085 mm paraxial entrance radius when given f/1.8 and consequently requires a 18.116 mm iris, exceeding the actual 17.444848 mm hole. Its S3/S4/S7 axial flags therefore describe a larger beam than the engine admits. The longitudinal spherical-aberration diagnostic was read before considering any raise: −0.464/+0.056/−0.105/−0.149 mm at pupil fractions 1/0.85/0.7/0.5. A ghost trace solved directly to the existing iris gives the correct entrance radius 28.038379476 mm. The corresponding `clearap2` launch parameter is 1.867191781554; this is a helper input to reproduce that physical ray, not a changed nominal lens f-number.

At that iris-admitted beam, axial ray radii on S1–S10 are 28.0384, 27.6974, 26.0747, 25.4227, 24.3821, 20.1356, 19.3077, 17.4652, 17.2623 and 17.0609 mm. All final rims clear them; S7 has the smallest allowance, 0.01228 mm. The corrected helper shows no axial or corner-chief clip. Its lower full-bundle root is not found, so its bundle column is not used to certify illumination; the engine's full-pupil lattice supplies that result. Aperture audit remains iris-limited with no rim, trace, iris-mismatch or failed station.

The committed baseline and final file were compared with `rimcost.mjs --loo`, at infinity, the only printed focus state. At fields 0/2.6/5.2/7.7/10.3/12.9/15.5/18.1°, geometric pupil transmission is respectively:

| Rims | Geometric pupil transmission (%) |
| --- | --- |
| Starting | 100.0 / 97.7 / 94.5 / 90.9 / 86.9 / 81.7 / 73.7 / 63.3 |
| Final | 100.0 / 97.7 / 94.5 / 90.9 / 86.9 / 80.2 / 71.5 / 60.7 |

No field loses 3 percentage points. A figure-sized 18.5 mm rear singlet gives only 54.2% at the corner and loses 9.1 points. Trial 20.0 mm loses 3.5 points; 20.1 mm loses 3.1; 20.2 mm is the smallest tenth-mm trial meeting the rule. The leave-one-component-out restoration identifies only S9/S10 as the source of the final light loss; restoring their 21 mm rims restores the starting curve. Thus the rear remains larger than the schematic figure, and its slight height excess over L5 remains, rather than widening L5 without optical evidence. The values measure pupil transmission, not cosine falloff or photometric calibration.

L5's current rear sag is 5.819315 mm, leaving 0.344185 mm to the source-defined iris plane. Raising its rear optical radius to 19.32 mm would give sag 6.510868 mm, extending 0.347368 mm beyond that plane despite passing the surface validator. That square-face trial was rejected on the drawing and clearance evidence; it was not applied. The final rear singlet leaves 9.255853 mm from the iris plane to its nearest front-rim point. No iris position or radius change is recommended or applied, and no lands, cuts or validator overrides are added.

### Final checks and visual comparison

Surface audit: OK, no validation errors. Aperture audit: one station within 3% of nominal, zero rim limits, trace failures, iris mismatches or failed stations. Image-circle audit: one checked, zero undersized, zero skipped. Field-coverage audit: one station at 100%, corner clear, zero unsolved or skipped. The complete trial set passed the surface and corrected real-ray checks before editing; the same checks, engine build and illumination comparison passed on the saved file. No asphere departures need updating. A parsed comparison against the pre-edit scratch snapshot confirms that only S9/S10 semi-diameters changed; every other data field is identical. Scoped diff whitespace checks pass. The scoped Prettier command exits successfully, but these lens-data/Markdown paths are excluded by the repository ignore rules, so this is not an independent formatting certification. No whole-file formatter was run.

The matched-scale side-by-side sketch was rendered through the coordinator's queue and inspected at `/private/tmp/claude-501/-Users-ronbuening--claude-spares-spare-EIkiKm/8d989648-1a4e-43f9-bdb4-c4cbb0d8c850/scratchpad/sd/ernostar/overlay.png`. It shows the retained triplet and beveled L5, with a modestly smaller, still square L6; blue marks the baseline. This is the prescribed model-sketch substitute, not a live browser check. The coordinator retains the live-page check. Exact factory apertures, full source-field illumination, five unmatched glass pairs, source-backed close focus and retail f/22 remain open. No sandbox refusal occurred. (closed 2026-11-13: the five unmatched-label issues are resolved by L2–L6 qualified spectral proxies; historical glass identity and all other stated limitations remain open.)

## 2026-11-13 — Glass proxies and catalog metadata

The pre-relabel baseline is `.lens-work/base1123glass/ErnemannErnostar105cmf18.data.ts`. Its only differences from the current data file are the five glass labels below. Each new label has the form `ROW (spectral proxy; patent nD … / V …; supplier and melt unspecified)` and retains the printed pair. Catalog values come from `glassCatalog.ts`; differences are catalog minus printed, not changes to the authored nD/V values.

| Element | Old label → new label | Catalog nd | Catalog νd | Δnd | Δνd |
| --- | --- | --- | --- | --- | --- |
| L2 | `Unmatched (nD 1.6053 / V 59.4)` → `K-SK7 (spectral proxy; patent nD 1.6053 / V 59.4; supplier and melt unspecified)` (Sumita catalog) | 1.60729 | 59.50 | +0.00199 | +0.10 |
| L3 | `Unmatched (nD 1.6485 / V 33.8)` → `S-TIM22 (spectral proxy; patent nD 1.6485 / V 33.8; supplier and melt unspecified)` (Ohara catalog) | 1.647689 | 33.792803 | −0.000811 | −0.007197 |
| L4 | `Unmatched (nD 1.6270 / V 39.0)` → `H-BaF8 (spectral proxy; patent nD 1.6270 / V 39.0; supplier and melt unspecified)` (CDGM catalog) | 1.62604 | 39.07 | −0.00096 | +0.07 |
| L5 | `Unmatched (nD 1.6223 / V 36.0)` → `TIM11 (spectral proxy; patent nD 1.6223 / V 36.0; supplier and melt unspecified)` (Ohara catalog) | 1.620955 | 35.880852 | −0.001345 | −0.119148 |
| L6 | `Unmatched (nD 1.6220 / V 53.15)` → `S-BSM22 (spectral proxy; patent nD 1.6220 / V 53.15; supplier and melt unspecified)` (Ohara catalog) | 1.622296 | 53.169067 | +0.000296 | +0.019067 |

L1 remains `Schott N-SK11`, a catalog equivalent with nd/νd = 1.56384/60.80 and Δnd/Δνd = +0.00004/+0.05. L2–L6 satisfy the repository proxy rule of about 0.25 in Abbe number and about 0.002 in index; they do not satisfy an exact-identity claim. The engine keeps the printed index at the element's reference line and borrows only the selected catalog row's wavelength dependence. The printed nD/V, historical sodium-D versus helium-d approximation, radii, spacings, rims, stop and focus state remain unchanged. No historical glass, supplier or melt is identified.

`chan.mjs` was run from the worktree on the pre-relabel baseline and current data file. Channels R/G/B/V represent C/d/F/g. The following paraxial back focal distances and offsets relative to the d-line focus are before → after; offsets are calculated by the helper before rounding the displayed BFDs.

| Line / channel | EFL (mm), before → after | BFD (mm), before → after | BFD shift vs d (µm), before → after |
| --- | --- | --- | --- |
| C / R | 104.8381 → 104.8456 | 59.8251 → 59.8319 | +148.1 → +154.8 |
| d / G | 104.7061 → 104.7061 | 59.6770 → 59.6770 | 0.0 → 0.0 |
| F / B | 104.5420 → 104.5374 | 59.4610 → 59.4565 | −216.0 → −220.6 |
| g / V | 104.5422 → 104.5532 | 59.4059 → 59.4140 | −271.1 → −263.0 |

The helper's REF channel remains EFL 104.7061 mm, BFD 59.6770 mm and offset 0.0 µm before and after. These are modeled proxy-dispersion results, not measurements of the historical lens. The five unmatched-label issues in the earlier open notes are closed in place; factory identity, historical dispersion and the other documented limitations remain unresolved.

Catalog metadata: no name, mount, format, field or other metadata change is assigned or present relative to the pre-relabel baseline. The existing name, fixed-lens-camera mount, 645 format, 105 mm marketing focal length, 104.71 mm design focal length and approximately 50° source field are retained. Only the two assigned Markdown files are edited; the data file is read-only for this task.

Scoped checks: the requested two-file `npx prettier --write` and `--check` commands exit successfully, but the repository ignores these paths (`prettier --file-info` reports `ignored: true` for the analysis), so their success does not certify formatting. Every original audit line is retained, with only the two unmatched-glass closure annotations appended in place. The data file is byte-identical to the pre-edit snapshot. No tests, typecheck, lint, build, generators, servers or git state changes are run; no tool call or edit is refused.

Pre-existing text discrepancy flagged outside the glass assignment: the analysis's rear-component clearance sentence gives 9.444691 mm, while the latest semi-diameter audit above gives 9.255853 mm for the current 20.2 mm L6 rim. The analysis clearance sentence is not changed in this glass-only update. (Closed the same day: the analysis now gives 9.255853 mm.)

## 2026-11-13 — Second review: diagram, labels and movement

Compared the complete local `patents/DE436260C.pdf` (Example II, page 2; Abb. 2, page 4), the supplied public 10.5 cm section in the scratch `v-ernostar/diagrams/` folder, the current six element inspectors, and the page served at port 5211. Both drawings show six spherical elements in four components, the L2–L4 cemented second component and the iris behind L5. Neither supplies special-glass or aspherical markings. No source prescription number, rim, numeric gap, iris setting, catalog field or source field changed.

### Figure and light-rule findings

A fresh native-300-dpi axis-window profile reproduces vertex bands S1 787–793, S2 863–870, S3 877–883, S4 1011–1025, S5 1087–1098, S6 1106–1111, S7 1158–1163, S8 1167–1173, S9 1307–1314 and S10 1368–1373 px. The approximately 581 px first-to-last span over 53.445 mm gives 10.87 px/mm; the triplet span gives approximately 11.0 px/mm and the S8–S9 interval approximately 10.7 px/mm. The transverse contour reaches approximately 289 px at the triplet and 201 px at the rear singlet: approximately 26.5 and 18.4 mm at 10.9 px/mm. These corroborate the earlier proportional readings. The schematic unequal rendering of the nominally equal/opposite S9/S10 arcs still prevents a calibrated per-face aperture inference. No rereading outside the recorded uncertainty justifies another rim change.

| Cut or land | Saved baseline (mm) | Current → final (mm) | Figure evidence and verdict | Light cost |
| --- | --- | --- | --- | --- |
| S9/S10, square L6 cut | 21.0 / 21.0 | 20.2 / 20.2 → unchanged | Approximately 18.3–18.6 mm in Abb. 2; keep the existing slight-loss compromise, rather than taking the smaller drawn rim. | Worst 2.5 percentage points at the 645 corner. |
| L5 bevel, not a new cut or land | 19.32 / 18.375 | 19.32 / 18.375 → unchanged | Both drawings show beveled optical endpoints. A square 19.32 mm rear face would extend 0.347368 mm past the fixed iris plane; the retained rear face clears it by 0.344185 mm. | No separate change from the saved baseline. |
| Mechanical lands/cuts | None | None | No `rimExtensionSd` or `rimCutDepthMm`; none warranted by the drawings. | None. |

The final `rimcost.mjs --loo` result is 2.5 points worst loss, within the cumulative 3-point allowance. Saved/current pupil transmission at fields 0/2.6/5.2/7.7/10.3/12.9/15.5/18.1° is 100.0/97.7/94.5/90.9/86.9/81.7/73.7/63.3% versus 100.0/97.7/94.5/90.9/86.9/80.2/71.5/60.7%. Restoring only S9/S10 recovers the lost light. Before and after this review, the 645 corner remains 60.7%; chief-ray coverage is 100%, reaching 34.85 mm at 18.0800°. Rounded curve entries explain why their displayed corner subtraction is 2.6 rather than the tool's unrounded 2.5-point result.

The paraxial-launch `clearap.mjs` flags reproduce the previously documented overdriven beam. `lsa.mjs` reproduces −0.464/+0.056/−0.105/−0.149 mm. The iris-matched `clearap2.mjs` launch parameter 1.867191781554 gives entrance radius 28.038 mm, stop radius 17.445 mm and no axial or corner-chief clip; this launch parameter is not the lens f-number. Its missing lower bundle root remains unsuitable for illumination claims. No rim was raised for that helper artifact, and no iris relocation is recommended.

### Inspector and glass changes

| Field | Before | Final | Evidence |
| --- | --- | --- | --- |
| L1–L6 `focalLengthMm` | Missing; every inspector displayed `FL = −` | +126.71 / +56.92 / +105.90 / −47.83 / −43.76 / +72.96 mm | `probe.mjs --elements`, isolated thick elements in air at the reference index, rounded to two decimal places. |
| L1 glass label | `Schott N-SK11` | `N-SK11 (SCHOTT catalog equivalent; production supplier unspecified)` | `trylabel.mjs` resolves the same N-SK11 row: 1.56384/60.80, Δnd = +0.00004, Δνd = +0.05. This is a qualification of the same curve, not a spectral change. |

Element names L1–L6, types and roles agree with the radius signs. G1 spans S1–S2, G2 S3–S6, G3 S7–S8 and G4 S9–S10. The patent gives no competing group names; the sequential G labels are appropriate. One `C1 (TRIPLET)` bracket spans S3–S6; all three member inspectors show TRIPLET C1. There is no separate modeled cement layer, false doublet, aspheric surface or APD tag. Labels and brackets are readable without collision on the live page.

All six glass labels resolve compatibly. L2 K-SK7, L3 S-TIM22, L4 H-BaF8, L5 TIM11 and L6 S-BSM22 remain qualified spectral proxies under the site's proxy tolerance. Their catalog-minus-printed Δnd/Δνd are +0.00199/+0.10, −0.000811/−0.007197, −0.00096/+0.07, −0.001345/−0.119148 and +0.000296/+0.019067 respectively using the listed catalog pairs. Evaluating K-SK7's coefficients gives νd about 59.47 rather than its listed 59.50; both satisfy the same tolerance. Tiny differences among already available near-equal alternatives do not establish a better historical identification. No exact-window replacement for L2–L6 was found in `glassnear.mjs` or the vendor AGF scan.

Optional catalog additions, report only: Ohara BSM7, nd 1.607291/νd 59.375631 (`tmp/pdfs/ohara-260701/OHARA_260701.AGF`, NM line 2557), would reduce L2's Abbe mismatch to −0.024369; Hoya F11, 1.620962/35.947308 (`tmp/pdfs/HOYA20260707_include_obsolete.agf`, NM line 12642), would reduce L5's mismatch to −0.052692. Sumita SF12, 1.648310/33.800000 (`tmp/pdfs/sumita-2025-11-07-all.agf`, NM line 12411), is closer to L3 in index but still misses the exact window by Δnd = −0.000190. None is an exact glass identification; all would require the same proxy qualification and source-backed coefficient ingestion. No shared catalog edit was made.

Page 2 prints only the six nD/ν pairs, with no glass trade name, C/F/g indices or partial-dispersion quantity. None of the five L2–L6 pairs repeats exactly in Examples I or III; this alone does not identify an optimizer or a physical melt. The four-page patent contains no aberration plots, so no printed C/d/F/g, astigmatism or distortion curve is available for a numerical comparison. There is no constant-index-only medium and no missing printed spectral anchor. The before/after model C/d/F/g BFDs are identical: 59.8319/59.6770/59.4565/59.4140 mm, corresponding to +154.8/0/−220.6/−263.0 µm relative to d. Modeled dispersion remains qualified, not historical color-performance evidence.

### Movement, source metadata and final checks

G1, G2, G3 and G4 each have 0 mm focus and zoom displacement. There are no variable gaps, focus keyframes or zoom stations; the engine probe at slider fractions 0 and 1 gives identical EFL/BFD/track. The patent supplies only the infinity prescription. The existing focus description correctly distinguishes this from production Ermanox helical focusing, corroborated by the cited Swiss Camera Museum page. Both movement overlays explicitly state that no focus or zoom group movement is modeled; requesting `focus=1` leaves the geometry and infinity distance unchanged. No direction or ordering correction was needed.

Page 1 prints Firma Ernemann-Werke, A.-G. in Dresden, issue date 28 October 1926 and effective date 6 December 1924; no inventor is printed. `Ernemann-Werke AG` matches the canonical corporate-history key and the only assignee spelling found in current lens data. Bertele remains a qualified historical attribution. No assignee consolidation is needed for this file, and no source field was edited.

Before → after: EFL 104.706063452 → 104.706063452 mm, half-field 25 → 25°, tracing half-field 28.089035670 → 28.089035670°, f/1.8 → f/1.8 and iris radius 17.444848259 → 17.444848259 mm. Surface audit reports OK with no validation errors; aperture audit reports one station within 3%, zero rim limits, trace failures, iris mismatches or failures. Image-circle audit reports one checked, zero undersized/skipped. Field coverage reports one clear 100% corner, zero unsolved/skipped. `built.mjs` does not throw, and the final element probe agrees with all six newly stored focal lengths. A parsed comparison against the pre-review snapshot confirms only those six fields and the L1 glass-label qualification changed.

Inspected the fresh post-edit live page, all six inspectors, `focus=1` and both movement overlays. The six focal lengths and qualified glass wording render correctly; the C1 triplet, L5 bevel and square L6 remain intact. Live shot: `/private/tmp/claude-501/-Users-ronbuening--claude-spares-spare-EIkiKm/8d989648-1a4e-43f9-bdb4-c4cbb0d8c850/scratchpad/sd/ernostar/rv-el-1.png`; page and remaining inspectors use the same folder and `rv-` prefix. New matched-scale red/current, blue/baseline overlay: `/private/tmp/claude-501/-Users-ronbuening--claude-spares-spare-EIkiKm/8d989648-1a4e-43f9-bdb4-c4cbb0d8c850/scratchpad/sd/ernostar/rv-overlay.png`. No changelog entry, shared metadata/catalog edit, generator, broad test gate or git-state change was made. No sandbox refusal occurred.

The two-file Markdown `npx prettier --check` exits successfully; these paths are ignored by the existing `.prettierignore`, so this is not an independent formatting certification. No whole-file formatter was run. The scoped `git diff --check` reports no whitespace errors.

Open: inferred factory apertures, exact factory prescription and historical supplier/melt/dispersion identity, the sodium-D versus helium-d approximation, full approximately 50° source-field and image-plane performance, a source-backed close-focus distance and the retail f/22 limit remain unestablished. Optional vendor-row additions above remain proposals for the shared catalog, not changes to this lens.
