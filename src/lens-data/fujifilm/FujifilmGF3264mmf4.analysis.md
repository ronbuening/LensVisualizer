# Fujifilm FUJINON GF32-64mmF4 R LM WR — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** US 10,191,246 B2  
**Application number:** US 15/630,678  
**Title:** Zoom Lens and Imaging Apparatus  
**Filed:** June 22, 2017  
**Granted:** January 29, 2019  
**Priority:** JP 2016-127178, filed June 28, 2016  
**Inventor:** Hiroki Saito  
**Assignee:** FUJIFILM Corporation  
**Embodiment analyzed:** Example 1, Tables 1-3 and Figures 1, 6-9

Example 1 is the closest disclosed prescription for the production FUJINON GF32-64mmF4 R LM WR. The identification is supported by the shared 14-lens / 11-air-spaced-group construction, the five-group zoom architecture, the five aspherical surfaces on three elements, the ED + Super ED element count, the 32-64 mm class focal range, and the GFX-format image field. Fujifilm's published specification gives 14 elements in 11 groups, including three aspherical elements, one ED element, and one Super ED element; it also gives f = 32-64 mm, angle of view 81°-46.3°, maximum aperture F4, and focus range 0.50 m at the wide end and 0.60 m at the tele end.

The patent design calculates to f = 32.936 mm, 45.281 mm, and 62.230 mm at the wide, middle, and telephoto tabulated positions. Those values reproduce Table 2 of the patent to rounding precision. The patent F-number is FNo. = 4.12 at all three positions, which explains the slight offset from the marketed F4 value.

The data file omits the patent's plane-parallel sensor cover plate from the surface list, following the project convention. The cover plate is instead folded into the final air-equivalent back focal distance: 25.8035 mm + 3.2500 mm / 1.51680 = 27.9462 mm. This preserves the paraxial image position while keeping the prescription limited to lens surfaces.

## Optical Architecture

The lens is a five-zoom-group system with the power sequence positive-negative-positive-negative-positive:

| Zoom group | Elements | Power | Verified focal length | Principal function |
|---|---:|---:|---:|---|
| G1 | L11-L12 | Positive | +154.368 mm | Front collector and entrance-side chromatic correction |
| G2 | L21-L24 | Negative | -24.248 mm | Main variator and inner-focus group carrier |
| G3 | L31-L35 | Positive | +31.747 mm | Central relay, stop group, and main chromatic correction group |
| G4 | L41-L42 | Negative | -42.132 mm | Compensator and coma-control group |
| G5 | L51 | Positive | +93.755 mm | Stationary rear relay group |

The first through fourth zoom groups move during zooming, while the fifth group remains stationary relative to the image plane. The group spacings vary as follows at infinity focus:

| Gap | Wide | Middle | Tele | Interpretation |
|---|---:|---:|---:|---|
| DD[3] | 0.63 mm | 7.56 mm | 21.06 mm | G1-G2 separation increases toward telephoto |
| DD[11] | 13.58 mm | 6.61 mm | 1.73 mm | G2-G3 separation decreases toward telephoto |
| DD[21] | 2.11 mm | 3.56 mm | 4.97 mm | G3-G4 separation increases modestly |
| DD[25] | 1.00 mm | 10.85 mm | 18.98 mm | G4-G5 separation increases strongly |

The aperture stop is inside G3, between L31 and L32. This location is not incidental. The design places a negative meniscus convex to the object at the front of G2 and a negative meniscus convex to the image at the rear of G4, with the stop between them. That near-symmetric bracketing is the patent's principal method for suppressing coma while retaining a wide field and small F-number variation.

