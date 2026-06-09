# Pentax-DA 70mm F2.4 Limited — Optical Analysis

## Patent Reference and Design Identification

**Patent:** US 7,542,219 B2 — *Intermediate Telephoto Lens System*  
**Application Number:** 11/690,275  
**Filed:** March 23, 2007  
**Published:** US 2007/0229983 A1, October 4, 2007  
**Granted:** June 2, 2009  
**Priority:** JP 2006-087295, March 28, 2006  
**Inventor:** Masakazu Saori  
**Assignee:** Hoya Corporation  
**Embodiment analyzed:** Embodiment 1, Table 1 and Fig. 1  
**Worked examples:** Five

The patent describes a compact modified-Gauss intermediate telephoto lens for a digital SLR. Its stated field is approximately 25°, corresponding to a little more than 100 mm on the 135 format, and the prescription is presented as a thin short-telephoto solution for a camera that retains a long SLR flange back while using a smaller digital sensor.

The identification with the smc / HD Pentax-DA 70mm F2.4 Limited is strong but not prescription-unique. The patent prescription is six elements in five groups: L1, L2, L3, a cemented L4-L5 doublet, and L6. The production lens is published as six elements in five groups. The patent is entirely spherical and uses no ED, fluorite, or aspherical elements; public production descriptions likewise do not indicate ED or aspherical glass. The focal length and aperture class also match: the lead patent example is f = 67.74 mm at FNO = 1:2.5, while the production lens is a 70 mm f/2.4 APS-C short telephoto.

The patent's corporate trail should be read carefully. The priority date predates Hoya's full acquisition of Pentax, but the US patent is assigned to Hoya and the publication/grant period coincides with the Hoya/Pentax transition. That supports, but does not by itself prove, the product mapping. The stronger evidence remains the element/group count, all-spherical construction, focal-length class, field, and 2006 product timing.

Embodiment 1 is used as the representative prescription because it is the lead numerical example and matches the production lens on every checkable optical axis. The patent also contains four nearby variants. Embodiments 1, 3, 4, and 5 share the same basic lens arrangement; Embodiment 2 differs in the L4/L5 shapes, and Embodiment 5 omits the fixed-aperture flare stop. Public sources do not identify which numbered example became the production cell, so this analysis treats Embodiment 1 as the canonical patent representative rather than asserting it as a proven production prescription.

Manufacturer-published production specifications supersede patent-derived values for hard specs: 70 mm focal length, f/2.4 maximum aperture, 0.7 m minimum focus, approximately 0.12x maximum magnification, nine diaphragm blades, 49 mm filter size, Pentax K mount, APS-C coverage, and 23° diagonal angle of view. The patent's native Embodiment 1 field is wider: f·tan(W) = 67.74·tan(12.6°) ≈ 15.1 mm image height, or about a 30.3 mm image circle, larger than the approximately 28.3 mm APS-C diagonal used by the production lens.

The companion data file applies a uniform scale factor of **1.0335152966** to the patent radii, thicknesses, air spaces, back focus, and estimated clear apertures so that the rendered prescription has a 70.000 mm paraxial EFL. The unscaled patent values are retained in the analysis below for direct comparison with Table 1. The scaled data-file BFD at infinity is 39.065 mm.

## Optical Architecture

The system is a modified-Gauss short telephoto with positive front and positive rear lens groups separated by a fixed-position variable-aperture diaphragm. The front group is a positive-positive-negative sequence, and the rear group is a net-positive group composed of a negative/positive cemented doublet followed by a strong positive final element. No element lies between the front and rear groups other than the aperture stop.

The patent frames the design as a hybrid of Ernostar and Gauss behavior. The Ernostar side appears in the strong front power and compact axial build; the Gauss side appears in the power split across the stop, used to keep astigmatism and distortion in check at the 25° class field. This is not a telephoto system in the strict TL/EFL sense: the unscaled distance from the first surface to the image plane is 68.53 mm, giving TL/EFL ≈ 1.01. Its long BFD is an SLR-flange requirement rather than evidence of a retrofocus wide-angle layout.

