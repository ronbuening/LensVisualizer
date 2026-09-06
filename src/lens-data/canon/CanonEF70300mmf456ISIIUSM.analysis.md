## Patent Reference and Design Identification

**Patent:** US 2017/0003486 A1\
**Application Number:** US 15/194,964\
**Priority:** July 1, 2015 — JP 2015-132590\
**Filed:** June 28, 2016\
**Published:** January 5, 2017\
**Inventor:** Suguru Inoue\
**Applicant:** Canon Inc.\
**Title:** *Zoom Lens and Image Pickup Apparatus Including the Same*\
**Embodiment analyzed:** Example 5

The prescription represented here is Example 5 of US 2017/0003486 A1, correlated to the production **CANON EF 70-300mm f/4-5.6 IS II USM**. The patent does not name that commercial lens, so the identification is a correlation rather than a manufacturer statement. Several independent features converge on the same product:

1. Example 5 contains 17 glass elements and five cemented junctions, giving 12 air-separated groups. Canon specifies the production lens as 17 elements in 12 groups.
2. The patent design points are 72, 144, and 290 mm, while the production lens is marketed as 70–300 mm. No scale factor is applied; the modeled prescription retains the patent values.
3. The patent f-numbers are 4.16, 5.06, and 5.83. The production lens is marketed as f/4–5.6. The exact design and marketed aperture values are therefore kept separate.
4. Example 5 divides the second lens unit into L2a and L2b, with L2b laterally movable for image stabilization (¶0053). Canon specifies optical IS for the production lens.
5. The fifth lens unit L5 is the focusing unit and moves toward the image side as focus changes from infinity to a close object (¶¶0047, 0052, 0055). Canon specifies Nano USM focus drive for the production lens.
6. The Example 5 element at E3 has $n_d=1.49700$ and $\nu_d=81.5$, consistent at the patent's published precision with OHARA S-FPL51 and other equivalent low-dispersion catalog coordinates. Canon states that the production lens contains one UD element. This is supporting correlation evidence; it does not establish Canon's glass supplier or prove that the production UD element is literally S-FPL51.
7. A constrained finite-conjugate reconstruction at Canon's 1.2 m production minimum focus gives a tele-end paraxial magnification of 0.2454× at the 290 mm design point, close to Canon's marketed 0.25× maximum at 300 mm. The reconstruction is a model result, not patent-published close-focus data.
8. The timing is consistent: the patent claims July 2015 priority, Canon marketed the production lens in December 2016, and the US application was published in January 2017.

The patent's numerical table is the authority for radii, thicknesses, $n_d$, $\nu_d$, focal lengths, f-numbers, image height, and zoom spacings. Canon's product literature is used only for commercial identity and marketed specifications.

## Optical Architecture

Example 5 is a positive-lead, six-unit zoom. In the patent's principal unit notation the power sequence is **positive – negative – positive – positive – negative – negative**: L1(+), complete L2(−), L3(+), L4(+), L5(−), and L6(−) (¶0051). In Examples 4 and 5 the second unit is subdivided into a very weak positive L2a and a strong negative L2b, the latter serving as the image-stabilization sub-unit.

The final data file contains 17 elements in 12 air-separated groups. Five junctions are cemented: E2/E3, E4/E5, E6/E7, E10/E11, and E15/E16. The aperture stop is the patent-published stop immediately in front of the L3 refractive elements; it is represented by exactly one `STO` surface.

Independent paraxial calculation from the final data arrays gives the following complete-unit powers. These are equivalent focal lengths of the air-bounded patent lens units, computed from each unit's own surfaces and internal spacings. They are distinct from the standalone element powers listed later and from full-system in-situ sensitivity.

| Unit | Computed focal length | Power | Functional position |
|---|---:|---:|---|
| L1 | +174.2138 mm | +5.7401 D | positive lead unit |
| L2a | +845.6264 mm | +1.1826 D | weak positive front sub-unit of L2 |
| L2b | −34.6250 mm | −28.8808 D | strong negative IS sub-unit |
| complete L2 | −36.3884 mm | −27.4813 D | net negative second unit |
| L3 | +57.2614 mm | +17.4638 D | positive stop-adjacent unit |
| L4 | +55.7026 mm | +17.9525 D | positive rear zoom unit |
| L5 | −71.9167 mm | −13.9050 D | negative focusing unit |
| L6 | −223.7581 mm | −4.4691 D | fixed rear negative unit |

