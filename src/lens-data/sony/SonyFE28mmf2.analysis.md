## Patent Reference and Design Identification

**Patent:** US 10,191,254 B2  
**PCT:** PCT/JP2015/073662  
**Priority:** JP 2014-207959, October 9, 2014  
**Filed:** August 24, 2015 (PCT); March 20, 2017 (US national phase)  
**Granted:** January 29, 2019  
**Inventors:** Kouji Katou, Kota Omiya, Hiroshi Koizumi, Naoki Miyagawa  
**Assignee:** Sony Corporation, Tokyo  
**Title:** Wide-Angle Lens and Imaging Unit  
**Embodiment analyzed:** Numerical Example 10, FIG. 10, Tables 28-32  
**Worked examples in patent:** 10

Numerical Example 10 is the embodiment corresponding most closely to the production Sony FE 28mm F2 (SEL28F20). The identification rests on convergent prescription and manufacturer data rather than on a model name in the patent.

1. The prescription contains 9 glass elements in 8 air-spaced optical groups, matching Sony's published 8-group / 9-element specification for the SEL28F20.
2. The design uses three aspherical elements, each aspherical on both sides, and two ED fluorophosphate elements. Sony publishes the production lens as having 3 aspherical elements, one of them an AA element, and 2 ED elements.
3. The patent's Example 10 first-order focal length is 28.23 mm. Sony markets the lens as 28 mm.
4. The patent F-number is 2.06. Sony markets the lens as F2.0; the difference is ordinary patent-versus-marketing rounding.
5. The patent half angle of view is 38.27° (2ω = 76.54°). Sony publishes 75° for the full-frame diagonal angle of view. The remaining difference should be treated as a specification-method and rounding difference; the patent field value is the correct value for this prescription.
6. The patent describes an inner-focus system in which only the negative second lens group travels toward the image side during focusing. Sony describes the product as an inner-focus lens driven by a precision linear actuator.
7. The Japanese priority date, October 2014, precedes the March 2015 product introduction window and fits a normal pre-launch patent cadence.
8. Example 10 is the only worked example in the patent with the 28 mm, F2-class, 9-element / 8-group topology. Examples 1-8 are approximately 34 mm F1.44 designs, and Example 9 is a 23.3 mm F1.44 design.

## Optical Architecture

The patent design is a compact full-frame wide-angle prime with a positive-negative-positive functional group sequence: G1 positive, aperture stop, G2 negative, and G3 positive. It uses a front negative meniscus as a wide-converter element, but it should not be described as a strict long-back-focus retrofocus lens. The air-equivalent distance from the final glass surface to the image plane is about 17.96 mm, while the effective focal length is 28.23 mm; the back-focus-to-focal-length ratio is therefore about 0.64, not greater than 1.

The functional group powers verified from the patent prescription are:

| Group | Elements | Power role | Verified focal length |
|---|---:|---|---:|
| G1F | L1 | Negative front wide converter | -40.00 mm |
| G1R | L2-L5 | Positive rear section of G1 | +22.71 mm |
| G1 | L1-L5 | Positive front functional group | +25.21 mm |
| G2 | L6 | Negative inner-focus group | -53.04 mm |
| G3 | L7-L9 | Positive rear relay / correction group | +63.19 mm |

The manufacturer's 8-group count is not the same as the patent's three functional groups. The manufacturer count treats each air-spaced unit as a group: L1, L2, L3+L4, L5, L6, L7, L8, and L9. The patent's functional grouping instead treats L1-L5 as G1, L6 as G2, and L7-L9 as G3.

The design's compactness comes from distributing wide-angle correction across six aspherical surfaces and two ED elements rather than from a large number of additional spherical relay elements. The moving focus group is a single negative meniscus, so the autofocus moving mass is low.

The patent includes a 2.5 mm sensor-side cover glass with nd = 1.516798 and a final 1.0 mm air gap. The data file excludes that cover glass per project convention and folds it into the final air-equivalent back focal distance:

