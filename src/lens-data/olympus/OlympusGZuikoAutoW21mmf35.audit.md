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

## 2026-09-24 — Semi-diameters raised to the traced format corner

Embodiment 3 is normalized to f = 1.0 (scaled ×21 here). FIG. 10A–C (Sheet 4) plot its aberrations to ω = 46°, and col.
1 (Summary of the Invention) gives the family's field angle as 84° to 92°, so the design is meant to reach 2ω = 92°. The
estimated surface-3 rim (9.4 mm) clipped the real chief ray (solved through the stop centre) from 40.4°, leaving the
analysis field at 80% of the full-frame corner (21.65 mm). The corner also traced as "unreachable" past 45.7°: the
sequential tracer bounds each surface's intersection search at the rim sag of its stored sd plus 1 mm, and at 9.4 mm
that window ends where the chief ray meets surface 3 at ≈11.04 mm, so the solve failed instead of reporting a clip. With
the rim raised, the chief ray solves to the corner (46.63°) and crosses surface 3 at 11.24 mm and surface 4 (R 8.62) at
7.76 mm; at the patent's ω = 46° it crosses them at 11.04 and 7.69 mm. Surface 3 takes floor + ~0.5 mm. Surface 4 is
capped at 7.75 mm: 7.76 fails the 4→5 cross-gap sag check (3.41 mm against 3.406 mm allowed) and 7.77 also exceeds the
64.2° rim-slope limit. L2 is a strong meniscus, so surface 4 was not scaled with surface 3. No figure measurement was
used.

| Surface | Before | After | Justification |
|---|---|---|---|
| 3 | 9.4 | 11.8 | corner chief ray 11.24 mm (11.04 mm at ω = 46°) + clearance |
| 4 | 7.55 | 7.75 | ω = 46° chief ray 7.69 mm; the corner needs 7.76 mm, capped by the 4→5 cross-gap check |

The validator accepts the new values. The traced field now reaches 46.53° and 21.57 mm, 99.6% of the corner (it was
40.4° / 17.29 mm, 80%), stopped by the surface-4 rim 0.012 mm short of the corner chief ray; the patent's own
ω = 46° clears it by 0.06 mm. The image-circle floor still reports nothing undersized. All surfaces are spherical.
