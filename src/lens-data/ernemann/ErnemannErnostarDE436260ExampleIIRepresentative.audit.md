# Ernostar Example II qualified pre-integration audit

One hidden representative, not factory85mm/100mm prescription or sourcefieldcoverage certification. Governing table is cropped/concatenated DE436260 original-content reproduction; primary designer article supports commercialf1.8/50°six4family, not uniqueexample. Sourceprovenance and scope remain explicit.

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
- Focus description: `NO_INTERNAL_RECONSTRUCTION: infinity representative only` → `Only the infinity prescription is modeled because the patent provides no focusing data.` The infinity placeholder is unchanged.
- Analysis: outdated cropped-source caveat and source link → complete four-page local patent reference; authorship and normalised focal-length statements now distinguish the historical attribution and sold focal lengths. The aperture discussion now records the surface-7 correction and unequal L5 rims, and identifies the unchanged 17.5 mm rear rim as the source of the retained stop-clearance value. Old 36 × 24 mm coverage trials → the current 645 audit results; earlier full-field fan results are labeled as pre-correction evidence, without claiming full-pupil illumination.

First-order values after the change, from `built.mjs`: EFL 99.7200604306 mm, f-number 1.8, total track 107.73526107 mm, stop radius 16.6141411993 mm and source half-field 25°. The stored derived back focus remains 56.83526107 mm; no focal fit, scaling or source-value adjustment was made.

Audit results:

- `audit:surface`: OK — no validation errors.
- `audit:aperture`: 1 lens / 1 station within 3%; no rim limit, trace failure, iris mismatch or failed station. The exact traced f-number is 1.7999999983, with STO as the limiter.
- `audit:image-circle`: 1 checked, 0 undersized, 0 skipped for 645 (69.7 mm diagonal). An otherwise identical visible scratch copy also passed.
- `audit:field-coverage --below=1.01`: the hidden file is skipped, so an otherwise identical scratch copy with `visible: true` was checked: 100% coverage, 34.85 mm of the required 34.85 mm corner radius, 18.9132° modeled/corner half-angle, corner clear, no limiting rim and 0 skipped. The production data remains hidden. This is chief-ray field coverage, not full-pupil transmission or certification of the patent's 50° field.

The scoped Prettier check passed for all three files. A comparison against the delivered files confirmed that every radius, spacing, glass value and other rim is unchanged, that the lens remains hidden, and that every existing audit line is preserved.

Open: the later cleanup pass still owns key/file naming, element type labels, glass labels, remaining wording and the catalog focal-length presentation. Rims remain inferred rather than calibrated measurements of Abb. 2; the aperture proposal also lists 18.4 mm for both L5 faces if a square rim is later required, but this assignment authorizes only surface 7. Full-pupil illumination and exact factory-product prescription identity remain unverified. The existing audit lines above are preserved as historical records; this section supersedes their old source-provenance and rim statements.
