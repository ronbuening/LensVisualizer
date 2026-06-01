# Nikon AF-S NIKKOR 70-200mm f/2.8G ED VR II — Optical Analysis

## Patent Reference and Design Identification

**Patent:** US 8,416,506 B2 — “Zoom Lens, Optical Apparatus Equipped Therewith and Method for Manufacturing the Zoom Lens”  
**Application Number:** 12/708,951; PCT/JP2009/062532  
**Filed:** February 19, 2010 in the United States; priority applications JP 2009-037560, JP 2009-037561, and JP 2009-037562 filed February 20, 2009  
**Granted:** April 9, 2013  
**Inventor:** Tomoki Ito  
**Assignee:** Nikon Corporation  
**Embodiment analyzed:** Example 6, Table 6, Figures 26-30

The transcribed prescription is Example 6 of US 8,416,506 B2. It is best identified with the AF-S NIKKOR 70-200mm f/2.8G ED VR II, Nikon model 2185, announced by Nikon on July 30, 2009. The patent does not name the commercial lens; the identification is an evidence-based correspondence between the worked example and Nikon's published product specification.

The strongest matching points are the 21-element / 16-group construction, seven ED elements, 70-200 mm f/2.8 production specification, FX/35 mm image format, internal focusing, Silent Wave Motor autofocus, 77 mm filter size, and 1.4 m closest focusing distance throughout the zoom range. Example 6 gives f = 71.40 / 135.00 / 196.00 mm and FNO = 2.89, which is the normal patent-example form of a 70-200 mm f/2.8 production target. Nikon's announcement specifies 21 elements in 16 groups with seven ED elements, 70-200 mm focal length, f/2.8 maximum aperture, nine rounded diaphragm blades, 77 mm filters, and 1.4 m closest focusing distance.

Example 6 also matches the mechanical architecture. The patent's Figure 26 and Table 6 describe a five-group zoom, G1(+) · G2(-) · G3(+) · G4(-) · G5(+), with G1 and G5 fixed during zoom. G3 is the focusing group. The vibration-reduction group is G5b, the negative second subgroup inside the fixed rear group G5. This distinguishes Example 6 from Example 4, which uses a different grouping with the stabilizer in a G4-based rear assembly, and from the later AF-S NIKKOR 70-200mm f/2.8E FL ED VR, which is a separate 22-element / 18-group fluorite design with an electromagnetic diaphragm.

The patent's TL = 246.275 mm is an optical total track from the first prescription surface to the image plane, not the physical barrel length of the production lens. Nikon's published physical length is approximately 205.5 mm from the lens mount. Those quantities should not be conflated.

## Optical Architecture

The design is a positive-lead telephoto zoom with a fixed front collector and fixed rear relay. The verified group powers from the Table 6 prescription are:

| Group | Power | Verified focal length | Function |
|---|---:|---:|---|
| G1 | Positive | +92.60 mm | Fixed front collector |
| G2 | Negative | -26.08 mm | Main variator |
| G3 | Positive | +57.14 mm | Compensator and internal focusing group |
| G4 | Negative | -180.04 mm | Auxiliary compensator |
| G5 | Positive | +111.17 mm | Fixed rear relay containing stop and VR group |

Zooming changes four air gaps: d1 between G1 and G2, d2 between G2 and G3, d3 between G3 and G4, and d4 between G4 and G5. Their sum remains 53.137-53.138 mm at the three patent zoom states, while the back focus remains 53.787 mm. This is the prescription-level expression of an internal zoom: G1 and G5 are fixed relative to the image plane, while G2, G3, and G4 translate internally.

G5 is partitioned into G5a(+), G5b(-), and G5c(+). The aperture stop is located between G5a and G5b, at the image-side end of G5a. G5b is the stabilizing subgroup. Placing the stabilizer in this relatively small-diameter rear section reduces the moving mass and required shift compared with a front-group stabilizer.

## Element-by-Element Analysis

Standalone focal lengths below are thick-lens values in air. They were computed from the Table 6 radii, center thicknesses, and nd values. Cemented-pair net focal lengths are stated where they clarify the role of the bonded unit.

### G1: Fixed front collector

**L11 — Negative Meniscus, convex to object.** nd = 1.79504, νd = 28.69. Glass: J-LAFH3 class, HIKARI. f = -186.4 mm.  
L11 is the high-index, high-dispersion front half of the leading cemented doublet. It supplies the dispersive partner for the ED positive element behind it and keeps the first group from becoming a simple stack of low-dispersion positive lenses.

**L12 — Biconvex Positive.** nd = 1.49782, νd = 82.52. Glass: J-FKH1 class, HIKARI ED fluorocrown. f = +196.1 mm.  
L12 is cemented to L11. The L11+L12 pair is nearly afocal as a standalone unit, with a calculated net focal length of approximately -3760 mm. Its main role is chromatic balancing at high ray height rather than supplying primary positive power.

