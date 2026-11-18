# Audit log — Bielicke four-singlet objective, US 1,540,752 Figure 4

## Source

US 1,540,752 A, *Objective Lens System*, William F. Bielicke of Berlin-Neukölln, filed March 8, 1924, granted June 9, 1925. No assignee is printed. The patent has two numerical examples (Figures 3 and 4); this file uses Figure 4, "Focus 100 mm, Diameter 50 mm", at the patent's own scale.

## Transcription

The Figure 4 table appears on the drawing sheet and again in the typeset specification; the two agree. Printed values, all used unchanged:

- Radii: +56.0, −1500.0, −55.0, +80.0, −373.0, −48.0, +194.0, −194.0 mm (signs printed; convex toward the incoming light is positive).
- Glass thicknesses: 9.0, 2.5, 7.0, 5.0 mm. Air spaces: 17.0, 12.0, 1.5 mm.
- Indices nD / nG′: lenses I, III, IV 1.60958 / 1.62273; lens II 1.67330 / 1.70141. No Abbe numbers are printed.

The 12.0 mm air space is entered as 6 + 6 mm around the stop.

## Inferred values

- Stop position: mid-way in the 12.0 mm space between lenses II and III. The patent gives no dimension; Figure 4 draws the diaphragm about there.
- Semi-diameters: 25 mm from the printed 50 mm diameter; front surface 25.11 mm (see below).
- Back focus: computed D-line paraxial value, 79.0457 mm.
- Dispersion: none. The model is D-line only.

## 2026-11-17 — Deployment validation

An independent re-read of the patent page images (drawing sheet and specification, rendered at 300–600 dpi) checked all 8 radii and their signs, 4 thicknesses, 3 air spaces and 4 nD values against the data file: no mismatch. The front page was checked for inventor, dates and assignee. The figure was checked for element shapes and the stop position.

Verdict: valid as a patent reference. The product link is to the Astro-Berlin Tachar family: Bielicke co-founded Astro-Gesellschaft Bielicke & Co., his partner Gramatzki witnessed the drawing, and collector references (oldlens.com, pentaconsix.com) cite this patent for the four-element Tachar. No production prescription is published and Figure 4 is f/2 against the Tachar's f/1.8 and f/2.3, so no specific product is claimed.

Changes made:

- `maker`: "William F. Bielicke" → `null` (an inventor is not a maker; the patent is unassigned).
- `source.patentNumber`: "US 1,540,752" → "US 1,540,752 A" (house form).
- `catalog.focalLengthMm.design`: 100.40491043206832 → 100.41 (rounding).
- Last gap: 79.04572679936774 → 79.0457 (rounding; still the paraxial back focus).
- Surface 1 `sd`: 25 → 25.11. The f/2 axial beam at the computed focal length needs 25.10 mm at the front surface, so the 25 mm rim cut it by 0.10 mm. No other rim was changed.
- Element `type`: "Biconvex" → "Biconvex Positive" (L1, L4), "Biconcave" → "Biconcave Negative" (L2), "Meniscus" → "Positive Meniscus" (L3).
- Elements: added `focalLengthMm` (88.75, −48.05, 89.64, 159.91) and plain optical `role` text; `indexReferenceNote` reworded to say what the patent prints.
- `focus.closeFocusM` written as `1e15`; `focus.description` reworded in plain English.
- Header comment added (source, scale, the G′ reading of the 100 mm focus, inferred values); keys unquoted.
- Analysis rewritten to the house section layout; unrelated notes on another patent and build instructions removed.
- This audit log replaces a short status paragraph.

First-order values after the changes: EFL 100.405 mm, f/2.0 (stop semi-diameter 19.31 mm), paraxial back focus 79.0457 mm, total length 133.046 mm. With the printed G′ indices the EFL is 100.286 mm; the patent's ratios for lenses III and IV (0.87 and 1.56) match the G′ singlet focal lengths (87.74, 156.54 mm), so its 100 mm is read as the G′ focus.

Audit results: surface check OK with no errors; aperture check reports no surface below the on-axis ray; ray clearance at f/2 shows no axial clipping and no blocked chief ray out to a 15 mm image height. The image-circle and field-coverage checks do not apply (no image format; hidden file).

Open:

- Name, key, subtitle and specs wording ("PATENT ONLY", "NO RETAIL IDENTITY", "ESTIMATED MIDGAP STOP AND 50MM RIMS") for the cleanup pass; element labels are "L1"–"L4" and there are no glass labels.
- Optional Abbe-number estimates from the printed nG′ − nD differences (about 58.5 for the crown, about 31.5–32 for the flint); a period glass catalogue should be checked before any value is entered.
- Rims against Figure 4: all rims are from the printed 50 mm diameter; the figure has not been used to size individual elements.
- Whether to record the Astro-Berlin Tachar family link in the catalogue fields.
- Figure 3 of the same patent computes to about 94 mm from its printed table and is not modelled.
