# Panasonic Leica DG Summilux 12mm F1.4 ASPH — Optical Analysis

## Patent Reference and Design Identification

**Patent:** JP 2017-167327 A  
**Application number:** 特願2016-52355  
**Filed:** 16 March 2016  
**Published:** 21 September 2017  
**Inventor:** Masakazu Hibino (日比野 正和)  
**Applicant:** Sigma Corporation (株式会社シグマ)  
**Title:** Inner-Focus Optical System (インナーフォーカス光学系)  
**Embodiment analyzed:** Numerical Example 1 (数値実施例1)

The prescription transcribed here is Numerical Example 1 of JP 2017-167327 A. The patent is a Sigma filing, not a Panasonic filing: the applicant and inventor fields identify Sigma Corporation and Masakazu Hibino. The production lens is the Panasonic LUMIX G LEICA DG SUMMILUX 12 mm F1.4 ASPH. (H-X012). Panasonic does not publish a patent-to-product confirmation, so the identification remains an evidence-based match rather than a manufacturer-stated fact.

The match is strong. Panasonic's official specification gives a 12 mm Micro Four Thirds lens with 15 elements in 12 groups, two aspherical lenses, one ED lens, two UED lenses, F1.4 maximum aperture, 0.20 m closest focusing distance, approximately 0.1× maximum magnification, a 62 mm filter thread, and no optical image stabilizer. Example 1 reproduces the 15/12 construction, the two aspherical surfaces, two νd = 95.10 fluorophosphate elements, one νd = 75.50 ED-class fluorophosphate element, f = 11.98 mm at infinity, Fno = 1.45 in the design table, Y = 10.82 mm image height, and a 0.20 m close-focus state.

Example 1 is preferred over the other examples for three reasons. Examples 2 and 4 are 14-element, 11-group designs, so they do not match Panasonic's 15/12 specification. Example 3 has the same 15/12 count and two νd ≈ 95 elements, but it does not contain a separate νd ≈ 75 ED-class element; its remaining low-dispersion focus element is FC5-class glass at νd = 70.45. Example 1 alone maps cleanly to Panasonic's published special-element count of two aspherical, two UED, and one ED elements.

Manufacturer-published hard specifications are used for the product fields. The data file therefore records `focalLengthMarketing: 12`, `apertureMarketing: 1.4`, `closeFocusM: 0.20`, `lensMounts: ["micro-four-thirds"]`, and `imageFormat: "four-thirds"`. The patent design values are retained separately as f = 11.9795 mm and Fno = 1.45. The patent's `2ω = 89.28°` table entry is not used as the production angle-of-view metadata; Panasonic publishes an 84° diagonal angle of view, which is also the value expected for a 12 mm rectilinear Micro Four Thirds lens.

## Optical Architecture

The lens is a fixed-focal-length, large-aperture retrofocus wide-angle for Micro Four Thirds. The group-power sequence is negative-positive-positive-weak positive:

| Group | Patent surfaces | Elements | Computed focal length | Function |
|---|---:|---:|---:|---|
| G1 | 1-12 | L1-L6 | -12.900 mm | retrofocus front group; chief-ray moderation before the stop |
| Stop | 13 | — | — | aperture stop after the first group |
| G2 | 14-22 | L7-L11 | +20.244 mm | main positive imaging group and aspherical correction |
| G3 | 23-24 | L12 | +71.381 mm | single-element inner-focus group |
| G4 | 25-29 | L13-L15 | +386.220 mm | weak rear color-correction / field group |

The patent explains the layout in terms of wobbling autofocus. G1 reduces the angle of the off-axis chief ray before the aperture stop, and G2 further moderates the ray angle before it reaches the focus group. This allows G3 to have relatively weak positive power and low mass while keeping focus-breathing and image-height variation small during high-frequency focus wobbling (¶0019-¶0026). G4 is weak in power but optically useful because the off-axis chief-ray height is large there; the patent specifically assigns it a role in correcting lateral chromatic aberration caused by the asymmetric power distribution around the stop (¶0045).

