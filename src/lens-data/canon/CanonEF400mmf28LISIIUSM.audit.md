# Audit Log - CANON EF 400mm f/2.8 L IS II USM

Patent: US 2011/0090576 A1, Example 2

## 2026-08-19 - Patent-figure, metadata, and glass audit

### Glass classification

- Rechecked the patent coordinates and generated reports. All 15 active glass elements already select coordinate-compatible Sellmeier curves.
- Retained vendor-neutral six-digit class labels because several coordinates admit multiple compatible commercial curves; the inspector's chromatic detail still shows the selected modeling curve without presenting it as Canon's production identity.
- Retained the separately documented CaF2 production-correlation inference for L12/L14. No new catalog row or source-defensible production-material identity was needed.
- Added the missing patent-backed APD badge to L25 positive / Gp2 because the patent explicitly selects its partial dispersion under condition (6); ordinary rows that merely have tabulated `X` remain untagged.
- The patent-authored `dPgF` values remain authoritative for the violet channel over each catalog-equivalent curve, preserving the source's partial-dispersion evidence.

### Semi-diameter review

- Inspected PDF page 3, Figure 3, at 600 dpi:
  `npm run audit:patent-figure -- src/lens-data/canon/CanonEF400mmf28LISIIUSM.data.ts patents/US20110090576A1.pdf 3 0.20,0.245,0.70,0.45 --dpi=600`.
- Reliable front optical rims measured 71.39, 55.75, 55.11, 47.04, 38.32, 33.96, and 33.96 mm versus modeled maxima of 72.0, 58.0, 52.5, 44.48, 40.5, 32.45, and 32.135 mm.
- Label leaders, group brackets, and the separate rear `G` plate contaminated automated rear measurements. Manual 600 dpi readings put the rear optical rims within about 20% of the modeled values.
- Retained all SDs. A trial wholesale rear enlargement was rejected because it produced negative edge thickness and shared-gap overlap.

### Diagram labels and travel ordering

- Retained numeric 1-15 physical-element identifiers below the diagram. Figure 3 names cemented units L16, L21, L22, and L25 rather than their individual positive/negative members; the existing unit annotations above the diagram reproduce those source labels without inventing member identifiers.
- Confirmed the remaining diagram annotations against Figure 3: LF spans L11-L16, LR spans L21-L25, and L22 plus L23 is the transverse stabilization unit. The separate rear plate `G` remains intentionally excluded and is stated in the header.
- Verified focus endpoint ordering through the runtime layout. `focusT = 0` places L16 at 183.710-191.170 mm; `focusT = 1` places it at 212.639-220.099 mm, a +28.929 mm imageward shift toward the fixed stop at 234.900 mm, matching paragraph 52. The visible specification now states `L16 IMAGEWARD INNER FOCUS`; this fixed-focal-length design has no zoom travel to order.

### Identity and metadata

- Verified that `CANON EF 400mm f/2.8 L IS II USM` matches Canon's product identity after repository spacing normalization.
- Normalized the patent assignee to the catalog's canonical `Canon Inc.` spelling, resolving the patent-metadata test failure.

### Verification

- `npm run audit:surface -- src/lens-data/canon/CanonEF400mmf28LISIIUSM.data.ts` - passed.
- `npm run audit:image-circle -- src/lens-data/canon/CanonEF400mmf28LISIIUSM.data.ts` - passed, 0 undersized.
- `npm run generate:glass-reports` - passed, 8 files / 15 tests.
