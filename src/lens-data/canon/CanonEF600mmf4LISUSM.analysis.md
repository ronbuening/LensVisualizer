## Patent Reference and Design Identification

**Patent:** US 6,115,188 A\
**Application Number:** 09/172,164\
**Filed:** 1998-10-14\
**Priority:** JP 9-299573 (1997-10-16); JP 9-345859 (1997-12-01); JP 10-276618 (1998-09-11)\
**Granted:** 2000-09-05\
**Inventors:** Akihiro Nishio; Hideki Ogawa; Makoto Misaka\
**Assignee:** Canon Inc. (the patent prints Canon Kabushiki Kaisha)\
**Title:** _Optical System and Optical Apparatus Having the Same_\
**Example details:** Numerical Example 22, PDF pages 78–79 / columns 32–33; Figure 85, PDF page 56 / sheet 54; matching Figures 89A–89D, PDF page 60 / sheet 58

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

The current model contains **17 elements in 13 groups**, including **15 powered elements in 11 groups** plus
explicit source HG and FL plates. HG restores R1–R2, a 6.00 mm front plate followed by 1.50 mm air; only inactive
FC remains omitted. FL retains D29 = 12.00 mm, t = 2.00 mm, N = 1.516330, ν = 64.4 and trailing air
D31+D32 = 103.78 mm. The count includes both source plates and agrees with the established production correlation;
it does not prove a one-to-one production prescription. No scaling is applied.
The 2001 Certificate of Correction does not alter Numerical Example 22.

The marketed and design quantities are kept separate throughout this analysis. Canon identifies the product as a 600 mm
f/4 lens; the authored prescription computes to **585.327789123 mm** and uses the patent/model value **F/4.12** for the
optical aperture. Canon's official product record gives a September 1999 market date, 5.5 m closest focus, 0.12× maximum
magnification, eight diaphragm blades, and a minimum aperture of f/32.

## Optical Architecture

The design is a long-focus **positive–negative–positive telephoto system** with internal focusing and a transverse
stabilization group. The physical track from source HG to the image plane is **476.20 mm**; first powered surface
R3 to the same plane remains **468.70 mm**. The full HG-included track gives **TL/EFL ≈ 0.813561**, so the design meets the project's
telephoto criterion of TL/EFL < 1. The normalized rear distance is only about 0.2001 EFL, so the design is not
retrofocus by the project's BFD > EFL definition.

The patent divides the first positive unit L1 into three subunits: positive L1a, negative L1b, and positive L1c. The
negative L2 cemented doublet follows and translates axially for focusing. The aperture stop is at the patent's R16
location. L3 then contains positive L3a, negative L3b, and positive L3c; L3b is the transversely movable stabilization
subunit.

Independent paraxial reduction of the authored arrays gives the following net focal lengths. These are **subunit or
cemented-unit powers of the isolated groups**, not the standalone focal lengths printed for individual elements in
the data file.

| Unit | Net focal length (mm) | Function                                      |
| ---- | --------------------: | --------------------------------------------- |
| L1a  |           +365.989798 | Positive front collector                      |
| L1b  |           −949.195624 | Weak negative middle subunit                  |
| L1c  |           +443.289835 | Positive rear subunit of L1                   |
| L1   |           +273.196687 | Complete positive first unit                  |
| L2   |           −199.794479 | Cemented negative inner-focus unit            |
| L3a  |           +236.063431 | Positive subunit ahead of stabilization group |
| L3b  |            −60.453463 | Complete negative transverse IS subunit       |
| L3c  |            +85.090384 | Positive rear subunit                         |
| L3   |          +1461.700449 | Complete positive third unit                  |

This division places the focusing mass in a comparatively small negative doublet rather than in the large-diameter front
assembly. The patent explicitly uses this arrangement to reduce focus-unit size and focus travel while controlling the
variation of aberrations with object distance. Within L3, the positive L3a converges the beam before the stabilization
unit, while positive L3c permits L3b to carry stronger negative power without changing the system focal length excessively.
That power distribution is the main architectural feature shared by the focusing and stabilization provisions.

The prescription is entirely spherical. There are no authored aspherical surfaces, conic constants, or polynomial
coefficients, and therefore no asphere coefficient transformation is applicable. The scale factor is exactly 1.0.

## Element-by-Element Analysis

