# Olympus Zuiko Digital ED 14–35mm f/2.0 SWD — Optical Analysis

## Patent Reference and Design Identification

**Patent:** US 8,081,392 B2 — "Zoom Lens"  
**Application Number:** 12/954,095, continuation of US 11/985,027  
**Priority:** JP 2006-306587, filed November 13, 2006  
**Filed:** November 24, 2010  
**Granted:** December 20, 2011  
**Inventors:** Atsujiro Ishii; Yoshiaki Shimizu  
**Assignee:** Olympus Imaging Corporation, Tokyo  
**Worked examples:** 3  
**Embodiment analyzed:** Example 3

The transcribed embodiment is Example 3 of US 8,081,392 B2. The production lens is the Four Thirds **Olympus Zuiko Digital ED 14–35mm f/2.0 SWD**, not a Micro Four Thirds M.Zuiko lens. The requested file stem is preserved, but the optical and catalog description are kept to the product actually identified by the patent and by the manufacturer literature.

The patent discloses a positive–negative–positive standard zoom whose second group is split into a negative front unit G2F and a negative rear unit G2R. The abstract and specification identify the central mechanism: the G2F–G2R spacing varies with subject distance, but at a given subject distance it remains constant regardless of zoom position. This is the mechanical simplification around which the patent is built.

The Example 3 mapping is supported by the following converging checks:

1. **Close-focus distance.** The patent’s Example 3 close-range data are tabulated at a 350 mm subject distance, measured from the image plane. The production instruction manual specifies a shooting range of 0.35 m to infinity. This is the strongest product match.
2. **Element/group count.** Example 3 is an 18-element, 17-group construction, with one cemented doublet in the third group. The manufacturer specifies 17 groups and 18 lenses.
3. **Focal-length and aperture range.** Example 3 tabulates 14.22 / 22.08 / 34.28 mm at infinity, with FNo = 2.04 across the zoom range. The marketed production specification is 14–35 mm f/2.0.
4. **Format and field.** The patent’s maximum image height is 11.15 mm and the wide-end full field is 77.45°. The manufacturer’s diagonal angle of view is 75°–34° for the nominal Four Thirds format.
5. **Aspherical layout.** The patent states that four aspherical surfaces are used: both surfaces of the second negative meniscus in G2F and both surfaces of the double-convex positive lens nearest the image side in G3. That corresponds to two double-sided aspherical elements.
6. **Mechanical timing and focus architecture.** The 2006 priority date, the Four Thirds format, the split-G2 floating focus structure, and the SWD-era product chronology are mutually consistent.

A useful discriminator against the other worked examples is the second element of G1. Example 1 uses a positive meniscus, Example 2 uses a biconvex positive, and Example 3 uses a plano-convex positive with an infinite rear radius.

Manufacturer-published hard specifications govern the production lens values. The patent design values are used for the prescription and optical verification: 14.22–34.28 mm, F/2.04, image height 11.15 mm, and the patent’s four variable spaces.

## Optical Architecture

Example 3 is a three-group standard zoom for the Four Thirds SLR format:

| Group | Elements | Power | Verified in-air focal length | Primary role |
|---|---:|---:|---:|---|
| G1 | L1–L3 | Positive | +119.6 mm | Front collector and entrance-pupil placement |
| G2F | L4–L7 | Negative | −36.3 mm | Strong front variator unit and distortion-control asphere |
| G2R | L8–L9 | Negative | −108.8 mm | Rear floating focus unit |
| G2 combined | L4–L9 | Negative | −20.7 mm | Variator / inner-focus system |
| G3 | L10–L18 | Positive | +38.6 mm | Rear relay, chromatic correction, field and spherical control |

The aperture stop lies between G2R and G3. The combined power of G1 and G2 ahead of the stop is negative while the post-stop group is positive, giving the asymmetric stop arrangement expected of a fast wide-to-normal SLR zoom with long back focus.

