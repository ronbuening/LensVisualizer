# Sigma 35 mm F1.4 DG HSM | Art — Optical Analysis

## Patent Reference and Design Identification

**Patent:** JP 2014-048488 A (特開2014-48488)  
**Application Number:** 特願2012-191694 (JP 2012-191694)  
**Filed:** 2012-08-31  
**Published:** 2014-03-17  
**Inventor:** Shiota (塩田 了)  
**Applicant:** Sigma Corporation (株式会社シグマ)  
**Title:** Optical System (光学系)  
**Classification:** IPC G02B 13/04; G02B 13/18  
**Worked examples:** 9 numerical examples; 4 claims  
**Embodiment analyzed:** Numerical Example 4 (data ¶0091; construction ¶0054–0057; Fig. 16)

JP 2014-048488 A describes large-aperture retrofocus optical systems for still and video cameras, with emphasis on correcting distortion and the usual wide-angle aberrations over the full focusing range by using an inner-focus mechanism. Among the patent's nine worked examples, **Numerical Example 4** is the closest match to the production Sigma 35 mm F1.4 DG HSM | Art (A012, 2012) and is the embodiment transcribed in the paired data file.

The identification rests on the following convergent evidence.

1. **Construction.** Numerical Example 4 has 13 glass elements in 11 air-spaced groups: five singlets in G1, one singlet plus a cemented doublet in G2, and one cemented doublet plus three singlets in G3. This matches Sigma's published 13-element/11-group construction.
2. **Focal length and field.** The patent gives f = 35.16 mm and full field angle 2ω = 63.79° for Example 4. These values track Sigma's published 35 mm focal-length class and 63.4° angle of view more closely than the adjacent 34.00 mm / 65.49° Numerical Example 3.
3. **Format and aperture.** The image height is Y = 21.60 mm, corresponding to a 43.2 mm image circle for 135 full-frame coverage. The design aperture is F1.45, the design realization of the marketed F1.4 class.
4. **Focus mechanism.** The patent construction for Example 4 places the stop between G2 and G3 and states that, during focus from infinity to near distance, G2 moves toward the object on a trajectory different from G3, while the aperture stop moves with G3. This matches the floating inner-focus arrangement published for the production lens.
5. **Close distance.** The close-focus table gives d0 = 164.0000 mm and keeps the total track near 300 mm, corresponding to the 0.30 m minimum focusing distance class. The paraxial magnification of the patent example is approximately -0.200, while the production specification is 1:5.2; the difference is within the normal spread between a patent embodiment and the final catalog item.
6. **Glass palette.** Example 4 carries one FCD100/FLD-class element and several low-dispersion positive elements, including FCD515-class elements, making it a closer production-color-palette match than Example 3, which contains two FCD100/FLD-class elements.
7. **Stabilization.** Example 4 does not include a decentering image-stabilization group. The patent's stabilization claim is confined to a different configuration, and the production Sigma 35 mm F1.4 DG HSM | Art has no optical stabilizer.

The patent embodiment is therefore not treated as a generic family member. It is used as the best available numerical disclosure for the original DSLR-generation 35 mm F1.4 DG HSM | Art optical formula.

## Optical Architecture

The design is a **large-aperture retrofocus wide-angle lens**. The patent frames the problem explicitly: a single-lens-reflex camera system needs enough back focal distance to clear the mirror box, so a negative front section is used to raise the axial marginal ray and push the principal point rearward. The cost of this asymmetry is increased distortion, lateral color, astigmatism, spherical aberration, and coma, particularly at large aperture. Example 4 addresses that problem with a fixed negative front group and two independently moving positive focusing groups behind it.

The group power sequence is **negative - positive - stop - positive**.

**G1, surfaces 1-10, f = -159.11 mm.** G1 is a fixed five-singlet front group: an aspheric negative meniscus, a biconcave low-dispersion element, a high-index biconvex positive, a biconcave dense flint, and a low-dispersion biconvex positive. It establishes the wide field and long back focus while providing the fixed reference against which the floating groups move.

