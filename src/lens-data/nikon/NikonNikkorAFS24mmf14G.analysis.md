# Nikon AF-S NIKKOR 24mm f/1.4G ED — Patent Optical Analysis

## Patent Reference and Design Identification

**Patent:** US 8,416,512 B2  
**Title:** Wide-Angle Lens, Imaging Optical Apparatus and Digital Equipment  
**Filed:** September 9, 2010  
**Granted:** April 9, 2013  
**Priority:** JP 2009-207811, September 9, 2009  
**Inventors:** Hiroki Harada; Yasushi Yamamoto  
**Assignee:** Nikon Corporation  
**Embodiment analyzed:** Example 3, corresponding to Figs. 3, 7, 11A–11C, and 19A–21I

US 8,416,512 B2 discloses a large-aperture wide-angle lens for SLR-class camera bodies. The system consists of a positive first lens group and a positive second lens group; focusing is carried out by moving the second group toward the object while keeping the first group fixed. Example 3 is the strongest public match to the production Nikon AF-S NIKKOR 24mm f/1.4G ED among the four numerical examples in the patent.

The identification rests on convergent rather than single-point evidence. Example 3 has twelve glass elements in ten air-spaced groups, matching Nikon's published 12-element/10-group specification for the production lens. It uses two aspherical surfaces and two low-dispersion/anomalous-dispersion elements, matching Nikon's published count of two aspherical elements and two ED glass elements. The patent prescription gives $f = 24.68$ mm, $FNO = 1.43$, and $2\omega = 83.64^\circ$, which are consistent with the marketed 24 mm f/1.4 lens and Nikon's published 84° angle of view. The closest-focus patent position gives $\beta = -0.179$ and an object distance from the first surface of 112.5 mm; combined with the patent total track of 132.9 mm, this gives a sensor-referenced working distance of approximately 245.4 mm, consistent with Nikon's published 0.25 m minimum focus distance and 0.179× maximum reproduction ratio.

This does not prove that every production melt, air space, coating stack, and mechanical clear aperture is identical to Example 3. It does establish that Example 3 is a production-proximate optical prescription for the AF-S 24 mm f/1.4G ED class, close enough to serve as the patent-grounded model for LensVisualizer.

## Optical Architecture

The lens is a two-group, positive-positive wide-angle system with a long SLR back focal distance. It should not be described as a conventional negative-front retrofocus lens in the group-sign sense: the first group has weak positive power, not negative power. Nevertheless, the optical system is designed to provide an infinity-focus back focal distance of 37.865 mm, or about 1.53× the computed effective focal length, which is the practical requirement imposed by the Nikon F mount mirror box.

The first group, Gr1, is nearly afocal relative to the complete lens. The verified focal length is $f_{Gr1} = +364.89$ mm, giving $f_1/f_L = 14.79$. The patent explicitly constrains this ratio to keep the first group close to afocal, reducing aberration variation when the second group moves during focusing. Gr1 is divided into Gr1A and Gr1B. Gr1A is the front negative converter section, formed by L11 and L12. Gr1B is the rear positive section, formed by the thick weak meniscus L13 and the strong positive L14. The result is a wide-angle converter-like front system that compresses the field angle before the beam enters the rear focusing group.

The second group, Gr2, is the imaging master group and has verified focal length $f_{Gr2} = +43.71$ mm. It is divided by the aperture stop into a positive pre-stop sub-group, Gr2A, and a positive post-stop sub-group, Gr2B. Gr2A begins with a biconcave ED element, L21, whose negative power helps maintain the long back focus while keeping the broader Gr2 layout more symmetric about the aperture stop. Gr2B follows the negative-positive-positive block sequence described in the patent: the L24 cemented block is net negative, L25 is positive and low-dispersion, and L26 is a final positive meniscus.

The distinctive design choice is therefore not merely the use of aspheres or ED glass. It is the combination of a substantially afocal first group with rear focusing of the entire second group. That arrangement reduces focusing mass relative to unit focusing, avoids the mechanical complexity of a multi-group floating system, and keeps the aberration balance of the second group comparatively stable as object distance changes.

