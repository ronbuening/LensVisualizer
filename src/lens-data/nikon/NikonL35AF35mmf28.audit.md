# Audit Log — Nikon L35AF 35mm f/2.8

Patent: US 4,457,596, Embodiment 1

## 2026-05-20 — Glass relabel follow-up

### Patent evidence

- Reviewed local patent file `patents/US4457596.pdf`.
- Patent rows confirmed L2 / surface 3 and L4 / surface 7 both use nd = 1.77279, vd = 49.4.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L2 / S3 | `TAF5 (1773/494)` | `S-LAH66 (OHARA)` | Public OHARA catalog row is the closest coefficient-backed Sellmeier match. |
| L4 / S7 | `TAF5 (1773/494)` | `S-LAH66 (OHARA)` | Same repeated patent glass as L2. |

### Analysis sync

- Updated the L2/L4 glass discussion from historical TAF5 wording to the coefficient-backed S-LAH66 relabel.

## 2026-07-29 - Remaining catalog-mismatch audit

- Rechecked US 4,457,596 Embodiment 1 surface 5 before the documented 0.350007 scale: `R=-264.361`, `d=2.5762`, `nd=1.68893`, and `νd=31.1` agree with the stored scaled row.
- Relabeled L3 from the invalid `FD60 / S-TIM28 (1689/311)` wording to OHARA `S-TIM28`, whose exact code is 689311.
- Synchronized the L3 analysis and code table. No geometry or scale changed.

## 2026-08-07 - Near-complete glass opportunity

- Visually rechecked Embodiment 1 in local `patents/US4457596.pdf`; L1 is `nd=1.713`, `νd=54.0` and the data already identifies the historical LaK 8 family.
- Relabeled L1 to coefficient-backed Schott N-LAK8 (`nd=1.71300`, `νd=53.83`) as the modern catalog spectral equivalent to the rounded patent coordinate.
- The annotation leaves the production melt unspecified. No geometry or authored patent constants changed.

## 2026-09-23 — First-added diagram audit, lens 81

Source: local `patents/US4457596.pdf` (300 dpi CCITT scan; the OCR text layer is unreliable). Embodiment 1 table on
p. 8 (col. 4), Fig. 1 cross-section on p. 2 (sheet 1/5, axis horizontal), Fig. 2 aberrations on p. 3. Fig. 1 is the
patent's general optical-path figure, but its vertex spacings reproduce the Embodiment 1 table to about 0.1 mm
(scale 0.01912 mm/px at 600 dpi from the 579 px r1–r9 span = 11.072 mm), so it is used as this embodiment's drawing.

### Retained after re-reading the source

- Embodiment 1 is stored, and it matches the production L35AF: 5 elements in 4 groups, f/2.8, 2ω = 62.3°, 35 mm at
  the scale below. All nine R, eight d and five nd/νd rows match the rendered table after one uniform scale ×0.350007
  (35.0 / computed 99.998). Signs are printed explicitly in the table.
- Paraxial EFL 34.999 mm; last-surface back focus 26.706 mm (patent 76.3 × 0.35 = 26.71); total length 37.779 mm
  (patent 107.9 × 0.35 = 37.77). Thick-lens element focal lengths 42.79 / 35.23 / −12.89 / 10.73 / −21.44 mm and
  doublet 20.76 mm reproduce the stored `fl` values and the patent's f1 122.3, f2 100.6, f3 −36.8, f4,5 59.3 at f = 100.
- Element types and `fl` signs agree with the R signs (L1, L2 positive menisci convex to the object; L3 biconcave;
  L4 biconvex; L5 negative meniscus convex to the image). All spherical; no `asph`.
- `nominalFno` 2.8 = patent F2.8. `lensMounts: ["fixed-lens-camera"]` and `imageFormat: "135-full-frame"` are the
  canonical ids. Patent number, inventor, assignee and 1984 grant year match the front page.
- Fig. 2 distortion at 31.15° reads about +2% on the ±4% scale. The exact chief ray at 31.15° lands at
  21.60 mm, the full 135 half-diagonal.

### Changes

