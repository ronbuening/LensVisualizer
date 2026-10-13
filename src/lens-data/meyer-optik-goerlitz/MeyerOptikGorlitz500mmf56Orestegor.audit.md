# Audit Log — meyer-optik-gorlitz-orestegor-500mm-f56

## 2026-09-28 — Patent figure, glass, and metadata audit

Source: `patents/DE_1980417_U.pdf`, PDF p. 9 (single optical section). Original prescription coordinates were checked visually against the source table; published radii, axial spacings, indices, Abbe numbers and image-plane distances are preserved.

### Optical rims

600 dpi crop: 0.09,0.40,0.76,0.58; axis 0.492. Scale ≈111.53 µm/pixel. Front rim ≈62 mm agrees with the model. The rear optical rims span approximately 100 px at 1400 px page height, or ≈28–29 mm SD. Automated L4 ENV/RIM counts lower leader lines and is rejected. Both rear elements are reduced together to 29 mm.

| Surfaces | Before SD (mm) | After SD (mm) |
| --- | --- | --- |
| 5–8 | 38 | 29 |

Stop diameter and inferred stop location are unchanged. No focus-motion law is added.

### Glass classification

| Element | Before resolution | After resolution | Patent nd / νd |
| --- | --- | --- | --- |
| L1 | Abbe fallback | Abbe fallback | 1.50977 / 61.9 |
| L2 | FD3 | FD3 | 1.74 / 28.2 |
| L3 | F4 | F4 | 1.61659 / 36.6 |
| L4 | N-SSK5 | N-SSK5 | 1.65844 / 50.8 |

Resolved catalog curves are qualified spectral proxies. They do not identify historical suppliers or melts. No patent coordinates are changed and no catalog line indices or anomalous-dispersion flags are copied into the lens data. The analysis glass table is synchronized.

L1 remains on Abbe fallback: searches for 510619 and the exact 1.50977 / 61.9 coordinate found no sourceable exact curve; BK1 and NSL7 are ambiguous neighboring families. Other supported materials reuse catalog entries.

### Metadata and display

Canonical maker is Meyer Optik Görlitz; display retains the historical hyphenated branding.

### Local diagram follow-up

Rechecked the local-site SVG against the exact patent figure cited above, including optical rims, element order, labels and glass colors. Retained the reviewed SDs: the optical silhouette is consistent within drawing/measurement uncertainty, excluding bevels, leaders and mechanical extensions. All elements are spherical; there is no source evidence for ED or anomalous-dispersion tags. The focus control is disabled and no focal-length zoom slider is present. This fixed prescription supplies no focus/zoom endpoints whose direction could be reversed. User-facing focus text now states the modeling limit in plain language.

Corrected L4 from a crown/short-flint description to dense crown (N-SSK5 compatible spectral proxy), verified in the local element inspector. L1 remains unresolved: the [astrograph paper, p. 18](https://gymarkiv.sdu.dk/MFM/kdvs/mfm%2020-29/mfm-23-9.pdf) gives the same nd = 1.50977 crown coordinate and line indices, but no named glass or catalog dispersion coefficients. Those data do not establish the Orestegor's production material and were not copied into its prescription.
