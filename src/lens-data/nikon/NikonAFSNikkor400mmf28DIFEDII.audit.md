# Audit Log - Nikon AI AF-S NIKKOR ED 400mm f/2.8D II IF

Patent: US 6,239,919 B1, Example 4, Fig. 10 (PDF page 11)

## 2026-08-16 - Screenshot-led patent figure and metadata audit

### Semi-diameters

- Rechecked the current cross-section directly against Fig. 10. The prior integration correction reducing terminal L33 surfaces 22/23 from `21.0 / 21.5` mm to `15.5 / 16.0` mm matches the source's small last positive element.
- The front G1F, G1R, moving G2, and rear G3 taper remain consistent with the figure. Crossing rays and group brackets contaminate the automated screen, so no unsupported follow-up SD edit was made.

### Materials, labels, identity, and movement

- Corrected the display name and suffix styling to Nikon's official ordering: `NIKON AI AF-S NIKKOR ED 400mm f/2.8D II IF`.
- Marked active positions 1, 2, and 5 as inference-qualified ED elements, matching Nikon's published three-ED layout without inventing patent partial-dispersion values.
- Confirmed the reconstructed production endpoint moves negative G2 12.333140 mm imageward; the patent's own 3.8 m row gives 10.85845 mm in the same direction. This prime lens has no zoom travel.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Replaced the air-equivalent surface-23 gap with Table 4's physical rear stack (PDF p. 20, cols. 13–14): d23 22.0 +
  field stop d24 7.2 mm to the filter, then `rearPlates` surfaces 25–26 at 2.0 mm, nd 1.516800, νd 64.10 (J-BK7A
  catalog equivalent), and the printed Bf 83.53862 mm (constant through focus). No plate designation is printed.
- The file's independently solved image plane (air-equivalent 114.0572584 mm, 73.0 nm beyond the direct 114.0571854 mm
  normalization) is kept by storing the gap before the filter as 29.2000730 mm, so EFL and paraxial defocus are
  identical at infinity and at the 3.4 m keyframe (worst difference 7e-15 mm); the 3.4 m G2 solve is unaffected.
- Physical track grows by 2.0 × (1 − 1/1.5168) = 0.681 mm, to 377.768 mm from surface 3.
