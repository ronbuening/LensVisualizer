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

