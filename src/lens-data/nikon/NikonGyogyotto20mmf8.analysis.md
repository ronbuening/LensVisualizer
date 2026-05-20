# Nikon Gyogyotto 20mm f/8 — Optical Analysis

## Patent Reference and Design Identification

**Patent:** US 5,949,588  
**Title:** Wide Angle Lens  
**Filed:** January 20, 1998; continuation-in-part of U.S. Ser. No. 08/658,460 filed June 5, 1996  
**Priority date:** July 7, 1995 (JP 7-195923, added by certificate of correction)  
**Granted:** September 7, 1999  
**Inventors:** Koichi Ohshita; Atsushi Shibayama  
**Assignee:** Nikon Corporation  
**Embodiment analyzed:** Eighth embodiment, Table 8  
**Worked examples in patent:** 11  

The patent discloses a low-cost super-wide-angle / fisheye-type lens made from only three glass elements: a plano-concave first negative lens, a thick negative meniscus second lens, and a positive third lens. The second and third lenses are cemented in the disclosed examples. This is the same structural family described by Koichi Ohshita in Nikon's _NIKKOR — The Thousand and One Nights_ account of the Gyogyotto 20: a strong plano-concave front element, an unusually thick meniscus corrector, and a final convex imaging element joined into a two-group three-element structure.

Table 8 is retained as the working prescription because it is the patent example with the widest stated field angle, $2\omega = 164.0^\circ$, while retaining the production-relevant three-element/two-group construction, fixed f/8-class aperture, and low-cost all-spherical design. It should not be treated as a proof that the production lens used Table 8 without mechanical changes. Nikon's first-party retrospective gives the production design concept and 1995 release context but does not identify a patent table number. The data file therefore models Table 8 as the closest patent-grounded proxy, not as a factory service drawing.

One correction made during re-review is important: the earlier draft converted the $164^\circ$ field using an equisolid formula and inferred a 52.5 mm image circle. That is not supported by the patent sheets. The patent's own Example 8 aberration chart is labeled at $Y = 110$ in the normalized $f = 100$ system. Scaling Table 8 to a 20 mm production focal length gives a semi-image height of $110 \times 0.20 = 22.0$ mm, or an approximately 44 mm image circle. This is much closer to published secondary references for the Gyogyotto 20 than the prior 52.5 mm calculation. The patent also states that distortion is plotted relative to $y = 2f\sin(\omega/2)$; it does not state that the lens exactly follows that projection.

## Optical Architecture

The design is a divergent-front, convergent-rear fisheye-type system. It has three elements in two air-spaced groups:

| Group | Elements | Role |
|---|---:|---|
| G1 | L1 | Strong negative field-compression element; generates the fisheye barrel projection and reduces the incident field angle presented to the rear group. |
| G2 | L2 + L3 | Cemented aberration-correcting and image-forming group. L2 is a thick negative meniscus; L3 is the only positive lens in the system. |

The front element is a plano-concave negative lens. The rear group is a cemented positive assembly in which a high-index/high-dispersion negative meniscus is bonded to a lower-dispersion positive element. The design is therefore not a telephoto lens. At the production scale used here, the optical track from the first surface vertex to the image plane is approximately 110.21 mm, or $5.51\times$ the 20 mm focal length. The back focal distance from the rear refracting surface to the image plane is approximately 39.57 mm, or $1.98\times$ EFL.

The patent states that no aperture stop is included in the numerical embodiments, but that an aperture stop may be placed just behind the third positive lens on the image side. The data file follows that instruction by inserting a flat `STO` surface 0.5 mm behind L3. This is a rendering/modeling surface only; it does not alter the paraxial power because it sits in air.

## Element-by-Element Analysis

Linear dimensions in this section are production-scale values obtained by multiplying the patent's normalized Table 8 values by 0.20. Refractive indices and Abbe numbers are unchanged.

### L1 — Plano-Concave Negative Field Lens

nd = 1.62041, νd = 60.14. Glass: N-SK16 / S-BSM16 class barium dense crown, patent value retained. f = −32.77 mm.

L1 has a flat object-side surface and a concave image-side surface with $R_2 = +20.3317$ mm at production scale. The patent assigns this element the primary function of generating large negative distortion, converting very oblique incident light into a smaller-angle emerging bundle, and guiding that bundle toward L2.

The front surface is effectively plane, satisfying the patent's requirement that $r_2/r_1$ be near zero. Using a moderately high-index crown glass reduces the rear surface curvature required for the same negative power. The Abbe number is also high enough to keep the front element's lateral-color contribution within the range that the rear high-dispersion meniscus can correct.

L1's standalone in-air focal length is negative and considerably shorter than the system focal length in magnitude. This is expected: it is not merely a weak field lens, but the element that makes the simplified fisheye architecture possible.

### L2 — Thick Negative Meniscus Corrector

nd = 1.80518, νd = 25.35. Glass: N-SF6 / S-TIH6 class dense flint, patent value retained. f = −45.50 mm standalone in air.

L2 is the central correction element in the design. It is a thick negative meniscus with both radii positive, $R_3 = +22.0347$ mm and $R_4 = +9.8628$ mm after scaling. Its production-scale center thickness is 13.9902 mm, four times the 3.5067 mm thickness of L3.

