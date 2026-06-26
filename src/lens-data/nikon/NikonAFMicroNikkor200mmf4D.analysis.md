## Patent Reference and Design Identification

**Patent:** US 5,751,485  
**Title:** Lens Capable of Short Distance Photographing with Vibration Reduction Function  
**Filed:** August 2, 1995  
**Granted:** May 12, 1998  
**Priority:** JP 5-323282; JP 6-074439; JP 6-074440; JP 7-031544; JP 7-031545  
**Inventor:** Kenzaburo Suzuki  
**Assignee:** Nikon Corporation, Tokyo, Japan  
**Embodiment analyzed:** Ninth Embodiment, FIG. 9 and Table 9

US 5,751,485 is a Nikon patent for close-focusing photographic lenses with vibration reduction. The eighth and ninth embodiments are introduced as fourth-mode examples: a positive first group G1, a negative second group G2, and a positive last group GL, with a negative partial group GLP in GL available for vibration reduction. The ninth embodiment is the relevant worked example for this file.

The match to the production AF Micro-Nikkor 200mm f/4D IF-ED is supported by the following convergent evidence.

1. The patent prescription has 13 glass elements in 8 air-separated groups; Nikon's product specifications list the production lens as 13 elements in 8 groups.
2. The patent uses two very-low-dispersion FK-class elements at nd = 1.49782 and νd = 82.52 in the front group; Nikon specifies two ED glass elements for the production lens.
3. The computed infinity EFL is 199.996 mm, matching the 200 mm marketed focal length.
4. The patent lists F = 4.07, consistent with the production f/4 maximum aperture.
5. The patent lists 2ω = 12.23°, close to Nikon's published 12°20' FX angle of view.
6. The patent reaches β = -1.0 at the shortest photographing distance. The computed object-to-image distance at that state is 495.28 mm, consistent with Nikon's 0.5 m minimum-focus specification.
7. The patent's focusing kinematics move the front sub-group G11 and the negative second group G2 while the rear sub-group G12 and GL remain fixed along the axis, matching the production lens's IF and CRC designation.
8. The design is all-spherical; the patent lists no aspherical coefficients.

The production AF Micro-Nikkor 200mm f/4D IF-ED is not a VR lens. This file therefore treats the patent embodiment as a VR-capable form of the same base macro optical architecture, not as evidence that the production product contains a moving stabilization unit.

## Optical Architecture

The ninth embodiment is a long-focus macro lens with a positive-negative-positive group structure: G1 is positive, G2 is negative, and GL is positive. It is not a strict telephoto design by the usual total-track criterion: the infinity first-surface-to-image track is 222.918 mm, so TL/EFL = 1.115. The more precise description is a compact internal-focusing 200 mm macro design whose negative G2 group provides focus leverage and Petzval balancing.

G1 is divided into two sub-groups. G11 contains L1-L3: a cemented negative/ED-positive doublet followed by a second ED positive meniscus. G12 contains L4-L5: a stationary cemented doublet. The variable air gap d5 separates G11 and G12.

G2 contains two cemented doublets, L6-L7 and L8-L9, separated by a 3.70 mm air gap. This group has the strongest negative net power in the system and moves imageward during close focusing. The small 3.70 mm air gap between surfaces 11 and 12 is the binding semi-diameter constraint in the rendered data file.

GL begins with the cemented doublet L10-L11, followed by a large 46.50 mm air space, L12, a 0.40 mm air space, and the final positive meniscus L13. The patent places the aperture stop S between G2 and GL and a flare stop FS inside GL. Because Table 9 does not give the exact axial split of the aperture-stop position inside d14, the data file inserts STO in d14 for rendering while preserving the total patent d14.

All optical surfaces are spherical. No aspherical-surface section is included because neither the patent prescription nor the figure gives any aspherical coefficients.

## Element-by-Element Analysis

### L1 - Negative Meniscus, convex to object, cemented with L2

nd = 1.80384, νd = 33.89. Glass: unmatched dense lanthanum-flint class, patent code 804/339. f = -189.7 mm.

L1 is the negative flint member of the opening achromat. Its high refractive index and low Abbe number make it the dispersive partner for the ED crown L2. The two positive radii form a negative meniscus that is convex to the object side.

### L2 - Biconvex Positive ED element, cemented with L1

nd = 1.49782, νd = 82.52. Glass: J-FKH1-class Hikari FK fluorophosphate / ED glass. f = +122.5 mm.

