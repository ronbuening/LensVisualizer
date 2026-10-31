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
**Example details:** Numerical Example 1 (Embodiment 1)

The prescription is Numerical Example 1 of US 2013/0308041 A1. The patent describes an infinity-focus zoom lens in which a negative-power magnification-conversion unit, EXT, can be inserted behind the aperture stop without changing total lens length. Embodiment 1 is explicitly a zoom lens, and the patent identifies L1 as the focusing unit, L2 as the negative variator, L3 as the positive compensator, L42 as the image-stabilizing subunit, and EXT as the built-in magnification-conversion unit (¶¶0031–0039, 0059–0063).

The selected production correlation is supported by several independent correspondences rather than by a manufacturer statement that this patent is the production formula:

1. Canon specifies 25 elements in 20 groups with the extender out and 33 elements in 24 groups with it in, with one rear filter included in both counts. The numerical source tables contain 24 elements in 19 groups and 32 elements in 23 groups respectively, without a separate filter prescription. No published source filter row is removed; the production-filter count is correlation context, not source optical data.
2. Canon specifies an eight-element, four-group built-in 1.4× extender. The inserted patent prescription adds exactly eight elements and four air-separated groups.
3. Canon specifies one fluorite element and four UD elements. Numerical Example 1 contains one `nd = 1.43387, νd = 95.1` element, consistent with CaF2, and four `nd = 1.49700, νd = 81.5` elements in the shared front/zoom system.
4. The patent gives design focal-length ranges of 205.00–389.99 mm with EXT out and 287.00–545.98 mm with EXT in, while Canon markets the lens as 200–400 mm and 280–560 mm. These are close production/design correspondences but are not related by a defensible uniform scale factor.
5. The patent architecture places a transverse image-stabilizing negative subunit ahead of an insertable rear extender, matching the production lens's defining optical features. The patent priority/publication dates also bracket Canon's May 2013 market introduction closely.

The data model therefore preserves the patent dimensions without scaling. Marketing values remain separate from design values: 200–400 mm f/4 and 280–560 mm f/5.6 are product specifications, while 205.00–389.99 mm f/4.12 and 287.00–545.98 mm f/5.77 are patent design values. The visible catalog entry supplies the canonical page and complete `EXT OUT` prescription. Its hidden supplemental member supplies the patent's complete `EXT IN` prescription, and their shared optical-configuration metadata exposes both states through one deterministic viewer switcher without creating a duplicate catalog lens.

Two source issues require explicit normalization. First, rendered inspection of PDF page 17 (printed page 5) shows surface 38 as `R = +174.462 mm`; parsed text can lose the leading `1` and read `+74.462`. Second, the inserted table prints `d56 = 68.46 mm`, while the same page gives `BF = 68.49 mm` and ¶0059 defines BF as the final lens surface to image plane. Claim 1 (PDF p. 23, printed p. 11) independently requires total lens length constant before and after insertion. The literal last gap gives a rounded-row track of 389.82 mm; the existing 68.49 mm correction gives 389.85 mm, matching EXT OUT and retaining the same 0.01 mm rounding residual against the stated 389.84 mm total. These independent source-summary and claim constraints support the retained correction, now recorded in the inserted member's source errata; the image gap is not fitted to remove its remaining paraxial focus residual. No aspherical surfaces are present, so no conic conversion or asphere scaling is applicable.

The production rear filter is not present or dimensioned in the selected numerical source tables, so no filter geometry is invented and no source plate is removed. No sensor cover glass, inactive dummy surface, flare-cutter plane, or mechanical component is added. The source refracting effective diameters remain the clear semi-diameter halves; its generic stop-diameter entry is recorded separately from the runtime stop authority. The stop is patent surface 30. Its generic effective-diameter entry is 39.75 mm; the source does not separately tabulate physical iris radii at the two zoom stations. The current OUT runtime instead retains its existing derived/fixed iris, radius 19.365397 mm, under the project's paraxial f-number convention. The printed diameter and real-ray envelope comparison are recorded separately below; fixed axial placement of SP does not by itself specify a physical iris schedule.

## Optical Architecture

Numerical Example 1 is a four-unit positive-negative-positive-positive zoom in the patent's functional grouping. L1 is positive and fixed during zooming; L2 is negative and moves toward the image side from wide to tele; L3 is positive and moves to compensate image-plane displacement; and L4 is fixed during zooming. The fixed fourth unit is subdivided into positive L41, the aperture stop, negative L42, positive L43, and positive L44. L42 is the transverse image-stabilizing unit. EXT is inserted between L43 and L44 (¶¶0036–0039).

