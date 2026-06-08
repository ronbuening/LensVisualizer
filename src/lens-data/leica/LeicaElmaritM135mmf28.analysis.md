# Leica Elmarit-M 135 mm f/2.8 — Optical Analysis

**Patent:** US 3,108,152 — “Four Member Objective Lens”  
**Application Number:** Ser. No. 91,294  
**Filed:** December 28, 1960  
**Priority:** Germany, January 2, 1960  
**Granted:** October 22, 1963  
**Inventor:** Eugen Hermanni, Katzenfurt, Dillkreis, Germany  
**Assignee:** Ernst Leitz GmbH, Optische Werke, Wetzlar  
**Embodiment analyzed:** Example 2 / Table II, repeated in claim 2  
**Reference line:** e-line, 546.07 nm; the patent tabulates $n_e$ and $\nu_e$, not d-line $n_d$ and $\nu_d$

## Patent Reference and Design Identification

US 3,108,152 is an Ernst Leitz patent for a fast long-focus objective with a large rear air path. The numerical prescription used here is Table II, which is also reproduced in claim 2. The patent normalizes the design to $f = 1.00$, gives a relative aperture of 1:2.8, gives an 18° image angle, and describes a construction in which a cemented negative meniscus member is placed between positive members.

The identification with the Leica Elmarit-M 135 mm f/2.8 rests on converging evidence rather than on a patent drawing label. The assignee is Ernst Leitz, the inventor of record is Eugen Hermanni, the stated 1:2.8 aperture matches the Elmarit class, and the 18° field corresponds to a 135 mm lens on the 43.3 mm 35 mm-format diagonal. A paraxial trace of Table II gives $f = 1.00082$ in the patent scale, or 135.11 mm when scaled by 135. The prescription has five glass elements in four air-separated members: two positive front menisci, a cemented two-element negative member, and a rear positive lens behind the stop. This is the optical count reported by Leitz-oriented historical references for the 135 mm f/2.8 Elmarit-M family.

Two numerical embodiments are published. Example 1 uses a curved cemented interface ($r_6=-3.50074$) and identical front menisci; Example 2 uses a planar cemented interface ($r_6 = \infty$), two distinct front menisci, and a third positive element at $\nu_e=58.3$. The production lens cannot be distinguished between these two examples from ordinary external specifications alone. This file transcribes Example 2 because it is the embodiment in the supplied analysis and because claim 2 reproduces that table directly.

The patent drawing places the aperture stop inside the long $a_7$ air space, between the cemented member and the rear element. The table gives the total $a_7$ spacing but not the stop coordinate. The data file therefore uses an inferred stop position, placed 45% of $a_7$ after surface 7. This affects entrance-pupil and clear-aperture modeling but not the Gaussian EFL or BFD of the lens prescription.

## Optical Architecture

The design is a five-element, four-member long-focus objective with a positive–positive–negative–positive power sequence. It is all-spherical. The first two members are positive menisci convex toward the object. They are separated from one another and from the cemented member by extremely thin air spaces, each only $0.00060f$ in the patent table. At the 135 mm scale these are 0.081 mm near-contact air lenses.

The central member is a cemented crown–flint negative meniscus. In Example 2 the cemented interface is flat, so the interface itself has no refractive power. Most of the member’s negative power comes from the rear surface of the flint element. This negative member is deliberately thick: $a_5+a_6 = 0.20498f$, just over the patent’s $0.2f$ lower limit.

The rear member is a positive meniscus behind the stop. It restores positive power after the central negative member and helps balance the oblique aberrations of the front and middle groups. The traced back focal distance is $0.48116f$, essentially the patent’s $a_9 = 0.4812f$. The front-vertex-to-image track is about $0.9743f$, so the design is only mildly telephoto by the strict $\mathrm{TL}/\mathrm{EFL}<1$ criterion. Its defining feature is not a strongly shortened telephoto barrel, but the large distance from the back lens to the image plane.

## Element-by-Element Analysis

Focal lengths in this section are standalone thick-lens-in-air values, scaled by 135.0 from the patent prescription. Because the source table is e-line, the first line for each element uses $n_e$ and $\nu_e$.