| Field | Before | After | Evidence |
|---|---|---|---|
| Surface 9 `d` / STO `d` | 0.7 / 26.007 | 0.9 / 25.807 | The patent tabulates no stop spacing. The Fig. 1 diaphragm mark is 48 px (0.92 mm) behind the r9 vertex (top mark 677.5 px, bottom 671.5 px, r9 626.5 px). This is a figure measurement and a model choice. Stop-to-image total is unchanged. |
| STO `sd` | 4.6 | 4.7 | f/2.8 iris radius at the new stop position (engine-derived 4.700 mm). The inner ends of the Fig. 1 diaphragm marks read 4.7 and 5.0 mm. |
| 1, 2 `sd` | 8.5 / 8.0 | 7.3 / 7.3 | Fig. 1 L1 edge flat 380 px above and 382 px below the axis (7.27 / 7.30 mm). The stored front rim was 16% larger than the element's drawn outer edge. Edge thickness at 7.3 mm is 1.01 mm. |
| 3 `sd` | 7.5 | 6.5 | Fig. 1 L2 edge flat 324 / 329 px (6.2 / 6.3 mm). 6.5 matches the retained rear rim (surface 4, 6.5 mm, within 4% of the figure). The axial beam needs 5.85 mm. |
| 5 `sd` | 5.4 | 5.49 | The old rim clipped the f/2.8 axial beam, which needs 5.489 mm. Fig. 1 shows a 5.9 mm edge, but the 0.852 mm r4–r5 air gap closes at about 5.5 mm, and 5.5 fails the renderer's gap-intrusion limit (0.77 of 0.767 mm). 5.49 is the largest valid rim. Fig. 1 shows L2 and L3 in edge contact. |
| 6 `sd` | 5.5 | 5.8 | Fig. 1 L3 edge flat 5.8 / 6.0 mm. 5.9 exceeds the r6–r7 gap-intrusion limit (1.36 of 1.353 mm). |
| Surfaces 7–9 `sd` | 6.0 | 6.0 (kept) | Fig. 1 doublet edge 5.36 / 5.49 mm is within 11% of the stored value. |
| `var.STO` close value | 27.608 (focused 800 mm from surface 1; 839 mm object-to-image) | 27.495 | Calculated extension 1.688 mm puts the 0.8 m production close focus at 800.0 mm object-to-image, the repo's `closeFocusM` convention. Magnification −0.048×. The patent publishes infinity data only. |
| `fstopSeries`, `maxFstop` | ends at f/22; default max f/16 | ends at f/16; `maxFstop: 17` | The production camera's programmed exposure runs f/2.8–f/17. f/22 was unreachable. |
| L1 `glass` | N-LAK8 (Schott; νd 53.83) | J-LAK8 (HIKARI catalog equivalent; 1.71300 / 53.96) | Closer to the patent's 1.713 / 54.0, and HIKARI is the maker-group supplier. Worded as a catalog equivalent; the patent names no glass. |
| L2, L4 `glass` | `S-LAH66 (OHARA)` | S-LAH66 catalog-equivalent wording | No catalog row has nd 1.77279. The 773/496 rows all sit at 1.77250 (Δnd 2.9 × 10⁻⁴). S-LAH66 is kept as the nearest non-moulding row, and the label now says the match is not exact. |
| L3 `glass` | S-TIM28 (exact 689311) | same, with catalog-equivalent wording | HIKARI J-SF8 has νd 31.16 (rounds to 31.2); S-TIM28 31.08 is closer. |
| L5 `glass` | `SK 16 / S-BSM16 (1620/604)` (resolved to S-BSM16) | N-SK16 (Schott catalog equivalent) | Closest νd (60.32 vs S-BSM16 60.29 and J-SK16 60.25) to the patent's 60.4. |
| Header and comments | ~0.7 mm stop "inferred from Fig. 1"; ray-trace rim estimate; historical TAF5/FD60 glass names | Figure-measured stop and rims; nd/νd codes with catalog equivalents | Records the evidence above. |

### Analysis sync

- §3: explicit table signs (the OCR text layer is what garbles them); scale 0.350007; stop position labelled as a
  figure measurement. §5: glass identifications reworded as catalog equivalents (J-LAK8, S-LAH66, S-TIM28, N-SK16),
  with L2/L4 corrected from "lanthanum crown" to lanthanum flint and the inexact nd stated. §7: focus rewritten as a
  calculated unit extension of 1.69 mm, with infinity-only patent data. §8/§11: the "~98% coverage / corner
  vignetting" claim is replaced by the real chief-ray result (21.60 mm at 31.15° because of the +2% pincushion), and
  the rim basis is recorded. §10: distortion is about +2%. §12: summary values updated.

### Checks on the result

- Surface validation clean; image-circle floor passes. The exact trace at 31.15° reaches y = 21.60 mm, and no
  surface clips the f/2.8 axial beam (tightest: surface 5, 5.49 vs 5.489 mm). At 28°, one-sided meridional
  clipping is 42% at L1 and 61% at L3 front. At 31.15°, L1 removes most of the lower half of the bundle. That is
  consistent with the reduced corner illumination.
- The engine's paraxial half-field estimate is now 30.1°, limited by L1 at 7.3 mm (before: 34.8°, beyond the design
  field). The real 31.15° chief ray passes L1 at 5.96 mm; the paraxial model overstates that height.
- Glass labels resolve to J-LAK8 (Δνd −0.04), S-LAH66 (Δnd −2.9 × 10⁻⁴), S-TIM28 (Δνd −0.02) and N-SK16
  (Δνd −0.08), all compatible with the patent pairs.
- Live, with the headless renderer: the production baseline shows L1 as the largest element (8.5 mm rim), an f/2.8–f/16
  slider and a 1.60 mm focus note. The local page at infinity and at 0.8 m shows the Fig. 1 taper
  (L1 > L2 > L3 ≈ doublet), the stop mark just behind L5, BF 25.81 → 27.50, and an f/2.8–f/17 slider. Off-axis
  rays were not inspected; the headless renderer cannot click.

### Open limitations

- Stop spacing and all rims are figure measurements. The patent lists neither clear apertures nor a diaphragm
  spacing.
- The close-focus state is calculated for unit extension; the patent publishes no near-focus data.
- The viewer's 30.1° paraxial half-field is about 1° short of the patent's 31.15°. A rectilinear `projection`
  override is reserved for ultrawides and was not used.
- L2/L4 nd 1.77279 has no exact catalog row; the S-LAH66 dispersion is an approximation (Δnd 2.9 × 10⁻⁴).
