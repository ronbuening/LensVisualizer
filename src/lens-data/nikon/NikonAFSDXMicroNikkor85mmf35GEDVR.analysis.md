# NIKON AF-S DX MICRO-NIKKOR 85mm f/3.5G ED VR

## Patent Reference and Design Identification

**Patent:** US 2009/0190220 A1\
**Application Number:** 12/328,257\
**Priority:** 2008-01-22 and 2008-06-23\
**Filed:** 2008-12-04\
**Published:** 2009-07-30\
**Inventor:** Haruo Sato\
**Assignee:** Nikon Corporation\
**Title:** *Imaging Lens, Optical Device Thereof, and Method for Manufacturing Imaging Lens*\
**Embodiment analyzed:** Example 1

The prescription is the Example 1 system shown in Fig. 2 and Table 1 of US 2009/0190220 A1. The patent describes a five-power-group macro lens with two internal focusing groups and a transverse vibration-proof group (¶0103–¶0111). This analysis treats Example 1 as the selected production correlation for the NIKON AF-S DX MICRO-NIKKOR 85mm f/3.5G ED VR. The correlation is an inference from convergent optical and product characteristics; neither the patent nor Nikon's product literature explicitly identifies the production lens as Example 1.

The principal correlation evidence is:

1. Example 1 states a focal length of 85 mm. Independent tracing of the final data file gives an EFL of 85.000253 mm, while Nikon markets the production lens as 85 mm.
2. Example 1 specifies FNO 3.6. The production lens is marketed as f/3.5; the data keeps these values separate and uses the modeled 3.6 value for stop and pupil geometry.
3. The prescription contains 14 physical elements in ten air-separated construction groups. Nikon specifies 14 elements in 10 groups for the production lens. These ten construction groups are distinct from the patent's five functional power groups G1–G5.
4. The production lens is specified with one ED element. In the data, L33 has `nd = 1.497820` and `νd = 82.56` and is therefore retained as an ED-class element. The identification of L33 as the production ED element is a correlation inference, not a statement in the patent.
5. The patent moves G2 and G3 axially for internal focusing and shifts G4 transversely for image-blur correction. Nikon specifies Internal Focusing and lens-based VR for the production lens.
6. The patent publishes a β = -1.0 close station, corresponding to 1:1 imaging. Nikon specifies a maximum reproduction ratio of 1.0×.
7. The patent's 19.1° full field is close to Nikon's marketed 18°50′ DX angle of view, and the patent publication predates Nikon's October 2009 product announcement.

The main production-to-model discrepancy is minimum focus distance. The published β = -1.0 patent state normalizes to 0.26419491 m from object plane to image plane, whereas Nikon specifies 0.286 m from the focal plane. The data preserves the patent's published focus mechanism rather than altering its endpoint to force the production MFD.

## Optical Architecture

Example 1 is a five-power-group internal-focus macro architecture arranged positive–negative–positive–negative–positive around a fixed aperture stop. It is all-spherical and contains no aspheric prescription surfaces. No uniform scaling is applied; the scale factor is `s = 1.0`.

The final data contains 14 physical elements and ten air-separated construction groups. The patent's functional grouping is different:

| Functional group | Composition | Computed group focal length | Motion / role |
|---|---|---:|---|
| G1 | L11, L12, L13+L14 | +45.99999 mm | Fixed positive front group |
| G2 | L21, L22+L23 | -30.21276 mm | Negative focusing group; moves imageward |
| STO | Aperture stop | — | Fixed with respect to the image plane |
| G3 | L31, L32+L33 | +36.92750 mm | Positive focusing group; moves objectward |
| G4 | L41+L42 | -39.99532 mm | Negative vibration-proof group; shifts transversely |
| G5 | L51, L52 | +75.21543 mm | Fixed positive rear group |

The computed group powers reproduce the focal lengths printed in Table 1. The design therefore uses two counter-moving internal groups rather than moving the complete optical system for close focus. G4 is placed behind the fixed stop and ahead of the final positive group; the patent explicitly associates this placement with control of aberration change during vibration-proof operation (¶0068–¶0072).

Under the project's architectural definitions, the modeled system is neither telephoto nor retrofocus. The first-surface-to-image track is 131.13521 mm for an 85.000253 mm EFL, and the back focal distance is 41.97239 mm. Thus the track is longer than the EFL and the BFD is shorter than the EFL.

## Element-by-Element Analysis

The patent assigns most aberration functions at the group level rather than to individual pieces of glass. The element descriptions below therefore distinguish directly published shapes and group functions from computed isolated powers and structural interpretation. An isolated element focal length is the power of that one physical element evaluated in air; it is not the same as the net power of a cemented component or the in-situ focal length of the full patent group.

