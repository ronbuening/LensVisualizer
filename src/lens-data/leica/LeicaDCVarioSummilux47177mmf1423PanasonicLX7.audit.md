# Audit Log — LEICA DC VARIO-SUMMILUX 4.7-17.7mm f/1.4-2.3 (Panasonic Lumix DMC-LX7)

## 2026-09-15 — Patent figure, glass and integration review

### Source and semi-diameters

Local source: `patents/US20150124127A1.pdf`, Fig. 1(a), Numerical Example 1; Table 1 on PDF p. 19. The exact local PDF was inspected; the glass coordinates and reference line were checked in the cited table.

Figure screening: `npm run audit:patent-figure -- src/lens-data/leica/LeicaDCVarioSummilux47177mmf1423PanasonicLX7.data.ts patents/US20150124127A1.pdf 2 0.399,0.272,0.766,0.407 --dpi=600`. Optical rims were inspected visually; stop lines, leaders, plate P, and mechanical flanges were excluded. No patent publishes the authored per-surface clear apertures.

| Surfaces | Before (mm) | After (mm) | Evidence |
|---|---|---|---|
| 1 / 2 (L1) | 9.55 / 9.55 | 13.4 / 13.4 | 32.76 µm/px scale; front optical rim about 410 px from axis, or 13.43 mm. |
| 22A / 23 (L11) | 2.9 / 2.9 | 4.7 / 4.7 | Clean last-lens rim about 144 px from axis, or 4.72 mm; sensor plate P excluded. |

The original image-circle check reported surface 23 short by 0.13 mm, with an unreliable wide-angle proxy warning. The increase is independently figure-supported, and the revised floor check reports zero undersized surfaces. Surface 22A departure is now −27.1 µm at 4.7 mm; its actual slope stays negative throughout the scanned domain. The L2 rectangular flange and leader-line outliers near L8 were excluded. All other SDs retained.

### Glass classification

| Element | Retained patent index / Abbe | Runtime curve | Native-reference residual (index / Abbe) |
|---|---|---|---|
| L1 | 1.83481 / 42.7 (d) | S-LAH55 | -0.000003 / 0.014 |
| L2 | 1.80500 / 41 (d) | S-LAH53 | 0.001098 / -0.074 |
| L3 | 1.59282 / 68.6 (d) | FCD515 | 0.000004 / 0.030 |
| L4 | 2.00272 / 19.3 (d) | E-FDS2 | 0.000003 / 0.020 |
| L5 | 1.60602 / 57.4 (d) | N-SK2 | 0.001361 / -0.750 |
| L6 | 1.77250 / 49.6 (d) | J-LASF016 | 0.000000 / 0.020 |
| L7 | 1.74077 / 27.8 (d) | E-FD13 | -0.000000 / -0.040 |
| L8 | 1.72825 / 28.3 (d) | H-ZF4A | 0.000000 / 0.019 |
| L9 | 1.55189 / 71.5 (d) | M-FCD500 | 0.001429 / 0.180 |
| L10 | 1.68400 / 31.3 (d) | Unmatched | No compatible catalog curve |
| L11 | 1.63550 / 23.9 (d) | Unmatched | No compatible catalog curve |

9/11 elements resolve to trusted catalog dispersion. Catalog names are supplier-neutral spectral proxies, not proof of patent or production glass identity. Patent indices/Abbe numbers remain unchanged. Coefficients for existing rows retain their vendor provenance in the shared catalog; no resolver tolerance was relaxed.

Newly named proxies: L2 S-LAH53, L5 N-SK2, L9 M-FCD500. The latter two are near-coordinate approximations (not matches at patent rounding precision); the table records their residuals. L10 1.68400/31.3 and L11 1.63550/23.9 remain unresolved.

### Display and verification

Display name: **LEICA DC VARIO-SUMMILUX 4.7-17.7mm f/1.4-2.3 (Panasonic Lumix DMC-LX7)**. Marketing focal lengths/apertures remain separate from the patent design values, and production correlations stay qualified. Focus is labeled “Not modeled”; no finite-focus motion was invented.

- Surface validator and image-circle audit: passed, zero undersized surfaces.
- Production SVG render diagnostics at wide, quarter, middle, three-quarter and tele zoom states: no SD trims.
- Minimum sampled common-aperture element thickness: 0.3100 mm; maximum authored rim angle: 46.14°.
- Focused dispersion, buildLens and element-render suites passed (142 tests), including catalog consistency.
- Maximum positive shared-rim sag intrusion / air-gap ratio across sampled states: 0.6450, below the 0.90 policy.
- Full repository gates passed: typecheck, format check, lint, all 274 test files / 2,700 tests, and production build (1,351 prerendered pages).
- Changelog entries use the UTC date 2026-09-15, verified against 2026-09-15T14:27:20Z; existing entries retain their dates and identities.
- Loaded the final lens route in the local application and visually compared its SVG silhouette and display labels with the inspected patent figure.
