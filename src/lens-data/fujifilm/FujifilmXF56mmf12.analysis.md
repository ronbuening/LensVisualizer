# Fujinon XF 56mm F1.2 R — Patent Analysis

## Patent & Lens Identification

**Patent:** US 2015/0212302 A1, "Imaging Lens and Imaging Apparatus"
**Inventor:** Takashi Suzuki (Fujifilm Corporation)
**Filed:** January 27, 2015 (priority: JP 2014-015509, January 30, 2014)
**Production lens:** Fujinon XF56mmF1.2 R (announced January 6, 2014)
**Embodiment:** Example 3

The identification of Example 3 as the production embodiment rests on convergent evidence. The production lens is specified by Fujifilm as having 11 elements in 8 groups, with two extra-low dispersion (ED) elements and one double-sided aspherical element. Examples 1, 4, and 5 of the patent contain only 10 elements (five in G1 and five in G2), while Examples 2 and 3 each contain 11 elements — matching the production count. Example 3's computed effective focal length of 56.99 mm and design f-number of 1.25 are consistent with the marketed 56 mm f/1.2 specification, as is its half-angle of view of 14.0° (total 28.0°, closely matching the published 28.5° angle of view on the APS-C format). All five examples share the same f/1.25 design aperture, but Example 3's 11-element count, two S-FPL51 ED elements, and single double-sided aspherical element collectively match the published optical formula.

## Lens Overview

The XF56mmF1.2 R is a fast normal-to-short-telephoto prime designed for Fujifilm's APS-C X-mount mirrorless cameras, yielding an 85 mm full-frame equivalent field of view. It was one of the fastest autofocusing native mirrorless lenses at the time of its release and was widely regarded as a benchmark portrait lens for the X system.

The optical design is a modified Gaussian type: a positive front group (G1) ahead of the aperture stop followed by a positive rear group (G2). The Gaussian heritage is visible in the "two successive positive lenses plus a negative lens with a concave surface toward the image side" structure of G1, but the design departs substantially from a classical Gaussian by placing a cemented doublet and an additional negative meniscus in G1, and by using an aspherical element and a cemented triplet in G2.

### Specifications (Patent Example 3)

| Parameter | Value |
|---|---|
| Effective focal length | 56.99 mm (patent-computed) |
| Marketing focal length | 56 mm |
| Design f-number (Fno) | 1.25 |
| Marketing f-number | f/1.2 |
| Back focus (BF) | 16.53 mm |
| Total angle of view (2ω) | 28.0° |
| Elements / Groups | 11 / 8 |
| Aspherical surfaces | 2 (both surfaces of L21) |
| ED elements | 2 (L12, L13) |
| Filter size | 62 mm |
| Minimum focus distance | 0.7 m |
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
The first of the two ED elements. S-FPL51 is OHARA's flagship fluorophosphate crown glass, characterized by very low dispersion (νd = 81.6) and anomalous partial dispersion (θgF = 0.5375). This element carries a substantial share of G1's positive power while introducing minimal primary and secondary chromatic aberration.

**L13 — Positive Meniscus (convex to object)**
nd = 1.49700, νd = 81.6, θgF = 0.5375. Glass: S-FPL51 (OHARA) — ED glass. f = +139.8 mm.
The second ED element. Paired with L12, it allows the front group to achieve high positive power while keeping both primary and secondary longitudinal chromatic aberration under control. The patent's conditional expressions (3) and (4) specifically require θgF1p − 0.6415 + 0.001618 × νd1p > 0.01 and νd1p > 60, confirming the use of anomalous-dispersion glass in G1 for secondary spectrum correction.

**L14 + L15 — Cemented Doublet D1**
L14: nd = 1.88300, νd = 40.8. Glass: S-LAH66 (OHARA). f = +66.4 mm.
L15: nd = 1.75211, νd = 25.1. Glass: Dense flint (752/251, uncertain). f = −90.4 mm.
This cemented doublet is a weak positive achromatic corrector. L14 uses S-LAH66, a high-index lanthanum glass (nd = 1.883), which provides strong positive power without excessive surface curvatures. L15 is a dense flint glass with very low Abbe number (25.1), creating a large dispersion difference across the cemented interface for chromatic correction.

**L16 — Negative Meniscus (convex to object)**
nd = 1.67300, νd = 38.2. Glass: Flint (673/382, uncertain). f = −29.1 mm.
The strongest single element in G1 and the "negative lens having a concave surface toward the image side" referenced throughout the patent claims. Its concave image-side surface creates a powerful diverging action that balances the combined positive power of L11–L14/L15. L16's strong negative power also contributes significantly to reducing the Petzval sum.

### Aperture Stop

Located in the air space between G1 and G2. The seven-blade rounded diaphragm sits roughly at the midpoint of the optical track, which is typical for Gaussian-derived designs where the stop position is chosen to balance the symmetry of aberration correction between the front and rear groups.

### Group 2 — Rear Group (positive, f ≈ 35.0 mm)

G2 contains five elements in three air-spaced groups: the aspherical singlet L21, the cemented triplet (L22 + L23 + L24), and the positive biconvex L25.

