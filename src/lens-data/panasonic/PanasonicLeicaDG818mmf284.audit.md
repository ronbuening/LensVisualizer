# Audit Log — Panasonic Leica DG Vario-Elmarit 8-18mm f/2.8-4.0 ASPH.

Patent: JP 2018-180348 A, Numerical Example 1

## 2026-10-29 — Deployment validation and wording pass

### Source re-read

- Re-read Numerical Example 1 in the local JP 2018-180348 A PDF (Tables 1, 2 and 3A–3D, pp. 15–18; Figure 1, p. 25).
  All 26 surface rows (R, d, nd, νd), all 56 aspheric coefficients (K and A4–A14 on surfaces 3, 4, 8, 9, 20, 21, 25
  and 26) and all 15 printed variable-gap values (d7, d16, d19, d24 and BF at wide, middle and tele) match the data
  file; no mismatches. The patent's asphere equation uses (1+κ), so κ is stored as K. JP 6917538 B2 prints the same
  numbers.
- Stop: surface 10 (aperture A), in air between L5 and L6. Cemented groups L3+L4, L6+L7+L8, L10+L11 and L13+L14
  (¶0017–0021), giving 15 elements in 10 groups.
- The patent prints no close-focus data and no clear apertures. The model is infinity-only and every semi-diameter is
  inferred from Figure 1.

### Patent vs model, first order

| Quantity                     | Wide (patent / model) | Middle (patent / model) | Tele (patent / model) |
| ---------------------------- | --------------------- | ----------------------- | --------------------- |
| EFL (mm)                     | 8.2678 / 8.2676       | 11.6445 / 11.6443       | 17.2434 / 17.2431     |
| F-number                     | 2.90468 / 2.90468     | 3.56972 / 3.56972       | 3.98898 / 3.98898     |
| Total length (mm)            | 105.5316 / 105.5316   | 97.2160 / 97.2160       | 95.4838 / 95.4838     |
| BF printed / paraxial BFD    | 14.16084 / 14.1602    | 14.15583 / 14.1551      | 14.14666 / 14.1457    |
| Image height (mm, real ray)  | 10.000 / 10.0006      | 10.300 / 10.2993        | 10.815 / 10.8152      |

- The model's stop radius is set from the printed F-number (paraxial radii 5.293, 4.751 and 4.992 mm). Image heights
  are real chief rays at the printed half-angles (53.1986°, 42.7157°, 32.0045°) on the printed image planes. The
  paraxial image lies 0.00064, 0.00073 and 0.00093 mm in front of the printed planes; the printed BF is kept.
- Group focal lengths, Table 3C vs paraxial recalculation: −15.00425 / −15.00420, 17.69510 / 17.69508,
  −34.10326 / −34.10399, −147.25216 / −147.25491, 38.86136 / 38.86142 mm. Largest difference 0.0027 mm (G4).
- Zoom: 30 of the 33 zoom positions are interpolated. d7, d24, BF and the F-number are linear between the printed
  stations; G3 is shifted (d16 + d19 kept at its interpolated sum) to hold focus. Plain linear interpolation of all
  four gaps would defocus intermediate zooms by up to 0.665 mm (paraxial); the G3 shift from linear reaches 0.30 mm.
  With piecewise-linear gaps between the 33 positions the added focus error is at most 0.0041 mm (0.0051 mm including
  the printed-plane offsets), inside 2λN² = 0.0099 mm at F/2.90. Group directions match ¶0028 at every position.

### Maker identity and diagram

- Panasonic's H-E08018 specification page lists 15 elements in 10 groups (1 aspherical ED, 3 aspherical, 2 ED,
  1 UHR), 0.23 m minimum focus, 7 blades and F22 minimum aperture.
