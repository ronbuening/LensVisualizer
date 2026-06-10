# Canon EF 20-35 mm f/2.8L — Optical Analysis

## Patent Reference and Design Identification

**Patent:** US 5,000,550
**Application Number:** 07/471,081
**Filed:** January 26, 1990
**Granted:** March 19, 1991
**Priority:** JP 1-22289 (January 30, 1989); JP 1-119603 (May 11, 1989)
**Inventors:** Sadatoshi Takahashi; Koutaro Yano; Hiroshi Endo
**Assignee:** Canon Kabushiki Kaisha
**Title:** Wide-Angle Type Zoom Lens Having Inner-Focus Lens
**Embodiment analyzed:** Numerical Example 1 (Fig. 1)

The prescription represented here is Numerical Example 1 of US 5,000,550. The patent describes a wide-angle zoom lens for 35 mm single-lens-reflex cameras, with a negative first group split into a stationary object-side sub-group and a movable image-side focus sub-group. Example 1 is the lead four-group super-wide-angle embodiment and is the closest patent match for the Canon EF 20-35 mm f/2.8L.

The production identification rests on convergent evidence rather than on an explicit patent-to-product statement. Canon's Camera Museum lists the EF20-35mm f/2.8L as marketed in October 1989 with 15 elements in 12 groups, closest focusing distance 0.5 m, maximum magnification 0.09x, 72 mm filter thread, 89 x 79.2 mm maximum diameter and length, and 570 g weight. The patent's Example 1 gives a 15-element design, constant FNO 1:2.8, a super-wide 2ω range of 93°-65°, and zoom positions tabulated at 20.6, 27.2, and 34.0 mm. Those values align with the marketed 20-35 mm f/2.8 full-frame EF zoom.

The patent drawing and prescription place a single aspherical surface on the object-side surface of the first element, which is also where the design has greatest leverage over wide-end distortion. The focus mechanism is also distinctive: only the rear sub-group 11B of the negative first group moves for focusing, rather than the whole front group. The patent states that this produces an effect equivalent to floating correction while reducing the focusing mass.

Example 11 is the only close internal alternative. It keeps a similar broad architecture and front asphere, but it deliberately couples group movements for mechanical simplification. Example 1 retains the independently tabulated four-group zoom spacings D8, D13, and D19 and is therefore used here. The identification remains a best technical match, not a manufacturer-published confirmation of the exact production prescription.

## Optical Architecture

Example 1 is a negative-lead retrofocus wide-angle zoom with four optical zoom groups in the power sequence negative-positive-negative-positive.

- Group 1 is the negative front group and the focusing group. It is split into stationary sub-group 11A, containing L1 and L2, and movable sub-group 11B, containing L3 and L4.
- Group 2 is the positive magnification-varying group, built from a cemented achromat plus a positive singlet.
- Group 3 is the negative compensator behind the aperture stop.
- Group 4 is the positive rear relay group, which supplies the final convergence and sets the back focal distance.

During zooming from wide to telephoto, the separation between groups 1 and 2 decreases, the separation between groups 2 and 3 increases, and the separation between groups 3 and 4 decreases. In the data file these are D8, D13, and D19. The independently computed back focal distance also changes with zoom and is included as the final variable gap BF so the image plane stays at the paraxial infinity focus.

This is not a telephoto design in the strict optical sense. At the wide end the back focal distance is about 39.28 mm against a 20.60 mm effective focal length, which is the retrofocus condition needed for a 35 mm SLR mirror box. At the long end the back focal distance is about 49.59 mm against a 33.97 mm effective focal length.

## Element-by-Element Analysis

Focal lengths below are standalone thick-lens values in air, computed from the patent radii, center thicknesses, and d-line refractive indices. Cemented-pair net focal lengths are discussed separately because they differ from the isolated component values.

### Group 1 — Negative front and focus group, L1-L4

#### L1 — Negative Meniscus, convex to object, 1× aspherical

