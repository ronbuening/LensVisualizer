# Audit: COOKE 100mm f/4.5 (US 1,361,207 Example II Design)

The patent drawing and the Example II table were read from the page images. The model uses the printed radii, axial thicknesses and separations multiplied by 100, and the printed nD and V of the two glasses. The iris position and the 11.5 mm rims are estimates. The computed D-line focal length is 101.56 mm against the nominal 100 mm; this is recorded and nothing was fitted. Example I of the same patent shows a larger focal-length discrepancy in the US print and is not part of this file.

The data file passes the schema and geometry checks. On axis, the central 90 % of the pupil passes in full and 195 of 201 sampled rays pass over the whole pupil. Off-axis ray counts were diagnostic only and are not a coverage figure. The file was delivered as a patent design with no product claim (closed 2026-11-17: renamed and reworded in the cleanup pass below).

## 2026-11-17 — Deployment validation

An independent re-read of the patent page images (US 1,361,207, drawing sheet and specification pages 1–2, at 300–450 dpi) checked every value of Example II: 8 radii with their signs, 7 thicknesses and separations, 4 indices and 4 V values. All agree with the data file after multiplying lengths by 100. The British specification GB 113,590 A, page 2, prints the same Example II numbers. The front page gives Arthur Warmisham as inventor, Taylor, Taylor & Hobson Ltd. as assignee, filing on January 7, 1918 and grant on December 7, 1920.

Verdict: valid, with form fixes. Example II is a different prescription from Example I (the Aviar form). The patent describes it as a long-focus, moderate-field design; no source was found that ties it to a named Aviar series, so it stays a patent design of the Aviar family with no product claim.

Focal-length residual: the printed table traces to 101.56 mm, 1.56 % above the stated 100 mm. Both the US and GB prints carry the same numbers. A scan of single-value changes (one digit, two digits swapped, or a sign, on each radius and spacing) gave about twenty candidates within 0.4 % of 100 mm (for example r4 1.099, S3 .0979, r8 .3322), none unique, so no misprint is established and the printed values are kept.

Changes made:

- `maker`: "Taylor, Taylor & Hobson" → "Cooke" (house maker for this company).
- `source.patentNumber`: "US 1,361,207" → "US 1,361,207 A" (house form).
- `source.example.label`: "Example 2" → "Example II" (as printed).
- `source.assignees`: "Taylor, Taylor & Hobson Ltd." → "Taylor, Taylor & Hobson Limited" (corpus spelling).
- `catalog.focalLengthMm.design`: 101.56052899987043 → 101.56 (rounding).
- Elements: added `focalLengthMm` (51.56, −47.74, −58.08, 44.08) and plain optical `role` strings; `indexReferenceNote` reworded in plain English.
- `focus.closeFocusM` written as 1e15; `focus.description` replaced with a plain infinity-only statement (the residual and the inferred items moved to the header comment).
- Empty `groups` and `doublets` arrays removed.
- Header comment added (source, example, scale, residual, inferred stop, rims and back focus).
- Analysis rewritten to the standard section layout.

No radius, thickness, index, V value or rim was changed.

First-order values after the changes: focal length 101.5605 mm, f/4.5, stop radius 8.4995 mm, back focus 85.6178 mm (computed paraxial image distance), first surface to image 114.04 mm. Element focal lengths 51.56, −47.74, −58.08 and 44.08 mm.

Audit results: the surface validator reports no errors. The aperture audit finds no surface below the f/4.5 axial ray (the beam needs 11.28 mm at surface 1; rims are 11.5 mm). The clearance trace at image heights 18, 26.8 and 36.4 mm shows no axial clipping and no blocked chief ray, but heavy vignetting: surfaces 1–2 cut 68–79 % of one side of the bundle at 10–20°. The image-circle and field-coverage audits were not run, since the file has no image format. The smallest glass edge is 0.12 mm.

Open:

