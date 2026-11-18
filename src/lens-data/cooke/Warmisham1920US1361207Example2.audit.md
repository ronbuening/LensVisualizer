# Audit: Warmisham US 1,361,207 Example II

The patent drawing and the Example II table were read from the page images. The model uses the printed radii, axial thicknesses and separations multiplied by 100, and the printed nD and V of the two glasses. The iris position and the 11.5 mm rims are estimates. The computed D-line focal length is 101.56 mm against the nominal 100 mm; this is recorded and nothing was fitted. Example I of the same patent shows a larger focal-length discrepancy in the US print and is not part of this file.

The data file passes the schema and geometry checks. On axis, the central 90 % of the pupil passes in full and 195 of 201 sampled rays pass over the whole pupil. Off-axis ray counts were diagnostic only and are not a coverage figure. The file is a hidden patent reference.

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
