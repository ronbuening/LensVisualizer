# NIKON NIKKOR Z DX 12-28mm f/3.5-5.6 PZ VR

## Patent Reference and Design Identification

**Patent:** US 2026/0056396 A1  
**Application Number:** 19/102,628  
**PCT Number:** PCT/JP2023/026980  
**Filed:** July 24, 2023  
**Published:** February 26, 2026  
**Priority:** September 9, 2022 (JP 2022-143715)  
**Inventor:** Takeru Uehara  
**Applicant:** Nikon Corporation, Shinagawa-ku, Tokyo, Japan  
**Title:** Zoom Optical System, Optical Device, and Method for Manufacturing Zoom Optical System  
**Embodiment analyzed:** First Example, Table 1, Figures 1-3

Example 1 is the closest published prescription for the production NIKKOR Z DX 12-28mm f/3.5-5.6 PZ VR. The patent design gives $f = 12.36$-$27.16$ mm, $FNO = 3.64$-$5.73$, image height $Y = 14.25$ mm, zoom ratio 2.197, and a constant total track of 77.25 mm in Table 1. Nikon's production specification gives a 12-28 mm focal-length range, f/3.5-5.6 maximum aperture, DX-format image coverage, 12 elements in 11 groups, one ED element, one aspherical element, minimum focus distance 0.19 m, maximum reproduction ratio 0.21x, 67 mm filter size, and about 205 g mass.

The patent-to-product match is based on the combined evidence: the focal-length and aperture ranges, the 12-element / 11-group construction, the one-ED / one-aspherical special-element count, the DX image circle, the internal zoom kinematics, the VR group location, and the G3 inner-focus mechanism. The patent's Table 1 does not publish close-focus variable gaps; the data file therefore encodes the published infinity-focus zoom prescription and records the production minimum-focus distance as metadata only.

## Optical Architecture

The design is a four-zoom-group negative-positive-negative-positive system: G1(-), G2(+), G3(-), and G4(+), matching the first example description in ¶0109. The front and rear groups are fixed during zooming, while G2 and G3 move toward the object side as the lens zooms from wide to telephoto, as stated in ¶0110. The air gap from G1 to G2 decreases from 15.974 mm to 2.039 mm, the G2-G3 gap increases from 3.114 mm to 8.012 mm, and the G3-G4 gap increases from 3.350 mm to 12.387 mm.

G1 provides the negative front power needed for the wide-angle zoom. G2 carries most of the positive convergence, the aperture stop, the cemented VR doublet, and the sole aspherical surface. G3 is a single biconcave element and is also the focusing group GF. G4 is a fixed positive meniscus near the image side. These assignments follow ¶0111-¶0115.

This is a negative-lead compact wide-angle zoom, but it should not be called retrofocus under the strict back-focus criterion. At the wide end, the published BF is 9.815 mm and the computed EFL is 12.360 mm, so BF/EFL = 0.794; the back focal distance is not longer than the focal length. Similarly, the patent's $f/TL$ conditions are compactness ratios, not evidence that the lens is telephoto in the TL/EFL < 1 sense.

## Element-by-Element Analysis

### L11 - Positive Meniscus, convex to object (G1)

nd = 1.51680, νd = 64.1. Glass: BK7-class crown, catalog-equivalent. f = +176.9 mm.

L11 is a weak positive front meniscus. Its optical power is minor, but it moderates the incidence angles entering the strongly negative front-group elements. The low-index crown also helps keep the front element practical and inexpensive.

### L12 - Negative Meniscus, convex to object (G1)

nd = 1.80400, νd = 46.6. Glass: lanthanum flint class, catalog-equivalent. f = -23.7 mm.

L12 is the first strong negative element in G1. Its high index gives compact negative power while keeping the curvatures within workable limits. By the project's νd < 50 convention, this is a flint, not a crown.

### L13 - Biconcave Negative (G1)

nd = 1.80400, νd = 46.6. Glass: same lanthanum flint class as L12. f = -16.1 mm.

