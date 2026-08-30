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

### Verification

- Stored prescription and image-circle audits passed.
- Generated glass-report suite passed (8 files, 15 tests); coverage is 13/14.
- Full typecheck, formatting, lint, and test gates passed (266 files, 2,560 tests).
- Production build and prerender passed (1,218 routes).
- In-app browser screenshots were unavailable; visual comparison used the exact 600 dpi patent figure and the runtime
  SVG geometry.
