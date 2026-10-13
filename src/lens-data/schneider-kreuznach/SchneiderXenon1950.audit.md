# Audit Log — schneider-xenon-50f19

## 2026-09-28 — Patent figure, glass, and metadata audit

Source: `patents/CH_346706_A.pdf`, PDF p. 5, Fig. 1 (Table A). Original prescription coordinates were checked visually against the source table; published radii, axial spacings, indices, Abbe numbers and image-plane distances are preserved.

### Optical rims

600 dpi crop: 0.33,0.22,0.61,0.405; axis 0.312. Leaders and bevels contaminate automated doublet measurements. Manual optical extents (glass span ≈260 px at 1400 px page height) give front ≈14.5, front doublet ≈12, rear doublet ≈10.7 and last singlet ≈12.5 mm. Existing geometry is within about 15%; retained, preserving reduced stop-facing rims below the drawn bevels.

Stop diameter and inferred stop location are unchanged. No focus-motion law is added.

### Glass classification

| Element | Before resolution | After resolution | Patent nd / νd |
| --- | --- | --- | --- |
| L1 | H-ZBaF52 | H-ZBaF52 | 1.67003 / 47.2 |
| L2 | Abbe fallback | LAC13 | 1.69347 / 53.5 |
| L3 | J-BASF2 | J-BASF2 | 1.66446 / 35.9 |
| L4 | J-SF7 | J-SF7 | 1.6398 / 34.6 |
| L5 | J-SSK5 | J-SSK5 | 1.65844 / 50.8 |
| L6 | Abbe fallback | N-LAF2 | 1.74472 / 44.7 |

Resolved catalog curves are qualified spectral proxies. They do not identify historical suppliers or melts. No patent coordinates are changed and no catalog line indices or anomalous-dispersion flags are copied into the lens data. The analysis glass table is synchronized.

The manufacturer catalog supports the correlated Xenon 1.9/50’s 35 mm still-camera format. Production-variant and exact prescription uncertainty remain.

### Metadata and display

Display name now includes SCHNEIDER-KREUZNACH consistently with the catalog. Marketed f/1.9 remains distinct from the patent f/2 design.

### Local diagram follow-up

Compared the local-site SVG directly with the exact Fig. 1 optical outlines at 600 dpi. Flattened the front doublet's S3/S4 rims to 12.0 mm and the rear doublet's S7/S8 rims to 10.7 mm; retained S5 = 9.8 and S6 = 9.2 mm below the bevels. These are figure-derived estimates, not published clear apertures. This follow-up specifically refines visible taper at the user's request, despite the small percentage change in overall diameter. Published curvatures and spacings are unchanged.

Both patents describe exchanging optical subsystems, not continuously zooming them. This Table A model is fixed: no zoom positions or focus-motion endpoints exist to reverse. Local controls correctly disable focus and provide no focal-length zoom slider. Diagram L1–L6, D1/D2, subsystem I/II and STO labels match the selected prescription. Glass remains ordinary spherical crown/flint; no unsupported ED, aspheric or anomalous-dispersion tags were added.
