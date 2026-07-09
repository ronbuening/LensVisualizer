# NIKON R-UW AF FISHEYE-NIKKOR 13mm f/2.8

## Patent Reference and Design Identification

**Patent:** US 5,579,169
**Application Number:** 302,476
**Filed:** September 12, 1994
**Granted:** November 26, 1996
**Priority:** September 13, 1993 (JP 5-249682)
**Inventor:** Motohisa Mouri
**Assignee:** Nikon Corporation, Tokyo, Japan
**Title:** Underwater Wide Angle Lens
**Classification:** G02B 15/14; 359/682, 359/762
**Embodiment analyzed:** Example 1 (Table 1, FIG. 1)

US 5,579,169 describes an underwater wide-angle lens whose object-side medium is water rather than air. The first element is in direct contact with water, so the water itself is part of the optical prescription. Example 1 is identified as the closest patent embodiment for the production Nikon R-UW AF Fisheye-Nikkor 13mm f/2.8 for the Nikonos RS system.

The identification rests on the following convergent evidence:

1. **Underwater focal length.** Example 1 gives $F = 12.32$ mm in water. Independent paraxial trace gives an image-space effective focal length of 12.3995 mm, close to the nominal 13 mm production designation.
2. **Maximum aperture.** Example 1 gives FNO = 2.87, consistent with the marketed f/2.8 maximum aperture.
3. **Underwater field.** Example 1 gives $2\omega = 170.6^\circ$, corresponding to the production lens's approximately 170° underwater coverage.
4. **Element and group count.** Example 1 contains ten glass elements in seven patent groups: three negative meniscus singlets, one positive cemented doublet, two positive cemented doublets behind the stop, and a rear plane-parallel plate.
5. **Water-contact front element.** The patent explicitly states that the first lens group is disposed nearest the object and contacts water. This is the defining difference between this design and an ordinary land fisheye used behind a dome port.
6. **SLR back focus.** The computed back focal distance from the rear surface of G7 is 39.339 mm, or 3.17× the computed underwater EFL, consistent with the patent's stated aim of clearing a quick-return mirror in an underwater SLR.
7. **Embodiment exclusion.** Example 2 reaches $2\omega = 180.0^\circ$ but uses a plastic first element ($n_d = 1.49108$, $\nu_d = 57.5$). Example 3 uses glass in the first element but only reaches $2\omega = 166.8^\circ$. Example 1 is therefore the numerical example whose field and materials best match the known production lens.

## Optical Architecture

The lens is a strongly retrofocus underwater fisheye. The power layout is negative-negative-negative-positive before the stop and positive-positive behind the stop. In ordinary photographic terms it is an inverted-telephoto construction, but with a more specialized front end because the object-side medium is water ($n_d = 1.33306$ in the patent table).

The **fore group** comprises G1 through G4. G1, G2, and G3 are all negative meniscus groups with the convex side facing the object. Together they form a very strong negative front section: the independently computed image-space focal length of G1-G3, traced from water into air, is −10.201 mm. This produces the divergence needed to accept a 170.6° underwater field while still providing a long SLR back focus. G4 is a positive cemented doublet that begins the transition from the diverging front beam toward the positive rear relay. The computed focal length of G1-G4 is −42.610 mm.

The **rear group** comprises G5 and G6. Both are positive cemented doublets. In each doublet, the negative component has the higher refractive index and the positive component has the higher Abbe number. This is the correction pattern described in the patent: high-index negative components help offset the negative Petzval contribution of the first three groups, while high-Abbe positive components reduce lateral chromatic aberration.

G7 is a plane-parallel plate behind G6. The patent says it may be omitted, but may also be used as a filter or waterproof window. It contributes no optical power; its effect is the axial glass-path shift of a 1.20 mm plate at $n_d = 1.51680$. The data file retains it because it is present in Example 1 and forms the reference plane from which the patent's back focus is implied.

