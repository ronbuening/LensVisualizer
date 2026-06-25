## Patent Reference and Design Identification

**Patent:** DE 1,089,991 (Auslegeschrift)
**Filed:** 5 May 1956
**Published:** 29 September 1960
**Inventor:** Karlheinz Pennig
**Applicant:** Optische Werke G. Rodenstock, München
**Title:** Vierlinsiges fotografisches Objektiv
**Embodiment analyzed:** Single worked example; the patent contains one numerical prescription.

DE 1,089,991 describes a four-element photographic objective in which the aperture stop is enclosed between two negative elements: a front-side negative singlet and the negative component of the rear cemented doublet. The design is directed to a 1:2.8 objective with improved coma correction and comparatively low vignetting. The numerical prescription is given in arbitrary length units, with the claim allowing ±3% tolerance on curvatures by refractive power, ±10% on thicknesses and spacings by focal length, ±0.02 on refractive indices, and ±5 Abbe-number units.

The worked example is a strong match to the production Rodenstock Rogonar-S 50mm f/2.8 enlarging lens. The convergent evidence is the four-element / three-group construction, the f/2.8 maximum aperture, the positive-negative-stop-cemented-doublet architecture, Rodenstock as applicant, and the 23.6° patent field-curve set, which corresponds to a 43.7 mm image diagonal at a 50 mm focal length. Rodenstock's enlarging-lens literature identifies the Rogonar-S 50mm f/2.8 as a four-element, three-group lens for 24 × 36 mm film at 2× to 10× enlargement. B&H's archived product listing gives the same focal length, aperture range, format coverage, scale range, and optical construction; its 47 mm flange focal length is a mechanical datum and is not the same as the optical rear-vertex back focal distance computed from the patent prescription.

## Optical Architecture

The design is a four-element, three-group, all-spherical enlarging objective of the form positive / negative / stop / negative-positive cemented doublet. It is best described as a modified Dialyte or split-Tessar derivative rather than a true double-Gauss: the stop lies between two negative powers, and the rear group is a cemented negative-positive pair with net positive power.

Group I is a high-index positive singlet. Group II is a biconcave negative singlet. The stop sits in the air gap between Group II and the rear cemented group. Group III is a cemented doublet whose front component is negative and whose rear component is a high-index positive lanthanum flint. The system is not telephoto in the strict sense; the rounded patent prescription gives EFL = 101.0288 units and BFD = 79.3852 units, so BFD/EFL = 0.786. Its back focus is nevertheless long enough for an enlarger barrel and mount because the rear vertex-to-image distance scales to approximately 39.3 mm at a 50 mm production focal length.

The patent table gives the total stop gap as `b₁ + b₂ = 5.95` and prints an adjacent `+1.48`. Figure 1 places the stop closer to the rear cemented group than to the second element, so the data file reads the notation as `b₁ − b₂ = +1.48`. That gives b₁ = 3.715 and b₂ = 2.235 patent units. This interpretation affects entrance-pupil size and ray-drawing geometry but not the system EFL, BFD, element powers, or Petzval sum.

The data file scales the patent prescription by 50 / 101.028802 = 0.494908371. This makes the computed Gaussian EFL exactly 50.000 mm while preserving all curvatures, spacings, and relative powers. The patent-listed `s′ = 79.6` scales to 39.395 mm, while the internally recomputed BFD from the rounded prescription is 39.288 mm; the data file uses the recomputed value so infinity rays focus at the image plane.

## Element-by-Element Analysis

### L1 — Positive Near-Plano-Convex Front Singlet

nd = 1.678, νd = 55.5. Glass: LaK12 class, patent code 678/555; LAC12 / H-LaK5A / K-LaK12 equivalents, with Schott N-LAK12 as a close modern Schott equivalent. f = +29.27 mm after scaling (+59.14 patent units).

L1 is the principal object-side positive element. The front surface carries almost all of the element power, while the rear surface has R₂ = −3930 patent units and is optically close to plane. The resulting near-plano-convex shape lets the designer use a high-index lanthanum crown with moderate curvature rather than pushing a lower-index crown to a steeper front radius.

