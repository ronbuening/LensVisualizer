# Sony E 30mm F3.5 Macro (SEL30M35) - Optical Analysis

## 1. Patent Reference and Design Identification

**Patent:** JP 2012-159613 A  
**Application Number:** P2011-18196  
**Filed:** 31 January 2011  
**Published:** 23 August 2012  
**Inventors:** Sakai Takahiko (Tamron) and Hosoi Masaharu (Sony)  
**Applicants:** Sony Corporation and Tamron Co., Ltd.  
**Title:** Inner-focus lens (インナーフォーカス式レンズ)  
**Embodiment analyzed:** Example 1 (第1実施例), Fig. 1 and paragraphs 0048-0062.

JP 2012-159613 A describes a compact inner-focus lens formed from a positive first group, a negative second group, and a positive third group. During focusing, only the negative second group moves; the first and third groups remain fixed. The patent frames this structure as a way to combine a wide field, compact barrel, and low focus-group mass for video cameras and electronic still cameras.

Example 1 corresponds closely to the Sony E 30mm F3.5 Macro (SEL30M35). The identification rests on convergent evidence rather than on a single public product-to-patent statement:

1. **Focal length and format.** The patent gives f = 29.1 mm at infinity, image height Y = 14.20 mm, and a 35 mm-equivalent focal length of 45 mm for the numerical examples. Sony specifies the production lens as a 30 mm APS-C E-mount lens with 45 mm equivalent focal length.
2. **Aperture and field.** The patent gives Fno = 3.60 and 2ω = 48.9° for Example 1. Sony specifies f/3.5 and 50° angle of view. The differences are ordinary production/marketing rounding.
3. **Construction.** The patent prescription is seven photographic elements in six air-separated groups if the two hybrid resin caps are counted as part of their host lenses. Sony specifies 7 elements in 6 groups.
4. **Special elements.** Example 1 contains one ED element, L114, and three aspherical elements in production-count terms: L111, L115, and L121. Because L115 is aspherical on both faces, the prescription contains four aspherical surfaces. Sony describes aspherical lens elements and ED glass.
5. **Focus mechanism.** The patent's focus group is the single negative G12/L121 hybrid element; G11 and G13 are fixed. Sony specifies internal focusing.
6. **Macro endpoint.** The patent's closest-focus spacing, D11 = 7.57 mm and D14 = 6.36 mm, gives a finite-conjugate magnification of |m| = 0.991 in independent paraxial trace. The object distance from the front vertex is 23.56 mm and the total object-to-image distance is 94.86 mm, matching Sony's 2.4 cm working-distance and 0.095 m minimum-focus specifications within rounding.

Examples 2 and 3 are related alternatives. Example 2 uses an aspherical front face on the first element rather than the hybrid L111 arrangement of Example 1; Example 3 changes the glass palette more substantially. Example 1 is the embodiment transcribed here because it is the closest match to the production lens's 7-element / 6-group, one-ED, three-aspherical-element structure.

## 2. Optical Architecture

The design is a compact positive-negative-positive inner-focus macro lens for APS-C. It is not a retrofocus lens in the strict sense: the infinity-focus rear vertex-to-image spacing is 27.30 mm while the Gaussian focal length is 29.108 mm, so BFD/EFL = 0.94. It is also not a telephoto lens: the front-vertex-to-image distance at infinity is 71.31 mm, so TL/EFL = 2.45.

The first group, G11, contains the aperture stop and performs most of the imaging work. It is divided into a negative first sub-group, G11F, followed by a positive second sub-group, G11R. G11F contains the hybrid negative meniscus L111 and the dense-flint positive L112. G11R contains the cemented L113-L114 achromat and the high-power double-aspheric positive L115. Independent paraxial trace gives G11 an effective focal length of +12.712 mm, matching the patent value f1 = 12.7 mm.

G12 is a single negative hybrid element, L121, with f = -18.386 mm. It is the only moving focus group. It moves rearward as the object distance shortens, increasing D11 and decreasing D14 while preserving nearly constant overall optical length.

