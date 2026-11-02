# Audit Log — LEICA DC VARIO-ELMARIT 8.8-176mm f/2.8-4.5 ASPH. (Panasonic Lumix FZ2500 / FZ2000 / FZH1)

## 2026-09-15 — Patent figure, glass and integration review

### Source and semi-diameters

Local source: `patents/US20180081156A1.pdf`, Fig. 1(a), Numerical Example 1; Table 1 on PDF p. 19. The exact local PDF was inspected; the glass coordinates and reference line were checked in the cited table.

Figure screening: `npm run audit:patent-figure -- src/lens-data/panasonic/LeicaDCVarioElmarit88176mmf2845ASPHPanasonicFZ2500FZ2000FZH1.data.ts patents/US20180081156A1.pdf 2 0.281,0.278,0.723,0.412 --dpi=600`. Optical rims were inspected visually; stop lines, leaders, plate P, and mechanical flanges were excluded. No patent publishes the authored per-surface clear apertures.

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

## 2026-09-15 — Local-site diagram and movement follow-up

Compared the local-site cross-section with the exact local patent figure again, including glass silhouettes, asphere marks, numbered elements, cemented boundaries, group signs and the stop/image labels. All element shape labels agree with the signs of the retained prescription radii.

No further SD change: the remaining rim differences do not provide strong evidence beyond the prior audit, or include mechanical outlines rather than optical aperture.

**Movement:** G2 moves imageward; G3 and the stop reverse at the middle sample; G4 moves objectward during zoom and imageward for close focus. G1 and G5 remain fixed in the source first-vertex frame; the normalized image-plane solution shifts by 0.0322 mm across the range. Published wide/middle/tele rows remain in increasing focal-length order; no unsupported focus displacement was added.

**Glass and labels:** all resolved entries now name the actual runtime spectral proxy and explicitly retain supplier uncertainty. 6 APD tags now distinguish patent-listed deviations with per-element evidence notes. No additional complete, compatible published dispersion curve was found for the six remaining batch gaps; coverage stays 56/62 elements.

The four Panasonic fixed-camera lenses consistently use Panasonic maker metadata while retaining their LEICA DC optical branding. Focus help is shortened to the published direction and missing-spacing limitation.

**Assignees:** reviewed the 64-name corpus inventory and this publication. The four Panasonic publications share Panasonic Intellectual Property Management Co., Ltd.; the two German publications share Ernst Leitz GmbH. Existing canonical names are already consolidated. Historical legal renames and distinct subsidiaries remain separate.

**Verification:** surface/image-circle audits, five-state render diagnostics, local-site wide/tele controls (zooms), disabled focus controls, and the required typecheck/format/lint/test/build gates.

## 2026-10-08 - dPgF moved to the engine's normal line

### Patent evidence

- Local `patents/US20180081156A1.pdf` (25 pages) is the right document. It states **no formula and no normal line** for its partial-dispersion deviation. ¶0145 (PDF p. 19) defines the Table column only as "dPgF is an anomalous dispersion of g-line and F-line"; conditions (5)/(6) and ¶0122–¶0129 (PDF p. 18) and the claims (PDF p. 25) repeat that wording. No absolute PgF / θgF and no nC, nF or ng is printed anywhere.
- Table 1 (PDF p. 19) prints a deviation for every glass row of Numerical Example 1. All sixteen stored `dPgF` values equalled those printed figures exactly, so the file had copied the patent's deviation straight into a field the engine reads against 0.6438 − 0.001682·νd. Table 13 (PDF p. 24) prints conditions (5) and (6) as 0.0194.
- Because the patent gives no line, the line was inferred from the printed figures, not read. Eleven of the seventeen Table 1 rows sit on a HOYA catalog nd/νd and carry that glass's HOYA catalog ΔPgF to four decimals (ΔPgF field of the local `tmp/pdfs/HOYA20260707_include_obsolete.agf`): TAFD25 +0.0028 (L1), FCD515 +0.0194 (L2, L3), TAFD45 0.0000 (L4), FDS18 +0.0386 (L6), FCD1 +0.0375 (L8), TAFD30 −0.0094 (L9), E-FD15 +0.0086 (L11), TAF3 −0.0066 (L14), FDS24 +0.0151 (L16) and BSC7 +0.0016 (plate P). Eight more HOYA glasses in Examples 2–4 (PDF pp. 21–23) do the same: FDS90, FD60, TAFD40, TAFD5G, FD225, TAC8, E-FDS2 and BAFD7. None of those rows equals the OHARA or Sumita catalog figure for the same coordinate.
- HOYA measures ΔPgF from its own normal line through C7 and F2. Those two AGF entries carry ΔPgF = 0 and evaluate to νd 60.4859 / PgF 0.539443 and νd 36.3034 / PgF 0.583011, which gives PgF = 0.64842 − 0.001802·νd. Read on the engine's line, the plate row (1.51680 / 64.2, +0.0016) would mean PgF 0.5374; read on HOYA's line it means 0.5343, which is the BSC7 curve value (0.534281).

