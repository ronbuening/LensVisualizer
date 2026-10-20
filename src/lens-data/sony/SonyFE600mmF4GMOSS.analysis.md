# Sony FE 600mm F4 GM OSS — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** JP 2025-063175 A (特開2025-63175)
**Application Number:** 特願2025-4775
**Filed:** 2025-01-14 (divisional of 特願2021-524834, originally filed 2020-06-01)
**Priority:** JP 2019-104612, 2019-06-04
**Published:** 2025-04-15
**Inventor:** Riki Maruyama (丸山 理樹)
**Applicant:** Sony Group Corporation
**Title:** 光学系および撮像装置 (Optical system and imaging apparatus)
**Embodiment analyzed:** Example 4 (実施例4) — Tables 10–12, Fig. 13

JP 2025-063175 A gives eleven numerical examples (¶0015) of a telephoto built from three groups: a fixed positive front group GR1, an axially moving focus group GR2, and a fixed rear group GR3 that is split into GR3a, an image-stabilizing GR3b, and GR3c (¶0006, ¶0018–¶0021). The stated objective is a lens that is light, with its centre of gravity close to the camera, and whose chromatic aberration is controlled across the frame (¶0014, ¶0026). Example 4 prints a focal length of f = 581.97 mm, Fno = 4.12, half-field ω = 2.11°, image height Y = 21.633 mm, optical length L = 455.32 mm, and back focus BF = 39.18 mm (Table 11).

The data file transcribes Example 4 without scaling. The correlation with the Sony FE 600mm F4 GM OSS (SEL600F40GM) is a research inference, not manufacturer confirmation. The convergent evidence is:

1. **Element and group count.** Example 4 has 23 elements in 17 air-separated groups. Sony specifies 24 elements in 18 groups "including one filter", consistent with the patent count plus the slip-in filter that the patent table does not list.
2. **Aperture and field.** The printed Fno 4.12 and 2ω = 4.22° correspond to Sony's maximum aperture F4 and full-frame angle of view 4°10′.
3. **Focal length.** The printed design focal length of 581.97 mm is 3.0 % shorter than the marketed 600 mm.
4. **Close focus.** Example 4's second published state is 4.5 m, which equals Sony's minimum focus distance. Solving that state places the object 4.484 m from the image plane, so the patent's 4.5 m is consistent with an image-plane reference. The paraxial magnification at that state is −0.136, against Sony's marketed 0.14×.
5. **Mechanism.** A single cemented positive doublet focuses internally while the front and rear groups stay fixed (¶0109). A transversely moving rear subgroup provides stabilization (¶0021), consistent with Sony's Optical SteadyShot.
6. **Timing.** The priority date, 2019-06-04, precedes the lens's announcement on 2019-06-11 by one week.

The production lens adds an XA (extreme aspherical) element and a third fluorite element that this all-spherical example lacks. Every example in this publication is all-spherical. Example 4 has two elements at the crystalline-CaF₂ nd/νd (L12, L14) and a third ultra-low-dispersion positive element (L16) whose nd/νd match the fluorophosphate glass HOYA FCD100 rather than fluorite. Sony's construction diagram also marks two ED elements in the rear group; in Example 4 the matching low-dispersion positions are plausibly L34 (497816 class) and L40 (FCD515), an inference rather than a published identity. Example 9 of the same publication (f = 581.9 mm, Fno 4.12, 4.5 m) does carry three CaF₂-class elements, but its optical length of 470.00 mm would place the front vertex about 452 mm ahead of the E-mount flange, longer than the 449 mm barrel, and it focuses with a single element where Sony's diagram appears to show two in the focus-group position. Example 4, about 437 mm ahead of the flange with a two-element focus group, is therefore treated as the closest published design-family counterpart: it shares the production lens's architecture, element count and focus range, but differs from it in at least the asphere and the allocation of fluorite.

## Optical Architecture

Example 4 is a three-group telephoto with group powers positive / positive / negative, which the patent states for this example (¶0109–¶0110). The computed standalone group focal lengths are:

