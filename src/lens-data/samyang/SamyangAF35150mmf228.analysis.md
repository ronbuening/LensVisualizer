# SAMYANG AF 35-150mm f/2-2.8 FE / L

## Patent Reference and Design Identification

**Patent:** US 2025/0231383 A1  
**Application Number:** 18/664,519  
**Filed:** May 15, 2024  
**Published:** July 17, 2025  
**Priority:** January 11, 2024 (KR 10-2024-0004999)  
**Inventor:** Ju Yeon Jo  
**Assignee:** Samyang Optics Co., Ltd., Changwon-si, KR  
**Title:** Lens Optical System with High Resolution  
**Embodiment analyzed:** Third embodiment, optical system 100-3, Tables 7-9 and Figs. 9-12

The third embodiment is the strongest match for the production Samyang AF 35-150mm f/2-2.8 FE / L optical formula. The patent prescription in Table 7 has 21 physical lens elements in 18 air-separated groups when the hybrid resin layer is counted as part of its glass substrate lens and the sensor cover plate is excluded. The production specifications list the same 21 elements in 18 groups, and the patent's special-surface pattern - one hybrid asphere at surface 6 and two dual-sided all-glass aspherical lenses at surfaces 30-31 and 40-41 - corresponds directly to the production statement of 2 ASP + 1 H-ASP. The patent prescription itself exposes five clear νd≈81.6 ED fluorophosphate elements; the sixth ED element in the production specification remains a manufacturer classification that cannot be uniquely assigned from the patent's nd/νd values alone.

The computed patent focal-length range is 35.989-146.969 mm at infinity, with F-numbers 2.07 / 2.63 / 2.90 at the wide, middle, and telephoto positions. This agrees with the marketed 35-150mm f/2-2.8 designation after normal production rounding. The patent full field angles of 61.8° and 16.4° also agree with full-frame 35 mm and 150 mm behavior. The focus mechanism matches as well: Table 9 varies only D31 and D33 for close focus, meaning that the single negative Gm3 element translates internally while the overall lens-to-sensor length remains fixed.

The Korean priority date follows the commercial launch of the Sony FE lens and precedes the L-mount announcement. That timing is consistent with a post-launch patent family rather than a speculative early design. The L-mount and FE production pages use the same optical construction and special-element counts, so the data file lists both `sony-fe` and `l-mount` as production mount variants. Their official wide-end minimum focusing distances differ slightly - 0.33 m for the FE version and 0.32 m for the L-mount version - so the data file uses the FE value for its single `closeFocusM` field while the analysis records both.

## Optical Architecture

The design is a positive-lead, high-ratio full-frame zoom arranged as three front groups followed by a compound rear group:

`G13 (+) / G23 (-) / G33 weak relay / stop / Gf3 (+ correction) / Gm3 (- focus) / Gr3 (+ image-side correction)`.

The first group G13 contains a cemented front doublet and a separate ED meniscus. It is a positive collector group, not a negative retrofocus front group. The second group G23 is the principal negative variator. The third group G33 is a weak relay between the variator and the rear correction block. Behind the stop, Gf3 supplies most of the positive power and chromatic correction, Gm3 is the single moving focus group, and Gr3 completes the image-side correction.

The zoom movement is dominated by D5, the air gap between G13 and G23. At infinity D5 expands from 1.200 mm at the wide end to 49.374 mm at the telephoto end. At the same time, D12 and D18 collapse, pulling the variator and relay groups closer to the rear assembly. The patent table also lists D41, the distance from the final lens surface to the sensor cover plate. In the data file the cover plate is omitted and its air-equivalent path is folded into the last surface's back-focus variable.

| Variable | Wide infinity | Middle infinity | Tele infinity | Function |
|---|---:|---:|---:|---|
| D5 | 1.200 mm | 23.041 mm | 49.374 mm | G13-to-G23 zoom separation |
| D12 | 9.037 mm | 4.826 mm | 1.849 mm | G23-to-G33 zoom separation |
| D18 | 23.915 mm | 10.809 mm | 1.700 mm | G33-to-stop/rear zoom separation |
| D31 | 3.373 mm | 2.868 mm | 1.195 mm | Gf3-to-Gm3 spacing; zoom + focus |
| D33 | 10.067 mm | 9.585 mm | 11.269 mm | Gm3-to-Gr3 spacing; zoom + focus |
| BF in air | 14.749 mm | 29.911 mm | 37.521 mm | D41 plus cover-glass air-equivalent path |