The patent text identifies increased refractive indices as the mechanism for improving the image-forming power at f/2.8. In L1, the 678/555 glass code provides a high index while keeping the Abbe number in the crown range. This reduces the curvature needed for the front positive power and helps restrain coma and spherical residuals.

### L2 — Biconcave Negative Singlet

nd = 1.625, νd = 35.6. Glass: F7 class, patent code 625/356; Schott F7 is the appropriate historical German reading, with CDGM F6 as a cross-catalog code equivalent. f = −18.17 mm after scaling (−36.71 patent units).

L2 is the strong negative element ahead of the stop. Its biconcave form, R₃ = −68.3 and R₄ = +35.0 in patent units, diverges the converging beam from L1 and creates the design's front air-spaced correction pair. Its optical role is not only to offset the front positive power but also to place a negative refracting power directly ahead of the stop, matching the claim structure in which the aperture is enclosed by two negative elements.

The L1/L2 pair gives the front half of the lens its principal achromatizing contrast: νd = 55.5 against νd = 35.6. The front pair by itself is net negative in the rounded prescription, so the final converging burden is shared with the rear doublet rather than being forced into L1 alone.

### L3 — Negative Near-Plano-Concave Doublet Component

nd = 1.589, νd = 41.0. Glass: Schott FL2 class, patent code 589/410. f = −32.45 mm after scaling (−65.58 patent units).

L3 is the negative front component of the cemented rear doublet. Its front surface, R₅ = +3548 patent units, is practically plane. The cemented interface at R₆ = +38.2 provides nearly all of the element's negative refractive action.

The 589/410 code is a close match to the historical Schott FL2 coordinate, with published Schott data giving nd ≈ 1.58921 and νd ≈ 40.96. This makes the rear cemented group an FL-class flint paired to a high-index lanthanum flint, not a wide-separation crown-flint achromat.

### L4 — Biconvex Positive Rear Doublet Component

nd = 1.717, νd = 47.9. Glass: LAF3 class, patent code 717/479; S-LAM3, H-LaF2, and K-LaF3 are exact code-level equivalents, while Hoya LAF3 is the adjacent 717/480 catalogue entry. f = +15.94 mm after scaling (+32.20 patent units).

L4 is the strongest individual element in the design. The cemented interface contributes one of the doublet's main refracting surfaces and the rear surface, R₇ = −52.4 patent units, supplies additional positive power. As a standalone element in air, L4 is much stronger than L1, but the negative L3 component reduces the rear cemented group's net focal length to +29.23 mm after scaling, nearly equal to L1's +29.27 mm.

The patent's use of a 717/479 glass at the rear is central to the design. Its Abbe number, νd = 47.9, places it on the flint side of the usual crown/flint boundary despite its lanthanum family. This high-index flint allows strong positive power with moderate curvatures and supports the patent's stated coma-correction strategy.

## Glass Identification and Selection

The patent gives glass codes rather than catalogue names. The first three digits encode nd × 1000 and the last three encode νd × 10, so they should be treated as optical coordinates first and catalogue names second.

| Element | Patent code | nd | νd | Catalogue reading | Notes |
|---|---:|---:|---:|---|---|
| L1 | 678/555 | 1.678 | 55.5 | LaK12 / LAC12 class | Hoya cross-reference maps LAC12 678/555 to N-LAK12, S-LAL12, J-LAK12, K-LaK12, and H-LaK5A equivalents. |
| L2 | 625/356 | 1.625 | 35.6 | F7 class | Schott F7 is the historical German reading; CDGM F6 is a code-equivalent modern entry. |
| L3 | 589/410 | 1.589 | 41.0 | Schott FL2 class | Historical FL-class flint; treated as a class identification rather than a current production glass. |
| L4 | 717/479 | 1.717 | 47.9 | LAF3 / S-LAM3 / H-LaF2 class | High-index lanthanum flint; not a crown glass. |

The outer power-carrying elements use high-index lanthanum-family glasses. The inner correcting elements are ordinary flint-family glasses. That palette fits the patent's stated design method: raise the indices of the outer positive powers to reduce curvature demands, then use negative flint powers on either side of the stop to control coma and chromatic balance.