The source N/ν coordinates below are stored under an explicitly **approximate conventional d-line tracing
interpretation**, not a verified source wavelength. All historical media are Unmatched. The unchanged active-15
prescription/cap conclusions reuse reviews dated **2026-08-20/21** and **2026-09-25**; the physical FL addition is
**2026-10-04**. Only the scoped source/configuration/runtime checks are dated **2026-10-30**.

### HG — Integral Front Plane-Parallel Member

**Stored nd = 1.516330, νd = 64.1. Glass: Unmatched (source reference unspecified). No net paraxial lens power.**

Numerical Example 22 explicitly tabulates R1–R2 as a 6.00 mm flat plate followed by D2 = 1.50 mm air. Clause c-7
(PDF page 78 / column 32) discusses protection and thermal-focus functions through an integral front member; it does
not describe the selected HG as optional, removable or an accessory. The former omission is therefore corrected.
This is a source-configuration restoration, not a new powered-lens or cam adjustment.

The source provides no clear aperture. The native HG rectangle shares the first powered blank's outer height, so its
77.0 mm caps use the existing front cap as a conservative relative outline estimate. HG has no opaque flat-face land,
source APD designation or identified historical chemistry. The complete modeled path now contains all 17 source media.

### L1a-1 — Biconvex Positive

**nd = 1.496999, νd = 81.5. Glass: Unmatched (source reference unspecified). Standalone f = +365.989798 mm.**

L1a-1 is the single element of the positive front subunit L1a, so its standalone focal length is also the computed net
focal length of L1a. It is the first powered element after source HG and carries the largest modeled
clear aperture. The third-embodiment design conditions control the ratio $f_{1a}/f$ specifically because this front
subunit sets the initial convergence of the large entrance bundle and therefore the size and aberration burden of the
following front assembly.

The high Abbe number is part of the patent's material strategy for the front positive member. Canon's production record
states that the finished lens contains two UD elements; the two 1.496999/81.5 elements are the only matching pair in
Example 22. The data therefore marks this element as manufacturer-correlated UD while retaining a vendor-unresolved glass
classification as a conditional production association; the historical source medium remains unresolved.

### L1b-1 — Positive Meniscus

**nd = 1.496999, νd = 81.5. Glass: Unmatched (source reference unspecified). Standalone f = +324.493634 mm.**

This positive meniscus begins the middle subunit L1b. Its standalone power is positive, but L1b as a two-element
air-spaced subunit is net negative. The patent describes the negative middle subunit as a means of moderating the
spherical and longitudinal chromatic aberration introduced by the positive front subunit while preserving the desired
convergence of L1 as a whole.

As with L1a-1, the production UD identification is correlation evidence rather than a vendor glass identification. The
stored nd/νd pair remains the patent value.

### L1b-2 — Biconcave Negative

**nd = 1.834807, νd = 42.7. Glass: Unmatched (source reference unspecified). Standalone f = −230.532155 mm.**

The biconcave L1b-2 supplies the negative power that dominates the preceding positive meniscus, giving the complete L1b
subunit a computed focal length of **−949.195624 mm**. The element's higher index and lower Abbe number contrast with the
preceding 1.496999/81.5 member, providing a conventional positive/negative material split without requiring a cemented
interface.

The subunit is intentionally weak compared with either constituent standalone element. Its in-situ role is therefore not
well represented by the −230.53 mm standalone focal length alone; the air spacing and the positive L1b-1 materially reduce
the net negative power of L1b.

### L1c-1 — Positive Meniscus, Production-Fluorite Correlation

**nd = 1.433870, νd = 95.1. Glass: Unmatched (source reference unspecified). Standalone f = +270.260667 mm.**

L1c-1 begins the rear positive subunit of L1. Its 1.433870/95.1 pair is the unique conditional fluorite-coordinate
comparison in Example 22. The established production correlation associates it with the marketed fluorite position,
but an unspecified source wavelength and a numeric match do not establish its historical chemistry or supplier.

The element is strongly positive in isolation and restores convergence after the weakly negative L1b. Its role is best
understood as part of the complete L1c pair, whose net focal length is **+443.289835 mm**, and of the complete L1 unit,
whose net focal length is **+273.196687 mm**.

### L1c-2 — Negative Meniscus

**nd = 1.516330, νd = 64.1. Glass: Unmatched (source reference unspecified). Standalone f = −623.617174 mm.**

