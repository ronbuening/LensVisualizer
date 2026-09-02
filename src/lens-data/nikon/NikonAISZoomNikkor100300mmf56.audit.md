# Audit Log — Nikon Zoom-Nikkor 100-300mm f/5.6

Patent: US 4,641,928 A, Example 2 / Figure 2A.

## 2026-09-02 — Patent-figure, diagram, movement, and glass audit

### Semi-diameter review

The patent does not publish clear apertures. The exact USPTO PDF page 5 was rendered at high resolution and the optical
rims in Figure 2A were compared with the site diagram. Brackets, element numbers, leader lines, and mechanical ink were
excluded from the comparison.

| Surfaces | Before | After | Disposition |
|---|---:|---:|---|
| 4-5 (L12) | 28.0, 27.5 mm | 30.0, 30.0 mm | Matches L12 to the front G1 rim shown in Figure 2A. |
| 12-14 (G3) | 16.0, 16.3, 16.3 mm | 13.5, 13.5, 13.5 mm | Corrects the visibly oversized compensator silhouette. |

The revised rims retain positive edge thickness, shared-gap clearance, and image-circle coverage.

### Glass classification

All 14 physical-glass positions already resolve to compatible Sellmeier curves. The uniquely compatible 487702 and
713540 rows are now labeled as supplier-neutral S-FSL5 and J-LAK8 catalog equivalents. Ambiguous coordinate rows retain
class-level labels, and no production supplier, historical melt, or anomalous-dispersion claim is inferred.

### Diagram and movement metadata

- Added source-oriented `diagramLabel` values for L11a through L45.
- Expanded G1-G4 captions with signed power and functional roles.
- Verified the published wide-to-tele ordering: G2 moves 52.300 mm imageward, G3 moves 15.898 mm imageward, and G1/G4
  remain fixed. The unavailable quantitative focus reconstruction remains disabled.

### Verification

- Surface-domain and image-circle audits passed.
- Generated glass-report suite passed; compatible Sellmeier coverage is 14/14.
- Focused metadata and movement regression tests passed.
- Full repository gates and production build passed.