L2 supplies the principal positive power of the first cemented doublet while reducing secondary spectrum. It is treated as a catalog-resolvable FK-class ED glass, but not as a named Nikon-specific melt because the patent publishes nd, νd, and ng rather than a glass trade name.

### L3 - Positive Meniscus ED element

nd = 1.49782, νd = 82.52. Glass: J-FKH1-class Hikari FK fluorophosphate / ED glass. f = +171.5 mm.

L3 repeats the low-index, high-Abbe ED glass used in L2 and completes the positive G11 sub-group. Its front radius is much stronger than its rear radius, so it acts as a front-subgroup collector while keeping chromatic error low before the floating focus separation at d5.

### L4 - Negative Meniscus, convex to object, cemented with L5

nd = 1.79631, νd = 40.90. Glass: unmatched lanthanum-flint class, patent code 796/409. f = -104.5 mm.

L4 is the negative member of the stationary G12 cemented doublet. The glass is a high-index lanthanum-family flint by code and dispersion, but no public catalog entry used for this review matched closely enough to justify a specific vendor designation.

### L5 - Positive Meniscus, convex to object, cemented with L4

nd = 1.60311, νd = 60.64. Glass: S-BSM14 (OHARA). f = +71.7 mm.

L5 is the crown member of the G12 doublet. With L4 it forms a weak positive doublet of f = +243.6 mm. G12 remains stationary in the patent focus model and conditions the ray bundle entering the negative G2 group.

### L6 - Negative Meniscus, convex to object, cemented with L7

nd = 1.62280, νd = 57.03. Glass: S-BSM10-class (OHARA, close). f = -60.4 mm.

L6 starts the first cemented doublet in G2. Its steep rear junction surface at R10 = 31.4573 mm gives it strong negative standalone power while the full L6-L7 doublet is only weakly negative in situ.

### L7 - Positive Meniscus, convex to object, cemented with L6

nd = 1.80384, νd = 33.89. Glass: unmatched dense lanthanum-flint class, same patent code as L1. f = +73.7 mm.

L7 is the positive high-index member of the first G2 doublet. The L6-L7 cemented pair computes to f = -275.8 mm; by itself it is not the dominant negative component, but it participates in balancing coma and chromatic error before the stronger L8-L9 pair.

### L8 - Positive Meniscus, concave to object, cemented with L9

nd = 1.80518, νd = 25.41. Glass: S-TIH6 (OHARA). f = +159.6 mm.

L8 is a dense flint positive meniscus with both radii negative. It forms the front member of the principal negative doublet in G2. Its very low Abbe number supplies strong dispersive leverage at the L8-L9 cemented interface.

### L9 - Biconcave Negative, cemented with L8

nd = 1.62041, νd = 60.14. Glass: S-BSM16-class (OHARA, close). f = -42.9 mm.

L9 is the strongest standalone negative element in the design. The L8-L9 doublet computes to f = -57.7 mm and is the dominant contributor to G2's net f = -48.0 mm. Its negative power is also central to the low positive surface-by-surface Petzval sum.

### L10 - Negative Meniscus, convex to object, cemented with L11

nd = 1.68893, νd = 31.08. Glass: S-TIM28 (OHARA). f = -107.3 mm.

L10 opens the fixed last group GL. Its front surface is very weakly curved, while the cemented junction to L11 is much stronger. This negative flint member helps achromatize the strong positive relay element L11.

### L11 - Biconvex Positive, cemented with L10

nd = 1.62041, νd = 60.14. Glass: S-BSM16-class (OHARA, close). f = +52.5 mm.

L11 is the strongest positive element in GL. The L10-L11 cemented doublet computes to f = +99.2 mm and reconverges the beam from the negative G2 group. It is followed by the large 46.50 mm air space that contains the patent's flare-stop location.

### L12 - Negative Meniscus, concave to object; patent GLP

nd = 1.77279, νd = 49.45. Glass: S-LAH66-class (OHARA, close). f = -113.4 mm.

L12 is the patent-designated vibration-reduction group GLP. The element is a single negative meniscus located after the large GL air space and on the image side of the aperture stop. In the non-VR production lens, this element is fixed and functions as a rear field and aberration corrector.

The catalog label is class-level rather than a direct S-LAH66 assertion: S-LAH66 is close in code but not exact at the patent's nd and νd.

### L13 - Positive Meniscus, convex to object

