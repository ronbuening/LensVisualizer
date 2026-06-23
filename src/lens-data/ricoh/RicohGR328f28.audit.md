# Audit Log - Ricoh GR III 18.3mm f/2.8

Patent: US 2019/0154946 A1

## 2026-06-23 - Patent table, Pg,F, and SD review

- Local `patents/` did not contain the cited US 2019/0154946 A1 PDF. For this audit, the publication was downloaded to `tmp/pdfs/US20190154946A1.pdf` from Google Patents and rendered for visual verification.
- Verified Example 5 / FIG. 23: f = 18.28 mm, F = 2.87, half-field = 38.2 deg. The table rows match the data file radii, spacings, glass names, nd/vd values, and Pg,F values. The filter row is correctly omitted from `surfaces` and included in the back-focus path.

| Element | Patent glass / Pg,F | Data-file disposition |
|---|---|---|
| L11 | OHARA L-BSL7 / 0.5333 | Backfilled `dPgF: -0.00275`; not APD; PGM by L-prefix. |
| L12 | OHARA S-TIM27 / 0.5922 | Backfilled `dPgF: +0.00638`; not APD. |
| L13, L21 | HOYA TAFD33 / 0.5701 | Backfilled `dPgF: -0.00618`; not APD; high-index glass retained. |
| L22 | OHARA S-TIM35 / 0.6030 | Backfilled `dPgF: +0.00988`; not APD. |
| L23 | HOYA M-TAFD307 / 0.5769 | Labeled `882372 - HOYA M-TAFD307` as a future-upgrade code; backfilled `dPgF: -0.00430`; not APD; PGM status retained. |

- The patent does not publish semi-diameters. Existing SDs remain estimates. They were checked against FIG. 5 / FIG. 23 proportions: compact front group, matched cemented doublet apertures, smaller stop, and larger rear double-asphere apertures are consistent with the drawing and the known APS-C field.
- No analysis-file correction was required for the prescription, but the data file now exposes the patent Pg,F-derived dPgF values.