The optical filter plate listed at patent surfaces 30-31 is not part of the production element count. In the `.data.ts` file it is excluded per project convention, and its optical path is folded into the final air-equivalent back distance. The patent physical distance from surface 29 to the image is 11.9400 + 4.2000 + 0.9999 = 17.1399 mm; the folded air-equivalent distance used in the data file is 11.9400 + 4.2000 / 1.51680 + 0.9999 = 15.7089 mm.

## Element-by-Element Analysis

### L1 — Positive Meniscus, Convex to Object

nd = 1.51680, νd = 64.20. Glass: BSC7 (Hoya exact catalog equivalent). f = +208.4 mm.

L1 is a weak positive crown meniscus placed ahead of the strong negative wide-angle section. Its low power and large diameter help admit the fast F1.4 bundle without putting the strongest negative curvature at the very front of the lens. The patent's prose identifies it as a positive meniscus convex to the object (¶0067), matching the radius signs.

### L2 — Negative Meniscus, Convex to Object

nd = 1.70154, νd = 41.15. Glass: BAFD7 (Hoya exact catalog equivalent). f = -28.9 mm.

L2 is the first substantial retrofocus element. Its high index allows strong negative bending in a comparatively compact axial thickness. The front surface's effective diameter is larger than the rear effective diameter in the patent table, consistent with the rapidly converging clear-aperture envelope in the front group. Its role is chiefly geometric: it creates the long back-focus condition required by the sensor package while controlling distortion before the stop.

### L3 — Aspherical Negative Meniscus, Convex to Object

nd = 1.58913, νd = 61.25. Glass: M-BACD5N (Hoya exact catalog equivalent; moldable crown). f = -46.2 mm.

L3 carries the first aspherical surface, on its object-side face. It continues the negative retrofocus action but uses a moderate-index, moldable barium crown rather than a dense flint. The asphere is positioned where marginal-ray heights are still large enough to influence spherical aberration and coma from the fast F1.4 aperture.

### L4-L5 — Cemented Pair in G1

L4: nd = 1.43700, νd = 95.10. Glass: FCD100 (Hoya exact catalog equivalent; UED-class fluorophosphate). f = -37.9 mm.  
L5: nd = 1.80610, νd = 33.27. Glass: NBFD15 (Hoya exact catalog equivalent). f = +40.7 mm.  
Cemented pair focal length: approximately -1001.9 mm in air.

This nearly afocal cemented pair is not a power generator. Its importance lies in the buried high-curvature interface between an extreme low-dispersion fluorophosphate and a high-index dense flint. The pair supplies chromatic correction in the negative front group without substantially changing the group focal length. L4 is one of the two elements corresponding to Panasonic's UED count.

### L6 — Negative Meniscus, Concave to Object

nd = 1.60342, νd = 38.01. Glass: E-F5 (Hoya exact catalog equivalent). f = -79.9 mm.

L6 closes G1 just before the aperture stop. Its negative meniscus shape, concave to the object side, helps tune the exit angle of the off-axis chief ray from the negative front group. This placement is directly tied to the patent's objective of reducing chief-ray height variation at the moving focus group (¶0020-¶0026).

### L7 — Biconvex Positive

nd = 1.83481, νd = 42.72. Glass: TAFD5F / TAFD5G class (Hoya exact catalog equivalent). f = +23.9 mm.

L7 is the first element of the positive second group and supplies much of the converging power immediately after the stop. The high index allows strong positive power while keeping curvatures within manufacturable limits for a fast wide-angle lens.

### L8 — Negative Meniscus, Concave to Object

nd = 1.74077, νd = 27.76. Glass: E-FD13 (Hoya exact catalog equivalent). f = -95.1 mm.

L8 is a dense-flint negative corrector in G2. It moderates the positive power introduced by L7 and helps balance spherical aberration and astigmatism across the large field.