G13 is a fixed positive rear element, L131, with f = +49.296 mm. It is sometimes tempting to call such a rear element a field flattener, but the term is not precise here. L131 is a positive relay/converging element; its Petzval contribution is positive, not field-flattening. Its more defensible role is to converge the focus-modulated beam from G12 to the fixed image plane and to help balance off-axis color and distortion in the rear cone.

## 3. Element-by-Element Analysis

### L111 - Negative Meniscus Hybrid Asphere

nd = 1.61800, νd = 63.4. Glass: OHARA S-PHM52. f = -14.62 mm for the complete glass-plus-resin hybrid element.

L111 is the front negative meniscus, convex toward the object side, specified by the patent as the leading element of the negative G11F sub-group. Its job is to widen the entrance bundle while keeping the front diameter small. The patent explicitly calls for a negative meniscus in this position and states that the image-side asphere is shaped so that negative refractive power weakens gradually from the optical-axis center toward the periphery.

The surface data show a glass body of nd = 1.61800 and νd = 63.4, matching OHARA S-PHM52. This is a high-index, low-dispersion phosphate crown. Its elevated index lets the front meniscus carry strong negative bending without using an excessively small front radius.

The image-side resin cap has nd = 1.53610 and νd = 41.2. It is thin, only 0.20 mm on axis, and is best treated as a mechanical aspheric carrier rather than as a separate power element. The aspheric departure on surface 3A is the dominant distortion-control surface in the design. Solving the polynomial departure for the patent's |asp1nr| = 0.20 mm gives h = 5.121 mm; at the inferred data-file semi-diameter h = 6.0 mm, the polynomial departure is -0.458 mm.

### L112 - Positive Dense-Flint Collector

nd = 1.64769, νd = 33.8. Glass: OHARA S-TIM22. f = +20.50 mm.

L112 is a biconvex positive lens after the front negative meniscus and before the aperture stop. It collects part of the divergence introduced by L111 and helps set the ray height distribution through the stop. Its dense-flint glass deliberately introduces dispersion into the front sub-group. That dispersion is then balanced downstream by the L113-L114 cemented achromat.

### L113 - Negative Flint Half of Cemented Achromat

nd = 1.75520, νd = 27.5. Glass: OHARA S-TIH4. f = -21.72 mm as a standalone element in air.

L113 is the negative, high-index flint component of the cemented doublet in G11R. The front radius, R7 = -700 mm, is effectively plano at the apertures used here; the cemented interface R8 = +16.807 mm carries the meaningful curvature. The element is therefore best described as nearly plano-concave, with the concavity on the cemented side.

The low Abbe number makes L113 the dispersion source of the achromat. It is paired with the high-Abbe ED crown L114 to reduce primary axial color in the high-power positive group region immediately after the stop.

### L114 - Positive ED Half of Cemented Achromat

nd = 1.49700, νd = 81.6. Glass: OHARA S-FPL51 / HOYA FCD1 class. f = +25.69 mm as a standalone element in air.

L114 is the single advertised ED element in the production lens. The pair L113-L114 is only weakly negative as a cemented doublet when treated in air, with f ≈ -161 mm, because the individual negative and positive powers nearly cancel. Its principal purpose is therefore not to supply net system power, but to absorb chromatic residuals generated by the surrounding high-power elements.

The Abbe-number separation between L113 and L114 is large: νd = 27.5 versus 81.6. That gives the cemented group strong chromatic leverage while keeping the number of separate air-glass surfaces low.

### L115 - Positive Double-Aspheric Glass-Molded Element

nd = 1.59201, νd = 67.0. Glass: HOYA M-PCD51, precision-molding low-dispersion phosphate crown. f = +14.94 mm.

L115 is the strongest positive element in the system. It follows the cemented achromat and sits in the post-stop converging part of G11R. It is biconvex, with both surfaces aspherical. Its power and placement make it the main spherical-aberration and coma-control element of the design.

