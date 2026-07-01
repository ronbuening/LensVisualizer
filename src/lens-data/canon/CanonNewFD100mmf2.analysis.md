## Patent Reference and Design Identification

**Patent:** JP S53-133028 (特開昭53-133028)  
**Application Number:** Shō 52-48044  
**Filed:** April 25, 1977  
**Published:** November 20, 1978  
**Inventor:** Tsuji Sadahiko (辻定彦)  
**Applicant:** Canon Inc. (キヤノン株式会社)  
**Title:** 長焦点レンズ (Long Focal-Point Lens)  
**Classification:** G02B 13/02, G02B 9/34  
**Embodiment analyzed:** Sole worked numerical example

JP S53-133028 gives one numerical prescription for a 35 mm-format, large-aperture long-focus lens. The prescription is normalized to $f = 1$, with aperture ratio $1{:}2$, field angle $2\omega = 24°$, and back focus $0.4270f$. The patent text describes the design as a development of the tele-Sonnar type, intended to retain high contrast while reducing spherical aberration and field curvature.

The identification with the Canon New FD 100mm f/2 rests on convergent evidence rather than on an explicit product name in the patent:

1. The patent has 6 elements in 4 groups, matching Canon's published construction for the New FD100mm f/2.
2. The normalized design scales directly to a 100 mm f/2 lens.
3. The patent's $2\omega = 24°$ field is consistent with a 100 mm rectilinear lens covering 35 mm format.
4. The patent is all-spherical and does not use ED, fluorite, or aspherical surfaces; Canon's product entry gives the same 6-element / 4-group construction, with no conflicting special-element indication.
5. The computed back focal distance is $42.700$ mm when scaled to $f = 100$ mm, a physically plausible SLR back focus and a useful check that the prescription has not been inverted or mis-scaled.
6. As a data-file implementation check, a unit-extension model of the infinity prescription gives $BFD = 55.142$ mm at a 1.0 m object distance measured from the film plane, with computed paraxial magnification $0.124\times$, close to Canon's published $0.12\times$ value. The patent itself does not publish a close-focus prescription.
7. The patent was filed in April 1977 and published in November 1978; Canon lists the New FD100mm f/2 as marketed in January 1980.

The patent has no sibling numerical examples. The transcribed prescription is therefore the sole available embodiment from this document.

## Optical Architecture

The design is a Sonnar-derived long-focus lens in 4 air-separated groups and 6 elements. In patent order the group powers are positive-positive-negative-positive:

- **Group 1, L1:** positive meniscus singlet.
- **Group 2, L2-L3:** cemented positive doublet with a crown positive element and dense flint negative element.
- **Group 3, L4:** separated biconcave negative singlet.
- **Group 4, L5-L6:** rear cemented positive doublet behind the stop.

The optical form is tele-Sonnar-like in its grouping, cemented front doublet, separated negative element, and rear cemented relay group. Strictly by front-vertex-to-image-plane length, however, the scaled total track is $110.07$ mm and the computed EFL is $100.003$ mm, giving $TL/EFL = 1.1007$. Under the strict $TL/EFL < 1$ definition, this is not a short-track telephoto lens, despite the patent's tele-Sonnar lineage and the short $0.427f$ back focus.

The negative third group is still central to the design. It supplies the strongest element focal length in the system at $f \approx -38.28$ mm and contributes the dominant negative Petzval term. The rear cemented doublet supplies $f \approx +68.66$ mm of positive group power, allowing the image to be formed within the short $0.427f$ back focal distance while maintaining a compact mechanical barrel.

The aperture stop is not tabulated as a separate numerical surface. The data file places it at the midpoint of patent gap $d_7$ between surfaces 7 and 8. This is an implementation estimate for ray tracing and diagram rendering; the patent only states that the rear positive cemented group is arranged beyond the stop.

## Element-by-Element Analysis

### L1 — Positive Meniscus, convex to object

$n_d = 1.62299$, $\nu_d = 58.2$. Glass: S-BSM15 (OHARA). Standalone $f = +94.12$ mm.

L1 is the front positive collector. Its first surface, $R_1 = 56.42$ mm after scaling, carries nearly all of the element's power because the rear surface is very weak at $R_2 = 1414.79$ mm. The element therefore behaves close to a thick plano-convex lens, while retaining a slight meniscus form for aberration control.

