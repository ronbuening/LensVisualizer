# FUJIFILM FUJINON XF 27mm f/2.8 — integration audit

## 2026-09-15 (UTC)

### Patent geometry

Source: local untracked `patents/US20160011404A1.pdf`, PDF page 4, Fig. 5; inspected at 600 dpi.

Retained all SDs. At 600 dpi and 16.43 µm/px, L11/L23/L31/L32 optical envelopes are approximately 6.1/6.2/8.8/10.8 mm, broadly consistent with the existing silhouette. Rays contaminate ENV and the thin cemented interfaces under-read in RIM. L23 retains its existing 5.06 mm front-rim slope constraint. No reliable >25% optical-rim discrepancy justifies changing the current geometry.

### Glass classification

The patent nd/νd coordinates are retained. The following existing catalog curves pass the shared coordinate guard; they are dispersion proxies, not evidence of a production supplier or historical melt. No complete per-element nC/nF/ng or unsupported partial-dispersion values were introduced. All 7 elements resolve; no additional catalog type is required.

| Element | Patent nd / νd | Runtime curve | Catalog minus patent nd / νd |
| --- | --- | --- | --- |
| L11 | 1.5927 / 35.3 | S-FTM16 | 0.000001 / 0.010 |
| L12 | 1.883 / 40.8 | S-LAH58 | -0.000003 / -0.035 |
| L21 | 1.5927 / 35.3 | S-FTM16 | 0.000001 / 0.010 |
| L22 | 1.72916 / 54.7 | TAC8 | 0.000000 / -0.030 |
| L23 | 1.58313 / 59.5 | M-BACD12 | 0.000000 / -0.040 |
| L31 | 1.80518 / 25.4 | S-TIH6 | 0.000001 / 0.025 |
| L32 | 1.90366 / 31.3 | J-LASFH13 | 0.000000 / -0.026 |

### Metadata and verification

Display names follow the catalog's uppercase manufacturer/line convention. Canonical maker and assignee spelling and romanized inventor names are used while the analysis preserves source wording and qualified production correlations.

Surface audit passes. Image-circle audit reports no undersized surfaces. See the shared corpus checks for geometry, metadata, runtime dispersion, and render diagnostics; no per-lens test was added.

Final verification: `npm run typecheck`, `npm run format:check`, `npm run lint`, `npm test` (274 files / 2,695 tests), and `npm run build` (1,340 prerendered routes) passed. The local browser cross-section and display/focus labels were inspected against the patent figure. `npm run generate:glass-reports` passed with zero catalog-coordinate mismatches.
