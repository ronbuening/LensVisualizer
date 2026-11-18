# Audit: Kodak projection objective, US 1,620,339

The drawing and the printed table agree on the optical prescription, and the drawing and claims fix the signs of the radii. A rim check with 1,001 samples per adjacent surface pair over 0–22 mm found positive separations everywhere and a minimum glass edge thickness of 2.64 mm. A first-order calculation and a real-ray trace close to the axis agree on a back focus of 31.4082 mm. The published 31.3 mm was not fitted. Sampled rays passed 201 of 201 on axis, 9 of 9 at 5°, 5 of 9 at 10° and 0 of 9 at 15°; no image circle is inferred from these counts. Results for the D line and for the printed G′ indices are kept separately.

The model is hidden. It runs from the front component to the film gate with the object at infinity, with an estimated stop 1 mm in front of the first surface and estimated 22 mm rims. It does not model projection to a screen at a finite distance and does not identify a production lens.

## 2026-11-17 — Deployment validation

An independent re-read of the patent page images (drawing sheet and specification table at 300 dpi) checked all 5 radii, 3 thicknesses, the air space, 3 D-line indices and 3 dispersive ratios against the data file, the signs of the radii against the drawing and claims, and the front-page names and dates. No transcription mismatch was found.

Verdict: valid, with integration fixes. The patent has one numerical example and the file reproduces its stated values. No product link is documented: the patent speaks of home and amateur projectors, and museum records list 2-inch lenses on the Kodascope Model B and C, but nothing found ties this prescription or f/2.5 to a named lens.

Changes made:

- `maker`: "Eastman Kodak" → "Kodak" (house maker name).
- `source.patentNumber`: "US 1,620,339" → "US 1,620,339 A" (house form).
- `catalog.focalLengthMm.design`: 99.98350859887753 → 99.98 (rounding).
- Surface 5 `d`: 31.40822922209336 → 31.4082 (rounding; still the computed paraxial back focus).
- Elements L1 and L2: added `cemented: "D1"`; `doublets` text "CEMENTED FRONT PAIR" → "D1" (corpus form for a cemented pair).
- Elements: added `focalLengthMm` (73.64, −127.07, 93.98) and a short optical `role` for each.
- `indexReferenceNote`: shortened to state what the patent prints (nD, nG′, ν) and what the model uses.
- `focus.closeFocusM`: written as `1e15` (same value). `focus.description`: run-together numbers separated; meaning unchanged.
- File form: added a header comment stating source, scale and inferred values; unquoted keys.
- Analysis: rewritten to the standard section layout.
- This audit log: process wording in the two original paragraphs replaced with plain wording; facts unchanged.

First-order values after the changes: focal length 99.98 mm (patent 100), f/2.50, back focus 31.4082 mm (patent 31.3), first surface to image 150.31 mm, stop radius 20.0 mm. Element focal lengths 73.64, −127.07 and 93.98 mm against the printed +73.6, −127.1 and +94.0; front component 167.11 mm against 167.0.

Audit results: surface check OK with no errors; aperture check within 3 % of f/2.5 with no rim, trace or iris limit; image-circle check skipped (no image format set); field-coverage check skipped (hidden lens). A separate ray trace shows the axial f/2.5 beam clear (largest height 20.0 mm against 22 mm rims), the full beam clear to 7.1° off axis, upper rays cut at the rear element at 10°, and the central ray blocked near 12°.

Open:

- Key, file name, name, subtitle, specs and focus description still carry the delivered wording ("PATENT REFERENCE", "reciprocal infinity reference", "PATENT ONLY; NO RETAIL IDENTITY").
- `closeFocusM: 1e15` is a stand-in for infinity focus only.
- Element types "Meniscus" could be made specific (negative for L2, positive for L3).
- No glass labels; the patent names only "white optical crown" and "dense flint". The printed G′ indices are not stored.
- Rims are an estimate (22 mm everywhere); the drawing has not been used to set them, and the patent states no field. No image format is set.
- The stop position is an estimate; the patent shows none.
