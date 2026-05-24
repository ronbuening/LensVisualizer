# Canon EF-S 10-22mm f/3.5-4.5 USM — Optical Patent Analysis

## Patent Reference and Design Identification

**Patent:** US 2005/0286139 A1  
**Title:** Zoom Lens System and Image Pickup Apparatus Including the Same  
**Application Number:** 11/166,642  
**Filed:** June 24, 2005  
**Published:** December 29, 2005  
**Priority:** JP 2004-187856, filed June 25, 2004  
**Inventor:** Takeshi Nishimura  
**Applicant / Assignee:** Not printed in the U.S. publication excerpt; Canon attribution follows from the production-lens match and Canon's published EF-S 10-22mm specifications.  
**Embodiment analyzed:** Numerical Fifth Embodiment (¶0107; Fig. 9; aberration plots Figs. 10A-10C)

The Fifth Embodiment of US 2005/0286139 A1 is the closest published prescription match to the Canon EF-S 10-22mm f/3.5-4.5 USM. The identification is not based on a single signature but on a set of mutually consistent features.

1. Canon publishes the production lens as a 10-22 mm f/3.5-4.5 EF-S APS-C zoom with 13 elements in 10 groups. The patent embodiment gives $f = 10.3$ to $21.4$ mm, $Fno = 3.5$ to $4.6$, and a 13-element optical system when the G12 glass-and-resin hybrid is counted as one production element.
2. The patent uses an image height of $Y = 13.6$ mm, or a 27.2 mm image circle. That is the right scale for Canon APS-C coverage with modest design margin.
3. Canon describes the production lens as having three aspherical lens elements and a Super UD element. The patent embodiment contains three aspherical surfaces, on surfaces 1, 5, and 25, and includes an $n_d = 1.43875$, $\nu_d = 95.0$ fluorophosphate element matching OHARA S-FPL53.
4. The zoom architecture is the same negative-positive-negative-positive four-unit wide-angle zoom shown in the patent, with the first unit fixed and the second, third, and fourth units moving during zooming.
5. Canon's published inner-focus, ring-type USM mechanism is compatible with the patent's fixed front unit and internal moving units, although the patent does not publish close-focus spacing tables.

The printed table for the Fifth Embodiment omits $D9$, the axial thickness of the positive member G22 in the L2a cemented doublet. Paraxial reconstruction gives $D9 = 3.50$ mm. With that value, the computed effective focal lengths are 10.3165, 15.0168, and 21.3941 mm at the three patent zoom positions, matching the patent's 10.3, 15.0, and 21.4 mm values to the published precision.

## Optical Architecture

The design is a negative-lead, four-unit rectilinear wide-angle zoom: negative L1, positive L2, negative L3, and positive L4. This is the expected topology for a digital-SLR ultra-wide lens because the front negative unit expands the field and produces the long back focus required by an SLR mirror box.

The lens units are arranged as follows:

| Unit | Elements | Power | Computed focal length | Function |
|---|---:|---:|---:|---|
| L1 | G11-G13 | Negative | -16.456 mm | Wide-angle negative front unit and lateral-color control |
| L2 | G21-G23 | Positive | +34.675 mm | Positive variator, split into L2a and L2b around the stop |
| L3 | two elements | Negative | -53.784 mm | Compensating negative unit and principal-plane control |
| L4 | five elements | Positive | +36.071 mm | Rear relay and principal chromatic-correction group |

The zoom movement follows the patent description. During zooming from wide to telephoto, L2, L3, and L4 move toward the object side. The gap between L1 and L2 decreases, the gap between L2 and L3 increases, and the gap between L3 and L4 decreases. L2 and L4 are moved collectively in the patent's preferred mechanical simplification, while L3 follows a separate cam locus.

| Gap | Wide 10.3 mm | Mid 15.0 mm | Tele 21.4 mm | Trend |
|---|---:|---:|---:|---|
| D7, L1-L2 | 25.15 mm | 12.57 mm | 4.73 mm | Decreases |
| D13, L2-L3 | 1.03 mm | 5.32 mm | 9.62 mm | Increases |
| D17, L3-L4 | 10.23 mm | 5.94 mm | 1.64 mm | Decreases |
| Back focus after surface 25 | 35.269 mm | 41.956 mm | 51.947 mm | Increases |

