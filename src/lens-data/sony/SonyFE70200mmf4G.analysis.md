# Sony FE 70-200mm F4 G OSS — Patent Optical Analysis

## Patent Reference and Design Identification

**Patent:** US 2015/0226945 A1  
**Application Number:** 14/611,398  
**Priority:** JP 2014-024197, filed February 12, 2014  
**Filed:** February 2, 2015  
**Published:** August 13, 2015  
**Inventors:** Takumi Matsui; Keita Kaifu  
**Applicant:** Sony Corporation  
**Title:** Zoom Lens and Optical Apparatus  
**Embodiment analyzed:** Numerical Example 1, Tables 1–3 and FIG. 1

Numerical Example 1 is the closest patent prescription for the Sony FE 70-200mm F4 G OSS (SEL70200G). The patent example is a 21-element, 15-group full-frame telephoto zoom whose computed focal-length range is 72.16–193.91 mm by independent paraxial trace, matching the patent-stated 72.0974–193.9726 mm range within 0.07 mm at all three zoom positions. Sony's production specification gives a 70–200 mm focal-length range, f/4 maximum aperture, 15 groups / 21 elements, Sony E mount, 35 mm full-frame coverage, Optical SteadyShot, a 72 mm filter thread, and a 1.0–1.5 m autofocus close-focus range.

The patent also matches the production lens mechanically and functionally. Its four main groups follow a positive-negative-positive-positive power sequence. G1, G41, and G43 are stationary relative to the image plane during zooming; G2, G3, and G42 move axially; and G42 also performs focusing from infinity to close range. G43A, the front cemented doublet of G43, is explicitly identified as the image-blur correction group. The patent's Numerical Example 1 contains three aspherical surfaces, one Super-ED class positive element in G1, two ED-class positive elements, and an optical-stabilization subgroup, which agrees with the production lens's published feature set.

## Optical Architecture

The lens is a four-group telephoto zoom of the form G1(+), G2(−), G3(+), and G4(+), with the fourth group divided into G41(+), G42(−), and G43(+). G1 is the front collector and telephoto color-correction group. G2 is the primary variator. G3 is the compensator. G41 is the high-power stationary relay group and contains the aperture stop. G42 is a compact moving negative focusing group. G43 is the rear relay and exit-pupil-control group, with its front doublet G43A serving as the optical-stabilization group.

Independent paraxial group powers from the transcribed surface data are:

| Group | Focal length (mm) | Function |
|---|---:|---|
| G1 | +87.0 | Stationary front collector / chromatic-correction group |
| G2 | -26.4 | Moving negative variator |
| G3 | +79.1 | Moving positive compensator |
| G41 | +50.4 | Stationary high-power relay; contains stop |
| G42 | -47.3 | Moving negative focus / zoom-assist group |
| G43 | +263.6 | Rear relay, IS support, exit-pupil control |

The patent track length is 190.0000 mm at all three zoom positions. At the telephoto end, the track-length-to-EFL ratio is approximately 0.98, so the telephoto end is just inside the strict telephoto condition. At the wide end, the same lens is not telephoto in the strict first-order sense; it is better described as the wide end of an internal-zoom telephoto lens.

During zooming from wide to telephoto, d5 increases from 1.5000 to 32.3677 mm as G2 moves away from G1, d12 decreases from 24.0067 to 1.1000 mm as G2 approaches G3, d17 reverses through the middle position, d25 decreases from 4.5426 to 2.8188 mm, and d28 changes correspondingly behind G42. This split zoom action allows G4 to contribute a modest zoom ratio while keeping the total optical track fixed.

## Element-by-Element Analysis

### L11 — Negative Meniscus, convex to object

nd = 1.92286, νd = 20.9. Glass: N-SF66 / E-FDS1 class, six-digit code 923209. f = -357.6 mm.

L11 is the negative high-index, high-dispersion member of the front cemented pair L11+L12. Its role is chromatic rather than simply refractive: it supplies the dispersive half of the first group's primary achromat while allowing the front surface curvatures to remain moderate.

