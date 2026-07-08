## Patent Reference and Design Identification

**Patent:** WO 2021/085655 A1
**Application Number:** PCT/KR2019/014232
**Filed:** 28 October 2019
**Published:** 6 May 2021
**Inventor:** Kim, Moon-Kyung
**Applicant:** Samyang Optics Co., Ltd.
**Title:** Lens Optical System
**Embodiment analyzed:** Example 3 / lens optical system 300, Table 5 and Table 6

WO 2021/085655 A1 discloses three telephoto-type large-aperture embodiments. Example 3, the optical system numbered 300 in Figure 5 and tabulated in Tables 5-6, is the production-relevant prescription for the original Samyang AF 85mm F1.4 FE.

The identification rests on convergent evidence. Example 3 is an 11-element, 8-group design, matching Samyang's published construction for the AF 85mm F1.4 FE. It contains four high-index / HR-class elements and one ED fluorophosphate element, again matching the manufacturer's 4 HR + 1 ED specification. The patent Table 6 values give $f = 84$ mm, $F/1.47$, a 14.46° half-field, 0.90 m close focus, and 0.1128x close-focus magnification. These correspond to the production lens's marketed 85 mm f/1.4 specification, 28.9° full-frame angle of view, 0.90 m minimum focusing distance, and 0.11x maximum magnification.

The later AF 85mm F1.4 FE II has the same public element/group and special-element count, but the present transcription is assigned to the original FE version because Table 6 gives the original lens's 0.90 m / 0.11x close-focus specification. The FE II's 0.85 m / 0.12x close-focus specification is not represented by Table 6.

## Optical Architecture

The lens is a positive-negative-positive telephoto-type internal-focus design. The patent calls it a telephoto-type system because the second lens group is negative and performs focusing while the first and third groups remain fixed (¶44-48, ¶51). In strict layout terms, the optical track from the first lens vertex to the image plane is longer than the 84.0 mm effective focal length, so it should not be described as a short-track telephoto in the Kingslake sense. Its telephoto behavior is instead architectural: a positive front group, a single negative moving group, and a positive rear relay group.

G310 is the fixed front group. It contains L1, the cemented L2+L3 doublet, and L4. It has a computed paraxial focal length of +59.14 mm. Its role is to collect the large f/1.4 cone and provide the main positive power while the cemented ED/flint doublet supplies the primary axial-color correction.

G320 is the focusing group. It is a single negative meniscus element, L5, with a computed focal length of -47.10 mm. From infinity to 0.90 m it moves 5.053 mm toward the image side. The patent's purpose statement is specifically tied to reducing the mass of this moving group so that autofocus speed can be improved (¶46-48, ¶71).

G330 is the fixed rear group. It contains the cemented L6+L7 doublet, the cemented L8+L9 doublet, L10, and L11. It has a computed paraxial focal length of +65.12 mm. This group relays the converging beam to the image plane and carries much of the correction for lateral color, astigmatism, field curvature, and rear-surface ghosting. The last element, L11, is a negative meniscus with a convex image-side surface; the patent describes this rear convexity as a ghost-reduction measure near the sensor cover glass (¶60-61, ¶64).

All refracting surfaces in Example 3 are spherical. This agrees with the patent's statement that the lenses in the embodiment may all be spherical (¶55).

## Element-by-Element Analysis

### L1 - Positive meniscus, convex to object

nd = 2.00069, νd = 25.46. Glass: TAFD40 (HOYA) / H-ZLaF90 class - HR dense flint. f = +76.92 mm.

L1 is a high-index positive meniscus and is the first element of G310. The 2.00069 refractive index allows substantial positive power at moderate axial thickness, but its low Abbe number places it firmly in dense-flint territory rather than crown territory. The computed standalone in-air focal length is +76.92 mm. In group context it forms the opening collector that establishes the large entrance pupil required by the f/1.4 design.

The patent describes the first element of the first group as a positive meniscus (¶42-43, ¶64). That is consistent with the numerical radii, R1 = +58.93 mm and R2 = +235.051 mm.

### L2 + L3 - Cemented ED / dense-flint doublet

L2: nd = 1.49700, νd = 81.61. Glass: FCD1 (HOYA) / S-FPL51 class - ED fluorophosphate crown. f = +80.91 mm.

L3: nd = 1.84666, νd = 23.78. Glass: FDS90 (HOYA) / S-TIH53 class - dense flint. f = -35.25 mm.

Cemented net focal length: -75.69 mm.

This doublet is the primary chromatic-correction element in the front group. L2 is the only ED-class element in Example 3; L3 is a high-dispersion dense flint. Their Abbe-number separation is |81.61 - 23.78| = 57.83, satisfying the patent's fourth condition, $35 \leq |G2V - G3V| \leq 65$ (¶84-89).