The wide end is strongly retrofocus. The computed back-focus ratio is $bfw/fw = 3.4187$, matching the patent's conditional-expression value of 3.42. At the telephoto end, L1 and L2 approach each other and form a weak positive front component of about +72.48 mm; L3 and L4 approach each other and compute as a weak positive rear component of about +66.09 mm. The patent prose describes the L3-L4 rear component as negative, but the numerical prescription gives a weak positive result. The shortening behavior still follows from principal-plane displacement caused by the strong negative element inside L3, not from a literally negative combined L3-L4 paraxial power.

## Element-by-Element Analysis

### G11 — Negative Meniscus, nearly plano-convex to object, aspherical front surface

$n_d = 1.583126$, $\nu_d = 59.4$. Glass: S-BAL42 (OHARA). $f = -32.4$ mm.

G11 is the front negative meniscus. Its front radius is effectively flat at $R1 = 15000$ mm, while its rear surface is strongly curved at $R2 = 18.867$ mm. The result is a powerful negative element with most of its power concentrated at the rear surface. The front surface is aspherical and is used to correct the large off-axis errors introduced by the steep rear concavity.

The patent index and Abbe pair, 1.583126 / 59.4, match OHARA S-BAL42 in the current catalog.

### G12 — Hybrid Negative Composite, S-LAH66 substrate with resin asphere

Glass substrate: $n_d = 1.772499$, $\nu_d = 49.6$. Glass: S-LAH66 (OHARA). Standalone substrate $f = -21.8$ mm.  
Replica resin layer: $n_d = 1.524210$, $\nu_d = 51.4$. Glass: UV-cured resin medium specified by the patent. Standalone resin optical power is weak; the combined G12 composite computes to $f = -20.8$ mm.

G12 is the second negative member of L1 and is explicitly a hybrid aspherical construction. The resin layer is bonded to the rear of the glass substrate, and the outer resin surface is aspherical. The substrate supplies the high-index negative power; the resin supplies a manufacturable aspherical correction without requiring a strongly curved polished glass asphere on the rear of the element.

This hybrid construction is analytically important. The glass-resin junction is not optically neutral because the resin index differs from the substrate index. The data file therefore models the substrate and resin as separate optical media, while preserving Canon's production element count by treating the composite as one production element.

### G13 — Positive Meniscus, convex to object

$n_d = 1.728250$, $\nu_d = 28.5$. Glass: S-TIH10 (OHARA). $f = +40.4$ mm.

G13 is the positive, highly dispersive member that completes L1. It partially offsets the strong negative power of G11 and G12, reducing the front unit's net negative power while also supplying lateral-color correction.

The patent pair 1.728250 / 28.5 matches OHARA S-TIH10. This identifies G13 as a titanium flint, not a niobium or barium dense flint.

### L2a — Cemented Doublet: G21 negative meniscus + G22 biconvex positive

G21: $n_d = 1.834807$, $\nu_d = 42.7$. Glass: S-LAH55V (OHARA). $f = -25.0$ mm.  
G22: $n_d = 1.517417$, $\nu_d = 52.4$. Glass: S-NSL36 (OHARA). $f = +28.1$ mm.  
Combined L2a: $f = -212.09$ mm.

L2a is a weakly negative cemented doublet. It is not a major power group by itself; it works mainly by setting the principal-point behavior of L2 and controlling axial color before the positive L2b element.

The omitted $D9$ value belongs to G22. A value of 3.50 mm produces the patent focal lengths at all three zoom positions and satisfies the conditional-expression table. This value is therefore used in the data file and in all focal-length calculations.

### G23 — L2b Biconvex Positive Element behind the stop

$n_d = 1.518229$, $\nu_d = 58.9$. Glass: S-NSL3 (OHARA). $f = +30.4$ mm.

G23 supplies the dominant positive power of L2. Its nearly symmetric biconvex form around the stop reduces its coma and distortion contribution. Its normal crown glass keeps dispersion modest where the marginal beam is concentrated.

