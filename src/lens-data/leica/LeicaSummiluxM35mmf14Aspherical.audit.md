# Audit — LEICA SUMMILUX-M 35mm f/1.4 ASPHERICAL

Patent: US 5,161,060 A, preferred embodiment.

## 2026-09-21 — Patent figure, glass and metadata integration

### Semi-diameters

Reviewed local `US_5161060_A.pdf, p. 2, FIG. 1` at 600 dpi and compared the optical outlines with the viewer. Retained SDs. The rotated figure contains ray overlays and stepped mechanical shoulders; automatic mapping over-reads several cemented rims. Clean optical extents agree within drawing uncertainty and do not justify enlarging the aspheres.

### Glass classification

The patent reference coordinates are retained unchanged. Catalog curves are qualified spectral proxies unless the patent explicitly names the glass supplier; no production-melt identity is inferred from a coordinate match. Compatibility uses the authored d/e reference system, not a mixed-line comparison.

| Element | Before | After |
|---|---|---|
| L1 | Unmatched (native e-line coordinate 503561; OHARA S-FTL10 is coordinate-compatible, supplier unproven) | S-FTL10 class (coordinate-compatible spectral proxy; native e 1.503/56.1; supplier/melt unproven) |
| L2 | Unmatched (native e-line coordinate 820451) | TAFD10 class (coordinate-compatible spectral proxy; native e 1.82/45.1; supplier/melt unproven) |
| L3 | Unmatched (native e-line coordinate 820451) | TAFD10 class (coordinate-compatible spectral proxy; native e 1.82/45.1; supplier/melt unproven) |
| L4 | Unmatched (native e-line coordinate 694310) | N-SF8 class (coordinate-compatible spectral proxy; native e 1.694/31; supplier/melt unproven) |
| L5 | Unmatched (native e-line coordinate 792472; nearby modern high-index lanthanum-glass coordinate only) | N-LAF21 class (coordinate-compatible spectral proxy; native e 1.792/47.2; supplier/melt unproven) |
| L6 | Unmatched (native e-line coordinate 652336; dense-flint-class neighbor only) | SF2 class (coordinate-compatible spectral proxy; native e 1.652/33.6; supplier/melt unproven) |
| L7 | Unmatched (native e-line coordinate 820451) | TAFD10 class (coordinate-compatible spectral proxy; native e 1.82/45.1; supplier/melt unproven) |
| L8 | Unmatched (native e-line coordinate 820451) | TAFD10 class (coordinate-compatible spectral proxy; native e 1.82/45.1; supplier/melt unproven) |
| L9 | Unmatched (native e-line coordinate 624361; F2/PBM2 coordinate class, supplier unproven) | F2 class (coordinate-compatible spectral proxy; native e 1.624/36.1; supplier/melt unproven) |

Added OHARA S-FTL10 from its [manufacturer datasheet](https://oharacorp.com/wp-content/uploads/2023/06/esftl10.pdf), code(d) 501564 / code(e) 503561. All nine elements now have compatible spectral proxies. The bare d-code retains its previous K10 resolver preference; explicit OHARA context selects S-FTL10.

### Live geometry and travel follow-up

Retained SDs after comparison with the rotated FIG. 1 optical rims. Source element labels 30–46, five groups and two aspheric elements agree with the diagram. Focus remains explicitly not modeled. The patent-era Leica Camera GmbH attribution is retained and linked to the Leitz–Leica succession rather than rewritten as the later AG entity. No zoom travel applies to this prime lens.

## 2026-09-25 — MTF image-plane census

Visually inspected `patents/US_5161060_A.pdf`, FIG. 1 preferred-embodiment construction table and equation/coefficient table, PDF pp. 5–6 (columns 2–4). All fourteen refracting radii, spacings, nine native ne/νe pairs and twelve polynomial K(n) values match the authored conversion. No scaling or plate; single infinity state. The source expressly states K(1)=1/Rvertex, so R4=1/0.035278 and R13=1/0.016659 correctly supersede rounded 28.346/60.026. LensVisualizer K=−1 is an algebraic carrier for the polynomial, with A(2n)=K(n)/2^n; every coefficient was rechecked.

Column 3 explicitly defines S15 spacing 19.595 as distance to image plane 16; column 2 prose instead says 19 mm. Independent native-e EFL 35.411722282 versus nominal 35 and BFL 19.636495674 versus 19.595 remain source inconsistencies. Do not silently interpret the native e-line data as d-line indices.

For the small-offset inquiry, column 4 explicitly mentions a best focusing plane and −0.07 mm defocus improving meridional field curvature. It does not identify either with the tabulated S15 image distance, and −0.07 is not the measured +0.041496 residual. A reference-index axial geometric diagnostic (32 grid, 812 rays, 10/20/40 lp/mm) prefers +1.262108 mm, score .047536→.282942, so it certainly does not demonstrate that the authored plane is the reconstructed lens’s axial best focus. This larger finite-ray mismatch is a source/model limitation, not permission to change coefficients or tune the image plane.

**Cause/action:** source numerical inconsistency with explicit but non-identical best-focus discussion; preserve published values and equation convention. Offset **+0.041496 → +0.041496 mm**; Section E row deleted, no numerical change/changelog.

Validation: focused runtime/paraxial check; full corpus gates at the ten-lens checkpoint.
