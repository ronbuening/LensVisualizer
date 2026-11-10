# Audit Log - Hasselblad XCD 2,8/65

Patent: US 2020/0319427 A1, Example 1 / Table 1

## 2026-05-20 - Catalog-mismatch queue audit

### Patent evidence

- Local patent file checked: `patents/US20200319427A1.pdf`.
- Example 1 table rows confirmed from the local text extraction:
  - S8 / L21: nd = 1.59551, vd = 39.24.
  - S11 / L23: nd = 1.53775, vd = 74.70.
  - S13 / L31: nd = 1.89190, vd = 37.13.
  - S14 / L32: nd = 1.69895, vd = 30.13.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L21 / S8 | `S-TIM3 (OHARA)` | `S-TIM8 (OHARA)` | Exact nd/vd catalog match. |
| L23 / S11 | `S-FPM2 (OHARA)` | `S-FPM3 (OHARA)` | Exact nd/vd catalog match. |
| L31 / S13 | `S-LAH79 (OHARA)` | `S-LAH92 (OHARA)` | Exact nd/vd catalog match. |
| L32 / S14 | `S-TIM22 (OHARA)` | `S-TIM35 (OHARA)` | Exact nd/vd catalog match. |

### Catalog-search disposition

- Checked public OHARA catalog pages and existing coefficient-backed catalog entries.
- No new catalog entries were required.

### Analysis sync

- Updated the element descriptions, chromatic strategy, and glass-selection table.

## 2026-06-24 - APD, high-index, and SD audit

- Rechecked `patents/US20200319427A1.pdf`, Example 1 / Figure 1, against the current data file.
- Confirmed L22 `S-FPL51` and L23 `S-FPM3` are already marked as patent-backed APD; both rows are the patent-marked anomalous-dispersion glasses.
- Confirmed the high-index elements remain L12 `S-LAH55V` and L31 `S-LAH92` (nd >= 1.8), neither of which is an additional APD element.
- Rendered and reviewed the patent drawing. The current SDs match the ray-bundle layout: compact front cemented groups, small G2 near the stop, and the largest diameters in the rear group. No SD edits were made.
- Verification: `npm run generate:glass-reports`, `npm run typecheck`, `npm run format:check`, `npm run lint`, `npm run test`, and `git diff --check` passed.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Read Example 1 Fig. 2 (PDF page 3, Sheet 2) at 160 dpi: S17 d = 20.73; S18 COVER 0.80 mm nd 1.53741 νd 61.81; S19
  COVER 1.00 mm nd 1.52312 νd 54.36; S20 flat with no distance printed (Di 55.9 ≈ the 56.04 mm image circle), so the
  plates are cemented and the image plane is on S20. The legacy fold 21.91 = 20.73 + 0.80/1.53741 + 1.00/1.52312
  already assumed that.
- S17 now stores the patent's 20.73 mm with two `rearPlates` (gapAfter 0 each). Neither plate has a catalog match
  (nearest BAK2/S-BAL12 and N-KF9/C12 fail the compatibility check), so `glass` is omitted and dispersion uses the
  Abbe estimate. Paraxial check against the previous data: EFL identical at all three focus states; defocus changes by
  0.0031 mm (rounding in the old 21.91 vs 21.907). Physical track grows by 0.62 mm.

## 2026-09-25 — MTF image-plane census

Local PDF `patents/US20200319427A1.pdf`, Example 1: visually inspected Fig. 1 (PDF p. 2), Fig. 2 prescription and Fig. 3 focus stations (p. 3). All 16 powered radii, stop, thicknesses/gaps and ten lens nd/νd pairs agree. No scale or aspheres. The infinity d12 is 1.00 mm (other stations 3.02 and 14.46).

The source explicitly lists S17 air gap 20.73 mm, S18 COVER 0.80 mm / 1.53741 / 61.81 and S19 COVER 1.00 mm / 1.52312 / 54.36, already represented by two touching rearPlates. S20 is the terminal row without a following distance; Fig. 1 places image plane 5 on the stack rear face. Keep the existing zero trailing gap; do not add the calculated defocus as invented air.

