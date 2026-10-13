# Audit Log — CARL ZEISS JENA FLEKTOGON 50mm f/4

Patent: DE 1 157 000; DE 1 157 000 Example 1 — ×0.5 scaled patent model; production correlation inferred

## 2026-09-16 — Patent geometry, glass, and metadata

### Retained-information and optical-rim review

Exact local source: `patents/DE_1157000_B.pdf`, PDF page 4, Fig. 1.

At 600 dpi, the front pair measures 36.7–37.0 mm against 38.5 mm authored; retained within figure uncertainty. The isolated rear meniscus rim measures 15.6 mm. Its faces 6/7 change from 13/8.8 to 15.5/15.5 mm. Rear-triplet leader lines contaminate the automated L5 result; actual glass rims remain near 12 mm, so the triplet is retained.

| Surface | Previous SD (mm) | Revised SD (mm) |
|---|---:|---:|
| 6 | 13 | 15.5 |
| 7 | 8.8 | 15.5 |

### Glass classification

The patent refractive indices and Abbe numbers are retained. Catalog curves are coordinate-compatible dispersion proxies, not evidence of the historical supplier or production melt.

| Element | Patent index / Abbe | Runtime curve |
|---|---|---|
| L1 | 1.69806 / 53.6 (d) | Unresolved |
| L2 | 1.54212 / 59.6 (d) | Unresolved |
| L3 | 1.68169 / 41.9 (d) | Unresolved |
| L4 | 1.68169 / 41.9 (d) | Unresolved |
| L5 | 1.67254 / 32.2 (d) | SF5 |
| L6 | 1.5004 / 65.2 (d) | BK4 |
| L7 | 1.68078 / 47.2 (d) | Unresolved |

The listed curves are catalog proxies; production identities remain unproven. Unresolved coordinates were checked against the current catalog and public glass-code/index searches; no sufficiently evidenced new curve was recovered for them. Source coordinates, spectral reference, radii, and axial spacings are retained.

### Metadata and analysis

Retained the source-correlated display name and its explicit attribution uncertainty.

Companion analysis now lists the actual runtime glass curves and preserves source-versus-model limitations.

## 2026-09-16 — Local-site diagram and controls review

Reviewed the live SVG against the exact local patent figure cited above, including glass bodies, cemented interfaces, element identifiers, dispersion colors, and aperture/stop annotations. The model is a prime; no zoom travel is authored. Infinity prescription only; the patent gives no focus travel. The production lens focuses to 0.50 m.

Glass labels now name the actual selected catalog curve and explicitly separate the dispersion proxy from historical supplier identity. The selected curves have no positive ΔPgF large enough to justify an inferred APD tag; unsupported APD tags were not added.

Additional compatible curves (catalog minus source coordinates):

| Element | Patent index / Abbe | Runtime curve | Δn | Δν |
|---|---|---|---|---|
| L1 | 1.69806 / 53.6 (d) | N-LAK14 | -0.001260 | 1.810 |
| L2 | 1.54212 / 59.6 (d) | BAK2 | -0.002158 | 0.100 |

The patent's first page names Jenoptik Jena G.m.b.H. Canonical metadata now uses Jenoptik Jena GmbH, with a spelling guard against the punctuation variant. It is not merged into VEB Carl Zeiss Jena: the source names a distinct legal entity. SDs remain unchanged after the direct figure comparison.