### L11 — Biconvex Positive

`nd = 1.772499, νd = 49.60. Glass: S-LAH66 (OHARA catalog equivalent; production supplier unspecified). Isolated f = +59.754 mm.`

L11 is the first element of fixed positive group G1. Its biconvex form and positive isolated power provide the initial convergence of the system. The patent describes G1 as fixed with respect to the image plane during focusing (¶0104), so L11 does not participate in the close-focus compensation.

At group level, G1 contributes +45.99999 mm of focal length. The difference between that group value and L11's isolated power reflects the additional positive L12 and the weakly negative cemented L13+L14 component that follow it.

### L12 — Positive Meniscus

`nd = 1.696797, νd = 55.53. Glass: S-LAL14 (OHARA catalog equivalent; production supplier unspecified). Isolated f = +99.955 mm.`

L12 is the second positive component of G1 and is a positive meniscus with its convex side toward the object, as specified in ¶0104. It adds positive power without being part of a cemented pair. Its role is best interpreted as part of the group-level power and aberration balance rather than as a separately identified patent correction mechanism.

### L13 — Biconcave Negative

`nd = 1.717362, νd = 29.52. Glass: S-TIH1 (OHARA catalog equivalent; production supplier unspecified). Isolated f = -32.691 mm.`

L13 is the negative member of cemented component D1. The patent describes the L13+L14 pair as a cemented negative component within the otherwise positive G1 (¶0104). L13's relatively high dispersion and strong negative isolated power oppose the positive members ahead of and behind it.

### L14 — Positive Meniscus

`nd = 1.699998, νd = 48.08. Glass: J-LAF01 (HIKARI catalog equivalent; production supplier unspecified). Isolated f = +40.116 mm.`

L14 is cemented directly to L13 and is a positive meniscus convex toward the object. Evaluated together in air, D1 has a net focal length of -175.687 mm: the cemented pair is therefore weakly negative even though L14 itself is positive. In situ, the complete G1 remains substantially positive at +45.99999 mm.

This distinction matters because the patent describes D1 by its net negative role inside G1; the isolated focal lengths of L13 and L14 should not be read as the functional group powers.

### L21 — Negative Meniscus

`nd = 1.516800, νd = 64.12. Glass: N-BK7 (SCHOTT catalog equivalent; production supplier unspecified). Isolated f = -47.480 mm.`

L21 is the leading element of the negative focusing group G2. The patent describes it as a negative meniscus convex toward the object and states that the complete G2 moves toward the image as focus shifts from infinity to close distance (¶0105).

L21 is also the element used in conditional expression (6). With the published object- and image-side radii, the computed form factor is -1.272492, within the patent's required interval. The patent connects this shape constraint with suppression of close-distance changes in lower coma and field curvature (¶0095–¶0098).

### L22 — Biconcave Negative

`nd = 1.516800, νd = 64.12. Glass: N-BK7 (SCHOTT catalog equivalent; production supplier unspecified). Isolated f = -37.395 mm.`

L22 is the negative member of cemented component D2 in G2. It shares the same `nd` and `νd` coordinate as L21 and is followed directly by the much higher-index, lower-Abbe positive L23.

The patent treats G2 as the negative moving group responsible for suppressing close-focus aberration change, particularly changes in spherical aberration and field curvature (¶0087–¶0090). That function belongs to the full moving group, not to L22 in isolation.

### L23 — Positive Meniscus

`nd = 1.846660, νd = 23.78. Glass: J-SF03 (HIKARI catalog equivalent; production supplier unspecified). Isolated f = +64.315 mm.`

L23 is cemented to L22 and is the positive member of D2. The cemented L22+L23 component has a computed net focal length of -89.280 mm, while the complete G2, including L21 and the intervening air space, is stronger at -30.21276 mm.

The strong refractive-index and Abbe-number contrast across the L22/L23 cemented interface is directly present in the prescription. The patent does not publish partial-dispersion or line-index data for these glasses, so the analysis does not assign a more specific chromatic mechanism than the source supports.

### L31 — Biconvex Positive

`nd = 1.516800, νd = 64.12. Glass: N-BK7 (SCHOTT catalog equivalent; production supplier unspecified). Isolated f = +55.107 mm.`

L31 is the leading positive element of G3. The patent specifies a biconvex positive lens followed by a cemented positive component, with G3 moving from the image side toward the object during close focusing (¶0107).

G3's counter-motion relative to G2 is central to the macro focusing architecture. The patent associates the positive moving group with suppression of close-distance changes in spherical aberration and field curvature (¶0083–¶0086).