The prior draft treated the glass as unmatched. That was too conservative. The nd/νd pair 1.59201/67.02 is an exact HOYA M-PCD51 catalog match. The M-prefix is significant: this is a precision-molding glass, which is consistent with a small positive element carrying two aspherical surfaces.

At the inferred clear semi-diameter h = 7.7 mm, the front-surface polynomial departure on 10A is -0.0347 mm and the rear-surface polynomial departure on 11A is +0.3617 mm. The rear surface therefore carries a stronger high-order correction than a casual reading at smaller semi-diameters would suggest.

### L121 - Single Moving Negative Hybrid Focus Element

nd = 1.48749, νd = 70.4. Glass: OHARA S-FSL5 / Schott N-FK5 class. f = -18.39 mm for the complete glass-plus-resin hybrid element.

L121 is the complete G12 focus group. It is a biconcave negative lens with a thin image-side resin aspheric cap. The patent states that the second group moves from the object side toward the image side during focusing, while G11 and G13 remain fixed. Example 1 implements that statement with D11 increasing from 1.51 mm to 7.57 mm and D14 decreasing from 12.43 mm to 6.36 mm.

The glass body is low-dispersion fluorine crown. It is not the production lens's advertised ED element; that role belongs to L114. Its high νd is still useful because this element moves substantially through focus. A high-dispersion focus element would vary chromatic balance more strongly with conjugate distance.

Surface 14A, the rear resin-air surface, is the focus-group asphere. At the inferred semi-diameter h = 7.5 mm, its polynomial departure is -0.312 mm. This is large enough to matter for off-axis aberration stability at macro distances.

### L131 - Fixed Rear Positive Relay Element

nd = 1.53172, νd = 48.8. Glass: OHARA S-TIL6 / Schott N-LLF6 / HOYA E-FEL6 class. f = +49.30 mm.

L131 is a fixed biconvex positive lens behind the moving negative focus group. It receives a beam whose vergence has been changed by G12 and converges it to the fixed image plane. Because the lens must support a 14.20 mm image height, the data-file semi-diameter is set larger than the paraxial 0.6-field drawing bundle would require.

The prior draft identified this element as S-TIL27 / LLF6 class. That was incorrect. The patent values nd = 1.53172 and νd = 48.8 match OHARA S-TIL6, not S-TIL27. OHARA's cross-reference table places S-TIL6 in the same code row as HOYA E-FEL6; Schott N-LLF6 is the conventional class reference for this region of the map.

## 4. Glass Identification and Selection

| Modeled medium | nd | νd | Identification | Function |
|---|---:|---:|---|---|
| L111 glass | 1.61800 | 63.4 | OHARA S-PHM52 | High-index low-dispersion crown for compact negative front meniscus |
| L111 resin | 1.53610 | 41.2 | UV-curable optical resin | Thin hybrid-asphere carrier |
| L112 | 1.64769 | 33.8 | OHARA S-TIM22 | Dense-flint positive collector before the stop |
| L113 | 1.75520 | 27.5 | OHARA S-TIH4 | Negative flint half of cemented achromat |
| L114 | 1.49700 | 81.6 | OHARA S-FPL51 / HOYA FCD1 class | Single advertised ED element |
| L115 | 1.59201 | 67.0 | HOYA M-PCD51 | Moldable low-dispersion phosphate crown; double-aspheric main positive element |
| L121 glass | 1.48749 | 70.4 | OHARA S-FSL5 / Schott N-FK5 class | Low-dispersion moving negative focus element |
| L121 resin | 1.53610 | 41.2 | UV-curable optical resin | Thin hybrid-asphere carrier |
| L131 | 1.53172 | 48.8 | OHARA S-TIL6 / N-LLF6 / E-FEL6 class | Fixed positive rear relay; lateral-color balancing |

