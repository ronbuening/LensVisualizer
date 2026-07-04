## Patent Reference and Design Identification

**Patent:** US 4,806,000
**Application Number:** 826,985
**Filed:** February 7, 1986
**Granted:** February 21, 1989
**Priority:** February 13, 1985 (JP 60-25640); June 6, 1985 (JP 60-123212)
**Inventors:** Yoshiharu Shiokama, Naoto Ohta, Hiroshi Okano, Kiyotaka Inadome
**Assignee:** Nikon Corporation, Tokyo, Japan
**Title:** Zoom Lens Capable of Macro Photography
**Embodiment analyzed:** Tables 1 and 2; lens construction shown in Fig. 15

US 4,806,000 discloses a zoom lens with separate normal-focus and macro-focus mechanisms. The numerical prescription in Tables 1 and 2 is a four-group negative-positive-negative-positive zoom with a 28.8-83.3 mm patent focal-length range, f/3.5-4.0 patent f-number range, and a tabulated macro state at β = -0.25 from the wide-angle end.

The convergent identification with the Nikon AF Zoom-Nikkor 28-85mm f/3.5-4.5 is strong but should be stated as an optical-formula match rather than as a claim that the patent reproduces every production mechanical detail.

1. The patent focal-length range of 28.8-83.3 mm corresponds to the production 28-85 mm class.
2. The patent prescription has 15 elements in 11 air-separated groups, matching the published production lens construction.
3. The patent f-number range is f/3.5-4.0, while the production lens is marked f/3.5-4.5. The data file therefore uses the production maximum-aperture labeling for `nominalFno`; the patent does not publish a stop diameter, so the stop semi-diameter is an inferred modeling value rather than a tabulated patent value.
4. The patent mechanism moves G1 for normal focusing, and uses a separate macro ring to move G1, G2, and G4 together with G3 fixed. This is the same type of dedicated wide-end macro operation associated with the 28-85 mm Nikon zoom.
5. The patent’s macro limit system gives the greatest macro movement at the wide end and mechanically drives the zoom setting back toward the wide end if the macro ring is forced beyond the allowable macro range at longer focal lengths.
6. No aspherical or ED element is present in the prescription; the design is an all-spherical classical crown/flint zoom.

The production lens’s marketed 28-85 mm and f/3.5-4.5 values are not forced into the optical prescription. The data file keeps the patent’s unscaled radii and spacings and records the computed paraxial focal lengths separately as 28.833 mm and 83.289 mm.

## Optical Architecture

The design is a four-group negative-lead SLR zoom. From object to image, the group powers are G1 negative, G2 positive, G3 negative, and G4 positive. This negative-positive-negative-positive distribution supplies the long back focus needed for a 35 mm SLR wide-angle zoom while allowing the lens barrel to shorten toward the long end.

The design should not be called a true telephoto lens in the strict optical sense. At the long end, the computed total track is 133.24 mm for an 83.29 mm focal length, so TL/EFL is about 1.60 rather than less than 1. The telephoto-end barrel behavior is a zoom-mechanical compression, not a true telephoto-formula total-length reduction.

The first group G1 comprises five elements in four air-separated subgroups. It supplies the main negative front-group power and is the normal-range focusing group. The second group G2 comprises a cemented triplet and a positive singlet; it is the principal positive variator. The third group G3 comprises a near-afocal cemented doublet followed by a strong biconcave negative singlet; it remains fixed during zooming and macro operation. The fourth group G4 comprises two positive singlets followed by a negative meniscus; it is the rear relay/corrector group and moves together with G2 during zooming.

The aperture stop lies between G2 and G3. Table 1 gives the entire G2-G3 distance as the variable spacing d15; Fig. 15 indicates the stop in that gap, close to the fixed G3 barrel, but the exact axial split is not tabulated. The data file therefore uses an inferred split: a variable G2-to-stop distance plus a fixed 0.600 mm stop-to-G3 distance. This keeps the diaphragm fixed with G3 while preserving the patent’s published G2-G3 total spacing.