## Focus Mechanism

The patent describes no internal focusing mechanism and gives no variable air-spacing table. The production Rogonar-S is an enlarger objective; focus is obtained by moving the complete lens along the enlarger axis and changing the negative-to-lens and lens-to-easel distances. The data file therefore keeps all internal air gaps fixed and does not model a focus group.

The nominal Rodenstock application range is 2× to 10× enlargement for 24 × 36 mm film. In ordinary thin-lens terms for a 50 mm lens, that corresponds to object-side conjugates of roughly 75 mm down to 55 mm from the principal plane, but those values are enlarger working geometry, not camera minimum-focus distances.

## Verification Summary

Independent paraxial verification was rerun from the patent table. The trace used the surface-by-surface reduced-angle matrix form and a separate y-ν marginal-ray implementation. The two methods agreed.

| Quantity | Patent-scale result | Scaled 50 mm result | Patent / production reference | Status |
|---|---:|---:|---:|---|
| EFL | 101.0288 | 50.0000 mm | nominal 50 mm production focal length | OK |
| BFD from rounded prescription | 79.3852 | 39.2884 mm | patent `s′ = 79.6` → 39.3947 mm scaled | OK; 0.27% difference from printed `s′` |
| ABCD matrix, patent scale | A = 0.785768, B = 32.854390, C = −0.00989817, D = 0.858780 | C = −0.020000 after scaling | — | OK |
| Entrance-pupil semi-diameter at f/2.8 | 18.0409 | 8.9286 mm | f / (2N) | OK |
| Physical stop semi-diameter | 13.8547 | 6.8568 mm | derived from b₁/b₂ split | OK |
| Petzval sum | 0.00277335 | 0.00560377 mm⁻¹ | — | Surface-by-surface φ/(n·n′) |
| Petzval radius | 360.57 | 178.45 mm | — | OK |
| Half-field for 43.7 mm image diagonal | 23.6° | 23.6° | patent Fig. 2 field labels | OK |

Standalone thick-lens focal lengths in air are: L1 = +59.136 patent units (+29.267 mm), L2 = −36.706 (−18.166 mm), L3 = −65.578 (−32.455 mm), and L4 = +32.202 (+15.937 mm). The rear cemented doublet L3 + L4 computes to +59.053 patent units (+29.226 mm).

The semi-diameters in the data file are not patent-published values. They were estimated from the f/2.8 marginal ray and the 23.6° chief ray, then reduced where necessary to satisfy edge-thickness and signed cross-gap sag constraints. This produces a conservative diagram with slight full-aperture edge-field vignetting, which is consistent with the patent's claim of comparatively low, not zero, vignetting.

## Design Heritage and Context

Rodenstock's later enlarging-lens line placed the Rogonar-S between the simpler three-element Rogonar and the six-element Rodagon. The Rodenstock brochure describes the Rogonar-S 50mm f/2.8 specifically as a four-element, three-group lens for 24 × 36 mm film and 2× to 10× enlargement, with best results recommended after stopping down by two to three stops. That production description is consistent with the patent: a relatively simple four-element construction using higher-index glass to reach f/2.8 while retaining practical edge illumination.

## Sources

- DE 1,089,991, "Vierlinsiges fotografisches Objektiv," Optische Werke G. Rodenstock, published 29 September 1960.
- Rodenstock, *Lenses for Enlarging and CCD Photos*, archived brochure, Rogonar-S section and technical table: https://www.photocornucopia.com/archive/62/Rodenstock%20Enlarging%20Lenses.pdf
- B&H Photo Video, archived product listing for Rodenstock Rogonar-S 50mm f/2.8, MFR 452528: https://www.bhphotovideo.com/c/product/1345643-REG/rodenstock_452528_50mm_f2_8_rogonar_s.html
- HOYA Group Optics Division, *Optical Glass Cross Reference Index*: https://www.hoya-opticalworld.com/english/products/crossreference.html
- Hans Bach and Norbert Neuroth, eds., *The Properties of Optical Glass*, Schott Series on Glass and Glass Ceramics, Springer, 1998.
