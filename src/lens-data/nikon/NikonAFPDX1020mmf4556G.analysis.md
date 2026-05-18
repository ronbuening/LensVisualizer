# Nikon AF-P DX NIKKOR 10-20mm f/4.5-5.6G VR — Patent Example 2 Analysis

## Patent Reference and Design Identification

**Patent:** WO2021039813A1; US20220269056A1
**Applicant:** Nikon Corporation
**Published:** March 4, 2021 (WO); August 25, 2022 (US)
**Embodiment analyzed:** Example 2 / LS(2), Table 2

The prescription transcribed here is **Example 2** of Nikon's WO2021039813A1 family, with the same numerical data available in the English Google Patents text of **US20220269056A1**. The applicant is Nikon Corporation. The relevant embodiment is the zoom optical system **LS(2)**, and its numerical prescription is **Table 2**. The uploaded WO pamphlet scan contains the publication front matter and early description pages; the full Table 2 numerical data used for this review was therefore cross-checked against the text-searchable equivalent publication.

The production lens identified with this embodiment is the **Nikon AF-P DX NIKKOR 10-20mm f/4.5-5.6G VR**. Nikon's official specifications give a 10-20 mm DX-format zoom, maximum aperture f/4.5-5.6, 14 elements in 11 groups, three aspherical lens elements, vibration reduction, internal focusing, closest focus distance 0.22 m from the focal plane, and maximum reproduction ratio 0.17x. The patent example gives a 10.310-19.394 mm design focal-length range, 14 production lens elements in 11 air-separated groups, three aspherical surfaces on three elements, an internal focusing G3 group, and an L23 vibration-reduction sub-group.

The match is not based on chronology alone. The strongest convergent features are the four-group concave-lead zoom form, the negative-positive-negative-positive group power sequence, the two composite aspherical negative menisci in the first group, the third aspherical element near the image plane, the G3 inner-focusing group, the L23 VR group, and the DX image height of 14.25 mm in the patent table.

## Optical Architecture

Example 2 is a compact APS-C / DX **retrofocus ultra-wide zoom**. The group power sequence is:

| Zoom group | Elements | Computed paraxial focal length | Function |
|---|---:|---:|---|
| G1 | L11-L14 | -16.381 mm | Strong negative front group for retrofocus clearance, field correction, and distortion control. |
| G2 | L21-L25 + stop | +24.075 mm | Main positive relay group; contains the stop and the VR sub-group L23. |
| G3 | L31-L32 | -53.288 mm | Negative inner focusing group. |
| G4 | L41-L43 | +70.213 mm | Weak positive rear relay and field-correction group. |

The patent Table 2 values give effective focal lengths of 10.310, 14.992, and 19.394 mm at the wide, middle, and telephoto positions. The corresponding back focal distances are 38.107, 45.676, and 53.470 mm. The BFD/EFL ratios are therefore 3.696, 3.047, and 2.757. This is a retrofocus wide-angle design, not a telephoto design.

The total track lengths at infinity are 127.176 mm, 118.440 mm, and 118.247 mm at the same three zoom positions. The zoom is not a simple two-group wide-angle zoom. Nikon's design-history article describes the production lens as a four-group concave-lead zoom in which focal length is changed by changing inter-group spacing, and Table 2 explicitly varies D10, D20, and D24.

Surface 11 is a patent-declared virtual surface. It is retained in the data file as an air-space plane because it is the first listed surface of G2 in the patent group table. The physical aperture stop is surface 17 in the patent; the data file labels it `STO` and places it in G2 between L23 and the L24/L25 cemented doublet.

## Element-by-Element Analysis

### L11 — Hybrid Negative Meniscus, Convex to Object, Composite Asphere

Glass body: **nd = 1.77250, νd = 49.62. Glass: J-LASF016 / N-LAF34 class, catalog-equivalent high-index lanthanum flint. In-air glass-body f = -31.83 mm.** Resin layer: **nd = 1.56093, νd = 36.64. Glass: patent-specified resin/polymer layer. In-air resin-layer f = -79.44 mm.** Composite L11 f = **-22.73 mm**.

L11 is the first and strongest front-group negative meniscus. It begins the retrofocus expansion of the ray bundle and helps establish the long back focal distance required by an F-mount SLR lens at a 10 mm DX field.

