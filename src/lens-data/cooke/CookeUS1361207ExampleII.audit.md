# Audit: COOKE 100mm f/4.5 (US 1,361,207 Example II Design)

The patent drawing and the Example II table were read from the page images. The model uses the printed radii, axial thicknesses and separations multiplied by 100, and the printed nD and V of the two glasses. The iris position and the 11.5 mm rims are estimates. The computed D-line focal length is 101.56 mm against the nominal 100 mm; this is recorded and nothing was fitted. Example I of the same patent shows a larger focal-length discrepancy in the US print and is not part of this file.

The data file passes the schema and geometry checks. On axis, the central 90 % of the pupil passes in full and 195 of 201 sampled rays pass over the whole pupil. Off-axis ray counts were diagnostic only and are not a coverage figure. The file was delivered as a patent design with no product claim (closed 2026-11-17: renamed and reworded in the cleanup pass below).

## 2026-11-17 — Deployment validation

An independent re-read of the patent page images (US 1,361,207, drawing sheet and specification pages 1–2, at 300–450 dpi) checked every value of Example II: 8 radii with their signs, 7 thicknesses and separations, 4 indices and 4 V values. All agree with the data file after multiplying lengths by 100. The British specification GB 113,590 A, page 2, prints the same Example II numbers. The front page gives Arthur Warmisham as inventor, Taylor, Taylor & Hobson Ltd. as assignee, filing on January 7, 1918 and grant on December 7, 1920.

Verdict: valid, with form fixes. Example II is a different prescription from Example I (the Aviar form). The patent describes it as a long-focus, moderate-field design; no source was found that ties it to a named Aviar series, so it stays a patent design of the Aviar family with no product claim.

Focal-length residual: the printed table traces to 101.56 mm, 1.56 % above the stated 100 mm. Both the US and GB prints carry the same numbers. A scan of single-value changes (one digit, two digits swapped, or a sign, on each radius and spacing) gave about twenty candidates within 0.4 % of 100 mm (for example r4 1.099, S3 .0979, r8 .3322), none unique, so no misprint is established and the printed values are kept.

Changes made:

- `maker`: "Taylor, Taylor & Hobson" → "Cooke" (house maker for this company).
- `source.patentNumber`: "US 1,361,207" → "US 1,361,207 A" (house form).
- `source.example.label`: "Example 2" → "Example II" (as printed).
- `source.assignees`: "Taylor, Taylor & Hobson Ltd." → "Taylor, Taylor & Hobson Limited" (corpus spelling).
- `catalog.focalLengthMm.design`: 101.56052899987043 → 101.56 (rounding).
- Elements: added `focalLengthMm` (51.56, −47.74, −58.08, 44.08) and plain optical `role` strings; `indexReferenceNote` reworded in plain English.
- `focus.closeFocusM` written as 1e15; `focus.description` replaced with a plain infinity-only statement (the residual and the inferred items moved to the header comment).
- Empty `groups` and `doublets` arrays removed.
- Header comment added (source, example, scale, residual, inferred stop, rims and back focus).
- Analysis rewritten to the standard section layout.

No radius, thickness, index, V value or rim was changed.

First-order values after the changes: focal length 101.5605 mm, f/4.5, stop radius 8.4995 mm, back focus 85.6178 mm (computed paraxial image distance), first surface to image 114.04 mm. Element focal lengths 51.56, −47.74, −58.08 and 44.08 mm.

Audit results: the surface validator reports no errors. The aperture audit finds no surface below the f/4.5 axial ray (the beam needs 11.28 mm at surface 1; rims are 11.5 mm). The clearance trace at image heights 18, 26.8 and 36.4 mm shows no axial clipping and no blocked chief ray, but heavy vignetting: surfaces 1–2 cut 68–79 % of one side of the bundle at 10–20°. The image-circle and field-coverage audits were not run, since the file has no image format. The smallest glass edge is 0.12 mm.

Open:

- Key, file name, `name`, `subtitle` and `specs` wording ("PATENT ONLY; NO RETAIL IDENTITY", "ESTIMATED MIDPOINT IRIS AND RIMS") for the cleanup pass; suggested name "COOKE 100mm f/4.5 (US 1,361,207 Design)".
- Element `type` labels could say "Biconvex Positive" / "Biconcave Negative"; no glass labels are assigned (dense baryta crown 1.6116 / 56.4, heavy flint 1.6206 / 36.2).
- Rims: Fig. 2 draws the outer lenses about 20 % taller than the inner ones; the uniform 11.5 mm rims do not follow the figure, and the outer elements' edge thickness limits how far they can grow. For the semi-diameter pass. (Closed 2026-11-18: inner flints set to the figure's proportions; see below.)
- The stop is inferred at the midpoint of the middle air space; the patent shows none.
- Whether to cite GB 113,590 A (1918) instead of the US grant, to match the Example I file.