During zooming from 72 to 290 mm, L1, L3, L4, and L5 move toward the object, while L2a, L2b, and L6 remain axially fixed in the modeled coordinates. The verified wide-to-tele movements are −70.00 mm for L1, −26.78 mm for L3, −42.26 mm for L4, and −51.69 mm for L5. No axial reversal occurs across the three published zoom stations. This matches the movement directions stated in ¶0052.

The strict geometric classification used here does not label the whole design “telephoto” merely because Canon markets it as a telephoto zoom. The computed total-length/EFL ratios are 2.6105 at 72 mm, 1.5826 at 144 mm, and 0.8896 at 290 mm. Only the 290 mm endpoint satisfies `TL/EFL < 1`. None of the three states is retrofocus because the normalized 38.00 mm rear spacing is smaller than the EFL at every state.

### Model normalization and aperture interpretation

No uniform scaling is applied: $s=1.0$. All radii and separations are retained at the patent scale. Example 5 is all-spherical, so there is no conic conversion and no aspheric-coefficient transformation.

The patent places a constant-aperture flare-cut stop `FS` after L6 (¶0046 and Fig. 9). The numerical table contains a neutral terminal plane at source surface 31. Because that plane has no refractive power and is inactive in the ordinary sequential model, it is omitted. Its incoming 0.20 mm air spacing is folded into the patent's 37.80 mm back-focus distance, giving a modeled 38.00 mm spacing from the last refracting surface to the image plane. This is a reference-plane normalization, not a correction to the patent.

The patent's “Effective diameter” column supplies the initial semi-diameter basis. The modeled semi-diameters are therefore source-backed proxies rather than claims about finished mechanical clear apertures. One surface is deliberately enlarged for ray containment: source surface 10 uses `sd = 12.15 mm` rather than half the tabulated 23.15 mm effective diameter (`11.575 mm`). With the unmodified proxy, the conservative off-axis bundle first clipped at the E6/E7 cemented interface. The enlarged trace/render semi-diameter moves first clipping to an external glass/air boundary. The radius, thickness, indices, and optical power at that interface are unchanged.

At the aperture stop, half of the patent effective diameter gives `sd = 12.22 mm`. That number is retained as the source geometric proxy, but the exact design f-numbers 4.16 / 5.06 / 5.83 govern wide-open pupil geometry. The f-number-consistent stop diameters are approximately 24.336 / 24.156 / 23.999 mm, showing why the tabulated 24.44 mm effective diameter should not be treated as an exact fixed iris diameter.

## Element-by-Element Analysis

The focal length on each element line below is the **standalone thick-element focal length in air** computed from that element's two optical faces and center thickness. Cemented-pair focal lengths and complete lens-unit powers are stated separately because those are different optical quantities.

### E1 — Plano-Convex Positive

**$n_d = 1.48749$, $\nu_d = 70.2$. Glass: S-FSL5 (OHARA representative catalog match). Standalone $f = +222.9502$ mm.**

E1 is the first and largest positive element in L1. Its positive standalone power supplies much of the positive lead behavior before the cemented E2/E3 pair. The plane rear face also leaves the following cemented group to shape much of L1's higher-order and chromatic balance without adding curvature at the E1 exit.

The S-FSL5 name and spectral fields in the data file are catalog-derived representative values. The patent itself publishes only the $n_d/\nu_d$ pair.

### E2 — Negative Meniscus, first component of J1

**$n_d = 1.83400$, $\nu_d = 37.2$. Glass: S-LAH60 (OHARA representative catalog match). Standalone $f = -173.2182$ mm.**

E2 begins the first cemented pair and contributes negative power inside the otherwise positive L1 unit. Its high index and substantially lower Abbe number than E3 give the pair a strong refractive/dispersion contrast.