nd = 1.54814, νd = 45.87. Glass: S-TIL1-class (OHARA, close). f = +177.1 mm.

L13 is the final positive meniscus before the 58.809 mm back focus. It provides final convergence and residual field correction after the L12 negative meniscus.

## Glass Identification / Selection

The patent publishes nd, νd, and ng values, not glass names. Catalog names below are therefore assigned only where the published data matches an authoritative manufacturer catalog closely enough. Where the match is not exact, the file uses a class label rather than an asserted exact glass.

| Element | Patent nd | Patent νd | Working identification | Match status | Role |
|---|---:|---:|---|---|---|
| L1 | 1.80384 | 33.89 | Unmatched dense lanthanum flint, 804/339 code | Unmatched | Negative flint member of front ED doublet |
| L2 | 1.49782 | 82.52 | J-FKH1-class FK fluorophosphate (Hikari) | Close / catalog-class | ED positive element |
| L3 | 1.49782 | 82.52 | J-FKH1-class FK fluorophosphate (Hikari) | Close / catalog-class | ED positive element |
| L4 | 1.79631 | 40.90 | Unmatched lanthanum flint, 796/409 code | Unmatched | G12 negative doublet member |
| L5 | 1.60311 | 60.64 | S-BSM14 (OHARA) | Exact to listed nd/νd | G12 crown partner |
| L6 | 1.62280 | 57.03 | S-BSM10-class (OHARA) | Close | G2 negative meniscus |
| L7 | 1.80384 | 33.89 | Unmatched dense lanthanum flint, 804/339 code | Unmatched | G2 high-index partner |
| L8 | 1.80518 | 25.41 | S-TIH6 (OHARA) | Close / essentially exact | Dense flint in dominant G2 doublet |
| L9 | 1.62041 | 60.14 | S-BSM16-class (OHARA) | Close, not exact νd | G2 negative crown member |
| L10 | 1.68893 | 31.08 | S-TIM28 (OHARA) | Close / essentially exact | GL flint member |
| L11 | 1.62041 | 60.14 | S-BSM16-class (OHARA) | Close, not exact νd | GL positive crown member |
| L12 | 1.77279 | 49.45 | S-LAH66-class (OHARA) | Close, not exact | Patent VR/GLP element |
| L13 | 1.54814 | 45.87 | S-TIL1-class (OHARA) | Close, not exact νd | Rear field corrector |

S-BSM14 is an exact match to the OHARA catalog values used here. S-TIH6 and S-TIM28 are close enough to use as specific OHARA glasses. S-BSM10, S-BSM16, S-LAH66, and S-TIL1 are retained only as class or close matches because their catalog Abbe numbers differ slightly from the patent table. L1/L7 and L4 remain unmatched rather than being forced into speculative lanthanum-glass names.

The chromatic strategy is conventional for a high-quality 200 mm macro: ED positive elements in the front group reduce secondary spectrum, and each cemented doublet pairs a lower-Abbe flint-like member with a higher-Abbe crown-like member. Because the patent does not publish partial-dispersion deviation, the analysis avoids making a quantitative apochromatic claim.

## Focus Mechanism

The patent focus system is a floating internal-focus design. In the patent coordinate system, G12 and GL remain fixed. G11 and G2 move relative to those fixed groups as the lens focuses from infinity to 1:1.

| Focus state | d5: G11-G12 | d8: G12-G2 | d14: G2-GL | Bf | Paraxial image magnification |
|---|---:|---:|---:|---:|---:|
| Infinity | 6.64330 mm | 5.14048 mm | 45.12496 mm | 58.809 mm | 0 |
| β = -0.5 | 14.20990 mm | 17.75138 mm | 32.51406 mm | 58.809 mm | -0.500 |
| β = -1.0 | 6.64330 mm | 37.14078 mm | 13.12466 mm | 58.809 mm | -1.000 |

G2 moves monotonically imageward: d8 increases by 32.000 mm from infinity to 1:1 while d14 decreases by the same amount. G11 is non-monotonic: d5 increases at β = -0.5 and returns to its infinity value at β = -1.0. That mid-focus excursion is an important CRC/floating correction and is documented here, even though the companion `.data.ts` endpoint model cannot encode the intermediate d5 peak.

The independently computed object distance at β = -1.0 is WD = 272.364 mm from the object to the first surface, giving WD/f = 1.3618. Adding the first-surface-to-image track gives an object-to-image distance of 495.281 mm, which rounds to the production 0.5 m minimum-focus specification.

