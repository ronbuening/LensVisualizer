# Nikon AF-S NIKKOR 28-300mm f/3.5-5.6G ED VR — Optical Analysis

## Patent Reference and Design Identification

**Patent:** US 2010/0220400 A1  
**Application Number:** 12/695,327  
**Filed:** January 28, 2010  
**Published:** September 2, 2010  
**Priority Dates:** January 30, 2009 (JP 2009-019331; JP 2009-019334)  
**Inventors:** Hiroshi Yamamoto, Satoshi Miwa, Takeshi Suzuki, Haruo Sato  
**Assignee:** Nikon Corporation  
**Title:** Zoom Lens, Optical Apparatus Equipped Therewith and Method for Manufacturing the Zoom Lens  
**Embodiment analyzed:** Example 2, Table 2, FIG. 4

Example 2 is the numerical embodiment that most closely corresponds to the production AF-S NIKKOR 28-300mm f/3.5-5.6G ED VR. The patent table gives $f = 28.79$, $100.00$, and $292.00$ mm, with $FNO = 3.57$, $5.34$, and $5.96$, and image height $IH = 21.6$ mm. That image height corresponds to a 43.2 mm image diagonal, i.e. the 135 full-frame / FX format. The official Nikon announcement gives the production lens as a 28-300 mm FX-compatible 10.7× zoom with f/3.5-5.6 maximum aperture, 19 elements in 14 groups, two ED elements, three aspherical lens elements, internal focusing, SWM, VR II, 0.5 m minimum focus distance, 0.32× maximum reproduction ratio, 77 mm filters, and a 9-blade rounded diaphragm.

The patent timing also fits the product. The Japanese priority date is January 30, 2009, the US publication date is September 2, 2010, and Nikon announced the production lens on August 19, 2010. The patent is therefore contemporaneous with the product rather than a later retrospective filing.

The prescription contains five principal zoom groups with positive-negative-positive-negative-positive power distribution. Nikon's published 19-element / 14-group product count uses the conventional photographic-lens grouping convention: air-separated components are counted as groups. The patent's principal groups are kinematic zoom groups; they are not the same count as the marketing group count. The patent table includes a thin resin layer at surface 26 / 27 as part of a hybrid composite element in G4. The production count is best read as 19 glass elements; the data file models the resin layer as a separate optical medium because it has its own refractive index and thickness.

## Optical Architecture

The design is a high-ratio positive-lead SLR superzoom. In order from the object side, the five moving groups are G1+, G2−, G3+, G4−, and G5+. Upon zooming from wide to telephoto, the G1-G2 spacing increases, the G2-G3 spacing decreases, the G3-G4 spacing increases, and the G4-G5 spacing decreases. The total lens length listed in the patent increases from 159.888 mm at the wide end to 232.653 mm at the telephoto end.

The patent-listed group focal lengths are:

| Group | Patent focal length | Principal role |
|---|---:|---|
| G1 | +109.348 mm | Front positive collector; fixed as a group relative to its internal elements |
| G2 | −17.324 mm | Strong negative variator and internal focusing group |
| G3 | +25.755 mm | Positive relay group carrying the aperture stop during zooming |
| G4 | −25.979 mm | Negative field-correction and vibration-reduction group |
| G5 | +43.376 mm | Rear positive imaging group and exit-pupil / field-control section |

The strict optical telephoto condition is satisfied at the long end: the patent total length at telephoto is 232.653 mm against a listed focal length of 292.00 mm, giving $TL/f \approx 0.797$. At the wide end, the back focal length is longer than the focal length: $BF/f = 38.422 / 28.79 \approx 1.335$, reflecting the long rear clearance required by a Nikon F-mount SLR mirror box.

A re-run paraxial trace using the corrected Table 2 prescription gives the following first-order values. The residuals are acceptable for a first-order trace of a rounded patent prescription and are materially better than traces made from OCR-corrupted thickness values.

