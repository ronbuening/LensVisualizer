# Audit Log — SONY FE PZ 16-35mm f/4 G

Patent: JP 2023-44106 A, Example 5

## 2026-08-11 — Figure, metadata, and glass audit

### Semi-diameters

The image-circle audit reported zero undersized surfaces. The prescription already uses the patent's published effective
diameters divided by two. Figure 53 visually agrees with the front-group taper; its small rear groups and labels are too
dense for reliable automated photogrammetry. The source `phi/2` values were therefore retained without adjustment.

### Glass classification

All 13 elements resolve through existing coefficient-backed six-digit coordinate families. The patent names no glass
supplier, so the vendor-unresolved coordinate labels were retained. No missing reusable glass type was found and no
catalog expansion was needed.

### Identity and metadata

The display name was checked against Sony model SELP1635G and retained as `SONY FE PZ 16-35mm f/4 G`. The three inventor
names were romanized to the repository's canonical spellings: Kohei Uemura, Tetsuichiro Okumura, and Naoki Miyagawa.

### Verification

- `npm run audit:image-circle -- ./src/lens-data/sony/SonyFEPZ1635mmf4G.data.ts`
- `npm run audit:patent-figure -- ./src/lens-data/sony/SonyFEPZ1635mmf4G.data.ts patents/JP2023044106A.pdf 91 0.14,0.57,0.46,0.69`
