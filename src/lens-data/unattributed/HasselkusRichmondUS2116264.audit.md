# Audit Log — Hasselkus and Richmond US 2,116,264

Patent: US 2,116,264 A, sole numerical example; table on the first text page, right column; one drawing sheet.

## 2026-11-16 — Original transcription

| Item | Authored value | Source and rationale |
| --- | --- | --- |
| R1–R10, mm | +36.15, +54.15, +29.45, +23.75, −23.75, −29.45, −55.65, −44.05, −47.90, −38.95 | Printed magnitudes; signs from the drawing and the statement that every lens is concave toward the diaphragm. |
| d1–d5, mm | 14.33, 1.61, 1.61, 6.20, 10.70 | Printed. |
| s1–s4, mm | 0.06, 40.56, 0.06, 0.06 | Printed. |
| Glass, lenses I, IV, V | Nd 1.6202, ν 60.4 | Printed (Ng 1.6329 also printed, not traced). |
| Glass, lenses II, III | Nd 1.7174, ν 29.5 | Printed (Ng 1.7492 also printed, not traced). |
| Stop | Middle of s2: 20.28 mm + 20.28 mm | Inferred. The drawing shows the diaphragm centrally; the table gives no position. |
| Clear semi-diameters | 28 / 20 / 20 / 28 / 28 mm per lens | Estimated; the patent prints none. |
| Image distance | 152.9768 mm | Computed paraxial back focus; the patent prints none. |
| Focus | Infinity only | The patent gives one state. |

The printed table computes to a focal length of 194.93 mm against the stated 194.5 mm (+0.22 %). No radius, spacing, index or scale was changed to close that gap. An independent ray trace by the original author reproduced the focal length and back focus. The author's own sampling found off-axis rays clipped at 10° and 20° by the estimated rims and did not check the stated 100° field.

No catalogue glass was substituted, and no production lens was claimed.

## 2026-11-17 — Deployment validation

Checked against the page images (300 and 400 dpi renders of the three-page patent) by a reader who had not seen the authored file's working: all ten radii, five thicknesses, four air spaces, both Nd values and both ν values; the signs against the drawing; element count, order and shapes and the stop position against the drawing; the front-page names, dates and the absence of an assignee. No transcription difference was found. The patent has exactly one numerical example.

Verdict: valid, with fixes. The prescription is a faithful copy and reproduces the stated focal length within 0.22 %. No product link is established: the patent is unassigned, the inventors' Clapham address and collector literature point to Ross Ltd, but the Ross Wide Angle Xpres f/4 is reported as a Plasmat-type lens, a different construction, and no five-meniscus Ross lens was found in any source.

Changes made:

- `maker`: "Hasselkus & Richmond" → `null`. The inventors are not a maker and the patent names no company.
- `source.patentNumber`: "US 2,116,264" → "US 2,116,264 A" (house form). `assignees: []` kept; none is printed.
- Clear semi-diameters, surfaces 1 / 2 / 3 / 6 / 7 / 8 / 9 / 10: 28 / 28 / 20 / 20 / 28 / 28 / 28 / 28 → 32.5 / 29.1 / 22.8 / 22.8 / 29.4 / 31.4 / 32.4 / 34.8 mm. Surfaces 4 and 5 stay at 20 mm. Reason: the delivered rims blocked the chief ray at the last surface at a half-field of about 36.7°, against the patent's stated field of about 100°. The new values are the chief-ray heights at a half-field of 47.7°, rounded up to 0.1 mm. All are at or below the rims scaled from the drawing (about 34 mm for lens I, 23.6 mm for lenses II and III, 35 mm for lenses IV and V).
- Element `type`: "Meniscus" → "Positive Meniscus" (L1, L4, L5) and "Negative Meniscus" (L2, L3).
- Elements: added `focalLengthMm` (134.39, −193.93, −193.93, 282.87, 230.59), a short optical `role`, and an `indexReferenceNote` recording the printed Ng.
- `catalog.focalLengthMm.design`: 194.92710999441644 → 194.93. Last gap: 152.9768202512519 → 152.9768. `closeFocusM` written as `1e15`.
- `focus.description`: the phrase "source 100-degree field not verified" replaced by the field the model now reaches; the rest reworded in plain English.
- A header comment now states the source, the scale, and which values are inferred.
- The analysis was rewritten to the standard section layout. This audit log replaces a process note that held no source table.

First-order values after the changes: focal length 194.9271 mm, F/5.6, stop semi-diameter 13.14 mm, paraxial back focus 152.9768 mm (image plane exactly on it), first-to-last surface 75.19 mm. Longitudinal spherical aberration at F/5.6: +1.91 / +0.42 / −0.19 / −0.32 mm at pupil zones 1 / 0.85 / 0.7 / 0.5.

Audit results: the surface validator reports no errors. The aperture audit reports no surface below the axial beam (17.40 mm needed on a 32.5 mm front rim). The image-circle and field-coverage audits skip the lens because it is hidden and has no image format.