## Element-by-Element Analysis

### L11 — Negative Meniscus, Convex to Object

$nd = 1.80610$, $\nu_d = 33.27$. Glass: NBFD15 / J-LASFH6 class, code 806333 dense lanthanum flint. Verified focal length: $f = -64.8$ mm.

L11 is the first, large-diameter negative meniscus. Its front surface is convex to the object and its rear surface is concave to the image side, matching the patent's required first negative element. The high refractive index permits substantial angular compression without requiring still stronger surface curvature. Its relatively low Abbe number places it firmly in the dense flint region, so its chromatic contribution must be balanced downstream rather than treated as a neutral front window.

Optically, L11 starts the wide-angle conversion. It bends oblique bundles inward and establishes the strongly asymmetric front section required for a fast 84° lens covering a 43.2 mm image diagonal. Its meniscus form distributes refraction over two curved surfaces and helps moderate spherical aberration and coma compared with a simple plano-concave element.

### L12 — Negative Meniscus with Rear Asphere

$nd = 1.77250$, $\nu_d = 49.36$. Glass: TAF1 / S-LAH66 / J-LASF016 class, code 773496 dense lanthanum glass. Verified focal length: $f = -91.6$ mm. Surface 4 is aspherical.

L12 is the second negative meniscus in Gr1A. It is weaker than L11 but strategically more important because the rear surface carries the first asphere. The patent states that an aspherical surface on a negative lens in the first group is preferred for distortion correction, and that the image-side surface of the second negative lens is a preferred location because placing the asphere on the first, larger element would be harder to manufacture.

The rear asphere reduces the excessive peripheral negative action that a purely spherical front converter would produce. In the verified data-file semi-diameter of 19.0 mm, surface 4A departs by approximately $-2.50$ mm from the corresponding spherical base surface using the patent's standard-conic conversion. This is a large departure, and it is consistent with the asphere's role as the principal front-group distortion and off-axis correction surface.

### L13 — Thick Weak Negative Meniscus, Concave to Object

$nd = 1.60311$, $\nu_d = 60.69$. Glass: OHARA S-BSM14-class barium crown, code 603607. Verified focal length: $f = -1222.4$ mm.

L13 is a thick, weak meniscus rather than a major power element. Its center thickness is 4.660 mm, but its optical power is nearly zero. This distinction matters: L13 should not be interpreted as a conventional negative lens whose principal job is to diverge the beam. It is mainly a ray-height and aberration-balance element.

The patent's conditional expressions for Example 3 use both the thickness of this element and its weak focal length. The verified values are $T_{13}/f_L = 0.189$ and $f_L/f_{13} = -0.0202$. These values satisfy the patent's preferred ranges and confirm that L13 is intended to adjust the incident height on L14 without making Gr1B strongly negative. A too-thin L13 would not provide enough off-axis ray-height control; a too-strong L13 would worsen distortion or coma depending on the sign of the power.

### L14 — Biconvex Positive Element

$nd = 1.80518$, $\nu_d = 25.46$. Glass: FD60 / S-TIH6 / J-SF6 class, code 805255 dense flint. Verified focal length: $f = +58.0$ mm.

L14 is the strong positive element that completes the wide-converter behavior of Gr1. It reconverges the beam after the two front negative menisci and the thick L13 spacing element. Most of its power comes from the front surface because the rear surface radius is very long by comparison.

The glass is a high-index, high-dispersion dense flint. That choice is not arbitrary. High index allows the strong positive power to be achieved with less curvature than a lower-index crown would require, while the high dispersion participates in the front group's chromatic balancing. The combined Gr1B focal length is verified at $+57.90$ mm, so L14 dominates the power of this rear sub-group.

### L21 — Biconcave Negative ED Element

$nd = 1.49700$, $\nu_d = 81.61$. Glass: OHARA S-FPL51 / HOYA FCD1 class ED fluorophosphate, code 497816. Verified focal length: $f = -88.0$ mm.

