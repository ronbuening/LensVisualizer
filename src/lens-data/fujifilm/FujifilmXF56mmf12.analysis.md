# Fujinon XF 56mm F1.2 R — Patent Analysis

## Patent & Lens Identification

**Patent:** US 2015/0212302 A1
**Application Number:** 14/606,301
**Filed:** January 27, 2015 (priority: JP 2014-015509, January 30, 2014)
**Published:** July 30, 2015
**Inventor:** Takashi Suzuki
**Applicant:** FUJIFILM Corporation
**Title:** Imaging Lens and Imaging Apparatus
**Embodiment analyzed:** Example 3 (Tables 7–9, FIG. 3, FIG. 8)
**Production lens:** Fujinon XF56mmF1.2 R (announced January 6, 2014)

The identification of Example 3 as the production embodiment rests on convergent evidence. The production lens is specified by Fujifilm as having 11 elements in 8 groups, with two extra-low dispersion (ED) elements and one double-sided aspherical element. Examples 1, 4, and 5 of the patent contain only 10 elements (five in G1 and five in G2), while Examples 2 and 3 each contain 11 elements — matching the production count. Example 3's focal length of 56.98 mm (Table 8; the rounded Table 7 rows recompute to 56.99 mm) and design f-number of 1.25 are consistent with the marketed 56 mm f/1.2 specification, as is its half-angle of view of 14.0° (total 28.0°, closely matching the published 28.5° angle of view on the APS-C format). All five examples share the same f/1.25 design aperture, but Example 3's 11-element count, two 1.49700 / 81.6 low-dispersion elements, and single double-sided aspherical element collectively match the published optical formula. The patent does not name the product, so the identification is an inference from these counts. The same optics serve the XF56mmF1.2 R APD, which adds an apodization filter that the patent does not describe; the 2022 XF56mmF1.2 R WR is a different 13-element design and is not covered here.

## Lens Overview

The XF56mmF1.2 R is a fast normal-to-short-telephoto prime designed for Fujifilm's APS-C X-mount mirrorless cameras, yielding an 85 mm full-frame equivalent field of view. It was one of the fastest autofocusing native mirrorless lenses at the time of its release and was widely regarded as a benchmark portrait lens for the X system.

The optical design is a modified Gaussian type: a positive front group (G1) ahead of the aperture stop followed by a positive rear group (G2). The Gaussian heritage is visible in the "two successive positive lenses plus a negative lens with a concave surface toward the image side" structure of G1, but the design departs substantially from a classical Gaussian by placing a cemented doublet and an additional negative meniscus in G1, and by using an aspherical element and a cemented triplet in G2.

### Specifications (Patent Example 3)

| Parameter | Value |
|---|---|
| Effective focal length | 56.98 mm (Table 8; 56.99 mm recomputed from Table 7) |
| Marketing focal length | 56 mm |
| Design f-number (Fno) | 1.25 |
| Marketing f-number | f/1.2 |
| Back focus (BF) | 16.53 mm (air-equivalent, cover plate PP removed) |
| Total angle of view (2ω) | 28.0° |
| Elements / Groups | 11 / 8 |
| Aspherical surfaces | 2 (both surfaces of L21) |
| ED elements | 2 (L12, L13) |
| Filter size | 62 mm |
| Minimum focus distance | 0.7 m (production; the patent gives no close state) |
| Diaphragm blades | 7 (rounded) |
| Weight | 405 g |

---

## Optical Construction

### Group 1 — Front Group (positive, f ≈ 112.9 mm)

G1 contains six elements in five air-spaced groups: three individually mounted positive meniscus lenses (L11, L12, L13), a cemented positive doublet (L14 + L15), and a negative meniscus (L16). G1 is fixed during focusing.

**L11 — Positive Meniscus (convex to object)**
nd = 1.48749, νd = 70.2. Glass: S-FSL5 (OHARA). f = +385.2 mm.
A weak positive collector element at the front of the lens. Its low refractive index and gentle curvatures minimize surface reflections and contribute very little chromatic aberration. L11 gently pre-converges the incoming beam, reducing the angles of incidence on the more strongly curved surfaces of L12 and L13 that follow.

