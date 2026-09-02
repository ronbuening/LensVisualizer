# Audit Log — Nikon Zoom-Nikkor ED 200-400mm f/4

Patent: US 4,452,513 A, Example 3 / Figure 15.

## 2026-09-02 — Patent-figure, diagram, movement, and glass audit

### Semi-diameter review

The exact USPTO PDF page 8 was re-reviewed at high resolution. The existing G2-G4 semi-diameters already follow the
optical rims in Figure 15 as closely as the edge-thickness and r9-r10 shared-gap constraints allow, so no additional
clear-aperture change was made in this pass. The comparison excluded surface labels, rays, brackets, and housing ink.

### Glass classification

All 15 physical-glass positions resolve to compatible Sellmeier curves. The uniquely compatible 755276, 734511, and
581408 rows are now labeled as supplier-neutral SF4, TAC4, and PBL25 catalog equivalents. Ambiguous TAF4 and BK7-class
coordinates remain class-level rather than asserting a historical production supplier.

### Diagram and movement metadata

- Added source-oriented `diagramLabel` values for L11a through L45b.
- Normalized G1-G4 captions with signed power and functional roles.
- Verified 200-to-400 mm zoom travel: G2 moves 60.631 mm imageward and G3 moves 7.489 mm imageward while G4 remains
  fixed. At 200 mm, close focus moves G1 22.538873 mm objectward while G2-G4 remain fixed.

### Verification

- Surface-domain and image-circle audits passed; the 600 dpi patent-figure comparison completed and the retained rims
  remain the closest geometry-safe proportions.
- Generated glass-report suite passed; compatible Sellmeier coverage is 15/15.
- Focused metadata and movement regression tests passed.
- Full repository gates and production build passed.
