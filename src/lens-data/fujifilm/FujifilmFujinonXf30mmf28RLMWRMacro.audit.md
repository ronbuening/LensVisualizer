# FUJIFILM FUJINON XF 30mm f/2.8 R LM WR Macro — integration audit

## 2026-09-25 — Source-state review

Source-state review outcome: verified. Both authored candidates reviewed; infinity and life-size are
enabled. The finite distance is published, with an explicit first-surface reference. Intermediate travel
is not certified.

Visually inspected local `patents/CN116500768A.pdf` pages 25–26 and 42: Example 1 Tables 1–2,
paragraph 0317, and Table 25. All 23 source rows match the retained prescription, including physical
PP surfaces 22–23, which expand exactly once. Paragraph 0317 explicitly places the closest object
18.2 mm before the first surface. Table 25 gives |β|=1. No production specification substitutes for
that distance. The patent notes rounding in paragraph 0326.

| Gap (mm) | Infinity | Closest |
|---|---:|---:|
| DD14 | 2.301 | 10.754 |
| DD19 | 13.210 | 4.757 |
| d21, before PP | 17.731 | 17.731 |
| PP thickness / following air | 2.850 / 1.094 | 2.850 / 1.094 |

At focusT=1 the fixed first-vertex-to-image matrix gives A=-1.000034724319364 and
B=18.201295690745386 mm. Its source solution is 18.20066368508695 mm before the first surface,
or 100.20666368508695 mm object-to-image. This differs from the published distance by 0.000664 mm
(0.00365%); magnification differs from 1 by 0.00348%. The declaration retains the published 18.2 mm.
Independent exact-ray roots at 0.01/0.005/0.0025 mm first-vertex heights give
18.200670893635/18.200665486098/18.200664135340 mm, with axial residuals below 3.97e-9 mm and
signed magnification approaching -1.000034726185. The rounded infinity matrix's formal finite source
near 757 m is not treated as a finite state.

The stop remains inferred and supplier curves remain qualified proxies. Existing source-condition-table
discrepancies remain documented in the analysis. No geometry, image plane, aperture or glass changes.

## 2026-09-15 (UTC)

### Patent geometry

Source: local untracked `patents/CN116500768A.pdf`, PDF page 47, Fig. 1; inspected at 600 dpi.

Retained all SDs. At 600 dpi, the clean front, middle and rear rims are within approximately 4–16% of the existing element maxima. The automated 12.27 mm readings for G2 are annotation/bracket contamination: the optical component widths in the zoom are approximately 950–1030 px, or 8.8–9.6 mm at 18.56 µm/px, rather than the bracket extent. No strong discrepancy remains after separating glass from figure ink.

### Glass classification

The patent nd/νd coordinates are retained. The following existing catalog curves pass the shared coordinate guard; they are dispersion proxies, not evidence of a production supplier or historical melt. No complete per-element nC/nF/ng or unsupported partial-dispersion values were introduced. All 11 elements resolve; no additional catalog type is required.

| Element | Patent nd / νd | Runtime curve | Catalog minus patent nd / νd |
| --- | --- | --- | --- |
| L11 | 1.58254 / 59.44 | L-BAL42 | 0.000586 / -0.054 |
| L12 | 1.51633 / 64.14 | S-BSL7 | 0.000000 / 0.000 |
| L13 | 1.80611 / 33.29 | J-LASFH6 | -0.000010 / 0.055 |
| L14 | 1.497 / 81.54 | FCD1 | 0.000000 / 0.070 |
| L15 | 1.77047 / 29.74 | NBFD29 | 0.000000 / 0.000 |
| L16 | 1.497 / 81.54 | FCD1 | 0.000000 / 0.070 |
| L17 | 1.6935 / 53.2 | M-LAC130 | 0.000000 / 0.000 |
| L21 | 1.98613 / 16.48 | FDS16-W | -0.000010 / 0.000 |
| L22 | 1.6727 / 32.17 | H-ZF2 | 0.000000 / 0.000 |
| L23 | 1.883 / 39.22 | H-ZLaF68N | 0.000000 / 0.000 |
| L31 | 1.51633 / 64.06 | S-BSL7 | 0.000000 / 0.080 |

### Metadata

Display names follow the catalog's uppercase manufacturer/line convention. Canonical maker and assignee spelling and romanized inventor names are used while the analysis preserves source wording and qualified production correlations.

### Second figure, glass and live-diagram review

Table 1 explicitly publishes effective diameters ED and θgF for Example 1. The final SDs now equal ED/2 on every refractive surface, removing the earlier 0.30–0.40 mm padding. The wider Fig. 1 mechanical rim is not treated as additional optical aperture. The stop remains inferred because its diameter is not tabulated.

All eleven θgF values are converted directly to dPgF = θgF − (0.6438 − 0.001682νd). L14/L16 have +0.03083028 and patent-backed APD coloring; L21 has +0.04949936 and is labeled anomalous high-dispersion flint, not ED. Other glasses keep their standard/high-index colors. No complete nC/nF/ng overrides are authored.

Added the previously absent OHARA L-BSL7 low-softening-temperature entry from OHARA_260701.AGF, with the vendor's formula-2 coefficients. L31 now selects L-BSL7 explicitly (nd 1.51633, νd 64.065129, θgF approximately 0.53343), matching the patent's 1.51633/64.06/0.53345 more closely than S-BSL7. Removed the obsolete L-BSL7 → S-BSL7 alias. The existing 516641 bare-code precedence remains S-BSL7. All eleven elements retain compatible catalog coverage without implying production suppliers.

The live focus slider orders infinity before the 10 cm state. Only G2 moves imageward by 8.453 mm; DD14/DD19 change from 2.301/13.210 to 10.754/4.757 mm. G1 and G3 remain fixed.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Replaced the air-equivalent fold (surface 21A d = 20.703955696203 mm) with the patent's physical rear stack from
  Table 1 (PDF page 26, text layer confirmed on the rendered page): D21 = 17.731 mm, then `rearPlates` PP 2.850 mm,
  nd 1.51680, νd 64.20, θgF 0.53430 (dPgF −0.0015156), and 1.094 mm to the image plane. Glass label N-BK7 (catalog
  1.51680 / 64.17, compatible); the plate is traced by every analysis and hidden from the diagram and element lists.
- Paraxial check against the previous data: EFL identical and defocus unchanged (worst |Δ| 5e-13 mm) at infinity and
  the 0.1 m keyframe, because the old fold was stored unrounded. Physical track grows by 2.850 × (1 − 1/1.51680) =
  0.971 mm to 82.006 mm, the patent's raw geometric length.