### L12 — Biconvex Positive, cemented with L11

nd = 1.49700, νd = 81.6. Glass: S-FPL51 / FCD1 class ED fluorophosphate. f = +134.9 mm.

L12 is the low-dispersion positive partner of L11. The L11/L12 interface carries much of the achromatizing work because the refractive-index step is large while the two elements share a cemented surface. The pair is followed by the still lower-dispersion L13 to reduce secondary spectrum at the telephoto end.

### L13 — Positive Meniscus, convex to object

nd = 1.43700, νd = 95.1. Glass: FCD100 / S-FPL53 class Super ED fluorophosphate. f = +139.7 mm.

L13 is the Super-ED-class element in G1. Its Abbe number satisfies the patent's conditional expression for a very low-dispersion positive element in the first group. Placing this glass behind the cemented front achromat reduces residual axial color where the marginal ray heights are still large.

### L21 — Biconcave Negative

nd = 1.91082, νd = 35.3. Glass: TAFD35 / H-ZLaF4L class, six-digit code 911353. f = -31.4 mm.

L21 carries the largest single negative power in the variator group. Its front surface is nearly flat and its rear surface supplies the strong divergence, a form that helps control incidence angles as G2 moves through the zoom range.

### L22 — Biconcave Negative, cemented with L23

nd = 1.48749, νd = 70.4. Glass: N-FK5 / FC5 / S-FSL5 class, six-digit code 487704. f = -50.8 mm.

L22 is the low-dispersion member of the L22+L23 doublet. The patent prose describes L21, L22, and L23 as cemented, but Table 1 places a 5.4000 mm air gap between L21 and L22. The numerical prescription is therefore modeled as L21 separated from the cemented L22+L23 pair.

### L23 — Biconvex Positive, cemented with L22

nd = 1.92286, νd = 20.9. Glass: N-SF66 / E-FDS1 class, six-digit code 923209. f = +34.7 mm.

L23 is the high-index, high-dispersion positive member of the G2 achromat. The cemented pair is net positive in isolation, partially offsetting L21 and L24 so that G2 remains a strong but not excessive negative variator.

### L24 — Negative Meniscus, concave to object

nd = 1.90366, νd = 31.3. Glass: N-LASF46A / S-LAH95 / TAFD25 class, six-digit code 904313. f = -75.1 mm.

L24 completes the negative G2 group and contributes field correction at the rear of the moving variator. Its meniscus shape and high index permit negative power without extreme curvature.

### L31 — Biconvex Positive

nd = 1.74077, νd = 27.8. Glass: S-TIH13 / E-FD13 class, six-digit code 741278. f = +131.0 mm.

L31 begins the positive compensator group. It is separated from L32 by a 0.1000 mm air gap in Table 1, although the prose describes G3 as a cemented three-lens unit. The data file follows the numerical table.

### L32 — Negative Meniscus, cemented with L33

nd = 1.92286, νd = 20.9. Glass: N-SF66 / E-FDS1 class, six-digit code 923209. f = -97.7 mm.

L32 is the dispersive negative member of the G3 cemented doublet. It corrects chromatic variation introduced as G3 moves to compensate the image plane during zooming.

### L33 — Biconvex Positive, cemented with L32

nd = 1.60311, νd = 60.7. Glass: S-BSM14 / N-SK14 / BACD14 class, six-digit code 603607. f = +65.1 mm.

L33 supplies the positive power in the L32+L33 doublet. Its nearly plano rear surface concentrates most of the pair's refraction at the cemented interface.

### L411 — Biconvex Positive, front aspherical surface

nd = 1.69350, νd = 53.2. Glass: S-LAL13 / L-LAL13 / M-LAC130 class, six-digit code 694532. f = +98.0 mm.

L411 is the first and strongest positive element in G41. Its front surface S18 is aspherical, and it sits ahead of the aperture stop where the marginal ray height is large. The asphere suppresses spherical aberration generated by the high-power relay group.

