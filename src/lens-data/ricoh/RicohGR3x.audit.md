# Audit Log - Ricoh GR IIIx 26.1mm f/2.8

Patent: US 2022/0026670 A1

## 2026-06-23 - Local patent glass/Pg,F and SD review

- Local patent source: `patents/US20220026670A1.pdf` (untracked local file), Example 3.
- Verified the Example 3 prescription table against the data file: f = 26.05 mm, F = 2.87, half-field = 28.3 deg. The existing S2 radius OCR correction (`224.908` -> `24.908`) is confirmed by focal-length consistency and the table structure.
- The patent row for L5 remains internally corrupted: the scan duplicates the L4 glass name/Pg,F even though the nd/vd values are different. The file therefore keeps the nd/vd-derived `OHARA 755523 (TaC6)` annotation and intentionally does not backfill dPgF for L5.

| Element | Patent glass / Pg,F | Data-file disposition |
|---|---|---|
| L1 | OHARA L-LAH85V / 0.5688 | Backfilled `dPgF: -0.00708`; not APD; PGM status retained. |
| L2 | OHARA S-NBH58 / 0.6002 | Backfilled `dPgF: +0.00492`; not APD. |
| L3 | OHARA S-TIM27 / 0.5922 | Backfilled `dPgF: +0.00638`; not APD. |
| L4 | OHARA S-LAH58 / 0.5667 | Backfilled `dPgF: -0.00854`; not APD. |
| L5 | Corrupted glass/Pg,F row | No dPgF added; retained six-digit 755523 / TaC6-class annotation from nd/vd. |
| L6 | OHARA S-TIL6 / 0.5602 | Backfilled `dPgF: +0.00145`; not APD. |
| L7 | OHARA L-LAH86 / 0.5943 | Labeled `903310 - OHARA L-LAH86`; backfilled `dPgF: +0.00264`; not APD; PGM status retained. |

- The patent does not publish semi-diameters. Existing SDs remain estimates. The SD progression was checked against the drawing and prescription: the larger front cemented group, smaller stop, compact rear cemented group, and larger rear aspheric L7 aperture are coherent for the 40 mm-equivalent APS-C design.
- Companion analysis was updated to document the Pg,F backfill and the intentional L5 exclusion.
