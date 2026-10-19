# Audit Log — CANON New FD 35-105mm f/3.5

Patent: US 4,432,615 A, Numerical Example 2 (col. 6), Fig. 5.

## 2026-10-19 — Deployment validation

Source re-read: the patent has no text layer, so the table was read from 200 dpi renders. All 28 radii, 27
thicknesses/gaps, 15 nd/νd pairs, the stop position and the three variable gaps at each of the three zoom rows match the
data file. D17 is split into the printed gap less 0.87 mm plus a 0.87 mm stop gap, as the patent places the stop. No
aspheres; cemented pairs R1–R3 and R20–R22.

Patent vs model EFL: 36.2 / 70 / 102 vs 36.165 / 69.921 / 101.898 mm (about 0.1 % short). f/3.5 at every station. Group
focal lengths G1 +65.10, G2 −25.27, G3 −80.01, G4 +32.18. `audit:surface` OK, image circle OK, field coverage 41/41 at
100 %, no axial clip.

Departures from the literal example:

- Back focus 56.562 mm is the mean of the three printed rows' paraxial values; the largest defocus at a printed row is
  0.0044 mm.
- The 38 intermediate stations are a solved G2/G3 cam (EFL equal to the station label, fixed back focus).
- Infinity only. The patent's 3.3 mm G1 advance for 1.5 m is reproduced (3.29 mm) when 1.5 m is measured object to film.
- Semi-diameters and glass names are inferred.

Product: Canon Camera Museum (`global.canon/en/c-museum/product/nfd245.html`) lists April 1981, 15 elements / 13
groups, 1.5 m, 0.079×, 72 mm filter — consistent with Example 2. Example 1 (51.3–131.5 mm, 16 elements) and the later
f/3.5-4.5 (14/11, molded asphere) do not fit. Canon publishes no construction diagram for this lens.

Open: S10 (sd 12.5) sits on the wide-angle corner chief ray. Macro mode is not in the patent. Wording items (an analysis
claim that a manufacturer optical section exists, L12 type should be plano-concave since R22 is flat, a private Google
Drive link in the analysis Sources, package jargon in header/analysis/specs) were reported and not changed in this pass.