## 2026-11-17 — Cleanup and wording pass

Text and metadata only; no radius, thickness, index, V value, stop or rim was changed.

Fields changed:

- `subtitle`: "1920 Example II 100 mm f/4.5; PATENT ONLY" → "US 1,361,207 A, Example II — long-focus form of the Aviar four-lens type".
- `specs`: "4 ELEMENTS / 4 GROUPS", "PATENT ONLY; NO RETAIL IDENTITY", "ESTIMATED MIDPOINT IRIS AND RIMS" → "4 ELEMENTS / 4 GROUPS", "ALL SPHERICAL", "DESIGN F/4.5".
- Element `label`: "L1"–"L4" → "Element 1"–"Element 4"; `type`: "Biconvex" / "Biconcave" → "Biconvex Positive" / "Biconcave Negative"; `role` strings reworded to say what each element does.
- Element `glass` added: "Unmatched (nD 1.6116 / V 56.4, dense baryta crown)" on elements 1 and 4, "Unmatched (nD 1.6206 / V 36.2, heavy flint)" on elements 2 and 3. No exact catalogue row exists: the nearest are SK1 (Sumita) 1.61025 / 56.5 (Δnd −0.00135, Δνd +0.1) and Schott F2 1.62004 / 36.37 (Δnd −0.00056, Δνd +0.17), both outside the 0.0001 index tolerance.
- `indexReferenceNote` shortened; `focus.description` → "Infinity focus only; the patent gives no close-focus data."
- Header comment: one sentence added that Example I is the wide-field form associated with the Cooke Aviar.
- Data file reformatted to plain identifier keys.
- Analysis: title and first mention now use the lens name; the collection-internal remark about Example I removed; the misprint-trial passage reduced to its conclusion; "Model Verification" heading renamed "Model Scope"; glass paragraph states the nearest catalogue rows; element headings read "Element N (LN)".

There are no cemented surfaces, so the file carries no `cemented` tags and no `doublets`.

Engine numbers before and after are identical: focal length 101.56052899987043 mm, f/4.5, half field 26.6003°, stop radius 8.499502 mm, back focus 85.6178 mm. The surface validator reports no errors; the aperture audit reports the lens within 3 % of the stated f-number with no rim, trace or iris limit.

Open:

