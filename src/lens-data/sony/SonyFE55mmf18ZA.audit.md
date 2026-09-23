# Audit Log — Sony Sonnar T* FE 55mm F1.8 ZA

Patent: US 2015/0092100 A1, Example 1

## 2026-05-20 — Glass relabel follow-up

### Patent evidence

- Reviewed local patent file `patents/US20150092100A1.pdf`.
- Example 1 row confirmed L11 / surface 1 nd = 1.58144, vd = 40.9.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L11 / S1 | `S-TIM2 (OHARA)` | `E-FL5 (HOYA)` | Public HOYA catalog row matches the patent nd/vd pair. |

### Analysis sync

- Updated the L11 element paragraph and glass table.

## 2026-06-23 - Sony folder patent audit / APD + SD review

- Rechecked local `patents/US20150092100A1.pdf` and the current analysis sidecar against the data file.
- Existing R/d/nd/vd, high-index/catalog labels, APD metadata, and estimated SD profile remain consistent with the patent-backed prescription and prior relabel pass.
- No APD, high-index, glass-label, spacing, or SD edits were needed in this pass.
- Current generated glass reports show no active Sony catalog-mismatch row for this lens.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Read Example 1 Table 1 on PDF page 26 (printed page 7) at 160 dpi: surface 13 d = 11.78; surfaces 14–15 are the
  optical member SG, 2.00 mm, nd 1.516798, νd 64.2; surface 15 → image is 1.00 mm. Table 2 varies only D7/D9, so the
  gap before SG is fixed through focus. 1.516798 / 64.2 is the N-BK7 class (`resolveCompatibleGlass` confirms).
- Surface 13 now stores the patent's 11.78 mm (was the air-equivalent 14.10), with `rearPlates` SG (N-BK7) and
  gapAfter 1.00 mm. Paraxial check against the previous data: EFL identical; defocus changes by 0.0014 mm at every
  focus keyframe (rounding in the old 14.10 vs 14.0986). Physical track grows by 0.68 mm and now matches the 79.35 mm
  total length quoted in the analysis. `closeFocusM` 0.5 m is the marketing MFD and is unchanged.