The zoom motion is conventional in broad outline but unusual in the way the focus float is decoupled. From wide to telephoto at infinity, the G1–G2 separation opens from 0.60 mm to 28.72 mm; the G2R–stop gap closes from 33.99 mm to 1.99 mm; and the back focal distance grows from 33.77 mm to 46.62 mm. The first group moves on a concave locus toward the object side, the second group assembly moves toward the image side, and the stop/G3 assembly moves toward the object side.

The distinguishing architectural choice is not merely inner focus. It is the requirement that the internal spacing between G2F and G2R be a function of subject distance alone. At infinity, D14 is 6.20 mm at all three focal lengths; at the 350 mm close setting, D14 is 0.85 mm at all three focal lengths. The whole G2 assembly still translates by different amounts at different focal lengths, but the differential spacing inside G2 does not require a zoom-dependent focus cam.

## Element-by-Element Analysis

### L1 — Negative Meniscus, convex to object

$n_d = 1.84666,\ \nu_d = 23.78$. Glass: S-TIH53 (OHARA) — dense flint. $f = -197.0$ mm.

L1 is the only negative element in the positive first group. Its high dispersion lets it achromatize the two high-index positives behind it without giving the front group excessive power. Both radii are positive, giving a meniscus convex to the object side.

### L2 — Plano-Convex Positive

$n_d = 1.77250,\ \nu_d = 49.60$. Glass: S-LAH66 (OHARA) — high-index lanthanum boundary glass. $f = +156.0$ mm.

L2 supplies weak positive front-group power at high refractive index. The rear radius is infinite, so this element is the quick numerical and visual identifier for Example 3 among the three examples.

### L3 — Positive Meniscus, convex to object

$n_d = 1.77250,\ \nu_d = 49.60$. Glass: S-LAH66 (OHARA). $f = +141.8$ mm.

L3 completes the positive first group. The use of the same high-index glass as L2 keeps the front group compact while avoiding a larger Petzval burden from low-index positive power.

### L4 — Negative Meniscus, convex to object

$n_d = 1.88300,\ \nu_d = 40.76$. Glass: S-LAH58 (OHARA) — high-index lanthanum flint. $f = -24.8$ mm.

L4 is the strongest individual negative element in G2F. Its high index is important: the design needs strong negative variator power, but a lower-index negative element would worsen the negative Petzval contribution and make field flattening harder.

### L5 — Negative Meniscus, double-sided asphere

$n_d = 1.58253,\ \nu_d = 59.32$. Glass: S/L-BAL42-class molded barium crown; exact public catalog match not found. $f = -57.5$ mm.

L5 carries surfaces 9A and 10A. The patent explicitly assigns the front-unit aspheric surface to wide-end distortion correction, and this double-sided molded asphere is the element in that position. The stored index is close to, but not identical with, public S-BAL42 / L-BAL42 catalog values, so the element is best identified by class rather than by an exact polished catalog glass name.

### L6 — Negative Meniscus, convex to image

$n_d = 1.48749,\ \nu_d = 70.23$. Glass: S-FSL5 (OHARA) — FK5-type fluoro-crown. $f = -140.5$ mm.

L6 is a weak low-dispersion negative element within G2F. It moderates the chromatic behavior of the strongly negative front unit without adding much power.

### L7 — Biconvex Positive

$n_d = 1.84666,\ \nu_d = 23.78$. Glass: S-TIH53 (OHARA) — dense flint. $f = +42.3$ mm.

L7 is the positive counter-element in the otherwise negative G2F unit. Its high-dispersion flint glass helps keep the longitudinal color of the moving negative group under control as zoom and focus positions change.

### L8 — Biconcave Negative

$n_d = 1.62004,\ \nu_d = 36.26$. Glass: S-TIM2 (OHARA) — flint. $f = -53.9$ mm.

L8 is the negative member of the rear focusing unit G2R. The patent specifies that G2R comprises a negative lens followed by a positive lens so that astigmatism fluctuations during focus can be corrected.

### L9 — Positive Meniscus, convex to object