The Petzval sum, computed surface by surface as $\sum \Phi/(n n')$, is +0.001260 mm^-1 for the patent prescription, corresponding to a Petzval radius of about +793.6 mm. This is a weak net field-curvature tendency relative to the 54.78 mm diagonal of the 44 x 33 mm GFX format.

## Element-by-Element Analysis

### G1 — front collector: L11 + L12

**L11: negative meniscus, convex to object.** nd = 1.89286, νd = 20.36. Glass: S-NPH4 (OHARA). f = -194.3 mm.  
L11 is a very high-index, high-dispersion front negative element. Its location at the highest entrance-side ray heights gives it strong leverage over lateral color and entrance-side Petzval contribution. The earlier draft identified this glass as S-TIH53, but S-TIH53 has nd = 1.84666 and νd = 23.78 in the current OHARA catalog; the exact match for the patent value is S-NPH4.

**L12: positive meniscus, convex to object.** nd = 1.83481, νd = 42.72. Glass: S-LAH55VS (OHARA). f = +84.3 mm.  
L12 is cemented to L11 and supplies the net positive power of G1. The high index permits a compact positive collector without requiring excessively steep curvatures. The L11/L12 pair is positive overall, with a verified group focal length of +154.368 mm.

### G2 — negative variator and inner-focus carrier: L21, L22-L23, L24

**L21 glass substrate + resin layer: compound negative aspherical meniscus.** Glass substrate nd = 1.81600, νd = 46.62. Glass: S-LAH59 (OHARA). Resin nd = 1.51876, νd = 54.04. Combined f = -30.1 mm.  
L21 is the first element of the negative variator group. The glass substrate carries the basic negative meniscus power, while the thin resin layer carries the aspherical rear surface S6. The earlier draft identified the substrate as S-LAL18; the patent values instead match S-LAH59. The patent explicitly discusses attaching an aspherical resin layer to the object-side lens of G2 because the field-dependent ray separation is high at this location and because a compound asphere is less costly than a full glass asphere.

**L22-L23: cemented negative-positive doublet.** L22 nd = 1.54072, νd = 47.23. Glass: S-TIL2 (OHARA). f = -42.4 mm. L23 nd = 1.85478, νd = 24.80. Glass: S-NBH56 (OHARA). f = +34.6 mm.  
This cemented pair corrects color inside the strongly negative G2 variator. L22 contributes negative power with moderate dispersion; L23 contributes positive power with very high dispersion. The earlier draft's S-TIL26 and S-TIH14 identifications were not catalog matches. The exact OHARA matches are S-TIL2 and S-NBH56.

**L24: negative meniscus, convex toward image.** nd = 1.63930, νd = 44.87. Glass: S-BAM12 (OHARA). f = -101.0 mm.  
L24 is the rearmost element of G2 and is the disclosed inner-focus element. The patent states that focusing may be performed by moving only the lens of the second lens group closest to the image side. Its relatively weak negative power allows focus adjustment without moving the full variator group. The earlier draft's S-NBM51 identification was incorrect; S-BAM12 is the exact catalog match.

### G3 — central positive relay and chromatic-correction group

**L31: biconvex positive Super-ED-class element.** nd = 1.43875, νd = 94.66. Glass: S-FPL55 (OHARA). f = +36.0 mm.  
L31 is the strongest single positive element in the design and is located immediately before the aperture stop. It supplies positive power with extremely low dispersion. The earlier draft identified this as S-FPL53, but S-FPL53 has νd = 94.93 in current OHARA data. The exact nd/νd match is S-FPL55, which OHARA lists at nd = 1.43875 and νd = 94.66. This is the patent prescription's best match for Fujifilm's published Super ED element.

**L32: biconcave negative, double aspherical.** nd = 1.58313, νd = 59.38. Glass: S-BAL42 (OHARA). f = -172.0 mm.  
L32 is a weak negative corrector immediately behind the stop. Its two aspherical surfaces give the designer high-order control of spherical aberration, oblique spherical aberration, coma, and astigmatism with little change in paraxial power. Its power is corrective, not variator-like.

**L33: plano-concave negative.** nd = 1.69895, νd = 30.13. Glass: S-TIM35 (OHARA). f = -74.3 mm.  
L33 is a post-stop flint element. Its flat object-side surface suggests that the element is used more for chromatic and off-axis balancing than as a primary power carrier.

**L34-L35: cemented negative-positive doublet with ED positive member.** L34 nd = 1.53172, νd = 48.84. Glass: S-TIL6 (OHARA). f = -123.7 mm. L35 nd = 1.49700, νd = 81.54. Glass: S-FPL51 (OHARA). f = +25.6 mm.  
This cemented doublet is positive overall and is the second main chromatic correction unit in G3. L35 is the production lens's published ED element. The earlier draft's S-TIL25 identification for L34 was wrong; the exact OHARA match is S-TIL6. The ED member, S-FPL51, is an exact match and provides low-dispersion positive power near the rear of the central group.

### G4 — negative compensator and coma-control group

**L41: negative meniscus, convex to object, double aspherical.** nd = 1.58313, νd = 59.38. Glass: S-BAL42 (OHARA). f = -129.4 mm.  
L41 repeats S-BAL42 and uses two aspherical surfaces. Its location after the stop gives it strong leverage over oblique aberrations, especially sagittal and tangential fan shaping at the edge of the field. The two aspheres in G4 complement the compound asphere in G2 and the post-stop L32 asphere pair.

**L42: negative meniscus, convex toward image.** nd = 1.85026, νd = 32.27. Glass: S-LAH71 (OHARA). f = -66.9 mm.  
L42 is the image-side negative meniscus referenced by the patent's coma conditions. Its object-side radius is -17.4832 mm and its image-side radius is -26.0440 mm. These radii yield the conditional-expression shape factor of 0.197, keeping the element asymmetric enough to control coma fluctuation without overcorrecting it.

### G5 — stationary rear relay group

**L51: positive meniscus, convex toward image.** nd = 1.91082, νd = 35.25. Glass: TAFD35L / TAFD35 (HOYA). f = +93.8 mm.  
L51 is the entire fifth zoom group and remains stationary with respect to the image plane. The earlier draft identified it as OHARA S-LAH79, but S-LAH79 is not an nd = 1.91082 / νd = 35.25 match. HOYA's TAFD35 and TAFD35L are exact matches to the patent value. The element's very high index lets the rear relay use moderate curvatures while still supplying positive power.

## Glass Identification and Selection

The prior analysis overstated the glass-identification certainty and assigned several elements to incorrect OHARA names. Rechecking the patent nd/νd pairs against current OHARA and HOYA catalog data gives the corrected table below.

| Element | nd | νd | Corrected catalog identification | Status |
|---|---:|---:|---|---|
| L11 | 1.89286 | 20.36 | S-NPH4 (OHARA) | Exact match |
| L12 | 1.83481 | 42.72 | S-LAH55VS (OHARA) | Exact match to 5-decimal nd |
| L21 substrate | 1.81600 | 46.62 | S-LAH59 (OHARA) | Exact match |
| L21 resin | 1.51876 | 54.04 | UV-curing aspherical resin | Patent material, no public catalog name |
| L22 | 1.54072 | 47.23 | S-TIL2 (OHARA) | Exact match |
| L23 | 1.85478 | 24.80 | S-NBH56 (OHARA) | Exact match |
| L24 | 1.63930 | 44.87 | S-BAM12 (OHARA) | Exact match |
| L31 | 1.43875 | 94.66 | S-FPL55 (OHARA) | Exact match; Super-ED-class |
| L32 | 1.58313 | 59.38 | S-BAL42 (OHARA) | Exact match to six-decimal catalog value |
| L33 | 1.69895 | 30.13 | S-TIM35 (OHARA) | Exact match to six-decimal catalog value |
| L34 | 1.53172 | 48.84 | S-TIL6 (OHARA) | Exact match to six-decimal catalog value |
| L35 | 1.49700 | 81.54 | S-FPL51 (OHARA) | Exact match; ED |
| L41 | 1.58313 | 59.38 | S-BAL42 (OHARA) | Same glass as L32 |
| L42 | 1.85026 | 32.27 | S-LAH71 (OHARA) | Exact match to six-decimal catalog value |
| L51 | 1.91082 | 35.25 | TAFD35L / TAFD35 (HOYA) | Exact match |
| PP | 1.51680 | 64.20 | generic cover plate; near BK7 class | Excluded from data surfaces |

The chromatic strategy is concentrated in G3. L31 is S-FPL55, with OHARA catalog anomalous partial-dispersion data of θg,F = 0.5340 and Δθg,F = +0.0457. L35 is S-FPL51, with θg,F = 0.5375 and Δθg,F = +0.0280. These two low-dispersion positive elements provide strong positive power with restrained secondary spectrum. The surrounding higher-dispersion negative elements, especially L33 and the negative side of the L34-L35 cemented doublet, provide the necessary balancing dispersion.

## Focus Mechanism

The patent discloses inner focusing by moving only L24, the image-side lens of G2. No close-focus prescription table is provided for Example 1; Tables 1 and 2 are infinity-focus data only.

For the data file, L24 focus travel was approximated paraxially using Fujifilm's official focus distances. The object distance was measured from the image plane, and L24 was translated while keeping the total G2-G3 mechanical length constant. In this sign convention, negative travel is objectward movement of L24:

| Zoom position | Focus distance used | L24 travel from infinity | Gap after L23, S9-S10 | Gap after L24, S11-S12 |
|---|---:|---:|---:|---:|
| Wide | 0.50 m | -3.799 mm | 7.2745 -> 3.4754 mm | 13.5800 -> 17.3791 mm |
| Middle | 0.55 m | -3.795 mm | 7.2745 -> 3.4800 mm | 6.6100 -> 10.4045 mm |
| Tele | 0.60 m | -4.294 mm | 7.2745 -> 2.9806 mm | 1.7300 -> 6.0239 mm |

These are modeling values, not patent-published mechanical specifications. They are included so the data file can represent the disclosed single-element focus mechanism without inventing a multi-element floating scheme.

## Aspherical Surfaces

Example 1 uses five aspherical surfaces on three elements: S6 on the L21 resin layer, S15-S16 on L32, and S22-S23 on L41. Fujifilm's patent uses the asphere equation

$$
Z_d=\frac{C h^2}{1+\sqrt{1-K_A C^2 h^2}}+\sum_{m=3}^{16} A_m h^m,
$$

where $C = 1/R$. This means the standard conic constant used by the data file is $K = K_A - 1$. The patent includes odd polynomial terms. LensVisualizer's current asphere model uses even powers only, so the data file preserves the patent conic and fits even-order coefficients A4 through A16 to the full patent sag over the rendered semi-diameter.

| Surface | Element | Patent KA | Data-file K | Data-file semi-diameter | Max refit residual |
|---|---|---:|---:|---:|---:|
| S6A | L21 resin rear | +0.63914607 | -0.36085393 | 16.00 mm | 0.046 µm |
| S15A | L32 front | +2.04449020 | +1.04449020 | 10.50 mm | 0.008 µm |
| S16A | L32 rear | -4.81767370 | -5.81767370 | 10.50 mm | 0.014 µm |
| S22A | L41 front | -3.50443090 | -4.50443090 | 12.10 mm | 0.017 µm |
| S23A | L41 rear | +0.39019706 | -0.60980294 | 12.12 mm | 0.016 µm |

S6A is the compound-resin asphere at the front of the variator group. Its job is primarily field-dependent correction, including distortion and oblique aberration suppression. S15A and S16A form a post-stop double-aspherical corrector on L32; they are better interpreted as high-order correction surfaces than as power-bearing surfaces. S22A and S23A on L41 operate farther toward the image side and are tied to the patent's stated coma-control purpose for the negative image-side group.

## Conditional Expressions and Verification Summary

The three relevant conditional expressions for the five-group embodiment are satisfied by Example 1:

| Expression | Formula | Verified value | Patent range |
|---|---|---:|---:|
| (1) | $f_w \tan(\omega_w)/R_{4r}$ | -1.050 | -2.5 to -0.1 |
| (2) | $(R_{4r}-R_{4f})/(R_{4r}+R_{4f})$ | +0.197 | +0.1 to +0.9 |
| (3) | $f_4/f_1$ | -0.273 | -0.35 to -0.10 |

For expression (1), $f_w = 32.93$ mm, $\omega_w = 39.7^\circ$, and $R_{4r} = -26.0440$ mm. For expression (2), $R_{4f} = -17.4832$ mm and $R_{4r} = -26.0440$ mm. For expression (3), the independently traced group focal lengths are $f_4 = -42.132$ mm and $f_1 = +154.368$ mm.

The independent paraxial recheck reproduced the patent's focal lengths to the quoted precision:

| Zoom position | Patent Table 2 f | Recomputed f | Patent FNo |
|---|---:|---:|---:|
| Wide | 32.93 mm | 32.936 mm | 4.12 |
| Middle | 45.27 mm | 45.281 mm | 4.12 |
| Tele | 62.24 mm | 62.230 mm | 4.12 |

The most important corrections relative to the earlier draft were the glass identifications, not the first-order optics. The focal lengths, group powers, Petzval sum, focus-element identification, and conditional-expression values were confirmed after recalculation.

## Sources

- US 10,191,246 B2, Hiroki Saito / FUJIFILM Corporation, “Zoom Lens and Imaging Apparatus,” Example 1, Tables 1-3 and Figures 1, 6-9.
- FUJIFILM Corporation, “FUJINON GF32-64mmF4 R LM WR Specifications,” https://www.fujifilm-x.com/global/products/lenses/gf32-64mmf4-r-lm-wr/specifications/
- OHARA Corporation / OHARA INC., optical glass catalog and product pages for S-NPH4, S-LAH55VS, S-LAH59, S-TIL2, S-NBH56, S-BAM12, S-FPL55, S-BAL42, S-TIM35, S-TIL6, S-FPL51, and S-LAH71.
- HOYA GROUP Optics Division, TAFD35 and TAFD35L product data, including nd = 1.91082 and νd = 35.25.
