# Audit log — CARL ZEISS JENA PROTARLINSE 100mm f/12.5 (US 1,021,337 Design)

## Author's checks — November 17, 2026

Drawing and table of the patent PDF inspected and transcribed: pass. Independent paraxial and spherical ray calculation: pass; the near-axis back focus agrees within 1e-5 mm. Glass thickness is positive at 1001 radial samples in each of the four lenses; the minimum rim thickness is 0.309 mm, in lens II. The repository geometry validation passes at default settings with no errors and no overrides. Nineteen axial rays across ±90 % of the entrance pupil pass, and the near-axis image intercept agrees; an 81-point pupil grid passes 81 of 81 rays on axis and 76 of 81 at 2.5° and 5°.

A duplicate search for patent numbers 1,035,408, 1,021,337 and 1,053,128 across the lens-data folder and the delivered packages found nothing. The patent is distinct from the earlier US 532,398 design and is not offered as a retail product.

The file was delivered with `visible: false` (closed: it is now visible).

## 2026-11-17 — Deployment validation

**Checked.** An independent re-read of both page images of US 1,021,337 at 300 and 400 dpi: the five radii and their signs, four thicknesses, the diaphragm distance b = 2.34, the four D-line indices, the nG′ column, the stated aperture 1:12.5 and focal length 100, Fig. 1 (lens shapes, cemented surfaces, front diaphragm) and the front-page names and dates. All 14 prescription values in the file match the print. The patent has one numerical example.

**Verdict.** Valid, with the fixes below. The patent calls the design an improvement of the Series VII Protar lens 1:12.5 of US 532,398, and the layout (four cemented lenses, front diaphragm, f/12.5) matches that product; no source shows that this recomputed table was manufactured, so the model stays a patent example in that family.

**Changes.**

