# Canon EF 200mm f/2L IS USM — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** JP 2008-145584 A (Japan)
**Application Number:** 特願2006-330661 (P2006-330661)
**Filed:** December 7, 2006 (Heisei 18)
**Published:** June 26, 2008 (Heisei 20)
**Inventor:** Yokoyama Takayoshi (横山 貴嘉)
**Applicant:** Canon Inc. (キヤノン株式会社), Ōta-ku, Tokyo
**Title:** 光学系及びそれを有する撮像装置 (Optical System and Image Pickup Apparatus Having the Same)
**Classification:** G02B 13/00, G03B 5/00
**Embodiment analyzed:** Numerical Example 1 (数値実施例 1)

Numerical Example 1 is the closest patent match to the Canon EF 200mm f/2L IS USM. The match rests on convergent evidence rather than on a single specification. The patent example gives $f = 194.99$ mm and Fno = 2.05; the production lens is marketed as a 200 mm f/2 lens. The patent structure is a large-aperture positive-negative-positive long-focus design with inner focusing by the negative second group and image stabilization by a decentered negative component in the third group. Canon's published product specification gives 17 elements in 12 groups, one fluorite element, two UD elements, a 1.9 m closest focusing distance, 0.12× maximum magnification, a drop-in 52-series filter, and an April 2008 market date.

The element count needs one qualification. The optical prescription in Numerical Example 1 contains sixteen powered lens elements plus a 2.00 mm plane-parallel filter plate at the rear. Canon and the patent count this filter plate in the 17-element total. The accompanying `*.data.ts` file omits the filter surface in accordance with the project data specification and folds its optical path into the final equivalent back focal distance.

Among the four numerical examples in the patent, Example 1 is the best production match. Example 2 is also near 195 mm but is faster at F/1.87 and changes the front-group construction. Example 3 is again near 195 mm and F/2.05 but uses a different glass distribution in the stabilizer and rear groups. Example 4 is a 135 mm-class F/1.84 design and is not a direct 200 mm production match.

## Optical Architecture

The prescription is a large-aperture telephoto-type inner-focus design with built-in optical image stabilization. Its principal power distribution is positive-negative-positive:

| Group | Surfaces | Elements | Power | Function |
|---|---:|---:|---:|---|
| L1 | 1-11 | 6 | $f_1 = +134.08$ mm | Front collector and primary chromatic correction |
| L2 | 12-14 | 2 | $f_2 = -81.74$ mm | Compact inner-focus doublet |
| L3 | 16-28 | 8 | $f_3 = +108.89$ mm | Rear relay, stabilization, field correction |
| L31 | 16-18 | 2 | $f_{31} = +96.33$ mm | Positive component ahead of IS group |
| L32 | 19-23 | 3 | $f_{32} = -51.02$ mm | Decentered image-stabilizer component |
| L33 | 24-28 | 3 | $f_{33} = +60.12$ mm | Rear positive component and final correction |

The aperture stop is located between the negative focus group L2 and the positive L31 component. At infinity focus, the rear surface of L2 is followed by a 26.48 mm air space to the stop, and the stop is followed by a 4.44 mm air space to L31. A paraxial entrance-pupil reconstruction gives a stop semi-diameter of about 19.92 mm for the patent's F/2.05 aperture, corresponding to an entrance-pupil semi-diameter of about 47.56 mm.

The patent describes the design as a telephoto optical system, and the powered glass train is indeed compact: the distance from the first surface to the last powered surface vertex is 165.84 mm, or 0.850× the 194.99 mm patent focal length. However, if the strict first-surface-to-image distance is used, the full track is 231.47 mm including the filter and image-space distance, giving TL/EFL = 1.187. The strict full-track value is therefore longer than the focal length; the compactness is located in the powered lens train rather than in the entire first-surface-to-image distance.

## Element-by-Element Analysis

### L1 — Biconvex Positive Front Crown

nd = 1.48749, νd = 70.2. Glass: S-FSL5 (OHARA). f = +959.2 mm.

The first element is a very weak positive lens. Its rear surface is almost flat in power terms, so the element contributes only gentle pre-convergence. Its main value is to begin collecting the f/2 beam without imposing a strong spherical-aberration burden at the largest front diameter.

### L2 — Biconvex Positive Fluorite Element

nd = 1.43387, νd = 95.1. Glass: CaF₂ fluorite. f = +210.7 mm.

The second element is the fluorite component. It supplies significant positive power while providing the highest Abbe number and strongest anomalous-dispersion leverage in the design. It is the most important single element for secondary-spectrum suppression in the front collector group.

The patent explicitly notes that strong positive front-group power and anomalous-dispersion glasses such as fluorite and UD glass can aggravate outward g-line coma if the power distribution is not balanced. In this design, the positive power is distributed over the first three elements rather than concentrated in a single element.

