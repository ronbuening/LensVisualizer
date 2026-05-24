# smc PENTAX-A 645 45mm f/2.8

## Patent Reference and Design Identification

**Patent:** US 4,487,485  
**Application Number:** 431,929  
**Priority Date:** October 30, 1981 (JP 56-173751)  
**Filed:** September 30, 1982  
**Granted:** December 11, 1984  
**Inventor:** Masaharu Hisada  
**Assignee:** Asahi Kogaku Kogyo Kabushiki Kaisha  
**Title:** Retrofocus Wide-Angle Photographic Lens System  
**Embodiment analyzed:** Example 1 / Claim 2

US 4,487,485 describes a retrofocus wide-angle photographic lens with an aperture ratio of 1:2.8, a full view angle of about 76°, and a backfocus about 1.4 times the overall focal length. Example 1 is the prescription transcribed here. The example is normalized to $F = 100$, gives a half-angle $\omega = 37.9°$, and lists $B_f = 137.80$.

The match to the Pentax 645 45 mm f/2.8 optical formula rests on convergent evidence rather than a patent statement naming the commercial lens. The patent embodiment has nine elements in eight groups, with the eighth and ninth lenses cemented into a positive doublet. Scaling the normalized prescription by $0.45$ gives $f = 45.0006$ mm, matching the 45 mm marketed focal length. The aperture ratio is 1:2.8, and the full patent field of $2\omega = 75.8°$ matches the published 76° angle of view for 645 film. Ricoh's current manufacturer specification for the later smc PENTAX-FA645 45mm F2.8 gives the same 9-element/8-group construction, 45 mm focal length, f/2.8 maximum aperture, 76° angle on 645 film, 0.45 m minimum focusing distance, 0.15× maximum magnification, 67 mm filter, and 8 diaphragm blades. The data file uses the patent prescription as the optical source and manufacturer-published production specifications where available.

The patent's backfocus value is measured from the final optical surface to the image plane, not from the lens mount flange. At production scale it becomes $62.0115$ mm, giving $B_f/f = 1.378$. This supports the retrofocus classification, but it does not by itself establish the mechanical position of the rear element relative to the Pentax 645 mount flange.

## Optical Architecture

The design is an all-spherical, nine-element retrofocus wide-angle lens for the 6×4.5 format. It has eight air-separated groups, with a single cemented doublet at the rear. The front-to-rear power sequence is:

**+  −  −  +  +  −  +  +**

The first three elements form the retrofocus front section. L1 is a weak positive meniscus, followed by two stronger negative menisci, L2 and L3. The combined first-three-element focal length is $F_{1.2.3} = -88.690$ in the patent's normalized units, or $-39.91$ mm after production scaling. This negative front section makes the backfocus substantially longer than the focal length.

The rear section, L4 through L9, supplies the positive power needed to return the diverging bundle to focus while correcting the aberrations introduced by the front group. L4 is a thick near-plano-convex element ahead of the stop. L5 and L6 form a strong positive/negative pair in air: L5 is the main converging element, and L6 is the primary dense-flint Petzval and chromatic-balancing element. L7 relays the converging beam into the final L8+L9 cemented doublet, whose composite focal length is $+199.25$ patent units, or $+89.66$ mm at production scale.

The patent drawing places the aperture stop in the $d_8$ gap between L4 and L5, but the numerical table does not provide a separate stop coordinate. In the data file, $d_8$ is split evenly around `STO`. This is a visualization/modeling choice; it preserves the patent spacings and gives a reasonable stop location consistent with Fig. 1.

The total optical track from the first surface to the final optical surface is $159.53$ patent units, or $71.79$ mm at production scale. The front-vertex-to-infinity-image distance is $297.33$ patent units, or $133.80$ mm after scaling. These are optical distances derived from the patent prescription, not barrel dimensions.

## Element-by-Element Analysis

### L1 — Positive Meniscus, Convex to Object

