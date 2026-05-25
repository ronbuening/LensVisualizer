# Nikon AF-S DX NIKKOR 55-200mm f/4-5.6G ED VR II — Optical Analysis

## Patent Reference and Design Identification

**Patent:** WO 2015/141574 A1; JP republication JPWO2015/141574A1  
**Application Number:** PCT/JP2015/057436; Japanese domestic application 特願2016-508692  
**Filed:** March 13, 2015; priority March 19, 2014  
**Published:** September 24, 2015 (international publication); April 6, 2017 (Japanese republication)  
**Inventors:** Matsuo Taku (松尾 拓); Yamamoto Hiroshi (山本 浩史)  
**Applicant:** Nikon Corporation (株式会社ニコン), Tokyo  
**Title:** 変倍光学系、変倍光学系を備えた撮像装置、変倍光学系の製造方法 (Variable-power optical system, imaging apparatus equipped therewith, and manufacturing method)  
**Embodiment analyzed:** Example 2 (第2実施例, Table 2)

The transcribed prescription is Example 2 of JPWO2015/141574A1. The patent presents a compact telephoto zoom for cameras using film or solid-state imaging sensors. The relevant embodiment is a three-group positive-negative-positive zoom in which the front positive group, the negative variator group, and the rear positive group all move during zooming. Example 2 is the closest disclosed prescription for the AF-S DX NIKKOR 55-200mm f/4-5.6G ED VR II.

The identification rests on convergent rather than single-point evidence:

1. **Element and group count.** Example 2 contains 13 glass elements. Counting air-separated optical subgroups yields 9 groups, matching Nikon's published production specification of 13 elements in 9 groups.[^nikon_usa]
2. **Focal length range.** The patent table gives f = 56.61, 135.00, and 194.07 mm at the three zoom positions. This corresponds to the marketed 55-200 mm DX telephoto zoom range.[^nikon_release]
3. **Maximum aperture.** The patent gives FNO = 4.12, 4.94, and 5.78. Those design values correspond to the marketed f/4-5.6 variable-aperture specification.[^nikon_release]
4. **Image height.** The patent image height is Y = 14.25 mm, or a 28.5 mm image-circle diameter. That matches APS-C/DX coverage rather than 35 mm full-frame coverage.
5. **Special glass count.** The prescription contains a single very-low-dispersion element, L32 (nd = 1.49782, νd = 82.57), matching Nikon's published count of one ED element.[^nikon_release][^nikon_usa]
6. **Focus architecture.** The patent states that the L12+L13 cemented doublet in G1 is moved along the optical axis for focusing from infinity to close distance. Nikon lists the production lens as an internal-focusing AF-S lens.[^nikon_usa]
7. **Stabilization architecture.** The patent states that the L34+L35 cemented doublet in G3 is moved perpendicular to the optical axis for vibration reduction. Nikon describes the production lens as VR-equipped and rates the system at approximately four stops under CIPA conditions.[^nikon_release]
8. **Timing.** The March 2014 priority date precedes Nikon's January 6, 2015 product announcement, which is consistent with this being a production-adjacent filing rather than a later derivative patent.[^nikon_release]

The analysis therefore treats JPWO2015/141574A1 Example 2 as the patent prescription corresponding to the production AF-S DX NIKKOR 55-200mm f/4-5.6G ED VR II.

## Optical Architecture

The optical system is a three-group telephoto zoom with positive-negative-positive power distribution:

- G1: positive front group, f = +94.19 mm.
- G2: negative variator group, f = -27.78 mm.
- G3: positive rear imaging group, f = +36.37 mm.

The design has 13 glass elements in 9 air-separated optical groups. In patent group notation it is a three-group zoom, but in production-lens construction notation it is a 13-element / 9-group lens. The distinction matters: the three patent groups are zoom-moving mechanical/optical groups, while the nine production groups are air-separated element assemblies.

