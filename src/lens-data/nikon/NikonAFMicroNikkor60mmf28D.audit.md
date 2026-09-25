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


## 2026-09-25 — Source-state review

Source-state review outcome: verified. All three authored candidates reviewed; infinity and two finite states enabled.
Finite distances are calculated, not printed patent object distances. No unsupported or unreviewed candidate remains
for this prescription; intermediate focus travel is not certified.

Source: local `patents/US5751485.pdf`, visually inspected PDF page 26, printed columns 27–28, First Embodiment / Table 1.
The introductory text identifies the first column as infinity focal length and the other two as photographing
magnifications. All 15 source radii, glass indices, fixed spacings, and Bf reproduce the retained prescription.
The synthetic stop divides source d6 in half; its position and diameter remain inferred/calibrated as documented above.

| State ID | Exact focusT | Source d6 (mm) | Source d11 (mm) | Bf (mm) | Published beta |
|---|---:|---:|---:|---:|---:|
| infinity | 0 | 6.04963 | 1.23344 | 39.38439 | — (infinity column) |
| half-life-size | 0.857059122392607 | 10.97933 | 21.77380 | 39.38439 | -0.50000 |
| life-size | 1 | 15.91790 | 44.13920 | 39.38439 | -1.00000 |

### Independent finite-distance evidence

Run `node --import ./scripts/ts-js-specifier-hook-register.mjs scripts/audit-mtf.mjs --derive-source-states --lens=nikon-af-micro-nikkor-60mm-f28d`.
The d-line first-order matrix runs from source surface 1 to the fixed authored image plane. Solving `A*s+B=0`
derives object distance `s` before surface 1; `A` gives signed lateral magnification. No spacing, glass, aperture,
image plane or focus coordinate was adjusted for agreement.

| State | A | B (mm) | Derived s (mm) | Object-to-image (mm) |
|---|---:|---:|---:|---:|
| half-life-size | -0.4999992544473916 | 77.19360608206878 | 154.3874423720583 | 255.5249623720583 |
| life-size | -1.0000009164240917 | 90.43825253713268 | 90.4381696574152 | 218.87965965741523 |

Independently aiming exact rays to the authored image plane, starting each solve at zero slope, gives:

| State | Launch height (mm) | Exact recovered s (mm) | Exact beta |
|---|---:|---:|---:|
| half-life-size | 0.01 | 154.3874389122436 | -0.4999992545293766 |
| half-life-size | 0.005 | 154.38744150935125 | -0.4999992544589096 |
| half-life-size | 0.0025 | 154.38744215638152 | -0.4999992544487694 |
| life-size | 0.01 | 90.4381674253969 | -1.000000916842186 |
| life-size | 0.005 | 90.43816909941064 | -1.0000009165273092 |
| life-size | 0.0025 | 90.43816952054618 | -1.000000916434233 |

The largest finite axial residual is 2.47e-10 mm. Published magnifications agree within 1.5 parts per million in
relative terms. Extra numeric digits preserve repeatable geometry, not source or production accuracy. At infinity,
the rounded data leave matrix A=-2.84e-7; a formal enormous finite distance is not a new source state. Table 1's
explicit infinity designation controls, with the existing authored-plane rounding retained.

The production 0.219 m specification is not used to derive either finite distance. Patent geometry and magnification
provide the verification. Stop location, clear apertures, glass proxies, and production correlation remain qualified.


### MTF acceptance

Reference-line geometric MTF at the authored design plane, wide-open physical stop, 10/30 lp/mm and
center/half-height/full reference-height fields is available at all three states. With a 64-cell grid cap,
infinity center and edge converge, half life-size center converges, and the remaining fields remain explicitly
unconverged. No field is hidden or reclassified as converged; these checks establish supported computation,
not numerical convergence or production accuracy. Exact source d6 (the sum of both stop-adjacent gaps), d11,
and Bf reproduce Table 1 at all three selected coordinates.
