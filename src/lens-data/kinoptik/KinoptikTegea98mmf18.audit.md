# Audit Log — KINOPTIK TEGEA 9.8mm f/1.8

## 2026-09-19 — Patent figure, glass, and integration audit

Source: `patents/US3037426.pdf`, PDF page 2; US 3,037,426 Example 2 — 9.759 mm f/2 patent design; strong circumstantial TEGEA correlation.

### Semi-diameters

600 dpi screening: crop `0.225,0.29,0.72,0.73` --rot90 --axis=0.513. Optical rims were inspected visually; labels, ray bundles, group brackets, and mechanical flanges were excluded.

Enlarged the L8/L9 cemented pair (surfaces 3–5) from 22 to 26 mm; L13 (10–11) from 9.1 to 12 mm; L14 (12–13) from 8 to 12 mm; and L15 (14–15) from 8.7 to 10.3 mm. Figure 2 shows roughly 29–30 mm for system II and 12–13 mm rear rims. A literal 30 mm system-II rim produces negative L8 edge thickness; a 12 mm triplet/final-element rim also crosses the prescribed surfaces. The accepted caps preserve positive thickness. Retained the 10.2 mm triplet and asymmetric front aperture rather than forcing the schematic silhouette into impossible geometry.

### Glass

Patent nd/vd values are unchanged. Catalog names denote supplier-neutral spectral proxies.

| Element | nd / vd | Disposition |
|---|---|---|
| L7 | 1.69153 / 54 | N-LAK9-class (coordinate-compatible spectral proxy; supplier unproven) |
| L8 | 1.68129 / 32 | Unmatched (nd=1.68129, vd=32.0; dense-flint region) |
| L9 | 1.674 / 56 | Unmatched (nd=1.67400, vd=56.0) |
| L10 | 1.4635 / 65.4 | FK3-class (coordinate-compatible spectral proxy; supplier unproven) |
| L11 | 1.7235 / 37.9 | S-BAH28-class (coordinate-compatible spectral proxy; supplier unproven) |
| L12 | 1.4635 / 65.4 | FK3-class (coordinate-compatible spectral proxy; supplier unproven) |
| L13 | 1.5135 / 59 | NSL7-class (coordinate-compatible spectral proxy; supplier unproven) |
| L14 | 1.762 / 27 | PBH25-class (coordinate-compatible spectral proxy; supplier unproven) |
| L15 | 1.5135 / 59 | NSL7-class (coordinate-compatible spectral proxy; supplier unproven) |

### Metadata and validation

Canonicalized the shared Kinoptik assignee spelling and registered the Kinoptik maker prefix. Production correlations remain qualified; patent designs are not asserted to be manufacturer-confirmed production prescriptions. Surface audits pass. The image-circle audit skips this lens because its historical format has no authored canonical format; this is a validation limitation, not a passed image-circle result.

### Local-site follow-up

The localhost silhouette was compared directly with Fig. 2. Retained the corrected SDs: increasing the cemented pair/triplet to the literal drawing envelopes would cross the numerical table surfaces. Added the missing L8+L9 and L10+L11+L12 diagram annotations; the inspector correctly identifies C2 as a triplet. The manufacturer brochure (page 2) specifies 108° on 16 × 22 mm and 130° on 24 × 36 mm with slight vignetting. Authored the conservative 22 × 16 mm cinema format (27.20 mm minimum diagonal), not an unqualified full-frame circle. The patent has only an infinity state; focus stays disabled and no zoom travel exists.

Assignee review: all three Kinoptiks use the same canonical Les Appareils de Precision Kinoptik; all three Nikons use Nikon Corporation. The corpus contains no additional spelling duplicate to consolidate. The older Nippon Kogaku K.K. is a historical legal name linked to Nikon, not a spelling alias.

## 2026-09-25 — MTF image-plane census

Source: local `patents/US3037426.pdf`, Example 2/Table 2, PDF p.5 (columns 3–4). Visually checked all 15 optical surfaces, nine nd/νd pairs and every physical thickness/gap. Cemented duplicate faces collapse correctly; source d12=5.97 is split 3.00+2.97 about the explicitly located stop. The rear paraboloid of L7 has parameter 15, represented by R=15/K=-1 with zero polynomial coefficients; the identical Example 1 geometry corroborates this convention. No scaling, rear plate or finite-focus state is supplied.

**Cause: source contradiction.** The independent native-scale EFL is 9.784066724 mm versus printed 9.759; BFL 22.377889324 versus the image distance 21.841 printed at the top of column 4. The source also contradicts itself on L7's focal length (-22.109 versus -21.691033 from its geometry; see existing analysis). No single source-backed correction resolves these residuals. Keep the table and image distance unchanged, without assuming an undocumented best-focus intent. Runtime offset **+0.536889 → +0.536889 mm**. Section E row deleted. No data change or changelog.

Validation: focused runtime/paraxial check; full corpus gates at the ten-lens checkpoint.