The patent describes L11 as a hybrid/composite aspherical lens. Surface 1 is the object-side surface of the glass body, surface 2 is the glass/resin junction, and surface 3 is the image-side surface of the resin layer. Surface 3 is aspherical. The data file follows this construction by modeling the glass body and thin resin layer as separate material records inside the same hybrid assembly.

### L12 — Hybrid Negative Meniscus, Convex to Object, Composite Asphere

Resin layer: **nd = 1.55389, νd = 38.09. Glass: patent-specified resin/polymer layer. In-air resin-layer f = -484.48 mm.** Glass body: **nd = 1.80610, νd = 40.97. Glass: J-LASF03 / N-LASF43 class, catalog-equivalent dense lanthanum flint. In-air glass-body f = -36.86 mm.** Composite L12 f = **-34.21 mm**.

L12 is the second front-group negative meniscus. It distributes the first group's negative power over two large concave-leading elements rather than forcing the first element to carry the whole retrofocus burden.

The construction is reversed relative to L11. Surface 4 is the outer object-side aspherical resin surface, surface 5 is the resin/glass junction, and surface 6 is the rear surface of the glass body. Nikon's design-history article explains that the two concave lenses in the first group use composite aspherical lenses to reduce the cost of large-diameter aspherical correction. The patent prescription is consistent with that description.

### L13 — Biconcave Negative Conditional Partial-Dispersion Element

**nd = 1.68348, νd = 54.80. Glass: Unmatched patent-specified 683/548 glass, θgF = 0.5501. f = -56.71 mm.**

L13 is the biconcave negative element placed after the two composite menisci and before the positive rear element of G1. It is the element singled out by the patent's conditional expressions. Table 2 gives `ndN1 − (2.015 − 0.0068 × νdN1) = 0.041`, `νdN1 = 54.80`, `θgFN1 = 0.5501`, and `θgFN1 − (0.6418 − 0.00168 × νdN1) = 0.0004`.

No current public catalog identity is assigned in the data file. The optical constants are close to a high-index, relatively high-Abbe negative element, but the partial-dispersion condition is the reason the element matters. In a retrofocus wide-angle front group, lateral color is easily generated before the stop. L13 provides controlled negative power while moderating the color contribution of G1.

### L14 — Biconvex Positive Balancing Element

**nd = 1.71736, νd = 29.57. Glass: J-SF1, catalog-equivalent dense flint. f = +32.54 mm.**

L14 is the positive element at the rear of the first zoom group. It partially cancels the strong negative power of L11-L13 and conditions the beam before it reaches the positive G2 relay.

Its high dispersion is not used to make this group apochromatic. Instead, L14 acts as a compact positive counterweight inside a net-negative front group and participates in chromatic balancing with L13 and the preceding high-index menisci.

### L21-L22 — Pre-Stop Cemented Doublet in G2

L21: **nd = 1.72825, νd = 28.38. Glass: J-SF10, catalog-equivalent dense flint. In-air element f = +13.75 mm.**

L22: **nd = 1.91082, νd = 35.25. Glass: TAFD35 / TAFD35L class, Hoya-equivalent high-index flint. In-air element f = -11.03 mm.**

The cemented L21/L22 assembly has an in-air focal length of **-77.02 mm**. Although the isolated doublet is weakly negative, it is embedded in a strongly converging relay section and functions primarily as a correction assembly. It shapes the high-angle bundle coming from G1 before the rays reach L23 and the aperture stop.

The very high index of L22 permits strong negative curvature in a compact element. The cemented interface suppresses color and spherical residuals that would be more difficult to control with two separated elements at this location.

### L23 — Positive Meniscus VR Element, Concave to Object

**nd = 1.51680, νd = 63.88. Glass: BK7-family crown, patent constants not assigned to a strict catalog name. f = +54.75 mm.**

L23 is a weak positive meniscus immediately before the aperture stop. The patent identifies it as the vibration-reduction sub-group: it is movable perpendicular to the optical axis to correct image displacement from camera shake.

This location is optically plausible for a compact VR module. A near-stop decentering element can shift the image with lower field-dependent side effects than a large front element, and the element is small enough to keep moving mass low.

### L24-L25 — Post-Stop Cemented Doublet in G2

L24: **nd = 1.53172, νd = 48.78. Glass: J-LLF6, catalog-equivalent light flint. In-air element f = +17.22 mm.**

