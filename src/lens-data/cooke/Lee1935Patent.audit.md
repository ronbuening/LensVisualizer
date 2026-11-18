# Audit

- Table and drawing of the patent transcribed and visually checked; no optical constants adjusted.
- Independent paraxial matrix, exact axial Snell trace and 1,001-point adjacent-surface sag sampling passed. Minimum sampled separation 0.053 mm as delivered. No gap override.
- Type check of the data file passed. As delivered, the on-axis beam passed through the central 90 % of the pupil; outer and off-axis clipping was recorded.
- Publication number and radius fingerprint screened against the catalog and earlier historical models for duplicates. These sweeps are duplicate screens, not proof of a production relationship.
- Full application regression and viewer checks were not run by the author.

## 2026-11-17 — Deployment validation

**Checked against the page images.** An independent re-read of US 2,019,985 at 400 dpi: all 12 radii, 7 thicknesses, 4 separations, 7 nD and 7 V values, the printed Plus / Minus signs, the ×25.4 inch conversion on every length, and the drawing (seven elements in five groups, two cemented pairs concave to each other, split rear collective member). No mismatch. Front page: Horace William Lee, assignor to Kapella Limited; filed December 26, 1930; granted November 5, 1935; one numerical example.

**Verdict.** Valid as a hidden patent reference. No production lens is documented for this design: Cooke's history pages mention Lee's f/1.4 Ultra Speed Panchro (US 1,779,257) and a 58 mm f/1.3 Super Speed Panchro of 1930, but nothing found ties either to this seven-element form, and no construction diagram was found.

**Focal length.** The printed table computes to 26.31 mm against the patent's nominal one inch (25.4 mm), +3.6 %. A scan of 393 single-value variants (digit, sign, transposition in one radius or thickness) found no change supported by the page; the nearest (1.12 → 1.02, 0.523 → 0.503) contradict clearly printed digits. Radii are printed to one to three figures, so the difference is taken as table rounding. Printed values kept; no rescaling. On-axis spherical aberration as printed: +1.04 / +0.33 / +0.09 / −0.005 mm at pupil 1 / 0.85 / 0.7 / 0.5.

**Changes.**

- `maker`: "Kapella" → "Cooke" (house maker for Kapella-assigned Taylor-Hobson patents).
- `source.patentNumber`: "US 2,019,985" → "US 2,019,985 A".
- Rims, surfaces 3 and 4: 8 → 8.24. The f/1.4 on-axis beam needs 8.23; L2 has zero edge thickness at about 8.24, so 8.3 is not possible.
- Rim, surface 5: 5.65 → 5.7. The beam needs 6.01, but the rim of this concave face reaches the iris plane at 5.70 (and would meet the facing rim of surface 6 at about 5.9), so it stops at the cap.
- Rim, surface 6: 5.65 → 6.08 (on-axis beam).
- `cemented` tags "D1" (L2, L3) and "D2" (L4, L5) and matching `doublets` entries added.
- L1 `type`: "Meniscus" → "Positive Meniscus"; element `focalLengthMm` and plain optical `role` strings added.
- Float noise rounded (3.8099999999999996 → 3.81, 154.93999999999997 → 154.94, 4.444999999999999 → 4.445, −8.889999999999999 → −8.89, 1.5239999999999998 → 1.524, design focal length → 26.31, last gap 15.424884074336912 → 15.4249); `closeFocusM` written as 1e15.
- `focus.description` rewritten in plain words (it had run-together numbers and a "central 90 %" statement that no longer applies).
- Header comment added; keys unquoted; analysis rewritten to the house section layout.

**After the changes.** Focal length 26.3105 mm, f/1.4 nominal (iris semi-diameter 6.09 mm), paraxial back focus 15.4249 mm (equal to the last gap), length 38.92 mm. Surface audit: OK, no validation errors. Aperture audit: one remaining limit, surface 5 at 5.7 against 6.1 needed for f/1.4 (7 %), which is the geometric cap described above; the real on-axis beam passes cleanly at about f/1.5 and is trimmed by 2 % on one side at f/1.47. Image-circle and field-coverage audits do not run: the patent states no image format or field and the file is hidden.

**Open:**

- Name, key, file name, subtitle and specs wording ("PATENT ONLY; RETAIL IDENTITY UNPROVED") for the cleanup pass.
- Glass labels: none given; the patent prints nD and V only.
- Rims against the drawing: all rims are inferred and were not measured from the figure; the drawing shows a bevel on the front cemented pair facing the iris that the model does not have. Whether to keep f/1.4 as the stated aperture or state f/1.5, and whether the inferred iris should move to free surface 5, is for the semi-diameter pass.
- No field of view or image format is set.