The patent states that, during zooming from wide to telephoto, the G1-G2 spacing increases, the G2-G3 spacing decreases, G1 moves objectward, G2 first moves imageward and then objectward, and G3 moves objectward. The aperture stop moves with G3. In Table 2, d5 increases from 2.10 mm to 28.67 mm, while d10 decreases from 30.56 mm to 1.44 mm. The back focal distance increases from 39.90 mm to 66.23 mm.

At the wide end, TL/f = 148.30 / 56.61 = 2.62, so the optical system is not compressed relative to its focal length. At the telephoto end, TL/f = 172.09 / 194.07 = 0.887, so the design becomes a true telephoto configuration. The zoom ratio from the patent focal lengths is 194.07 / 56.61 = 3.43x, while the marketed range is conventionally rounded to 55-200 mm.

## Element-by-Element Analysis

### L11 — Weak Biconvex Positive Singlet

nd = 1.51680, νd = 63.88. Glass: BK7-class crown, code 517/639; closest current Nikon/Hikari entry is J-BK7A with the same nd but νd = 64.14. f = +343.3 mm.

L11 is a weak positive front collector. The nearly symmetric radii (R1 = +354.3437 mm, R2 = -354.3437 mm) keep the front element's power low and distribute the bending symmetrically. Its primary role is not large paraxial power, but control of entrance beam geometry before the internal-focus doublet.

The glass value in the patent is not a current exact J-series catalog match. Current Nikon/Hikari J-BK7A has nd = 1.516800 but νd = 64.14, while the patent uses νd = 63.88.[^hikari_bk] This has therefore been recorded as a BK7-class crown rather than a hard current-catalog identification.

### L12 + L13 — Cemented Focus Doublet in G1

**L12:** nd = 1.84666, νd = 23.80. Glass: J-SF03 / J-SF03HS (Hikari). f = -171.3 mm. Negative meniscus, convex to object.  
**L13:** nd = 1.48749, νd = 70.31. Glass: J-FK5 (Hikari). f = +71.5 mm. Biconvex positive.

The L12+L13 cemented doublet is the internal-focus group. The patent identifies this cemented component as a positive-power focus group that moves along the optical axis during focusing from infinity to short object distance. Its standalone paraxial focal length is +124.9 mm.

The glass pairing is a high-dispersion dense flint against a low-dispersion crown. Nikon/Hikari's J-SF page lists J-SF03 and J-SF03HS at nd = 1.846660 and νd = 23.80, matching L12 exactly.[^hikari_sf] Nikon/Hikari's FK page lists J-FK5 at nd = 1.487490 and νd = 70.31, matching L13 exactly.[^hikari_fk]

This doublet gives G1 a focusing subcomponent without requiring front-element extension. Since L11 remains outside the focus motion, focus breathing and balance changes are reduced compared with a whole-front-group focus system.

### L21 + L22 — Cemented Doublet, Front Subgroup of G2

**L21:** nd = 1.69680, νd = 55.52. Glass: J-LAK14 (Hikari). f = -24.5 mm. Biconcave negative.  
**L22:** nd = 1.80518, νd = 25.45. Glass: J-SF6 / J-SF6HS (Hikari). f = +36.8 mm. Positive meniscus, convex to object.

The L21+L22 doublet is the front component of the negative variator group. The component has net negative power, with a standalone focal length of -66.0 mm. L21 supplies much of the negative power; L22 provides high-index, high-dispersion correction at the cemented interface.

The glass matches are direct J-series matches. J-LAK14 is listed at nd = 1.696800 and νd = 55.52.[^hikari_lak] J-SF6 is listed at nd = 1.805180 and νd = 25.45.[^hikari_sf]

The strongly curved cemented interface at R = +18.8950 mm is the doublet's main chromatic-correction surface. This interface combines a substantial refractive-index step with a large dispersion difference, allowing the variator group to carry high negative power without leaving excessive axial color for the rear group.

### L23 — Biconcave Negative Singlet, Rear Subgroup of G2

nd = 1.77250, νd = 49.62. Glass: J-LASF016 (Hikari). f = -49.8 mm.