| Position | Patent EFL | Computed EFL | EFL residual | Patent Bf | Computed BFD |
|---|---:|---:|---:|---:|---:|
| Wide | 28.790 mm | 28.532 mm | −0.258 mm | 38.422 mm | 39.136 mm |
| Mid | 100.000 mm | 99.255 mm | −0.745 mm | 65.896 mm | 66.244 mm |
| Tele | 292.000 mm | 290.002 mm | −1.998 mm | 79.261 mm | 79.444 mm |

The stop semi-diameter implied by the patent focal lengths and f-numbers is roughly constant: 10.02 mm at the wide end, 9.95 mm at the middle position, and 10.40 mm at the telephoto end after tracing the entrance-pupil magnification back to the aperture stop. The data file therefore uses a 10.5 mm stop semi-diameter.

## Element-by-Element Analysis

### Group 1 — Front Positive Collector

G1 consists of a cemented achromat L11-L12 followed by a separate positive meniscus L13. It contributes moderate positive power and establishes the first major chromatic correction before the strong negative variator.

#### L11 — Negative meniscus, cemented front member

nd = 1.90366, νd = 31.27. Glass: J-LASFH13 (HIKARI). f = −167.5 mm.

L11 is a high-index, high-dispersion negative meniscus with both radii positive. Its role is not to make G1 negative; the L11-L12 pair is weakly positive as a cemented group. Its real value is chromatic. It supplies the short-flint side of the front achromat and allows the ED positive L12 to correct axial color without requiring excessive curvature.

#### L12 — Biconvex positive ED element, cemented rear member

nd = 1.49782, νd = 82.56. Glass: J-FKH1 (HIKARI), ED fluorophosphate. f = +131.2 mm.

L12 is the first of the two ED-class elements in the prescription. The HIKARI J-FKH1 match is effectively exact to the patent values and is closer than a generic S-FPL51 attribution. In the front group it reduces the telephoto-end longitudinal chromatic error that would otherwise be amplified by the large front positive group.

#### L13 — Positive meniscus

nd = 1.60300, νd = 65.47. Glass: J-PSK03 (HIKARI). f = +130.7 mm.

L13 supplies additional positive G1 power without the strong chromatic burden of a lower-Abbe crown. Its positive meniscus shape keeps the group compact while directing a converging beam toward G2.

### Group 2 — Variator and Internal-Focus Group

G2 is the strongest negative group in the lens. It is also the internal-focusing group: the complete G2 assembly translates toward the object for closer focus. The group contains two aspherical surfaces, one at its entrance and one at its exit, which is typical for a high-ratio superzoom because the negative variator sees large changes in beam vergence across the zoom range.

#### L21 — Negative meniscus with object-side asphere

nd = 1.76546, νd = 46.73. Glass: Unmatched; nearest found HIKARI public-catalog entry is J-LASFH2 at 1.76684 / 46.78. f = −25.0 mm.

L21 is the first and strongest negative element of G2. Surface 6 is aspherical and is the most object-side surface of G2. The patent states that an asphere in this position helps correct wide-angle field curvature and distortion. Because L21 receives the broadest off-axis bundles entering the variator, even a moderate departure has high leverage over distortion and sagittal/meridional field balance.

#### L22 — Negative meniscus adjacent to L23

nd = 1.80400, νd = 46.58. Glass: J-LASF015 (HIKARI) / S-LAH65V class. f = −54.5 mm.

L22 is the negative lens immediately object-side of the strongest positive lens in G2. This is the lens controlled by conditional expression (1), $(r_2+r_1)/(r_2-r_1)$. The earlier S-LAH63 attribution is not supported: OHARA S-LAH63 is a substantially different 1.80440 / 39.59 glass. The patent value instead matches the 804/466 class, represented by HIKARI J-LASF015 and OHARA S-LAH65V.

#### L23 — Biconvex positive element

nd = 1.84666, νd = 23.78. Glass: J-SF03 (HIKARI) / S-TIH53 class. f = +25.0 mm.