**L12 — Positive Meniscus (convex to object)**
nd = 1.49700, νd = 81.6. Glass: S-FPL51 (OHARA) — ED glass. f = +78.7 mm.
The first of the two ED elements. The patent names no glasses; S-FPL51 is the catalog glass that matches the printed pair, a fluorophosphate crown with very low dispersion (νd = 81.6) and anomalous partial dispersion. Table 7 prints θgF only on the L13 row, so L12's anomalous dispersion is inferred from the identical index pair. This element carries a substantial share of G1's positive power while introducing minimal primary and secondary chromatic aberration.

**L13 — Positive Meniscus (convex to object)**
nd = 1.49700, νd = 81.6, θgF = 0.5375. Glass: S-FPL51 (OHARA) — ED glass. f = +139.8 mm.
The second ED element. Paired with L12, it allows the front group to achieve high positive power while keeping both primary and secondary longitudinal chromatic aberration under control. L13 is the lens the patent evaluates as L1p: Table 7 prints θgF = 0.5375 on its row only, and Table 16 gives 0.0280 for conditional expression (3), θgF1p − 0.6415 + 0.001618 × νd1p > 0.01, alongside νd1p = 81.6 for expression (4), νd1p > 60. ¶0052 ties these conditions to correction of the secondary spectrum of longitudinal chromatic aberration.

**L14 + L15 — Cemented Doublet D1**
L14: nd = 1.88300, νd = 40.8. Glass: S-LAH58 (OHARA). f = +66.4 mm.
L15: nd = 1.75211, νd = 25.1. Glass: FF8 (HOYA fluor flint). f = −90.4 mm.
This cemented doublet is a weak positive achromatic corrector. L14 uses an S-LAH58-class high-index lanthanum glass (nd = 1.883), which provides strong positive power without excessive surface curvatures. L15 is a dense flint glass with very low Abbe number (25.1), creating a large dispersion difference across the cemented interface for chromatic correction.

**L16 — Negative Meniscus (convex to object)**
nd = 1.67300, νd = 38.2. Glass: S-NBH52 (OHARA). f = −29.1 mm.
The strongest single element in G1 and the "negative lens having a concave surface toward the image side" referenced throughout the patent claims. Its concave image-side surface creates a powerful diverging action that balances the combined positive power of L11–L14/L15. L16's strong negative power also contributes significantly to reducing the Petzval sum.

### Aperture Stop

Located in the air space between G1 and G2. The seven-blade rounded diaphragm sits roughly at the midpoint of the optical track, which is typical for Gaussian-derived designs where the stop position is chosen to balance the symmetry of aberration correction between the front and rear groups. The stop is surface 12 of Table 7, 6.22 mm behind L16 and 11.59 mm ahead of L21 at infinity; it stays with G1 during focusing. The blade count is a production specification, not patent data, and ¶0057 notes that the drawn stop symbol marks position only.

### Group 2 — Rear Group (positive, f ≈ 35.0 mm)

G2 contains five elements in three air-spaced groups: the aspherical singlet L21, the cemented triplet (L22 + L23 + L24), and the positive biconvex L25.

**L21 — Biconcave Negative (double-sided aspherical)**
nd = 1.58313, νd = 59.4. Glass: L-BAL42 (OHARA) — PGM glass (probable). f = −91.1 mm.
The sole aspherical element in the design, with both surfaces carrying aspherical departures (surfaces *13 and *14 in the patent). The "L-" prefix on the OHARA designation indicates a low-softening-temperature glass designed specifically for precision glass molding (PGM). The aspherical sag equation (A) of ¶0062 is Zd = C·h²/{1 + (1 − K·C²·h²)^½} + ΣAm·h^m with m = 3…20, i.e. Fujifilm's form without "1 +" inside the root. Table 9 prints K = 0 for both surfaces, which under that formula is a parabolic base, so the companion data file stores the standard conic K = −1 together with every odd and even coefficient exactly as printed. The base-conic choice moves the surface by only about 3 µm at h = 10 mm, but it changes the on-axis balance: with the cover plate restored, the parabolic reading gives −0.008 mm of longitudinal spherical aberration at full aperture, where a spherical base would give +0.032 mm; FIG. 8 draws the d-line within about 0.005 mm of the axis, which supports the parabolic reading (calculated check). Positioned immediately behind the aperture stop, L21 intercepts the marginal ray bundle where the aspherical correction is most effective for spherical aberration.