### L32 — Negative Meniscus

`nd = 1.755199, νd = 27.51. Glass: E-FD4 (HOYA catalog equivalent; production supplier unspecified). Isolated f = -58.608 mm.`

L32 is the negative member of cemented component D3. Its negative isolated power and comparatively low Abbe number are paired with the low-index, high-Abbe positive L33. The pair is nevertheless positive as a cemented component.

### L33 — Biconvex Positive

`nd = 1.497820, νd = 82.56. Glass: J-FKH1 (HIKARI catalog equivalent; production supplier unspecified). Isolated f = +37.841 mm.`

L33 is the positive member of D3 and has the highest Abbe number in the prescription. The final data therefore identifies it only as an ED-class coordinate; it does not assign a vendor glass. Nikon specifies one ED element in the production lens, making L33 the selected correlation for that element, but the patent itself does not label L33 as the production ED glass.

The L32+L33 cemented component has a computed net focal length of +108.762 mm. Together with L31 and the intervening air space, G3 has an in-situ group focal length of +36.92750 mm. No `nC`, `nF`, `ng`, or `dPgF` values are available in the selected example, so no apochromatic or anomalous-partial-dispersion claim is made for L33.

### L41 — Biconcave Negative

`nd = 1.834000, νd = 37.16. Glass: S-LAH60 (OHARA catalog equivalent; production supplier unspecified). Isolated f = -21.612 mm.`

L41 is the negative member of cemented component D4 and the dominant negative element of the vibration-proof group G4. The patent specifies G4 as a cemented negative group that moves substantially perpendicular to the optical axis for image-blur correction (¶0108).

### L42 — Positive Meniscus

`nd = 1.846660, νd = 23.78. Glass: J-SF03 (HIKARI catalog equivalent; production supplier unspecified). Isolated f = +44.426 mm.`

L42 is cemented to L41 and is a positive meniscus convex toward the object. Because D4 is the entirety of G4, the cemented-pair focal length and the group focal length are the same: -39.99532 mm. This is distinct from the much stronger isolated negative power of L41 alone.

The patent's vibration-proof coefficient and transverse-shift calculations therefore apply to the net behavior of L41+L42 as one moving group, not to either element independently.

### L51 — Negative Meniscus

`nd = 1.518229, νd = 58.90. Glass: S-NSL3 (OHARA catalog equivalent; production supplier unspecified). Isolated f = -186.648 mm.`

L51 is the weak negative meniscus at the front of fixed rear group G5. The data retains a vendor-neutral `518590-class` annotation. A fresh catalog audit finds an exact coordinate match in OHARA S-NSL 3 (`nd = 1.518229`, `νd = 58.90`) and near matches in HIKARI J-K3 and HOYA E-C3, but the patent does not identify the procurement vendor.

The patent places a negative meniscus before the final positive L52 and connects G5 at group level with control of upper coma, field curvature, lateral chromatic aberration, and the vibration-proof coefficient (¶0079–¶0082). Those statements describe the complete rear group rather than L51 alone.

### L52 — Biconvex Positive

`nd = 1.785896, νd = 44.20. Glass: S-LAH51 (OHARA catalog equivalent; production supplier unspecified). Isolated f = +55.112 mm.`

L52 is the final positive element and provides most of the positive power of G5. Combined with the weak negative L51 and their separation, the complete rear group has a computed focal length of +75.21543 mm.

G5 remains fixed during focusing (¶0109). Its position behind the vibration-proof group is part of the patent's strategy for balancing the stabilization coefficient against rear-group aberration correction.

## Glass Identification and Selection

The patent publishes d-line refractive indices and Abbe numbers but does not name glass vendors or melts. The final data uses coordinate-compatible catalog equivalents for dispersion modeling. These annotations are not claims about Nikon's procurement.

| Element(s) | Glass annotation in data | `nd` | `νd` | Interpretation |
|---|---|---:|---:|---|
| L11 | S-LAH66 (OHARA catalog equivalent) | 1.772499 | 49.60 | Dense positive-group glass |
| L12 | S-LAL14 (OHARA catalog equivalent) | 1.696797 | 55.53 | Positive G1 glass coordinate |
| L13 | S-TIH1 (OHARA catalog equivalent) | 1.717362 | 29.52 | Higher-dispersion negative member of D1 |
| L14 | J-LAF01 (HIKARI catalog equivalent) | 1.699998 | 48.08 | Positive partner in D1 |
| L21, L22, L31 | N-BK7 (SCHOTT catalog equivalent) | 1.516800 | 64.12 | Reused moderate-index crown coordinate |
| L23, L42 | J-SF03 (HIKARI catalog equivalent) | 1.846660 | 23.78 | High-index, high-dispersion positive partners |
| L32 | E-FD4 (HOYA catalog equivalent) | 1.755199 | 27.51 | Negative member of D3 |
| L33 | J-FKH1 (HIKARI catalog equivalent) | 1.497820 | 82.56 | Production ED position inferred from the one-ED product specification |
| L41 | S-LAH60 (OHARA catalog equivalent) | 1.834000 | 37.16 | Negative member of VR cemented group |
| L51 | S-NSL3 (OHARA catalog equivalent) | 1.518229 | 58.90 | Weak negative member of G5 |
| L52 | S-LAH51 (OHARA catalog equivalent) | 1.785896 | 44.20 | Final positive element |

