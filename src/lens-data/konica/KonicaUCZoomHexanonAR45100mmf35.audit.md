# Audit Log — KONICA UC ZOOM HEXANON AR 45-100mm f/3.5

Patent: JP S51-34741 A, Example 1

## 2026-10-07 — Patent-audit queue: stop position in d13

Source: `patents/JPA 1976034741-000000.pdf` (12 pages). The Example 1 prescription is on PDF pp. 5–6 (printed pp. 269–270); the stop-position sentence is on PDF p. 9 (printed p. 273), right column, the last sentence before the C1–C4 legend; Fig. 1 is on PDF p. 10 (printed p. 274).

The prescription table has no stop row, and the file placed its `STO` 2.0 mm in front of r14 as an inference from Fig. 1. The patent does state the position. The figure description says Figs. 9–12 are the lateral-aberration plots of Examples 1 to 4, and that their abscissa is the ray height at the stop with the stop taken 1.5 mm, 3.2 mm, 3.5 mm and 1.5 mm, respectively, in front of the most object-side surface of the fourth lens component C4. For Example 1 that surface is r14, so the stop is 1.5 mm in front of r14. One distance is given per example for all three plotted focal lengths, and C4 does not move, so the stop is fixed with C4. The `STO` row and the r13-to-stop gaps are set to that split; each pair still sums to the printed d13.

| Field | Before | After | Source |
|---|---|---|---|
| `STO` `d` (stop to r14) | 2.0 | 1.5 | Figure description, PDF p. 9 (printed p. 273), right column: stop 1.5 mm in front of the most object-side surface of C4 for Example 1 (the list reads 1.5 / 3.2 / 3.5 / 1.5 mm for Examples 1–4). |
| Surface 13 `d` (r13 to stop, base value) | 4.5 | 5.0 | d13 = 6.5 at f = 46.76 (variable-gap table under Example 1, PDF p. 6, printed p. 270) less the 1.5 mm above. |
| `var["13"]` at 46.76 / 67.38 / 99.18 mm (infinity and close entries alike) | 4.5 / 0.5 / 5.1 | 5.0 / 1.0 / 5.6 | d13 = 6.5 / 2.5 / 7.1 in the same table, less 1.5 mm. |
| Header and note: paraxial f-number of the authored `STO` semi-diameter 10.2029784318 mm, wide / middle / tele | 3.500000000 / 3.498983119 / 3.497334575 | 3.500030361 / 3.499004476 / 3.497341337 | Computed from the file's prescription. The semi-diameter itself is not changed. |
| Note: entrance-pupil semi-diameters, wide / middle / tele | 6.687803 / 9.635975 / 14.180846 mm | 6.687745 / 9.635917 / 14.180818 mm | Computed: the authored `STO` semi-diameter imaged through surfaces 1–13. |
| Note: entrance-pupil positions from the first vertex | +39.292739 / +66.503042 / +91.970899 mm | +39.507562 / +66.949011 / +92.936770 mm | Computed: the stop plane, 59.2 mm from the first vertex at every station (58.7 mm before), imaged through surfaces 1–13. |
| Note: exit-pupil position from the last vertex | −26.951778 mm | −26.160639 mm | Computed: the stop plane imaged through surfaces 14–21; the same at every station. |
| Note: exit-pupil semi-diameter | 12.890878 mm | 12.777747 mm | Computed: authored `STO` semi-diameter times the C4 pupil magnification 1.252355 (1.263443 before). |
| Engine wide-open iris radius (real marginal ray of f/3.5 at the wide station; not a patent value) | 10.3248 mm | 10.3240 mm | Traced from `nominalFno`; held at all three stations by the fixed-iris model. |
| Header and note: status of the stop position | modeling inference from Fig. 1 | the plane the patent text gives; only the diameter is modeled | Same sentence, PDF p. 9. The sentences calling the diaphragm or its position inferred are reworded (header STO block; note stop section, L8 paragraph, pupil paragraph, closing paragraph, and Sources item 1). |

Confirmed unchanged:

- Example identity. The Example 1 header reads f = 46.76 ~ 99.18, F 1 : 3.5 (PDF p. 5). All 21 radii, 17 fixed thicknesses and 11 index / Abbe pairs on PDF pp. 5–6 match the file, from r1 66.775 / d1 1.5 / 1.80518 / 25.4 through r7 17.670 / d7 5.0, r13 −108.092, r14 30.145 / d14 5.0 / 1.51823 / 59.0 and r21 −79.843. Examples 2–4 start from r1 142.857, 50.000 and 111.111 and are not the file's.
- Variable gaps d5 1.8 / 15.0 / 24.6 and d11 25.0 / 15.8 / 1.6, and the last gap 63.24, the patent's fB (PDF p. 6). The file's r13-to-stop and stop-to-r14 gaps sum to the printed d13 6.5 / 2.5 / 7.1 at the three stations.
- Stop reading. The four distances are tied to the four examples by "respectively" and by the preceding sentence, which assigns Figs. 9–12 to Examples 1–4. With them the stop sits 1.0 mm behind the C3 rear vertex at closest approach in Examples 1, 2 and 3 (2.5 − 1.5, 4.2 − 3.2, 4.5 − 3.5) and 1.5 mm in Example 4 (3.0 − 1.5). Fig. 1 draws the diaphragm in d13 about a fifth of the gap in front of r14.
- First-order values do not depend on the stop plane: computed focal lengths 46.8146 / 67.4322 / 99.1903 mm against the printed 46.76 / 67.38 / 99.18, back focal distances 63.2844 / 63.2582 / 63.2156 mm against fB 63.24, first-to-last-surface span 83.70 mm. `focalLengthDesign`, the eleven element focal lengths, the component focal lengths, principal planes and Petzval figures in the note stand as they are.
- On-axis spherical aberration is the same before and after: 0.269 / 0.349 / 0.127 mm at the full f/3.5 pupil for wide / middle / tele.
- `nominalFno: 3.5` and `zoomApertureModel: "fixed-iris"`. The real marginal ray of f/3.5 needs 10.3240 / 10.3424 / 10.3404 mm of stop radius at the three stations (10.3248 / 10.3431 / 10.3414 mm before), a spread of 0.18 %; the paraxial radii are 10.2031 / 10.2001 / 10.1952 mm. The wide-station radius held at every station gives f/3.500 / 3.506 / 3.506 from the iris alone, and the traced on-axis f-number is f/3.50, f/3.51 and f/3.51, limited by the iris at all three stations.
- No semi-diameter changed, including the authored `STO` value. The file builds with the stop at the new plane.
- The note's statement that a finite part of the pupil reaches the 21.63 mm image height at all three stations holds at the new plane: 25.7 / 23.6 / 31.4 % of the stop diameter passes the stored rims in the meridional section, the same to 0.1 % as before. The band is bounded by surfaces 6 and 20 at wide, 1 and 20 at middle, and 5 and 20 at tele.

Left open:

- The patent gives this position as the stop taken for the lateral-aberration plots. It is the only stop position the source states, and no stop diameter, radius or effective aperture is printed in the example tables, the figure description or the drawings, so the stop size stays a model value.
- The authored `STO` semi-diameter 10.2029784318 mm is the paraxial f/3.5 marginal height at the wide station for a stop 2.0 mm in front of r14. At the patent's plane that height is 10.2030669372 mm, 0.00009 mm more. The semi-diameter is left as it was and only the paraxial f-numbers it gives are restated; it does not size the wide-open iris, which is traced from `nominalFno`.
- The modeled clear apertures were derived with the stop 2.0 mm in front of r14 and are not re-derived. Moving the stop 0.5 mm toward r14 raises the full-field (Y = 21.63 mm) chief-ray heights ahead of the stop by up to 0.20 mm (surface 1: 21.30 to 21.43 mm at 67.38 mm, 19.74 to 19.94 mm at 99.18 mm) and lowers them in C4 by up to 0.15 mm. The stored front rims are below those chief-ray heights at every station before and after (surfaces 6–8 at wide, 1–5 at middle, 1, 4 and 5 at tele): the engine's rim-limited paraxial half-field is 20.83° / 16.21° / 11.60° (20.97° / 16.32° / 11.73° before), where the real chief ray to Y = 21.63 mm enters at 25.64° / 17.72° / 11.95°. That is a rim question for the semi-diameter audit, not part of this row.