During zooming from wide to tele, G2 and G4 move together toward the object, G3 remains fixed, and G1 follows a separate cam path. In Table 2, d15 increases from 2.945 mm to 20.744 mm while d20 decreases from 19.920 mm to 2.120 mm, confirming the equal motion of G2 and G4 relative to fixed G3. The d9 spacing decreases from 41.311 mm to 0.835 mm, showing that G1 has its own compensating movement.

## Element-by-Element Analysis

### L1 — Positive Meniscus, convex to object

nd = 1.48749, νd = 70.2. Glass: S-FSL5 (OHARA). f = +470.2 mm.

L1 is a weak positive meniscus at the front of G1. The power is small relative to the rest of the group, so the element mainly moderates the entrance beam and reduces the refractive burden placed on the following negative meniscus. Its high Abbe number makes it a low-dispersion front crown in a group that otherwise contains several dense flints.

### L2 — Negative Meniscus, convex to object

nd = 1.71700, νd = 48.1. Glass: S-LAM3 (OHARA). f = -55.3 mm.

L2 is the dominant negative singlet in the front group. The rear surface, R4 = +25.703 mm, is one of the strongest refracting surfaces in G1 and is responsible for much of the wide-angle negative lead. The high index allows this negative power to be obtained with a meniscus form rather than an extremely thin biconcave element.

The 0.100 mm air gap between L1 and L2 makes the two lenses an almost-contacted air-spaced pair. This preserves manufacturing independence while limiting the optical separation between the first weak positive and the strong negative element.

### L3 + L4 — Cemented Doublet in G1

L3: nd = 1.79668, νd = 45.5. Glass: 797455 - TAF2 class (Hoya legacy; no exact catalog match). f = -35.9 mm standalone.
L4: nd = 1.80458, νd = 25.5. Glass: S-TIH6 class (OHARA). f = +71.0 mm standalone.
Cemented doublet net focal length: -68.2 mm.

This cemented pair is a negative doublet overall. L3 contributes strong negative power, while L4 partly offsets that power with a high-dispersion positive meniscus. The large dispersion difference between the two elements is the primary chromatic function of the cemented group.

The surface at the L3/L4 cemented interface is R6 = +29.317 mm. It is the load-bearing surface in this doublet. The front surface of L3 is very weakly curved, R5 = -1130.610 mm, so the doublet’s action is concentrated at the cemented interface and rear positive surface.

### L5 — Positive Meniscus, convex to object

nd = 1.86074, νd = 23.0. Glass: 861231 - J-SFH2 (Hikari; no source-backed catalog match). f = +130.0 mm.

L5 is a positive meniscus made from a very high-index, high-dispersion dense flint. Its positive power is modest, but its dispersion is not. It completes the front group’s chromatic balance after the strong negative L2 and the negative cemented doublet.

The narrow 0.250 mm air gap between L4 and L5 creates a near-contact rear subassembly in G1. This helps keep the negative front group compact without forcing L5 into cemented contact with the preceding doublet.

### L6 + L7 + L8 — Cemented Triplet in G2

L6: nd = 1.86074, νd = 23.0. Glass: 861231 - J-SFH2 (Hikari; no source-backed catalog match). f = -72.5 mm standalone.
L7: nd = 1.48749, νd = 70.2. Glass: S-FSL5 (OHARA). f = +27.7 mm standalone.
L8: nd = 1.58144, νd = 40.8. Glass: E-FL5 equivalent (legacy LF5 class). f = -121.8 mm standalone.
Cemented triplet net focal length: +67.0 mm.

This cemented triplet is the main achromatized positive core of G2. The central L7 is a strong positive fluorophosphate crown, flanked by a dense flint in front and a light flint at the rear. This structure gives G2 substantial positive power while controlling axial color generated by the strong biconvex crown element.