**G2, surfaces 11-15, f = +68.96 mm.** G2 consists of a high-index biconvex positive singlet followed by a cemented doublet of positive plus negative power. The patent assigns the object-side positive element in G2 the role of bending the axial marginal ray toward the optical axis to contain stop size, while the following positive-negative combination corrects residual aberrations.

**Aperture stop, surface 16.** The stop lies between G2 and G3 and moves with G3 during focusing.

**G3, surfaces 17-25, f = +58.79 mm.** G3 begins with a net-negative cemented doublet, followed by a low-dispersion biconvex positive, an object-side-aspheric biconcave negative, and a high-index rear biconvex positive. The patent's G3 rules require at least two negative and two positive lenses: the negative lenses help preserve back focus, while the split positive power reduces spherical aberration growth and broadens the available glass choices.

The combined G2-G3 block has f = 50.81 mm at infinity. The important architectural choice is that focusing is not assigned to the whole optical system or to a single rear group; instead, G2 and G3 move independently behind the fixed front group. This is the mechanism by which the patent keeps distortion and field aberrations better balanced from infinity to close focus.

## Element-by-Element Analysis

Element focal lengths below are standalone thick-lens values computed in air. Cemented-pair focal lengths are computed as in-air thick assemblies. Radii use the patent sign convention, with positive radius center of curvature to the image side.

### G1 — Fixed Negative Front Group

**L1 — Negative Meniscus, convex to object, aspheric front.**  
nd = 1.58913, νd = 61.25. Glass: M-BACD5N (Hoya). f = -73.9 mm.

L1 is the front retrofocus meniscus and carries the first aspherical surface. It starts the controlled divergence of the entering bundle while keeping the first element within a manageable size. The positive fourth-order aspheric term on surface 1 modifies the peripheral figure of the front surface, reducing the aberration burden that would otherwise be imposed on the downstream focusing groups.

**L2 — Biconcave negative, FLD-class.**  
nd = 1.43700, νd = 95.10. Glass: FCD100 (Hoya), FLD-class. f = -91.9 mm.

L2 is a very-low-dispersion negative element placed early in the retrofocus front group. Its role is to contribute negative power without the strong lateral-color penalty that a normal flint negative element would impose at this position.

**L3 — Biconvex positive.**  
nd = 2.00100, νd = 29.13. Glass: TAFD55 (Hoya). f = +70.7 mm.

This high-index positive element returns part of the front group power balance. The high refractive index allows useful positive power with less surface curvature than a lower-index crown would require, helping restrain Petzval and coma contributions.

**L4 — Biconcave negative.**  
nd = 1.72825, νd = 28.32. Glass: E-FD10 (Hoya). f = -49.2 mm.

L4 is a dense-flint negative element and supplies a stronger negative component than L2. In combination with the surrounding positive elements, it participates in the front group's longitudinal and lateral color balance while preserving the long back-focus character of the design.

**L5 — Biconvex positive, low dispersion.**  
nd = 1.59282, νd = 68.62. Glass: FCD515 (Hoya), SLD-class. f = +51.5 mm.

L5 closes G1 with low-dispersion positive power. Its placement just before the first variable gap helps hand a partially corrected beam to the moving G2 group rather than leaving all chromatic correction to the rear group.

### G2 — Front Floating Focus Group

**L6 — Biconvex positive.**  
nd = 2.00100, νd = 29.13. Glass: TAFD55 (Hoya). f = +48.7 mm.

L6 is the leading positive of G2. The patent explains this positive element as the surface-power tool that bends the axial marginal ray back toward the axis, limiting the aperture stop diameter while maintaining the large aperture.

**L7 + L8 — Cemented doublet, net negative.**  
L7: nd = 1.60625, νd = 63.71. Glass: LBC3N (Hoya). f = +50.4 mm.  
L8: nd = 1.61293, νd = 36.96. Glass: E-F3 (Hoya). f = -34.1 mm.  
Cemented assembly: f = -119.0 mm.

