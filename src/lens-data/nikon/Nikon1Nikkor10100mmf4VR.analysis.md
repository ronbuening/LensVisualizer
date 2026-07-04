# NIKON 1 NIKKOR VR 10-100mm f/4-5.6

## Patent Reference and Design Identification

**Patent:** US 2020/0348497 A1  
**Application number:** US 16/935,189  
**Filed:** July 22, 2020  
**Published:** November 5, 2020  
**Priority:** October 23, 2012, JP 2012-233961 / 2012-233963 / 2012-233964 / 2012-233965  
**Inventors:** Akihiko Obama; Masashi Yamashita  
**Applicant:** Nikon Corporation  
**Title:** Variable Magnification Optical System, Optical Device, and Method for Producing Variable Magnification Optical System  
**Embodiment analyzed:** Eighth Example, Table 8, ¶0391-0401; close-focus and VR behavior cross-checked against the numerically identical Third Example, Table 3, ¶0311-0328

The prescription transcribed in the data file is the Eighth Example. The close-focus and stabilization discussion also uses the Third Example because Table 3 and Table 8 share the same optical prescription to the precision published in the patent, while Table 3 includes close-focus gap data and a vibration-reduction description that Table 8 omits. Table 8 remains the primary source for the exported infinity-focus prescription.

The Eighth Example is identified as the likely optical basis of the production 1 NIKKOR VR 10-100mm f/4-5.6 by convergent evidence rather than by an explicit product name in the patent.

1. Nikon's product-history page lists the production lens as a 27-270mm equivalent CX-format 10x zoom with 19 elements in 12 groups, including 2 ED glass elements, 3 aspherical lens elements, and HRI lens elements. The patent prescription has 19 glass lens bodies in 12 air-spaced optical sub-groups when the six air-separated units inside G4 are counted separately. The data file models the thin resin layer of the compound L21 as a separate optical medium, so the `elements` array has 20 entries while `elementCount` remains 19.
2. Table 8 gives focal lengths of 10.30260 mm, 30.00000 mm, and 96.99284 mm with a zoom ratio of 9.42x. These values align with the marketed 10-100mm range after normal product rounding.
3. Table 8 gives FNO = 4.12, 5.48, and 5.81 at the three zoom positions. The wide end rounds directly to f/4; the telephoto patent value is slightly slower than the marketed f/5.6 but within normal design-to-product rounding and aperture scheduling tolerance for a compact variable-aperture zoom.
4. Table 8 gives image height Y = 8.19 mm, equivalent to a 16.38 mm image diagonal. This covers the 1-inch-type / Nikon CX frame diagonal of about 15.86 mm with small reserve.
5. The prescription has three aspherical surfaces: the compound resin front of L21, the rear face of L404, and the rear face of L410. This matches the production special-element count when the compound asphere is counted as an aspherical lens element rather than as an additional glass element.
6. The prescription has two low-dispersion fluorophosphate crown elements at nd = 1.49782 and νd = 82.57: L12 and L401. These correspond to the two ED elements in Nikon's published summary.
7. The patent's priority date, October 2012, precedes Nikon's 2013 product introduction timing closely enough for a production optical design disclosure.

The production lens should be distinguished from the earlier 1 NIKKOR VR 10-100mm f/4.5-5.6 PD-Zoom. Nikon lists that earlier power-zoom design as 21 elements in 14 groups with a different special-element mix; it is not the prescription transcribed here.

## Optical Architecture

The design is a compact high-ratio positive-lead zoom for the Nikon CX format. Its four main patent groups follow a G1 positive / G2 negative / G3 positive / G4 positive distribution.

G1 is a front positive collector made from a cemented HRI/ED doublet followed by a high-index positive singlet. It supplies the positive front power needed for the telephoto end while keeping the physical front group modest in diameter.

G2 is the negative variator. It contains the compound aspherical L21, a second negative meniscus, and a cemented positive-negative doublet. Its negative power is strong, f_G2 = -10.168 mm, and it controls most of the magnification change.

