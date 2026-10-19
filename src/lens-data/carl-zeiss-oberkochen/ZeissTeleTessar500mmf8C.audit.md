# Audit Log — CARL ZEISS Tele-Tessar 500mm f/8 C

Patent: US 3,134,841 A, sole numerical table (p. 2), figure on p. 1.

## 2026-10-19 — Deployment validation

Source re-read: the table's text layer is garbled, so it was read from a 300 dpi page render. All 8 radii, 9 spacings
(including the 159.5 + 5 split around the stop), 5 nd/νd pairs and s′ match the data file at ×500. All surfaces are
spherical; the element shapes, both cemented pairs and the stop position agree with the patent figure.

Patent vs model: EFL 500 vs 500.094 mm; front group +0.591 and rear group −0.481 (normalised), both exact; f/8.
Zeiss data sheet (Cat. No. 10 46 03, C version, printed X/73): 5 elements / 3 components, 203.2 mm first-to-last vertex
(exact), H′ 125.5 mm (model 125.53), entrance pupil 62.5 mm diameter 477 mm behind the first vertex (model 62.51 /
477.5), exit pupil 8.4 mm in front of the last vertex (model 8.42), ∞–8.5 m. The sheet's section thumbnail shows the
same singlet + doublet … doublet layout. `audit:surface` OK, image circle 100 %, field coverage 100 %, no axial clip.

Departures from the literal example:

- Back focus is the Gaussian 171.363 mm, not the printed 171.4 mm (−0.037 mm).
- Focus to 8.5 m is a derived unit extension; the patent has no finite state.
- Clear semi-diameters 43 mm front / 16 mm rear are inferred. The relative illuminance they give at f/8 (0.90 / 0.72 /
  0.52 at 20 / 30 / 40 mm) agrees with the data sheet's curve (about 0.9 / 0.71 / 0.5).
- Glass names are nd/νd surrogates.

Open: exit-pupil diameter 22.47 mm vs the sheet's 22.7 mm. Wording items (name casing against the corpus's all-caps
form, missing spaces between numbers and words in the header and analysis, the "PRINTED STOP POSITION" spec chip, the
"Sumita equivalent" label on BK1, and a hasselbladhistorical.eu link that fails its TLS check) were reported and not
changed in this pass.
