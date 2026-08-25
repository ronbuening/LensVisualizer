# CANON EF 200-400mm f/4 L IS USM EXTENDER 1.4× — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** US 2013/0308041 A1  
**Application Number:** US 13/890,621  
**Priority:** May 17, 2012  
**Filed:** May 9, 2013  
**Published:** November 21, 2013  
**Inventor:** Takahiro Hatada  
**Assignee:** Canon Inc.  
**Title:** “Optical System and Image Pickup Apparatus Having the Same”  
**Embodiment analyzed:** Numerical Example 1 / Embodiment 1

The prescription is Numerical Example 1 of US 2013/0308041 A1. The patent describes an infinity-focus zoom lens in which a negative-power magnification-conversion unit, EXT, can be inserted behind the aperture stop without changing total lens length. Embodiment 1 is explicitly a zoom lens, and the patent identifies L1 as the focusing unit, L2 as the negative variator, L3 as the positive compensator, L42 as the image-stabilizing subunit, and EXT as the built-in magnification-conversion unit (¶¶0031–0039, 0059–0063).

The selected production correlation is supported by several independent correspondences rather than by a manufacturer statement that this patent is the production formula:

1. Canon specifies 25 elements in 20 groups with the extender out and 33 elements in 24 groups with it in, with one rear filter included in both counts. Excluding that filter under the data-model scope gives 24 elements in 19 groups and 32 elements in 23 groups, exactly matching the two active prescriptions published in Numerical Example 1.
2. Canon specifies an eight-element, four-group built-in 1.4× extender. The inserted patent prescription adds exactly eight elements and four air-separated groups.
3. Canon specifies one fluorite element and four UD elements. Numerical Example 1 contains one `nd = 1.43387, νd = 95.1` element, consistent with CaF2, and four `nd = 1.49700, νd = 81.5` elements in the shared front/zoom system.
4. The patent gives design focal-length ranges of 205.00–389.99 mm with EXT out and 287.00–545.98 mm with EXT in, while Canon markets the lens as 200–400 mm and 280–560 mm. These are close production/design correspondences but are not related by a defensible uniform scale factor.
5. The patent architecture places a transverse image-stabilizing negative subunit ahead of an insertable rear extender, matching the production lens's defining optical features. The patent priority/publication dates also bracket Canon's May 2013 market introduction closely.

The data model therefore preserves the patent dimensions without scaling. Marketing values remain separate from design values: 200–400 mm f/4 and 280–560 mm f/5.6 are product specifications, while 205.00–389.99 mm f/4.12 and 287.00–545.98 mm f/5.77 are patent design values. The catalog entry exposes the complete `EXT OUT` prescription; the patent's complete `EXT IN` prescription is retained here as source context rather than represented by an unreachable one-member configuration picker.

Two source issues require explicit normalization. First, rendered inspection of patent page 17 shows surface 38 as `R = +174.462 mm`; parsed text can lose the leading `1` and read `+74.462`. Second, the inserted table prints `d56 = 68.46 mm`, while the same page gives `BF = 68.49 mm` and ¶0059 defines BF as the final lens surface to image plane. Calculations of the patent's inserted state use 68.49 mm; the raw 68.46 mm value remains a documented source discrepancy. No aspherical surfaces are present, so no conic conversion or asphere scaling is applicable.

The production rear filter is excluded from the sequential prescription. No sensor cover glass, inactive dummy surface, flare-cutter plane, or mechanical component is added. The patent publishes an effective diameter for each numerical surface; the model uses one-half of those values as clear semi-diameters except at the aperture stop. The stop is patent surface 30, but its listed 39.75 mm effective diameter does not reproduce the patent f-number as a physical iris. A single physical iris diameter of 38.73079 mm was solved from the two EXT-OUT f/4.12 endpoints and is used for the `STO` semi-diameter.

## Optical Architecture