$n_d = 1.58913$, $\nu_d = 61.0$. Glass: S-BAL35 (OHARA), barium crown. $f = +320.1$ mm at production scale.

L1 is a very weak positive meniscus with $R_1 = +176.080$ mm and $R_2 = +2639.805$ mm after scaling. Its standalone focal length is far longer than the system focal length, so it does not carry the main positive power of the lens. Its practical role is to moderate the entrance angles of off-axis rays before they reach the stronger negative menisci behind it.

The S-BAL35 match is exact in refractive index and within patent rounding for Abbe number: the catalog lists $n_d = 1.58913$ and $\nu_d = 61.14$, while the patent gives $1.58913/61.0$. The moderate index and relatively high Abbe number are appropriate for a weak front collector where low chromatic contribution is more valuable than high bending efficiency.

### L2 — Negative Meniscus, Convex to Object

$n_d = 1.48749$, $\nu_d = 70.1$. Glass: S-FSL5 (OHARA), low-dispersion fluor-crown. $f = -81.0$ mm at production scale.

L2 is the first principal negative element of the retrofocus front group. Its rear surface is much more strongly curved than its front surface, producing the negative power while preserving a meniscus form convex toward the object. The patent explicitly requires L2 to be weaker than L3, because L2 intercepts the larger effective aperture and would otherwise impose too much spherical aberration and coma.

The S-FSL5 catalog match has $n_d = 1.48749$ and $\nu_d = 70.23$, matching the patent's $1.48749/70.1$ within rounding. This low-dispersion choice reduces lateral color generated by the front negative group.

### L3 — Negative Meniscus, Convex to Object

$n_d = 1.48749$, $\nu_d = 70.1$. Glass: S-FSL5 (OHARA), low-dispersion fluor-crown. $f = -66.0$ mm at production scale.

L3 is the stronger of the two front negative menisci. Together L2 and L3 supply most of the negative power needed to reach the long retrofocus backfocus. The patent's condition (1) constrains the first-three-element composite power; the verified value is $F_{1.2.3} = -88.690$ in patent units, safely inside the permitted range.

Using the same low-dispersion glass in L2 and L3 distributes the front-section negative power without creating a large internal dispersion mismatch. That is a conservative 1980s solution: chromatic correction is not handled by anomalous partial-dispersion glass, but by ordinary achromatic balancing and by limiting lateral color at the front of the system.

### L4 — Near-Plano-Convex Positive

$n_d = 1.72000$, $\nu_d = 43.7$. Glass: S-LAM52 (OHARA), lanthanum flint. $f = +79.0$ mm at production scale.

L4 is a thick positive element just ahead of the aperture stop. Its rear surface is effectively flat relative to the rest of the prescription, while the front surface provides the bending. It begins the transition from the front diverging section to the positive rear section.

The large L4 center thickness is part of the patent's condition (5), which constrains $d_7 + d_8 + d_9$. The verified value is $65.92$ patent units, just below the upper bound of $70.0$. The patent explains this spacing as a coma-balancing measure: shortening this region would lower the ray path through L5 and force stronger curvature in L5, increasing spherical aberration.

S-LAM52 is a non-current or non-recommended OHARA glass in modern catalogs, but it matches the patent index pair. Its code is 720437, corresponding to $n_d = 1.72000$ and $\nu_d = 43.69$. At $\nu_d \approx 43.7$, it is properly treated as a lanthanum flint, not a crown.

### L5 — Biconvex Positive

$n_d = 1.72000$, $\nu_d = 43.7$. Glass: S-LAM52 (OHARA), lanthanum flint. $f = +44.0$ mm at production scale.

L5 is the strongest positive element in the design. Its rear surface, $R_{10} = -41.340$ mm after scaling, carries the largest single positive Petzval contribution in the prescription. In paraxial terms, L5 is the main workhorse of the converging rear group.

Its proximity to the stop and its pairing with the following negative L6 make L5 central to the balance among convergence, coma correction, Petzval correction, and longitudinal chromatic correction. The L5/L6 pair is not cemented, but it behaves like a strong positive/negative correction pair in air.