### Change

For the rows whose line is established, PgF = printed deviation + 0.64842 − 0.001802·νd and `dPgF` = PgF − (0.6438 − 0.001682·νd), at the stored νd, to six decimals (`dpgfcheck.mjs --dev <deviation> <vd> 0.64842 0.001802`). The commonly quoted 0.64833 − 0.0018·νd form of the same line gives results within 0.0001 of these.

| Element | νd | Source figure (Table 1, PDF p. 19) | Stored before | Stored after |
|---|---:|---|---:|---:|
| L1 | 31.3 | +0.0028 = HOYA TAFD25 ΔPgF; PgF 0.594817 | 0.0028 | 0.003664 |
| L2 | 68.6 | +0.0194 = HOYA FCD515 ΔPgF; PgF 0.544203 | 0.0194 | 0.015788 |
| L3 | 68.6 | +0.0194 = HOYA FCD515 ΔPgF; PgF 0.544203 | 0.0194 | 0.015788 |
| L4 | 32.3 | 0.0000 = HOYA TAFD45 ΔPgF; PgF 0.590215 | 0 | 0.000744 |
| L5 | 40.9 | −0.0066; no HOYA glass at 1.80525 / 40.9 | −0.0066 | −0.0066 (unchanged) |
| L6 | 18.0 | +0.0386 = HOYA FDS18 ΔPgF; PgF 0.654584 | 0.0386 | 0.041060 |
| L7 | 49.6 | −0.0070; no HOYA glass at 1.77182 / 49.6 | −0.007 | −0.007 (unchanged) |
| L8 | 81.6 | +0.0375 = HOYA FCD1 ΔPgF; PgF 0.538877 | 0.0375 | 0.032328 |
| L9 | 40.8 | −0.0094 = HOYA TAFD30 ΔPgF; PgF 0.565498, engine-line −0.009676 | −0.0094 | −0.0094 (unchanged) |
| L10 | 75.6 | +0.0194; nearest HOYA glass FCD705 (1.55032 / 75.50) lists +0.0277 | 0.0194 | 0.0194 (unchanged) |
| L11 | 30.0 | +0.0086 = HOYA E-FD15 ΔPgF; PgF 0.602960 | 0.0086 | 0.009620 |
| L12 | 31.1 | +0.0074; no HOYA glass at 1.68820 / 31.1 | 0.0074 | 0.0074 (unchanged) |
| L13 | 31.1 | +0.0074; no HOYA glass at 1.68820 / 31.1 | 0.0074 | 0.0074 (unchanged) |
| L14 | 46.5 | −0.0066 = HOYA TAF3 ΔPgF; PgF 0.558027 | −0.0066 | −0.007560 |
| L15 | 40.9 | −0.0066; no HOYA glass at 1.80525 / 40.9 | −0.0066 | −0.0066 (unchanged) |
| L16 | 24.0 | +0.0151 = HOYA FDS24 ΔPgF; PgF 0.620272 | 0.0151 | 0.016840 |

- Cross-check only, not used for any value: the HOYA AGF curves of the nine converted glasses, put on the engine's line, agree with the new figures within 0.00012.
- `apdNote` on L2, L3, L6, L8 and L16 now quotes the patent's printed deviation, HOYA's line, the recovered PgF and the runtime value. The header comment gained a partial-dispersion paragraph. No nd, νd, glass label, `apd` tag or surface changed, and no `dPgF` was added.
- Analysis: the sentences that said the data file keeps the patent's dPgF directly now give the stored values and the reason; a normal-line paragraph was added under Glass Identification and Selection. The condition (5)/(6) discussion and table keep the patent's +0.0194, labelled as the patent's deviation.
- The 2026-09-15 statement above that "the authored patent dPgF values remain authoritative" describes the file as it stood then. The patent's figures are still the source; nine of them are now stored on the engine's line.

### Left

