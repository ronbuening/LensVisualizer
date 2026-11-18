# Audit, November 17, 2026

- Transcription from the patent page images: six radii, four indices, four glass thicknesses, the stop air spaces and the f-number agree with the patent. The patent states the solar D line. G-prime is not an Abbe number.
- Independent paraxial and spherical ray checks agree with the model. The printed values are not optimized.
- Build geometry passes with default checks. Glass thickness is positive at 1,001 radial samples per interval. Minimum glass edge 0.135 mm at the estimated 4 mm shared rim; the patent gives no rim.
- 19 axial rays across ±90 % of the entrance pupil pass, and the near-axis image intercept falls at the computed back focus. Of 81 pupil samples, 81 pass on axis and 71 pass at 5°. The clipping off axis is left as it is.
- Duplicate check: no other file in the corpus cites 895,045 or has this six-surface prescription. The index 1.6489 occurs in unrelated modern models.
- No production link is claimed beyond the inventor, the assignee and the patent's stated lineage.

## 2026-11-17 — Deployment validation

An independent reader re-read US 895,045 from its page images at 300 dpi (not from the text layer) and checked: all six radii and their signs, four thicknesses, b1 = b2 = 1.5, four D-line indices, the cemented pairs L1+L2 and L3+L4, the element shapes against the drawing, and the front-page inventor, assignee and dates. No transcription difference was found. The patent's relative-dispersion column recomputes from its index columns in all four rows.

Verdict: valid with fixes. The prescription is a faithful copy of Example 1. The lens belongs to the Zeiss Anastigmat (Protar) family of US 444,714 and shares its layout and f/12.5 aperture with Series IV, but no source ties this prescription to a production lens, so no product is named.

Focal length: the printed table gives 101.11, which is 1.11 % above the stated 100. Example 2 of the same patent gives 100.00. Single-value trials that restore 100 are r2 5.8 → 5.9 (99.97) and d3 1.1 → 1.2 (99.95); the page prints 5.8 and 1.1 clearly, and the Austrian family member AT 35513 B (text only) reads the same. No misprint is established. A change of 0.05 in r1 moves the focal length by about 1 %, so one-decimal rounding is enough to explain it. Printed values kept.

Changes made:

- `maker`: null → "Carl Zeiss Jena" (the patent is assigned to the firm of Carl Zeiss).
- `source`: none → patent number "US 895,045 A", example "Example 1" (id "1"), year 1908, author Paul Rudolph, assignee Carl-Zeiss-Stiftung, `sdSource` "heuristic" (the rims are estimates).
- `catalog.focalLengthMm.design`: 100 → 101.11 (the computed value of the printed table).
- Last gap: 98.28319871121641 → 98.2832 (rounding only; still the paraxial back focus).
- Elements: added `cemented` "C1" on L1 and L2 and "C2" on L3 and L4, with matching `doublets` entries for surfaces 1–3 and 4–6; added element focal lengths (−14.81, 13.46, −14.54, 13.51) and short optical roles.
- `focus.description`: "Infinity-only patent reconstruction." → "Infinity focus only; the patent gives no close-focus data."
- Data file reformatted to the multi-line house style with a plain header. No prescription value changed.
- Analysis rewritten to the standard sections. This audit log had its process wording removed.

First-order values after the changes: focal length 101.1102, f/12.5 (stop semi-diameter 3.682), back focus 98.2832, total length 108.3832.

Audit results: surface validation OK. Aperture audit: within 3 % of the stated f-number, no rim, trace or iris limit. Image-circle and field-coverage audits skipped the file (no image format; it was hidden at the time, since made visible). A separate chief-ray trace passes the estimated rims at 39.6° off axis (height 3.53 at surface 1, 2.93 at surface 6).

Open:

- Closed 2026-11-17 (cleanup pass): name, key, subtitle, specs, element labels and types now in house form.
- Glass labels: closed 2026-11-17 (Unmatched labels added). Still open: an Abbe number needs a period Schott list matched on both nD and nG′; until then the model is monochromatic.
- Rims against the figure: closed 2026-11-18. Measured at the drawing's own scale the outer height is about 4.4, not 5; see the semi-diameter pass below.
- Trace field: 5° is far below what a wide-angle type of this family covers; the patent states no field.
- No image format or mount is set.
- Closed 2026-11-17: `aperture.maxFNumber` 22 set.

## 2026-11-17 — Cleanup and wording pass

Public text only; no radius, thickness, index, stop or rim changed.

Fields changed:

- `subtitle`: "1908 ZEISS DOUBLE OBJECTIVE; NO VERIFIED PRODUCTION MATCH" → "US 895,045 A, Example 1 — Rudolph unsymmetrical double objective".
- `specs`: "4 ELEMENTS / 2 GROUPS", "D-LINE ONLY", "PATENT REFERENCE" → "4 ELEMENTS / 2 GROUPS", "ALL SPHERICAL", "DESIGN F/12.5", "UNSYMMETRICAL DOUBLE OBJECTIVE".
- Element `label`: "Patent L1"–"Patent L4" → "Element 1"–"Element 4". `type`: "Biconcave" → "Biconcave Negative" (L3), "Biconvex" → "Biconvex Positive" (L4). Roles reworded to plain positive/negative descriptions without glass-family words the patent does not print.
- `glass`: none → "Unmatched (nD …, nG′ …; no Abbe number printed)" on all four elements, with the printed values. No catalogue row was tried: the patent prints no Abbe number, so no exact match is possible and the model stays monochromatic.
- Header comment: two sentences shortened. `aperture` block laid out one property per line.
- `cemented` C1 (L1, L2) and C2 (L3, L4) and the two `doublets` entries were already in place and are unchanged.

Analysis: title set to the lens name; the focal-length difference is now stated once (in the scope section); the "Verification" heading renamed "Patent Conditions and Model Scope"; the Series IV description is marked as resting on a search excerpt (the forum page returned an error when opened) and the "renamed Protar in 1900" date was dropped because the cited page gives no date.

Engine numbers before and after are identical: focal length 101.11015, f/12.5, half-field 5°, stop semi-diameter 3.68222, back focus 98.2832. Surface validation OK; aperture audit reports no rim, trace or iris limit.

Open:

- Abbe numbers: need a period Schott list matched on both nD and nG′.
- Rims against the figure: closed 2026-11-18 (semi-diameter pass below).
- Trace field is 5°; the patent states no field, and the chief ray clears the present rims to about 40°.
- `lensMounts`, `imageFormat` and an image circle are not set; the patent states no format or field.
- No close-focus distance: no product source.
- The Series IV catalogue description should be confirmed from a catalogue or book before it is relied on.

## 2026-11-18 — Semi-diameter pass against the patent figure

Source: US 895,045, drawing sheet (page 1), the single figure, which shows Example 1. The scan is 300 dpi; it was rendered at 600 and 1200 dpi.

Scale: the axis lies at row 3091.5 of the 600 dpi page. Vertex crossings read just below the axis at x = 2055, 2240, 2325, 2508, 2587 and 2702 give 63.8, 65.4, 61.0, 71.8 and 63.9 px/mm for d1, d2, the air space, d3 and d4, and 64.1 px/mm over the whole 10.1 mm. The stop line stands at x ≈ 2420, close to midway in the air space as printed (b1 = b2). The drawn curves of r2 and r3 lie within about 0.2 mm of the printed radii at this scale, at heights from 2 to 3.7 mm. So the figure is to scale, and 64 px/mm is used for heights as well.

Readings (line centres, both sides of the axis, in mm), against the file:

| Surface | File before | Figure | File after | Note |
| --- | --- | --- | --- | --- |
| 1 | 4.2 | 4.40 / 4.42 | 4.2 | L1 runs flat to the outer height; 5 % difference, kept |
| 2 | 4.0 | about 3.73 | 4.0 | L2 drawn to a knife edge where r2 meets r3; the model's L2 edge is 0.135 mm at 4.0 and zero at about 4.07 |
| 3 | 4.0 | about 3.7 | 4.0 | as surface 2; lowering would cut off-axis light (axial beam 3.67 here) |
| 4 | 4.0 | 3.66 / 3.67 | 4.0 | L3's front face ends at a chamfer; the f/12.5 axial beam needs 3.68, so the figure value cannot be used |
| 5 | 4.0 | about 4.4 | 4.2 | the cemented face reaches the flat outer edge of the rear pair: L4 is drawn square-cut |
| 6 | 4.2 | 4.33 / 4.50 | 4.2 | 5 % difference, kept |

The drawing shows both pairs at one outer height of about 4.4. The model keeps 4.2 for the outer faces, which is 5 % under that and within reading noise. Surface 5 was the only clear shape error: at 4.0 it left L4 stepped and L3's rear face lower than the outer edge, which the figure does not show. It now matches surface 6, so L4 is square-cut and L3 steps up from 4.0 at the front to 4.2 at the rear, as the drawn chamfer does. Nothing was lowered.

Light and clearance: corner illumination at the 5° trace field is 95.7 % before and 97.1 % after (no loss at any sampled field; gains of 0.2 to 1.4 points from 2.5° outward). Restoring surface 5 to 4.0 would win back nothing. On a copy traced to 40°, transmission rises 1.2 to 1.6 points from 4° to 12°. Engine half-field is 5° before and after (the trace-field setting). The widest unblocked field the engine estimates is 42.1° before and after, limited by surface 1. f/12.5, focal length 101.11015, stop semi-diameter 3.68222 and back focus 98.2832 are unchanged. Surface validation OK; aperture audit: within 3 % of the stated f-number, no rim, trace or iris limit. Image-circle and field-coverage audits skip the file (no image format). The real-ray clearance tools could not solve a chief ray for this file, so the 5° and 40° checks use the engine vignetting curve.

Metadata: the patent states no format, field or mount, and the model is at the patent's normalised f = 100, so `lensMounts`, `imageFormat` and an image circle stay unset. The f-stop list (12.5, 16, 22) is not printed in the patent and is left as it is.

Open:

