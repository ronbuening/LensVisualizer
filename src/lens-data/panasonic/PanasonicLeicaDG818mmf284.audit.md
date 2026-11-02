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

## 2026-10-29 — Second review: diagram, labels and movement

### What was compared

- The local page at the wide, middle and tele stations, at infinity and with the focus slider at its far end, and both
  movement overlays, against Figure 1(a)–(c) on p. 25 of the local JP 2018-180348 A PDF. The 150 ppi drawing was read
  at 600 dpi: 0.11715 mm per pixel, from the wide-panel vertex crossings, which land within one pixel of the
  prescription at all 26 surfaces. Rims were re-measured independently at the centre of the drawn outline, on both
  sides of the axis where no leader line or asphere marker covers them.
- The patent text ¶0013–0029 and Tables 1–3D (pp. 5–6 and 16–18) were re-read for groups, cemented components,
  aspheric marks, the stop and movement. Panasonic's construction diagram was not viewed; the deployment-validation
  record above stands.

### Changes

| Field                   | Before | After                                                                                | Evidence                                                                                                                                                                                   |
| ----------------------- | ------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `doublets`              | none   | C1 surfaces 5–7 (L3+L4), C2 11–14 (L6+L7+L8), C3 17–19 (L10+L11), C4 22–24 (L13+L14) | ¶0017–0020 name these four cemented components and Figure 1 draws each as one block; the diagram had no cemented brackets. C rather than D so they do not read like the d7–d24 gap labels. |
| Element `cemented` keys | D1–D4  | C1–C4                                                                                | The inspector now names the same component as the bracket ("DOUBLET C1", "TRIPLET C2").                                                                                                    |
| Last variable-gap label | D26    | BF                                                                                   | Table 3A prints this gap as BF.                                                                                                                                                            |

No semi-diameter, tag, type, role or movement value changed. Engine output is identical before and after: half-field
46.30° and F/2.905 at wide, the same real-ray clearance table at the printed stations and image heights (no axial clip,
no chief-ray block), traced corner coverage reaching the 10.81 mm corner at all 33 zoom positions, and the same
wide-open transmission (wide 80.2 % at 50.0° and 44.7 % at 55.9°, middle 77.1 % at 44.3°, tele 67.9 % at 32.0°). The
surface validator and image-circle check pass.

### Rims re-measured

| Element         | Stored sd (mm) | Figure 1(a), upper / lower (mm)     | Verdict                                                                              |
| --------------- | -------------- | ----------------------------------- | ------------------------------------------------------------------------------------ |
| L1 front        | 18.0           | 17.9 / 17.9                         | Agrees.                                                                              |
| L1 rear         | 14.4           | 13.75 / hidden                      | Kept; see below.                                                                     |
| L2 front / rear | 13.0 / 11.0    | front 13.5 / 13.3, rear 11.3 / 11.7 | Within 4–6 %; kept. Drawn with a flat cylinder and a step between the faces.         |
| L3 + L4         | 11.0           | 11.1 / 11.1                         | Agrees.                                                                              |
| L5              | 5.7            | 5.7 / 5.7                           | Agrees; drawn and rendered with level rims.                                          |
| L6 + L7, L8     | 6.4            | 6.3 / 6.2 and 6.6 / 6.6             | One square block within 0.35 mm; 6.4 kept (surface 14 carries a 6.17 mm axial beam). |
| L9              | 7.0            | 7.0 / 7.15                          | Agrees.                                                                              |
| L10 + L11       | 7.1            | 7.15 / 7.1                          | Agrees; L9 and the G3 doublet are drawn level and render 0.1 mm apart.               |
| L12             | 8.3            | 8.15 / 8.2                          | Agrees.                                                                              |
| L13 + L14       | 7.8            | 7.8 / 7.8                           | Agrees.                                                                              |
| L15             | 10.0           | 10.6 / 10.6                         | 6 % under; kept; see below.                                                          |

The neighbour ordering matches the figure on the page: L1 > L2 > L3 + L4; L5 < triplet < L9 ≈ G3 doublet < L12 >
L13 + L14 < L15.

### Differences left in place