The prescription clearly uses substantial index and dispersion contrasts across several cemented interfaces, especially D2, D3, and D4. The selected patent example, however, does not publish C-, F-, or g-line indices, nor `dPgF`. The final data likewise contains no synthesized spectral values. Consequently the glass discussion is limited to `nd`, `νd`, and compatible catalog curves; it does not claim APO correction or anomalous partial dispersion.

## Focus Mechanism

Example 1 uses published dual-group internal focusing. G1, the aperture stop, G4, G5, the final lens surface, and the image plane remain fixed. G2 moves toward the image while G3 moves toward the object as the conjugate moves from infinity toward life-size (¶0104–¶0109).

The patent supplies three complete stations:

| State | β | d7 | d12 | d13 | d18 | G2 start | G3 start |
|---|---:|---:|---:|---:|---:|---:|---:|
| Infinity | 0 | 2.49595 | 17.38925 | 16.18097 | 4.99729 | 17.49595 | 58.66617 |
| Close | -0.5 | 10.52739 | 9.35781 | 9.51488 | 11.66338 | 25.52739 | 52.00008 |
| Close | -1.0 | 17.78094 | 2.10426 | 3.18873 | 17.98953 | 32.78094 | 45.67393 |

All dimensions are millimeters. Relative to infinity, G2 moves +8.03144 mm at β = -0.5 and +15.28499 mm at β = -1.0. G3 moves -6.66609 mm and -12.99224 mm respectively. The aperture stop remains at 42.48520 mm from surface 1, and the image plane remains at 131.13521 mm from surface 1. The fixed rear gap `Bf = 41.97225 mm` is unchanged in all three source rows.

The final prime-lens data structure stores the published infinity and β = -1.0 values as its two focus endpoints. The patent's β = -0.5 station remains a published source state and is independently verified, but it is not exactly reproduced by a single common linear interpolation parameter between the two authored endpoints because G2 and G3 reach that station at slightly different normalized fractions. The continuous viewer interpolation should therefore be read as an interpolation between two source endpoints, not as a replacement for the patent's exact intermediate row.

At β = -1.0, the patent gives `d0 = 133.0597 mm` from the object plane to surface 1. Adding the fixed 131.13521 mm first-surface-to-image track gives a modeled object-to-image distance of 264.19491 mm. Nikon specifies a production minimum focus distance of 0.286 m measured from the focal plane. The 21.80509 mm difference is retained as a product-to-patent discrepancy; the published focus table is not reconstructed to remove it.

## Conditional Expressions

The first preferred embodiment defines seven constraints on the power distribution, G2 shape, and G2 refractive-index level (¶0074–¶0101). The final data reproduces them when recalculated from the authored prescription.

At infinity, `d34` is the air distance between the image-side surface of G3 and the object-side surface of G4, corresponding to surface 18→19 (`d18 = 4.99729 mm`). Paragraph 0078 reverses those endpoints in one sentence; the formal definition in ¶0074/¶0076 and Table 1/¶0111 consistently identify `d34` with the G3-to-G4 air gap used here.

| Condition | Patent bound | Published value | Computed from final data |
|---|---|---:|---:|
| (1) `(-f4)/d34` | 2.0 < x < 20.8 | 8.005 | 8.00340 |
| (2) `f5/d34` | 1.0 < x < 41.4 | 15.052 | 15.05124 |
| (3) `f3/d34` | 1.0 < x < 20.0 | 7.390 | 7.38950 |
| (4) `(-f2)/d34` | 1.0 < x < 17.0 | 6.046 | 6.04583 |
| (5) `f1/d34` | 1.0 < x < 23.0 | 9.206 | 9.20499 |
| (6) `(rb + ra)/(rb - ra)` | -5.0 < x < -1.0 | -1.272 | -1.27249 |
| (7) `N2nav` | 1.48 < x < 1.65 | 1.5168 | 1.5168 |