The rear cover/filter plate in the patent is a 2.5 mm flat plate of nd = 1.5168 followed by a small residual air spacing. It is a sensor-side protection or filter element, not a photographic lens element. Omitting it from the data file changes no refractive power and preserves the paraxial focus by using the patent's BFE-in-air values as the final variable back focus.

## Element-by-Element Analysis

### G13 - First Lens Group, Positive Front Collector

#### L1 - Negative Meniscus, convex to object

nd = 1.80610, νd = 33.27. Glass: Hoya NBFD15 / 806-333 dense flint class. f = -247.4 mm.

L1 is the negative flint half of the front cemented doublet. It gives the front group controlled negative color power while the adjoining ED crown supplies the positive power. The doublet reduces the chromatic load before the beam reaches the negative variator group.

#### L2 - Positive ED Meniscus, cemented to L1

nd = 1.49700, νd = 81.61. Glass: S-FPL51 / FCD1 ED fluorophosphate class. f = +153.8 mm.

L2 supplies most of the doublet's positive power. Its very high Abbe number is the first part of the lens's repeated ED strategy. The L1+L2 cemented doublet has an in-air focal length of about +420 mm, so the cemented unit is weakly positive even though its first element is negative.

#### L3 - Positive ED Meniscus

nd = 1.49700, νd = 81.61. Glass: S-FPL51 / FCD1 ED fluorophosphate class. f = +174.8 mm.

L3 is a separate positive ED meniscus following the front doublet. It increases the first group's positive power without adding much secondary spectrum. Together L2 and L3 keep the largest-diameter positive elements in relatively low-density ED glass rather than in very dense lanthanum glass.

### G23 - Second Lens Group, Negative Variator

#### L4r/L4g - Hybrid Aspherical Meniscus

Resin layer: nd = 1.51700, νd = 52.00, f = -771.8 mm as a standalone layer. Glass body: nd = 1.77250, νd = 49.62, f = -46.8 mm. Glass: S-LAH66 / TAF1 lanthanum-flint class plus UV-curable resin.

This is the sole hybrid aspherical element in the prescription. The resin layer is only 0.1 mm thick and carries aspherical surface 6A. The glass body is a high-index, flint-side lanthanum glass; despite the lanthanum family name, νd = 49.62 places it on the flint side of the crown/flint boundary used in this project.

The hybrid asphere is placed at the entrance to the negative variator group, where it can correct off-axis aberrations before the beam is strongly diverged by L5.

#### L5 - Biconcave ED Negative

nd = 1.49700, νd = 81.61. Glass: S-FPL51 / FCD1 ED fluorophosphate class. f = -56.4 mm.

L5 is the main negative-power element of G23. Its use of a high-Abbe ED glass is important: the variator must have substantial negative power, but its own chromatic contribution needs to remain limited so that zooming does not create large color shifts.

#### L6 - Positive Dense-Flint Meniscus

nd = 1.80610, νd = 33.27. Glass: Hoya NBFD15 / 806-333 dense flint class. f = +110.0 mm.

L6 closes the negative variator with a positive dense-flint meniscus. In combination with L5 it helps balance color and reduces the net negative group power to the level needed for the 4.1x patent zoom ratio.

### G33 - Third Lens Group, Weak Relay

#### L7 - Biconvex Positive Dense Flint

nd = 1.71740, νd = 29.50. Glass: S-TIH1 / N-SF1 dense flint class. f = +89.6 mm.

L7 begins the relay group with moderate positive power. It redirects the beam after the variator and helps set the pupil geometry before the stop.

#### L8 - Negative Meniscus, phosphate-crown class

nd = 1.59350, νd = 67.33. Glass: M-PCD51 / H-ZPK3 phosphate-crown class. f = -58.5 mm.

L8 is a moderate-index, high-Abbe negative meniscus. It is not a true ED fluorophosphate element in the same sense as the νd = 81.6 elements, but it does reduce the chromatic burden of the relay group.

#### L9 - Biconvex Positive Dense Flint

nd = 1.80610, νd = 33.27. Glass: Hoya NBFD15 / 806-333 dense flint class. f = +177.0 mm.

