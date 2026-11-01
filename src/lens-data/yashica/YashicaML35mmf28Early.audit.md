# Audit Log — YASHICA ML 35mm f/2.8 (early diamond-grip)

Patent: JP S50-132921 A, sole numerical example (publication page (3), printed at f = 100)

## 2026-11-01 — Deployment validation and fix pass

### Source re-read

The patent PDF is a page-image scan with no text layer, read at 300 dpi source resolution with 400 dpi crops of the tables.
Front page: Yashica Co., Ltd. is the applicant (not Tomioka), inventor Yoshisato Fujioka, application `特願昭49-38016`, filed
1974-04-05, published 1975-10-21, examination not requested. All match the file.

13 radii, 12 spacings, BF, 7 nd and 7 νd checked against the file's ×0.35 values: no mismatches. Recomputed Seidel B and P
reproduce all 26 printed cells at 4 decimals (largest residual 0.00005), which confirms R, d and n independently of the visual
read. νd values rest on the visual read alone.

| Quantity | Patent, f = 100 | Model, f = 100 | Scaled |
|---|---|---|---|
| Focal length | 100 | 100.003 | 35.001 mm |
| F-number | 2.8 | 2.8 | 2.8 |
| Back focus | 108.7 | 108.666 | 38.033 mm (file uses printed 38.045) |
| f_I | −164.0 | −164.04 | −57.41 mm |
| Full field | 64° | 64° | image height 21.65 mm |

Patent conditions: −f_I/f = 1.640, (n3 − n2)/r4 = 0.2255/f, optical length 0.415f. All inside their ranges. Fig. 2 spherical
(+0.5 at full aperture, −0.5 at the zone) matches the model (+0.489, −0.488) in f = 100 units. Back focus is not a discrepancy:
108.666 rounds to the printed 108.7.

### Seidel table and stop

| Sum | Printed | Model, stop mid-d7 |
|---|---|---|
| B | 1.1512 | 1.1512 |
| F | −0.1191 | +0.0027 |
| C | −0.0364 | −0.0487 |
| P | 0.1916 | 0.1916 |
| E | 0.1291 | 0.1352 |

One stop shift, ε = −0.10578 (paraxial entrance pupil 52.5 → 63.08 from r1 at f = 100), reproduces all 39 F, C and E cells
within 0.0004 and all three sums, so the difference is not a digit error. That chief ray crosses the axis 0.343 at f = 100
(0.12 mm scaled) behind r9, inside the sag of L5's rim, so it is not a usable iris position. It also misses Fig. 2 at 32°
(T −2.07, S +0.79 against read M −1.36, S +0.60). A single-slip search over 1,440 variants of R, d and n found none that fits:
38 reach the F, C and E sums with a stop in d7 but all break B by at least 0.028, and the 68 that keep B and P (last-digit
changes) leave F, C and E unimproved. A stale pupil input is possible but unproved. The stop stays in d7.

### Maker diagram and product match

FX-1 manual page 91 (PDF page 47): 7 elements in 6 groups, 64°, f/16, 0.3 m (1 ft), 52 mm filter, 54 mm slip-on hood, diamond
grip in the photograph. Its section drawing matches Fig. 1 element for element, with the iris between L4 and L5. Public sources
agree on two versions: earlier 7/6 with diamond knobs, later 6/5 with square knobs. The patent matches the earlier one. lens-db
was read through search snippets only, because the site refused the connection. `yashica_lenses_accessories.pdf` was not
reviewed.

No audit log existed for the other Yashica ML files, and none is required by the build; this file records the pass.

### Fields changed

| Field | Before | After |
|---|---|---|
| `aperture.fStops` | 2.8 to 32 | 2.8, 4, 5.6, 8, 11, 16 |
| `aperture.maxFNumber` | 32 | removed (default 16) |
| `subtitle` | process wording | `JP S50-132921 A, Sole example — uniformly scaled ×0.35 production correlation` |
| `catalog.specs` | process wording | ML 24 form, five lines |
| `glass` | 7 of 7 `Unmatched` | 7 of 7 resolved (table below) |
| element `role` | boilerplate | specific roles |
| `cemented`, `doublets` text | D1 | C1 |
| `groups` | absent | I, II, III, IV as the patent names them |
| `focus.description`, header comment | process wording | plain text, same facts |

| Element | Printed nd/νd | Label row | Δn | Δν |
|---|---|---|---|---|
| L1 | 1.59181 / 58.3 | BACD13 (HOYA) | 0 | +0.01 |
| L2 | 1.56384 / 60.8 | N-SK11 (SCHOTT) | 0 | 0.00 |
| L3, L6 | 1.71300 / 53.9 | LAC8 (HOYA) | 0 | +0.04 |
| L4 | 1.69350 / 53.4 | LAC13 (HOYA) | 0 | −0.06 |
| L5 | 1.71736 / 29.5 | SF1 (SCHOTT) | 0 | +0.01 |
| L7 | 1.64085 / 56.8 | LACL1 (HOYA) | 1e−6 | +0.04 |

