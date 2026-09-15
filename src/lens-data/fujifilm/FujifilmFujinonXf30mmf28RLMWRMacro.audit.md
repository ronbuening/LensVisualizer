# FUJIFILM FUJINON XF 30mm f/2.8 R LM WR Macro — integration audit

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
