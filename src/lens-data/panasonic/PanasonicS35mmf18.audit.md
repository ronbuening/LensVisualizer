# Audit Log — PANASONIC LUMIX S 35mm F1.8

Patent: CN 216772097 U, Example 1

## 2026-05-20 — Six-digit missing-Sellmeier code review

### Patent evidence

- Reviewed the actual local file `patents/CN216772097U.pdf`.
- The PDF text extraction did not expose the optical-parameter table rows, so the source table could not be independently re-read from the local PDF in this pass.
- Existing data rows under review were retained unless a coefficient-backed catalog match was found from public sources.

### Glass corrections

| Element(s) | Before | After | Disposition |
|---|---|---|---|
| L11 | `Unmatched... 946/180...` | `FDS18 (HOYA, 946180)` | Existing coefficient-backed catalog entry. |
| L18, L21, L31 | `PGM moldable crown, code 516/565...` | `516565 — PGM moldable crown...` | No exact public coefficient-backed match found; kept unresolved with unbroken code. |

### Catalog-search disposition

- HOYA FDS18 provides a coefficient-backed public match for nd = 1.94595, νd ≈ 18.0 / code `946180`.
- Public catalog search found no exact coefficient-backed match for `516565`, so the three aspherical PGM elements remain unresolved.
- Updated the analysis glass narrative and summary table.

## 2026-05-20 — Glass relabel follow-up

### Patent evidence

- Re-opened the data file, existing audit log, and local patent file `patents/CN216772097U.pdf`.
- The local PDF OCR still does not expose the optical-parameter rows cleanly, so the prior patent-table confirmation was retained as the source of record for the prescription values.

### Glass corrections

| Element(s) | Before | After | Disposition |
|---|---|---|---|
| L12 | `H-ZF13 (CDGM) — dense flint` | `S-TIM28 (OHARA)` | Stored nd/vd matches the OHARA catalog row closely enough for a coefficient-backed Sellmeier relabel. |
| L14 | `H-LAK53A (CDGM) — S-LAL8 class` | `S-LAL18 (OHARA)` | Public catalog candidate matches the stored high-index crown row. |
| L32 | `S-LAH55 (OHARA)` | `NBFD15 (HOYA)` | Stored nd/vd matches HOYA NBFD15 rather than OHARA S-LAH55. |

### Remaining disposition

- The `516565` PGM rows remain code-backed unresolved glasses because no exact public coefficient-backed match was found.