- GR1, L11–L17: +520.21 mm
- GR2, L21+L22: +176.54 mm
- GR3, L31–L44: −46.65 mm. Within GR3, GR3a is −194.05 mm, GR3b is −59.94 mm, and GR3c is +87.93 mm.

The aperture stop lies between GR3a and GR3b, as the patent prefers (¶0022).

The paraxial effective focal length of the transcribed prescription is 582.09 mm, against the printed 581.97 mm; the difference is within the rounding of the printed radii, spacings and indices. With the printed back focus, the front-vertex-to-image length is 455.34 mm, against the printed 455.32 mm. This gives a telephoto ratio of 0.782 at infinity. The rear principal plane lies 126.78 mm in front of the first vertex, outside the lens.

The telephoto action can be read as a chain of magnifications. GR1 alone forms an image at f = 520.21 mm. GR2 magnifies it by 0.498, and the negative GR3 then magnifies it by 2.248, giving 582.09 mm overall. The patent's design argument rests on three features (¶0027–¶0029):

- **A long front air space.** The largest air space in GR1, between L11 and L12 (¶0108), is 173.23 mm, or 0.298 f. Placing a single moderately powered positive element far ahead of the rest of GR1 lets the elements behind it be smaller. The paraxial marginal ray at the f/4.12 entrance-pupil radius falls from 70.64 mm at L11 to 42.03 mm at L12.
- **A stabilizing group near the image.** GR3b is moved rearward, where the axial bundle is narrow: its first vertex lies 0.1735 f from the image.
- **A strong GR3c near the image.** GR3c sits close to the image, at roughly the position symmetric to GR1, and the patent assigns it the task of cancelling aberrations generated in GR1 (¶0029).

The patent publishes neither a stop diameter nor any semi-diameters. The data file's stop semi-diameter of 16.506 mm is a calibration: it is the paraxial value that reproduces the printed Fno 4.12 at the transcribed focal length, and it is not independent evidence of the diaphragm size. A real ray at the f/4.12 entrance-pupil radius crosses the stop plane at 16.75 mm.

All other semi-diameters are modeled from exact meridional ray envelopes and then limited by edge-thickness and gap rules. L11's semi-diameter of 76.0 mm acts as the off-axis vignetting aperture and agrees with the proportions of Fig. 13 (lower rim ≈ 76.1 mm). The rear-group rims follow Fig. 13 as well: the figure draws L36 through L39 at about 12.8 mm and the rims rising again to 15.0 mm at L44, and the model uses those heights. The figure also draws L35 taller than L36, touching L34 at the rim. The model cannot show that, because L35's front face meets L34's rear face at a height of 13.55 mm, so L35 stays at 12.8 mm.

**A limitation of the printed geometry, retained as a documented exception.** As printed, Example 4 cannot pass its own f/4.12 axial beam through physically realizable elements:

- **S4 and S5.** The rear surface of L12 (R = −217.05 mm) and the front surface of L13 (R = −202.53 mm) are 0.22 mm apart on axis and intersect at h = 36.09 mm. At infinity, the f/4.12 beam reaches about 40.8 mm there; this is the real-ray value, and the bundle that fills the modeled stop reaches about 40.2 mm.
- **L21.** The focus-group positive element L21 is 7.23 mm thick and reaches zero edge thickness at h = 28.68 mm. At the 4.5 m state the f/4.12 bundle needs 29.1 mm on the real-ray definition. The bundle that fills the modeled stop needs 28.68 mm, which would leave only a 0.003 mm edge.

The values match the table image, and the prescription reproduces the printed focal length and every printed conditional value. A single misprint that separated S4 and S5 (R5 = −205.23 mm, or d4 = 1.22 mm) would shift the focal length by about 34 mm, so the near-contact is a property of the published design rather than an error. The data file therefore keeps the printed Fno 4.12, which also matches Sony's marketed F4, as its nominal aperture. It caps S4/S5 at a 34.2 mm semi-diameter, leaving an axial air clearance of only 0.023 mm at the rim, and caps L21/L22 at 27.6 mm. In consequence, the modeled lens vignettes on axis: the largest unvignetted axial bundle at infinity corresponds to about f/4.89. Readers should treat the viewer's on-axis clipping at these two locations as a property of the printed Example 4 geometry, not of the production lens. The production lens differs at least in its XA asphere, and nothing about its front-group geometry is published.