- **L9**: on HOYA's line the engine value is −0.009676, within 0.0003 of the stored −0.0094, so it stays exactly as it was.
- **L5, L15, L7, L12, L13**: their printed coordinates match no HOYA catalog glass, so the line behind their figures is not established and nothing was converted. All five are aspherical elements, which suggests moulding glasses carried at post-moulding indices. Read on HOYA's line they would become −0.006888 (L5, L15), −0.008332 (L7) and +0.008288 (L12, L13); read on OHARA's NSL7–PBM2 line (0.64164 − 0.001623·νd from those two entries of the local OHARA AGF) about −0.0063, −0.0062 and +0.0071. The printed +0.0074 for L12/L13 equals the current OHARA catalog ΔPgF of L-TIM28 (1.68948 / 31.02 in the local AGF), which is why a single-line reading of the whole column was not assumed. The stored patent figures lie between the two readings.
- **L10**: the printed +0.0194 at 1.55024 / 75.6 is not HOYA's figure for the only catalog glass near that coordinate (FCD705, 1.55032 / 75.50, ΔPgF +0.0277). Examples 2–4 print the same +0.0194 against 1.55032 / 75.5 exactly, and +0.0194 is FCD515's figure, so it reads like a value carried over inside the designers' glass list. On HOYA's line it would imply PgF 0.5316 and a stored +0.014948; the FCD705 catalog curve gives PgF 0.5400, +0.023345 on the engine's line. No PgF can be recovered with confidence, so the patent figure stays unconverted with its original `apdNote`. This one needs a maintainer ruling.
- The file therefore mixes two conventions: nine elements on the engine's line and seven on the patent's printed figure. The header comment lists which is which.
- No element authors nC, nF or ng, and none uses `indexReference: "e"`. `dpgfcheck.mjs` reports that the file still builds and validates.

### Second read

