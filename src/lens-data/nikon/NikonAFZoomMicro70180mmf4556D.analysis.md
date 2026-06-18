# Nikon AF Zoom-Micro Nikkor ED 70–180mm f/4.5–5.6D — Optical Analysis

## Patent Reference and Design Identification

**Patent:** US 5,717,527  
**Application Number:** US 08/756,770  
**Title:** Zoom Lens  
**Filed:** November 26, 1996  
**Granted:** February 10, 1998  
**Priority:** JP 7-350703, JP 8-175920, and JP 8-175923  
**Inventor:** Atsushi Shibayama  
**Assignee:** Nikon Corporation  
**Embodiment analyzed:** Seventh embodiment, Table 8, Fig. 43

The prescription transcribed here is the seventh embodiment of US 5,717,527. It is the closest patent example to the Nikon AF Zoom-Micro Nikkor ED 70–180mm f/4.5–5.6D, but it should be treated as a patent prescription rather than a literal production bill of materials. The patent example gives $f = 82.40$–135.00–194.00 mm and $F = 4.14$–5.10–5.73, while the production lens is marketed as 70–180mm f/4.5–5.6.

The identification rests on several converging points. Nikon's own design retrospective describes the production lens as a four-group negative–positive–negative–positive macro zoom in which the third and fourth groups move toward each other during zooming, the first group moves forward for close focus, and the first and second groups are effectively fixed for zooming [2]. Table 8 has the same four-group architecture, 18 elements in 14 air-separated groups, a five-element negative first group used for focusing, a G3/G4 zoom pair approaching each other, and a close-focus telephoto magnification of β = −0.74988.

There is one important mismatch. Nikon's production literature states that the lens uses an ED element [2], but Table 8 contains no material with $ν_d$ above 70.41. The highest-Abbe glass in the patent table is the FK5-class material used in L9, L14, and L16. Therefore, Table 8 is a close optical and kinematic match, but its published glass list is not a literal production ED-glass disclosure.

## Optical Architecture

The seventh embodiment is a four-group macro zoom for 135 format with negative–positive–negative–positive group powers.

| Group | Power | Elements | Air-separated groups | Thick-lens focal length | Function |
|---|---:|---:|---:|---:|---|
| G1 | negative | 5 | 5 | −100.0 mm | Focusing group, fixed for zoom |
| G2 | positive | 4 | 3 | +48.0 mm | Positive relay, nearly fixed for zoom |
| G3 | negative | 3 | 2 | −36.6 mm | Variator, moves image-ward |
| G4 | positive | 6 | 4 | +48.1 mm | Compensator / rear relay, moves object-ward |

The first two groups form the close-focus subsystem. The negative first group is moved object-ward for focusing, while G2 remains fixed during focusing and moves only slightly during zooming. The third and fourth groups form the zoom subsystem. The aperture stop is between G3 and G4 and moves integrally with G4.

The infinity-focus optical track is essentially constant at 212.213 mm across the three published zoom positions. At the telephoto end the ratio $TL/EFL = 212.213/194.001 = 1.094$, so this is not a true telephoto design in the strict optical sense. It is better described as a compact internal macro zoom with a long back focal distance for an SLR camera.

## Element-by-Element Analysis

### G1 — Five-element negative focusing group

G1 is the unit focusing group. It moves forward by 38.653 mm at the closest published setting, increasing the G1–G2 air gap $d_{10}$ from approximately 2.01 mm to 40.66 mm. The group has negative power, which keeps the front clear diameter manageable during the large focus extension. The patent's background discussion makes this negative-front-group rationale explicit by comparing oblique chief-ray behavior for positive and negative first groups [1].

**L1 — Negative meniscus, convex to object.** $n_d = 1.86074$, $ν_d = 23.01$. Glass: TAFD25 / J-LASFH13HS class, treated as a high-index dense flint. Standalone $f = -130.5$ mm.

L1 supplies the first negative bend in the focusing group. Its rear radius is much shorter than its front radius, so most of the element power comes from the rear surface. The very high refractive index keeps the radii from becoming still steeper.

**L2 — Biconvex positive.** $n_d = 1.86074$, $ν_d = 23.01$. Glass: TAFD25 / J-LASFH13HS class. Standalone $f = +63.1$ mm.

L2 is nearly symmetric, with equal-magnitude front and rear radii. It offsets part of L1's negative power while keeping the front focusing group compact. Because L1 and L2 share the same high-dispersion glass family, their opposite powers partly balance first-order chromatic power, leaving the later cemented groups to handle residual correction.