$n_d = 1.78590,\ \nu_d = 44.20$. Glass: S-LAH51 (OHARA) — lanthanum flint. $f = +108.0$ mm.

L9 is the positive member of G2R. It reduces the net negativity of the rear focus unit and gives the focus float a way to trade astigmatism and field curvature rather than simply translating a single strong negative group.

### Aperture Stop

The stop is surface 19 and lies in the air gap between G2R and G3. In the data file it is labeled `STO`, with the patent’s D18 variable spacing retained on surface 18 and the fixed D19 = 1.70 mm retained after the stop.

The stop semi-diameter in the data file is a reconstruction value for visualization. The patent tabulates FNo but not a physical stop diameter. A 12.1 mm semi-diameter accommodates the largest paraxial full-aperture demand at the telephoto end.

### L10 — Positive Meniscus, convex to object

$n_d = 1.63980,\ \nu_d = 34.46$. Glass: S-TIM27 (OHARA) — flint. $f = +96.8$ mm.

L10 is the first post-stop positive element. It begins the rear relay group’s reconvergence after the negative front system and stop.

### L11 — Biconvex Positive

$n_d = 1.62280,\ \nu_d = 57.05$. Glass: S-BSM10 (OHARA) — barium crown. $f = +65.0$ mm.

L11 is a principal rear-group positive using a moderate-dispersion barium crown. It contributes real power without carrying the special secondary-spectrum burden assigned to the ED elements later in G3.

### L12 — Negative Meniscus, convex to image

$n_d = 1.57501,\ \nu_d = 41.50$. Glass: S-TIL27 (OHARA) — light flint. $f = -75.8$ mm.

L12 is a weak negative element that trims the rear group’s aberration balance before the ED-rich portion of G3.

### L13 — Biconvex Positive, ED

$n_d = 1.49700,\ \nu_d = 81.54$. Glass: S-FPL51 (OHARA) — ED fluorophosphate. $f = +78.6$ mm.

L13 is the first condition-(a) material in the post-stop group. The patent gives $\theta_{gF} = 0.537$ and a deviation of +0.033 from formula (6), satisfying the low-dispersion anomalous-partial-dispersion condition.

### L14 — Biconcave Negative, cemented

$n_d = 1.68893,\ \nu_d = 31.08$. Glass: S-TIM28 (OHARA) — flint. $f = -29.9$ mm.

L14 is the negative member of the only cemented doublet. Its high dispersion is paired directly with the super-ED L15 at the cemented interface.

### L15 — Biconvex Positive, super-ED, cemented

$n_d = 1.43875,\ \nu_d = 94.93$. Glass: S-FPL53 (OHARA) — super-ED fluorophosphate. $f = +33.8$ mm.

L15 is the strongest low-dispersion anomalous element in the lens. The patent gives $\theta_{gF} = 0.534$ and a deviation of +0.054 from formula (6). Cementing it to L14 localizes a high-dispersion / super-low-dispersion correction pair inside G3.

### L16 — Negative Meniscus, convex to image

$n_d = 1.90366,\ \nu_d = 31.31$. Glass: S-LAH95 (OHARA; catalog $\nu_d \approx 31.34$). $f = -45.9$ mm.

L16 is a very-high-index negative element. Despite the lanthanum family label, its Abbe number places it firmly in dense-flint territory. Its value is high-index negative power near the rear of the lens, helping control the Petzval sum without requiring a much stronger low-index negative.

The catalog match is not exact in Abbe number: the patent stores $\nu_d = 31.31$, while current Ohara data list approximately 31.34. The index match is exact, so the safest label is S-LAH95 with the small dispersion residual stated.

### L17 — Biconvex Positive, ED, double-sided asphere

$n_d = 1.49640,\ \nu_d = 81.24$. Glass: S-FPL51 / FCD1-class moldable ED; exact public catalog match not found. $f = +41.9$ mm.

L17 carries surfaces 33A and 34A, the second double-sided aspheric element. It sits near the image side of the rear positive group, where it can act on the fast f/2.0 converging bundle and residual field aberrations.

