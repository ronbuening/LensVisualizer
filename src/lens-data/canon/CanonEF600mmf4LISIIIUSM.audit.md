# Audit Log - CANON EF 600mm f/4 L IS III USM

Patent: US 2019/0041605 A1, Numerical Data 4 / Figure 4A

## 2026-08-20 - Patent-figure, identity, and glass audit

### Semi-diameter review

- Inspected PDF page 5, Figure 4A, at 600 dpi:
  `npm run audit:patent-figure -- src/lens-data/canon/CanonEF600mmf4LISIIIUSM.data.ts patents/US20190041605A1.pdf 5 0.18,0.22,0.70,0.47 --dpi=600`.
- Reliable optical-rim rows closely match the model: E1 is about 73.9 mm versus 77.1 mm, E2-E4 are 43.3-45.6 mm
  versus 44.5-48.5 mm, E5-E7 are 32.5-33.4 mm versus 32.5-34.9 mm, and E9/E10 are 17.75 mm versus
  17.5-17.6 mm.
- Focus arrows and subunit labels contaminate E6-E8 and E11-E13. The final E15/E16 rim is about 18.1 mm versus
  15.5 mm, a roughly 17% difference below the audit's strong-evidence threshold.
- Retained all surface and stop semi-diameters. The image-circle floor reports zero undersized surfaces and the surface
  validator reports no geometry errors.

### Glass classification

- Added legacy OHARA S-NBH53 from the vendor's 2009 datasheet as a distinct `738323` catalog entry. Its published
  coefficients reproduce the patent's exact `1.73800 / 32.26 / 0.5899` E10 coordinates rather than substituting the
  later S-NBH53V curve.
- E7 remains manufacturer-constrained Canon Super UD, and E15 remains explicitly unmatched because the nearest public
  coefficient row conflicts with the patent's partial-dispersion sign. Neither is assigned speculatively.
- The lens improves from 13/16 to 14/16 strict Sellmeier and trusted-chromatic coverage with no coordinate mismatch.

### Identity and metadata

- Verified the display name `CANON EF 600mm f/4 L IS III USM` against Canon's official product identity and the
  repository's spacing policy.
- Normalized the structured assignee to the repository-wide `Canon Inc.` spelling; the analysis retains the patent's
  printed Canon Kabushiki Kaisha wording.

### Verification

- `npm run audit:surface -- src/lens-data/canon/CanonEF600mmf4LISIIIUSM.data.ts` - passed.
- `npm run audit:image-circle -- src/lens-data/canon/CanonEF600mmf4LISIIIUSM.data.ts` - passed, 0 undersized.
- `npm run generate:glass-reports` - passed, 8 files / 15 tests.