**L3 — Negative meniscus, convex to object.** $n_d = 1.61720$, $ν_d = 54.01$. Glass: unmatched crown, code 617/540. Standalone $f = -89.8$ mm.

The patent table image reads $R_5 = 1559.0379$ mm. The searchable text may drop the leading digit, but the 1559 mm value is required to reproduce the patent's stated $f_1 = -100.000$ mm for G1. L3 has a nearly flat front surface and a strong rear surface, concentrating negative power near the L3–L4 air space.

**L4 — Negative meniscus, concave to object.** $n_d = 1.79504$, $ν_d = 28.56$. Glass: unmatched dense flint, code 795/286. Standalone $f = -78.9$ mm.

L4 is the second strong negative element in the rear part of G1. Its stronger front curvature faces the object side. Together with L3 it forms the main negative-power core of the focusing group.

**L5 — Positive meniscus, convex to object.** $n_d = 1.78472$, $ν_d = 25.80$. Glass: SF11-class dense flint. Standalone $f = +191.3$ mm.

L5 is weakly positive and closes G1. It reduces the net negative power of L3–L4 and moderates the beam before the large variable G1–G2 air space. The earlier S-TIH53 identification is not retained: current OHARA S-TIH53 is an 847/238 glass and does not match the patent's 785/258 code.

### G2 — Positive relay group

G2 has a computed thick-lens focal length of +48.0 mm. It is fixed during focusing and nearly fixed during zooming; the G1–G2 spacing changes non-monotonically from 2.011 mm to 2.904 mm and back to 2.011 mm across the three zoom positions.

**L6 — Biconvex positive.** $n_d = 1.74810$, $ν_d = 52.30$. Glass: unmatched lanthanum crown, code 748/523. Standalone $f = +83.4$ mm.

L6 begins the positive relay action after the strongly negative first group. Its symmetric biconvex form limits coma and distortion contribution in this nearly stationary group.

**L7 + L8 — Cemented doublet.** Combined focal length $f = +274.8$ mm.

L7 is a negative meniscus with $n_d = 1.78472$, $ν_d = 25.80$, SF11-class dense flint, and standalone $f = -69.4$ mm. L8 is a positive meniscus with $n_d = 1.64000$, $ν_d = 60.03$, S-BSM81-class crown, and standalone $f = +54.4$ mm.

The doublet has little net power compared with the group focal length, so its main function is chromatic and aberration correction rather than magnification. This is the structurally plausible region for the production ED substitution, but Table 8 itself does not identify an ED material here.

**L9 — Positive meniscus, convex to object.** $n_d = 1.48749$, $ν_d = 70.41$. Glass: N-FK5 / FK5. Standalone $f = +174.9$ mm.

L9 is a weak positive high-Abbe crown element. It completes the positive relay group and contributes low-dispersion positive power before the variator group.

### G3 — Negative variator group

G3 is the negative variator and has a computed thick-lens focal length of −36.6 mm. From wide to telephoto it moves 9.403 mm toward the image side.

**L10 + L11 — Cemented doublet.** Combined focal length $f = -94.0$ mm.

L10 is a negative meniscus with $n_d = 1.80411$, $ν_d = 46.54$, S-LAH65V-class glass, and standalone $f = -28.3$ mm. L11 is a positive meniscus with $n_d = 1.80458$, $ν_d = 25.50$, SF6-class dense flint, and standalone $f = +38.2$ mm.

The doublet uses a high-index, relatively lower-dispersion negative member and a high-dispersion positive member. This reversed chromatic pairing allows the cemented unit to remain negative while controlling axial color generated by the variator.

**L12 — Biconcave negative.** $n_d = 1.80411$, $ν_d = 46.54$. Glass: S-LAH65V class. Standalone $f = -61.5$ mm.

L12 adds distributed negative power to G3. Its biconcave form shares power across both surfaces and keeps the group compact.

### G4 — Positive compensator and rear relay group

G4 has a computed thick-lens focal length of +48.1 mm. It moves object-ward during zooming and carries the aperture stop with it.

**L13 — Biconvex positive.** $n_d = 1.69680$, $ν_d = 55.60$. Glass: S-LAL14. Standalone $f = +84.7$ mm.

L13 is the first powered lens after the stop. It begins the positive compensation needed to bring the image plane back to the fixed rear location as G3 changes magnification.

**L14 + L15 + L16 — Cemented triplet.** Combined focal length $f = +1048.2$ mm.

