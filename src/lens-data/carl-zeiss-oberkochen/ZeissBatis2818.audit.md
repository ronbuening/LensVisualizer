# ZEISS BATIS 18mm f/2.8 — integration audit

## 2026-09-15 (UTC)

### Patent geometry

Source: local untracked `patents/JP2016188967A.pdf`, PDF page 27, Fig. 1; inspected at 600 dpi.

S1: 14.6 → 19.8 mm; S2: 12.4 → 14.0 mm; S3: 11.0 → 14.4 mm; S4: 9.8 → 10.3 mm. The 600 dpi front optical rims span about 786 px for S1 and 566 px for S3 at 50.57 µm/px. S2 is capped at 14.0 mm: the 14.2 mm candidate exceeded the 64.2° rim-slope limit. Optical curves end before the mechanical rim on the rear sides. Remaining SDs are retained; the automated ENV/RIM columns are contaminated by dimension leaders and group brackets. All edited surfaces are spherical, so the aspheric departure table is unchanged.

### Glass classification

The patent nd/νd coordinates are retained. The following existing catalog curves pass the shared coordinate guard; they are dispersion proxies, not evidence of a production supplier or historical melt. No complete per-element nC/nF/ng or unsupported partial-dispersion values were introduced. All 11 elements resolve; no additional catalog type is required.

| Element | Patent nd / νd | Runtime curve | Catalog minus patent nd / νd |
| --- | --- | --- | --- |
| L111 | 1.5935 / 67 | J-PSKH4 | -0.000010 / 0.001 |
| L112 | 1.497 / 81.61 | H-FK61 | 0.000000 / 0.003 |
| L113 | 1.592 / 67.02 | M-PCD51 | 0.000010 / 0.000 |
| L114 | 1.881 / 40.14 | TAFD33 | 0.000000 / 0.000 |
| L115 | 1.881 / 40.14 | TAFD33 | 0.000000 / 0.000 |
| L116 | 1.4875 / 70.44 | H-QK3L | -0.000010 / 0.000 |
| L117 | 1.4971 / 81.56 | H-FK61 | -0.000100 / 0.053 |
| L121 | 1.729 / 54.04 | M-TAC80 | 0.000030 / 0.000 |
| L131 | 1.497 / 81.61 | H-FK61 | 0.000000 / 0.003 |
| L132 | 1.497 / 81.61 | H-FK61 | 0.000000 / 0.003 |
| L133 | 1.882 / 37.22 | M-TAFD307 | 0.000020 / 0.000 |

### Metadata

Display names follow the catalog's uppercase manufacturer/line convention. Canonical maker and assignee spelling and romanized inventor names are used while the analysis preserves source wording and qualified production correlations.

### Second figure, glass and live-diagram review

The second local-site comparison exposed an oversized G12/G13 outline that was obscured by leaders in the first automated crop. At 50.57 µm/px, the clean optical half-widths are approximately 8.3 mm (G12), 10.2 mm (L131), and 10.8 mm (L132/L133). S15A/S16A now use 8.3 mm; S17/S18 use 10.2 mm; S19–S22A use 10.8 mm. S22A previously extended 28% beyond the measured rim. The front-element rear faces remain slope-limited rather than extending onto mechanical steps. The source curves and focus distances are unchanged.

L112/L117/L131/L132 now have inferred APD tags from the compatible 497816 fluor-crown class (H-FK61 proxy ΔPgF ≈ +0.0315). No patent-measured partial dispersion or supplier identity is claimed. Explicit catalog proxy names make the existing runtime curve choices visible. The live focus control moves G12 imageward from D14/D16 = 1.472/6.519 to 2.318/5.674 mm; G11/G13 remain fixed.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Read Example 1 (¶0095, native PDF text layer, PDF pp. 12–13): surfaces 23–24 are cover glass CG, named in ¶0088 and the reference list. Its values are d23 = 2.500 mm, nd 1.5168, νd 64.20, and d24 = 1.000 mm to the image plane. The printed d22 = 25.606 remains an apparent table error. Surface 22A now stores the derived correction d22 = 22.083 mm, not a printed value, with legacy fold 24.731207 − 2.500/1.5168 − 1.000 = 22.083. `rearPlates` CG uses glass N-BK7 (1.51680 / 64.17 class) and gapAfter 1.000 mm.
- Paraxial check against the previous data: EFL identical; defocus unchanged at both focus keyframes (0.000196 / 1.835132 mm). The modeled image plane is exactly the previous corrected one. Physical track grows by 0.852 mm, from 91.126 to 91.978 mm, the corrected physical source track the analysis already used for condition (5) and the MFD check.

## 2026-10-07 — Source erratum: surface 14A A10 sign

Supersedes the analysis statement "The rendered patent page 14 confirms that surface 14A has a positive A10 term of
+2.3692×10^-11 mm^-9". Page 14 does print the positive sign; the print contradicts the rest of the patent.

| Surface | Field | Printed (Example 1, p. 14, ¶0096) | Applied | Evidence |
|---|---|---|---|---|
| 14A | `A10` | +2.3692×10⁻¹¹ | −2.3692×10⁻¹¹ | `sibling-example`, `aberration-figure` |

Traced at infinity on the d line, printed sign → corrected sign (EFL 18.5415 mm either way):

- `sibling-example` — Example 4 (pp. 23–24, ¶0152–¶0153) reprints the surface as its surface 13: r = −18.338,
  nd 1.4971, A4 +5.1791×10⁻⁵, A6 −5.2286×10⁻⁷, A8 +4.0083×10⁻⁹, and A10 = −2.3692×10⁻¹¹. Its other radii, glasses and
  seven aspheres equal Example 1's; it moves the stop behind L417 and prints D(16) = 5.8194, so it is a reprint of the
  surface, not of the whole table. Traced as printed its axial marginal ray shows −0.33 mm; with A10 positive,
  +14.9 mm. The corresponding surface 14 of Example 2 (p. 17, ¶0115) and Example 3 (p. 21, ¶0134) carries
  A10 = −1.7504×10⁻¹¹ and −1.9738×10⁻¹¹.
