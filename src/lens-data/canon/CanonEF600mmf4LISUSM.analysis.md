## Patent Reference and Design Identification

**Patent:** US 6,115,188 A\
**Application Number:** 09/172,164\
**Filed:** 1998-10-14\
**Priority:** JP 9-299573 (1997-10-16); JP 9-345859 (1997-12-01); JP 10-276618 (1998-09-11)\
**Granted:** 2000-09-05\
**Inventors:** Akihiro Nishio; Hideki Ogawa; Makoto Misaka\
**Assignee:** Canon Inc. (the patent prints Canon Kabushiki Kaisha)\
**Title:** *Optical System and Optical Apparatus Having the Same*\
**Embodiment analyzed:** Numerical Example 22

The prescription is the third-embodiment Numerical Example 22 of US 6,115,188 A. The patent gives the example as
$f=585.20$ mm, Fno = 4.12, and a full field of $2\omega=4.2^\circ$, and Figure 85 shows the corresponding lens block
diagram. The third-embodiment text defines a positive first lens unit L1, a negative axially movable focus unit L2, and
a positive third unit L3 containing the transversely movable image-stabilization subunit L3b (US 6,115,188,
cols. 27–35; Fig. 85; Table 3).

The selected production correlation is the **CANON EF 600mm f/4 L IS USM**. It is a correlation, not a manufacturer
statement that this patent is the production prescription. Four independent features make the identification specific:

1. Numerical Example 22 is a 585.20 mm, F/4.12 design, closely corresponding to a marketed 600 mm f/4 lens without any
   scaling of the patent prescription.
2. The raw patent path contains 17 media elements in 13 air-separated groups when the front protection plate HG and rear
   filter FL are counted. Canon publishes 17 elements in 13 groups and explicitly states that the protection glass and
   rear filter are included in that count.
3. Canon publishes one fluorite element and two UD elements. Example 22 contains one 1.433870/95.1 fluorite-coordinate
   element and two 1.496999/81.5 low-dispersion elements.
4. The patent's inner-focus L2 unit and transversely moving L3b stabilization unit agree with the production lens's inner
   focusing and image-stabilization functions, and the patent predates Canon's September 1999 market introduction.

The LensVisualizer model deliberately differs from the manufacturer's 17/13 count because it follows the current data
rules for an ordinary sequential prescription. HG, the rear filter FL, and the inactive flare-cutter plane FC are not
modeled as active elements. The resulting modeled prescription contains **15 elements in 11 groups**. The optical effect
of the omitted 2.00 mm rear filter is retained by replacing the final path to the image plane with an air-equivalent
spacing of **117.098974102 mm**. No uniform scaling is applied. The 2001 Certificate of Correction does not alter
Numerical Example 22, so no Example-22 numerical correction is applied.

The marketed and design quantities are kept separate throughout this analysis. Canon identifies the product as a 600 mm
f/4 lens; the authored prescription computes to **585.327789123 mm** and uses the patent/model value **F/4.12** for the
optical aperture. Canon's official product record gives a September 1999 market date, 5.5 m closest focus, 0.12× maximum
magnification, eight diaphragm blades, and a minimum aperture of f/32.

## Optical Architecture

The design is a long-focus **positive–negative–positive telephoto system** with internal focusing and a transverse
stabilization group. The active normalized track from the first modeled powered surface to the source image plane is
**468.018974102 mm**. Dividing by the computed EFL gives **TL/EFL = 0.799584409**, so the design meets the project's
telephoto criterion of TL/EFL < 1. The normalized rear distance is only about 0.2001 EFL, so the design is not
retrofocus by the project's BFD > EFL definition.

The patent divides the first positive unit L1 into three subunits: positive L1a, negative L1b, and positive L1c. The
negative L2 cemented doublet follows and translates axially for focusing. The aperture stop is at the patent's R16
location. L3 then contains positive L3a, negative L3b, and positive L3c; L3b is the transversely movable stabilization
subunit.

