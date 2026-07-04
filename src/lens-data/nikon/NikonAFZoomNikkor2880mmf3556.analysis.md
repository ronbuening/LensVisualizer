## Patent Reference and Design Identification

**Patent:** JP H11-030748 A / JPH1130748A  
**Application Number:** JP H09-199251 / 特願平9-199251  
**Filed:** July 9, 1997  
**Published:** February 2, 1999  
**Inventor:** Keiji Moriyama (守山啓二)  
**Applicant:** Nikon Corporation (株式会社ニコン)  
**Title:** Standard Zoom Lens / 標準ズームレンズ  
**Embodiment analyzed:** Example 1 (第1実施例), Table 1

The transcribed prescription is Example 1 of JP H11-030748 A. The patent describes a compact, low-cost standard zoom lens for SLR use, built from a negative first zoom group and a positive second zoom group. Zooming is performed by varying the separation between G1 and G2, and the most object-side lens of G1 is positive to correct wide-angle distortion (¶0007, ¶0010).

The production identification is strongest for the later AI AF Zoom-Nikkor 28-80mm f/3.5-5.6 D, the 1999 eight-element version. The match is convergent rather than absolute: Example 1 gives $f = 28.8$-$78.0$ mm, $FNO = 3.57$-$5.81$, maximum plotted image height $Y = 21.60$ mm, eight air-spaced spherical elements, Nikon as applicant, and Moriyama as inventor. Nikon's historical product chronology lists an AF Zoom-Nikkor 28-80mm f/3.5-5.6D in 1999, and Nikon's own historical lens article gives the contemporary AI AF Zoom-Nikkor 28-80mm f/3.5-5.6D as an 8-group, 8-element lens with 58 mm filter, 65 mm maximum diameter, 88 mm length, and 265 g weight.

The earlier 1995 AF-D version is not treated as the same optical prescription because it is generally documented as a seven-element design. The 2001 AF Zoom-Nikkor 28-80mm f/3.3-5.6G is also a distinct successor: Nikon's Moriyama account describes it as a later six-element, six-group G-type lens. This file therefore identifies the patent embodiment as the closest documented match to the 1999 eight-element AF-D lens, not as a proven surface-for-surface production release.

## Optical Architecture

The lens is a negative-positive two-group standard zoom for 135-format SLR cameras. It contains eight individual, air-spaced spherical glass elements. G1 is a negative front zoom group; G2 is a positive rear zoom group. The patent explicitly presents the concave-convex two-group arrangement as the compact standard-zoom type suited to SLR use (¶0001-¶0002, ¶0010).

G1 consists of L1 through L4. L1 is a weak positive biconvex corrector, L2 and L3 are object-convex negative menisci, and L4 is an object-convex positive meniscus. The positive L1 distinguishes this design from more aggressively simplified kit-zoom layouts that place a negative lens first and rely on an asphere; the patent instead uses L1's shape and low index to reduce wide-end distortion while avoiding aspherical manufacturing cost and sensitivity (¶0005, ¶0013-¶0015).

G2 consists of L5 through L8 in a positive-positive-negative-positive sequence. L5 is biconvex, L6 is an object-convex positive meniscus, L7 is biconcave, and L8 is biconvex. The iris diaphragm is placed approximately midway between L5 and L6, not in the main G1-G2 zoom gap. The patent states that this stop placement prevents excessive front-element diameter and avoids mechanically constraining the zoom groups (¶0021-¶0022).

The patent also specifies an additional fixed-diameter stop on the image side of G2. That auxiliary stop moves along the optical axis during zooming and blocks excess light bundles that would otherwise contribute upper coma (¶0025). The data file does not model this auxiliary stop because the patent gives no numerical axial location or aperture diameter for it.

Zooming is performed by changing the G1-G2 air gap $d_8$. From wide to mid and then to telephoto, the patent states that G1 first moves slightly toward the image side and then substantially toward the object side, while G2 moves monotonically toward the object side (¶0027). With the optically corrected image positions used in the data file, the front-vertex-to-image tracks are 130.698923 mm, 127.435564 mm, and 142.084686 mm at 28.8, 50.0, and 78.0 mm respectively. These are optical model tracks, not a mechanical barrel-length claim.

## Element-by-Element Analysis

### L1 — Biconvex Positive

nd = 1.51454, νd = 54.55. Glass: 515546 - unmatched light crown. f = +231.956 mm.

L1 is a weak positive front corrector. Its object-side surface is much more strongly curved than its image-side surface, satisfying the patent's L1 shape-factor condition. It bends the off-axis chief ray inward before the ray reaches the stronger negative surfaces of L2 and L3, reducing wide-end distortion without an aspherical surface.

