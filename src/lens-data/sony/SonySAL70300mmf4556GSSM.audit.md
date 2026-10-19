# Audit Log — SONY 70-300mm f/4.5-5.6 G SSM

Patent: JP 2009-168934 A (Tamron), Example 3 (pp. 10–11), Fig. 3.

## 2026-10-19 — Deployment validation

Source re-read from 250 dpi renders: all 28 rows (R, d, nd, νd), the stop at row 11, the four cemented groups and all
30 variable-gap values (d5, d10, d15, d23, BF at wide / middle / tele, infinity and 1.6 m) match the data file. No
aspheres. The printed indices are nd (1.48749 / 70.44, 1.49700 / 81.61, 1.84666 / 23.78), matching the d-line reference.

Patent vs model: EFL 71.7730 / 140.0942 / 291.9632 vs 71.7730 / 140.0943 / 291.9633; BF 52.592 / 77.133 / 98.397 (defocus
under 0.0004 mm); total length 175.925 / 206.840 / 235.878 exact; ω 16.41 / 8.53 / 4.12° reproduced at Y 21.633; group
focal lengths exact; conditions (1) 3.84 and (3) 7.81 reproduced. The 1.6 m object distances 1424.07 / 1393.16 / 1364.12
come out as 1424.00 / 1393.16 / 1364.13. `audit:surface` OK, image circle OK, field coverage 41/41 at 100 %.

Departures from the literal example: 38 of 41 stations are a calculated cam (G1, G3, G5 and total length linear; G2 and
G4 solved for linear EFL and zero defocus — plain gap interpolation defocuses by about 12.8 mm mid-to-tele); intermediate
G5 focus positions reconstructed with d23 + BF constant; F-number linear between printed stations; rims and glass
names estimated.

Product: Sony lists 16 elements / 11 groups, one ED element, 1.2 m, 0.25×, 62 mm filter, on sale 28 March 2008 (the
Tamron filing is January 2008). Sony's diagram (`sony.jp/products/picture/SAL70300G_002.jpg`) matches the patent group
by group, with the ED element third in G1 (1.497 / 81.61). Examples 1, 2, 4, 5 and 6 are 72–390 mm designs.

Open: S12 clips the axial beam by 0.08 mm at its worst station (needs 11.58, sd 11.5). `offAxisFieldFrac` is 0.3
instead of the default 0.6, which hides corner vignetting. The model stops at the patent's 1.6 m against the marketed
1.2 m. The SAL70300G2 (2015) is also 16/11 with one ED element and 1.2 m and probably shares the optics; not confirmed.
Wording items (missing spaces, subtitle and analysis jargon such as "correlation" and "certified") were reported and not
changed.