### L3 Negative Compensator Pair

First L3 element: $n_d = 1.804000$, $\nu_d = 46.6$. Glass: S-LAH65V (OHARA). $f = -22.4$ mm.  
Second L3 element: $n_d = 1.846660$, $\nu_d = 23.9$. Glass: S-TIH53 (OHARA). $f = +40.7$ mm.  
Combined L3: $f = -53.78$ mm.

L3 is a negative compensator unit. The first element is a strong biconcave negative lens in a high-index lanthanum flint. The second element is a high-dispersion positive titanium flint with most of its power on the front surface. Together they form a negative group that helps maintain focus and aberration balance as the positive L2 and L4 units move.

The S-LAH65V assignment is a current-catalog match to the 1.804000 / 46.6 patent pair. At $\nu_d = 46.6$, it is a dense lanthanum flint by dispersion, not a crown.

### L4a — Cemented Doublet: N10 low-dispersion positive + N11 dense-flint negative

N10: $n_d = 1.496999$, $\nu_d = 81.5$. Glass: S-FPL51 (OHARA). $f = +35.2$ mm.  
N11: $n_d = 1.834000$, $\nu_d = 37.2$. Glass: S-LAH60 (OHARA). $f = -32.2$ mm.  
Combined L4a: $f \approx +1523$ mm.

The first cemented doublet in L4 is almost afocal. Its role is primarily chromatic correction rather than net power generation. N10 is a UD fluorophosphate positive element; N11 is a dense lanthanum flint negative element. Their powers nearly cancel while their dispersion difference corrects secondary color before the Super UD singlet.

The patent pair 1.834000 / 37.2 corresponds to OHARA S-LAH60 glass. Current OHARA S-LAH58 has a materially different index and Abbe number and is not used for this element.

### N12 — Biconvex Super-UD Positive Element

$n_d = 1.438750$, $\nu_d = 95.0$. Glass: S-FPL53 (OHARA). $f = +47.8$ mm.

N12 is the lowest-dispersion glass element in the design and matches the Super UD signature in Canon's product description. Its low index requires relatively strong curvatures for the required positive power, but its very high Abbe number and anomalous dispersion make it valuable in the rear relay group, where it can correct color without greatly increasing the front-unit diameter.

The data file includes OHARA C, F, and g-line indices for S-FPL53 so chromatic modeling can use catalog spectral data rather than Abbe-only interpolation.

### L4b — Rear Cemented Doublet: N13 dense-flint negative + N14 positive rear asphere

N13: $n_d = 1.834000$, $\nu_d = 37.2$. Glass: S-LAH60 (OHARA). $f = -28.8$ mm.  
N14: $n_d = 1.484560$, $\nu_d = 70.0$. Glass: unmatched fluorophosphate crown, nearest OHARA S-FSL5 class. $f = +22.7$ mm.  
Combined L4b: $f = +87.84$ mm.

The rear doublet supplies positive relay power and the final aspherical correction. N13 is another S-LAH60 high-index flint. N14 is a low-index, high-Abbe positive element whose rear surface is aspherical. The patent's conditions (11) and (12) specifically govern this positive aspherical element: $1.4 < N4p < 1.55$ and $69 < \nu4p < 100$.

The N14 catalog identity remains unresolved. The nearest OHARA catalog neighborhood is S-FSL5 at approximately 1.48749 / 70.2, but the index difference is too large for a confident label. The data file therefore uses an explicit `Unmatched` annotation rather than assigning a misleading catalog name.

## Glass Identification and Selection

The catalog-resolved glass palette is as follows. Public-catalog matches were checked against the listed d-line refractive index and Abbe number; the patent itself supplies numerical media data, not glass trade names.