Independent trace: EFL 65.015871503 versus printed 65.02 mm, air BFL 22.139373529 versus rear reduced distance 20.73+0.8/1.53741+1/1.52312=21.906902751 mm. Runtime physical focus is 0.232470779 mm behind S20. No transcription discrepancy or single supported source misprint explains the image-distance discrepancy.

**Cause/action:** source image-plane inconsistency; retain all prescription/plate values, document the residual. Offset **+0.232471 → +0.232471 mm**; Section E row deleted. No changelog entry because numerical behavior is unchanged.

Validation: focused runtime/paraxial check; full corpus gates at the ten-lens checkpoint.

## 2026-11-03 — Image-plane consistency (structure)

Class E, approved by the owner over the 2026-09-25 "do not add the calculated defocus as invented air" note above.
Fig. 2 prints no distance after the cover-glass surface S20, and the model had put the image on S20. With the image
there, paraxial infinity focus lay 0.232471 mm behind it (25 depths at f/2.8), and the printed d12 rows focused at
2756 mm (printed 2400) and 402 mm (printed 400) from S1. A plane 0.232471 mm behind S20 makes all three printed rows
agree with one another.

| Field | Before | After | Justification |
| --- | --- | --- | --- |
| `rearPlates[1].gapAfterMm` | 0 | 0.232471 | Unprinted S20-to-image air; the printed rows focus on this plane |
| `gaps["12"]` kf1 (2400 mm) | 3.02 | 3.022850 | Re-solved for paraxial focus at the printed 2400 mm from S1 |
| `gaps["12"]` kf2 (400 mm) | 14.46 | 14.273641 | Re-solved for paraxial focus at the printed 400 mm from S1 |
| `gaps["12"]` kf0 (infinity) | 1.00 | 1.00 | In focus once the plane is placed |
| `focus.keyframes[1]` | 0.1758096778953822 | 0.202582 | closeFocusM / the 2400 mm row's object-to-image distance (0.505236 / 2.493985 m) |
| `focus.closeFocusM` | 0.5 | 0.5052 | Re-solved close row: 400 mm + 105.236 mm track |

- Residual: infinity +0.232471 → 0 mm. With the plane alone, the printed near rows focus at 2403.3 mm and 395.0 mm
  from S1; the d12 re-solve puts them at 2400.00 and 400.00 mm. Travel 13.46 → 13.273641 mm. EFL 65.015872 mm
  unchanged. Infinity track 91.730 → 91.962471 mm; close track 105.236112 mm.
- Close focus 0.5073 → 0.5052 m (label). Hasselblad's 0.5 m differs by 1.0 %, so no `catalog.closeFocusM.marketing`.
- Evidence: Fig. 2 and Fig. 3 (sheet 2, PDF p. 3) match the file; air BFL 22.139374 mm against the 21.906903 mm
  air-equivalent rear path. Sibling Example 2 (Fig. 8 and 9, sheet 8) prints the same unspaced S20; its printed rows
  (d12 1.00 / 3.02 / 14.00 at infinity / 2400 / 410 mm) agree only with an image plane 2.427 mm behind its S20
  (2398 / 407 mm). The census MTF best focus, +0.221 mm, sat beside the paraxial focus, so the old plane was not a
  best-focus choice.
- Rim clearance: d12 is 1.000 / 3.023 / 14.274 mm at the vertex and the minimum over its 15.45 mm band, unchanged in
  kind. Aperture, image-circle, field-coverage and surface-probe audits are unchanged (within 3 %, 0 undersized,
  ≥99 %, no validation errors).
- Text sync: header (cover-glass note and image-plane note), inline comments, `focus.description`, plate `source`, and
  analysis (minimum-focus bullet, track paragraph, cover-glass paragraph, focus table and travel, image-plane section).

Follow-ups: the near rows' printed distances sit 1.3 % (400 mm) and 0.14 % (2400 mm) from where the printed d12
values focus on the placed plane; the re-solve absorbs that, and no erratum is recorded.

## 2026-11-10 — Metadata fill

- `catalog.fNumber.design: 2.8` from US 2020/0319427 A1 FIG. 3 (Sheet 2 of 40, PDF p. 3), INFINITY column:
  "F No. 2.80"; ¶[0104] (p. 8) repeats "an F number of 2.80" for Example 1. The stop's `nominalFNumber` 2.8 matches
  it. No optical value changed.