**L13 — Biconvex Positive.** nd = 1.49782, νd = 82.52. Glass: J-FKH1 class, HIKARI ED fluorocrown. f = +187.9 mm.  
L13 is the first air-spaced positive power element in G1. Low dispersion here is efficient because axial color generated in the front collector would be difficult to remove later.

**L14 — Positive Meniscus, convex to object.** nd = 1.49782, νd = 82.52. Glass: J-FKH1 class, HIKARI ED fluorocrown. f = +171.1 mm.  
L14 completes the positive front group. G1 therefore contains three ED positive elements, a deliberate concentration of low-dispersion power in the highest-ray-height part of the lens.

### G2: Negative variator

**L21 — Negative Meniscus, convex to object.** nd = 1.81600, νd = 46.62. Glass: S-LAH59 class, OHARA. f = -47.8 mm.  
L21 is the leading strong negative element of the variator. The high index permits the required negative power without pushing both surfaces to extreme curvature.

**L22 — Biconcave Negative.** nd = 1.48749, νd = 70.41. Glass: N-FK5 / J-FK5 fluor-crown class. f = -58.6 mm.  
L22 is the low-dispersion negative member of the first G2 cemented pair. It is a fluor-crown partner in a moving achromat, not one of Nikon's seven published ED elements.

**L23 — Positive Meniscus, convex to object.** nd = 1.84666, νd = 23.78. Glass: S-TIH53 class, OHARA. f = +51.1 mm.  
L23 is the dense-flint positive partner cemented to L22. The L22+L23 pair computes to approximately +408 mm, so it is a weak positive achromat embedded inside an otherwise strongly negative variator.

**L24 — Positive Meniscus, concave to object.** nd = 1.80518, νd = 25.43. Glass: S-TIH6 class, OHARA. f = +159.7 mm.  
L24 is the dense-flint front half of the rear G2 doublet.

**L25 — Negative Meniscus, concave to object.** nd = 1.81600, νd = 46.62. Glass: S-LAH59 class, OHARA. f = -48.5 mm.  
L25 is cemented behind L24. The L24+L25 doublet is net negative, about -67.0 mm, and forms the trailing negative portion of the variator.

### G3: Positive internal focusing group

**L31 — Positive Meniscus, concave to object.** nd = 1.74400, νd = 44.78. Glass: S-LAM2 class, OHARA. f = +134.8 mm.  
L31 is the leading positive member of the internal focusing group.

**L32 — Negative Meniscus, convex to object.** nd = 1.84666, νd = 23.78. Glass: S-TIH53 class, OHARA. f = -152.0 mm.  
L32 is the high-dispersion negative member of the G3 doublet.

**L33 — Biconvex Positive.** nd = 1.60300, νd = 65.46. Glass: S-PHM53 class, OHARA phosphate crown. f = +59.1 mm.  
L33 is the positive component cemented to L32. The L32+L33 pair computes to approximately +97.5 mm, while the complete G3 group computes to +57.14 mm. Because G3 moves during focusing, its internal chromatic correction is necessary to avoid large focus-dependent color shifts.

### G4: Negative auxiliary compensator

**L41 — Negative Meniscus, concave to object.** nd = 1.84666, νd = 23.78. Glass: S-TIH53 class, OHARA. f = -180.0 mm.  
G4 is a single weak negative element. It contributes compensation during zoom rather than acting as the main variator.

### G5: Fixed rear relay with aperture and VR group

**L51 — Biconvex Positive.** nd = 1.49782, νd = 82.52. Glass: J-FKH1 class, HIKARI ED fluorocrown. f = +185.6 mm.  
L51 begins G5a, the positive section ahead of the stop.

**L52 — Positive Meniscus, convex to object.** nd = 1.49782, νd = 82.52. Glass: J-FKH1 class, HIKARI ED fluorocrown. f = +176.8 mm.  
L52 is the second ED member of G5a. The stop follows this element, so L51 and L52 work at significant marginal-ray height.

**L53 — Biconvex Positive.** nd = 1.72825, νd = 28.46. Glass: S-TIH10 class, OHARA. f = +70.1 mm.  
L53 is the positive dense-flint front component of the VR doublet.

**L54 — Biconcave Negative.** nd = 1.57957, νd = 53.71. Glass: H-BaF3 / N-BALF4 class. f = -47.6 mm.  
L54 is cemented to L53. The L53+L54 pair computes to approximately -152.5 mm. Its bonded construction helps control decentering color and coma when the VR group shifts off-axis.

**L55 — Negative Meniscus, convex to object.** nd = 1.80440, νd = 39.57. Glass: S-LAH63 class, OHARA. f = -83.4 mm.  
L55 is the trailing negative singlet in G5b. Together, L53-L55 form the negative VR subgroup, with a verified focal length of -53.03 mm.

