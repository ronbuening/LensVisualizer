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

## 2026-09-15 — Local-site diagram and movement follow-up

Compared the local-site cross-section with the exact local patent figure again, including glass silhouettes, asphere marks, numbered elements, cemented boundaries, group signs and the stop/image labels. All element shape labels agree with the signs of the retained prescription radii.

No further SD change: the remaining rim differences do not provide strong evidence beyond the prior audit, or include mechanical outlines rather than optical aperture.

**Movement:** G1 and G3 move objectward, G2 and G5 imageward; G4 reverses from imageward to objectward between the middle and tele samples. G6 has only a 0.0221 mm rounded-spacing excursion. Close-focus G4 travel is imageward. Published wide/middle/tele rows remain in increasing focal-length order; no unsupported focus displacement was added.

**Glass and labels:** all resolved entries now name the actual runtime spectral proxy and explicitly retain supplier uncertainty. 6 APD tags now distinguish catalog-inferred deviations with per-element evidence notes. No additional complete, compatible published dispersion curve was found for the six remaining batch gaps; coverage stays 56/62 elements.

The four Panasonic fixed-camera lenses consistently use Panasonic maker metadata while retaining their LEICA DC optical branding. Focus help is shortened to the published direction and missing-spacing limitation.

Shortened diagram group captions to G3 (+) and G4 (−) to prevent OIS/FOCUS text crowding the neighboring group labels; roles remain documented in the element descriptions and focus help.

**Assignees:** reviewed the 64-name corpus inventory and this publication. The four Panasonic publications share Panasonic Intellectual Property Management Co., Ltd.; the two German publications share Ernst Leitz GmbH. Existing canonical names are already consolidated. Historical legal renames and distinct subsidiaries remain separate.

**Verification:** surface/image-circle audits, five-state render diagnostics, local-site wide/tele controls (zooms), disabled focus controls, and the required typecheck/format/lint/test/build gates.

Additional material-source check: the [Mitsui APEL brochure](https://jp.mitsuichemicals.com/content/dam/mitsuichemicals/sites/mci/documents/sites/default/files/media/document/2020/apel_en.pdf.coredownload.inline.pdf) lists optical polymer grades around nd = 1.544 and νd = 56, near L14. It does not provide a complete coefficient curve or identify this patent material. This is a possible polymer-family coordinate, not grounds to add a glass curve, measured indices or a production supplier label. The Osaka Gas [OKP table](https://www.ogc.co.jp/products/fluorene/okp.html) likewise provides nominal polymer properties, not a verified compatible curve for LX7 L11.

## 2026-09-24 — Semi-diameters raised to the traced format corner

Numerical Example 1, Table 3 (printed p. 10 = PDF p. 27) prints half view angle 40.7907° and image height 3.4100 mm at
the wide limit, and 10.4346° / 3.9020 mm and 2.2365° / 3.9020 mm at the middle position and tele limit. The 1/2.3-inch
corner is 3.835 mm, so the wide design image circle stops short of it (the audit's unclipped wide chief ray stops
solving past 44.4°, at 3.82 mm) and the wide goal is the patent's own field, while the middle and tele states cover the
corner. Wide: the real chief ray (solved through the stop centre) at the patent's ω crosses 7A at 9.43 mm (sd 7.7) and
8A at 7.44 mm (sd 7.5), so the analysis field stopped at 34.6° (2.83 mm, 74% of the corner, 83% of the patent's Y).
Tele: the corner chief ray (2.20°) clipped at 28A (4.04 > 4.0) and 29 (3.89 > 3.8), leaving the field at 97.8%; the
triage review had not flagged this station. Values follow the small-format rule (floor + ~3%, rounded up to 0.1 mm).
8A (R 12.39) was not scaled with 7A: the 8A→9 cross-gap check fails from 7.7 mm, and the patent's wide ω crosses it
inside its rim. 28A and 29 each take their own floor.

Fig. 1(a) (PDF p. 2): the 2026-09-15 review sized L4 at the end of the concave 8A curve (about 160 px, 7.7 mm at its
47.90 µm/px scale) and excluded the extended rectangular blank as mechanical. Re-read at 600 dpi, the flat front face
(7A) is drawn straight out to the top of that rectangle (about 210 px, 10.1 mm), and the traced chief ray at the
patent's wide field meets 7A at 9.43 mm, so the front-face part of the "blank" must be optical clear aperture; the 8A
rim stays where that review put it.

| Surface | Before | After | Justification |
|---|---|---|---|
| 7A | 7.7 | 9.8 | wide chief ray at the patent's ω = 40.79° crosses at 9.43 mm; + ~3% |
| 28A | 4.0 | 4.2 | tele corner chief ray 4.04 mm; + ~3% |
| 29 | 3.8 | 4.1 | tele corner chief ray 3.89 mm; + ~3% |

The validator accepts the new values; 7A shows no slope reversal out to 11.8 mm and 28A none out to 8 mm (its slope
flattens near 5.2 mm, then steepens). At wide the traced field now reaches 41.19° and 3.449 mm, 101% of the patent's
Y = 3.41 mm and 89.9% of the 3.835 mm corner (it was 34.6° / 2.83 mm, 73.8%), stopped by the 8A rim, which the 8A→9
cross-gap check caps at 7.6 mm; the corner itself stays out of reach as above. The middle station stays at 100%; tele
rises from 97.8% to 100% with every rim clear, and at the patent's tele ω (2.2365°, image 3.900 mm) 28A and 29 keep
0.08 and 0.14 mm. The image-circle floor still reports nothing undersized. Rim departures are now +0.4773 mm (7A at
9.8 mm) and +0.3370 mm (28A at 4.2 mm), updated in the analysis; the largest rim angle (8A, 44.65°) and the thinnest
edge (L3, 0.2418 mm) are unchanged.
