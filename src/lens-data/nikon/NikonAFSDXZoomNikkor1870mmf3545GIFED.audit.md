# Audit Log — Nikon AF-S DX Zoom-Nikkor 18-70mm f/3.5-4.5G IF-ED

Patent: US 2005/0068636 A1, Example 1 / Figure 2.

## 2026-08-30 — Integration, patent-figure SD, and glass audit

### Semi-diameter review

The patent does not publish clear apertures. Figure 2 was rendered from the supplied PDF page 3 at 600 dpi and its
optical rims were compared with the runtime lens silhouette. Leader lines, rays, brackets, and housing outlines were
excluded from the comparison.

The posterior G2-G5 groups were systematically too narrow relative to the Figure 2 optical rims. Their inferred
semi-diameters were expanded from surfaces 6A through 29, with the largest representative changes shown below.

| Surfaces | Before | After | Disposition |
|---|---:|---:|---|
| 6A-7 | 11.0, 10.7 mm | 11.5, 11.5 mm | Matches the broader rear rim of the G1/G2 boundary element. |
| 20, 23 | 8.6, 8.6 mm | 10.0, 10.0 mm | Restores the width of the rear G3 and front G4 rims. |
| 24-26 | 11.0, 11.2, 10.8 mm | 11.8, 11.8, 12.0 mm | Matches the broader Figure 2 G5 entrance envelope. |
| 29 | 10.5 mm | 12.2 mm | Matches the final negative element's patent rim. |

Surfaces 21-22 remain at 7.2 mm because their 0.28 mm air gap is the binding physical geometry. The shared-gap pairs
8-9, 12-13, and 27-28 likewise retain conservative paired rims rather than following non-optical figure ink.

### Glass classification

| Elements | Patent coordinate | Catalog proxy | Disposition |
|---|---|---|---|
| L12 | 640601 | S-BSM81 | Coordinate-compatible dispersion proxy; production supplier unspecified. |
| L23 | 795285 | J-LAFH3 | Coordinate-compatible dispersion proxy; production supplier unspecified. |
| L32 | 498826 | J-FKH1 | Compatible at the patent's printed precision; inferred ED role. |
| L51, L52 | 498825 | J-FKH1 | Coordinate-compatible proxy; inferred ED roles remain separate metadata. |

These relabels raise compatible Sellmeier coverage from 11/16 to 15/16 elements. Only the hybrid aspheric resin remains
unresolved, and no new catalog definition is warranted. Nikon's three-ED production claim is recorded as an inference
for L32, L51, and L52, not as supplier or melt provenance.

### Metadata and analysis sync

- Confirmed Nikon's `f/3.5-4.5G` production designation spacing was already correct.
- Updated the companion analysis with the refined rim, catalog proxies, and inferred ED-role discipline.

### Verification

- Stored prescription and image-circle audits passed.
- Generated glass-report suite passed (8 files, 15 tests); coverage is 15/16, with only resin unresolved.
- Full typecheck, formatting, lint, and test gates passed (266 files, 2,560 tests).
- Production build and prerender passed (1,218 routes).
- In-app browser screenshots were unavailable; visual comparison used the exact 600 dpi patent figure and the runtime
  SVG geometry.
