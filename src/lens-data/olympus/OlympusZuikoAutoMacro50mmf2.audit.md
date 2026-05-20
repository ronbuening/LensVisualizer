# Audit Log — OLYMPUS ZUIKO AUTO-MACRO 50mm f/2

Patent: US 4,708,445, Embodiment 6

## 2026-05-20 — Six-digit missing-Sellmeier code review

### Patent evidence

- Reviewed the actual local file `patents/US4708445.pdf`.
- Embodiment 6 confirms the relevant rows:
  - L4: nd = 1.58144, νd = 40.75
  - L5: nd = 1.68250, νd = 44.65
  - L6: nd = 1.72000, νd = 46.03

### Glass corrections

| Element | Before | After | Disposition |
|---|---|---|---|
| L4 | `581/408 (short flint family)` | `PBL25 (OHARA, 581408)` | Existing coefficient-backed catalog entry. |
| L5 | `683/447...` | `683447 — barium/lanthanum flint family...` | No exact public coefficient-backed match found; kept unresolved. |
| L6 | `720/460...` | `S-LAM61 (OHARA, 720460)` | Existing coefficient-backed catalog entry. |

### Catalog-search disposition

- Public catalog search resolved `581408` and `720460` to existing coefficient-backed entries.
- Search for `683447` found no exact coefficient-backed public match.
- Updated analysis element notes, glass summary, and the production-scale prescription table.