### L9-L10 — Cemented Positive Achromat in G2

L9: nd = 1.43700, νd = 95.10. Glass: FCD100 (Hoya exact catalog equivalent; UED-class fluorophosphate). f = +31.2 mm.  
L10: nd = 1.90366, νd = 31.32. Glass: TAFD25 (Hoya exact catalog equivalent). f = -61.5 mm.  
Cemented pair focal length: approximately +62.5 mm in air.

This cemented pair is a positive chromatic-correction unit. L9 is the second νd = 95.10 UED-class element, and L10 is a very high-index dense partner. The pair is placed in the main positive group, where axial color and secondary spectrum can be corrected without forcing the moving focus element to carry excessive chromatic burden.

### L11 — Aspherical Positive Meniscus, Concave to Object

nd = 1.58913, νd = 61.25. Glass: M-BACD5N (Hoya exact catalog equivalent; moldable crown). f = +124.5 mm.

L11 closes G2 and carries the second aspherical surface on its image-side face. Because this surface faces the gap before the moving focus element, it is well placed to adjust the marginal and oblique bundles before G3. Its weak positive meniscus power supports field and coma correction without changing the focus group's job into a high-power refocusing task.

### L12 — Positive Meniscus Focus Element

nd = 1.48749, νd = 70.45. Glass: FC5 (Hoya exact catalog equivalent). f = +71.4 mm.

L12 is the entire focusing group G3. The glass is a low-index, high-Abbe fluoro-crown; its moderate power and low density suit the patent's stated objective of a light focus group for quiet, accurate autofocus (¶0003, ¶0022, ¶0055). It is not counted as Panasonic's ED element in this analysis because its partial-dispersion deviation is modest relative to FCD100 and FCD705.

### L13 — Negative Meniscus, Convex to Object

nd = 1.80610, νd = 33.27. Glass: NBFD15 (Hoya exact catalog equivalent). f = -42.4 mm.

L13 begins the weak rear group G4. Although G4 has little net power, the patent emphasizes that the off-axis chief-ray height is large in this region, making the group effective for lateral color correction (¶0045). L13 supplies the negative member used in the condition (6) Abbe-number balance.

### L14-L15 — Cemented Rear Doublet

L14: nd = 1.55032, νd = 75.50. Glass: FCD705 (Hoya exact catalog equivalent; ED-class fluorophosphate). f = +24.4 mm.  
L15: nd = 1.84666, νd = 23.78. Glass: FDS90 (Hoya exact catalog equivalent). f = -56.2 mm.  
Cemented pair focal length: approximately +43.1 mm in air.

The rear doublet is the main G4 chromatic-correction component. L14 supplies the single ED-class element corresponding to Panasonic's published ED count, while L15 provides the high-dispersion dense-flint partner. This pairing is also the numerical basis for condition (6): the positive member's νp = 75.50 and the average of the two negative members in G4 is νn = (33.27 + 23.78) / 2 = 28.525, giving νp - νn = 46.975.

## Glass Identification and Selection

The patent gives refractive index and Abbe number, not manufacturer names. For the data file, each nd/νd tuple was matched against the HOYA 2015 optical-glass catalog. All fifteen elements have exact HOYA catalog matches at the precision printed in the patent. The catalog names below are therefore exact catalog equivalents, not proof of the production melt supplier.

