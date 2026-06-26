## Patent Reference and Design Identification

**Patent:** US 7,161,746 B2
**Filed:** December 10, 2004; continuation of application Ser. No. 10/631,760, filed August 1, 2003
**Granted:** January 9, 2007
**Priority:** JP 2002-224994 and JP 2002-225001, August 1, 2002; JP 2003-051432, February 27, 2003; JP 2003-197315, July 15, 2003
**Inventor:** Keiko Mizuguchi
**Assignee:** Nikon Corporation, Tokyo
**Title:** Fisheye Lens
**Embodiment analyzed:** Example 9, Table 9 and FIG. 17

US 7,161,746 B2 discloses fisheye lenses for SLR digital cameras with an image size smaller than the 35 mm film frame. Example 9 is the embodiment corresponding most closely to the Nikon AF DX Fisheye-Nikkor 10.5mm f/2.8G ED.

The identification rests on convergent evidence rather than a single nominal value. Table 9 gives f = 10.56 mm, FNO = 2.88, 2ω = 180°, Bf = 41.1 mm, and TL = 103.7 mm. Nikon's official product specification gives a 10.5 mm focal length, f/2.8 maximum aperture, Nikon DX format coverage, 180° angle of view, 10 elements in 7 groups, one ED element, one aspherical element, and 0.14 m minimum focus distance. Nikon's product-history table separately identifies the AF DX Fisheye-Nikkor 10.5mm f/2.8G ED as a 2003 DX fisheye with 10 elements in 7 groups, one ED element, and CRC close-range correction.

Example 9 has the same 10-element / 7-component glass layout and contains one rear positive element with nd = 1.49700 and νd = 81.61, placing it in the 497/816 ED fluorophosphate class. The patent example is not identical to every published production detail: Nikon lists one aspherical lens element, while Example 9 provides only spherical or plane surfaces and no aspherical coefficients. The data file therefore transcribes the patent embodiment, not a reconstructed production asphere.

## Optical Architecture

The design is a two-group retrofocus diagonal fisheye. A negative front group G1 is followed by an aperture stop and a positive rear group G2. The paraxial focal lengths computed from the corrected patent prescription are G1 = -15.03 mm and G2 = +24.44 mm. The full system EFL is 10.565 mm, and the computed back focal distance is 41.114 mm, giving Bf/f = 3.89. This is the core SLR-fisheye problem identified by the patent: a short DX fisheye focal length still requires a back focal distance long enough for an SLR mirror box.

G1 contains five components in order from the object: two negative meniscus singlets, one positive meniscus singlet, one cemented negative doublet, and one weak cemented negative doublet. G2 contains a cemented positive doublet and a final biconvex positive singlet. The stop is placed in the air space between G1 and G2. A rear positive relay after the stop recovers the divergent front-group beam and produces the long back focus.

The patent defines fisheye distortion as a deviation from an equisolid-angle projection, printed as y = f sin(ω/2) in the U.S. text. The data file therefore declares a fisheye-equisolid projection so that viewer field metadata follows the patent's stated projection reference rather than a rectilinear paraxial field angle.

## Element-by-Element Analysis

### L1 - Negative Meniscus, convex to object

nd = 1.62041, νd = 60.29. Glass: S-BSM16 (OHARA) - SK crown. f = -33.3 mm.

L1 is the large front negative meniscus, with R1 = +85.00 mm and R2 = +16.45 mm. It accepts the widest ray cone in the design and begins the strong negative front-group refraction needed for 180° coverage. Its moderate-index, relatively low-dispersion crown glass keeps the first large negative component from imposing excessive chromatic power.

The rear surface is much more strongly curved than the front surface, so the element is a strong diverger despite the meniscus form. The large clear aperture demanded by this surface is one of the limiting features for the semi-diameter model because R2 is only 16.45 mm.

### L2 - Negative Meniscus, convex to object

nd = 1.81600, νd = 46.63. Glass: S-LAH59 (OHARA) - dense lanthanum flint-type glass. f = -37.5 mm.

L2 is a second negative meniscus, R1 = +61.18 mm and R2 = +20.15 mm. It shares the front-group diverging work with L1. The high refractive index allows useful negative power with less surface curvature than a lower-index crown would require.

