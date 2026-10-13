# CanonEFS18135mmf3556ISSTM patent audit

## 2026-09-06 UTC

- Source: local `patents/US20130088622A1.pdf`, Example 4, Fig. 13, PDF page 23. Original PDF retained unchanged and untracked.
- Reviewed the exact embodiment at 600 dpi, distinguishing optical rims from brackets, arrows, and mechanical outlines.

### Semi-diameters

Retained published effective-diameter halves, calibrated iris, and S9 11.2826 mm clearance trim. The rotated figure was inspected at 600 dpi. Two automated crops are contaminated by unit brackets and IS arrows and truncate the front height; their extreme ratios are rejected. Manual inspection agrees with the wide front group and narrow rear train; no unsupported aperture substitution was made.

### Glass and identity

Strict catalog coverage: 16/16 before, 16/16 after. All patent nd/vd coordinates are retained. Catalog matches describe spectral proxies, not production supplier identities. No new catalog entry was needed.

Normalized assignee metadata to the catalog spelling `Canon Inc.` where needed. Display names follow the data specification, including hyphenated ranges and parenthetical product-case camera names.

## 2026-09-06 UTC — screenshot follow-up

Rechecked Fig. 13 optical rims, preserving the published effective-diameter halves. Replaced artificial C-series callouts with the source L5B / IS subgroup label and shortened the parent L5 label. E2 now carries an inferred UD/APD color tag supported by the 1.49700/81.5 coordinate and Canon's one-UD production count; no supplier identity is asserted.

The Fig. 13 printed L3/L4 labels appear transposed relative to ¶0088 and the numerical table: those define L3 positive before L4 negative. Retained the numerical order and the objectward focus arrow adjacent to the negative singlet; no positive/negative unit swap was made. L4's finite-focus gaps remain explicitly reconstructed. Wide→mid L2 moves 0.70 mm imageward before reversing objectward; all other units move objectward. L3 and L5 share zoom travel.

Surface/image-circle audits and the source-station, dispersion, and render-clearance regressions validate this follow-up; final repository gates are recorded in the batch record.

## 2026-10-07 — Patent-audit queue: printed stop diameter

Source: local `patents/US20130088622A1.pdf`, Numerical Example 4, ¶0099, printed p. 9 (PDF p. 39), read from 300 and 400 dpi renders of the page.

| Field | Before | After | Source |
|---|---|---|---|
| `STO` sd | 7.123822482626368 (paraxial wide-state f/3.59 pupil) | 7.26 | Surface Data, row 20(Stop): r ∞, d 3.30, effective diameter 14.52 |
| `STO` inline comment | Radius inferred from the wide-state F/3.59 entrance pupil | One-half of the printed 14.52 mm effective diameter | Same row |
| Data-file header, semi-diameter block | STO listed as an exception; 14.52 mm said not to reproduce the published F-numbers | Stop included among the halved diameters; a 7.26 mm iris by real marginal ray gives F/3.591 / 4.879 / 5.973 | Same row; Data table, F-number 3.59 / 4.88 / 5.97 |
| Note, Optical Architecture, stop paragraph | 14.52 mm "does not reproduce the published f-numbers"; authored radius 7.123822 mm | Authored radius 7.26 mm; real-ray f/3.591 / 4.879 / 5.973, paraxial f/3.52 / 4.78 / 5.86; patent silent on stop constancy | Same row and table; ¶0038, printed p. 3 (PDF p. 33) |
| Note, verification table, stop F/# column | 3.590000 / 4.873061 / 5.975224 (paraxial, 7.1238 mm radius) | 3.5908 / 4.8791 / 5.9732 (real marginal ray, 7.26 mm radius) | Data table, F-number 3.59 / 4.88 / 5.97 |
| Note, sentence after the verification table | Iris inferred at the wide state, within 0.007 f-number of the published middle and telephoto values | 7.26 mm radius (half the printed diameter) within 0.004 f-number at every station; fixed viewer iris 7.2618 mm gives f/3.590 / 4.878 / 5.972 | Same table |
| Note, stop position (Optical Architecture; E10) | Stop "between L4 and L5A"; E10 "immediately behind the aperture stop" | Stop inside L5A, 0.83 mm behind E10 and 3.30 mm ahead of C3; E10 immediately ahead of the stop | Surface Data rows 17 (variable), 18 (30.381 / 3.40), 19 (−41.483 / 0.83), 20(Stop) (∞ / 3.30); Fig. 13 (sheet 22, PDF p. 23) |

- The printed F-numbers 3.59 / 4.88 / 5.97 need real-ray iris radii of 7.2618 / 7.2586 / 7.2641 mm (spread 0.08 %); one radius between 7.2580 and 7.2660 mm fits all three within print rounding, and half the printed diameter, 7.26 mm, lies in that window. The paraxial radii are 7.1238 / 7.1137 / 7.1301 mm and no single one fits, so the earlier mismatch was a paraxial-pupil reading of a real-ray table.
- The authored `STO` sd does not size the beam. The wide-open iris is 7.2618 mm, traced from `nominalFno[0]`, with either authored value; every computed numeric field of the built lens is identical before and after, and only the echoed input row differs. The aperture audit traces f/3.59 / 4.88 / 5.97 as stated with the iris as the limiter at all three stations, and the axial marginal ray through a 7.26 mm stop stays inside every other authored semi-diameter (closest: surface 19 at 7.439 of 7.475 mm, wide station).
- Confirmed unchanged against the page: all 28 active surface rows (r, d, nd, νd), every effective-diameter half other than the documented surface 9 trim, the asphere coefficients of surface 27, the five variable gaps and BF at the three stations, focal lengths 18.60 / 50.99 / 130.48 and `nominalFno` 3.59 / 4.88 / 5.97. Computed focal lengths stay 18.5993 / 51.0267 / 130.5464 mm. `zoomApertureModel: "fixed-iris"` is kept.
- ¶0038 only defines SP as the member limiting the full-aperture F-number light flux; no sentence of the patent says whether the stop diameter is held during zooming, so the constant opening rests on the printed numbers.
- Left open: the note's ray-clearance sentence (smallest clearance 0.478560 mm at surface 14, wide/infinity) names no ray set and was not re-derived. The stated axial marginal ray at the wide station passes surface 19 at 7.4405 mm of its 7.475 mm semi-diameter.
