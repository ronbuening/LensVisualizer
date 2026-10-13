# Audit Log — CARL ZEISS JENA FLEKTOGON 20mm f/4

Patent: GB 978,797; GB 978,797 Example 1 — strong Flektogon 4/20 correlation; attribution not manufacturer-confirmed

## 2026-09-16 — Patent geometry, glass, and metadata

### Retained-information and optical-rim review

Exact local source: `patents/GB_978797_A.pdf`, PDF page 6, sole drawing.

The optical rims imply approximately 29/19/14 mm front envelopes, a 10 mm central doublet and a 5.9 mm following doublet. Leader lines inflate automated rear readings to 10–12 mm and are excluded. Rear faces 4 and 6 are limited to 12 and 8.6 mm by spherical domain and gap clearance; the schematic cannot override those constraints.

| Surface | Previous SD (mm) | Revised SD (mm) |
|---|---:|---:|
| 1 | 23.2 | 29 |
| 2 | 21 | 29 |
| 3 | 15.1 | 19 |
| 4 | 11.6 | 12 |
| 5 | 9.5 | 13 |
| 6 | 7.3 | 8.6 |
| 7 | 5.6 | 10 |
| 8 | 5.1 | 10 |
| 9 | 5 | 10 |
| 10 | 5.2 | 5.9 |
| 11 | 5 | 5.9 |
| 12 | 5 | 5.9 |

### Glass classification

The patent refractive indices and Abbe numbers are retained. Catalog curves are coordinate-compatible dispersion proxies, not evidence of the historical supplier or production melt.

| Element | Patent index / Abbe | Runtime curve |
|---|---|---|
| L1 | 1.6935 / 53.6 (d) | S-LAL13 |
| L2 | 1.6935 / 53.6 (d) | S-LAL13 |
| L3 | 1.6935 / 53.6 (d) | S-LAL13 |
| L4 | 1.62 / 60.3 (d) | N-SK16 |
| L5 | 1.55 / 45.4 (d) | Unresolved |
| L6 | 1.728 / 38 (d) | Unresolved |
| L7 | 1.61 / 38 (d) | Unresolved |
| L8 | 1.678 / 32.2 (d) | Unresolved |
| L9 | 1.516 / 56.8 (d) | C2 |
| L10 | 1.678 / 50.8 (d) | Unresolved |

The listed curves are catalog proxies; production identities remain unproven. Unresolved coordinates were checked against the current catalog and public glass-code/index searches; no sufficiently evidenced new curve was recovered for them. Source coordinates, spectral reference, radii, and axial spacings are retained.

### Metadata and analysis

Retained the source-correlated display name and its explicit attribution uncertainty.

Companion analysis now lists the actual runtime glass curves and preserves source-versus-model limitations.

## 2026-09-16 — Local-site diagram and controls review

Reviewed the live SVG against the exact local patent figure cited above, including glass bodies, cemented interfaces, element identifiers, dispersion colors, and aperture/stop annotations. The model is a prime; no zoom travel is authored. Infinity prescription only; the patent gives no focus travel. The production lens focuses to 0.16 m.

Glass labels now name the actual selected catalog curve and explicitly separate the dispersion proxy from historical supplier identity. The selected curves have no positive ΔPgF large enough to justify an inferred APD tag; unsupported APD tags were not added.

Additional compatible curves (catalog minus source coordinates):

| Element | Patent index / Abbe | Runtime curve | Δn | Δν |
|---|---|---|---|---|
| L5 | 1.55 / 45.4 (d) | J-LLF1 | -0.001860 | 0.110 |
| L7 | 1.61 / 38 (d) | S-TIM3 | 0.002929 | -0.995 |
