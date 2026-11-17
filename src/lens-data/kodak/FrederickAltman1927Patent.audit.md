# Audit log — FrederickAltman1927Patent

## Source

US 1,620,337 A, *Objective*, Charles W. Frederick and Fred E. Altman, assignors to Eastman Kodak Company. Filed
January 17, 1923 (Serial No. 613,270), granted March 8, 1927. Three pages. Page 1 is the drawing sheet: an axial
section with lenses L1–L4, surfaces R1–R8, thicknesses T1–T4 and air spaces S1–S3, and a table with signed radii.
Page 2 has the specification table ("aperture = F/2; focal length = 100"), which prints radii as magnitudes only.
Page 3 has the claims. The patent contains one numerical example. The USPTO and Google copies carry the same scans.

## Transcription

Every value was read from 300–450 dpi renders of the page images, not from the OCR text layer:

- 8 radii;
- 4 thicknesses and 3 air spaces;
- for each of the 4 lenses, the D index, G′ index and ν.

The file matches the patent exactly. Radius signs: +64.0, −126.0, −77.2, +684.5, +222.2, +52.4, +126.0, −64.0, as
printed on the drawing sheet. They agree with the drawn shapes: L1 and L4 biconvex, L2 biconcave, L3 a meniscus
concave towards L4. The data file does not store the printed G′ indices (crown 1.62448, flint 1.63920); the format
has no G′ field. Neither glass pair resolves to a catalogue glass at the D or d line. D-line indexing follows the
patent's own wording ("D and G′ lines").

## First order

| Quantity | Patent | Model |
|---|---|---|
| Focal length | 100 | 100.079 (+0.08 %) |
| Aperture | F/2 | f/2 (paraxial stop semi-diameter 20.93, entrance-pupil radius 25.02) |
| Field | 7° from the axis | 7° checked (image height 12.29) |
| Back focus | not printed | 74.339 (computed paraxial, D line) |
| R1 to R8 length | not printed | 54.70 |

Element focal lengths in air: L1 and L4 +71.18, L2 −112.25, L3 −112.21. Component focal lengths: front +166.9,
rear +165.4.

The claims' proportions hold:

- smallest radius 52.4, more than half the focal length;
- length 0.547 of the focal length, under 0.55;
- S1 / T1 = 0.125 and S3 / T4 = 0.25, each no more than a quarter.

The 0.08 % focal-length residual is within the table's rounding, so no misprint scan was needed.

## Inferred values

- Stop: placed at the middle of S2 (9.0 + 9.0). The patent prints no diaphragm and the figure shows none.
- Clear semi-diameters: none are printed. All are heuristic, held below the edge-contact heights that follow from
  the printed radii: S1 closes at 23.86 mm and S3 at 22.32 mm.
- Image plane: computed paraxial back focus.
- Focus: infinity only.

## 2026-11-16 — Deployment validation

What was checked: an independent re-read of the patent page images. That covered the drawing-sheet table, the
specification table, the figure (element count and shapes, the edge contact the text describes, no stop drawn) and
the front-page bibliography. Every prescription value matches. The file reproduces the printed focal length to
+0.08 %.

Verdict: valid as a hidden patent reference.

Product-link evidence: Kodak engraved this patent number on two products:

- a Kodak Anastigmat f/1.9 25 mm cine-camera lens (Ingenium 2010.0223.001, "PAT. NOS. 1,620,337 - 1,690,607"; the
  second number is a Kodak focusing-mount patent);
- a Kodascope projection lens of about 1929–1932 (Ingenium 2009.0389.002, "PAT. NO. 1,620,337").

The patent's 7° projection field fits a 2-inch projector lens for 16 mm film (half-diagonal 6.4 mm, about 7.2°) better
than the 25 mm camera lens (about 14°). Neither production prescription is published, so no product is named.

Changes made:

- `source.patentNumber`: "US 1,620,337" → "US 1,620,337 A" (house kind-code form).
- `catalog.focalLengthMm.design`: 100.07863175683997 → 100.08 (rounded).
- Surface 2 `sd`: 22.5 → 22.9, and surface 3 `sd`: 22.5 → 22.8. These are the least raises that let the f/2 axial
  beam through. At 22.5, the aperture audit found R2 and R3 below the on-axis f/2 ray, which needs 22.84 at R2 and
  22.78 at R3.
- `checks.gapSagFrac` added: 0.91 (default 0.9). This is the least value at which the raised R2/R3 pass the cross-gap
  check: at 22.8 the S1 sag intrusion is 1.364 of 1.5. The patent states that L1 and L2 touch at their edges, so the
  air space is meant to close near the rim; the true contact is at 23.86 mm.
- Added a JSDoc header stating the source, scale and inferred values.
- Rewrote the analysis to the house section skeleton.
- Replaced this audit file, which was a copy of the analysis.

First order after the changes (built.mjs): EFL 100.079, f/2.000, stop semi-diameter 20.93, total track 129.04.

Audit results:

- `audit:surface`: OK.
- `audit:aperture`: no rim limit (within 3 % of the stated f-number).
- `audit:image-circle` and `audit:field-coverage`: skipped (no image format; hidden).
- `clearap` at 7° (Y 12.29): no surface blocks the chief ray. Oblique-beam vignetting is 12–13 % on one side at R2 and
  R3, 7 % at R4, and 3–5 % at R1, R6 and R7.
- `clearap` also sizes f/2 by a real marginal ray (stop radius 22.36). On that basis R2–R4 would need 24.30, 24.33
  and 23.52. That is beyond the 23.86 mm edge contact of L1 and L2, so this real-ray criterion cannot be met by any
  rim the printed radii allow. The paraxially sized f/2 iris that the viewer uses is fully clear.

Open:

- Name, subtitle and specs: package wording to reword in the cleanup pass. That covers "HIDDEN QUALIFIED REFERENCE",
  "PATENT REFERENCE; RETAIL IDENTITY UNPROVED", and "reciprocal" in `focus.description`. The name could take the
  batch form "KODAK FREDERICK-ALTMAN 100mm f/2 PATENT REFERENCE".
- An optional `catalog.imageCircleMm` of about 24.6 (the patent's 7° field) for field-dependent analyses. Without it,
  the engine's field comes from the rims (34.5° half-field).
- Rims against the figure, for the SD pass. The drawing shows all four lenses with outer semi-diameters of about 25–26
  at the drawn scale, with small chamfers where the lenses meet. The model's R4 and R5 (23) and R6 and R7 (21) are
  smaller than the drawn outer edges.
- G′ indices are not represented. An honest dispersion fit would need period glass data matching both the D and G′
  indices.
