# Audit Log — Nikon AF-S DX Zoom-Nikkor 18-55mm f/3.5-5.6G ED II

Patent: US 2006/0007559 A1, Example 4 / Figure 13.

## 2026-08-30 — Integration, patent-figure SD, and glass audit

### Semi-diameter review

The patent does not publish clear apertures. Figure 13 was rendered from the supplied PDF page 14 at 600 dpi and its
optical rims were compared with the runtime lens silhouette. Leader lines, rays, brackets, and housing outlines were
excluded from the comparison.

| Surfaces | Before | After | Disposition |
|---|---:|---:|---|
| 4-5 | 13.2, 13.2 mm | 12.4, 12.4 mm | The G1 positive meniscus was visibly oversized relative to Figure 13. |

The other inferred apertures already follow the patent silhouette and remain unchanged.

### Glass classification

All seven optical-glass entries already resolve to compatible catalog curves; only the bonded aspheric resin remains
unresolved. No new catalog definition or relabel is justified. L2a is now explicitly marked `apd: "inferred"` because
its unique very-high-Abbe position is the defensible correlation with Nikon's one-ED production specification. The
annotation does not assert a composition, supplier, melt, or unreported partial-dispersion values.

### Metadata and analysis sync

- Corrected the production display name to Nikon's `f/3.5-5.6G` designation spacing.
- Updated the companion analysis with the inferred ED-role discipline and refined-rim verification wording.

### Verification

- Stored prescription and image-circle audits passed.
- Generated glass-report suite passed (8 files, 15 tests); coverage is 7/8, with only resin unresolved.
- Full typecheck, formatting, lint, and test gates passed (266 files, 2,560 tests).
- Production build and prerender passed (1,218 routes).
- In-app browser screenshots were unavailable; visual comparison used the exact 600 dpi patent figure and the runtime
  SVG geometry.
