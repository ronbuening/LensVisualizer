# Audit Log — CARL ZEISS JENA PRAKTICAR 50mm f/1.4

Patent: GB 2 066 504 A; GB 2 066 504 A Example 4 — strong PRAKTICAR 1.4/50 correlation; exact production-example attribution not manufacturer-confirmed

## 2026-09-16 — Patent geometry, glass, and metadata

### Retained-information and optical-rim review

Exact local source: `patents/GB2066504A.pdf`, PDF page 2, Fig. 1; Table 4 on page 8.

Retained SDs. The general schematic gives 21.5/17.0/14.0 mm for the first three members and approximately 15.3 mm rear rims. Most differences are near the drawing uncertainty and this single family drawing does not specifically dimension Example 4. The apparent rear reduction is insufficient evidence to override the modeled clear apertures.

### Glass classification

Native e-line coordinates are preserved; catalog curves are evaluated at C′/e/F′. Six-digit d-line codes alone do not resolve these elements.

| Element | Patent index / Abbe | Runtime curve |
|---|---|---|
| L1 | 1.681 / 54.7 (e) | K-LaK12 |
| L2 | 1.7007 / 46.7 (e) | Unresolved |
| L3 | 1.7462 / 27.9 (e) | S-TIH3 |
| L4a | 1.7617 / 27.3 (e) | S-TIH4 |
| L4b | 1.7762 / 49.4 (e) | N-LAF34 |
| L5 | 1.7762 / 49.4 (e) | N-LAF34 |
| L6 | 1.7762 / 49.4 (e) | N-LAF34 |

The listed curves are catalog proxies; production identities remain unproven. Unresolved coordinates were checked against the current catalog and public glass-code/index searches; no sufficiently evidenced new curve was recovered for them. Source coordinates, spectral reference, radii, and axial spacings are retained.

### Metadata and analysis

Retained manufacturer-facing PRAKTICAR rather than the job-card Planar name. Added missing K-LaK12 from the official SUMITA datasheet (Ver. 14.01.00, A0–A5); compatible e-line proxy, not a supplier attribution. Source: https://www.sumita-opt.co.jp/abbe/pdf/k-lak12.pdf.

Companion analysis now lists the actual runtime glass curves and preserves source-versus-model limitations.

## 2026-09-16 — Local-site diagram and controls review

Reviewed the live SVG against the exact local patent figure cited above, including glass bodies, cemented interfaces, element identifiers, dispersion colors, and aperture/stop annotations. The model is a prime; no zoom travel is authored. Infinity prescription only; the patent gives no focus travel. The production lens focuses to 0.36 m.

Glass labels now name the actual selected catalog curve and explicitly separate the dispersion proxy from historical supplier identity. The selected curves have no positive ΔPgF large enough to justify an inferred APD tag; unsupported APD tags were not added.

Additional compatible curves (catalog minus source coordinates):

| Element | Patent index / Abbe | Runtime curve | Δn | Δν |
|---|---|---|---|---|
| L2 | 1.7007 / 46.7 (e) | LAFN2 | -0.000279 | 1.475 |

A second, closer inspection supersedes the initial decision to retain the final member's aperture. At 600 dpi, Fig. 1 gives L6 envelope/rim SDs of 15.27/15.29 mm. Surfaces 12–13 now use 15.3 mm instead of 19 mm. Sampled full-aperture on-axis rays remain clear. Other SDs remain unchanged because the family drawing does not independently dimension Example 4. Diagram identifiers now consistently follow L1–L6, including L4a/L4b for the cemented pair.