L21 is the most object-side element of Gr2A and the first element of the moving rear-focus group. Its biconcave form gives it negative power inside the otherwise positive second group. The patent requires the most object-side lens of the front lens group in Gr2 to satisfy $-4 < f_{21}/f_L < -2.5$; Example 3 gives $f_{21}/f_L = -3.57$, within that range.

Its low dispersion is central. A strong negative element at this position would otherwise introduce substantial longitudinal and lateral color. The S-FPL51/FCD1-class match provides very high Abbe number and positive anomalous partial dispersion. The data file records catalog spectral fields for S-FPL51 as the closest public surrogate for chromatic modeling, while preserving the patent's exact $nd$ and $\nu_d$ values in the prescription.

### L22 — Biconvex Positive Element

$nd = 1.72916$, $\nu_d = 54.67$. Glass: TAC8 / S-LAL18 / J-LAK18 class, code 729547 lanthanum crown. Verified focal length: $f = +34.1$ mm.

L22 is the strongest standalone positive element in the prescription. It supplies the principal convergence in Gr2A and works against the preceding negative L21 to create a pre-stop positive group with a long effective focal length. The high-index lanthanum crown glass keeps both surfaces from becoming excessively steep while retaining moderate dispersion.

This element is one of the main contributors to the master-lens behavior of Gr2. Because it sits before the aperture stop, its aberration contribution is strongly field-dependent; its pairing with L21 and the L23 cemented doublet is therefore central to keeping the sagittal and meridional ray fans controlled across the 21.6 mm image height.

### L23 — Cemented Pre-Stop Achromatizing Doublet

L23 is a cemented doublet immediately before the stop. The data file preserves the patent's explicit 0.010 mm cement layer between the two glasses.

L23a has $nd = 1.60625$, $\nu_d = 63.71$, glass code 606637, and standalone focal length $f \approx +59.6$ mm. It is a low-dispersion positive meniscus component. L23b has $nd = 1.67270$, $\nu_d = 32.17$, glass code 673322, and standalone focal length $f \approx -33.2$ mm. It is a high-dispersion biconcave flint component. The cemented group as a whole has verified focal length $f = -74.56$ mm, matching the patent's tabulated group value.

The doublet is an achromatizing and field-correction element placed just ahead of the aperture stop. Its net negative power is important: although it contains a positive crown component, the flint component dominates the group power. Treating only the first component or using thin-lens approximations gives the wrong impression of the block's role.

### Aperture Stop

The aperture stop is between Gr2A and Gr2B, after surface 16 and before L24. The patent's surface table lists a 6.229 mm air space following the stop toward L24. The verified stop semi-diameter needed to reproduce the patent $FNO = 1.43$ is approximately 13.19 mm, corresponding to an entrance-pupil semi-diameter of approximately 8.63 mm at infinity focus.

The stop position gives Gr2 its quasi-symmetric character. Gr2A and Gr2B are not mirror images, but they are organized around the stop in a way that helps control odd-order aberrations. This matters for a fast wide-angle design because sagittal coma, lateral color, and distortion are otherwise difficult to hold simultaneously.

### L24 — Cemented Net-Negative Rear-Group Block with Rear Asphere

L24 is the first block of Gr2B and is net negative. It consists of a biconcave dense flint component, an explicit 0.010 mm cement medium, and a biconvex dense lanthanum component whose rear surface is aspherical.

L24a has $nd = 1.71736$, $\nu_d = 29.50$, code 717295, and standalone focal length $f \approx -21.0$ mm. L24b has $nd = 1.77250$, $\nu_d = 49.36$, code 773496, and standalone focal length $f \approx +33.2$ mm. The cemented block as a whole has verified focal length $f = -66.96$ mm, matching the patent's tabulated value.

The patent identifies sagittal coma as a central difficulty in a wide-angle lens faster than f/1.9. In the negative-positive-positive Gr2B layout, a strongly curved concave surface on the object side of the first rear block generates significant coma. Surface 21, on the image side of L24b, is placed to counter that behavior. At the verified data-file semi-diameter of 16.2 mm, the full surface including polynomial terms departs by approximately $+1.34$ mm from the corresponding spherical base surface. The polynomial contribution is large and positive at that height, so the surface should be interpreted from the computed departure, not from the conic constant alone.

