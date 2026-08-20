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

### Verification

- `npm run audit:surface -- src/lens-data/canon/CanonEF400mmf28LISIIIUSM.data.ts` - passed.
- `npm run audit:image-circle -- src/lens-data/canon/CanonEF400mmf28LISIIIUSM.data.ts` - passed, 0 undersized.