Independent paraxial tracing of Embodiment 1 at the patent scale gives EFL = 67.7300 mm, BFD = 37.7982 mm, and total first-surface-to-image track = 68.53 mm. The patent lists f = 67.74 mm and fB = 37.80 mm, so the transcription matches to rounding.

Power distribution in the native patent scale is as follows. L1 and L2 form a strong positive collector pair with combined focal length f12 = 28.75 mm. The whole front group has fF = 107.56 mm after L3's negative balancing power is included. The rear group has fR = 82.72 mm. The L4-L5 cemented doublet is net negative at approximately -75.90 mm in situ, and L6 is a strong biconvex positive element at f6 = 43.21 mm.

The Petzval sum, computed surface by surface as Σφ/(n·n′), is +0.002107 mm⁻¹ at the patent scale, corresponding to a Petzval radius of about +475 mm and normalized P·f ≈ +0.143. The negative L3 and net-negative L4-L5 doublet supply the principal negative Petzval contributions; the high-index positive elements keep their positive Petzval terms modest.

## Element-by-Element Analysis

Element shapes are read from the Table 1 radius signs and agree with the patent's prose description of Embodiment 1. Focal lengths in this section are standalone, thick-lens-in-air values in the native patent scale.

### L1 — Positive Meniscus, convex to object

n_d = 1.69799, νd = 55.5. Glass: LaK14/S-LAL14-class lanthanum crown, soft equivalent. f = +56.0 mm.

L1 is the first member of the high-power front collector. Both radii are positive, R1 = +29.470 and R2 = +112.728, so the element is a positive meniscus bent toward the object. Its relatively high index allows meaningful front-group power without extreme curvature, while its Abbe number remains high enough to keep the front collector from becoming a major chromatic liability.

The stored glass code is effectively 698555. Current OHARA S-LAL14 is 697555, so the identification should be treated as a class match rather than an exact catalog name.

### L2 — Positive Meniscus, convex to object

n_d = 1.68159, νd = 57.5. Glass: unmatched lanthanum crown, 682575 class. f = +58.4 mm.

L2 is the second positive meniscus of the front collector. The patent uses the combined focal length of L1 and L2 in condition (1), which confirms that these elements are intended to be read as a power pair. The glass has a high Abbe number for a lanthanum crown, supporting the patent's stated preference for higher-Abbe positive front elements when possible.

No exact current public catalog match was found for the 1.68159 / 57.5 pair. The prior description as a LaK12-region glass is acceptable as a family hint, but the corrected file labels it as unmatched rather than assigning a catalog-equivalent name.

### L3 — Negative Meniscus, convex to object

n_d = 1.79425, νd = 25.5. Glass: unmatched dense flint, 794255 class. f = -25.3 mm.

L3 completes the positive-positive-negative front sequence. Its rear surface is much more strongly curved than its front surface, making the element negative despite both radii being positive. It balances the strong L1-L2 pair and is the front group's main negative Petzval contributor.

The low Abbe number places it firmly in dense-flint territory. It should not be described as ED, anomalous partial dispersion, or apochromatic glass.

### L4 — Negative Meniscus, convex to image, cemented to L5

n_d = 1.67648, νd = 44.0. Glass: unmatched barium flint, 676440 class. f = -51.6 mm.

L4 is the negative front member of the rear cemented doublet. Both radii are negative, with the stronger curvature on the front side, matching the patent's description of a negative meniscus whose convex surface faces the image side. It contributes negative power and negative Petzval curvature in the rear group.

The νd = 44.0 value makes this a flint, not a crown, despite its barium-family character.

### L5 — Positive Meniscus, convex to image, cemented to L4

