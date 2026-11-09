# Private authoring audit

Literal source transcription at scale 1; the 14.78 mm final gap was fixed before tracing. Geometry passed, with substantial wide-open edge clipping retained. No SD changed after tracing; no refocus or commercial-glass substitution.

Color-Skopar 18 Embodiment 1 is a separate source hold and is not included as an authored lens.

## 2026-11-09 — Deployment validation

Independent check against the full JP 2023-090337 A (Google Patents, 20 pp.; tables read at 300 dpi): 16 surfaces
plus STO, 10 nd/νd pairs, 4 cemented pairs and both aspheres (K, A4–A18; 1+K form) agree with the file; scale 1.
Engine EFL 23.606 (printed 23.6), F/1.22, BF 14.78, TL 55.66, ω 31.5°, front/rear group focal lengths 38.08/40.56
(printed 38.1/40.6). Front page: Cosina Co., Ltd., inventors Moriyama, Nagasawa, Shibata, published 2023-06-29.
Attribution strong: Embodiment 1 is the patent's only 10/6 example and matches Cosina's diagram element by element
(cemented pairs, stop, double-sided rear asphere, two APD elements).

Deployment change: `maker` → "Voigtländer".

Open: glass labels (each nd/νd pair has an exact catalog row); wording. (Both closed by the cleanup pass below.)

## 2026-11-09 — Cleanup and wording pass

Data file. Header comment rewritten in plain terms, with the same facts (patent scale, printed vs inferred values, A6
prose omission, 14.78 vs 14.8 mm back focus, inferred iris and rims, static focus). Subtitle → "JP 2023-090337 A,
Embodiment 1 — matches Cosina's published 10/6 construction". Specs → 10 ELEMENTS / 6 GROUPS, DESIGN f = 23.6 mm,
DESIGN F/1.22, 2 ASPHERICAL SURFACES / 1 ELEMENT, 2 ANOMALOUS-DISPERSION ELEMENTS. Added `catalog.closeFocusM.marketing`
0.18 (Cosina product page). Focus stays static at infinity (`closeFocusM` 1e15; the patent prints no near state); the
description now says so plainly. Aperture unchanged (f/16, 12 blades, both Cosina). Ten boilerplate roles replaced with
element-specific ones. `apd: "inferred"` kept on L1 and L2, the two positions Cosina colors as anomalous partial
dispersion, with one-sentence notes giving the catalog-equivalent θgF.

Glass relabels, exact catalog rows only (each confirmed to resolve to that row): L1 E-FDS1 (HOYA), L2 J-SF14 (HIKARI),
L3 and L4 TAFD55 (HOYA), L5 J-KZFH4 (HIKARI), L6 FDS90 (HOYA), L7 and L8 TAFD37 (HOYA), L9 J-SF10 (HIKARI), L10
L-LAH84 (OHARA). All ten were "Unmatched" before. ΔPgF of the equivalents: L1 +0.030, L2 +0.014; the unmarked dense
flints L6 and L9 are +0.015 and +0.011.

Analysis rewritten to the analysis spec: product facts and the five-point attribution, element roles with the patent's
claims and paragraphs, glass table, asphere departures, Fig. 1 rim readings, vignetting at F/1.22 (36 % of the beam and
relative illumination 0.20 at 31.5°), and a patent-vs-model table. Removed the source-custody material (download
hashes, the private index location), sample-grid and MTF-convergence tables and other process text.

Engine numbers identical before and after: EFL 23.6055 mm, F/1.22, half field 31.5°, stop radius 9.5143 mm, BFD
14.7827 mm. Surface audit OK; aperture audit within 3 % of the stated f-number, no rim limit.

Open: L1 (11.0/10.2 mm) and L2–L3 (12.0 mm) rims are up to 0.8 mm larger than Fig. 1 drawn to scale (about 10.2 and
11.3 mm); left as authored in this pass.