The Abbe number is below the usual crown/flint boundary, so the glass is better described as a dense lanthanum flint-type glass in optical behavior even though it is part of an LAH family. Its placement immediately after L1 spreads the extreme entrance-angle bending over two components.

### L3 - Positive Meniscus, convex to image

nd = 1.72000, νd = 43.69. Glass: S-LAM52 (OHARA, NR) - lanthanum flint. f = +50.9 mm.

L3 is a positive meniscus with both radii negative, R1 = -204.00 mm and R2 = -31.26 mm. The stronger rear curvature gives the element positive power and begins to moderate the divergence before the cemented correction groups.

The appropriate Ohara catalog match is S-LAM52, not S-LAM51. Ohara lists S-LAM51 at nd = 1.70000 and νd = 48.08, whereas S-LAM52 is listed at nd = 1.72000 and νd = 43.69. The patent value therefore corresponds to S-LAM52 exactly within the precision of the table.

### L4 - Cemented Negative Doublet

**L4a:** nd = 1.77250, νd = 49.61. Glass: S-LAH66 (OHARA) - dense lanthanum flint-type glass. f = -10.1 mm.  
**L4b:** nd = 1.72825, νd = 28.46. Glass: S-TIH10 (OHARA) - dense titanium flint. f = +13.5 mm.  
**Net cemented focal length:** -56.2 mm.

L4 is a cemented negative doublet. The first element is strongly biconcave, with R = -27.00 / +11.48 mm. The second element is biconvex, sharing the +11.48 mm cemented interface and exiting at R = -55.84 mm. The negative element dominates the doublet's sign, while the positive high-dispersion element moderates chromatic error.

The dispersion separation across the cemented interface, νd = 49.61 versus 28.46, gives local correction of lateral color produced by the preceding negative menisci. The doublet remains net negative, preserving the front group's retrofocus role while reducing the aberration burden that would result from a single strong negative element.

### L5 - Cemented Weak Negative Doublet

**L5a:** nd = 1.51742, νd = 52.42. Glass: S-NSL36 (OHARA) - normal crown glass. f = +22.4 mm.  
**L5b:** nd = 1.83481, νd = 42.72. Glass: S-LAH55V (OHARA) - dense lanthanum flint-type glass. f = -21.1 mm.  
**Net cemented focal length:** -413.9 mm.

L5 is positioned immediately before the aperture stop. The first element is biconvex, R = +59.67 / -14.20 mm. The second element is a negative meniscus, R = -14.20 / -76.00 mm. The component is only weakly negative overall, so its role is chiefly aberration correction rather than primary power generation.

The large index step at the cemented interface, from nd = 1.51742 to nd = 1.83481, is important for Petzval control. The high-index negative member and lower-index positive member help reduce the net Petzval sum while preserving the long back focus.

### L6 - Cemented Positive Doublet with ED Positive Element

**L6a:** nd = 1.84666, νd = 23.78. Glass: S-TIH53 (OHARA) - very dense titanium flint. f = -34.7 mm.  
**L6b:** nd = 1.49700, νd = 81.61. Glass: 497/816 ED fluorophosphate class; exact N-PK52A / FCD1-class match, vendor unresolved. f = +25.9 mm.  
**Net cemented focal length:** +85.9 mm.

L6 is the first component of the positive rear group. The front element is a near-plano biconcave dense flint with R1 = -1732.00 mm and R2 = +29.90 mm. Its positive partner is a low-index, very high-Abbe ED fluorophosphate element with R = +29.90 / -21.55 mm. The pair is net positive.

The Abbe-number separation across this cemented interface is the largest in the design: 81.61 - 23.78 = 57.83. This makes L6 the principal chromatic correction component in the rear group. The patent does not name the glass vendor. SCHOTT N-PK52A and HOYA FCD1-type catalog data match the 1.49700 / 81.61 glass code closely or exactly; OHARA S-FPL51 is a near-equivalent at nd = 1.49700 with νd about 81.54, but it is not an exact match to the patent's Abbe number.

### L7 - Biconvex Positive Singlet

nd = 1.65160, νd = 58.54. Glass: S-LAL7Q (OHARA) - lanthanum crown. f = +34.8 mm.

L7 is a symmetric biconvex final element with R = +44.74 / -44.74 mm. It provides the remaining positive power needed to form the image at the long back focal distance. Its symmetric form also helps control coma for bundles passing through the rear group.