Independent paraxial reduction of the authored arrays gives the following net focal lengths. These are **subunit or
cemented-unit powers in situ as isolated groups**, not the standalone focal lengths printed for individual elements in
the data file.

| Unit | Net focal length (mm) | Function |
| --- | ---: | --- |
| L1a | +365.989798 | Positive front collector |
| L1b | −949.195624 | Weak negative middle subunit |
| L1c | +443.289835 | Positive rear subunit of L1 |
| L1 | +273.196687 | Complete positive first unit |
| L2 | −199.794479 | Cemented negative inner-focus unit |
| L3a | +236.063431 | Positive subunit ahead of stabilization group |
| L3b | −60.453463 | Complete negative transverse IS subunit |
| L3c | +85.090384 | Positive rear subunit |
| L3 | +1461.700449 | Complete positive third unit |

This division places the focusing mass in a comparatively small negative doublet rather than in the large-diameter front
assembly. The patent explicitly uses this arrangement to reduce focus-unit size and focus travel while controlling the
variation of aberrations with object distance. Within L3, the positive L3a converges the beam before the stabilization
unit, while positive L3c permits L3b to carry stronger negative power without changing the system focal length excessively.
That power distribution is the main architectural feature shared by the focusing and stabilization provisions.

The prescription is entirely spherical. There are no authored aspherical surfaces, conic constants, or polynomial
coefficients, and therefore no asphere coefficient transformation is applicable. The scale factor is exactly 1.0.

## Element-by-Element Analysis

### L1a-1 — Biconvex Positive

**nd = 1.496999, νd = 81.5. Glass: 497815/497816 low-dispersion crown class (vendor unresolved; Canon-correlated UD). Standalone f = +365.989798 mm.**

L1a-1 is the single element of the positive front subunit L1a, so its standalone focal length is also the computed net
focal length of L1a. It is the first active element after omission of the protective plate and carries the largest modeled
clear aperture. The third-embodiment design conditions control the ratio $f_{1a}/f$ specifically because this front
subunit sets the initial convergence of the large entrance bundle and therefore the size and aberration burden of the
following front assembly.

The high Abbe number is part of the patent's material strategy for the front positive member. Canon's production record
states that the finished lens contains two UD elements; the two 1.496999/81.5 elements are the only matching pair in
Example 22. The data therefore marks this element as manufacturer-correlated UD while retaining a vendor-unresolved glass
class rather than assigning a specific catalog product.

### L1b-1 — Positive Meniscus

**nd = 1.496999, νd = 81.5. Glass: 497815/497816 low-dispersion crown class (vendor unresolved; Canon-correlated UD). Standalone f = +324.493634 mm.**

This positive meniscus begins the middle subunit L1b. Its standalone power is positive, but L1b as a two-element
air-spaced subunit is net negative. The patent describes the negative middle subunit as a means of moderating the
spherical and longitudinal chromatic aberration introduced by the positive front subunit while preserving the desired
convergence of L1 as a whole.

As with L1a-1, the production UD identification is correlation evidence rather than a vendor glass identification. The
stored nd/νd pair remains the patent value.

### L1b-2 — Biconcave Negative

**nd = 1.834807, νd = 42.7. Glass: 835427 high-index lanthanum class (vendor unresolved). Standalone f = −230.532155 mm.**

The biconcave L1b-2 supplies the negative power that dominates the preceding positive meniscus, giving the complete L1b
subunit a computed focal length of **−949.195624 mm**. The element's higher index and lower Abbe number contrast with the
preceding 1.496999/81.5 member, providing a conventional positive/negative material split without requiring a cemented
interface.

The subunit is intentionally weak compared with either constituent standalone element. Its in-situ role is therefore not
well represented by the −230.53 mm standalone focal length alone; the air spacing and the positive L1b-1 materially reduce
the net negative power of L1b.

### L1c-1 — Positive Meniscus, Fluorite-Coordinate Member

**nd = 1.433870, νd = 95.1. Glass: Fluorite (CaF2), manufacturer-correlated. Standalone f = +270.260667 mm.**

