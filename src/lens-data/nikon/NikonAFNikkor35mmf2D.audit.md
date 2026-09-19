# Audit Log — NIKON AF NIKKOR 35mm f/2D

## 2026-09-19 — Patent figure, glass, and integration audit

Source: `patents/JP2021036283A.pdf`, PDF page 34; JP 2021-36283 A Ex.1 — strong form correlation; attribution unconfirmed; patent unit focus differs from Nikon RF.

### Semi-diameters

600 dpi screening: crop `0.18,0.225,0.335,0.365` --rot90. Optical rims were inspected visually; labels, ray bundles, group brackets, and mechanical flanges were excluded.

Retained SDs. Figure/data ratios are 1.02–1.13 after rejecting labels, within the 15% measurement band; no justified silhouette correction. Table 1 partial-dispersion ratios 0.5360/0.5548/0.5599/0.6115/0.5465/0.5501 are now represented as dPgF = theta_gF − (0.6438 − 0.001682*vd), using the runtime baseline rather than the patent condition baseline. This preserves source spectral information without inventing C/F/g indices. L2/L4/L6 remain unmatched; N-SF6 is explicitly rejected by partial dispersion.

### Glass

Patent nd/vd values are unchanged. Catalog names denote supplier-neutral spectral proxies.

| Element | nd / vd | Disposition |
|---|---|---|
| L1 | 1.5168 / 64.12 | J-BK7A-class (coordinate-compatible spectral proxy; supplier unproven) |
| L2 | 1.78797 / 47.17 | Unmatched (788472 class; patent partial dispersion retained as dPgF) |
| L3 | 1.53172 / 48.96 | PBL6Y-class (coordinate-compatible spectral proxy; supplier unproven) |
| L4 | 1.80518 / 25.35 | Unmatched (805254 class; SF6-like nd/νd but partial dispersion incompatible) |
| L5 | 1.7481 / 52.28 | E-LAKH1-class (coordinate-compatible spectral proxy; supplier unproven) |
| L6 | 1.68348 / 54.8 | Unmatched (683548 class; patent partial dispersion retained as dPgF) |

### Metadata and validation

Reviewed display formatting and romanized inventor metadata against existing canonical catalog names. Production correlations remain qualified; patent designs are not asserted to be manufacturer-confirmed production prescriptions. Surface audits pass. The image-circle audit reports no undersized surfaces.
