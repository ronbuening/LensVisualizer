# Audit Log - Olympus OM Zuiko 16mm f/3.5 Fisheye

Patent: US 3,850,509, Example 1

## 2026-06-24 - Olympus patent glass-code audit

### Patent evidence

- Reviewed local patent file `patents/US3850509.pdf`.
- Example 1 confirms the existing R/d/nd/vd prescription. The patent includes a plane-parallel filter plate, which remains excluded per the data-file note.
- The patent does not publish a clear-aperture table; retained inferred SDs and the stop derived from F/3.5 were left unchanged.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L6 / S11 | `S-APL1 (OHARA)` | `517696 - S-APL1 / APL1-class low-index high-Abbe crown (OHARA; no public Sellmeier match)` | Same glass family, normalized to six-digit code convention because the current public catalog has no coefficient-backed row. |
| L7b / S14 | `S-APL1 (OHARA)` | `517696 - S-APL1 / APL1-class low-index high-Abbe crown (OHARA; no public Sellmeier match)` | Same glass family, normalized to six-digit code convention because the current public catalog has no coefficient-backed row. |

### APD, high-index, and SD review

- No APD status changes: the patent gives ordinary nd/vd values only.
- High-index roles remain with the dense flints already labeled elsewhere in the file; L6/L7b are low-index high-Abbe crown elements.
- No SD change: the front-group and stop apertures already follow the patent drawing and F-number-derived pupil constraint.

### Analysis sync

- Updated the L6/L7b element text, glass table row, and catalog note.