E2 should not be interpreted in isolation: its standalone negative focal length is −173.2 mm, while the complete E2/E3 cemented pair has a weak **positive** net focal length of +812.8826 mm in the verified model.

### E3 — Positive Meniscus, second component of J1

**$n_d = 1.49700$, $\nu_d = 81.5$. Glass: S-FPL51 (OHARA representative catalog match). Standalone $f = +141.2668$ mm.**

E3 is the low-dispersion positive partner in J1. The representative OHARA catalog match carries $n_C=1.49514$, $n_F=1.50123$, $n_g=1.50451$, and project `dPgF = +0.0309` ($\Delta P_{g,F}$) in the data model. The line indices support explicit spectral modeling rather than an Abbe-only approximation.

Canon describes the production lens as using one UD element. E3's very high $\nu_d$ and representative S-FPL51 coordinate match make it the natural candidate in the patent-to-product correlation, but this remains an inference. Neither the patent nor Canon's product page identifies the commercial UD element by OHARA trade name.

### E4 — Positive Meniscus, first component of J2 / L2a

**$n_d = 1.53172$, $\nu_d = 48.8$. Glass: S-TIL6 (OHARA representative catalog match). Standalone $f = +86.3206$ mm.**

E4 is the positive component of the cemented L2a sub-unit. Its standalone power is appreciable, but it is paired with E5 so that the cemented assembly becomes only weakly positive.

The verified E4/E5 net focal length is +845.6264 mm, numerically the same as the patent's L2a focal length to source precision. L2a therefore acts primarily as a weak positive preconditioner ahead of the much stronger negative L2b sub-unit rather than as the main magnification-varying component of L2.

### E5 — Negative Meniscus, second component of J2 / L2a

**$n_d = 1.51823$, $\nu_d = 58.9$. Glass: S-NSL3 (OHARA representative catalog match). Standalone $f = -96.4861$ mm.**

E5 nearly cancels E4's positive standalone power, leaving the very weak positive L2a cemented group. The similar indices but different curvatures distribute this cancellation without requiring a high-index cemented boundary.

Because L2a remains axially fixed across the published zoom positions, its function is better understood from its relationship to L2b than from standalone power alone.

### E6 — Biconcave Negative, first component of J3 / L2b

**$n_d = 1.77250$, $\nu_d = 49.6$. Glass: S-LAH66 (OHARA representative catalog match). Standalone $f = -29.3322$ mm.**

E6 is the strongest individual negative element in L2b. Its large negative power is moderated by the cemented positive E7, but the E6/E7 pair remains strongly negative at −72.2821 mm.

The modeled semi-diameter at the cemented interface to E7 is the only one enlarged beyond the half-effective-diameter proxy, as described above. This is a ray-containment choice and does not modify E6's power.

### E7 — Positive Meniscus, second component of J3 / L2b

**$n_d = 1.85478$, $\nu_d = 24.8$. Glass: S-NBH56 (OHARA representative catalog match). Standalone $f = +47.8177$ mm.**

E7 supplies positive power inside the strong negative L2b doublet. Its high index and low Abbe number create a pronounced refractive and dispersion contrast with E6. The two-element J3 assembly is nevertheless net negative, so E7 is a balancing element within a negative functional group rather than a separate positive unit.

The complete L2b focal length is −34.6250 mm after the additional negative E8 is included. This strong negative sub-unit is the part that the patent makes laterally movable for image stabilization in Example 5.

### E8 — Biconcave Negative, rear element of L2b

**$n_d = 1.77250$, $\nu_d = 49.6$. Glass: S-LAH66 (OHARA representative catalog match). Standalone $f = -69.0393$ mm.**

E8 reinforces the negative power of J3 and brings the complete L2b sub-unit to −34.6250 mm. The shared S-LAH66 coordinates with E6 give the sub-unit two negative elements of the same catalog family around the positive E7 component.

Its position at the rear of the image-stabilization sub-unit also makes it the last powered surface before the long zoom-dependent interval to the stop/L3 region.

### E9 — Biconvex Positive, first refractive element of L3

**$n_d = 1.66672$, $\nu_d = 48.3$. Glass: S-BAH11 (OHARA representative catalog match). Standalone $f = +64.8383$ mm.**