The aperture stop is between G2 and G3. In the Table 8 zooming description, the stop moves as a body with G4. This is verified numerically: the axial separation from the stop to the first G4 surface remains constant through all three zoom states once the G3 internal thickness is included.

G3 is a cemented positive focus group, f_G3 = +31.061 mm. It sits near the stop and moves toward the image side for close focus. This is the same mechanism described generally in ¶0082 and specifically in the Third Example at ¶0321.

G4 is the rear relay group, f_G4 = +67.058 mm at the wide-angle position. It contains ten glass elements arranged as six air-separated sub-groups: L401/L402, L403/L404, L405, L406/L407, L408/L409, and L410. The second sub-group, L403/L404, is the negative vibration-reduction unit in the Third Example and is the only negative cemented unit inside the front half of G4.

The infinity-focus zoom spacings in Table 8 are as follows:

| Gap | Wide | Middle | Tele | Behavior from Table 8 |
| --- | ---: | ---: | ---: | --- |
| d5, G1-G2 | 2.10606 | 20.13084 | 40.20889 | increases |
| d13, G2-stop | 19.66416 | 6.24359 | 1.80000 | decreases |
| d14, stop-G3 | 4.27874 | 4.97381 | 1.80000 | increases, then decreases |
| d17, G3-G4 | 3.43763 | 2.74256 | 5.91637 | decreases, then increases |
| BF | 14.05688 | 27.80535 | 34.11509 | increases |

The patent prose in ¶0398 describes the G3-G4 spacing as increasing from wide to middle and decreasing from middle to tele, but Table 8 gives the opposite behavior for d17. The numerical prescription is internally consistent and reproduces the stated focal lengths, so the table is treated as authoritative.

## Element-by-Element Analysis

### L11 - Negative Meniscus, convex to object

nd = 2.00100, νd = 29.14. Glass: S-LAH99 (OHARA) - HRI lanthanum flint. f = -49.34 mm.

L11 is the designated high-index element in the first group for conditional expressions (7), (8), and (11). Its negative meniscus form and nd greater than 2.0 let the first cemented doublet carry substantial chromatic and monochromatic correction without requiring extreme radii. The standalone focal length used in expression (11) is negative; the patent uses its absolute ratio to G1.

### L12 - Biconvex Positive, cemented to L11

nd = 1.49782, νd = 82.57. Glass: J-FKH1 (HIKARI) - ED fluorophosphate crown. f = +67.83 mm.

L12 supplies the positive power of the front cemented doublet. The large dispersion separation between L11 and L12 gives the first group strong achromatizing leverage while preserving a relatively compact axial thickness. It is the first-group positive lens referenced by conditional expression (13).

### L13 - Plano-convex Positive

nd = 1.88300, νd = 40.66. Glass: S-LAH58 equivalent (Hikari J-LASF08A class). f = +48.93 mm.

L13 is the final positive member of G1. The rear face is plane in Table 8, so nearly all standalone power is produced at the convex object-side surface. Its high index reduces curvature demand and helps keep the front collector short.

### L21r / L21g - Compound Aspherical Negative Meniscus

Resin layer: nd = 1.55389, νd = 38.09. Glass body: nd = 1.83481, νd = 42.73. Glass body: S-LAH55V equivalent (Hikari J-LASF05 class). Combined f = -10.44 mm.

The front surface of L21 is a thin resin asphere bonded to a high-index glass substrate. Table 8 gives only 0.1000 mm center thickness for the resin medium, so the data file models it as a distinct element for ray tracing while retaining the production count of 19 main lens elements.

This compound element is the strongest standalone negative unit in G2. The asphere controls wide-angle distortion, astigmatism, and higher-order spherical terms generated by the steep variator ray angles.

### L22 - Negative Meniscus, concave to object

