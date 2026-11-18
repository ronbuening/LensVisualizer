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
  patent's 100 units. File name and key to the house pattern.
- Element types "Meniscus" could say positive meniscus; elements have no roles, focal lengths or glass labels.
- Rims against the figure: the drawing shows the outer pairs at roughly 10.9 mm and the menisci at roughly 8.6 mm at
  the figure's scale, against 12 and 9.2–9.8 in the model. The outer rims and the corner darkening are for the
  semi-diameter pass.
- No image format or mount is set; the patent is given at a normalised focal length.
- Orthometar link: a maker's diagram or catalogue prescription would be needed before naming the product.