- `lensMounts`, `imageFormat` and an image circle: the patent states no format or field angle, so none is set.
- Rims: Fig. 2 draws the outer lenses about 20 % taller than the inner ones; the uniform 11.5 mm rims do not follow the figure and vignette heavily off axis (surfaces 1–2 cut 68–79 % of one side of the bundle at 10–20°). Outer-element edge thickness (0.12 mm at 11.5 mm) limits growth. For the semi-diameter pass. (Closed 2026-11-18: inner flints set to the figure's proportions; see below.)
- The stop is inferred at the midpoint of the middle air space; the patent shows none.
- The printed table computes to 101.56 mm against the stated 100 mm; no misprint established in either the US or the GB print.
- Whether to cite GB 113,590 A (1918) instead of the US grant.
- No source ties Example II to a named Aviar series or focal length; the Aviar link for the patent family rests on Wikipedia and a Wikimedia Commons file title, read as search excerpts.

## 2026-11-18 — Semi-diameter pass against the patent figure

Source: US 1,361,207, drawing sheet (PDF page 1), Fig. 2, the Example II section, read from the 300 dpi scan at 600 dpi. The GB 113,590 A print carries the same figure.

Scale: the optical axis was located at the thick axis line, and each vertex at the centre of its stroke beside the axis. The first-to-last vertex distance is 915 px against the 28.42 mm of the table, giving 32.2 px/mm. The individual spans disagree with the table by much more than 10 %: element 1 is drawn at 41.8 px/mm, the front air space at 29.6 and the rear air space at 32.0, and the three air spaces together give 31.1 px/mm. Fig. 2 is therefore schematic in its axial spacings, and its rim heights are used as proportions. Rim heights measured from the local axis to the centre of the outline stroke on both sides and averaged: element 1, 357 px; element 2, 290 px on its outer face, flat-topped, with a bevel ending at about 261 px on the face toward the diaphragm; element 3, the same as element 2 in mirror image; element 4, 338 px. Relative to element 1 these are 0.81 for the flints, 0.73 for their bevelled faces and 0.95 for element 4.

| Surface | Before | Figure (32.2 px/mm; 31.1 px/mm) | f/4.5 axial beam | After | Evidence |
|---|---:|---|---:|---:|---|
| 1, 2 | 11.5 | 11.1; 11.5 | 11.28, 11.22 | 11.5 | Within measurement noise; held by the axial beam. |
| 3 | 11.5 | 9.0; 9.3 (0.81 × element 1 = 9.3) | 8.87 | 9.3 | Outer face of element 2, flat-topped in the figure. |
| 4 | 11.5 | 8.1; 8.4 (bevelled face) | 8.75 | 8.8 | Bevel drawn below the axial beam; the beam sets the floor. |
| 5 | 11.5 | 8.1; 8.4 (bevelled face) | 8.72 | 8.8 | As surface 4, mirror image. |
| 6 | 11.5 | 9.0; 9.3 | 8.68 | 9.3 | Outer face of element 3, flat-topped in the figure. |
| 7, 8 | 11.5 | 10.5; 10.9 | 9.71, 9.75 | 11.5 | 5–9 % below the model: inside measurement noise for a schematic figure. A trial at 10.9 cost 4.3 points of corner light at 12°, more than the 3-point allowance, so it was not applied. |

The figure draws each flint with a square outer rim and a chamfer on the face toward the diaphragm, so the two faces of each flint take separate values and the renderer's straight rim join stands for the chamfer. An overlay of the figure on the model section at 32.2 px/mm matches element heights and the chamfer well; the figure's exaggerated element thicknesses are not modelled.

Clearance and light: the engine gives focal length 101.5605 mm, f/4.5, stop radius 8.4995 mm and half field 26.60°, the same before and after. Geometric transmission is unchanged at every sampled field (100, 99.9, 96.9, 93.4, 89.5, 83.5 and 75.7 % at 0–12°); restoring either flint to 11.5 mm wins back nothing. The chief ray passes every rim out to 31.7° (surface 1 limits it, as before). The real-ray trace at image heights of 18 and 36.4 mm (10.0° and 19.6°) shows no axial clipping and no blocked chief ray; the new flint rims trim at most 8 % of one side of the bundle at surface 3, light that the outer rims already stop. The surface validator reports no errors, the aperture audit reports no rim limit, the iris stays in air with 0.37 mm to the nearest face edge, and the renderer trims no element. The image-circle and field-coverage audits skip the file, which has no image format.

Metadata: no mount, image format or image circle was added. The model is the patent's unit-focal-length design multiplied by 100, the patent states no format or field angle, and no source ties Example II to a sold lens. The f-stop list and `maxFNumber` were kept. Product name: the patent family is the one sources link to the Cooke Aviar (Wikipedia, "Cooke Optics"; Science Museum Group records of Cooke Aviar lenses). The present name, which carries no Aviar label, fits evidence that reaches the family but not this example.

Open:

- `source.sdSource` is still "heuristic"; with the rims now taken from the proportions of Fig. 2, "figure-measured" may be the better value. Left for the coordinator, since this pass changes rims only. (Closed 2026-11-18: "heuristic" fits; see the second review below.)
- Element 4 is drawn 5–9 % smaller than modelled; lowering it costs more corner light than the allowance, and its 0.12 mm edge also stops it from growing. (Closed 2026-11-18: re-measured at 0.95 times lens I and kept; see below.)

## 2026-11-18 — Second review on the local site

Compared: the live page at 1400 × 900 (diagram and the inspector of all four elements) with Fig. 2 read at the scan's native resolution (page 1 is a 2320 × 3408 px bilevel image), and the specification pages for the table, glass names and text. Every printed radius, thickness, separation, nD and V of Example II was re-read on specification page 2 (lines 1–20) and agrees with the file at ×100.

Rims, re-measured. The axis line drifts about 4 px across the figure, so each element was read against its local axis, to the centre of the outline stroke, on both sides. Vertex strokes give 458 px for the 28.42 mm first-to-last span (16.1 px/mm), but the single spans run from 13.3 px/mm (the flints) to 21.0 px/mm (lens I), and an arc fit to r1 gives 520–650 px against a drawn r2 of about 1100 px where the printed ratio is 12 : 1, so the figure is schematic in both directions and only its proportions are used.

| Element | Figure height (top / bottom, px) | Ratio to lens I | At lens I = 11.5 mm | Model | Verdict |
|---|---|---:|---:|---:|---|
| I (surfaces 1, 2) | 180.5 / 177.0 | 1.00 | 11.5 | 11.5 | Held by the f/4.5 beam (11.28 mm at surface 1). |
| II outer face, flat top (3) | 146.0 / 145.5 | 0.815 | 9.4 | 9.3 | Agrees. |
| II chamfer end (4) | 133.5 / 127.5 | 0.73 | 8.4 | 8.8 | Beam floor 8.75 mm governs. |
| III chamfer end (5) | 133.5 / 130.5 | 0.74 | 8.5 | 8.8 | Beam floor 8.72 mm governs. |
| III outer face, flat top (6) | 147.5 / 144.5 | 0.817 | 9.4 | 9.3 | Agrees. |
| IV (7, 8) | 172.0 / 166.5 | 0.947 | 10.9 | 11.5 | 5 % above the reading; kept (below). |

No rim was changed. Lens IV is 5 % above the proportional reading, inside the 10 % band, and I and IV are not neighbours, so no step order is wrong; lowering it to 10.9 mm costs 4.3 points of light at 12°, and 11.1 mm costs 3.0 points for a change inside the reading error. The flint cuts (surfaces 3–6, 11.5 → 9.3 / 8.8 mm against the package rims) cost nothing: the light-rule measure against the package file gives 100, 99.9, 96.9, 93.4, 89.5, 83.5 and 75.7 % at 0–12° for both, worst loss 0.0 points, and restoring either flint wins back 0.0 points. The flints keep their separate face values, which stand for the drawn flat top and chamfer toward the diaphragm. The engine numbers are unchanged: focal length 101.5605 mm, f/4.5, stop radius 8.4995 mm, half field 26.60°. The surface validator reports no errors, the aperture audit reports the lens within 3 % of f/4.5 with no rim limit, and the full-pupil longitudinal spherical aberration is +0.454 mm, as the analysis states.

Labels and brackets changed:

| Field | Before | After | Evidence |
|---|---|---|---|
| Element `name` | L1, L2, L3, L4 | I, II, III, IV | Fig. 2 and the glass table (page 2, lines 15–19) number the lenses I–IV. |
| Element `label` | Element 1 … Element 4 | Element I … Element IV | As above. |
| Element `diagramLabel` | none (the diagram showed 1–4) | I, II, III, IV | As above; `name` and `diagramLabel` agree. |
| `groups` | none | FRONT HALF (surfaces 1–4), REAR HALF (5–8) | Claims 1 and 2 (page 2, lines 57–83): two halves separated by a median air space, each a positive and a negative lens. |

On the live page the numerals sit under each element (III is raised clear of II), the two bracket labels sit under them without touching, the movement overlay reports two groups and no modelled movement, and each inspector reads the new heading with its type, sodium-D note, n and V, focal length, glass label and role.

Checked and found correct: element types against the signs of R (I and IV biconvex, II and III biconcave); roles (both negatives and the rear positive turn their shallower face to the middle air space, as the invention requires); element focal lengths 51.56, −47.74, −58.08 and 44.08 mm against the traced values; no cemented surfaces, so no `doublets` and no `cemented` tags; no aspheres and no `A` labels; no `apd` tag (the patent names only a dense baryta crown and a heavy flint); the stop between II and III at the middle of S2 (the patent draws no diaphragm); specs. Movement: infinity only, `closeFocusM` 1e15, no gap table and no zoom block; the focus slider shows "Not modeled" and `focus.description` says only that the patent gives no close-focus data.

Glass and colour: compared at the sodium D line, no catalogue row lies within the exact window for either glass. Nearest for the flint (nD 1.6206, V 36.2): Ohara TIM11 at nD 1.62080 / V 35.87 (ΔnD +0.00020, ΔV −0.33) and the F2 family (Schott F2, Hoya E-F2, Ohara S-TIM2, Hikari J-F2) at nD 1.61989 (ΔnD −0.00071). For the crown (nD 1.6116, V 56.4) no row comes within 0.0008 in index at D; the nearest at d are Hoya BACD8 1.61117 / 55.77, Sumita SK1 1.61025 / 56.50 and Hoya BACD6 1.61375 / 56.38, and the vendor AGF files give the same candidates. The patent prints only nD, V and the type names (page 2, lines 15–19); the crown recurs as lenses I and IV of Example I (page 1), so it is a real melt, while the flint appears only in Example II. No partial dispersion or other line is printed, and the patent prints no aberration curves to compare colour against. Colour is computed from nD and V through the Abbe fallback; no medium is constant.

Text: the header's rim note now gives lens IV as about 0.95 times the height of lens I with the 4.3-point cost, instead of "10.5 mm, within measurement noise", and uses the lens numerals. In the analysis, the element headings use the numerals, a sentence names the numerals and the two halves, and the Commons source link is corrected from an en.wikipedia.com address to its commons.wikimedia.org page, whose description says the drawing is redrawn from Fig. 1, so the Aviar title attaches to Example I.

Assignee: "Taylor, Taylor & Hobson Limited" (front page "Taylor, Taylor & Hobson Ltd.") is the only Taylor, Taylor & Hobson entry among the lens files; no variant to consolidate.

`source.sdSource` stays "heuristic", and that reading fits: the figure has no usable scale, so every absolute rim hangs on the f/4.5 beam, with the figure giving only proportions. The earlier suggestion of "figure-measured" is not supported.

Open:

- The stop is inferred at the middle of S2; the patent shows none.
- The printed table computes to 101.56 mm against the stated 100 mm; no misprint established in either print.
- Whether to cite GB 113,590 A (1918) instead of the US grant.