L23 is the strongest positive element in G2. Its high dispersion is deliberate: inside an overall negative group, a strong positive high-dispersion element helps balance the chromatic effect of the surrounding negative elements while retaining the large power swing needed for a 10× class zoom.

#### L24 — Biconcave negative element with image-side asphere

nd = 1.80400, νd = 46.58. Glass: J-LASF015 (HIKARI) / S-LAH65V class. f = −28.2 mm.

L24 closes G2 and carries the second G2 asphere on surface 13. The patent identifies the most image-side surface of G2 as useful for correcting telephoto-end spherical aberration. This location is effective because the beam leaving G2 changes strongly in vergence from wide to telephoto.

### Group 3 — Positive Relay and Stop Group

G3 is the main positive relay behind the variator. The aperture stop is placed immediately before L31 and moves with G3 during zooming. G3 contains one standalone positive element and two cemented achromats.

#### L31 — Biconvex positive relay element

nd = 1.72916, νd = 54.66. Glass: J-LAK18 (HIKARI) / S-LAL18 class. f = +46.8 mm.

L31 sits just behind the aperture stop and begins the rear relay function. Its high index reduces curvature demand for a given positive power.

#### L32 — Biconvex positive ED element

nd = 1.49782, νd = 82.56. Glass: J-FKH1 (HIKARI), ED fluorophosphate. f = +41.6 mm.

L32 is the second ED element. Unlike L12, which works in the front collector, L32 is placed in the rear relay where it can correct both axial and lateral color after the variator has set the magnification state.

#### L33 — Negative meniscus cemented to L32

nd = 1.84666, νd = 23.78. Glass: J-SF03 (HIKARI) / S-TIH53 class. f = −55.5 mm.

L33 is the high-dispersion partner for the ED L32 element. This is the ED-plus-high-dispersion pairing in the design; it is not correct to describe L11 as an S-TIH53 partner. L11 is instead a dense lanthanum short flint of the J-LASFH13 type.

#### L34 — Negative meniscus, front member of second G3 cemented pair

nd = 1.81600, νd = 46.63. Glass: J-LASF09A (HIKARI). f = −37.4 mm.

L34 is a high-index negative component whose two positive radii produce net negative power because the rear surface is much more strongly curved. It works with L35 to control the field and the chromatic state of the beam before it enters the VR group.

#### L35 — Biconvex positive rear member

nd = 1.51823, νd = 58.89. Glass: J-K3 (HIKARI) / S-NSL3 class. f = +25.0 mm.

L35 supplies strong positive relay power and closes G3. Its moderate index and higher Abbe number counterbalance the preceding dense flint member.

### Group 4 — Negative Vibration-Reduction / Field-Correction Group

G4 is a negative group containing the stabilizing cemented doublet L41-L42 and a hybrid composite L43. The patent states that vibration reduction is carried out by moving the cemented negative lens in G4 in a direction with a component perpendicular to the optical axis.

#### L41 — Biconcave negative VR member

nd = 1.77250, νd = 49.61. Glass: J-LASF016 (HIKARI) / S-LAH66 class. f = −17.0 mm.

L41 supplies most of the negative power of the decentering VR doublet. The prior S-LAH52 assignment is not supported by the patent values; the 1.77250 / 49.61 data match the 773/496 glass family represented by HIKARI J-LASF016 and OHARA S-LAH66.

#### L42 — Positive meniscus VR partner

nd = 1.85026, νd = 32.34. Glass: J-LASF021 (HIKARI) / S-LAH71 class. f = +25.9 mm.

L42 reduces the net negative power of the VR doublet and controls chromatic image shift during stabilization. The L41-L42 pair remains negative overall, which allows decentering to generate the corrective angular deviation needed for image stabilization.

#### L43r / L43g — Hybrid composite negative meniscus with internal asphere

