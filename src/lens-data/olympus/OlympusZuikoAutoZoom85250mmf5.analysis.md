# Olympus Zuiko Auto-Zoom 85-250 mm f/5

## Patent Reference and Design Identification

**Patent:** US 4,025,167  
**Filed:** January 30, 1975  
**Granted:** May 24, 1977  
**Priority:** February 4, 1974 (Japan 49-14290)  
**Inventor:** Yoshitsugi Ikeda  
**Assignee:** Olympus Optical Co., Ltd., Tokyo, Japan  
**Title:** Telephoto-Type Zoom Lens System  
**Embodiment analyzed:** Embodiment 2 / Claim 3 numerical data

The transcribed prescription is Embodiment 2 of US 4,025,167. The patent identifies the invention as a telephoto-type zoom lens system with a first focusing group, second variator group, third compensator group, and fourth relay group. The numerical Embodiment 2 table gives $f = 85.0$-$250.0$ mm, $F = 1:5$, overall length $l = 238.36$ mm, and telephoto ratio $p = 0.95$ at the 250 mm end.

The production identification rests on four converging points. First, Embodiment 2 is the only example with the exact 85.0 mm wide-end focal length; Embodiments 1 and 3 start at 86.5 mm and 87.0 mm. Second, all examples are constant F/5, matching the marketed lens. Third, Embodiment 2 has 15 glass elements in 11 air-separated components when the L11-L12 relay pair is treated as cemented; this matches the published production specification for the Olympus OM Zuiko 85-250 mm f/5. Fourth, the patent's sub-unity telephoto ratio at the 250 mm end is consistent with the compact telephoto-zoom objective stated in the specification.

A numerical correction is required in the patent table. The specification-side Embodiment 2 table prints surface $r_{20}$ as 8.663, but Claim 3 prints the same surface as 28.663. The latter value is consistent with the neighboring embodiments and is required for the paraxial trace to reproduce the patent focal lengths and relay data. The corrected analysis and data file therefore use $r_{20}=28.663$ mm.

## Optical Architecture

The design is a four-group, all-spherical telephoto zoom. Its group power sequence is positive-negative-positive-positive:

- Group I: positive focusing group, 3 elements in 2 components.
- Group II: negative variator group, 4 elements in 3 components.
- Group III: positive compensator group, 2 elements in 1 cemented component.
- Group IV: fixed positive relay group, 6 elements in 5 components.

The first three groups form a varifocal afocal front system. Group II changes magnification during zooming, while Group III follows a compensating cam path to keep the image plane approximately fixed. Group IV is the fixed relay that images the afocal output onto the 35 mm film plane. Group I moves for focusing, rather than moving the entire lens or using a floating internal group.

The patent's numerical table does not assign an aperture-stop surface. In the data file, the stop is inserted in the Group II-Group III air gap, 0.75 mm ahead of Group III, following the position shown schematically in the patent figure. With a stop semi-diameter of 13.42 mm, the paraxial entrance-pupil calculation gives F/5 within 0.04% at all three tabulated zoom positions. This stop position is a rendering and ray-trace implementation choice, not an additional patent-listed optical surface.

The relay group is unusually important in this design. The patent explicitly gives Group IV a large positive Petzval contribution so that it offsets the negative Petzval contribution of the very short negative variator. This is one of the design's key compactness mechanisms: Group II is made strong and short, and Group IV is shaped to recover field curvature and image-plane stability.

## Element-by-Element Analysis

### L1 - Biconvex Positive

nd = 1.48749, νd = 70.2. Glass: S-FSL5 (OHARA) / FK5 class. f = +206.3 mm.

L1 is the first lens of the focusing group. It is a weak, low-index, high-Abbe biconvex element with $R_1=+152.515$ mm and $R_2=-291.307$ mm. Its role is not simply to add power; its bending is constrained by the patent's first two inequalities so that moving Group I for close focus does not create excessive spherical aberration or astigmatism at the telephoto end.

### L2-L3 - Cemented Front-Group Achromat

L2: nd = 1.62041, νd = 60.3. Glass: S-BSM16 (OHARA) / N-SK16 class. f = +127.6 mm.  
L3: nd = 1.78472, νd = 25.7. Glass: S-TIH11 (OHARA) / SF11 class. f = -204.8 mm.  
Cemented net focal length: +326.8 mm.

The L2-L3 doublet supplies the remaining positive power in Group I while reducing the color introduced by a moving front group. L2 is a strong biconvex crown element; L3 is a weaker biconcave flint element cemented behind it. The large Abbe separation between the two glasses gives the group conventional primary axial-color correction without adding another airspace.

