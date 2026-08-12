# Audit Log — SONY E PZ 16-50mm f/3.5-5.6 OSS

Patent: US 2015/0316753 A9, Example 1

## 2026-08-11 — Figure SD and glass-coverage audit

### Semi-diameters

The image-circle audit reported zero undersized surfaces. Figure 1 at 300 dpi showed one material silhouette mismatch:
L1's approximately 12.5 mm drawn envelope was larger than the initial ray-envelope estimate. The rear asphere could not
reach the full drawn height without exceeding the rim-slope validator, so the pair was enlarged to the largest safe
same-element envelope.

| Surface | Before | After | Evidence |
|---|---:|---:|---|
| 1 | 9.9 mm | 12.2 mm | Figure 1 hand measurement; preserves the authored front/rear ratio |
| 2A | 9.6 mm | 11.8 mm | Figure 1; capped below the 12.1 mm rim-slope failure |

All other elements were within the figure-screening tolerance or contaminated by leader lines and were retained.

### Glass classification

L9's `806407` coordinate is the coefficient-backed HOYA NBFD13 optical family. The existing M-NBFD130 and MP-NBFD130
aliases route to the same NBFD13 curve, so the physical-form suffix is not a spectral blocker. L9 changed from explicit
`Unmatched` to a supplier-unresolved family annotation and gained catalog nC/nF/ng/dPgF values. No new catalog entry was
needed.

### Identity

The display name was checked against Sony model SELP1650 and retained as `SONY E PZ 16-50mm f/3.5-5.6 OSS`.

### Verification

- `npm run audit:image-circle -- ./src/lens-data/sony/SonyEPZ1650mmf3556OSS.data.ts`
- `npm run audit:patent-figure -- ./src/lens-data/sony/SonyEPZ1650mmf3556OSS.data.ts patents/US20150316753A9.pdf 2 0.19,0.48,0.73,0.73`
- `npm run audit:surface -- ./src/lens-data/sony/SonyEPZ1650mmf3556OSS.data.ts --sd 1=12.2 2A=11.8`
