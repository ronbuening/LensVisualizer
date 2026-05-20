# Audit Log - Nikon NIKKOR Z 24-120mm f/4 S

Patent: WO 2022/259649 A1, Example 5 / Table 5

## 2026-05-20 - Catalog-mismatch queue audit

### Patent evidence

- Local patent file checked: `patents/WO2022259649A1.pdf`.
- The local PDF is image-based; Example 5 / Table 5 was checked by rendering the local pages.
- Rows confirmed:
  - S6 / L4: nd = 1.83400, vd = 37.18.
  - S8 / L5: nd = 1.85451, vd = 25.15.
  - S19 / L10: nd = 1.90043, vd = 37.38.
  - S22 / L12: nd = 1.78472, vd = 25.64.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L4 / S6 | `S-LAH66 (OHARA)` | `S-LAH60 (OHARA)` | Exact nd/vd catalog match. |
| L5 / S8 | `S-TIM35 (OHARA) or K-VC89 (Sumita)` | `855252 - high-index flint...` | Kept as patent code; no defensible exact public catalog match. |
| L10 / S19 | `S-LAH58 (OHARA)` | `TAFD37A (HOYA)` | Exact nd/vd catalog match. |
| L12 / S22 | `S-TIM25 (OHARA)` | `S-TIH11 (OHARA)` | Exact nd/vd catalog match. |

### Catalog-search disposition

- Checked public OHARA/HOYA catalog data and existing coefficient-backed catalog entries.
- `855252` remains unresolved because public matches were not exact enough to promote.
- No new catalog entries were required.

### Analysis sync

- Updated the affected glass-selection rows and L12 narrative.