The glass is a moderate-index, relatively low-dispersion lanthanum crown. It gives useful positive power without the high chromatic burden of a dense flint final element.

## Glass Identification and Selection

The prescription uses a predominantly Ohara-like Japanese glass palette, but the ED element should not be forced into an Ohara label. Catalog matching was checked against manufacturer-published data. S-LAM51 is rejected for L3 because Ohara's own S-LAM51 listing does not match the patent's nd and νd; S-LAM52 does.

| Element | Patent nd | Patent νd | Catalog identification | Match note |
|---|---:|---:|---|---|
| L1 | 1.62041 | 60.29 | S-BSM16 (OHARA) | Exact |
| L2 | 1.81600 | 46.63 | S-LAH59 (OHARA) | nd exact; νd within 0.01 of catalog 46.62 |
| L3 | 1.72000 | 43.69 | S-LAM52 (OHARA, NR) | Exact; S-LAM51 does not match |
| L4a | 1.77250 | 49.61 | S-LAH66 (OHARA) | nd exact; νd within 0.01 of catalog 49.60 |
| L4b | 1.72825 | 28.46 | S-TIH10 (OHARA) | Exact |
| L5a | 1.51742 | 52.42 | S-NSL36 (OHARA) | nd exact; νd within 0.01 of catalog 52.43 |
| L5b | 1.83481 | 42.72 | S-LAH55V (OHARA) | nd exact; νd within 0.01 of catalog 42.73 |
| L6a | 1.84666 | 23.78 | S-TIH53 (OHARA) | Exact |
| L6b | 1.49700 | 81.61 | N-PK52A / FCD1-class ED fluorophosphate | Exact 497/816 class; vendor unresolved |
| L7 | 1.65160 | 58.54 | S-LAL7Q (OHARA) | Exact |

The chromatic strategy is conventional for a compact retrofocus fisheye: high-index negative components distribute the front-group divergence, while cemented crown/flint and ED/flint pairings reduce lateral color and axial color before the image plane. The L6a/L6b interface is the dominant chromatic correction pair because it combines the highest-dispersion element in the system with the lowest-dispersion element.

## Focus Mechanism

The patent states that when focusing from infinity to a close object, the lens moves toward the object side while increasing the distance between the front lens group and the rear lens group. Nikon describes the production lens as using CRC, a close-range correction system in which lens elements or groups move independently.

The patent does not publish finite-conjugate spacings for Example 9. The data file therefore retains only the corrected infinity prescription and does not invent a variable focus table. The production minimum focus distance is 0.14 m, and this value is used only for the catalog-level `closeFocusM` field.

## Aspherical Surfaces

Example 9 contains no aspherical coefficients and no aspherical surface labels. Table 9 lists only spherical radii and the plane aperture stop. The patent also states, as a preferred construction, that each lens surface of the front and rear lens groups may be spherical or plane to ease manufacture and adjustment.

This conflicts with the official production specification, which lists one aspherical lens element. The most conservative interpretation is that Example 9 is a close patent embodiment of the production lens but does not disclose the final production aspherical modification. The data file therefore uses `asph: {}` and does not assign an asphere to any surface.

## Chromatic Correction Strategy

Chromatic correction is distributed across three cemented components. L4 pairs S-LAH66 with S-TIH10, giving Δνd = 21.15. L5 pairs S-NSL36 with S-LAH55V, giving Δνd = 9.70. L6 provides the strongest chromatic correction, pairing S-TIH53 with the 497/816 ED fluorophosphate element for Δνd = 57.83.

The rear ED doublet is placed after the stop, where it can correct residual color from the highly divergent front group while also contributing positive power to the relay group. Because the patent publishes only nd and νd, any secondary-spectrum claim should be treated as inferred from catalog glass class rather than as a directly patented partial-dispersion specification.

## Conditional Expressions

The first embodiment defines five conditional expressions. With the corrected stop-to-G2 spacing described below, Example 9 satisfies the table values to patent rounding precision.

| Expression | Formula | Patent value | Computed value | Status |
|---|---|---:|---:|---|
| (1) | 4.0 <= Σd/f <= 10.0 | 5.930 | 5.930 | Match |
| (2) | 1.5 <= f2/f <= 4.0 | 2.320 | 2.315 | Rounds close |
| (3) | 0.5 < d1/f < 2.0 | 0.959 | 0.956 | Rounds close |
| (4) | 30 <= νRP - νRN <= 60 | 46.300 | 46.295 | Match |
| (5) | 0.2 <= nRN - nRP <= 0.45 | 0.270 | 0.272 | Rounds close |