The cemented interface is flat. That reduces centering sensitivity and manufacturing complexity, while the doublet still supplies a net negative contribution inside the otherwise positive front group. The negative net power is significant: it helps correct axial color without allowing the front group Petzval contribution to become excessive.

### L4 - Positive meniscus, convex to object

nd = 1.77250, νd = 49.62. Glass: S-LAH66 (OHARA) / TAF1 (HOYA) class - lanthanum flint. f = +54.44 mm.

L4 is the strongest standalone positive element in G310. Its Abbe number is just below the conventional νd = 50 crown/flint boundary, so it is better described as a lanthanum flint than as a lanthanum crown. The element's computed in-air focal length is +54.44 mm.

Placed behind the L2+L3 doublet, L4 restores strong positive power after the achromatizing negative doublet. Its meniscus form, R6 = +35.905 mm and R7 = +225.077 mm, keeps the rear surface relatively weak and helps moderate the high-angle marginal rays before they reach the single-element focus group.

### L5 - Negative meniscus focusing element, G320

nd = 1.71300, νd = 53.94. Glass: LAC8 (HOYA) / S-LAL8 class - lanthanum crown. f = -47.10 mm.

L5 is the only moving element. It has a weakly curved object-side surface, R8 = +656.333 mm, and a much stronger image-side surface, R9 = +31.93 mm. The resulting element is a negative meniscus whose power is concentrated mainly at the rear surface.

The patent allows the second group to be plano-concave or biconcave in form and states that the strong negative power reduces focus travel (¶48). The Table 7 group focal length is -46.897 mm; the independent paraxial calculation from the rounded Table 5 prescription gives -47.10 mm. The difference is 0.20 mm and is attributable to published-table rounding.

The lanthanum-crown glass choice is notable because negative focus elements often use flint glasses. Here the crown-type dispersion helps limit focus-induced chromatic change as the two surrounding air gaps vary during focusing.

### L6 + L7 - First rear-group cemented doublet

L6: nd = 1.75520, νd = 27.53. Glass: E-FD4 (HOYA) / S-TIH4 class - dense flint. f = -26.43 mm.

L7: nd = 1.71300, νd = 53.94. Glass: LAC8 (HOYA) / S-LAL8 class - lanthanum crown. f = +23.31 mm.

Cemented net focal length: +148.33 mm.

This doublet sits immediately behind the stop. L6 is a strong negative flint meniscus; L7 is a strong positive biconvex lanthanum-crown element. Together they form a weakly positive relay-correction group.

The flint-before-crown order is a conventional achromatizing arrangement in a converging beam. It helps remove residual lateral color after the stop without adding much net positive power, which is why the cemented group focal length is much longer than either component's standalone focal length.

### L8 + L9 - Second rear-group cemented doublet

L8: nd = 1.75520, νd = 27.53. Glass: E-FD4 (HOYA) / S-TIH4 class - dense flint. f = -25.20 mm.

L9: nd = 1.92286, νd = 20.88. Glass: E-FDS1 (HOYA) / H-ZF62 class - HR very dense flint. f = +31.02 mm.

Cemented net focal length: -159.88 mm.

The second rear doublet uses two flint-family glasses rather than a crown/flint pair. The correction comes from the large refractive-index separation between nd = 1.75520 and nd = 1.92286, not from a large crown/flint Abbe contrast. The pair is weakly negative overall, which helps control field curvature and high-order spherical residuals in the rear relay.

L9 is one of the four HR-class elements in the production identification. Its very high refractive index permits positive power with a less aggressive curvature than would be needed in ordinary crown glass.

### L10 - Biconvex positive element

nd = 2.00100, νd = 29.13. Glass: TAFD55 (HOYA) / S-LAH99 class - HR dense lanthanum flint. f = +45.78 mm.

L10 is a high-index biconvex collector behind the second cemented doublet. It has a computed standalone focal length of +45.78 mm. Its rear surface, R18 = -65.755 mm, is the stronger of the two refracting surfaces and is placed before a long air space to the final meniscus.

This element is a major contributor to the compact all-spherical strategy. The very high index supplies strong bending with comparatively moderate surface curvature, reducing the burden that would otherwise be carried by an aspherical surface in many contemporary 85 mm f/1.4 designs.

### L11 - Negative meniscus, concave to object

nd = 1.94595, νd = 17.98. Glass: FDS18 (HOYA) / H-ZF88 class - HR ultra-dense flint. f = -91.09 mm.

L11 is the last refracting element before the filter / sensor-cover stack shown in the patent. Both radii are negative, R19 = -36.344 mm and R20 = -64.119 mm, giving a negative meniscus that is concave toward the object and convex toward the image.

