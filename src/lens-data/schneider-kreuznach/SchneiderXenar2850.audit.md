# Audit Log — schneider-kreuznach-xenar-50f28

## 2026-09-28 — Patent figure, glass, and metadata audit

Source: `patents/DE_753329_C.pdf`, PDF p. 3, Fig. 1 (Zahlentafel 1). Original prescription coordinates were checked visually against the source table; published radii, axial spacings, indices, Abbe numbers and image-plane distances are preserved.

### Optical rims

600 dpi crop: 0.34,0.16,0.52,0.29; axis 0.225. Excludes the axis arrow and Fig. 2 designation schematic. Scale ≈22.22 µm/pixel; inferred SDs ≈9.5, 9.0, 8.0 and 8.1 mm. All existing rims are within about 10%; retained, including the cemented rear pair.

Stop diameter and inferred stop location are unchanged. No focus-motion law is added.

### Glass classification

| Element | Before resolution | After resolution | Patent nd / νd |
| --- | --- | --- | --- |
| L1 | S-BAL35 | S-BAL35 | 1.589 / 61.2 |
| L2 | Abbe fallback | S-BSM18 | 1.6375 / 56.1 |
| L3 | Abbe fallback | F5 | 1.6045 / 37.8 |
| L4 | Abbe fallback | KF3 | 1.5145 / 54.7 |
| L5 | Abbe fallback | N-SK14 | 1.6025 / 59.5 |

Resolved catalog curves are qualified spectral proxies. They do not identify historical suppliers or melts. No patent coordinates are changed and no catalog line indices or anomalous-dispersion flags are copied into the lens data. The analysis glass table is synchronized.

Image-circle floor audit is skipped because imageFormat is unset; production-variant uncertainty is preserved rather than inventing format metadata.

The source says only “yellow ray.” Catalog comparisons use the existing d-line schema approximation, not independently verified He-d provenance.

### Metadata and display

Existing display name retained; product correlation remains qualified in the analysis.

### Local diagram follow-up

Rechecked the local-site SVG against the exact patent figure cited above, including optical rims, element order, labels and glass colors. Retained the reviewed SDs: the optical silhouette is consistent within drawing/measurement uncertainty, excluding bevels, leaders and mechanical extensions. All elements are spherical; there is no source evidence for ED or anomalous-dispersion tags. The focus control is disabled and no focal-length zoom slider is present. This fixed prescription supplies no focus/zoom endpoints whose direction could be reversed. User-facing focus text now states the modeling limit in plain language.

Retained the source-title-sheet assignee Jos. Schneider & Co., Optotechnische Gesellschaft rather than merging a distinct historical legal style into Optische Werke. A sourced Schneider-Kreuznach corporate-family link consolidates their lineage in the assignee catalog.