Here Σd is the axial distance from the first lens surface to the last lens surface, f2 is the focal length of G2, and d1 is the air-space distance between G1 and G2. For Example 9, d1 is the sum of the surface-12 air gap and the stop-to-surface-14 air gap.

## Verification Summary

The patent's printed Table 9 spacing at the aperture stop is internally inconsistent. It prints the aperture-stop gap as d13 = 8.776 mm. Using the printed value gives EFL = 9.900 mm, BFD = 40.032 mm, and Σd/f = 6.151, not the patent's f = 10.56 mm, Bf = 41.1 mm, and Σd/f = 5.930.

The correction is obtained directly from the patent's own conditional expression (1): Σd = 5.930 x 10.56 = 62.6208 mm. The sum of all first-to-last-surface spacings except d13 is 56.1810 mm, so d13 must be 6.4398 mm. This corrected value also restores the paraxial EFL, BFD, and total track to patent rounding.

| Quantity | Printed d13 = 8.776 mm | Corrected d13 = 6.4398 mm | Patent value |
|---|---:|---:|---:|
| System EFL | 9.900 mm | 10.565 mm | 10.56 mm |
| Back focal distance | 40.032 mm | 41.114 mm | 41.1 mm |
| Σd/f using patent f | 6.151 | 5.930 | 5.930 |
| Total track from trace | 104.989 mm | 103.735 mm | 103.7 mm |
| G1 focal length | -15.028 mm | -15.028 mm | - |
| G2 focal length | +24.442 mm | +24.442 mm | - |
| Surface-by-surface Petzval sum | -1.984e-5 mm^-1 | -1.984e-5 mm^-1 | - |

The Petzval sum was computed surface by surface as φ/(n n'), not from thin-lens element approximations. The near-zero result is consistent with the patent's stated need to suppress curvature of field and astigmatism in a compact digital-SLR fisheye.

## Data-File Notes

The data file uses the corrected d13 = 6.4398 mm and the computed BFD = 41.114155 mm. It excludes the filter position and all sensor cover glass, consistent with the project data specification.

The patent does not publish semi-diameters for Example 9. The semi-diameters in the data file are therefore estimated from FIG. 17 and constrained by renderer-safe optical geometry. The chosen values satisfy sd/|R| < 0.90, front/rear element semi-diameter ratio <= 1.25, positive rim edge thickness for every element, and signed cross-gap sag intrusion <= 90% of the intervening air gap. The small 0.250 mm air separation between surfaces 6 and 7 is the controlling clearance constraint, so the L3/L4 clear apertures are intentionally conservative rather than copied from the apparent drawing height.

## Design Heritage and Context

The AF DX Fisheye-Nikkor 10.5mm f/2.8G ED was among the early Nikon lenses designed specifically around the smaller DX digital SLR format. The patent explains why a 35 mm film fisheye cannot simply be reused on a smaller digital image size while preserving 180° coverage: the shorter focal length required for the smaller diagonal makes the back-focal-length requirement proportionally more severe.

Example 9 answers that problem with a long-back-focus fisheye whose negative front group is strong enough for 180° coverage while the positive rear group recovers the beam at a Bf/f ratio near 3.9. The layout is not a miniature of a 35 mm film fisheye; it is a DX-format retrofocus fisheye with its own front-group power distribution and rear ED correction strategy.

## Sources

1. US Patent 7,161,746 B2, "Fisheye Lens," Keiko Mizuguchi, Nikon Corporation, granted January 9, 2007; Example 9, Table 9 and FIGS. 17-18.
2. Nikon USA, AF DX Fisheye-Nikkor 10.5mm f/2.8G ED official product page.
3. Nikon Imaging Japan, Nikon product history, NIKKOR lens table.
4. OHARA optical glass catalog pages for S-BSM16, S-LAH59, S-LAM52, S-LAH66, S-TIH10, S-NSL36, S-LAH55V, S-TIH53, and S-LAL7Q.
5. SCHOTT optical glass catalog page for N-PK52A and HOYA/FCD1-class cross-reference data for 497/816 ED fluorophosphate glass.