The design uses only one classical ED element, L114. L121 is a low-dispersion fluorine crown but is not counted as the advertised ED element in the production specification. This distinction matters: the chromatic correction strategy is a conventional dense-flint / high-Abbe-crown cemented achromat in G11R, supplemented by low-dispersion choices in the moving focus group and rear relay.

The glass-identification corrections made during re-review are concentrated in L115 and L131. L115 is not unmatched; it is an exact HOYA M-PCD51 property match. L131 is not S-TIL27; it is S-TIL6-class glass.

## 5. Focus Mechanism

The lens is an internal-focus design. G12, the single negative L121 hybrid element, moves rearward as focus shortens. G11 and G13 remain fixed. The focus travel between the patent's infinity and closest-focus settings is 6.06 mm by D11 increase, and 6.07 mm by D14 decrease; the 0.01 mm difference is patent rounding.

| Quantity | Infinity | Closest focus |
|---|---:|---:|
| D11, L115 to L121 | 1.51 mm | 7.57 mm |
| D14, L121 to L131 | 12.43 mm | 6.36 mm |
| D11 + D14 | 13.94 mm | 13.93 mm |
| Rear vertex to image plane | 27.30 mm | 27.30 mm |
| Patent configurational focal length | 29.1 mm | 20.6 mm |
| Patent Fno | 3.60 | 4.23 |
| Patent \|β2mod\| for G12 | not stated | 2.0 |
| Computed system |m| | approximately 0 | 0.991 |

The close-focus fB value in the patent table is the fixed last-surface-to-sensor spacing, not the Gaussian back focal length of the close-focus element configuration if it were aimed at infinity. An independent Gaussian calculation of the frozen close-focus configuration gives EFL = 20.613 mm and an infinity-focus BFL of 6.871 mm. In macro use, however, the object is finite; the correct verification is the finite-conjugate trace, which places the object 23.56 mm in front of the first vertex and gives total object-to-image distance 94.86 mm.

## 6. Aspherical Surfaces

Example 1 contains four aspherical surfaces. The patent's equation is the standard even-order form:

$$
Z(h)=\frac{c h^2}{1+\sqrt{1-(1+k)c^2h^2}}+A_4h^4+A_6h^6+A_8h^8+A_{10}h^{10}
$$

where c = 1/R. The patent names k as the conic coefficient. In Example 1 all four k values are zero, so the conic base curves are spherical in the ordinary K = 0 convention.

| Surface | Element | K | A4 | A6 | A8 | A10 |
|---|---|---:|---:|---:|---:|---:|
| 3A | L111 resin rear | 0 | -1.8909e-4 | -2.4100e-6 | -4.4700e-8 | -4.2700e-10 |
| 10A | L115 front | 0 | -5.7937e-5 | +1.0969e-6 | -2.7388e-8 | +3.8051e-10 |
| 11A | L115 rear | 0 | +5.1068e-5 | +1.2754e-6 | -3.1751e-8 | +4.2140e-10 |
| 14A | L121 resin rear | 0 | -6.9421e-5 | -3.4378e-7 | -6.9182e-9 | +6.8268e-11 |

Surfaces 3A and 14A are hybrid/composite resin aspheres on glass hosts. Surface 3A is the main distortion-correction surface associated with the front negative meniscus. Surface 14A stabilizes aberrations as the single negative focus element translates. Surfaces 10A and 11A are molded-glass aspheres on L115. Their opposite fourth-order signs and shared location immediately behind the stop give L115 a large share of spherical-aberration and coma correction.

## 7. Conditional Expressions

The patent states five conditions, and Example 1 satisfies all five, including the tighter ranges disclosed in the detailed description.

