# Audit Log — Nikon AF-S DX Zoom-Nikkor 17-55mm f/2.8G IF-ED

Patent: US 2005/0013015 A1, Example 5 / Figure 9.

## 2026-08-30 — Integration, patent-figure SD, and glass audit

### Semi-diameter review

The patent does not publish clear apertures. Figure 9 was rendered from the supplied PDF page 10 at 600 dpi and its
optical rims were compared with the runtime lens silhouette. Leader lines, rays, brackets, and housing outlines were
excluded from the comparison.

| Surfaces | Before | After | Disposition |
|---|---:|---:|---|
| 11A-12 | 17.5, 17.0 mm | 16.0, 16.0 mm | The rear G2 singlet was visibly oversized relative to the Figure 9 optical rim. |

The other inferred apertures already follow the patent silhouette and remain unchanged. The refined 11A rim is inside
the aspheric domain and preserves the required clear field.

### Glass classification

| Elements | Patent coordinate | Catalog proxy | Disposition |
|---|---|---|---|
| L1 | 744495 | M-NBF1 | Compatible within the project window; production supplier remains unspecified. |
| L2 | 519700 | J-PKH1 | Coordinate-compatible dispersion proxy; not a production-melt identity. |
| L11, L13 | 498825 | J-FKH1 | Coordinate-compatible dispersion proxy; not a production-melt identity. |
| L7 | 740493 | unresolved | No current catalog curve falls within the accepted index/Abbe window. |

These relabels raise compatible Sellmeier coverage from 9/14 to 13/14 elements without adding a duplicate catalog
record. The three patent special-glass roles remain separate from Nikon's production ED claim.

### Metadata and analysis sync

- Corrected the production display name to Nikon's `f/2.8G` designation spacing.
- Updated the companion analysis with the refined rim and supplier-neutral glass-proxy rationale.

## 2026-10-29 — F-mount surface and glass reinspection

Fresh original source `patents/US20050013015A1.pdf` (file identity and publication header verified): Example5 Figure9 on PDFpage10, directly reviewed at600dpi; Table5 pages32–33; d-line and special-glass-coordinate definitionspage24. Inspected every convex/concave face and all four cemented interfaces. Embedded figure is300dpi. Approximately2710px across the134.8601mm wide-state first-to-last vertex span gives20.1px/mm at600dpi,10.0nativepx/mm.

Added single-glass L1 rear-asphere S2A opaque extension26.0→30.0mm, following the source’s clear rear seat and retaining its optical cap. Other concave faces meet their rims without a distinct cap-end land; no additional cut is supported. All source R/d/asphere coefficients, optical SDs, zoom/aperture and qualified reconstructed focus remain unchanged.

All14source nd/νd pairs agree with Table5 at d-line587.6nm. Source ‘special glass’ roles SL1/SL2/SL3 are conditions on nd/νd, not measured partial dispersion or production supplier identities. No extra line indices, θgF or dispersion coefficients are published and none is invented. Current coverage13/14 is retained; no current compatible catalog row exists for L7 1.739929/49.25. Qualified bare OHARA labels and changed the ambiguous L1 code744495 annotation to the actual source pair1.744429/49.55; selected curves are unchanged. Public element paragraphs/table now acknowledge L4 S-LAL12’s nonidentical catalog coordinate1.676974/54.52 and the actual S-PHM52 curve behind L6/L12’s code-level labels, preserving all supplier/melt uncertainty.

| Medium | Source nd / νd | Current coefficient-backed proxy |
|---|---|---|
| L1 | 1.744429 / 49.55 | M-NBF1 |
| L2 | 1.518601 / 69.98 | J-PKH1 |
| L3 | 1.805180 / 25.43 | SF6 |
| L4 | 1.677900 / 55.34 | S-LAL12 |
| L5 | 1.846660 / 23.78 | S-TIH53 |
| L6 | 1.618000 / 63.38 | S-PHM52 |
| L7 | 1.739929 / 49.25 | Unresolved |
| L8 | 1.846660 / 23.78 | S-TIH53 |
| L9 | 1.804000 / 46.58 | S-LAH65V |
| L10 | 1.804000 / 46.58 | S-LAH65V |
| L11 | 1.497820 / 82.52 | J-FKH1 |
| L12 | 1.618000 / 63.38 | S-PHM52 |
| L13 | 1.497820 / 82.52 | J-FKH1 |
| L14 | 1.846660 / 23.78 | S-TIH53 |

Absolute-path candidate surface, image-circle and aperture audits pass; resolver/`assertCatalogConsistent()` pass. Nine native SVG focus/zoom states were rendered and visually inspected with zero hidden rim trim. All source indices, actual spectral constraints, and selected qualified curves are retained; no tolerance is relaxed. Shared dispersion/partial-dispersion suites passed2files/93tests earlier in this wave. Coordinator records full gates/commit integration.
