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

Audit results: surface validation OK. Aperture audit: within 3 % of the stated f-number, no rim, trace or iris limit. Image-circle and field-coverage audits skip the file (hidden, no image format). A separate chief-ray trace passes the estimated rims at 39.6° off axis (height 3.53 at surface 1, 2.93 at surface 6).

Open:

- Name, key, subtitle and specs keep the delivered wording ("D-line patent reference", "NO VERIFIED PRODUCTION MATCH", "D-LINE ONLY", "PATENT REFERENCE"); element labels "Patent L1" and types "Biconcave" / "Biconvex" need the house forms.
- Glass labels: none authored. An Abbe number needs a period Schott list matched on both nD and nG′; until then the model is monochromatic.
- Rims against the figure: the drawing suggests semi-diameters near 5, against 4.0–4.2 in the model; L2's edge is already 0.135 mm at 4.0.
- Trace field: 5° is far below what a wide-angle type of this family covers; the patent states no field.
- No image format or mount is set.
- `aperture.maxFNumber` is not set although the stop list runs to f/22.