**L56 — Biconvex Positive.** nd = 1.49782, νd = 82.52. Glass: J-FKH1 class, HIKARI ED fluorocrown. f = +92.7 mm.  
L56 begins G5c, the final positive relay. It is the sixth ED element in the prescription.

**L57 — Biconvex Positive.** nd = 1.49782, νd = 82.52. Glass: J-FKH1 class, HIKARI ED fluorocrown. f = +77.2 mm.  
L57 is the strongest positive ED element in the rear relay.

**L58 — Negative Meniscus, concave to object.** nd = 1.85026, νd = 32.35. Glass: J-LASF021 / S-LAH71 class. f = -98.4 mm.  
L58 is the rear high-index negative meniscus. It reduces the residual positive field-curvature tendency of the preceding positive crowns and shapes the exit bundle near the image plane.

## Glass Identification and Selection

The glass names are catalog-class identifications, not proof of a purchase order. The matching criterion is the patent's nd/νd pair compared against published manufacturer catalogs and cross-reference tables. Where several vendors publish equivalent glasses, the analysis uses the most plausible catalog class and leaves the uncertainty visible.

| Patent nd / νd | Catalog identification | Elements | Function |
|---|---|---|---|
| 1.49782 / 82.52 | J-FKH1, HIKARI ED fluorocrown; catalog nd = 1.497820, νd = 82.57 | L12, L13, L14, L51, L52, L56, L57 | Low-dispersion positive elements; secondary-spectrum reduction |
| 1.79504 / 28.69 | J-LAFH3, HIKARI | L11 | High-dispersion front doublet partner |
| 1.81600 / 46.62 | S-LAH59, OHARA class | L21, L25 | High-index negative variator elements |
| 1.48749 / 70.41 | N-FK5 / J-FK5 fluor-crown class | L22 | Low-dispersion negative doublet member |
| 1.84666 / 23.78 | S-TIH53, OHARA class | L23, L32, L41 | Dense-flint correction elements |
| 1.80518 / 25.43 | S-TIH6, OHARA class | L24 | Dense-flint doublet member |
| 1.74400 / 44.78 | S-LAM2, OHARA class | L31 | Positive focusing element |
| 1.60300 / 65.46 | S-PHM53, OHARA class | L33 | Low-dispersion phosphate crown |
| 1.72825 / 28.46 | S-TIH10, OHARA class | L53 | Positive VR doublet member |
| 1.57957 / 53.71 | H-BaF3 / N-BALF4 class | L54 | Negative barium light-flint member |
| 1.80440 / 39.57 | S-LAH63, OHARA class | L55 | Negative VR singlet |
| 1.85026 / 32.35 | J-LASF021 / S-LAH71 class | L58 | Rear high-index negative meniscus |

The J-FKH1 identification is the most important glass match in the file. HIKARI's J-FKH1 datasheet gives nd = 1.497820 and νd = 82.57, with θgF = 0.5386 and ΔPgF = +0.0327. The patent rounds the same index and prints νd = 82.52, close enough for a catalog-class match. The data file carries J-FKH1's nC, nF, ng, and ΔPgF on the seven ED elements so that chromatic modeling is not limited to Abbe-only dispersion.

The design is ED-rich but should not be described as apochromatic in the manufacturer's naming sense. Nikon published seven ED elements, and Table 6 confirms seven J-FKH1-class low-dispersion positive elements. That supports strong secondary-spectrum reduction, not a formal APO designation.

## Focus Mechanism

The lens focuses internally by translating G3. The patent's general text identifies the third lens group as the preferred focusing group, and Figure 26 marks G3 with the focusing arrow. Nikon's product specification identifies the production lens as an IF/SWM lens.

Table 6 gives infinity-focus zoom spacings, but it does not publish a finite-conjugate spacing table for Example 6. The data file therefore uses a paraxial reconstruction: G3 is shifted imageward from infinity to close focus, d2 increases, d3 decreases, the image plane remains fixed at the patent back focus, and the object distance is constrained to Nikon's published 1.4 m minimum focus distance measured from the image plane.

| Zoom state | d2 at infinity | d2 at 1.4 m | d3 at infinity | d3 at 1.4 m | G3 shift |
|---|---:|---:|---:|---:|---:|
| Wide | 25.896 mm | 28.474 mm | 5.289 mm | 2.711 mm | +2.578 mm imageward |
| Middle | 13.196 mm | 20.509 mm | 12.530 mm | 5.217 mm | +7.313 mm imageward |
| Tele | 2.011 mm | 15.182 mm | 16.871 mm | 3.700 mm | +13.171 mm imageward |

