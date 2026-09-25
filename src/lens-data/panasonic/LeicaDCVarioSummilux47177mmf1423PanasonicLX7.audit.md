# Audit Log — LEICA DC VARIO-SUMMILUX 4.7-17.7mm f/1.4-2.3 (Panasonic Lumix DMC-LX7)

## 2026-09-15 — Patent figure, glass and integration review

### Source and semi-diameters

Local source: `patents/US20150124127A1.pdf`, Fig. 1(a), Numerical Example 1; Table 1 on PDF p. 19. The exact local PDF was inspected; the glass coordinates and reference line were checked in the cited table.

Figure screening: `npm run audit:patent-figure -- src/lens-data/panasonic/LeicaDCVarioSummilux47177mmf1423PanasonicLX7.data.ts patents/US20150124127A1.pdf 2 0.399,0.272,0.766,0.407 --dpi=600`. Optical rims were inspected visually; stop lines, leaders, plate P, and mechanical flanges were excluded. No patent publishes the authored per-surface clear apertures.

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

## 2026-09-15 — Local-site diagram and movement follow-up

Compared the local-site cross-section with the exact local patent figure again, including glass silhouettes, asphere marks, numbered elements, cemented boundaries, group signs and the stop/image labels. All element shape labels agree with the signs of the retained prescription radii.

Surface 3A: **7.7 → 10.7 mm**. At 600 dpi the near-flat optical face spans approximately y=122–778 around axis y=450 in the saved figure crop; 328 px × 0.03276 mm/px gives 10.75 mm. The front face itself reaches this height; the rear-face mechanical shoulder is excluded. Surface 4A remains 7.7 mm. The new 3A aperture stays before the near-10.8 mm flattening/turnover boundary. Its same-radius-sphere departure is now −290.53 µm. Shared-aperture edge thickness, maximum rim angle and gap intrusion remain 0.3100 mm, 46.137° and 0.6450; renderer diagnostics report no trims at five zoom samples.

**Movement:** G1 moves imageward then reverses objectward; G2 moves imageward; G3 and G4 move objectward. G5 has only the 0.0175 mm normalization/rounding excursion. Close-focus G4/L10 travel is objectward. Published wide/middle/tele rows remain in increasing focal-length order; no unsupported focus displacement was added.

**Glass and labels:** all resolved entries now name the actual runtime spectral proxy and explicitly retain supplier uncertainty. 3 APD tags now distinguish catalog-inferred deviations with per-element evidence notes. No additional complete, compatible published dispersion curve was found for the six remaining batch gaps; coverage stays 56/62 elements.

The four Panasonic fixed-camera lenses consistently use Panasonic maker metadata while retaining their LEICA DC optical branding. Focus help is shortened to the published direction and missing-spacing limitation.

**Assignees:** reviewed the 64-name corpus inventory and this publication. The four Panasonic publications share Panasonic Intellectual Property Management Co., Ltd.; the two German publications share Ernst Leitz GmbH. Existing canonical names are already consolidated. Historical legal renames and distinct subsidiaries remain separate.

**Verification:** surface/image-circle audits, five-state render diagnostics, local-site wide/tele controls (zooms), disabled focus controls, and the required typecheck/format/lint/test/build gates.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Table 1 (PDF p. 19) prints surface 23 d = 0.40000, then plate P at surfaces 24–25: 0.90000 mm, nd 1.51680, νd 64.2.
  Table 3 (PDF p. 20) prints BF 0.62702 / 0.64271 / 0.62527 and overall length 62.7990 / 57.9551 / 65.9945 mm. Plate P
  is now in `rearPlates` as N-BK7 (`resolveCompatibleGlass` accepts 1.51680/64.2), with the wide BF 0.62702 mm as the fixed
  trailing gap.
- The file's code-solved paraxial image plane is kept. Surface 23 = legacy air-equivalent spacing − 0.9/1.5168 − 0.62702,
  which gives 0.400954 / 0.416574 / 0.399065 mm against the printed 0.40. The 0.0156 mm middle offset carries Table 3's BF
  variation, and the remaining ≤ 0.001 mm is the solved-image residual. Paraxial check against the previous data: EFL is
  identical, and defocus changes by less than 1e−6 mm at all three zoom states.
- Physical track grows by 0.3066 mm (0.9 × (1 − 1/1.5168)) to 62.800 / 57.956 / 65.995 mm. That now matches Table 3's
  overall lengths to within 0.001 mm.

## 2026-09-24 — Semi-diameters raised to the traced format corner

Table 3 (PDF p. 20) prints a wide half view angle of 42.1837° at image height 3.8210 mm (4.2680 mm at middle and tele).
The wide Y is 82% of the 1/1.7-inch corner (4.65 mm), so it is a design image circle: rims were sized to pass the chief
ray to Y only, and the corner stays short by design. The traced wide chief ray (solved through the stop centre) reaches
Y at 42.23°, where it needs surface 4A ≥ 7.77, 5 ≥ 7.62, 6 ≥ 7.62, 7 ≥ 7.69 and 8 ≥ 7.59 mm; the stored rims clipped it
from 38.3° (3.45 mm, 90% of Y). Values are floor + ~3% rounded up, with L3 and L4 kept equal front/rear. Surface 3A
(the L2 partner) is unchanged: L2 is a strong meniscus, 3A was measured at its optical rim on Fig. 1, and it sits just
short of its ~10.8 mm flattening. No figure measurement was used.

| Surface | Before | After | Justification |
|---|---|---|---|
| 4A | 7.7 | 8.1 | wide chief ray to Y 7.77 mm + ~3%; scan to 9.72 mm shows no turnover (conic domain ends at 9.715 mm) |
| 5 | 6.9 | 7.9 | wide chief ray to Y 7.62 mm + ~3%; the 4A→5 gap intrusion rejects 8.1 mm (5.19 > 5.116 mm) |
| 6 | 6.9 | 7.9 | wide chief ray to Y 7.62 mm + ~3%; L3 kept equal front/rear |
| 7 | 7.1 | 8.0 | wide chief ray to Y 7.69 mm + ~3% |
| 8 | 7.1 | 8.0 | L4 scaled with surface 7 (own floor 7.59 mm) |

The validator accepts the new values and the image-circle floor reports nothing undersized. The wide analysis edge now
reaches 43.7° → 3.96 mm (104% of Y, 85% of the corner), where surface 6 clips beyond Y; the unclipped chief-ray solve
fails past 45.6° (4.17 mm), so the 4.65 mm corner is not reachable at wide in any case. Middle and tele stay at 100%.
The 4A rim departure is now −1.0360 mm at 8.1 mm (was −0.7304 mm at 7.7 mm), the largest rim angle 48.418° (4A) and
the largest shared-gap sag intrusion 0.8639 (4A→5); `LeicaDCVarioSummilux47177mmf1423PanasonicLX7.analysis.md` quotes
those figures and was updated.