The isolated functional-unit powers computed from the final prescription clarify the architecture without conflating them with individual element powers:

| Functional unit             | Isolated EFL | Interpretation                                              |
| --------------------------- | -----------: | ----------------------------------------------------------- |
| L1                          |  +191.690 mm | Positive front/focus unit                                   |
| L2                          |   −41.399 mm | Negative variator                                           |
| L3                          |   +81.427 mm | Positive compensator                                        |
| L41                         |  +132.254 mm | Positive fixed pre-stop subunit                             |
| L42                         |   −67.824 mm | Negative image-stabilizing subunit                          |
| L43 + L44, EXT OUT (`L43a`) |   +97.662 mm | Combined rear positive section when the extender is removed |
| L43, EXT IN                 |  +125.853 mm | Positive section ahead of the inserted extender             |
| EXTa                        |  +264.836 mm | Positive front extender subunit                             |
| EXTb                        |   −77.819 mm | Negative rear extender subunit                              |
| EXT, combined               |  −176.418 mm | Net negative magnification-conversion unit                  |
| L44                         |  +265.806 mm | Positive rear subunit after the extender                    |

These are isolated unit EFLs, not standalone-element powers and not a statement of each unit's effective power in the assembled zoom. The assembled-system behavior is established by the full trace: inserting EXT changes the computed wide-end EFL from 204.991 mm to 286.835 mm and the tele-end EFL from 389.974 mm to 545.647 mm, conversion ratios of approximately 1.3993× and 1.3992× from the rounded prescription.

Only three air gaps vary with zoom. From the patent wide to tele endpoints, `d8` changes 43.02→78.02 mm (+35.00 mm), `d18` changes 25.57→3.10 mm (−22.47 mm), and `d25` changes 38.33→25.80 mm (−12.53 mm). Their changes sum to zero, so the first-surface-to-image track remains constant. The endpoint data establish the net movements but do not provide enough intermediate positions to reconstruct the full convex L3 locus described by ¶0036.

The integrated extender is placed in the converging rear beam rather than behind the completed lens as a conventional external teleconverter. Its front section EXTa is positive and its rear section EXTb is negative, separated at the widest internal extender air gap as specified by ¶0039. The replacement segment from surface 41 to the final lens surface is 54.75 mm in either configuration, so the extender changes optical power while preserving axial package length.

## Element-by-Element Analysis

The element focal lengths below are standalone thick-element EFLs in air computed from each element's two physical surfaces and center thickness. They should not be read as the power of a cemented assembly or as the element's contribution after interaction with the rest of the zoom.

### L1 — E1 — Biconvex Positive

`nd = 1.48749, νd = 70.2.` Glass: `487702 crown class (qualified spectral proxy; source supplier and melt unspecified)`. Standalone `f = +480.295 mm`.

E1 is the first positive member of L1. Its moderate positive power precedes the higher-index negative E2 and the two low-dispersion positive members E3 and E4. L1 as a complete isolated unit is substantially stronger, at +191.690 mm, than E1 alone.

### L1 — E2 — Negative Meniscus

`nd = 1.80610, νd = 33.3.` Glass: `806333 dense-flint/lanthanum class (qualified spectral proxy; source supplier and melt unspecified)`. Standalone `f = −276.191 mm`.

E2 supplies negative power inside the otherwise positive L1. Its high index and lower Abbe number provide a materially different refractive/dispersion coordinate from the adjacent crown and low-dispersion elements, but the patent does not identify a vendor melt.

### L1 — E3 — Positive Meniscus

`nd = 1.43387, νd = 95.1.` Glass: `Fluorite (CaF2 spectral proxy; historical material and supplier unspecified)`. Standalone `f = +304.651 mm`.

The compatible CaF2 curve is a qualified spectral proxy. Canon's one-fluorite production specification and the single matching source coordinate support the product correlation, but the patent names neither this material nor its chemistry, supplier or melt; the numerical pair alone does not establish historical material identity.

### L1 — E4 — Positive Meniscus

`nd = 1.49700, νd = 81.5.` Glass: `497816 ED/UD crown class (qualified spectral proxy; source supplier and melt unspecified)`. Standalone `f = +278.180 mm`.

E4 is the first of four elements at the 497816 low-dispersion coordinate used in the common front/zoom train. The production specification's four-UD count makes the UD role a strong correlation clue, but the data intentionally do not assign a specific vendor glass.

### L2 — E5 — Biconvex Positive, cemented group C1

