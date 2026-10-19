# Audit Log — SIGMA 80-400mm f/4.5-5.6 EX OS

Patent: JP 2004-061605 A, Example 1 (tables pp. 6–7), Fig. 1.

## 2026-10-19 — Deployment validation

Source re-read from 200 dpi renders: all 35 surfaces (R, d, nd, νd), the stop (row 20) and the six variable gaps plus Bf
at all three focal lengths, at infinity and at 3000 mm (42 values), match the data file. No aspheres.

Patent vs model: EFL 81.24 / 180.52 / 389.46 vs 81.237 / 180.517 / 389.461; paraxial Bf 54.14 / 65.99 / 89.18 vs
54.141 / 65.986 / 89.177; half-field 14.9 / 6.7 / 3.1° reproduced at Y 21.63. Conditions |β3B/β3A| 0.444, f12T/fT 0.537,
|β3T| 1.042, fT/Rs 3.014, |f7/fT| 0.178 as printed. The OS group G3B (S10–S14) reproduces the patent's tele
sensitivity (0.5 mm → 1.50 mm). The printed 3000 mm rows close at object-to-image distance, so 3000 mm is read from
the image plane. `audit:surface` OK, image circle OK, field coverage 41/41 at 100 %, no axial clip.

Departures from the literal example: 38 intermediate stations (G4/G6 solved cam, other gaps interpolated), F-number
linear through 4.46 / 5.3 (Fig. 3 label) / 5.83, intermediate G7 focus keyframes derived, OS centred, semi-diameters
estimated from Fig. 1, HOYA glass equivalents.

Product: 20 elements / 14 groups with three SLD elements (two front, one rear) per DPReview, Photozone, LensTip and
DC Watch; the model has exactly three 1.497 / 81.6 elements (L2, L3, L9). Announced at Photokina 2002, about two months
after filing. The later DG version kept 20/14, 3 SLD, 1.8 m, 1:5. Examples 2 and 3 are 19/13. No public construction
diagram was found (the lens is absent from Sigma's discontinued-models list).

Open: focus stops at the patent's 3 m state; the product focuses to 1.8 m (1:5). Front-group corner vignetting is
heavy at the wide end and was kept. The analysis quotes conjugates 3002.17 / 2999.12 / 3000.08 mm where the engine
gives 3000.57 / 3000.23 / 3000.26 mm. Wording items ("EXAMPLE 1" / "CENTERED OS" spec chips, missing spaces, a private
Google Drive link in the analysis Sources, a sentence repeated under all 20 elements) were reported and not changed.