L1c-1 begins the rear positive subunit of L1. Its low index and very high Abbe number form the unique fluorite-like
coordinate in Example 22. Canon independently publishes one fluorite element for the production lens, so this element is
identified as the corresponding fluorite member without assigning a branded optical-glass catalog name.

The element is strongly positive in isolation and restores convergence after the weakly negative L1b. Its role is best
understood as part of the complete L1c pair, whose net focal length is **+443.289835 mm**, and of the complete L1 unit,
whose net focal length is **+273.196687 mm**.

### L1c-2 — Negative Meniscus

**nd = 1.516330, νd = 64.1. Glass: 516641 crown class (S-BSL7/K-BK7 coordinate equivalents; vendor unresolved). Standalone f = −623.617174 mm.**

L1c-2 is a weak negative meniscus following the much stronger positive fluorite-coordinate element. The pair remains net
positive. In the patent architecture this rear subunit completes the positive first unit before the movable focus group
and supplies additional freedom for balancing the aberrations left by L1a and L1b.

The 516641 coordinate has exact or near-exact equivalents in several manufacturers' catalogs, so the data intentionally
retains a family-level description. A specific vendor identity would overstate what the patent provides.

### L2-1 — Biconvex Positive, Front Member of Focus Doublet

**nd = 1.805181, νd = 25.4. Glass: 805254 dense-flint class (N-SF6/S-TIH6 family; vendor unresolved). Standalone f = +215.019726 mm.**

L2-1 is the positive front member of the cemented focus doublet. Its standalone positive power should not be confused
with the behavior of the complete L2 unit: after cementing to L2-2, the doublet has a computed net focal length of
**−199.794479 mm**.

The patent deliberately makes L2 a compact negative unit and assigns all axial focusing motion to it. Because the unit is
cemented, its internal spacing is fixed while the air gaps before and after it change together during focusing.

### L2-2 — Biconcave Negative, Rear Member of Focus Doublet

**nd = 1.834807, νd = 42.7. Glass: 835427 high-index lanthanum class (vendor unresolved). Standalone f = −102.598687 mm.**

L2-2 supplies the dominant negative standalone power of the focus doublet. At the cemented R14 interface the data assigns
the surface to the downstream L2-2 element, matching the LensVisualizer cemented-interface convention.

The complete L2 doublet, not L2-2 alone, is the moving optical unit. Its net negative power satisfies the third-embodiment
focus-power condition and permits the required finite-distance correction with a reconstructed travel of about 18.83 mm.

### L3a-1 — Negative Meniscus, Front Member of Cemented L3a

**nd = 1.846658, νd = 23.9. Glass: 847238/847239 dense-flint class (vendor unresolved; source vd rounded 23.9). Standalone f = −151.002645 mm.**

L3a-1 begins the first subunit behind the stop. It is negative as a standalone lens but is cemented directly to the much
stronger positive L3a-2. The complete cemented L3a pair is therefore net positive, with a computed focal length of
**+236.063431 mm**.

Its high-index, low-Abbe coordinate recurs elsewhere in L3, allowing the rear assembly to alternate strong positive and
negative element powers while keeping the net subunit powers required by the patent.

### L3a-2 — Biconvex Positive, Rear Member of Cemented L3a

**nd = 1.603112, νd = 60.6. Glass: 603606/603607 SK14/BSM14 crown class (vendor unresolved). Standalone f = +91.773530 mm.**

L3a-2 dominates the power of the cemented pair and reverses L3a-1's standalone negative power to produce a net-positive
L3a. The patent places this positive subunit immediately before the stabilization group so that the beam is further
converged before reaching L3b, helping keep the transversely moving group comparatively small.

The cemented interface also pairs substantially different Abbe numbers, but the data does not contain line indices or
partial-dispersion values sufficient for a stronger spectral-performance claim.

### L3b-1 — Biconvex Positive, Front Member of IS Cemented Pair

**nd = 1.846658, νd = 23.9. Glass: 847238/847239 dense-flint class (vendor unresolved; source vd rounded 23.9). Standalone f = +93.422746 mm.**