`nd = 1.90366, νd = 31.3.` Glass: `904313 high-index lanthanum-flint class (qualified spectral proxy; source supplier and melt unspecified)`. Standalone `f = +67.890 mm`.

E5 is cemented directly to E6. The strong positive standalone power of E5 is largely opposed by E6; the isolated cemented C1 pair has an EFL of about −1735.87 mm, much weaker than either element separately.

### L2 — E6 — Biconcave Negative, cemented group C1

`nd = 1.69680, νd = 55.5.` Glass: `697555 lanthanum-crown class (qualified spectral proxy; source supplier and melt unspecified)`. Standalone `f = −63.318 mm`.

E6 completes C1 and supplies the opposing negative power. C1's weak net power illustrates why element-level focal lengths cannot be substituted for the power of L2: the complete L2 unit, including C2, E9, E10, and internal spacings, is strongly negative at −41.399 mm.

### L2 — E7 — Negative Meniscus, cemented group C2

`nd = 1.69680, νd = 55.5.` Glass: `697555 lanthanum-crown class (qualified spectral proxy; source supplier and melt unspecified)`. Standalone `f = −81.217 mm`.

E7 begins the second cemented pair in L2 and is coupled to positive E8. The pair is net positive when isolated, despite being part of the overall negative variator.

### L2 — E8 — Positive Meniscus, cemented group C2

`nd = 1.90366, νd = 31.3.` Glass: `904313 high-index lanthanum-flint class (qualified spectral proxy; source supplier and melt unspecified)`. Standalone `f = +66.734 mm`.

E8 completes C2. The isolated pair has an EFL of +393.749 mm; its positive net power is outweighed within L2 by the remaining negative elements and the unit's internal separations.

### L2 — E9 — Biconcave Negative

`nd = 1.83481, νd = 42.7.` Glass: `835427 high-index lanthanum class (qualified spectral proxy; source supplier and melt unspecified)`. Standalone `f = −69.142 mm`.

E9 is the first air-spaced strongly negative singlet after the two cemented pairs. It contributes directly to the negative sign of L2's isolated unit power.

### L2 — E10 — Biconcave Negative

`nd = 1.83481, νd = 42.7.` Glass: `835427 high-index lanthanum class (qualified spectral proxy; source supplier and melt unspecified)`. Standalone `f = −82.897 mm`.

E10 is the final member of L2. Together with E9 it leaves the variator strongly negative after the relatively weak C1 and positive C2 cemented assemblies.

### L3 — E11 — Positive Meniscus

`nd = 1.49700, νd = 81.5.` Glass: `497816 ED/UD crown class (qualified spectral proxy; source supplier and melt unspecified)`. Standalone `f = +223.378 mm`.

E11 begins the positive compensating unit L3. Its material coordinate is shared with E4, E12, and E14, concentrating all four 497816 low-dispersion elements in L1/L3 rather than in the rear relay.

### L3 — E12 — Biconvex Positive

`nd = 1.49700, νd = 81.5.` Glass: `497816 ED/UD crown class (qualified spectral proxy; source supplier and melt unspecified)`. Standalone `f = +205.976 mm`.

E12 adds positive power ahead of the final cemented pair. L3's positive isolated EFL of +81.427 mm is substantially shorter than either E11 or E12 alone because all four elements act together.

### L3 — E13 — Negative Meniscus, cemented group C3

`nd = 1.90366, νd = 31.3.` Glass: `904313 high-index lanthanum-flint class (qualified spectral proxy; source supplier and melt unspecified)`. Standalone `f = −172.568 mm`.

E13 is cemented to E14. Its negative power and lower Abbe number contrast with E14's positive low-dispersion crown coordinate.

### L3 — E14 — Positive Meniscus, cemented group C3

`nd = 1.49700, νd = 81.5.` Glass: `497816 ED/UD crown class (qualified spectral proxy; source supplier and melt unspecified)`. Standalone `f = +113.014 mm`.

E14 completes C3. The isolated C3 cemented pair is net positive at +341.423 mm; in the complete L3 unit it combines with E11 and E12 to produce +81.427 mm.

### L41 — E15 — Negative Meniscus

`nd = 1.76182, νd = 26.5.` Glass: `762265 dense-flint class (qualified spectral proxy; source supplier and melt unspecified)`. Standalone `f = −273.677 mm`.

E15 begins the fixed fourth unit ahead of the stop. Its negative standalone power is paired, through a long air spacing, with positive E16; the complete L41 subunit is positive.

### L41 — E16 — Biconvex Positive

`nd = 1.59282, νd = 68.6.` Glass: `593686 low-dispersion class (qualified spectral proxy; source supplier and melt unspecified)`. Standalone `f = +96.667 mm`.

