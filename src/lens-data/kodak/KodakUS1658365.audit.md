# Validation and limitations

Checks made when the file was first prepared: transcription from the patent facsimile; an independent paraxial calculation and an independent spherical ray trace; a 1001-point scan of glass and air intervals across the aperture; the repository surface validator; and a search of the existing lens files for the same prescription.

No geometry override. All sampled physical intervals are positive, with a minimum glass thickness of 1.059 mm and a minimum air gap of 1.368 mm at the assumed 8 mm semi-diameters. Maximum rim slope 0.355. No total internal reflection on the f/8 axial rays. The independent ray trace and the application's trace agree on axial focus to better than 1e-9 mm for 18 tested rays.

Patent 1,658,365 was not found in any existing lens file, and its six radii do not appear together elsewhere.

No claim is made that the model matches a commercial lens.

See the analysis for the drawing-sheet R1 discrepancy, the signs of the radii, the assumed iris and rims, the use of D index and ν only, vignetting, and the patent's 32° field statement.

## 2026-11-17 — Deployment validation

Checked against page images of US 1,658,365 (drawing sheet and specification page 1), independently of the earlier notes: all six radii, three thicknesses, two air spaces, three D indices and three ν values; the signs of the radii against the drawing and the printed element focal lengths; the front-page inventor, assignee and dates. No transcription mismatch.

Verdict: a faithful transcription of the patent's sole example. Eastman Kodak Company is the assignee, so the maker is Kodak. The Kodar f/7.9 of Pocket Kodak cameras (about 1925 to 1934, described by collectors as a triplet) is the nearest candidate product, but no source links it to this patent and no construction diagram was found; the product link is unproven.

Findings:

- The printed "focal length = 1.000" is a G′-line value. At G′ the prescription computes to 0.9998 and the element focal lengths to 0.3431, −0.2844 and 0.7471, against the printed .343, −.284 and .747. At the D line the whole lens computes to 99.75 mm at the 100× scale. No misprint.
- The drawing sheet's table shows R1 = 2.39 and omits S2. The typeset table (.239, S2 = .066) is confirmed by the text (greatest curvature on a radius of .239; overall thickness .148). The file already used the typeset values, so no source erratum is recorded.

Changes:

- `maker`: `null` → `"Kodak"` (assignee Eastman Kodak Company).
- `source`: none → `US 1,658,365 A`, sole example, 1928, Fred E. Altman, Eastman Kodak Company, `sdSource: "heuristic"` (the rims are assumed).
- `catalog.focalLengthMm.design`: 100 → 99.75 (the computed D-line value).
- Last gap: 91.23253614367908 → 91.2325 (rounding only; still the computed paraxial back focus).
- `projection.maxTraceFieldDeg`: 10 → 32 (the patent's stated field; an independent real-ray trace shows the chief ray passing at 32°, 5.59 mm from the axis on surface 1 against the 8 mm rim).
- `focus.description`: reworded in plain English with the focal length to two decimals.
- Header comment rewritten; the single-line object reformatted to the house layout. No radius, thickness, index or rim changed.
- Analysis rewritten to the standard sections.

First-order values after the changes: focal length 99.7483 mm, f/8.000, paraxial back focus 91.2325 mm, vertex length 14.80 mm, stop semi-diameter 5.606 mm. Element focal lengths +35.04, −29.33 and +76.31 mm.

Audit results: surface validator OK. Aperture audit: within 3 % of the stated f-number, no rim, trace or iris limit. Axial marginal ray 6.23 mm against the 8 mm rims. Meridional beam passing the rims in the independent trace: all of it at 10°, 93 % at 20°, 86 % at 25°, 72 % at 30°, 67 % at 32°. The clearance tool reports a blocked chief ray for image heights of 57.7 mm and above; the independent trace does not confirm this (chief ray 5.13 mm at 30° and 5.59 mm at 32° on surface 1), so it is treated as a fault of that tool at this field. Image-circle and field-coverage audits do not run: the file is hidden and has no image format.

Open:

- Name, key, file name, subtitle and specs wording ("ESTIMATED IRIS / RIMS", "PATENT REFERENCE", "NO VERIFIED RETAIL IDENTITY") for the cleanup pass.
- Element labels ("Patent 1") and element roles and focal lengths are not filled in; L3 type could read "Positive Meniscus".
- Glass labels: no current catalog match for 1.611 / 57.2 or 1.575 / 42.7; a period glass identification from the printed D and G′ indices has not been attempted.
- Rims against the figure: the drawing scales to a semi-diameter of roughly 6.1 mm, below the model's 8 mm and close to the 6.23 mm axial beam. Left for the semi-diameter pass.
- Stop position is the midpoint of the rear air space, not a printed value.
- No image format or mount is assigned.
- `closeFocusM: 1e15` awaits the house infinity-only form.