The reconstructed telephoto close-focus magnification is approximately 0.116x, consistent with Nikon's published 0.12x maximum reproduction ratio. The values are appropriate for visualization and first-order geometry, but they are not patent-published finite-conjugate spacings.

## Image Stabilization

Vibration reduction is performed by G5b, the negative second subgroup of the fixed rear group G5. The subgroup consists of L53, L54, and L55 and has a verified focal length of -53.03 mm. The full G5 group has a verified focal length of +111.17 mm, giving fGn/fVR = -2.097 from the rounded prescription, which reproduces the patent's Table 6 value of -2.095 within rounding.

The patent gives a vibration-reduction coefficient K = 1.30 for Example 6. Using the patent relation `(f · tan θ) / K`, the required G5b shifts are 0.38 mm at 71.4 mm for a 0.40° shake angle, 0.54 mm at 135 mm for a 0.30° shake angle, and 0.79 mm at 196 mm for a 0.30° shake angle. These values reproduce the Example 6 text.

Nikon's product announcement describes this VR II implementation as equivalent to a four-step shutter-speed increase, based on Nikon performance tests. That production claim is separate from the patent's paraxial stabilizer coefficient.

## Conditional Expressions

The seven conditional-expression values in Table 6 are reproduced by the paraxial group calculation.

| Expression | Patent value | Independent calculation | Comment |
|---|---:|---:|---|
| fGn / fVR | -2.095 | -2.097 | G5 to G5b power ratio |
| |fGf / fGn| | 0.511 | 0.514 | G3 focus group to G5 |
| |fGn / ft| | 0.568 | 0.567 | Rear group to telephoto EFL |
| |fVR| / fw | 0.744 | 0.743 | VR group to wide EFL |
| fGn / fw | 1.559 | 1.557 | Rear group to wide EFL |
| |fVR| / ft | 0.271 | 0.271 | VR group to telephoto EFL |
| |fn / fGn| | 0.231 | 0.235 | Negative variator to rear group |

Small residual differences come from recomputing the ratios from the rounded prescription values printed in Table 6.

## Verification Summary

The Table 6 prescription was re-entered and checked with an independent reduced-angle paraxial ray trace. The computed effective focal lengths are 71.399 mm, 134.999 mm, and 195.997 mm for the wide, middle, and telephoto states. The computed back focal distances are 53.786 mm, 53.787 mm, and 53.787 mm. These reproduce the patent values f = 71.40 / 135.00 / 196.00 mm and Bf = 53.787 mm.

The aperture stop semi-diameter used in the data file is 16.59 mm. It was derived from the f/2.89 patent aperture and the stop conjugate at the three zoom settings; the three independent calculations agree to within 0.001 mm.

The Petzval sum was recomputed surface-by-surface as Σ φ/(n·n′), not by a thin-element approximation. The resulting Petzval sum is +0.001415 mm^-1, corresponding to a Petzval radius of approximately 706.5 mm. This is a weak net positive field-curvature contribution after cancellation among the positive crowns, dense flints, and the rear negative meniscus.

The patent does not tabulate clear apertures. The semi-diameters in the data file are inferred from the f/2.89 stop geometry and paraxial ray envelopes, then checked against renderer constraints. The maximum sd/|R| ratio is 0.614, below the 0.90 limit, and the minimum computed element edge thickness is approximately 0.36 mm.

All surfaces in Example 6 are spherical. The patent includes general language allowing aspherical surfaces in the broader invention, but Table 6 supplies no aspherical coefficients for this embodiment. The data file therefore correctly uses `asph: {}`.

## Sources

- US 8,416,506 B2, “Zoom Lens, Optical Apparatus Equipped Therewith and Method for Manufacturing the Zoom Lens,” Tomoki Ito / Nikon Corporation; filed February 19, 2010, granted April 9, 2013. Example 6, Table 6, Figures 26-30.
- Nikon Corporation, “AF-S NIKKOR 70-200mm f/2.8G ED VR II,” news release, July 30, 2009. https://www.nikon.com/company/news/2009/0730_nikkor_04.html
- Nikon USA, “AF-S NIKKOR 70-200mm f/2.8G ED VR II” product specifications. https://www.nikonusa.com/p/af-s-nikkor-70-200mm-f28g-ed-vr-ii/2185/overview
- HIKARI GLASS CO., LTD., J-FKH1 optical-glass datasheet, 2022-7-1 revision.
- HIKARI GLASS CO., LTD., J-LAFH3 optical-glass datasheet, 2022-7-1 revision.
- OHARA optical-glass datasheets and catalog entries for S-LAH59, S-TIH53, S-TIH6, S-LAM2, S-PHM53, S-TIH10, S-LAH63, and S-LAH71-class matches.
- SCHOTT, HOYA, and CDGM cross-reference catalogs for equivalent fluor-crown, dense-flint, lanthanum, and barium-light-flint classes.
