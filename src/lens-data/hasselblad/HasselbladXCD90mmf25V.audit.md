# Audit Log - Hasselblad XCD 2,5/90V

Patent: JP 2022-99402 A, Example 1

## 2026-06-04 - Sweep 2 manufacturer catalog source pass

- Added HOYA NBFD29 from HOYA's first-party optical-glass PDF (`NBFD29`, code 770-297, nd=1.77047, vd=29.74, PgF=0.5951, formula-3 A0-A5 constants) to the runtime catalog.
- Relabeled L3 / S5 and L4 / S7 to `NBFD29 (HOYA, 770297)`.
- Relabeled L6 / S12 to existing coefficient-backed `TAFD35 (HOYA, 911353; patent rounds vd to 35.2)`, whose d-line index matches the stored nd=1.91082.
- `npm test -- dispersion` and `npm run generate:glass-reports` passed; these formerly code-only rows now use trusted Sellmeier data.

## 2026-05-19 - Missing-Sellmeier queue audit

### Patent evidence

- Local patent file checked: `patents/JP2022099402A.pdf`.
- Example 1 / Table 1A rows confirmed:
  - surface 5 / L3: nd = 1.77047, vd = 29.7, Pg,F = 0.5951.
  - surface 7 / L4: nd = 1.77047, vd = 29.7.
  - surface 12 / L6: nd = 1.91082, vd = 35.2.

### Catalog-search disposition

- Searched the runtime catalog plus public OHARA, Schott, HOYA, HIKARI, CDGM, and refractiveindex.info rows for 770297 and 911352.
- No coefficient-backed public match was found during this May pass. The June 2026 source pass later resolved these rows from HOYA manufacturer data.

### Changes made

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L3 / S5 | `Unmatched dense flint (770/297)` | `770297 - dense flint ...` | Unresolved in this May pass; resolved later as HOYA NBFD29. |
| L4 / S7 | `Unmatched dense flint (770/297)` | `770297 - dense flint ...` | Same glass as L3; resolved later as HOYA NBFD29. |
| L6 / S12 | `Unmatched ultra-high-index glass (911/352)` | `911352 - ultra-high-index glass ...` | Unresolved in this May pass; resolved later as HOYA TAFD35. |

### Analysis sync

- Updated glass-selection text and tables to describe 770297 and 911352 as code-backed patent glasses rather than slash-form unmatched labels; the June source pass later promoted them to catalog-backed HOYA labels.

## 2026-05-20 - Glass relabel follow-up

### Patent evidence

- Re-opened `patents/JP2022099402A.pdf` and confirmed Example 1 rows for the front crown and high-index positive element.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L1 / S1 | `S-LAH55V (OHARA)` | `S-LAL18 (OHARA)` | Patent nd=1.72916, vd=54.7 matches the OHARA S-LAL18 catalog row. |
| L5 / S10 | `S-NPH4 (OHARA)` | `S-NPH5 (OHARA)` | Patent nd=1.85896, vd=22.7 matches the OHARA S-NPH5 catalog row. |

### Remaining disposition

- The private/code-only rows `770297` and `911352` were unresolved in this May follow-up, then resolved in the 2026-06-04 source pass as HOYA NBFD29 and HOYA TAFD35.