The surface-by-surface Petzval sum, multiplied by the focal length, is −0.109 (Petzval radius 5363 mm). Its distribution by group is uneven:

| Group | Petzval contribution × f |
|---|---|
| GR1 | +1.239 |
| GR2 | +1.962 |
| GR3a | −2.459 |
| GR3b | −6.834 |
| GR3c | +5.982 |

The negative stabilizing group and the positive GR3c largely offset each other's contributions.

## Element-by-Element Analysis

Focal lengths below are standalone thick-lens values in air. Cemented elements are listed individually, and their net powers are given with each pair. Glass names are catalog glasses that match the printed nd/νd, used for spectral modeling; they do not establish the supplier (see Glass Identification).

### GR1 — Fixed front group (L11–L17)

#### L11 — Biconvex Positive

nd = 1.59270, νd = 35.31. Glass: S-FTM16 (OHARA), catalog match. f = +448.06 mm.

L11 is the front collector. Its rear radius (−33648.24 mm) makes it nearly plano-convex. It is the only element ahead of the 173.23 mm air space that defines condition (2), so it carries the full entrance beam and is the modeled off-axis vignetting aperture. Its glass is a light flint, not a crown. Because L11 is a positive flint at the largest marginal-ray height, its first-order axial-colour contribution is −21.27 mm, the largest of the positive elements in GR1. In this element-wise F–C split, a positive value means that element pushes the F-line focus behind the C-line focus. The patent text does not comment on L11's material.

#### L12 — Biconvex Positive

nd = 1.43385, νd = 95.23. Glass: CaF2 optical fluorite crystal, class (supplier unconfirmed). f = +252.09 mm.

L12 is a symmetric biconvex element (R = ±217.05 mm) behind the long front air space. It is one of the condition (4)/(5) positive lenses: νd > 90, with a θgF deviation of 0.0619 above the patent's reference line. These conditions address primary and secondary colour (¶0032–¶0033). Its rear surface is the S4 of the geometry limitation described above.

#### L13 — Biconcave Negative

nd = 1.85478, νd = 24.80. Glass: S-NBH56 (OHARA), catalog match. f = −157.07 mm.

L13 is a high-index dense-flint negative element that nearly touches L12. It satisfies conditions (10) and (11): νd < 35, and a θgF deviation of only 0.0086, below the 0.010 limit. The patent states that exceeding condition (11) leaves secondary colour under-corrected (¶0052–¶0053); in effect, the negative partners of the fluorite-class positives must keep their partial dispersion close to the normal line. L13 is the strongest single source of overcorrected axial colour in the system, contributing +27.91 mm in the element-wise split.

#### L14 — Biconvex Positive

nd = 1.43385, νd = 95.23. Glass: CaF2 optical fluorite crystal, class (supplier unconfirmed). f = +207.28 mm.

L14 is the second CaF₂-class positive element and the strongest positive element in GR1. Like L12, it satisfies conditions (4)/(5).

#### L15 — Biconcave Negative

nd = 1.85478, νd = 24.80. Glass: S-NBH56 (OHARA), catalog match. f = −232.15 mm.

L15 repeats L13's material and role at lower power; it also satisfies conditions (10)/(11). L14 and L15 together form the second fluorite-class / dense-flint pair of the front group.

#### L16 — Positive Meniscus

nd = 1.43700, νd = 95.10. Glass: FCD100 (HOYA), catalog match. f = +233.84 mm.

L16 is a meniscus convex to the object and the third condition (4)/(5) positive element, with a θgF deviation of 0.0564. Its printed nd and νd match HOYA FCD100 (catalog distance 0.00001), and FCD100's catalog θgF of 0.5336 lies 0.0002 above the printed 0.5334. That makes it a fluorophosphate glass, not the crystalline-fluorite coordinate of L12 and L14.

#### L17 — Negative Meniscus