`15.309 + 2.5 / 1.516798 + 1.000 = 17.957209 mm`.

## Element-by-Element Analysis

### L1 — Negative meniscus, convex to object (G1F)

nd = 1.48749, νd = 70.4. Glass: 487/704 fluorocrown class, exact catalog matches include Schott N-FK5 and HOYA FC5; OHARA S-FSL5 is a nearby but not exact class match. f = -40.0 mm.

L1 is the front wide-converter element. Both radii are positive, R1 = +72.567 mm and R2 = +15.271 mm, producing a negative meniscus with a gently convex object-side surface and a strongly curved rear surface. Its job is to accept the wide off-axis bundles without requiring a large front barrel. The low refractive index and high Abbe number limit chromatic burden at the front of the system.

The L1/L2 air gap is the largest spacing inside G1 and is also the binding mechanical clearance constraint for renderer-safe semi-diameter estimation. The data file therefore uses a smaller rear clear semi-diameter for L1 than for its front surface.

### L2 — Negative meniscus, convex to image (G1R)

nd = 1.58144, νd = 40.9. Glass: 581/409 light-flint class, exact catalog matches include Schott LF5 and HOYA E-FL5; OHARA S-TIL25 is nearby but not exact. f = -30.3 mm.

L2 is a thin negative relay element at the front of G1R. Its strong first surface, R3 = -17.441 mm, helps control ray height before the L3+L4 cemented pair. The very weak rear surface, R4 = -1782.041 mm, is nearly plano in first-order effect.

The prescription code is 581/409. That supports the LF5 / E-FL5 class identification rather than an S-TIM-family identification.

### L3 + L4 — Cemented doublet in G1R

**L3:** nd = 1.84666, νd = 23.8. Glass: S-TIH53 (OHARA), dense flint. Standalone in-air f = -119.3 mm.  
**L4:** nd = 1.49700, νd = 81.6. Glass: S-FPL51 (OHARA) / FCD1 (HOYA) ED fluorophosphate. Standalone in-air f = +28.0 mm.  
**Cemented pair:** f = +36.29 mm.

The doublet is the main chromatic correction component in G1. It pairs a high-index, high-dispersion dense flint with a low-index, very low-dispersion ED fluorophosphate. The large Abbe-number separation, about 57.8, gives the pair strong axial color correction while leaving the cemented assembly positive overall.

The distinction between standalone and in-situ behavior matters here. L3 is a negative meniscus when treated as an isolated element in air, matching the patent prose. Inside the cemented doublet, its rear surface refracts into L4's lower-index ED glass rather than into air. The junction surface therefore has a different surface-power contribution than a standalone air interface.

The patent lists only nd and νd for this example. ED behavior is supported by catalog glass identity, but the patent does not tabulate nC, nF, ng, θgF, or ΔPgF. Secondary-spectrum statements therefore remain catalog-inferred rather than patent-tabulated.

### L5 — Biconvex positive, double aspheric, probable AA element (G1R)

nd = 1.77250, νd = 49.5. Glass: 773/495 class, best catalog match HOYA M-TAF1 / TAF1 class. f = +24.4 mm.

L5 is the strongest positive element in the design and lies immediately before the aperture stop. Both surfaces are aspherical. This placement is consistent with Sony's published statement that one of the production lens's three aspherical elements is an AA element, because a high-power pre-stop asphere is the most consequential place to assign the highest-precision molded asphere.

The stored code is approximately 773/495, and the best catalog match found for that pair is HOYA M-TAF1 / TAF1 class. With νd = 49.5, it also sits on the flint side of the usual crown/flint boundary; the safer class description is high-index, medium-dispersion moldable glass.

### L6 — Negative meniscus, double aspheric, moving focus group (G2)

