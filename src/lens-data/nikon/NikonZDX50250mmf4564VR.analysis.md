# Nikon NIKKOR Z DX 50-250mm f/4.5-6.3 VR — JP WO2020/105107 A1 Example 1 Analysis

## Patent Reference and Design Identification

The prescription analyzed here is **Example 1 / 第1実施例** of **JP WO2020/105107 A1**, the Japanese republication of international publication **WO2020/105107**, titled **“Variable-magnification optical system, optical apparatus, and method for manufacturing a variable-magnification optical system”**. The applicant is **Nikon Corporation**. The listed inventors are **Takahiro Ishikawa** and **Norikazu Yokoi**. The international application **PCT/JP2018/042790** was filed on **2018-11-20** and published on **2020-05-28**; the JPO republication issue date is **2021-09-27**.

Example 1 is the strongest embodiment for comparison with the production **NIKKOR Z DX 50-250mm f/4.5-6.3 VR**. The patent's camera embodiment states that the illustrated mirrorless interchangeable-lens camera uses the variable-magnification optical system of Example 1 as its photographic lens (¶0200). The patent does not name the retail product, so the identification rests on convergent evidence:

1. Nikon's production specifications give a 50-250 mm, f/4.5-6.3 Nikon Z DX lens with **16 elements in 12 groups including one ED element**, internal focusing, lens-shift VR, and a 14.5 mm-class DX image field.
2. Example 1 gives **f = 51.50-242.80 mm**, **FNO = 4.63-6.34**, **Y = 14.50 mm**, five moving zoom groups, GN1 as the vibration-reduction group, and GN2 as the focusing group.
3. The production lens was announced in October 2019, fitting the 2018 PCT filing and 2020 publication timing.
4. The production lens contains one ED element; the patent prescription contains one element with νd above 80, L31, making it the only credible ED element in this embodiment.

The filename requested for the paired files uses `f4564`, but the production lens itself is specified by Nikon as **f/4.5-6.3**. The analysis and data file therefore use the factual production aperture range while preserving the requested output filenames.

## Optical Architecture

Example 1 is a five-moving-group APS-C telephoto-range zoom. The group power sequence is:

**GP1 positive → GN1 negative → GP2 positive → GN2 negative → GN3 negative**

The physical prescription contains **16 glass elements in 12 air-separated groups**. The optical grouping is different from the mechanical element-group count: GP1 contains the front positive collector and a cemented positive doublet; GN1 is the negative vibration-reduction group; GP2 is the main positive relay and carries the stop; GN2 is the negative internal-focusing doublet; GN3 is the rear negative correction group.

The patent's central architectural distinction is the separation of the two negative moving groups. **GN1** is the vibration-reduction group and is also a zoom compensator. **GN2** is the focusing group. This avoids making the stabilizer responsible for focus travel and avoids making the focus group carry the full stabilization mass.

Using the image plane as a fixed reference and taking image-side motion as positive, the group-start positions and zoom movements are:

| Group | Wide position (mm) | Mid position (mm) | Tele position (mm) | Wide→tele movement | Role |
|---|---:|---:|---:|---:|---|
| GP1 | -161.202 | -176.254 | -204.666 | -43.464 | front positive group |
| GN1 | -136.602 | -126.861 | -118.671 | +17.931 | first negative / VR group |
| GP2 | -91.551 | -95.587 | -108.341 | -16.790 | positive stop/relay group |
| GN2 | -55.485 | -57.033 | -75.426 | -19.941 | second negative / focus group |
| GN3 | -21.886 | -28.154 | -43.100 | -21.214 | rear negative correction group |

This reproduces the directions stated in ¶0097: GP1, GP2, GN2, and GN3 move object-side from wide to tele, while GN1 moves image-side. The resulting GN1/GN2 travel ratio is $X_{1n}/X_{2n} = -0.899$, matching condition (1).

Although the lens is a telephoto-range zoom by marketed focal length, it is not first-order telephoto-form at every zoom position. Using the patent total length from first surface to image plane, the track ratio is:

| Zoom | Computed EFL (mm) | Patent TL (mm) | TL/EFL | First-order note |
|---|---:|---:|---:|---|
| Wide | 51.499 | 161.202 | 3.130 | long-track state |
| Mid | 86.276 | 176.254 | 2.043 | long-track state |
| Tele | 242.804 | 204.666 | 0.843 | telephoto-form state |

## Element-by-Element Analysis

The focal lengths below are standalone thick-lens values in air, computed from each element's patent radii and center thickness. For cemented elements, these values describe the isolated element shape and power; they are not the same as the element's in-situ contribution inside a cemented assembly.

### L11 — Positive Meniscus, convex to object

nd = 1.51680, νd = 64.1. Glass: **J-BK7A (Hikari)**. f = **+170.2 mm**.

L11 is the first positive collector in GP1. The rear radius is extremely long, making the element only weakly positive. This limits front-surface spherical aberration while allowing the cemented L12/L13 doublet to carry the front group's chromatic balancing.

### L12 — Negative Meniscus, convex to object

nd = 1.60342, νd = 38.0. Glass: **J-F5 (Hikari)**. f = **−108.0 mm**.

L12 is the negative flint member of the front cemented doublet. Its dispersion is paired with the higher-Abbe L13 member to let GP1 retain net positive power without excessive longitudinal and lateral color at the long end.

### L13 — Positive Meniscus, convex to object

nd = 1.48749, νd = 70.3. Glass: **J-FK5 (Hikari)**. f = **+95.0 mm**.

L13 is the positive crown member of the front doublet. Its low index and high Abbe number make it a chromatic partner for L12. It is not the ED element counted in Nikon's production specifications; that role corresponds to L31.

### L21 — Negative Meniscus, convex to object

nd = 1.77250, νd = 49.6. Glass: **J-LASF016 (Hikari)**. f = **−62.9 mm**.

L21 begins GN1, the first negative group and the patent's stabilizer group. It pre-diverges the beam after GP1 and helps keep the decentered VR unit compact.

### L22 — Biconcave Negative

nd = 1.80610, νd = 41.0. Glass: **J-LASF03 (Hikari)**. f = **−28.4 mm**.

L22 is the dominant negative element in the cemented part of GN1. Its strong biconcave form supplies much of the negative group power required for zoom compensation and stabilization sensitivity.

### L23 — Biconvex Positive

nd = 1.94595, νd = 18.0. Glass: **946180 dense-flint class; HOYA FDS18/FDS18-W property-class equivalent, vendor unspecified**. f = **+48.2 mm**.

L23 is a very high-index, very high-dispersion positive element cemented to L22. It does not neutralize the negative group; rather, it trims GN1's chromatic and spherical residuals while keeping the VR group short. The patent gives only nd and νd, so the HOYA assignment is an equivalent-property class, not proof of the production melt vendor.

### L31 — Biconvex Positive

nd = 1.49700, νd = 81.6. Glass: **J-FK01A (Hikari), ED fluorophosphate class**. f = **+38.7 mm**.

L31 is the only element in Example 1 with νd above 80 and is therefore the only credible ED element corresponding to Nikon's production description. Its location at the front of GP2 lets it correct axial color after the variable negative GN1 group and before the stop-side relay.

### L32 — Negative Meniscus, concave to object

nd = 1.85026, νd = 32.4. Glass: **J-LASF021 (Hikari)**. f = **−42.1 mm**.

L32 is the dense-flint negative member cemented to the ED element. The L31/L32 pair remains positive as a group, but the high-index flint member controls color and spherochromatic residuals in the main positive relay.

### L33 — Positive Meniscus, convex to object

nd = 1.51823, νd = 58.8. Glass: **J-K3 (Hikari)**. f = **+68.7 mm**.

L33 is a positive meniscus immediately before the stop. It conditions the ray bundle entering the aperture and distributes GP2's positive power so that the ED doublet is not overburdened.

### L34 — Negative Meniscus, convex to object

nd = 1.90200, νd = 25.3. Glass: **J-LASFH24 (Hikari)**. f = **−60.4 mm**.

L34 is the first powered element after the stop and is negative. Its high index and high dispersion make it a compact post-stop corrector for spherical, coma, and pupil-related residuals.

### L35 — Biconvex Positive