### L25 — Biconvex Positive Low-Dispersion Element

$nd = 1.59319$, $\nu_d = 67.90$. Glass: J-PSKH1 / FCD515-family abnormal-dispersion phosphate crown, code 593679. Verified focal length: $f = +45.97$ mm.

L25 is the second block of Gr2B and satisfies the patent's chromatic condition $\nu_{d2} > 65$. Nikon publishes two ED glass elements for the production AF-S 24 mm f/1.4G ED; in Example 3, L21 is the clear 497816 ED element and L25 is the other low-dispersion positive element with anomalous-dispersion catalog equivalents. The data file therefore treats L25 as the second ED/anomalous-dispersion element for chromatic modeling, using Hikari J-PSKH1 spectral data as the public catalog surrogate.

The strong positive power of L25 would make it chromatically dangerous if made from ordinary crown glass. Its high Abbe number suppresses the color contribution while preserving the positive power needed in the rear half of the lens.

### L26 — Final Positive Meniscus

$nd = 1.69680$, $\nu_d = 55.46$. Glass: LAC14 / S-LAL14 / J-LAK14 class, code 697555 lanthanum crown. Verified focal length: $f = +106.66$ mm.

L26 is the final refractive element before the image plane. It is a weak positive meniscus with its convex side facing the image. Its role is mainly corrective: it trims field curvature, astigmatism, and exit-side vergence after the stronger rear-group blocks have formed the image.

The infinity-focus back focal distance after L26 is 37.865 mm. During close focusing, this gap increases as Gr2 moves forward, preserving the total mechanical track of the optical system.

## Glass Identification and Selection

The patent does not name proprietary production melts. It gives $nd$ and $\nu_d$ values, so glass identifications must be treated as catalog-class matches rather than proof of exact Nikon production glass. The data file therefore preserves the patent's numerical $nd$ and $\nu_d$ values as authoritative and uses catalog names as transparent dispersion surrogates.

| Element | Patent $nd$ | Patent $\nu_d$ | Corrected catalog-class identification | Optical role |
|---|---:|---:|---|---|
| L11 | 1.80610 | 33.27 | NBFD15 / J-LASFH6 class, 806333 | High-index front negative meniscus |
| L12, L24b | 1.77250 | 49.36 | TAF1 / S-LAH66 / J-LASF016 class, 773496 | Dense lanthanum glass for negative/aspheric correction blocks |
| L13 | 1.60311 | 60.69 | OHARA S-BSM14 class, 603607 | Thick weak ray-height adjuster |
| L14 | 1.80518 | 25.46 | FD60 / S-TIH6 / J-SF6 class, 805255 | Strong positive dense flint in Gr1B |
| L21 | 1.49700 | 81.61 | OHARA S-FPL51 / HOYA FCD1 class, 497816 | ED negative element at front of Gr2 |
| L22 | 1.72916 | 54.67 | TAC8 / S-LAL18 / J-LAK18 class, 729547 | Main positive Gr2A power element |
| L23a | 1.60625 | 63.71 | LBC3N class, 606637 | Low-dispersion positive component of L23 |
| L23b | 1.67270 | 32.17 | E-FD5 / S-TIM25 / J-SF5 class, 673322 | High-dispersion negative component of L23 |
| L24a | 1.71736 | 29.50 | E-FD1L / S-TIH1 / J-SF1 class, 717295 | Strong negative first component of L24 |
| L25 | 1.59319 | 67.90 | J-PSKH1 / FCD515 family, 593679 | Positive low-dispersion second block of Gr2B |
| L26 | 1.69680 | 55.46 | LAC14 / S-LAL14 / J-LAK14 class, 697555 | Final weak positive field-correction meniscus |