L1c-2 is a weak negative meniscus following the much stronger production-fluorite-correlated positive element. The pair remains net
positive. In the patent architecture this rear subunit completes the positive first unit before the movable focus group
and supplies additional freedom for balancing the aberrations left by L1a and L1b.

The prior 516641 catalog comparison is retained only conditionally. The active disposition is Unmatched because
the source does not explicitly assign a reference wavelength to this pair; a historical supplier is not established.

### L2-1 — Biconvex Positive, Front Member of Focus Doublet

**nd = 1.805181, νd = 25.4. Glass: Unmatched (source reference unspecified). Standalone f = +215.019726 mm.**

L2-1 is the positive front member of the cemented focus doublet. Its standalone positive power should not be confused
with the behavior of the complete L2 unit: after cementing to L2-2, the doublet has a computed net focal length of
**−199.794479 mm**.

The patent deliberately makes L2 a compact negative unit and assigns all axial focusing motion to it. Because the unit is
cemented, its internal spacing is fixed while the air gaps before and after it change together during focusing.

### L2-2 — Biconcave Negative, Rear Member of Focus Doublet

**nd = 1.834807, νd = 42.7. Glass: Unmatched (source reference unspecified). Standalone f = −102.598687 mm.**

L2-2 supplies the dominant negative standalone power of the focus doublet. At the cemented R14 interface the data assigns
the surface to the downstream L2-2 element, matching the LensVisualizer cemented-interface convention.

The complete L2 doublet, not L2-2 alone, is the moving optical unit. Its net negative power satisfies the third-embodiment
focus-power condition and permits the required finite-distance correction with a reconstructed travel of about 18.83 mm.

### L3a-1 — Negative Meniscus, Front Member of Cemented L3a

**nd = 1.846658, νd = 23.9. Glass: Unmatched (source reference unspecified). Standalone f = −151.002645 mm.**

L3a-1 begins the first subunit behind the stop. It is negative as a standalone lens but is cemented directly to the much
stronger positive L3a-2. The complete cemented L3a pair is therefore net positive, with a computed focal length of
**+236.063431 mm**.

Its high-index, low-Abbe coordinate recurs elsewhere in L3, allowing the rear assembly to alternate strong positive and
negative element powers while keeping the net subunit powers required by the patent.

### L3a-2 — Biconvex Positive, Rear Member of Cemented L3a

**nd = 1.603112, νd = 60.6. Glass: Unmatched (source reference unspecified). Standalone f = +91.773530 mm.**

L3a-2 dominates the power of the cemented pair and reverses L3a-1's standalone negative power to produce a net-positive
L3a. The patent places this positive subunit immediately before the stabilization group so that the beam is further
converged before reaching L3b, helping keep the transversely moving group comparatively small.

The cemented interface also pairs substantially different Abbe numbers, but the data does not contain line indices or
partial-dispersion values sufficient for a stronger spectral-performance claim.

### L3b-1 — Biconvex Positive, Front Member of IS Cemented Pair

**nd = 1.846658, νd = 23.9. Glass: Unmatched (source reference unspecified). Standalone f = +93.422746 mm.**

L3b-1 is the positive front element of the cemented pair within the image-stabilization subunit. Although positive in
isolation, it is followed by the stronger negative L3b-2. The two-element cemented pair alone has a computed net focal
length of **−280.886760 mm**.

This pair forms only part of the moving stabilization subunit. The separate negative singlet L3b-3 must be included before
assigning a power to L3b as a whole.

### L3b-2 — Biconcave Negative, Rear Member of IS Cemented Pair

**nd = 1.603112, νd = 60.6. Glass: Unmatched (source reference unspecified). Standalone f = −68.565838 mm.**

L3b-2 supplies the negative power that makes the cemented L3b-1/L3b-2 pair net negative. Its material coordinate is the
same numeric index/Abbe pair used for L3a-2, but its surface curvatures make its standalone behavior strongly
negative rather than positive.

The complete L3b motion cannot be described from this cemented pair alone. In the patent and the data model, L3b-3 is part
of the same transversely moving stabilization subunit.

### L3b-3 — Biconcave Negative Singlet

**nd = 1.804000, νd = 46.6. Glass: Unmatched (source reference unspecified). Standalone f = −76.551196 mm.**