L4 sits at the row-check limit (|Δν| ≤ 0.06) with an exact nd, so the channels trace at the printed index. The pair also recurs
across the corpus (Olympus Pen F 60mm, Canon 50mm f/0.95 and others), so it is a real glass and not an optimizer value. Sumita's
LAK13 is the exact 1.69350/53.40 row, but it is not in the catalog. The analysis quotes no chromatic figures that the relabel
changes.

The analysis lost its process references (validation file, evidence directory, research card, commit hash), its "Verification
Summary" heading and its no-commercial-glass claim. Examination status replaced the unreviewed-grant line.

Engine values are unchanged apart from the aperture list: EFL 35.0010, F/2.8, half-field 32°, stop radius 6.815 mm, BFD
38.0332, all 41 focus keyframes. `maxFstop` went from 32 to 16. Surface audit OK; aperture audit: 1 station within 3 % of the
stated f-number. Earlier checks in this pass: image circle 21.65 mm with coverage 100 %, no axial clip or blocked chief ray,
14–38 % side vignetting at r9–r13 at 32°.

Focus is a labelled reconstruction. The patent and the manual are silent on the mechanism. Only BF moves, by 5.875 mm
(m = −0.168), which an independent paraxial calculation reproduces. `closeFocusM` 0.3 matches the manual. ML 24 models no focus
motion, so the two files differ on this point.

Open: stop position. Fig. 1 draws it about 41 % into d7 from r7, the manual section about 46 %, and the Fig. 2 curves at 32° fit
about 37 %. An option is 2.74 + 3.95 mm in place of 3.346 + 3.346 mm. These are hand-drawn readings, and the stop stays at
mid-d7 for now.

Closed: L4 rim. 9.09 mm was larger than Fig. 1 (about 7.7 mm at the axial scale) and the manual section (about 8.3 mm). The
figure pass below sets 8.3 mm on both faces.

## 2026-11-01 — Semi-diameter pass against the patent figure

### Source and scale

Figure: `patents/JPS50132921A.pdf`, publication page (4), Fig. 1, the sole example, 300 dpi native raster. The drawing is hand
made with clean lines. Its axis tilts 0.56° on the page, and all readings are in the tilted frame.

| Direction | Evidence | Scale |
|---|---|---|
| Along the axis | Fit to 12 vertex positions, largest residual 5.5 px (0.33 mm); spans r1–r7 16.37, r7–r13 16.99 | 16.585 px/mm |
| Across the axis | Exact sag fits with that axial scale: r1 15.28, r2 15.58, r4 15.74, r11 14.98, r6 14.74; sag-weighted median 15.28 of 12 arcs, scatter 0.9 | 15.3 ± 0.4 px/mm |

So the figure is about 8 % short across the axis, or its sags are about 17 % deep. Heights use 15.3 px/mm. Three checks support
it. L1's corner is at x = 125 and the model at 13.0 mm puts it at 124.1, while 12.06 mm (the axial scale) puts it at 116.5. L1's
rear land sits 4.10 ± 0.12 mm behind the r2 vertex, which is r2's sag at 10.3 mm, while the axial scale reads that cap at 9.7 mm.
L4's 127 px is 7.66 mm at the axial scale, below the on-axis ray at r6 (7.72 mm at the iris rim). The stop ticks open to
±126.5 px, about L4's height and well outside the 6.815 mm stop, so they are not a scale reference.

### Rims

| Surfaces | Before | Fig. 1 half height | Fig. 1 at 15.3 px/mm | Manual section | After | Evidence |
|---|---|---|---|---|---|---|
| r1 | 11.82 | 200 px | 13.07 | 14.3 | 13.0 | Height, corner position and the 32° fan end |
| r2 | 11.82 | 160.5 px cap, 200 px land | 10.49 cap, 13.07 land | 10.6 cap | 10.4, `rimExtensionSd` 13 | Cap height and land depth; the land is drawn in both sources |
| r3–r5 | 10.10 | 158 px | 10.33 | 10.5 | 10.10 retained | 2 % difference, noise |
| r6, r7 | 9.09 | 127 px | 8.30 | 8.35 | 8.3 | Square-cut, one height |
| r8, r9 | 7.57 | 110 px | 7.19 | 7.36 | 7.2 | Keeps the L4 to L5 step, 1.1 mm as drawn |
| r10, r11 | 8.60 | 122.5 px | 8.01 | 7.86 | 8.0 | Square-cut, one height |
| r12, r13 | 9.39 | 146 px | 9.54 | 9.08 | 9.39 retained | 2 % difference, noise |