- Panasonic's Japanese product-page construction diagram shows the same order and grouping as Figure 1: two front
  negative menisci, a cemented doublet, a small meniscus ahead of the stop, a cemented triplet, a biconvex singlet,
  a cemented doublet, a biconvex singlet, a cemented doublet and a rear biconvex singlet. Its highlighted positions
  match Example 1: aspherical L2, L5 and L15 (both faces aspheric in the patent); ED L3 (νd 75.5) and L9 (νd 81.6);
  aspherical ED L12 (νd 81.5); UHR L7 (nd 2.00100). L3, L9 and L12 carry `apd: "inferred"`; L7 has no `apd`.
- The other examples fit less well: Example 2 has 11 groups (L3 and L4 not cemented) and its L12 asphere is
  nd 1.58313 / νd 59.4, Example 3 has 14 elements and Example 4 has 16. The application was filed on 2017-04-17,
  the day before Panasonic announced the lens.

### Source errata kept in the data file

All three `source.errata` entries describe contradictions inside the patent and stay `unresolved`; their notes were
rewritten to state only the contradiction and what the file keeps.

1. Focusing group. ¶0013 defines the arrow attached to a group in Figures 1, 3, 5 and 7 as its focusing motion;
   Figure 1 draws it under G3, pointing imageward, while ¶0029 says G4 moves imageward. The patent gives no
   close-focus data to decide between them, so the file models infinity focus only.
2. Iris diameter. ¶0028 says the open iris diameter is equal at wide and middle and larger at tele. The printed
   F-numbers need paraxial stop radii of 5.293, 4.751 and 4.992 mm, so wide and middle differ by about 11%. The
   printed F-numbers are kept.
3. Fixed G5. ¶0028 says G5 does not move and the G5-to-image distance does not change, but the printed BF falls from
   14.16084 to 14.14666 mm (0.01418 mm). The printed BF values are kept.

The earlier notes also described the package's own choices (rejected finite-focus alternatives, retained image
planes); that text was removed from the notes. No entry was deleted.

### Fields changed in this pass

- Data file: header comment rewritten in plain terms (same facts); `subtitle`; `specs`; the three `source.errata`
  notes; element `type` (15 elements, from "Spherical Lens" / "Aspheric Lens" to shape names following the patent's
  ¶0023–0027 and the radii); element `role` (15, replacing repeated boilerplate); `focus.description`. No optical
  value, glass label, `apd`, key, name or patent field changed; engine output (EFL, F-number, half-field, stop radius,
  BFD and focus keyframes) is identical before and after.
- Analysis: identification section rewritten as a qualified production correlation with the example-by-example
  evidence; glass text and table updated to the catalog equivalents; element headings set to the data-file shapes;
  focus/zoom section reduced to the patent facts, the interpolation method and the iris conflict; package process
  text, test counts, UI notes, commit and SHA-256 lines and the reproducibility section removed; construction diagram
  added to the sources.

### Open

- Open: the 40 lp/mm MTF table and the best-axial refocus figures in the analysis were carried over from the package
  and not recomputed in this pass.
- Open: the production focusing group (G3 by Figure 1, G4 by ¶0029) and close-focus behavior remain unmodeled.

## 2026-10-29 — Semi-diameter pass against the patent figure

### Source and scale

- Figure 1(a), the wide position at infinity, on p. 25 of the local JP 2018-180348 A PDF. The drawing is a 150 ppi
  JPEG (461 × 556 px); it was rendered at 300 dpi and read with the optical axis horizontal.
- Scale from vertex crossings near the axis: L1 front vertex to L15 rear vertex is 390 px for 91.3708 mm, and L1 front
  vertex to the image plane S is 450.5 px for 105.5316 mm, both 0.2343 mm/px; L1 front to L5 front gives 0.2349 mm/px.
  One native scan pixel is about 0.47 mm, so a single rim reading carries roughly ±0.3 mm.
- Leader lines touch every upper rim and the asphere markers (circles and asterisks) sit on the lower rims, so the
  automatic profile was not usable. Each rim was read by hand on both sides from per-row ink runs, at the centre of the
  drawn outline, and the drawn corner positions were checked against each face's sag at that height.

