# Audit Log — NIKON NIKKOR Z DX 16-50mm f/3.5-6.3 VR

Patent: JP WO 2020/012638 A1, Example 8

## 2026-05-20 — Six-digit missing-Sellmeier code review

### Patent evidence

- Reviewed the actual local file `patents/JPWO2020012638A1.pdf`.
- Example 8 confirms the relevant rows:
  - S1 / L11 body: nd = 1.834810, νd = 42.73
  - S6 / L21: nd = 1.834410, νd = 37.28
  - S7 / L22: nd = 1.755000, νd = 52.34
  - S13 / L25: nd = 1.795256, νd = 45.25
  - S15 / L31: nd = 1.801390, νd = 45.46

### Glass corrections

| Element | Before | After | Disposition |
|---|---|---|---|
| L11 body | `Dense lanthanum flint (835/427)` | `S-LAH55 (OHARA, 835427)` | Existing coefficient-backed catalog entry. |
| L21 | `Dense lanthanum flint (834/373)` | `834373 — dense lanthanum flint...` | No exact public coefficient-backed match found; kept unresolved with unbroken code. |
| L22 | `Lanthanum crown (755/523)` | `J-LASKH2 (Hikari, 755523)` | Existing coefficient-backed Hikari catalog entry. |
| L25 | `Dense lanthanum flint (795/452)` | `Q-LASFPH3S (Hikari, 795453)` | Added coefficient-backed Hikari catalog entry. |
| L31 | `Dense lanthanum flint (801/455)` | `801455 — dense lanthanum flint...` | No exact public coefficient-backed match found; kept unresolved with unbroken code. |

### Catalog-search disposition

- Added Hikari Q-LASFPH3S using Hikari 2023 formula-3 power-series coefficients.
- Searched Hikari, CDGM, OHARA/HOYA/SCHOTT/Sumita cross references, and refractiveindex.info-derived catalogs for `834373` and `801455`; no defensible coefficient-backed exact match was found.
- Updated analysis notes and the glass-selection table for the resolved and unresolved rows.