E9 sits immediately behind the aperture stop and supplies strong positive convergence in L3. L3 as a whole has a verified focal length of +57.2614 mm, so E9 carries a substantial fraction of the unit's positive power.

The near-symmetric biconvex form places the stop-adjacent power in a compact region before the weak net-positive E10/E11 cemented pair.

### E10 — Biconvex Positive, first component of J4

**$n_d = 1.48749$, $\nu_d = 70.2$. Glass: S-FSL5 (OHARA representative catalog match). Standalone $f = +58.2212$ mm.**

E10 is a positive, low-index/high-Abbe component cemented to the much higher-index E11. The standalone element is strong, but the doublet's opposing powers nearly cancel.

The verified E10/E11 cemented focal length is +572.6415 mm. In situ, the pair therefore acts as a comparatively weak positive corrector within the much stronger positive L3 unit.

### E11 — Negative Meniscus, second component of J4

**$n_d = 2.00100$, $\nu_d = 29.1$. Glass: S-LAH99 (OHARA representative catalog match). Standalone $f = -63.1351$ mm.**

E11 opposes E10 with high-index, low-Abbe negative power. The contrast between E10 and E11 provides a strong chromatic and refractive balancing lever while preserving only modest net power in J4.

Its high index means that a description based only on surface curvature would understate its optical contribution; the element's standalone power is nearly equal in magnitude to E10's positive power.

### E12 — Negative Meniscus, front element of L4

**$n_d = 2.00100$, $\nu_d = 29.1$. Glass: S-LAH99 (OHARA representative catalog match). Standalone $f = -80.2817$ mm.**

E12 opens L4 with negative power, followed by two positive elements. This negative-positive-positive sequence lets the complete L4 remain strongly positive (+55.7026 mm) while distributing the unit's power across three separated elements.

The use of the same S-LAH99 coordinate family as E11 extends the high-index, low-Abbe component palette into the next zoom unit.

### E13 — Biconvex Positive, middle element of L4

**$n_d = 1.48749$, $\nu_d = 70.2$. Glass: S-FSL5 (OHARA representative catalog match). Standalone $f = +86.4298$ mm.**

E13 provides the first positive counterweight to E12. Its high Abbe number contrasts with the low-$\nu_d$ E12 despite the elements being air-spaced rather than cemented.

The combination of E12, E13, and E14 produces the verified L4 focal length of +55.7026 mm. L4 moves 42.26 mm objectward over the published zoom range.

### E14 — Biconvex Positive, rear element of L4

**$n_d = 1.67790$, $\nu_d = 55.3$. Glass: S-LAL12 (OHARA representative catalog match). Standalone $f = +55.8907$ mm.**

E14 is the strongest positive standalone element in L4 and closes the unit before the variable D25 gap to the focusing group. Its moderate-to-high index and intermediate dispersion complement the lower-index E13.

Because D25 is one of the two spacings altered by the constrained focus reconstruction, E14 also forms the fixed object-side boundary of L5's focus travel.

### E15 — Positive Meniscus, first component of J5 / L5 focus unit

**$n_d = 1.80809$, $\nu_d = 22.8$. Glass: S-NPH1 (OHARA representative catalog match). Standalone $f = +107.5900$ mm.**

E15 is the positive member of the cemented focus doublet. Its representative OHARA line data include $n_C=1.79801$, $n_F=1.83351$, $n_g=1.85590$, and project `dPgF = +0.0252` ($\Delta P_{g,F}$).

The positive E15 and negative E16 form a net **negative** cemented group with $f=-71.9167$ mm, which is also the complete L5 focal length. The distinction is important: E15's standalone positive power does not make L5 positive in situ.

### E16 — Biconcave Negative, second component of J5 / L5 focus unit

**$n_d = 1.51742$, $\nu_d = 52.4$. Glass: S-NSL36 (OHARA representative catalog match). Standalone $f = -43.3025$ mm.**

E16 dominates the sign of the focus doublet and gives L5 its negative net power. The two cemented elements occupy only 3.65 mm of axial glass thickness, consistent with the patent's design goal of keeping the focusing unit compact and light enough for rapid motion (¶¶0049–0055, 0074).