The patent explicitly uses this orientation as a ghost-reduction measure. It states that when the last lens near a cover glass is flat or concave toward the image side, reflected light can return toward the image as ghost light, and that a convex image-side last lens surface disperses those reflections instead (¶60-61, ¶64). L11 therefore functions both as a weak negative field corrector and as a rear ghost-control element.

## Glass Identification and Selection

The glass labels below are catalog-class identifications by nd/νd code, not patent-named glass types. The patent publishes only nd and νd values. The cross-reference therefore uses the six-digit glass-code convention: the first three digits approximate $1000 n_d$ and the last three digits approximate $10 \nu_d$.

| Element |      nd |    νd |    Code | Catalog-class identification   | Role                                |
| ------- | ------: | ----: | ------: | ------------------------------ | ----------------------------------- |
| L1      | 2.00069 | 25.46 | 001-255 | TAFD40 (HOYA) / H-ZLaF90 class | HR dense flint front collector      |
| L2      | 1.49700 | 81.61 | 497-816 | FCD1 (HOYA) / S-FPL51 class    | ED fluorophosphate crown            |
| L3      | 1.84666 | 23.78 | 847-238 | FDS90 (HOYA) / S-TIH53 class   | dense-flint achromatizing partner   |
| L4      | 1.77250 | 49.62 | 773-496 | S-LAH66 (OHARA) / TAF1 (HOYA) class | lanthanum flint positive element    |
| L5, L7  | 1.71300 | 53.94 | 713-539 | LAC8 (HOYA) / S-LAL8 class     | lanthanum crown focus / relay glass |
| L6, L8  | 1.75520 | 27.53 | 755-275 | E-FD4 (HOYA) / S-TIH4 class    | dense-flint relay correction        |
| L9      | 1.92286 | 20.88 | 923-209 | E-FDS1 (HOYA) / H-ZF62 class   | HR very dense flint                 |
| L10     | 2.00100 | 29.13 | 001-291 | TAFD55 (HOYA) / S-LAH99 class  | HR dense lanthanum flint            |
| L11     | 1.94595 | 17.98 | 946-180 | FDS18 (HOYA) / H-ZF88 class    | HR ultra-dense flint rear corrector |

Four elements have nd >= 1.9: L1, L9, L10, and L11. This matches Samyang's four-HR-element public specification. The design's dependence on high-index flint glass is substantial; seven of the eleven elements have νd < 50. This is the principal mechanism that allows an all-spherical f/1.4 design to remain compact.

The single ED element is L2. It is paired directly with L3 in the cemented doublet, giving an Abbe differential of 57.83. That falls inside the patent's prescribed range and is the central axial-color correction mechanism. The rest of the design distributes residual chromatic control through rear-group doublets rather than attempting an apochromatic layout. No partial-dispersion data is published in the patent, so the design should be described as achromatically corrected, not as apochromatic.

