# Sony FE 16-35mm f/2.8 GM II — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** WO 2024/135126 A1  
**Application Number:** PCT/JP2023/040022  
**Priority:** JP 2022-203548, filed 20 December 2022  
**Filed:** 7 November 2023  
**Published:** 27 June 2024  
**Inventors:** Kikuchi Shohei, Uemura Kohei, Nishi Yurina  
**Applicant:** Sony Group Corporation  
**Title:** Zoom Lens and Imaging Device  
**Embodiment analyzed:** Example 1, Figure 1, Tables 1-5 and Table 32

Example 1 is the closest patent prescription for the production Sony FE 16-35mm f/2.8 GM II (SEL1635GM2). The match is based on convergent structural and numerical evidence rather than on a single isolated specification.

1. The production lens is specified by Sony as a 16-35 mm F2.8 full-frame E-mount zoom with 15 elements in 12 groups. Example 1 contains 15 glass elements in 12 air-separated groups, arranged into six zoom groups.
2. The patent design computes to f = 16.49, 24.03, and 33.96 mm at the wide, middle, and telephoto positions. The patent Table 2 values are f = 16.49, 24.02, and 33.95 mm, which correspond to the production 16-35 mm range after ordinary marketing rounding.
3. The image height is Y = 21.63 mm, the half-diagonal of the 35 mm full-frame format.
4. The prescription contains nine aspherical surfaces on five physical elements, including the rear aspherical lens GA (L63). Sony describes the production lens as using XA and ED glass elements, and the patent's special-element distribution is consistent with that optical architecture.
5. The patent identifies G4 as the focus lens group and G5 as the floating lens group. Sony's product literature describes four XD Linear Motors for fast, precise autofocus, consistent with independently driven focus units.
6. The patent's close-focus worked state is a shooting distance of 247 mm. Sony's production specification gives a shorter minimum focus distance of 0.22 m and a maximum magnification of 0.32x. The difference is a production-performance difference, not a structural mismatch.

The numerical prescription was checked against the complete WIPO publication of WO 2024/135126 A1 before the final data file and this analysis were prepared.

## Optical Architecture

The design is a negative-lead full-frame wide-angle zoom. It is retrofocus-derived at the wide end, where the back focal distance is slightly longer than the system focal length, but the design should be described more precisely as a six-group negative-positive-positive-positive-negative-positive zoom rather than simply as a generic retrofocus lens.

| Zoom group | Elements | Computed group focal length | Power | Function |
|---|---:|---:|---|---|
| G1 | L11-L14 | -23.15 mm | Negative | Front wide-angle group; distortion, lateral color, and field-angle management. |
| G2 | L21-L22 | +114.19 mm | Positive | Cemented converging group ahead of the stop. |
| G3 | L31 | +123.82 mm | Positive | Weak post-stop aspherical corrector; moves with G6 during zooming. |
| G4 | L41-L43 | +30.57 mm | Positive | Primary focus lens group. |
| G5 | L51-L52 | -34.46 mm | Negative | Floating focus group. |
| G6 | L61-L63 | +86.07 mm | Positive | Rear relay and field-correcting group; contains aspherical lens GA. |

The aperture stop is placed between G2 and G3. During zooming, all six group separations change, but the patent states that G3 and G6 move together as part of the final lens-group assembly. The group-power distribution leaves most of the severe wide-angle correction to G1 and L63, while the moving focus groups G4 and G5 handle close-distance aberration balance.

The total optical length in Table 2 decreases from about 135.29 mm at the wide end to about 127.43 mm at the telephoto end. The independently recomputed totals from the rounded prescription are 135.28 mm, 129.10 mm, and 127.43 mm for the wide, middle, and telephoto positions, respectively.

## Element-by-Element Analysis

The element focal lengths below are standalone in-air focal lengths computed from each element's two physical radii and center thickness. For cemented elements, these values describe the element considered separately in air; the in-situ contribution inside the cemented doublet differs because the cemented interface does not refract into air.

### L11 — Negative Meniscus, Two Aspherical Surfaces

nd = 1.58313, νd = 59.5. Glass: M-BACD12 (Hoya) / S-BAL42 (Ohara) class. f = -37.8 mm.

L11 is the front negative meniscus and the first large aspherical element. Its convex object-side surface and strongly shaped rear surface begin the wide-angle expansion required for the 16 mm end. The rear surface has k = -1.01161, close to a paraboloidal base, which reduces high-zone spherical and distortion residuals at the large front aperture.

### L12 — Negative Meniscus, Two Aspherical Surfaces

nd = 1.76802, νd = 49.2. Glass: M-TAF101 (Hoya). f = -69.5 mm.

L12 is the second negative aspherical member of G1. Its higher index allows stronger correction at a smaller diameter than L11. By conventional Abbe-number terminology this glass lies just on the flint side of the crown/flint boundary; calling it simply a lanthanum crown would be imprecise.

