# CANON  12.5-62.5mm f/2.0-3.9 PowerShot G1 X Mark II

## Patent Reference and Design Identification

**Patent:** US 2015/0219882 A1
**Application Number:** 14/607,924
**Filed:** January 28, 2015
**Published:** August 6, 2015
**Priority:** January 31, 2014 (JP 2014-017755)
**Inventor:** Shuichi Mogi
**Applicant:** Canon Kabushiki Kaisha
**Title:** Zoom Lens and Imaging Apparatus Having the Same
**Embodiment analyzed:** Numerical Example 2 (¶0088; FIG. 3, FIGS. 4A-4C)

Numerical Example 2 is the closest patent match for the fixed zoom lens used in the Canon PowerShot G1 X Mark II. The patent example is a six-zoom-group positive-lead design with the power distribution + - + + - +. Its tabulated focal-length range is 12.84-60.72 mm, its F-number range is 2.06-4.02, and its wide/middle/tele image heights are 9.17 / 10.46 / 11.25 mm.

The production lens is officially specified as 12.5-62.5 mm, f/2.0-3.9, with a 24-120 mm equivalent angle of view, 14 elements in 11 groups, one double-sided UA aspherical element, and two additional double-sided aspherical elements. The camera uses a Canon 1.5-inch-type CMOS sensor. These specifications converge with the patent example: 14 glass elements, 11 air-separated optical groups, six aspherical surfaces, similar F-number, a 4.73x patent zoom ratio versus a marketed 5x zoom, and a B5 negative inner-focus group. The patent was filed on January 28, 2015, with Japanese priority on January 31, 2014, shortly before the camera's 2014 market introduction.

The patent's Focal length row is not identical to the Gaussian paraxial effective focal length derived from the prescription. It corresponds closely to image height divided by tan(half viewing angle), whereas the independent Gaussian paraxial trace gives 12.571 / 22.807 / 62.196 mm. The analysis and data file therefore record both concepts explicitly: the patent table focal lengths are used as the zoom-position labels, and the Gaussian paraxial values are documented in the verification section.

## Optical Architecture

The lens is a compact positive-lead zoom arranged, from object to image, as B1 positive, B2 negative, B3 positive, B4 positive, B5 negative, and B6 positive. The aperture stop is between B3 and B4. Groups B1 and B2 move on image-side-convex zoom loci, while B3 through B6 translate toward the object side during zooming from wide angle to telephoto (¶0047). The fifth group B5 is the focusing group and moves toward the image side when shifting from infinity to near focus (¶0050).

The 14 elements are distributed as follows.

| Zoom group | Elements | Refractive power | Function |
|---|---:|---:|---|
| B1 | L1-L2 | +59.41 mm | Front positive collector and axial-color correction. |
| B2 | L3-L5 | -12.77 mm | Main variator; negative-negative-positive triplet described in ¶0072. |
| B3 | L6-L8 | +27.73 mm | Positive compensator ahead of the stop; includes one double-sided asphere and a cemented achromat. |
| B4 | L9-L11 | +25.73 mm | Positive relay group after the stop; includes one double-sided asphere and a zero-air-gap contact pair. |
| B5 | L12-L13 | -25.14 mm | Negative inner-focus group; L13 is double-sided aspherical. |
| B6 | L14 | +33.80 mm | Rear positive relay and field-flattening element. |

The wide-angle barrel distortion is not treated as a purely optical burden. The patent explicitly allows the wide-angle image circle to be smaller than the telephoto image circle because wide-angle barrel distortion may be corrected by image processing (¶0086). This is consistent with the compact digital-camera context and explains why the wide-angle image height in the patent is 9.17 mm while telephoto reaches 11.25 mm.

## Element-by-Element Analysis

### L1 — Negative Meniscus, convex to object (cemented with L2)

nd = 1.92286, νd = 18.9. Glass: S-NPH2 (OHARA). f = -155.4 mm.

L1 is the front negative component of the B1 cemented doublet. Its high refractive index permits a relatively compact front curvature while its very low Abbe number supplies the high-dispersion negative component needed to achromatize the positive L2. The element's optical power is weak by itself, but it controls the chromatic behavior of the front positive group.

### L2 — Positive Meniscus, convex to object (cemented with L1)

nd = 1.77250, νd = 49.6. Glass: S-LAH66 (OHARA). f = +42.4 mm.

L2 carries most of the positive power of the B1 doublet. The cemented L1-L2 unit has a net focal length of +59.41 mm. The rear radius R3 = +605.034 mm is nearly flat, so the doublet's front-interface and cemented-interface curvatures dominate the group power.

