# Audit Log — meyer-optik-gorlitz-lydith-30f35

## 2026-09-28 — Patent figure, glass, and metadata audit

Source: `patents/DE_1794971_U.pdf`, PDF p. 6 (single optical section; rotated 90°). Original prescription coordinates were checked visually against the source table; published radii, axial spacings, indices, Abbe numbers and image-plane distances are preserved.

### Optical rims

600 dpi crop after rotation: 0.40,0.38,0.73,0.71; axis 0.543. The 39.87 mm axial span gives about 20.11 µm/pixel. Optical rims give L2 ≈9.1, L3 ≈6.6, L4 ≈6.1 and L5 ≈6.8 mm; retain extra clearance on L2/L3 and the original front meniscus. The negative front element has a real stepped optical edge; do not enlarge its rear face to the mechanical blank.

| Surfaces | Before SD (mm) | After SD (mm) |
| --- | --- | --- |
| 3 / 4 | 11.3 / 10.95 | 10 / 10 |
| 5 / 6 | 8 / 6.9 | 7.5 / 7.5 |
| 7 / 8 | 5.75 / 5.45 | 6.1 / 6.1 |
| 9 / 10 | 5.75 / 6 | 6.8 / 6.8 |

Stop diameter and inferred stop location are unchanged. No focus-motion law is added.

### Glass classification

| Element | Before resolution | After resolution | Patent nd / νd |
| --- | --- | --- | --- |
| L1 | Abbe fallback | H-ZK1 | 1.5696 / 63.1 |
| L2 | Abbe fallback | E-FD7 | 1.6405 / 34.5 |
| L3 | Abbe fallback | SK5 | 1.5887 / 61 |
| L4 | Abbe fallback | S-TIH14 | 1.7617 / 26.5 |
| L5 | Abbe fallback | N-SK16 | 1.6197 / 60.4 |

Resolved catalog curves are qualified spectral proxies. They do not identify historical suppliers or melts. No patent coordinates are changed and no catalog line indices or anomalous-dispersion flags are copied into the lens data. The analysis glass table is synchronized.

Added H-ZK1 from the official CDGM datasheet, https://www.cdgmgd.com/webapp/pdf/H-ZK1.pdf (accessed 2026-09-28), including all six published Sellmeier constants, nd 1.56888 and νd 62.96. It improves the crown-class proxy match without claiming historical CDGM supply.

### Metadata and display

Canonical maker is Meyer Optik Görlitz. The source explicitly records registration on 3 September 1959; the shared analysis-date contract now recognizes Registered without mislabeling that event.

### Local diagram follow-up

Rechecked the local-site SVG against the exact patent figure cited above, including optical rims, element order, labels and glass colors. Retained the reviewed SDs: the optical silhouette is consistent within drawing/measurement uncertainty, excluding bevels, leaders and mechanical extensions. All elements are spherical; there is no source evidence for ED or anomalous-dispersion tags. The focus control is disabled and no focal-length zoom slider is present. This fixed prescription supplies no focus/zoom endpoints whose direction could be reversed. User-facing focus text now states the modeling limit in plain language.
