# Audit Log — NIKON AI ZOOM-NIKKOR 80-200mm f/4

Patent: US 4,452,513, Embodiment 1, FIG. 3

## 2026-07-25 — Patent-figure SD, display-name, and glass-coverage audit

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L42 / 17 | `glass` | `795286 — dense flint class` | `J-LAFH3 (HIKARI; 795287 match to patent 795286 class)` | The historical Nikon/Hikari power-series row reproduces `nd = 1.795040`; its `νd = 28.692` agrees with the patent's one-decimal 28.6 class. |

J-LAFH3 was added to the reusable Hikari catalog with its published formula-3 power series. L41 (`670576`) and L43
(`797455`) remain unresolved because no coefficient-backed exact match was established. Strict Sellmeier coverage
increased from 10/13 to 11/13 elements.

### Phase 2 — Retained-information and semi-diameter audit

The patent does not publish clear apertures. FIG. 3 was measured after a 300 dpi render, rotated to a horizontal
optical axis, and normalized by the median height of G2-G4.

| Surfaces | Before SD (mm) | After SD (mm) | Justification |
|---|---:|---:|---|
| 1 / 2 / 3 | 29.5 / 29.5 / 28.5 | 23.5 / 23.5 / 23.0 | The L11 component was oversized relative to G2-G4 in the normalized FIG. 3 profile. |
| 4 / 5 | 27.5 / 27.0 | 18.5 / 18.5 | FIG. 3 draws L12 distinctly smaller than L11; the original data made them nearly equal. |

The stop and surfaces 6-22 were retained. The corrected values pass the trial surface validator.

The visible display name was corrected from `NIKON AI ZOOM-NIKKOR 80-200mm f/4 S` to
`NIKON AI ZOOM-NIKKOR 80-200mm f/4`, matching Nikon's manual and product nomenclature.

### Phase 3 — Spectral / metadata enrichment

- Added the coefficient-backed J-LAFH3 catalog row with `nd = 1.795040`, `νd = 28.692277`, code `795287`, and the
  historical Nikon/Hikari formula-3 coefficients.
- No patent line-index or anomalous-partial-dispersion values were fabricated.

### Phase 4 — Analysis sync

- Removed the erroneous `S` suffix from the visible lens name.
- Updated the L42 narrative, glass table, coverage disclosure, FIG. 3 SD notes, and catalog source.

## 2026-07-30 - Patent 670576 catalog-equivalent recovery

- Rechecked L41 against the patent row `nd = 1.67025`, `vd = 57.6`.
- Discontinued OHARA S-LAL52 (`1.669999 / 57.327972`, code `670573`) is the closest coefficient-backed row and
  is inside the runtime d-line safety window.
- Relabeled L41 as the S-LAL52 optical equivalent while leaving the production supplier unspecified.
  L43 remains unresolved; no prescription, zoom, or semi-diameter values changed.

## 2026-10-08 — Rims raised to the stated on-axis ray

Rule (maintainer, 2026-10-08): an inferred rim that clips the on-axis beam of the f-number the source prints is
corrected by the change that alters shape and comparative size the least, so only the surfaces that clip move, each
rises only to the height the stated on-axis ray reaches there at the station that needs most, rounded up at the
precision the file's semi-diameters use, and the patent figure is a check on the result, not the source of the value.

The stated ray is the f/4 on-axis marginal ray (TABLE 1 header, PDF p. 15: F-number 4.0 for f = 80~195.2). Every
first-group surface needs most at 195.2 mm; at 80 mm the same ray reaches 10.000 mm at surface 1 and less behind it.
The file's semi-diameters are written to 0.1 mm. The After values are the ones the repository's proposal listing
(`audit:aperture` with `--raise`) printed for the file as it stood: 1: 23.5 → 24.5, 2: 23.5 → 24.1, 3: 23 → 23.9,
4: 18.5 → 23.5, 5: 18.5 → 23.2, with the flag "raise over 15 %: read the figure" set by surfaces 4 and 5.