The glass is a moderate-index barium crown. Its relatively high Abbe number keeps the first positive element from adding excessive primary longitudinal color before the front cemented correction group.

### L2 + L3 — Front Cemented Doublet, net positive

**L2:** $n_d = 1.60311$, $\nu_d = 60.7$. Glass: S-BSM14 (OHARA). Standalone $f = +80.76$ mm.  
**L3:** $n_d = 1.72151$, $\nu_d = 29.2$. Glass: S-TIH18 (OHARA). Standalone $f = -129.38$ mm.

The first cemented group is net positive with computed group focal length $f \approx +167.23$ mm. It pairs a high-Abbe positive barium crown with a high-dispersion dense flint. The Abbe-number separation, $\Delta\nu_d \approx 31.5$, is the main first-order chromatic correction mechanism in the front half of the lens.

The cemented interface is at $R_4 = 1386.14$ mm, so it has very little refracting power. Most of the group power is carried by the steep front surface of L2 and the exit surface of L3. The near-flat cemented surface is still important because it keeps the group compact and lets the positive/negative glass pair correct color without introducing a large additional monochromatic bending surface.

### L4 — Biconcave Negative

$n_d = 1.67270$, $\nu_d = 32.1$. Glass: S-TIM25 (OHARA). Standalone $f = -38.28$ mm.

L4 is the strongest single element in the prescription. Its weakly concave front surface, $R_6 = -456.03$ mm, and steep rear surface, $R_7 = 27.38$ mm, form a strongly negative biconcave element immediately before the stop region.

This element is the principal track-shortening and field-flattening element. Surface 7 contributes $-1.4688$ to the normalized Petzval sum, the largest single Petzval term by magnitude. The air separation before L4 lets the converging beam from the front positive groups expand into the negative lens, which is a typical Sonnar-derived strategy for balancing field curvature and coma while keeping the rear working distance short.

### L5 + L6 — Rear Cemented Doublet, net positive

**L5:** $n_d = 1.59270$, $\nu_d = 35.3$. Glass: S-FTM16 (OHARA). Standalone $f = -94.67$ mm.  
**L6:** $n_d = 1.80610$, $\nu_d = 40.9$. Glass: S-LAH53 (OHARA). Standalone $f = +40.05$ mm.

The rear cemented doublet is net positive with computed group focal length $f \approx +68.66$ mm. It is not a classical crown-flint achromat. Both elements are flint-side glasses by Abbe number, and the Abbe contrast is only about 5.6. Its primary role is final image formation and residual monochromatic correction rather than primary color correction.

L6 is a high-index lanthanum heavy flint. The $n_d = 1.80610$ index allows strong positive power from moderate curvatures, especially at the cemented interface $R_9 = 46.81$ mm and the final surface $R_{10} = -99.01$ mm. This rear group is also responsible for keeping the image-side convergence compatible with the short $0.427f$ back focal distance.

## Glass Identification and Selection

The patent lists only $n_d$ and $\nu_d$, not vendor glass names. The data file uses OHARA catalog matches because all six patent pairs coincide with OHARA S-series entries to the precision of the patent table. The OHARA catalog line indices $n_C$, $n_F$, and $n_g$ are included in the data file to support chromatic tracing beyond plain Abbe interpolation.

| Element | Patent $n_d$ | Patent $\nu_d$ | Catalog match | OHARA catalog $n_d$ | OHARA catalog $\nu_d$ | Role |
|---|---:|---:|---|---:|---:|---|
| L1 | 1.62299 | 58.2 | S-BSM15 | 1.62299 | 58.16 | Front barium crown collector |
| L2 | 1.60311 | 60.7 | S-BSM14 | 1.60311 | 60.64 | Positive crown in front doublet |
| L3 | 1.72151 | 29.2 | S-TIH18 | 1.72151 | 29.23 | Dense flint negative partner |
| L4 | 1.67270 | 32.1 | S-TIM25 | 1.67270 | 32.10 | Strong negative field/Petzval element |
| L5 | 1.59270 | 35.3 | S-FTM16 | 1.59270 | 35.31 | Negative rear-doublet element |
| L6 | 1.80610 | 40.9 | S-LAH53 | 1.80610 | 40.92 | High-index positive rear element |