The G2 doublet is positive crown-like glass cemented to a negative flint. Its net power is negative, so it tempers the strong positive action of L6 while correcting the axial color and spherical aberration that would otherwise be left by the leading positive element. This makes G2 positive overall without making it a simple high-power collector.

### G3 — Rear Floating Focus Group

**L9 + L10 — Cemented doublet, net negative; L3A pair.**  
L9: nd = 1.72825, νd = 28.32. Glass: E-FD10 (Hoya). f = -24.0 mm.  
L10: nd = 1.59282, νd = 68.62. Glass: FCD515 (Hoya), SLD-class. f = +70.0 mm.  
Cemented assembly: f = -37.0 mm.

This is the most object-side optical element pair of G3. L9 is the patent's L3A negative element: its object-side surface is concave to the object side, with R3A = -28.6526 mm in Example 4. The cemented low-dispersion positive behind it helps suppress the color introduced by this strong negative power while the pair as a whole remains net negative, preserving back focus.

**L11 — Biconvex positive, low dispersion.**  
nd = 1.59282, νd = 68.62. Glass: FCD515 (Hoya), SLD-class. f = +50.0 mm.

L11 supplies a central share of the G3 positive power. Splitting positive power across L10, L11, and L13 follows the patent's stated design logic: it avoids concentrating rear-group power into one highly curved element, which would increase spherical aberration and reduce glass-selection freedom.

**L12 — Biconcave negative, aspheric front; L3B element.**  
nd = 1.69350, νd = 53.20. Glass: M-LAC130 (Hoya). f = -53.9 mm.

L12 is the second negative element in G3 and carries the second aspherical surface, here on the object-side surface 22. Its surface signs, R22 = -186.5040 mm and R23 = +46.8561 mm, make it biconcave rather than meniscus. Its image-side concave surface, R3B = +46.8561 mm, faces the object-side convex surface of L13 across a very narrow air gap. The patent treats this as an intentional negative air lens, bounded by condition (5).

**L13 — Biconvex rear positive; L3C element.**  
nd = 1.80420, νd = 46.50. Glass: TAF3D (Hoya). f = +29.3 mm.

L13 is the final strong positive element. Its high index lets the rear group close the beam over the required SLR back focus without excessive curvature. In Example 4, unlike Example 3, the final surface is spherical; the second asphere is on L12 rather than on the rearmost surface.

## Glass Identification and Selection

The glass assignments were rechecked against Hoya's published current-plus-obsolete ZEMAX AGF catalog. All listed matches reproduce the patent nd values directly, with only the expected last-digit Abbe-number rounding in L7. This review therefore uses Hoya nomenclature rather than generic six-digit glass codes. The 593/686 low-dispersion elements are labeled FCD515 because it matches the patent Abbe value directly; FCD505 is retained only as a near-equivalent catalog note.

| Element(s) | Patent nd / νd | Catalog match | Optical role |
|---|---:|---|---|
| L1 | 1.58913 / 61.25 | M-BACD5N (Hoya) | Moldable dense barium crown for the aspheric front meniscus |
| L2 | 1.43700 / 95.10 | FCD100 (Hoya) | FLD-class very-low-dispersion negative element |
| L3, L6 | 2.00100 / 29.13 | TAFD55 (Hoya) | High-index positive elements in G1 and G2 |
| L4, L9 | 1.72825 / 28.32 | E-FD10 (Hoya) | Dense-flint negative elements |
| L5, L10, L11 | 1.59282 / 68.62 | FCD515 (Hoya); FCD505 is a near-equivalent older catalog type | Low-dispersion positive elements |
| L7 | 1.60625 / 63.71 | LBC3N (Hoya) | Low-dispersion positive component of the G2 cemented doublet |
| L8 | 1.61293 / 36.96 | E-F3 (Hoya) | Flint component of the G2 cemented doublet |
| L12 | 1.69350 / 53.20 | M-LAC130 (Hoya) | Moldable lanthanum crown for the rear-group aspheric meniscus |
| L13 | 1.80420 / 46.50 | TAF3D (Hoya) | High-index rear positive element |

