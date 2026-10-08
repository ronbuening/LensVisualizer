# Audit Log — SMC PENTAX-A ZOOM 35-70mm f/4

Patent: US 4,812,022, Example 3, Figure 9 and Table 3

## 2026-08-14 — Patent-figure, metadata, and glass review

### Semi-diameters

| Element / surfaces | Before | After | Evidence |
|---|---:|---:|---|
| L7, 13–14 | 10.8 mm | 7.2 mm | A 300 dpi Figure 9 measurement makes the final meniscus distinctly smaller than L4–L6. The former value instead made it the rear group's largest element. |

The remaining profiles follow Figure 9 within the drawing tolerance. Leader curves around the section were excluded from the measurement.

### Labels and glass

- Corrected the displayed name to the A-series catalog styling, `SMC PENTAX-A ZOOM`, removing the duplicated leading maker name.
- Normalized the patent assignee spelling to the repository's existing form.
- Identified OHARA S-LAM2 as a source-precision catalog equivalent for L4's patent 744447 coordinate. This supplies verified Sellmeier coverage without asserting the production supplier.
- All seven elements now have coordinate-compatible Sellmeier coverage.

### Motion

- Rechecked the two source endpoints. The modeled order is 36.0 mm wide to 68.5 mm tele: the front/rear-group gap contracts from 41.111 to 3.821 mm while the solved infinity back focus increases. Focus pairs remain identical because Example 3 publishes no close-focus cam law.

## 2026-10-07 — Zoom iris and station f-numbers against the patent

| Field | Before | After | Source |
|---|---|---|---|
| `zoomApertureModel` | `"fixed-iris"` | removed; the default per-station iris applies | The patent prints no stop diameter and never says the opening is constant. It prints F number 1:4.1 for F = 36-68.5 (Example 3 header, col. 5, PDF p. 10) and heads the Example 3 plots 1:4.1 at minimum, medium and maximum focal length (Fig. 10, sheet 5, PDF p. 6; Figs. 11 and 12, sheet 6, PDF p. 7; figure-to-state mapping at col. 1 lines 65-68, PDF p. 8). With the stop on the rear group, f/4.1 needs a 7.7842 mm radius at 36 mm and 10.3442 mm at 68.5 mm, so one radius contradicts the printed values. |
| `nominalFno` | `[4.1, 5.394215]` | `4.1` | Example 3 header, col. 5, PDF p. 10: F number 1:4.1 for F = 36-68.5. Fig. 12 (maximum focal length), sheet 6, PDF p. 7, headed 1:4.1. The former tele value was the f-number of the wide-calibrated radius, not a patent number. |

Traced result of the two edits, at infinity focus and wide open:

| Station | Wide-open iris radius before | After | Stated → traced before | After | Limiter after |
|---|---:|---:|---|---|---|
| 36 mm | 7.7842 mm | 7.7842 mm | f/4.10 → f/4.10 | f/4.10 → f/4.10 | iris (STO) |
| 68.5 mm | 7.7842 mm | 10.3442 mm | f/5.39 → f/5.41 | f/4.10 → f/4.61 (+12.4 %) | rim, surface 7 (L4 front, sd 9.5 mm) |

Confirmed unchanged:

- Example identity. All 14 radii, 13 thicknesses and 7 nd/νd pairs of Example 3 (col. 5, PDF p. 10) equal the file, from r1 = 93.720 through r14 = -28.475. Examples 1 and 2 begin r1 = 99.624 and 103.259 and do not match.
- Focal lengths. The header prints F = 36-68.5; the prescription computes 35.9998 and 68.5002 mm.
- Gaps. d6 = 41.111-3.821 is split around the stop as 39.2005 + 1.9105 and 1.9105 + 1.9105 mm. The back focus values 42.3869 and 62.0194 mm are computed, not printed.
- Stop position. The patent places the aperture ahead of the rear group and movable with it (col. 2 lines 13-16; claim 1, col. 6 lines 19-21) and prints no coordinate. The 1.9105 mm offset ahead of r7 stays the file's inference. The authored STO semi-diameter 7.752338441 mm, the paraxial f/4.1 radius at 36 mm, is untouched.
- `apertureDesign` 4.1 and `fstopSeries` starting at 4.1 already agree with the patent's 1:4.1. `apertureMarketing` 4 is the catalog value.
- No semi-diameter was changed.

Left open:

- The 68.5 mm station is rim-limited. The f/4.1 marginal ray there reaches 10.762 mm at surface 7, 10.681 at 8, 10.201 at 9, 9.698 at 10, 9.612 at 11, 7.731 at 12, 7.714 at 13 and 7.755 mm at 14. It exceeds the authored semi-diameters at surfaces 7, 8, 9, 11, 13 and 14 (9.5, 9.5, 9.8, 9.4, 7.2, 7.2 mm). Surface 7 is the first rim it meets, and the largest ray that clears every rim gives f/4.61.
- The rear-group semi-diameters are inferred, not printed, and sit below the drawing. Fig. 9 (sheet 5, PDF p. 6) measured at 400 dpi, with 20.3 px/mm taken from r7-r14 = 23.25 mm, draws L4 at about 11.3 mm, L5 at about 10.8 mm, L6 at about 10.2 mm (outer rim) and L7 at about 8.2 mm, against 9.5, 9.8, 9.4 and 7.2 mm in the file. The patent calls Fig. 9 a schematic view (col. 1 lines 55-58, PDF p. 8), so these are approximate. Re-deriving L4-L7 from the figure is a semi-diameter audit task and was not part of this pass. The 2026-08-14 statement that the remaining profiles follow Figure 9 within the drawing tolerance is not met by L4, authored 16 % under the drawing.
- The lowest ray of the default 0.60-field fan is cut at L7 at both endpoints (surface 14 at 36 mm, surface 13 at 68.5 mm). The data-file header states this; it follows from the 7.2 mm L7 value and is part of the same semi-diameter question.
- The note's edge-thickness, rim-angle and cross-gap figures depend only on the unchanged semi-diameters and were not re-derived.
- The note's 0.586 mm wide-field clip at surface 3 reproduces for the 32.25° ray through the edge of the authored 7.752338441 mm stop radius at 36 mm. Through the traced 7.7842 mm iris, which this pass leaves as it was at 36 mm, the same ray is 0.601 mm over. The note keeps the 0.586 mm figure.