L43r: nd = 1.55389, νd = 38.09. Glass: patent-listed UV-cure resin. f ≈ +14603 mm as a standalone layer.  
L43g: nd = 1.72916, νd = 54.66. Glass: J-LAK18 (HIKARI) / S-LAL18 class. f = −64.6 mm.

The prescription lists a 0.190 mm resin layer followed by a 1.200 mm glass substrate. Surface 26 and surface 27 share the same base radius, but surface 27 is aspherical. That pattern is characteristic of a hybrid molded asphere: a thin resin layer bonded to a glass substrate, with the optical departure carried at the molded junction. The patent prose describes L43 as having an aspherical surface facing the object side; the numerical table shows that the aspherical prescription is surface 27, the resin-to-glass junction.

### Group 5 — Rear Positive Imaging Group

G5 is a positive rear group consisting of L51, cemented pair L52-L53, and final negative aspherical element L54. It controls the final image-side vergence, exit pupil, lateral color, and field flatness.

#### L51 — Biconvex positive element

nd = 1.56384, νd = 60.69. Glass: J-SK11 (HIKARI). f = +36.3 mm.

L51 is the main positive element of G5. The earlier S-BAM4 attribution is not credible because OHARA S-BAM4 is a different 1.60562 / 43.70 glass. HIKARI J-SK11 matches the patent index exactly and the Abbe number to catalog tolerance.

#### L52 — Biconvex positive cemented front member

nd = 1.54814, νd = 45.79. Glass: S-TIL1 (OHARA). f = +29.4 mm.

L52 is a positive lens made from a relatively dispersive light-flint / titanium-flint type glass. OHARA S-TIL1 is an exact public-catalog match. Its use as a positive element is a chromatic tuning choice rather than a simple crown-power choice.

#### L53 — Negative meniscus cemented rear member

nd = 1.90366, νd = 31.27. Glass: J-LASFH13 (HIKARI). f = −46.9 mm.

L53 is the dense flint partner of L52. This rear cemented pair corrects lateral color and helps control the exit cone near the edge of the full-frame image circle.

#### L54 — Rear negative meniscus with image-side asphere

nd = 1.82080, νd = 42.64. Glass: unresolved patent glass, 821426 code. f = −45.1 mm.

L54 is the final optical element before the image plane. Surface 35 is the aspherical surface in the numerical table, even though the prose says the asphere faces the object side. The prescription table is controlling. Its negative power and rear-surface asphere provide final field-curvature and astigmatism correction.

## Glass Selection and Identification

The glass palette is strongly Nikon / HIKARI-compatible. Several earlier third-party assignments were corrected because the public catalog values do not match the patent. The strongest corrections are L22/L24, L41, L51, and L52.

| Element(s) | Patent nd / νd | Corrected identification | Notes |
|---|---:|---|---|
| L11, L53 | 1.90366 / 31.27 | J-LASFH13 (HIKARI) | Exact HIKARI match; dense lanthanum short flint |
| L12, L32 | 1.49782 / 82.56 | J-FKH1 (HIKARI) | ED fluorophosphate; closer than generic S-FPL51 |
| L13 | 1.60300 / 65.47 | J-PSK03 (HIKARI) | Phosphate crown |
| L21 | 1.76546 / 46.73 | Unmatched; near J-LASFH2 | No exact public match found |
| L22, L24 | 1.80400 / 46.58 | J-LASF015 (HIKARI) / S-LAH65V class | Not S-LAH63; S-LAH63 has νd ≈ 39.6 |
| L23, L33 | 1.84666 / 23.78 | J-SF03 (HIKARI) / S-TIH53 class | High-dispersion flint |
| L31, L43g | 1.72916 / 54.66 | J-LAK18 (HIKARI) / S-LAL18 class | High-index lanthanum crown |
| L34 | 1.81600 / 46.63 | J-LASF09A (HIKARI) | Dense lanthanum flint |
| L35 | 1.51823 / 58.89 | J-K3 (HIKARI) / S-NSL3 class | Crown partner in second G3 doublet |
| L41 | 1.77250 / 49.61 | J-LASF016 (HIKARI) / S-LAH66 class | Not S-LAH52 |
| L42 | 1.85026 / 32.34 | J-LASF021 (HIKARI) / S-LAH71 class | High-index VR doublet partner |
| L43r | 1.55389 / 38.09 | UV-cure optical resin | Hybrid aspherical layer |
| L51 | 1.56384 / 60.69 | J-SK11 (HIKARI) | Not S-BAM4 |
| L52 | 1.54814 / 45.79 | S-TIL1 (OHARA) | Exact OHARA match |
| L54 | 1.82080 / 42.64 | 821426 patent glass, unresolved | No exact public HIKARI / OHARA match found |

