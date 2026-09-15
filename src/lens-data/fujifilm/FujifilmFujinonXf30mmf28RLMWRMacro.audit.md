# FUJIFILM FUJINON XF 30mm f/2.8 R LM WR Macro — integration audit

## 2026-09-15 (UTC)

### Patent geometry

Source: local untracked `patents/CN116500768A.pdf`, PDF page 47, Fig. 1; inspected at 600 dpi.

Retained all SDs. At 600 dpi, the clean front, middle and rear rims are within approximately 4–16% of the existing element maxima. The automated 12.27 mm readings for G2 are annotation/bracket contamination: the optical component widths in the zoom are approximately 950–1030 px, or 8.8–9.6 mm at 18.56 µm/px, rather than the bracket extent. No strong discrepancy remains after separating glass from figure ink.

### Glass classification

The patent nd/νd coordinates are retained. The following existing catalog curves pass the shared coordinate guard; they are dispersion proxies, not evidence of a production supplier or historical melt. No complete per-element nC/nF/ng or unsupported partial-dispersion values were introduced. All 11 elements resolve; no additional catalog type is required.

| Element | Patent nd / νd | Runtime curve | Catalog minus patent nd / νd |
| --- | --- | --- | --- |
| L11 | 1.58254 / 59.44 | L-BAL42 | 0.000586 / -0.054 |
| L12 | 1.51633 / 64.14 | S-BSL7 | 0.000000 / 0.000 |
| L13 | 1.80611 / 33.29 | J-LASFH6 | -0.000010 / 0.055 |
| L14 | 1.497 / 81.54 | FCD1 | 0.000000 / 0.070 |
| L15 | 1.77047 / 29.74 | NBFD29 | 0.000000 / 0.000 |
| L16 | 1.497 / 81.54 | FCD1 | 0.000000 / 0.070 |
| L17 | 1.6935 / 53.2 | M-LAC130 | 0.000000 / 0.000 |
| L21 | 1.98613 / 16.48 | FDS16-W | -0.000010 / 0.000 |
| L22 | 1.6727 / 32.17 | H-ZF2 | 0.000000 / 0.000 |
| L23 | 1.883 / 39.22 | H-ZLaF68N | 0.000000 / 0.000 |
| L31 | 1.51633 / 64.06 | S-BSL7 | 0.000000 / 0.080 |

### Metadata and verification

Display names follow the catalog's uppercase manufacturer/line convention. Canonical maker and assignee spelling and romanized inventor names are used while the analysis preserves source wording and qualified production correlations.

Surface audit passes. Image-circle audit reports no undersized surfaces. See the shared corpus checks for geometry, metadata, runtime dispersion, and render diagnostics; no per-lens test was added.

Final verification: `npm run typecheck`, `npm run format:check`, `npm run lint`, `npm test` (274 files / 2,695 tests), and `npm run build` (1,340 prerendered routes) passed. The local browser cross-section and display/focus labels were inspected against the patent figure. `npm run generate:glass-reports` passed with zero catalog-coordinate mismatches.