Numerical Example 1 is a four-unit positive-negative-positive-positive zoom in the patent's functional grouping. L1 is positive and fixed during zooming; L2 is negative and moves toward the image side from wide to tele; L3 is positive and moves to compensate image-plane displacement; and L4 is fixed during zooming. The fixed fourth unit is subdivided into positive L41, the aperture stop, negative L42, positive L43, and positive L44. L42 is the transverse image-stabilizing unit. EXT is inserted between L43 and L44 (¶¶0036–0039).

The isolated functional-unit powers computed from the final prescription clarify the architecture without conflating them with individual element powers:

| Functional unit | Isolated EFL | Interpretation |
|---|---:|---|
| L1 | +191.690 mm | Positive front/focus unit |
| L2 | −41.399 mm | Negative variator |
| L3 | +81.427 mm | Positive compensator |
| L41 | +132.254 mm | Positive fixed pre-stop subunit |
| L42 | −67.824 mm | Negative image-stabilizing subunit |
| L43 + L44, EXT OUT (`L43a`) | +97.662 mm | Combined rear positive section when the extender is removed |
| L43, EXT IN | +125.853 mm | Positive section ahead of the inserted extender |
| EXTa | +264.836 mm | Positive front extender subunit |
| EXTb | −77.819 mm | Negative rear extender subunit |
| EXT, combined | −176.418 mm | Net negative magnification-conversion unit |
| L44 | +265.806 mm | Positive rear subunit after the extender |

These are isolated unit EFLs, not standalone-element powers and not a statement of each unit's effective power in the assembled zoom. The assembled-system behavior is established by the full trace: inserting EXT changes the computed wide-end EFL from 204.991 mm to 286.835 mm and the tele-end EFL from 389.974 mm to 545.647 mm, conversion ratios of approximately 1.3993× and 1.3992× from the rounded prescription.

Only three air gaps vary with zoom. From the patent wide to tele endpoints, `d8` changes 43.02→78.02 mm (+35.00 mm), `d18` changes 25.57→3.10 mm (−22.47 mm), and `d25` changes 38.33→25.80 mm (−12.53 mm). Their changes sum to zero, so the first-surface-to-image track remains constant. The endpoint data establish the net movements but do not provide enough intermediate positions to reconstruct the full convex L3 locus described by ¶0036.

The integrated extender is placed in the converging rear beam rather than behind the completed lens as a conventional external teleconverter. Its front section EXTa is positive and its rear section EXTb is negative, separated at the widest internal extender air gap as specified by ¶0039. The replacement segment from surface 41 to the final lens surface is 54.75 mm in either configuration, so the extender changes optical power while preserving axial package length.

## Element-by-Element Analysis

The element focal lengths below are standalone thick-element EFLs in air computed from each element's two physical surfaces and center thickness. They should not be read as the power of a cemented assembly or as the element's contribution after interaction with the rest of the zoom.

### L1 — E1 — Biconvex Positive

`nd = 1.48749, νd = 70.2.` Glass: `487702 crown class (vendor unspecified)`. Standalone `f = +480.295 mm`.

E1 is the first positive member of L1. Its moderate positive power precedes the higher-index negative E2 and the two low-dispersion positive members E3 and E4. L1 as a complete isolated unit is substantially stronger, at +191.690 mm, than E1 alone.

### L1 — E2 — Negative Meniscus

`nd = 1.80610, νd = 33.3.` Glass: `806333 dense-flint/lanthanum class (vendor unspecified)`. Standalone `f = −276.191 mm`.

E2 supplies negative power inside the otherwise positive L1. Its high index and lower Abbe number provide a materially different refractive/dispersion coordinate from the adjacent crown and low-dispersion elements, but the patent does not identify a vendor melt.

### L1 — E3 — Positive Meniscus

`nd = 1.43387, νd = 95.1.` Glass: `Fluorite (CaF2; production-correlation inference)`. Standalone `f = +304.651 mm`.

This is the only prescription coordinate that supports an identity stronger than a generic glass class. Canon specifies exactly one fluorite element in the production lens, and the patent contains exactly one ultra-low-index, very-high-Abbe element at the expected CaF2 coordinate. The assignment is therefore a production-correlation inference, not a vendor label printed in the patent.