nd = 1.51680, νd = 64.20. Glass: H-K9L (CDGM), catalog match; 517642 (BK7 class). f = −253.33 mm.

L17 is a weak crown meniscus, convex to the object, that closes GR1 ahead of the variable gap d14.

### GR2 — Cemented focus doublet (L21+L22), net f = +176.54 mm

#### L21 — Biconvex Positive

nd = 1.59270, νd = 35.31. Glass: S-FTM16 (OHARA), catalog match. f = +99.22 mm.

#### L22 — Biconcave Negative

nd = 1.51680, νd = 64.20. Glass: H-K9L (CDGM), catalog match; 517642 (BK7 class). f = −218.03 mm.

GR2 is a single cemented doublet, which is the arrangement the patent recommends for a light, fast-AF focus group (¶0059). It reverses the usual achromat arrangement: the positive member is the flint (νd 35.31) and the negative member is the crown (νd 64.20). As a result, the doublet as a whole adds axial colour of the same sign as a simple positive lens: −8.08 mm in the group-level F–C split. That partly balances the net +13.33 mm of GR1, whose dense-flint negatives dominate. L21 is also the element whose edge geometry limits the close-focus axial bundle, as described in Optical Architecture.

### GR3a — Fixed cemented doublet ahead of the stop (L31+L32), net f = −194.05 mm

#### L31 — Biconvex Positive

nd = 1.71736, νd = 29.50. Glass: S-TIH1 (OHARA), catalog match; 717295 class. f = +139.58 mm.

#### L32 — Biconcave Negative

nd = 1.48749, νd = 70.44. Glass: H-QK3L (CDGM), catalog match; 487704 (FC5 class). f = −79.77 mm.

GR3a is a weak negative doublet just ahead of the stop, again with the flint as the positive member. Its 45.71 mm rear radius faces the stop. The patent gives GR3a, together with GR3c, the role of compensating aberration changes when GR3b decentres (¶0028).

### GR3b — Image-stabilization group (L33+L34, L35), f = −59.94 mm

#### L33 — Biconvex Positive

nd = 1.85478, νd = 24.80. Glass: S-NBH56 (OHARA), catalog match. f = +69.40 mm.

#### L34 — Biconcave Negative

nd = 1.49700, νd = 81.61. Glass: FCD1 (HOYA), catalog match; 497816 class. f = −69.23 mm.

The L33+L34 cemented pair is almost afocal (net f = +2552.61 mm) but not achromatic. Its positive member is the dense flint and its negative member a low-dispersion (497816-class) glass, so the pair adds almost no power yet contributes −4.27 mm of axial colour in the element-wise split (L33 −5.97 mm, L34 +1.70 mm). The patent prints no θgF for L33 or L34, so no partial-dispersion value is assigned to them.

#### L35 — Biconcave Negative

nd = 1.77250, νd = 49.62. Glass: J-LASF016 (HIKARI), catalog match; 773496 class. f = −56.75 mm.

L35 supplies almost all of GR3b's negative power. Its role in stabilization is discussed under Image Stabilization.

### GR3c — Fixed rear group (L36–L44), f = +87.93 mm

#### L36 — Positive Meniscus

nd = 1.58144, νd = 40.89. Glass: E-FL5 (HOYA), catalog match; 581409 class. f = +63.21 mm.

#### L37 — Biconvex Positive

nd = 1.58144, νd = 40.89. Glass: E-FL5 (HOYA), catalog match; 581409 class. f = +56.63 mm.

L36 and L37 are two positive light-flint elements that begin the positive power of GR3c. The axial marginal ray leaves GR3b nearly parallel to the axis: its height changes only from 11.21 mm at L35 to 11.07 mm at L36.

#### L38 — Biconcave Negative

nd = 1.95375, νd = 32.32. Glass: TAFD45 (HOYA), catalog match. f = −18.21 mm.

#### L39 — Biconvex Positive

nd = 1.59270, νd = 35.31. Glass: S-FTM16 (OHARA), catalog match. f = +28.88 mm.