L5 moves both during zooming and during focusing. These two motions are separate: the published zoom path moves L5 objectward, while close focusing moves it imageward relative to its infinity position at each zoom setting.

### E17 — Negative Meniscus, L6

**$n_d = 1.48749$, $\nu_d = 70.2$. Glass: S-FSL5 (OHARA representative catalog match). Standalone $f = -223.7581$ mm.**

E17 is the single element of the fixed rear L6 unit, so its standalone focal length is also L6's unit focal length. It remains stationary during zooming while the preceding groups change position.

As the last refracting element, E17 establishes the final powered boundary before the normalized 38.00 mm image-space interval. The separate patent flare-cut plane behind it is not represented as an optical surface because it is neutral and inactive in the modeled sequential path.

## Glass Identification and Selection

The patent publishes only d-line refractive index and Abbe number. The final data file maps all 12 distinct coordinate pairs to representative current OHARA catalog entries consistent with the patent's published precision and resolves their dispersion through the catalog curves. These labels are **representative catalog matches**, not evidence that Canon purchased those specific OHARA melts; rounded patent coordinates do not always distinguish same-family variants or cross-vendor equivalents.

| Representative OHARA label | $n_d$ | $\nu_d$ | Catalog ΔPgF (SCHOTT normal line) | Elements |
|---|---:|---:|---:|---|
| S-FSL5 | 1.48749 | 70.2 | +0.0043 | E1, E10, E13, E17 |
| S-LAH60 | 1.83400 | 37.2 | −0.0037 | E2 |
| S-FPL51 | 1.49700 | 81.5 | +0.0309 | E3 |
| S-TIL6 | 1.53172 | 48.8 | +0.0014 | E4 |
| S-NSL3 | 1.51823 | 58.9 | +0.0010 | E5 |
| S-LAH66 | 1.77250 | 49.6 | −0.0084 | E6, E8 |
| S-NBH56 | 1.85478 | 24.8 | +0.0101 | E7 |
| S-BAH11 | 1.66672 | 48.3 | −0.0016 | E9 |
| S-LAH99 | 2.00100 | 29.1 | +0.0049 | E11, E12 |
| S-LAL12 | 1.67790 | 55.3 | −0.0035 | E14 |
| S-NPH1 | 1.80809 | 22.8 | +0.0252 | E15 |
| S-NSL36 | 1.51742 | 52.4 | +0.0008 | E16 |

The tabulated anomalous-dispersion values describe representative OHARA catalog materials only. The patent publishes neither line indices nor partial-dispersion values, so `nC`, `nF`, `ng`, and `dPgF` are not authored on the elements. Runtime chromatic analysis uses the compatible catalog curves without promoting a proxy to measured patent data.

The palette is deliberately broad. High-Abbe S-FPL51 coordinates at E3 are paired against a high-index, lower-Abbe E2; high-index/low-Abbe S-LAH99 coordinates appear in E11 and E12; the focus doublet combines the low-$\nu_d$ E15 coordinate with a substantially higher-$\nu_d$ E16 coordinate. These contrasts are consistent with chromatic balancing across the zoom, but they do not justify an “APO” classification. Neither the patent nor Canon markets this lens as apochromatic, and the representative catalog identifications are not vendor-procurement evidence.

## Focus Mechanism

The patent assigns focusing to L5. During focusing from infinity toward a close object, L5 moves toward the image plane (¶¶0047, 0052, 0055). The patent publishes no close-focus spacing table, so the final data file correctly labels the focus state **CONSTRAINED_RECONSTRUCTION** rather than `PUBLISHED`.

The reconstruction uses three constraints: only L5 moves; the adjacent gaps conserve `D25 + D28` at each zoom station; and Canon's 1.2 m closest-focusing-distance specification is interpreted in the conventional focal-plane-referenced sense for the model. A finite-conjugate matrix solution then sets the L5 translation required to bring a 1.2 m object into focus.