nd = 1.75500, νd = 52.34. Glass: J-LASKH2 (HIKARI; Sumita K-LaSKn1 equivalent). f = -27.71 mm.

L22 spreads the negative variator power over a second air-spaced component instead of concentrating it all in L21. Its relatively high Abbe number for a negative lens helps prevent the variator from becoming an excessive source of lateral color.

### L23 - Biconvex Positive, cemented to L24

nd = 1.80809, νd = 22.74. Glass: J-SFH1 (HIKARI). f = +16.79 mm.

L23 is a highly dispersive positive flint inside the otherwise negative second group. This is not a classical crown-positive / flint-negative achromat. Instead, the high dispersion is used as a chromatic lever inside the moving variator group.

### L24 - Negative Meniscus, concave to object

nd = 1.88300, νd = 40.66. Glass: S-LAH58 equivalent (Hikari J-LASF08A class). f = -30.57 mm.

L24 completes the G2 cemented doublet. The L23/L24 doublet is net positive, f = +36.30 mm, and moderates the Petzval and chromatic contribution of the strongly negative L21 and L22 components.

### L31 - Negative Meniscus, convex to object

nd = 1.90265, νd = 35.73. Glass: J-LASFH9 (HIKARI). f = -31.20 mm.

L31 is the negative member of the G3 focus doublet. Its high refractive index keeps the focus group compact and limits the spherical-aberration change that would otherwise accompany a short positive moving group.

### L32 - Biconvex Positive, cemented to L31

nd = 1.67003, νd = 47.14. Glass: J-BAF10 (HIKARI/Nikon). f = +15.45 mm.

L32 supplies most of the positive power of G3. The cemented pair has f_G3 = +31.061 mm and moves as a unit for close focus. Its cemented construction suppresses longitudinal chromatic drift during focusing, matching the rationale stated for the third embodiment in ¶0175.

### L401 - Biconvex Positive, cemented to L402

nd = 1.49782, νd = 82.57. Glass: J-FKH1 (HIKARI) - ED fluorophosphate crown. f = +18.33 mm.

L401 is the second ED element in the prescription and the fourth-group positive lens referenced by conditional expression (14). Positioned at the entrance of G4, it forms a strong positive relay component without adding much chromatic power.

### L402 - Negative Meniscus, convex to image

nd = 2.00069, νd = 25.46. Glass: J-LASFH17 (HIKARI/Nikon). f = -27.36 mm.

L402 is an HRI negative flint paired with the ED L401. The doublet remains net positive, f = +47.41 mm, but the strong cemented interface helps control chromatic and Petzval terms at the front of the relay.

### L403 - Positive Meniscus, concave to object

nd = 1.84666, νd = 23.80. Glass: S-TIH53 equivalent (Hikari J-SF03 class). f = +21.66 mm.

L403 is a high-dispersion positive meniscus in the negative VR doublet. Its radii are both negative, but the stronger image-side curvature makes the element positive in air.

### L404 - Biconcave Negative, aspherical rear

nd = 1.77377, νd = 47.25. Glass: M-TAF401 (HOYA; moldable lanthanum-flint equivalent). f = -12.30 mm.

L404 completes the negative L403/L404 cemented unit. The pair has f = -28.61 mm and corresponds to the negative vibration-reduction group in the Third Example. The rear surface is a glass-mold asphere in the patent description, giving the moving VR group a higher-order correction term rather than making it a simple decentered negative doublet.

### L405 - Biconvex Positive

nd = 1.56883, νd = 56.00. Glass: N-BAK4 equivalent (Hikari J-BAK4 class). f = +22.31 mm.

L405 is an air-spaced positive singlet behind the VR doublet. Its moderate index and crown dispersion add relay power without compounding the high-dispersion burden already present in L403/L404.

### L406 - Biconvex Positive, cemented to L407

nd = 1.51742, νd = 52.20. Glass: E-CF6 equivalent (Hikari J-KF6 class). f = +22.31 mm.

