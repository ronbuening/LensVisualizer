# Patent and integration audit

## 2026-09-25 — new-lens integration

### Exact local source and semi-diameters

US20240134166A1.pdf, p. 2, Figure 1, Example 1. Rendered and inspected the exact embodiment; optical rims exclude labels, rays, arrows and mechanical edges.

S27/S28/S29: 10.1/10.5/10.7 → 15.0/15.0/15.0 mm. At 600 dpi, the optical rims measure approximately 15.0 mm (79.65 µm/pixel axial scale). L2 IS arrows and the L5 focus arrow contaminate the automated envelope; their apparent 2–4× excess was rejected. Other rims are within figure uncertainty or geometry-limited.

### Metadata and glass

Corrected the Canon assignee to catalog-canonical Canon Inc. The marketed RF 200–800mm f/6.3–9 IS USM name is retained. L1 now uses an N-FK5 coordinate-compatible proxy rather than the unresolvable 48770x token.

Final trusted catalog coverage: **17/17 elements**. Catalog curves are spectral proxies, not proof of production supplier or melt. Original patent coordinates and reference lines remain authoritative.

The existing nominal f-number stations now opt into `zoomApertureModel: "from-nominal-fno"`. Without that integration field the runtime held the wide-end iris fixed despite the source-model aperture schedule. These radii remain inferred; they are not published physical iris measurements.

## 2026-09-25 — local-site follow-up

Compared the live diagram directly with Figure 1, PDF p. 2 of US20240134166A1.pdf.

The 15 mm rear doublet rims now reproduce L6 much more closely. Retained these and the remaining SDs: front-rim differences are below the figure-estimation threshold; L2 leader/IS-arrow ink must not become glass.

Wide-to-Tele camera-frame motion is objectward for L1/L3/L4/L5/L6 (89.97/40.59/39.60/57.97/58.29 mm); L2 stays fixed within 0.01 mm table rounding. Infinity-to-near focus remains disabled because no finite spacings are published.

L1b, L3a, L5b and L6a now carry inferred APD tags from their compatible low-dispersion curves. All 17 resolved glass labels now name qualified spectral proxies. The assignee remains Canon Inc.; the untranslated applicant wording stays in the source discussion.