The L38+L39 cemented pair (net f = −55.38 mm) joins a very high-index negative element to a light flint across a strongly curved 21.00 mm interface. With an index step from 1.95375 to 1.59270, that interface has a refracting power of −0.01719 mm⁻¹, the strongest negative cemented interface in the lens.

#### L40 — Biconcave Negative

nd = 1.59282, νd = 68.63. Glass: FCD515 (HOYA), catalog match. f = −24.65 mm.

#### L41 — Positive Meniscus

nd = 1.68893, νd = 31.16. Glass: E-FD8 (HOYA), catalog match. f = +36.10 mm.

In the L40+L41 cemented pair (net f = −69.52 mm), the negative element is a low-dispersion anomalous glass: its θgF deviation is 0.0194 above the patent line. L40 satisfies conditions (6), (8) and (9), with |f3cn/f| = 0.0423, the strongest qualifying negative lens of condition (8). Its object-side vertex lies 0.1105 f from the image.

#### L42 — Biconvex Positive

nd = 1.72047, νd = 34.71. Glass: S-NBH8 (OHARA), catalog match. f = +20.76 mm.

#### L43 — Negative Meniscus

nd = 1.92286, νd = 20.88. Glass: E-FDS1 (HOYA), catalog match; 923209 class. f = −26.73 mm.

The L42+L43 cemented pair (net f = +70.25 mm) carries the highest-dispersion glass in the design. L43 satisfies conditions (6) through (9): its θgF deviation is 0.0281, νd = 20.88 < 31, |f3cn/f| = 0.0459, and it lies 0.0788 f from the image. The patent ties this class of negative lens near the image to the correction of lateral colour, especially secondary lateral colour at the edge of the field (¶0037, ¶0049).

#### L44 — Negative Meniscus

nd = 1.92286, νd = 20.88. Glass: E-FDS1 (HOYA), catalog match; 923209 class. f = −91.61 mm.

L44 is the last element: a weak negative meniscus, concave to the object, in the same glass as L43. It satisfies conditions (6), (7) and (9), but its |f3cn/f| = 0.1574 lies outside the range of condition (8). The patent's own Table 35 shows this as well; the condition requires only one qualifying lens, which L40 and L43 provide.

## Glass Identification

Every printed nd/νd pair was compared against the OHARA, HOYA, SCHOTT, SUMITA, HIKARI and CDGM catalogs, using the distance metric √(Δnd² + (Δνd/50)²). A crystalline-CaF₂ reference (Malitson 1963) was included. An exact nd/νd match identifies a compatible glass type; it does not prove which manufacturer supplied it. For several pairs, more than one vendor offers an exact match, and the data file uses one catalog name.

| nd / νd | Elements | Data-file label | Patent θgF | ΔPgF (engine normal line) | Role |
|---|---|---|---|---|---|
| 1.59270 / 35.31 | L11, L21, L39 | S-FTM16 | — | — | Light flint; positive members |
| 1.43385 / 95.23 | L12, L14 | CaF2 (fluorite class) | 0.5387 | +0.0551 | Fluorite-class positives, conditions (4)/(5) |
| 1.85478 / 24.80 | L13, L15, L33 | S-NBH56 | 0.6122 (L13, L15) | +0.0101 | Dense-flint negatives (10)/(11); L33 positive |
| 1.43700 / 95.10 | L16 | FCD100 | 0.5334 | +0.0496 | Fluorophosphate positive, (4)/(5) |
| 1.51680 / 64.20 | L17, L22 | H-K9L (517642) | — | — | Crown negatives |
| 1.71736 / 29.50 | L31 | S-TIH1 (717295) | — | — | Dense flint, GR3a |
| 1.48749 / 70.44 | L32 | H-QK3L (487704) | — | — | Crown, GR3a |
| 1.49700 / 81.61 | L34 | FCD1 (497816) | — | — | Low-dispersion negative, GR3b |
| 1.77250 / 49.62 | L35 | J-LASF016 (773496) | — | — | Lanthanum negative, GR3b |
| 1.58144 / 40.89 | L36, L37 | E-FL5 (581409) | — | — | Light-flint positives, GR3c |
| 1.95375 / 32.32 | L38 | TAFD45 | — | — | Very high-index negative |
| 1.59282 / 68.63 | L40 | FCD515 | 0.5441 | +0.0157 | Anomalous negative, (6)/(8)/(9) |
| 1.68893 / 31.16 | L41 | E-FD8 | — | — | Flint positive partner |
| 1.72047 / 34.71 | L42 | S-NBH8 | — | — | Flint positive |
| 1.92286 / 20.88 | L43, L44 | E-FDS1 (923209) | 0.6388 | +0.0301 | Highest-dispersion negatives, (6)–(9) |

