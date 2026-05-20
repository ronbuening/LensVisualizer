# Nikon Fisheye-Nikkor 6mm f/5.6 — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** US 3,524,697  
**Application number:** US 723,364  
**Filed:** April 23, 1968  
**Granted:** August 18, 1970  
**Priority:** Japan, April 27, 1967  
**Inventors:** Masaki Isshiki and Keiji Matsuki  
**Assignee:** Nippon Kogaku K.K., Tokyo, Japan  
**Title:** Achromatic Super Wide-Angle Lens  
**Embodiment analyzed:** Example 1 / Claim 1 and Claim 2, stated at f = 10, F/5.6, 2ω = 220°

Example 1 of US 3,524,697 is the appropriate patent embodiment for the Nikon Fisheye-Nikkor 6mm f/5.6. The identification is based on a convergence of the patent prescription, the production specifications, and Nikon's own retrospective history of its fisheye program.

1. The patent's first embodiment is specified as a 220° super-wide fisheye at F/5.6, matching the production 6mm f/5.6's 220° field and maximum aperture.[^us3524697]
2. The patent example contains nine powered glass elements in six air-separated optical groups, excluding the flat optional filter. Contemporary production data for the 6mm f/5.6 gives 9 elements in 6 groups.[^mir6mm]
3. The patent Figure 1 layout matches the production type: two strongly curved front negative menisci, a cemented doublet before the stop, a flat built-in filter location, and a three-part rear convergent group.
4. Nikon's Tale 6 credits Keiji Matsuki with work on the Fisheye-Nikkor 6mm f/5.6 and describes the Nikon fisheye layout lineage in which two negative front elements reduce the very wide field, followed by a correcting cemented group and a rear image-forming group.[^nikon6]
5. Nikon's Tale 53 distinguishes the SAP Fisheye-Nikkor 6.2mm f/5.6 from this lens: the SAP lens was a 230° solid-angle-projection design using an aspherical element, manufactured only in very small numbers.[^nikon53] That prevents the common error of transferring the SAP lens's aspherical claim to the 6mm f/5.6 embodiment analyzed here.

The patent prescription is normalized at f = 10. Independent paraxial tracing of the Example 1 numerical prescription gives EFL = 10.004615 patent units and BFD = 17.860390 patent units. The delivered data file scales all radii, thicknesses, BFD, and estimated semi-diameters by 0.599723199, giving a production-scale EFL of 6.000 mm. This replaces the earlier draft's 0.56 scale factor, which was inferred from the 21.6 mm circular image diameter and the equidistant projection formula rather than from Nikon's nominal focal-length specification.

The flat filter element published as patent L5 is excluded from the `*.data.ts` surfaces and elements arrays. This follows the LensVisualizer data rule that filters are not modeled as lens elements. Its first-order effect is retained by folding its glass thickness into the adjacent air gap as an equivalent paraxial air thickness: d = 3.2 + 1.9/1.51743 + 6.4 = 10.852117 patent units between patent r7 and r10.

## Optical Architecture

The Fisheye-Nikkor 6mm f/5.6 is a mirror-lock-up circular fisheye for 35 mm format. Its optical system is a negative-front / positive-rear fisheye architecture rather than a mirror-clearing SLR retrofocus design in the practical mechanical sense: the computed BFD/EFL ratio is 1.785, but the rear lens group still protrudes into the camera throat and the reflex mirror must be locked up before mounting.[^mir6mm]

The group power sequence is:

| Group | Elements | Standalone/group focal length, patent units | Production-scaled focal length | Function |
|---|---:|---:|---:|---|
| G1 | L1 | -77.58 | -46.53 mm | First angular-compression meniscus |
| G2 | L2 | -27.98 | -16.78 mm | Stronger angular-compression meniscus |
| G3 | L3-L4 | -358.77 | -215.17 mm | Weakly negative front achromatizing doublet |
| G4 | L6-L7 | +95.73 | +57.41 mm | Rear doublet for longitudinal color control |
| G5 | L8 | +41.40 | +24.83 mm | Positive meniscus, field and rear-power balance |
| G6 | L9-L10 | +75.11 | +45.05 mm | Final cemented doublet for field, astigmatism, and color balance |

The front divergent assembly L1-L4 has a combined focal length of -14.46 patent units (-8.67 mm after scaling). The rear convergent assembly L6-L10 has a combined focal length of +27.55 patent units (+16.52 mm after scaling). The full system produces EFL = 10.0046 patent units and a production-scaled EFL of 6.000 mm.

This design should be read as a scientific/survey fisheye rather than as a general-purpose SLR lens. It uses a preset/manual aperture, a built-in filter turret, and fixed focus. The DF-1 finder covers less than the lens's full 220° field, so the finder is a centering aid rather than a complete framing device.[^mir6mm]