This singlet follows the cemented pair and completes L3b. Its addition changes the complete subunit to a much stronger
computed net focal length of **−60.453463 mm**. That value, rather than the −280.89 mm focal length of the cemented pair,
is the relevant first-order power for the transversely moving stabilization unit.

The patent's conditions on L3b power are intended to obtain adequate image-displacement sensitivity while retaining
control of aberrations during decentering. No numerical transverse displacement is published for Example 22, so the data
models L3b's centered axial prescription only.

### L3c-1 — Biconvex Positive Singlet

**nd = 1.720000, νd = 43.7. Glass: Unmatched (source reference unspecified). Standalone f = +148.247444 mm.**

L3c-1 begins the final positive subunit. It provides positive power before the rear cemented pair and helps restore the
positive power required of L3 after the strongly negative stabilization group.

The patent specifically uses a positive L3c after L3b so that L3b can be made more negative, and therefore more sensitive
to transverse displacement, without forcing the complete system focal length to change correspondingly.

### L3c-2 — Biconvex Positive, Front Member of Rear Cemented Pair

**nd = 1.749500, νd = 35.0. Glass: Unmatched (source reference unspecified). Standalone f = +75.722402 mm.**

L3c-2 is the stronger positive member of the final cemented doublet. Together with L3c-3, the cemented pair has a computed
net focal length of **+192.222332 mm**. It remains positive despite the negative standalone power of the rear element.

The complete three-element L3c subunit is stronger still, at **+85.090384 mm**, because the preceding positive singlet
L3c-1 contributes substantial additional power.

### L3c-3 — Biconcave Negative, Rear Member of Rear Cemented Pair

**nd = 1.846658, νd = 23.9. Glass: Unmatched (source reference unspecified). Standalone f = −121.262876 mm.**

L3c-3 is the final powered element of the active model. Its negative standalone power tempers the strong positive
L3c-2 while leaving both the cemented pair and the complete L3c subunit positive. The rear filter is drawn as a plane-parallel plate; the inactive flare-cutter plane is omitted.

The final authored spacing is the source's 12.00 mm physical air gap to FL.

### FL — Plane-Parallel Rear Optical Filter

**Stored nd = 1.516330, νd = 64.4. Glass: Unmatched (source reference unspecified). No net paraxial lens power.**

Original rows R30–R31 on PDF page 79 / column 33 give flat faces, 2.00 mm physical thickness, N 1.516330 and ν64.4.
The source leading air gap is D29 12.00 mm; D31 64.77 plus D32 39.01 gives 103.78 mm air after the filter when the
inactive FC plane is omitted. These physical values remain, with no manual air-equivalent replacement of the plate.

No optical aperture is tabulated. The retained clear radius 17.5 mm is a qualified ray estimate. A current 193-sample
pupil census across 21 focus positions, axial/half/corner format fields and the actual configured diagram field gives
maximum transmitted FL height 16.194553 mm; adding 5% and rounding up to 0.5 mm supports 17.5 mm. No sampled passing
bundle is clipped by FL. Native Figure 85 shows a taller plain outer rectangle, approximately 22 mm half-height at the
axial scale, without a distinct clear-cap/opaque-land junction. That un-dimensioned blank does not establish a larger
optical clear aperture; no opaque flat-face extension is invented to force the outer silhouette.

The prior S-BSL7 index comparison is conditional and disabled. Its catalog Abbe 64.14 differs from the literal source 64.4;
the source number is not changed to match it. No supplier, APD, coating, cement or historical filter chemistry is identified.

## Glass Identification and Selection

PDF page 78 / column 32 explicitly defines Ni and νi as refractive index and Abbe number without stating their
reference wavelengths. The publication's other numerical-definition passages and included correction certificate do
not supply that missing link. Aberration d-line labels are contextual evidence and do not independently define the
prescription coordinates. All 17 numeric pairs remain; the existing d-line tracing convention is now explicitly
approximate, with an indexReferenceNote on every medium. This does not assert that conventional d inference is wrong.