### L1 — First Positive Meniscus, convex to object

$n_e = 1.62303$, $\nu_e = 60.1$. Glass: Leitz proprietary / N-SK16-class crown. $f = +308.5$ mm.

L1 is the first collector element. Both radii are positive ($r_1=+0.62637$, $r_2=+1.08410$ in patent units), making it a positive meniscus convex toward the object. Its power is modest by itself; the design obtains the required front positive power by splitting the collector into L1 and L2 rather than by using one stronger element.

The Schott N-SK16 catalog position is a close public match to the patent’s $n_e/\nu_e$ pair, but period Leitz literature described the first two elements as containing special glass developed by the Leitz glass laboratory. The safest identification is therefore not “Schott SK16 purchase glass,” but “Leitz special crown with SK16-like optical constants.”

### L2 — Second Positive Meniscus, convex to object

$n_e = 1.62303$, $\nu_e = 60.1$. Glass: Leitz proprietary / N-SK16-class crown. $f = +277.3$ mm.

L2 is a stronger positive meniscus of the same e-line glass as L1. Its radii ($r_3=+0.45154$, $r_4=+0.67283$) are more strongly curved than L1’s. The patent specifically requires the front radius of this second positive meniscus to be larger than the front radius of the negative meniscus member; Example 2 satisfies this with $r_3=0.45154>r_5=0.30417$.

The thin air gap between L1 and L2 is optically intentional, not merely a mechanical clearance. Because the adjoining surfaces have related curvature, the near-contact spacing gives the designer another bending degree of freedom without adding a cemented glass path.

### L3 — Plano-convex Positive Crown, front element of the cemented member

$n_e = 1.55897$, $\nu_e = 58.3$. Glass: unmatched vintage BaK/SK-class crown. $f = +73.5$ mm.

L3 is the positive crown half of the cemented negative member. Its front surface is the strongly convex $r_5=+0.30417$ surface, and its rear surface is the planar cemented interface $r_6=\infty$. Because the interface is flat in Example 2, L3’s contribution is concentrated at its front surface.

No current Schott glass in the checked catalog matches this e-line pair as cleanly as N-SK16, SF5, or N-SF8 match the other patent glasses. The value lies in the barium-crown / short-flint crown neighborhood, and is best recorded as an unmatched vintage crown or Leitz/Schott special melt rather than forced into a precise catalog identity.

### L4 — Plano-concave Negative Flint, rear element of the cemented member

$n_e = 1.67764$, $\nu_e = 32.0$. Glass: SF5 / N-SF5-class dense flint. $f = -39.0$ mm.

L4 is the strongest single element in the prescription. Its front surface is the flat cemented interface, while its rear surface is $r_7=+0.19572$. At that surface the ray passes from dense flint to air, producing a normalized surface power of about $-3.46$. This is the dominant negative-power contribution in the design and the largest single Petzval term.

Together L3 and L4 form the patent’s thick cemented negative meniscus member. The member’s standalone focal length is about $-163.5$ mm at the 135 mm scale. Its role is not that of a classical thin achromatic doublet, since the cemented interface is powerless; color and field correction are distributed across the full five-element system.

### L5 — Rear Positive Meniscus, convex to object

$n_e = 1.69416$, $\nu_e = 30.9$. Glass: explicit unmatched N-SF8 / SF8-class dense flint because the stored prescription uses e-line values rather than d-line `nd`. $f = +154.8$ mm.

L5 is the back lens behind the aperture stop. Both radii are positive ($r_8=+0.51413$, $r_9=+1.41901$), so it is a positive meniscus convex toward the object. It adds rear positive power after the negative cemented member and helps set the large back focal distance.

Using a dense flint for a positive rear member is not unusual in this arrangement. The high index permits power with moderate curvature, while the low Abbe number gives a chromatic balancing lever behind the stop.

## Glass Identification and Selection

The patent gives e-line values. The data file preserves those values in the `nd` and `vd` fields because the current schema has no separate `ne`/`ve` fields; this is a deliberate source-preservation choice. The d-line equivalents below are catalog-context values, not substituted prescription values.