nd = 1.77250, νd = 49.6. Glass: S-LAH66-class lanthanum flint. f = -40.9 mm.

L1 is the front negative meniscus and carries the only aspherical surface. Its front location makes it the dominant surface for wide-angle distortion control. The patent explicitly states that an aspherical surface is set in the negative meniscus lens of the front sub-group for correcting distortion in this super-wide-angle example.

#### L2 — Positive Meniscus

nd = 1.61293, νd = 37.0. Glass: F3 / E-F3 flint class. f = +191.2 mm.

L2 is a weak positive partner in stationary sub-group 11A. Its low power moderates the first element's strong negative contribution while preserving the negative net power of the front sub-group.

#### L3 — Biconcave Negative

nd = 1.88300, νd = 40.8. Glass: S-LAH58 / TAFD30 dense lanthanum class. f = -29.8 mm.

L3 is the stronger negative element in the moving focus sub-group 11B. The patent prefers a biconcave negative lens in this location because it helps control the spherical-aberration variation that would otherwise accompany focusing and zooming.

#### L4 — Biconvex Positive

nd = 1.84666, νd = 23.9. Glass: SF57 / S-TIH53 dense flint class. f = +55.6 mm.

L4 is the positive partner in sub-group 11B. It has a strong object-side convex surface and works with L3 to keep the sub-group net negative while reducing the aberration swing created by moving a powered focus component.

### Group 2 — Positive magnification-varying group, L5-L7

#### L5 + L6 — Cemented achromat

L5: nd = 1.84666, νd = 23.9. Glass: SF57 / S-TIH53 dense flint class. f = -47.0 mm.

L6: nd = 1.65160, νd = 58.5. Glass: N-LAK7 / S-LAL7 lanthanum-crown class. f = +26.2 mm.

The L5-L6 cemented doublet has net positive power of about +57.4 mm. Its strong flint/crown dispersion split performs the main axial color correction in the positive second group.

#### L7 — Positive Meniscus

nd = 1.65160, νd = 58.5. Glass: N-LAK7 / S-LAL7 lanthanum-crown class. f = +51.2 mm.

L7 supplies the remaining positive power of group 2. Reusing the same lanthanum-crown class as L6 keeps the group's Petzval and chromatic burden moderate.

### Group 3 — Negative compensator group, L8-L10

#### L8 — Biconcave Negative

nd = 1.81600, νd = 46.6. Glass: S-LAH59 / TAF5 lanthanum-flint class. f = -33.8 mm.

L8 provides most of the third group's negative power. It sits immediately behind the stop and is a major contributor to balancing the positive powers of groups 2 and 4.

#### L9 + L10 — Near-afocal cemented color corrector

L9: nd = 1.69680, νd = 55.5. Glass: S-LAL14 / N-LAK14 lanthanum-crown class. f = -22.8 mm.

L10: nd = 1.80518, νd = 25.4. Glass: SF6 / S-TIH6 dense flint class. f = +23.6 mm.

The L9-L10 cemented pair is nearly afocal in net power, about +2350 mm by paraxial calculation. Its function is therefore chromatic and aberrational correction near the stop rather than first-order power.

### Group 4 — Positive rear relay group, L11-L15

#### L11 — Biconvex Positive

nd = 1.51633, νd = 64.1. Glass: S-BSL7 (OHARA) / BK7-class crown. f = +93.7 mm.

L11 begins the rear relay group with weak positive power. The exact nd/νd pair is closer to OHARA S-BSL7 than to Schott N-BK7, although it belongs to the same ordinary borosilicate crown family.

#### L12 — Negative Meniscus

nd = 1.76182, νd = 26.5. Glass: N-SF14 / S-TIH14 dense flint class. f = -109.9 mm.

L12 is the rear group's negative flint. The patent notes that including at least one negative lens in the fourth group helps correct astigmatism generated by the negative meniscus in the front sub-group.

#### L13 — Near plano-convex positive