### L412 — Positive Meniscus, cemented with L413

nd = 1.49700, νd = 81.6. Glass: S-FPL51 / FCD1 class ED fluorophosphate. f = +88.3 mm.

L412 is the low-dispersion positive member of the relay doublet. It is separated from L411 by a 0.1500 mm air gap in the numerical prescription, again overriding the simplified prose description of a cemented three-lens subgroup.

### L413 — Negative Meniscus, cemented with L412

nd = 1.80610, νd = 33.3. Glass: NBFD15 dense barium flint. f = -60.8 mm.

L413 is the high-index flint member of the L412+L413 achromat. In isolation it is a strong negative element; within G41 it balances L412 and the surrounding positive elements to control relay chromatic aberration and Petzval curvature.

### Aperture stop

The aperture stop is placed inside G41 between L413 and L414. This is consistent with the patent's stated preference for placing the stop in the stationary fourth-1 group to avoid mechanical interference with moving zoom groups and to keep the exit-pupil position favorable for an interchangeable-lens camera.

### L414 — Biconvex Positive

nd = 1.48749, νd = 70.4. Glass: N-FK5 / FC5 / S-FSL5 class, six-digit code 487704. f = +61.0 mm.

L414 is the post-stop positive element of G41. It completes the principal relay group and sends the beam into the moving G42 focus group.

### L421 — Biconvex Positive, cemented with L422

nd = 1.84666, νd = 23.8. Glass: S-TIH53 / FDS90 class, six-digit code 847238. f = +55.7 mm.

L421 is the positive member of the moving G42 doublet. The doublet's compact axial length is central to the patent's stated purpose: reducing the size of the focusing group and increasing focusing speed.

### L422 — Biconcave Negative, rear aspherical surface

nd = 1.76802, νd = 49.2. Glass: M-TAF101 / LAM55-class moldable glass, six-digit code 768492. f = -25.2 mm.

L422 dominates the negative power of G42 and carries the rear aspherical surface S28. Because G42 moves for both zoom and focus, this asphere reduces the aberration fluctuation that would otherwise accompany the group's axial translation.

### L431 — Biconvex Positive, front aspherical surface; IS group

nd = 1.51633, νd = 64.1. Glass: S-BSL7 / BK7-class borosilicate crown, six-digit code 516641. f = +35.4 mm.

L431 is the positive member of the image-stabilization doublet G43A. Its front surface S29 is aspherical. The patent identifies G43A as the group that shifts perpendicular to the optical axis for image-blur correction.

### L432 — Negative Meniscus, cemented with L431; IS group

nd = 1.92286, νd = 20.9. Glass: N-SF66 / E-FDS1 class, six-digit code 923209. f = -106.4 mm.

L432 is the negative flint partner of the stabilization doublet. The cemented construction controls lateral color when the doublet is decentered for optical stabilization.

### L433 — Negative Meniscus

nd = 1.61800, νd = 63.4. Glass: S-PHM52 / PCD4 / N-PSK53A class, six-digit code 618634. f = -115.0 mm.

L433 is a weak negative rear-field element following the IS group. Its position and meniscus form make it more important for field shape and exit-pupil behavior than for gross focal power.

### L434 — Positive Meniscus, concave to object

nd = 1.78472, νd = 25.7. Glass: S-TIH11 / FD110 / N-SF11 class, six-digit code 785257. f = +121.5 mm.

L434 is an unusual high-dispersion positive element near the rear of the lens. In combination with L435 it helps balance lateral color and field curvature in the rear relay.

### L435 — Negative Meniscus, concave to object

nd = 1.88300, νd = 40.8. Glass: S-LAH58 / N-LASF31A / TAFD30 class, six-digit code 883408. f = -52.7 mm.

L435 is the final negative field-flattener and exit-pupil-control element. Its position immediately ahead of the image plane makes it effective for flattening the residual field without requiring large changes to front-group power.

## Glass Identification and Selection