- `aberration-figure` — Fig. 2 (p. 27) plots the Example 1 infinity spherical aberration at FNO = 2.88 on a ±0.50 mm
  axis; at 600 dpi the three curves stay between −0.02 and +0.06 mm. The axial marginal ray at entrance height
  18.54 / (2 × 2.88) = 3.219 mm crosses the axis +15.07 → −0.024 mm from the near-axis focus (0.7 zone +0.33 →
  +0.014 mm).

Not counted as a third kind: ¶0097 states FNO 2.88, and the same ray leaves at 1/(2 sin U′) = 4.03 → 2.878, but the
stop is calibrated to that FNO paraxially, so this is the spherical aberration above read as an f-number, not
independent `source-summary` evidence. The stated ω = 50.29° does not discriminate either: the chief ray lands at
21.615 mm with either sign.

Analysis sync: the "confirms … positive A10" sentence is replaced by the erratum paragraph, asphere table row 14A
carries the applied sign, and the rim-departure table is recomputed at the file's semi-diameters. The second
2026-09-15 review moved 15A/16A/21A/22A to Fig. 1 rims without updating that table, so "the aspheric departure table
is unchanged" in the first 2026-09-15 section no longer held.

| Surface | Semi-diameter | Departure before | Departure after |
|---|---:|---:|---:|
| 14A | 9.4 mm | +0.415595 mm | +0.160377 mm |
| 15A | 10.0 → 8.3 mm | −0.070980 mm | −0.038075 mm |
| 16A | 9.9 → 8.3 mm | +0.024660 mm | +0.008548 mm |
| 21A | 13.1 → 10.8 mm | −0.593282 mm | −0.294303 mm |
| 22A | 13.8 → 10.8 mm | −0.190148 mm | −0.018945 mm |

Semi-diameters: none changed. Surfaces 5A–14A keep the construction-trace envelopes; they sit at or ahead of 14A, and
a re-traced envelope (axial plus 0.60 field through the 7.559 mm stop, ×1.10) is the same for both signs to 0.01 mm.
Surfaces 15A–22A are the Fig. 1 rims. The pre-figure rear values (21A 13.1 mm, 22A 13.8 mm) match the as-printed
full-field bundle (12.67 / 13.30 mm) to about 4 %; with the corrected sign that bundle reaches 10.66 / 10.69 mm,
against the 10.8 mm rim measured from Fig. 1. Rim of 14A at 9.4 mm: slope 17.3° → 30.2°, no turnover.

## 2026-10-07 — Source erratum: d22 is the back focus, not the gap to the cover glass

Supersedes the 2026-09-23 statement "The printed d22 = 25.606 remains an apparent table error. Surface 22A now stores
the derived correction d22 = 22.083 mm": that value was a paraxial solve of the model, not a reading of the source.

| Surface | Field | Printed (Example 1, p. 13, ¶0095) | Applied | Evidence |
|---|---|---|---|---|
| 22A | `d` | 25.606 | 22.106 | `sibling-example`, `aberration-figure` |

Paraxial trace of the four printed tables on the d line (gap from surface 22 to the cover glass, then 2.500 mm of
nd 1.5168 and 1.000 mm of air):

| Example | Printed d22 | Image plane minus paraxial focus | Sum of thicknesses | Stated L | Stated BF |
|---|---:|---:|---:|---:|---:|
| 1 | 25.606 | +3.523 mm | 95.501 | 95.501 | 29.106 |
| 1 with d22 = 22.106 | — | +0.023 mm | 92.001 | — | — |
| 2 | 22.428 | +0.020 mm | 92.000 | 92.000 | 25.928 |
| 3 | 20.338 | +0.021 mm | 92.000 | 92.000 | 23.838 |
| 4 | 25.606 | +2.842 mm | 94.801 | 94.801 | 29.106 |

- `sibling-example` — Examples 2 and 3 are designed to a 92.000 mm total length, state BF = d22 + 2.500 + 1.000, and
  place the image plane 0.020 and 0.021 mm behind paraxial focus. Example 1 meets all three only if its printed
  25.606 is read as the back focus: d22 = 25.606 − 3.500 = 22.106 gives 92.001 mm, BF 25.606 and +0.023 mm. Example 4
  repeats Example 1's 25.606 and 29.106; its +2.842 mm also carries the 0.70 mm D(16) discrepancy noted in the A10
  entry above.
- `aberration-figure` — Fig. 2 (p. 27) plots the infinity spherical aberration within 0.06 mm of the image plane on a
  ±0.50 mm axis. The printed gap puts paraxial focus 3.523 mm in front of that plane; 22.106 puts it 0.023 mm in front.

Not counted as evidence: the stated BF 29.106 and L 95.501 agree with the printed column because they are sums of
it, so they repeat the double count instead of testing it. The stated f, FNO and ω do not depend on d22.

Model change: surface 22A d 22.083 → 22.106 mm, so the authored image plane moves 0.023 mm away from the lens. EFL and
every other value are unchanged. Analysis sync: physical track 91.978 → 92.001 mm, TL/EFL 4.960644 → 4.961884,
condition (5) 0.463078 → 0.462962, object-to-image distance at the 158.000 mm state 249.978 → 250.001 mm, close-state
paraxial residual +0.055374 → +0.032374 mm.