nd = 1.69680, νd = 55.5. Glass: S-LAL14 / N-LAK14 lanthanum-crown class. f = +51.7 mm.

L13 is a low-Petzval positive component with an almost flat front surface. It contributes rear-group convergence and field correction.

#### L14 + L15 — Final cemented doublet

L14: nd = 1.65160, νd = 58.5. Glass: N-LAK7 / S-LAL7 lanthanum-crown class. f = +27.5 mm.

L15: nd = 1.84666, νd = 23.9. Glass: SF57 / S-TIH53 dense flint class. f = -33.2 mm.

The final cemented pair has net positive power of about +165.2 mm. Its strong cemented interface performs the last chromatic correction before the image space, while the positive net power helps establish the SLR back focus.

## Glass Identification and Selection

The patent gives only nd and νd, not Canon's glass supplier. The names below are representative public-catalog matches or catalog-equivalent classes. They should not be read as Canon procurement records.

| Patent code | Representative catalog-equivalent glass | Used at | Function |
|---|---|---|---|
| 1.77250 / 49.6 | S-LAH66-class lanthanum flint | L1 | High-index negative front asphere carrier |
| 1.61293 / 37.0 | F3 / E-F3 flint class | L2 | Weak positive partner in 11A |
| 1.88300 / 40.8 | S-LAH58 / TAFD30 dense lanthanum class | L3 | Strong negative focus element |
| 1.84666 / 23.9 | SF57 / S-TIH53 dense flint class | L4, L5, L15 | High-dispersion achromatizing partner |
| 1.65160 / 58.5 | N-LAK7 / S-LAL7 lanthanum-crown class | L6, L7, L14 | Positive low-dispersion crown power |
| 1.81600 / 46.6 | S-LAH59 / TAF5 lanthanum-flint class | L8 | Negative compensator power |
| 1.69680 / 55.5 | S-LAL14 / N-LAK14 lanthanum-crown class | L9, L13 | Rear correction and low-Petzval positive power |
| 1.80518 / 25.4 | SF6 / S-TIH6 dense flint class | L10 | Stop-adjacent color-corrector partner |
| 1.51633 / 64.1 | S-BSL7 / BK7-class borosilicate crown | L11 | Weak rear relay positive |
| 1.76182 / 26.5 | N-SF14 / S-TIH14 dense flint class | L12 | Rear negative color/astigmatism corrector |

The design uses conventional dense flint / lanthanum crown achromatization. It does not contain an identifiable fluorite, FK, FPL, or other extra-low-dispersion glass from the nd/νd data alone, so the file does not tag any element as ED or anomalous partial-dispersion glass.

## Focus Mechanism

The lens focuses by moving sub-group 11B, consisting of L3 and L4, toward the object. In the prescription this decreases D4, the air space between L2 and L3, and increases D8, the air space between L4 and group 2. Their sum remains constant for a given zoom setting, so the focus action is an internal shift rather than a change in total optical track.

The patent gives aberration diagrams for infinity and 1 m object distance but does not publish a focus-spacing table. The data file therefore uses a paraxial finite-conjugate solve. For the official 0.5 m minimum focus distance measured from the image plane, the required forward displacement of sub-group 11B is about 2.70 mm at the wide end, 2.66 mm at the middle position, and 2.65 mm at the long end.

| Zoom position | D4 infinity | D4 at 0.5 m | D8 infinity | D8 at 0.5 m | BF infinity / close |
|---:|---:|---:|---:|---:|---:|
| 20.6 mm | 3.600 | 0.905 | 17.415 | 20.110 | 39.280 |
| 27.2 mm | 3.600 | 0.941 | 7.016 | 9.675 | 44.432 |
| 34.0 mm | 3.600 | 0.947 | 1.012 | 3.665 | 49.585 |

If the finite object distance is instead referenced to the front vertex, the same solve gives about 1.02 mm of travel for 1 m and about 2.01 mm for 0.5 m. The data file uses the image-plane-referenced interpretation because Canon's closest focusing distance is a camera specification, not a front-vertex working distance.