The patent does not name manufacturer glass catalogs. The data file therefore uses six-digit nd/νd glass codes and catalog matches. Exact manufacturer labels are used only where a public catalog entry matches the patent pair closely; otherwise the entry is identified as a class or equivalence group.

| Code | nd / νd | Where used | Catalog identification used here |
|---:|---:|---|---|
| 923209 | 1.92286 / 20.9 | L11, L23, L32, L432 | N-SF66 / E-FDS1 class; not OHARA S-NPH2 |
| 497816 | 1.49700 / 81.6 | L12, L412 | S-FPL51 / FCD1 ED class |
| 437951 | 1.43700 / 95.1 | L13 | FCD100 / S-FPL53 Super-ED class |
| 911353 | 1.91082 / 35.3 | L21 | TAFD35 / H-ZLaF4L class |
| 487704 | 1.48749 / 70.4 | L22, L414 | N-FK5 / FC5 / S-FSL5 class |
| 904313 | 1.90366 / 31.3 | L24 | N-LASF46A / S-LAH95 / TAFD25 class |
| 741278 | 1.74077 / 27.8 | L31 | S-TIH13 / E-FD13 class |
| 603607 | 1.60311 / 60.7 | L33 | S-BSM14 / N-SK14 / BACD14 class |
| 694532 | 1.69350 / 53.2 | L411 | S-LAL13 / L-LAL13 / M-LAC130 class |
| 806333 | 1.80610 / 33.3 | L413 | NBFD15 dense barium flint |
| 847238 | 1.84666 / 23.8 | L421 | S-TIH53 / FDS90 class |
| 768492 | 1.76802 / 49.2 | L422 | M-TAF101 / LAM55-class moldable glass |
| 516641 | 1.51633 / 64.1 | L431 | S-BSL7 / BK7-class crown |
| 618634 | 1.61800 / 63.4 | L433 | S-PHM52 / PCD4 / N-PSK53A class |
| 785257 | 1.78472 / 25.7 | L434 | S-TIH11 / FD110 / N-SF11 class |
| 883408 | 1.88300 / 40.8 | L435 | S-LAH58 / N-LASF31A / TAFD30 class |

The most significant correction relative to a generic glass reading is the 923209 glass. It shares nd = 1.92286 with OHARA S-NPH2, but S-NPH2 is νd = 18.90, not νd = 20.9. The patent value is therefore a 923209 N-SF66 / E-FDS1 class glass rather than S-NPH2.

## Focus Mechanism

The focusing group is G42, the cemented L421+L422 doublet. It has negative power (-47.3 mm) and moves along the optical axis. The patent states that the fourth-2 group moves during focusing from infinity to close range and also moves during zooming to reduce the spacing between G41 and G42.

The patent does not publish close-focus spacing values. The data file therefore models close focus as a paraxial visualization state that keeps the 190.0000 mm optical track constant and moves G42 imageward, increasing d25 while decreasing d28. The close-focus distances used are the published autofocus endpoints at the wide and telephoto ends and an interpolated middle value.

| Zoom state | Close distance modeled | d25 infinity | d25 close | d28 infinity | d28 close | G42 shift |
|---|---:|---:|---:|---:|---:|---:|
| Wide | 1.00 m | 4.5426 | 5.7312 | 7.0924 | 5.9038 | 1.1886 |
| Middle | 1.25 m | 2.4692 | 5.1836 | 9.1658 | 6.4514 | 2.7144 |
| Telephoto | 1.50 m | 2.8188 | 8.6472 | 8.8162 | 2.9878 | 5.8284 |

Because the close-focus model is reconstructed from first-order conjugates rather than a patent table, it should not be treated as a manufacturer service prescription. It is included to make the LensVisualizer focus slider move the correct group in the correct first-order direction.

## Aspherical Surfaces

The patent uses the standard even-order aspheric sag expression

$$
x = \frac{y^2 c}{1 + \sqrt{1 - (1 + K)y^2 c^2}} + \sum A_n y^n,
$$