## Image Stabilization / Patent VR Group

In Table 9, the moving vibration-reduction group is GLP = L12. The patent gives a maximum GLP decenter of 0.70 mm at infinity, β = -0.5, and β = -1.0, with image motion of -0.396 mm. The corresponding ratio is ΔSLP/|fLP| = 0.0062 using fLP = -113.36 mm.

This is a patent function only. The production AF Micro-Nikkor 200mm f/4D IF-ED does not include optical vibration reduction, so the data file models L12 as an ordinary fixed element.

## Verification Summary

All load-bearing first-order quantities below were recomputed from the Table 9 surface prescription with an independent Python paraxial matrix trace. The Petzval value uses the surface-by-surface sum, Σ φ/(n n'), not an element-level thin-lens approximation.

| Quantity | Computed | Patent / table value | Result |
|---|---:|---:|---|
| Infinity EFL | 199.996 mm | 200 mm / 199.99680 mm | Match |
| Back focal distance | 58.808 mm | 58.809 mm | Match |
| Total track at infinity and 1:1 | 222.918 mm | From Table 9 spacings | Match |
| Paraxial EFL at β = -0.5 | 151.179 mm | Not separately tabulated | Derived |
| Paraxial EFL at β = -1.0 | 102.126 mm | Not separately tabulated | Derived |
| G1 focal length | +80.000 mm | +80.0 mm | Match |
| G2 focal length | -48.000 mm | -48.0 mm | Match |
| GL focal length | +119.999 mm | +120.0 mm | Match |
| GLP / L12 focal length | -113.360 mm | -113.36 mm | Match |
| G11 focal length | +115.000 mm | Not separately tabulated | Derived |
| G12 focal length | +243.619 mm | Not separately tabulated | Derived |
| L1-L2 cemented focal length | +344.275 mm | Not separately tabulated | Derived |
| L4-L5 cemented focal length | +243.619 mm | Not separately tabulated | Derived |
| L6-L7 cemented focal length | -275.782 mm | Not separately tabulated | Derived |
| L8-L9 cemented focal length | -57.677 mm | Not separately tabulated | Derived |
| L10-L11 cemented focal length | +99.196 mm | Not separately tabulated | Derived |
| G2 travel Δ | 32.000 mm | 32.0 mm | Match |
| WD/f at 1:1 | 1.3618 | 1.3618 | Match |
| Object-to-image distance at 1:1 | 495.281 mm | Production spec rounds to 0.5 m | Match |
| ΔSLP/|fLP| | 0.00618 | 0.0062 | Match |
| Surface-by-surface Petzval sum | +0.0004819 mm^-1 | Not tabulated | Derived |
| EFL × Petzval sum | +0.09637 | Not tabulated | Derived |

The Table 9 condition list gives L = 6.0 and L/f = 0.03. If L is interpreted strictly as the axial thickness of the Table 9 GLP element L12, the value should be 2.5 mm and L/f = 0.0125. The table's 6.0 mm value matches L13's center thickness, not L12's. The discrepancy is retained as a patent-table inconsistency, not silently corrected. Both interpretations still satisfy the patent's stated upper bound for L/f.

## Data-File Notes

The companion data file transcribes the patent surfaces at the patent scale with no focal-length scaling. The aperture stop is inserted into d14 because the patent identifies the stop location only qualitatively. The total d14 distance is preserved by splitting it into surface 14 -> STO and STO -> surface 15.

The patent does not publish semi-diameters. The data file therefore uses inferred semi-diameters suitable for rendering, constrained by sd/|R|, element edge thickness, element front/rear diameter ratio, and cross-gap sag intrusion. These inferred values are not Nikon manufacturing diameters. The surface 11 -> 12 air gap is the tightest inferred-aperture constraint and remains just within the 90% cross-gap sag-intrusion limit.

No sensor cover glass, filter, mount glass, or mechanical aperture-blade geometry is included.

## Sources

- US 5,751,485, Kenzaburo Suzuki / Nikon Corporation, Ninth Embodiment, FIG. 9 and Table 9.
- Nikon USA, AF Micro-Nikkor 200mm f/4D IF-ED product page and specifications.
- Hikari, J-FKH1 optical-glass data sheet.
- OHARA optical-glass data sheets for S-BSM10, S-BSM14, S-BSM16, S-TIH6, S-TIM28, S-LAH66, and S-TIL1.
