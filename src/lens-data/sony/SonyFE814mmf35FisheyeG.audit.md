# Patent and integration audit

## 2026-09-25 — new-lens integration

### Exact local source and semi-diameters

JP2022155067A.pdf, p. 47, Figure 1, Example 1. Rendered and inspected the exact embodiment; optical rims exclude labels, rays, arrows and mechanical edges.

S29/S30: enlarged the modeled rear-singlet rims to 14.0/14.0 mm, approaching the clean ~14.5 mm rear-singlet rim at 74.27 µm/pixel. L15 retains its original rims: copying its ~13.6 mm drawing height causes 5.06 mm shared-gap intrusion against a 3.348 mm allowance. Front/aspheric rims stay within existing clearance, conic and rim-slope limits. Leader lines and group brackets invalidate several automated envelope rows.

### Metadata and glass

Romanized the source inventors as Naoki Miyagawa and Yoshio Hosono. Normalized Fisheye casing; retained the official FE 8–14mm f/3.5 Fisheye G model identity and the separate patent f/2.9 design. All sixteen elements already resolve to compatible spectral curves.

Final trusted catalog coverage: **16/16 elements**. Catalog curves are spectral proxies, not proof of production supplier or melt. Original patent coordinates and reference lines remain authoritative.

The existing nominal f-number stations now opt into `zoomApertureModel: "from-nominal-fno"`. Without that integration field the runtime held the wide-end iris fixed despite the source-model aperture schedule. These radii remain inferred; they are not published physical iris measurements.