L3b-1 is the positive front element of the cemented pair within the image-stabilization subunit. Although positive in
isolation, it is followed by the stronger negative L3b-2. The two-element cemented pair alone has a computed net focal
length of **−280.886760 mm**.

This pair forms only part of the moving stabilization subunit. The separate negative singlet L3b-3 must be included before
assigning a power to L3b as a whole.

### L3b-2 — Biconcave Negative, Rear Member of IS Cemented Pair

**nd = 1.603112, νd = 60.6. Glass: 603606/603607 SK14/BSM14 crown class (vendor unresolved). Standalone f = −68.565838 mm.**

L3b-2 supplies the negative power that makes the cemented L3b-1/L3b-2 pair net negative. Its material coordinate is the
same SK14/BSM14-class coordinate used for L3a-2, but its surface curvatures make its standalone behavior strongly
negative rather than positive.

The complete L3b motion cannot be described from this cemented pair alone. In the patent and the data model, L3b-3 is part
of the same transversely moving stabilization subunit.

### L3b-3 — Biconcave Negative Singlet

**nd = 1.804000, νd = 46.6. Glass: 804466 lanthanum class (vendor unresolved). Standalone f = −76.551196 mm.**

This singlet follows the cemented pair and completes L3b. Its addition changes the complete subunit to a much stronger
computed net focal length of **−60.453463 mm**. That value, rather than the −280.89 mm focal length of the cemented pair,
is the relevant first-order power for the transversely moving stabilization unit.

The patent's conditions on L3b power are intended to obtain adequate image-displacement sensitivity while retaining
control of aberrations during decentering. No numerical transverse displacement is published for Example 22, so the data
models L3b's centered axial prescription only.

### L3c-1 — Biconvex Positive Singlet

**nd = 1.720000, νd = 43.7. Glass: 720437 lanthanum-flint class (vendor unresolved). Standalone f = +148.247444 mm.**

L3c-1 begins the final positive subunit. It provides positive power before the rear cemented pair and helps restore the
positive power required of L3 after the strongly negative stabilization group.

The patent specifically uses a positive L3c after L3b so that L3b can be made more negative, and therefore more sensitive
to transverse displacement, without forcing the complete system focal length to change correspondingly.

### L3c-2 — Biconvex Positive, Front Member of Rear Cemented Pair

**nd = 1.749500, νd = 35.0. Glass: 750350 lanthanum-flint class (vendor unresolved). Standalone f = +75.722402 mm.**

L3c-2 is the stronger positive member of the final cemented doublet. Together with L3c-3, the cemented pair has a computed
net focal length of **+192.222332 mm**. It remains positive despite the negative standalone power of the rear element.

The complete three-element L3c subunit is stronger still, at **+85.090384 mm**, because the preceding positive singlet
L3c-1 contributes substantial additional power.

### L3c-3 — Biconcave Negative, Rear Member of Rear Cemented Pair

**nd = 1.846658, νd = 23.9. Glass: 847238/847239 dense-flint class (vendor unresolved; source vd rounded 23.9). Standalone f = −121.262876 mm.**

L3c-3 is the final powered element of the active model. Its negative standalone power tempers the strong positive
L3c-2 while leaving both the cemented pair and the complete L3c subunit positive. The rear filter and flare-cutter planes
that appear after this element in the patent are intentionally omitted from the active sequential prescription.

The data's final spacing after L3c-3 is therefore not the patent's raw physical air distance. It is the normalized
air-equivalent distance that preserves the source image-plane reference after the rear filter is removed.

## Glass Identification and Selection

The patent supplies refractive index and Abbe number coordinates but does not identify glass manufacturers. The data
therefore uses conservative class, six-digit-code, or manufacturer-correlated labels rather than assigning a vendor when
several catalogs reproduce the same coordinate. All active elements are stored with `indexReference: "d"`; this is a
catalog-supported interpretation of the patent's N/ν coordinates rather than an explicit wavelength statement in the
patent.

