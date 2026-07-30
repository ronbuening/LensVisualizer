# Audit Log - Canon EF 11-24mm f/4L USM

Patent: US 2015/0146085 A1, Numerical Example 1

## 2026-07-30 - Compatible catalog-equivalent recovery

### Patent evidence

- Rendered local `patents/US20150146085A1.pdf`, PDF page 12.
- Paragraph 0060 defines `ndi` and `νdi` as refractive index and Abbe constant at the d line.
- Numerical Example 1 confirms E2 / S3 at nd = 1.58443, νd = 59.4 and E3 / S5 at nd = 1.85000, νd = 40.3. Stored radii, thicknesses, and effective diameters match the same rows.

### Glass corrections

| Element / surface | Before | After | Justification |
|---|---|---|---|
| E2 / S3 | `Unmatched 584/594 crown` | `S-BAL42 (OHARA catalog equivalent)` | S-BAL42 is within the d-line safety window at Δnd = -0.00130 and Δνd = -0.03. |
| E3 / S5 | `Unmatched 850/403 high-index flint` | `M-TAFD305 (HOYA catalog equivalent)` | M-TAFD305 is within the d-line safety window at Δnd = +0.00135 and Δνd = -0.20. |

Both annotations leave the production supplier unspecified. No prescription, asphere, zoom, or semi-diameter values changed.

### Analysis sync

- Updated the E2/E3 element descriptions, glass table, and chromatic-data qualification.