### L1 — E4 — Positive Meniscus

`nd = 1.49700, νd = 81.5.` Glass: `497816 ED/UD crown class (vendor unspecified)`. Standalone `f = +278.180 mm`.

E4 is the first of four elements at the 497816 low-dispersion coordinate used in the common front/zoom train. The production specification's four-UD count makes the UD role a strong correlation clue, but the data intentionally do not assign a specific vendor glass.

### L2 — E5 — Biconvex Positive, cemented group C1

`nd = 1.90366, νd = 31.3.` Glass: `904313 high-index lanthanum-flint class (vendor unspecified)`. Standalone `f = +67.890 mm`.

E5 is cemented directly to E6. The strong positive standalone power of E5 is largely opposed by E6; the isolated cemented C1 pair has an EFL of about −1735.87 mm, much weaker than either element separately.

### L2 — E6 — Biconcave Negative, cemented group C1

`nd = 1.69680, νd = 55.5.` Glass: `697555 lanthanum-crown class (vendor unspecified)`. Standalone `f = −63.318 mm`.

E6 completes C1 and supplies the opposing negative power. C1's weak net power illustrates why element-level focal lengths cannot be substituted for the power of L2: the complete L2 unit, including C2, E9, E10, and internal spacings, is strongly negative at −41.399 mm.

### L2 — E7 — Negative Meniscus, cemented group C2

`nd = 1.69680, νd = 55.5.` Glass: `697555 lanthanum-crown class (vendor unspecified)`. Standalone `f = −81.217 mm`.

E7 begins the second cemented pair in L2 and is coupled to positive E8. The pair is net positive when isolated, despite being part of the overall negative variator.

### L2 — E8 — Positive Meniscus, cemented group C2

`nd = 1.90366, νd = 31.3.` Glass: `904313 high-index lanthanum-flint class (vendor unspecified)`. Standalone `f = +66.734 mm`.

E8 completes C2. The isolated pair has an EFL of +393.749 mm; its positive net power is outweighed within L2 by the remaining negative elements and the unit's internal separations.

### L2 — E9 — Biconcave Negative

`nd = 1.83481, νd = 42.7.` Glass: `835427 high-index lanthanum class (vendor unspecified)`. Standalone `f = −69.142 mm`.

E9 is the first air-spaced strongly negative singlet after the two cemented pairs. It contributes directly to the negative sign of L2's isolated unit power.

### L2 — E10 — Biconcave Negative

`nd = 1.83481, νd = 42.7.` Glass: `835427 high-index lanthanum class (vendor unspecified)`. Standalone `f = −82.897 mm`.

E10 is the final member of L2. Together with E9 it leaves the variator strongly negative after the relatively weak C1 and positive C2 cemented assemblies.

### L3 — E11 — Positive Meniscus

`nd = 1.49700, νd = 81.5.` Glass: `497816 ED/UD crown class (vendor unspecified)`. Standalone `f = +223.378 mm`.

E11 begins the positive compensating unit L3. Its material coordinate is shared with E4, E12, and E14, concentrating all four 497816 low-dispersion elements in L1/L3 rather than in the rear relay.

### L3 — E12 — Biconvex Positive

`nd = 1.49700, νd = 81.5.` Glass: `497816 ED/UD crown class (vendor unspecified)`. Standalone `f = +205.976 mm`.

E12 adds positive power ahead of the final cemented pair. L3's positive isolated EFL of +81.427 mm is substantially shorter than either E11 or E12 alone because all four elements act together.

### L3 — E13 — Negative Meniscus, cemented group C3

`nd = 1.90366, νd = 31.3.` Glass: `904313 high-index lanthanum-flint class (vendor unspecified)`. Standalone `f = −172.568 mm`.

E13 is cemented to E14. Its negative power and lower Abbe number contrast with E14's positive low-dispersion crown coordinate.