### L3 — Biconcave Negative

nd = 1.91082, νd = 35.3. Glass: TAFD35 / TAFD35L class (HOYA). f = -13.9 mm.

L3 is the strongest single negative element in B2. Its front radius is extremely shallow (R4 = -471.950 mm) and the rear surface is steep (R5 = +12.977 mm), concentrating most of the diverging power on the rear surface. This is the main optical lever of the negative variator group.

### L4 — Biconcave Negative

nd = 1.71300, νd = 53.9. Glass: S-LAL8 (OHARA). f = -26.7 mm.

L4 supplements L3 with a weaker, more distributed negative power. Its higher Abbe number relative to L3 moderates the chromatic behavior of the negative part of the variator. In the B2 negative-negative-positive arrangement, L4 fills the space between the high-index L3 and the very high-dispersion positive L5.

### L5 — Biconvex Positive

nd = 1.95906, νd = 17.5. Glass: S-NPH3 (OHARA). f = +31.3 mm.

L5 is the positive member of B2. Paragraph 0072 identifies the second group in these positive-lead embodiments as a negative-negative-positive triplet for controlling zoom-induced aberration variation, especially spherical aberration at telephoto. L5's high refractive index and very low Abbe number give it strong chromatic leverage inside an overall negative zoom group.

### L6 — Biconvex Positive (double-sided aspherical)

nd = 1.76802, νd = 49.2. Glass: M-TAF101 (HOYA). f = +21.3 mm.

L6 is the leading element of B3 and the first double-sided asphere in the optical train. Its position immediately in front of the stop gives it strong influence over axial spherical aberration and coma. Canon's production description specifies one double-sided UA aspherical element and two other double-sided aspherical elements; the patent gives the aspherical positions but does not label which production asphere carries the UA marketing classification.

### L7 — Positive Meniscus, convex to object (cemented with L8)

nd = 1.48749, νd = 70.2. Glass: S-FSL5 (OHARA). f = +50.2 mm.

L7 is the low-dispersion positive member of the B3 cemented doublet. It works with the high-index negative L8 to correct axial color in the rear half of the system. Its positive meniscus shape keeps the group compact while preserving a short principal-point distance between B2 and B3, a design objective described for these embodiments in ¶0073.

### L8 — Negative Meniscus, convex to object (cemented with L7)

nd = 2.00069, νd = 25.5. Glass: TAFD40 (HOYA). f = -22.4 mm.

L8 is the high-index, high-dispersion negative partner in the B3 doublet. Its very high refractive index allows the negative meniscus to contribute strong chromatic correction without excessively large curvatures. The L7-L8 cemented doublet has a net focal length of approximately -48.8 mm, partially offsetting the strong positive L6 while the complete B3 group remains positive at +27.73 mm.

### L9 — Positive Meniscus (double-sided aspherical)

nd = 1.69350, νd = 53.2. Glass: M-LAC130 / MP-LAC130 (HOYA). f = +29.8 mm.

L9 is the leading element of B4 and the second double-sided asphere. The B4 group sits just after the aperture stop and shares the positive relay burden with B3 and B6. The aspherical surfaces on L9 correct residual spherical aberration and coma in the converging beam after the stop.

### L10 — Biconcave Negative (zero-air-gap contact pair with L11)

nd = 1.80518, νd = 25.4. Glass: S-TIH6 (OHARA). f = -36.3 mm.

L10 is not cemented to L11 in the patent prescription. Surface 20 exits L10 into air, has R = +42.072 mm, and has d20 = 0.00 mm before surface 21 enters L11 with the same radius. The zero air thickness means the pair behaves optically like an immediate contact pair, but the data file preserves the air/glass transition explicitly rather than converting the pair into a cemented doublet. This was a load-bearing correction during review.

### L11 — Biconvex Positive (zero-air-gap contact pair with L10)

nd = 1.48749, νd = 70.2. Glass: S-FSL5 (OHARA). f = +29.5 mm.

L11 is the low-dispersion positive partner in the B4 contact pair. It follows the negative L10 at the same axial station, allowing chromatic correction in B4 without adding an appreciable air gap. The pair is weakly positive as a subsystem and fine-tunes the B4 relay power.

### L12 — Positive Meniscus, convex to object

nd = 1.83400, νd = 37.2. Glass: S-LAH60V (OHARA). f = +147.8 mm.

L12 is the weak positive front element of the B5 focus group. Its image-side surface R24 = +37.777 mm and the object-side surface of L13 R25 = -36.295 mm define the strongly diverging air lens central to the patent's focusing conditions. Paragraph 0055 states that the radius relation between these surfaces is used so astigmatism variation and spherical-aberration variation occur in the same direction during focusing.