The element is deliberately low index. Condition (3), $N_1 < 1.53$, limits L1 power because excessive positive power in this position would overcorrect wide-end field curvature. Its long standalone focal length also means that it has only a modest Petzval and chromatic role compared with the negative menisci behind it.

### L2 — Negative Meniscus, convex to object

nd = 1.79668, νd = 45.37. Glass: 797454 - high-index lanthanum flint class. f = -35.468 mm.

L2 is the principal negative element in G1. The rear surface has the shorter radius and carries most of the element's negative refraction. The high index keeps the surface curvatures moderate for the required negative power, while the Abbe number places the element in flint territory despite the lanthanum-class index.

In surface-by-surface Petzval accounting, L2 contributes a strong negative term. The patent's condition (4) controls the reciprocal-index balance among L2, L3, and L4 so that the front group does not drive the Petzval sum too low (¶0017-¶0018).

### L3 — Negative Meniscus, convex to object

nd = 1.79668, νd = 45.37. Glass: 797454 - high-index lanthanum flint class. f = -63.191 mm.

L3 is the second negative meniscus of G1 and uses the same glass as L2. Splitting the negative power over L2 and L3 reduces the aberration burden on either element and gives the designer an additional control surface for telephoto-end spherical aberration.

Condition (5), $0.8 < r_6/\lvert f_1\rvert < 1.2$, specifically constrains L3's image-side radius. Example 1 gives 0.941, which is close to the center of the permitted interval and consistent with the patent's stated goal of controlling spherical aberration during the G1 reversal toward the telephoto end (¶0019).

### L4 — Positive Meniscus, convex to object

nd = 1.86074, νd = 23.01. Glass: 861230 - dense flint class. f = +69.647 mm.

L4 closes the negative zoom group with positive power. Its dense flint glass provides substantial positive refraction in a compact meniscus form and offsets part of the negative Petzval contribution from L2 and L3.

The patent's condition (6) constrains L4 to an object-convex positive meniscus with stronger curvature on the object side. Example 1 gives $(r_7+r_8)/(r_8-r_7)=2.979$, inside the specified 1.5-3.5 interval. The role of this condition is telephoto-end spherical-aberration balance (¶0020).

### Iris Diaphragm — between L5 and L6

The iris lies approximately halfway between L5 and L6. The data file represents this by splitting the patent's 2.50 mm d10 air space into 1.25 mm before the stop and 1.25 mm after the stop. The split is optically neutral for paraxial EFL and back-focus calculations, but it places the rendered stop in the location described by the patent.

### L5 — Biconvex Positive

nd = 1.61720, νd = 54.01. Glass: 617540 - SSK-class crown. f = +39.929 mm.

L5 is the first element of G2 and begins the rear group's converging action after the large G1-G2 air separation. It is the strongest positive lens ahead of the diaphragm, and its object-side surface is much more strongly curved than its rear surface.

The moderate-index, moderate-dispersion crown-class glass gives a chromatic counterpart to the dense flint L7 that follows. L5 also helps determine the principal-point behavior of G2, a critical issue in a compact two-group zoom whose rear group must supply both power and SLR back-focus clearance.

### L6 — Positive Meniscus, convex to object

nd = 1.61720, νd = 54.01. Glass: 617540 - SSK-class crown. f = +63.623 mm.

L6 follows the iris and continues the positive power of G2. It uses the same glass as L5, splitting the rear group's positive crown component across two elements rather than forcing L5 to carry all of the converging power.

The meniscus form moderates spherical aberration in the post-stop ray bundle. In chromatic terms, L5 and L6 form the positive crown-class side of the rear-group correction sequence, balanced primarily by L7.

### L7 — Biconcave Negative

nd = 1.80518, νd = 25.41. Glass: Dense flint / SF6-family class (805/254). f = -18.140 mm.

L7 is the strongest standalone element in the prescription. It is a dense-flint biconcave lens placed after the two positive crown-class elements in G2. Its primary optical roles are longitudinal chromatic correction and Petzval balance.

The image-side surface has the shortest radius in the lens. This surface supplies a large part of the negative rear-group power and restrains residual color and field curvature before the final positive relay lens.

### L8 — Biconvex Positive

nd = 1.61293, νd = 36.98. Glass: Moderate-dispersion flint class (613/370). f = +29.126 mm.

L8 is the final positive element and completes the relay to the image plane. It uses a moderate-dispersion flint rather than the SSK-class crown used in L5 and L6, which gives the rear group an additional chromatic trim after L7.

