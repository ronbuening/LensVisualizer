# Audit Log — TAMRON SP 70-300mm f/4-5.6 Di VC USD

Patent: US 8,228,605 B2, Example 2

## 2026-08-10 — Patent-figure semi-diameter and glass audit

- Reviewed Figure 12 on PDF page 13 at 300 dpi. The front-group, variator, VC, and rear-group
  envelopes agree with the modeled taper within the drawing's measurement uncertainty; no SD
  change had sufficiently strong figure evidence.
- Added the official HOYA MC-FCD1-M20 coefficient row for the `497815` class used by L110. SUMITA
  K-PFK80 remains the exact-coordinate cross-check; neither name is treated as production-supplier
  evidence. The prescription is now 17/17 strict Sellmeier-covered.

### Rendered-diagram follow-up

- Compared the site rendering with Figure 12. No additional SD adjustment clears the required
  figure-evidence threshold; the modeled group envelopes remain consistent with the patent.
- Restored the patent's 101-118 element numbering (with diaphragm position 108 omitted) and the
  nested rear-group identifiers 141, 142, and 143. This removes duplicated group prose and reduces
  annotation collisions without changing optical geometry.
- Rechecked every medium: all 17 remain coefficient-backed. Coordinate-class labels stay
  supplier-neutral where the patent does not identify a production glass maker.

## 2026-10-08 — Six clipping rims raised to the stated on-axis ray; surfaces 7 and 8 kept

