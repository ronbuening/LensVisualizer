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

## 2026-09-09 — First-added audit, lens34

Original Table3 PDFp32 and Figure3 PDFp4 at600dpi reviewed. BF16.478→16.0012818714 uses 1.40/1.51633 equivalent air for the excluded filter. Unlisted post-filter0.70mm remains explicitly reconstructed (matrix confirms within0.000029mm), not published. Near BF20.38→20.8564680966 solves assumed20cm unit focus; nominal aperture2.8→2.87. All radii, glass coordinates, isolated FLs and published asphere coefficients retained. S2radius24.908 remains an inferred malformed-row repair; S12 spherical fallback remains unresolved. Header and focus description disclose assumptions. SDs retained within drawing tolerance; surface/image-circle/no-hidden-trim checks pass. L5TaC6 identity replaced by compatible J-LASKH2. Other names are explicitly patent-listed; unsupported processing/chemistry claims removed. Correction to June log: actual Pg,F values for L2/L6 are0.6009/0.5631; existing runtime dPgF values already correct. Production baseline inspected; local infinity/near/half-slider, f/16 and motion-chart review completed (BF16.00→20.86mm, half18.43mm, travel4.86mm, stopped-down stop1.32mm). Three regression tests pass; batch gates pending.
