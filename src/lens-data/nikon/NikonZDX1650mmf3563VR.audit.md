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

## 2026-05-31 - Catalog-mismatch second-batch recheck

Reviewed the local untracked file `patents/JPWO2020012638A1.pdf`, Example 8 / Table 8.

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L23 / S10 | `glass` | `S-LAH79 (OHARA)` | `S-LAH98 (OHARA)` | Table 8 row 10 gives nd=1.953750 and vd=32.33. S-LAH98 round-trips this pair in the current catalog; S-LAH79 resolves to nd=2.00330. |
| L41 / S17 | `glass` | `S-LAH79 (OHARA)` | `S-LAH98 (OHARA)` | Table 8 row 17 repeats nd=1.953750 and vd=32.33. Same catalog-corrected 954323 disposition as L23. |

Figure / SD check:

- Rendered Figure 15 from the local PDF, page 41.
- The patent does not publish semi-diameters. The stored SD profile visually matches the compact DX zoom figure: broad front hybrid element, tighter G2 stop/VR region, narrow focusing element, and larger rear field-flattener. No SD edits were made.
