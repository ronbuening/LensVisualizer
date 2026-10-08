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