L13 is the strongest individual negative element in the first group. The nearly flat front radius and tight rear radius concentrate the refraction at the rear surface. It supplies the major front-group divergence needed by the zoom system.

### L14 - Positive Meniscus, convex to object (G1)

nd = 1.84666, νd = 23.8. Glass: dense flint, SF57 / S-TIH53 class. f = +31.1 mm.

L14 closes G1 with positive power in a very high-dispersion glass. It partially offsets the chromatic contribution of the preceding negative flints and reduces the divergence entering the variable D1 space.

### L21 - Biconvex Positive (G2)

nd = 1.51680, νd = 64.1. Glass: BK7-class crown. f = +33.6 mm.

L21 begins the positive second zoom group. It accepts the divergent beam from G1 and starts the converging action of G2 before the aperture stop.

### L22 - Positive Meniscus, convex to object (G2)

nd = 1.60342, νd = 38.0. Glass: F5 / S-TIM-class flint. f = +29.9 mm.

L22 is a positive meniscus in a moderate flint. Its positive power adds convergence while its lower Abbe number helps distribute chromatic correction ahead of the stop.

### L23 - Biconcave Negative (G2)

nd = 1.84666, νd = 23.8. Glass: dense flint, same 1.84666/23.8 class as L14. f = -34.9 mm.

L23 is the negative pre-stop component of G2. It sits immediately before the aperture stop and forms the primary negative chromatic partner for L21 and L22.

### STO - Aperture Stop

The stop is within G2 between L23 and L24. In the patent example, the stop follows the same zoom trajectory as G2 (¶0114). Its paraxially derived physical semi-diameter is about 4.04 mm from the Table 1 FNO values, so the data file uses a 4.05 mm stop semi-diameter.

### L24 - Biconvex Positive ED Element (G2, cemented VR group)

nd = 1.49782, νd = 82.5. Glass: ED fluorophosphate, FKH1/FCD1 class, inferred. f = +16.3 mm.

L24 is the ED component in the cemented vibration-reduction group GVR. The patent gives the unusually high Abbe number directly, and Nikon's production specification calls for one ED element. Its role in the VR doublet is important: a laterally decentered stabilizer group must avoid adding excessive lateral color.

### L25 - Negative Meniscus, convex to image (G2, cemented VR group)

nd = 1.95000, νd = 29.4. Glass: ultra-high-index lanthanum flint class. f = -33.1 mm.

L25 is cemented to L24 and forms the negative component of GVR. The L24/L25 doublet has a computed focal length of +32.20 mm, matching the patent value $f_{vr} = 32.200$ mm. During VR operation, the doublet is shifted perpendicular to the optical axis.

### L26 - Positive Meniscus with one aspherical surface (G2)

nd = 1.58913, νd = 61.2. Glass: SK-class crown. f = +94.2 mm.

L26 is a weak positive rear element in G2. Its front surface, surface 19, is the only aspherical surface in the prescription. The element contributes only mild paraxial power, but the asphere supplies higher-order correction after the stop and VR group.

### L31 - Biconcave Negative (G3 / GF)

nd = 1.80610, νd = 40.7. Glass: lanthanum flint class, NBFD13 / P-LASF47 class. f = -19.8 mm.

L31 is the entire third group and the focusing group GF. The radii are symmetric in magnitude, R = -32.0982 mm and +32.0982 mm. The patent states that, upon focusing from infinity to a short-distance object, GF moves toward the image surface (¶0114).

### L41 - Positive Meniscus, convex to image (G4)

nd = 1.85026, νd = 32.3. Glass: dense lanthanum flint, S-LAH71 / J-LASF021 class. f = +44.1 mm.

L41 is the fixed rear positive group. It contributes field and image-side correction after the moving focusing group and remains fixed during both zooming and focusing.

## Glass Identification and Selection

