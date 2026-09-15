# Audit Log — LEICA DC VARIO-ELMARIT 4.5-108mm f/2.8 (Panasonic Lumix DMC-FZ300)

## 2026-09-15 — Patent figure, glass and integration review

### Source and semi-diameters

Local source: `patents/US20150103211A1.pdf`, Fig. 1(a), Numerical Example 1; Table 1 on PDF p. 27. The exact local PDF was inspected; the glass coordinates and reference line were checked in the cited table.

Figure screening: `npm run audit:patent-figure -- src/lens-data/panasonic/LeicaDCVarioElmarit45108mmf28PanasonicFZ300.data.ts patents/US20150103211A1.pdf 2 0.394,0.238,0.756,0.38 --dpi=600`. Optical rims were inspected visually; stop lines, leaders, plate P, and mechanical flanges were excluded. No patent publishes the authored per-surface clear apertures.

| Surfaces | Before (mm) | After (mm) | Evidence |
|---|---|---|---|
| 7A / 8A (L4) | 6.0 / 5.4 | 7.7 / 7.5 | 47.90 µm/px scale; roughly 156–164 px optical semi-height. Excludes the extended rectangular blank. |
| 9 / 10 / 12 (L5/L6) | 5.0 / 5.3 / 5.5 | 7.7 / 7.7 / 7.7 | Shared cemented optical rim around 160 px, about 7.7 mm. |
| 13 / 14 (L7) | 5.6 / 5.8 | 7.2 / 7.2 | Clean neighboring rim around 150 px, about 7.2 mm; preserves the G2 neighborhood. |

All other SDs retained. Front G1 rims agree within about 9%; rear leader-line outliers do not support copying the ENV values. Revised asphere departures: 7A +212.3 µm at 7.7 mm; 8A +361.1 µm at 7.5 mm. Both scans retain the same slope sign.

### Glass classification

| Element | Retained patent index / Abbe | Runtime curve | Native-reference residual (index / Abbe) |
|---|---|---|---|
| L1 | 1.84666 / 23.8 (d) | J-SF03 | 0.000000 / 0.000 |
| L2 | 1.49700 / 81.6 (d) | H-FK61 | -0.000000 / 0.013 |
| L3 | 1.59282 / 68.6 (d) | FCD505 | 0.000007 / 0.030 |
| L4 | 1.88202 / 37.2 (d) | M-TAFD307 | 0.000003 / 0.020 |
| L5 | 1.77250 / 49.6 (d) | J-LASF016 | 0.000000 / 0.020 |
| L6 | 1.92286 / 20.9 (d) | N-SF66 | 0.000000 / -0.020 |
| L7 | 1.84666 / 23.8 (d) | J-SF03 | 0.000000 / 0.000 |
| L8 | 1.58332 / 59.1 (d) | M-BACD12 | -0.000190 / 0.360 |
| L9 | 1.48749 / 70.4 (d) | N-FK5 | 0.000000 / 0.010 |
| L10 | 1.64769 / 33.8 (d) | E-FD2 | -0.000000 / 0.040 |
| L11 | 1.51776 / 69.9 (d) | PCS1 | -0.000476 / -0.221 |
| L12 | 1.49700 / 81.6 (d) | H-FK61 | -0.000000 / 0.013 |
| L13 | 1.51776 / 69.9 (d) | PCS1 | -0.000476 / -0.221 |
| L14 | 1.54410 / 56.1 (d) | Unmatched | No compatible catalog curve |

13/14 elements resolve to trusted catalog dispersion. Catalog names are supplier-neutral spectral proxies, not proof of patent or production glass identity. Patent indices/Abbe numbers remain unchanged. Coefficients for existing rows retain their vendor provenance in the shared catalog; no resolver tolerance was relaxed.

Newly named proxies: L8 M-BACD12 and L11/L13 PCS1. L14 1.54410/56.1 remains unmatched. Production ED marketing counts do not establish element-level APD attribution.

### Display and verification

Display name: **LEICA DC VARIO-ELMARIT 4.5-108mm f/2.8 (Panasonic Lumix DMC-FZ300)**. Marketing focal lengths/apertures remain separate from the patent design values, and production correlations stay qualified. Focus is labeled “Not modeled”; no finite-focus motion was invented.

- Surface validator and image-circle audit: passed, zero undersized surfaces.
- Production SVG render diagnostics at wide, quarter, middle, three-quarter and tele zoom states: no SD trims.
- Minimum sampled common-aperture element thickness: 0.2418 mm; maximum authored rim angle: 44.65°.
- Focused dispersion, buildLens and element-render suites passed (142 tests), including catalog consistency.
- Maximum positive shared-rim sag intrusion / air-gap ratio across sampled states: 0.8511, below the 0.90 policy.
- Full repository gates passed: typecheck, format check, lint, all 274 test files / 2,700 tests, and production build (1,351 prerendered pages).
- Changelog entries use the UTC date 2026-09-15, verified against 2026-09-15T14:27:20Z; existing entries retain their dates and identities.
- Loaded the final lens route in the local application and visually compared its SVG silhouette and display labels with the inspected patent figure.
