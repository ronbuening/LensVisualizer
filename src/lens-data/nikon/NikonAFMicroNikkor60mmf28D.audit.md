# Audit Log — NIKON AF MICRO-NIKKOR 60mm f/2.8D

## 2026-09-19 — Patent figure, glass, and integration audit

Source: `patents/US5751485.pdf`, PDF page 2; US 5,751,485 — First Embodiment / Table 1; centered-formula correlation.

### Semi-diameters

600 dpi screening: crop `0.335,0.285,0.575,0.557` --rot90 --axis=0.417. Optical rims were inspected visually; labels, ray bundles, group brackets, and mechanical flanges were excluded.

Set the L4/L5 cemented component and L6 singlet (surfaces 7–11) to a common 11.0 mm rim, replacing 10.3/11.4/13.3/13.9/14.0 mm. Figure 1 measures approximately 10.7–10.9 mm here and shows a common rim across G2, smaller than G3. The 600 dpi crop confirms the optical boundaries independently of diagonal ray lines. Other rims were retained within figure uncertainty or existing clearance limits. This changes peripheral clipping; prior portable ray-clearance counts are not claimed for the revised apertures.

### Glass

Patent nd/vd values are unchanged. Catalog names denote supplier-neutral spectral proxies.

| Element | nd / vd | Disposition |
|---|---|---|
| L1 | 1.76684 / 46.79 | J-LASFH2-class (coordinate-compatible spectral proxy; supplier unproven) |
| L2 | 1.717 / 48.06 | LAF3-class (coordinate-compatible spectral proxy; supplier unproven) |
| L3 | 1.62588 / 35.7 | S-TIM1-class (coordinate-compatible spectral proxy; supplier unproven) |
| L4 | 1.69895 / 30.05 | E-FD15-class (coordinate-compatible spectral proxy; supplier unproven) |
| L5 | 1.713 / 53.89 | S-LAL8-class (coordinate-compatible spectral proxy; supplier unproven) |
| L6 | 1.76684 / 46.79 | J-LASFH2-class (coordinate-compatible spectral proxy; supplier unproven) |
| L7 | 1.64831 / 33.75 | S-TIM22-class (coordinate-compatible spectral proxy; supplier unproven) |
| L8 | 1.79631 / 40.9 | NBFD2-class (coordinate-compatible spectral proxy; supplier unproven) |

### Metadata and validation

Reviewed display formatting and romanized inventor metadata against existing canonical catalog names. Production correlations remain qualified; patent designs are not asserted to be manufacturer-confirmed production prescriptions. Surface audits pass. The image-circle audit reports no undersized surfaces.

### Local-site follow-up

Compared the localhost infinity silhouette directly with Fig. 1, retaining the revised 11 mm G2 rims. Exercised the focus slider through its authored states: G1 moves 52.77403 mm objectward and G2 moves 42.90576 mm objectward at 1:1; G3 and the image plane remain fixed. The order is correct, but the default framing clipped the front group at close focus. Reduced scFill to 0.43 to keep all groups visible through travel without changing optics or SDs. This is a prime; no zoom travel exists. All eight glasses remain catalog-backed qualified proxies.

Assignee review: all three Kinoptiks use the same canonical Les Appareils de Precision Kinoptik; all three Nikons use Nikon Corporation. The corpus contains no additional spelling duplicate to consolidate. The older Nippon Kogaku K.K. is a historical legal name linked to Nikon, not a spelling alias.

## 2026-10-29 — F-mount shape and fresh glass review

Re-read local `patents/US5751485.pdf`, Fig.1 on PDF p2 and First Embodiment/Table1 on p26 (printed cols27–28). Native300 ppi Fig.1 has about 19.6 px/mm from a ~711 px S1–S15 vertex span /36.28307 mm. Both halves show the exposed S6 concave cap stopping before L3's squared edge: mean cap/edge radii≈169/200 px give q≈.845 with one-native-pixel uncertainty ±(1+q)/200=.0092. Restored S6's outer rim9.6→10 mm to match S5, with inferred cut depth 2.83 mm and cap radius 8.9293 mm.

The literal source endpoint (~8.45 mm, depth≈2.50 mm) clips the full beam: the canonical sweep reaches8.8702 mm at close focus, field 1.26°, requiring at least8.9202 mm with its 0.05 mm margin. Moved the cut outward to the adopted radius, rather than changing the source prescription or relaxing clearance. The land remains before the inferred infinity stop plane at 3.024815 mm fromS6. Independent dense probe:22 focus states, grid 41,0.5°field step,428219 traced rays; refined reach8.8696 mm, zero clipped/within-margin rays and no untraced fields. No other exposed concave end has a separately resolved square land.

Freshly checked all 8 Table1 nd/νd pairs and the explicit587.6nm d-line convention. All8 resolve to compatible catalog curves; retained source coordinates and qualified spectral-proxy labels. The patent supplies no C/F/g or partial-dispersion data and establishes no production vendor or melt. No invented spectral fields or APD assertions added.

Surface, image-circle and infinity aperture checks pass. Nine actual renderer states are finite with zero hidden trim. Source R/d/focus data, stop calibration and tolerances are unchanged.
