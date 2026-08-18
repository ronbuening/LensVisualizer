# Nikon AF-S DX MICRO-NIKKOR 40mm f/2.8 G Patent Audit

Patent: US 2011/0170195 A1, Example 1

## 2026-08-18 — Initial integration audit

- Reviewed the untracked local patent PDF `patents/US20110170195A1.pdf`; the infinity section of Figure 1 on PDF page 2 is the controlling optical section.
- Refined the inferred SDs to better reproduce the fuller rear half of G1 and the narrower G2/G3 outline in the patent figure.

| Surfaces | Before (mm) | After (mm) |
|---|---:|---:|
| 5 / 6 / 7 / 8 | 9.6 / 9.3 / 8.7 / 8.1 | 10.5 / 10.2 / 10.0 / 9.4 |
| 13 / 14A | 10.3 / 10.3 | 9.0 / 9.0 |
| 15 / 16 / 17 / 18 | 9.3 / 9.1 / 9.2 / 9.3 | 8.2 / 8.0 / 8.0 / 8.0 |

- Recomputed surface 14A at the new 9.0mm rim: sag `-1.580828mm`, reference-sphere sag `-1.650574mm`, and departure `+0.069746mm`.
- Relabeled L12, L13, and L23 to catalog-compatible HOYA `NBFD13`, `BACD4`, and `M-PCD4`. These provide checked dispersion curves while remaining explicitly vendor-unproven patent correlations.
- The display name was reviewed and already follows the project convention.

### Verification

- `npm run audit:surface -- src/lens-data/nikon/NikonAFSDXMicroNikkor40mmf28G.data.ts --scan 14A 9`
- `npm run audit:image-circle -- src/lens-data/nikon/NikonAFSDXMicroNikkor40mmf28G.data.ts`
- Full repository checks are recorded in the integrating commit.