L14 is a biconvex FK5-class crown element with $n_d = 1.48749$, $ν_d = 70.41$, standalone $f = +36.0$ mm. L15 is a biconcave dense flint with $n_d = 1.80384$, $ν_d = 33.89$, standalone $f = -23.2$ mm. L16 is a positive meniscus FK5-class crown element with $n_d = 1.48749$, $ν_d = 70.41$, standalone $f = +75.1$ mm.

The triplet has very weak net power because the two crown positives are largely balanced by the central flint. Its role is correction: chromatic control, spherical correction, and off-axis aberration balancing in the rear relay.

**L17 — Biconvex positive.** $n_d = 1.74077$, $ν_d = 27.63$. Glass: unmatched dense flint, code 741/276. Standalone $f = +47.8$ mm.

L17 supplies substantial positive power late in the system. The high index allows a relatively compact rear relay, while the high dispersion is balanced by the adjacent triplet and final negative element.

**L18 — Negative meniscus, concave to object.** $n_d = 1.80411$, $ν_d = 46.54$. Glass: S-LAH65V class. Standalone $f = -36.8$ mm.

L18 is the final negative element. Its position near the image side makes it effective for field curvature and ray-angle control. It also shortens the back focal distance relative to what the positive rear relay would otherwise require.

## Glass Identification and Selection

The patent does not name glass manufacturers. The identifications below are catalog or class matches from published $n_d$ / $ν_d$ values and should be read as material-class annotations, not as Nikon production procurement claims.

| Patent code | Catalog / class annotation | Elements | Confidence | Notes |
|---|---|---:|---|---|
| 861/230 | TAFD25 / J-LASFH13HS class | L1, L2 | class match | Nikon/Hikari catalog data are close but not identical in $ν_d$. |
| 617/540 | unmatched crown | L3 | unmatched | No current public catalog match retained. |
| 795/286 | unmatched dense flint | L4 | unmatched | No current public catalog match retained. |
| 785/258 | SF11-class dense flint | L5, L7 | close | Schott SF11 is 1.78472 / 25.76; patent table uses 25.80. |
| 748/523 | unmatched lanthanum crown | L6 | unmatched | Treated by code only. |
| 640/600 | S-BSM81 class | L8 | close | OHARA S-BSM81 is 1.64000 / 60.08. |
| 487/704 | N-FK5 / FK5 | L9, L14, L16 | exact | Schott N-FK5 is 1.48749 / 70.41. |
| 804/466 | S-LAH65V class | L10, L12, L18 | close | OHARA S-LAH65V is 1.80400 / 46.58. |
| 805/255 | SF6-class dense flint | L11 | close | Schott SF6 is 1.80518 / 25.43. |
| 697/556 | S-LAL14 | L13 | close | OHARA S-LAL14 is 1.69680 / 55.53; patent table uses 55.60. |
| 804/339 | unmatched dense flint | L15 | unmatched | Treated by code only. |
| 741/276 | unmatched dense flint | L17 | unmatched | Treated by code only. |

The key chromatic correction pattern is not a single anomalous-dispersion material in Table 8, but repeated pairing of high-index flints with higher-Abbe crowns in the nearly stationary G2 and rear G4 correction groups. The production lens's stated ED element is therefore a production-level fact, while Table 8's exact glass list remains a patent disclosure with no ED-class Abbe number.

## Focus Mechanism

The focus mechanism is front-group unit focusing. G1 moves object-ward; all other optical groups and the back focal distance remain fixed for a given zoom position.

| Quantity | Wide | Intermediate | Telephoto |
|---|---:|---:|---:|
| Infinity $d_{10}$ | 2.011 mm | 2.904 mm | 2.011 mm |
| Close $d_{10}$ | 40.665 mm | 41.557 mm | 40.664 mm |
| G1 focus travel | 38.653 mm | 38.653 mm | 38.653 mm |
| Close-focus β | −0.31850 | −0.52182 | −0.74988 |
| Patent object-to-image distance $R$ | 391.9 mm | 391.9 mm | 391.9 mm |

The paraxial effective focal length of the focused optical configuration decreases strongly at close focus: 55.4 mm at the wide position, 70.7 mm at the intermediate position, and 75.6 mm at the telephoto position. This is not a contradiction of the 70–180mm marketed range; it is the expected consequence of a macro zoom whose negative front group is extended far forward.

Nikon's retrospective table states that the production lens maintains its effective f-number with focus distance at the listed focal lengths, unlike ordinary macro lenses whose effective aperture darkens substantially as magnification increases [2].

## Zoom Mechanism

