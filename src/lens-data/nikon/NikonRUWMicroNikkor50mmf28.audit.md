# Audit Log - Nikon R-UW AF Micro-Nikkor 50mm f/2.8

Patent: US 5,257,137, Embodiment 1

## 2026-07-29 - Glass coverage follow-up

- Relabeled L31 from an explicit unmatched J-SFH2 class note to coefficient-backed Hikari J-SFH2.
- Current J-SFH2 retains the patent coordinate's `nd=1.86074`; its published `vd=23.08` and code `861231` are
  one final rounding digit from the stored `vd=23.0` / `861230` coordinate.
- Kept J-LASFH2, 796/409, and 607/403 rows unresolved because this pass found no comparably strong catalog evidence
  for those materials.
- No prescription, semi-diameter, or movement values changed.

## 2026-07-29 - `796409` coefficient-source review

- Visually rechecked Example 1 Table 1 row 14 at `nd = 1.79631`, `vd = 40.9`; the stored radius and
  thickness match the printed prescription.
- Official OHARA, HOYA, Hikari, and Sumita coefficient catalogs contain no exact `796409` row.
  The nearby named lanthanum-flint families do not reproduce both coordinates.
- Retained the explicit unmatched `796409` annotation. No supplier, catalog model, or geometry changed.

## 2026-08-11 — Phase 92 HOYA legacy-catalog recovery

- Visually rechecked US 5,257,137 Table 1 on rendered PDF page 8: L33 is `1.79631 / 40.9` and L41 is
  `1.60717 / 40.3`.
- Recovered official legacy HOYA models NBFD2 (`1.797199 / 41.143795`) and BAFD3
  (`1.607171 / 40.359687`); both are compatible with their patent coordinates.
- Relabeled the two elements as supplier-neutral optical equivalents and synchronized the analysis. No underwater
  prescription geometry, aperture, projection, or semi-diameter values changed.

## 2026-08-11 — Phase 94 J-LASFH2 completion

- Rechecked Example 1 Table 1 on rendered PDF page 8: surface 3 is `nd = 1.76684`, `νd = 46.8`.
- The subsequently added first-party Hikari J-LASFH2 curve reproduces that coordinate at `1.766840019 / 46.78`, so
  the earlier explicit-unmatched safeguard is no longer applicable.
- Relabeled L2F to J-LASFH2, completing the lens at 10/10 strict Sellmeier surfaces. No source values or geometry
  changed.

## 2026-09-24 — Declared field converted to its in-air equivalent

| Field | Before | After | Justification |
|---|---|---|---|
| `projection.maxTraceFieldDeg` | 17.5 | 23.59 | The production 35° field is an underwater angle, but the app launches rays in air in front of the flat port; asin(1.3306 · sin 17.5°) = 23.59° is the same ray in air (nw = 1.3306 from patent col. 10). |
| `projection.fullFieldDeg` | 35 | 47.18 | Twice the in-air half-field (rounded up so the half-field rule holds). |

The underwater declaration had stopped the analysis field at 17.5° in air, 74% of the 35 mm corner. The traced
chief ray reaches the corner at 23.5° with every rim clear, consistent with the analysis note that the frame
corner is 22.75° image-side and about 16.9° underwater. The `specs` line keeps "35° underwater field". No
prescription or semi-diameter changed.
