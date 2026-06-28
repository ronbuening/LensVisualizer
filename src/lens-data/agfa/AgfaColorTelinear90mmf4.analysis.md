## Patent Reference and Design Identification

**Patent:** US 2,819,651
**Application Number:** US 554,342
**Filed:** December 20, 1955
**Granted:** January 14, 1958
**Priority:** Germany, February 23, 1955
**Inventors:** Carl Baur and Christian Otzen
**Assignee:** Firma Agfa Camera-Werk Aktiengesellschaft, Munich, Germany
**Title:** Telephoto Objective
**Embodiment analyzed:** Single worked numerical example, normalized to $F = 1.000$

US 2,819,651 discloses a five-element telephoto objective with a positive cemented meniscus doublet in front, a positive meniscus singlet closely behind it, and a negative cemented meniscus doublet in the rear. The worked example is the only numerical embodiment in the patent and is the prescription analyzed here.

The identification with the Agfa Color-Telinear 90mm f/4 rests on convergent evidence rather than a manufacturer-published optical diagram. The patent example gives a corrected 30° field, $F = 1.000$, a relative aperture of $f/4$, and a back focal distance of 37.2% of focal length. Retrospective Ambi Silette references list a 90mm f/4 Color-Telinear as one of the interchangeable lenses for the system, with a 1957 introduction and a 1.8 m close-focus distance. The Agfa assignee, 1955 German priority, five-element telephoto architecture, and f/4 aperture are consistent with that production lens.

## Optical Architecture

The design is a classical positive-positive-negative telephoto objective with five elements in three air-separated groups.

Group 1 is a front cemented doublet, L1 + L2, made from a positive crown element and a negative higher-dispersion element. Its standalone focal length is $+11.517F$ ($+1036.6$ mm at the 90 mm scale), so it is not the main power source. It functions as a weak collective and chromatically disciplined entrance member.

Group 2 is the separate positive meniscus L3, placed only $0.02105F$ behind the front doublet. Its standalone focal length is $+0.60965F$ ($+54.9$ mm), making it the principal positive-power element. The patent emphasizes this placement: the uncemented positive meniscus behind the front doublet is the added degree of freedom used to satisfy the Gauss condition while preserving lateral-color correction.

Group 3 is the rear cemented doublet, L4 + L5, with both outer air surfaces concave to the front and a collective cemented interface concave to the rear. Its standalone focal length is $-0.84190F$ ($-75.8$ mm). This rear negative group supplies the telephoto shortening: the computed distance from the front vertex to the image plane is $0.87650F$, or 78.88 mm at the 90 mm scale, for a telephoto ratio of 0.8765.

The patent does not specify an aperture-stop position. The data file places a flat rendering stop in the large $s_2$ air space shortly behind L3, inferred from the drawing, and sizes it to give a 90 mm f/4 entrance pupil. This inserted stop does not change the paraxial EFL or back focal distance because it is an optically neutral air surface.

## Element-by-Element Analysis

### L1 — Biconvex Positive (Lens I)

$n_d = 1.51633$, $
u_d = 64.0$. Glass: BK7 class, probable Schott legacy crown. $f = +32.0$ mm.

L1 is the positive crown component of the front cemented doublet. It is bounded by R1 = +0.29731F and R2 = −0.44456F, so both surfaces contribute positive power in the patent's sign convention. Its low dispersion supplies the crown side of the front achromat.

The glass is treated as a BK7-class identification rather than a named production melt. The patent itself gives only $n_d$ and $
u_d$, not a catalog name.

### L2 — Biconcave Negative (Lens II)

$n_d = 1.62606$, $
u_d = 39.1$. Glass: BASF1 / BAM21 class, barium flint. $f = -30.2$ mm.

L2 is the negative flint partner cemented to L1 at R2. The high dispersion, compared with L1, creates the main chromatic split in the front achromat. Its rear surface R3 = +0.40284F exits to air, completing a very weak positive doublet.

The 626/391 code is an exact historical match to BASF1-type tables and a close modern match to several barium-flint equivalents. Since the patent is German and does not name a supplier, the data file uses a class label rather than privileging a modern non-Schott replacement.

### L3 — Positive Meniscus, Convex to Object (Lens III)

$n_d = 1.57041$, $
u_d = 48.1$. Glass: probable Schott-Jena KzF4 / short-flint class. $f = +54.9$ mm.