nd = 1.58313, νd = 59.5. Glass: 583/595 dense-crown / barium-crown class; HOYA M-BACD12 and OHARA S-BAL42 are close catalog matches. f = -53.0 mm.

L6 is the entire second lens group and the only focusing element. During focusing from infinity to close range it moves toward the image side. The two neighboring air gaps change in opposite directions: the stop-to-L6 gap increases, and the L6-to-G3 gap decreases.

Both surfaces are aspherical and have the largest fourth-order coefficient magnitudes in the front half of the design. This is expected for a moving negative group: as the element translates, ray heights at L6 and at the first G3 surface change, so the aspheric profiles suppress focus-induced variation in spherical aberration and coma.

### L7 — Positive meniscus, double aspheric (G3)

nd = 1.58313, νd = 59.5. Glass: 583/595 dense-crown / barium-crown class; HOYA M-BACD12 and OHARA S-BAL42 are close catalog matches. f = +57.7 mm.

L7 begins G3 and restores positive relay power after the negative focus element. Both surfaces are aspherical. Surface 13A has no A4 term but carries A6, A8, and A10 terms; surface 14A carries both A4 and A6 terms. Table 29 gives A6 = +2.47 x 10^-7 for surface 14A, so that surface is not a purely fourth-order asphere.

The element's glass matches L6's nd/νd pair, giving manufacturing economy: the same moldable glass family can support the moving double-aspheric focus element and the first rear-group double-aspheric corrector.

### L8 — Positive meniscus, ED fluorophosphate (G3)

nd = 1.49700, νd = 81.6. Glass: S-FPL51 (OHARA) / FCD1 (HOYA). f = +45.5 mm.

L8 is the second ED element in the design. Its weak front surface and stronger rear surface give moderate positive power in the image-forming group. It works with the final dense-flint negative element L9 to reduce residual chromatic error in the rear group.

The L8/L9 pair is not cemented, so it should not be described as a classical cemented achromat. Its role is better described as separated ED/flint chromatic balancing in the rear relay group.

### L9 — Biconcave negative, final dense flint (G3)

nd = 1.84666, νd = 23.8. Glass: S-TIH53 (OHARA), dense flint. f = -34.0 mm.

L9 is the final refractive element. It has strong negative power mainly at the front surface, R17 = -32.556 mm, with a much weaker rear surface, R18 = +250.000 mm. Its position near the image side makes it effective for field curvature and lateral color management.

The element reuses the same dense-flint glass as L3, creating a front/rear dense-flint pairing with the ED elements L4 and L8. This is an economical chromatic-correction strategy: two glass types do the main ED/flint work at two separated positions in the lens.

## Glass Identification and Selection

The patent does not name glass manufacturers; it provides nd and νd only. The glass labels below are catalog identifications from manufacturer-published data, with uncertainty retained where multiple manufacturers publish equivalent or near-equivalent glasses.

| Element(s) | Patent nd | Patent νd | Corrected identification | Notes |
|---|---:|---:|---|---|
| L1 | 1.487489 | 70.4 | Schott N-FK5 / HOYA FC5 class; OHARA S-FSL5 nearby | 487/704 fluorocrown class. |
| L2 | 1.581440 | 40.9 | Schott LF5 / HOYA E-FL5 class; OHARA S-TIL25 nearby | 581/409 light-flint class. |
| L3, L9 | 1.846663 | 23.8 | S-TIH53 (OHARA) | Dense flint; exact OHARA match. |
| L4, L8 | 1.496997 | 81.6 | S-FPL51 (OHARA) / FCD1 (HOYA) | ED fluorophosphate. |
| L5 | 1.772502 | 49.5 | HOYA M-TAF1 / TAF1 class | 773/495 high-index, medium-dispersion moldable class; νd is flint-side. |
| L6, L7 | 1.583130 | 59.5 | HOYA M-BACD12 / OHARA S-BAL42 class | Moldable dense-crown / barium-crown class. |