Field reached: a closed-form sphere-and-Snell trace through the centre of the stop passes the chief ray to a half-field of 47.7° (image height about 214 mm), limited by the front surface at 32.5 mm, which is the validator's default rim-slope limit for R1 = 36.15 mm. The engine's chief-ray solver converges at 47.7°. The full 50° needs 33.4 mm on surface 1 and 35.8 mm on surface 10; the first needs a relaxed rim-slope limit and the second is above the drawing reading, so neither was applied. The scratch clearance probe reports "no ray found" above about 37° on this lens whatever the rims: its surface-intersection iteration starts from the vertex plane and fails to converge on these deeply curved surfaces at steep angles. That is a limit of the probe, not of the lens.

Open:

- (Closed 2026-11-17 by the cleanup pass.) Name, key, subtitle, specs and file name are as delivered and still carry "PATENT ONLY" and "RETAIL IDENTITY UNPROVED" wording for the cleanup pass. Suggested form: maker unset, a name citing "US 2,116,264 Design" and the 194.5 mm f/5.6 figures.
- (Closed 2026-11-17: `1e15` is the house placeholder.) `closeFocusM: 1e15` awaits the house form for an infinity-only model.
- Rims against the drawing: lens I reads about 34 mm, lenses II and III about 23.6 mm (wrapping almost to the stop plane), lenses IV and V about 35 mm. The last 2° of half-field needs `checks.maxRimAngleDeg` of about 68° and those drawing rims.
- The engine's own first-order half-field figure is 36.1° (limited by surface 1), well below the real chief-ray limit, because a first-order estimate understates this near-concentric design. Decide whether the lens needs a declared trace field.
- (Closed 2026-11-17: see the cleanup section.) Glass labels: the printed pairs lie close to Schott N-SK16 and SF1; none is assigned. The printed Ng (1.6329, 1.7492) could be given to the trace if wanted.
- British specification 423,156 (the four-meniscus predecessor) and any Ross catalogue showing a five-meniscus wide-angle lens were not found.

## 2026-11-17 — Cleanup and wording pass

Optics, stop and rims are unchanged. Engine numbers before and after are identical: focal length 194.9271 mm, F/5.6, first-order half-field 36.11°, stop semi-diameter 13.1395 mm, back focus 152.9768 mm. The surface validator reports no errors and the aperture audit reports no rim limit (on-axis f-number within 3 % of the stated value).

Fields changed:

- `subtitle`: "1938 f/5.6; PATENT ONLY" → "US 2,116,264 A, sole example — five-meniscus wide-angle design".
- `specs`: "5 ELEMENTS / 5 GROUPS", "PATENT ONLY; RETAIL IDENTITY UNPROVED", "ESTIMATED STOP AND RIMS", "INFINITY ONLY" → "5 ELEMENTS / 5 GROUPS", "ALL SPHERICAL", "DESIGN f = 194.5 mm", "DESIGN F/5.6", "100° FIELD". The focal length and field are the patent's stated values.
- `focus.description` → "Infinity focus only; the patent gives no close-focus data."
- Element labels "L1"–"L5" → "Element 1"–"Element 5".
- Glass, elements 2 and 3: none → "SF1 (Schott)". Printed 1.7174 / 29.5 against the catalogue 1.71736 / 29.51: Δnd 0.00004, Δνd 0.01. The label resolves in the glass catalogue.
- Glass, elements 1, 4 and 5: none → "Unmatched (Nd 1.6202 / V 60.4)". Nearest rows are the SK16 types at 1.62041 / 60.3: Δnd 0.00021, outside the 0.0001 limit.
- Header comment: glass paragraph updated to match; one process word removed.
- No cemented surfaces, so no `cemented` tags or `doublets` entries.

Analysis: title set to the lens name; the Ross connection restated at the strength of its one source (a collector page that lists the inventors as Ross Xpres designers and calls the Wide-Angle Xpres a Plasmat type; it does not state their employer); glass section brought into line with the labels; one forum citation that had been read only as a search excerpt removed; section heading "Model Verification" renamed "Model Scope".

Open:

- Rims against the drawing, for the semi-diameter pass: lens I about 34 mm (file 32.5 / 29.1), lenses II and III about 23.6 mm (file 22.8 / 20), lenses IV and V about 35 mm (file 29.4–34.8). The chief ray passes to a half-field of 47.7°; the last 2° needs a relaxed rim-slope limit on surface 1.
- The first-order half-field figure the page shows is 36.1°, below the real chief-ray limit. A declared trace field may be wanted.
- `lensMounts`, `imageFormat` and an image circle are not set: the patent states a field angle but no plate format.
- The printed Ng values (1.6329, 1.7492) are held as notes only.
- British specification 423,156 and any Ross catalogue showing a five-meniscus wide-angle lens were not found; the inventors' employer is not documented.
