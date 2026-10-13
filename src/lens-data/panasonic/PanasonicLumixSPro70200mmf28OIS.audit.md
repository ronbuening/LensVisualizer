# PANASONIC LUMIX S PRO 70-200mm f/2.8 O.I.S. Audit

## 2026-07-30 — Patent-figure SD and glass pass

**Source:** US 2021/0132345 A1, Numerical Example 3, Figure 5.

### Semi-diameters

- Compared the wide-state rendered section with Figure 5 after checking the full-frame image-circle floor.
- Reduced L1's front/rear SDs from `46.2 / 45.8` to `38.0 / 37.8` mm. The former outline was materially larger than
  the patent's front-group envelope relative to L2, L3, and the fixed rear groups.
- Retained the remaining inferred SDs, whose clean rims already follow the figure's stepped envelope.

### Glass

- Reclassified L19 (`1.70154 / 41.1`) as a SUMITA BASF7 catalog equivalent, using the existing coefficient-backed
  catalog row. The patent's code ends in `410`, while the SUMITA catalog row is `702411`, so the label deliberately
  states equivalence rather than production identity.
- Added HOYA LAF3 from the vendor's 2026-07-07 Zemax catalog and assigned it as the exact catalog equivalent for L22
  (`1.71700 / 47.9`, patent code `717480`).
- Retained L15 (`1.58578 / 59.5`) as unmatched. The nearest first-party catalog rows are not close enough to justify a
  named classification.
- Strict Sellmeier coverage increased from `19/22` to `21/22`; only L15 remains on Abbe fallback.

### Identity

- Reviewed the official product styling and project naming convention. The display name
  `PANASONIC LUMIX S PRO 70-200mm f/2.8 O.I.S.` is already correct and was retained.

## 2026-08-07 — Remaining glass coverage audit

- Visually rechecked US 2021/0132345 A1 Numerical Example 3 surface 30: L15 remains `nd=1.58578`, `νd=59.5`.
- SCHOTT P-SK57Q1 (`1.58600 / 59.5`) supplies a coefficient-backed curve within `0.00022` in d-line index and at
  the same Abbe number. It is labeled as a catalog equivalent because the patent does not identify the production
  supplier.
- Strict and trusted catalog coverage are now complete at `22/22`; no geometry or asphere coefficients changed.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Read Table 7 (Third Example) and Table 9A on PDF page 24 (printed page 13) at 200 dpi: surface 45 d = 31.00000;
  surfaces 46–47 are the parallel plate P (the patent's LPF/cover-glass stand-in), 2.10000 mm, nd 1.51680, νd 64.2;
  BF = 1.0900 at wide, middle, and tele. 31 + 2.1/1.51680 + 1.09 reproduces the legacy 33.4744936709 mm fold.
- Surface 45 now stores 31.0 mm, with `rearPlates` P labeled N-BK7 (exact 1.51680 / 64.2 class; the lens's other
  elements carry no single vendor) and gapAfter 1.09 mm. Paraxial check against the previous data: EFL identical and
  defocus unchanged (worst difference 1.4e-11 mm) at all three zoom stations. Physical track grows by 0.715506 mm to
  224.9999 / 224.9998 / 224.9998 mm, matching Table 9A's total lens length.