| Field | Before | After | Source |
|---|---:|---:|---|
| Surface 1 `sd` (L11a front) | 23.5 mm | 24.5 mm | Stated ray reaches 24.400 mm at 195.2 mm; 23.5 mm clipped it |
| Surface 2 `sd` (L11 cemented interface) | 23.5 mm | 24.1 mm | Stated ray reaches 24.021 mm at 195.2 mm; 23.5 mm clipped it |
| Surface 3 `sd` (L11b rear) | 23.0 mm | 23.9 mm | Stated ray reaches 23.826 mm at 195.2 mm; 23.0 mm clipped it |
| Surface 4 `sd` (L12 front) | 18.5 mm | 23.5 mm | Stated ray reaches 23.491 mm at 195.2 mm; 18.5 mm clipped it; FIG. 3 draws L12 at about 26.2 mm |
| Surface 5 `sd` (L12 rear) | 18.5 mm | 23.2 mm | Stated ray reaches 23.145 mm at 195.2 mm; 18.5 mm clipped it; FIG. 3 draws L12 at about 26.2 mm |

The raises are +4.3 % (surface 1), +2.6 % (2), +3.9 % (3), +27.0 % (4) and +25.4 % (5). At 0.1 mm each value is the
smallest that passes the ray: one step lower is 24.4, 24.0, 23.8, 23.4 and 23.1 mm, each below the ray height (24.4 mm
by 0.0001 mm). The rims stand 0.100, 0.079, 0.074, 0.009 and 0.055 mm outside the ray. No other surface is below the
stated ray at either station, so surfaces 6-22 and the `STO` row keep their values.

Traced at infinity focus, wide open:

| Station | Before | After | Limiter after |
|---|---|---|---|
| 80 mm | f/4.00 → f/4.00 (0.0 %), iris (`STO`) | f/4.00 → f/4.00 (0.0 %) | iris (`STO`) |
| 195.2 mm | f/4.00 → f/5.09 (+27.4 %), rim of surface 4 (sd 18.5 mm) | f/4.00 → f/4.00 (-0.0 %; 3.9985) | rim of surface 4 (sd 23.5 mm against a ray height of 23.491 mm) |

Run on the file as it now stands, the proposal listing names no surface below the stated ray. At 195.2 mm the beam
is 0.04 % wider than the stated one where it meets the surface-4 rim; the 14.1233 mm iris alone gives f/3.997 there.

### Figure check

Made before the edit. Surfaces 4 and 5 are over the 15 % line, so they were to rise only if FIG. 3 draws L12 at least
as large as the ray needs, or within 15 % below it.

FIG. 3 (Sheet 2 of 9, PDF p. 3) draws Embodiment 1. The page image embedded in the PDF is 2320 × 3408 px at 300 dpi,
so the 300 dpi render is the native resolution; positions were read from pixel runs of that render, not by eye. The
optical axis runs up the page with the object side at the bottom, tilted 0.23° (7 px over 1740 px). Half-heights are
the mean of the left and right edge-line centres about the local axis position.

- Scale 1, axial vertex spacings: r1 at y = 2220.5, r22 at 791.0, the image line at 406.0. r1 to r22 is 1429.5 px for
  154.814 mm (9.234 px/mm) and r1 to the image is 1814.5 px for 196.180 mm (9.249 px/mm). The separate gaps read
  d5 = 2.87 mm (printed 3.034 at 80 mm, 43.150 at 195.2 mm), d11 = 31.08 mm (30.972), d14 = 16.73 mm (16.708),
  d18 = 52.7 mm (53.4) and Bf = 41.7 mm (41.366), so the drawing is the 80 mm infinity state, to scale along the axis.
- Scale 2, across the axis and independent of scale 1: the image-plane line is 398 px long (x = 1219 to 1617), a
  half-length of 199 px. Read as the 21.6 mm half-diagonal of the format, that is 9.21 px/mm, 0.3 % from scale 1.
- Two further cross-checks of the transverse scale: the G2-G4 half-heights against the file's semi-diameters give a
  median of 9.12 px per file-mm (8.37 to 9.55 over eight elements), and the sag drawn 110 px off axis on twelve
  surfaces with |R| under 110 mm gives a median of 9.44 px/mm (8.63 to 10.70). The sags are only 5 to 25 px, so one
  pixel moves a single surface by 4 to 18 %; a second reading of the same twelve sags by the checker gives a median of
  10.0 px/mm (8.1 to 12.3). The drawing is not compressed across the axis. At 10.0 px/mm L11 would read about 25.9 mm
  and L12 about 24.2 mm, both still above the stated ray.

