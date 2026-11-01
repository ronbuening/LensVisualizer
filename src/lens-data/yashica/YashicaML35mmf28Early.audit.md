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

Open: L4 rim 9.09 mm is larger than Fig. 1 (about 7.7 mm) and the manual section (about 8.3 mm). Left for the figure pass.