### L13 — Biconcave Negative Super-ED Element

nd = 1.43700, νd = 95.1. Glass: FCD100 (Hoya), Super-ED fluorophosphate class. f = -65.2 mm.

L13 is the front-group low-dispersion negative element. Its very high Abbe number gives G1 a strong chromatic correction lever without requiring a large positive ED element in the most diameter-sensitive portion of the lens. Its nearly symmetric biconcave form limits the element's own off-axis aberration contribution.

### L14 — Positive Meniscus

nd = 1.90366, νd = 31.3. Glass: S-LAH95 (Ohara) / TAFD25 (Hoya). f = +60.3 mm.

L14 closes G1 and partially recollimates the diverging bundle before the long d8 air space to G2. Its high index permits the required positive power with relatively moderate curvature. It is the dense positive partner to the low-index L13, giving the front group a compact achromatizing structure.

### L21-L22 — G2 Cemented Positive Group

L21: nd = 1.91082, νd = 35.2. Glass: TAFD35 (Hoya). Standalone f = -52.6 mm.  
L22: nd = 1.65412, νd = 39.7. Glass: S-NBH5 (Ohara) / E-ADF50 (Hoya). Standalone f = +34.0 mm.

The G2 cemented doublet has net positive power, but its front element is a negative meniscus. The small Abbe-number separation between L21 and L22 means this doublet is not a classic large-Δν achromat; its principal job is to bend the strongly negative G1 output toward the stop while controlling spherical aberration, coma, and Petzval curvature in a compact cemented unit.

### L31 — Positive Meniscus, Two Aspherical Surfaces

nd = 1.58313, νd = 59.5. Glass: M-BACD12 (Hoya) / S-BAL42 (Ohara) class. f = +123.8 mm.

L31 is the only element in G3 and sits immediately after the stop. Its power is weak, but both surfaces are aspherical. This is the correct location for trimming residual spherical aberration and coma from the front groups because the beam is narrower than in G1 but still strongly conditioned by the stop.

### L41-L43 — Positive Focus Group G4

L41: nd = 2.00069, νd = 25.5. Glass: TAFD40 (Hoya). Standalone f = -50.9 mm.  
L42: nd = 1.49700, νd = 81.6. Glass: S-FPL51 (Ohara) / FCD1 (Hoya), ED fluorophosphate. Standalone f = +33.4 mm.  
L43: nd = 1.49700, νd = 81.5. Glass: S-FPL51 / FCD1 class, ED fluorophosphate. Standalone f = +41.4 mm.

G4 is the primary positive focus group. L41 and L42 form a cemented negative-positive doublet with a large refractive-index and dispersion contrast. L43 is a separate positive ED aspherical element. This three-element layout lets G4 provide high focus sensitivity while limiting chromatic focus shift during autofocus travel.

### L51-L52 — Negative Floating Group G5

L51: nd = 1.92286, νd = 20.9. Glass: E-FDS1 / M-FDS1 (Hoya). Standalone f = +28.6 mm.  
L52: nd = 1.91082, νd = 35.2. Glass: TAFD35 (Hoya). Standalone f = -15.4 mm.

G5 is the negative floating group. The doublet's net focal length is -34.46 mm even though L51 is strongly positive, because L52 has very strong negative power. This arrangement provides a compact negative floating unit whose axial movement can counteract field-angle variation and close-focus aberration changes produced by G4.

### L61-L63 — Rear Relay and Aspherical Field Corrector

L61: nd = 1.59282, νd = 68.6. Glass: FCD505 / FCD515 (Hoya). Standalone f = +32.2 mm.  
L62: nd = 2.00100, νd = 29.1. Glass: S-LAH99 / S-LAH99W (Ohara) / TAFD55 (Hoya). Standalone f = -58.6 mm.  
L63: nd = 1.85135, νd = 40.1. Glass: M-TAFD305 (Hoya). Standalone f = -164.9 mm.

G6 is a positive rear group, but it contains both a strong positive relay element and two negative correcting elements. L61 provides most of the local positive power. L62 is a high-index negative meniscus that contributes field flattening and rear-group chromatic balance. L63 is the patent's aspherical lens GA, positioned close to the image plane so that its aspherical departure has strong leverage over astigmatism, coma, and field curvature near the edge of the full-frame image circle.

## Glass Identification and Selection

The prior analysis assigned several glasses to adjacent but incorrect catalog families. The corrected assignments below are based on direct nd/νd matching against Hoya and Ohara catalog data. Where two vendors publish essentially equivalent catalog entries, both are listed. Where the exact match is Hoya-only in the checked catalogs, the Hoya glass is used rather than forcing an Ohara name.