Its nearly symmetric biconvex form gives strong positive power without making one surface overwhelmingly dominant. The final surface contributes a positive Petzval term, helping the whole system settle at a small positive Petzval sum.

## Glass Identification and Selection

The patent gives nd and νd values but no catalog glass names. The data file therefore uses class-level glass labels unless a public catalog identity is independently necessary. This avoids treating a modern catalog match as if it were a patent-disclosed material.

| Element(s) |      nd |    νd | Identification used                              | Role                                        |
| ---------- | ------: | ----: | ------------------------------------------------ | ------------------------------------------- |
| L1         | 1.51454 | 54.55 | 515546 - unmatched light crown                   | Weak front distortion corrector             |
| L2, L3     | 1.79668 | 45.37 | 797454 - high-index lanthanum flint class        | Main G1 negative power                      |
| L4         | 1.86074 | 23.01 | 861230 - dense flint class                       | Positive G1 Petzval balance                 |
| L5, L6     | 1.61720 | 54.01 | 617540 - SSK-class crown                         | Positive rear-group crown pair              |
| L7         | 1.80518 | 25.41 | Dense flint / SF6-family class (805/254)         | Rear-group chromatic and Petzval correction |
| L8         | 1.61293 | 36.98 | Moderate-dispersion flint class (613/370)        | Final relay and color trim                  |

The palette is conventional and cost-oriented. The patent prescription contains no ED glass, fluorite, anomalous-partial-dispersion glass, cemented groups, or aspherical surfaces. Two glass types are reused: L2/L3 share the high-index flint class, and L5/L6 share the SSK-class crown.

## Focus Mechanism

The patent publishes only zoom-position spacings at infinity. No close-focus prescription, floating-focus table, magnification table, or close-range aberration correction mechanism is given. The data file therefore uses a unit-focus approximation: internal spacings remain fixed at each zoom position, and focusing is represented by changing the final image-plane distance.

The data file uses 0.4 m as the close-focus UI endpoint for the likely 1999 AF-D production lens. That value is not patent-derived; it is a production-lens cross-check from secondary documentation. The close-focus BFDs below are paraxial unit-focus solutions with the 0.4 m distance measured from the image plane, which is the photographic minimum-focus-distance convention.

| Zoom position | Infinity BFD used in data file | Close-focus BFD, 0.4 m unit-focus approximation |
| ------------: | -----------------------------: | ----------------------------------------------: |
|       28.8 mm |                   45.756923 mm |                                    48.706768 mm |
|       50.0 mm |                   65.249564 mm |                                    75.071976 mm |
|       78.0 mm |                   90.996686 mm |                                   123.596601 mm |

These close-focus values are a rendering approximation, not patent close-focus data. They should not be used as evidence of the actual production lens's floating or mechanical focus behavior.

## Conditional Expressions

The patent defines seven conditional expressions, and Example 1 satisfies all seven.

| Condition | Expression                          | Example 1 value | Status    |
| --------- | ----------------------------------- | --------------: | --------- |
| (1)       | $1.2 < \lvert f_1\rvert/f_w < 1.48$ |           1.424 | Satisfied |
| (2)       | $0.55 < (r_1+r_2)/(r_2-r_1) < 0.8$  |           0.746 | Satisfied |
| (3)       | $N_1 < 1.53$                        |         1.51454 | Satisfied |
| (4)       | $(1/N_2+1/N_3)/2 - 1/N_4 < 0.03$    |         0.01916 | Satisfied |
| (5)       | $0.8 < r_6/\lvert f_1\rvert < 1.2$  |           0.941 | Satisfied |
| (6)       | $1.5 < (r_7+r_8)/(r_8-r_7) < 3.5$   |           2.979 | Satisfied |
| (7)       | $1.2 < \sqrt{f_w f_t}/f_2 < 1.35$   |           1.257 | Satisfied |

The rounded values agree with the patent's condition table for Example 1.

## Verification Summary

A fresh paraxial y-nu trace was run from the Table 1 prescription using the patent's radii, thicknesses, refractive indices, and $d_8$ zoom spacings. The computed EFL and group focal lengths reproduce the patent's stated values.

| Quantity        | Patent Table 1 | Computed from prescription | Result   |
| --------------- | -------------: | -------------------------: | -------- |
| EFL, wide       |       28.80 mm |               28.798973 mm | Match    |
| EFL, mid        |       50.00 mm |               49.997771 mm | Match    |
| EFL, tele       |       78.00 mm |               77.998495 mm | Match    |
| G1 focal length |      -41.00 mm |              -40.999300 mm | Match    |
| G2 focal length |       37.70 mm |               37.699526 mm | Match    |
| Petzval sum     |    not printed |            +0.002703 mm^-1 | Verified |
| Petzval radius  |    not printed |                  +369.9 mm | Verified |