L406 begins a compact cemented doublet that is net negative. It works with the dense flint L407 to alternate the sign of relay power in G4.

### L407 - Biconcave Negative

nd = 1.90366, νd = 31.27. Glass: TAFD25 equivalent (Hikari J-LASFH13 class). f = -11.06 mm.

L407 has strong negative power and also falls in the high-index dense-flint region of the glass map. Table 8 reports only L11 in the conditional-expression summary for expressions (7), (8), and (11), so L11 is treated as the patent-selected element for those conditions. L407 still functions as a high-index relay flint within G4.

### L408 - Biconvex Positive, cemented to L409

nd = 1.67270, νd = 32.19. Glass: J-SF5 (HIKARI/Nikon). f = +9.17 mm.

L408 is the strongest standalone positive element in the rear relay. It is paired with the HRI negative L409 and operates close to the image side, where small changes in ray slope have a strong effect on final correction.

### L409 - Negative Meniscus, convex to image

nd = 2.00069, νd = 25.46. Glass: J-LASFH17 (HIKARI/Nikon). f = -15.21 mm.

L409 is the third nd ≈ 2.0 element in the prescription. The L408/L409 doublet is net positive, f = +19.84 mm, and is a major contributor to the final convergence before the field-correcting L410.

### L410 - Negative Meniscus, concave to object, aspherical rear

nd = 1.85135, νd = 40.10. Glass: M-TAFD305 (HOYA), moldable dense-flint class. f = -29.31 mm.

L410 is the final lens in the system. Its negative meniscus shape and aspherical rear face make it a field-correction element immediately ahead of the image plane. Because this surface acts late in the optical train, it has high leverage over field curvature, astigmatism, and distortion residuals.

## Glass Identification and Selection

Glass identification was checked against public manufacturer catalog data where available. The Nikon/Hikari J-series catalog provides direct or near-direct names for most of the prescription. Where the stored nd/νd pair is closer to a moldable or cross-vendor code than to a single public catalog line, the data file labels the entry as a glass class rather than asserting an exact melt identity.

| Element | nd | νd | Glass / class used in data | Status |
| --- | ---: | ---: | --- | --- |
| L11 | 2.00100 | 29.14 | S-LAH99 (OHARA) | catalog match |
| L12 | 1.49782 | 82.57 | J-FKH1 (HIKARI) | catalog match |
| L13 | 1.88300 | 40.66 | S-LAH58 equivalent (Hikari J-LASF08A class) | catalog-backed equivalent |
| L21r | 1.55389 | 38.09 | Patent-listed resin | proprietary resin |
| L21g | 1.83481 | 42.73 | S-LAH55V equivalent (Hikari J-LASF05 class) | catalog-backed equivalent |
| L22 | 1.75500 | 52.34 | J-LASKH2 (HIKARI; Sumita K-LaSKn1 equivalent) | catalog-backed equivalent |
| L23 | 1.80809 | 22.74 | J-SFH1 (HIKARI) | catalog match |
| L24 | 1.88300 | 40.66 | S-LAH58 equivalent (Hikari J-LASF08A class) | catalog-backed equivalent |
| L31 | 1.90265 | 35.73 | J-LASFH9 (HIKARI) | catalog match |
| L32 | 1.67003 | 47.14 | J-BAF10 (HIKARI/Nikon) | catalog match |
| L401 | 1.49782 | 82.57 | J-FKH1 (HIKARI) | catalog match |
| L402 | 2.00069 | 25.46 | J-LASFH17 (HIKARI/Nikon) | catalog match |
| L403 | 1.84666 | 23.80 | S-TIH53 equivalent (Hikari J-SF03 class) | catalog-backed equivalent |
| L404 | 1.77377 | 47.25 | M-TAF401 (HOYA; moldable lanthanum-flint equivalent) | catalog-backed equivalent |
| L405 | 1.56883 | 56.00 | N-BAK4 equivalent (Hikari J-BAK4 class) | catalog-backed equivalent |
| L406 | 1.51742 | 52.20 | E-CF6 equivalent (Hikari J-KF6 class) | catalog-backed equivalent |
| L407 | 1.90366 | 31.27 | TAFD25 equivalent (Hikari J-LASFH13 class) | catalog-backed equivalent |
| L408 | 1.67270 | 32.19 | J-SF5 (HIKARI/Nikon) | catalog match |
| L409 | 2.00069 | 25.46 | J-LASFH17 (HIKARI/Nikon) | catalog match |
| L410 | 1.85135 | 40.10 | M-TAFD305 (HOYA), moldable dense-flint class | catalog-class match |