E16 supplies the dominant positive power in L41. The isolated L41 EFL is +132.254 mm. The aperture stop follows after the air gap from surface 29 to surface 30.

### L42 / IS — E17 — Biconvex Positive, cemented group C4

`nd = 1.80610, νd = 33.3.` Glass: `806333 dense-flint/lanthanum class (qualified spectral proxy; source supplier and melt unspecified)`. Standalone `f = +86.919 mm`.

E17 is the positive member of the cemented front pair in the negative image-stabilizing subunit. The patent identifies L42 as the unit that moves transversely to correct image displacement (¶0037).

### L42 / IS — E18 — Biconcave Negative, cemented group C4

`nd = 1.51633, νd = 64.1.` Glass: `S-BSL7 (Ohara compatible spectral proxy; historical material, supplier and melt unspecified)`. Standalone `f = −79.063 mm`.

E18 opposes E17 in C4. The isolated C4 pair is only weakly negative, with EFL about −1098.84 mm; the complete three-element L42 becomes much stronger because E19 is also negative.

### L42 / IS — E19 — Biconcave Negative

`nd = 1.65160, νd = 58.5.` Glass: `652585 lanthanum-crown class (qualified spectral proxy; source supplier and melt unspecified)`. Standalone `f = −71.227 mm`.

E19 is the air-spaced negative member that completes L42. The isolated L42 EFL is −67.824 mm. The axial data model remains centered; it does not simulate the patent's transverse IS displacement.

### L43 — E20 — Biconvex Positive

`nd = 1.62299, νd = 58.2.` Glass: `623582 crown class (qualified spectral proxy; source supplier and melt unspecified)`. Standalone `f = +78.500 mm`.

E20 is the first positive member of L43, the fixed rear subunit immediately ahead of the extender insertion position.

### L43 — E21 — Biconvex Positive

`nd = 1.62299, νd = 58.2.` Glass: `623582 crown class (qualified spectral proxy; source supplier and melt unspecified)`. Standalone `f = +116.241 mm`.

E21 reinforces the positive power of L43 with the same glass coordinate as E20. The two positive singlets precede negative E22.

### L43 — E22 — Biconcave Negative

`nd = 1.80610, νd = 33.3.` Glass: `806333 dense-flint/lanthanum class (qualified spectral proxy; source supplier and melt unspecified)`. Standalone `f = −70.483 mm`.

E22 completes the fixed subunit immediately in front of the extender slot. In the inserted state, L43 has an isolated EFL of +125.853 mm; in the removed state the patent groups L43 and L44 together as `L43a`, whose isolated EFL is +97.662 mm.

### L44 — E23/E31 — Biconvex Positive, cemented group C5

`nd = 1.57501, νd = 41.5.` Glass: `575415 light-flint class (qualified spectral proxy; source supplier and melt unspecified)`. Standalone `f = +72.811 mm`.

This physical L44 element is E23 in the canonical EXT-OUT member and E31 in the EXT-IN member because the inserted eight elements occupy E23–E30. It is cemented to the following negative element. The complete C5 pair is the whole L44 unit and has isolated EFL +265.806 mm.

### L44 — E24/E32 — Biconcave Negative, cemented group C5

`nd = 1.88300, νd = 40.8.` Glass: `883408 high-index lanthanum class (qualified spectral proxy; source supplier and melt unspecified)`. Standalone `f = −96.007 mm`.

This is E24 with EXT out and E32 with EXT in. Its negative standalone power reduces the preceding positive element's power, leaving the cemented L44 pair net positive.

### EXTa — E23 — Positive Meniscus, EXT-IN only

`nd = 1.54072, νd = 47.2.` Glass: `541472 light-flint class (qualified spectral proxy; source supplier and melt unspecified)`. Standalone `f = +52.687 mm`.

E23 is the first inserted extender element and is air-spaced from the following cemented pair. Although the next cemented assembly is net negative, E23 and the internal separation make EXTa as a complete isolated subunit positive at +264.836 mm.

### EXTa — E24 — Biconvex Positive, cemented group EXT-C1

`nd = 1.60342, νd = 38.0.` Glass: `603380 flint class (qualified spectral proxy; source supplier and melt unspecified)`. Standalone `f = +44.362 mm`.

E24 is cemented directly to strongly negative E25. The EXT-C1 pair is therefore net negative when isolated.

### EXTa — E25 — Biconcave Negative, cemented group EXT-C1

