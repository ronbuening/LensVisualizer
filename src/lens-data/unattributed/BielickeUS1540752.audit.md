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
- Semi-diameters: 25 mm from the printed 50 mm diameter; lens I 25.11 mm on both faces (see below).
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

Audit results: surface check OK with no errors; aperture check reports no surface below the on-axis ray; ray clearance at f/2 shows no axial clipping and no blocked chief ray out to a 15 mm image height. The image-circle and field-coverage checks do not apply (no image format; the file was hidden at that time and has since been made visible).

Open:

- Name, key, subtitle and specs wording ("PATENT ONLY", "NO RETAIL IDENTITY", "ESTIMATED MIDGAP STOP AND 50MM RIMS") for the cleanup pass; element labels are "L1"–"L4" and there are no glass labels. (Closed 2026-11-17 by the cleanup and wording pass below.)
- Optional Abbe-number estimates from the printed nG′ − nD differences (about 58.5 for the crown, about 31.5–32 for the flint); a period glass catalogue should be checked before any value is entered.
- Rims against Figure 4: all rims are from the printed 50 mm diameter; the figure has not been used to size individual elements. (Closed 2026-11-18 by the semi-diameter pass below.)
- Whether to record the Astro-Berlin Tachar family link in the catalogue fields.
- Figure 3 of the same patent computes to about 94 mm from its printed table and is not modelled.

## 2026-11-17 — Cleanup and wording pass

Public text only; radii, thicknesses, indices, stop and rims are unchanged.

Fields changed:

- `subtitle`: "1925 Fig.4 100 mm nominal f/2; PATENT ONLY" → "US 1,540,752 A, Figure 4 — four air-spaced singlets".
- `specs`: "4 ELEMENTS / 4 GROUPS", "PATENT ONLY; NO RETAIL IDENTITY", "ESTIMATED MIDGAP STOP AND 50MM RIMS", "D-LINE ONLY; INFINITY ONLY" → "4 ELEMENTS / 4 GROUPS", "ALL SPHERICAL", "DESIGN F/2".
- `focus.description`: shortened to "Infinity focus only; the patent gives no close-focus data. The image plane is the computed D-line paraxial back focus, not a flange distance." `focus.closeFocusM` stays `1e15`.
- Element `label`: "L1"–"L4" → "Element 1"–"Element 4".
- Element `glass` added: "Unmatched (nD 1.60958, nG′ 1.62273; no Abbe number printed)" for elements 1, 3 and 4 and "Unmatched (nD 1.67330, nG′ 1.70141; no Abbe number printed)" for element 2. The patent prints no Abbe number, so no catalogue row is claimed and the model stays single-wavelength.
- Header comment: a product-link paragraph added; the dispersion sentence reworded.
- Analysis: title changed to the lens name; element headings follow the new labels; the product link is stated once, with the caveat that the two collector pages were read through search excerpts only.

There are no cemented surfaces, so no `cemented` tags or `doublets` entries apply.

Engine numbers before and after are identical: EFL 100.40491043206832 mm, f/2, stop semi-diameter 19.311295651977577 mm, half-field 30.093637630736428°, back focus 79.0457 mm. The surface check prints OK and the aperture check reports no rim limit.

Open:

- Abbe-number estimates from the printed nG′ − nD differences (about 58.5 for the crown, about 31.5–32 for the flint) are not entered; a period glass catalogue should be checked first.
- Rims against Figure 4: all rims come from the printed 50 mm diameter (front surface 25.11 mm); the figure has not been used to size individual elements. (Closed 2026-11-18 by the semi-diameter pass below.)
- `lensMounts`, `imageFormat` and an image circle are not set: the patent states no format or field angle.
- The Astro-Berlin Tachar link rests on collector pages read through search excerpts; a primary source (Astro catalogue or DE 440,229) would firm it up.
- Figure 3 of the same patent computes to about 94 mm from its printed table and is not modelled.

## 2026-11-18 — Semi-diameter pass against the patent figure

Source: US 1,540,752 A, drawing sheet (page 1), Figure 4, measured at 600 dpi with the axis on row 3201.