| Element | Drawn half-height, left / right | At 9.234 px/mm | At 9.21 px/mm | File now | Stated ray needs |
|---|---:|---:|---:|---:|---:|
| L11a rim (surfaces 1-2) | 256.5 / 262.5 px | 28.1 mm | 28.2 mm | 24.5 / 24.1 mm | 24.400 / 24.021 mm |
| L11b rim at r3 | 249.6 / 252.9 px | 27.2 mm | 27.3 mm | 23.9 mm | 23.826 mm |
| L12 (surfaces 4-5) | 240.8 / 242.8 px | 26.2 mm | 26.3 mm | 23.5 / 23.2 mm | 23.491 / 23.145 mm |
| L2a | 137.4 / 144.1 px | 15.2 mm | 15.3 mm | 15.5 / 15.2 mm | not raised |
| L2b-L2c | 133.6 / 133.9 px | 14.5 mm | 14.5 mm | 14.6 / 13.8 mm | not raised |
| L22 | 122.8 / 126.7 px | 13.5 mm | 13.5 mm | 13.9 / 14.2 mm | not raised |
| L3 | 135.6 / 141.4 px | 15.0 mm | 15.0 mm | 14.5 mm | not raised |
| L41 | 137.0 / 145.0 px | 15.3 mm | 15.3 mm | 14.8 / 14.3 mm | not raised |
| L42 | 127.7 / 136.8 px | 14.3 mm | 14.4 mm | 14.0 mm | not raised |
| L43 | 149.1 / 155.4 px | 16.5 mm | 16.5 mm | 18.0 / 18.2 mm | not raised |
| L44 | 165.4 / 171.1 px | 18.2 mm | 18.3 mm | 18.8 / 19.0 mm | not raised |

L12 is drawn at 26.2-26.3 mm, 11-13 % above the 23.491 / 23.145 mm the stated ray needs on surfaces 4 and 5. L11 is
drawn at 28.1-28.2 mm, 15-17 % above the 24.400 / 24.021 mm it needs on surfaces 1 and 2. The figure draws no
first-group element smaller than the ray needs, so surfaces 4 and 5 rise with the rest, and FIG. 3 does not conflict
with the printed F-number 4.0. Every raised value is below the drawn size of its element, by 12.8 %, 14.2 %, 12.1 %,
10.3 % and 11.5 % on surfaces 1-5.

The 2026-07-25 Phase 2 reading of FIG. 3 (L11 about 23.5 mm, L12 about 18.5 mm) is not reproduced. It would take
transverse scales of 11.0 px/mm for L11 and 13.1 px/mm for L12, two different values and both outside every reading
above. The drawn L12/L11 ratio is 0.93, against 0.79 in the file before this entry and 0.96 now.

FIG. 2 (Sheet 1 of 9, PDF p. 2) and its text: ordinate ticks 2.0 and 1.5 sit at y = 1792 and 2029.5 (475 px per unit
of h/h∞), and line d meets the ordinate at y = 1895, which is 1.783 h∞, or 28.96 mm with |h∞| = 16.243 (Table 2, PDF
p. 15). Col. 4 ll. 46-50 (PDF p. 12) defines line d as the incidence height of the on-axis marginal ray from an
infinity object and as the smallest first-group aperture that keeps the brightness of the lens. The f/4 on-axis ray at
195.2 mm enters at 24.400 mm, 1.502 h∞, so line d is drawn 18.7 % above it and about 3 % above the L11 half-height
in FIG. 3. Both figures put the first-group aperture above the stated ray, not below it.

### Render comparison

The cross-section was captured from the running dev server at 80 mm and infinity focus, the state FIG. 3 draws, before
and after the edit, and at 195.2 mm after it.

- Element order matches the figure front to rear: cemented L11 (a negative meniscus on a biconvex element), the thin
  meniscus L12, the cemented triplet L21 and biconcave L22, cemented L3, the stop, L41, L42, the deep meniscus L43
  concave to the object, and biconvex L44.
