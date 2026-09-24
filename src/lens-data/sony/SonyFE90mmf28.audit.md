# Audit Log - Sony FE 90 mm F2.8 Macro G OSS

Patent: WO 2016/136352 A1, Example 2

## 2026-05-20 - Glass relabel pass

- Opened the local untracked patent PDF at `patents/WO2016136352A1.pdf`; local extraction is image-only, so the patent rows were cross-checked against the public Google Patents text.
- Confirmed relabel rows at surfaces 6, 20, 22, and 24.
- Updated G4 to `MC-TAF101-100 (HOYA)` for nd=1.76800, vd=49.24.
- Updated G5 to `S-LAH66 (OHARA)` for nd=1.77250, vd=49.62, clearing the prior no-catalog M-TAC60 annotation.
- Updated G12 to `S-TIM25 (OHARA)` for nd=1.67270, vd=32.17.
- Updated G13 to `S-LAH95 (OHARA)` for nd=1.90370, vd=31.32.
- Updated G14 to `N-SSK5 (Schott)` for nd=1.65840, vd=50.85.

## 2026-06-23 - Sony folder patent audit / APD + SD review

- Corrected this audit header from Example 1 to Example 2, matching `SonyFE90mmf28.data.ts` and the companion analysis sidecar.
- Rechecked local `patents/WO2016136352A1.pdf`; local extraction is image-only, so this pass relies on the existing Example 2 analysis and prior cross-check against public patent text.
- Existing R/d/nd/vd, focus spacings, high-index/catalog labels, APD metadata, and estimated SD profile remain consistent with the patent-backed Example 2 prescription and prior relabel pass.
- No APD, high-index, glass-label, spacing, or SD edits were needed in this pass.
- Current generated glass reports show no active Sony catalog-mismatch row for this lens.

## 2026-07-29 - Catalog-coordinate correction

- Corrected G7 from modern `S-NPH2` to historical OHARA `PBH21`, the exact 1.9229 / 20.88 row.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Read Example 2 Table 5 on PDF page 24 (printed page 22) at 200 dpi: surface 27 d = 22.747; surfaces 28–29 are one
  plane plate, 2.500 mm, nd 1.5168, νd 64.1983, then 1.000 mm to IMG. Paragraph [0094] (page 23) names it optical
  filter FL between GR5 and IMG. d27 is not a Table 8 variable gap, so the plate is camera-fixed.
- Surface 27 now stores the patent's 22.747 mm, with `rearPlates` FL (N-BK7; 1.51680 / 64.2 class, catalog-compatible)
  and gapAfter 1.000 mm, replacing the legacy air-equivalent 25.4 mm (the patent's two-decimal BF 25.40).
- Paraxial check against the previous data: EFL identical at all three focus keyframes; defocus changes by 0.0048 mm
  (22.747 + 2.500/1.5168 + 1.000 = 25.3952 vs the rounded 25.4). Physical track grows by 0.847 mm to 145.005 mm,
  matching the analysis's physical S1-to-image figure.
