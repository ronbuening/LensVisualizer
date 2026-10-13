# Audit Log — Minolta MD 135mm f/2.8

Patent figure: `US4214816.pdf, p. 2 Fig. 1 (Example 1, scaled 1.35x)` in local `patents/`.

## 2026-09-27 — Source figure, glass, and metadata audit

### Semi-diameters

The exact source section was inspected at 600 dpi. Optical curve endpoints, not rectangular blank shoulders, leaders, rays, or movement arrows, control the comparison. Values remain estimates rather than published clear apertures.

No SD change. Manual optical-rim review found no defensible large discrepancy; smaller differences are within figure/scale uncertainty. Automated outliers were leader/bracket ink or mechanical shoulders, so they were rejected. Cemented interfaces and stepped rims were inspected individually.

### Glass classification

Catalog curves are coordinate-compatible spectral proxies, not evidence of production suppliers or historical melts. Patent nd/vd values are unchanged.

| Element | nd / vd | Runtime catalog curve |
|---|---|---|
| L1 | 1.6073 / 59.5 | K-SK7 |
| L2 | 1.67 / 57.1 | S-LAL52 |
| L3 | 1.6727 / 32.2 | SF5 |
| L4 | 1.7552 / 27.5 | SF4 |
| L5 | 1.8052 / 25.4 | SF6 |

L2: unresolved 670571 → S-LAL52 proxy (catalog nd=1.669999, vd=57.327972), retaining patent 1.6700/57.1. The existing catalog coefficients provide a close compatible curve; this is not a historical supplier attribution.

### Display and metadata

Normalized display capitalization and retained distinguishing product suffixes. Patent-to-production correlation remains qualified. Assignee spelling follows the existing catalog identity.

### Local-site re-review — 2026-09-27

Compared the rendered local-site diagram directly with the exact local patent figure cited above, including optical rims, element order, aspheric marks, cemented membership, labels, and glass colors. Existing SDs are retained: no further optical-rim discrepancy warrants enlarging apertures into source blank shoulders, bevels, or constrained aspheric rims.

The five separate elements, all-spherical tags, numeric labels, stop behind L4, and single rear element agree with Fig. 1 at 1.35x scale. No zoom applies; focus stays disabled because no focus-moving spacing is published. L1 now names the actual K-SK7 (SUMITA) runtime proxy instead of the ambiguous SK7-class label. All five elements retain catalog coverage, without claiming original suppliers.

Validation: surface, image-circle, and traced field-coverage audits passed. The batch render sweep covered 918 zoom/focus states with zero hidden rim trim; catalog consistency and mismatch checks passed. Full typecheck, formatting, lint, 287 test files / 2,833 tests, and production build passed. The existing changelog is unchanged. Fuji capitalization and Minolta translated corporate-style aliases now have shared metadata regression guards; distinct historical entities remain separate.