The important correction is that several earlier OHARA labels are too specific or simply wrong for the stored $nd/\nu_d$ pairs. In particular, the 806333 L11 glass is not S-TIH10; the 773496 glass used by L12 and L24b is not S-LAH51; L24a is a 717295 dense flint rather than the 717/295 glass previously assigned as S-TIM25; and L26 is an S-LAL14/LAC14-class glass rather than S-LAL59. These corrections affect the explanatory glass palette and any chromatic modeling that resolves vendor names to Sellmeier data.

## Focus Mechanism

The patent uses rear focusing. Gr1 is fixed. The complete Gr2 assembly, including L21 through L26 and the aperture stop, moves toward the object as focus shifts from infinity to close range. The two changing air spaces are the Gr1-Gr2 separation after surface 8 and the final back focal distance after surface 25.

| Parameter | POS1, infinity | POS2, intermediate | POS3, closest patent position |
|---|---:|---:|---:|
| Object distance from first surface $d_0$ | $\infty$ | 717.21 mm | 112.50 mm |
| Magnification $\beta$ | 0.000 | -0.033 | -0.179 |
| Gr1-Gr2 gap $d_8$ | 4.971 mm | 4.145 mm | 0.561 mm |
| Back focal distance | 37.865 mm | 38.690 mm | 42.274 mm |
| Total track | 132.90 mm | 132.90 mm | 132.90 mm |

The Gr2 travel from infinity to the closest patent position is 4.410 mm toward the object. The corresponding increase in back focal distance is 4.409 mm, with the small difference attributable to tabular rounding. The optical total track is therefore constant across the patent's focus positions.

The sensor-referenced closest focus distance is $112.5 + 132.9 = 245.4$ mm. Nikon publishes a 0.25 m minimum focus distance and 0.179× maximum reproduction ratio for the production lens, which matches the patent position after normal specification rounding.

## Aspherical Surfaces

The patent defines its aspherical sag by

$$
Z(h)=\frac{c h^2}{1+\sqrt{1-\varepsilon c^2 h^2}}+\sum_j A_j h^j,
$$

where $c=1/R$. In LensVisualizer's standard conic convention, $1+K=\varepsilon$, so $K=\varepsilon-1$. The data file uses the standard $K$ values below.

### Surface 4A — Rear Surface of L12

| Term | Value |
|---|---:|
| Base radius | 21.180 mm |
| Patent $\varepsilon$ | 0.4101 |
| Standard $K$ | -0.5899 |
| A4 | $+2.4978400 \times 10^{-6}$ |
| A6 | $-2.9453434 \times 10^{-8}$ |
| A8 | $+2.5768918 \times 10^{-10}$ |
| A10 | $-1.4009078 \times 10^{-12}$ |
| A12 | $+4.3225532 \times 10^{-15}$ |
| A14 | $-7.2151872 \times 10^{-18}$ |
| A16 | $+4.9023334 \times 10^{-21}$ |

Surface 4A is the primary front-group asphere. Its computed departure at the data-file semi-diameter of 19.0 mm is approximately $-2.50$ mm relative to the spherical base surface. The sign and magnitude confirm that this is not a cosmetic or weak manufacturing correction. It is a major distortion and off-axis aberration control surface in the front converter.

### Surface 21A — Rear Surface of L24b

| Term | Value |
|---|---:|
| Base radius | -54.645 mm |
| Patent $\varepsilon$ | 2.4546 |
| Standard $K$ | +1.4546 |
| A4 | $+1.8775703 \times 10^{-5}$ |
| A6 | $+8.1063935 \times 10^{-9}$ |
| A8 | $+5.2993933 \times 10^{-11}$ |
| A10 | $-2.7772358 \times 10^{-13}$ |
| A12 | $-1.7561293 \times 10^{-16}$ |
| A14 | $+2.9552390 \times 10^{-18}$ |
| A16 | $-4.8207586 \times 10^{-21}$ |

Surface 21A is the rear-group coma-control asphere. Its conic constant alone is not enough to describe the peripheral shape, because the polynomial contribution is large. At the data-file semi-diameter of 16.2 mm, the full surface is approximately $+1.34$ mm relative to the spherical base surface. This correction is placed after the strong L24a negative component, exactly where the patent describes the need to suppress sagittal coma from the first negative block in Gr2B.

