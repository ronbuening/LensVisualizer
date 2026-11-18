# Patent audit

## Source

US 1,792,917, *Photographic Objective*, Willy Merté, assignor to the firm Carl Zeiss, Jena. Filed September 23, 1927
(German priority September 28, 1926), granted February 17, 1931. Two pages: a drawing sheet with the figure and a
hand-lettered copy of the data, and one text page with the typeset table. The patent has one numerical example, given
for a focal length of 100 units, a relative aperture of 1:4.5 and an image field of 65°.

## Transcription

The stored prescription is the printed example at the patent's own scale, with no scale factor.

| Surface | R | Distance after | Meaning |
| --- | --- | --- | --- |
| r1 | +25.90 | 5.12 | dI |
| r2 | −96.10 | 2.31 | dII (cemented surface) |
| r3 | +18.41 | 0.75 | l1 (air) |
| r4 | +23.78 | 3.48 | dIII |
| r5 | +35.54 | 2.90 | b1 (air, to the diaphragm) |
| Diaphragm | flat | 2.80 | b2 (air) |
| r6 | −33.12 | 3.96 | dIV |
| r7 | −22.74 | 1.57 | l2 (air) |
| r8 | −18.14 | 1.88 | dV |
| r9 | +77.38 | 5.56 | dVI (cemented surface) |
| r10 | −25.37 | 86.7413 | computed back focus, not printed |

Glasses as printed: I and VI nD 1.61087, ν 55.8; II and V nD 1.53994, ν 47.4; III and IV nD 1.56064, ν 61.1. The index
reference is the sodium D line, as the patent's "nD" states.

## Values the patent does not print

- Back focus: the computed paraxial image distance.
- Diaphragm opening: 9.24 mm radius, from f/4.5 at the computed focal length.
- Semi-diameters: all estimated; the patent prints no diameters.

## 2026-11-17 — Deployment validation

Checked against 300 and 400 dpi images of both patent pages, independently of the package's own notes: all ten radii
and their signs, all ten thicknesses and distances including the two diaphragm distances, the three index and Abbe
number pairs, the cemented surfaces and element shapes against the figure, and the front-page names and dates. The
typeset table and the drawing sheet agree with each other and with the file in every value; dV reads 1.88 on both.
No mismatch was found.

Verdict: valid with fixes. The prescription is an exact copy of the sole example and reproduces the stated focal
length. The design is plausibly the basis of the Zeiss Orthometar f/4.5: Wikimedia Commons titles its redrawing of this
patent's figure "Orthometar, 1927", and the general Orthometar-type diagram shows the same six-element, four-group
layout. No maker-published production prescription was found, so the file stays a patent reference.

Changes made:

- `source.patentNumber`: "US 1,792,917" → "US 1,792,917 A" (house form).
- `source.authors`: "Willy Merte" → "Willy Merté" (accent as printed).
- `source.assignees`: "Carl Zeiss Jena" → "Carl-Zeiss-Stiftung" (the spelling used elsewhere for "the firm Carl Zeiss").
- Semi-diameters: surfaces 3 and 4, 9 → 9.8; surface 5, 9 → 9.4; surface 6, 9 → 9.2; surface 7, 9 → 9.4. At 9 mm
  these rims cut the f/4.5 axial beam, which needs 9.70, 9.70, 9.33, 9.13 and 9.33 mm there, so the model worked at
  about f/4.85. The new values are the smallest that pass the beam.
- `checks.gapSagFrac`: added, 0.96. The 0.75 air space between r3 and r4 closes at a height of about 10 mm, so at
  9.8 mm the two surfaces take up 0.71 of the 0.75 gap, more than the default allowance of 0.675.
- Elements: `cemented` "D1" on L1 and L2, "D2" on L5 and L6; `doublets` added for surfaces 1–3 and 8–10. The patent
  describes both pairs as cemented.
