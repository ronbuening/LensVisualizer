# Warmisham f/1.5 Petzval-type objective (US 1,797,202) — audit log

## Package audit (as delivered, reworded)

Source: US 1,797,202 A, the single numerical example (Fig. 3). All printed lengths multiplied by 100.

- The data file passed the schema and geometry checks with no errors and needed no geometry override.
- The modelled iris has at least 14.65 mm of axial clearance in front and 16.3 mm behind across its full opening.
- Axial beam at f/1.5: of 201 rays across the pupil, 189 pass and the outer 12 are cut. All 181 rays within the central 90 % of the pupil pass.
- An independent paraxial matrix calculation agrees with the engine's focal length and back focus to rounding error. Seven independently traced real rays within the central 90 % of the pupil agree with the engine's image heights to rounding error.
- Off axis, 3 of 9 sample rays are cut at 10° and 6 of 9 at 20°. The model makes no full-field imaging claim.
- Zero air space between R9 and R10: kept as printed, as two separate surfaces with 0 mm between them. The separation is zero on the axis and positive everywhere else, reaching 6.98 mm at the 32 mm modelled rim. Traced rays cross the two surfaces in order. No gap was added and the surfaces were not merged into a cemented one. This confirms the modelling choice; it is not a statement about how such a pair would be mounted.
- Stop and rims are estimates, colour is estimated from the printed nD and V, and the model covers infinity focus only.

## 2026-11-17 — Deployment validation

**Checked.** An independent re-read of the patent page images (drawing sheet and specification page 2 at 300–600 dpi): all 11 radii with their signs, all 10 axial distances, 6 nD values and 6 V values, the Chance type numbers, the printed focal length 1.084 and aperture F/1.5, and the front-page inventor, assignee and dates. No transcription mismatch. The uniform factor of 100 holds for every radius and distance. Figure 3 agrees with the model in element count, grouping, the one cemented pair and the shape of each element; the figure is diagrammatic and shows a small axial gap where the table prints .000.

**Verdict.** Valid with fixes: a faithful transcription of the patent's only example. No product link is documented. Kapella Limited was the patent-holding company of Taylor, Taylor & Hobson, which supports filing it as a Cooke design; the Cooke compendium records a 1 inch f/1.5 Kinic sample but gives no construction for it, and no construction diagram of a six-element f/1.5 Cooke Petzval-type lens was found.

**Changes.**

- `maker`: "Kapella / Arthur Warmisham" → "Cooke" (the old string is not a maker).
- `source.patentNumber`: "US 1,797,202" → "US 1,797,202 A" (house form).
- `source.example`: `{ label: "Figure 3", id: "3" }` → `{ label: "Sole example", id: null }` (the patent has exactly one numerical example).
- Elements L2 and L3: added `cemented: "C1"`; `doublets`: empty → one entry for surfaces 3–5 (the printed cemented pair was not marked).
- Element `type`: "Patent element" on all six → Positive Meniscus, Biconvex Positive, Biconcave Negative, Negative Meniscus, Positive Meniscus, Positive Meniscus (from the signs of the printed radii).
- Added element `focalLengthMm` (356.46, 87.74, −114.15, −124.46, 141.75, 166.41) and short optical `role` strings.
- Float noise rounded with no change of value: thickness 8.200000000000001 → 8.2; radii 193.79999999999998 → 193.8, −119.04999999999998 → −119.05, 211.90000000000003 → 211.9, 59.099999999999994 → 59.1, 133.29999999999998 → 133.3.
- `focalLengthMm.design`: 108.35141906269206 → 108.35. Last gap (computed paraxial back focus): 51.291493748071446 → 51.2915.
- `closeFocusM`: 1000000000000000.0 → 1e15 (same value).
- `focus.description`: rewritten in plain words (the old text ran words and numbers together).
- Keys unquoted, a plain-English header comment added, file formatted in the house style.
- Analysis rewritten to the standard section layout. This audit's first section reworded from the delivered log, keeping its findings.
- Not changed: every printed radius, distance, index and V value; the zero air space between R9 and R10; the stop position; all rims; `key`, `name`, `subtitle`, `specs`; `visible: false`.

**First-order values after the changes.** Focal length 108.3514 mm (printed 108.4, −0.05 %), f/1.5, paraxial back focus 51.2915 mm, front vertex to image 141.8915 mm, modelled stop semi-diameter 25.62 mm. Element focal lengths match the stored values.

**Audit results.** Surface audit: OK, no validation errors. Aperture audit: no surface below the stated on-axis ray, nothing to raise. Real-ray clearance at 10 mm image height: no flags (axial ray 36.12 mm at surface 1 against a 40 mm rim; the rear component needs at most 24.75 mm against 32 mm). At 20 mm image height: 9 % and 6 % one-sided vignetting at surfaces 1 and 2, chief ray clear. The real f/1.5 edge ray reaches 27.30 mm at the stop against the modelled 25.62 mm, which is the cause of the outer axial rays being cut. Image-circle and field-coverage audits skip the file (hidden, no image format).

**Open.**

- Naming pass: `key`, file name, `name`, `subtitle` and `specs` still carry the delivered wording ("PATENT ONLY; NOT MAXIMUM RETAIL IDENTITY", "LITERAL ZERO-AXIS AIR; INFINITY ONLY", "NO PROVEN RETAIL IDENTITY"). House form would be a Cooke 108mm f/1.5 (US 1,797,202 Design) name.
- Glass labels: none stored. The patent's Chance types are 9002 (L1), 7863 (L2), 5093 (L3, L4) and 4873 (L5, L6).
- Rims: estimates only. The figure draws front and rear components at equal height but is not to scale, so it gives no usable reading.
- The zero air space D9-10 could be confirmed against a scan of GB 258,092 if one is obtained.
- No image format or mount is set; the patent states no field.
