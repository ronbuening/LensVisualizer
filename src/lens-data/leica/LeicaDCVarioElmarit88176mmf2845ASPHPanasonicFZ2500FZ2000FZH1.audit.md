# Audit Log — LEICA DC VARIO-ELMARIT 8.8-176mm f/2.8-4.5 ASPH. (Panasonic Lumix FZ2500 / FZ2000 / FZH1)

## 2026-09-15 — Patent figure, glass and integration review

### Source and semi-diameters

Local source: `patents/US20180081156A1.pdf`, Fig. 1(a), Numerical Example 1; Table 1 on PDF p. 19. The exact local PDF was inspected; the glass coordinates and reference line were checked in the cited table.

Figure screening: `npm run audit:patent-figure -- src/lens-data/leica/LeicaDCVarioElmarit88176mmf2845ASPHPanasonicFZ2500FZ2000FZH1.data.ts patents/US20180081156A1.pdf 2 0.281,0.278,0.723,0.412 --dpi=600`. Optical rims were inspected visually; stop lines, leaders, plate P, and mechanical flanges were excluded. No patent publishes the authored per-surface clear apertures.

No SD changes. At 60.87 µm/px, the clean front rims measure approximately 24.7 / 22.7 / 21.3 mm; existing 25.9 / 25.3 / 22.8 mm values retain ray clearance and are within the figure-review noise band. The remaining optical rims are close to the modeled outline. The automatic L4/L5 and rear-group outliers are leader-line contamination or axial mapping into a neighboring element; the 600-dpi crop shows no matching oversized optical rims. No numerical outlier was copied into the prescription.

### Glass classification

| Element | Retained patent index / Abbe | Runtime curve | Native-reference residual (index / Abbe) |
|---|---|---|---|
| L1 | 1.90366 / 31.3 (d) | J-LASFH13 | 0.000000 / -0.026 |
| L2 | 1.59282 / 68.6 (d) | FCD515 | 0.000004 / 0.030 |
| L3 | 1.59282 / 68.6 (d) | FCD515 | 0.000004 / 0.030 |
| L4 | 1.95375 / 32.3 (d) | J-LASFH21 | 0.000000 / 0.030 |
| L5 | 1.80525 / 40.9 (d) | S-LAH53 | 0.000848 / 0.026 |
| L6 | 1.94595 / 18 (d) | FDS18 | -0.000005 / -0.020 |
| L7 | 1.77182 / 49.6 (d) | S-LAH66N | 0.000678 / -0.052 |
| L8 | 1.49700 / 81.6 (d) | H-FK61 | -0.000000 / 0.013 |
| L9 | 1.88300 / 40.8 (d) | S-LAH58 | -0.000003 / -0.035 |
| L10 | 1.55024 / 75.6 (d) | FCD705 | 0.000083 / -0.100 |
| L11 | 1.69895 / 30 (d) | SF15 | 0.000001 / 0.000 |
| L12 | 1.68820 / 31.1 (d) | S-TIM28 | 0.000731 / -0.025 |
| L13 | 1.68820 / 31.1 (d) | S-TIM28 | 0.000731 / -0.025 |
| L14 | 1.80420 / 46.5 (d) | N-LASF44 | -0.000000 / 0.000 |
| L15 | 1.80525 / 40.9 (d) | S-LAH53 | 0.000848 / 0.026 |
| L16 | 1.92119 / 24 (d) | FDS24 | -0.000001 / -0.040 |

16/16 elements resolve to trusted catalog dispersion. Catalog names are supplier-neutral spectral proxies, not proof of patent or production glass identity. Patent indices/Abbe numbers remain unchanged. Coefficients for existing rows retain their vendor provenance in the shared catalog; no resolver tolerance was relaxed.

Newly named proxies: L5/L15 S-LAH53, L10 FCD705, L12/L13 S-TIM28. Their partial-dispersion signs agree with the patent. The authored patent dPgF values remain authoritative; catalog g-line values do not overwrite them.

### Display and verification

Display name: **LEICA DC VARIO-ELMARIT 8.8-176mm f/2.8-4.5 ASPH. (Panasonic Lumix FZ2500 / FZ2000 / FZH1)**. Marketing focal lengths/apertures remain separate from the patent design values, and production correlations stay qualified. Focus is labeled “Not modeled”; no finite-focus motion was invented.

- Surface validator and image-circle audit: passed, zero undersized surfaces.
- Production SVG render diagnostics at wide, quarter, middle, three-quarter and tele zoom states: no SD trims.
- Minimum sampled common-aperture element thickness: 0.2455 mm; maximum authored rim angle: 60.25°.
- Focused dispersion, buildLens and element-render suites passed (142 tests), including catalog consistency.
- Maximum positive shared-rim sag intrusion / air-gap ratio across sampled states: 0.7679, below the 0.90 policy.
- Full repository gates passed: typecheck, format check, lint, all 274 test files / 2,700 tests, and production build (1,351 prerendered pages).
- Changelog entries use the UTC date 2026-09-15, verified against 2026-09-15T14:27:20Z; existing entries retain their dates and identities.
- Loaded the final lens route in the local application and visually compared its SVG silhouette and display labels with the inspected patent figure.
