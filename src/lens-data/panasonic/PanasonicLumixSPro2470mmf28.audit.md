# PANASONIC LUMIX S PRO 24-70mm f/2.8 Audit

## 2026-07-30 — Patent-figure SD and glass pass

**Source:** US 2021/0055531 A1, Numerical Example 1, Figure 1.

### Semi-diameters

- Compared the wide-state rendered section with Figure 1 after checking the full-frame image-circle floor.
- Reduced the first three elements of G3 to the figure's tighter post-stop envelope: surfaces 16–19 changed from
  `16.5` to `15.0` mm and surface 21 changed from `16.0` to `15.0` mm.
- Retained the other inferred SDs. Figure leaders obscure several rims, and the remaining clean outlines do not support
  a material change.
- `npm run audit:surface -- src/lens-data/panasonic/PanasonicLumixSPro2470mmf28.data.ts` and
  `npm run audit:image-circle -- src/lens-data/panasonic/PanasonicLumixSPro2470mmf28.data.ts` passed.

### Glass

- Reclassified L5 and L14 (`1.80998 / 40.9`) as SUMITA K-VC89 catalog equivalents. The catalog coordinate is
  `1.81000 / 41.0`; the patent does not identify the production supplier.
- Reclassified L10 (`1.92119 / 24.0`) as a HOYA FDS24 catalog equivalent. HOYA publishes the exact d-line index and
  `νd = 23.96`; the patent's one-decimal Abbe value is consistent with that row.
- Strict Sellmeier coverage increased from `15/18` to `18/18`.

### Identity

- Reviewed the official product styling and project naming convention. The display name
  `PANASONIC LUMIX S PRO 24-70mm f/2.8` is already correct and was retained.
