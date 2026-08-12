# Audit Log — SONY VARIO-SONNAR T* 24-70mm f/2.8 ZA SSM

Patent: US 2008/0198475 A1, Example 3

## 2026-08-11 — Figure SD and glass-coverage audit

### Semi-diameters

The image-circle audit reported zero undersized surfaces. Figure 9's clean rows produced a median figure/data ratio of
1.019; most reliable element readings were within 18% of the authored values. G4 and the rear triplet were contaminated
by radius leaders, while manual inspection confirmed their optical rims. No difference crossed the strong-evidence
threshold, so all SDs were retained.

### Glass classification

G4 and G16 repeat the source pair 1.77250/49.36. Code `773496` and the exact match to S-LAH66's d-line index/e-line Abbe
number identify a mixed-reference transcription of the 773496 optical family. Both elements changed from explicit
`Unmatched` annotations to a supplier-unresolved S-LAH66 coordinate model and gained the existing S-LAH66 catalog
line indices. This moves the lens from 15/17 to 17/17 coefficient-backed elements without changing source nd/vd values
or adding a new catalog entry.

### Identity

The display name was checked against Sony model SAL2470Z and retained as
`SONY VARIO-SONNAR T* 24-70mm f/2.8 ZA SSM`.

### Verification

- `npm run audit:image-circle -- ./src/lens-data/sony/SonyVarioSonnarT2470mmf28ZASSM.data.ts`
- `npm run audit:patent-figure -- ./src/lens-data/sony/SonyVarioSonnarT2470mmf28ZASSM.data.ts patents/US20080198475A1-2.pdf 6 0.17,0.35,0.90,0.70`