nd = 1.74400, νd = 44.8. Glass: **J-LAF2 (Hikari)**. f = **+55.7 mm**.

L35 restores positive convergence after L34. The nearly symmetric biconvex shape is favorable for distributing positive power around the stop-centered relay.

### L36 — Positive Meniscus, convex to object

nd = 1.79500, νd = 45.3. Glass: **J-LASF017 (Hikari)**. f = **+56.9 mm**.

L36 is the final positive element of GP2. It shapes the beam before the rear focusing doublet and contributes to field and pupil control as GP2 moves during zooming.

### L41 — Biconvex Positive

nd = 1.80518, νd = 25.4. Glass: **J-SF6 (Hikari)**. f = **+31.9 mm**.

L41 is the positive member of GN2, the focusing group. It balances the chromatic behavior of the following negative element while keeping the moving focus group compact.

### L42 — Biconcave Negative

nd = 1.80610, νd = 41.0. Glass: **J-LASF03 (Hikari)**. f = **−20.6 mm**.

L42 is the dominant negative member of GN2 and gives the focus group its net negative power. Image-side movement of this doublet changes final conjugate efficiently, which is why the patent assigns focusing to GN2.

### L51 — Positive Meniscus, concave to object

nd = 1.58913, νd = 61.2. Glass: **J-SK5 (Hikari)**. f = **+57.8 mm**.

L51 begins GN3 with a positive meniscus. It reduces the burden on the final negative meniscus and helps control field curvature and image-side ray angles.

### L52 — Negative Meniscus, concave to object

nd = 1.91082, νd = 35.2. Glass: **911353 high-index lanthanum-flint class; CDGM H-ZLaF4LA / HOYA TAFD35L equivalent, vendor unspecified**. f = **−39.3 mm**.

L52 is the last powered element before the image. It supplies the residual negative power of GN3, participates in field flattening, and adjusts the back-focus geometry. The CDGM/HOYA match is an optical-property class match because the patent does not name a glass vendor.

## Glass Identification and Selection

The patent publishes nd and νd, not glass names. Nikon/Hikari J-series catalog matches were used first because Nikon is the applicant and because most entries match the patent values to transcription precision. L23 and L52 are retained as six-digit optical-property classes with public HOYA/CDGM equivalents rather than asserted Hikari melts.

| Element | Patent nd | Patent νd | Catalog identification | Note |
|---|---:|---:|---|---|
| L11 | 1.51680 | 64.1 | J-BK7A (Hikari) | exact J-series property match |
| L12 | 1.60342 | 38.0 | J-F5 (Hikari) | exact J-series property match |
| L13 | 1.48749 | 70.3 | J-FK5 (Hikari) | high-Abbe crown, not the ED element counted by Nikon |
| L21 | 1.77250 | 49.6 | J-LASF016 (Hikari) | high-index negative meniscus glass |
| L22 | 1.80610 | 41.0 | J-LASF03 (Hikari) | used in both GN1 and GN2 |
| L23 | 1.94595 | 18.0 | 946180 dense-flint class; HOYA FDS18/FDS18-W equivalent | vendor not specified by patent |
| L31 | 1.49700 | 81.6 | J-FK01A (Hikari) | sole ED-class element in Example 1 |
| L32 | 1.85026 | 32.4 | J-LASF021 (Hikari) | ED doublet flint partner |
| L33 | 1.51823 | 58.8 | J-K3 (Hikari) | pre-stop crown meniscus |
| L34 | 1.90200 | 25.3 | J-LASFH24 (Hikari) | high-index post-stop flint |
| L35 | 1.74400 | 44.8 | J-LAF2 (Hikari) | positive relay glass |
| L36 | 1.79500 | 45.3 | J-LASF017 (Hikari) | final GP2 positive glass |
| L41 | 1.80518 | 25.4 | J-SF6 (Hikari) | positive focus-doublet member |
| L42 | 1.80610 | 41.0 | J-LASF03 (Hikari) | negative focus-doublet member |
| L51 | 1.58913 | 61.2 | J-SK5 (Hikari) | rear positive meniscus glass |
| L52 | 1.91082 | 35.2 | 911353 class; CDGM H-ZLaF4LA / HOYA TAFD35L equivalent | vendor not specified by patent |

