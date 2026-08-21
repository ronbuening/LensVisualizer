# Audit Log - CANON EF 600mm f/4 L IS USM

Patent: US 6,115,188 A, Numerical Example 22 / Figure 85

## 2026-08-20 - Patent-figure, identity, and glass audit

### Semi-diameter review

- Inspected PDF page 56, Figure 85, at 600 dpi after rotating the vertical optical axis and excluding the omitted front
  protection glass and rear filter:
  `npm run audit:patent-figure -- src/lens-data/canon/CanonEF600mmf4LISUSM.data.ts patents/US6115188.pdf 56 0.15,0.39,0.69,0.76 --rot90 --axis=0.578 --dpi=600`.
- Reliable optical-rim rows agree with the modeled silhouette: L1b is about 57.3 mm versus 60.5-63.8 mm, L2 is
  31.3 mm versus 33.0 mm, and L3a is 19.4 mm versus 20.0 mm. The front L1a ENV/RIM readings disagree at
  72.9/65.6 mm versus 77.0 mm, so they do not support a change.
- Figure labels and subunit brackets contaminate several rear automated rows. The uncontaminated rear optical rims are
  within about 18% of the modeled values, below the strong-evidence threshold.
- Retained all surface and stop semi-diameters. The image-circle floor reports zero undersized surfaces and the surface
  validator reports no geometry errors.

### Glass classification

- Numerical Example 22 publishes d-line index/Abbe coordinates but no production glass suppliers.
- Retained vendor-neutral coordinate-class labels and all 15 compatible Sellmeier curves. No new catalog row or
  source-defensible production-material identity was needed for this generation.
- The lens remains 15/15 strict Sellmeier and trusted-chromatic covered with no coordinate mismatch.

### Identity and metadata

- Verified the display name `CANON EF 600mm f/4 L IS USM` against Canon's official product identity and the repository's
  spacing policy.
- Normalized the structured assignee to the repository-wide `Canon Inc.` spelling; the analysis retains the patent's
  printed Canon Kabushiki Kaisha wording.

### Verification

- `npm run audit:surface -- src/lens-data/canon/CanonEF600mmf4LISUSM.data.ts` - passed.
- `npm run audit:image-circle -- src/lens-data/canon/CanonEF600mmf4LISUSM.data.ts` - passed, 0 undersized.
- `npm run generate:glass-reports` - passed, 8 files / 15 tests.