- Proportions, as half-height relative to L11: L12 0.96, L2a 0.63, L3 0.59, L41 0.60, L43 0.74, L44 0.78 in the render
  against 0.93, 0.54, 0.53, 0.54, 0.59, 0.65 in FIG. 3. In both, the front group is the tallest, L12 is a little
  shorter than L11, and the rear pair L43-L44 stands above G2, G3 and L41-L42.
- Departures from the drawing: the first group is rendered 10-14 % smaller than drawn (L11 is 1.58 times L2a in the
  render and 1.84 times in the figure), and L43 is rendered at 18.0 / 18.2 mm where the figure draws 16.5 mm. FIG. 3
  steps L11's rim in at the cemented surface by about 0.9 mm; the render steps it by 0.4 mm and 0.2 mm across
  surfaces 1, 2 and 3.
- At 195.2 mm the drawn on-axis fan passes inside the first-group rims and reaches the stop.

### Shape and comparative size

Against the file before this entry:

- L12 against the rear pair: L12 (18.5 mm) was shorter than L44 (18.8 / 19.0 mm) and level with L43 (18.0 / 18.2 mm).
  It is now 23.5 / 23.2 mm, taller than both by more than 4 mm, and second only to L11 where it ranked third behind
  L44. FIG. 3 draws it that way: L12 at 26.2 mm against 16.5 mm for L43 and 18.2 mm for L44.
- L12 against L11: the order is unchanged, L11 the taller. L12/L11 goes from 0.79 to 0.96; FIG. 3 draws 0.93.
- The first group against the variator: L11/L2a goes from 1.52 to 1.58 and L12/L2a from 1.19 to 1.52; FIG. 3 draws
  1.84 and 1.72.
- Faces of one element: surfaces 1 and 2 shared 23.5 mm and now differ by 0.4 mm; surfaces 2 and 3 differed by 0.5 mm
  and now differ by 0.2 mm; surfaces 4 and 5 shared 18.5 mm and now differ by 0.3 mm. Each surface rises only to its
  own ray height, and the ray converges through the group.

Validation of the new values: the file builds and the validator reports nothing. Edge thickness at the smaller of each
element's two semi-diameters is 3.826 mm for L11a (at 24.1 mm; 3.713 mm at 23.5 mm before), 2.963 mm for L11b (at
23.9 mm; 3.356 mm at 23.0 mm before) and 2.423 mm for L12 (at 23.2 mm; 3.001 mm at 18.5 mm before). Rim slope is
13.0°, 22.6°, 1.9°, 10.1° and 2.2° on surfaces 1-5 against the 64.2° limit. Across the 0.1 mm gap between surfaces 3
and 4 the sags diverge and leave 2.562 mm of air at 23.5 mm (1.622 mm at 18.5 mm before). Across d5 the intrusion is
taken at L2a's 15.5 mm and stays 0.600 mm of the 2.913 mm allowed at 80 mm.

Rewritten to the traced state: the data-file header's stop-inference and semi-diameter blocks, a one-line comment above
the surface rows, and in the note the stop sentence and the semi-diameter paragraphs under "Modeling inferences". The
header box rows were padded to one width; outside those two blocks no wording changed.

Confirmed unchanged:

- The `STO` row (sd 14.065342 mm), the semi-diameters of surfaces 6-22, every radius, thickness and index, the `var`
  gaps, `nominalFno` 4, `zoomApertureModel` "fixed-iris", `fstopSeries`, `gapSagFrac` 0.96 and `yScFill`.
- Traced wide-open iris radius 14.1233 mm at both stations (each station alone would need 14.1233 and 14.1135 mm);
  computed focal lengths 80.0000 and 195.2007 mm.
- The 80 mm station, f/4.00 on the iris before and after.
- The stated ray's clearance behind the first group at 195.2 mm: 2.7-6.9 % on surfaces 6-18 and more than a factor of
  three on surfaces 19-22.
- Traced field coverage: 100 % at 80 mm (15.7°) and at 195.2 mm (6.2°), corner chief ray clear at 21.65 mm.
  Image-circle floor: no surface listed.