- `catalog.focalLengthMm.design`: 100.15266512809436 → 100.15; last gap 86.74126880899716 → 86.7413;
  `closeFocusM` written as 1e15. Rounding only.
- Data file reformatted to the house layout with a plain header; no prescription value changed.
- Analysis and audit files rewritten; both had been the same working log.

First-order values after the changes: focal length 100.1527, f/4.5, back focus 86.7413, first to last surface 30.33,
total length 117.0713, diaphragm radius 9.24. Longitudinal spherical aberration +0.29 / −0.47 / −0.62 / −0.45 mm at
1 / 0.85 / 0.7 / 0.5 of the f/4.5 aperture.

Audit results: the surface check reports no errors. The aperture check reports the lens within 3 % of f/4.5 with no
rim limit. A real-ray clearance trace at an image height of 63.7 mm (32.5° off axis, the edge of the patent's 65°
field) shows no surface cutting the axial beam and no surface blocking the central ray; the beam is cut by about half
its width at the outer pairs. The image-circle and field-coverage checks skip the file because it is hidden and has
no image format.

Open:

- Name, key, subtitle, specs and the focus description still use working wording ("PATENT ONLY; RETAIL IDENTITY
  UNPROVED", "LITERAL STOP POSITION; ESTIMATED RIMS", "Not factory identity"); the subtitle's "100 mm" is the
  patent's 100 units. File name and key to the house pattern. (Closed 2026-11-17: renamed and reworded.)
- Element types "Meniscus" could say positive meniscus; elements have no roles, focal lengths or glass labels.
  (Closed 2026-11-17 in the cleanup pass.)
- Rims against the figure: the drawing shows the outer pairs at roughly 10.9 mm and the menisci at roughly 8.6 mm at
  the figure's scale, against 12 and 9.2–9.8 in the model. The outer rims and the corner darkening are for the
  semi-diameter pass. (Closed 2026-11-18 in the semi-diameter pass.)
- No image format or mount is set; the patent is given at a normalised focal length.
- Orthometar link: a maker's diagram or catalogue prescription would be needed before naming the product. (Closed
  2026-11-17: the name now carries the family word; the link is stated as a family link only.)

## 2026-11-17 — Cleanup and wording pass

Fields changed (no optical value, rim, stop or gap allowance changed):

- `subtitle`: "1931 100 mm f/4.5; PATENT ONLY" → "US 1,792,917 A, sole example — Orthometar-type double objective".
- `specs`: the three working lines replaced by "DESIGN F/4.5", "ALL SPHERICAL" and "65° FIELD" (the patent's stated
  field); "6 ELEMENTS / 4 GROUPS" kept.
- `focus.description`: now "Infinity focus only; the patent gives no close-focus data." `closeFocusM` stays 1e15.
- Elements: labels "Element 1" to "Element 6"; types Biconvex Positive, Biconcave Negative, Positive Meniscus,
  Positive Meniscus, Biconcave Negative, Biconvex Positive; `focalLengthMm` 33.94, −28.41, 115.87, 113.82, −27.03,
  31.93; a plain role on each.
- Cemented ids: "D1" / "D2" → "C1" / "C2" on both members of each pair and in `doublets`.
- Header comment: the closing paragraph now states the Orthometar link as a family link.
- Analysis: title set to the lens name; the product link stated once at its strength; the scale remark removed
  (the patent itself prints a focal length of 100); "Model Verification" renamed "Model Scope and Limitations".

Glass labels: no catalog row lies within 0.0001 in index and 0.15 in Abbe number of any of the three printed glasses,
so each element carries an "Unmatched" label with its printed values. Nearest rows, for the record: 1.61087 / 55.8,
Hoya BACD8 1.61117 / 55.77 (Δn +0.0003); 1.53994 / 47.4, Ohara S-TIL2 1.54072 / 47.23 (Δn +0.0008); 1.56064 / 61.1,
Ohara S-BAL50 1.55963 / 61.17 (Δn −0.0010).

