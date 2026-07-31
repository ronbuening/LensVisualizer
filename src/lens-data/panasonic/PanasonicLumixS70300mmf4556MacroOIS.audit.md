# PANASONIC LUMIX S 70-300mm f/4.5-5.6 MACRO O.I.S. Audit

## 2026-07-31 — Patent-figure SD, glass, and identity pass

**Source:** JP 2022-125453 A, Numerical Example 1, Figure 1.

### Semi-diameters

- Compared the wide-state section with Figure 1 at 600 dpi and checked the full-frame image-circle floor.
- Retained the submitted SDs. The clean figure/data ratios cluster around unity, and no reliable rim differs by more
  than the patent-figure audit threshold.
- `npm run audit:image-circle -- src/lens-data/panasonic/PanasonicLumixS70300mmf4556MacroOIS.data.ts` passed with no
  undersized surfaces.

### Glass

- Reviewed all 17 glass elements. Every element already resolves through representative patent line indices or a
  coefficient-backed catalog curve, so no classification change was needed.
- Retained representative labels where the patent does not identify the production supplier.

### Identity

- Confirmed the official product styling and project naming convention. The display name
  `PANASONIC LUMIX S 70-300mm f/4.5-5.6 MACRO O.I.S.` is correct and was retained.
- Romanized the inventor names and normalized the assignee to the existing
  `Panasonic Intellectual Property Management Co., Ltd.` catalog identity.