- The r9-r10 air lens and its 0.182 mm rim gap, which involve only surfaces 9 and 10.

Left open:

- FIG. 3 draws the first group larger than the file now carries (28.1 / 27.2 / 26.2 mm against 24.5 to 23.2 mm); the
  file's values are 10-14 % below the drawn ones, inside the roughly 15 % the figure procedure treats as drawing
  noise. FIG. 2 puts line d at about 29.0 mm, 18.2 % above the 24.5 mm of surface 1 (24.5 mm is 15.4 % below it), at
  the edge of that band. The rule does not raise a rim past the stated ray.
- At 1.2 m and 195.2 mm the on-axis beam is bounded by the surface-4 rim with the iris filled to 87.1 % of its radius
  (12.296 of 14.123 mm; 68.3 % before this entry). The ray that would fill the iris there reaches 27.83 / 27.39 /
  27.31 / 26.91 / 26.63 mm on surfaces 1-5, within about 0.7 mm of the FIG. 3 half-heights. The rule's stated ray is the
  infinity ray, so the close-focus beam is not a reason to raise under it; whether the first group should follow the
  figure instead is a maintainer decision. Surfaces 6-22 pass that ray.
- The Phase 2 table of 2026-07-25 above records a FIG. 3 reading this entry could not reproduce; it stands as history.
- L43 is drawn at about 16.5 mm against 18.0 / 18.2 mm in the file. It does not clip the stated beam, so the rule does
  not reach it.
- Mentions of this lens under `agent_docs/` (the fixed-iris patent audit record and the rim-limited station count of
  the semi-diameter queue) lie outside this lens's three files and were not edited.

Surfaces 2 and 5 no longer differ from the front faces of their elements; see "Square rims kept square" below.

## 2026-10-08 — Square rims kept square

Rule (maintainer, 2026-10-08, points 1 and 2 of "A clipped stated beam"): a clipping surface rises only to the height
the stated on-axis ray reaches there, rounded up at the file's precision, and an element whose two faces carried one
value before any rim was raised, and which the patent figure draws with a square-cut rim, keeps one value, the higher
of its two faces. An element the figure draws stepped is raised face by face. The cross-gap point of the rule was not
needed, and the figure remains a check only.

Starting point. The file before any rim was raised (commit `2c813a34`) carried 23.5 / 23.5 / 23.0 mm on surfaces 1-3
and 18.5 / 18.5 mm on surfaces 4-5: L11a (surfaces 1-2) and L12 (surfaces 4-5) each had one value, and L11b
(surfaces 2-3) stepped in by 0.5 mm at its rear face. The proposal listing (`audit:aperture` with `--raise`) on that
copy prints 1: 23.5 → 24.5, 2: 23.5 → 24.1, 3: 23 → 23.9, 4: 18.5 → 23.5, 5: 18.5 → 23.2, and in its square-rim
column 1/2: 24.5 and 4/5: 23.5. The section above applied the first column face by face.

| Field | Before | After | Source |
|---|---:|---:|---|
| Surface 1 `sd` (L11a front) | 24.5 mm | 24.5 mm | Stated ray reaches 24.400 mm at 195.2 mm, infinity focus |
| Surface 2 `sd` (L11 cemented interface) | 24.1 mm | 24.5 mm | Squared to the higher face (surface 1), figure draws a square rim on L11a; the ray needs 24.021 mm at 195.2 mm |
| Surface 3 `sd` (L11b rear) | 23.9 mm | 23.9 mm | Stated ray reaches 23.826 mm at 195.2 mm; figure steps L11b in at this face |
| Surface 4 `sd` (L12 front) | 23.5 mm | 23.5 mm | Stated ray reaches 23.491 mm at 195.2 mm, infinity focus |
| Surface 5 `sd` (L12 rear) | 23.2 mm | 23.5 mm | Squared to the higher face (surface 4), figure draws a square rim on L12; the ray needs 23.145 mm at 195.2 mm |

`gapSagFrac` stays 0.96 and no pair was added to it. Both squared values pass the validator at the value the file
already carries.

### How FIG. 3 draws each rim

