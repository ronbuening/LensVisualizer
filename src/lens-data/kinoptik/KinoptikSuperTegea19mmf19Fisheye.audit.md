# Audit Log — KINOPTIK SUPER-TEGEA 1.9mm f/1.9 FISHEYE

## 2026-09-19 — Patent figure, glass, and integration audit

Source: `patents/US3037426.pdf`, PDF page 3; US 3,037,426 — Example 3; strong production correlation, not manufacturer-confirmed example attribution.

### Semi-diameters

600 dpi screening: crop `0.22,0.18,0.77,0.835` --rot90 --axis=0.513. Optical rims were inspected visually; labels, ray bundles, group brackets, and mechanical flanges were excluded.

Retained all SDs. Corrected-axis photogrammetry gives about 45.7 mm at L16 and 27.1 mm at L17, close to the authored 45/25 mm outer rims. Direct optical-rim inspection separates the smaller curved apertures from the large blanks. The rear system measures approximately 3.8–4.0 mm; labels and diaphragm strokes explain the larger automated envelopes. L21 remains edge-thickness limited at 3.85 mm. The row-specific parabola correction remains explicitly disclosed; no new projection law is inferred.

### Glass

Patent nd/vd values are unchanged. Catalog names denote supplier-neutral spectral proxies.

| Element | nd / vd | Disposition |
|---|---|---|
| L16 | 1.69112 / 54 | N-LAK9-class (coordinate-compatible spectral proxy; supplier unproven) |
| L17 | 1.8 / 45 | M-TAF31-class (coordinate-compatible spectral proxy; supplier unproven) |
| L18 | 1.68102 / 32 | Unmatched (681320-class; supplier unspecified) |
| L19 | 1.69112 / 54 | N-LAK9-class (coordinate-compatible spectral proxy; supplier unproven) |
| L20 | 1.73259 / 28.4 | Unmatched (733284-class; supplier unspecified) |
| L21 | 1.62023 / 60.2 | N-SK16-class (coordinate-compatible spectral proxy; supplier unproven) |
| L22 | 1.62023 / 60.2 | N-SK16-class (coordinate-compatible spectral proxy; supplier unproven) |

### Metadata and validation

Canonicalized the shared Kinoptik assignee spelling and registered the Kinoptik maker prefix. Production correlations remain qualified; patent designs are not asserted to be manufacturer-confirmed production prescriptions. Surface audits pass. The image-circle audit skips this lens because its historical format has no authored canonical format; this is a validation limitation, not a passed image-circle result.

### Local-site follow-up

The localhost silhouette was compared directly with Fig. 3. Retained the SDs: the large front blanks, smaller curved clear apertures, and very small rear imaging group agree within the documented rim/clearance constraints. The manufacturer brochure (page 3) explicitly gives a 197° field on an 8.7 mm diameter circle; this is now authored independently of any projection law and shown above the diagram. The unknown projection law remains a limitation for wide-field analysis. Fixed focus is disabled at infinity; no zoom travel exists.

Assignee review: all three Kinoptiks use the same canonical Les Appareils de Precision Kinoptik; all three Nikons use Nikon Corporation. The corpus contains no additional spelling duplicate to consolidate. The older Nippon Kogaku K.K. is a historical legal name linked to Nikon, not a spelling alias.

## 2026-09-25 — MTF image-plane census

Visually inspected `patents/US3037426.pdf`, Example 3 / Table 3 and accompanying text, PDF p. 5 column 4. All fourteen optical radii including the plane/paraboloid, all gaps/thicknesses and seven nd/νd pairs were compared. The sole existing nonliteral value is disclosed MD04: the source says parabola parameter 15, while the authored reconstruction uses vertex R=7.5, K=−1, no higher polynomial coefficients. This audit preserves that qualified correction, rather than claiming the source prints 7.5. No scaling or rear plate. Source stop position 1.8 before L19 is preserved by splitting 31.33 into 29.53+1.8.

Printed image distance is 9.28, full-system focal length 1.98. The stored reconstruction gives EFL 1.955899976 and BFL 9.330584326. Its first group computes −7.547147 versus printed −7.710 (R=15 would give −14.017977), and L18 computes 44.300427 versus printed 44.36. Thus the previously adopted parabola correction alone does not reconcile the source’s derived quantities; no additional particular misprint is established.

For the small-offset inquiry, source text specifies image distance without a designer best-focus convention. Reference-index geometric axial MTF (32 grid, 812 rays, 10/20/40 lp/mm) prefers +0.014483 mm, score .733753→.753713. That suggests a finite-aperture plane near the authored one, but does not establish designer intent, especially with the disclosed source correction.

**Cause/action:** residual source/reconstruction inconsistency; document it and preserve the published image distance. Offset **+0.050584 → +0.050584 mm**; Section E row deleted. No numerical change/changelog; no claim that MD04 became a literal verified source value.

Validation: focused runtime/paraxial check; full corpus gates at the ten-lens checkpoint.