`nd = 1.90366, νd = 31.3.` Glass: `904313 high-index lanthanum-flint class (qualified spectral proxy; source supplier and melt unspecified)`. Standalone `f = −22.315 mm`.

E25 completes EXT-C1, whose isolated EFL is −51.855 mm. This does not contradict EXTa's positive +264.836 mm unit power: EXTa includes the preceding positive E23 and its air spacing, so cemented-pair power and subunit power are distinct quantities.

### EXTb — E26 — Negative Meniscus, cemented group EXT-C2

`nd = 1.88300, νd = 40.8.` Glass: `883408 high-index lanthanum class (qualified spectral proxy; source supplier and melt unspecified)`. Standalone `f = −25.101 mm`.

E26 begins the rear extender subunit across the widest internal extender air gap. It is the first negative member of a cemented negative-positive-negative triplet.

### EXTb — E27 — Biconvex Positive, cemented group EXT-C2

`nd = 1.72047, νd = 34.7.` Glass: `720347 KZFS/NBH-coordinate class (qualified spectral proxy; source supplier and melt unspecified)`. Standalone `f = +17.959 mm`.

E27 is the positive middle member of EXT-C2. The coordinate lies in KZFS/NBH catalog families, but no anomalous-partial-dispersion behavior is asserted because the selected patent publishes no line indices or `dPgF` for this element and no unique vendor melt is established.

### EXTb — E28 — Biconcave Negative, cemented group EXT-C2

`nd = 1.88300, νd = 40.8.` Glass: `883408 high-index lanthanum class (qualified spectral proxy; source supplier and melt unspecified)`. Standalone `f = −25.046 mm`.

E28 completes the negative-positive-negative triplet. The isolated EXT-C2 EFL is −47.018 mm, consistent with its two strongly negative outer members.

### EXTb — E29 — Biconvex Positive, cemented group EXT-C3

`nd = 1.61340, νd = 44.3.` Glass: `613443/445 KZFS/NBM-coordinate class (qualified spectral proxy; source supplier and melt unspecified)`. Standalone `f = +25.500 mm`.

E29 is the positive member of the final cemented extender pair. As with E27, the class label records a coordinate family rather than a proven anomalous-dispersion melt.

### EXTb — E30 — Biconcave Negative, cemented group EXT-C3

`nd = 1.59282, νd = 68.6.` Glass: `593686 low-dispersion class (qualified spectral proxy; source supplier and melt unspecified)`. Standalone `f = −30.867 mm`.

E30 completes EXT-C3. The pair is net positive at +108.861 mm, but when combined with EXT-C2 and the internal spacing, the full EXTb subunit is negative at −77.819 mm. The full eight-element extender is more strongly negative, at −176.418 mm, and produces the approximately 1.4× focal-length increase in the assembled lens.

## Glass Identification and Selection

The original table explicitly labels its source coordinates `nd` and `νd` (PDF page 17, printed page 5, ¶0059/0061), identifying the d-line reference by notation. It is vendor-silent and gives no individual C/F/g indices or partial-dispersion values. The data file therefore uses coordinate classes rather than asserting specific melts. The six-digit forms below summarize d-line index and Abbe-number neighborhoods; they are not composition identifiers. Catalog cross-checking found multiple vendors at many of the same coordinates, so those equivalences are not evidence that Canon used any one listed catalog glass.

| Patent `nd / νd` | Data-file identification                             | Use in the modeled lens             |
| ---------------- | ---------------------------------------------------- | ----------------------------------- |
| 1.48749 / 70.2   | 487702 crown class                                   | L1 E1                               |
| 1.80610 / 33.3   | 806333 dense-flint/lanthanum class                   | L1 E2; L42 E17; L43 E22             |
| 1.43387 / 95.1   | CaF2 spectral proxy; historical material unspecified | L1 E3                               |
| 1.49700 / 81.5   | 497816 ED/UD crown class                             | L1 E4; L3 E11, E12, E14             |
| 1.90366 / 31.3   | 904313 high-index lanthanum-flint class              | L2 E5, E8; L3 E13; EXTa E25         |
| 1.69680 / 55.5   | 697555 lanthanum-crown class                         | L2 E6, E7                           |
| 1.83481 / 42.7   | 835427 high-index lanthanum class                    | L2 E9, E10                          |
| 1.76182 / 26.5   | 762265 dense-flint class                             | L41 E15                             |
| 1.59282 / 68.6   | 593686 low-dispersion class                          | L41 E16; EXTb E30                   |
| 1.51633 / 64.1   | S-BSL7 qualified spectral proxy                      | L42 E18                             |
| 1.65160 / 58.5   | 652585 lanthanum-crown class                         | L42 E19                             |
| 1.62299 / 58.2   | 623582 crown class                                   | L43 E20, E21                        |
| 1.57501 / 41.5   | 575415 light-flint class                             | L44 positive element                |
| 1.88300 / 40.8   | 883408 high-index lanthanum class                    | L44 negative element; EXTb E26, E28 |
| 1.54072 / 47.2   | 541472 light-flint class                             | EXTa E23                            |
| 1.60342 / 38.0   | 603380 flint class                                   | EXTa E24                            |
| 1.72047 / 34.7   | 720347 KZFS/NBH-coordinate class                     | EXTb E27                            |
| 1.61340 / 44.3   | 613443/445 KZFS/NBM-coordinate class                 | EXTb E29                            |