Read from pixel runs of the 300 dpi render of Sheet 2 (PDF p. 3), the native resolution of the embedded page image;
the object side is at the bottom of the page and half-heights run across it. Scale 9.234 px/mm, from the section
above.

| Element | Rim as drawn | Left / right rim-line centre | Drawn half-height, front face / rear face |
|---|---|---:|---:|
| L11a (surfaces 1-2) | Square-cut | x = 1156.5 / 1676.0 px | 259.8 px, 28.1 mm / 259.8 px, 28.1 mm |
| L11b (surfaces 2-3) | Stepped in below L11a | x = 1163.5 / 1666.0 px | 251.3 px, 27.2 mm / 251.3 px, 27.2 mm |
| L12 (surfaces 4-5) | Square-cut | x = 1172.5 / 1656.0 px | 241.8 px, 26.2 mm / 241.8 px, 26.2 mm |

- L11a: one straight rim line on each side (x = 1154-1159 over y = 2139-2182 on the left, x = 1673-1679 over
  y = 2145-2188 on the right). The r1 arc ends on that line at its object-side end and the r2 arc runs into the same
  line at the other end, so both faces end at one height.
- L11b: its own short rim line sits inside the L11a line (x = 1161-1166 on the left, x = 1663-1669 on the right) and
  runs from the r3 line down to r2. It is 7 px inside the L11a rim on the left and 10 px on the right, 0.76 and
  1.08 mm, a mean of 0.9 mm, and on the right the drawing closes the corner with a flat land on the rear of L11a. The
  cemented pair is drawn with a step at the cemented surface, not with one common rim, so L11a and L11b are judged
  separately. The file gives the cemented surface one semi-diameter. Before any rim was raised that surface carried
  L11a's value and the step sat at surface 3; the same arrangement holds now, with L11a square and the rear face of
  L11b at its own ray height.
- L12: one straight rim line on each side (x = 1170-1175 over y = 2082-2104 on the left, x = 1653-1659 over
  y = 2086-2112 on the right) with the r5 line and the r4 arc both ending on it.

The elements behind the first group have no raised face and were not re-read.

### Result

Traced at infinity focus, wide open:

| Station | Before this section | After | Limiter after |
|---|---|---|---|
| 80 mm | f/4.00 → f/4.00 (0.0 %), iris (`STO`) | f/4.00 → f/4.00 (0.0 %) | iris (`STO`) |
| 195.2 mm | f/4.00 → f/4.00 (-0.0 %; 3.9985), rim of surface 4 | f/4.00 → f/4.00 (-0.0 %; 3.9985) | rim of surface 4 (sd 23.5 mm against a ray height of 23.491 mm) |

Neither squared surface was the limiter, so both stations trace as they did. The proposal listing names no surface
below the stated ray. At 195.2 mm the rims stand 0.100, 0.479, 0.074, 0.009 and 0.355 mm outside the stated ray on
surfaces 1-5 (0.079 mm on surface 2 and 0.055 mm on surface 5 before).

Shape against the file before any rim was raised: surfaces 1 and 2 share one value again (24.5 mm; 23.5 mm then),
surfaces 4 and 5 share one value again (23.5 mm; 18.5 mm then), and L11b steps in by 0.6 mm at surface 3 (0.5 mm then,
0.2 mm after the face-by-face raise, about 0.9 mm in FIG. 3). The squared values are 12.8 % (surface 2) and 10.3 %
(surface 5) below the drawn size of their elements, so neither is raised above what the figure shows.

The file builds and the validator reports nothing. Edge thickness is 3.903 mm for L11a at 24.5 mm (3.826 mm at
24.1 mm before), 2.963 mm for L11b at 23.9 mm (unchanged; 2.712 mm between the surface-2 rim at 24.5 mm and the
surface-3 rim at 23.9 mm) and 2.382 mm for L12 at 23.5 mm (2.423 mm at 23.2 mm before). Rim slope is 23.0° on
surface 2 (22.6° before) and 2.2° on surface 5, against the 64.2° limit.

Cross-gap, neither pair changed by this section:

- Surfaces 3 and 4 (0.1 mm gap) are compared at 23.5 mm, the smaller of the two rims; the sags diverge and leave
  2.562 mm of air there.
