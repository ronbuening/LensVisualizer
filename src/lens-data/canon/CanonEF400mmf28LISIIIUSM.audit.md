# Audit Log - CANON EF 400mm f/2.8 L IS III USM

Patent: US 2019/0041605 A1, Numerical Data 2 / Figure 2A

## 2026-08-20 - Patent-figure, identity, and glass audit

### Semi-diameter review

- Inspected PDF page 3, Figure 2A, at 600 dpi with `audit:patent-figure`; the calibrated figure scale was 129.33 µm/px.
- Reliable optical-rim rows agree with the model: L1-1 is about 67.3 mm versus 71.0 mm, L1-3 is 37.3 mm versus 39.0 mm, and the measurable rear elements are within about 14%.
- Focus arrows, group brackets, and the `G` leader contaminate several automated rows, so those rows were checked against the high-resolution render rather than treated as dimensions.
- Retained all surface and stop semi-diameters. No uncontaminated row exceeded the audit's strong-evidence threshold, and the image-circle floor reports zero undersized surfaces.

### Glass classification

- Numerical Data 2 publishes nd, νd, and θgF but no production supplier or glass names.
- Retained the authored measured C/F/g reconstruction and all 16 coefficient-backed catalog curves, while qualifying the OHARA names as catalog equivalents with the production supplier unspecified.
- No new catalog row is justified. The lens remains 16/16 strict Sellmeier and trusted-chromatic covered with no coordinate mismatch.

### Identity and metadata

- Verified the display name `CANON EF 400mm f/2.8 L IS III USM` against Canon's product identity and the repository's spacing policy.
- Normalized the structured assignee to the repository-wide `Canon Inc.` spelling; the source reference continues to record the patent's printed applicant name, Canon Kabushiki Kaisha.
- Verified Figure 2A's infinity-to-proximity arrow against the runtime motion profile: only L2 moves, by +19.078267603 mm imageward; the fixed L1/L3 units do not acquire zoom travel.
- Kept the patent's D1-D4 pair labels. The shared annotation renderer now staggers close D2/D3 captions instead of allowing the two labels to collide.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Replaced the air-equivalent surface-29 gap (69.920872 mm) with the patent's physical rear stack, read from the rendered
  Numerical Data 2 table (PDF page 13, printed page 6): d29 = 7.77 mm, glass block G 2.20 mm, nd 1.51633, νd 64.14,
  θgF 0.5353 (dPgF −0.00062 against the project normal line), then 60.70 mm to the image plane. Labeled S-BSL7 (OHARA),
  an exact nd/νd catalog match.
- Paraxial check against the previous data: EFL identical and defocus unchanged at infinity and at the 2.5 m keyframe
  (the old fold was computed unrounded). Physical track grows by 0.749 mm to 372.010 mm; the air-equivalent 371.261 mm
  still matches the patent's printed 371.25 total lens length.