The chromatic correction strategy places one ED achromat in the front collector and one in the rear relay. L12 corrects color generated before the variator; L32-L33 corrects color after the zoom magnification state has been established. The G2 variator itself uses a high-dispersion positive L23 between negative flint-class elements so that the variator's chromatic contribution is internally balanced rather than pushed entirely onto the front and rear groups.

## Focus Mechanism

The lens uses internal focusing. The complete second lens group G2 moves toward the object while the rest of the group sequence remains in place for a given zoom state. The patent variable-distance table shows the mechanism directly: d1 decreases and d2 increases by the same amount at close focus.

| Zoom state | G2 object-side movement | d1, infinity → close | d2, infinity → close |
|---|---:|---:|---:|
| Wide | 0.681 mm | 2.534 → 1.853 | 30.341 → 31.022 |
| Mid | 0.691 mm | 37.442 → 36.751 | 13.263 → 13.954 |
| Tele | 3.344 mm | 63.214 → 59.870 | 1.585 → 4.929 |

The larger telephoto-end travel is expected. At long focal lengths the internal focusing group has to compensate for much larger image-conjugate sensitivity than it does at the wide end. Nikon's production specification gives a 0.5 m minimum focus distance throughout the zoom range and a maximum reproduction ratio of 0.32× at telephoto.

## Aspherical Surfaces

The patent equation uses a coefficient labeled $K$ in the denominator form

$$
S(y)=\frac{y^2/r}{1+\sqrt{1-K(y/r)^2}} + A_4y^4 + A_6y^6 + A_8y^8 + A_{10}y^{10}.
$$

In that convention, patent $K=1$ is a spherical base. The data file uses the standard conic form with $(1+K_{std})$ in the discriminant, so $K_{std}=K_{patent}-1$. Thus patent $K=-9.1146$ becomes data-file $K=-10.1146$, patent $K=-0.2178$ becomes data-file $K=-1.2178$, and patent $K=1.0000$ becomes data-file $K=0$.

| Surface | Element | Patent K | Data-file K | Principal coefficients |
|---|---|---:|---:|---|
| 6 | L21 front | −9.1146 | −10.1146 | A4 = +6.3564E−06, A6 = −7.7687E−09, A8 = −2.5438E−11, A10 = +1.9354E−13 |
| 13 | L24 rear | +1.0000 | 0 | A4 = +1.0045E−06, A6 = −1.4086E−08, A8 = +9.7383E−12 |
| 27 | L43 resin/glass junction | −0.2178 | −1.2178 | A4 = +1.5514E−06, A6 = +2.9382E−08, A8 = +1.0938E−10 |
| 35 | L54 rear | +1.0000 | 0 | A4 = −8.5226E−06, A6 = +1.1090E−08, A8 = −4.8097E−11, A10 = +1.4630E−13 |

Surfaces 6 and 13 control aberrations generated by the negative variator. Surface 6 is a wide-angle distortion and field-curvature corrector; surface 13 is better placed for telephoto-end spherical aberration. Surface 27 is the hybrid composite asphere in G4. Surface 35 is the final field-flattening asphere before the image plane.

## Vibration Reduction