Scale: Figure 4 is schematic. From the first to the last vertex it spans 773 px for 54.0 mm (14.3 px/mm), but the single spans disagree well beyond 10 %: lens I thickness 10.4 px/mm, lens II 15.6, lens III 12.1, lens IV 16.8; air space l1 13.2, l2 17.3, l3 26. The figure is therefore used for proportions only. The patent's printed "Diameter 50 mm" outranks any figure reading; it does not say which surface it belongs to.

Figure reading (half-heights from the axis, lower and upper side): lens I 300 / 311 px with a flat, square-cut edge; lens II 304 / 309 px, square-cut; lens III 304 / 306 px, square-cut; lens IV about 302 / 295 px, drawn to a knife edge. All four lenses are drawn at the same height within about 3 %, which agrees with one common 50 mm diameter. The figure exaggerates the curvatures (lens IV's knife edge, lens III's thick edge), so edge thickness is not taken from it.

| Surface | Before | After | Evidence |
|---|---|---|---|
| 1 | 25.11 | 25.11 | Printed 50 mm diameter, raised 0.11 mm earlier so the f/2 axial beam (25.10 mm here) is not cut. Kept. |
| 2 | 25.00 | 25.11 | Lens I is drawn square-cut, so its rear face takes the front face's height. Costs no light. |
| 3–8 | 25.00 | 25.00 | Printed 50 mm diameter; the figure draws lenses II–IV at the same height as lens I. Kept. |

Clearance after the change: no axial clipping at f/2 and no blocked chief ray at a 15 mm image height. The front rim limits the chief ray at 30.1° (lens I rear face at 35.6°); the engine half-field is 30.09° before and after, at f/2.0 with a stop semi-diameter of 19.31 mm. The patent states no field, and no rim was widened for one.

Corner illumination (engine vignetting curve, wide open): 100.0, 100.0, 98.9, 96.0, 92.3, 88.4 and 84.1 % at 0 to 12.2°, identical to the rims before this pass (worst loss 0.0 points). Surface check OK; aperture check reports no rim limit. Image-circle and field-coverage checks skip the lens because it has no image format.

Metadata: no change. The patent states no format, field or mount, and no production source gives one, so `lensMounts`, `imageFormat` and an image circle stay unset. The best product name in the sources is the Astro-Berlin Tachar (Pan-Tachar, Astro-Tachar). The present name, without a product word, fits a family-level link.

Open:

- Lens III's edge is 0.82 mm thick at the 25 mm rim. The figure draws a thicker edge, but its curvatures are exaggerated, so this is not taken as a reason to lower the rim.

## 2026-11-18 — Second review on the local site

Compared: the live page (diagram and the inspector of every element) against Figure 4 on the drawing sheet, rendered at the scan's native 300 dpi, and against the specification text on pages 1–2.

Figure re-measured independently (axis on row 1600, lower side, which carries no leader lines): half-heights 151 px (lens I), 153 (II), 152–153 (III) and 152 (IV, knife edge); the diaphragm strokes end 125 px above and 120 px below the axis. Vertex crossings sit at 1314, 1361.5, 1474.5, 1493, 1597, 1639.5, 1659 and 1700.5 px, so first to last vertex is 386.5 px for 54.0 mm (7.16 px/mm), while single spans run from 5.3 px/mm (lens I) to 13 px/mm (l3). The figure is schematic and gives proportions only, as the semi-diameter pass found.

Silhouette against the live page:

- All four lenses are drawn at one height within 1.5 %; the page draws them at 25.11 / 25.00 mm. Agrees.
- Lens I square-cut with an almost flat rear face, lens II biconcave and square-cut: the page matches both.
- Diaphragm: drawn at 0.48 of the l2 space (5.8 mm on the printed 12.0 mm) with an opening of 0.80 of the lens height; the model has 6.0 mm and 19.31 / 25 = 0.77. Agrees.
- Lens III is drawn with a flat-topped edge about 0.6 of its centre thickness; the model's edge is 0.82 mm (0.12). The figure draws r5 with 12 px of sag and r6 with 29.5 px (ratio 2.5) where the printed radii give 0.84 and 7.03 mm (ratio 8.4), so the drawn edge is not to scale. A drawn-proportion edge would need lens III at about 18 mm, inside the axial beam (20.1–20.4 mm there at the real-ray aperture). Kept.
- Lens IV is drawn to a knife edge; with the printed ±194 mm radii that needs about 31 mm, above the printed 50 mm diameter. Kept at 25 mm (1.77 mm edge).