## Element-by-Element Analysis

### L1 — Negative Meniscus, convex toward the object

nd = 1.61272, νd = 58.6. Glass: BACD4 / N-SK4 class, 613/586 code. f = -46.53 mm after production scaling.

L1 is the first angular-compression element. Both surfaces are convex toward the object in the patent sign convention (R1 > 0, R2 > 0), with the rear surface substantially stronger than the front surface. The element therefore has negative power while maintaining a meniscus shape suitable for accepting rays from a field extending beyond 90° off axis.

The glass satisfies the patent's Condition (1): nd > 1.57 and νd > 54 for the two front meniscus lenses. A moderately high-index, low-dispersion crown limits the surface curvature needed for the outer element and reduces the lateral-color burden passed to the front doublet.

### L2 — Negative Meniscus, convex toward the object

nd = 1.62041, νd = 60.3. Glass: BACD16 / N-SK16 / S-BSM16 class, 620/603 code. f = -16.78 mm after production scaling.

L2 is the stronger of the two front negative menisci. Its rear surface is much steeper than its front surface, making it the main angular compressor ahead of the achromatizing doublet. The large air gap between L1 and L2, and the next large air gap between L2 and L3, are not unused space; they are part of the field-angle management strategy for a lens admitting a 110° semi-field.

Like L1, L2 satisfies Condition (1). The two front menisci use related high-index crown glasses rather than flints, which prevents the front group from becoming an uncontrolled lateral-color generator.

### L3-L4 — Cemented Doublet, weak negative resultant power

L3: nd = 1.48848, νd = 70.3. Glass: FC5 / N-FK5 / S-FSL5 class, 488/703 code. f = -16.62 mm after production scaling.  
L4: nd = 1.78470, νd = 26.0. Glass: FD110 / N-SF11 / S-TIH11 class, 785/260 code. f = +17.33 mm after production scaling.  
Combined doublet: f = -215.17 mm after production scaling.

This cemented pair has almost no net power compared with the rest of the system. Its job is not to form the image; it is to correct the lateral chromatic aberration created by the two large front negative menisci. The design uses an extreme crown/flint separation: L3 is a low-index, very low-dispersion crown, while L4 is a high-index dense flint. That pairing gives strong chromatic leverage at the cemented interface without requiring the doublet as a whole to carry much refractive power.

This is the first major correction to the previous draft. The earlier glass identification described L3 as an S-FPM3-class glass and L4/L6/L9 as SF56A/SF11-class. The HOYA cross-reference places the 487/704 family at FC5 / N-FK5 / S-FSL5, and the 785/257 dense-flint family at FD110 / N-SF11 / S-TIH11. The patent values are close to those catalog families, not to the earlier S-FPM3 attribution.[^hoya-crossref]

### L6-L7 — Cemented Doublet behind the stop

L6: nd = 1.78477, νd = 26.0. Glass: FD110 / N-SF11 / S-TIH11 class, 785/260 code. f = -11.26 mm after production scaling.  
L7: nd = 1.74372, νd = 45.0. Glass: LAF2 / N-LAF2 / S-LAM2 class, 744/450 code. f = +10.15 mm after production scaling.  
Combined doublet: f = +57.41 mm after production scaling.

The L6-L7 doublet is placed immediately behind the stop region, where paraxial ray heights are small. The patent's Condition (3) controls this doublet: the negative element must have νd < 35; the positive element must have νd > 35 and nd > 1.60; and the cemented radius must satisfy 0.3f < r < 3f. With f = 10 and r11 = 14.816 patent units, the cemented radius falls well inside the allowed interval.

The previous draft correctly recognized the role of the L6-L7 pair but assigned the positive element to S-LAM3-class. The catalog cross-reference is closer to LAF2 / N-LAF2 / S-LAM2 for the 744/450 glass-code family.[^hoya-crossref]

### L8 — Positive Meniscus, concave toward the object

nd = 1.76764, νd = 46.5. Glass: unresolved lanthanum-flint / lanthanum-barium-flint patent melt, 768465 code. f = +24.83 mm after production scaling.

L8 is an air-spaced positive meniscus between the L6-L7 doublet and the final cemented doublet. Its front radius is very weak (R13 = -305.981 patent units), while the rear radius is much stronger (R14 = -28.988 patent units). This gives the element positive power while keeping the front surface nearly neutral.

The earlier draft identified this glass as HOYA NBFD3. That is not supported by the HOYA cross-reference: NBFD3 is listed in the 805/396 family, not the patent's 768465 family.[^hoya-crossref] No exact public modern catalog match was found in the checked HOYA, SCHOTT, and OHARA cross-reference families. The data file therefore uses a future-upgrade code label rather than preserving a wrong catalog label.

### L9-L10 — Final Cemented Doublet