Rule (maintainer, 2026-10-08): an inferred rim that clips the on-axis beam of the source's printed
f-number is corrected by the change that alters shape and comparative size the least, so only the
surfaces that clip move, each only to the height the stated on-axis ray reaches there at the station
that needs most (rounded up at the file's precision), with the patent figure as a check and not as
the source of the value.

Result: partly raised. Six of the eight clipping surfaces moved. Surfaces 7 and 8 keep 12.24 mm
because the value the ray needs there fails the cross-gap validation rule.

| Field | Before | After | Source |
|---|---:|---:|---|
| Surface 6 `sd` (L104 front) | 12.24 | 12.7 | Stated f/5.8526 on-axis ray reaches 12.695 mm at 292 mm |
| Surface 9 `sd` (L105/L106 cemented face) | 12.24 | 12.9 | Stated ray reaches 12.896 mm at 292 mm |
| Surface 10 `sd` (L106 rear) | 12.24 | 13.06 | Stated ray reaches 13.055 mm at 292 mm |
| Surface 12 `sd` (L107 rear) | 13.4 | 13.5 | Stated ray reaches 13.452 mm at 292 mm |
| Surface 14 `sd` (L109 front) | 14.5 | 14.6 | Stated ray reaches 14.554 mm at 292 mm |
| Surface 15 `sd` (L109 rear) | 14.5 | 14.6 | Stated ray reaches 14.581 mm at 292 mm |
| Surface 7 `sd` (L104 rear) | 12.24 | 12.24 (kept) | Stated ray reaches 12.424 mm at 292 mm; 12.43 fails the 7→8 gap rule |
| Surface 8 `sd` (L105 front) | 12.24 | 12.24 (kept) | Stated ray reaches 12.427 mm at 292 mm; 12.43 fails the 7→8 gap rule |

The 292 mm station needs most on every listed surface; at 71.75 mm and 150 mm the stated ray stays
below the old values everywhere except surface 15 at 150 mm (14.516 mm).

### Surfaces 7 and 8 kept at 12.24 mm

- With 12.43 mm on both faces the validator rejects the file at every zoom position: air gap 7→8,
  combined sag 2.81 mm against an allowed 2.751 mm of the 3.057 mm gap (0.919078 of the gap against
  the default `gapSagFrac` of 0.90). This was established with the values substituted in memory, so
  the file was never saved in a failing state.
- The two concave faces meet at about 12.96 mm. At 12.43 mm they keep 0.247 mm of rim air; at
  12.24 mm, 0.334 mm (0.890846 of the gap).
- The largest equal value that passes the default rule is 12.30 mm (0.899712 of the gap). It still
  clips (f/5.92 at 292 mm, +1.1 %) and is neither the stored value nor the ray height, so it was
  not used.
- Only semi-diameters were in scope; `gapSagFrac` was not touched. With a per-lens `gapSagFrac` of
  0.92 and 12.43 mm on surfaces 7 and 8, a substituted build validates and traces f/5.87 at 292 mm
  with the iris as limiter (+0.4 %).

### Traced f-number and limiter

| Station | Stated | Before | After |
|---|---|---|---|
| 71.75 mm | f/4.12 | f/4.12, iris (−0.0 %) | f/4.12, iris (−0.0 %) |
| 150 mm | f/4.83 | f/4.84, iris (+0.2 %) | f/4.84, iris (+0.2 %) |
| 292 mm | f/5.85 | f/6.25, rim of surface 10 (+6.7 %) | f/5.94, rim of surface 8 (+1.6 %) |

- The raise listing named surfaces 6, 7, 8, 9, 10, 12, 14 and 15 before the edit (largest raise
  6.7 %) and names surfaces 7 and 8 after it (12.24 → 12.43, 1.6 %).
- The fixed iris is 14.0201 mm and alone gives f/4.122 / 4.838 / 5.875, so +0.4 % is the least the
  292 mm station can show under this iris model.

### Figure check

- Fig. 12 (Embodiment 2, wide state), PDF page 13, rendered at 600 dpi (5120 × 6600 px). The axis
  runs vertically at x = 2770 px with the object side at the bottom.
- Scale from the printed prescription: front vertex of 101 (y 5485.5) to rear vertex of 118
  (y 2037.5) is 3448 px for 139.5822 mm, 24.70 px/mm. To the image plane (y 858.5) it is 4627 px
  for 187.1191 mm, 24.73 px/mm; surface 6 to surface 12 is 295 px for 12.1377 mm, 24.3 px/mm.
- Drawn half-heights are outer ink edges averaged over both sides of the axis; the outline is 12 to
  14 px wide, so line-centre values are about 0.3 mm lower. The figure draws the stop opening 9 %
  wider than the modeled iris, so a second column rescales to that opening (26.93 px/mm).

| Element | Drawn (px) | Drawn (mm, axial scale) | Drawn (mm, stop scale) | Stated ray needs | `sd` now |
|---|---:|---:|---:|---|---|
| L104 | 348 | 14.1 | 12.9 | 12.70 front, 12.43 rear | 12.7 / 12.24 |
| L105 + L106 | 389.5 | 15.8 | 14.5 | 12.43 / 12.90 / 13.06 | 12.24 / 12.9 / 13.06 |
| L107 | 369.5 | 15.0 | 13.7 | 13.5 rear (front clear) | 13.4 / 13.5 |
| L109 | 401 | 16.2 | 14.9 | 14.6 both faces | 14.6 / 14.6 |
| L110 + L111 (not raised) | 419 | 17.0 | 15.6 | clear | 14.5 |
| Stop opening (inner tick ends) | 377.5 | 15.3 | 14.0 | — | iris 14.0201 |

- No element is drawn below the height the stated ray needs. On the axial scale each raised element
  is drawn 11–21 % above its new value; on the stop scale, 1.6–11 % above. No figure conflict, and
  no raise exceeds 15 %.

### Render comparison

- The rendered section at 71.75 mm, the state Fig. 12 draws, was compared before and after the edit.
- Element order and grouping agree with the figure: 101; 102 + 103; 104; 105 + 106; 107; stop; 109;
  110 + 111; 112 + 113; 114; 115 + 116; 117; 118. Group I is tallest, group III and subgroup 141
  follow, group II sits below group III, and the VC doublet and subgroup 143 are smallest, as
  drawn. L104 is the shortest element of group II in both.
- Departures from the drawing:
  - L107 (13.4 / 13.5) is taller than the L105 + L106 doublet (12.24 to 13.06). The figure draws the
    doublet about 5 % taller than L107 (389.5 against 369.5 px). This was present before the edit
    (13.4 against 12.24); the step between the facing rims of surfaces 10 and 11 fell from 1.16 mm
    to 0.34 mm.
  - L104 and L105 render with slanted rims because their two faces now differ. The figure draws
    both with straight cylindrical rims.
  - L109 renders 0.1 mm taller than L110 + L111. The figure draws it about 4 % shorter (401 against
    419 px).
  - On the axial scale the figure draws every element of groups II and III larger than modeled:
    11–21 % for the raised elements and 17 % for L110 + L111.

### Where comparative size changed

- L104: front 12.7, rear 12.24 (were equal). The front face is 0.46 mm taller than the rear and
  0.46 mm taller than the facing front of L105 (were equal); the figure draws L104 about 11 %
  shorter than L105.
- L105: front 12.24, cemented face 12.9 (were equal), a 0.66 mm step.
- L106: front 12.9, rear 13.06 (were equal), a 0.16 mm step. The doublet's tallest rim rose from
  12.24 to 13.06 mm.
- L107: front 13.4, rear 13.5 (were equal), a 0.1 mm step.
- L109 (14.6) overtakes L110 + L111 (14.5) by 0.1 mm; they were equal, and the figure draws L109
  the smaller. The stated ray reaches 14.554 / 14.581 mm at L109 and 14.121 mm at surface 16, so
  the order follows the beam; the file's one-decimal precision rounds the L109 heights up to 14.6.
- By tallest rim, L104 and the doublet were equal at 12.24 mm; L104 (12.7) now sits below the
  doublet (13.06), the order Fig. 12 draws. Both are below L107 (13.5) as before, and group II is
  below group III as before (13.5 against 14.5 to 14.6).

### Confirmed unchanged

- R, d, nd, glass labels, variable gaps, the STO row (13.920345702691526), `nominalFno`,
  `zoomApertureModel`, and the semi-diameters of surfaces 1–5, 7, 8, 11 and 16–30.
- The file builds and validates: EFL 71.7499 / 150.0016 / 292.0140 mm, engine iris 14.0201 mm.
- Field coverage is 100 % at all three stations (21.65 of 21.65 mm at 17.1°, 8.0° and 4.1°), and
  the image-circle floor lists no undersized surface.
- Smallest edge thickness 0.264587 mm at L115, limiting cross-gap 7→8 at 0.890846 of the gap, and
  largest rim angle 38.2975° at surface 29. Gap 10→11 intrusion rose from 0.740115 to 0.845430 of
  its 1.3243 mm (rim air 0.344 → 0.205 mm), inside the 0.90 rule.

### Prose

- The data-file header's stop and semi-diameter blocks and the note's verification paragraphs now
  state the paraxial stop interval (13.9147–13.9260 mm), the 14.0201 mm fixed iris, the traced
  f-numbers and the 292 mm rim limit. The header box borders are aligned at 81 columns.
- The note's "minimum clearance among the default modeled on-axis/off-axis ray fans is 0.562871 mm"
  was removed. It depends on the semi-diameters, and the audit tools do not reproduce the procedure
  that produced it.

### Left open

- Surfaces 7 and 8 are 0.18 to 0.19 mm below the stated ray, so the 292 mm station is still
  rim-limited (+1.6 %). That is inside the census's default 3 % threshold, so the default census
  no longer lists this lens while the raise listing still does. Raising the pair to 12.43 mm needs
  a maintainer decision on a per-lens `gapSagFrac` of at least 0.9191 (other catalog files carry
  values from 0.91 to 1.0).
- L107 stays taller than the L105 + L106 doublet, opposite to Fig. 12. Neither surface 11 nor the
  doublet clips beyond the values above, so nothing moved on the figure's account.
- The 2026-08-10 entry found no figure evidence strong enough to change a semi-diameter. The raises
  in this entry come from the ray trace; the figure only confirms that none is drawn smaller.
