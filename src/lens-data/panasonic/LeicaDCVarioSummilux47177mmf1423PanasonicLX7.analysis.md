## Patent Reference and Design Identification

**Patent:** US 2015/0124127 A1\
**Application Number:** 14/595,586\
**Priority:** July 17, 2012 (JP 2012-158712)\
**Filed:** January 13, 2015\
**Published:** May 7, 2015\
**Inventors:** Tsutomu Iwashita; Yoshiaki Kurioka; Takehiro Nishioka\
**Applicant:** Panasonic Intellectual Property Management Co., Ltd.\
**Title:** *Zoom Lens System, Imaging Device and Camera*\
**Embodiment analyzed:** Embodiment 1 / Numerical Example 1

**Manufacturer and branding:** The production LEICA DC lens is manufactured by Panasonic using measurement equipment and quality-assurance systems certified by Leica Camera AG. The catalog therefore lists Panasonic as maker and retains LEICA DC as the optical branding. Patent-assignee attribution is recorded separately and does not establish exclusive design authorship. [Panasonic manufacturing explanation](https://www.panasonic.com/nz/consumer/lumix/brand/technologies/great-lenses-make-great-cameras.html)

The prescription modeled here is Numerical Example 1, which the patent explicitly identifies as the implementation of Embodiment 1 (US 2015/0124127 A1, ¶0194; Fig. 1; Tables 1–3). The patent describes an eleven-element, five-unit zoom with unit powers positive–negative–positive–positive–negative, an aperture diaphragm inside the third unit, transverse image stabilization by L8, and focusing by axial motion of the fourth unit G4 (¶0119–¶0129, ¶0190–¶0192).

The association with the production Panasonic LUMIX DMC-LX7 is strong but remains an inference rather than a manufacturer-confirmed patent attribution. Panasonic specifies a LEICA DC VARIO-SUMMILUX 4.7–17.7 mm f/1.4–2.3 lens with 11 elements in 10 groups, five aspherical lenses producing nine aspherical surfaces, two ED lenses, POWER O.I.S., and a 1/1.7-inch sensor. Those construction counts agree exactly with Numerical Example 1, while the patent's L8 transverse stabilizer corresponds functionally to the production O.I.S. layout. The patent priority date of July 17, 2012 is also contemporaneous with the LX7 product documentation.

Two numerical differences are intentionally preserved instead of being removed by scaling. Panasonic markets 4.7–17.7 mm and f/1.4–2.3, whereas Table 3 gives design values of 4.8862–17.1948 mm and f/1.46326–2.37854. The endpoint differences are not related by one scale factor, so the implemented prescription remains at the patent's native scale (`s = 1`). The final normalized model computes effective focal lengths of 4.886165571 mm, 9.122566195 mm, and 17.194509683 mm at the three published zoom states.

The LensVisualizer model collapses the 0.01 mm adhesive layer between L6 and L7. This is a modeling transformation, not a correction to the patent. The adhesive collapse replaces the equal-radius source surfaces 12–13 by one L6→L7 junction at R = 56.2842 mm, and the 0.01 + 0.30 mm axial intervals become 0.31 mm. The patent's rear plane-parallel plate P (surfaces 24–25: 0.90 mm, nd = 1.51680, νd = 64.2) is modeled in `rearPlates`: every analysis traces it, but the diagram does not draw it. It is followed by the Table 3 wide back focus of 0.62702 mm. The model keeps its code-solved paraxial image plane, whose air-equivalent rear spacings are 1.621328395 mm, 1.636948819 mm, and 1.619439804 mm at wide, middle, and tele. Surface 23 therefore stores 0.400954, 0.416574, and 0.399065 mm before the plate, against the printed 0.40 mm. These offsets absorb Table 3's back-focus variation (0.62702 / 0.64271 / 0.62527 mm) and a solved-image residual of no more than 0.001 mm. All asphere coefficients remain unscaled.

The Leica D-Lux 6 also carries the 4.7–17.7mm f/1.4–2.3 lens family and is included in the display name. This production association does not independently confirm the modeled patent prescription for that camera. [Leica D-Lux 6 specifications](https://leica-camera.com/sites/default/files/pm-73563-Leica-D-Lux-6_Technical-Data_en.pdf).

## Optical Architecture

Embodiment 1 is a five-unit refractive zoom with the signed power sequence G1(+), G2(−), G3(+), G4(+), G5(−). The physical construction is 11 elements in 10 air-separated groups because L6 and L7 are cemented. The third unit G3 contains five elements and the aperture diaphragm, exactly as described in ¶0124–¶0125. The final modeled unit focal lengths are 98.556619 mm for G1, −12.883320 mm for G2, 16.035944 mm for G3, 26.370036 mm for G4, and −32.275284 mm for G5.

G1 is a weak positive front unit formed by L1 alone. G2 is the principal negative variator block and combines two negative elements with a positive meniscus. G3 is the central positive unit; it contains the cemented L6/L7 pair, the aperture stop between L7 and L8, the transverse stabilizing element L8, and positive L5/L9 elements. G4 is a single positive meniscus and is also the published focusing unit. G5 is a single negative rear meniscus.

The published zoom states are preserved at 4.8862, 9.1227, and 17.1948 mm. In the final normalized model, relative to the image plane, G1 moves a net 3.1953 mm objectward from wide to tele but reverses direction around the middle state; G2 moves 13.7163 mm imageward; G3 moves 12.2214 mm objectward; and G4 moves 1.1163 mm objectward. The data file uses piecewise-linear interpolation between the three published states; it does not claim that the interpolated loci are the patent's actual cam law. The patent itself warns that the straight connecting lines in Fig. 1 do not represent actual unit motion (¶0117).

The patent calls G5 fixed relative to the image surface (¶0128), but Table 3's back-focus values imply a small image-relative variation. In the model, the G5 station changes by about 0.0175 mm across the three states. The numerical table is retained rather than forced to agree with the qualitative fixed-unit statement.

Under this project's explicit definitions, the design is not labeled either telephoto or retrofocus at any published zoom state. The physical first-vertex-to-image track, including plate P, is 62.800, 57.956, and 65.995 mm. That agrees with Table 3's overall lengths of 62.7990, 57.9551, and 65.9945 mm to within 0.001 mm. Divided by EFL, the track is 12.85, 6.35, and 3.84 from wide to tele, all greater than unity. The air-equivalent back focal distance from the last lens vertex divided by EFL is 0.332, 0.179, and 0.094, all less than unity. These are classification tests only and do not replace the patent's own description of the zoom architecture.

The Petzval sum of the final model is 0.007544606 mm⁻¹ when accumulated surface by surface as φ/(n·n′). This is a computed paraxial property of the implemented prescription; it is not a patent-published field-curvature value.

## Element-by-Element Analysis

### L1 — Biconvex Positive

nd = 1.83481, νd = 42.7. Glass: **S-LAH55 (coordinate-compatible spectral proxy; supplier unconfirmed)**. Standalone in-air f = +98.556619 mm.

L1 is the sole element of G1 and therefore has the same focal length as the complete first unit. Its weak positive power distinguishes it from the much stronger negative second unit that follows. The patent identifies L1 simply as a biconvex element (¶0122); no aspherical surface is assigned to it.

The 835427 coordinate has multiple catalog-compatible possibilities, so the data file deliberately does not assign a vendor melt. The refractive coordinate is treated as a class-level description only.

### L2 — Negative Meniscus, two aspherical surfaces

nd = 1.80500, νd = 41.0. Glass: **S-LAH53 (coordinate-compatible spectral proxy; supplier unconfirmed)**. Standalone in-air f = −12.200878 mm.

L2 begins G2 and carries the strongest negative standalone power in that unit. Both surfaces are aspherical, corresponding to source surfaces 3 and 4 (¶0123; Table 2). The final model retains them as 3A and 4A.

The glass label is intentionally non-vendor-specific. Authoritative public catalog checks find nearby high-index lanthanum-family coordinates but do not establish an exact supplier identity from the patent alone.

### L3 — Biconcave Negative

nd = 1.59282, νd = 68.6. Glass: **FCD515 (coordinate-compatible spectral proxy; supplier unconfirmed)**. Standalone in-air f = −34.712882 mm.

L3 is the second negative element in G2. Its relatively high Abbe number contrasts with the much lower-νd positive L4 that follows, but the patent does not identify a particular catalog glass or publish partial-dispersion data. The production LX7 literature states that the finished lens contains two ED elements; the coordinate is consistent with a low-dispersion class, but that production label is not sufficient to identify this patent element with a specific melt.

### L4 — Positive Meniscus

nd = 2.00272, νd = 19.3. Glass: **E-FDS2 (coordinate-compatible spectral proxy; supplier unconfirmed)**. Standalone in-air f = +31.507571 mm.

L4 closes G2. Its positive power partly offsets L2 and L3 while the complete unit remains strongly negative at −12.883320 mm. The element is spherical in Numerical Example 1. The patent describes it as a positive meniscus with the convex surface toward the object (¶0123).

The nd value is above 2.0 while νd is only 19.3, placing the coordinate in a high-index, high-dispersion class. The data does not promote the coordinate match to a vendor identity.

### L5 — Biconvex Positive, two aspherical surfaces

nd = 1.60602, νd = 57.4. Glass: **N-SK2 (coordinate-compatible spectral proxy; supplier unconfirmed)**. Standalone in-air f = +18.243385 mm.

L5 begins the positive third unit G3 and is a substantial positive contributor. Both surfaces are aspherical (9A and 10A), as specified in ¶0124 and Table 2. In the complete third unit its power combines with L6/L7, the negative stabilizer L8, and positive L9 to produce a net unit focal length of 16.035944 mm.

### L6 — Positive Meniscus, cemented to L7

nd = 1.77250, νd = 49.6. Glass: **J-LASF016 (coordinate-compatible spectral proxy; supplier unconfirmed)**. Standalone in-air f = +14.593172 mm.

L6 is the positive member of cemented pair C1. The patent's source prescription inserts a 0.01 mm adhesive layer between L6 and L7 (¶0124; Table 1). The LensVisualizer model removes that generic adhesive plane and uses a direct junction at R = 56.2842 mm with the downstream L7 index.

The standalone focal length above is the isolated physical element in air, computed from the final modeled radii, L6 center thickness, and nd. It is deliberately distinct from the assembled cemented-pair power and from the total G3 power.

### L7 — Negative Meniscus, cemented to L6

nd = 1.74077, νd = 27.8. Glass: **E-FD13 (coordinate-compatible spectral proxy; supplier unconfirmed)**. Standalone in-air f = −10.689035 mm.

L7 is the negative member of C1. Because the omitted 0.01 mm adhesive thickness is absorbed into the modeled direct junction, its modeled center thickness is 0.31 mm rather than the source glass-only 0.30 mm. The isolated in-air focal length therefore differs slightly from a calculation made from the unnormalized source element.

The final direct-junction L6+L7 pair has a cemented net focal length of −63.779955 mm. That relatively weak negative cemented net power must not be confused with either element's isolated focal length or with G3's +16.035944 mm in-situ unit focal length.

### L8 — Negative Meniscus, transverse image-stabilization element

nd = 1.72825, νd = 28.3. Glass: **H-ZF4A (coordinate-compatible spectral proxy; supplier unconfirmed)**. Standalone in-air f = −23.529706 mm.

L8 lies immediately behind the aperture diaphragm and is the image-blur compensation element identified for Numerical Example 1 (¶0190). The patent specifies transverse motion rather than axial focusing motion. At the telephoto limit, a 0.116 mm lateral L8 displacement is stated to compensate the image decenter associated with a 0.3° inclination of the complete zoom system (¶0191–¶0192).

A first-order affine check using the final transformed model gives an image displacement magnitude of 0.089325 mm from the 0.116 mm L8 decenter, versus 0.090031 mm for a 0.3° system tilt. Their magnitude ratio is 0.9922. This supports the scale of the patent's compensation value, but it is only a paraxial check and not an exact decentered-asphere analysis.

### L9 — Biconvex Positive, two aspherical surfaces

nd = 1.55189, νd = 71.5. Glass: **M-FCD500 (coordinate-compatible spectral proxy; supplier unconfirmed)**. Standalone in-air f = +12.566649 mm.

L9 is the rear positive element of G3 and carries two aspherical surfaces, 18A and 19A. Its νd = 71.5 coordinate is the lowest-dispersion entry in the patent prescription, but the patent does not provide line indices, partial dispersion, or a catalog designation. The production brochure's statement that one ED element is dual-sided aspherical makes L9 a plausible point of correlation, not a proved material identification.

### L10 — Positive Meniscus, two aspherical surfaces and focus unit

nd = 1.68400, νd = 31.3. Glass: **684313 — Unmatched exact public catalog identity**. Standalone in-air f = +26.370036 mm.

L10 is the only element in G4, so its standalone focal length and unit focal length are the same. Both surfaces are aspherical, 20A and 21A. The patent states that G4 moves toward the object when focusing from infinity toward a close object (¶0118, ¶0129).

No close-focus spacing row is published for Numerical Example 1. The data therefore does not infer L10 travel from the camera's minimum-focus specifications.

### L11 — Negative Meniscus, object-side asphere

nd = 1.63550, νd = 23.9. Glass: **636239 — Unmatched exact public catalog identity**. Standalone in-air f = −32.275284 mm.

L11 is the sole element of G5 and carries an aspherical object-side surface, 22A. The complete fifth-unit focal length therefore equals the element focal length. The patent describes G5 as fixed with respect to the image surface during zooming (¶0128), subject to the small numerical tension with Table 3 back focus noted above.

## Glass Identification and Selection

The patent supplies only d-line nd and νd values and does not identify glass suppliers or melts. The final data uses qualified named spectral proxies and explicit `Unmatched` descriptions where no compatible curve is available. Authoritative OHARA, HOYA, SCHOTT, HIKARI, CDGM, and SUMITA catalogs were checked during extraction; where multiple suppliers publish compatible coordinates, the label remains supplier-unresolved.

| Element | Patent index / Abbe | Reference | Runtime spectral model | Index residual / Abbe residual |
|---|---|---|---|---|
| L1 | 1.83481 / 42.7 | d-line | S-LAH55; supplier-neutral proxy | -0.000003 / 0.014 |
| L2 | 1.80500 / 41 | d-line | S-LAH53; supplier-neutral proxy | 0.001098 / -0.074 |
| L3 | 1.59282 / 68.6 | d-line | FCD515; supplier-neutral proxy | 0.000004 / 0.030 |
| L4 | 2.00272 / 19.3 | d-line | E-FDS2; supplier-neutral proxy | 0.000003 / 0.020 |
| L5 | 1.60602 / 57.4 | d-line | N-SK2; supplier-neutral proxy | 0.001361 / -0.750 |
| L6 | 1.77250 / 49.6 | d-line | J-LASF016; supplier-neutral proxy | 0.000000 / 0.020 |
| L7 | 1.74077 / 27.8 | d-line | E-FD13; supplier-neutral proxy | -0.000000 / -0.040 |
| L8 | 1.72825 / 28.3 | d-line | H-ZF4A; supplier-neutral proxy | 0.000000 / 0.019 |
| L9 | 1.55189 / 71.5 | d-line | M-FCD500; supplier-neutral proxy | 0.001429 / 0.180 |
| L10 | 1.68400 / 31.3 | d-line | Unmatched; patent-coordinate fallback | No compatible catalog curve |
| L11 | 1.63550 / 23.9 | d-line | Unmatched; patent-coordinate fallback | No compatible catalog curve |

No element carries authored nC, nF, ng, or dPgF values. Nine of the eleven elements use compatible catalog dispersion curves; L10 and L11 retain the patent-coordinate Abbe fallback. It would be inappropriate to describe the patent prescription as apochromatic or to assign anomalous partial dispersion from Panasonic's production ED terminology alone.

The Panasonic brochure states that the production LX7 lens uses two ED elements, including one dual-sided aspherical ED lens. The patent's L3 and L9 coordinates are conspicuously low-dispersion, and L9 is dual-aspherical, so those facts strengthen the production correlation. They do not establish that the production ED melts and the patent-coordinate glasses are identical.

### Diagram color evidence

Catalog-inferred APD color tags identify L3, L4, L9. Each selected spectral proxy has computed ΔPgF above +0.015 relative to the normal-line baseline (0.6438 − 0.001682νd). The inspector names the proxy and its deviation. The patent does not supply these values; no measured line indices or patent dPgF fields are invented. These tags describe the modeled materials, not proof of production ED assignments or APO performance.

## Focus Mechanism

The patent identifies G4, consisting only of L10, as the focusing unit. From infinity toward a close object, G4 moves toward the object along the optical axis (¶0118, ¶0129). This is an inner-focus mechanism in the sense that one internal unit moves independently of the front unit and image plane.

Numerical Example 1 publishes only infinity-focus zoom states. It gives no close-focus G4 position, no paired adjacent-gap values, no object-distance reference plane, and no intermediate focus law. The model therefore uses **NO_INTERNAL_RECONSTRUCTION**: every focus pair in `var` repeats the infinity spacing at each zoom state. The zoom prescription is real; the focus slider has no invented optical motion.

Panasonic's product specifications list 1 cm minimum focus at maximum wide and 30 cm at maximum tele in macro/MF/Intelligent Auto/movie modes. The data-file `closeFocusM: 0.01` records the marketed minimum-wide capability, not a reconstructed patent conjugate and not a claim that the telephoto state focuses to 1 cm. Because no close-focus internal geometry is authored, no finite-object magnification or focus breathing result is claimed here.

## Aspherical Surfaces

Numerical Example 1 has nine aspherical surfaces on five elements: 3A/4A on L2, 9A/10A on L5, 18A/19A on L9, 20A/21A on L10, and 22A on L11. This exactly matches the production count of five aspherical lenses and nine aspherical surfaces, although that count alone does not prove patent-to-product identity.

The patent defines sag as

$$
z(h)=\frac{h^2/r}{1+\sqrt{1-(1+K)(h/r)^2}}+\sum A_n h^n,
$$

with h and z in millimeters (¶0181–¶0186). This is the same standard conic convention used by the data model, so the patent K values are transferred directly with no offset or sign conversion. No scaling is applied, so the A coefficients are copied at their published magnitudes.

| Surface | K | A4 | A6 | A8 | A10 | A12 | A14 | A16 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 3A | 0 | −2.68650e−5 | −2.19939e−8 | 1.71056e−9 | −1.61048e−11 | 5.21813e−14 | 0 | 0 |
| 4A | −1.43006e−1 | −7.46957e−5 | −4.34096e−7 | −1.13634e−8 | 1.73729e−10 | −2.59994e−12 | 0 | 0 |
| 9A | −9.84634e−2 | −6.88003e−5 | 1.27101e−6 | −5.27801e−8 | 1.03956e−9 | 0 | 0 | 0 |
| 10A | 0 | 9.49723e−6 | 9.67297e−7 | −1.08421e−8 | −2.16963e−10 | 1.44910e−11 | 0 | 0 |
| 18A | 0 | −2.43602e−4 | 6.65996e−6 | −9.91789e−7 | 4.96802e−8 | −1.47067e−9 | 4.75724e−12 | 0 |
| 19A | 0 | 5.29678e−5 | −5.32716e−6 | 8.32304e−7 | −8.45390e−8 | 3.34839e−9 | −5.97550e−11 | 0 |
| 20A | 0 | −2.21595e−4 | 1.39952e−5 | −1.04586e−6 | 6.11792e−8 | −1.38011e−9 | −1.50683e−11 | 1.00919e−12 |
| 21A | 0 | −2.80965e−4 | 9.08046e−6 | −3.10430e−7 | 2.64379e−8 | −7.01895e−10 | −1.88682e−11 | 1.10060e−12 |
| 22A | 0 | −7.92215e−4 | 6.88113e−5 | −2.88618e−6 | 7.75972e−8 | −8.87695e−10 | −2.47039e−17 | −1.82676e−19 |

The patent publishes no clear apertures, so the model's semi-diameters are inferred rather than source values. Asphere departures are therefore quoted only at those modeled semi-diameters. Relative to the same-R spherical base, the verified departures are −0.2905 mm at 3A (h = 10.7 mm), −1.0360 mm at 4A (h = 8.1 mm), −0.0645 mm at 9A, +0.1622 mm at 10A, −0.2413 mm at 18A, −0.0745 mm at 19A, −0.0290 mm at 20A, −0.0433 mm at 21A, and −0.0271 mm at 22A (h = 4.7 mm). The largest modeled departure is therefore on 4A at h = 8.1 mm.

Those departure signs describe geometry relative to the corresponding base sphere; they should not be converted directly into claims about which aberration each surface corrects. The patent's aberration figures demonstrate the complete-system result, not a surface-by-surface allocation of correction.

## Conditional Expressions

The patent defines three principal conditions for the five-unit architecture (¶0154–¶0171) and prints Example 1 values in Table 10. Recalculation from the final model/source definitions gives:

| Condition | Patent inequality | Table 10 | Verified value | Result |
| --- | --- | ---: | ---: | --- |
| (1) f1/f3 | 5.0 < f1/f3 < 8.0 | 6.15 | 6.145982 | Pass; rounds to 6.15 |
| (2) D3/D1 | 1.0 < D3/D1 < 10.0 | 7.59 | 7.435895 | Pass inequality; printed value does not reproduce |
| (3) f5/fW | −15.0 < f5/fW < −3.0 | −6.61 | −6.605396 | Pass; rounds to −6.61 |

Condition (2) is the important source discrepancy. Using the patent's stated thickness definition directly on Table 1 gives D1 = 1.9000 mm and D3 = 14.1282 mm, hence D3/D1 = 7.4358947 rather than 7.59. The model does not alter source thicknesses to force Table 10 agreement. Both numbers satisfy the operative inequality, so the discrepancy does not invalidate the selected prescription, but Table 10's 7.59 is not described as independently reproduced.

## Image Stabilization

The patent makes image stabilization part of G3 rather than a separate optical unit. For Numerical Example 1, L8 is translated perpendicular to the optical axis (¶0149–¶0151, ¶0190). At the telephoto limit and infinity focus, the patent specifies 0.116 mm L8 translation for the image-decenter magnitude associated with a 0.3° inclination of the complete system (¶0191–¶0192).

The final-model first-order check produces 0.089325 mm image displacement from the 0.116 mm L8 translation and 0.090031 mm from a 0.3° system tilt, a magnitude ratio of 0.9922. That result is consistent with the patent's stated compensation scale. It is not an exact off-axis/decentered-asphere trace, so the analysis does not infer residual stabilized aberrations from the paraxial number. The patent's Fig. 3 is the primary source for the complete lateral-aberration behavior in the compensation state.

Panasonic identifies the production LX7 system as POWER O.I.S. The patent does not use that product name, so the shared stabilizer architecture is correlation evidence rather than manufacturer confirmation that Numerical Example 1 is the production prescription.

## Verification Summary

The final LensVisualizer model contains 22 modeled surfaces, including one `STO`, after collapse of the adhesive plane; plate P is carried separately in `rearPlates`. It retains all 11 physical lens elements.

At wide, middle, and tele, independent reduced-angle sequential tracing and ABCD matrix multiplication agree to better than 1e−12 in the system matrix. The final EFL values are 4.886165571 mm, 9.122566195 mm, and 17.194509683 mm. The per-state air-equivalent rear spacings from surface 23 to the image are 1.621328395 mm, 1.636948819 mm, and 1.619439804 mm. Physically, that is 0.400954 / 0.416574 / 0.399065 mm of air, the 0.90 mm plate, and 0.62702 mm of air.

The physical diaphragm diameter is not published. The model calibrates the stop to the patent design f-numbers, producing implied wide-open stop semi-diameters of 3.698700 mm, 3.750995 mm, and 3.793506 mm. The authored `STO.sd = 3.79351 mm` is the maximum envelope. Agreement with the same f-number target is therefore a calibration result, not independent evidence of the production iris diameter.

Surface semi-diameters are likewise modeled. Exact meridional ray bundles at 0.6 of the patent half-field were checked at wide, middle, tele, and one midpoint in each zoom segment. Surfaces 4A–8 (the L2 rear face, L3 and L4) were then raised to 8.1 / 7.9 / 7.9 / 8.0 / 8.0 mm so the traced wide chief ray reaches the patent's 3.8210 mm image height unclipped. The final modeled geometry has a maximum rim-slope angle of 48.418° (4A) and a minimum sampled common-aperture element thickness of 0.3100 mm; the largest positive shared-gap sag-intrusion ratio is 0.8639 (4A→5) against the 0.90 policy limit. These are model-geometry checks based on the stored semi-diameters; they do not establish production barrel clearances or application-renderer trim.

Full-field chief rays at the patent half-view angles reproduce the published image heights to +0.00053 mm at wide, +0.00303 mm at middle, and +0.00013 mm at tele, all within the 0.005 mm verification tolerance. This is a chief-ray field check and does not assert that a complete full-field marginal bundle is unvignetted.

## Sources and References

**Primary patent source**

United States Patent Application Publication **US 2015/0124127 A1**, Tsutomu Iwashita, Yoshiaki Kurioka, and Takehiro Nishioka, *Zoom Lens System, Imaging Device and Camera*, published May 7, 2015. Numerical Example 1 / Embodiment 1: Fig. 1; ¶0116–¶0129; asphere convention ¶0181–¶0186; stabilization ¶0190–¶0192; Tables 1–3 on publication pp. 8–9; conditional values in Table 10 on publication p. 11.

**Manufacturer sources used for production correlation and marketed specifications**

Panasonic, **DMC-LX7 Specifications**, product archive:\
https://www.panasonic.com/au/support/product-archives/lumix-cameras-video-cameras/lumix-digital-cameras/dmc-lx7.specs.html

Panasonic, **DMC-LX7 Operating Instructions**, VQT4H91:\
https://help.na.panasonic.com/wp-content/uploads/2023/02/DMCLX7_VQT4H91_ENG.pdf

Panasonic, **DMC-LX7 brochure / lens construction**:\
https://www.panasonic.com/content/dam/Panasonic/it/it/artical/Cataloghi-e-Brochure/LX7.pdf

**Glass-catalog sources consulted for coordinate audit**

OHARA optical-glass catalog: https://www.ohara-inc.co.jp/en/product/catalog/\
HOYA optical-glass data: https://www.hoya-opticalworld.com/english/datadownload/index.html\
SCHOTT N-BK7 / optical-glass reference: https://media.schott.com/api/public/content/41e799d0bf874807a0bb8e702fbb75b5\
HIKARI optical-glass catalog: https://www.hikari-g.co.jp/optical_glass/general_optical_glass/\
CDGM optical-glass database: https://www.cdgmgd.com/database/toWeb.htm?k=guang_ming_bo_li_shu_ju&url=sample\
SUMITA optical-glass / preform catalog: https://www.sumita-opt.co.jp/en/products/preform.html
