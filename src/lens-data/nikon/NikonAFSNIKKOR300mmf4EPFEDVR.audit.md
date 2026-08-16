# Audit Log - Nikon AF-S NIKKOR 300mm f/4E PF ED VR

Patent: JP 2015-102852 A, Example 1, Fig. 1 (PDF page 16)

## 2026-08-16 - Screenshot-led patent figure and metadata audit

### Semi-diameters

- Compared the current diagram and every element band directly with Fig. 1. The front G1a taper, smaller G1b pair, LF waist, rear LC1/VR/LC2 train, and final L30 opening agree with the source silhouette.
- The automated photogrammetry screen is contaminated by the dense radius leaders and group brackets on this figure, so its outlier values were rejected in favor of the zoomed visual check as required by the SD audit procedure.
- No element shows strong figure evidence beyond the approximately 25% change threshold. No SD was changed.

### Materials, labels, and movement

- Retained the production-correlated one-ED and one-PF classification. L12 is marked inferred ED; the two unpublished DOE resins remain unresolved and uncolored.
- Added first-party HIKARI J-LLF1 Sellmeier coverage for L28 (`548455`) and resolved the compatible L14 substrate to a disclosed J-BK7A catalog-equivalent proxy.
- Shortened diagram annotations to the source roles D1, D2, LF, LC1, D3, and LC2 to prevent label collisions.
- Confirmed the single rigid LF doublet moves 13.489772 mm imageward from infinity toward the reconstructed near state. This prime lens has no zoom travel.

### Verification

- Per-lens image-circle audit: passed with 0 undersized surfaces.
- Per-lens surface validator and regenerated glass-report suite: passed.
- `npm run typecheck`, `npm run format:check`, `npm run lint`, `npm run test` (2,493 tests), and `npm run build` (1,112 prerendered routes): passed.