Engine numbers before and after this pass are identical: focal length 100.15266512809433, f/4.5, half field
39.4967°, diaphragm radius 9.239634, back focus 86.7413. The surface check reports no errors and the aperture check
reports no rim limit.

Open:

- Rims against the figure: outer pairs about 10.9 mm and menisci about 8.6 mm at the figure's scale, against 12 and
  9.2–9.8 in the model; for the semi-diameter pass. The menisci cannot go below the f/4.5 axial beam. (Closed
  2026-11-18 in the semi-diameter pass.)
- No `imageFormat`, `lensMounts` or image circle: the patent states a 65° field and no film size or mount.
- The name's "100mm" is the patent's focal length of 100 units, not a catalogue focal length.
- Period glass identification (Schott melt types for the three glasses) not attempted.
- A maker's diagram or published prescription of a production Orthometar has still not been compared.

## 2026-11-18 — Semi-diameter pass against the patent figure

Source: the drawing sheet of US 1,792,917 (page 1, the only figure), a 300 dpi CCITT scan, measured at 600 dpi with
the silhouette profiler and checked by eye on 3× zooms of both bevels.

Scale: the drawn axis lies at row 3199.5 (600 dpi). The first and last vertices sit at columns 2009.5 and 2967, a
957 px span for the table's 30.33 mm, so 31.55 px/mm (0.0317 mm/px). Two partial spans agree within 2 %: r1 to r5
372 px against 368 predicted, r6 to r10 417 px against 409. The diaphragm cross falls within 10 px (0.3 mm) of the
printed b1 position, and the drawn sag of r1 at its rim (72–76 px) matches the radius at the measured rim height,
so the vertical and axial scales agree.

Figure readings, the mean of the top and bottom outlines less half a line width, and the model's values:

| Surface | Model before | Figure | Floor (f/4.5 axial) | Model after | Basis |
| --- | --- | --- | --- | --- | --- |
| 1, 2 | 12 | 10.9 (pair rim, square) | 11.13 / 10.78 | 12 | kept; see below |
| 3 | 9.8 | 8.7 (end of bevel) | 9.70 | 9.8 | floor |
| 4, 5 | 9.8, 9.4 | 8.6 | 9.70, 9.33 | 9.8, 9.4 | floor |
| 6, 7 | 9.2, 9.4 | 8.6 | 9.13, 9.33 | 9.2, 9.4 | floor |
| 8 | 10 | 8.6 (end of bevel) | 9.15 | 9.5 | figure proportion |
| 9, 10 | 12 | 10.9 (pair rim, square) | 9.66 / 9.93 | 12 | kept; see below |

Every figure reading is close to 0.906 times the model's value. Divided by that common factor, the ratios fall
within ±3 % for all surfaces except surface 8 (0.95). The drawing therefore has the model's shape and differs only in
overall size. At that size it would not pass f/4.5: the drawn front rim is 10.9 against an 11.13 entrance beam, and the
drawn menisci are 8.6 against 9.13–9.70. The f/4.5 beam is the floor and wins at the menisci and the front pair.
Lowering only the outer pairs toward 10.9 would break the drawn 1.26 ratio of pair height to meniscus height and cost
light. Trial rims of 11.2 on the front pair and 10.9 on the rear pair, with 9.2 on surface 8, lost 9.4 points of
corner illumination at 12.2°. The smallest equal-height set that keeps the loss within 3 points was 11.6 on both pairs,
which is 3 % from the stored 12 and inside measurement noise. Both outer pairs therefore stay at 12.

Surface 8 is the one change: 10 → 9.5. The drawing ends the rear flint face at the height of the meniscus rim (8.6 at
figure scale, the same as L4), with a bevel up to the pair rim. Scaled by the drawing's common factor, that is 9.5 for
the model, above the 9.15 axial floor. The model's rear step now matches the front one: r3 at 9.8 against r4 at 9.8,
and r8 at 9.5 against r7 at 9.4.