L23 is the rear negative singlet of G2. It is separated from the L21+L22 cemented doublet by a 2.54 mm air gap, giving G2 a split negative structure rather than one cemented triplet. That air gap is optically useful for controlling coma and astigmatism during the large zoom-induced spacing changes.

J-LASF016 is listed at nd = 1.772500 and νd = 49.62, matching L23 exactly.[^hikari_lasf] The same glass is also used for L36 and L37, reducing the number of distinct glass types in the design.

### L31 — Biconvex Positive Singlet, Front of G3

nd = 1.60311, νd = 60.69. Glass: J-SK14 (Hikari). f = +50.1 mm.

L31 is the first element of the positive rear group. Its equal and opposite radii (R1 = +59.7109 mm, R2 = -59.7109 mm) make it a compact biconvex relay element. It begins reconverging the beam after the negative variator.

Nikon/Hikari lists J-SK14 at nd = 1.603110 and νd = 60.69, an exact match to the patent value.[^hikari_sk]

### L32 + L33 — Cemented ED Doublet in G3

**L32:** nd = 1.49782, νd = 82.57. Glass: J-FKH1 (Hikari) — ED / very-low-dispersion crown. f = +34.7 mm. Biconvex positive.  
**L33:** nd = 1.80518, νd = 25.45. Glass: J-SF6 / J-SF6HS (Hikari). f = -48.6 mm. Biconcave negative.

The L32+L33 doublet is the principal low-dispersion correction assembly. It has a standalone focal length of +104.4 mm and is located immediately in front of the aperture-stop air space. Its placement gives it meaningful leverage over axial color without putting the ED element at the largest front-group beam diameter.

The ED element L32 is a direct match to Nikon/Hikari J-FKH1, listed at nd = 1.497820 and νd = 82.57.[^hikari_fk] It should not be identified as Ohara S-FPM4; current Ohara S-FPM4 has substantially different catalog values and is not a match to this prescription.[^ohara_sfpm4]

L33 is the same J-SF6 dense flint used in L22. The L32/L33 dispersion spread is νd = 82.57 vs. 25.45, the largest deliberate crown/flint contrast in the lens. The patent does not publish θgF or ΔPgF values, so the data file records L32 as high-νd ED glass without assigning unsupported partial-dispersion coefficients.

### Aperture Stop

The aperture stop is surface 16 in Table 2, located after a 1.50 mm air space from L33 and before an 11.54 mm air space to L34. It moves with G3 during zooming. The stop semi-diameter used in the data file is 8.92 mm, derived from the patent F-number values and the paraxial entrance-pupil magnification at the three zoom positions.

The production lens uses a seven-blade circular diaphragm. Nikon's user manual specifies an aperture range of f/4-22 at 55 mm and f/5.6-32 at 200 mm.[^nikon_manual]

### L34 + L35 — Cemented Vibration-Reduction Doublet

**L34:** nd = 1.85026, νd = 32.35. Glass: J-LASF021 / J-LASF021HS (Hikari). f = +21.1 mm. Positive meniscus, concave to object.  
**L35:** nd = 1.79952, νd = 42.09. Glass: J-LASF02 (Hikari). f = -14.1 mm. Biconcave negative.

The L34+L35 cemented doublet is the VR group. The patent explicitly states that this G3 component is moved in a direction including a component perpendicular to the optical axis to correct image blur; it also states that the component has negative refractive power. The doublet's standalone paraxial focal length is -42.0 mm.

The glass matches are J-LASF021 for L34 (nd = 1.850260, νd = 32.35) and J-LASF02 for L35 (nd = 1.799520, νd = 42.09). Both are listed in the Nikon/Hikari LASF table.[^hikari_lasf]

The decentered group is placed behind the stop, where beam diameters are smaller than in the front group. That reduces moving mass and decenter aperture requirements. The relatively modest dispersion separation between L34 and L35 also helps limit color-dependent image shift during stabilization.

### L36 — Biconvex Positive Singlet