n_d = 1.54354, νd = 60.1. Glass: BaK2-class light barium crown, soft equivalent. f = +170.0 mm.

L5 is the weak positive crown member of the rear cemented pair. The L4-to-L5 cemented interface has a negative radius and a step down in refractive index, so the interface carries weak positive power; the doublet as a whole remains net negative. This is the important distinction: the L5 element is positive in isolation, but the cemented L4-L5 assembly functions as a negative rear subgroup component.

The 544601 code is close to light barium crown/BaK territory but not an exact modern public catalog match, so the corrected data file uses a soft class label.

### L6 — Biconvex Positive

n_d = 1.80100, νd = 35.0. Glass: S-LAM66 (OHARA) / N-LASF45 (Schott), 801350 exact-code match. f = +43.2 mm.

L6 is the strongest positive element in the rear group. Its opposite-sign radii, R10 = +112.557 and R11 = -49.502, confirm a biconvex form. Conditions (3), (4), and (5) all govern this element: condition (3) controls its focal-length ratio, condition (4) bounds the index/Abbe combination, and condition (5) requires a high refractive index.

The 801350 code is the most secure glass identification in the prescription. Current OHARA S-LAM66 lists nd = 1.80100 and νd ≈ 34.97, and Schott N-LASF45 is the corresponding Schott-class match. This element is therefore a high-index lanthanum dense flint, not a crown.

## Glass Identification and Selection

The patent gives only nd and νd, not glass trade names or full dispersion data. The corrected glass table separates exact matches from soft family identifications. This avoids circular validation: an element is not given a catalog name unless the public catalog nd/νd pair is genuinely close to the stored prescription.

| Element | Patent nd / νd | Corrected identification | Confidence |
|---|---:|---|---|
| L1 | 1.69799 / 55.5 | LaK14 / S-LAL14-class lanthanum crown; nearest current OHARA S-LAL14 is 697555 | soft equivalent |
| L2 | 1.68159 / 57.5 | Unmatched lanthanum crown, 682575 code class | class / inferred |
| L3 | 1.79425 / 25.5 | Unmatched dense flint, 794255 code class | class / inferred |
| L4 | 1.67648 / 44.0 | Unmatched barium flint, 676440 code class | class / inferred |
| L5 | 1.54354 / 60.1 | Light barium crown / BaK2 region, 544601 code class | soft equivalent |
| L6 | 1.80100 / 35.0 | OHARA S-LAM66 / Schott N-LASF45, 801350 | exact code match |

The glass strategy is conventional rather than apochromatic. No element is ED, fluorite, or anomalous-partial-dispersion glass. The positive front elements use relatively high Abbe numbers to limit chromatic spread where the front collector is powerful. L3 and L4 provide higher-dispersion flint behavior for balancing. L6 uses high index to carry strong positive power while satisfying the patent's index/Abbe constraints.

No apochromatic or secondary-spectrum claim should be made from the available data. The patent's chromatic correction is best described as a well-corrected achromat using ordinary high-index and flint/crown balancing.

## Focus Mechanism

The patent provides only infinity-focus prescriptions. It contains no variable-spacing focus table. The production DA 70 Limited focuses as a unit: the whole optical cell translates forward for close focus, with the internal element spacings unchanged.

The data file models this as a single variable back-focus gap. At the scaled 70 mm focal length, infinity BFD is 39.065 mm. Solving the scaled paraxial system for a 0.7 m object distance measured to the image plane gives a close-focus BFD of 47.894 mm, an 8.829 mm extension, and a paraxial magnification of approximately 0.126x. That is close to the published 0.12x and consistent with ordinary rounding and reference-plane differences in manufacturer specifications.

Mechanically, the production lens uses Pentax Quick-Shift Focus and body screw-drive autofocus. Those features are production mechanics rather than patent prescription features.

## Conditional Expressions

The patent states five conditional expressions. Recomputed values below use the native Embodiment 1 prescription. Uniform scaling to the data-file 70 mm focal length leaves all ratios unchanged.