The zoom is internal in the sense that the image plane and patent total track remain fixed at infinity focus. G1 is fixed, G2 is nearly fixed and reverses slightly, G3 moves toward the image, and G4 plus the stop move toward the object. The close-focus telephoto TL row in Table 8 appears to print 250.66589 mm, but adding the printed d10 focus extension to the infinity-focus TL gives 250.86587 mm; that value is also consistent with the wide and intermediate close-focus TL values.

| Gap / position | Wide 82.4 mm | Intermediate 135 mm | Telephoto 194 mm |
|---|---:|---:|---:|
| $d_{10}$, G1→G2 | 2.011 mm | 2.904 mm | 2.011 mm |
| $d_{17}$, G2→G3 | 2.053 mm | 6.743 mm | 11.456 mm |
| $d_{22}$, G3→stop/G4 | 40.316 mm | 17.416 mm | 1.749 mm |
| Back focus | 51.033 mm | 68.349 mm | 80.196 mm |
| Total track | 212.213 mm | 212.213 mm | 212.213 mm |

From wide to telephoto, G3 moves 9.403 mm image-ward. G4 and the stop move 29.164 mm object-ward. The movement ratio is therefore approximately 3.10, matching the patent text that the G3/G4 movement-ratio relation is constant during zooming.

## Conditional Expressions

Table 8 belongs to the patent's four-group negative–positive–negative–positive architecture. The relevant conditions are:

| Condition | Patent expression | Table 8 value | Result |
|---|---|---:|---|
| (11) | $0.8 < |f_1|/f_w < 1.6$ | 1.214 | satisfied |
| (12) | $D_{12W}/f_w < 0.1$ | 0.024 | satisfied |
| (13) | $Δ1/f_w < 0.1$ | 0.000 | satisfied |

Condition (11) controls the front negative group power. Condition (12) keeps the G1–G2 spacing small at the wide end. Condition (13) reflects the patent preference that the first group be fixed, or almost fixed, during zooming.

## Verification Summary

An independent paraxial y–$n u$ ray trace was run from the transcribed Table 8 values. The trace uses surface powers $Φ = (n' - n)/R$ and translations $d/n$ in reduced-angle coordinates.

| Parameter | Patent | Computed | Difference |
|---|---:|---:|---:|
| Wide EFL | 82.400 mm | 82.401 mm | +0.001 mm |
| Intermediate EFL | 135.000 mm | 135.002 mm | +0.002 mm |
| Telephoto EFL | 194.000 mm | 194.001 mm | +0.001 mm |
| G1 focal length | −100.000 mm | −100.000 mm | 0.000 mm |
| Wide back focus | 51.033 mm | 51.033 mm | 0.000 mm |
| Intermediate back focus | 68.349 mm | 68.350 mm | +0.001 mm |
| Telephoto back focus | 80.196 mm | 80.196 mm | 0.000 mm |
| Infinity total track | 212.212 mm | 212.213 mm | +0.001 mm |

The Petzval sum, computed surface-by-surface as $Σ Φ/(n n')$, is +0.000504 mm$^{-1}$ for the Table 8 prescription. The weak net value is consistent with the extensive crown/flint correction groups in G2 and G4. Semi-diameters in the companion data file are not patent values; they are inferred visualization apertures constrained by paraxial ray height, edge thickness, same-element diameter ratios, and cross-gap sag clearance. The apparent 0.200 mm error in the Table 8 close-focus telephoto TL row is not used as an optical spacing; every modeled spacing comes from the surface table and the d10/d17/d22/Bf rows.

## Sources

[1] Atsushi Shibayama, Nikon Corporation, US Patent 5,717,527, “Zoom Lens,” granted February 10, 1998.  
[2] Kouichi Ohshita, Nikon Corporation, “NIKKOR — The Thousand and One Nights, No. 18: AF Zoom-Micro Nikkor ED 70–180mm F4.5–5.6D.” https://imaging.nikon.com/imaging/information/story/0018/  
[3] SCHOTT AG optical glass datasheets: SF11, SF6, and N-FK5.  
[4] OHARA Corporation optical glass datasheets: S-BSM81, S-LAL14, and S-LAH65V.  
[5] Nikon / Hikari optical-glass catalog data for J-LASFH13HS / TAFD25-class glass.  
[6] Nikon AF Zoom-Micro Nikkor ED 70–180mm f/4.5–5.6D Instruction Manual, manufacturer manual mirror. https://www.manualslib.com/manual/111235/Nikon-Af-Zoom-Micro-Nikkor-Ed-70-180mm-F-4-5-5-6d.html