The triplet also reduces the number of air-glass interfaces in the most powerful positive group. That is mechanically and optically useful in a compact 1980s autofocus zoom, because it limits ghosting and keeps the variator group short.

### L9 — Near Plano-Convex Positive Singlet

nd = 1.60311, νd = 60.7. Glass: S-BSM14 (OHARA). f = +53.1 mm.

L9 is a positive singlet at the rear of G2. Its rear surface, R15 = -1305.526 mm, is effectively flat for paraxial power, so the element behaves close to a plano-convex lens. It adds positive power behind the triplet and helps set the pupil geometry at the transition to the stop and fixed third group.

### L10 + L11 — Near-Afocal Cemented Doublet in G3

L10: nd = 1.78470, νd = 26.1. Glass: S-TIH11 class (OHARA). f = +60.9 mm standalone.
L11: nd = 1.51680, νd = 64.1. Glass: S-BSL7 / N-BK7 class. f = -58.4 mm standalone.
Cemented doublet net focal length: approximately -1240 mm.

The first subassembly of G3 is almost afocal. The dense-flint positive L10 and crown negative L11 largely cancel in first-order power while retaining chromatic and aberration-correction leverage. In the surface-by-surface trace, the doublet has only a very weak negative net power.

Because G3 is fixed relative to the image plane, this doublet provides a stable correction contribution across the zoom range and during macro operation. Its role is therefore better described as chromatic and field correction than as the main negative power of G3.

### L12 — Biconcave Negative Singlet

nd = 1.51835, νd = 60.3. Glass: 518603 - unmatched crown (closest current S-NSL3 differs in nu_d). f = -40.8 mm.

L12 supplies most of the third group’s negative optical power. It is a biconcave element with R19 = -51.601 mm and R20 = +36.052 mm, positioned immediately before the G3-G4 variable air gap. This makes it a principal beam-shaping element before the rear relay group.

The glass is a crown-like material by index and dispersion, but it does not resolve cleanly to a current major catalog entry. It should therefore remain labeled as unmatched rather than forced to a modern Ohara or Schott name.

### L13 — Near Plano-Convex Positive Singlet

nd = 1.58913, νd = 61.2. Glass: SK5 type (589/612). f = +48.1 mm.

L13 is the first positive element in G4. Its front surface is extremely weak, R21 = +849.830 mm, while its rear surface is strongly convex to the image side, R22 = -29.228 mm. In first-order terms it behaves as a near plano-convex positive singlet.

This element restores convergence after the negative G3 and begins the rear relay action of G4.

### L14 — Biconvex Positive Singlet

nd = 1.62280, νd = 57.0. Glass: S-BSM10 (OHARA). f = +65.4 mm.

L14 is the second positive singlet of G4. It adds moderate positive power and helps distribute the relay group’s convergence across two crown-type elements rather than concentrating it entirely in L13.

The 0.100 mm gap between L13 and L14 makes them a near-contact air-spaced pair. This preserves an air interface for correction while keeping the rear group compact.

### L15 — Negative Meniscus, concave to object

nd = 1.79504, νd = 28.6. Glass: 795287 - J-LAFH3 (Hikari; no source-backed catalog match). f = -46.6 mm.

L15 is the final optical element before the image plane. It is a negative meniscus of high refractive index and relatively high dispersion. Its front surface, R25 = -29.860 mm, supplies the principal negative power in the final element.

The element counterbalances the preceding positive crown elements in G4. It also contributes to Petzval correction; the computed system Petzval sum is +0.002949 mm^-1, corresponding to a Petzval radius of about 339 mm.

## Glass Identification

The patent gives refractive index and Abbe number only. It does not name glass catalogs. The identifications below therefore distinguish exact catalog matches, close class matches, and unresolved materials. Japanese vendor catalogs are preferred where the optical constants support them, but the review does not force a vendor label when the current public catalogs do not match closely.