### L13 — Biconcave Negative (double-sided aspherical)

nd = 1.85135, νd = 40.1. Glass: M-TAFD305 (HOYA). f = -20.8 mm.

L13 supplies the dominant negative power of B5. The complete B5 group is negative at -25.14 mm and is the sole focus group in this example. Both surfaces are aspherical, providing the rear-section correction freedom needed when B5 moves toward the image side for close focus.

### L14 — Positive Meniscus, convex to object

nd = 1.91082, νd = 35.3. Glass: TAFD35 / TAFD35L class (HOYA). f = +33.8 mm.

L14 is the single positive element of B6. It acts as a rear relay and field-shaping element before the sensor cover glass block. In the data file, the cover glass is excluded and its optical path is folded into the final back-focus distance after surface 28.

## Glass Identification and Selection

The patent gives refractive index and Abbe number, not manufacturer names. The glass labels below are nearest exact or near-exact catalog matches checked against manufacturer-published OHARA and HOYA data. Where a Hoya molding-glass family is used, the label is retained as a catalog match rather than as a claim that Canon disclosed the supplier.

| Element | nd | νd | Catalog identification | Vendor | Confidence |
|---|---:|---:|---|---|---|
| L1 | 1.92286 | 18.9 | S-NPH2 | OHARA | exact nd/νd match |
| L2 | 1.77250 | 49.6 | S-LAH66 | OHARA | exact nd/νd match |
| L3 | 1.91082 | 35.3 | TAFD35 / TAFD35L class | HOYA | exact index/Abbe class match |
| L4 | 1.71300 | 53.9 | S-LAL8 | OHARA | exact nd/νd match |
| L5 | 1.95906 | 17.5 | S-NPH3 | OHARA | exact nd/νd match |
| L6 | 1.76802 | 49.2 | M-TAF101 | HOYA | exact molding-glass match |
| L7 | 1.48749 | 70.2 | S-FSL5 | OHARA | exact nd/νd match |
| L8 | 2.00069 | 25.5 | TAFD40 | HOYA | exact nd/νd match |
| L9 | 1.69350 | 53.2 | M-LAC130 / MP-LAC130 | HOYA | exact molding-glass match |
| L10 | 1.80518 | 25.4 | S-TIH6 | OHARA | exact nd/νd match |
| L11 | 1.48749 | 70.2 | S-FSL5 | OHARA | exact nd/νd match |
| L12 | 1.83400 | 37.2 | S-LAH60V | OHARA | exact nd/νd match |
| L13 | 1.85135 | 40.1 | M-TAFD305 | HOYA | exact molding-glass match |
| L14 | 1.91082 | 35.3 | TAFD35 / TAFD35L class | HOYA | exact index/Abbe class match |

The palette is dominated by high-index flints and lanthanum-family glasses. L7 and L11, both S-FSL5-class low-dispersion crowns, are the principal low-dispersion positive elements. The design does not use a glass with νd above 81, does not use fluorite, and does not provide partial-dispersion data sufficient to claim apochromatic correction. The chromatic strategy is a compact high-index achromatization strategy rather than an ED/UD-labeled one.

## Focus Mechanism

The fifth zoom group B5, consisting of L12 and L13, is the focus lens group. The patent states that B5 has negative refractive power and moves to the image side when shifting from an infinite-distance object to a near-distance object at telephoto (¶0050). This is an inner-focus arrangement: only the small rear negative group moves for focusing, while the other groups follow the zoom cam tracks.

The patent tabulates only infinity-focus zoom spacings for Numerical Example 2. Canon's production specifications give a closest focusing distance of 5 cm at wide angle and 40 cm at telephoto. The data file therefore includes an explicitly marked paraxial close-focus visualization: B5 is shifted imageward by increasing d22 and reducing d26 while the image plane remains fixed. The fitted close-focus travel is not a patent-disclosed mechanical cam.

| Variable gap | Wide infinity | Wide close model | Middle infinity | Middle close model | Tele infinity | Tele close model |
|---|---:|---:|---:|---:|---:|---:|
| d22, B4-B5 | 1.60 | 4.53 | 3.74 | 5.74 | 10.36 | 16.12 |
| d26, B5-B6 | 4.49 | 1.56 | 4.80 | 2.80 | 12.85 | 7.09 |

## Aspherical Surfaces

Six aspherical surfaces appear on three double-sided aspherical elements: L6, L9, and L13. The patent uses the standard conic-plus-even-polynomial sag equation in ¶0084:

$$x = \frac{h^2/R}{1 + \sqrt{1 - (1+k)(h/R)^2}} + A4 h^4 + A6 h^6 + A8 h^8$$

Here `k` is the standard conic constant; k = 0 is a spherical base surface. The data file maps patent surfaces 11, 12, 17, 18, 25, and 26 to renderer labels 11A, 12A, 17A, 18A, 25A, and 26A.

| Surface | Element | K | A4 | A6 | A8 |
|---|---|---:|---:|---:|---:|
| 11A | L6 front | -1.39476e-3 | -1.91529e-5 | +3.48565e-9 | 0 |
| 12A | L6 rear | 0 | +1.47762e-6 | +4.30060e-8 | 0 |
| 17A | L9 front | 0 | +1.01044e-5 | +5.60591e-7 | +8.60394e-9 |
| 18A | L9 rear | 0 | +5.86535e-5 | +7.68295e-7 | +1.04881e-8 |
| 25A | L13 front | 0 | -1.08123e-4 | +3.83708e-6 | -3.59207e-8 |
| 26A | L13 rear | 0 | -7.39157e-5 | +3.22046e-6 | -2.90647e-8 |

L6 corrects the high-power converging bundle ahead of the aperture stop. L9 corrects the post-stop relay bundle in B4. L13 is the focus-group asphere and carries the largest fourth-order coefficient in the design, consistent with its role in controlling focus-induced aberration variation.

## Conditional Expressions

The patent defines nine conditional inequalities in ¶0056-¶0067. Numerical Example 2 satisfies all of them. Values below were re-derived from the extracted prescription, using the patent's definitions for RF, RR, Dft, Drt, Dfw, Drw, Ra, Rb, Rc, Rd, fnp, fnn, fair, fn, and fp. The `fair` value follows the patent's thin air-lens convention for the air lens bounded by R24 and R25; it is not the standalone thick-lens focal length of the finite air gap between L12 and L13.

| Condition | Expression | Computed | Patent table | Bound |
|---|---|---:|---:|---|
| (1) | (RF - RR) / (RF + RR) | +49.98 | +50.00 | 0.50 to 200.00 |
| (2) | (Drt - Dft) / (Drw - Dfw) | +0.86 | +0.86 | 0.00 to 85.00 |
| (3) | (Ra - Rb) / (Ra + Rb) | -6.29 | -6.29 | -50.0 to 120.0 |
| (4) | (Rc - Rd) / (Rc + Rd) | +0.13 | +0.13 | -0.30 to 2.50 |
| (5) | fnp / fnn | -7.12 | -7.12 | -21.0 to -2.5 |
| (6) | Dft / Drt | +0.81 | +0.81 | 0.10 to 1.80 |
| (7) | Dfw / Drw | +0.36 | +0.36 | 0.10 to 2.60 |
| (8) | fair / fn | +0.86 | +0.86 | 0.30 to 2.30 |
| (9) | fp / fn | -1.34 | -1.35 | -4.20 to -0.50 |

RF = R24 = +37.777 mm, RR = R25 = -36.295 mm, Dft/Drt/Dfw/Drw use the d22 and d26 zoom spacings, Ra = R22 = -21.340 mm, Rb = R23 = +29.406 mm, Rc = R26 = +34.775 mm, and Rd = R27 = +26.904 mm. The re-derived element and group focal lengths are fnp = +147.80 mm, fnn = -20.77 mm, fn = -25.14 mm, and fp = +33.80 mm; fair is -21.6 mm under the patent's air-lens convention.

Condition (1) is especially diagnostic of this design. R24 = +37.777 mm and R25 = -36.295 mm are nearly equal in magnitude but opposite in sign, making the inter-element air lens in B5 strongly diverging. This is the patent's mechanism for coordinating spherical-aberration and astigmatism changes during focus travel.

## Data-File Implementation Notes

Patent surface 10 is an optically inert flat air-to-air reference surface with d = -0.10 mm. Negative thickness cannot be passed to the renderer, so the data file omits surface 10 and folds it into the preceding B2-B3 gap. The renderer gap labeled 9 is therefore d9 + d10: 22.01 / 10.44 / 0.25 mm rather than the patent's 22.11 / 10.54 / 0.35 mm followed by -0.10 mm.

Patent surfaces 29 and 30 are the optical block immediately in front of the sensor. The data file excludes this cover glass and folds the glass path into an air-equivalent image-plane spacing after surface 28. The folded image-plane spacings are 7.742 / 12.572 / 13.852 mm, obtained from d28 + 1.55 / 1.51633 + 3.31, and correspond to the patent BF row of 7.75 / 12.57 / 13.86 mm. A separate marginal-ray calculation on the rounded published prescription gives Gaussian BFLs of 7.963 / 12.589 / 14.238 mm from surface 28. The data file follows the patent image-plane spacing rather than refocusing the rounded table.

