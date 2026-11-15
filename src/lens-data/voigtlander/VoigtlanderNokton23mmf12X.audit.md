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
11.3 mm); left as authored in this pass. (Closed by the semi-diameter pass below.)

## 2026-11-09 — Semi-diameter pass against the patent figure

Source: patents/JP2023090337A.pdf, page 18, Fig. 1 (Embodiment 1, infinity, axis vertical with the object at the
bottom), read at 600 dpi. Scale: the 16 vertex crossings on the axis give S1 to S17 = 1186.5 px for 40.88 mm, 28.95
px/mm, and every span longer than 4 mm agrees within 0.3 % (S6–S7 196.5 px for 6.80 mm, S8–S10 218 px for 7.54 mm). The drawing is
isotropic: at 197 px off the axis all 16 drawn arcs sit within 2 px of the printed radii placed at that scale. Axis at
page x = 1450. Element edges were read as the centres of the vertical rim strokes, both sides; cap ends were found by
following each drawn arc outward until it left the printed profile.

| Surface | Before | Fig. 1 | After | Evidence and decision |
|---|---:|---:|---:|---|
| 1 | 11.0 | 10.1 | 10.2 | Square L1 edge at 10.14 mm (587 px across); 10.1 cost 2.4 points at 31.4°, so 0.1 mm stays for light |
| 2 | 10.2 | 10.1 | 10.2 | Same square edge; S2's arc reaches the corner |
| 3–5 | 12.0 | 11.3 | 11.3 | L2–L3 edge 11.30 mm (654.5 px across); costs no light; restores the drawn step below L4–L5 |
| 6–7 | 12.0 | 12.2 | 12.0 | 12.19 mm drawn, 1.6 % off; kept |
| 8 | 12.0 | cap 11.1, edge 12.2 | 12.0, cut 1.49 | Drawn flat land; q = 0.91 ± 0.005 of the edge (322 of 353 px); cut radius 10.94 mm clears the beams (reach 10.34 mm) |
| 10 | 9.75 | cap 9.5, edge 9.85 | 9.75, cut 2.33 | Drawn flat land; q = 0.96 ± 0.007 (275 of 285 px); cut radius 9.39 mm clears the beams (reach 9.08 mm) |
| 11–12 | 9.75 | 9.85 | 9.75 | 1 % off; kept |
| 13–14 | 9.75 | 9.5 | 9.6 | L8–L9 edge 9.49 mm (549.5 px across); 9.5 cost 2.3 points at 20°, and with L1 the total passed 3, so 9.6 |
| 15 | 9.0 | cap 8.3, edge 9.5 | 9.0, rimExtensionSd 9.6 | A cut at the drawn cap (8.33 mm) fails the beam rule (beams reach 9.26 mm at 31.65°); the cap keeps 9.0 and a land squares the doublet at 9.6 |
| 16A–17A | 9.5 | 9.5 | 9.5 | L10 edge 9.47 mm; arcs reach the rim; kept |

Corner light (geometric transmission against the starting rims, wide open, infinity): worst loss 2.3 points at 25.7°;
31.4° goes from 35.6 % to 33.3 %, and relative illumination at 31.5° from 0.204 to 0.192. Restoring the S8 or S10
land or the L2–L3 rims wins back nothing. The audit's on-axis check stays within 3 % of F/1.22 with no rim limit, the
inferred-cut beam check clears the cuts by 0.60 mm (S8) and 0.31 mm (S10), the image-circle floor shows nothing
undersized, and the traced
corner chief ray reaches 14.17 of 14.18 mm at 31.4°, as before. Engine EFL, F/1.22, half field 31.5° and stop radius
9.5143 mm are unchanged. The meridional real-ray check, which sizes its own iris (9.82 mm) larger than the engine
(9.51 mm), still flags S6, S11 and S12 as it did before the pass; at the engine's iris none of them is reached.

