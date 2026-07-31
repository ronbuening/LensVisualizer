# PANASONIC LUMIX S 24-105mm f/4 MACRO O.I.S. Audit

## 2026-07-31 — Patent-figure SD, glass, and identity pass

**Source:** JP 2020-118738 A, Numerical Example 1, Figure 1.

### Semi-diameters

- Compared the wide-state section with the clean lens rims in Figure 1 at 600 dpi and checked the full-frame
  image-circle floor.
- Retained the submitted SDs. The trustworthy measurements do not show a greater-than-25% mismatch; several apparent
  outliers are neighboring rims or leader-line intersections rather than independent lens edges.
- `npm run audit:image-circle -- src/lens-data/panasonic/PanasonicLumixS24105mmf4MacroOIS.data.ts` passed with no
  undersized surfaces.

### Glass

- Reviewed all 16 glass elements. Fifteen already resolve to coefficient-backed curves.
- Retained L8 (`1.6882 / 31.1`) as an explicit unmatched M-FD80 / S-TIM28 / J-SF8-class row. Its patent coordinate does
  not uniquely establish one catalog curve, so forcing the nearest name would overstate the available evidence.

### Identity

- Confirmed the official product styling and project naming convention. The display name
  `PANASONIC LUMIX S 24-105mm f/4 MACRO O.I.S.` is correct and was retained.
- Romanized the inventor names and normalized the assignee to the existing
  `Panasonic Intellectual Property Management Co., Ltd.` catalog identity.