### L6 — Biconcave Negative

$n_d = 1.80518$, $\nu_d = 25.4$. Glass: S-TIH6 (OHARA), dense flint. $f = -38.7$ mm at production scale.

L6 is the only biconcave element in the system and the primary negative correction element behind the stop. It offsets much of L5's positive Petzval contribution and provides a strong dispersion lever against the S-LAM52 positive elements.

The correct OHARA match is S-TIH6, code 805254, not S-TIH53. S-TIH6 has $n_d = 1.80518$ and $\nu_d = 25.42$, matching the patent's $1.80518/25.4$. S-TIH53, by contrast, is a different OHARA glass with $n_d = 1.84666$ and $\nu_d = 23.78$, so it does not match this prescription.

### L7 — Positive Meniscus, Concave to Object

$n_d = 1.83481$, $\nu_d = 42.7$. Glass: S-LAH55V (OHARA), dense lanthanum flint. $f = +83.4$ mm at production scale.

L7 is a positive meniscus with both radii negative. It is concave toward the object and convex toward the image, a useful orientation for relaying the converging post-stop bundle into the rear doublet without imposing excessive spherical aberration.

S-LAH55V matches the patent closely: the catalog lists $n_d = 1.83481$ and $\nu_d = 42.73$. It is the highest-index glass in the system. Its high index allows useful positive power with moderate radii, while its flint-like Abbe number keeps it compatible with the rear group's chromatic balance.

### L8 + L9 — Rear Cemented Doublet, Negative + Positive

**L8:** $n_d = 1.80518$, $\nu_d = 25.4$. Glass: S-TIH6 (OHARA), dense flint. $f_{\text{in air}} = -108.6$ mm at production scale.  
**L9:** $n_d = 1.80400$, $\nu_d = 46.6$. Glass: S-LAH65V (OHARA), dense lanthanum flint. $f_{\text{in air}} = +49.7$ mm at production scale.  
**Doublet composite:** $f = +89.66$ mm at production scale.

The final group is a cemented negative-positive doublet. L8 is nearly plano-concave, while L9 is biconvex. The patent states that the eighth and ninth lenses form a doublet with positive composite focal length, and the paraxial calculation verifies a positive composite focal length of $+199.25$ patent units.

Condition (6) requires both $n_8$ and $n_9$ to exceed 1.75. The reason given by the patent is spherical-aberration control: lower-index doublet glasses would require smaller radii, increasing spherical aberration in a lens intended for a film size larger than 35 mm.

The glass identities are S-TIH6 for L8 and S-LAH65V for L9. S-LAH65V has catalog values $n_d = 1.80400$ and $\nu_d = 46.58$, matching the patent's $1.80400/46.6$. Despite the relatively high Abbe number for a lanthanum glass, $\nu_d < 50$ places it on the flint side of the ordinary crown/flint boundary.

## Glass Identification and Selection

The glass palette is fully catalog-resolvable against OHARA glass types. The prior identification of the $1.80518/25.4$ elements as TIH53 was corrected to S-TIH6 after catalog comparison. Six-digit glass codes are useful here because they encode the rounded $n_d$ and $\nu_d$ values; for example, code 805254 corresponds to approximately $n_d = 1.805$ and $\nu_d = 25.4$.

| Element(s) | Patent $n_d/\nu_d$ | OHARA match | Catalog code | Catalog $n_d/\nu_d$ | Function |
|---|---:|---|---:|---:|---|
| L1 | 1.58913 / 61.0 | S-BAL35 | 589612 | 1.58913 / 61.14 | Weak front collector |
| L2, L3 | 1.48749 / 70.1 | S-FSL5 | 487702 | 1.48749 / 70.23 | Low-dispersion negative front pair |
| L4, L5 | 1.72000 / 43.7 | S-LAM52 | 720437 | 1.72000 / 43.69 | High-index positive rear-section elements |
| L6, L8 | 1.80518 / 25.4 | S-TIH6 | 805254 | 1.80518 / 25.42 | Dense-flint Petzval and color correction |
| L7 | 1.83481 / 42.7 | S-LAH55V | 835427 | 1.83481 / 42.73 | High-index relay meniscus |
| L9 | 1.80400 / 46.6 | S-LAH65V | 804466 | 1.80400 / 46.58 | Positive member of rear doublet |