L25: **nd = 1.91082, νd = 35.25. Glass: TAFD35 / TAFD35L class, Hoya-equivalent high-index flint. In-air element f = -49.18 mm.**

The cemented L24/L25 assembly has an in-air focal length of **+26.49 mm**. It is the principal positive post-stop component of G2. Because it sits immediately after the aperture stop, it has strong leverage over spherical aberration, coma, axial color, and spherochromatism.

G2 as a whole computes to **+24.075 mm**. Its positive power, distributed between the pre-stop doublet, L23, and the post-stop doublet, turns the divergent G1 output back toward the image plane.

### L31-L32 — Negative Internal Focusing Group G3

L31: **nd = 1.91082, νd = 35.25. Glass: TAFD35 / TAFD35L class, Hoya-equivalent high-index flint. In-air element f = -24.69 mm.**

L32: **nd = 1.51680, νd = 63.88. Glass: BK7-family crown, patent constants not assigned to a strict catalog name. In-air element f = +46.77 mm.**

The air-spaced G3 compound group computes to **-53.288 mm**. The patent states that G3 moves toward the image side when focusing from infinity to a finite object distance. This identifies the focus mechanism directly: it is internal focusing by the two-element negative G3 group, not unit focusing and not front focusing.

The data file includes a first-order close-focus model because the production lens has a published closest focus distance of 0.22 m but Table 2 gives only infinity zoom spacings. Solving the paraxial system with a fixed image plane gives image-side G3 movements of **0.664 mm**, **1.266 mm**, and **2.064 mm** at the wide, middle, and telephoto positions, respectively. The telephoto solution gives a first-order reproduction ratio of about **0.172x**, matching Nikon's published 0.17x maximum reproduction to rounding. These values should not be treated as Nikon's mechanical cam table.

### L41 — Weak Positive Rear Meniscus, Image-Side Asphere

**nd = 1.53110, νd = 55.91. Glass: Unmatched patent-specified 531/559 crown-like glass, θgF = 0.5684. f = +148.46 mm.**

L41 is a weak positive meniscus at the front of G4, with its concave surface facing the object. Its image-side surface, surface 26, is aspherical.

The element has little standalone power, but its position close to the image plane gives it leverage over field curvature, astigmatism, and distortion. The data file keeps the glass as unmatched rather than assigning a speculative catalog name.

### L42-L43 — Final Cemented Doublet in G4

L42: **nd = 1.91082, νd = 35.25. Glass: TAFD35 / TAFD35L class, Hoya-equivalent high-index flint. In-air element f = -19.93 mm.**

L43: **nd = 1.48749, νd = 70.31. Glass: J-FK5, catalog-equivalent low-dispersion fluor-crown. In-air element f = +19.12 mm.**

The cemented L42/L43 pair has an in-air focal length of **+120.10 mm**. It is a weak positive final corrector assembly. The negative high-index L42 and the low-dispersion positive L43 form a compact rear achromatizing pair near the image plane.

G4 as a complete group computes to **+70.213 mm**. Its power is much weaker than G2's, but its rear position gives it disproportionate influence on final field geometry and residual lateral color.

## Glass Identification and Selection

The patent publishes nd, νd, and θgF; it does not name commercial glass products. The data file therefore uses catalog-equivalent labels where the constants are consistent with familiar Hikari, Hoya, or Schott-family glasses, and it leaves unresolved materials explicitly unmatched. These labels should be read as optical catalog equivalents, not as claims about Nikon's purchasing records.