| Term | S13A | S14A |
|---|---:|---:|
| A3 | 3.8393566E−04 | 3.2574414E−04 |
| A4 | −6.2592552E−04 | −5.1485989E−04 |
| A5 | 1.4778350E−04 | 1.1258987E−04 |
| A6 | −1.4352983E−05 | −1.0452190E−05 |
| A7 | −4.3588543E−06 | −3.6580954E−06 |
| A8 | 1.1550101E−06 | 1.2413561E−06 |
| A9 | −8.1701706E−09 | −8.9862297E−08 |
| A10 | −2.0799721E−08 | −1.9808269E−08 |
| A11 | 1.8896154E−09 | 4.6427534E−09 |
| A12 | −7.7228059E−11 | −2.0450812E−10 |
| A13 | −3.5277023E−12 | −4.8040730E−11 |
| A14 | 5.6690635E−12 | 6.9487622E−12 |
| A15 | −7.1519452E−13 | −5.5600157E−14 |
| A16 | −3.4765348E−14 | −5.2312313E−14 |
| A17 | 9.4964100E−15 | 3.3641818E−15 |
| A18 | −1.8369342E−16 | 6.5265695E−17 |
| A19 | −3.5656606E−17 | −1.2833819E−17 |
| A20 | 1.5813241E−18 | 3.4385862E−19 |

At the semi-diameters used by the data file (10.0 mm on S13A, 10.4 mm on S14A) the exact profiles depart from their vertex spheres by −1.676 mm and −1.309 mm, bending the paraxially biconcave element into the object-facing meniscus that FIG. 3 draws. The published polynomial is only usable inside the design aperture: the slope of S13A peaks near h = 10.05 mm and the profile reverses by about 10.75 mm, which is why the data file stops the front face at 10.0 mm although FIG. 3 draws the rim near 10.7 mm.

**L22 + L23 + L24 — Cemented Triplet T1**
L22: nd = 1.88300, νd = 40.8. Glass: S-LAH58 (OHARA). f = +16.6 mm.
L23: nd = 1.66680, νd = 33.0. Glass: CDGM H-ZF39 catalog equivalent; production supplier unspecified. f = −14.0 mm.
L24: nd = 1.88300, νd = 40.8. Glass: S-LAH58 (OHARA). f = +22.7 mm.
The optical heart of the rear group (calculated f = +29.7 mm). ¶0045 states that cementing the three lenses allows correction without total reflection at the internal interfaces and lets the two positive lenses share the aberration-correcting burden. Both positive elements use the 1.883 / 40.8 glass, satisfying conditional expression (1) (Nd2 = 1.88300, Table 16), and the Abbe difference to the negative element is 7.8 (expression (2)).

**L25 — Symmetric Biconvex Positive**
nd = 1.48749, νd = 70.2. Glass: S-FSL5 (OHARA). f = +297.6 mm.
A weak positive lens placed at the rear of the optical system. During focusing L25 is fixed relative to the image plane; ¶0050 credits this fixed rear lens with minimizing the change of spherical aberration and field curvature over the focus range. The design is not image-side telecentric: the calculated exit pupil lies about 57 mm ahead of the last surface.

---

## Focusing Mechanism

The patent describes an inner-focusing scheme (¶0046, ¶0050) in which G1, the stop and L25 remain fixed relative to the image plane during focusing from infinity to a close object. Focusing is performed by moving the subassembly consisting of L21, L22, L23, and L24 (the aspherical element and the cemented triplet, calculated f = +39.6 mm) toward the object side, as the FIG. 3 arrow shows. The patent publishes infinity data only — no close-focus spacing, object distance or magnification.

The close-focus state in the data file is therefore calculated, not transcribed. A paraxial solve for the production minimum focus distance of 0.7 m, measured object-to-image (object 619.8 mm ahead of surface 1 plus the 80.2 mm track), gives a group movement of 6.90 mm: the stop-to-L21 air gap decreases from 11.59 mm to 4.69 mm while the L24-to-L25 gap increases from 0.90 mm to 7.80 mm. The resulting magnification is −0.087×, in line with the 0.09× production specification. The effective focal length shortens from 56.99 mm at infinity to approximately 52.98 mm at close focus, about 7% focus breathing. At that calculated state the full f/1.25 cone would reach roughly 11.0 mm on the front face of L21, beyond the usable range of the published aspheric polynomial, so the model lets L21 trim the axial beam slightly at minimum focus; whether the production lens does the same is unknown.

