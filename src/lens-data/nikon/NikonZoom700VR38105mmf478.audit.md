# Nikon Zoom 700 VR — construction audit

The package author inspected Table 1, Figure 3 and a Nikon service manual page (M11). The S21 reduction to 11 mm was made before any ray tracing. The package's numerical records are not in this repository. Printed planes, indices and gaps are unchanged.

## 2026-11-02 — Deployment validation and cleanup

Patent re-read. Table 1 (PDF p. 10, column 7) was read from the page image: 23 surfaces, 22 radii, 20 fixed spacings, 12 nd/νd pairs, 9 variable gaps and 3 station focal lengths, with no mismatches. There are no aspheres. The front page agrees with the file: US 5,530,593, Jun. 25, 1996, Atsushi Shibayama and "Susumo Sato", Nikon Corporation. Google Patents shows the assignment as SATO, SUSUMU, so the file keeps Susumu Sato.

First-order values, patent against model: f 38.9998 / 39.0018, 69.9996 / 70.0052, 101.9998 / 102.0097 mm; B.f 8.9728 / 8.9736, 31.0851 / 31.0878, 48.8923 / 48.8970 mm; F 4.08 / 4.08 and 8.05 / 8.048. Group values: G1 +62.6, GF −1598, GR +35.9, G3 −24.2 mm. fR 35.88 mm reproduces D/fR 0.159 and R/fR −0.401; KW 0.950 and KT/(Z·H) 0.031 reproduce. Printed KT/Z 0.363 does not (model 0.670), and it falls outside condition (7). Tele 2ω reproduces (chief ray 21.597 mm at 11.66°). Wide 2ω does not: 57.19° at H = 21.6 mm against the printed 58.20°, while Embodiments 2-5 agree within 0.04°, so the print is probably 57.20. All five embodiments were entered; each matches its printed f within 0.01 % and B.f within 0.006 mm.

Public diagram comparison. No public Nikon construction drawing was found; Figure 3 is the only drawing checked. The service manual page cited by the package was not seen and is not public, so the analysis no longer cites it. Nikon's history pages give the name, April 1994, 38-105mm f/4-7.8 and lens-shift VR, with no element count. filmphotography.eu gives twelve elements in ten groups and 75 cm.

Figure scale. Axial scale from vertex spacings is 20.80 px/mm. Arc fits of the strongly curved faces give 20.4 px/mm radial, within about 3 %; the stop tick centers at 5.07 mm against 4.99. An overlay of the model on the page raster follows the figure closely.

Fields changed. Data step: `zoom.stations` 3 → 11 (eight `published: false`, G3 solved, d6/d17 monotone), `gaps` to match, defocus between stations +2.5 mm and +0.86 mm → +0.075 mm; `sd` on S1-S9 and S13-S23 from Figure 3, `rimExtensionSd` on S2, S20 and S22; corner illumination 17.9/29.9/28.0 % → 53.9/61.5/52.9 %, each cut costing at most 0.2 points; `closeFocusM` 1e15 → 0.75. Wording step: header comment, `subtitle`, `catalog.specs`, element `role`, `focus.description`, `cemented` tags D1/D2 → C1/C2, new `groups` and `doublets`; analysis rewritten from the current file.

Open: `closeFocusM` and the camera's 12/10 count rest on one hobby page. Open: S21 stays 11.0 mm against about 11.2 mm drawn; 11.2 mm needs `gapSagFrac` 0.94, not added. Open: the engine's paraxial `halfField` at wide fell 28.60° → 25.38° with the rims; the traced analysis field stays 28.6° and field coverage is complete at all 11 stations. Open: the Nikon service manual page remains in the owner's records only; a public copy would firm up the construction evidence.
