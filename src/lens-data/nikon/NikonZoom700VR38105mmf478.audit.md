# Nikon Zoom 700VR — construction audit

The package author inspected Table 1, Figure 3 and a Nikon service manual page (M11). The S21 reduction to 11 mm was made before any ray tracing. The package's numerical records are not in this repository. Printed planes, indices and gaps are unchanged.

## 2026-11-02 — Deployment validation and cleanup

Patent re-read. Table 1 (PDF p. 10, column 7) was read from the page image: 23 surfaces, 22 radii, 20 fixed spacings, 12 nd/νd pairs, 9 variable gaps and 3 station focal lengths, with no mismatches. There are no aspheres. The front page agrees with the file: US 5,530,593, Jun. 25, 1996, Atsushi Shibayama and "Susumo Sato", Nikon Corporation. Google Patents shows the assignment as SATO, SUSUMU, so the file keeps Susumu Sato.

First-order values, patent against model: f 38.9998 / 39.0018, 69.9996 / 70.0052, 101.9998 / 102.0097 mm; B.f 8.9728 / 8.9736, 31.0851 / 31.0878, 48.8923 / 48.8970 mm; F 4.08 / 4.08 and 8.05 / 8.048. Group values: G1 +62.6, GF −1598, GR +35.9, G3 −24.2 mm. fR 35.88 mm reproduces D/fR 0.159 and R/fR −0.401; KW 0.950 and KT/(Z·H) 0.031 reproduce. Printed KT/Z 0.363 does not (model 0.670), and it falls outside condition (7). Tele 2ω reproduces (chief ray 21.597 mm at 11.66°). Wide 2ω does not: 57.19° at H = 21.6 mm against the printed 58.20°, while Embodiments 2-5 agree within 0.04°, so the print is probably 57.20. All five embodiments were entered; each matches its printed f within 0.01 % and B.f within 0.006 mm.

Public diagram comparison. No public Nikon construction drawing was found; Figure 3 is the only drawing checked. The service manual page cited by the package was not seen and is not public, so the analysis no longer cites it. Nikon's history pages give the name, April 1994, 38-105mm f/4-7.8 and lens-shift VR, with no element count. filmphotography.eu gives twelve elements in ten groups and 75 cm.

Figure scale. Axial scale from vertex spacings is 20.80 px/mm. Arc fits of the strongly curved faces give 20.4 px/mm radial, within about 3 %; the stop tick centers at 5.07 mm against 4.99. An overlay of the model on the page raster follows the figure closely.

Fields changed. Data step: `zoom.stations` 3 → 11 (eight `published: false`, G3 solved, d6/d17 monotone), `gaps` to match, defocus between stations +2.5 mm and +0.86 mm → +0.075 mm; `sd` on S1-S9 and S13-S23 from Figure 3, `rimExtensionSd` on S2, S20 and S22; corner illumination 17.9/29.9/28.0 % → 53.9/61.5/52.9 %, each cut costing at most 0.2 points; `closeFocusM` 1e15 → 0.75. Wording step: header comment, `subtitle`, `catalog.specs`, element `role`, `focus.description`, `cemented` tags D1/D2 → C1/C2, new `groups` and `doublets`; analysis rewritten from the current file.

Open: `closeFocusM` and the camera's 12/10 count rest on one hobby page. Open: the Nikon service manual page remains in the owner's records only; a public copy would firm up the construction evidence.

## 2026-11-02 — Semi-diameter pass against the patent figure

Source: `patents/US5530593.pdf`, PDF p. 4 (Sheet 3 of 5), Figure 3, Embodiment 1, measured at the native 2320 × 3408 raster after removing a 0.59° axis tilt. The sheets hold Figures 1-7 only, so the patent has no ray fans to read rim radii from. No public maker drawing exists, so Figure 3 is the only drawing used.

Drawn state: wide. The figure reads d6 3.23, d17 14.84 and B.f 8.80 mm against 3.2347, 15.0298 and 8.9728 mm at f = 39, and 17.07, 3.20 and 48.89 mm at tele.

Scale. Axial: 20.79 px/mm over S1 to S23 (1288.1 px / 61.965 mm), and 20.75 px/mm from S1 to the image plane. Radial: a joint fit of 17 arcs at their printed radii gives 20.66 px/mm with 0.76 px rms; the large G1 and G3 faces give 20.6 and the small G2 faces 20.9. The figure is isotropic within about 1 %, closer than the 3 % logged above. Rim heights are the mean of the top and bottom strokes at 20.66 px/mm, about ±0.1 mm. The stop ticks span 4.50-5.76 mm and bracket the 4.99 mm iris.