Cosina's section (official_section.png) agrees in order and grouping: 10 elements in 6 groups, the stop between the
second and third doublets, anomalous partial dispersion glass at elements 1 and 2 and the double-sided asphere at
element 10. It is schematic in proportion: it draws L2–L3 as tall as L4–L5 and L1 at about 0.93 of them, where Fig. 1
steps 10.1, 11.3 and 12.2 mm; its rear group at about 0.8 of the front matches Fig. 1.

Open: L4–L5 (12.0 against 12.2 drawn) and L6–L7 (9.75 against 9.85) sit inside measurement noise and were left.
(Carried into the second review below under the patent's names L3 and L4.)

## 2026-11-09 — Second review: diagram, labels and movement

Compared the live page (infinity, the element inspector for elements 1, 2 and 10, the focus-movement overlay and
`focus=1`) with Fig. 1 on page 18 of JP 2023-090337 A at 600 dpi. The scale was re-proved: the 16 vertex rows on the
axis and the 16 arcs 197 px off the axis are where the semi-diameter pass found them (28.95 px/mm, within 2 px).

Rims: no change. Every reading repeats the semi-diameter pass within 0.05 mm, the drawn step order (L1 < L2 < L3,
then L4 > L5 ≥ L6) holds on the page, and L1 and L5 render square as drawn. The lands and cuts were re-measured
against the base1115sd rims: the L1, L2 and L5 cuts cost 1.9, 0.0 and 1.4 points when restored one at a time, and the
S8 and S10 cuts and the S15 land cost nothing. Every verdict stands; worst loss 2.3 points at 25.7°. Fig. 1's stop
strokes begin 8.46 mm from the axis (inner ends 490 px apart) against the engine's 9.51 mm iris for F/1.22; the drawn
opening is schematic, and the STO radius was not touched. The stop sits 3.73 mm behind S8 in the drawing (printed 3.75).

Labels (changed): the patent designates its elements L1, L2f/L2r, L3f/L3r, L4f/L4r, L5f/L5r and L6 (¶0016, ¶0018,
Fig. 1). Element `name` and new `diagramLabel` now use those designations (ids 1–10 were L1–L10); the cemented
brackets and `cemented` tags D1–D4 became the patent's cemented-lens names L2–L5, which also keeps them apart from the
table's D(i) spacings; `groups` G1 (S1–S8) and G2 (S10–S17A) were added, as drawn. Roles that cited other elements
were remapped, and L1's "only air-spaced lens" became "only singlet". The analysis and header comment use the new names.

Checked and found correct: every `type` against the signs of R; aspheric labels 16A and 17A only, as printed; the stop
between S8 and S10; `apd: "inferred"` on L1 and L2f, the two elements Cosina colors as anomalous partial dispersion.
Movement: the model is static, as the patent prints the infinity state only; keyframe 0 is infinity, the slider's far
end reads "Not modeled", and the movement overlay reports no group movement.

Colour against Fig. 2 (on-axis focus relative to the image plane, at pupil 0 / 0.25 / 0.5 / 0.75 / 1.0, mm): d model
+0.003 / +0.028 / +0.042 / +0.016 / −0.020, plot 0.00 / +0.03 / +0.04 / +0.02 / −0.01; C model +0.035 / +0.061 /
+0.074 / +0.046 / +0.005, plot +0.03 / +0.06 / +0.08 / +0.05 / about +0.04; g model +0.053 / +0.083 / +0.107 / +0.096
/ +0.081, plot +0.05 / +0.08 / +0.11 / +0.10 / +0.10. Each line agrees within 0.01 mm inside 0.75 of the pupil and
within 0.035 mm at the rim, where the plotted curves end. Astigmatism at 14.2 mm: T −0.075, S −0.017 (plot −0.07,
−0.01); the tangential peak of +0.12 near 4 mm matches. Distortion at 14.2 mm: −1.80 % (plot −1.76 %). All ten glass
labels resolve to exact catalog rows; no medium is constant-index; the patent prints no partial dispersions.

Assignee "Cosina Co., Ltd." matches the front page (株式会社コシナ) and every Cosina entry in the catalog (29 files,
this one included); no variant.

Open: L3 (12.0 against 12.2 drawn) and L4 (9.75 against 9.85) remain inside measurement noise.