The object-side surface of L2 is used for off-axis correction. The patent states that magnification chromatic aberration generated by the first negative lens can be offset by the converging action of L2's object-side surface. Because L2 is a high-dispersion flint, this surface has enough chromatic leverage to counter the lateral color introduced by L1.

The image-side surface of L2 is the cemented junction with L3. At this boundary, the index drops from 1.80518 to 1.67025, giving the interface a strong diverging action. The patent identifies this interface as the correction mechanism for the negative spherical aberration and on-axis chromatic aberration generated by the positive L3.

The thickness of L2 is not incidental. The patent explicitly treats the object-side and image-side surfaces of L2 as having different correction jobs. If the meniscus is too thin, the functions are not sufficiently separated; if it is too thick, the whole system grows and the balance between on-axis and off-axis aberration correction is lost. Example 8 gives $d_3/f = 0.6995$, comfortably inside the specified $0.4 < d_3/f < 1.0$ range.

### L3 — Biconvex Positive Image-Forming Lens

nd = 1.67025, νd = 57.53. Glass: Unmatched Nikon patent glass, code 670/575; no current public OHARA or SCHOTT catalog match found within the project tolerance. f = +13.34 mm standalone in air.

L3 is the only positive element in the optical system. It is biconvex, with the stronger surface at the cemented L2/L3 interface and a much weaker rear surface, $R_5 = -82.2908$ mm after scaling. The patent describes L3 as the lens that forms the final image from the virtual image produced by L1 and L2.

The element's low dispersion relative to L2 allows the cemented interface to act as a compact achromatizing and spherical-aberration-correcting boundary. In isolation L3 is far too powerful to be used uncorrected in this role; the thick L2 meniscus is what makes the simple positive rear element workable over the fisheye-class field.

The cemented L2+L3 group has a computed in-air focal length of +31.14 mm at production scale. The nearly equal magnitude of L1 and L23 powers is one of the reasons the Petzval sum remains small despite the extreme field angle.

## Glass Identification and Selection

The patent gives refractive index and Abbe number but no glass names. Current manufacturer catalogs support class-level identifications for L1 and L2, but not a clean catalog name for L3.

| Element | Patent nd | Patent νd | 6-digit code | Catalog assessment | Data-file glass label |
|---|---:|---:|---:|---|---|
| L1 | 1.62041 | 60.14 | 620/601 | SCHOTT N-SK16 and OHARA S-BSM16 share the same nd but modern catalog νd is about 60.3, slightly higher than the patent value. | `N-SK16 / S-BSM16 class (620/601)` |
| L2 | 1.80518 | 25.35 | 805/254 | SCHOTT N-SF6 is an especially close match; OHARA S-TIH6 is the Japanese equivalent class with the same nd and very close νd. | `N-SF6 / S-TIH6 class (805/254)` |
| L3 | 1.67025 | 57.53 | 670/575 | No current OHARA or SCHOTT catalog glass located within the normal Δnd ≤ 0.005 tolerance. Prior draft's S-LAL12 / LaK12 suggestion was too far away in nd. | `Unmatched (Nikon patent glass, code 670/575)` |

The most important material relationship is not the individual catalog name of L3 but the L2/L3 pair. Example 8 gives $n_2 - n_3 = 0.13493$, satisfying the patent's $n_2 - n_3 > 0.08$ requirement. The chromatic material condition

$$\frac{\nu_2\nu_3(n_2-n_3)}{\nu_3-\nu_2} = 6.115$$

also falls within the patent's specified 4–12 range. This confirms that the dense-flint/medium-Abbe positive-glass pairing is deliberate rather than incidental.

## Focus Mechanism

The patent says the optical system can be focused either by extending the lens as a whole or by moving only the first negative lens L1. It does not publish a numerical close-focus spacing table.

The production Gyogyotto 20, however, is treated here as a fixed-focus lens. Nikon's retrospective sample discussion warns that close subjects will not be sharply focused and advises maintaining at least one meter from the subject. The data file therefore uses an empty `var` object and `closeFocusM: 1.0`. This avoids inventing a unit-focus or L1-only travel table that the patent does not provide.

For context only, a 20 mm lens at f/8 focused near the hyperfocal distance on 35 mm format has a hyperfocal distance of approximately

$$H = \frac{f^2}{Nc} = \frac{20^2}{8\cdot0.03} = 1667\text{ mm}.$$

That depth-of-field argument explains the production fixed-focus decision, but it is not a mechanical focusing prescription.

## Aspherical Surfaces

There are no aspherical surfaces in Table 8. The data file therefore uses `asph: {}`. All five refracting surfaces are spherical or plane.

This is consistent with the design's cost objective. The patent's stated purpose is to provide an inexpensive super-wide-angle lens with a small number of elements and well-corrected aberrations other than distortion. The all-spherical three-element construction is the point of the invention, not a simplification made after the fact.

## Aberration Correction Strategy