The stored index and Abbe number are close to S-FPL51 / FCD1-class ED glass but not identical to the public polished S-FPL51 catalog value. Because it is also a double-sided asphere, a moldable ED variant is more plausible than a direct polished-catalog assignment. The patent groups L13 and L17 together for partial dispersion: $\theta_{gF} = 0.537$, deviation +0.033.

### L18 — Positive Meniscus, convex to image

$n_d = 1.63494,\ \nu_d = 23.22$. Glass: Unmatched proprietary high-dispersion anomalous short flint. $f = +91.3$ mm.

L18 is the condition-(b) material. The patent gives $\theta_{gF} = 0.668$ and a deviation of +0.060 from formula (6), an unusually large positive anomaly for a high-dispersion glass. No public catalog match was found for the stored 635/232 code with that partial-dispersion behavior, so the data file labels it as unmatched rather than forcing a circular glass identification.

## Glass Identification and Selection

The glass labels were checked against public catalog data where a direct match exists. Where the stored patent values do not match a current public catalog entry, the analysis uses a class label rather than asserting a false exact identification.

| Element(s) | Patent $n_d$ | Patent $\nu_d$ | Glass identification | Confidence | Function |
|---|---:|---:|---|---|---|
| L1, L7 | 1.84666 | 23.78 | S-TIH53 (OHARA) | Exact | Dense-flint achromatizing elements |
| L2, L3 | 1.77250 | 49.60 | S-LAH66 (OHARA) | Exact | High-index G1 positive power |
| L4 | 1.88300 | 40.76 | S-LAH58 (OHARA) | Exact | Strong G2F negative with high index |
| L5 | 1.58253 | 59.32 | S/L-BAL42-class molded barium crown | Soft | Front-unit molded asphere |
| L6 | 1.48749 | 70.23 | S-FSL5 (OHARA) | Exact | Low-dispersion G2F negative |
| L8 | 1.62004 | 36.26 | S-TIM2 (OHARA) | Exact | G2R negative |
| L9 | 1.78590 | 44.20 | S-LAH51 (OHARA) | Exact | G2R positive |
| L10 | 1.63980 | 34.46 | S-TIM27 (OHARA) | Exact | First post-stop positive |
| L11 | 1.62280 | 57.05 | S-BSM10 (OHARA) | Exact | Rear positive power |
| L12 | 1.57501 | 41.50 | S-TIL27 (OHARA) | Exact | Rear-group negative trim |
| L13 | 1.49700 | 81.54 | S-FPL51 (OHARA) | Exact | Condition-(a) ED |
| L14 | 1.68893 | 31.08 | S-TIM28 (OHARA) | Exact to patent precision | Cemented negative flint |
| L15 | 1.43875 | 94.93 | S-FPL53 (OHARA) | Exact | Condition-(a) super-ED |
| L16 | 1.90366 | 31.31 | S-LAH95 (OHARA; small $\nu_d$ residual) | Strong | High-index dense flint negative |
| L17 | 1.49640 | 81.24 | S-FPL51 / FCD1-class moldable ED | Soft | Condition-(a) ED asphere |
| L18 | 1.63494 | 23.22 | Unmatched proprietary APD short flint | Unmatched | Condition-(b) high-dispersion anomaly |

The persistent risk in this design is overconfident glass naming. L5 and L17 are close to familiar Ohara/Hoya classes but are not exact public catalog entries. L18 is functionally unambiguous from the patent’s $\theta_{gF}$ data, but not catalog-resolvable. The corrected analysis therefore separates function from catalog identity.

## Focus Mechanism

The lens uses floating inner focus by the split negative second group. The prior loose formulation that G2F and G2R “move together” during focus is not precise enough. During zooming at a fixed subject distance, the second-group units are carried as the zoom mechanism requires. During focusing, the G2F–G2R separation changes, so the two units move differentially.