Readings are good to about 2 px (0.13 mm) before the scale uncertainty. L1 is the one stepped element: r2's curve ends on a flat
rear land, as `rimExtensionSd` draws it. The land clears r3's rim by 0.89 mm against about 0.7 mm drawn. L5 moved 5 %, inside the
noise band, because with L4 at 8.3 mm the stored 7.57 mm left the L4 to L5 step at two thirds of its drawn size.

The manual section's column uses its overall vertex scale of 6.11 px/mm. That scale is not uniform: it runs 8.1 px/mm across L1
and 6.1 px/mm over the whole lens, so the section checks order and proportion only. It has the same step order as Fig. 1 and the
final rims, L1 > L2/L3 > L7 > L4 > L6 > L5. Against the L2/L3 rim the two sources read L4 0.80 and 0.80, L5 0.70 and 0.70, L6 0.78
and 0.75, the r2 cap 1.02 and 1.02. They disagree at L1 (1.27 in Fig. 1, 1.37 in the section) and L7 (0.92, 0.87). Fig. 1 governs
both.

### Lateral fans

Fig. 2's upper plot ends its fans short of the full pupil: 26° at −0.61 and +0.66, 32° at −0.61 and +0.56. The model's aberration
sign puts the plot's positive side on the rays that are high at L1. Measured from the chief ray at the entrance pupil, the end at
32° needs r1 12.8 mm and r2 10.55 mm, in line with the figure on both surfaces and well above the old 11.82 mm on r1. The model
now ends that side at 0.51, set by r2, against 0.35 before. On the other side the plot's −0.61 falls inside r13's limit of 0.69,
and at 26° both ends fall inside the traced range (−0.77 to +0.82). Those are not rim limits, so nothing moved for them. The two
−0.61 ends match closely enough that the plot may stop at a chosen pupil height.

### Clearance

Heights in mm, wide open. No surface is clipped on axis at infinity or at 0.3 m. The aperture audit reports the stated f-number
within 3 %, and the corner chief ray is clear at infinity (32°) and at 0.3 m (29.39°).

| Surface | Rim | Axial, EP 6.25 mm | Axial, iris rim, infinity | Axial, iris rim, 0.3 m | Chief, infinity | Chief, 0.3 m |
|---|---|---|---|---|---|---|
| r1 | 13.0 | 6.25 | 6.08 | 5.61 | 10.09 | 9.29 |
| r2 | 10.4 | 5.99 | 5.83 | 5.43 | 8.34 | 7.75 |
| r5 | 10.10 | 7.67 | 7.47 | 7.29 | 4.21 | 3.79 |
| r6 | 8.3 | 7.95 | 7.72 | 7.60 | 3.43 | 3.10 |
| r9 | 7.2 | 6.68 | 6.48 | 6.56 | 2.31 | 2.07 |
| r11 | 8.0 | 7.18 | 6.97 | 7.11 | 4.98 | 4.47 |
| r13 | 9.39 | 7.03 | 6.82 | 7.02 | 6.15 | 5.48 |

Engine transmission wide open at infinity, in percent:

| Field | 8.7° | 14.5° | 17.5° | 20.4° | 23.3° | 26.2° | 29.1° | 32.0° |
|---|---|---|---|---|---|---|---|---|
| Before | 100.0 | 100.0 | 99.3 | 96.1 | 86.2 | 73.3 | 58.6 | 42.4 |
| After | 99.2 | 94.3 | 89.4 | 84.6 | 78.8 | 70.4 | 60.3 | 48.1 |

The corner gains 5.7 points. r1 alone is worth +8.0, and the rear cuts give part of it back. Mid-field loses up to 11.5 points, at
20.4°. Restoring one rim at a time in the final set returns 6.7 points there for L4 (9.09 mm), 3.2 for L6 (8.60 mm) and none for
L5 (7.57 mm); restoring all three gives 96.7 at 20.4° and 50.2 at the corner. The cuts stay because L4 and L6 rest on the figure,
the section and their sags together. Side vignetting at 32° is now 6–38 % at r8–r13. It stays as real vignetting. This curve is
an infinity result; at 0.3 m only the meridional side figures were read (5–29 % at r8–r13).

Engine values: EFL 35.001 mm, F/2.8, half-field 32°, stop radius 6.815 mm, all as before. The traced field limit rose from 32.74°
to 32.88°, set by r2. Surface audit OK, image circle OK, field coverage 100 % (21.65 mm). No rim cuts. `checks.gapSagFrac` stays
at its default.

The overlay of the model on Fig. 1 at 16.585 and 15.3 px/mm matches every element outline to about the line width, apart from
the vertex residuals above. The local page was read at infinity and at closest focus, and its section shows the same outline.

### Limits

The vertical scale rests on hand-drawn arcs, so absolute heights carry about ±3 %. The ratios between elements are firmer, and
the two retained elements sit within that band. The stop position is unchanged and stays open above.
