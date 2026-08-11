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