| Elements            | Source N | Source ν | Disabled conditional class comparison         | Active disposition |
| ------------------- | -------: | -------: | --------------------------------------------- | ------------------ |
| L1a-1, L1b-1        | 1.496999 |     81.5 | 497815/497816; prior S-FPL51 curve            | Unmatched          |
| L1b-2, L2-2         | 1.834807 |     42.7 | 835427; prior TAFD5G curve                    | Unmatched          |
| L1c-1               | 1.433870 |     95.1 | CaF2 production correlation                   | Unmatched          |
| HG, L1c-2           | 1.516330 |     64.1 | 516641; prior S-BSL7 curve                    | Unmatched          |
| L2-1                | 1.805181 |     25.4 | 805254; prior S-TIH6 curve                    | Unmatched          |
| L3a-1, L3b-1, L3c-3 | 1.846658 |     23.9 | 847239; prior PBH53 curve                     | Unmatched          |
| L3a-2, L3b-2        | 1.603112 |     60.6 | 603606/603607; prior N-SK14 curve             | Unmatched          |
| L3b-3               | 1.804000 |     46.6 | 804466; prior H-ZLaF50D curve                 | Unmatched          |
| L3c-1               | 1.720000 |     43.7 | 720437; prior S-LAM52 curve                   | Unmatched          |
| L3c-2               | 1.749500 |     35.0 | 750350; prior H-LaF4 curve                    | Unmatched          |
| FL                  | 1.516330 |     64.4 | Prior S-BSL7 index comparison; catalog ν64.14 | Unmatched          |

The 16 former curves remain disabled; the newly restored HG is also Unmatched, giving 17 unresolved media and no active catalog curves. No per-lens C/F/g or relative-partial override is supplied or removed. The source
contains no numerical partial dispersion or APD evidence; the three existing inferred special-material tags remain
qualified **production-correlated positions**, reusing their 2026-08-21 date. They do not identify source chemistry,
prove APD or establish an active catalog curve. Historical supplier, melt, chemistry, cement, coating and manufacturing
identity remain unresolved for every medium. The former categorical lanthanum/dense-flint/crown descriptions are not
retained as statements of source chemistry.

## Focus Mechanism

The patent defines L2 as the sole axial focusing unit and states that it moves toward the image side as object distance
decreases. Numerical Example 22, however, gives only the infinity prescription. The finite-distance state in the data file
is therefore explicitly a **CONSTRAINED_RECONSTRUCTION**, not a published focus table.

The reconstruction preserves the patent mechanism exactly: the cemented L2 doublet moves rigidly, so the air gap before
L2 increases by the same amount that the air gap after L2 decreases. Canon's published 5.5 m closest focusing distance is
used as the single external scalar constraint.

| Variable gap             | Infinity (mm) | Close state (mm) |   Change (mm) |
| ------------------------ | ------------: | ---------------: | ------------: |
| Surface 12 → L2          |  45.860000000 |     64.689163964 | +18.829163964 |
| L2 → surface 15 rear gap |  98.910000000 |     80.080836036 | −18.829163964 |
| Sum                      | 144.770000000 |    144.770000000 |   0.000000000 |

The modeled L2 travel remains **18.829163964 mm imageward**. With explicitly restored HG and the retained source
image plane, the unchanged gaps independently give a **5.500000 m physical conjugate**, close-state EFL 497.919055 mm
and magnification magnitude 0.117790×. The sampled finite-conjugate image-plane residual is −1.53×10⁻⁹ mm. The metadata
already states 5.5 m, so no scalar or cam retune is needed. The source still supplies no finite-focus table; this exact
endpoint match supports the existing reconstruction rather than making it a printed prescription.

HG adds 7.50 mm to the front-to-image physical track and changes the finite object-reference propagation. Intermediate
L2 motion remains illustrative: at focus 0.5 / display 11 m, sampled conjugate defocus is −2.783002 mm. The original has no
finite cam, so no compensator trajectory or powered R/d is invented to remove that residual. Physical conjugate,
source image-plane discrepancy and sampled illumination remain separate conclusions.

## Chromatic Correction Strategy

The front half of the design carries the most conspicuous dispersion contrast. The first two positive elements use the
same 1.496999/81.5 low-dispersion coordinate, while L1c-1 uses the unique 1.433870/95.1 pair conditionally associated with the marketed fluorite position. These are
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