Rims: no change. Lens I's 25.11 mm passes the paraxial f/2 pupil (25.10 mm). The iris is sized by the paraxial rule (19.31 mm), and the real axial ray that grazes it enters lens I at 23.54 mm, so the real-ray aperture is about f/2.13 and the extra 0.11 mm above the printed 25.00 mm carries no light; it is invisible on the page and stands as decided earlier. Lands and cuts: none (no face sits below the pre-pass rims and there is no `rimExtensionSd` or `rimCutDepthMm`); the light-rule comparison against the pre-pass rims gives a worst loss of 0.0 points (100.0, 100.0, 98.9, 96.0, 92.3, 88.4, 84.1 % at 0–12.2°, unchanged).

Labels changed (the patent numbers its lenses I–IV in Figure 4 and throughout the text; the page drew 1–4):

| Element | Before (`name` / `label` / drawn) | After |
|---|---|---|
| 1 | L1 / Element 1 / 1 | I / Element I / I (`diagramLabel`) |
| 2 | L2 / Element 2 / 2 | II / Element II / II |
| 3 | L3 / Element 3 / 3 | III / Element III / III |
| 4 | L4 / Element 4 / 4 | IV / Element IV / IV |

The analysis headings follow; the header comment says the names are the patent's lens numbers. On the page the four labels sit clear of each other and of the stop and image labels.

Rechecked and found correct: `type` strings against the radius signs (I +56 / −1500 biconvex, II −55 / +80 biconcave, III −373 / −48 positive meniscus concave to the object, IV ±194 equiconvex); thick-lens focal lengths 88.75, −48.05, 89.64 and 159.91 mm, recomputed; roles (collective / dispersive wording is the patent's, crown / flint follows from the printed D-to-G′ spreads, 0.01315 and 0.02811); no cemented surfaces, so no `doublets`, and the patent names no groups; no `apd` tags (the patent names no special glass). Movement: no gaps and no zoom block, `closeFocusM` 1e15, the focus slider reads "Not modeled", and the focus description says only that the patent gives infinity data. Engine EFL 100.405 mm, f/2.0, stop 19.31 mm and half-field 30.09° are the same before and after. Surface check OK; aperture check iris-limited within 3 %; image-circle and field-coverage checks skip the lens (no format).

Glass and colour: a two-line scan of the repository catalogue and the Hoya, Ohara and Sumita vendor files, at D (589.29 nm) and G′ (434.05 nm), finds no row matching both printed indices. Nearest crown rows: Sumita VC79 (nD 1.60960, +0.00002, but nG′ 1.62302, +0.00029; not in the repository catalogue and not of the period) and SK3 / BACD3 (nD −0.00086). Nearest flint rows: the SF5 family (Schott SF5 / N-SF5, Ohara S-TIM25 / PBM25, Hoya E-FD5 / FD5, Sumita SF5), nD −0.00078 and nG′ −0.0007 to −0.0010. The crown recurs in Figure 3 (nD 1.60960, the same nG′ 1.62273), so it is a real melt; the flint does not recur. The D-to-G′ spreads put the Abbe numbers near 59 (crown) and 32 (flint); the analysis now says 59 where it said 58. The patent prints nothing else (no glass name, no Abbe number, no other line). All four elements stay index-only, which keeps colour off for the whole lens, as the rule for nD / nG′-only files requires. No catalogue row is proposed. No assignee is printed and `source.assignees` is empty.

Open:

- The printed nG′ (G′ = 434.05 nm) has no element field (`ng` is 435.83 nm), so the second printed line is recorded only in the notes.
