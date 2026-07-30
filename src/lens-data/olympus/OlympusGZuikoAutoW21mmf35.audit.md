# Audit Log - Olympus G.Zuiko Auto-W 21mm f/3.5

Patent: US 3,884,556, Embodiment 3 / Claim 4

## 2026-06-24 - Olympus patent glass-code audit

### Patent evidence

- Reviewed local patent file `patents/US3884556.pdf`.
- Embodiment 3 confirms the existing R/d/nd/vd prescription. The patent does not publish clear-aperture semi-diameters.
- The retained stop placement, surface geometry, and inferred SDs were left unchanged.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L1 / S1 | `Unmatched (vintage lanthanum flint, code 720/421)` | `720421 - vintage lanthanum flint (patent nd=1.72000, vd=42.1; no exact public catalog match)` | Same optical family, normalized to the project six-digit code label convention. |

### APD, high-index, and SD review

- No APD status changes: the patent gives ordinary nd/vd values only.
- L1 remains a high-index front meniscus for retrofocus ray-angle and distortion control, but no exact public coefficient-backed catalog row was found.
- No SD change: the existing inferred semi-diameters remain consistent with the patent drawing proportions.

### Analysis sync

- Updated the L1 paragraph and glass table row to use the normalized code label.

## 2026-07-30 - SUMITA LAFN10 coefficient recovery

- SUMITA's discontinued-inclusive all-glass catalog publishes LAFN10 at code `720421`, nd = 1.72016, νd = 42.1.
- Relabeled L1 / S1 as a compatible coefficient-backed catalog equivalent while leaving the production supplier unspecified.
- The Embodiment 3 prescription, stop placement, and inferred semi-diameters remain unchanged.
