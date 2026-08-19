# Audit Log - CANON RF 100-500mm f/4.5-7.1 L IS USM

Patent: US 2021/0003832 A1, Numerical Example 2

## 2026-08-19 - Patent-figure, metadata, and glass audit

### Glass classification

- Rechecked the patent table and the retained first-party HOYA July 7, 2026 Zemax catalog.
- Added the distinct current TAFD45L formula-3 curve and labeled L33 as its coordinate-compatible modeling equivalent.
- L53 and L81 now name the already cataloged TAFD65 and FCD515 modeling equivalents. All three labels explicitly leave Canon's production supplier unspecified and retain the documented partial-dispersion caveats.
- Removed catalog-derived `nC`/`nF`/`ng` fields so the compatible catalog curves supply C/d/F dispersion while
  patent-derived `dPgF` values remain authoritative for the violet-channel correction.
- Strict Sellmeier coverage rises from 17/20 to 20/20 elements with zero catalog-coordinate mismatches.

### Semi-diameter correction

- Inspected PDF page 5, Figure 3, Numerical Example 2 at the wide-angle end, at 600 dpi:
  `npm run audit:patent-figure -- src/lens-data/canon/CanonRF100500mmf4571LISUSM.data.ts patents/US20210003832A1.pdf 5 0.09,0.27,0.80,0.66 --rot90 --dpi=600`.
- A manual reading of the terminal cemented L82/L83 optical rim measured about 17.5 mm; the automated row was
  contaminated by the L8 bracket and labels. Its draft 12.8-13.3 mm envelope was 31-37% too small; other reliable
  groups remained within roughly 5-24% of the figure.

| Surface | Before | After | Reason |
|---|---:|---:|---|
| 33 | 12.8 mm | 17.2 mm | Proportional L82 front rim |
| 34 | 13.0 mm | 17.5 mm | Figure-measured shared cemented rim |
| 35 | 13.3 mm | 17.9 mm | Proportional L83 rear rim |

### Identity and metadata

- Verified that `CANON RF 100-500mm f/4.5-7.1 L IS USM` matches Canon's product identity after repository spacing and `f/` normalization.
- Normalized the patent assignee to the catalog's canonical `Canon Inc.` spelling, preventing the same latent metadata failure exposed by the new 400mm file.

### Verification

- `npm run audit:surface -- src/lens-data/canon/CanonRF100500mmf4571LISUSM.data.ts` - passed.
- `npm run audit:image-circle -- src/lens-data/canon/CanonRF100500mmf4571LISUSM.data.ts` - passed, 0 undersized.
- `npm run generate:glass-reports` - passed, 8 files / 15 tests.