The aperture stop is not listed as a numbered surface in Table 1. FIG. 1 places SP in the air gap between G4 and G5, close to the fifth group. The data file therefore splits the 10.30 mm R9-R10 air space into 8.80 mm from R9 to the stop and 1.50 mm from the stop to R10. With this placement, a 7.08 mm stop semi-diameter reproduces the patent FNO = 2.87 from the independently computed EFL.

## Element-by-Element Analysis

### L1 — G1: Negative meniscus, convex to object

$n_d = 1.51680$, $\nu_d = 64.1$. Glass: N-BK7 / 517642 crown class. $f = -106.9$ mm in water-to-air use; $f = -347.0$ mm as a standalone air lens.

L1 is the pressure-bearing water-contact front element. Its two radii are both positive (R1 = 54.988 mm, R2 = 39.999 mm), producing a near-concentric meniscus. The shape factor $q = (r_2+r_1)/(r_2-r_1)$ computes to −6.337, matching the patent's reported −6.33.

The low index is not incidental. The patent requires $n_1 < 1.6$ so that the water-glass refractive-index jump at the first surface remains modest. The element is therefore weakly negative by itself and primarily serves to accept the extreme underwater field with reduced entrance-surface obliquity.

### L2 — G2: Negative meniscus, convex to object

$n_d = 1.67025$, $\nu_d = 57.5$. Glass: J-LAK02 / 670574 lanthanum crown class, close. $f = -32.3$ mm.

L2 is the first strong negative group after the front water-contact meniscus. Its tight rear radius (R4 = 17.841 mm) supplies most of its negative power. Together with L3, it strengthens the divergence needed for the approximately 3.17× back-focus-to-EFL ratio.

The glass coordinate is close to Hikari J-LAK02 but not exact. The data file therefore marks it as a close catalog-class match rather than a strict exact identification.

### L3 — G3: Negative meniscus, convex to object

$n_d = 1.69680$, $\nu_d = 55.6$. Glass: S-LAL14 / 697555 lanthanum crown class. $f = -35.0$ mm.

L3 continues the negative front-group action. Its power is similar to L2, but its placement immediately before G4 makes it the final member of the strongly divergent G1-G3 set. The combined focal length of G1-G3 is −10.201 mm, so $|f_t/F|$ is 0.828 when the patent's $F = 12.32$ mm is used, reproducing the patent's rounded condition value of 0.83.

### L4 and L5 — G4: Positive cemented doublet

L4: $n_d = 1.59507$, $\nu_d = 35.5$. Glass: unmatched dense flint, 595355 code. $f = +19.4$ mm.

L5: $n_d = 1.79668$, $\nu_d = 45.4$. Glass: unmatched lanthanum dense flint, 797454 code. $f = -49.6$ mm.

G4 has a computed net focal length of +38.77 mm. The biconvex L4 provides the dominant positive power. L5 is a high-index negative meniscus cemented behind it, with its concave surface facing the object. This matches the patent's description of G42 and satisfies the index-difference condition $n_{42}-n_{41} > 0.15$ with a computed value of 0.20161.

Both components have $\nu_d < 50$ and are therefore flints under the usual crown/flint boundary. G4 is best described as a flint/flint cemented group whose index split is more important than its Abbe split.

### L6 and L7 — G5: Positive cemented doublet

L6: $n_d = 1.79631$, $\nu_d = 40.9$. Glass: unmatched high-index flint, 796409 code. $f = -35.4$ mm.

L7: $n_d = 1.51860$, $\nu_d = 69.9$. Glass: Hikari J-PKH1 phosphate crown. $f = +28.8$ mm.

G5 has a computed net focal length of +141.23 mm. It is the weaker of the two rear positive doublets. The object-side element is a high-index negative meniscus; the image-side element is a high-Abbe biconvex positive lens. The cemented surface is convex toward the object, as stated in the patent.

The high-index negative component contributes to Petzval correction, while the high-Abbe positive component carries most of the achromatizing role in the doublet. The Abbe spread is large: $69.9 - 40.9 = 29.0$.

### L8 and L9 — G6: Positive cemented doublet

L8: $n_d = 1.51680$, $\nu_d = 69.9$. Glass: phosphate-crown class near J-PKH1, exact catalog unresolved. $f = +26.4$ mm.