The patent's third and fourth conditional expressions act on $r_3$ and $r_5$, the outer surfaces of this cemented component. Their purpose is to keep the aberration change during front-group focusing inside the range that Groups II-IV can correct.

### L4 - Biconcave Negative

nd = 1.56873, νd = 63.2. Glass: 569632 dense crown patent-code fallback. f = -127.7 mm.

L4 opens the variator group. It is a biconcave negative element, with a very weak front radius and a stronger rear radius. The glass is not safely assignable to a single current manufacturer catalog entry from nd and νd alone. It is best treated as a 569632 dense crown or phosphate-crown-family glass-code fallback rather than as a named catalog glass.

Its high Abbe number is notable for a negative variator element. The design uses negative power here without introducing the strong chromatic effect that would follow from a low-Abbe dense flint in the same position.

### L5-L6 - Reversed Negative Variator Doublet

L5: nd = 1.76182, νd = 26.6. Glass: FD140 (HOYA) / PBH14 (OHARA) class. f = +68.8 mm.  
L6: nd = 1.61800, νd = 63.4. Glass: PSK53A / K-PSKn2 class. f = -48.0 mm.  
Cemented net focal length: -161.8 mm.

This is a reversed chromatic pairing: a positive dense-flint element is cemented to a negative high-Abbe crown element. In isolation, L5 is positive and L6 is stronger negative; together they form a net negative component in the variator group.

The flat front surface of L5 simplifies the element shape, while the strong cemented interface and rear surface provide the actual negative power. This doublet helps the variator change angular magnification while keeping the chromatic behavior of Group II more moderate than a simple negative flint component would permit.

### L7 - Negative Meniscus

nd = 1.56873, νd = 63.2. Glass: 569632 dense crown patent-code fallback. f = -102.7 mm.

L7 closes the negative variator group. Its front surface is strongly concave to the object, and its rear surface is much weaker. The element continues the high-Abbe negative-power strategy established by L4 and helps prepare the ray bundle for the compensator group.

### L8-L9 - Cemented Positive Compensator

L8: nd = 1.62012, νd = 49.7. Glass: K-SSK9 (Sumita) / dense barium-crown class. f = +47.2 mm.  
L9: nd = 1.72151, νd = 29.2. Glass: S-TIH18 (OHARA) / FD18 class. f = -79.7 mm.  
Cemented net focal length: +115.5 mm.

Group III is a single cemented positive doublet. It moves during zooming as the compensator, keeping the image plane nearly fixed as Group II changes magnification. The doublet form is a compact way to give the compensator both positive power and chromatic correction.

The computed cemented focal length is +115.546 mm, matching the patent's $f_3 = 115.55$ mm. Because this group reverses direction in spacing relative to Group IV over the zoom range, its cam path is central to the lens's mechanical compensation.

### L10 - Biconvex Positive

nd = 1.49831, νd = 65.0. Glass: 498650 borosilicate crown patent-code fallback. f = +75.1 mm.

L10 is the first element of the fixed relay group. The nd/νd pair is a low-index crown-family glass, but no current public catalog match should be asserted as exact. It begins the relay's reconverging action after the moving afocal portion of the zoom.

### L11-L12 - Cemented Negative Relay Component

L11: nd = 1.54739, νd = 53.6. Glass: N-BALF5 / BAL5 class. f = +51.8 mm.  
L12: nd = 1.80610, νd = 40.9. Glass: S-LAH53 (OHARA). f = -27.9 mm.  
Cemented net focal length: -82.0 mm.

This cemented pair is the clearest structural difference between Embodiment 2 and the other two examples. In Embodiment 2, L11 and L12 are cemented, producing the 15-element / 11-component count associated with the production lens. In Embodiments 1 and 3, the analogous pair is air-spaced.

The component has net negative power even though the front element is positive. L11 is a barium light flint / BALF-class positive element, not a high-Abbe barium crown. L12 is a high-index lanthanum flint; its νd = 40.9 places it firmly in flint territory. This pair sits immediately before the long 39.0 mm relay airspace and is a major contributor to the relay's aberration balancing.

### L13 - Biconvex Positive

nd = 1.59551, νd = 39.2. Glass: F8 class (Hikari / HOYA). f = +52.1 mm.

L13 is the strong positive element after the long relay air gap. Its low Abbe number is deliberate in context: it is a positive flint-class element, used not for low dispersion but for balancing the chromatic and Petzval behavior of the relay. Its placement after the 39.0 mm airspace gives it strong leverage over the converging relay beam.

### L14 - Biconcave Negative