L3 is the dominant positive element. The strongly convex first surface R4 = +0.25966F introduces most of the element power, while R5 = +0.95588F is comparatively weak. Its computed focal length, $+0.60965F$, falls within the patent's claimed range of $0.5F$ to $0.7F$.

Historical glass tables place the 570/481 pair in the KzF4 short-flint region. Because the patent does not name a vendor and modern catalogs do not provide an unambiguous current Schott N-series equivalent, the data file uses a class annotation rather than an absolute vendor claim.

### L4 — Biconcave Negative (Lens IV)

$n_d = 1.51454$, $
u_d = 54.7$. Glass: KF3 / NSL33 class, crown-flint. $f = -16.8$ mm.

L4 is the strongly negative front component of the rear doublet. R6 = −0.13344F is the tightest radius in the prescription, and the cemented interface R7 = +0.35220F forms the collective contact surface named in the patent. The element is biconcave under the patent's sign convention.

The 515/547 pair is catalog-resolvable as a KF3 / NSL33 type rather than an unmatched crown. In this design it provides the lower-index, lower-dispersion negative half of the rear telephoto doublet.

### L5 — Biconvex Positive (Lens V)

$n_d = 1.60729$, $
u_d = 49.2$. Glass: BAM5 class, barium middle glass. $f = +24.3$ mm.

L5 is the positive rear element of the negative telephoto doublet. It is cemented to L4 at R7 and exits to air at R8 = −0.28966F. In combination with L4, it moderates the rear group's negative power to $-0.84190F$ while maintaining the required concave-concave outer air-surface geometry.

The 607/492 pair is an exact BAM5-class match in historical and catalog cross-references. It should not be confused with higher-Abbe glasses that share a similar index but have materially different dispersion.

## Glass Identification and Selection

The patent publishes only $n_d$ and Abbe number $V$, not glass names, partial-dispersion data, or melt-specific line indices. The revised glass table therefore reports catalog classes and exact $n_d/V$ matches where they exist; it avoids treating a modern equivalent as proof of the original Agfa procurement source.

| Element | $n_d$ | $
u_d$ | Code | Identification | Optical role |
|---|---:|---:|---:|---|---|
| L1 | 1.51633 | 64.0 | 516/640 | BK7 class, probable Schott legacy crown | Low-dispersion positive element in front doublet |
| L2 | 1.62606 | 39.1 | 626/391 | BASF1 / BAM21 class barium flint | High-dispersion negative element in front doublet |
| L3 | 1.57041 | 48.1 | 570/481 | Probable KzF4 short-flint class | Main positive-power singlet |
| L4 | 1.51454 | 54.7 | 515/547 | KF3 / NSL33 class | Strong negative element in rear doublet |
| L5 | 1.60729 | 49.2 | 607/492 | BAM5 class barium middle glass | Positive partner in rear negative doublet |

The chromatic design relies on a wide front crown/flint split of 24.9 Abbe units in L1 + L2, a moderate-dispersion positive power element in L3, and a narrower 5.5-unit split in the rear doublet. The rear doublet is therefore not an independently aggressive achromat; it is part of a system-level balance that also controls astigmatism, field curvature, and distortion through its concave-concave exterior surfaces.

## Focus Mechanism

The patent provides only the infinity-focus prescription. It does not publish close-focus states, moving-group tables, or magnification data.

The data file models the production lens as unit focus. At the 90 mm scale, the verified infinity back focal distance is 33.5211 mm. Using a 1.8 m close-focus distance measured approximately from the film plane, the exact paraxial unit-focus solution increases the back focal distance to 38.6075 mm. That is a 5.0864 mm extension and a computed magnification of about $|m| = 0.0565$, approximately 1:17.7.

## Chromatic Correction Strategy

The patent claims that the design corrects spherical aberration for two spectral lines while simultaneously eliminating lateral color. It specifically refers to the 587.6 nm helium d/D line and the 435.8 nm mercury g/G line in its coma discussion. Because the prescription table gives only $n_d$ and $V$, this analysis treats those chromatic statements as patent claims rather than independently computed secondary-spectrum results.

