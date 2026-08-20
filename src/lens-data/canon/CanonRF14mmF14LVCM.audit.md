# Audit Log - CANON RF 14mm f/1.4 L VCM

Patent: US 2025/0389929 A1, Numerical Example 1 / Figure 1

## 2026-08-20 - Patent-figure, identity, and glass audit

### Semi-diameter review

- Inspected PDF page 2, Figure 1, at 600 dpi with `audit:patent-figure`; the calibrated figure scale was 30.46 µm/px.
- The reliable optical-rim rows have a median figure/data ratio of 0.985. L1 and L4-L7, L10-L13, and L15-L18 agree closely with the modeled silhouette.
- Automated L2/L3/L9 outliers come from the front blank flange, group annotations, and the stop line. High-resolution crops show their optical rims remain close to the authored values.
- Retained all surface and stop semi-diameters. `audit:image-circle` reports zero undersized surfaces and `audit:surface` reports no geometry violations.

### Glass classification

- Relabeled L5 as CaF2 using Canon's published one-fluorite construction, the independently identified concave fluorite location, and the patent's matching `1.43387 / 95.1` coordinate. The label remains explicitly a production-correlation inference.
- Relabeled L12 as an H-ZBaF4 catalog equivalent. Its `1.66565 / 35.64` coordinate is inside the resolver window, while the patent-authored `dPgF = -0.00145352` remains authoritative at g.
- Kept L4 explicitly unmatched. It shares the `666356` coordinate but has no published partial-dispersion value, so extending H-ZBaF4's conflicting g-line behavior would be speculative.
- The Canon BR resin remains explicitly unmatched. No new catalog row is justified.

### Identity and metadata

- Verified the display name `CANON RF 14mm f/1.4 L VCM` against Canon's `RF14mm F1.4 L VCM` product name and repository spacing conventions.
- Normalized the structured assignee to the repository-wide `Canon Inc.` spelling.