L9 completes the weak relay. The standalone in-air focal length of G33 is very long, about +1977 mm, so the group's function is not to add substantial power but to condition the beam and pupil position for the rear correction section.

### Gf3 - Fourth Lens Group, Positive Rear Correction Block

#### L10 - Positive Meniscus, HR glass

nd = 1.92290, νd = 20.88. Glass: Hoya E-FDS1 / 923-209 ultra-high-index dense flint class. f = +138.3 mm.

L10 is the first element after the stop. Its very high refractive index helps provide positive power with less curvature than an ordinary glass would require. It also reduces the Petzval contribution per unit surface power because the Petzval term is computed as φ/(n·n').

#### L11 - Biconvex Light Crown

nd = 1.51820, νd = 58.96. Glass: S-NSL3 / E-C3 light-crown class. f = +64.9 mm.

L11 is a conventional positive crown element in the forward part of Gf3. It supplies useful positive power without introducing the weight penalty of the HR glasses.

#### L12 - Positive ED Meniscus

nd = 1.49700, νd = 81.6072. Glass: S-FPL51 / FCD1 ED fluorophosphate class. f = +206.9 mm.

L12 is a weak positive ED meniscus immediately before the cemented triplet. Its low dispersion prepares the beam for the strong buried chromatic correction performed by L13-L15.

#### L13 - Biconvex ED Positive, cemented triplet front element

nd = 1.49700, νd = 81.6072. Glass: S-FPL51 / FCD1 ED fluorophosphate class. f = +43.9 mm.

L13 is the strong positive ED member of the triplet. Its high Abbe number is essential because this element carries substantial positive power near the aperture stop.

#### L14 - Biconcave HR Negative, cemented triplet center element

nd = 2.00100, νd = 29.1342. Glass: S-LAH99 / TAFD55 ultra-high-index lanthanum flint class. f = -13.1 mm.

L14 is the strongest single element in the lens by power. It is the dense negative center of the cemented triplet, and the index steps at the L13-L14 and L14-L15 cemented interfaces create strong buried refractive surfaces. This triplet has an in-air focal length of about -37.7 mm and is a major contributor to chromatic and spherochromatic correction.

#### L15 - Positive Phosphate-Crown Meniscus, cemented triplet rear element

nd = 1.61800, νd = 63.3949. Glass: N-PSK53A / PCD4 / S-PHM52 phosphate-crown class. f = +40.8 mm.

L15 closes the cemented triplet with a positive crown-like element. Its Abbe number sits between the ED glass of L13 and the dense flint of L14, giving the triplet more chromatic degrees of freedom than a simple ED/flint doublet.

#### L16 - Biconvex Positive Dual Asphere

nd = 1.80760, νd = 40.8841. Glass: NBFD13 / M-NBFD130 / D-ZLaF81 neighborhood, high-index lanthanum-flint class. f = +27.6 mm.

L16 carries aspherical surfaces 30A and 31A. It is the strongest positive element in Gf3 and sits just before the moving focus group. Its dual aspheres correct residual spherical aberration and coma from the high-power rear correction block.

### Gm3 - Fifth Lens Group, Moving Focus Group

#### L17 - Negative Meniscus Focus Element

nd = 1.59270, νd = 35.445. Glass: S-FTM16 light-flint class. f = -50.2 mm.

L17 is the only moving focus element. It is a negative meniscus with a nearly flat object-side surface and a much stronger image-side surface. Because it is a single small element, it is mechanically favorable for a stepping-motor internal-focus drive. The patent describes this kind of focus-group mass reduction as part of the AF-speed and lightweighting strategy.

### Gr3 - Sixth Lens Group, Image-Side Correction Group

#### L18 - Biconvex Positive Dense Flint

nd = 1.86970, νd = 20.0188. Glass: FDS20-W / 870-200 dense flint class. f = +39.7 mm.

L18 opens the final rear group with strong positive power. Its low Abbe number is balanced by neighboring negative power, so it should not be interpreted in isolation as a color-correction element.

#### L19 - Biconcave HR Negative

nd = 1.92290, νd = 20.88. Glass: Hoya E-FDS1 / 923-209 ultra-high-index dense flint class. f = -49.1 mm.

L19 is a negative high-index element. Its negative power contributes a compensating Petzval term and helps flatten the field after the powerful positive rear elements.

#### L20 - Symmetric Positive Dense Phosphate Flint

nd = 1.80810, νd = 22.7639. Glass: S-NPH1 / FD225 dense phosphate-flint class. f = +103.6 mm.

L20 is nearly symmetric, with equal and opposite radii. It adds mild positive power while avoiding excessive coma contribution near the image side.

#### L21 - Final Negative Meniscus, dual aspherical field flattener

nd = 1.58480, νd = 58.7091. Glass: proprietary 585/587 crown-class glass, near the Sumita K-SKLD family but not an exact public-catalog match. f = -65.3 mm.

L21 is the final imaging element and carries aspherical surfaces 40A and 41A. The patent explicitly describes the last element nearest the image side as a meniscus convex toward the image side. This shape is used to reduce flare from sensor-side reflections and to help flatten the image field close to the sensor.

## Glass Identification and Selection

The patent gives only nd and νd values, not glass names. The following identifications are catalog-class matches, not patent-named materials. Exact vendor selection remains uncertain unless the same nd/νd pair is uniquely tied to a catalog entry.

| Element(s) | Patent nd / νd | Catalog-class identification | Function |
|---|---:|---|---|
| L1, L6, L9 | 1.80610 / 33.27 | Hoya NBFD15 / 806-333 dense flint class | Flint partners in front and relay groups |
| L2, L3, L5, L12, L13 | 1.49700 / 81.61 | S-FPL51 (Ohara) / FCD1 (Hoya) ED fluorophosphate | Primary low-dispersion elements |
| L4 resin | 1.51700 / 52.00 | UV-curable hybrid resin | Aspherical replicated layer |
| L4 glass | 1.77250 / 49.62 | S-LAH66 / TAF1 lanthanum-flint class | Hybrid substrate and variator correction |
| L7 | 1.71740 / 29.50 | S-TIH1 / N-SF1 dense flint class | Relay positive power |
| L8 | 1.59350 / 67.33 | M-PCD51 / H-ZPK3 phosphate-crown class | Low-dispersion relay element |
| L10, L19 | 1.92290 / 20.88 | E-FDS1 / 923-209 ultra-high-index dense flint class | HR power and Petzval management |
| L11 | 1.51820 / 58.96 | S-NSL3 / E-C3 light crown class | Positive rear-group power |
| L14 | 2.00100 / 29.13 | S-LAH99 / TAFD55 ultra-high-index lanthanum flint | Strong buried negative triplet element |
| L15 | 1.61800 / 63.39 | N-PSK53A / PCD4 / S-PHM52 phosphate-crown class | Triplet rear positive crown |
| L16 | 1.80760 / 40.88 | NBFD13 / M-NBFD130 / D-ZLaF81 neighborhood | Molded asphere; high-index flint-side glass |
| L17 | 1.59270 / 35.45 | S-FTM16 light-flint class | Lightweight negative focus element |
| L18 | 1.86970 / 20.02 | FDS20-W / 870-200 dense flint class | Strong positive rear element |
| L20 | 1.80810 / 22.76 | S-NPH1 / FD225 dense phosphate flint | Symmetric image-side positive lens |
| L21 | 1.58480 / 58.71 | proprietary 585/587 crown-class glass | Final dual-asphere field flattener |

The strict ED count visible in the patent prescription is five: L2, L3, L5, L12, and L13 all use the νd ≈ 81.6 fluorophosphate glass. The production specification lists six ED elements. The sixth cannot be uniquely identified from the patent alone. It is most plausibly a marketing classification applied to L8 (νd = 67.33) or L15 (νd = 63.39), but neither is equivalent to the five νd = 81.6 ED elements. The analysis therefore records the product count but avoids assigning the sixth ED element as a patent fact.

Three elements clearly satisfy the project's HR convention of nd > 1.9: L10, L14, and L19. L18 is high index but does not cross nd = 1.9. L16 is also high index but remains below that HR threshold.

## Focus Mechanism

Focusing is internal and is performed by Gm3, a single negative meniscus element. At close focus D31 increases and D33 decreases by the same amount at each zoom position, so the group translates without changing its own internal thickness or the positions of the groups before and after it.

| Zoom position | D31 infinity | D31 MOD | D33 infinity | D33 MOD | Gm3 travel |
|---|---:|---:|---:|---:|---:|
| Wide | 3.373 mm | 6.792 mm | 10.067 mm | 6.648 mm | 3.419 mm imageward |
| Middle | 2.868 mm | 7.233 mm | 9.585 mm | 5.220 mm | 4.365 mm imageward |
| Tele | 1.195 mm | 8.764 mm | 11.269 mm | 3.700 mm | 7.569 mm imageward |

The patent lists close-focus magnification β = 0.175 / 0.174 / 0.183 at the wide, middle, and telephoto positions. It also lists MOD object distances D0 = 157.000 / 334.990 / 635.000 mm from the first lens surface. Adding the patent OAL values gives approximate sensor-to-subject distances of 0.314 m, 0.496 m, and 0.810 m. These are close to, but not identical with, the official production values: 0.33 m / 0.85 m for the FE version and 0.32 m / 0.85 m for the L-mount version. The difference is consistent with normal production tuning, mount-specific metadata, and the patent's first-surface object-distance convention.

## Aspherical Surfaces

The patent uses the standard conic-plus-even-polynomial sag form:

$$
z = \frac{c r^2}{1 + \sqrt{1 - (1+K)c^2 r^2}} + A r^4 + B r^6 + C r^8 + D r^{10} + E r^{12},
$$

where $c = 1/R$ and $K$ is the ordinary optical conic constant. Under this convention, $K = 0$ is a sphere, $K = -1$ is a paraboloid, $K < -1$ is a hyperboloid, and $K > 0$ is an oblate ellipsoidal conic. The positive K values on surfaces 31A and 41A are therefore not hyperboloidal surfaces.

| Surface | Element | K | A4 | A6 | A8 | A10 | A12 |
|---|---|---:|---:|---:|---:|---:|---:|
| 6A | L4 resin | -2.3031000e-2 | 2.5797372e-6 | 8.2727806e-10 | -2.6988358e-12 | 4.8379670e-15 | 1.4902431e-18 |
| 30A | L16 front | 1.2053900e-1 | -7.2934350e-6 | 1.0526274e-8 | -1.4140902e-10 | 6.7963991e-13 | -1.5196041e-15 |
| 31A | L16 rear | 3.5178070e0 | 4.9067293e-6 | 1.9798820e-9 | -1.5441265e-10 | 7.2185395e-13 | -1.6174730e-15 |
| 40A | L21 front | -2.9594600e-1 | -3.4369019e-5 | 1.1581980e-7 | -3.0168726e-10 | -2.3770311e-13 | 1.3924378e-15 |
| 41A | L21 rear | 6.7343380e0 | -3.4735416e-5 | 1.3166564e-7 | -4.3815092e-10 | 6.8481297e-13 | -2.9974461e-16 |

Surface 6A is a replicated hybrid asphere at the front of the negative variator group. Surfaces 30A and 31A are a dual-sided molded asphere in the high-power rear correction block. Surfaces 40A and 41A are the final dual-sided field-flattening asphere close to the image plane. This distribution places aspheres at three different aberration-control zones: entrance to the variator, near the rear high-power block, and immediately before the sensor.

## Chromatic Correction Strategy

The chromatic correction is distributed rather than concentrated in a single apochromatic group. The front collector uses two ED elements, L2 and L3. The negative variator uses one ED element, L5. The rear correction group adds two more ED elements, L12 and L13, immediately before and within the cemented triplet.

The L13-L14-L15 triplet is the most important local chromatic correction unit. It combines a strong positive ED element, an extremely high-index negative flint, and a positive phosphate-crown-class element. The buried cemented interfaces provide strong chromatic leverage without adding additional air-glass reflections.

The final group uses a different strategy: high-index positive and negative elements are paired so that some chromatic contributions cancel while the negative elements continue to help the Petzval sum. Because the patent publishes no partial-dispersion deviations for the actual melts, the design can be described as a well-corrected achromatic zoom from patent data alone, not as an apochromatic design in the strict partial-dispersion sense.

## Conditional Expressions

The patent gives four general conditions and Table 13 lists the values for the third embodiment.

| Condition | Patent value for 100-3 | Result |
|---|---:|---|
| $0.52 \le L_{Gm}/L_f \le 0.65$ | 0.5625 | Satisfied |
| $Vd_{G\text{-}avg} \ge 70$ | 81.6100 | Satisfied |
| $4.6 \le LW_{Gm}/L_d \le 13.2$ | 12.4386 | Satisfied, near upper bound |
| $1/n_a \ge 0.59$ | 0.592 | Satisfied |

For the third embodiment Table 13 gives $L_{Gm} = 42.5260$ mm, $L_f = 75.6010$ mm, and $L_d = 3.4189$ mm. The first ratio places the focus group a little beyond the middle of the rear-group assembly. The second focus-travel ratio is close to the upper limit, indicating that the design uses a relatively short travel for a lightweight focus element but still leaves enough travel to avoid excessive actuator sensitivity.

The average-index condition limits the amount of very high-index, high-specific-gravity glass. The design still uses three HR elements, but the extensive use of low-density ED fluorophosphate glass in the larger front elements keeps the average index within the patent's weight-control condition.

## Verification Summary

A direct prescription audit against Table 7 found no surface-order, radius, thickness, refractive-index, or Abbe-number mismatches in the data file after the sensor cover plate was intentionally excluded. The Table 8 aspherical coefficients also match the data file coefficient-by-coefficient. Table 9 variable spacings match the data file, with D41 represented by the patent's BFE-in-air row because the cover glass is folded into the final back-focus spacing.

A paraxial y-nu ray trace was run from the patent prescription after omitting the plane sensor cover and folding its air-equivalent path into the last back-focus spacing. The independent trace reproduces the patent within the precision expected from rounded table values.

| Quantity | Wide patent | Wide computed | Middle patent | Middle computed | Tele patent | Tele computed |
|---|---:|---:|---:|---:|---:|---:|
| EFL | 35.989 mm | 36.005 mm | 73.438 mm | 73.443 mm | 146.969 mm | 146.894 mm |
| BFE in air | 14.749 mm | 14.765 mm | 29.911 mm | 29.921 mm | 37.521 mm | 37.509 mm |

The maximum EFL residual is 0.075 mm, and the maximum BFE residual is 0.016 mm. Those differences are consistent with the number of decimal places published in the prescription.

The same trace gives these standalone in-air group focal lengths at the wide configuration: G13 = +125.7 mm, G23 = -29.5 mm, G33 = +1977 mm, Gf3 = +33.3 mm, Gm3 = -50.2 mm, and Gr3 = +435.8 mm. These are standalone group powers only; they are not the same as the in-situ contribution of each group in the assembled zoom.

The L1+L2 cemented front doublet computes to +420.2 mm in air. The L13+L14+L15 cemented triplet computes to -37.7 mm in air. This confirms that the rear triplet is a strong negative correction unit despite containing two positive elements.

The surface-by-surface Petzval sum, using $\sum \phi/(n n')$, is +0.000717 mm^-1, corresponding to a Petzval radius of about 1394 mm. The value is essentially unchanged across zoom because the surface powers do not change; zooming changes only air separations.

The patent does not publish semi-diameters. The data file therefore uses conservative estimated semi-diameters for rendering and paraxial visualization. They should not be interpreted as measured mechanical clear apertures.

## Sources

- US 2025/0231383 A1, "Lens Optical System with High Resolution," Samyang Optics Co., Ltd., published July 17, 2025.
- Samyang US product page, AF 35-150mm f/2-2.8 FE, consulted for production element/group count, special-element count, minimum focusing distance, magnification, aperture, filter size, and AF motor.
- Samyang US product page, AF 35-150mm f/2-2.8 L, consulted for L-mount production specification and shared optical-construction metadata.
- OHARA Optical Glass catalog and pocket catalog, consulted for S-FPL51, S-LAH66, S-LAH99/S-LAH99W, S-TIH1, S-NSL3, S-PHM52, S-FTM16, and S-NPH1 class matches.
- SCHOTT N-PSK53A datasheet, consulted for the 1.61800 / 63.39 phosphate-crown match.
- SUMITA K-SKLD datasheets, consulted for the final crown-class aspherical-element neighborhood; no exact public-catalog match was asserted for L21.
- CDGM D-ZLaF81 and H-ZPK-family data, consulted for high-index molded-glass and phosphate-crown cross-checks.