| Data glass label | nd | νd | Elements | Identification status |
| --- | ---: | ---: | --- | --- |
| 497815/497816 low-dispersion crown class (vendor unresolved; Canon-correlated UD) | 1.496999 | 81.5 | L1a-1, L1b-1 | Vendor unresolved; Canon-correlated UD |
| 835427 high-index lanthanum class (vendor unresolved) | 1.834807 | 42.7 | L1b-2, L2-2 | Multiple close/exact catalog equivalents |
| Fluorite (CaF2), manufacturer-correlated | 1.433870 | 95.1 | L1c-1 | Manufacturer-correlated; no branded glass assignment |
| 516641 crown class (S-BSL7/K-BK7 coordinate equivalents; vendor unresolved) | 1.516330 | 64.1 | L1c-2 | S-BSL7/K-BK7 coordinate equivalents; vendor unresolved |
| 805254 dense-flint class (N-SF6/S-TIH6 family; vendor unresolved) | 1.805181 | 25.4 | L2-1 | N-SF6/S-TIH6 family; vendor unresolved |
| 847238/847239 dense-flint class (vendor unresolved; source vd rounded 23.9) | 1.846658 | 23.9 | L3a-1, L3b-1, L3c-3 | Vendor unresolved; source νd is rounded |
| 603606/603607 SK14/BSM14 crown class (vendor unresolved) | 1.603112 | 60.6 | L3a-2, L3b-2 | N-SK14/S-BSM14 family; vendor unresolved |
| 804466 lanthanum class (vendor unresolved) | 1.804000 | 46.6 | L3b-3 | Vendor unresolved |
| 720437 lanthanum-flint class (vendor unresolved) | 1.720000 | 43.7 | L3c-1 | Vendor unresolved |
| 750350 lanthanum-flint class (vendor unresolved) | 1.749500 | 35.0 | L3c-2 | Vendor unresolved |

The catalog audit compared these coordinates against official OHARA S- and L-prefix data, OHARA specialty data, HOYA,
HIKARI, CDGM, Sumita, and SCHOTT sources. Several rows have exact coordinate matches from more than one vendor, so an
exact match is not by itself evidence of the glass supplier used by Canon. The data retains that ambiguity deliberately.

The two production-correlated UD elements and the fluorite-coordinate element are exceptions only in the sense that Canon
publishes the **categories** of those special elements for the finished lens. That manufacturer statement supports their
functional identity in the correlation; it does not identify a catalog supplier or justify replacing the patent nd/νd
values with a modern catalog value.

Those three positions carry `apd: "inferred"` in the diagram metadata so the viewer exposes the production-backed
special-dispersion classification without presenting it as a patent-named glass. Example 22 publishes no `θgF`, line
indices, or `dPgF`, so no numerical partial-dispersion value is invented for this generation.

## Focus Mechanism

The patent defines L2 as the sole axial focusing unit and states that it moves toward the image side as object distance
decreases. Numerical Example 22, however, gives only the infinity prescription. The finite-distance state in the data file
is therefore explicitly a **CONSTRAINED_RECONSTRUCTION**, not a published focus table.

The reconstruction preserves the patent mechanism exactly: the cemented L2 doublet moves rigidly, so the air gap before
L2 increases by the same amount that the air gap after L2 decreases. Canon's published 5.5 m closest focusing distance is
used as the single external scalar constraint.

| Variable gap | Infinity (mm) | Close state (mm) | Change (mm) |
| --- | ---: | ---: | ---: |
| Surface 12 → L2 | 45.860000000 | 64.689163964 | +18.829163964 |
| L2 → surface 15 rear gap | 98.910000000 | 80.080836036 | −18.829163964 |
| Sum | 144.770000000 | 144.770000000 | 0.000000000 |

The modeled L2 travel is therefore **18.829163964 mm imageward**. Recomputing the finite conjugate from the normalized
active data gives an object distance of **5.497275896 m** to the modeled image plane and a paraxial magnification of
**−0.117790411×**. Both agree with Canon's rounded 5.5 m and 0.12× product specifications at their stated precision. The
computed close-state EFL is **497.919055175 mm**, showing the expected focal-length change of an internally focusing
telephoto system.

