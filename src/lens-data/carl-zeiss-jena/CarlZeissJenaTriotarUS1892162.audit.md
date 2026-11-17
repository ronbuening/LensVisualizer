# Patent audit

## Source and transcription

Source: `patents/US1892162A.pdf`, three pages of scans: the drawing sheet with the section figure and a full copy of
the table (p. 1), the specification with the table and the printed lens diameters (p. 2), and the end of the claims
(p. 3). The text layer is OCR and was not used for numbers; every value was read from 300 dpi page images.

The patent has one numerical example, printed identically on the drawing sheet and in the specification:

- radii r1 = +23.25, r2 = ∞, r3 = −78.6, r4 = +22.85, r5 = +205.0, r6 = −59.96 mm, signs printed;
- thicknesses and spacings dI = 4.5, l1 = 3.7, dII = 1.3, l2 = 10.0, dIII = 2.5 mm;
- nD = 1.6227, 1.6128, 1.6423 and ν = 56.9, 37.0, 48.0 for lenses I, II and III;
- lens diameters DI = 23.4, DII = 20.8, DIII = 20.0 mm.

All 6 radii, 5 spacings, 3 index and 3 ν values in the data file match both printed copies. The OCR text layer reads
r6 as "59.98"; both page images print 59.96, which the file uses. The patent prints no stop, no back focus, no field
angle and no close-focus data.

## First-order check

The printed table traces to a paraxial EFL of 100.0004 mm against the stated 100 mm, and a paraxial back focus of
82.234 mm. The vertex length is 22.0 mm and the first-to-fourth vertex distance 9.5 mm, the 22 % and 9.5 % of the focal
length that the patent states. The claim conditions hold: first air space 3.7 mm smaller than the second, 10.0 mm;
|r1| and |r4| at 23.3 % and 22.9 % of the focal length (claimed range 20–26 %); and nD = 1.6423 above 1.63 for the rear
lens.

## Inferred values

- Stop: midway in the 10 mm space between lenses II and III, 5 mm behind r4. Neither the figure nor the text shows a
  diaphragm. The stop radius is derived from f/4.5.
- Image plane: the computed paraxial back focus, 82.234 mm.
- Semi-diameters: half the printed lens diameters, on both faces of each lens (`sdSource: "source-table"`).

## Section figure

The drawing shows three air-spaced singlets: a plano-convex front lens with a flat rear face, a biconcave middle lens
with a weak front and strong rear curve, and a biconvex rear lens with a nearly flat front. Lens I is drawn tallest and
lenses II and III slightly shorter, in proportion to the printed diameters. Element count, group count, the absence of
cemented surfaces and every radius sign agree with the data file.

## 2026-11-16 — Deployment validation

An independent re-read of the patent page images checked every radius and its sign, every thickness and spacing, every
nD and ν, the printed lens diameters, the bibliographic heading (Robert Richter, assignor to the firm Carl Zeiss, Jena;
filed May 12, 1931, German priority May 27, 1930, granted December 27, 1932) and the section figure. No transcription
mismatch was found. Verdict: valid as a hidden patent reference. Marco Cavina reproduces this patent as the "Carl Zeiss
Jena Triotar 1:4,5 (Robert Richter, Maggio 1930)" and gives the same German filing date. The Triotar 7.5 cm f/4.5 on
the 1933 Rolleicord I matches the patent's aperture and purpose. The product link is to the Triotar 1:4.5 design family,
not to a specific production focal length.

Changes:

- `source.patentNumber`: "US 1,892,162" → "US 1,892,162 A" (house form).
- `source.assignees`: ["Carl Zeiss Jena"] → ["Carl-Zeiss-Stiftung"] (the corpus entity for "the firm Carl Zeiss" at
  this date).
- `catalog.focalLengthMm.design`: 100.000439907571 → 100 (rounded to two decimals).
- Data file: added a header comment stating the source, scale, glass treatment, the inferred stop, the printed rims
  and the computed back focus.
- Analysis: rewritten to the house section structure, with the Triotar attribution and its sources, and with the
  axial-clipping explanation corrected. The earlier text blamed the printed rims; the trim actually comes from the
  paraxial iris.
- This audit replaces a placeholder that pointed to evidence outside the repository.

Prescription, stop position, rims and image plane are unchanged.

First order after the changes (`built.mjs`): EFL 100.0004 mm, f/4.5, paraxial back focus 82.234 mm, total track
104.234 mm, stop radius 9.080 mm. Element focal lengths +37.34, −28.75 and +72.49 mm.

Audits: surface validator OK. The aperture audit finds no rim limit (within 3 % of f/4.5, no raise needed). The real
f/4.5 axial beam clears every rim: heights 11.11, 10.77, 9.72, 9.15, 9.31 and 9.30 mm against rims of 11.7, 11.7,
10.4, 10.4, 10.0 and 10.0 mm. The paraxial iris (9.080 mm) sits slightly inside the real marginal ray at the stop
(9.207 mm), so the outermost two rays on each side of a 201-ray axial fan stop at the iris. The real-ray clearance probe
finds no axial clipping and no blocked chief ray at 10°, 20° or the patent's corner (about 26.6°, 50 mm image height).
Off-axis vignetting from the printed diameters is about 36 % of the bundle width on one side at lens I at 20°. The
image-circle and field-coverage audits skip the file (hidden, no image format).

Open:

- Name, subtitle and specs keep package wording ("PATENT ONLY; RETAIL IDENTITY UNPROVED", "1932 100 mm f/4.5; PATENT
  ONLY"). `focus.description` ("literal nD/V … No production identity") should be plain words and could mention the
  Triotar 1:4.5 association.
- Element types to house labels (Plano-Convex Positive, Biconcave Negative, Biconvex Positive); element labels "L1",
  "L2", "L3" could become optical roles.
- Glass: no catalog labels. Lens II matches the F3 class (1.61293 / 36.9 at d) and lens III is near BaF9 (1.64328 /
  47.8); lens I has no close catalog row. Labels only if an exact match is found.
- Engine default display field is 35.0° half-field against the patent's picture diagonal of about the focal length
  (about 26.6°).