The stabilizing group is the cemented negative doublet L41-L42 in G4. The patent describes vibration reduction as moving the cemented negative lens in the fourth lens group in a direction including a component perpendicular to the optical axis. Because the doublet is net negative, lateral displacement introduces image-forming beam deviation suitable for shake compensation.

Conditional expression (3), $f_1 / |f_4| = 4.209$, links the front positive group power to the fourth group power. If G4 is too strong, curvature of field and decentering coma become difficult to correct during stabilization. If G1 is too strong, the patent states that telephoto spherical aberration and wide-angle lateral chromatic aberration become worse.

Nikon's official launch text states that the production lens uses VR II and claims camera-shake compensation equivalent to an approximately four-step shutter-speed increase, with Normal and Active modes.

## Conditional Expressions

Example 2 satisfies all five patent conditions listed for the embodiment.

| Expression | Formula | Example 2 value | Function |
|---|---|---:|---|
| (1) | $(r_2+r_1)/(r_2-r_1)$ | 1.282 | Bending of L22 adjacent to strongest G2 positive element |
| (2) | $(-f_2)/f_w$ | 0.601 | G2 power relative to wide-end focal length |
| (3) | $f_1/|f_4|$ | 4.209 | G1/G4 balance for VR and field correction |
| (4) | $(-f_2)/BF_w$ | 0.451 | G2 power against wide-end back focal length |
| (5) | $f_w/BF_w$ | 0.750 | Wide-end focal length versus mirror-box clearance |

These values explain the design balance. G2 must be strong enough for the zoom ratio, but not so strong that telephoto spherical aberration and coma become unmanageable. The wide-end back focal length must remain long enough for the Nikon F-mount SLR mirror box while still preserving wide-angle correction.

## Verification Summary

The patent PDF was rendered and the numerical table was checked against the image, not only the parsed text. The rendered table shows two places where OCR can drop the leading digit in a thickness value: surface 32 has d = 1.100 mm and surface 33 has d = 1.600 mm. Using 0.100 / 0.600 there produces a visibly wrong paraxial trace; using 1.100 / 1.600 restores the expected EFL and BFD agreement.

Independent paraxial checks were run for EFL, BFD, stop semi-diameter, group powers, element powers, focus-gap conservation, asphere conic conversion, Petzval sum, edge thickness, and cross-gap sag intrusion. The final data file keeps the patent radii, thicknesses, refractive indices, Abbe numbers, aspheric coefficients, and variable gaps unchanged except for label conversion and renderer-required semi-diameter estimates.

The computed surface-by-surface Petzval sum is approximately +0.002141 mm⁻¹, corresponding to a Petzval radius of about −467 mm. This value is small relative to the focal length range and is consistent with the design's use of several negative groups and a final rear asphere to manage full-frame field curvature.

## Sources

1. US Patent Application Publication US 2010/0220400 A1, Yamamoto et al., “Zoom Lens, Optical Apparatus Equipped Therewith and Method for Manufacturing the Zoom Lens,” published September 2, 2010.
2. Nikon Corporation, “AF-S NIKKOR 85mm f/1.4G, AF-S NIKKOR 24-120mm f/4G ED VR and AF-S NIKKOR 28-300mm f/3.5-5.6G ED VR,” August 19, 2010, official launch announcement and specification table. https://www.nikon.com/company/news/2010/0819_af-s_85_24-120_28-300-03.html
3. Nikon / HIKARI Optical Glass J-series catalog pages for FK, LASF, PSK, SF, LAK, SK, and K glasses. https://www.nikon.com/business/components/lineup/materials/optical-glass/catalog/
4. OHARA optical glass catalog pages, especially S-LAH65V, S-LAH63, S-LAH66, and S-TIL1, used to reject or confirm candidate cross-vendor glass identifications. https://oharacorp.com/glass/
5. LensVisualizer project specifications: `LENS_DATA_SPEC.md`, `LENS_ANALYSIS_SPEC.md`, and `LENS_MOUNT_FORMAT_OPTIONS.md`.
