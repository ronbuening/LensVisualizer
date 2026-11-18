# Audit: Weidert US 1,643,865 Example 1

## Source

US 1,643,865 A (Franz Weidert, assignor to Optische Anstalt C. P. Goerz Aktiengesellschaft; filed August 5, 1924, German priority August 13, 1923, granted September 27, 1927). Example 1 / Fig. 1 of three examples. Scale as printed: fD = 100 mm, lengths in millimetres.

## Transcription

| Item | Patent | File |
| --- | --- | --- |
| r1, r2, r3 | +21, −35, +38.82 | 21, −35, 38.82 |
| d1, d2 | 3, 1.25 | 3, 1.25 |
| Crown 510/634 | nD 1.5096, ν 63.4 | 1.5096, 63.4 |
| Flint 549/471 | nD 1.5490, ν 47.1 | 1.549, 47.1 |
| Stop distance behind last vertex | 11.5 | 11.5 |
| Diaphragm diameter | 9.1 | radius 4.55 (derived from f/8.99) |
| Free lens diameter | 14.7 | semi-diameter 7.35 on surfaces 1–3 |

The two elements share surface 2, so the pair is cemented with no air gap. The patent also prints nF and nG′ for both glasses; the model does not use them.

## First-Order Results

| Quantity | Patent | Model |
| --- | --- | --- |
| Focal length | 100 mm | 100.0024 mm |
| Aperture | f/9 | f/8.99 |
| Spherical undercorrection at 5.56 mm incidence | 3.1 mm | 3.09 mm |

The patent prints no back focus, total length or field angle.

## Inferred Values

Only the image distance: the computed paraxial back focus at D, 81.808 mm behind the diaphragm (93.308 mm behind the last glass surface). The stop position, diaphragm diameter and lens diameter are printed.

## 2026-11-17 — Deployment validation

Checked: an independent re-read of the patent page images (drawing sheet and specification pages 1–3) against the file — all three radii and their signs, both thicknesses, both nD and ν values, the stop distance, the diaphragm diameter, the free lens diameter, the front-page inventor, assignee and dates, and the shapes in Fig. 1. No transcription mismatch.

Verdict: valid with fixes. The design is plausibly the Goerz Frontar (a two-element achromat on Box-Tengor and Roll-Tengor cameras, advertised as raised to 1:9), but no source ties the Frontar to this patent and no Frontar construction diagram was found, so no product is claimed.

Changes:

- `source.patentNumber`: `US 1,643,865` → `US 1,643,865 A` (house form).
- `source.assignees`: `Optische Anstalt C. P. Goerz AG` → `Optische Anstalt C. P. Goerz Aktiengesellschaft` (as printed, and as the corpus spells it).
- `catalog.focalLengthMm.design`: `100.0023971751592` → `100` (the patent's stated value).
- `aperture.nominalFNumber` and first f-stop: `8.989887442505141` → `8.99` (what the printed 9.1 mm diaphragm gives).
- Last gap: `81.80797572679677` → `81.808` (same computed paraxial plane, rounded).
- `closeFocusM`: `1000000000000000.0` → `1e15` (same value).
- Elements: added `cemented: "D1"` to both and a `doublets` entry for surfaces 1–3 (the printed cemented pair); added plain optical roles.
- Focus description: "Example1" → "Example 1", and reworded in plain English.
- Unquoted keys and added a header comment stating the source, scale, and what is printed and inferred.
- Analysis rewritten to the standard sections; this audit replaces the delivery checklist.

After the changes: focal length 100.0024 mm, f/8.99, stop radius 4.550 mm, paraxial defocus 0.0000 mm. The surface check reports no errors. The aperture check reports no rim, trace or iris limit at the stated f-number. The image-circle and field-coverage checks skip the file because it is hidden and has no image format. A separate meridional trace with the printed diameters passes 0.91 of the beam at 10°, 0.63 at 20°, 0.47 at 25°, 0.40 at 27° and 0.29 at 30°; the patent states no field, so the rims were left alone.

Open:

- Name, key, file name, subtitle and specs wording ("PATENT ONLY; RETAIL IDENTITY UNPROVED", "LITERAL REAR STOP AND CLEAR DIAMETER") for the cleanup pass.
- Glass labels: none set; the Sendlinger catalogue numbers 510/634 and 549/471 could be recorded.
- `closeFocusM: 1e15` to the house infinity form.
- No `imageFormat` or `lensMounts`; set them only if a product identity is established.
- Frontar link: a maker catalogue or construction diagram would be needed before any product name is used.

## 2026-11-17 — Cleanup and wording pass

Fields changed (optics, rims and stop untouched):

- `subtitle`: "1927 EXAMPLE 1; PATENT ONLY" → "US 1,643,865 A, Example 1 — cemented achromat with rear diaphragm".
- `specs`: "PATENT ONLY; RETAIL IDENTITY UNPROVED", "LITERAL REAR STOP AND CLEAR DIAMETER", "INFINITY ONLY" → "ALL SPHERICAL", "DESIGN F/9", "REAR DIAPHRAGM" ("2 ELEMENTS / 1 GROUP" kept).
- `focus.description`: reduced to "Infinity focus only; the patent gives no close-focus data. The image plane is the computed paraxial focus at the D line." `closeFocusM` stays 1e15.
- Elements: labels "L1"/"L2" → "Element 1"/"Element 2"; types "Biconvex"/"Biconcave" → "Biconvex Positive"/"Biconcave Negative"; `focalLengthMm` +26.23 and −33.33 added; roles reworded; cemented id `D1` → `C1` on both elements and in `doublets`.
- Glass labels added. No catalogue row is exact, so both stay unmatched: Element 1 "Unmatched (nD 1.5096 / V 63.4, Sendlinger crown 510/634)" (nearest row Sumita BK1, Δn +0.0005, Δν −0.05); Element 2 "Unmatched (nD 1.5490 / V 47.1, Sendlinger flint 549/471)" (nearest row Sumita LLF7, Δn −0.0003, Δν −1.7).
- Header comment: the scale line now states only the units and printed focal length.
- Analysis: title set to the lens name; element headings follow the new labels; the Frontar passage cut to one sentence resting on the one forum page that could be read (the second forum page could not be opened and is no longer cited); the model-check heading renamed "Patent Conditions and Model Scope".

Engine numbers before and after are identical: focal length 100.0024 mm, f/8.99, stop radius 4.5499 mm, half-field 22.14°, back focus 81.8080 mm behind the diaphragm. The surface check reports no errors and the aperture check reports no rim limit.

Open:

- Rims are the patent's printed 14.7 mm free diameter; Fig. 1 draws the glass slightly larger than the clear diameter, which is left for the semi-diameter pass. Closed 2026-11-18: the printed diameter is kept (see the semi-diameter pass below).
- No `imageFormat` or `lensMounts`: the patent states no format or field.
- Frontar link: a maker catalogue or construction diagram is needed before any product name is used.
- The patent's nF and nG′ values are not used; they could support a fitted dispersion curve later.

## 2026-11-18 — Semi-diameter pass against the patent figure

Source: US 1,643,865 A, drawing sheet (PDF page 1), Fig. 1, which is the figure of Example 1. The sheet is a 300 dpi bilevel scan, measured at 600 dpi.

Scale: the front vertex lies at x 2424 px and the rear vertex at x 2560 px, giving 136 px for the printed 4.25 mm, or 32.0 px/mm. The diaphragm tick lies at x 2916 px, 356 px behind the rear vertex for the printed 11.5 mm, or 31.0 px/mm. The two spans agree within 3 %, so the figure is drawn to scale; front vertex to diaphragm gives 31.24 px/mm, used below. Check: the inner ends of the diaphragm ticks sit 146 px above and 139 px below the axis, a radius of 4.56 mm against the printed 9.1 mm diameter (radius 4.55).

| Surface | sd before | Figure reading | Ratio | sd after | Evidence |
| --- | --- | --- | --- | --- | --- |
| 1 | 7.35 | about 8.3 (265 px above, 250 px below the axis) | 1.12 | 7.35 | printed free diameter 14.7 mm |
| 2 | 7.35 | same square edge | 1.12 | 7.35 | printed free diameter 14.7 mm |
| 3 | 7.35 | same square edge | 1.12 | 7.35 | printed free diameter 14.7 mm |

No rim changed. The patent prints the free diameter of the lens (14.7 mm), which outranks a figure reading. Fig. 1 draws the cemented pair as one square-edged blank about 16.5 mm across, a mounting margin outside the clear diameter. The model already keeps all three faces at one height, as the square edge in the drawing does. A matched-scale overlay of the figure and the model shows the vertices, thicknesses and diaphragm position and opening in agreement; only the drawn blank edge stands about 0.9 mm outside the model's clear rim.

Clearance and illumination (unchanged): the full f/8.99 axial beam passes, with marginal heights 5.56, 5.39 and 5.22 mm on surfaces 1–3 against 7.35. The engine's geometric transmission is 100 % to 6°, 97.2 % at 8.1°, 91.8 % at 10.1° and 84.9 % at 12.1°; the worst loss against the baseline is 0.0 points. The engine half-field is 22.14° before and after, set by the chief ray at surface 1. A real-ray trace puts the chief ray at the surface 1 rim at about 23.4°; the patent states no field, so no rim was raised for it. Focal length 100.0024 mm and f/8.99 are unchanged. The surface check reports no errors and the aperture check reports no rim, trace or iris limit. The image-circle and field-coverage checks skip the file (no image format, not visible).

Metadata: no `lensMounts`, `imageFormat` or image circle added. The patent states no format or field, and no source ties this example to a camera.

Product name: the Goerz Box-Tengor (1925 onward, 6×9 cm on 120 film) used a lens marked Frontar (collection-appareils.fr Goerz Box Tengor record, 1925, which gives no focal length or aperture); the Flickr Box Tengor gallery group lists it as a two-element 105 mm f/11. A museum listing of 1:11 110 mm appeared only in a search excerpt and was not read. Example 1 is f/9; Example 2 of the same patent is f/11. The current name, "C. P. GOERZ 100mm f/9 (US 1,643,865 Design)", claims no product and matches the evidence.

Open:

- Whether Example 2 (f/11) fits the Box-Tengor Frontar better than Example 1; needs a Goerz catalogue or a construction diagram of the Frontar.