The design therefore uses six distinct glass positions, not five. Repeated glasses appear at L3/L9, L4/L8, and L6/L7. The repeated use of S-TIH53 and S-FPL51-like glasses creates a front/rear chromatic balancing pattern, while the repeated 583/595 moldable glass supports the two double-aspherical elements surrounding the moving focus group.

## Focus Mechanism

The focus system is inner focus by movement of G2, which consists only of L6. G1, the aperture stop, and G3 remain fixed relative to the image plane. The movement direction is imageward when the subject distance changes from infinity to proximity.

The patent does not tabulate close-focus variable gaps for Example 10. The data file therefore solves the G2 travel paraxially against Sony's published close-focus distances while holding the image plane fixed in the folded-cover data coordinate. The lens has two manufacturer-published close-focus states: 0.29 m in AF and 0.25 m in MF. The data file uses 0.25 m as the absolute minimum focus distance and records the AF value in the focus description. Using the physical cover-glass thickness instead of the folded-air coordinate changes the solved 0.25 m travel by only about 0.02 mm, so the difference is below the precision justified by the patent's rounded close-focus data.

| State | D(STO-L6) | D(L6-G3) | Paraxial magnification |
|---|---:|---:|---:|
| Infinity | 2.300 mm | 8.871 mm | 0 |
| 0.29 m AF, solved | 5.878 mm | 5.293 mm | -0.1305x |
| 0.25 m MF, solved / data close state | 6.719 mm | 4.452 mm | -0.1601x |

The solved magnifications agree with Sony's published 0.13x AF and 0.16x MF maximum magnification values. The moving distance used for the 0.25 m data state is 4.419 mm imageward.

## Aspherical Surfaces

The design uses six aspherical surfaces on three elements: L5, L6, and L7. The patent uses the standard even-polynomial sag form with K = 0 for every aspherical surface:

`Z(h) = (h^2/R) / [1 + sqrt(1 - (1+K)(h/R)^2)] + A4 h^4 + A6 h^6 + A8 h^8 + A10 h^10`.

The following table reproduces the patent coefficients and adds the polynomial departure at the renderer-safe estimated semi-diameter used in the data file. The departures are estimates because the patent does not publish clear semi-diameters.

| Surface | Element | sd used | K | A4 | A6 | A8 | A10 | Polynomial departure at sd |
|---|---|---:|---:|---:|---:|---:|---:|---:|
| 8A | L5 front | 12.1 mm | 0 | -4.52E-06 | -4.73E-08 | +4.64E-10 | -3.50E-13 | -0.0557 mm |
| 9A | L5 rear | 11.2 mm | 0 | +1.82E-05 | -6.29E-08 | +5.57E-10 | -6.15E-13 | +0.2810 mm |
| 11A | L6 front | 9.95 mm | 0 | -5.29E-05 | +3.38E-07 | -1.35E-09 | 0 | -0.3202 mm |
| 12A | L6 rear | 9.9 mm | 0 | -5.19E-05 | +3.65E-07 | -1.30E-09 | -3.70E-12 | -0.3083 mm |
| 13A | L7 front | 11.5 mm | 0 | 0 | +3.09E-07 | -8.76E-10 | +1.10E-12 | +0.4913 mm |
| 14A | L7 rear | 12.2 mm | 0 | +2.68E-05 | +2.47E-07 | 0 | 0 | +1.4081 mm |

L5 is the likely production AA element because it is a strong, high-index, pre-stop positive asphere. L6 carries the strongest negative fourth-order terms and is the moving focus element. L7 supplies high-order rear-group correction; its front surface begins at A6, while its rear surface includes a substantial A6 term in addition to A4.

## Conditional Expressions