## Conditional Expressions

All seven patent conditions for Example 3 were rechecked from the prescription using a paraxial $y,\nu$ trace with the explicit cement layers retained.

| Condition | Verified value | Patent table value | Status |
|---|---:|---:|---|
| (1) $f_1/f_L$ | 14.79 | 14.8 | Satisfied |
| (2) $T/f_L$ | 1.017 | 1.02 | Satisfied |
| (3) $f_{21}/f_L$ | -3.566 | -3.6 | Satisfied |
| (4) $\nu_{d2}$ | 67.90 | 67.9 | Satisfied |
| (5) $T_{13}/f_L$ | 0.189 | 0.19 | Satisfied |
| (6) $f_L/f_{13}$ | -0.0202 | -0.020 | Satisfied |
| (7) $f_L/f_2$ | 0.5648 | 0.56 | Satisfied |

Condition (6) is especially sensitive to method. It should use the thick-lens focal length of L13, not a thin-lens approximation, because L13 is a thick, nearly afocal meniscus. The verified thick-lens value is approximately $-1222.4$ mm.

## Verification Summary

The prescription was independently re-run using an ABCD / $y,\nu$ paraxial trace. The trace uses the patent's explicit cement layers rather than folding them into adjacent glasses.

| Quantity | Verified value | Patent value | Comment |
|---|---:|---:|---|
| Effective focal length | 24.6765 mm | 24.68 mm | Matches after rounding |
| Infinity BFD | 37.8651 mm | 37.865 mm | Matches |
| $f_{Gr1}$ | 364.89 mm | 364.8 mm | Matches |
| $f_{Gr2}$ | 43.7106 mm | 43.71 mm | Matches |
| $f_{Gr1A}$ | -35.978 mm | -36.0 mm | Matches |
| $f_{Gr1B}$ | 57.903 mm | 57.9 mm | Matches |
| $f_{Gr2A}$ | 136.051 mm | 136.1 mm | Matches |
| $f_{Gr2B}$ | 47.185 mm | 47.2 mm | Matches |
| L23 cemented-group focal length | -74.560 mm | -74.56 mm | Matches |
| L24 cemented-group focal length | -66.962 mm | -66.961 mm | Matches |
| Closest magnification | -0.1791 | -0.179 | Matches |
| Sensor-referenced MFD | 245.4 mm | Nikon 0.25 m | Matches after specification rounding |

The Petzval sum was also recalculated surface by surface as $\sum \Phi/(n n')$. The verified value is approximately $+0.00398\ \mathrm{mm}^{-1}$, corresponding to a Petzval radius magnitude of about 251 mm under the sign convention used by the trace. This replaces any element-level Petzval approximation, which is not appropriate for this prescription.

## Sources

1. US Patent 8,416,512 B2, Harada and Yamamoto, “Wide-Angle Lens, Imaging Optical Apparatus and Digital Equipment,” assigned to Nikon Corporation, Example 3 and Tables 1–2. Google Patents: https://patents.google.com/patent/US8416512B2/en
2. Nikon USA, “AF-S NIKKOR 24mm f/1.4G ED” official product page and specifications. https://www.nikonusa.com/p/af-s-nikkor-24mm-f14g-ed/2184
3. HOYA Group Optics Division, “Glass Cross Reference Index,” used for six-digit glass-code cross-references among HOYA, SCHOTT, OHARA, HIKARI, SUMITA, and CDGM. https://www.hoya-opticalworld.com/english/products/crossreference.html
4. OHARA Corporation, S-FPL51 and S-BSM14 optical glass data sheets and catalog pages, used for ED and barium-crown spectral checks. https://oharacorp.com/glass/s-fpl51/ and https://oharacorp.com/glass/s-bsm14/
5. Hikari Glass / Nikon, J-PSKH1, J-LAK14, and related optical glass data sheets, used as public catalog surrogates for Hikari-class glass-code matches.
