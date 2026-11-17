# Audit log — US 2,158,179 Figure 2 (Frederick and Aklin, Eastman Kodak Company)

## Transcription notes

- Duplicate check: the catalog had no earlier model of US 2,158,179. No product identity is inferred.
- The title page, the inventors and both prescription tables were read from the patent images. Figure 2 was chosen
  because Figure 1's drawing-sheet table prints its central air space as 1.78 mm, while the specification prints
  17.8 mm.
- Clear semi-diameters were estimated. Rims of 23 mm pass the surface validator's air-gap sag check. A first set of
  23.3 mm failed that check at the rear air gap and was rejected.
- Geometry checks on the delivered file:
  - no validation errors and no drawing trims over 0.25 mm;
  - the iris clears the nearest glass by 10.80 mm, in a 10.9 mm half-gap.
- Sample-ray pass counts, nine rays per field, with the original 23 mm rims: 0° 7/9, 5° 6/9, 10° 6/9, 30° 1/9, and the
  engine's 35.0° maximum 1/9. The central 90 % of the axial beam passed. The patent states no field angle.

## 2026-11-16 — Deployment validation

**What was checked.** The patent page images were re-read independently at 300 dpi:

- the front-page bibliography;
- the Fig. 2 drawing-sheet table and the specification table: all 8 radii with their signs, 7 thicknesses and air
  spaces, and 4 index/Abbe pairs;
- the Fig. 2 cross-section: element shapes, edge contact between the elements of each pair, and no drawn diaphragm;
- the Fig. 1 table against the text.

**Results.**

- No transcription mismatches. The specification's "S3+2.45" is a typo for S3 = 2.45, which the drawing sheet confirms.
- The claim 1–2 conditions are met.
- Figure 1's "1.78" is a drawing-sheet decimal misprint: 17.8 gives an EFL of 99.99 mm, while 1.78 gives 94.72 mm.

**Verdict.** Valid, with notes. The model reproduces the printed f = 100 mm to −0.06 %. No production lens is
documented: Kodak's f/2 Ektar of the period, on the Bantam Special, is a six-element double-Gauss, and no Kodak
four-singlet f/2 has been found. The file stays a hidden patent reference under Kodak, the assignee.

**Changes made.**

- `source.patentNumber`: "US 2,158,179" → "US 2,158,179 A" (house form).
- Surface 1 `sd`: 23 → 23.9, and surface 2 `sd`: 23 → 23.1. At 23 mm, these two rims cut the f/2 axial beam passed by
  the paraxially sized iris. These are the least raises reported by `audit:aperture --raise`. Both stay below the
  height of about 24.8 mm at which R2 and R3 would touch.
- `catalog.focalLengthMm.design`: 99.94187474685016 → 99.94 (rounded).
- Element `role`: the provenance note "Literal sodium-D index and Abbe number; …" is replaced by optical roles:
  - L1 "Front collective element in high-index glass";
  - L2 "Front dispersive element in dense flint";
  - L3 "Rear dispersive element in dense flint";
  - L4 "Rear collective element in high-index glass".
- The header comment is rewritten in plain words: source, example, scale, and the inferred stop, rims and back focus.
- The analysis is rewritten to the house section layout, and this log is rewritten without process shorthand.

**First-order values after the changes** (`built.mjs`, `probe.mjs`):

- EFL 99.942 mm and f/2.0, with an iris semi-diameter of 21.00 mm in the middle of the central space;
- paraxial back focus 74.878 mm, which is the last gap;
- 132.78 mm from the first surface to the image;
- element focal lengths +70.59 / −111.96 / −111.82 / +70.65 mm;
- engine half-field 35.0°, set by the rims and not stated by the patent.

**Audits.**

- `audit:surface`: OK.
- `audit:aperture`: no surface below the on-axis ray.
- `audit:image-circle` and `audit:field-coverage`: skipped, because the file is hidden and has no image format.
- `clearap.mjs` at a 21.63 mm test height: the chief ray is clear, and the oblique bundle is trimmed by 20 % at R1 and
  7 % at R8.
- A real-ray f/2 entrance beam of 24.99 mm radius would need 24.99, 24.11, 24.08 and 23.50 mm on R1–R4 and a 22.08 mm
  iris. The engine sizes the iris paraxially (21.00 mm), so this is not a rim limit in the model.

**Open.**

- Wording for the cleanup pass:
  - name, key, subtitle and specs ("PATENT-ONLY REFERENCE", "ESTIMATED STOP AND RIMS");
  - the L3 type label "Meniscus Negative" against the house form "Negative Meniscus";
  - the generic element labels ("Element 1" to "Element 4").
- Semi-diameter pass: compare the rims with the figure. All four elements are drawn at one height, with each pair
  meeting at the edge. The contact heights are about 24.8 mm (front pair) and 24.2 mm (rear pair).
- Glass labels: none are set. 1.8049 / 25.5 is close to the SF6 class. 1.9007 / 42.5 has no period catalogue match.
- Figure 1 is also a complete example (with S2 = 17.8). It could become a second hidden reference.