| Condition                     | Preferred range | Value from final model | Result |
| ----------------------------- | --------------- | ---------------------: | ------ |
| (18a) $f_{1a}/f$              | 0.5 < x < 0.9   |            0.625409772 | Pass   |
| (19a) $D_{1ab}/f$             | 0.05 < x < 0.11 |            0.074487355 | Pass   |
| (20a) $\lvert f_{1b}/f\rvert$ | 1.2 < x < 2.5   |            1.622002091 | Pass   |
| (21a) $f_{1c}/f$              | 0.55 < x < 1.0  |            0.757501428 | Pass   |
| (22a) $\nu_{1ap}$             | x > 80          |                   81.5 | Pass   |
| (23a) $N_{1ap}$               | x > 1.49        |               1.496999 | Pass   |
| (24a) $\nu_{1bp}$             | x > 80          |                   81.5 | Pass   |
| (25a) $N_{1bp}$               | x > 1.49        |               1.496999 | Pass   |
| (26a) $\lvert f_2/f\rvert$    | 0.3 < x < 0.45  |            0.341412302 | Pass   |
| (27a) $f_{3a}/f$              | 0.2 < x < 0.45  |            0.403389321 | Pass   |
| (28a) $\lvert f_{3b}/f\rvert$ | 0.06 < x < 0.13 |            0.103303936 | Pass   |
| (29a) $f_{3c}/f$              | 0.1 < x < 0.18  |            0.145403937 | Pass   |

There is a small source-precision distinction in the material conditions. The Example-22 prescription rows and the data
file store the two low-dispersion elements as ν = 81.5, whereas patent Table 3 prints 81.54 for conditions (22) and (24).
Both values satisfy the preferred inequalities. The analysis follows the final data file for element νd values and does
not replace them with a catalog value merely to reproduce the extra Table-3 digits.

## Verification Summary

The retained prescription computes infinity EFL 585.327789123 mm versus source 585.20 (+0.02184%). Existing derived
iris radius 20.046531 mm and design f/4.12 remain. The infinity beam-clearance aperture census passes under the
paraxial iris convention. The real aimed iris-rim result is a separate metric, with near-focus wide-open clipping
at retained source-constrained S6; neither the stop nor source caps are enlarged to force a result.

Printed physical R29-to-IP distance is 117.78 mm. Literal arrays give physical paraxial BFL 117.286743145 mm, or final
air after FL 103.286743145 mm versus retained 103.78 mm. Thus the source image plane lies 0.493256855 mm behind the
paraxial focus. This unresolved discrepancy preserves the 2026-09-25 source review and is now formally recorded in
source.errata without changing any printed number or inventing an isolated misprint.

Active-15 cap/clearance conclusions reuse the 2026-08-20/21 review; the old 600 dpi renders were upsampled from the
original's native 2320 × 3408 one-bit 300 ppi pages. Current Figure 85 comparison uses a native 90° rotation only, including explicit HG and FL while excluding
labels, brackets, stop marks and inactive FC from optical rim measurements. Axial first-active-vertex to R29
scale is about 5.1 px/mm. Native vertical sizing is approximately 8% compressed relative to that axial calibration,
so shoulder height is conservatively anchored to the existing S11 cap rather than treated as a precise mechanical
measurement; practical relative-rim reading uncertainty is ±0.8 mm.

The missing air-facing S12 shoulder is resolved by its native vertical stroke before the concave cap. Add outer 47.5 mm
while retaining clear 45.0 mm, anchored to S11's existing 47.5 mm cap. No opaque cemented land, invented wing, equal-height
block or inferred cut is added. Other active caps and the existing R6–R7 gapSagFrac 0.96 constraint remain. The FL clear
estimate and its larger undimensioned blank are qualified above.

Surface/image-circle checks pass. All 21 focus corner chiefs reach approximately 21.65 mm. A 193-sample pupil census over
21 focus positions and four fields (including actual configured diagram field) passes axial 193/193 at infinity and 145/193 close;
format-corner counts 113/193 at infinity and 109/193 close, with all chiefs valid/aimed. All baseline/candidate counts remain equal. HG adds no clipping of otherwise passing sampled bundles.
Across 21 focus × seven presets, 129 real working calls trace and 18 vignette at S6, unchanged. These sampled results do
not certify full-aperture or production illumination, or erase the source image-plane discrepancy.

Actual generated SVGs compare the connected 17-medium configuration with native Figure 85. Twenty-one focus states
produce 357 finite connected closed paths and zero hidden renderer trimming. No asphere, folded path, scaling,
existing powered R/d, numeric stop/control or guard change is applied. HG and FL are physically drawn/traced; only inactive FC is omitted. Powered source geometry and internal cams remain
unchanged. Source fidelity, sampled runtime and production correlation remain separate.

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