| Element / medium | Patent nd | Patent νd | Patent θgF | Data-file assignment | Status |
|---|---:|---:|---:|---|---|
| L11 glass body | 1.77250 | 49.62 | 0.5518 | J-LASF016 / N-LAF34 class | Catalog-equivalent high-index lanthanum flint. |
| L11 resin | 1.56093 | 36.64 | 0.5931 | Resin / polymer | Patent-specified composite layer. |
| L12 resin | 1.55389 | 38.09 | 0.5928 | Resin / polymer | Patent-specified composite layer. |
| L12 glass body | 1.80610 | 40.97 | 0.5688 | J-LASF03 / N-LASF43 class | Catalog-equivalent dense lanthanum flint. |
| L13 | 1.68348 | 54.80 | 0.5501 | Unmatched patent-specified 683/548 glass | Conditional partial-dispersion element. |
| L14 | 1.71736 | 29.57 | 0.6036 | J-SF1 class | Dense flint balancing element. |
| L21 | 1.72825 | 28.38 | 0.6069 | J-SF10 class | Dense flint positive doublet member. |
| L22 | 1.91082 | 35.25 | 0.5824 | TAFD35 / TAFD35L class | High-index negative doublet member. |
| L23 | 1.51680 | 63.88 | 0.5360 | BK7-family crown | VR meniscus; not strict catalog assignment. |
| L24 | 1.53172 | 48.78 | 0.5622 | J-LLF6 class | Light-flint positive doublet member. |
| L25 | 1.91082 | 35.25 | 0.5824 | TAFD35 / TAFD35L class | High-index negative doublet member. |
| L31 | 1.91082 | 35.25 | 0.5824 | TAFD35 / TAFD35L class | Negative focusing-group member. |
| L32 | 1.51680 | 63.88 | 0.5360 | BK7-family crown | Positive focusing-group member. |
| L41 | 1.53110 | 55.91 | 0.5684 | Unmatched patent-specified 531/559 glass | Rear weak positive aspherical meniscus. |
| L42 | 1.91082 | 35.25 | 0.5824 | TAFD35 / TAFD35L class | Final doublet negative member. |
| L43 | 1.48749 | 70.31 | 0.5291 | J-FK5 class | Low-dispersion final positive member. |

The chromatic strategy is not an ED-marketed or apochromatic strategy. It is a balanced achromatizing strategy using high-index flints, cemented doublets, a conditioned L13 partial-dispersion element, and a low-dispersion final positive element. Nikon's production specification does not advertise ED glass for this lens.

## Focus Mechanism

The focusing group is **G3**, consisting of L31 and L32. The patent states that G3 moves along the optical axis toward the image side when focusing from infinity to a finite object. Nikon's product documentation identifies the production lens as internally focusing and AF-P, consistent with a small internal moving group driven by a stepping motor.

| Zoom position | Infinity D20 | Inferred close D20 | Infinity D24 | Inferred close D24 | Inferred G3 shift |
|---|---:|---:|---:|---:|---:|
| Wide | 1.457 mm | 2.120666 mm | 5.723 mm | 5.059334 mm | +0.663666 mm |
| Middle | 2.644 mm | 3.910275 mm | 4.536 mm | 3.269725 mm | +1.266275 mm |
| Telephoto | 3.179 mm | 5.243406 mm | 4.001 mm | 1.936594 mm | +2.064406 mm |

This table is a data-file construction model, not a patent-published close-focus table. The model keeps the image plane fixed and moves G3 image-side until the first-order conjugate distance corresponds to Nikon's official 0.22 m closest focus distance from the focal plane. The telephoto state gives a paraxial reproduction ratio of approximately 0.172x, which is consistent with the official 0.17x value.

## Aspherical Surfaces

Example 2 has three aspherical surfaces. The two front aspheres are composite resin surfaces on L11 and L12. The rear asphere is the image-side surface of L41.

| Patent surface | Data-file label | Element | Construction |
|---|---|---|---|
| 3 | `3A` | L11 | Image-side surface of resin layer on first negative meniscus. |
| 4 | `4A` | L12 | Object-side surface of resin layer on second negative meniscus. |
| 26 | `26A` | L41 | Image-side surface of rear positive meniscus. |

The patent's sag equation writes the conic term as `sqrt(1 − κ y²/R²)`. The project data format uses `sqrt(1 − (1+K)(y/R)²)`. The conversion used in the data file is therefore **K = κ − 1**.

| Data surface | R (mm) | Patent κ | Standard K | A4 | A6 | A8 | A10 | A12 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| `3A` | 12.80980 | 0.039 | -0.961 | -1.10E-05 | -2.98E-08 | 1.59E-10 | 2.68E-13 | 0.00E+00 |
| `4A` | 38.72530 | 0.208 | -0.792 | -3.60E-06 | 8.87E-08 | 2.10E-10 | -2.30E-13 | 0.00E+00 |
| `26A` | -34.60170 | 1.000 | 0.000 | 5.66E-05 | 5.08E-08 | -2.05E-09 | 3.50E-11 | 0.00E+00 |

The data file does not claim manufacturer clear-aperture semi-diameters because Table 2 does not publish them. The listed semi-diameters are conservative rendering apertures constrained by ray envelopes, edge thickness, and cross-gap sag, especially for the thin composite resin layer on L12.

