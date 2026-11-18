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
- (Closed 2026-11-18 by the semi-diameter pass; the rim-slope question stays open there.) Rims against the drawing: lens I reads about 34 mm, lenses II and III about 23.6 mm (wrapping almost to the stop plane), lenses IV and V about 35 mm. The last 2° of half-field needs `checks.maxRimAngleDeg` of about 68° and those drawing rims.
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

- (Closed 2026-11-18 by the semi-diameter pass.) Rims against the drawing, for the semi-diameter pass: lens I about 34 mm (file 32.5 / 29.1), lenses II and III about 23.6 mm (file 22.8 / 20), lenses IV and V about 35 mm (file 29.4–34.8). The chief ray passes to a half-field of 47.7°; the last 2° needs a relaxed rim-slope limit on surface 1.
- The first-order half-field figure the page shows is 36.1°, below the real chief-ray limit. A declared trace field may be wanted.
- `lensMounts`, `imageFormat` and an image circle are not set: the patent states a field angle but no plate format.
- The printed Ng values (1.6329, 1.7492) are held as notes only.
- British specification 423,156 and any Ross catalogue showing a five-meniscus wide-angle lens were not found; the inventors' employer is not documented.

## 2026-11-18 — Semi-diameter pass against the patent figure

Source: `patents/US2116264A.pdf`, page 1, the single figure. The page is a bilevel scan at its native 300 dpi, measured at that resolution. The drawn axis runs 1.25° off the page horizontal (row 1744 at the left, row 1759 at the right), so every rim was read as half the span between its upper and lower tips, which cancels the tilt.

Scale: 7.913 px per mm along the axis. First to last vertex, centre of line to centre of line, is 595 px for the 75.19 mm track. The central air space, R4 vertex to R5 vertex, is 319 px against the printed 40.56 mm (−0.6 %). The upper tip of lens I lies on the R1 arc computed at that scale, so the drawing is to scale in both directions.

Shape: the drawing ends every lens the same way. The convex face runs out to the element's edge; the concave face, toward the diaphragm, ends lower and a short stroke square to the axis joins it to the edge. Lens I's stroke is short, so that lens comes almost to a point.

| Surface | Before (mm) | Figure (mm) | After (mm) | Evidence and reason |
| --- | --- | --- | --- | --- |
| 1 (I, convex) | 32.5 | 34.3 | 32.5 | Kept: the validator's rim-slope limit on R 36.15 mm. |
| 2 (I, concave) | 29.1 | 33.0 | 32.5 | Raised: 11 % under the drawing, which runs R2 almost to the tip; held at its partner's 32.5. |
| 3 (II, convex) | 22.8 | 24.1 | 22.8 | Kept: within 6 %. |
| 4 (II, concave) | 20 | 20.8, step to 24.1 | 20, land to 22.8 | sd kept (4 %); `rimExtensionSd` 22.8 draws the step to the element's edge. |
| 5 (III, concave) | 20 | 21.0, step to 24.1 | 20, land to 22.8 | As surface 4. |
| 6 (III, convex) | 22.8 | 24.1 | 22.8 | Kept: within 6 %. |
| 7 (IV, concave) | 29.4 | 32.0, step to 33.4 | 32, land to 33.4 | Raised: 9 % under the drawing, with its partner so the step order stays as drawn. |
| 8 (IV, convex) | 31.4 | 33.4 | 33.4 | Raised with surface 7 (6 %) so the element keeps its drawn shape. |
| 9 (V, concave) | 32.4 | 33.7, step to 35.9 | 32.4, land to 34.8 | sd kept (4 %); land to the element's edge. |
| 10 (V, convex) | 34.8 | 35.9 | 34.8 | Kept: within 4 %, and 35.05 mm is the rim-slope limit on R 38.95 mm. |

All changes are raises or drawn-only lands, so no light is lost. The lands do not trace. Corner illumination against the committed rims stays 100 % at every sampled field. The leave-one-out measure gives 0.0 points worst loss. With no image format set, the vignetting curve is sampled only out to the 135-format corner, 6.3° at this focal length, so it does not test the wide field. The wide field was checked by tracing the chief ray instead.

Clearance after the change:

- The surface validator reports no errors.
- The aperture audit reports no rim limit; the on-axis F/5.6 beam needs 17.40 mm at surface 1.
- No face reaches the diaphragm plane: the margin is 16.31 mm on each side at the 13.14 mm iris.
- The renderer trims no element.

The chief ray still passes to a half-field of 47.7–47.8°, an image height of about 214 mm, where surface 1 stops it. That is unchanged, because surface 1 is unchanged. The traced corner check with a trial image circle confirms surface 1 as the stop.