| Surface | Before | Fig. 3 | After | Evidence |
| --- | ---: | ---: | ---: | --- |
| S1 | 12.8 | 12.90 | 12.8 | Within reading |
| S2 curve end / land | 11.8 / 12.8 | 11.85 / 12.90 | 11.8 / 12.8 | Within reading |
| S3, S4 | 11.7 | 11.79 | 11.7 | Within reading |
| S5, S6 | 9.9 | 10.00 | 9.9 | Within reading |
| S7 | 7.4 | 7.41 | 7.4 | Agrees |
| S8, S9 | 6.6 | 6.72 | 6.6 | Within reading |
| S10, S11 | 6.0 | 6.02 | 6.0 | Agrees |
| S13, S14 | 5.6 | 5.65 | 5.6 | Agrees |
| S15 | 6.1 | 6.10 | 6.1 | Agrees |
| S16, S17 | 6.1 | 6.07 | 6.1 | Agrees |
| S18, S19 | 9.9 | 9.99 | 9.9 | Within reading |
| S20 curve end | 9.7 | 9.83 | 9.7 | Within reading |
| S20 land | 11.0 | 11.35 | 11.3 | Raised with S21: L11 is drawn square |
| S21 | 11.0 | 11.35 | 11.3 | Step order against S22 |
| S22 curve end / land | 11.3 / 13.4 | 11.13 / 13.51 | 11.3 / 13.4 | Curve end held by the floor |
| S23 | 13.4 | 13.51 | 13.4 | Within reading |

The data step's rims hold up: 20 of the 22 optical rims sit within 0.13 mm of this reading, and their shortfall of up to about 0.1 mm is mostly the 0.6 % between the axial and radial scales, so they stay. The real fault was at L11 and L12. The figure runs L11's rim 0.22 mm above S22's curve end, into L12's land, while the file had S21 0.3 mm below S22's curve end, the wrong order.

S22 cannot come down: the image-circle floor is 21.65 − 10.37 = 11.28 mm, so the larger value stands at 11.3 mm although the traced chief ray meets S22 at 10.31 mm. S21 rises to 11.3 mm to meet it, the least that restores the contact, with the S20 land at the same height to keep L11 square. That needs `gapSagFrac` 0.96; 0.95 is refused, 3.83 mm of sag against 3.80 mm allowed. The faces do not cross, and the air gap at that rim is 0.17 mm.

Clearance. No clips at any of the 11 stations, on-axis or chief ray, and all 11 stations sit within 3 % of their stated f-number. Field coverage is 100 % at all 11, and no surface is under the image-circle floor. The unvignetted bundle reaches 11.32 mm at S21. Corner illumination on the full-pupil lattice is 53.9 / 61.5 / 52.9 % at wide, middle and tele before and after, and all 11 stations match to 0.1 point. No rim costs light against the package rims, so nothing was raised for light.

Field limit. The engine half-field at wide is 25.38° before and after, against 28.6° traced, and f/4.08-8.05 is unchanged. S22's `sd` sets it: the engine's two-ray paraxial model puts the 28.6° chief ray at 12.99 mm on S22, but the real ray lands at 10.31 mm, so the estimate is a lower bound, not a clip. Reaching 28.6° in that model needs S22 12.99, S20 10.59, S19 10.44 and S23 13.84 mm, against 11.13, 9.83, 9.99 and 13.51 mm drawn. S21, at 29.3°, no longer limits it; the package's 28.60° came from S21 at 11.0 mm. No rim the figure supports changes the value, and S22's 11.13 mm curve end would lower it to about 25.0°.

Limitations. Cemented faces take no land, so L4 slants from 7.4 to 6.6 mm where the figure draws a flat rim and a 0.69 mm step, and L8 slants from 5.6 to 6.1 mm where it draws a 0.45 mm step. The draftsman's arcs depart from the printed radii in two places: S4 runs about 0.4 mm ahead of R −45.27 at the rim, and S21 is drawn nearly straight, about 0.3 mm flatter than R −124.763 at 9.4 mm. First-order values reproduce with the printed radii, so these are drawing differences. The live page was compared with the figure at wide, middle and tele, and a model outline over the figure agrees to within a stroke width at every rim except the two cemented edges.