| Element | nd | νd | Identification used | Status |
|---|---:|---:|---|---|
| L1 | 1.48749 | 70.2 | S-FSL5 (OHARA) | exact catalog match |
| L2 | 1.71700 | 48.1 | S-LAM3 (OHARA) | close catalog match |
| L3 | 1.79668 | 45.5 | 797455 - TAF2 class (Hoya legacy; no exact catalog match) | class attribution; not uniquely catalog-resolved |
| L4 | 1.80458 | 25.5 | S-TIH6 class (OHARA) | close class match |
| L5 | 1.86074 | 23.0 | 861231 - J-SFH2 (Hikari; no source-backed catalog match) | unresolved six-digit class |
| L6 | 1.86074 | 23.0 | 861231 - J-SFH2 (Hikari; no source-backed catalog match) | same glass as L5 |
| L7 | 1.48749 | 70.2 | S-FSL5 (OHARA) | same glass as L1 |
| L8 | 1.58144 | 40.8 | E-FL5 equivalent (legacy LF5 class) | catalog-backed equivalent |
| L9 | 1.60311 | 60.7 | S-BSM14 (OHARA) | exact/close catalog match |
| L10 | 1.78470 | 26.1 | S-TIH11 class (OHARA) | close class match |
| L11 | 1.51680 | 64.1 | S-BSL7 / N-BK7 class | standard borosilicate crown class |
| L12 | 1.51835 | 60.3 | 518603 - unmatched crown (closest current S-NSL3 differs in nu_d) | unresolved; S-NSL3 is not a close νd match |
| L13 | 1.58913 | 61.2 | SK5 type (589/612) | class match |
| L14 | 1.62280 | 57.0 | S-BSM10 (OHARA) | close catalog match |
| L15 | 1.79504 | 28.6 | 795287 - J-LAFH3 (Hikari; no source-backed catalog match) | unresolved six-digit class |

The glass palette is conventional for a mid-1980s all-spherical zoom. Chromatic correction is obtained by crown/flint pairing rather than by ED or anomalous-partial-dispersion glass. The strongest dispersion contrasts occur in the G2 triplet, where a high-Abbe fluorophosphate crown is cemented between high- and moderate-dispersion flints, and in the rear group, where positive crown elements are balanced by a high-index flint meniscus.

The prior label for L12 as an Ohara S-NSL3 class glass was too specific. The current S-NSL3 constant is close in nd but not in νd, so the data file now leaves L12 as an unmatched crown-type material.

## Focus and Macro Mechanism

The lens has separate normal-focus and macro-focus mechanisms.

Normal focusing is by movement of G1 alone. In the patent mechanism, the distance ring drives the first lens holding frame through a helicoid, moving the first group along the optical axis. G2, G3, and G4 are not part of the normal-focus motion described in the patent text. The patent does not publish a normal close-focus spacing table, so the data file does not attempt to synthesize the normal 0.8 m focusing state.

Macro focusing is a separate operation. At the wide-angle end, the macro operating ring moves G1, G2, and G4 together toward the object while G3 remains fixed. Table 2 gives the wide-end macro state at β = -0.25. The equal-and-opposite changes in d15 and d20, together with the unchanged d9, verify that G1/G2/G4 translate as a unit relative to the fixed G3 group.

| Spacing | Wide infinity | Wide macro β = -0.25 | Change |
|---|---:|---:|---:|
| d9, G1-G2 | 41.311 mm | 41.311 mm | 0.000 mm |
| d15, G2-G3 total | 2.945 mm | 5.258 mm | +2.313 mm |
| d20, G3-G4 | 19.920 mm | 17.606 mm | -2.314 mm |
| Bf | 39.287 mm | 41.601 mm | +2.314 mm |

The data file represents the patent macro state at the wide end. Because Table 2 does not provide macro data at the telephoto end, the telephoto close-focus values are left equal to the telephoto infinity values. This is a conservative data-modeling choice and should not be interpreted as a statement that the mechanical lens has no close-focus travel at longer focal lengths.

## Verification Summary