ΔPgF is measured from the normal line used by the LensVisualizer engine, 0.6438 − 0.001682 νd, and is stored on the elements where the patent prints θgF. The patent's own conditions use a different reference line, −0.001801 νd + 0.648262 (¶0032, ¶0036, ¶0052); the deviations quoted in the element sections refer to that line.

Two glasses need further comment.

- **1.43385 / 95.23 (L12, L14).** The printed nd and θgF coincide with the crystalline-CaF₂ reference, nd 1.43385 and θgF 0.5387; the printed νd lies 0.23 above the reference value. By the nd/νd metric alone, HOYA FCD100 is marginally nearer (0.00408 against 0.00468 for CaF₂), but its catalog θgF is 0.0051 below the printed value. The label is therefore the CaF₂ class, at equivalent strength rather than as an exact catalog identity. That these elements are fluorite is consistent with Sony's statement that the production lens uses fluorite; the patent itself does not name the material.
- **1.43700 / 95.10 (L16).** This is a different material. It matches FCD100 (HOYA) in nd and νd, with a catalog θgF 0.0002 above the printed value. Example 4 therefore contains two fluorite-class elements, not the three that Sony lists for the product.

## Focus Mechanism

Example 4 uses inner focus. The cemented positive GR2 moves toward the object when focusing from infinity to the near state, while GR1, GR3 and the image plane stay fixed (¶0020, ¶0109). Both states are published (Table 12):

| Gap | ∞ | 4.5 m |
|---|---|---|
| d14 (GR1 → GR2) | 51.20 mm | 31.73 mm |
| d17 (GR2 → GR3) | 9.54 mm | 29.00 mm |

GR2 travels 19.47 mm. The sum d14 + d17 changes by 0.01 mm between the two states, which is within the rounding of the printed values. Solving the near state places the object 4.484 m from the image plane (4.028 m from the first vertex), with paraxial magnification −0.136. The patent's "4.5m" is therefore consistent with an object-to-image distance.

The focus sensitivity, defined as image shift per unit GR2 displacement, is (1 − β₂²)·β_rear². Here β₂ is GR2's lateral magnification and β_rear is that of everything behind it. At infinity, β₂ = 0.498 and β_rear = 2.248, giving a sensitivity of 3.80. At the 4.5 m state, β₂ falls to 0.387 and the sensitivity rises to 4.30. With these sensitivities, the full range from infinity to 4.5 m takes 19.47 mm of GR2 travel. The patent's stated reason for a focus group of one cemented or single lens is low mass for fast AF (¶0059); Sony's drive mechanism is not described in the patent.

## Chromatic Correction Strategy

The patent assigns chromatic correction to two places:

- **GR1.** Condition (4)/(5) positive lenses with νd > 90 and strongly anomalous θgF are paired with condition (10)/(11) dense-flint negatives whose θgF lies near the normal line (¶0032–¶0033, ¶0052–¶0053).
- **GR3c.** Anomalous-dispersion negative lenses placed close to the image (conditions (6)–(9)) correct lateral colour, especially secondary lateral colour at the edge of the field (¶0036–¶0049).

The patent's ¶0029 explains why both are needed. Colour generated ahead of the long front air space grows with distance as the beam crosses it, and GR3c, near the image, cancels what GR1 generates.

A first-order calculation of primary (F–C) colour shows how the groups share the correction. It uses only nd and νd, with the paraxial marginal ray at the f/4.12 entrance-pupil radius and the chief ray at the printed ω, at infinity.