| # | Expression | Patent Example 1 value | Status |
|---|---|---:|---|
| 1 | f1 / f | 12.7 / 29.1 = 0.436 | Within 0.31-0.58 and the tighter 0.40-0.49 range |
| 2 | \|asp1nr\| / f | 0.20 / 29.1 = 0.00687 | Within 0.0047-0.0088 and the tighter 0.0061-0.0074 range |
| 3 | LR1S / LG1 | 11.48 / 25.25 = 0.455 | Within 0.31-0.57 and the tighter 0.40-0.49 range |
| 4 | \|β2mod\| | 2.0 | Within 1.4-2.5 and the tighter 1.8-2.1 range |
| 5 | f2 / f | -18.3 / 29.1 = -0.629 | Within -0.83 to -0.44 and the tighter -0.70 to -0.57 range |

Condition (2) is not a generic statement about the whole clear aperture of the first asphere. It is based on the patent's stated |asp1nr| = 0.20 mm. In the transcribed polynomial, that departure occurs at h = 5.121 mm.

## 8. Verification Summary

All numerical checks below were run independently from the patent prescription using a y-nu paraxial trace and a finite-conjugate close-focus trace.

| Quantity | Independent result | Patent / production reference |
|---|---:|---:|
| Infinity EFL | 29.108 mm | Patent f = 29.1 mm |
| Frozen close-configuration EFL | 20.613 mm | Patent f = 20.6 mm |
| Infinity Gaussian BFL | 27.320 mm | Patent fB = 27.30 mm |
| G11 focal length | +12.712 mm | Patent f1 = +12.7 mm |
| G12 focal length | -18.386 mm | Patent f2 = -18.3 mm |
| G13 focal length | +49.296 mm | Not separately published |
| Close-focus finite-conjugate magnification | \|m\| = 0.991 | Sony 1.0x maximum magnification |
| Close-focus object distance from first vertex | 23.56 mm | Sony 2.4 cm working distance |
| Close-focus object-to-image distance | 94.86 mm | Sony 0.095 m minimum focus distance |
| Patent f/3.60 physical stop semi-diameter | 5.168 mm | Derived from EFL and entrance pupil trace |
| Petzval sum | +0.008390 mm^-1 | Derived surface-by-surface |
| Petzval sum × EFL | +0.244 | Derived surface-by-surface |

The data-file semi-diameters were also checked for renderability. The minimum computed rim edge thickness among the modeled elements is 0.541 mm at L115; L131 is close at 0.583 mm. The tightest cross-gap condition is the surface 3A to surface 4 air gap, where signed sag intrusion is 2.543 mm in a 3.000 mm gap, or 84.8% of the gap. This remains below the 90% renderer policy used for the project.

No patent prescription inconsistency was found in Example 1. The corrections needed were in the prior analysis: the L115 glass identification, the L131 glass identification, the interpretation of close-focus fB, and the way aspheric departures were tied to semi-diameter.

## 9. Sources and References

**Primary patent:** JP 2012-159613 A, Sony Corporation and Tamron Co., Ltd., "Inner-focus lens," filed 31 January 2011 and published 23 August 2012. Example 1 is the transcribed prescription.

**Production lens specifications:** Sony SEL30M35 official specifications and feature pages: 30 mm APS-C E-mount, 45 mm equivalent focal length, 6 groups / 7 elements, 50° angle of view, f/3.5 maximum aperture, f/22 minimum aperture, 7 aperture blades, 0.095 m minimum focus distance, 1.0x maximum magnification, 49 mm filter thread, 2.4 cm working distance, internal focusing, aspherical elements, and ED glass.

**Glass catalog references:** OHARA S-PHM52, S-TIM22, S-TIH4, S-FPL51, S-FSL5, and S-TIL6 catalog data; OHARA cross-reference table for S-FPL51/FCD1, S-FSL5/N-FK5, and S-TIL6/E-FEL6; HOYA M-PCD51 catalog data for nd = 1.59201 and νd = 67.02.

**Verification method:** Independent paraxial ABCD/y-nu trace of the patent surface prescription; finite-conjugate object-distance solve at the patent closest-focus spacing; aspheric polynomial evaluation using the patent's k and A4-A10 coefficients; surface-by-surface Petzval computation using φ/(n n').
