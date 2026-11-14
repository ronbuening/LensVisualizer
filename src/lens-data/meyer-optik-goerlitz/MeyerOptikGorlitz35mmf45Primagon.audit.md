# Audit Log — meyer-optik-gorlitz-primagon-35f45

## 2026-09-28 — Patent figure, glass, and metadata audit

Source: `patents/DE_1749770_U.pdf`, PDF p. 6 (single optical section). Original prescription coordinates were checked visually against the source table; published radii, axial spacings, indices, Abbe numbers and image-plane distances are preserved.

### Optical rims

600 dpi crop: 0.14,0.24,0.77,0.65; axis 0.443. Automated rear rows are contaminated by leaders and the tilted axis. Manual optical-rim estimates using the ≈529 px glass span at 1400 px page height give ≈20, 6.9, 5.0 and 5.3 mm, within about 15% of existing 19, 7.5, 4.8 and 5.7 mm. Retained.

Stop diameter and inferred stop location are unchanged. No focus-motion law is added.

### Glass classification

| Element | Before resolution | After resolution | Patent nd / νd |
| --- | --- | --- | --- |
| L1 | Abbe fallback | FK5 | 1.48709 / 70.3 |
| L2 | Abbe fallback | N-SSK5 | 1.65883 / 51 |
| L3 | Abbe fallback | F7 | 1.62542 / 35.5 |
| L4 | Abbe fallback | H-ZK1 | 1.56905 / 63 |

Resolved catalog curves are qualified spectral proxies. They do not identify historical suppliers or melts. No patent coordinates are changed and no catalog line indices or anomalous-dispersion flags are copied into the lens data. The analysis glass table is synchronized.

Added H-ZK1 from the official CDGM datasheet, https://www.cdgmgd.com/webapp/pdf/H-ZK1.pdf (accessed 2026-09-28), including all six published Sellmeier constants, nd 1.56888 and νd 62.96. It improves the crown-class proxy match without claiming historical CDGM supply.

### Metadata and display

Existing display name retained; product correlation remains qualified in the analysis.

### Local diagram follow-up

Rechecked the local-site SVG against the exact patent figure cited above, including optical rims, element order, labels and glass colors. Retained the reviewed SDs: the optical silhouette is consistent within drawing/measurement uncertainty, excluding bevels, leaders and mechanical extensions. All elements are spherical; there is no source evidence for ED or anomalous-dispersion tags. The focus control is disabled and no focal-length zoom slider is present. This fixed prescription supplies no focus/zoom endpoints whose direction could be reversed. User-facing focus text now states the modeling limit in plain language.

## 2026-11-03 — Image-plane consistency (re-solve)

Policy: LENS_DATA_SPEC § Image-Plane Consistency (back focus first; a prime with no focus travel solves its final gap
once).

| Field | Before | After | Justification |
| --- | --- | --- | --- |
| Surface 8 `d` (back focus) | 35.35 | 34.854758 | Paraxial focus at infinity; printed s′ 101 × 0.35 |

- Residual: −0.495242 mm (20.8 depths of focus at f/4.5) → 0.000000 mm. The first-vertex-to-image track is now
  74.755 mm (75.250 before).
- EFL is unchanged at 34.574906 mm. There is no focus travel and no close row; `closeFocusM` 0.4 m stays the maker's
  figure from the 1957 brochure.
- Not a best-focus plane: real-ray axial best focus was −0.636 mm from the printed plane, beyond the −0.495 mm
  paraxial focus. After the re-solve it lies about −0.14 mm from the plane.
- Evidence for the cause (source rounding, class B):
  - Claim 4's table (PDF p. 5) matches the file; Σd = 114 checks.
  - The radii, printed in half units, trace to f 98.79 and s′ 99.59 against the printed 100 and 101.
  - A ±0.25 rounding Monte Carlo lands within 0.5 of both printed values in 16 % of draws.
  - Single moves of 0.27–0.39 units on r3, r6 or r8 each restore both. Several candidates fit equally, so no
    single value is isolated and there is no erratum.

Follow-ups: none.