- `maker`: `null` → `"Carl Zeiss Jena"` (the patent is assigned to the firm of Carl Zeiss).
- `source`: absent → `patentNumber` "US 1,021,337 A", `example` Sole example, `patentYear` 1912, `authors` ["Paul Rudolph"], `assignees` ["Carl-Zeiss-Stiftung"], `sdSource` "heuristic" (the rims are estimates).
- `catalog.focalLengthMm.design`: 100 → 99 (the printed table computes to 99.00; the patent's 100 is nominal).
- Last gap: 109.17471241064689 → 109.1747 (rounding only; still the computed paraxial back focus).
- Elements: added `cemented: "Q1"` to all four, a `doublets` entry spanning surfaces 1–5, element focal lengths (−18.9, +12.49, +32.48, −21.53) and short optical roles.
- Data file reformatted from a single-line object to the house layout; header rewritten to state source, scale and inferred values.
- Analysis rewritten to the standard sections. Audit wording cleaned.
- No radius, thickness, index, stop distance or semi-diameter was changed.

**First order after the changes.** EFL 98.997, f/12.5 (stop semi-diameter 3.960), back focus 109.1747, diaphragm to image 115.85. The 1.0 % shortfall against the stated 100 is table rounding: ±0.05 in r1 moves the focal length by 1.5 and in r5 by 1.9, and several different single-digit changes reach 100, so no misprint is indicated. Spherical aberration on axis: −1.31 at the f/12.5 margin, −1.52 at 0.85 of the aperture.

**Printed nG′ of lens II.** 1.6308 is probably a misprint: with the printed column the G′ back focus is 119.05 against 109.17 at D, contrary to the patent's statement of chromatic correction, while a value near 1.637 brings the two together. The model uses nD only, so no erratum is recorded in the data file; the point is described in the analysis.

**Audits.** `audit:surface`: no validation errors. `audit:aperture`: within 3 % of the stated f-number, no rim, trace or iris limit. Axial marginal ray 3.96 to 4.41 against rims of 4.5. `audit:image-circle` and `audit:field-coverage` do not run on this file (no image format; hidden).

**Open:**

- Name, key (`-d-line` suffix), subtitle, specs and element labels ("Patent I") keep the delivered wording for the cleanup pass; the name still says 100mm. (Closed by the cleanup pass below.)
- Field and rims: the 5° trace field and the uniform 4.5 rims are placeholders. The patent states no field, the Series VII lens is reported at about 80–85°, Fig. 1 is not to scale, and lens II reaches zero edge thickness at a semi-diameter of about 5.1. Off-axis clearance has not been checked. (Closed 2026-11-18 by the semi-diameter pass: rims kept; Fig. 1 is close to scale overall; the knife edge is at about 4.93; the chief ray clears to about 40°.)
- Abbe numbers: the nG′ − nD differences suggest roughly 66, 56 (with a corrected lens II value), 53 and 38.5 for lenses I–IV; no modern catalogue glass matched, and a period Schott list has not been consulted. The model stays monochromatic until one is.
- `closeFocusM: 1e15` awaits the house infinity form. (Closed: kept as the infinity-only placeholder.)

## 2026-11-17 — Cleanup and wording pass

Optics, stop and rims were not touched.

**Fields changed.**

- `subtitle`: "1912 ZEISS QUADRUPLE SINGLE OBJECTIVE; NO VERIFIED PRODUCTION MATCH" → "US 1,021,337 A, sole example — development of the Series VII Protar lens".
- `specs`: "4 ELEMENTS / 1 GROUP", "D-LINE ONLY", "PATENT REFERENCE" → "4 ELEMENTS / 1 GROUP", "DESIGN F/12.5", "ALL SPHERICAL", "CEMENTED QUADRUPLET".
- `focus.description`: "Infinity-only patent reconstruction." → "Infinity focus only; the patent gives no close-focus data." `closeFocusM` stays 1e15.
- Element labels "Patent I–IV" → "Element 1–4"; types "Biconcave" → "Biconcave Negative", "Biconvex" → "Biconvex Positive"; the role of element 3 reworded.
- Cemented group id `Q1` → `C1` on all four elements and in the single `doublets` entry spanning surfaces 1–5.
- Glass: each element now carries an `Unmatched (nD … / nG′ …; no Abbe number printed)` label. The patent prints no Abbe numbers, so no catalogue row can be matched and the model stays monochromatic.
- Header comment: the scaling remark removed (the patent itself prints focal length 100); the Series VII Protar lineage and the lens II nG′ note added.
- Analysis: title set to the model name; section "Model Notes and Verification" renamed "Model Scope and Limitations"; the nG′ misprint passage reduced to one sentence; the 1911 Britannica citation and the 85° figure removed, because that page was seen only as a search excerpt.

**Engine numbers before and after (identical).** EFL 98.99705, f/12.5, half-field 5°, stop semi-diameter 3.95988, back focus 109.1747. The surface audit reports no validation errors; the aperture audit reports no rim, trace or iris limit.

**Open:**

- Rims and field (SD pass): uniform 4.5 rims and a 5° trace field are placeholders; the patent states no field or diameters, Fig. 1 is not to scale, the Protar is reported at about 80° coverage, and lens II reaches zero edge thickness at a semi-diameter of about 5.1. (Closed 2026-11-18 by the semi-diameter pass below, which corrects the scale and edge statements.)
- `lensMounts`, `imageFormat` and image circle are not set: the patent states no format or field. (Closed 2026-11-18: they stay unset, as the semi-diameter pass below decided; no format fits the f = 100 normalisation.)
- Abbe numbers: rough values from nG′ − nD (about 66, 56 with a corrected lens II, 53, 38.5) are not in the data; a period Schott list has not been consulted.
- The name carries 100mm (the patent's nominal focal length) while the table computes to 99.00. (Closed 2026-11-18: kept; the name uses the patent's nominal 100, `catalog.focalLengthMm.design` carries 99, and the header and analysis explain the rounding.)

## 2026-11-18 — Semi-diameter pass against the patent figure

**Source.** US 1,021,337, drawing sheet (PDF page 1), Fig. 1, the figure of the sole numerical example. Measured from the 300 dpi scan rendered at 600 dpi; axis on page row 3199.

**Scale.** Diaphragm tick and axis cross at page column about 1932, r1 vertex about 2123, r5 vertex about 2466. Stop to r1 vertex: 191 px for the printed 2.34, 81.6 px/mm. r1 to r5 vertex: 345 px for 4.34, 79.5 px/mm. Stop to r5: 536 px for 6.68, 80.2 px/mm, used below. The two spans agree within 3 %, so Fig. 1 is close to scale overall. The single thicknesses vary more (d_I 83, d_II 74, d_III 73, d_IV 106 px/mm), so they are read as proportions only. Check on a third quantity: the drawn diaphragm opening is 310 px half-height (318 above, 303 below), 3.87 mm, against the model's f/12.5 stop radius of 3.96 (−2 %). This corrects the earlier note that Fig. 1 is not to scale: that reading measured from the drawn rim edge, not from the r1 vertex.

**Rims.** Fig. 1 draws the cemented group as a square-cut cylinder, with all faces ending at one height and a small bevel (about 0.25 mm) on the front corner. Rim half-height at line centre is 371 px below and 378 px above the axis: 4.63–4.71 mm, mean about 4.67. Independent checks from the drawn rim sags: r1 vertex 73 px behind the front rim edge (0.91 mm; the model sag is 0.88 at 4.5 and 0.95 at 4.67), and r5 rim 65 px ahead of the r5 vertex (0.81 mm; the model gives 0.78 at 4.5 and 0.84 at 4.67). Lens II is drawn nearly knife-edged at the rim. In the model, its edge is 0.31 mm at 4.5, 0.17 at 4.7 and zero at about 4.93; the earlier "about 5.1" was an overestimate.

| Surface | Stored sd | Fig. 1 | Ratio | Decision |
|---|---|---|---|---|
| 1 | 4.5 | about 4.67 (sag check 4.5–4.67) | 1.04 | kept, within noise |
| 2 | 4.5 | about 4.67 | 1.04 | kept |
| 3 | 4.5 | about 4.67 | 1.04 | kept |
| 4 | 4.5 | about 4.67 | 1.04 | kept |
| 5 | 4.5 | about 4.67 (sag check 4.5–4.67) | 1.04 | kept |

No rim was changed. The difference is under 5 %, and the square-cut rim is already one height. The overlay of the model on Fig. 1 at 80.2 px/mm, aligned at the r1 vertex, shows the surfaces, the stop position and the stop opening on the figure's lines, and the model rim about 13 px (0.17 mm) inside the drawn rim. The front bevel is not modelled: a land on r1 near 4.25 would cost light at the trace field, and lands must earn their light.

**Clearance and light.** Rims are unchanged from the baseline. The f/12.5 axial marginal ray reaches 3.96 at surface 1 and 4.41 at surface 5, against 4.5. The engine half-field is 5° before and after; vignetting at 5° is 96.2 % before and after, with zero worst loss against the baseline. The chief ray passes the rims to 40.3° half-field, limited by surface 5 (then 4 at 42.9°), consistent with the roughly 80° coverage reported for the Protar. The surface audit reports no errors and the aperture audit no rim limit. The image-circle and field-coverage audits skip the file, which has no image format.

**Metadata.** `lensMounts`, `imageFormat` and image circle stay unset. The patent states no plate size or field, and the model is the patent's focal length 100 normalisation of a lens Zeiss sold in a range of focal lengths, so no format fits it as built.

**Name.** References call the product the Protar lens (Protarlinse) Series VII, and the patent itself writes "Series VII (Protar-lens 1:12.5)". The model name carries no product word, which fits the evidence: the patent names that lens as the one it improves, but no source shows that this table was produced.

**Open:**

- Abbe numbers for the four glasses, if a period Schott list is consulted (unchanged from the earlier passes).

## 2026-11-18 — Second review on the local site

**Compared.** The local page (1400×900, and a 4× device-scale shot of the cross-section), the inspector for elements 1–4 and the focus overlay at both slider ends, against Fig. 1 of US 1,021,337 re-measured from the 300 dpi scan rendered at 600 dpi, and the text page.

**Figure scale, re-measured.** The axis lies on page row 3198 at the lens (the scan tilts about 0.5°: row 3194 at the diaphragm, 3201 behind the lens). Diaphragm B bar centre at column 1934.5, r1 vertex line centre 2123, r5 vertex 2467. Stop to r1: 188.5 px for 2.34 (80.6 px/mm); r1 to r5: 344 px for 4.34 (79.3 px/mm); stop to r5: 532.5 px for 6.68 (79.7 px/mm), used below. The drawn diaphragm opening is 317 px above and 304 px below the axis, 3.90 mm on average, against the model's f/12.5 radius of 3.96. The model's five surfaces, overlaid on Fig. 1 at 79.7 px/mm and aligned at the r1 vertex, fall on every drawn surface line.

**Rims.** Rim line centres lie 377.5 px above and 371.5 px below the axis: 4.74 and 4.66, mean 4.70. Sag checks: the r5 rim is 67 px ahead of its vertex (0.84 mm, which r5 = −13.4 reaches at 4.67); the r1 rim is 66.5 px ahead of its vertex (0.83 mm, reached at 4.40). The model's 4.5 is 2–4 % inside these readings, within the reading error, and the square-cut group is already one height, so no rim changed; this agrees with the semi-diameter pass. Fig. 1 draws small bevels, about 0.15–0.25 mm, on both front corners; they stay unmodelled, since a land there would only cost light.

**Lands and cuts.** None. Against the base rims the worst loss is 0.0 points at every field to 5°; transmission at 5° is 96.2 % in both.

**Live page.** The group renders as the square-cut cylinder of Fig. 1, with the stop 2.34 ahead of r1 and the surface curvatures and r1/r5 rim sags as drawn. The STO and C1 labels sit side by side without touching. The element numbers 1–4 under the group run in the same order as the patent's I–IV. The group is small on the page because the 109 mm back focus sets the drawing scale.

**Labels, tags and movement.** Types agree with the radius signs and with the patent's words (front lens biconcave, second biconvex, third concavo-convex and collective, rear lens concavo-convex and dispersive). The inspector focal lengths −18.9, +12.49, +32.48 and −21.53 match the paraxial element focal lengths. All four elements read "CEMENTED C1": the inspector reserves DOUBLET and TRIPLET for two and three members, so the quadruplet shows no false TRIPLET. One `doublets` bracket, C1, spans surfaces 1–5, and there is no group bracket, which fits one group. No surface is aspheric and no element carries an `apd` tag; the patent names no special glass. Names L1–L4 and labels Element 1–4 follow the patent's I–IV in order, and the analysis headings give both. Movement: there is no variable gap and no zoom block, and `closeFocusM` is 1e15. The focus slider reads "Not modeled", the movement overlay reports no modelled focus or zoom group movement, and the focus description says only that the patent gives no close-focus data, which is true.

**Numbers (unchanged).** EFL 98.997, f/12.5, stop radius 3.960, engine half-field 5°, chief ray clear of the rims to 40.3°. The f/12.5 axial marginal ray reaches 3.96, 4.11, 4.17, 4.25 and 4.41 at surfaces 1–5 against rims of 4.5. Spherical aberration is −1.31 at the margin and −1.52 at 0.85 of the aperture, as the analysis states. The surface audit reports no validation errors; the aperture audit is within 3 % of the stated f-number with no rim limit; the image-circle and field-coverage audits skip the file (no image format).

**Glass and colour.** The four glasses were checked against all 733 catalog rows at both printed lines, D (589.29 nm) and G′ (Hγ, 434.05 nm). No row matches both. Lens I: nearest N-BK10 (nD −0.00015, nG′ −0.00033). Lens II: N-SK10 and S-BSM10 match nD at D (1.62268, 1.62270), but their nG′ is 1.6366 against the printed 1.6308. Lens III: the LF5 light flints match nD at D within 0.00002, but their nG′ is 0.0048 high, so they are not the glass. Lens IV: nearest E-F1 and F13, 0.0018 low at D. The vendor AGF files, searched at the d line, offer no closer candidate and no row to propose. All four labels stay `Unmatched` and the model stays monochromatic. The engine's `ng` is the 435.83 nm g line, not G′, so the printed nG′ column cannot be stored as printed. The patent prints no aberration curves to compare. For lens II, a paraxial trace with the printed G′ indices puts the G′ focus at 119.05 behind the last vertex against 109.17 at D; equal back foci need nG′(II) = 1.6373, and N-SK10's 1.6366 leaves 1.03 between them. This supports the analysis's misprint reading, and one sentence on the matching modern glasses was added to the analysis.

**Other records.** Since the semi-diameter pass the display name and key have gained PROTARLINSE and the files have been renamed to CarlZeissJenaProtarlinseUS1021337; that pass's remark that the name carries no product word describes the earlier name. The assignee "Carl-Zeiss-Stiftung" matches the front page ("the firm of Carl Zeiss, of Jena") and is the corpus's canonical form. Two `Open:` lines in the cleanup section were closed in place.

**Open:**

- Abbe numbers, if a period Schott list with nD and nG′ is consulted (unchanged).