The surface-by-surface Petzval sum, computed as $\sum \phi/(n n')$, is +0.0013456 mm^-1. The corresponding Petzval radius is about 743 mm. This is a weak positive Petzval curvature for an f/1.4 full-frame portrait lens and is consistent with the patent's high-average-index condition. The average d-line index of all 11 elements is 1.81119, giving $1/n_{av} = 0.55212$.

The patent does not publish clear-aperture semi-diameters. During the second review, the inferred SDs in the data file were reduced at the tight S2-S3, S5-S6, and S13-S14 air gaps so that signed cross-gap sag intrusion remains below 90% of the listed air gap and each element's front/rear SD ratio remains at or below 1.25. These SDs should be read as renderer-safe clear-aperture estimates, not as patent-published mechanical aperture data.

## Focus Mechanism

Focusing is by single-element inner focus. G310 and G330 remain fixed, while G320 / L5 moves toward the image side from infinity to the 0.90 m close-focus position. The patent values and independent trace are consistent with a 5.053 mm focus stroke.

| Quantity                          |    Infinity | 0.90 m close focus |                 Change |
| --------------------------------- | ----------: | -----------------: | ---------------------: |
| D1, G310-to-G320 gap              |  1.94373 mm |         6.99684 mm |            +5.05311 mm |
| D2, G320-to-stop gap              |  9.91877 mm |         4.86565 mm |            -5.05312 mm |
| D1 + D2                           | 11.86250 mm |        11.86249 mm | approximately constant |
| Patent physical D3 after filter   |    0.030 mm |           0.033 mm |              +0.003 mm |
| Patent in-air BFD from surface 20 |   16.854 mm |          17.045 mm |              +0.191 mm |
| Magnification                     |           0 |            0.1128x |                      - |

The data file omits the patent's filter / cover-glass plate, as required by the project data specification. It therefore folds the rear optical path into the final surface-20 air gap and uses the patent's `in Air` BFD row: 16.854 mm at infinity and 17.045 mm at the close-focus position.

The Table 6 physical D3 row changes by only 0.003 mm, while the filter-excluded `in Air` row changes by 0.191 mm. A finite-conjugate paraxial trace at D0 = 784 mm reproduces the close-focus image only with the `in Air` value of about 17.045 mm. The close-focus physical D3 row is therefore not interchangeable with the filterless BFD used in the data file.

## Conditional Expressions

The patent states four design conditions. Example 3 satisfies all four when calculated from the Table 5 / Table 6 data.

Expression 1:

$$-0.15 \leq \frac{D_f}{f_2} \leq -0.05$$

The focus travel is $D_f = 5.053$ mm. Table 7 gives $f_2 = -46.897$ mm; the independent paraxial calculation from the rounded prescription gives -47.10 mm. Using Table 7 values, $D_f/f_2 = -0.1077$, matching the patent. The condition is satisfied.

Expression 2:

$$0.8 \leq \frac{D_{total}}{f} \leq 1.3$$

The WIPO publication renders the upper limit as `0.13`, but all three examples in Table 7 have ratios near 1.05-1.17. The intended value is therefore 1.3. Example 3 gives $D_{total} = 98.2917$ mm and $f = 84$ mm, so $D_{total}/f = 1.17014$. The condition is satisfied.

Expression 3:

$$0.53 \leq \frac{1}{n_{av}} \leq 0.58$$

The computed average refractive index is $n_{av} = 1.81119$, so $1/n_{av} = 0.55212$. The condition is satisfied.

Expression 4:

$$35 \leq |G2V - G3V| \leq 65$$

The second and third lenses in G310 are L2 and L3. Their Abbe numbers are 81.61 and 23.78, so $|G2V - G3V| = 57.83$. The condition is satisfied.

## Verification Summary

The prescription was re-entered from the patent Table 5 raster image and checked by an independent paraxial y/ν ray trace. The filter / cover-glass plate in surfaces 21-22 was excluded from the data file and represented only by the folded `in Air` BFD row.

| Quantity                  |  Computed / used |  Patent value | Comment                                                                              |
| ------------------------- | ---------------: | ------------: | ------------------------------------------------------------------------------------ |
| System EFL at infinity    |        83.996 mm |         84 mm | matches Table 6                                                                      |
| Design f-number           |           F/1.47 |        F/1.47 | stop semi-diameter set to 15.745 mm in the data file                                 |
| Patent STOP row           |        16.097 mm |     16.097 mm | consistent with the inconsistent text value f = 85.86 mm, not with Table 6 f = 84 mm |
| Half-field at infinity    |           14.46° |        14.46° | matches Table 6                                                                      |
| Focus travel              |         5.053 mm |      5.053 mm | matches Table 7                                                                      |
| G320 focal length         |        -47.10 mm |    -46.897 mm | 0.20 mm difference from rounded prescription                                         |
| G310 focal length         |        +59.14 mm | not tabulated | independent paraxial result                                                          |
| G330 focal length         |        +65.12 mm | not tabulated | independent paraxial result                                                          |
| Dtotal                    |       98.2905 mm |    98.2917 mm | rounding-level agreement                                                             |
| nav                       |          1.81119 |       1.81119 | exact from listed nd values                                                          |
| 1/nav                     |          0.55212 |       0.55212 | matches Table 7                                                                      |
| Petzval sum               | +0.0013456 mm^-1 | not tabulated | surface-by-surface formula                                                           |
| Petzval radius            |           743 mm | not tabulated | reciprocal of Petzval sum                                                            |
| Close-focus magnification |         0.11275x |      0.11281x | using D0 = 784 mm and in-air BFD = 17.045 mm                                         |
| Semi-diameter constraints |          checked | not published | revised SDs keep max signed cross-gap sag intrusion below 90% and element SD ratios <= 1.25 |

The patent prose at ¶112 gives `f = 85.86 mm` for Example 3, while Table 6 and Table 7 give `f = 84`. The independent paraxial trace supports the tabulated 84 mm value. The `f = 85.86 mm` prose value is therefore a text-level inconsistency, not the prescription focal length.

## Sources

- WO 2021/085655 A1, _Lens Optical System_, Samyang Optics Co., Ltd., PCT/KR2019/014232, published 6 May 2021. Example 3, Figure 5, Table 5, Table 6, and Table 7.
- Samyang Optics, AF 85mm F1.4 FE product page: https://www.lksamyang.com/en/product/product-view.php?seq=418
- Samyang Optics, AF 85mm F1.4 FE II product page: https://www.lksamyang.com/en/product/product-view.php?seq=588
- HOYA Optical Glass Cross Reference Index: https://www.hoya-opticalworld.com/english/products/crossreference.html