The chromatic correction strategy is concentrated in the L12/L13 front doublet and the L31/L32 GP2 doublet. L31 is the only ED-class element, while the other high-index dense flints keep the moving negative groups compact and help distribute chromatic correction across the zoom range.

## Focus Mechanism

The patent identifies **GN2** as the focusing group. Example 1 states that focusing from infinity to near object distances is performed by moving **the second negative group GN2 image-side along the optical axis** (¶0098). In element terms this is the cemented **L41/L42** doublet, surfaces 23-25.

Nikon's production documentation describes the lens as internally focusing and uses a stepping motor for autofocus. The patent supplies the optical identity of the focus group, while Nikon's product documentation supplies the production actuator type.

The patent table gives infinity-focus zoom spacings only. The `.data.ts` file therefore uses a simplified paraxial close-focus model: GN2 moves image-side, D22 increases by the same amount that D25 decreases, and all other zoom gaps remain unchanged at a given focal length. The wide and tele close-focus distances are Nikon's published values; the mid value is linearly interpolated between Nikon's 70 mm and 100 mm published minimum-focus distances.

| Zoom | MFD used in model | GN2 image-side travel | D22 infinity→close | D25 infinity→close |
|---|---:|---:|---:|---:|
| Wide | 0.500 m | +2.857 mm | 6.151 → 9.008 mm | 29.739 → 26.882 mm |
| Mid | 0.553 m | +6.284 mm | 8.639 → 14.923 mm | 25.019 → 18.735 mm |
| Tele | 1.000 m | +15.313 mm | 3.000 → 18.313 mm | 28.466 → 13.153 mm |

These values should be read as renderer-supporting paraxial estimates, not as patent-published mechanical cam data.

## Aspherical Surfaces

Example 1 is treated as **all-spherical**. The numerical prescription has no aspheric surface labels and no Example-specific coefficient table. The patent contains a general permissive paragraph stating that surfaces may be spherical, plane, or aspherical and that any aspheres may be ground, glass-molded, or resin-composite surfaces (¶0198), but that paragraph does not provide an Example 1 asphere prescription.

Nikon's production material lists one ED element for the 50-250 mm lens and does not list aspherical elements. In the same product-generation context, Nikon explicitly listed aspherical elements for the companion 16-50 mm lens, so the absence of an aspherical count for the 50-250 mm lens is consistent with the all-spherical patent prescription.

## Image Stabilization

The patent's stabilization group is **GN1**, consisting of L21 plus the L22/L23 cemented doublet. Example 1 states that image-blur correction is performed by moving GN1 with a component perpendicular to the optical axis (¶0099). This is consistent with the claims' broader objective of reducing the vibration-reduction group's size.

GN1 has a standalone group focal length of **−32.879 mm** and contains only three elements. That gives it enough optical leverage for decenter-based stabilization while keeping the moving stabilizer smaller than GP1 or the full stop/relay group. Nikon's production manual identifies the VR mechanism as lens shift using voice-coil motors; it does not name the shifted optical group, but the patent identifies GN1 as the corresponding optical group.

## Conditional Expressions and Paraxial Verification

The prescription was re-traced independently with an ABCD paraxial model using the patent radii, thicknesses, refractive indices, and variable gaps. The computed focal lengths and back focal lengths match the patent table within normal rounding limits.

| Zoom | Computed EFL (mm) | Patent f (mm) | Computed BFL (mm) | Patent BF (mm) | Computed TL (mm) | Patent TL (mm) |
|---|---:|---:|---:|---:|---:|---:|
| Wide | 51.499 | 51.50 | 16.906 | 16.906 | 161.202 | 161.202 |
| Mid | 86.276 | 86.28 | 23.173 | 23.174 | 176.254 | 176.253 |
| Tele | 242.804 | 242.80 | 38.122 | 38.120 | 204.666 | 204.667 |

The standalone group focal lengths computed from the same prescription are:

| Group | Computed f (mm) | Patent f (mm) |
|---|---:|---:|
| GP1 | +141.505 | +141.50 |
| GN1 | −32.879 | −32.88 |
| GP2 | +33.677 | +33.68 |
| GN2 | −66.488 | −66.49 |
| GN3 | −113.666 | −113.67 |

