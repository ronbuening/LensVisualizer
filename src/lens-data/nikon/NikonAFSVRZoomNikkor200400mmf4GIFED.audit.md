# Audit Log — Nikon AF-S VR Zoom-Nikkor 200-400mm f/4G IF-ED

Patent: US 2005/0157403 A1, Example 1, Figure 1

## 2026-08-14 — Screenshot, patent-figure, label, and glass review

### Semi-diameters

- Figure 1 and the supplied screenshot agree on the front collector, focusing subgroup, and tapered G2–G4 relay. No reliable height difference exceeds the audit threshold.
- No SD change was justified. The image-circle audit remains clean.

### Labels and glass

- Added L11–L49 source identifiers as `diagramLabel` values and shortened the seven cemented-pair annotations to their D11–D48 identifiers, removing the rear label collision.
- Corrected the displayed product designation from `f/4 G` to `f/4G`.
- Marked L12, L13, L14, and L47 as inferred ED/APD because their shared `498826` coordinate exactly matches Nikon's four-ED production count.
- All 24 physical glasses already resolve to coordinate-compatible Sellmeier curves; no new catalog row was justified.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Replaced the air-equivalent surface-43 spacing (95.48637540084388 mm) with Table 1's physical rear stack (PDF p. 28,
  Example 1): d43 = 3.00 mm, then `rearPlates` BFL (the patent's "rear-inserting filter BFL", surfaces 44–45) 2.00 mm,
  nd 1.51680, νd 64.12, J-BK7A (coordinate-compatible; Nikon's usual Hikari vendor), and Bf = 91.16781 mm, printed
  identically at all three zoom states at infinity and closest focus.
- Paraxial check against the previous data: EFL identical and paraxial defocus unchanged at every zoom station and focus
  keyframe, because 3.00 + 2.00/1.51680 + 91.16781 reproduces the legacy value exactly. Physical track grows by
  0.681 mm (2.00 × (1 − 1/1.51680)).
