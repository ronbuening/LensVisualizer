# Audit Log — SIGMA 70–300mm f/4–5.6 DG OS

Patent: JP 2010-217838 A, Example 1 (table p. 8), Fig. 1.

## 2026-10-19 — Deployment validation

Source re-read from 400 dpi renders: all 28 rows (R, d, nd, νd), the stop at row 11, five cemented pairs, and the
variable gaps d5 / d10 / d16 / Bf at all three infinity and three finite states (with the printed object distances)
match the data file. No aspheres.

Patent vs model: EFL 70.33 / 147.08 / 290.50 vs 70.333 / 147.080 / 290.504; Bf 46.196 / 61.984 / 75.546 vs 46.196 /
61.985 / 75.547; 2ω 34.94 / 16.40 / 8.30° reproduced at Y 21.63; f1/fw 1.941, ML3/ML4 0.778, |βw2| 0.338 as printed.
At 290 mm and 1.5 m the model gives 1:3.88 (Sigma: 1:3.9). `audit:surface` OK, image circle OK, field coverage 81/81 at
100 %.

Departures from the literal example: 78 intermediate stations interpolated (Bf solved paraxially), F-number linear
between stations, focus to 1.5 m solved paraxially (G1 travel up to about 16.6 mm), OS group modelled centred only,
all rims inferred.

Product: Sigma lists 16 elements / 11 groups with one SLD element, 1.5 m, 1:3.9, 62 mm filter, SA / EF / F / Pentax /
Sony A mounts; announced September 2009, six months after filing. Sigma's drawing
(`sigma-global.com/lenses/70_300_4_56_os_specification_01.jpg`) matches Example 1 element for element, with the shaded
SLD element at L3 (1.497 / 81.6). Example 2's G3/G4 split does not match the drawing.

Open: the inferred G2 rims (sd 11 on S6–S10) clip the on-axis beam from about 245 mm; at 290 mm the beam is cut to about
93 % of its radius (effective f/6.3 vs 5.84). Needed heights: S6 11.86, S7 11.46, S8/S9 11.25, S10 11.50. Fig. 1 and
Sigma's drawing show G2 at about 0.46× the front-element height, which leaves room. The rear G4 rim (sd 10.5) is
conservative against the maker drawing. Wording items (missing spaces, "EXAMPLE 1" / "CENTERED OS" spec chips, package
internals in the analysis "Validation Limits" section, the SLD element not named) were reported and not changed.