Clearance and light after the change: the f/4.5 axial beam passes every surface. The central ray to 63.7 mm (32.5°, the
edge of the patent's 65° field) passes every surface. Surface 8 now cuts 35 % of that beam's width on one side, against
27 % before, but the outer faces still cut 50–55 % and set the corner. Corner illumination is unchanged at the app's
field points: 100.0 / 99.1 / 97.1 / 95.0 / 93.0 / 90.5 / 87.4 % from 0° to 12.2°, before and after. Leaving surface 8
at 10 wins back 0.0 points. On a scratch copy with a 127.4 mm image circle, illumination at 32.5° is 35.2 % both
before and after, and no field point loses more than 0.2 points. The surface check reports no errors (the 0.75 mm r3/r4
gap still needs the existing 0.96 allowance), and the aperture check reports no rim limit. Engine values are
identical before and after: half field 39.4967°, focal length 100.1527, f/4.5, diaphragm radius 9.2396, back focus
86.7413. The image-circle and field-coverage checks skip the file because it has no image format. The side-by-side
comparison of the drawing and the model at 15.78 px/mm is kept outside the repository.

Metadata: `catalog.imageCircleMm` set to 127.6, from the patent's statement (text page, column 1, lines 28–30) that
the objective "sharply covers at a relative aperture of 1:4.5 an image field of 65°": 2 × 100.15 × tan 32.5° =
127.61 mm. With it, the image-circle check passes (0 undersized). The field-coverage check reaches the full 32.5°
corner: a traced image height of 63.80 mm against 63.80 mm needed, 100 % coverage, corner clear. Engine values are
unchanged. The patent names no plate size or camera, and no source was found for a 100 mm production Orthometar or its
format; documented Orthometars are the 21 cm f/4.5 photogrammetry lens and the 3.5 cm f/4.5 Contax lens. `imageFormat`
and `lensMounts` stay unset.

Open:

- The whole drawing is about 9 % smaller than the f/4.5 beam. The rims follow its proportions, not its absolute size.
- The bevels on L2 and L5 are drawn as conical chamfers. The model shows them as the step between the flint's free
  face and the pair rim.
- `imageFormat` and `lensMounts` need a product source for the format.
- The name's "100mm" is the patent's normalised focal length; no 100 mm production Orthometar is documented in the
  sources consulted.

## 2026-11-18 — Second review on the local site

Compared: the local page (1400×900 and a 3× device-scale shot) against the drawing sheet of US 1,792,917 rendered at its
native 300 dpi and at 286 dpi to match the page's 14.9 px/mm, side by side and overlaid; every element inspector; the
focus overlay and the closest-focus slider position; the typeset text page.

Figure scale, re-measured independently: the drawn axis lies at row 1598 (300 dpi). Vertex line centres sit at columns
1006 (r1) and 1482 (r10), 476 px for the table's 30.33, so 15.69 px/mm. Two inner vertices check it: r5 predicted at
1189, found 1186–1191; r6 predicted at 1278, found 1277–1280. The vertical scale agrees: r1 meets the flat pair rim
38 px behind its vertex, and R 25.9 gives 37.5 px of sag at the measured rim height. Line-centre readings, mean of top
and bottom: front pair 10.85, rear pair 10.93, III 8.64, IV 8.64, flint chamfer ends on r3 and r8 about 8.55. The
drawn pair-to-meniscus ratio is 1.26. These agree with the semi-diameter pass within 0.1.

Changes:

| Item | Before | After | Evidence |
| --- | --- | --- | --- |
| r5 `sd` | 9.4 | 9.8 | III is drawn square-cut: its top and bottom rim lines are flat from face to face (columns 1171–1208). Both faces take the larger face's beam-driven height (r4, 9.8; floor 9.70). |
| r6 `sd` | 9.2 | 9.4 | IV is drawn square-cut the same way (columns 1263–1317). Both faces take r7's height (floor 9.33). |
| Element `name` / `label` | L1–L6 / Element 1–6 | I–VI / Element I–VI | The drawing and the glass table designate the lenses I to VI. |
| `diagramLabel` | none (ids 1–6 shown) | I–VI | The page now prints I to VI under the elements, as the figure does. |

Both raises are light-neutral and change no clearance result. The f/4.5 axial beam and the 32.5° central ray pass every
surface. Illumination at the app's field points is 100.0 / 97.9 / 95.3 / 92.3 / 88.1 / 83.3 / 77.9 / 70.9 / 63.1 / 54.5 /
45.3 / 35.1 % from 0° to 32.5°, the same before and after. Surfaces 5 and 6 now cut 9 % and 10 % of the 32.5° beam
width, against 14 % and 13 % before; the outer pairs still cut 50–55 % and set the corner. The surface check reports no
errors, the aperture check reports no rim limit, the image-circle check passes, and field coverage reaches the 32.5°
corner. Engine values are unchanged: half field 39.4967°, focal length 100.1527, f/4.5, diaphragm radius 9.2396.

Lands and cuts: the file has no land. The one cut against the pre-pass rims is r8, 10 → 9.5, and it costs 0.2 points at
17.7°. That is slight, so it stays. Worst loss against the baseline: 0.2 points.

Kept after re-checking:

- Outer pairs stay at 12. The drawing is 10.9, but the f/4.5 entrance beam needs 11.13 at r1. The drawn menisci (8.64)
  are 6–11 % below their beam floors, so the drawing is uniformly small. Scaled so its pairs read 12, it gives menisci of
  9.5 and chamfer ends of 9.4, which matches the model within reading error.
- The site draws the flint's free edge as one straight slope from the pair rim to r3 (or r8). The figure draws a flat rim
  and a 45° chamfer. A rim extension would draw a vertical land rather than a chamfer, so the slope stays.
- `gapSagFrac` 0.96 is still the smallest two-decimal value that works: r3 and r4 at 9.8 take 0.713 of the 0.75 gap,
  a fraction of 0.951.

Labels, tags and movement re-checked:

- Types agree with the radius signs. Inspector focal lengths are +33.94, −28.41, +115.87, +113.82, −27.03 and +31.93.
  The cemented pairs are −557.5 and −681.7. The inspectors read "DOUBLET C1" and "DOUBLET C2".
- The stop sits at the printed b1/b2 position between III and IV. No group brackets are shown, and the patent names no
  groups. There is no `apd` tag, and the patent names no special glass.
- The file is infinity-only: no variable gap and no zoom block. The focus slider reads "Not modeled", and the focus
  overlay reports no modelled movement. The focus description states only that the patent gives no close-focus data.

Glass and colour: the text table and the drawing both print "nD", so `indexReference` "D" is right and no
`indexReferenceNote` is needed. Each of the three glasses is used twice in mirror positions. Converted to the D line,
no modern or obsolete Hoya, Ohara, Sumita or Schott row lies within 1e-4 / 0.15 of a printed pair. The nearest rows are:

- BACD8 (Hoya), about +0.0002 at D
- E-FEL2 / S-TIL2 / LLF2, about +0.0007
- S-BAL50 (Ohara), about −0.0011

The patent prints no other line indices, partial dispersions or aberration curves, so no colour comparison is possible.
Every element carries ν, so colour runs on the Abbe fallback, with no nd-only medium.

Assignee "Carl-Zeiss-Stiftung" is the corpus's form for "the firm Carl Zeiss, Jena" (27 files). The author "Willy Merté"
matches the other three Merté files.

Open:

- 1920s Schott melt types for the three glasses are not in the glass catalog. The modern and obsolete vendor files have
  no exact row.
- The flint chamfers (on II and V) remain drawn as straight slopes.