| Element(s) | Patent $n_e/\nu_e$ | Closest public catalog context | Assessment |
|---|---:|---|---|
| L1, L2 | 1.62303 / 60.1 | Schott N-SK16: $n_e=1.62286$, $\nu_e=60.08$ | Very close optical match; period Leitz literature indicates proprietary Leitz special glass. |
| L3 | 1.55897 / 58.3 | Between BaK/SK crown families | No clean current-catalog match; recorded as unmatched vintage crown. |
| L4 | 1.67764 / 32.0 | Schott SF5 / N-SF5 class: $n_e\approx1.67764$, $\nu_e\approx32.0$ | Confident dense-flint match. |
| L5 | 1.69416 / 30.9 | Schott N-SF8 e-line class: $n_e=1.69413$, $\nu_e=31.06$ | Confident class match; explicit unmatched for d-line catalog resolution. |

The chromatic correction is conventional. There is no ED, fluorite, anomalous-partial-dispersion, or apochromatic glass claim in the patent. The L3–L4 crown/flint pairing supplies a large Abbe contrast, while L5 gives the designer a rear dense-flint balancing element. The flat cemented interface prevents the cemented member from behaving like a compact, self-contained achromat; the color correction is instead spread through the powers of all five elements.

## Focus Mechanism

The patent publishes only the infinity prescription. It gives no floating group, no variable internal spacing, and no close-focus table. The production lens therefore has to be represented as unit focus: the complete optical cell moves relative to the film plane, and the internal spacings remain fixed.

For the data file, the rear image gap is the only variable spacing. At the 135 mm scale, the patent’s $a_9=0.4812f$ gives 64.962 mm. The independently traced infinity BFD is 64.957 mm; the 0.005 mm difference is ordinary table rounding. Solving the finite-conjugate paraxial equation for a 1.5 m object distance measured from the image plane gives a close-focus rear gap of 80.215 mm and magnification of about 0.113×. If the first-version 1.55 m close-focus distance is used instead, the corresponding rear gap is 79.596 mm and magnification is about 0.108×, giving an object field of about 332 × 222 mm on a 36 × 24 mm frame.

This distinction matters because the often-quoted smallest object field of about 220 × 330 mm corresponds more closely to the 1.55 m setting than to a strict 1.5 m finite-conjugate calculation. The analysis and data file therefore separate the version-dependent production close-focus specification from the patent, which contains no close-focus data.

## Conditional Expressions

The patent’s governing condition for the three front positive radii is:

$$
\frac{2.5}{f} < \frac{1}{r_1} - \frac{1}{r_3} + \frac{1}{r_5} < \frac{4.5}{f}.
$$

For Example 2, the central expression evaluates to:

$$
\frac{1}{0.62637} - \frac{1}{0.45154} + \frac{1}{0.30417} = 2.670.
$$

The value is inside the claimed range. Example 1 gives 3.32, matching the patent’s own statement for that embodiment and confirming the sign convention used here.

The other explicit requirements are also satisfied. The front radius of the second positive meniscus is larger than that of the negative member ($0.45154>0.30417$), and the cemented negative member thickness is $a_5+a_6=0.20498f$, just above the required $0.2f$.

The patent also says that the glasses of the first three positive lenses “may” have $\nu_e>60$. This is permissive rather than mandatory. Example 2 uses $\nu_e=60.1$ for L1 and L2 but $\nu_e=58.3$ for L3, so it does not follow that preference for all three positive elements.

## Aberration Correction and Design Philosophy

The patent’s stated object is a fast objective with a large distance between the back lens and the image. The design obtains that by combining a split positive front collector, a thick central negative member, and a rear positive meniscus beyond the stop.