The chromatic strategy is distributed. L12 and L401 are the two ED fluorophosphate crown elements; each is cemented to a high-index or high-dispersion partner. The strongest nd ≈ 2.0 elements, L11, L402, and L409, reduce curvature demand and help the zoom remain short. The relay group also uses several very dispersive flints, especially L403 and L408/L409, to correct lateral color over the wide zoom range.

## Focus Mechanism

The focus group is G3, a cemented L31/L32 doublet. Focusing from infinity to the close state moves G3 toward the image side. This is shown directly in Table 3: d14 increases and d17 decreases by the same amount at each zoom position while the total track and BF remain fixed.

| Zoom state | d14 infinity | d14 close | d17 infinity | d17 close | β close |
| --- | ---: | ---: | ---: | ---: | ---: |
| Wide | 4.279 | 4.983 | 3.438 | 2.733 | -0.032 |
| Middle | 4.974 | 5.899 | 2.743 | 1.818 | -0.068 |
| Tele | 1.800 | 5.217 | 5.916 | 2.499 | -0.116 |

The data file uses Table 8 for the infinity prescription and uses the matching Table 3 focus offsets for close focus. Manufacturer-published close-focus specifications remain the product-level reference for catalog metadata; the `closeFocusM` field is set to the wide-end minimum focus distance, 0.35 m, because the data format accepts a single scalar value.

## Aspherical Surfaces

The patent uses an even-polynomial sag equation of the form

$$X = \frac{h^2/r}{1 + \sqrt{1 - K(h^2/r^2)}} + A_4h^4 + A_6h^6 + A_8h^8 + A_{10}h^{10}.$$

This patent `K` is the coefficient inside the square-root term. The LensVisualizer data format uses the standard conic form with `1 + K_std` in the square-root term, so the data file converts patent values by `K_std = K_patent - 1`. The coefficient values below are the patent values.

| Surface | Element | Patent K | Data-file K_std | A4 | A6 | A8 | A10 |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| *6 | L21 resin front | 20.0000 | 19.0000 | 9.17458e-5 | -6.51986e-7 | 2.69890e-9 | -1.23751e-11 |
| *23 | L404 rear | 0.4823 | -0.5177 | -7.24815e-6 | -3.60139e-7 | 4.05630e-9 | 0 |
| *33 | L410 rear | -20.0000 | -21.0000 | -1.22780e-4 | 8.28360e-7 | -6.05245e-9 | -9.88805e-11 |

The first asphere is a compound resin-on-glass variator asphere. The second and third are rear-surface glass-mold aspheres in G4. Their placement is consistent with Nikon's patent statement that aspheres may be made by glass molding or by compound resin formation on glass surfaces.

## Image Stabilization

The Eighth Example belongs to the fourth embodiment and does not tabulate a dedicated VR displacement. The same numerical prescription appears as the Third Example, whose text identifies the second segment lens group G42 in the fourth group as the vibration-reduction group. In the Table 8 / Example 8 labeling, this is the L403/L404 cemented negative doublet.

The L403/L404 unit has a computed in-air focal length of -28.61 mm. Relative to f_G3 = +31.06 mm, `(-fVR)/f3 = 0.921`, the value reported for the Third Example. The patent lists a wide-end vibration coefficient of -0.92 and a telephoto-end coefficient of -1.68 for the identical Third Example prescription, with corresponding lateral shifts of about -0.12 mm and -0.20 mm for the stated shake angles.

