# Audit Log — Nikon Medical-Nikkor 120mm f/4 IF

Patent: US 4,437,734 A, Example 1 / Figure 3.

## 2026-09-02 — Patent-figure, diagram, movement, and glass audit

### Semi-diameter review

The patent does not publish clear apertures. The exact USPTO PDF page 3 was rendered at high resolution and the optical
rims in Figure 3 were compared with the site diagram. Dimension leaders, reference labels, and non-optical ink were
excluded from the comparison.

| Surfaces | Before | After | Disposition |
|---|---:|---:|---|
| 9-11 (D3) | 14.0, 13.0, 12.5 mm | 18.0, 18.0, 18.0 mm | Restores the broad cemented-component rim shown in Figure 3. |
| 12-13 (L8) | 13.8, 14.5 mm | 14.2, 14.2 mm | Produces the source-like common rim within slope and gap limits. |

The moving G2 doublet remains at 13.82/13.8/13.7 mm because enlarging it to the apparent source rim violates the
adjacent shared-gap geometry. The retained values are therefore the geometry-safe ceiling rather than a missed figure
match.

### Glass classification

All nine physical-glass positions resolve to compatible Sellmeier curves. The uniquely compatible 785261, 697556, and
723380 rows are now labeled as supplier-neutral SF56A, K-LaK14, and S-BAH28 catalog equivalents. The 805255 and 713539
rows remain class-level because multiple compatible catalogs exist.

### Diagram and movement metadata

- Added source-oriented `diagramLabel` values L1-L9 while retaining descriptive inspector labels.
- Confirmed the moving second group has negative power; the diagram caption remains `G2 (−) / FOCUS`.
- Verified infinity-to-1:1 travel: G2 moves 30.242 mm imageward while G1 and G3 remain fixed.

### Verification

- Surface-domain and image-circle audits passed.
- Generated glass-report suite passed; compatible Sellmeier coverage is 9/9.
- Focused metadata and movement regression tests passed.
- Full repository gates and production build passed.