| Optical medium | Patent $n_d$ | Patent $\nu_d$ | Catalog identification | Location | Note |
|---|---:|---:|---|---|---|
| G11 | 1.583126 | 59.4 | S-BAL42 (OHARA) | L1 | Current catalog match |
| G12 substrate | 1.772499 | 49.6 | S-LAH66 (OHARA) | L1 | High-index negative substrate |
| G12 resin | 1.524210 | 51.4 | UV-cured replica resin | L1 | Patent resin medium |
| G13 | 1.728250 | 28.5 | S-TIH10 (OHARA) | L1 | Titanium flint |
| G21 | 1.834807 | 42.7 | S-LAH55V (OHARA) | L2a | High-index negative member |
| G22 | 1.517417 | 52.4 | S-NSL36 (OHARA) | L2a | Normal crown positive member |
| G23 | 1.518229 | 58.9 | S-NSL3 (OHARA) | L2b | Positive variator element |
| L3 negative | 1.804000 | 46.6 | S-LAH65V (OHARA) | L3 | Dense lanthanum flint |
| L3 positive | 1.846660 | 23.9 | S-TIH53 (OHARA) | L3 | High-dispersion titanium flint |
| N10 | 1.496999 | 81.5 | S-FPL51 (OHARA) | L4a | UD fluorophosphate |
| N11 | 1.834000 | 37.2 | S-LAH60 (OHARA) | L4a | Dense lanthanum flint |
| N12 | 1.438750 | 95.0 | S-FPL53 (OHARA) | L4 | Super UD fluorophosphate |
| N13 | 1.834000 | 37.2 | S-LAH60 (OHARA) | L4b | Dense lanthanum flint |
| N14 | 1.484560 | 70.0 | Unmatched fluorophosphate crown, 485700 code | L4b | Nearest OHARA S-FSL5 class, not an exact match |

The chromatic strategy is distributed. L1 uses the very dispersive S-TIH10 positive meniscus to balance lateral color introduced by two strong negative elements. L4 uses two dense-flint/low-dispersion pairings around the S-FPL53 Super UD singlet, placing most of the secondary-spectrum correction in the rear relay group.

## Focus Mechanism

The patent gives only infinity-focus zoom positions. It does not publish close-focus spacing tables, focus cam positions, or magnification-dependent variable gaps.

Canon's production lens uses inner focusing with ring-type USM and full-time manual focus. Canon publishes a closest focusing distance of 0.24 m and maximum magnification of 0.17× at 22 mm. Because no close-focus optical prescription is printed in the patent, the data file preserves only the infinity zoom spacings. The `closeFocusM` value is therefore production metadata, not a traced close-focus prescription.

The likely focus mechanism acts internally behind the fixed front unit, but the exact focusing group and travel cannot be determined from this patent alone.

## Aspherical Surfaces

The patent uses the following aspherical sag form:

$$
X = \frac{(1/R)Y^2}{1 + \sqrt{1 - (Y/R)^2}} + A Y^2 + B Y^4 + C Y^6 + D Y^8 + E Y^{10} + F Y^{12}
$$

For the Fifth Embodiment, the $A Y^2$ term is zero on all three aspherical surfaces. The corresponding data-file convention is $K = 0$, $A4 = B$, $A6 = C$, $A8 = D$, $A10 = E$, and $A12 = F$.

| Surface | Element | A4 | A6 | A8 | A10 | A12 |
|---|---|---:|---:|---:|---:|---:|
| 1A | G11 front | +2.33700e-05 | -4.61000e-08 | +7.45700e-11 | -6.90700e-14 | +2.82500e-17 |
| 5A | G12 resin rear | +3.82416e-06 | -1.84863e-07 | +1.59788e-10 | +1.36095e-12 | -7.62240e-15 |
| 25A | N14 rear | +2.79907e-05 | +9.77159e-08 | -1.24882e-10 | +2.46435e-12 | +1.04886e-14 |

At the adopted data-file semi-diameters, the polynomial departure from the spherical base is approximately:

| Surface | Adopted semi-diameter | Polynomial departure |
|---|---:|---:|
| 1A | 17.0 mm | +1.237 mm |
| 5A | 13.0 mm | -0.643 mm |
| 25A | 12.0 mm | +1.065 mm |

These departures are calculated at the estimated rendering clear apertures used in the data file. They should not be read as measured Canon production clear apertures.

## Conditional Expressions

The Fifth Embodiment satisfies the twelve conditions listed in Table 1 of the patent. Values below are independently recomputed from the paraxial model with $D9 = 3.50$ mm.