The front protection plate is absent from the active model, so the reconstructed active-model object distance is not
expected to reproduce the manufacturer's one-decimal-meter MFD to micrometer precision. The reconstruction should be
read as a mechanism-constrained optical state, not as a claim about the exact production cam or motor trajectory.

## Chromatic Correction Strategy

The front half of the design carries the most conspicuous dispersion contrast. The first two positive elements use the
same 1.496999/81.5 low-dispersion coordinate, while L1c-1 uses the unique 1.433870/95.1 fluorite coordinate. These are
combined with higher-index, lower-Abbe negative elements in L1b and L2. The patent itself describes the negative middle
subunit L1b as reducing longitudinal chromatic aberration from the front positive subunit, and it specifies high Abbe
numbers for the positive L1a and L1b members in conditions (22) and (24).

The rear assembly continues the alternating dispersion pattern through several cemented pairs. L3a combines
1.846658/23.9 with 1.603112/60.6; the first pair in L3b uses the same two coordinates in a different power arrangement;
and the final cemented pair combines 1.749500/35.0 with 1.846658/23.9. These pairings provide first-order chromatic
balancing opportunities while the subunits meet their required positive or negative net powers.

No stronger spectral claim is warranted from the authored data. Numerical Example 22 does not publish per-element `nC`,
`nF`, `ng`, or `dPgF`, and the data does not substitute catalog line indices for the patent coordinates. Accordingly,
this analysis does **not** characterize the prescription as apochromatic or assign anomalous-partial-dispersion behavior
to any element.

## Image Stabilization

The patent identifies L3b as the image-displacement compensation subunit and moves it in directions perpendicular to the
optical axis. In the centered prescription L3b consists of a cemented positive/negative pair followed by a separate
negative singlet. The cemented pair alone is net negative at **−280.886760 mm**, while the complete three-element L3b
subunit is much stronger, at **−60.453463 mm**. That distinction is important: the latter is the relevant first-order
power of the moving stabilization unit.

Positive L3a before the IS unit converges the beam, reducing the diameter required of the moving group. Positive L3c
behind it allows L3b to carry stronger negative power while maintaining the total focal length. The patent explicitly
connects this arrangement with higher image-displacement sensitivity and with control of aberrations generated by
transverse motion.

Example 22 does not publish a numerical L3b decentering range, and the LensVisualizer data file therefore does not invent
one. L3b is represented in its centered axial state; its role as a transverse stabilization group is documented in the
group annotations and focus description rather than encoded as an axial variable spacing.

Canon independently confirms that the production EF 600mm f/4L IS USM has optical image stabilization. That product fact
supports the selected correlation but does not constitute manufacturer confirmation that Numerical Example 22 is the
production prescription.

## Conditional Expressions

The third embodiment gives conditions (18)–(29) for the front-subunit distribution, low-dispersion positive elements,
focus-group power, and L3 subunit powers. Using the final data file and the patent focal length of 585.20 mm for the
normalizing denominator, the prescription satisfies every preferred condition (18a)–(29a).

| Condition | Preferred range | Value from final model | Result |
| --- | --- | ---: | --- |
| (18a) $f_{1a}/f$ | 0.5 < x < 0.9 | 0.625409772 | Pass |
| (19a) $D_{1ab}/f$ | 0.05 < x < 0.11 | 0.074487355 | Pass |
| (20a) $\lvert f_{1b}/f\rvert$ | 1.2 < x < 2.5 | 1.622002091 | Pass |
| (21a) $f_{1c}/f$ | 0.55 < x < 1.0 | 0.757501428 | Pass |
| (22a) $\nu_{1ap}$ | x > 80 | 81.5 | Pass |
| (23a) $N_{1ap}$ | x > 1.49 | 1.496999 | Pass |
| (24a) $\nu_{1bp}$ | x > 80 | 81.5 | Pass |
| (25a) $N_{1bp}$ | x > 1.49 | 1.496999 | Pass |
| (26a) $\lvert f_2/f\rvert$ | 0.3 < x < 0.45 | 0.341412302 | Pass |
| (27a) $f_{3a}/f$ | 0.2 < x < 0.45 | 0.403389321 | Pass |
| (28a) $\lvert f_{3b}/f\rvert$ | 0.06 < x < 0.13 | 0.103303936 | Pass |
| (29a) $f_{3c}/f$ | 0.1 < x < 0.18 | 0.145403937 | Pass |