| Condition | Patent form | Patent value | Recomputed | Status |
|---|---|---:|---:|---|
| (1) | 2.0 < f / f12 < 3.0 | 2.36 | 2.356 | satisfied |
| (2) | 0.8 < fF / fR < 1.8 | 1.30 | 1.300 | satisfied |
| (3) | 0.5 < f6 / f < 1.0 | 0.64 | 0.638 | satisfied |
| (4) | 70·Nd6 + νd6 < 162 | 161 | 161.07 | satisfied |
| (5) | Nd6 > 1.70 | 1.80100 | 1.80100 | satisfied |

Condition (1) limits the power loaded into the L1-L2 pair. Condition (2) balances the front and rear group powers. Condition (3) controls the final element's positive power: too weak makes lateral color difficult to correct, while too strong increases axial color. Conditions (4) and (5) constrain L6 to a high-index, bounded-Abbe region of the glass map.

## Aberration Correction and Design Philosophy

The design solves a specific APS-C DSLR problem: the focal length must be shorter than a 135-format portrait telephoto while the camera still requires a long SLR flange distance. The patent therefore avoids a simple scaled-down film-era short telephoto, because a direct scale reduction would also reduce the back focal distance.

The positive-positive-negative front group creates a compact converging front section. The rear group then uses a net-negative cemented doublet followed by a strong positive L6 to preserve long back focus without making the whole optical stack long. Across-the-stop power distribution supplies enough Gauss-like symmetry to hold astigmatism and distortion to modest levels for the field class.

The fixed-aperture diaphragm ahead of L6 is not the F-number-determining stop. It is a flare/off-axis-ray control stop placed 0.5 mm in front of surface 10 in the native patent scale. The data file includes it as a fixed clear-aperture surface labelled FAD, while the variable aperture diaphragm is labelled STO.

## Verification Summary

The review re-extracted Table 1, split the L3-to-L4 air gap at the patent VAD position, split the L5-to-L6 air gap at the patent FAD position, and reran paraxial tracing independently. Native-scale results are EFL = 67.7300 mm, BFD = 37.7982 mm, f12 = 28.7525 mm, fF = 107.5567 mm, fR = 82.7204 mm, f6 = 43.2075 mm, and Petzval sum = +0.002107 mm⁻¹. These reproduce the patent's f = 67.74 mm, fB = 37.80 mm, and Table 6 condition values to rounding.

The delivered data file scales the prescription by 1.0335152966. Re-running the same paraxial trace on the scaled prescription gives EFL = 70.0000 mm and infinity BFD = 39.0650 mm. The stop semi-diameter is set to 8.570 mm at the scaled patent stop position, giving an entrance pupil semi-diameter of 14.583 mm and a nominal f/2.4 aperture at 70 mm. The patent f/2.5 aperture would correspond to a scaled stop semi-diameter of approximately 8.226 mm.

Semi-diameters are not patent-published. The data file uses constrained estimates rather than claiming production clear apertures. The estimates satisfy the renderer's spherical rim limit, retain positive edge thickness in each element, preserve plausible front/rear element diameter ratios, and keep signed cross-gap sag clearance positive.

## Sources and References

- US 7,542,219 B2, *Intermediate Telephoto Lens System*, Masakazu Saori, Hoya Corporation. Primary source for the optical prescription, lens arrangement, stop placement, conditional expressions, and aberration plots.
- Ricoh Imaging official HD Pentax-DA 70mm F2.4 Limited specifications. Used for production focal length, aperture, construction, field, close focus, magnification, aperture blades, mount, and filter size.
- OHARA S-LAL14 and S-LAM66 data sheets; Schott N-LASF45 catalog data. Used only where nd/νd agreement supports a class or exact glass identification.
- Hoya optical-glass catalog conventions for six-digit glass codes and glass family naming.