- L1 rear: the figure ends the rear face at 13.75 mm, at the corner where L2's front rim starts, and closes L1 with a
  flat rear land. At 14.4 mm the rendered rear rim sits about 1.2 mm behind L2's front rim, so L1 wraps over it. A
  13.7 mm rim passes the validator and clears the rays (printed-field chief ray 12.52 mm, full bundle 13.84 mm), but
  surface 2 sets the engine half-field at wide, which would fall from 46.30° to 44.87°, so 14.4 mm stays.
- L15: drawn square at 10.6 mm on both sides of the axis; stored 10.0 mm. 10.6 mm on both faces passes the validator,
  leaves wide unchanged, raises the engine half-field from 47.63° to 48.66° at middle and from 33.34° to 34.89° at tele,
  and raises tele transmission at 32.0° from 67.9 % to 81.7 %. Inside the 5–8 % noise band and mostly a vignetting
  change, so it is left for the coordinator.
- L1 and L2 are drawn with stepped flanges. The renderer joins the two rims of an element with one straight edge, so
  both show bevels; neither rear face can reach its front height (L1's rear radius is 16.13 mm, and L2's rear face at
  13.5 mm would cross L3).

### Checked and found correct

- Groups: G1 (−) surfaces 1–7, G2 (+) 8A–16 with the stop, G3 (−) 17–19, G4 (−) 20A–24 and G5 (+) 25A–26A, as in
  ¶0016–0021 and the figure's G1(−)…G5(+) notation.
- Element names L1–L15 are the patent's own. Every type agrees with the radii and ¶0023–0027: L1, L2, L4 and L14 are
  menisci convex to the object; L5 and L6 are menisci concave to the object; L3, L7, L11 and L13 are biconcave; L8,
  L9, L10 (R17 = +459.5), L12 and L15 are biconvex. The four "(2× Asph)" types sit on L2, L5, L12 and L15.
- Aspheric marks: Table 1 stars surfaces 3, 4, 8, 9, 20, 21, 25 and 26, and the figure's asterisk circles sit on both
  faces of L2, L5, L12 and L15. The data file's A labels and asphere entries are on exactly those surfaces.
- Stop: surface 10, in air between L5 and L6, where the figure's A leader points.
- Tags: the patent text makes no anomalous-dispersion or special-glass statement, so no tag is `patent`. The inferred
  tags on L3, L9 and L12 match Panasonic's ED and aspherical-ED positions; L7 (UHR) carries none. The inspector for L2,
  L3, L5, L7, L9, L12 and L15 shows the file's type, nd/νd, glass, tag, asphere coefficients and role.
- Zoom: the 33 stations ascend from 8.27 to 17.24 mm and every gap lists them wide first. The printed stations match
  Table 3A: d7 22.8204, 10.6305, 1.5141; d16 1.3000, 3.3512, 5.8971; d19 6.8084, 4.7573, 2.2116; d24 0.9372, 4.8164,
  12.2095; BF 14.16084, 14.15583, 14.14666. Group centres measured from the image plane go from wide to middle to tele as
  G1 −94.63, −86.31, −84.58 mm (imageward, mostly between wide and middle, like the figure's curve); G2 −50.73 to −61.99
  mm, G3 −37.85 to −44.51 mm and G4 −24.46 to −35.72 mm (objectward); G5 fixed apart from the printed 0.014 mm BF
  change. These match ¶0028 and the figure's trajectories, each is monotonic over all 33 positions, and the overlay
  reports an 11.26 mm maximum travel.
- Focus: the file has no focus travel; the closest-focus keyframe traces the infinity geometry, the slider's far end
  reads "Not modeled", and the focus overlay falls back to zoom. The description's account of ¶0029 (G4 moves
  imageward) against the figure's arrow under G3 is accurate; ¶0013 says the arrow is placed under the group symbol.

### Open

- The inspector shows "FL = —" for every element because the file has no element `focalLengthMm`; Table 3B (p. 17)
  prints all 15 element focal lengths.
- L1 rear and L15 rims as described above.

Coordinator follow-up (same day): every element now carries `focalLengthMm` from Table 3B (p. 17), L1 −31.1190
through L15 38.8614 mm, so the inspector no longer shows "FL = —"; the paraxial element focal lengths agree to the
printed four decimals. L1's rear rim stays 14.4 mm (drawn 13.75 mm) because surface 2 sets the engine's wide
half-field (13.7 mm would drop it from 46.30° to 44.87°), and L15 stays 10.0 mm (drawn 10.6–10.7 mm, inside the
measurement noise band).