## Conditional Expressions

The Eighth Example satisfies the fourth-embodiment conditions listed in Table 8.

| Expression | Formula | Patent value | Independently recomputed |
| --- | --- | ---: | ---: |
| (7) | ndh | 2.001, L11 | 2.001, L11 |
| (8) | νdh | 29.14, L11 | 29.14, L11 |
| (9) | f1 / (-f2) | 6.31 | 6.304 |
| (10) | (-f2) / f3 | 0.327 | 0.327 |
| (11) | abs(fh / f1) | 0.770, L11 | 0.770, L11 |
| (13) | νdp1 | 82.57, L12 | 82.57, L12 |
| (14) | νdp4 | 82.57, L401 | 82.57, L401 |

The data file does not include conditions (1)-(6) as controlling constraints for the primary Eighth Example, although the same prescription also satisfies the corresponding first-to-third embodiment values when evaluated under the Third Example framing.

## Verification Summary

A fresh paraxial y-nu trace was run from the Table 8 prescription. The trace used the surface-by-surface refraction formula and solved the back focus from a collimated input ray at each zoom position.

| Quantity | Computed | Patent |
| --- | ---: | ---: |
| EFL wide | 10.3025 mm | 10.3026 mm |
| EFL middle | 29.9998 mm | 30.0000 mm |
| EFL tele | 96.9930 mm | 96.9928 mm |
| BF wide | 14.0568 mm | 14.0569 mm |
| BF middle | 27.8053 mm | 27.8054 mm |
| BF tele | 34.1155 mm | 34.1151 mm |
| f_G1 | +64.0978 mm | +64.0978 mm |
| f_G2 | -10.1679 mm | -10.1679 mm |
| f_G3 | +31.0605 mm | +31.0606 mm |
| f_G4 | +67.0581 mm | +67.0587 mm |

The Petzval sum was recomputed surface by surface as `φ/(n n')`, not by thin-element approximations. The result is +0.003731 mm^-1, corresponding to a Petzval radius of about 268 mm. This value is useful as an internal check on the sign convention but is not a patent-published value.

Semi-diameters in the data file are inferred, because Table 8 does not list clear apertures. They were estimated from combined marginal and chief-ray envelopes at the three zoom states, then reduced where necessary to satisfy rim-slope and cross-gap sag constraints. The tight 0.3000 mm air space between surfaces 28 and 29 is the limiting rear-relay clearance; the corresponding inferred semi-diameters are therefore intentionally smaller than a simple marginal-ray envelope would suggest. The thin L21 resin layer is intentionally below ordinary glass edge-thickness limits because the patent explicitly gives it as a 0.1000 mm compound resin layer.

## Sources

Primary patent source: US 2020/0348497 A1, Obama and Yamashita, Nikon Corporation, especially Table 8 and ¶0391-0401 for the Eighth Example, Table 3 and ¶0311-0328 for matching focus and VR behavior, and ¶0217-0258 for fourth-embodiment conditional expressions.

Production identification source: Nikon Imaging, Product History - 2010s, entry for 1 NIKKOR VR 10-100mm f/4-5.6, listing 27-270mm equivalent coverage, 19 elements in 12 groups, 2 ED elements, 3 aspherical lens elements, and HRI lens elements. URL: https://imaging.nikon.com/imaging/information/products_history/2010/

Supplementary manufacturer and catalog sources consulted for glass names: OHARA optical glass catalog entries for S-LAH series; Hikari/Nikon optical glass catalog pages for J-FKH, J-LASF, J-LASFH, J-SF, J-SFH, J-KF, J-BAK, and J-BAF families; HOYA moldable-glass cross-reference data for M-TAF / M-TAFD class codes; Sumita optical glass material listing for K-series lanthanum glasses; and Schott data only as a secondary equivalence check where relevant.