Engine numbers are identical before and after: focal length 194.9271 mm, F/5.6, first-order half-field 36.11° (limited by surface 1), stop semi-diameter 13.1395 mm, back focus 152.9768 mm.

Metadata: no change. The patent states a field of about 100° but no plate or format. That field implies an image circle of about 464 mm (2 × 194.5 × tan 50°). A trial copy carrying `imageCircleMm` 464 fails the image-circle floor on surfaces 5, 6, 8, 9 and 10. The floor's approximation does not hold this far off axis; the traced chief ray clears those surfaces. The same copy reaches 93 % coverage, clipped at surface 1. Setting it would make both audits report failures the rims cannot meet under the rim-slope limit, so it is left for the owner. No mount is supportable from a source. The name matches the evidence: no product is documented, so the inventors' names and the patent's 194.5 mm (rounded to 195) are the right form.

Open:

- (Closed later the same day; see below.) Surface 1 and surface 10 are drawn larger than the default rim-slope limit allows (34.3 and 35.9 mm against 32.5 and 35.05 mm). Reaching the stated 100° field needs `checks.maxRimAngleDeg` of about 68°, an owner decision.
- An image circle of about 464 mm (from the stated field) would let the analyses cover the wide field. It is not set, for the reason above.
- (Closed later the same day; see below.) Lenses II and III are drawn about 1.3 mm larger than modeled (within 6 %); left as is.

### Follow-up: rims for the stated 100° field

The coordinator asked for the rims the stated field needs, using the corpus precedent for a figure-drawn steep rim (Topogon, US 2,031,792, with `maxRimAngleDeg` 69). The limit was to be the smallest whole degree that admits them, with no rim beyond the drawing.

A chief ray through the centre of the stop at an object half-field of exactly 50° reaches these heights (mm), by an exact sphere-and-Snell trace: surface 1 33.38, surface 2 30.81, surface 3 23.63, surface 4 20.50, surface 5 20.50, surface 6 23.63, surface 7 31.13, surface 8 32.78, surface 9 33.92, surface 10 35.75. It lands at 231.8 mm.

| Surface | Before (mm) | After (mm) | Drawing (mm) |
| --- | --- | --- | --- |
| 1 | 32.5 | 33.4 | 34.3 |
| 2 | 32.5 | 32.5, land to 33.4 | 33.0, step to 34.3 |
| 3, 6 | 22.8 | 23.7 | 24.1 |
| 4, 5 | 20, land to 22.8 | 20.6, land to 23.7 | 20.8 and 21.0, step to 24.1 |
| 7, 8 | 32 (land 33.4), 33.4 | unchanged | 32.0, 33.4 |
| 9 | 32.4, land to 34.8 | 33.9, land to 35.8 | 33.75 ±0.15, step to 35.9 |
| 10 | 34.8 | 35.8 | 35.9 |

Surface 9 sits at the upper end of its drawing reading, so it is the one rim within a measurement pixel of the drawing. `checks.maxRimAngleDeg` is set to 68: surface 1 at 33.4 mm has a rim slope of 67.5°, and 67 is refused. Surface 10 at 35.8 mm is 66.8°.

Results:

- The surface validator reports no errors, and the aperture audit reports no rim limit.
- The iris margin is unchanged at 16.31 mm on each side, and the renderer trims nothing.
- All changes are raises, so leave-one-out corner light loses 0.0 points.
- Engine numbers: focal length, F/5.6, stop semi-diameter and back focus are unchanged. The first-order half-field rises from 36.11° to 36.86°.
- The engine's chief-ray solver converges at 50.0°.

Image circle (2 × 194.927 × tan 50° = 464.6 mm), tried on a scratch copy only. The traced corner check passes: the chief ray reaches 50.0° (231.48 of 232.30 mm, 99.6 %, status ok), and the exact corner at 50.1° is stopped by surface 1. The image-circle floor check fails and flags itself "wide — exit-pupil proxy unreliable, verify by trace". Its floors exceed the drawing on five surfaces:

- surface 5: 27.79 against drawn 21.0 (6.8 mm);
- surface 6: 29.71 against 24.1 (5.6 mm);
- surface 8: 37.17 against 33.4 (3.8 mm);
- surface 9: 37.24 against 33.75 (3.5 mm);
- surface 10: 50.00 against 35.9 (14.1 mm, more than the 38.95 mm radius itself).

`imageCircleMm` is therefore left unset.

Open:

- `imageCircleMm` 464.6 mm passes the traced corner check but not the floor check. The floor check's proxy does not hold at this field; whether to set the circle is the owner's call.
