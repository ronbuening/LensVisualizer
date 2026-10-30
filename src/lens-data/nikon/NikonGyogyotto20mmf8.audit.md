# Audit Log — Nikon Gyogyotto 20mm f/8

Patent: US 5,949,588, eighth embodiment / Table 8

## 2026-05-20 — Six-digit missing-Sellmeier code review

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L3 / S4 | `glass` | `Unmatched (Nikon patent glass, code 670/575; no current public OHARA/SCHOTT catalog match within tolerance)` | `670575 — Nikon patent glass (nd=1.67025, νd=57.53; no current public OHARA/SCHOTT catalog match within tolerance)` | Local patent `patents/US5949588.pdf`, Table 8 row 4 lists nd=1.67025 and νd=57.53. The stored values match. |

### Catalog-search disposition

- Searched public catalog/refractiveindex.info-style sources for `670575` and the exact 1.67025 / 57.53 pair.
- No coefficient-backed exact match was found; S-LAL12 / LaK-style near labels remain too far away in nd.

### Analysis sync

- Updated the L3 text and glass table from `670/575` to `670575`.

## 2026-08-18 — S-LAL52 equivalent backfill

- Re-rendered `patents/US5949588.pdf`, PDF page 42. Eighth embodiment / Table 8 row 4 confirms
  `nd = 1.67025` and `νd = 57.53`.
- Assigned the existing OHARA S-LAL52 curve as an optical equivalent. Its catalog coordinate differs by
  `Δnd = -0.000251` and `Δνd = -0.202`, inside the runtime consistency window. This supersedes the older
  S-LAL12 comparison; the production supplier remains unspecified.

## 2026-10-30 — F-mount shape and glass review

The October 30, 2026 review directly checked US 5,949,588 Table 8 (PDF page 42), Fig. 15 (PDF page 23), and the Fig. 16 aberration sheets beginning on PDF page 24. The source explicitly uses the equisolid reference formula for distortion, states a 164° full field and plots Y = 110 at normalized f = 100. The model now declares that fisheye reference, an 82° tracing ceiling and a 44 mm source image circle after the retained 0.20 scale. This reference does not assert that the real prescription follows an ideal equisolid mapping exactly.

Fig. 15 shows a much taller L1 plane face and an independently exposed straight land beyond its concave rear cap. The plane radius is restored from 18.0 to 29.5 mm; the rear clear cap grows from 17.6 to 18.29 mm and its drawn land reaches 29.5 mm. The measured cap/outer ratio is about 0.62, with a one-native-pixel band near ±0.003 and larger drawing asymmetry. These are figure/beam-based dimensions, not published clear apertures. The rear cap stays just below the unchanged spherical bound of 0.9R = 18.298548 mm; an inferred numeric cut beyond that domain is not substituted. The source's smaller rear positive member meets a larger negative member at a shared cemented boundary. That stepped contact does not supply an independent full-band optical aperture; the existing rear-group caps remain conservative tracing estimates. No invented cemented-interface land or inward optical trim is added.

An independent dense search used the public bounding-sphere vector launch and exact tracer, sampling 166 field angles through 82° and refining every stop-centre root. Every sampled chief clears the final rims. At 78.46°, the image height is 21.649727 mm and L1 requires 28.854469/18.127521 mm on its two faces. At 82°, those reaches are 29.333952/18.244192 mm and image height is 21.926686 mm, close to the rounded source Y = 22 mm. The generic engine bracket misses some of these real paths above about 50°; the source/shape correction does not repair that shared tracing limitation. Standard field-coverage auditing also skips fisheyes, so no automatic full-field accuracy claim is made.

Using those independently solved vector chiefs, 25 real-stop pupil samples give 25/25 transmitted on axis and at 30°, then 20/25 at 60°, 19/25 at 75°, 17/25 at 78.46° and 15/25 at 82°, with zero unaimed samples. These are sample counts, not flux percentages or measured production vignetting. The source does not give a stop plane or clear radii; the inferred rear stop and bounded cap domain remain material assumptions.

All three source d-line pairs were checked afresh: 1.62041/60.14, 1.80518/25.35 and 1.67025/57.53. N-SK16, N-SF6 and S-LAL52 provide qualified spectral curves with the source anchors retained. S-LAL52 is approximate (coefficient index −0.000251 and Abbe number −0.202 relative to the source). No per-glass partial dispersion, C/F/g indices, historical supplier or melt identity is invented. The curve identities and coefficients are unchanged.

All three source prescriptions pass canonical surface, image-circle and nominal-aperture audits. Fuwatto/Gugutto format corners pass the traced check; Gyogyotto is checked with the independent vector probes described above. All 27 actual SVG states are finite with zero hidden trim. Powered radii, thicknesses, air spacings, source glass coordinates, stop stations, focus travel and validation tolerances are retained.