- Re-read on the page: no formula or normal line anywhere in the patent (the only mentions of dPgF are PDF pp. 18, 19, the tables on pp. 19–23 and the claims on p. 25); all seventeen Table 1 figures; Table 3A/3B (PDF p. 20) confirm the file transcribes Numerical Example 1. The eighteen HOYA matches were re-checked against the AGF: put on the C7–F2 line, their curves give the listed ΔPgF within 0.0002, where the engine's line misses by up to 0.0052. All nine converted values recompute to six decimals; no stored value was changed in this pass.
- Further evidence for not converting the off-catalog rows: Examples 3 and 4 (PDF pp. 22–23) print +0.0211 against a 1.58332 / 59.3 crown. That would mean PgF 0.563 or more on the HOYA, OHARA or engine line, while every glass near that coordinate in the three local AGFs has PgF 0.538–0.544 and a listed deviation between −0.0062 and 0; +0.0211 is the figure HOYA lists for M-FCD500. With the +0.0194 printed for the FCD705-type glass (L10 here), that is two rows whose printed deviation does not belong to the glass, so the figures of rows that carry no HOYA catalog value are not a safe basis for a PgF.
- Still open for a ruling: L10 (+0.0194 kept; +0.014948 on HOYA's line; +0.023345 from the FCD705 curve), L7 (−0.0070 kept; −0.008332 on HOYA's line) and L12/L13 (+0.0074 kept; +0.008288 on HOYA's line). L5/L15 stay within 0.0003 on HOYA's line either way.


## 2026-10-27 — Rimmer localization audit (asphere data)

### Source and retained prescription

US 2018/0081156 A1, Numerical Example 1: Figure 1(a), PDF p. 2; Figure 2(a-c), PDF p. 3; paragraphs 0145-0154 and Tables 1-2, PDF p. 19 (printed p. 8); Table 2 continued and Tables 3A-3D, PDF p. 20 (printed p. 9). Table cells and the equation were read from 220-dpi page images, with 400-dpi coefficient crops; the optical rims were inspected at 600 dpi.

Every retained radius, fixed thickness, medium index and Abbe number agrees with Table 1 after the already documented five cement collapses and omitted plate/refocus normalization. The cement junctions are source 2/3, 17/18, 21/22, 27/28 and 31/32: the surviving downstream thicknesses remain 7.055, 0.505, 0.505, 0.505 and 0.805 mm. All five variable lens gaps and the three focal-length station labels agree with Table 3A. No prescription transcription error was found.

| Surface | Table 2 location | Terms checked | Finding |
|---|---|---|---|
| 9A | PDF p. 19, surface 9 | K, A4, A6, A8, A10, A12 | All match, including K +3.51523 and A12 zero |
| 10A | PDF p. 19, surface 10 | K, A4, A6, A8, A10, A12 | All match; K and A12 zero |
| 14A | PDF p. 19, surface 14 | K, A4, A6, A8, A10, A12 | All match; K +0.836518, A12 -4.68713e-13 |
| 15A | PDF p. 19, surface 15 | K, A4, A6, A8, A10, A12 | All match; K and A12 zero |
| 24A | PDF p. 20, surface 24 | K, A4, A6, A8, A10, A12 | All match; K and A12 zero |
| 25A | PDF p. 20, surface 25 | K, A4, A6, A8, A10, A12 | All match; K and A12 zero |
| 26A | PDF p. 20, surface 26 | K, A4, A6, A8, A10, A12 | All match; K and A12 zero |
| 30A | PDF p. 20, surface 30 | K, A4, A6, A8, A10, A12 | All match; K and A12 zero |

The printed denominator is sqrt(1 - (1 + κ)(h/r)^2), and An multiplies h^n. Units are millimetres, without normalization or geometric scaling. There are no printed odd terms or nonzero A14 terms. K is therefore copied directly, not κ - 1. Diagnostic changes of 14A K to -0.836518, -0.163482 or zero give wide-end marginal LSA -218.244, +139.361 or +78.091 mm respectively, against -0.041 mm retained and the Figure 2 ±0.2 mm axis. Those alternatives are rejected, not source errata corrections. A single-slip screen of the 14A/15A block also tried sign, ×10, /10 and zero per K/A4-A12 term, same-power column swaps and one-place coefficient shifts. Every nontrivial candidate either failed stored-geometry validation or exceeded the Figure 2 spherical-aberration scale at one or more stations/pupil samples; multiplying existing zeros was a no-op. No source-supported replacement emerged.

### Rim decisions

No rim changed. 25A's verbatim polynomial first turns over at 4.557307 mm, inside its 6.1 mm rim, and a cap at
4.5 mm (with 24A square) was tried: it keeps every stated axial beam, but it stops the wide-end chief ray at 33.41°
(about H = 5.42 mm), short of Table 3A's 41.1636° / H = 6.8100 mm, and the wide curve then withholds RI at
16.7-30.6° as isolated cells. A cap that clips the chief ray to the source's printed image height is not applied
(SD procedure Step 6), so 24A/25A keep 6.2/6.1 mm. 10A and 24A turn over only beyond their rims (about 13.13 and 7.03 mm);
9A, 14A, 15A, 26A and 30A have no turnover. At 14A's 9.9 mm rim the slope is 60.25°, below the 64.2° limit, and
the conic domain ends near 10.40 mm.

The Figure 1 screening scale is 60.87 µm/px. L7's rim estimator is about 8.58 mm against 9.9 mm authored (13 %,
inside the figure's noise), while the ink envelope reads 16.74 mm because of leaders and marks; the clean L9 rear
outline is about 6.88 mm against the authored 7.6 mm. Neither reaches the >25 % figure-only threshold.

### Localization, plots and remaining limits

At 20.55° wide, neighbouring lower-pupil rays reach 14A at 8.23, 9.10 and 10.09 mm with incidence 47°, 55° and 77°; their meridional transverse errors are about 0.004, 0.484 and 11.781 mm. This high-angle branch starts before 25A. Rimmer's reference radius is about 160.8 mm, so materially aberrated rays can remain under its 5% guard.

Figure 2 uses SA/AST axes ±0.2 mm and DIS ±10%, with wide F=2.91/H=6.81, middle F=4.32/H=7.92 and tele F=4.63/H=7.92. Retained marginal LSA is -0.041/-0.007/+0.088 mm across the three stations, consistent with the plotted scale. The close-ray astigmatism is small over most of the wide field but departs near its edge (T/S -0.116/+0.042 mm at 40.99°); this does not quantitatively reproduce the near-axis Figure 2 astigmatism curves. Distortion is barrel, -14.316% at 40.25°, while Figure 2's wide curve reaches roughly -14% to -15% near H=6.81, extending left of its -10% tick. A scratch reconstruction restoring all five cement media and plate P gives EFLs 9.1400/39.1040/168.6755 mm and marginal LSA -0.043/-0.029/+0.076 mm; it does not remove the edge astigmatism discrepancy. No unique printed-cell erratum is established.

With the rims as stored, the wide curve keeps relative illumination at every field but reads 1.17-1.52 at 15-38°, where the rays through 14A's steep zone are referred to the image point across a 160.8 mm sphere. Middle and tele fields keep RI at every sample. These are model outputs, not physical illumination.

### Analysis sync and follow-ups

The data header states the direct conic convention, the retained 25A rim and the unresolved RI limitation; the analysis needed no change.

Coordinator follow-up: retain the lens as unresolved for wide-end Rimmer localization; review the high-incidence 14A branch, and the off-axis engine/plot comparison. The source gives no physical clear apertures that isolate an additional correction. No source.errata entry is added because no printed optical value has been shown wrong; the unresolved quantities are modeled aperture and trace interpretation. Existing cement/plate normalization and source-summary caveats remain. Full repository gates and integration remain with the coordinator.