The CaF2 curve is compatible with the patent's `1.43387 / 95.1` coordinate, while Canon's production specification calls for one fluorite element. This supports a spectral proxy and a production-correlation inference, not proof of historical chemistry or a particular supplied material. The four 497816 elements likewise align numerically and by count with Canon's four-UD production specification. Those correspondences support the production correlation and a low-dispersion strategy but do not identify an individual glass supplier.

The complete inserted configuration retains all 32 source index/Abbe pairs and 32 compatible spectral curves. Its ten rear media resolve to S-TIL2, J-F5, J-LASFH13, S-LAH58, N-KZFS8, S-LAH58, S-NBM51, FCD515, J-LF7 and S-LAH58 in order; those curve names qualify the spectral estimate rather than identify ten historical production melts.

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

## Original-figure rims and retained limits

The EXT OUT source figure is Figure 1 on PDF page 2 (sheet 1 of 11); the full Numerical Example 1 table is PDF page 17 (printed page 5). The PDF embeds 2560 × 3300 one-bit pages at 300 ppi. The approximately 1224 native-pixel optical vertex span over the 321.36 mm source stack gives about 3.81 px/mm; endpoint/stroke picks have ±1–2 native-pixel uncertainty and roughly ±0.5 mm practical semi-height uncertainty. A 600 ppi detail is magnification only. Published clear diameters remain authoritative; diagram edges do not replace them.

The source resolves outer shoulders at S4, S11 and S14. Their clear caps remain 47.445, 21.500 and 19.955 mm, while the drawn semi-diameters extend to 48.875, 23.675 and 20.320 mm. The last two adopt existing bonded-cap heights conservatively; the full source blank outline is taller, but the model does not inflate published bonded clear apertures or add opaque interface lands to fill it. Smaller cap/outer-height differences elsewhere approach the native stroke uncertainty and remain unchanged. All 24 elements, five cemented interfaces and both source zoom endpoints were inspected.

The source R/d, all printed index/Abbe pairs and clear diameters, the derived/fixed-iris authority, and the focus/zoom controls are retained. No asphere, hybrid layer, extra cement medium, source filter or rear plate occurs in this selected table. There is no inferred concave cut. The same leading shoulders belong to both configurations' identical source prefix. The separate inserted-state review checks all 56 radii, 55 refracting clear caps and 32 media against PDF pp. 17–18 and Fig. 3 on PDF p. 4 (sheet 3). Its native 300 ppi image gives roughly 3.8 px/mm; practical outer-rim uncertainty is about ±0.8 mm. The inserted bonded blocks retain their unequal published caps, with no additional land or inferred cut. Shared-prefix evidence is reused from the 2026-10-30 OUT review, while the additional rear prescription is checked in its distinct configuration.

Only the centered source geometry is modeled. Ordinary finite focus remains `NO_INTERNAL_RECONSTRUCTION`, and the patent's transverse IS motion has no published numerical decenter range. Intermediate zoom positions interpolate the three variable gaps between the two published endpoints; the patent supplies no intermediate compensator cam. A 65-position diagnostic clone reproduces the current OUT runtime geometry exactly. Both source endpoints satisfy the project aperture check, but only 16 of the 65 positions remain within 3% of their interpolated nominal f-number. The other 49 positions are iris-limited, with the worst sampled value f/4.43407 versus f/4.11999 (+7.62%) near the interpolated 311.95 mm label. No clear rim or trace failure limits those OUT samples. All 65 full-frame corner chiefs converge and clear the prescription.