The patent defines Bf as back focus in the Table 1 legend, and Table 1 prints Bf values of 46.553, 57.664, and 72.340 mm for the wide, mid, and tele positions. Those printed Bf values are not the paraxial image distances obtained from the same prescription.

| Zoom position | Patent printed Bf | Paraxial BFD required for focus | Difference |
| ------------: | ----------------: | ------------------------------: | ---------: |
|       28.8 mm |         46.553 mm |                    45.756923 mm |  +0.796 mm |
|       50.0 mm |         57.664 mm |                    65.249564 mm |  -7.586 mm |
|       78.0 mm |         72.340 mm |                    90.996686 mm | -18.657 mm |

A finite spherical D-line trace was also run at representative full-aperture axial ray heights. The finite-ray focus positions remain close to the paraxial BFDs, with approximate full-aperture results of 45.674 mm, 65.574 mm, and 91.027 mm at wide, mid, and tele respectively. This confirms that the mid and tele Bf discrepancy is not a finite-ray best-focus convention. The same pattern occurs in Examples 2-4: their EFLs reproduce correctly, while their printed mid and tele Bf rows are shorter than the traced image distances.

For this reason, the data file preserves the patent prescription and $d_8$ zoom spacings but uses the independently traced BFDs for the rendered model. The printed Bf row is documented as a published inconsistency rather than silently copied into an optically defocused data file.

Standalone thick-lens focal lengths were recomputed as follows.

| Element | Focal length |
| ------- | -----------: |
| L1      |  +231.956 mm |
| L2      |   -35.468 mm |
| L3      |   -63.191 mm |
| L4      |   +69.647 mm |
| L5      |   +39.929 mm |
| L6      |   +63.623 mm |
| L7      |   -18.140 mm |
| L8      |   +29.126 mm |

The patent does not publish clear semi-diameters. The data file uses estimated semi-diameters constrained by paraxial marginal/chief-ray envelopes, edge-thickness sanity checks, element diameter ratios, renderer rim-angle limits, cross-gap sag clearance, and the production 58 mm filter-thread envelope. Because the actual mechanical apertures and vignetting stops are not published, these semi-diameters are rendering apertures rather than catalog clear-aperture data.

## Design Heritage and Context

The patent belongs to Nikon's line of concave-convex two-group standard zooms. Nikon's later historical account identifies Kiyoshi Hayashi and Keiji Moriyama as central figures in this AF-era kit-zoom lineage. Moriyama's account places the 1999 revised AI AF Zoom Nikkor 28-80mm f/3.5-5.6D immediately before the 2001 six-element AF Zoom Nikkor 28-80mm f/3.3-5.6G.

The patent's design philosophy is conservative: avoid aspheres, use a positive L1 to correct wide-end distortion, constrain the front group and rear group with simple conditional expressions, and keep the construction to eight air-spaced spherical elements. The result is a compact all-spherical standard zoom patent design with a 2.71x focal-length ratio and 135-format coverage.

## Sources

- JP H11-030748 A / JPH1130748A, "Standard Zoom Lens," Nikon Corporation, filed July 9, 1997, published February 2, 1999. Primary source for the prescription, conditional expressions, element layout, stop placement, Bf table, and design rationale. https://patents.google.com/patent/JPH1130748A/en
- Nikon, "NIKKOR - The Thousand and One Nights No.4," comparison entry listing the then-current AI AF Zoom-Nikkor 28-80mm f/3.5-5.6D as an 8-group, 8-element lens with 58 mm filter, 65 mm diameter, 88 mm length, and 265 g weight. https://imaging.nikon.com/imaging/information/story/0004/
- Nikon, "NIKKOR - The Thousand and One Nights No.63," Moriyama's account of the 28-80 mm kit-zoom development sequence, including the 1999 revised AI AF Zoom Nikkor 28-80mm f/3.5-5.6D and the 2001 six-element G-type successor. https://imaging.nikon.com/imaging/information/story/0063/
- Nikon, "Our Product History: 1990's," product chronology listing the AF Zoom-Nikkor 28-80mm f/3.5-5.6D in 1999. https://imaging.nikon.com/imaging/information/products_history/1990/
- Ken Rockwell, "Nikon 28-80mm f/3.5-5.6 AF-D," used only as a secondary cross-check for the 0.4 m close-focus listing and eight-element spherical construction. https://www.kenrockwell.com/nikon/2880.htm