### L3 — Biconvex Positive UD-Class Element

nd = 1.49700, νd = 81.5. Glass: S-FPL51 (OHARA). f = +147.3 mm.

The third element is the first of two S-FPL51 UD-class elements. It is a stronger positive element than L1 and works with the fluorite L2 to control longitudinal color. Its rear surface is weakly concave relative to the stronger front surface, so most of its power is carried by the front surface.

The three positive elements L1-L3 progressively converge the front beam. This follows the patent's stated strategy of using three positive front lenses to reduce high-order spherical-aberration variation during focusing.

### L4 — Biconcave Negative Corrector

nd = 1.65412, νd = 39.7. Glass: S-NBH5 (OHARA). f = -188.1 mm.

The fourth element is the first negative element in L1. The catalog match for the stored nd/νd pair is OHARA S-NBH5. Its location after the three front positive elements allows its clear aperture to be much smaller than the initial front collector elements, which is exactly the weight-control point discussed in the patent.

Optically, L4 introduces negative power and dispersion after the front positive triplet. It helps balance Petzval curvature and axial color while avoiding the mass penalty that would result if the negative flint element were placed near the front of the lens.

### L5 — Negative Meniscus, Front Half of L1 Doublet

nd = 1.69680, νd = 55.5. Glass: S-LAL14 (OHARA). f = -93.1 mm standalone.

L5 is the front component of the cemented doublet that closes L1. Its meniscus form is negative in air, but in the cemented pair it functions mainly as a chromatic-correction partner for the following UD-class element. The cemented interface at R = +37.360 mm is the high-power surface in this pair.

### L6 — Positive Meniscus UD-Class Element, Rear Half of L1 Doublet

nd = 1.49700, νd = 81.5. Glass: S-FPL51 (OHARA). f = +98.8 mm standalone.

L6 is the second UD-class element. In standalone form it is a positive meniscus, but the cemented L5+L6 pair has a very long combined focal length of about -811.76 mm. This means the doublet is nearly afocal in first-order power and is primarily a chromatic corrector rather than a major focusing or imaging-power component.

### L7 — Positive Meniscus, Front Half of Focus Doublet

nd = 1.84666, νd = 23.8. Glass: S-TIH53 (OHARA). f = +132.8 mm standalone.

L7 is the high-dispersion front component of the L2 focus doublet. In isolation it has positive power, but in the cemented focus group its chief role is to provide strong dispersion leverage against the rear negative component.

### L8 — Biconcave Negative, Rear Half of Focus Doublet

nd = 1.77250, νd = 49.6. Glass: S-LAH66 (OHARA). f = -50.3 mm standalone.

L8 supplies most of the negative power of L2. The catalog match for this nd/νd pair is OHARA S-LAH66. The combined focus doublet has $f_2 = -81.74$ mm and is the only group that moves for ordinary focusing.

The L2 doublet translates toward the image plane for close focus. Its small axial thickness and smaller aperture relative to the front collector explain why it is suitable for fast inner focusing.

### L9 — Negative Meniscus, Front Half of L31 Doublet

nd = 1.65412, νd = 39.7. Glass: S-NBH5 (OHARA). f = -96.8 mm standalone.

L9 is the negative front component of L31, immediately behind the aperture stop. It uses the same S-NBH5-class glass as L4. In first-order terms it is a negative component, but its paired rear element makes L31 a positive converging component.

### L10 — Biconvex Positive, Rear Half of L31 Doublet

nd = 1.77250, νd = 49.6. Glass: S-LAH66 (OHARA). f = +48.3 mm standalone.

L10 is the strong positive component of L31. Together, L9+L10 produce $f_{31} = +96.33$ mm. The patent states that L31 converges the beam before L32, reducing the diameter required for the image-stabilizer group and making rapid stabilization mechanically easier.

### L11 — Biconcave Negative IS Singlet

nd = 1.69680, νd = 55.5. Glass: S-LAL14 (OHARA). f = -78.8 mm standalone.

L11 is the first element in L32, the image-stabilizer component. It begins the negative-power stabilizer group and contributes to the lateral image displacement produced when L32 is decentered perpendicular to the optical axis.

### L12 — Positive Meniscus, Front Half of IS Doublet

nd = 1.84666, νd = 23.8. Glass: S-TIH53 (OHARA). f = +73.4 mm standalone.

L12 is the positive, high-dispersion front half of the cemented doublet inside L32. Its function is not simply to add positive power; it also supplies chromatic balancing inside the moving stabilizer component so that decentering the group does not introduce excessive color-dependent image displacement.

### L13 — Biconcave Negative, Rear Half of IS Doublet