L9: nd = 1.78485, νd = 26.0. Glass: FD110 / N-SF11 / S-TIH11 class, 785/260 code. f = -26.65 mm after production scaling.  
L10: nd = 1.62230, νd = 53.1. Glass: S-BSM22 (OHARA) / N-SSK2 class, 622/532 code. f = +17.50 mm after production scaling.  
Combined doublet: f = +45.05 mm after production scaling.

The final group is a positive cemented doublet composed of a negative meniscus and a thick biconvex positive element. It satisfies the patent's Conditions (4) and (5): the cemented surface radius r16 = 22.224 lies between 0.1f and 5f; the index on the object side of the cemented surface is higher than the index on the image side; the positive member has νd > 45; and the negative member has νd < 30.

L10 is better identified as OHARA S-BSM22 / Schott N-SSK2 class than as generic SSK2 alone. OHARA publishes S-BSM22 with nd = 1.62230 and νd = 53.17, matching the patent closely.[^ohara-bsm22]

## Glass Identification and Selection

| Patent element | nd | νd | Code | Revised identification | Prior-draft issue corrected |
|---|---:|---:|---:|---|---|
| L1 | 1.61272 | 58.6 | 613/586 | BACD4 / N-SK4 class | Acceptable class label retained but made code-based |
| L2 | 1.62041 | 60.3 | 620/603 | BACD16 / N-SK16 / S-BSM16 class | Acceptable class label retained |
| L3 | 1.48848 | 70.3 | 488/703 | FC5 / N-FK5 / S-FSL5 class | Not S-FPM3-class |
| L4 | 1.78470 | 26.0 | 785/260 | FD110 / N-SF11 / S-TIH11 class | Not specifically SF56A |
| L6 | 1.78477 | 26.0 | 785/260 | FD110 / N-SF11 / S-TIH11 class | Not specifically SF56A |
| L7 | 1.74372 | 45.0 | 744/450 | LAF2 / N-LAF2 / S-LAM2 class | Not S-LAM3-class |
| L8 | 1.76764 | 46.5 | 768465 | Unresolved patent melt | Not HOYA NBFD3 |
| L9 | 1.78485 | 26.0 | 785/260 | FD110 / N-SF11 / S-TIH11 class | Not specifically SF56A |
| L10 | 1.62230 | 53.1 | 622/531 | S-BSM22 / N-SSK2 class | More precise OHARA match added |

The glass strategy is classical rather than apochromatic. There is no modern ED glass claim in this design. The front doublet corrects lateral color by pairing a very high-Abbe crown with a dense flint. The rear doublets then use high-index flint/crown or flint/lanthanum pairings to balance longitudinal color, astigmatism, and residual lateral color.

The design uses the same 785/260 dense-flint family in three places: L4, L6, and L9. In each case the dense flint is cemented to a less dispersive positive member. The repeated use is not accidental; it gives the designer predictable chromatic leverage at three strategically different ray heights.

## Focus Mechanism

The patent publishes no variable air spacing table and no moving focusing group. The production lens is a fixed-focus, mirror-lock-up fisheye. Secondary production references describe the distance scale as extending to 0.3 m / 1 ft, but this should be read as a depth-of-field reference, not as evidence of an optical focusing helicoid.[^mir6mm]

The data file therefore has `var: {}` and `varLabels: []`. The required `closeFocusM` metadata is set to 0.3 m to match the published distance-scale endpoint, while the optical prescription itself remains fixed at the patent's infinity condition.

## Aspherical Surfaces

Example 1 of US 3,524,697 is all-spherical. The patent prescription lists only spherical radii and flat filter faces; it provides no aspherical equation and no aspherical coefficient table. The data file therefore sets `asph: {}`.

This point matters because Nikon's SAP Fisheye-Nikkor 6.2mm f/5.6 was an aspherical, 230° solid-angle-projection lens from the same general research period.[^nikon53] That lens is not the Example 1 prescription analyzed here. The OP Fisheye-Nikkor 10mm f/5.6 also used an aspherical front element, but it was a different orthographic-projection lens.[^nikon6]

## Chromatic Correction Strategy

The patent's chromatic correction is distributed by field zone. Conditions (1), (2), and (5) are directed primarily at lateral chromatic aberration and image curvature over half-fields of 110° to 135°. Condition (3) compensates the longitudinal chromatic error that is worsened by the strong front doublet correction. Condition (4) improves peripheral astigmatism and the remaining lateral-color balance.

All five conditions are satisfied by Example 1:

| Condition | Patent requirement | Example 1 result |
|---|---|---|
| (1) | Front meniscus glasses nd > 1.57 and νd > 54 | L1: 1.61272 / 58.6; L2: 1.62041 / 60.3 |
| (2) | L4 positive νd < 40 and f+ < 5f; L3 negative νd > 50 and |f-| < 5f | L4: νd = 26.0, f = +28.89; L3: νd = 70.3, f = -27.72 |
| (3) | Rear doublet negative νd < 35; positive νd > 35 and nd > 1.60; cemented r between 0.3f and 3f | L6/L7 satisfy; r11 = 14.816 |
| (4) | Rear cemented radius between 0.1f and 5f; ns > n's at the cemented surface | r16 = 22.224; 1.78485 > 1.62230 |
| (5) | At least one rear positive lens νd > 45 and one rear negative lens νd < 30 | L10 νd = 53.1; L9 νd = 26.0 |

The patent's Seidel coefficient table, normalized to f = 1, reports a total Vj value of +0.7301. That is useful only as a reference quantity; the patent itself warns that ordinary Seidel coefficients are not especially suitable for representing the behavior of such a super-wide fisheye.[^us3524697]

## Verification Summary

The prescription was re-traced from the numerical patent table using a reduced-angle y / nθ paraxial matrix calculation. The flat filter was first included, then removed and replaced by an equivalent air thickness t/n to verify that the data-file simplification preserved the first-order system matrix.

| Quantity | Patent / source value | Computed value, patent scale | Production-scaled value |
|---|---:|---:|---:|
| EFL | f = 10 | 10.004615 | 6.000 mm |
| BFD | not stated | 17.860390 | 10.711 mm |
| BFD/EFL | not stated | 1.7852 | 1.7852 |
| Track, front vertex to final surface, filter included | prescription sum | 126.100000 | 75.626 mm |
| Track, filter excluded and folded as t/n | data-file sum | 125.452117 | 75.237 mm |
| Total vertex-to-image distance, folded-filter model | not stated | 143.312507 | 85.948 mm |
| Petzval sum Σφ/(n n′) | not stated | -0.0066325 | -0.011060 by mm scaling |

The Petzval sum was recomputed surface-by-surface as Σφ/(n n′), not by a thin-lens element approximation. The scaled Petzval value changes inversely with the scale factor because the surface powers scale as 1/length.

The aperture stop position is not a separate numerical surface in the patent table. In the data file it is placed in the folded r7-to-r10 gap just after the equivalent filter location, consistent with Figure 1. The stop semi-diameter is set to 1.505 mm after scaling; backward paraxial tracing gives an entrance-pupil semi-diameter of 0.5357 mm, corresponding to EFL/(2 × 5.6).

## Design Heritage and Context

Nikon's fisheye lineage began before the Nikon F era and was refined through the 8mm f/8, 7.5mm f/5.6, OP 10mm f/5.6, SAP 6.2mm f/5.6, and the 6mm f/5.6 / 6mm f/2.8 220° lenses. Tale 6 describes the equidistant projection of earlier Nikon fisheyes and credits Keiji Matsuki with work on the 6mm f/5.6.[^nikon6] Tale 53 places Masaki Isshiki in the SAP 6.2mm f/5.6 line and confirms that the SAP variant used an aspherical surface for solid-angle projection.[^nikon53]

US 3,524,697 belongs to that same research stream, but its Example 1 is a spherical 220° achromatic fisheye. Its central technical contribution is not aspheric fabrication. It is the glass and group-power arrangement that makes a color-corrected F/5.6 lens possible at a field angle where the front negative menisci would otherwise generate excessive lateral color and peripheral astigmatism.

## Sources

[^us3524697]: Masaki Isshiki and Keiji Matsuki, "Achromatic Super Wide-Angle Lens," US Patent 3,524,697, granted August 18, 1970.
[^nikon6]: Nikon Corporation, *NIKKOR — The Thousand and One Nights*, Tale No. 6, "The world's first aspherical SLR lens and orthographic projection fisheye lens." https://imaging.nikon.com/imaging/information/story/0006/
[^nikon53]: Nikon Corporation, *NIKKOR — The Thousand and One Nights*, Tale No. 53, "The Profound World of the Fisheye Lens." https://imaging.nikon.com/imaging/information/story/0053/
[^hoya-crossref]: HOYA Group Optics Division, "Glass Cross Reference Index." https://www.hoya-opticalworld.com/english/products/crossreference.html
[^ohara-bsm22]: OHARA Corporation, "S-BSM22" glass data page, listing nd = 1.62230 and νd = 53.17. https://oharacorp.com/glass/s-bsm22/
[^mir6mm]: Photography in Malaysia / MIR, "6mm f5.6 Fisheye-Nikkor Lens," compiled production data including 6mm, F/5.6, 9 elements / 6 groups, 220°, equidistant projection, 21.6 mm image, fixed focus, and built-in filters. https://www.mir.com.my/rb/photography/companies/nikon/nikkoresources/6070nikkor/fisheyes/6mm56.htm