---

## Glass Selection and Aberration Correction

The glass map spans a wide range of refractive indices and dispersions, from the anomalous-dispersion fluorophosphate S-FPL51 (nd = 1.497, νd = 81.6) to the high-index lanthanum S-LAH58 (nd = 1.883, νd = 40.8). The patent names no glasses; every name below is a catalog equivalent of the printed nd/νd pair.

**ED glasses (S-FPL51) in the front group** correct secondary longitudinal chromatic aberration. At f/1.2, the longitudinal color spread at the paraxial focus is a dominant image quality limiter; without anomalous-dispersion glasses, the secondary spectrum would produce visible color fringing in high-contrast transitions.

**High-index lanthanum glasses (S-LAH58 class) in both groups** allow strong positive power with moderate surface curvatures, reducing higher-order spherical aberration and coma. Using three elements of the same glass type (L14, L22, L24) also simplifies manufacturing logistics.

**A moldable glass (L-BAL42 class) for the asphere** is consistent with precision glass molding of L21; the patent does not state the manufacturing method, so this is an inference from the catalog match.

The Petzval sum for the complete lens is 0.00345, corresponding to a Petzval radius of approximately 289 mm. Field flatness is achieved through *astigmatic balancing* — the deliberate introduction of controlled astigmatism that opposes the Petzval curvature. The negative elements L16 (f = −29.1 mm) and L23 (f = −14.0 mm) contribute the most to reducing the Petzval sum.

---

## Summary of Glass Identifications

| Element | nd | νd | Code | Catalog Match | Confidence |
|---|---|---|---|---|---|
| L11 | 1.48749 | 70.2 | 487/702 | S-FSL5 (OHARA) | Exact |
| L12 | 1.49700 | 81.6 | 497/816 | S-FPL51 (OHARA) — ED | Exact |
| L13 | 1.49700 | 81.6 | 497/816 | S-FPL51 (OHARA) — ED | Exact |
| L14 | 1.88300 | 40.8 | 883/408 | S-LAH58 (OHARA) | Exact |
| L15 | 1.75211 | 25.1 | 752251 | FF8 (HOYA fluor flint) | Exact |
| L16 | 1.67300 | 38.2 | 673382 | S-NBH52 (OHARA) | Exact |
| L21 | 1.58313 | 59.4 | 583/594 | L-BAL42 (OHARA) — PGM | Probable |
| L22 | 1.88300 | 40.8 | 883/408 | S-LAH58 (OHARA) | Exact |
| L23 | 1.66680 | 33.0 | 667/330 | H-ZF39 (CDGM equivalent) | Exact coordinates |
| L24 | 1.88300 | 40.8 | 883/408 | S-LAH58 (OHARA) | Exact |
| L25 | 1.48749 | 70.2 | 487/702 | S-FSL5 (OHARA) | Exact |
| PP | 1.51680 | 64.2 | 517/642 | S-BSL7 (OHARA) / N-BK7 | Cover plate, excluded from the data file |

"Exact" means the catalog nd/νd coordinates equal the patent pair to the printed precision; the patent itself names no glass, so none of these is a confirmed production melt.

## Semi-Diameters and Cover Plate

The patent lists no effective diameters. FIG. 3 is drawn to scale (14.78 px/mm at 300 dpi, checked at 20 vertex crossings), and its front-group rims sit 1–4% above the calculated f/1.25 axial marginal ray. The data file takes L11 (23.8 mm), the L22 rim (11.5 mm) and the rear group L23–L25 (13.7, 13.9 and 14.1 mm) from the figure; the rear values also let the chief ray of the 14.2 mm image corner through, which needs 11.7 mm on the last surface. The remaining front-group values are ray-trace estimates 4–13% above the figure. Table 7 places the 2.80 mm cover plate PP 10.00 mm behind L25 and prints no plate-to-image distance; the data file omits the plate and ends with the Table 8 air-equivalent back focus of 16.53 mm.