### Before and after

| Surface(s) | Element | Before (mm) | Figure upper / lower (mm) | After (mm) | Evidence |
| ---------- | ------- | ----------: | ------------------------: | ---------: | -------- |
| 1 | L1 front | 20.0 | 18.0 / 17.9 | 18.0 | Outer rim, −10 %, both sides agree. |
| 2 | L1 rear | 14.4 | 13.7 / obscured | 14.4 | Retained (−5 %); the rear curve meets the flange step. |
| 3A | L2 front | 13.0 | 13.6 / 13.5 | 13.0 | Retained (+4 %). |
| 4A | L2 rear | 11.0 | 11.8 / obscured | 11.0 | Retained (+7 %); the rear curve meets a flange step. |
| 5, 6, 7 | L3 + L4 | 11.0 | 11.2 / 11.0 | 11.0 | Retained. |
| 8A, 9A | L5 | 6.4 | 5.7 / 5.6 | 5.7 | Figure, −11 %. |
| 11, 12 | L6, L7 | 6.4 | 6.2 / 6.2 | 6.4 | Retained (+3 %). |
| 13, 14 | L8 | 7.0 | 6.2 / 6.2 | 6.4 | The triplet is drawn square at one height; surface 14 needs 6.17 mm for the axial beam, so L8 takes L6/L7's 6.4. |
| 15, 16 | L9 | 7.0 | 7.15 / 7.15 | 7.0 | Retained (+2 %). |
| 17, 18, 19 | L10 + L11 | 6.0 | 7.15 / 7.15 | 7.1 | Figure, +19 %; drawn level with L9. |
| 20A, 21A | L12 | 7.0 | 8.3 / 8.3 | 8.3 | Figure, +19 %; neither face's slope changes sign out to 10 mm. |
| 22, 23, 24 | L13 + L14 | 7.0 | 7.85 / 7.7 | 7.8 | Figure, +11 %. |
| 25A, 26A | L15 | 10.0 | 10.7 / 10.7 | 10.0 | Retained (+7 %, inside the scan noise). |

### Clearance and engine results

- Real-ray trace at the printed stations and image heights (10.0, 10.3 and 10.815 mm; 53.20°, 42.72° and 32.00°)
  after the edit: no rim clips the axial beam of the printed F-number and none blocks the chief ray. Closest margins:
  surface 14 at 6.4 mm against an axial beam of 6.17 mm, surface 9A at 5.7 mm against 5.24 mm, and surface 1 at 18.0
  mm against a wide-corner chief ray of 16.09 mm. A trace of all 33 zoom positions at 10.0 mm gives the same maxima.
- The stock trace scripts found no chief ray past about 51° at wide (their surface intersection fails on these steep
  rays); a scratch copy that falls back to marching along the ray found the chief at 53.20°, landing at 10.000 mm.
- Engine before and after: half-field 46.30° and F/2.905 at wide, unchanged; corner coverage reaches 10.81 mm at all
  33 zoom positions both times (55.9° at wide). Wide-open vignetting at wide rises from 76.1 % to 80.2 % transmission
  at 50.0° and from 25.6 % to 44.7 % at 55.9°; middle 44.3° goes from 74.3 % to 77.1 %; tele 32.0° drops from 70.3 % to
  67.9 %, and the smaller L5 trims tele transmission near the axis to 99.1 % at 2.9° and 98.1 % at 5.8° (was 100 % and
  99.2 %). On-axis transmission stays 100 % at every position. The surface validator and image-circle check pass.

### Limitations

- The scan resolution limits each reading to about ±0.3 mm, so L2, L3 + L4, L6, L7, L9 and L15 were left alone.
- The lower rims of L1's rear face and L2's rear face are hidden under the asphere markers; the upper readings stand.
- Panasonic's construction diagram was not viewed in this pass; the deployment-validation comparison above stands.
