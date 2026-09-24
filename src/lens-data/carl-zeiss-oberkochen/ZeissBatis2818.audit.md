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
