# Patent and integration audit

## 2026-09-25 — new-lens integration

### Exact local source and semi-diameters

US20240134166A1.pdf, p. 2, Figure 1, Example 1. Rendered and inspected the exact embodiment; optical rims exclude labels, rays, arrows and mechanical edges.

S27/S28/S29: 10.1/10.5/10.7 → 15.0/15.0/15.0 mm. At 600 dpi, the optical rims measure approximately 15.0 mm (79.65 µm/pixel axial scale). L2 IS arrows and the L5 focus arrow contaminate the automated envelope; their apparent 2–4× excess was rejected. Other rims are within figure uncertainty or geometry-limited.

### Metadata and glass

Corrected the Canon assignee to catalog-canonical Canon Inc. The marketed RF 200–800mm f/6.3–9 IS USM name is retained. L1 now uses an N-FK5 coordinate-compatible proxy rather than the unresolvable 48770x token.

Final trusted catalog coverage: **17/17 elements**. Catalog curves are spectral proxies, not proof of production supplier or melt. Original patent coordinates and reference lines remain authoritative.

The existing nominal f-number stations now opt into `zoomApertureModel: "from-nominal-fno"`. Without that integration field the runtime held the wide-end iris fixed despite the source-model aperture schedule. These radii remain inferred; they are not published physical iris measurements.