| Design zoom point | L5 imageward travel | D25 at close focus | D28 at close focus | Paraxial magnification |
|---:|---:|---:|---:|---:|
| 72 mm | +2.287968 mm | 14.137968 mm | 7.232032 mm | −0.066354× |
| 144 mm | +4.496202 mm | 10.226202 mm | 35.133798 mm | −0.128133× |
| 290 mm | +12.930456 mm | 15.350456 mm | 48.279544 mm | −0.245385× |

The 290 mm result is close to Canon's marketed 0.25× maximum magnification at 300 mm, but that agreement is a cross-check, not a fitted target. The model is anchored by the 1.2 m object distance and the patent's L5-only focus mechanism.

The close-focus states should therefore be read as mechanically constrained model states. Only the infinity-focus zoom spacings are directly published in Example 5.

## Chromatic Correction Strategy

The design's chromatic correction is distributed across several power-bearing pairs rather than concentrated in a single low-dispersion element. J1 combines a negative high-index/lower-Abbe E2 with a positive very-high-Abbe E3. J4 combines the high-Abbe positive E10 with the high-index, low-Abbe negative E11. L4 follows a low-Abbe negative E12 with two positive elements of higher Abbe number. L5 again uses a strong dispersion contrast across its cemented positive/negative pair.

The representative catalogs' SCHOTT-normal-line ΔPgF values show notable anomalous-dispersion departures at E3 (`+0.0309`), E15 (`+0.0252`), E7 (`+0.0101`), and E6/E8 (`−0.0084`). This supports wavelength-specific analysis of those representative coordinate matches. It does not establish that Canon used OHARA material, and it does not by itself make the complete lens apochromatic.

Canon's production literature states that the commercial lens contains one UD element and attributes reduced lateral chromatic aberration to it. The patent-to-production mapping makes E3 the strongest coordinate-level candidate for that role because of its $\nu_d=81.5$ and S-FPL51 match. That assignment remains an inference rather than a published element number.

## Conditional Expressions

The patent defines ten design conditions for the zoom architecture. Recalculation from the final data arrays reproduces the rounded Example 5 values and satisfies every stated main range.

| Condition | Patent range | Computed Example 5 value | Patent Table 1 |
|---|---|---:|---:|
| $f_3/f_w$ | $0.4 < f_3/f_w < 1.0$ | 0.795297 | 0.80 |
| $m_5/f_w$ | $-1.0 < m_5/f_w < -0.5$ | −0.717917 | −0.72 |
| $m_3/f_w$ | $-0.5 < m_3/f_w < -0.2$ | −0.371944 | −0.37 |
| $f_5/f_w$ | $-1.2 < f_5/f_w < -0.7$ | −0.998843 | −1.00 |
| $L5d/f_t$ | $0.005 < L5d/f_t < 0.017$ | 0.012586 | 0.013 |
| $(R_{5i}-R_{5o})/(R_{5i}+R_{5o})$ | $-2.9 < \cdots < -1.6$ | −1.870434 | −1.87 |
| $f_3/f_5$ | $-1.0 < f_3/f_5 < -0.6$ | −0.796219 | −0.80 |
| $(m_4-m_3)/f_w$ | $-0.50 < \cdots < -0.10$ | −0.215000 | −0.21 |
| $m_1/f_w$ | $-1.2 < m_1/f_w < -0.7$ | −0.972222 | −0.97 |
| $f_1/f_w$ | $1.6 < f_1/f_w < 3.0$ | 2.419637 | 2.42 |

The first four conditions chiefly constrain power distribution and zoom travel. Conditions (5) and (6) constrain the compact L5 focus unit, while conditions (7)–(10) relate L3/L5 power and the relative zoom motions of L1, L3, and L4. The final model therefore preserves not only the Example 5 surface prescription but also the architectural ratios used by the patent to define the design family.

## Image Stabilization

For Examples 4 and 5, the patent assigns image stabilization to L2b, which moves in a direction having a component perpendicular to the optical axis (¶0053). In the centered prescription L2b is the dominant negative part of the complete second unit: L2a is only +1.1826 D, L2b is −28.8808 D, and the complete L2 is −27.4813 D.

That power distribution is consistent with using L2b as an effective decentering correction group, although no decentered sensitivity or stabilization stroke is computed in this model. The data file represents the centered optical prescription and does not author lateral IS states.