- Abbe numbers, trace field, mount and format, close focus and the Series IV source stay open as listed above.
- The outer rims could go to 4.4 to match the drawing exactly. That is within reading noise, so they were not changed.

## 2026-11-18 — Second review on the local site

Compared: the local page shot at four times device scale, cropped to the lens and set beside the US 895,045 drawing (page 1, 600 dpi) at the same scale, and the element inspector for all four elements. The Example 1 table on page 2 was re-read from the page image; every radius, thickness, air space and D and G′ index agrees with the file.

Scale: vertex crossings at x = 2056.5, 2238.5, 2322.5, 2510, 2584.5 and 2700.5 give 63.8 px/mm over the 10.1 mm vertex length. The scan is turned about 0.7° (the axis line and the flat top edges fall about 9 px over 750 px), so heights were taken from the local axis. Arc fits are mixed: r6 follows its printed radius at 63.8 px/mm, r1 and r2 are drawn a little flatter. A height check that uses only axial distances agrees with equal scales: L4's flat edge on the top line is 38.5 px (0.60 mm) long, which the printed r5, r6 and d4 give at a height of 4.36 to 4.39.

Readings against the file:

| Item | File | Figure | Verdict |
| --- | --- | --- | --- |
| Outer height, surfaces 1, 5, 6 | 4.2 | 4.37 to 4.43 (line centres 282.5 px from the axis; L4 edge length) | kept; 4 to 5 % under, same height on both pairs as drawn, rear lens square-cut |
| L2 knife edge, surfaces 2 and 3 | 4.0 | about 3.8 | kept; the f/12.5 beam needs 3.67 to 3.70 there |
| L3 front face, surface 4 | 4.0 | about 3.66, chamfer to the outer height | kept; the f/12.5 beam needs 3.68; the 4.0 to 4.2 join stands in for the chamfer |
| Diaphragm opening | 3.68 (from 1:12.5) | about 3.3 (209 px), about f/14 | not a rim; explains why the drawn inner rims sit at the beam |

No rim changed. Raising the outer faces to 4.4 would make L1's top a long taper down to 4.0 instead of the drawn flat edge and short chamfer, and it would also remove the real loss at the trace field (engine curve at 5°: 97.1 % now, 100 % with 4.4), so it is not a clear improvement.

Correction: the header note and the semi-diameter pass above say L2's edge reaches zero at about 4.07. It reaches zero at 4.18 (0.083 mm at 4.07, 0.135 mm at 4.0). The header now says 4.18 and also records the drawn diaphragm opening.

Lands and cuts: none. Against the rims before the semi-diameter pass, the worst loss is 0.0 points at every field; the surface 5 raise gains up to 1.4 points at 5°.

Labels and tags: L1 to L4 are the patent's own designations. Types agree with the radius signs. Element focal lengths recompute to −14.81, 13.46, −14.54 and 13.51; the front pair is 5,912 mm and the rear pair 93.5 mm. Roles are true (L1 has the highest relative dispersion, 0.0393). Cemented brackets C1 (surfaces 1 to 3) and C2 (4 to 6) bracket the patent's two components, and the inspector reads DOUBLET C1 and DOUBLET C2; no group brackets are needed on top of them. The drawn diaphragm stands 0.1 mm from the midpoint of the air space, as b1 = b2 prints, and the model's stop is at that midpoint. No aspheric surface, no `apd` tag (the patent names no special glass).

Movement: infinity only. No variable gap or zoom block; the focus slider shows "Not modeled"; the focus note states only that the patent gives no close-focus data.

Glass and colour: no exact catalog row. The site's glass catalog (733 rows) and the Hoya, Ohara and Sumita vendor files were searched on both printed indices, nD at 589.294 nm and nG′ at 434.047 nm. Nearest rows: L1 SF12 (Sumita) and FD12 (Hoya), nD −0.00075, nG′ −0.00071; L2 F5 (Schott and others), +0.00018 and +0.00030 (the rows within 1e-4 on nD, such as BAM25, BAFD5, BASF5 and K-BaSF5, are 0.0021 off at G′); L3 NSL2 (Ohara) and C2 (Hoya), +0.00053 and +0.00001; L4 BACD8 (Hoya), −0.00013 and −0.00092. The patent prints no glass name, no other line and no aberration curves, and none of the four pairs recurs in Example 2 (nD 1.6042, 1.5639, 1.5101, 1.6211). All four media are nD-only, so the lens stays monochromatic. No catalog row to propose.

Assignee: "Carl-Zeiss-Stiftung" is the corpus form (27 files, including the other early Zeiss patents in this batch); the front page reads "assignor to the firm of Carl Zeiss, of Jena".

Engine values unchanged: focal length 101.11015, f/12.5, stop semi-diameter 3.68222, half-field 5°, widest unblocked field 42.1°. Surface validation OK; the aperture audit finds no rim, trace or iris limit; the image-circle and field-coverage audits skip the file (no image format).

Open:

- Outer rims 4.2 against a drawn 4.4: unchanged, within reading error (see above).
- Abbe numbers, trace field, mount and format, close focus and the Series IV source stay open as listed above.