The main chromatic strategy is straightforward: very-low-dispersion glass is placed in the fixed front negative group, and low-dispersion positive elements are distributed through the front and rear groups. The most important cemented color-correction sites are L7/L8 in G2 and L9/L10 in G3. This is a closer match to Sigma's published one-FLD-plus-SLD description than Example 3, because Example 4 has a single FCD100-class element instead of two.

## Focus Mechanism

The design uses **floating inner focus**. From infinity to the near setting, G1 stays fixed, G2 advances toward the object, and G3 advances farther toward the object; the stop travels with G3. The image plane remains fixed, so the back focal distance increases by the same amount as the G3 displacement.

| Spacing | Infinity | Close setting | Change |
|---|---:|---:|---:|
| d10, G1 to G2 | 7.5458 mm | 1.0000 mm | -6.5458 mm |
| d15, G2 to G3 | 6.7163 mm | 5.4213 mm | -1.2950 mm |
| BF, L13 to image | 39.2050 mm | 47.0458 mm | +7.8408 mm |

These spacings imply a 6.55 mm object-ward travel for G2 and a 7.84 mm object-ward travel for G3 and the stop. At the close setting the published d0 = 164.0000 mm and the close-focus optical track sum to 300.005 mm, effectively the 0.30 m minimum-focus specification. The paraxial close-focus magnification of the patent prescription is -0.1996, about 1:5.0; Sigma's production specification is 1:5.2. The discrepancy is small but real, and is recorded rather than forced into agreement.

## Aspherical Surfaces

Example 4 has two aspherical surfaces: surface 1 on L1 and surface 22 on L12. The patent gives the standard even-order aspheric sag equation with conic constant K:

$$
z = \frac{(1/r)y^2}{1 + \sqrt{1 - (1 + K)(y/r)^2}} + A_4 y^4 + A_6 y^6 + A_8 y^8 + A_{10} y^{10} + A_{12} y^{12}.
$$

In this convention, K = 0 is a spherical base surface. Both Example 4 aspheres have K = 0; they are polynomial departures from spherical bases.

| Coefficient | Surface 1, L1 front, R = +51.8624 | Surface 22, L12 front, R = -186.5040 |
|---|---:|---:|
| K | 0.0000 | 0.0000 |
| A4 | +1.81501E-06 | -8.88489E-06 |
| A6 | +1.05655E-09 | -1.53763E-09 |
| A8 | -1.63693E-14 | +2.41639E-12 |
| A10 | 0.00000E+00 | 0.00000E+00 |
| A12 | 0.00000E+00 | 0.00000E+00 |

The front asphere is used at the high-leverage entrance to the retrofocus system. The rear-group asphere on L12 works near the converging rear bundle and the L12/L13 air lens, where it is well placed to trim off-axis aberrations without making the final element aspherical.

At the inferred semi-diameters used in the data file, the polynomial departure from the spherical base is +0.443 mm on surface 1 at h = 21.0 mm and -0.762 mm on surface 22 at h = 17.0 mm. Thus the front asphere moves the rim image-ward relative to the spherical base, while the L12 asphere moves the rim object-ward relative to its negative-radius base surface.

## Conditional Expressions

The patent states eight conditional expressions and gives correspondence values for each example. Recalculation from the Example 4 prescription reproduces the patent values to the displayed precision.

| # | Condition | Patent Example 4 value | Recomputed |
|---|---|---:|---:|
| (1) | νd3ap > 54.0 | 61.25 | 61.25 |
| (2) | 1.70 < nd2ap < 1.85 | 1.804 | 1.8036 |
| (3) | nd3am < 1.75 | 1.71 | 1.7109 |
| (4) | 1.5 < |f23/R3A| < 2.5 | -1.77 | -1.773 signed; 1.773 absolute |
| (5) | 0.0 < f23(1/R3B - 1/R3C) < 0.8 | 0.092 | 0.0921 |
| (6) | -0.30 < f/f1 < 0.20 | -0.22 | -0.2210 |
| (7) | 0.10 < f23/f2 < 0.75 | 0.74 | 0.7368 |
| (8) | 0.80 < f23/f3 < 1.20 | 0.86 | 0.8643 |

