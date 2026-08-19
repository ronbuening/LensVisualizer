# Audit Log - CANON RF 100-500mm f/4.5-7.1 L IS USM

Patent: US 2021/0003832 A1, Numerical Example 2

## 2026-08-19 - Patent-figure, metadata, and glass audit

### Glass classification

- Rechecked the patent table and the retained first-party HOYA July 7, 2026 Zemax catalog.
- Added the distinct current TAFD45L formula-3 curve and labeled L33 as its coordinate-compatible modeling equivalent.
- L53 and L81 now name the already cataloged TAFD65 and FCD515 modeling equivalents. All three labels explicitly leave Canon's production supplier unspecified and retain the documented partial-dispersion caveats.
- Qualified the remaining OHARA names as catalog equivalents rather than production-supplier identities. Every one of the 20 authored coordinates resolves inside the catalog guard; no extra source-backed glass row remains to add.
- Removed catalog-derived `nC`/`nF`/`ng` fields so the compatible catalog curves supply C/d/F dispersion. Recomputed
  all 20 structured `dPgF` values from each patent `θgF` row using the runtime normal-line formula, making the
  patent-derived values authoritative for the violet-channel correction rather than preserving catalog deltas.
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

The supplied site screenshot was then compared directly with the same Figure 3 wide panel. Manual optical-rim
readings (excluding unit brackets, leader lines, element numbers, and the rear `G` block) give the following
whole-element check. `Data max` is the larger authored surface SD for that element; the drawing is not a published
clear-aperture table, so only deviations beyond the audit procedure's approximately 25% correction threshold justify
another edit.

| Element(s) | Figure rim | Data max | Result |
|---|---:|---:|---|
| L11 | about 35.3 mm | 44.1 mm | figure/data about 0.80; retain |
| L12 / L13 | about 34.0 mm | 35.6 mm | figure/data about 0.96; retain |
| L21 / L22 / L23 | about 16.0-16.4 mm | 16.4-17.2 mm | figure/data about 0.93-1.00; retain |
| L31 / L32 / L33 | about 16.1-16.9 mm | 15.5-17.0 mm | figure/data about 0.99-1.04; retain |
| L41 | about 12.4 mm | 14.4 mm | figure/data about 0.86; retain |
| L51 / L52 / L53 / L54 | about 13.2-13.6 mm | 15.6-17.0 mm | figure/data about 0.79-0.85; retain |
| L61 / L62 | about 12.4 mm | 14.1-14.5 mm | figure/data about 0.86-0.88; retain |
| L71 | about 15.6 mm | 15.2 mm | figure/data about 1.03; retain |
| L81 | about 15.1 mm | 12.8 mm | figure/data about 1.18; retain |
| L82 / L83 | about 17.0 mm | 17.5-17.9 mm | figure/data about 0.95-0.97; corrected envelope confirmed |

No further SD adjustment is supported: all surfaces clear the image-circle floor, and every manually isolated optical
rim remains below the strong-evidence threshold. In particular, the recent L82/L83 enlargement now matches the
patent silhouette; the automated 26.9 mm result for those elements is the L8 bracket/label ink, not an optical rim.

### Diagram labels and movement directions

- Added bare-numeric `diagramLabel` values `11` through `83`, matching the individual element identifiers printed in
  Figure 3 and keeping them distinct from the patent's L1-L8 unit brackets instead of exposing unrelated runtime IDs
  `1` through `20`. The existing L1-L8 unit brackets, `12+13` through `82+83`
  cemented-pair labels, power signs, stop position, and element shape classifications agree with the source.
- Rechecked the patent-backed APD tags on L11, L13, L22, L31, L41, L54, L81, and L82 against paragraphs 0051-0058.
  Canon's production count of one Super UD and six UD elements does not map those product categories to individual
  patent rows, so no speculative UD/Super-UD tags were added.
- Confirmed the authored zoom controls are ordered wide, middle, tele (`103`, `225`, `490` mm). Relative to the fixed
  image plane, wide-to-tele moves L1 and L3-L8 object-side while L2 stays fixed; L4 correctly moves about 2.06 mm
  image-side at the middle control before reversing to a net 12.46 mm object-side shift at tele.
- Confirmed the Figure 3 dotted focus arrows and paragraph 0032: toward closer focus L4 moves object-side and L6
  image-side. The patent gives no finite-focus spacing row, so the model correctly leaves focus unavailable rather
  than inventing travel and now states both directions in the visible specification line.

### Identity and metadata

- Verified that `CANON RF 100-500mm f/4.5-7.1 L IS USM` matches Canon's product identity after repository spacing and `f/` normalization.
- Normalized the patent assignee to the catalog's canonical `Canon Inc.` spelling, preventing the same latent metadata failure exposed by the new 400mm file.
- Synchronized the analysis citation to the same canonical `Canon Inc.` display name.

### Verification

- `npm run audit:surface -- src/lens-data/canon/CanonRF100500mmf4571LISUSM.data.ts` - passed.
- `npm run audit:image-circle -- src/lens-data/canon/CanonRF100500mmf4571LISUSM.data.ts` - passed, 0 undersized.
- `npm run generate:glass-reports` - passed, 8 files / 15 tests.