The chromatic strategy is conventional rather than apochromatic. The front negative group uses low-dispersion S-FSL5 to limit lateral color at the source. The rear group uses high-index positive lanthanum flints against high-dispersion S-TIH6 elements, especially across the L5/L6 pair and the L8/L9 cemented doublet. The patent does not publish partial-dispersion targets, and the design should not be described as apochromatic.

## Focus Mechanism

The patent provides only an infinity-focus prescription and no variable-spacing table. The production lens is therefore modeled as unit focus: the optical assembly translates as a rigid unit, and only the final back-focus distance changes in the data file.

The manufacturer-published minimum focusing distance is 0.45 m with 0.15× maximum magnification. A thick-lens paraxial conjugate calculation using the scaled prescription gives a close-focus back-focus gap of $68.4912$ mm for a 0.45 m object-to-image distance. Since the infinity back-focus gap is $62.0115$ mm, the modeled focus extension is $6.4797$ mm. The same calculation gives paraxial magnification $|m| = 0.144$, consistent with the published 0.15× value after rounding and mechanical measurement conventions.

| State | Final gap / BFD | Notes |
|---|---:|---|
| Infinity | 62.0115 mm | Scaled patent value $137.8033 \times 0.45$ |
| 0.45 m | 68.4912 mm | Thick-lens unit-focus solve |
| Travel | 6.4797 mm | Modeled forward unit extension |

## Aspherical Surfaces

The prescription is entirely spherical. The patent provides no aspherical coefficient table, no aspherical equation, and no claim requiring aspherical surfaces. The data file therefore uses `asph: {}` and preserves all 17 refracting surfaces as spherical surfaces.

## Conditional Expressions

The patent states six design conditions. All are satisfied by Example 1 when computed from the numerical prescription.

**Condition (1):** $F/1.3 < |F_{1.2.3}| < F/0.8$, with $F_{1.2.3} < 0$.

Computed: $|F_{1.2.3}| = 88.690$; bounds: $76.923 < 88.690 < 125.000$.

**Condition (2):** $1.0 < F_2/F_3 < 1.4$.

Computed: $F_2/F_3 = (-179.954)/(-146.663) = 1.227$.

**Condition (3):** $F/0.6 < |F_{1.2.3.4}| < F/0.2$, with $F_{1.2.3.4} < 0$.

Computed: $|F_{1.2.3.4}| = 261.164$; bounds: $166.667 < 261.164 < 500.000$.

**Condition (4):** $F/0.5 < |F_{1.2.3.4.5.6}| < F/0.3$, with $F_{1.2.3.4.5.6} < 0$.

Computed: $F_{1.2.3.4.5.6} = -227.898$; bounds by magnitude: $200.000 < 227.898 < 333.333$. The Example 1 table prints $+227.95$, but the condition itself requires a negative value and Examples 2 and 3 print the sign as negative. The independent paraxial calculation confirms that Example 1's sign is a patent-table omission, not an optical ambiguity.

**Condition (5):** $0.5F < d_7 + d_8 + d_9 < 0.7F$.

Computed: $d_7 + d_8 + d_9 = 34.47 + 7.78 + 23.67 = 65.92$; bounds: $50.00 < 65.92 < 70.00$.

**Condition (6):** $n_8 > 1.75$ and $n_9 > 1.75$.

Computed: $n_8 = 1.80518$ and $n_9 = 1.80400$.

## Petzval Sum and Field Curvature

The Petzval sum was recomputed surface by surface using $\sum \phi/(n n')$, where $\phi = (n' - n)/R$ at each refracting surface. At the patent normalization, the result is:

$$
P = +0.00111435\ \text{patent-unit}^{-1}, \qquad R_P = 1/P = 897.39
$$

After scaling to the 45 mm production focal length, the Petzval radius is approximately $403.8$ mm. The normalized ratio $R_P/f = 8.97$ indicates a comparatively flat Petzval surface for a 76° 645-format retrofocus lens.

The cancellation is dominated by the rear positive/negative pair. L5 contributes $+0.006107$ patent-unit$^{-1}$ across its two surfaces, while L6 contributes $-0.006333$ patent-unit$^{-1}$. The L2/L3 negative front pair contributes $-0.008494$ patent-unit$^{-1}$, which is then offset by the positive rear section.

## Data-File Modeling Notes

The data file scales the patent prescription by $0.45$ from $F = 100$ to the 45 mm production focal length. No sensor cover glass or filter is included. The aperture stop is inserted in the $d_8$ air gap, split evenly because the patent drawing shows the stop in that interval but the table does not give a stop coordinate.

The patent omits semi-diameters. The data file therefore uses inferred semi-diameters constrained by paraxial clearance, the published 67 mm filter size, positive edge thickness, a maximum element-surface semi-diameter ratio of 1.25, $sd/|R| < 0.90$, and cross-gap sag intrusion below 90% of the corresponding air gap. These inferred apertures are suitable for visualization and first-order ray tracing; they should not be treated as factory clear-aperture measurements.

## Verification Summary

All listed quantities below were recomputed from the patent prescription using a paraxial ray trace in $y,u$ coordinates.

| Quantity | Patent / stated | Computed | Comment |
|---|---:|---:|---|
| EFL | 100.000 | 100.0013 | Matches normalization |
| BFD | 137.80 | 137.8033 | Matches table |
| $F_2$ | −179.96 | −179.954 | Matches table |
| $F_3$ | −146.66 | −146.663 | Matches table |
| $F_{1.2.3}$ | −88.69 | −88.690 | Matches table |
| $F_{1.2.3.4}$ | −261.16 | −261.164 | Matches table |
| $F_{1.2.3.4.5.6}$ | +227.95 printed | −227.898 | Printed sign is inconsistent with the condition and computation |
| Production EFL | 45 mm | 45.0006 mm | Patent scaled ×0.45 |
| Production BFD | — | 62.0115 mm | Scaled computed BFD |
| Close-focus BFD | — | 68.4912 mm | Unit-focus solve for 0.45 m |
| Close-focus magnification | 0.15× published | 0.144× paraxial | Consistent after rounding |
| Petzval sum | — | +0.00111435 | Surface-by-surface formula |

## Sources

- US Patent 4,487,485, Masaharu Hisada / Asahi Kogaku Kogyo Kabushiki Kaisha, "Retrofocus Wide-Angle Photographic Lens System," granted December 11, 1984. Uploaded source: `US4487485.pdf`.
- Ricoh Imaging Americas, "smc PENTAX-FA645 45mm F2.8," official product specifications: https://us.ricoh-imaging.com/product/smc-pentax-fa645-45mm-f2-8/
- OHARA Corporation, S-BAL35 optical glass data: https://oharacorp.com/glass/s-bal35/
- OHARA Corporation, S-FSL5 optical glass data: https://oharacorp.com/glass/s-fsl5/
- OHARA Corporation, S-LAM52 optical glass data: https://oharacorp.com/glass/s-lam52/
- OHARA Corporation, S-TIH6 optical glass data: https://oharacorp.com/glass/s-tih6/
- OHARA Corporation, S-TIH53 optical glass data, used only to reject the prior TIH53 identification: https://oharacorp.com/glass/s-tih53/
- OHARA Corporation, S-LAH55V optical glass data: https://oharacorp.com/glass/s-lah55v/
- OHARA Corporation, S-LAH65V optical glass data: https://oharacorp.com/glass/s-lah65v/
