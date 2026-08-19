# Audit Log - CANON EF 70-300mm f/4.5-5.6 DO IS USM

Patent: JP 2004-317867 A, Numerical Example 1

## 2026-08-19 - Patent-figure and glass-coverage audit

### Glass classification

- Rechecked the data and local `patents/JP2004317867A.pdf`. The patent publishes nd/vd coordinates but no vendor or glass names.
- Replaced four Abbe-only descriptions with vendor-neutral coordinate classes: E2 `834372`, E6 `847239`, and E14/E16 `835427`.
- Those classes select existing coordinate-compatible S-LAH60, S-NPH53, and S-LAH55 catalog curves without choosing a production supplier or glass variant. Strict Sellmeier coverage rises from 13/17 to 17/17 elements.

### Semi-diameter review

- Inspected PDF page 25, Figure 1, the Numerical Example 1 wide-angle section, at 600 dpi:
  `npm run audit:patent-figure -- src/lens-data/canon/CanonEF70300mmf4556DOISUSM.data.ts patents/JP2004317867A.pdf 25 0.12,0.535,0.43,0.635 --axis=0.587 --dpi=600`.
- The calibrated scale was 77.08 µm/px and the median figure/data ratio was 0.976. Reliable normalized group ratios were 0.94-1.15, below the audit's strong-evidence threshold.
- The automated E9 row was contaminated by the `SP` stop line; a manual high-resolution reading put its optical rim near 10.8 mm, only about 10% below the modeled 12.0 mm.
- Retained all surface SDs, `STO.sd = 10.5`, and `gapSagFrac = 0.97`; no figure-backed correction was justified.

### Diagram labels and movement order

- Compared the supplied site screenshot directly with Figure 1. The patent names the seven functional groups `L1`-`L7`, not `G1`-`G7`; updated the visible group annotations, header spec, subtitle, focus description, and variable-gap labels to the source notation.
- Renamed LensVisualizer's individual glass members from `L1`-`L17` to neutral `E1`-`E17`. Figure 1 does not name individual elements, so this avoids overloading the patent's `L1`-`L7` group labels while leaving the diagram's numeric element labels unchanged.
- Retained the required runtime surface label `STO` as the schema-standard equivalent of the patent's `SP`. The `DO1`, `D2`, and `D3` bonded-pair annotations, surface-4 diffractive-phase marker, surface-11A asphere marker, L2 IS role, and L6 focus role agree with the prescription and source description.
- Checked every visible element type against the signed surface radii, isolated element power, and Figure 1 silhouette. The meniscus/biconvex/biconcave classifications are consistent, and E7 is the only aspheric element; no type correction or additional material tag is warranted.
- Paragraphs [0009] and [0024] explicitly put L1, L3, and L6 objectward from wide to tele, keep L2, L5, and L7 fixed, and move L6 imageward from infinity to close focus. The runtime profile reproduces those directions: wide-to-tele shifts are L1 `-65.170`, L3 `-10.800`, L4 `+7.730`, and L6 `-14.310` mm relative to the fixed image plane; L5/L7 remain fixed and L2 differs by only `0.010` mm from rounded source gaps.
- The 21 zoom control points are strictly ordered from `72.16` to `290.26` mm. At wide/middle/tele, close focus moves L6 imageward by `0.713980`, `2.399338`, and `7.934380` mm respectively; every authored D25 increase is balanced by the same D31 decrease, and the focus travel grows monotonically toward tele.

### Glass and color completeness

- Re-ran the compatible-glass resolver for all 17 elements. Every element uses Sellmeier dispersion; the largest coefficient-evaluated residuals are about `|Δnd| = 0.0000052` and `|Δvd| = 0.043`, well inside the catalog guards.
- The patent provides only d-line `nd/vd`, so no production supplier, measured C/F/g indices, `dPgF`, or APD status can be recovered responsibly. The E2, E6, and E14/E16 vendor-neutral coordinate classes remain the defensible dispositions; no additional catalog row or diagram APD tag is supported.

### Identity and metadata

- Verified the display name against Canon's product identity and the repository's spacing policy. `CANON EF 70-300mm f/4.5-5.6 DO IS USM` remains correct.

### Verification

- `npm run audit:surface -- src/lens-data/canon/CanonEF70300mmf4556DOISUSM.data.ts` - passed.
- `npm run audit:image-circle -- src/lens-data/canon/CanonEF70300mmf4556DOISUSM.data.ts` - passed, 0 undersized.
- `npm run generate:glass-reports` - passed, 8 files / 15 tests.
- `npx tsc --noEmit` and targeted Prettier check - passed.
- Focused analysis, metadata, buildLens, movement, dispersion, and Sellmeier coverage tests - passed, 6 files / 147 tests.