- Surfaces 5 and 6 (d5) are compared at L2a's 15.5 mm, so surface 5's rim does not enter: 0.600 mm of intrusion,
  19.8 % of the 3.034 mm gap at 80 mm and 1.4 % of the 43.150 mm gap at 195.2 mm, with 2.434 mm of air at the rim
  height at 80 mm.
- `gapSagFrac` 0.96 is needed only by the r9-r10 air lens, as before: 3.918 mm of intrusion is 95.57 % of the 4.1 mm
  gap and leaves 0.182 mm at the 13.8 mm rim. At 0.95 the validator refuses that pair ("combined surface sag
  (3.92 mm) exceeds allowed gap intrusion (3.895 mm of 4.100 mm) at sd=13.8"), with or without this section's values.

Traced field coverage is 100 % at 80 mm (15.7°) and at 195.2 mm (6.2°) with the corner chief ray clear at 21.65 mm;
the image-circle floor lists no surface; the render diagnostics report no trimmed surface at five zoom positions
from 80 to 195.2 mm, at infinity and at 1.2 m. At 1.2 m and 195.2 mm the on-axis beam is bounded by the surface-4 rim
with the iris filled to 87.1 % of its radius (12.296 of 14.123 mm), as before.

### Render comparison

The cross-section was captured from the running dev server at 80 mm, the state FIG. 3 draws, and at 195.2 mm, both at
infinity focus.

- Element order matches the figure front to rear: cemented L11 (negative meniscus on a biconvex element), the thin
  meniscus L12, the cemented triplet L21, biconcave L22, cemented L3, the stop, L41, L42, the deep meniscus L43
  concave to the object, and biconvex L44.
- Rims: L11a is rendered with a flat rim, both faces at 24.5 mm, and L12 with a flat rim, both faces at 23.5 mm, as
  FIG. 3 draws them. The render diagnostics give 24.5 / 24.5 mm for L11a, 24.5 / 23.9 mm for L11b and 23.5 / 23.5 mm
  for L12, equal to the authored values.
- L11b: FIG. 3 draws a right-angled step at the cemented surface, a land on the rear of L11a and a short cylinder on
  L11b. The render joins the surface-2 rim at 24.5 mm to the surface-3 rim at 23.9 mm with one straight line, so the
  step appears as a slope across the L11b rim. The step is 0.6 mm in the render and about 0.9 mm in the figure.
- Proportions, as half-height relative to L11: L12 0.96, L2a 0.63, L3 0.59, L41 0.60, L43 0.74, L44 0.78 in the
  render against 0.93, 0.54, 0.53, 0.54, 0.59, 0.65 in FIG. 3. The front group is the tallest in both, L12 is a
  little shorter than L11, and the rear pair L43-L44 stands above G2, G3 and L41-L42.
- At 195.2 mm the drawn on-axis fan passes inside the first-group rims and reaches the stop.

Brought into line with these values: the data-file header's semi-diameter block and the comment above the surface
rows, and in the note the first-group semi-diameter table, the rim clearances at 195.2 mm, the 10-13 % comparison
with FIG. 3 and the sentence on how the figure and the model end each rim.

Confirmed unchanged: the `STO` row (sd 14.065342 mm), surfaces 1, 3, 4 and 6-22, every radius, thickness and index,
the `var` gaps, `nominalFno` 4, `zoomApertureModel` "fixed-iris", `gapSagFrac` 0.96 and `yScFill`; the traced
wide-open iris radius 14.1233 mm and the computed focal lengths 80.0000 and 195.2007 mm.

Left open:

- FIG. 3 draws the first group at 28.1 / 27.2 / 26.2 mm against 24.5 / 23.9 / 23.5 mm in the file; the file's values
  are 10-13 % below the drawn ones. The rule does not raise a rim past the stated ray except to keep a square rim
  square.
- The step on L11 is 0.6 mm in the file against about 0.9 mm in FIG. 3, and it is rendered as a slope, not as a
  right-angled step. Drawing a step is a renderer matter outside this lens's three files.
- The close-focus beam at 195.2 mm, the L43 size and the `agent_docs/` mentions listed under "Left open" in the
  section above stand as written there.