| Element(s) | nd | νd | Corrected catalog identification | Notes |
|---|---:|---:|---|---|
| L11, L31 | 1.58313 | 59.5 | M-BACD12 (Hoya) / S-BAL42 (Ohara) | Replaces the incorrect M-BACD5N-class assignment. |
| L12 | 1.76802 | 49.2 | M-TAF101 (Hoya) | High-index glass near the crown/flint boundary. |
| L13 | 1.43700 | 95.1 | FCD100 (Hoya) | Super-ED fluorophosphate class. |
| L14 | 1.90366 | 31.3 | S-LAH95 (Ohara) / TAFD25 (Hoya) | Replaces the incorrect S-NBH56 assignment. |
| L21, L52 | 1.91082 | 35.2 | TAFD35 (Hoya) | Replaces the incorrect S-LAH79 assignment. |
| L22 | 1.65412 | 39.7 | S-NBH5 (Ohara) / E-ADF50 (Hoya) | Titanium/niobium flint family. |
| L41 | 2.00069 | 25.5 | TAFD40 (Hoya) | Not S-NPH2; the Abbe number differs substantially. |
| L42, L43 | 1.49700 | 81.5-81.6 | S-FPL51 (Ohara) / FCD1 (Hoya) | ED fluorophosphate. |
| L51 | 1.92286 | 20.9 | E-FDS1 / M-FDS1 (Hoya) | Ultra-high-dispersion dense flint. |
| L61 | 1.59282 | 68.6 | FCD505 / FCD515 (Hoya) | Low-dispersion FCD glass; marketing ED status is inferred, not proven by the patent. |
| L62 | 2.00100 | 29.1 | S-LAH99 / S-LAH99W (Ohara) / TAFD55 (Hoya) | Ultra-high-index dense lanthanum glass. |
| L63 | 1.85135 | 40.1 | M-TAFD305 (Hoya) | Moldable high-index glass appropriate for precision aspheric manufacture. |

The chromatic strategy is distributed. L13 handles much of the wide-field lateral color in G1. L42 and L43 provide low-dispersion positive power in the moving focus group. L61 is a low-dispersion Hoya FCD glass but has νd = 68.6, so the production marketing classification of the second non-aspherical ED element cannot be assigned from the patent data alone with the same confidence as L13, L42, and L43.

## Focus Mechanism

The patent uses a dual floating focus mechanism. G4 is the focus lens group and G5 is the floating lens group. During zooming, G3 moves together with G6; during focusing, G4 and G5 move on different trajectories while the rear final group remains fixed relative to the image side.

| Variable gap | Wide infinity | Wide close | Mid infinity | Mid close | Tele infinity | Tele close |
|---|---:|---:|---:|---:|---:|---:|
| d14, G3-G4 | 8.40 | 7.76 | 4.89 | 4.88 | 2.55 | 3.23 |
| d19, G4-G5 | 2.81 | 3.81 | 2.95 | 4.59 | 5.10 | 7.69 |
| d22, G5-G6 | 3.63 | 3.27 | 6.99 | 5.37 | 7.19 | 3.92 |

At the wide end, focusing from infinity to the patent close state moves G4 objectward and G5 imageward. At the telephoto end, both G4 and G5 move imageward, but by different amounts. This reversal is not an error; the patent explicitly presents it as part of the strategy for reducing focus-breathing and close-focus aberration variation.

The patent close state is a shooting distance of 247 mm. The production lens is specified by Sony at 0.22 m minimum focus distance and 0.32x maximum magnification, so the data file uses Sony's production MFD for metadata while retaining the patent close-state spacings in the variable-gap table.

## Aspherical Surfaces

The design has nine aspherical surfaces: 1, 2, 3, 4, 13, 14, 18, 27, and 28. The data file labels these as 1A, 2A, 3A, 4A, 13A, 14A, 18A, 27A, and 28A. The patent uses the standard conic-plus-even-polynomial sag equation:

$$
x = \frac{c y^2}{1 + \sqrt{1 - (1+k)c^2y^2}} + A_4y^4 + A_6y^6 + A_8y^8 + A_{10}y^{10} + A_{12}y^{12} + A_{14}y^{14} + A_{16}y^{16} + A_{18}y^{18}.
$$

Here $c = 1/R$, and the tabulated $k$ is the standard conic constant. No Japanese κ-to-K conversion is required for this patent.