| Group | Axial colour (mm, F–C focus shift) | Lateral colour at the printed field (mm) |
|---|---|---|
| GR1 | +13.33 | −0.2464 |
| GR2 | −8.08 | +0.1767 |
| GR3a | −1.75 | +0.0163 |
| GR3b | −1.29 | −0.0163 |
| GR3c | −1.94 | +0.0636 |

The group contributions are large and nearly cancel. The total paraxial axial F–C focus shift is +0.28 mm, and the lateral F–C difference at the printed image height is −0.0064 mm.

- **Axial colour.** GR1 is net overcorrected because its two dense-flint negatives (L13 +27.91 mm, L15 +16.98 mm) outweigh its positives. The light-flint L11 (−21.27 mm) contributes more than any of the three ultra-low-dispersion positives (L12 −4.72 mm, L14 −5.29 mm, L16 −4.22 mm). The reversed GR2 doublet supplies most of the opposite-sign axial colour.
- **Lateral colour.** The GR1 contribution is offset mainly by GR2 (+0.1767 mm), with GR3c adding +0.0636 mm. In this primary-colour calculation GR3c has the smaller share; the patent's emphasis on GR3c concerns secondary lateral colour (¶0037), which a calculation based only on νd cannot assess.

These figures describe only primary colour. The patent prints θgF for just eight of the twenty-three elements, so the secondary spectrum (g–F) cannot be totalled from source data. No catalog partial dispersions are substituted for the missing values. The data file carries ΔPgF only on the eight elements with printed θgF. On that basis, the design's anomalous-dispersion content is documented, but this analysis does not assert apochromatic performance.

## Conditional Expressions

Values computed from the transcribed prescription, compared with Example 4's entries in Tables 35 and 39:

| Condition | Expression and range | Computed | Printed | Satisfied |
|---|---|---|---|---|
| (1) | L/f < 1 | 0.7823 | 0.782 | yes |
| (2) | D_g1max/f > 0.23 | 0.2976 | 0.298 | yes |
| (3) | D_3bImg/f < 0.24 | 0.1735 | 0.174 | yes |
| (4)/(5) | νd_1p > 90; θgF_1p − line > 0.04 (L12, L14 / L16) | 0.0619 / 0.0564 | 0.0620 / 0.0564 | yes |
| (6) | θgF_3cn − line > 0.008 (L40 / L43, L44) | 0.0194 / 0.0281 | 0.0194 / 0.0281 | yes |
| (7) | νd_3cn < 31 (L43, L44) | 20.88 | 20.88 | yes |
| (8) | 0 < \|f3cn/f\| < 0.15 (L40 / L43 / L44) | 0.0423 / 0.0459 / 0.1574 | 0.042 / 0.046 / 0.157 | L40, L43 yes; L44 no |
| (9) | D_3cnImg/f < 0.15 (L40 / L43 / L44) | 0.1105 / 0.0788 / 0.0694 | 0.111 / 0.079 / 0.069 | yes |
| (10)/(11) | νd_1n < 35; θgF_1n − line < 0.010 (L13, L15) | 0.0086 | 0.0086 | yes |
| (12) | 0.05 < \|f3c/f\| < 0.3 | 0.1511 | 0.151 | yes |

"Line" is the patent's reference line, −0.001801 νd + 0.648262. f3c computes to 87.93 mm, against the 87.88 mm printed in Table 39. The 0.05 mm difference exceeds one printed unit but lies within the propagated rounding of the printed prescription. Every printed value is reproduced within its rounding tolerance, and the only range failure, L44 under condition (8), also appears in the patent's own table.

## Image Stabilization

GR3b (L33–L35) moves perpendicular to the axis to stabilize the image (¶0021). The patent explains why it is placed where it is (¶0028). GR3b sits between GR3a and GR3c, which compensate decentring aberrations. It sits close to the image (condition (3)), where ray heights are low. And its actuator therefore sits near the camera, which moves the centre of gravity rearward. The computed ray heights support the second point: at L33 the paraxial marginal ray is 12.60 mm high, 0.178 of its height at L11, and the paraxial chief ray at the printed field is only 3.40 mm high.

