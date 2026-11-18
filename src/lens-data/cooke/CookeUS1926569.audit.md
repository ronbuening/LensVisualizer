# Audit log — Warmisham f/1 objective, US 1,926,569 Figure 1

## Source

US 1,926,569 A, _Photographic and Projection Lens_, Arthur Warmisham, assignor to Kapella Limited, Leicester. Filed April 10, 1931 (Serial No. 529,168), British priority April 11, 1930, granted September 12, 1933. Three pages: one drawing sheet (Figures 1 and 2) and two specification pages. The Figure 1 table is on specification page 1, right column; the Figure 2 table is on page 2 and is not used.

## Transcription

The table is printed at an equivalent focal length of .97 with "Clear aperture (front) .97". Every radius, thickness and air space is multiplied by 100. The patent's sign rule (+ for a surface convex toward the long conjugate) is the same as the data file's.

- 12 radii with their signs, 7 glass thicknesses, 4 air spaces, 7 nD values and 7 V values agree with the page image.
- The air space S2 (7.5 mm) is split 1.9 + 5.6 mm around the inferred diaphragm; the sum is unchanged.
- The patent defines the index as "the mean refractive index nD", so the elements carry the sodium D-line reference.

## First-order results

- Paraxial focal length 97.0616 mm against the printed .97 × 100 (+0.06 %).
- Paraxial back focus 60.5498 mm (not printed in the patent). Vertex length 151.1 mm; total length 211.65 mm.
- Element focal lengths: L1 +81.79, L2 −252.49, L3 −119.88, L4 −72.79, L5 +102.63, L6 +69.75, L7 −199.27 mm. Cemented pairs: +113.67 mm (front) and +99.27 mm (rear).

## Inferred values

- Diaphragm position: in air space S2, where Figure 1 draws it.
- Stop radius: 34.04 mm, from the paraxial rule for f/1.
- Semi-diameters of surfaces 4 to 12: 42 mm, assumed. Surfaces 1 to 3 use the printed front clear aperture (48.5 mm).
- Back focus: computed paraxial image distance at infinity.

## 2026-11-17 — Deployment validation

An independent re-read of the patent page images at 300 dpi checked every radius and sign, thickness, air space, index and Abbe number of the Figure 1 table, the front-page bibliographic data, and the element shapes, cemented pairs and diaphragm position in Figure 1.

Verdict: valid with fixes. The table was transcribed exactly and reproduces the printed focal length. No production lens is documented for this patent; a 1949 survey of f/1 objectives mentions Warmisham f/1 designs as patent designs only, and no Cooke or Taylor-Hobson f/1 catalogue lens was found.

Changes:

- `maker`: "Kapella" → "Cooke". Kapella Limited was the patent-holding company for the Taylor-Hobson designers; the corpus files these under Cooke.
- `source.patentNumber`: "US 1,926,569" → "US 1,926,569 A" (house form).
- `indexReference`: "d" → "D" on all seven elements. The patent prints nD.
- Diaphragm: moved from the front vertex (thickness 0 ahead of R1) into air space S2, 1.9 mm behind R5 and 5.6 mm ahead of R6. Figure 1 draws the diaphragm between the two biconcave elements, close to the flat rear face of L3. A midway position (3.75 + 3.75 mm) was not used because the concave front face of L4 would cross the stop plane near the edge of the full f/1 beam.
- `cemented` tags D1 (L1, L2) and D2 (L6, L7) and two `doublets` entries (surfaces 1–3 and 10–12) added; the patent states both pairs are cemented.
- Element `focalLengthMm` and short optical `role` strings added.
- `aperture.nominalFNumber` and the first f-stop: 1.0006351151748314 → 1.
- `focalLengthMm.design`: 97.06160617195864 → 97.06. Last gap: 60.549840526808296 → 60.5498. `closeFocusM` written as 1e15.
- Header comment added; quoted keys unquoted.
- Analysis rewritten to the standard section layout. This audit replaces the delivered text, which described the author's tooling and told the reader to copy the file to a `taylor-hobson/` folder.

No semi-diameter was changed. With the diaphragm in S2 the 42 mm rims no longer cut the model's axial beam, so no raise was needed.

Results after the changes:

- Focal length 97.0616 mm, f/1.000 by the paraxial stop rule, stop radius 34.04 mm, back focus 60.5498 mm.
- Real-ray aperture: the axial ray that grazes the stop enters at 44.63 mm, about f/1.09 (f/1.12 by the image-side ray angle). The full 48.5 mm front ray would reach 37.9 mm at the stop and 51.3 mm at R10.
- Surface validator: no errors. Aperture audit: no surface below the on-axis ray. Largest axial ray height on the 42 mm rims: 41.86 mm at R10.
- Field: the chief ray of the patent's 14 degree semi-field clears every surface (largest height 19.4 mm at R12).
- Image-circle and field-coverage audits skip the file (hidden, no image format).

Open:

- Name, key, subtitle, specs and the focus description keep the delivered wording ("PATENT ONLY; RETAIL IDENTITY UNPROVED", "LITERAL FRONT APERTURE; ESTIMATED RIMS", "Fig1", "97mm"); house name form would be `COOKE 97mm f/1 (US 1,926,569 Design)` and file stem `CookeUS1926569`.
- Rims against Figure 1 (about 4.27 px/mm at 300 dpi): negatives about 40.5 mm, L5 about 50 mm ending in a knife edge (edge thickness reaches zero just under 50 mm), rear pair about 50.4 mm. Passing the full real f/1 beam would need about 43 / 45 / 51.3 / 50.5 / 45 mm on surfaces 8 to 12; the paraxial stop rule does not let that beam through, so those rims are left for the semi-diameter pass.
- No glass labels; the patent names no glass types.
- The 1949 survey's reference list was not seen, so its link to this patent number is unconfirmed.
