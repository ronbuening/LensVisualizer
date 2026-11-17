# Altman US 1,880,393 — audit log

## 2026-11-16 — Source comparison as delivered

The patent prints its single example twice. The drawing-sheet table (p. 1) gives S1 = 1.89; the specification table
(p. 2) gives S1 = 1.98. The delivered file used the specification's 1.98, chosen because it reproduces the stated
focal length 100.00 at the printed G′ indices. This is a choice between two printed values, not a proof of the
designer's intent.

Paraxial values of the delivered prescription (lens 2 D index 1.573, as the specification prints it):

| Index set | S1 | System EFL | BFD | Front-pair EFL |
|---|---:|---:|---:|---:|
| D | 1.89 | 99.320 | 89.712 | −648.30 |
| D | 1.98 | 98.898 | 89.002 | −686.62 |
| G′ | 1.89 | 100.461 | 90.894 | −520.07 |
| G′ | 1.98 | 100.002 | 90.136 | −545.90 |

The printed front-component focal length −529.72 lies closer to the 1.89 value even at G′. The printed lens focal
lengths +34.52, −28.63 and +75.68 agree much more closely with a G′-line calculation than with the D line, with small
residuals on lenses 1 and 3. The source is not fully self-consistent.

Radius signs +, −, −, +, −, − were taken from the drawing. No optical parameter was optimized. The data keep the
printed D indices and ν values; the G′ indices are not entered as g-line data. The image plane is the D-line paraxial
back focus. The iris at the middle of the second air space, the clear semi-diameters 9.5, 9.0 and 10.0 and the ±3°
traced field are modelling assumptions. No production identity, coverage or focus schedule is claimed. The geometry
validator passed with default thresholds and no gap-sag override, and 36 meridional rays at 0°, 1°, 2° and 3° traced
without failure or clipping.

## 2026-11-16 — Deployment validation

An independent check re-read the patent page images at 300 dpi (both printed tables, the figure, the front-page
bibliography and the claims) and compared every R, T, S, D, G′ and ν value and the printed focal lengths with the file.
The file matched the specification table exactly. The two tables differ in two values, not one: besides S1, lens 2's
D index is 1.573 in the specification and 1.575 on the drawing sheet. The drawing sheet's R2 reads 198.10, the same as
the specification. Verdict: valid with notes, as a hidden patent reference. No Kodak lens marketed at f/6.8 was found;
Kodak's own triplets of 1932–1933 were Kodak Anastigmat f/6.3 lenses (620 Kodak Junior, Six-20), a related family only.

Evidence for the lens 2 index: with the printed G′ 1.593 and ν 41.4, D = 1.575 gives (nG′ − nD)/(nF − nC) = 1.30, a
normal light-flint value (Schott LF5 gives 1.31), while 1.573 gives 1.45. With 1.575 the D-line focal length is 99.81
(−0.19 % from the stated 100.00) instead of 98.90 (−1.10 %), and the D and G′ paraxial foci lie 0.22 apart instead of
1.13, which fits the patent's statement that the objective is corrected for chromatic aberration. A single-digit
misprint scan of every radius, thickness and D index found lens 2's D index (1.575 or 1.576) as the only index that
brings the D-line focal length within 0.3 % of 100. The radius and thickness changes that do so also move the G′ focal
length to about 101, and none of them is printed elsewhere in the patent.

Changes:

- `maker`: `null` → `"Kodak"`. The assignee is Eastman Kodak Company.
- Lens 2 `nd`: 1.573 → 1.575 (drawing-sheet value), with a `corrected` entry in `source.errata`.
- Surface 6 gap (image plane): 89.00202507755924 → 89.91640595715722, the new D-line paraxial back focus.
- `catalog.focalLengthMm.design`: 98.8977671586475 → 99.81.
- Added an `unresolved` erratum: S1 printed as 1.98 and 1.89, and the front-component focal length −529.72 not
  reproduced by either (−545.90 and −520.07 at G′). S1 stays 1.98.
- Header comment rewritten in plain English, without the earlier process wording.
- Analysis rewritten with the new numbers. The claim that the stated focal length is reached only at the G′ indices
  was removed.

First order after the changes (`built.mjs`, `probe.mjs`): EFL 99.809, f/6.8, back focus 89.916, total length 105.496,
iris semi-diameter 6.52. Element focal lengths at the D line: +35.29, −29.53 and +77.46. On-axis longitudinal spherical
aberration at the D line: −0.10 mm at full aperture.

Audits: `audit:surface` OK. `audit:aperture` finds no rim limit and the f-number within 3 %. `clearap.mjs` finds no
axial clipping and no chief-ray block at ±3° or at ±25°. At ±25° the front lens vignettes 19 % of the oblique beam on
one side. `audit:image-circle` and `audit:field-coverage` skip the file (hidden, no image format).

Open:

- Name, key, subtitle ("SPECIFICATION S1=1.98; PATENT-ONLY"), specs ("PATENT-ONLY", "SPECIFICATION-TABLE GAP") and the
  focus description ("Infinity-only diagnostic") need plain public wording.
- Glass labels "(source constants)" should become plain class names.
- The unresolved S1 / front-component erratum should be queued in Section G of `agent_docs/sd-audit-queue.md`.
- The `sibling-example` evidence kind on the lens 2 erratum stands for the patent's second printing of the same table
  (drawing sheet). The type has no closer kind; confirm or rule.
- Clear semi-diameters are estimates, not read from the figure, which is schematic. Optional for the semi-diameter
  pass: a field angle for the viewer, since the patent states none and the assumed rims pass ±25°.
