# Audit Log - CANON EF 70-300mm f/4.5-5.6 DO IS USM

Patent: JP 2004-317867 A, Numerical Example 1

## 2026-08-19 - Patent-figure and glass-coverage audit

### Glass classification

- Rechecked the data and local `patents/JP2004317867A.pdf`. The patent publishes nd/vd coordinates but no vendor or glass names.
- Replaced four Abbe-only descriptions with vendor-neutral coordinate classes: L2 `834372`, L6 `847239`, and L14/L16 `835427`.
- Those classes select existing coordinate-compatible S-LAH60, S-NPH53, and S-LAH55 catalog curves without choosing a production supplier or glass variant. Strict Sellmeier coverage rises from 13/17 to 17/17 elements.

### Semi-diameter review

- Inspected PDF page 25, Figure 1, the Numerical Example 1 wide-angle section, at 600 dpi:
  `npm run audit:patent-figure -- src/lens-data/canon/CanonEF70300mmf4556DOISUSM.data.ts patents/JP2004317867A.pdf 25 0.12,0.535,0.43,0.635 --axis=0.587 --dpi=600`.
- The calibrated scale was 77.08 µm/px and the median figure/data ratio was 0.976. Reliable normalized group ratios were 0.94-1.15, below the audit's strong-evidence threshold.
- The automated L9 row was contaminated by the `SP` stop line; a manual high-resolution reading put its optical rim near 10.8 mm, only about 10% below the modeled 12.0 mm.
- Retained all surface SDs, `STO.sd = 10.5`, and `gapSagFrac = 0.97`; no figure-backed correction was justified.

### Identity and metadata

- Verified the display name against Canon's product identity and the repository's spacing policy. `CANON EF 70-300mm f/4.5-5.6 DO IS USM` remains correct.

### Verification

- `npm run audit:surface -- src/lens-data/canon/CanonEF70300mmf4556DOISUSM.data.ts` - passed.
- `npm run audit:image-circle -- src/lens-data/canon/CanonEF70300mmf4556DOISUSM.data.ts` - passed, 0 undersized.
- `npm run generate:glass-reports` - passed, 8 files / 15 tests.