The patent's correction strategy is unusually explicit. Removing L2 would leave excessive magnification chromatic aberration from L1, plus on-axis chromatic aberration and negative spherical aberration from L3. L2 is inserted as a thick meniscus so that its two powered surfaces can do separate work.

The object-side surface of L2 supplies the lateral-color correction. The image-side cemented surface supplies the spherical-aberration and axial-color correction. This separation is what allows a three-element lens to cover a fisheye-class field without aspheres or additional air-spaced correctors.

The Petzval balance was recomputed surface-by-surface using

$$P = \sum_i \frac{(n_i' - n_i)/R_i}{n_i n_i'}.$$

For Table 8, the normalized Petzval sum is $+3.5006\times10^{-4}\ \mathrm{mm}^{-1}$, equivalent to $+1.7503\times10^{-3}\ \mathrm{mm}^{-1}$ after scaling to 20 mm. The first negative element contributes strongly negative Petzval curvature; the L2 front and L3 rear surfaces contribute positive terms, and the cemented junction supplies a smaller negative term. The net sum is therefore small relative to the individual surface terms.

Distortion is intentionally not corrected. The patent is explicit that the desired super-wide-angle lens is a fisheye-type lens with large barrel-shaped distortion and that the aberrations to be corrected exclude distortion.

## Conditional Expressions and Verification

Paraxial values were recomputed from the Table 8 prescription. The first nine conditions are the applicable first- and second-aspect design conditions; all pass.

| Condition | Formula | Patent range | Recomputed value | Result |
|---:|---|---:|---:|---|
| 1 | $|f_1|/f$ | 0.8–2.0 | 1.6386 | Pass |
| 2 | $|f_1|/f_{23}$ | 0.7–1.3 | 1.0525 | Pass |
| 3 | $d_3/f$ | 0.4–1.0 | 0.6995 | Pass |
| 4 | $r_3/f$ | 0.7–1.4 | 1.1017 | Pass |
| 5 | $r_4/f$ | 0.3–0.9 | 0.4931 | Pass |
| 6 | $n_2-n_3$ | > 0.08 | 0.1349 | Pass |
| 7 | $\nu_2\nu_3(n_2-n_3)/(\nu_3-\nu_2)$ | 4–12 | 6.1150 | Pass |
| 8 | $\nu_1$ | > 45 | 60.14 | Pass |
| 9 | $r_2/r_1$ | −0.06–0.06 | 0.0000 | Pass |

The third-aspect conditions also were recomputed because the prior draft discussed them:

| Condition | Formula | Patent range | Recomputed value | Result |
|---:|---|---:|---:|---|
| 10 | $\nu_2 r_3/(\nu_1 r_2)$ | 0.5–0.8 | 0.4568 | Below range |
| 11 | $\nu_3 r_3/(\nu_2 r_4)$ | 4.6–5.05 | 5.0702 | Slightly above range |

This does not invalidate Table 8. It means Example 8 is primarily an embodiment of the first and second aspects. The ninth through eleventh embodiments are the ones framed around the third-aspect condition set.

## Verification Summary

The prescription was independently re-entered and traced with a paraxial $y/u$ matrix calculation. The following values are at the patent's normalized scale unless noted otherwise:

| Quantity | Patent Table 8 | Recomputed | Production-scale value |
|---|---:|---:|---:|
| Effective focal length | 100.000 mm | 99.99925 mm | 19.99985 mm |
| Back focal distance from S5 | 197.8701 mm | 197.8689 mm | 39.5738 mm |
| F-number | 8.25 | 8.25 by entrance-pupil sizing | f/8 marketed, f/8.25 design |
| Field angle | 164.0° | transcribed, not paraxially derived | 164.0° patent field |
| L1 focal length | — | −163.857 mm | −32.771 mm |
| L2 focal length, standalone | — | −227.510 mm | −45.502 mm |
| L3 focal length, standalone | — | +66.720 mm | +13.344 mm |
| L2+L3 group focal length | — | +155.685 mm | +31.137 mm |

The `*.data.ts` file applies the uniform 0.20 scale factor to all radii, center thicknesses, air spaces, back focal distance, and inferred semi-diameters. Refractive indices and Abbe numbers remain as listed in the patent. Semi-diameters are not given in the patent and were estimated conservatively from the patent figure and mechanical constraints: the front element stays below the spherical rim limit, the rear group is kept close to the figure proportions, and all element edge-thickness checks remain positive.

## Sources

1. US Patent 5,949,588, Ohshita and Shibayama, "Wide Angle Lens," granted September 7, 1999.  
2. Koichi Ohshita, "NIKKOR — The Thousand and One Nights No.54: Nikon Fun Fun LensSet, Part 2 (Gyogyotto 20, Dodotto 400)," Nikon Imaging.  
3. Koichi Ohshita, "NIKKOR — The Thousand and One Nights No.52: Nikon Fun Fun LensSet," Nikon Imaging.  
4. SCHOTT Optical Glass Datasheets: N-SK16 and N-SF6.  
5. OHARA Optical Glass Datasheets: S-BSM16 and S-TIH6.  
6. The Fish List, "Nikon 'fun' Gyogyotto Fisheye type 20mm f/8," used only as a secondary check for production-format metadata and image-circle context.