| Gap | Boundary | Behavior | Wide ∞ → 0.35 m | Mid ∞ → 0.35 m | Tele ∞ → 0.35 m |
|---|---|---|---:|---:|---:|
| D6 | G1 → G2F | zoom + focus | 0.60 → 0.76 | 9.28 → 9.09 | 28.72 → 26.50 |
| D14 | G2F → G2R | focus only, zoom-independent | 6.20 → 0.85 | 6.20 → 0.85 | 6.20 → 0.85 |
| D18 | G2R → stop | zoom + focus | 33.99 → 39.19 | 11.81 → 17.36 | 1.99 → 9.57 |
| D36 | last surface → image | zoom, slight close-focus correction | 33.77 → 33.78 | 41.71 → 41.76 | 46.62 → 46.60 |

The subject-distance values in the patent are measured from the image plane. At the 350 mm close setting, the patent tabulates shortened effective focal lengths of 13.95 / 21.04 / 30.04 mm. The independent trace gives 13.944 / 21.035 / 30.040 mm, reproducing the close-focus focal lengths to the shown precision.

Finite-conjugate verification was also run with the subject at 350 mm from the image plane. Solving for the image distance gives required BFD values of 33.750 / 41.689 / 46.479 mm against the patent’s 33.78 / 41.76 / 46.60 mm. The largest residual is 0.121 mm, which is within the tolerance expected from the published prescription precision.

## Aspherical Surfaces

Four aspherical surfaces are present: 9A and 10A on L5, and 33A and 34A on L17. The patent’s aspheric sag convention is the standard even-order conic-polynomial form:

$$x = \frac{y^2/r}{1 + \sqrt{1 - (K+1)(y/r)^2}} + A_4y^4 + A_6y^6 + A_8y^8 + A_{10}y^{10}.$$

All four surfaces have $K = 0.000$, so the base conic is spherical and all departure from the base sphere is in the even-order coefficients.

| Surface | Element | $K$ | $A_4$ | $A_6$ | $A_8$ | $A_{10}$ |
|---|---|---:|---:|---:|---:|---:|
| 9A | L5 front | 0.000 | $+2.33955\times10^{-5}$ | $-1.46412\times10^{-7}$ | $+5.37937\times10^{-10}$ | $-1.32462\times10^{-12}$ |
| 10A | L5 rear | 0.000 | $+7.38718\times10^{-6}$ | $-1.66142\times10^{-7}$ | $+3.75503\times10^{-10}$ | $-1.27423\times10^{-12}$ |
| 33A | L17 front | 0.000 | $-1.05652\times10^{-5}$ | $+6.57981\times10^{-10}$ | $+4.92273\times10^{-11}$ | $-8.47219\times10^{-14}$ |
| 34A | L17 rear | 0.000 | $+4.57324\times10^{-6}$ | $-1.30667\times10^{-8}$ | $+5.78315\times10^{-11}$ | $-9.06114\times10^{-14}$ |

The L5 aspheric pair is in the diverging front unit where field ray heights are large, matching the patent’s statement that a front-unit aspheric surface corrects wide-angle distortion. The L17 pair is in the rear positive group near the image side, where it acts primarily on spherical aberration and residual field aberrations in the fast converging beam.

## Chromatic Correction Strategy

The patent argues that a wide-angle zoom with an asymmetric stop arrangement is susceptible to chromatic aberration of magnification, especially secondary spectrum in the g-line after ordinary C/F achromatization. It proposes combining low-dispersion anomalous partial-dispersion glass with high-dispersion anomalous partial-dispersion glass in the image-side positive group.

In Example 3, the post-stop group contains three condition-(a) glasses and one condition-(b) glass:

| Element | Condition | $\nu_d$ | $\theta_{gF}$ | Deviation from formula (6) |
|---|---|---:|---:|---:|
| L13 | (a) | 81.54 | 0.537 | +0.033 |
| L15 | (a) | 94.93 | 0.534 | +0.054 |
| L17 | (a) | 81.24 | 0.537 | +0.033 |
| L18 | (b) | 23.22 | 0.668 | +0.060 |