nd = 1.77250, νd = 49.62. Glass: J-LASF016 (Hikari). f = +33.8 mm.

L36 is a positive relay element behind the VR doublet. It restores convergence after the net-negative stabilization group and contributes to spherical-aberration and coma correction in the rear part of G3. Its use of the same J-LASF016 glass as L23 and L37 is consistent with a cost-conscious consumer zoom.

### L37 — Negative Meniscus Rear Corrector

nd = 1.77250, νd = 49.62. Glass: J-LASF016 (Hikari). f = -59.1 mm.

L37 is the final lens element before the image plane. It is a negative meniscus with both radii negative (R1 = -20.7941 mm, R2 = -39.0838 mm), concave to the object side. Its rear location gives it leverage over field curvature, astigmatism, distortion, and lateral color while having a smaller effect on on-axis power than an equally strong element placed near the front of the system.

The patent back focal distance from the rear surface of L37 to the image plane is 39.90 mm at the wide end and 66.23 mm at the telephoto end. The large back focal clearance is consistent with Nikon F-mount DX SLR mirror-box requirements.

## Glass Identification and Selection

The glass palette is best read as Nikon/Hikari J-series glass, with one BK7-class front element that matches older BK7-code behavior but not the exact current J-BK7A Abbe number. The previous Ohara-only interpretation is not supported by current catalog values.

| Element(s) | nd | νd | Catalog identification | Notes |
|---|---:|---:|---|---|
| L11 | 1.51680 | 63.88 | BK7-class crown, code 517/639 | Current Nikon/Hikari J-BK7A has nd = 1.516800 but νd = 64.14; the patent value is treated as legacy BK7-class rather than a current exact match.[^hikari_bk] |
| L12 | 1.84666 | 23.80 | J-SF03 / J-SF03HS (Hikari) | Exact match; dense flint in focus doublet.[^hikari_sf] |
| L13 | 1.48749 | 70.31 | J-FK5 (Hikari) | Exact match; low-dispersion crown in focus doublet.[^hikari_fk] |
| L21 | 1.69680 | 55.52 | J-LAK14 (Hikari) | Exact match; lanthanum crown in G2 variator.[^hikari_lak] |
| L22, L33 | 1.80518 | 25.45 | J-SF6 / J-SF6HS (Hikari) | Exact match; dense flint achromatizing partner.[^hikari_sf] |
| L23, L36, L37 | 1.77250 | 49.62 | J-LASF016 (Hikari) | Exact match; reused high-index lanthanum flint.[^hikari_lasf] |
| L31 | 1.60311 | 60.69 | J-SK14 (Hikari) | Exact match; positive G3 relay glass.[^hikari_sk] |
| L32 | 1.49782 | 82.57 | J-FKH1 (Hikari) — ED | Exact match; the sole ED element.[^hikari_fk] |
| L34 | 1.85026 | 32.35 | J-LASF021 / J-LASF021HS (Hikari) | Exact match; positive element of VR doublet.[^hikari_lasf] |
| L35 | 1.79952 | 42.09 | J-LASF02 (Hikari) | Exact match; negative element of VR doublet.[^hikari_lasf] |

The primary chromatic correction strategy uses two high-contrast doublets. The front focus doublet pairs J-SF03 (νd = 23.80) with J-FK5 (νd = 70.31), while the rear ED doublet pairs J-FKH1 (νd = 82.57) with J-SF6 (νd = 25.45). The ED doublet provides the stronger dispersion contrast and is the main secondary-spectrum control point in the prescription, although the patent itself gives only nd and νd rather than a full partial-dispersion table.

## Focus Mechanism

The production lens is an internal-focus design. In the patent embodiment, focusing is performed by moving the L12+L13 cemented doublet within G1 along the optical axis. The front singlet L11 is not the focus group. The focus doublet has positive combined power, f = +124.9 mm.

The patent does not provide a close-focus variable-spacing table for Example 2. The data file therefore models the infinity-focus zoom spacings exactly and leaves close-focus values equal to the infinity values. Nikon's user manual gives the production minimum focus distance as 1.1 m from the focal plane at all focal lengths.[^nikon_manual]