The patent does not provide semi-diameters. Renderer semi-diameters were inferred from multi-state ray envelopes and then reduced only as needed to satisfy the project constraints: sd/|R| < 0.90, front/rear element semi-diameter ratio <= 1.25, signed cross-gap sag intrusion <= 90% of the air gap, and positive edge thickness. The tightest retained checks are the L2 rim edge thickness at about 0.48 mm, the L14 rim edge thickness at about 0.48 mm, the surface 5 to 6 gap at about 89.5% intrusion, the surface 18A to 19 gap at about 86.3%, and the surface 24 to 25A gap at about 89.5%.

## Verification Summary

All load-bearing paraxial quantities were re-derived from the patent prescription using a y-nu ray trace. The trace treats surface 20 and surface 21 as a zero-air-gap contact pair, folds out the surface 10 negative reference spacing for renderer data only, and folds the cover glass into an air-equivalent final back focus for the data file.

| Quantity | Computed from re-extracted prescription | Patent / source value | Result |
|---|---:|---:|---|
| Gaussian EFL, wide | 12.571 mm | Patent focal row 12.84 mm | Deliberate distinction; record both values. |
| Gaussian EFL, middle | 22.807 mm | Patent focal row 22.90 mm | Close agreement. |
| Gaussian EFL, tele | 62.196 mm | Patent focal row 60.72 mm | Deliberate distinction; record both values. |
| Data-file folded image-plane gap, wide | 7.742 mm | Patent BF row 7.75 mm | Matches cover-glass folding. |
| Data-file folded image-plane gap, middle | 12.572 mm | Patent BF row 12.57 mm | Matches cover-glass folding. |
| Data-file folded image-plane gap, tele | 13.852 mm | Patent BF row 13.86 mm | Matches cover-glass folding. |
| Marginal-ray Gaussian BFL from surface 28, wide | 7.963 mm | Folded patent image-plane gap 7.742 mm | Rounded-table residual +0.221 mm. |
| Marginal-ray Gaussian BFL from surface 28, middle | 12.589 mm | Folded patent image-plane gap 12.572 mm | Rounded-table residual +0.017 mm. |
| Marginal-ray Gaussian BFL from surface 28, tele | 14.238 mm | Folded patent image-plane gap 13.852 mm | Rounded-table residual +0.386 mm. |
| B1 group focal length | +59.406 mm | +59.41 mm | Matches. |
| B2 group focal length | -12.765 mm | -12.77 mm | Matches. |
| B3 group focal length | +27.735 mm | +27.73 mm | Matches. |
| B4 group focal length | +25.733 mm | +25.73 mm | Matches. |
| B5 group focal length | -25.135 mm | -25.14 mm | Matches. |
| B6 group focal length | +33.803 mm | +33.80 mm | Matches. |
| Surface-by-surface Petzval sum | +0.003088 mm^-1 | Not tabulated | Derived. |
| Petzval radius | +323.8 mm | Not tabulated | Derived. |

All six zoom-group focal lengths re-compute to the patent values within normal table rounding. The patent's focal-length row is retained as the zoom-position label set, while the Gaussian paraxial EFL is documented separately. The data file keeps the patent image-plane spacing after cover-glass folding; it does not shift the image plane to the marginal-ray focus of the rounded public table.

## Sources

- US 2015/0219882 A1, Shuichi Mogi, Canon Kabushiki Kaisha, `Zoom Lens and Imaging Apparatus Having the Same`; primary source for prescription, zoom spacings, conditional expressions, and example identification.
- Canon Camera Museum, PowerShot G1 X Mark II: official Canon source for product timing, 12.5-62.5 mm focal range, f/2.0-3.9 aperture range, and 1.5-inch sensor description.
- Canon regional official PowerShot G1 X Mark II specifications: source for 14 elements in 11 groups, one double-sided UA aspherical lens, two double-sided aspherical lenses, 5 cm wide-angle closest focus, and 40 cm telephoto closest focus.
- OHARA official glass catalog/search pages for S-NPH2, S-LAH66, S-LAL8, S-NPH3, S-FSL5, S-TIH6, and S-LAH60V.
- HOYA optical glass catalog and molding-glass catalog data for TAFD35 / TAFD35L, M-TAF101, TAFD40, M-LAC130 / MP-LAC130, and M-TAFD305.
