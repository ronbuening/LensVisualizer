# Audit Log — Minolta MD 50mm f/2

Patent figure: `US4444473.pdf, p. 6 Fig. 9 (Example 5, scaled 0.5x)` in local `patents/`.

## 2026-09-27 — Source figure, glass, and metadata audit

### Semi-diameters

The exact source section was inspected at 600 dpi. Optical curve endpoints, not rectangular blank shoulders, leaders, rays, or movement arrows, control the comparison. Values remain estimates rather than published clear apertures.

No SD change. Manual optical-rim review found no defensible large discrepancy; smaller differences are within figure/scale uncertainty. Automated outliers were leader/bracket ink or mechanical shoulders, so they were rejected. Cemented interfaces and stepped rims were inspected individually.

### Glass classification

Catalog curves are coordinate-compatible spectral proxies, not evidence of production suppliers or historical melts. Patent nd/vd values are unchanged.

| Element | nd / vd | Runtime catalog curve |
|---|---|---|
| L1 | 1.72 / 50.3 | LAC10 |
| L2 | 1.72 / 50.3 | LAC10 |
| L3 | 1.683 / 32.1 | Unresolved; patent-coordinate fallback |
| L4 | 1.6545 / 33.9 | SF9 |
| L5 | 1.72 / 52.1 | Unresolved; patent-coordinate fallback |
| L6 | 1.744 / 44.9 | H-LaF3B |

L4: unresolved 655339 → SF9 proxy (catalog nd=1.65446, vd=33.855439), retaining patent 1.6545/33.9. L3 has no compatible existing curve; L5 near-candidates differ by about 1.75 in vd and remain insufficiently supported.

### Display and metadata

Normalized display capitalization and retained distinguishing product suffixes. Patent-to-production correlation remains qualified. Assignee spelling follows the existing catalog identity.

### Local-site re-review — 2026-09-27

Compared the rendered local-site diagram directly with the exact local patent figure cited above, including optical rims, element order, aspheric marks, cemented membership, labels, and glass colors. Existing SDs are retained: no further optical-rim discrepancy warrants enlarging apertures into source blank shoulders, bevels, or constrained aspheric rims.

The six-element/five-group silhouette and L4/L5 cemented bracket agree with Fig. 9 at 0.5x scale. The small source bevels are mechanical edge outlines, not additional optical surfaces. No zoom applies; focus stays disabled because Example 5 has no finite-focus spacing law. L3 (683321) and L5 (720521) remain unresolved; nearby old HOYA candidates do not support a confident spectral identification. Coverage remains 4/6.

Validation: surface, image-circle, and traced field-coverage audits passed. The batch render sweep covered 918 zoom/focus states with zero hidden rim trim; catalog consistency and mismatch checks passed. Full typecheck, formatting, lint, 287 test files / 2,833 tests, and production build passed. The existing changelog is unchanged. Fuji capitalization and Minolta translated corporate-style aliases now have shared metadata regression guards; distinct historical entities remain separate.