nd = 1.54072, νd = 47.2. Glass: S-TIL2 (OHARA). f = -50.2 mm standalone.

L13 supplies the negative power of the L32 cemented doublet. The catalog match is OHARA S-TIL2. The L12+L13 doublet has a combined focal length of about -153.96 mm, and the full L32 component, including L11, has $f_{32} = -51.02$ mm.

### L14 — Biconvex Positive, Front Half of L33 Doublet

nd = 1.72916, νd = 54.7. Glass: S-LAL18 (OHARA). f = +41.5 mm standalone.

L14 is the strongest individual positive element in the rear assembly. It begins L33's final convergence after the IS group. Its high refractive index allows substantial positive power with manageable curvatures and helps keep the rear component compact.

### L15 — Negative Meniscus, Rear Half of L33 Doublet

nd = 1.80518, νd = 25.4. Glass: S-TIH6 (OHARA). f = -58.1 mm standalone.

L15 is the dense flint partner for L14. The catalog match is OHARA S-TIH6. The cemented L14+L15 pair has a combined focal length of about +135.24 mm and serves as the main achromatizing doublet in the final positive component.

### L16 — Positive Meniscus Final Element

nd = 1.80400, νd = 46.6. Glass: S-LAH65V (OHARA). f = +104.2 mm.

The final powered element is a high-index positive meniscus. Its current OHARA catalog name is S-LAH65V; older documents may omit the V suffix. With νd below 50, it should be treated as a dense lanthanum flint, not as a crown. Its role is final convergence and residual field correction before the filter and image plane.

### F — Plane-Parallel Drop-In Filter Plate

nd = 1.51633, νd = 64.1. Glass: S-BSL7 (OHARA) / BK7-class borosilicate crown. Thickness = 2.00 mm.

The patent includes a plane-parallel filter plate immediately before the final image-space distance. The filter is counted in the patent and Canon element total, but it is omitted from the data file because project convention excludes filters from the rendered surface list. Its axial optical path is folded into the final air-equivalent back focal distance: $3.27 + 2.00 / 1.51633 + 60.36 = 64.948974$ mm after powered surface 28.

## Glass Selection and Chromatic Strategy

The corrected glass palette is as follows:

| Glass | nd | νd | Elements | Function |
|---|---:|---:|---|---|
| S-FSL5 (OHARA) | 1.48749 | 70.2 | L1 | Weak front crown |
| CaF₂ fluorite | 1.43387 | 95.1 | L2 | Principal anomalous-dispersion corrector |
| S-FPL51 (OHARA) | 1.49700 | 81.5 | L3, L6 | UD-class ED positive elements |
| S-NBH5 (OHARA) | 1.65412 | 39.7 | L4, L9 | Negative flint-like correction elements |
| S-LAL14 (OHARA) | 1.69680 | 55.5 | L5, L11 | High-index lanthanum crown components |
| S-TIH53 (OHARA) | 1.84666 | 23.8 | L7, L12 | Very high-dispersion dense flint components |
| S-LAH66 (OHARA) | 1.77250 | 49.6 | L8, L10 | Dense lanthanum flint power elements |
| S-TIL2 (OHARA) | 1.54072 | 47.2 | L13 | Light titanium flint, IS-group negative element |
| S-LAL18 (OHARA) | 1.72916 | 54.7 | L14 | High-index lanthanum crown, rear positive element |
| S-TIH6 (OHARA) | 1.80518 | 25.4 | L15 | Dense titanium flint, L33 achromat partner |
| S-LAH65V (OHARA) | 1.80400 | 46.6 | L16 | Dense lanthanum flint final meniscus |
| S-BSL7 (OHARA) | 1.51633 | 64.1 | F | Plane filter plate, not rendered as a powered lens |

The principal chromatic correction occurs in L1, where fluorite and two S-FPL51 elements are placed in the large positive front collector. The rear cemented groups then add local chromatic balancing: L2 for focus-motion color stability, L31 for post-stop convergence, L32 for stabilizer-group correction, and L33 for final longitudinal and lateral color cleanup.


## Focus Mechanism

The lens uses inner focusing. For focusing from infinity to close distance, the patent states that the negative second group L2 moves toward the image plane. In the prescription, this changes only the air gaps on either side of L2.

The patent does not publish a separate close-focus spacing table. A paraxial close-focus reconstruction using Canon's official 1.9 m closest focusing distance gives the following movement:

| Gap | Infinity | Close-focus reconstruction | Change |
|---|---:|---:|---:|
| D11, L1 rear to L2 front | 14.870 mm | 27.430 mm | +12.560 mm |
| D14, L2 rear to stop | 26.480 mm | 13.920 mm | -12.560 mm |

