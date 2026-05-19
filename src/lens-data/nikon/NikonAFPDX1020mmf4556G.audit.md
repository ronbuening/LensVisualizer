# Audit Log - Nikon AF-P DX NIKKOR 10-20mm f/4.5-5.6G VR

Patent: WO2021039813A1 / US20220269056A1, Example 2

## 2026-05-19 - Missing-Sellmeier queue audit

### Patent evidence

- Local patent file checked: `patents/WO2021039813A1.pdf`.
- The PDF text layer is empty; the gitignored PDF was rendered locally and Table 2 was checked visually.
- Example 2 / Table 2 rows confirmed:
  - surface 7 / L13: nd = 1.68348, vd = 54.80, theta_gF = 0.5501.
  - surface 25 / L41: nd = 1.53110, vd = 55.91, theta_gF = 0.5684.

### Catalog-search disposition

- Searched current runtime catalog, public Hikari/Nikon, HOYA, Schott, OHARA, CDGM, and refractiveindex.info rows for `683548` and `531559`.
- No coefficient-backed public match was found for either partial-dispersion row. The patent's theta_gF values are retained in the data file.

### Changes made

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L13 / S7 | `Unmatched (patent-specified 683/548 glass; theta_gF = 0.5501)` | `683548 - patent-specified glass ...` | Unresolved; explicit code retained. |
| L41 / S25 | `Unmatched (patent-specified 531/559 crown-like glass; theta_gF = 0.5684)` | `531559 - patent-specified crown-like glass ...` | Unresolved; explicit code retained. |

### Analysis sync

- Updated descriptions and the glass-identification table to use explicit unbroken unresolved codes.