The same OUT first-order sweep shows why these intermediate states are illustrative rather than a focus-preserving zoom reconstruction. At normalized zoom 0.578125, the actual paraxial EFL is 305.58423 mm, while the displayed linear focal-length label is 311.94734 mm; computed back focus is 82.13571 mm against the retained 68.49 mm image gap, a 13.64571 mm displacement. The published endpoint arrays instead give back focuses of 68.45663/68.45232 mm, close to the source's rounded 68.49 mm gap. Quantitative source support is confined to the published endpoint configurations.

The independently sampled EXT IN interpolation is more restrictive: 5 of 65 aperture positions are within 3%, 42 are clipped at source surface 46 and 18 are iris-limited, with a worst sampled value about f/7.47 versus nominal f/5.765 (+29.5%). Its two published endpoints and all 65 full-frame corner chiefs still pass their respective checks. At normalized zoom 0.578125 its actual paraxial EFL is 504.6980 mm versus the displayed 436.7228 mm label, with back focus 100.0205 mm against the 68.49 mm image gap (31.5305 mm displacement); these intermediate inserted states likewise are not focus-preserving. These intermediate results describe the existing reconstruction; neither the source diameters nor a replacement trajectory is inferred from them. Source fidelity, sampled centered runtime clearance and production correlation remain separate conclusions.

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

Independent reduced-angle y–ν tracing and an ABCD matrix calculation agree to numerical precision when applied to the final TypeScript surface arrays. The following is a diagnostic comparison using the generic 39.75 mm source effective-diameter entry as a trial opening. These figures describe that scenario, rather than the current derived runtime iris:

| Configuration | Zoom endpoint | Computed EFL | Patent EFL | F/# from the 39.75 mm stop | Patent F/# |
| ------------- | ------------- | -----------: | ---------: | -------------------------: | ---------: |
| EXT OUT       | Wide          |  204.9911 mm |  205.00 mm |                     4.1195 |       4.12 |
| EXT OUT       | Tele          |  389.9736 mm |  389.99 mm |                     4.1200 |       4.12 |
| EXT IN        | Wide          |  286.8354 mm |  287.00 mm |                     5.7642 |       5.77 |
| EXT IN        | Tele          |  545.6471 mm |  545.98 mm |                     5.7646 |       5.77 |

Under the printed-radius diagnostic, the nominal f/4.12 collimated input rays reach stop heights 19.87226/19.87491 mm at the OUT endpoints. A 19.875 mm trial opening reproduces the rounded source real-beam ratio, but yields a paraxial stop f-number near 4.0144. This convention-dependent agreement and the fixed axial stop position do not independently establish a physical station schedule. The existing stop model and all aperture controls are therefore preserved.

The current OUT model actually uses a fixed radius of 19.365397 mm. Its paraxial readout remains f/4.12005 wide and f/4.11995 tele. Exact collimated axial input rays are limited by that iris to radii 24.27519/46.17337 mm, giving EFL divided by the admitted real-beam diameter of about 4.22224/4.22293. This latter ratio is a separate diagnostic, not a replacement for the project's paraxial f-number definition. The former statement that the current iris was 19.872 mm confused nominal-ray stop height with runtime iris radius. The independently checked EXT IN member retains the same 19.365397 mm radius: its current paraxial stop f-numbers are 5.76501/5.76459, while EFL divided by the actual collimated transmitted-beam diameter is about 5.90799/5.90868. A printed-radius diagnostic instead gives real-beam ratios 5.76521/5.76481 and paraxial values 5.61719/5.61679. These comparisons preserve the distinction between the two aperture conventions and do not supply a physical iris schedule.

The rounded prescription sums to 389.85 mm from the first surface to the image plane in each normalized endpoint, while the patent summary prints 389.84 mm. The 0.01 mm difference is consistent with independently rounded row values. Gaussian back focal distances from the rounded arrays are 68.4566 and 68.4523 mm with EXT out and 68.4083 and 68.3998 mm with EXT in; these are calculation results and do not replace the patent's published 68.49 mm BF.

Petzval curvature was computed surface by surface as `φ/(n·n′)`. The EXT-OUT sum is `+4.64825×10⁻⁴ mm⁻¹`; with EXT inserted it is `+6.13188×10⁻⁵ mm⁻¹`. The sum is independent of zoom spacing in this all-spherical prescription because only air gaps vary with zoom. The smaller magnitude with EXT in is a first-order Petzval result, not a complete prediction of field curvature or astigmatism.

The patent effective diameters also pass the current geometry checks when used as clear semi-diameters. The minimum modeled element edge thickness is 1.2562 mm at the element spanning surfaces 38–39. Maximum spherical rim slope is 23.709° with EXT out and 30.259° with EXT in. The tightest shared-band air-gap case is surfaces 16→17, with a sag-intrusion fraction of 0.895889 against the 0.90 project limit; this is why the published clear diameter at that location is retained without enlargement.