### L3 — E14 — Positive Meniscus, cemented group C3

`nd = 1.49700, νd = 81.5.` Glass: `497816 ED/UD crown class (vendor unspecified)`. Standalone `f = +113.014 mm`.

E14 completes C3. The isolated C3 cemented pair is net positive at +341.423 mm; in the complete L3 unit it combines with E11 and E12 to produce +81.427 mm.

### L41 — E15 — Negative Meniscus

`nd = 1.76182, νd = 26.5.` Glass: `762265 dense-flint class (vendor unspecified)`. Standalone `f = −273.677 mm`.

E15 begins the fixed fourth unit ahead of the stop. Its negative standalone power is paired, through a long air spacing, with positive E16; the complete L41 subunit is positive.

### L41 — E16 — Biconvex Positive

`nd = 1.59282, νd = 68.6.` Glass: `593686 low-dispersion class (vendor unspecified)`. Standalone `f = +96.667 mm`.

E16 supplies the dominant positive power in L41. The isolated L41 EFL is +132.254 mm. The aperture stop follows after the air gap from surface 29 to surface 30.

### L42 / IS — E17 — Biconvex Positive, cemented group C4

`nd = 1.80610, νd = 33.3.` Glass: `806333 dense-flint/lanthanum class (vendor unspecified)`. Standalone `f = +86.919 mm`.

E17 is the positive member of the cemented front pair in the negative image-stabilizing subunit. The patent identifies L42 as the unit that moves transversely to correct image displacement (¶0037).

### L42 / IS — E18 — Biconcave Negative, cemented group C4

`nd = 1.51633, νd = 64.1.` Glass: `516/517642 BK7-coordinate crown class (vendor unspecified)`. Standalone `f = −79.063 mm`.

E18 opposes E17 in C4. The isolated C4 pair is only weakly negative, with EFL about −1098.84 mm; the complete three-element L42 becomes much stronger because E19 is also negative.

### L42 / IS — E19 — Biconcave Negative

`nd = 1.65160, νd = 58.5.` Glass: `652585 lanthanum-crown class (vendor unspecified)`. Standalone `f = −71.227 mm`.

E19 is the air-spaced negative member that completes L42. The isolated L42 EFL is −67.824 mm. The axial data model remains centered; it does not simulate the patent's transverse IS displacement.

### L43 — E20 — Biconvex Positive

`nd = 1.62299, νd = 58.2.` Glass: `623582 crown class (vendor unspecified)`. Standalone `f = +78.500 mm`.

E20 is the first positive member of L43, the fixed rear subunit immediately ahead of the extender insertion position.

### L43 — E21 — Biconvex Positive

`nd = 1.62299, νd = 58.2.` Glass: `623582 crown class (vendor unspecified)`. Standalone `f = +116.241 mm`.

E21 reinforces the positive power of L43 with the same glass coordinate as E20. The two positive singlets precede negative E22.

### L43 — E22 — Biconcave Negative

`nd = 1.80610, νd = 33.3.` Glass: `806333 dense-flint/lanthanum class (vendor unspecified)`. Standalone `f = −70.483 mm`.

E22 completes the fixed subunit immediately in front of the extender slot. In the inserted state, L43 has an isolated EFL of +125.853 mm; in the removed state the patent groups L43 and L44 together as `L43a`, whose isolated EFL is +97.662 mm.

### L44 — E23/E31 — Biconvex Positive, cemented group C5

`nd = 1.57501, νd = 41.5.` Glass: `575415 light-flint class (vendor unspecified)`. Standalone `f = +72.811 mm`.

This physical L44 element is E23 in the canonical EXT-OUT member and E31 in the EXT-IN member because the inserted eight elements occupy E23–E30. It is cemented to the following negative element. The complete C5 pair is the whole L44 unit and has isolated EFL +265.806 mm.

### L44 — E24/E32 — Biconcave Negative, cemented group C5

`nd = 1.88300, νd = 40.8.` Glass: `883408 high-index lanthanum class (vendor unspecified)`. Standalone `f = −96.007 mm`.

