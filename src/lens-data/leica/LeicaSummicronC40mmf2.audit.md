# Audit Log — LEICA SUMMICRON-C 40mm f/2

## 2026-09-15 — Patent figure, glass and integration review

### Source and semi-diameters

Local source: `patents/DE_2222892_A1.pdf`, Common cross-section; Example 3 / claim 4 native-e table on PDF p. 7. The exact local PDF was inspected; the glass coordinates and reference line were checked in the cited table.

Figure screening: `npm run audit:patent-figure -- src/lens-data/leica/LeicaSummicronC40mmf2.data.ts patents/DE_2222892_A1.pdf 10 0.245,0.37,0.700,0.685 --axis=0.528 --dpi=600`. Optical rims were inspected visually; stop lines, leaders, plate P, and mechanical flanges were excluded. No patent publishes the authored per-surface clear apertures.

No SD changes. The common, tilted cross-section is not a separately dimensioned Example 3 drawing. Its inner/rear optical rims agree approximately with the modeled values; front ENV/RIM estimates disagree because leaders and adjacent curved outlines contaminate the mapping. The visually read front rim is about 12 mm versus 14.2 mm authored, below the strong-change threshold and without reliable exact-example radial scale. Retained the ray-envelope apertures and all cemented steps.

### Glass classification

| Element | Retained patent index / Abbe | Runtime curve | Native-reference residual (index / Abbe) |
|---|---|---|---|
| L1 | 1.81527 / 45.06 (e) | Unmatched | No compatible catalog curve |
| L2 | 1.81527 / 45.06 (e) | Unmatched | No compatible catalog curve |
| L3 | 1.79180 / 25.87 (e) | SF56A | -0.000001 / 0.003 |
| L4 | 1.64062 / 35.09 (e) | S-TIM6 | -0.000008 / 0.035 |
| L5 | 1.69232 / 49.18 (e) | Unmatched | No compatible catalog curve |
| L6 | 1.64304 / 59.85 (e) | N-LAK21 | -0.000003 / 0.008 |

3/6 elements resolve to trusted catalog dispersion. Catalog names are supplier-neutral spectral proxies, not proof of patent or production glass identity. Patent indices/Abbe numbers remain unchanged. Coefficients for existing rows retain their vendor provenance in the shared catalog; no resolver tolerance was relaxed.

Added SCHOTT N-LAK21 from the official Optical Glass datasheet collection (May 2019), PDF p. 54, sheet dated 2014-02-01: B=[1.22718116, 0.420783743, 1.012848430], C=[0.00602075682, 0.0196862889, 88.4370099], nd=1.64049, vd=60.10, ne=1.64304, ve=59.86. [Vendor source](https://www.schott.com/en-gb/products/optical-glass/-/media/Project/OnEx/Products/O/optical-glass/Downloads/schott-optical-glass-collection-datasheets-english-may2019.pdf). The sheet was visually checked against its extracted constants.

L4 now explicitly names the native-e-compatible S-TIM6 curve; the old F6/six-digit label could not resolve an e-line row. L1/L2 and L5 remain unmatched. The lint failure was `no-loss-of-precision` on L5's `fl: 75.40341577817457`; spelling the already-rounded runtime value `75.40341577817456` fixes it without changing optical behavior.

### Display and verification

Display name: **LEICA SUMMICRON-C 40mm f/2**. Marketing focal lengths/apertures remain separate from the patent design values, and production correlations stay qualified. Focus is labeled “Not modeled”; no finite-focus motion was invented.

- Surface validator and image-circle audit: passed, zero undersized surfaces.
- Production SVG render diagnostics at the static prescription: no SD trims.
- Minimum sampled common-aperture element thickness: 0.1369 mm; maximum authored rim angle: 60.51°.
- Focused dispersion, buildLens and element-render suites passed (142 tests), including catalog consistency.
- Maximum positive shared-rim sag intrusion / air-gap ratio across sampled states: 0.0000, below the 0.90 policy.
- Full repository gates passed: typecheck, format check, lint, all 274 test files / 2,700 tests, and production build (1,351 prerendered pages).
- Changelog entries use the UTC date 2026-09-15, verified against 2026-09-15T14:27:20Z; existing entries retain their dates and identities.
- Loaded the final lens route in the local application and visually compared its SVG silhouette and display labels with the inspected patent figure.

## 2026-09-15 — Local-site diagram and movement follow-up

Compared the local-site cross-section with the exact local patent figure again, including glass silhouettes, asphere marks, numbered elements, cemented boundaries, group signs and the stop/image labels. All element shape labels agree with the signs of the retained prescription radii.

No further SD change: the remaining rim differences do not provide strong evidence beyond the prior audit, or include mechanical outlines rather than optical aperture.

**Movement:** The static prescription has no zoom or authored finite-focus travel. The disabled focus control correctly reports Not modeled. Published wide/middle/tele rows remain in increasing focal-length order; no unsupported focus displacement was added.

**Glass and labels:** all resolved entries now name the actual runtime spectral proxy and explicitly retain supplier uncertainty. No APD tag is justified for this native-e prescription. No additional complete, compatible published dispersion curve was found for the six remaining batch gaps; coverage stays 56/62 elements.

**Assignees:** reviewed the 64-name corpus inventory and this publication. The four Panasonic publications share Panasonic Intellectual Property Management Co., Ltd.; the two German publications share Ernst Leitz GmbH. Existing canonical names are already consolidated. Historical legal renames and distinct subsidiaries remain separate.

**Verification:** surface/image-circle audits, five-state render diagnostics, local-site wide/tele controls (zooms), disabled focus controls, and the required typecheck/format/lint/test/build gates.