There is a small source-precision distinction in the material conditions. The Example-22 prescription rows and the data
file store the two low-dispersion elements as ν = 81.5, whereas patent Table 3 prints 81.54 for conditions (22) and (24).
Both values satisfy the preferred inequalities. The analysis follows the final data file for element νd values and does
not replace them with a catalog value merely to reproduce the extra Table-3 digits.

## Verification Summary

Independent height/reduced-angle tracing and an ABCD matrix reduction of the final TypeScript arrays agree to double
precision. The computed infinity-state EFL is **585.327789123 mm**, only **+0.127789123 mm (+0.02184%)** from the patent's
585.20 mm value. The physical stop semi-diameter in the model is **20.046530551 mm**; because the patent does not publish
a stop diameter, this value is calibrated from Fno = 4.12 rather than treated as a source dimension. The resulting
recovered f-number is **4.1199999999**.

The normalized final spacing to the source image plane is **117.098974102 mm**, while the Gaussian paraxial BFD from the
last powered surface is **116.605717247 mm**. The retained source image plane therefore lies **0.493256855 mm** behind the
Gaussian paraxial focus. The model preserves that source reference rather than silently moving the image plane to the
paraxial focus.

Surface-by-surface Petzval summation using $\phi/(n n')$ gives **+6.783588101299 × 10⁻⁶ mm⁻¹**, corresponding to a signed
Petzval radius of **−147414.610832 mm** under $R_P=-1/P$. These are computed first-order quantities, not patent-published
performance specifications.

The patent does not tabulate clear semi-diameters. The surface semi-diameters in the data file are therefore modeling
inferences derived from the spherical ray envelopes and the proportions of Figure 85, then checked against the current
geometry rules. The most restrictive front-group region is the 2.59 mm air gap between surfaces 6 and 7: at the authored
shared semi-diameter of 57.2 mm, the computed rim clearance remains positive at approximately **0.110 mm**. The smallest
computed element edge thickness is **0.333 mm**, and the largest spherical rim angle is about **44.09°**. These clear
apertures should not be interpreted as Canon manufacturing dimensions.

No aspherical surface, folded path, sensor cover, or active filter is present in the modeled prescription. The front HG
protection plate, rear FL filter, and inactive FC flare-cutter plane are source features omitted by design; only the rear
filter's optical-path effect is preserved through the air-equivalent final spacing. No uniform scaling or hidden focal
length correction is applied.

## Sources and References

1. Nishio, Akihiro; Ogawa, Hideki; Misaka, Makoto. **US 6,115,188 A, “Optical System and Optical Apparatus Having the
   Same.”** Numerical Example 22; third embodiment; Figure 85; Table 3; granted 2000-09-05. The Certificate of Correction
   dated 2001-05-29 does not amend Numerical Example 22.
2. Canon Camera Museum. **“EF600mm f/4L IS USM.”** Official product record, including September 1999 market date,
   17-element/13-group construction, one fluorite and two UD elements, protection-glass/rear-filter count note, 5.5 m
   closest focus, 0.12× maximum magnification, eight blades, and f/32 minimum aperture.
   <https://global.canon/en/c-museum/product/ef355.html>
3. Canon Camera Museum. **“View by period — 1987–1991: Leap Forward with the EOS.”** Official history of the EF mount and
   35 mm EOS system context. <https://global.canon/en/c-museum/history/story07.html>
4. Official optical-glass catalogs and selector data from **OHARA, HOYA, HIKARI, CDGM, Sumita, and SCHOTT**, used only for
   coordinate/class comparison. Vendor ambiguity is retained wherever the patent does not establish a supplier.
