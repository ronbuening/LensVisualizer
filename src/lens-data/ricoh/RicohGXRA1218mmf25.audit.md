# Audit Log - Ricoh GXR A12 18.3mm f/2.5

Patent: JP 2012-003015 A

## 2026-06-23 - Local patent table and SD review

- Local patent source: `patents/JP2012003015A.pdf` (untracked local file), Example 3.
- Rendered the patent pages containing Table 5 and Table 6 because text extraction dropped much of the tabular data. The table verifies f = 18.3 mm, Fno = 2.56, the surface radii/spacings, nd/vd values, aspherical coefficients, and floating-focus gaps used by the data file.
- Verified the focus/back-focus convention: patent cover glass is 2.5 mm at nd = 1.5168, so the data file correctly folds its 1.648 mm air-equivalent path into the last surface gap.

| Element | Patent nd/vd | Before | After | Disposition |
|---|---|---|---|---|
| L6 | 1.6727 / 32.2 | `S-TIF6 / N-SF5` | `E-FD5 (HOYA) / S-TIF6 or N-SF5 class (673322)` | Exact local Hoya six-digit class match for the patent row; keeps the older S-TIF6/N-SF5 family context. |

- The patent does not publish glass names or Pg,F values. No APD or dPgF values were added, and no element is treated as APD from this source.
- The patent does not publish semi-diameters. Existing SDs remain estimates. They were checked against the figure and prescription: large front aspheric apertures, reduced internal doublet apertures, a moderate stop, and rear asphere sizes are coherent and preserve the relative proportions needed for rendering.
- Companion analysis was updated so the L5/L6 cemented-pair discussion uses the corrected E-FD5 / S-TIF6 or N-SF5 class label.
