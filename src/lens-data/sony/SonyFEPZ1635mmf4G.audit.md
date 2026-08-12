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

## 2026-08-12 — Display screenshot follow-up

The rendered site screenshot was compared directly with Patent Figure 53 at the wide state. The silhouette remains
consistent with the patent-published effective diameters (`sd = phi/2`), so those source dimensions were retained. The
eight aspherical-surface tags, L22/L23 cement label, stop, and five group labels agree with the prescription and figure.

The diagram now displays the patent identifiers L11–L14, L21–L23, L31–L32, L41–L43, and L51. All 13 elements resolve
to existing coefficient-backed catalog curves. Because the patent supplies optical coordinates but no commercial glass
names or spectral-line measurements, the supplier-unresolved class labels remain the most defensible classification;
no new catalog entry was warranted.
