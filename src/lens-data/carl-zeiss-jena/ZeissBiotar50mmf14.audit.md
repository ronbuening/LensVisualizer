# CARL ZEISS JENA BIOTAR 50mm f/1.4 — integration audit

## 2026-09-15 (UTC)

### Patent geometry

Source: local untracked `patents/US1786916.pdf`, PDF page 1, Fig. 2; inspected at 600 dpi.

Retained all SDs. Inspected the exact Example 2 scan at 600 dpi, including the beveled inner components. Two automated crops were contaminated by lettering and touched the measured span edge, so their scale estimates were rejected. No reliable evidence supports enlarging the inner optical rims to the flat mechanical shoulders. The source remains scaled uniformly by 0.5. Image-circle audit is skipped because the production image format is not established; no format was invented.

### Glass classification

The patent nd/νd coordinates are retained. The following existing catalog curves pass the shared coordinate guard; they are dispersion proxies, not evidence of a production supplier or historical melt. No complete per-element nC/nF/ng or unsupported partial-dispersion values were introduced. All 6 elements resolve; no additional catalog type is required.

| Element | Patent nd / νd | Runtime curve | Catalog minus patent nd / νd |
| --- | --- | --- | --- |
| L1 | 1.64238 / 48 | BAF9 | 0.000900 / -0.200 |
| L2 | 1.62306 / 56.9 | N-SK10 | -0.000280 / 0.080 |
| L3 | 1.57566 / 41.2 | QF3 | -0.000640 / 0.110 |
| L4 | 1.6727 / 32.2 | SF5 | 0.000000 / 0.010 |
| L5 | 1.64238 / 48 | BAF9 | 0.000900 / -0.200 |
| L6 | 1.64238 / 48 | BAF9 | 0.000900 / -0.200 |

### Metadata and verification

Display names follow the catalog's uppercase manufacturer/line convention. Canonical maker and assignee spelling and romanized inventor names are used while the analysis preserves source wording and qualified production correlations.

Surface audit passes. Image-circle audit cannot establish coverage without a source-supported image format. See the shared corpus checks for geometry, metadata, runtime dispersion, and render diagnostics; no per-lens test was added.

The prewar Jena origin is explicit in the patent heading. The maker and display prefix use Carl Zeiss Jena, consistent with the existing prewar Sonnar records; this is not an Oberkochen-era design.

Final verification: `npm run typecheck`, `npm run format:check`, `npm run lint`, `npm test` (274 files / 2,695 tests), and `npm run build` (1,340 prerendered routes) passed. The local browser cross-section and display/focus labels were inspected against the patent figure. `npm run generate:glass-reports` passed with zero catalog-coordinate mismatches.