L9: $n_d = 1.80518$, $\nu_d = 25.3$. Glass: Schott N-SF6HT / 805254 dense flint class. $f = -73.4$ mm.

G6 has a computed net focal length of +42.60 mm and is the stronger rear doublet. Its order is the reverse of G5: the biconvex positive element is on the object side and the negative meniscus is on the image side. The cemented surface is concave toward the object, again matching the patent prose.

This doublet carries the largest dispersion contrast in the design. The Abbe-number difference is $69.9 - 25.3 = 44.6$, so G6 is the principal rear chromatic corrector.

### L10 — G7: Plane-parallel plate

$n_d = 1.51680$, $\nu_d = 64.1$. Glass: N-BK7 / 517642 crown class. $f = \infty$.

L10 is a 1.20 mm plane-parallel plate behind G6. It has no refractive power in the paraxial sense, but it shifts the image plane by the glass-path difference of the plate. The patent says this group may be omitted, but can be used as a filter or waterproof window. The prescription and data file retain it because it appears in Example 1.

## Glass Identification and Selection

The patent gives only refractive index and Abbe number, not manufacturer glass names. The glass identifications below avoid circular lookup by treating the patent coordinates as the measured values and matching only to independently published catalog coordinates where the residuals are small.

| Element | Patent $n_d$ | Patent $\nu_d$ | Identification | Confidence |
|---|---:|---:|---|---|
| L1, L10 | 1.51680 | 64.1 | N-BK7 / 517642 crown class | High |
| L2 | 1.67025 | 57.5 | J-LAK02 / 670574 lanthanum crown class | Close |
| L3 | 1.69680 | 55.6 | S-LAL14 / 697555 lanthanum crown class | High |
| L4 | 1.59507 | 35.5 | Dense flint, 595355 code | Unmatched current catalog |
| L5 | 1.79668 | 45.4 | Lanthanum dense flint, 797454 code | Unmatched current catalog |
| L6 | 1.79631 | 40.9 | High-index flint, 796409 code | Unmatched current catalog |
| L7 | 1.51860 | 69.9 | J-PKH1 phosphate crown | High |
| L8 | 1.51680 | 69.9 | Phosphate crown near J-PKH1, 517699 code | Unmatched exact catalog |
| L9 | 1.80518 | 25.3 | N-SF6HT / 805254 dense flint class | High |

The main chromatic pattern is conventional but severe: high-Abbe positive components are paired against high-index or very low-Abbe negative components in G5 and G6. G4 is different. It is not a conventional crown/flint achromat; it is a positive flint plus a higher-index negative flint, used primarily to counter the front group's Petzval and coma burden without neutralizing all of the positive group power.

## Focus Mechanism

The patent does not publish a close-focus prescription. It describes several possible focusing methods for all embodiments. One method moves the entire lens system axially toward the object. A second method fixes G1 and G7 while moving G2 through G6 together toward the object; the patent notes that this simplifies the waterproof mechanism because the extreme front and rear sealing elements remain fixed. A further option is to move one or more of G4, G5, and G6 as a focusing group near the stop.

The production R-UW AF lens was an autofocus Nikonos RS lens, but the patent does not specify which of those focusing methods was implemented in the production barrel and gives no variable air-spacing table. The data file therefore represents only the infinity-focus prescription. The catalog close-focus metadata is set to 0.15 m from production/secondary specifications, but no close-focus optical state is synthesized.

## Conditional Expressions

The patent lists five condition-corresponding values for Example 1. The independent paraxial re-trace reproduces the listed values. In the scanned equation, condition (4) reads $f_2/f_1$.

| Condition | Patent value | Independently verified value | Comment |
|---|---:|---:|---|
| $0.75 < |f_t/F| < 0.85$ | 0.83 | 0.828 using patent $F$; 0.823 using computed EFL | G1-G3 focal length in water-to-air trace is −10.201 mm. |
| $-6.5 < q < -4.5$ | −6.33 | −6.337 | $q=(r_2+r_1)/(r_2-r_1)$ for G1. |
| $n_1 < 1.6$ | 1.52 | 1.51680 | Low-index water-contact element. |
| $0.25 < f_2/f_1 < 0.45$ | 0.30 | 0.302 | $f_2=-32.348$ mm and $f_1=-106.939$ mm under the same water-to-air convention used for G1. |
| $n_{42}-n_{41}>0.15$ | 0.20 | 0.20161 | G4 negative component minus positive component. |