| Elements | Patent nd / νd | HOYA catalog equivalent | θgF | ΔPgF | Use |
|---|---:|---|---:|---:|---|
| L1 | 1.51680 / 64.20 | BSC7 | 0.5343 | +0.0016 | ordinary crown front meniscus |
| L2 | 1.70154 / 41.15 | BAFD7 | 0.5769 | +0.0028 | high-index negative front power |
| L3, L11 | 1.58913 / 61.25 | M-BACD5N | 0.5373 | -0.0007 | moldable aspherical crown |
| L4, L9 | 1.43700 / 95.10 | FCD100 | 0.5334 | +0.0564 | two UED-class fluorophosphates |
| L5, L13 | 1.80610 / 33.27 | NBFD15 | 0.5883 | +0.0000 | dense-flint partners |
| L6 | 1.60342 / 38.01 | E-F5 | 0.5827 | +0.0029 | light flint before stop |
| L7 | 1.83481 / 42.72 | TAFD5F / TAFD5G | 0.5651 | -0.0062 | high-index positive power |
| L8 | 1.74077 / 27.76 | E-FD13 | 0.6076 | +0.0093 | dense-flint corrector |
| L10 | 1.90366 / 31.32 | TAFD25 | 0.5947 | +0.0028 | very high-index flint partner |
| L12 | 1.48749 / 70.45 | FC5 | 0.5306 | +0.0092 | light focus element |
| L14 | 1.55032 / 75.50 | FCD705 | 0.5400 | +0.0277 | single ED-class rear element |
| L15 | 1.84666 / 23.78 | FDS90 | 0.6191 | +0.0137 | dense-flint rear partner |

The chromatic strategy is distributed. The two FCD100 elements give the design its strongest anomalous-dispersion correction, one in the front-group cemented pair and one in the second-group cemented pair. FCD705 in the rear doublet supplies a weaker but still significant ED-class correction in the region where off-axis chief-ray height is large. FC5 in the moving focus group is a light high-Abbe fluoro-crown, but its ΔPgF is not in the same category as the FCD100 and FCD705 elements.

## Focus Mechanism

Focusing is internal and is performed solely by G3, the single L12 positive meniscus. G1, the stop, G2, G4, and the filter plate remain stationary. From infinity to the 0.20 m close state, d22 decreases and d24 increases by exactly the same amount, so the moving group translates rigidly inside a constant envelope.

| Focus state | d22 | d24 | d22 + d24 |
|---|---:|---:|---:|
| Infinity | 3.7600 mm | 1.5000 mm | 5.2600 mm |
| 1:40 reduction state | 3.3002 mm | 1.9598 mm | 5.2600 mm |
| 0.20 m close state | 2.0736 mm | 3.1864 mm | 5.2600 mm |

The total object-ward focus travel is 1.6864 mm. At the 0.20 m setting, the patent gives d0 = 111.00 mm ahead of the first surface and a total physical surface-1-to-image length of 89.00 mm, giving the stated 200 mm object-to-image distance. A finite-conjugate y-nu trace at the close state gives β = -0.0936 with the rounded d0 value, consistent with Panasonic's published approximately 0.1× maximum magnification.

## Aspherical Surfaces

The aspherical surfaces are surface 5, the front of L3, and surface 22, the rear of L11. The patent uses the standard conic-plus-even-polynomial form:

```text
z = (y²/r) / [1 + sqrt(1 - (1 + K)(y/r)²)]
    + A4 y⁴ + A6 y⁶ + A8 y⁸ + A10 y¹⁰ + A12 y¹²
```

Here K = 0 is a spherical conic base. No odd-order terms are present. The data file labels these surfaces as `5A` and `22A`.

| Coefficient | Surface 5A | Surface 22A |
|---|---:|---:|
| K | 0.0000 | 0.0000 |
| A4 | +1.22500E-05 | +2.72520E-05 |
| A6 | +3.90070E-07 | -1.10080E-08 |
| A8 | -5.82220E-09 | +5.24780E-11 |
| A10 | +5.38370E-11 | -3.68560E-13 |
| A12 | -1.79910E-13 | +2.15050E-16 |

The verified departures at the patent semi-diameters are not the same in optical sense. At surface 5A, y = 10.085 mm, the spherical base sag is +2.2794 mm and the polynomial departure is +0.3009 mm, giving a total sag of +2.5803 mm. At surface 22A, y = 10.540 mm, the spherical base sag is -0.9069 mm and the polynomial departure is +0.3234 mm, giving a total sag of -0.5835 mm. The second asphere therefore reduces the magnitude of a concave negative base sag rather than increasing it in the same sense.

