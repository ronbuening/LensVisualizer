# ZEISS BATIS 85mm f/1.8 — integration audit

## 2026-09-15 (UTC)

### Patent geometry

Source: local untracked `patents/JP2015096915A.pdf`, PDF page 35, Fig. 6; inspected at 600 dpi.

S18–S20: 12.35 → 15.8 mm, matching the rear cemented component (about 650 px full height at 47.52 µm/px). S22: 13.678 → 16.8 mm. S21: 12.652 → 14.5 mm; the approximately 16.3 mm figure-sized candidate overlapped the preceding gap under the validator. S5/S6: 16.34 → 16.0 mm, allowing removal of gapSagFrac = 0.95 and passing the default 0.90 policy. The VC bracket is not an optical rim; ignore the automated 22.14 mm L8 reading.

### Glass classification

The patent nd/νd coordinates are retained. The following existing catalog curves pass the shared coordinate guard; they are dispersion proxies, not evidence of a production supplier or historical melt. No complete per-element nC/nF/ng or unsupported partial-dispersion values were introduced. All 11 elements resolve; no additional catalog type is required.

| Element | Patent nd / νd | Runtime curve | Catalog minus patent nd / νd |
| --- | --- | --- | --- |
| L1 | 1.9037 / 31.31 | N-LASF46B | -0.000040 / 0.010 |
| L2 | 1.497 / 81.61 | H-FK61 | 0.000000 / 0.003 |
| L3 | 1.7408 / 27.76 | E-FD13 | -0.000030 / 0.000 |
| L4 | 1.6584 / 50.85 | BACED5 | 0.000040 / 0.010 |
| L5 | 1.4875 / 70.44 | H-QK3L | -0.000010 / 0.000 |
| L6 | 1.7847 / 25.72 | H-ZF13 | 0.000020 / 0.000 |
| L7 | 1.5928 / 68.62 | FCD515 | 0.000020 / 0.010 |
| L8 | 1.8042 / 46.5 | N-LASF44 | 0.000000 / 0.000 |
| L9 | 1.8061 / 33.27 | J-LASFH6 | 0.000000 / 0.075 |
| L10 | 1.4875 / 70.44 | H-QK3L | -0.000010 / 0.000 |
| L11 | 1.5182 / 58.96 | S-NSL3 | 0.000029 / -0.058 |

### Metadata and verification

Display names follow the catalog's uppercase manufacturer/line convention. Canonical maker and assignee spelling and romanized inventor names are used while the analysis preserves source wording and qualified production correlations.

Surface audit passes. Image-circle audit reports no undersized surfaces. See the shared corpus checks for geometry, metadata, runtime dispersion, and render diagnostics; no per-lens test was added.

Inventor romanization corroboration: [Hirofumi Tabata](https://patents.google.com/patent/JP2017026716A/en) and [Yasuhiko Obikane](https://patents.google.com/patent/JP2017040874A/en) identify the same Japanese-script names in Tamron publications.

Final verification: `npm run typecheck`, `npm run format:check`, `npm run lint`, `npm test` (274 files / 2,695 tests), and `npm run build` (1,340 prerendered routes) passed. The local browser cross-section and display/focus labels were inspected against the patent figure. `npm run generate:glass-reports` passed with zero catalog-coordinate mismatches.
