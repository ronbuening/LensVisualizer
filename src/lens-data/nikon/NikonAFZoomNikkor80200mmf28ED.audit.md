# Audit Log — NIKON AI AF ZOOM-NIKKOR 80-200mm f/2.8 ED

Patent: JP S62-108218 A, Example 3 (Table 3)

## 2026-10-07 — Zoom iris and station f-numbers against the patent

Source: `patents/JP_S62108218_A.pdf`. Table 3 and its continuation are on PDF p. 6 (patent p. 140); the Example 3 aberration plots, Figs. 4A–4D, are on PDF pp. 11–12; the applicant's amendment (手続補正書, dated Showa 60-12-28) is on PDF p. 18 (patent p. 152).

The patent prints one F-number, 2.88, for the whole f = 80.0–196.0 range and labels both infinity spherical-aberration plots of Example 3 F2.88. One iris radius reproduces both stations within print rounding and the stop sits in the stationary relay group G4, so `zoomApertureModel: "fixed-iris"` and `nominalFno: 2.88` stay. What changes is one prescription entry: the amendment replaces the 17th thickness of Table 3 and the total length, and the file carried the table as first printed. The note's reference to the Example 3 aberration figures is corrected in the same pass.

| Field | Before | After | Source |
|---|---|---|---|
| Surface 17 `d` (L33 center thickness) | 1.8 | 1.7 | Amendment item 2, PDF p. 18: the 17th entry of the d column of Table 3, "1.800", is corrected to "1.700". Table 3 as first printed (PDF p. 6, row 17) reads -52.847 / 1.800 / 1.75692 / 31.7. |
| Total length, first vertex to image (sum of the file's gaps at either infinity station) | 217.233 mm | 217.133 mm | Amendment item 3, PDF p. 18: "T.L. = 217.233" under Table 3 (continued) is corrected to "T.L. = 217.133". Not a stored field; it follows from the row above. |
| `focalLengthDesign` | `[79.99278, 195.98427]` | `[79.9999, 196.00205]` | Computed from the file's prescription. The patent prints f = 80.0–196.0 (Table 3 header, PDF p. 6). |
| Element 11 (L33) `fl` | -77.421006 | -77.414233 | Thick-lens focal length from r17 -52.847, r18 -546.069 and n 1.75692 (Table 3, PDF p. 6) with the amended thickness. |
| Note: G3 standalone focal length | +86.835387 mm | +86.829295 mm | Computed from surfaces 14–18. |
| Note: cemented D4 focal length | +311.686059 mm | +311.671797 mm | Computed from surfaces 16–18. |
| Note: condition (3), f4 / (f3 · Fn) | 0.451845 | 0.451876 | Computed. The patent prints 0.452 under Table 3 (continued), PDF p. 6. |
| Note: T.L./EFL at 80 / 196 mm | 2.7157 / 1.1084 | 2.7142 / 1.1078 | Computed from the rows above and the first-order table below. |
| Note: BFL/EFL at 80 / 196 mm | 0.8270 / 0.3376 | 0.8270 / 0.3375 | Computed. |
| Note: close-focus EFL at 80 / 196 mm | 88.257646 / 193.190719 mm | 88.263067 / 193.178579 mm | Computed with the published close-focus d5 12.330 / 52.931 (Table 3 continued, PDF p. 6). |
| Note: close-focus BFL at 80 / 196 mm | 61.298783 / 40.102529 mm | 61.299449 / 40.103199 mm | Computed, same gaps. |
| Note: close-focus track | 227.729 mm | 227.629 mm | Infinity track plus the 10.496 mm G1 stroke. |
| Note: close-focus magnification at 80 / 196 mm | -0.055057 / -0.134869 | -0.055046 / -0.134874 | Computed. The patent prints -0.055 / -0.135 (Table 3 continued, PDF p. 6). |
| Note: close-focus object-to-image distance at 80 / 196 mm | 1799.862 / 1800.127 mm | 1800.223 / 1800.104 mm | Computed conjugate for the fixed image plane. |
| Note: paraxial half-field at y' = 21.6 mm, 80 / 196 mm | 15.1109° / 6.2894° | 15.1096° / 6.2888° | Computed from the focal lengths. |
| Header and note: paraxial f-number of the authored `STO` semi-diameter 14.759011 mm, 80 / 196 mm | F/2.87999994 / F/2.88002120 | F/2.88004081 / F/2.88006207 | Computed. The semi-diameter itself is not changed. |
| Engine wide-open iris radius (real marginal ray of f/2.88 at the wide station; not a patent value) | 15.6799 mm | 15.6801 mm | Traced from `nominalFno`; held at both stations by the fixed-iris model. |
| Note: aberration-plot figures named for Example 3 (embodiment line and Sources item 1) | Figures 3A–3D | Figures 4A–4D | The text after Table 4 (continued), PDF p. 7, assigns Figs. 3A–3D through 5A–5D to Examples 2–4 in order, and the drawing list on PDF p. 9 gives Figs. 4A–4D as Example 3. Both sets carry the same labels (F2.88, F2.88, Fe2.9, Fe3.2; PDF pp. 11–12), so no number depends on it. |

First-order values against the patent's printed numbers:

| Quantity | Patent prints | Before (d17 = 1.800) | After (d17 = 1.700) |
|---|---|---|---|
| Focal length, wide | 80.0 | 79.992778 mm | 79.999896 mm |
| Focal length, tele | 196.0 | 195.984273 mm | 196.002053 mm |
| Back focus, wide | 66.158 (d27) | 66.157181 mm | 66.158577 mm |
| Back focus, tele | 66.158 (d27) | 66.157907 mm | 66.159303 mm |
| Total length | 217.233 as first printed; 217.133 as amended | 217.233 mm | 217.133 mm |

The amended thickness brings the computed focal lengths to within 0.0001 mm (wide) and 0.0021 mm (tele) of the printed 80.0 and 196.0, against 0.0072 mm and 0.0157 mm with the first-printed value, and the gaps sum to the amended total length exactly.

Confirmed unchanged:

- Example identity: all 27 rows of Table 3 (PDF p. 6) match the file apart from the amended row 17, including r1 106.671 / 3.000, r5 2355.419, r13 221.989, r22 -29900.000 / 1.800, r23 292.520 / 11.400 (the file's 5.7 + `STO` + 5.7), r25 28.808 / 16.700 and r27 -192.609 / 66.158, with every index and Abbe number.
- Variable gaps (Table 3 continued, PDF p. 6): d5 1.834 / 42.435 / 12.330 / 52.931, d13 26.536 / 1.891, d18 18.005 / 2.049. The stored image-plane gap stays the patent's d27 = 66.158.
- Station labels 80 and 196 are the patent's printed focal lengths.
- F-number: Table 3 header prints F 2.88 for f = 80.0–196.0; Fig. 4A (wide, infinity) and Fig. 4B (tele, infinity) on PDF p. 11 are both labeled F2.88; the close-focus plots Fig. 4C and Fig. 4D on PDF p. 12 carry the effective values Fe2.9 and Fe3.2. `nominalFno` 2.88, `apertureDesign` 2.88, the `fstopSeries` start and the `specs` aperture line are unchanged.
- Fixed iris: the real marginal ray of f/2.88 needs 15.6801 mm of stop radius at 80 mm and 15.7146 mm at 196 mm, a spread of 0.22 %; the paraxial radii are 14.7592 mm and 14.7593 mm. The wide-station radius held at both stations gives f/2.880 and f/2.886 from the iris alone.
- Stop position: `STO` stays at the midpoint of the 11.400 mm d23 gap. No semi-diameter changed, including the authored `STO` value 14.759011 mm.
- Values that do not depend on surface 17's thickness: the other fifteen element focal lengths; the G1, G2 and G4 focal lengths; cemented D1, D2, D3 and D5; conditions (1), (2) and (4)–(12); the Petzval sum; and the note's edge-thickness, rim-slope and gap-intrusion figures, which sit at L12, surface 25 and the d11 gap.

Left open:

- Traced on-axis f-number with the file's clear apertures is f/2.95 at 80 mm (rim of surface 20) and f/2.96 at 196 mm (rim of surface 13) against the stated f/2.88, the same before and after this correction. The patent prints no clear apertures, so the rims are file-derived; none was changed here.
- The authored `STO` semi-diameter 14.759011 mm is the paraxial F/2.88 radius of the first-printed prescription; with the amended thickness that radius is 14.759220 mm. The header and note describe 14.759011 mm as the physical stop on the paraxial reading, while the engine opens the iris to 15.6801 mm from the real marginal ray. The semi-diameter and that description are left as they were, with only the paraxial f-numbers restated.
- Stop position is not tabulated. Fig. 1 (PDF p. 10) draws S close to the object side of L43 rather than at mid-gap; the file's midpoint remains a modeling choice.

## 2026-10-08 — Rims raised to the stated on-axis ray; surfaces 11 and 12 held at the gap limit

Rule (maintainer, 2026-10-08): where an inferred rim clips the on-axis beam of the f-number the patent prints, only the clipping surfaces move, each only to the height the stated ray reaches there at the station that needs most, rounded up at the file's 0.1 mm precision; every other surface and the `STO` row keep their values.

Sixteen surfaces sat below the stated ray. Fourteen were raised. Surfaces 11 and 12 were not: at the listed 18.7 mm the file fails validation, so both were put back to 18.3 mm and the 196 mm station is still rim-limited.

| Field | Before | After | Source |
|---|---:|---:|---|
| Surface 7 `sd` (D2 junction, L21 / L22) | 19.5 mm | 19.7 mm | Stated ray 19.681 mm at 196 mm (12.484 mm at 80 mm) |
| Surface 9 `sd` (L23 front) | 18.2 mm | 18.3 mm | Stated ray 18.229 mm at 196 mm (12.338 mm at 80 mm) |
| Surface 10 `sd` (D3 junction, L23 / L24) | 18.3 mm | 18.8 mm | Stated ray 18.707 mm at 196 mm (12.710 mm at 80 mm) |
| Surface 11 `sd` (L24 rear) | 18.3 mm | 18.3 mm, not raised | Stated ray 18.695 mm at 196 mm (12.822 mm at 80 mm); the listed 18.7 mm fails the cross-gap check with surface 12 |
| Surface 12 `sd` (L25 front) | 18.3 mm | 18.3 mm, not raised | Stated ray 18.698 mm at 196 mm (12.935 mm at 80 mm); the listed 18.7 mm fails the cross-gap check with surface 11 |
| Surface 13 `sd` (L25 rear) | 18.6 mm | 19.2 mm | Stated ray 19.118 mm at 196 mm (13.248 mm at 80 mm) |
| Surface 14 `sd` (L31 front) | 19.2 mm | 19.5 mm | Stated ray 19.417 mm at 196 mm (19.351 mm at 80 mm) |
| Surface 15 `sd` (L31 rear) | 19.2 mm | 19.7 mm | Stated ray 19.614 mm at 196 mm (19.550 mm at 80 mm) |
| Surface 16 `sd` (L32 front) | 19.5 mm | 20.0 mm | Stated ray 19.925 mm at 196 mm (19.857 mm at 80 mm) |
| Surface 17 `sd` (D4 junction, L32 / L33) | 19.5 mm | 19.9 mm | Stated ray 19.873 mm at 196 mm (19.803 mm at 80 mm) |
| Surface 18 `sd` (L33 rear) | 19.5 mm | 20.0 mm | Stated ray 19.962 mm at 196 mm (19.891 mm at 80 mm) |
| Surface 19 `sd` (L41 front) | 19.5 mm | 20.0 mm | Stated ray 19.978 mm at 196 mm (19.941 mm at 80 mm) |
| Surface 20 `sd` (L41 rear) | 19.2 mm | 19.8 mm | Stated ray 19.715 mm at 196 mm (19.677 mm at 80 mm) |
| Surface 21 `sd` (L42a front) | 18.5 mm | 18.9 mm | Stated ray 18.864 mm at 196 mm (18.829 mm at 80 mm) |
| Surface 22 `sd` (D5 junction, L42a / L42b) | 18.0 mm | 18.3 mm | Stated ray 18.259 mm at 196 mm (18.221 mm at 80 mm) |
| Surface 23 `sd` (L42b rear) | 17.5 mm | 17.8 mm | Stated ray 17.712 mm at 196 mm (17.675 mm at 80 mm) |

The stated ray is the f/2.88 on-axis marginal ray, entering at 13.889 mm at the 80 mm station and 34.028 mm at the 196 mm station. The patent prints F-number 2.88 for the whole 80.0–196.0 range and no semi-diameters. The fourteen raises run from 0.5 % (surface 9) to 3.2 % (surface 13), far under the 15 % figure-review threshold.

Surfaces 11 and 12 face each other across the 2.500 mm d11 air gap between D3 and L25. With both at 18.7 mm their combined sag is 2.276 mm, 0.9103 of the gap, and the validator's default limit is 0.90 (2.250 mm): the build stops on the air gap from surface 11 to surface 12 ("combined surface sag (2.28 mm) exceeds allowed gap intrusion (2.250 mm of 2.500 mm) at sd=18.7") for the base prescription and both zoom stations. The largest common semi-diameter that passes is 18.59 mm, below what the ray needs, and a value between 18.3 and 18.7 would be neither the authored value nor the ray height, so the pair stays at 18.3 mm (0.8714 of the gap, as before).

### Traced f-number and limiter

| Station | Stated | Before | After |
|---|---:|---|---|
| 80 mm | f/2.88 | f/2.95 (+2.3 %), rim of surface 20 | f/2.88 (0.0 %), iris |
| 196 mm | f/2.88 | f/2.96 (+2.7 %), rim of surface 13 | f/2.94 (+2.1 %), rim of surface 12 |

The fixed iris opens to 15.6801 mm at both stations before and after; from the iris alone the stations give f/2.880 and f/2.886. `audit:aperture --raise` lists only surfaces 11 and 12 (18.3 → 18.7) after the edit.

### Figure check

The patent prints no section of Example 3. Figure 1 (第1図, PDF p. 10, patent p. 144) is the section of Example 1 at the wide end, and the text under Table 1 (continued) on PDF p. 5 says Examples 2–4 have the same lens configuration as Example 1 with different glasses. Examples 1 and 3 both print f = 80.0–196.0 and F-number 2.88 (Table 1 header, PDF p. 5; Table 3 header, PDF p. 6). Figure 1 is the only drawing there is for this prescription and it is read with Example 1's spacings.

The page was rendered at 600 dpi (axis vertical on the page, object side at the bottom). Scale from the first vertex to the image plane: 2590.5 px for Example 1's printed T.L. of 217.290 mm, 11.92 px/mm (0.0839 mm/px). The vertices of surfaces 13, 14, 19, 23, 24, 26 and 27 fall within 3.5 px (0.3 mm) of where Table 1's wide-end spacings put them at that scale. Example 3's 217.133 mm gives 11.93 px/mm, the same to 0.1 %.

Half-heights are half the distance between the two rim strokes of each element, stroke centre to stroke centre, on columns clear of labels, brackets and leader lines. The strokes are about 6 px (0.5 mm) wide, so each reading is good to about ±0.3 mm. The figure gives every element one flat rim. D2, D3 and D4 carry a single rim across both cemented elements; D1 and D5 step between theirs, L11 about 8 px (0.7 mm) above L12 and L42a about 4 px (0.3 mm) above L42b. The D1 row is L11's rim.

| Element (surfaces) | Drawn (px, rim to rim / 2) | Drawn | Stated ray needs | File after | File / drawn |
|---|---:|---:|---:|---:|---:|
| D1, L11 + L12 (1–3) | 400.0 | 33.5 mm | 34.03 / 33.24 / 33.07 mm | 38.0 / 36.8 / 36.8 mm | 1.10–1.13 |
| L13 (4–5) | 384.8 | 32.3 mm | 32.37 / 31.94 mm | 36.0 / 35.0 mm | 1.08–1.12 |
| D2, L21 + L22 (6–8) | 246.2 | 20.6 mm | 19.93 / 19.68 / 18.28 mm | 20.0 / 19.7 / 18.5 mm | 0.90–0.97 |
| D3, L23 + L24 (9–11) | 225.0 | 18.9 mm | 18.23 / 18.71 / 18.70 mm | 18.3 / 18.8 / 18.3 mm | 0.97–1.00 |
| L25 (12–13) | 227.8 | 19.1 mm | 18.70 / 19.12 mm | 18.3 / 19.2 mm | 0.96–1.01 |
| L31 (14–15) | 234.5 | 19.7 mm | 19.42 / 19.61 mm | 19.5 / 19.7 mm | 0.99–1.00 |
| D4, L32 + L33 (16–18) | 238.0 | 20.0 mm | 19.93 / 19.87 / 19.96 mm | 20.0 / 19.9 / 20.0 mm | 1.00 |
| L41 (19–20) | 237.0 | 19.9 mm | 19.98 / 19.72 mm | 20.0 / 19.8 mm | 1.00–1.01 |
| L42a (21–22) | 225.0 | 18.9 mm | 18.86 / 18.26 mm | 18.9 / 18.3 mm | 0.97–1.00 |
| L42b (22–23) | 220.9 | 18.5 mm | 18.26 / 17.71 mm | 18.3 / 17.8 mm | 0.96–0.99 |
| L43 (24–25) | 164.5 | 13.8 mm | 13.45 / 12.51 mm | 14.8 / 14.8 mm | 1.07 |
| L44 (26–27) | 176 | 14.7 mm | 11.93 / 11.76 mm | 18.5 / 18.5 mm | 1.25 |

No element that was raised is drawn below what the ray needs by more than the reading error: the largest shortfall is L41, drawn 19.9 mm against 19.98 mm (0.5 %), and every other raised element is drawn at or up to 5 % above the ray height. There is no figure conflict, so no surface was held back on the figure's account. The figure in fact draws the rear groups almost exactly at the stated-ray heights, and the raised values now sit within 5 % of the drawing on every raised surface.

The figure also bears on the two surfaces that were not raised. It draws D3 at 18.9 mm and L25 at 19.1 mm, both above the 18.70 mm the ray needs, and it draws D3's rear face and L25's front face running together at the rim: at 18.9 mm the two faces take 0.91 of the 2.500 mm gap with Example 1's radii (579.750 and -91.294) and 0.93 with Example 3's (557.450 and -90.100). The drawing therefore shows the pair nearly in edge contact at the height the ray needs; the 0.90 limit that stops the raise is the validator's default, not something the figure supports.

### Render comparison

Screenshots of `/lens/nikon-af-zoom-nikkor-80-200mm-f28-ed/?v=1&zoom=80` (the wide end, the state Figure 1 draws) were taken before and after the edit.

- Element order and grouping match the figure: D1, L13 | D2, D3, L25 | L31, D4 | L41, D5, stop, L43, L44, with the same gaps open (d13 and d18 wide, d5 nearly closed).
- Rear groups: the rendered heights follow the figure's order apart from one tie. D2, D4 and L41 are the tallest behind G1, all 20.0 mm at their tallest surface where the figure has D2 slightly ahead; then L31, L25, D5 and D3, with L43 the smallest. D5 tapers toward the stop as drawn (18.9 mm at L42a, 18.5 mm at L42b in the figure; 18.9 / 18.3 / 17.8 mm in the file).
- Departures from the drawing that this pass did not create and did not touch: G1 renders 8–13 % taller than drawn (38.0–35.0 mm against 33.5 and 32.3 mm), so the front group is 1.90 times the tallest rear-group surface where the figure has 1.63; L44 renders 25 % taller than drawn (18.5 against about 14.7 mm) and nearly as tall as D5, where the figure draws it only a little taller than L43; D2 renders as a taper from 20.0 mm to 18.5 mm where the figure draws a flat rim at 20.6 mm.
- Departures that this pass did create are in the next section; both come from surfaces 11 and 12 staying at 18.3 mm.

### Where comparative size changed

- D3: the junction (surface 10, 18.8 mm) now stands 0.5 mm above both outer faces (18.3 mm), so the doublet renders with a slight peak at the cemented surface. It was 18.2 / 18.3 / 18.3 mm. The figure draws D3 with one flat rim at 18.9 mm; the step is not in the figure.
- L25: 18.3 mm front against 19.2 mm rear, a 0.9 mm difference where it was 0.3 mm (18.3 / 18.6 mm). The figure draws one flat rim at 19.1 mm. L25's rear face is now 0.7 mm taller than D2's rear face (18.5 mm), which it used to match within 0.1 mm.
- D4 and the front of L41 (20.0 mm) now equal D2's front face (20.0 mm); they were 0.5 mm shorter (19.5 mm). The figure draws D2 (20.6 mm) about 3 % taller than D4 (20.0 mm) and L41 (19.9 mm), a difference the file no longer shows.
- L31: 19.5 mm front, 19.7 mm rear; it was 19.2 mm on both faces. It stays shorter than D4, as drawn (19.7 against 20.0 mm).
- D4: the junction (19.9 mm) is 0.1 mm below the two faces (20.0 mm); all three were 19.5 mm.
- D5: 18.9 / 18.3 / 17.8 mm, the same taper as 18.5 / 18.0 / 17.5 mm. Its front face is now 0.4 mm taller than D2's rear face and than L44 (both 18.5 mm), which it used to equal. The figure draws L42a (18.9 mm) well above L44 (14.7 mm).
- D3 by its tallest surface (18.8 mm) is now above L44 (18.5 mm); it was below (18.3 mm). The figure draws D3 well above L44.
- Front against rear: unchanged. Surface 1 is 38.0 mm and the tallest rear-group surface is 20.0 mm before and after.

### Prose brought into line

- Data file header: the stop block names 14.759011 mm as the authored `STO` semi-diameter on the paraxial reading and states the traced iris (15.6801 mm, held at both stations; f/2.880 and f/2.886 from the iris alone). The semi-diameter block states which surfaces sit at the stated-ray height, why surfaces 11 and 12 do not, and the traced f-number and limiter per station. The box's right border, which was 2–5 columns short of the frame on every text line, is aligned. A one-line comment above surface 11 marks the pair.
- Analysis note: the stop paragraph and the verification summary state the traced iris and the traced f-number per station; the semi-diameter paragraph states the raised surfaces and the 11 / 12 exception; the worst shared-gap sag intrusion reads 0.875508 at the 7.100 mm d8 gap (surface 9 at 18.3 mm against 18.2 mm before, when that gap stood at 0.865660), with the d11 gap at 0.871386 second.

### Confirmed unchanged

- No `R`, `d`, `nd`, glass, variable gap, `nominalFno`, `zoomApertureModel` or stop position changed. The `STO` row keeps 14.759011 mm. Surfaces 1–6, 8, 11, 12 and 24–27 keep their semi-diameters; none of 1–6, 8 or 24–27 is below the stated ray.
- The file builds and validates with the fourteen raises. Computed focal lengths 79.9999 / 196.0021 mm and the iris radius 15.6801 mm are as before.
- Minimum element edge thickness 0.261662 mm (L12) and maximum rim slope 30.914° (surface 25) are unchanged; neither sits on a raised surface. The thinnest raised element is L31 at 1.412 mm (1.508 mm before), taken as the validator takes it at the smaller of the element's two semi-diameters, and the steepest raised surface is 21 at 25.69° (25.11° before).
- Field coverage is 100 % at both stations (21.65 of 21.65 mm, corner clear) before and after, and `audit:image-circle` reports no undersized surface.
- The 60 %-field bundles at all four published states are bounded by the iris and by surface 5 (196 mm) or the faces of L31 (80 mm), never by a cemented interface, before and after.

### Left open

- Surfaces 11 and 12 are 0.40 mm (2.1 %) below the stated ray and limit the 196 mm station to f/2.94. Raising both to 18.7 mm needs the cross-gap limit for this file at 0.9103 or more, for example `gapSagFrac: 0.92`, which is outside a semi-diameter-only pass. Figure 1 supports it: it draws the two faces meeting at the rim at about 19 mm. Tried on a scratch copy, not in the repository: with that field set and 11 and 12 at 18.7 mm, `--raise` lists nothing, both stations are iris-limited (f/2.88 and f/2.89, +0.2 %), field coverage stays 100 %, D3 becomes 18.3 / 18.8 / 18.7 mm and L25 18.7 / 19.2 mm. Raising only one of the two to 18.7 mm builds and validates, but the station stays at f/2.94 on the rim of the other.
- Until then D3's junction and L25's rear face stand above their neighbours on surfaces 11 and 12, the two shape changes the figure does not draw.
- Figure 1 is Example 1's section. No section of Example 3 exists in the patent, so the drawn heights are a check at the level of the shared configuration, not of this prescription's exact radii.
- Figure differences on surfaces that do not clip, and so were not moved: G1 (38.0–35.0 mm against 33.5 and 32.3 mm drawn, with the stated ray needing 34.03 mm at surface 1), L44 (18.5 against about 14.7 mm drawn), L43 (14.8 against 13.8 mm) and D2's rear face (18.5 against 20.6 mm). L44's 25 % is the only one over the 15 % figure threshold.
- The stop position and the authored `STO` semi-diameter remain as recorded in the 2026-10-07 entry.

Surfaces 11 and 12, and the faces this section left unequal on L24, L31 and D4, are taken up in the next section, "Square rims kept square and cross-gap limit raised".

## 2026-10-08 — Square rims kept square and cross-gap limit raised

Rule points applied (maintainer, 2026-10-08): an element whose two faces carried one value before any rim was raised, and which the figure draws with a square-cut rim, keeps one value, the higher of what its faces need (point 2); and where the validator's cross-gap limit refuses a required value although the surfaces do not cross and the figure draws the elements meeting at the rim, `gapSagFrac` is set for the lens to the smallest two-decimal value that admits it (point 3). Every other surface keeps the value the section above gave it, and the `STO` row is untouched.

| Field | Before | After | Source |
|---|---:|---:|---|
| Surface 11 `sd` (L24 rear) | 18.3 mm | 18.8 mm | Squared to the higher face, figure draws a square rim. L24's faces need 18.707 mm (surface 10) and 18.695 mm (surface 11) at 196 mm; the higher, rounded up, is 18.8 mm |
| Surface 12 `sd` (L25 front) | 18.3 mm | 18.7 mm | Stated ray 18.698 mm at 196 mm (12.935 mm at 80 mm) |
| Surface 14 `sd` (L31 front) | 19.5 mm | 19.7 mm | Squared to the higher face, figure draws a square rim. L31's faces need 19.417 mm (surface 14) and 19.614 mm (surface 15) at 196 mm |
| Surface 17 `sd` (D4 junction, L32 / L33) | 19.9 mm | 20.0 mm | Squared to the higher face, figure draws a square rim, one across the doublet. D4's faces need 19.925 mm (16), 19.873 mm (17) and 19.962 mm (18) at 196 mm |
| `gapSagFrac` | not set (default 0.90) | 0.92 | Smallest two-decimal value that admits surfaces 11 and 12 across the d11 air gap (0.9103 of the gap) |

The stated ray is the f/2.88 on-axis marginal ray, entering at 13.889 mm at the 80 mm station and 34.028 mm at the 196 mm station, as in the section above. Surfaces 7, 9, 10, 13, 15, 16 and 18–23 keep the values that section gave them.

### How Figure 1 draws each rim

Figure 1 (PDF p. 10, Example 1's section at the wide end, the only section the patent prints for Examples 1–4; Figures 6, 8, 10 and 12 are the sections of Examples 5–8) was rendered again at 600 dpi and read at the scale of the section above, 11.92 px/mm. Half-heights are half the distance between the two rim strokes, stroke centre to stroke centre; the strokes are about 6 px (0.5 mm) wide, so each is good to about ±0.3 mm. The readings agree with the table above to within 1 px. The second column is the pair of values at commit 2c813a34, before any rim was raised.

| Element (faces) | Before any raise | Figure draws | Drawn half-height, front / rear face | Treatment | Now |
|---|---:|---|---:|---|---:|
| L21 (6 / 7) | 20.0 / 19.5 mm | No rim of its own: the junction runs out to the D2 rim and meets the front face there, edge about 0.8 mm | 20.6 / 20.6 mm (246.0 px) | Faces differed; face by face | 20.0 / 19.7 mm |
| L22 (7 / 8) | 19.5 / 18.5 mm | Stepped: the junction ends on the D2 rim, the rear face ends lower and a flat land runs from it out to the rim | 20.6 / 18.4 mm (246.0 / 219.5 px) | Stepped; face by face | 19.7 / 18.5 mm |
| L23 (9 / 10) | 18.2 / 18.3 mm | Square: D3 has one flat rim and both faces end on it | 18.9 / 18.9 mm (225.0 px) | Faces differed; face by face | 18.3 / 18.8 mm |
| L24 (10 / 11) | 18.3 / 18.3 mm | Square: the same D3 rim, edge about 1.3 mm | 18.9 / 18.9 mm (225.0 px) | One value, square: both faces at the higher | 18.8 / 18.8 mm |
| L25 (12 / 13) | 18.3 / 18.6 mm | Square: one flat rim, edge about 4.6 mm | 19.1 / 19.1 mm (228.0 px) | Faces differed; face by face | 18.7 / 19.2 mm |
| L31 (14 / 15) | 19.2 / 19.2 mm | Square: both faces end at one height on an edge about 1.2 mm long | 19.6 / 19.6 mm (233.8 px) | One value, square: both faces at the higher | 19.7 / 19.7 mm |
| L32 (16 / 17) | 19.5 / 19.5 mm | Square: D4 has one flat rim across both elements | 19.9 / 19.9 mm (237.8 px) | One value, square, one rim across D4: all three faces at the highest | 20.0 / 20.0 mm |
| L33 (17 / 18) | 19.5 / 19.5 mm | Square: the same D4 rim, edge about 5 mm | 19.9 / 19.9 mm (237.8 px) | As L32 | 20.0 / 20.0 mm |
| L41 (19 / 20) | 19.5 / 19.2 mm | Square: both faces end at one height on an edge about 1 mm long | 19.9 / 19.9 mm (237.5 px) | Faces differed; face by face | 20.0 / 19.8 mm |
| L42a (21 / 22) | 18.5 / 18.0 mm | Square: flat rim | 18.9 / 18.9 mm (225.5 px) | Faces differed; face by face | 18.9 / 18.3 mm |
| L42b (22 / 23) | 18.0 / 17.5 mm | Square: flat rim, 0.4 mm below L42a's, so D5 steps at the junction | 18.5 / 18.5 mm (220.8 px) | Faces differed; face by face | 18.3 / 17.8 mm |

No element in this table is drawn smaller than its value by more than 0.1 mm (0.5 %), inside the reading error: L31 at 19.6 against 19.7 mm, D4 and L41 at 19.9 against 20.0 mm, and L25 at 19.1 against 19.2 mm on its rear face. No element with a raised face has a figure conflict under point 4. The one element the figure draws more than 15 % below its value is L44 (about 14.7 mm drawn against 18.5 mm), which does not clip and which neither pass moved; the section above records it.

### Cross-gap pair: surfaces 11 and 12

Surfaces 11 (R 557.450, 18.8 mm) and 12 (R -90.100, 18.7 mm) face each other across the 2.500 mm d11 air gap between D3 and L25, a fixed gap, so the figures are the same at both stations. The validator compares them over the height they share, 18.7 mm: the sags are 0.314 mm and 1.962 mm, 2.276 mm together, 0.9103 of the gap. The rim clearance there is 0.224 mm, so the surfaces do not cross. Figure 1 draws D3's rear face and L25's front face running into one stroke at the rim, at 18.9 and 19.1 mm; a 0.224 mm clearance is 2.7 px at the figure's scale, under one stroke width.

- `gapSagFrac: 0.92` allows 2.300 mm of the gap and the file builds.
- At 0.91 the build stops, for the base prescription and both zoom stations: "Air gap "11"→"12": combined surface sag (2.28 mm) exceeds allowed gap intrusion (2.275 mm of 2.500 mm) at sd=18.7".
- The next tightest gap is d8 between D2 and D3 at 0.8755 (0.884 mm clearance), unchanged; every other air gap is under 0.33.

### Traced f-number and limiter

| Station | Stated | Before any raise | Before this pass | After |
|---|---:|---|---|---|
| 80 mm | f/2.88 | f/2.95 (+2.3 %), rim of surface 20 | f/2.88 (0.0 %), iris | f/2.88 (0.0 %), iris |
| 196 mm | f/2.88 | f/2.96 (+2.7 %), rim of surface 13 | f/2.94 (+2.1 %), rim of surface 12 | f/2.89 (+0.2 %), iris |

No rim limits either station. The +0.2 % at 196 mm is the fixed iris: its radius is 15.6801 mm, set at the 80 mm station, where f/2.88 at 196 mm needs 15.7146 mm. `audit:aperture --raise` lists no surface. The tightest rim is surface 12, 0.002 mm above the stated ray.

### Render comparison

Screenshots of `/lens/nikon-af-zoom-nikkor-80-200mm-f28-ed/?v=1&zoom=80` (the wide end, the state Figure 1 draws) and `?v=1&zoom=196` were taken after the edit.

- Element order and grouping match the figure at 80 mm: D1, L13 | D2, D3, L25 | L31, D4 | L41, D5, stop, L43, L44, with d13 and d18 open and d5 nearly closed. At 196 mm G2 and G3 sit against G4 with no element overlapping another.
- Square where the figure is square: L24, L31 and D4 render with flat rims. D3 no longer peaks at its junction; L24 is flat at 18.8 mm.
- D3's rear face and L25's front face render almost touching at the rim, with a sliver of air between them, as the figure draws them.
- Rims the figure draws square that render sloped, because their faces differed before any rim was raised: L23 rises 0.5 mm from its front face to the D3 junction (18.3 to 18.8 mm) where the figure has one flat D3 rim; L25 rises 0.5 mm front to rear (18.7 to 19.2 mm); L41 falls 0.2 mm (20.0 to 19.8 mm); D5 tapers 18.9 / 18.3 / 17.8 mm where the figure draws two flat rims with one 0.4 mm step.
- D2 renders as a straight taper, 20.0 / 19.7 / 18.5 mm, where the figure draws a flat rim at 20.6 mm with the rear face ending at 18.4 mm behind a land. The rear-face height agrees; the rim shape does not, and no surface of D2 moved in this pass.
- Proportions are as the section above records them: every element with a raised face sits within 5 % of the drawing, G1 renders 8–13 % taller than drawn, L43 7 % and L44 25 %.

### Prose brought into line

- Data file header: the semi-diameter block names the surfaces at the stated-ray height, the three square rims and their values, the `gapSagFrac` pair with its share of the gap and clearance, and the iris as limiter at both stations. Comments mark rows 11, 14 and 17 and the `gapSagFrac` line.
- Analysis note: the semi-diameter paragraph and the verification summary state the same values; the worst shared-gap sag intrusion reads 0.910266 at the d11 gap, with 0.875508 at the d8 gap second.

### Confirmed unchanged

- No `R`, `d`, `nd`, glass, variable gap, `nominalFno`, `zoomApertureModel` or stop position changed. The `STO` row keeps 14.759011 mm. No semi-diameter was lowered.
- The file builds and validates. Computed focal lengths 79.9999 / 196.0021 mm and the iris radius 15.6801 mm are as before.
- Field coverage is 100 % at both stations (21.65 of 21.65 mm, corner clear) and `audit:image-circle` reports no undersized surface.
- The renderer trims no surface at any of 21 states checked (focus at infinity, mid-travel and close; zoom at both stations and five positions between them).
- Minimum element edge thickness 0.261662 mm (L12) and maximum rim slope 30.914° (surface 25) are unchanged. On the elements touched, taken at the smaller of the two semi-diameters: L24 1.565 mm (1.736 mm before), L25 4.351 mm (4.234 mm), L31 1.347 mm (1.412 mm), L32 1.629 mm (1.689 mm).
- The 60 %-field bundles at all four published states are bounded by the iris and by surface 5 (196 mm) or surface 15 (80 mm; surface 14 before this pass), never by a cemented interface.

### Left open

- Five elements the figure draws square keep unequal faces, because their faces already differed before any rim was raised and point 2 covers only elements that carried one value: L23 (18.3 / 18.8 mm; 18.2 / 18.3 mm before any raise, and part of D3's one drawn rim), L25 (18.7 / 19.2 mm; 18.3 / 18.6 mm), L41 (20.0 / 19.8 mm; 19.5 / 19.2 mm), L42a (18.9 / 18.3 mm; 18.5 / 18.0 mm) and L42b (18.3 / 17.8 mm; 18.0 / 17.5 mm). Squaring any of them puts a face above the height its ray needs, which the rule does not allow. Tried in memory, not in the repository: surface 9 at 18.8 mm, a fully square D3, builds at `gapSagFrac` 0.92 with the d8 gap at 0.8954; surface 12 at 19.2 mm, a square L25, needs `gapSagFrac` 0.93 (0.9201 of d11 over a shared 18.8 mm, 0.200 mm clearance).
- The 196 mm station traces f/2.89 against the stated f/2.88, from the fixed iris alone.
- Figure 1 is Example 1's section. No section of Example 3 exists in the patent, so rim shapes and drawn heights are read at the level of the shared configuration.
- Figure differences on surfaces that do not clip remain as the section above lists them: G1, L44, L43 and the rim of D2.
- The stop position and the authored `STO` semi-diameter remain as recorded in the 2026-10-07 entry.