Both aspheres are on M-BACD5N-equivalent moldable crown glass. That placement is consistent with glass-molded aspherical manufacture, although the patent itself identifies the surfaces by coefficients rather than by a manufacturing process.

## Conditional Expressions

The claims define six conditional expressions. Conditions (1), (2), (3), (5), and (6) were independently recomputed from the Example 1 prescription; condition (4) is a finite-field chief-ray quantity and is reported from the patent table.

| # | Expression | Patent range | Recomputed / reported value | Patent table |
|---|---|---:|---:|---:|
| (1) | f1 / f | -2.8 to -0.6 | -1.0769 | -1.08 |
| (2) | f3 / f | 3.1 to 13.5 | +5.9586 | 5.96 |
| (3) | f2 / f1 | -2.5 to -0.7 | -1.5693 | -1.57 |
| (4) | FcEntp / h | -7.0 to -2.7 | patent-reported | -3.88 |
| (5) | f / f4 | -0.05 to +0.10 | +0.0310 | 0.03 |
| (6) | νp - νn | 10 to 80 | +46.975 | 46.98 |

Condition (4) is intentionally not presented as independently recomputed. The patent defines h as the maximum-field chief-ray height at the plane tangent to the object-side vertex of G3; this depends on a finite-field ray construction rather than a purely axial paraxial power calculation.

## Verification Summary

A fresh paraxial y-nu trace was run from the patent prescription. The table below gives the values used to update the data and analysis files.

| Quantity | Recomputed value | Patent value |
|---|---:|---:|
| EFL at infinity | 11.9795 mm | 11.98 mm |
| EFL at 1:40 reduction state | 11.9365 mm | 11.94 mm |
| EFL at 0.20 m state | 11.8239 mm | 11.82 mm |
| G1 focal length | -12.9003 mm | -12.90 mm |
| G2 focal length | +20.2439 mm | +20.24 mm |
| G3 focal length | +71.3805 mm | +71.38 mm |
| G4 focal length | +386.2196 mm | +386.19 mm |
| Petzval sum, surface-by-surface Σφ/(n·n′) | +0.004714 mm⁻¹ | not tabulated |
| Petzval radius | approximately -212.1 mm | not tabulated |
| Close-focus magnification with rounded d0 | -0.0936 | approximately 0.1× production spec |

The numerical checks confirm the Example 1 transcription, the focus-variable gaps, and the group focal lengths. The data file uses the patent's listed effective diameters divided by two as clear semi-diameters. Surface 30-31, the plane-parallel optical filter plate, is excluded from the surfaces array and folded into the final BFD as described above.

## Sources

1. JP 2017-167327 A, Sigma Corporation / Masakazu Hibino, "Inner-Focus Optical System" (インナーフォーカス光学系), filed 16 March 2016, published 21 September 2017. Prescription, aspherical data, variable-gap table, group focal lengths, and conditional-expression table from 数値実施例1 and ¶0094; design rationale from ¶0019-¶0055; element descriptions from ¶0066-¶0072.
2. Panasonic official specifications for LEICA DG SUMMILUX 12 mm / F1.4 ASPH. (H-X012): element/group count, special-element count, Micro Four Thirds mount, F1.4 maximum aperture, 0.20 m closest focusing distance, approximately 0.1× maximum magnification, 84° diagonal angle of view, 62 mm filter size, and 9-blade aperture.
3. Panasonic LEICA DG lens story for H-X012: manufacturer explanation of the 15-element/12-group internal rear-focus optics and special-glass strategy.
4. HOYA Optical Glass Catalog data file `HOYA20150615.xls`: catalog-equivalent glass names, line indices, θgF, and ΔPgF values used for the `.data.ts` spectral fields.