| No. | Expression | Patent bound | Computed value | Patent table value |
|---:|---|---|---:|---:|
| 1 | $bfw/fw$ | $2.9 < x < 5.0$ | 3.4187 | 3.42 |
| 2 | $f4/fw$ | $3.1 < x < 4.5$ | 3.4960 | 3.50 |
| 3 | $fw/f2$ | $0.1 < x < 0.42$ | 0.2975 | 0.30 |
| 4 | $f2/f2a$ | $-0.8 < x < -0.05$ | -0.1635 | -0.16 |
| 5 | $fw/f1$ | $-0.9 < x < -0.4$ | -0.6269 | -0.63 |
| 6 | $fw/f3$ | $-0.3 < x < -0.1$ | -0.1918 | -0.19 |
| 7 | $ft/fw$ | $1.8 < x < 2.9$ | 2.0737 | 2.07 |
| 8 | $Ng1$ | $1.55 < x < 1.75$ | 1.583126 | 1.583 |
| 9 | $\nu g1$ | $50 < x < 70$ | 59.4 | 59.4 |
| 10 | $\nu g5 - \nu g4$ | $3 < x < 25$ | 9.7 | 9.7 |
| 11 | $N4p$ | $1.4 < x < 1.55$ | 1.484560 | 1.485 |
| 12 | $\nu4p$ | $69 < x < 100$ | 70.0 | 70.0 |

## Petzval Sum Analysis

The surface-by-surface Petzval sum, computed as

$$
\sum_k \frac{\phi_k}{n_k n'_k},
$$

is +0.008201 mm$^{-1}$. The corresponding Petzval radius is about 121.93 mm, or roughly 11.8 times the wide-end focal length. This is a moderate positive field curvature term for a 105.8° patent diagonal field.

The balance is produced by combining low-index positive fluorophosphate elements in L4 with high-index negative flints in L1, L3, and the L4 cemented doublets. A thin-lens element-level Petzval estimate would not reproduce this result; the correct calculation is surface-by-surface through the actual refractive-index transitions.

## Verification Summary

| Quantity | Patent / table value | Computed value | Note |
|---|---:|---:|---|
| EFL, wide | 10.3 mm | 10.3165 mm | Matches Fifth Embodiment |
| EFL, mid | 15.0 mm | 15.0168 mm | Matches Fifth Embodiment |
| EFL, tele | 21.4 mm | 21.3941 mm | Matches Fifth Embodiment |
| BFD, wide | 35.23 mm from Table 1 ratio | 35.2688 mm | Gives $bfw/fw = 3.4187$ |
| L1 focal length | — | -16.456 mm | In-air group computation |
| L2 focal length | — | +34.675 mm | In-air group computation |
| L2a focal length | — | -212.09 mm | In-air group computation |
| L3 focal length | — | -53.784 mm | In-air group computation |
| L4 focal length | — | +36.071 mm | In-air group computation |
| Petzval sum | — | +0.008201 mm$^{-1}$ | Surface-by-surface formula |

Prescription notes: the printed patent omits D9 and does not publish close-focus optical spacings; N14 is left as an unmatched 485700 fluorophosphate-crown medium; and the data-file semi-diameters are estimated rendering clear apertures constrained by edge thickness and cross-gap clearance rather than patent-published apertures.

## Sources

- US 2005/0286139 A1, "Zoom Lens System and Image Pickup Apparatus Including the Same," Takeshi Nishimura, published December 29, 2005. Numerical Fifth Embodiment, Fig. 9, Figs. 10A-10C, Table 1.
- Canon UK official specifications, Canon EF-S 10-22mm f/3.5-4.5 USM: https://www.canon.co.uk/lenses/ef-s-10-22mm-f-3-5-4-5-usm-lens/specifications/
- Canon USA official product page, Canon EF-S 10-22mm f/3.5-4.5 USM: https://www.usa.canon.com/shop/p/ef-s-10-22mm-f-3-5-4-5-usm
- OHARA Glass Type catalog pages, current online catalogue: https://www.ohara-inc.co.jp/en/product/01000/
- OHARA Low Tg Optical Glass CSV, 2025-03-12 catalogue export, used only as a secondary check for moldable-class availability.