| Spacing | Wide | Mid | Tele |
|---|---:|---:|---:|
| d5, G1-G2 | 2.10 mm | 24.96 mm | 28.67 mm |
| d10, G2-G3 | 30.56 mm | 10.48 mm | 1.44 mm |
| BF | 39.90 mm | 52.90 mm | 66.23 mm |

The sum d5 + d10 + BF is 72.56 mm at wide, 88.34 mm at mid, and 96.34 mm at tele. The change from wide to tele is 23.78 mm, matching the patent's total-track increase from 148.30 mm to 172.09 mm to rounding precision.

## Aspherical Surfaces

Example 2 is an all-spherical prescription. No aspherical coefficient table is provided for this embodiment. The general patent text states that surfaces may be spherical, planar, or aspherical, and notes possible ground, molded-glass, or composite aspheres; this is a generic design-option passage rather than an aspherical prescription for Example 2.

The data file therefore uses `asph: {}`. Aberration correction is achieved through the 13-element spherical construction, the split negative variator group, the ED doublet near the stop, and the rear negative meniscus corrector.

## Image Stabilization

The vibration-reduction group is the L34+L35 cemented doublet in G3. The patent describes this component as being moved laterally, i.e. in a direction including a component perpendicular to the optical axis, for image-blur correction. Its negative combined power is part of the stabilizer design.

Nikon's release describes the production lens as having VR compensation equivalent to approximately a 4.0-stop shutter-speed increase, measured under CIPA conditions at the maximum telephoto position on a DX-format camera.[^nikon_release] Nikon's user manual describes the production VR mechanism as decentering driven by voice-coil motors; the patent identifies the optical component being decentered as the L34+L35 doublet.[^nikon_manual]

Example 5 of the same patent places the stabilization function in G2 instead, but that is a different embodiment. For the analyzed Example 2 prescription, the stabilization group is unambiguously the L34+L35 cemented doublet in G3.

## Conditional Expressions

The patent gives condition values for both the first and second stated invention frameworks. Example 2 satisfies all listed inequalities.

| Condition | Expression | Patent range | Example 2 value |
|---|---|---:|---:|
| (1-1) | (TLt - TLw) / (-f2) | 0.400-0.880 | 0.856 |
| (1-2) | f1 / (-f2) | 2.00-3.50 | 3.39 |
| (1-3) | ft / f1 | 1.82-3.00 | 2.06 |
| (1-4) | ft / f3 | 3.50-5.90 | 5.34 |
| (1-5) | fw / (-f2) | 1.50-2.50 | 2.04 |
| (2-1) | ft / (-f2) | 6.00-7.60 | 6.99 |
| (2-2) | ft / f3 | 3.50-5.90 | 5.34 |
| (2-3) | f1 / (-f2) | 2.00-3.50 | 3.39 |
| (2-4) | (TLt - TLw) / (-f2) | 0.400-0.880 | 0.856 |

The design sits close to the upper end of the allowed range for total-track change relative to G2 power, (TLt - TLw) / (-f2) = 0.856. That is consistent with the compact telephoto-end packaging but leaves little margin against the patent's preferred upper bound of 0.860.

## Semi-Diameter and Data-File Notes

JPWO2015/141574A1 Table 2 does not publish clear-aperture or semi-diameter values. The semi-diameters in the `.data.ts` file are therefore inferred rendering apertures, not production clear-aperture data. They were selected from paraxial marginal/chief-ray envelopes over the three published zoom positions, then constrained by the project's spherical-rendering and physical-plausibility checks:

- sd/|R| remains below 0.90 for every spherical surface.
- Front/rear semi-diameter ratio within a single element remains at or below 1.25; the largest selected ratio is 1.223 at L22.
- Element edge thickness remains above approximately 0.43 mm for the limiting element.
- Signed cross-gap sag intrusion remains below 90% of each adjacent air gap. The tightest selected gap is between surfaces 8 and 9, where the signed intrusion is 2.247 mm against a 2.286 mm limit.