nd = 1.72000, νd = 43.7. Glass: J-LAF02 class (Hikari; patent 720/437). f = -37.6 mm.

L14 is a compact biconcave negative element near the rear of the relay. Its high index and medium-low Abbe number mark it as a lanthanum flint / LAF-family glass rather than a crown. It corrects relay residuals close to the image side, especially field curvature and astigmatism left by the strong positive elements around it.

### L15 - Biconvex Positive

nd = 1.56384, νd = 60.8. Glass: N-SK11 (SCHOTT) / BACD11 (HOYA) class. f = +101.2 mm.

L15 is the final positive element before the image plane. Its moderate crown glass and positive power close the relay group and help maintain the near-constant back focal distance across the zoom range. Its position near the image plane gives it useful influence on residual field behavior without requiring extreme curvature.

## Glass Identification and Selection

The patent gives nd and νd values but does not name glass vendors. Catalog names below are therefore modern identifications or equivalence classes. Exact vendor attribution is not asserted unless the nd/νd pair matches a public catalog glass closely enough to support it.

| Element | nd | νd | Patent code | Catalog status | Optical role |
|---|---:|---:|---:|---|---|
| L1 | 1.48749 | 70.2 | 487/702 | S-FSL5 / FK5 class | Low-index front crown |
| L2 | 1.62041 | 60.3 | 620/603 | S-BSM16 / N-SK16 class | Positive crown in Group I achromat |
| L3 | 1.78472 | 25.7 | 785/257 | S-TIH11 / SF11 class | Negative flint in Group I achromat |
| L4, L7 | 1.56873 | 63.2 | 569632 | Dense crown code fallback | High-Abbe negative variator elements |
| L5 | 1.76182 | 26.6 | 762/266 | FD140 / PBH14 class | Positive dense flint in reversed variator doublet |
| L6 | 1.61800 | 63.4 | 618/634 | PSK53A / K-PSKn2 class | Negative high-Abbe partner in variator doublet |
| L8 | 1.62012 | 49.7 | 620/497 | K-SSK9 / dense barium crown class | Positive compensator glass |
| L9 | 1.72151 | 29.2 | 722/292 | S-TIH18 / FD18 class | Negative compensator flint |
| L10 | 1.49831 | 65.0 | 498650 | Borosilicate crown code fallback | First relay positive element |
| L11 | 1.54739 | 53.6 | 547/536 | N-BALF5 / BAL5 class | Positive barium light flint in relay doublet |
| L12 | 1.80610 | 40.9 | 806/409 | S-LAH53 class | High-index negative lanthanum flint |
| L13 | 1.59551 | 39.2 | 596/392 | F8 class | Positive flint relay element |
| L14 | 1.72000 | 43.7 | 720/437 | J-LAF02 class | Negative lanthanum-flint relay element |
| L15 | 1.56384 | 60.8 | 564/608 | N-SK11 / BACD11 class | Final positive crown relay element |

No ED or fluorite element is present. The system should not be described as apochromatic. Several glasses have useful partial-dispersion behavior by family, but the patent does not publish line indices or partial-dispersion data, so the data file records nd/νd and catalog-class annotations rather than structured APO fields.

## Focus and Zoom Mechanism

The patent describes front-group focusing: Group I moves along the optical axis for focusing, while Groups II and III perform zooming and Group IV remains fixed. This is consistent with the problem statement in the patent, which is specifically concerned with limiting aberration change when the first lens group is advanced for close-distance photography.

The zoom spacing table is:

| f (mm) | D1: Group I-II | D2: Group II-III | D3: Group III-IV | D1+D2+D3 |
|---:|---:|---:|---:|---:|
| 85.0 | 1.03 | 45.00 | 16.71 | 62.74 |
| 151.4 | 32.28 | 27.54 | 3.00 | 62.82 |
| 250.0 | 48.06 | 1.49 | 13.27 | 62.82 |

The 0.08 mm discrepancy at the wide end is patent table rounding. In the data file, the BFD is set per zoom position to the independently computed paraxial value so that each tabulated position images at the correct plane.

The production specification lists a distance scale from 2.0 m to infinity, but the patent gives no close-focus spacing table. The data file therefore implements close focus by solving a paraxial 2.0 m front-group focus condition, measured from the film plane, with Groups II-IV and the image plane fixed. The inferred Group I motion is nearly constant across zoom positions:

| f (mm) | D1 at infinity | D1 at 2.0 m | Group I advance represented in D1 |
|---:|---:|---:|---:|
| 85.0 | 1.03 | 10.874 | +9.844 |
| 151.4 | 32.28 | 42.124 | +9.844 |
| 250.0 | 48.06 | 57.904 | +9.844 |