A surface-by-surface Petzval calculation using $\sum \phi/(n n')$ gives a total Petzval sum of +0.1616 in normalized patent units, corresponding to a Petzval radius of about $-6.19f$ or roughly -836 mm at the 135 mm scale. The largest individual term is surface 7, the flint-to-air rear surface of L4, at about -2.064. The flat cemented interface contributes zero Petzval power.

The front pair reduces the burden on any one positive collecting surface. The cemented negative member supplies the strong negative contribution needed for field flattening and back-focus management. The rear meniscus then restores positive power and gives additional oblique-aberration and chromatic balancing leverage behind the stop. The patent does not assign named aberrations to individual surfaces, so single-surface claims beyond the Petzval accounting should be treated as interpretation.

## Air Lenses

The two very thin front air spaces are central to the patent. Between surfaces 2 and 3, and between surfaces 4 and 5, the axial air thickness is $0.00060f$, or 0.081 mm at 135 mm scale. These are near-contact air lenses. Their bounding surfaces are also the surfaces named in the patent’s front-radius inequality, so the spacings are part of the optical design rather than incidental assembly gaps.

The near-contact gaps also impose a practical constraint on the rendered data file. Clear apertures cannot be chosen merely from marginal-ray heights; the sag clearance and edge thickness of the adjacent menisci must remain physically plausible. The data file’s semi-diameters are therefore inferred values, not patent-published values.

## Verification Summary

The Table II prescription was re-entered from the patent and independently traced with a paraxial $y$–$n u$ matrix calculation using the patent’s e-line indices. Radii and spacings were scaled uniformly by 135.0 for the data file.

| Quantity | Independent value | Patent / source value | Result |
|---|---:|---:|---|
| EFL, normalized | 1.00082 | 1.00 | Agreement within table rounding |
| EFL, scaled | 135.11 mm | 135 mm marketed | Agreement within rounding |
| Back focal distance | 0.48116f / 64.957 mm | $a_9=0.4812f$ / 64.962 mm | Agreement |
| Total front-vertex-to-image track | 0.97434f / 131.54 mm | Sum of Table II spacings | Agreement |
| Full diagonal field on 36 × 24 mm | 18.19° | 18° | Agreement |
| Front-radius condition | 2.670 | $2.5 < \cdot < 4.5$ | Satisfied |
| Cemented-member thickness | 0.20498f | $>0.2f$ | Satisfied |
| Petzval sum | +0.1616 | Not tabulated | Computed |
| Close BF at 1.5 m | 80.215 mm | Not in patent | Computed for data-file focus slider |

The OCR text in the supplied PDF misreads some small values, most notably Table II’s $a_1=0.05000$ as “0.5000” in one parsed line. The page image and the optical trace both confirm $a_1=0.05000$.

## Manufacturer Specifications and Discrepancies

The production specifications are stable across the Elmarit-M 135 mm f/2.8 family in the properties most relevant to patent matching: 135 mm focal length, f/2.8 maximum aperture, 18° field, and five glass elements. Historical references vary between “5 elements / 3 groups” and “5 elements / 4 groups.” The patent-faithful optical count is four members/groups because the first and second menisci are separated by a real air gap, however thin.

The M-mount version uses the familiar goggled rangefinder attachment. Leitz-oriented references report the same optical formula in the Leica R 135 mm f/2.8 version, so the data file lists both Leica M and Leica R as mount variants of the optical formula. Mechanical details such as goggles, filter mount, hood, and barrel length are not part of the optical prescription.

Later secondary sources do not always agree on designer attribution, with some Leica Wiki-style summaries naming Walter Mandler. For the prescription transcribed here, the controlling primary source is the patent itself: Eugen Hermanni is the named inventor, and Ernst Leitz GmbH is the assignee.

## Sources / References

- US Patent 3,108,152, “Four Member Objective Lens,” Eugen Hermanni, assigned to Ernst Leitz GmbH; filed December 28, 1960; granted October 22, 1963. Prescription source: Table II and claim 2.
- SCHOTT, _Optical Glass Pocket Catalog_ (2020), especially the N-SK16, SF5/N-SF5, and N-SF8 optical-property tables.
- Wetzlar Historica Italia, “Elmarit 135mm f/2,8 R,” for the Hermanni attribution and statement that the R optical scheme is identical to the M-system 11829.
- LENS-DB.COM, “Leitz Canada ELMARIT-M 135mm F/2.8 [I] with OVU,” including the 1963 notice that the first two elements used special glass developed by the Leitz glass research laboratory.
- Leica Wiki / l-camera-forum and specialist dealer references for production variants, exterior specifications, 12-blade diaphragm reports, close-focus variants, and filter/diameter information.