## Aspherical Surfaces

The design has one aspherical surface: surface R1, the object-side surface of L1. The patent uses a spherical base surface and even-order polynomial departure:

$$
X = \frac{(1/R)H^2}{1 + \sqrt{1 - (H/R)^2}} + BH^4 + CH^6 + DH^8 + EH^{10}
$$

This corresponds to the standard conic convention with K = 0 and coefficients A4 = B, A6 = C, A8 = D, and A10 = E.

| Surface | K | A4 | A6 | A8 | A10 |
|---|---:|---:|---:|---:|---:|
| 1A | 0 | +5.8920e-6 | -4.9470e-10 | +3.7880e-13 | +3.3853e-15 |

Because the asphere is at the front of a strongly negative retrofocus group and far from the stop, its first-order use is distortion and field-angle mapping control, not primarily axial spherical correction.

## Conditional Expressions

The patent gives seven design conditions. Conditions 1-3 govern the first-group split and focus sub-group; conditions 4-7 govern the four-group zoom power distribution.

| Condition | Patent bound | Example 1 value | Result |
|---|---:|---:|---|
| (1) abs(fA/fB) | 0.3-11 | 0.790 | Satisfied |
| (2) fB/F1 | 1-4 | 2.568 | Satisfied |
| (3) r/r' | 0.7-1.2 | 0.915 | Satisfied |
| (4) abs(f1/Ft) | 0.6-1.2 | 0.824 | Satisfied |
| (5) f2/Ft | 0.6-1.1 | 0.801 | Satisfied |
| (6) abs(f3/Ft) | 0.8-1.4 | 1.059 | Satisfied |
| (7) f4/Ft | 0.95-1.6 | 1.160 | Satisfied |

For condition (3), the text defines r as the rear surface of the negative component of sub-group 11B and r' as the front surface of the positive component. In Example 1 those are R6 = +53.109 and R7 = +58.070, giving 0.915. The patent's factor table prints R5/R6 = 0.998; that is the biconcave element's own radius ratio, not the air-gap ratio described by condition (3). Both values fall within the stated bound, but the data file follows the condition as written.

## Verification Summary

The prescription was re-entered from Numerical Example 1 and checked by an independent paraxial y-nu ray trace.

| Quantity | Computed value | Patent / source comparison |
|---|---:|---|
| EFL, wide | 20.6006 mm | 20.6 mm |
| EFL, middle | 27.2275 mm | 27.2 mm |
| EFL, tele | 33.9741 mm | 34.0 mm in variable-spacing table; patent heading prints 34.2 |
| BFD, wide | 39.2801 mm | derived |
| BFD, middle | 44.4325 mm | derived |
| BFD, tele | 49.5852 mm | derived |
| F1 | -27.998 mm | -28.0 mm |
| fA | -56.818 mm | -56.82 mm |
| fB | -71.911 mm | -71.92 mm |
| Petzval sum | +0.005823 mm^-1 | surface-by-surface sum Σφ/(n n') |

The data file includes inferred semi-diameters because the patent does not list clear apertures. These semi-diameters were checked against the renderer's default ray fans at 0.6 of the maximum field, the rim-slope limit, edge thickness, and cross-gap sag intrusion. The tightest signed-sag edge-thickness case is the L9-L10 cemented pair; the L10 rear semi-diameter is limited so that the rear element edge thickness remains above 0.5 mm. The values are conservative visualization apertures, not published mechanical diameters.

## Sources

- US 5,000,550, *Wide-Angle Type Zoom Lens Having Inner-Focus Lens*, Canon Kabushiki Kaisha, granted March 19, 1991.
- Canon Camera Museum, "EF20-35mm f/2.8L," official product specification page: https://global.canon/en/c-museum/product/ef286.html
- Public optical-glass catalogs from OHARA, Hoya, and Schott for representative nd/νd glass-code matching.