The design is therefore not simply “ED glass added to a zoom.” It uses a deliberate low-dispersion/high-dispersion anomalous-partial-dispersion pairing behind the stop. The L18 short-flint-like condition-(b) element is the key part of that correction scheme because it supplies an anomalous high-dispersion term not obtainable from fluorophosphate ED glass alone.

## Conditional Expressions

The patent’s two glass conditions are:

$$\text{(a)}\quad \nu_d \geq 80,\qquad \theta_{gF} \geq -0.001781\nu_d + 0.6494 + 0.02$$

$$\text{(b)}\quad \nu_d \leq 30,\qquad \theta_{gF} \geq -0.001781\nu_d + 0.6494 + 0.01.$$

Recomputing the normal line values gives:

| Element | $\nu_d$ | $\theta_{gF}$ | Normal line | Recomputed deviation | Patent deviation | Result |
|---|---:|---:|---:|---:|---:|---|
| L13 | 81.54 | 0.537 | 0.5042 | +0.0328 | +0.033 | Condition (a) met |
| L15 | 94.93 | 0.534 | 0.4803 | +0.0537 | +0.054 | Condition (a) met |
| L17 | 81.24 | 0.537 | 0.5047 | +0.0323 | +0.033 | Condition (a) met |
| L18 | 23.22 | 0.668 | 0.6080 | +0.0600 | +0.060 | Condition (b) met |

The recomputed deviations reproduce the patent’s tabulated values to the published precision.

## Verification Summary

Independent paraxial y–$n u$ reconstruction from the corrected Example 3 prescription gives:

| Quantity | Patent / analysis target | Independent result |
|---|---:|---:|
| Wide EFL at infinity | 14.22 mm | 14.219 mm |
| Mid EFL at infinity | 22.08 mm | 22.083 mm |
| Tele EFL at infinity | 34.28 mm | 34.272 mm |
| Wide BFD at infinity | 33.77 mm | 33.770 mm |
| Mid BFD at infinity | 41.71 mm | 41.711 mm |
| Tele BFD at infinity | 46.62 mm | 46.625 mm |
| Close EFLs | 13.95 / 21.04 / 30.04 mm | 13.944 / 21.035 / 30.040 mm |
| Petzval sum | surface-by-surface computation | +0.002633 mm$^{-1}$ |

The Petzval sum was computed surface by surface as $\sum \phi/(n n')$, not from thin-lens element approximations. The corresponding Petzval radius is approximately 380 mm, and $P\cdot f_\text{wide} \approx 0.037$.

The semi-diameters in the data file are inferred because the patent does not provide clear apertures. They were checked against sd/|R| < 0.90, element edge thickness, element front/rear SD ratio ≤ 1.25, and signed cross-gap sag intrusion at the published infinity and close-focus zoom positions.

## Sources and References

- US 8,081,392 B2, "Zoom Lens," Atsujiro Ishii and Yoshiaki Shimizu, Olympus Imaging Corporation. Example 3 prescription, zooming data, aspherical coefficients, partial-dispersion table, and barrel mechanism figures.
- Olympus, *Zuiko Digital ED 14–35mm f2.0 SWD Instructions*, VS176901, 2008. Manufacturer hard specifications: Four Thirds mount, 14–35 mm focal length, f/2.0 maximum aperture, 75°–34° angle of view, 17 groups / 18 lenses, 0.35 m shooting range, AF/MF switching, 900 g weight, 86 mm × 123 mm dimensions, and 77 mm filter thread.
- OHARA optical-glass catalog data for S-TIH53, S-LAH66, S-LAH58, S-FSL5, S-TIM2, S-LAH51, S-TIM27, S-BSM10, S-TIL27, S-FPL51, S-TIM28, S-FPL53, S-LAH95, and BAL/FPL class cross-checks.
- HOYA and OHARA cross-reference resources for six-digit glass-code comparison where no exact public catalog match was found.
