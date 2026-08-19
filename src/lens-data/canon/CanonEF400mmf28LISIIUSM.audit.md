# Audit Log - CANON EF 400mm f/2.8 L IS II USM

Patent: US 2011/0090576 A1, Example 2

## 2026-08-19 - Patent-figure, metadata, and glass audit

### Glass classification

- Rechecked the patent coordinates and generated reports. All 15 active glass elements already select coordinate-compatible Sellmeier curves.
- Retained vendor-neutral class labels and the separately documented CaF2 production-correlation inference; no new material identity was needed.

### Semi-diameter review

- Inspected PDF page 3, Figure 3, at 600 dpi:
  `npm run audit:patent-figure -- src/lens-data/canon/CanonEF400mmf28LISIIUSM.data.ts patents/US20110090576A1.pdf 3 0.20,0.245,0.70,0.45 --dpi=600`.
- Reliable front optical rims measured 71.39, 55.75, 55.11, 47.04, 38.32, 33.96, and 33.96 mm versus modeled maxima of 72.0, 58.0, 52.5, 44.48, 40.5, 32.45, and 32.135 mm.
- Label leaders, group brackets, and the separate rear `G` plate contaminated automated rear measurements. Manual 600 dpi readings put the rear optical rims within about 20% of the modeled values.
- Retained all SDs. A trial wholesale rear enlargement was rejected because it produced negative edge thickness and shared-gap overlap.

### Identity and metadata

- Verified that `CANON EF 400mm f/2.8 L IS II USM` matches Canon's product identity after repository spacing normalization.
- Normalized the patent assignee to the catalog's canonical `Canon Inc.` spelling, resolving the patent-metadata test failure.

### Verification

- `npm run audit:surface -- src/lens-data/canon/CanonEF400mmf28LISIIUSM.data.ts` - passed.
- `npm run audit:image-circle -- src/lens-data/canon/CanonEF400mmf28LISIIUSM.data.ts` - passed, 0 undersized.
- `npm run generate:glass-reports` - passed, 8 files / 15 tests.