For condition (4), the inequality is written with an absolute value but the patent correspondence table reports the signed ratio. The data above therefore lists both the signed recomputation and the absolute value relevant to the inequality.

The definitions used are: νd3ap is the mean Abbe number of positive G3 elements L10, L11, and L13; nd2ap is the mean index of positive G2 elements L6 and L7; nd3am is the mean index of negative G3 elements L9 and L12; f23 is the combined focal length of G2 and G3 at infinity; R3A is the object-side radius of L9; R3B is the image-side radius of L12; and R3C is the object-side radius of L13.

## Air Lenses

Claim 2 and condition (5) treat the air space between L12 and L13 as a shaped negative air lens. In Example 4, R3B = +46.8561 mm and R3C = +51.2040 mm, giving f23(1/R3B - 1/R3C) = 0.0921. This is near the lower end of the allowed 0.0 to 0.8 interval, so the air lens is weaker than in Example 3, but it still has the required sign and geometry.

The patent's rationale is that this rear-group air lens corrects positive distortion and astigmatism generated in G2 without placing that correction entirely in the fixed front group. That matters because G2 and G3 move during focusing; a correction placed in the moving rear structure better preserves the distortion balance over the focusing range.

## Verification Summary

All load-bearing numerical claims in this analysis were rederived from the Example 4 prescription using paraxial y-nu tracing and ABCD matrix checks.

| Quantity | Patent Example 4 | Independent computation |
|---|---:|---:|
| EFL at infinity | 35.16 mm | 35.1594 mm |
| Back focal distance at infinity | 39.2050 mm | 39.2059 mm |
| G1 focal length | -159.11 mm | -159.11 mm |
| G2 focal length | +68.96 mm | +68.96 mm |
| G3 focal length | +58.79 mm | +58.79 mm |
| G2-G3 combined focal length | +50.81 mm | +50.81 mm |
| Close object-to-image distance | 300 mm class | 300.005 mm |
| Close paraxial magnification | not tabulated | -0.1996, about 1:5.0 |

The surface-by-surface Petzval sum, using Σφ/(n n′) with φ = (n′ - n)/R, is +0.00296 mm^-1, corresponding to a Petzval radius of about +338 mm and fP ≈ 0.104. The patent does not tabulate this value. The entrance-pupil calculation for F1.45 gives a stop semi-diameter of about 14.10 mm, which is used in the data file. Because the patent omits clear apertures, semi-diameters in the paired data file are inferred and conservatively sized to preserve positive edge thickness and cross-gap clearance rather than to claim a full unvignetted field.

## Design Heritage and Context

The Sigma 35 mm F1.4 DG HSM | Art was the first lens in Sigma's Global Vision Art line. Optically, it is a conventional SLR retrofocus wide-angle in the older sense: a negative front structure supplies the back-focus clearance, and a more complex rear positive structure corrects the aberrations created by that asymmetry. Its more modern feature is not the retrofocus principle itself, but the floating inner-focus implementation that splits the rear focusing motion across G2 and G3.

This analysis concerns the original HSM optical formula disclosed in JP 2014-048488 A. It does not describe the later mirrorless 35 mm F1.4 DG DN | Art, which is a separate optical design.

## Sources and References

- JP 2014-048488 A (特開2014-48488), Sigma Corporation; inventor Shiota (塩田 了); filed 2012-08-31, published 2014-03-17. Numerical Example 4 prescription and variable-focus data at ¶0091; construction text at ¶0054-¶0057; conditional table at ¶0097.
- Sigma Corporation, official 35mm F1.4 DG HSM | Art product specification page: 13 elements in 11 groups; 63.4° angle of view; full-frame DG format; 30 cm minimum focus; 1:5.2 maximum magnification; 67 mm filter; nine rounded blades; HSM; floating system.
- HOYA Group Optics Division, Optical Glass Data Download, ZEMAX AGF current and obsolete catalogs, updated 2026-06-01. Used for glass-name cross-reference against the patent nd/νd values.