The stop semi-diameter of 8.92 mm was derived by matching the patent FNO values across the three zoom positions after paraxial entrance-pupil magnification. The three derived stop semi-diameters are 8.925, 8.912, and 8.905 mm at wide, mid, and tele respectively, so a single 8.92 mm stop is consistent with the patent's rounded F-number table.

## Verification Summary

The prescription was independently re-run with a surface-by-surface paraxial ABCD trace using the patent radii, thicknesses, refractive indices, and zoom-variable gaps. The results match the patent values to rounding precision.

| Parameter | Computed | Patent | Difference |
|---|---:|---:|---:|
| EFL, wide | 56.602 mm | 56.61 mm | -0.008 mm |
| EFL, mid | 134.972 mm | 135.00 mm | -0.028 mm |
| EFL, tele | 194.089 mm | 194.07 mm | +0.019 mm |
| G1 focal length | +94.194 mm | +94.19 mm | +0.004 mm |
| G2 focal length | -27.781 mm | -27.78 mm | -0.001 mm |
| G3 focal length | +36.373 mm | +36.37 mm | +0.003 mm |
| Petzval sum | +0.0011068 mm^-1 | not tabulated | — |

The Petzval sum above uses the surface-by-surface expression Σφ/(n n'), not a thin-element approximation. It corresponds to a Petzval radius of about 903 mm. The value is small for a compact telephoto zoom because the design repeatedly uses high-index glasses in negative-power elements and distributes correction across several cemented and air-spaced components.

## Sources

[^nikon_release]: Nikon Corporation, "AF-S DX NIKKOR 55-200mm f/4-5.6G ED VR II," news release, January 6, 2015. https://www.nikon.com/company/news/2015/0106_lens_03.html
[^nikon_usa]: Nikon USA, "AF-S DX NIKKOR 55-200mm f/4-5.6G ED VR II," archived product page and specifications. https://www.nikonusa.com/p/af-s-dx-nikkor-55-200mm-f4-56g-ed-vr-ii/20050/overview
[^nikon_manual]: Nikon Corporation, "AF-S DX NIKKOR 55-200mm f/4-5.6G ED VR II User's Manual," Download Center. https://downloadcenter.nikonimglib.com/en/products/195/AF-S_DX_NIKKOR_55-200mm_f_4-56G_ED_VR_II.html
[^hikari_fk]: Nikon/Hikari Optical Glass J-series FK catalog, listing J-FK5 and J-FKH1. https://www.nikon.com/business/components/lineup/materials/optical-glass/catalog/fk.html
[^hikari_sf]: Nikon/Hikari Optical Glass J-series SF catalog, listing J-SF6, J-SF03, and J-SF03HS. https://www.nikon.com/business/components/lineup/materials/optical-glass/catalog/sf.html
[^hikari_lak]: Nikon/Hikari Optical Glass J-series LAK catalog, listing J-LAK14. https://www.nikon.com/business/components/lineup/materials/optical-glass/catalog/lak.html
[^hikari_lasf]: Nikon/Hikari Optical Glass J-series LASF catalog, listing J-LASF02, J-LASF016, and J-LASF021. https://www.nikon.com/business/components/lineup/materials/optical-glass/catalog/lasf.html
[^hikari_sk]: Nikon/Hikari Optical Glass J-series SK catalog, listing J-SK14. https://www.nikon.com/business/components/lineup/materials/optical-glass/catalog/sk.html
[^hikari_bk]: Nikon/Hikari Optical Glass J-series BK catalog, listing current J-BK7A at nd = 1.516800 and νd = 64.14. https://www.nikon.com/business/components/lineup/materials/optical-glass/catalog/bk.html
[^ohara_sfpm4]: Ohara Corporation, S-FPM4 catalog page; current S-FPM4 values do not match nd = 1.49782, νd = 82.57. https://www.oharacorp.com/glass/s-fpm4/