The palette is conventional for a late-1970s fast tele-Sonnar-derived lens. The front doublet performs the main crown/flint color correction, while the rear doublet emphasizes high-index positive power and monochromatic balancing.

## Focus Mechanism

The data file models focusing by unit extension from the patent's infinity prescription. This is an implementation model, not a second patent state: JP S53-133028 does not publish a close-focus prescription, variable-spacing table, or floating-group movement.

At infinity the scaled back focal distance is $42.700$ mm. Solving the finite-conjugate paraxial focus condition for Canon's 1.0 m minimum-focus distance gives $BFD = 55.142$ mm, an extension of $12.442$ mm. The corresponding object distance from the first surface is $877.49$ mm because the 1.0 m manufacturer distance is measured from the film plane.

| Parameter | Infinity | 1.0 m close focus |
|---|---:|---:|
| BFD | 42.700 mm | 55.142 mm |
| Extension from infinity | 0 mm | 12.442 mm |
| Object distance from first surface | infinity | 877.49 mm |
| Computed paraxial magnification | 0 | 0.124× |
| Canon published maximum magnification | — | 0.12× |

## Chromatic Correction Strategy

The lens is an achromatized fast 100 mm long-focus design, not an apochromat. The main chromatic balancing occurs in the front cemented doublet, where L2's $\nu_d = 60.7$ crown is paired with L3's $\nu_d = 29.2$ dense flint. L1 is also a crown, which reduces the color burden placed on the doublet.

L4 is a negative flint and therefore adds chromatic divergence, but it is required for the monochromatic power distribution and Petzval correction. The rear cemented doublet uses two flint-side glasses with a small Abbe separation, so it should be read primarily as a high-index relay/correction group rather than as the main achromatizing member.

No ED, fluorite, or anomalous-partial-dispersion glass is present in the patent table or required by the identified OHARA catalog matches.

## Verification Summary

Independent y-nu paraxial tracing was rerun from the patent table after re-reading the scanned prescription. The values below use the normalized patent units unless otherwise stated.

| Quantity | Computed | Patent / table value | Deviation |
|---|---:|---:|---:|
| EFL | 1.00003193 | 1.0000 | +0.00003193 |
| BFD | 0.42700090 | 0.4270 | +0.00000090 |
| Front vertex to image plane | 1.10070090 | — | — |
| Strict $TL/EFL$ ratio | 1.10067 | — | — |
| Petzval sum | +0.1538428 | +0.1539 | -0.0000572 |

The surface-by-surface Petzval calculation used $\Phi/(n n')$ for each refracting surface. It reproduces the patent Seidel table to the displayed precision, including the dominant negative contribution from surface 7.

Computed focal lengths, scaled to a 100 mm production lens, are:

| Component | Focal length |
|---|---:|
| L1 | +94.12 mm |
| L2 standalone | +80.76 mm |
| L3 standalone | -129.38 mm |
| L4 | -38.28 mm |
| L5 standalone | -94.67 mm |
| L6 standalone | +40.05 mm |
| Group 1 | +94.12 mm |
| Group 2 | +167.23 mm |
| Group 3 | -38.28 mm |
| Group 4 | +68.66 mm |
| Groups 1-3 combined | +280.76 mm |

The data-file stop placement and semi-diameters are not patent values. They are implementation estimates. The stop placement is the midpoint of $d_7$; the resulting f/2 physical stop semi-diameter is $12.290$ mm. Semi-diameter checks gave positive edge thicknesses for all six elements and acceptable air-gap sag clearance at the estimated apertures.

## Sources

- JP S53-133028 (特開昭53-133028), "長焦点レンズ," published November 20, 1978. Applicant: Canon Inc.; inventor: Tsuji Sadahiko.
- Canon Camera Museum, "New FD100mm f/2," https://global.canon/en/c-museum/product/nfd216.html.
- OHARA INC., Optical Glass product catalog / S-glass CSV, including S-BSM15, S-BSM14, S-TIH18, S-TIM25, S-FTM16, and S-LAH53, https://www.ohara-inc.co.jp/en/product/catalog/.
