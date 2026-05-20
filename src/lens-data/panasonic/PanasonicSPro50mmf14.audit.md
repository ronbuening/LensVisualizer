# Audit Log - Panasonic Lumix S Pro 50mm f/1.4

Patent: WO 2020/158622 A1, Example 3 / Table 3A

## 2026-05-20 - Catalog-mismatch queue audit

### Patent evidence

- Local patent file checked: `patents/JPWO2020158622A1.pdf`.
- Example 3 / Table 3A rows confirmed from local patent text:
  - S7* / L4: nd = 1.80755, vd = 40.9.
  - S19 / L10: nd = 1.94595, vd = 18.0, delta PgF = 0.0386.
  - S21 / L11: nd = 1.56732, vd = 42.8.
  - S22 / L12: nd = 1.55032, vd = 75.5, delta PgF = 0.0277.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L4 / S7* | `LAH-type... S-LAH93 region` | `808409 - PGM-moldable lanthanum crown...` | Kept as patent code; no exact public catalog match. |
| L10 / S19 | `S-NPH5 (OHARA)` | `FDS18 (HOYA)` | Exact nd/vd catalog match. |
| L11 / S21 | `S-BAH11 (OHARA)` | `S-TIL26 (OHARA)` | Exact nd/vd catalog match. |
| L12 / S22 | `S-FPM4 (OHARA)` | `FCD705 (HOYA)` | Exact nd/vd catalog match. |

### Catalog-search disposition

- Checked public OHARA/HOYA catalog data and existing coefficient-backed catalog entries.
- L4 remains unresolved under a code-led label; the prior nearby `S-LAH93` wording was removed to avoid a false match.
- No new catalog entries were required.

### Analysis sync

- Updated L4/L10/L11/L12 descriptions, glass table rows, chromatic strategy, and source notes.