The reconstructed paraxial magnification is 0.1236×, consistent with Canon's published 0.12× maximum magnification. This confirms the direction and order of magnitude of the L2 focus travel.

## Image Stabilization

The image-stabilizer component is L32, consisting of L11, L12, and L13. It is a negative group with $f_{32} = -51.02$ mm. The patent states that L32 moves in a direction having a component perpendicular to the optical axis to shift the image on the image plane for vibration compensation.

L31, the positive component in front of L32, converges the beam before it enters the stabilizer. This reduces the aperture required for the moving stabilizer group. L33, the positive component behind L32, allows L32 to retain enough negative power to produce a useful image shift with limited decentering travel.

## Aspherical Surfaces

The design is all-spherical. The patent provides no aspherical coefficient table for Numerical Example 1, and the surface prescription contains only spherical radii and a plane stop/filter. Canon's public block diagram and specifications for the production lens do not identify any aspherical element. The design instead relies on first-order power distribution and glass selection, especially fluorite and UD-class elements, rather than molded or polished aspherical surfaces.

## Conditional Expressions

The patent defines eight first-order group-power conditions. Numerical Example 1 satisfies the main and tighter preferred ranges:

| Condition | Expression | Example 1 value | Patent range | Tighter range |
|---|---|---:|---:|---:|
| (1) | $F_1/F$ | 0.688 | 0.600-0.800 | 0.620-0.750 |
| (2) | $|F_2|/F$ | 0.419 | 0.300-0.450 | 0.350-0.450 |
| (3) | $F_3/F$ | 0.558 | 0.400-0.600 | 0.420-0.600 |
| (4) | $F_1/|F_2|$ | 1.640 | 1.600-2.200 | 1.600-2.000 |
| (5) | $F_i/F$ | 0.262 | 0.100-0.350 | 0.150-0.350 |
| (6) | $F_{31}/F$ | 0.494 | 0.200-0.700 | 0.250-0.650 |
| (7) | $|F_{32}|/F$ | 0.262 | 0.100-0.350 | 0.150-0.350 |
| (8) | $F_{33}/F$ | 0.308 | 0.150-0.500 | 0.200-0.450 |

The first four conditions govern the basic positive-negative-positive layout and focus-group strength. Conditions (5)-(8) govern the stabilizer component and the subdivision of L3 into positive, negative, and positive subcomponents.

## Verification Summary

Independent paraxial verification of the transcribed prescription gives the following values:

| Quantity | Computed value | Patent / production reference |
|---|---:|---:|
| Effective focal length | 194.991 mm | 194.99 mm |
| Design F-number | 2.05 | 2.05 |
| Half-field angle | 6.33° | 6.33° in aberration diagram |
| Full first-surface-to-image track, including filter | 231.47 mm | From prescription sum |
| Full-track TL/EFL | 1.187 | Computed |
| Powered train to last powered surface | 165.84 mm | Computed |
| Powered-train/EFL ratio | 0.850 | Computed |
| Final data-file BFD after filter folding | 64.948974 mm | $3.27 + 2.00/1.51633 + 60.36$ |
| Focus travel to 1.9 m MFD | +12.560 mm imageward | Reconstructed |
| Close-focus paraxial magnification | 0.1236× | Canon publishes 0.12× |
| Petzval sum | +5.9244e-4 mm^-1 | Surface-by-surface calculation |
| Petzval radius | -1687.93 mm | Derived |

The group focal lengths and conditional ratios recompute to the patent's Table 1 values to the precision shown there. The filter-omitted data file preserves the system EFL while replacing the filter plus image-space distance with an equivalent air distance after surface 28.

## Design Heritage and Context

The EF 200mm f/2L IS USM replaced the earlier EF 200mm f/1.8L USM. The successor gives up roughly one third of a stop in nominal aperture, but it adds image stabilization, shortens the official closest focusing distance to 1.9 m, and changes the front chromatic-correction strategy to fluorite plus two UD-class elements.

The patent's numerical examples show Canon exploring a family of fast inner-focus telephoto-type lenses around 135-200 mm. The central design idea is consistent across the examples: a compact negative focus group between a strong positive front collector and a subdivided positive rear group, with the negative L32 component inside the rear group used for image stabilization.

## Sources

- JP 2008-145584 A, "光学系及びそれを有する撮像装置," Canon Inc., published June 26, 2008.
- Canon Camera Museum, "EF200mm f/2L IS USM," https://global.canon/en/c-museum/product/ef397.html.
- OHARA Corporation glass data pages: S-FSL5, S-FPL51, S-NBH5, S-LAL14, S-TIH53, S-LAH66, S-TIL2, S-LAL18, S-TIH6, S-LAH65V, and S-BSL7.