**L21 — Biconcave Negative (double-sided aspherical)**
nd = 1.58313, νd = 59.4. Glass: L-BAL42 (OHARA) — PGM glass (probable). f = −91.1 mm.
The sole aspherical element in the design, with both surfaces carrying aspherical departures (surfaces *13 and *14 in the patent). The "L-" prefix on the OHARA designation indicates a low-softening-temperature glass designed specifically for precision glass molding (PGM). The aspherical sag equation used in the patent includes both odd-order (A3, A5, A7, …) and even-order (A4, A6, A8, …) polynomial coefficients. Because the renderer supports only even-order terms through A14, the visualization uses an approximation; see the data file header for omitted coefficients. Positioned immediately behind the aperture stop, L21 intercepts the marginal ray bundle where the aspherical correction is most effective for spherical aberration.

**L22 + L23 + L24 — Cemented Triplet T1**
L22: nd = 1.88300, νd = 40.8. Glass: S-LAH66 (OHARA). f = +16.6 mm.
L23: nd = 1.66680, νd = 33.0. Glass: S-TIF6 (OHARA). f = −14.0 mm.
L24: nd = 1.88300, νd = 40.8. Glass: S-LAH66 (OHARA). f = +22.7 mm.
The optical heart of the rear group. Its positive/negative/positive structure with all three elements cemented eliminates air-glass interfaces, which is critical at f/1.2 where even small surface reflections can generate visible ghost images and flare. The two positive elements both use S-LAH66 (nd = 1.883), giving the triplet high positive power in a compact package.

**L25 — Symmetric Biconvex Positive**
nd = 1.48749, νd = 70.2. Glass: S-FSL5 (OHARA). f = +297.6 mm.
A weak positive field lens placed at the rear of the optical system. L25 serves primarily to fine-tune the image-side telecentricity. During focusing, L25 is fixed relative to the image plane, acting as a stationary rear element that maintains consistent image-side ray geometry regardless of focus position.

---

## Focusing Mechanism

The patent describes an inner-focusing scheme in which G1 and L25 remain fixed relative to the image plane during focusing from infinity to the minimum object distance of 0.7 m. Focusing is performed by moving the subassembly consisting of L21, L22, L23, and L24 (the aspherical element and the cemented triplet) toward the object side.

Paraxial ray-trace computation gives a required group movement of approximately 6.20 mm for focusing from infinity to 0.7 m. The stop-to-L21 air gap decreases from 11.59 mm (infinity) to 5.39 mm (close focus), while the L24-to-L25 gap increases from 0.90 mm to 7.10 mm. The effective focal length shortens from 56.99 mm at infinity to approximately 53.35 mm at close focus — roughly 6.4% focus breathing, which is typical for inner-focus designs of this era.

---

## Glass Selection and Aberration Correction

The glass map spans a wide range of refractive indices and dispersions, from the anomalous-dispersion fluorophosphate S-FPL51 (nd = 1.497, νd = 81.6) to the high-index lanthanum S-LAH66 (nd = 1.883, νd = 40.8).

**ED glasses (S-FPL51) in the front group** correct secondary longitudinal chromatic aberration. At f/1.2, the longitudinal color spread at the paraxial focus is a dominant image quality limiter; without anomalous-dispersion glasses, the secondary spectrum would produce visible color fringing in high-contrast transitions.

**High-index lanthanum glasses (S-LAH66) in both groups** allow strong positive power with moderate surface curvatures, reducing higher-order spherical aberration and coma. Using three elements of the same glass type (L14, L22, L24) also simplifies manufacturing logistics.

**PGM glass (L-BAL42) for the molded asphere** ensures that the aspherical element can be manufactured economically by precision glass molding rather than expensive single-point diamond turning.

The Petzval sum for the complete lens is 0.00345, corresponding to a Petzval radius of approximately 289 mm. Field flatness is achieved through *astigmatic balancing* — the deliberate introduction of controlled astigmatism that opposes the Petzval curvature. The negative elements L16 (f = −29.1 mm) and L23 (f = −14.0 mm) contribute the most to reducing the Petzval sum.

---

## Summary of Glass Identifications

| Element | nd | νd | Code | Catalog Match | Confidence |
|---|---|---|---|---|---|
| L11 | 1.48749 | 70.2 | 487/702 | S-FSL5 (OHARA) | Exact |
| L12 | 1.49700 | 81.6 | 497/816 | S-FPL51 (OHARA) — ED | Exact |
| L13 | 1.49700 | 81.6 | 497/816 | S-FPL51 (OHARA) — ED | Exact |
| L14 | 1.88300 | 40.8 | 883/408 | S-LAH66 (OHARA) | Exact |
| L15 | 1.75211 | 25.1 | 752/251 | Dense flint (uncertain) | Uncertain |
| L16 | 1.67300 | 38.2 | 673/382 | Flint (uncertain) | Uncertain |
| L21 | 1.58313 | 59.4 | 583/594 | L-BAL42 (OHARA) — PGM | Probable |
| L22 | 1.88300 | 40.8 | 883/408 | S-LAH66 (OHARA) | Exact |
| L23 | 1.66680 | 33.0 | 667/330 | S-TIF6 (OHARA) | Exact |
| L24 | 1.88300 | 40.8 | 883/408 | S-LAH66 (OHARA) | Exact |
| L25 | 1.48749 | 70.2 | 487/702 | S-FSL5 (OHARA) | Exact |
| PP | 1.51680 | 64.2 | 517/642 | S-BSL7 (OHARA) / N-BK7 | Cover glass |