Condition (4) is reproduced directly by $f_2/f_1 = (-32.348)/(-106.939) = 0.302$. This ratio describes how much negative power G2 carries relative to the water-contact G1 group.

## Verification Summary

A reduced-angle y-ν paraxial ray trace was run independently from the tabulated surfaces, with water ($n_d = 1.33306$) as the object-side medium and air as the final image medium. The resulting system matrix gives:

| Quantity | Patent / stated value | Computed value | Status |
|---|---:|---:|---|
| Underwater EFL | 12.32 mm | 12.3995 mm | 0.65% high |
| Back focal distance from R17 | not numerically printed in Table 1 | 39.3394 mm | 3.17× computed EFL |
| R1-R17 axial track | 99.00 mm | 99.00 mm | Direct table sum |
| R1-image total axial length | — | 138.339 mm | Includes computed BFD |
| Petzval sum, surface-by-surface $\sum \phi/(nn')$ | — | +0.001523 mm$^{-1}$ | Petzval-radius magnitude ≈ 657 mm |

The computed EFL is close enough to the patent value that no transcription correction was made to the prescription table. The small difference is consistent with the precision limits of a three-decimal printed patent prescription.

The final data-file surface list differs from the patent table only by insertion of the aperture stop inside the R9-R10 air space and by estimated semi-diameters. All radii, thicknesses, refractive indices, and Abbe numbers are otherwise transcribed directly from Example 1.

## Data-File Implementation Notes

The patent omits semi-diameters and does not assign an axial coordinate to the aperture stop. The data file therefore uses conservative semi-diameters sized to preserve element edge thickness, keep $sd/|R|<0.90$, keep each element's front/rear semi-diameter ratio at or below 1.25, and avoid cross-gap sag intrusion in the rendered model.

The data file declares a fisheye projection so that the viewer treats the published 170.6° field as authoritative. The patent does not state a projection law, so the `fisheye-equidistant` declaration is a viewer convention rather than a claim that the production lens follows a perfectly equidistant mapping.

## Design Heritage and Context

This design belongs to Nikon's specialized underwater SLR line rather than to the ordinary F-mount fisheye lineage. Nikon's own history page describes the Nikonos RS AF as the world's first underwater autofocus SLR, and Nikon's NIKKOR historical essays identify the R-UW AF 13mm f/2.8 as the world's first underwater autofocus fisheye. The patent's optical problem statement explains why this required a dedicated prescription: when an ordinary land fisheye is used underwater behind a housing, the port surfaces and the water/air index change reduce field coverage and introduce aberrations.

The solution in Example 1 is to eliminate the separate dome-port correction problem. The water-contact first meniscus is part of the lens, not a housing accessory. The rest of the lens is then optimized behind that surface to supply the long SLR back focus and to correct the Petzval, astigmatism, lateral color, and distortion introduced by the strongly negative front section.

## Sources

- US Patent 5,579,169, “Underwater Wide Angle Lens,” Motohisa Mouri, Nikon Corporation, granted November 26, 1996. Primary source for the prescription, group architecture, focusing alternatives, conditional expressions, and design rationale.
- Nikon Imaging, “Evolution of NIKONOS,” Camera Chronicle. Source for the Nikonos RS AF system context.
- Nikon Imaging, “NIKKOR — The Thousand and One Nights No. 6.” Source for Nikon's historical statement on the R-UW AF Fisheye-Nikkor 13mm f/2.8.
- Schott N-BK7 and N-SF6HT data sheets; Hikari J-LAK02 and J-PKH1 data sheets; Ohara S-LAL14 catalog page. Used for non-circular glass matching against the patent's $n_d/\nu_d$ coordinates.
