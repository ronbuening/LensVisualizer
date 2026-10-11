# Audit Log — Minolta Auto Tele Rokkor-PF 100mm f/2

Patent figure: `JPB 1963011590-000000.pdf, p. 3 Fig. 1 (shared schematic; Example 2 prescription)` in local `patents/`.

## 2026-09-27 — Source figure, glass, and metadata audit

### Semi-diameters

The exact source section was inspected at 600 dpi. Optical curve endpoints, not rectangular blank shoulders, leaders, rays, or movement arrows, control the comparison. Values remain estimates rather than published clear apertures.

No SD change. Manual optical-rim review found no defensible large discrepancy; smaller differences are within figure/scale uncertainty. Automated outliers were leader/bracket ink or mechanical shoulders, so they were rejected. Cemented interfaces and stepped rims were inspected individually.

Fig. 1 is a shared architectural schematic rather than an Example-2-specific dimensioned section. Its proportions support the retained silhouette but do not justify numerically forcing an exact fit.

### Glass classification

Catalog curves are coordinate-compatible spectral proxies, not evidence of production suppliers or historical melts. Patent nd/vd values are unchanged.

| Element | nd / vd | Runtime catalog curve |
|---|---|---|
| L1 | 1.67975 / 55.7 | Unresolved; patent-coordinate fallback |
| L2 | 1.68287 / 31.5 | Unresolved; patent-coordinate fallback |
| L3 | 1.67975 / 55.7 | Unresolved; patent-coordinate fallback |
| L4 | 1.66797 / 35.8 | Unresolved; patent-coordinate fallback |
| L5 | 1.57526 / 39.1 | Unresolved; patent-coordinate fallback |
| L6 | 1.70442 / 40.8 | Unresolved; patent-coordinate fallback |

The six vintage coordinates remain unresolved. Current LAC12-class candidates differ by about 0.00185 in nd from L1/L3; L6 candidates sit near the index tolerance boundary. No source uniquely establishes those substitutions; L2/L4/L5 have no compatible existing row. Exact-coordinate/source searches did not yield a sourceable new dispersion curve.

### Display and metadata

Normalized display capitalization and retained distinguishing product suffixes. Patent-to-production correlation remains qualified. Assignee spelling follows the existing catalog identity.

Restored the Auto Tele Rokkor-PF product suffix and romanized 仁藤 忠芳 as Tadayoshi Nito. The Japanese spelling remains in the analysis reference.

### Local-site re-review — 2026-09-27

Compared the rendered local-site diagram directly with the exact local patent figure cited above, including optical rims, element order, aspheric marks, cemented membership, labels, and glass colors. Existing SDs are retained: no further optical-rim discrepancy warrants enlarging apertures into source blank shoulders, bevels, or constrained aspheric rims.

The static six-element/five-group silhouette, cemented D1 bracket, and numeric element labels agree with the shared Fig. 1 topology. No zoom applies; focus stays disabled at the published infinity prescription. The source does not supply a finite-focus spacing law. All six historical glasses remain unresolved; the reviewed HOYA current/obsolete catalog offers no sufficiently close, independently supported full spectral identification. Merely fitting the broad resolver tolerance was not treated as evidence.

Validation: surface, image-circle, and traced field-coverage audits passed. The batch render sweep covered 918 zoom/focus states with zero hidden rim trim; catalog consistency and mismatch checks passed. Full typecheck, formatting, lint, 287 test files / 2,833 tests, and production build passed. The existing changelog is unchanged. Fuji capitalization and Minolta translated corporate-style aliases now have shared metadata regression guards; distinct historical entities remain separate.

## 2026-10-11 — Patent number in catalog form

`patentNumber` is now `JP 1963-011590 B` (was `JP1963-011590`): 特公昭38-11590, published 1963-07-08, an examined patent publication, so kind code B. Written without a space after the country code, the number was not recognised as a publication number: the site showed it as plain text with no Espacenet link and listed it under "Other jurisdictions" instead of Japan. `subtitle`, the header comment and the analysis use the same form. No optical value changed.
