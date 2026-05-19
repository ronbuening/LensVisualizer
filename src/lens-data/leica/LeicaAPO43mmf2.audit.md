# Audit Log - Leica APO-Summicron 43mm f/2 ASPH. (Q3 43)

Patent: US 2024/0241349 A1, Example 1

## 2026-05-19 - Missing-Sellmeier queue audit

### Patent evidence

- Local patent file checked: `patents/US20240241349A1.pdf`.
- The local PDF is image-only; Table 1A was checked via local page render and public patent text.
- Example 1 / Table 1A rows confirmed:
  - surface 5 / L3: nd = 1.59282, vd = 68.6.
  - surface 9 / L5: nd = 1.58660, vd = 59.0.
  - surface 22 / L11: nd = 1.58660, vd = 59.0.

### Catalog-search disposition

- Matched L3 to existing coefficient-backed HOYA `FCD515` (`593686`).
- Added Sumita `K-SKLD200` from the official Sumita datasheet; it is the coefficient-backed `587590` match used for L5 and L11.

### Changes made

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L3 / S5 | `593/686 (PK crown, uncertain ID)` | `FCD515 (HOYA)` | Exact catalog match. |
| L5 / S9 | `587/590 (HOYA FDS family / PGM)` | `K-SKLD200 (Sumita)` | Exact catalog match. |
| L11 / S22 | `587/590 (HOYA FDS family / PGM)` | `K-SKLD200 (Sumita)` | Same glass as L5. |

### Analysis sync

- Updated glass-selection, APD, and aspheric-manufacturing notes for FCD515 and K-SKLD200.