The prescription was re-entered from Table 1 and Table 2 and independently traced with a paraxial y-ν matrix calculation during the final re-review. The ray trace uses the patent sign convention with positive radii having centers of curvature to the image side. Surface 13 was rechecked against the patent table and kept as R13 = -52.051 mm; using -52.105 mm changes the computed focal lengths slightly and does not match the patent as closely.

| Quantity | Patent / source | Computed from prescription | Comment |
|---|---:|---:|---|
| EFL, wide | 28.8 mm | 28.833 mm | matches Table 2 |
| EFL, tele | 83.3 mm | 83.289 mm | matches Table 2 |
| Back focal distance, wide infinity | 39.287 mm | 39.286 mm | matches Table 2 |
| Back focal distance, tele infinity | 57.087 mm | 57.088 mm | matches Table 2 |
| Total track, wide infinity | — | 155.913 mm | from surface sum |
| Total track, tele infinity | — | 133.236 mm | from surface sum |
| Macro magnification | β = -0.25 | -0.24997 | from finite-conjugate trace |
| Macro object distance from first surface | — | 92.24 mm | computed finite-conjugate object position |
| Macro object-to-image distance | — | 250.46 mm | supports closeFocusM ≈ 0.25 m |
| G1 focal length | — | -40.90 mm | first-order group power |
| G2 focal length | — | +30.60 mm | first-order group power |
| G3 focal length | — | -39.10 mm | first-order group power |
| G4 focal length | — | +57.02 mm | first-order group power |
| Petzval sum | — | +0.002949 mm^-1 | surface-by-surface φ/(n n′) |
| Petzval radius | — | 339.1 mm | reciprocal of Petzval sum |
| Full field, wide, 43.27 mm diagonal | — | 73.76° | rectilinear paraxial estimate |
| Full field, tele, 43.27 mm diagonal | — | 29.12° | rectilinear paraxial estimate |

The computed total track decreases by about 22.68 mm from wide to tele. This supports the mechanical observation that the optical package shortens toward the long end, but it does not make the long-end lens a strict telephoto design.

The semi-diameters in the data file are not patent-published values. They were rechecked during the final pass against the paraxial marginal/chief-ray envelopes and geometric renderer constraints. The selected values keep sd/|R| below 0.90, keep same-element front/rear semi-diameter ratios within the project limit, preserve positive edge thickness in every element, and keep cross-gap sag intrusion within the allowed clearance.

## Design Heritage and Context

The design belongs to the mature 1980s class of negative-front-group SLR standard zooms. Its distinct patent contribution is not an exotic glass or aspherical correction strategy; it is the macro mechanism that coordinates multiple moving groups while using a focal-length-dependent mechanical limit. The macro ring can operate across a useful range of zoom settings, while the greatest macro magnification occurs at the wide-angle end.

The optical design is more complex than a simple two-group standard zoom but remains conventional in manufacturing terms. It uses spherical surfaces only, no ED glass, and no molded or hybrid aspherical surfaces. The correction strategy is therefore based on group-power distribution, cemented crown/flint subassemblies, and carefully placed near-contact air gaps.

## Sources

- US Patent 4,806,000, "Zoom Lens Capable of Macro Photography," Nikon Corporation, granted February 21, 1989. Tables 1 and 2 provide the numerical prescription and variable spacings; Figs. 9, 10, and 15 show the four-group kinematics and lens construction.
- Nikon-published product and compatibility literature for the AF Zoom-Nikkor 28-85mm f/3.5-4.5 family, used for production naming and marketed aperture range.
- OHARA optical glass data sheets for S-FSL5, S-LAM3, S-TIH6/S-TIH11 class matches, S-BSM14, S-BSM10, and comparison against S-NSL3.
- Hikari optical glass names for J-SFH2 and J-LAFH3 class checks; no source-backed Sellmeier entries were added for those classes.
- Schott historical/catalog data for LF5/E-FL5 and N-BK7-class comparisons.