This is E24 with EXT out and E32 with EXT in. Its negative standalone power reduces the preceding positive element's power, leaving the cemented L44 pair net positive.

### EXTa — E23 — Positive Meniscus, EXT-IN only

`nd = 1.54072, νd = 47.2.` Glass: `541472 light-flint class (vendor unspecified)`. Standalone `f = +52.687 mm`.

E23 is the first inserted extender element and is air-spaced from the following cemented pair. Although the next cemented assembly is net negative, E23 and the internal separation make EXTa as a complete isolated subunit positive at +264.836 mm.

### EXTa — E24 — Biconvex Positive, cemented group EXT-C1

`nd = 1.60342, νd = 38.0.` Glass: `603380 flint class (vendor unspecified)`. Standalone `f = +44.362 mm`.

E24 is cemented directly to strongly negative E25. The EXT-C1 pair is therefore net negative when isolated.

### EXTa — E25 — Biconcave Negative, cemented group EXT-C1

`nd = 1.90366, νd = 31.3.` Glass: `904313 high-index lanthanum-flint class (vendor unspecified)`. Standalone `f = −22.315 mm`.

E25 completes EXT-C1, whose isolated EFL is −51.855 mm. This does not contradict EXTa's positive +264.836 mm unit power: EXTa includes the preceding positive E23 and its air spacing, so cemented-pair power and subunit power are distinct quantities.

### EXTb — E26 — Negative Meniscus, cemented group EXT-C2

`nd = 1.88300, νd = 40.8.` Glass: `883408 high-index lanthanum class (vendor unspecified)`. Standalone `f = −25.101 mm`.

E26 begins the rear extender subunit across the widest internal extender air gap. It is the first negative member of a cemented negative-positive-negative triplet.

### EXTb — E27 — Biconvex Positive, cemented group EXT-C2

`nd = 1.72047, νd = 34.7.` Glass: `720347 KZFS/NBH-coordinate class (vendor unspecified)`. Standalone `f = +17.959 mm`.

E27 is the positive middle member of EXT-C2. The coordinate lies in KZFS/NBH catalog families, but no anomalous-partial-dispersion behavior is asserted because the selected patent publishes no line indices or `dPgF` for this element and no unique vendor melt is established.

### EXTb — E28 — Biconcave Negative, cemented group EXT-C2

`nd = 1.88300, νd = 40.8.` Glass: `883408 high-index lanthanum class (vendor unspecified)`. Standalone `f = −25.046 mm`.

E28 completes the negative-positive-negative triplet. The isolated EXT-C2 EFL is −47.018 mm, consistent with its two strongly negative outer members.

### EXTb — E29 — Biconvex Positive, cemented group EXT-C3

`nd = 1.61340, νd = 44.3.` Glass: `613443/445 KZFS/NBM-coordinate class (vendor unspecified)`. Standalone `f = +25.500 mm`.

E29 is the positive member of the final cemented extender pair. As with E27, the class label records a coordinate family rather than a proven anomalous-dispersion melt.

### EXTb — E30 — Biconcave Negative, cemented group EXT-C3

`nd = 1.59282, νd = 68.6.` Glass: `593686 low-dispersion class (vendor unspecified)`. Standalone `f = −30.867 mm`.

E30 completes EXT-C3. The pair is net positive at +108.861 mm, but when combined with EXT-C2 and the internal spacing, the full EXTb subunit is negative at −77.819 mm. The full eight-element extender is more strongly negative, at −176.418 mm, and produces the approximately 1.4× focal-length increase in the assembled lens.

## Glass Identification and Selection

The patent is vendor-silent and gives only `nd` and `νd`. The data file therefore uses coordinate classes rather than asserting specific melts. The six-digit forms below summarize d-line index and Abbe-number neighborhoods; they are not composition identifiers. Catalog cross-checking found multiple vendors at many of the same coordinates, so those equivalences are not evidence that Canon used any one listed catalog glass.