All seven computed values lie inside their patent bounds. The small differences from the printed summary values are consistent with the patent's displayed rounding of group focal lengths and `d34`; no prescription value is altered to force exact agreement with the rounded condition table.

## Image Stabilization

The vibration-proof group G4 consists only of cemented doublet D4, L41+L42. The patent states that this negative group shifts substantially perpendicular to the optical axis for image-blur correction (¶0066, ¶0070–¶0072, ¶0108). Nikon's production literature independently identifies the marketed lens as having lens-based VR, providing one of the mechanical correspondences supporting the selected production correlation.

The patent publishes `VR = 1.159`. An independent affine paraxial decenter of the final G4 prescription gives an image displacement of -1.159096 mm for a +1.000 mm G4 shift, so the coefficient magnitude is 1.159096 and reproduces the source value.

The Example 1 aberration figures use the following transverse G4 shifts:

| Focus state | Published G4 shift |
|---|---:|
| Infinity | -0.423 mm |
| β = -0.5 | +0.598 mm |
| β = -1.0 | -0.748 mm |

The shift magnitude increases at closer conjugates. The published transverse-coordinate signs are mixed: `-0.423 mm` at infinity, `+0.598 mm` at β = -0.5, and `-0.748 mm` at β = -1.0. The numerical sign of the corresponding image displacement depends on the adopted transverse-coordinate convention; the patent comparison quantity is the magnitude of the vibration-proof coefficient.

## Verification Summary

Independent sequential height/reduced-angle tracing and an ABCD multiplication of the final TypeScript arrays agree to machine precision. At infinity, the computed EFL is 85.000253 mm and the computed back focal distance from surface 25 is 41.972393 mm, compared with the patent's 85 mm and `Bf = 41.97225 mm`. The total Petzval sum, computed surface by surface as `φ/(n·n′)`, is +0.00186990324 mm⁻¹.

The finite-conjugate checks also reproduce the source states. At β = -0.5 the object-to-image matrix gives lateral magnification -0.499999474 and a B residual of 0.000347 mm; at β = -1.0 it gives -0.999999904 with a B residual of 0.000248 mm. These results support the `PUBLISHED` focus status: no internal focus reconstruction is required.

The patent does not publish lens semi-diameters or a physical stop radius. These values are therefore modeling inferences in the final data. The authored stop semi-diameter is 8.611653 mm, obtained from the source FNO 3.6 and the traced entrance-pupil magnification; it is not a patent-tabulated aperture dimension. The remaining surface semi-diameters are inferred from the stop solution, exact spherical-ray envelopes, the optical sections, and the current geometry constraints.

The binding inferred geometry occurs across the 1.300 mm air gap between surfaces 4 and 5. The data uses a disclosed `gapSagFrac = 0.94`; at the shared authored rim the physical surface clearance remains +0.094278 mm. The minimum computed element edge thickness is 1.098641 mm and the maximum spherical rim-slope angle is 28.987°. These quantities describe validation of the inferred clear apertures, not patent-specified dimensions.

No sensor cover glass, filter, inactive dummy plane, flare cutter, or mechanical part is included in the active Example 1 model. No plate omission requires an air-equivalent rear-spacing correction. The prescription is unscaled and all 25 modeled optical surfaces are spherical, so there are no aspheric coefficients or conic-convention conversions to report.

Several apparent source-reading errors are OCR artifacts rather than patent corrections. Inspection of the rendered Table 1 gives surface 7 radius `558.6033`, surface 25 radius `-83.7255`, infinity `d18 = 4.99729`, and `Bf = 41.97225`. The rendered Example 1 discussion supplies a positive `+0.598 mm` G4 shift at β = -0.5; the minus signs belong to the infinity and β = -1.0 rows. These rendered values are the ones carried by the final data.

## Sources

1. Haruo Sato, *Imaging Lens, Optical Device Thereof, and Method for Manufacturing Imaging Lens*, US 2009/0190220 A1, Nikon Corporation, published 2009-07-30. Example 1: Fig. 2; Table 1; ¶0103–¶0116. Conditional-expression discussion: ¶0074–¶0101.
2. Nikon USA, **AF-S DX Micro NIKKOR 85mm f/3.5G ED VR** product specifications: https://www.nikonusa.com/p/af-s-dx-micro-nikkor-85mm-f35g-ed-vr/2190/overview
3. Nikon USA, **Nikon's New AF-S DX 85mm f/3.5 Micro NIKKOR Lens Enables Further Creativity with Sophisticated Technology and Design for Close-Up Photography**, press release, 2009-10-14: https://www.nikonusa.com/press-room/nikons-new-af-s-dx-85mm-f-35
