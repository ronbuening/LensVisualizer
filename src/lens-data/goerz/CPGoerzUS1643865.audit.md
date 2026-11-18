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