The prescription uses nine distinct nd/νd pairs, not five. Reuse is still significant: 1.51680/64.1 appears in L11 and L21, 1.80400/46.6 appears in L12 and L13, and 1.84666/23.8 appears in L14 and L23.

| Elements | nd | νd | Assignment used | Role |
|---|---:|---:|---|---|
| L11, L21 | 1.51680 | 64.1 | Schott N-BK7 | General crown power, low cost |
| L12, L13 | 1.80400 | 46.6 | Schott N-LASF44 class | Compact negative front-group power |
| L14, L23 | 1.84666 | 23.8 | Ohara S-TIH53 / SF57 class | High-dispersion chromatic balancing |
| L22 | 1.60342 | 38.0 | Schott F5 | Positive pre-stop flint |
| L24 | 1.49782 | 82.5 | Hikari J-FKH1 | ED component of VR doublet |
| L25 | 1.95000 | 29.4 | Hikari J-LASFH15 | Negative partner of ED VR element |
| L26 | 1.58913 | 61.2 | Ohara S-BAL35 | Aspherical substrate |
| L31 | 1.80610 | 40.7 | Hoya NBFD13 | Single-element focusing group |
| L41 | 1.85026 | 32.3 | Hikari J-LASF021 | Rear positive correction |

The ED identification for L24 is strong because the patent's νd = 82.5 and Nikon's production specification both point to a single ED element. Partial-dispersion line indices are not published in the patent, so the data file does not encode unverified nC/nF/ng or ΔPgF values.

## Focus Mechanism

The patent identifies G3 as the focusing group GF. It moves along the optical axis toward the image surface when focusing from infinity to a short-distance object (¶0114). This is an inner-focus arrangement because G1 and G4 remain fixed.

Table 1 publishes only infinity-focus zoom data. The corrected data file therefore treats D1, D2, D3, and BF as zoom variables only and duplicates the same values at the close-focus endpoint. This avoids inventing unpublished close-focus motion while preserving the correct zoom prescription and the official production minimum-focus metadata.

| Gap | Wide | Middle | Tele |
|---|---:|---:|---:|
| D1, G1-G2 | 15.974 | 9.269 | 2.039 |
| D2, G2-G3 | 3.114 | 4.126 | 8.012 |
| D3, G3-G4 | 3.350 | 9.043 | 12.387 |
| BF | 9.815 | 9.815 | 9.815 |

## Aspherical Surfaces

The design has one aspherical surface, surface 19 on the object-side face of L26, as identified in ¶0115 and Table 1.

The patent does not use the same conic convention as the LensVisualizer data format. Paragraph ¶0103 gives the aspherical equation as:

$$
X(y) = \frac{y^2/R}{1 + \sqrt{1 - \kappa y^2/R^2}} + A_4 y^4 + A_6 y^6 + A_8 y^8 + A_{10} y^{10} + A_{12} y^{12}
$$

LensVisualizer uses the standard convention:

$$
X(y) = \frac{y^2/R}{1 + \sqrt{1 - (1+K)y^2/R^2}} + \cdots
$$

Therefore $K_{standard} = \kappa - 1$. The patent table lists $\kappa = 0.0000$ for surface 19, so the corrected data file stores `K: -1`, not `K: 0`. Treating the table value as a standard spherical-base K would be an error.

| Surface | R | Patent κ | Stored standard K | A4 | A6 | A8 | A10 | A12 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| 19 | -31.4221 | 0.0000 | -1.0000 | -1.66060E-04 | +2.26257E-06 | -2.73958E-07 | +1.18829E-08 | -2.09340E-10 |

## Image Stabilization

The vibration-reduction group GVR is the cemented L24/L25 doublet in G2, on the image side of the aperture stop. The patent describes this group as moving perpendicular to the optical axis to correct image displacement caused by hand shake (¶0114). The computed focal length of GVR is +32.20 mm, matching the patent's $f_{vr}$ value.

The ratio $f_{vr}/f_2 = 1.907$ satisfies the patent's condition (11), $1.20 < f_{vr}/f_2 < 2.20$.