| Patent `nd / νd` | Data-file identification | Use in the modeled lens |
|---|---|---|
| 1.48749 / 70.2 | 487702 crown class | L1 E1 |
| 1.80610 / 33.3 | 806333 dense-flint/lanthanum class | L1 E2; L42 E17; L43 E22 |
| 1.43387 / 95.1 | Fluorite (CaF2), production-correlation inference | L1 E3 |
| 1.49700 / 81.5 | 497816 ED/UD crown class | L1 E4; L3 E11, E12, E14 |
| 1.90366 / 31.3 | 904313 high-index lanthanum-flint class | L2 E5, E8; L3 E13; EXTa E25 |
| 1.69680 / 55.5 | 697555 lanthanum-crown class | L2 E6, E7 |
| 1.83481 / 42.7 | 835427 high-index lanthanum class | L2 E9, E10 |
| 1.76182 / 26.5 | 762265 dense-flint class | L41 E15 |
| 1.59282 / 68.6 | 593686 low-dispersion class | L41 E16; EXTb E30 |
| 1.51633 / 64.1 | 516/517642 BK7-coordinate crown class | L42 E18 |
| 1.65160 / 58.5 | 652585 lanthanum-crown class | L42 E19 |
| 1.62299 / 58.2 | 623582 crown class | L43 E20, E21 |
| 1.57501 / 41.5 | 575415 light-flint class | L44 positive element |
| 1.88300 / 40.8 | 883408 high-index lanthanum class | L44 negative element; EXTb E26, E28 |
| 1.54072 / 47.2 | 541472 light-flint class | EXTa E23 |
| 1.60342 / 38.0 | 603380 flint class | EXTa E24 |
| 1.72047 / 34.7 | 720347 KZFS/NBH-coordinate class | EXTb E27 |
| 1.61340 / 44.3 | 613443/445 KZFS/NBM-coordinate class | EXTb E29 |

The CaF2 assignment is the strongest material identification. Independent CaF2 constants are very close to the patent's `1.43387 / 95.1` coordinate, and Canon's production specification calls for exactly one fluorite element. The four 497816 elements likewise align numerically and by count with Canon's four-UD production specification. Those correspondences support the production correlation and a low-dispersion strategy but do not identify an individual glass supplier.

No `nC`, `nF`, `ng`, or `dPgF` values are authored because Numerical Example 1 does not publish them. Consequently, no apochromatic or anomalous-partial-dispersion performance claim is made from the bare `nd/νd` values. In particular, the KZFS/NBH-coordinate labels on E27 and E29 describe catalog neighborhoods only.

## Focus Mechanism

The patent states that L1 is fixed during zooming and moves axially for focusing (¶0036), but all prescription tables, cross-sections, and aberration plots for the selected embodiment are explicitly at infinity focus (¶0031). No finite-object variable-spacing table, focus travel, or close-focus magnification is published for Numerical Example 1.

Canon specifies a 2.0 m closest focusing distance for the production lens and maximum magnifications of 0.15× at 400 mm and 0.21× at 560 mm. Those product values do not supply enough constraints to reconstruct the patent's internal focus state. A diagnostic model that moves L1 as a single rigid unit while leaving L2–L4 fixed can focus a 2.0 m object, but it predicts approximately 0.278× at the EXT-OUT tele endpoint and 0.389× at the EXT-IN tele endpoint, substantially above Canon's published magnifications. Conversely, forcing those magnifications under the same one-degree-of-freedom model places the object at about 3.186 m rather than 2.0 m.

The data therefore uses `NO_INTERNAL_RECONSTRUCTION`: the published infinity geometry is retained at every zoom endpoint, the 2.0 m value remains product metadata, and no close-focus `var` pairs are invented. This is a deliberate limit of the available source information, not an assertion that the production lens lacks additional internal focus behavior.

## Chromatic Correction Strategy