The front doublet performs the largest first-order achromatizing task. The separate L3 meniscus, placed directly behind that doublet, then allows the spherical-aberration correction to be adjusted without forcing the front doublet to carry the main positive power. The rear doublet provides the negative telephoto power and field-aberration control while contributing a smaller chromatic correction through the L4/L5 dispersion contrast.

## Conditional Expressions

The patent's principal conditional expressions are satisfied by the re-extracted numerical prescription.

| Condition | Patent requirement | Computed value | Result |
|---|---:|---:|---|
| Middle singlet focal length | $0.5F < f_\mathrm{III} < 0.7F$ | $0.60965F$ | Satisfied |
| Middle-to-rear air space | $0.275F < s_2 < 0.34F$ | $0.29529F$ | Satisfied |
| Front doublet focal length | $f_\mathrm{I+II} > 8F$ | $11.5173F$ | Satisfied |
| Rear radius sum | $R_7 \le |R_6|+|R_8| \le R_7 + 0.2F$ | $0.42310F$ | Satisfied |

The structural claim that the rear member consists of a biconcave front element and a biconvex rear element is also satisfied: L4 has R6 < 0 and R7 > 0, while L5 has R7 > 0 and R8 < 0.

## Verification Summary

The prescription was re-extracted directly from the patent table and independently traced with a paraxial $y, n u$ matrix model. The project sign convention uses positive radius for center of curvature to the image side; this agrees with the patent's statement that plus and minus radii denote surfaces convex and concave to the front, respectively.

| Quantity | Patent value | Computed normalized value | 90 mm scaled value |
|---|---:|---:|---:|
| Effective focal length | $F = 1.000$ | 1.0000049 | 90.0004 mm |
| Back focal distance | 37.2% of $F$ | 0.3724565 | 33.5211 mm |
| Front doublet focal length | 11.5F | 11.5173F | 1036.6 mm |
| Middle singlet focal length | 0.6F | 0.60965F | 54.9 mm |
| Rear doublet focal length | not stated | −0.84190F | −75.8 mm |
| Body track, front vertex to R8 | not stated | 0.50404F | 45.36 mm |
| Total track, front vertex to image | not stated | 0.87650F | 78.88 mm |
| Telephoto ratio, TL/EFL | not stated | 0.87649 | 0.87649 |
| Petzval sum, surface formula $\phi/(nn')$ | not stated | −0.0250715 | — |

The data file scales all radii and thicknesses by exactly 90.0 from the normalized patent values. The patent does not publish semi-diameters, so the data file uses conservative inferred clear semi-diameters that pass the on-axis f/4 bundle, the 15° chief ray, rim-slope limits, edge-thickness checks, and the binding R3/R4 cross-gap clearance. Off-axis marginal-ray vignetting is expected and is consistent with the patent's statement that marginal brightness remains nearly 50% at a 25° field angle.

## Design Heritage and Context

The Baur-Otzen design improves the older positive-front / negative-rear telephoto type by relocating the additional positive singlet behind the front doublet rather than in front of it. The patent states that earlier examples of the general type were limited to about f/4.5 or smaller apertures, about 20° field, and distortion of 4% or more. In this design, the close positive meniscus behind the front doublet enables an f/4 to f/3.5 class telephoto objective with approximately 30° useful field and less than 1% distortion at a 20° field angle.

For the Agfa Ambi Silette system, this made the 90mm Color-Telinear a compact moderate telephoto: the optical track is about 79 mm, the back focal distance is about 33.5 mm, and the lens remains shorter than its focal length without requiring a more complex rear group.

## Sources

1. US Patent 2,819,651, “Telephoto Objective,” Carl Baur and Christian Otzen, assigned to Agfa Camera-Werk AG. Filed December 20, 1955; granted January 14, 1958.
2. Cameraquest, “Ambi Silette,” cited for Ambi Silette lens list and 90mm Color-Telinear close-focus specification; this source lists a 36 mm filter.
3. AllPhotoLenses, “Agfa Color Telinear 90mm f/4,” cited for production years, Ambi Silette association, f/4–f/32 aperture listing, 1.8 m close focus, and 37 mm filter listing.
4. Historical Schott / Schott-Jena and equivalent glass tables, consulted for BK7, BASF1, KzF4, KF3, and BAM5 class matches.
5. Ohara and Sumita catalog cross-references, consulted as modern or historical-equivalent checks for the 626/391, 515/547, and 607/492 glass codes.
