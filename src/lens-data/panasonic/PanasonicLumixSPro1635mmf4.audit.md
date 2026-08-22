# PANASONIC LUMIX S PRO 16-35mm f/4 Audit

## 2026-07-31 — Patent-figure SD, glass, and identity pass

**Source:** JP 2021-076829 A, Numerical Example 1, Figure 1.

### Semi-diameters

- Compared the wide-state section with the clean rims in Figure 1 at 600 dpi and checked the full-frame image-circle
  floor.
- Retained the submitted SDs. Clean figure/data measurements stay within the audit tolerance; the apparent L3 and
  L9-L10 outliers are under-read or crossed by patent leader and group lines.
- `npm run audit:image-circle -- src/lens-data/panasonic/PanasonicLumixSPro1635mmf4.data.ts` passed with no undersized
  surfaces.

### Glass

- Added SUMITA K-LaSFn23 from the manufacturer's coefficient-backed datasheet and assigned it as L12's catalog
  equivalent. The patent index remains `1.91082`, versus the catalog nominal `1.91100`, and the production supplier is
  left unspecified.
- Retained the other class-level and explicit unmatched annotations because the patent supplies only nd/vd coordinates
  and does not uniquely identify catalog glasses.

### Identity

- Confirmed the official product styling and project naming convention. The display name
  `PANASONIC LUMIX S PRO 16-35mm f/4` is correct and was retained.
- Romanized the inventor name and normalized the assignee to the existing
  `Panasonic Intellectual Property Management Co., Ltd.` catalog identity.

## 2026-08-21 — HOYA BAC6 legacy-curve recovery

- Visually rechecked local `patents/JP2021076829A.pdf`, PDF page 16, Numerical Example 1 Table 1. Surface 10 prints L5 at `nd = 1.57469`, `νd = 56.0`; the patent names no glass supplier and publishes no partial-dispersion row.
- Added HOYA BAC6 from the first-party 2026-07-07 obsolete-inclusive OpticStudio catalog. Its polynomial evaluates to `1.574441 / 56.357`, within `Δnd = -0.000249` and `Δνd = +0.357` of the patent coordinates.
- Relabeled L5 as a BAC6 legacy catalog equivalent while retaining code `575560` and leaving Panasonic's production supplier unspecified. Geometry and APD metadata are unchanged.