The shared L1/L3 system contains the prescription's most conspicuous low-dispersion coordinates: one CaF2-correlated element at `nd = 1.43387, νd = 95.1` and four elements at `nd = 1.49700, νd = 81.5`. Canon independently specifies one fluorite and four UD elements for the production lens. The numerical and count agreement is useful both as product-correlation evidence and as evidence that the front and compensating groups carry much of the lens's low-dispersion material budget.

The rest of the prescription alternates higher-index/lower-Abbe and crown-class coordinates through the negative variator, fixed relay, IS unit, and extender. Several cemented assemblies combine strongly opposed standalone powers: C1 and C4 are nearly weak-power pairs, while C2 and C3 are modest positive pairs. In the extender, EXT-C2 is a negative-positive-negative triplet and EXT-C3 is a positive-negative pair. These computed net powers describe paraxial balancing within the groups; they do not by themselves establish secondary-spectrum or apochromatic correction.

## Image Stabilization

The patent identifies L42 as the image-stabilizing lens unit and states that it moves in a direction with a component perpendicular to the optical axis to displace the image and correct blur (¶¶0033, 0037). In Numerical Example 1, L42 is a three-element, two-group negative subunit: cemented E17/E18 followed by air-spaced E19. Its isolated EFL is −67.824 mm.

The data file represents the centered axial prescription only. It does not synthesize an IS decenter range or stabilization sensitivity because the selected numerical example does not publish those movement amplitudes. The optical placement is nevertheless retained: L42 lies behind the stop and ahead of positive L43 and the extender insertion position.

## Conditional Expressions

The patent uses three first-order conditions to constrain the built-in extender geometry and power distribution.

For the insertion position, ¶0043 defines

$$0.40 < \frac{L_e}{L_p} < 0.75.$$

From the patent reference planes in the modeled inserted configuration, `Lp = 168.52 mm` and `Le = 121.25 mm`, giving `Le/Lp = 0.719499`. This rounds to 0.72, matching Table 1 and satisfying both the broad range and the preferred 0.60–0.74 range.

For the rear extender-unit power, ¶0050 gives

$$0.2 < \frac{f_n}{f_e} < 0.6,$$

where `fn` is the focal length of negative EXTb and `fe` is the focal length of the complete extender. The independently computed isolated values are `fn = −77.819 mm` and `fe = −176.418 mm`, giving `fn/fe = 0.441104`. This rounds to 0.44, matching Table 1 and satisfying the preferred 0.3–0.5 range.

For the front-system ratio at telephoto, ¶0054 gives

$$0.3 < \frac{f_t}{f_{Ft}} \le 1.0.$$

Using the standard Gaussian EFL of the front system through surface 41 gives `fFt = 559.783 mm`; the computed EXT-OUT telephoto EFL is `ft = 389.974 mm`, so `ft/fFt = 0.696651`. The prescription satisfies both the broad range and the preferred 0.4–0.9 range, but this calculation does not reproduce Table 1's printed value of 0.74. The discrepancy is retained rather than forcing a different, undocumented definition of `fFt`.

There is also a direct sign contradiction in the patent prose. Paragraph 0048 gives a relation equivalent to

$$\frac{1}{f_n} = (1-\beta)\left(\frac{1}{S_k}+\frac{1}{e}\right).$$

With the patent's stated `β > 1`, `Sk > 0`, and `e > 0`, the right-hand side is negative and therefore `fn < 0`. Paragraph 0049 nevertheless states that `fn` is always positive. The numerical prescription and ¶¶0039/0050 identify EXTb as a negative-power unit, so the negative sign used in the data and calculations follows the equation and the actual prescription rather than that sentence.

## Verification Summary

Independent reduced-angle y–ν tracing and an ABCD matrix calculation agree to numerical precision when applied to the final TypeScript surface arrays. The resulting first-order values are:

| Configuration | Zoom endpoint | Computed EFL | Patent EFL | Modeled F/# | Patent F/# |
|---|---|---:|---:|---:|---:|
| EXT OUT | Wide | 204.9911 mm | 205.00 mm | 4.12005 | 4.12 |
| EXT OUT | Tele | 389.9736 mm | 389.99 mm | 4.11995 | 4.12 |
| EXT IN | Wide | 286.8354 mm | 287.00 mm | 5.76501 | 5.77 |
| EXT IN | Tele | 545.6471 mm | 545.98 mm | 5.76459 | 5.77 |

The rounded prescription sums to 389.85 mm from the first surface to the image plane in each normalized endpoint, while the patent summary prints 389.84 mm. The 0.01 mm difference is consistent with independently rounded row values. Gaussian back focal distances from the rounded arrays are 68.4566 and 68.4523 mm with EXT out and 68.4083 and 68.3998 mm with EXT in; these are calculation results and do not replace the patent's published 68.49 mm BF.

Petzval curvature was computed surface by surface as `φ/(n·n′)`. The EXT-OUT sum is `+4.64825×10⁻⁴ mm⁻¹`; with EXT inserted it is `+6.13188×10⁻⁵ mm⁻¹`. The sum is independent of zoom spacing in this all-spherical prescription because only air gaps vary with zoom. The smaller magnitude with EXT in is a first-order Petzval result, not a complete prediction of field curvature or astigmatism.

The patent effective diameters also pass the current geometry checks when used as clear semi-diameters. The minimum modeled element edge thickness is 1.2562 mm at the element spanning surfaces 38–39. Maximum spherical rim slope is 23.709° with EXT out and 30.259° with EXT in. The tightest shared-band air-gap case is surfaces 16→17, with a sag-intrusion fraction of 0.895889 against the 0.90 project limit; this is why the published clear diameter at that location is retained without enlargement.

Under the project's strict first-order terminology, only the telephoto endpoints satisfy `TL/EFL < 1`: EXT OUT tele is marginally telephoto (`389.84/389.974 ≈ 0.99966`), while EXT IN tele is clearly telephoto (`389.84/545.647 ≈ 0.71445`). Neither state is retrofocus because the 68.49 mm back focus is always shorter than the system EFL. No blanket “telephoto” classification is therefore applied to the entire zoom range.

## Sources and References

- Takahiro Hatada, **US 2013/0308041 A1, “Optical System and Image Pickup Apparatus Having the Same,”** Canon Kabushiki Kaisha, published November 21, 2013. Numerical Example 1 is on publication pages 17–18; architecture and definitions are principally in ¶¶0031–0059, with Table 1 on publication page 23.
- Canon Camera Museum, **“EF200-400mm f/4L IS USM Extender 1.4x.”** <https://global.canon/en/c-museum/product/ef428.html>
- Canon U.S.A., **EF 200-400mm f/4L IS USM Extender 1.4x specifications.** <https://www.usa.canon.com/support/p/ef-200-400mm-f-4l-is-usm-extender-1-4x>
- OHARA, **Optical Glass Type / comparative catalog.** <https://www.ohara-inc.co.jp/en/product/01000/> and <https://www.ohara-inc.co.jp/en/product/01002/>
- HOYA Optics Europe, **Glass Cross Reference Index.** <https://www.hoyaoptics.eu/glass-cross-reference-index>
- SCHOTT, **Optical Glass Datasheet Collection.** <https://media.schott.com/api/public/content/820eba3413cc4e788433a3751f8edba9?download=true&v=97b3ea2b>
- Nikon / HIKARI, **Optical Glass Catalog 2023.** <https://www.nikon.com/business/components/lineup/materials/optical-glass/assets/pdf/hikari_catalog2023.pdf>
- CDGM, **Optical Glass Database.** <https://www.cdgmgd.com/database/toWebDatabase.htm?k=Products_Data&url=database>
- SUMITA Optical Glass, **K-CaFK95 data sheet and catalog family.** <https://www.sumita-opt.co.jp/abbe/pdf/k-cafk95.pdf>
- Nikon, **CaF2 material constants,** used only as an independent check on the fluorite coordinate. <https://www.nikon.com/business/components/assets/pdf/caf2-e.pdf>