- Key, file name, `name`, `subtitle` and `specs` wording ("PATENT ONLY; NO RETAIL IDENTITY", "ESTIMATED MIDPOINT IRIS AND RIMS") for the cleanup pass; suggested name "COOKE 100mm f/4.5 (US 1,361,207 Design)".
- Element `type` labels could say "Biconvex Positive" / "Biconcave Negative"; no glass labels are assigned (dense baryta crown 1.6116 / 56.4, heavy flint 1.6206 / 36.2).
- Rims: Fig. 2 draws the outer lenses about 20 % taller than the inner ones; the uniform 11.5 mm rims do not follow the figure, and the outer elements' edge thickness limits how far they can grow. For the semi-diameter pass.
- The stop is inferred at the midpoint of the middle air space; the patent shows none.
- Whether to cite GB 113,590 A (1918) instead of the US grant, to match the Example I file.

## 2026-11-17 — Cleanup and wording pass

Text and metadata only; no radius, thickness, index, V value, stop or rim was changed.

Fields changed:

- `subtitle`: "1920 Example II 100 mm f/4.5; PATENT ONLY" → "US 1,361,207 A, Example II — long-focus form of the Aviar four-lens type".
- `specs`: "4 ELEMENTS / 4 GROUPS", "PATENT ONLY; NO RETAIL IDENTITY", "ESTIMATED MIDPOINT IRIS AND RIMS" → "4 ELEMENTS / 4 GROUPS", "ALL SPHERICAL", "DESIGN F/4.5".
- Element `label`: "L1"–"L4" → "Element 1"–"Element 4"; `type`: "Biconvex" / "Biconcave" → "Biconvex Positive" / "Biconcave Negative"; `role` strings reworded to say what each element does.
- Element `glass` added: "Unmatched (nD 1.6116 / V 56.4, dense baryta crown)" on elements 1 and 4, "Unmatched (nD 1.6206 / V 36.2, heavy flint)" on elements 2 and 3. No exact catalogue row exists: the nearest are SK1 (Sumita) 1.61025 / 56.5 (Δnd −0.00135, Δνd +0.1) and Schott F2 1.62004 / 36.37 (Δnd −0.00056, Δνd +0.17), both outside the 0.0001 index tolerance.
- `indexReferenceNote` shortened; `focus.description` → "Infinity focus only; the patent gives no close-focus data."
- Header comment: one sentence added that Example I is the wide-field form associated with the Cooke Aviar.
- Data file reformatted to plain identifier keys.
- Analysis: title and first mention now use the lens name; the collection-internal remark about Example I removed; the misprint-trial passage reduced to its conclusion; "Model Verification" heading renamed "Model Scope"; glass paragraph states the nearest catalogue rows; element headings read "Element N (LN)".

There are no cemented surfaces, so the file carries no `cemented` tags and no `doublets`.

Engine numbers before and after are identical: focal length 101.56052899987043 mm, f/4.5, half field 26.6003°, stop radius 8.499502 mm, back focus 85.6178 mm. The surface validator reports no errors; the aperture audit reports the lens within 3 % of the stated f-number with no rim, trace or iris limit.

Open:

- `lensMounts`, `imageFormat` and an image circle: the patent states no format or field angle, so none is set.
- Rims: Fig. 2 draws the outer lenses about 20 % taller than the inner ones; the uniform 11.5 mm rims do not follow the figure and vignette heavily off axis (surfaces 1–2 cut 68–79 % of one side of the bundle at 10–20°). Outer-element edge thickness (0.12 mm at 11.5 mm) limits growth. For the semi-diameter pass.
- The stop is inferred at the midpoint of the middle air space; the patent shows none.
- The printed table computes to 101.56 mm against the stated 100 mm; no misprint established in either the US or the GB print.
- Whether to cite GB 113,590 A (1918) instead of the US grant.
- No source ties Example II to a named Aviar series or focal length; the Aviar link for the patent family rests on Wikipedia and a Wikimedia Commons file title, read as search excerpts.