Under the project's strict first-order terminology, only the telephoto endpoints satisfy `TL/EFL < 1`: EXT OUT tele is marginally telephoto (`389.84/389.974 ≈ 0.99966`), while EXT IN tele is clearly telephoto (`389.84/545.647 ≈ 0.71445`). Neither state is retrofocus because the 68.49 mm back focus is always shorter than the system EFL. No blanket “telephoto” classification is therefore applied to the entire zoom range.

## Sources and References

- Takahiro Hatada, **US 2013/0308041 A1, “Optical System and Image Pickup Apparatus Having the Same,”** Canon Kabushiki Kaisha, published November 21, 2013. Numerical Example 1 is on PDF pages 17–18 (printed pages 5–6); architecture and definitions are principally in ¶¶0031–0059, with Table 1 on PDF page 23 (printed page 11).
- Canon Camera Museum, **“EF200-400mm f/4L IS USM Extender 1.4x.”** <https://global.canon/en/c-museum/product/ef428.html>
- Canon U.S.A., **EF 200-400mm f/4L IS USM Extender 1.4x specifications.** <https://www.usa.canon.com/support/p/ef-200-400mm-f-4l-is-usm-extender-1-4x>
- OHARA, **Optical Glass Type / comparative catalog.** <https://www.ohara-inc.co.jp/en/product/01000/> and <https://www.ohara-inc.co.jp/en/product/01002/>
- HOYA Optics Europe, **Glass Cross Reference Index.** <https://www.hoyaoptics.eu/glass-cross-reference-index>
- SCHOTT, **Optical Glass Datasheet Collection.** <https://media.schott.com/api/public/content/820eba3413cc4e788433a3751f8edba9?download=true&v=97b3ea2b>
- Nikon / HIKARI, **Optical Glass Catalog 2023.** <https://www.nikon.com/business/components/lineup/materials/optical-glass/assets/pdf/hikari_catalog2023.pdf>
- CDGM, **Optical Glass Database.** <https://www.cdgmgd.com/database/toWebDatabase.htm?k=Products_Data&url=database>
- SUMITA Optical Glass, **K-CaFK95 data sheet and catalog family.** <https://www.sumita-opt.co.jp/abbe/pdf/k-cafk95.pdf>
- Nikon, **CaF2 material constants,** used only as an independent check on the fluorite coordinate. <https://www.nikon.com/business/components/assets/pdf/caf2-e.pdf>

## October 31, 2026 — Shared E18 Catalog-Proxy Followup

Both distinct configurations retain their completed October 30 original shape/glass review dates. This shared material followup does not claim a new shape inspection. The controlling original is [US 2013/0308041 A1](../../../patents/US20130308041A1.pdf), Numerical Example 1: PDF p. 17 (printed p. 5), paragraph 0059 and the surface-table nd/νd headers establish the d-reference notation. Row 32 directly prints E18 at 1.51633 / 64.1. The inserted-state table on PDF p. 18 (printed p. 6) explicitly reuses rows 1–40, so the same E18 applies to EXT OUT and EXT IN. No source material name, individual C/F/g index, partial-dispersion value or APD designation further constrains this medium. No alternate publication replaces this controlling table.

The [official OHARA S-BSL7 detailed sheet, 25-04](https://www.ohara-gmbh.com/fileadmin/user_upload/export-data/pdf/product_datasheets/S-BSL7_English_.pdf), checked October 31, publishes the same Sellmeier coefficients as the existing catalog entry, with λ in micrometres and denominator constants in µm². Its evaluated nd = 1.516329925, νd = 64.142022 and PgF = 0.535285 give source residuals −0.000000075 / +0.042022. The previous N-BK7 curve gives +0.000470035 / +0.067336, so S-BSL7 is the closer existing index/Abbe proxy. Other compatible crown curves remain possible; the numerical advantage does not establish an OHARA production supplier, historical material or melt. No new duplicate catalog row or per-lens spectral anchor is introduced.

E18 is explicitly labelled S-BSL7 in both configurations. Coverage stays 24/24 in EXT OUT and 32/32 in EXT IN. Every source pair, partial/APD field, radius, thickness, clear cap, shoulder, iris rule, image-plane correction and zoom/focus control is unchanged. Pure parsed-data comparison excluding the two glass labels and sampled d-line runtime equality support that limited change. Earlier endpoint-only quantitative scope, interpolated defocus/aperture restrictions and unknown finite-focus/IS prescriptions remain applicable.
