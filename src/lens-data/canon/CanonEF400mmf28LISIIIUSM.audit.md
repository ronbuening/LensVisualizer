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

### Verification

- `npm run audit:surface -- src/lens-data/canon/CanonEF400mmf28LISIIIUSM.data.ts` - passed.
- `npm run audit:image-circle -- src/lens-data/canon/CanonEF400mmf28LISIIIUSM.data.ts` - passed, 0 undersized.