| Surface | Element | k | A4 | A6 | A8 | Highest term | Main role |
|---|---|---:|---:|---:|---:|---|---|
| 1A | L11 front | 0 | +2.33013E-07 | +1.40372E-08 | -4.43290E-11 | A18 | Front wide-angle distortion and pupil control. |
| 2A | L11 rear | -1.01161 | +8.56396E-06 | +3.28418E-09 | +1.84397E-10 | A16 | Strong rear-surface wide-angle correction. |
| 3A | L12 front | 0 | -4.65995E-05 | +2.53689E-07 | -6.83848E-10 | A18 | Front-group astigmatism and distortion correction. |
| 4A | L12 rear | 0 | -4.36585E-05 | +2.88432E-07 | -8.48284E-10 | A18 | Companion correction to surface 3A. |
| 13A | L31 front | 0 | -3.10839E-05 | -2.79104E-08 | +9.00233E-11 | A16 | Post-stop spherical and coma trimming. |
| 14A | L31 rear | 0 | -2.77954E-05 | +1.68026E-08 | -6.62573E-10 | A16 | Post-stop correction paired with 13A. |
| 18A | L43 front | 0 | -1.35447E-05 | +1.01706E-08 | +4.83919E-11 | A12 | Focus-group zonal spherical correction. |
| 27A | L63 front | +1.24589 | -1.32789E-04 | -1.16229E-07 | +5.04351E-10 | A18 | Aspherical lens GA field correction. |
| 28A | L63 rear | 0 | -1.30899E-04 | -6.60052E-08 | +2.13339E-09 | A18 | Rear field, coma, and astigmatism correction. |

Surface 27A has a positive conic constant. The conic-limit check gives a usable mathematical semi-diameter of 16.28 mm, and the patent-listed clear semi-diameter is 12.905 mm, so the surface stays safely inside the conic discriminant limit.

## Conditional Expressions

The patent's Table 32 gives the following Example 1 values. Arithmetic expressions based on group focal length, glass data, wide-end focal length, and minimum total optical length were independently recomputed from the prescription and agree with the table after rounding.

| Expression | Formula | Patent range | Example 1 value |
|---|---|---:|---:|
| (1) | \|f1 / fFmax\| | 0.50-1.35 | 0.672 |
| (2) | \|fF1 / fF2\| | 0.77-1.23 | 0.887 |
| (3) | xm / Dga | 0.01-0.50 | 0.018 |
| (4) | n | >= 2 | 2 |
| (5) | 0.0024 × Vga + Nga | 1.644-2.400 | 1.948 |
| (6) | 0.0093 × Vga + Nga | 1.893-3.000 | 2.224 |
| (7) | Lexp / Lgaf | 0.3-50.0 | 1.887 |
| (8) | \|f1 / oalmin\| | 0.1-0.5 | 0.182 |
| (9) | \|f1 / fw\| | 1.0-3.0 | 1.404 |

Conditions (1), (2), (8), and (9) constrain the power and overall-length balance of the negative front group relative to the focusing groups and the wide-end focal length. Conditions (3)-(7) define the rear aspherical lens GA, including the form of its sag variation, its glass index and Abbe number, and its placement relative to the image plane and exit pupil.

## Verification Summary

A separate paraxial y-u ray trace was run from the transcribed prescription. The system focal lengths computed from the rounded table are 16.4929 mm, 24.0278 mm, and 33.9599 mm, matching Table 2's 16.49 mm, 24.02 mm, and 33.95 mm values. Back focal distances computed from the last surface are 17.32 mm, 25.04 mm, and 33.05 mm, matching the d28 variable spacing values to within the rounding expected from the published prescription.

The six group focal lengths recompute to -23.151 mm, +114.192 mm, +123.816 mm, +30.566 mm, -34.457 mm, and +86.074 mm. These reproduce Table 5 within 0.02 mm. The Petzval sum computed surface-by-surface as $\sum \phi/(nn')$ is +0.002155 mm^-1, corresponding to an equivalent Petzval radius of about -464 mm. This value is reported only as a paraxial curvature diagnostic; it is not a direct prediction of rendered field shape because the design uses strong aspherical correction.

The data file transcribes the patent's clear-aperture diameters as semi-diameters. For the aperture stop, the Table 1 diameter is a clear-aperture value, not a proof that the lens is operated at that full mechanical opening at all zoom positions. The design F-number remains the patent-stated Fno = 2.91, while the production metadata uses Sony's marketed F2.8 value.

## Sources

1. WO 2024/135126 A1, "Zoom Lens and Imaging Device," Sony Group Corporation, published 27 June 2024. Numerical Example 1, Tables 1-5; Table 32.
2. Sony Support, SEL1635GM2 official specifications: focal length, aperture, format, MFD, maximum magnification, groups/elements, dimensions, and weight.
3. Sony SEL1635GM2 product page: XA/ED element positioning at the marketing level and four XD Linear Motor description.
4. Hoya Optical Glass Catalog Data, 2015: M-BACD12, M-TAF101, FCD100, TAFD25, TAFD35, E-ADF50, TAFD40, FCD1, E-FDS1/M-FDS1, FCD505/FCD515, TAFD55, and M-TAFD305 catalog matches.
5. Ohara Optical Glass Catalog Data, 2024: S-BAL42, S-LAH95, S-NBH5, S-FPL51, S-LAH99/S-LAH99W equivalences.
