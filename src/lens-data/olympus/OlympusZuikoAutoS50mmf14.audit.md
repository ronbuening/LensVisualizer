# Audit Log — OLYMPUS G.ZUIKO AUTO-S 50mm f/1.4

Patent: US 4,094,588, Example 1

## 2026-05-20 — Six-digit missing-Sellmeier code review

### Patent evidence

- Reviewed the actual local file `patents/US4094588.pdf`.
- Example 1 confirms the relevant rows:
  - L2/L7: nd = 1.6935, νd = 50.8
  - L3: nd = 1.5814, νd = 40.8
  - L5: nd = 1.6935, νd = 53.3

### Glass corrections

| Element(s) | Before | After | Disposition |
|---|---|---|---|
| L2, L7 | `LaK-type A (694-508...)` | `694508 — LaK-type A...` | No exact public coefficient-backed match found; kept unresolved with unbroken code. |
| L3 | `BaF-type (581-408...)` | `PBL25 (OHARA, 581408)` | Existing coefficient-backed catalog entry. |
| L5 | `LaK-type B (694-533...)` | `LAC13 (HOYA, 694533)` | Existing coefficient-backed catalog entry. |

### Catalog-search disposition

- Public catalog search resolved `581408` and `694533` to coefficient-backed entries already in the catalog.
- Search for `694508` found no exact coefficient-backed public match, so the same L2/L7 glass remains code-labeled.
- Updated the analysis element notes and glass-selection table.

## 2026-09-24 — Semi-diameters raised to the traced format corner

Example 1 is normalized to f = 1.0 (scaled ×50 here). FIG. 2B–C (Sheet 1, PDF page 2) plot its astigmatism and
distortion to ω = 23° (f·tan ω = 21.22 mm) for a lens sold for the 35mm format; the traced chief ray lands at 20.88 mm
at 23° (96.4%) and reaches the full-frame corner (21.65 mm) at 23.77°. The estimated L7 rims (14.0 mm, sized for a
0.6-field chief ray) clipped the real chief ray (solved through the stop centre) from 21.5°, leaving the analysis field
at 90% of the corner (19.44 mm). The corner chief ray needs surface 12 ≥ 15.87 mm and surface 13 ≥ 15.93 mm
(15.15 / 15.24 mm at the patent's 23°); every other rim clears it (surface 11 by 0.45 mm). Surface 13 takes
floor + ~0.5 mm and surface 12, its biconvex partner, is scaled with it, keeping the author's equal L7 rims. The
validator only rejects a negative edge; L7's edge is 0.38 mm at the floor and 0.20 mm at 16.5 mm (the surfaces meet at
17.1 mm), below the header's 0.7 mm authoring target, and the data-file header and analysis §9 now say so. The stop
stays at its inferred 25% of d6 (FIG. 1 draws none). No figure measurement was used.

| Surface | Before | After | Justification |
|---|---|---|---|
| 12 | 14.0 | 16.5 | corner chief ray 15.87 mm; scaled with surface 13 (biconvex L7) |
| 13 | 14.0 | 16.5 | corner chief ray 15.93 mm + clearance |

The validator accepts the new values (both surfaces spherical). The traced field now reaches 23.77° and 21.65 mm, 100%
of the corner (it was 21.53° / 19.44 mm, 90%), with every rim clear (surface 11 by 0.45 mm, L7 by 0.57 mm). The
image-circle floor still reports nothing undersized. L7 is now the thinnest glass edge in the lens (0.20 mm; next is
L1 at 0.78 mm).