where $c = 1/R$. The patent tabulates K = 0 for all three aspheres, so the conic base is spherical and the departure from the base sphere is the polynomial sum.

| Surface | Element | R (mm) | K | A4 | A6 | A8 | A10 | Data SD | Polynomial departure |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|
| S18 / 18A | L411 front | 118.46940 | 0 | -2.96279e-6 | -8.22788e-10 | 2.42576e-14 | 0 | 15.6 mm | -187.2 µm |
| S28 / 28A | L422 rear | 25.08880 | 0 | -1.26926e-6 | -3.93738e-9 | 8.82062e-12 | -2.02847e-14 | 13.4 mm | -58.3 µm |
| S29 / 29A | L431 front | 31.01012 | 0 | -9.25160e-7 | 3.36839e-10 | -2.53630e-11 | 9.61516e-14 | 12.0 mm | -23.1 µm |

S18 is the dominant spherical-aberration-correction surface in the high-power relay group. S28 is attached to the moving focus group and suppresses aberration fluctuation during zoom and focus movement. S29 is on the image-stabilization doublet and helps maintain correction when G43A is decentered for stabilization. Sony's public description refers to Precision AA elements, but the patent itself gives only the optical prescription and does not label which aspheres are manufactured by a specific AA process.

## Image Stabilization

The image-stabilization group is G43A, the cemented doublet L431+L432 at the front of G43. The patent states that moving G43A in a direction perpendicular to the optical axis can correct image blur caused by vibration. The doublet's internal chromatic correction is important because a decentered stabilization group would otherwise generate lateral color and asymmetric coma.

## Conditional Expressions

The patent's Table 10 and Table 11 list the relevant first-order quantities and ratios for all examples. For Numerical Example 1, the relevant ratios are:

| Expression | Quantity | Example 1 value | Status |
|---|---|---:|---|
| (1) | OL4 / F4T | 0.97 | Pass |
| (2) | F4W / FW | 1.40 | Pass |
| (3) | F4T / F4W | 1.09 | Pass |
| (4) | F41 / F4T | 0.46 | Pass |
| (5) | F43 / F4W | 2.64 | Pass |
| (6) | F1 / F3 | 1.10 | Pass |
| (7) | νd1 maximum in G1 positive elements | 95.1 | Pass |

The independent trace gives G43 = 263.6 mm from the literal prescription, while Table 10 lists F43 = 266.7 mm. This small difference does not affect the design interpretation or the conditional-expression status; the analysis uses the patent table where the conditional values themselves are discussed and the surface trace where the data-file prescription is discussed.

## Verification Summary

The transcribed prescription was independently checked with a paraxial y/nu trace and surface-by-surface power calculation.

| Zoom position | Patent EFL | Computed EFL | Difference | Patent Fno |
|---|---:|---:|---:|---:|
| Wide | 72.0974 mm | 72.1602 mm | +0.0628 mm | 4.1474 |
| Middle | 122.9480 mm | 122.9747 mm | +0.0267 mm | 4.0559 |
| Telephoto | 193.9726 mm | 193.9119 mm | -0.0607 mm | 4.1269 |

The back-focus distance implied by the 190.0000 mm total lens length is 42.9273 mm at all zoom positions. The stop semi-diameter used in the data file is 12.25 mm, which reproduces the patent f-number range to first-order tolerance. Estimated semi-diameters were checked for edge thickness and cross-gap intrusion; the tightest edge thickness is 0.404 mm at element 10, and the largest same-element semi-diameter ratio is 1.25.

## Sources

- US 2015/0226945 A1, *Zoom Lens and Optical Apparatus*, Sony Corporation, Numerical Example 1.
- Sony, *SEL70200G Full Specifications & Features*, official product specification page.
- OHARA, *Optical Glass Type S-FPL51*, *S-PHM52*, *S-LAH58*, and cross-reference tables.
- SCHOTT, *N-FK5 Optical Glass Datasheet*.
- HOYA, *NBFD15-W / FD60-W Improved Transmittance of Optical Glasses* and glass cross-reference data.