The patent gives three main conditional expressions for first-order power distribution. Example 10 satisfies expressions (1) and (3) directly. Expression (2) contains an internal inconsistency in the US text: the prose prints a lower bound of 0.95, but Table 31 lists Example 10 at 0.90 and Table 32 gives f1R = 22.71 mm and f1 = 25.21 mm, i.e. 0.901. If the printed 0.95 lower bound is read literally, Example 10 does not satisfy expression (2). If the intended lower bound is 0.90, as the worked-example table implies, it does.

| Expression | Formula | Printed patent range | Example 10 value | Verified values used |
|---|---|---:|---:|---|
| (1) | f1 / f | 0.5 < f1/f < 1.0 | 0.893 | f1 = 25.21 mm, f = 28.23 mm |
| (2) | f1R / f1 | 0.95 < f1R/f1 < 1.5, but Table 31 reports 0.90 | 0.901 | f1R = 22.71 mm, f1 = 25.21 mm |
| (3) | f2 / f3 | -1.0 < f2/f3 < -0.5 | -0.839 | f2 = -53.04 mm, f3 = 63.19 mm |

The data file records the exact computed ratio rather than forcing the value into the printed inequality.

## Verification Summary

All first-order numerical claims below were recomputed from Table 28 using a reduced-angle ABCD paraxial trace. The cover glass was included for patent verification and then folded into air-equivalent distance for the data file.

| Quantity | Computed | Patent / source value | Result |
|---|---:|---:|---|
| Effective focal length | 28.2339 mm | 28.2 mm | matches rounding |
| Patent F-number from stop | 2.0603 with STO sd = 9.76 mm | 2.06 | matches rounding |
| G1 focal length | 25.2129 mm | 25.21 mm | matches |
| G1R focal length | 22.7092 mm | 22.71 mm | matches |
| G2 focal length | -53.0420 mm | -53.04 mm | matches |
| G3 focal length | 63.1907 mm | 63.19 mm | matches |
| f1/f | 0.8930 | 0.89 | matches rounding |
| f1R/f1 | 0.9007 | 0.90 | matches Table 31 rounding |
| f2/f3 | -0.8394 | -0.84 | matches rounding |
| Petzval sum, surface-by-surface φ/(n n') | +0.003055 mm^-1 | not listed | derived |
| Reciprocal Petzval-sum magnitude | 327.3 mm | not listed | derived |
| Air-equivalent final BFD after removing cover glass | 17.9572 mm | not listed | derived |
| 0.25 m close-focus G2 travel | 4.4192 mm imageward | Sony 0.25 m MF / 0.16x | solved; magnification matches |

The patent's listed half angle, 38.27°, should be used as the prescription field specification. A simple first-order calculation from the 21.63 mm full-frame semi-diagonal and 28.2339 mm EFL gives arctan(21.63 / 28.2339) = 37.47°, which is lower because it ignores the wide-angle distortion and the angle definition used in the full patent design.

## Sources

1. US Patent 10,191,254 B2, "Wide-Angle Lens and Imaging Unit," Sony Corporation, granted January 29, 2019. Primary prescription source: Example 10, FIG. 10, Tables 28-32.
2. Sony Corporation, "SEL28F20 Specifications" and product features: 28 mm focal length, 8/9 construction, 75° full-frame angle of view, F2 maximum aperture, 9 aperture blades, 0.29 m AF / 0.25 m MF close focus, 0.13x AF / 0.16x MF maximum magnification, 49 mm filter, 64 x 60 mm dimensions, 200 g weight, 3 aspherical elements including one AA element, 2 ED elements, inner focus, and precision linear actuator.
3. OHARA optical glass catalog and individual OHARA datasheets: S-TIH53, S-FPL51, S-BAL42, S-FSL5, and OHARA glass-code/cross-reference data.
4. HOYA optical glass catalog / optical glass data and HOYA Optics Division materials: M-TAF1 / TAF1, M-BACD12 / BACD12, FC5, E-FL5, and FCD1 class cross-references.
5. Schott optical glass catalog and glass-code data: N-FK5 and LF5 cross-references.
