# PANASONIC LUMIX S PRO 70-200mm f/4 O.I.S. Audit

## 2026-07-30 — Patent-figure SD and glass pass

**Source:** JP 2020-086133 A, Numerical Example 6, Figure 66.

### Semi-diameters

- Compared the rendered section with Figure 66 after checking the full-frame image-circle floor.
- Increased the exposed rims of L11 and L12 to `13.0` mm at surfaces 19 and 22 while retaining their constrained
  `11.8 / 11.6` mm inner rims across the 0.6288 mm air gap.
- Increased L17's rear rim at surface 30 from `11.1` to `12.0` mm while retaining its gap-constrained front rim.
- A trial increase of the constrained inner rims was rejected by the surface validator because it would have introduced
  cross-gap overlap. The final tapered outlines preserve the existing physical clearances.
- `npm run audit:surface -- src/lens-data/panasonic/PanasonicLumixSPro70200mmf4OIS.data.ts` and
  `npm run audit:image-circle -- src/lens-data/panasonic/PanasonicLumixSPro70200mmf4OIS.data.ts` passed.

### Glass

- Reviewed every code-only glass annotation against the regenerated reports. All `23/23` elements already resolve to
  trusted Sellmeier data.
- Retained the code-based labels because the patent names no vendor and several coordinates have multiple valid
  cross-vendor catalog rows.

### Identity

- Reviewed the official product styling and project naming convention. The display name
  `PANASONIC LUMIX S PRO 70-200mm f/4 O.I.S.` is already correct and was retained.