## Conditional Expressions

The corrected paraxial trace gives the following Example 1 values. Condition (1) is rounded to 0.921, not 0.920. Conditions (7) and (8) are compactness ratios using $f/TL$, not telephoto-ratio claims.

| No. | Expression | Patent range | Computed | Patent table |
|---:|---|---:|---:|---:|
| 1 | $(-f_1)/f_2$ | 0.70-1.30 | 0.921 | 0.921 |
| 2 | $f_2/(-f_3)$ | 0.55-1.20 | 0.854 | 0.854 |
| 3 | $(-f_1)/f_4$ | 0.20-0.50 | 0.353 | 0.353 |
| 4 | $(-f_3)/f_4$ | 0.20-0.90 | 0.449 | 0.449 |
| 5 | $f_1/f_3$ | 0.50-1.10 | 0.786 | 0.786 |
| 6 | $f_2/f_4$ | 0.20-0.70 | 0.383 | 0.383 |
| 7 | $f_w/TL_w$ | 0.120-0.190 | 0.160 | 0.160 |
| 8 | $f_t/TL_t$ | 0.20-0.50 | 0.352 | 0.352 |
| 9 | $Mv_2/f_2$ | 0.70-1.30 | 0.825 | 0.825 |
| 10 | $Mv_3/(-f_3)$ | 0.36-0.80 | 0.457 | 0.457 |
| 11 | $f_{vr}/f_2$ | 1.20-2.20 | 1.907 | 1.907 |
| 12 | $Mv_2/Mv_3$ | 1.00-1.80 | 1.542 | 1.542 |
| 13 | $Mv_2/TL$ | 0.15-0.25 | 0.180 | 0.180 |
| 14 | $Mv_3/TL$ | 0.08-0.20 | 0.117 | 0.117 |

where $Mv_2 = 13.935$ mm and $Mv_3 = 9.037$ mm.

## Verification Summary

The prescription was re-entered from Table 1 and re-run through an independent paraxial y-nu trace.

| Quantity | Computed | Patent |
|---|---:|---:|
| EFL, wide | 12.360 mm | 12.36 mm |
| EFL, middle | 18.000 mm | 18.00 mm |
| EFL, tele | 27.161 mm | 27.16 mm |
| f1 | -15.547 mm | -15.547 mm |
| f2 | +16.888 mm | +16.888 mm |
| f3 | -19.772 mm | -19.772 mm |
| f4 | +44.066 mm | +44.065 mm |
| fvr | +32.200 mm | +32.200 mm |
| TL | 77.253 mm | 77.25 mm |
| Petzval sum | +0.002975 mm^-1 | independently computed |
| Petzval radius, reciprocal magnitude | 336.1 mm | independently computed |

The aspherical conic conversion does not affect paraxial focal length because conic and higher-order terms vanish at the optical axis. It does affect rendered surface shape and high-order ray behavior, so the data file stores the converted standard conic constant.

The patent does not publish clear-aperture semi-diameters. The data-file semi-diameters are therefore conservative rendering values, not patent-transcribed apertures. In this final pass, the L26 aspherical front surface was tightened to a 6.8 mm semi-diameter so the high-order aspheric rim slope remains within the project renderer limit while preserving positive edge thickness and safe adjacent air gaps.

## Sources

1. US Patent Application Publication US 2026/0056396 A1, "Zoom Optical System, Optical Device, and Method for Manufacturing Zoom Optical System," Takeru Uehara / Nikon Corporation, published February 26, 2026. See paragraphs 0102-0115, Table 1, and paragraph 0164.
2. Nikon Imaging, "NIKKOR Z DX 12-28mm f/3.5-5.6 PZ VR" official specifications: focal length, aperture range, construction, special elements, angle of view, minimum focus distance, reproduction ratio, filter size, dimensions, and weight. https://imaging.nikon.com/imaging/lineup/lens/z-mount/z_dx_12-28mmf35-56_pz_vr/