The patent's listed conditional-expression values are reproduced by the prescription. The values most relevant to the design identification are:

| Condition | Value | Interpretation |
|---|---:|---|
| (1) $X_{1n}/X_{2n}$ | −0.899 | GN1 and GN2 move in opposite directions during zoom |
| (2) $(-f_{1n})/\sqrt{f_w f_t}$ | 0.294 | compact negative VR group |
| (3) $(-f_{2n})/\sqrt{f_w f_t}$ | 0.595 | moderate negative focus group |
| (6) $f_{2p}/(-f_{1n})$ | 1.024 | GP2 and GN1 power balance |
| (8) $Bfaw/f_w$ | 0.328 | mirrorless-scale wide-end back focus |
| (9) $2\omega_w$ | 32.297° | patent optical field angle |
| (15) $(R_R-R_F)/(R_R+R_F)$ | 0.238 | rear group surface-shape condition |

The Petzval sum was computed with the surface-by-surface formula $\sum (n' - n)/(n n' R)$, not by a thin-lens element approximation. The net value is **+3.929 × 10^-4 mm^-1**, corresponding to a paraxial Petzval radius of about **−2545 mm** under the sign convention used here. Group contributions are:

| Group | Petzval contribution (mm^-1) |
|---|---:|
| GP1 | +5.077 × 10^-3 |
| GN1 | −1.768 × 10^-2 |
| GP2 | +2.527 × 10^-2 |
| GN2 | −9.250 × 10^-3 |
| GN3 | −3.026 × 10^-3 |

The positive GP2 contribution and the negative GN1/GN2/GN3 contributions nearly balance, supporting the interpretation that the rear negative groups participate in field control as well as focus and stabilization.

## Prescription Data Notes

The patent does not publish semi-diameters. The data file therefore uses inferred semi-diameters constrained by the 62 mm production filter envelope, ray-envelope estimates, edge thickness, element front/rear semi-diameter ratios, sd/|R| limits, and signed cross-gap sag clearance. These semi-diameters are renderer-supporting estimates and should not be read as measured mechanical clear apertures.

The patent's FNO values cannot be represented by a single fixed physical stop semi-diameter at all three zoom positions. A paraxial trace gives the stop semi-diameters required to reproduce the patent FNOs as approximately **8.990 mm** at wide, **8.835 mm** at mid, and **8.524 mm** at tele. The data file uses a fixed **9.0 mm** stop semi-diameter for the optical diagram and a `nominalFno` zoom array of **[4.5, 5.1, 6.3]** for the displayed maximum aperture behavior.

## Sources and References

1. JP WO2020/105107 A1, Example 1 / 第1実施例, especially ¶0089-0105, Table 1, ¶0198, and ¶0200.
2. Nikon Consumer product page for NIKKOR Z DX 50-250mm f/4.5-6.3 VR: https://imaging.nikon.com/imaging/lineup/lens/z-mount/z_dx_50-250mmf45-63_vr/
3. Nikon Z 50 Online Manual, NIKKOR Z DX 50-250mm f/4.5-6.3 VR Lens User's Manual, specifications and VR/focus mechanism: https://onlinemanual.nikonimglib.com/z50/en/90_technical_notes_13.html
4. Nikon Corporation news release, 2019-10-10, announcing the NIKKOR Z DX 16-50mm f/3.5-6.3 VR and NIKKOR Z DX 50-250mm f/4.5-6.3 VR: https://www.nikon.com/company/news/2019/1010_lens_01.html
5. Nikon Business / Hikari Optical Glass J-series catalog, including the 2025 optical-glass data publication: https://www.nikon.com/business/components/lineup/materials/optical-glass/catalog/
6. HOYA Optical World / HOYA optical-glass data for FDS18/FDS18-W and TAFD35L property-class equivalents: https://www.hoya-opticalworld.com/
7. CDGM H-ZLaF4LA data sheet and CDGM glass database for the 911353 class: https://www.cdgmgd.com/webapp/pdf/H-ZLaF4LA.pdf