## Image Stabilization

The patent identifies L23 as the vibration-reduction group. It is a weak positive meniscus in G2, placed immediately before the aperture stop, and it is movable perpendicular to the optical axis to correct image displacement caused by camera shake.

The production lens is officially VR-equipped, and Nikon specifies a 3.5-stop CIPA-equivalent effect at the telephoto end. The patent does not provide a numerical L23 decenter table for Example 2, so the data file keeps L23 centered and models only the ordinary rotationally symmetric prescription.

## Conditional Expressions

Example 2's conditional-expression table focuses on L13. The relevant values are:

| Condition item | Table 2 value |
|---|---:|
| `fN1` for L13 | -56.709 mm |
| `ndN1 − (2.015 − 0.0068 × νdN1)` | 0.041 |
| `νdN1` | 54.80 |
| `θgFN1` | 0.5501 |
| `θgFN1 − (0.6418 − 0.00168 × νdN1)` | 0.0004 |
| `(-fN1) / f` at the wide end | 5.500 |
| `DN1` | 1.300 mm |

The table also repeats the same L13 values under the `N3` notation for the object-side negative-lens-group formulation. That duplication is patent-claim structure, not a separate physical element.

## Data File Construction Notes

The data file transcribes the Table 2 prescription directly, with no focal-length scaling. The patent's surface 17 is labeled `STO`, and aspherical surfaces 3, 4, and 26 are labeled `3A`, `4A`, and `26A`. The virtual surface 11 is retained with R = infinity and an air spacing of 1.100 mm.

The aperture stop semi-diameter in the data file is **4.846 mm**. This value was chosen from the paraxial entrance-pupil calculation to reproduce the patent FNO values of 4.625, 5.233, and 5.828 to rounding across the zoom range. The displayed `nominalFno` values use the manufacturer-marketed f/4.5-5.6 range rather than the patent's slightly slower design FNO values.

The production lens has 14 glass elements. The data file has 16 element records because the two molded resin layers on L11 and L12 must be modeled as separate optical materials. This is a data-modeling distinction, not a change to the production element count.

## Verification Summary

A y-u paraxial ray trace was run from the Table 2 prescription using the patent sign convention. The final back focal distance was excluded from the system matrix and solved from the resulting ABCD matrix.

| Zoom position | Patent EFL | Calculated EFL | Patent BF | Calculated BF | Patent TL | Summed TL |
|---|---:|---:|---:|---:|---:|---:|
| Wide | 10.310 mm | 10.309930 mm | 38.107 mm | 38.108103 mm | 127.176 mm | 127.176 mm |
| Middle | 14.992 mm | 14.992218 mm | 45.676 mm | 45.676731 mm | 118.440 mm | 118.440 mm |
| Telephoto | 19.394 mm | 19.393966 mm | 53.470 mm | 53.471325 mm | 118.247 mm | 118.247 mm |

The 0.001 mm-level BF differences are consistent with printed prescription rounding. The summed total-track values match the patent to the printed precision.

The recomputed group focal lengths also match the patent group table:

| Group | Patent focal length | Calculated focal length |
|---|---:|---:|
| G1 | -16.381 mm | -16.381291 mm |
| G2 | +24.075 mm | +24.075281 mm |
| G3 | -53.290 mm | -53.288490 mm |
| G4 | +70.213 mm | +70.213217 mm |

The surface-by-surface Petzval sum, calculated as `Σ[(n' − n)/(R n n')]`, is **+0.0084549 mm^-1**, corresponding to a Petzval radius of about **-118.27 mm** under this sign convention. This is a first-order curvature check, not a prediction of final sagittal or meridional image curvature.

## Sources and References

Primary patent source: WO2021039813A1, Nikon Corporation; text-searchable equivalent US20220269056A1, especially Example 2 / Table 2, the aspherical-surface data, the variable-spacing table, the group-focal-length table, and the conditional-expression table.

Production and design-history sources: Nikon Imaging product page for the AF-P DX NIKKOR 10-20mm f/4.5-5.6G VR; Nikon Imaging, *NIKKOR - The Thousand and One Nights No. 90*.

Catalog references used as equivalence labels: Hikari, Hoya, and Schott-family optical-glass catalog conventions. The file leaves unresolved glasses explicitly marked as unmatched rather than assigning speculative commercial names.
