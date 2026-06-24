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

## 2026-06-24 - Systematic patent-table audit

### Patent evidence

- Re-rendered `patents/CN216772097U.pdf` pages containing the Example 1 optical table because text extraction does not expose those rows reliably.
- Verified the powered surface table, dummy planes, cover glass, and variable focus spacings against the data file:
  - `d1`: 1.8000 / 2.5230 / 8.7213 mm.
  - `d2`: 7.8560 / 7.1330 / 0.9347 mm.
  - The utility-model table does not publish semi-diameters or effective diameters.

### Updates

| Area | Before | After | Disposition |
|---|---|---|---|
| L12, L14 APD | `apd: false` | `apd: "inferred"` | S-FPL51/FCD1 ED fluorophosphate class; patent lists nd/vd only. |
| L16 glass/APD | ED phosphate code label, `apd: false` | `FCD515 (Hoya)`, `apd: "inferred"` | Code 593686 matches FCD515; APD is catalog-inferred, not patent-published. |
| Analysis labels | Older H-ZF13 / H-LAK53A / S-LAH55 wording | S-TIM28 / S-LAL18 / NBFD15 wording | Synced analysis to the already-updated data labels. |

### Retained decisions

- L18, L21, and L31 remain `516565` PGM moldable crown annotations; no exact public coefficient-backed match was found.
- Existing estimated SDs remain in place because the patent lacks clear-aperture data. The current proportions remain rational for the drawing: large front collector, smaller post-stop focus group, and modest rear-field group.