The stabilization sensitivity, defined as image displacement per unit decentring of GR3b, is (1 − β₃b)·β₃c. It computes to −1.52 at infinity, and an independent decentred paraxial trace gives the same value. At the 4.5 m state it stays at −1.52. The negative sign means the image moves opposite to the group, by about one and a half times its displacement. Because the value is nearly the same at both states, the decentring needed for a given correction hardly changes with focus. Condition (12) bounds GR3c's power specifically so that this sensitivity stays suitable while stabilized performance is held (¶0057).

## Model Scope and Limitations

All quantities in this analysis are computed from the transcribed prescription; real-ray values come from exact meridional traces.

- **First-order values.** EFL 582.09 mm against the printed 581.97 mm. Paraxial back focus 39.150 mm against the printed 39.18 mm; the data file uses the printed value as its image distance. Length 455.34 mm against the printed 455.32 mm. All three agree within the rounding of the printed table.
- **Field.** At ω = 2.11°, a real chief ray reaches 21.665 mm against the printed Y = 21.633 mm. The difference is within the 0.01° precision of the printed ω. Real-ray distortion at the field edge is +1.02 % (pincushion).
- **Focus.** The near state solves to 4.484 m object-to-image, against the printed 4.5 m.
- **Conditions.** All printed condition values for Example 4 are reproduced.

The data file differs from the patent in five disclosed respects:

1. The stop semi-diameter is a calibration to Fno 4.12.
2. All other semi-diameters are modeled.
3. S4/S5 and L21 are capped below the f/4.12 beam, as described in Optical Architecture.
4. No cover glass or filter is modeled, because none is tabulated (¶0016).
5. Glass names are catalog matches to the printed nd/νd, not supplier identifications.

No prescription value was corrected.

## Design Heritage and Context

The patent's comparison example is JP 2017-215492 A (¶0012). Like this design, it is a three-group telephoto that focuses with its second group and uses a large air space in its front group to save weight. JP 2025-063175 A argues that the earlier publication's usable stabilizing blocks sit far from the image plane, which moves the barrel's centre of gravity forward (¶0013). Its remedy is to subdivide the fixed rear group and put the stabilizing subgroup near the image.

The same publication's Example 2 is the source used for the FE 400mm F2.8 GM OSS in this collection.

## Sources

- Japan Patent Office, JP 2025-063175 A (特開2025-63175), 光学系および撮像装置, applicant Sony Group Corporation, inventor Riki Maruyama (丸山 理樹), published 2025-04-15. Paragraphs ¶0006–¶0059, ¶0073, ¶0107–¶0115. Example 4: Table 10 (PDF p. 25), Tables 11–12 (PDF p. 26), Fig. 13 (PDF p. 82). Condition values: Table 35 (PDF p. 45), Table 39 (PDF p. 50).
- Sony Electronics, "SEL600F40GM Specifications", Sony of Canada (https://www.sony.ca/en/electronics/camera-lenses/sel600f40gm/specifications) and Sony Singapore (https://www.sony.com.sg/electronics/camera-lenses/sel600f40gm/specifications), accessed 2026-10-02.
- Sony Japan, SEL600F40GM lens construction diagram (https://www.sony.jp/products/picture/y_SEL600F40GM_lenscomposition.jpg), marking fluorite, XA and ED elements.
- Sony Electronics Inc., press release announcing the FE 600mm F4 GM OSS, 2019-06-11, as reprinted by DPReview (https://www.dpreview.com/news/4842214179/sony-announces-200-600mm-f5-6-6-3-g-oss-and-600mm-f4-gm-oss-lenses/).
- I. H. Malitson, "A Redetermination of Some Optical Properties of Calcium Fluoride," *Applied Optics* 2(11), 1103–1107 (1963).
- OHARA, HOYA, SCHOTT, SUMITA, HIKARI and CDGM optical-glass catalog data as packaged in the opticalglass library, version 2.0.2.
- LensVisualizer, src/optics/dispersion.ts (engine normal line for ΔPgF), https://github.com/ronbuening/LensVisualizer.