Because the patent does not list the production close-focus data, these close-focus spacings should be treated as paraxial implementation values, not as a recovered Olympus service-table prescription.

## Conditional Expressions

The patent defines four conditions on Group I. The specification gives broad ranges, and Claim 1 narrows them. Embodiment 2 satisfies the narrowed claim ranges.

| Expression | Specification range | Claim 1 range | Embodiment 2 value |
|---|---:|---:|---:|
| $(n_1-1)f_1/r_1$ | 0.30-0.58 | 0.36-0.45 | 0.4045 |
| $-r_1/r_2$ | 0.35-0.65 | 0.45-0.60 | 0.5236 |
| $(n_2-1)f_1/r_3$ | 0.57-0.75 | 0.64-0.66 | 0.6453 |
| $(n_3-1)f_1/r_5$ | 0.10-0.24 | 0.15-0.20 | 0.1703 |

The conditions are not generic zoom design constraints; they are specifically aimed at Group I, where front-group focusing would otherwise cause excessive aberration variation, particularly at the telephoto end.

## Verification Summary

Independent paraxial verification was performed from the full prescription using reduced-angle ABCD ray tracing in $(y, n u)$ coordinates. Surface powers were traced surface by surface; Petzval sum was computed from $\phi/(n n')$, not from thin-element approximations.

| Zoom position | Computed EFL | Patent f | Residual |
|---:|---:|---:|---:|
| 85.0 mm | 85.1196 mm | 85.0 mm | +0.14% |
| 151.4 mm | 151.4004 mm | 151.4 mm | <0.01% |
| 250.0 mm | 250.0038 mm | 250.0 mm | <0.01% |

| Group | Computed focal length | Patent focal length |
|---|---:|---:|
| Group I | +126.546 mm | +126.55 mm |
| Group II | -40.000 mm | -40.00 mm |
| Group III | +115.546 mm | +115.55 mm |
| Group IV | +138.249 mm | +138.25 mm |

| Zoom position | Total track to image | Telephoto ratio |
|---:|---:|---:|
| 85.0 mm | 238.397 mm | 2.801 |
| 151.4 mm | 238.360 mm | 1.574 |
| 250.0 mm | 238.352 mm | 0.953 |

| Quantity | Computed | Patent |
|---|---:|---:|
| Group IV length, r16 to image | 138.029 mm | 138.03 mm |
| Group IV focal length | 138.249 mm | 138.25 mm |
| Group IV Petzval sum × f4 | 0.7338 | 0.734 |
| Full-system Petzval sum | 0.000789 mm^-1 | not tabulated |

| Zoom position | Computed BFD |
|---:|---:|
| 85.0 mm | 54.037 mm |
| 151.4 mm | 53.920 mm |
| 250.0 mm | 53.912 mm |

The near-constant BFD confirms the intended mechanical compensation. The remaining differences are consistent with patent table rounding and the corrected $r_{20}=28.663$ mm value.

## Design Heritage and Context

The design is a mid-1970s all-spherical telephoto zoom for the Olympus OM system. Its optical architecture follows the established four-group zoom pattern: a compact varifocal afocal front section followed by a fixed relay. The patent contribution is more specific than the basic zoom layout. Ikeda's claims focus on front-group focusing in a telephoto zoom and on shaping the first group so that close-distance aberration change remains manageable without a more complex floating or whole-lens focusing system.

The design is not a retrofocus lens, because its back focal distance is far shorter than its long-end focal length. It is properly a telephoto zoom at the long end: the verified track-to-EFL ratio is 0.953 at 250 mm. At the wide and middle zoom positions the ratio is greater than 1, so the telephoto designation applies to the long-end compactness target rather than to every focal-length state.

## Sources

1. US 4,025,167, Yoshitsugi Ikeda, "Telephoto-Type Zoom Lens System," Olympus Optical Co., Ltd., granted May 24, 1977.
2. Olympus OM Zuiko 85-250 mm f/5 production specification as reproduced in MIR / eSIF OM-System lens data.
3. OHARA optical glass catalog and low-Tg/preform catalog references for S-FSL, S-BSM, S-TIH, S-LAH, and PBH-class glass matches.
4. SCHOTT optical glass data sheets for N-BALF5 and N-SK11 class references.
5. HOYA optical glass cross-reference material for FD/BACD class comparisons.
6. Sumita optical glass catalog for K-SSK9 and K-PSKn family comparisons.
7. Hikari optical glass references for J-F8 and J-LAF02 class comparisons.