Canon specifies optical image stabilization for the production EF 70-300mm f/4-5.6 IS II USM and rates the commercial system at four shutter-speed stops at 300 mm under its stated CIPA test condition. That performance figure belongs to the production control/mechanical system and is not derived from the patent prescription.

## Verification Summary

Independent sequential $y$–$\nu$ tracing and ABCD matrices from the final TypeScript arrays give EFLs of **72.0171, 143.9585, and 290.0234 mm** at the three published infinity-focus zoom states. These agree with the patent's 72 / 144 / 290 mm design values to the precision expected from the rounded surface table.

| Quantity | 72 mm state | 144 mm state | 290 mm state |
|---|---:|---:|---:|
| computed EFL | 72.0171 mm | 143.9585 mm | 290.0234 mm |
| published design f-number | 4.16 | 5.06 | 5.83 |
| total first-surface-to-image track | 188.00 mm | 227.83 mm | 258.00 mm |
| computed BFL from last refracting surface | 38.0215 mm | 37.9801 mm | 38.0159 mm |
| normalized authored rear spacing | 38.00 mm | 38.00 mm | 38.00 mm |
| computed entrance-pupil position | 53.7198 mm | 137.9825 mm | 226.0210 mm |

The surface-by-surface Petzval sum, using $\phi/(n n')$ at each refracting interface, is **+0.001005681655 mm⁻¹**, corresponding to a reciprocal magnitude of about **994.35 mm**. The omitted neutral flare-cut plane contributes zero power and does not change that result.

All six authored zoom/focus endpoint combinations retain positive element edge thickness. The minimum verified edge thickness is **1.4148 mm**. The maximum actual spherical rim-slope angle is **27.4322°**. The tightest shared-band cross-gap retains **0.1457 mm** edge clearance, equal to 11.39% of the corresponding vertex gap and therefore within the model's `gapSagFrac = 0.90` criterion.

A conservative 0.6-field, wide-open paraxial containment check confirms that no tested ray first clips at a cemented interface after the surface-10 semi-diameter refinement. First clipping, where present, occurs at external glass/air boundaries.

There are no aspherical surfaces, no diffractive surfaces, no folded path, and no uniform scaling in this prescription. No numerical patent typo is corrected in the optical prescription; the only geometric departure is the disclosed trace/render semi-diameter refinement at source surface 10 and the disclosed omission of the neutral flare-cut plane.

## Sources

1. Suguru Inoue, **US 2017/0003486 A1**, *Zoom Lens and Image Pickup Apparatus Including the Same*, Canon Inc., published January 5, 2017. Example 5; especially Fig. 9, ¶¶0044–0055, ¶¶0078–0084, and Table 1. https://patents.google.com/patent/US20170003486A1/en
2. Canon Camera Museum, **EF70-300mm f/4-5.6 IS II USM**. Production specifications, December 2016 release, optical construction, UD element, Nano USM, IS, MFD, and maximum magnification. https://global.canon/en/c-museum/product/ef459.html
3. Canon U.S.A., **EF 70-300mm f/4-5.6 IS II USM** product information. https://www.usa.canon.com/shop/p/ef-70-300mm-f-4-5-6-is-ii-usm
4. OHARA Corporation, **Optical Properties**. Definitions of spectral lines, Abbe number, relative partial dispersion, OHARA $\theta_{g,F}$ / $\Delta\theta_{g,F}$, and Sellmeier catalog data. https://oharacorp.com/optical-glass/optical-properties/
5. OHARA Corporation individual catalog pages used for the coordinate and line-index matches: S-FSL5, S-LAH60, S-FPL51, S-TIL6, S-NSL3, S-LAH66, S-NBH56, S-BAH11, S-LAH99, S-LAL12, S-NPH1, and S-NSL36. https://oharacorp.com/glass/
6. SCHOTT, **Optical Glass — Collection of Formulas and Wavelength Table**, anomalous partial-dispersion definition $\Delta P_{g,F}=P_{g,F}-(0.6438-0.001682\nu_d)$ (Eq. 10.8). https://media.schott.com/api/public/content/ff189abcb12f498aa221f54fd0b2055c
