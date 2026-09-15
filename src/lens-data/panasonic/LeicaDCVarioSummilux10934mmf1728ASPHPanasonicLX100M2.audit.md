# Audit Log — LEICA DC VARIO-SUMMILUX 10.9-34mm f/1.7-2.8 ASPH. (Panasonic Lumix DC-LX100M2)

## 2026-09-15 — Patent figure, glass and integration review

### Source and semi-diameters

Local source: `patents/US20160054550A1.pdf`, Fig. 1(a), Example 1; Table 1 on PDF p. 24. The exact local PDF was inspected; the glass coordinates and reference line were checked in the cited table.

Figure screening: `npm run audit:patent-figure -- src/lens-data/panasonic/LeicaDCVarioSummilux10934mmf1728ASPHPanasonicLX100M2.data.ts patents/US20160054550A1.pdf 2 0.419,0.279,0.690,0.390 --dpi=600`. Optical rims were inspected visually; stop lines, leaders, plate P, and mechanical flanges were excluded. No patent publishes the authored per-surface clear apertures.

| Surfaces | Before (mm) | After (mm) | Evidence |
|---|---|---|---|
| 22A / 23A (L11) | 9.2 / 9.2 | 11.8 / 11.8 | 46.87 µm/px scale; clean rear optical rim about 253 px from axis, or 11.86 mm. About 29% larger than authored. |

Other elements retained. In particular, L2's outer rectangular blank is not its usable aspheric rim. Leader lines through L5 do not establish a larger aperture. Updated rear departures relative to the same-radius sphere: 22A +62.3 µm, 23A +449.8 µm.

### Glass classification

| Element | Retained patent index / Abbe | Runtime curve | Native-reference residual (index / Abbe) |
|---|---|---|---|
| L1 | 1.59282 / 68.6 (d) | FCD515 | 0.000004 / 0.030 |
| L2 | 1.80500 / 41 (d) | S-LAH53 | 0.001098 / -0.074 |
| L3 | 1.80518 / 25.5 (d) | SF6 | 0.000002 / -0.070 |
| L4 | 1.91082 / 35.3 (d) | H-ZLaF4LA | 0.000000 / -0.050 |
| L5 | 1.68826 / 31.1 (d) | S-TIM28 | 0.000671 / -0.025 |
| L6 | 1.58332 / 59.3 (d) | M-BACD12 | -0.000190 / 0.160 |
| L7 | 2.00272 / 19.3 (d) | E-FDS2 | 0.000003 / 0.020 |
| L8 | 1.55343 / 71.5 (d) | M-FCD500 | -0.000111 / 0.180 |
| L9 | 1.77250 / 49.6 (d) | J-LASF016 | 0.000000 / 0.020 |
| L10 | 1.84666 / 23.8 (d) | J-SF03 | 0.000000 / 0.000 |
| L11 | 1.55343 / 71.5 (d) | M-FCD500 | -0.000111 / 0.180 |

11/11 elements resolve to trusted catalog dispersion. Catalog names are supplier-neutral spectral proxies, not proof of patent or production glass identity. Patent indices/Abbe numbers remain unchanged. Coefficients for existing rows retain their vendor provenance in the shared catalog; no resolver tolerance was relaxed.

Newly named proxies: L2 S-LAH53, L3 SF6, L5 S-TIM28, L6 M-BACD12, L8/L11 M-FCD500. These are qualified coordinate matches, including molding-family data where available, without claiming an exact melt.

### Display and verification

Display name: **LEICA DC VARIO-SUMMILUX 10.9-34mm f/1.7-2.8 ASPH. (Panasonic Lumix DC-LX100M2)**. Marketing focal lengths/apertures remain separate from the patent design values, and production correlations stay qualified. Focus is labeled “Not modeled”; no finite-focus motion was invented.

- Surface validator and image-circle audit: passed, zero undersized surfaces.
- Production SVG render diagnostics at wide, quarter, middle, three-quarter and tele zoom states: no SD trims.
- Minimum sampled common-aperture element thickness: 0.1145 mm; maximum authored rim angle: 46.07°.
- Focused dispersion, buildLens and element-render suites passed (142 tests), including catalog consistency.
- Maximum positive shared-rim sag intrusion / air-gap ratio across sampled states: 0.6821, below the 0.90 policy.
- Full repository gates passed: typecheck, format check, lint, all 274 test files / 2,700 tests, and production build (1,351 prerendered pages).
- Changelog entries use the UTC date 2026-09-15, verified against 2026-09-15T14:27:20Z; existing entries retain their dates and identities.
- Loaded the final lens route in the local application and visually compared its SVG silhouette and display labels with the inspected patent figure.

## 2026-09-15 — Local-site diagram and movement follow-up

Compared the local-site cross-section with the exact local patent figure again, including glass silhouettes, asphere marks, numbered elements, cemented boundaries, group signs and the stop/image labels. All element shape labels agree with the signs of the retained prescription radii.

No further SD change: the remaining rim differences do not provide strong evidence beyond the prior audit, or include mechanical outlines rather than optical aperture.

**Movement:** G1, G3, G4 and G5 move objectward. G2 moves imageward then reverses objectward; G6 moves objectward then slightly imageward. Close-focus G6 travel is objectward (patent paragraph 0046). Published wide/middle/tele rows remain in increasing focal-length order; no unsupported focus displacement was added.

**Glass and labels:** all resolved entries now name the actual runtime spectral proxy and explicitly retain supplier uncertainty. 5 APD tags now distinguish catalog-inferred deviations with per-element evidence notes. No additional complete, compatible published dispersion curve was found for the six remaining batch gaps; coverage stays 56/62 elements.

The four Panasonic fixed-camera lenses consistently use Panasonic maker metadata while retaining their LEICA DC optical branding. Focus help is shortened to the published direction and missing-spacing limitation.

**Assignees:** reviewed the 64-name corpus inventory and this publication. The four Panasonic publications share Panasonic Intellectual Property Management Co., Ltd.; the two German publications share Ernst Leitz GmbH. Existing canonical names are already consolidated. Historical legal renames and distinct subsidiaries remain separate.

**Verification:** surface/image-circle audits, five-state render diagnostics, local-site wide/tele controls (zooms), disabled focus controls, and the required typecheck/format/lint/test/build gates.
